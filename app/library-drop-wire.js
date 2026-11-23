/* SPDX-License-Identifier: Apache-2.0 */
/**
 * library-drop-wire.js: bimcraft.js's 0 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountLibraryDropWire(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { t } from './i18n.js';
import { dropEntries, dropFolderHandle, fromHandle, fromDropEntries } from './folder-pick.js';

export function mountLibraryDropWire(ctx) {
  const { ST, ui, status, guard, openFolder, applyIfcxOption, openIfcx, isCardDrag, dragOver, dragEnd, dropIt, outsideFiles, open, anyDirty, keepEdits, listing, root, hasFiles } = ctx;

  document.addEventListener('dragover', (e) => {
    if (!isCardDrag(e)) return;
    const target = dragOver(ctx.library.drag, e.clientX, e.clientY);
    if (target) { e.preventDefault(); e.dataTransfer.dropEffect = 'copy'; } else e.dataTransfer.dropEffect = 'none';
  }, true);
  document.addEventListener('dragleave', (e) => { if (isCardDrag(e) && !e.relatedTarget) dragEnd(); }, true);
  document.addEventListener('drop', (e) => {
    if (!isCardDrag(e)) return;   // a file (or anything else) goes on to the file handling below
    e.preventDefault(); e.stopPropagation();
    ST.innerDrag = false;   // the source card may be re-drawn before its dragend
    const d = ctx.library.drag;
    dropIt(d, e.clientX, e.clientY);
  }, true);

  ST.dragDepth = 0;
  // 2026-11-02 (BIMBro): something dragged from inside the page (a Library preview picture) is not a file to open
  ST.innerDrag = false;
  document.addEventListener('dragstart', () => { ST.innerDrag = true; }, true);
  document.addEventListener('dragend', () => { ST.innerDrag = false; }, true);
  document.addEventListener('dragenter', (e) => {
    if (!outsideFiles(e)) return;
    e.preventDefault();
    ST.dragDepth++;
    ui.veil.hidden = false;
  });
  document.addEventListener('dragleave', (e) => {
    if (!outsideFiles(e)) return;
    if (--ST.dragDepth <= 0) { ST.dragDepth = 0; ui.veil.hidden = true; }
  });
  document.addEventListener('dragover', (e) => { if (outsideFiles(e)) e.preventDefault(); });
  document.addEventListener('drop', (e) => {
    if (ST.innerDrag) { ST.innerDrag = false; if (hasFiles(e)) { e.preventDefault(); status(t('lib.drag.place')); } return; }
    if (!hasFiles(e)) return;
    e.preventDefault();
    ST.dragDepth = 0;
    ui.veil.hidden = true;
    const drop = dropEntries(e.dataTransfer);   // must be taken now, inside the event
    const file = e.dataTransfer.files[0];
    guard(async () => {
      if (drop.entries.some((x) => x.isDirectory)) {
        // A dropped folder needs no permission prompt; Chrome/Edge also give a handle we can remember.
        const handle = await dropFolderHandle(drop);
        const picked = handle ? await fromHandle(handle, listing) : await fromDropEntries(drop.entries, listing);
        if (picked) await openFolder(picked);
      } else if (file) {
        await open(file, null);
      }
    });
  });

  // Leaving by a link on the page asks in the page; the browser's own "Leave site?" is left for what no page can
  // catch (closing the tab, reloading, typing an address). After "save first", wait for the download to start.
  ST.leaving = false;
  window.addEventListener('beforeunload', (e) => { if (anyDirty() && !ST.leaving) { e.preventDefault(); e.returnValue = ''; } });
  document.addEventListener('click', async (e) => {
    const a = e.target.closest?.('a[href]');
    if (!a || !anyDirty() || e.defaultPrevented || e.button || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey || a.hasAttribute('download') || (a.target && a.target !== '_self')) return;
    const url = new URL(a.href, location.href);
    if (!/^https?:$/.test(url.protocol) || (url.hash && url.href.split('#')[0] === location.href.split('#')[0])) return;
    e.preventDefault();
    if (await keepEdits()) return;
    ST.leaving = true;
    setTimeout(() => location.assign(url.href), anyDirty() ? 0 : 800);
  });

  applyIfcxOption();
  root.querySelectorAll('[data-ifcx-open]').forEach((b) => b.addEventListener('click', () => root.querySelector('[data-ifcx-input]')?.click()));
  root.querySelector('[data-ifcx-input]')?.addEventListener('change', (e) => {
    const files = [...e.target.files];
    e.target.value = '';
    if (files.length) guard(() => openIfcx(files, null, { beside: true }));
  });

  /** The 3D view, made on the first IFC model or point cloud. */
  ST.liveTex = null;
}
