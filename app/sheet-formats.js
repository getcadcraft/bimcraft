/* SPDX-License-Identifier: Apache-2.0 */
/**
 * sheet-formats.js — sheet sizes and title blocks as library data (0.9 SU.1123, session `bim-views-09`). No DOM:
 * node bin/test-bimcraft.mjs --views09 --only s.
 *
 * A format is { name, w, h (mm, landscape), margin (mm) }; a title block is { name, place: 'bottom' | 'right', size (mm: the strip's
 * height, or the column's width), fields: [{ key, label, size: 'large' | 'normal' }] } — the fields a sheet fills in (number, title,
 * project, date are always there; the others are words the person types per sheet: drawn by, checked, revision, client, …).
 * Built-ins: every paper BimCraft had (res-sheets.js PAPERS) and A2, A0, ARCH C, ARCH E; the title blocks 'strip' (the bottom
 * strip BimCraft always drew) and 'side' (a column on the right with the usual fields). The model's own are kept in the project's
 * CadCraft_SheetFormats (one IfcText per item, "format-<n>" / "titleblock-<n>", JSON), so a template carries them; a library file
 * (JSON { format: 'cadcraft-sheet-formats', version: 1, formats, titleBlocks }) moves them between models and people.
 *   BUILTIN_FORMATS, BUILTIN_TITLEBLOCKS
 *   readFormats(w) → { formats: [{ id, name, w, h, margin, builtin }], titleBlocks: [{ id, name, place, size, fields, builtin }] }
 *   saveFormat({ kind: 'format' | 'titleblock', id?, … }) → op ({ id })   deleteFormat(id) → op
 *   libraryText(lib) → JSON text   readLibrary(text) → { ok, formats, titleBlocks } | { ok: false, error }   importLibrary(lib) → op
 *   registerPapers(formats, PAPERS) → the model's formats as papers 'fmt:<id>' in res-sheets.js PAPERS (sheets keep paper keys)
 *   titleBlockItems(tb, { PW, PH, number, title, project, date, fields }) → { items, room: [x0, y0, x1, y1] }   (sheet mm, y up)
 *   Errors model.err.sf.name, model.err.sf.svg (not a usable SVG), model.err.sf.size, model.err.sf.gone, model.err.sf.fields
 */
import { op } from './model-ops.js';
import { ids } from './ifc-util.js';
import { parseTitleSvg } from './title-svg.js';

export const FORMATS_PSET = 'CadCraft_SheetFormats';
const LIB = 'cadcraft-sheet-formats';
export const BUILTIN_FORMATS = Object.freeze([
  ['letter', 279.4, 215.9], ['tabloid', 431.8, 279.4], ['archc', 609.6, 457.2], ['archd', 914.4, 609.6], ['arche', 1219.2, 914.4],
  ['a4', 297, 210], ['a3', 420, 297], ['a2', 594, 420], ['a1', 841, 594], ['a0', 1189, 841],
].map(([id, w, h]) => Object.freeze({ id, name: id, w, h, margin: 10, builtin: true })));
const STD_FIELDS = [{ key: 'project', label: '', size: 'normal' }, { key: 'client', label: '', size: 'normal' }, { key: 'drawn', label: '', size: 'normal' }, { key: 'checked', label: '', size: 'normal' }, { key: 'scale', label: '', size: 'normal' }, { key: 'date', label: '', size: 'normal' }, { key: 'revision', label: '', size: 'normal' }];
export const BUILTIN_TITLEBLOCKS = Object.freeze([
  Object.freeze({ id: 'strip', name: 'strip', place: 'bottom', size: 18, fields: [], builtin: true }),
  Object.freeze({ id: 'side', name: 'side', place: 'right', size: 70, fields: STD_FIELDS, builtin: true }),
]);
const refuse = (key) => { throw Object.assign(new Error(key), { key }); };
const project = (w) => ids(w.api, w.mid, 'IFCPROJECT')[0];
const clean = (s, n = 60) => String(s ?? '').replace(/[\u0000-\u001f\u007f]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, n);
const num = (v) => (Number.isFinite(Number(v)) ? Number(v) : NaN);
const json = (s) => { try { const v = JSON.parse(s || 'null'); return v && typeof v === 'object' ? v : null; } catch (e) { return null; } };

export function cleanFormat(o) {
  const name = clean(o?.name), w = num(o?.w), h = num(o?.h), margin = num(o?.margin ?? 10);
  if (!name) return { ok: false, error: 'model.err.sf.name' };
  if (!(w >= 50 && w <= 5000 && h >= 50 && h <= 5000 && margin >= 0 && margin <= Math.min(w, h) / 4)) return { ok: false, error: 'model.err.sf.size' };
  return { ok: true, value: { name, w: Math.max(w, h), h: Math.min(w, h), margin } };
}
/** 0.9 D8.17: a title block of the person's own — an SVG (imported, or drawn in the title-block designer): place 'svg', its words {{field}} filled per sheet. */
function cleanSvgBlock(o, name) {
  const svg = String(o?.svg ?? '').slice(0, 400_000), p = parseTitleSvg(svg);
  if (!p.ok) return { ok: false, error: 'model.err.sf.svg' };
  return { ok: true, value: { name, place: 'svg', size: 0, fields: p.fields, svg } };
}
export function cleanTitleBlock(o) {
  if (o?.place === 'svg') { const nm = clean(o?.name); return nm ? cleanSvgBlock(o, nm) : { ok: false, error: 'model.err.sf.name' }; }
  const name = clean(o?.name), place = o?.place === 'right' ? 'right' : 'bottom', size = num(o?.size ?? (place === 'right' ? 70 : 18));
  if (!name) return { ok: false, error: 'model.err.sf.name' };
  if (!(size >= 10 && size <= 300)) return { ok: false, error: 'model.err.sf.size' };
  const seen = new Set(), fields = [];
  for (const f of Array.isArray(o?.fields) ? o.fields.slice(0, 24) : []) {
    const key = clean(f?.key || f?.label, 30).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    if (!key || seen.has(key) || ['number', 'title'].includes(key)) continue;
    seen.add(key);
    fields.push({ key, label: clean(f?.label, 40), size: f?.size === 'large' ? 'large' : 'normal' });
  }
  return { ok: true, value: { name, place, size, fields } };
}
export function readFormats(w) {
  const pj = project(w), ps = pj === undefined ? null : w.readPset(pj, FORMATS_PSET), formats = [...BUILTIN_FORMATS], titleBlocks = [...BUILTIN_TITLEBLOCKS];
  for (const [id, v] of Object.entries(ps || {})) {
    const o = json(v);
    if (!o) continue;
    if (/^format-\d+$/.test(id)) { const r = cleanFormat(o); if (r.ok) formats.push({ id, ...r.value, builtin: false }); }
    else if (/^titleblock-\d+$/.test(id)) { const r = cleanTitleBlock(o); if (r.ok) titleBlocks.push({ id, ...r.value, builtin: false }); }
  }
  return { formats, titleBlocks };
}
export const paperKey = (f) => (f.builtin ? f.id : 'fmt:' + f.id);
/** The model's own formats into a paper table (res-sheets.js PAPERS) as 'fmt:<id>'; the built-ins are there already. */
export function registerPapers(formats, PAPERS) {
  for (const k of Object.keys(PAPERS)) if (k.startsWith('fmt:')) delete PAPERS[k];
  for (const f of formats) if (!f.builtin) { PAPERS[paperKey(f)] = [f.w, f.h]; PAPERS[paperKey(f) + ':p'] = [f.h, f.w]; }   // 0.9 D8.14: and portrait
}
function nextId(w, prefix) {
  const pj = project(w), ps = w.readPset(pj, FORMATS_PSET) || {};
  let n = 1; while (ps[prefix + n]) n++;
  return prefix + n;
}
export function saveFormat(spec) {
  const S = JSON.parse(JSON.stringify(spec || {}));
  let fixed = S.id || null;
  return op((w) => {
    const kind = S.kind === 'titleblock' ? 'titleblock' : 'format';
    const r = kind === 'format' ? cleanFormat(S) : cleanTitleBlock(S);
    if (!r.ok) refuse(r.error);
    const have = readFormats(w)[kind === 'format' ? 'formats' : 'titleBlocks'];
    if (fixed && !have.some((x) => x.id === fixed && !x.builtin)) refuse('model.err.sf.gone');
    if (have.some((x) => x.name === r.value.name && x.id !== fixed && !x.builtin)) refuse('model.err.sf.name');
    if (!fixed) fixed = nextId(w, kind + '-');
    w.upsertPset(project(w), FORMATS_PSET, [[fixed, 'IFCTEXT', JSON.stringify(r.value)]]);
    return { id: project(w), ids: [], format: fixed };
  });
}
export function deleteFormat(id) {
  return op((w) => {
    const { formats, titleBlocks } = readFormats(w);
    if (![...formats, ...titleBlocks].some((x) => x.id === id && !x.builtin)) refuse('model.err.sf.gone');
    w.upsertPset(project(w), FORMATS_PSET, [[id, 'IFCTEXT', '']]);
    return { id: null, ids: [] };
  });
}
export function libraryText({ formats = [], titleBlocks = [] }) {
  const strip = ({ id, builtin, ...rest }) => { void id; void builtin; return rest; };
  return JSON.stringify({ format: LIB, version: 1, formats: formats.filter((f) => !f.builtin).map(strip), titleBlocks: titleBlocks.filter((f) => !f.builtin).map(strip) }, null, 1) + '\n';
}
export function readLibrary(text) {
  const o = json(String(text || '').slice(0, 1_000_000));
  if (!o || o.format !== LIB) return { ok: false, error: 'format' };
  if (o.version !== 1) return { ok: false, error: 'version' };
  const formats = (Array.isArray(o.formats) ? o.formats : []).slice(0, 200).map(cleanFormat).filter((r) => r.ok).map((r) => r.value);
  const titleBlocks = (Array.isArray(o.titleBlocks) ? o.titleBlocks : []).slice(0, 200).map(cleanTitleBlock).filter((r) => r.ok).map((r) => r.value);
  return { ok: true, formats, titleBlocks };
}
/** Everything in a library file into the model (one step): an item named as one the model has replaces it. */
export function importLibrary(lib) {
  const L = JSON.parse(JSON.stringify(lib));
  return op((w) => {
    let n = 0;
    for (const [kind, list] of [['format', L.formats || []], ['titleblock', L.titleBlocks || []]]) for (const v of list) {
      const r = kind === 'format' ? cleanFormat(v) : cleanTitleBlock(v);
      if (!r.ok) continue;
      const have = readFormats(w)[kind === 'format' ? 'formats' : 'titleBlocks'].find((x) => !x.builtin && x.name === r.value.name);
      w.upsertPset(project(w), FORMATS_PSET, [[have?.id || nextId(w, kind + '-'), 'IFCTEXT', JSON.stringify(r.value)]]);
      n++;
    }
    return { id: project(w), ids: [], imported: n };
  });
}

export { titleBlockItems } from './title-block.js';
