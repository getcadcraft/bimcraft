/* SPDX-License-Identifier: Apache-2.0 */
/**
 * model-arcs.js — curved walls (0.6 round 2, DC.58 "drawing comforts", session bim-comforts_PART_2): the geometry of a wall
 * whose centre line is an arc, the same questions asked of a straight wall, and the IFC curves it is written with. No DOM:
 * bin/test-bimcraft.mjs --comforts runs it in Node. Plan millimetres.
 *
 * A wall is { a, b, bulge } (bulge = tan(θ / 4), θ the arc's included angle from a to b, + = anticlockwise, as in DXF;
 * 0 or missing = straight). Every function below answers for both kinds, so callers need not ask which it is.
 *
 *   arcOf(a, b, bulge) → { C, R, theta, sg, a0, len, chord, mid } | null (straight)
 *   wallGeom(wall) → { arc, L, chord, at(s, off), tan(s), normal(s), param(p) → { s, off } }
 *        s runs along the centre line from a (arc length on a curved wall); off is to the left of the way the wall runs
 *   arcLength(a, b, bulge) · chordFor(len, bulge) · bulgeThrough(a, p, b) · arcHeight(a, b, bulge) · bulgeFromHeight(a, b, h)
 *   arcMid(p, q, bulge) · arcPoints(p, q, bulge, step) (the points between) · flatPoly(poly) (points with a bulge → chords)
 *   hostFrame(wall, off, width) → { x, y, ang }   where a door / window of `width` at `off` sits in the wall's own axes
 *   hostOffset(wall, M, width)                     back: the offset of an opening placed by matrix M (wall axes, mm)
 *   openingCut(wall, op, proud) → [[x, y]…] | null  a curved wall's opening body (the opening's axes): radial jambs
 *   wallMap(wall) → { toL(p) → [s, off], toW([s, off]) → p }
 *   arcAxisCurve(w, wall) · profileCurve(w, pts) · profileKeyPoints(pts, v4)   IFC: the Axis IfcTrimmedCurve of an IfcCircle,
 *        a profile with arc edges as IFC4 IfcIndexedPolyCurve (IfcArcIndex) — IFC2X3: an IfcPolyline of chords — and the
 *        points such a profile holds (to see whether a stored shape is still right)
 *
 * The Axis of a curved wall is an IfcTrimmedCurve on an IfcCircle in the wall's axes (origin at its start, X along the chord),
 * trimmed by its two ends as IfcCartesianPoints (MasterRepresentation CARTESIAN, SenseAgreement = anticlockwise), as the
 * buildingSMART IFC4 schema's IfcWall Axis (Curve2D, an IfcBoundedCurve) allows; its Body sweeps a profile whose two long
 * edges are arcs (IfcArcIndex: start, a point on the arc, end).
 */
import { round } from './model-write.js';
import { dist2 as dist, dot2 as dot, sub2 as sub } from './geom-vec.js';   // shared helpers (0.11 PERF.74; tools/perf/util-copies.mjs)

const TAU = 2 * Math.PI;
/** Chords on a flattened arc span at most this angle (4°: under 3 mm off a 5 m radius). */
export const ARC_STEP = 4 * Math.PI / 180;
/** The most a wall may turn: three quarters of a circle (bulge tan(67.5°)). */
export const BULGE_MAX = Math.tan(270 / 4 * Math.PI / 180);
const wrap = (x) => { let y = (x + Math.PI) % TAU; if (y <= 0) y += TAU; return y - Math.PI; };   // into (−π, π]

/** The circle of the arc from a to b with this bulge (null when it is straight or a and b are one point). */
export function arcOf(a, b, bulge) {
  const bg = Number(bulge) || 0;
  const dx = b[0] - a[0], dy = b[1] - a[1], c = Math.hypot(dx, dy);
  if (!(Math.abs(bg) > 1e-9) || c < 1e-9) return null;
  const theta = 4 * Math.atan(bg);
  const nl = [-dy / c, dx / c];
  const h = bg * c / 2;   // sagitta: a + bulge bows to the right of a → b (its centre is on the left)
  const m = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
  const mid = [m[0] - nl[0] * h, m[1] - nl[1] * h];
  const R = ((c / 2) ** 2 + h * h) / (2 * Math.abs(h));
  const sg = Math.sign(theta);
  const C = [mid[0] + nl[0] * R * sg, mid[1] + nl[1] * R * sg];
  return { C, R, theta, sg, a0: Math.atan2(a[1] - C[1], a[0] - C[0]), len: R * Math.abs(theta), chord: c, mid };
}
export const arcLength = (a, b, bulge) => { const k = arcOf(a, b, bulge); return k ? k.len : dist(a, b); };
/** The chord of an arc `len` long with this bulge (its included angle). */
export function chordFor(len, bulge) {
  const th = Math.abs(4 * Math.atan(Number(bulge) || 0));
  return th < 1e-9 ? len : len * Math.sin(th / 2) / (th / 2);
}
/** The middle of the arc from p to q. */
export function arcMid(p, q, bulge) {
  const c = dist(p, q) || 1, nl = [-(q[1] - p[1]) / c, (q[0] - p[0]) / c], h = (Number(bulge) || 0) * c / 2;
  return [(p[0] + q[0]) / 2 - nl[0] * h, (p[1] + q[1]) / 2 - nl[1] * h];
}
/** How far the arc's middle stands off its chord, + to the left of a → b (Properties › Arc height), and back. */
export const arcHeight = (a, b, bulge) => -(Number(bulge) || 0) * dist(a, b) / 2;
export const bulgeFromHeight = (a, b, h) => { const c = dist(a, b); return c > 0 ? -2 * h / c : 0; };
/** The bulge of the arc from a through p to b (0 when the three are in a line). */
export function bulgeThrough(a, p, b) {
  const d = 2 * (a[0] * (p[1] - b[1]) + p[0] * (b[1] - a[1]) + b[0] * (a[1] - p[1]));
  if (Math.abs(d) < 1e-9 * (dist(a, b) ** 2 + 1)) return 0;
  const A2 = a[0] ** 2 + a[1] ** 2, P2 = p[0] ** 2 + p[1] ** 2, B2 = b[0] ** 2 + b[1] ** 2;
  const C = [(A2 * (p[1] - b[1]) + P2 * (b[1] - a[1]) + B2 * (a[1] - p[1])) / d, (A2 * (b[0] - p[0]) + P2 * (a[0] - b[0]) + B2 * (p[0] - a[0])) / d];
  const ang = (q) => Math.atan2(q[1] - C[1], q[0] - C[0]);
  const norm = (x) => ((x % TAU) + TAU) % TAU;
  const ccw = norm(ang(b) - ang(a)), dp = norm(ang(p) - ang(a));
  const theta = dp < ccw ? ccw : -(TAU - ccw);
  return Math.tan(theta / 4);
}
/** The points strictly between p and q on the arc (none when straight), one per `step` of angle at most. */
export function arcPoints(p, q, bulge, step = ARC_STEP) {
  const k = arcOf(p, q, bulge);
  if (!k) return [];
  const n = Math.max(1, Math.ceil(Math.abs(k.theta) / step));
  const out = [];
  for (let i = 1; i < n; i++) { const f = k.a0 + k.theta * i / n; out.push([k.C[0] + k.R * Math.cos(f), k.C[1] + k.R * Math.sin(f)]); }
  return out;
}
/** A polygon whose points may carry a bulge ([x, y, bulge]: the edge from it to the next is an arc) as plain points. */
export function flatPoly(poly, step = ARC_STEP) {
  const out = [];
  for (let i = 0; i < poly.length; i++) {
    const p = poly[i], q = poly[(i + 1) % poly.length];
    out.push([p[0], p[1]]);
    if (p[2]) out.push(...arcPoints(p, q, p[2], step));
  }
  return out;
}

/** One answer for straight and curved walls: length, points along it and off it, the tangent, where a point lies. */
export function wallGeom(wall) {
  const a = wall.a, b = wall.b, k = arcOf(a, b, wall.bulge);
  if (!k) {
    const L = dist(a, b) || 1e-9, u = [(b[0] - a[0]) / L, (b[1] - a[1]) / L], n = [-u[1], u[0]];
    return {
      arc: null, L, chord: L,
      at: (s, off = 0) => [a[0] + u[0] * s + n[0] * off, a[1] + u[1] * s + n[1] * off],
      tan: () => u, normal: () => n,
      param: (p) => ({ s: dot(sub(p, a), u), off: dot(sub(p, a), n) }),
    };
  }
  const { C, R, sg, a0, theta } = k, half = Math.abs(theta) / 2;
  const phi = (s) => a0 + sg * s / R;
  return {
    arc: k, L: k.len, chord: k.chord,
    at: (s, off = 0) => { const f = phi(s), r = R - off * sg; return [C[0] + r * Math.cos(f), C[1] + r * Math.sin(f)]; },
    tan: (s) => { const f = phi(s); return [-sg * Math.sin(f), sg * Math.cos(f)]; },
    normal: (s) => { const f = phi(s); return [-sg * Math.cos(f), -sg * Math.sin(f)]; },
    param: (p) => {
      const d = (Math.atan2(p[1] - C[1], p[0] - C[0]) - a0) * sg;
      return { s: R * (wrap(d - half) + half), off: (R - dist(p, C)) * sg };
    },
  };
}
/** Plan point ↔ (along, off) for a wall — linear for a straight one, polar for a curved one. */
export function wallMap(wall) {
  const g = wallGeom(wall);
  return { toL: (p) => { const q = g.param(p); return [q.s, q.off]; }, toW: ([s, off]) => g.at(s, off), geom: g };
}
/** The wall's own axes: origin at its start, X along its chord (as model-walls.js places it). */
function wallAxes(wall) {
  const ang = Math.atan2(wall.b[1] - wall.a[1], wall.b[0] - wall.a[0]), c = Math.cos(ang), s = Math.sin(ang);
  return {
    ang,
    toLocal: (p) => [(p[0] - wall.a[0]) * c + (p[1] - wall.a[1]) * s, -(p[0] - wall.a[0]) * s + (p[1] - wall.a[1]) * c],
    toWorld: (q) => [wall.a[0] + q[0] * c - q[1] * s, wall.a[1] + q[0] * s + q[1] * c],
  };
}
/**
 * Where an opening `width` wide whose near edge is `off` along the wall sits in the wall's axes: { x, y, ang (degrees) }.
 * Straight: (off, 0, 0). Curved: square to the wall at the opening's middle, its X along the tangent there.
 */
export function hostFrame(wall, off, width) {
  if (!arcOf(wall.a, wall.b, wall.bulge)) return { x: off, y: 0, ang: 0 };
  const g = wallGeom(wall), sc = off + width / 2, M = g.at(sc, 0), T = g.tan(sc);
  const O = [M[0] - T[0] * width / 2, M[1] - T[1] * width / 2];
  const ax = wallAxes(wall), o = ax.toLocal(O);
  return { x: o[0], y: o[1], ang: (Math.atan2(T[1], T[0]) - ax.ang) * 180 / Math.PI };
}
/** The offset of an opening from the matrix that places it in its wall (mm, the wall's axes; model-write.js relMatrix). */
export function hostOffset(wall, M, width) {
  if (!arcOf(wall.a, wall.b, wall.bulge)) return M[12];
  const xl = Math.hypot(M[0], M[1]) || 1, X = [M[0] / xl, M[1] / xl];
  const ax = wallAxes(wall), c = ax.toWorld([M[12] + X[0] * width / 2, M[13] + X[1] * width / 2]);
  return wallGeom(wall).param(c).s - width / 2;
}
/**
 * A curved wall's opening body as a profile in the opening's axes (hostFrame): its jambs along the radius at both ends of the
 * opening, through the wall `proud` past each face — the convex face's corners pushed out so the straight edge between them
 * still clears the curve. null for a straight wall (the opening is the usual box).
 */
export function openingCut(wall, op, proud = 10) {
  const k = arcOf(wall.a, wall.b, wall.bulge);
  if (!k) return null;
  const g = wallGeom(wall), t = wall.t || 0, s0 = op.offset, s1 = op.offset + op.width, sc = (s0 + s1) / 2;
  const half = op.width / k.R / 2, y = t / 2 + proud;
  const pt = (s, off) => {
    const r = k.R - off * k.sg, f = k.a0 + k.sg * s / k.R, rr = r > k.R ? r / Math.cos(half) : r;
    return [k.C[0] + rr * Math.cos(f), k.C[1] + rr * Math.sin(f)];
  };
  const M = g.at(sc, 0), T = g.tan(sc), N = [-T[1], T[0]], O = [M[0] - T[0] * op.width / 2, M[1] - T[1] * op.width / 2];
  const loc = (p) => [dot(sub(p, O), T), dot(sub(p, O), N)];
  return [loc(pt(s0, -y)), loc(pt(s1, -y)), loc(pt(s1, y)), loc(pt(s0, y))];
}

// ---------------------------------------------------------------------------------------------------------------- IFC
/** The Axis of a curved wall: an IfcTrimmedCurve of an IfcCircle in the wall's axes, from (0, 0) to (chord, 0). */
export function arcAxisCurve(w, wall) {
  const k = arcOf(wall.a, wall.b, wall.bulge);
  const c = wallAxes(wall).toLocal(k.C);
  const pos = w.make('IFCAXIS2PLACEMENT2D', w.H(w.point2mm(c[0], c[1])), null);
  const circle = w.make('IFCCIRCLE', w.H(pos), round(w.u(k.R)));
  return w.make('IFCTRIMMEDCURVE', w.H(circle), [w.H(w.point2mm(0, 0))], [w.H(w.point2mm(k.chord, 0))], k.sg > 0, 'CARTESIAN');
}
/** A closed profile curve whose points may carry a bulge: IFC4 IfcIndexedPolyCurve (lines and IfcArcIndex arcs), IFC2X3 an
 *  IfcPolyline of chords. */
export function profileCurve(w, pts) {
  if (!pts.some((p) => p[2]) || !w.v4) return w.polyline2(flatPoly(pts), true);
  const list = [], segs = [];
  const add = (q) => { list.push([round(w.u(q[0])), round(w.u(q[1]))]); return list.length; };
  const first = add(pts[0]);
  for (let i = 0; i < pts.length; i++) {
    const p = pts[i], q = pts[(i + 1) % pts.length], i0 = i === 0 ? first : list.length;
    const last = i === pts.length - 1;
    if (!p[2]) { const i1 = last ? first : add(q); segs.push(w.T('IFCLINEINDEX', [i0, i1])); continue; }
    const im = add(arcMid(p, q, p[2])), i1 = last ? first : add(q);
    segs.push(w.T('IFCARCINDEX', [i0, im, i1]));
  }
  return w.make('IFCINDEXEDPOLYCURVE', w.H(w.make('IFCCARTESIANPOINTLIST2D', list)), segs, false);
}
/** The points profileCurve stores for `pts` (mm): IFC4 each corner then each arc's middle; IFC2X3 the chords' points. */
export function profileKeyPoints(pts, v4 = true) {
  if (!pts.some((p) => p[2]) || !v4) return flatPoly(pts);
  const out = [];
  for (let i = 0; i < pts.length; i++) { const p = pts[i]; out.push([p[0], p[1]]); if (p[2]) out.push(arcMid(p, pts[(i + 1) % pts.length], p[2])); }
  return out;
}
