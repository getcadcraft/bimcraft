/* SPDX-License-Identifier: Apache-2.0 */
/**
 * host.js — the Energy code check's adapter for BimCraft (copied from tools/energy-code/src/energy-code/hosts/bimcraft.js by
 * tools/energy-code/sync.mjs). 0.11 T24.6. Plain facts out of the open model, in the pack's units (a California pack: ft²):
 *
 *   postcode   IfcBuilding's or IfcSite's postal address, when the file has one
 *   cfa        the area inside the building's outline at the outside faces of its exterior walls, summed over the levels that have walls
 *   walls      one row per exterior wall TYPE: its name, the net area of its walls (openings taken out) and a guess of its framing from the
 *              thickness of its stud layer (89 mm = 2x4, 140 mm = 2x6, 184 mm = 2x8); the person confirms it in the panel
 *   windows    each window in an exterior wall: width × height, the compass bearing its wall's outside face looks at (true north from the
 *              model's site), and its U-factor when the IFC has one (Pset_WindowCommon.ThermalTransmittance, W/m²K ÷ 5.678263)
 *   doors      each door in an exterior wall the same way (treated as a swinging door that is not a glazed door)
 *   faces, height, stories, perimeter   for the CBECC project file: each exterior wall's direction and whole area, the mean wall height
 *              (taken as the ceiling height), the number of levels with exterior walls, the length of the lowest level's exterior walls
 *   roofs, floors   (T24.6) how many roof elements there are (IfcRoof, and slabs typed ROOF) and how many floor slabs stand on the lowest
 *              level (typed FLOOR or BASESLAB, or not typed): the elements writeRoofU / writeFloorU give a table U-factor to
 * The bearing takes each level's plan axes as the model's own (a level turned against the model is not corrected for).
 * What the person states is kept in the drawing: CadCraft_EnergyCode on IfcProject (Settings = JSON text), one undo step.
 */
import { readWalls, buildingOutlines } from '../../model-walls.js';
import { readOpenings } from '../../model-openings.js';
import { readGeoref } from '../../ifc-geo.js';
import { ids, val } from '../../ifc-util.js';

export const PSET = 'CadCraft_EnergyCode';
const FT2 = 92903.04, U_IP = 5.678263;   // mm² in a square foot; W/m²K in one Btu/h·ft²·°F
const FRAMES = [[89, '2x4'], [140, '2x6'], [184, '2x8']];

export function framingGuess(assembly) {
  const ly = (assembly?.layers || []).find((l) => l.function === 'structure' && /stud|timber|wood|lumber|frame/i.test(String(l.mat || '')));
  if (!ly) return { framing: null, spacing: 16 };
  const hit = FRAMES.find(([mm]) => Math.abs(ly.t - mm) <= 4);
  return { framing: hit ? hit[1] : null, spacing: 16 };
}
/** Degrees clockwise from true north that a wall's outside face looks at. north = the model's north in plan, [x, y]. */
export function bearingOf(wall, north) {
  const dx = wall.b[0] - wall.a[0], dy = wall.b[1] - wall.a[1], l = Math.hypot(dx, dy);
  if (!(l > 0) || !north) return null;
  const n = wall.extSide === 'right' ? [dy / l, -dx / l] : [-dy / l, dx / l];
  const east = [north[1], -north[0]];
  return ((Math.atan2(n[0] * east[0] + n[1] * east[1], n[0] * north[0] + n[1] * north[1]) * 180 / Math.PI) + 360) % 360;
}
function postcode(w) {
  for (const [cls, attr] of [['IFCBUILDING', 'BuildingAddress'], ['IFCSITE', 'SiteAddress']]) {
    let list = [];
    try { list = ids(w.api, w.mid, cls); } catch { list = []; }
    for (const id of list) {
      const a = w.api.GetLine(w.mid, id, false)?.[attr]?.value;
      const code = a ? String(val(w.api.GetLine(w.mid, a, false)?.PostalCode) ?? '').trim() : '';
      if (code) return code;
    }
  }
  return null;
}
function uOf(w, id, set) {
  let ps = null;
  try { ps = w.readPset(id, set); } catch { ps = null; }
  const x = Number(ps?.ThermalTransmittance);
  return x > 0 ? x / U_IP : null;
}

const listOf = (w, cls) => { try { return ids(w.api, w.mid, cls); } catch { return []; } };
const pre = (w, id) => String(val(w.api.GetLine(w.mid, id, false)?.PredefinedType) ?? '').toUpperCase();
/** T24.6: the roof elements: [[id, pset]] (IfcRoof → Pset_RoofCommon, a slab typed ROOF → Pset_SlabCommon), what Heating and cooling loads read. */
export function roofTargets(w) {
  return [...listOf(w, 'IFCROOF').map((id) => [id, 'Pset_RoofCommon']), ...listOf(w, 'IFCSLAB').filter((id) => pre(w, id) === 'ROOF').map((id) => [id, 'Pset_SlabCommon'])];
}
/** T24.6: the floor slabs of the lowest level that holds any: slabs typed FLOOR or BASESLAB, or not typed (a LANDING, a driveway or walk typed
 *  USERDEFINED, and a ROOF are not floors of the house): [[id, 'Pset_SlabCommon']]. */
const FLOOR_TYPES = new Set(['FLOOR', 'BASESLAB', 'NOTDEFINED', '']);
export function floorTargets(w) {
  const storeyOf = new Map(), elev = new Map();
  for (const sid of listOf(w, 'IFCBUILDINGSTOREY')) elev.set(sid, Number(val(w.api.GetLine(w.mid, sid, false)?.Elevation)) || 0);
  for (const rid of listOf(w, 'IFCRELCONTAINEDINSPATIALSTRUCTURE')) { const r = w.api.GetLine(w.mid, rid, false), st = r?.RelatingStructure?.value; if (!elev.has(st)) continue; for (const h of r.RelatedElements || []) storeyOf.set(h.value, st); }
  const slabs = listOf(w, 'IFCSLAB').filter((id) => FLOOR_TYPES.has(pre(w, id)) && storeyOf.has(id));
  if (!slabs.length) return [];
  const low = Math.min(...slabs.map((id) => elev.get(storeyOf.get(id))));
  return slabs.filter((id) => elev.get(storeyOf.get(id)) === low).map((id) => [id, 'Pset_SlabCommon']);
}

export function readModel(w) {
  const walls = readWalls(w), ext = walls.filter((x) => x.assembly?.exterior), extIds = new Set(ext.map((x) => x.id));
  const geo = readGeoref(w.api, w.mid), north = geo && geo.kind === 'site' ? geo.north : null;
  const opens = readOpenings(w, null, walls).filter((o) => extIds.has(o.wall));
  const byWall = new Map(walls.map((x) => [x.id, x]));
  const cut = new Map();
  for (const o of opens) cut.set(o.wall, (cut.get(o.wall) || 0) + o.width * o.height);
  const types = new Map();
  for (const x of ext) {
    const t = types.get(x.typeKey) || { key: x.typeKey, name: x.assembly?.name || x.typeName || x.typeKey, area: 0, guess: framingGuess(x.assembly) };
    t.area += Math.max(0, x.len * (x.height || 0) - (cut.get(x.id) || 0)) / FT2;
    types.set(x.typeKey, t);
  }
  let cfa = 0;
  for (const st of new Set(ext.map((x) => x.storey))) for (const o of buildingOutlines(walls.filter((x) => x.storey === st))) cfa += Math.abs(o.area) / FT2;
  const FT = 304.8;
  const row = (o, set) => ({ name: o.mark || o.name || o.typeName || '', area: (o.width * o.height) / FT2, w: o.width / FT, h: o.height / FT, wallKey: byWall.get(o.wall).typeKey, bearing: bearingOf(byWall.get(o.wall), north), u: uOf(w, o.id, set) });
  // for the project file (lib/cbecc.js): each exterior wall with the way it faces and its whole area, the mean wall height, the levels, the
  // length of the lowest level's exterior walls
  const faces = ext.filter((x) => x.len > 0 && x.height > 0).map((x) => ({ key: x.typeKey, bearing: bearingOf(x, north), gross: (x.len * x.height) / FT2 }));
  const levels = [...new Set(ext.map((x) => x.storey))], lowest = levels.slice().sort((p, q) => (ext.find((x) => x.storey === p)?.z ?? 0) - (ext.find((x) => x.storey === q)?.z ?? 0))[0];
  const run = ext.reduce((s, x) => s + x.len, 0), height = run > 0 ? ext.reduce((s, x) => s + x.len * (x.height || 0), 0) / run / FT : null;
  return {
    postcode: postcode(w), cfa: cfa > 0 ? cfa : null, north: !!north, faces, height, stories: levels.length || 1, perimeter: ext.filter((x) => x.storey === lowest).reduce((s, x) => s + x.len, 0) / FT,
    walls: [...types.values()].filter((t) => t.area > 0), roofs: roofTargets(w).length, floors: floorTargets(w).length,
    windows: opens.filter((o) => o.kind === 'window').map((o) => ({ ...row(o, 'Pset_WindowCommon'), shgc: null })),
    doors: opens.filter((o) => o.kind === 'door').map((o) => row(o, 'Pset_DoorCommon')),
  };
}

export function makeHost(api) {
  let writing = false;
  async function writeTo(targets, si) {
    if (!api.model.current()) throw new Error('no model');
    if (!(Number(si) > 0 && Number(si) <= 20)) throw new Error('U-factor out of range');
    let n = 0;
    writing = true;
    try { await api.model.write(api.t('ec.bim.u.label'), (w) => { for (const [id, set] of targets(w)) { w.upsertPset(id, set, [['ThermalTransmittance', 'IFCTHERMALTRANSMITTANCEMEASURE', Number(si)]]); n++; } }); } finally { writing = false; }
    return n;
  }
  const project = (w) => { const v = w.api.GetLineIDsWithType(w.mid, w.W.IFCPROJECT); return v.size() ? v.get(0) : null; };
  return {
    id: 'bimcraft',
    writing: () => writing,
    async read() { if (!api.model.current()) return { postcode: null, cfa: null, north: false, walls: [], windows: [], doors: [], roofs: 0, floors: 0 }; return api.model.read(readModel); },
    /** T24.6: the wall type's U-factor (W/m²K, from the code's table) into each exterior wall of that type: Pset_WallCommon.ThermalTransmittance, which
     *  Heating and cooling loads (energy-bim.js uValues) read before the wall's layers. One undo step. Returns how many walls were written. */
    async writeWallU(typeKey, si) {
      if (!api.model.current()) throw new Error('no model');
      if (!(Number(si) > 0 && Number(si) <= 20)) throw new Error('U-factor out of range');
      let n = 0;
      writing = true;
      try { await api.model.write(api.t('ec.bim.u.label'), (w) => { for (const x of readWalls(w)) if (x.assembly?.exterior && x.typeKey === typeKey) { w.upsertPset(x.id, 'Pset_WallCommon', [['ThermalTransmittance', 'IFCTHERMALTRANSMITTANCEMEASURE', Number(si)]]); n++; } }); } finally { writing = false; }
      return n;
    },
    /** T24.6: the ceiling's table U-factor into every roof element, the raised floor's into the lowest level's floor slabs (ThermalTransmittance in
     *  the element's own Pset_<Class>Common, which Heating and cooling loads read before the layers). One undo step each. → how many were written. */
    async writeRoofU(si) { return writeTo(roofTargets, si); },
    async writeFloorU(si) { return writeTo(floorTargets, si); },
    settings: {
      read: async () => (api.model.current() ? api.model.read((w) => { const p = project(w); return p === null ? null : (w.readPset(p, PSET) || {}).Settings ?? null; }) : null),
      async write(json) {
        if (!api.model.current()) throw new Error('no model');
        writing = true;
        try { await api.model.write(api.t('ec.bim.keep'), (w) => { const p = project(w); if (p !== null) w.upsertPset(p, PSET, [['Settings', 'IFCTEXT', json]]); }); } finally { writing = false; }
      },
    },
  };
}
