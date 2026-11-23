/* SPDX-License-Identifier: Apache-2.0 */
/**
 * placing-wire.js: bimcraft.js's 0 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountPlacingWire(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { toViewer } from './ifc-place.js';

export function mountPlacingWire(ctx) {
  const { ST, ui, toggleSnap, syncPlacebar, moveGhost, planCut, coordMatrix, storeyElev, stopPlacing, typedPlace, toWorld, pb } = ctx;

  ST.storeyElevs = new Map();   // storey id → elevation in model mm (ifc-place.js info())

  pb.snap.addEventListener('click', toggleSnap);
  ui.placebar.querySelector('[data-place-turn]').addEventListener('click', () => {   // = R (touch screens have no R)
    if (!ST.placing) return;
    ST.placing.rot = (ST.placing.rot + 90) % 360; ST.placing.snap = false; syncPlacebar(); moveGhost(ST.placing.last);
  });
  pb.storey.addEventListener('change', () => {
    if (!ST.placing) return;
    if (ST.placing.where === 'plan') ST.modelUi?.ensurePlan?.(Number(pb.storey.value)); else planCut();   // the plan shows the storey picked here
    ST.placing.faces = null; ST.placing.snap = false; ST.viewer.placeY = toWorld(toViewer(coordMatrix(), [0, 0, storeyElev()]))[1]; syncPlacebar();
  });
  ui.placebar.querySelector('[data-place-stop]').addEventListener('click', () => stopPlacing());
  ui.placebar.querySelector('[data-place-typed]').addEventListener('click', typedPlace);
  pb.xy.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); typedPlace(); } });
}
