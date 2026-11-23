/* SPDX-License-Identifier: Apache-2.0 */
/**
 * stage-ui.js: bimcraft.js's 3 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 bimcraft; no behaviour change).
 * mountStageBar(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */

export function mountStageBar(ctx) {
  const { ST, ui, stopPlacing, syncEdit, root } = ctx;

  // ---- Stage + toolbar ----
  function showStage(which) {
    // a drawing, an RVT card, a folder or a point cloud opens inside the ribbon layout too (owner 2026-10-24): it shows the stage as is
    ST.workspace?.stageChanged(which); ST.toolbox?.refresh();
    ui.empty.hidden = true;
    ST.modelUi?.stage(which);
    ui.canvasWrap.hidden = which !== 'ifc';
    ui.toolbar.hidden = which !== 'ifc';
    ctx.usec.bar.hidden = which !== 'ifc' || !ST.cut;   // the section plane bar belongs to the 3D model view
    if (ST.pc?.has()) { const b = root.querySelector('[data-cloudbar]'); if (which !== 'ifc') b.hidden = true; }
    ui.card.hidden = which !== 'rvt';
    ui.folder.hidden = which !== 'folder';
    ui.dwg.hidden = which !== 'dwg';
    ui.ifcEquip.hidden = true;
    if (which !== 'ifc') { stopPlacing(); setPressed('equipment', false, 'lib-tool'); if (ST.meas) ctx.measureOff(); if (ST.walking) ctx.walkOff(); }
    if (which !== 'ifc' && which !== 'dwg') ST.mode = 'none';
    if (which !== 'dwg') ST.dwgOpen = which === 'dwg' ? ST.dwgOpen : null;
    if (which !== 'dwg') ui.layers.hidden = true;   // renderLayers() shows it for a drawing
    if (which !== 'ifc') { ui.treeSec.hidden = true; if (ui.modelsSec) ui.modelsSec.hidden = true; if (ui.findSec) ui.findSec.hidden = true; if (ui.clashSec) ui.clashSec.hidden = true; if (ui.checksSec) ui.checksSec.hidden = true; if (ui.qtoSec) ui.qtoSec.hidden = true; if (ui.fdSec) ui.fdSec.hidden = true; }   // fillTree() / renderModels() show them for a model
    if (which === 'ifc' && ST.viewer) ST.viewer.resize();
    if (which === 'dwg' && ST.dwgView) ST.dwgView.resize();
    if (which !== 'ifc') ST.selInfo = null;
    syncEdit();
  }

  const toolButton = (name, attr = 'toggle') => ui.toolbar.querySelector('[data-' + attr + '="' + name + '"]');
  const setPressed = (name, on, attr = 'toggle') => toolButton(name, attr)?.setAttribute('aria-pressed', on ? 'true' : 'false');

  return { showStage, toolButton, setPressed };
}
