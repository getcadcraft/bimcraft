/* SPDX-License-Identifier: Apache-2.0 */
/**
 * model-slabs.js — rooms, floors, ceilings and roofs over drawn walls (0.5 part 3, BM.6). No DOM: bin/test-bimcraft.mjs
 * --model runs it in Node. They are found from the walls (model-rooms.js planLoops) and follow them: each remembers a
 * point inside what it covers (its seed), and syncDerived() makes it again from whatever loop holds that point after the
 * walls change.
 *
 *   readDerived(w) → { spaces, floors, ceilings, roofs }   the ones the tools made (by their CadCraft_* pset), with
 *                    { id, guid, storey, seed, … their parameters }
 *   storeyLoops(w, storey) → { walls, rooms, outlines }   the level's rooms and building outlines from its drawn walls
 *   syncDerived(w, storey) → { made, changed, dropped }   rooms: a space for every closed room (new ones numbered and named
 *                    "Room N"), spaces whose room is gone deleted, shapes and quantities made again where they changed;
 *                    floors, ceilings and roofs of that level: made again from their loop
 *   addFloor(w, { storey, seed, mode: 'room'|'building', kind, thickness, offset, guid })
 *   addCeiling(w, { storey, seed, mode, height, thickness, guid })
 *   addRoof(w, { storey (the walls' level), seed, pitch, overhang, gables: [edge…], thickness, guid })
 *   updateDerived(w, guid, changes) · deleteDerived(w, guids)
 *   CEILING_PATTERNS   0.6 DC.117 (bim-views_PART_2): the short list of grids a ceiling plan draws on a ceiling — '' none, '600x600',
 *                    '600x1200', '2x2', '2x4' ({ key, u, v } module in mm); CadCraft_Ceiling Pattern, changed by updateDerived
 *
 * Written as: IfcSpace (.SPACE.) aggregated into its storey (Name = its number, LongName = its name; Body = the room swept up
 * to the next level; Qto_SpaceBaseQuantities NetFloorArea, GrossFloorArea, NetPerimeter, Height, NetVolume; CadCraft_Room);
 * IfcSlab (.FLOOR.) contained in its storey, the loop swept down from its top (CadCraft_Floor, Qto_SlabBaseQuantities, a
 * material); IfcCovering (.CEILING.) (CadCraft_Ceiling, Qto_CoveringBaseQuantities); IfcRoof (.HIP_ROOF. / .GABLE_ROOF.)
 * contained in the level above the walls (or theirs when there is none) and aggregating one IfcSlab (.ROOF.) per roof face
 * — each an IfcExtrudedAreaSolid of the face in its own sloped plane, swept straight up (faces meet cleanly at ridges and
 * hips) by as much as makes the roof's thickness square to the face — and one IfcWall
 * per gable end (the triangle between the wall top and the roof), CadCraft_Roof (WallsLevel, Seed, PitchDegrees, Overhang,
 * Thickness, Gables), Qto_RoofBaseQuantities (GrossArea, NetArea, ProjectedArea). Each keeps a ShapeKey (a short hash of
 * what its shape was made from), so an unchanged one is left alone.
 */
import { ids, val, inv4, mul4, apply4 } from './ifc-util.js';
import { round } from './model-write.js';
import { readLevels } from './model-levels.js';
import { readWalls, wallOutlines, buildingOutlines, wallsThrough, PLAN_CUT } from './model-walls.js';
import { planLoops, loopAt, labelPoint, area as loopArea, perim } from './model-rooms.js';
import { roofPlan } from './model-roof.js';
import { writeRoofParts, edgeKinds, roofGeometry, ROOF_DEFAULTS } from './res-roof.js';   // 0.5 part 4 RC.1 (bim-residential)
import { syncResidential } from './res-follow.js';   // 0.5 part 4 track RC: foundations (and more) follow the walls too
import { t as tr } from './i18n.js';

export const ROOM_PSET = 'CadCraft_Room', FLOOR_PSET = 'CadCraft_Floor', CEILING_PSET = 'CadCraft_Ceiling', ROOF_PSET = 'CadCraft_Roof';
const IN = 25.4;
export const FLOOR_KINDS = [
  { key: 'wood', t: 12 * IN, mat: 'floor-wood' },
  { key: 'concrete', t: 6 * IN, mat: 'concrete' },
];
const D2R = Math.PI / 180;
export const CEILING_PATTERNS = [
  { key: '', u: 0, v: 0 }, { key: '600x600', u: 600, v: 600 }, { key: '600x1200', u: 600, v: 1200 }, { key: '2x2', u: 2 * 12 * IN, v: 2 * 12 * IN }, { key: '2x4', u: 2 * 12 * IN, v: 4 * 12 * IN },
];

// ---------------------------------------------------------------------------------------------------------------- reading
export function storeyLoops(w, storey) {
  // 0.7 BIM-MLWALL: walls of other levels that run up through this one close its rooms too (joined with this level's own walls)
  const levels = readLevels(w);
  const all = levels.length > 1 ? readWalls(w) : readWalls(w, storey);
  const walls = [...all.filter((x) => x.storey === storey), ...(levels.length > 1 ? wallsThrough(all, levels, storey, PLAN_CUT) : [])];
  const polys = [...wallOutlines(walls.map((x) => ({ key: x.guid, a: x.a, b: x.b, t: x.t, bulge: x.bulge, off: x.joinOff }))).values()];
  return { walls, ...planLoops(polys), outlines: buildingOutlines(walls) };
}


export function readDerived(w) {
  const so = w.storeyOf(), agg = aggParents(w);
  const out = { spaces: [], floors: [], ceilings: [], roofs: [] };
  const seedOf = (ps) => [Number(ps.SeedX) * w.unitMm, Number(ps.SeedY) * w.unitMm];
  for (const id of safeIds(w, 'IFCSPACE')) {
    const ps = w.readPset(id, ROOM_PSET);
    if (!ps) continue;
    const l = w.api.GetLine(w.mid, id, false);
    out.spaces.push({ id, guid: val(l.GlobalId), storey: agg.get(id) ?? null, seed: seedOf(ps), number: val(l.Name) || '', name: val(l.LongName) || '', key: ps.ShapeKey || '' });
  }
  for (const id of safeIds(w, 'IFCSLAB')) {
    const ps = w.readPset(id, FLOOR_PSET);
    if (!ps) continue;
    const l = w.api.GetLine(w.mid, id, false);
    out.floors.push({ id, guid: val(l.GlobalId), storey: so.get(id) ?? null, seed: seedOf(ps), mode: ps.Mode === 'building' ? 'building' : 'room', kind: ps.Kind || 'wood',
      thickness: Number(ps.Thickness) * w.unitMm, offset: Number(ps.Offset || 0) * w.unitMm, key: ps.ShapeKey || '' });
  }
  for (const id of safeIds(w, 'IFCCOVERING')) {
    const ps = w.readPset(id, CEILING_PSET);
    if (!ps) continue;
    const l = w.api.GetLine(w.mid, id, false);
    out.ceilings.push({ id, guid: val(l.GlobalId), storey: so.get(id) ?? null, seed: seedOf(ps), mode: ps.Mode === 'building' ? 'building' : 'room',
      height: Number(ps.Height) * w.unitMm, thickness: Number(ps.Thickness) * w.unitMm, key: ps.ShapeKey || '', pattern: CEILING_PATTERNS.some((x) => x.key === ps.Pattern) ? ps.Pattern : '' });
  }
  for (const id of safeIds(w, 'IFCROOF')) {
    const ps = w.readPset(id, ROOF_PSET);
    if (!ps) continue;
    const l = w.api.GetLine(w.mid, id, false);
    out.roofs.push({ id, guid: val(l.GlobalId), storey: so.get(id) ?? null, walls: ps.WallsLevel || '', seed: seedOf(ps), pitch: Number(ps.PitchDegrees), overhang: Number(ps.Overhang) * w.unitMm,
      thickness: Number(ps.Thickness) * w.unitMm, gables: String(ps.Gables || '').split(',').filter((x) => x !== '').map(Number), key: ps.ShapeKey || '', parts: partsOf(w, id),
      // RC.1: per-wall edges, rake overhang, plate height (0 = the walls' top), fascia height (0 = none), soffit
      edges: ps.Edges || '', rake: ps.Rake !== undefined && ps.Rake !== null ? Number(ps.Rake) * w.unitMm : null, plate: Number(ps.PlateHeight || 0) * w.unitMm,
      fascia: ps.FasciaHeight !== undefined && ps.FasciaHeight !== null ? Number(ps.FasciaHeight) * w.unitMm : 0, soffit: ps.Soffit === true || /^(\.?T\.?|true)$/i.test(String(ps.Soffit ?? '')) });
  }
  return out;
}
function safeIds(w, cls) { try { return ids(w.api, w.mid, cls); } catch (e) { return []; } }
/** element → the storey it is aggregated into (spaces) */
function aggParents(w) {
  const m = new Map();
  for (const rid of ids(w.api, w.mid, 'IFCRELAGGREGATES')) {
    const r = w.api.GetLine(w.mid, rid, false);
    for (const h of r.RelatedObjects || []) m.set(h.value, r.RelatingObject?.value);
  }
  return m;
}
function partsOf(w, id) {
  for (const rid of ids(w.api, w.mid, 'IFCRELAGGREGATES')) {
    const r = w.api.GetLine(w.mid, rid, false);
    if (r.RelatingObject?.value === id) return (r.RelatedObjects || []).map((h) => h.value);
  }
  return [];
}
/** A short hash of what a shape is made from (rounded to 0.01 mm). */
function shapeKey(...parts) {
  const s = JSON.stringify(parts, (k, v) => (typeof v === 'number' ? Math.round(v * 100) / 100 : v));
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return (h >>> 0).toString(36) + s.length.toString(36);
}

// ---------------------------------------------------------------------------------------------------------------- writing
function levelOf(levels, storey) { const i = levels.findIndex((l) => l.id === storey); return i >= 0 ? { level: levels[i], above: levels[i + 1] || null, index: i } : null; }

function writeSpace(w, id, loop, lv) {
  const h = lv.above ? lv.above.elevation - lv.level.elevation : lv.level.height;
  const key = shapeKey(loop.poly, loop.holes, h);
  w.setShape(id, [w.rep('body', 'Body', 'SweptSolid', [w.extrude(w.profileVoids(loop.poly, loop.holes), 0, h)])]);
  const a = loop.area;
  w.upsertQto(id, 'Qto_SpaceBaseQuantities', [['Height', 'length', h], ['NetPerimeter', 'length', loop.perimeter], ['GrossPerimeter', 'length', perim(loop.poly)], ['NetFloorArea', 'area', a], ['GrossFloorArea', 'area', Math.abs(loopArea(loop.poly))], ['NetVolume', 'volume', a * h]]);
  const sd = labelPoint(loop.poly);
  w.upsertPset(id, ROOM_PSET, [['SeedX', 'IFCLENGTHMEASURE', round(w.u(sd[0]))], ['SeedY', 'IFCLENGTHMEASURE', round(w.u(sd[1]))], ['ShapeKey', 'IFCIDENTIFIER', key]]);
}
function addSpace(w, storey, loop, lv, number, name) {
  const st = w.api.GetLine(w.mid, storey, false);
  const lp = w.placeAt(st.ObjectPlacement.value, 0, 0, 0, 0);
  const id = w.make('IFCSPACE', w.guid(), w.ownerHistory(), w.L(number), null, null, w.H(lp), null, w.L(name), 'ELEMENT', ...(w.v4 ? ['SPACE', null] : ['INTERNAL', null]));
  // spaces decompose their storey
  let rel = null;
  for (const rid of ids(w.api, w.mid, 'IFCRELAGGREGATES')) { const r = w.api.GetLine(w.mid, rid, false); if (r.RelatingObject?.value === storey) { rel = rid; break; } }
  if (rel) { const r = w.touch(rel); r.RelatedObjects = [...(r.RelatedObjects || []), w.H(id)]; w.write(r); }
  else w.make('IFCRELAGGREGATES', w.guid(), w.ownerHistory(), null, null, w.H(storey), [w.H(id)]);
  w.upsertPset(id, 'Pset_SpaceCommon', [['Reference', 'IFCIDENTIFIER', number], ['IsExternal', 'IFCBOOLEAN', false]]);
  writeSpace(w, id, loop, lv);
  return id;
}

function writeFloor(w, f, loop) {
  const poly = loop.poly, holes = loop.holes || [];
  const key = shapeKey(poly, holes, f.thickness, f.offset);
  if (f.key === key) return false;
  w.setShape(f.id, [w.rep('body', 'Body', 'SweptSolid', [w.extrude(w.profileVoids(poly, holes), f.offset - f.thickness, f.thickness)])]);
  const a = Math.abs(loopArea(poly)) - holes.reduce((s, h) => s + Math.abs(loopArea(h)), 0);
  w.upsertQto(f.id, 'Qto_SlabBaseQuantities', [['Width', 'length', f.thickness], ['Perimeter', 'length', perim(poly)], ['GrossArea', 'area', Math.abs(loopArea(poly))], ['NetArea', 'area', a], ['NetVolume', 'volume', a * f.thickness]]);
  const sd = labelPoint(poly);
  w.upsertPset(f.id, FLOOR_PSET, [['SeedX', 'IFCLENGTHMEASURE', round(w.u(sd[0]))], ['SeedY', 'IFCLENGTHMEASURE', round(w.u(sd[1]))], ['ShapeKey', 'IFCIDENTIFIER', key]]);
  return true;
}
function writeCeiling(w, c, loop) {
  const poly = loop.poly, holes = loop.holes || [];
  const key = shapeKey(poly, holes, c.height, c.thickness);
  if (c.key === key) return false;
  w.setShape(c.id, [w.rep('body', 'Body', 'SweptSolid', [w.extrude(w.profileVoids(poly, holes), c.height, c.thickness)])]);
  const a = Math.abs(loopArea(poly)) - holes.reduce((s, h) => s + Math.abs(loopArea(h)), 0);
  w.upsertQto(c.id, 'Qto_CoveringBaseQuantities', [['Width', 'length', c.thickness], ['GrossArea', 'area', Math.abs(loopArea(poly))], ['NetArea', 'area', a]]);
  const sd = labelPoint(poly);
  w.upsertPset(c.id, CEILING_PSET, [['SeedX', 'IFCLENGTHMEASURE', round(w.u(sd[0]))], ['SeedY', 'IFCLENGTHMEASURE', round(w.u(sd[1]))], ['ShapeKey', 'IFCIDENTIFIER', key]]);
  return true;
}

export function addFloor(w, { storey, seed, mode = 'room', kind = 'wood', thickness, offset = 0, guid } = {}) {
  const k = FLOOR_KINDS.find((x) => x.key === kind) || FLOOR_KINDS[0];
  const loop = pickLoop(w, storey, seed, mode);
  const st = w.api.GetLine(w.mid, storey, false);
  const lp = w.placeAt(st.ObjectPlacement.value, 0, 0, 0, 0);
  const g = w.gid(guid);
  const name = w.L(tr('model.floor.' + k.key));
  const id = w.make('IFCSLAB', g, w.ownerHistory(), name, null, name, w.H(lp), null, null, 'FLOOR');
  w.noteGuid(g, id);
  w.contain(id, storey);
  w.associateMaterial(id, w.material(tr('model.mat.' + k.mat)));
  const T = thickness > 0 ? thickness : k.t;
  w.upsertPset(id, FLOOR_PSET, [['Mode', 'IFCLABEL', mode], ['Kind', 'IFCLABEL', k.key], ['Thickness', 'IFCPOSITIVELENGTHMEASURE', round(w.u(T))], ['Offset', 'IFCLENGTHMEASURE', round(w.u(offset))],
    ['SeedX', 'IFCLENGTHMEASURE', round(w.u(seed[0]))], ['SeedY', 'IFCLENGTHMEASURE', round(w.u(seed[1]))], ['ShapeKey', 'IFCIDENTIFIER', '']]);
  w.upsertPset(id, 'Pset_SlabCommon', [['IsExternal', 'IFCBOOLEAN', false], ['LoadBearing', 'IFCBOOLEAN', true]]);
  writeFloor(w, { id, thickness: T, offset, key: '' }, loop);
  return { id, guid: g };
}
export function addCeiling(w, { storey, seed, mode = 'room', height, thickness = 0.5 * IN, guid } = {}) {
  const loop = pickLoop(w, storey, seed, mode);
  const st = w.api.GetLine(w.mid, storey, false);
  const lp = w.placeAt(st.ObjectPlacement.value, 0, 0, 0, 0);
  const g = w.gid(guid);
  const name = w.L(tr('model.ceiling'));
  const id = w.make('IFCCOVERING', g, w.ownerHistory(), name, null, name, w.H(lp), null, null, 'CEILING');
  w.noteGuid(g, id);
  w.contain(id, storey);
  w.associateMaterial(id, w.material(tr('model.mat.gypsum')));
  w.upsertPset(id, CEILING_PSET, [['Mode', 'IFCLABEL', mode], ['Height', 'IFCLENGTHMEASURE', round(w.u(height))], ['Thickness', 'IFCPOSITIVELENGTHMEASURE', round(w.u(thickness))],
    ['SeedX', 'IFCLENGTHMEASURE', round(w.u(seed[0]))], ['SeedY', 'IFCLENGTHMEASURE', round(w.u(seed[1]))], ['ShapeKey', 'IFCIDENTIFIER', '']]);
  writeCeiling(w, { id, height, thickness, key: '' }, loop);
  return { id, guid: g };
}
/** The room (or building outline) at a seed on a storey, or a refusal. */
function pickLoop(w, storey, seed, mode) {
  const L = storeyLoops(w, storey);
  const loop = loopAt(mode === 'building' ? L.outlines : L.rooms, seed);
  if (!loop) throw Object.assign(new Error(mode === 'building' ? 'model.err.nobuilding2' : 'model.err.noroom'), { key: mode === 'building' ? 'model.err.nobuilding2' : 'model.err.noroom' });
  return loop;
}

// ---- roofs ----
export function addRoof(w, { storey, seed, pitch = 26.565, overhang = 12 * IN, gables = [], thickness = 8 * IN, guid, edges = '', rake = null, plate = 0, fascia = ROOF_DEFAULTS.fascia, soffit = true } = {}) {
  const L = storeyLoops(w, storey);
  const outline = loopAt(L.outlines, seed);
  if (!outline) throw Object.assign(new Error('model.err.nobuilding2'), { key: 'model.err.nobuilding2' });
  const kinds = edgeKinds(outline.poly, L.walls, { pitch, overhang, rake, gables, edges });
  const plan = roofGeometry(outline.poly, kinds, { thickness, plate: 0, fascia, soffit });
  if (plan.error) throw Object.assign(new Error(plan.error), { key: plan.error });
  const levels = readLevels(w), lv = levelOf(levels, storey);
  const host = lv.above || lv.level;
  const st = w.api.GetLine(w.mid, host.id, false);
  const lp = w.placeAt(st.ObjectPlacement.value, 0, 0, 0, 0);
  const g = w.gid(guid);
  const name = w.L(tr('model.roof'));
  const id = w.make('IFCROOF', g, w.ownerHistory(), name, null, name, w.H(lp), null, null, ...(w.v4 ? [gables.length || edges ? 'GABLE_ROOF' : 'HIP_ROOF'] : ['NOTDEFINED']));
  w.noteGuid(g, id);
  w.contain(id, host.id);
  const wallsGuid = lv.level.guid;
  w.upsertPset(id, ROOF_PSET, [['WallsLevel', 'IFCIDENTIFIER', wallsGuid], ['PitchDegrees', 'IFCREAL', pitch], ['Overhang', 'IFCLENGTHMEASURE', round(w.u(overhang))],
    ['Thickness', 'IFCPOSITIVELENGTHMEASURE', round(w.u(thickness))], ['Gables', 'IFCLABEL', gables.join(',')], ['SeedX', 'IFCLENGTHMEASURE', round(w.u(seed[0]))], ['SeedY', 'IFCLENGTHMEASURE', round(w.u(seed[1]))], ['ShapeKey', 'IFCIDENTIFIER', ''],
    ['Edges', 'IFCTEXT', edges || null], ['Rake', 'IFCLENGTHMEASURE', rake === null || rake === undefined ? null : round(w.u(rake))], ['PlateHeight', 'IFCLENGTHMEASURE', round(w.u(plate || 0))],
    ['FasciaHeight', 'IFCLENGTHMEASURE', round(w.u(fascia || 0))], ['Soffit', 'IFCBOOLEAN', !!soffit]]);
  writeRoof(w, { id, guid: g, storey: host.id, walls: wallsGuid, seed, pitch, overhang, gables, thickness, key: '', parts: [], edges, rake, plate, fascia, soffit }, { outline, levels, L });
  return { id, guid: g };
}

/** Make a roof's parts again (its face slabs and gable walls) from the walls' outline under it. */
function writeRoof(w, r, ctx = {}) {
  const levels = ctx.levels || readLevels(w);
  const wallsLv = levels.find((l) => l.guid === r.walls);
  if (!wallsLv) return false;
  const L = ctx.L || storeyLoops(w, wallsLv.id);
  const outline = ctx.outline || loopAt(L.outlines, r.seed);
  if (!outline) return false;
  // the roof sits on the tallest wall's top (or its own plate height), in its own storey's axes
  const top = L.walls.reduce((m, x) => Math.max(m, x.baseOffset + x.height), 0) || wallsLv.height;
  const key = shapeKey(outline.poly, r.pitch, r.overhang, r.gables, r.thickness, top, wallsLv.elevation, r.edges || '', r.rake, r.plate || 0, r.fascia || 0, !!r.soffit,
    L.walls.map((x) => [x.guid, x.a, x.b, x.t, x.baseOffset + x.height]));
  if (r.key === key && r.parts.length) return false;
  // RC.1 (res-roof.js): faces from the walls' outline with a pitch per wall, gable walls, fascia, soffit
  const made = writeRoofParts(w, r, { wallsLv, L, outline, top });
  if (!made) return false;
  const sd = labelPoint(outline.poly);
  w.upsertPset(r.id, ROOF_PSET, [['SeedX', 'IFCLENGTHMEASURE', round(w.u(sd[0]))], ['SeedY', 'IFCLENGTHMEASURE', round(w.u(sd[1]))], ['ShapeKey', 'IFCIDENTIFIER', key]]);
  return true;
}

// ---------------------------------------------------------------------------------------------------------------- sync
/** Bring a level's rooms, floors, ceilings (and the roofs over its walls) up to date with its walls. */
export function syncDerived(w, storey) {
  const levels = readLevels(w), lv = levelOf(levels, storey);
  if (!lv) return { made: 0, changed: 0, dropped: 0 };
  const L = storeyLoops(w, storey);
  const D = readDerived(w);
  let made = 0, changed = 0, dropped = 0;
  // rooms
  const taken = new Set(), gone = [];
  const spaces = D.spaces.filter((x) => x.storey === storey);
  for (const sp of spaces) {
    const loop = loopAt(L.rooms, sp.seed);
    if (!loop || taken.has(loop)) { gone.push(sp.id); continue; }
    taken.add(loop);
    const h = lv.above ? lv.above.elevation - lv.level.elevation : lv.level.height;
    if (sp.key !== shapeKey(loop.poly, loop.holes, h)) { writeSpace(w, sp.id, loop, lv); changed++; }
  }
  if (gone.length) { w.dropProduct(gone); dropped += gone.length; }
  const used = new Set(D.spaces.filter((x) => x.storey === storey && !gone.includes(x.id)).map((x) => x.number));
  let n = 1;
  for (const loop of L.rooms) {
    if (taken.has(loop)) continue;
    while (used.has(roomNumber(lv.index, n))) n++;
    const num = roomNumber(lv.index, n);
    used.add(num);
    addSpace(w, storey, loop, lv, num, tr('model.room.name', { n }));
    made++;
  }
  // floors and ceilings on this level
  for (const f of D.floors.filter((x) => x.storey === storey)) {
    const loop = loopAt(f.mode === 'building' ? L.outlines : L.rooms, f.seed);
    if (loop && writeFloor(w, f, loop)) changed++;
  }
  for (const c of D.ceilings.filter((x) => x.storey === storey)) {
    const loop = loopAt(c.mode === 'building' ? L.outlines : L.rooms, c.seed);
    if (loop && writeCeiling(w, c, loop)) changed++;
  }
  // roofs over this level's walls
  for (const r of D.roofs.filter((x) => x.walls === lv.level.guid)) if (writeRoof(w, r, { levels, L })) changed++;
  changed += syncResidential(w, storey, { levels, L });
  return { made, changed, dropped };
}
const roomNumber = (levelIndex, n) => String((levelIndex + 1) * 100 + n);

/** Change a floor, ceiling, roof or room: { thickness, offset, kind, height, pitch, overhang, gables, name, number }. */
export function updateDerived(w, guid, ch = {}) {
  const D = readDerived(w);
  const all = [...D.spaces.map((x) => ['space', x]), ...D.floors.map((x) => ['floor', x]), ...D.ceilings.map((x) => ['ceiling', x]), ...D.roofs.map((x) => ['roof', x])];
  const hit = all.find(([, x]) => x.guid === guid);
  if (!hit) throw Object.assign(new Error('model.err.gone'), { key: 'model.err.gone' });
  const [kind, x] = hit;
  const L = (k, v) => [k, 'IFCLENGTHMEASURE', round(w.u(v))], PL = (k, v) => [k, 'IFCPOSITIVELENGTHMEASURE', round(w.u(v))];
  if (kind === 'space') {
    const l = w.touch(x.id);
    if (ch.number !== undefined && String(ch.number).trim()) l.Name = w.L(String(ch.number).trim());
    if (ch.name !== undefined && String(ch.name).trim()) l.LongName = w.L(String(ch.name).trim());
    w.write(l);
    if (ch.number !== undefined) w.upsertPset(x.id, 'Pset_SpaceCommon', [['Reference', 'IFCIDENTIFIER', String(ch.number).trim()]]);
    return { kind, storey: x.storey };
  }
  const rows = [['ShapeKey', 'IFCIDENTIFIER', '']];
  if (kind === 'floor') {
    if (ch.thickness > 0) rows.push(PL('Thickness', ch.thickness));
    if (Number.isFinite(ch.offset)) rows.push(L('Offset', ch.offset));
    if (ch.kind && FLOOR_KINDS.some((k) => k.key === ch.kind)) { rows.push(['Kind', 'IFCLABEL', ch.kind]); const nm = w.L(tr('model.floor.' + ch.kind)); const l = w.touch(x.id); l.Name = nm; l.ObjectType = nm; w.write(l); }
    w.upsertPset(x.id, FLOOR_PSET, rows);
  } else if (kind === 'ceiling') {
    if (ch.thickness > 0) rows.push(PL('Thickness', ch.thickness));
    if (Number.isFinite(ch.height)) rows.push(L('Height', ch.height));
    if (ch.pattern !== undefined) {
      if (!CEILING_PATTERNS.some((p) => p.key === ch.pattern)) throw Object.assign(new Error('model.err.ce.pattern'), { key: 'model.err.ce.pattern' });
      rows.push(['Pattern', 'IFCLABEL', ch.pattern]);
    }
    w.upsertPset(x.id, CEILING_PSET, rows);
  } else {
    if (ch.thickness > 0) rows.push(PL('Thickness', ch.thickness));
    if (Number.isFinite(ch.overhang) && ch.overhang >= 0) rows.push(L('Overhang', ch.overhang));
    if (Number.isFinite(ch.pitch)) {
      if (!(ch.pitch > 1 && ch.pitch < 80)) throw Object.assign(new Error('model.err.pitch'), { key: 'model.err.pitch' });
      rows.push(['PitchDegrees', 'IFCREAL', ch.pitch]);
    }
    if (Array.isArray(ch.gables)) {
      rows.push(['Gables', 'IFCLABEL', ch.gables.join(',')]);
      if (w.v4) { const l = w.touch(x.id); l.PredefinedType = ch.gables.length ? 'GABLE_ROOF' : 'HIP_ROOF'; w.write(l); }
    }
    // RC.1: per-wall edges, rake overhang, plate height, fascia, soffit
    if (typeof ch.edges === 'string') rows.push(['Edges', 'IFCTEXT', ch.edges || ' ']);
    if (Number.isFinite(ch.rake) && ch.rake >= 0) rows.push(L('Rake', ch.rake));
    if (Number.isFinite(ch.plate) && ch.plate >= 0) rows.push(L('PlateHeight', ch.plate));
    if (Number.isFinite(ch.fascia) && ch.fascia >= 0) rows.push(L('FasciaHeight', ch.fascia));
    if (typeof ch.soffit === 'boolean') rows.push(['Soffit', 'IFCBOOLEAN', ch.soffit]);
    // a roof that can't be made with the new numbers is refused, not left broken
    const levels = readLevels(w), wl = levels.find((l) => l.guid === x.walls);
    if (wl) {
      const SL = storeyLoops(w, wl.id), o = loopAt(SL.outlines, x.seed);
      const nx = { pitch: ch.pitch ?? x.pitch, overhang: ch.overhang ?? x.overhang, gables: ch.gables ?? x.gables, edges: typeof ch.edges === 'string' ? ch.edges : x.edges, rake: ch.rake ?? x.rake };
      const pl = o && roofGeometry(o.poly, edgeKinds(o.poly, SL.walls, nx), { thickness: ch.thickness > 0 ? ch.thickness : x.thickness, fascia: ch.fascia ?? x.fascia, soffit: ch.soffit ?? x.soffit });
      if (pl?.error) throw Object.assign(new Error(pl.error), { key: pl.error });
    }
    w.upsertPset(x.id, ROOF_PSET, rows);
    return { kind, storey: levels.find((l) => l.guid === x.walls)?.id ?? null };
  }
  return { kind, storey: x.storey };
}

export function deleteDerived(w, guids) {
  const D = readDerived(w), list = [];
  for (const x of [...D.spaces, ...D.floors, ...D.ceilings, ...D.roofs]) if (guids.includes(x.guid)) { list.push(x.id, ...(x.parts || [])); }
  if (list.length) w.dropProduct(list);
}
