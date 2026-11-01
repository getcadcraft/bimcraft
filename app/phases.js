/* SPDX-License-Identifier: Apache-2.0 */
/**
 * phases.js — renovation phases: existing / demolition / new (0.8 EG.59, session bim_PART_2; plan docs/0.8-PART5.md).
 * No DOM: tools/bimcraft-test/phases-test.mjs (node bin/test-bimcraft.mjs --phases) runs it in Node.
 *
 * One property model, as tags.js: the phase is an IFC property. Property set CadCraft_Phase on each element, property Status
 * (IfcLabel) EXISTING | DEMOLISH | NEW, so any IFC program reads it as an ordinary property and BimCraft's Find, Color by property and
 * Quantities panel see the field 'p:CadCraft_Phase.Status' with nothing added. An element with no Status is "unassigned"; a renovation
 * that has been phased treats unassigned as new (summary() says how many). Doors and windows follow their wall (hosted = true).
 *
 *   PHASES = ['existing', 'demolish', 'new']          STATUS_FIELD = 'p:CadCraft_Phase.Status'
 *   phaseOp(guids, phase, { hosted = true }) → op for IfcEditor.modelChange   phase null = clear; one undo step
 *       → { id, ids, made, counts: { elements, hosted, cleared } }; refused when no element is found
 *   readPhase(w, id) → 'existing' | 'demolish' | 'new' | null
 *   phaseGuids(w) → { existing, demolish, new }: GlobalIds by phase, read from the model (no index)
 *   phaseKeys(ix, phase) → [keys]                       phase 'unassigned' = elements with no Status (products with a class only)
 *   summary(ix, { keys }) → { existing, demolish, new, unassigned }
 *   phaseView(ix, mode) → { show: [keys], ghost: [keys] }   mode 'all' | 'existing' | 'demolish' | 'new' (the result of the work:
 *       existing + new, demolition left out) | 'demo' (what is taken away, existing ghosted); feeds Visibility.isolate(show, { ghost })
 *   demolitionSchedule(ix, opts) → tagSchedule result for the demolished elements (class, name, storey, quantities), CSV via scheduleCsv
 *   PHASE_STYLE { existing, demolish, new } colours + plan line for the plan and 3D colouring (ink-grey, red dashed, ink-strong)
 */
import { ModelWriter } from './model-write.js';
import { ids, val, deleteLine } from './ifc-util.js';
import { find } from './ifc-find.js';
import { elementRows } from './ifc-qto.js';
import { readWalls } from './model-walls.js';
import { readOpenings } from './model-openings.js';

export const PHASE_PSET = 'CadCraft_Phase';
export const STATUS_FIELD = 'p:' + PHASE_PSET + '.Status';
export const PHASES = ['existing', 'demolish', 'new'];
export const LIMIT = 20000;
const IFC = { existing: 'EXISTING', demolish: 'DEMOLISH', new: 'NEW' };
const BACK = { EXISTING: 'existing', DEMOLISH: 'demolish', NEW: 'new', DEMOLITION: 'demolish', DEMOLISHED: 'demolish' };
/** Colours in the order the plan draws them: tokens of the model view, with a dashed line for what is coming out. */
export { PHASE_PLAN } from './phase-pens.js';   // the plan's and the printed plan's pens
export const PHASE_STYLE = {
  existing: { color: '#8A929C', dash: null, weight: 1 },
  demolish: { color: '#C0392B', dash: [6, 3], weight: 1 },
  new: { color: '#1F2933', dash: null, weight: 2 },
};
const fail = (key, fill = {}) => Object.assign(new Error(key), { key, fill });
const norm = (p) => (p === null || p === undefined || p === '' ? null : String(p).toLowerCase() === 'demolition' ? 'demolish' : String(p).toLowerCase());

export function readPhase(w, id) {
  const ps = w.readPset(id, PHASE_PSET);
  if (!ps) return null;
  return BACK[String(ps.Status || '').toUpperCase()] || null;
}

const op = (fn) => (ed) => { const w = new ModelWriter(ed.W, ed.api, ed.mid); return w.run(() => fn(w)); };

/** guid → id for the products asked for. */
function productsByGuid(w, guids) {
  const want = new Set(guids), out = new Map();
  let list = [];
  try { list = ids(w.api, w.mid, 'IFCPRODUCT', true); } catch (e) { list = []; }
  for (const id of list) {
    if (out.size === want.size) break;
    const g = w.guidOf(id);
    if (g && want.has(g)) out.set(g, id);
  }
  return out;
}
/** The element's CadCraft_Phase, copied when another element shares the set (a set made elsewhere may be shared). */
function ownPhase(w, id) {
  const d = w.defNamed(id, PHASE_PSET);
  if (!d) return null;
  let shared = false;
  for (const rid of ids(w.api, w.mid, 'IFCRELDEFINESBYPROPERTIES')) {
    const r = w.api.GetLine(w.mid, rid, false);
    if (r?.RelatingPropertyDefinition?.value === d.def && (rid !== d.rel || (r.RelatedObjects || []).length > 1)) { shared = true; break; }
  }
  if (!shared) return d;
  const rel = w.touch(d.rel);
  rel.RelatedObjects = (rel.RelatedObjects || []).filter((h) => h.value !== id);
  w.write(rel);
  w._defs = null;
  return null;
}
/** Take the element's CadCraft_Phase off; the set goes with it. → true when there was one. */
function dropPhase(w, id) {
  const d = ownPhase(w, id) || w.defNamed(id, PHASE_PSET);
  if (!d) return false;
  const rel = w.api.GetLine(w.mid, d.rel, false);
  if ((rel.RelatedObjects || []).length <= 1) { w.touch(d.rel); deleteLine(w.api, w.mid, d.rel); }
  for (const h of d.line.HasProperties || []) { w.touch(h.value); deleteLine(w.api, w.mid, h.value); }
  w.touch(d.def); deleteLine(w.api, w.mid, d.def);
  w._defs = null;
  return true;
}

/** Set (or clear, phase null) the phase of elements named by GlobalId. Doors and windows of a wall follow it (hosted). One undo step. */
export function phaseOp(guids, phase, { hosted = true } = {}) {
  const p = norm(phase);
  if (p !== null && !PHASES.includes(p)) throw fail('eg59.err.phase', { phase: String(phase) });
  const list = [...new Set((guids || []).map(String))].slice(0, LIMIT);
  if (!list.length) throw fail('eg59.err.nosel');
  return op((w) => {
    const byGuid = productsByGuid(w, list);
    const counts = { elements: 0, hosted: 0, cleared: 0 };
    const touched = [];
    const targets = new Map();   // id → is hosted
    for (const g of list) { const id = byGuid.get(g); if (id !== undefined) targets.set(id, false); }
    if (!targets.size) throw fail('eg59.err.nosel');
    if (hosted) {
      const walls = readWalls(w), onWall = new Set([...targets.keys()].filter((id) => walls.some((x) => x.id === id)));
      if (onWall.size) for (const o of readOpenings(w, null, walls)) if (onWall.has(o.wall) && !targets.has(o.id)) targets.set(o.id, true);
    }
    for (const [id, isHosted] of targets) {
      if (p === null) { if (dropPhase(w, id)) counts.cleared++; else continue; }
      else {
        if (readPhase(w, id) === p) continue;
        ownPhase(w, id);
        w.upsertPset(id, PHASE_PSET, [['Status', 'IFCLABEL', IFC[p]]]);
      }
      if (isHosted) counts.hosted++; else counts.elements++;
      touched.push(id);
    }
    return { id: touched[0], ids: touched, made: new Map(), counts };
  });
}

/** Counts and GlobalIds by phase straight from the model (no property index): { existing: [guid], demolish: [guid], new: [guid] }. For the assistant tools. */
export function phaseGuids(w) {
  const out = { existing: [], demolish: [], new: [] };
  for (const rid of ids(w.api, w.mid, 'IFCRELDEFINESBYPROPERTIES')) {
    const r = w.api.GetLine(w.mid, rid, false), d = r?.RelatingPropertyDefinition?.value;
    if (!d) continue;
    const ps = w.api.GetLine(w.mid, d, false);
    if (val(ps?.Name) !== PHASE_PSET) continue;
    let st = null;
    for (const h of ps.HasProperties || []) { const p = w.api.GetLine(w.mid, h.value, false); if (val(p?.Name) === 'Status') st = BACK[String(val(p.NominalValue) || '').toUpperCase()] || null; }
    if (!st) continue;
    for (const h of r.RelatedObjects || []) { const g = w.guidOf(h.value); if (g) out[st].push(g); }
  }
  return out;
}

/** Keys of the elements in a phase; 'unassigned' = products (they have a class) with no Status. */
export function phaseKeys(ix, phase) {
  const p = norm(phase);
  if (p === 'unassigned') return find(ix, { rules: [{ field: STATUS_FIELD, op: 'hasnot' }, { field: 'cls', op: 'has' }] });
  if (!PHASES.includes(p)) return [];
  return find(ix, { rules: [{ field: STATUS_FIELD, op: 'is', value: IFC[p] }] });
}

/** Counts by phase over all elements, or over `keys`. */
export function summary(ix, { keys = null } = {}) {
  const out = { existing: 0, demolish: 0, new: 0, unassigned: 0 };
  const st = ix.values(STATUS_FIELD), cls = ix.values('cls');
  const only = keys ? new Set(keys) : null;
  for (const id of ix.ids) {
    if (only && !only.has(ix.keyBase + id)) continue;
    if (cls.get(id) === undefined) continue;
    const v = BACK[String(st.get(id) ?? '').toUpperCase()];
    if (v) out[v]++; else out.unassigned++;
  }
  return out;
}

/** What to draw solid and what see-through for a phase view. */
export function phaseView(ix, mode = 'all') {
  const ex = phaseKeys(ix, 'existing'), de = phaseKeys(ix, 'demolish'), nw = phaseKeys(ix, 'new'), un = phaseKeys(ix, 'unassigned');
  switch (mode) {
    case 'existing': return { show: ex.concat(de), ghost: nw };      // the building as surveyed
    case 'demo': return { show: de, ghost: ex };                       // what is taken away
    case 'new': return { show: ex.concat(nw).concat(un), ghost: de };  // the result: demolition shown ghosted
    case 'result': return { show: ex.concat(nw).concat(un), ghost: [] };
    default: return { show: ex.concat(de, nw, un), ghost: [] };
  }
}

/** The demolition schedule: every element to be taken away with its class, name, level and quantities. */
export function demolitionSchedule(ix, { columns = ['cls', 'name', 'storey'] } = {}) {
  const keys = phaseKeys(ix, 'demolish');
  const rr = elementRows(ix, { keys, columns });
  return { columns: [...columns], rows: rr.rows, count: rr.rows.length };
}
