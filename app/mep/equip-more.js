/* SPDX-License-Identifier: Apache-2.0 */
/**
 * mep/equip-more.js — more equipment kinds for BimCraft's MEP (0.9.1; suggestion #1493 "radiators, terminals", #1499 "import my
 * OEM models as a family"). No DOM. Like mep/hvac.js this is an EQUIPMENT PACK for mep/equipment.js: each kind joins that
 * module's table when this file loads, so placing, changing, removing, ports, plan symbols, Properties, runs fixed to ports, the
 * Connections check and the IFC writing are the existing ones.
 *
 *   kind        what                                   IFC4 occurrence · PredefinedType        IFC2X3 occurrence + type
 *   radiator    panel radiator on a wall               IfcSpaceHeater RADIATOR                 IfcEnergyConversionDevice + IfcSpaceHeaterType PANELRADIATOR
 *   convector   convector / panel heater at the floor  IfcSpaceHeater CONVECTOR                IfcEnergyConversionDevice + IfcSpaceHeaterType CONVECTOR
 *   oem         a manufacturer's family (role          the class the family stands for (mep/oem-families.js EQUIP_CLASSES:
 *               "equipment", mep/oem-families.js)      valve, pump, tank, unitary equipment, space heater, boiler, fan, air terminal)
 * (Air handler, diffuser and grille were already kinds of mep/equipment.js: IfcUnitaryEquipment AIRHANDLER, IfcAirTerminal
 * DIFFUSER / GRILLE.)
 *
 * The radiator and the convector are GENERIC bodies sized by typed values (no maker's data, no heat output): a box with a flow
 * connection at one end and a return at the other, heating water (system hhw) by default. Origin: the middle of the back at
 * the bottom; `z` puts that above the level (a radiator starts at 150 mm).
 */
import { EQUIPMENT, EQUIPMENT_KINDS, FIELD_CHECKS, npsOd } from './equipment.js';
import { familyById, meshBox, planHull, EQUIP_CLASSES } from './oem-families.js';

const refuse = (key, fill) => { throw Object.assign(new Error(key), { key, fill }); };
const box = (x0, y0, z0, x1, y1, z1) => ({ t: 'box', a: [Math.min(x0, x1), Math.min(y0, y1), Math.min(z0, z1)], b: [Math.max(x0, x1), Math.max(y0, y1), Math.max(z0, z1)] });
const cyl = (p0, p1, r) => ({ t: 'cyl', p0, p1, r });
const rect = (x0, y0, x1, y1) => ({ type: 'poly', layer: '0', color: null, pts: [[x0, y0], [x1, y0], [x1, y1], [x0, y1]], closed: true });
const pipe = (name, system, direction, nps, at, axis) => ({ name, kind: 'pipe', system, direction, shape: 'round', size: npsOd(nps), nominal: nps, at, axis });

export const MORE = {
  radiator: {
    cls: ['IFCSPACEHEATER', 'IFCSPACEHEATERTYPE', 'RADIATOR', 'IFCENERGYCONVERSIONDEVICE', 'IFCSPACEHEATERTYPE', 'PANELRADIATOR'], category: 'mechanical/equipment', z: 150,
    fields: [['length', 'len', 1000], ['height', 'len', 600], ['depth', 'len', 100], ['size', 'nps', '1/2'], ['system', 'sys:pipe', 'hhw']],
    build(v) {
      const L = v.length, H = v.height, D = v.depth, od = npsOd(v.size);
      if (od * 2 > H || od > D) refuse('mep.eq.err.fit');
      // the panel stands 30 mm off the wall behind it (y = 0 is the wall face); flow in at the top of one end, return out at the bottom of the other
      const y0 = 30, yc = y0 + D / 2, zt = H - Math.max(40, od), zb = Math.max(40, od);
      return {
        w: L + 80, d: D + y0, h: H,
        solids: [box(-L / 2, y0, 0, L / 2, y0 + D, H), cyl([-L / 2, yc, zt], [-L / 2 - 40, yc, zt], od / 2), cyl([L / 2, yc, zb], [L / 2 + 40, yc, zb], od / 2)],
        plan: [rect(-L / 2, y0, L / 2, y0 + D)],
        ports: [pipe('flow', v.system, 'in', v.size, [-L / 2 - 40, yc, zt], [-1, 0, 0]), pipe('return', v.system, 'out', v.size, [L / 2 + 40, yc, zb], [1, 0, 0])],
      };
    },
  },
  convector: {
    cls: ['IFCSPACEHEATER', 'IFCSPACEHEATERTYPE', 'CONVECTOR', 'IFCENERGYCONVERSIONDEVICE', 'IFCSPACEHEATERTYPE', 'CONVECTOR'], category: 'mechanical/equipment', z: 0,
    fields: [['length', 'len', 1200], ['height', 'len', 300], ['depth', 'len', 150], ['size', 'nps', '1/2'], ['system', 'sys:pipe', 'hhw']],
    build(v) {
      const L = v.length, H = v.height, D = v.depth, od = npsOd(v.size);
      if (od * 2 > H || od > D) refuse('mep.eq.err.fit');
      const yc = D / 2, zc = Math.max(50, od * 1.5);
      return {
        w: L + 80, d: D, h: H,
        solids: [box(-L / 2, 0, 0, L / 2, D, H), box(-L / 2 + 40, D * 0.2, H, L / 2 - 40, D * 0.8, H + 8), cyl([-L / 2, yc, zc], [-L / 2 - 40, yc, zc], od / 2), cyl([L / 2, yc, zc], [L / 2 + 40, yc, zc], od / 2)],
        plan: [rect(-L / 2, 0, L / 2, D)],
        ports: [pipe('flow', v.system, 'in', v.size, [-L / 2 - 40, yc, zc], [-1, 0, 0]), pipe('return', v.system, 'out', v.size, [L / 2 + 40, yc, zc], [1, 0, 0])],
      };
    },
  },
  // a manufacturer's family placed as equipment: its own mesh and the ports its family was given
  oem: {
    cls: EQUIP_CLASSES.valve, typeClasses: [...new Set(Object.values(EQUIP_CLASSES).flatMap((c) => [c[1], c[4]]))], category: 'mechanical/equipment',
    fields: [['family', 'fam', '']],
    clsOf: (v) => EQUIP_CLASSES[familyById(v.family)?.base] || EQUIP_CLASSES.valve,
    build(v) {
      const f = familyById(v.family);
      if (!f) refuse('mep.oem.err.gone');
      const b = meshBox(f.body);
      return {
        w: b.max[0] - b.min[0], d: b.max[1] - b.min[1], h: b.max[2] - b.min[2], mesh: f.body, solids: [],
        plan: [{ type: 'poly', layer: '0', color: null, pts: planHull(f.body), closed: true }],
        ports: f.ports.map((p) => ({ name: p.name, kind: p.kind, system: p.system, direction: p.direction, shape: p.shape, size: p.size, ...(p.h ? { h: p.h } : {}), ...(p.nominal ? { nominal: p.nominal } : {}), at: [p.x, p.y, p.z], axis: p.axis.slice() })),
      };
    },
  },
};
export const MORE_KINDS = Object.keys(MORE);
/** Add the kinds to the MEP equipment table (once). */
export function registerMore() {
  FIELD_CHECKS.fam = (v) => { const f = familyById(v); return !!f && f.role === 'equipment'; };
  for (const k of MORE_KINDS) { EQUIPMENT[k] = MORE[k]; if (!EQUIPMENT_KINDS.includes(k)) EQUIPMENT_KINDS.push(k); }
  return MORE_KINDS;
}
registerMore();
