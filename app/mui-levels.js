/* SPDX-License-Identifier: Apache-2.0 */
/**
 * mui-levels.js: model-ui.js's 5 bindings for this topic, moved out of mountModel() unchanged (0.11 PERF.78, perf-finish-11 bimcraft: one module per panel section; no behaviour change).
 * mountMuiLevels(ctx) is called once by mountModel(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables mountModel() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { el } from './ui-util.js';
import { snapshotModel, loopsOf, changeLevel, newLevel, newLevelBelow, copyLevel } from './model-ops.js';
import { inv4 } from './ifc-util.js';
import { loopAt } from './model-rooms.js';
import { inPoly } from './model-plan.js';
import { t } from './i18n.js';
import { fmtLen, parseLen } from './model-units.js';

export function mountMuiLevels(ctx) {
  const { root, ui, S, exts, ed, endChain, commit, host } = ctx;

  // ---- the level select and the Levels panel ----
  function fillLevelSelect() {
    const L = S.data.levels;
    ui.level.replaceChildren(...L.slice().reverse().map((l) => el('option', { value: String(l.id), selected: l.id === S.level }, l.name)));
  }

  function showKind(levelId, kind, callout = null) {
    if (!S.data?.levels.some((l) => l.id === levelId)) return;
    if (!S.on) ctx.show(true);
    S.level = levelId; S.kind = kind; S.callout = callout || null; endChain(); S.cutFor = null;
    if (ui.kind) ui.kind.value = kind;
    ctx.refresh(); ctx.fitPlan();
  }
  /** 0.6 DC.117: the underside of the ceiling over a point (model mm, file axes) on a storey, mm above the level; else null. */
  function ceilingZ(storey, x, y) {
    const e = ed();
    if (!e) return null;
    // the storey's ceilings as plan outlines, read once per model state (placing asks on every pointer move)
    const tag = storey + ':' + (e.changes?.length ?? 0) + ':' + (S.data ? 'd' : 's');
    if (S.ceil?.tag !== tag || S.ceil.data !== S.data) {
      const D = S.data || snapshotModel(e), loops = loopsOf(e, storey);
      let Wi = null;
      try { Wi = inv4(ctx.storeyWorldMm(e.placer(), storey)); } catch (err) { Wi = null; }
      const list = (D.derived?.ceilings || []).filter((c) => c.storey === storey)
        .map((c) => ({ c, lp: loopAt(c.mode === 'building' ? loops.outlines : loops.rooms, c.seed) })).filter((q) => q.lp);
      S.ceil = { tag, data: S.data, Wi, list };
    }
    const { Wi, list } = S.ceil;
    if (!Wi || !list.length) return null;
    const p = [Wi[0] * x + Wi[4] * y + Wi[12], Wi[1] * x + Wi[5] * y + Wi[13]];
    let best = null;
    for (const { c, lp } of list) if (inPoly(p[0], p[1], lp.poly) && !(lp.holes || []).some((h) => inPoly(p[0], p[1], h))) best = best === null ? c.height : Math.min(best, c.height);
    return best;
  }
  function renderLevels() {
    if (!ui.levels) return;
    const L = S.data.levels;
    const row = (l) => {
      const name = el('input', { type: 'text', className: 'bc-input', value: l.name, maxLength: 120, 'aria-label': t('model.lv.name'), 'data-lv-name': l.guid });
      const elev = el('input', { type: 'text', className: 'bc-input bc-num', value: fmtLen(l.elevation, S.units), 'aria-label': t('model.lv.elev'), 'data-lv-elev': l.guid });
      const ht = el('input', { type: 'text', className: 'bc-input bc-num', value: fmtLen(l.height, S.units), 'aria-label': t('model.lv.height'), 'data-lv-height': l.guid });
      const pick = el('input', { type: 'radio', name: 'bc-plan-level', checked: l.id === S.level, 'aria-label': t('model.lv.show', { name: l.name }) });
      pick.addEventListener('change', () => { S.level = l.id; endChain(); S.cutFor = null; ctx.refresh(); ctx.fitPlan(); });
      const commitOn = (input, fn) => {
        const go = () => { const r = fn(input.value); if (r === false) input.value = input.defaultValue; };
        input.addEventListener('change', go);
        input.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); input.blur(); } if (e.key === 'Escape') { input.value = input.defaultValue; input.blur(); } });
      };
      commitOn(name, (v) => { if (!v.trim()) return false; commit(changeLevel(l.guid, { name: v.trim() }), { label: l.name, verb: t('model.verb.changed') }); });
      commitOn(elev, (v) => { const mm = parseLen(v, S.units); if (!Number.isFinite(mm)) { host.status(t('model.err.length'), true); return false; } commit(changeLevel(l.guid, { elevation: mm, shiftAbove: true }), { label: l.name, verb: t('model.verb.moved') }); });
      commitOn(ht, (v) => { const mm = parseLen(v, S.units); if (!(mm >= 10 && mm <= 1e7)) { host.status(t('new.err.height'), true); return false; } commit(changeLevel(l.guid, { height: mm, shiftAbove: true }), { label: l.name, verb: t('model.verb.changed') }); });
      return el('li', { className: 'bc-level' + (l.id === S.level ? ' is-current' : ''), 'data-level': l.guid },
        el('label', { className: 'bc-level-pick' }, pick), name, elev, ht);
    };
    const add = el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-lv-add': '' }, el('i', { className: 'bi bi-plus-lg', 'aria-hidden': 'true' }), ' ' + t('model.lv.add'));
    add.addEventListener('click', () => {
      const top = L[L.length - 1];
      commit(newLevel({ name: t('new.level', { n: L.length + 1 }), elevation: top ? top.elevation + top.height : 0, height: top ? top.height : 3000 }), { label: t('new.level', { n: L.length + 1 }), verb: t('model.verb.added') });
    });
    // 0.9 DC.119: a level below the lowest (a basement): negative elevation, nothing else moves
    const below = el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-lv-below': '' }, el('i', { className: 'bi bi-plus-lg', 'aria-hidden': 'true' }), ' ' + t('model.lv.below'));
    below.addEventListener('click', () => {
      const low = L[0];
      commit(newLevelBelow({ height: low ? low.height : 3000 }), { label: t('model.lv.below'), verb: t('model.verb.added') });
    });
    // 0.7 SU.461: the floor plan of this level drawn again on another (or a new one on top)
    const copy = el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-lv-copy': '' }, el('i', { className: 'bi bi-files', 'aria-hidden': 'true' }), ' ' + t('model.lv.copy'));
    copy.addEventListener('click', () => openCopyLevel());
    ui.levels.replaceChildren(
      el('div', { className: 'bc-level bc-level-head', 'aria-hidden': 'true' }, el('span', { className: 'bc-lv-e' }, t('model.lv.elev')), el('span', { className: 'bc-lv-h' }, t('model.lv.height'))),
      el('ul', { className: 'bc-levels' }, ...L.slice().reverse().map(row)), add, below, copy, ...exts.flatMap((x) => x.levelButtons?.() || []));   // 0.6 DF.20: Add levels…
  }

  /** Copy level…: what is drawn on the level shown, to another level or a new one on top. */
  function openCopyLevel() {
    const from = ctx.level(), L = S.data.levels, others = L.filter((l) => l.id !== from.id);
    const top = L[L.length - 1], mine = ctx.wallsHere().length;
    const to = el('select', { className: 'select-cc', 'data-lvc-to': '' }, ...others.slice().reverse().map((l) => el('option', { value: l.guid }, l.name)), el('option', { value: '' }, t('model.lv.copy.new')));
    const note = el('p', { className: 'bc-muted', role: 'status' });
    const showNote = () => { const l = L.find((x) => x.guid === to.value); note.textContent = !mine ? t('model.lv.copy.none', { name: from.name }) : l && ctx.wallsOn(l.id).length ? t('model.lv.copy.exists', { name: l.name }) : ''; };
    to.addEventListener('change', showNote); showNote();
    const dlg = el('dialog', { className: 'bc-dialog', 'aria-labelledby': 'bc-lvc-h', 'data-lvc-dialog': '' },
      el('form', { method: 'dialog' },
        el('h2', { className: 'bc-h', id: 'bc-lvc-h' }, t('model.lv.copy.title')),
        el('p', {}, t('model.lv.copy.what', { name: from.name })),
        el('label', { className: 'bc-dlg-field' }, el('span', {}, t('model.lv.copy.to')), to), note,
        el('p', { className: 'bc-lib-actions' },
          el('button', { type: 'submit', className: 'btn-plot btn-sm-cc', value: 'ok', 'data-lvc-ok': '', disabled: !mine }, t('model.lv.copy.ok')),
          el('button', { type: 'submit', className: 'btn-line btn-sm-cc', value: 'cancel' }, t('model.gp.cancel')))));
    dlg.querySelector('form').addEventListener('submit', (e) => {
      if (e.submitter?.value !== 'ok') return;
      const spec = { from: from.guid, to: to.value || null };
      if (!spec.to) spec.newLevel = { name: t('new.level', { n: L.length + 1 }), elevation: top.elevation + top.height, height: top.height };
      commit(copyLevel(spec), { label: from.name, verb: t('model.verb.copied') });
      const dest = spec.to ? S.data.levels.find((l) => l.guid === spec.to) : S.data.levels[S.data.levels.length - 1];
      if (dest && S.data.levels.length >= L.length) { S.level = dest.id; S.cutFor = null; ctx.refresh(); ctx.fitPlan(); }
    });
    dlg.addEventListener('close', () => dlg.remove());
    root.append(dlg);
    dlg.showModal();
  }

  return { fillLevelSelect, showKind, ceilingZ, renderLevels };
}
