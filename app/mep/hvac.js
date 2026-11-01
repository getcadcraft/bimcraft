/* SPDX-License-Identifier: Apache-2.0 */
/**
 * mep/hvac.js — split, multi-split / VRF and fan-coil equipment for BimCraft's MEP (0.8 SU.888, session `sx-mep`; suggestion
 * #888 "MEP modeler, fan coil tubes mono and multi split duct"). No DOM: tools/bimcraft-test/hvac-test.mjs runs it in Node.
 *
 * This is an EQUIPMENT PACK for the 0.7 MEP model (mep/equipment.js, LC.9): each kind below is added to that module's
 * EQUIPMENT table when this file loads (bimcraft.js imports it), so placing, changing, removing, ports, plan symbols, Properties,
 * runs fixed to ports, the Connections check, the add-on API and the IFC writing are the existing ones — nothing parallel.
 *
 *   kind            what                                  IFC4 occurrence / type PredefinedType (ObjectType)        IFC2X3
 *   split-wall      wall-mounted indoor unit              IfcUnitaryEquipment SPLITSYSTEM ("Split indoor unit, wall-mounted")  IfcEnergyConversionDevice + IfcUnitaryEquipmentType SPLITSYSTEM
 *   split-cassette  ceiling cassette indoor unit          IfcUnitaryEquipment SPLITSYSTEM ("Split indoor unit, ceiling cassette")  (same)
 *   split-ducted    ducted (concealed) indoor unit        IfcUnitaryEquipment SPLITSYSTEM ("Split indoor unit, ducted")  (same)
 *   split-outdoor   single-split outdoor unit             IfcUnitaryEquipment SPLITSYSTEM ("Split outdoor unit")  (same)
 *   vrf-outdoor     multi-split / VRF outdoor unit        IfcUnitaryEquipment SPLITSYSTEM ("VRF outdoor unit")  (same)
 *   refnet          branch joint of a VRF line            IfcPipeFitting JUNCTION ("Refnet joint")             IfcFlowFitting + IfcPipeFittingType JUNCTION
 *   fancoil         fan coil unit, 2-pipe or 4-pipe       IfcUnitaryEquipment AIRHANDLER ("Fan coil unit")     IfcEnergyConversionDevice + IfcUnitaryEquipmentType AIRHANDLER
 * IFC4 has no fan-coil class or predefined type (checked against IfcOpenShell's IFC4 / IFC4X3 schemas: IfcUnitaryEquipmentTypeEnum
 * = AIRHANDLER, AIRCONDITIONINGUNIT, DEHUMIDIFIER, SPLITSYSTEM, ROOFTOPUNIT); a fan coil is a fan, a coil and a filter for one
 * zone, which is the AIRHANDLER definition. USERDEFINED was not used: the type would need ElementType, which equipment.js leaves
 * empty. Indoor and outdoor units of split and VRF systems are SPLITSYSTEM; ObjectType says which one.
 *
 * Ports (equipment.js's port shape): refrigerant liquid line `ref-liquid` (system refl) and gas line `ref-gas` (refg), both
 * direction `both` (a heat pump runs either way), ACR copper by outside diameter (mep/tables-acr.js: size = OD in mm, nominal =
 * the inch name, so an ACR run of that size matches); condensate `drain` (system cond, out, a steel/PVC pipe size); chilled /
 * heating water `coil-in`/`coil-out`, `heat-in`/`heat-out`; ducts `supply` (out) / `return` (in).
 *
 * LINE SETS. A unit's refrigerant connections, a refnet's ends and the line set between them are sized from ONE table by the
 * cooling capacity the line carries (kW): LINESET_DEFAULT. **Those are typical example values for R410A / R32 equipment, not
 * any maker's data**: a maker's installation manual decides (pipe lengths and height differences change them too). A field set
 * to `auto` takes the table; any field can be set to a tube size instead. The table can be replaced for a model
 * (setLineSetTable; mep/hvac-ui.js keeps the person's table in the file, CadCraft_HvacLineSets on IfcProject).
 *
 *   HVAC (the kinds) · HVAC_KINDS · registerHvac() (idempotent; runs on import) · LINESET_DEFAULT · lineSetTable() ·
 *   setLineSetTable(rows) · cleanLineSetTable(rows) → { rows } | { error } · lineSetFor(kw, rows?) → { liquid, gas, upTo } (inch names)
 *   CAPACITIES · OD_CHOICES · odChoice(name) · roleOf(kind) → 'indoor' | 'outdoor' | 'refnet' | 'water' | null
 *   planLineSet(a, b, { free }) → { runs: [{ system, mat, cls, size, points, ends }], error? }   a, b = readEquipment rows
 *   routeBetween(a, axA, b, axB, lift) → points | null (orthogonal, never doubling back) · chainOps(ops) → one op (one undo step)
 */
import { EQUIPMENT, EQUIPMENT_KINDS, npsOd, portsAt } from './equipment.js';
import { ACR, ACR_MM, acrSizeOfMm, acrSizesFor } from './tables-acr.js';
import { undoJournal } from '../ifc-place.js';

const refuse = (key, fill) => { throw Object.assign(new Error(key), { key, fill }); };

// ---- the line set table (typical values; see the header) ----
/** By the capacity a line carries (kW, cooling): up to `upTo`, liquid and gas tube (ACR, inch OD names). */
export const LINESET_DEFAULT = Object.freeze([
  { upTo: 2.8, liquid: '1/4', gas: '3/8' }, { upTo: 5.6, liquid: '1/4', gas: '1/2' }, { upTo: 16, liquid: '3/8', gas: '5/8' },
  { upTo: 22.4, liquid: '3/8', gas: '3/4' }, { upTo: 33, liquid: '3/8', gas: '7/8' }, { upTo: 47, liquid: '1/2', gas: '1-1/8' },
  { upTo: 71, liquid: '5/8', gas: '1-1/8' }, { upTo: 104, liquid: '3/4', gas: '1-3/8' }, { upTo: 180, liquid: '3/4', gas: '1-5/8' },
].map(Object.freeze));
let TABLE = LINESET_DEFAULT;
export const lineSetTable = () => TABLE.map((r) => ({ ...r }));
/** A table someone typed: rows with a capacity and two tube sizes, capacities rising. → { rows } or { error: key, row }. */
export function cleanLineSetTable(rows) {
  if (!Array.isArray(rows) || !rows.length || rows.length > 40) return { error: 'sx.su888.table.err.rows' };
  const out = [];
  for (let i = 0; i < rows.length; i++) {
    const r = rows[i] || {}, upTo = Number(r.upTo);
    if (!(upTo > 0 && upTo <= 2000)) return { error: 'sx.su888.table.err.kw', row: i + 1 };
    if (out.length && !(upTo > out[out.length - 1].upTo)) return { error: 'sx.su888.table.err.order', row: i + 1 };
    if (!ACR[r.liquid] || !ACR[r.gas]) return { error: 'sx.su888.table.err.size', row: i + 1 };
    out.push({ upTo: Math.round(upTo * 100) / 100, liquid: String(r.liquid), gas: String(r.gas) });
  }
  return { rows: out };
}
/** Use this table from now on (null = the default). Throws the clean-up's key on a bad table. */
export function setLineSetTable(rows) {
  if (!rows) { TABLE = LINESET_DEFAULT; return lineSetTable(); }
  const c = cleanLineSetTable(rows);
  if (c.error) refuse(c.error, { row: c.row });
  TABLE = c.rows;
  return lineSetTable();
}
export function lineSetFor(kw, rows = TABLE) {
  const k = Number(kw);
  const r = rows.find((x) => k <= x.upTo + 1e-9) || rows[rows.length - 1];
  return { liquid: r.liquid, gas: r.gas, upTo: r.upTo };
}

// ---- the choices people pick from ----
/** Nominal cooling capacities offered (kW, as text: they are choice values and language keys mep.eq.c.<kw>). */
export const CAPACITIES = ['2.0', '2.5', '3.5', '5.0', '7.1', '10.0', '12.5', '14.0', '16.0', '22.4', '28.0', '33.5', '40.0', '45.0', '50.0', '56.0', '61.5', '68.0'];
const capsTo = (lo, hi) => CAPACITIES.filter((c) => Number(c) >= lo && Number(c) <= hi);
/** Tube sizes as choice values: the metric marks ('9.52'), since a key may not hold '/'; 'auto' = the table. */
export const OD_CHOICES = ['auto', ...['1/4', '3/8', '1/2', '5/8', '3/4', '7/8', '1-1/8', '1-3/8', '1-5/8'].map((s) => ACR_MM[s])];
export const odChoice = (name) => ACR_MM[name] || null;
const ods = 'choice:' + OD_CHOICES.join(',');
const caps = (lo, hi) => 'choice:' + capsTo(lo, hi).join(',');
/** A tube size field's value → the inch name: `auto` takes the table's for that capacity and line. */
const tube = (v, kw, line) => (v === 'auto' || !v ? lineSetFor(kw)[line] : acrSizeOfMm(v));

// ---- shapes (mm), as equipment.js draws them ----
const box = (x0, y0, z0, x1, y1, z1) => ({ t: 'box', a: [Math.min(x0, x1), Math.min(y0, y1), Math.min(z0, z1)], b: [Math.max(x0, x1), Math.max(y0, y1), Math.max(z0, z1)] });
const cyl = (p0, p1, r) => ({ t: 'cyl', p0, p1, r });
const rect = (x0, y0, x1, y1) => ({ type: 'poly', layer: '0', color: null, pts: [[x0, y0], [x1, y0], [x1, y1], [x0, y1]], closed: true });
const line = (pts) => ({ type: 'poly', layer: '0', color: null, pts, closed: false });
const circle = (x, y, r) => ({ type: 'circle', layer: '0', color: null, x, y, r });
const IN = 25.4;
const acrOd = (name) => ACR[name][0] * IN;
// ports
const ref = (name, which, size, at, axis) => ({ name, kind: 'pipe', system: which === 'liquid' ? 'refl' : 'refg', direction: 'both', shape: 'round', size: acrOd(size), nominal: size, at, axis });
const water = (name, system, direction, nps, at, axis) => ({ name, kind: 'pipe', system, direction, shape: 'round', size: npsOd(nps), nominal: nps, at, axis });
const duct = (name, system, direction, w, h, at, axis) => ({ name, kind: 'duct', system, direction, shape: 'rect', size: w, h, at, axis });
/** A stub from a face out to its port, so the port is where the pipe starts. */
const stub = (p, back) => cyl(p.at.map((v, i) => v - p.axis[i] * back), p.at, p.size / 2);

/** Refrigerant ports + condensate for an indoor unit: liquid and gas side by side, condensate beside them, all facing `axis`. */
function indoorPorts(v, at, step, axis, drainAt) {
  const kw = Number(v.capacity), l = tube(v.liquidline, kw, 'liquid'), g = tube(v.gasline, kw, 'gas');
  const p = [ref('ref-liquid', 'liquid', l, at, axis), ref('ref-gas', 'gas', g, at.map((c, i) => c + step[i]), axis)];
  if (drainAt) p.push(water('drain', 'cond', 'out', v.drain, drainAt, axis));
  return p;
}
const D_FIELDS = (kw) => [['capacity', caps(...kw.range), kw.d], ['liquidline', ods, 'auto'], ['gasline', ods, 'auto']];
const SPLIT = ['IFCUNITARYEQUIPMENT', 'IFCUNITARYEQUIPMENTTYPE', 'SPLITSYSTEM', 'IFCENERGYCONVERSIONDEVICE', 'IFCUNITARYEQUIPMENTTYPE', 'SPLITSYSTEM'];

/** The kinds, in equipment.js's shape: cls, category, objectType (IFC ObjectType, file content), fields, build(v). */
export const HVAC = {
  'split-wall': {
    cls: SPLIT, category: 'mechanical/equipment', objectType: 'Split indoor unit, wall-mounted',   // i18n-ignore: IFC ObjectType (file content)
    fields: [...D_FIELDS({ range: [2, 7.1], d: '3.5' }), ['length', 'len', 900], ['depth', 'len', 230], ['height', 'len', 300], ['drain', 'nps', '1/2']],
    build(v) {
      const L = v.length, D = v.depth, H = v.height;
      if (D < 180 || H < 150 || L < 400) refuse('mep.eq.err.fit');
      // back to the wall at -y; the lines leave the right end near the back, low
      const ports = indoorPorts(v, [L / 2 + 75, -D / 2 + 40, 60], [0, 50, 0], [1, 0, 0], [L / 2 + 75, -D / 2 + 140, 35]);
      return { w: L + 75, d: D, h: H, solids: [box(-L / 2, -D / 2, 0, L / 2, D / 2, H), box(-L / 2 + 20, D / 2 - 10, 20, L / 2 - 20, D / 2, 90), ...ports.map((p) => stub(p, 75))],
        plan: [rect(-L / 2, -D / 2, L / 2, D / 2), line([[-L / 2 + 20, D / 2 - 30], [L / 2 - 20, D / 2 - 30]])], ports };
    },
  },
  'split-cassette': {
    cls: SPLIT, category: 'mechanical/equipment', objectType: 'Split indoor unit, ceiling cassette',   // i18n-ignore: IFC ObjectType (file content)
    fields: [...D_FIELDS({ range: [2.5, 14], d: '5.0' }), ['panel', 'len', 950], ['body', 'len', 840], ['height', 'len', 250], ['drain', 'nps', '3/4']],
    build(v) {
      const P = v.panel, B = v.body, H = v.height;
      if (B > P || H < 150 || B < 500) refuse('mep.eq.err.fit');
      // the panel is the face in the ceiling (the origin); the body above it; the lines leave one side near the top
      const ports = indoorPorts(v, [B / 2 + 75, -B / 4, H - 70], [0, 60, 0], [1, 0, 0], [B / 2 + 75, B / 4, H - 50]);
      return { w: P, d: P, h: H, solids: [box(-P / 2, -P / 2, 0, P / 2, P / 2, 30), box(-B / 2, -B / 2, 30, B / 2, B / 2, H), ...ports.map((p) => stub(p, 75))],
        plan: [rect(-P / 2, -P / 2, P / 2, P / 2), rect(-P * 0.3, -P * 0.3, P * 0.3, P * 0.3)], ports };
    },
  },
  'split-ducted': {
    cls: SPLIT, category: 'mechanical/equipment', objectType: 'Split indoor unit, ducted',   // i18n-ignore: IFC ObjectType (file content)
    fields: [...D_FIELDS({ range: [2.5, 28], d: '7.1' }), ['length', 'len', 1000], ['width', 'len', 700], ['height', 'len', 270],
      ['supplyW', 'len', 800], ['supplyH', 'len', 180], ['returnW', 'len', 800], ['returnH', 'len', 200], ['drain', 'nps', '3/4']],
    build(v) {
      const L = v.length, W = v.width, H = v.height;
      // air along +x: supply out of the +x face, return into the -x face; ducts no wider than the unit is deep (y is its width)
      if (Math.max(v.supplyW, v.returnW) > W + 200 || Math.max(v.supplyH, v.returnH) + 40 > H || L < 500) refuse('mep.eq.err.fit');
      const zs = H / 2;
      const ports = [duct('supply', 'supply', 'out', v.supplyW, v.supplyH, [L / 2 + 50, 0, zs], [1, 0, 0]), duct('return', 'return', 'in', v.returnW, v.returnH, [-L / 2 - 50, 0, zs], [-1, 0, 0]),
        ...indoorPorts(v, [L / 4, -W / 2 - 75, 80], [70, 0, 0], [0, -1, 0], [-L / 4, -W / 2 - 75, 40])];
      return { w: L + 100, d: W, h: H,
        solids: [box(-L / 2, -W / 2, 0, L / 2, W / 2, H), box(L / 2, -v.supplyW / 2, zs - v.supplyH / 2, L / 2 + 50, v.supplyW / 2, zs + v.supplyH / 2), box(-L / 2 - 50, -v.returnW / 2, zs - v.returnH / 2, -L / 2, v.returnW / 2, zs + v.returnH / 2), ...ports.filter((p) => p.kind === 'pipe').map((p) => stub(p, 75))],
        plan: [rect(-L / 2, -W / 2, L / 2, W / 2)], ports };
    },
  },
  'split-outdoor': {
    cls: SPLIT, category: 'mechanical/equipment', objectType: 'Split outdoor unit',   // i18n-ignore: IFC ObjectType (file content)
    fields: [...D_FIELDS({ range: [2.5, 16], d: '3.5' }), ['width', 'len', 800], ['depth', 'len', 300], ['height', 'len', 550]],
    build(v) {
      const W = v.width, D = v.depth, H = v.height;
      if (W < 400 || D < 200 || H < 300) refuse('mep.eq.err.fit');
      const kw = Number(v.capacity), l = tube(v.liquidline, kw, 'liquid'), g = tube(v.gasline, kw, 'gas');
      // service valves on the right side, low; the fan grille on the front (-y)
      const ports = [ref('ref-liquid', 'liquid', l, [W / 2 + 75, D / 4, 100], [1, 0, 0]), ref('ref-gas', 'gas', g, [W / 2 + 75, D / 4, 180], [1, 0, 0])];
      const r = Math.min(H, W) * 0.35;
      return { w: W + 75, d: D + 20, h: H, solids: [box(-W / 2, -D / 2, 0, W / 2, D / 2, H), cyl([-W / 6, -D / 2, H / 2], [-W / 6, -D / 2 - 20, H / 2], r), ...ports.map((p) => stub(p, 75))],
        plan: [rect(-W / 2, -D / 2, W / 2, D / 2), line([[-W / 6 - r, -D / 2 - 20], [-W / 6 + r, -D / 2 - 20]])], ports };
    },
  },
  'vrf-outdoor': {
    cls: SPLIT, category: 'mechanical/equipment', objectType: 'VRF outdoor unit',   // i18n-ignore: IFC ObjectType (file content)
    fields: [...D_FIELDS({ range: [22.4, 68], d: '28.0' }), ['width', 'len', 930], ['depth', 'len', 765], ['height', 'len', 1690]],
    build(v) {
      const W = v.width, D = v.depth, H = v.height;
      if (W < 600 || D < 400 || H < 800) refuse('mep.eq.err.fit');
      const kw = Number(v.capacity), l = tube(v.liquidline, kw, 'liquid'), g = tube(v.gasline, kw, 'gas');
      // top discharge (a fan guard on top); the lines leave the front (-y), low
      const ports = [ref('ref-liquid', 'liquid', l, [W / 4, -D / 2 - 75, 200], [0, -1, 0]), ref('ref-gas', 'gas', g, [W / 4 + 120, -D / 2 - 75, 200], [0, -1, 0])];
      const r = Math.min(W, D) * 0.4;
      return { w: W, d: D + 75, h: H + 80, solids: [box(-W / 2, -D / 2, 0, W / 2, D / 2, H), cyl([0, 0, H], [0, 0, H + 80], r), ...ports.map((p) => stub(p, 75))],
        plan: [rect(-W / 2, -D / 2, W / 2, D / 2), circle(0, 0, r)], ports };
    },
  },
  refnet: {
    cls: ['IFCPIPEFITTING', 'IFCPIPEFITTINGTYPE', 'JUNCTION', 'IFCFLOWFITTING', 'IFCPIPEFITTINGTYPE', 'JUNCTION'], category: 'mechanical/equipment', objectType: 'Refnet joint',   // i18n-ignore: IFC ObjectType (file content)
    fields: [['line', 'choice:liquid,gasline', 'gasline'], ['loada', caps(2, 68), '7.1'], ['loadb', caps(2, 68), '5.0'], ['insize', ods, 'auto'], ['asize', ods, 'auto'], ['bsize', ods, 'auto'], ['length', 'len', 300]],
    build(v) {
      const L = v.length, which = v.line === 'liquid' ? 'liquid' : 'gas', a = Number(v.loada), b = Number(v.loadb);
      if (L < 120) refuse('mep.eq.err.fit');
      const sIn = tube(v.insize, a + b, which), sA = tube(v.asize, a, which), sB = tube(v.bsize, b, which);
      const rIn = acrOd(sIn) / 2, rA = acrOd(sA) / 2, rB = acrOd(sB) / 2, s = Math.max(80, 3 * acrOd(sIn));
      // the centre line is at the placement's height (z = the pipe's centre); in from -x, both branches leave +x side by side
      const ports = [ref('inlet', which, sIn, [-L / 2, 0, 0], [-1, 0, 0]), ref('branch-a', which, sA, [L / 2, 0, 0], [1, 0, 0]), ref('branch-b', which, sB, [L / 2, s, 0], [1, 0, 0])];
      return { w: L, d: s + 2 * rIn, h: 2 * rIn,
        solids: [cyl([-L / 2, 0, 0], [0, 0, 0], rIn), cyl([0, 0, 0], [L / 2, 0, 0], rA), cyl([0, 0, 0], [L / 4, s, 0], rB), cyl([L / 4, s, 0], [L / 2, s, 0], rB)],
        plan: [line([[-L / 2, 0], [L / 2, 0]]), line([[0, 0], [L / 4, s], [L / 2, s]])], ports };
    },
  },
  fancoil: {
    cls: ['IFCUNITARYEQUIPMENT', 'IFCUNITARYEQUIPMENTTYPE', 'AIRHANDLER', 'IFCENERGYCONVERSIONDEVICE', 'IFCUNITARYEQUIPMENTTYPE', 'AIRHANDLER'], category: 'mechanical/equipment', objectType: 'Fan coil unit',   // i18n-ignore: IFC ObjectType (file content)
    fields: [['pipes', 'choice:2-pipe,4-pipe', '2-pipe'], ['length', 'len', 1000], ['width', 'len', 600], ['height', 'len', 270], ['supplyW', 'len', 700], ['supplyH', 'len', 150],
      ['returnW', 'len', 700], ['returnH', 'len', 200], ['coil', 'nps', '3/4'], ['coilSys', 'sys:pipe', 'chw'], ['heat', 'nps', '1/2'], ['drain', 'nps', '3/4']],
    build(v) {
      const L = v.length, W = v.width, H = v.height, four = v.pipes === '4-pipe', zs = H / 2;
      const c = npsOd(v.coil), hz = npsOd(v.heat), s = Math.max(80, 3 * Math.max(c, hz));
      if (Math.max(v.supplyW, v.returnW) > W + 200 || Math.max(v.supplyH, v.returnH) + 40 > H || (four ? 3 : 1) * s > L / 2 - 20 || s > L / 4) refuse('mep.eq.err.fit');
      // the coil connections on the -y side from the middle toward +x (in, out; then heating in, out on a 4-pipe unit), condensate toward -x
      const ports = [duct('supply', 'supply', 'out', v.supplyW, v.supplyH, [L / 2 + 50, 0, zs], [1, 0, 0]), duct('return', 'return', 'in', v.returnW, v.returnH, [-L / 2 - 50, 0, zs], [-1, 0, 0]),
        water('coil-in', v.coilSys, 'in', v.coil, [0, -W / 2 - 75, 90], [0, -1, 0]), water('coil-out', v.coilSys, 'out', v.coil, [s, -W / 2 - 75, 90], [0, -1, 0])];
      if (four) ports.push(water('heat-in', 'hhw', 'in', v.heat, [2 * s, -W / 2 - 75, 170], [0, -1, 0]), water('heat-out', 'hhw', 'out', v.heat, [3 * s, -W / 2 - 75, 170], [0, -1, 0]));
      ports.push(water('drain', 'cond', 'out', v.drain, [-L / 4, -W / 2 - 75, 30], [0, -1, 0]));
      return { w: L + 100, d: W + 75, h: H,
        solids: [box(-L / 2, -W / 2, 0, L / 2, W / 2, H), box(L / 2, -v.supplyW / 2, zs - v.supplyH / 2, L / 2 + 50, v.supplyW / 2, zs + v.supplyH / 2), box(-L / 2 - 50, -v.returnW / 2, zs - v.returnH / 2, -L / 2, v.returnW / 2, zs + v.returnH / 2), ...ports.filter((p) => p.kind === 'pipe').map((p) => stub(p, 75))],
        plan: [rect(-L / 2, -W / 2, L / 2, W / 2), line([[-L / 2, -W / 2], [L / 2, W / 2]])], ports };
    },
  },
};
export const HVAC_KINDS = Object.keys(HVAC);

/** Add the pack's kinds to the MEP equipment table (once). */
export function registerHvac() {
  for (const k of HVAC_KINDS) {
    if (!EQUIPMENT[k]) EQUIPMENT[k] = HVAC[k];
    if (!EQUIPMENT_KINDS.includes(k)) EQUIPMENT_KINDS.push(k);
  }
  return HVAC_KINDS.slice();
}
registerHvac();

export function roleOf(kind) {
  if (kind === 'split-wall' || kind === 'split-cassette' || kind === 'split-ducted') return 'indoor';
  if (kind === 'split-outdoor' || kind === 'vrf-outdoor') return 'outdoor';
  if (kind === 'refnet') return 'refnet';
  if (kind === 'fancoil') return 'water';
  return null;
}

// ---- line sets: two runs between two pieces, fixed to their ports ----
const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const len = (a) => Math.hypot(a[0], a[1], a[2]);
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const MIN_LEG = 100;   // mm: room for the elbows at both ends of a leg (ACR bends at one OD: 6–42 mm)
const OUT = 150;       // mm straight out of each port before the first turn
/** Clean a path: same points and straight-through corners dropped. */
function tidy(pts) {
  const out = [];
  for (const p of pts) if (!out.length || len(sub(p, out[out.length - 1])) > 0.5) out.push(p);
  for (let i = out.length - 2; i >= 1; i--) {
    const d1 = sub(out[i], out[i - 1]), d2 = sub(out[i + 1], out[i]);
    if (Math.abs(dot(d1, d2) - len(d1) * len(d2)) < 1e-6 * len(d1) * len(d2)) out.splice(i, 1);
  }
  return out;
}
/** A path that turns back on itself, or has an inner leg too short for two elbows, is no good. */
function sound(pts) {
  for (let i = 1; i < pts.length; i++) {
    const d = sub(pts[i], pts[i - 1]);
    if (i > 1 && i < pts.length - 1 && len(d) < MIN_LEG) return false;
    if (i > 1) { const e = sub(pts[i - 1], pts[i - 2]); if (dot(d, e) < -0.99 * len(d) * len(e)) return false; }
    // only X, Y, Z legs (ports face along an axis)
    if ([Math.abs(d[0]) > 0.5, Math.abs(d[1]) > 0.5, Math.abs(d[2]) > 0.5].filter(Boolean).length > 1) return false;
  }
  return pts.length >= 2;
}
/** An orthogonal path from port a (facing axA) to port b (facing axB): out of each port, up to a common height, across. */
export function routeBetween(a, axA, b, axB, lift = 0) {
  // two ports facing the same way: both go out to the same line first (so no short jog between them)
  const outs = [[OUT, OUT]], k = [0, 1, 2].find((i) => Math.abs(axA[i]) > 0.9);
  if (k !== undefined && Math.abs(axA[k] - axB[k]) < 1e-6) {
    const tgt = axA[k] > 0 ? Math.max(a[k], b[k]) + OUT : Math.min(a[k], b[k]) - OUT;
    outs.unshift([Math.abs(tgt - a[k]), Math.abs(tgt - b[k])]);
  }
  for (const [dA, dB] of outs) {
    const r = routeOut(a, axA, b, axB, lift, dA, dB);
    if (r) return r;
  }
  return null;
}
function routeOut(a, axA, b, axB, lift, dA, dB) {
  const A1 = a.map((v, i) => v + axA[i] * dA), B1 = b.map((v, i) => v + axB[i] * dB);
  for (const extra of [0, 300, 600]) {
    const zc = Math.max(A1[2], B1[2]) + lift + extra;
    for (const xFirst of [true, false]) {
      const mid = xFirst ? [B1[0], A1[1], zc] : [A1[0], B1[1], zc];
      const pts = tidy([a, A1, [A1[0], A1[1], zc], mid, [B1[0], B1[1], zc], B1, b]);
      if (sound(pts)) return pts.map((p) => p.map((v) => Math.round(v * 1000) / 1000));
    }
  }
  return null;
}
/** The class an ACR size is made in (annealed coil up to 1-5/8, drawn lengths above). */
const acrClassFor = (size) => (acrSizesFor('coil').includes(size) ? 'coil' : 'drawn');
/**
 * Plan the liquid and gas runs between two placed pieces (readEquipment rows): which ports pair up (an outdoor unit or the
 * branch of a refnet upstream, an indoor unit or a refnet's inlet downstream), the size (the downstream end's: a mismatch at
 * the other end is shown by the Connections check, where a reducer goes), and an orthogonal route. `free` = Set of
 * "<express id>#<port name>" not yet connected (when given, taken ports are skipped).
 * → { runs: [{ system, mat: 'acr', cls, size, points, ends: [{ eq, port }, { eq, port }] }] } or { error: language key }.
 */
export function planLineSet(a, b, { free = null } = {}) {
  const ra = roleOf(a.kind), rb = roleOf(b.kind);
  if (!['indoor', 'outdoor', 'refnet'].includes(ra) || !['indoor', 'outdoor', 'refnet'].includes(rb)) return { error: 'sx.su888.ls.err.kind' };
  if (ra === rb && ra !== 'refnet') return { error: ra === 'indoor' ? 'sx.su888.ls.err.indoor' : 'sx.su888.ls.err.outdoor' };
  const pa = portsAt(a), pb = portsAt(b);
  const ok = (e, p) => !free || free.has(e.id + '#' + p.name);
  const allowed = (eqA, rA, pA, eqB, rB, pB) => {
    if (rA === 'refnet' && rB === 'refnet') return (pA.name === 'inlet') !== (pB.name === 'inlet');
    if (rA === 'refnet') return rB === 'outdoor' ? pA.name === 'inlet' : pA.name !== 'inlet';
    if (rB === 'refnet') return rA === 'outdoor' ? pB.name === 'inlet' : pB.name !== 'inlet';
    return true;
  };
  const runs = [];
  for (const system of ['refl', 'refg']) {
    let best = null;
    for (const p of pa) for (const q of pb) {
      if (p.system !== system || q.system !== system || !ok(a, p) || !ok(b, q) || !allowed(a, ra, p, b, rb, q)) continue;
      const d = len(sub(p.at, q.at));
      if (!best || d < best.d) best = { d, p, q };
    }
    if (!best) continue;
    // downstream: the indoor unit; else the refnet whose inlet is used
    const bDown = rb === 'indoor' || (ra !== 'indoor' && rb === 'refnet' && best.q.name === 'inlet');
    const size = bDown ? best.q.nominal : best.p.nominal;
    const points = routeBetween(best.p.at, best.p.axis, best.q.at, best.q.axis, system === 'refg' ? 120 : 0);
    if (!points) return { error: 'sx.su888.ls.err.route' };
    runs.push({ system, mat: 'acr', cls: acrClassFor(size), size, points, ends: [{ eq: a.guid, port: best.p.name }, { eq: b.guid, port: best.q.name }] });
  }
  if (!runs.length) return { error: 'sx.su888.ls.err.free' };
  return { runs };
}

/** Several model ops as ONE (one undo step): each runs in turn; if one throws, the ones before are taken back. */
export function chainOps(ops) {
  return (ed) => {
    const done = [];
    try { for (const o of ops) done.push(o(ed)); } catch (e) { for (const r of done.reverse()) if (r.journal) undoJournal(ed.api, ed.mid, r.journal); throw e; }
    const created = [], before = new Map(), retyped = [];
    for (const r of done) {
      const j = r.journal || { created: [], before: new Map() };
      for (const [id, l] of j.before) if (!before.has(id) && !created.includes(id)) before.set(id, l);
      created.push(...j.created);
      if (j.retyped) retyped.push(...j.retyped);
    }
    const ids = done.flatMap((r) => r.ids || []), made = new Map(done.flatMap((r) => [...(r.made || new Map())]));
    return { id: done[0]?.id ?? null, ids, made, journal: { created, before, retyped } };
  };
}
