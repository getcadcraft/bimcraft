/* SPDX-License-Identifier: Apache-2.0 */
/**
 * short-stages-wire.js: bimcraft.js's 0 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountShortStagesWire(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { t } from './i18n.js';
import { isTextEntry } from './workspace/commands.js';

export function mountShortStagesWire(ctx) {
  const { ST, ui, status, guard, act, toggleIfcEquipment, checkUpdates, showCredits, revealRightPanel, revealPaletteOf, showTab, stopPlacing, syncPlacebar, moveGhost, toggleSnap, toggleSection, setPressed, toolButton, syncDisplayButtons, exportIfcx, ensureMaps, cloudPressed, openRender, openLive, exportGlb, exportUsd, visAct, measureOff, measureOn, walkOff, walkOn, redrawMeasure, togglePrint, toggle3d, pick3d, openVr, exportDae, openPaint, openViews, visMenu, root } = ctx;

  // ---- short stages (closing 0.7 part 2 § A; as CadCraft's fitBars, 0.5 VP.5): the classic toolbar is CadCraft's band of named
  // groups, over the top of the view. When it would cover more than 30 % of the stage's height (a short window, a laptop at
  // 125–150 %), it drops its words and group names (titles and screen readers keep them), as CadCraft's toolbar does. Not in
  // the phone layout (one row already) or a workspace layout's strip. Measured on the stage's resize only, so it can't loop. ----
  {
    let frame = 0;
    const stageEl = ui.toolbar.parentElement;
    const fit = () => {
      frame = 0;
      root.classList.remove('bc-fit-compact');
      if (document.documentElement.classList.contains('cc-phone')) return;
      if (!ui.toolbar.hidden && ui.toolbar.offsetParent && !ui.toolbar.classList.contains('ws-toolbar-strip') && ui.toolbar.offsetHeight > stageEl.clientHeight * 0.3) { root.classList.add('bc-fit-compact'); return; }
      // 0.10 FX.189 (bim-core-10): the Draw bar too. Its groups row grows with every tool added (84 tools in the lab); when it alone covers more than 30 % of
      // the stage (1600 x 1000 with the plan beside 3D: 566 px of 952), it drops its words and group names as the view toolbar does. Tool option rows stay.
      const mb = root.querySelector('.bc-modelbar:not([hidden])'), gr = mb?.querySelector('.bc-mb-groups');
      if (gr && mb.offsetParent && !mb.closest('.ws-active') && gr.offsetHeight > stageEl.clientHeight * 0.3) root.classList.add('bc-fit-compact');
    };
    const fitSoon = () => { if (!frame) frame = requestAnimationFrame(fit); };
    if (typeof ResizeObserver === 'function') new ResizeObserver(fitSoon).observe(stageEl);
    new MutationObserver(fitSoon).observe(ui.toolbar, { attributes: true, attributeFilter: ['hidden', 'class'] });
    const mbar = root.querySelector('.bc-modelbar');
    if (mbar) { if (typeof ResizeObserver === 'function') new ResizeObserver(fitSoon).observe(mbar); new MutationObserver(fitSoon).observe(mbar, { attributes: true, attributeFilter: ['hidden'] }); }
    fitSoon();
  }
  ui.toolbar.addEventListener('click', (e) => {
    const b = e.target.closest('button');
    if (!b || !ST.viewer) return;
    if (b.dataset.view) ST.viewer.view(b.dataset.view);
    if (b.dataset.toggle === 'edges') { ST.viewer.setEdges(!ST.viewer.edgesOn); syncDisplayButtons(); setPressed('edges', ST.viewer.edgesOn); }
    if (b.dataset.toggle === 'spaces') { ST.viewer.setSpacesVisible(!ST.viewer.spacesOn); setPressed('spaces', ST.viewer.spacesOn); }
    if (b.dataset.toggle === 'section') toggleSection();
    if (b.dataset.toggle === 'measure') { if (ST.meas) measureOff(); else measureOn(); }
    if (b.hasAttribute('data-map-open')) { visMenu.open = false; guard(async () => (await ensureMaps()).open()); }
    if (b.hasAttribute('data-cloud-open')) { visMenu.open = false; if (ST.pc?.has()) cloudPressed(ST.pc.toggleBar()); else ui.cloudInput.click(); }
    if (b.dataset.toggle === 'walk') { if (ST.walking) walkOff(); else walkOn(); }
    if (b.hasAttribute('data-render-open')) guard(openRender);
    if (b.hasAttribute('data-live-open')) guard(() => openLive(false));   // 0.7 RT.3
    if (b.hasAttribute('data-live-window')) guard(() => openLive(true));
    if (b.hasAttribute('data-xr-enter')) guard(openVr);   // 0.6 LC.19
    if (b.hasAttribute('data-glb-export')) guard(() => exportGlb('glb'));
    if (b.hasAttribute('data-gltf-export')) guard(() => exportGlb('gltf'));   // 0.8 DC.22: .gltf for Enscape's asset library   // 0.6 DC.22
    if (b.hasAttribute('data-usd-export')) guard(exportUsd);   // 0.7 XF.8
    if (b.hasAttribute('data-ifcx-export')) guard(exportIfcx);   // 0.9 SU.882 (IFC5 alpha, a lab option)
    if (b.hasAttribute('data-dae-export')) guard(exportDae);   // 0.9 SU.1125 (bim-dae-09)
    if (b.hasAttribute('data-paint-open')) guard(openPaint);
    if (b.hasAttribute('data-saved-views')) guard(openViews);
    if (b.dataset.vis) { visMenu.open = false; visAct(b.dataset.vis); }
    if (b.dataset.libTool === 'library') { revealRightPanel(); revealPaletteOf(ctx.rPanel.querySelector('[data-rtab="library"]')); showTab('library'); }
    if (b.dataset.libTool === 'equipment') toggleIfcEquipment();
    if (b.dataset.libTool === 'updates' && ctx.libraryOn) guard(checkUpdates);
    if (b.dataset.libTool === 'credits') showCredits();
  });
  document.addEventListener('keydown', (e) => {
    if (ST.dwgView && !ui.dwg.hidden && ui.equip.hidden && !e.target.closest('input, textarea, select') && !e.ctrlKey && !e.metaKey && !e.altKey) {
      if (e.key === 'f' || e.key === 'F') { if (ST.view3dOn) ST.view3d.extents(); else ST.dwgView.fit(); return; }
      if (e.key === '3') { guard(toggle3d); return; }
      if (e.key === 'Escape' && ST.view3dOn && ST.view3d?.picked.size) { pick3d(null, false); return; }
      if ((e.key === 'x' || e.key === 'X') && ST.view3dOn) { toggleSection(); return; }
      if ((e.key === 'p' || e.key === 'P') && !ST.view3dOn) { togglePrint(); return; }
    }
    if (ST.placing && !e.target.closest('textarea, dialog')) {
      if (e.key === 'Escape') { e.preventDefault(); stopPlacing(); status(t('place.stopped')); return; }
      if (!e.target.closest('input, select')) {
        if (e.key === 'r' || e.key === 'R') { e.preventDefault(); ST.placing.rot = (ST.placing.rot + 90) % 360; ST.placing.snap = false; syncPlacebar(); moveGhost(ST.placing.last); return; }
        if (e.key === 'Tab') { e.preventDefault(); toggleSnap(); return; }
      }
    }
    // keys typed in a dialog (Settings, …) are the dialog's: Esc there closes it, and must not stop measuring or walking
    // 0.9 D9.3: with only the plan shown, M is the plan's Measure (with the 3D view on screen, M stays the 3D Measure)
    if (!e.defaultPrevented && !isTextEntry(e.target) && !ST.workspace?.active && (e.key === 'm' || e.key === 'M') && !e.shiftKey && !e.ctrlKey && !e.metaKey && !e.altKey && ST.modelUi?.planOnly?.()) { e.preventDefault(); ST.modelUi.useTool('pmeasure'); return; }
    if (e.defaultPrevented || isTextEntry(e.target) || ST.workspace?.active || !ST.viewer || ui.canvasWrap.hidden) return;
    if (e.key === 'f' || e.key === 'F') ST.viewer.view('iso');
    if ((e.key === 'x' || e.key === 'X') && e.shiftKey && !e.ctrlKey && !e.metaKey && !e.altKey && !ST.placing && ST.mode === 'ifc') { e.preventDefault(); visAct('secbox'); return; }
    if ((e.key === 'x' || e.key === 'X') && !e.ctrlKey && !e.metaKey && !e.altKey && !ST.placing) toolButton('section')?.click();
    if (e.key === 'Escape' && ST.walking) { e.preventDefault(); walkOff(); status(t('walk.off')); return; }
    if (e.key === 'Escape' && ST.meas) { e.preventDefault(); if (ST.meas.a) { ST.meas.a = null; redrawMeasure(); status(''); } else { measureOff(); status(t('measure.ended')); } return; }
    if (!e.ctrlKey && !e.metaKey && !e.altKey && ST.mode === 'ifc' && !document.querySelector('dialog[open]')) {
      const k = e.key.toLowerCase();
      if (k === 'm' && !e.shiftKey) { e.preventDefault(); if (ST.meas) measureOff(); else measureOn(); return; }
      if (k === 'h') { e.preventDefault(); visAct(e.shiftKey ? 'all' : 'hide'); return; }
      if (k === 'i' && !e.shiftKey) { e.preventDefault(); visAct('isolate'); return; }
      if (k === 't' && !e.shiftKey) { e.preventDefault(); visAct('ghost'); return; }
    }
    if (e.key === 'Escape' && !e.defaultPrevented) act('select-none');
  });
}
