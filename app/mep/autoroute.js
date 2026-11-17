/* SPDX-License-Identifier: Apache-2.0 */
/**
 * mep/autoroute.js — BimCraft's adapter for the 3D MEP router (0.10 MEP.1, suggestion #1556). No DOM: bin/test-bimcraft.mjs
 * --autoroute runs it. The engine is shared: mep-route/ (a byte-identical copy of lib/mep-route, tools/mep-route/sync.mjs);
 * this file only reads the model for it and draws what it finds as ordinary runs, so the fittings, ports, systems and
 * IfcRelConnectsPorts come from mep-model.js exactly as for a run a person draws (and are made again when one is edited).
 *
 *   OBSTACLE_CLASSES                  walls, slabs, roofs, beams, columns, equipment, existing pipes and ducts (IFC4 + IFC2X3 names)
 *   obstaclesFrom(batches, classOf, toPlan, { classes?, skip? }) → [{ min, max, id, cls }]   the box of each element of
 *       those classes in the loaded model (viewer metres → toPlan → the storey's plan mm); `skip(id)` leaves one out
 *   planDucts(w, { storey, source: { eq, port }, terminals: [{ eq, port, flow }], obstacles, system?, clearance?, rate?, h?, u? })
 *       → { ok, net (network.js), specs: [placeRun spec], failed, error? }   eq = equipment GlobalId, port = its port name,
 *       flow in L/s (u 'mm', rate Pa/m) or cfm (u 'in', rate in. w.g. / 100 ft); h = the main's fixed height (mm), default
 *       the source port's. The main's pieces are sized by equal friction (mep-model.js ductForFlow); a branch takes its
 *       terminal's port size. Every end on a port is FIXED to it (CadCraft_MepRun.Ends).
 *   placeNetwork(specs) → op   every run in ONE undo step
 * Errors: mep.route.err.source, mep.route.err.terminal, mep.route.err.port (not a duct port), mep.route.err.none (no route).
 * A drafting aid: sizes come from the friction rate typed, not from a design; a person checks the network.
 */
import { routeNetwork } from '../mep-route/network.js';
import { readEquipment, portsAt } from './equipment.js';
import { placeRun, ductForFlow } from '../mep-model.js';
import { SETS, MEP_CLASSES } from './structure.js';
import { mergeJournals } from '../model-ui.js';

export const OBSTACLE_CLASSES = [...SETS.structure, ...MEP_CLASSES, 'IfcUnitaryEquipment', 'IfcAirTerminal', 'IfcAirTerminalBox', 'IfcFan', 'IfcPump', 'IfcBoiler', 'IfcTank',
  'IfcEnergyConversionDevice', 'IfcFlowMovingDevice', 'IfcFlowController', 'IfcFlowTerminal', 'IfcFlowStorageDevice', 'IfcBuildingElementProxy'];

export function obstaclesFrom(batches, classOf, toPlan, { classes = OBSTACLE_CLASSES, skip = () => false } = {}) {
  const want = new Set(classes), box = new Map();
  for (const b of batches) {
    const E = b.elems, P = b.positions;
    for (let r = 0; r < E.ids.length; r++) {
      const k = E.ids[r];
      if (!want.has(classOf.get(k)) || skip(k)) continue;
      let bb = box.get(k);
      if (!bb) box.set(k, (bb = [Infinity, Infinity, Infinity, -Infinity, -Infinity, -Infinity]));
      for (let v = E.v0[r] * 3, end = (E.v0[r] + E.vn[r]) * 3; v < end; v += 3) {
        for (let q = 0; q < 3; q++) { if (P[v + q] < bb[q]) bb[q] = P[v + q]; if (P[v + q] > bb[q + 3]) bb[q + 3] = P[v + q]; }
      }
    }
  }
  const out = [];
  for (const [id, bb] of box) {
    if (!(bb[0] <= bb[3])) continue;
    const min = [Infinity, Infinity, Infinity], max = [-Infinity, -Infinity, -Infinity];
    for (let c = 0; c < 8; c++) {
      const p = toPlan([bb[c & 1 ? 3 : 0], bb[c & 2 ? 4 : 1], bb[c & 4 ? 5 : 2]]);
      for (let q = 0; q < 3; q++) { min[q] = Math.min(min[q], p[q]); max[q] = Math.max(max[q], p[q]); }
    }
    out.push({ min, max, id, cls: classOf.get(id) });
  }
  return out;
}

const ap = (M, v) => [M[0] * v[0] + M[4] * v[1] + M[8] * v[2] + M[12], M[1] * v[0] + M[5] * v[1] + M[9] * v[2] + M[13], M[2] * v[0] + M[6] * v[1] + M[10] * v[2] + M[14]];
/** A rigid 4 × 4 (column-major) turned round: rotation transposed, translation brought back. */
function invRigid(M) {
  const o = [M[0], M[4], M[8], 0, M[1], M[5], M[9], 0, M[2], M[6], M[10], 0, 0, 0, 0, 1];
  const t = ap(o, [M[12], M[13], M[14]]);
  o[12] = -t[0]; o[13] = -t[1]; o[14] = -t[2];
  return o;
}
/** The viewer's metres of ONE loaded model (web-ifc's coordination matrix C, no layer matrix) → a storey's plan mm
 *  (storeyWorld = ModelWriter.storeyWorld(storey), building mm). The inverse of structure-ui.js's toViewer. */
export function toPlanOf(C, storeyWorld) {
  const Ci = invRigid(C), Si = invRigid(storeyWorld);
  return (v) => { const q = ap(Ci, v); return ap(Si, [q[0] * 1000, -q[2] * 1000, q[1] * 1000]); };
}
const refuse = (key) => { throw Object.assign(new Error(key), { key }); };
const sectionOfPort = (p) => (p.shape === 'round' ? { shape: 'round', w: Number(p.size), h: Number(p.size) } : { shape: p.shape || 'rect', w: Number(p.size), h: Number(p.h) });

export function planDucts(w, { storey, source, terminals, obstacles = [], system = 'supply', clearance = 25, rate = null, h = null, u = 'mm' }) {
  const eqs = readEquipment(w);
  const portOf = (ref, err) => {
    const eq = eqs.find((e) => e.guid === ref?.eq);
    const p = eq && portsAt(eq).find((x) => x.name === ref.port);
    if (!p) refuse(err);
    if (p.kind !== 'duct') refuse('mep.route.err.port');
    return { eq, p };
  };
  const S = portOf(source, 'mep.route.err.source');
  const T = terminals.map((t) => ({ ...portOf(t, 'mep.route.err.terminal'), ref: t }));
  const srcSec = sectionOfPort(S.p);
  const fixedH = h > 0 ? h : srcSec.shape === 'round' ? null : srcSec.h;
  const R8 = rate > 0 ? rate : (u === 'in' ? 0.08 : 0.8);   // a common equal-friction starting point; the person types their own
  const sizeFor = (q) => {
    const d = ductForFlow({ q, rate: R8, shape: fixedH ? 'rect' : 'round', h: fixedH, u });
    return d ? { shape: fixedH ? 'rect' : 'round', w: d.w, h: fixedH ? d.h : d.w } : srcSec;
  };
  const net = routeNetwork({
    source: { p: S.p.at, out: S.p.axis, section: srcSec },
    terminals: T.map((t, i) => ({ id: String(i), p: t.p.at, out: t.p.axis, flow: Number(t.ref.flow), section: sectionOfPort(t.p) })),
    obstacles, sizeFor, clearance,
  });
  if (!net.ok) return { ok: false, error: 'mep.route.err.none', net, specs: [], failed: net.failed };
  const specs = net.runs.map((r) => {
    const t = r.terminal != null ? T[Number(r.terminal)] : null;
    return {
      storey, kind: 'duct', system, shape: r.section.shape, w: r.section.w, h: r.section.h, flow: r.flow, role: r.role,
      points: r.points.map((q) => q.slice()),
      ends: [r.start === 'source' ? { eq: S.eq.guid, port: S.p.name } : null, t ? { eq: t.eq.guid, port: t.p.name } : null],
    };
  });
  return { ok: true, net, specs, failed: net.failed.map((f) => ({ ...f, terminal: f.id != null ? terminals[Number(f.id)] : null })) };
}

export function placeNetwork(specs) {
  const ops = specs.map((s) => placeRun(s));
  return (ed) => {
    let r = null;
    for (const o of ops) { const r2 = o(ed); r = r ? { ...r2, ids: [...r.ids, ...(r2.ids || [])], made: new Map([...(r.made || []), ...(r2.made || [])]), journal: mergeJournals(r.journal, r2.journal) } : r2; }
    return r;
  };
}
