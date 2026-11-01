/* SPDX-License-Identifier: Apache-2.0 */
/**
 * phases-ui.js — BimCraft's Phases section (0.8 EG.59, session bim_PART_2): a <details> under Tags in the left panel (ui.inc).
 * The core is phases.js (DOM-free, tools/bimcraft-test/phases-test.mjs); every change is one undo step through IfcEditor.modelChange.
 *
 *   mountPhases(host) → { changed(), view(mode), state } | null without the box
 *   host = { root, W, editor(), model(), selection() → keys, status(text, isError), download(name, data, type), fileName(),
 *            afterEdit(), applyView({ show, ghost } | null) → shows only `show` solid and `ghost` see-through (null = show all) }
 *
 * Set the selection existing / demolish / new (doors and windows follow their wall), clear it, see the counts, show a phase view
 * (everything, the result, what comes out, the building as surveyed) and save the demolition schedule as CSV.
 */
import { el } from './ui-util.js';
import { t } from './i18n.js';
import { KEY_SPAN } from './ifc-model.js';
import { propertyIndex } from './ifc-props.js';
import { tableCsv } from './ifc-qto.js';
import { ModelWriter } from './model-write.js';
import { PHASES, phaseOp, phaseGuids, summary, phaseView, demolitionSchedule } from './phases.js';

const VIEWS = ['all', 'result', 'demo', 'existing'];

export function mountPhases(host) {
  const box = host.root?.querySelector('[data-eg59]');
  if (!box) return null;
  const S = { version: 0, ixAt: -1, ix: null, view: 'all', mapAt: -1, map: null };
  const ed = () => host.editor();
  function index() {
    const e = ed(), m = host.model();
    if (!e || !m) return null;
    if (S.ixAt !== S.version || S.ix?.model !== m) { S.ix = { model: m, ix: propertyIndex(host.W, e.api, m.modelID, m) }; S.ixAt = S.version; }
    return S.ix.ix;
  }
  /** guid → 'existing' | 'demolish' | 'new' for the plan (read from the model once per change). */
  function phaseMap() {
    const e = ed(), m = host.model();
    if (!e || !m) return new Map();
    if (S.mapAt !== S.version || S.map?.model !== m) {
      const map = new Map();
      try { const g = phaseGuids(new ModelWriter(e.W, e.api, e.mid)); for (const p of PHASES) for (const id of g[p]) map.set(id, p); } catch (err) { /* no phases readable */ }
      S.map = { model: m, map }; S.mapAt = S.version;
    }
    return S.map.map;
  }
  function selectedGuids() {
    const e = ed(), m = host.model();
    if (!e || !m) return [];
    const kb = m.keyBase || 0, out = [];
    for (const k of host.selection()) {
      if (k < kb || k >= kb + KEY_SPAN) continue;
      try { const l = e.api.GetLine(e.mid, k - kb, false); const g = l?.GlobalId?.value ?? l?.GlobalId; if (g) out.push(String(g)); } catch (err) { /* not a line */ }
    }
    return out;
  }
  function set(phase) {
    const e = ed();
    if (!e) return;
    const guids = selectedGuids();
    if (!guids.length) { host.status(t('eg59.need.pick'), true); return; }
    let r;
    try { r = e.modelChange(phaseOp(guids, phase), { label: phase || 'clear', verb: t('eg59.verb') }); }
    catch (err) { host.status(err.key ? t(err.key, err.fill || {}) : String(err.message || err), true); return; }
    S.version++;
    host.afterEdit();
    host.status(t(phase ? 'eg59.set' : 'eg59.cleared', { n: r.counts.elements + r.counts.hosted, phase: phase ? t('eg59.phase.' + phase) : '' }));
    render();
  }
  function view(mode) {
    S.view = VIEWS.includes(mode) ? mode : 'all';
    const ix = index();
    host.applyView(ix && S.view !== 'all' ? phaseView(ix, S.view) : null);
    render();
  }
  function csv() {
    const ix = index();
    if (!ix) return;
    const s = demolitionSchedule(ix);
    const head = s.columns.map((c) => t('color.field.' + c));
    host.download((host.fileName() || 'model').replace(/\.ifc$/i, '') + '-demolition.csv', tableCsv(head, s.rows.map((r) => r.values)), 'text/csv');
  }
  function render() {
    const ix = index();
    if (!ix) { box.replaceChildren(el('p', { className: 'bc-muted' }, t('eg59.nomodel'))); return; }
    const s = summary(ix);
    const btn = (label, phase, cls = 'btn-line btn-sm-cc') => el('button', { type: 'button', className: cls, 'data-eg59-set': String(phase), onClick: () => set(phase) }, label);
    box.replaceChildren(
      el('p', { className: 'bc-muted' }, t('eg59.intro')),
      el('p', { 'data-eg59-sum': '' }, t('eg59.sum', { existing: s.existing, demolish: s.demolish, new: s.new, unassigned: s.unassigned })),
      el('div', { className: 'bc-find-row' }, ...PHASES.map((p) => btn(t('eg59.set.' + p), p)), btn(t('eg59.clear'), null)),
      el('div', { className: 'bc-find-row' }, el('label', { className: 'bc-4d-grouplabel' }, el('span', {}, t('eg59.view')),
        (() => { const sel = el('select', { className: 'select-cc', 'data-eg59-view': '' }, VIEWS.map((v) => el('option', { value: v }, t('eg59.view.' + v)))); sel.value = S.view; sel.addEventListener('change', () => view(sel.value)); return sel; })())),
      el('div', { className: 'bc-find-row' }, el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-eg59-csv': '', disabled: !s.demolish, onClick: csv }, t('eg59.csv'))));
  }
  /** The model changed (edit, undo, redo, another file): read again; a phase view is applied again. */
  function changed() {
    S.version++;
    if (S.view !== 'all') view(S.view); else render();
  }
  render();
  return { changed, view, render, phaseMap, state: S };
}

/** The plan view (and so the printed plan) draws each wall in its phase's pen once any element has a phase (0.8 EG.59). */
export function mountPhasePlan(modelUi, phasesUi) {
  if (!modelUi || !phasesUi) return null;
  return modelUi.extend({
    tools: [],
    scene(scene) {
      const map = phasesUi.phaseMap();
      if (!map.size) return;
      for (const w of scene.walls || []) { const p = map.get(w.guid); if (p) w.phase = p; }
    },
  });
}
