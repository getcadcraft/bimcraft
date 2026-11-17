/* SPDX-License-Identifier: Apache-2.0 */
/**
 * classify-model.js — classification codes in the model's own IFC (0.10 BK.94, session bk-content-10). No DOM: bin/test-bimcraft.mjs
 * --classify runs it in Node. The rules and the packs are ./classify/classify.js (a copy of lib/classify); this file is the IFC side.
 *
 * In the file a code is what every BIM program reads: IfcRelAssociatesClassification → IfcClassificationReference (the code in
 * Identification, IFC2X3 ItemReference; the title in Name) → IfcClassification (the system). An element's own code wins over its
 * type's (a code on an IfcWallType is every wall's of that type); a project default by class is written as a real association too,
 * marked by the relation's Name `CadCraft default`, and goes as soon as the element or its type has a code of its own.
 *
 *   readProjectClassification(w) → { version: 1, systems: [id…], defaults: bool, schedules: bool, defaultCodes: { system: { 'IfcWall': [code, title] … } }, editions: { system: text } }
 *   writeProjectClassification(w, rec)                    the record on IfcProject (CadCraft_Classification.Record), cleaned
 *   classificationIndex(w) → { byObject: Map(id → [{ system, systemName, code, title, rel, ref, isDefault }]), typeOf: Map(id → type id) }
 *   codesOf(w, id, ix?) → { own, type, fallback, effective, typeId }      each { system: { code, title } }; effective adds `from`; other
 *       systems (not one of the three) are listed under their own name in `others` [{ systemName, code, title, from }]
 *   setCode(w, id, system, code, title, { isDefault })    low level; '' clears. Reuses the system's IfcClassification and the code's reference
 *   syncClassDefaults(w)                                  after every model change (model-ops.js op): defaults follow the project record
 *   effectiveCodes(w, system) → Map(id → { code, title, from })   for schedules
 *   anyByGuid(w) → (guid) → id                             any rooted line by GlobalId (elements, types, spaces)
 */
import { ids, val, deleteLine } from './ifc-util.js';
import { SYSTEM_IDS, systemById, systemOf, cleanCode, cleanTitle, effective, defaultFor } from './classify/classify.js';

export const CLASSIFY_PSET = 'CadCraft_Classification';
export const DEFAULT_MARK = 'CadCraft default';
const cname = (l) => String(l?.constructor?.name || '');
const idsOf = (w, name, inherited = false) => { try { return ids(w.api, w.mid, name, inherited); } catch (e) { return []; } };
const projectId = (w) => idsOf(w, 'IFCPROJECT')[0] || null;

export function cleanRecord(j) {
  const rec = { version: 1, systems: [], defaults: false, schedules: false, defaultCodes: {}, editions: {} };
  if (!j || typeof j !== 'object') return rec;
  for (const s of Array.isArray(j.systems) ? j.systems : []) if (SYSTEM_IDS.includes(s) && !rec.systems.includes(s)) rec.systems.push(s);
  rec.defaults = j.defaults === true;
  rec.schedules = j.schedules === true;   // the schedules show a column per system in use
  for (const [sys, map] of Object.entries(j.defaultCodes && typeof j.defaultCodes === 'object' ? j.defaultCodes : {})) {
    if (!SYSTEM_IDS.includes(sys) || !map || typeof map !== 'object') continue;
    const out = {};
    for (const [cls, v] of Object.entries(map).slice(0, 200)) {
      const code = cleanCode(Array.isArray(v) ? v[0] : v), title = cleanTitle(Array.isArray(v) ? v[1] : '');
      if (/^Ifc[A-Za-z]+(\.[A-Z_]+)?$/.test(cls) && code) out[cls] = [code, title];
    }
    if (Object.keys(out).length) rec.defaultCodes[sys] = out;
  }
  for (const [sys, e] of Object.entries(j.editions && typeof j.editions === 'object' ? j.editions : {})) if (SYSTEM_IDS.includes(sys) && cleanTitle(e)) rec.editions[sys] = cleanTitle(e).slice(0, 80);
  return rec;
}
export function readProjectClassification(w) {
  const p = projectId(w);
  const raw = p ? w.readPset(p, CLASSIFY_PSET)?.Record : null;
  if (!raw) return cleanRecord(null);
  try { const j = JSON.parse(raw); return j && j.version === 1 ? cleanRecord(j) : cleanRecord(null); } catch (e) { return cleanRecord(null); }
}
export function writeProjectClassification(w, rec) {
  const p = projectId(w);
  if (!p) throw Object.assign(new Error('classify.err.noproject'), { key: 'classify.err.noproject' });
  const clean = cleanRecord(rec);
  w.upsertPset(p, CLASSIFY_PSET, [['Record', 'IFCTEXT', JSON.stringify(clean)]]);
  return clean;
}

/** One pass over the file's classification relations. */
export function classificationIndex(w) {
  const byObject = new Map(), typeOf = new Map(), refs = new Map();
  const line = (id) => { try { return w.api.GetLine(w.mid, id, false); } catch (e) { return null; } };
  const sysName = (h, depth = 0) => {
    const l = h && line(h.value ?? h);
    if (!l || depth > 8) return '';
    if (/CLASSIFICATIONREFERENCE$/i.test(cname(l))) return sysName(l.ReferencedSource, depth + 1);
    return String(val(l.Name) ?? '');
  };
  const refOf = (id) => {
    if (refs.has(id)) return refs.get(id);
    const l = line(id);
    let r = null;
    if (l && /CLASSIFICATIONREFERENCE$/i.test(cname(l))) {
      const systemName = sysName(l.ReferencedSource);
      r = { ref: id, systemName, system: systemOf(systemName), code: String(val(l.Identification ?? l.ItemReference) ?? ''), title: String(val(l.Name) ?? '') };
    } else if (l && /CLASSIFICATION$/i.test(cname(l))) {
      const systemName = String(val(l.Name) ?? '');
      r = { ref: id, systemName, system: systemOf(systemName), code: '', title: '' };
    }
    refs.set(id, r);
    return r;
  };
  for (const rid of idsOf(w, 'IFCRELASSOCIATESCLASSIFICATION')) {
    const r = line(rid);
    const c = r?.RelatingClassification?.value;
    const ref = c ? refOf(c) : null;
    if (!ref) continue;
    const isDefault = val(r.Name) === DEFAULT_MARK;
    for (const h of r.RelatedObjects || []) { if (!byObject.has(h.value)) byObject.set(h.value, []); byObject.get(h.value).push({ ...ref, rel: rid, isDefault }); }
  }
  for (const rid of idsOf(w, 'IFCRELDEFINESBYTYPE')) {
    const r = line(rid);
    const t = r?.RelatingType?.value;
    if (t) for (const h of r.RelatedObjects || []) typeOf.set(h.value, t);
  }
  return { byObject, typeOf };
}

const bySystem = (rows, pick) => { const out = {}; for (const r of rows) if (r.system && r.code && pick(r) && !out[r.system]) out[r.system] = { code: r.code, title: r.title }; return out; };
export function codesOf(w, id, ix = classificationIndex(w)) {
  const mine = ix.byObject.get(id) || [], typeId = ix.typeOf.get(id) ?? null, typeRows = typeId ? ix.byObject.get(typeId) || [] : [];
  const own = bySystem(mine, (r) => !r.isDefault), fallback = bySystem(mine, (r) => r.isDefault), type = bySystem(typeRows, () => true);
  const others = [...mine.filter((r) => !r.system && r.code).map((r) => ({ systemName: r.systemName, code: r.code, title: r.title, from: 'element' })),
    ...typeRows.filter((r) => !r.system && r.code).map((r) => ({ systemName: r.systemName, code: r.code, title: r.title, from: 'type' }))];
  return { own, type, fallback, effective: effective(own, type, fallback), typeId, others };
}
export function effectiveCodes(w, system) {
  const ix = classificationIndex(w), out = new Map();
  const seen = new Set([...ix.byObject.keys(), ...ix.typeOf.keys()]);
  for (const id of seen) { const e = codesOf(w, id, ix).effective[system]; if (e) out.set(id, e); }
  return out;
}

/** The system's IfcClassification in this file (the first whose name means it), made when there is none. */
function classificationLine(w, system, edition = '') {
  const sys = systemById(system);
  let found = null;
  for (const id of idsOf(w, 'IFCCLASSIFICATION')) { const n = String(val(w.api.GetLine(w.mid, id, false).Name) ?? ''); if (systemOf(n) === system) { if (n === sys.ifcName) return id; found ??= id; } }
  if (found) return found;
  return w.v4
    ? w.make('IFCCLASSIFICATION', w.L(sys.publisher), w.L(edition), null, w.L(sys.ifcName), null, null, null)
    : w.make('IFCCLASSIFICATION', w.L(sys.publisher), w.L(edition || 'not stated'), null, w.L(sys.ifcName));   // i18n-ignore: IFC2X3 needs an Edition; the words go into the file, the same in every language
}
function referenceLine(w, system, code, title, edition) {
  const cls = classificationLine(w, system, edition);
  for (const id of idsOf(w, 'IFCCLASSIFICATIONREFERENCE')) {
    const l = w.api.GetLine(w.mid, id, false);
    if (l.ReferencedSource?.value !== cls || String(val(l.Identification ?? l.ItemReference) ?? '') !== code) continue;
    if (title && String(val(l.Name) ?? '') !== title) { const q = w.touch(id); q.Name = w.L(title); w.write(q); }
    return id;
  }
  const ident = w.T('IFCIDENTIFIER', code);
  return w.v4 ? w.make('IFCCLASSIFICATIONREFERENCE', null, ident, w.L(title), w.H(cls), null, null) : w.make('IFCCLASSIFICATIONREFERENCE', null, ident, w.L(title), w.H(cls));
}
function unrelate(w, rel, id) {
  const r = w.touch(rel);
  const rest = (r.RelatedObjects || []).filter((h) => h.value !== id);
  if (rest.length) { r.RelatedObjects = rest; w.write(r); return; }
  const ref = r.RelatingClassification?.value;
  deleteLine(w.api, w.mid, rel);
  // a reference nothing points at any more goes too (the IfcClassification stays: it names the system the project uses)
  if (ref && !idsOf(w, 'IFCRELASSOCIATESCLASSIFICATION').some((x) => w.api.GetLine(w.mid, x, false)?.RelatingClassification?.value === ref)) {
    const l = w.api.GetLine(w.mid, ref, false);
    if (l && /CLASSIFICATIONREFERENCE$/i.test(cname(l))) { w.touch(ref); deleteLine(w.api, w.mid, ref); }
  }
}
/** Give `id` this code in `system` (its own, or the marked default); '' takes that kind away. → true when the file changed. */
export function setCode(w, id, system, code, title = '', { isDefault = false, ix = null, edition = '' } = {}) {
  if (!SYSTEM_IDS.includes(system)) throw Object.assign(new Error('classify.err.system'), { key: 'classify.err.system' });
  code = cleanCode(code); title = cleanTitle(title);
  const rows = ((ix || classificationIndex(w)).byObject.get(id) || []).filter((r) => r.system === system && r.isDefault === isDefault);
  if (rows.length === 1 && rows[0].code === code && code && (rows[0].title === title || !title)) return false;
  if (!rows.length && !code) return false;
  for (const r of rows) unrelate(w, r.rel, id);
  if (!code) return true;
  const ref = referenceLine(w, system, code, title, edition);
  const mark = isDefault ? DEFAULT_MARK : null;
  for (const rid of idsOf(w, 'IFCRELASSOCIATESCLASSIFICATION')) {
    const r = w.api.GetLine(w.mid, rid, false);
    if (r.RelatingClassification?.value !== ref || (val(r.Name) ?? null) !== mark) continue;
    const q = w.touch(rid); q.RelatedObjects = [...(q.RelatedObjects || []), w.H(id)]; w.write(q);
    return true;
  }
  w.make('IFCRELASSOCIATESCLASSIFICATION', w.guid(), w.ownerHistory(), w.L(mark), null, [w.H(id)], w.H(ref));
  return true;
}

/**
 * Project defaults by class, kept true after every change: an element of a class that has a default code and no code of its own (or of
 * its type) in that system carries the default; one that has its own, or whose class has no default any more, carries none.
 * Costs nothing in a file with no project record; with one and defaults off, one pass over the classification relations.
 */
export function syncClassDefaults(w) {
  const p = projectId(w);
  if (!p) return 0;
  const raw = w.readPset(p, CLASSIFY_PSET)?.Record;
  if (!raw) return 0;   // a file whose project never chose a system: nothing to keep true, nothing read
  let rec = null;
  if (raw) { try { rec = cleanRecord(JSON.parse(raw)); } catch (e) { rec = null; } }
  const on = !!(rec && rec.defaults && rec.systems.some((s) => rec.defaultCodes[s]));
  const hasMarks = () => idsOf(w, 'IFCRELASSOCIATESCLASSIFICATION').some((rid) => val(w.api.GetLine(w.mid, rid, false).Name) === DEFAULT_MARK);
  if (!on && !hasMarks()) return 0;
  let ix = classificationIndex(w), n = 0;
  const wanted = new Map();   // id → { system: [code, title] }
  if (on) for (const sys of rec.systems) {
    const table = rec.defaultCodes[sys];
    if (!table) continue;
    const defaults = { classes: Object.fromEntries(Object.entries(table).map(([k, v]) => [k, v[0]])) };
    for (const cls of new Set(Object.keys(table).map((k) => k.split('.')[0]))) {
      for (const id of idsOf(w, cls.toUpperCase(), true)) {
        const l = w.api.GetLine(w.mid, id, false);
        const key = defaultFor(defaults, cname(l), val(l.PredefinedType) || '');
        if (!key) continue;
        const row = Object.entries(table).find(([, v]) => v[0] === key)?.[1];
        const c = codesOf(w, id, ix);
        if (c.own[sys] || c.type[sys]) continue;
        if (!wanted.has(id)) wanted.set(id, {});
        wanted.get(id)[sys] = row;
      }
    }
  }
  // take away the defaults that no longer hold, then give the ones that are missing
  for (const [id, rows] of [...ix.byObject]) for (const r of rows) {
    if (!r.isDefault || !r.system) continue;
    const want = wanted.get(id)?.[r.system];
    if (want && want[0] === r.code) continue;
    if (setCode(w, id, r.system, '', '', { isDefault: true, ix })) { n++; ix = classificationIndex(w); }
  }
  for (const [id, per] of wanted) for (const [sys, row] of Object.entries(per)) {
    const have = (ix.byObject.get(id) || []).find((r) => r.isDefault && r.system === sys);
    if (have && have.code === row[0]) continue;
    if (setCode(w, id, sys, row[0], row[1], { isDefault: true, ix, edition: rec.editions[sys] || '' })) { n++; ix = classificationIndex(w); }
  }
  return n;
}

/** GlobalId → id for any rooted line the tools did not draw (an imported beam, a type, a space). Built on first use. */
export function anyByGuid(w) {
  let map = null;
  return (g) => {
    const known = w.byGuid(g);
    if (known) return known;
    if (!map) {
      map = new Map();
      for (const c of ['IFCELEMENT', 'IFCTYPEOBJECT', 'IFCSPATIALSTRUCTUREELEMENT', 'IFCSPATIALELEMENT', 'IFCANNOTATION']) for (const id of idsOf(w, c, true)) { const x = w.guidOf(id); if (x && !map.has(x)) map.set(x, id); }
    }
    return map.get(g) ?? null;
  };
}
