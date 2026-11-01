/* SPDX-License-Identifier: Apache-2.0 */
// Part of test.mjs: TrussCraft against a REAL BimCraft model (the same web-ifc engine the app uses, loaded as bin/test-bimcraft.mjs loads it): four walls
// and a roof are drawn through BimCraft's own tools, readRoofsFrom() finds the roof's outline, pitch and overhang, the trusses are laid out over it,
// placeTrusses() writes IfcMember solids through model-ops' op() (one undo step), and the saved file holds them, contained in the storey, with
// the property set. If the engine cannot start here the section says so and is skipped.
const { ok, section, DEV, ADDON, near } = globalThis.__trussTest;
import fs from 'node:fs';
import path from 'node:path';
import { register } from 'node:module';
import { pathToFileURL } from 'node:url';

section('TrussCraft in a real BimCraft model (walls, roof, trusses, saved IFC)');
const ROOT = path.resolve(DEV, '../../../../..');
let engine = null;
try {
  register('data:text/javascript,' + encodeURIComponent(`import { pathToFileURL } from 'node:url';
export async function resolve(spec, ctx, next) {
  if (spec === 'manifold-3d') return { url: ${JSON.stringify(pathToFileURL(path.join(ROOT, 'public_html/assets/vendor/manifold-3d/current/manifold.js')).href)}, shortCircuit: true };
  if (spec === 'proj4') return { url: ${JSON.stringify(pathToFileURL(path.join(ROOT, 'public_html/assets/vendor/proj4/current/proj4.esm.min.js')).href)}, shortCircuit: true };
  if (spec === 'delaunator') return { url: ${JSON.stringify(pathToFileURL(path.join(ROOT, 'public_html/assets/vendor/delaunator/current/index.js')).href)}, shortCircuit: true };
  if (spec === 'robust-predicates') return { url: ${JSON.stringify(pathToFileURL(path.join(ROOT, 'public_html/assets/vendor/robust-predicates/current/index.js')).href)}, shortCircuit: true };
  return next(spec, ctx);
}`), import.meta.url);
  const imp = (f) => import(pathToFileURL(path.join(DEV, f)).href);
  const own = path.join(DEV, 'ifc/api.js');
  const WebIFC = await import(pathToFileURL(fs.existsSync(own) ? own : path.join(ROOT, 'lib/ifc/api.js')).href);
  const { IfcModel } = await imp('ifc-model.js');
  const { ModelWriter } = await imp('model-write.js');
  const OPS = await imp('model-ops.js');
  const { IfcEditor } = await imp('ifc-edit.js');
  const N = await imp('new-model.js');
  const quiet = (fn) => async (...a) => { const l = console.log, w = console.warn; console.log = console.warn = () => {}; try { return await fn(...a); } finally { console.log = l; console.warn = w; } };
  const text = N.newBuilding({ name: 'Trusses', levels: N.stackLevels(2, 3000, (i) => 'Level ' + (i + 1)), fileName: 't.ifc', now: new Date('2026-10-30T12:00:00Z') });
  const eng = await quiet(IfcModel.create)(WebIFC, null);
  await quiet((b) => eng.load(b))(new TextEncoder().encode(text));
  engine = { ed: new IfcEditor(WebIFC, eng), WebIFC, ModelWriter, OPS };
} catch (e) {
  console.log('  (skipped: the BimCraft engine did not start here — ' + String(e.message).split('\n')[0] + ')');
}
if (engine) {
  const { ed, WebIFC, ModelWriter, OPS } = engine;
  const levels = OPS.snapshotModel(ed).levels, [L1, L2] = levels;
  const P = [[0, 0], [12000, 0], [12000, 8000], [0, 8000]];
  ed.modelChange(OPS.drawWalls({ storey: L1.guid, segs: P.map((p, i) => ({ a: p, b: P[(i + 1) % 4] })), typeKey: 'ext-2x6', topLevel: L2.guid }));
  ed.modelChange(OPS.placeRoof({ storey: L1.guid, seed: [6000, 4000], pitch: 30, overhang: 450, edges: '' }));
  const w = () => new ModelWriter(WebIFC, ed.api, ed.mid);
  const { readRoofsFrom } = await import(pathToFileURL(path.join(ADDON, 'lib/roofs.js')).href);
  const roofs = readRoofsFrom(w());
  ok(roofs.length === 1 && near(roofs[0].pitch, 30, 1e-6) && near(roofs[0].overhang, 450, 0.5) && roofs[0].storey === L1.guid, 'readRoofsFrom: one roof, 30 degrees, 450 overhang, on Level 1', JSON.stringify(roofs.map((r) => [r.pitch, r.overhang, r.storey])));
  const r = roofs[0], xs = r.outline.map((q) => q[0]), ys = r.outline.map((q) => q[1]);
  ok(r.outline.length === 4 && Math.max(...xs) - Math.min(...xs) > 11900 && Math.max(...ys) - Math.min(...ys) > 7900 && r.top > 2000, 'its outline is the walls\' outer faces (about 12 × 8 m) and it sits on the wall tops', JSON.stringify([r.outline, r.top]));
  const LY = await import(pathToFileURL(path.join(ADDON, 'lib/layout.js')).href), DS = await import(pathToFileURL(path.join(ADDON, 'lib/design.js')).href), PL = await import(pathToFileURL(path.join(ADDON, 'lib/place.js')).href), TB = await import(pathToFileURL(path.join(ADDON, 'lib/tables.js')).href);
  const L = LY.layoutTrusses(r.outline, { spacing: 900, gables: r.gables });
  ok(L.ok && L.groups.length === 1 && Math.abs(L.groups[0].span - (Math.max(...ys) - Math.min(...ys))) <= 1 && L.trusses.length >= 14, 'layout over that outline: one span across the short way, trusses at no more than 900', JSON.stringify([L.count, L.groups]));
  const d = DS.designTruss({ type: 'king', span: L.groups[0].span, pitch: 30, overhang: 450, heel: 200 }, { loads: TB.DEFAULT_LOADS, species: TB.DEFAULT_SPECIES[0], spacing: 900 });
  const OPSM = await import(pathToFileURL(path.join(DEV, 'model-ops.js')).href);
  const count = () => (new TextDecoder().decode(ed.save()).match(/IFCMEMBER\(/g) || []).length, before = count(), n0 = ed.changes.length;
  const run = OPSM.op((ww) => PL.placeTrusses(ww, { storey: ww.byGuid(r.storey), trusses: L.trusses.slice(0, 3), designFor: () => d, z0: r.top, species: 'SPF' }).length);
  ed.modelChange(run, { label: 'TrussCraft: Place trusses', verb: '' });
  ok(ed.changes.length === n0 + 1, 'placing three trusses is one undo step');
  const bytes = ed.save(), txt = new TextDecoder().decode(bytes);
  const members = count() - before;
  ok(members === 3 * d.g.members.length, 'the saved IFC holds an IfcMember per member (' + members + ' of ' + 3 * d.g.members.length + ')');
  ok(/CadCraft_Truss/.test(txt) && /Indicative - not engineered truss design/.test(txt) && /'T1 TC1'/.test(txt), 'with the CadCraft_Truss set and the indicative status, named "T1 TC1"…');
  ed.undo?.();
  ok(count() === before, 'undo takes them all away');
  // the roof set from BimCraft's own roof geometry: hip ends, girder + jacks, placed as IfcMembers in one undo step
  const RS = await import(pathToFileURL(path.join(ADDON, 'lib/roofset.js')).href), SD = await import(pathToFileURL(path.join(ADDON, 'lib/setdesign.js')).href);
  ok(r.plan && r.plan.faces.length === 4 && r.plan.lines.some((l) => l.kind === 'hip') && r.plan.lines.some((l) => l.kind === 'ridge'), 'readRoofsFrom also hands over the roof\'s own geometry (four faces; hip and ridge lines)', JSON.stringify(r.plan && r.plan.lines.map((l) => l.kind)));
  const Lh = RS.layoutRoof(r, { spacing: 900, hipMethod: 'girder', base: { panels: 6, heel: 150 } });
  const kinds = {};
  for (const x of Lh.trusses) kinds[x.kind] = (kinds[x.kind] || 0) + 1;
  ok(Lh.ok && kinds.girder === 2 && kinds.jack > 0 && kinds.common > 0, 'the model\'s hip roof (30°, 450 overhang) gives commons, two girders and jacks', JSON.stringify(kinds));
  const dsh = SD.designSet(Lh, { loads: TB.DEFAULT_LOADS, species: TB.DEFAULT_SPECIES[0] });
  ok([...dsh.values()].every((x) => x.ok && x.res.status === 'ok'), 'every distinct design of the model\'s roof solves (' + dsh.size + ')');
  const pick = [Lh.trusses.find((x) => x.kind === 'girder'), Lh.trusses.find((x) => x.kind === 'jack'), Lh.trusses.find((x) => x.kind === 'common')];
  const need = pick.reduce((a, x) => a + dsh.get(x.key).g.members.length, 0), n1 = ed.changes.length, b1 = count();
  ed.modelChange(OPSM.op((ww) => PL.placeTrusses(ww, { storey: ww.byGuid(r.storey), trusses: pick, designFor: (sp, tr) => dsh.get(tr.key), z0: r.top, species: 'SPF' }).length), { label: 'TrussCraft: Place trusses', verb: '' });
  ok(ed.changes.length === n1 + 1 && count() - b1 === need, 'a girder, a jack and a common truss are placed in one undo step (' + (count() - b1) + ' of ' + need + ' IfcMembers)');
  const txt2 = new TextDecoder().decode(ed.save());
  ok(/'T\d+ TC1'/.test(txt2) && /Role/.test(txt2), 'with their marks and the CadCraft_Truss set');
  ed.undo?.();
  ok(count() === b1, 'undo takes them away');
}
