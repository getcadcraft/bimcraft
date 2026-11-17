/* SPDX-License-Identifier: Apache-2.0 */
import { modelOf } from './annoscale.js';   // 0.10 BK.10: paper height x drawing scale, the shared rule (lib/annoscale)
/**
 * spaces-geom.js — the plain geometry behind the room, area, opening and group tools (0.10, session bk-tools-a-10). No imports,
 * no DOM, no IFC, no units of its own (plan millimetres in, the same out), so another host can use it as it is and Node tests it:
 * tools/bimcraft-test/tools-a-test.mjs.
 *
 *   polyArea(p) signed · absArea(p) · polyPerimeter(p) · inPoly(q, p) · polyInside(outer, inner) · polyProblem(points)
 *   overlapArea(a, b) → mm²   the area two outlines share. a and b are { poly, holes } or a plain ring. Exact for straight-edged
 *                              outlines of any shape (concave, with holes): the plane is cut into strips at every corner and crossing,
 *                              and in a strip every edge is a straight piece, so each shared piece is a trapezoid.
 *   lineOnFace(wall, face) → [a, b]   a wall's centre line, or its left / right face ('centre' | 'left' | 'right'), from its ends and thickness
 *   faceFromOutline(wall, outline, face) → [a, b]   the same, taken from the wall's JOINED outline (its corners mitred into its
 *                              neighbours), so the faces of walls that meet at a corner meet there too; falls back to lineOnFace
 *   sideOf(wall, p) → 'left' | 'right'   which side of the wall's centre line p is on
 *   tagLines(target, { area }) → [text…]   what a tag says: number, name, area (lines with nothing to say are left out)
 *   tagSize(lines, paperHeight, scale) → { h, w, hgt, gap }   the tag's box in model mm: text paperHeight mm tall ON PAPER at 1 : scale
 *   nextNumber(text) → text   "101" → "102", "A-09" → "A-10", "Lobby" → "Lobby" (a number with no digits at its end stays)
 *   zOverlap(a0, a1, b0, b1) → bool   do two height ranges share more than a touch (1 mm)
 *   groupContent(members, origin) → [plain objects]   what a group instance is made of, measured from its own origin (so two
 *                              instances of one group that are alike have the same content wherever they stand)
 *   sameContent(a, b, tol = 0.05) → bool   are two contents alike: the same members in any order, every number within tol mm
 *                              (compared, never rounded and hashed: a size like 57.15 sits on a rounding edge)
 *   shiftMember(member, dx, dy) → member   the same member moved
 */
const EPS = 1e-9;

export function polyArea(p) { let s = 0; for (let i = 0; i < p.length; i++) { const a = p[i], b = p[(i + 1) % p.length]; s += a[0] * b[1] - a[1] * b[0]; } return s / 2; }
export const absArea = (p) => Math.abs(polyArea(p));
export function polyPerimeter(p) { let s = 0; for (let i = 0; i < p.length; i++) { const a = p[i], b = p[(i + 1) % p.length]; s += Math.hypot(b[0] - a[0], b[1] - a[1]); } return s; }
export function inPoly(q, p) {
  let c = false;
  for (let i = 0, j = p.length - 1; i < p.length; j = i++) {
    const a = p[i], b = p[j];
    if ((a[1] > q[1]) !== (b[1] > q[1]) && q[0] < (b[0] - a[0]) * (q[1] - a[1]) / (b[1] - a[1]) + a[0]) c = !c;
  }
  return c;
}
function crosses(a, b, c, d) {
  const o = (p, q, r) => Math.sign((q[0] - p[0]) * (r[1] - p[1]) - (q[1] - p[1]) * (r[0] - p[0]));
  return o(a, b, c) * o(a, b, d) < 0 && o(c, d, a) * o(c, d, b) < 0;
}
/** Every corner of `inner` inside `outer` and no edges crossing. */
export function polyInside(outer, inner) {
  if (!inner.every((q) => inPoly(q, outer))) return false;
  for (let i = 0; i < inner.length; i++) for (let j = 0; j < outer.length; j++) if (crosses(inner[i], inner[(i + 1) % inner.length], outer[j], outer[(j + 1) % outer.length])) return false;
  return true;
}
/** Why an outline cannot be used: 'few' (under three corners), 'cross' (it crosses itself), 'small' (under 100 mm²), or null. */
export function polyProblem(points) {
  if (!points || points.length < 3) return 'few';
  for (let i = 0; i < points.length; i++) for (let j = i + 1; j < points.length; j++) {
    if (Math.abs(i - j) <= 1 || (i === 0 && j === points.length - 1)) continue;
    if (crosses(points[i], points[(i + 1) % points.length], points[j], points[(j + 1) % points.length])) return 'cross';
  }
  return absArea(points) < 100 ? 'small' : null;
}

const ringsOf = (x) => (Array.isArray(x) ? [x] : [x.poly, ...(x.holes || [])]).filter((r) => r && r.length >= 3);
const edgesOf = (rings) => rings.flatMap((r) => r.map((a, i) => [a, r[(i + 1) % r.length]])).filter(([a, b]) => Math.abs(a[1] - b[1]) > EPS);   // level edges bound no strip
const xAt = (e, y) => e[0][0] + (e[1][0] - e[0][0]) * (y - e[0][1]) / (e[1][1] - e[0][1]);
/** The spans [x0, x1] at height y that are inside the rings (even-odd, so holes are out). */
function spans(edges, y) {
  const xs = [];
  for (const e of edges) { const lo = Math.min(e[0][1], e[1][1]), hi = Math.max(e[0][1], e[1][1]); if (y > lo && y < hi) xs.push(xAt(e, y)); }
  xs.sort((a, b) => a - b);
  const out = [];
  for (let i = 0; i + 1 < xs.length; i += 2) out.push([xs[i], xs[i + 1]]);
  return out;
}
function shared(A, B) {
  let s = 0, i = 0, j = 0;
  while (i < A.length && j < B.length) {
    const lo = Math.max(A[i][0], B[j][0]), hi = Math.min(A[i][1], B[j][1]);
    if (hi > lo) s += hi - lo;
    if (A[i][1] < B[j][1]) i++; else j++;
  }
  return s;
}
export function overlapArea(a, b) {
  const ea = edgesOf(ringsOf(a)), eb = edgesOf(ringsOf(b));
  if (!ea.length || !eb.length) return 0;
  const ys = new Set();
  for (const e of [...ea, ...eb]) { ys.add(e[0][1]); ys.add(e[1][1]); }
  // where an edge of one crosses an edge of the other (or of its own outline's holes): the strips must end there
  const all = [...ea, ...eb];
  for (let i = 0; i < all.length; i++) for (let j = i + 1; j < all.length; j++) {
    const [p, q] = all[i], [r, s] = all[j];
    const d1 = [q[0] - p[0], q[1] - p[1]], d2 = [s[0] - r[0], s[1] - r[1]], den = d1[0] * d2[1] - d1[1] * d2[0];
    if (Math.abs(den) < 1e-12) continue;
    const t = ((r[0] - p[0]) * d2[1] - (r[1] - p[1]) * d2[0]) / den, u = ((r[0] - p[0]) * d1[1] - (r[1] - p[1]) * d1[0]) / den;
    if (t > EPS && t < 1 - EPS && u > EPS && u < 1 - EPS) ys.add(p[1] + d1[1] * t);
  }
  const Y = [...ys].sort((m, n) => m - n);
  let area = 0;
  for (let k = 0; k + 1 < Y.length; k++) {
    const h = Y[k + 1] - Y[k];
    if (h <= EPS) continue;
    const mid = (Y[k] + Y[k + 1]) / 2;   // every edge is straight across the strip: the width at mid-height is its mean width
    area += shared(spans(ea, mid), spans(eb, mid)) * h;
  }
  return area;
}

export function lineOnFace(wall, face = 'centre') {
  const a = wall.a, b = wall.b;
  if (face !== 'left' && face !== 'right') return [[a[0], a[1]], [b[0], b[1]]];
  const L = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1, k = (face === 'left' ? 1 : -1) * (wall.t || 0) / 2;
  const n = [-(b[1] - a[1]) / L * k, (b[0] - a[0]) / L * k];
  return [[a[0] + n[0], a[1] + n[1]], [b[0] + n[0], b[1] + n[1]]];
}
export function faceFromOutline(wall, outline, face = 'centre') {
  if ((face !== 'left' && face !== 'right') || !outline || outline.length < 3 || wall.bulge) return lineOnFace(wall, face);
  const a = wall.a, b = wall.b, L = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1, u = [(b[0] - a[0]) / L, (b[1] - a[1]) / L], n = [-u[1], u[0]];
  const want = (face === 'left' ? 1 : -1) * (wall.t || 0) / 2;
  let lo = Infinity, hi = -Infinity;
  for (const q of outline) {
    const d = [q[0] - a[0], q[1] - a[1]], off = d[0] * n[0] + d[1] * n[1];
    if (Math.abs(off - want) > 0.5) continue;   // a corner of the outline on that face
    const s = d[0] * u[0] + d[1] * u[1];
    lo = Math.min(lo, s); hi = Math.max(hi, s);
  }
  if (!(hi - lo > 1)) return lineOnFace(wall, face);
  return [[a[0] + u[0] * lo + n[0] * want, a[1] + u[1] * lo + n[1] * want], [a[0] + u[0] * hi + n[0] * want, a[1] + u[1] * hi + n[1] * want]];
}
export function sideOf(wall, p) {
  const a = wall.a, b = wall.b;
  return (b[0] - a[0]) * (p[1] - a[1]) - (b[1] - a[1]) * (p[0] - a[0]) >= 0 ? 'left' : 'right';
}

export function tagLines(target, { area = '' } = {}) {
  return [target?.number, target?.name, area].map((x) => String(x ?? '').trim()).filter(Boolean);
}
/** Text paperHeight mm tall on paper is paperHeight × scale mm in the model. Lines sit 1.5 heights apart; a letter is taken as 0.6 of the height wide. */
export function tagSize(lines, paperHeight = 2.5, scale = 100) {
  const hgt = modelOf(Math.max(0.1, Number(paperHeight) || 2.5), Math.max(1, Number(scale) || 100)), gap = hgt * 1.5;   // 0.10 BK.10: the one paper-height rule (annoscale.js)
  const longest = Math.max(1, ...lines.map((l) => String(l).length));
  return { hgt, gap, w: longest * hgt * 0.6 + hgt, h: Math.max(1, lines.length) * gap + hgt * 0.5 };
}

export function nextNumber(text) {
  const m = /^(.*?)(\d+)$/.exec(String(text ?? ''));
  if (!m) return String(text ?? '');
  const n = String(Number(m[2]) + 1);
  return m[1] + (n.length < m[2].length ? '0'.repeat(m[2].length - n.length) + n : n);
}

export const zOverlap = (a0, a1, b0, b1) => Math.min(a1, b1) - Math.max(a0, b0) > 1;

/**
 * members: [{ kind: 'wall' | 'floor' | 'column' | …, …the numbers that make it }] with plan points in `a`, `b`, `at`, `points`.
 * Everything is written from the origin; identities (guid, id, storey, opening) are left out.
 */
const SKIP = new Set(['guid', 'id', 'storey', 'opening']);
const r4 = (v) => { const r = Math.round(v * 1e4) / 1e4; return Object.is(r, -0) ? 0 : r; };
export function groupContent(members, origin = [0, 0]) {
  const pt = (q) => [r4(q[0] - origin[0]), r4(q[1] - origin[1])];
  const plain = (o) => Object.fromEntries(Object.entries(o).filter(([k, v]) => !SKIP.has(k) && v !== undefined && v !== null).map(([k, v]) => [k, typeof v === 'number' ? r4(v) : v]));
  return members.map((m) => {
    const o = {};
    for (const [k, v] of Object.entries(m)) {
      if (SKIP.has(k) || v === undefined || v === null) continue;
      if (k === 'a' || k === 'b' || k === 'at') o[k] = pt(v);
      else if (k === 'points') o[k] = v.map(pt);
      else if (k === 'openings') o[k] = v.map(plain);
      else o[k] = typeof v === 'number' ? r4(v) : v;
    }
    return o;
  });
}
function alike(x, y, tol) {
  if (typeof x === 'number' && typeof y === 'number') return Math.abs(x - y) <= tol;
  if (Array.isArray(x) && Array.isArray(y)) {
    if (x.length !== y.length) return false;
    if (x.length && typeof x[0] === 'object' && !Array.isArray(x[0])) return sameContent(x, y, tol);   // a list of things: any order
    return x.every((v, i) => alike(v, y[i], tol));                                                       // numbers and points: in order
  }
  if (x && y && typeof x === 'object' && typeof y === 'object') { const kx = Object.keys(x), ky = Object.keys(y); return kx.length === ky.length && kx.every((k) => k in y && alike(x[k], y[k], tol)); }
  return x === y;
}
export function sameContent(a, b, tol = 0.05) {
  if (!Array.isArray(a) || !Array.isArray(b) || a.length !== b.length) return false;
  const left = b.slice();
  for (const x of a) { const i = left.findIndex((y) => alike(x, y, tol)); if (i < 0) return false; left.splice(i, 1); }
  return true;
}
export function shiftMember(m, dx, dy) {
  const mv = (q) => [q[0] + dx, q[1] + dy], o = { ...m };
  for (const k of ['a', 'b', 'at']) if (m[k]) o[k] = mv(m[k]);
  if (m.points) o.points = m.points.map(mv);
  return o;
}
