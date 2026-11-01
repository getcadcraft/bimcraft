/* SPDX-License-Identifier: Apache-2.0 */
/**
 * mep/equipment.js — generic MEP equipment with ports (0.7 LC.9 item 2, session `mep-07`). No DOM: bin/test-bimcraft.mjs --mep07
 * runs it in Node. Our own shapes, sized by typed values only: no maker's data (docs/spikes/bimcraft-mep.md: the no-go on makers'
 * catalogues stands; the help says "generic, sized by an engineer").
 *
 * Each piece of equipment IS a LibraryCraft item (libitem.js format 1 with `ports`, landed by `configurator` 2026-10-23):
 * equipmentItem(kind, values) builds it — body (a mesh of boxes and cylinders), footprint, params, ports — and validateItem
 * accepts it. Placed, it is written as the IFC class of its kind with its ports nested:
 *
 *   kind        IFC4 occurrence / type (PredefinedType)                 IFC2X3 occurrence + type
 *   ahu         IfcUnitaryEquipment AIRHANDLER                          IfcEnergyConversionDevice + IfcUnitaryEquipmentType
 *   fan         IfcFan (inline: NOTDEFINED)                             IfcFlowMovingDevice + IfcFanType
 *   pump        IfcPump CIRCULATOR                                      IfcFlowMovingDevice + IfcPumpType
 *   boiler      IfcBoiler WATER                                         IfcEnergyConversionDevice + IfcBoilerType
 *   heater      IfcBoiler WATER, ObjectType "Water heater"              IfcEnergyConversionDevice + IfcBoilerType
 *   terminal    IfcAirTerminalBox VARIABLEFLOWPRESSUREDEPENDANT          IfcFlowController + IfcAirTerminalBoxType
 *   diffuser    IfcAirTerminal DIFFUSER                                 IfcFlowTerminal + IfcAirTerminalType
 *   grille      IfcAirTerminal GRILLE                                   IfcFlowTerminal + IfcAirTerminalType
 *   tank        IfcTank STORAGE                                         IfcFlowStorageDevice + IfcTankType (NOTDEFINED)
 *
 * Ports: IfcDistributionPort (FlowDirection in → SINK, out → SOURCE, both → SOURCEANDSINK; PIPE / DUCT; the system's type),
 * placed in the element's own axes, facing out, nested (IFC2X3: IfcRelConnectsPortToElement), with CadCraft_Port { PortName,
 * Kind, System, Shape, Width, Height, NominalSize, Direction }. The element: its own body (not mapped from the type, so moving or
 * resizing one never touches another), CadCraft_LibraryItem (Library "cadcraft-generic") + CadCraft_Equipment (ifc-place.js's
 * sets) and CadCraft_MepEquipment { Kind, Values (JSON), X, Y, Z (mm in the storey's plan), Rotation (degrees), Tag } — the
 * element is made again from that set. It is assigned to the systems of its ports.
 *
 *   EQUIPMENT · equipmentDefaults(kind) · equipmentItem(kind, values) · portsAt(eq) (plan positions) · readEquipment(w)
 *   placeEquipment(spec) → op · changeEquipment(guid, changes) → op · removeEquipment(guids) → op
 *   writePorts(w, elementId, ports, opts) (also the add-on API's mep.addPorts)
 * Item coordinates: origin at the centre of the bottom of the body (a diffuser or grille: the centre of its face), X along its
 * length, Z up; a placement turns it about Z by `rot` degrees and puts that origin at x, y, z above the level.
 */
import { op } from '../model-ops.js';
import { ids, val, deleteLine } from '../ifc-util.js';
import { round } from '../model-write.js';
import { STEEL } from './tables.js';
import { PSETS } from '../ifc-place.js';
import { systemForKey, assignToSystem, regenMep, PIPE_SYSTEMS, DUCT_SYSTEMS } from '../mep-model.js';

export const EQ_PSET = 'CadCraft_MepEquipment';
export const PORT_PSET = 'CadCraft_Port';
const IN = 25.4;
const D2R = Math.PI / 180;
const refuse = (key, fill) => { throw Object.assign(new Error(key), { key, fill }); };
/** A pipe port's OD (mm) for a nominal size: the steel pipe of that NPS (ASME B36.10M); the port says its NPS too. */
export const npsOd = (nps) => (STEEL[nps] ? STEEL[nps][0] * IN : null);
const NPS = Object.keys(STEEL);

/**
 * The kinds. fields: what a person types (len = mm, nps = a pipe size, sys = a system of the kind given, choice). build(v) →
 * { solids: [box | cyl], plan: [poly | circle], ports: [{ name, system, direction, shape, size, h?, nominal?, at: [x,y,z], axis }], w, d, h }
 */
export const EQUIPMENT = {
  ahu: {
    cls: ['IFCUNITARYEQUIPMENT', 'IFCUNITARYEQUIPMENTTYPE', 'AIRHANDLER', 'IFCENERGYCONVERSIONDEVICE', 'IFCUNITARYEQUIPMENTTYPE', 'AIRHANDLER'], category: 'mechanical/equipment',
    fields: [['length', 'len', 2400], ['width', 'len', 1200], ['height', 'len', 1500], ['supplyW', 'len', 600], ['supplyH', 'len', 400], ['returnW', 'len', 600], ['returnH', 'len', 400],
      ['coil', 'nps', '1-1/2'], ['coilSys', 'sys:pipe', 'chw'], ['drain', 'nps', '1']],
    build(v) {
      const L = v.length, W = v.width, H = v.height;
      const sz = Math.max(v.supplyH, v.returnH);
      if (sz + 100 > H || Math.max(v.supplyW, v.returnW) + 100 > W) refuse('mep.eq.err.fit');
      const c = npsOd(v.coil), dr = npsOd(v.drain);
      return {
        w: L, d: W, h: H,
        solids: [box(-L / 2, -W / 2, 0, L / 2, W / 2, H), box(L / 2, -v.supplyW / 2, H - 50 - v.supplyH, L / 2 + 50, v.supplyW / 2, H - 50), box(-L / 2 - 50, -v.returnW / 2, H - 50 - v.returnH, -L / 2, v.returnW / 2, H - 50),
          cyl([L / 4, -W / 2, 300], [L / 4, -W / 2 - 75, 300], c / 2), cyl([L / 4 + 3 * c, -W / 2, 300], [L / 4 + 3 * c, -W / 2 - 75, 300], c / 2), cyl([-L / 4, -W / 2, 120], [-L / 4, -W / 2 - 75, 120], dr / 2)],
        plan: [rect(-L / 2, -W / 2, L / 2, W / 2)],
        ports: [
          duct('supply', 'supply', 'out', 'rect', v.supplyW, v.supplyH, [L / 2 + 50, 0, H - 50 - v.supplyH / 2], [1, 0, 0]),
          duct('return', 'return', 'in', 'rect', v.returnW, v.returnH, [-L / 2 - 50, 0, H - 50 - v.returnH / 2], [-1, 0, 0]),
          pipe('coil-in', v.coilSys, 'in', v.coil, [L / 4, -W / 2 - 75, 300], [0, -1, 0]),
          pipe('coil-out', v.coilSys, 'out', v.coil, [L / 4 + 3 * c, -W / 2 - 75, 300], [0, -1, 0]),
          pipe('drain', 'san', 'out', v.drain, [-L / 4, -W / 2 - 75, 120], [0, -1, 0]),
        ],
      };
    },
  },
  fan: {
    cls: ['IFCFAN', 'IFCFANTYPE', 'NOTDEFINED', 'IFCFLOWMOVINGDEVICE', 'IFCFANTYPE', 'NOTDEFINED'], category: 'mechanical/equipment',
    fields: [['diameter', 'len', 400], ['length', 'len', 600], ['system', 'sys:duct', 'exhaust']],
    build(v) {
      const D = v.diameter, L = v.length, R = D * 0.62, zc = R;
      return {
        w: L, d: 2 * R, h: 2 * R,
        solids: [cyl([-L / 2, 0, zc], [L / 2, 0, zc], R), cyl([-L / 2 - 50, 0, zc], [-L / 2, 0, zc], D / 2), cyl([L / 2, 0, zc], [L / 2 + 50, 0, zc], D / 2), box(-L / 6, R * 0.6, zc - R * 0.3, L / 6, R * 1.15, zc + R * 0.3)],
        plan: [rect(-L / 2 - 50, -R, L / 2 + 50, R)],
        ports: [duct('in', v.system, 'in', 'round', D, D, [-L / 2 - 50, 0, zc], [-1, 0, 0]), duct('out', v.system, 'out', 'round', D, D, [L / 2 + 50, 0, zc], [1, 0, 0])],
      };
    },
  },
  pump: {
    cls: ['IFCPUMP', 'IFCPUMPTYPE', 'CIRCULATOR', 'IFCFLOWMOVINGDEVICE', 'IFCPUMPTYPE', 'CIRCULATOR'], category: 'mechanical/equipment',
    fields: [['size', 'nps', '2'], ['system', 'sys:pipe', 'chw']],
    build(v) {
      const od = npsOd(v.size), L = Math.max(300, 6 * od), zc = Math.max(150, 1.6 * od), Rc = Math.max(od, 80);
      return {
        w: L + 100, d: 2 * Rc, h: zc + Rc + 2.5 * Rc,
        solids: [box(-L / 2, -Rc, 0, L / 2, Rc, zc - Rc * 0.9), cyl([0, 0, zc - Rc * 0.9], [0, 0, zc + Rc], Rc), cyl([0, 0, zc + Rc], [0, 0, zc + Rc + 2.5 * Rc], Rc * 0.7),
          cyl([-L / 2 - 50, 0, zc], [0, 0, zc], od / 2), cyl([0, 0, zc], [L / 2 + 50, 0, zc], od / 2)],
        plan: [rect(-L / 2 - 50, -Rc, L / 2 + 50, Rc)],
        ports: [pipe('in', v.system, 'in', v.size, [-L / 2 - 50, 0, zc], [-1, 0, 0]), pipe('out', v.system, 'out', v.size, [L / 2 + 50, 0, zc], [1, 0, 0])],
      };
    },
  },
  boiler: {
    cls: ['IFCBOILER', 'IFCBOILERTYPE', 'WATER', 'IFCENERGYCONVERSIONDEVICE', 'IFCBOILERTYPE', 'WATER'], category: 'mechanical/equipment',
    fields: [['length', 'len', 900], ['width', 'len', 600], ['height', 'len', 1500], ['size', 'nps', '1-1/2'], ['gas', 'nps', '3/4'], ['flue', 'len', 150]],
    build(v) {
      const L = v.length, W = v.width, H = v.height, od = npsOd(v.size), g = npsOd(v.gas);
      if (v.flue + 100 > Math.min(L, W)) refuse('mep.eq.err.fit');
      return {
        w: L, d: W, h: H + 150,
        solids: [box(-L / 2, -W / 2, 0, L / 2, W / 2, H), cyl([0, 0, H], [0, 0, H + 150], v.flue / 2), cyl([L / 4, W / 2, H - 200], [L / 4, W / 2 + 75, H - 200], od / 2), cyl([L / 4, W / 2, 300], [L / 4, W / 2 + 75, 300], od / 2), cyl([-L / 4, W / 2, 200], [-L / 4, W / 2 + 75, 200], g / 2)],
        plan: [rect(-L / 2, -W / 2, L / 2, W / 2)],
        ports: [pipe('supply', 'hhw', 'out', v.size, [L / 4, W / 2 + 75, H - 200], [0, 1, 0]), pipe('return', 'hhw', 'in', v.size, [L / 4, W / 2 + 75, 300], [0, 1, 0]),
          pipe('gas', 'gas', 'in', v.gas, [-L / 4, W / 2 + 75, 200], [0, 1, 0]), duct('flue', 'exhaust', 'out', 'round', v.flue, v.flue, [0, 0, H + 150], [0, 0, 1])],
      };
    },
  },
  heater: {
    cls: ['IFCBOILER', 'IFCBOILERTYPE', 'WATER', 'IFCENERGYCONVERSIONDEVICE', 'IFCBOILERTYPE', 'WATER'], category: 'plumbing/equipment', objectType: 'Water heater',   // i18n-ignore: IFC ObjectType (file content)
    fields: [['diameter', 'len', 560], ['height', 'len', 1500], ['size', 'nps', '3/4'], ['fuel', 'choice:gas,electric', 'gas']],
    build(v) {
      const D = v.diameter, H = v.height, od = npsOd(v.size), gas = v.fuel === 'gas', fl = 100;
      const solids = [cyl([0, 0, 0], [0, 0, H], D / 2), cyl([-D / 4, 0, H], [-D / 4, 0, H + 75], od / 2), cyl([D / 4, 0, H], [D / 4, 0, H + 75], od / 2)];
      const ports = [pipe('cold-in', 'cw', 'in', v.size, [-D / 4, 0, H + 75], [0, 0, 1]), pipe('hot-out', 'hw', 'out', v.size, [D / 4, 0, H + 75], [0, 0, 1])];
      if (gas) {
        const g = npsOd('1/2');
        solids.push(cyl([0, 0, H], [0, 0, H + 150], fl / 2), cyl([0, -D / 2, 250], [0, -D / 2 - 75, 250], g / 2));
        ports.push(duct('flue', 'exhaust', 'out', 'round', fl, fl, [0, 0, H + 150], [0, 0, 1]), pipe('gas', 'gas', 'in', '1/2', [0, -D / 2 - 75, 250], [0, -1, 0]));
      }
      return { w: D, d: D, h: H + (gas ? 150 : 75), solids, plan: [circle(0, 0, D / 2)], ports };
    },
  },
  terminal: {
    cls: ['IFCAIRTERMINALBOX', 'IFCAIRTERMINALBOXTYPE', 'VARIABLEFLOWPRESSUREDEPENDANT', 'IFCFLOWCONTROLLER', 'IFCAIRTERMINALBOXTYPE', 'VARIABLEFLOWPRESSUREDEPENDANT'], category: 'mechanical/equipment',
    fields: [['length', 'len', 900], ['width', 'len', 500], ['height', 'len', 350], ['inlet', 'len', 200], ['outW', 'len', 400], ['outH', 'len', 300]],
    build(v) {
      const L = v.length, W = v.width, H = v.height;
      if (v.inlet + 50 > Math.min(W, H) || v.outW > W || v.outH > H) refuse('mep.eq.err.fit');
      const zc = H / 2;
      return {
        w: L + 250, d: W, h: H,
        solids: [box(-L / 2, -W / 2, 0, L / 2, W / 2, H), cyl([-L / 2 - 200, 0, zc], [-L / 2, 0, zc], v.inlet / 2), box(L / 2, -v.outW / 2, zc - v.outH / 2, L / 2 + 50, v.outW / 2, zc + v.outH / 2)],
        plan: [rect(-L / 2 - 200, -W / 2, L / 2 + 50, W / 2)],
        ports: [duct('inlet', 'supply', 'in', 'round', v.inlet, v.inlet, [-L / 2 - 200, 0, zc], [-1, 0, 0]), duct('outlet', 'supply', 'out', 'rect', v.outW, v.outH, [L / 2 + 50, 0, zc], [1, 0, 0])],
      };
    },
  },
  diffuser: {
    cls: ['IFCAIRTERMINAL', 'IFCAIRTERMINALTYPE', 'DIFFUSER', 'IFCFLOWTERMINAL', 'IFCAIRTERMINALTYPE', 'DIFFUSER'], category: 'mechanical/equipment',
    fields: [['face', 'len', 600], ['neck', 'len', 250], ['system', 'sys:duct', 'supply']],
    build(v) {
      const F = v.face, N = v.neck;
      if (N + 50 > F) refuse('mep.eq.err.fit');
      return {
        w: F, d: F, h: 175,
        solids: [box(-F / 2, -F / 2, 0, F / 2, F / 2, 25), box(-F * 0.35, -F * 0.35, 25, F * 0.35, F * 0.35, 60), cyl([0, 0, 60], [0, 0, 175], N / 2)],
        plan: [rect(-F / 2, -F / 2, F / 2, F / 2), rect(-F * 0.35, -F * 0.35, F * 0.35, F * 0.35)],
        ports: [duct('neck', v.system, 'in', 'round', N, N, [0, 0, 175], [0, 0, 1])],
      };
    },
  },
  grille: {
    cls: ['IFCAIRTERMINAL', 'IFCAIRTERMINALTYPE', 'GRILLE', 'IFCFLOWTERMINAL', 'IFCAIRTERMINALTYPE', 'GRILLE'], category: 'mechanical/equipment',
    fields: [['faceW', 'len', 600], ['faceH', 'len', 600], ['neckW', 'len', 400], ['neckH', 'len', 400], ['system', 'sys:duct', 'return']],
    build(v) {
      if (v.neckW + 50 > v.faceW || v.neckH + 50 > v.faceH) refuse('mep.eq.err.fit');
      return {
        w: v.faceW, d: v.faceH, h: 175,
        solids: [box(-v.faceW / 2, -v.faceH / 2, 0, v.faceW / 2, v.faceH / 2, 25), box(-v.neckW / 2, -v.neckH / 2, 25, v.neckW / 2, v.neckH / 2, 175)],
        plan: [rect(-v.faceW / 2, -v.faceH / 2, v.faceW / 2, v.faceH / 2), rect(-v.neckW / 2, -v.neckH / 2, v.neckW / 2, v.neckH / 2)],
        // a return or exhaust grille hands the room's air to its duct
        ports: [duct('neck', v.system, v.system === 'supply' ? 'in' : 'out', 'rect', v.neckW, v.neckH, [0, 0, 175], [0, 0, 1])],
      };
    },
  },
  tank: {
    cls: ['IFCTANK', 'IFCTANKTYPE', 'STORAGE', 'IFCFLOWSTORAGEDEVICE', 'IFCTANKTYPE', 'NOTDEFINED'], category: 'plumbing/equipment',
    fields: [['diameter', 'len', 1000], ['height', 'len', 1800], ['size', 'nps', '2'], ['system', 'sys:pipe', 'cw']],
    build(v) {
      const D = v.diameter, H = v.height, od = npsOd(v.size);
      if (od * 3 > D) refuse('mep.eq.err.fit');
      return {
        w: D, d: D, h: H + 75,
        solids: [cyl([0, 0, 0], [0, 0, H], D / 2), cyl([0, 0, H], [0, 0, H + 75], od / 2), cyl([0, -D / 2, 2 * od], [0, -D / 2 - 75, 2 * od], od / 2)],
        plan: [circle(0, 0, D / 2)],
        ports: [pipe('inlet', v.system, 'in', v.size, [0, 0, H + 75], [0, 0, 1]), pipe('outlet', v.system, 'out', v.size, [0, -D / 2 - 75, 2 * od], [0, -1, 0])],
      };
    },
  },
};
export const EQUIPMENT_KINDS = Object.keys(EQUIPMENT);
const pipe = (name, system, direction, nps, at, axis) => ({ name, kind: 'pipe', system, direction, shape: 'round', size: npsOd(nps), nominal: nps, at, axis });
const duct = (name, system, direction, shape, w, h, at, axis) => ({ name, kind: 'duct', system, direction, shape, size: w, ...(shape === 'round' ? {} : { h }), at, axis });

/** Typed values: the kind's defaults with what was given, checked (lengths 10 mm … 20 m, sizes from the steel table). */
export function equipmentDefaults(kind) {
  const def = EQUIPMENT[kind];
  if (!def) return null;
  return Object.fromEntries(def.fields.map(([k, , d]) => [k, d]));
}
export function equipmentValues(kind, values = {}) {
  const def = EQUIPMENT[kind];
  if (!def) refuse('mep.eq.err.kind');
  const out = {};
  for (const [k, type, d] of def.fields) {
    let v = values[k] ?? d;
    if (type === 'len') { v = Number(v); if (!(v >= 10 && v <= 20000)) refuse('mep.eq.err.value', { what: k }); v = round(v, 3); }
    else if (type === 'nps') { v = String(v); if (!NPS.includes(v)) refuse('mep.eq.err.value', { what: k }); }
    else if (type.startsWith('sys:')) { v = String(v); if (!(type === 'sys:pipe' ? PIPE_SYSTEMS : DUCT_SYSTEMS)[v]) refuse('mep.eq.err.value', { what: k }); }
    else if (type.startsWith('choice:')) { v = String(v); if (!type.slice(7).split(',').includes(v)) refuse('mep.eq.err.value', { what: k }); }
    out[k] = v;
  }
  return out;
}

// ---- shapes (mm) ----
const box = (x0, y0, z0, x1, y1, z1) => ({ t: 'box', a: [Math.min(x0, x1), Math.min(y0, y1), Math.min(z0, z1)], b: [Math.max(x0, x1), Math.max(y0, y1), Math.max(z0, z1)] });
const cyl = (p0, p1, r) => ({ t: 'cyl', p0, p1, r });
const rect = (x0, y0, x1, y1) => ({ type: 'poly', layer: '0', color: null, pts: [[x0, y0], [x1, y0], [x1, y1], [x0, y1]], closed: true });
const circle = (x, y, r) => ({ type: 'circle', layer: '0', color: null, x, y, r });
const CYL_N = 16;
/** Closed solids → one mesh { positions, indices } (outward faces). */
function meshOf(solids) {
  const P = [], I = [];
  const v = (q) => { P.push(round(q[0], 3), round(q[1], 3), round(q[2], 3)); return P.length / 3 - 1; };
  for (const s of solids) {
    if (s.t === 'box') {
      const [x0, y0, z0] = s.a, [x1, y1, z1] = s.b;
      const c = [[x0, y0, z0], [x1, y0, z0], [x1, y1, z0], [x0, y1, z0], [x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1]].map(v);
      for (const [a, b, cc, d] of [[0, 3, 2, 1], [4, 5, 6, 7], [0, 1, 5, 4], [1, 2, 6, 5], [2, 3, 7, 6], [3, 0, 4, 7]]) I.push(c[a], c[b], c[cc], c[a], c[cc], c[d]);
    } else {
      const ax = sub(s.p1, s.p0), L = len(ax), d = ax.map((x) => x / L);
      const u = norm(Math.abs(d[2]) < 0.9 ? cross([0, 0, 1], d) : cross([1, 0, 0], d)), w = cross(d, u);
      const ring = (o) => Array.from({ length: CYL_N }, (_, i) => { const a = 2 * Math.PI * i / CYL_N; return v(add(o, add(mul(u, s.r * Math.cos(a)), mul(w, s.r * Math.sin(a))))); });
      const A = ring(s.p0), B = ring(s.p1), ca = v(s.p0), cb = v(s.p1);
      for (let i = 0; i < CYL_N; i++) { const j = (i + 1) % CYL_N; I.push(A[i], A[j], B[j], A[i], B[j], B[i], ca, A[j], A[i], cb, B[i], B[j]); }
    }
  }
  return { type: 'mesh', positions: P, indices: I };
}
const add = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const mul = (a, s) => [a[0] * s, a[1] * s, a[2] * s];
const len = (a) => Math.hypot(a[0], a[1], a[2]);
const norm = (a) => { const l = len(a) || 1; return [a[0] / l, a[1] / l, a[2] / l]; };
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];

/** What a kind with these values is, before it is placed: { values, built } (refuses sizes that don't fit). */
export function buildEquipment(kind, values) {
  const v = equipmentValues(kind, values);
  return { values: v, built: EQUIPMENT[kind].build(v) };
}
/**
 * The LibraryCraft item (format 1, partial: no uuid / version / license — libitem.js validateItem(item, { partial: true })).
 * name = the words given (the app's own name of the kind and its size); ports in the format's shape (x, y, z, axis).
 */
export function equipmentItem(kind, values, { name = '' } = {}) {
  const { values: v, built: b } = buildEquipment(kind, values);
  const def = EQUIPMENT[kind];
  return {
    format: 'cadcraft-library-item', format_version: 1, name: name || kind, kind: 'equipment', category: def.category,
    description: 'Generic ' + kind + ' (CadCraft, sized by typed values; not a maker\'s product).',   // i18n-ignore: written into the file as the item's description
    ifc: { class: IFC4_NAME[def.cls[0]], predefined: def.cls[2] },
    plan: { layers: [{ name: '0' }], entities: b.plan.map((e) => ({ ...e })) },
    body: meshOf(b.solids),
    clearances: [],
    params: { width: round(b.w, 3), depth: round(b.d, 3), height: round(b.h, 3) },
    source_attrs: { 'CC-MEP-KIND': kind, 'CC-MEP-VALUES': JSON.stringify(v) },
    ports: b.ports.map((p) => {
      const o = { name: p.name, system: p.system, direction: p.direction, shape: p.shape, size: round(p.size, 3), x: round(p.at[0], 3), y: round(p.at[1], 3), z: round(p.at[2], 3), axis: p.axis.slice() };
      if ('h' in p) o.h = round(p.h, 3);
      return o;
    }),
  };
}
const IFC4_NAME = { IFCUNITARYEQUIPMENT: 'IfcUnitaryEquipment', IFCFAN: 'IfcFan', IFCPUMP: 'IfcPump', IFCBOILER: 'IfcBoiler', IFCAIRTERMINALBOX: 'IfcAirTerminalBox', IFCAIRTERMINAL: 'IfcAirTerminal', IFCTANK: 'IfcTank', IFCPIPEFITTING: 'IfcPipeFitting' };   // + 0.8 SU.888 (sx-mep): refnet joints

/** Where each port of a placed piece sits, in its storey's plan mm, and the way it faces. */
export function portsAt(eq) {
  const { built } = buildEquipment(eq.kind, eq.values);
  const a = (eq.rot || 0) * D2R, c = Math.cos(a), s = Math.sin(a);
  const R = (q) => [q[0] * c - q[1] * s, q[0] * s + q[1] * c, q[2]];
  return built.ports.map((p) => { const q = R(p.at); return { ...p, at: [eq.x + q[0], eq.y + q[1], (eq.z || 0) + q[2]], axis: R(p.axis), local: p }; });
}

// ---- reading ----
const readJson = (s, d) => { try { const v = JSON.parse(String(s || '')); return v ?? d; } catch (e) { return d; } };
const EQ_CLASSES = ['IFCUNITARYEQUIPMENT', 'IFCFAN', 'IFCPUMP', 'IFCBOILER', 'IFCAIRTERMINALBOX', 'IFCAIRTERMINAL', 'IFCTANK', 'IFCENERGYCONVERSIONDEVICE', 'IFCFLOWMOVINGDEVICE', 'IFCFLOWCONTROLLER', 'IFCFLOWTERMINAL', 'IFCFLOWSTORAGEDEVICE', 'IFCPIPEFITTING', 'IFCFLOWFITTING'];   // + 0.8 SU.888 (sx-mep): refnet joints (mep/hvac.js); run fittings carry no CadCraft_MepEquipment and are skipped
export function readEquipment(w) {
  const so = w.storeyOf(), out = [], seen = new Set();
  for (const cls of EQ_CLASSES) {
    let list = [];
    try { list = ids(w.api, w.mid, cls); } catch (e) { continue; }
    for (const id of list) {
      if (seen.has(id)) continue;
      seen.add(id);
      const ps = w.readPset(id, EQ_PSET);
      if (!ps || !EQUIPMENT[ps.Kind]) continue;
      let values;
      try { values = equipmentValues(ps.Kind, readJson(ps.Values, {})); } catch (e) { continue; }   // a hand-edited file: skipped, not guessed
      const mm = (x) => (Number(x) || 0);
      out.push({ id, guid: val(w.api.GetLine(w.mid, id, false).GlobalId), storey: so.get(id) ?? null, kind: ps.Kind, values, x: mm(ps.X), y: mm(ps.Y), z: mm(ps.Z), rot: mm(ps.Rotation), tag: String(ps.Tag || '') });
    }
  }
  return out;
}

// ---- writing ----
const FLOW = { in: 'SINK', out: 'SOURCE', both: 'SOURCEANDSINK' };
const sysType = (kind, system) => ((kind === 'duct' ? DUCT_SYSTEMS : PIPE_SYSTEMS)[system]?.ifc) || 'NOTDEFINED';
const kindOfSystem = (s) => (DUCT_SYSTEMS[s] ? 'duct' : PIPE_SYSTEMS[s] ? 'pipe' : null);
/**
 * Ports on an element, in its own axes (item mm): [{ name, system, direction, shape, size, h?, nominal?, x, y, z, axis }] (the
 * libitem shape, `at` taken too). Each: an IfcDistributionPort placed relative to the element's placement facing `axis`, nested
 * (IFC2X3: IfcRelConnectsPortToElement), with its CadCraft_Port set. → [{ id, name }]. The add-on API's mep.addPorts.
 */
export function writePorts(w, elementId, ports, { label = 'Port' } = {}) {
  const el = w.api.GetLine(w.mid, elementId, false);
  const lp = el?.ObjectPlacement?.value;
  if (!lp) refuse('mep.eq.err.noplace');
  const made = [];
  for (const p of ports) {
    const at = p.at || [p.x, p.y, p.z], ax = norm(p.axis || [1, 0, 0]);
    if (!at.every(Number.isFinite)) refuse('mep.eq.err.port');
    const kind = p.kind || kindOfSystem(p.system);
    const xDir = Math.abs(ax[2]) < 0.9 ? norm(cross([0, 0, 1], ax)) : [1, 0, 0];
    const plp = w.make('IFCLOCALPLACEMENT', w.H(lp), w.H(w.axisFrame(at, ax, xDir)));
    const flow = FLOW[p.direction] || 'NOTDEFINED';
    const nameL = w.L(p.label || p.name || label);
    const pid = w.v4 ? w.make('IFCDISTRIBUTIONPORT', w.guid(), w.ownerHistory(), nameL, null, null, w.H(plp), null, flow, kind === 'duct' ? 'DUCT' : kind === 'pipe' ? 'PIPE' : 'NOTDEFINED', kind ? sysType(kind, p.system) : 'NOTDEFINED')
      : w.make('IFCDISTRIBUTIONPORT', w.guid(), w.ownerHistory(), nameL, null, null, w.H(plp), null, flow);
    if (!w.v4) w.make('IFCRELCONNECTSPORTTOELEMENT', w.guid(), w.ownerHistory(), null, null, w.H(pid), w.H(elementId));
    const Lm = (k, v) => [k, 'IFCLENGTHMEASURE', round(w.u(v || 0))];
    w.upsertPset(pid, PORT_PSET, [['PortName', 'IFCLABEL', String(p.name)], ['Kind', 'IFCLABEL', kind || ''], ['System', 'IFCLABEL', String(p.system || '')], ['Shape', 'IFCLABEL', p.shape || 'round'],
      Lm('Width', p.size), Lm('Height', p.shape === 'round' ? p.size : p.h), ['NominalSize', 'IFCLABEL', p.nominal ? String(p.nominal) : ''], ['Direction', 'IFCLABEL', p.direction || '']]);
    made.push({ id: pid, name: String(p.name) });
  }
  if (w.v4 && made.length) w.make('IFCRELNESTS', w.guid(), w.ownerHistory(), null, null, w.H(elementId), made.map((m) => w.H(m.id)));
  return made;
}
/** The ports nested in (or connected to) an element. */
export function portsOfElement(w, id) {
  const out = [];
  for (const rid of ids(w.api, w.mid, 'IFCRELNESTS')) { const r = w.api.GetLine(w.mid, rid, false); if (r.RelatingObject?.value === id) for (const h of r.RelatedObjects || []) out.push(h.value); }
  try { for (const rid of ids(w.api, w.mid, 'IFCRELCONNECTSPORTTOELEMENT')) { const r = w.api.GetLine(w.mid, rid, false); if (r.RelatedElement?.value === id) out.push(r.RelatingPort.value); } } catch (e) { /* IFC4 */ }
  return out;
}

/** The type for a kind + values (shared by every placement of the same values; found by CadCraft_MepEquipment.Key). */
function typeFor(w, kind, values, name) {
  const def = EQUIPMENT[kind], key = kind + ':' + JSON.stringify(values);
  const tcls = w.v4 ? def.cls[1] : def.cls[4], pre = w.v4 ? def.cls[2] : def.cls[5];
  try { for (const x of ids(w.api, w.mid, tcls)) if (w.readPset(x, EQ_PSET)?.Key === key) return x; } catch (e) { /* none yet */ }
  const id = w.make(tcls, w.guid(), w.ownerHistory(), w.L(name), w.X('Generic equipment, sized by typed values (CadCraft).'), null, null, null, null, null, pre);   // i18n-ignore: file content
  w.upsertPset(id, EQ_PSET, [['Key', 'IFCTEXT', key], ['Kind', 'IFCLABEL', kind]]);
  return id;
}
/** Our equipment types nothing uses any more: dropped. */
function dropUnusedTypes(w) {
  const used = new Set();
  for (const rid of ids(w.api, w.mid, 'IFCRELDEFINESBYTYPE')) { const r = w.api.GetLine(w.mid, rid, false); if ((r.RelatedObjects || []).length) used.add(r.RelatingType?.value); }
  const gone = [];
  for (const def of Object.values(EQUIPMENT)) for (const tcls of new Set([def.cls[1], def.cls[4]])) {
    try { for (const x of ids(w.api, w.mid, tcls)) if (!used.has(x) && w.readPset(x, EQ_PSET) && !gone.includes(x)) gone.push(x); } catch (e) { /* none */ }
  }
  if (gone.length) w.dropProduct(gone);
}

/** The element's shape, sets and ports from its definition (a fresh element or one being made again). */
function writeBody(w, id, eq, item) {
  const body = w.bodyItems(item.body);
  const reps = [w.rep('body', 'Body', body.type, body.items)];
  const fp = w.footprintItems(item.plan);
  if (fp.length) reps.push(w.rep('foot', 'FootPrint', 'GeometricCurveSet', fp));
  w.setShape(id, reps);
  const style = w.surfaceStyle('CadCraft MEP equipment', [0.62, 0.64, 0.68]);   // i18n-ignore: style name in the file
  for (const it of body.items) w.styleItem(it, style);
}
function writeSets(w, id, eq, item) {
  w.upsertPset(id, EQ_PSET, [['Kind', 'IFCLABEL', eq.kind], ['Values', 'IFCTEXT', JSON.stringify(eq.values)], ['X', 'IFCLENGTHMEASURE', round(eq.x, 3)], ['Y', 'IFCLENGTHMEASURE', round(eq.y, 3)],
    ['Z', 'IFCLENGTHMEASURE', round(eq.z || 0, 3)], ['Rotation', 'IFCPLANEANGLEMEASURE', round(eq.rot || 0, 6)], ['Tag', 'IFCLABEL', eq.tag || ''], ['Generic', 'IFCBOOLEAN', true]]);
  w.upsertPset(id, PSETS.library, w.libraryProps(item, { library: 'cadcraft-generic' }));
  w.upsertPset(id, PSETS.equipment, w.equipmentProps(item));
}
/** Systems: the element joins the system of each of its ports (made when missing, as runs do). */
function assignSystems(w, id, item) {
  const keys = new Set(item.ports.map((p) => (kindOfSystem(p.system) ? kindOfSystem(p.system) + ':' + p.system : null)).filter(Boolean));
  for (const k of keys) { const [kind, system] = k.split(':'); assignToSystem(w, systemForKey(w, kind, system), [id]); }
}

export function placeEquipment(spec) {
  const s = { ...spec };
  return op((w) => {
    const storey = w.byGuid(s.storey);
    if (!storey) refuse('model.err.nolevel');
    const v = equipmentValues(s.kind, s.values);
    const eq = { kind: s.kind, values: v, x: Number(s.x) || 0, y: Number(s.y) || 0, z: Number(s.z) || 0, rot: Number(s.rot) || 0, tag: String(s.tag || '') };
    const item = equipmentItem(s.kind, v, { name: s.name });
    const def = EQUIPMENT[s.kind];
    const g = w.gid(s.guid); s.guid = g;
    const lp = w.placeAt(w.api.GetLine(w.mid, storey, false).ObjectPlacement.value, eq.x, eq.y, eq.z, eq.rot);
    const objType = def.objectType ? w.L(def.objectType) : null;
    const id = w.v4 ? w.make(def.cls[0], g, w.ownerHistory(), w.L(item.name), null, objType, w.H(lp), null, eq.tag ? w.L(eq.tag) : null, def.cls[2])
      : w.make(def.cls[3], g, w.ownerHistory(), w.L(item.name), null, objType || w.L(def.cls[0].slice(3)), w.H(lp), null, eq.tag ? w.L(eq.tag) : null);
    w.noteGuid(g, id);
    w.make('IFCRELCONTAINEDINSPATIALSTRUCTURE', w.guid(), w.ownerHistory(), null, null, [w.H(id)], w.H(storey));   // its own (Live: no two people write one line)
    w.relateType(id, typeFor(w, s.kind, v, item.name));
    writeBody(w, id, eq, item);
    writeSets(w, id, eq, item);
    writePorts(w, id, item.ports.map((p) => ({ ...p, nominal: buildEquipment(s.kind, v).built.ports.find((q) => q.name === p.name)?.nominal })));
    assignSystems(w, id, item);
    regenMep(w, storey);   // runs that end on its ports
    return { id, ids: [id], made: new Map([[g, id]]) };
  });
}
/** Move, turn, resize or retag: { x, y, z, rot, values, tag, name }. Its ports are made again where they now are; runs fixed to
 *  them follow (mep-model.js regenMep). */
export function changeEquipment(guid, ch) {
  const c = { ...ch };
  return op((w) => {
    const cur = readEquipment(w).find((e) => e.guid === guid);
    if (!cur) refuse('mep.err.none');
    const eq = { ...cur, ...c, values: c.values ? equipmentValues(cur.kind, { ...cur.values, ...c.values }) : cur.values };
    const item = equipmentItem(eq.kind, eq.values, { name: c.name || val(w.api.GetLine(w.mid, cur.id, false).Name) || eq.kind });
    const line = w.touch(cur.id);
    if (c.tag !== undefined) { line.Tag = eq.tag ? w.L(eq.tag) : null; }
    if (c.name) line.Name = w.L(c.name);
    w.write(line);
    w.movePlacement(line.ObjectPlacement.value, eq.x, eq.y, eq.z || 0, eq.rot || 0);
    if (c.values) {
      writeBody(w, cur.id, eq, item);
      // the type follows the values
      for (const rid of ids(w.api, w.mid, 'IFCRELDEFINESBYTYPE')) {
        const r = w.api.GetLine(w.mid, rid, false);
        if (!(r.RelatedObjects || []).some((h) => h.value === cur.id)) continue;
        const l = w.touch(rid);
        l.RelatedObjects = l.RelatedObjects.filter((h) => h.value !== cur.id);
        if (l.RelatedObjects.length) w.write(l); else deleteLine(w.api, w.mid, rid);
      }
      w.relateType(cur.id, typeFor(w, eq.kind, eq.values, item.name));
    }
    writeSets(w, cur.id, eq, item);
    // ports: made again (their relations to runs come back in regenMep's connecting pass)
    const old = portsOfElement(w, cur.id);
    if (old.length) w.dropProduct(old);
    writePorts(w, cur.id, item.ports.map((p) => ({ ...p, nominal: buildEquipment(eq.kind, eq.values).built.ports.find((q) => q.name === p.name)?.nominal })));
    if (c.values) dropUnusedTypes(w);
    regenMep(w, cur.storey);
    return { id: cur.id, ids: [cur.id] };
  });
}
export function removeEquipment(guids) {
  return op((w) => {
    const list = readEquipment(w).filter((e) => guids.includes(e.guid));
    const storeys = new Set(list.map((e) => e.storey));
    for (const e of list) w.dropProduct([e.id, ...portsOfElement(w, e.id)]);
    dropUnusedTypes(w);
    for (const st of storeys) if (st) regenMep(w, st);
    return { id: null, ids: [] };
  });
}
