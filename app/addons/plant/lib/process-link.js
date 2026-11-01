/* SPDX-License-Identifier: Apache-2.0 */
/**
 * process-link.js — Plant's side of the one living model (0.8 Track CH, CH.4). DOM-free. The shared engine is the host's synced copy of
 * lib/process (../../../process/). BimCraft's pipe runs (api.mep.runs()) and the equipment of the table are described to it; the process model
 * (a `cadcraft-process` block: the flowsheet and its links) is kept in the add-on's storage and travels as process.json; a P&ID in CadCraft or
 * Super reads the same block. What this side does: tie runs and equipment to the model's lines and units, work out the hydraulics of each line
 * from the run as drawn (length, bends, valves, size), and say what the P&ID should change when a pipe's size changed here.
 *
 *   describe({ runs, equipment })      → { runs, equipment } in the engine's neutral shape
 *   check(model, desc, { pid? })       → { run (engine result), linked, problems, edits, rows } and updates the model's links (autoLink)
 *   whatChanged(before, after)         → [{ run, from, to }] runs whose size differs between two readings (a change made in 3D)
 *   fromThreeD(model, changes, desc)   → { done: [{ stream, ln, run, size }], result } a size made in 3D carried through the model (PM.applyChange by '3d'); the model is changed in place
 *   sizeWrites(model, desc)            → [{ guid, size }] the runs whose size the P&ID set (sizeBy 'pid') and 3D does not show yet: what mep.setRunSizes should write
 */
import * as PM from '../../../process/model.js';
import { npsKey, nominalOf } from '../../../process/hydraulics.js';

export function describe({ runs = [], equipment = [] } = {}) {
  return {
    runs: runs.filter((r) => r && r.kind !== 'duct').map((r) => ({ guid: String(r.guid), tag: r.tag || '', system: r.system || '', size: String(r.size || ''), points: r.points || [], valves: r.valves || [] })),
    equipment: equipment.filter((e) => e && e.guid && e.tag).map((e) => ({ guid: String(e.guid), tag: String(e.tag) })),
  };
}

export function check(model, desc, ctx = {}) {
  const rep = PM.autoLink(model, ctx.pid || null, desc);
  const run = PM.run(model, { pid: ctx.pid || undefined, plant: desc });
  const edits = [];
  for (const [id, l] of Object.entries(model.links)) {
    if (l.kind !== 'stream' || !l.run) continue;
    const r = desc.runs.find((x) => x.guid === l.run), h = run.hydraulics.find((x) => x.id === id);
    if (r && h && !h.missing) edits.push({ stream: id, ln: l.ln || '', run: r.guid, size: r.size, v: h.v, dp: h.dp });
  }
  return { run, linked: rep.linked, unmatched: rep.unmatched, problems: run.problems, edits, rows: run.table.rows };
}

export function whatChanged(before, after) {
  const b = new Map(before.runs.map((r) => [r.guid, r.size]));
  return after.runs.filter((r) => b.has(r.guid) && b.get(r.guid) !== r.size).map((r) => ({ run: r.guid, from: b.get(r.guid), to: r.size }));
}

/** 3D → model: each changed run that is tied to a line sets that line's size (by '3d'), reruns the flowsheet and hydraulics. Runs tied to no line are listed in `loose`. */
export function fromThreeD(model, changes, desc) {
  const done = [], loose = []; let result = null;
  for (const c of changes) {
    const id = Object.keys(model.links).find((k) => model.links[k].kind === 'stream' && model.links[k].run === c.run);
    if (!id) { loose.push(c.run); continue; }
    const l0 = model.links[id];
    if (l0.sizeBy === 'pid' && l0.size && npsKey(l0.size) === npsKey(c.to)) continue;   // the P&ID's own size arriving in 3D: not a change made here
    try { result = PM.applyChange(model, { stream: id, size: nominalOf(c.to) || c.to, by: '3d' }, { plant: desc }); done.push({ stream: id, ln: model.links[id].ln || '', run: c.run, size: String(nominalOf(c.to) || c.to) }); } catch { loose.push(c.run); }
  }
  return { done, loose, result };
}

export function sizeWrites(model, desc) {
  const out = [];
  for (const l of Object.values(model.links)) {
    if (l.kind !== 'stream' || !l.run || l.sizeBy !== 'pid' || !l.size) continue;
    const r = desc.runs.find((x) => x.guid === l.run);
    if (r && npsKey(r.size) !== npsKey(l.size)) out.push({ guid: r.guid, size: String(nominalOf(l.size) || l.size) });
  }
  return out;
}
