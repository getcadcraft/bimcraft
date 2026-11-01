/* SPDX-License-Identifier: Apache-2.0 */
/**
 * carbon.js — the embodied-carbon engine (0.8 EG.14, session `energy_PART_2`). DOM-free and model-free: it takes plain items (carbon-calc.js reads
 * them from the open model; takeoff lines come through itemsFromLines) and a factor table (carbon-factors.js) and adds up kgCO2e by life-cycle
 * module (A1–A3 product stage always; A4 transport and A5 site waste only when asked AND the row has a figure), by material, class and storey.
 * An early-design estimate from the factors you load, not an assessment: the shipped factors are labelled starter values.
 *
 *   item  { guid, cls, name, storey, parts: [{ material, volume (m³), area (m²), length (m), count, mass (kg) }], factorId? (use this row), qsource }
 *   calcCarbon(items, rows, { modules = ['a1a3'], floorArea })
 *       → { rows: [{ guid, name, cls, storey, material, factor, basis, amount, mass, a1a3, a4, a5, total, checked }], byMaterial, byClass, byStorey,
 *           totals { a1a3, a4, a5, total, mass }, perM2, unmatched [{ guid, name, cls, material }], missing [{ guid, name, factor, need }],
 *           gaps { a4, a5 } (rows used with no figure for a module asked for), unchecked (count of rows used that are not `checked`), modules }
 *   itemsFromLines(lines) → { items, skipped }   a takeoff's lines { name, qty, unit, cls?, material? }; units m3 m2 m kg t each, and cy sf lf ft cf converted
 *   carbonProblems(res, { imperial }) → problems (source `bimcraft.carbon`, rule 29): unmatched, missing quantity, unchecked starter figures, the module gaps
 *   carbonCsv(res) → CSV text of the rows (formula-looking cells guarded)
 * The basis picks the quantity: kg = volume × density (or a mass), m3 = volume, m2 = area, m = length, item = count (default 1).
 */
import { matchRow } from './carbon-factors.js';

const CONV = { m3: ['volume', 1], 'm³': ['volume', 1], cy: ['volume', 0.764554858], cf: ['volume', 0.0283168466], m2: ['area', 1], 'm²': ['area', 1], sf: ['area', 0.09290304], sqft: ['area', 0.09290304],
  m: ['length', 1], lf: ['length', 0.3048], ft: ['length', 0.3048], kg: ['mass', 1], t: ['mass', 1000], each: ['count', 1], ea: ['count', 1], count: ['count', 1], item: ['count', 1] };
const MODS = ['a1a3', 'a4', 'a5'];
const f3 = (x) => (Number.isFinite(x) ? Math.round(x * 1000) / 1000 : x);

export function itemsFromLines(lines) {
  const items = [], skipped = [];
  (lines || []).forEach((l, i) => {
    const c = CONV[String(l?.unit ?? '').trim().toLowerCase()], q = Number(l?.qty);
    if (!c || !(q >= 0) || !String(l?.name ?? '').trim()) { skipped.push({ index: i, name: String(l?.name ?? ''), unit: String(l?.unit ?? '') }); return; }
    items.push({ guid: 'line:' + i, cls: String(l.cls || ''), name: String(l.name), storey: '', qsource: 'takeoff', parts: [{ material: String(l.material || l.name), [c[0]]: q * c[1] }] });
  });
  return { items, skipped };
}

function amountOf(row, part) {
  if (row.basis === 'kg') { const m = Number.isFinite(part.mass) ? part.mass : Number.isFinite(part.volume) ? part.volume * row.density : NaN; return { amount: m, mass: m, need: 'volume' }; }
  if (row.basis === 'm3') return { amount: part.volume, mass: Number.isFinite(part.volume) && row.density ? part.volume * row.density : NaN, need: 'volume' };
  if (row.basis === 'm2') return { amount: part.area, mass: NaN, need: 'area' };
  if (row.basis === 'm') return { amount: part.length, mass: NaN, need: 'length' };
  return { amount: Number.isFinite(part.count) ? part.count : 1, mass: NaN, need: 'count' };
}

export function calcCarbon(items, rows, { modules = ['a1a3'], floorArea = 0 } = {}) {
  const mods = MODS.filter((m) => m === 'a1a3' || (modules || []).includes(m));
  const byId = new Map(rows.map((r) => [r.id, r]));
  const out = [], unmatched = [], missing = [], gaps = { a4: 0, a5: 0 };
  const used = new Set();
  for (const it of items) {
    for (const part of it.parts || []) {
      const row = (it.factorId && byId.get(it.factorId)) || matchRow(rows, { material: part.material, name: it.name, cls: it.cls });
      if (!row) { unmatched.push({ guid: it.guid, name: it.name, cls: it.cls, material: part.material || '' }); continue; }
      const q = amountOf(row, part);
      if (!Number.isFinite(q.amount) || q.amount < 0) { missing.push({ guid: it.guid, name: it.name, factor: row.id, need: q.need }); continue; }
      const r = { guid: it.guid, name: it.name, cls: it.cls, storey: it.storey || '', material: part.material || '', factor: row.id, basis: row.basis, amount: q.amount, mass: Number.isFinite(q.mass) ? q.mass : 0, a1a3: 0, a4: 0, a5: 0, total: 0, checked: !!row.checked };
      for (const m of mods) {
        if (m !== 'a1a3' && !Number.isFinite(row[m])) { gaps[m]++; continue; }
        r[m] = q.amount * row[m]; r.total += r[m];
      }
      used.add(row.id);
      out.push(r);
    }
  }
  const sum = (key) => {
    const m = new Map();
    for (const r of out) { const k = r[key] || '—'; const g = m.get(k) || { key: k, total: 0, mass: 0, n: 0 }; g.total += r.total; g.mass += r.mass; g.n++; m.set(k, g); }
    return [...m.values()].sort((a, b) => b.total - a.total);
  };
  const totals = { a1a3: 0, a4: 0, a5: 0, total: 0, mass: 0 };
  for (const r of out) { for (const m of MODS) totals[m] += r[m]; totals.total += r.total; totals.mass += r.mass; }
  const share = (list) => list.map((g) => ({ ...g, pct: totals.total > 0 ? g.total / totals.total * 100 : 0 }));
  return {
    rows: out, byMaterial: share(sum('factor')), byClass: share(sum('cls')), byStorey: share(sum('storey')), totals, perM2: floorArea > 0 ? totals.total / floorArea : null,
    unmatched, missing, gaps, unchecked: out.filter((r) => !r.checked).length, modules: mods, factorsUsed: [...used],
  };
}

// ------------------------------------------------------------------------------------------------ Problems (rule 29)
const el = (r) => ({ kind: 'element', id: String(r.guid), label: r.name || undefined });
function P(code, severity, text, extra = {}) {
  return { code, severity, part: extra.part || '', msg: { key: 'carbon.' + code, vars: extra.vars || {} }, text, about: extra.about || [], source: { name: 'bimcraft.carbon' }, ...(extra.req ? { req: extra.req } : {}), ...(extra.found ? { found: extra.found } : {}), fixes: extra.fixes || [] };
}
export function carbonProblems(res) {
  const out = [];
  if (res.unmatched.length) out.push(P('unmatched', 'warning', `${res.unmatched.length} part${res.unmatched.length > 1 ? 's have' : ' has'} no factor, so ${res.unmatched.length > 1 ? 'they are' : 'it is'} not in the total. Add a row whose keywords match the material name, or set the factor on the element.`,
    { part: 'unmatched', about: res.unmatched.slice(0, 50).filter((u) => !String(u.guid).startsWith('line:')).map(el), vars: { n: res.unmatched.length }, fixes: [{ id: 'factor', text: 'Add a factor row for it in the table' }] }));
  if (res.missing.length) out.push(P('noqty', 'warning', `${res.missing.length} part${res.missing.length > 1 ? 's have' : ' has'} a factor but no ${res.missing[0].need} to multiply it by, so ${res.missing.length > 1 ? 'they are' : 'it is'} left out.`,
    { part: 'noqty', about: res.missing.slice(0, 50).filter((u) => !String(u.guid).startsWith('line:')).map(el), vars: { n: res.missing.length } }));
  if (res.unchecked && res.rows.length) out.push(P('unchecked', 'note', `${res.unchecked} of ${res.rows.length} lines use factors nobody has marked checked (the shipped starter values are generic and unverified). Load the figures of your own source before relying on this total.`, { part: 'unchecked', vars: { n: res.unchecked, of: res.rows.length } }));
  for (const m of ['a4', 'a5']) if (res.modules.includes(m) && res.gaps[m]) out.push(P('gap.' + m, 'note', `${res.gaps[m]} lines have no ${m.toUpperCase()} figure in their factor row, so that module counts as zero for them.`, { part: 'gap.' + m, vars: { n: res.gaps[m] } }));
  return out;
}

// ------------------------------------------------------------------------------------------------ CSV
const guard = (s) => (/^[=+\-@\t\r]/.test(s) ? "'" + s : s);
const cell = (s) => { const g = guard(String(s ?? '')); return /[",\r\n]/.test(g) ? '"' + g.replace(/"/g, '""') + '"' : g; };
export function carbonCsv(res) {
  const lines = ['guid,name,class,storey,material,factor,basis,amount,mass_kg,a1a3_kgco2e,a4_kgco2e,a5_kgco2e,total_kgco2e,checked'];
  for (const r of res.rows) lines.push([cell(r.guid), cell(r.name), cell(r.cls), cell(r.storey), cell(r.material), cell(r.factor), r.basis, f3(r.amount), f3(r.mass), f3(r.a1a3), f3(r.a4), f3(r.a5), f3(r.total), r.checked ? 'true' : 'false'].join(','));
  lines.push(['total', '', '', '', '', '', '', '', f3(res.totals.mass), f3(res.totals.a1a3), f3(res.totals.a4), f3(res.totals.a5), f3(res.totals.total), ''].join(','));
  return lines.join('\r\n') + '\r\n';
}
