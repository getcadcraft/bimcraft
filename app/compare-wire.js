/* SPDX-License-Identifier: Apache-2.0 */
/**
 * compare-wire.js: bimcraft.js's 0 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountCompareWire(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */

export function mountCompareWire(ctx) {
  const { ST, ui, guard, addModel, cur, setActive, removeModel, applyOffset, renderModels, models } = ctx;

  ui.modelInput?.addEventListener('change', () => {
    const files = [...ui.modelInput.files];
    ui.modelInput.value = '';
    guard(async () => { for (const f of files) await addModel(f); });
  });
  window.bimcraftModels = { list: () => models.map((m) => ({ mi: m.mi, name: m.name, active: m === cur(), visible: m.visible, offset: m.offset, elements: m.model.elements })), add: addModel, setActive: (mi) => setActive(models.find((m) => m.mi === mi)), matrix: (mi) => ST.viewer.modelMatrix(mi),
    // SuperCad Studio (SC.3 / SC.5, super-wire-links.js): a shape another app made is shown beside the model, moved and taken out again through the same code as the Models list
    remove: (mi) => { const m = models.find((x) => x.mi === mi); return m ? removeModel(m) : null; },
    setOffset: (mi, v) => { const m = models.find((x) => x.mi === mi); if (!m || !Array.isArray(v) || v.length !== 3 || !v.every(Number.isFinite)) return false; applyOffset(m, v.slice()); renderModels(); return true; } };   // for tests

  ST.bimShell = null;
  ST.savedOnce = false;
}
