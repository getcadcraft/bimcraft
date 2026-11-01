/* SPDX-License-Identifier: Apache-2.0 */
/**
 * flow.js — sizing and pressure drop for supply pipes (fixture units) and duct networks (0.8 round 2, EG.1; session `mep_PART_2`).
 * DOM-free, SI inside (m, m³/s, Pa); network.js gives the tree. Clean room (rule 32): published methods only —
 *   - Darcy–Weisbach with the Colebrook friction factor (sizing.js), Hazen–Williams  h = 10.67 L Q^1.852 / (C^1.852 d^4.871)
 *     (SI form of the formula every fire-protection and water text prints; cross-checked in the test against the inch-pound
 *     form p = 4.52 Q^1.85 / (C^1.85 d^4.87));
 *   - fittings by the loss-coefficient method  Δp = K · ρ V² / 2  (ASHRAE Handbook—Fundamentals, Pipe Sizing and Duct Design chapters);
 *   - demand from fixture units by interpolating a curve: the method of Hunter (1940, National Bureau of Standards BMS65). The
 *     curve and each fixture's units are a code's TABLES (IPC Appendix E, UPC Chapter 6, NBR 5626): the person types theirs;
 *     the defaults below are LABELLED EXAMPLES in the shape of Hunter's flush-tank curve, not a code table (`DEFAULT_CURVE.label`).
 * Every default (K values, roughness, C factors, velocity limits) is a labelled default for professional review.
 */
import { colebrook, roundLoss, ROUGHNESS, sectionLoss, section, AIR } from './sizing.js';
import { buildTree, accumulate, pathTo } from './network.js';

export const G = 9.80665;
export const WATER = { rho: 998.2, nu: 1.004e-6 };            // 20 °C — a labelled default
export const GPM = 0.003785411784 / 60;                        // m³/s per US gpm
export const KPA_PSI = 6.894757;
/** Hazen–Williams C by material — typical published values, labelled defaults. */
export const HW_C = { copper: 140, steel: 120, pvc: 150, pex: 150, acr: 140, default: 130 };

/** Hazen–Williams friction loss, Pa/m, for Q (m³/s) in a pipe of inside diameter D (m). */
export function hazenWilliams(Q, D, C = 130) {
  if (!(Q > 0) || !(D > 0)) return 0;
  return (10.67 * Q ** 1.852 / (C ** 1.852 * D ** 4.871)) * WATER.rho * G;
}
/** Darcy–Weisbach friction loss for water, Pa/m (eps in m). */
export function darcyWater(Q, D, eps = 0.0000015) {
  if (!(Q > 0) || !(D > 0)) return 0;
  const V = Q / (Math.PI * D * D / 4), Re = V * D / WATER.nu;
  return (colebrook(Re, eps / D) / D) * WATER.rho * V * V / 2;
}
export const velocity = (Q, D) => (D > 0 ? Q / (Math.PI * D * D / 4) : 0);

// ---------------------------------------------------------------------------------------------------- fixture units → demand
/** Example curve [fixture units, gpm] in the shape of Hunter's flush-tank curve. REPLACE with the table of the code in force. */
export const DEFAULT_CURVE = {
  label: 'Example curve (shape of Hunter 1940, flush tanks) — not a code table; type yours', unit: 'gpm', example: true,
  points: [[1, 3], [2, 5], [3, 6.5], [5, 9.4], [10, 14.6], [20, 19.6], [40, 26.3], [60, 32], [100, 43.5], [200, 65]],
};
/** Water-supply fixture units per fixture kind (private use) — labelled example defaults, replace with the code's table. */
export const DEFAULT_WSFU = { wc: 2.5, lav: 1, sink: 1.5, shower: 2, laundry: 4, bath: 4, dishwasher: 1.5 };

export function cleanCurve(c) {
  const pts = (c?.points || []).map((p) => [Number(p[0]), Number(p[1])]).filter((p) => p[0] > 0 && p[1] > 0 && Number.isFinite(p[0]) && Number.isFinite(p[1])).sort((a, b) => a[0] - b[0]);
  for (let i = 1; i < pts.length; i++) if (pts[i][0] === pts[i - 1][0] || pts[i][1] < pts[i - 1][1]) return null;   // strictly rising units, never falling demand
  if (pts.length < 2) return null;
  return { label: String(c.label || 'Typed curve').slice(0, 120), unit: c.unit === 'lps' ? 'lps' : 'gpm', example: !!c.example, points: pts };
}
/** Demand (m³/s) for `fu` fixture units: log–log interpolation; below the first point in proportion; above the last by the last slope (`beyond` = true). */
export function demandFor(fu, curve = DEFAULT_CURVE) {
  const c = cleanCurve(curve) || DEFAULT_CURVE, k = c.unit === 'lps' ? 0.001 : GPM, P = c.points;
  if (!(fu > 0)) return { q: 0, beyond: false };
  if (fu <= P[0][0]) return { q: P[0][1] * k * (fu / P[0][0]), beyond: false };
  let i = P.findIndex((p) => p[0] >= fu);
  const beyond = i < 0;
  if (beyond) i = P.length - 1;
  const [x0, y0] = P[i - 1], [x1, y1] = P[i];
  const s = Math.log(y1 / y0) / Math.log(x1 / x0);
  return { q: y0 * (fu / x0) ** s * k, beyond };
}

// ---------------------------------------------------------------------------------------------------- fittings
/** Loss coefficients K for water pipe fittings — typical rounded published figures, labelled defaults. */
export const PIPE_K = { elbow90: 0.9, tee_run: 0.6, tee_branch: 1.8, gate: 0.2, ball: 0.1, globe: 10, check: 2.5, reducer: 0.3 };
/** Loss coefficients C for duct fittings (smooth radius elbows, branch takeoffs) — rounded, labelled defaults; ASHRAE's duct fitting database is not reproduced. */
export const DUCT_C = { elbow90: 0.25, elbow90_round: 0.2, tee_run: 0.1, tee_branch: 0.8, transition: 0.15 };
const bendK = (K90, deg) => K90 * Math.min(1.5, Math.max(0, deg / 90));

/** Pressure (Pa) lost in the fittings of one segment: its bends, valves and the junction it leaves (a tee branch when it is not the biggest child). */
function fittingLoss(seg, V, rho, K, branchOf, round) {
  let k = 0;
  for (const a of seg.bends || []) if (a > 15) k += bendK(round ? (K.elbow90_round ?? K.elbow90) : K.elbow90, a);
  for (const v of seg.valves || []) k += K[v] ?? 0;
  if (branchOf) k += branchOf === 'branch' ? K.tee_branch : K.tee_run;
  return k * rho * V * V / 2;
}
/** For each seg: 'run' | 'branch' | null — at a junction the child carrying the most is the run, the others branch. */
function junctions(tree, flow) {
  const out = new Map();
  for (const [node, kids] of tree.children) {
    if (kids.length < 2) continue;
    const big = kids.reduce((m, id) => (flow.get(id) > flow.get(m) ? id : m), kids[0]);
    for (const id of kids) out.set(id, id === big ? 'run' : 'branch');
  }
  return out;
}

// ---------------------------------------------------------------------------------------------------- supply pipes
/**
 * analyzePipes({ graph, source, loads, curve, catalogFor, opts }) → { segs, loads, problems-ready data }
 *   graph: from graphFromRuns; source: node id; loads: [{ key, node, fu?, lps? (fixed flow), label }]
 *   segment attributes come from `runAttrs[runId]` = { mat, idMm (current inside diameter), od, sizes: [{ key, idMm }] smallest first, label }
 *   opts: { vmax (m/s, 2.4 default), rateMax (kPa/m, none), C (by mat), eps, availKpa (pressure at the source), minKpa (needed at the fixture) }
 */
export function analyzePipes({ graph, source, loads, runAttrs, curve = DEFAULT_CURVE, opts = {} }) {
  const o = { vmax: 2.4, rateMax: 0, K: PIPE_K, ...opts };
  const tree = buildTree(graph.segs, source);
  const fuAt = new Map(), fixedAt = new Map();
  for (const l of loads) { if (l.fu > 0) fuAt.set(l.node, (fuAt.get(l.node) || 0) + l.fu); if (l.lps > 0) fixedAt.set(l.node, (fixedAt.get(l.node) || 0) + l.lps / 1000); }
  const fu = accumulate(tree, fuAt), fixed = accumulate(tree, fixedAt);
  const flow = new Map(), beyond = [];
  for (const id of tree.order) { const d = demandFor(fu.get(id) || 0, curve); flow.set(id, d.q + (fixed.get(id) || 0)); if (d.beyond) beyond.push(id); }
  const jn = junctions(tree, flow);
  const segs = new Map();
  for (const id of tree.order) {
    const s = tree.segOf.get(id), a = runAttrs[s.run] || {};
    const Q = flow.get(id), C = o.C?.[a.mat] ?? HW_C[a.mat] ?? HW_C.default, D = (a.idMm || 0) / 1000;
    const V = velocity(Q, D), rate = hazenWilliams(Q, D, C);
    let need = null;
    for (const z of a.sizes || []) { const d = z.idMm / 1000; if (velocity(Q, d) <= o.vmax + 1e-9 && (!o.rateMax || hazenWilliams(Q, d, C) / 1000 <= o.rateMax + 1e-12)) { need = z; break; } }
    const fit = D > 0 ? fittingLoss(s, V, WATER.rho, o.K, jn.get(id) || null, true) : 0;
    const dp = rate * s.length + fit + WATER.rho * G * s.dz;     // friction + fittings + static (up is a cost)
    segs.set(id, { id, run: s.run, a: s.a, b: s.b, length: s.length, dz: s.dz, fu: fu.get(id) || 0, flow: Q, V, rate, C, D, friction: rate * s.length, fittings: fit, static: WATER.rho * G * s.dz, dp, size: a.label || '', need: need ? need.key : null, needMm: need ? need.idMm : null,
      status: !(D > 0) ? 'nosize' : need === null ? 'toobig' : (need.idMm > a.idMm + 1e-9 ? 'small' : 'ok'), beyond: beyond.includes(id) });
  }
  // pressure from the source to every load
  const out = [];
  for (const l of loads) {
    const path = pathTo(tree, l.node);
    if (!path.length && l.node !== source) { out.push({ ...l, reached: false }); continue; }
    let dp = 0; for (const id of path) dp += segs.get(id).dp;
    const left = o.availKpa != null ? o.availKpa - dp / 1000 : null;
    out.push({ ...l, reached: true, path, dpKpa: dp / 1000, leftKpa: left, short: o.minKpa != null && left != null ? left < o.minKpa : false });
  }
  const worst = out.filter((x) => x.reached).reduce((m, x) => (!m || x.dpKpa > m.dpKpa ? x : m), null);
  return { tree, segs: [...segs.values()], loads: out, worst, cycles: tree.cycles, unreached: tree.unreached, curve: cleanCurve(curve) || DEFAULT_CURVE, opts: o };
}

// ---------------------------------------------------------------------------------------------------- duct networks
/**
 * analyzeDucts({ graph, source, terminals, runAttrs, opts }) → per-segment flow, velocity, friction, fitting loss, needed size (equal friction or
 *   velocity), the path totals, the critical path, the damper excess at each terminal and the fan's required total pressure.
 *   terminals: [{ key, node, lps, label }]   runAttrs[run] = { shape, wMm, hMm, mat ('galv'), label }
 *   opts: { method: 'friction' | 'velocity', rate (Pa/m), vmax (m/s), equipDp (Pa, coils/filters typed by the person), C: duct fitting table }
 */
export function analyzeDucts({ graph, source, terminals, runAttrs, opts = {} }) {
  const o = { method: 'friction', rate: 0.8, vmax: 7.5, equipDp: 0, C: DUCT_C, maxAspect: 4, ...opts };
  const tree = buildTree(graph.segs, source);
  const loadAt = new Map();
  for (const t of terminals) loadAt.set(t.node, (loadAt.get(t.node) || 0) + t.lps / 1000);
  const flow = accumulate(tree, loadAt), jn = junctions(tree, flow);
  const segs = new Map();
  for (const id of tree.order) {
    const s = tree.segOf.get(id), a = runAttrs[s.run] || {}, Q = flow.get(id) || 0, mat = a.mat || 'galv';
    const w = (a.wMm || 0) / 1000, h = (a.shape === 'round' ? a.wMm : a.hMm || 0) / 1000;
    let V = 0, rate = 0, de = 0, area = 0;
    if (w > 0 && h > 0 && Q > 0) { const L = sectionLoss({ q: Q * 1000, shape: a.shape || 'rect', w: w * 1000, h: h * 1000, u: 'mm', mat }); V = L.V; rate = L.rate; de = L.de / 1000; area = section(a.shape || 'rect', w, h).area; }
    const fit = V > 0 ? fittingLoss(s, V, AIR.rho, { ...o.C, elbow90: o.C.elbow90, tee_run: o.C.tee_run, tee_branch: o.C.tee_branch }, jn.get(id) || null, a.shape === 'round') : 0;
    // needed size: the equal-friction round diameter, or the diameter at the velocity limit — in round equivalents
    let needDe = null;
    if (Q > 0) needDe = o.method === 'velocity' ? Math.sqrt(4 * Q / (Math.PI * o.vmax)) : diameterAtRate(Q, o.rate, ROUGHNESS[mat] ?? ROUGHNESS.galv);
    const aspect = a.shape === 'round' || !(w && h) ? 1 : Math.max(w, h) / Math.min(w, h);
    const dp = rate * s.length + fit + 0;     // ducts: static head cancels in air at building heights (stack effect is ignored, said in the help)
    segs.set(id, { id, run: s.run, a: s.a, b: s.b, length: s.length, flow: Q, V, rate, de, friction: rate * s.length, fittings: fit, dp, size: a.label || '', needDeMm: needDe ? needDe * 1000 : null, aspect,
      status: !(w > 0) ? 'nosize' : Q <= 0 ? 'noflow' : needDe && de < needDe * 0.98 ? 'small' : (o.method === 'velocity' ? V > o.vmax * 1.02 : rate > o.rate * 1.1) ? 'fast' : 'ok', aspectHigh: aspect > o.maxAspect });
  }
  const res = [];
  for (const t of terminals) {
    const path = pathTo(tree, t.node);
    if (!path.length && t.node !== source) { res.push({ ...t, reached: false }); continue; }
    let dp = 0; for (const id of path) dp += segs.get(id).dp;
    res.push({ ...t, reached: true, path, dp });
  }
  const crit = res.filter((r) => r.reached).reduce((m, r) => (!m || r.dp > m.dp ? r : m), null);
  for (const r of res) if (r.reached && crit) r.damperPa = crit.dp - r.dp;    // pressure the balancing damper must take up
  return { tree, segs: [...segs.values()], terminals: res, critical: crit, fanPa: crit ? crit.dp + (o.equipDp || 0) : 0, cycles: tree.cycles, unreached: tree.unreached, opts: o };
}
/** The round diameter (m) giving `rate` Pa/m at Q — sizing.js bisection. */
function diameterAtRate(Q, rate, eps) {
  let lo = Math.log(0.01), hi = Math.log(5);
  if (roundLoss(Q, 5, eps).rate > rate) return null;
  for (let i = 0; i < 100; i++) { const m = (lo + hi) / 2; if (roundLoss(Q, Math.exp(m), eps).rate > rate) lo = m; else hi = m; }
  return Math.exp(hi);
}
