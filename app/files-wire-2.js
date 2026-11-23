/* SPDX-License-Identifier: Apache-2.0 */
/**
 * files-wire-2.js: bimcraft.js's 0 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountFilesWire2(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { offerRecovery } from './recover-offer.js';
import { t } from './i18n.js';
import { IFC_BASE, IFC_WHOLE, recoverIfc } from "./history/ifc-journal.js";
import { recoverPictures } from './autosave-pictures.js';
import { putBytes } from './picture-store.js';
import { IfcFile } from "./ifc/model.js";
import { fromInput } from './folder-pick.js';

export function mountFilesWire2(ctx) {
  const { ST, ui, status, guard, rebuild, startPlacing, renderChanges, afterEdit, openFolder, showFolder, open, openHost, renderRecent, fileHost, autosave } = ctx;

  offerRecovery({ autosave, status, t, statusText: () => ui.status.textContent, onRecover: async (rec) => {
    const base = String(rec.meta?.name || 'model.ifc').replace(/\.ifc$/i, '');
    const journaled = rec.data && (rec.data.kind === IFC_BASE || rec.data.kind === IFC_WHOLE);   // a journal copy: the opened bytes + the changes → the IFC (history/ifc-journal.js)
    if (journaled) for (const [loc, bytes] of recoverPictures(rec)) putBytes(loc, bytes);   // the pictures the copy carried, back in the store before the model reads its references
    const data = journaled ? new Blob([recoverIfc(rec, IfcFile)], { type: 'application/x-step' }) : rec.data instanceof Blob ? rec.data : new Blob([rec.data], { type: 'application/x-step' });
    await guard(() => open(new File([data], base + '.ifc', { type: 'application/x-step' }), null));
    if (ST.mode !== 'ifc' || !ST.editor) throw new Error(t('recover.failed'));
    ST.editor.recovered = true;
    renderChanges();
    status(t('recover.done', { file: base + '.ifc', n: rec.meta?.changes || 0 }));
  } });
  fileHost.onOpenFiles((files) => guard(() => openHost(files[0])));
  fileHost.launchFiles().then((files) => { if (files[0]) guard(() => openHost(files[0])); });
  // Studio Live (0.5 LV.21, live.js): the open model for the adapter; `live` = the session's adapter while one runs
  window.bimcraftLive = {
    live: null,
    get editor() { return ST.editor; }, get name() { return ST.ifcName; },
    get viewer() { return ST.viewer; },   // 0.9 SU.1112: the others' cursors are drawn over it (live.js presenceView)
    open: (bytes, name) => { window.bimcraftLive.joining = true; return guard(() => ctx.openIfc(bytes, new File([bytes], name, { type: 'application/x-step' }))); },
    refresh: (geometry) => { if (!ST.editor) return; if (geometry) guard(() => rebuild(null)); else afterEdit(); },
    status: (m) => status(m),
  };
  // …and from a link (#live=<code> on a host's LAN page, ?live=<ROOM>#<secret> from an invite): join; the model comes from the host
  if (/[#&]live=|[?&]live=/.test(location.hash + location.search)) import('./live.js').then((m) => m.joinFromPage(window.bimcraftLive, fileHost), (err) => status(err.message, true));
  // 0.7 LC.1 (massing): a model handed over from another app (?handoff=<id>, CivilCraft's "Develop in BimCraft"): opened as if it had been dropped
  if (/[?&]handoff=/.test(location.search)) import('./handoff-in.js').then((m) => m.receiveHandoff({ search: location.search, open: async (f) => { if (ST.siteCtxUi && await ST.siteCtxUi.receive(f)) return; return guard(() => open(f, null)); }, status })).catch((err) => status(err.message, true));
  // 0.8 EG.78 (studio_PART_2): a library item dragged here from another app (PartCraft's part) through Studio's drag module — drop-item.js
  if (window.cadcraftStudio?.drag) Promise.all([import('./drop-item.js'), import('./libitem.js')]).then(([m, L]) => window.cadcraftStudio.drag.accept(m.dropHandlers({ L, startPlacing, get viewer() { return ST.viewer; }, status, t, ready: () => (ST.mode !== 'ifc' || !ST.editor ? t('place.need.ifc') : null) }))).catch((err) => status(err.message, true));
  ui.folderInput.addEventListener('change', () => {
    const picked = fromInput(ui.folderInput.files);
    ui.folderInput.value = '';
    if (picked) guard(() => openFolder(picked));
  });
  ui.back.addEventListener('click', () => { if (ST.folder) showFolder(); });

  renderRecent();
}
