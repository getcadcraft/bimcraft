/* SPDX-License-Identifier: Apache-2.0 */
/**
 * doc-fields.js — fields other modules give to Documents from the model (0.10 BK.47, BK.142; session bk-r3-schedules-10).
 * doc-template.js knows its own fields; a module that owns something a document should print (the model schedules, the
 * specification) registers a field here and doc-ui.js hands them on. No DOM in the registry; decoratePreview is the one DOM part.
 *
 *   registerDocField(name, fn)         fn(argument text) → Markdown (model text already escaped by the module), or null = not available
 *   docFields() → { name: fn }         what doc-ui.js passes to docSource({ fields })
 *   noteFigures(head, lines)           a field that printed a table says which elements are behind each line and figure:
 *                                      lines = [{ cells: [text…], ids: [key…], cellIds?: [[key…] | null …] }] in the table's order
 *   resetFigures()                     before a document is rendered again
 *   decoratePreview(root, select)      in the preview: a click on a figure of such a table calls select(keys) (BK.142)
 *   mdTable(head, rows)                a Markdown table (cells escaped here)
 */
const fields = new Map();
let figures = [];
const esc = (v) => String(v ?? '').replace(/\r?\n/g, ' ').replace(/([\\*_`|#[\]])/g, '\\$1');

export function registerDocField(name, fn) { fields.set(String(name).toLowerCase(), fn); }
export const docFields = () => Object.fromEntries(fields);
export function resetFigures() { figures = []; }
export function noteFigures(head, lines) { figures.push({ head: head.map(String), lines }); }
export const figureTables = () => figures;
export const mdEscape = esc;
export const mdTable = (head, rows) => '\n\n' + [head.map(esc), head.map(() => '---'), ...rows.map((r) => head.map((_, j) => esc(r[j] ?? '')))].map((r) => '| ' + r.join(' | ') + ' |').join('\n') + '\n\n';

/** The preview's tables, matched in order to the tables the fields printed (same headings, same number of rows). */
export function decoratePreview(root, select) {
  if (!root || !figures.length) return 0;
  const text = (n) => n.textContent.trim();
  const left = figures.slice();
  let n = 0;
  for (const table of root.querySelectorAll('table')) {
    const head = [...table.querySelectorAll('thead th')].map(text), rows = [...table.querySelectorAll('tbody tr')];
    const i = left.findIndex((f) => f.head.length === head.length && f.lines.length === rows.length && f.head.every((h, j) => h.trim() === head[j]));
    if (i < 0) continue;
    const f = left.splice(i, 1)[0];
    table.setAttribute('data-doc-figures', '');
    rows.forEach((tr, r) => {
      const line = f.lines[r];
      [...tr.children].forEach((td, j) => {
        const ids = (line.cellIds && line.cellIds[j] && line.cellIds[j].length ? line.cellIds[j] : line.ids) || [];
        if (!ids.length) return;
        td.setAttribute('data-doc-fig', r + ':' + j);
        td.style.cursor = 'pointer';
        td.addEventListener('click', () => select(ids));
        n++;
      });
    });
  }
  return n;
}
