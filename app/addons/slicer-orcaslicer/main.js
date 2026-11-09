/* SPDX-License-Identifier: Apache-2.0 */
/**
 * main.js — OrcaSlicer slicer as a slicer for the 3D Print add-on (roadmap PS.19; lib/printstage/ps-engines.js has the shape, docs/0.9-PRINT-STAGE.md the why).
 * The person's own installed program, a separate AGPL-3.0 process run by Studio (engines.rs Kind::Slicer). Nothing of it is in this add-on or in anything we ship.
 */
export function activate(api) {
  const def = { id: 'orcaslicer', name: 'OrcaSlicer', license: 'AGPL-3.0', where: 'studio', url: 'https://github.com/OrcaSlicer/OrcaSlicer/releases', label: api.t('label') };
  (window.ccPrintSlicers ||= []).push(def);
  dispatchEvent(new Event('cc-print-slicers'));
  api.onDeactivate(() => {
    const at = window.ccPrintSlicers.indexOf(def);
    if (at >= 0) window.ccPrintSlicers.splice(at, 1);
    dispatchEvent(new Event('cc-print-slicers'));
  });
}
