/* SPDX-License-Identifier: Apache-2.0 */
/**
 * model-openings.js — doors and windows hosted in walls (0.5 part 3, BM.4): starter types, the IFC they are written as,
 * reading them back, and their plan symbols. No DOM: bin/test-bimcraft.mjs --model runs it in Node.
 *
 *   DOOR_TYPES, WINDOW_TYPES, openingType(key)       key, kind ('door' | 'window'), default width / height / sill (mm)
 *   handKind(type)           'hinges' | 'slides' | 'folds' | null: what flipping the hand (a | b) changes
 *   readOpenings(w, storey?) → [{ id, guid, kind, typeKey, typeName, openingId, wall (id), wallGuid, storey, offset, width,
 *                                 height, sill, hand ('a' | 'b'), face ('left' | 'right') }]
 *   addOpening(w, { wall, typeKey, offset, width, height, sill, hand, face, guid })   → { id, guid, opening }
 *   updateOpening(w, guid, { offset, width, height, sill, typeKey, hand, face, wall })   (wall: another wall's GlobalId)
 *   deleteOpenings(w, guids) → { walls: [GlobalIds of the hosts] }
 *   regenOpenings(w, wall)       shapes of everything a wall hosts (after its thickness changed)
 *   fitOffset(wall, width, offset, { gap }) → the offset clamped so the opening stays in the wall, or null when it can't
 *   openingSymbol(op, wall)  → { lines, arcs, thin, dashed, poly } plan symbol (swing arc, leaves, panels, sash lines)
 *
 * Offsets run along the wall from its start (the wall's own X) to the opening's near edge; `sill` is above the level's
 * floor; `face` is the side of the wall a door swings to (its left = +Y of the wall's axes, or its right) — for a window,
 * the side its frame sits on (the outside); `hand` is the end of the opening the hinges are at ('a' = towards the wall's
 * start).
 *
 * Written as (Design Transfer View): IfcOpeningElement (.OPENING.) placed relative to the WALL's placement at (offset, 0,
 * sill − the wall's base offset), X along the wall, its Body a box through the wall (10 mm proud of each face), related
 * by IfcRelVoidsElement (the wall's shape is cut by it — cc-ifc booleans); the IfcDoor / IfcWindow placed relative to the
 * opening (same axes), OverallWidth / OverallHeight, PredefinedType + OperationType (doors) / PartitioningType (windows),
 * its Body built from the parameters (frame, leaves or sashes, glass — coloured with IfcStyledItem), IfcRelFillsElement,
 * contained in the storey, typed by its family's size (0.6 DC.114, family-model.js: one IfcDoorType / IfcWindowType — IFC2X3
 * IfcDoorStyle / IfcWindowStyle — per family and size, grouped by the family's IfcGroup; files from before families keep
 * their one IfcDoorType per starter kind with CadCraft_DoorType Key until an element is changed), Pset_DoorCommon / Pset_WindowCommon (Reference, IsExternal = the wall's), Qto_DoorBaseQuantities
 * / Qto_WindowBaseQuantities (Width, Height, Area), CadCraft_Door / CadCraft_Window (TypeKey = the starter kind its plan
 * symbol and hand follow, Family = its family's key, Width, Height, Sill, Hand, Face); the body is the family's solids
 * (family-starters.js: the starter kinds drawn exactly as before families) for its size and its wall; the opening gets CadCraft_Opening (Width, Height) so the wall's net quantities can take it off. Moving or
 * deleting the wall moves or deletes all of it (placements are relative; model-walls.js deleteWalls).
 */
import { ids, val, deleteLine } from './ifc-util.js';
import { round } from './model-write.js';
import { readWalls, WALL_PSET, wallLevelsPassed } from './model-walls.js';
import { readLevels } from './model-levels.js';
import { t as tr } from './i18n.js';
import { DOOR_TYPES, WINDOW_TYPES, openingType, openingTypeName, handKind } from './opening-types.js';
import { familyFor, familyIndex, sizeTypeFor, evaluateFamily, bodyItems, sizeValues, evalCtx, readInstance, writeInstance, instanceValues } from './family-model.js';
import { hostFrame, hostOffset, openingCut, wallGeom } from './model-arcs.js';
import { typeFrame } from './ifc-place.js';   // 0.6 round 2 (bim-comforts_PART_2): openings in curved walls

const IN = 25.4;
export const DOOR_PSET = 'CadCraft_Door';
export const WINDOW_PSET = 'CadCraft_Window';
export const OPENING_PSET = 'CadCraft_Opening';
/**
 * 0.7 BIM-MLWALL: a door's sill is 0 — except on a wall that runs up through levels, where a door on an upper level stands on that
 * level's floor: the sill is then that floor's height above the wall's own level. Anything else comes out 0.
 */
export function doorSill(w, host, sill) {
  if (!(sill > 0)) return 0;
  const levels = readLevels(w), base = levels.find((l) => l.id === host.storey);
  if (!base) return 0;
  return wallLevelsPassed(host, levels).some((l) => Math.abs(l.elevation - base.elevation - sill) <= 1) ? sill : 0;
}
const PROUD = 10;   // the opening box stands this far out of each wall face, so the cut always goes through

export { DOOR_TYPES, WINDOW_TYPES, openingType, openingTypeName, handKind } from './opening-types.js';
const FRAME = 1.5 * IN, LEAF = 1.75 * IN, WFRAME = 2 * IN, WDEPTH = 4.5 * IN, GLASS = 6;

// ---------------------------------------------------------------------------------------------------------------- reading
export function readOpenings(w, storey = null, walls = readWalls(w)) {
  const R = w.hostIndex(), out = [];
  const byId = new Map(walls.map((x) => [x.id, x]));
  for (const cls of ['IFCDOOR', 'IFCWINDOW']) {
    let list = [];
    try { list = ids(w.api, w.mid, cls); } catch (e) { continue; }
    for (const id of list) {
      const ps = w.readPset(id, cls === 'IFCDOOR' ? DOOR_PSET : WINDOW_PSET);
      if (!ps) continue;
      const openingId = R.filledBy.get(id), wallId = openingId ? R.voidHost.get(openingId) : null, wall = byId.get(wallId);
      if (!wall || (storey !== null && wall.storey !== storey)) continue;
      const line = w.api.GetLine(w.mid, id, false), op = w.api.GetLine(w.mid, openingId, false);
      const M = w.relMatrix(wall.lp, op.ObjectPlacement.value);
      const typeId = typeOf(w, id), library = ps.Library ? libraryOf(w, typeId) : null, size = typeId && !library ? familyIndex(w).sizes.get(typeId) : null;
      out.push({
        id, guid: val(line.GlobalId), kind: cls === 'IFCDOOR' ? 'door' : 'window', typeKey: ps.TypeKey || '', typeName: val(line.ObjectType) || val(line.Name) || '',
        openingId, opening: val(op.GlobalId), wall: wallId, wallGuid: wall.guid, storey: wall.storey,
        offset: hostOffset(wall, M, Number(ps.Width) * w.unitMm), width: Number(ps.Width) * w.unitMm, height: Number(ps.Height) * w.unitMm, sill: M[14] + wall.baseOffset,
        hand: ps.Hand === 'b' ? 'b' : 'a', face: ps.Face === 'right' ? 'right' : 'left', name: val(line.Name) || '', mark: val(line.Tag) || '',
        family: String(ps.Family || size?.family || ps.TypeKey || ''), typeId, sizeName: size?.name || '', values: size?.values || {},
        instance: (() => { if (library) return {}; const f0 = familyFor(w, String(ps.Family || size?.family || '')); return f0 ? readInstance(w, id, f0) : {}; })(),   // 0.7 BIM-FAM-MORE (7): what this element sets itself
        library,   // 2026-11-02: a Library door / window (its type and frame), else null
      });
    }
  }
  return out;
}

/** Where an opening of `width` can go in `wall` (length len): the offset clamped to [gap, len − width − gap]; null if it can't fit. */
export function fitOffset(wall, width, offset, { gap = 0 } = {}) {
  const max = wall.len - width - gap;
  if (max < gap - 1e-6) return null;
  return Math.max(gap, Math.min(max, offset));
}

// ---------------------------------------------------------------------------------------------------------------- writing
/** The type an element is defined by (IfcRelDefinesByType), or null. */
export function typeOf(w, id) {
  if (!w._typeOf) {
    w._typeOf = new Map();
    for (const rid of ids(w.api, w.mid, 'IFCRELDEFINESBYTYPE')) {
      const r = w.api.GetLine(w.mid, rid, false);
      for (const h of r?.RelatedObjects || []) w._typeOf.set(h.value, r.RelatingType?.value ?? null);
    }
  }
  return w._typeOf.get(id) ?? null;
}
/** The family of a door / window: its key's recipe (a family of the same kind), else its starter kind's. */
function openingFamily(w, key, type) {
  const fam = familyFor(w, key);
  if (fam && fam.host === 'wall' && openingType(fam.base)?.kind === type.kind) return fam;
  return familyFor(w, type.key);
}
/** Move an element to another type: off its old IfcRelDefinesByType (dropped when empty), onto the new one. */
function retype(w, id, typeId) {
  for (const rid of ids(w.api, w.mid, 'IFCRELDEFINESBYTYPE')) {
    const r = w.api.GetLine(w.mid, rid, false);
    if (!(r.RelatedObjects || []).some((h) => h.value === id)) continue;
    if (r.RelatingType?.value === typeId) return;
    const rest = r.RelatedObjects.filter((h) => h.value !== id);
    const l = w.touch(rid);
    if (rest.length) { l.RelatedObjects = rest; w.write(l); } else dropRel(w, rid);
  }
  w.relateType(id, typeId);
  if (w._typeOf) w._typeOf.set(id, typeId);
  w._famIndex = null;
}

export function addOpening(w, { wall, typeKey, family = '', values = {}, instance = {}, sizeName = null, offset, width, height, sill, hand = 'a', face = 'left', guid, openingGuid, library = null } = {}) {
  // 2026-11-02: a Library door / window (library = { typeId }: its type, made by IfcPlacer.typeFor) — fixed size, its own mesh
  const lib = library ? libraryOf(w, library.typeId) : null;
  if (library && !lib) throw Object.assign(new Error('model.err.libopening'), { key: 'model.err.libopening' });
  if (lib) {   // its own size, unless the Library lets that axis be stretched (then the asked size)
    width = lib.frame.stretch.includes('x') && width >= 100 ? width : lib.frame.width;
    height = lib.frame.stretch.includes('z') && height >= 100 ? height : lib.frame.height;
    if (openingType(typeKey)?.kind !== lib.kind) typeKey = libraryBase(lib.kind, width);
    family = '';
  }
  const fam0 = family ? familyFor(w, family) : null;
  if (fam0 && fam0.host === 'wall' && openingType(fam0.base)) typeKey = fam0.base;
  const type = openingType(typeKey);
  if (!type) throw Object.assign(new Error('model.err.opentype'), { key: 'model.err.opentype' });
  const host = readWalls(w).find((x) => x.guid === wall);
  if (!host) throw Object.assign(new Error('model.err.nowall'), { key: 'model.err.nowall' });
  const W = width > 0 ? width : type.width, H = height > 0 ? height : type.height, S = type.kind === 'door' ? doorSill(w, host, sill) : (Number.isFinite(sill) ? sill : type.sill);
  const off = fitOffset(host, W, Number.isFinite(offset) ? offset : (host.len - W) / 2);
  if (off === null) throw Object.assign(new Error('model.err.nofit'), { key: 'model.err.nofit' });
  if (S + H > host.height + 1) throw Object.assign(new Error('model.err.tootall'), { key: 'model.err.tootall' });
  const door = type.kind === 'door';
  // the opening, in the wall
  const og = w.gid(openingGuid);
  const hf = hostFrame(host, off, W);   // a curved wall: square to it at the opening's middle
  const olp = w.placeAt(host.lp, hf.x, hf.y, S - host.baseOffset, hf.ang);
  const opening = w.make('IFCOPENINGELEMENT', og, w.ownerHistory(), w.L(tr('model.opening')), null, null, w.H(olp), null, null, ...(w.v4 ? ['OPENING'] : []));
  w.noteGuid(og, opening);
  w.make('IFCRELVOIDSELEMENT', w.guid(), w.ownerHistory(), null, null, w.H(host.id), w.H(opening));
  // the door or window, in the opening
  const g = w.gid(guid);
  const lp = w.placeAt(olp, 0, 0, 0, 0);
  const fam = lib ? null : openingFamily(w, family || typeKey, type);
  const name = w.L(lib ? lib.name : fam.name);
  const tail = door ? (w.v4 ? [round(w.u(H)), round(w.u(W)), 'DOOR', type.op[hand === 'b' ? 1 : 0], null] : [round(w.u(H)), round(w.u(W))])
    : (w.v4 ? [round(w.u(H)), round(w.u(W)), 'WINDOW', type.part, null] : [round(w.u(H)), round(w.u(W))]);
  const id = w.make(door ? 'IFCDOOR' : 'IFCWINDOW', g, w.ownerHistory(), name, null, name, w.H(lp), null, w.T('IFCIDENTIFIER', nextMark(w, door)), ...tail);
  w.noteGuid(g, id);
  w.make('IFCRELFILLSELEMENT', w.guid(), w.ownerHistory(), null, null, w.H(opening), w.H(id));
  w.contain(id, host.storey);
  const vals = lib ? {} : sizeValues(fam, { ...values, Width: W, Height: H });
  w.relateType(id, lib ? library.typeId : sizeTypeFor(w, fam, vals, { name: sizeName }));
  if (w._typeOf) w._typeOf = null;
  const op = { kind: type.kind, typeKey, family: lib ? '' : fam.key, values: vals, width: W, height: H, sill: S, hand: hand === 'b' ? 'b' : 'a', face: face === 'right' ? 'right' : 'left', offset: off, library: lib };
  op.instance = lib ? {} : instanceValues(fam, instance);
  writeOpening(w, { id, opening }, op, host);
  if (!lib) writeInstance(w, id, fam, op.instance);
  return { id, guid: g, opening: og };
}

/**
 * A Library door / window type → { typeId, kind, name, key (uuid@version), frame (ifc-place.js libraryFrame, mm) } | null.
 * Only a door or window type that carries its frame (CadCraft_OpeningFrame) can go in a wall.
 */
export function libraryOf(w, typeId) {
  if (!typeId) return null;
  let line;
  try { line = w.api.GetLine(w.mid, typeId, false); } catch (e) { return null; }
  const cls = String(line?.constructor?.name || '').toUpperCase();
  const kind = /^IFCDOOR(TYPE|STYLE)$/.test(cls) ? 'door' : /^IFCWINDOW(TYPE|STYLE)$/.test(cls) ? 'window' : null;
  const frame = kind ? typeFrame(w, typeId) : null;
  if (!frame) return null;
  const lp = w.typePsets(typeId)['CadCraft_LibraryItem']?.props || {};
  const key = lp.ItemUuid?.value ? lp.ItemUuid.value + '@' + (lp.ItemVersion?.value ?? '') : (lp.ItemSha256?.value ? 'sha:' + lp.ItemSha256.value : 'library');
  return { typeId, kind, name: val(line.Name) || (kind === 'door' ? 'Door' : 'Window'), key, frame };   // i18n-ignore: fallback names written into the file
}
/**
 * 2026-11-02: Library doors / windows standing on their own (placed before the wall, or the wall drawn or moved later) that now
 * sit in a straight wall of their level — their middle inside the wall's thickness, their width along it — are set into it: the
 * free element goes and a hosted one with the same GlobalId takes its place (addOpening). One that would not fit stays free.
 * → [GlobalIds of the walls that took one].
 */
export function adoptLibraryOpenings(w) {
  const R = w.hostIndex(), cands = [];
  for (const cls of ['IFCDOOR', 'IFCWINDOW']) {
    let list = [];
    try { list = ids(w.api, w.mid, cls); } catch (e) { continue; }
    for (const id of list) {
      if (R.filledBy.has(id)) continue;
      const lib = libraryOf(w, typeOf(w, id));
      if (lib) cands.push({ id, lib });
    }
  }
  if (!cands.length) return [];
  const walls = readWalls(w).filter((x) => !x.bulge), took = new Set();
  for (const { id, lib } of cands) {
    const line = w.api.GetLine(w.mid, id, false), elp = line.ObjectPlacement?.value;
    if (!elp) continue;
    const f = lib.frame;
    // the door's middle and its width / thickness axes in its own axes (mm): the frame turned back
    const back = (x, y) => (f.turn ? [-y, x] : [x, y]);   // inverse of (x, y) → (y, −x)
    const c = back(f.width / 2 - f.dx, -f.dy), cz = f.height / 2 - f.dz;
    const ux = back(1, 0), uy = back(0, 1);
    for (const wall of walls) {
      const M = w.relMatrix(wall.lp, elp);
      const P = (x, y, z) => [M[0] * x + M[4] * y + M[8] * z + M[12], M[1] * x + M[5] * y + M[9] * z + M[13], M[2] * x + M[6] * y + M[10] * z + M[14]];
      const D = (x, y) => [M[0] * x + M[4] * y, M[1] * x + M[5] * y];
      const m = P(c[0], c[1], cz), along = D(...ux), across = D(...uy);
      if (Math.abs(along[1]) > 0.02 || Math.abs(m[1]) > wall.t / 2 + 1 || m[0] < 0 || m[0] > wall.len) continue;   // across the wall, beside it or past its ends
      const hand = along[0] < 0 ? 'b' : 'a', face = across[1] < 0 ? 'right' : 'left';   // the same mirrors libraryBody makes
      const offset = m[0] - f.width / 2, sill = m[2] - f.height / 2 + wall.baseOffset;
      if (fitOffset(wall, f.width, offset) === null || Math.abs(fitOffset(wall, f.width, offset) - offset) > 1) continue;
      if ((lib.kind === 'door' ? 0 : sill) + f.height > wall.height + 1) continue;
      const guid = val(line.GlobalId), typeKey = libraryBase(lib.kind, f.width);
      w.dropProduct([id]);
      w._typeOf = null;
      addOpening(w, { wall: wall.guid, typeKey, offset, sill: lib.kind === 'door' ? 0 : sill, hand, face, guid, library: { typeId: lib.typeId } });
      took.add(wall.guid);
      break;
    }
  }
  return [...took];
}

/** The starter kind whose plan symbol a Library door / window takes: double doors from 48 in wide, else single; a fixed window. */
export function libraryBase(kind, width) {
  if (kind === 'window') return 'win-fixed';
  return width >= 48 * IN ? 'door-double' : 'door-single';
}
/**
 * The mapped body of a Library door / window in its opening: turned and moved by its frame, stretched where the Library allows it
 * (x: to the opening's width, z: to its height, y: to the wall's thickness), mirrored for its hand and face.
 */
function libraryBody(w, op, host) {
  const f = op.library.frame, hb = op.hand === 'b', fr = op.face === 'right', st = f.stretch || [];
  const sx = hb ? -1 : 1, sy = fr ? -1 : 1;
  const kx = st.includes('x') ? op.width / f.width : 1, kz = st.includes('z') ? op.height / f.height : 1;
  const ky = st.includes('y') && f.depth > 0 && host?.t > 0 ? host.t / f.depth : 1;
  const e1 = f.turn ? [0, -1] : [1, 0], e2 = f.turn ? [1, 0] : [0, 1];   // the turn (x, y) → (y, −x)
  const z0 = (v) => (Object.is(v, -0) ? 0 : v);
  const a1 = w.dir(z0(sx * e1[0]), z0(sy * e1[1]), 0), a2 = w.dir(z0(sx * e2[0]), z0(sy * e2[1]), 0), a3 = w.dir(0, 0, 1);
  const o = w.point3(round(w.u(sx * kx * f.dx + (hb ? op.width : 0))), round(w.u(sy * ky * f.dy)), round(w.u(kz * f.dz)));
  // the scales go with the type's own axes: its X becomes the opening's width unless the frame turned it (then its Y does)
  const s1 = f.turn ? ky : kx, s2 = f.turn ? kx : ky, r6 = (v) => Math.round(v * 1e6) / 1e6;
  const opr = kx === 1 && ky === 1 && kz === 1
    ? w.make('IFCCARTESIANTRANSFORMATIONOPERATOR3D', w.H(a1), w.H(a2), w.H(o), null, w.H(a3))
    : w.make('IFCCARTESIANTRANSFORMATIONOPERATOR3DNONUNIFORM', w.H(a1), w.H(a2), w.H(o), r6(s1), w.H(a3), r6(s2), r6(kz));
  const items = [];
  const t = w.api.GetLine(w.mid, op.library.typeId, false);
  for (const h of t.RepresentationMaps || []) {
    const m = w.api.GetLine(w.mid, h.value, false), rep = m?.MappedRepresentation ? w.api.GetLine(w.mid, m.MappedRepresentation.value, false) : null;
    if (val(rep?.RepresentationIdentifier) === 'Body') items.push(w.make('IFCMAPPEDITEM', w.H(h.value), w.H(opr)));
  }
  if (!items.length) throw Object.assign(new Error('model.err.libopening'), { key: 'model.err.libopening' });
  return items;
}

/** The next free mark for a door ("D1", "D2" …) or a window ("W1" …): one more than the highest of that letter in the file. */
export function nextMark(w, door) {
  const letter = door ? 'D' : 'W';   // i18n-ignore: door and window marks written into the file (as on drawings)
  let hi = 0;
  for (const id of ids(w.api, w.mid, door ? 'IFCDOOR' : 'IFCWINDOW')) {
    const m = String(val(w.api.GetLine(w.mid, id, false)?.Tag) || '').match(/^([A-Z])(\d+)$/);
    if (m && m[1] === letter) hi = Math.max(hi, Number(m[2]));
  }
  return letter + (hi + 1);
}

/** Shapes, psets and quantities of a door / window and its opening, from its parameters and the host wall. */
function writeOpening(w, { id, opening }, op, host) {
  const type = openingType(op.typeKey) || (op.kind === 'door' ? DOOR_TYPES[0] : WINDOW_TYPES[0]);
  const t = host.t;
  const cut = openingCut(host, op, PROUD);   // a curved wall: jambs along the radius
  w.setShape(opening, [w.rep('body', 'Body', 'SweptSolid', [cut ? w.extrude(w.profile(cut), 0, op.height) : w.box(0, -t / 2 - PROUD, 0, op.width, t / 2 + PROUD, op.height)])]);
  // the family's solids for this size and this wall (a starter kind's recipe is doorParts / windowParts, box for box);
  // a Library door / window: its own mesh, mapped from its type (2026-11-02)
  const fam = op.library ? null : openingFamily(w, op.family || op.typeKey, type);
  if (op.library) w.setShape(id, [w.rep('body', 'Body', 'MappedRepresentation', libraryBody(w, op, host))]);
  else {
    const ev = evaluateFamily(fam, { ...(op.values || {}), ...(op.instance || {}), Width: op.width, Height: op.height }, { wallThickness: t, face: op.face === 'right' ? -1 : 1, ...evalCtx(w) });
    if (!ev.ok) throw Object.assign(new Error(ev.error.key), { key: ev.error.key, fill: ev.error.fill });
    const body = bodyItems(w, ev);
    w.setShape(id, [w.rep('body', 'Body', body.type, body.items)]);
  }
  const door = op.kind === 'door';
  const external = !!w.readPset(host.id, 'Pset_WallCommon')?.IsExternal;
  w.upsertPset(id, door ? DOOR_PSET : WINDOW_PSET, [['TypeKey', 'IFCIDENTIFIER', op.typeKey], ['Family', 'IFCIDENTIFIER', fam ? fam.key : ''], ...(op.library ? [['Library', 'IFCIDENTIFIER', op.library.key]] : []), ['Width', 'IFCPOSITIVELENGTHMEASURE', round(w.u(op.width))], ['Height', 'IFCPOSITIVELENGTHMEASURE', round(w.u(op.height))],
    ['Sill', 'IFCLENGTHMEASURE', round(w.u(op.sill))], ['Hand', 'IFCLABEL', op.hand], ['Face', 'IFCLABEL', op.face]]);
  w.upsertPset(id, door ? 'Pset_DoorCommon' : 'Pset_WindowCommon', [['Reference', 'IFCIDENTIFIER', fam ? fam.name : op.library.name], ['IsExternal', 'IFCBOOLEAN', external]]);
  w.upsertQto(id, door ? 'Qto_DoorBaseQuantities' : 'Qto_WindowBaseQuantities', [['Width', 'length', op.width], ['Height', 'length', op.height], ['Area', 'area', op.width * op.height]]);
  w.upsertPset(opening, OPENING_PSET, [['Width', 'IFCPOSITIVELENGTHMEASURE', round(w.u(op.width))], ['Height', 'IFCPOSITIVELENGTHMEASURE', round(w.u(op.height))]]);
  // the element's own size attributes follow
  const l = w.touch(id);
  l.OverallWidth = round(w.u(op.width)); l.OverallHeight = round(w.u(op.height));
  if (door && w.v4) l.OperationType = type.op[op.hand === 'b' ? 1 : 0];
  w.write(l);
}
/** A door's boxes in the opening's axes (x along, y across the wall, z up): frame, then leaves (closed) or panels. */
export function doorParts(type, op, t) {
  const W = op.width, H = op.height, f = Math.min(FRAME, W / 6), out = [];
  const box = (x0, y0, z0, x1, y1, z1, style) => out.push({ box: [x0, y0, z0, x1, y1, z1], style });
  const y0 = -t / 2, y1 = t / 2;
  box(0, y0, 0, f, y1, H, 'frame'); box(W - f, y0, 0, W, y1, H, 'frame'); box(f, y0, H - f, W - f, y1, H, 'frame');
  const s = op.face === 'right' ? -1 : 1;   // leaves sit at the face they swing to
  const ly0 = s > 0 ? y1 - LEAF : y0, ly1 = s > 0 ? y1 : y0 + LEAF;
  const inner = W - 2 * f, top = H - f;
  if (type.garage) box(f, -LEAF / 2, 0, W - f, LEAF / 2, top, 'garage');
  else if (type.slide) {
    const half = inner / 2 + 25;
    box(f, -LEAF, 0, f + half, 0, top, 'glass'); box(W - f - half, 0, 0, W - f, LEAF, top, 'glass');
    box(f, -LEAF, 0, f + 40, 0, top, 'leaf'); box(W - f - 40, 0, 0, W - f, LEAF, top, 'leaf');
  } else if (type.pocket) box(f, -LEAF / 2, 0, W - f, LEAF / 2, top, 'leaf');
  else if (type.bifold) box(f, -LEAF / 2, 0, W - f, LEAF / 2, top, 'leaf');   // folded shut in 3D
  else if (type.barn) {
    // a slab hung on the wall face, a little wider than the opening, under its track
    const yb = s > 0 ? y1 : y0 - LEAF, yt = s > 0 ? y1 + LEAF : y0;
    box(-50, yb, 0, W + 50, yt, H + 25, 'leaf');
    box(-50, s > 0 ? yt : yb - 25, H + 40, 2 * W, s > 0 ? yt + 25 : yb, H + 80, 'frame');
  } else if (type.sidelites) {
    const sl = Math.min(type.sidelites, W / 4);
    box(f, -GLASS / 2, 0, f + sl, GLASS / 2, top, 'glass'); box(W - f - sl, -GLASS / 2, 0, W - f, GLASS / 2, top, 'glass');
    box(f + sl, y0, 0, f + sl + f, y1, top, 'frame'); box(W - f - sl - f, y0, 0, W - f - sl, y1, top, 'frame');
    box(f + sl + f, ly0, 0, W - f - sl - f, ly1, top - 3, 'leaf');
  } else if (type.leaves === 2) {
    if (type.glazed) {
      // glass in a rail-and-stile frame on each leaf
      for (const [a, b] of [[f, f + inner / 2 - 2], [f + inner / 2 + 2, W - f]]) {
        const st = 100;
        box(a, ly0, 0, a + st, ly1, top - 3, 'leaf'); box(b - st, ly0, 0, b, ly1, top - 3, 'leaf');
        box(a + st, ly0, 0, b - st, ly1, 200, 'leaf'); box(a + st, ly0, top - 3 - st, b - st, ly1, top - 3, 'leaf');
        box(a + st, (ly0 + ly1) / 2 - GLASS / 2, 200, b - st, (ly0 + ly1) / 2 + GLASS / 2, top - 3 - st, 'glass');
      }
    } else { box(f, ly0, 0, f + inner / 2 - 2, ly1, top - 3, 'leaf'); box(f + inner / 2 + 2, ly0, 0, W - f, ly1, top - 3, 'leaf'); }
  } else box(f, ly0, 0, W - f, ly1, top - 3, 'leaf');
  return out;
}
/** A window's boxes: frame (at the face it sits on), sashes' rails and stiles, glass. */
export function windowParts(type, op, t) {
  const W = op.width, H = op.height, f = Math.min(WFRAME, W / 6, H / 6), out = [];
  const box = (x0, y0, z0, x1, y1, z1, style) => out.push({ box: [x0, y0, z0, x1, y1, z1], style });
  const d = Math.min(WDEPTH, t), s = op.face === 'right' ? -1 : 1;
  const y0 = s > 0 ? t / 2 - d : -t / 2, y1 = y0 + d;
  box(0, y0, 0, f, y1, H, 'frame'); box(W - f, y0, 0, W, y1, H, 'frame');
  box(f, y0, 0, W - f, y1, f, 'frame'); box(f, y0, H - f, W - f, y1, H, 'frame');
  const gy = (y0 + y1) / 2;
  if (type.rail) { const m = H / 2; box(f, y0 + d * 0.15, m - f / 2, W - f, y1 - d * 0.15, m + f / 2, 'frame'); }
  if (type.stile) { const m = W / 2; box(m - f / 2, y0 + d * 0.15, f, m + f / 2, y1 - d * 0.15, H - f, 'frame'); }
  box(f, gy - GLASS / 2, f, W - f, gy + GLASS / 2, H - f, 'glass');
  if (type.well) {
    const { x0, x1, near, far, bottom, top, gauge } = windowWell(op, t);
    const Y = (v) => s * v;
    const wall = (a, b, c, d) => box(a, Math.min(Y(b), Y(d)), bottom, c, Math.max(Y(b), Y(d)), top, 'frame');
    wall(x0 - gauge, near, x0, far + gauge);
    wall(x1, near, x1 + gauge, far + gauge);
    wall(x0, far, x1, far + gauge);
  }
  return out;
}

/** A starter well, not a code-compliance check: clear width >= 48 inches and 36 inches projection. */
export function windowWell(op, thickness) {
  const width = Math.max(48 * IN, op.width + 12 * IN);
  return { x0: (op.width - width) / 2, x1: (op.width + width) / 2, near: thickness / 2, far: thickness / 2 + 36 * IN, bottom: -6 * IN, top: op.height, gauge: IN };
}

export function updateOpening(w, guid, ch = {}) {
  const walls = readWalls(w);
  const all = readOpenings(w, null, walls);
  const cur = all.find((x) => x.guid === guid);
  if (!cur) throw Object.assign(new Error('model.err.noopening'), { key: 'model.err.noopening' });
  let host = walls.find((x) => x.id === cur.wall);
  const touched = new Set([host.guid]);
  const op = { ...cur };
  for (const k of ['width', 'height', 'sill']) if (Number.isFinite(ch[k]) && ch[k] >= 0) op[k] = ch[k];
  if (cur.library) {   // a Library door / window keeps its own size along any axis the Library does not let it be stretched
    const st = cur.library.frame.stretch || [];
    if (!st.includes('x')) op.width = cur.width;
    if (!st.includes('z')) op.height = cur.height;
    ch = { ...ch, family: undefined, values: undefined };
  }
  if (op.kind === 'door') op.sill = cur.sill;   // a door keeps its floor (0, or an upper level's on a through wall)
  if (ch.typeKey && openingType(ch.typeKey)?.kind === op.kind) { op.typeKey = ch.typeKey; if (!cur.library) { op.family = ch.typeKey; op.values = {}; } }
  if (ch.family) {
    const f = familyFor(w, ch.family);
    if (f && f.host === 'wall' && openingType(f.base)?.kind === op.kind) { op.family = f.key; op.typeKey = f.base; if (!ch.values) op.values = {}; if (!(ch.width > 0)) op.width = sizeValues(f, ch.values || {}).Width; if (!(ch.height > 0)) op.height = sizeValues(f, ch.values || {}).Height; }
  }
  if (ch.values && typeof ch.values === 'object') { op.values = { ...op.values, ...ch.values }; if (Number.isFinite(ch.values.Width) && !(ch.width > 0)) op.width = ch.values.Width; if (Number.isFinite(ch.values.Height) && !(ch.height > 0)) op.height = ch.values.Height; }
  if (ch.hand === 'a' || ch.hand === 'b') op.hand = ch.hand;
  if (ch.face === 'left' || ch.face === 'right') op.face = ch.face;
  if (!(op.width >= 100 && op.height >= 100)) throw Object.assign(new Error('model.err.small'), { key: 'model.err.small' });
  // another wall: the opening is related to it, placed relative to it
  if (ch.wall && ch.wall !== host.guid) {
    const to = walls.find((x) => x.guid === ch.wall);
    if (!to) throw Object.assign(new Error('model.err.nowall'), { key: 'model.err.nowall' });
    for (const rid of ids(w.api, w.mid, 'IFCRELVOIDSELEMENT')) {
      const r = w.api.GetLine(w.mid, rid, false);
      if (r.RelatedOpeningElement?.value !== cur.openingId) continue;
      const l = w.touch(rid); l.RelatingBuildingElement = w.H(to.id); w.write(l);
    }
    const pl = w.touch(w.api.GetLine(w.mid, cur.openingId, false).ObjectPlacement.value);
    pl.PlacementRelTo = w.H(to.lp); w.write(pl);
    if (to.storey !== host.storey) { moveContainment(w, cur.id, to.storey); }
    host = to; touched.add(to.guid);
  }
  if (op.kind === 'door') op.sill = doorSill(w, host, op.sill);
  const off = fitOffset(host, op.width, Number.isFinite(ch.offset) ? ch.offset : op.offset);
  if (off === null) throw Object.assign(new Error('model.err.nofit'), { key: 'model.err.nofit' });
  if (op.sill + op.height > host.height + 1) throw Object.assign(new Error('model.err.tootall'), { key: 'model.err.tootall' });
  op.offset = off;
  const olp = w.api.GetLine(w.mid, cur.openingId, false).ObjectPlacement.value;
  const hf = hostFrame(host, off, op.width);
  w.movePlacement(olp, hf.x, hf.y, op.sill - host.baseOffset, hf.ang);
  if (cur.library) { writeOpening(w, { id: cur.id, opening: cur.openingId }, op, host); return { walls: [...touched] }; }   // its own type and name stay
  // its size: the family's type for these values (found, else made); the element moves to it when it is another one
  const fam = openingFamily(w, op.family || op.typeKey, openingType(op.typeKey));
  op.family = fam.key;
  op.values = sizeValues(fam, { ...op.values, Width: op.width, Height: op.height });
  const tid = sizeTypeFor(w, fam, op.values, { name: ch.sizeName || null });
  if (tid !== cur.typeId) retype(w, cur.id, tid);
  if (fam.key !== cur.family || op.typeKey !== cur.typeKey) { const nm = w.L(fam.name); const l = w.touch(cur.id); l.Name = nm; l.ObjectType = nm; w.write(l); }
  op.instance = instanceValues(fam, { ...(cur.instance || {}), ...(ch.instance || {}) });
  writeOpening(w, { id: cur.id, opening: cur.openingId }, op, host);
  writeInstance(w, cur.id, fam, op.instance);
  return { walls: [...touched] };
}
function moveContainment(w, id, storey) {
  for (const rid of ids(w.api, w.mid, 'IFCRELCONTAINEDINSPATIALSTRUCTURE')) {
    const r = w.api.GetLine(w.mid, rid, false);
    if (!(r.RelatedElements || []).some((h) => h.value === id)) continue;
    const rest = r.RelatedElements.filter((h) => h.value !== id);
    const l = w.touch(rid);
    if (rest.length) { l.RelatedElements = rest; w.write(l); } else dropRel(w, rid);
  }
  w.contain(id, storey);
}

export function deleteOpenings(w, guids) {
  const all = readOpenings(w);
  const list = [], walls = new Set();
  for (const g of guids) {
    const o = all.find((x) => x.guid === g);
    if (!o) continue;
    list.push(o.id, o.openingId);
    walls.add(o.wallGuid);
  }
  if (list.length) w.dropProduct(list);
  return { walls: [...walls] };
}

/** After a wall's thickness (or type) changed: every opening it hosts made again for the new thickness. */
export function regenOpenings(w, wall, all = null) {
  const list = (all || readOpenings(w)).filter((o) => o.wall === wall.id);
  for (const o of list) writeOpening(w, { id: o.id, opening: o.openingId }, o, wall);
  return list.length;
}

/** Hosted openings follow a wall whose start moved along its own line: offsets keep their place in the world. */
export function keepPlaceOnMove(w, wallBefore, aAfter) {
  const L = Math.hypot(wallBefore.b[0] - wallBefore.a[0], wallBefore.b[1] - wallBefore.a[1]) || 1;
  const u = [(wallBefore.b[0] - wallBefore.a[0]) / L, (wallBefore.b[1] - wallBefore.a[1]) / L];
  return (aAfter[0] - wallBefore.a[0]) * u[0] + (aAfter[1] - wallBefore.a[1]) * u[1];
}

// ---------------------------------------------------------------------------------------------------------------- plan symbols
/**
 * The plan symbol of a door or window in `wall` (plan points a → b, thickness t): lines (heavy), arcs and thin lines (swing),
 * dashed (what is overhead or inside the wall), poly (the area a click picks). Plan millimetres.
 */
export function openingSymbol(op, wall) {
  const type = openingType(op.typeKey) || (op.kind === 'door' ? DOOR_TYPES[0] : WINDOW_TYPES[0]);
  const L = Math.hypot(wall.b[0] - wall.a[0], wall.b[1] - wall.a[1]) || 1;
  const u = [(wall.b[0] - wall.a[0]) / L, (wall.b[1] - wall.a[1]) / L], n = [-u[1], u[0]];
  const P = wall.bulge ? wallGeom(wall).at : (x, y) => [wall.a[0] + u[0] * x + n[0] * y, wall.a[1] + u[1] * x + n[1] * y];   // a curved wall: along its arc
  const seg = (p, q) => [p[0], p[1], q[0], q[1]];
  const t = wall.t, s = op.face === 'right' ? -1 : 1, x0 = op.offset, x1 = op.offset + op.width, W = op.width;
  const out = { lines: [], arcs: [], thin: [], dashed: [], poly: [P(x0, -t / 2), P(x1, -t / 2), P(x1, t / 2), P(x0, t / 2)] };
  // jambs across the wall at both ends of the opening
  out.lines.push(seg(P(x0, -t / 2), P(x0, t / 2)), seg(P(x1, -t / 2), P(x1, t / 2)));
  const ang = (v) => Math.atan2(v[1], v[0]);
  if (op.kind === 'door') {
    const f = Math.min(FRAME, W / 6), face = s * t / 2;
    if (type.garage) {
      out.dashed.push(seg(P(x0, 0), P(x1, 0)));
      out.thin.push(seg(P(x0 + f, face), P(x1 - f, face)));
    } else if (type.slide) {
      const half = (W - 2 * f) / 2 + 25;
      out.lines.push(seg(P(x0 + f, -LEAF / 2), P(x0 + f + half, -LEAF / 2)), seg(P(x1 - f - half, LEAF / 2), P(x1 - f, LEAF / 2)));
      out.thin.push(seg(P(x0 + f, -LEAF), P(x0 + f + half, -LEAF)), seg(P(x1 - f - half, LEAF), P(x1 - f, LEAF)));
    } else if (type.pocket) {
      const into = op.hand === 'b' ? [x1 - f, x1 + W - 2 * f] : [x0 + f - (W - 2 * f), x0 + f];
      out.lines.push(seg(P(x0 + f, 0), P(x1 - f, 0)));
      out.dashed.push(seg(P(into[0], 0), P(into[1], 0)));
    } else if (type.bifold) {
      // two panels from each jamb, folded out at 30° toward the face it opens to (a closet bifold)
      const pw = (W - 2 * f) / 4, a = Math.PI / 6;
      for (const [hx, dir] of [[x0 + f, 1], [x1 - f, -1]]) {
        const p0 = P(hx, face), p1 = P(hx + dir * pw * Math.cos(a), face + s * pw * Math.sin(a)), p2 = P(hx + dir * 2 * pw * Math.cos(a), face);
        out.lines.push(seg(p0, p1), seg(p1, p2));
      }
      out.poly = [P(x0, -s * t / 2), P(x1, -s * t / 2), P(x1, face + s * pw), P(x0, face + s * pw)];
    } else if (type.barn) {
      // the slab on the wall face, slid open along the wall (dashed: where it goes)
      const yb = face + s * LEAF;
      out.lines.push(seg(P(x0 - 50, yb), P(x1 + 50, yb)));
      const into = op.hand === 'b' ? [x0 - W, x0 - 50] : [x1 + 50, x1 + W];
      out.dashed.push(seg(P(into[0], yb), P(into[1], yb)));
    } else if (type.sidelites) {
      const sl = Math.min(type.sidelites, W / 4), d0 = x0 + f + sl + f, d1 = x1 - f - sl - f, r = d1 - d0;
      out.thin.push(seg(P(x0 + f, 0), P(x0 + f + sl, 0)), seg(P(x1 - f - sl, 0), P(x1 - f, 0)));
      out.lines.push(seg(P(x0 + f + sl, -t / 2), P(x0 + f + sl, t / 2)), seg(P(x1 - f - sl, -t / 2), P(x1 - f - sl, t / 2)));
      const hx = op.hand === 'b' ? d1 : d0, dir = op.hand === 'b' ? -1 : 1;
      const H = P(hx, face), open = P(hx, face + s * r), shut = P(hx + dir * r, face);
      out.lines.push(seg(H, open));
      const a0 = ang([open[0] - H[0], open[1] - H[1]]), a1 = ang([shut[0] - H[0], shut[1] - H[1]]);
      let d = a1 - a0; while (d > Math.PI) d -= 2 * Math.PI; while (d < -Math.PI) d += 2 * Math.PI;
      out.arcs.push({ c: H, r, a0, a1: a0 + d });
      out.poly = [P(x0, -s * t / 2), P(x1, -s * t / 2), P(x1, face + s * r), P(x0, face + s * r)];
    } else {
      const leaves = type.leaves === 2 ? [[x0 + f, 1, (W - 2 * f) / 2], [x1 - f, -1, (W - 2 * f) / 2]] : [[op.hand === 'b' ? x1 - f : x0 + f, op.hand === 'b' ? -1 : 1, W - 2 * f]];
      for (const [hx, dir, r] of leaves) {
        const H = P(hx, face), open = P(hx, face + s * r), shut = P(hx + dir * r, face);
        out.lines.push(seg(H, open));
        const a0 = ang([open[0] - H[0], open[1] - H[1]]), a1 = ang([shut[0] - H[0], shut[1] - H[1]]);
        // the short way round from the open leaf to the closed position
        let d = a1 - a0; while (d > Math.PI) d -= 2 * Math.PI; while (d < -Math.PI) d += 2 * Math.PI;
        out.arcs.push({ c: H, r, a0, a1: a0 + d });
      }
      // the swing area picks too
      const ext = P(x0, face + s * (type.leaves === 2 ? (W - 2 * f) / 2 : W - 2 * f)), ext2 = P(x1, face + s * (type.leaves === 2 ? (W - 2 * f) / 2 : W - 2 * f));
      out.poly = [P(x0, -s * t / 2), P(x1, -s * t / 2), ext2, ext];
    }
  } else {
    // a window: the frame line on its face, the glass line in the middle (two for sashes that pass), the sill on the other face
    const d = Math.min(WDEPTH, t), yf = s > 0 ? t / 2 - d : -t / 2, yb = yf + d, gy = (yf + yb) / 2;
    out.lines.push(seg(P(x0, yf), P(x1, yf)), seg(P(x0, yb), P(x1, yb)));
    if (type.stile) out.thin.push(seg(P(x0, gy - 8), P(x0 + W / 2 + 10, gy - 8)), seg(P(x1 - W / 2 - 10, gy + 8), P(x1, gy + 8)));
    else if (type.rail) out.thin.push(seg(P(x0, gy - 8), P(x1, gy - 8)), seg(P(x0, gy + 8), P(x1, gy + 8)));
    else out.thin.push(seg(P(x0, gy), P(x1, gy)));
    if (type.casement) {
      const hx = op.hand === 'b' ? x1 : x0, dir = op.hand === 'b' ? -1 : 1, r = W, face = s * t / 2;
      const H = P(hx, face), open = P(hx + dir * r * Math.cos(Math.PI / 6), face + s * r * Math.sin(Math.PI / 6));
      out.thin.push(seg(H, open));
    }
  }
  if (type.well) {
    const well = windowWell(op, t), a = P(x0 + well.x0, s * well.near), b = P(x0 + well.x0, s * well.far), c = P(x0 + well.x1, s * well.far), d = P(x0 + well.x1, s * well.near);
    out.dashed.push(seg(a, b), seg(b, c), seg(c, d));
  }
  return out;
}

/** Delete a relationship line alone (never what it points at), journaled. */
function dropRel(w, rid) { w.touch(rid); deleteLine(w.api, w.mid, rid); }
