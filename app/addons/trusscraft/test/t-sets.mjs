/* SPDX-License-Identifier: Apache-2.0 */
// Part of test.mjs: the roof sets (hip step-down, girder + jack + corner, valley set, sections across valleys), the user's load cases and combinations
// (wind, uplift, bending, deflection, bearings), the plate and species tables, the bearing stub, the attic as a rigid room, and the Problems for what
// cannot be made. Every figure is worked by hand in the check's name.
const { ok, section, near, mine, DEV, ADDON } = globalThis.__trussTest;
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const imp = (f) => import(pathToFileURL(path.join(DEV, f)).href);
const R = await imp('res-roof.js');
const PF = await mine('lib/profile.js'), RS = await mine('lib/roofset.js'), SD = await mine('lib/setdesign.js'), DS = await mine('lib/design.js'), TB = await mine('lib/tables.js');
const PL = await mine('lib/plates.js'), RP = await mine('lib/report.js'), PR = await mine('lib/problems.js'), GE = await mine('lib/geometry.js'), FR = await mine('lib/frame.js'), PC = await mine('lib/place.js');
const SP = TB.DEFAULT_SPECIES[0], TAN30 = Math.tan(Math.PI / 6);
const mkRoof = (out, gab = [], pitch = 30, overhang = 450) => ({ outline: out, overhang, pitch, plan: R.roofGeometry(out, out.map((_, i) => (gab.includes(i) ? { kind: 'gable', pitch: null, overhang } : { kind: 'pitch', pitch, overhang })), { plate: 0 }) });
const rect = [[0, 0], [12000, 0], [12000, 8000], [0, 8000]];
const dof = (g) => { const used = new Set(g.members.filter((m) => m.role !== 'tail' && m.role !== 'stub').flatMap((m) => [m.a, m.b])); return 2 * used.size - (g.members.filter((m) => m.role !== 'tail' && m.role !== 'stub').length + 3); };

section('Roof sections and profile trusses');
{
  const roof = mkRoof(rect);
  const at = (u, a = 0, b = 8000) => PF.sectionProfile(roof.plan, [u, a], [u, b]);
  const p2 = at(2000);
  ok(p2.length === 4 && near(p2[1][0], 2000, 0.01) && near(p2[1][1], 2000 * TAN30, 0.01) && near(p2[2][0], 6000, 0.01) && near(p2[2][1], 1154.7, 0.05), 'hip roof, section 2000 mm from the end wall: rises to 2000 tan 30 = 1154.7 at 2000, level to 6000, down to 8000', JSON.stringify(p2));
  const p4 = at(6000);
  ok(p4.length === 3 && near(p4[1][1], 4000 * TAN30, 0.05) && near(p4[1][0], 4000, 0.01), 'a section on the ridge stretch is the common triangle: apex 4000 tan 30 = 2309.4 at mid-span', JSON.stringify(p4));
  const jk = PF.sectionProfile(roof.plan, [0, 4000], [2000, 4000]);
  ok(jk.length === 2 && near(jk[0][1], 0, 0.01) && near(jk[1][1], 1154.7, 0.05), 'along the end hip plane (a jack\'s line): 0 at the wall to 1154.7 at 2000', JSON.stringify(jk));
  const cj = PF.sectionProfile(roof.plan, [0, 600], [2000, 600]);
  ok(cj.length === 3 && near(cj[1][0], 600, 0.01) && near(cj[1][1], 600 * TAN30, 0.05) && near(cj[2][1], 346.4, 0.05), 'near the side wall (a corner jack\'s line): rises to 600 tan 30 = 346.4 at the hip line (600 along), then level', JSON.stringify(cj));
  const cl = PF.classify(p2), cc = PF.classify(p4);
  ok(cl.flats.length === 1 && !cl.triangle && cc.triangle && cc.symmetric && cc.endsLow, 'classify: the step-down has a flat top; the ridge section is a symmetric triangle');
  for (const [name, spec] of [['step-down', { span: 8000, profile: p2, form: 'stepdown' }], ['jack', { span: 2000, profile: jk, form: 'jack' }], ['corner jack', { span: 2000, profile: cj, form: 'corner' }], ['valley triangle', { span: 3000, profile: [[0, 0], [1500, 866], [3000, 0]], form: 'valley' }], ['girder with forced stations', { span: 8000, profile: [[0, 0], [2000, 1154.7], [6000, 1154.7], [8000, 0]], extra: [1000, 3000, 5000, 7000], form: 'girder' }]]) {
    const g = PF.profileTruss(spec);
    ok(g.ok && dof(g) === 0 && g.supports.length === 2, name + ': a pin-jointed frame with m + 3 = 2 n (determinate)', JSON.stringify([g.error, dof(g)]));
  }
  const gx = PF.profileTruss({ span: 8000, profile: [[0, 0], [2000, 1154.7], [6000, 1154.7], [8000, 0]], extra: [1000, 3000, 5000, 7000] });
  ok([1000, 3000, 5000, 7000].every((x) => gx.nodes.some((n) => near(n.x, x, 0.6) && n.z > 0)), 'forced stations (where jacks hang) become joints of the girder\'s top chord');
  ok(PF.profileTruss({ span: 8000, profile: [[0, 0], [4000, 100], [8000, 0]] }).error === 'low' && PF.profileTruss({ span: 100, profile: [[0, 0], [50, 500], [100, 0]] }).error === 'profile', 'a truss under 120 mm tall, or a span under 600, is refused by name');
}

section('Hip set: step-down trusses');
{
  const L = RS.layoutRoof(mkRoof(rect), { spacing: 600, base: { panels: 6, heel: 150 } });
  const kinds = {};
  for (const t of L.trusses) kinds[t.kind] = (kinds[t.kind] || 0) + 1;
  ok(L.ok && kinds.common === 7 && kinds.stepdown === 12 && L.count === 19, 'hip roof 12 × 8 m at 600: 7 common trusses on the ridge stretch, 12 step-down trusses (6 a hip end), the first station of each end too low to make', JSON.stringify(kinds));
  ok(L.issues.filter((i) => i.code === 'endzone').length === 2 && L.issues.find((i) => i.code === 'endzone').vars.n === 1, 'each hip end says which stations were not made (endzone), never silently');
  const step = (12000 - 38) / 20, st = L.trusses.filter((t) => t.kind === 'stepdown').sort((a, b) => a.a[0] - b.a[0])[0];
  const exp = (19 + step) * TAN30, req = L.designs.get(st.key).spec.profile;
  ok(near(st.a[0], 19 + step, 0.2) && near(req[1][1], exp, 0.3) && near(req[2][1], exp, 0.3) && near(req[1][0], 19 + step, 0.3), 'the first step-down stands at 19 + 598.1 = 617.1 from the end wall (the 19 mm station is too low) and its flat top is 617.1 tan 30 = ' + exp.toFixed(1) + ', level between 617.1 and 7382.9', JSON.stringify([st.a, req]));
  const ds = SD.designSet(L, { loads: TB.DEFAULT_LOADS, species: SP });
  ok([...ds.values()].every((d) => d.ok && d.res.status === 'ok'), 'every distinct design solves (' + ds.size + ' designs)');
  const pr = SD.setProblems(L, ds, { spacing: 600 });
  ok(pr[0].code === 'notdesign' && pr.some((p) => p.code === 'endzone' && p.severity === 'warning') && pr.at(-1).code === 'defaults', 'Problems: label first, the end-zone warning, the labelled defaults note last');
  ok(pr.every((p) => p.source.name === 'bimcraft.addon.trusscraft' && p.msg && p.text), 'every set Problem has the shared shape');
  const T = SD.setTotals(L, ds);
  ok(T.trusses === 19 && T.designs === ds.size && T.members > 19 * 5, 'totals: trusses, designs, pieces');
}

section('Hip set: girder carrying jack and corner trusses');
{
  const roof = mkRoof(rect);
  const L = RS.layoutRoof(roof, { spacing: 600, hipMethod: 'girder', base: { panels: 6, heel: 150 } });
  const k = {};
  for (const t of L.trusses) k[t.kind] = (k[t.kind] || 0) + 1;
  ok(L.ok && k.girder === 2 && k.jack > 0 && k.corner > 0 && k.common === 7, 'girder method: a girder at each hip end, jack trusses across the middle, corner jacks near the side walls, commons on the ridge', JSON.stringify(k));
  const g1 = L.trusses.filter((t) => t.kind === 'girder').sort((a, b) => a.a[0] - b.a[0])[0], gd = L.designs.get(g1.key);
  const s = g1.a[0], flat = s * TAN30;
  ok(gd.spec.profile.length === 4 && near(gd.spec.profile[1][1], flat, 0.3) && near(gd.spec.profile[2][1], flat, 0.3), 'the girder is the flat-topped section at its own station: height u tan 30 = ' + flat.toFixed(1), JSON.stringify(gd.spec.profile));
  const jk = L.trusses.find((t) => t.kind === 'jack'), jd = L.designs.get(jk.key);
  ok(near(jd.spec.profile.at(-1)[1], flat, 0.3) && near(jd.spec.profile.at(-1)[0], s, 0.3), 'a jack runs from the end wall to the girder and ends flush at the girder\'s top height', JSON.stringify(jd.spec.profile));
  const cj = L.trusses.find((t) => t.kind === 'corner'), cd = L.designs.get(cj.key);
  ok(cd.spec.profile.length === 3 && near(cd.spec.profile[2][1], cd.spec.profile[1][1], 0.1) && cd.spec.profile[2][1] < flat, 'a corner jack rises to the hip line and then runs level, below the girder\'s flat top (it meets the girder\'s sloped end)');
  const ds = SD.designSet(L, { loads: TB.DEFAULT_LOADS, species: SP });
  const gdes = ds.get(g1.key);
  ok(gdes.ok && gdes.pointLoads.length === g1.carries.length && gdes.pointLoads.length > 5, 'the girder is designed with a point load for each jack it carries (' + gdes.pointLoads.length + ')');
  let sumJ = 0;
  for (const id of g1.carries) { const j = L.trusses.find((t) => t.id === id); sumJ += ds.get(j.key).caseRes.D.reactions.right[1]; }
  ok(near(gdes.pointLoads.reduce((a, p) => a + p.D, 0), sumJ, 1e-9) && sumJ > 0, 'the point loads on the girder (dead case) are exactly the sum of its jacks\' high-end reactions: ' + sumJ.toFixed(3) + ' kN');
  const own = [...gdes.cases.D.values()].reduce((a, v) => a + (typeof v === 'number' ? v : 0), 0), rz = gdes.caseRes.D.reactions.left[1] + gdes.caseRes.D.reactions.right[1];
  ok(near(rz, own, 1e-6), 'girder equilibrium: its reactions (' + rz.toFixed(3) + ') carry its own tributary load plus the jacks\' (' + own.toFixed(3) + ')');
  ok(gdes.rows.some((r) => r.util > 0) && PR.trussProblems(gdes, {}).some((p) => p.code === 'bearing'), 'the girder is checked and its bearings are reported');
  ok(L.issues.some((i) => i.code === 'smalljacks') && SD.setProblems(L, ds, {}).some((p) => p.code === 'smalljacks' && /NOT made/.test(p.text)), 'jacks too low to make are named in a Problem (smalljacks)');
  // hand-worked jack: 2000 run at 30 degrees, 600 wide, roof dead 0.5 kPa on the slope, snow 1 kPa on plan
  const jh = DS.designTruss({ span: 2000, profile: [[0, 0], [2000, 2000 * TAN30]], form: 'jack' }, { loads: { roofDead: 0.5, snow: 1, ceilingDead: 0, windward: 0, leeward: 0, uplift: 0, duration: 1 }, species: SP, spacing: 600 });
  const dRz = jh.caseRes.D.reactions, sRz = jh.caseRes.S.reactions;
  ok(near(dRz.right[1], 0.5 * (2 / Math.cos(Math.PI / 6)) * 0.6 / 2, 1e-6) && near(dRz.left[1], dRz.right[1], 1e-6), 'jack, dead: 0.5 kPa × 2.3094 m slope × 0.6 m = 0.6928 kN, half to each end = 0.3464', String(dRz.right[1]));
  ok(near(sRz.right[1], 1 * 2 * 0.6 / 2, 1e-6), 'jack, snow: 1 kPa × 2 m plan × 0.6 m = 1.2 kN, 0.6 kN to each end', String(sRz.right[1]));
}

section('Valley set');
{
  const vs = RS.valleySet({ wingWidth: 6000, wingPitch: 30, mainPitch: 30, spacing: 1500, minHeight: 300 });
  ok(vs.ok && vs.trusses.length === 1 && near(vs.trusses[0].d, 1500, 1e-6) && near(vs.trusses[0].rise, 1500 * TAN30, 0.1) && near(vs.trusses[0].span, 3000, 0.5) && near(vs.trusses[0].zBase, 3000 * TAN30 - 1500 * TAN30, 0.1), 'typed: 6 m wing at 30° on a 30° main roof — ridge 1732.1 high, meets the main plane 3000 up the slope; 1500 from the junction: rise 866.0, span 3000, base 866.0 above the plate', JSON.stringify(vs.trusses));
  const v2 = RS.valleySet({ wingWidth: 6000, wingPitch: 30, mainPitch: 45, spacing: 600, minHeight: 300 });
  ok(v2.ok && v2.trusses.every((t) => near(t.span, (2 * t.d * 1) / Math.tan(Math.PI / 6), 0.6) && near(t.rise, t.d, 0.1)), 'a 45° main roof: rise = d, span = 2 d / tan 30 for every truss');
  ok(RS.valleySet({ wingWidth: 1000, wingPitch: 30, mainPitch: 30 }).error === 'valleyparams', 'bad numbers are refused by name');
  const vl = RS.valleyLayout({ wingWidth: 6000, wingPitch: 30, mainPitch: 30, spacing: 600, minHeight: 300 }), ds = SD.designSet(vl, { loads: TB.DEFAULT_LOADS, species: SP });
  ok(vl.ok && [...ds.values()].every((d) => d.ok && d.res.status === 'ok') && SD.setProblems(vl, ds, {}).some((p) => p.code === 'valleyload'), 'the valley trusses are designed, and the note says their reactions are not added to the main trusses');
  const T = [[0, 0], [14000, 0], [14000, 8000], [9000, 8000], [9000, 14000], [5000, 14000], [5000, 8000], [0, 8000]];
  const roof = mkRoof(T);
  const found = RS.detectValleys(roof.plan);
  ok(found.length === 1 && near(found[0].top[2], 2000 * 2 * TAN30 / 2 * 1 + 0, 1200) && found[0].aligned > 0.99, 'a T-shaped roof (main 8 m wide, 4 m wing) has one valley pair, square to the ridge', JSON.stringify(found.map((f) => [f.top, f.aligned])));
  const Ls = RS.layoutRoof(roof, { spacing: 600, valleyMode: 'set', hipMethod: 'stepdown' });
  const v = Ls.trusses.filter((t) => t.kind === 'valley');
  ok(Ls.ok && v.length === 2 && near(v[0].span, 2800, 1) && near(v[0].zBase, 2309.4 * (8000 - 7400) / 4000, 0.6), 'valley set from the roof: 2 valley trusses; the first, 1400 above the junction toward the wall, spans 2800 and stands on the main plane 346.4 above the plate (2309.4 × 600 / 4000)', JSON.stringify(v.map((t) => [t.span, t.zBase])));
  ok(Ls.issues.some((i) => i.code === 'mouth') && SD.setProblems(Ls, SD.designSet(Ls, { loads: TB.DEFAULT_LOADS, species: SP }), {}).some((p) => p.code === 'mouth' && /NOT generated/.test(p.text)), 'the main trusses that end at the wing mouth are named, with the missing girder said plainly');
  const Lc = RS.layoutRoof(roof, { spacing: 600, valleyMode: 'cross' });
  ok(Lc.ok && !Lc.trusses.some((t) => t.kind === 'valley') && Lc.count > 0, 'crossing mode makes no valley trusses; each station spans the whole section');
  const Lskip = RS.layoutRoof(mkRoof([[0, 0], [12000, 0], [12000, 4000], [6000, 4000], [6000, 8000], [0, 8000]]), { spacing: 600, valleyMode: 'set' });
  ok(Lskip.ok && Lskip.issues.some((i) => i.code === 'valleysetskip' || i.code === 'notrect'), 'an L (one valley, no pair) cannot make a valley set and says so');
}

section('Loads, combinations, wind, uplift, bending, deflection, bearings');
{
  const king = { type: 'king', span: 8000, pitch: 30, overhang: 0, heel: 100 };
  const z = { roofDead: 0, snow: 0, ceilingDead: 0, windward: 0, leeward: 0, uplift: 0, duration: 1 };
  const w = DS.designTruss(king, { loads: { ...z, windward: 0.5, leeward: -0.3 }, combos: [{ name: 'Wind', fW: 1, CD: 1 }], species: SP, spacing: 1000 });
  const r = w.combos[0].reactions;
  ok(near(r.left[0], -(0.5 * 4.6188 + 0.3 * 4.6188) * 0.5, 0.002) && near(r.left[1] + r.right[1], (0.5 - 0.3) * 4.6188 * Math.cos(Math.PI / 6), 0.002), 'wind: 0.5 kPa pushing on the windward rafter (2.309 kN) and 0.3 kPa suction on the leeward (1.386 kN): horizontal reaction 1.848 kN, net vertical 0.800 kN up', JSON.stringify(r));
  const up = DS.designTruss(king, { loads: { ...z, uplift: 1 }, combos: [{ name: 'Uplift', fU: 1, CD: 1 }], species: SP, spacing: 1000 });
  ok(near(up.combos[0].reactions.left[1], -4, 1e-6) && near(up.combos[0].reactions.right[1], -4, 1e-6) && PR.trussProblems(up, {}).some((p) => p.code === 'uplift' && p.severity === 'warning'), 'uplift of 1 kPa on 8 m × 1 m = 8 kN pulls each bearing down by 4 kN, and a Problem says so');
  ok(up.rows.some((r) => r.kind === 'C' && r.role === 'bottom') || up.rows.some((r) => r.forceMin < 0), 'under uplift the force reverses: the bottom chord (tension under gravity) goes into compression and is checked as compression');
  // reversal envelope: gravity and uplift together
  const both = DS.designTruss(king, { loads: { ...z, snow: 1, uplift: 1 }, combos: [{ name: 'G', fS: 1, CD: 1 }, { name: 'U', fU: 1, CD: 1 }], species: SP, spacing: 1000 });
  const bc = both.rows.find((x) => x.role === 'bottom');
  ok(bc.forceMax > 3.4 && bc.forceMin < -3.4 && bc.combo, 'with both combinations the member shows its largest tension (' + bc.forceMax.toFixed(2) + ') and compression (' + bc.forceMin.toFixed(2) + ') and the governing combination (' + bc.combo + ')');
  const noWind = DS.designTruss(king, { loads: { ...z, snow: 1 }, species: SP, spacing: 1000 });
  ok(PR.trussProblems(noWind, {}).some((p) => p.code === 'nowind' && p.severity === 'note'), 'with no wind or uplift combination the Problems say wind and uplift were not checked');
  const wrong = DS.designTruss(king, { loads: { ...z, snow: 1 }, combos: [{ name: 'W', fW: 1, CD: 1 }], species: SP, spacing: 1000 });
  ok(PR.trussProblems(wrong, {}).some((p) => p.code === 'nowind' && p.severity === 'warning'), 'a wind factor with every wind pressure at zero is a warning, not a silent zero');
  // bending between panel points: snow 1 and dead 0.45, rafter 4618.8 long at 30 degrees, 1 m spacing
  const fixed = { top: '2x6', bottom: '2x4', web: '2x4' }, ld = { ...z, roofDead: 0.45, snow: 1 };
  const nb = DS.designTruss(king, { loads: ld, species: SP, spacing: 1000, fixed });
  const top = nb.rows.find((x) => x.role === 'top'), wn = 0.45 * Math.cos(Math.PI / 6) + 1 * Math.cos(Math.PI / 6) ** 2, M = wn * 4.6188 ** 2 / 8;
  ok(near(top.moment, M, 0.01) && near(top.fb, (M * 1e6) / (38 * 140 * 140 / 6), 0.1) && !top.bendChecked, 'chord bending: w = 0.45 cos 30 + 1 cos² 30 = 1.140 kN/m, M = w L² / 8 = ' + M.toFixed(3) + ' kN·m; with no Fb it is reported as ' + top.fb.toFixed(1) + ' MPa and NOT checked');
  ok(PR.trussProblems(nb, {}).some((p) => p.code === 'bendunchecked'), 'a Problem says the bending was not checked (no Fb)');
  const wb = DS.designTruss(king, { loads: ld, species: SP, spacing: 1000, fixed, Fb: 9 });
  const top2 = wb.rows.find((x) => x.role === 'top');
  ok(top2.bendChecked && top2.util > top.util && PR.trussProblems(wb, {}).some((p) => p.code === 'bending' || p.code === 'overstress'), 'with your Fb the interaction equation runs and the ratio rises (' + top.util.toFixed(2) + ' to ' + top2.util.toFixed(2) + ')');
  const dv = DS.designTruss(king, { loads: { ...z, snow: 1 }, species: SP, spacing: 1000, fixed: { top: '2x6', bottom: '2x4', web: '2x4' } });
  const dl = (2 * (4 * 4618.8) * 1 + 2 * (3.4641 * 0.866025 * 4000)) ;   // rafters 2·(−4)(−1)L, bottom chords 2·3.4641·0.866·4000
  const hand = 1000 * ((2 * 4 * 4618.8) / (38 * 140 * 9500) + (2 * 3.4641 * 0.866025 * 4000) / (38 * 89 * 9500));
  void dl;
  ok(dv.defl && near(dv.defl.max, hand, 0.02) && near(dv.defl.ratio, 8000 / hand, 1), 'deflection by virtual work at mid-span: Σ N n L / E A = ' + hand.toFixed(3) + ' mm (E 9500, 2x6 rafters, 2x4 bottom chord)', JSON.stringify(dv.defl));
  const lim = DS.designTruss(king, { loads: { ...z, snow: 1 }, species: SP, spacing: 1000, fixed, deflLimit: 20000 });
  ok(PR.trussProblems(lim, {}).some((p) => p.code === 'deflection' && p.severity === 'error') && PR.trussProblems(dv, {}).some((p) => p.code === 'deflection' && p.severity === 'note'), 'a deflection limit you enter is checked (error when over); with none, a note says none is checked');
  ok(dv.bearing && near(dv.bearing.maxLeft, 4, 1e-6) && PR.trussProblems(dv, {}).some((p) => p.code === 'bearing' && /largest reaction 4 kN/.test(p.text)) && PR.trussProblems(dv, {}).some((p) => p.code === 'bracing'), 'bearing reaction 4 kN is reported, and the bracing checklist is a Problem');
  const cp = DS.designTruss(king, { loads: { ...z, snow: 1 }, species: SP, spacing: 1000, Fcp: 4 });
  ok(/needs 26 mm/.test(PR.trussProblems(cp, {}).find((p) => p.code === 'bearing').text), 'with your Fc⊥ of 4 MPa: 4000 N / (4 × 38) = 26 mm of bearing');
  ok(TB.DEFAULT_LOADS.windward === 0 && TB.DEFAULT_LOADS.leeward === 0 && TB.DEFAULT_LOADS.uplift === 0 && TB.DEFAULT_COMBOS.filter((c) => c.fW || c.fU).length === 0 && !TB.DEFAULT_SPECIES.some((s) => 'Fb' in s), 'defaults are zero or blank: no wind, no uplift, no wind factor, no Fb in the typed species');
  const src = fs.readFileSync(path.join(ADDON, 'lib/tables.js'), 'utf8') + fs.readFileSync(path.join(ADDON, 'lib/analysis.js'), 'utf8');
  ok(!/ASCE|EN 1991|EN 1995|IBC |NDS Table|Table 4\.|Table 5\./.test(src), 'no standard\'s table or clause number is typed into the add-on');
}

section('Connector plate and species tables');
{
  const p = PL.parsePlateTable('# label: Test maker 2026\nid,w,h,kN\nP1,76,102,3.5\nP2,100,150,6.0\nP3,150,200,12\nbad,0,10,1');
  ok(p.ok && p.plates.length === 3 && p.label === 'Test maker 2026' && p.skipped.length === 1, 'a plate table loads from CSV: three rows, one bad row skipped and counted', JSON.stringify(p));
  const pj = PL.parsePlateTable(JSON.stringify({ label: 'J', plates: [{ id: 'a', w: 76, h: 152, kN: 5 }] }));
  ok(pj.ok && pj.plates[0].kN === 5 && !PL.parsePlateTable('nonsense').ok && !PL.parsePlateTable('').ok, 'JSON loads too; empty or unusable text is refused with a reason');
  const d = DS.designTruss({ type: 'king', span: 8000, pitch: 30, overhang: 450, heel: 150 }, { loads: TB.DEFAULT_LOADS, species: SP, spacing: 1000, plates: { list: PL.parsePlateTable('id,w,h,kN\nQ1,152,200,9\nQ2,200,250,30').plates, label: 'Mine' } });
  const heel = d.joints.find((j) => j.x === 0);
  ok(heel.plate === 'Q1' && heel.plateKN === 9 && heel.source === 'yours' && heel.tableLabel === 'Mine', 'the joint schedule uses YOUR table: the heel joint takes plate Q1 from it, marked as yours', JSON.stringify(heel));
  const dp = DS.designTruss({ type: 'king', span: 8000, pitch: 30, overhang: 450, heel: 150 }, { loads: TB.DEFAULT_LOADS, species: SP, spacing: 1000 });
  ok(dp.joints.every((j) => j.source === 'placeholder' && /Placeholder, not a manufacturer value/.test(j.tableLabel)), 'without a table every joint is labelled "Placeholder, not a manufacturer value"');
  const csv = RP.jointCsv(dp), csv2 = RP.jointCsv(d);
  ok(/Placeholder, not a manufacturer value/.test(csv) && /from your table/.test(csv2) && /"Mine"|Mine/.test(csv2), 'the joint CSV carries the table label either way');
  ok(PR.trussProblems(d, {}).at(-1).text.includes('Mine') && PR.trussProblems(dp, {}).at(-1).text.includes('placeholders'), 'the defaults note names your table, or says the series are placeholders');
  const beyond = DS.designTruss({ type: 'king', span: 8000, pitch: 30, overhang: 450, heel: 150 }, { loads: TB.DEFAULT_LOADS, species: SP, spacing: 1000, plates: { list: [{ id: 'T', w: 152, h: 200, kN: 1 }], label: 'Tiny' } });
  ok(beyond.joints.some((j) => j.beyond && j.plate === null), 'a joint larger than your table\'s biggest capacity says so and invents none');
  const sp = PL.parseSpeciesTable('id,label,Ft,Fc,E,Emin,Fb,Fcp\nmine-1,My pine,4,9,11000,4000,8,3\nbad,x,0,0,0,0');
  ok(sp.ok && sp.species.length === 1 && sp.species[0].Fb === 8 && sp.species[0].Fcp === 3, 'a species table loads with its own Fb and Fc⊥; a row without usable numbers is dropped');
}

section('Raised heel with a bearing stub');
{
  const d = DS.designTruss({ type: 'king', span: 8000, pitch: 30, overhang: 450, heel: 300 }, { loads: { roofDead: 0, snow: 1, ceilingDead: 0, duration: 1 }, species: SP, spacing: 1000 });
  const stubs = d.g.members.filter((m) => m.role === 'stub');
  ok(stubs.length === 2 && stubs.every((m) => near(m.len, d.heel.raise, 1e-6)) && d.heel.raise === 300 - d.heel.needed, 'a 300 mm heel on 2x6/2x4 chords (125 needed) stands on two stubs of ' + d.heel.raise + ' mm, real members', JSON.stringify([stubs.length, d.heel]));
  const lowest = d.g.nodes.filter((n) => stubs.some((m) => m.a === n.id));
  ok(lowest.length === 2 && lowest.every((n) => near(n.z, -d.heel.raise, 1e-6)) && d.g.bearings.length === 2, 'their lower ends are the bearing nodes, raise below the heel joints');
  ok(stubs.every((m) => near(d.res.forces.get(m.id) ?? d.combos[0].forces.get(m.id), -4, 1e-6)) && d.list.filter((m) => m.role === 'stub').length === 2 && d.cut.some((c) => c.role === 'stub'), 'each stub carries the 4.0 kN bearing reaction in compression, and is in the member list and the cut list');
  ok(d.rows.filter((r) => r.role === 'stub').every((r) => r.util < 1 && r.mark.startsWith('ST')), 'the stubs are checked as compression members (marks ST1, ST2)');
  ok(PR.trussProblems(d, {}).some((p) => p.code === 'stub' && /horizontal reaction/.test(p.text)), 'a Problem says the horizontal heel reaction is shear at the stub, not sized here');
  const segs = PC.memberSegments({ a: [0, 0], b: [0, 8000], span: 8000 }, d.g, 2700, d.sizes);
  const zs = segs.flatMap((s) => [s.a[2], s.b[2]]);
  ok(near(Math.min(...zs.filter((z, i) => segs[Math.floor(i / 2)].role === 'stub')), 2700, 1e-6) || near(Math.min(...segs.filter((s) => s.role === 'stub').flatMap((s) => [s.a[2], s.b[2]])), 2700, 1e-6), 'placed, the stubs stand on the wall top (z = 2700) and the heel joints are raised above it');
  const small = DS.designTruss({ type: 'king', span: 8000, pitch: 30, overhang: 450, heel: 150 }, { loads: TB.DEFAULT_LOADS, species: SP, spacing: 1000 });
  ok(!small.g.members.some((m) => m.role === 'stub'), 'a raise under 60 mm is a heel block in the drawing, not a member');
}

section('Attic: the room as a rigid frame');
{
  const attic = { type: 'attic', span: 8000, pitch: 45, overhang: 450, heel: 150, atticWidth: 3000, atticHeight: 2100 };
  const loads = { ...TB.DEFAULT_LOADS, floorLive: 1.5 };
  const d = DS.designTruss(attic, { loads, species: SP, spacing: 600 });
  ok(d.ok && d.res.status === 'ok' && d.frame && d.frame.fixity === 'rigid' && d.frame.room.length === 4, 'attic with rigid room corners: solved, the four room members named', JSON.stringify(d.frame));
  const total = 0.45 * (8 / Math.cos(Math.PI / 4)) * 0.6 + 1 * 8 * 0.6 + 0.25 * 8 * 0.6 + 1.5 * 3 * 0.6;
  ok(near(d.combos[0].reactions.left[1] + d.combos[0].reactions.right[1], total, 0.01), 'vertical equilibrium: the reactions add to dead 3.055 + snow 4.8 + ceiling 1.2 + attic floor live 2.7 = ' + total.toFixed(3) + ' kN', String(d.combos[0].reactions.left[1] + d.combos[0].reactions.right[1]));
  ok(near(d.combos[0].reactions.left[0], 0, 0.01), 'no horizontal reaction under gravity');
  const floor = d.rows.find((r) => r.mark === 'BC2');
  ok(floor.moment > 0.5 && floor.fb > 0 && !floor.bendChecked && PR.trussProblems(d, {}).some((p) => p.code === 'atticfixity' && /rigid/.test(p.text)), 'the attic floor beam has a bending moment (' + floor.moment.toFixed(2) + ' kN·m) and the Problems say the forces depend on the stated rigid corners');
  const pin = DS.designTruss(attic, { loads, species: SP, spacing: 600, fixity: 'pinned' });
  ok(pin.res.status === 'mechanism' && PR.trussProblems(pin, {}).find((p) => p.code === 'mechanism').text.includes('rigid'), 'with pinned corners it is still a mechanism, and the Problem now says why and how to get a stable frame');
  const beam = FR.solveFrame({ nodes: [{ id: 0, x: 0, z: 0 }, { id: 1, x: 4000, z: 0 }], members: [{ id: 0, role: 'bottom', a: 0, b: 1, len: 4000 }], supports: [0, 1] }, new Map(), { beams: new Set([0]), size: () => ({ b: 38, d: 184 }), E: 10000, wBeam: new Map([[0, 1]]) });
  ok(near(beam.moments.get(0), 2, 1e-9) && near(beam.reactions.left[1], 2, 1e-9), 'the frame solver checks against beam theory: 1 kN/m on 4 m simply supported gives w L² / 8 = 2.000 kN·m and 2 kN reactions');
}

section('What cannot be made says so');
{
  const L = { ok: true, trusses: [{ id: 'T1', kind: 'profile', span: 8000, key: 'bad' }], groups: [{ key: 'bad', kind: 'profile', span: 8000, ids: ['T1'] }], designs: new Map([['bad', { key: 'bad', kind: 'profile', spec: { form: 'profile', span: 8000, profile: [[0, 0], [4000, 80], [8000, 0]] }, trib: 600 }]]), issues: [], failures: [{ station: 4, u: 2400, error: 'profile' }] };
  const ds = SD.designSet(L, { loads: TB.DEFAULT_LOADS, species: SP });
  const pr = SD.setProblems(L, ds, {});
  ok(!ds.get('bad').ok && pr.some((p) => p.code === 'failed' && p.severity === 'error' && /could not be generated/.test(p.text) && /T1/.test(p.part + p.about.join())), 'a truss that cannot be generated is an error Problem naming it, with the reason');
  ok(pr.filter((p) => p.code === 'failed').length === 2 && pr[0].code === 'notdesign', 'a layout failure and a design failure both appear; the label is still first');
  const lonely = RS.layoutRoof({ outline: [[0, 0], [10, 0], [0, 10]], overhang: 0, plan: { faces: [{}] } }, {});
  ok(lonely.ok === false && lonely.error === 'outline', 'a roof with no area is refused by name');
  const Lh = RS.layoutRoof(mkRoof(rect), { spacing: 600, hipMethod: 'girder', setback: 30000 });
  ok(Lh.issues.some((i) => i.code === 'nogirder') && SD.setProblems(Lh, SD.designSet(Lh, { loads: TB.DEFAULT_LOADS, species: SP }), {}).some((p) => p.code === 'nogirder'), 'a girder setback that fits nowhere gives a Problem, not an empty set');
}

section('Set exports and language files');
{
  const L = RS.layoutRoof(mkRoof(rect), { spacing: 600, hipMethod: 'girder', base: { panels: 6, heel: 150 } }), ds = SD.designSet(L, { loads: TB.DEFAULT_LOADS, species: SP });
  const c = RP.setCutCsv(L, ds), j = RP.setJointCsv(L, ds), lay = RP.layoutCsv(L, (sp, t) => ds.get(t.key));
  const rows = c.split('\r\n');
  ok(rows[0].startsWith('design,form,trusses') && /girder/.test(c) && /jack/.test(c) && /corner/.test(c) && /Not a substitute/.test(c), 'set cut list: a block per design with the truss count, girder, jack and corner included, label at the end');
  const girderRow = rows.find((r) => r.startsWith('girder') || r.includes('girder 8000')), cols = girderRow.split(',');
  ok(Number(cols[7]) === Number(cols[2]) * Number(cols[6]), 'qty_total = trusses × qty per truss on the girder row (' + cols[2] + ' × ' + cols[6] + ' = ' + cols[7] + ')');
  ok(/Placeholder, not a manufacturer value/.test(j) && lay.split('\r\n').length > L.count && /,corner,/.test(lay), 'set joint CSV carries the table label; layout CSV has a row per truss with its form');
  const en = JSON.parse(fs.readFileSync(path.join(ADDON, 'lang/en.json'), 'utf8')), mx = JSON.parse(fs.readFileSync(path.join(ADDON, 'lang/es-MX.json'), 'utf8'));
  const miss = Object.keys(en).filter((k) => !(k in mx));
  ok(miss.length === 0 && mx['@locale'] === 'es-MX' && /Draft/i.test(mx['@note']), 'es-MX has every key of en.json and is marked a draft', miss.slice(0, 5).join());
  ok(Object.keys(mx).filter((k) => !k.startsWith('@')).every((k) => typeof mx[k] === 'string' && mx[k].length), 'es-MX values are all non-empty strings');
}
