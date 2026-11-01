/* SPDX-License-Identifier: Apache-2.0 */
/**
 * cost5d.js — 5D: costs on the 4D schedule (0.8 EG.17, session `energy_PART_2`). DOM-free. Each element's quantities (carbon-calc.js readElements)
 * are priced from a price table in TakeoffCraft's rate shape (material and labour per unit, a waste allowance), each 4D task (ifc-4d.js matchTasks)
 * collects the cost of its elements, the cost is spread over the task's days, and the days add up to the cash-flow ("S") curve. The prices are YOURS:
 * nothing is shipped (no price list is a fact we can state); load TakeoffCraft's rates, a CSV or type them, then edit the keywords that map a price to
 * the model's materials and classes. An element in several tasks is split evenly between them, so no cost is counted twice.
 *
 *   price row { id, match: [keyword…], classes: […], unit: 'm3' | 'm2' | 'm' | 'kg' | 'item' | 'cy' | 'cf' | 'sf' | 'lf', density? (kg/m³, for kg), mat, lab (per unit),
 *               waste (fraction on the material), source, note }.   cost = qty × (1 + waste) × mat + qty × lab     (material includes waste; labour does not)
 *   cleanPriceRow(raw) → { row, errors } · priceJson / readPriceJson · priceCsv / readPriceCsv (formula cells guarded) · fromTakeoff(json) → { rows, skipped }
 *   priceItems(items, rows) → { lines: [{ id, guid, name, cls, storey, price, qty, unit, mat, lab, cost }], byId: Map(id → cost), unpriced: […], total }
 *   taskCosts(matched, byKey, { keyBase }) → { tasks: [{ name, stage, package, start, finish, keys, cost }], scheduled, unscheduled }
 *   spread(task, profile)  → [{ day, cents }]     'even' | 'front' | 'back' | 'bell'; cents are whole numbers so the days add up to the task exactly
 *   cashFlow(tasks, { profile, per: 'day' | 'week' | 'month' }) → { points: [{ label, from, to, cost, cum }], total, first, last }
 *   byGroup(tasks) → [{ key, kind, name, stage, start, finish, cost }]         stages and work packages (ifc-4d.js groupsOf)
 *   valueAt(tasks, day, { profile, progress }) → { planned, built, running, remaining, earned? }   progress = { taskName: 0..1 } typed by the person
 *   calcCost5d(items, rows, matched, { keyBase, profile, per }) → one object with all of the above
 *   cleanCurrency(x) · DEFAULT_CURRENCY ('USD', the shell's) · readCostSettings(w) → { rows, profile, currency ('' = none in the file), currencyDefaulted, shownIn }
 *   costCsv(res, currency?) → text; costTotal(w, { rows, matched, keyBase, geometry }) → { cost, scheduled, unscheduled, unpriced }   for Studio's running totals (EG.30)
 */
import { groupsOf, inGroup, dayText } from './ifc-4d.js';
import { matchRow, norm, guard, unguard, cell, parseCsv } from './carbon-factors.js';
import { readElements } from './carbon-calc.js';
import { ids } from './ifc-util.js';
import { op } from './model-ops.js';

export const FORMAT = 'cadcraft-price-table';
export const UNITS = Object.freeze({ m3: ['volume', 1], m2: ['area', 1], m: ['length', 1], kg: ['mass', 1], item: ['count', 1], cy: ['volume', 0.764554858], cf: ['volume', 0.0283168466], sf: ['area', 0.09290304], lf: ['length', 0.3048] });
/** The currency a price table without one is shown in: the shell's totals bar formats an unnamed currency as USD (assets/js/totals.js format). Older files say so. */
export const DEFAULT_CURRENCY = 'USD';
/** An ISO 4217 style code (three letters, upper case) or ''. */
export const cleanCurrency = (x) => { const c = String(x ?? '').trim().toUpperCase(); return /^[A-Z]{3}$/.test(c) ? c : ''; };
export const PROFILES = Object.freeze(['even', 'front', 'back', 'bell']);
export const LIMIT = Object.freeze({ rows: 5000, keywords: 20, text: 2000000, cost: 1e12 });
const ID_RE = /^[a-z0-9][a-z0-9._-]{0,63}$/;
const cents = (d) => Math.round(d * 100);
const money = (c) => Math.round(c) / 100;

// ------------------------------------------------------------------------------------------------ the price table
const nOr = (v, d = 0) => { if (v === null || v === undefined || v === '') return d; const n = Number(String(v).trim()); return Number.isFinite(n) ? n : NaN; };
export function cleanPriceRow(raw) {
  const errors = [];
  if (!raw || typeof raw !== 'object') return { row: null, errors: ['row'] };
  const id = String(raw.id ?? '').trim().toLowerCase();
  if (!ID_RE.test(id)) errors.push('bad-id');
  const match = (Array.isArray(raw.match) ? raw.match : String(raw.match ?? '').split('|')).map((k) => norm(k).slice(0, 60)).filter(Boolean);
  if (!match.length || match.length > LIMIT.keywords) errors.push('match');
  const classes = (Array.isArray(raw.classes) ? raw.classes : String(raw.classes ?? '').split('|')).map((c) => String(c).trim().toUpperCase()).filter(Boolean);
  if (classes.some((c) => !/^IFC[A-Z0-9]{3,60}$/.test(c))) errors.push('classes');
  const unit = String(raw.unit ?? '').trim().toLowerCase();
  if (!UNITS[unit]) errors.push('unit');
  const mat = nOr(raw.mat), lab = nOr(raw.lab), waste = nOr(raw.waste), density = nOr(raw.density, null);
  if (!(mat >= 0 && mat <= 1e9)) errors.push('mat');
  if (!(lab >= 0 && lab <= 1e9)) errors.push('lab');
  if (!(waste >= 0 && waste <= 5)) errors.push('waste');
  if (unit === 'kg' && !(density > 0 && density <= 30000)) errors.push('density');
  if (!(mat > 0 || lab > 0)) errors.push('noprice');
  if (errors.length) return { row: null, errors };
  const t = (v, max) => String(v ?? '').replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f-\u009f‪-‮⁦-⁩]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, max);
  return { row: { id, match, classes, unit, density: Number.isFinite(density) && density > 0 ? density : null, mat, lab, waste, source: t(raw.source, 200) || 'yours', note: t(raw.note, 300) }, errors: [] };
}
const slug = (s) => norm(s).replace(/ /g, '-').slice(0, 60) || 'item';

export function priceJson(rows, currency = '') { return JSON.stringify({ format: FORMAT, version: 1, ...(cleanCurrency(currency) ? { currency: cleanCurrency(currency) } : {}), rows: (rows || []).map((r) => cleanPriceRow(r).row).filter(Boolean) }, null, 2); }
export function readPriceJson(src) {
  const errors = [];
  let j;
  if (String(src).length > LIMIT.text) return { rows: [], errors: [{ index: -1, code: 'big' }] };
  try { j = JSON.parse(String(src).replace(/^﻿/, '')); } catch { return { rows: [], errors: [{ index: -1, code: 'json' }] }; }
  const list = Array.isArray(j) ? j : j && j.format === FORMAT && j.version === 1 ? j.rows : null;
  if (!Array.isArray(list)) return { rows: [], errors: [{ index: -1, code: 'format' }] };
  const rows = [], seen = new Set();
  list.slice(0, LIMIT.rows).forEach((raw, index) => {
    const c = cleanPriceRow(raw);
    if (!c.row) { errors.push({ index, code: c.errors[0] }); return; }
    if (seen.has(c.row.id)) { errors.push({ index, code: 'duplicate' }); return; }
    seen.add(c.row.id); rows.push(c.row);
  });
  return { rows, errors, currency: Array.isArray(j) ? '' : cleanCurrency(j.currency) };
}
export const PRICE_HEADER = Object.freeze(['id', 'match', 'classes', 'unit', 'density', 'mat', 'lab', 'waste', 'source', 'note']);
export function priceCsv(rows) {
  const lines = [PRICE_HEADER.join(',')];
  for (const r of rows || []) lines.push([cell(r.id), cell((r.match || []).join('|')), cell((r.classes || []).join('|')), r.unit, Number.isFinite(r.density) ? r.density : '', r.mat, r.lab, r.waste, cell(r.source), cell(r.note)].join(','));
  return lines.join('\r\n') + '\r\n';
}
export function readPriceCsv(src) {
  if (String(src).length > LIMIT.text) return { rows: [], errors: [{ line: 0, code: 'big' }] };
  const all = parseCsv(src);
  if (!all.length) return { rows: [], errors: [{ line: 0, code: 'empty' }] };
  const head = all[0].cells.map((h) => h.trim().toLowerCase()), col = (n) => head.indexOf(n);
  if (['id', 'match', 'unit'].some((n) => col(n) < 0)) return { rows: [], errors: [{ line: all[0].line, code: 'header' }] };
  const rows = [], errors = [], seen = new Set();
  for (const r of all.slice(1, LIMIT.rows + 1)) {
    const g = (n) => (col(n) >= 0 ? unguard(String(r.cells[col(n)] ?? '')) : '');
    const c = cleanPriceRow({ id: g('id'), match: g('match'), classes: g('classes'), unit: g('unit'), density: g('density'), mat: g('mat'), lab: g('lab'), waste: g('waste'), source: g('source'), note: g('note') });
    if (!c.row) { errors.push({ line: r.line, code: c.errors[0] }); continue; }
    if (seen.has(c.row.id)) { errors.push({ line: r.line, code: 'duplicate' }); continue; }
    seen.add(c.row.id); rows.push(c.row);
  }
  return { rows, errors };
}

/**
 * TakeoffCraft's own rates → price rows. Reads a takeoff project (`{ format: 'takeoffcraft-project', items }`) or its `items` object: each item with a
 * material or labour rate (integers in ten-thousandths of a dollar; waste in ten-thousandths of one) becomes a row whose keyword is the item's name.
 * Those names rarely match a model's materials: edit the keywords (the mapping) before pricing. linear → lf, area → sf, count → item (TakeoffCraft's feet).
 */
export function fromTakeoff(json) {
  const src = typeof json === 'string' ? (() => { try { return JSON.parse(json); } catch { return null; } })() : json;
  const items = src && typeof src === 'object' ? (src.items && typeof src.items === 'object' ? src.items : src) : null;
  if (!items || Array.isArray(items)) return { rows: [], skipped: [{ name: '', code: 'format' }] };
  const rows = [], skipped = [], seen = new Set();
  for (const [key, it] of Object.entries(items).slice(0, LIMIT.rows)) {
    const name = String(it?.name ?? key);
    const unit = { linear: 'lf', area: 'sf', count: 'item', fixed: 'item' }[it?.type];
    const mat = Number(it?.mat) / 10000, lab = Number(it?.lab) / 10000, waste = (Number(it?.waste) || 0) / 10000;
    if (!unit || !(mat > 0 || lab > 0)) { skipped.push({ name, code: 'norate' }); continue; }
    let id = slug(name), n = 2;
    while (seen.has(id)) id = slug(name) + '-' + n++;
    const c = cleanPriceRow({ id, match: [name], unit, mat: mat || 0, lab: lab || 0, waste, source: 'TakeoffCraft rates' });
    if (!c.row) { skipped.push({ name, code: c.errors[0] }); continue; }
    seen.add(id); rows.push(c.row);
  }
  return { rows, skipped };
}

// ------------------------------------------------------------------------------------------------ pricing the model
function qtyFor(row, part) {
  const [kind, k] = UNITS[row.unit];
  let q;
  if (kind === 'mass') q = Number.isFinite(part.mass) ? part.mass : Number.isFinite(part.volume) ? part.volume * row.density : NaN;
  else if (kind === 'count') q = Number.isFinite(part.count) ? part.count : 1;
  else q = part[kind];
  return Number.isFinite(q) ? { qty: q / k, kind } : { qty: NaN, kind };
}

export function priceItems(items, rows) {
  const lines = [], unpriced = [], byId = new Map();
  for (const it of items) {
    for (const part of it.parts || []) {
      const row = matchRow(rows, { material: part.material, name: it.name, cls: it.cls });
      if (!row) { unpriced.push({ id: it.id, guid: it.guid, name: it.name, cls: it.cls, material: part.material || '', why: 'noprice' }); continue; }
      const q = qtyFor(row, part);
      if (!(q.qty >= 0)) { unpriced.push({ id: it.id, guid: it.guid, name: it.name, cls: it.cls, material: part.material || '', why: 'noqty', need: q.kind }); continue; }
      const matC = cents(q.qty * (1 + row.waste) * row.mat), labC = cents(q.qty * row.lab);
      const cost = money(matC + labC);
      lines.push({ id: it.id, guid: it.guid, name: it.name, cls: it.cls, storey: it.storey || '', price: row.id, qty: q.qty, unit: row.unit, mat: money(matC), lab: money(labC), cost });
      byId.set(it.id, (byId.get(it.id) || 0) + matC + labC);
    }
  }
  let total = 0;
  for (const [k, c] of byId) { byId.set(k, c / 100); total += c; }
  return { lines, byId, unpriced, total: money(total) };
}

/** Each matched task's cost: the cost of its elements, an element in n tasks counted 1/n in each. `byKey` Map(key → dollars) with key = keyBase + id. */
export function taskCosts(matched, byKey) {
  const n = new Map();
  for (const t of matched) for (const k of t.keys || []) n.set(k, (n.get(k) || 0) + 1);
  const tasks = [];
  const inTask = new Set();
  for (const t of matched) {
    let c = 0;
    for (const k of t.keys || []) { const v = byKey.get(k); if (v) { c += cents(v) / n.get(k); inTask.add(k); } }
    tasks.push({ name: t.name, stage: t.stage || '', package: t.package || '', start: t.start, finish: t.finish, keys: t.keys || [], cents: Math.round(c), cost: money(Math.round(c)) });
  }
  let un = 0;
  for (const [k, v] of byKey) if (!inTask.has(k)) un += cents(v);
  return { tasks, scheduled: money(tasks.reduce((s, t) => s + t.cents, 0)), unscheduled: money(un) };
}

// ------------------------------------------------------------------------------------------------ spreading over days
const weightsFor = (D, profile) => {
  if (D <= 1) return [1];
  return Array.from({ length: D }, (_, i) => (profile === 'front' ? D - i : profile === 'back' ? i + 1 : profile === 'bell' ? Math.sin(Math.PI * (i + 0.5) / D) : 1));
};
/** A task's cents over Start..Finish (inclusive days): whole cents by the largest-remainder rule, so the days add up to the task exactly. */
export function spread(task, profile = 'even') {
  const D = task.finish - task.start + 1, w = weightsFor(D, PROFILES.includes(profile) ? profile : 'even'), W = w.reduce((s, x) => s + x, 0);
  const raw = w.map((x) => task.cents * x / W), base = raw.map(Math.floor);
  let left = task.cents - base.reduce((s, x) => s + x, 0);
  raw.map((x, i) => [x - Math.floor(x), i]).sort((a, b) => b[0] - a[0] || a[1] - b[1]).forEach(([, i]) => { if (left > 0) { base[i]++; left--; } });
  return base.map((c, i) => ({ day: task.start + i, cents: c }));
}

const monday = (day) => day - ((day + 3) % 7);                // 1970-01-01 was a Thursday: (day + 3) % 7 is 0 on Mondays
const monthOf = (day) => dayText(day).slice(0, 7);
export function cashFlow(tasks, { profile = 'even', per = 'day' } = {}) {
  const days = new Map();
  for (const t of tasks) for (const s of spread(t, profile)) days.set(s.day, (days.get(s.day) || 0) + s.cents);
  if (!days.size) return { points: [], total: 0, first: null, last: null };
  const first = Math.min(...days.keys()), last = Math.max(...days.keys());
  const key = (d) => (per === 'week' ? monday(d) : per === 'month' ? monthOf(d) : d);
  const groups = new Map();
  for (let d = first; d <= last; d++) {
    const k = key(d), g = groups.get(k) || { from: d, to: d, c: 0 };
    g.to = d; g.c += days.get(d) || 0; groups.set(k, g);
  }
  let cum = 0;
  const points = [...groups.values()].map((g) => { cum += g.c; return { label: per === 'month' ? monthOf(g.from) : dayText(per === 'week' ? monday(g.from) : g.from), from: g.from, to: g.to, cost: money(g.c), cum: money(cum) }; });
  return { points, total: money(cum), first, last };
}

export function byGroup(tasks) {
  return groupsOf(tasks).map((g) => { const c = inGroup(tasks, g.key).reduce((s, t) => s + t.cents, 0); return { key: g.key, kind: g.kind, name: g.name, stage: g.stage, start: g.start, finish: g.finish, cost: money(c) }; });
}

/** On `day`: what the schedule plans to have spent, what is built (tasks finished), running (tasks in progress), the rest; and earned value when the person types progress. */
export function valueAt(tasks, day, { profile = 'even', progress = null } = {}) {
  let planned = 0, built = 0, running = 0, remaining = 0, earned = 0;
  for (const t of tasks) {
    for (const s of spread(t, profile)) if (s.day <= day) planned += s.cents;
    if (day > t.finish) built += t.cents; else if (day >= t.start) running += t.cents; else remaining += t.cents;
    if (progress) earned += t.cents * Math.max(0, Math.min(1, Number(progress[t.name]) || 0));
  }
  return { planned: money(planned), built: money(built), running: money(running), remaining: money(remaining), ...(progress ? { earned: money(Math.round(earned)) } : {}) };
}

export function calcCost5d(items, rows, matched, { keyBase = 0, profile = 'even', per = 'week' } = {}) {
  const priced = priceItems(items, rows);
  const byKey = new Map([...priced.byId].map(([id, c]) => [keyBase + id, c]));
  const tc = taskCosts(matched, byKey);
  const flow = cashFlow(tc.tasks, { profile, per });
  return { ...priced, ...tc, flow, groups: byGroup(tc.tasks), profile, per, grand: money(cents(tc.scheduled) + cents(tc.unscheduled)) };
}

export function costCsv(res, currency = '') {
  const lines = ['stage,package,task,start,finish,cost' + (cleanCurrency(currency) ? ' (' + cleanCurrency(currency) + ')' : '')];
  for (const t of res.tasks) lines.push([cell(t.stage), cell(t.package), cell(t.name), dayText(t.start), dayText(t.finish), t.cost.toFixed(2)].join(','));
  lines.push(['', '', 'scheduled', '', '', res.scheduled.toFixed(2)].join(','), ['', '', 'not in any task', '', '', res.unscheduled.toFixed(2)].join(','), '', 'period,cost,cumulative');
  for (const p of res.flow.points) lines.push([p.label, p.cost.toFixed(2), p.cum.toFixed(2)].join(','));
  return lines.join('\r\n') + '\r\n';
}

/** The plain figure for the status bar: the priced total of the model, what the schedule holds and what it does not. */
export function costTotal(w, { rows = [], matched = [], keyBase = 0, geometry = true } = {}) {
  const items = readElements(w, { geometry });
  const r = calcCost5d(items, rows, matched, { keyBase });
  return { cost: r.grand, scheduled: r.scheduled, unscheduled: r.unscheduled, unpriced: r.unpriced.length, currency: DEFAULT_CURRENCY };
}

// ------------------------------------------------------------------------------------------------ kept in the file (IfcProject, CadCraft_Cost5D)
export const PSET = 'CadCraft_Cost5D';
const project = (w) => { try { return ids(w.api, w.mid, 'IFCPROJECT')[0]; } catch { return undefined; } };
export function readCostSettings(w) {
  const proj = project(w);
  let p = {};
  if (proj) { try { p = w.readPset(proj, PSET) || {}; } catch { p = {}; } }
  let rows = [];
  if (p.Table) { const r = readPriceJson(String(p.Table)); rows = r.rows; }
  const currency = cleanCurrency(p.Currency);   // EG.17: optional; a file without one is shown in DEFAULT_CURRENCY and says so
  return { rows, profile: PROFILES.includes(p.Profile) ? p.Profile : 'even', currency, currencyDefaulted: !currency, shownIn: currency || DEFAULT_CURRENCY };
}
export function setCostSettings({ rows, profile, currency }) {
  if (currency !== undefined && currency !== '' && !cleanCurrency(currency)) throw Object.assign(new Error('cost5d.err.currency'), { key: 'cost5d.err.currency' });
  const clean = rows === undefined ? undefined : rows.map((r) => { const c = cleanPriceRow(r); if (!c.row) throw Object.assign(new Error('cost5d.err.row.' + c.errors[0]), { key: 'cost5d.err.row.' + c.errors[0] }); return c.row; });
  if (clean && new Set(clean.map((r) => r.id)).size !== clean.length) throw Object.assign(new Error('cost5d.err.duplicate'), { key: 'cost5d.err.duplicate' });
  if (profile !== undefined && !PROFILES.includes(profile)) throw Object.assign(new Error('cost5d.err.profile'), { key: 'cost5d.err.profile' });
  return op((w) => {
    const proj = project(w);
    if (!proj) throw Object.assign(new Error('cost5d.err.noproject'), { key: 'cost5d.err.noproject' });
    const out = [];
    if (clean) out.push(['Table', 'IFCTEXT', JSON.stringify({ format: FORMAT, version: 1, rows: clean })]);
    if (profile) out.push(['Profile', 'IFCLABEL', profile]);
    if (currency !== undefined && cleanCurrency(currency)) out.push(['Currency', 'IFCLABEL', cleanCurrency(currency)]);
    w.upsertPset(proj, PSET, out);
    return { id: proj, ids: [proj] };
  });
}
