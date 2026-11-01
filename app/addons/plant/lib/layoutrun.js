/* SPDX-License-Identifier: Apache-2.0 */
/**
 * layoutrun.js — the process model's layout placed in the model, and its batch schedule and live values shown in 3D (0.8 chem-draw_PART_4: CH.29, CH.6, XE.9). DOM-free.
 *
 *   portsFor(ports, ownerGuid, want)       the port of an equipment item a run should start at ('out') or end at ('in'): by the nozzle name when the layout names one the equipment has, else the first free port of that flow
 *   planRuns(layout, equipment, ports)     → { jobs: [{ run, a, b }], skipped: [{ run, why }] } for the runs of model.layout.runs whose two ends are in the model
 *   batchCsv(recipe, { batches, interval, day0 }) → { csv, tasks, sched }   the batch recipe as the 4D panel's task file; each task points at its equipment by Tag
 *   liveMarkers(readings, tags)            → [{ tag, text, state, level }] for the Plant panel table and the 3D tint
 */
import * as B from '../../../process/batch.js';
import { writeCsv } from '../../../schedule-io.js';
import * as H from '../../../process/env/historian.js';
import * as LS from '../../../live/store.js';

const flowOf = (p) => String(p.flow || '').toUpperCase();
export function portsFor(ports, ownerGuid, want, nozzle = '') {
  const mine = (ports || []).filter((p) => p.ownerGuid === ownerGuid && Array.isArray(p.at) && Array.isArray(p.out) && !p.connectedTo);
  const byName = nozzle ? mine.find((p) => String(p.name || '').toLowerCase() === String(nozzle).toLowerCase()) : null;
  if (byName) return byName;
  const ok = (p) => (want === 'out' ? ['SOURCE', 'SOURCEANDSINK'].includes(flowOf(p)) : ['SINK', 'SOURCEANDSINK'].includes(flowOf(p)));
  return mine.find(ok) || mine.find((p) => flowOf(p) === 'NOTDEFINED') || null;
}
export function planRuns(layout, equipment, ports) {
  const jobs = [], skipped = [], guidOf = (tag) => (equipment || []).find((e) => e.tag === tag && e.guid)?.guid;
  for (const run of (layout && layout.runs) || []) {
    const ga = guidOf(run.from && run.from.equip), gb = guidOf(run.to && run.to.equip);
    if (!ga || !gb) { skipped.push({ run, why: 'notplaced' }); continue; }
    const a = portsFor(ports, ga, 'out', run.from.nozzle), b = portsFor(ports, gb, 'in', run.to.nozzle);
    if (!a || !b) { skipped.push({ run, why: 'noport' }); continue; }
    if (a.storey !== b.storey) { skipped.push({ run, why: 'storey' }); continue; }
    jobs.push({ run, a, b });
  }
  return { jobs, skipped };
}
export function batchCsv(recipe, { batches = 1, interval = 0, day0 = Math.floor(Date.now() / 86400000) } = {}) {
  const sched = B.schedule(recipe, { batches, interval }), tasks = B.toScheduleTasks(B.withLinks(sched, recipe), { day0 }).map((t) => ({ ...t, rows: t.package ? [{ field: 'Tag', value: t.package }] : [] }));
  return { csv: writeCsv(tasks), tasks, sched };
}
export async function liveMarkers(csvText, tags, { now = Date.now() } = {}) {
  const store = new LS.LiveStore({ now: () => now }), map = tags.map((tag) => ({ id: tag, source: 'p', node: tag, label: tag, target: { kind: '3d', id: tag }, staleS: 86400 * 365 }));
  store.define(map);
  const pts = await H.csvAdapter({ text: csvText }).read(tags);
  store.apply('p', pts.map((p) => ({ node: p.tag, value: p.value, quality: p.quality === 'good' ? 'good' : p.quality === 'uncertain' ? 'uncertain' : 'bad', at: p.t ?? now })));
  return { markers: store.markers().filter((m) => m.state !== 'waiting').map((m) => ({ tag: m.target.id, text: m.text, state: m.state, level: m.level })), problems: store.problems() };
}
