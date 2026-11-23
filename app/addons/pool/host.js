/* SPDX-License-Identifier: Apache-2.0 */
/**
 * host.js — the Pool generator's adapter for BimCraft (copied from tools/pool/src/pool/hosts/bimcraft.js by tools/pool/sync.mjs). 0.11 POOL.2.
 *
 * The pool becomes ELEMENTS of the open model on a level: slab, walls, stair flight, coverings, railing, filter, pump, tank, pipe segments, each
 * with a swept-solid body, a colour, the `CadCraft_Pool` property set and base quantities. One placement is one undo step (api.model.write);
 * placing again replaces that pool's elements (found by the Job row of their property set) and nobody else's. z = 0 of the pool (the coping) is
 * the level's own height. A file in IFC2X3 has no filter, pump, tank, pipe or drain class: those are written as proxies there.
 * POOL.8: slab pieces (a sloping floor, any outline) are faceted solids; pipes, fittings, terminals, pumps and filters carry their ports
 * (IFC4: IfcRelNests, IFC2X3: IfcRelConnectsPortToElement) and the ports that meet are connected (IfcRelConnectsPorts); the gate is an IfcDoor
 * (type GATE in IFC4); bars are IfcReinforcingBar in IFC4 (a proxy in IFC2X3, which asks for a steel grade we do not know).
 * Not written: the machine room's IfcSpace (BimCraft makes spaces from its own rooms).
 */
import { ids } from '../../ifc-util.js';
import { psetRows, qtyRows } from './lib/ifcout.js';

export const PSET = 'CadCraft_Pool';
const CLASSES = ['IFCSLAB', 'IFCWALL', 'IFCWALLSTANDARDCASE', 'IFCSTAIRFLIGHT', 'IFCCOVERING', 'IFCRAILING', 'IFCFILTER', 'IFCPUMP', 'IFCTANK', 'IFCPIPESEGMENT', 'IFCPIPEFITTING', 'IFCWASTETERMINAL', 'IFCELECTRICDISTRIBUTIONBOARD', 'IFCDOOR', 'IFCREINFORCINGBAR', 'IFCBUILDINGELEMENTPROXY'];
const r6 = (v) => Math.round(v * 1e6) / 1e6;
const rgb = (hex) => { const m = /^#?([0-9a-f]{6})$/i.exec(String(hex)); const n = m ? parseInt(m[1], 16) : 0xb8b8b0; return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255]; };
export const jobKey = (name) => 'pool|' + String(name || 'Pool').slice(0, 60);

function elementsOf(w, key) {
  const out = [];
  for (const cls of CLASSES) {
    let list = [];
    try { list = ids(w.api, w.mid, cls); } catch { list = []; }
    for (const id of list) { let ps = null; try { ps = w.readPset(id, PSET); } catch { ps = null; } if (ps && ps.Job === key) out.push(id); }
  }
  return [...new Set(out)];
}
/** The ports of these elements (IFC4 nested, IFC2X3 port-to-element). */
function portsOf(w, list) {
  const set = new Set(list), out = [];
  try { for (const rid of ids(w.api, w.mid, 'IFCRELNESTS')) { const r = w.api.GetLine(w.mid, rid, false); if (set.has(r.RelatingObject?.value)) for (const h of r.RelatedObjects || []) out.push(h.value); } } catch { /* none */ }
  try { for (const rid of ids(w.api, w.mid, 'IFCRELCONNECTSPORTTOELEMENT')) { const r = w.api.GetLine(w.mid, rid, false); if (set.has(r.RelatedElement?.value)) out.push(r.RelatingPort.value); } } catch { /* IFC4 has none */ }
  return out;
}
/** Remove one pool's elements (and their ports). → how many elements went. */
export function dropJob(w, key) { const old = elementsOf(w, key); if (old.length) w.dropProduct([...old, ...portsOf(w, old)]); return old.length; }

/** One slab piece as a faceted solid (points in mm, written in the file's units). */
function brep(w, pc) {
  const P = (x, y, z) => w.make('IFCCARTESIANPOINT', [w.u(x), w.u(y), w.u(z)].map(r6));
  const lo = pc.poly.map(([x, y]) => P(x, y, pc.bot[0] + pc.bot[1] * x)), hi = pc.poly.map(([x, y]) => P(x, y, pc.top[0] + pc.top[1] * x));
  const face = (pts) => w.make('IFCFACE', [w.H(w.make('IFCFACEOUTERBOUND', w.H(w.make('IFCPOLYLOOP', pts.map((id) => w.H(id)))), true))]);
  const faces = [face([...lo].reverse()), face(hi)];
  for (let i = 0; i < lo.length; i++) { const j = (i + 1) % lo.length; faces.push(face([lo[i], lo[j], hi[j], hi[i]])); }
  return w.make('IFCFACETEDBREP', w.H(w.make('IFCCLOSEDSHELL', faces.map((f) => w.H(f)))));
}
/** The attributes after Tag for the classes this generator writes that the writer does not know. */
function extraFor(w, occ, e, pre) {
  if (occ === 'IFCDOOR') { const len = (v) => (Number(v) > 0 ? r6(w.u(Number(v))) : null); return [len(e.params?.height), len(e.params?.width), ...(w.v4 ? ['GATE', 'SINGLE_SWING_LEFT', null] : [])]; }
  if (occ === 'IFCREINFORCINGBAR') return [null, r6(w.u(e.bar.dia)), null, r6(w.u(e.bar.length)), 'MAIN', 'TEXTURED'];
  return w.occExtra(occ, { ifc: { predefined: pre } });
}

/** Write the element list into the model through a ModelWriter (inside api.model.write). links = [[port key, port key]]. → how many elements were made. */
export function writeElements(w, storeyGuid, elements, key, at = [0, 0], links = []) {
  const st = w.byGuid(storeyGuid);
  if (!st) throw new Error('storey');
  const stl = w.api.GetLine(w.mid, st, false);
  dropJob(w, key);
  const sch = typeof w.fileSchema === 'function' ? w.fileSchema() : null;
  const styles = new Map();
  const styleFor = (hex, alpha) => { const k = hex + '|' + alpha; if (!styles.has(k)) styles.set(k, w.surfaceStyle('Pool ' + hex + (alpha < 1 ? ' ' + alpha : ''), rgb(hex), 1 - alpha)); return styles.get(k); };
  let n = 0;
  const portIds = new Map();
  for (const e of elements) {
    if (e.ifc === 'IFCSPACE') continue;
    let occ = sch && sch.entity(e.ifc) ? e.ifc : 'IFCBUILDINGELEMENTPROXY';
    if (occ === 'IFCREINFORCINGBAR' && !w.v4) occ = 'IFCBUILDINGELEMENTPROXY';
    const lp = w.placeAt(stl.ObjectPlacement.value, at[0], at[1], 0, 0);
    const g = w.gid();
    const pre = e.predefined || (e.objectType ? 'USERDEFINED' : 'NOTDEFINED');
    const id = w.make(occ, g, w.ownerHistory(), w.L(e.name), null, w.L(e.objectType || e.group), w.H(lp), null, w.L(e.key), ...extraFor(w, occ, e, pre));
    w.noteGuid(g, id);
    const items = [];
    let breps = 0;
    for (const pc of e.pieces) {
      if (pc.slab) { items.push(brep(w, pc)); breps++; continue; }
      if (!(pc.depth > 0)) continue;
      items.push(w.extrudeAt(w.profile(pc.profile), w.axisFrame(pc.origin, pc.z, pc.x), pc.depth));
    }
    if (!items.length) continue;
    w.setShape(id, [w.rep('body', 'Body', !breps ? 'SweptSolid' : breps === items.length ? 'Brep' : 'SolidModel', items)]);
    const style = styleFor(e.color, e.alpha ?? 1);
    for (const it of items) w.styleItem(it, style);
    w.contain(id, st);
    w.upsertPset(id, PSET, [['Job', 'IFCLABEL', key], ...psetRows(e)]);
    const q = qtyRows(e);
    if (q.length) w.upsertQto(id, 'Qto_CadCraftPoolBaseQuantities', q);
    if (e.ports && e.ports.length) {
      const made = [];
      for (const p of e.ports) {
        const z = p.dir, x0 = Math.abs(z[2]) < 0.9 ? [-z[1], z[0], 0] : [1, 0, 0], xl = Math.hypot(...x0) || 1;
        const plp = w.make('IFCLOCALPLACEMENT', w.H(lp), w.H(w.axisFrame(p.at, z, x0.map((v) => v / xl))));
        const name = w.L(p.flow === 'SOURCE' ? 'Outlet' : 'Inlet'), ot = w.L(String(p.system || '').toUpperCase());
        const pid = w.v4 ? w.make('IFCDISTRIBUTIONPORT', w.guid(), w.ownerHistory(), name, null, ot, w.H(plp), null, p.flow, 'PIPE', 'NOTDEFINED')
          : w.make('IFCDISTRIBUTIONPORT', w.guid(), w.ownerHistory(), name, null, ot, w.H(plp), null, p.flow);
        if (!w.v4) w.make('IFCRELCONNECTSPORTTOELEMENT', w.guid(), w.ownerHistory(), null, null, w.H(pid), w.H(id));
        portIds.set(p.key, pid); made.push(pid);
      }
      if (w.v4) w.make('IFCRELNESTS', w.guid(), w.ownerHistory(), null, null, w.H(id), made.map((m) => w.H(m)));
    }
    n++;
  }
  for (const [a, b] of links) if (portIds.has(a) && portIds.has(b)) w.make('IFCRELCONNECTSPORTS', w.guid(), w.ownerHistory(), null, null, w.H(portIds.get(a)), w.H(portIds.get(b)), null);
  return n;
}

export function makeHost(api) {
  const t = api.t;
  const level = () => {
    const lv = typeof api.model.levels === 'function' ? api.model.levels() : [];
    if (!lv.length) throw new Error(t('pool.bim.nolevel'));
    return lv[0];
  };
  return {
    id: 'bimcraft',
    notes: [t('pool.bim.note')],
    actions: [
      { id: 'place', label: t('pool.bim.place'), async run(result) {
        const lv = level(), key = jobKey(result.design.name);
        const r = await api.model.write(t('pool.bim.place.label'), (w) => writeElements(w, lv.guid, result.built.elements, key, result.at || [0, 0], result.net ? result.net.links : []));
        return t('pool.bim.placed', { n: r.value, level: lv.name || '' });
      } },
      { id: 'remove', label: t('pool.bim.remove'), async run(result) {
        const key = jobKey(result.design.name);
        const r = await api.model.write(t('pool.bim.remove.label'), (w) => dropJob(w, key));
        return r.value ? t('pool.bim.removed', { n: r.value }) : t('pool.bim.none');
      } },
    ],
  };
}
