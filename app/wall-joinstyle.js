/* SPDX-License-Identifier: Apache-2.0 */
/**
 * wall-joinstyle.js — the Join tools' model side (0.9 WT.5 join style, FX.70 Disallow join as a tool; session walls-join-10). No DOM:
 * bin/test-bimcraft.mjs --joinstyle runs it in Node. The rules are lib/walls/joinstyle.js (dev/walls/, a byte copy, shared with CadCraft
 * plan walls); the style is kept in the join record (model-walls.js setJoinStyleRecord); this file is the op and where the joins are.
 *
 *   joinPlaces(walls)                  the joins of a level's walls (readWalls rows): [{ key, kind: 'L'|'T'|'X', a, b (GlobalIds, the record's order),
 *                                      at: [x, y] (the corner, a T's stem end, an X's crossing), style, through (GlobalId | null), can }]
 *                                      can: 'style' (an L of two straight walls alone at their corner) | 'through' (an X) | null (a T: the wall
 *                                      whose side is met runs through; a corner with a curved wall or three walls or more keeps the mitre)
 *   nearestJoin(places, p, tol)        the join nearest p within tol, or null
 *   wallEndAt(walls, p, tol)           the wall end within tol of p (at a corner: of the wall p is over): { guid, end: 'a'|'b', p, off: Disallow join is set there } | null
 *   nextChoice(place) / otherThrough(place)   what a click (cycle mitre → butt → square off) and Next (the other wall runs through) ask for
 *   setJoinStyle(key, { style, through })     op, ONE undo step: writes the record, then the walls, rooms and quantities follow (settle)
 */
import { op, settleFor } from './model-ops.js';
import { readWalls, readJoinRecords, setJoinStyleRecord, regenWalls } from './model-walls.js';
import { deriveJoins } from './walls/joins.js';
import { nextStyle, JOIN_STYLES } from './walls/joinstyle.js';

const dist = (p, q) => Math.hypot(p[0] - q[0], p[1] - q[1]);
const endOf = (pos) => (pos === 'start' ? 'a' : pos === 'end' ? 'b' : null);

export function joinPlaces(walls) {
  const by = new Map(walls.map((w) => [w.guid, w])), recs = new Map();
  if (walls.some((w) => w.joins)) {
    for (const w of walls) for (const j of w.joins || []) if (!recs.has(j.key)) recs.set(j.key, { key: j.key, kind: j.kind, a: { guid: w.guid, pos: j.pos }, b: { guid: j.other, pos: j.otherPos }, style: j.style || 'mitre', through: j.style ? (j.through ? w.guid : j.other) : null });
  } else for (const r of deriveJoins(walls.map((w) => ({ guid: w.guid, a: w.a, b: w.b, t: w.t, bulge: w.bulge, joinOff: w.joinOff })))) recs.set(r.key, { ...r, style: 'mitre', through: null });
  const use = new Map();
  for (const r of recs.values()) for (const x of [r.a, r.b]) if (x.pos !== 'mid') use.set(x.guid + ':' + x.pos, (use.get(x.guid + ':' + x.pos) || 0) + 1);
  const out = [];
  for (const r of recs.values()) {
    const A = by.get(r.a.guid), B = by.get(r.b.guid);
    if (!A || !B) continue;
    let at = null, can = null;
    if (r.kind === 'L') {
      at = A[endOf(r.a.pos)];
      if (!A.bulge && !B.bulge && use.get(r.a.guid + ':' + r.a.pos) === 1 && use.get(r.b.guid + ':' + r.b.pos) === 1) can = 'style';
    } else if (r.kind === 'T') at = r.a.pos === 'mid' ? B[endOf(r.b.pos)] : A[endOf(r.a.pos)];
    else {
      const d1 = [A.b[0] - A.a[0], A.b[1] - A.a[1]], d2 = [B.b[0] - B.a[0], B.b[1] - B.a[1]], c = d1[0] * d2[1] - d1[1] * d2[0];
      if (Math.abs(c) < 1e-9) continue;
      const s = ((B.a[0] - A.a[0]) * d2[1] - (B.a[1] - A.a[1]) * d2[0]) / c;
      at = [A.a[0] + d1[0] * s, A.a[1] + d1[1] * s]; can = 'through';
    }
    out.push({ key: r.key, kind: r.kind, a: r.a.guid, b: r.b.guid, at, style: JOIN_STYLES.includes(r.style) ? r.style : 'mitre', through: r.through, can });
  }
  return out;
}
export function nearestJoin(places, p, tol) {
  let best = null;
  for (const j of places) { const d = dist(j.at, p); if (d <= tol && (!best || d < best.d)) best = { d, j }; }
  return best?.j || null;
}
export function wallEndAt(walls, p, tol) {
  // at a corner two walls end on one point: the wall the pointer is over (nearest its centre line) is the one meant
  const toSeg = (w) => { const d = [w.b[0] - w.a[0], w.b[1] - w.a[1]], L2 = d[0] * d[0] + d[1] * d[1] || 1, k = Math.max(0, Math.min(1, ((p[0] - w.a[0]) * d[0] + (p[1] - w.a[1]) * d[1]) / L2)); return dist(p, [w.a[0] + d[0] * k, w.a[1] + d[1] * k]); };
  let best = null;
  for (const w of walls) for (const end of ['a', 'b']) {
    const d = dist(w[end], p);
    if (d > tol) continue;
    const sc = toSeg(w);
    if (!best || sc < best.sc - 1e-9 || (Math.abs(sc - best.sc) <= 1e-9 && d < best.d)) best = { sc, d, guid: w.guid, end, p: w[end], off: !!w.joinOff?.[end] };
  }
  return best ? { guid: best.guid, end: best.end, p: best.p, off: best.off } : null;
}
/** A click on a corner: the next style, the wall that runs through kept (the first wall when none was chosen yet). */
export const nextChoice = (place) => ({ style: nextStyle(place.style), through: place.through || place.a });
/** Next: the other wall runs through (an L that is butt or square off; an X). null when there is nothing to switch. */
export function otherThrough(place) {
  if (place.can === 'through') return { style: 'butt', through: (place.through || place.a) === place.a ? place.b : place.a };
  if (place.can !== 'style' || place.style === 'mitre') return null;
  return { style: place.style, through: (place.through || place.a) === place.a ? place.b : place.a };
}

export function setJoinStyle(key, { style = 'mitre', through = null } = {}) {
  return op((w) => {
    const guids = String(key).split('|').map((x) => x.slice(0, x.lastIndexOf(':')));
    const walls = readWalls(w), first = walls.find((x) => x.guid === guids[0]);
    if (!first) throw Object.assign(new Error('model.err.nojoin'), { key: 'model.err.nojoin' });
    if (!readJoinRecords(w).some((r) => r.key === key)) regenWalls(w, first.storey);   // a file from before the join record: written now (syncJoins)
    const kind = readJoinRecords(w).find((r) => r.key === key)?.kind;
    if (kind === 'T' && style !== 'mitre') throw Object.assign(new Error('walls.err.tjoin'), { key: 'walls.err.tjoin' });   // a T has no choice
    const rec = setJoinStyleRecord(w, key, { style: JOIN_STYLES.includes(style) ? style : 'mitre', through });
    settleFor(w, [first.storey], [rec.a.guid, rec.b.guid]);
    const ids = [rec.a.guid, rec.b.guid].map((g) => w.byGuid(g)).filter(Boolean);
    return { id: ids[0] ?? null, ids };
  });
}
