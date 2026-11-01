/* SPDX-License-Identifier: Apache-2.0 */
/**
 * furnish-model.js — furnish.js on a BimCraft model (0.8 EG.60, session bim_PART_2). No DOM: bin/test-bimcraft.mjs --furnish runs it in Node.
 *
 *   levelRooms(ed, storey) → [{ index, poly, holes, area, centroid }]      the rooms the walls enclose on a level (plan mm)
 *   roomOpenings(ed, storey) → { doors: [{ x, y, w }], windows: [{ x, y, w, sill }] }    middles of the openings in the level's walls
 *   furnishPlan(ed, { storey, room, at, kind, pieces }) → { room, kind, placements, skipped, problems }
 *       room = the index in levelRooms, or at = [x, y] (the room containing that point); no kind = guessed from the room's size
 *       (guessKind) — only a guess: the person says which kind in the dialog
 *   furnishOp(storey, placements) → op for IfcEditor.modelChange   all pieces as ONE undo step (family-ops.js placeFamilies)
 *   guessKind(area_m2) → 'bath' | 'office' | 'bedroom' | 'living'
 */
import { ModelWriter } from './model-write.js';
import { storeyLoops } from './model-slabs.js';
import { readWalls } from './model-walls.js';
import { readOpenings } from './model-openings.js';
import { wallMap } from './model-arcs.js';
import { planFurnish, furnishProblems, KINDS } from './furnish.js';
import { placeFamilies } from './family-ops.js';

export function guessKind(areaM2) {
  if (areaM2 < 6) return 'bath';
  if (areaM2 < 10) return 'office';
  if (areaM2 < 20) return 'bedroom';
  return 'living';
}

export function levelRooms(ed, storey) {
  const w = new ModelWriter(ed.W, ed.api, ed.mid);
  const sid = w.byGuid(storey);   // the level's expressID (storeyLoops / readWalls take that, not the GlobalId)
  if (sid === undefined || sid === null) return [];
  return storeyLoops(w, sid).rooms.map((r, index) => ({ index, poly: r.poly, holes: r.holes || [], area: r.area, centroid: r.centroid }));
}

export function roomOpenings(ed, storey) {
  const w = new ModelWriter(ed.W, ed.api, ed.mid);
  const sid = w.byGuid(storey);
  const walls = sid === undefined || sid === null ? [] : readWalls(w, sid), byGuid = new Map(walls.map((x) => [x.guid, x]));
  const doors = [], windows = [];
  for (const o of readOpenings(w, sid, walls)) {
    const wall = byGuid.get(o.wallGuid);
    if (!wall) continue;
    const [x, y] = wallMap(wall).toW([o.offset + o.width / 2, 0]);
    if (o.kind === 'door') doors.push({ x, y, w: o.width }); else windows.push({ x, y, w: o.width, sill: o.sill });
  }
  return { doors, windows };
}

const inPoly = (poly, p) => { let c = false; for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) { const a = poly[i], b = poly[j]; if ((a[1] > p[1]) !== (b[1] > p[1]) && p[0] < ((b[0] - a[0]) * (p[1] - a[1])) / (b[1] - a[1]) + a[0]) c = !c; } return c; };

export function furnishPlan(ed, { storey, room = null, at = null, kind = null, pieces = null } = {}) {
  const rooms = levelRooms(ed, storey);
  let r = null;
  if (Number.isInteger(room)) r = rooms[room];
  else if (at) r = rooms.filter((x) => inPoly(x.poly, at)).sort((a, b) => a.area - b.area)[0];
  if (!r) return { error: 'noroom', rooms: rooms.length };
  const k = KINDS.includes(kind) ? kind : guessKind(r.area / 1e6);
  const { doors, windows } = roomOpenings(ed, storey);
  const res = planFurnish(r, { kind: k, doors, windows, pieces });
  const label = 'Room ' + (r.index + 1);
  return { room: r.index, area_m2: Math.round(r.area / 1e4) / 100, kind: k, guessed: !KINDS.includes(kind), placements: res.placements, skipped: res.skipped,
    problems: furnishProblems(r, res, { id: 'room-' + r.index, label }) };
}

export function furnishOp(storey, placements) {
  return placeFamilies((placements || []).map((p) => ({ storey, family: p.family, x: p.x, y: p.y, rot: p.rot })));
}
