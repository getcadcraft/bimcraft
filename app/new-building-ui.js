/* SPDX-License-Identifier: Apache-2.0 */
/**
 * new-building-ui.js: bimcraft.js's 7 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 bimcraft; no behaviour change).
 * mountNewBuilding(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { getDisplayUnits } from './model-units.js';
import { startFor, policyMark, startBlock, startSheet } from './new-defaults-ui.js';
import { el, num } from './ui-util.js';
import { t } from './i18n.js';
import { parseLength } from './libitem.js';
import { stackLevels, levelsProblem, newBuilding } from './new-model.js';
import { bundleFiles } from './model-picture.js';
import { ModelWriter } from './model-write.js';
import { withPictures } from './autosave-pictures.js';
import { ifcJournal } from "./history/ifc-journal.js";
import { recentFolders, reopenFolder, forgetFolder } from './folder-pick.js';

export function mountNewBuilding(ctx) {
  const { ST, ui, status, guard, open, openFolder, renderChanges, root } = ctx;

  // ---- New building (0.5 part 3, BM.2 start; owner 2026-10-14) ----
  // A blank IFC4 model (project, site, building, levels; new-model.js) opened like any file: items can be placed from the
  // Library, and Save as IFC writes it under its own name. Walls, doors and windows are track BM's next items.
  // 0.7 SU.751: the level height starts in the units the person already chose (Units menu), else by the browser's language
  const metricNow = () => { const u = getDisplayUnits(); return ['mm', 'cm', 'm'].includes(u) || (!['ftin', 'ftdec', 'in'].includes(u) && !/^en-(US|LR|MM)$/i.test(navigator.language || 'en-US')); };
  async function askNewBuilding() {
    if (await ctx.keepEdits()) return;
    // 0.10 DP.1: what the person's Default Policies set (levels, height, names, wall type, sheet, tool, units); with none set `start` is new-defaults.js as before
    const start = startFor({ metricOwn: metricNow(), unitsNow: getDisplayUnits() });
    const metricDefault = start.metric;
    const field = (label, input, hint, mark) => el('label', { className: 'bc-new-field' }, el('span', {}, label), input, hint ? el('span', { className: 'bc-sub' }, hint) : null, mark || null);
    const name = el('input', { type: 'text', value: t('new.default.name'), maxLength: 120, required: true, 'data-new-name': '' });
    const count = el('input', { type: 'number', value: String(start.levels), min: '1', max: '200', step: '1', required: true, 'data-new-levels': '' });
    const height = el('input', { type: 'text', value: start.heightText, required: true, 'data-new-height': '' });   // i18n-ignore: a length
    const err = el('p', { className: 'bc-new-err', role: 'alert' });
    // 0.9 D8.12-D: start from a blank building or one of your templates (template-ui.js); a template brings its own levels
    const levelFields = [field(t('new.levels'), count, null, policyMark(el, start, 'levels') || policyMark(el, start, 'levelName')), field(t('new.height'), height, t('new.height.hint'), policyMark(el, start, 'height'))];
    // 0.10 BK.74: what it starts with, said before Create: the units, the Wall tool's type (a list to change it), the first sheet
    const starts = startBlock({ el, t, metric: metricDefault, units: start.units || getDisplayUnits(), wallKey: ST.modelUi?.wallDefault?.(), start });
    const from = await ctx.templates.startField((on) => { for (const f of levelFields) { f.hidden = on; f.style.display = on ? 'none' : ''; } starts.show(!on); });
    const result = await new Promise((done) => {
      const dlg = el('dialog', { className: 'bc-dialog bc-new', 'aria-labelledby': 'bc-new-h' },
        el('form', { method: 'dialog', noValidate: true },
          el('h2', { className: 'bc-h', id: 'bc-new-h' }, t('new.title')),
          el('p', {}, t('new.lede')),
          field(t('new.name'), name),
          from.row,
          ...levelFields,
          ...starts.rows,
          err,
          el('p', { className: 'bc-lib-actions' },
            el('button', { type: 'submit', className: 'btn-plot btn-sm-cc', value: 'ok', 'data-new-ok': '' }, t('new.create')),
            el('button', { type: 'submit', className: 'btn-line btn-sm-cc', value: 'cancel', formNoValidate: true }, t('dialog.cancel')))));
      const read = () => {
        const choice = from.choice();
        if (choice) return { bad: !name.value.trim() ? 'new.err.name' : choice.missing ? 'new.from.pick' : null, levels: [], name: name.value.trim(), choice, wallType: starts.wallType() };
        const n = Math.round(Number(count.value)), h = start.from.height && height.value === start.heightText ? start.height : parseLength(height.value, metricDefault ? 1 : 304.8);   // an untouched policy height is used exactly (no trip through text)
        const levels = Number.isFinite(n) && n >= 1 ? stackLevels(n, h, (i) => (start.levelName ? start.levelName(i) : t('new.level', { n: i + 1 }))) : [];
        const bad = !name.value.trim() ? 'new.err.name' : levelsProblem(levels);
        return { bad, levels, name: name.value.trim(), wallType: starts.wallType() };
      };
      dlg.querySelector('form').addEventListener('submit', (e) => {
        if (e.submitter?.value !== 'ok') return;
        const r = read();
        if (r.bad) { e.preventDefault(); err.textContent = t(r.bad); return; }
        dlg.result = r;
      });
      dlg.addEventListener('close', () => { dlg.remove(); done(dlg.returnValue === 'ok' ? dlg.result : null); });
      document.body.append(dlg);
      dlg.showModal();
      name.select();
    });
    if (!result) return;
    ST.modelUi?.setWallDefault?.(result.wallType);   // the Wall tool starts on the type the dialog showed
    if (start.units) { const us = root.querySelector('[data-model-units]'); if (us && us.value !== start.units && [...us.options].some((o) => o.value === start.units)) { us.value = start.units; us.dispatchEvent(new Event('change')); } }   // 0.10 DP.1: the units policy of a new project
    const fileName = result.name.replace(/[\\/:*?"<>|]+/g, '-') + '.ifc';   // i18n-ignore: a file name
    if (result.choice) {   // 0.9 D8.12-D
      const made = await ctx.templates.build(result.choice, result.name);
      if (!made) { status(t('new.from.gone'), true); return; }
      const f = new File([made.bytes], fileName, { type: 'application/x-step' });
      await ctx.openIfc(made.bytes, f, null);
      ST.editor.isNew = true;
      renderChanges();
      status(t('new.from.done', { name: result.name, from: made.from || '' }) + (made.style ? ' ' + t('new.from.style') : ''));
      ST.modelUi?.show(true);
      return;
    }
    const text = newBuilding({ name: result.name, siteName: t('new.site'), levels: result.levels, fileName, version: document.querySelector('[data-bimcraft]')?.dataset.version || '',
      sheet: startSheet(start, { titleOf: (level) => t('res.sh.plan', { level }), levelName: result.levels.slice().sort((a, b) => a.elevation - b.elevation)[0].name }) });   // 0.10 BK.74: sheet A-101 with the lowest level's plan; DP.1: or what the sheet policies say, or none
    const data = new TextEncoder().encode(text);
    await ctx.openIfc(data, new File([data], fileName, { type: 'application/x-step' }), null);
    ST.editor.isNew = true;   // unsaved until Save as IFC writes it (keepEdits, autosave and Save treat it like edits)
    renderChanges();
    status(t('new.done', { name: result.name, n: result.levels.length }));
    ST.modelUi?.show(true);   // a new building opens with its plan, ready to draw
    try { if (ST.annoUi?.startFromOffice()) status(t('new.done', { name: result.name, n: result.levels.length })); } catch (e) { /* the building keeps BimCraft's own sizes */ }   // 0.10 BK.10: the office's paper heights (Default Policies), when set
    if (start.tool === 'wall') ST.modelUi?.useTool?.('wall');   // 0.10 DP.1: the "tool after Create" policy (not set: Select, as before)
  }

  const openHost = async (hf) => {
    if (!hf) return;
    const blob = await hf.file();
    await open(typeof File !== 'undefined' && blob instanceof File ? blob : new File([blob], hf.name, { lastModified: hf.lastModified || Date.now() }), null);
  };

  /** 0.11 PERF.24: the copy is the opened IFC's bytes + the edit map once, then only the lines that changed (history/ifc-journal.js).
   *  perf-finish-11: a model with pictures no longer falls back to the whole IFC: the picture lines are journaled as any edit and their bytes
   *  (picture-store.js, by Location) ride beside the copy as files, a picture again only when it changed (autosave-pictures.js). */
  function autosaveJournal(m) {
    const file = () => { try { return m.editor?.api?.file?.(m.editor.mid) || null; } catch (e) { return null; } };
    const meta = () => ({ name: m.name, changes: m.editor.changes.length });
    const pictures = () => (m.editor ? bundleFiles(new ModelWriter(m.editor.W, m.editor.api, m.editor.mid)) : []);
    const j = withPictures(ifcJournal({ file, whole: async () => m.editor.save(), meta }), { files: pictures, meta });
    return { epoch: () => j.epoch(), base: async () => (ctx.unsavedIn(m.editor) ? j.base() : null), delta: async () => (ctx.unsavedIn(m.editor) ? j.delta() : null) };
  }
  function syncAutosave() {
    for (const m of ctx.models) {
      if (!m.editor) continue;
      if (!m.asDoc) m.asDoc = ctx.autosave.doc({ name: m.name, journal: autosaveJournal(m) });
      if (ctx.unsavedIn(m.editor)) m.asDoc.changed(); else m.asDoc.clean();
    }
  }

  // Recent folders: reopen without the picker (and, while the browser keeps the grant, without a prompt).
  const listing = (n) => status(t('folder.listing', { n, count: num(n) }));
  async function renderRecent() {
    const list = await recentFolders();
    ui.recentList.replaceChildren(...list.map((r, i) => el('li', {},
      el('button', { type: 'button', className: 'bc-linkbtn', onClick: () => guard(async () => {
        const picked = await reopenFolder(r, listing);
        if (!picked) { status(t('folder.recent.denied', { name: r.name }), true); return; }
        await openFolder(picked);
      }) }, t('folder.recent.reopen', { name: r.name })),
      el('button', { type: 'button', className: 'bc-forget', title: t('folder.recent.forget', { name: r.name }), 'aria-label': t('folder.recent.forget', { name: r.name }),
        onClick: async () => { await forgetFolder(i); renderRecent(); } }, el('i', { className: 'bi bi-x', 'aria-hidden': 'true' })),
    )));
    ui.recent.hidden = list.length === 0;
  }

  return { askNewBuilding, openHost, syncAutosave, listing, renderRecent };
}
