/* SPDX-License-Identifier: Apache-2.0 */
// Part of test.mjs (0.10 SU.1561, pid-10): the P&ID from the model. A pump skid built from the add-on's own equipment (real nozzles), its runs between them,
// read into the shared plant graph (lib/schematic/plant.js, the library's own copy here), drawn as P&ID sheets, edited on the P&ID, read back, one BOM.
const { ok, section, ADDON, mine } = globalThis.__plantTest;
import path from 'node:path';
import { pathToFileURL } from 'node:url';
const E = await import(pathToFileURL(path.resolve(ADDON, '../../../../../../../lib/schematic/plant.js')).href);
const PL = await mine('lib/pid-link.js');
const EQ = await mine('lib/equip.js');

section('The P&ID from the model (SU.1561)');
const items = [
  { type: 'tank', tag: 'TK-101', x: 0, y: 0, z: 0, rot: 0, params: {}, guid: 'a' },
  { type: 'pump-cf', tag: 'P-101', x: 6000, y: 0, z: 0, rot: 0, params: {}, guid: 'b' },
  { type: 'vessel-v', tag: 'V-101', x: 6000, y: 5000, z: 0, rot: 0, params: {}, guid: 'c' },
];
const at = (tag, name) => { const it = items.find((i) => i.tag === tag); return EQ.placeEquipment(EQ.makeEquipment(it.type, it.params), it).nozzles.find((n) => n.name === name).p; };
const runs = (valves) => [
  { guid: 'r1', kind: 'pipe', system: 'pw', mat: 'steel', cls: '40', size: '3', points: [at('TK-101', 'outlet'), at('P-101', 'suction')], valves: valves.r1 },
  { guid: 'r2', kind: 'pipe', system: 'pw', mat: 'steel', cls: '40', size: '3', points: [at('P-101', 'discharge'), at('V-101', 'feed')], valves: valves.r2 },
];
let stored = null;
const link = new PL.PidLink(E, { get: () => stored, set: (v) => { stored = v; } });
const desc = (v) => PL.describe3d({ equipment: items, runs: runs(v), specOf: () => 'CS40', placeEquip: EQ.placeEquipment, makeEquip: EQ.makeEquipment });
const d = desc({ r1: [{ s: 1000, kind: 'gate' }], r2: [{ s: 500, kind: 'check' }] });
ok(d.equipment.length === 3 && d.equipment[1].nozzles.every((n) => Array.isArray(n.p)), 'the 3D model described with world nozzle points');
const r = link.update(d);
const g = link.graph();
ok(r.added === 7 && g.equipment.length === 3 && g.lines.length === 2 && g.items.length === 2, 'equipment, two lines and two valves read in', JSON.stringify([r, g.lines.length]));
ok(g.lines.every((l) => l.from && l.to), 'both ends of both runs tied to nozzles', JSON.stringify(g.lines.map((l) => [l.from, l.to])));
ok(link.pending('pid').length === 7 && link.pending('three').length === 0, 'the P&ID has to follow what 3D shows');
ok(JSON.parse(stored).format === 'cc-plant-graph', 'the graph is saved as JSON in the add-on storage');
link.adoptPid();
const svg = link.svg(0, {});
ok(link.pending('pid').length === 0 && svg.includes('class="valve gate"') && svg.includes('P-101'), 'the sheet is drawn and adopted');
const before = link.bom();
link.addValve(g.lines[0].id, 'ball');
ok(link.pending('three').length === 1 && link.bom().totals.valves === before.totals.valves + 1, 'a valve added on the P&ID waits in 3D and is in the one BOM');
const again = link.update(d);
ok(again.added === 0 && link.pending('three').length === 1, 'reading 3D again does not lose it');
const d2 = desc({ r1: [{ s: 1000, kind: 'gate' }, { s: 2000, kind: 'ball' }], r2: [{ s: 500, kind: 'check' }] });
link.update(d2);
ok(link.pending('three').length === 0, 'once the valve is in 3D it is adopted');
const link2 = new PL.PidLink(E, { get: () => stored, set: () => {} });
ok(JSON.stringify(link2.bom()) === JSON.stringify(link.bom()), 'a fresh load of the stored graph gives the same BOM');
ok(/^Section,Item/.test(link.bomCsv()), 'BOM as CSV');

// 0.11: forms and the size written to 3D
{
  let st2 = null;
  const L2 = new PL.PidLink(E, { get: () => st2, set: (v) => { st2 = v; } });
  L2.update(d2);
  const eq = L2.addEquipment({ kind: 'vessel', tag: 'V-301', nozzles: [{ name: 'feed', size: '3', flow: 'SINK' }] });
  ok(eq && eq.tag === 'V-301' && L2.pending('three').some((p) => p.label === 'V-301' && p.op === 'add'), 'a vessel added on the P&ID is pending in 3D (form)');
  const l1 = L2.lines()[0], was = l1.number;
  ok(L2.renameLine(l1.id, '3"-PW-555-CS40') && L2.lines().some((l) => l.number === '3"-PW-555-CS40') && L2.renameLine(l1.id, '') === null, 'a line renamed on the P&ID (empty refused)');
  L2.setLineSize(L2.lines()[1].id, '4');
  const w = L2.sizeWrites();
  ok(w.length === 1 && w[0].size === '4' && w[0].guid === 'r2', 'the size changed on the P&ID is the one to write to 3D (run r2)', JSON.stringify(w));
  L2.acknowledge('three', w[0].id);
  ok(L2.sizeWrites().length === 0, 'once written (acknowledged) nothing is left to write');
  void was;
}

// 0.11 (su-finish-11): instruments stored on the 3D runs (api.mep.runs() rows carry `instruments`; api.mep.setRunInstruments writes them)
{
  let st3 = null;
  const L3 = new PL.PidLink(E, { get: () => st3, set: (v) => { st3 = v; } });
  const d3 = desc({ r1: [], r2: [] });
  L3.update(d3); L3.adoptPid();
  const ln = L3.lines()[0];
  const inst = L3.addInstrument(ln.id, 'PIC', 'panel');
  ok(inst && L3.pending('three').some((p) => p.op === 'add' && p.label.startsWith(inst.tag)), 'an instrument added on the P&ID waits for 3D');
  const plan = L3.instrumentWrites(d3);
  ok(plan.writes.length === 1 && plan.writes[0].guid === 'r1' && plan.writes[0].instruments[0].kind === 'PIC' && plan.writes[0].instruments[0].loc === 'panel', 'the write puts it on run r1 with its letters and panel location', JSON.stringify(plan));
  const runs3 = runs({ r1: [], r2: [] }).map((r) => (r.guid === 'r1' ? { ...r, instruments: plan.writes[0].instruments } : r));
  const d4 = PL.describe3d({ equipment: items, runs: runs3, specOf: () => 'CS40', placeEquip: EQ.placeEquipment, makeEquip: EQ.makeEquipment });
  ok(d4.runs[0].instruments.length === 1, 'describe3d passes the run instruments through');
  L3.update(d4);
  ok(L3.pending('three').length === 0 && L3.instrumentWrites(d4).writes.length === 0 && L3.bom().totals.instruments === 1, 'read back from 3D: adopted, nothing left to write, one instrument in the BOM');
}
