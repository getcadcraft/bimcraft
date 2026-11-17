/* SPDX-License-Identifier: Apache-2.0 */
/**
 * model-floors-ui.js — drawn floors and ramps on the plan (0.6 DF.18, session `bim-draw`), through model-ui.js `extend()`:
 *   Floor by outline  [data-mtool="drawfloor"]  click the corners (snapping like the Wall tool; Shift keeps it square), finish
 *                     on the first corner, by double-click or Enter; options kind, use (floor | landing), thickness, top
 *                     ([data-fl-kind|use|thick|top]). "Add an opening" in a drawn floor's Properties draws an outline the same
 *                     way, cut out of that floor.
 *   Ramp              [data-mtool="ramp"]       click the foot of the ramp (the middle of its bottom edge), then the way up:
 *                     by slope the run follows the rise (1:12), by length the second click gives it; options width, top (the
 *                     level above | a rise), set by, slope ([data-ramp-width|top|rise|by|slope]).
 * Drawn floors and ramps get plan symbols (outline; a ramp's flights, landings and an arrow up with its slope) and
 * Properties; Delete removes them. IFC: model-floors.js, model-ramps.js. Test hook: window.bimcraftFloors = { state }.
 */
import { readDrawnFloors, placeDrawnFloor, changeDrawnFloor, addFloorOpening, removeFloorOpenings, removeDrawnFloors, polyProblem } from './model-floors.js';
import { RAMP_DEFAULTS, rampLayout, readRamps, placeRamp, changeRamp, removeRamps } from './model-ramps.js';
import { ModelWriter } from './model-write.js';
import { fmtLen, parseLen, fmtArea } from './model-units.js';
import { el } from './ui-util.js';

export function mountFloors(modelUi) {
  const R = {
    floors: [], ramps: [],
    pts: [],            // the outline being drawn
    holeFor: null,      // the drawn floor an outline is an opening of
    hover: null,
    rampStart: null,
    fl: { kind: 'concrete', use: 'floor', thickness: 0, top: 0 },
    ramp: { ...RAMP_DEFAULTS, top: 'level' },
  };
  let A = null;
  const t = (...a) => A.t(...a);
  const W = () => new ModelWriter(A.ed().W, A.ed().api, A.ed().mid);
  const L = (mm) => fmtLen(mm, A.units());
  const area = (p) => { let s = 0; for (let i = 0; i < p.length; i++) { const a = p[i], b = p[(i + 1) % p.length]; s += a[0] * b[1] - a[1] * b[0]; } return Math.abs(s / 2); };
  const levelGuid = () => A.S.data.levels.find((l) => l.id === A.S.level)?.guid;
  const hint = (key) => { const h = A.root.querySelector('[data-model-hint]'); if (h) h.textContent = t(key); };
  const hintNow = () => hint(A.S.tool === 'ramp' ? (R.rampStart ? 'model.hint.ramp2' : 'model.hint.ramp') : R.holeFor ? 'model.hint.flhole' : 'model.hint.drawfloor');
  const thick = () => R.fl.thickness > 0 ? R.fl.thickness : (R.fl.kind === 'wood' ? 12 * 25.4 : 6 * 25.4);

  function read() {
    if (!A.ed()) { R.floors = []; R.ramps = []; return; }
    try { const w = W(); R.floors = readDrawnFloors(w); R.ramps = readRamps(w); } catch (e) { R.floors = []; R.ramps = []; }
  }
  const at = (p, e) => A.snapFrom(p, e, R.pts.length ? R.pts[R.pts.length - 1] : (A.S.tool === 'ramp' ? R.rampStart : null)).p;
  function finish() {
    const pts = R.pts.slice();
    R.pts = [];
    if (pts.length < 3) { hintNow(); return; }
    const pr = polyProblem(pts);
    if (pr) { A.host.status(t(pr), true); hintNow(); return; }
    if (R.holeFor) {
      const g = R.holeFor; R.holeFor = null;
      A.commit(addFloorOpening(g, pts), { label: t('model.fl.opening'), verb: t('model.verb.added') });
    } else {
      A.commit(placeDrawnFloor({ storey: levelGuid(), points: pts, kind: R.fl.kind, use: R.fl.use, thickness: thick(), offset: R.fl.top, typeKey: A.ask('newElementType', 'floor') || '' }), { label: t(R.fl.use === 'landing' ? 'model.fl.landing' : 'model.fl.drawn'), verb: t('model.verb.drew') });
    }
    hintNow();
  }
  /** The ramp spec for a second point q (the way up; its distance in length mode). */
  function rampSpec(q) {
    const s = R.rampStart, r = R.ramp, above = A.levelAbove();
    const ang = Math.atan2(q[1] - s[1], q[0] - s[0]) * 180 / Math.PI;
    const toLevel = r.top === 'level' && above;
    return { storey: levelGuid(), start: s, angle: ang, width: r.width, topLevel: toLevel ? above.guid : '', rise: toLevel ? 0 : r.rise, mode: r.by || 'slope', slope: r.slope, length: Math.hypot(q[0] - s[0], q[1] - s[1]) };
  }
  const riseNow = () => { const above = A.levelAbove(), me = A.level(); return R.ramp.top === 'level' && above && me ? above.elevation - me.elevation : R.ramp.rise; };

  // ---- option rows ----
  function bindRows() {
    const root = A.root;
    const k = root.querySelector('[data-fl-kind]');
    if (k && !k.dataset.bound) {
      k.dataset.bound = '1';
      k.addEventListener('change', () => { R.fl.kind = k.value; R.fl.thickness = 0; bindRows(); });
      root.querySelector('[data-fl-use]')?.addEventListener('change', (e) => { R.fl.use = e.target.value; });
      const len = (sel, fn) => { const i = root.querySelector(sel); i?.addEventListener('change', () => { const mm = parseLen(i.value, A.units()); if (Number.isFinite(mm)) fn(mm); else A.host.status(t('model.err.length'), true); bindRows(); }); };
      len('[data-fl-thick]', (mm) => { if (mm >= 10) R.fl.thickness = mm; });
      len('[data-fl-top]', (mm) => { R.fl.top = mm; });
      len('[data-ramp-width]', (mm) => { if (mm >= 300) R.ramp.width = mm; });
      len('[data-ramp-rise]', (mm) => { if (mm >= 10) R.ramp.rise = mm; });
      root.querySelector('[data-ramp-top]')?.addEventListener('change', (e) => { R.ramp.top = e.target.value; bindRows(); });
      root.querySelector('[data-ramp-by]')?.addEventListener('change', (e) => { R.ramp.by = e.target.value; bindRows(); });
      const sl = root.querySelector('[data-ramp-slope]');
      sl?.addEventListener('change', () => { const v = Number(String(sl.value).replace(/^\s*1\s*:\s*/, '')); if (v >= 1 && v <= 50) R.ramp.slope = v; else A.host.status(t('model.err.ramp.slope'), true); bindRows(); });
    }
    const set = (sel, v) => { const i = root.querySelector(sel); if (i && document.activeElement !== i) i.value = v; };
    set('[data-fl-kind]', R.fl.kind); set('[data-fl-use]', R.fl.use); set('[data-fl-thick]', L(thick())); set('[data-fl-top]', L(R.fl.top));
    set('[data-ramp-width]', L(R.ramp.width)); set('[data-ramp-rise]', L(R.ramp.rise)); set('[data-ramp-top]', R.ramp.top); set('[data-ramp-by]', R.ramp.by || 'slope'); set('[data-ramp-slope]', '1:' + R.ramp.slope);
    const rr = root.querySelector('[data-ramp-rise]'); if (rr) rr.closest('label').hidden = R.ramp.top === 'level' && !!A.levelAbove();
    const rs = root.querySelector('[data-ramp-slope]'); if (rs) rs.closest('label').hidden = (R.ramp.by || 'slope') !== 'slope';
  }

  // ---- plan symbols ----
  function scene(sc) {
    const k = A.kb();
    for (const f of R.floors.filter((x) => x.storey === A.S.level)) {
      const lines = f.points.map((q, i) => { const r = f.points[(i + 1) % f.points.length]; return [q[0], q[1], r[0], r[1]]; });
      const thin = f.openings.flatMap((o) => { const p = o.points, b = bbox(p); return [[b[0], b[1], b[2], b[3]], [b[0], b[3], b[2], b[1]], ...p.map((q, i) => { const r = p[(i + 1) % p.length]; return [q[0], q[1], r[0], r[1]]; })]; });
      sc.symbols.push({ key: k + f.id, thin: lines, lines: [], dashed: [], poly: f.points, roof: true });   // roof: picked last (it covers what is on it)
      if (thin.length) sc.symbols.push({ key: k + f.id, thin, lines: [], roof: true });
    }
    for (const r of R.ramps.filter((x) => x.storey === A.S.level)) {
      const lay = rampLayout(r, r.riseUsed);
      if (lay.error) continue;
      const lines = [], thin = [];
      const o = lay.outline;
      for (let i = 0; i < 4; i++) { const a = o[i], b = o[(i + 1) % 4]; lines.push([a[0], a[1], b[0], b[1]]); }
      for (const pc of lay.pieces) for (const sPos of [pc.s0, pc.s1]) { const a = lay.P(sPos, -r.width / 2), b = lay.P(sPos, r.width / 2); thin.push([a[0], a[1], b[0], b[1]]); }
      // the arrow up the slope, on the middle line, its head at the top
      const [a0, a1] = lay.arrow, hl = Math.min(450, lay.run / 6), u = lay.u, l = lay.l;
      thin.push([a0[0], a0[1], a1[0], a1[1]], [a1[0], a1[1], a1[0] - u[0] * hl + l[0] * hl / 2, a1[1] - u[1] * hl + l[1] * hl / 2], [a1[0], a1[1], a1[0] - u[0] * hl - l[0] * hl / 2, a1[1] - u[1] * hl - l[1] * hl / 2]);
      sc.symbols.push({ key: k + r.id, lines, thin, poly: o });
      const mid = lay.P(Math.min(lay.run / 2, 900), 0);
      (sc.rooms ||= []).push({ key: k + r.id, label: [t('model.ramp.up', { slope: '1:' + (Math.round(lay.slope * 10) / 10) })], at: mid });
    }
  }
  const bbox = (p) => [Math.min(...p.map((q) => q[0])), Math.min(...p.map((q) => q[1])), Math.max(...p.map((q) => q[0])), Math.max(...p.map((q) => q[1]))];

  A = modelUi.extend({
    tools: ['drawfloor', 'ramp'],
    hint: (name) => (name === 'ramp' ? 'model.hint.ramp' : 'model.hint.drawfloor'),
    typed: () => false,
    classes: /^Ifc(Slab|Ramp|RampFlight)$/,
    move(p, e) { R.hover = at(p, e); },
    click(p, e) {
      const q = at(p, e);
      if (A.S.tool === 'ramp') {
        if (!R.rampStart) { R.rampStart = q; hintNow(); return; }
        const spec = rampSpec(q);
        R.rampStart = null; hintNow();
        if (spec.length < 100) { A.host.status(t('model.err.ramp.short'), true); return; }
        A.commit(placeRamp(spec), { label: t('model.ramp'), verb: t('model.verb.placed') });
        return;
      }
      if (R.pts.length >= 3 && Math.hypot(q[0] - R.pts[0][0], q[1] - R.pts[0][1]) < A.pv().pxToMm(8)) { finish(); return; }
      R.pts.push(q); hintNow();
    },
    dbl() { if (A.S.tool === 'drawfloor') finish(); },
    key(e) {
      if (A.S.tool === 'drawfloor' && e.key === 'Enter' && R.pts.length) { finish(); return true; }
      if (A.S.tool === 'drawfloor' && e.key === 'Backspace' && R.pts.length) { R.pts.pop(); return true; }
      return false;
    },
    escape() {
      if (A.S.tool === 'drawfloor' && (R.pts.length || R.holeFor)) { R.pts = []; R.holeFor = null; hintNow(); return true; }
      if (A.S.tool === 'ramp' && R.rampStart) { R.rampStart = null; hintNow(); return true; }
      return false;
    },
    toolChanged(name) { R.pts = []; R.rampStart = null; R.hover = null; if (name !== 'drawfloor') R.holeFor = null; bindRows(); const m = A.root.querySelector('[data-res-tools]'); if (m?.open) m.open = false; },
    refresh() { read(); bindRows(); },
    ownKeys(set, k) { for (const r of R.ramps) for (const p of r.parts) set.add(k + p); for (const f of R.floors) set.add(k + f.id); },
    scene,
    overlay(o) {
      if (A.S.tool === 'drawfloor') {
        if (R.hover) o.snap = { p: R.hover, kind: 'free' };
        if (R.pts.length) {
          const pts = R.hover ? [...R.pts, R.hover] : R.pts;
          o.walls.push(pts.length >= 3 ? pts : []);
          for (let i = 0; i + 1 < pts.length; i++) o.lines.push([pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1]]);
          for (const q of R.pts) o.points.push(q);
          if (R.hover) o.hud = { p: R.hover, text: L(Math.hypot(R.hover[0] - R.pts[R.pts.length - 1][0], R.hover[1] - R.pts[R.pts.length - 1][1])) + (pts.length >= 3 ? '\n' + fmtArea(area(pts), A.units()) : '') };
        }
      } else if (A.S.tool === 'ramp' && R.rampStart && R.hover) {
        const spec = rampSpec(R.hover), lay = rampLayout(spec, riseNow());
        if (lay.error || !(riseNow() > 0)) { o.hud = { p: R.hover, text: t(lay.error || 'model.err.ramp.rise') }; return; }
        o.walls.push(lay.outline);
        for (const pc of lay.pieces) { const a = lay.P(pc.s1, -spec.width / 2), b = lay.P(pc.s1, spec.width / 2); o.dashed.push([a[0], a[1], b[0], b[1]]); }
        o.hud = { p: R.hover, text: t(lay.pieces.filter((x) => x.kind === 'flight').length === 1 ? 'model.ramp.hud.one' : 'model.ramp.hud', { run: L(lay.run), slope: '1:' + Math.round(lay.slope * 10) / 10, n: lay.pieces.filter((x) => x.kind === 'flight').length }) + (lay.steep ? '\n' + t('model.ramp.steep') : '') };
      }
    },
    pick(key) {
      const k = A.kb();
      const f = R.floors.find((x) => k + x.id === key);
      if (f) return { kind: 'drawnfloor', guid: f.guid, label: t(f.use === 'landing' ? 'model.fl.landing' : 'model.fl.drawn') };
      const r = R.ramps.find((x) => k + x.id === key || x.parts.some((p) => k + p === key));
      return r ? { kind: 'ramp', guid: r.guid, label: t('model.ramp') } : null;
    },
    props(items, kit) {
      if (items.length !== 1) return null;
      const it = items[0];
      if (it.kind === 'drawnfloor') {
        const f = R.floors.find((x) => x.guid === it.guid);
        if (!f) return null;
        const run = (ch) => A.commit(changeDrawnFloor(f.guid, ch), kit.one(t('model.fl.drawn')));
        A.ask('drawnFloorType', f, kit, run);   // 0.10 BK.24 (bk-r3-types-10): the floor's layered type (element-types-ui.js)
        kit.field(t('model.fl.kind'), kit.select([['concrete', t('model.floor.concrete')], ['wood', t('model.floor.wood')]], f.kind, 'data-mp-flkind', (v) => run({ kind: v })));
        kit.field(t('model.fl.use'), kit.select([['floor', t('model.fl.use.floor')], ['landing', t('model.fl.use.landing')]], f.use, 'data-mp-fluse', (v) => run({ use: v })));
        kit.field(t('model.fl.thick'), kit.lenInput(f.thickness, 'data-mp-flthick', (mm) => run({ thickness: mm }), { min: 10 }));
        kit.field(t('model.fl.top'), kit.lenInput(f.offset, 'data-mp-fltop', (mm) => run({ offset: mm }), { any: true }));
        kit.rows.push(el('dt', {}, t('model.fl.areaname')), el('dd', { 'data-mp-flarea': '' }, fmtArea(f.area - f.openings.reduce((s, o) => s + area(o.points), 0), A.units())));
        kit.field(t('model.fl.openings'), kit.button(t('model.fl.addhole'), 'data-mp-flhole', () => { A.setTool('drawfloor'); R.holeFor = f.guid; hintNow(); }));
        f.openings.forEach((o, i) => kit.field(t('model.fl.openingn', { n: i + 1, a: fmtArea(area(o.points), A.units()) }), kit.button(t('model.fl.delhole'), 'data-mp-fldelhole', () => A.commit(removeFloorOpenings([o.guid]), kit.one(t('model.fl.opening'))))));
        return { title: t(f.use === 'landing' ? 'model.fl.landing' : 'model.fl.drawn') };
      }
      if (it.kind === 'ramp') {
        const r = R.ramps.find((x) => x.guid === it.guid);
        if (!r) return null;
        const run = (ch) => A.commit(changeRamp(r.guid, ch), kit.one(t('model.ramp')));
        const above = A.S.data.levels[A.S.data.levels.findIndex((l) => l.id === r.storey) + 1];
        kit.field(t('model.ramp.width'), kit.lenInput(r.width, 'data-mp-rpwidth', (mm) => run({ width: mm }), { min: 300 }));
        kit.field(t('model.ramp.top'), kit.select([['level', t('model.ramp.top.level')], ['rise', t('model.ramp.top.rise')]], r.topLevel ? 'level' : 'rise', 'data-mp-rptop', (v) => run(v === 'level' && above ? { topLevel: above.guid } : { topLevel: '', rise: r.riseUsed })));
        kit.field(t('model.ramp.rise'), kit.lenInput(r.riseUsed, 'data-mp-rprise', (mm) => run({ topLevel: '', rise: mm }), { min: 10 }));
        kit.field(t('model.ramp.by'), kit.select([['slope', t('model.ramp.by.slope')], ['length', t('model.ramp.by.length')]], r.mode, 'data-mp-rpby', (v) => run({ mode: v, length: r.runUsed })));
        if (r.mode === 'slope') {
          const sl = el('input', { type: 'text', className: 'bc-input', value: '1:' + r.slope, 'data-mp-rpslope': '', size: 6 });
          sl.addEventListener('change', () => { const v = Number(String(sl.value).replace(/^\s*1\s*:\s*/, '')); if (v >= 1 && v <= 50) run({ slope: v }); else { A.host.status(t('model.err.ramp.slope'), true); sl.value = '1:' + r.slope; } });
          kit.field(t('model.ramp.slope'), sl);
        } else kit.field(t('model.ramp.length'), kit.lenInput(r.runUsed, 'data-mp-rplength', (mm) => run({ length: mm }), { min: 300 }));
        const flights = rampLayout(r, r.riseUsed).pieces?.filter((x) => x.kind === 'flight').length || 0;
        kit.rows.push(el('dt', {}, t('model.ramp.run')), el('dd', { 'data-mp-rprun': '' }, t(flights === 1 ? 'model.ramp.runtext.one' : 'model.ramp.runtext', { run: L(r.runUsed), n: flights, slope: '1:' + Math.round(r.slope * 10) / 10 })));
        if (r.steep) kit.rows.push(el('dt', {}, ''), el('dd', { className: 'bc-input-err', 'data-mp-rpsteep': '' }, t('model.ramp.steep')));
        return { title: t('model.ramp') };
      }
      return null;
    },
    remove(items) {
      const fl = items.filter((x) => x.kind === 'drawnfloor').map((x) => x.guid), rp = items.filter((x) => x.kind === 'ramp').map((x) => x.guid);
      const ops = [fl.length && removeDrawnFloors(fl), rp.length && removeRamps(rp)].filter(Boolean);
      return (ed) => { let r = null; for (const o of ops) { const r2 = o(ed); r = r ? { ...r2, journal: A.mergeJournals(r.journal, r2.journal) } : r2; } return r || { id: null, ids: [] }; };
    },
  });
  if (typeof window !== 'undefined') window.bimcraftFloors = { state: R };   // for tests
  return { state: R };
}
