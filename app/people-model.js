/* SPDX-License-Identifier: Apache-2.0 */
/**
 * people-model.js — people-sim.js on a BimCraft model (0.8 EG.48, session bim-sim_PART_2). No DOM: bin/test-bimcraft.mjs --people runs it in Node.
 *
 *   peopleScene(ed) → { scene, levels, notes }       every level's rooms (the walls' inner outlines, named from the room tags), the doors in
 *                                                    the walls (a door to outside is an exit) and the stairs (bottom and top of the walk line)
 *   runPeople(ed, opts) → { scene, levels, travel, out, problems }
 *        opts = people-sim.js simulate options + { travelLimit, availableTime, queueWait, guidOf }
 *
 * Room ids are `<level GlobalId>:<n>`; opening ids are the door's or stair's GlobalId, so a Problem points at the element. Rooms named like
 * a corridor, stair, lobby, toilet or store hold nobody unless the person gives a count (UNOCCUPIED); unnamed rooms hold people by area.
 */
import { ModelWriter } from './model-write.js';
import { readLevels } from './model-levels.js';
import { readDerived } from './model-slabs.js';
import { readWalls } from './model-walls.js';
import { readOpenings } from './model-openings.js';
import { wallMap } from './model-arcs.js';
import { readStairs, stairLayout, stairHeight } from './res-stair.js';
import { levelRooms } from './furnish-model.js';
import { buildScene, attachDoors, simulate, travelDistances, peopleProblems } from './people-sim.js';

/** Names of rooms people pass through or stand in only briefly: they hold nobody unless a count is typed. */
export const UNOCCUPIED = /corridor|hall(way)?\b|stair|lobby|vestibule|closet|storage|store\b|wc\b|toilet|restroom|bath|mech|elevator|lift|shaft|garage|utility|laundry|riser/i;

const inPoly = (poly, x, y) => { let c = false; for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) { const a = poly[i], b = poly[j]; if ((a[1] > y) !== (b[1] > y) && x < ((b[0] - a[0]) * (y - a[1])) / (b[1] - a[1]) + a[0]) c = !c; } return c; };
function ringDist(poly, x, y) {
  let d = Infinity;
  for (let i = 0; i < poly.length; i++) {
    const a = poly[i], b = poly[(i + 1) % poly.length], dx = b[0] - a[0], dy = b[1] - a[1], l2 = dx * dx + dy * dy;
    const t = l2 ? Math.max(0, Math.min(1, ((x - a[0]) * dx + (y - a[1]) * dy) / l2)) : 0;
    d = Math.min(d, Math.hypot(x - a[0] - dx * t, y - a[1] - dy * t));
  }
  return d;
}
/** The room of a level holding a point, else the nearest one within `max` mm. */
function roomAt(rooms, level, x, y, max) {
  const mine = rooms.filter((r) => r.level === level);
  const hit = mine.filter((r) => inPoly(r.poly, x, y)).sort((a, b) => a.area_m2 - b.area_m2)[0];
  if (hit) return hit;
  const near = mine.map((r) => ({ r, d: ringDist(r.poly, x, y) })).filter((c) => c.d <= max).sort((a, b) => a.d - b.d)[0];
  return near ? near.r : null;
}

/** Every level's rooms, named from the room tags: [{ id, name, tagged, level, levelName, poly, holes, area_m2, occupied, index0 }] (id = `<level GlobalId>:<n>`). */
export function namedRooms(ed) {
  const w = new ModelWriter(ed.W, ed.api, ed.mid), levels = readLevels(w), spaces = readDerived(w).spaces, rooms = [];
  for (const lv of levels) {
    for (const r of levelRooms(ed, lv.guid)) {
      const sp = spaces.find((s) => s.storey === lv.id && inPoly(r.poly, s.seed[0], s.seed[1]));
      const name = sp ? [sp.number, sp.name].filter(Boolean).join(' ') : '';
      rooms.push({ id: lv.guid + ':' + r.index, name: name || 'Room ' + (r.index + 1), tagged: !!name, level: lv.guid, levelName: lv.name, poly: r.poly, holes: r.holes, area_m2: r.area / 1e6, occupied: !(sp && UNOCCUPIED.test(name)), index0: r.index, centroid: r.centroid });
    }
  }
  return { w, levels, rooms };
}

/**
 * What the model holds that a walker, water or sound can pass: rooms, the doors and windows in the walls (with their sills), and the stairs joining levels.
 *   modelLinks(ed) → { levels, rooms, doors: [{ id, x, y, w, h, sill, thickness, level, kind }], stairs: [{ id, a: { room, x, y }, b: { room, x, y }, length, w }], notes }
 */
export function modelLinks(ed) {
  const { w, levels, rooms } = namedRooms(ed), notes = [];
  const walls = readWalls(w), byGuid = new Map(walls.map((x) => [x.guid, x]));
  const doors = [];
  for (const o of readOpenings(w, null, walls)) {
    const wall = byGuid.get(o.wallGuid);
    if (!wall) continue;
    const lv = levels.find((l) => l.id === wall.storey);
    if (!lv) continue;
    const [x, y] = wallMap(wall).toW([o.offset + o.width / 2, 0]);
    doors.push({ id: o.guid, x, y, w: o.width, h: o.height, sill: o.sill, thickness: wall.t, level: lv.guid, name: o.name || o.typeName || '', kind: o.kind });
  }
  const stairs = [];
  for (const st of readStairs(w)) {
    const { height, top } = stairHeight(w, st, levels), lay = stairLayout({ ...st, height });
    const lvB = levels.find((l) => l.id === st.storey), lvT = top || levels[levels.findIndex((l) => l.id === st.storey) + 1];
    if (lay.error || !lay.walk?.length || !lvB || !lvT) { notes.push({ key: 'people.note.stairskipped', guid: st.guid }); continue; }
    const a = lay.walk[0], b = lay.walk[lay.walk.length - 1];
    const ra = roomAt(rooms, lvB.guid, a[0], a[1], 1500), rb = roomAt(rooms, lvT.guid, b[0], b[1], 1500);
    if (!ra || !rb) { notes.push({ key: 'people.note.stairskipped', guid: st.guid }); continue; }
    let plan = 0;
    for (let i = 1; i < lay.walk.length; i++) plan += Math.hypot(lay.walk[i][0] - lay.walk[i - 1][0], lay.walk[i][1] - lay.walk[i - 1][1]);
    stairs.push({ id: st.guid, a: { room: ra.id, x: a[0], y: a[1] }, b: { room: rb.id, x: b[0], y: b[1] }, length: Math.hypot(plan, height), w: st.width, landings: (lay.pieces || []).filter((pc) => pc.kind === 'landing').length });
  }
  return { w, levels, rooms, doors, stairs, notes };
}

export function peopleScene(ed, { cell } = {}) {
  const { levels, rooms, doors, stairs, notes } = modelLinks(ed);
  const openings = attachDoors(rooms, doors.filter((d) => d.kind === 'door'));
  const nDoors = doors.filter((d) => d.kind === 'door').length;
  if (openings.length < nDoors) notes.push({ key: 'people.note.doorsloose', n: nDoors - openings.length });
  for (const st of stairs) openings.push({ id: st.id, kind: 'stair', a: st.a, b: st.b, length: st.length, w: st.w, landings: st.landings });
  const elev = new Map(levels.map((l) => [l.guid, l.elevation]));   // each room carries its floor's height (mm) for the 3D view
  return { scene: buildScene({ rooms: rooms.map((r) => ({ ...r, z: elev.get(r.level) || 0 })), openings, cell }), levels, notes };
}

export function runPeople(ed, opts = {}) {
  const { scene, levels, notes } = peopleScene(ed, { cell: opts.cell });
  const travel = travelDistances(scene, { blocked: opts.blocked, exits: opts.exits });
  const out = simulate(scene, opts);
  const problems = peopleProblems(out, { travel, travelLimit: opts.travelLimit, availableTime: opts.availableTime, queueWait: opts.queueWait, t: opts.t || null, guidOf: opts.guidOf });
  return { scene, levels, notes, travel, out, problems };
}

/**
 * 0.8 EG.48 (bim-sim_PART_3): the people each room holds before a run, so the person can set a count per room.
 *   roomCounts(ed, { m2PerPerson, loads }) → [{ id, name, level, levelName, area_m2, occupied, auto, count }]     auto = the count the factor gives (0 for a corridor, stair, lobby …);
 *   count = the person's number when `loads` has the room, else auto. The same `loads` map goes to simulate().
 */
export function roomCounts(ed, { m2PerPerson = 10, loads = {} } = {}) {
  const { rooms } = namedRooms(ed);
  return rooms.map((r) => { const auto = r.occupied ? Math.floor(r.area_m2 / m2PerPerson) : 0, own = loads[r.id]; return { id: r.id, name: r.name, level: r.level, levelName: r.levelName, area_m2: Math.round(r.area_m2 * 10) / 10, occupied: r.occupied, auto, count: own !== undefined && own !== '' && own !== null ? Math.max(0, Math.floor(Number(own)) || 0) : auto }; });
}
