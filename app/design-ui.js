/* SPDX-License-Identifier: Apache-2.0 */
/**
 * design-ui.js — the Furnish room (0.8 EG.60) and Room program (0.8 EG.58) sections, session bim_PART_2: two <details> under Permit package in
 * the left panel (ui.inc data-eg60, data-eg58). The cores are furnish-model.js / furnish.js and program-mass.js (DOM-free, tools/bimcraft-test/
 * furnish-test.mjs and program-mass-test.mjs); every change is one undo step through IfcEditor.modelChange.
 *
 *   mountFurnish(host) → { render() } | null          mountProgram(host) → { render(), options() } | null
 *   host = { root, editor(), status(text, isError), download(name, data, type), fileName(), afterEdit() }
 */
import { el } from './ui-util.js';
import { t } from './i18n.js';
import { snapshotModel } from './model-ops.js';
import { KINDS } from './furnish.js';
import { levelRooms, furnishPlan, furnishOp } from './furnish-model.js';
import { getDisplayUnits, localizeQuantities } from './model-units.js';   // GH.3-A: results in the picked unit
const Q = (s) => localizeQuantities(s, getDisplayUnits());
import { massingOptions, buildOption, civilMass, parseProgram } from './program-mass.js';

const sel = (attrs, opts, value) => { const s = el('select', { className: 'select-cc', ...attrs }, opts.map(([v, label]) => el('option', { value: String(v) }, label))); if (value !== undefined) s.value = String(value); return s; };
const label = (text, ctl) => el('label', { className: 'bc-4d-grouplabel' }, el('span', {}, text), ctl);
const num = (v) => { const n = Number(String(v).replace(',', '.')); return Number.isFinite(n) ? n : NaN; };

export function mountFurnish(host) {
  const box = host.root?.querySelector('[data-eg60]');
  if (!box) return null;
  const S = { level: '', room: '0', kind: '', plan: null };
  function render() {
    const ed = host.editor();
    if (!ed) { box.replaceChildren(el('p', { className: 'bc-muted' }, t('eg60.nomodel'))); return; }
    const levels = snapshotModel(ed).levels;
    if (!levels.find((l) => l.guid === S.level)) S.level = levels[0]?.guid || '';
    const rooms = S.level ? levelRooms(ed, S.level) : [];
    if (!rooms.find((r) => String(r.index) === S.room)) S.room = rooms[0] ? String(rooms[0].index) : '';
    const lv = sel({ 'data-eg60-level': '' }, levels.map((l) => [l.guid, l.name]), S.level);
    const rm = sel({ 'data-eg60-room': '' }, rooms.map((r) => [r.index, Q(t('eg60.room', { n: r.index + 1, area: Math.round(r.area / 1e4) / 100 }))]), S.room);
    const kd = sel({ 'data-eg60-kind': '' }, [['', t('eg60.kind.guess')], ...KINDS.map((k) => [k, t('eg60.kind.' + k)])], S.kind);
    lv.addEventListener('change', () => { S.level = lv.value; S.plan = null; render(); });
    rm.addEventListener('change', () => { S.room = rm.value; S.plan = null; render(); });
    kd.addEventListener('change', () => { S.kind = kd.value; S.plan = null; render(); });
    const rows = [el('p', { className: 'bc-muted' }, t('eg60.intro')), label(t('eg60.level'), lv), rooms.length ? label(t('eg60.roomlabel'), rm) : el('p', { className: 'bc-muted', 'data-eg60-none': '' }, t('eg60.norooms')), label(t('eg60.kind'), kd)];
    if (S.plan) {
      rows.push(el('p', { 'data-eg60-plan': '' }, t('eg60.plan', { n: S.plan.placements.length, kind: t('eg60.kind.' + S.plan.kind) }) + (S.plan.guessed ? ' ' + t('eg60.guessed') : '')));
      if (S.plan.skipped.length) rows.push(el('p', { className: 'bc-note' }, t('eg60.skipped', { list: S.plan.skipped.map((s) => t('fam.starter.' + s.family)).join(', ') })));
    }
    rows.push(el('div', { className: 'bc-find-row' },
      el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-eg60-preview': '', disabled: !rooms.length, onClick: () => { S.plan = furnishPlan(ed, { storey: S.level, room: Number(S.room), kind: S.kind || null }); render(); } }, t('eg60.preview')),
      el('button', { type: 'button', className: 'btn-plot btn-sm-cc', 'data-eg60-go': '', disabled: !rooms.length, onClick: () => go() }, t('eg60.go'))));
    box.replaceChildren(...rows);
  }
  function go() {
    const ed = host.editor();
    if (!ed) return;
    const plan = furnishPlan(ed, { storey: S.level, room: Number(S.room), kind: S.kind || null });
    if (plan.error || !plan.placements.length) { host.status(t('eg60.nothing'), true); S.plan = plan.error ? null : plan; render(); return; }
    try { ed.modelChange(furnishOp(S.level, plan.placements), { label: 'furnish', verb: t('eg60.verb') }); }
    catch (err) { host.status(err.key ? t(err.key, err.fill || {}) : String(err.message || err), true); return; }
    host.afterEdit();
    S.plan = plan;
    host.status(t('eg60.done', { n: plan.placements.length }));
    render();
  }
  window.addEventListener('bimcraft-units', () => { try { render(); } catch (e) { /* GH.3-A: the tab has nothing to show yet */ } });   // results follow the display unit
  return { render };
}

const SAMPLE = 'Office, 20, 25\nLobby, 1, 100, ground\nMeeting room, 2, 30';
export function mountProgram(host) {
  const box = host.root?.querySelector('[data-eg58]');
  if (!box) return null;
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem('bimcraft.program') || '{}') || {}; } catch (e) { saved = {}; }
  const S = { text: saved.text || SAMPLE, width: saved.width || '40', depth: saved.depth || '30', cap: saved.cap || '', eff: saved.eff || '80', result: null, pick: '' };
  const keep = () => { try { localStorage.setItem('bimcraft.program', JSON.stringify({ text: S.text, width: S.width, depth: S.depth, cap: S.cap, eff: S.eff })); } catch (e) { /* private window */ } };
  const compute = () => {
    const w = num(S.width), d = num(S.depth);
    if (!(w > 0 && d > 0)) { S.result = { options: [], notes: [t('eg58.badenv')] }; return; }
    S.result = massingOptions({ program: parseProgram(S.text), envelope: [[0, 0], [w * 1000, 0], [w * 1000, d * 1000], [0, d * 1000]], heightCap: num(S.cap) > 0 ? num(S.cap) * 1000 : 0, efficiency: num(S.eff) / 100 || undefined });
    if (!S.result.options.find((o) => o.key === S.pick)) S.pick = S.result.options[0]?.key || '';
  };
  function render() {
    const field = (k, text, ta = false) => { const i = el(ta ? 'textarea' : 'input', { className: 'bc-input', rows: 4, value: S[k], 'data-eg58-field': k, 'aria-label': text }); if (ta) i.textContent = S[k]; i.addEventListener('input', () => { S[k] = i.value; keep(); }); return label(text, i); };
    const r = S.result;
    const rows = [el('p', { className: 'bc-muted' }, t('eg58.intro')), field('text', t('eg58.program'), true), el('p', { className: 'bc-muted' }, t('eg58.format')),
      field('width', t('eg58.width')), field('depth', t('eg58.depth')), field('cap', t('eg58.cap')), field('eff', t('eg58.eff')),
      el('div', { className: 'bc-find-row' }, el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-eg58-find': '', onClick: () => { compute(); render(); } }, t('eg58.find')))];
    if (r) {
      if (r.totals) rows.push(el('p', { 'data-eg58-sum': '' }, Q(t('eg58.sum', { net: Math.round(r.totals.net), gross: Math.round(r.totals.gross), rooms: r.totals.rooms }))));
      if (r.options.length) {
        const radios = r.options.map((o) => { const inp = el('input', { type: 'radio', name: 'eg58-pick', value: o.key, 'data-eg58-option': o.key }); inp.checked = o.key === S.pick; inp.addEventListener('change', () => { S.pick = o.key; }); return el('li', {}, el('label', {}, inp, ' ' + o.name + ' — ' + Q(t('eg58.optrow', { foot: o.footprint_m2, gross: o.gross_m2, cov: Math.round(o.coverage * 100) })))); });
        rows.push(el('ul', { className: 'bc-checks-res', 'data-eg58-options': '' }, radios));
        rows.push(el('div', { className: 'bc-find-row' },
          el('button', { type: 'button', className: 'btn-plot btn-sm-cc', 'data-eg58-build': '', onClick: () => build() }, t('eg58.build')),
          el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-eg58-save': '', onClick: () => save() }, t('eg58.save'))));
      }
      for (const n of r.notes || []) rows.push(el('p', { className: 'bc-muted' }, n));
    }
    box.replaceChildren(...rows);
  }
  function build() {
    const ed = host.editor(), o = S.result?.options.find((x) => x.key === S.pick);
    if (!ed || !o) { host.status(t('eg58.nomodel'), true); return; }
    try { ed.modelChange(buildOption(o), { label: 'massing', verb: t('eg58.verb') }); }
    catch (err) { host.status(err.key ? t(err.key, err.fill || {}) : String(err.message || err), true); return; }
    host.afterEdit();
    host.status(t('eg58.done', { name: o.name }));
  }
  function save() {
    if (!S.result?.options.length) return;
    const body = { format: 'cadcraft-massing-options', version: 1, units: 'mm', program: parseProgram(S.text), masses: S.result.options.map((o) => ({ key: o.key, ...civilMass(o, { unitPerMm: 1 }) })) };
    host.download((host.fileName() || 'model').replace(/\.ifc$/i, '') + '-massing-options.json', JSON.stringify(body, null, 1), 'application/json');
  }
  compute();
  render();
  window.addEventListener('bimcraft-units', () => { try { render(); } catch (e) { /* GH.3-A: the tab has nothing to show yet */ } });   // results follow the display unit
  return { render, options: () => S.result?.options || [], state: S };
}
