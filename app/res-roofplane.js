/* SPDX-License-Identifier: Apache-2.0 */
/**
 * res-roofplane.js — manual roof planes (0.5 part 4, RC.1 "manual roof planes when needed"): a roof face drawn as a
 * polygon on the plan, its first side the eave at a height, rising inward at a pitch. For porches, dormers, a lean-to
 * against a taller wall — whatever the automatic roof doesn't do. No DOM: bin/test-bimcraft.mjs --res runs it in Node.
 *
 *   readRoofPlanes(w) → [{ id, guid, storey, level, points, pitch, base, thickness, parts }]
 *   placeRoofPlane({ level (GlobalId of the level it is drawn on), points, pitch, base, thickness }) → op
 *   changeRoofPlane(guid, { points, pitch, base, thickness }) → op · removeRoofPlanes([guid…]) → op
 *   planeZ(rp, p) → height of the plane's underside over p (mm above its level)
 *
 * Written as an IfcRoof (.FREEFORM., ObjectType "Roof plane") in the level above the one it is drawn on (that one when
 * there is none above), aggregating one IfcSlab .ROOF. — the polygon in the sloped plane, swept straight up by the
 * thickness over cos(pitch) — with CadCraft_RoofPlane (Level, Points, PitchDegrees, Base, Thickness) and
 * Qto_RoofBaseQuantities. Manual planes don't follow the walls; change their numbers in Properties.
 */
import { ModelWriter, round } from './model-write.js';
import { readLevels } from './model-levels.js';
import { readWalls } from './model-walls.js';
import { ids, val, inv4, mul4, apply4 } from './ifc-util.js';
import { t as tr } from './i18n.js';

export const PLANE_PSET = 'CadCraft_RoofPlane';
const D2R = Math.PI / 180;
const IN = 25.4;

/** The eave (first side) frame of a polygon: origin p0, u along the eave, n inward (towards the polygon's side). */
export function planeFrame(points) {
  const p0 = points[0], p1 = points[1], L = Math.hypot(p1[0] - p0[0], p1[1] - p0[1]) || 1;
  const u = [(p1[0] - p0[0]) / L, (p1[1] - p0[1]) / L];
  let n = [-u[1], u[0]];
  // inward: towards where most of the polygon lies
  const side = points.reduce((s, p) => s + (p[0] - p0[0]) * n[0] + (p[1] - p0[1]) * n[1], 0);
  // keep n to the left of u (so the frame's Z points up): when the polygon lies to the right, u turns round instead
  if (side < 0) return { o: p0, u: [-u[0], -u[1]], n: [-n[0], -n[1]] };
  return { o: p0, u, n };
}
export function planeZ(rp, p) {
  const f = planeFrame(rp.points), s = Math.tan(rp.pitch * D2R);
  return rp.base + s * ((p[0] - f.o[0]) * f.n[0] + (p[1] - f.o[1]) * f.n[1]);
}
function area(p) { let s = 0; for (let i = 0; i < p.length; i++) { const a = p[i], b = p[(i + 1) % p.length]; s += a[0] * b[1] - a[1] * b[0]; } return s / 2; }

export function readRoofPlanes(w) {
  const out = [];
  let list = [];
  try { list = ids(w.api, w.mid, 'IFCROOF'); } catch (e) { return out; }
  const so = w.storeyOf();
  for (const id of list) {
    const ps = w.readPset(id, PLANE_PSET);
    if (!ps) continue;
    const l = w.api.GetLine(w.mid, id, false);
    const points = String(ps.Points || '').split(';').map((q) => q.split(',').map(Number)).filter((q) => q.length === 2 && q.every(Number.isFinite)).map(([x, y]) => [x * w.unitMm, y * w.unitMm]);
    out.push({ id, guid: val(l.GlobalId), storey: so.get(id) ?? null, level: ps.Level || '', points, pitch: Number(ps.PitchDegrees), base: Number(ps.Base) * w.unitMm, thickness: Number(ps.Thickness) * w.unitMm, parts: partsOf(w, id) });
  }
  return out;
}
function partsOf(w, id) {
  for (const rid of ids(w.api, w.mid, 'IFCRELAGGREGATES')) { const r = w.api.GetLine(w.mid, rid, false); if (r.RelatingObject?.value === id) return (r.RelatedObjects || []).map((h) => h.value); }
  return [];
}
function check(points, pitch) {
  if (!Array.isArray(points) || points.length < 3 || Math.abs(area(points)) < 1e4) throw Object.assign(new Error('res.err.plane'), { key: 'res.err.plane' });
  if (!(pitch >= 0 && pitch < 80)) throw Object.assign(new Error('model.err.pitch'), { key: 'model.err.pitch' });
}
/** The tallest drawn wall's top on a level, else its height. */
export function wallsTop(w, storey) {
  const levels = readLevels(w), lv = levels.find((l) => l.id === storey);
  return readWalls(w, storey).reduce((m, x) => Math.max(m, x.baseOffset + x.height), 0) || lv?.height || 2438.4;
}

function writePlane(w, rp) {
  const levels = readLevels(w), lvl = levels.find((l) => l.guid === rp.level);
  if (!lvl) throw Object.assign(new Error('model.err.nolevel'), { key: 'model.err.nolevel' });
  const host = w.api.GetLine(w.mid, rp.storey, false);
  const M = mul4(inv4(w.storeyWorld(rp.storey)), w.storeyWorld(lvl.id));
  const P = (x, y, z) => apply4(M, x, y, z), D = (x, y, z) => { const a = apply4(M, x, y, z), o = apply4(M, 0, 0, 0); return [a[0] - o[0], a[1] - o[1], a[2] - o[2]]; };
  if (rp.parts.length) w.dropProduct(rp.parts);
  const f = planeFrame(rp.points), cos = Math.cos(rp.pitch * D2R), sin = Math.sin(rp.pitch * D2R);
  const X = D(f.u[0], f.u[1], 0), Y = D(f.n[0] * cos, f.n[1] * cos, sin);
  const Z = [X[1] * Y[2] - X[2] * Y[1], X[2] * Y[0] - X[0] * Y[2], X[0] * Y[1] - X[1] * Y[0]];
  const prof = rp.points.map((p) => [(p[0] - f.o[0]) * f.u[0] + (p[1] - f.o[1]) * f.u[1], ((p[0] - f.o[0]) * f.n[0] + (p[1] - f.o[1]) * f.n[1]) / cos]);
  const nm = w.L(tr('model.roof.slab'));
  const sid = w.make('IFCSLAB', w.guid(), w.ownerHistory(), nm, null, nm, w.H(w.placeAt(host.ObjectPlacement.value, 0, 0, 0, 0)), null, null, 'ROOF');
  const solid = w.extrudeAt(w.profile(prof), w.axisFrame(P(f.o[0], f.o[1], rp.base), Z, X), rp.thickness / cos, [0, sin, cos]);
  w.styleItem(solid, w.surfaceStyle(tr('model.style.roofing'), [0.42, 0.33, 0.3], 0));
  w.setShape(sid, [w.rep('body', 'Body', 'SweptSolid', [solid])]);
  let rel = null;
  for (const rid of ids(w.api, w.mid, 'IFCRELAGGREGATES')) { const x = w.api.GetLine(w.mid, rid, false); if (x.RelatingObject?.value === rp.id) { rel = rid; break; } }
  if (rel) { const x = w.touch(rel); x.RelatedObjects = [w.H(sid)]; w.write(x); }
  else w.make('IFCRELAGGREGATES', w.guid(), w.ownerHistory(), null, null, w.H(rp.id), [w.H(sid)]);
  const proj = Math.abs(area(rp.points));
  w.upsertQto(rp.id, 'Qto_RoofBaseQuantities', [['GrossArea', 'area', proj / cos], ['NetArea', 'area', proj / cos], ['ProjectedArea', 'area', proj]]);
  w.upsertPset(rp.id, PLANE_PSET, [['Points', 'IFCTEXT', rp.points.map((p) => round(w.u(p[0]), 3) + ',' + round(w.u(p[1]), 3)).join(';')], ['PitchDegrees', 'IFCREAL', round(rp.pitch, 4)],
    ['Base', 'IFCLENGTHMEASURE', round(w.u(rp.base))], ['Thickness', 'IFCPOSITIVELENGTHMEASURE', round(w.u(rp.thickness))]]);
  return sid;
}

const op = (fn) => (ed) => new ModelWriter(ed.W, ed.api, ed.mid).run(fn);

export function placeRoofPlane(spec) {
  const s = { thickness: 8 * IN, ...spec, points: spec.points.map((p) => [p[0], p[1]]) };
  return op((w) => {
    check(s.points, s.pitch);
    if (!s.guid) s.guid = val(w.guid());
    const levels = readLevels(w), i = levels.findIndex((l) => l.guid === s.level);
    if (i < 0) throw Object.assign(new Error('model.err.nolevel'), { key: 'model.err.nolevel' });
    const hostLv = levels[i + 1] || levels[i];
    if (!Number.isFinite(s.base)) s.base = wallsTop(w, levels[i].id);
    const st = w.api.GetLine(w.mid, hostLv.id, false);
    const nm = w.L(tr('res.roofplane'));
    const id = w.make('IFCROOF', s.guid, w.ownerHistory(), nm, null, w.L('Roof plane'), w.H(w.placeAt(st.ObjectPlacement.value, 0, 0, 0, 0)), null, null, ...(w.v4 ? ['FREEFORM'] : ['NOTDEFINED']));   // i18n-ignore: IFC ObjectType
    w.noteGuid(s.guid, id);
    w.contain(id, hostLv.id);
    w.upsertPset(id, PLANE_PSET, [['Level', 'IFCIDENTIFIER', s.level]]);
    writePlane(w, { id, storey: hostLv.id, level: s.level, points: s.points, pitch: s.pitch, base: s.base, thickness: s.thickness, parts: [] });
    return { id, ids: [id], made: new Map([[s.guid, id]]) };
  });
}
export function changeRoofPlane(guid, ch) {
  return op((w) => {
    const rp = readRoofPlanes(w).find((x) => x.guid === guid);
    if (!rp) throw Object.assign(new Error('model.err.gone'), { key: 'model.err.gone' });
    const nx = { ...rp };
    if (Array.isArray(ch.points)) nx.points = ch.points.map((p) => [p[0], p[1]]);
    if (Number.isFinite(ch.pitch)) nx.pitch = ch.pitch;
    if (Number.isFinite(ch.base)) nx.base = ch.base;
    if (ch.thickness > 0) nx.thickness = ch.thickness;
    check(nx.points, nx.pitch);
    writePlane(w, nx);
    return { id: rp.id, ids: [rp.id] };
  });
}
/** Move a roof plane by (dx, dy) inside a running writer (model-modify.js). */
export function moveRoofPlaneIn(w, guid, dx, dy) {
  const rp = readRoofPlanes(w).find((x) => x.guid === guid);
  if (!rp) throw Object.assign(new Error('model.err.gone'), { key: 'model.err.gone' });
  writePlane(w, { ...rp, points: rp.points.map(([x, y]) => [x + dx, y + dy]) });
  return rp.id;
}
export function removeRoofPlanes(guids) {
  return op((w) => {
    const list = readRoofPlanes(w).filter((x) => guids.includes(x.guid));
    if (list.length) w.dropProduct(list.flatMap((x) => [x.id, ...x.parts]));
    return { id: null, ids: [] };
  });
}
