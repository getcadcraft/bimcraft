/* SPDX-License-Identifier: Apache-2.0 */
/**
 * model-roof.js — a roof over walls (0.5 part 3, BM.6): its planes from the building's outline, a pitch, an overhang and
 * which edges are gable ends. No DOM: bin/test-bimcraft.mjs --model runs it in Node. Plan millimetres; heights above the
 * top of the walls (z = 0 is where the roof's underside meets the outer face of the walls).
 *
 *   roofPlan(outline, { pitch, overhang, gables }) → { kind: 'convex' | 'square', faces: [{ poly (plan), o, u, n, slope }],
 *     gables: [{ a, b, edge }], eave: polygon with the overhang, ridge: [[x0, y0, x1, y1]…], area: sloped area (mm²),
 *     projected } | { error: key }
 *   heightAt(plan, p) → the roof's height over plan point p (mm)
 *
 * outline: the building's outer faces, anticlockwise (model-rooms.js planLoops → outlines). pitch: degrees; overhang: mm;
 * gables: the outline's edge numbers that end in a gable (convex outlines only; their slope is vertical).
 *
 * Convex outlines: the roof surface is the lowest of the eave planes, z(p) = −overhang·s + min over pitched edges of
 * s·d_i(p) (d_i = how far p is inside edge i's line, s = tan(pitch)); each edge's face is where its plane is the lowest
 * (the outline with the overhang, clipped by one half-plane per other edge). Outlines with square corners (every edge
 * parallel to one of two directions at right angles — L, T, U, plus shapes): the hip roof is the union of the hip roofs
 * of every largest rectangle that fits in the outline with the overhang (the straight skeleton of such an outline is its
 * erosion by a square, and a square inside the outline lies inside one of those rectangles), so each rectangle gives its
 * four faces; where two overlap, the higher one shows (a valley). Other outlines are refused (model.err.roofshape).
 */
import { cross2 as cross, dot2 as dot, sub2 as sub } from './geom-vec.js';   // shared helpers (0.11 PERF.74; tools/perf/util-copies.mjs)
import { pointInRing as inPoly, ringArea as area } from './geom2d.js';   // shared helpers (0.11 PERF.74; tools/perf/util-copies.mjs)
export { area };
const D2R = Math.PI / 180;

export function roofPlan(outline, { pitch = 26.565, overhang = 304.8, gables = [] } = {}) {
  const P = outline.map((q) => [q[0], q[1]]);
  if (P.length < 3) return { error: 'model.err.roofshape' };
  if (!(pitch > 1 && pitch < 80)) return { error: 'model.err.pitch' };
  const s = Math.tan(pitch * D2R);
  const convex = isConvex(P);
  if (convex) return convexRoof(P, s, overhang, new Set(gables));
  const frame = squareFrame(P);
  if (!frame) return { error: 'model.err.roofshape' };
  return squareRoof(P, s, overhang, frame);
}

function edgeInfo(P, i) {
  const a = P[i], b = P[(i + 1) % P.length], L = Math.hypot(b[0] - a[0], b[1] - a[1]);
  const u = [(b[0] - a[0]) / L, (b[1] - a[1]) / L];
  return { a, b, u, n: [-u[1], u[0]], L };   // n: inward (anticlockwise outline)
}
/** The outline pushed out by `ov` on every edge (convex: consecutive offset lines meet). */
function offsetConvex(P, ov) {
  const E = P.map((_, i) => edgeInfo(P, i));
  return E.map((e, i) => {
    const f = E[(i + P.length - 1) % P.length];
    const p1 = [e.a[0] - e.n[0] * ov, e.a[1] - e.n[1] * ov], p0 = [f.a[0] - f.n[0] * ov, f.a[1] - f.n[1] * ov];
    return meet(p0, f.u, p1, e.u) || p1;
  });
}
function meet(p1, d1, p2, d2) {
  const c = cross(d1, d2);
  if (Math.abs(c) < 1e-12) return null;
  const t = cross(sub(p2, p1), d2) / c;
  return [p1[0] + d1[0] * t, p1[1] + d1[1] * t];
}

function convexRoof(P, s, ov, gables) {
  const E = P.map((_, i) => edgeInfo(P, i));
  const pitched = E.map((e, i) => i).filter((i) => !gables.has(i));
  if (pitched.length < 2) return { error: 'model.err.gables' };
  const eave = offsetConvex(P, ov);
  // d_i measured from the wall line; the plane of edge i: z = s·d_i − 0 at the wall line, −ov·s at the eave
  const d = (i, p) => dot(sub(p, E[i].a), E[i].n);
  const faces = [];
  for (const i of pitched) {
    let poly = eave.slice();
    for (const j of pitched) {
      if (j === i) continue;
      // keep where s·d_i ≤ s·d_j  ⇔  (n_i − n_j)·p ≤ n_i·a_i − n_j·a_j
      const nx = E[i].n[0] - E[j].n[0], ny = E[i].n[1] - E[j].n[1], c = dot(E[i].n, E[i].a) - dot(E[j].n, E[j].a);
      poly = clipHalf(poly, nx, ny, c);
      if (poly.length < 3) break;
    }
    if (poly.length >= 3 && Math.abs(area(poly)) > 1) faces.push({ edge: i, poly, o: E[i].a, u: E[i].u, n: E[i].n, slope: s });
  }
  const plan = { kind: 'convex', faces, eave, s, ov };
  plan.gables = [...gables].filter((i) => i < E.length).map((i) => ({ edge: i, a: E[i].a, b: E[i].b }));
  plan.ridge = ridgeLines(faces);
  plan.projected = Math.abs(area(eave));
  plan.area = plan.projected * Math.sqrt(1 + s * s);
  return plan;
}

/** Keep the part of a convex polygon where nx·x + ny·y ≤ c. */
function clipHalf(poly, nx, ny, c) {
  const out = [], f = (p) => nx * p[0] + ny * p[1] - c;
  for (let i = 0; i < poly.length; i++) {
    const a = poly[i], b = poly[(i + 1) % poly.length], fa = f(a), fb = f(b);
    if (fa <= 1e-9) out.push(a);
    if ((fa < -1e-9 && fb > 1e-9) || (fa > 1e-9 && fb < -1e-9)) { const t = fa / (fa - fb); out.push([a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t]); }
  }
  return out;
}

/** The two axes an outline with square corners runs along (unit vectors), or null. */
function squareFrame(P) {
  const e0 = edgeInfo(P, 0), u = e0.u, v = [-u[1], u[0]];
  for (let i = 0; i < P.length; i++) {
    const e = edgeInfo(P, i);
    if (Math.abs(cross(e.u, u)) > 1e-6 && Math.abs(dot(e.u, u)) > 1e-6) return null;
  }
  return { u, v };
}
function squareRoof(P, s, ov, { u, v }) {
  // into the outline's own axes
  const to = (p) => [dot(p, u), dot(p, v)], from = (q) => [u[0] * q[0] + v[0] * q[1], u[1] * q[0] + v[1] * q[1]];
  const Q = P.map(to);
  const eaveQ = offsetSquare(Q, ov);
  const xs = [...new Set(eaveQ.map((q) => r6(q[0])))].sort((a, b) => a - b), ys = [...new Set(eaveQ.map((q) => r6(q[1])))].sort((a, b) => a - b);
  const nx = xs.length - 1, ny = ys.length - 1;
  if (nx < 1 || ny < 1 || nx * ny > 2500) return { error: 'model.err.roofshape' };
  const inside = [];
  for (let i = 0; i < nx; i++) { inside.push([]); for (let j = 0; j < ny; j++) inside[i].push(inPoly((xs[i] + xs[i + 1]) / 2, (ys[j] + ys[j + 1]) / 2, eaveQ)); }
  // prefix sums: is a block of cells all inside?
  const S = Array.from({ length: nx + 1 }, () => new Int32Array(ny + 1));
  for (let i = 0; i < nx; i++) for (let j = 0; j < ny; j++) S[i + 1][j + 1] = S[i][j + 1] + S[i + 1][j] - S[i][j] + (inside[i][j] ? 0 : 1);
  const full = (i0, i1, j0, j1) => i0 >= 0 && j0 >= 0 && i1 <= nx && j1 <= ny && S[i1][j1] - S[i0][j1] - S[i1][j0] + S[i0][j0] === 0;
  const rects = [];
  for (let i0 = 0; i0 < nx; i0++) for (let i1 = i0 + 1; i1 <= nx; i1++) for (let j0 = 0; j0 < ny; j0++) for (let j1 = j0 + 1; j1 <= ny; j1++) {
    if (!full(i0, i1, j0, j1)) continue;
    if (full(i0 - 1, i1, j0, j1) || full(i0, i1 + 1, j0, j1) || full(i0, i1, j0 - 1, j1) || full(i0, i1, j0, j1 + 1)) continue;
    rects.push([xs[i0], ys[j0], xs[i1], ys[j1]]);
  }
  const faces = [];
  for (const [x0, y0, x1, y1] of rects) {
    // a hip roof over the rectangle: four faces meeting at its ridge (or a point for a square)
    const w = x1 - x0, h = y1 - y0, m = Math.min(w, h) / 2;
    const c = [(x0 + x1) / 2, (y0 + y1) / 2];
    const r = w >= h ? [[x0 + m, c[1]], [x1 - m, c[1]]] : [[c[0], y0 + m], [c[0], y1 - m]];
    const corners = [[x0, y0], [x1, y0], [x1, y1], [x0, y1]];
    const quads = w >= h
      ? [[corners[0], corners[1], r[1], r[0]], [corners[1], corners[2], r[1]], [corners[2], corners[3], r[0], r[1]], [corners[3], corners[0], r[0]]]
      : [[corners[0], corners[1], r[0]], [corners[1], corners[2], r[1], r[0]], [corners[2], corners[3], r[1]], [corners[3], corners[0], r[0], r[1]]];
    quads.forEach((q, k) => {
      const a = corners[k], b = corners[(k + 1) % 4], L = Math.hypot(b[0] - a[0], b[1] - a[1]);
      const uu = [(b[0] - a[0]) / L, (b[1] - a[1]) / L];
      const poly = dedupe(q).map(from);
      if (poly.length >= 3) faces.push({ edge: -1, poly, o: from(a), u: from(uu), n: from([-uu[1], uu[0]]), slope: s, eaveAt: -ov * s, rect: true });
    });
  }
  const eave = eaveQ.map(from);
  const plan = { kind: 'square', faces, eave, s, ov, gables: [], rects: rects.length };
  plan.ridge = ridgeLines(faces);
  plan.projected = Math.abs(area(eave));
  plan.area = plan.projected * Math.sqrt(1 + s * s);
  return plan;
}
/** An outline with square corners pushed out by ov (in its own axes): every edge moves out, corners stay square. */
function offsetSquare(Q, ov) {
  const n = Q.length, E = Q.map((_, i) => edgeInfo(Q, i));
  return E.map((e, i) => {
    const f = E[(i + n - 1) % n];
    const p1 = [e.a[0] - e.n[0] * ov, e.a[1] - e.n[1] * ov], p0 = [f.a[0] - f.n[0] * ov, f.a[1] - f.n[1] * ov];
    return meet(p0, f.u, p1, e.u) || p1;
  });
}

/** Height of the roof's underside over p (mm, from the top of the walls). */
export function heightAt(plan, p) {
  let best = -Infinity;
  for (const f of plan.faces) {
    if (!inPoly(p[0], p[1], f.poly)) continue;
    const z = (f.rect ? f.eaveAt : -plan.ov * plan.s) + f.slope * (dot(sub(p, f.o), f.n) + (f.rect ? 0 : plan.ov));
    if (z > best) best = z;
  }
  return best === -Infinity ? null : best;
}
/** The plane of a face: z = z0 + slope · (distance inside its eave edge), for the IFC writer. */
export function facePlane(plan, f) {
  // convex faces measure from the wall line (z = 0 there); rectangle faces from their eave (z = −ov·s there)
  return f.rect ? { o: f.o, z0: f.eaveAt } : { o: [f.o[0] - f.n[0] * plan.ov, f.o[1] - f.n[1] * plan.ov], z0: -plan.ov * plan.s };
}

/** Ridge and hip lines (the faces' edges that are not on the eave), for the plan. */
function ridgeLines(faces) {
  const seen = new Map();
  for (const f of faces) for (let i = 0; i < f.poly.length; i++) {
    const a = f.poly[i], b = f.poly[(i + 1) % f.poly.length];
    const k = [a, b].map((p) => Math.round(p[0]) + ',' + Math.round(p[1])).sort().join('|');
    seen.set(k, (seen.get(k) || 0) + 1);
    if (seen.get(k) === 2) seen.set(k + '#', [a[0], a[1], b[0], b[1]]);
  }
  return [...seen.entries()].filter(([k]) => k.endsWith('#')).map(([, l]) => l);
}

const r6 = (v) => Math.round(v * 1e6) / 1e6;
function dedupe(q) { return q.filter((p, i) => i === 0 || Math.hypot(p[0] - q[i - 1][0], p[1] - q[i - 1][1]) > 1e-6).filter((p, i, arr) => i < arr.length - 1 || Math.hypot(p[0] - arr[0][0], p[1] - arr[0][1]) > 1e-6); }
function isConvex(P) {
  let sign = 0;
  for (let i = 0; i < P.length; i++) {
    const a = P[i], b = P[(i + 1) % P.length], c = P[(i + 2) % P.length];
    const z = cross(sub(b, a), sub(c, b));
    if (Math.abs(z) < 1e-6) continue;
    if (!sign) sign = Math.sign(z); else if (Math.sign(z) !== sign) return false;
  }
  return true;
}
