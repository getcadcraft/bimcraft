/* SPDX-License-Identifier: Apache-2.0 */
/**
 * edit-menu-wire.js: bimcraft.js's 1 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountEditMenuWire(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { CLIP_KEY } from './clipboard.js';
import { AREA_KEY } from './areaclip.js';

export function mountEditMenuWire(ctx) {
  const { ST, ui, status, guard, syncEdit, act, currentClip, whyNot, picks, editMenu, NOT_BUILT, root } = ctx;

  /** The element a placement clip was copied from, when it is still in this open model as that same item. */
  ST.srcMemo = { k: '', p: null };   // placements() reads every property set: once per clip and model state
  window.addEventListener('storage', (e) => { if (e.key === CLIP_KEY || e.key === AREA_KEY || e.key === null) syncEdit(); });   // another tab (or MarkupCraft's Copy area) copied

  ui.toolbar.addEventListener('click', (e) => {
    const b = e.target.closest('[data-act]');
    if (!b) return;
    if (editMenu.contains(b)) editMenu.open = false;
    act(b.dataset.act);
  });
  // Every toolbar menu (Edit's More, Show): closes on a click elsewhere, one open at a time, arrows move, Esc closes.
  const toolMenus = [...ui.toolbar.querySelectorAll('details.bc-menu')];
  document.addEventListener('click', (e) => { for (const m of toolMenus) if (m.open && !m.contains(e.target)) m.open = false; });
  for (const menu of toolMenus) {
    // The list opens toward the side of the stage with room (More usually ends the first row, at the right).
    // Decided on the click, before the list shows, so it never flashes on the wrong side.
    menu.querySelector('summary').addEventListener('click', () => {
      if (menu.open) return;   // this click closes it
      const list = menu.querySelector('.bc-menu-list'), stage = root.querySelector('.bc-stage').getBoundingClientRect();
      const left = menu.getBoundingClientRect().left, need = parseFloat(getComputedStyle(list).minWidth) || 240;
      menu.classList.toggle('is-right', left + need > stage.right - 4);
    });
    menu.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menu.open) { e.preventDefault(); e.stopPropagation(); menu.open = false; menu.querySelector('summary').focus(); }
      if ((e.key === 'ArrowDown' || e.key === 'ArrowUp') && menu.open) {
        const items = [...menu.querySelectorAll('[role="menuitem"]')], i = items.indexOf(document.activeElement);
        e.preventDefault();
        items[(i + (e.key === 'ArrowDown' ? 1 : items.length - 1 + (i < 0 ? 1 : 0))) % items.length].focus();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.defaultPrevented || e.altKey) return;
    const t = e.target;
    if (t.closest?.('input, textarea, select, [contenteditable="true"], dialog, [data-help-panel], [data-app-settings]')) return;
    if (document.querySelector('dialog[open]')) return;
    if (ST.workspace?.active) return;   // F28-A exposes only its bounded commands; no hidden wall delete/copy.
    const mod = e.ctrlKey || e.metaKey, k = e.key.toLowerCase();
    if (ST.mode === 'dwg' && !ui.dwg.hidden && mod && k === 'c' && !e.shiftKey) {
      if (String(window.getSelection?.() || '')) return;   // copying text selected on the page: the browser's own copy
      status(NOT_BUILT.dwg);
      return;
    }
    if (ST.mode !== 'ifc' || !ST.editor || ui.canvasWrap.hidden) return;
    let name = null;
    if (mod) {
      if (k === 'c' && !e.shiftKey) { if (String(window.getSelection?.() || '')) return; name = 'copy'; }
      else if (k === 'x' && !e.shiftKey) name = 'cut';
      else if (k === 'v' && !e.shiftKey && ST.picturesUi?.wantsKey({ own: currentClip(), ownOk: !whyNot('paste', { area: false }) })) {
        // 0.8 D8.15: not prevented, so the browser's paste event brings the system clipboard's picture (below); if no paste event
        // comes (a browser that sends none without a text field), Paste runs as from the menu
        ST.pasteKey = setTimeout(() => { ST.pasteKey = 0; act('paste'); }, 400);
        return;
      }
      else if (k === 'v') name = e.shiftKey ? 'paste-in-place' : 'paste';
      else if (k === 'd' && !e.shiftKey) name = 'duplicate';
      else if (k === 'a' && !e.shiftKey) name = 'select-all';
      else if (k === 'y' || (k === 'z' && e.shiftKey)) name = 'redo';
    } else if (e.key === 'Delete' && !e.shiftKey) {
      if (!picks().length) return;
      name = 'delete';
    }
    if (!name) return;
    e.preventDefault();
    act(name);
  });
  /** 0.8 D8.15: Ctrl+V let through above. A picture on the system clipboard → a picture on the plan (sized when it is the copied
   *  area's, picture-paste.js); no picture there → the newer of BimCraft's clip and the copied area, as Edit › Paste. */
  ST.pasteKey = 0;
  document.addEventListener('paste', (e) => {
    if (!ST.pasteKey) return;   // only a Ctrl+V this page let through: a paste into a field, or one the shell handled, stays theirs
    clearTimeout(ST.pasteKey); ST.pasteKey = 0;
    if (e.target.closest?.('input, textarea, select, [contenteditable="true"]')) return;
    const file = [...(e.clipboardData?.items || [])].find((it) => it.kind === 'file' && /^image\//.test(it.type))?.getAsFile() || null;
    e.preventDefault();
    const own = currentClip(), ownOk = !whyNot('paste', { area: false });
    guard(async () => { if (!(await ST.picturesUi.paste({ own, ownOk, file }))) act('paste'); });
  });
  syncEdit();
}
