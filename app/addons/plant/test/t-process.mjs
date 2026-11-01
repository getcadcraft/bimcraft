/* SPDX-License-Identifier: Apache-2.0 */
// Part of test.mjs (0.8 Track CH, CH.4): Plant's side of the one living model — pipe runs as BimCraft reads them are tied to a process model's
// lines, their hydraulics follow the run as drawn, and a pipe that changed size in 3D is listed with what the P&ID has to change.
const { ok, section, DEV } = globalThis.__plantTest;
import path from 'node:path';
import { pathToFileURL } from 'node:url';
const PM = await import(pathToFileURL(path.join(DEV, 'process/model.js')).href);
const PL = await import(pathToFileURL(path.join(DEV, 'addons/plant/lib/process-link.js')).href);

section('Plant and the process model (CH.4)');
const flow = { v: 1, thermo: { components: ['water'], model: 'ideal' }, feeds: { S1: { flows: { water: 30 }, T: 300, P: 3e5 } }, units: [{ id: 'P-101', type: 'pump', in: ['S1'], out: ['S2'], p: { Pout: 6e5 } }, { id: 'E-101', type: 'heater', in: ['S2'], out: ['S3'], p: { Tout: 340 } }] };
const model = PM.newModel('skid', flow);
model.links.S2 = { kind: 'stream', ln: '2"-PW-101-A1A', size: '2"' };
const runs = [{ guid: 'r1', kind: 'pipe', system: '2"-PW-101-A1A', size: '2', points: [[0, 0, 0], [0, 0, 3000], [10000, 0, 3000], [10000, 0, 0]], valves: [{ s: 0.5, kind: 'gate' }] }, { guid: 'd1', kind: 'duct', size: '10x10', points: [[0, 0, 0], [1, 0, 0]] }];
const desc = PL.describe({ runs, equipment: [{ guid: 'g1', tag: 'P-101' }, { guid: 'g2', tag: '' }] });
ok(desc.runs.length === 1 && desc.equipment.length === 1, 'describe: ducts and untagged equipment are left out');
const r = PL.check(model, desc, { pid: { equipment: [{ tag: 'P-101' }, { tag: 'E-101' }], lines: [{ ln: '2"-PW-101-A1A', size: '2"', from: ['P-101 (discharge)'], to: ['E-101'] }] } });
ok(model.links.S2.run === 'r1' && model.links['P-101'].plant === 'g1', 'the run is tied to the line by its system name and the pump by its tag');
ok(r.edits.length === 1 && r.edits[0].v > 0 && r.edits[0].dp > 0 && r.edits[0].size === '2', 'one line worked out from the run as drawn: velocity and drop', JSON.stringify(r.edits));
ok(Math.abs(PM.runGeometry(runs[0]).L - 16) < 1e-9, 'length 3 + 10 + 3 m');
const bigger = PL.describe({ runs: [{ ...runs[0], size: '4' }], equipment: [] });
ok(PL.whatChanged(desc, bigger).length === 1 && PL.whatChanged(desc, bigger)[0].to === '4', 'a size changed in 3D is found');
const r2 = PL.check(model, bigger);
ok(r2.edits[0].v < r.edits[0].v && r2.edits[0].dp < r.edits[0].dp, 'the bigger pipe: lower velocity and drop');
ok(r2.problems.some((p) => p.code === 'link.size-mismatch') === false, 'with no P&ID given, no size disagreement is invented');
const r3 = PL.check(PM.fromJSON(PM.toJSON(model)), bigger, { pid: { equipment: [{ tag: 'P-101' }, { tag: 'E-101' }], lines: [{ ln: '2"-PW-101-A1A', size: '2"', from: ['P-101'], to: ['E-101'] }] } });
ok(r3.problems.some((p) => p.code === 'link.size-mismatch'), 'with the P&ID saying 2 in and the pipe now 4 in: a Problem', JSON.stringify(r3.problems.map((p) => p.code)));
{
  const b = (await import(pathToFileURL(path.join(DEV, 'process/synth.js')).href)).build({ name: 'P', components: ['water'], feed: { flows: { water: 10 }, T: 300, P: 2e5 }, steps: [{ type: 'pump', p: { Pout: 5e5 } }, { type: 'heater', p: { Tout: 340 } }] });
  const m2 = PM.fromJSON(PM.toJSON(b.model));
  ok(m2.layout.equipment.length === 2 && m2.layout.equipment.every((e) => ['pump-cf', 'exch-shell'].includes(e.type)), 'the built plant\'s 3D layout uses Plant\'s own equipment types');
  const eq = await import(pathToFileURL(path.join(DEV, 'addons/plant/lib/equip.js')).href);
  ok(m2.layout.equipment.every((e) => eq.TYPES.includes(e.type)), 'every layout type is one Plant can make');
}
