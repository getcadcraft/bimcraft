/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — the load cases made here are named for the solver only; nothing is shown to the person. */
/**
 * hazard-frame.js — the floor stiffness of a real frame, for the earthquake run (0.8 EG.47, session bim-sim_PART_3). No DOM: tools/bimcraft-test/hazard-test.mjs
 * (node bin/test-bimcraft.mjs --hazard) runs it in Node. Written for any host that has a frame model (frame/frame-model.js): BimCraft's Analysis tab today,
 * DetailCraft's frame the same way.
 *
 * What it does, in plain words. The Analysis tab's solver already knows the frame (members, sections, supports, plates). For each floor in turn we push the
 * floor sideways with a unit force spread over its nodes, solve the frame, and read how far every floor moves. That table is the floors' flexibility F
 * (m per N); its inverse K is the stiffness that the frame, columns and beams and bracing all together, gives the floors (the static condensation of the
 * frame onto one sideways degree of freedom per floor). K is not a row of independent springs: a floor pushed alone drags the ones next to it, as it does in
 * the building. quakeRun (hazard.js) then shakes masses on that K, so the period and the drifts come from the real frame, not from a period the person typed.
 *
 *   frameFloors(model, { levels?, tol?, dir? }) → { floors: [{ z, nodes: [index] }], base, notes }       floors above the base from the node heights
 *        levels = heights (mm) to use instead of finding them from the nodes; tol (mm) = nodes this close in height are one floor (default 150)
 *   frameStiffness(model, { dir: 'x' | 'y', levels?, tol? }) → { ok, floors, F, K, kStorey, notes }
 *        F, K in m/N and N/m (K floors bottom first); kStorey[i] = the storey shear over the storey drift when the floors are pushed by the pattern
 *        "force on each floor proportional to its height" (the inverted triangle codes use), N/m
 *   frameMasses(model, floors, { addKgM2 }) → { m: [kg], area_m2: [..], self: [..] }       member weight lumped half to each end's floor, plus a load per m² of the floor's
 *        plan box (the nodes' extent): an estimate said as one, the frame holds no slab mass unless the person adds it
 *   frameBuilding(model, { dir, addKgM2, levels, tol }) → buildingFromK(...) + { floors, kStorey, notes, source: 'frame' } | { ok: false, reason }
 */
import { solveFrame } from './frame/frame-solve.js';
import { nodeIndex } from './frame/frame-model.js';
import { buildingFromK } from './hazard.js';

const AX = { x: 0, y: 1 };

export function frameFloors(model, { levels = null, tol = 150 } = {}) {
  const nodes = model.nodes, notes = [];
  if (!nodes.length) return { floors: [], base: 0, notes };
  let zs;
  if (levels && levels.length) zs = levels.slice().sort((a, b) => a - b);
  else {
    const sorted = nodes.map((n) => n.z).sort((a, b) => a - b), groups = [];
    for (const z of sorted) { const g = groups[groups.length - 1]; if (g && z - g.hi <= tol) { g.hi = z; g.sum += z; g.n++; } else groups.push({ hi: z, sum: z, n: 1 }); }
    zs = groups.map((g) => g.sum / g.n);
  }
  // the base is the lowest height (the supports' feet); a floor needs two nodes at least (a lone column top is not a floor)
  const base = zs[0];
  const floors = [];
  for (const z of zs.slice(1)) {
    const mine = []; nodes.forEach((n, i) => { if (Math.abs(n.z - z) <= tol) mine.push(i); });
    if (mine.length >= 2) floors.push({ z, nodes: mine });
    else notes.push({ key: 'eg47.fr.note.lone', z: Math.round(z) });
  }
  return { floors, base, notes };
}

function solveInverse(A) {   // Gauss–Jordan with partial pivoting; A is small (one row per floor)
  const n = A.length, M = A.map((r, i) => [...r, ...Array.from({ length: n }, (_, j) => (i === j ? 1 : 0))]);
  for (let c = 0; c < n; c++) {
    let p = c; for (let r = c + 1; r < n; r++) if (Math.abs(M[r][c]) > Math.abs(M[p][c])) p = r;
    if (Math.abs(M[p][c]) < 1e-300) return null;
    [M[c], M[p]] = [M[p], M[c]];
    const d = M[c][c]; for (let j = 0; j < 2 * n; j++) M[c][j] /= d;
    for (let r = 0; r < n; r++) if (r !== c) { const f = M[r][c]; if (f) for (let j = 0; j < 2 * n; j++) M[r][j] -= f * M[c][j]; }
  }
  return M.map((r) => r.slice(n));
}

export function frameStiffness(model, { dir = 'x', levels = null, tol = 150 } = {}) {
  const { floors, base, notes } = frameFloors(model, { levels, tol });
  if (!floors.length) return { ok: false, reason: 'nofloors', notes };
  const ax = AX[dir] ?? 0, P = 1000;                          // N in total on each floor, spread over its nodes
  const idx = nodeIndex(model), cases = floors.map((f, j) => ({ id: '__eg47_' + j, name: 'EG.47 floor ' + (j + 1), kind: 'other', selfWeight: 0,
    loads: f.nodes.map((i) => ({ type: 'node', node: model.nodes[i].id, F: [ax === 0 ? P / f.nodes.length : 0, ax === 1 ? P / f.nodes.length : 0, 0, 0, 0, 0] })) }));
  const m2 = { ...model, cases, combos: [] };
  const sol = solveFrame(m2);
  if (!sol.ok) return { ok: false, reason: 'solve', error: sol.error, notes };
  const n = floors.length, F = Array.from({ length: n }, () => new Array(n).fill(0));
  for (let j = 0; j < n; j++) {
    const u = sol.results['case:__eg47_' + j].u;
    for (let i = 0; i < n; i++) {
      let s = 0; for (const k of floors[i].nodes) s += u[6 * k + ax];
      F[i][j] = (s / floors[i].nodes.length) / 1000 / P;      // mm → m, per N
    }
  }
  for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) { const a = (F[i][j] + F[j][i]) / 2; F[i][j] = F[j][i] = a; }   // reciprocity: equal up to round-off
  const K = solveInverse(F);
  if (!K) return { ok: false, reason: 'mechanism', notes };
  for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) { const a = (K[i][j] + K[j][i]) / 2; K[i][j] = K[j][i] = a; }
  // inverted-triangle pattern → floor forces f_j ∝ height above the base → u = F f → storey shears and drifts
  const h = floors.map((f) => (f.z - base) / 1000), f = h.map((x) => x), u = F.map((row) => row.reduce((s, x, j) => s + x * f[j], 0));
  const kStorey = floors.map((_, i) => { const V = f.slice(i).reduce((s, x) => s + x, 0), d = u[i] - (i ? u[i - 1] : 0); return d > 0 ? V / d : Infinity; });
  return { ok: true, floors, F, K, kStorey, base, notes };
}

export function frameMasses(model, floors, { addKgM2 = 0, tol = 150 } = {}) {
  const n = floors.length, self = new Array(n).fill(0), at = (z) => { let best = -1, bd = Infinity; floors.forEach((f, i) => { const d = Math.abs(f.z - z); if (d < bd) { bd = d; best = i; } }); return bd <= tol ? best : -2; };
  const idx = nodeIndex(model), sec = new Map(model.sections.map((s) => [s.id, s])), mat = new Map(model.materials.map((x) => [x.id, x]));
  for (const mb of model.members) {
    const a = model.nodes[idx.get(mb.i)], b = model.nodes[idx.get(mb.j)], s = sec.get(mb.section), mt = mat.get(mb.material);
    if (!a || !b || !s || !mt) continue;
    const L = Math.hypot(b.x - a.x, b.y - a.y, b.z - a.z), kg = mt.rho * (s.A * L) * 1e-9;   // kg/m³ × mm³ → kg
    for (const nd of [a, b]) { const i = at(nd.z); if (i >= 0) self[i] += kg / 2; }
  }
  const area = floors.map((f) => {
    const xs = f.nodes.map((i) => model.nodes[i].x), ys = f.nodes.map((i) => model.nodes[i].y);
    return ((Math.max(...xs) - Math.min(...xs)) / 1000) * ((Math.max(...ys) - Math.min(...ys)) / 1000);
  });
  return { m: self.map((s, i) => Math.max(1, s + area[i] * addKgM2)), area_m2: area, self };
}

export function frameBuilding(model, { dir = 'x', addKgM2 = 500, levels = null, tol = 150 } = {}) {
  const st = frameStiffness(model, { dir, levels, tol });
  if (!st.ok) return st;
  const ms = frameMasses(model, st.floors, { addKgM2, tol }), b = buildingFromK({ m: ms.m, K: st.K });
  const notes = [...st.notes];
  return { ...b, floors: st.floors.map((f, i) => ({ z: f.z, h: (f.z - (i ? st.floors[i - 1].z : st.base)) / 1000, nodes: f.nodes.length, mass: ms.m[i], area_m2: ms.area_m2[i] })), kStorey: st.kStorey, F: st.F, notes, source: 'frame', dir, addKgM2, base: st.base };
}
