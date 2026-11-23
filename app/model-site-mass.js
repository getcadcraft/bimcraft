/* SPDX-License-Identifier: Apache-2.0 */
/**
 * model-site-mass.js — a building mass from CivilCraft's site study, developed into a BimCraft building (0.7 LC.1 B2, session
 * `massing`). No DOM: bin/test-bimcraft.mjs --mass07 runs it in Node.
 *
 * CivilCraft's "Masses as IFC" (civilcraft/dev/ifc-massing.js) writes, per mass, an IfcBuilding with one IfcBuildingStorey per
 * floor and ONE IfcBuildingElementProxy whose shape is the footprint extruded to the roof, with the property set CadCraft_SiteMass
 * (MassId, Use, Floors, FloorHeight, Height, GroundFloorLevel, FootprintArea, GrossFloorArea, BaseOnSlope, Ground, Parcel).
 *
 *   readMasses(w) → [{ id, guid, name, massId, use, floors, floorHeight (mm), gfa / footprint (m²), base, parcel, building,
 *                      storeys [storey ids, lowest first], pts (the footprint in world mm, counter-clockwise) }]
 *   developMass({ guid, typeKey }) → op     the proxy becomes what it stands for, in ONE undo step: on every storey of its building
 *       walls round the footprint (the footprint is the walls' outer face; each wall follows the level above, the top one has
 *       the floor height) and a floor slab under the whole building; the building keeps the mass's pset (CadCraft_SiteMass, plus
 *       Developed = true) so the study stays traceable; the proxy is removed. No roof (a roof depends on the design).
 *   Errors: model.err.mass.none (no such mass), model.err.mass.nostoreys, model.err.mass.shape.
 */
import { op, settleFor } from './model-ops.js';
import { readLevels } from './model-levels.js';
import { addWall } from './model-walls.js';
import { addFloor } from './model-slabs.js';
import { ids, val, inv4, apply4 } from './ifc-util.js';
import { scaleT } from './model-write.js';
import { ringArea as area } from './geom2d.js';   // shared helpers (0.11 PERF.74; tools/perf/util-copies.mjs)

export const MASS_PSET = 'CadCraft_SiteMass';
const refuse = (key) => { throw Object.assign(new Error(key), { key }); };

/** The footprint of a proxy: its extruded profile's outline, world mm. */
function footprintOf(w, id) {
  const line = w.api.GetLine(w.mid, id, true);
  const reps = line.Representation?.Representations || [];
  for (const r of reps) for (const it of r.Items || []) {
    const curve = it.SweptArea?.OuterCurve;
    if (!curve?.Points) continue;
    const local = curve.Points.map((p) => (p.Coordinates || []).map((c) => Number(val(c)) * w.unitMm)).filter((q) => q.length >= 2);
    const lp = line.ObjectPlacement?.value ?? line.ObjectPlacement?.expressID;
    const M = lp ? scaleT(w.api.GetWorldTransformMatrix(w.mid, lp), w.unitMm) : [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
    let pts = local.map((q) => apply4(M, q[0], q[1], 0)).map((q) => [q[0], q[1]]);
    if (pts.length > 1 && Math.hypot(pts[0][0] - pts[pts.length - 1][0], pts[0][1] - pts[pts.length - 1][1]) < 1e-6) pts = pts.slice(0, -1);   // a closed polyline repeats its first point
    return pts;
  }
  return null;
}

export function readMasses(w) {
  const out = [];
  const levels = readLevels(w);
  for (const id of ids(w.api, w.mid, 'IFCBUILDINGELEMENTPROXY')) {
    const ps = w.readPset(id, MASS_PSET);
    if (!ps) continue;
    let pts = footprintOf(w, id);
    if (!pts || pts.length < 3) continue;
    if (area(pts) < 0) pts = pts.reverse();
    const building = w.storeyOfId(id);
    const mine = new Set();
    for (const rid of ids(w.api, w.mid, 'IFCRELAGGREGATES')) {
      const r = w.api.GetLine(w.mid, rid, false);
      if (r.RelatingObject?.value === building) for (const h of r.RelatedObjects || []) mine.add(h.value);
    }
    const line = w.api.GetLine(w.mid, id, false);
    out.push({
      id, guid: val(line.GlobalId), name: val(line.Name) || '', massId: String(ps.MassId || ''), use: String(ps.Use || ''), floors: Math.round(Number(ps.Floors) || 0),
      floorHeight: (Number(ps.FloorHeight) || 0) * w.unitMm, footprint: Number(ps.FootprintArea) || 0, gfa: Number(ps.GrossFloorArea) || 0,
      base: String(ps.BaseOnSlope || ''), parcel: String(ps.Parcel || ''), building, storeys: levels.filter((l) => mine.has(l.id)).map((l) => l.id), pts,
    });
  }
  return out;
}

/** A point inside a (possibly concave) polygon: the middle of the widest stretch of the scan line through its centre. */
export function insidePoint(P) {
  const ys = P.map((p) => p[1]), y0 = Math.min(...ys), y1 = Math.max(...ys);
  let best = null;
  for (const f of [0.5, 0.4, 0.6, 0.3, 0.7, 0.2, 0.8]) {
    const y = y0 + (y1 - y0) * f, xs = [];
    for (let i = 0; i < P.length; i++) { const a = P[i], b = P[(i + 1) % P.length]; if ((a[1] > y) !== (b[1] > y)) xs.push(a[0] + ((y - a[1]) / (b[1] - a[1])) * (b[0] - a[0])); }
    xs.sort((p, q) => p - q);
    for (let k = 0; k + 1 < xs.length; k += 2) if (!best || xs[k + 1] - xs[k] > best.w) best = { w: xs[k + 1] - xs[k], p: [(xs[k] + xs[k + 1]) / 2, y] };
  }
  return best ? best.p : [P[0][0], P[0][1]];
}

export function developMass({ guid, typeKey = 'ext-2x6' }) {
  return op((w) => {
    const m = readMasses(w).find((x) => x.guid === guid);   // (a proxy is not among the classes byGuid indexes)
    if (!m) refuse('model.err.mass.none');
    const proxy = m.id;
    if (!m.storeys.length) refuse('model.err.mass.nostoreys');
    if (m.pts.length < 3 || Math.abs(area(m.pts)) < 1) refuse('model.err.mass.shape');
    const levels = readLevels(w).filter((l) => m.storeys.includes(l.id));
    const walls = [], floors = [];
    levels.forEach((l, k) => {
      const inv = inv4(w.storeyWorld(l.id));
      const plan = m.pts.map((p) => { const q = apply4(inv, p[0], p[1], 0); return [q[0], q[1]]; });
      const above = levels[k + 1];
      for (let i = 0; i < plan.length; i++) {
        const a = plan[i], b = plan[(i + 1) % plan.length];
        if (Math.hypot(b[0] - a[0], b[1] - a[1]) < 1) continue;
        const r = addWall(w, { storey: l.id, a, b, typeKey, topLevel: above ? above.guid : '', height: above ? 0 : (m.floorHeight || l.height), extSide: 'right', justification: 'exterior' });
        walls.push(r.id);
      }
    });
    settleFor(w, levels.map((l) => l.id));
    for (const l of levels) {
      const inv = inv4(w.storeyWorld(l.id));
      const plan = m.pts.map((p) => { const q = apply4(inv, p[0], p[1], 0); return [q[0], q[1]]; });
      const r = addFloor(w, { storey: l.id, seed: insidePoint(plan), mode: 'building', kind: 'concrete' });
      floors.push(r.id);
    }
    // the building keeps the study's numbers; the proxy has done its work
    w.upsertPset(m.building, MASS_PSET, [['MassId', 'IFCLABEL', m.massId], ['Use', 'IFCLABEL', m.use], ['Floors', 'IFCINTEGER', m.floors], ['Developed', 'IFCBOOLEAN', true], ['BaseOnSlope', 'IFCLABEL', m.base], ['Parcel', 'IFCLABEL', m.parcel]]);
    w.dropProduct([proxy]);
    return { id: walls[0] ?? null, ids: [...walls, ...floors], made: new Map() };
  });
}
