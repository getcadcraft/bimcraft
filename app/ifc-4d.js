/* SPDX-License-Identifier: Apache-2.0 */
/**
 * ifc-4d.js — lite 4D: a task list from a CSV, and what is built, in progress or not started on a date (0.4 B22).
 * No DOM: bin/test-bimcraft.mjs --4d runs it on the fixture.
 *
 * The CSV (comma or semicolon; a header row; a BOM is fine):
 *   Task, Start, Finish, Field, Value
 *   Level 1 walls, 2026-11-02, 2026-11-20, Storey, Level 1
 *   Level 1 walls, 2026-11-02, 2026-11-20, Class, IfcSlab          ← the same task again: more elements for it
 * Optional columns (0.6 WL.6): Stage and Package (aliases Phase; Work package, WBS) gather tasks into work packages and
 * stages; a task keeps one stage and one package (a later row that names others is refused, 'group-differs').
 * A row's elements: those whose Field has exactly that Value (text ignores case and surrounding spaces). Field is a
 * built-in by its English name or id (Class, Storey, Name, Type, Material, Tag, GlobalId, Object type, Long name,
 * Predefined type) or "<property set>.<property>". Dates are YYYY-MM-DD only (07/11/2026 means two different days in
 * two countries); Finish may equal Start (a one-day task) but not come before it.
 *
 *   parseTasks(text)            → { tasks: [{ name, start, finish, rows: [{ field, value, line }] }], errors: [{ line, message }] }
 *                                 (dates as day numbers since 1970-01-01, UTC; messages are codes the page words)
 *   matchTasks(ix, tasks)       → [{ …task, keys: [key…], unmatched: [row…] }]
 *   statusAt(matched, day)      → Map(key → 'built' | 'progress' | 'waiting')   a task is in progress from its Start through
 *                                 its Finish day and built from the day after; an element in several tasks is built when
 *                                 every one is, waiting when none has started, else in progress. Elements in no task: absent.
 *   span(matched)               → { first, last } days, or null
 *   templateCsv(storeys)        → a starting CSV: one task per storey, a week each
 *   dayText(day) / parseDay(s)  YYYY-MM-DD ↔ day number
 *   groupsOf(tasks)             → [{ key, kind 'stage'|'package', name, stage, start, finish, tasks }] (0.6 WL.6) stages, each
 *                                 followed by its packages, by first start; packages with no stage after them
 *   inGroup(tasks, key)         → the tasks of one group ('' / null = all)
 *   groupKeys(tasks)            → every element key of those tasks (no repeats)
 *   groupState(tasks, day)      → { done, now, todo } task counts on that day
 */

const FIELDS = { class: 'cls', cls: 'cls', storey: 'storey', name: 'name', type: 'type', material: 'material', tag: 'tag', globalid: 'guid', guid: 'guid', 'object type': 'objtype', objtype: 'objtype', 'long name': 'longname', longname: 'longname', 'predefined type': 'predefined', predefined: 'predefined' };   // i18n-ignore: field names of the file format
const MAX_ROWS = 20000;

export function parseDay(s) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(s ?? '').trim());
  if (!m) return null;
  const d = Date.UTC(+m[1], +m[2] - 1, +m[3]);
  const back = new Date(d);
  if (back.getUTCFullYear() !== +m[1] || back.getUTCMonth() !== +m[2] - 1 || back.getUTCDate() !== +m[3]) return null;   // 2026-02-30
  return Math.round(d / 86400000);
}
export const dayText = (day) => new Date(day * 86400000).toISOString().slice(0, 10);

/** CSV rows (quotes, doubled quotes, CR LF), with the delimiter the header uses. */
export function csvRows(text) {
  const src = String(text).replace(/^﻿/, '');
  const firstLine = src.split(/\r?\n/, 1)[0] || '';
  const delim = (firstLine.match(/;/g) || []).length > (firstLine.match(/,/g) || []).length ? ';' : ',';
  const rows = [];
  let row = [], cell = '', q = false, line = 1, rowLine = 1;
  for (let i = 0; i < src.length; i++) {
    const c = src[i];
    if (q) {
      if (c === '"') { if (src[i + 1] === '"') { cell += '"'; i++; } else q = false; }
      else { if (c === '\n') line++; cell += c; }
    } else if (c === '"') q = true;
    else if (c === delim) { row.push(cell); cell = ''; }
    else if (c === '\n' || c === '\r') {
      if (c === '\r' && src[i + 1] === '\n') i++;
      row.push(cell); rows.push({ cells: row, line: rowLine }); row = []; cell = ''; line++; rowLine = line;
      if (rows.length > MAX_ROWS) break;
    } else cell += c;
  }
  if (cell !== '' || row.length) { row.push(cell); rows.push({ cells: row, line: rowLine }); }
  return rows.filter((r) => r.cells.some((x) => x.trim() !== ''));
}

export function parseTasks(text) {
  const rows = csvRows(text);
  const errors = [];
  if (!rows.length) return { tasks: [], errors: [{ line: 1, message: 'empty' }] };
  const head = rows[0].cells.map((h) => h.trim().toLowerCase());
  const col = (...names) => head.findIndex((h) => names.includes(h));
  const ci = { task: col('task', 'task name', 'name'), start: col('start', 'start date'), finish: col('finish', 'end', 'finish date', 'end date'), field: col('field', 'property'), value: col('value') };   // i18n-ignore: column names of the file format
  const missing = Object.entries(ci).filter(([, i]) => i < 0).map(([k]) => k);
  const gi = { stage: col('stage', 'phase'), package: col('package', 'work package', 'wbs') };   // i18n-ignore: column names of the file format (0.6 WL.6, optional)
  if (missing.length) return { tasks: [], errors: [{ line: rows[0].line, message: 'header', missing }] };
  const byName = new Map();
  for (const r of rows.slice(1)) {
    const g = (k) => String(r.cells[ci[k]] ?? '').trim();
    const name = g('task').slice(0, 200), start = parseDay(g('start')), finish = parseDay(g('finish')), field = g('field'), value = g('value');
    if (!name) { errors.push({ line: r.line, message: 'noname' }); continue; }
    if (start === null || finish === null) { errors.push({ line: r.line, message: 'date', task: name }); continue; }
    if (finish < start) { errors.push({ line: r.line, message: 'order', task: name }); continue; }
    const gg = (i) => (i >= 0 ? String(r.cells[i] ?? '').trim().slice(0, 200) : '');
    const stage = gg(gi.stage), pkg = gg(gi.package);
    let t = byName.get(name);
    if (!t) byName.set(name, (t = { name, start, finish, stage, package: pkg, rows: [] }));
    else if (t.start !== start || t.finish !== finish) { errors.push({ line: r.line, message: 'dates-differ', task: name }); continue; }
    else if ((stage && t.stage && stage !== t.stage) || (pkg && t.package && pkg !== t.package)) { errors.push({ line: r.line, message: 'group-differs', task: name }); continue; }
    else { t.stage ||= stage; t.package ||= pkg; }   // a later row may fill in a group the first left blank
    if (field && value) t.rows.push({ field: field.slice(0, 300), value: value.slice(0, 300), line: r.line });
    else if (field || value) errors.push({ line: r.line, message: 'half', task: name });
  }
  return { tasks: [...byName.values()].sort((a, b) => a.start - b.start || a.finish - b.finish || a.name.localeCompare(b.name)), errors };
}

/** The index field a CSV Field names, or null. */
export function fieldId(ix, name) {
  const n = String(name).trim(), low = n.toLowerCase();
  if (FIELDS[low]) return FIELDS[low];
  if (ix.fields.some((f) => f.id === n)) return n;
  const p = ix.fields.find((f) => f.group && (f.group + '.' + f.label).toLowerCase() === low);
  return p ? p.id : null;
}

export function matchTasks(ix, tasks) {
  const norm = (v) => String(v ?? '').trim().toLowerCase();
  const cache = new Map();
  const byValue = (fid) => {
    if (!cache.has(fid)) { const m = new Map(); for (const [id, v] of ix.values(fid)) { const k = norm(v); if (!m.has(k)) m.set(k, []); m.get(k).push(ix.keyBase + id); } cache.set(fid, m); }
    return cache.get(fid);
  };
  return tasks.map((t) => {
    const keys = new Set(), unmatched = [];
    for (const r of t.rows) {
      const fid = fieldId(ix, r.field);
      const hit = fid ? byValue(fid).get(norm(r.value)) : null;
      if (hit && hit.length) for (const k of hit) keys.add(k); else unmatched.push({ ...r, unknownField: !fid });
    }
    return { ...t, keys: [...keys], unmatched };
  });
}

export function statusAt(matched, day) {
  const all = new Map();   // key → [built, progress, waiting] counts over its tasks
  for (const t of matched) {
    const i = day > t.finish ? 0 : day >= t.start ? 1 : 2;   // in progress from Start through Finish, built the day after
    for (const k of t.keys) { let c = all.get(k); if (!c) all.set(k, (c = [0, 0, 0])); c[i]++; }
  }
  const st = new Map();
  for (const [k, c] of all) st.set(k, c[1] || (c[0] && c[2]) ? 'progress' : c[0] ? 'built' : 'waiting');   // built in one task, not started in another: still being worked on
  return st;
}

export function span(matched) {
  if (!matched.length) return null;
  return { first: Math.min(...matched.map((t) => t.start)), last: Math.max(...matched.map((t) => t.finish)) };
}

/** A starting CSV: one task per storey (lowest first), a week each from `from` (a day; default the next Monday). */
export function templateCsv(storeys, from = null) {
  const today = Math.floor(Date.now() / 86400000);
  let d = from ?? today + ((8 - new Date(today * 86400000).getUTCDay()) % 7 || 7);
  const q = (s) => (/[",;\r\n]/.test(s) || /^[=+\-@]/.test(s) ? '"' + (/^[=+\-@]/.test(s) ? "'" : '') + String(s).replace(/"/g, '""') + '"' : s);
  const lines = ['Task,Start,Finish,Field,Value'];   // i18n-ignore: the file format's own column names
  for (const s of storeys) { lines.push([q(s + ''), dayText(d), dayText(d + 4), 'Storey', q(s + '')].join(',')); d += 7; }   // i18n-ignore: a field name of the format
  return lines.join('\r\n') + '\r\n';
}

// ---- groups: stages and work packages (0.6 WL.6) ----
const SEP = '\u0000';
const stageKey = (stage) => 's:' + stage;
const packageKey = (stage, pkg) => 'p:' + stage + SEP + pkg;

export function groupsOf(tasks) {
  const stages = new Map(), packages = new Map();
  const grow = (map, key, make, t) => { let g = map.get(key); if (!g) map.set(key, (g = { ...make, start: t.start, finish: t.finish, tasks: 0 })); g.start = Math.min(g.start, t.start); g.finish = Math.max(g.finish, t.finish); g.tasks++; };
  for (const t of tasks) {
    if (t.stage) grow(stages, stageKey(t.stage), { key: stageKey(t.stage), kind: 'stage', name: t.stage, stage: t.stage }, t);
    if (t.package) grow(packages, packageKey(t.stage || '', t.package), { key: packageKey(t.stage || '', t.package), kind: 'package', name: t.package, stage: t.stage || '' }, t);
  }
  const byStart = (a, b) => a.start - b.start || a.finish - b.finish || a.name.localeCompare(b.name);
  const out = [];
  for (const st of [...stages.values()].sort(byStart)) out.push(st, ...[...packages.values()].filter((p) => p.stage === st.name).sort(byStart));
  out.push(...[...packages.values()].filter((p) => !p.stage).sort(byStart));
  return out;
}

export function inGroup(tasks, key) {
  if (!key) return tasks;
  if (key.startsWith('s:')) { const st = key.slice(2); return tasks.filter((t) => t.stage === st); }
  if (key.startsWith('p:')) { const [st, pkg] = key.slice(2).split(SEP); return tasks.filter((t) => (t.stage || '') === st && t.package === pkg); }
  return [];
}

export function groupKeys(tasks) {
  const keys = new Set();
  for (const t of tasks) for (const k of t.keys || []) keys.add(k);
  return [...keys];
}

export function groupState(tasks, day) {
  const n = { done: 0, now: 0, todo: 0 };
  for (const t of tasks) n[day > t.finish ? 'done' : day >= t.start ? 'now' : 'todo']++;
  return n;
}
