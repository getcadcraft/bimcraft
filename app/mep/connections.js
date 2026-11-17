/* SPDX-License-Identifier: Apache-2.0 */
/**
 * mep/connections.js — the Connections check (0.7 LC.9 item 3, session `mep-07`). No DOM: bin/test-bimcraft.mjs --mep07 runs it.
 * Reads the open model's ports (mep/ports.js), runs (mep-model.js) and equipment (mep/equipment.js) and lists what is not
 * joined up. A drafting and coordination aid: it checks connections and sizes as drawn, never flows or pressures.
 *
 *   checkConnections(w) → { issues: [{ code, level, key, fill, ids, at, storey }], counts: { error, warn }, ports, connections }
 *     code   open-port   a port of a piece of equipment that nothing is connected to (warn)
 *            open-end    a run that ends with nothing on its end (warn)
 *            kind        a pipe joined to a duct (error)
 *            size        joined ports of different sizes (a pipe's nominal size, else its mm; a duct's shape and sides) (error)
 *            system      joined ports of different systems (error)
 *            no-source   a run whose connected network has no equipment port that supplies it (out or both); drains,
 *                        storm and vents are not checked for this — their water comes from fixtures (warn)
 *            fixed-gone  a run end fixed to a port that is no longer in the model (error)
 *            spec-fitting  (0.9.1) a tee or reducer on a run whose pipe spec says it has none (warn)
 *            family-size   (0.9.1) a manufacturer's family on a run of another size: it is drawn at its own size, never stretched (warn)
 *            family-gone   (0.9.1) a run names a family that is no longer in the model (error)
 *     key / fill  the language key of the line and its values; ids = express ids to select; at = plan mm of the place
 */
import { readPorts } from './ports.js';
import { readRuns, PIPE_SYSTEMS } from '../mep-model.js';
import { readEquipment, EQUIPMENT } from './equipment.js';
import { specOfMaterial } from './pipe-specs.js';   // 0.9.1 #1499: a spec says whether it has tees and reducers
import { familyById, sizeFits } from './oem-families.js';
import { sectionOf } from '../mep-model.js';

const NO_SOURCE_CHECK = new Set(['san', 'storm', 'vent']);

export function checkConnections(w) {
  const ports = readPorts(w), runs = readRuns(w), eqs = readEquipment(w);
  const byId = new Map(ports.map((p) => [p.id, p]));
  const eqById = new Map(eqs.map((e) => [e.id, e])), eqByGuid = new Map(eqs.map((e) => [e.guid, e]));
  const runByGuid = new Map(runs.map((r) => [r.guid, r]));
  const issues = [];
  const push = (code, level, fill, ids, at, storey) => issues.push({ code, level, key: 'mep.chk.' + code, fill, ids, at, storey });
  const eqName = (e) => ({ kind: e.kind, tag: e.tag || '' });
  const runName = (r) => ({ kind: r.kind, system: r.system, size: r.kind === 'pipe' ? r.size : null, guid: r.guid });
  let connections = 0;
  for (const p of ports) {
    if (!p.connectedTo) {
      if (p.role === 'equipment' && eqById.has(p.owner)) { const e = eqById.get(p.owner); push('open-port', 'warn', { ...eqName(e), port: p.portName || p.name }, [p.owner], p.at, p.storey); }
      else if (p.role === 'run') { const r = runByGuid.get(p.run); if (r) push('open-end', 'warn', runName(r), [p.owner], p.at, p.storey); }
      continue;
    }
    const q = byId.get(p.connectedTo);
    if (!q || q.id < p.id) continue;   // each connection once
    connections++;
    const ids = [p.owner, q.owner].filter((x) => x != null);
    if (p.kind && q.kind && p.kind !== q.kind) { push('kind', 'error', { a: p.kind, b: q.kind }, ids, p.at, p.storey); continue; }
    if (p.system && q.system && p.system !== q.system) push('system', 'error', { a: p.system, b: q.system, kind: p.kind || q.kind }, ids, p.at, p.storey);
    const m = sizeMismatch(p, q);
    if (m) push('size', 'error', m, ids, p.at, p.storey);
  }
  // fixed ends whose port is gone
  for (const r of runs) r.ends.forEach((f, k) => {
    if (!f) return;
    const e = eqByGuid.get(f.eq);
    if (!e || !EQUIPMENT[e.kind] || !portNames(e).includes(f.port)) push('fixed-gone', 'error', { ...runName(r), end: k ? 'end' : 'start', port: f.port }, r.parts.slice(0, 1), r.points[k ? r.points.length - 1 : 0], r.storey);
  });
  // 0.9.1 #1499: what a run's pipe spec does not make, and families that are not the run's size
  for (const r of runs) {
    const sp = r.kind === 'pipe' ? specOfMaterial(r.mat) : null;
    if (sp && (!sp.tees || !sp.reducers)) for (const id of r.parts) {
      const f = w.readPset(id, 'CadCraft_MepFitting'), k = f ? String(f.Kind || '') : '';
      if ((k === 'tee' && !sp.tees) || (k === 'reducer' && !sp.reducers)) push('spec-fitting', 'warn', { name: sp.name, what: k, size: String(f.Size || '') }, [id], r.points[0], r.storey);
    }
    for (const v of r.valves || []) {
      if (!v.fam) continue;
      const fam = familyById(v.fam), sec = sectionOf(r);
      if (!fam) { push('family-gone', 'error', { ...runName(r), family: v.fam }, r.parts.slice(0, 1), r.points[0], r.storey); continue; }
      const fit = sec ? sizeFits(fam, sec) : { ok: true };
      if (!fit.ok) push('family-size', 'warn', { name: fam.name, have: fit.nominal || String(fit.have), want: sec.label }, r.parts.filter((id) => w.readPset(id, 'CadCraft_Valve')?.FamilyId === fam.id), r.points[0], r.storey);
    }
  }
  // networks: elements joined through their ports (a run's parts are one); a run with no supplying equipment port in its network
  const parent = new Map();
  const find = (x) => { while (parent.has(x) && parent.get(x) !== x) { parent.set(x, parent.get(parent.get(x)) ?? parent.get(x)); x = parent.get(x); } return x; };
  const join = (a, b) => { const ra = find(a), rb = find(b); if (ra !== rb) parent.set(ra, rb); };
  const node = (x) => { if (!parent.has(x)) parent.set(x, x); return x; };
  const partRun = new Map();
  for (const r of runs) { node('run:' + r.guid); for (const id of r.parts) { partRun.set(id, r.guid); join(node('el:' + id), 'run:' + r.guid); } }
  for (const p of ports) { if (p.owner == null) continue; node('el:' + p.owner); const q = p.connectedTo && byId.get(p.connectedTo); if (q && q.owner != null) join('el:' + p.owner, node('el:' + q.owner)); }
  const supplied = new Set();
  for (const p of ports) {
    if (p.owner == null || partRun.has(p.owner)) continue;   // a run's own ports never supply it
    if (p.flow === 'SOURCE' || p.flow === 'SOURCEANDSINK') supplied.add(find('el:' + p.owner));
  }
  for (const r of runs) {
    if (r.kind === 'pipe' && (NO_SOURCE_CHECK.has(r.system) || PIPE_SYSTEMS[r.system]?.drain)) continue;
    if (!supplied.has(find('run:' + r.guid))) push('no-source', 'warn', runName(r), r.parts.slice(), r.points[0], r.storey);
  }
  const counts = { error: issues.filter((i) => i.level === 'error').length, warn: issues.filter((i) => i.level === 'warn').length };
  issues.sort((a, b) => (a.level === b.level ? 0 : a.level === 'error' ? -1 : 1));
  return { issues, counts, ports: ports.length, connections };
}
const portNames = (e) => EQUIPMENT[e.kind].build(e.values).ports.map((p) => p.name);

/** Two joined ports' sizes, compared: → { a, b } (labels in mm or the nominal size) when they differ, else null. */
export function sizeMismatch(p, q) {
  if (p.kind === 'pipe' || q.kind === 'pipe') {
    if (p.nominal && q.nominal) return p.nominal === q.nominal ? null : { a: p.nominal + '"', b: q.nominal + '"' };   // i18n-ignore: size mark
    if (p.size > 0 && q.size > 0 && Math.abs(p.size - q.size) > 1) return { a: mmLabel(p), b: mmLabel(q) };
    return null;
  }
  if (!(p.w > 0) || !(q.w > 0)) return null;
  const sameShape = (p.shape || 'rect') === (q.shape || 'rect');
  if (sameShape && Math.abs(p.w - q.w) <= 1 && Math.abs((p.h || p.w) - (q.h || q.w)) <= 1) return null;
  return { a: mmLabel(p), b: mmLabel(q) };
}
const mmLabel = (p) => (p.shape === 'round' || p.kind === 'pipe' ? 'Ø' + Math.round(p.size || p.w) : Math.round(p.w) + '×' + Math.round(p.h || p.w));   // i18n-ignore: size marks
