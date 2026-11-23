/* SPDX-License-Identifier: Apache-2.0 */
/**
 * files-wire.js: bimcraft.js's 0 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountFilesWire(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { t } from './i18n.js';
import { canPickFolder, pickFolder } from './folder-pick.js';

export function mountFilesWire(ctx) {
  const { ui, status, guard, openFolder, open, openSampleHouse, root } = ctx;

  // ---- Choosing files and folders ----
  root.querySelectorAll('[data-pick]').forEach((b) => b.addEventListener('click', () => ui.file.click()));
  root.querySelectorAll('[data-sample-open]').forEach((b) => b.addEventListener('click', openSampleHouse));
  // 2026-11-20: in the lab, /lab/bimcraft?open=<name>.ifc opens a file staff put in /lab-files/ (a made model handed over by link); same open path as a chosen file
  { const labFile = /^\/lab\//.test(location.pathname) ? new URLSearchParams(location.search).get('open') : null;
    if (labFile && /^[a-z0-9][a-z0-9-]{0,79}\.ifc$/.test(labFile)) fetch('/lab-files/' + labFile).then(async (r) => { if (!r.ok) throw new Error('HTTP ' + r.status); await open(new File([await r.blob()], labFile, { type: 'application/octet-stream' }), labFile); }).catch((err) => status(t('ui.hint.trysample.fail', { why: err.message }), true)); }
  // i18n-ignore: CSS, selector, class name or search keywords: no words a person reads (words-11)
  { const regSample = () => window.ccPalette?.register?.([{ id: 'bim-sample', label: t('ui.hint.trysample'), group: 'file', keywords: 'sample example demo try house ifc', run: openSampleHouse }]); if (window.ccPalette) regSample(); else window.addEventListener('load', regSample); }
  root.querySelectorAll('[data-pick-folder]').forEach((b) => b.addEventListener('click', () => {
    if (!canPickFolder()) { ui.folderInput.click(); return; }
    guard(async () => {
      const picked = await pickFolder(ctx.listing);
      if (picked) await openFolder(picked);
    });
  }));
  ui.file.addEventListener('change', () => {
    const f = ui.file.files[0];
    ui.file.value = '';
    if (f) guard(() => open(f, null));
  });
}
