/* SPDX-License-Identifier: Apache-2.0 */
/**
 * acoustics-model.js — acoustics.js on a BimCraft model (0.8 EG.49, session bim-sim_PART_2). No DOM: bin/test-bimcraft.mjs --acoustics runs it in Node.
 *
 *   acousticsRooms(ed, settings) → [{ id, name, level, levelName, area_m2, height_m, volume_m3, at, spec, res, surfaces }]
 *        settings = { env?: { T, RH, p }, defaults?: { floor, wall, ceiling }, rooms?: { [roomId]: { floor, wall, ceiling, extra?: [{ name, a: [6] }] } } }
 *   DEFAULT_FINISHES = { floor: 'wood-floor', wall: 'gypsum', ceiling: 'ceiling-board' }   a plain furnished house; the person changes them per room
 *
 * Each room (the walls' inner outline) is a box of its floor area and the height of the lowest wall on its level (or the ceiling's height when a
 * ceiling is drawn in it): floor, ceiling, and the walls' area less the doors and windows in them, which count as a wood door and window glass.
 * Finishes are the person's choice (the model does not say what is on a wall). The result is acoustics.js reverb() for each room.
 */
import { namedRooms } from './people-model.js';
import { readWalls, wallHeight } from './model-walls.js';
import { readOpenings } from './model-openings.js';
import { readDerived } from './model-slabs.js';
import { reverb, MATERIALS, PERSON_ABSORPTION, furnishingFor } from './acoustics.js';
import { ids } from './ifc-util.js';

/** The model's material names (project-materials.js) → this file's absorption keys; a material not listed here (siding, framing, insulation …) is not a finish. */
export const MODEL_FINISH = { gypsum: 'gypsum', plaster: 'plaster', render: 'plaster', brick: 'brick', cmu: 'concrete', block: 'concrete', concrete: 'concrete' };
export const DEFAULT_FINISHES = { floor: 'wood-floor', wall: 'gypsum', ceiling: 'ceiling-board' };

function ringDist(poly, x, y) {
  let d = Infinity;
  for (let i = 0; i < poly.length; i++) {
    const a = poly[i], b = poly[(i + 1) % poly.length], dx = b[0] - a[0], dy = b[1] - a[1], l2 = dx * dx + dy * dy;
    const t = l2 ? Math.max(0, Math.min(1, ((x - a[0]) * dx + (y - a[1]) * dy) / l2)) : 0;
    d = Math.min(d, Math.hypot(x - a[0] - dx * t, y - a[1] - dy * t));
  }
  return d;
}
const perimeter = (p) => { let s = 0; for (let i = 0; i < p.length; i++) s += Math.hypot(p[(i + 1) % p.length][0] - p[i][0], p[(i + 1) % p.length][1] - p[i][1]); return s; };
const inPoly = (poly, x, y) => { let c = false; for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) { const a = poly[i], b = poly[j]; if ((a[1] > y) !== (b[1] > y) && x < ((b[0] - a[0]) * (y - a[1])) / (b[1] - a[1]) + a[0]) c = !c; } return c; };

const segDist = (x, y, a, b) => { const dx = b[0] - a[0], dy = b[1] - a[1], l2 = dx * dx + dy * dy, t = l2 ? Math.max(0, Math.min(1, ((x - a[0]) * dx + (y - a[1]) * dy) / l2)) : 0; return Math.hypot(x - a[0] - dx * t, y - a[1] - dy * t); };

/** The finish a wall shows to a room, from its type's layers (exterior first): the inside layer of an outside wall, the last layer of an inside one. null = no finish we know. */
function wallFinish(wall) {
  const layers = wall.assembly?.layers;
  if (!layers?.length) return null;
  return MODEL_FINISH[layers[layers.length - 1].mat] || null;
}

/** Furniture in the model: [{ name, storey, x, y }] in the storey's plan (mm), from IfcFurniture and IfcFurnishingElement. */
export function furnishings(w) {
  const out = [], so = w.storeyOf();
  for (const cls of ['IFCFURNITURE', 'IFCFURNISHINGELEMENT']) {
    let list = [];
    try { list = ids(w.api, w.mid, cls); } catch (e) { list = []; }
    for (const id of list) {
      const storey = so.get(id), line = w.api.GetLine(w.mid, id, false), st = storey ? w.api.GetLine(w.mid, storey, false) : null;
      if (!st?.ObjectPlacement || !line.ObjectPlacement) continue;
      try { const M = w.relMatrix(st.ObjectPlacement.value, line.ObjectPlacement.value); out.push({ id, name: (line.Name && line.Name.value) || (line.ObjectType && line.ObjectType.value) || '', storey, x: M[12], y: M[13] }); } catch (e) { /* a placement we cannot read */ }
    }
  }
  return out;
}

export function acousticsRooms(ed, settings = {}) {
  const { w, levels, rooms } = namedRooms(ed), walls = readWalls(w), ops = readOpenings(w, null, walls), ceilings = readDerived(w).ceilings;
  const byGuid = new Map(walls.map((x) => [x.guid, x]));
  const finish = { ...DEFAULT_FINISHES, ...(settings.defaults || {}) }, fromModel = settings.fromModel !== false, floors = fromModel ? readDerived(w).floors : [], things = settings.furnishings === false ? [] : furnishings(w);
  const out = [];
  for (const r of rooms) {
    const lv = levels.find((l) => l.guid === r.level);
    const mine = walls.filter((x) => x.storey === lv.id);
    const ceil = ceilings.find((c) => c.storey === lv.id && c.seed && inPoly(r.poly, c.seed[0], c.seed[1]) && c.height > 1500);
    const hmm = ceil ? ceil.height : (mine.length ? Math.min(...mine.map((x) => wallHeight(x, levels))) : lv.height || 2700), H = hmm / 1000;
    const mine2 = settings.rooms?.[r.id] || {};
    // 0.8 EG.49 (bim-sim_PART_3): what the model says is on each surface; the person's pick for a room wins, then the model, then the default
    const src = { floor: 'default', wall: 'default', ceiling: 'default' };
    const set = { ...finish };
    if (fromModel) {
      const fl = floors.find((f) => f.storey === lv.id && f.seed && inPoly(r.poly, f.seed[0], f.seed[1])) || floors.find((f) => f.storey === lv.id && f.mode === 'building');
      if (fl && !settings.defaultsOnly) { set.floor = fl.kind === 'concrete' ? 'concrete' : 'wood-floor'; src.floor = 'model'; }
      if (ceil) { set.ceiling = ceil.pattern ? 'ceiling-tile' : 'ceiling-board'; src.ceiling = 'model'; }
    }
    for (const k of ['floor', 'wall', 'ceiling']) if (mine2[k]) { set[k] = mine2[k]; src[k] = 'picked'; }
    const floor = r.area_m2, per = perimeter(r.poly) / 1000;
    let glass = 0, door = 0;
    for (const o of ops) {
      const wall = byGuid.get(o.wallGuid);
      if (!wall || wall.storey !== lv.id) continue;
      const [ax, ay, bx, by] = [wall.a[0], wall.a[1], wall.b[0], wall.b[1]], t = (o.offset + o.width / 2) / Math.max(1, wall.len), x = ax + (bx - ax) * t, y = ay + (by - ay) * t;
      if (ringDist(r.poly, x, y) > wall.t / 2 + 60) continue;
      const a = (o.width / 1000) * (o.height / 1000);
      if (o.kind === 'window') glass += a; else door += a;
    }
    // each edge of the room is the wall that stands along it; its inside layer is the finish (a wall we cannot read counts as the default)
    const wallArea = new Map();
    if (fromModel && !mine2.wall) {
      for (let i = 0; i < r.poly.length; i++) {
        const p0 = r.poly[i], p1 = r.poly[(i + 1) % r.poly.length], mx = (p0[0] + p1[0]) / 2, my = (p0[1] + p1[1]) / 2, len = Math.hypot(p1[0] - p0[0], p1[1] - p0[1]) / 1000;
        let best = null, bd = Infinity;
        for (const wl of mine) { const d = segDist(mx, my, wl.a, wl.b); if (d < bd && d <= wl.t / 2 + 80) { bd = d; best = wl; } }
        const key = (best && wallFinish(best)) || set.wall;
        wallArea.set(key, (wallArea.get(key) || 0) + len * H);
      }
      if ([...wallArea.keys()].some((k) => k !== finish.wall) || wallArea.size > 1) src.wall = 'model';
    } else wallArea.set(set.wall, per * H);
    const grossWalls = [...wallArea.values()].reduce((s2, v) => s2 + v, 0), netWalls = Math.max(0, grossWalls - glass - door), keep = grossWalls > 0 ? netWalls / grossWalls : 0;
    const surfaces = [{ name: 'floor', key: set.floor, area_m2: floor }, { name: 'ceiling', key: set.ceiling, area_m2: floor }];
    const wkeys = [...wallArea.entries()];
    wkeys.forEach(([key, a2]) => surfaces.push({ name: wkeys.length > 1 ? 'walls:' + key : 'walls', key, area_m2: a2 * keep }));
    if (glass > 0) surfaces.push({ name: 'windows', key: 'glass', area_m2: glass });
    if (door > 0) surfaces.push({ name: 'doors', key: 'door', area_m2: door });
    // people and furniture: sabins added to the room (the person's count per room; the model's furniture by name)
    const extra = [...(mine2.extra || [])];
    const people = Math.max(0, Math.floor(Number(mine2.people ?? settings.people?.[r.id] ?? 0)) || 0);
    if (people) extra.push({ name: 'people', n: people, a: PERSON_ABSORPTION.map((v) => v * people) });
    const pieces = things.filter((f) => f.storey === lv.id && inPoly(r.poly, f.x, f.y));
    if (pieces.length) {
      const sum = [0, 0, 0, 0, 0, 0]; let n = 0;
      for (const f of pieces) { const k = furnishingFor(f.name); if (k) { n++; k.a.forEach((v, i) => { sum[i] += v; }); } }
      if (n) extra.push({ name: 'furniture', n, a: sum });
    }
    const xs = r.poly.map((p) => p[0]), ys = r.poly.map((p) => p[1]), dims = [(Math.max(...xs) - Math.min(...xs)) / 1000, (Math.max(...ys) - Math.min(...ys)) / 1000, H].sort((a, b) => a - b);
    const spec = { volume_m3: floor * H, surfaces, extra, aspect: dims[2] / Math.max(dims[0], 0.1), uneven: false };
    const unknown = surfaces.find((s) => !MATERIALS[s.key]);
    out.push({ id: r.id, name: r.name, level: r.level, levelName: r.levelName, area_m2: Math.round(floor * 100) / 100, height_m: Math.round(H * 100) / 100, volume_m3: Math.round(floor * H * 10) / 10,
      finishSource: src, people, at: (r.centroid || [(Math.min(...xs) + Math.max(...xs)) / 2, (Math.min(...ys) + Math.max(...ys)) / 2]).map(Math.round), poly: r.poly, set, spec, surfaces,
      res: unknown ? { ok: false, reason: 'nomaterial', key: unknown.key } : reverb(spec, settings.env || {}),
      box: { lx: (Math.max(...xs) - Math.min(...xs)) / 1000, ly: (Math.max(...ys) - Math.min(...ys)) / 1000, h: H } });
  }
  return out;
}
