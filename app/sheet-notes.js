/* SPDX-License-Identifier: Apache-2.0 */
/**
 * sheet-notes.js: standard notes on a sheet, taken from a regulation pack (booklet row BK.157, session bk-r3-regs). No DOM:
 * node bin/test-bimcraft.mjs --sheetnotes. The notes themselves are the `notes` section of a regulation pack (addons/regs/lib/sections.js:
 * our own words by region and discipline, never a standard's text); the regs add-on offers them through window.ccRegsLocal.notes(pack, ...).
 * A sheet keeps the notes it was given (CadCraft_Sheets, views-model.js: `notes`), each with the pack and clause it came from, so the
 * printed sheet and the file both say where a note is from, and whether that pack is unverified.
 *
 *   cleanSheetNotes(raw) → { title, items: [{ id, text, pack, packName, clause, review }] } | null     untrusted: bounded, control characters out
 *   pickNotes(offered, ids) → items       the offered notes (ccRegsLocal.notes rows) with these ids, in the pack's order
 *   notesHeight(notes, { width, size, gap }) → mm       how tall the block is
 *   notesItems(notes, { x, y, width, size, gap, words }) → sheet text items       numbered, wrapped to the column, a source line at the foot;
 *       words = { title, from (a function ({ packs, state }) → text), unverified } already in the person's language
 */
const CTRL = new RegExp('[\\u0000-\\u001f\\u007f\\u2028\\u2029\\u202a-\\u202e\\u2066-\\u2069]', 'g');
const clip = (s, n) => String(s ?? '').replace(CTRL, ' ').replace(/\s+/g, ' ').trim().slice(0, n);
export const MAX_NOTES = 40;

export function cleanSheetNotes(raw) {
  if (!raw || typeof raw !== 'object') return null;
  const items = (Array.isArray(raw.items) ? raw.items : []).slice(0, MAX_NOTES).map((x) => ({
    id: clip(x?.id, 60), text: clip(x?.text, 600), pack: clip(x?.pack, 60), packName: clip(x?.packName, 120), clause: clip(x?.clause, 120),
    review: ['unchecked', 'draft', 'reviewed'].includes(x?.review) ? x.review : 'unchecked',
  })).filter((x) => x.id && x.text && x.pack);
  return items.length ? { title: clip(raw.title, 60), items } : null;
}

export function pickNotes(offered, ids) {
  const want = new Set(ids);
  return (offered || []).filter((n) => want.has(n.id)).map((n) => ({ id: n.id, text: n.text, pack: n.pack, packName: n.packName, clause: n.clause, review: n.review || 'unchecked' }));
}

const PT = 25.4 / 72;   // a font size is in points; the sheet is in millimetres
/** Characters per line of a column `width` mm wide at `size` pt (Helvetica averages about half an em per character; 0.52 keeps a margin). */
const perLine = (width, size) => Math.max(8, Math.floor((width - 7) / (size * PT * 0.52)));
const stepOf = (size) => size * PT * 1.35;   // one line down, mm
function wrap(text, n) {
  const out = []; let line = '';
  for (const w of String(text).split(' ')) {
    if (line && (line + ' ' + w).length > n) { out.push(line); line = w; } else line = line ? line + ' ' + w : w;
  }
  if (line) out.push(line);
  return out.length ? out : [''];
}
const lines = (n, width, size) => wrap(n.text + (n.clause ? ' [' + n.clause + ']' : ''), perLine(width, size));
const sources = (notes) => { const m = new Map(); for (const n of notes.items) m.set(n.pack, { name: n.packName || n.pack, review: n.review }); return [...m.values()]; };

export function notesHeight(notes, { width = 70, size = 7 } = {}) {
  if (!notes?.items?.length) return 0;
  const step = stepOf(size);
  return stepOf(size + 1.5) + 2 + notes.items.reduce((h, n) => h + lines(n, width, size).length * step + 1.5, 0) + step;
}

export function notesItems(notes, { x = 16, y = 200, width = 70, size = 7, words = {} } = {}) {
  if (!notes?.items?.length) return [];
  const out = [], step = stepOf(size);
  let yy = y;
  out.push({ t: 'text', s: clip(notes.title || words.title || 'General notes', 60), x, y: yy, size: size + 1.5, align: 'left', bold: true });   // i18n-ignore: the editor passes the translated heading
  yy -= stepOf(size + 1.5) + 2;
  notes.items.forEach((n, i) => {
    const ls = lines(n, width, size);
    out.push({ t: 'text', s: String(i + 1), x, y: yy, size, align: 'left', bold: true });
    ls.forEach((l, k) => out.push({ t: 'text', s: l, x: x + 7, y: yy - k * step, size, align: 'left' }));
    yy -= ls.length * step + 1.5;
  });
  const src = sources(notes);
  const from = typeof words.from === 'function' ? words.from({ packs: src.map((s) => s.name).join(', '), unverified: src.some((s) => s.review !== 'reviewed') }) : src.map((s) => s.name).join(', ');
  out.push({ t: 'text', s: clip(from, 160), x, y: yy, size: size * 0.8, align: 'left', g: 0.25 });
  return out;
}
