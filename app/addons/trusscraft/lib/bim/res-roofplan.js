/* SPDX-License-Identifier: Apache-2.0 */
/**
 * res-roofplan.js — the pure part of res-roof.js: the roof over an outline (roofGeometry), the height of its underside (heightAt), the
 * distance from a point to a segment (segDist) and the roof defaults. No DOM, no IFC, no app modules: it imports only res-skeleton.js and
 * model-rooms.js (both pure). res-roof.js re-exports it, so every BimCraft import keeps working; the TrussCraft add-on carries byte-identical
 * copies of these three files (tools/trusscraft/sync.mjs) so a roof can be planned in PartCraft, ModelCraft and CadCraft too.
 * Nobody edits a copy: change this file, then run `node tools/trusscraft/sync.mjs`.
 */
import { skeleton, faceZ, polyArea } from './res-skeleton.js';
import { labelPoint } from './model-rooms.js';

const D2R = Math.PI / 180;
const IN = 25.4;
export const ROOF_DEFAULTS = { pitch: Math.atan(6 / 12) / D2R, overhang: 12 * IN, rake: 12 * IN, thickness: 8 * IN, fascia: 9.25 * IN, fasciaT: 1.5 * IN, soffit: true, soffitT: 0.625 * IN };
const sub = (a, b) => [a[0] - b[0], a[1] - b[1]];
const dot = (a, b) => a[0] * b[0] + a[1] * b[1];
const cross = (a, b) => a[0] * b[1] - a[1] * b[0];

export function segDist(p, a, b) {
  const d = sub(b, a), L2 = dot(d, d) || 1, t = Math.max(0, Math.min(1, dot(sub(p, a), d) / L2));
  return Math.hypot(p[0] - a[0] - d[0] * t, p[1] - a[1] - d[1] * t);
}

// ---------------------------------------------------------------------------------------------------------- geometry
/**
 * The roof over `outline` (anticlockwise outer faces of the walls) with per-edge `kinds`. Heights: z = plate on the wall
 * lines; the underside of the roof. thickness = the roof's depth square to its faces; fascia = board height (0 = none),
 * fasciaT its thickness.
 */
export function roofGeometry(outline, kinds, { thickness = ROOF_DEFAULTS.thickness, plate = 0, fascia = ROOF_DEFAULTS.fascia, fasciaT = ROOF_DEFAULTS.fasciaT, soffit = true } = {}) {
  const n = outline.length;
  if (n < 3) return { error: 'model.err.roofshape' };
  for (const k of kinds) if (k.kind === 'pitch' && !(k.pitch > 1 && k.pitch < 80)) return { error: 'model.err.pitch' };
  if (!kinds.some((k) => k.kind === 'pitch')) return { error: 'res.err.nopitch' };
  const E = outline.map((a, i) => {
    const b = outline[(i + 1) % n], L = Math.hypot(b[0] - a[0], b[1] - a[1]), u = [(b[0] - a[0]) / L, (b[1] - a[1]) / L];
    return { a, b, L, u, n: [-u[1], u[0]] };
  });
  // the eave line the roof boards end on: each edge out by its overhang, less the fascia where there is one
  const board = (k) => (fascia > 0 && k.kind !== 'none' && k.overhang > fasciaT ? fasciaT : 0);
  const out = kinds.map((k) => Math.max(0, k.overhang - board(k)));
  const eave = offsetPoly(E, out);
  const specs = kinds.map((k, i) => {
    if (k.kind !== 'pitch') return { speed: 0, start: 0 };
    const s = Math.tan(k.pitch * D2R);
    return { speed: 1 / s, start: plate - out[i] * s };
  });
  if (!simple(eave)) return { error: 'res.err.overhang' };
  const sk = skeleton(eave, specs);
  if (sk.error) return { error: sk.error };
  if (!sk.faces.length) return { error: 'model.err.roofshape' };
  const faces = sk.faces.map((f) => ({ ...f, slope: 1 / f.speed, pitch: Math.atan(1 / f.speed) / D2R }));
  const plan = { kind: 'skeleton', faces, eave, kinds, plate, thickness, top: sk.top, lines: [], ridge: [], gables: [], fascia: [], soffit: [] };
  // lines: ridges (level), hips (the roof bends down across them), valleys (up), and the eave / rake edges
  for (const l of sk.lines) {
    const [fi, fj] = l.f;
    const A = faces.find((f) => f.edge === fi && onFace(f, l)), B = faces.find((f) => f.edge === fj && onFace(f, l));
    if (!A || !B) continue;
    let kind;
    if (Math.abs(l.a[2] - l.b[2]) < 0.5) kind = 'ridge';
    else {
      const mid = [(l.a[0] + l.b[0]) / 2, (l.a[1] + l.b[1]) / 2];
      const cB = labelPoint(B.poly), toB = sub(cB, mid), d = Math.hypot(...toB) || 1;
      const q = [mid[0] + toB[0] / d * Math.min(50, d / 2), mid[1] + toB[1] / d * Math.min(50, d / 2)];
      kind = faceZ(A, q) > faceZ(B, q) ? 'hip' : 'valley';
    }
    plan.lines.push({ kind, a: l.a, b: l.b, len: Math.hypot(l.b[0] - l.a[0], l.b[1] - l.a[1], l.b[2] - l.a[2]) });
    plan.ridge.push([l.a[0], l.a[1], l.b[0], l.b[1]]);
  }
  // gable ends: the wall line under each gable edge
  kinds.forEach((k, i) => { if (k.kind === 'gable') plan.gables.push({ edge: i, a: E[i].a, b: E[i].b }); });
  // fascia: every face edge lying on the eave line (level along an eave, sloped along a rake), outward by the board
  const eaveE = eave.map((a, i) => { const b = eave[(i + 1) % eave.length], L = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1, u = [(b[0] - a[0]) / L, (b[1] - a[1]) / L]; return { a, b, L, u, n: [-u[1], u[0]] }; });
  for (const f of faces) for (let i = 0; i < f.poly.length; i++) {
    const p = f.poly[i], q = f.poly[(i + 1) % f.poly.length];
    for (let j = 0; j < eaveE.length; j++) {
      const e = eaveE[j];
      if (Math.abs(cross(e.u, sub(p, e.a))) > 0.5 || Math.abs(cross(e.u, sub(q, e.a))) > 0.5) continue;
      const sp = dot(e.u, sub(p, e.a)), sq = dot(e.u, sub(q, e.a));
      if (Math.min(sp, sq) < -0.5 || Math.max(sp, sq) > e.L + 0.5 || Math.abs(sq - sp) < 1) continue;
      const tv = thickness / Math.cos(f.pitch * D2R);
      const kind = Math.abs(faceZ(f, p) - faceZ(f, q)) < 0.5 ? 'eave' : 'rake';
      plan.fascia.push({ kind, edge: j, a: [p[0], p[1], faceZ(f, p) + tv], b: [q[0], q[1], faceZ(f, q) + tv], n: e.n, len: Math.hypot(q[0] - p[0], q[1] - p[1], faceZ(f, q) - faceZ(f, p)) });
      break;
    }
  }
  if (!(fascia > 0)) plan.fascia = plan.fascia.map((x) => ({ ...x, board: false }));
  // soffit: the strip from each pitched wall to the back of the fascia, level with the fascia's bottom (never above the
  // roof's underside at the eave)
  if (soffit) kinds.forEach((k, i) => {
    if (k.kind !== 'pitch' || out[i] < 5) return;
    const s = Math.tan(k.pitch * D2R), tv = thickness / Math.cos(k.pitch * D2R);
    const zEave = plate - out[i] * s;
    const z = Math.min(zEave, fascia > 0 ? zEave + tv - fascia : zEave);
    const poly = [E[i].a, E[i].b, eave[(i + 1) % n], eave[i]];
    if (Math.abs(polyArea(poly)) < 1e4) return;
    plan.soffit.push({ edge: i, poly, z });
  });
  plan.projected = Math.abs(polyArea(offsetPoly(E, kinds.map((k) => k.overhang))));
  plan.area = faces.reduce((s, f) => s + Math.abs(polyArea(f.poly)) / Math.cos(f.pitch * D2R), 0);
  const sum = (kind) => plan.lines.filter((l) => l.kind === kind).reduce((s, l) => s + l.len, 0);
  plan.lengths = { ridge: sum('ridge'), hip: sum('hip'), valley: sum('valley'), eave: plan.fascia.filter((x) => x.kind === 'eave').reduce((s, x) => s + x.len, 0), rake: plan.fascia.filter((x) => x.kind === 'rake').reduce((s, x) => s + x.len, 0) };
  return plan;
}
function onFace(f, l) {
  const near = (p) => f.poly.some((q, i) => { const r = f.poly[(i + 1) % f.poly.length]; return segDist(p, q, r) < 1; });
  return near(l.a) && near(l.b);
}
/** The polygon with each edge moved out by its own distance (consecutive lines meet), one point per corner. */
function offsetPoly(E, d) {
  const n = E.length, out = [];
  for (let i = 0; i < n; i++) {
    const f = E[(i + n - 1) % n], e = E[i];
    const p0 = [f.a[0] - f.n[0] * d[(i + n - 1) % n], f.a[1] - f.n[1] * d[(i + n - 1) % n]], p1 = [e.a[0] - e.n[0] * d[i], e.a[1] - e.n[1] * d[i]];
    const c = cross(f.u, e.u);
    // collinear neighbours: one point (with different overhangs the eave between them leans a little)
    if (Math.abs(c) < 1e-9) { out.push(p1); continue; }
    const tt = cross(sub(p1, p0), e.u) / c;
    out.push([p0[0] + f.u[0] * tt, p0[1] + f.u[1] * tt]);
  }
  return out;
}
function simple(P) {
  const n = P.length;
  for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) {
    if (Math.abs(i - j) <= 1 || (i === 0 && j === n - 1)) continue;
    const a = P[i], b = P[(i + 1) % n], c = P[j], d = P[(j + 1) % n];
    const d1 = cross(sub(b, a), sub(c, a)), d2 = cross(sub(b, a), sub(d, a)), d3 = cross(sub(d, c), sub(a, c)), d4 = cross(sub(d, c), sub(b, c));
    if (((d1 > 1e-6 && d2 < -1e-6) || (d1 < -1e-6 && d2 > 1e-6)) && ((d3 > 1e-6 && d4 < -1e-6) || (d3 < -1e-6 && d4 > 1e-6))) return false;
  }
  return polyArea(P) > 0;
}

/** Height of the roof's underside over p (mm above the walls' level), null outside it. */
export function heightAt(plan, p) {
  let best = null;
  for (const f of plan.faces) if (inPoly(p[0], p[1], f.poly)) { const z = faceZ(f, p); if (best === null || z > best) best = z; }
  return best;
}
function inPoly(x, y, p) {
  let inside = false;
  for (let i = 0, j = p.length - 1; i < p.length; j = i++) {
    const [xi, yi] = p[i], [xj, yj] = p[j];
    if ((yi > y) !== (yj > y) && x < (xj - xi) * (y - yi) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
}
