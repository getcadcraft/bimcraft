/* SPDX-License-Identifier: Apache-2.0 */
/**
 * main.js — the Anycubic Photon Workshop files PWMX and PWS (roadmap RSN.11; docs/0.9-RESIN-STAGE.md). It adds both writers to window.ccResinFormats. Written from a specification
 * (docs/resin-formats/anycubic-pwmx-SPEC.md) by a builder who saw nothing else. rs-pwmx.js is lib/printresin's copy (node tools/printresin/sync.mjs).
 */
import { PWMX, PWS, writePwmx, writePws } from './rs-pwmx.js';

export function activate(api) {
  const t = (k, v) => api.t(k, v);
  const defs = [{ ...PWMX, write: writePwmx, t }, { ...PWS, write: writePws, t }];
  for (const d of defs) (window.ccResinFormats ||= []).push(d);
  dispatchEvent(new Event('cc-print-slicers'));
  api.onDeactivate(() => {
    for (const d of defs) { const at = window.ccResinFormats.indexOf(d); if (at >= 0) window.ccResinFormats.splice(at, 1); }
    dispatchEvent(new Event('cc-print-slicers'));
  });
}
