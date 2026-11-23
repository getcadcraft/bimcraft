/* SPDX-License-Identifier: Apache-2.0 */
/**
 * documents-ui.js: bimcraft.js's 3 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 bimcraft; no behaviour change).
 * mountDocumentsPanel(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { el } from './ui-util.js';
import { t } from './i18n.js';

export function mountDocumentsPanel(ctx) {
  const { ST, ui, status, guard, renderChanges, open, fileHost, root } = ctx;

  async function openVault() {
    if (!ST.vaultUi) {
      const { installVaultPanel } = await import('./vault/vault-app.js');
      ST.vaultUi = installVaultPanel({
        stage: root.querySelector('.bc-stage'), el, t, print: (m) => status(m), focusCommandLine: () => {}, fileHost, kinds: ['ifc'],
        openFile: (f) => guard(() => open(f)),
        currentFile: () => (ST.editor ? { bytes: ST.editor.save() } : { wrong: true }),
        getRef: () => ST.vaultRef, setRef: (r) => { ST.vaultRef = r; },
        afterCheckin: () => { ST.editor.changes = []; renderChanges(); },
        saveBlob: (name, text, mime) => fileHost.download(new Blob([text], { type: mime }), name, mime),
      });
    }
    await ST.vaultUi.open();
  }

  function section(title, rows) {
    const shown = rows.filter(([, v]) => v !== null && v !== undefined && v !== '');
    if (!shown.length) return null;
    return el('section', { className: 'bc-card-sec' }, el('h2', {}, title),
      el('table', {}, el('tbody', {}, ...shown.map(([k, v]) => el('tr', {}, el('th', { scope: 'row' }, k), el('td', {}, String(v)))))));
  }

  function clearBlankNote() {
    if (ST.blankNote && ui.status.textContent === ST.blankNote) status('');
    ST.blankNote = '';
  }

  return { openVault, section, clearBlankNote };
}
