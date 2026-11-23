/* SPDX-License-Identifier: Apache-2.0 */
/**
 * mui-changes.js: model-ui.js's 5 bindings for this topic, moved out of mountModel() unchanged (0.11 PERF.78, perf-finish-11 bimcraft: one module per panel section; no behaviour change).
 * mountMuiChanges(ctx) is called once by mountModel(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables mountModel() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { snapshotModel, loopsOf } from './model-ops.js';
import { t } from './i18n.js';

export function mountMuiChanges(ctx) {
  const { S, exts, PR, ed, kb, host, mergeJournals } = ctx;

  // ---- changes: applied now, or queued while the model reloads ----
  function commit(run, meta = {}) {
    if (S.busy || (S.reloading && Date.now() - S.reloadT < 30000)) { S.queue.push([run, meta]); ctx.drawOverlay(); return; }
    apply(run, meta);
  }
  function apply(run, meta) {
    let r;
    try { r = ed().modelChange(run, { label: meta.label || '', verb: meta.verb || '', ...(meta.coalesce ? { coalesce: { key: meta.coalesce, merge: mergeJournals } } : {}) }); }
    catch (e) {
      refused(e, meta);
      if (meta.chain && S.chain === meta.chain) S.chain.points.pop();
      ctx.refresh(); return;
    }
    if (meta.chain && r.made) for (const g of r.made.keys()) meta.chain.guids.push(g);
    S.keepSel = meta.select || ctx.selectedKeys();   // the reload clears the pick: put it back afterwards
    S.reselect = meta.reselect || null;           // …or ask again after it (a roof's parts get new ids: pick it by its GlobalId)
    S.data = snapshotModel(ed());
    S.loops = loopsOf(ed(), S.level);
    for (const x of exts) x.refresh?.();
    PR.src?.invalidate();   // 0.7.1 → 0.8: the regulations add-on's problems, re-checked a moment later
    ctx.renderLevels(); ctx.fillLevelSelect();
    ctx.buildScene();
    host.afterEdit();
    scheduleRebuild(r.id != null ? kb() + r.id : null);
  }
  async function scheduleRebuild(selectKey) {
    if (S.busy) { S.again = true; return; }
    S.busy = true;
    try { await host.rebuild(null); } catch (e) { console.error(e); host.status(t('model.err.failed', { why: e.message || e }), true); } finally { S.busy = false; S.reloading = false; for (const x of exts) x.settled?.(); }
    // what was clicked meanwhile, then once more if it changed anything
    const q = S.queue.splice(0);
    for (const [run, meta] of q) apply0(run, meta);
    if (q.length || S.again) { S.again = false; scheduleRebuild(null); }
  }
  function apply0(run, meta) {
    try {
      const r = ed().modelChange(run, { label: meta.label || '', verb: meta.verb || '', ...(meta.coalesce ? { coalesce: { key: meta.coalesce, merge: mergeJournals } } : {}) });
      if (meta.chain && r.made) for (const g of r.made.keys()) meta.chain.guids.push(g);
    } catch (e) { refused(e, meta); }
    host.afterEdit();
  }
  /** A change that did not apply: a refusal (a key of ours) reads as its own words, anything else is a fault (logged). A dialog that
   *  asked (meta.onError, 0.6 DC.114) shows it itself, also when the change waited for a reload. */
  function refused(e, meta) {
    const k = e.key || e.message;
    const ours = !!(k && /^(model|fam|comforts|pic|tji|res\.err|walls\.err|wshape\.err|spaces\.err)\./.test(k));   // 0.9 walls-09: the wall tool's refusals
    if (!ours) console.error(e);
    const why = ours ? t(k, e.fill || {}) : t('model.err.failed', { why: e.message || e });
    if (meta.onError) meta.onError(e, why); else host.status(why, true);
  }

  return { commit, scheduleRebuild, apply0 };
}
