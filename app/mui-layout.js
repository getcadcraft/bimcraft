/* SPDX-License-Identifier: Apache-2.0 */
/**
 * mui-layout.js: model-ui.js's 9 bindings for this topic, moved out of mountModel() unchanged (0.11 PERF.78, perf-finish-11 bimcraft: one module per panel section; no behaviour change).
 * mountMuiLayout(ctx) is called once by mountModel(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables mountModel() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { PlanView } from './model-planview.js';

export function mountMuiLayout(ctx) {
  const { MS, ui, S, ed, refresh, viewRange, setTool, onDown, onUp, onMove, onClick, onDbl, endChain, applyTyped, drawOverlay, host } = ctx;

  // ---- on / off, layout ----
  function canDraw() { return !!(ed() && host.model()); }
  function show(on) {
    S.on = !!on && canDraw();
    ui.toggle.setAttribute('aria-pressed', S.on ? 'true' : 'false');
    ui.wrap.hidden = !S.on;
    ui.levelsSec.hidden = !S.on;
    if (ui.schedSec) ui.schedSec.hidden = !S.on;
    // 0.7 SU.751: side by side, each half of a laptop-sized stage is too small to draw in: start with the plan alone (Split is one click)
    if (S.on && S.layoutAuto && S.layout === 'split' && ui.stageEl.clientWidth && ui.stageEl.clientWidth < 60 * (parseFloat(getComputedStyle(document.documentElement).fontSize) || 16)) S.layout = 'plan';
    applyLayout();
    if (!S.on) { endChain(); setTool('select'); return; }
    if (!MS.pv) {
      MS.pv = new PlanView(ui.canvas, { move: onMove, click: onClick, dblclick: onDbl, down: onDown, up: onUp, leave: () => { S.last = null; S.hover = null; host.coords?.()?.plan(null, ctx.level(), S.planM); host.coords?.()?.dodge?.(null); drawOverlay(); }, contextmenu: () => endChain() });
      MS.pv.padBottom = 40;   // the status line
      // the Draw bar changes height with the tool; content it now covers is brought back into view (only a plan you have not moved)
      MS.pv.barBoxFn = () => { const c = ui.canvas.getBoundingClientRect(), b = ui.bar.getBoundingClientRect(); return b.width > 0 ? { w: b.right - c.left + 12, h: b.bottom - c.top + 12 } : null; };
      if (ui.bar) new ResizeObserver(() => { if (MS.pv && !MS.pv.userMoved && S.on && MS.pv.outsideView()) requestAnimationFrame(() => fitPlan()); }).observe(ui.bar);
      window.bimcraftPlan = { view: MS.pv, state: S, click: (p) => onClick(p, {}), move: (p) => onMove(p, {}), typed: (s) => applyTyped(s), refresh };   // for tests
    }
    refresh(true);
  }
  /** Split stacks the plan over the 3D view when side by side each half would be narrower than 20rem — a narrow window,
   *  wide side panels or a big interface size, where the Draw bar ran out of its half (0.6 DC.101). True when it changed. */
  function stackSplit() {
    const st = ui.stageEl, rem = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
    const on = S.on && S.layout === 'split' && (st.clientWidth < 40 * rem || window.innerWidth <= 900);
    if (st.classList.contains('is-plan-stacked') === on) return false;
    st.classList.toggle('is-plan-stacked', on);
    return true;
  }

  /** The Plan / Split / 3D switches belong to the View group: they show whenever a model is open, whatever Draw is doing
   *  (they were only drawn once Draw had been on, so a model opened with Draw off had no Plan, Split or 3D). */
  function syncLayoutGroup() { if (ui.layoutGroup) ui.layoutGroup.hidden = !canDraw(); }
  function applyLayout() {
    const st = ui.stageEl;
    st.classList.toggle('is-plan-split', S.on && S.layout === 'split');
    st.classList.toggle('is-plan-only', S.on && S.layout === 'plan');
    stackSplit();
    st.style.setProperty('--bc-split', S.split + '%');
    st.style.setProperty('--bc-split-f', String(S.split / 100));   // the same share as a plain number: the workspace layouts' split (workspace/bimcraft-workspace.css, 0.10 BT.11)
    syncLayoutGroup();
    ui.splitter.hidden = !(S.on && S.layout === 'split');
    ui.splitter.setAttribute('aria-valuenow', String(S.split));
    ui.splitter.setAttribute('aria-orientation', st.classList.contains('is-plan-stacked') ? 'horizontal' : 'vertical');
    for (const b of ui.layout) b.setAttribute('aria-pressed', b.dataset.modelLayout === (S.on ? S.layout : '3d') ? 'true' : 'false');
    requestAnimationFrame(() => { host.viewer()?.resize?.(); MS.pv?.resize(); });
    announceView();
  }
  /** 0.9 (owner 2026-11-09): the one place the view mode is read — 'plan' | 'split' | 'model' (3D alone). Every change goes through
   *  applyLayout(), which tells the host (host.viewModeChanged) when it really changed, so the Library's Place button follows it. */
  const viewMode = () => (S.on ? S.layout : 'model');

  function announceView() { const m = viewMode(); if (m === MS.announced) return; MS.announced = m; host.viewModeChanged?.(m); }

  const splitAt = (e) => {
    const b = ui.stageEl.getBoundingClientRect(), stacked = ui.stageEl.classList.contains('is-plan-stacked');
    S.split = Math.max(20, Math.min(80, Math.round((stacked ? (e.clientY - b.top) / b.height : (e.clientX - b.left) / b.width) * 100)));
    applyLayout();
  };

  /** Fit the plan below BimCraft's toolbar and the model bar, which sit over its top. */
  function fitPlan() {
    if (!MS.pv) return;
    MS.pv.resize();   // the pane may just have changed size (Split / Plan)
    const c = ui.canvas.getBoundingClientRect(), b = ui.bar.getBoundingClientRect();
    // the Draw bar floats over the plan's top left: when it is narrow, fit beside it (not under it), else below it
    if (b.width > 0 && b.width < c.width * 0.7) { MS.pv.padLeft = b.right - c.left + 12; MS.pv.padTop = Math.max(0, b.top - c.top) + 12; MS.pv.barBox = { w: MS.pv.padLeft, h: b.bottom - c.top + 12 }; }
    else { MS.pv.padLeft = 0; MS.pv.padTop = Math.max(0, b.bottom - c.top) + 12; MS.pv.barBox = null; }
    const cr = S.data && S.level !== null ? viewRange().crop : null;   // 0.6 DC.117: a cropped view fits its crop
    MS.pv.fit(cr ? { x0: cr[0], y0: cr[1], x1: cr[2], y1: cr[3] } : undefined);
  }

  return { canDraw, show, stackSplit, syncLayoutGroup, applyLayout, viewMode, splitAt, fitPlan };
}
