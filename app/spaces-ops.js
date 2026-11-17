/* SPDX-License-Identifier: Apache-2.0 */
/**
 * spaces-ops.js — the room, area, opening and group tools as ops for IfcEditor.modelChange (0.10, session bk-tools-a-10): each is
 * ONE undo step, and a redo makes the same GlobalIds. No DOM. The writers are room-bounds.js, slab-openings.js, model-groups.js;
 * what follows a change (areas measured, tags moved, floors cut, group instances kept alike) is spaces-sync.js, run by op() itself.
 *
 *   drawBounds({ storey (GlobalId), kind 'room' | 'area', scheme, lines: [{ a, b, wall, face }] })   separators / area boundaries
 *   moveBound(guid, { a, b }) · removeBounds([guid…])
 *   nameRoom(guid, { name, number })                               the room the walls made (model-slabs.js updateDerived)
 *   placeArea({ storey, scheme, seed, name, number, type }) · changeAreaOp(guid, { name, number, type }) · removeAreas([guid…])
 *   placeTags([{ target, offset, paper }]) · moveTag(guid, { offset, paper }) · removeTags([guid…])
 *   placeShaft(spec) · changeShaftOp(guid, changes) · removeShaftsOp([guid…])          (shafts and vertical openings)
 *   groupOp({ name, members }) · renameGroupOp · ungroupOp([guid…]) · addToGroupOp · placeInstanceOp({ group, dx, dy }) · removeGroupsOp
 */
import { op, settleFor } from './model-ops.js';
import { val } from './ifc-util.js';
import { syncDerived, updateDerived } from './model-slabs.js';
import { readBounds, addBound, changeBound, addArea, changeArea, readAreas, addTag, changeTag, readTags, targetsOf } from './room-bounds.js';
import { addShaft, changeShaft, removeShafts } from './slab-openings.js';
import { makeGroup, renameGroup, ungroup, addToGroup, placeInstance, removeGroups } from './model-groups.js';

const refuse = (key) => { throw Object.assign(new Error(key), { key }); };
const storeyId = (w, guid) => { const id = w.byGuid(guid); if (!id) refuse('model.err.nolevel'); return id; };

export function drawBounds({ storey, kind = 'room', scheme = 'gross', lines = [] }) {
  const list = lines.map((l) => ({ a: [l.a[0], l.a[1]], b: [l.b[0], l.b[1]], wall: l.wall || '', face: l.face || 'centre', guid: null }));
  return op((w) => {
    const st = storeyId(w, storey), made = new Map(), ids = [];
    for (const l of list) { if (!l.guid) l.guid = val(w.guid()); const r = addBound(w, { storey: st, kind, scheme, ...l }); made.set(r.guid, r.id); ids.push(r.id); }
    if (kind === 'room') syncDerived(w, st);   // the rooms on both sides of a separator
    return { id: ids[0] ?? null, ids, made };
  });
}
export function moveBound(guid, ch) {
  return op((w) => { const x = changeBound(w, guid, ch); if (x.kind === 'room' && x.storey !== null) syncDerived(w, x.storey); return { id: x.id, ids: [x.id] }; });
}
export function removeBounds(guids) {
  return op((w) => {
    const list = readBounds(w).filter((b) => guids.includes(b.guid));
    if (list.length) w.dropProduct(list.map((b) => b.id));
    for (const st of new Set(list.filter((b) => b.kind === 'room' && b.storey !== null).map((b) => b.storey))) syncDerived(w, st);
    return { id: null, ids: [] };
  });
}
export function nameRoom(guid, ch) {
  return op((w) => { updateDerived(w, guid, ch); const id = w.byGuid(guid); return { id, ids: id ? [id] : [] }; });
}

export function placeArea(spec) {
  const s = { ...spec, guid: null };
  return op((w) => {
    if (!s.guid) s.guid = val(w.guid());
    const r = addArea(w, { ...s, storey: storeyId(w, s.storey) });
    return { id: r.id, ids: [r.id], made: new Map([[r.guid, r.id]]), enclosed: r.enclosed };
  });
}
export function changeAreaOp(guid, ch) { return op((w) => { const x = changeArea(w, guid, ch); return { id: x.id, ids: [x.id] }; }); }
export function removeAreas(guids) {
  return op((w) => { const list = readAreas(w).filter((a) => guids.includes(a.guid)); if (list.length) w.dropProduct(list.map((a) => a.id)); return { id: null, ids: [] }; });
}

export function placeTags(specs) {
  const list = specs.map((s) => ({ target: s.target, offset: s.offset || [0, 0], paper: s.paper, guid: null }));
  return op((w) => {
    const T = targetsOf(w), made = new Map(), ids = [];
    for (const s of list) { if (!T.has(s.target)) continue; if (!s.guid) s.guid = val(w.guid()); const r = addTag(w, s, T); made.set(r.guid, r.id); ids.push(r.id); }
    return { id: ids[0] ?? null, ids, made };
  });
}
export function moveTag(guid, ch) { return op((w) => { const x = changeTag(w, guid, ch); return { id: x.id, ids: [x.id] }; }); }
export function removeTags(guids) {
  return op((w) => { const list = readTags(w).filter((x) => guids.includes(x.guid)); if (list.length) w.dropProduct(list.map((x) => x.id)); return { id: null, ids: [] }; });
}

export function placeShaft(spec) {
  const s = { ...spec, points: spec.points.map((q) => [q[0], q[1]]), guid: null };
  return op((w) => { if (!s.guid) s.guid = val(w.guid()); const r = addShaft(w, s); return { id: r.id, ids: [r.id], made: new Map([[r.guid, r.id]]) }; });
}
export function changeShaftOp(guid, ch) { return op((w) => { const s = changeShaft(w, guid, ch); return { id: s.id, ids: [s.id] }; }); }
export function removeShaftsOp(guids) { return op((w) => { removeShafts(w, guids); return { id: null, ids: [] }; }); }

export function groupOp(spec) {
  const s = { ...spec, guid: null };
  return op((w) => { if (!s.guid) s.guid = val(w.guid()); const r = makeGroup(w, s); return { id: r.id, ids: [r.id], made: new Map([[r.guid, r.id]]) }; });
}
export function renameGroupOp(guid, name) { return op((w) => { const g = renameGroup(w, guid, name); return { id: g.id, ids: [g.id] }; }); }
export function ungroupOp(guids) { return op((w) => { ungroup(w, guids); return { id: null, ids: [] }; }); }
export function addToGroupOp(guid, members) { return op((w) => { const g = addToGroup(w, guid, members); return { id: g.id, ids: [g.id] }; }); }
export function placeInstanceOp(spec) {
  const gids = new Map();
  return op((w) => {
    const r = placeInstance(w, { ...spec, gids });
    settleFor(w, r.storeys);
    return { id: r.id, ids: [r.id, ...r.ids], made: new Map([[r.guid, r.id]]) };
  });
}
export function removeGroupsOp(guids) {
  return op((w) => { const storeys = removeGroups(w, guids); settleFor(w, storeys); return { id: null, ids: [] }; });
}
