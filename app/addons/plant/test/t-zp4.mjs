/* SPDX-License-Identifier: Apache-2.0 */
// Part of test.mjs (0.8 chem-draw_PART_4): the plant placed with its pipes (CH.29), the batch recipe as 4D tasks (CH.6), live values (XE.9).
const { ok, section, DEV } = globalThis.__plantTest;
import path from 'node:path';
import fs from 'node:fs';
import { pathToFileURL } from 'node:url';
const L = await import(pathToFileURL(path.join(DEV, 'addons/plant/lib/layoutrun.js')).href);
const IO = await import(pathToFileURL(path.join(DEV, 'schedule-io.js')).href);
const EN = JSON.parse(fs.readFileSync(path.join(DEV, 'addons/plant/lang/en.json'), 'utf8'));

section('Plant: layout with pipes, batch in 4D, live values (CH.29, CH.6, XE.9)');
{
  const ports = [{ ownerGuid: 'A', name: 'discharge', flow: 'SOURCE', at: [0, 0, 0], out: [1, 0, 0], storey: 's' }, { ownerGuid: 'A', name: 'suction', flow: 'SINK', at: [-1, 0, 0], out: [-1, 0, 0], storey: 's' },
    { ownerGuid: 'B', name: 'feed', flow: 'SINK', at: [5, 0, 0], out: [-1, 0, 0], storey: 's' }, { ownerGuid: 'C', name: 'in', flow: 'SINK', at: [5, 9, 0], out: [-1, 0, 0], storey: 't' }];
  const layout = { runs: [{ tag: 'L1', from: { equip: 'P', nozzle: 'outlet' }, to: { equip: 'V', nozzle: 'inlet' } }, { tag: 'L2', from: { equip: 'P' }, to: { equip: 'W' } }, { tag: 'L3', from: { equip: 'P' }, to: { equip: 'Q' } }, { tag: 'L4', from: { equip: 'P' }, to: { equip: 'X' } }] };
  const eq = [{ tag: 'P', guid: 'A' }, { tag: 'V', guid: 'B' }, { tag: 'W', guid: 'Z' }, { tag: 'Q', guid: 'C' }];
  const plan = L.planRuns(layout, eq, ports);
  ok(plan.jobs.length === 1 && plan.jobs[0].a.name === 'discharge' && plan.jobs[0].b.name === 'feed', 'a run starts at the equipment\'s source nozzle and ends at the other one\'s sink, whatever the layout called them');
  ok(plan.skipped.map((s) => s.run.tag + ':' + s.why).join() === 'L2:noport,L3:storey,L4:notplaced', 'a run with no free nozzle, on another storey or with an end not in the model is skipped with its reason', JSON.stringify(plan.skipped.map((s) => s.why)));
  ok(L.portsFor(ports.map((p) => ({ ...p, connectedTo: 'x' })), 'A', 'out') === null, 'a nozzle that is already connected is not offered again');
}
{
  const recipe = { name: 'r', equipment: [{ id: 'R-1', cls: 'reactor', cap: 1000, clean: 1 }, { id: 'F-1', cls: 'filter' }], steps: [{ id: 'chg', name: 'Charge', cls: 'reactor', dur: 1, size: 800 }, { id: 'flt', name: 'Filter', cls: 'filter', dur: 2, after: ['chg'] }] };
  const r = L.batchCsv(recipe, { batches: 2, day0: 20000 }), back = IO.readCsv(r.csv);
  ok(back.errors.length === 0 && back.tasks.length === 4, 'the batch recipe becomes a task file the 4D panel reads back without errors', JSON.stringify(back.errors));
  ok(back.tasks.every((t) => t.rows.length === 1 && t.rows[0].field === 'Tag' && /^(R-1|F-1)$/.test(t.rows[0].value)), 'every task points at its equipment by Tag');
  ok(back.tasks.some((t) => t.preds.length === 1), 'the steps of a batch are linked finish-to-start');
}
{
  const now = Date.parse('2026-10-30T12:00:00Z');
  const r = await L.liveMarkers('tag,time,value,quality\nT-1,2026-10-30T11:59:50Z,5,Good\nT-2,2026-10-30T11:59:50Z,7,Bad\n', ['T-1', 'T-2', 'T-3'], { now });
  ok(r.markers.length === 2 && r.markers.find((m) => m.tag === 'T-1').state === 'ok' && r.markers.find((m) => m.tag === 'T-2').state === 'bad', 'live values: a good reading is ok, a bad one is bad, a tag with no reading is left out');
  ok(r.problems.some((p) => /bad quality/.test(p.text)), 'a bad reading raises a note');
}
const need = ['sec.p4', 'p4.place.btn', 'p4.batch.btn', 'p4.live.btn', 'p4.why.route', 'p4.live.note'];
ok(need.every((k) => EN[k]), 'the new words are in the language file', need.filter((k) => !EN[k]).join());

{ // CH.9: the vessel body outline of the calculator revolved into a closed vessel with its nozzles
  const EQ = await import(pathToFileURL(path.join(DEV, 'addons/plant/lib/equip.js')).href);
  for (const head of ['ellip', 'hemi', 'tori']) {
    const e = EQ.makeEquipment('vessel-profile', { d: 1000, h: 2000, leg: 500, head, ...(head === 'tori' ? { crownR: 1000, knuckleR: 60 } : {}) });
    ok(e && EQ.isClosed(e.mesh) && EQ.meshVolume(e.mesh) > 0 && e.nozzles.length === 4, `vessel-profile (${head}): a closed solid with positive volume and four nozzles`);
  }
  const a = EQ.makeEquipment('vessel-profile', { d: 1000, h: 2000, leg: 0, head: 'ellip' });
  ok(Math.abs(a.capacityM3 - (Math.PI / 4 * 2 + 2 * Math.PI / 6 * 0.25)) < 0.002, 'its capacity is the calculator\'s (2:1 ellipsoidal heads: pi/4 D2 L + 2 pi/6 D2 h)', String(a.capacityM3));
}
