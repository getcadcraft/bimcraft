/* SPDX-License-Identifier: Apache-2.0 */
/**
 * hazard.js — hazard playback: a flood rising through the rooms, wind on the storeys, an earthquake shaking them (0.8 EG.47, session bim-sim_PART_2).
 * No DOM: tools/bimcraft-test/hazard-test.mjs (node bin/test-bimcraft.mjs --hazard) runs it in Node. SI units, seconds.
 *
 * Three small, honest models, each with its assumptions said; none is a design check against a code.
 *   FLOOD  quasi-static: the water outside follows the person's hydrograph; it enters a room through an opening whose sill it has passed, and any
 *          room joined to wet rooms by openings below the water stands at the same level (the water has time to equalise). A room is wet to
 *          depth = water level − its floor. Hydrostatic push on the outside of a wall is ½ ρ g d² per metre of wall.
 *   WIND   a mean speed at 10 m scaled up the height by a power law V(z) = V10 (z/10)^α; pressure q = ½ ρ V² (Bernoulli); the force on a storey is
 *          q(z) · G · (Cp,windward + Cp,leeward) · width · height with the person's gust factor G and pressure coefficients (defaults are the
 *          textbook 0.8 and 0.5 for a flat-faced block). Shear and overturning moment by storey; the sway follows from the storey stiffness.
 *   QUAKE  a shear building: one mass per floor, one storey stiffness between floors, damping as a fraction of critical in two modes (Rayleigh),
 *          Newmark average acceleration (unconditionally stable) through a ground acceleration record. The period is the person's (or found from
 *          the stiffness); mass comes from floor area × a load per square metre the person sets. Drift, floor acceleration and base shear are
 *          read back from the run. A ground motion is the person's record, or a made one (a Ricker pulse, or filtered noise) at a peak acceleration.
 *
 *   floodRun({ rooms, openings, hydrograph, dt }) → { times, level, rooms: [{ id, firstWet, maxDepth, wetFor, depth: [per sample] }], wetCount, peak }
 *   wallPush(depth_m) → N per metre of wall                                       ½ ρ g d²  (ρ = 1000 kg/m³)
 *   windRun({ V10, alpha, G, cpWind, cpLee, storeys, rho }) → { storeys: [{ z, q, force, shear, moment }], base: { shear, moment } }
 *   shearBuilding({ m: [kg per floor, bottom first], k: [N/m per storey] }) → { n, modes: [{ omega, period, shape }], K, M }
 *   uniformFor(m, T1) → k   the storey stiffness that gives a building of these masses the first period T1
 *   groundMotion({ kind: 'ricker' | 'noise', pga (m/s²), duration, dt, f, seed }) → Float64Array of accelerations
 *   quakeRun(building, accel, { dt, zeta }) → { t, u: [floor][step], drift, peak: { drift, ratio, acc, shear } }
 *   staticSway(building, forces) → floor displacements (m) under static forces at the floors
 */
export const RHO_WATER = 1000, RHO_AIR = 1.225, G = 9.80665;

// --------------------------------------------------------------------------------------------------------------------------------- flood
/**
 * rooms: [{ id, name, floor (m, the floor's top above the datum), area_m2 }]; openings: [{ a, b (room ids; b = null is outside), sill (m above the floor of the
 * higher of the two rooms, or the outside ground for b = null: the opening's lowest edge) }]; hydrograph: [[seconds, water level m]] rising or falling, linear between points.
 */
export function floodRun({ rooms, openings = [], hydrograph, dt = 60 }) {
  const pts = (hydrograph || []).slice().sort((x, y) => x[0] - y[0]);
  if (pts.length < 2) return { ok: false, reason: 'nohydrograph' };
  const T = pts[pts.length - 1][0], n = Math.floor(T / dt) + 1, times = Array.from({ length: n }, (_, i) => i * dt);
  const at = (t) => { if (t <= pts[0][0]) return pts[0][1]; for (let i = 1; i < pts.length; i++) if (t <= pts[i][0]) { const f = (t - pts[i - 1][0]) / Math.max(1e-9, pts[i][0] - pts[i - 1][0]); return pts[i - 1][1] + f * (pts[i][1] - pts[i - 1][1]); } return pts[pts.length - 1][1]; };
  const level = times.map(at), byId = new Map(rooms.map((r) => [r.id, r]));
  const entry = (o) => { const base = o.b === null ? (byId.get(o.a)?.floor ?? 0) : Math.max(byId.get(o.a)?.floor ?? 0, byId.get(o.b)?.floor ?? 0); return base + (o.sill || 0); };
  const depth = rooms.map(() => new Float64Array(n));
  for (let i = 0; i < n; i++) {
    const w = level[i], wet = new Set(), queue = [];
    for (const o of openings) if (o.b === null && w > entry(o) + 1e-9 && byId.get(o.a) && w > byId.get(o.a).floor) { if (!wet.has(o.a)) { wet.add(o.a); queue.push(o.a); } }
    while (queue.length) {
      const cur = queue.shift();
      for (const o of openings) {
        if (o.b === null) continue;
        const other = o.a === cur ? o.b : o.b === cur ? o.a : null;
        if (other === null || wet.has(other)) continue;
        if (w > entry(o) + 1e-9 && w > byId.get(other).floor) { wet.add(other); queue.push(other); }
      }
    }
    rooms.forEach((r, k) => { if (wet.has(r.id)) depth[k][i] = Math.max(0, w - r.floor); });
  }
  const out = rooms.map((r, k) => {
    let first = null, max = 0, wetFor = 0;
    for (let i = 0; i < n; i++) { if (depth[k][i] > 0) { if (first === null) first = times[i]; wetFor += dt; } if (depth[k][i] > max) max = depth[k][i]; }
    return { id: r.id, name: r.name, firstWet: first, maxDepth: Math.round(max * 1000) / 1000, wetFor, depth: depth[k] };
  });
  return { ok: true, times, level, dt, rooms: out, wetCount: out.filter((x) => x.firstWet !== null).length, peak: Math.max(...level) };
}
export const wallPush = (d) => 0.5 * RHO_WATER * G * Math.max(0, d) ** 2;

// ---------------------------------------------------------------------------------------------------------------------------------- wind
/** storeys: [{ z (m, the middle of the storey above the ground), h (m, its height), width (m, across the wind) }], bottom first. */
export function windRun({ V10, alpha = 0.143, G: gust = 1.2, cpWind = 0.8, cpLee = 0.5, storeys, rho = RHO_AIR }) {
  if (!(V10 > 0) || !storeys?.length) return { ok: false, reason: 'nowind' };
  const rows = storeys.map((s) => { const z = Math.max(s.z, 5), V = V10 * Math.pow(z / 10, alpha), q = 0.5 * rho * V * V; return { z: s.z, h: s.h, V, q, force: q * gust * (cpWind + cpLee) * s.width * s.h }; });
  let shear = 0, moment = 0;
  for (let i = rows.length - 1; i >= 0; i--) { shear += rows[i].force; rows[i].shear = shear; moment += rows[i].force * storeys[i].z; rows[i].moment = moment; }
  return { ok: true, storeys: rows, base: { shear, moment }, floors: rows.map((r) => r.force) };
}

// -------------------------------------------------------------------------------------------------------------------------------- quake
function jacobi(A, n) {   // symmetric eigenproblem, cyclic Jacobi: eigenvalues ascending, eigenvectors as columns
  const a = A.map((r) => r.slice()), v = Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => (i === j ? 1 : 0)));
  for (let sweep = 0; sweep < 100; sweep++) {
    let off = 0;
    for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) off += a[i][j] * a[i][j];
    if (off < 1e-24) break;
    for (let p = 0; p < n; p++) for (let q = p + 1; q < n; q++) {
      if (Math.abs(a[p][q]) < 1e-300) continue;
      const th = (a[q][q] - a[p][p]) / (2 * a[p][q]), t = Math.sign(th || 1) / (Math.abs(th) + Math.sqrt(th * th + 1)), c = 1 / Math.sqrt(t * t + 1), s = t * c;
      for (let k = 0; k < n; k++) { const kp = a[k][p], kq = a[k][q]; a[k][p] = c * kp - s * kq; a[k][q] = s * kp + c * kq; }
      for (let k = 0; k < n; k++) { const pk = a[p][k], qk = a[q][k]; a[p][k] = c * pk - s * qk; a[q][k] = s * pk + c * qk; }
      for (let k = 0; k < n; k++) { const kp = v[k][p], kq = v[k][q]; v[k][p] = c * kp - s * kq; v[k][q] = s * kp + c * kq; }
    }
  }
  const idx = Array.from({ length: n }, (_, i) => i).sort((x, y) => a[x][x] - a[y][y]);
  return { values: idx.map((i) => a[i][i]), vectors: idx.map((i) => v.map((r) => r[i])) };
}

/** Floors 1…n above a fixed base: m[i] the mass of floor i, k[i] the stiffness of the storey below it (k[0] between the ground and floor 1). */
export function shearBuilding({ m, k }) {
  const n = m.length;
  if (!n || k.length !== n || m.some((x) => !(x > 0)) || k.some((x) => !(x > 0))) return { ok: false, reason: 'badbuilding' };
  const K = Array.from({ length: n }, () => new Array(n).fill(0));
  for (let i = 0; i < n; i++) { K[i][i] += k[i]; if (i + 1 < n) { K[i][i] += k[i + 1]; K[i][i + 1] -= k[i + 1]; K[i + 1][i] -= k[i + 1]; } }
  return buildingFromK({ m, K, k });
}
/**
 * 0.8 EG.47 (bim-sim_PART_3): a building from a full floor stiffness matrix K (N/m, n × n, symmetric, floors bottom first) and floor masses m (kg), for example the
 * frame solver's condensed stiffness (hazard-frame.js). Same shape as shearBuilding's, with `full: true` so quakeRun solves the dense system. k = the storey
 * springs read from K (for the base shear and the drift check).
 */
export function buildingFromK({ m, K, k = null }) {
  const n = m.length;
  const S = K.map((row, i) => row.map((x, j) => x / Math.sqrt(m[i] * m[j])));
  const { values, vectors } = jacobi(S, n);
  const modes = values.map((l, j) => {
    const shape = vectors[j].map((x, i) => x / Math.sqrt(m[i]));
    const top = shape[n - 1] || 1, sh = shape.map((x) => x / top);   // top floor = 1
    const w = Math.sqrt(Math.max(l, 0));
    const L = m.reduce((s, mi, i) => s + mi * sh[i], 0), Mn = m.reduce((s, mi, i) => s + mi * sh[i] * sh[i], 0);
    return { omega: w, period: w > 0 ? 2 * Math.PI / w : Infinity, shape: sh, gamma: L / Mn, effMass: L * L / Mn };
  });
  return { ok: true, n, m, k: k || m.map((_, i) => (i === 0 ? K[0].reduce((s, x) => s + x, 0) : -K[i][i - 1])), K, modes, totalMass: m.reduce((s, x) => s + x, 0), full: k === null };
}
/** The storey stiffness (the same for every storey) that gives these masses the first period T1. */
export function uniformFor(m, T1) {
  const unit = shearBuilding({ m, k: m.map(() => 1) });
  return (2 * Math.PI / T1) ** 2 / unit.modes[0].omega ** 2;   // ω ∝ √k, so k = (ω wanted / ω for k = 1)²
}

function mulberry(seed) { let a = (seed >>> 0) || 1; return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
const gauss = (rnd) => Math.sqrt(-2 * Math.log(1 - rnd())) * Math.cos(2 * Math.PI * rnd());

/** A ground acceleration record (m/s²) with peak `pga`: 'ricker' (a pulse of peak frequency f, centred at 1.5/f) or 'noise' (Kanai–Tajimi filtered noise, ground frequency f, with a rise–hold–fall envelope). */
export function groundMotion({ kind = 'ricker', pga = 2, duration = 20, dt = 0.01, f = 1.5, seed = 1 } = {}) {
  const n = Math.floor(duration / dt) + 1, a = new Float64Array(n);
  if (kind === 'ricker') {
    const t0 = 1.5 / f;
    for (let i = 0; i < n; i++) { const x = Math.PI * f * (i * dt - t0), e = x * x; a[i] = (1 - 2 * e) * Math.exp(-e); }
  } else {
    const rnd = mulberry(seed), wg = 2 * Math.PI * f, zg = 0.6, w = new Float64Array(n);
    for (let i = 0; i < n; i++) w[i] = gauss(rnd);
    let x = 0, v = 0;   // ground filter: x'' + 2 zg wg x' + wg² x = w  (the filtered output is the acceleration)
    for (let i = 0; i < n; i++) { const acc = w[i] * wg * 2 - 2 * zg * wg * v - wg * wg * x; v += acc * dt; x += v * dt; a[i] = -(2 * zg * wg * v + wg * wg * x); }
    for (let i = 0; i < n; i++) { const t = i * dt, rise = duration * 0.15, fall = duration * 0.6; a[i] *= t < rise ? t / rise : t < fall ? 1 : Math.max(0, 1 - (t - fall) / (duration - fall)); }
  }
  let pk = 0;
  for (const v of a) pk = Math.max(pk, Math.abs(v));
  if (pk > 0) for (let i = 0; i < n; i++) a[i] *= pga / pk;
  return a;
}

/** Newmark average-acceleration time history of M u'' + C u' + K u = −M 1 ag(t), Rayleigh damping `zeta` at the first and second (or highest) modes. */
export function quakeRun(b, accel, { dt = 0.01, zeta = 0.05, keep = 4 } = {}) {
  if (!b?.ok) return { ok: false, reason: 'badbuilding' };
  const n = b.n, w1 = b.modes[0].omega, w2 = b.modes[Math.min(1, n - 1)].omega;
  let a0 = 0, a1 = 0;
  if (n === 1) a0 = 2 * zeta * w1; else { a0 = 2 * zeta * w1 * w2 / (w1 + w2); a1 = 2 * zeta / (w1 + w2); }
  const m = b.m, C = b.K.map((row, i) => row.map((x, j) => a1 * x + (i === j ? a0 * m[i] : 0)));
  const beta = 0.25, gam = 0.5, c1 = 1 / (beta * dt * dt), c2 = gam / (beta * dt);
  // effective stiffness K* = K + c1 M + c2 C. A shear building is tridiagonal (Thomas algorithm); a full matrix (buildingFromK, e.g. a frame's condensed
  // stiffness) is factored once (Cholesky: K* is symmetric positive definite) and solved by substitution each step.
  const diag = new Float64Array(n), up = new Float64Array(n), lo = new Float64Array(n);
  let solve;
  if (b.full) {
    const L = Array.from({ length: n }, () => new Float64Array(n));
    const Ks = b.K.map((row, i) => row.map((x, j) => x + c2 * C[i][j] + (i === j ? c1 * m[i] : 0)));
    for (let i = 0; i < n; i++) for (let j = 0; j <= i; j++) {
      let sum = Ks[i][j];
      for (let q = 0; q < j; q++) sum -= L[i][q] * L[j][q];
      if (i === j) L[i][i] = Math.sqrt(Math.max(sum, 1e-300)); else L[i][j] = sum / L[j][j];
    }
    solve = (rhs) => {
      const y = new Float64Array(n), x = new Float64Array(n);
      for (let i = 0; i < n; i++) { let sum = rhs[i]; for (let q = 0; q < i; q++) sum -= L[i][q] * y[q]; y[i] = sum / L[i][i]; }
      for (let i = n - 1; i >= 0; i--) { let sum = y[i]; for (let q = i + 1; q < n; q++) sum -= L[q][i] * x[q]; x[i] = sum / L[i][i]; }
      return x;
    };
  } else {
    for (let i = 0; i < n; i++) { diag[i] = b.K[i][i] + c1 * m[i] + c2 * C[i][i]; if (i + 1 < n) { up[i] = b.K[i][i + 1] + c2 * C[i][i + 1]; lo[i + 1] = b.K[i + 1][i] + c2 * C[i + 1][i]; } }
    solve = (rhs) => {
      const c = new Float64Array(n), d = new Float64Array(n), x = new Float64Array(n);
      c[0] = n > 1 ? up[0] / diag[0] : 0; d[0] = rhs[0] / diag[0];
      for (let i = 1; i < n; i++) { const den = diag[i] - lo[i] * c[i - 1]; c[i] = i + 1 < n ? up[i] / den : 0; d[i] = (rhs[i] - lo[i] * d[i - 1]) / den; }
      x[n - 1] = d[n - 1];
      for (let i = n - 2; i >= 0; i--) x[i] = d[i] - c[i] * x[i + 1];
      return x;
    };
  }
  const mul = (A, x) => A.map((row) => row.reduce((s, v, j) => s + v * x[j], 0));
  let u = new Float64Array(n), v = new Float64Array(n), acc = new Float64Array(n);
  for (let i = 0; i < n; i++) acc[i] = -accel[0];
  const steps = accel.length, hist = Array.from({ length: n }, () => []), t = [], accAbs = Array.from({ length: n }, () => 0), shearHist = [];
  const peakDrift = new Float64Array(n);
  let peakShear = 0;
  for (let s = 0; s < steps; s++) {
    if (s % keep === 0) { t.push(s * dt); for (let i = 0; i < n; i++) hist[i].push(u[i]); }
    // base shear = Σ over floors of m (u'' + ag) = the storey 0 spring force
    const sh = b.full ? acc.reduce((q, a1, i) => q + m[i] * (a1 + accel[s]), 0) : b.k[0] * u[0]; peakShear = Math.max(peakShear, Math.abs(sh)); if (s % keep === 0) shearHist.push(sh);
    for (let i = 0; i < n; i++) { const d = i === 0 ? u[0] : u[i] - u[i - 1]; peakDrift[i] = Math.max(peakDrift[i], Math.abs(d)); accAbs[i] = Math.max(accAbs[i], Math.abs(acc[i] + accel[s])); }
    if (s === steps - 1) break;
    const ag = accel[s + 1];
    const cu = new Float64Array(n), cv = new Float64Array(n);
    for (let i = 0; i < n; i++) { cu[i] = c1 * u[i] + (1 / (beta * dt)) * v[i] + (1 / (2 * beta) - 1) * acc[i]; cv[i] = c2 * u[i] + (gam / beta - 1) * v[i] + dt * (gam / (2 * beta) - 1) * acc[i]; }
    const rhs = new Float64Array(n), Mcu = new Float64Array(n), Ccv = mul(C, cv);
    for (let i = 0; i < n; i++) { Mcu[i] = m[i] * cu[i]; rhs[i] = -m[i] * ag + Mcu[i] + Ccv[i]; }
    const un = solve(rhs), vn = new Float64Array(n), an = new Float64Array(n);
    for (let i = 0; i < n; i++) { an[i] = c1 * (un[i] - u[i]) - (1 / (beta * dt)) * v[i] - (1 / (2 * beta) - 1) * acc[i]; vn[i] = v[i] + dt * ((1 - gam) * acc[i] + gam * an[i]); }
    u = un; v = vn; acc = an;
  }
  return { ok: true, t, u: hist, dt: dt * keep, shear: shearHist, peak: { drift: Array.from(peakDrift), acc: accAbs, shear: peakShear, top: Math.max(...hist[n - 1].map(Math.abs)) } };
}

/** Floor displacements under static forces F (N) at the floors: K u = F by the same tridiagonal elimination. */
export function staticSway(b, F) {
  const n = b.n, u = new Float64Array(n);
  if (b.full && b.K) {   // 0.8 EG.47 (bim-analysis_PART_4): a frame's condensed stiffness is a full matrix (a floor pushed alone moves its neighbours): K u = F by Gauss elimination with partial pivoting
    const A = b.K.map((row, i) => [...row, F[i] || 0]);
    for (let c = 0; c < n; c++) {
      let p = c;
      for (let r = c + 1; r < n; r++) if (Math.abs(A[r][c]) > Math.abs(A[p][c])) p = r;
      if (Math.abs(A[p][c]) < 1e-12) return { u: new Array(n).fill(NaN), drift: new Array(n).fill(NaN), singular: true };
      [A[c], A[p]] = [A[p], A[c]];
      for (let r = c + 1; r < n; r++) { const f = A[r][c] / A[c][c]; if (f) for (let k = c; k <= n; k++) A[r][k] -= f * A[c][k]; }
    }
    for (let r = n - 1; r >= 0; r--) { let s = A[r][n]; for (let k = r + 1; k < n; k++) s -= A[r][k] * u[k]; u[r] = s / A[r][r]; }
    return { u: Array.from(u), drift: Array.from(u, (v, i) => v - (i ? u[i - 1] : 0)) };
  }
  // storey shears from the top down, then drifts
  let shear = 0;
  const drift = new Float64Array(n);
  for (let i = n - 1; i >= 0; i--) { shear += F[i]; drift[i] = shear / b.k[i]; }
  let s = 0;
  for (let i = 0; i < n; i++) { s += drift[i]; u[i] = s; }
  return { u: Array.from(u), drift: Array.from(drift) };
}
