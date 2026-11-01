/* SPDX-License-Identifier: Apache-2.0 */
/**
 * model-floors.js — floors and slabs of any shape (0.6 DF.18, session `bim-draw`): an outline drawn by hand (balconies,
 * cantilevers, landings), with openings cut in it. No DOM: bin/test-bimcraft.mjs --draw06 runs it in Node. Plan millimetres
 * in the storey's own axes.
 *
 * A drawn floor is IfcSlab (.FLOOR., or .LANDING.) contained in its level, placed at the level; Body = its outline swept down
 * from its top (Offset above the level) by its thickness. Each opening is an IfcOpeningElement in the slab's placement, its
 * outline swept through the whole thickness, IfcRelVoidsElement (cc-ifc cuts it). The material, Pset_SlabCommon,
 * Qto_SlabBaseQuantities (Width = thickness, Perimeter, GrossArea, NetArea, GrossVolume, NetVolume), CadCraft_DrawnFloor
 * (Points "x,y;…", Kind wood | concrete, Use floor | landing, Thickness, Offset) and CadCraft_FloorOpening (Points) on each
 * opening. Unlike the floors that follow rooms (model-slabs.js), a drawn floor stays where it was drawn.
 *
 *   polyProblem(points) → lang key | null   fewer than 3 corners, crossing itself, or almost no area
 *   inside(poly, hole) → bool                every corner of `hole` inside `poly` and no edges crossing
 *   readDrawnFloors(w, storey?) → [{ id, guid, storey, points, kind, use, thickness, offset, area, openings: [{ id, guid,
 *                                   points }] }]
 *   placeDrawnFloor({ storey, points, kind, use, thickness, offset }) → op · changeDrawnFloor(guid, { kind, use, thickness,
 *   offset, points }) → op · addFloorOpening(guid, points) → op · removeFloorOpenings(guids) → op · removeDrawnFloors(guids) → op
 *   Errors: model.err.fl.shape (not a usable outline), model.err.fl.hole (an opening outside the floor or crossing its edge or
 *   another opening), model.err.fl.thick.
 */
import { op } from './model-ops.js';
import { FLOOR_KINDS } from './model-slabs.js';
import { ids, val } from './ifc-util.js';
import { round } from './model-write.js';
import { t as tr } from './i18n.js';

export const DRAWN_PSET = 'CadCraft_DrawnFloor', OPENING_PSET = 'CadCraft_FloorOpening';
const refuse = (key) => { throw Object.assign(new Error(key), { key }); };
const area = (p) => { let s = 0; for (let i = 0; i < p.length; i++) { const a = p[i], b = p[(i + 1) % p.length]; s += a[0] * b[1] - a[1] * b[0]; } return s / 2; };
const perim = (p) => p.reduce((s, a, i) => { const b = p[(i + 1) % p.length]; return s + Math.hypot(b[0] - a[0], b[1] - a[1]); }, 0);
function crosses(a, b, c, d) {
  const o = (p, q, r) => Math.sign((q[0] - p[0]) * (r[1] - p[1]) - (q[1] - p[1]) * (r[0] - p[0]));
  return o(a, b, c) * o(a, b, d) < 0 && o(c, d, a) * o(c, d, b) < 0;
}
function selfCrossing(p) {
  for (let i = 0; i < p.length; i++) for (let j = i + 1; j < p.length; j++) {
    if (Math.abs(i - j) <= 1 || (i === 0 && j === p.length - 1)) continue;
    if (crosses(p[i], p[(i + 1) % p.length], p[j], p[(j + 1) % p.length])) return true;
  }
  return false;
}
const ccw = (p) => (area(p) < 0 ? p.slice().reverse() : p.slice());
export function polyProblem(points) {
  if (!points || points.length < 3) return 'model.err.fl.shape';
  if (selfCrossing(points) || Math.abs(area(points)) < 10000) return 'model.err.fl.shape';   // under 0.01 m²
  return null;
}
function inPoly(p, poly) {
  let c = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const a = poly[i], b = poly[j];
    if ((a[1] > p[1]) !== (b[1] > p[1]) && p[0] < (b[0] - a[0]) * (p[1] - a[1]) / (b[1] - a[1]) + a[0]) c = !c;
  }
  return c;
}
export function inside(poly, hole) {
  if (!hole.every((q) => inPoly(q, poly))) return false;
  for (let i = 0; i < hole.length; i++) for (let j = 0; j < poly.length; j++) if (crosses(hole[i], hole[(i + 1) % hole.length], poly[j], poly[(j + 1) % poly.length])) return false;
  return true;
}
const ptsText = (p) => p.map((q) => round(q[0], 3) + ',' + round(q[1], 3)).join(';');
const ptsOf = (s) => String(s || '').split(';').map((x) => x.split(',').map(Number)).filter((q) => q.length === 2 && q.every(Number.isFinite));

export function readDrawnFloors(w, storey = null) {
  const out = [];
  let list = [];
  try { list = ids(w.api, w.mid, 'IFCSLAB'); } catch (e) { return out; }
  const so = w.storeyOf(), H = w.hostIndex();
  for (const id of list) {
    const ps = w.readPset(id, DRAWN_PSET);
    if (!ps) continue;
    const st = so.get(id);
    if (storey !== null && st !== storey) continue;
    const line = w.api.GetLine(w.mid, id, false);
    const points = ptsOf(ps.Points).map((q) => [q[0] * w.unitMm, q[1] * w.unitMm]);
    const openings = (H.voids.get(id) || []).map((oid) => ({ id: oid, guid: val(w.api.GetLine(w.mid, oid, false)?.GlobalId), points: ptsOf(w.readPset(oid, OPENING_PSET)?.Points).map((q) => [q[0] * w.unitMm, q[1] * w.unitMm]) })).filter((o) => o.points.length >= 3);
    out.push({ id, guid: val(line.GlobalId), storey: st, points, kind: ps.Kind === 'concrete' ? 'concrete' : 'wood', use: ps.Use === 'landing' ? 'landing' : 'floor',
      thickness: Number(ps.Thickness) * w.unitMm, offset: (Number(ps.Offset) || 0) * w.unitMm, area: Math.abs(area(points)), openings });
  }
  return out;
}

/** Shape, quantities and sets of a drawn floor (its openings' shapes follow its thickness). */
function writeFloorShape(w, f) {
  if (!(f.thickness >= 10)) refuse('model.err.fl.thick');
  const pts = ccw(f.points);
  w.setShape(f.id, [w.rep('body', 'Body', 'SweptSolid', [w.extrude(w.profile(pts), f.offset - f.thickness, f.thickness)])]);
  const holes = f.openings || [];
  const hArea = holes.reduce((s, h) => s + Math.abs(area(h.points)), 0), A = Math.abs(area(pts));
  w.upsertQto(f.id, 'Qto_SlabBaseQuantities', [['Width', 'length', f.thickness], ['Perimeter', 'length', perim(pts)], ['GrossArea', 'area', A], ['NetArea', 'area', A - hArea], ['GrossVolume', 'volume', A * f.thickness], ['NetVolume', 'volume', (A - hArea) * f.thickness]]);
  w.upsertPset(f.id, DRAWN_PSET, [['Points', 'IFCTEXT', ptsText(pts.map((q) => [w.u(q[0]), w.u(q[1])]))], ['Kind', 'IFCLABEL', f.kind], ['Use', 'IFCLABEL', f.use],
    ['Thickness', 'IFCPOSITIVELENGTHMEASURE', round(w.u(f.thickness))], ['Offset', 'IFCLENGTHMEASURE', round(w.u(f.offset))]]);
  for (const h of holes) w.setShape(h.id, [w.rep('body', 'Body', 'SweptSolid', [w.extrude(w.profile(ccw(h.points)), f.offset - f.thickness - 10, f.thickness + 20)])]);
}
function writeOpening(w, f, points, guid) {
  const fl = w.api.GetLine(w.mid, f.id, false);
  const opl = w.make('IFCLOCALPLACEMENT', w.H(fl.ObjectPlacement.value), w.H(w.axis3(0, 0, 0, 0)));
  const g = guid || val(w.guid());
  const oid = w.make('IFCOPENINGELEMENT', g, w.ownerHistory(), w.L(tr('model.fl.opening')), null, null, w.H(opl), null, null, ...(w.v4 ? ['OPENING'] : []));
  w.setShape(oid, [w.rep('body', 'Body', 'SweptSolid', [w.extrude(w.profile(ccw(points)), f.offset - f.thickness - 10, f.thickness + 20)])]);
  w.make('IFCRELVOIDSELEMENT', w.guid(), w.ownerHistory(), null, null, w.H(f.id), w.H(oid));
  w.upsertPset(oid, OPENING_PSET, [['Points', 'IFCTEXT', ptsText(points.map((q) => [w.u(q[0]), w.u(q[1])]))]]);
  return oid;
}

/** The writer-level body of placeDrawnFloor (D8.3 Copy uses it inside its own op). */
export function writeDrawnFloor(w, spec) {
  const s = { kind: 'concrete', use: 'floor', offset: 0, ...spec, points: spec.points.map((q) => [q[0], q[1]]) };
  {
    const pr = polyProblem(s.points);
    if (pr) refuse(pr);
    const storey = w.byGuid(s.storey);
    if (!storey) refuse('model.err.nolevel');
    const k = FLOOR_KINDS.find((x) => x.key === s.kind) || FLOOR_KINDS[1];
    const T = s.thickness > 0 ? s.thickness : k.t;
    const st = w.api.GetLine(w.mid, storey, false);
    const g = w.gid(s.guid);
    s.guid = g;
    const name = w.L(tr(s.use === 'landing' ? 'model.fl.landing' : 'model.fl.drawn'));
    const id = w.make('IFCSLAB', g, w.ownerHistory(), name, null, name, w.H(w.placeAt(st.ObjectPlacement.value, 0, 0, 0, 0)), null, null, s.use === 'landing' ? 'LANDING' : 'FLOOR');
    w.noteGuid(g, id);
    w.contain(id, storey);
    w.associateMaterial(id, w.material(tr('model.mat.' + k.mat)));
    w.upsertPset(id, 'Pset_SlabCommon', [['IsExternal', 'IFCBOOLEAN', false], ['LoadBearing', 'IFCBOOLEAN', true]]);
    writeFloorShape(w, { id, points: s.points, kind: k.key, use: s.use, thickness: T, offset: s.offset, openings: [] });
    return { id, ids: [id], made: new Map([[g, id]]) };
  }
}
export function placeDrawnFloor(spec) {
  const s = { ...spec };
  return op((w) => writeDrawnFloor(w, s));
}

/** Move a drawn floor and its openings by (dx, dy) mm (D8.3 Move): inside an op, with a writer. */
export function shiftDrawnFloor(w, f, dx, dy) {
  const mv = (pts) => pts.map((q) => [q[0] + dx, q[1] + dy]);
  const nf = { ...f, points: mv(f.points), openings: f.openings.map((h) => ({ ...h, points: mv(h.points) })) };
  writeFloorShape(w, nf);
  for (const h of nf.openings) w.upsertPset(h.id, OPENING_PSET, [['Points', 'IFCTEXT', ptsText(ccw(h.points).map((q) => [w.u(q[0]), w.u(q[1])]))]]);
}

export function changeDrawnFloor(guid, ch) {
  const c = { ...ch };
  return op((w) => {
    const f = readDrawnFloors(w).find((x) => x.guid === guid);
    if (!f) refuse('model.err.fl.none');
    const nf = { ...f, ...c };
    if (c.points) { const pr = polyProblem(c.points); if (pr) refuse(pr); if (!f.openings.every((h) => inside(c.points, h.points))) refuse('model.err.fl.hole'); }
    if (c.use && c.use !== f.use) { const l = w.touch(f.id); l.PredefinedType = c.use === 'landing' ? 'LANDING' : 'FLOOR'; l.Name = w.L(tr(c.use === 'landing' ? 'model.fl.landing' : 'model.fl.drawn')); l.ObjectType = l.Name; w.write(l); }
    if (c.kind && c.kind !== f.kind) {
      const k = FLOOR_KINDS.find((x) => x.key === c.kind) || FLOOR_KINDS[1];
      const rel = w.materialRel(f.id);
      if (rel) { const r = w.touch(rel.rel); r.RelatingMaterial = w.H(w.material(tr('model.mat.' + k.mat))); w.write(r); }
    }
    writeFloorShape(w, nf);
    return { id: f.id, ids: [f.id] };
  });
}

export function addFloorOpening(guid, points) {
  const pts = points.map((q) => [q[0], q[1]]);
  let og = null;
  return op((w) => {
    const f = readDrawnFloors(w).find((x) => x.guid === guid);
    if (!f) refuse('model.err.fl.none');
    if (polyProblem(pts)) refuse('model.err.fl.shape');
    if (!inside(f.points, pts) || f.openings.some((h) => pts.some((q) => inPoly(q, h.points)) || h.points.some((q) => inPoly(q, pts)))) refuse('model.err.fl.hole');
    if (!og) og = val(w.guid());
    writeOpening(w, f, pts, og);
    writeFloorShape(w, { ...readDrawnFloors(w).find((x) => x.guid === guid) });   // the net quantities
    return { id: f.id, ids: [f.id] };
  });
}

export function removeFloorOpenings(guids) {
  return op((w) => {
    const gone = guids.map((g) => w.byGuid(g) || readDrawnFloors(w).flatMap((f) => f.openings).find((o) => o.guid === g)?.id).filter(Boolean);
    const hosts = readDrawnFloors(w).filter((f) => f.openings.some((o) => gone.includes(o.id)));
    if (gone.length) w.dropProduct(gone);
    for (const f of hosts) writeFloorShape(w, readDrawnFloors(w).find((x) => x.guid === f.guid));
    return { id: hosts[0]?.id ?? null, ids: hosts.map((f) => f.id) };
  });
}

export function removeDrawnFloors(guids) {
  return op((w) => {
    const fs = readDrawnFloors(w).filter((f) => guids.includes(f.guid));
    const list = fs.flatMap((f) => [f.id, ...f.openings.map((o) => o.id)]);
    if (list.length) w.dropProduct(list);
    return { id: null, ids: [] };
  });
}
