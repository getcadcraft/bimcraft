/* SPDX-License-Identifier: Apache-2.0 */
/**
 * clash.js — hard clashes between two sets of IFC elements (0.4 B17). No DOM, no library: bin/test-bimcraft.mjs --clash runs
 * it in Node; clash-worker.js runs it in a worker for the page. (The plan suggested three-mesh-bvh; a sweep over element
 * boxes and a triangle-pair test per candidate pair are enough for "basic", and keep the build free of another vendor.)
 *
 *   const els = elementsOf(batches, keys, matrixOf)   → [{ key, box: [minX..maxZ], tris: Float32Array (world) }]
 *   clashes(A, B, { tolerance, onProgress, shouldStop }) → [{ a, b, point: [x,y,z], depth }]
 *
 * A clash: two different elements (one from each set) whose bounding boxes overlap by more than `tolerance` (metres) on
 * every axis, and whose surfaces cross (Möller's triangle–triangle test; faces that only touch, lying in one plane, are
 * not counted, nor faces that only meet along an edge: each triangle must have corners on both sides of the other's plane).
 * `depth` = the smallest overlap of the two elements' boxes, a rough measure of how far they run into each other.
 * Not found: an element wholly inside another with no surfaces crossing (a pipe buried in a wall).
 */

/** World triangles and bounds of each element (keys), through its model's placement (matrixOf(batch) → column-major 4 × 4 | null). */
import { cross3 as cross, dot3 as dot } from './geom-vec.js';   // shared helpers (0.11 PERF.74; tools/perf/util-copies.mjs)
export function elementsOf(batches, keys, matrixOf = () => null) {
  const want = keys instanceof Set ? keys : new Set(keys);
  const map = new Map();
  for (const b of batches) {
    const E = b.elems, P = b.positions, I = b.indices, M = matrixOf(b);
    for (let r = 0; r < E.ids.length; r++) {
      const key = E.ids[r];
      if (!want.has(key)) continue;
      let el = map.get(key);
      if (!el) { el = { key, parts: [], box: [Infinity, Infinity, Infinity, -Infinity, -Infinity, -Infinity] }; map.set(key, el); }
      const t = new Float32Array(E.tn[r] * 9);
      for (let k = 0, tt = E.t0[r] * 3; k < E.tn[r] * 3; k++, tt++) {
        const v = I[tt] * 3;
        let x = P[v], y = P[v + 1], z = P[v + 2];
        if (M) { const X = M[0] * x + M[4] * y + M[8] * z + M[12], Y = M[1] * x + M[5] * y + M[9] * z + M[13], Z = M[2] * x + M[6] * y + M[10] * z + M[14]; x = X; y = Y; z = Z; }
        t[k * 3] = x; t[k * 3 + 1] = y; t[k * 3 + 2] = z;
        const bx = el.box;
        if (x < bx[0]) bx[0] = x; if (y < bx[1]) bx[1] = y; if (z < bx[2]) bx[2] = z;
        if (x > bx[3]) bx[3] = x; if (y > bx[4]) bx[4] = y; if (z > bx[5]) bx[5] = z;
      }
      el.parts.push(t);
    }
  }
  return [...map.values()].map((e) => {
    const n = e.parts.reduce((a, p) => a + p.length, 0), tris = new Float32Array(n);
    let at = 0; for (const p of e.parts) { tris.set(p, at); at += p.length; }
    return { key: e.key, box: e.box, tris };
  });
}

const overlap = (a, b) => Math.min(a[3], b[3]) - Math.max(a[0], b[0]) < 0 ? -1
  : Math.min(Math.min(a[3], b[3]) - Math.max(a[0], b[0]), Math.min(a[4], b[4]) - Math.max(a[1], b[1]), Math.min(a[5], b[5]) - Math.max(a[2], b[2]));

/** Clashes between set A and set B (element lists from elementsOf). */
export function clashes(A, B, { tolerance = 0.01, onProgress = null, shouldStop = null } = {}) {
  // sweep along X: the candidates whose boxes overlap by more than the tolerance on every axis
  const all = [...A.map((e) => ({ e, s: 0 })), ...B.map((e) => ({ e, s: 1 }))].sort((p, q) => p.e.box[0] - q.e.box[0]);
  const pairs = [], active = [];
  for (const it of all) {
    for (let i = active.length - 1; i >= 0; i--) if (active[i].e.box[3] < it.e.box[0]) active.splice(i, 1);
    for (const o of active) {
      if (o.s === it.s || o.e.key === it.e.key) continue;   // one from each set (an element in both sets is on both sides)
      const d = overlap(o.e.box, it.e.box);
      if (d > tolerance) pairs.push(o.s === 0 ? [o.e, it.e, d] : [it.e, o.e, d]);
    }
    active.push(it);
  }
  const seen = new Set(), out = [];
  pairs.forEach(([a, b, d], i) => {
    if (shouldStop?.()) return;
    const id = a.key < b.key ? a.key + '|' + b.key : b.key + '|' + a.key;
    if (seen.has(id)) return;
    seen.add(id);
    const p = crossing(a, b);
    if (p) out.push({ a: a.key, b: b.key, point: p, depth: d });
    if (onProgress && i % 25 === 0) onProgress(i + 1, pairs.length);
  });
  onProgress?.(pairs.length, pairs.length);
  return out.sort((x, y) => y.depth - x.depth);
}

/** A point where the two elements' surfaces cross, or null. Triangle boxes filter the pairs first. */
function crossing(a, b) {
  const box = (T, i) => { const o = i * 9; return [Math.min(T[o], T[o + 3], T[o + 6]), Math.min(T[o + 1], T[o + 4], T[o + 7]), Math.min(T[o + 2], T[o + 5], T[o + 8]), Math.max(T[o], T[o + 3], T[o + 6]), Math.max(T[o + 1], T[o + 4], T[o + 7]), Math.max(T[o + 2], T[o + 5], T[o + 8])]; };
  // only b's triangles that reach into a's box are worth looking at
  const ab = a.box, nb = b.tris.length / 9, near = [];
  for (let j = 0; j < nb; j++) { const q = box(b.tris, j); if (q[0] <= ab[3] && q[3] >= ab[0] && q[1] <= ab[4] && q[4] >= ab[1] && q[2] <= ab[5] && q[5] >= ab[2]) near.push([j, q]); }
  if (!near.length) return null;
  const na = a.tris.length / 9;
  for (let i = 0; i < na; i++) {
    const p = box(a.tris, i);
    for (const [j, q] of near) {
      if (p[0] > q[3] || p[3] < q[0] || p[1] > q[4] || p[4] < q[1] || p[2] > q[5] || p[5] < q[2]) continue;
      const hit = triTri(a.tris, i * 9, b.tris, j * 9);
      if (hit) return hit;
    }
  }
  return null;
}

const sub = (T, o, U, u) => [T[o] - U[u], T[o + 1] - U[u + 1], T[o + 2] - U[u + 2]];

/**
 * Möller's triangle–triangle test (no division where it matters; a tiny epsilon). Coplanar pairs (faces lying in one plane,
 * as two walls meeting flush) count as not crossing. → a point on the crossing (the middle of the two intervals' overlap,
 * approximated by the centroid of the crossing points) or null.
 */
export function triTri(T, o, U, u) {
  const EPS = 1e-9;
  const n2 = cross(sub(U, u + 3, U, u), sub(U, u + 6, U, u)), d2 = -dot(n2, [U[u], U[u + 1], U[u + 2]]);
  const dv = [0, 3, 6].map((k) => dot(n2, [T[o + k], T[o + k + 1], T[o + k + 2]]) + d2).map((x) => (Math.abs(x) < EPS ? 0 : x));
  if ((dv[0] > 0 && dv[1] > 0 && dv[2] > 0) || (dv[0] < 0 && dv[1] < 0 && dv[2] < 0)) return null;
  const n1 = cross(sub(T, o + 3, T, o), sub(T, o + 6, T, o)), d1 = -dot(n1, [T[o], T[o + 1], T[o + 2]]);
  const du = [0, 3, 6].map((k) => dot(n1, [U[u + k], U[u + k + 1], U[u + k + 2]]) + d1).map((x) => (Math.abs(x) < EPS ? 0 : x));
  if ((du[0] > 0 && du[1] > 0 && du[2] > 0) || (du[0] < 0 && du[1] < 0 && du[2] < 0)) return null;
  if (dv.every((x) => x === 0) || du.every((x) => x === 0)) return null;   // coplanar: touching, not crossing
  // run INTO each other: each triangle has corners strictly on both sides of the other's plane. A face that only meets
  // the other along its edge (a door's side against its opening's reveal) touches; it does not clash.
  const straddles = (d) => d.some((x) => x > 0) && d.some((x) => x < 0);
  if (!straddles(dv) || !straddles(du)) return null;
  // the segment where each triangle meets the other's plane
  const seg = (A, a0, d) => {
    const pts = [];
    for (let k = 0; k < 3; k++) {
      const i = a0 + k * 3, j = a0 + ((k + 1) % 3) * 3, di = d[k], dj = d[(k + 1) % 3];
      if (di === 0) pts.push([A[i], A[i + 1], A[i + 2]]);
      if ((di > 0 && dj < 0) || (di < 0 && dj > 0)) { const t = di / (di - dj); pts.push([A[i] + t * (A[j] - A[i]), A[i + 1] + t * (A[j + 1] - A[i + 1]), A[i + 2] + t * (A[j + 2] - A[i + 2])]); }
    }
    return pts.length >= 2 ? [pts[0], pts[pts.length - 1]] : pts.length === 1 ? [pts[0], pts[0]] : null;
  };
  const s1 = seg(T, o, dv), s2 = seg(U, u, du);
  if (!s1 || !s2) return null;
  const D = cross(n1, n2), L = dot(D, D);
  if (L < 1e-24) return null;
  const pr = (p) => dot(D, p);
  const a0 = Math.min(pr(s1[0]), pr(s1[1])), a1 = Math.max(pr(s1[0]), pr(s1[1]));
  const b0 = Math.min(pr(s2[0]), pr(s2[1])), b1 = Math.max(pr(s2[0]), pr(s2[1]));
  const lo = Math.max(a0, b0), hi = Math.min(a1, b1);
  const tol = 1e-9 * Math.sqrt(L);
  if (hi < lo - tol) return null;
  // a point of the crossing: along s1 where its projection is mid-overlap
  const m = (lo + hi) / 2, p0 = pr(s1[0]), p1 = pr(s1[1]), t = Math.abs(p1 - p0) > 1e-18 ? (m - p0) / (p1 - p0) : 0;
  return [0, 1, 2].map((k) => s1[0][k] + Math.max(0, Math.min(1, t)) * (s1[1][k] - s1[0][k]));
}
