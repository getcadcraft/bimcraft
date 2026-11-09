/* SPDX-License-Identifier: Apache-2.0 */
/**
 * plotstyle.js — plot style tables for the CadCraft drafting app (0.6 DC.14). No DOM: bin/test-cadcraft.mjs runs it in Node.
 *
 * A table is colour-dependent, as a CTB file is: each of the 255 standard colours (ACI) has a pen that says what an object
 * of that colour prints as.
 *   table = { name, description, pens: { [aci 1–255]: pen } }   only pens that differ from DEFAULT_PEN are kept
 *   pen   = { color: null | '#rrggbb' (null = the object's own colour), gray: bool (print the colour as its gray),
 *             screen: 0–100 (ink intensity; 100 = full), lw: null | mm (null = the object's own lineweight),
 *             lt: null | a linetype name (null = the object's own; 0.7), cap: null | 'butt' | 'square' | 'round' (line end),
 *             join: null | 'miter' | 'bevel' | 'round', fill: null | one of FILLS (what a solid fill prints as) }
 *   table also: lwList?: [mm…] (the lineweights it knows: a printed lineweight goes to the nearest), ltScale?: number (a factor on
 *             the dashes of linetypes that are not ISO ones; 1 = none)
 * Built-in tables (never stored, names reserved): 'colour' (as drawn), 'monochrome' (every colour black), 'grayscale'
 * (every colour as its gray). The drawing keeps its own tables and which one the model plots with in
 * doc.meta.plotStyles = { tables: [table…], model: name }, and each sheet's in layout.plotStyle (a name). A name a file
 * gives with ".ctb" (another program's page setup) is matched without it; a table the drawing does not have plots as drawn
 * and the dialog says so.
 *
 *   BUILTIN, LINEWEIGHTS, DEFAULT_PEN, MAX_TABLES
 *   builtinTable(name)          the built-in table of that name, or null
 *   tableNames(doc)             [{ name, builtin }] built-ins first, then the drawing's
 *   findTable(doc, name)        a table by name (built-in or the drawing's; ".ctb" and case ignored), or null
 *   styleNameFor(doc, layout)   the name the sheet (or the model, layout null) plots with ('' = none chosen)
 *   aciOf(hex)                  the pen a colour plots with: 7 for 'ink', exact for the standard colours, else the nearest
 *   applyPen(table, hex, lw)    → { color, lw } one stroke as printed ('ink' resolved to black)
 *   penOf(table, aci)           the pen with every key (DEFAULT_PEN filled in)
 *   setPens(table, acis, patch) → a new table with those pens changed (pens back at the default are dropped)
 *   cleanTable(obj)             → { ok, table } | { ok: false, error } (untrusted: a file or a drawing)
 *   cleanPlotStyles(obj)        → { tables, model, layouts } from a drawing file (untrusted), never throws
 *   exportTable(table)          → JSON text (format 'cadcraft-plotstyle' v1); readTableFile(text) → cleanTable result
 *   payloadStrings(doc)         → [[string]…] one per POINT of block CADCRAFT_PLOTSTYLES ("CCPLOT:<n>:<230 characters>"),
 *                                 or null when the drawing has nothing to keep; payloadFrom(ents) → cleanPlotStyles of it
 *   styleSheetName(name)        the name written into a DWG / DXF 2000 layout's page setup ("<name>.ctb")
 *   STYLE_BLOCK, isStyleBlock(name)
 */

import { aciHex, nearestAci } from './doc.js';

export const BUILTIN = Object.freeze(['colour', 'monochrome', 'grayscale']);
/** Lineweights a pen can set (mm), the standard list. */
export const LINEWEIGHTS = Object.freeze([0, 0.05, 0.09, 0.13, 0.15, 0.18, 0.2, 0.25, 0.3, 0.35, 0.4, 0.5, 0.53, 0.6, 0.7, 0.8, 0.9, 1, 1.06, 1.2, 1.4, 1.58, 2, 2.11]);
export const DEFAULT_PEN = Object.freeze({ color: null, gray: false, screen: 100, lw: null, lt: null, cap: null, join: null, fill: null });
export const CAPS = Object.freeze(['butt', 'square', 'round']);
export const JOINS = Object.freeze(['miter', 'bevel', 'round']);
/** What a solid fill can print as (the table editor's fill styles); each but 'solid' is hatch lines (plot.js, PATTERN_OF_FILL). */
export const FILLS = Object.freeze(['solid', 'horizontal', 'vertical', 'slant-right', 'slant-left', 'crosshatch', 'diamonds', 'dots']);
export const MAX_LW_LIST = 40;
export const MAX_TABLES = 50;
export const STYLE_BLOCK = 'CADCRAFT_PLOTSTYLES';
const FORMAT = 'cadcraft-plotstyle', PAYLOAD = 'cadcraft-plotstyles';
const NAME_RE = /^[^\u0000-\u001f<>:"/\\|?*]{1,64}$/;
const HEX_RE = /^#[0-9a-f]{6}$/i;

const bare = (name) => String(name ?? '').trim().replace(/\.ctb$/i, '');
const same = (a, b) => bare(a).toLowerCase() === bare(b).toLowerCase();
export const isStyleBlock = (name) => String(name || '').toUpperCase() === STYLE_BLOCK;

export function builtinTable(name) {
  const n = BUILTIN.find((b) => same(b, name));
  if (!n) return null;
  const all = (pen) => Object.fromEntries(Array.from({ length: 255 }, (_, i) => [i + 1, { ...pen }]));
  return { name: n, builtin: true, description: '', pens: n === 'monochrome' ? all({ color: '#000000' }) : n === 'grayscale' ? all({ gray: true }) : {} };
}

const ownTables = (doc) => (Array.isArray(doc?.meta?.plotStyles?.tables) ? doc.meta.plotStyles.tables : []);

export function tableNames(doc) {
  return [...BUILTIN.map((name) => ({ name, builtin: true })), ...ownTables(doc).map((tb) => ({ name: tb.name, builtin: false }))];
}

export function findTable(doc, name) {
  if (!bare(name)) return null;
  return builtinTable(name) || ownTables(doc).find((tb) => same(tb.name, name)) || null;
}

export function styleNameFor(doc, layout = null) {
  return String((layout ? layout.plotStyle : doc?.meta?.plotStyles?.model) || '');
}

// ---------------------------------------------------------------------------
// Colours → pens

let REV = null;
export function aciOf(hex) {
  if (!hex || hex === 'ink') return 7;
  if (!REV) { REV = new Map(); for (let i = 255; i >= 1; i--) { const h = aciHex(i); if (h !== 'ink') REV.set(h.toLowerCase(), i); } }
  const k = String(hex).toLowerCase();
  return REV.get(k) ?? (HEX_RE.test(k) ? nearestAci(k) : 7);
}

export function penOf(table, aci) {
  return { ...DEFAULT_PEN, ...(table?.pens?.[aci] || {}) };
}

const rgb = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
const hex = (c) => '#' + c.map((v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, '0')).join('');

export function applyPen(table, color, lw = -3) {
  const base = !color || color === 'ink' ? '#000000' : String(color).toLowerCase();
  if (!table) return { color: base, lw };
  const p = penOf(table, aciOf(color));
  let c = rgb(p.color && HEX_RE.test(p.color) ? p.color.toLowerCase() : base);
  if (p.gray) { const y = 0.299 * c[0] + 0.587 * c[1] + 0.114 * c[2]; c = [y, y, y]; }
  const s = Math.max(0, Math.min(100, Number.isFinite(p.screen) ? p.screen : 100)) / 100;
  if (s < 1) c = c.map((v) => 255 - (255 - v) * s);
  return { color: hex(c), lw: snapLw(table, p.lw !== null && p.lw >= 0 ? p.lw : lw), cap: p.cap, join: p.join };
}

/** A printed lineweight (mm; -3 = the plot's default pen) gone to the nearest of the table's own list, when it has one. */
export function snapLw(table, lw) {
  const l = table?.lwList;
  if (!Array.isArray(l) || !l.length || !(lw >= 0)) return lw;
  return l.reduce((best, w) => (Math.abs(w - lw) < Math.abs(best - lw) ? w : best), l[0]);
}

/** What else a pen says about a colour's objects: { lt, fill } (null = the object's own / solid). */
export function penStyleOf(table, color) {
  if (!table) return { lt: null, fill: null };
  const p = penOf(table, aciOf(color));
  return { lt: p.lt, fill: p.fill && p.fill !== 'solid' ? p.fill : null };
}

/** Is a linetype one of the ISO ones (ACAD_ISO…)? A table's ltScale does not touch those. */
export const isIsoLinetype = (name) => /^ACAD_ISO/i.test(String(name || ''));

export function setPens(table, acis, patch) {
  const pens = { ...(table.pens || {}) };
  for (const a of acis) {
    if (!(a >= 1 && a <= 255)) continue;
    const p = cleanPen({ ...penOf(table, a), ...patch });
    if (isDefault(p)) delete pens[a]; else pens[a] = p;
  }
  return { ...table, pens };
}

const isDefault = (p) => p.color === null && !p.gray && p.screen === 100 && p.lw === null && p.lt === null && p.cap === null && p.join === null && p.fill === null;

// ---------------------------------------------------------------------------
// Untrusted tables (a file, a drawing)

function cleanPen(p) {
  if (!p || typeof p !== 'object') return { ...DEFAULT_PEN };
  const color = typeof p.color === 'string' && HEX_RE.test(p.color) ? p.color.toLowerCase() : null;
  const screen = Number.isFinite(p.screen) ? Math.max(0, Math.min(100, Math.round(p.screen))) : 100;
  const lw = Number.isFinite(p.lw) && p.lw >= 0 && p.lw <= 2.11 ? Math.round(p.lw * 1000) / 1000 : null;
  const lt = typeof p.lt === 'string' && /^[^\u0000-\u001f]{1,64}$/.test(p.lt.trim()) ? p.lt.trim() : null;
  const cap = CAPS.includes(p.cap) ? p.cap : null, join = JOINS.includes(p.join) ? p.join : null, fill = FILLS.includes(p.fill) && p.fill !== 'solid' ? p.fill : null;
  return { color, gray: p.gray === true, screen, lw, lt, cap, join, fill };
}

export function cleanTable(obj) {
  if (!obj || typeof obj !== 'object' || Array.isArray(obj)) return { ok: false, error: 'shape' };
  const name = bare(obj.name);
  if (!NAME_RE.test(name)) return { ok: false, error: 'name' };
  if (BUILTIN.some((b) => same(b, name))) return { ok: false, error: 'reserved' };
  const pens = {};
  const src = obj.pens && typeof obj.pens === 'object' && !Array.isArray(obj.pens) ? obj.pens : {};
  for (const [k, v] of Object.entries(src)) {
    const a = Number(k);
    if (!Number.isInteger(a) || a < 1 || a > 255) continue;
    const p = cleanPen(v);
    if (!isDefault(p)) pens[a] = p;
  }
  const lwList = Array.isArray(obj.lwList) ? [...new Set(obj.lwList.filter((v) => Number.isFinite(v) && v >= 0 && v <= 2.11).map((v) => Math.round(v * 1000) / 1000))].sort((a, b) => a - b).slice(0, MAX_LW_LIST) : [];
  const ltScale = Number.isFinite(obj.ltScale) && obj.ltScale > 0 && obj.ltScale <= 100 && obj.ltScale !== 1 ? obj.ltScale : null;
  return { ok: true, table: { name, description: String(obj.description ?? '').replace(/[\u0000-\u001f]+/g, ' ').slice(0, 255), pens, ...(lwList.length ? { lwList } : {}), ...(ltScale ? { ltScale } : {}) } };
}

export function cleanPlotStyles(obj) {
  const out = { tables: [], model: '', layouts: {} };
  if (!obj || typeof obj !== 'object') return out;
  for (const t of Array.isArray(obj.tables) ? obj.tables.slice(0, MAX_TABLES) : []) {
    const r = cleanTable(t);
    if (r.ok && !out.tables.some((x) => same(x.name, r.table.name))) out.tables.push(r.table);
  }
  const nm = (v) => (typeof v === 'string' && NAME_RE.test(bare(v)) ? bare(v) : '');
  out.model = nm(obj.model);
  if (obj.layouts && typeof obj.layouts === 'object' && !Array.isArray(obj.layouts)) {
    for (const [k, v] of Object.entries(obj.layouts).slice(0, 1000)) if (typeof k === 'string' && k.length <= 255 && nm(v)) out.layouts[k] = nm(v);
  }
  return out;
}

// ---------------------------------------------------------------------------
// Files: our own table file, and the copy kept in a drawing

export function exportTable(table) {
  const r = cleanTable(table);
  if (!r.ok) throw new Error('plot style table: ' + r.error);   // i18n-ignore: for developers
  return JSON.stringify({ format: FORMAT, version: 1, ...r.table }, null, 1) + '\n';
}

export function readTableFile(text) {
  let o;
  try { o = JSON.parse(String(text).slice(0, 2_000_000)); } catch { return { ok: false, error: 'json' }; }
  if (!o || o.format !== FORMAT) return { ok: false, error: 'format' };
  if (o.version !== 1) return { ok: false, error: 'version' };
  return cleanTable(o);
}

export const styleSheetName = (name) => bare(name).slice(0, 64) + '.ctb';

export function payloadStrings(doc) {
  const ps = doc?.meta?.plotStyles || {};
  const layouts = {};
  for (const l of doc?.layouts || []) if (l.plotStyle) layouts[l.name] = String(l.plotStyle);
  const tables = ownTables(doc);
  if (!tables.length && !ps.model && !Object.keys(layouts).length) return null;
  const text = JSON.stringify({ format: PAYLOAD, version: 1, tables, model: ps.model || '', layouts });
  const points = [];
  for (let i = 0; i < text.length; i += 230) points.push(['CCPLOT:' + (points.length + 1) + ':' + text.slice(i, i + 230)]);
  return points;
}

/** The plot styles from block CADCRAFT_PLOTSTYLES's points (each `cc` = CADCRAFT xdata strings), checked; null if none. */
export function payloadFrom(ents) {
  const parts = [];
  for (const e of ents || []) {
    const m = /^CCPLOT:(\d{1,7}):(.*)$/s.exec(String(e?.cc?.[0] ?? ''));
    if (m) parts.push([+m[1], m[2]]);
  }
  if (!parts.length) return null;
  parts.sort((a, b) => a[0] - b[0]);
  try {
    const o = JSON.parse(parts.map((p) => p[1]).join(''));
    return o && o.format === PAYLOAD && o.version === 1 ? cleanPlotStyles(o) : null;
  } catch { return null; }
}
