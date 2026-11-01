/* SPDX-License-Identifier: Apache-2.0 */
// Part of test.mjs (0.8 Track CH, CH.4): the wire between Plant and the P&ID. A size made in 3D goes through the model (hydraulics rerun) and is
// sent on the channel; a model that arrives is checked against the runs; the P&ID's sizes become mep.setRunSizes writes, never echoing back.
const { ok, section, DEV } = globalThis.__plantTest;
import path from 'node:path';
import { pathToFileURL } from 'node:url';
const PM = await import(pathToFileURL(path.join(DEV, 'process/model.js')).href);
const PL = await import(pathToFileURL(path.join(DEV, 'addons/plant/lib/process-link.js')).href);
const LIVE = await import(pathToFileURL(path.join(DEV, 'process/live.js')).href);

section('Plant and the P&ID: the wire (CH.4)');
const flow = { v: 1, thermo: { components: ['water'], model: 'ideal' }, feeds: { S1: { flows: { water: 30 }, T: 300, P: 3e5 } }, units: [{ id: 'P-101', type: 'pump', in: ['S1'], out: ['S2'], p: { Pout: 6e5 } }, { id: 'E-101', type: 'heater', in: ['S2'], out: ['S3'], p: { Tout: 340 } }] };
const model = PM.newModel('skid', flow);
model.links.S2 = { kind: 'stream', ln: '2"-PW-101-A1A', size: '2"' };
const run = (size) => ({ guid: 'r1', kind: 'pipe', system: '2"-PW-101-A1A', size, points: [[0, 0, 0], [0, 0, 3000], [10000, 0, 3000], [10000, 0, 0]], valves: [] });
const d2 = PL.describe({ runs: [run('2')], equipment: [] }), d4 = PL.describe({ runs: [run('4')], equipment: [] });
PL.check(model, d2);
// 3D: the pipe becomes 4 in
const before = PM.run(model, { plant: d2 }).hydraulics.find((h) => h.id === 'S2');
const ch = PL.whatChanged(d2, d4);
const r = PL.fromThreeD(model, ch, d4);
ok(r.done.length === 1 && r.done[0].stream === 'S2' && r.done[0].size === '4' && model.links.S2.sizeBy === '3d' && model.links.S2.size === '4', 'a size made in 3D is carried into the model (the link says it came from 3D)', JSON.stringify(r.done));
const after = PM.run(model, { plant: d4 }).hydraulics.find((h) => h.id === 'S2');
ok(after.v < before.v / 3 && after.dp < before.dp, 'the hydraulics were rerun: a 4 in pipe has about a quarter of the velocity', before.v.toFixed(2) + ' -> ' + after.v.toFixed(2));
ok(PL.fromThreeD(model, [{ run: 'nowhere', from: '2', to: '4' }], d4).loose[0] === 'nowhere', 'a run tied to no line is listed, not guessed');
// the P&ID sends 6 in: the run should be written 6; once 3D shows 6 there is nothing to write and no echo
const fromPid = PM.fromJSON(PM.toJSON(model)); fromPid.links.S2.size = '6'; fromPid.links.S2.sizeBy = 'pid';
const w = PL.sizeWrites(fromPid, d4);
ok(w.length === 1 && w[0].guid === 'r1' && w[0].size === '6', 'the P&ID\'s size becomes a mep.setRunSizes write', JSON.stringify(w));
const d6 = PL.describe({ runs: [run('6')], equipment: [] });
ok(PL.sizeWrites(fromPid, d6).length === 0, 'when 3D already shows it there is nothing to write');
ok(PL.fromThreeD(fromPid, PL.whatChanged(d4, d6), d6).done.length === 0 && fromPid.links.S2.sizeBy === 'pid', 'and the P&ID\'s own size arriving in 3D is not reported back as a change made there');
ok(PL.sizeWrites(model, d2).length === 0, 'a size set from 3D is never written back into 3D');

// the channel: two windows on a real BroadcastChannel (Node has one); the sender does not hear itself
if (typeof BroadcastChannel === 'function') {
  const got = [];
  const a = LIVE.open((n) => new BroadcastChannel(n), { from: 'bimcraft', onModel: () => got.push('self') });
  const b = LIVE.open((n) => new BroadcastChannel(n), { from: 'cadcraft', onModel: (m, c) => got.push([m.name, c && c.size]) });
  ok(a.live && a.publish(model, { ln: '2"-PW-101-A1A', size: '4', by: '3d' }), 'Plant publishes the model');
  await new Promise((res) => setTimeout(res, 150));
  ok(got.length === 1 && got[0][0] === 'skid' && got[0][1] === '4', 'the P&ID window receives it once, and the sender does not hear itself', JSON.stringify(got));
  b.publish(model); await new Promise((res) => setTimeout(res, 150));
  ok(got.length === 2 && got[1] === 'self', 'and the other way: the P&ID\'s message reaches Plant, still not its sender');
  a.close(); b.close();
} else ok(true, 'no BroadcastChannel in this Node: the channel is tested with a stand-in in tools/process-test/test-live.mjs');
