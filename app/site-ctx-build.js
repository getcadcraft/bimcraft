/* SPDX-License-Identifier: Apache-2.0 */
/**
 * site-ctx-build.js — apply the context a person ACCEPTED from CivilCraft's "Address to site" file (0.8 EG.63, civil_PART_4). DOM-free; the proposals come from
 * site-context.js (the shared file reader). Buildings round the address become walls round their footprints, as tall as the source said (or the height the person typed
 * for the unknown ones); the parcel becomes the model's site outline. Coordinates arrive in metres east/north of the address point and are placed from the model's own
 * origin (0, 0 on the level), so the address point sits at the origin until the person moves the building.
 *
 *   contextWalls(accepted, { typeKey, defaultHeight }) → [{ a, b, height }] in mm          the walls for the accepted buildings (a ring, counter-clockwise)
 *   contextChange(accepted, { storey, typeKey = 'ext-2x6' }) → op     ONE undo step: the walls of every accepted building (the parcel is a second step: outlineChange)
 *   outlineChange(accepted, { storey }) → op | null                  the first accepted parcel as the site outline (setSiteOutline)
 */
import { op, settleFor } from './model-ops.js';
import { addWall } from './model-walls.js';
import { setSiteOutline } from './model-site.js';

const MM = 1000;
const area = (P) => { let s = 0; for (let i = 0; i < P.length; i++) { const a = P[i], b = P[(i + 1) % P.length]; s += a[0] * b[1] - a[1] * b[0]; } return s / 2; };
const ccw = (P) => (area(P) < 0 ? P.slice().reverse() : P);

export function contextWalls(accepted, { defaultHeight = 6 } = {}) {
  const out = [];
  for (const p of accepted) {
    if (p.kind !== 'building' || !p.ring || p.ring.length < 3) continue;
    const ring = ccw(p.ring.map((q) => [Math.round(q[0] * MM), Math.round(q[1] * MM)])), h = Math.round((p.height > 0 ? p.height : defaultHeight) * MM);
    for (let i = 0; i < ring.length; i++) {
      const a = ring[i], b = ring[(i + 1) % ring.length];
      if (Math.hypot(b[0] - a[0], b[1] - a[1]) < 100) continue;   // a sliver under 10 cm is not a wall
      out.push({ a, b, height: h, of: p.id });
    }
  }
  return out;
}

export function contextChange(accepted, { storey, typeKey = 'ext-2x6', defaultHeight = 6 } = {}) {
  const walls = contextWalls(accepted, { defaultHeight });
  return op((w) => {
    const sid = w.byGuid(storey);
    if (!sid) throw Object.assign(new Error('model.err.nolevel'), { key: 'model.err.nolevel' });
    const made = new Map();
    for (const x of walls) { const r = addWall(w, { storey: sid, a: x.a, b: x.b, typeKey, topLevel: '', height: x.height, extSide: 'right' }); made.set(r.guid, r.id); }
    settleFor(w, [sid]);
    return { ids: [...made.values()] };
  });
}

export function outlineChange(accepted, { storey } = {}) {
  const parcel = accepted.find((p) => p.kind === 'parcel' && p.ring && p.ring.length >= 3);
  if (!parcel) return null;
  return setSiteOutline({ storey, points: ccw(parcel.ring.map((q) => [Math.round(q[0] * MM), Math.round(q[1] * MM)])) });
}
