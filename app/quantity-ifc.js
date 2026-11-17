/* SPDX-License-Identifier: Apache-2.0 */
/**
 * quantity-ifc.js — the IFC quantity sets follow the project's measurement method (booklet row BK.42, session bk-measure-10).
 * No DOM. Under the CadCraft default nothing here writes anything: the writers measure as before.
 *
 * What a method changes in the file:
 *   Qto_WallBaseQuantities NetSideArea        the wall's net side area by the method (smallest opening deducted, junctions)
 *   Qto_SlabBaseQuantities NetArea, NetVolume a floor's net area by the method (smallest opening deducted)
 *   Qto_CoveringBaseQuantities NetArea        a ceiling's
 *   IfcElementQuantity.MethodOfMeasurement    the method's id on those three sets (the default leaves 'BaseQuantities')
 * GrossSideArea, GrossArea and the volumes of walls stay what the geometry is: they are not method quantities.
 *
 *   setMeasureMethod(id, own = null) → op: writes the choice (quantity-method.js) and measures every wall, floor and ceiling again
 *   requantify(w) → how many values were rewritten (all levels)
 *   requantifyWalls(w, storey, walls, host)   the pass model-walls.js regenWalls runs after every change of a level's walls
 *     (setWallQuantityHook), so a wall's quantity is right after any edit while a method other than the default is in force
 */
import { readWalls, setWallQuantityHook } from './model-walls.js';
import { readLevels } from './model-levels.js';
import { readDerived, storeyLoops } from './model-slabs.js';
import { readDrawnFloors } from './model-floors.js';
import { loopAt, area as loopArea } from './model-rooms.js';
import { op } from './model-ops.js';
import { val } from './ifc-util.js';
import { wallSide, outlineArea } from './quantities/rules.js';
import { junctionCuts, cutFor } from './quantities/junctions.js';
import { isDefault, methodRule } from './quantities/methods.js';
import { readMethodSetting, writeMethodSetting, MM } from './quantity-method.js';

const SETS = ['Qto_WallBaseQuantities', 'Qto_SlabBaseQuantities', 'Qto_CoveringBaseQuantities'];
const OPENING_PSET = 'CadCraft_Opening';

/** One quantity of a set as the file holds it (mm² / mm³), or null. */
function readQty(w, id, set, name) {
  const d = w.defNamed(id, set);
  if (!d) return null;
  for (const h of d.line.Quantities || []) {
    const q = w.api.GetLine(w.mid, h.value, false);
    if (val(q?.Name) !== name) continue;
    if (q.AreaValue !== undefined && q.AreaValue !== null) return Number(val(q.AreaValue)) * 1e6;
    if (q.VolumeValue !== undefined && q.VolumeValue !== null) return Number(val(q.VolumeValue)) * 1e9;
  }
  return null;
}
/** Write the values that differ (areas to 1 mm², volumes to 1000 mm³) and name the method on the set. → values written */
function put(w, id, set, rows, methodId) {
  const d = w.defNamed(id, set);
  if (!d) return 0;
  const need = rows.filter(([name, kind, v]) => { const cur = readQty(w, id, set, name); return cur === null || Math.abs(cur - v) > (kind === 'volume' ? 1000 : 1); });
  if (need.length) w.upsertQto(id, set, need);
  const label = methodId || 'BaseQuantities';
  if (val(d.line.MethodOfMeasurement) !== label) { const q = w.touch(d.def); q.MethodOfMeasurement = w.L(label); w.write(q); }
  return need.length;
}

export function requantifyWalls(w, storey, walls, host = w.hostIndex(), setting = readMethodSetting(w), force = false) {
  const method = setting.method;
  if (isDefault(method) && !force) return 0;
  const rule = isDefault(method) ? null : methodRule(method, 'wall.side', MM);
  const cuts = rule && rule.junction !== 'centre' ? junctionCuts(walls.map((x) => ({ id: x.id, a: x.a, b: x.b, t: x.t, height: x.height, curved: !!x.bulge }))) : null;
  let n = 0;
  for (const wall of walls) {
    const gross = readQty(w, wall.id, SETS[0], 'GrossSideArea');
    if (gross === null) continue;
    const openings = [];
    for (const o of host.voids.get(wall.id) || []) {
      const q = w.readPset(o, OPENING_PSET);
      if (!q) continue;
      const ow = Number(q.Width) * w.unitMm, oh = Number(q.Height) * w.unitMm;
      if (ow > 0 && oh > 0) openings.push({ width: ow, height: oh });
    }
    const m = rule ? wallSide({ gross, openings, rule, cut: cutFor(cuts, wall.id, rule.junction).area }) : wallSide({ gross, openings });
    n += put(w, wall.id, SETS[0], [['NetSideArea', 'area', m.net]], rule ? method.id : null);
  }
  return n;
}

export function requantify(w, force = true) {
  const setting = readMethodSetting(w), method = setting.method;
  const def = isDefault(method), id = def ? null : method.id;
  let n = 0;
  const host = w.hostIndex();
  const levels = readLevels(w);
  for (const l of levels) { const walls = readWalls(w, l.id); if (walls.length) n += requantifyWalls(w, l.id, walls, host, setting, force); }
  const fr = def ? null : methodRule(method, 'floor', MM), cr = def ? null : methodRule(method, 'finish.ceiling', MM);
  const D = readDerived(w), loops = new Map();
  const L = (st) => { if (!loops.has(st)) { let v = null; try { v = storeyLoops(w, st); } catch (e) { v = null; } loops.set(st, v); } return loops.get(st); };
  const abs = (p) => Math.abs(loopArea(p));
  for (const f of D.floors || []) {
    const lp = L(f.storey), loop = lp && loopAt(f.mode === 'building' ? lp.outlines : lp.rooms, f.seed);
    if (!loop) continue;
    const a = outlineArea(abs(loop.poly), (loop.holes || []).map(abs), fr).net;
    n += put(w, f.id, SETS[1], [['NetArea', 'area', a], ['NetVolume', 'volume', a * f.thickness]], id);
  }
  for (const c of D.ceilings || []) {
    const lp = L(c.storey), loop = lp && loopAt(c.mode === 'building' ? lp.outlines : lp.rooms, c.seed);
    if (!loop) continue;
    n += put(w, c.id, SETS[2], [['NetArea', 'area', outlineArea(abs(loop.poly), (loop.holes || []).map(abs), cr).net]], id);
  }
  for (const f of readDrawnFloors(w)) {
    const a = outlineArea(abs(f.points), (f.openings || []).map((o) => abs(o.points)), fr).net;
    n += put(w, f.id, SETS[1], [['NetArea', 'area', a], ['NetVolume', 'volume', a * f.thickness]], id);
  }
  return n;
}

/** Choose the project's measurement method (one undo step): the setting, then every wall, floor and ceiling measured again. */
export function setMeasureMethod(id, own = null) {
  return op((w) => {
    writeMethodSetting(w, id, own);
    const n = requantify(w, true);
    return { id: null, ids: [], counts: { quantities: n } };
  });
}

setWallQuantityHook((w, storey, walls, host) => requantifyWalls(w, storey, walls, host));
