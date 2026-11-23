/* SPDX-License-Identifier: Apache-2.0 */
/**
 * section-box-wire.js: bimcraft.js's 0 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountSectionBoxWire(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { MAX_CELLS, MAX_PLANES } from './section-volume.js';
import { t } from './i18n.js';
import { parseLen, getDisplayUnits } from './model-units.js';

export function mountSectionBoxWire(ctx) {
  const { ST, status, applyBox, renderShape, setTilt, boxRoundPick, secOnDwg, applySection, sectionOff, secView, secUnit, secText, metres, startCutTurn, usec, ubox, ushape } = ctx;

  ushape.cell.addEventListener('change', () => { if (ST.cut?.cells) { ST.cut.cell = Number(ushape.cell.value) || 0; ST.cut.box = ST.cut.cells[ST.cut.cell].box; applyBox(); } });
  ushape.add.addEventListener('click', () => {
    if (!ST.cut?.cells) return;
    if (ST.cut.cells.length >= MAX_CELLS) { status(t('sec.cell.max', { n: MAX_CELLS })); return; }
    // a new box starts as a copy of this one moved half its size along X (or back, when that runs off the model)
    const size = ST.viewer.sizeIfc(), b = ST.cut.box, w = b.max[0] - b.min[0];
    const dx = b.max[0] + w / 2 <= size[0] ? w / 2 : -Math.min(b.min[0], w / 2);
    const box = { min: [b.min[0] + dx, b.min[1], b.min[2]], max: [b.max[0] + dx, b.max[1], b.max[2]] };
    ST.cut.cells.push({ box, tilt: {}, planes: [] });
    ST.cut.cell = ST.cut.cells.length - 1; ST.cut.box = box;
    applyBox();
    status(t('sec.cell.added', { n: ST.cut.cells.length }));
  });
  ushape.remove.addEventListener('click', () => {
    if (!ST.cut?.cells || ST.cut.cells.length < 2) return;
    ST.cut.cells.splice(ST.cut.cell, 1);
    ST.cut.cell = Math.max(0, ST.cut.cell - 1); ST.cut.box = ST.cut.cells[ST.cut.cell].box;
    applyBox();
  });
  ushape.face.addEventListener('change', () => { if (ST.cut?.cells) renderShape(); });
  for (const inp of [ushape.a, ushape.b]) inp.addEventListener('input', () => { if (ST.cut?.cells && inp.value.trim() !== '' && inp.value.trim() !== '-') setTilt(Number(ushape.a.value), Number(ushape.b.value)); });
  ubox.panel.querySelector('[data-sec-tilt-level]').addEventListener('click', () => { if (ST.cut?.cells) { ushape.a.value = ushape.b.value = '0'; setTilt(0, 0); } });
  ushape.planeAdd.addEventListener('click', () => {
    if (!ST.cut?.cells) return;
    const cell = ST.cut.cells[ST.cut.cell];
    if (cell.planes.length >= MAX_PLANES) { status(t('sec.plane.max', { n: MAX_PLANES })); return; }
    // a vertical plane cutting off the box's +X +Y corner, halfway between the centre and the corner
    const half = Math.hypot(cell.box.max[0] - cell.box.min[0], cell.box.max[1] - cell.box.min[1]) / 2;
    cell.planes = [...cell.planes, { az: 45, el: 0, off: Math.round(half * 0.5 * 100) / 100 }];
    applyBox();
    ushape.planes.lastElementChild?.querySelector('input')?.focus();
  });
  ushape.planes.addEventListener('input', (e) => {
    const row = e.target.closest('[data-sec-plane-row]'), k = e.target.dataset.pl;
    if (!row || !k || !ST.cut?.cells) return;
    const v = k === 'off' ? parseLen(e.target.value, getDisplayUnits()) / 1000 : Number(String(e.target.value).replace(',', '.'));
    if (!Number.isFinite(v) || e.target.value.trim() === '') return;
    const cell = ST.cut.cells[ST.cut.cell], i = Number(row.dataset.secPlaneRow);
    cell.planes = cell.planes.map((q, j) => (j === i ? { ...q, [k]: v } : q));
    applyBox();
  });
  ushape.planes.addEventListener('click', (e) => {
    const b = e.target.closest('[data-sec-plane-remove]');
    if (!b || !ST.cut?.cells) return;
    const cell = ST.cut.cells[ST.cut.cell];
    cell.planes = cell.planes.filter((_, j) => j !== Number(b.dataset.secPlaneRemove));
    applyBox();
  });
  ubox.panel.addEventListener('input', (e) => {
    const row = e.target.closest('[data-box-axis]');
    if (!row || !ST.cut || ST.cut.axis !== 'box') return;
    const k = ['x', 'y', 'z'].indexOf(row.dataset.boxAxis);
    const from = Number(row.querySelector('[data-box-from]').value), to = Number(row.querySelector('[data-box-to]').value);
    if (e.target.hasAttribute('data-box-from')) ST.cut.box.min[k] = Math.min(from, to); else ST.cut.box.max[k] = Math.max(from, to);
    applyBox();
  });
  ubox.panel.addEventListener('click', (e) => {
    if (!ST.cut || ST.cut.axis !== 'box') return;
    if (e.target.closest('[data-sec-box-pick]')) boxRoundPick();
    else if (e.target.closest('[data-sec-box-all]')) { ST.cut.box = null; applyBox(); }
  });
  // Grips (0.5 WL.2): a face grip moves that face, an edge grip the two faces meeting there, a corner all three; the box
  // being edited follows the pointer (section-volume.js dragDelta → dragBox), the sliders with it.
  ST.gripDrag = null;
  ST.hot3d = null;   // { on(phase, i, e) } while a family's hotspot grips are in the 3D view (host.grips3d)
  usec.bar.addEventListener('click', (e) => {
    const b = e.target.closest('button');
    if (!b || !ST.cut) return;
    if (b.dataset.secAxis) {
      if (b.dataset.secAxis === 'box' && secOnDwg()) { status(t('sec.box.ifc')); return; }
      if (b.dataset.secAxis === 'box') { if (ST.cut.axis !== 'box') { ST.cut.axis = 'box'; applySection(); } return; }
      if (b.dataset.secAxis !== ST.cut.axis) {
        ST.cut.axis = b.dataset.secAxis; ST.cut.offset = null; applySection();
        if (secOnDwg()) ST.view3d.standard(ST.cut.axis === 'top' ? 'iso' : ST.cut.axis === 'side' ? 'right' : 'front');
        else ST.viewer.view(ST.cut.axis === 'top' ? 'iso' : ST.cut.axis);
      }
    }
    else if (b.hasAttribute('data-sec-flip')) { ST.cut.flip = !ST.cut.flip; applySection(); }
    else if (b.hasAttribute('data-sec-fill')) { if (secOnDwg()) { status(t('sec.fill.dwg')); return; } ST.viewer.setCaps(!ST.viewer.capsOn); b.setAttribute('aria-pressed', ST.viewer.capsOn ? 'true' : 'false'); }
    else if (b.hasAttribute('data-sec-off')) sectionOff();
  });
  usec.range.addEventListener('input', () => { if (ST.cut) { ST.cut.offset = Number(usec.range.value); applySection(); } });
  usec.offset.addEventListener('change', () => {
    if (!ST.cut) return;
    const txt = usec.offset.value.trim().replace(',', '.');
    const [, max] = secView().sectionRange(ST.cut.axis);
    let v;
    if (secOnDwg()) {   // drawing units, as the drawing says
      v = Number(txt);
      if (txt === '' || !Number.isFinite(v)) { status(t('sec.dwg.type', { units: secUnit() }), true); usec.offset.value = secText(ST.cut.offset); return; }
    } else {
      v = parseLen(txt, getDisplayUnits()) / 1000;
      if (!Number.isFinite(v)) { status(t('sec.ifc.type'), true); usec.offset.value = secText(ST.cut.offset); return; }
    }
    ST.cut.offset = Math.max(0, Math.min(max, v));
    if (v < 0 || v > max) status(secOnDwg() ? t('sec.dwg.beyond', { size: metres(max), units: secUnit() }) : t(v < 0 ? 'sec.ifc.beyond.start' : 'sec.ifc.beyond.end', { size: secText(max) }));
    usec.offset.value = secText(ST.cut.offset);
    applySection();
  });
  usec.offset.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); usec.offset.dispatchEvent(new Event('change')); } });
  window.bimcraftSection = { get: () => ST.cut, set: (s) => { const was = ST.cut; ST.cut = s ? { axis: 'top', offset: null, flip: false, ...s } : null; if (ST.cut) { if (!was) startCutTurn(); applySection(); } else sectionOff(); } };   // for tests
}
