/* SPDX-License-Identifier: Apache-2.0 */
/**
 * classify-schedule.js — classification codes as optional schedule columns (0.10 BK.94, session bk-content-10). No DOM.
 *
 *   addClassificationColumns(all, { systems, codes, label, varies, keys }) → all
 *     all: the schedules of model-schedule.js ({ doors, windows, walls, rooms, … }); each one that names its rows' elements (`ids`: one list
 *     of element ids per row) gets one column per system at its right end. A row of several elements (walls by type) shows the code they
 *     share, `varies` when they differ, nothing when none has one. codes(system) → Map(element id → { code }) (classify-model.js
 *     effectiveCodes: the element's own code, else its type's, else the project default). label(system) → the column heading.
 *     keys: which schedules (default doors, windows, walls, rooms). The CSV export follows, since it is made from head and rows.
 */
export function addClassificationColumns(all, { systems = [], codes, label = (s) => s, varies = '…', keys = ['doors', 'windows', 'walls', 'rooms'] } = {}) {
  if (!all || !systems.length || typeof codes !== 'function') return all;
  const maps = systems.map((s) => codes(s) || new Map());
  for (const k of keys) {
    const sc = all[k];
    if (!sc || !Array.isArray(sc.ids) || sc.ids.length !== sc.rows.length || sc.classified) continue;
    sc.head = [...sc.head, ...systems.map((s) => label(s))];
    sc.rows = sc.rows.map((row, i) => [...row, ...maps.map((m) => {
      const set = new Set(sc.ids[i].map((id) => m.get(id)?.code || ''));
      return set.size === 1 ? [...set][0] : varies;
    })]);
    sc.classified = systems.slice();
  }
  return all;
}
