/* SPDX-License-Identifier: Apache-2.0 */
/**
 * fourd-wire.js: bimcraft.js's 1 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountFourdWire(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { matchTasks, groupsOf, statusAt } from './ifc-4d.js';

export function mountFourdWire(ctx) {
  const { ST, index, fdOpen, fdApply, fdSetGroup, fdView } = ctx;

  // 0.8 chem-draw_PART_4 (XE.9): live values tint the elements whose Tag is a reading's tag (the Plant tab's "Show the values"); read only, one colour per state.
  const LIVE_TINT = { ok: '#3a8f5c', uncertain: '#c9891a', bad: '#d33a2f', stale: '#8a8a8a', high: '#d33a2f', low: '#2a6fd6' };
  window.bimcraftTint = {
    tint: (list) => {
      if (!ST.viewer) return { matched: 0, unmatched: (list || []).map((x) => x.tag) };
      const rows = (list || []).filter((x) => x && x.tag != null), m = matchTasks(index(), rows.map((x) => ({ rows: [{ field: 'tag', value: x.tag }] })));
      const colors = new Map(), unmatched = [];
      m.forEach((tk, k) => { if (!tk.keys.length) unmatched.push(rows[k].tag); for (const key of tk.keys) colors.set(key, LIVE_TINT[rows[k].state] || LIVE_TINT.ok); });
      ST.viewer.setColors(colors.size ? colors : null);
      return { matched: colors.size, unmatched };
    },
    clear: () => { if (ST.viewer) ST.viewer.setColors(null); },
  };
  window.bimcraftFourD = { open: (name, text) => fdOpen(new File([text], name, { type: /\.(xml|mspdi)$/i.test(name) ? 'application/xml' : 'text/csv' })), tasks: () => ST.fdTasks, day: (d) => { ST.fdDay = d; fdApply(); }, group: fdSetGroup, groups: () => groupsOf(ST.fdTasks || []), state: () => ST.fdOn && { day: ST.fdDay, tasks: ST.fdTasks.length, group: ST.fdGroup, shown: fdView().length, status: Object.fromEntries(statusAt(fdView(), ST.fdDay)), solid: ST.viewer.vis.isolated ? ST.viewer.vis.isolated.size : null } };   // for tests
}
