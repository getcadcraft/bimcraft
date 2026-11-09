/* SPDX-License-Identifier: Apache-2.0 */
/**
 * elev-edit.js — editing in elevation and section views (0.9 SU.1123, session `bim-views-09`): the plan's edit tools working in the
 * view's plane. No DOM: node bin/test-bimcraft.mjs --views09 --only s.
 *
 * A view's plane: x along the view's right ([dir.y, −dir.x], res-views.js), y = height above the ground level (elevations) or above
 * the section line's level (sections) — the same coordinates projectView draws in, so what is picked is what is drawn.
 *   frameOf(key, { levels, sections }) → { kind, key, dir, right, o, base (the level's elevation the view's y starts at), storey } | null
 *   toView(F, p, z) → [x, y]   fromView(F, x) → plan [x, y] on the view's plane (a section: on the section line; an elevation: x only)
 *   viewItemsOf(F, snap) → { walls: [{ guid, x0, x1, y0, y1, along: ±1 }], openings: [{ guid, wall, kind, x0, x1, y0, y1 }],
 *       levels: [{ guid, name, y }] }   the walls that face the view (within 10° of its plane) and their doors and windows; levels
 * Ops (each one undo step, all through model-ops.js, so walls rejoin and openings follow as in the plan):
 *   moveWallInView(F, guid, dx) · moveOpeningInView(F, snap, guid, dx, dy) (along its wall, and its sill) · moveLevelInView(guid, dz)
 *   wallInView(F, snap, { x0, x1, y }) → a wall drawn in a section's plane on the level at that height (from it to the next level)
 *   openingInView(F, snap, { wall, x, y, typeKey }) → a door / window placed on a wall where it was clicked
 *   Notes: CadCraft_ViewNotes on the project, one IfcText per note ("note-<n>": JSON { view, x, y, text }) — drawn in the view and on
 *   its sheets (res-ui.js adds them to view.notes, comforts-views.js noteItems kind 'text').
 *   readViewNotes(w, key?) → [{ id, view, x, y, text }]   addViewNote({ view, x, y, text }) → op   changeViewNote(id, ch) → op
 *   removeViewNote(id) → op
 *   levelInView(F, snap, { y, name }) → a new level at the height clicked (y above the view's base), as tall as the gap to the level above
 *   Dimensions: CadCraft_ViewDims on the project, one IfcText per dimension ("dim-<n>": JSON { view, a: [x, y], b: [x, y], off }), `off` =
 *   mm of paper out from what it measures (+ above / left); level and wall edges are snapped to by snapTargets / snapTo. Drawn in the
 *   view and on its sheets (res-ui.js adds them to view.notes as { t: 'dim' }).
 *   readViewDims(w, key?) → [{ id, view, a, b, off, len }]   addViewDim({ view, a, b, off? }) → op   removeViewDim(id) → op
 *   Errors: model.err.ev.view, model.err.ev.level, model.err.ev.wall, model.err.ev.note, model.err.ev.dim, model.err.ev.levelnear
 */
import { op, changeWall, changeOpening, changeLevel, newLevel, drawWalls, placeOpening } from './model-ops.js';
import { ids } from './ifc-util.js';
import { elevationDirs } from './res-views.js';
import { sectionDir } from './res-sheets.js';

export const NOTES_PSET = 'CadCraft_ViewNotes';
export const DIMS_PSET = 'CadCraft_ViewDims';
const refuse = (key) => { throw Object.assign(new Error(key), { key }); };
const dot = (a, b) => a[0] * b[0] + a[1] * b[1];
const project = (w) => ids(w.api, w.mid, 'IFCPROJECT')[0];
const KEY_RE = /^elevation:(north|east|south|west)$|^section:[0-9A-Za-z_$]{22}$/;
export const isEditView = (k) => KEY_RE.test(String(k || ''));

/** The frame of a view: `levels` [{ id, guid, elevation }], `sections` the section lines (res-sheets.js readSectionLines). */
export function frameOf(key, { levels, sections = [] }) {
  if (!isEditView(key)) return null;
  const ground = levels.find((l) => Math.abs(l.elevation) < 1) || levels.slice().sort((a, b) => Math.abs(a.elevation) - Math.abs(b.elevation))[0];
  if (key.startsWith('elevation:')) {
    const dir = elevationDirs[key.slice(10)];
    return { kind: 'elevation', key, dir, right: [dir[1], -dir[0]], o: [0, 0], base: ground?.elevation || 0, storey: ground?.id ?? null };
  }
  const sl = sections.find((s) => 'section:' + s.guid === key);
  if (!sl) return null;
  const { o, dir } = sectionDir(sl);
  const lv = levels.find((l) => l.id === sl.storey);
  return { kind: 'section', key, dir, right: [dir[1], -dir[0]], o, base: lv?.elevation || 0, storey: sl.storey, depth: sl.depth };
}
export const toView = (F, p, z) => [dot(p, F.right), z - F.base];
/** A plan point on the view's plane at view x: a section's line (o + right·(x − o·right)); an elevation has no depth (x only). */
export function fromView(F, x) {
  const k = x - dot(F.o, F.right);
  return [F.o[0] + F.right[0] * k, F.o[1] + F.right[1] * k];
}
const levelOf = (snap, id) => snap.levels.find((l) => l.id === id);

export function viewItemsOf(F, snap) {
  const walls = [], openings = [], seen = new Map();
  const sin10 = Math.sin(10 * Math.PI / 180);
  for (const w of snap.walls || []) {
    const d = [w.b[0] - w.a[0], w.b[1] - w.a[1]], L = Math.hypot(...d);
    if (L < 1) continue;
    const u = [d[0] / L, d[1] / L];
    if (Math.abs(dot(u, F.dir)) > sin10) continue;   // it does not face the view
    if (F.kind === 'section') {   // only what is behind the section line, up to its depth (0 = all)
      const m = [(w.a[0] + w.b[0]) / 2, (w.a[1] + w.b[1]) / 2], ahead = dot([m[0] - F.o[0], m[1] - F.o[1]], F.dir);
      if (ahead < -(w.t || 0) || (F.depth > 0 && ahead > F.depth + (w.t || 0))) continue;
    }
    const lv = levelOf(snap, w.storey), z0 = (lv?.elevation || 0) + (w.baseOffset || 0);
    const xa = toView(F, w.a, 0)[0], xb = toView(F, w.b, 0)[0];
    const it = { guid: w.guid, id: w.id, x0: Math.min(xa, xb), x1: Math.max(xa, xb), y0: z0 - F.base, y1: z0 - F.base + (w.height || lv?.height || 3000), along: Math.sign(dot(u, F.right)) || 1, xa, u };
    walls.push(it); seen.set(w.id, it);
  }
  for (const o of snap.openings || []) {
    const wv = seen.get(o.wall);
    if (!wv) continue;
    const w = snap.walls.find((x) => x.id === o.wall), lv = levelOf(snap, w.storey);
    const xs = wv.xa + wv.along * o.offset, xe = xs + wv.along * o.width;
    const y0 = (lv?.elevation || 0) - F.base + (o.sill || 0);
    openings.push({ guid: o.guid, wall: w.guid, kind: o.kind, x0: Math.min(xs, xe), x1: Math.max(xs, xe), y0, y1: y0 + o.height });
  }
  const levels = (snap.levels || []).map((l) => ({ guid: l.guid, id: l.id, name: l.name, y: l.elevation - F.base }));
  return { walls, openings, levels };
}

export function moveWallInView(F, snap, guid, dx) {
  const w = snap.walls.find((x) => x.guid === guid);
  if (!w) refuse('model.err.gone');
  if (!Number.isFinite(dx)) refuse('model.err.length');
  const m = (p) => [p[0] + F.right[0] * dx, p[1] + F.right[1] * dx];
  return changeWall(guid, { a: m(w.a), b: m(w.b) });
}
export function moveOpeningInView(F, snap, guid, dx, dy) {
  const o = snap.openings.find((x) => x.guid === guid);
  if (!o) refuse('model.err.gone');
  const w = snap.walls.find((x) => x.id === o.wall);
  const L = Math.hypot(w.b[0] - w.a[0], w.b[1] - w.a[1]);
  const along = Math.sign(((w.b[0] - w.a[0]) * F.right[0] + (w.b[1] - w.a[1]) * F.right[1]) / (L || 1)) || 1;
  const ch = { offset: Math.max(0, Math.min(L - o.width, o.offset + along * (dx || 0))) };
  if (o.kind === 'window' && dy) ch.sill = Math.max(0, (o.sill || 0) + dy);
  return changeOpening(guid, ch);
}
export function moveLevelInView(snap, guid, dz) {
  const l = snap.levels.find((x) => x.guid === guid);
  if (!l) refuse('model.err.nolevel');
  if (!Number.isFinite(dz)) refuse('model.err.length');
  return changeLevel(guid, { elevation: l.elevation + dz });
}
/** A new level at height `y` in the view (snapped to 10 mm). Its height is the gap to the level above, else 3000. */
export function levelInView(F, snap, { y, name }) {
  if (!Number.isFinite(y)) refuse('model.err.length');
  const elevation = Math.round((y + F.base) / 10) * 10;
  if (snap.levels.some((l) => Math.abs(l.elevation - elevation) < 50)) refuse('model.err.ev.levelnear');
  const above = snap.levels.map((l) => l.elevation).filter((e) => e > elevation).sort((a, b) => a - b)[0];
  const height = above !== undefined ? above - elevation : 3000;
  const nm = String(name ?? '').trim() || ('Level ' + (snap.levels.length + 1));
  return newLevel({ name: nm, elevation, height });
}
/** The level a height in the view stands on (the highest at or below it). */
export function levelAt(F, snap, y) {
  const z = y + F.base;
  return snap.levels.slice().sort((a, b) => b.elevation - a.elevation).find((l) => l.elevation <= z + 1) || null;
}
export function wallInView(F, snap, { x0, x1, y, typeKey }) {
  if (F.kind !== 'section') refuse('model.err.ev.wall');   // an elevation has no depth to draw at
  if (!(Math.abs(x1 - x0) >= 100)) refuse('model.err.length');
  const lv = levelAt(F, snap, y);
  if (!lv) refuse('model.err.ev.level');
  return drawWalls({ storey: lv.guid, segs: [{ a: fromView(F, x0), b: fromView(F, x1) }], ...(typeKey ? { typeKey } : {}) });
}
export function openingInView(F, snap, { wall, x, y, typeKey, width = 900 }) {
  const it = viewItemsOf(F, snap).walls.find((w) => w.guid === wall);
  if (!it) refuse('model.err.ev.wall');
  const w = snap.walls.find((q) => q.guid === wall), L = Math.hypot(w.b[0] - w.a[0], w.b[1] - w.a[1]);
  const offset = Math.max(0, Math.min(L - width, (x - it.xa) * it.along - width / 2));
  const lv = levelOf(snap, w.storey);
  const sill = Math.max(0, y + F.base - (lv?.elevation || 0));
  return placeOpening({ wall, typeKey, offset, face: 'left', ...(/^win/.test(typeKey) ? { sill } : {}) });
}

// ------------------------------------------------------------------------------------------------ notes in the view
const cleanText = (s) => String(s ?? '').replace(/[\u0000-\u0009\u000b-\u001f\u007f]/g, ' ').trim().slice(0, 400);
export function readViewNotes(w, key = null) {
  const pj = project(w), ps = pj === undefined ? null : w.readPset(pj, NOTES_PSET), out = [];
  for (const [id, v] of Object.entries(ps || {})) {
    if (!/^note-\d+$/.test(id) || !v) continue;
    let o = null;
    try { o = JSON.parse(v); } catch (e) { o = null; }
    if (!o || !isEditView(o.view) || !Number.isFinite(o.x) || !Number.isFinite(o.y) || !cleanText(o.text)) continue;
    if (key && o.view !== key) continue;
    out.push({ id, view: o.view, x: o.x, y: o.y, text: cleanText(o.text) });
  }
  return out.sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));
}
export function addViewNote(spec) {
  const S = { ...spec };
  let fixed = spec.id || null;
  return op((w) => {
    if (!isEditView(S.view)) refuse('model.err.ev.view');
    if (!cleanText(S.text) || !Number.isFinite(S.x) || !Number.isFinite(S.y)) refuse('model.err.ev.note');
    const pj = project(w), ps = w.readPset(pj, NOTES_PSET) || {};
    if (!fixed) { let n = 1; while (ps['note-' + n]) n++; fixed = 'note-' + n; }
    w.upsertPset(pj, NOTES_PSET, [[fixed, 'IFCTEXT', JSON.stringify({ view: S.view, x: Math.round(S.x), y: Math.round(S.y), text: cleanText(S.text) })]]);
    return { id: pj, ids: [], note: fixed };
  });
}
export function changeViewNote(id, ch) {
  const C = { ...ch };
  return op((w) => {
    const n = readViewNotes(w).find((x) => x.id === id);
    if (!n) refuse('model.err.gone');
    const nv = { view: n.view, x: Number.isFinite(C.x) ? C.x : n.x, y: Number.isFinite(C.y) ? C.y : n.y, text: C.text !== undefined ? cleanText(C.text) : n.text };
    if (!nv.text) refuse('model.err.ev.note');
    w.upsertPset(project(w), NOTES_PSET, [[id, 'IFCTEXT', JSON.stringify({ ...nv, x: Math.round(nv.x), y: Math.round(nv.y) })]]);
    return { id: project(w), ids: [] };
  });
}
export function removeViewNote(id) {
  return op((w) => {
    if (!readViewNotes(w).some((x) => x.id === id)) refuse('model.err.gone');
    w.upsertPset(project(w), NOTES_PSET, [[id, 'IFCTEXT', '']]);
    return { id: null, ids: [] };
  });
}

// ------------------------------------------------------------------------------------------------------ dimensions in the view
/** Where a dimension's ends catch: the x of every wall and opening edge, the y of every level, wall top and bottom, sill and head. */
export function snapTargets(items) {
  const xs = new Set(), ys = new Set();
  for (const w of items.walls) { xs.add(w.x0); xs.add(w.x1); ys.add(w.y0); ys.add(w.y1); }
  for (const o of items.openings) { xs.add(o.x0); xs.add(o.x1); ys.add(o.y0); ys.add(o.y1); }
  for (const l of items.levels) ys.add(l.y);
  return { xs: [...xs], ys: [...ys] };
}
/** `v` moved onto the nearest target within `tol` mm, else to the nearest 10 mm. */
export function snapTo(v, list, tol = 150) {
  let best = null;
  for (const q of list) if (Math.abs(q - v) <= tol && (best === null || Math.abs(q - v) < Math.abs(best - v))) best = q;
  return best !== null ? best : Math.round(v / 10) * 10;
}
const pt = (p) => Array.isArray(p) && p.length === 2 && p.every(Number.isFinite);
export function readViewDims(w, key = null) {
  const pj = project(w), ps = pj === undefined ? null : w.readPset(pj, DIMS_PSET), out = [];
  for (const [id, v] of Object.entries(ps || {})) {
    if (!/^dim-\d+$/.test(id) || !v) continue;
    let o = null;
    try { o = JSON.parse(v); } catch (e) { o = null; }
    if (!o || !isEditView(o.view) || !pt(o.a) || !pt(o.b) || !Number.isFinite(o.off)) continue;
    if (key && o.view !== key) continue;
    out.push({ id, view: o.view, a: o.a, b: o.b, off: o.off, len: Math.hypot(o.b[0] - o.a[0], o.b[1] - o.a[1]) });
  }
  return out.sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));
}
/** A horizontal or vertical dimension: the axis the two ends differ along most is kept, the other end made level with the first. */
export function addViewDim(spec) {
  const S = { ...spec };
  return op((w) => {
    if (!isEditView(S.view)) refuse('model.err.ev.view');
    if (!pt(S.a) || !pt(S.b)) refuse('model.err.ev.dim');
    const horiz = Math.abs(S.b[0] - S.a[0]) >= Math.abs(S.b[1] - S.a[1]);
    const a = [Math.round(S.a[0]), Math.round(S.a[1])], b = horiz ? [Math.round(S.b[0]), a[1]] : [a[0], Math.round(S.b[1])];
    if (Math.hypot(b[0] - a[0], b[1] - a[1]) < 10) refuse('model.err.ev.dim');
    const off = Number.isFinite(S.off) ? S.off : 8;
    const pj = project(w), ps = w.readPset(pj, DIMS_PSET) || {};
    let n = 1; while (ps['dim-' + n]) n++;
    const id = 'dim-' + n;
    w.upsertPset(pj, DIMS_PSET, [[id, 'IFCTEXT', JSON.stringify({ view: S.view, a, b, off })]]);
    return { id: pj, ids: [], dim: id };
  });
}
export function removeViewDim(id) {
  return op((w) => {
    if (!readViewDims(w).some((x) => x.id === id)) refuse('model.err.gone');
    w.upsertPset(project(w), DIMS_PSET, [[id, 'IFCTEXT', '']]);
    return { id: null, ids: [] };
  });
}
