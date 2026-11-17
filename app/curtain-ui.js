/* SPDX-License-Identifier: Apache-2.0 */
/**
 * curtain-ui.js — curtain systems in the page (session bk-tools-b-10), through model-ui.js `extend()`. A thin adapter: the
 * layout is curtain/layout.js (lib/curtain), the IFC is model-curtain.js, a face is read by workplane-ui.js.
 *
 * Build menu (made here, before extend() wires every [data-mtool]):
 *   Curtain System [data-mtool="curtain"]      two clicks in the plan, like a wall. Its row: top (the level above | a height)
 *                  [data-cw-top] [data-cw-height], base [data-cw-base], a line every [data-cw-su] along and [data-cw-sv] up
 *                  (empty = none), mullions [data-cw-mull], profile [data-cw-profile]
 *   Curtain Grid   [data-mtool="curtaingrid"]  click a system: lines [data-cg-dir] (upright | level), what [data-cg-act] (add |
 *                  move | remove | by spacing), at [data-cg-at] (a level line's height; typed instead of the click for an
 *                  upright one), every [data-cg-every]
 *   Mullion        [data-mtool="mullion"]      click a system: on [data-mu-dir] (the upright line clicked | the level line at
 *                  [data-mu-at] | the border | every line), [data-mu-on] (place | remove), profile [data-mu-profile]
 *   By Face        [data-mtool="byface"]       click a flat face in the 3D view: makes [data-bf-make] a curtain system on it (any
 *                  flat face of any element, upright, sloping or level) or a wall along its foot (an upright face only)
 * A picked system has it all in Properties (every grid line with its place, its mullion and a remove button; spacing; border;
 * profile; pane thickness; panes, glass and mullion length). Schedules › Curtain systems lists them.
 * Test hook: window.bimcraftCurtain = { state, api }.
 */
import { el } from './ui-util.js';
import { ModelWriter } from './model-write.js';
import { fmtLen, parseLen, fmtArea, unitMark } from './model-units.js';
import { inv4, apply4 } from './ifc-util.js';
import { drawWalls } from './model-ops.js';
import { wallType, typeThickness } from './model-walls.js';
import * as P from './workplane/plane.js';
import { layoutCurtain, nearestLine } from './curtain/layout.js';
import { CURTAIN_DEFAULTS, MULLION_PROFILES, wallCurtain, readCurtains, placeCurtain, changeCurtain, removeCurtains, gridChange, mullionChange } from './model-curtain.js';

const TOOLS = ['curtain', 'curtaingrid', 'mullion', 'byface'];
const ICON = { curtain: ['curtainsystem', 'bi-grid-1x2'], curtaingrid: ['curtaingrid', 'bi-grid-3x3'], mullion: ['mullion', 'bi-distribute-vertical'], byface: ['byface', 'bi-box'] };

export function mountCurtain(modelUi, wpUi) {
  const R = {
    list: [], start: null, hover: null, grab: null,
    opts: { top: 'level', height: CURTAIN_DEFAULTS.height, base: 0, su: CURTAIN_DEFAULTS.spacingU, sv: 0, mullions: true, profile: MULLION_PROFILES[0].key, thickness: CURTAIN_DEFAULTS.panel.thickness },
    grid: { dir: 'u', act: 'add', at: null, every: 1500 },
    mull: { dir: 'u', at: null, on: true, profile: MULLION_PROFILES[0].key },
    face: { make: 'curtain' },
  };
  let A = null;
  const t = (k, f) => A.t('curtain.' + k, f);
  const W = () => new ModelWriter(A.ed().W, A.ed().api, A.ed().mid);
  const L = (mm) => fmtLen(mm, A.units());
  const say = (text, bad) => A.host.status(text, !!bad);
  const hint = (key) => { const h = A.root.querySelector('[data-model-hint]'); if (h) h.textContent = t(key); };
  const mine = () => TOOLS.includes(A.S.tool);
  const Sm = (id = A.S.level) => A.storeyMatrix(id) || [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
  const mmOfPlan = (p, z = 0) => apply4(Sm(), p[0], p[1], z);
  const planOfMm = (q) => apply4(inv4(Sm()), q[0], q[1], q[2]);
  const profile = (key) => MULLION_PROFILES.find((p) => p.key === key) || MULLION_PROFILES[0];
  const at = (p, e) => A.snapFrom(p, e, R.start).p;

  function read() {
    if (!A.ed()) { R.list = []; return; }
    try { R.list = readCurtains(W()); } catch (e) { console.error(e); R.list = []; }
  }
  const heightNow = () => { const above = A.levelAbove(), me = A.level(); return R.opts.top === 'level' && above && me ? above.elevation - me.elevation - R.opts.base : R.opts.height; };
  function specFor(a, b) {
    const A0 = mmOfPlan(a, R.opts.base), B0 = mmOfPlan(b, R.opts.base), wc = wallCurtain({ a: A0, b: B0, z: A0[2], height: heightNow() });
    return wc && { storey: A.level()?.guid, ...wc, source: 'line', spacingU: R.opts.su, spacingV: R.opts.sv, mullions: R.opts.mullions, border: R.opts.mullions, mullion: { width: profile(R.opts.profile).width, depth: profile(R.opts.profile).depth }, panel: { thickness: R.opts.thickness } };
  }
  /** A system's footprint in the plan shown: its line (an upright one) or its outline (a sloping or level one). */
  function footprint(c) {
    const tt = c.totals, F = c.frame, up = P.isUpright(F);
    const pl = (u, v, w = 0) => { const q = planOfMm(P.fromPlane(F, u, v, w)); return [q[0], q[1]]; };
    if (up) { const d = Math.max(c.panel.thickness, c.mullion.depth, 60) / 2; return { up, a: pl(tt.uMin, tt.vMin), b: pl(tt.uMax, tt.vMin), poly: [pl(tt.uMin, tt.vMin, -d), pl(tt.uMax, tt.vMin, -d), pl(tt.uMax, tt.vMin, d), pl(tt.uMin, tt.vMin, d)], pl }; }
    return { up, poly: c.outline.map((q) => pl(q[0], q[1])), pl };
  }
  const here = () => R.list.filter((c) => c.storey === A.S.level);
  const segDist = (p, a, b) => { const dx = b[0] - a[0], dy = b[1] - a[1], L2 = dx * dx + dy * dy, k = L2 ? Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / L2)) : 0; return Math.hypot(p[0] - a[0] - dx * k, p[1] - a[1] - dy * k); };
  /** The system under a plan point, and where along it (its own u, v at the click). */
  function systemAt(p) {
    let best = null, bd = A.pv().pxToMm(12);
    for (const c of here()) {
      const f = footprint(c);
      const d = f.up ? segDist(p, f.a, f.b) : (P.inPolygon(f.poly, p) ? 0 : Math.min(...f.poly.map((q, i) => segDist(p, q, f.poly[(i + 1) % f.poly.length]))));
      if (d < bd) { bd = d; best = c; }
    }
    if (!best) return null;
    const F = best.frame, m = mmOfPlan(p, 0);
    let uv;
    if (P.isUpright(F)) uv = [P.dot(P.sub([m[0], m[1], F.o[2]], F.o), F.x), null];
    else { const k = P.dot(P.sub(F.o, m), F.n) / F.n[2], c = P.toPlane(F, [m[0], m[1], m[2] + k]); uv = [c[0], c[1]]; }
    return { c: best, u: uv[0], v: uv[1] };
  }

  // ---- plan symbols ----
  function scene(sc) {
    const k = A.kb();
    for (const c of here()) {
      const f = footprint(c), Ly = layoutCurtain(c), lines = [], thin = [], solid = [];
      if (f.up) {
        const g = c.panel.thickness / 2, md = c.mullion.depth / 2, mw = c.mullion.width / 2, tt = c.totals;
        const ln = (u0, u1, w) => { const a = f.pl(u0, tt.vMin, w), b = f.pl(u1, tt.vMin, w); return [a[0], a[1], b[0], b[1]]; };
        lines.push(ln(tt.uMin, tt.uMax, -g), ln(tt.uMin, tt.uMax, g));
        const box = (u) => solid.push([f.pl(u - mw, tt.vMin, -md), f.pl(u + mw, tt.vMin, -md), f.pl(u + mw, tt.vMin, md), f.pl(u - mw, tt.vMin, md)]);
        for (const l of Ly.linesU) { if (l.m && c.mullion.width > 0) box(l.at); else { const a = f.pl(l.at, tt.vMin, -g * 2.5), b = f.pl(l.at, tt.vMin, g * 2.5); thin.push([a[0], a[1], b[0], b[1]]); } }
        if (c.border && c.mullion.width > 0) { box(tt.uMin + mw); box(tt.uMax - mw); }
      } else {
        f.poly.forEach((q, i) => { const n = f.poly[(i + 1) % f.poly.length]; lines.push([q[0], q[1], n[0], n[1]]); });
        for (const m of Ly.mullions) { const a = f.pl(m.a[0], m.a[1]), b = f.pl(m.b[0], m.b[1]); thin.push([a[0], a[1], b[0], b[1]]); }
        for (const l of Ly.linesU.filter((x) => !x.m)) for (const [a, b] of P.clipSegment(Ly.outline, [l.at, c.totals.vMin - 1], [l.at, c.totals.vMax + 1])) { const p = f.pl(a[0], a[1]), q = f.pl(b[0], b[1]); thin.push([p[0], p[1], q[0], q[1]]); }
        for (const l of Ly.linesV.filter((x) => !x.m)) for (const [a, b] of P.clipSegment(Ly.outline, [c.totals.uMin - 1, l.at], [c.totals.uMax + 1, l.at])) { const p = f.pl(a[0], a[1]), q = f.pl(b[0], b[1]); thin.push([p[0], p[1], q[0], q[1]]); }
      }
      sc.symbols.push({ key: k + c.id, lines, thin, solid, poly: f.poly, color: '--layer-cyan', roof: !f.up });
    }
  }

  // ---- the tools ----
  function hintNow() {
    const k = A.S.tool;
    if (k === 'curtain') hint(R.start ? 'hint.draw2' : 'hint.draw');
    else if (k === 'curtaingrid') hint(R.grab ? 'hint.grid.move2' : 'hint.grid.' + R.grid.act);
    else if (k === 'mullion') hint('hint.mullion');
    else if (k === 'byface') hint('hint.byface');
  }
  function gridClick(p) {
    const hit = systemAt(p), G = R.grid;
    if (!hit) { say(t('err.nosystem'), true); return; }
    const c = hit.c, dir = G.dir, lines = dir === 'v' ? c.linesV : c.linesU, lo = dir === 'v' ? c.totals.vMin : c.totals.uMin;
    // where: an upright line from the click (or the typed place), a level line from the typed height (or the click on a sloping system)
    const typed = Number.isFinite(G.at) ? lo + G.at : null, clicked = dir === 'v' ? hit.v : hit.u;
    const where = typed ?? (clicked === null ? null : Math.round(clicked));
    const meta = { label: t('grid'), verb: A.t('model.verb.changed') };
    if (G.act === 'spacing') { if (!(G.every > 0)) { say(t('err.every'), true); return; } A.commit(gridChange(c.guid, { dir, spacing: G.every }), meta); return; }
    if (where === null) { say(t('err.typeat'), true); return; }
    if (G.act === 'add') { A.commit(gridChange(c.guid, { dir, add: where }), meta); return; }
    if (!lines.length) { say(t('err.nolines'), true); return; }
    if (G.act === 'remove') { A.commit(gridChange(c.guid, { dir, remove: nearestLine(lines, where) }), meta); return; }
    if (!R.grab || R.grab.guid !== c.guid || R.grab.dir !== dir) { R.grab = { guid: c.guid, dir, i: nearestLine(lines, where), at: lines[nearestLine(lines, where)].at }; hintNow(); say(t('grid.grabbed', { at: L(R.grab.at - lo) })); return; }
    const g = R.grab; R.grab = null; hintNow();
    A.commit(gridChange(c.guid, { dir, move: [g.i, where] }), meta);
  }
  function mullionClick(p) {
    const hit = systemAt(p), M = R.mull;
    if (!hit) { say(t('err.nosystem'), true); return; }
    const c = hit.c, pr = profile(M.profile), meta = { label: t('mullion'), verb: A.t('model.verb.changed') };
    const size = M.on ? { width: pr.width, depth: pr.depth } : {};
    if (M.dir === 'all' || M.dir === 'border') { A.commit(mullionChange(c.guid, { dir: M.dir, on: M.on, ...size }), meta); return; }
    const lines = M.dir === 'v' ? c.linesV : c.linesU, lo = M.dir === 'v' ? c.totals.vMin : c.totals.uMin;
    if (!lines.length) { say(t('err.nolines'), true); return; }
    const where = M.dir === 'v' ? (Number.isFinite(M.at) ? lo + M.at : hit.v) : hit.u;
    if (where === null || where === undefined) { say(t('err.typeat'), true); return; }
    A.commit(mullionChange(c.guid, { dir: M.dir, line: nearestLine(lines, where), on: M.on, ...size }), meta);
  }
  /** By Face: a click in the 3D view. */
  function faceClick(x, y) {
    const v = A.host.viewer?.();
    if (!v || v.measuring || v.placing || v.walk || A.S.tool !== 'byface') return;
    const f = wpUi?.planeFromFace(x, y);
    if (!f) { say(t('err.noface'), true); return; }
    const fo = P.faceOutline(f.frame, f.tris, 1);
    if (!fo || fo.area < 1) { say(t('err.noface'), true); return; }
    // measured from the face's own lower left corner
    const u0 = Math.min(...fo.outline.map((q) => q[0])), v0 = Math.min(...fo.outline.map((q) => q[1]));
    const F = { ...f.frame, o: P.fromPlane(f.frame, u0, v0) }, outline = fo.outline.map((q) => [Math.round((q[0] - u0) * 100) / 100, Math.round((q[1] - v0) * 100) / 100]);
    const zs = outline.map((q) => P.fromPlane(F, q[0], q[1])[2]), zMin = Math.min(...zs), levels = A.S.data?.levels || [];
    const elev = (l) => apply4(Sm(l.id), 0, 0, 0)[2];
    const lv = levels.filter((l) => elev(l) <= zMin + 0.5).sort((a, b) => elev(b) - elev(a))[0] || levels.slice().sort((a, b) => elev(a) - elev(b))[0];
    if (!lv) { say(A.t('model.err.nolevel'), true); return; }
    if (R.face.make === 'wall') {
      if (!P.isUpright(F)) { say(t('err.wallface'), true); return; }
      const tk = typeThickness(wallType(modelUi.wallDefault?.()) || wallType('ext-2x6')), Wd = Math.max(...outline.map((q) => q[0])), H = Math.max(...outline.map((q) => q[1]));
      const Si = inv4(Sm(lv.id)), pl = (u) => { const q = P.fromPlane(F, u, 0, -tk / 2), r = apply4(Si, q[0], q[1], q[2]); return [r[0], r[1]]; };
      A.commit(drawWalls({ storey: lv.guid, segs: [{ a: pl(0), b: pl(Wd) }], typeKey: modelUi.wallDefault?.() || 'ext-2x6', baseOffset: zMin - elev(lv), height: H }), { label: A.t('model.wall'), verb: A.t('model.verb.drew') });
      if (fo.holes) say(t('face.holes'));
      return;
    }
    const pr = profile(R.opts.profile);
    A.commit(placeCurtain({ storey: lv.guid, frame: F, outline, source: 'face', host: f.guid, spacingU: R.opts.su, spacingV: R.opts.sv, mullions: R.opts.mullions, border: R.opts.mullions, mullion: { width: pr.width, depth: pr.depth }, panel: { thickness: R.opts.thickness } }),
      { label: t('system'), verb: A.t('model.verb.placed') });
    say(t(fo.holes ? 'face.made.holes' : 'face.made', { area: fmtArea(fo.area, A.units()), kind: f.cls.replace(/^Ifc/, '') || t('face.element') }));
  }
  const wired = new WeakSet();
  function wire3d() {
    const v = A.host.viewer?.();
    if (!v?.canvas || wired.has(v.canvas)) return;
    wired.add(v.canvas);
    let down = null;
    v.canvas.addEventListener('pointerdown', (e) => { down = e.button === 0 ? [e.clientX, e.clientY] : null; });
    v.canvas.addEventListener('pointerup', (e) => { if (!down || Math.hypot(e.clientX - down[0], e.clientY - down[1]) > 4) { down = null; return; } down = null; if (A.S.tool === 'byface') setTimeout(() => faceClick(e.clientX, e.clientY), 0); });
  }

  // ---- the buttons and their option rows (before extend()) ----
  const menu = document.querySelector('[data-res-tools] .bc-mb-menu');
  if (menu && !menu.querySelector('[data-mtool="curtain"]')) for (const name of TOOLS) menu.append(el('button', { type: 'button', className: 'bc-tool', 'data-mtool': name, 'aria-pressed': 'false' }, el('i', { className: 'bi ' + ICON[name][1], 'aria-hidden': 'true', 'data-ccic': ICON[name][0] }), el('span', {}, '')));
  function syncRows() {   // document, not the app's root: a layout may move a tool's row out of it (the docked layout's Tool options bar)
    const root = document, O = R.opts, set = (sel, v) => { const i = root.querySelector(sel); if (i && document.activeElement !== i) { if (i.type === 'checkbox') i.checked = !!v; else i.value = v; } };
    for (const pre of ['cw', 'bf']) {
      set(`[data-${pre}-su]`, O.su > 0 ? L(O.su) : ''); set(`[data-${pre}-sv]`, O.sv > 0 ? L(O.sv) : ''); set(`[data-${pre}-mull]`, O.mullions); set(`[data-${pre}-profile]`, O.profile);
    }
    set('[data-cw-top]', O.top); set('[data-cw-height]', L(O.height)); set('[data-cw-base]', L(O.base));
    const hl = root.querySelector('[data-cw-height]')?.closest('label'); if (hl) hl.hidden = O.top === 'level' && !!A.levelAbove();
    set('[data-cg-dir]', R.grid.dir); set('[data-cg-act]', R.grid.act); set('[data-cg-at]', Number.isFinite(R.grid.at) ? L(R.grid.at) : ''); set('[data-cg-every]', L(R.grid.every));
    const ev = root.querySelector('[data-cg-every]')?.closest('label'); if (ev) ev.hidden = R.grid.act !== 'spacing';
    const ga = root.querySelector('[data-cg-at]')?.closest('label'); if (ga) ga.hidden = R.grid.act === 'spacing';
    set('[data-mu-dir]', R.mull.dir); set('[data-mu-on]', R.mull.on ? '1' : '0'); set('[data-mu-profile]', R.mull.profile); set('[data-mu-at]', Number.isFinite(R.mull.at) ? L(R.mull.at) : '');
    const ma = root.querySelector('[data-mu-at]')?.closest('label'); if (ma) ma.hidden = R.mull.dir !== 'v';
    set('[data-bf-make]', R.face.make);
  }
  function makeRows() {
    const bar = A.root.querySelector('[data-mopts="wall"]')?.parentElement;
    if (!bar || bar.querySelector('[data-mopts="curtain"]')) return;
    const row = (name, ...kids) => el('div', { className: 'bc-modelbar-row', 'data-mopts': name, hidden: true }, ...kids);
    const lab = (text, input) => el('label', { className: 'bc-mb-field' }, el('span', {}, text + ' '), input);
    /** A length field; an empty one means "none" where that is allowed. */
    const len = (attr, put, { empty = false, any = false } = {}) => {
      const i = el('input', { type: 'text', className: 'bc-input bc-num', size: 7, [attr]: '' });
      i.addEventListener('change', () => {
        if (!i.value.trim() && empty) { put(null); syncRows(); return; }
        const mm = parseLen(i.value, A.units());
        if (Number.isFinite(mm) && (any || mm > 0)) put(mm); else say(A.t('model.err.length'), true);
        syncRows();
      });
      return i;
    };
    const sel = (attr, options, put) => { const s = el('select', { className: 'bc-mb-select', [attr]: '' }, ...options.map(([v, text]) => el('option', { value: v }, text))); s.addEventListener('change', () => { put(s.value); syncRows(); hintNow(); }); return s; };
    const chk = (attr, text, put) => { const i = el('input', { type: 'checkbox', [attr]: '' }); i.addEventListener('change', () => { put(i.checked); syncRows(); }); return el('label', { className: 'bc-mb-field' }, i, ' ' + text); };
    const profiles = MULLION_PROFILES.map((p) => [p.key, t('profile.name', { w: p.width, d: p.depth })]);
    const O = R.opts;
    const gridOpts = (pre) => [lab(t('row.su'), len(`data-${pre}-su`, (mm) => { O.su = mm || 0; }, { empty: true })), lab(t('row.sv'), len(`data-${pre}-sv`, (mm) => { O.sv = mm || 0; }, { empty: true })),
      chk(`data-${pre}-mull`, t('row.mullions'), (on) => { O.mullions = on; }), lab(t('row.profile'), sel(`data-${pre}-profile`, profiles, (v) => { O.profile = v; }))];
    bar.append(
      row('curtain', lab(t('row.top'), sel('data-cw-top', [['level', A.t('model.ramp.top.level')], ['fixed', t('row.top.fixed')]], (v) => { O.top = v; })), lab(t('row.height'), len('data-cw-height', (mm) => { O.height = mm; })),
        lab(t('row.base'), len('data-cw-base', (mm) => { O.base = mm; }, { any: true })), ...gridOpts('cw')),
      row('curtaingrid', lab(t('row.lines'), sel('data-cg-dir', [['u', t('dir.u')], ['v', t('dir.v')]], (v) => { R.grid.dir = v; R.grab = null; })),
        lab(t('row.act'), sel('data-cg-act', [['add', t('act.add')], ['move', t('act.move')], ['remove', t('act.remove')], ['spacing', t('act.spacing')]], (v) => { R.grid.act = v; R.grab = null; })),
        lab(t('row.at'), len('data-cg-at', (mm) => { R.grid.at = mm; }, { empty: true, any: true })), lab(t('row.every'), len('data-cg-every', (mm) => { R.grid.every = mm; }))),
      row('mullion', lab(t('row.on'), sel('data-mu-dir', [['u', t('mdir.u')], ['v', t('mdir.v')], ['border', t('mdir.border')], ['all', t('mdir.all')]], (v) => { R.mull.dir = v; })),
        lab(t('row.at'), len('data-mu-at', (mm) => { R.mull.at = mm; }, { empty: true, any: true })),
        lab(t('row.do'), sel('data-mu-on', [['1', t('do.place')], ['0', t('do.remove')]], (v) => { R.mull.on = v === '1'; })), lab(t('row.profile'), sel('data-mu-profile', profiles, (v) => { R.mull.profile = v; }))),
      row('byface', lab(t('row.make'), sel('data-bf-make', [['curtain', t('system')], ['wall', A.t('model.wall')]], (v) => { R.face.make = v; })), ...gridOpts('bf')));
  }

  // ---- the schedule ----
  function schedule() {
    const snap = A.S.data, U = A.units();
    if (!snap || !R.list.length) return null;
    const levelName = (id) => snap.levels.find((l) => l.id === id)?.name || '';
    const H = (s) => (unitMark(U) ? s + ' (' + unitMark(U) + ')' : s);
    const rows = [], nums = [], ids = [];
    R.list.forEach((c, i) => {
      const tt = c.totals;
      rows.push([String(i + 1), levelName(c.storey), t(c.source === 'face' ? 'sch.face' : 'sch.line'), L(tt.uMax - tt.uMin), L(tt.vMax - tt.vMin), String(tt.panels), fmtArea(tt.area, U), fmtArea(tt.net, U), String(tt.mullions), L(tt.mullionLength)]);
      nums.push([tt.uMax - tt.uMin, tt.vMax - tt.vMin, tt.panels, tt.area, tt.net, tt.mullions, tt.mullionLength]);
      ids.push(c.id);
    });
    const sum = (k) => R.list.reduce((s, c) => s + c.totals[k], 0);
    return { title: t('sch.title'), head: [t('sch.no'), A.t('model.level'), t('sch.made'), H(t('sch.length')), H(t('sch.height')), t('sch.panes'), t('sch.gross'), t('sch.glass'), t('sch.pieces'), H(t('sch.mlen'))], rows, nums, ids,
      total: [A.t('model.sch.count', { n: R.list.length }), '', '', '', '', String(sum('panels')), fmtArea(sum('area'), U), fmtArea(sum('net'), U), String(sum('mullions')), L(sum('mullionLength'))], note: t('sch.note') };
  }

  A = modelUi.extend({
    tools: TOOLS,
    hint: (name) => 'curtain.hint.' + ({ curtain: 'draw', curtaingrid: 'grid.add', mullion: 'mullion', byface: 'byface' })[name],
    typed: () => false,
    classes: /^Ifc(CurtainWall|Plate|Member)$/,
    move(p, e) { if (mine()) R.hover = A.S.tool === 'curtain' ? at(p, e) : p; },
    click(p, e) {
      const k = A.S.tool;
      if (k === 'curtain') {
        const q = at(p, e);
        if (!R.start) { R.start = q; hintNow(); return; }
        const s = R.start; R.start = null; hintNow();
        if (Math.hypot(q[0] - s[0], q[1] - s[1]) < 1) return;
        const spec = specFor(s, q);
        if (!spec || !(heightNow() > 0)) { say(A.t('model.err.cw.outline'), true); return; }
        A.commit(placeCurtain(spec), { label: t('system'), verb: A.t('model.verb.drew') });
      } else if (k === 'curtaingrid') gridClick(p);
      else if (k === 'mullion') mullionClick(p);
      else if (k === 'byface') { modelUi.ensure3d?.(); say(t('hint.byface')); }
    },
    escape() { if (mine() && (R.start || R.grab)) { R.start = null; R.grab = null; hintNow(); return true; } return false; },
    toolChanged(name) {
      R.start = null; R.hover = null; R.grab = null;
      wire3d();
      if (!TOOLS.includes(name)) return;
      const m = A.root.querySelector('[data-res-tools]'); if (m?.open) m.open = false;
      syncRows(); hintNow();
      if (name === 'byface') { modelUi.ensure3d?.(); say(t('hint.byface')); }
    },
    refresh() {
      read(); makeRows(); syncRows(); wire3d();
      const sel = A.root.querySelector('[data-msched-kind]'), has = sel?.querySelector('option[value="curtain"]');
      if (sel && R.list.length && !has) sel.append(el('option', { value: 'curtain', 'data-curtain': '' }, t('sch.title')));
    },
    ownKeys(set, k) { for (const c of R.list) { set.add(k + c.id); for (const p of c.parts) set.add(k + p); } },
    scene,
    overlay(o) {
      if (!mine() || !R.hover) return;
      const k = A.S.tool;
      if (k === 'curtain') {
        o.snap = { p: R.hover, kind: 'free' };
        if (!R.start) return;
        const spec = specFor(R.start, R.hover);
        o.lines.push([R.start[0], R.start[1], R.hover[0], R.hover[1]]);
        if (spec) { const Ly = layoutCurtain({ ...spec, linesU: undefined, linesV: undefined, ...gridOf(spec) }); for (const l of Ly.linesU) { const q = planOfMm(P.fromPlane(spec.frame, l.at, 0)); o.points.push([q[0], q[1]]); } o.hud = { p: R.hover, text: L(Math.hypot(R.hover[0] - R.start[0], R.hover[1] - R.start[1])) + '\n' + t('hud.panes', { n: Ly.totals.panels }) }; }
        return;
      }
      if (k === 'curtaingrid' || k === 'mullion') {
        const hit = systemAt(R.hover); if (!hit) return;
        const f = footprint(hit.c);
        if (f.up) { for (const l of hit.c.linesU) { const q = f.pl(l.at, hit.c.totals.vMin); o.points.push(q); } if (hit.u !== null) o.snap = { p: f.pl(Math.max(hit.c.totals.uMin, Math.min(hit.c.totals.uMax, hit.u)), hit.c.totals.vMin), kind: 'free' }; }
        o.walls.push(f.poly);
      }
    },
    pick(key) {
      const k = A.kb(), c = R.list.find((x) => k + x.id === key || x.parts.some((p) => k + p === key));
      return c ? { kind: 'curtain', guid: c.guid, label: t('system') } : null;
    },
    props(items, kit) {
      if (items.length !== 1 || items[0].kind !== 'curtain') return null;
      const c = R.list.find((x) => x.guid === items[0].guid); if (!c) return null;
      const one = kit.one(t('system')), tt = c.totals;
      const grid = (g) => A.commit(gridChange(c.guid, g), one), mull = (m) => A.commit(mullionChange(c.guid, m), one);
      const ro = (label, text, attr) => kit.rows.push(el('dt', {}, label), el('dd', { [attr]: '' }, text));
      ro(t('prop.size'), L(tt.uMax - tt.uMin) + ' x ' + L(tt.vMax - tt.vMin) + (c.source === 'face' ? ' (' + t('sch.face') + ')' : ''), 'data-mp-cwsize');
      if (c.source === 'line') kit.field(t('row.height'), kit.lenInput(tt.vMax - tt.vMin, 'data-mp-cwheight', (mm) => A.commit(changeCurtain(c.guid, { outline: [[0, 0], [tt.uMax, 0], [tt.uMax, mm], [0, mm]] }), one)));
      for (const dir of ['u', 'v']) {
        const lines = dir === 'u' ? c.linesU : c.linesV, lo = dir === 'u' ? tt.uMin : tt.vMin, sp = dir === 'u' ? c.spacingU : c.spacingV;
        kit.field(t('prop.every.' + dir), kit.lenInput(sp > 0 ? sp : NaN, 'data-mp-cwevery' + dir, (mm) => grid({ dir, spacing: mm }), { allowZero: true }));
        const box = el('div', { className: 'bc-cw-lines', ['data-mp-cwlines' + dir]: '' });
        lines.slice(0, 40).forEach((l, i) => {
          const chk = el('input', { type: 'checkbox', checked: !!l.m, title: t('prop.line.mullion'), 'aria-label': t('prop.line.mullion'), 'data-mp-cwlinem': dir + i });
          chk.addEventListener('change', () => mull({ dir, line: i, on: chk.checked }));
          const rm = el('button', { type: 'button', className: 'shell-x', title: t('prop.line.remove'), 'aria-label': t('prop.line.remove'), 'data-mp-cwlinex': dir + i }, el('i', { className: 'bi bi-x', 'aria-hidden': 'true' }));
          rm.addEventListener('click', () => grid({ dir, remove: i }));
          box.append(el('div', { className: 'bc-cw-line' }, kit.lenInput(l.at - lo, 'data-mp-cwline', (mm) => grid({ dir, move: [i, lo + mm] }), { any: true }), ' ', chk, ' ', rm));
        });
        if (lines.length > 40) box.append(el('p', { className: 'bc-muted' }, t('prop.more', { n: lines.length - 40 })));
        const add = kit.lenInput(NaN, 'data-mp-cwadd' + dir, (mm) => grid({ dir, add: lo + mm }), { any: true });
        add.placeholder = t('prop.add.ph');
        box.append(el('div', { className: 'bc-cw-line' }, add));
        kit.field(t('prop.lines.' + dir, { n: lines.length }), box);
      }
      const bd = el('input', { type: 'checkbox', checked: !!c.border, 'data-mp-cwborder': '' });
      bd.addEventListener('change', () => mull({ dir: 'border', on: bd.checked }));
      kit.field(t('prop.border'), bd);
      const key = MULLION_PROFILES.find((p) => p.width === c.mullion.width && p.depth === c.mullion.depth)?.key || '';
      kit.field(t('row.profile'), kit.select([...(key ? [] : [['', t('profile.name', { w: Math.round(c.mullion.width), d: Math.round(c.mullion.depth) })]]), ...MULLION_PROFILES.map((p) => [p.key, t('profile.name', { w: p.width, d: p.depth })])], key, 'data-mp-cwprofile', (v) => { const p = profile(v); if (v) mull({ width: p.width, depth: p.depth }); }));
      kit.field(t('prop.mwidth'), kit.lenInput(c.mullion.width, 'data-mp-cwmw', (mm) => mull({ width: mm })));
      kit.field(t('prop.mdepth'), kit.lenInput(c.mullion.depth, 'data-mp-cwmd', (mm) => mull({ depth: mm })));
      kit.field(t('prop.thickness'), kit.lenInput(c.panel.thickness, 'data-mp-cwthick', (mm) => A.commit(changeCurtain(c.guid, { panel: { thickness: mm } }), one)));
      ro(t('sch.panes'), String(tt.panels), 'data-mp-cwpanes');
      ro(t('sch.glass'), fmtArea(tt.net, A.units()) + ' / ' + fmtArea(tt.area, A.units()), 'data-mp-cwglass');
      ro(t('sch.mlen'), L(tt.mullionLength) + ' (' + tt.mullions + ')', 'data-mp-cwmlen');
      return { title: t('system') };
    },
    remove(items) { return removeCurtains(items.filter((x) => x.kind === 'curtain').map((x) => x.guid)); },
    schedules() { const s = schedule(); return s ? { curtain: s } : {}; },
    scheduleKeys(kind, i) { if (kind !== 'curtain') return []; const c = R.list[i], k = A.kb(); return c ? [k + c.id, ...c.parts.map((p) => k + p)] : []; },
    /** For Set Work Plane: the upright systems of this plan as lines a click can take a plane from. */
    curtainTraces() { return here().map((c) => ({ c, f: footprint(c) })).filter((x) => x.f.up).map((x) => ({ a: x.f.a, b: x.f.b, label: t('system'), ref: x.c.guid })); },
  });
  /** The grid a spec would get (its spacings as lines), for the preview. */
  function gridOf(spec) {
    const us = spec.outline.map((q) => q[0]), vs = spec.outline.map((q) => q[1]), out = { linesU: [], linesV: [] };
    if (spec.spacingU > 1) for (let u = Math.min(...us) + spec.spacingU; u < Math.max(...us) - 1; u += spec.spacingU) out.linesU.push({ at: u, m: spec.mullions });
    if (spec.spacingV > 1) for (let v = Math.min(...vs) + spec.spacingV; v < Math.max(...vs) - 1; v += spec.spacingV) out.linesV.push({ at: v, m: spec.mullions });
    return out;
  }
  for (const name of TOOLS) { const b = A.root.querySelector(`[data-mtool="${name}"]`); if (b) { b.title = t('tool.' + name + '.title'); b.querySelector('span').textContent = t('tool.' + name); } }
  const icons = () => { const set = globalThis.ccIconSet; if (!set?.node) return; for (const name of TOOLS) { const i = A.root.querySelector(`[data-mtool="${name}"] [data-ccic]`); const n = i && set.node(i.dataset.ccic); if (n) { n.dataset.ccic = i.dataset.ccic; i.replaceWith(n); } } };
  icons(); globalThis.addEventListener?.('cc-icon-set', icons);
  if (typeof window !== 'undefined') window.bimcraftCurtain = { state: R, api: { read, systemAt, footprint, faceClick, schedule, list: () => R.list } };
  return { state: R };
}
