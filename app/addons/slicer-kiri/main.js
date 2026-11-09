/* SPDX-License-Identifier: Apache-2.0 */
/**
 * main.js — Kiri:Moto slicer as a slicer for the 3D Print add-on (roadmap PS.19; lib/printstage/ps-engines.js has the shape, docs/0.9-PRINT-STAGE.md the why).
 * Kiri:Moto runs in the page: its bundle stays in assets/vendor/kiri-moto and is fetched the first time someone slices with it.
 */
export function activate(api) {
  const def = {
    id: 'kiri', name: 'Kiri:Moto', license: 'MIT', where: 'page', url: 'https://grid.space/kiri/', label: api.t('label'),
    slice: async (tris, job, ctx) => (await import('./ps-kiri.js')).sliceWithKiri(tris, job, { base: '/assets/vendor/kiri-moto/current/', ...ctx }),
  };
  (window.ccPrintSlicers ||= []).push(def);
  dispatchEvent(new Event('cc-print-slicers'));
  api.onDeactivate(() => {
    const at = window.ccPrintSlicers.indexOf(def);
    if (at >= 0) window.ccPrintSlicers.splice(at, 1);
    dispatchEvent(new Event('cc-print-slicers'));
  });
}
