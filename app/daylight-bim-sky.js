/* SPDX-License-Identifier: Apache-2.0 */
/**
 * daylight-bim-sky.js — what each window sees of the sky and the sun, and the daylight factor on a grid in a room
 * (0.7 LC.20 item 6, session bim-ops). Design aids by published methods, not simulations and not compliance calculations.
 * DOM-free: node bin/test-bimcraft.mjs --ops --only vsc,solar,grid. Reads the same geometry as daylight-bim.js
 * (gatherRooms(…, { keep: true }): rooms, windows with their frame, every product's triangles).
 *
 * The sky (CIE standard overcast sky: L(θ) = Lz (1 + 2 sin θ) / 3, θ the altitude; the horizontal illuminance from the whole
 * sky Eh = 7π/9 · Lz):
 *   profile(win, tris, { step }) → { step, phi: [°], blocked: [[[a0, a1]…]…] }   for each azimuth φ across the window's front
 *       (−90°…90° from its normal, `step` degrees apart, default 2), the altitudes hidden by everything in front of the window
 *       (the vertical section of daylight-bim.js sectionTheta, turned to φ): exact cuts through the triangles, no sampling
 *   vsc(profile) → %        vertical sky component at the window's centre: the overcast sky's illuminance on the vertical
 *       glass plane from the sky it sees, over Eh. Each azimuth band is weighted by ∫cos φ dφ exactly, each altitude interval
 *       by ∫L cos²θ dθ in closed form, so a free facade gives 39.6 % (2(π/12 + 2/9) / (7π/9) = 39.62 %).
 *   skyFraction(profile) → 0…1   the share of a uniform sky's light a vertical window still gets (for the diffuse sun gain)
 *   obstructionAngle(profile) → °   the angle of obstruction square to the window (top of what hides the horizon), for C
 * The sun (sun.js: NOAA's equations; clear sky: Hottel 1976 beam transmittance with its climate factors and Liu & Jordan
 * 1960 diffuse, as given in Duffie & Beckman, Solar Engineering of Thermal Processes, § 2.8):
 *   clearSky(dayOfYear, cosZenith, { altitudeKm, climate }) → { Gon, tauB, Gbn, Gbh, Gdh }   W/m²
 *   solarDay(rooms, prods, site, { month, day, tz, step, g, glazedShare, ground, climate, altitudeKm }) →
 *       { times: [h], rooms: [{ id, peak, peakAt, kWh, hourly: [W], windows: [{ id, peak, kWh, shaded: n }] }] }
 *       per window per step: beam G_bn cos i unless the sun is hidden behind something (the same exact section, turned to the
 *       sun's azimuth: is its altitude hidden?) + diffuse G_dh · ½ · skyFraction + ground G_h · ρg · ½; × g × glazed area.
 * The daylight factor on a grid (the BRE split-flux method: DF = SC + ERC + IRC; Hopkinson, Longmore & Petherbridge;
 * BRE Digest 309/310):
 *   roomGrid(room, prods, { spacing, height, border, max }) → { points: [[x, y, z]], spacing, floor: [triangles in plan], edges }
 *       points over the floor (from the room's own shell) at the working-plane height, `border` in from the walls, at most
 *       `max` (400 by default: the lowest tier) — the spacing grows until they fit
 *   pointComponents(P, win, prof, { sky }) → { sc, erc }   %, through the window's opening (unglazed), sampled in patches
 *       (finer the nearer the point), each ray's sky or obstruction from the window's profile; obstructions shine at
 *       `obstruction` × the sky behind them (0.1 by default)
 *   irc(room, inputs) → %       0.85 W/(A(1−R)) · (C·Rfw + 5·Rcw) with T in place of 0.85 (the clear glass it assumed): C from the
 *       obstruction angle (the BRE table), Rfw floor + lower half walls, Rcw ceiling + upper half walls
 *   gridDaylight(rooms, prods, inputs) → rooms with { grid: { points: [{ x, y, df, sc, erc }], mean, min, max, median,
 *       uniformity, over2 (share ≥ 2 %), spacing }, irc }
 */
import { sectionTheta, meanReflectance, DEFAULTS } from './daylight-bim.js';
import { sunPosition, dayOfYear } from './render/sun.js';
import { ids, val, lengthUnitMm } from './ifc-util.js';
import { compound } from './ifc-geo.js';

const D2R = Math.PI / 180, R2D = 180 / Math.PI, EPS = 1e-6;
export const EH = 7 * Math.PI / 9;                 // horizontal illuminance of the whole CIE overcast sky, in Lz
/** ∫₀^θ L(t)/Lz cos²t dt for the CIE overcast sky (θ radians). */
export const cieF = (th) => (th / 2 + Math.sin(2 * th) / 4) / 3 + (2 / 9) * (1 - Math.cos(th) ** 3);
/** ∫₀^θ cos²t dt (a uniform sky). */
const isoF = (th) => th / 2 + Math.sin(2 * th) / 4;
export const L = (th) => (1 + 2 * Math.sin(th)) / 3;

/** Merge intervals (degrees), clipped to [lo, hi]. */
export function merge(list, lo = 0, hi = 90) {
  const a = list.map(([x, y]) => [Math.max(lo, Math.min(x, y)), Math.min(hi, Math.max(x, y))]).filter(([x, y]) => y > x).sort((p, q) => p[0] - q[0]);
  const out = [];
  for (const iv of a) { const last = out[out.length - 1]; if (last && iv[0] <= last[1] + 1e-9) last[1] = Math.max(last[1], iv[1]); else out.push([...iv]); }
  return out;
}
const visible = (blocked) => { const out = []; let at = 0; for (const [a, b] of blocked) { if (a > at) out.push([at, a]); at = Math.max(at, b); } if (at < 90) out.push([at, 90]); return out; };
const turn = (n, s, phiDeg) => { const c = Math.cos(phiDeg * D2R), si = Math.sin(phiDeg * D2R); return [c * n[0] + si * s[0], c * n[1] + si * s[1], 0]; };

/** Every obstruction in front of the window (not the window, not its host wall, not rooms): [{ tr, box }]. */
export function frontTris(prods, win) {
  const out = [];
  const [ox, oy] = win.origin, n = win.n;
  for (const [id, p] of prods) {
    if (id === win.id || id === win.host || p.cls === 'IFCSPACE') continue;
    const b = p.box;
    let front = false;
    for (const x of [b.lo[0], b.hi[0]]) for (const y of [b.lo[1], b.hi[1]]) if ((x - ox) * n[0] + (y - oy) * n[1] > EPS) front = true;
    if (front) out.push({ tr: p.tr, box: b });
  }
  return out;
}
/**
 * The altitudes hidden along the level direction d from origin (merged): only products whose plan box the vertical
 * half-plane along d crosses are cut (a big model has thousands; one section crosses a few). A bare triangle array is cut whole.
 */
export function cut(origin, d, list) {
  const s = [d[1], -d[0]], all = [];
  for (const o of list) {
    if (o.box) {
      const b = o.box;
      let neg = false, pos = false, ahead = false;
      for (const x of [b.lo[0], b.hi[0]]) for (const y of [b.lo[1], b.hi[1]]) {
        const side = (x - origin[0]) * s[0] + (y - origin[1]) * s[1];
        if (side < EPS) neg = true;
        if (side > -EPS) pos = true;
        if ((x - origin[0]) * d[0] + (y - origin[1]) * d[1] > EPS) ahead = true;
      }
      if (!(neg && pos) || !ahead) continue;
    }
    all.push(...sectionTheta(origin, d, o.tr || o).blocked);
  }
  return merge(all);
}

export function profile(win, tris, { step = 2 } = {}) {
  const k = Math.round(180 / step), phi = [], blocked = [];
  for (let i = 0; i < k; i++) {
    const f = -90 + step / 2 + i * step;
    phi.push(f); blocked.push(cut(win.origin, turn(win.n, win.s, f), tris));
  }
  // and the section square to the window (φ = 0), exact, for the angle of obstruction
  return { step, phi, blocked, square: cut(win.origin, win.n, tris) };
}
const bandWeight = (f, step) => Math.sin((f + step / 2) * D2R) - Math.sin((f - step / 2) * D2R);   // ∫cos φ dφ over the band

export function vsc(prof) {
  let e = 0;
  prof.phi.forEach((f, i) => { let s = 0; for (const [a, b] of visible(prof.blocked[i])) s += cieF(b * D2R) - cieF(a * D2R); e += bandWeight(f, prof.step) * s; });
  return (e / EH) * 100;
}
export function skyFraction(prof) {
  let e = 0, full = 0;
  prof.phi.forEach((f, i) => { const w = bandWeight(f, prof.step); let s = 0; for (const [a, b] of visible(prof.blocked[i])) s += isoF(b * D2R) - isoF(a * D2R); e += w * s; full += w * isoF(Math.PI / 2); });
  return full > 0 ? e / full : 0;
}
/** The top of whatever hides the horizon square to the window (0 when the horizon is clear there). */
export function obstructionAngle(prof) {
  const first = (prof.square || []).find(([a]) => a <= 1e-9);
  return first ? first[1] : 0;
}
const blockedAt = (prof, phiDeg, altDeg) => {
  const i = Math.max(0, Math.min(prof.phi.length - 1, Math.floor((phiDeg + 90) / prof.step)));
  return prof.blocked[i].some(([a, b]) => altDeg >= a && altDeg <= b);
};

// ---------------------------------------------------------------- the sun
export const CLIMATES = Object.freeze({ tropical: [0.95, 0.98, 1.02], 'midlat-summer': [0.97, 0.99, 1.02], 'subarctic-summer': [0.99, 0.99, 1.01], 'midlat-winter': [1.03, 1.01, 1.0] });
export const GSC = 1367;
export function clearSky(n, cosZ, { altitudeKm = 0, climate = 'midlat-summer' } = {}) {
  const A = Math.max(0, Math.min(2.5, altitudeKm));
  const [r0, r1, rk] = CLIMATES[climate] || CLIMATES['midlat-summer'];
  const a0 = r0 * (0.4237 - 0.00821 * (6 - A) ** 2), a1 = r1 * (0.5055 + 0.00595 * (6.5 - A) ** 2), k = rk * (0.2711 + 0.01858 * (2.5 - A) ** 2);
  const Gon = GSC * (1 + 0.033 * Math.cos(2 * Math.PI * n / 365));
  if (!(cosZ > 0)) return { Gon, tauB: 0, Gbn: 0, Gbh: 0, Gdh: 0 };
  const tauB = a0 + a1 * Math.exp(-k / cosZ), tauD = 0.271 - 0.294 * tauB;
  return { Gon, tauB, Gbn: Gon * tauB, Gbh: Gon * tauB * cosZ, Gdh: Gon * cosZ * tauD };
}
/** The site's latitude, longitude, height and north from IfcSite and the context's TrueNorth (null without a place). */
export function siteOf(api, mid) {
  try {
    const sid = ids(api, mid, 'IFCSITE')[0];
    if (sid === undefined) return null;
    const s = api.GetLine(mid, sid, false);
    const lat = compound(s.RefLatitude), lon = compound(s.RefLongitude);
    if (lat === null || lon === null || Math.abs(lat) > 90 || Math.abs(lon) > 180) return null;
    let north = [0, 1];
    for (const id of ids(api, mid, 'IFCGEOMETRICREPRESENTATIONCONTEXT')) {
      const c = api.GetLine(mid, id, true);
      const r = c.TrueNorth?.DirectionRatios?.map((x) => Number(val(x)));
      if (r && r.length >= 2 && Math.hypot(r[0], r[1]) > 1e-9) { const l = Math.hypot(r[0], r[1]); north = [r[0] / l, r[1] / l]; break; }
    }
    // FX (2026-11-20): RefElevation is in the file's length unit; the callers (the EnergyPlus file's Site:Location, the clear-sky altitude of the
    // solar panels) want metres. A file in millimetres used to give a site 113,000 m up.
    const el = Number(val(s.RefElevation)) * lengthUnitMm(api, mid) / 1000;
    return { lat, lon, north, elevation: Number.isFinite(el) ? el : 0 };
  } catch { return null; }
}
/** The climate factors that fit the date and hemisphere (Hottel's mid-latitude summer / winter; tropics within 23.5°). */
export const climateFor = (lat, month) => (Math.abs(lat) < 23.5 ? 'tropical' : (lat >= 0) === (month >= 4 && month <= 9) ? 'midlat-summer' : 'midlat-winter');

/**
 * The sun on each window through one day. site = { lat, lon, north } (north in the model's plan); times are clock hours in
 * `tz` (UTC offset, standard time). Returns the gain through the glass, W, per step.
 */
export function solarDay(rooms, prods, site, { month = 7, day = 21, year = 2026, tz = null, step = 0.25, g = 0.6, glazedShare = DEFAULTS.glazedShare, ground = 0.2, climate = null, altitudeKm = 0 } = {}) {
  const zone = Number.isFinite(tz) ? tz : Math.round(site.lon / 15);
  const n0 = dayOfYear(month, day, year), cl = climate || climateFor(site.lat, month);
  const north = site.north || [0, 1], east = [north[1], -north[0]];
  const times = [];
  for (let h = 0; h < 24 - 1e-9; h += step) times.push(h);
  const suns = times.map((h) => {
    const s = sunPosition({ month, day, hour: h, lat: site.lat, lon: site.lon, tz: zone, year });
    if (!s.up) return null;
    const d = [east[0] * s.dir[0] + north[0] * s.dir[1], east[1] * s.dir[0] + north[1] * s.dir[1], s.dir[2]];
    return { d, alt: s.altitude, sky: clearSky(n0, s.dir[2], { altitudeKm, climate: cl }) };
  });
  const out = rooms.map((r) => {
    const hourly = times.map(() => 0), wins = [];
    for (const w of r.windows) {
      const tris = frontTris(prods, w), prof = w.prof || profile(w, tris);
      const sf = skyFraction(prof), A = w.area * glazedShare;
      const wh = times.map(() => 0);
      let shaded = 0;
      suns.forEach((s, i) => {
        if (!s) return;
        const cosI = s.d[0] * w.n[0] + s.d[1] * w.n[1];
        let beam = 0;
        if (cosI > 0) {
          const hz = Math.hypot(s.d[0], s.d[1]) || 1, dh = [s.d[0] / hz, s.d[1] / hz, 0];
          const hidden = cut(w.origin, dh, tris).some(([a, b]) => s.alt >= a && s.alt <= b);
          if (hidden) shaded++; else beam = s.sky.Gbn * cosI;
        }
        const diffuse = s.sky.Gdh * 0.5 * sf, refl = (s.sky.Gbh + s.sky.Gdh) * ground * 0.5;
        wh[i] = g * A * (beam + diffuse + refl);
      });
      const peak = Math.max(0, ...wh), kWh = wh.reduce((t, x) => t + x, 0) * step / 1000;
      wins.push({ id: w.id, guid: w.guid, name: w.name, peak, peakAt: times[wh.indexOf(peak)] ?? null, kWh, shaded, skyFraction: sf, hourly: wh });
      wh.forEach((x, i) => { hourly[i] += x; });
    }
    const peak = Math.max(0, ...hourly);
    return { id: r.id, guid: r.guid, name: r.name, longName: r.longName, storey: r.storey, peak, peakAt: peak > 0 ? times[hourly.indexOf(peak)] : null, kWh: hourly.reduce((t, x) => t + x, 0) * step / 1000, hourly, windows: wins };
  });
  return { times, tz: zone, climate: cl, day: n0, rooms: out };
}

// ---------------------------------------------------------------- the grid
function floorOf(tr) {
  let zlo = Infinity, zhi = -Infinity;
  for (let i = 2; i < tr.length; i += 3) { zlo = Math.min(zlo, tr[i]); zhi = Math.max(zhi, tr[i]); }
  const zMid = (zlo + zhi) / 2, tris = [];
  for (let i = 0; i + 8 < tr.length; i += 9) {
    const ax = tr[i + 3] - tr[i], ay = tr[i + 4] - tr[i + 1], az = tr[i + 5] - tr[i + 2], bx = tr[i + 6] - tr[i], by = tr[i + 7] - tr[i + 1], bz = tr[i + 8] - tr[i + 2];
    const cz = ax * by - ay * bx, l = Math.hypot(ay * bz - az * by, az * bx - ax * bz, cz);
    if (l > 0 && Math.abs(cz / l) > 0.7 && (tr[i + 2] + tr[i + 5] + tr[i + 8]) / 3 < zMid) tris.push([[tr[i], tr[i + 1]], [tr[i + 3], tr[i + 4]], [tr[i + 6], tr[i + 7]], (tr[i + 2] + tr[i + 5] + tr[i + 8]) / 3]);
  }
  return { tris, zlo };
}
const inTri = (p, [a, b, c]) => { const d = (b[1] - c[1]) * (a[0] - c[0]) + (c[0] - b[0]) * (a[1] - c[1]); if (Math.abs(d) < 1e-12) return false; const l1 = ((b[1] - c[1]) * (p[0] - c[0]) + (c[0] - b[0]) * (p[1] - c[1])) / d, l2 = ((c[1] - a[1]) * (p[0] - c[0]) + (a[0] - c[0]) * (p[1] - c[1])) / d; return l1 >= -1e-9 && l2 >= -1e-9 && 1 - l1 - l2 >= -1e-9; };
const segDist = (p, a, b) => { const dx = b[0] - a[0], dy = b[1] - a[1], l = dx * dx + dy * dy; const t = l > 0 ? Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / l)) : 0; return Math.hypot(p[0] - a[0] - t * dx, p[1] - a[1] - t * dy); };

export function roomGrid(room, prods, { spacing = null, height = 0.85, border = 0.5, max = 400 } = {}) {
  const sp = prods.get(room.id);
  if (!sp) return { points: [], spacing: 0, floor: [], edges: [] };
  const { tris } = floorOf(sp.tr);
  if (!tris.length) return { points: [], spacing: 0, floor: [], edges: [] };
  // the floor's outline: edges used by one floor triangle only
  const key = (p) => Math.round(p[0] * 1000) + ',' + Math.round(p[1] * 1000);
  const count = new Map();
  for (const t of tris) for (let k = 0; k < 3; k++) { const a = t[k], b = t[(k + 1) % 3]; const e = [key(a), key(b)].sort().join('|'); count.set(e, (count.get(e) || { n: 0, a, b })); count.get(e).n++; }
  const edges = [...count.values()].filter((e) => e.n === 1).map((e) => [e.a, e.b]);
  let lo = [Infinity, Infinity], hi = [-Infinity, -Infinity], area = 0;
  for (const t of tris) { for (let k = 0; k < 3; k++) { lo = [Math.min(lo[0], t[k][0]), Math.min(lo[1], t[k][1])]; hi = [Math.max(hi[0], t[k][0]), Math.max(hi[1], t[k][1])]; } area += Math.abs((t[1][0] - t[0][0]) * (t[2][1] - t[0][1]) - (t[2][0] - t[0][0]) * (t[1][1] - t[0][1])) / 2; }
  const place = (s, b) => {
    const pts = [];
    for (let x = lo[0] + s / 2; x < hi[0]; x += s) for (let y = lo[1] + s / 2; y < hi[1]; y += s) {
      const p = [x, y], t = tris.find((tt) => inTri(p, tt));
      if (!t) continue;
      if (b > 0 && edges.some(([a, c]) => segDist(p, a, c) < b - 1e-9)) continue;
      pts.push([x, y, t[3] + height]);
    }
    return pts;
  };
  let s = spacing && spacing > 0 ? spacing : Math.max(0.25, Math.ceil(Math.sqrt(area / max) * 20) / 20);
  let b = border, pts = place(s, b);
  if (!pts.length && b > 0.1) { b = 0.1; pts = place(s, b); }
  while (pts.length > max) { s = Math.round((s + 0.05) * 100) / 100; pts = place(s, b); }
  return { points: pts, spacing: s, border: b, floor: tris.map((t) => [t[0], t[1], t[2]]), edges };
}

/** The window's opening as a rectangle on its outer face: centre, across (s), up, half sizes (keeping the window's area). */
function aperture(w) {
  const wid = w.span[1] - w.span[0], hgt = w.hz;
  const k = wid > 0 && hgt > 0 && w.area > 0 ? Math.sqrt(w.area / (wid * hgt)) : 1;
  const mid = (w.span[0] + w.span[1]) / 2;
  return { c: [w.origin[0] + w.s[0] * mid, w.origin[1] + w.s[1] * mid, w.origin[2]], hw: (wid * k) / 2, hh: (hgt * k) / 2 };
}
export function pointComponents(P, w, prof, { sky = 'cie', obstruction = 0.1, patches = 0 } = {}) {
  const ap = aperture(w), n = w.n, s = w.s;
  // only the part of the opening above the point's own horizon lights the working plane from the sky: clip it first, so no
  // patch straddles the horizon
  const v0 = Math.max(-ap.hh, P[2] - ap.c[2]), v1 = ap.hh;
  if (v1 <= v0) return { sc: 0, erc: 0 };
  const dist = Math.hypot(ap.c[0] - P[0], ap.c[1] - P[1], ap.c[2] - P[2]);
  const N = patches || Math.max(8, Math.min(48, Math.ceil((24 * 2 * Math.max(ap.hw, ap.hh)) / Math.max(dist, 1e-3))));   // within 0.1 % of a converged sum (tests)
  const du = (2 * ap.hw) / N, dv = (v1 - v0) / N, dA = du * dv;
  let sc = 0, erc = 0;
  for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) {
    const u = -ap.hw + (i + 0.5) * du, v = v0 + (j + 0.5) * dv;
    const q = [ap.c[0] + s[0] * u, ap.c[1] + s[1] * u, ap.c[2] + v];
    const d = [q[0] - P[0], q[1] - P[1], q[2] - P[2]], r = Math.hypot(d[0], d[1], d[2]);
    const cosW = (d[0] * n[0] + d[1] * n[1]) / r;
    if (cosW <= 0 || d[2] <= 0) continue;   // behind the glass, or looking down at the ground (the inside reflected part has that)
    const alt = Math.asin(d[2] / r), dw = (dA * cosW) / (r * r);
    const lum = sky === 'uniform' ? 1 : L(alt);
    const e = lum * Math.sin(alt) * dw;
    const phi = Math.atan2(d[0] * s[0] + d[1] * s[1], d[0] * n[0] + d[1] * n[1]) * R2D;
    if (prof && blockedAt(prof, phi, alt * R2D)) erc += obstruction * e; else sc += e;
  }
  const eh = sky === 'uniform' ? Math.PI : EH;
  return { sc: (sc / eh) * 100, erc: (erc / eh) * 100 };
}

/** C in the BRE internally reflected component, by the angle of obstruction (Hopkinson et al.); straight lines between. */
export const C_TABLE = [[0, 39], [10, 35], [20, 31], [30, 25], [40, 20], [50, 14], [60, 10], [70, 7], [80, 5]];
export function cOf(alpha) {
  const a = Math.max(0, Math.min(80, alpha));
  for (let i = 1; i < C_TABLE.length; i++) if (a <= C_TABLE[i][0]) { const [x0, y0] = C_TABLE[i - 1], [x1, y1] = C_TABLE[i]; return y0 + ((a - x0) / (x1 - x0)) * (y1 - y0); }
  return 5;
}
export function irc(room, { T = DEFAULTS.T, glazedShare = DEFAULTS.glazedShare, M = DEFAULTS.M, refl = DEFAULTS.refl } = {}) {
  const A = room.areas, R = meanReflectance(A, refl);
  const Wg = room.windows.reduce((t, w) => t + w.area * glazedShare, 0);
  if (!(Wg > 0) || !(room.A > 0) || R >= 1) return 0;
  const C = room.windows.reduce((t, w) => t + w.area * cOf(w.alpha ?? 0), 0) / room.windows.reduce((t, w) => t + w.area, 0);
  const rfw = (A.floor * refl.floor + 0.5 * A.wall * refl.wall) / (A.floor + 0.5 * A.wall || 1), rcw = (A.ceiling * refl.ceiling + 0.5 * A.wall * refl.wall) / (A.ceiling + 0.5 * A.wall || 1);
  return ((T * Wg) / (room.A * (1 - R))) * (C * rfw + 5 * rcw) * M;
}

/** The sky profile of every window (once; kept on the window as `prof`, its obstruction angle as `alpha`, its VSC as `vsc`). */
export function profileWindows(g, { step = 2, onProgress = null } = {}) {
  const all = g.rooms.flatMap((r) => r.windows);
  all.forEach((w, i) => { if (!w.prof) { w.prof = profile(w, frontTris(g.prods, w), { step }); w.alpha = obstructionAngle(w.prof); w.vsc = vsc(w.prof); } onProgress?.(i + 1, all.length); });
  return g;
}

export function gridDaylight(g, rooms, { T = DEFAULTS.T, glazedShare = DEFAULTS.glazedShare, M = DEFAULTS.M, refl = DEFAULTS.refl, height = 0.85, border = 0.5, spacing = null, max = 400, obstruction = 0.1 } = {}) {
  return rooms.map((r) => {
    const grid = roomGrid(r, g.prods, { spacing, height, border, max });
    const ir = irc(r, { T, glazedShare, M, refl });
    const pts = grid.points.map(([x, y, z]) => {
      let sc = 0, erc = 0;
      for (const w of r.windows) { const c = pointComponents([x, y, z], w, w.prof, { obstruction }); sc += c.sc; erc += c.erc; }
      const f = T * glazedShare * M;
      return { x, y, z, sc: sc * f, erc: erc * f, df: (sc + erc) * f + ir };
    });
    const dfs = pts.map((p) => p.df).sort((a, b) => a - b);
    const mean = dfs.length ? dfs.reduce((t, x) => t + x, 0) / dfs.length : 0;
    const median = dfs.length ? (dfs.length % 2 ? dfs[(dfs.length - 1) / 2] : (dfs[dfs.length / 2 - 1] + dfs[dfs.length / 2]) / 2) : 0;
    return { ...r, irc: ir, grid: { points: pts, spacing: grid.spacing, border: grid.border, floor: grid.floor, edges: grid.edges, mean, median, min: dfs[0] ?? 0, max: dfs[dfs.length - 1] ?? 0,
      uniformity: mean > 0 ? (dfs[0] ?? 0) / mean : 0, over2: dfs.length ? dfs.filter((x) => x >= 2).length / dfs.length : 0 } };
  });
}
