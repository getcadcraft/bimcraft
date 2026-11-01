#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * test.mjs — the Plant add-on's Node tests for BimCraft (0.7 LC.5 step 2): pipe specs, process equipment with nozzles, the router,
 * isometrics (read back through CadCraft's DXF reader) and factory layout checks. Each figure is worked by hand beside its test.
 *   node public_html/assets/apps/bimcraft/dev/addons/plant/test/test.mjs [--verbose]
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ADDON = path.resolve(HERE, '..');
const VERBOSE = process.argv.includes('--verbose');
const DEV = path.resolve(ADDON, '../..');
const CAD = path.resolve(DEV, '../../cadcraft/dev');
const mine = (f) => import(pathToFileURL(path.join(ADDON, f)).href);
const T = await import(pathToFileURL(path.join(DEV, 'mep/tables.js')).href);
const SP = await mine('lib/spec.js');
const EQ = await mine('lib/equip.js');
const RT = await mine('lib/route.js');
const IS = await mine('lib/iso.js');
const LY = await mine('lib/layout.js');
const IO = await mine('lib/ifc-out.js');
// the add-on's own English, as main.js gives the libraries (setT(api.t)): the isometric's words come from lang/en.json
const CORE = await mine('lib/core.js');
CORE.setT(CORE.lookupFrom(JSON.parse(fs.readFileSync(path.join(ADDON, 'lang/en.json'), 'utf8'))));

let pass = 0, fail = 0;
const ok = (cond, name, extra = '') => { if (cond) { pass++; if (VERBOSE) console.log('  ok  ' + name); } else { fail++; console.log('  FAIL ' + name + (extra ? ' — ' + extra : '')); } };
const section = (s) => console.log('\n' + s);
const near = (a, b, tol = 1e-6) => Math.abs(a - b) <= tol;
globalThis.__plantTest = { ok, section, near, mine, DEV, CAD, ADDON, VERBOSE };

section('Pipe specs');
{
  ok(SP.STARTERS.length === 5 && SP.STARTERS.every(Boolean), 'five starter specs, all valid');
  const cs = SP.specFor(SP.STARTERS, 'steel', '40');
  ok(cs && cs.id === 'CS40' && SP.specFor(SP.STARTERS, 'copper', 'K') === null, 'a spec is found by the material and class a run carries');
  const sizes = SP.allowedSizes(cs);
  ok(sizes.includes('1/2') && sizes.includes('24') && !sizes.includes('3/8') && sizes.length === T.sizesFor('steel', '40').filter((s) => T.nominal(s) >= 0.5).length, 'CS40 allows 1/2 to 24 of the ASME B36.10M table sizes', sizes.join(' '));
  ok(SP.valveAllowed(cs, 'globe', '12') && !SP.valveAllowed(cs, 'globe', '14') && SP.valveAllowed(cs, 'gate', '24') && !SP.valveAllowed(SP.specFor(SP.STARTERS, 'pvc', '40'), 'globe', '2'), 'valves by kind and size: a globe to 12, none in PVC');
  ok(SP.branchKind(cs, '4', '1') === 'stub-in' && SP.branchKind(cs, '4', '2') === 'reducing-tee' && SP.branchKind(cs, '4', '4') === 'tee' && SP.branchKind(cs, '2', '4') === null, 'branches: 1 on 4 is a stub-in (ratio 0.25), 2 on 4 a reducing tee, 4 on 4 a tee, a branch larger than its header is refused');
  ok(SP.branchKind(SP.specFor(SP.STARTERS, 'copper', 'L'), '4', '1') === 'reducing-tee', 'copper makes no stub-in');
  ok(near(SP.bendRadius(cs, '4'), 6) && near(SP.bendRadius(SP.specFor(SP.STARTERS, 'copper', 'L'), '1'), 1.125) && SP.bendRadius(cs, '99') === null, 'bends: long radius 1.5 × 4 = 6 in; a short copper elbow one outside diameter (1.125 in for 1)');
  const f1 = SP.checkRun(cs, { mat: 'steel', cls: '40', size: '3/8', valves: [{ s: 100, kind: 'gate' }] });
  ok(f1.length === 2 && f1[0].code === 'spec-size' && f1[1].code === 'spec-valve', 'a 3/8 run under CS40: size not allowed, and its valve with it', JSON.stringify(f1));
  const f2 = SP.checkRuns(SP.STARTERS, [{ guid: 'a', mat: 'steel', cls: '40', size: '4', valves: [{ s: 1, kind: 'check' }] }, { guid: 'b', mat: 'copper', cls: 'K', size: '1', valves: [] }, { guid: 'c', mat: 'steel', cls: '40', size: '14', valves: [{ s: 1, kind: 'globe' }] }]);
  ok(f2.map((f) => f.guid + f.code).join() === 'bspec-none,cspec-valve', 'checkRuns: a clean run is silent; no spec → warning; a globe on 14 → error', JSON.stringify(f2));
  const dirty = SP.cleanSpec({ format: 'cadcraft-pipespec', version: 1, id: 'X1', material: 'steel', cls: '40', sizes: { min: '12', max: '2' }, valves: { gate: { min: '4', max: '1' }, laser: { min: '1', max: '2' } }, branch: [{ ratio: 5, kind: 'tee' }, { ratio: 0.5, kind: 'stub-in' }, { ratio: 0.3, kind: 'bogus' }], bends: 'wild', name: 'A'.repeat(200) });
  ok(dirty && dirty.sizes.min === '2' && dirty.sizes.max === '12' && dirty.valves.gate.min === '1' && !dirty.valves.laser && dirty.branch.length === 1 && dirty.bends === 'long' && dirty.name.length === 60, 'cleanSpec: swapped limits put right, unknown valve kinds and bad rules dropped, bends default long, name cut');
  ok(SP.cleanSpec({ format: 'other', version: 1, id: 'X', material: 'steel', cls: '40' }) === null && SP.cleanSpec({ format: 'cadcraft-pipespec', version: 1, id: '1bad', material: 'steel', cls: '40' }) === null && SP.cleanSpec({ format: 'cadcraft-pipespec', version: 1, id: 'Z', material: 'steel', cls: '99' }) === null && SP.cleanSpec(null) === null, 'refused: another format, a bad id, a class the tables do not have, nothing');
}

section('Process equipment');
{
  ok(EQ.TYPES.length === 8, 'eight equipment types (the vessel from the body calculator joined in 0.8)', EQ.TYPES.join());
  ok(EQ.TYPES.every((k) => { const e = EQ.makeEquipment(k); return EQ.isClosed(e.mesh) && EQ.meshVolume(e.mesh) > 0 && e.nozzles.length >= 2 && e.ifc.cls; }), 'each is closed solids of positive volume with nozzles and an IFC class');
  // the tank is a 24-sided prism with a cone roof: area = ½ · 24 · r² · sin(15°); V = area · h + area · roof / 3
  const tank = EQ.makeEquipment('tank', { d: 3000, h: 3000, roof: 300 });
  const aN = 0.5 * 24 * 1500 ** 2 * Math.sin((2 * Math.PI) / 24);
  ok(near(EQ.meshVolume(tank.mesh) / (aN * 3000 + (aN * 300) / 3), 1, 1e-9), 'tank: volume of a 24-sided prism and cone, 3 m × 3 m dia, to 1e-9');
  ok(near(tank.capacityM3, (Math.PI * 1.5 ** 2 * 3) / 1, 1e-9 * 100) || near(tank.capacityM3, Math.PI * 1.5 * 1.5 * 3, 1e-6), 'its capacity is the true cylinder: π · 1.5² · 3 = 21.206 m³', String(tank.capacityM3));
  ok(['IFCTANK:STORAGE', 'IFCPUMP:ENDSUCTION', 'IFCHEATEXCHANGER:SHELLANDTUBE', 'IFCHEATEXCHANGER:PLATE', 'IFCTANK:PRESSUREVESSEL'].every((s) => EQ.TYPES.some((k) => EQ.TYPE[k].ifc.cls + ':' + EQ.TYPE[k].ifc.predefined === s)), 'IFC classes: tank, pump, both exchangers, pressure vessel');
  const v = EQ.makeEquipment('vessel-v', { d: 1200, h: 2400, leg: 600 });
  const top = v.nozzles.find((n) => n.name === 'top'), bot = v.nozzles.find((n) => n.name === 'bottom');
  ok(near(top.p[2], 600 + 2400 + 300) && near(bot.p[2], 600 - 300) && near(v.bbox.max[2], 3300) && near(v.bbox.min[2], 0), 'vertical vessel: top nozzle on the head (600 + 2400 + 300), bottom under it, the box from the floor to 3300');
  ok(v.nozzles.every((n) => ['SINK', 'SOURCE', 'SINKANDSOURCE'].includes(n.flow) && Math.abs(Math.hypot(...n.out) - 1) < 1e-9 && n.size), 'nozzles: a size, a flow direction, a unit direction out');
  ok(v.nozzles.every((n) => n.p.every((c, k) => c >= v.bbox.min[k] - 1e-6 && c <= v.bbox.max[k] + 1e-6)), 'every nozzle is on the equipment (inside its box)');
  const placed = EQ.placeEquipment(v, { x: 1000, y: 2000, z: 0, rot: 90 });
  const feed = v.nozzles.find((n) => n.name === 'feed'), pf = placed.nozzles.find((n) => n.name === 'feed');
  ok(near(pf.p[0], 1000 - feed.p[1]) && near(pf.p[1], 2000 + feed.p[0]) && near(pf.out[0], 0) && near(pf.out[1], 1), 'placed turned a quarter: the feed nozzle (+X) now faces +Y, at the turned position');
  ok(near(placed.bbox.min[0], 1000 - 600, 1) && EQ.isClosed(placed.mesh), 'the placed solid is the same solid, moved');
  const clamped = EQ.makeEquipment('tank', { d: 5, h: 'x', inlet: '6' });
  ok(clamped.params.d === 3000 && clamped.params.h === 3000 && clamped.params.inlet === '6', 'dimensions out of range or not numbers keep their defaults; nozzle sizes are taken');
  ok(EQ.makeEquipment('nope') === null, 'an unknown type is null');
}

section('The router');
{
  const legsOk = (pts) => RT.legsOf(pts).every((l) => ['x', 'y', 'z'].filter((a) => Math.abs(l.b['xyz'.indexOf(a)] - l.a['xyz'.indexOf(a)]) > 1e-6).length === 1);
  const free = RT.route({ from: { p: [0, 0, 0], out: [1, 0, 0] }, to: { p: [3000, 0, 0], out: [-1, 0, 0] }, od: 100 });
  ok(free.ok && free.points.length === 2 && free.length === 3000 && free.bends === 0, 'nozzle facing nozzle on one line: a straight pipe, 3000');
  const el = RT.route({ from: { p: [0, 0, 0], out: [1, 0, 0] }, to: { p: [2000, 1500, 0], out: [0, -1, 0] }, od: 100 });
  ok(el.ok && el.points.length === 3 && el.bends === 1 && el.length === 3500 && legsOk(el.points), 'an L: out of one nozzle along X, into the other from +Y: one bend, 2000 + 1500 = 3500', JSON.stringify(el));
  const wall = { min: [1000, -500, -500], max: [1800, 2500, 3000] };
  const around = RT.route({ from: { p: [0, 0, 1000], out: [1, 0, 0] }, to: { p: [3000, 2000, 1000], out: [-1, 0, 0] }, obstacles: [wall], od: 100 });
  ok(around.ok && legsOk(around.points) && !RT.hitsObstacle(around.points, [wall], 75), 'a wall in the way: a route round it that never comes within clearance (50 + 25) of it', JSON.stringify(around.points));
  const a0 = RT.legsOf(around.points)[0], aN = RT.legsOf(around.points).pop();
  ok(a0.axis === 'x' && a0.b[0] > a0.a[0] && aN.axis === 'x' && aN.b[0] > aN.a[0], 'it leaves the first nozzle along +X and arrives at the second travelling +X (into a nozzle that faces −X)');
  const legs = RT.legsOf(around.points);
  ok(legs.slice(1, -1).every((l) => l.len >= 200 - 1e-6) && legs[0].len >= 200 - 1e-6 && legs[legs.length - 1].len >= 200 - 1e-6, 'every leg is at least the minimum (2 × 100 = 200)', legs.map((l) => Math.round(l.len)).join());
  const again = RT.route({ from: { p: [0, 0, 1000], out: [1, 0, 0] }, to: { p: [3000, 2000, 1000], out: [-1, 0, 0] }, obstacles: [wall], od: 100 });
  ok(JSON.stringify(again.points) === JSON.stringify(around.points), 'the same input gives the same route');
  const up = RT.route({ from: { p: [0, 0, 0], out: [0, 0, 1] }, to: { p: [2000, 0, 3000], out: [0, 0, 1] }, od: 100 });
  ok(up.ok && up.climbs >= 1 && legsOk(up.points) && up.points[0][2] === 0 && up.points[up.points.length - 1][2] === 3000, 'nozzle up to nozzle up at another height: it rises, crosses and comes down into the second');
  const box = { min: [-200, -200, 0], max: [200, 200, 2000] };
  ok(RT.route({ from: { p: [0, 0, 1000], out: [1, 0, 0] }, to: { p: [3000, 0, 1000], out: [-1, 0, 0] }, obstacles: [box], od: 100 }).error === 'blocked-start', 'a nozzle buried in an obstacle: blocked-start');
  ok(RT.route({ from: { p: [0, 0, 0], out: [0.7, 0.7, 0] }, to: { p: [3000, 0, 0], out: [-1, 0, 0] }, od: 100 }).error === 'axis', 'a nozzle that does not face along an axis: refused');
}

section('Isometrics');
{
  const [u1, v1] = IS.project([100, 0, 0]), [u2, v2] = IS.project([0, 100, 0]), [u3, v3] = IS.project([0, 0, 100]);
  ok(near(u1, 86.60254, 1e-4) && near(v1, 50) && near(u2, -86.60254, 1e-4) && near(v2, 50) && near(u3, 0) && near(v3, 100), 'the 30° projection: east to the right and up 30°, north to the left and up 30°, up stays up');
  ok(IS.fmtLen(1250, 'mm') === '1250' && IS.fmtLen(1250, 'in') === '4\'-1 1/4"' && IS.fmtLen(25.4, 'in') === '1"' && IS.fmtLen(3048, 'in') === '10\'-0"', 'lengths: 1250 mm = 4\'-1 1/4"; 25.4 = 1"; 3048 = 10\'-0"');
  const run = { id: 'r', tag: '3"-PW-1', size: '3', mat: 'steel', cls: '40', spec: 'CS40', od: 88.9, points: [[0, 0, 0], [1000, 0, 0], [1000, 500, 0], [1000, 500, 800]], valves: [{ s: 500, kind: 'gate' }], spools: [{ id: 'S1', s0: 0, s1: 2300 }] };
  const B = IS.bom([run], 'mm');
  const row = (d) => B.rows.find((r) => r[2] === d);
  ok(row('Pipe')[1] === '2300 mm' && row('90° elbow')[1] === '2' && row('Gate valve')[1] === '1' && row('Butt weld')[1] === '6', 'BOM: 1000 + 500 + 800 = 2300 of pipe, 2 elbows, 1 gate valve, 2 × 2 + 2 = 6 welds', JSON.stringify(B.rows));
  const r = IS.iso({ runs: [run], units: 'mm', title: { project: 'Test', drawing: 'ISO-1' } });
  const texts = r.entities.filter((e) => e.type === 'text').map((e) => e.s);
  ok(['1000', '500', '800'].every((s) => texts.includes(s)), 'every leg is dimensioned with its true length (1000, 500, 800)', texts.join(' '));
  ok(texts.includes('NTS') && texts.includes('S1') && texts.includes('3"-PW-1') && texts.includes('EL 0') && texts.includes('EL 800') && texts.includes('ISO-1'), 'NTS, the spool balloon, the tag, elevations at both ends, the drawing number');
  ok(r.entities.every((e) => { const pts = e.type === 'line' ? [[e.x1, e.y1], [e.x2, e.y2]] : e.type === 'poly' ? e.pts.map((p) => [p.x, p.y]) : e.type === 'text' || e.type === 'circle' ? [[e.x ?? e.cx, e.y ?? e.cy]] : e.loops.flatMap((l) => l.map((_, i) => (i % 2 ? null : [l[i], l[i + 1]])).filter(Boolean)); return pts.every(([x, y]) => x >= 0 && x <= 420 && y >= 0 && y <= 297); }), 'everything fits on the A3 sheet');
  ok(r.scale > 0 && r.notes.includes('Not to scale'), 'it says Not to scale');
  ok(IS.iso({ runs: [] }).entities.length === 0, 'no runs, no drawing');
  const svg = IS.toSvg(r);
  ok(svg.startsWith('<svg') && svg.includes('NTS') && svg.endsWith('</svg>'), 'SVG out');
  // DXF out, read back by CadCraft's own reader
  const dxf = IS.toDxf(r);
  const { readDxf } = await import(pathToFileURL(path.join(CAD, 'dxf.js')).href);
  const d = readDxf(dxf);
  const ents = d.entities || [];
  ok(ents.filter((e) => e.type === 'line').length >= 15 && ents.some((e) => e.type === 'text' && /NTS/.test(e.s || e.text || '')) && ents.some((e) => e.type === 'circle'), 'DXF out: CadCraft reads its lines, circle and text back', JSON.stringify(ents.slice(0, 2)) + ' ' + ents.length);
  const north = IS.iso({ runs: [run], north: 90 });
  ok(north.entities.length === r.entities.length, 'turning the north changes the picture, not its parts');
}

section('Factory layout');
{
  const it = (id, x, y, extra = {}) => ({ id, name: id, w: 1000, d: 600, h: 1200, x, y, rot: 0, clear: { front: 0, back: 0, left: 0, right: 0 }, ...extra });
  const c = LY.corners(it('a', 0, 0));
  ok(JSON.stringify(c) === '[[-500,-300],[500,-300],[500,300],[-500,300]]', 'corners of a 1000 × 600 item at the origin');
  const c90 = LY.corners(it('a', 0, 0, { rot: 90 }));
  ok(near(c90[0][0], 300) && near(c90[0][1], -500), 'turned a quarter: the first corner goes from (−500, −300) to (300, −500)');
  const codes = (opt) => LY.checkLayout(opt).map((f) => f.code).join();
  ok(codes({ items: [it('a', 0, 0), it('b', 800, 0)] }) === 'overlap', 'two items 800 apart (1000 wide) overlap');
  ok(codes({ items: [it('a', 0, 0), it('b', 1000, 0)], minAisle: 0 }) === '', 'edges that only touch do not overlap');
  const g = LY.checkLayout({ items: [it('a', 0, 0), it('b', 1500, 0)] });
  ok(g.length === 1 && g[0].code === 'aisle' && g[0].vars.gap === 500, 'a 500 gap is narrower than the 900 aisle limit', JSON.stringify(g));
  ok(codes({ items: [it('a', 0, 0), it('b', 2500, 0)] }) === '', 'a 1500 gap is fine');
  ok(codes({ items: [it('a', 5000, 0)], room: { x0: 0, y0: -1000, x1: 4000, y1: 1000 } }) === 'outside', 'an item outside the room');
  const ba = LY.checkLayout({ items: [it('a', 0, 0, { clear: { front: 800, back: 0, left: 0, right: 0 } }), it('b', 0, 1000, { d: 400 })], minAisle: 0 });
  ok(ba.length === 1 && ba[0].code === 'blocked-access' && ba[0].vars.side === 'front', 'something standing in the 800 in front of an item: blocked-access on its front', JSON.stringify(ba));
  const wall = LY.checkLayout({ items: [it('a', 0, 0, { clear: { front: 800, back: 0, left: 0, right: 0 } })], obstacles: [{ name: 'column', x0: -100, y0: 500, x1: 100, y1: 700 }] });
  ok(wall.length === 1 && wall[0].code === 'blocked-access' && wall[0].vars.by === 'column', 'a column in the access strip is named');
  const fl = LY.checkLayout({ items: [it('a', 0, 0, { weight: 2000 })] });
  ok(fl.length === 1 && fl[0].code === 'floor-load' && fl[0].vars.load === 3333, '2000 kg on 0.6 m²: 3333 kg/m², over the 1000 limit');
  ok(LY.checkLayout({ items: [it('a', 0, 0, { weight: 500 })] }).length === 0, '500 kg on 0.6 m²: 833, under it');
  const lib = LY.itemFromLibrary({ uuid: 'u-1', name: 'Mixer', params: { width: 1200, depth: 800, height: 900, weight_kg: 150 } }, { x: 10, y: 20, rot: 90 });
  ok(lib && lib.w === 1200 && lib.d === 800 && lib.weight === 150 && lib.x === 10 && lib.rot === 90 && lib.name === 'Mixer', 'a LibraryCraft item (params width, depth, height, weight_kg) becomes a layout item');
  ok(LY.itemFromLibrary({ params: { width: 0, depth: 5 } }) === null && LY.itemFromLibrary(null) === null, 'an item with no footprint is no layout item');
  const ps = LY.itemFromPset([{ name: 'Name', value: 'Pump' }, { name: 'Width', value: 600 }, { name: 'Depth', value: 400 }, { name: 'Height', value: 500 }, { name: 'WeightKg', value: 80 }], { x: 1, y: 2 });
  ok(ps && ps.w === 600 && ps.weight === 80 && ps.name === 'Pump', 'and so is a CadCraft_Equipment property set');
  ok(LY.flowLength([it('a', 0, 0), it('b', 3000, 1000), it('c', 3000, 5000)], ['a', 'b', 'c']) === 3000 + 1000 + 4000, 'flow path a → b → c along X then Y: 4000 + 4000 = 8000');
  ok(LY.layoutItem({ w: 0, d: 5 }) === null && LY.layoutItem({ w: 5, d: 5, clear: { front: -3 } }).clear.front === 800, 'a bad item is refused; a bad clearance takes the default');
}

section('Equipment as an IFC file, read back by an independent reader');
{
  const g1 = IO.guid('s', 1), g2 = IO.guid('s', 2);
  ok(g1.length === 22 && /^[0-3][0-9A-Za-z_$]{21}$/.test(g1) && g1 !== g2 && IO.guid('s', 1) === g1 && IO.guid() !== IO.guid(), 'GlobalIds: 22 characters, the first of the four from 0 to 3, repeatable from a seed, random without one');
  ok(IO.esc("it's a \\ pump é") === "it''s a \\\\ pump \\X2\\00E9\\X0\\", 'STEP strings: quote and backslash doubled, accents as \\X2\\');
  const items = [
    { equip: EQ.makeEquipment('pump-cf'), tag: 'P-101', desc: 'Transfer pump', x: 2000, y: 1000, z: 0, rot: 90 },
    { equip: EQ.makeEquipment('tank'), tag: 'T-101', x: 8000, y: 0, z: 0 },
    { equip: EQ.makeEquipment('exch-shell'), tag: "E-1'01", x: 0, y: 6000, z: 0, rot: 180 },
  ];
  const out = IO.writeIfc({ name: 'Skid', items, seed: 'x' });
  ok(out.counts.equipment === 3 && out.counts.ports === 2 + 4 + 4 && out.counts.triangles > 100, 'three items, 2 + 4 + 4 ports', JSON.stringify(out.counts));
  ok(out.text.startsWith('ISO-10303-21;') && out.text.trimEnd().endsWith('END-ISO-10303-21;') && /FILE_SCHEMA\(\('IFC4'\)\)/.test(out.text) && /IFCPUMP\(/.test(out.text) && /IFCTANK\(/.test(out.text) && /IFCHEATEXCHANGER\(/.test(out.text), 'IFC4 STEP text with IfcPump, IfcTank and IfcHeatExchanger');
  ok(IO.writeIfc({ name: 'Skid', items, seed: 'x' }).text === out.text, 'the same input and seed give the same file, byte for byte');
  let WebIFC = null;
  try { const { createRequire } = await import('node:module'); WebIFC = createRequire(import.meta.url)(path.resolve(DEV, '../../../../../tools/bimcraft-test/node_modules/web-ifc')); } catch { /* the oracle is optional */ }
  if (!WebIFC) console.log('  (web-ifc oracle not installed: (cd tools/bimcraft-test && npm install))');
  else {
    const api = new WebIFC.IfcAPI();
    await api.Init();
    const mid = api.OpenModel(out.bytes);
    const count = (t) => api.GetLineIDsWithType(mid, t).size();
    ok(count(WebIFC.IFCPUMP) === 1 && count(WebIFC.IFCTANK) === 1 && count(WebIFC.IFCHEATEXCHANGER) === 1 && count(WebIFC.IFCDISTRIBUTIONPORT) === 10 && count(WebIFC.IFCBUILDINGSTOREY) === 1, 'web-ifc reads one pump, one tank, one exchanger, ten ports, one storey');
    const pump = api.GetLine(mid, api.GetLineIDsWithType(mid, WebIFC.IFCPUMP).get(0));
    ok(pump.Name.value === 'P-101' && pump.Tag.value === 'P-101' && /ENDSUCTION/.test(String(pump.PredefinedType.value)), 'the pump keeps its tag and type', JSON.stringify([pump.Name, pump.PredefinedType]));
    const ex = api.GetLine(mid, api.GetLineIDsWithType(mid, WebIFC.IFCHEATEXCHANGER).get(0));
    ok(ex.Name.value === "E-1'01", 'a quote in a tag survives');
    const flows = [];
    for (const id of api.GetLineIDsWithType(mid, WebIFC.IFCDISTRIBUTIONPORT)) flows.push(api.GetLine(mid, id).FlowDirection.value);
    ok(flows.filter((f) => f === 'SINK').length === 4 && flows.filter((f) => f === 'SOURCE').length === 6, 'four ports take fluid in (pump suction, tank inlet, exchanger tube and shell), six send it out');
    let tris = 0;
    api.StreamAllMeshes(mid, (m) => { const gs = m.geometries; for (let i = 0; i < gs.size(); i++) tris += api.GetGeometry(mid, gs.get(i).geometryExpressID).GetIndexDataSize() / 3; });
    ok(tris === out.counts.triangles, 'web-ifc draws all ' + out.counts.triangles + ' triangles', String(tris));
    api.CloseModel(mid);
  }
  ok(IO.writeIfc({ items: [] }).counts.equipment === 0 && !/IFCPUMP/.test(IO.writeIfc({ items: [{ equip: null }] }).text), 'no equipment: an empty project, nothing invented');
}

// ---- 0.8 (mep-08): API 1.1 wiring — nozzles as addPorts shapes, layout from placements, spool balloons
{
  const PL = await mine('lib/place.js');
  const pump = EQ.makeEquipment('pump-cf');
  const ports = pump.nozzles.map(PL.portOf);
  const suc = ports.find((p) => p.name === 'suction'), dis = ports.find((p) => p.name === 'discharge');
  ok(ports.length === pump.nozzles.length && ports.every((p) => p.kind === 'pipe' && p.shape === 'round' && p.size > 0 && Array.isArray(p.axis) && [p.x, p.y, p.z].every(Number.isFinite)), 'every nozzle becomes an addPorts port: pipe, round, sized, with a place and an axis');
  ok(suc.direction === 'in' && dis.direction === 'out', 'suction is an inlet, discharge an outlet');
  const nz = pump.nozzles.find((n) => n.name === 'suction');
  ok(suc.nominal === nz.size && Math.abs(suc.size - T.pipeSize('steel', '40', nz.size).od * 25.4) < 0.11 && suc.x === nz.p[0] && suc.axis[0] === nz.out[0], 'size = the steel pipe\'s outside diameter for the nozzle\'s NPS (' + suc.size + ' mm for ' + nz.size + '"), nominal kept, place and facing as the nozzle\'s');
  // placements() → layout items: lengths in model units (feet here) converted to mm
  const pl = { id: 77, name: 'Lathe', itemNumber: '4', x: 1000, y: 2000, rot: 90, equipment: { Name: 'Lathe', Width: 4, Depth: 2, Height: 3, WeightKg: 900 } };
  const it = LY.itemFromPlacement(pl, 304.8);
  ok(it && it.w === 1219.2 && it.d === 609.6 && Math.abs(it.h - 914.4) < 1e-6 && it.weight === 900 && it.tag === '4' && it.x === 1000 && it.rot === 90, 'a placed piece: Width/Depth/Height in feet converted to mm, weight, tag from its item number, place and turn', JSON.stringify(it));
  ok(LY.itemFromPlacement({ id: 1, name: 'x', equipment: {} }, 1) === null, 'a placement with no width and depth is not a layout item');
  const two = [LY.itemFromPlacement({ ...pl, id: 'a' }, 304.8), LY.itemFromPlacement({ ...pl, id: 'b', x: 1200, y: 2100 }, 304.8)];
  ok(LY.checkLayout({ items: two, minAisle: 900, floorLoad: 1000 }).some((f) => f.code === 'overlap'), 'two placed pieces on top of each other: the layout check finds the overlap');
  // spools from the model number the isometric's balloons
  const run = { id: 'g1', size: '3', mat: 'steel', cls: '40', od: 88.9, points: [[0, 0, 0], [2400, 0, 0], [2400, 1500, 0]], valves: [], spools: [{ id: 'CHW-12-S01', s0: 0, s1: 2400 }, { id: 'CHW-12-S02', s0: 2400, s1: 3900 }] };
  const svg = IS.toSvg(IS.iso({ runs: [run], units: 'mm', title: { project: 'p', drawing: 'd', drawn: 'x', date: '2026-10-27' } }));
  ok(svg.includes('CHW-12-S01') && svg.includes('CHW-12-S02'), 'the isometric balloons the spool ids BimCraft numbered');
}

for (const f of fs.readdirSync(HERE).filter((x) => /^t-.*\.mjs$/.test(x)).sort()) await import(pathToFileURL(path.join(HERE, f)).href);

console.log('\n' + pass + ' passed, ' + fail + ' failed');
process.exit(fail ? 1 : 0);
