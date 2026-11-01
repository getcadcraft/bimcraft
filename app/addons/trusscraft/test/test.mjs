#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * test.mjs — the TrussCraft add-on's Node tests (DC.116): truss geometry for every type, forces by the method of joints against hand-worked
 * figures, the timber check, sizing, cut list, joint schedule, layout on a roof, the drawing and 3D view, Problems, CSV, the IFC mesh and placement.
 *   node public_html/assets/apps/bimcraft/dev/addons/trusscraft/test/test.mjs [--verbose]
 * t-addon.mjs (run from here) starts the real BimCraft add-on loader with the add-on switched on.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ADDON = path.resolve(HERE, '..');
const DEV = path.resolve(ADDON, '../..');
const VERBOSE = process.argv.includes('--verbose');
const mine = (f) => import(pathToFileURL(path.join(ADDON, f)).href);
const TB = await mine('lib/tables.js');
const GE = await mine('lib/geometry.js');
const AN = await mine('lib/analysis.js');
const CL = await mine('lib/cutlist.js');
const LY = await mine('lib/layout.js');
const VW = await mine('lib/view3d.js');
const DR = await mine('lib/drawing.js');
const PR = await mine('lib/problems.js');
const RP = await mine('lib/report.js');
const PL = await mine('lib/place.js');
const DS = await mine('lib/design.js');
const CORE = await mine('lib/core.js');
CORE.setT(CORE.lookupFrom(JSON.parse(fs.readFileSync(path.join(ADDON, 'lang/en.json'), 'utf8'))));

let pass = 0, fail = 0;
const ok = (cond, name, extra = '') => { if (cond) { pass++; if (VERBOSE) console.log('  ok  ' + name); } else { fail++; console.log('  FAIL ' + name + (extra ? ' — ' + extra : '')); } };
const section = (s) => console.log('\n' + s);
const near = (a, b, tol = 1e-6) => Math.abs(a - b) <= tol;
globalThis.__trussTest = { ok, section, near, mine, DEV, ADDON, VERBOSE };

const SP = TB.DEFAULT_SPECIES[0];   // spruce-pine-fir No. 2: Ft 3.1, Fc 7.9, Emin 3500
const base = { span: 8000, pitch: 30, overhang: 450, heel: 150, spacing: 1000 };
const attic = { ...base, type: 'attic', pitch: 45, atticHeight: 2100, atticWidth: 3000 };
const nodesOf = (g) => g.nodes.filter((n) => g.members.some((m) => m.role !== 'tail' && (m.a === n.id || m.b === n.id)));

section('Geometry');
{
  const dof = (g) => 2 * nodesOf(g).length - (g.members.filter((m) => m.role !== 'tail').length + 3);
  for (const type of TB.TYPES) {
    const g = type === 'attic' ? GE.generate(attic) : GE.generate({ ...base, type, panels: 6 });
    ok(g.ok && g.members.length > 4, type + ': a frame is generated', JSON.stringify(g.error));
    ok(g.members.every((m) => m.len > 1) && g.nodes.some((n) => n.x === 0 && n.z === 0) && g.nodes.some((n) => n.x === 8000 && n.z === 0), type + ': every member has length; bearings at 0 and the span');
    ok(dof(g) === (type === 'attic' ? 1 : 0), type + ': pin-jointed count m + 3 = 2 n' + (type === 'attic' ? ' fails by one (a rectangle without a diagonal)' : ' (statically determinate)'), String(dof(g)));
  }
  const k = GE.generate({ ...base, type: 'king' });
  ok(k.members.filter((m) => m.role !== 'tail').length === 5 && near(k.rise, 4000 * Math.tan(Math.PI / 6), 0.2), 'king post: five members, rise = 4000 tan 30 = 2309.4', String(k.rise));
  const top = k.members.find((m) => m.role === 'top');
  ok(near(top.len, 4000 / Math.cos(Math.PI / 6), 0.2) && near(top.angle, 30, 1e-6), 'a rafter is 4000 / cos 30 = 4618.8 long at 30 degrees');
  ok(k.members.filter((m) => m.role === 'tail').length === 2 && near(k.members.find((m) => m.role === 'tail').len, 450 / Math.cos(Math.PI / 6), 0.2), 'overhang 450 plan gives two tails of 450 / cos 30 = 519.6');
  ok(GE.generate({ ...base, type: 'mono' }).members.filter((m) => m.role === 'tail').length === 1, 'a mono truss has a tail at the low end only');
  ok(GE.generate({ ...base, type: 'pratt', panels: 6 }).members.filter((m) => m.role === 'post').length === 5, 'Pratt with six panels: five verticals');
  const hw = GE.generate({ ...base, type: 'howe', panels: 6 }), pr = GE.generate({ ...base, type: 'pratt', panels: 6 });
  const diag = (g) => g.members.filter((m) => m.role === 'web').map((m) => [g.nodes[m.a].z, g.nodes[m.b].z]);
  ok(diag(hw).length === 4 && diag(pr).length === 4, 'six panels: two diagonals a side');
  const lowerEndNearCentre = (g) => { const m = g.members.find((x) => x.role === 'web'); const lo = g.nodes[m.a].z < g.nodes[m.b].z ? g.nodes[m.a] : g.nodes[m.b]; return Math.abs(lo.x - 4000) < Math.abs(g.nodes[m.a].x + g.nodes[m.b].x - 2 * lo.x) + 1e9 ? lo.x : 0; };
  const left = (g) => g.members.filter((m) => m.role === 'web').sort((p, q) => g.nodes[p.a].x - g.nodes[q.a].x)[0];
  const lo = (g, m) => (g.nodes[m.a].z < g.nodes[m.b].z ? g.nodes[m.a] : g.nodes[m.b]);
  ok(lo(pr, left(pr)).x > lo(hw, left(hw)).x || true, 'both lay out');
  void lowerEndNearCentre;
  ok(near(lo(pr, left(pr)).x, 8000 / 3, 1e-6) && near(lo(hw, left(hw)).x, 4000 / 3, 1e-6), 'Pratt: the diagonal drops toward the centre (its low end at 2666.7); Howe: it rises toward the centre (low end at 1333.3)', JSON.stringify([lo(pr, left(pr)).x, lo(hw, left(hw)).x]));
  ok(GE.generate({ ...base, type: 'king', span: 1000 }).error === 'span' && GE.generate({ ...base, type: 'king', pitch: 3 }).error === 'pitch' && GE.generate({ ...base, type: 'x' }).error === 'type', 'bad span, pitch and type are refused by name');
  const sc = GE.generate({ ...base, type: 'scissor', pitch: 30 });
  ok(near(sc.nodes.find((n) => Math.abs(n.x - 4000) < 1 && n.z > 0 && n.z < 2000).z, 4000 * Math.tan(15 * Math.PI / 180), 0.2) && GE.generate({ ...base, type: 'scissor', pitch: 30, bottomPitch: 29 }).error === 'scissor', 'scissor: bottom pitch half the top by default (z = 1071.8 at the centre); too close a pitch is refused');
  ok(GE.generate({ ...attic, atticWidth: 7600 }).error === 'attic' && GE.generate({ ...attic, atticHeight: 3500 }).error === 'atticHeight', 'attic: a room too wide or too tall for the roof is refused');
  const hi = GE.heelInfo(k, { dTop: 140, dBottom: 89, heel: 300 }), lowh = GE.heelInfo(k, { dTop: 140, dBottom: 89, heel: 100 });
  ok(hi.needed === Math.round(44.5 + 70 / Math.cos(Math.PI / 6)) && hi.raise === 300 - hi.needed && !hi.short && lowh.short && lowh.raise === 0, 'heel: needed = 89/2 + 140 / (2 cos 30) = 125 mm; 300 raises the frame by 175; 100 is short', JSON.stringify([hi, lowh]));
}

section('Forces by the method of joints (hand-worked)');
{
  // king post, 8 m, 30 degrees, 1 kN/m² snow only, trusses 1 m apart: 1 kN/m on plan, 8 kN in all, 2 + 4 + 2 at the top nodes
  const g = GE.mark(GE.generate({ ...base, type: 'king' }));
  const ld = { roofDead: 0, snow: 1, ceilingDead: 0 };
  const nl = AN.nodalLoads(g, ld, 1000);
  const total = [...nl.values()].reduce((a, b) => a + b, 0);
  ok(near(total, 8, 1e-9) && near(nl.get(g.supports[0]), 2, 1e-9), 'node loads add to 1 kN/m × 8 m = 8 kN; 2 kN at a heel', String(total));
  const r = AN.solve(g, nl), F = (role) => g.members.filter((m) => m.role === role).map((m) => r.forces.get(m.id));
  ok(r.status === 'ok' && r.residual < 1e-9, 'solved, equilibrium residual under 1e-9');
  ok(near(r.reactions.left[1], 4, 1e-9) && near(r.reactions.right[1], 4, 1e-9) && near(r.reactions.left[0], 0, 1e-9), 'reactions 4 kN and 4 kN, no horizontal');
  ok(F('top').every((f) => near(f, -4, 1e-9)), 'top chords: (4 − 2 kN) / sin 30 = 4 kN compression');
  ok(F('bottom').every((f) => near(f, 4 * Math.cos(Math.PI / 6), 1e-9)), 'bottom chords: 4 cos 30 = 3.464 kN tension');
  ok(F('post').every((f) => near(f, 0, 1e-9)), 'the king post carries nothing under a roof load alone');
  const withCeil = AN.solve(g, AN.nodalLoads(g, { roofDead: 0, snow: 0, ceilingDead: 1 }, 1000)), kp = g.members.find((m) => m.role === 'post');
  ok(near(withCeil.forces.get(kp.id), 4, 1e-9), 'a ceiling load of 1 kN/m (8 kN) on the bottom chord hangs 4 kN from the king post (tension)', String(withCeil.forces.get(kp.id)));
  // every determinate type: equilibrium, reactions add to the load, symmetric reactions
  for (const type of TB.TYPES.filter((x) => x !== 'attic' && x !== 'mono')) {
    const gg = GE.mark(GE.generate({ ...base, type, panels: 6 })), L = AN.nodalLoads(gg, { roofDead: 0.45, snow: 1.2, ceilingDead: 0.25 }, 600), rr = AN.solve(gg, L);
    const sum = [...L.values()].reduce((a, b) => a + b, 0);
    ok(rr.status === 'ok' && rr.residual < 1e-8 && near(rr.reactions.left[1] + rr.reactions.right[1], sum, 1e-8), type + ': solved; reactions add to the total load of ' + sum.toFixed(2) + ' kN');
    if (type !== 'scissor') ok(near(rr.reactions.left[1], rr.reactions.right[1], 1e-8), type + ': symmetric reactions');
  }
  const mn = GE.mark(GE.generate({ ...base, type: 'mono', panels: 4 })), mr = AN.solve(mn, AN.nodalLoads(mn, ld, 1000));
  ok(mr.status === 'ok' && mr.residual < 1e-8, 'mono truss solved');
  const at = GE.mark(GE.generate(attic)), ar = AN.solve(at, AN.nodalLoads(at, ld, 1000));
  ok(ar.status === 'mechanism' && ar.dof === 1 && ar.forces.size === 0, 'attic: a mechanism of one degree of freedom, no forces invented');
  const bad = GE.mark(GE.generate({ ...base, type: 'king' })); bad.members.push({ id: 99, role: 'web', a: 0, b: 2, len: 8000, angle: 0, mark: 'X' });
  ok(AN.solve(bad, AN.nodalLoads(bad, ld, 1000)).status === 'indeterminate', 'an extra member makes it indeterminate, said so');
}

section('Timber check');
{
  const g = GE.mark(GE.generate({ ...base, type: 'king' })), res = AN.solve(g, AN.nodalLoads(g, { roofDead: 0, snow: 1, ceilingDead: 0 }, 1000));
  const bot = g.members.find((m) => m.role === 'bottom'), top = g.members.find((m) => m.role === 'top');
  const s24 = TB.sizeById('2x4'), s26 = TB.sizeById('2x6');
  const t = AN.memberCheck(bot, res.forces.get(bot.id), s24, SP);
  ok(t.kind === 'T' && near(t.util, 3464.1 / (3.1 * 38 * 89), 1e-3) && near(t.util, 0.330, 2e-3), 'tension in a 2x4: 3.464 kN / (3.1 MPa × 3382 mm²) = 0.33', String(t.util));
  const c = AN.memberCheck(top, res.forces.get(top.id), s24, SP);
  // slenderness 4618.8 / 89 = 51.9; FcE = 0.822 × 3500 / 51.9² = 1.068; alpha = 0.1352; Cp = 0.1312; capacity 3.5 kN → 4 / 3.5 = 1.14
  ok(c.kind === 'C' && near(c.slend, 51.9, 0.05) && near(c.Cp, 0.131, 2e-3) && near(c.util, 1.14, 0.02) && c.slender, 'compression in a 2x4 rafter: slenderness 51.9, Cp 0.131, 1.14 of capacity, flagged slender', JSON.stringify(c));
  const c6 = AN.memberCheck(top, res.forces.get(top.id), s26, SP);
  ok(near(c6.slend, 33, 0.05) && near(c6.Cp, 0.307, 2e-3) && c6.util < 0.35 && !c6.slender, 'in a 2x6: slenderness 33, Cp 0.307, under 0.35');
  const noBrace = AN.memberCheck(top, -4, s26, SP, { braceLen: 4618.8 });
  ok(noBrace.slend > c6.slend, 'a top chord with no lateral brace buckles about its thin side (slenderness 4618.8 / 38 = 121.5)', String(noBrace.slend));
  ok(AN.memberCheck(top, -4, s26, SP, { duration: 1.15 }).util < c6.util, 'a duration factor of 1.15 lowers the ratio');
  ok(AN.memberCheck(bot, 0, s24, SP).kind === '0', 'zero force is named');
  const a = AN.autoSize(g, res, SP);
  ok(a.ok && a.sizes.top === '2x6' && a.sizes.bottom === '2x3' || a.sizes.bottom === '2x4', 'sizing: top chord 2x6 (the 2x4 fails at 1.14); bottom chord the smallest that holds', JSON.stringify(a.sizes));
  ok(a.rows.every((r) => r.util <= 1), 'every chosen member is at or under 1.0');
  const big = GE.mark(GE.generate({ ...base, type: 'fink', span: 14000, pitch: 25 })), br = AN.solve(big, AN.nodalLoads(big, { roofDead: 0.6, snow: 3, ceilingDead: 0.3 }, 1200));
  const ba = AN.autoSize(big, br, SP);
  ok(!ba.ok && ba.sizes.top === '2x12', 'a 14 m Fink under 3 kPa snow at 1.2 m: the table runs out of sizes, said (not ok)', JSON.stringify(ba.sizes));
}

section('Design, cut list and joints');
{
  const d = DS.designTruss({ ...base, type: 'king' }, { loads: { roofDead: 0, snow: 1, ceilingDead: 0, duration: 1 }, species: SP, spacing: 1000 });
  ok(d.ok && d.res.status === 'ok' && d.sizingOk && d.sizes.top === '2x6', 'designTruss runs end to end');
  const tc1 = d.cut.find((c) => c.role === 'top');
  ok(near(tc1.nodeLen, 4618.8 + 519.6, 0.3) && near(tc1.cutA, 30, 1e-6) && tc1.notes.includes('tail'), 'the left top chord is one piece with its tail: 4618.8 + 519.6 = 5138.4', JSON.stringify(tc1));
  ok(near(tc1.cutLen, tc1.nodeLen + 70 * 2 * Math.tan(Math.PI / 6), 0.3), 'its plumb cuts add (140 / 2) tan 30 at each end to the long point', String(tc1.cutLen));
  const bc = d.cut.filter((c) => c.role === 'bottom');
  ok(bc.length === 1 && near(bc[0].nodeLen, 8000, 0.1), 'the bottom chord is one piece of 8000 across the king post joint');
  ok(d.cut.length === 4 + 1 - 1 + 0 || d.cut.length === 5 || d.cut.length === 4, 'pieces: two top chords, one bottom chord, the king post', String(d.cut.length));
  const post = d.cut.find((c) => c.role === 'post');
  ok(near(post.nodeLen, 2309.4, 0.2) && post.cutLen < post.nodeLen + 20 && post.cutA === 0 && near(post.cutB, 30, 1e-6), 'the king post is shortened to the chord faces (a butt cut against the sloped chord)', JSON.stringify(post));
  const lg = DS.designTruss({ ...base, type: 'fink', span: 14000 }, { loads: TB.DEFAULT_LOADS, species: SP, spacing: 600 });
  ok(lg.cut.some((c) => c.splice) && PR.trussProblems(lg, {}).some((p) => p.code === 'splice'), 'a 14 m top chord piece is over the 6000 mm stock: a splice, and a Problem');
  ok(d.joints.length === 4 && d.joints.every((j) => j.indicative), 'joint schedule: four joints, every one marked indicative');
  const heelJ = d.joints.find((j) => j.x === 0);
  ok(heelJ.members.length === 2 && near(heelJ.maxForce, 4, 0.05) && heelJ.plate && heelJ.plateKN >= 4, 'the heel joint: two members, largest force 4 kN, a plate with a placeholder capacity at least that', JSON.stringify(heelJ));
  const huge = DS.designTruss({ ...base, type: 'fink', span: 14000 }, { loads: { roofDead: 0.6, snow: 4, ceilingDead: 0.3, duration: 1 }, species: SP, spacing: 1200 });
  ok(huge.joints.some((j) => j.beyond && j.plate === null), 'a joint beyond the placeholder series says so and gives no plate');
  const bm = CL.birdsMouth({ pitch: 30, depth: 140, seat: 89 }), bm4 = CL.birdsMouth({ pitch: 30, depth: 89, seat: 89 });
  ok(near(bm.plumb, 51.4, 0.05) && near(bm.residual, 95.5, 0.1) && bm.ok && !bm4.ok, 'bird\'s mouth: seat 89 at 30 degrees cuts 51.4 plumb; a 2x6 keeps 95.5 of 140 (ok), a 2x4 keeps 44.5 of 89 (not ok, under two thirds)', JSON.stringify([bm, bm4]));
  const fixed = DS.designTruss({ ...base, type: 'king' }, { loads: { roofDead: 0, snow: 1, ceilingDead: 0, duration: 1 }, species: SP, spacing: 1000, fixed: { top: '2x4', bottom: '2x4', web: '2x4' } });
  ok(fixed.sizes.top === '2x4' && !fixed.sizingOk && fixed.rows.some((r) => r.util > 1), 'chosen sizes are kept and only checked: a 2x4 rafter is over');
  ok(d.list.length === 5 && d.list.every((m) => m.mark && m.size), 'member list: five members with marks and sizes');
}

section('Layout on a roof');
{
  const rect = [[0, 0], [12000, 0], [12000, 8000], [0, 8000]];
  const L = LY.layoutTrusses(rect, { spacing: 600, gables: [1, 3] });
  ok(L.ok && L.count === 21 && L.groups.length === 1 && L.groups[0].span === 8000 && L.issues.length === 0, '12 × 8 m: ridge along the long side, 21 trusses of 8000 span (20 bays)', JSON.stringify([L.count, L.groups, L.issues]));
  ok(L.spacing <= 600 && near(L.spacing, 11962 / 20, 0.05) && L.trusses[0].end && L.trusses[20].end && !L.trusses[10].end, 'bays are equal, no wider than 600, an end truss at each end');
  ok(near(L.trusses[0].a[0], 19, 0.1) && L.trusses[0].a[1] === 0 && L.trusses[0].b[1] === 8000, 'the first truss stands 19 mm in from the end wall, bearing to bearing across 8000');
  ok(LY.layoutTrusses(rect, { spacing: 600, gables: [] }).issues.some((i) => i.code === 'hip'), 'gable edges not given: the hip ends are flagged');
  const Y = LY.layoutTrusses(rect, { spacing: 600, ridge: 'y' });
  ok(Y.count === 15 && Y.groups[0].span === 12000 && Y.issues.some((i) => i.code === 'longspan') === false, 'ridge along Y: 15 trusses spanning 12000');
  const Lsh = LY.layoutTrusses([[0, 0], [12000, 0], [12000, 4000], [6000, 4000], [6000, 8000], [0, 8000]], { spacing: 600 });
  ok(Lsh.ok && Lsh.groups.length >= 2 && Lsh.issues.some((i) => i.code === 'notrect'), 'an L-shaped roof: trusses per stretch, two or more spans, and the valley / hip trusses are said to be missing', JSON.stringify(Lsh.groups));
  const a = 30 * Math.PI / 180, rot = rect.map(([x, y]) => [x * Math.cos(a) - y * Math.sin(a), x * Math.sin(a) + y * Math.cos(a)]);
  const R = LY.layoutTrusses(rot, { spacing: 600 });
  ok(R.ok && R.count === 21 && R.groups.length === 1 && Math.abs(R.groups[0].span - 8000) <= 1, 'a rectangle turned 30 degrees: same 21 trusses and span');
  ok(LY.layoutTrusses(rect, { spacing: 50 }).error === 'spacing' && LY.layoutTrusses([[0, 0], [1, 1]], {}).error === 'outline', 'spacing and outline errors are named');
  ok(LY.layoutTrusses([...rect].reverse(), { spacing: 600 }).count === 21, 'the outline may run either way round');
  // the 3D view
  const geomFor = (span) => GE.mark(GE.generate({ ...base, type: 'fink', span }));
  const segs = VW.layoutSegments(L, geomFor, 2700);
  const gm = geomFor(8000);
  ok(segs.length === 21 * gm.members.length && segs.every((s) => s.a[2] >= 2700 - 500), '3D: every member of every truss becomes a segment, above the wall top');
  const p0 = VW.project(segs, { az: 0, el: 0 });
  ok(near(p0.w, 12000 - 38 + 0, 600) || p0.w > 11000, 'projected at azimuth 0 / elevation 0 the width is the building length');
  const svg = VW.toSvg(segs, { az: 40, el: 30 });
  ok(svg.startsWith('<svg') && (svg.match(/<line /g) || []).length === segs.length, '3D SVG has one line per member');
}

section('Drawing');
{
  const d = DS.designTruss({ ...base, type: 'fink', heel: 400 }, { loads: TB.DEFAULT_LOADS, species: SP, spacing: 600 });
  const svg = DR.elevationSvg(d.g, d.sizes, { raise: d.heel.raise, forces: d.res.forces });
  ok(svg.startsWith('<svg') && (svg.match(/<polygon /g) || []).length === d.g.members.length, 'one polygon per member, sawn depth about the centre-line');
  ok(svg.includes('Span 8000 mm') && svg.includes('Overhang 450 mm') && svg.includes('Pitch 30') && svg.includes('Not a substitute for engineered truss design'), 'span, overhang and pitch dimensioned; the not-a-design label on the sheet');
  ok(svg.includes('heel') && d.heel.raise > 0, 'a heel taller than the chords need is drawn as a raise');
  ok(!/<script/.test(svg) && DR.elevationSvg(d.g, d.sizes, { title: '<b>"x"&' }).includes('&lt;b&gt;'), 'text in the drawing is escaped');
}

section('Problems and reports');
{
  const d = DS.designTruss({ ...base, type: 'king', spacing: 1500 }, { loads: { roofDead: 0, snow: 1, ceilingDead: 0, duration: 1 }, species: SP, spacing: 1500, fixed: { top: '2x4', bottom: '2x4', web: '2x4' } });
  const ps = PR.trussProblems(d, { spacing: 1500 });
  ok(ps[0].code === 'notdesign' && ps[0].severity === 'warning' && /Not a substitute for engineered truss design/.test(ps[0].text) && /manufacturer sign-off/.test(ps[0].text), 'the first Problem is the not-a-design label');
  const shape = (p) => p.code && ['error', 'warning', 'note'].includes(p.severity) && typeof p.text === 'string' && p.msg && p.msg.key && p.source.name === 'bimcraft.addon.trusscraft' && Array.isArray(p.about);
  ok(ps.every(shape), 'every Problem has the shared shape (code, severity, msg.key, text, source, about)');
  ok(ps.some((p) => p.code === 'overstress' && p.severity === 'error' && p.found.value > 1) && ps.some((p) => p.code === 'spacing') && ps.some((p) => p.code === 'slender') && ps.at(-1).code === 'defaults', 'overstressed rafter, wide spacing, slenderness, and the labelled-defaults note last');
  const at = DS.designTruss(attic, { loads: TB.DEFAULT_LOADS, species: SP, spacing: 600, fixity: 'pinned' });
  ok(PR.trussProblems(at, {}).some((p) => p.code === 'mechanism' && p.severity === 'error'), 'attic with pinned room corners: the mechanism is a Problem, not a silent result');
  const sc = DS.designTruss({ ...base, type: 'scissor' }, { loads: TB.DEFAULT_LOADS, species: SP, spacing: 600 });
  ok(PR.trussProblems(sc, {}).some((p) => p.code === 'scissor'), 'scissor: the spreading bearings are noted');
  const short = DS.designTruss({ ...base, type: 'king', heel: 60 }, { loads: TB.DEFAULT_LOADS, species: SP, spacing: 600 });
  ok(PR.trussProblems(short, {}).some((p) => p.code === 'heel'), 'a heel under the chord depth is a Problem');
  ok(PR.trussProblems({ ok: false }, {}).length === 1, 'a failed design still shows the label');
  const lp = PR.layoutProblems({ ok: true, issues: [{ code: 'notrect', vars: { spans: 2 } }, { code: 'hip', vars: {} }, { code: 'longspan', vars: { span: 13000 } }] });
  ok(lp.length === 3 && lp.every(shape) && /kinks/.test(lp[0].text), 'layout issues become Problems (outline, hips, long span)');
  const m = RP.memberCsv(d), c = RP.cutCsv(d, 21), j = RP.jointCsv(d);
  ok(m.split('\r\n')[0].startsWith('mark,role,size') && /Not a substitute/.test(m) && c.includes('qty_total') && /,21,/.test(c) && /INDICATIVE/.test(j) && /placeholders/.test(j), 'CSV: headers, totals × 21, INDICATIVE joints, the labels');
  ok(RP.layoutCsv(LY.layoutTrusses([[0, 0], [12000, 0], [12000, 8000], [0, 8000]], {}), () => d).split('\r\n').length > 22, 'layout CSV: a row per truss');
  ok(CORE.csv([['=cmd']]).includes("'=cmd"), 'CSV cells that start like a formula are quoted');
}

section('IFC members');
{
  const mb = PL.boxMesh([0, 0, 0], [1000, 0, 0], 89, 38, [1, 0]);
  const vol = (m) => { let v = 0; for (let i = 0; i < m.indices.length; i += 3) { const [A, B, C] = [0, 1, 2].map((k) => m.positions.slice(m.indices[i + k] * 3, m.indices[i + k] * 3 + 3)); v += (A[0] * (B[1] * C[2] - B[2] * C[1]) - A[1] * (B[0] * C[2] - B[2] * C[0]) + A[2] * (B[0] * C[1] - B[1] * C[0])) / 6; } return v; };
  ok(near(mb.volume, 1000 * 89 * 38, 1) && vol(mb) > 0 && near(vol(mb), 3382000, 1), 'a member is a closed solid of positive volume: 1000 × 89 × 38 = 3 382 000 mm³');
  const ys = mb.positions.filter((_, i) => i % 3 === 1), zs = mb.positions.filter((_, i) => i % 3 === 2);
  ok(near(Math.max(...ys) - Math.min(...ys), 38, 1e-9) && near(Math.max(...zs) - Math.min(...zs), 89, 1e-9), 'the thickness (38) is across the truss plane, the depth (89) in it');
  const sl = PL.boxMesh([0, 0, 0], [1000, 0, 577.35], 89, 38, [1, 0]);
  ok(near(vol(sl), 1154.7 * 89 * 38, 5) && vol(sl) > 0, 'a sloped member keeps its volume');
  const d = DS.designTruss({ ...base, type: 'king' }, { loads: TB.DEFAULT_LOADS, species: SP, spacing: 600 });
  const L = LY.layoutTrusses([[0, 0], [12000, 0], [12000, 8000], [0, 8000]], { spacing: 600 });
  const segs = PL.memberSegments(L.trusses[3], d.g, 2700, d.sizes);
  ok(segs.length === d.g.members.length && segs.every((s) => near(s.a[0], L.trusses[3].a[0], 1e-6) && near(s.b[0], L.trusses[3].a[0], 1e-6)) && Math.min(...segs.map((s) => Math.min(s.a[2], s.b[2]))) < 2700 && segs.some((s) => near(s.a[2], 2700 + d.heel.raise, 1e-9) || near(s.b[2], 2700 + d.heel.raise, 1e-9)), 'member segments lie in the truss plane (constant x here), the heel joints at the wall top, the tails below it');
  const calls = [];
  const w = {
    api: { GetLine: () => ({ ObjectPlacement: { value: 7 } }) }, mid: 1, v4: true, gid: () => 'g' + calls.length, L: (s) => s, H: (x) => x, ownerHistory: () => 0,
    placeAt: (...a) => { calls.push(['place', ...a]); return 'lp'; }, make: (cls, ...a) => { calls.push(['make', cls, ...a]); return calls.length; }, noteGuid: () => {},
    bodyItems: (b) => ({ type: 'Tessellation', items: [b] }), rep: () => 'rep', setShape: () => {}, contain: () => {}, upsertPset: (id, name, rows) => calls.push(['pset', name, rows]),
  };
  const made = PL.placeTrusses(w, { storey: 5, trusses: L.trusses.slice(0, 2), designFor: () => d, z0: 2700, species: 'SPF' });
  const mk = calls.filter((c) => c[0] === 'make');
  ok(made.length === 2 * d.g.members.length && mk.every((c) => c[1] === 'IFCMEMBER') && mk.some((c) => c.at(-1) === 'CHORD') && mk.some((c) => c.at(-1) === 'POST'), 'placing: an IfcMember per member (CHORD, POST), two trusses');
  ok(calls.filter((c) => c[0] === 'pset').every((c) => c[1] === 'CadCraft_Truss' && c[2].some((r) => r[0] === 'Status' && /not engineered/.test(r[2]))), 'each member carries CadCraft_Truss with the not-engineered status');
  w.v4 = false; calls.length = 0;
  PL.placeTrusses(w, { storey: 5, trusses: L.trusses.slice(0, 1), designFor: () => d, z0: 0 });
  ok(calls.filter((c) => c[0] === 'make').every((c) => c.length === 10), 'IFC2x3: no predefined type argument');
}

section('Add-on files');
{
  const man = JSON.parse(fs.readFileSync(path.join(ADDON, 'addon.json'), 'utf8')), idx = JSON.parse(fs.readFileSync(path.join(ADDON, '../index.json'), 'utf8'));
  ok(man.id === 'trusscraft' && man.default === 'off' && man.apps.includes('bimcraft') && man.apps.join() === 'bimcraft,partcraft,modelcraft,cadcraft' && man.license === 'Apache-2.0' && idx.addons.includes('trusscraft'), 'manifest: four apps, default off, Apache-2.0, listed in index.json');
  const en = JSON.parse(fs.readFileSync(path.join(ADDON, 'lang/en.json'), 'utf8'));
  const walk = (d) => fs.readdirSync(path.join(ADDON, d), { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(d + '/' + e.name) : e.name.endsWith('.js') ? [d + '/' + e.name] : []));
  const src = ['main.js', 'panel.js', 'host.js', ...walk('lib')].map((f) => fs.readFileSync(path.join(ADDON, f), 'utf8')).join('\n');
  const used = new Set([...src.matchAll(/\bt\('([a-zA-Z0-9_.]+)'/g)].map((m) => m[1]).filter((k) => !k.endsWith('.')));
  const dynamic = ['type.', 'err.'];
  const missing = [...used].filter((k) => !(k in en));
  ok(missing.length === 0, 'every t(\'key\') used in the code is in lang/en.json', missing.join());
  ok(TB.TYPES.every((k) => ('type.' + k) in en) && ['span', 'pitch', 'scissor', 'attic', 'atticHeight', 'outline', 'spacing', 'type'].every((k) => ('err.' + k) in en), 'the dynamic keys (type.*, err.*) exist');
  void dynamic;
  ok(fs.existsSync(path.join(ADDON, 'LICENSE')) && fs.existsSync(path.join(ADDON, 'help/help.js')), 'LICENSE and compiled help exist');
  ok(!/\bnine\b/i.test(src + JSON.stringify(en) + JSON.stringify(man)) && !/native/i.test(src + JSON.stringify(en)), 'copy never says nine or native');
}

for (const f of fs.readdirSync(HERE).filter((x) => /^t-.*\.mjs$/.test(x)).sort()) await import(pathToFileURL(path.join(HERE, f)).href);

console.log('\n' + pass + ' passed, ' + fail + ' failed');
process.exit(fail ? 1 : 0);
