/* SPDX-License-Identifier: Apache-2.0 */
/**
 * section-ui.js: bimcraft.js's 21 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 bimcraft; no behaviour change).
 * mountSection(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { t } from './i18n.js';
import { getDisplayUnits, fmtLen } from './model-units.js';
import { cleanVolume, boxGrips, MAX_CELLS, FACE_AXES, MAX_PLANES, MAX_TILT, dragDelta, dragBox } from './section-volume.js';
import { el } from './ui-util.js';

export function mountSection(ctx) {
  const { ST, ui, status, root } = ctx;

  const SEC_HINT = () => ({ top: t('sec.hint.top'), front: t('sec.hint.front'), side: t('sec.hint.side') });
  const metres = (v) => (Math.round(v * 1000) / 1000).toFixed(3).replace(/\.?0+$/, '') || '0';
  /** What the bar cuts: the drawing's 3D view while it shows, else the IFC viewer. */
  const secOnDwg = () => ST.view3dOn && !ui.dwg.hidden;
  const secView = () => (secOnDwg() ? ST.view3d : ST.viewer);
  const secUnit = () => (secOnDwg() ? (ST.dwg3d?.compiled?.units || t('sec.units')) : getDisplayUnits() === 'ftin' ? 'ft–in' : getDisplayUnits() === 'ftdec' ? 'ft' : getDisplayUnits());
  const secText = (v) => secOnDwg() ? metres(v) : fmtLen(v * 1000, getDisplayUnits());
  const secBound = (v) => secOnDwg() ? `${metres(v)} ${secUnit()}` : fmtLen(v * 1000, getDisplayUnits(), { unit: true });

  function buildingTurn() {
    if (!ST.editor || !ST.model) return 0;
    if (ST.turnOf?.model !== ST.model) { let deg = 0; try { deg = ST.editor.placer().planRotation(null); } catch (e) { deg = 0; } ST.turnOf = { model: ST.model, deg: deg > 45 ? deg - 90 : deg }; }
    return ST.turnOf.deg;
  }
  // 0.6 DC.57 (Discord: "the model imports at an angle", "section cuts don't line up"): with Settings › BimCraft › A building
  // turned in its site = Square to the building (the default), such a building is seen square — the view presets, the view
  // cube's faces and every new section follow its walls; the cube's compass keeps the model's north. 'placed' = the
  // model's axes, as in 0.5 (the section bar's "Square to the building" still turns a cut either way).
  const viewTurnRad = () => {
    if (ctx.settings.turned !== 'square' || ST.mode !== 'ifc') return 0;
    const d = buildingTurn();
    return Math.abs(d) < 0.5 ? 0 : d * Math.PI / 180;
  };
  function applyViewTurn(look = false) {
    if (!ST.viewer) return;
    const a = viewTurnRad(), was = ST.viewer.viewTurn;
    ST.viewer.setViewTurn(a);
    ST.cube3d?.setNorth(-a);
    if (look && a !== was) ST.viewer.view(ctx.settings.view);
  }
  /** A new cut starts in the view frame (square to a turned building when the setting says so). */
  const startCutTurn = () => { if (!secOnDwg()) ST.viewer?.setSectionTurn(viewTurnRad()); };
  function syncTurn() {
    if (!ctx.turnBtn) return;
    const deg = secOnDwg() ? 0 : buildingTurn();
    ctx.turnBtn.hidden = Math.abs(deg) < 0.5;
    if (ctx.turnBtn.hidden && ST.viewer?.sectionTurn) ST.viewer.setSectionTurn(0);
    ctx.turnBtn.setAttribute('aria-pressed', ST.viewer?.sectionTurn ? 'true' : 'false');
  }

  function applySection() {
    const v = secView();
    if (!v || !ST.cut) return;
    syncTurn();
    ctx.ubox.boxBtn.hidden = secOnDwg();   // the box is for IFC models
    ctx.ubox.fill.hidden = secOnDwg();     // so are filled cut faces (drawings are lines and faces, not solids)
    ctx.ubox.fill.setAttribute('aria-pressed', ST.viewer?.capsOn ? 'true' : 'false');
    if (ST.cut.axis === 'box' && secOnDwg()) ST.cut.axis = 'top';
    ctx.ubox.panel.hidden = ST.cut.axis !== 'box';
    ctx.ubox.plane.hidden = ST.cut.axis === 'box';
    if (ST.cut.axis === 'box') { applyBox(); return; }
    ST.viewer?.setGrips(null);
    const [, max] = v.sectionRange(ST.cut.axis);
    if (ST.cut.offset === null || ST.cut.offset > max) ST.cut.offset = ST.cut.axis === 'top' ? Math.min(max, max * 0.5) : max * 0.5;
    v.setSection(ST.cut);
    ctx.usec.bar.hidden = false;
    ctx.usec.range.max = String(max || 1);
    ctx.usec.range.step = String((max || 1) / 1000);
    ctx.usec.range.value = String(ST.cut.offset);
    if (document.activeElement !== ctx.usec.offset) ctx.usec.offset.value = secText(ST.cut.offset);
    ctx.usec.hint.textContent = SEC_HINT()[ST.cut.axis];
    if (ctx.usec.unit) ctx.usec.unit.textContent = secUnit();
    ctx.usec.bar.querySelectorAll('[data-sec-axis]').forEach((b) => b.setAttribute('aria-pressed', b.dataset.secAxis === ST.cut.axis ? 'true' : 'false'));
    ctx.usec.flip.setAttribute('aria-pressed', ST.cut.flip ? 'true' : 'false');
    placeSectionBar();
    if (secOnDwg()) ctx.ui3.bar.querySelector('[data-v3="section"]')?.setAttribute('aria-pressed', 'true');
    else { ctx.setPressed('section', true); if (ST.selected !== null && ST.selected !== undefined) ST.viewer.select([...ST.viewer.selection]); }
  }
  /** The bar sits at the top of the 3D view it cuts (the right half in Split, the lower half when Split is stacked), under
   *  the view's toolbar and under the plan's Draw bar wherever they cover that view, however many rows each wraps to
   *  (0.6 DC.101: in Split and Plan only it lay under the Draw bar). In px, placed again whenever any of them changes. No
   *  taller than the room left in the view (it scrolls), so a short pane — Split stacked at a big interface size — never
   *  pushes the box's controls off the window. */
  function placeSectionBar() {
    const pane = (secOnDwg() ? ctx.ui3.wrap : ui.canvasWrap)?.getBoundingClientRect();
    if (!pane?.width) return;
    const rem = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16, gap = 0.4 * rem, side = 0.75 * rem;
    const st = ctx.usec.bar.parentElement.getBoundingClientRect();
    let top = pane.top + gap;
    for (const o of [secOnDwg() ? ctx.ui3.bar : ui.toolbar, root.querySelector('[data-plan-wrap]:not([hidden]) [data-modelbar]')]) {
      if (!o || o.hidden || !o.offsetParent) continue;
      const r = o.getBoundingClientRect();
      if (r.height && r.right > pane.left + 1 && r.left < pane.right - 1 && r.bottom > pane.top) top = Math.max(top, r.bottom + gap);
    }
    ctx.usec.bar.style.setProperty('--bc-sec-top', (top - st.top).toFixed(1) + 'px');
    ctx.usec.bar.style.setProperty('--bc-sec-left', (pane.left - st.left + side).toFixed(1) + 'px');
    ctx.usec.bar.style.setProperty('--bc-sec-maxw', Math.max(10 * rem, pane.width - 2 * side).toFixed(1) + 'px');
    ctx.usec.bar.style.setProperty('--bc-sec-maxh', Math.max(6 * rem, Math.min(pane.bottom, st.bottom) - top - gap).toFixed(1) + 'px');
  }

  function sectionOff() {
    ST.cut = null;
    ST.viewer?.setSectionTurn?.(0);   // the next section starts on the model's axes again
    ST.viewer?.setSection(null);
    ST.viewer?.setGrips(null);
    ST.view3d?.setSection(null);
    ctx.usec.bar.hidden = true;
    ctx.setPressed('section', false);
    ctx.ui3.bar?.querySelector('[data-v3="section"]')?.setAttribute('aria-pressed', 'false');
  }
  function toggleSection() { if (ST.cut) sectionOff(); else { ST.cut = { axis: 'top', offset: null, flip: false }; startCutTurn(); applySection(); } }

  function applyBox() {
    const size = ST.viewer.sizeIfc();
    if (!ST.cut.cells) ST.cut.cells = [{ box: ST.cut.box || { min: [0, 0, 0], max: [...size] } }];
    ST.cut.cell = Math.max(0, Math.min(ST.cut.cells.length - 1, ST.cut.cell | 0));
    if (ST.cut.box !== ST.cut.cells[ST.cut.cell].box) ST.cut.cells[ST.cut.cell] = { ...ST.cut.cells[ST.cut.cell], box: ST.cut.box || { min: [0, 0, 0], max: [...size] } };
    ST.cut.cells = cleanVolume(ST.cut.cells, size);
    ST.cut.box = ST.cut.cells[ST.cut.cell].box;
    ST.viewer.setSection({ axis: 'box', cells: ST.cut.cells });
    ST.viewer.setGrips(boxGrips(ST.cut.box), ST.viewer.gripHover);
    ctx.usec.bar.hidden = false;
    ctx.ubox.panel.querySelectorAll('[data-box-axis]').forEach((row, k) => {
      const from = row.querySelector('[data-box-from]'), to = row.querySelector('[data-box-to]');
      for (const r of [from, to]) { r.max = String(size[k] || 1); r.step = String((size[k] || 1) / 1000); }
      from.value = String(ST.cut.box.min[k]); to.value = String(ST.cut.box.max[k]);
      row.querySelector('[data-box-val]').textContent = t('sec.box.val', { from: secBound(ST.cut.box.min[k]), to: secBound(ST.cut.box.max[k]) });
    });
    renderShape();
    ctx.usec.bar.querySelectorAll('[data-sec-axis]').forEach((b) => b.setAttribute('aria-pressed', b.dataset.secAxis === 'box' ? 'true' : 'false'));
    placeSectionBar();
    ctx.setPressed('section', true);
    if (ST.viewer.selection.size) ST.viewer.select([...ST.viewer.selection]);
  }

  /** The box list, the active cell's tilt and its extra planes. Inputs being typed in keep their text. */
  function renderShape() {
    const cells = ST.cut.cells, cell = cells[ST.cut.cell];
    ctx.ushape.cell.replaceChildren(...cells.map((_, i) => el('option', { value: String(i) }, t('sec.cell', { n: i + 1 }))));
    ctx.ushape.cell.value = String(ST.cut.cell);
    ctx.ushape.remove.hidden = cells.length < 2;
    ctx.ushape.add.disabled = cells.length >= MAX_CELLS;
    const f = ctx.ushape.face.value || 'x0', [ua, ub] = FACE_AXES[f], [ta, tb] = cell.tilt[f] || [0, 0];
    ctx.ushape.alabel.textContent = t('sec.tilt.along', { axis: ctx.AXIS[ua] });
    ctx.ushape.blabel.textContent = t('sec.tilt.along', { axis: ctx.AXIS[ub] });
    if (document.activeElement !== ctx.ushape.a) ctx.ushape.a.value = String(ta);
    if (document.activeElement !== ctx.ushape.b) ctx.ushape.b.value = String(tb);
    const typing = ctx.ushape.planes.contains(document.activeElement);
    if (!typing || ctx.ushape.planes.children.length !== cell.planes.length) {
      ctx.ushape.planes.replaceChildren(...cell.planes.map((q, i) => el('span', { className: 'bc-sec-planerow', 'data-sec-plane-row': String(i) },
        el('span', { className: 'bc-sec-boxlbl' }, t('sec.plane.n', { n: i + 1 })),
        el('label', { title: t('sec.plane.az.title') }, t('sec.plane.az'), ' ', el('input', { type: 'number', className: 'bc-input bc-num', step: '5', min: '0', max: '360', value: String(Math.round(q.az * 10) / 10), 'data-pl': 'az' }), ' °'),
        el('label', { title: t('sec.plane.el.title') }, t('sec.plane.el'), ' ', el('input', { type: 'number', className: 'bc-input bc-num', step: '5', min: '-90', max: '90', value: String(Math.round(q.el * 10) / 10), 'data-pl': 'el' }), ' °'),
        el('label', { title: t('sec.plane.off.title') }, t('sec.plane.off'), ' ', el('input', { type: 'text', className: 'bc-input bc-num', value: secText(q.off), 'data-pl': 'off' })),
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-sec-plane-remove': String(i), 'aria-label': t('sec.plane.remove', { n: i + 1 }) }, '×'))));
    }
    ctx.ushape.planeAdd.disabled = cell.planes.length >= MAX_PLANES;
    ctx.ushape.note.textContent = ST.viewer.section?.empty ? t('sec.box.empty') : '';
  }

  const setTilt = (a, b) => {
    const cell = ST.cut.cells[ST.cut.cell], f = ctx.ushape.face.value;
    const cl = (v) => Math.max(-MAX_TILT, Math.min(MAX_TILT, Number.isFinite(v) ? v : 0));
    if (Math.abs(a) > MAX_TILT || Math.abs(b) > MAX_TILT) status(t('sec.tilt.max', { n: MAX_TILT }));
    cell.tilt = { ...cell.tilt, [f]: [cl(a), cl(b)] };
    applyBox();
  };

  /**
   * Section box round the pick (0.4 B4; 0.5 WL.2: the margin is Settings › BimCraft › Section box, default 300 mm): from the
   * box's own button, the Show menu or Shift+X; turns the section box on when it is off. A volume of several boxes keeps the
   * others: the box being edited goes round the pick.
   */
  function boxRoundPick() {
    if (!ST.viewer || ST.mode !== 'ifc') return;
    if (!ST.viewer.selection.size) { status(t('sec.box.nopick')); return; }
    const b = ST.viewer.boxAround([...ST.viewer.selection], ctx.settings.boxMargin / 1000);
    if (!b) return;
    if (!ST.cut) ST.cut = { axis: 'box', offset: null, flip: false };
    ST.cut.axis = 'box';
    ST.cut.box = b;
    applySection();
    ST.viewer.frameKeys([...ST.viewer.selection]);
    status(t('sec.box.picked', { n: ST.viewer.selection.size, margin: ctx.settings.boxMargin }));
  }

  function onBoxGrip(phase, i, e) {
    if (ST.hot3d && !(ST.cut && ST.cut.axis === 'box')) { ST.hot3d.on(phase, i, e); return; }   // 0.8 BIM-FAM-MORE: a family's hotspots in the 3D view
    if (!ST.cut || ST.cut.axis !== 'box' || !ST.cut.cells) { ST.gripDrag = null; return; }
    if (phase === 'start') { const g = ST.viewer.grips[i]; ST.gripDrag = { g, box: { min: [...ST.cut.box.min], max: [...ST.cut.box.max] } }; return; }
    if (!ST.gripDrag) return;
    const r = ST.viewer.rayIfc(e.clientX, e.clientY), d = dragDelta(r, ST.gripDrag.g.p, ST.gripDrag.g.axes, r.view);
    if (d) { ST.cut.box = dragBox(ST.gripDrag.box, ST.gripDrag.g.faces, d, ST.viewer.sizeIfc()); applyBox(); }
    if (phase === 'end') {
      ST.gripDrag = null;
      const B = ST.cut.box;
      status(t('sec.box.dragged', { x: t('sec.box.val', { from: secBound(B.min[0]), to: secBound(B.max[0]) }), y: t('sec.box.val', { from: secBound(B.min[1]), to: secBound(B.max[1]) }), z: t('sec.box.val', { from: secBound(B.min[2]), to: secBound(B.max[2]) }) }));
    }
  }

  return { metres, secOnDwg, secView, secUnit, secText, buildingTurn, applyViewTurn, startCutTurn, applySection, placeSectionBar, sectionOff, toggleSection, applyBox, renderShape, setTilt, boxRoundPick, onBoxGrip };
}
