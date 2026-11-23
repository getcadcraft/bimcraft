/* SPDX-License-Identifier: Apache-2.0 */
/**
 * draw-ui.js: bimcraft.js's 2 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 bimcraft; no behaviour change).
 * mountDrawPlan(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */

export function mountDrawPlan(ctx) {
  const { ST, ui } = ctx;

  // 0.8 EG.39 (scan-progress-ui.js): a scan against the model's elements and the 4D schedule
  const scanProgElementKeys = () => { const ix = ctx.index(); if (!ix) return []; const skip = /^Ifc(Space|OpeningElement|VirtualElement|Annotation|Grid|Zone|Site|Building|BuildingStorey|Project)$/; const cls = new Map(ix.values('cls')); return ix.keys.filter((k) => !skip.test(String(cls.get(k - ix.keyBase) ?? ''))); };

  function syncScanProg() { if (ui.spSec) ui.spSec.hidden = !(ST.mode === 'ifc' && ST.model && ST.pc?.has?.()); ST.scanProgUi?.changed(); }

  return { scanProgElementKeys, syncScanProg };
}
