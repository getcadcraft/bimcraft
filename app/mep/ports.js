/* SPDX-License-Identifier: Apache-2.0 */
/**
 * mep/ports.js — every distribution port in the open model, read once (0.7 LC.9, session `mep-07`). No DOM: bin/test-bimcraft.mjs
 * --mep07 runs it in Node. Used by the add-on API 1.1 (`api.mep.ports()`), the Connections check and runs that snap to ports.
 *
 *   readPorts(w) → [{ id, guid, name, owner, ownerGuid, ownerClass, role, run, storey, at, out, flow, kind, system, systemType,
 *                     shape, size, w, h, nominal, connectedTo }]
 *     owner      the element the port belongs to (IfcRelNests in IFC4, IfcRelConnectsPortToElement in IFC2X3)
 *     role       'run'  a part of a pipe or duct run (mep-model.js; `run` = the run's GlobalId)
 *                'equipment'  equipment with ports (mep/equipment.js: the port's own CadCraft_Port set)
 *                'other'  a port another program wrote (what it says of itself is all there is)
 *     at, out    where it is and the way it faces (out of its element), in its storey's plan mm (x, y, z above the level);
 *                world mm when the element is in no storey
 *     flow       IFC FlowDirection: SOURCE, SINK, SOURCEANDSINK, NOTDEFINED
 *     kind       'pipe' | 'duct' | null;  system = our key (cw, supply, …) or null;  systemType = the IFC4 system enumeration
 *     shape, size, w, h, nominal   the connection: round (size = w = h = diameter, mm) / rect / oval; nominal = a pipe's
 *                NPS label ('2') when known
 *     connectedTo  the port it is connected to (IfcRelConnectsPorts), or null
 *   portSets(w) → the same list as a Map(id → port)
 */
import { ids, val } from '../ifc-util.js';
import { sectionOf } from '../mep-model.js';
import { syncMepData } from './pipe-specs-model.js';   // 0.9.1 #1499: a run's size may come from the model's own pipe specs

export const PORT_PSET = 'CadCraft_Port';
const RUN_PSET = 'CadCraft_MepRun';
const PIPE_SYS = { DOMESTICCOLDWATER: 'cw', DOMESTICHOTWATER: 'hw', SEWAGE: 'san', VENT: 'vent', STORMWATER: 'storm', CHILLEDWATER: 'chw', HEATING: 'hhw', GAS: 'gas', FIREPROTECTION: 'fire' };
const DUCT_SYS = { AIRCONDITIONING: 'supply', VENTILATION: 'return', EXHAUST: 'exhaust' };

const lines = (w, cls) => { try { return ids(w.api, w.mid, cls); } catch (e) { return []; } };
const line = (w, id) => { try { return w.api.GetLine(w.mid, id, false); } catch (e) { return null; } };
const enumOf = (v) => { const x = val(v); return x === null || x === undefined ? null : String(x); };

export function readPorts(w) {
  const portIds = lines(w, 'IFCDISTRIBUTIONPORT');
  if (!portIds.length) return [];
  syncMepData(w);
  // owners: nested (IFC4) or the IFC2X3 port-to-element relation
  const owner = new Map();
  for (const rid of lines(w, 'IFCRELNESTS')) { const r = line(w, rid); for (const h of r?.RelatedObjects || []) owner.set(h.value, r.RelatingObject?.value); }
  for (const rid of lines(w, 'IFCRELCONNECTSPORTTOELEMENT')) { const r = line(w, rid); if (r?.RelatingPort?.value) owner.set(r.RelatingPort.value, r.RelatedElement?.value); }
  const conn = new Map();
  for (const rid of lines(w, 'IFCRELCONNECTSPORTS')) {
    const r = line(w, rid), a = r?.RelatingPort?.value, b = r?.RelatedPort?.value;
    if (a && b) { conn.set(a, b); conn.set(b, a); }
  }
  // a run's parts: part → run assembly (aggregation), and the run's storey and definition
  const runOf = new Map();
  for (const rid of lines(w, 'IFCRELAGGREGATES')) {
    const r = line(w, rid), a = r?.RelatingObject?.value;
    if (!a) continue;
    for (const h of r.RelatedObjects || []) runOf.set(h.value, a);
  }
  const so = w.storeyOf();
  const runDef = new Map();
  const defOf = (aid) => { if (!runDef.has(aid)) runDef.set(aid, w.readPset(aid, RUN_PSET) || null); return runDef.get(aid); };
  const storeyLp = new Map();
  const lpOf = (st) => { if (!storeyLp.has(st)) storeyLp.set(st, line(w, st)?.ObjectPlacement?.value ?? null); return storeyLp.get(st); };
  const out = [];
  for (const id of portIds) {
    const p = line(w, id);
    if (!p) continue;
    const el = owner.get(id) ?? null, elLine = el ? line(w, el) : null;
    const runId = el && runOf.has(el) && defOf(runOf.get(el)) ? runOf.get(el) : null;
    const storey = (el && so.get(el)) ?? (runId ? so.get(runId) : null) ?? null;
    const pl = placeOf(w, p, storey ? lpOf(storey) : null);
    const flow = enumOf(p.FlowDirection) || 'NOTDEFINED';
    const systemType = enumOf(p.SystemType);
    const port = {
      id, guid: val(p.GlobalId), name: val(p.Name) || '', owner: el, ownerGuid: elLine ? val(elLine.GlobalId) : null,
      ownerClass: elLine ? String(w.api.GetNameFromTypeCode(elLine.type) || '').toUpperCase() : null,
      role: 'other', run: null, storey, at: pl.at, out: pl.out, flow, kind: null, system: null, systemType,
      shape: null, size: null, w: null, h: null, nominal: null, connectedTo: conn.get(id) ?? null,
    };
    const typ = enumOf(p.PredefinedType);
    if (typ === 'PIPE') port.kind = 'pipe'; else if (typ === 'DUCT') port.kind = 'duct';
    const own = w.readPset(id, PORT_PSET);
    if (runId) {
      const d = defOf(runId);
      port.role = 'run'; port.run = val(line(w, runId)?.GlobalId);
      port.kind = d.Kind === 'duct' ? 'duct' : 'pipe';
      port.system = String(d.System || '') || null;
      // the run's own section; a fitting's port that meets another run (a tee's branch, a reducer's far end) takes that run's below
      const sec = sectionOf({ kind: port.kind, mat: String(d.Material || ''), cls: String(d.Class || ''), size: String(d.Size || ''), shape: d.Shape, w: (Number(d.Width) || 0) * w.unitMm, h: (Number(d.Height) || 0) * w.unitMm });
      if (sec) { port.shape = sec.shape; port.w = sec.w; port.h = sec.h; port.size = sec.w; port.nominal = port.kind === 'pipe' ? String(d.Size || '') || null : null; }
      const fit = w.readPset(el, 'CadCraft_MepFitting');
      if (fit) port.fitting = String(fit.Kind || '');
    } else if (own) {
      port.role = 'equipment';
      port.kind = own.Kind === 'duct' ? 'duct' : own.Kind === 'pipe' ? 'pipe' : port.kind;
      port.system = String(own.System || '') || null;
      port.shape = ['round', 'rect', 'oval'].includes(own.Shape) ? own.Shape : 'round';
      port.w = (Number(own.Width) || 0) * w.unitMm || null;
      port.h = port.shape === 'round' ? port.w : (Number(own.Height) || 0) * w.unitMm || null;
      port.size = port.w; port.nominal = String(own.NominalSize || '') || null;
      port.portName = String(own.PortName || '') || null;
    }
    if (!port.system && systemType) port.system = (port.kind === 'duct' ? DUCT_SYS : PIPE_SYS)[systemType] || null;
    out.push(port);
  }
  // fittings' ports joined to a part of another run: that run's size and system (a tee's branch outlet, a reducer's small end)
  const byId = new Map(out.map((p) => [p.id, p]));
  for (const p of out) {
    if (!p.fitting || !p.connectedTo) continue;
    const q = byId.get(p.connectedTo);
    if (q && q.role === 'run' && !q.fitting && q.run !== p.run) for (const k of ['shape', 'size', 'w', 'h', 'nominal', 'system']) p[k] = q[k];
  }
  return out;
}
export const portSets = (w) => new Map(readPorts(w).map((p) => [p.id, p]));

/** The port's origin and its Z axis in the storey's axes (mm), from its placement chain. */
function placeOf(w, p, storeyLp) {
  const lp = p.ObjectPlacement?.value;
  if (!lp) return { at: null, out: null };
  try {
    const M = storeyLp ? w.relMatrix(storeyLp, lp) : scaled(w.api.GetWorldTransformMatrix(w.mid, lp), w.unitMm);
    const r = (x) => Math.round(x * 1000) / 1000;
    const L = Math.hypot(M[8], M[9], M[10]) || 1;
    return { at: [r(M[12]), r(M[13]), r(M[14])], out: [M[8] / L, M[9] / L, M[10] / L].map((x) => Math.round(x * 1e9) / 1e9) };
  } catch (e) { return { at: null, out: null }; }
}
const scaled = (M, k) => { const o = M.slice(); o[12] *= k; o[13] *= k; o[14] *= k; return o; };
