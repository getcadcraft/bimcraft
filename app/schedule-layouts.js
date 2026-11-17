/* SPDX-License-Identifier: Apache-2.0 */
/**
 * schedule-layouts.js — schedule set-ups, the office standard and the exports of BimCraft's model schedules (0.10 BK.39,
 * BK.149, BK.61, BK.142; session bk-r3-schedules-10). No DOM: bin/test-bimcraft.mjs --schedules runs it in Node. A thin adapter
 * over tables/table.js (the one layout engine, shared with TakeoffCraft): it turns a schedule of model-schedule.js /
 * quantity-schedules.js / finishes-model.js into the engine's table (which column is a length, an area, a level …, and which
 * elements are behind each row and figure), keeps saved set-ups in the IFC, reads the office standard from the Default Policies
 * hook, and adds property columns ("fire rating", "ironmongery") read from the elements.
 *
 * A SET-UP (saved in the file: property set CadCraft_Schedules on IfcProject, `Setups` = JSON, `Format` 'cadcraft-schedules 1'):
 *   { id, name, source (a schedule key: doors, windows, walls, rooms, floors, finishes, roomfinishes, …), layout (tables/table.js),
 *     props: [{ name, label? }…] }   props = extra columns read from each row's elements (a property or tag name)
 *
 *   describeSchedule(key, sc, snap) → table | null      (null: a schedule that is not rows of elements, such as the legend)
 *   officeStandard() → { group?, totals?, title?, headings? }   from the Default Policies add-on; {} when none is set
 *   readSetups(w) → [set-up…] · cleanSetups(raw) → { setups, errors } · saveSetupsOp(setups) → op (one undo step)
 *   propReader(w) → (id, name) → { value, from } | null    the element's own sets first, then its type's
 *   withProps(table, props, w, { yes, no, varies }) → { table, empty: [label…], read: { label: 'Set.Property' } }
 *   layOut(table, layout, { fmt, t, project, standard }) → { laid, from }
 *   flat(laid) → a schedule { title, head, rows, total, ids, note } (what the panel, the sheets and the CSV take)
 *   fmtOf(units, t) / convertOf(units) → the engine's number → text and number → shown-unit converters
 *   sheetOf(laid, units) · elementsOf(laid, w, t)        the workbook sheets (tables/xlsx.js writeXlsx takes them)
 */
import { ids as idsOf, val } from './ifc-util.js';
import { ModelWriter } from './model-write.js';
import { fmtLen, fmtArea, isMetric, FACTOR, fmtVolMm3 } from './model-units.js';
import { scheduleStandard } from './defaults-hook.js';
import { cleanLayout, withStandard, applyLayout, toSheet, elementsSheet, LIMITS } from './tables/table.js';

export const SETUPS_PSET = 'CadCraft_Schedules';
export const SETUPS_FORMAT = 'cadcraft-schedules 1';
export const MAX_SETUPS = 100, MAX_PROPS = 12;

// id, kind, index into the schedule's `nums` row (or null), role, adds up?
const C = (id, kind = 'text', num = null, role = null, sum = true) => ({ id, kind, num, role, sum });
const SPEC = {
  doors: [C('mark'), C('type', 'text', null, 'type'), C('width', 'length', 0, null, false), C('height', 'length', 1, null, false), C('level', 'text', null, 'level'), C('wall')],
  windows: [C('mark'), C('type', 'text', null, 'type'), C('width', 'length', 0, null, false), C('height', 'length', 1, null, false), C('sill', 'length', 2, null, false), C('level', 'text', null, 'level'), C('wall')],
  walls: [C('type', 'text', null, 'type'), C('thickness'), C('count', 'count', 0), C('length', 'length', 1), C('gross', 'area', 3), C('deductions', 'area', 4), C('net', 'area', 2)],
  rooms: [C('number'), C('name', 'text', null, 'room'), C('level', 'text', null, 'level'), C('area', 'area', 0), C('perimeter', 'length', 1)],
  floors: [C('level', 'text', null, 'level'), C('floor', 'text', null, 'type'), C('thickness'), C('gross', 'area', 0), C('deductions', 'area', 1), C('net', 'area', 2)],
  finishes: [C('finish', 'text', null, 'type'), C('on'), C('faces', 'count', 0), C('gross', 'area', 1), C('deductions', 'area', 2), C('net', 'area', 3), C('revealsarea', 'area', 4), C('revealslength', 'length', 5)],
  // Layers (layer-quantities.js layerSchedule, bk-r3-types-10): per layer of each type in use. Only the volumes add up: the same area and the
  // same elements are on every layer of a type.
  layers: [C('element'), C('type', 'text', null, 'type'), C('lod'), C('layer'), C('material'), C('function'), C('thickness', 'length', 0, null, false), C('count', 'count', 1, null, false), C('net', 'area', 2, null, false), C('volume', 'volume', 3)],
  walltakeoff: [C('type', 'text', null, 'type'), C('unit'), C('mortar'), C('count', 'count', 0), C('length', 'length', 1), C('net', 'area', 2), C('rate'), C('amount'), C('per'), C('units'), C('mortarvolume')],
};
const slug = (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 40) || 'col';
const listOf = (v) => (Array.isArray(v) ? v : v === undefined || v === null ? [] : [v]);

export function describeSchedule(key, sc, snap = null) {
  if (!sc || !Array.isArray(sc.head) || !Array.isArray(sc.rows) || sc.rowInfo || key === 'regs') return null;
  if (sc.cols && sc.vals) return { key, title: sc.title || '', head: sc.head, cols: sc.cols, rows: sc.rows, vals: sc.vals, ids: (sc.ids || []).map(listOf), cellIds: sc.cellIds || null, total: sc.total || null, note: sc.note || '' };
  const spec = SPEC[key] || [], used = new Set();
  const cols = sc.head.map((h, j) => {
    let c = spec[j] ? { ...spec[j] } : C(slug(h));
    while (used.has(c.id)) c = { ...c, id: c.id + '-' + j };
    used.add(c.id);
    if (c.role === 'level' && snap?.levels) c.order = snap.levels.map((l) => l.name);
    return c;
  });
  const vals = sc.rows.map((_, i) => cols.map((c) => (c.num !== null && typeof sc.nums?.[i]?.[c.num] === 'number' ? sc.nums[i][c.num] : null)));
  let ids = sc.rows.map((_, i) => listOf(sc.ids?.[i]));
  if (key === 'walltakeoff' && sc.keys && snap) ids = sc.keys.map((k) => snap.walls.filter((x) => x.typeKey === k).map((x) => x.id));
  // BK.142: the elements behind one figure when they are not the row's: a wall type's deductions are its walls' doors and windows
  let cellIds = null;
  if (key === 'walls' && snap) {
    const j = cols.findIndex((c) => c.id === 'deductions');
    cellIds = ids.map((list) => { const set = new Set(list); const ops = snap.openings.filter((o) => set.has(o.wall)).map((o) => o.id); const row = cols.map(() => null); if (j >= 0 && ops.length) row[j] = ops; return row; });
  }
  return { key, title: sc.title || '', head: sc.head, cols: cols.map(({ num, ...c }) => ({ ...c, ...(c.role ? {} : { role: undefined }) })), rows: sc.rows, vals, ids, cellIds, total: sc.total || null, note: sc.note || '' };
}

/** The office standard for schedule layouts (BK.149): the Default Policies add-on's four policies, read in one place for every app (defaults-hook.js). */
export const officeStandard = () => scheduleStandard();

// ---------------------------------------------------------------------------------------------- saved set-ups
const tidy = (s, max) => String(s ?? '').replace(/[\u0000-\u001f\u007f]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, max);
const ID_RE = /^[a-z0-9][a-z0-9-]{0,39}$/;
export function cleanSetups(raw) {
  const setups = [], errors = [], seen = new Set();
  let list = raw;
  if (typeof raw === 'string') { try { list = JSON.parse(raw); } catch (e) { return { setups, errors: ['json'] }; } }
  if (list && !Array.isArray(list) && Array.isArray(list.setups)) list = list.setups;
  for (const s of (Array.isArray(list) ? list : []).slice(0, MAX_SETUPS)) {
    const name = tidy(s?.name, LIMITS.title), source = tidy(s?.source, 60);
    if (!s || typeof s !== 'object' || !ID_RE.test(String(s.id || '')) || seen.has(s.id) || !name || !source) { errors.push('setup'); continue; }
    const props = [];
    for (const p of (Array.isArray(s.props) ? s.props : []).slice(0, MAX_PROPS)) { const n = tidy(typeof p === 'string' ? p : p?.name, 100); if (n && !props.some((x) => x.name.toLowerCase() === n.toLowerCase())) props.push({ name: n, ...(tidy(p?.label, LIMITS.label) ? { label: tidy(p.label, LIMITS.label) } : {}) }); }
    seen.add(s.id);
    setups.push({ id: s.id, name, source, layout: cleanLayout(s.layout), props });
  }
  return { setups, errors };
}
const projectOf = (w) => { try { return idsOf(w.api, w.mid, 'IFCPROJECT')[0] ?? null; } catch (e) { return null; } };
export function readSetups(w) {
  const p = w ? projectOf(w) : null;
  if (!p) return [];
  let ps = null;
  try { ps = w.readPset(p, SETUPS_PSET); } catch (e) { ps = null; }
  return ps && typeof ps.Setups === 'string' ? cleanSetups(ps.Setups).setups : [];
}
export const setupId = (name, taken) => { const base = slug(name); let id = base, k = 2; while (taken.has(id)) id = base.slice(0, 36) + '-' + k++; return id; };
/** Keep these set-ups in the file (one undo step). */
export function saveSetupsOp(setups) {
  const clean = cleanSetups(setups).setups;
  return (ed) => {
    const w = new ModelWriter(ed.W, ed.api, ed.mid);
    return w.run(() => {
      const p = projectOf(w);
      if (!p) throw Object.assign(new Error('no project'), { key: 'sched.err.noproject' });   // i18n-ignore: the person reads the key's sentence
      w.upsertPset(p, SETUPS_PSET, [['Setups', 'IFCTEXT', JSON.stringify({ format: 'cadcraft-schedules', version: 1, setups: clean })], ['Format', 'IFCLABEL', SETUPS_FORMAT]]);
      return { id: p, ids: [p], made: new Map(), setups: clean };
    });
  };
}

// ---------------------------------------------------------------------------------------------- property columns
const norm = (s) => String(s).toLowerCase().replace(/[^a-z0-9]/g, '');
// words people use for the same thing: the first that an element carries is read, and the answer says which
const ALIASES = { ironmongery: ['ironmongery', 'ironmongeryset', 'hardware', 'hardwareset', 'doorhardware'], firerating: ['firerating', 'fireresistance', 'fireresistancerating'] };
export function propReader(w) {
  let typeOf = null;
  const typeSets = (id) => {
    if (!typeOf) {
      typeOf = new Map();
      let rels = []; try { rels = idsOf(w.api, w.mid, 'IFCRELDEFINESBYTYPE'); } catch (e) { rels = []; }
      for (const rid of rels) { const r = w.api.GetLine(w.mid, rid, false); const ty = r?.RelatingType?.value; if (ty) for (const h of r.RelatedObjects || []) typeOf.set(h.value, ty); }
    }
    const ty = typeOf.get(id);
    if (!ty) return [];
    const line = w.api.GetLine(w.mid, ty, false);
    return (line?.HasPropertySets || []).map((h) => w.api.GetLine(w.mid, h.value, false)).filter(Boolean);
  };
  const cache = new Map();
  const setsOf = (id) => {
    if (!cache.has(id)) {
      const own = []; for (const d of w.defs(id)) { const l = w.api.GetLine(w.mid, d.def, false); if (l?.HasProperties) own.push(l); }
      const list = [];
      for (const l of [...own, ...typeSets(id)]) for (const h of l.HasProperties || []) { const p = w.api.GetLine(w.mid, h.value, false); if (p?.Name && p.NominalValue !== undefined && p.NominalValue !== null) list.push({ set: val(l.Name) || '', name: val(p.Name), value: val(p.NominalValue), type: String(p.NominalValue?.name || '').toUpperCase() }); }
      cache.set(id, list);
    }
    return cache.get(id);
  };
  return (id, name) => {
    const dot = String(name).lastIndexOf('.'), setName = dot > 0 ? norm(String(name).slice(0, dot)) : null, want = norm(dot > 0 ? String(name).slice(dot + 1) : name);
    const words = ALIASES[want] || [want];
    for (const wd of words) for (const p of setsOf(id)) if (norm(p.name) === wd && (!setName || norm(p.set) === setName) && p.value !== '' && p.value !== null && p.value !== undefined) return { value: p.value, type: p.type, from: p.set + '.' + p.name };
    return null;
  };
}
/** The table with one more column per property, read from each row's elements (one value they share, `varies` when they differ). */
export function withProps(table, props, w, { yes = 'Yes', no = 'No', varies = '…' } = {}) {
  if (!props || !props.length || !w) return { table, empty: [], read: {} };
  const read = propReader(w), empty = [], from = {};
  const show = (r) => (r.type === 'IFCBOOLEAN' || typeof r.value === 'boolean' ? (r.value === true || r.value === 'T' || r.value === '.T.' ? yes : no) : typeof r.value === 'number' ? String(Number(r.value.toPrecision(12))) : String(r.value));
  const used = new Set(table.cols.map((c) => c.id));
  const add = props.map((p) => {
    let id = 'prop-' + slug(p.name); while (used.has(id)) id += '-x'; used.add(id);
    const label = p.label || p.name;
    let any = false;
    const cells = table.ids.map((list) => {
      const vs = new Set();
      for (const el of list) { const r = read(el, p.name); if (r) { vs.add(show(r)); from[label] = from[label] || r.from; } else vs.add(''); }
      const v = vs.size === 1 ? [...vs][0] : vs.size ? varies : '';
      if (v !== '') any = true;
      return v;
    });
    if (!any) empty.push(label);
    return { col: { id, kind: 'text', prop: p.name }, label, cells };
  });
  return {
    table: { ...table, head: [...table.head, ...add.map((a) => a.label)], cols: [...table.cols, ...add.map((a) => a.col)], rows: table.rows.map((r, i) => [...r, ...add.map((a) => a.cells[i])]),
      vals: (table.vals || table.rows.map(() => [])).map((v) => [...v, ...add.map(() => null)]), cellIds: table.cellIds ? table.cellIds.map((c) => (c ? [...c, ...add.map(() => null)] : c)) : null,
      total: table.total ? table.total.slice() : null },
    empty, read: from,
  };
}

// ---------------------------------------------------------------------------------------------- laying out, exporting
const whole = (n) => String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
/** A volume is shown in m³ (metric units) or ft³, whatever the length unit: nobody orders screed in mm³. */
export const fmtVol = (mm3, units) => fmtVolMm3(mm3, isMetric(units) ? 'm' : 'ftin');
export const fmtOf = (units) => ({ count: whole, length: (mm) => fmtLen(mm, units), area: (mm2) => fmtArea(mm2, units), volume: (mm3) => fmtVol(mm3, units) });
/** Numbers for a workbook, in the unit the column shows; feet and inches stay text (no converter). */
export function convertOf(units) {
  const metric = isMetric(units), out = { count: (n) => n };
  if (units !== 'ftin' && FACTOR[units]) out.length = (mm) => Math.round(mm / FACTOR[units] * 1e6) / 1e6;
  out.area = (mm2) => Math.round(mm2 / (metric ? 1e6 : 92903.04) * 1e4) / 1e4;
  out.volume = (mm3) => Math.round(mm3 / (metric ? 1e9 : 28316846.592) * 1e4) / 1e4;
  return out;
}
export function layOut(table, layout, { units, t, project = '', standard = officeStandard() } = {}) {
  const s = withStandard(layout || {}, standard, table);
  const laid = applyLayout(table, s.layout, { fmt: fmtOf(units), words: { total: t('model.sch.total'), subtotal: t('sched.subtotal'), none: t('sched.novalue') }, vars: { schedule: table.title, project } });
  return { laid, from: s.from, layout: s.layout };
}
/** A laid-out schedule in the shape the panel, the sheets and the CSV take. `laid` stays on it for the figure links. */
export function flat(laid) {
  const n = laid.head.length, pad = (c) => c.concat(Array(Math.max(0, n - c.length)).fill(''));
  const body = laid.lines.filter((l) => l.kind !== 'total'), tot = laid.lines.find((l) => l.kind === 'total');
  const sc = { title: laid.title, head: laid.head.slice(), rows: body.map((l) => pad(l.cells.slice())), ids: body.map((l) => l.ids.slice()), total: tot ? pad(tot.cells.slice()) : null, note: laid.note };
  Object.defineProperty(sc, 'laid', { value: laid, enumerable: false });
  return sc;
}
export const sheetOf = (laid, units) => toSheet(laid, { convert: convertOf(units) });
export const elementsOf = (laid, w, t) => elementsSheet(laid, { name: t('sched.x.elements'), head: [t('sched.x.line'), t('sched.x.first'), t('sched.x.guids')], nameOf: (id) => { try { return w.guidOf(id) || ''; } catch (e) { return ''; } } });
