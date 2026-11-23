/* SPDX-License-Identifier: Apache-2.0 */
/**
 * room-bounds.js — room separators, area boundaries, areas and room / area tags in the IFC (0.10, session bk-tools-a-10). No DOM:
 * bin/test-bimcraft.mjs --toolsa runs it in Node. Plan millimetres in the storey's own axes. It writes with a ModelWriter inside
 * an op (spaces-ops.js); model-slabs.js reads the separators through separatorLines() so the rooms it already makes follow them.
 *
 * How each is written (docs/0.9-sessions/bk-tools-a-10.md has the reasons):
 *   Room separator   IfcVirtualElement (the schema's own "imaginary boundary between two spaces"; IFC4X3 PredefinedType BOUNDARY),
 *                    Name "Room separator", ObjectType ROOMSEPARATOR, contained in its level, placed at the level, 'Axis' Curve2D =
 *                    one IfcPolyline of its two ends. CadCraft_BoundaryLine: Kind room, AX AY BX BY.
 *                    A reader that knows nothing of it sees a line with no body: no wall, no quantity, nothing to count.
 *   Area boundary    the same entity, ObjectType AREABOUNDARY, Kind area, Scheme (gross | rentable). When it was made by picking a
 *                    wall it also has Wall (the wall's GlobalId) and Face (centre | left | right) and follows that wall.
 *   Area             IfcSpace aggregated by its level: PredefinedType GFA for the gross building scheme, USERDEFINED with ObjectType
 *                    "Rentable" for rentable (IFC2X3 has no such type: ObjectType "GFA" / "Rentable"). Name = its number, LongName = its
 *                    name. NO body (it would lie over the rooms). Qto_SpaceBaseQuantities GrossFloorArea and GrossPerimeter only.
 *                    CadCraft_Area: Scheme, AreaType, SeedX, SeedY, Enclosed. Not a room: model-slabs.js reads only CadCraft_Room spaces.
 *   Tag              IfcAnnotation contained in its level, ObjectType ROOMTAG | AREATAG, Name = its text on one line, placed where it
 *                    shows. CadCraft_Tag: Kind, Target (the room's or area's GlobalId), OffsetX, OffsetY (from the target's label point),
 *                    PaperHeight (the text height on paper), Text (the lines). The offset is what is kept: the place is worked out again
 *                    whenever the target moves, so a tag follows its room. A tag whose target is gone is deleted with it.
 *
 *   readBounds(w, storey?) · separatorLines(w, storey) · addBound(w, spec) · changeBound(w, guid, { a, b }) · boundsByGuid
 *   areaLoops(w, storey, scheme) → loops (model-rooms.js planLoops of the scheme's boundaries on that level)
 *   readAreas(w) · addArea(w, spec) · changeArea(w, guid, { name, number, type }) · SCHEMES
 *   readTags(w) · addTag(w, spec) · changeTag(w, guid, { offset, paper }) · targetsOf(w) → Map(guid → { kind, storey, at, number, name, area })
 *   syncBounds(w) → { moved, areas, tags, dropped }   after any change: boundaries follow their walls, areas are measured again,
 *                    tags follow their targets, orphans go. Cheap when the file has none of these.
 */
import { ids, val } from './ifc-util.js';
import { round } from './model-write.js';
import { readWalls, wallOutlines } from './model-walls.js';
import { planLoops, loopAt, labelPoint } from './model-rooms.js';
import { faceFromOutline, tagLines, tagSize } from './spaces-geom.js';
import { t as tr } from './i18n.js';
import { fmtArea, getDisplayUnits } from './model-units.js';   // FX.352: the tag's text follows the project's display unit, like the plan

export const BOUND_PSET = 'CadCraft_BoundaryLine', AREA_PSET = 'CadCraft_Area', TAG_PSET = 'CadCraft_Tag', ROOM_PSET = 'CadCraft_Room';
export const SCHEMES = ['gross', 'rentable'];
export const TAG_PAPER = 2.5;   // mm on paper
const FACES = ['centre', 'left', 'right'];
const refuse = (key) => { throw Object.assign(new Error(key), { key }); };
const safe = (w, cls) => { try { return ids(w.api, w.mid, cls); } catch (e) { return []; } };
const num = (v, w) => Number(v) * w.unitMm;
const LM = (w, k, mm) => [k, 'IFCLENGTHMEASURE', round(w.u(mm))];
const is4x3 = (w) => /^IFC4X3/i.test(w.schema || '');

// ------------------------------------------------------------------------------------------------ boundary lines
export function readBounds(w, storey = null) {
  const list = safe(w, 'IFCVIRTUALELEMENT');
  if (!list.length) return [];
  const so = w.storeyOf(), out = [];
  for (const id of list) {
    const ps = w.readPset(id, BOUND_PSET);
    if (!ps) continue;
    const st = so.get(id) ?? null;
    if (storey !== null && st !== storey) continue;
    out.push({ id, guid: val(w.api.GetLine(w.mid, id, false).GlobalId), storey: st, kind: ps.Kind === 'area' ? 'area' : 'room', scheme: SCHEMES.includes(ps.Scheme) ? ps.Scheme : '',
      a: [num(ps.AX, w), num(ps.AY, w)], b: [num(ps.BX, w), num(ps.BY, w)], wall: ps.Wall || '', face: FACES.includes(ps.Face) ? ps.Face : 'centre' });
  }
  return out;
}
/** The room separators of a level as lines for planLoops (model-slabs.js storeyLoops). */
export function separatorLines(w, storey) {
  return readBounds(w, storey).filter((b) => b.kind === 'room').map((b) => [b.a, b.b]);
}
function writeBoundShape(w, id, a, b) {
  w.setShape(id, [w.rep('axis', 'Axis', 'Curve2D', [w.polyline2([a, b])])]);
  w.upsertPset(id, BOUND_PSET, [LM(w, 'AX', a[0]), LM(w, 'AY', a[1]), LM(w, 'BX', b[0]), LM(w, 'BY', b[1])]);
}
/** spec: { storey (express id), kind 'room' | 'area', scheme, a, b, wall (GlobalId), face, guid } → { id, guid } */
export function addBound(w, spec) {
  const kind = spec.kind === 'area' ? 'area' : 'room';
  const a = [Number(spec.a[0]), Number(spec.a[1])], b = [Number(spec.b[0]), Number(spec.b[1])];
  if (![...a, ...b].every(Number.isFinite) || !(Math.hypot(b[0] - a[0], b[1] - a[1]) >= 1)) refuse('spaces.err.short');   // under 1 mm: nothing to bound
  const st = w.api.GetLine(w.mid, spec.storey, false);
  if (!st) refuse('model.err.nolevel');
  const g = spec.guid || val(w.guid());
  const name = w.L(tr(kind === 'area' ? 'spaces.areabound' : 'spaces.separator'));
  const id = w.make('IFCVIRTUALELEMENT', g, w.ownerHistory(), name, null, w.L(kind === 'area' ? 'AREABOUNDARY' : 'ROOMSEPARATOR'), w.H(w.placeAt(st.ObjectPlacement.value, 0, 0, 0, 0)), null, null, ...(is4x3(w) ? ['BOUNDARY'] : []));
  w.contain(id, spec.storey);
  const scheme = kind === 'area' ? (SCHEMES.includes(spec.scheme) ? spec.scheme : 'gross') : '';
  w.upsertPset(id, BOUND_PSET, [['Kind', 'IFCLABEL', kind], ...(scheme ? [['Scheme', 'IFCLABEL', scheme]] : []), ...(spec.wall ? [['Wall', 'IFCIDENTIFIER', spec.wall], ['Face', 'IFCLABEL', FACES.includes(spec.face) ? spec.face : 'centre']] : [])]);
  writeBoundShape(w, id, a, b);
  return { id, guid: g };
}
export function changeBound(w, guid, { a, b }) {
  const x = readBounds(w).find((y) => y.guid === guid);
  if (!x) refuse('model.err.gone');
  const na = a || x.a, nb = b || x.b;
  if (!(Math.hypot(nb[0] - na[0], nb[1] - na[1]) >= 1)) refuse('spaces.err.short');
  writeBoundShape(w, x.id, na, nb);
  if (x.wall && (a || b)) w.upsertPset(x.id, BOUND_PSET, [['Wall', 'IFCIDENTIFIER', '-']]);   // moved by hand: it no longer follows the wall
  return x;
}

/** A wall's centre line or face as a boundary: from its joined outline, so picked walls that meet at a corner bound a closed area. */
export function wallFaceLine(walls, wall, face, cache = new Map()) {
  if (face !== 'left' && face !== 'right') return faceFromOutline(wall, null, 'centre');
  if (!cache.has(wall.storey)) cache.set(wall.storey, wallOutlines(walls.filter((x) => x.storey === wall.storey).map((x) => ({ key: x.guid, a: x.a, b: x.b, t: x.t, bulge: x.bulge, off: x.joinOff }))));
  return faceFromOutline(wall, cache.get(wall.storey).get(wall.guid), face);
}

// ------------------------------------------------------------------------------------------------------- areas
export function areaLoops(w, storey, scheme, bounds = null) {
  const lines = (bounds || readBounds(w, storey)).filter((b) => b.kind === 'area' && b.storey === storey && b.scheme === scheme).map((b) => [b.a, b.b]);
  return lines.length ? planLoops([], { lines }).rooms : [];
}
function aggParents(w) {
  const m = new Map();
  for (const rid of safe(w, 'IFCRELAGGREGATES')) { const r = w.api.GetLine(w.mid, rid, false); for (const h of r.RelatedObjects || []) m.set(h.value, r.RelatingObject?.value); }
  return m;
}
function qtoOf(w, id, name) {
  const d = w.defNamed(id, name), out = {};
  for (const h of d?.line.Quantities || []) { const q = w.api.GetLine(w.mid, h.value, false); const v = q?.AreaValue ?? q?.LengthValue; if (q?.Name && v !== undefined && v !== null) out[val(q.Name)] = Number(val(v)); }
  return out;
}
export function readAreas(w) {
  const out = [];
  let agg = null;
  for (const id of safe(w, 'IFCSPACE')) {
    const ps = w.readPset(id, AREA_PSET);
    if (!ps) continue;
    agg ||= aggParents(w);
    const l = w.api.GetLine(w.mid, id, false), q = qtoOf(w, id, 'Qto_SpaceBaseQuantities');
    out.push({ id, guid: val(l.GlobalId), storey: agg.get(id) ?? null, scheme: SCHEMES.includes(ps.Scheme) ? ps.Scheme : 'gross', type: ps.AreaType || '', number: val(l.Name) || '', name: val(l.LongName) || '',
      seed: [num(ps.SeedX, w), num(ps.SeedY, w)], enclosed: ps.Enclosed === true || /^(\.?T\.?|true)$/i.test(String(ps.Enclosed ?? '')), area: (q.GrossFloorArea || 0) * 1e6, perimeter: (q.GrossPerimeter || 0) * w.unitMm });
  }
  return out;
}
/** Measure an area from the loop round its seed (null: its boundaries do not close round it, so it measures nothing and says so). */
function writeArea(w, id, loop, seed) {
  const sd = loop ? labelPoint(loop.poly) : seed;
  w.upsertQto(id, 'Qto_SpaceBaseQuantities', [['GrossFloorArea', 'area', loop ? loop.area : 0], ['GrossPerimeter', 'length', loop ? loop.perimeter : 0]]);
  w.upsertPset(id, AREA_PSET, [LM(w, 'SeedX', sd[0]), LM(w, 'SeedY', sd[1]), ['Enclosed', 'IFCBOOLEAN', !!loop]]);
}
/** spec: { storey (express id), scheme, seed, name, number, type, guid } → { id, guid, enclosed } */
export function addArea(w, spec) {
  const scheme = SCHEMES.includes(spec.scheme) ? spec.scheme : 'gross';
  const st = w.api.GetLine(w.mid, spec.storey, false);
  if (!st) refuse('model.err.nolevel');
  const seed = [Number(spec.seed[0]), Number(spec.seed[1])];
  if (!seed.every(Number.isFinite)) refuse('spaces.err.point');
  const have = readAreas(w).filter((x) => x.storey === spec.storey && x.scheme === scheme);
  const loop = loopAt(areaLoops(w, spec.storey, scheme), seed);
  const number = String(spec.number || '').trim() || String(have.length + 1);
  const name = String(spec.name || '').trim() || tr('spaces.area.name', { n: have.length + 1 });
  const g = spec.guid || val(w.guid());
  const typ = scheme === 'gross' ? 'GFA' : 'USERDEFINED';
  const id = w.make('IFCSPACE', g, w.ownerHistory(), w.L(number), null, w.L(scheme === 'gross' ? 'GFA' : 'Rentable'), w.H(w.placeAt(st.ObjectPlacement.value, 0, 0, 0, 0)), null, w.L(name), 'ELEMENT', ...(w.v4 ? [typ, null] : ['NOTDEFINED', null]));
  let rel = null;
  for (const rid of safe(w, 'IFCRELAGGREGATES')) { const r = w.api.GetLine(w.mid, rid, false); if (r.RelatingObject?.value === spec.storey) { rel = rid; break; } }
  if (rel) { const r = w.touch(rel); r.RelatedObjects = [...(r.RelatedObjects || []), w.H(id)]; w.write(r); }
  else w.make('IFCRELAGGREGATES', w.guid(), w.ownerHistory(), null, null, w.H(spec.storey), [w.H(id)]);
  w.upsertPset(id, AREA_PSET, [['Scheme', 'IFCLABEL', scheme], ['AreaType', 'IFCLABEL', String(spec.type || '').trim() || tr('spaces.area.type.' + scheme)]]);
  writeArea(w, id, loop, seed);
  return { id, guid: g, enclosed: !!loop };
}
export function changeArea(w, guid, ch = {}) {
  const x = readAreas(w).find((y) => y.guid === guid);
  if (!x) refuse('model.err.gone');
  const l = w.touch(x.id);
  if (ch.number !== undefined && String(ch.number).trim()) l.Name = w.L(String(ch.number).trim());
  if (ch.name !== undefined && String(ch.name).trim()) l.LongName = w.L(String(ch.name).trim());
  w.write(l);
  if (ch.type !== undefined && String(ch.type).trim()) w.upsertPset(x.id, AREA_PSET, [['AreaType', 'IFCLABEL', String(ch.type).trim()]]);
  return x;
}

// -------------------------------------------------------------------------------------------------------- tags
/** Everything a tag can point at: the rooms the walls make (CadCraft_Room spaces) and the areas. at = its label point. */
export function targetsOf(w, areas = null) {
  const m = new Map();
  let agg = null;
  for (const id of safe(w, 'IFCSPACE')) {
    const ps = w.readPset(id, ROOM_PSET);
    if (!ps) continue;
    agg ||= aggParents(w);
    const l = w.api.GetLine(w.mid, id, false), q = qtoOf(w, id, 'Qto_SpaceBaseQuantities');
    m.set(val(l.GlobalId), { kind: 'room', id, storey: agg.get(id) ?? null, at: [num(ps.SeedX, w), num(ps.SeedY, w)], number: val(l.Name) || '', name: val(l.LongName) || '', area: (q.NetFloorArea || 0) * 1e6 });
  }
  for (const a of areas || readAreas(w)) m.set(a.guid, { kind: 'area', id: a.id, storey: a.storey, at: a.seed, number: a.number, name: a.name, area: a.area });
  return m;
}
export function readTags(w) {
  const out = [];
  let so = null;
  for (const id of safe(w, 'IFCANNOTATION')) {
    const ps = w.readPset(id, TAG_PSET);
    if (!ps) continue;
    so ||= w.storeyOf();
    const l = w.api.GetLine(w.mid, id, false);
    out.push({ id, guid: val(l.GlobalId), storey: so.get(id) ?? null, kind: ps.Kind === 'area' ? 'area' : 'room', target: ps.Target || '', offset: [num(ps.OffsetX || 0, w), num(ps.OffsetY || 0, w)],
      paper: Number(ps.PaperHeight) > 0 ? num(ps.PaperHeight, w) : TAG_PAPER, text: String(ps.Text || ''), at: [num(ps.X || 0, w), num(ps.Y || 0, w)], lp: l.ObjectPlacement?.value ?? null });
  }
  return out;
}
/** The area as the file's tag text says it: in the project's display unit, as the plan draws it (m² metric, ft² in feet-and-inches; FX.352). */
const m2 = (mm2) => fmtArea(mm2, getDisplayUnits());
function writeTag(w, tag, target) {
  const at = [target.at[0] + tag.offset[0], target.at[1] + tag.offset[1]];
  const lines = tagLines(target, { area: target.area > 0 ? m2(target.area) : '' }), text = lines.join('\n');
  if (tag.text === text && Math.hypot(at[0] - tag.at[0], at[1] - tag.at[1]) < 0.01 && !tag.fresh) return false;
  if (tag.lp) w.movePlacement(tag.lp, at[0], at[1], 0, 0);
  const l = w.touch(tag.id); l.Name = w.L(lines.join(' ')); w.write(l);
  // the text itself, for a reader that draws annotations: one IfcTextLiteralWithExtent centred on the tag's point, sized for 1 : 100
  const sz = tagSize(lines, tag.paper, 100);
  const pos = w.make('IFCAXIS2PLACEMENT2D', w.H(w.point2(0, 0)), null);
  const ext = w.make('IFCPLANAREXTENT', round(w.u(sz.w)), round(w.u(sz.h)));
  const lit = w.make('IFCTEXTLITERALWITHEXTENT', w.T('IFCPRESENTABLETEXT', text || '-'), w.H(pos), w.E('RIGHT'), w.H(ext), w.T('IFCBOXALIGNMENT', 'center'));
  w.setShape(tag.id, [w.rep('foot', 'Annotation', 'Annotation2D', [lit])]);
  w.upsertPset(tag.id, TAG_PSET, [LM(w, 'X', at[0]), LM(w, 'Y', at[1]), ['Text', 'IFCTEXT', text || '-']]);
  return true;
}
/** spec: { target (GlobalId), offset [dx, dy], paper (mm on paper), guid } → { id, guid } */
export function addTag(w, spec, targets = null) {
  const T = (targets || targetsOf(w)).get(spec.target);
  if (!T || T.storey === null) refuse('spaces.err.notarget');
  const st = w.api.GetLine(w.mid, T.storey, false);
  const g = spec.guid || val(w.guid());
  const lp = w.placeAt(st.ObjectPlacement.value, T.at[0], T.at[1], 0, 0);
  const id = w.make('IFCANNOTATION', g, w.ownerHistory(), w.L(tr(T.kind === 'area' ? 'spaces.tag.area' : 'spaces.tag.room')), null, w.L(T.kind === 'area' ? 'AREATAG' : 'ROOMTAG'), w.H(lp), null, ...(is4x3(w) ? ['USERDEFINED'] : []));
  w.contain(id, T.storey);
  const off = spec.offset || [0, 0], paper = spec.paper > 0 ? spec.paper : TAG_PAPER;
  w.upsertPset(id, TAG_PSET, [['Kind', 'IFCLABEL', T.kind], ['Target', 'IFCIDENTIFIER', spec.target], LM(w, 'OffsetX', off[0]), LM(w, 'OffsetY', off[1]), LM(w, 'PaperHeight', paper)]);
  writeTag(w, { id, storey: T.storey, lp, offset: off, paper, text: '', at: [NaN, NaN], fresh: true }, T);
  return { id, guid: g };
}
export function changeTag(w, guid, ch = {}) {
  const x = readTags(w).find((y) => y.guid === guid);
  if (!x) refuse('model.err.gone');
  const rows = [];
  if (ch.offset) rows.push(LM(w, 'OffsetX', ch.offset[0]), LM(w, 'OffsetY', ch.offset[1]));
  if (ch.paper > 0) rows.push(LM(w, 'PaperHeight', ch.paper));
  if (rows.length) w.upsertPset(x.id, TAG_PSET, rows);
  const T = targetsOf(w).get(x.target);
  if (T) writeTag(w, { ...x, offset: ch.offset || x.offset, paper: ch.paper > 0 ? ch.paper : x.paper, fresh: true }, T);
  return x;
}

// -------------------------------------------------------------------------------------------------------- sync
export function syncBounds(w) {
  const R = { moved: 0, areas: 0, tags: 0, dropped: 0 };
  let bounds = readBounds(w);
  // 1. a boundary made by picking a wall lies on that wall still (its wall gone: it stays where it was, a plain line now)
  const follow = bounds.filter((b) => b.wall && b.wall !== '-');
  if (follow.length) {
    const all = readWalls(w), walls = new Map(all.map((x) => [x.guid, x])), outlines = new Map();
    for (const b of follow) {
      const wall = walls.get(b.wall);
      if (!wall) continue;
      const [a, c] = wallFaceLine(all, wall, b.face, outlines);
      if (Math.hypot(a[0] - b.a[0], a[1] - b.a[1]) + Math.hypot(c[0] - b.b[0], c[1] - b.b[1]) < 0.01) continue;
      writeBoundShape(w, b.id, a, c); b.a = a; b.b = c; R.moved++;
    }
  }
  // 2. areas measured again from their boundaries
  const areas = readAreas(w);
  if (areas.length) {
    const cache = new Map();
    for (const a of areas) {
      if (a.storey === null) continue;
      const k = a.storey + ':' + a.scheme;
      if (!cache.has(k)) cache.set(k, areaLoops(w, a.storey, a.scheme, bounds));
      const loop = loopAt(cache.get(k), a.seed);
      const want = loop ? [loop.area, loop.perimeter] : [0, 0];
      if (!!loop === a.enclosed && Math.abs(want[0] - a.area) < 1 && Math.abs(want[1] - a.perimeter) < 0.01) continue;
      writeArea(w, a.id, loop, a.seed); R.areas++;
      a.area = want[0]; a.perimeter = want[1]; a.enclosed = !!loop; if (loop) a.seed = labelPoint(loop.poly);
    }
  }
  // 3. tags follow their rooms and areas; a tag with nothing to point at goes
  const tags = readTags(w);
  if (tags.length) {
    const T = targetsOf(w, areas), gone = [];
    for (const tag of tags) {
      const target = T.get(tag.target);
      if (!target || target.storey !== tag.storey) { gone.push(tag.id); continue; }
      if (writeTag(w, tag, target)) R.tags++;
    }
    if (gone.length) { w.dropProduct(gone); R.dropped += gone.length; }
  }
  return R;
}
