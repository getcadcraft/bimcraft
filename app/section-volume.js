/* SPDX-License-Identifier: Apache-2.0 */
/**
 * section-volume.js — free-form section volumes (0.5 WL.1), DOM-free. A volume is a UNION of convex cells; what is
 * inside any cell is kept. A cell is a box with each face tilted on its own and extra planes cutting it further:
 *
 *   cell = { box: { min: [x, y, z], max: [x, y, z] },        IFC axes (X east, Y north, Z up), metres from the model's
 *                                                            minimum corner — the section box sliders' space
 *            tilt: { x0: [a, b], x1: …, y0, y1, z0, z1 },   degrees; a face turns about its centre (FACE_AXES says which way)
 *            planes: [{ az, el, off }] }                     extra planes: outward direction by azimuth (° from +X towards +Y)
 *                                                            and elevation (° up), `off` metres from the box's centre
 *
 *   cleanCell(raw, size) / cleanVolume(raw, size)   untrusted input (BCF, tests, the page) → a valid cell / list of cells
 *   cellPlanes(cell)       → [{ n, p, face | extra }]  outward unit normal n and a point p on each plane (IFC rel. space)
 *   inside(planes, p)      → bool  (on or inside every plane)          insideAny(cellsPlanes, p) → bool (the union)
 *   polyhedron(planes)     → { verts, loops (per plane, vertex indices round its face), edges } — the cell's outline
 *   planeFromPoint(n, p, box) → { az, el, off }  a plane through a point (BCF import) as an extra plane of `box`
 *   clipGlsl(spec)         → GLSL replacing three.js's clipping chunk: keep = AND of clauses, clause = OR of (not) in(group)
 *   modelSpec(groups) / capSpec(groups, c, i)   the specs the viewer needs (whole union; plane i of cell c's cut face)
 *   boxGrips(box)          → grips (0.5 WL.2): 6 faces, 12 edges (move the two faces meeting there), 8 corners (all three)
 *   dragDelta(ray, start, axes, view) → how far a grip moves along its axes for a pointer ray (IFC rel. space)
 *   dragBox(box, faces, delta, size)  → the box with those faces moved (clamped to the model, never inside out)
 *
 * A face tilt of [a, b] leans the face's outward normal by tan(a) along FACE_AXES[face][0] and tan(b) along [1]
 * (|a|, |b| ≤ MAX_TILT): a = 30 on x1 turns the +X face so it faces 30° towards +Y.
 */

import { add3 as add, cross3 as cross, dot3 as dot, scale3 as mul, sub3 as sub, unit3 as unit } from './geom-vec.js';   // shared helpers (0.11 PERF.74; tools/perf/util-copies.mjs)
export const FACES = ['x0', 'x1', 'y0', 'y1', 'z0', 'z1'];
/** The two in-plane axes each face leans along (0 = X, 1 = Y, 2 = Z). */
export const FACE_AXES = { x0: [1, 2], x1: [1, 2], y0: [0, 2], y1: [0, 2], z0: [0, 1], z1: [0, 1] };
export const MAX_TILT = 80;
export const MAX_CELLS = 8;
export const MAX_PLANES = 6;
const EPS = 1e-7;

const num = (v, d = 0) => (Number.isFinite(Number(v)) ? Number(v) : d);
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
const rad = (d) => d * Math.PI / 180;
const deg = (r) => r * 180 / Math.PI;

/** A cell from untrusted input; `size` = the model's size [X, Y, Z] (m): the box is kept inside [0, size]. */
export function cleanCell(raw, size = [Infinity, Infinity, Infinity]) {
  const r = raw && typeof raw === 'object' ? raw : {};
  const b = r.box && typeof r.box === 'object' ? r.box : {};
  const min = [0, 0, 0], max = [0, 0, 0];
  for (let k = 0; k < 3; k++) {
    const s = Number.isFinite(size[k]) ? Math.max(0, size[k]) : Infinity;
    const lo = clamp(num(b.min?.[k], 0), 0, Number.isFinite(s) ? s : 1e9);
    const hi = clamp(num(b.max?.[k], Number.isFinite(s) ? s : lo), 0, Number.isFinite(s) ? s : 1e9);
    min[k] = Math.min(lo, hi); max[k] = Math.max(lo, hi);
  }
  const tilt = {};
  const t = r.tilt && typeof r.tilt === 'object' ? r.tilt : {};
  for (const f of FACES) {
    const v = Array.isArray(t[f]) ? t[f] : null;
    if (!v) continue;
    const a = clamp(num(v[0]), -MAX_TILT, MAX_TILT), c = clamp(num(v[1]), -MAX_TILT, MAX_TILT);
    if (a || c) tilt[f] = [a, c];
  }
  const planes = (Array.isArray(r.planes) ? r.planes : []).slice(0, MAX_PLANES)
    .filter((p) => p && typeof p === 'object')
    .map((p) => ({ az: ((num(p.az) % 360) + 360) % 360, el: clamp(num(p.el), -90, 90), off: clamp(num(p.off), -1e6, 1e6) }));
  return { box: { min, max }, tilt, planes };
}
/** A list of cells (at least one when `size` is given: the whole model). */
export function cleanVolume(raw, size) {
  const list = (Array.isArray(raw) ? raw : []).slice(0, MAX_CELLS).map((c) => cleanCell(c, size));
  if (!list.length && size) list.push(cleanCell({ box: { min: [0, 0, 0], max: [...size] } }, size));
  return list;
}

export const centreOf = (box) => [0, 1, 2].map((k) => (box.min[k] + box.max[k]) / 2);

/** Outward normal and point of each plane bounding the cell. */
export function cellPlanes(cell) {
  const { min, max } = cell.box, c = centreOf(cell.box), out = [];
  for (const f of FACES) {
    const k = 'xyz'.indexOf(f[0]), hi = f[1] === '1';
    const n0 = [0, 0, 0]; n0[k] = hi ? 1 : -1;
    const p = [...c]; p[k] = hi ? max[k] : min[k];
    const [ta, tb] = cell.tilt?.[f] || [0, 0];
    let n = n0;
    if (ta || tb) {
      const [u, v] = FACE_AXES[f];
      n = [...n0]; n[u] += Math.tan(rad(ta)); n[v] += Math.tan(rad(tb));
      n = unit(n);
    }
    out.push({ n, p, face: f });
  }
  (cell.planes || []).forEach((q, i) => {
    const n = unit([Math.cos(rad(q.el)) * Math.cos(rad(q.az)), Math.cos(rad(q.el)) * Math.sin(rad(q.az)), Math.sin(rad(q.el))]);
    out.push({ n, p: add(c, mul(n, q.off)), extra: i });
  });
  return out;
}

export const inside = (planes, p, eps = 1e-6) => planes.every((q) => dot(q.n, sub(p, q.p)) <= eps);
export const insideAny = (cellsPlanes, p, eps) => cellsPlanes.some((pl) => inside(pl, p, eps));

/** The point where three planes meet, or null when two are (nearly) parallel. */
function meet(a, b, c) {
  const bc = cross(b.n, c.n), d = dot(a.n, bc);
  if (Math.abs(d) < 1e-9) return null;
  const da = dot(a.n, a.p), db = dot(b.n, b.p), dc = dot(c.n, c.p);
  return mul(add(add(mul(bc, da), mul(cross(c.n, a.n), db)), mul(cross(a.n, b.n), dc)), 1 / d);
}

/**
 * The convex polyhedron the planes bound: its corners, each plane's face as a loop of corner indices (counter-clockwise
 * seen from outside; empty when the plane does not touch the cell) and the edges (pairs, once each). Empty cell → no verts.
 */
export function polyhedron(planes) {
  const verts = [], on = [];
  const scale = planes.reduce((m, q) => Math.max(m, Math.abs(q.p[0]), Math.abs(q.p[1]), Math.abs(q.p[2])), 1);
  const tol = scale * 1e-7 + EPS;
  for (let i = 0; i < planes.length; i++) for (let j = i + 1; j < planes.length; j++) for (let k = j + 1; k < planes.length; k++) {
    const x = meet(planes[i], planes[j], planes[k]);
    if (!x || !inside(planes, x, tol * 10)) continue;
    let at = verts.findIndex((v) => Math.hypot(v[0] - x[0], v[1] - x[1], v[2] - x[2]) <= tol * 100);
    if (at < 0) { at = verts.length; verts.push(x); on.push(new Set()); }
    on[at].add(i).add(j).add(k);
  }
  const loops = planes.map((q, i) => {
    const ids = [];
    verts.forEach((v, vi) => { if (on[vi].has(i) || Math.abs(dot(q.n, sub(v, q.p))) <= tol * 100) ids.push(vi); });
    if (ids.length < 3) return [];
    const c = mul(ids.reduce((s, vi) => add(s, verts[vi]), [0, 0, 0]), 1 / ids.length);
    const u = unit(sub(verts[ids[0]], c)), w = cross(q.n, u);
    return ids.map((vi) => { const d = sub(verts[vi], c); return [vi, Math.atan2(dot(d, w), dot(d, u))]; })
      .sort((a, b) => a[1] - b[1]).map((x) => x[0]);
  });
  const seen = new Set(), edges = [];
  for (const L of loops) for (let i = 0; i < L.length; i++) {
    const a = L[i], b = L[(i + 1) % L.length], key = a < b ? a + ',' + b : b + ',' + a;
    if (!seen.has(key)) { seen.add(key); edges.push([a, b]); }
  }
  return { verts, loops, edges };
}

/** A plane through point p with outward normal n, as an extra plane of a cell whose box is `box`. */
export function planeFromPoint(n, p, box) {
  const u = unit(n), c = centreOf(box);
  return { az: ((deg(Math.atan2(u[1], u[0])) % 360) + 360) % 360, el: deg(Math.asin(clamp(u[2], -1, 1))), off: dot(u, sub(p, c)) };
}

/** Is the cell an untilted box with no extra planes (what BCF and the sliders alone describe)? */
export const isPlainBox = (cell) => !Object.keys(cell.tilt || {}).length && !(cell.planes || []).length;

/**
 * Clip specs. Planes are numbered in the order the material's `clippingPlanes` lists them; `groups` = the indices of
 * each cell's planes. A fragment is in a group when it is on the kept side of every plane in it.
 *   modelSpec(groups)       keep what is in ANY cell (one clause: in(0) or in(1) or …)
 *   capSpec(groups, c, i)   the cut face of plane i of cell c: on c's other planes' kept side, and in NO other cell
 *                           → { order: plane indices to hand the material, spec }
 */
export const modelSpec = (groups) => ({ groups, clauses: [groups.map((_, g) => ({ g }))] });
export function capSpec(groups, c, i) {
  const own = groups[c].filter((p) => p !== i), others = groups.filter((_, g) => g !== c);
  const order = [...own, ...others.flat()];
  const out = [own.map((_, k) => k)];
  let at = own.length;
  for (const g of others) { out.push(g.map((_, k) => at + k)); at += g.length; }
  return { order, spec: { groups: out, clauses: [[{ g: 0 }], ...others.map((_, k) => [{ g: k + 1, neg: true }])] } };
}
export const specKey = (s) => (s ? JSON.stringify(s) : '');

/** GLSL for three.js's `#include <clipping_planes_fragment>`: `clippingPlanes[i]` clips when dot(vClipPosition, xyz) > w. */
export function clipGlsl(spec) {
  const lines = ['#if NUM_CLIPPING_PLANES > 0', '{'];
  spec.groups.forEach((g, k) => {
    const terms = g.map((i) => `!( dot( vClipPosition, clippingPlanes[ ${i} ].xyz ) > clippingPlanes[ ${i} ].w )`);
    lines.push(`\tbool ccIn${k} = ${terms.length ? terms.join(' && ') : 'true'};`);
  });
  for (const cl of spec.clauses) lines.push(`\tif ( !( ${cl.map((l) => (l.neg ? '!' : '') + 'ccIn' + l.g).join(' || ') || 'true'} ) ) discard;`);
  lines.push('}', '#endif');
  return lines.join('\n');
}

/**
 * Grips on a box (0.5 WL.2), at the untilted box's faces, edges and corners. `faces` = [[axis 0|1|2, side 0 = min | 1 = max]]
 * a grip moves; `axes` = the axes it moves along. Ids: 'x1' (a face), 'x1y0' (an edge), 'x1y0z1' (a corner).
 */
export function boxGrips(box) {
  const at = (k, side) => (side ? box.max[k] : box.min[k]), mid = centreOf(box), out = [];
  const make = (faces) => {
    const p = [...mid];
    for (const [k, side] of faces) p[k] = at(k, side);
    const kind = faces.length === 1 ? 'face' : faces.length === 2 ? 'edge' : 'corner';
    out.push({ id: faces.map(([k, side]) => 'xyz'[k] + side).join(''), kind, p, faces, axes: faces.map(([k]) => k) });
  };
  for (let k = 0; k < 3; k++) for (const s of [0, 1]) make([[k, s]]);
  for (let a = 0; a < 3; a++) for (let b = a + 1; b < 3; b++) for (const sa of [0, 1]) for (const sb of [0, 1]) make([[a, sa], [b, sb]]);
  for (const sx of [0, 1]) for (const sy of [0, 1]) for (const sz of [0, 1]) make([[0, sx], [1, sy], [2, sz]]);
  return out;
}

/**
 * The move [dx, dy, dz] (IFC rel.) for a grip that started at `start`, now under the pointer ray { o, d }, free along
 * `axes`: one axis = the point of that line nearest the ray; two = where the ray meets their plane (a plane seen edge-on
 * falls back to the plane facing the view, projected onto the two axes); three = the plane facing the view.
 * `view` = the view direction (IFC rel.). → null when the ray misses (parallel, or the plane is behind the eye).
 */
export function dragDelta(ray, start, axes, view) {
  const d = unit(ray.d), o = ray.o, e = (k) => { const v = [0, 0, 0]; v[k] = 1; return v; };
  const onPlane = (n) => {
    const den = dot(n, d);
    if (Math.abs(den) < 1e-9) return null;
    const t = dot(n, sub(start, o)) / den;
    return t < 0 ? null : sub(add(o, mul(d, t)), start);
  };
  const only = (v) => [0, 1, 2].map((k) => (axes.includes(k) ? v[k] : 0));
  if (axes.length === 1) {
    const u = e(axes[0]), w0 = sub(start, o), b = dot(u, d), den = 1 - b * b;
    if (den < 1e-9) return null;   // the line runs along the ray
    const t = (b * dot(d, w0) - dot(u, w0)) / den;
    return mul(u, t);
  }
  if (axes.length === 2) {
    const n = e([0, 1, 2].find((k) => !axes.includes(k)));
    if (Math.abs(dot(n, d)) > 0.15) { const v = onPlane(n); return v && only(v); }
  }
  const v = onPlane(unit(view));
  return v && only(v);
}

/** The box with these faces moved by delta (per axis), kept inside [0, size] and at least `minSize` thick. */
export function dragBox(box, faces, delta, size = [Infinity, Infinity, Infinity], minSize = 0.01) {
  const min = [...box.min], max = [...box.max];
  for (const [k, side] of faces) {
    const top = Number.isFinite(size[k]) ? size[k] : Infinity;
    if (side) max[k] = clamp(max[k] + delta[k], Math.min(top, min[k] + minSize), top);
    else min[k] = clamp(min[k] + delta[k], 0, Math.max(0, max[k] - minSize));
  }
  return { min, max };
}

