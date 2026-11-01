/* SPDX-License-Identifier: Apache-2.0 */
/**
 * scan-build.js — apply the walls and doors a person ACCEPTED from scan-propose.js (0.8 EG.37, session spikes_PART_4).
 * One op, so one undo step; the rooms follow from the walls by themselves. DOM-free.
 *
 *   scanChange(accepted, { storey, typeKey = 'ext-2x6', doorType = 'door-single', topLevel = '', height = 0, extSide = 'right' }) → op
 *     accepted = the proposals the person kept ([{ kind: 'wall', id, a, b }, { kind: 'door', wall, offset, width }]); a door whose wall was
 *     not kept is skipped. Run it with ed.modelChange(op) as the other model ops.
 *   pick(result, ids) → the proposals with those ids, plus nothing else (a door needs its wall's id in the list too)
 */
import { op, settleFor } from './model-ops.js';
import { addWall, readWalls, regenWalls } from './model-walls.js';
import { addOpening } from './model-openings.js';
import { syncResidential } from './res-follow.js';

export const pick = (result, ids) => result.proposals.filter((p) => ids.includes(p.id));

export function scanChange(accepted, { storey, typeKey = 'ext-2x6', doorType = 'door-single', topLevel = '', height = 0, extSide = 'right' } = {}) {
  const walls = accepted.filter((p) => p.kind === 'wall'), doors = accepted.filter((p) => p.kind === 'door');
  return op((w) => {
    const sid = w.byGuid(storey);
    if (!sid) throw Object.assign(new Error('model.err.nolevel'), { key: 'model.err.nolevel' });
    const made = new Map(), guid = new Map();
    for (const p of walls) {
      const r = addWall(w, { storey: sid, a: p.a.map(Math.round), b: p.b.map(Math.round), typeKey: p.typeKey || typeKey, topLevel, height, extSide });
      made.set(r.guid, r.id); guid.set(p.id, r.guid);
    }
    settleFor(w, [sid]);
    let n = 0;
    for (const d of doors) {
      const host = guid.get(d.wall);
      if (!host) continue;
      const r = addOpening(w, { wall: host, typeKey: doorType, offset: d.offset, width: d.width });
      made.set(r.guid, r.id); n++;
    }
    const used = [...new Set(doors.map((d) => guid.get(d.wall)).filter(Boolean))];
    if (used.length) {
      const all = readWalls(w), sts = new Set();
      for (const g of used) { const x = all.find((y) => y.guid === g); if (x) { regenWalls(w, x.storey, [g]); sts.add(x.storey); } }
      for (const st of sts) syncResidential(w, st);
    }
    const ids = [...made.values()];
    return { id: ids[ids.length - 1], ids, made, counts: { walls: walls.length, doors: n } };
  });
}
