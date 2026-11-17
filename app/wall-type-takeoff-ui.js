/* SPDX-License-Identifier: Apache-2.0 */
/**
 * wall-type-takeoff-ui.js — the "Takeoff data" block of the wall type editor (booklet row BK.40, session bk-quantities-10):
 * the unit the wall is built of (name and size), its mortar, and a rate. Entered once on the type; wall-assemblies.js
 * validateAssembly checks it (quantities/typedata.js cleanTypeData) and the type's record carries it in the file. A thin
 * adapter: the rules and the limits are in the shared module.
 *
 *   takeoffFields(recipe, { t, units }) → element. It keeps `recipe.takeoff` up to date as the person types (lengths in mm;
 *   a text that is not a length becomes NaN, which the check refuses with a plain message rather than dropping it).
 */
import { el } from './ui-util.js';
import { fmtLen, parseLen } from './model-units.js';
import { ALL_BASES, BASIS_LABEL } from './quantities/typedata.js';

export function takeoffFields(recipe, { t, units }) {
  const d = recipe.takeoff || {};
  const U = units();
  const len = (v) => (v > 0 ? fmtLen(v, U) : '');
  const f = {
    unitName: d.unit?.name || '', length: len(d.unit?.length), height: len(d.unit?.height), width: len(d.unit?.width),
    mortarName: d.mortar?.name || '', joint: len(d.mortar?.joint),
    waste: d.unit?.waste !== undefined ? String(d.unit.waste) : '', extra: d.mortar?.extra > 0 ? String(d.mortar.extra) : '',   // 0.10 BK.42: percentages
    amount: d.rate ? String(d.rate.amount) : '', currency: d.rate?.currency || '', basis: d.rate?.basis || 'm2',
  };
  // a size the person did not touch keeps the number the type holds (the text shown is rounded for display)
  const held = { length: d.unit?.length, height: d.unit?.height, width: d.unit?.width, joint: d.mortar?.joint }, typed = new Set();
  const L = (k) => { if (!typed.has(k)) return held[k]; const x = f[k].trim(); return x === '' ? undefined : parseLen(x, U); };
  const sync = () => {
    const o = {};
    const pct = (x) => (x.trim() === '' ? undefined : Number(x.replace(',', '.').replace('%', '')));   // a text that is not a number becomes NaN: refused, never dropped
    if (f.unitName.trim() || f.length.trim() || f.height.trim() || f.width.trim() || f.waste.trim()) o.unit = { name: f.unitName, length: L('length'), height: L('height'), width: L('width'), waste: pct(f.waste) };
    if (f.mortarName.trim() || f.joint.trim() || f.extra.trim()) o.mortar = { name: f.mortarName, joint: L('joint'), extra: pct(f.extra) };
    if (f.amount.trim() || f.currency.trim()) o.rate = { amount: f.amount.trim() === '' ? undefined : Number(f.amount.replace(',', '.')), currency: f.currency, basis: f.basis };
    if (Object.keys(o).length) recipe.takeoff = o; else delete recipe.takeoff;
  };
  const input = (key, label, props = {}) => {
    const i = el('input', { className: 'bc-input', value: f[key], 'aria-label': label, 'data-takeoff': key, ...props });
    i.addEventListener('input', () => { f[key] = i.value; typed.add(key); sync(); });
    return el('label', { className: 'bc-dlg-field' }, label, i);
  };
  const basis = el('select', { className: 'bc-mb-select', 'aria-label': t('takeoff.basis'), 'data-takeoff': 'basis' }, ...ALL_BASES.map((b) => el('option', { value: b, selected: b === f.basis }, t('takeoff.basis.' + b, { unit: BASIS_LABEL[b] }))));
  basis.addEventListener('change', () => { f.basis = basis.value; sync(); });
  // 0.10 BK.42: which layers are built of this unit (a leaf each). The list follows the layers as they are now (drawn again when
  // the pointer or the focus comes to this block: layers are added and removed above it).
  const leaves = el('div', { 'data-takeoff-leaves': '', style: 'margin:4px 0 8px' });   // i18n-ignore: a style
  const drawLeaves = () => {
    const rows = (recipe.layers || []).map((l, i) => ({ l, i })).filter(({ l }) => l.kind !== 'cavity' && l.t > 0);
    leaves.replaceChildren(el('div', { className: 'bc-muted' }, t('takeoff.leaves')), ...rows.map(({ l, i }) => {
      const box = el('input', { type: 'checkbox', checked: l.masonry === true, 'data-takeoff-leaf': String(i) });
      box.addEventListener('change', () => { if (box.checked) l.masonry = true; else delete l.masonry; });
      return el('label', { style: 'display:block' }, box, ' ' + (i + 1) + '. ' + l.mat + ', ' + fmtLen(l.t, U));
    }), el('div', { className: 'bc-muted' }, t('takeoff.leaves.none')));
  };
  const grid = (...kids) => el('div', { style: 'display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:0 12px' }, ...kids);
  const fs = el('fieldset', { 'data-assembly-takeoff': '', style: 'margin:12px 0;padding:8px 12px;border:1px solid rgba(128,128,128,.4)' },
    el('legend', { style: 'float:none;width:auto;font-size:inherit;font-weight:600;padding:0 6px;margin:0' }, t('takeoff.title')),
    el('p', { className: 'bc-muted' }, t('takeoff.lede')),
    grid(input('unitName', t('takeoff.unit'), { maxlength: 100 }), input('length', t('takeoff.unit_length'), { size: 9 }), input('height', t('takeoff.unit_height'), { size: 9 }), input('width', t('takeoff.unit_width'), { size: 9 }), input('waste', t('takeoff.waste'), { size: 6, inputmode: 'decimal', 'data-bs-toggle': 'tooltip', title: t('takeoff.waste.tip') })),
    grid(input('mortarName', t('takeoff.mortar'), { maxlength: 100 }), input('joint', t('takeoff.joint'), { size: 9 }), input('extra', t('takeoff.extra'), { size: 6, inputmode: 'decimal', 'data-bs-toggle': 'tooltip', title: t('takeoff.extra.tip') })),
    leaves,
    grid(input('amount', t('takeoff.rate'), { inputmode: 'decimal', size: 12 }), input('currency', t('takeoff.currency'), { maxlength: 3, size: 4, placeholder: 'USD', style: 'text-transform:uppercase' }), el('label', { className: 'bc-dlg-field' }, t('takeoff.basis'), basis)),
    el('p', { className: 'bc-muted' }, t('takeoff.scope')));
  drawLeaves();
  for (const ev of ['pointerenter', 'focusin']) fs.addEventListener(ev, (e) => { if (!leaves.contains(e.target)) drawLeaves(); });
  return fs;
}
