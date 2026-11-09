/* SPDX-License-Identifier: Apache-2.0 */
/**
 * pens.js — a view's pen and line overrides (0.8 SU.1055, session bim-08). DOM-free; bin/test-bimcraft.mjs --pens.
 * A view here is a level's plan. An override is { id, scope, weight, dash, color }:
 *   scope  { by: 'category', value: 'wall' | 'door' | 'window' }   every element of that category
 *          { by: 'type', value: '<typeKey>' }                      every element made from that wall / door / window type
 *          { by: 'element', value: '<GlobalId>' }                  one element
 *   weight  pen width in px (0.5 – 8), dash 'solid' | 'dash' | 'dot', color a page token ('--ink', '--layer-red', …) or ''
 * More specific beats less: element, then type, then category; the last one added wins within a rule.
 *
 *   penFor(overrides, item) → { w, dash, color } | null     item = { kind: 'wall'|'door'|'window'|'drafting'|'dimension', cls?, typeKey, guid }
 *
 * 0.9 D8.12-B (session bim-views-09): pens are kept in the IFC with the view, and cover every category.
 *   scope.by 'category' value: 'wall' | 'door' | 'window' | 'drafting' | 'dimension' | an IFC class from PEN_CLASSES (cut elements:
 *            slabs, roofs, columns, stairs, furniture, …; a class matches its subtypes' names that start with it, IfcSlab → IfcSlabStandardCase)
 *   In the file: the project's CadCraft_ViewPens, one IfcText per view, named by its key ('plan:<level GlobalId>', 'rcp:…',
 *   'callout:<id>'; a duplicated view's own copy has its own): JSON { format: 'cadcraft-viewpens', version: 1, pens: [override…] }.
 *   The old browser-only store (localStorage bimcraft.pens, by level GlobalId) is read only to offer moving it into the file.
 *   readViewPens(w) → Map(view key → [override…])     setViewPens(key, list) → op (one undo step; [] removes the view's entry)
 *   copyViewPensIn(w, from, to) → n (inside another op: view-copies.js)    penHex(token) → '#rrggbb' as printed (paper theme)
 */
import { op } from './model-ops.js';
import { ids } from './ifc-util.js';

export const WEIGHTS = [0.5, 1, 1.75, 2.5, 4, 6];
export const DASHES = ['solid', 'dash', 'dot'];
export const PEN_CLASSES = ['IfcSlab', 'IfcRoof', 'IfcCovering', 'IfcColumn', 'IfcBeam', 'IfcMember', 'IfcPlate', 'IfcStair', 'IfcRamp', 'IfcRailing', 'IfcCurtainWall',
  'IfcFurniture', 'IfcFurnishingElement', 'IfcFlowTerminal', 'IfcLightFixture', 'IfcSanitaryTerminal', 'IfcPipeSegment', 'IfcDuctSegment', 'IfcBuildingElementProxy', 'IfcSpace'];
export const PEN_CATEGORIES = ['wall', 'door', 'window', ...PEN_CLASSES, 'drafting', 'dimension'];
export const VIEWPENS_PSET = 'CadCraft_ViewPens';
export const COLORS = ['', '--ink', '--ink-2', '--layer-red', '--layer-blue', '--layer-orange', '--layer-magenta', '--layer-ochre', '--layer-green', '--layer-violet', '--layer-cyan'];
const RANK = { element: 3, type: 2, category: 1 };

/** An override as stored, made safe (it comes from localStorage): unknown scope or colour dropped, weight clamped. */
export function cleanOverride(o) {
  if (!o || typeof o !== 'object' || !o.scope || !RANK[o.scope.by] || typeof o.scope.value !== 'string' || !o.scope.value) return null;
  if (o.scope.by === 'category' && !PEN_CATEGORIES.includes(o.scope.value)) return null;
  const w = Number(o.weight) > 0 ? Math.max(0.5, Math.min(8, Number(o.weight))) : null;
  const dash = DASHES.includes(o.dash) ? o.dash : 'solid';
  const color = COLORS.includes(o.color) ? o.color : '';
  if (!w && dash === 'solid' && !color) return null;
  return { id: String(o.id || ''), scope: { by: o.scope.by, value: o.scope.value.slice(0, 80) }, weight: w, dash, color };
}

export function penFor(overrides, item) {
  let best = null, rank = 0;
  for (const o of overrides || []) {
    const r = RANK[o.scope.by];
    const hit = (o.scope.by === 'category' && (o.scope.value === item.kind || (item.cls && o.scope.value.startsWith('Ifc') && String(item.cls).toLowerCase().startsWith(o.scope.value.toLowerCase())))) || (o.scope.by === 'type' && o.scope.value === item.typeKey) || (o.scope.by === 'element' && o.scope.value === item.guid);
    if (hit && r >= rank) { best = o; rank = r; }
  }
  return best ? { w: best.weight || 0, dash: best.dash, color: best.color } : null;
}

/**
 * 0.8 SU.1055 round 5: the pens' colours in the 3D view. all = { <level GlobalId>: [override…] } (the Pens panel's store), D = the model's data
 * ({ levels: [{ id, guid }], walls: [{ id, guid, storey, typeKey }], openings: [{ id, guid, storey, kind, typeKey }] }), key(id) → the viewer key.
 * → Map(viewer key → colour token). Only the colour counts in 3D (a weight or a dash is a line's; the 3D view draws surfaces), and an element with no colour pen is left alone.
 */
export function penColors(all, D, key = (id) => id) {
  const out = new Map(), guidOf = new Map((D?.levels || []).map((l) => [l.id, l.guid])), lists = new Map();
  const listFor = (storey) => {
    const g = guidOf.get(storey);
    if (!lists.has(g)) lists.set(g, ((all || {})[g] || []).map(cleanOverride).filter(Boolean));
    return lists.get(g);
  };
  for (const w of D?.walls || []) { const p = penFor(listFor(w.storey), { kind: 'wall', typeKey: w.typeKey, guid: w.guid }); if (p?.color) out.set(key(w.id), p.color); }
  for (const o of D?.openings || []) { const p = penFor(listFor(o.storey), { kind: o.kind === 'window' ? 'window' : 'door', typeKey: o.typeKey, guid: o.guid }); if (p?.color) out.set(key(o.id), p.color); }
  return out;
}

// ------------------------------------------------------------------------------------------- 0.9 D8.12-B: in the file
/** A pen colour token as printed (pen-colors.js). */
export { penHex } from './pen-colors.js';
const VKEY = /^(plan|rcp):[0-9A-Za-z_$]{22}$|^callout:callout-\d+$/;
export const isPenViewKey = (k) => VKEY.test(String(k || ''));
const projectOf = (w) => ids(w.api, w.mid, 'IFCPROJECT')[0];
export function readViewPens(w) {
  const out = new Map(), pj = projectOf(w), ps = pj === undefined ? null : w.readPset(pj, VIEWPENS_PSET);
  for (const [k, v] of Object.entries(ps || {})) {
    if (!isPenViewKey(k) || !v) continue;
    let o = null;
    try { o = JSON.parse(v); } catch (e) { o = null; }
    if (!o || o.format !== 'cadcraft-viewpens' || !Array.isArray(o.pens)) continue;
    const list = o.pens.slice(0, 500).map(cleanOverride).filter(Boolean);
    if (list.length) out.set(k, list);
  }
  return out;
}
const penText = (list) => JSON.stringify({ format: 'cadcraft-viewpens', version: 1, pens: list.map((o) => ({ id: o.id, scope: o.scope, weight: o.weight, dash: o.dash, color: o.color })) });
export function setViewPens(key, list) {
  const L = (list || []).map(cleanOverride).filter(Boolean);
  return op((w) => {
    if (!isPenViewKey(key)) throw Object.assign(new Error('model.err.pens.view'), { key: 'model.err.pens.view' });
    const pj = projectOf(w);
    w.upsertPset(pj, VIEWPENS_PSET, [[key, 'IFCTEXT', L.length ? penText(L) : '']]);
    return { id: pj, ids: [] };
  });
}
export function copyViewPensIn(w, from, to) {
  const list = readViewPens(w).get(from);
  if (!list?.length || !isPenViewKey(to)) return 0;
  w.upsertPset(projectOf(w), VIEWPENS_PSET, [[to, 'IFCTEXT', penText(list)]]);
  return list.length;
}
