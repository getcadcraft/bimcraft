/* SPDX-License-Identifier: Apache-2.0 */
/**
 * hydraulics.js — the density / area hydraulic calculation of a sprinkler network (0.8 EG.3; session `mep_PART_2`). DOM-free, SI inside (m, m³/s, Pa).
 *
 * The published method (NFPA 13, the chapter on hydraulic calculation procedures; the same in EN 12845 and NBR 10897 with other numbers): the
 * operating heads of the design area discharge  q = K √P ;  pipe friction is Hazen–Williams
 *   p = 4.52 Q^1.85 / (C^1.85 d^4.87)   (psi/ft, Q in gpm, d in inches)  — here in its SI form 10.67 L Q^1.852 / (C^1.852 d^4.871) metres of water;
 * fittings count as equivalent lengths (pipe diameters × L/D); elevation costs 9.80665 · 998.2 Pa per metre of rise; the supply is a water-supply
 * test (static pressure, residual pressure at a flow) drawn as the N^1.85 curve:  P(Q) = Ps − (Ps − Pr) (Q/Qr)^1.85.
 * The most remote head needs at least q = density × coverage; the solver finds the lowest source pressure at which every operating head has its
 * minimum, with each head discharging K √(its own pressure) (so heads nearer the source discharge more, as they do on site).
 *
 *   sizeNetwork(net, perHeadLps, opts) → sizes each edge (smallest steel Sch 40 size whose velocity ≤ vmax at the flow of the heads below it)
 *   candidates(layout, net, hazard) → [{ id, heads: [ids] }] design areas to test (far ends, near ends, several row blocks)
 *   solveArea(net, heads, hz, opts) → { psrcPa, qLps, heads: [{ id, qLps, pBar, density }], edges: [{ id, qLps, v, dpPa, size }], maxV }
 *   design(layout, net, hazard, supply, opts) → the governing candidate, the supply comparison and the problems' raw data
 */
import { pipeSize, sizesFor } from '../../../mep/tables.js';

const RHO = 998.2, G = 9.80665;
export const SUPPLY_LABEL = 'Water-supply test: static and residual pressure at a flow, from the water authority or a flow test';
const sqrtP = (p) => Math.sqrt(Math.max(p, 0));
/** K in L/min per √bar → m³/s per √Pa. */
export const kSi = (K) => (K / 1000 / 60) / Math.sqrt(1e5);
export const hw = (Q, D, C) => (Q > 0 && D > 0 ? (10.67 * Q ** 1.852 / (C ** 1.852 * D ** 4.871)) * RHO * G : 0);   // Pa per metre

const idOf = (size) => { const p = pipeSize('steel', '40', size); return p ? p.id * 0.0254 : 0; };    // m
export function sizesList(minSize = '1', maxSize = '6') {
  const all = sizesFor('steel', '40'), a = all.indexOf(String(minSize)), b = all.indexOf(String(maxSize));
  return all.slice(Math.max(0, a), (b < 0 ? all.length : b + 1));
}

/** Heads below each edge (counting the heads in `set` only when given). */
function below(net, set = null) {
  const kids = new Map();
  for (const e of net.edges) { if (!kids.has(e.a)) kids.set(e.a, []); kids.get(e.a).push(e); }
  const memo = new Map();
  const count = (id) => {
    if (memo.has(id)) return memo.get(id);
    let n = net.nodes.get(id).head && (!set || set.has(id)) ? 1 : 0;
    for (const e of kids.get(id) || []) n += count(e.b);
    memo.set(id, n);
    return n;
  };
  return { kids, count };
}
export function sizeNetwork(net, perHeadLps, opts = {}) {
  const sizes = sizesList(opts.minSize, opts.maxSize), vmax = opts.vmax ?? 6, B = below(net);
  for (const e of net.edges) {
    const Q = B.count(e.b) * perHeadLps / 1000 * 1.15;
    e.size = sizes.find((s) => Q / (Math.PI * idOf(s) ** 2 / 4) <= vmax) || sizes[sizes.length - 1];
  }
  return net;
}

/** Design areas to try: k rows × m heads, at the ends of the branch lines farthest from and nearest to the main, on several rows. */
export function candidates(layout, net, hazard) {
  const per = layout.coveragePerHead, nHeads = Math.max(1, Math.ceil(hazard.area / per));
  const m = Math.max(1, Math.min(Math.ceil(1.2 * Math.sqrt(hazard.area) / (layout.sx / 1000)), layout.nx));
  const k = Math.max(1, Math.min(Math.ceil(nHeads / m), layout.ny));
  const out = [];
  const byRow = new Map();
  for (const h of layout.heads) { if (!byRow.has(h.row)) byRow.set(h.row, []); byRow.get(h.row).push(h); }
  const rows = [...byRow.keys()].sort((a, b) => a - b);
  const c0 = net.mainCol;
  for (let r0 = 0; r0 + k <= rows.length; r0++) for (const mode of ['far', 'near']) for (const side of mode === 'far' ? [-1, 1] : [0]) {
    const set = [];
    for (let r = r0; r < r0 + k; r++) {
      const hs = (byRow.get(rows[r]) || []).filter((h) => (side < 0 ? h.col < c0 : side > 0 ? h.col >= c0 : true));
      const dist = (h) => Math.abs(h.col - (c0 - 0.5));
      hs.sort((a, b) => (mode === 'far' ? dist(b) - dist(a) : dist(a) - dist(b)));
      set.push(...hs.slice(0, m));
    }
    if (set.length) out.push({ id: `${mode}${side}@${r0}`, heads: set.map((h) => h.id) });
  }
  return out.length > 60 ? out.filter((_, i) => i % Math.ceil(out.length / 60) === 0) : out;
}

/** Equivalent length (m) of an edge's fittings at diameter D. */
const eqLen = (e, D, LD) => D * ((e.fit?.tee_branch || 0) * LD.tee_branch + (e.fit?.tee_run || 0) * LD.tee_run + (e.fit?.elbow90 || 0) * LD.elbow90);

export function solveArea(net, headIds, hz, opts = {}) {
  const o = { C: 120, LD: { elbow90: 30, elbow45: 15, tee_branch: 60, tee_run: 20 }, ...opts };
  const k = kSi(o.kFactor ?? 80.6), set = new Set(headIds);
  const qMin = hz.density / 1000 / 60 * (opts.coverageM2 ?? 1);       // m³/s per head
  const pMinHead = Math.max((qMin / k) ** 2, (o.minHeadBar ?? 0) * 1e5);
  const edges = net.edges, order = orderEdges(net), kidsOf = new Map();
  for (const e of edges) { if (!kidsOf.has(e.a)) kidsOf.set(e.a, []); kidsOf.get(e.a).push(e); }
  const pressures = (Ps) => {
    const P = new Map([[net.source, Ps]]);
    let q = new Map();
    for (let it = 0; it < 300; it++) {
      // flows from the heads' present pressures
      const flow = new Map(edges.map((e) => [e.id, 0]));
      const headQ = new Map();
      for (const id of set) { const p = P.get(id) ?? Ps; const qh = k * sqrtP(p); headQ.set(id, qh); }
      for (let i = order.length - 1; i >= 0; i--) {
        const e = order[i];
        let Q = headQ.get(e.b) || 0;
        for (const c of kidsOf.get(e.b) || []) Q += flow.get(c.id);
        flow.set(e.id, Q);
      }
      let delta = 0;
      for (const e of order) {
        const D = idOf(e.size), Q = flow.get(e.id);
        const dp = hw(Q, D, o.C) * (e.length + eqLen(e, D, o.LD)) + RHO * G * e.dz;
        const next = P.get(e.a) - dp;
        delta = Math.max(delta, Math.abs(next - (P.get(e.b) ?? Ps)));
        P.set(e.b, next);
      }
      q = flow;
      if (delta < 1) break;
    }
    return { P, flow: q };
  };
  const ok = (Ps) => { const { P } = pressures(Ps); for (const id of set) if ((P.get(id) ?? 0) < pMinHead - 1) return false; return true; };
  let lo = 0, hi = 2e5;
  while (!ok(hi) && hi < 5e7) hi *= 2;
  if (hi >= 5e7) return { failed: true };
  for (let i = 0; i < 40; i++) { const mid = (lo + hi) / 2; if (ok(mid)) hi = mid; else lo = mid; }
  const { P, flow } = pressures(hi);
  const heads = [...set].map((id) => { const p = P.get(id), q = k * sqrtP(p); return { id, qLps: q * 1000, pBar: p / 1e5, density: q * 1000 * 60 / (opts.coverageM2 || 1) }; });
  const eo = edges.map((e) => { const D = idOf(e.size), Q = flow.get(e.id); return { id: e.id, qLps: Q * 1000, v: D ? Q / (Math.PI * D * D / 4) : 0, dpPa: hw(Q, D, o.C) * (e.length + eqLen(e, D, o.LD)) + RHO * G * e.dz, size: e.size, kind: e.kind }; });
  const qTot = heads.reduce((s, h) => s + h.qLps, 0);
  return { psrcPa: hi, qLps: qTot, heads, edges: eo, maxV: Math.max(0, ...eo.filter((x) => x.qLps > 0).map((x) => x.v)), pMinHeadBar: pMinHead / 1e5 };
}
function orderEdges(net) {   // root-first
  const out = [], seen = new Set([net.source]), todo = [net.source];
  while (todo.length) { const n = todo.shift(); for (const e of net.edges) if (e.a === n && !seen.has(e.b)) { seen.add(e.b); out.push(e); todo.push(e.b); } }
  return out;
}

/** Supply pressure (bar) at a flow (L/min) from the test: static Ps, residual Pr (bar) at Qr (L/min). */
export function supplyAt(sup, qLmin) {
  if (!sup || !(sup.qr > 0) || !(sup.ps > sup.pr)) return sup?.ps ?? 0;
  return sup.ps - (sup.ps - sup.pr) * (qLmin / sup.qr) ** 1.85;
}

/** The whole calculation: size, try the candidate areas, take the one needing most pressure, add the hose allowance, compare with the supply. */
export function design(layout, net, hazard, supply, opts = {}) {
  const o = { ...opts };
  const cover = layout.coveragePerHead;
  const qHead = hazard.density * cover / 60;                 // L/s at the design density
  sizeNetwork(net, qHead, o);
  let gov = null, tried = 0;
  for (const c of candidates(layout, net, hazard)) {
    const r = solveArea(net, c.heads, hazard, { ...o, coverageM2: cover });
    tried++;
    if (r.failed) continue;
    if (!gov || r.psrcPa > gov.psrcPa) gov = { ...r, candidate: c };
  }
  if (!gov) return { failed: true, tried };
  const hose = hazard.hose || 0;
  const qLmin = gov.qLps * 60 + hose;
  const need = gov.psrcPa / 1e5 + (o.margin || 0);
  const have = supply ? supplyAt(supply, qLmin) : null;
  return { gov, tried, qHeadsLmin: gov.qLps * 60, hoseLmin: hose, qTotalLmin: qLmin, requiredBar: gov.psrcPa / 1e5, requiredWithMarginBar: need, availableBar: have, ok: have == null ? null : have >= need - 1e-9,
    minDensity: Math.min(...gov.heads.map((h) => h.density)), designDensity: hazard.density, maxV: gov.maxV, sizes: Object.fromEntries(net.edges.map((e) => [e.id, e.size])) };
}
