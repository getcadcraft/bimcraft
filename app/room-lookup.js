/* SPDX-License-Identifier: Apache-2.0 */
/**
 * room-lookup.js — which room a placed thing stands in (0.10 booklet row BK.22, session bk-r3-types-10). No DOM:
 * bin/test-bimcraft.mjs --eltypes runs it in Node.
 *
 * ONE function for every placed symbol, device and asset: roomIndex(...).of(storey, point). Anything that wants "the room of this
 * thing" calls it (schedules, tags, Properties, the assistant); nobody works out point-in-room again.
 *
 *   roomIndex(spaces, loopsFor) → { of(storey, [x, y]) → room | null }
 *        spaces: model-slabs.js readDerived(w).spaces (or a snapshot's derived.spaces); loopsFor(storey) → { rooms } (model-slabs.js
 *        storeyLoops / model-ops.js loopsOf). room = { id, guid, number, name, label }. A point in no room (outside, inside a wall,
 *        in a room that was never made a space) → null. Read once per level and kept.
 *   roomLabel(room)                 '101 Kitchen' ('' for none): number then name, as a schedule cell says it
 *   intoRoom(at, angle, by = 60)    a point `by` mm in front of a thing that sits ON a wall face (a switch): its own point is on the
 *                                   room's edge, the room is the one it faces
 *   placedSources()                 the registry of placed things: Map(name → (w) → [{ id, storey, at: [x, y] mm, angle? (radians), onWall? }])
 *        res-elec.js (devices), plan-symbols.js (plan symbols) and asset-symbol.js (assets linked to a symbol) add themselves.
 *   syncPlacedRooms(w) → n          writes the room of every registered placed thing into the file, in its own property set
 *        CadCraft_Location: Room ('101 Kitchen'), RoomNumber, RoomName, RoomGuid; '' when it stands in no room. Only what changed
 *        is written; a thing that was never in a room gets no set. Called at the end of every change (model-ops.js op, and the ops
 *        of the placed things themselves), so the file, the schedules, Find and tag schedules (field p:CadCraft_Location.Room) are
 *        up to date after a wall moves, a room is renamed or the thing is moved.
 *   readLocation(w, id) → { room, number, name, guid } | null     what the file holds for one element
 */
import { loopAt } from './model-rooms.js';
import { storeyLoops, readDerived } from './model-slabs.js';

export const LOCATION_PSET = 'CadCraft_Location';

export const roomLabel = (room) => (room ? [room.number, room.name].map((s) => String(s || '').trim()).filter(Boolean).join(' ') : '');
export const intoRoom = (at, angle, by = 60) => [at[0] + Math.cos(angle) * by, at[1] + Math.sin(angle) * by];

export function roomIndex(spaces, loopsFor) {
  const per = new Map();
  const level = (storey) => {
    if (per.has(storey)) return per.get(storey);
    let rooms = [];
    try { rooms = loopsFor(storey)?.rooms || []; } catch (e) { rooms = []; }
    const by = new Map();
    for (const sp of spaces || []) {
      if (sp.storey !== storey) continue;
      const loop = loopAt(rooms, sp.seed);
      if (loop && !by.has(loop)) by.set(loop, { id: sp.id, guid: sp.guid, number: sp.number || '', name: sp.name || '', label: roomLabel(sp) });
    }
    const L = { rooms, by };
    per.set(storey, L);
    return L;
  };
  return {
    of(storey, p) {
      if (storey === null || storey === undefined || !Array.isArray(p) || !p.every(Number.isFinite)) return null;
      const L = level(storey), loop = loopAt(L.rooms, p);
      return (loop && L.by.get(loop)) || null;
    },
  };
}

/** The registry lives on the function (not in a module variable): modules that add themselves may run before this one has. */
export function placedSources() { return (placedSources.map ||= new Map()); }

export function readLocation(w, id) {
  const ps = w.readPset(id, LOCATION_PSET);
  return ps ? { room: String(ps.Room || ''), number: String(ps.RoomNumber || ''), name: String(ps.RoomName || ''), guid: String(ps.RoomGuid || '') } : null;
}

export function syncPlacedRooms(w) {
  const items = [];
  for (const fn of placedSources().values()) { try { items.push(...(fn(w) || [])); } catch (e) { /* a source that cannot read this file adds nothing */ } }
  if (!items.length) return 0;
  const ix = roomIndex(readDerived(w).spaces, (st) => storeyLoops(w, st));
  let n = 0;
  for (const it of items) {
    const room = ix.of(it.storey, it.onWall && Number.isFinite(it.angle) ? intoRoom(it.at, it.angle) : it.at);
    const have = readLocation(w, it.id);
    if (!have && !room) continue;
    const next = { room: roomLabel(room), number: room?.number || '', name: room?.name || '', guid: room?.guid || '' };
    if (have && have.room === next.room && have.number === next.number && have.name === next.name && have.guid === next.guid) continue;
    w.upsertPset(it.id, LOCATION_PSET, [['Room', 'IFCLABEL', next.room], ['RoomNumber', 'IFCLABEL', next.number], ['RoomName', 'IFCLABEL', next.name], ['RoomGuid', 'IFCIDENTIFIER', next.guid]]);
    n++;
  }
  return n;
}
