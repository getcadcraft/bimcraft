/* SPDX-License-Identifier: Apache-2.0 */
/**
 * route.js — escape routes from the model (0.8 round 3, EG.31 Break it; the `regs` add-on). No DOM. check.js's doorRows tests one door (the
 * widest exterior door); this reads how people get out: which rooms a door joins, which doors lead outside, and the narrowest door on the
 * best way out of every room, against the pack's egress door rule.
 *
 *   routeGraph(snap, loops, { clearOf })         → { rooms: [{ id, label, at, storey }], doors: [{ id, a, b (null = outside), width (mm, clear), label, storey }] }
 *   routeFindings(snap, loops, profile, B)       → { findings, rows, graph }   B = study/breakit.js (routes, rank); [] findings when the pack has no
 *                                                  door.egress.width.min rule
 *
 * Door sides are found the way doorRows finds them (a point 100 mm beyond the wall face on each side, loopAt on the storey's room loops). A door
 * with a room on both sides joins them; one room and the outside is an exit; no room on either side is left out. Clear width = leaf width less
 * 2 in (51 mm), as doorRows does. Stairs between storeys are not followed: each storey's rooms are judged to that storey's exits, and a room on
 * an upper storey with no exit of its own says so (a way out by stair is not modelled yet). A guide only: the registered professional and the
 * local authority decide.
 */
import { loopAt } from '../../../model-rooms.js';

export function routeGraph(snap, loops, { clearOf = (w) => Math.max(0, w - 50.8) } = {}) {
  const rooms = [], doors = [];
  const idOf = new Map();   // room loop → room id
  for (const sp of snap.derived?.spaces || []) {
    const L = loops.get(sp.storey), loop = L && loopAt(L.rooms, sp.seed);
    if (!loop || !(loop.area > 0) || idOf.has(loop)) continue;
    const id = sp.guid || String(sp.id ?? ''), label = [sp.number, sp.name].filter(Boolean).join(' ') || id;
    idOf.set(loop, id);
    rooms.push({ id, label, at: sp.seed ? [sp.seed[0], sp.seed[1], 0] : null, storey: sp.storey });
  }
  const wallOf = new Map((snap.walls || []).map((w) => [w.id, w]));
  for (const o of snap.openings || []) {
    if (o.kind !== 'door') continue;
    const w = wallOf.get(o.wall), L = w && loops.get(w.storey);
    if (!L || !w.a || !w.b) continue;
    const dx = w.b[0] - w.a[0], dy = w.b[1] - w.a[1], len = Math.hypot(dx, dy) || 1, ux = dx / len, uy = dy / len;
    const at = (Number(o.offset) || 0) + (Number(o.width) || 0) / 2, cx = w.a[0] + ux * at, cy = w.a[1] + uy * at, d = (w.t || 0) / 2 + 100;
    const sides = [1, -1].map((side) => { const loop = loopAt(L.rooms, [cx - uy * d * side, cy + ux * d * side]); return loop ? idOf.get(loop) || null : null; });
    const real = sides.filter(Boolean);
    if (!real.length) continue;
    const id = o.guid || String(o.id ?? '');
    doors.push({ id, a: real[0], b: real.length === 2 && real[1] !== real[0] ? real[1] : null, width: clearOf(Number(o.width) || 0), label: 'Door ' + id.slice(0, 8), storey: w.storey, at: [cx, cy, 0] });
  }
  return { rooms, doors };
}

export function routeFindings(snap, loops, profile, B) {
  const rule = profile && profile.rule && profile.rule('door.egress.width.min');
  if (!rule) return { findings: [], rows: [], graph: null };
  const graph = routeGraph(snap, loops);
  if (!graph.rooms.length) return { findings: [], rows: [], graph };
  const min = rule.op === 'between' ? rule.min : rule.value ?? rule.min;
  const res = B.routes(graph, { min, id: rule.id, clause: rule.clause });
  const pack = { id: profile.id, name: profile.name, edition: profile.edition || '', clause: rule.clause || '', from: rule.from || profile.id };
  const doorAt = new Map(graph.doors.map((d) => [d.id, d]));
  const findings = res.rows.map((r) => ({
    id: 'route:' + r.room, kind: 'route', subject: { kind: 'space', id: r.room, label: r.label }, util: r.reachable && min > 0 ? min / r.bottleneck : null, factor: null, failing: r.failing,
    what: { width: r.bottleneck === null ? null : Math.round(r.bottleneck), need: Math.round(min), door: r.doorLabel || '', reachable: r.reachable ? 'yes' : 'no' },
    req: { op: '>=', value: Math.round(min), unit: 'mm' }, found: { value: r.bottleneck === null ? null : Math.round(r.bottleneck), unit: 'mm' },
    clause: rule.clause, pack, where: r.door && doorAt.get(r.door) ? { space: '2d', at: doorAt.get(r.door).at } : (r.at ? { space: '2d', at: r.at } : undefined),
    route: r.path,
  }));
  return { findings, rows: res.rows, graph };
}
