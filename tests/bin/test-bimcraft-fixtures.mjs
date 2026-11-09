#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * test-bimcraft-fixtures.mjs — plumbing fixtures: the starter fixture families (family-starters.js) read, draw and carry their
 * connectors; which fixture a family is (`fixture`, mep/fixtures.js) is checked, edited, written on its ports and read back with
 * them (mep-model.js readFixturePorts). On a new building made here (IFC4, mm).
 *   node bin/test-bimcraft-fixtures.mjs [--verbose]
 */
import fs from 'node:fs';
import path from 'node:path';
import { register } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const APP = path.join(ROOT, 'public_html/assets/apps/bimcraft/dev');
const VERBOSE = process.argv.includes('--verbose');
register('data:text/javascript,' + encodeURIComponent(`export async function resolve(spec, ctx, next) {
  if (spec === 'manifold-3d') return { url: ${JSON.stringify(pathToFileURL(path.join(ROOT, 'public_html/assets/vendor/manifold-3d/current/manifold.js')).href)}, shortCircuit: true };
  return next(spec, ctx);
}`), import.meta.url);
(await import(pathToFileURL(path.join(APP, 'i18n.js')).href)).init({ strings: JSON.parse(fs.readFileSync(path.join(APP, 'lang/en.json'), 'utf8')) });
const imp = (f) => import(pathToFileURL(path.join(APP, f)).href);
const WebIFC = await imp('ifc/api.js');
const { IfcModel } = await imp('ifc-model.js');
const { IfcEditor } = await imp('ifc-edit.js');
const { ModelWriter } = await imp('model-write.js');
const OPS = await imp('model-ops.js');
const N = await imp('new-model.js');
const FM = await imp('family-model.js');
const FE = await imp('family-edit.js');
const FO = await imp('family-ops.js');
const FS = await imp('family-starters.js');
const FX = await imp('mep/fixtures.js');
const M = await imp('mep-model.js');

let pass = 0, fail = 0;
const ok = (c, m, detail = '') => { if (c) { pass++; if (VERBOSE) console.log('  ok   ' + m); } else { fail++; console.log('  FAIL ' + m + (detail ? ' (' + detail + ')' : '')); } };
const quiet = (fn) => async (...a) => { const l = console.log, w = console.warn; console.log = console.warn = () => {}; try { return await fn(...a); } finally { console.log = l; console.warn = w; } };
const dec = (b) => new TextDecoder().decode(b);
const count = (txt, re) => (txt.match(re) || []).length;

console.log('== the fixture table (mep/fixtures.js)');
ok(FX.FIXTURES.wc.uhc === 6 && FX.FIXTURES.wc.dnMin === 100 && FX.FIXTURES.lav.uhc === 1 && FX.FIXTURES.sink.uhc === 3 && FX.FIXTURES.sink.dnMin === 50 && FX.FIXTURES.shower.uhc === 2 && FX.FIXTURES.laundry.uhc === 3,
  'NBR 8160: water closet 6 UHC on DN 100, lavatory 1, kitchen sink 3 on DN 50, shower 2, laundry tub 3');
ok(FX.FIXTURES.wc.dfu === 3 && FX.FIXTURES.wc.trapIn === 3 && FX.FIXTURES.lav.dfu === 1 && FX.FIXTURES.sink.dfu === 2 && FX.FIXTURES.shower.dfu === 2 && FX.FIXTURES.laundry.dfu === 2, 'IPC Table 709.1: water closet (1.6 gpf, private) 3 DFU on 3 in., lavatory 1, sink, shower and laundry tray 2');

console.log('== the starter fixtures (family-starters.js)');
ok(FS.STARTER_FIXTURES.length === 6 && FS.STARTER_FIXTURES.every((k) => FS.STARTER_KEYS.includes(k)), 'six starter fixtures (a bath tub joined in 0.8 EG.60), among the starter keys');
for (const key of FS.STARTER_FIXTURES) {
  const r = FM.readFamily(FS.starterRecipe(key));
  const fam = r.family, ev = r.ok ? FM.evaluateFamily(fam, {}) : null;
  const dr = ev?.connectors.find((c) => c.system === 'san'), wa = ev?.connectors.find((c) => c.system === 'cw');
  ok(r.ok && ev.ok && fam.kind === 'fixture' && fam.ifc.class === 'IfcSanitaryTerminal' && FX.FIXTURES[fam.fixture] && dr?.flow === 'out' && dr.size === FX.FIXTURES[fam.fixture].dnMin && wa?.flow === 'in' && wa.size === 20,
    key + ' (' + fam?.name + '): reads and draws; a drain at the smallest fixture drain of NBR 8160 (DN ' + dr?.size + ') and a DN 20 water connector', JSON.stringify(r.errors));
}
const wc = FM.evaluateFamily(FM.readFamily(FS.starterRecipe('fam-wc')).family, {});
const out = wc.connectors.find((c) => c.system === 'san');
ok(out.p[2] === 0 && out.dir[2] === -1 && out.p[1] === 680 - 300, 'the water closet\'s drain: in its floor, 300 from the wall behind it, going down');

console.log('== which fixture a family is');
const basin = { format: 'cadcraft-family', version: 1, key: 'fam-b', name: 'B', kind: 'fixture', host: 'none', ifc: { class: 'IfcSanitaryTerminal' },
  params: [{ key: 'Width', kind: 'length', value: 500 }], solids: [{ id: 's1', op: 'box', x0: '0', y0: '0', z0: '0', x1: 'Width', y1: '300', z1: '200' }], booleans: [] };
ok(FM.readFamily({ ...basin, fixture: 'lav' }).family.fixture === 'lav' && !('fixture' in FM.readFamily(basin).family), 'a fixture kind is kept; none, none kept');
ok(FM.readFamily({ ...basin, fixture: 'bidet' }).errors[0]?.key === 'fam.err.fixture', 'a kind BimCraft does not know: refused');
let e = FE.setFixture(basin, 'shower');
ok(e.ok && e.fam.fixture === 'shower' && !basin.fixture && !('fixture' in FE.setFixture(e.fam, '').fam), 'setFixture sets it, and "" takes it off');
ok(FE.setFixture(basin, 'nope').error?.key === 'fam.err.fixture', 'setFixture with an unknown kind: refused');

console.log('== placed in a building (family-ops.js, mep-model.js)');
const text = N.newBuilding({ name: 'Bath', levels: N.stackLevels(1, 3000, () => 'Ground'), fileName: 'b.ifc', now: new Date('2026-10-23T12:00:00Z') });
const eng = await quiet(IfcModel.create)(WebIFC, null);
await quiet((b) => eng.load(b))(new TextEncoder().encode(text));
const ed = new IfcEditor(WebIFC, eng);
const L1 = OPS.snapshotModel(ed).levels[0].guid;
const w0 = new ModelWriter(WebIFC, ed.api, ed.mid);
ok(FS.STARTER_FIXTURES.every((k) => FO.unhostedFamilies(w0).some((f) => f.key === k && f.starter)), 'Place family offers the five fixtures');
FS.STARTER_FIXTURES.forEach((family, i) => ed.modelChange(FO.placeFamily({ storey: L1, family, x: i * 1500, y: 0 }), { label: 'Place' }));
const txt = dec(ed.save());
ok(count(txt, /IFCSANITARYTERMINAL\(/g) === 6 && /IFCSANITARYTERMINALTYPE\([^;]*\.TOILETPAN\.\)/.test(txt) && /IFCSANITARYTERMINALTYPE\([^;]*\.WASHHANDBASIN\.\)/.test(txt) && /IFCSANITARYTERMINALTYPE\([^;]*\.SHOWER\.\)/.test(txt) && /IFCSANITARYTERMINALTYPE\([^;]*\.BATH\.\)/.test(txt),
  'six IfcSanitaryTerminal; their types say what they are (TOILETPAN, WASHHANDBASIN, SINK, SHOWER, BATH)');
ok(count(txt, /IFCDISTRIBUTIONPORT\(/g) === 12 && count(txt, /IFCLABEL\('wc'\)/g) === 2, 'twelve ports, each with the fixture it belongs to (the water closet\'s two say "wc")');
const fx = M.readFixturePorts(new ModelWriter(WebIFC, ed.api, ed.mid));
ok(fx.length === 12 && fx.filter((q) => q.system === 'san').map((q) => q.fixture).sort().join() === 'bath,laundry,lav,shower,sink,wc', 'readFixturePorts gives each drain\'s fixture');
const eng2 = await quiet(IfcModel.create)(WebIFC, null);
const m2 = await quiet((b) => eng2.load(b))(ed.save());
ok(m2.elements >= 6, 'the file opens again');

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
