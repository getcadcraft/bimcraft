/* SPDX-License-Identifier: Apache-2.0 */
/**
 * main.js — the Elegoo GOO file for resin printing (roadmap RSN.2/RSN.3; docs/0.9-RESIN-STAGE.md). It adds the writer to window.ccResinFormats, which the Resin card lists for the printers that use it.
 * rs-goo.js is lib/printresin's copy (node tools/printresin/sync.mjs).
 */
import { GOO, writeGoo } from './rs-goo.js';

export function activate(api) {
  const def = { ...GOO, write: writeGoo, t: (k, v) => api.t(k, v) };
  (window.ccResinFormats ||= []).push(def);
  dispatchEvent(new Event('cc-print-slicers'));
  api.onDeactivate(() => {
    const at = window.ccResinFormats.indexOf(def);
    if (at >= 0) window.ccResinFormats.splice(at, 1);
    dispatchEvent(new Event('cc-print-slicers'));
  });
}
