/* SPDX-License-Identifier: Apache-2.0 */
/**
 * hazard-model.js — hazard.js on a BimCraft model (0.8 EG.47, session bim-sim_PART_2). No DOM: bin/test-bimcraft.mjs --hazard runs it in Node.
 *
 *   floodScene(ed) → { rooms: [{ id, name, level, levelName, floor, area_m2, poly }], openings: [{ id, a, b, sill, kind }], datum_mm, notes }
 *        floor = the room's floor above the LOWEST level's floor (m); an opening's sill is its lowest edge above its own floor (m); a door or window in
 *        one room only (an outside wall) opens to the outside, one between two rooms joins them, a stair joins the rooms at its two ends
 *   hazardBuilding(ed, { massPerM2, T1, dir }) → { storeys: [{ name, z, h, area_m2, width_m, mass }], m, k, T1, building, notes }
 *        z = the middle of the storey above the lowest floor (m); mass = footprint area × massPerM2 (kg); width = the footprint's extent across the wind
 *        (`dir` 'x' or 'y' = the wind's direction); k = the same stiffness for every storey that gives the person's period T1
 */
import { modelLinks } from './people-model.js';
import { attachDoors } from './people-sim.js';
import { storeyLoops } from './model-slabs.js';
import { shearBuilding, uniformFor } from './hazard.js';
import { frameBuilding } from './hazard-frame.js';

export function floodScene(ed) {
  const { w, levels, rooms, doors, stairs, notes } = modelLinks(ed);
  if (!levels.length) return { rooms: [], openings: [], notes };
  const datum = levels[0].elevation, elev = new Map(levels.map((l) => [l.guid, (l.elevation - datum) / 1000]));
  const out = rooms.map((r) => ({ id: r.id, name: r.name, level: r.level, levelName: r.levelName, floor: elev.get(r.level), area_m2: r.area_m2, poly: r.poly }));
  const at = attachDoors(rooms, doors), byId = new Map(doors.map((d) => [d.id, d]));
  const openings = at.map((o) => { const d = byId.get(o.id); return { id: o.id, a: o.rooms[0], b: o.rooms[1], sill: Math.max(0, (d.sill || 0)) / 1000, kind: d.kind }; });   // a door's or window's sill is measured from its own level's floor
  for (const s of stairs) openings.push({ id: s.id, a: s.a.room, b: s.b.room, sill: 0, kind: 'stair' });
  return { rooms: out, openings, datum_mm: datum, notes };
}

export function hazardBuilding(ed, { massPerM2 = 500, T1 = null, dir = 'x' } = {}) {
  const { w, levels, rooms, notes } = modelLinks(ed);
  if (!levels.length) return { storeys: [], notes };
  const datum = levels[0].elevation, storeys = [];
  levels.forEach((lv, i) => {
    const loops = storeyLoops(w, lv.id), outs = (loops.outlines || []).filter((o) => o.poly && o.poly.length > 2);
    const mine = rooms.filter((r) => r.level === lv.guid);
    const area = outs.length ? outs.reduce((s, o) => s + Math.abs(o.area) / 1e6, 0) : mine.reduce((s, r) => s + r.area_m2, 0);
    const pts = (outs.length ? outs.flatMap((o) => o.poly) : mine.flatMap((r) => r.poly));
    if (!pts.length) return;
    const xs = pts.map((p) => p[0]), ys = pts.map((p) => p[1]);
    const ext = dir === 'x' ? Math.max(...ys) - Math.min(...ys) : Math.max(...xs) - Math.min(...xs);
    const next = levels[i + 1], h = (next ? next.elevation - lv.elevation : lv.height) / 1000;
    storeys.push({ name: lv.name, guid: lv.guid, z: (lv.elevation - datum) / 1000 + h / 2, h, area_m2: Math.round(area * 100) / 100, width_m: Math.round(ext / 10) / 100, mass: area * massPerM2 });
  });
  if (!storeys.length) return { storeys: [], notes };
  const m = storeys.map((s) => s.mass), T = T1 > 0 ? T1 : 0.1 * storeys.length;   // the rule of thumb of a tenth of a second a storey, until the person gives the period
  const k = uniformFor(m, T), building = shearBuilding({ m, k: m.map(() => k) });
  return { storeys, m, k, T1: T, assumedT1: !(T1 > 0), building, notes, height: storeys.reduce((s, x) => s + x.h, 0) };
}

/**
 * 0.8 EG.47 (bim-sim_PART_3): the same `hazardBuilding` shape, but the stiffness comes from the Analysis tab's frame (hazard-frame.js) instead of one period the person
 * types: hazardFrameBuilding(frameModel, ed?, { addKgM2, dir }) → { storeys, building, T1, source: 'frame', ... } | { storeys: [], reason, notes }.
 * Storey names are the model's levels when their count matches the frame's floors; else "Floor n". Mass = the members' weight + addKgM2 × the floor's plan box.
 */
export function hazardFrameBuilding(frameModel, ed = null, { addKgM2 = 500, dir = 'x' } = {}) {
  const fb = frameBuilding(frameModel, { dir, addKgM2 });
  if (!fb.ok) return { storeys: [], reason: fb.reason, notes: fb.notes || [] };
  let names = null;
  if (ed) { try { const lv = modelLinks(ed).levels; if (lv.length - 1 === fb.floors.length || lv.length === fb.floors.length) names = lv.slice(lv.length - fb.floors.length).map((l) => l.name); } catch (e) { names = null; } }
  const ext = (nodes) => { const v = nodes.map((i) => frameModel.nodes[i]), a = dir === 'x' ? v.map((n) => n.y) : v.map((n) => n.x); return Math.max(...a) - Math.min(...a); };
  const storeys = fb.floors.map((f, i) => ({ name: names ? names[i] : 'Floor ' + (i + 1), z: (f.z - fb.base) / 1000 - f.h / 2, h: f.h, area_m2: Math.round(f.area_m2 * 100) / 100, width_m: Math.round(ext(frameModel.nodes.map((n, k) => k).filter((k) => Math.abs(frameModel.nodes[k].z - f.z) <= 150)) / 10) / 100, mass: f.mass }));
  const T1 = fb.modes[0].period;
  return { storeys, m: fb.m, k: fb.k, T1, assumedT1: false, building: fb, notes: fb.notes, height: storeys.reduce((s, x) => s + x.h, 0), source: 'frame' };
}
