/* SPDX-License-Identifier: Apache-2.0 */
/**
 * place.js — put process equipment into the open BimCraft model (0.7 LC.5 step 2; needs add-on API 1.1, `api.model.write`).
 *
 *   placeEquipment(w, { equip, tag, desc, x, y, z, rot }, storey?, { addPorts }?) → { id, guid, ports: [id…] }
 *     w      BimCraft's ModelWriter (what model.write(label, fn) hands to fn); mm in, relative to the storey
 *     equip  from equip.js makeEquipment (NOT placed): the class, the solids, the nozzles
 *     storey the storey's express id; the first storey when left out
 *     addPorts  `api.mep.addPorts` (0.8 mep-08): the nozzles are written the way BimCraft's own equipment ports are (CadCraft_Port),
 *            so runs snap to them and Check connections sees them. Without it (an app that lacks the call) each nozzle is written
 *            here with CadCraft_Nozzle as in 0.7.
 *
 * It writes what an IFC file of ifc-out.js holds, through the writer: the element of the right class (IfcPump, IfcTank,
 * IfcHeatExchanger…) with its place, its solids as one tessellated body, its tag, the property set CadCraft_Plant, and one
 * IfcDistributionPort per nozzle, nested in the element (IFC2X3: IfcRelConnectsPortToElement), at the nozzle facing out, with
 * its flow direction and the property set CadCraft_Nozzle (size, flow). Contained in the storey. The fn that calls this must
 * be repeatable (model.write runs it again on Redo): no clocks, no random numbers — GlobalIds come from the writer.
 */
import { ids } from '../../../ifc-util.js';
import { t } from './core.js';
import { pipeSize } from '../../../mep/tables.js';

/** A nozzle as the port shape addPorts takes (the element's own axes, mm): nominal = its NPS label, size = the outside diameter. */
export const portOf = (nz) => ({ name: nz.name, system: '', kind: 'pipe', direction: nz.flow === 'SINK' ? 'in' : nz.flow === 'SOURCE' ? 'out' : 'both', shape: 'round',
  size: Math.round((pipeSize('steel', '40', String(nz.size))?.od ?? Number(nz.size) ?? 0) * 25.4 * 10) / 10 || 50, nominal: String(nz.size), x: nz.p[0], y: nz.p[1], z: nz.p[2], axis: nz.out });

const perp = (d) => {
  const a = Math.abs(d[0]) < 0.9 ? [1, 0, 0] : [0, 1, 0];
  const c = [d[1] * a[2] - d[2] * a[1], d[2] * a[0] - d[0] * a[2], d[0] * a[1] - d[1] * a[0]];
  const l = Math.hypot(...c) || 1;
  return c.map((x) => x / l);
};
const FLOW = { SINK: 'SINK', SOURCE: 'SOURCE', SINKANDSOURCE: 'SINKANDSOURCE' };

export function placeEquipment(w, item, storey = null, hooks = {}) {
  const eq = item.equip;
  if (!eq?.mesh || !eq.ifc) throw new Error(t('err.place.noequip'));
  const st = storey ?? ids(w.api, w.mid, 'IFCBUILDINGSTOREY')[0];
  if (!st) throw new Error(t('err.place.nostorey'));
  const stLine = w.api.GetLine(w.mid, st, false);
  const lp = w.placeAt(stLine.ObjectPlacement.value, item.x || 0, item.y || 0, item.z || 0, item.rot || 0);
  const positions = [], indices = [];
  for (const v of eq.mesh.verts) positions.push(v[0], v[1], v[2]);
  for (const t of eq.mesh.tris) indices.push(t[0], t[1], t[2]);
  const body = w.bodyItems({ type: 'mesh', positions, indices });
  const g = w.gid();
  const name = w.L(item.tag || eq.type), desc = item.desc ? w.L(item.desc) : null, type = w.L(eq.type), tag = item.tag ? w.L(item.tag) : null;
  const id = w.v4
    ? w.make(eq.ifc.cls, g, w.ownerHistory(), name, desc, type, w.H(lp), null, tag, eq.ifc.predefined)
    : w.make(eq.ifc.cls, g, w.ownerHistory(), name, desc, type, w.H(lp), null, tag);
  w.noteGuid(g, id);
  w.setShape(id, [w.rep('body', 'Body', body.type, body.items)]);
  const myLp = w.api.GetLine(w.mid, id, false).ObjectPlacement.value;
  let ports = [];
  if (typeof hooks.addPorts === 'function' && eq.nozzles.length) {
    ports = hooks.addPorts(w, id, eq.nozzles.map(portOf)).map((p) => p.id);
  } else {
    for (const nz of eq.nozzles) {
      const plp = w.make('IFCLOCALPLACEMENT', w.H(myLp), w.H(w.axisFrame(nz.p, nz.out, perp(nz.out))));
      const pid = w.v4
        ? w.make('IFCDISTRIBUTIONPORT', w.gid(), w.ownerHistory(), w.L(nz.name), null, null, w.H(plp), null, FLOW[nz.flow] || 'NOTDEFINED', 'PIPE', null)
        : w.make('IFCDISTRIBUTIONPORT', w.gid(), w.ownerHistory(), w.L(nz.name), null, null, w.H(plp), null, FLOW[nz.flow] || 'NOTDEFINED');
      if (!w.v4) w.make('IFCRELCONNECTSPORTTOELEMENT', w.guid(), w.ownerHistory(), null, null, w.H(pid), w.H(id));
      w.upsertPset(pid, 'CadCraft_Nozzle', [['Size', 'IFCLABEL', nz.size], ['Flow', 'IFCLABEL', nz.flow === 'SINK' ? 'in' : nz.flow === 'SOURCE' ? 'out' : 'both']]);
      ports.push(pid);
    }
    if (w.v4 && ports.length) w.make('IFCRELNESTS', w.guid(), w.ownerHistory(), null, null, w.H(id), ports.map((p) => w.H(p)));
  }
  w.contain(id, st);
  const rows = [['Tag', 'IFCLABEL', item.tag || ''], ['Type', 'IFCLABEL', eq.type]];
  if (item.desc) rows.push(['Description', 'IFCLABEL', item.desc]);
  if (eq.capacityM3) rows.push(['CapacityM3', 'IFCREAL', Math.round(eq.capacityM3 * 1000) / 1000]);
  w.upsertPset(id, 'CadCraft_Plant', rows);
  return { id, guid: g, ports };
}
