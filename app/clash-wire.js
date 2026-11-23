/* SPDX-License-Identifier: Apache-2.0 */
/**
 * clash-wire.js: bimcraft.js's 0 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountClashWire(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */

export function mountClashWire(ctx) {
  const { ST } = ctx;

  // ---- Clash check (0.4 B17) ----
  ST.clashA = 'pick';
  ST.clashB = 'all';
  ST.clashTol = '0.01';
  ST.clashRes = null;
  ST.clashRun = null;
  ST.clashAt = -1;
  ST.clashMsg = '';
  ST.clashFix = null;   // 0.9 EG.42: discipline proposals for the clashes (mounted with the assistants, below)
  /** What a set can be: the pick, every class over the open models, each saved search set, everything. */
  ST.hostSets = [];   // BK.128 / BK.45: sets of elements a host (Super's model layers) names by GlobalId
}
