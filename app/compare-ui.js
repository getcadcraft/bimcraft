/* SPDX-License-Identifier: Apache-2.0 */
/**
 * compare-ui.js: bimcraft.js's 11 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 bimcraft; no behaviour change).
 * mountCompare(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { propertyIndex, CATEGORICAL } from './ifc-props.js';
import * as WebIFC from './ifc/api.js';
import { el } from './ui-util.js';
import { t } from './i18n.js';
import { fmtLength } from './measure.js';
import { compareModels, compareWords, compareCsv } from './ifc-compare.js';

export function mountCompare(ctx) {
  const { ST, ui, status, treeView, fdClear, pickKeys, models, theme, index, fieldLabel, colorOff, cur, entryOf, syncVis, download } = ctx;

  const ixOf = (m) => (m === cur() ? index() : (m.ix ??= propertyIndex(WebIFC, m.ifc.api, m.model.modelID, m.model)));
  const keyName = (k) => { const e = entryOf(k); if (!e) return '#' + k; const id = k - e.model.keyBase; return (ixOf(e).value('name', id) ?? '#' + id) + ' (' + e.name + ')'; };
  const keyGuid = (k) => { const e = entryOf(k); return e ? ixOf(e).value('guid', k - e.model.keyBase) ?? '' : ''; };
  const CMP_SHOWN = 100;
  function renderCompare() {
    if (!ui.cmp) return;
    ui.cmpDetails.hidden = models.length < 2;
    if (ui.cmpDetails.hidden) { if (ST.cmpRes) clearCompare(true); return; }
    if (!ui.cmpDetails.open) return;
    if (!models.includes(ST.cmpNew)) ST.cmpNew = cur();
    if (!models.includes(ST.cmpOld) || ST.cmpOld === ST.cmpNew) ST.cmpOld = models.find((m) => m !== ST.cmpNew);
    const pick = (cur2, set, lbl, attr) => {
      const sel = el('select', { className: 'select-cc', [attr]: '' }, models.map((m) => el('option', { value: String(m.mi) }, m.name)));
      sel.value = String(cur2.mi);
      sel.addEventListener('change', () => { set(models.find((m) => String(m.mi) === sel.value)); renderCompare(); });
      return el('label', {}, lbl, sel);
    };
    const pal = CATEGORICAL[theme()];
    const sw = (c) => el('span', { className: 'bc-sw', style: 'background:' + c, 'aria-hidden': 'true' });
    const item = (k, what) => el('li', {}, el('button', { type: 'button', className: 'bc-linkbtn', 'data-cmp-pick': '', title: keyName(k), onClick: () => pickKeys([k]) }, keyName(k)), what ? el('span', { className: 'bc-cmp-what' }, what) : null);
    const list = (keys, f) => el('ul', {}, ...keys.slice(0, CMP_SHOWN).map(f), keys.length > CMP_SHOWN ? el('li', { className: 'bc-muted' }, t('cmp.more', { n: keys.length - CMP_SHOWN })) : null);
    const kids = [el('p', { className: 'bc-muted' }, t('cmp.intro')),
      el('div', { className: 'bc-clash' }, pick(ST.cmpOld, (m) => { ST.cmpOld = m; }, t('cmp.old'), 'data-cmp-old'), pick(ST.cmpNew, (m) => { ST.cmpNew = m; }, t('cmp.new'), 'data-cmp-new')),
      el('div', { className: 'bc-find-row' },
        el('button', { type: 'button', className: 'btn-plot btn-sm-cc', 'data-cmp-run': '', onClick: runCompare }, t('cmp.run')),
        ST.cmpRes ? el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-cmp-clear': '', onClick: () => clearCompare() }, t('cmp.clear')) : null,
        ST.cmpRes ? el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-cmp-csv': '', onClick: compareDownload }, el('i', { className: 'bi bi-download', 'aria-hidden': 'true' }), ' ', t('cmp.csv')) : null,
          ST.cmpRes ? el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-cmp-words': '', onClick: compareCopyWords }, el('i', { className: 'bi bi-chat-left-text', 'aria-hidden': 'true' }), ' ', t('cmp.words')) : null)];
    if (ST.cmpRes) {
      const what = (c) => [c.props.length ? t('cmp.props', { n: c.props.length }) + ': ' + c.props.slice(0, 3).map((p) => p.field.replace(/^p:/, '')).join(', ') : '', c.moved ? t('cmp.moved.u', { d: fmtLength(c.moved) }) : '', c.reshaped ? t('cmp.reshaped') : ''].filter(Boolean).join('; ');   // i18n-ignore: separators between translated parts
      kids.push(el('ul', { className: 'bc-cmp-sum', 'data-cmp-res': '' },
        el('li', { 'data-cmp': 'added' }, el('div', { className: 'bc-check-head' }, sw(pal[1]), el('span', {}, t('cmp.added')), el('span', { className: 'n' }, String(ST.cmpRes.added.length))), list(ST.cmpRes.added, (k) => item(k))),
        el('li', { 'data-cmp': 'removed' }, el('div', { className: 'bc-check-head' }, sw(pal[0]), el('span', {}, t('cmp.removed')), el('span', { className: 'n' }, String(ST.cmpRes.removed.length))), list(ST.cmpRes.removed, (k) => item(k))),
        el('li', { 'data-cmp': 'changed' }, el('div', { className: 'bc-check-head' }, sw(pal[2]), el('span', {}, t('cmp.changed')), el('span', { className: 'n' }, String(ST.cmpRes.changed.length))), list(ST.cmpRes.changed, (c) => item(c.b, what(c))))),
        el('p', { className: 'bc-muted' }, t('cmp.same', { n: ST.cmpRes.same })),
        ST.cmpRes.dupes.length ? el('p', { className: 'bc-muted' }, t('cmp.dupes', { n: ST.cmpRes.dupes.length })) : null);
    }
    ui.cmp.replaceChildren(...kids.filter(Boolean));
  }
  function runCompare() {
    if (!ST.cmpOld || !ST.cmpNew || ST.cmpOld === ST.cmpNew) { status(t('cmp.same.file'), true); return; }
    if (ST.colorField) colorOff();
    if (ST.fdOn) fdClear(true);
    const side = (m) => ({ ix: ixOf(m), model: m.model, matrix: ST.viewer.modelMatrix(m.mi) });
    ST.cmpRes = compareModels(side(ST.cmpOld), side(ST.cmpNew));
    ST.cmpPair = [ST.cmpOld, ST.cmpNew];
    paintCompare();
    renderCompare();
    status(t('cmp.done', { added: ST.cmpRes.added.length, removed: ST.cmpRes.removed.length, changed: ST.cmpRes.changed.length }));
  }
  function paintCompare() {
    const pal = CATEGORICAL[theme()], colors = new Map();
    for (const k of ST.cmpRes.added) colors.set(k, pal[1]);
    for (const k of ST.cmpRes.removed) colors.set(k, pal[0]);
    for (const c of ST.cmpRes.changed) colors.set(c.b, pal[2]);
    ST.viewer.setColors(colors);
    ST.viewer.vis.isolate([...colors.keys()], { ghost: true });
    ST.viewer.applyVisibility();
    treeView.sync();
    syncVis();
  }
  function clearCompare(quiet = false) {
    ST.cmpRes = null; ST.cmpPair = null;
    ST.viewer?.setColors(null);
    if (ST.viewer) { ST.viewer.vis.showAll(); ST.viewer.applyVisibility(); treeView.sync(); syncVis(); }
    renderCompare();
    if (!quiet) status(t('cmp.cleared'));
  }
  /** EG.65: the changes as plain sentences on the clipboard (an assistant can narrate them). */
  function compareWordsText() {
    const label = (id) => { const f = (ixOf(ST.cmpPair[1]).fields.find((x) => x.id === id) || ixOf(ST.cmpPair[0]).fields.find((x) => x.id === id)); return f ? (f.group ? f.group + '.' + f.label : fieldLabel(f)) : id; };
    const say = { added: (v) => t('cmp.say.added', v), removed: (v) => t('cmp.say.removed', v), moved: (v) => t('cmp.say.moved.u', { ...v, d: fmtLength(v.d) }), reshaped: (v) => t('cmp.say.reshaped', v), prop: (v) => t('cmp.say.prop', v) };
    const w = compareWords(ST.cmpRes, { name: (s, k) => keyName(k), label, say });
    const head = t('cmp.say.head', { old: ST.cmpPair[0].name, new: ST.cmpPair[1].name, added: ST.cmpRes.added.length, removed: ST.cmpRes.removed.length, changed: ST.cmpRes.changed.length });
    return head + '\n' + w.lines.map((l) => '- ' + l).join('\n') + (w.total > w.lines.length ? '\n' + t('cmp.more', { n: w.total - w.lines.length }) : '');
  }
  async function compareCopyWords() {
    const text = compareWordsText();
    try { await navigator.clipboard.writeText(text); status(t('cmp.say.copied')); } catch (e) { status(t('cmp.say.nocopy'), true); }
    return text;
  }
  function compareDownload() {
    const label = (id) => { const f = (ixOf(ST.cmpPair[1]).fields.find((x) => x.id === id) || ixOf(ST.cmpPair[0]).fields.find((x) => x.id === id)); return f ? (f.group ? f.group + '.' + f.label : fieldLabel(f)) : id; };
    const words = Object.fromEntries(['change', 'element', 'what', 'before', 'after', 'added', 'removed', 'changed', 'reshaped'].map((w) => [w, t('cmp.' + w)]));
    words.moved = t('cmp.moved.word');
    const csv = compareCsv(ST.cmpRes, { name: (s, k) => keyName(k), guid: (s, k) => keyGuid(k), label, words });
    const name = ST.cmpPair[1].name.replace(/\.ifc$/i, '') + ' changes.csv';   // i18n-ignore: a file name
    download(name, '\ufeff' + csv, 'text/csv;charset=utf-8');
    status(t('qto.downloaded', { name }));
  }
  ui.cmpDetails?.addEventListener('toggle', () => { if (ui.cmpDetails.open) renderCompare(); });
  new MutationObserver(() => { if (ST.cmpRes && ST.viewer) paintCompare(); }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-space'] });
  window.bimcraftCompare = { run: (oldMi, newMi) => { ST.cmpOld = models.find((m) => m.mi === oldMi); ST.cmpNew = models.find((m) => m.mi === newMi); ui.cmpDetails.open = true; runCompare(); return ST.cmpRes; }, result: () => ST.cmpRes, words: () => (ST.cmpRes ? compareWordsText() : '') };   // for tests

  return { renderCompare, clearCompare };
}
