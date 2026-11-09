/* SPDX-License-Identifier: Apache-2.0 */
/**
 * work-style.js — Settings › BimCraft › Working style (0.9 D8.12, session `bim-views-09`; owner 2026-10-30: "feels like a LAYOUT in
 * settings"). People coming from different BIM programs expect different behaviour, and neither is wrong: a preset sets the
 * defaults of D8.12-A…D, and each default can still be changed on its own, as the workspace layouts (Track WS) work. Names describe
 * the way of working, never a product (trademark rule). No DOM; the store is this browser's (localStorage `bimcraft.workstyle`),
 * like the workspace choice.
 *
 *   PRESETS   own     "Each view its own" (the default): a duplicated view is an own copy (its annotations stay its own); sheets
 *                     and the PDF print as the screen shows
 *             shared  "Shared annotations and pen tables": a duplicated view is linked (one set of annotations); printing goes
 *                     through a pen table
 *   DEFAULTS  dup    'own' | 'linked'          which Duplicate offers first (D8.12-A)
 *             print  'shown' | 'table'         how a model with no print style of its own prints (D8.12-B)
 *             count  'reported' | 'drawn'      schedules and takeoff count an element with "Report as" by its reported class
 *                                              (D8.12-C) — both presets count it as reported (the request); 'drawn' keeps the tool's
 *             start  'blank' | 'template'      what New model starts from: the plain start, or your default template (D8.12-D)
 *   readStyle(store?) → { preset: 'own' | 'shared' | 'custom', dup, print, count, start, template (default template id or '') }
 *   setPreset(name, store?) → style   (every default set to the preset's)
 *   setOne(key, value, store?) → style  (the preset becomes 'custom' when the values no longer match one)
 *   presetOf(values) → 'own' | 'shared' | 'custom'
 * Event: window 'bimcraft-workstyle' (detail = the style) after every change.
 */
export const KEY = 'bimcraft.workstyle';
export const PRESETS = Object.freeze({
  own: Object.freeze({ dup: 'own', print: 'shown', count: 'reported', start: 'blank' }),
  shared: Object.freeze({ dup: 'linked', print: 'table', count: 'reported', start: 'template' }),
});
export const CHOICES = Object.freeze({ dup: ['own', 'linked'], print: ['shown', 'table'], count: ['reported', 'drawn'], start: ['blank', 'template'] });
const memory = new Map();
const local = () => { try { return globalThis.localStorage || null; } catch (e) { return null; } };
const box = (store) => store || local() || { getItem: (k) => memory.get(k) ?? null, setItem: (k, v) => memory.set(k, String(v)) };

export function presetOf(v) {
  for (const [name, p] of Object.entries(PRESETS)) if (Object.keys(p).every((k) => v[k] === p[k])) return name;
  return 'custom';
}
export function readStyle(store) {
  let raw = null;
  try { raw = JSON.parse(box(store).getItem(KEY) || 'null'); } catch (e) { raw = null; }
  const base = PRESETS[raw?.preset] || PRESETS.own;
  const out = {};
  for (const [k, list] of Object.entries(CHOICES)) out[k] = list.includes(raw?.[k]) ? raw[k] : base[k];
  out.template = typeof raw?.template === 'string' ? raw.template.slice(0, 80) : '';
  out.preset = presetOf(out);
  return out;
}
function write(v, store) {
  const s = { ...v, preset: presetOf(v) };
  try { box(store).setItem(KEY, JSON.stringify(s)); } catch (e) { /* private window: this session only */ }
  try { globalThis.dispatchEvent?.(new CustomEvent('bimcraft-workstyle', { detail: s })); } catch (e) { /* Node */ }
  return s;
}
export function setPreset(name, store) {
  const p = PRESETS[name];
  if (!p) return readStyle(store);
  return write({ ...readStyle(store), ...p }, store);
}
export function setOne(key, value, store) {
  const cur = readStyle(store);
  if (key === 'template') return write({ ...cur, template: String(value || '').slice(0, 80) }, store);
  if (!CHOICES[key]?.includes(value)) return cur;
  return write({ ...cur, [key]: value }, store);
}
