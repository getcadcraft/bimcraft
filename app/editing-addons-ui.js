/* SPDX-License-Identifier: Apache-2.0 */
/**
 * editing-addons-ui.js: bimcraft.js's 14 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 bimcraft; no behaviour change).
 * mountEditingAddons(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { el } from './ui-util.js';
import { t } from './i18n.js';
import { elementText, elementCsv } from './clipboard.js';
import { handoverBundleFiles } from './handover-docs.js';

export function mountEditingAddons(ctx) {
  const { ST, ui, status, guard, rebuild, download, syncEdit, copyText, root } = ctx;

  // ---- Editing ----
  const readRow = (k, v) => [el('dt', {}, k), el('dd', {}, v === null || v === undefined ? '' : String(v))];
  // ---- Copy property values (0.5 WL.3): a copy button on every value in Properties (active or another model's element),
  // and Copy all as text / CSV at the top. Values go out as shown. ----
  const copyBtn = (name, value) => el('button', { type: 'button', className: 'bc-copy-val', title: t('prop.copy.title', { name }), 'aria-label': t('prop.copy.title', { name }), 'data-copy-value': name,
    onClick: (e) => { e.stopPropagation(); copyValue(name, value); } }, el('i', { className: 'bi bi-copy', 'aria-hidden': 'true' }));
  /** A read-only Properties row whose value can be copied. */
  const copyRow = (k, v) => {
    const s = v === null || v === undefined ? '' : String(v);
    return [el('dt', {}, k), el('dd', { className: 'bc-copyable' }, el('span', { className: 'bc-copy-text-val' }, s), s ? copyBtn(k, s) : null)];
  };
  async function copyValue(name, value) {
    await copyText(value);
    status(t('prop.copied', { name, value: value.length > 60 ? value.slice(0, 57) + '…' : value }), false, true);
  }
  /** Copy all / Copy as CSV for one element's properties (`p` from properties(); `file` names another model). */
  const copyAllBar = (p, file) => el('p', { className: 'bc-copy-all', 'data-props-copy': '' },
    el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-props-copy-text': '', title: t('prop.copyall.title'), onClick: async () => { await copyText(elementText(p)); status(t('prop.copied.all', { name: p.name || t('prop.unnamed') }), false, true); } },
      el('i', { className: 'bi bi-copy', 'aria-hidden': 'true' }), ' ', t('prop.copyall')),
    el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-props-copy-csv': '', title: t('prop.copycsv.title'), onClick: async () => { await copyText(elementCsv(p, { file: ctx.models.length > 1 ? file : undefined })); status(t('prop.copied.csv', { name: p.name || t('prop.unnamed') }), false, true); } },
      el('i', { className: 'bi bi-filetype-csv', 'aria-hidden': 'true' }), ' ', t('prop.copycsv')));

  /** dt + a dd that turns into an input on click. Enter or leaving the field saves; Esc cancels. */
  // ---- Add-ons (0.5 AO.7): the state the add-on API reads, its Properties sections and exporter buttons ----
  /** The pick as the open model's express ids (add-ons see the active model only). */
  function addonSelection() {
    const m = ctx.cur();
    if (!m || !ST.viewer) return [];
    return [...ST.viewer.selection].filter((k) => ctx.entryOf(k) === m).map((k) => k - m.model.keyBase);
  }
  async function addonSections(ids, token) {
    if (!ST.addons || ST.mode !== 'ifc' || !ids.length) return;
    let secs;
    try { secs = await ST.addons.propsSections(ids, ST.ifc); } catch (e) { return; }
    if (token !== ST.pickToken || !secs?.length) return;
    for (const s of secs) {
      ui.props.append(el('details', { className: 'bc-set', open: true, 'data-addon-props': s.key }, el('summary', {}, s.label),
        el('dl', { className: 'bc-dl' }, s.fields.flatMap((f) => (f.edit ? ctx.editableRow(f.label, f.value, false, {}, (v) => f.edit(v)) : readRow(f.label, f.value))))));
    }
  }
  /** One button per add-on exporter beside Save as IFC (the IFC with every edit goes to the add-on's write()). */
  function renderAddonExports() {
    if (!ui.save) return;
    let box = ui.save.parentElement.querySelector('[data-addon-exports]');
    const list = ST.addons && ST.mode === 'ifc' && ST.model ? ST.addons.exporters() : [];
    if (!list.length) { box?.remove(); return; }
    if (!box) { box = el('span', { className: 'bc-addon-exports', 'data-addon-exports': '' }); ui.save.after(box); }
    box.replaceChildren(...list.map((x) => el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-addon-export': x.id, title: t('addon.export.title', { label: x.label }),
      onClick: () => guard(async () => {
        const stem = ST.ifcName.replace(/\.ifc$/i, '');
        const out = await x.write(ST.addons.exportInput(ST.ifcName));
        if (out === null || out === undefined) { status(t('addon.export.nothing', { label: x.label }), true); return; }
        await download(stem + x.extension, out instanceof Blob ? out : new Blob([out], { type: x.mime }), x.mime);
        status(t('addon.export.done', { file: stem + x.extension }), false, true);
      }) }, el('i', { className: 'bi bi-box-arrow-up-right', 'aria-hidden': 'true' }), ' ', x.label)));
  }

  const tagLast = (label) => { const c = ST.editor.changes[ST.editor.changes.length - 1]; if (c) c.label = label; };

  function afterEdit() {
    renderChanges();
    ST.bimTotalsInvalidate();
    if (ST.selected !== null) ctx.showProps(ST.selected);
  }

  function renderChanges() {
    ctx.undoHook.settle();
    ST.adviceSrc?.invalidate();   // 0.10 BK.73: a file just opened (or changed): its drawing advice is worked out again
    ctx.syncAccepted();
    if (root.querySelector('[data-eg44-details]')?.open) window.bimcraftPermit?.render();   // 0.10 BK.109: the supporting-documents list follows an edit, undo or redo while its section is open
    if (root.querySelector('[data-issues-details]')?.open) window.bimcraftIssueLog?.render();   // 0.10 BK.46 / BK.48: the issue history follows an edit, undo or redo while its section is open
    window.bimcraftMassOptions?.changed();   // 0.10 BK.44: the massing options list (and what is hidden) follows an edit, undo, redo or open
    window.bimcraftSiteConstraints?.invalidate();   // 0.10 BK.104: walls against building lines and servitudes, re-checked after any edit, undo, redo or open (the plan need not be showing)
    ST.bimShell?.changed();   // calc sheets and reasons live in the IFC: an edit, undo, redo, open or save may have moved them   // 0.7.1 → 0.8: the IFC's accepted problems after an edit, undo or redo
    ST.idsUi?.changed();   // 0.7.1 71.25: re-check against the IDS (and read it again: an undo may have changed it)
    const list = ST.editor ? ST.editor.changes : [];
    ui.changes.hidden = !ST.editor;
    const VERB = { place: t('changes.verb.place'), swap: t('changes.verb.swap'), update: t('changes.verb.update'), remove: t('edit.verb.removed'), paste: t('edit.verb.pasted') };
    const ATTR = { Name: t('prop.name'), ObjectType: t('prop.objtype'), Tag: t('prop.tag'), Description: t('prop.desc') };
    ui.changeList.replaceChildren(...list.slice().reverse().slice(0, 50).map((c) => (VERB[c.kind] || c.verb || c.kind === 'model')
      // a model change with no verb (0.6 DF.25: an assistant's "Assistant: add 4 walls") reads as its label
      ? el('li', {}, el('span', { className: 'bc-change-what' }, (VERB[c.kind] || c.verb) ? t('changes.line', { verb: VERB[c.kind] || c.verb, what: c.label || '#' + c.id }) : c.label || '#' + c.id), c.old ? el('span', { className: 'bc-sub' }, t('changes.was', { old: c.old })) : null)
      : el('li', {},
        el('span', { className: 'bc-change-what' }, t(c.fromType ? 'changes.prop.type' : 'changes.prop', { what: c.label || '#' + c.id, prop: c.kind === 'attr' ? ATTR[c.attr] || c.attr : c.propName })),
        el('span', { className: 'bc-sub' }, t('changes.fromto', { from: fmtVal(c.old), to: fmtVal(c.value) })))));
    if (!list.length) ui.changeList.append(el('li', { className: 'bc-muted' }, t('changes.none')));
    ui.undo.disabled = !list.length;
    ui.save.disabled = !list.length && !ST.editor?.recovered && !ST.editor?.isNew;
    ctx.syncAutosave();
    ui.save.lastChild.textContent = ' ' + (list.length ? t('save.ifc.count', { n: list.length }) : t('save.ifc'));
    syncEdit();
    ST.addons?.changed('model');   // 0.5 AO.7: after an edit, an undo, a rebuild or a new model
    ST.analysisUi?.changed();      // 0.6 LC.4: analysis results go stale, the frame is read again
    ST.pointsUi?.changed();        // 0.6 LC.22: field points made before the change say so
    ST.assetsUi?.changed();        // 0.6 LC.12: assets read again
    ST.phasesUi?.changed();        // 0.8 EG.59: phases and a phase view read again
    if (document.querySelector('[data-eg60-details]')?.open) window.bimcraftFurnish?.render();   // 0.8 EG.60: the rooms may have changed
    ST.tagsUi?.changed();          // 0.8 SU.915 / SU.889 (sx-tags): tags and documents read again
    ST.daylightUi?.changed();      // 0.6 LC.20: results made before the change say so
    renderAddonExports();
  }
  const fmtVal = (v) => v === null || v === undefined || v === '' ? t('prop.empty') : v === true ? t('prop.yes') : v === false ? t('prop.no') : typeof v === 'string' ? '"' + v + '"' : String(v);   // i18n-ignore: quotes round a text value

  function undo() {
    if (!ST.editor) return;
    const c = ST.editor.undo();
    if (!c) return;
    ctx.undoHook.undone();   // 0.8 EG.77
    if (c.journal) { guard(async () => { await rebuild(null); status(t('edit.undid.step', { what: c.label || c.kind })); }); return; }
    status(t('edit.undid', { what: c.kind === 'attr' ? c.attr : c.propName })); afterEdit();
  }

  /** Download a new IFC with every change. The original file is never touched. */
  /** Save as IFC: a NEW file, never the original (desktop: the save dialog, named "<name> (edited).ifc"; browser: a
   *  download, as before). host.js W2.19. */
  async function saveIfc() {
    if (ST.vaultUi) { const ro = await ST.vaultUi.saveBlocked(); if (ro) { status(ro, true); return false; } }   // 0.8 SU.1058: a vault file is saved over only while checked out to you
    if (!ctx.unsavedIn(ST.editor) && !ST.picturesUi?.wantBundle()) return true;
    ST.bimShell?.stampSave?.();   // 0.9 DI.1: the drawing details' save time, only when details were written
    const pk = ST.picturesUi ? await ST.picturesUi.beforeSave(ST.editor, ST.ifcName, { handover: handoverBundleFiles(ST.editor.api, ST.editor.mid) }) : null;   // 0.8 D8.8: pictures kept beside the IFC → a bundle, or a plain IFC with the small ones embedded
    if (pk?.cancel) return false;
    const bytes = pk?.bytes || ST.editor.save();
    let name = pk?.name || (ST.editor.isNew ? ST.ifcName : ST.ifcName.replace(/\.ifc$/i, '') + ' (edited).ifc');   // i18n-ignore: the saved file's name (a new building keeps its own)
    const r = await ctx.fileHost.saveAs({ data: new Blob([bytes], { type: pk?.mime || 'application/x-step' }), name, types: pk?.types || ctx.IFC_TYPES });
    if (!r.ok) { status(r.cancelled ? t('save.cancelled') : (r.error?.message || String(r.error)), !r.cancelled); return false; }
    name = r.name || name;
    const n = ST.editor.changes.length;
    ST.editor.changes = [];   // saved: the downloaded file holds them; start a fresh change list
    ST.savedOnce = true;
    window.ccTotals?.markSaved?.();   // EG.30: "the change since the last save" is measured from here
    ST.editor.recovered = false;
    ST.editor.isNew = false;
    renderChanges();
    status(t('save.done', { file: name, n, bytes: bytes.length.toLocaleString('en-US') }) + (pk?.notice ? ' ' + pk.notice : ''));
    return true;
  }

  return { copyBtn, copyRow, copyAllBar, addonSelection, addonSections, renderAddonExports, tagLast, afterEdit, renderChanges, undo, saveIfc };
}
