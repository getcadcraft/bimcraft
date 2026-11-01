/* SPDX-License-Identifier: Apache-2.0 */
/**
 * layout.js — heads on a grid in a room, and the branch-line / cross-main network that feeds them (0.8 EG.3; session `mep_PART_2`). DOM-free.
 *
 *   layoutRoom(polygon, hazard, opts) → { heads: [{ id, p:[x,y,z] mm, row, col, offGrid }], sx, sy (mm), nx, ny, frame, uncovered (fraction),
 *       issues: [{ code, vars }] }
 *     The grid is aligned with the room's longest wall. Spacing is as large as the hazard's maximum spacing and coverage allow, so the head count is
 *     the least that satisfies them; heads sit at the middle of their cells, so the wall distance is half a spacing (never under `minWall`).
 *   buildNetwork(layout, opts) → { nodes: Map id → { id, p:[x,y,z] mm, head?: true }, edges: [{ id, a, b, length (m), dz (m), kind, fit: { tee_branch, tee_run, elbow90 } }], source, rows }
 *     Cross main between the cells of the middle columns (centre feed), a branch line to each side, the riser from `riserAt` (the nearer end).
 */
import { DEFAULT_OPTIONS } from './hazard.js';

const rot = (p, a) => [p[0] * Math.cos(a) - p[1] * Math.sin(a), p[0] * Math.sin(a) + p[1] * Math.cos(a)];
function inside(poly, x, y) {
  let c = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const a = poly[i], b = poly[j];
    if ((a[1] > y) !== (b[1] > y) && x < ((b[0] - a[0]) * (y - a[1])) / (b[1] - a[1]) + a[0]) c = !c;
  }
  return c;
}
export function layoutRoom(polygon, hazard, opts = {}) {
  const o = { ...DEFAULT_OPTIONS, ...opts };
  const issues = [];
  if (!Array.isArray(polygon) || polygon.length < 3) return { heads: [], issues: [{ code: 'room' }], sx: 0, sy: 0, nx: 0, ny: 0 };
  // align with the longest wall
  let best = 0, ang = 0;
  for (let i = 0; i < polygon.length; i++) { const a = polygon[i], b = polygon[(i + 1) % polygon.length], L = Math.hypot(b[0] - a[0], b[1] - a[1]); if (L > best) { best = L; ang = Math.atan2(b[1] - a[1], b[0] - a[0]); } }
  const P = polygon.map((p) => rot(p, -ang));
  const xs = P.map((p) => p[0]), ys = P.map((p) => p[1]);
  const x0 = Math.min(...xs), x1 = Math.max(...xs), y0 = Math.min(...ys), y1 = Math.max(...ys), W = x1 - x0, D = y1 - y0;
  const maxS = hazard.maxSpacing, maxA = hazard.maxCoverage * 1e6;
  let nx = Math.max(1, Math.ceil(W / maxS - 1e-9)), ny = Math.max(1, Math.ceil(D / maxS - 1e-9));
  for (let guard = 0; guard < 200 && (W / nx) * (D / ny) > maxA + 1e-6; guard++) { if (W / nx >= D / ny) nx++; else ny++; }
  const sx = W / nx, sy = D / ny;
  const heads = [];
  const z = (opts.ceilingZ ?? 3000) - o.ceilingDrop;
  let offGrid = 0;
  for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
    const cx = x0 + sx * (i + 0.5), cy = y0 + sy * (j + 0.5);
    if (inside(P, cx, cy)) { heads.push({ row: j, col: i, q: [cx, cy], offGrid: false }); continue; }
    // a cell the room only partly fills: the head goes to the middle of the part inside
    let sxs = 0, sys = 0, n = 0;
    for (let a = 0; a < 6; a++) for (let b = 0; b < 6; b++) { const px = x0 + sx * (i + (a + 0.5) / 6), py = y0 + sy * (j + (b + 0.5) / 6); if (inside(P, px, py)) { sxs += px; sys += py; n++; } }
    if (n >= 3) { heads.push({ row: j, col: i, q: [sxs / n, sys / n], offGrid: true }); offGrid++; }
  }
  // coverage: every sample inside the room lies within 0.75 × the allowed spacing of a head (the usual rule; the standard in force decides)
  let samples = 0, miss = 0;
  const step = Math.max(150, Math.min(sx, sy) / 4);
  for (let x = x0 + step / 2; x < x1; x += step) for (let y = y0 + step / 2; y < y1; y += step) {
    if (!inside(P, x, y)) continue;
    samples++;
    if (!heads.some((h) => Math.hypot(h.q[0] - x, h.q[1] - y) <= 0.75 * maxS)) miss++;   // no point farther than 0.75 × the allowed spacing from a head
  }
  const uncovered = samples ? miss / samples : 0;
  if (uncovered > 0.001) issues.push({ code: 'coverage', vars: { pct: Math.round(uncovered * 1000) / 10 } });
  if (sx / 2 < o.minWall) issues.push({ code: 'wall', vars: { mm: Math.round(sx / 2) } });
  if (offGrid) issues.push({ code: 'offgrid', vars: { n: offGrid } });
  const out = heads.map((h, k) => { const w = rot(h.q, ang); return { id: 'H' + (k + 1), p: [w[0], w[1], z], row: h.row, col: h.col, offGrid: h.offGrid }; });
  return { heads: out, sx, sy, nx, ny, frame: { angle: ang, x0, y0, W, D }, coveragePerHead: (sx * sy) / 1e6, uncovered, issues, ceilingZ: opts.ceilingZ ?? 3000 };
}

/** The network: nodes are heads, the branch/main junctions and the source; edge lengths in metres. `riserAt` [x, y] (mm) picks the end of the main nearer to it. */
export function buildNetwork(layout, opts = {}) {
  const o = { ...DEFAULT_OPTIONS, ...opts };
  const { frame, sx, sy, nx, ny } = layout;
  const ang = frame.angle, pipeZ = layout.ceilingZ - o.pipeDrop;
  const back = (q, z) => { const w = rot(q, ang); return [w[0], w[1], z]; };
  const nodes = new Map(), edges = [];
  const addNode = (id, p, extra = {}) => { nodes.set(id, { id, p, ...extra }); return id; };
  const edge = (a, b, kind, fit = {}) => {
    const A = nodes.get(a).p, B = nodes.get(b).p;
    edges.push({ id: a + '>' + b, a, b, length: Math.hypot(A[0] - B[0], A[1] - B[1], A[2] - B[2]) / 1000, dz: (B[2] - A[2]) / 1000, kind, fit });
  };
  const c0 = nx >= 2 ? Math.floor(nx / 2) : 0;                 // the main runs between columns c0-1 and c0
  const xc = frame.x0 + sx * c0;
  // feed end
  let rowOrder = [...Array(ny).keys()];
  if (opts.riserAt) { const r = rot(opts.riserAt, -ang); if (Math.abs(r[1] - (frame.y0 + sy * (ny - 0.5))) < Math.abs(r[1] - (frame.y0 + sy * 0.5))) rowOrder.reverse(); }
  const yOf = (j) => frame.y0 + sy * (j + 0.5);
  const firstY = yOf(rowOrder[0]);
  const src = addNode('S', back([xc, firstY], pipeZ - o.riserLength), { source: true });
  let prev = null;
  for (const j of rowOrder) {
    const jn = addNode('J' + j, back([xc, yOf(j)], pipeZ));
    if (prev === null) edge('S', jn, 'riser', { elbow90: 1 }); else edge(prev, jn, 'main', { tee_run: 1 });
    prev = jn;
    for (const side of [-1, 1]) {
      const cols = layout.heads.filter((h) => h.row === j && (side < 0 ? h.col < c0 : h.col >= c0)).sort((a, b) => (side < 0 ? b.col - a.col : a.col - b.col));
      let last = jn, first = true;
      for (const h of cols) {
        addNode(h.id, back(rot(h.p.slice(0, 2), -ang), pipeZ), { head: true, headId: h.id, row: j, col: h.col, z: h.p[2] });
        edge(last, h.id, 'branch', first ? { tee_branch: 1 } : {});
        first = false; last = h.id;
      }
    }
  }
  return { nodes, edges, source: src, rows: ny, cols: nx, mainCol: c0, pipeZ };
}
