/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — words come from the add-on's lang/en.json (api.t); this file returns keys and numbers. */
/**
 * bodies.js — what BimCraft puts on the print stage (roadmap PS.7; docs/PRINTSTAGE-HOST-CONTRACT.md). DOM-free, so Node and the page run the same code.
 *
 * BimCraft's 3D view draws every IFC element as runs of triangles in batches (viewer3d.js / ifc-model.js: bt.positions, bt.indices, bt.elems {ids, t0, tn, v0, vn}),
 * already carrying each element's IFC placement and its model's placement, Y up, metres. The bed is Z up, millimetres, so a scene point (x, y, z) is (x, −z, y) × 1000
 * on the bed: a proper turn (volumes keep their sign), the same as the Collada export's.
 *
 *   toPrinter([x, y, z], P?) → [x, −z, y] × 1000      P = the model's placement (16 numbers, viewer.modelMatrix(mi)) applied first
 *   elementsOf({ layers, keys, isHidden, nameOf, max }) → { bodies: [{ id, name, cls, tris }], left: [{ id, name, why: { kind, n } }], more: n }
 *       layers = [{ mi, model: { batches, classOf, keyBase }, matrix }]; keys = the element keys to take (a Set or array)
 *       tris = printer triangles [[ [x,y,z] ×3 ]…] where they are (not yet centred on the bed)
 *       left = elements that are not closed solids (or have no geometry), with the first fault the check finds: 'open', 'nonmanifold', 'flipped', 'inverted', 'selfintersect', 'empty'
 *       span = ifc-model.js KEY_SPAN (the keys of model mi start at mi × span)
 *       more = how many keys were not taken because `max` things are the most one bed holds
 *   centred(tris) → { tris, size } standing on 0 and centred on the origin, as the stage's place() wants them
 */
import { meshFromTriangles, printCheck } from '../../print3d.js';

const ID = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
export const toPrinter = (p, P = ID) => {
  const x = P[0] * p[0] + P[4] * p[1] + P[8] * p[2] + P[12], y = P[1] * p[0] + P[5] * p[1] + P[9] * p[2] + P[13], z = P[2] * p[0] + P[6] * p[1] + P[10] * p[2] + P[14];
  return [x * 1000, -z * 1000, y * 1000];
};

/** The first thing that makes these triangles not a closed solid, or null. The same check as Check for 3D printing. */
export function closedFault(tris) {
  if (!tris.length) return { kind: 'empty', n: 0 };
  const rep = printCheck(meshFromTriangles(tris.map((p) => ({ p }))), { bed: null });
  const bad = rep.problems.find((p) => ['empty', 'open', 'nonmanifold', 'flipped', 'inverted', 'selfintersect'].includes(p.kind));
  return bad ? { kind: bad.kind, n: bad.n || 0 } : null;
}

/** Every key's triangles from the batches it was drawn in. → Map key → { mi, tris } */
export function trisByKey(layers, want) {
  const out = new Map();
  for (const L of layers) {
    const P = L.matrix || ID;
    for (const bt of L.model.batches || []) {
      if (bt.space) continue;
      const E = bt.elems, ps = bt.positions, ix = bt.indices;
      for (let k = 0; k < E.ids.length; k++) {
        const key = E.ids[k];
        if (want && !want.has(key)) continue;
        let r = out.get(key);
        if (!r) out.set(key, (r = { mi: L.mi, model: L.model, tris: [] }));
        for (let t = 0; t < E.tn[k]; t++) {
          const tri = [];
          for (let c = 0; c < 3; c++) { const v = ix[(E.t0[k] + t) * 3 + c] * 3; tri.push(toPrinter([ps[v], ps[v + 1], ps[v + 2]], P)); }
          r.tris.push(tri);
        }
      }
    }
  }
  return out;
}

export function elementsOf({ layers, keys, isHidden = null, nameOf = null, max = 300, span = 2 ** 26 }) {
  const list = [...new Set(keys)].filter((k) => !(isHidden && isHidden(k)));
  const take = list.slice(0, max);
  const found = trisByKey(layers, new Set(take));
  const bodies = [], left = [];
  for (const key of take) {
    const r = found.get(key);
    const id = 'k:' + key;
    const M = r?.model || layers.find((L) => Math.floor(key / span) === L.mi)?.model || layers[0]?.model;
    const eid = key - (M?.keyBase || 0);
    const cls = (M?.classOf && M.classOf.get(eid)) || 'IfcElement';
    const name = (nameOf && nameOf(key, eid, cls)) || cls;
    const why = r ? closedFault(r.tris) : { kind: 'empty', n: 0 };
    if (why) left.push({ id, name, why }); else bodies.push({ id, name, cls, tris: r.tris });
  }
  return { bodies, left, more: Math.max(0, list.length - take.length) };
}

/** Standing on 0 (lowest point) and centred on the origin in x and y. */
export function centred(tris) {
  const lo = [Infinity, Infinity, Infinity], hi = [-Infinity, -Infinity, -Infinity];
  for (const t of tris) for (const p of t) for (let k = 0; k < 3; k++) { if (p[k] < lo[k]) lo[k] = p[k]; if (p[k] > hi[k]) hi[k] = p[k]; }
  const cx = (lo[0] + hi[0]) / 2, cy = (lo[1] + hi[1]) / 2;
  return { tris: tris.map((t) => t.map((p) => [p[0] - cx, p[1] - cy, p[2] - lo[2]])), size: [hi[0] - lo[0], hi[1] - lo[1], hi[2] - lo[2]] };
}
