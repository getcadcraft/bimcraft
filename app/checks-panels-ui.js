/* SPDX-License-Identifier: Apache-2.0 */
/**
 * checks-panels-ui.js: bimcraft.js's 9 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 bimcraft; no behaviour change).
 * mountChecksPanels(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { el } from './ui-util.js';
import { t } from './i18n.js';
import { ModelWriter } from './model-write.js';
import { runChecks } from './ifc-checks.js';
import { checkProblems } from './problems-bimcraft.js';
import { ids as idsOfType } from './ifc-util.js';

export function mountChecksPanels(ctx) {
  const { ST, status, afterPick, showProps, nameOfKey, index, showMany, afterEdit, rebuild } = ctx;

  function editableBox() {
    if (!ST.editor || ST.mode !== 'ifc') return null;
    const box = el('div', { className: 'bc-find', 'data-editable-geom': '' }, el('p', { className: 'bc-h' }, t('solids.h')));
    const fill = (rep) => {
      const n = rep.products;
      const pct = n ? Math.round(rep.share * 100) : 0;
      box.append(el('p', { className: 'bc-muted', 'data-solids-sum': '' }, t('solids.sum', { n, pct, parametric: rep.parametric, tessellated: rep.tessellated, brep: rep.brep })));
      if (rep.tessellated) box.append(el('div', { className: 'bc-find-row' }, el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-solids-keep': '', title: t('solids.keep.title'), onClick: keepSolidsEditable }, t('solids.keep'))));
    };
    box.append(el('p', { className: 'bc-muted', 'data-solids-wait': '' }, t('solids.reading')));
    (async () => {
      try {
        const S = await import('./ifc-solids.js');
        ST.solidsRep = S.report(ST.ifc.api.file(ST.model.modelID));
        box.querySelector('[data-solids-wait]')?.remove();
        fill(ST.solidsRep);
      } catch (e) { box.querySelector('[data-solids-wait]')?.replaceChildren(t('solids.failed', { why: String(e.message || e) })); }
    })();
    return box;
  }
  async function keepSolidsEditable() {
    if (!ST.editor || ST.mode !== 'ifc') return;
    const S = await import('./ifc-solids.js');
    let out = null;
    const run = (ed) => new ModelWriter(ed.W, ed.api, ed.mid).run((w) => {
      out = S.keepEditable(w.api.file(w.mid), { created: (id) => w.journal.created.push(id), touch: (id) => w.touch(id) });
      return { ids: [] };
    });
    try { ST.editor.modelChange(run, { label: t('solids.undo'), verb: t('solids.verb') }); }
    catch (e) { status(String(e.message || e), true); return; }
    await rebuild();
    afterEdit();
    status(out && out.converted ? t('solids.done', { n: out.converted, skipped: out.skipped }) : t('solids.none'));
  }
  function runModelChecks() {
    ST.checkRes = runChecks(index(), ST.model, { required: ctx.readRules() });
    ST.checksArmed = true; ST.checksSrc?.set(checkProblems(ST.checkRes, { guidOf: ctx.guidOf, nameOf: nameOfKey, t }));   // 0.7.1 → 0.8: also in the shell's Problems
    ctx.renderChecks();
    status(t('checks.done', { n: new Set(ST.checkRes.flatMap((c) => c.groups.flatMap((g) => g.keys))).size }));
  }
  function pickKeys(keys) {
    ST.viewer.select(keys);
    afterPick();
    if (keys.length > 1) showMany(); else showProps(keys[0]);
    ST.viewer.frameKeys(keys);
    status(t('checks.picked', { n: keys.length }));
  }

  const projectOf = (w) => { try { return idsOfType(w.api, w.mid, 'IFCPROJECT')[0] ?? null; } catch (e) { return null; } };
  function acceptedInIfc() {
    if (!ST.editor || ST.mode !== 'ifc') return [];
    try {
      const w = new ModelWriter(ST.editor.W, ST.editor.api, ST.editor.mid), pid = projectOf(w);
      const ps = pid === null ? null : w.readPset(pid, ctx.PROBLEMS_PSET);
      const list = ps && typeof ps.Accepted === 'string' ? JSON.parse(ps.Accepted) : [];
      return Array.isArray(list) ? list : [];   // the store cleans it (untrusted, like any file)
    } catch (e) { return []; }
  }
  function saveAcceptedInIfc(list) {
    if (!ST.editor || ST.mode !== 'ifc') throw new Error(t('problems.err.noifc'));
    const json = JSON.stringify(list);
    const run = (ed) => new ModelWriter(ed.W, ed.api, ed.mid).run((w) => {
      const pid = projectOf(w);
      if (pid === null) throw new Error(t('problems.err.noproject'));
      w.upsertPset(pid, ctx.PROBLEMS_PSET, [['Accepted', 'IFCTEXT', json], ['Format', 'IFCLABEL', ctx.PROBLEMS_FORMAT]]);
      return {};
    });
    ST.editor.modelChange(run, { label: t('problems.undo.accept'), verb: '' });
    afterEdit();
  }
  const syncAccepted = () => { if (window.ccProblems && document.getElementById('cc-problems')) window.ccProblems.store.loadAccepted(acceptedInIfc()); };

  const keysOfGuid = (g) => {
    const ix = index();
    if (!ix) return [];
    if (ST.guidIx?.ix !== ix) { ST.guidIx = { ix, map: new Map() }; for (const [id, gv] of ix.values('guid')) ST.guidIx.map.set(gv, ix.keyBase + id); }
    const k = ST.guidIx.map.get(g);
    return k !== undefined ? [k] : ST.modelUi?.problemKeys?.(g) || [];
  };

  return { editableBox, runModelChecks, pickKeys, projectOf, saveAcceptedInIfc, syncAccepted, keysOfGuid };
}
