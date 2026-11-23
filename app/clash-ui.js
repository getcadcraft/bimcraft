/* SPDX-License-Identifier: Apache-2.0 */
/**
 * clash-ui.js: bimcraft.js's 5 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 bimcraft; no behaviour change).
 * mountClash(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { t } from './i18n.js';
import { find } from './ifc-find.js';
import { el } from './ui-util.js';
import { fmtLength } from './measure.js';
import { parseLen, getDisplayUnits } from './model-units.js';
import { elementsOf, clashes } from './clash.js';

export function mountClash(ctx) {
  const { ST, ui, status, frame, treeView, afterPick, readSets, keysOfGuids, nameOfKey, index, showMany, entryOf, showTab } = ctx;

  function clashSources() {
    const out = [{ value: 'pick', label: t('clash.src.pick', { n: ST.viewer.selection.size }), keys: () => [...ST.viewer.selection] }, { value: 'all', label: t('clash.src.all'), keys: () => [...ST.viewer.allKeys()].filter((k) => { const e = entryOf(k); return !e || e.model.classOf.get(k - e.model.keyBase) !== 'IfcSpace'; }) }];   // rooms are not clash objects (pick Class: Space to check them)
    const byCls = new Map();
    for (const m of ctx.models) for (const [id, c] of m.model.classOf) { if (!byCls.has(c)) byCls.set(c, []); byCls.get(c).push(m.model.keyBase + id); }
    for (const [c, ks] of [...byCls].sort((a, b) => b[1].length - a[1].length)) out.push({ value: 'cls:' + c, label: t('clash.src.class', { cls: c.replace(/^Ifc/, ''), n: ks.length }), keys: () => ks });
    for (const st of readSets()) out.push({ value: 'set:' + st.name, label: t('clash.src.set', { name: st.name }), keys: () => find(index(), st) });
    out.splice(2, 0, ...ctx.mepStruct.sources());   // 0.7 LC.9: pipes and ducts, walls, slabs, beams, columns, the structure
    for (const h of ST.hostSets) out.push({ value: 'host:' + h.value, label: h.label, keys: () => keysOfGuids(h.guids) });   // BK.45: a host's model layers (Super) as sets to check against each other
    return out;
  }

  function renderClash() {
    if (!ui.clash) return;
    ui.clashSec.hidden = ST.mode !== 'ifc' || !ST.model;
    if (ui.clashSec.hidden || !ui.clashDetails.open) return;
    const src = clashSources();
    const pick = (cur, set, lbl, attr) => {
      const sel = el('select', { className: 'select-cc', [attr]: '' }, src.map((o) => el('option', { value: o.value }, o.label)));
      sel.value = src.some((o) => o.value === cur) ? cur : src[0].value;
      sel.addEventListener('change', () => set(sel.value));
      return el('label', {}, lbl, sel);
    };
    const tol = el('input', { type: 'text', className: 'bc-input', inputMode: 'decimal', value: ST.clashTol, 'data-clash-tol': '' });
    tol.addEventListener('input', () => { ST.clashTol = tol.value; });
    const kids = [pick(ST.clashA, (v) => { ST.clashA = v; }, t('clash.a'), 'data-clash-a'), pick(ST.clashB, (v) => { ST.clashB = v; }, t('clash.b'), 'data-clash-b'), el('label', {}, t('clash.tolerance'), tol),
      el('div', { className: 'bc-find-row' }, ST.clashRun
        ? el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-clash-cancel': '', onClick: () => { ST.clashRun?.stop(); } }, t('clash.cancel'))
        : el('button', { type: 'button', className: 'btn-plot btn-sm-cc', 'data-clash-run': '', onClick: runClash }, t('clash.run')))];
    if (ST.clashRun) kids.push(el('progress', { className: 'bc-clash-progress', max: String(ST.clashRun.total || 1), value: String(ST.clashRun.done || 0), 'data-clash-progress': '' }));
    if (ST.clashMsg) kids.push(el('p', { className: 'bc-muted', 'data-clash-msg': '' }, ST.clashMsg));
    if (ST.clashRes && ST.clashRes.length && ST.clashFix) kids.push(el('div', { className: 'bc-find-row' }, ST.clashFix.button()));   // 0.9 EG.42 (clashfix-bim.js): Propose fixes
    if (ST.clashRes && ST.clashRes.length) kids.push(el('ul', { className: 'bc-clash-results', 'data-clash-results': '' }, ST.clashRes.map((c, i) => el('li', {},
      el('button', { type: 'button', className: 'bc-clash-row', 'aria-pressed': i === ST.clashAt ? 'true' : 'false', 'data-clash-row': String(i), onClick: () => showClash(i) },
        el('span', {}, t('clash.row', { a: nameOfKey(c.a), b: nameOfKey(c.b) })), el('span', { className: 'n' }, fmtLength(c.depth))),
      i === ST.clashAt ? el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-clash-issue': '', onClick: () => clashIssue(c) }, t('clash.issue')) : null))));
    ui.clash.replaceChildren(el('div', { className: 'bc-clash' }, ...kids), ctx.mepStruct.node((a, b) => { ST.clashA = a; ST.clashB = b; renderClash(); runClash(); }), ctx.mepRoute.node());
  }
  async function runClash() {
    const tolText = String(ST.clashTol).trim().replace(',', '.');   // GH.3-A: a bare number is metres (the label says so); a unit mark (2 cm, 1/2") is read in that unit
    const tol = /^-?[\d.]+$/.test(tolText) ? Number(tolText) : parseLen(tolText, getDisplayUnits()) / 1000;
    if (!Number.isFinite(tol) || tol < 0) { status(t('clash.bad.tolerance'), true); return; }
    const src = clashSources(), a = src.find((o) => o.value === ST.clashA) || src[0], b = src.find((o) => o.value === ST.clashB) || src[1];
    const ka = a.keys(), kb = b.keys();
    if (!ka.length || !kb.length) { status(t('clash.empty'), true); return; }
    // world triangles through each model's placement
    const mats = new Map();
    for (const L of ST.viewer.layers.values()) for (const bt of L.batches) mats.set(bt, L.group.matrix.elements);
    const A = elementsOf(ST.viewer.batches, ka, (bt) => mats.get(bt)), B = elementsOf(ST.viewer.batches, kb, (bt) => mats.get(bt));
    ST.clashRes = null; ST.clashAt = -1; ST.clashMsg = '';
    const run = { done: 0, total: 0, stop: null };
    ST.clashRun = run;
    renderClash();
    const finish = (res, why) => {
      if (ST.clashRun !== run) return;
      ST.clashRun = null;
      if (res) { ST.clashRes = res; ST.clashMsg = t('clash.found', { n: res.length }); status(ST.clashMsg); }
      else { ST.clashMsg = why ? t('clash.failed', { why }) : t('clash.stopped'); status(ST.clashMsg, !!why); }
      renderClash();
    };
    let worker = null;
    try { worker = new Worker(import.meta.resolve('./clash-worker.js'), { type: 'module' }); } catch (e) { worker = null; }
    if (!worker) {   // no worker here: on this thread
      await frame();
      try { finish(clashes(A, B, { tolerance: tol })); } catch (e) { finish(null, e.message); }
      return;
    }
    run.stop = () => { worker.terminate(); finish(null, ''); };
    worker.onmessage = (e) => {
      if (e.data.progress) { [run.done, run.total] = e.data.progress; const pr = ui.clash.querySelector('[data-clash-progress]'); if (pr) { pr.max = String(run.total || 1); pr.value = String(run.done); } status(t('clash.progress', { done: run.done, total: run.total })); }
      else { worker.terminate(); if (e.data.error) finish(null, e.data.error); else finish(e.data.result); }
    };
    worker.onerror = (e) => { worker.terminate(); finish(null, e.message || 'worker'); };
    worker.postMessage({ clashUrl: import.meta.resolve('./clash.js'), A, B, tolerance: tol }, [...A, ...B].map((x) => x.tris.buffer).filter((b2, i, all) => all.indexOf(b2) === i));
  }
  function showClash(i) {
    const c = ST.clashRes[i];
    ST.clashAt = i;
    ST.viewer.vis.isolate([c.a, c.b], { ghost: true });
    ST.viewer.applyVisibility();
    ST.viewer.select([c.a, c.b]);
    afterPick();
    showMany();
    ST.viewer.frameKeys([c.a, c.b]);
    treeView.sync();
    renderClash();
    status(t('clash.shown', { a: nameOfKey(c.a), b: nameOfKey(c.b) }));
  }
  function clashIssue(c) {
    showTab('issues');
    ST.issueForm = true;
    ctx.renderIssues();
    const f = ui.issues.querySelector('[data-bcf-f-title]');
    if (f) { f.value = t('clash.issue.title', { a: nameOfKey(c.a), b: nameOfKey(c.b) }); f.focus(); }
  }
  ui.clashDetails?.addEventListener('toggle', () => { if (ui.clashDetails.open) renderClash(); });
  window.bimcraftClash = { set: (a, b, tol) => { ST.clashA = a; ST.clashB = b; ST.clashTol = String(tol); ui.clashDetails.open = true; renderClash(); }, results: () => ST.clashRes, run: runClash };   // for tests

  return { renderClash, runClash };
}
