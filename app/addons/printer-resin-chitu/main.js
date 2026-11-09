/* SPDX-License-Identifier: Apache-2.0 */
/**
 * main.js — the Chitubox family of resin files, CBDDLP and CTB versions 2 to 5 (roadmap RSN.6, RSN.10; docs/0.9-RESIN-STAGE.md). It adds both writers to window.ccResinFormats. CBDDLP and CTB v2 are written from one published
 * format document; CTB v3 to v5 (rs-ctb3.js) from a specification (docs/resin-formats/ctb-v3-v5-SPEC.md) by a builder who saw nothing else. rs-cbddlp.js and rs-ctb.js are lib/printresin's copies
 * (node tools/printresin/sync.mjs).
 */
import { CBDDLP, writeCbddlp } from './rs-cbddlp.js';
import { CTB, writeCtb } from './rs-ctb.js';
import { CTB3, writeCtb3 } from './rs-ctb3.js';

export function activate(api) {
  const t = (k, v) => api.t(k, v);
  const defs = [{ ...CBDDLP, write: writeCbddlp, t }, { ...CTB, write: writeCtb, t }, { ...CTB3, write: writeCtb3, t }];
  for (const d of defs) (window.ccResinFormats ||= []).push(d);
  dispatchEvent(new Event('cc-print-slicers'));
  api.onDeactivate(() => {
    for (const d of defs) { const at = window.ccResinFormats.indexOf(d); if (at >= 0) window.ccResinFormats.splice(at, 1); }
    dispatchEvent(new Event('cc-print-slicers'));
  });
}
