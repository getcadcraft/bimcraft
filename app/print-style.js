/* SPDX-License-Identifier: Apache-2.0 */
/**
 * print-style.js — how a model prints (0.9 D8.12-B, session `bim-views-09`). No DOM: node bin/test-bimcraft.mjs --views09 --only b.
 *   'shown'  sheets and the PDF draw exactly what the screen shows: the views' pen overrides in their weight, line and colour
 *            (res-sheets.js / model-pdf.js read them from the scene); the default of the working style "Each view its own"
 *   'table'  everything goes through a pen table, colour → printed colour, weight and ink, in CadCraft's plot-style format (0.6 DC.14:
 *            the same JSON 'cadcraft-plotstyle' v1 file, the same built-ins colour / monochrome / grayscale; plotstyle/plotstyle.js is
 *            CadCraft's own file, copied by tools/bimcraft-test/plotstyle-sync.mjs); the default of "Shared annotations and pen tables"
 * In the file: the project's CadCraft_PrintStyle — Mode ('shown' | 'table' | '' = the working style's default), Table (a built-in's name,
 * or the table as the plot-style JSON).
 *
 *   readPrintStyle(w) → { mode: '' | 'shown' | 'table', table (a table or null), name }
 *   setPrintStyle({ mode?, table? }) → op (one undo step)       modeIn(fileMode, styleDefault) → 'shown' | 'table'
 *   tableOf(name | table) → a table (built-in by name) | null
 *   tableItems(items, table) → the sheet items as printed through it ('ink' for black and the plain greys' own colours)
 *   tableSheets(sheets, table) → the same for a list of sheets (res-sheets.js shape)
 *   PEN_ROWS → [{ token, hex, aci }] the colours BimCraft draws with, for the table editor
 *   setActive(table | null) / active()   the table the open model prints through now (pens-ui.js keeps it in step); printSheets(sheets)
 */
import { op } from './model-ops.js';
import { ids } from './ifc-util.js';
import { applyPen, aciOf, builtinTable, cleanTable, BUILTIN } from './plotstyle/plotstyle.js';
import { penHex } from './pen-colors.js';

export const PRINT_PSET = 'CadCraft_PrintStyle';
export const MODES = ['shown', 'table'];
const project = (w) => ids(w.api, w.mid, 'IFCPROJECT')[0];
export const PEN_ROWS = ['--ink', '--ink-2', '--layer-red', '--layer-blue', '--layer-orange', '--layer-magenta', '--layer-ochre', '--layer-green', '--layer-violet', '--layer-cyan']
  .map((token) => { const hex = token === '--ink' ? 'ink' : penHex(token); return { token, hex, aci: aciOf(hex) }; });

export function tableOf(x) {
  if (!x) return null;
  if (typeof x === 'string') return builtinTable(x);
  const r = cleanTable(x);
  return r.ok ? r.table : null;
}
export function readPrintStyle(w) {
  const pj = project(w), ps = pj === undefined ? null : w.readPset(pj, PRINT_PSET);
  const mode = MODES.includes(ps?.Mode) ? ps.Mode : '';
  let table = null;
  const raw = String(ps?.Table || '');
  if (raw) {
    if (BUILTIN.includes(raw)) table = builtinTable(raw);
    else { try { const o = JSON.parse(raw); table = tableOf(o); } catch (e) { table = null; } }
  }
  return { mode, table, name: table?.name || '' };
}
export function setPrintStyle(ch) {
  const C = { ...ch };
  return op((w) => {
    if ('mode' in C && C.mode !== '' && !MODES.includes(C.mode)) throw Object.assign(new Error('model.err.print.mode'), { key: 'model.err.print.mode' });
    let tableText;
    if ('table' in C) {
      if (C.table === null) tableText = '';
      else if (typeof C.table === 'string') { if (!BUILTIN.includes(C.table)) throw Object.assign(new Error('model.err.print.table'), { key: 'model.err.print.table' }); tableText = C.table; }
      else { const r = cleanTable(C.table); if (!r.ok) throw Object.assign(new Error('model.err.print.table'), { key: 'model.err.print.table' }); tableText = JSON.stringify(r.table); }
    }
    const pj = project(w);
    const rows = [];
    if ('mode' in C) rows.push(['Mode', 'IFCLABEL', C.mode]);
    if (tableText !== undefined) rows.push(['Table', 'IFCTEXT', tableText]);
    if (rows.length) w.upsertPset(pj, PRINT_PSET, rows);
    return { id: pj, ids: [] };
  });
}
export const modeIn = (fileMode, styleDefault) => (MODES.includes(fileMode) ? fileMode : styleDefault === 'table' ? 'table' : 'shown');

const greyHex = (g) => { const v = Math.max(0, Math.min(255, Math.round((Number(g) || 0) * 255))).toString(16).padStart(2, '0'); return '#' + v + v + v; };
/** One item's colour as BimCraft draws it: black (and no colour) is 'ink', ACI 7 — the pen a plot style sets for "black / white". */
const colourOf = (it) => {
  const c = it.color ? String(it.color).toLowerCase() : null;
  if (c && c !== '#000000') return c;
  if (!c && it.g) return greyHex(it.g);
  return 'ink';
};
export function tableItems(items, table) {
  if (!table) return items;
  return items.map((it) => {
    if (it.t !== 'line' && it.t !== 'fill' && it.t !== 'text') return it;
    const p = applyPen(table, colourOf(it), it.t === 'line' ? it.w : -3);
    const out = { ...it, color: p.color };
    if (it.t === 'text') { const [r, g, b] = [1, 3, 5].map((i) => parseInt(p.color.slice(i, i + 2), 16)); out.g = (0.299 * r + 0.587 * g + 0.114 * b) / 255; }   // the PDF writes text in grey
    else out.g = 0;
    if (it.t === 'line' && p.lw >= 0) out.w = p.lw;
    return out;
  });
}
export const tableSheets = (sheets, table) => (table ? sheets.map((s) => ({ ...s, items: tableItems(s.items || [], table) })) : sheets);

let ACTIVE = null;
export const setActive = (t) => { ACTIVE = t || null; };
export const active = () => ACTIVE;
/** The sheets as this model prints them now: through the pen table when it prints through one, else as they are. */
export const printSheets = (sheets) => tableSheets(sheets, ACTIVE);
