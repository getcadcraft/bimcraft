/* SPDX-License-Identifier: Apache-2.0 */
/**
 * main.js — resin printing for the 3D Print add-on (roadmap RSN.1-RSN.5; docs/0.9-RESIN-STAGE.md). It adds "Resin" to the print stage's Printing with list; chosen, the card shows
 * the resin settings, layer preview and Save in place of the filament ones. The file formats are add-ons of their own (printer-resin-goo, printer-resin-sl1) that add themselves to
 * window.ccResinFormats; extra blocks (resin-calibration) add themselves to window.ccResinTools. printresin/ is lib/printresin's copy (node tools/printresin/sync.mjs).
 */
import { createResinPanel } from './printresin/rs-panel.js';
import { zipStored } from './printresin/rs-zip.js';

export function activate(api) {
  const t = (k, v) => api.t(k, v);
  const panel = createResinPanel({ t, formats: () => window.ccResinFormats || [], tools: () => window.ccResinTools || [] });
  const def = { id: 'resin', label: t('label'), build: (ctx) => panel.build(ctx) };
  (window.ccPrintBlocks ||= []).push(def);
  window.ccResin = { zipStored };
  dispatchEvent(new Event('cc-print-slicers'));
  api.onDeactivate(() => {
    const at = window.ccPrintBlocks.indexOf(def);
    if (at >= 0) window.ccPrintBlocks.splice(at, 1);
    delete window.ccResin;
    dispatchEvent(new Event('cc-print-slicers'));
  });
}
