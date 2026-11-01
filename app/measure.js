/* SPDX-License-Identifier: Apache-2.0 */
/**
 * measure.js — the geometry behind Measure in the IFC view (0.4 B6). No DOM, no three.js: bin/test-bimcraft.mjs --measure
 * runs it in Node; viewer3d.js does the picking and drawing.
 *
 *   runOf(batch, key)                        → r (the element's run in the batch) or −1
 *   faceRegion(batch, r, seedTri, tolDeg)    → { area, tris: [triangle indices], normal } the flat face a picked
 *                                               triangle belongs to: its element's triangles that share an edge with it,
 *                                               chain on, and lie in its plane (normal within tolDeg, same offset)
 *   snapTo(points, edges, cursor, project)   → { kind: 'vertex' | 'edge', point } | null   the nearest corner within
 *                                               `vertexPx`, else the nearest point on an edge within `edgePx`, on screen
 *   distance(a, b) / ifcDelta(a, b)          metres; the difference in IFC axes [ΔX, ΔY, ΔZ] (viewer is Y up: IFC Y = −z)
 *   fmtLength(m) / fmtArea(m2)               "3.25 m", "1.20 m²"
 */
import { runEdges } from './ifc-vis.js';
import { fmtLen, fmtArea as fmtModelArea, getDisplayUnits } from './model-units.js';

export { runEdges };

export function runOf(batch, key) {
  const ids = batch.elems.ids;
  for (let r = 0; r < ids.length; r++) if (ids[r] === key) return r;
  return -1;
}

const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const len = (a) => Math.hypot(a[0], a[1], a[2]);

export function faceRegion(batch, r, seedTri, tolDeg = 1) {
  const P = batch.positions, I = batch.indices, E = batch.elems;
  const t0 = E.t0[r], tEnd = t0 + E.tn[r];
  const v = (i) => [P[i * 3], P[i * 3 + 1], P[i * 3 + 2]];
  const tri = (t) => [v(I[t * 3]), v(I[t * 3 + 1]), v(I[t * 3 + 2])];
  const nrm = (t) => { const [a, b, c] = tri(t); const n = cross(sub(b, a), sub(c, a)); const l = len(n); return { n: l ? [n[0] / l, n[1] / l, n[2] / l] : [0, 0, 0], area: l / 2 }; };
  const seed = nrm(seedTri);
  if (seedTri < t0 || seedTri >= tEnd || !seed.area) return { area: 0, tris: [], normal: seed.n };
  const cos = Math.cos(tolDeg * Math.PI / 180), d0 = dot(seed.n, tri(seedTri)[0]);
  const span = len(sub(v(I[t0 * 3]), v(I[(tEnd - 1) * 3]))) + 1;
  const flat = (t) => { const x = nrm(t); return x.area > 0 && dot(x.n, seed.n) >= cos && tri(t).every((p) => Math.abs(dot(seed.n, p) - d0) <= 1e-4 * span + 1e-6); };
  // edges by quantised position: the element's triangles that touch each edge
  const q = (i) => Math.round(P[i * 3] * 1e4) + ',' + Math.round(P[i * 3 + 1] * 1e4) + ',' + Math.round(P[i * 3 + 2] * 1e4);
  const byEdge = new Map();
  for (let t = t0; t < tEnd; t++) {
    const k = [q(I[t * 3]), q(I[t * 3 + 1]), q(I[t * 3 + 2])];
    for (let j = 0; j < 3; j++) {
      const a = k[j], b = k[(j + 1) % 3];
      if (a === b) continue;
      const key = a < b ? a + '|' + b : b + '|' + a;
      if (!byEdge.has(key)) byEdge.set(key, []);
      byEdge.get(key).push(t);
    }
  }
  const out = new Set([seedTri]), todo = [seedTri];
  let area = 0;
  while (todo.length) {
    const t = todo.pop();
    area += nrm(t).area;
    const k = [q(I[t * 3]), q(I[t * 3 + 1]), q(I[t * 3 + 2])];
    for (let j = 0; j < 3; j++) {
      const a = k[j], b = k[(j + 1) % 3];
      for (const u of byEdge.get(a < b ? a + '|' + b : b + '|' + a) || []) if (!out.has(u) && flat(u)) { out.add(u); todo.push(u); }
    }
  }
  return { area, tris: [...out], normal: seed.n };
}

/**
 * Snap on screen. points: [[x, y, z]…] corners; edges: flat [x y z x y z …] segments; cursor: [px, py];
 * project(p) → [px, py] or null (behind the camera). → { kind, point } | null.
 */
export function snapTo(points, edges, cursor, project, { vertexPx = 10, edgePx = 8 } = {}) {
  let best = null, bd = vertexPx;
  for (const p of points) {
    const s = project(p);
    if (!s) continue;
    const d = Math.hypot(s[0] - cursor[0], s[1] - cursor[1]);
    if (d <= bd) { bd = d; best = { kind: 'vertex', point: p }; }
  }
  if (best) return best;
  bd = edgePx;
  for (let i = 0; i + 5 < edges.length; i += 6) {
    const a = [edges[i], edges[i + 1], edges[i + 2]], b = [edges[i + 3], edges[i + 4], edges[i + 5]];
    const sa = project(a), sb = project(b);
    if (!sa || !sb) continue;
    const dx = sb[0] - sa[0], dy = sb[1] - sa[1], l2 = dx * dx + dy * dy;
    const t = l2 > 0 ? Math.max(0, Math.min(1, ((cursor[0] - sa[0]) * dx + (cursor[1] - sa[1]) * dy) / l2)) : 0;
    const d = Math.hypot(sa[0] + t * dx - cursor[0], sa[1] + t * dy - cursor[1]);
    if (d <= bd) { bd = d; best = { kind: 'edge', point: [a[0] + t * (b[0] - a[0]), a[1] + t * (b[1] - a[1]), a[2] + t * (b[2] - a[2])] }; }   // linear in 3D: fine for the short spans a pixel tolerance allows
  }
  return best;
}

export const distance = (a, b) => len(sub(b, a));
/** Prefer an orthogonal measurement when its endpoint is within a small screen tolerance. */
export function axisSnap(a, b, cursor, project, tolerancePx = 12) {
  let best = b, bestPx = tolerancePx;
  for (let i = 0; i < 3; i++) {
    const p = [...a]; p[i] = b[i];
    const s = project(p);
    if (!s) continue;
    const d = Math.hypot(s[0] - cursor[0], s[1] - cursor[1]);
    if (d < bestPx && Math.abs(p[i] - a[i]) > 1e-6) { best = p; bestPx = d; }
  }
  return best;
}
/**
 * GH.3-C: the end point of a measured segment held orthogonal: only the longest component of the move from a to b is kept
 * (viewer axes, Y up). planOnly (looking straight down: a plan) allows the two horizontal axes only. → { point, axis: 0|1|2 }
 */
export function orthoPoint(a, b, planOnly = false) {
  const d = [b[0] - a[0], b[1] - a[1], b[2] - a[2]];
  const axes = planOnly ? [0, 2] : [0, 1, 2];
  let axis = axes[0];
  for (const k of axes) if (Math.abs(d[k]) > Math.abs(d[axis])) axis = k;
  const point = [...a]; point[axis] = b[axis];
  return { point, axis };
}
export const ifcDelta = (a, b) => [b[0] - a[0], -(b[2] - a[2]), b[1] - a[1]];
const trim = (v, d) => v.toFixed(d).replace(/\.?0+$/, '') || '0';
export const fmtLength = (m) => fmtLen(m * 1000, getDisplayUnits(), { unit: true });
export const fmtArea = (m2) => fmtModelArea(m2 * 1e6, getDisplayUnits());
export { trim };
