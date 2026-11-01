/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — keys and file formats read by code; the words people see go through t() in the pages that use this. */
/**
 * keynotes.js — the numbered keynote legend of a sheet (0.8 EG.56; owner decision 2026-10-29: "numbered legend from layers and
 * classifications now; CSI keynote file import as an add-on"). DOM-free and import-free; byte-identical copy in bimcraft/dev and
 * cadcraft/dev (a test compares them).
 *
 *   buildLegend(entries, { notes, skip, max })   entries [{ kind: 'layer'|'classification', key, text?, count? }] → [{ n, kind, key, text, count }]
 *   parseKeynoteFile(text)                       a keynote file ("number<TAB|,|;>text" per line; any numbering, e.g. a CSI-style keynote list the
 *                                                person owns) → { notes: Map(key → text), rows, bad }. Nothing is bundled: no CSI text ships with the apps.
 *   legendToText(legend) / legendFromText(text, legend)   the legend as plain editable lines "n<TAB>text"; edits keep the keys
 *   legendItems(legend, { x, y, size, gap, width })       sheet text items (BimCraft's { t: 'text', s, x, y, size, align, bold })
 */
export const MAX_NOTES = 5000, MAX_TEXT = 160, MAX_LEGEND = 60;
const clean = (s, n = MAX_TEXT) => String(s ?? '').replace(/[\u0000-\u001f\u007f]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, n);
const ORDER = { classification: 0, layer: 1 };

export function parseKeynoteFile(text) {
  const notes = new Map();
  let rows = 0, bad = 0;
  const lines = String(text ?? '').replace(/^﻿/, '').split(/\r\n|\r|\n/);
  for (let i = 0; i < lines.length && rows < MAX_NOTES; i++) {
    const line = lines[i];
    if (!line.trim()) continue;
    let cells;
    if (line.includes('\t')) cells = line.split('\t');
    else if (/^\s*"/.test(line)) cells = [...line.matchAll(/"((?:[^"]|"")*)"|([^,;]+)/g)].map((m) => (m[1] !== undefined ? m[1].replace(/""/g, '"') : m[2]));
    else { const k = line.search(/[,;]/); cells = k < 0 ? [line] : [line.slice(0, k), line.slice(k + 1)]; }
    const key = clean(cells[0], 40), txt = clean(cells.slice(1).join(' '));
    if (!key || !txt) { bad++; continue; }
    if (i === 0 && /^(keynote|key|code|number|no\.?|id)$/i.test(key) && /^(text|note|description|title|name|keynote)$/i.test(txt)) continue;   // a header row
    notes.set(key.toLowerCase(), txt);
    rows++;
  }
  return { notes, rows, bad };
}

export function buildLegend(entries, { notes = null, skip = null, max = MAX_LEGEND } = {}) {
  const seen = new Set(), list = [];
  for (const e of entries || []) {
    const key = clean(e.key, 80);
    if (!key || (skip && skip(e.kind, key))) continue;
    const id = (e.kind || '') + '|' + key.toLowerCase();
    if (seen.has(id)) continue;
    seen.add(id);
    const fromFile = notes && (notes.get(key.toLowerCase()) || notes.get(clean(e.code, 40).toLowerCase()));
    list.push({ kind: e.kind === 'classification' ? 'classification' : 'layer', key, text: clean(fromFile || e.text || key), count: Math.max(0, Math.round(Number(e.count) || 0)) });
  }
  list.sort((a, b) => ORDER[a.kind] - ORDER[b.kind] || a.key.localeCompare(b.key, undefined, { numeric: true }));
  return list.slice(0, max).map((e, i) => ({ n: i + 1, ...e }));
}

export const legendToText = (legend) => (legend || []).map((e) => e.n + '\t' + e.text).join('\n');

/** The person edited the lines: a line "n<TAB>text" (or "n text") changes entry n's text; a deleted line removes it; numbers stay as they were. */
export function legendFromText(text, legend) {
  const by = new Map((legend || []).map((e) => [e.n, e]));
  const out = [];
  for (const line of String(text ?? '').split(/\r\n|\r|\n/)) {
    const m = /^\s*(\d{1,3})[\t ]+(.*)$/.exec(line);
    const e = m && by.get(Number(m[1]));
    if (e && !out.some((o) => o.n === e.n)) out.push({ ...e, text: clean(m[2]) || e.key });
  }
  return out;
}

export function legendItems(legend, { x = 16, y = 60, size = 7, gap = 3, title = '' } = {}) {
  const items = [];
  let yy = y;
  if (title) { items.push({ t: 'text', s: clean(title, 60), x, y: yy, size: size + 1.5, align: 'left', bold: true }); yy -= size + gap + 2; }
  for (const e of legend || []) {
    items.push({ t: 'text', s: String(e.n), x, y: yy, size, align: 'left', bold: true });
    items.push({ t: 'text', s: e.text, x: x + 7, y: yy, size, align: 'left' });
    yy -= size + gap;
  }
  return items;
}
