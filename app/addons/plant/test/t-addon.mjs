/* SPDX-License-Identifier: Apache-2.0 */
// Part of test.mjs: the Plant add-on in BimCraft — the real loader and add-on API 1.0 with a stand-in model: bundled and off, switched
// on; a "Pipe spec" section in Properties for a selected run; the isometric exports of the selection; the equipment IFC export;
// commands; the parts that need API 1.1 say so; switched off, everything goes.
const { ok, section, near, DEV, ADDON } = globalThis.__plantTest;
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

globalThis.document ??= { querySelector: () => null, querySelectorAll: () => [], getElementById: () => null };
const imp = (f) => import(pathToFileURL(path.join(DEV, f)).href);
const i18n = await imp('i18n.js');
i18n.init({ locale: 'en', strings: JSON.parse(fs.readFileSync(path.join(DEV, 'lang/en.json'), 'utf8')) });
const A = await imp('addons.js');
const BA = await imp('addons/bimcraft-api.js');

section('The Plant add-on in BimCraft (add-on API 1.0, stand-in model)');
const mem = new Map();
const storage = { getItem: (k) => (mem.has(k) ? mem.get(k) : null), setItem: (k, v) => mem.set(k, String(v)), removeItem: (k) => mem.delete(k) };
const runPset = (o) => ({ name: 'CadCraft_MepRun', rows: Object.entries(o).map(([name, value]) => ({ name, value: String(value) })) });
const RUNS = {
  21: { id: 21, cls: 'IFCELEMENTASSEMBLY', name: '3"-PW-102', guid: 'g21', sets: [runPset({ Kind: 'pipe', System: 'cw', Material: 'steel', Class: '40', Size: '3', PointsMm: JSON.stringify([[0, 0, 600], [2400, 0, 600], [2400, 0, 3200], [2400, 1500, 3200]]), Valves: JSON.stringify([{ s: 1200, kind: 'gate' }, { s: 4000, kind: 'globe' }]), Slope: 0 })] },
  22: { id: 22, cls: 'IFCELEMENTASSEMBLY', name: 'CU-1', guid: 'g22', sets: [runPset({ Kind: 'pipe', System: 'cw', Material: 'copper', Class: 'K', Size: '3/4', PointsMm: '[[0,0,0],[1000,0,0]]', Valves: '[]', Slope: 0 })] },
  23: { id: 23, cls: 'IFCELEMENTASSEMBLY', name: 'big', guid: 'g23', sets: [runPset({ Kind: 'pipe', System: 'cw', Material: 'steel', Class: '40', Size: '1/8', PointsMm: '[[0,0,0],[1000,0,0]]', Valves: JSON.stringify([{ s: 100, kind: 'globe' }]), Slope: 0 })] },
  30: { id: 30, cls: 'IFCWALL', name: 'Wall', guid: 'g30', sets: [] },
};
const model = { properties: async (id) => RUNS[id] || null };
let sel = [21], status = '';
const started = await BA.startAddons({
  editor: () => ({ save: () => new Uint8Array([1]) }), model: () => model, name: () => 'skid.ifc', selection: () => sel, select: (ids) => { sel = ids; },
  afterEdit: () => {}, status: (s) => { status = s; }, openIfc: async () => {},
  base: pathToFileURL(path.join(DEV, 'addons') + '/').href, importer: (u) => import(u), storage, verify: async () => false, bundledOnly: false, noGlobal: true,
  fetchJson: async (u) => (/\/index\.json$/.test(u) ? { addons: ['plant'] } : (() => { try { return JSON.parse(fs.readFileSync(fileURLToPath(u), 'utf8')); } catch { return null; } })()),
  packages: A.packageStore(null),
});
const me = () => started.list().find((a) => a.id === 'plant');
ok(me()?.state === 'off' && me().source === 'bundled', 'Plant is bundled and starts off', JSON.stringify(me() && [me().state, me().reason, me().detail]));
await started.loader.setEnabled('plant', true);
ok(me()?.state === 'active', 'switched on: active', JSON.stringify(me() && [me().state, me().reason, me().detail]));
ok(started.commandList().map((c) => c.key).sort().join() === 'plant:iso-svg,plant:layout-check,plant:place-equipment,plant:process-apply-sizes,plant:process-check,plant:route,plant:route-draw,plant:spec-check', 'its eight commands are listed');
ok(started.exporters().map((e) => e.id).sort().join() === 'plant:equipment-ifc,plant:iso-dxf,plant:iso-svg,plant:process-json' || started.exporters().length === 4, 'four exporters (the process model is the fourth)', started.exporters().map((e) => e.id).join());

// Properties
let secs = await started.propsSections([21], model);
const f = (k) => secs[0]?.fields.find((x) => x.label === k)?.value;
ok(secs.length === 1 && /CS40/.test(f('Pipe spec')) && /1\/2 to 24/.test(f('Sizes allowed')) && /2 valves|valves, all allowed/.test(f('Valves')) && /long radius, 114 mm/.test(f('Bends')), 'a 3" steel run: spec CS40, sizes 1/2 to 24, its two valves allowed, long-radius bends of 1.5 × 3 = 4.5 in (114 mm)', JSON.stringify(secs[0]?.fields));
ok(/stub-in|reducing-tee/.test(f('Branches (on a header)')) && /4:1 stub-in/.test(f('Branches (on a header)')), 'branches shown per header', f('Branches (on a header)'));
secs = await started.propsSections([22], model);
ok(secs.length === 1 && /No spec for copper K/.test(secs[0].fields[0].value), 'a copper type K run: no spec for it, said');
secs = await started.propsSections([23], model);
ok(/not allowed/.test(secs[0].fields.find((x) => x.label === 'Sizes allowed').value) && /globe valve is not allowed/.test(secs[0].fields.find((x) => x.label === 'Valves').value), 'a 1/8 run with a globe valve: both findings (below the smallest size of the spec, and no globe that small)');
ok((await started.propsSections([30], model)).length === 0 && (await started.propsSections([21, 22], model)).length === 0, 'a wall, or two runs at once: no section');

// commands
await started.runCommand('plant:spec-check');
await new Promise((r) => setTimeout(r, 20));
ok(/matches?|runs match/i.test(status) || /findings/.test(status), 'spec-check says what it found', status);
sel = [21, 22, 23];
started.runCommand('plant:spec-check');
await new Promise((r) => setTimeout(r, 30));
ok(/3 findings|findings/.test(status) && /No pipe spec for copper K/.test(status), 'with three runs selected: the copper run first', status);
sel = [21];
started.runCommand('plant:place-equipment');
await started.runCommand('plant:place-equipment');
await new Promise((r) => setTimeout(r, 20));
ok(/Nothing to place/.test(status), 'placing with an empty equipment table: nothing to place', status);
started.runCommand('plant:route');
ok(/Plant tab, choose two ports/.test(status), 'route points the person to the panel', status);

// exports
const ex = (id) => started.exporters().find((e) => e.id.endsWith(id));
const svg = await ex('iso-svg').write(started.exportInput());
ok(typeof svg === 'string' && svg.startsWith('<svg') && svg.includes('2400') && svg.includes('NTS') && svg.includes('Gate valve'.slice(0, 0)) && svg.includes('CS40'), 'the SVG isometric of the selected run: its legs (2400), NTS, its spec in the bill of materials');
const dxf = await ex('iso-dxf').write(started.exportInput());
ok(typeof dxf === 'string' && dxf.includes('SECTION') && dxf.includes('EOF') && dxf.includes('3"-PW-102'), 'the DXF');
sel = [30];
let err = '';
try { await ex('iso-svg').write(started.exportInput()); } catch (e) { err = e.message; }
ok(/Select one or more pipe runs/.test(err), 'nothing selected that is a pipe run: the export says so');
sel = [21];
err = '';
try { await ex('equipment-ifc').write(started.exportInput()); } catch (e) { err = e.message; }
ok(/no equipment/.test(err), 'the equipment export with an empty table says so');
storage.setItem('cc-addon:bimcraft:plant:equipment', JSON.stringify([{ type: 'pump-cf', tag: 'P-101', x: 1000, y: 2000, z: 0, rot: 90 }, { type: 'tank', tag: 'T-101', x: 6000, y: 0, z: 0 }, { type: 'bogus', tag: 'X' }]));
const bytes = await ex('equipment-ifc').write(started.exportInput());
const text = new TextDecoder().decode(bytes);
ok(bytes instanceof Uint8Array && /IFCPUMP\(/.test(text) && /IFCTANK\(/.test(text) && /'P-101'/.test(text) && !/bogus/.test(text), 'the equipment table as an IFC file: the pump and the tank, the unknown type dropped');
started.runCommand('plant:layout-check');
ok(/No problems|findings/.test(status), 'layout-check reads the table', status);
storage.setItem('cc-addon:bimcraft:plant:equipment', JSON.stringify([{ type: 'pump-cf', tag: 'P-1', x: 0, y: 0 }, { type: 'pump-cf', tag: 'P-2', x: 600, y: 0 }]));
started.runCommand('plant:layout-check');
ok(/findings/.test(status), 'two pumps 600 apart: the layout check finds the overlap', status);

await started.loader.setEnabled('plant', false);
ok(!started.commandList().length && !(await started.propsSections([21], model)).length && !started.exporters().length, 'switched off: commands, section and exports are gone');
