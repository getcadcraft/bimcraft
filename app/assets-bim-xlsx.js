/* SPDX-License-Identifier: Apache-2.0 */
/**
 * assets-bim-xlsx.js — a small Office Open XML workbook writer and reader for the COBie spreadsheet (0.7 LC.12 item 2,
 * session bim-ops). No library. DOM-free (node bin/test-bimcraft.mjs --ops --only cobie; read back and written by openpyxl
 * as the oracle). The writer is the shared one (tables/xlsx.js, 0.10 BK.39: one workbook writer for BimCraft and TakeoffCraft); the
 * reader is here, with the zip and XML reader taken from bcf.js.
 *
 *   writeXlsx([{ name, rows: [[cell…]…], cols?: [widths], freeze?: rows }], { title }) → Promise<Uint8Array>
 *       cell = null | 'text' | number | { v, s: 'head' }. Every text is an inline string (never a formula). Text that a
 *       spreadsheet would take for a formula if it were typed (= + - @ first) is stored with quotePrefix, so it shows as
 *       the text it is, and stays text when the cell is edited.
 *   readXlsx(bytes) → Promise<{ sheets: [{ name, rows: [[string…]…] }], formulas: n }>   untrusted input:
 *       zip and XML limits from bcf.js; ≤ MAX_SHEETS sheets, ≤ MAX_ROWS rows, ≤ MAX_COLS columns, each value ≤ MAX_TEXT
 *       characters; a formula cell gives its last computed value as text and is counted (the formula is never kept or run);
 *       numbers as written ('12.5'), booleans 'TRUE' / 'FALSE', errors as their text.
 *   serialDay(n) → 'YYYY-MM-DD' | ''   a spreadsheet date number (1900 system) as a day
 */
import { unzip, parseXml } from './bcf.js';
import { writeXlsx as write } from './tables/xlsx.js';

export const MAX_SHEETS = 64, MAX_ROWS = 20000, MAX_COLS = 200, MAX_TEXT = 1000;
// ---------------------------------------------------------------- writing
// 0.10 BK.39 (bk-r3-schedules-10): the writer is the one shared workbook writer (tables/xlsx.js; canonical lib/tables/xlsx.js,
// also TakeoffCraft's). This file names the program and keeps the reader.
export { xmlText, colName, looksLikeFormula } from './tables/xlsx.js';
export const writeXlsx = (sheets, { title = '', created = new Date() } = {}) => write(sheets, { title, created, creator: 'BimCraft' });

// ---------------------------------------------------------------- reading (untrusted)
const dec = new TextDecoder();
const kids = (n, name) => (n ? n.children.filter((c) => c.name === name) : []);
const kid = (n, name) => n?.children.find((c) => c.name === name) || null;
/** A string item (<si> or <is>): its <t>, or its rich-text runs' <t>s joined; phonetic runs (<rPh>) left out. */
const itemText = (n) => (kid(n, 't') ? kid(n, 't').text : kids(n, 'r').map((r) => kid(r, 't')?.text || '').join(''));
const clipText = (s) => String(s ?? '').slice(0, MAX_TEXT);
/** "AB12" → column 27 (0-based); null when not a cell reference. */
function colOf(ref) {
  const m = /^([A-Z]{1,3})\d+$/.exec(String(ref || ''));
  if (!m) return null;
  let c = 0;
  for (const ch of m[1]) c = c * 26 + (ch.charCodeAt(0) - 64);
  return c - 1;
}
const resolve = (base, target) => {
  if (target.startsWith('/')) return target.slice(1);
  const parts = (base + target).split('/'), out = [];
  for (const p of parts) { if (p === '..') out.pop(); else if (p && p !== '.') out.push(p); }
  return out.join('/');
};

export async function readXlsx(bytes) {
  const files = await unzip(bytes);
  const get = (name) => { const b = files.get(name); return b ? parseXml(dec.decode(b)) : null; };
  const wb = get('xl/workbook.xml');
  if (!wb) throw Object.assign(new Error('not a workbook'), { key: 'assets.cobie.err.not-xlsx' });   // i18n-ignore: internal: the error carries a key
  const rels = new Map(kids(kid(get('xl/_rels/workbook.xml.rels'), 'Relationships'), 'Relationship').map((r) => [r.attrs.Id, r.attrs.Target]));
  const shared = kids(kid(get('xl/sharedStrings.xml'), 'sst'), 'si').map((si) => clipText(itemText(si)));
  const list = kids(kid(kid(wb, 'workbook'), 'sheets'), 'sheet');
  if (list.length > MAX_SHEETS) throw Object.assign(new Error('too many sheets'), { key: 'assets.cobie.err.too-big' });   // i18n-ignore: internal: the error carries a key
  let formulas = 0;
  const sheets = [];
  for (const s of list) {
    const target = rels.get(s.attrs.id);
    const doc = target ? get(resolve('xl/', target)) : null;
    const rowsEl = kids(kid(kid(doc, 'worksheet'), 'sheetData'), 'row');
    if (rowsEl.length > MAX_ROWS) throw Object.assign(new Error('too many rows'), { key: 'assets.cobie.err.too-big' });   // i18n-ignore: internal: the error carries a key
    const rows = [];
    let rAt = 0;
    for (const row of rowsEl) {
      const r = Number(row.attrs.r) > 0 ? Number(row.attrs.r) - 1 : rAt;
      if (r >= MAX_ROWS) throw Object.assign(new Error('too many rows'), { key: 'assets.cobie.err.too-big' });   // i18n-ignore: internal: the error carries a key
      rAt = r + 1;
      const cells = [];
      let cAt = 0;
      for (const c of kids(row, 'c')) {
        const col = colOf(c.attrs.r) ?? cAt;
        cAt = col + 1;
        if (col >= MAX_COLS) continue;
        const t = c.attrs.t || 'n', v = kid(c, 'v')?.text ?? '';
        if (kid(c, 'f')) formulas++;
        let text;
        if (t === 's') text = shared[Number(v)] ?? '';
        else if (t === 'inlineStr') text = itemText(kid(c, 'is'));
        else if (t === 'b') text = v === '1' ? 'TRUE' : v === '0' ? 'FALSE' : v;
        else text = v;   // n, str (a formula's text), e (an error), d (an ISO date)
        cells[col] = clipText(text);
      }
      rows[r] = Array.from({ length: cells.length }, (_, i) => cells[i] ?? '');
    }
    sheets.push({ name: clipText(s.attrs.name), rows: Array.from({ length: rows.length }, (_, i) => rows[i] || []) });
  }
  return { sheets, formulas };
}

export function serialDay(n) {
  const x = Number(n);
  if (!Number.isFinite(x) || x < 1 || x > 2958465) return '';
  // the 1900 system counts a 29 February 1900 that never was: day 60; days after it are one off
  const d = new Date(Date.UTC(1899, 11, 30) + Math.floor(x) * 86400000 + (x < 61 ? 86400000 : 0));
  return d.toISOString().slice(0, 10);
}
