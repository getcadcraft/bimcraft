/* SPDX-License-Identifier: Apache-2.0 */
/**
 * wall-shape-view.js — the wall Shape tools worked in a view's plane and in 3D (0.9 WT.6, session walls-shape-10): what a drag in an
 * elevation, a section, a wall's own face view or the 3D view means for the wall. No DOM: `node bin/test-bimcraft.mjs --wallshape`.
 * Nothing here writes the model itself: every edit ends in the SAME ops Properties uses (wall-shape.js setWallShape, setWallsShape,
 * addWallOpening, changeWallOpening), one undo step each.
 *
 * Views: the elevation editor's frames (elev-edit.js frameOf: x along the view's right, y above the view's base) and one more, a wall's
 * own face — key `wall:<GlobalId>`, x = the distance along the wall from its start (a curved wall unrolled), y above its level's floor.
 *   isWallView(key) · wallFrame(key, snap) → frame | null · wallViewItems(F, snap) → the items the elevation editor draws for it
 *   faceOf(F, snap, wall) → { xOf(s), sOf(x), y0, zOf(y), yOf(z), k } | null   the wall's face in the view (s along the wall from its
 *       start, z above its base); null when it does not face the view (a curved wall that turns back on itself in an elevation)
 *   profileLines(wall, shape) → { top, bottom, ownTop, ownBottom }   the lines drawn (the wall's own flat top / base when none is set)
 *   editProfile(wall, shape, action) → { top, bottom } | null        a profile after one edit:
 *       { type: 'move', line, i, s, z } · { type: 'add', line, s, z? } · { type: 'remove', line, i } · { type: 'segment', line, i, dz }
 *   profileOp(wall, action) → op (setWallShape)
 *   openingRect(face, wall, o) → { x0, x1, y0, y1 } · openingFromRect(face, wall, p, q) → { wall, offset, width, sill, height }
 *   dragOpening(face, wall, o, handle, p, from) → { offset, width, sill, height }   handle: 'move' or n / s / e / w / ne / nw / se / sw
 *   crossWallsOf(F, snap) → [{ guid, id, x, t, y0, y1, side }]   walls seen end-on (the view looks along them); side = +1 when the
 *       wall's left is to the view's right
 *   crossOutline(cw, slant) → [[x, y]…]   the leaning cross-section drawn there · slantFromHandle(cw, dx, which) → degrees
 *   targetsInView(F, snap, targets) → [{ guid, kind, label, top, base, x0, x1, y0, y1 }]   wall-shape.js attachTargets as boxes in the view
 *   pickTarget(list, p, which, pad) → the smallest target under a point that can take that end ('top' | 'base')
 *   3D: rayPlane(o, d, p0, n) · wallPlane(wall, s) → { p0, n } (the upright plane touching the wall's centre line at s) ·
 *       wallCoords(wall, levelZ, P) → { s, off, z } of a point [x, y, z above the level's floor] · wallPoint(wall, s, z, off) → [x, y, z]
 */
import { wallGeom } from './model-arcs.js';
import { readShape, setWallShape } from './wall-shape.js';
import { profileAt } from './walls/shape.js';
import { dot2 as dot } from './geom-vec.js';   // shared helpers (0.11 PERF.74; tools/perf/util-copies.mjs)

const R10 = (v) => Math.round(v / 10) * 10;
const WALL_KEY = /^wall:[0-9A-Za-z_$]{22}$/;
export const isWallView = (k) => WALL_KEY.test(String(k || ''));
const levelOf = (snap, id) => (snap.levels || []).find((l) => l.id === id) || null;
const SIN10 = Math.sin(10 * Math.PI / 180);

/** The frame of a wall's own face view. */
export function wallFrame(key, snap) {
  if (!isWallView(key)) return null;
  const wall = (snap.walls || []).find((w) => 'wall:' + w.guid === key);
  if (!wall) return null;
  const g = wallGeom(wall), u = g.tan(0), lv = levelOf(snap, wall.storey);
  return { kind: 'wall', key, wall: wall.guid, dir: [-u[1], u[0]], right: u, o: wall.a, base: lv?.elevation || 0, storey: wall.storey, items: (s) => wallViewItems({ kind: 'wall', wall: wall.guid, base: lv?.elevation || 0 }, s) };
}
/** What the elevation editor draws in a wall's face view: the wall, its doors and windows, the levels. */
export function wallViewItems(F, snap) {
  const wall = (snap.walls || []).find((w) => w.guid === F.wall), walls = [], openings = [];
  if (wall) {
    const y0 = (wall.baseOffset || 0);
    walls.push({ guid: wall.guid, id: wall.id, x0: 0, x1: wall.len, y0, y1: y0 + wall.height, along: 1, xa: 0, u: wallGeom(wall).tan(0) });
    for (const o of snap.openings || []) if (o.wall === wall.id) openings.push({ guid: o.guid, wall: wall.guid, kind: o.kind, x0: o.offset, x1: o.offset + o.width, y0: o.sill || 0, y1: (o.sill || 0) + o.height });
  }
  const levels = (snap.levels || []).map((l) => ({ guid: l.guid, id: l.id, name: l.name, y: l.elevation - F.base }));
  return { walls, openings, levels };
}

/** The wall's face in a view: view x ↔ s along the wall, view y ↔ z above the wall's base. */
export function faceOf(F, snap, wall) {
  const lv = levelOf(snap, wall.storey), y0 = (lv?.elevation || 0) + (wall.baseOffset || 0) - F.base;
  const zy = { y0, zOf: (y) => y - y0, yOf: (z) => z + y0 };
  if (F.kind === 'wall') return F.wall === wall.guid ? { xOf: (s) => s, sOf: (x) => x, k: 1, ...zy } : null;
  const g = wallGeom(wall);
  if (!g.arc) {
    const u = g.tan(0), k = dot(u, F.right);
    if (Math.abs(dot(u, F.dir)) > SIN10 || Math.abs(k) < 1e-6) return null;
    const xa = dot(wall.a, F.right);
    return { xOf: (s) => xa + k * s, sOf: (x) => (x - xa) / k, k, ...zy };
  }
  // a curved wall in an elevation: seen flattened; editable there only while it runs one way across the view
  const N = 24, xs = [];
  for (let i = 0; i <= N; i++) xs.push(dot(g.at(g.L * i / N, 0), F.right));
  const dir = Math.sign(xs[N] - xs[0]);
  if (!dir) return null;
  for (let i = 1; i <= N; i++) if ((xs[i] - xs[i - 1]) * dir <= 1e-6) return null;
  const xOf = (s) => dot(g.at(Math.max(0, Math.min(g.L, s)), 0), F.right);
  const sOf = (x) => { let lo = 0, hi = g.L; for (let i = 0; i < 40; i++) { const m = (lo + hi) / 2; if ((xOf(m) - x) * dir < 0) lo = m; else hi = m; } return (lo + hi) / 2; };
  return { xOf, sOf, k: dir, curved: true, ...zy };
}

// ------------------------------------------------------------------------------------------------------------- the profile
export function profileLines(wall, shape = readShape(wall)) {
  const top = shape.profile?.top || null, bottom = shape.profile?.bottom || null;
  return { top: top || [[0, wall.height], [wall.len, wall.height]], bottom: bottom || [[0, 0], [wall.len, 0]], ownTop: !top, ownBottom: !bottom };
}
const flatAt = (line, L, z) => line.length === 2 && Math.abs(line[0][0]) < 0.5 && Math.abs(line[1][0] - L) < 0.5 && Math.abs(line[0][1] - z) < 0.5 && Math.abs(line[1][1] - z) < 0.5;
/** A profile after one edit (see the header). Heights and distances are kept to the millimetre; the op checks the result. */
export function editProfile(wall, shape, action) {
  const P = profileLines(wall, shape), which = action.line === 'bottom' ? 'bottom' : 'top';
  const line = P[which].map((q) => [q[0], q[1]]), L = wall.len, r = (v) => Math.round(v);
  const i = action.i;
  if (action.type === 'move') {
    if (!line[i]) return shape.profile;
    const lo = i > 0 ? line[i - 1][0] + 10 : 0, hi = i < line.length - 1 ? line[i + 1][0] - 10 : L;
    const s = i === 0 || i === line.length - 1 ? line[i][0] : Math.max(lo, Math.min(hi, Number.isFinite(action.s) ? action.s : line[i][0]));
    line[i] = [r(s), r(Number.isFinite(action.z) ? action.z : line[i][1])];
  } else if (action.type === 'add') {
    const s = r(Math.max(0, Math.min(L, action.s)));
    if (line.some((q) => Math.abs(q[0] - s) < 10)) return shape.profile;   // a point is there already
    const z = Number.isFinite(action.z) ? r(action.z) : r(profileAt(line, s));
    line.push([s, z]); line.sort((p, q) => p[0] - q[0]);
  } else if (action.type === 'remove') {
    if (!line[i] || line.length <= 2) return shape.profile;
    line.splice(i, 1);
    // the wall's two ends keep a point each: the line runs level from its first and last point anyway
  } else if (action.type === 'segment') {
    if (!line[i] || !line[i + 1] || !Number.isFinite(action.dz)) return shape.profile;
    line[i][1] = r(line[i][1] + action.dz); line[i + 1][1] = r(line[i + 1][1] + action.dz);
  } else return shape.profile;
  const out = { top: which === 'top' ? line : (P.ownTop ? null : P.top), bottom: which === 'bottom' ? line : (P.ownBottom ? null : P.bottom) };
  if (out.top && flatAt(out.top, L, wall.height)) out.top = null;
  if (out.bottom && flatAt(out.bottom, L, 0)) out.bottom = null;
  return out.top || out.bottom ? out : null;
}
export const profileOp = (wall, action) => setWallShape(wall.guid, { profile: editProfile(wall, readShape(wall), action) });

// ------------------------------------------------------------------------------------------------------------ wall openings
export function openingRect(face, wall, o) {
  const xa = face.xOf(o.offset), xb = face.xOf(o.offset + o.width), z0 = o.sill - (wall.baseOffset || 0);
  return { x0: Math.min(xa, xb), x1: Math.max(xa, xb), y0: face.yOf(z0), y1: face.yOf(z0 + o.height) };
}
/** A rectangle dragged on the wall's face (two view points) as a wall opening: snapped to 10 mm, kept on the wall, at least 50 × 50. */
export function openingFromRect(face, wall, p, q) {
  let s0 = face.sOf(p[0]), s1 = face.sOf(q[0]);
  if (s0 > s1) [s0, s1] = [s1, s0];
  s0 = Math.max(0, R10(s0)); s1 = Math.min(wall.len, R10(s1));
  const z0 = Math.max(0, R10(face.zOf(Math.min(p[1], q[1])))), z1 = R10(face.zOf(Math.max(p[1], q[1])));
  return { wall: wall.guid, offset: s0, width: Math.max(50, s1 - s0), sill: (wall.baseOffset || 0) + z0, height: Math.max(50, z1 - z0) };
}
/** An opening after a grip drag: `handle` 'move' (by p − from) or a side / corner named in the view (n = up, e = the view's right). */
export function dragOpening(face, wall, o, handle, p, from = p) {
  const r = openingRect(face, wall, o);
  if (handle === 'move') { const dx = p[0] - from[0], dy = p[1] - from[1]; r.x0 += dx; r.x1 += dx; r.y0 += dy; r.y1 += dy; }
  else {
    if (handle.includes('e')) r.x1 = Math.max(r.x0 + 50, p[0]);
    if (handle.includes('w')) r.x0 = Math.min(r.x1 - 50, p[0]);
    if (handle.includes('n')) r.y1 = Math.max(r.y0 + 50, p[1]);
    if (handle.includes('s')) r.y0 = Math.min(r.y1 - 50, p[1]);
  }
  if (handle === 'move') {   // a move keeps the size: only the place is snapped
    const s = R10(Math.min(face.sOf(r.x0), face.sOf(r.x1))), z = R10(face.zOf(r.y0));
    return { offset: Math.max(0, Math.min(wall.len - o.width, s)), width: o.width, sill: (wall.baseOffset || 0) + Math.max(0, z), height: o.height };
  }
  const n = openingFromRect(face, wall, [r.x0, r.y0], [r.x1, r.y1]);
  return { offset: n.offset, width: n.width, sill: n.sill, height: n.height };
}

// ------------------------------------------------------------------------------------------------------ slant, seen end-on
export function crossWallsOf(F, snap) {
  const out = [];
  if (F.kind === 'wall') return out;
  const cos10 = Math.cos(10 * Math.PI / 180);
  for (const w of snap.walls || []) {
    if (w.bulge) continue;
    const d = [w.b[0] - w.a[0], w.b[1] - w.a[1]], L = Math.hypot(...d);
    if (L < 1) continue;
    const u = [d[0] / L, d[1] / L];
    if (Math.abs(dot(u, F.dir)) < cos10) continue;
    if (F.kind === 'section') {   // only a wall the section line cuts
      const ha = dot([w.a[0] - F.o[0], w.a[1] - F.o[1]], F.dir), hb = dot([w.b[0] - F.o[0], w.b[1] - F.o[1]], F.dir);
      if (ha * hb > 0) continue;
    }
    const lv = levelOf(snap, w.storey), y0 = (lv?.elevation || 0) + (w.baseOffset || 0) - F.base;
    const m = [(w.a[0] + w.b[0]) / 2, (w.a[1] + w.b[1]) / 2];
    out.push({ guid: w.guid, id: w.id, x: dot(m, F.right), t: w.t, y0, y1: y0 + w.height, side: Math.sign(dot([-u[1], u[0]], F.right)) || 1 });
  }
  return out;
}
/** The cross-section of a (leaning) wall in the view: base left, base right, top right, top left. `slant` [deg] or [left, right] | null. */
export function crossOutline(cw, slant) {
  const sl = slant ? (slant.length === 1 ? [slant[0], slant[0]] : slant) : [0, 0], H = cw.y1 - cw.y0, tan = (v) => Math.tan(v * Math.PI / 180);
  // the wall's left face is on the view's right when side = +1; + leans to the wall's left
  const xl = cw.x + cw.side * cw.t / 2, xr = cw.x - cw.side * cw.t / 2;
  const tl = xl + cw.side * tan(sl[0]) * H, trr = xr + cw.side * tan(sl[1]) * H;
  const pts = [[xl, cw.y0], [tl, cw.y1], [trr, cw.y1], [xr, cw.y0]];
  return pts;
}
/** The slant a handle dragged `dx` along the view from upright means for a wall `H` tall (degrees, to half a degree, under 60). */
export function slantFromHandle(cw, dx) {
  const H = cw.y1 - cw.y0;
  if (!(H > 0)) return 0;
  const deg = Math.atan2(dx * cw.side, H) * 180 / Math.PI;
  return Math.max(-59.5, Math.min(59.5, Math.round(deg * 2) / 2));
}

// --------------------------------------------------------------------------------------------- what a wall attaches to, in a view
export function targetsInView(F, snap, targets) {
  const out = [];
  for (const t of targets || []) {
    const lv = levelOf(snap, t.storey), e = lv?.elevation || 0;
    let x0 = Infinity, x1 = -Infinity;
    if (F.kind === 'wall') {
      const wall = (snap.walls || []).find((w) => w.guid === F.wall);
      if (!wall) continue;
      const g = wallGeom(wall);
      for (const poly of t.polys) for (const q of poly) { const s = g.param(q).s; x0 = Math.min(x0, s); x1 = Math.max(x1, s); }
      x0 = Math.max(x0, -500); x1 = Math.min(x1, wall.len + 500);
    } else for (const poly of t.polys) for (const q of poly) { const x = dot(q, F.right); x0 = Math.min(x0, x); x1 = Math.max(x1, x); }
    if (!(x1 > x0)) continue;
    out.push({ guid: t.guid, kind: t.kind, label: t.label, top: t.top, base: t.base, x0, x1, y0: e + t.z0 - F.base, y1: e + t.z1 - F.base });
  }
  return out;
}
export function pickTarget(list, p, which, pad = 0) {
  const can = (t) => (which === 'base' ? t.base : t.top);
  return list.filter((t) => can(t) && p[0] >= t.x0 - pad && p[0] <= t.x1 + pad && p[1] >= t.y0 - pad && p[1] <= t.y1 + pad)
    .sort((a, b) => (a.x1 - a.x0) * (a.y1 - a.y0 + 2 * pad) - (b.x1 - b.x0) * (b.y1 - b.y0 + 2 * pad))[0] || null;
}

// ---------------------------------------------------------------------------------------------------------------------- 3D
/** Where a ray (origin o, direction d) meets the plane through p0 with normal n (3D points); null when it runs along it or behind o. */
export function rayPlane(o, d, p0, n) {
  const den = d[0] * n[0] + d[1] * n[1] + d[2] * n[2];
  if (Math.abs(den) < 1e-9) return null;
  const k = ((p0[0] - o[0]) * n[0] + (p0[1] - o[1]) * n[1] + (p0[2] - o[2]) * n[2]) / den;
  return k > 0 ? [o[0] + d[0] * k, o[1] + d[1] * k, o[2] + d[2] * k] : null;
}
/** The upright plane that touches the wall's centre line at s (a straight wall: its own plane), in the storey's plan (z up). */
export function wallPlane(wall, s) {
  const g = wallGeom(wall), p = g.at(Math.max(0, Math.min(g.L, s)), 0), n = g.normal(Math.max(0, Math.min(g.L, s)));
  return { p0: [p[0], p[1], 0], n: [n[0], n[1], 0] };
}
/** A point of the storey's plan ([x, y, z above the level's floor]) in the wall's own coordinates. */
export function wallCoords(wall, P) {
  const q = wallGeom(wall).param([P[0], P[1]]);
  return { s: q.s, off: q.off, z: P[2] - (wall.baseOffset || 0) };
}
export function wallPoint(wall, s, z, off = 0) {
  const p = wallGeom(wall).at(s, off);
  return [p[0], p[1], z + (wall.baseOffset || 0)];
}
