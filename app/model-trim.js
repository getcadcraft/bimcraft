/* SPDX-License-Identifier: Apache-2.0 */
/**
 * model-trim.js — trim, extend and corner drawn walls (0.6 DF.17, session `bim-draw`). No DOM: bin/test-bimcraft.mjs --draw06
 * runs it in Node. Plan millimetres in the storey's own axes.
 *
 * Walls are drawn on their centre line (their justification), so a wall is trimmed or extended along its centre line to the
 * other wall's centre line: model-walls.js wallOutlines then cleans the meeting into a T (or, for a corner, an L).
 *
 *   axisMeet(a, b, c, d) → { t, u, p } | null        where line a→b meets line c→d (t along a→b, u along c→d; null = parallel)
 *   trimPlan(wall, edge, click) → { a, b } | { error }   `wall` trimmed or extended to the wall `edge`: when it crosses the edge,
 *                       the part on the side clicked stays; otherwise its end nearer the meeting point moves there. The meeting
 *                       point must lie on the edge wall (its ends give half its thickness more).
 *   cornerPlan(w1, click1, w2, click2) → [{ a, b }, { a, b }] | { error }   both walls to the point their centre lines meet (each
 *                       keeps its clicked side when it crosses the other)
 *   reshapeWalls(list) → op for IfcEditor.modelChange   list [{ guid, a, b }] (one undo step): each wall's ends moved along its
 *                       own line; a door or window left wholly on a part cut off is deleted with it, one cut through refuses
 *                       the change (model.err.trim.cuts); the walls joined to them, rooms, floors, roofs and what follows them
 *                       are made again as after any wall change.
 *   cutsOpening(wall, plan, openings) → 'model.err.trim.cuts' | null   whether the change would cut through a door or window
 *                       (the UI says so before it tries; reshapeWalls refuses it anyway)
 * Errors (lang keys): model.err.trim.parallel, model.err.trim.miss, model.err.trim.short, model.err.trim.same, model.err.trim.cuts.
 */
import { op, afterWallMoveFor, settleFor } from './model-ops.js';
import { readWalls, updateWall } from './model-walls.js';
import { readOpenings, deleteOpenings } from './model-openings.js';

const MIN = 1;   // mm: a wall under 1 mm cannot exist (model-walls.js). 0.10 BK.73: was 50 mm (practice); a wall left under 50 mm is advice now
const sub = (a, b) => [a[0] - b[0], a[1] - b[1]];
const cross = (a, b) => a[0] * b[1] - a[1] * b[0];
const dot = (a, b) => a[0] * b[0] + a[1] * b[1];
const len = (a, b) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const err = (key) => ({ error: key });

export function axisMeet(a, b, c, d) {
  const r = sub(b, a), s = sub(d, c), den = cross(r, s);
  if (Math.abs(den) < 1e-3 * Math.hypot(...r) * Math.hypot(...s)) return null;   // within ~0.06°: parallel (walls drawn by hand)
  const ca = sub(c, a), t = cross(ca, s) / den, u = cross(ca, r) / den;
  return { t, u, p: [a[0] + r[0] * t, a[1] + r[1] * t] };
}

/** The wall's new ends for a meeting point at t (along a→b), keeping the side of `click` when the point is inside the wall. */
function toPoint(wall, t, p, click) {
  const L = len(wall.a, wall.b), eps = 0.5 / L;   // half a millimetre
  let out;
  if (t > eps && t < 1 - eps) {
    const tc = dot(sub(click, wall.a), sub(wall.b, wall.a)) / (L * L);
    out = tc < t ? { a: wall.a, b: p } : { a: p, b: wall.b };
  } else if (t <= eps) out = { a: p, b: wall.b };
  else out = { a: wall.a, b: p };
  if (len(out.a, out.b) < MIN) return err('model.err.trim.short');
  return out;
}

export function trimPlan(wall, edge, click) {
  if (wall.guid && wall.guid === edge.guid) return err('model.err.trim.same');
  if (wall.bulge || edge.bulge) return err('comforts.err.curvedtrim');   // 0.6 round 2: curved walls are not trimmed yet
  const m = axisMeet(wall.a, wall.b, edge.a, edge.b);
  if (!m) return err('model.err.trim.parallel');
  const Le = len(edge.a, edge.b), slack = (edge.t || 0) / 2 / Le;
  if (m.u < -slack || m.u > 1 + slack) return err('model.err.trim.miss');
  return toPoint(wall, m.t, m.p, click);
}

export function cornerPlan(w1, click1, w2, click2) {
  if (w1.guid && w1.guid === w2.guid) return err('model.err.trim.same');
  if (w1.bulge || w2.bulge) return err('comforts.err.curvedtrim');   // 0.6 round 2: curved walls are not trimmed yet
  const m = axisMeet(w1.a, w1.b, w2.a, w2.b);
  if (!m) return err('model.err.trim.parallel');
  const r1 = toPoint(w1, m.t, m.p, click1);
  if (r1.error) return r1;
  const r2 = toPoint(w2, m.u, m.p, click2);
  if (r2.error) return r2;
  return [r1, r2];
}

export function cutsOpening(wall, plan, openings) {
  const u = [(wall.b[0] - wall.a[0]) / len(wall.a, wall.b), (wall.b[1] - wall.a[1]) / len(wall.a, wall.b)];
  const shift = dot(sub(plan.a, wall.a), u), L = len(plan.a, plan.b);
  for (const o of openings.filter((x) => x.wallGuid === wall.guid)) {
    const s0 = o.offset - shift, s1 = s0 + o.width;
    if (!(s1 <= 0.5 || s0 >= L - 0.5) && (s0 < -0.5 || s1 > L + 0.5)) return 'model.err.trim.cuts';
  }
  return null;
}

export function reshapeWalls(list) {
  const items = list.map((x) => ({ guid: x.guid, a: [x.a[0], x.a[1]], b: [x.b[0], x.b[1]] }));
  return op((w) => {
    const before = readWalls(w);
    let ops0 = readOpenings(w, null, before);
    const drop = [], storeys = new Set();
    for (const it of items) {
      const wall = before.find((x) => x.guid === it.guid);
      if (!wall) throw Object.assign(new Error('model.err.nowall'), { key: 'model.err.nowall' });
      storeys.add(wall.storey);
      // doors and windows along the new extent (the wall keeps its line, so offsets shift by the start's move)
      const u = [(wall.b[0] - wall.a[0]) / wall.len, (wall.b[1] - wall.a[1]) / wall.len];
      const shift = dot(sub(it.a, wall.a), u), L = len(it.a, it.b);
      for (const o of ops0.filter((x) => x.wallGuid === it.guid)) {
        const s0 = o.offset - shift, s1 = s0 + o.width;
        if (s1 <= 0.5 || s0 >= L - 0.5) drop.push(o.guid);
        else if (s0 < -0.5 || s1 > L + 0.5) throw Object.assign(new Error('model.err.trim.cuts'), { key: 'model.err.trim.cuts' });
      }
    }
    if (drop.length) { deleteOpenings(w, drop); ops0 = ops0.filter((o) => !drop.includes(o.guid)); }
    const guids = new Set();
    for (const it of items) for (const g of updateWall(w, it.guid, { a: it.a, b: it.b }).guids) guids.add(g);
    afterWallMoveFor(w, before, ops0, [...guids]);
    settleFor(w, [...storeys], [...guids]);
    const ids = items.map((it) => w.byGuid(it.guid));
    return { id: ids[0], ids };
  });
}
