/* SPDX-License-Identifier: Apache-2.0 */
/**
 * measure-wire.js: bimcraft.js's 0 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountMeasureWire(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { lenMark, getDisplayUnits } from './model-units.js';

export function mountMeasureWire(ctx) {
  const { ST, ui, syncPlaceUnits, applySection, measurementText, syncMeasureBar, redrawMeasure, shiftNow, showProps, models } = ctx;

  ST.measOrtho = false;
  ST.measShift = false;   // GH.3-C: orthogonal measuring: the bar's toggle, and Shift held
  ST.meas = null;   // { mode: 'distance' | 'area' | 'point', a: point | null, items: [{ kind, a, b, tris, center, text, geo }], hover }
  window.addEventListener('bimcraft-units', () => {
    if (ST.cut) applySection();
    ST.coordsUi?.render();
    for (const m of models) ui.modelList?.querySelectorAll(`[data-model-offset="${m.mi}"] input[data-axis]`).forEach((inp, i) => { inp.value = lenMark(m.offset[i] * 1000, getDisplayUnits()); });   // GH.3: the Offset boxes are re-worded in the new unit (they were written once)
    if (ST.mode === 'ifc' && ST.selected !== null && ST.selected !== undefined && ST.selInfo) showProps(ST.selected);   // GH.3-A: Properties in the new unit
    syncPlaceUnits?.();
    if (!ST.meas) return;
    for (const it of ST.meas.items) it.text = measurementText(it);
    syncMeasureBar(); redrawMeasure();
  });
  window.addEventListener('keydown', (e) => { if (e.key === 'Shift') shiftNow(true); });
  window.addEventListener('keyup', (e) => { if (e.key === 'Shift') shiftNow(false); });
  window.addEventListener('blur', () => shiftNow(false));
  ui.canvasWrap.addEventListener('pointermove', (e) => { if (ST.meas) { ST.meas.lastX = e.clientX; ST.meas.lastY = e.clientY; } shiftNow(e.shiftKey); }, true);
  ui.canvasWrap.addEventListener('pointerdown', (e) => { shiftNow(e.shiftKey); }, true);
}
