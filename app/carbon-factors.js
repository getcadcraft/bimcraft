/* SPDX-License-Identifier: Apache-2.0 */
/**
 * carbon-factors.js — the embodied-carbon factor table (0.8 EG.14, session `energy_PART_2`). OPEN and EDITABLE: a plain list of rows the person
 * can read, change, add to, replace with the figures of their own source, and move as CSV or JSON. DOM-free: node bin/test-bimcraft.mjs --carbon.
 *
 * THE SHIPPED ROWS ARE STARTER VALUES (STARTER_LABEL): generic order-of-magnitude figures for common materials, NOT from any licensed database or
 * environmental product declaration, every one `checked: false`. The source of the real figures is the owner's / the person's choice: replace the
 * rows (or load a file from your own source) before relying on a number. Nothing here is a certified or compliance figure.
 *
 * A row: { id, match: [keyword…], classes: [IFC class…] (optional), basis: 'kg' | 'm3' | 'm2' | 'm' | 'item', density (kg/m³, needed when the basis
 *   is kg), a1a3 (kgCO2e per basis unit, the product stage), a4 / a5 (optional: transport / waste on site, per the same unit), source, checked, note }.
 *   A keyword matches whole words of a material or element name (case and accents ignored, a plural s is fine; "mineral wool" matches that phrase).
 *
 *   STARTER, STARTER_LABEL               the shipped rows (frozen) and the sentence that must stay beside them
 *   cleanRow(raw)                        → { row, errors: [code] }   strict: ids, numbers, bounds, text lengths
 *   mergeTable(user = [])                → rows (starter, with the person's rows replacing the same id; each has origin 'starter' | 'yours' | 'edited')
 *   tableJson(rows) / readTableJson(text)   → text / { rows, errors: [{ index, code }] }       format `cadcraft-carbon-factors` v1
 *   tableCsv(rows) / readTableCsv(text)     → text / { rows, errors: [{ line, code }] }       formula-looking text cells are guarded on the way out
 *   matchRow(rows, { material, name, cls })  → the best row or null (the longest matching keyword wins; a row with `classes` must also fit the class)
 */
export const FORMAT = 'cadcraft-carbon-factors';
export const STARTER_LABEL = 'Starter values: generic order-of-magnitude figures, not from any licensed database, unverified. Replace them with your source.';
export const BASES = Object.freeze(['kg', 'm3', 'm2', 'm', 'item']);
export const LIMIT = Object.freeze({ rows: 2000, keywords: 20, keyword: 60, source: 200, note: 300, text: 2000000 });
const ID_RE = /^[a-z0-9][a-z0-9._-]{0,63}$/;

const S = (id, match, density, a1a3, note = '') => Object.freeze({ id, match: Object.freeze(match), classes: Object.freeze([]), basis: 'kg', density, a1a3, a4: null, a5: null, source: 'starter', checked: false, note, origin: 'starter' });
export const STARTER = Object.freeze([
  S('concrete', ['concrete', 'cement'], 2400, 0.12, 'Ordinary structural concrete; mixes with cement replacement are lower.'),
  S('screed', ['screed'], 2100, 0.15),
  S('rebar', ['rebar', 'reinforcement', 'reinforcing steel'], 7850, 1.2, 'Mostly recycled steel.'),
  S('steel', ['steel'], 7850, 1.7, 'Structural sections; varies a lot with recycled content.'),
  S('aluminium', ['aluminium', 'aluminum'], 2700, 8, 'Mixed primary and recycled; the range is wide.'),
  S('copper', ['copper'], 8960, 3.5),
  S('timber', ['timber', 'wood', 'lumber', 'softwood', 'hardwood', 'glulam', 'clt', 'stud', 'joist', 'rafter'], 500, 0.45, 'Product stage only; the carbon stored in the wood is not credited here.'),
  S('plywood', ['plywood', 'osb', 'mdf', 'chipboard'], 600, 0.7),
  S('brick', ['brick'], 1800, 0.24),
  S('block', ['block', 'masonry'], 1900, 0.1),
  S('glass', ['glass', 'glazing'], 2500, 1.4),
  S('plasterboard', ['plasterboard', 'gypsum', 'drywall'], 800, 0.4),
  S('plaster', ['plaster', 'render', 'stucco'], 1200, 0.2),
  S('mineral-wool', ['mineral wool', 'rock wool', 'glass wool', 'insulation'], 40, 1.2),
  S('polystyrene', ['eps', 'xps', 'polystyrene'], 30, 3.3),
  S('tile', ['tile', 'ceramic', 'porcelain'], 2000, 0.78),
  S('bitumen', ['bitumen', 'asphalt', 'membrane'], 1100, 0.45),
  S('pvc', ['pvc', 'vinyl'], 1400, 3.1),
  S('aggregate', ['gravel', 'sand', 'aggregate', 'hardcore'], 1600, 0.005),
]);

const text = (v, max) => String(v ?? '').replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f-\u009f‪-‮⁦-⁩]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, max);
const numOrNull = (v) => { if (v === null || v === undefined || v === '') return null; const n = typeof v === 'number' ? v : Number(String(v).trim()); return Number.isFinite(n) ? n : NaN; };
export const norm = (s) => String(s ?? '').toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, ' ').trim();

/** One row, validated; `errors` are codes (bad-id, match, basis, density, a1a3, a4, a5, number-range); an erroring row has no `row`. */
export function cleanRow(raw) {
  const errors = [];
  if (!raw || typeof raw !== 'object') return { row: null, errors: ['row'] };
  const id = String(raw.id ?? '').trim().toLowerCase();
  if (!ID_RE.test(id)) errors.push('bad-id');
  const match = (Array.isArray(raw.match) ? raw.match : String(raw.match ?? '').split('|')).map((k) => norm(k).slice(0, LIMIT.keyword)).filter(Boolean);
  if (!match.length || match.length > LIMIT.keywords) errors.push('match');
  const classes = (Array.isArray(raw.classes) ? raw.classes : String(raw.classes ?? '').split('|')).map((c) => String(c).trim().toUpperCase()).filter(Boolean);
  if (classes.some((c) => !/^IFC[A-Z0-9]{3,60}$/.test(c))) errors.push('classes');
  const basis = String(raw.basis ?? '').trim().toLowerCase();
  if (!BASES.includes(basis)) errors.push('basis');
  const density = numOrNull(raw.density);
  if (basis === 'kg' && !(density > 0 && density <= 30000)) errors.push('density');
  const a1a3 = numOrNull(raw.a1a3), a4 = numOrNull(raw.a4), a5 = numOrNull(raw.a5);
  if (a1a3 === null || !Number.isFinite(a1a3)) errors.push('a1a3');
  if (a4 !== null && !Number.isFinite(a4)) errors.push('a4');
  if (a5 !== null && !Number.isFinite(a5)) errors.push('a5');
  for (const [k, v] of [['a1a3', a1a3], ['a4', a4], ['a5', a5]]) if (Number.isFinite(v) && (v < -1e4 || v > 1e6)) errors.push(k + '-range');
  if (errors.length) return { row: null, errors };
  const checked = raw.checked === true || /^(true|yes|1)$/i.test(String(raw.checked ?? ''));
  return { row: { id, match, classes, basis, density: basis === 'kg' ? density : (Number.isFinite(density) && density > 0 ? density : null), a1a3, a4, a5, source: text(raw.source, LIMIT.source) || 'yours', checked, note: text(raw.note, LIMIT.note) }, errors: [] };
}

/** The starter rows with the person's rows laid over them: the same id replaces, a new id is added. */
export function mergeTable(user = []) {
  const out = new Map(STARTER.map((r) => [r.id, { ...r, match: [...r.match], classes: [...r.classes] }]));
  for (const u of user || []) {
    const c = cleanRow(u);
    if (c.row) out.set(c.row.id, { ...c.row, origin: out.has(c.row.id) ? 'edited' : 'yours' });
  }
  return [...out.values()];
}

// ------------------------------------------------------------------------------------------------ JSON
export function tableJson(rows) {
  const clean = (rows || []).map((r) => cleanRow(r).row).filter(Boolean);
  return JSON.stringify({ format: FORMAT, version: 1, label: STARTER_LABEL, rows: clean }, null, 2);
}
export function readTableJson(src) {
  const errors = [];
  let j;
  if (String(src).length > LIMIT.text) return { rows: [], errors: [{ index: -1, code: 'big' }] };
  try { j = JSON.parse(String(src).replace(/^﻿/, '')); } catch { return { rows: [], errors: [{ index: -1, code: 'json' }] }; }
  const list = Array.isArray(j) ? j : j && j.format === FORMAT && j.version === 1 ? j.rows : null;
  if (!Array.isArray(list)) return { rows: [], errors: [{ index: -1, code: 'format' }] };
  const rows = [], seen = new Set();
  list.slice(0, LIMIT.rows).forEach((raw, index) => {
    const c = cleanRow(raw);
    if (!c.row) { errors.push({ index, code: c.errors[0] }); return; }
    if (seen.has(c.row.id)) { errors.push({ index, code: 'duplicate' }); return; }
    seen.add(c.row.id); rows.push(c.row);
  });
  return { rows, errors };
}

// ------------------------------------------------------------------------------------------------ CSV
export const CSV_HEADER = Object.freeze(['id', 'match', 'classes', 'basis', 'density', 'a1a3', 'a4', 'a5', 'source', 'checked', 'note']);
/** A text cell that a spreadsheet would run as a formula gets a leading apostrophe (OWASP CSV injection); the reader takes it off again. */
export const guard = (s) => (/^[=+\-@\t\r]/.test(s) ? "'" + s : s);
export const unguard = (s) => (/^'[=+\-@\t\r]/.test(s) ? s.slice(1) : s);
export const cell = (s) => { const g = guard(String(s ?? '')); return /[",\r\n]/.test(g) ? '"' + g.replace(/"/g, '""') + '"' : g; };
const numCell = (v) => (Number.isFinite(v) ? String(v) : '');
export function tableCsv(rows) {
  const lines = [CSV_HEADER.join(',')];
  for (const r of rows || []) lines.push([cell(r.id), cell((r.match || []).join('|')), cell((r.classes || []).join('|')), r.basis, numCell(r.density), numCell(r.a1a3), numCell(r.a4), numCell(r.a5), cell(r.source), r.checked ? 'true' : 'false', cell(r.note)].join(','));
  return lines.join('\r\n') + '\r\n';
}
export function parseCsv(src) {
  const rows = [];
  let row = [], cur = '', q = false, line = 1, start = 1;
  const s = String(src).replace(/^﻿/, '');
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (q) { if (c === '"') { if (s[i + 1] === '"') { cur += '"'; i++; } else q = false; } else { if (c === '\n') line++; cur += c; } continue; }
    if (c === '"' && cur === '') q = true;
    else if (c === ',') { row.push(cur); cur = ''; }
    else if (c === '\n' || c === '\r') { if (c === '\r' && s[i + 1] === '\n') i++; row.push(cur); cur = ''; if (row.some((x) => x !== '')) rows.push({ cells: row, line: start }); row = []; line++; start = line; }
    else cur += c;
  }
  row.push(cur);
  if (row.some((x) => x !== '')) rows.push({ cells: row, line: start });
  return rows;
}
export function readTableCsv(src) {
  if (String(src).length > LIMIT.text) return { rows: [], errors: [{ line: 0, code: 'big' }] };
  const all = parseCsv(src);
  if (!all.length) return { rows: [], errors: [{ line: 0, code: 'empty' }] };
  const head = all[0].cells.map((h) => h.trim().toLowerCase());
  const col = (n) => head.indexOf(n);
  if (col('id') < 0 || col('a1a3') < 0 || col('basis') < 0 || col('match') < 0) return { rows: [], errors: [{ line: all[0].line, code: 'header' }] };
  const rows = [], errors = [], seen = new Set();
  for (const r of all.slice(1, LIMIT.rows + 1)) {
    const g = (n) => (col(n) >= 0 ? unguard(String(r.cells[col(n)] ?? '')) : '');
    const c = cleanRow({ id: g('id'), match: g('match'), classes: g('classes'), basis: g('basis'), density: g('density'), a1a3: g('a1a3'), a4: g('a4'), a5: g('a5'), source: g('source'), checked: g('checked'), note: g('note') });
    if (!c.row) { errors.push({ line: r.line, code: c.errors[0] }); continue; }
    if (seen.has(c.row.id)) { errors.push({ line: r.line, code: 'duplicate' }); continue; }
    seen.add(c.row.id); rows.push(c.row);
  }
  return { rows, errors };
}

// ------------------------------------------------------------------------------------------------ matching
const reFor = new Map();
const wordRe = (kw) => { let re = reFor.get(kw); if (!re) { re = new RegExp('(^| )' + kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '(s|es)?( |$)'); reFor.set(kw, re); } return re; };

/** The row whose longest keyword is found in the material name (the element's name only when it has no material); a row with `classes` also needs the class. */
export function matchRow(rows, { material = '', name = '', cls = '' } = {}) {
  const C = String(cls || '').toUpperCase().replace(/(STANDARDCASE|ELEMENTEDCASE)$/, '');
  for (const hay of norm(material) ? [norm(material)] : [norm(name)]) {   // a named material is read alone: a "Concrete" wall's siding is not concrete
    if (!hay) continue;
    let best = null, len = 0;
    for (const r of rows) {
      if (r.classes?.length && !r.classes.some((c) => C === c || C === c.replace(/(STANDARDCASE|ELEMENTEDCASE)$/, ''))) continue;
      for (const kw of r.match) if (kw.length > len && wordRe(kw).test(hay)) { best = r; len = kw.length; }
    }
    if (best) return best;
  }
  return null;
}
