/* SPDX-License-Identifier: Apache-2.0 */
/**
 * tags.js — tags that feed schedules (0.8 SU.915, session sx-tags; plan docs/0.8-PART2.md § SU.915 and § Duplicates found item 3).
 * No DOM: tools/bimcraft-test/tags-test.mjs (node bin/test-bimcraft.mjs --sx-tags) runs it in Node.
 *
 * One property model for BimCraft (settled in the plan): a tag is an IFC property.
 *   definitions  property set CadCraft_TagDefs on IfcProject: Definitions (IfcText, JSON below), Format 'cadcraft-tagdefs 1'
 *   values       property set CadCraft_Tags on each element, one IfcPropertySingleValue per tag, named as the tag
 * so any IFC program reads the values as ordinary properties, and BimCraft's Quantities panel, Find and Color by property see
 * them as the field 'p:CadCraft_Tags.<name>' with nothing added.
 *
 * A definition: { name, kind, values: [allowed…], classes: ['IfcDoor'…], note }
 *   kind     BIM-FAM-MORE step 1's typed-parameter list (family-model.js PARAM_KINDS: length, angle, number, integer, yesno, pen,
 *            text, material, fill) and its cleanValue rules — the same list, not a second one
 *   values   allowed values (a pick list); none = any value of the kind
 *   classes  IFC classes it applies to (IfcWall also takes IfcWallStandardCase / IfcWallElementedCase); none = every element
 * Written as: length IfcLengthMeasure in the file's length unit (mm in and out here), angle IfcReal in degrees, number IfcReal,
 * integer and pen IfcInteger, yesno IfcBoolean, text / material / fill IfcLabel.
 *
 *   readTagDefs(raw) → { defs, errors: [{ key, fill }] }          untrusted (the IFC is): bad rows dropped, each said
 *   readProjectDefs(w) → defs                                       from the open model (a ModelWriter)
 *   checkValue(def, value) → { ok, value } | { ok: false, error: { key, fill } }   null / '' = clear the tag
 *   appliesTo(def, cls) → bool                                      cls 'IfcWall' or 'IFCWALL'
 *   saveDefsOp(defs, { renames }) → op for IfcEditor.modelChange   one undo step; renames { old: new } renames the values too
 *   tagOp(guids, values) → op                                       values { tagName: value | null }; one undo step
 *       → { ids, counts: { elements, set, cleared, skipped: [{ guid, tag }] } }; refused when no element takes any tag
 *   tagValues(w, id, defs) → { name: value }                        an element's tags as their kinds keep them (length in mm)
 *   tagField(name) → 'p:CadCraft_Tags.<name>'
 *   tagSchedule(ix, defs, { columns, filters, mode, groupBy, keys, classes, unitMm }) → { columns, kinds, groups: [{ value,
 *       rows: [{ key, values }] }], count }   rows from ifc-qto.js elementRows, filters by ifc-find.js rules, length tags in mm
 *   scheduleCsv(res, { label, groupLabel }) → text (ifc-qto.js tableCsv)
 */
import { PARAM_KINDS, isWordKind, cleanValue, MATERIAL_RE, FILL_KEYS } from './family-model.js';
import { ModelWriter } from './model-write.js';
import { ids, val, deleteLine } from './ifc-util.js';
import { find, OPS } from './ifc-find.js';
import { elementRows, tableCsv } from './ifc-qto.js';

export const TAGDEFS_PSET = 'CadCraft_TagDefs';
export const TAGS_PSET = 'CadCraft_Tags';
export const TAGDEFS_FORMAT = 'cadcraft-tagdefs 1';
export const TAG_KINDS = PARAM_KINDS;
export const LIMITS = { defs: 100, values: 60, classes: 40, name: 48, note: 300, elements: 20000 };
export const NAME_RE = /^[A-Za-z][A-Za-z0-9 _.-]{0,47}$/;
const CLASS_RE = /^Ifc[A-Za-z0-9]{2,60}$/;
const IFC_TYPE = { length: 'IFCLENGTHMEASURE', angle: 'IFCREAL', number: 'IFCREAL', integer: 'IFCINTEGER', yesno: 'IFCBOOLEAN', pen: 'IFCINTEGER', text: 'IFCLABEL', material: 'IFCLABEL', fill: 'IFCLABEL' };
const CTRL = /[\u0000-\u001f\u007f]/g;
const clean = (s, max) => String(s ?? '').replace(CTRL, ' ').replace(/\s+/g, ' ').trim().slice(0, max);
const err = (key, fill = {}) => ({ key, fill });
const fail = (key, fill = {}) => Object.assign(new Error(key), { key, fill });

export const tagField = (name) => 'p:' + TAGS_PSET + '.' + name;

/** An IFC class name as the definitions keep it ('IfcDoor'), from 'IfcDoor', 'IFCDOOR' or 'door'? Only the first two. */
export function className(s) {
  const t = String(s ?? '').trim();
  if (CLASS_RE.test(t)) return t;
  if (/^IFC[A-Z0-9]{2,60}$/.test(t)) return t;   // upper case as web-ifc names it: compared case-blind
  return null;
}
/** Does a definition apply to an element of class `cls`? */
export function appliesTo(def, cls) {
  if (!def.classes || !def.classes.length) return true;
  const c = String(cls || '').toUpperCase();
  return def.classes.some((k) => { const K = k.toUpperCase(); return c === K || c === K + 'STANDARDCASE' || c === K + 'ELEMENTEDCASE'; });
}

/** One value as the tag's kind keeps it; '' / null = no value. Numbers refuse what is not a number (cleanValue would make it 0). */
function kindValue(kind, value) {
  if (value === null || value === undefined || (typeof value === 'string' && value.trim() === '')) return { ok: true, value: null };
  if (kind === 'yesno') {
    const s = String(value).trim().toLowerCase();
    if (value === true || ['1', 'yes', 'true', 'y', 'si', 'sí'].includes(s)) return { ok: true, value: 1 };
    if (value === false || ['0', 'no', 'false', 'n'].includes(s)) return { ok: true, value: 0 };
    return { ok: false, error: err('sx.su915.err.yesno') };
  }
  if (kind === 'material') { const s = String(value).trim(); return MATERIAL_RE.test(s) ? { ok: true, value: s } : { ok: false, error: err('sx.su915.err.material') }; }
  if (kind === 'fill') return FILL_KEYS.includes(value) ? { ok: true, value } : { ok: false, error: err('sx.su915.err.fill', { list: FILL_KEYS.join(', ') }) };
  if (isWordKind(kind)) { const s = cleanValue(kind, value); return s ? { ok: true, value: s } : { ok: true, value: null }; }
  const n = typeof value === 'number' ? value : Number(String(value).trim().replace(',', '.'));
  if (!Number.isFinite(n)) return { ok: false, error: err('sx.su915.err.number') };
  return { ok: true, value: cleanValue(kind, n) };
}

/** A tag value checked against its definition: the kind, then the pick list. */
export function checkValue(def, value) {
  const r = kindValue(def.kind, value);
  if (!r.ok || r.value === null) return r;
  if (def.values && def.values.length && def.kind !== 'yesno') {
    const hit = def.values.find((a) => (typeof a === 'string' ? a.toLowerCase() === String(r.value).toLowerCase() : a === r.value));
    if (hit === undefined) return { ok: false, error: err('sx.su915.err.notallowed', { tag: def.name, list: def.values.join(', ') }) };
    return { ok: true, value: hit };   // the list's own spelling
  }
  return r;
}

/** Definitions read back (untrusted): { format?, tags: [...] } or a bare array. */
export function readTagDefs(raw) {
  let obj = raw;
  if (typeof raw === 'string') { try { obj = JSON.parse(raw); } catch (e) { return { defs: [], errors: [err('sx.su915.err.json')] }; } }
  const list = Array.isArray(obj) ? obj : obj && typeof obj === 'object' && Array.isArray(obj.tags) ? obj.tags : null;
  if (!list) return { defs: [], errors: raw === null || raw === undefined || raw === '' ? [] : [err('sx.su915.err.json')] };
  const defs = [], errors = [], seen = new Set();
  for (const d of list.slice(0, LIMITS.defs)) {
    if (!d || typeof d !== 'object') { errors.push(err('sx.su915.err.row')); continue; }
    const name = clean(d.name, LIMITS.name);
    if (!NAME_RE.test(name)) { errors.push(err('sx.su915.err.name', { name })); continue; }
    if (seen.has(name.toLowerCase())) { errors.push(err('sx.su915.err.dup', { name })); continue; }
    const kind = TAG_KINDS.includes(d.kind) ? d.kind : 'text';
    if (d.kind !== undefined && d.kind !== kind) errors.push(err('sx.su915.err.kind', { name, kind: String(d.kind) }));
    const values = [];
    if (kind !== 'yesno') for (const v of (Array.isArray(d.values) ? d.values : []).slice(0, LIMITS.values)) {
      const r = kindValue(kind, v);
      if (!r.ok) { errors.push(err('sx.su915.err.value', { name, value: String(v).slice(0, 40) })); continue; }
      if (r.value !== null && !values.some((x) => (typeof x === 'string' ? x.toLowerCase() === String(r.value).toLowerCase() : x === r.value))) values.push(r.value);
    }
    const classes = [];
    for (const c of (Array.isArray(d.classes) ? d.classes : []).slice(0, LIMITS.classes)) {
      const k = className(c);
      if (!k) { errors.push(err('sx.su915.err.class', { name, cls: String(c).slice(0, 40) })); continue; }
      if (!classes.some((x) => x.toUpperCase() === k.toUpperCase())) classes.push(k);
    }
    seen.add(name.toLowerCase());
    const def = { name, kind, values, classes };
    const note = clean(d.note, LIMITS.note);
    if (note) def.note = note;
    defs.push(def);
  }
  if (list.length > LIMITS.defs) errors.push(err('sx.su915.err.toomany', { n: LIMITS.defs }));
  return { defs, errors };
}

/** The JSON the project keeps. */
export const defsJson = (defs) => JSON.stringify({ format: 'cadcraft-tagdefs', version: 1, tags: defs });

// ------------------------------------------------------------------------------------------------ the open model
export function projectId(w) { const v = ids(w.api, w.mid, 'IFCPROJECT'); return v.length ? v[0] : null; }
export function readProjectDefs(w) {
  const pid = projectId(w);
  if (pid === null) return [];
  const ps = w.readPset(pid, TAGDEFS_PSET);
  return ps && ps.Definitions ? readTagDefs(String(ps.Definitions)).defs : [];
}

const asBool = (v) => v === true || v === 1 || v === 'T' || v === '.T.' || String(v).toLowerCase() === 'true';
/** An element's tag values as their kinds keep them (length in mm); tags with no value are left out. */
export function tagValues(w, id, defs) {
  const ps = w.readPset(id, TAGS_PSET);
  if (!ps) return {};
  const out = {};
  for (const d of defs) {
    if (!(d.name in ps)) continue;
    let v = ps[d.name];
    if (d.kind === 'yesno') v = asBool(v) ? 1 : 0;
    else if (d.kind === 'length' && typeof v === 'number') v = Math.round(v * w.unitMm * 1e6) / 1e6;
    if (v !== null && v !== undefined && v !== '') out[d.name] = v;
  }
  return out;
}

/** web-ifc's class name of a line, upper case ('IFCWALL'). */
const classOfLine = (w, id) => { try { const l = w.api.GetLine(w.mid, id, false); return String(w.api.GetNameFromTypeCode(l.type) || '').toUpperCase(); } catch (e) { return ''; } };
/** guid → id for the products asked for (any product: elements, spaces, annotations). */
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
/** The element's own CadCraft_Tags (copied when another element shares it: a set made elsewhere may be shared). */
function ownTags(w, id) {
  const d = w.defNamed(id, TAGS_PSET);
  if (!d) return null;
  let shared = false;
  for (const rid of ids(w.api, w.mid, 'IFCRELDEFINESBYPROPERTIES')) {
    const r = w.api.GetLine(w.mid, rid, false);
    if (r?.RelatingPropertyDefinition?.value === d.def && (rid !== d.rel || (r.RelatedObjects || []).length > 1)) { shared = true; break; }
  }
  if (!shared) return d;
  const rows = [];
  for (const h of d.line.HasProperties || []) {
    const p = w.api.GetLine(w.mid, h.value, false);
    if (p?.Name && p.NominalValue) rows.push([val(p.Name), String(p.NominalValue.name || 'IFCLABEL').toUpperCase(), val(p.NominalValue)]);
  }
  const rel = w.touch(d.rel);
  rel.RelatedObjects = (rel.RelatedObjects || []).filter((h) => h.value !== id);
  w.write(rel);
  w._defs = null;
  const ps = w.pset(TAGS_PSET, rows);
  w.relateDef(id, ps);
  return w.defNamed(id, TAGS_PSET);
}
/** Take these tags off the element; the set goes when it is left empty. → how many were removed. */
function dropTags(w, id, names) {
  const d = ownTags(w, id);
  if (!d) return 0;
  const keep = [], gone = [];
  for (const h of d.line.HasProperties || []) { const p = w.api.GetLine(w.mid, h.value, false); (names.includes(val(p?.Name)) ? gone : keep).push(h); }
  if (!gone.length) return 0;
  if (!keep.length) {
    const rel = w.api.GetLine(w.mid, d.rel, false);
    if ((rel.RelatedObjects || []).length <= 1) { w.touch(d.rel); deleteLine(w.api, w.mid, d.rel); }
    w.touch(d.def); deleteLine(w.api, w.mid, d.def);
    w._defs = null;
  } else { const ps = w.touch(d.def); ps.HasProperties = keep; w.write(ps); }
  for (const h of gone) { w.touch(h.value); deleteLine(w.api, w.mid, h.value); }
  return gone.length;
}
/** Rename a property inside the element's own CadCraft_Tags. */
function renameTag(w, id, from, to) {
  const d = ownTags(w, id);
  if (!d) return false;
  for (const h of d.line.HasProperties || []) {
    const p = w.api.GetLine(w.mid, h.value, false);
    if (val(p?.Name) !== from) continue;
    const q = w.touch(h.value); q.Name = w.T('IFCIDENTIFIER', to); w.write(q);
    return true;
  }
  return false;
}
/** Elements that carry a CadCraft_Tags set: [id]. */
function taggedIds(w) {
  const out = new Set();
  for (const rid of ids(w.api, w.mid, 'IFCRELDEFINESBYPROPERTIES')) {
    const r = w.api.GetLine(w.mid, rid, false);
    const d = r?.RelatingPropertyDefinition?.value;
    if (!d) continue;
    const ps = w.api.GetLine(w.mid, d, false);
    if (val(ps?.Name) !== TAGS_PSET) continue;
    for (const h of r.RelatedObjects || []) out.add(h.value);
  }
  return [...out];
}
const typedRow = (w, def, v) => [def.name, IFC_TYPE[def.kind], def.kind === 'length' ? Math.round(w.u(v) * 1e6) / 1e6 : def.kind === 'yesno' ? !!v : v];

const op = (fn) => (ed) => { const w = new ModelWriter(ed.W, ed.api, ed.mid); return w.run(() => fn(w)); };

/** Save the definitions on IfcProject (one undo step). renames { old: new }: the tag's values on every element follow. */
export function saveDefsOp(defs, { renames = {} } = {}) {
  const r = readTagDefs(defs);
  if (r.errors.length) throw fail(r.errors[0].key, r.errors[0].fill);
  const json = defsJson(r.defs);
  const ren = Object.entries(renames || {}).filter(([a, b]) => a && b && a !== b && r.defs.some((d) => d.name === b));
  return op((w) => {
    const pid = projectId(w);
    if (pid === null) throw fail('sx.su915.err.noproject');
    w.upsertPset(pid, TAGDEFS_PSET, [['Definitions', 'IFCTEXT', json], ['Format', 'IFCLABEL', TAGDEFS_FORMAT]]);
    let renamed = 0;
    if (ren.length) for (const id of taggedIds(w)) for (const [a, b] of ren) if (renameTag(w, id, a, b)) renamed++;
    return { id: pid, ids: [pid], made: new Map(), defs: r.defs, renamed };
  });
}

/** Set (or clear, value null / '') tags on elements named by GlobalId. One undo step; a value a tag refuses refuses the whole change. */
export function tagOp(guids, values) {
  const names = Object.keys(values || {});
  if (!names.length) throw fail('sx.su915.err.notags');
  const list = [...new Set((guids || []).map(String))].slice(0, LIMITS.elements);
  if (!list.length) throw fail('sx.su915.err.nosel');
  return op((w) => {
    const defs = readProjectDefs(w);
    const plan = [];
    for (const n of names) {
      const def = defs.find((d) => d.name === n);
      if (!def) throw fail('sx.su915.err.nodef', { tag: n });
      const c = checkValue(def, values[n]);
      if (!c.ok) throw fail(c.error.key, c.error.fill);
      plan.push({ def, value: c.value });
    }
    const byGuid = productsByGuid(w, list);
    const counts = { elements: 0, set: 0, cleared: 0, skipped: [] };
    const touched = [];
    for (const g of list) {
      const id = byGuid.get(g);
      if (id === undefined) continue;
      const cls = classOfLine(w, id);
      const rows = [], clear = [];
      for (const p of plan) {
        if (!appliesTo(p.def, cls)) { counts.skipped.push({ guid: g, tag: p.def.name }); continue; }
        if (p.value === null) clear.push(p.def.name); else rows.push(typedRow(w, p.def, p.value));
      }
      if (!rows.length && !clear.length) continue;
      if (rows.length) { ownTags(w, id); w.upsertPset(id, TAGS_PSET, rows); counts.set += rows.length; }
      if (clear.length) counts.cleared += dropTags(w, id, clear);
      counts.elements++; touched.push(id);
    }
    if (!counts.elements) throw fail(counts.skipped.length ? 'sx.su915.err.noneapply' : 'sx.su915.err.nosel');
    return { id: touched[0], ids: touched, made: new Map(), counts };
  });
}

// ------------------------------------------------------------------------------------------------ schedules
const cmp = (a, b) => {
  if (a === b) return 0;
  if (a === '') return 1;
  if (b === '') return -1;
  if (typeof a === 'number' && typeof b === 'number') return a - b;
  return String(a).localeCompare(String(b), undefined, { numeric: true });
};
/** A column's kind: the tag's kind for a tag field, else 'number' / 'text' from the index. */
export function fieldKind(ix, defs, field) {
  const pre = 'p:' + TAGS_PSET + '.';
  if (field.startsWith(pre)) { const d = defs.find((x) => x.name === field.slice(pre.length)); if (d) return d.kind; }
  return ix.fields.find((f) => f.id === field)?.kind || 'text';
}
/**
 * A schedule that reads tags: rows of the elements that pass the filters (ifc-find.js rules on any field, tags included), the
 * columns' values, grouped by one field (no value last). keys / classes narrow it first. Length tags come back in mm.
 */
export function tagSchedule(ix, defs, { columns = ['cls', 'name'], filters = [], mode = 'all', groupBy = null, keys = null, classes = [], unitMm = 1 } = {}) {
  let pick = keys ? new Set(keys) : null;
  const rules = (filters || []).filter((r) => r && r.field && OPS.includes(r.op));
  if (rules.length) { const hit = new Set(find(ix, { rules, mode })); pick = pick ? new Set([...pick].filter((k) => hit.has(k))) : hit; }
  if (classes && classes.length) {
    const want = { classes };
    const base = pick ? [...pick] : ix.ids.map((id) => ix.keyBase + id);
    pick = new Set(base.filter((k) => appliesTo(want, ix.value('cls', k - ix.keyBase))));
  }
  const kinds = columns.map((c) => fieldKind(ix, defs, c));
  const rr = elementRows(ix, { keys: pick ? [...pick] : null, columns });
  for (const r of rr.rows) r.values = r.values.map((v, i) => (kinds[i] === 'length' && typeof v === 'number' ? Math.round(v * unitMm * 1e6) / 1e6 : v));
  const groups = new Map();
  for (const r of rr.rows) {
    let g = groupBy ? ix.value(groupBy, r.key - ix.keyBase) : null;
    if (groupBy && (g === undefined || g === null)) g = '';
    if (groupBy && fieldKind(ix, defs, groupBy) === 'length' && typeof g === 'number') g = Math.round(g * unitMm * 1e6) / 1e6;
    const k = JSON.stringify(g);
    if (!groups.has(k)) groups.set(k, { value: g, rows: [] });
    groups.get(k).rows.push(r);
  }
  const out = [...groups.values()];
  if (groupBy) out.sort((a, b) => cmp(a.value, b.value));
  return { columns: [...columns], kinds, groupBy, groups: out, count: rr.rows.length };
}
/** The schedule as CSV: the group's value first when grouped. */
export function scheduleCsv(res, { label = (f) => f, groupLabel = (f) => f } = {}) {
  const head = [...(res.groupBy ? [groupLabel(res.groupBy)] : []), ...res.columns.map(label)];
  const rows = [];
  for (const g of res.groups) for (const r of g.rows) rows.push([...(res.groupBy ? [g.value] : []), ...r.values]);
  return tableCsv(head, rows);
}
