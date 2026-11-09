/* SPDX-License-Identifier: Apache-2.0 */
/**
 * wall-tools-ui.js — the wall tool on BimCraft's plan (0.9 WT.2 Draw, WT.3 Set and Modify, WT.4 Cut, WT.7 grid locks; FX.67; session
 * walls-09), through model-ui.js extend(). The recipes are lib/walls (dev/walls/, a byte copy) and the ops wall-tools.js; this file is the
 * clicks, the previews, the options and the Properties rows. Every change is one undo step and ends in the join solver.
 *
 *   Wall › Shape (the Wall row's list): Rectangle (two corners) · Rotated rectangle (a side, then the width) · Polygon (centre, a corner or a
 *     side's middle; sides, inscribed / circumscribed) · Arc by centre (centre, start, end; which way) · Tangent arc (a wall's end, then the
 *     arc's end) · Pick lines (a drafting line, a trace reference line or a grid line; Tab takes the whole chain) · Trace outline (a click
 *     inside an area closed by those lines). Typed points work for every click (x,y · @dx,dy · @len<angle · a length along the pointer).
 *   The Wall row also holds the Set options: Offset (placement offset: the wall drawn that far to the left (+) or right (−) of the line
 *     clicked) and Join (on / off: off draws free-standing walls, Disallow join at each end).
 *   Edit › Walls: Split (click a wall: at the point, or where a crossing wall meets it; Gap; Free ends = decision D2's other answer, the
 *     default from Settings) · Delete segment (two clicks on a wall) · Rejoin (two parts of one wall) · Offset (a wall, then the pointer's
 *     side or a typed distance; Copy makes a parallel copy instead) · Box stretch (two corners, then from and to: every end inside moves) ·
 *     Align and lock (a reference wall face or grid line, then the wall to line up with it; Lock keeps it lined up).
 *   Properties of one wall: its locks (to a wall, to a grid line, an end to a grid line) with Unlock, and Lock to grid line.
 *   Settings › BimCraft › Walls: When a wall is split (joined | free ends) and Measure from (centre line | inside | outside: what the
 *     Length field and the plan's wall dimensions read; the model bar's list next to Dimensions is the same setting).
 * Test hook: window.bimcraftWallTools = { state, opts }.
 */
import { drawPath, splitWall, deleteWallSegment, rejoinWalls, addHold, removeHolds, readHolds, lineOfWall } from './wall-tools.js';
import { rectangle, rotatedRectangle, polygon, arcByCentre, tangentArc, endTangent, chainFrom, lineAt, outlineAround, offsetPath, segsOf } from './walls/draw.js';
import { station, crossingAt, canRejoin } from './walls/cut.js';
import { boxStretch, offsetDistance } from './walls/modify.js';
import { changeWallsBy } from './model-ops.js';
import { moveElements } from './model-modify.js';
import { squareMove, MEASURE_FROM } from './wall-square.js';
import { readDrafting } from './drafting.js';
import { wallOutlines, typeThickness } from './model-walls.js';
import { readGrids, toPlan } from './model-grids.js';
import { fmtLen, parseLen, parseTyped } from './model-units.js';
import { ModelWriter } from './model-write.js';
import { el } from './ui-util.js';

const STORE = 'bimcraft.walls';
const SHAPES = { rect: 'wrect', rectrot: 'wrectrot', poly: 'wpoly', arcc: 'warcc', tan: 'wtan', pick: 'wpick', trace: 'wtrace' };
const DRAW = Object.values(SHAPES), EDIT = ['wsplit', 'wdelseg', 'wrejoin', 'woffset', 'wbox', 'walign'];
const ICON = { wrect: 'wallrect', wrectrot: 'wallrectrot', wpoly: 'wallpoly', warcc: 'wallarcc', wtan: 'walltan', wpick: 'wallpick', wtrace: 'walltrace', wsplit: 'wallsplit', wdelseg: 'walldelseg', wrejoin: 'walljoin', woffset: 'walloffset', wbox: 'wallbox', walign: 'wallalignlock' };
const dist = (p, q) => Math.hypot(p[0] - q[0], p[1] - q[1]);
const readStore = () => { try { const v = JSON.parse(localStorage.getItem(STORE) || '{}'); return v && typeof v === 'object' ? v : {}; } catch (e) { return {}; } };
const writeStore = (v) => { try { localStorage.setItem(STORE, JSON.stringify(v)); } catch (e) { /* this tab keeps it */ } };

export function mountWallTools(modelUi) {
  let A = null;
  const set = readStore();
  const O = { sides: 6, fit: 'inscribed', dir: 'short', gap: 0, free: set.split === 'free', copy: false, lock: false, offset: 0, join: true };
  const R = { pts: [], at: null, lines: null, chain: null, wall: null, ref: null, hover: null };
  const t = (k, v) => A.t(k, v);
  const tool = () => A.S.tool;
  const mine = () => DRAW.includes(tool()) || EDIT.includes(tool());
  const units = () => A.units();
  const L = (mm) => fmtLen(mm, units());
  const status = (k, v, err = false) => A.host.status(t(k, v), err);
  const reset = () => { R.pts = []; R.chain = null; R.wall = null; R.ref = null; R.lines = null; };
  const fail = (e) => { const k = e?.key && A.t(e.key) !== e.key ? e.key : null; A.host.status(k ? t(k) : String(e?.message || e), true); };

  // ---- the wall under a point (its centre line within its thickness + 8 px), nearest first ----
  function wallAt(p, pad = 8) {
    const tol = A.pv().pxToMm(pad);
    let best = null;
    for (const w of A.wallsHere()) {
      const q = station(w, p), Lw = w.bulge ? null : dist(w.a, w.b);
      if (Lw !== null && (q.s < -tol || q.s > Lw + tol)) continue;
      const sc = Math.max(0, Math.abs(q.off) - w.t / 2);
      if (sc <= tol && (!best || sc < best.sc)) best = { sc, w };
    }
    return best?.w || null;
  }
  // ---- the lines Pick lines and Trace outline use: this view's drafting lines, the trace reference, the grid lines ----
  function pickLines() {
    if (R.lines) return R.lines;
    const out = [];
    try {
      const ed = A.ed(), w = new ModelWriter(ed.W, ed.api, ed.mid), lv = A.level();
      for (const d of readDrafting(w)) {
        if (d.kind !== 'lines' || !lv || !(d.view === 'plan:' + lv.guid || d.storey === lv.id)) continue;
        const P = d.closed ? [...d.pts, d.pts[0]] : d.pts;
        for (let i = 1; i < P.length; i++) out.push({ a: P[i - 1], b: P[i], src: 'drafting' });
      }
    } catch (e) { /* no drafting */ }
    const ref = globalThis.bimcraftTraceRef?.state;
    for (const s of ref?.segs || ref?.placed || []) if (Array.isArray(s) && s.length >= 4) out.push({ a: [s[0], s[1]], b: [s[2], s[3]], src: 'trace' });
    const ctx = A.snapCtx?.() || {};
    for (const l of ctx.lines || []) out.push({ a: l.a, b: l.b, src: 'grid' });
    R.lines = out;
    return out;
  }
  // ---- the Wall row's options (type, reference, outside, top) as the core Wall tool reads them ----
  function wallSpec() {
    const S = A.S, type = A.projectWallType(S.wall.typeKey);
    const top = A.drawTop(A.levelAbove());
    return { storey: A.level().guid, typeKey: S.wall.typeKey, reference: S.wall.reference, side: S.wall.side, joinOff: !O.join, t: type ? typeThickness(type) : 150, ...top };
  }
  const withOffset = (path) => (O.offset ? offsetPath(path, O.offset) : path);
  function drawIt(path, label) {
    const spec = wallSpec(), p = withOffset(path);
    A.commit(drawPath({ ...spec, path: p }), { label: t(label), verb: t('model.verb.drew'), preview: segsOf(p).map((s) => ({ ...s, t: spec.t })) });
    reset(); hintNow();
  }
  /** What the clicks so far make with the pointer at p: a path, or null (with the error key). */
  function pathNow(p) {
    const P = R.pts, ty = tool();
    try {
      if (ty === 'wrect' && P.length === 1) return { path: rectangle(P[0], p) };
      if (ty === 'wrectrot' && P.length === 1) return { path: { points: [P[0], p], bulges: [0], closed: false } };
      if (ty === 'wrectrot' && P.length === 2) return { path: rotatedRectangle(P[0], P[1], p) };
      if (ty === 'wpoly' && P.length === 1) return { path: polygon(P[0], p, O.sides, { fit: O.fit }) };
      if (ty === 'warcc' && P.length === 1) return { path: { points: [P[0], p], bulges: [0], closed: false }, guide: true };
      if (ty === 'warcc' && P.length === 2) return { path: arcByCentre(P[0], P[1], p, { ccw: O.dir === 'ccw' ? true : O.dir === 'cw' ? false : null }) };
      if (ty === 'wtan' && R.from) return { path: tangentArc(R.from.p, R.from.dir, p) };
    } catch (e) { return { error: e.key || 'walls.err.small' }; }
    return null;
  }
  function hintNow() {
    const ty = tool(), n = R.pts.length;
    const key = ty === 'wrect' ? (n ? 'walls.hint.rect2' : 'walls.hint.rect') : ty === 'wrectrot' ? ['walls.hint.rot', 'walls.hint.rot2', 'walls.hint.rot3'][n] : ty === 'wpoly' ? (n ? 'walls.hint.poly2' : 'walls.hint.poly')
      : ty === 'warcc' ? ['walls.hint.arcc', 'walls.hint.arcc2', 'walls.hint.arcc3'][n] : ty === 'wtan' ? (R.from ? 'walls.hint.tan2' : 'walls.hint.tan') : ty === 'wpick' ? (R.chain ? 'walls.hint.pick2' : 'walls.hint.pick')
      : ty === 'wtrace' ? 'walls.hint.trace' : ty === 'wsplit' ? 'walls.hint.split' : ty === 'wdelseg' ? (R.wall ? 'walls.hint.delseg2' : 'walls.hint.delseg') : ty === 'wrejoin' ? (R.wall ? 'walls.hint.rejoin2' : 'walls.hint.rejoin')
      : ty === 'woffset' ? (R.wall ? 'walls.hint.offset2' : 'walls.hint.offset') : ty === 'wbox' ? ['walls.hint.box', 'walls.hint.box2', 'walls.hint.box3', 'walls.hint.box4'][n] : ty === 'walign' ? (R.ref ? 'walls.hint.align2' : 'walls.hint.align') : null;
    const h = A.root.querySelector('[data-model-hint]');
    if (h && key) h.textContent = t(key);
  }
  /** The end of a drawn wall near p, and the way a tangent arc leaves it. */
  function endAt(p) {
    const tol = A.pv().pxToMm(14);
    let best = null;
    for (const w of A.wallsHere()) for (const end of ['a', 'b']) {
      const d = dist(w[end], p);
      if (d <= tol && (!best || d < best.d)) best = { d, p: w[end], dir: end === 'b' ? endTangent(w) : endTangent({ a: w.b, b: w.a, bulge: -(w.bulge || 0) }) };
    }
    return best;
  }
  /** A reference line under p for Align and lock: a wall's nearer face or its centre line, or a grid line. */
  function refAt(p) {
    const w = wallAt(p, 10);
    if (w && !w.bulge) {
      const q = station(w, p), ref = Math.abs(q.off) < w.t / 6 ? 'center' : q.off > 0 ? 'left' : 'right';
      return { wall: w, ref, line: lineOfWall(w, ref) };
    }
    const tol = A.pv().pxToMm(10), lines = (A.snapCtx?.() || {}).lines || [];
    const i = lineAt(lines, p, tol);
    if (i === null) return null;
    const g = gridAxes().find((x) => Math.abs(dist(x.a, lines[i].a)) < 1 && Math.abs(dist(x.b, lines[i].b)) < 1);
    return g ? { grid: g.tag, line: { p: g.a, u: [g.b[0] - g.a[0], g.b[1] - g.a[1]] } } : null;
  }
  function gridAxes() {
    try { const ed = A.ed(), w = new ModelWriter(ed.W, ed.api, ed.mid); return toPlan(w, A.S.level, readGrids(w)).flatMap((g) => g.axes); } catch (e) { return []; }
  }
  const unitV = (v) => { const l = Math.hypot(v[0], v[1]) || 1; return [v[0] / l, v[1] / l]; };
  const sdist = (p, line) => { const u = unitV(line.u); return (p[0] - line.p[0]) * -u[1] + (p[1] - line.p[1]) * u[0]; };

  function click(p, e) {
    const ty = tool();
    if (DRAW.includes(ty)) {
      if (ty === 'wpick') {
        const lines = pickLines(), i = lineAt(lines, p, A.pv().pxToMm(10));
        if (i === null) { status('walls.err.noline', null, true); return; }
        const ch = chainFrom(lines, i);
        R.chain = { one: { points: [lines[i].a, lines[i].b], bulges: [0], closed: false }, all: ch };
        drawIt(e?.shiftKey || R.tab ? ch : R.chain.one, 'walls.shape.pick');
        R.tab = false; return;
      }
      if (ty === 'wtrace') {
        try { drawIt(outlineAround([...pickLines(), ...A.wallsHere().map((w) => ({ a: w.a, b: w.b }))], p), 'walls.shape.trace'); } catch (er) { fail(er); }
        return;
      }
      if (ty === 'wtan' && !R.from) { const en = endAt(p); if (!en) { status('walls.err.noend', null, true); return; } R.from = en; hintNow(); return; }
      const now = R.pts.length || R.from ? pathNow(p) : null;
      const done = (ty === 'wrect' || ty === 'wpoly') ? R.pts.length === 1 : (ty === 'wrectrot' || ty === 'warcc') ? R.pts.length === 2 : ty === 'wtan';
      if (done) {
        if (!now || now.error) { status(now?.error || 'walls.err.small', null, true); return; }
        drawIt(now.path, 'walls.shape.' + Object.keys(SHAPES).find((k) => SHAPES[k] === ty));
        R.from = null; return;
      }
      R.pts.push(p); hintNow(); return;
    }
    if (ty === 'wsplit') {
      const w = wallAt(p);
      if (!w) { status('model.err.trim.nowall', null, true); return; }
      // a crossing wall near the click: split where it meets
      let s = station(w, p).s;
      for (const o of A.wallsHere()) { if (o.guid === w.guid) continue; const c = crossingAt(w, o); if (c !== null && Math.abs(c - s) <= A.pv().pxToMm(12)) { s = c; break; } }
      A.commit(splitWall(w.guid, { s, gap: O.gap, free: O.free }), { label: t(O.gap > 0 ? 'walls.tool.splitgap' : 'walls.tool.split'), verb: t('walls.verb.split'), select: [] });
      return;
    }
    if (ty === 'wdelseg') {
      const w = R.wall || wallAt(p);
      if (!w) { status('model.err.trim.nowall', null, true); return; }
      if (!R.wall) { R.wall = w; R.pts = [station(w, p).s]; hintNow(); return; }
      A.commit(deleteWallSegment(w.guid, R.pts[0], station(w, p).s), { label: t('walls.tool.delseg'), verb: t('model.verb.deleted'), select: [] });
      reset(); hintNow(); return;
    }
    if (ty === 'wrejoin') {
      const w = wallAt(p);
      if (!w) { status('model.err.trim.nowall', null, true); return; }
      if (!R.wall) { R.wall = w; hintNow(); return; }
      if (!canRejoin(R.wall, w)) { status('walls.err.rejoin', null, true); return; }
      A.commit(rejoinWalls(R.wall.guid, w.guid), { label: t('walls.tool.rejoin'), verb: t('model.verb.joined'), select: [] });
      reset(); hintNow(); return;
    }
    if (ty === 'woffset') {
      if (!R.wall) { const w = wallAt(p); if (!w || w.bulge) { status('model.err.trim.nowall', null, true); return; } R.wall = w; hintNow(); return; }
      offsetGo(offsetDistance(R.wall, p, R.typed ?? null));
      return;
    }
    if (ty === 'wbox') {
      R.pts.push(p);
      if (R.pts.length === 4) boxGo([R.pts[3][0] - R.pts[2][0], R.pts[3][1] - R.pts[2][1]]);
      else hintNow();
      return;
    }
    if (ty === 'walign') {
      if (!R.ref) { const r = refAt(p); if (!r) { status('walls.err.noref', null, true); return; } R.ref = r; hintNow(); return; }
      const w = wallAt(p, 10);
      if (!w || w.bulge || (R.ref.wall && R.ref.wall.guid === w.guid)) { status('model.err.trim.nowall', null, true); return; }
      alignGo(w, p);
    }
  }
  function offsetGo(d) {
    const w = R.wall;
    if (!Number.isFinite(d) || Math.abs(d) < 1) { status('model.err.length', null, true); return; }
    if (O.copy) {
      const n = [-(w.b[1] - w.a[1]) / dist(w.a, w.b), (w.b[0] - w.a[0]) / dist(w.a, w.b)];
      A.commit(moveElements([{ guid: w.guid, dx: n[0] * d, dy: n[1] * d }], { copy: true }), { label: t('walls.tool.offset'), verb: t('model.verb.drew'), select: [] });
    } else A.commit(changeWallsBy(w.guid, (walls) => squareMove(walls, w.guid, d)), { label: t('walls.tool.offset'), verb: t('model.verb.moved'), select: [] });
    reset(); R.typed = null; hintNow();
  }
  function boxGo(d) {
    const [p, q] = R.pts, box = { minX: Math.min(p[0], q[0]), minY: Math.min(p[1], q[1]), maxX: Math.max(p[0], q[0]), maxY: Math.max(p[1], q[1]) };
    let plan;
    try { plan = boxStretch(A.wallsHere(), box, d); } catch (e) { fail(e); reset(); hintNow(); return; }
    if (!plan.size) { status('walls.err.boxempty', null, true); reset(); hintNow(); return; }
    const first = [...plan.keys()][0], fixed = new Map(plan);
    A.commit(changeWallsBy(first, () => fixed), { label: t('walls.tool.box'), verb: t('model.verb.moved'), select: [] });
    reset(); hintNow();
  }
  function alignGo(w, p) {
    const q = station(w, p), ref = Math.abs(q.off) < w.t / 6 ? 'center' : q.off > 0 ? 'left' : 'right';
    const mineLine = lineOfWall(w, ref), target = R.ref.line;
    const u = unitV(mineLine.u), tu = unitV(target.u);
    if (Math.abs(u[0] * tu[1] - u[1] * tu[0]) > Math.sin(0.5 * Math.PI / 180)) { status('walls.err.notparallel', null, true); return; }
    const gap = sdist(mineLine.p, { p: target.p, u: tu }), k = (-u[1]) * (-tu[1]) + u[0] * tu[0];   // its left normal against the target's
    const d = -gap / k, holdSpec = { kind: 'line', wall: w.guid, ref, to: R.ref.grid !== undefined ? { grid: R.ref.grid } : { wall: R.ref.wall.guid, ref: R.ref.ref }, off: 0 };
    const lock = O.lock;
    const move = Math.abs(d) > 0.01 ? changeWallsBy(w.guid, (walls) => squareMove(walls, w.guid, d)) : null;
    const hold = lock ? addHold(holdSpec) : null;
    const run = (editor) => { let r = move ? move(editor) : null; if (hold) { const r2 = hold(editor); r = r ? { ...r2, journal: A.mergeJournals(r.journal, r2.journal) } : r2; } return r || { id: null, ids: [] }; };
    if (!move && !hold) { status('walls.aligned.already'); reset(); hintNow(); return; }
    A.commit(run, { label: t('walls.tool.align'), verb: t(lock ? 'walls.verb.locked' : 'walls.verb.aligned'), select: [] });
    reset(); hintNow();
  }
  function typed(name, text) {
    if (text === undefined) return true;
    if (name === 'woffset' && R.wall) { const mm = parseLen(text, units()); if (!Number.isFinite(mm)) { status('model.err.length', null, true); return false; } offsetGo(offsetDistance(R.wall, R.at || R.wall.a, mm)); return true; }
    if (name === 'wsplit' && wallAt(R.at || [0, 0])) { const w = wallAt(R.at), mm = parseLen(text, units()); if (!Number.isFinite(mm)) return false; A.commit(splitWall(w.guid, { s: mm, gap: O.gap, free: O.free }), { label: t('walls.tool.split'), verb: t('walls.verb.split'), select: [] }); return true; }
    const v = parseTyped(text, units());
    if (!v) { status('model.err.typed', null, true); return false; }
    const last = R.pts[R.pts.length - 1] || R.from?.p || null;
    let q = null;
    if (v.kind === 'abs') q = [v.x, v.y];
    else if (!last) { status('model.typed.first', null, true); return false; }
    else if (v.kind === 'rel') q = [last[0] + v.dx, last[1] + v.dy];
    else if (v.kind === 'polar') q = [last[0] + v.len * Math.cos(v.angle * Math.PI / 180), last[1] + v.len * Math.sin(v.angle * Math.PI / 180)];
    else { const to = R.at || [last[0] + 1, last[1]], d = dist(to, last) || 1; q = [last[0] + (to[0] - last[0]) / d * v.len, last[1] + (to[1] - last[1]) / d * v.len]; }
    click(q, {});
    return true;
  }
  function overlay(o) {
    if (!mine()) return;
    const p = R.at;
    for (const q of R.pts) if (Array.isArray(q)) o.points.push(q);
    if (DRAW.includes(tool())) {
      if (tool() === 'wpick' && p) {
        const lines = pickLines(), i = lineAt(lines, p, A.pv().pxToMm(10));
        if (i !== null) { const ch = R.tab ? chainFrom(lines, i) : { points: [lines[i].a, lines[i].b], bulges: [0], closed: false }; for (const s of segsOf(ch)) o.lines.push([...s.a, ...s.b]); o.hud = { p, text: t(R.tab ? 'walls.hud.chain' : 'walls.hud.line') }; }
        return;
      }
      if (tool() === 'wtrace' && p) { try { const pa = outlineAround([...pickLines(), ...A.wallsHere().map((w) => ({ a: w.a, b: w.b }))], p); for (const s of segsOf(pa)) o.dashed.push([...s.a, ...s.b]); } catch (e) { o.hud = { p, text: t('walls.err.open') }; } return; }
      if (tool() === 'wtan' && R.from) o.points.push(R.from.p);
      if (!p) return;
      const now = pathNow(p);
      if (now?.error) { o.hud = { p, text: t(now.error) }; return; }
      if (!now) return;
      const spec = wallSpec(), path = withOffset(now.path);
      if (now.guide) { o.dashed.push([...path.points[0], ...path.points[1]]); o.hud = { p, text: 'R ' + L(dist(path.points[0], path.points[1])) }; return; }
      const segs = segsOf(path), polys = wallOutlines(segs.map((s, i) => ({ key: 'n' + i, a: s.a, b: s.b, bulge: s.bulge, t: spec.t })));
      for (const poly of polys.values()) o.walls.push(poly);
      if (segs.length) { const s0 = segs[0]; o.hud = { p, text: segs.length + ' x ' + L(dist(s0.a, s0.b)) }; }
      return;
    }
    if (tool() === 'wbox' && R.pts.length >= 1) {
      const q = R.pts[1] || p; if (!q) return;
      const [a, b] = [R.pts[0], q];
      o.dashed.push([a[0], a[1], b[0], a[1]], [b[0], a[1], b[0], b[1]], [b[0], b[1], a[0], b[1]], [a[0], b[1], a[0], a[1]]);
      if (R.pts.length === 3 && p) {
        const box = { minX: Math.min(a[0], b[0]), minY: Math.min(a[1], b[1]), maxX: Math.max(a[0], b[0]), maxY: Math.max(a[1], b[1]) };
        try { const plan = boxStretch(A.wallsHere(), box, [p[0] - R.pts[2][0], p[1] - R.pts[2][1]]); previewPlan(o, plan); o.dashed.push([...R.pts[2], ...p]); o.hud = { p, text: L(dist(R.pts[2], p)) }; } catch (e) { o.hud = { p, text: t(e.key || 'model.err.short') }; }
      }
      return;
    }
    if (tool() === 'woffset' && R.wall && p) {
      const d = offsetDistance(R.wall, p, R.typed ?? null);
      try { previewPlan(o, O.copy ? new Map() : squareMove(A.S.data.walls, R.wall.guid, d)); } catch (e) { o.hud = { p, text: t(e.key || 'model.err.short') }; return; }
      if (O.copy) { const n = [-(R.wall.b[1] - R.wall.a[1]) / dist(R.wall.a, R.wall.b), (R.wall.b[0] - R.wall.a[0]) / dist(R.wall.a, R.wall.b)]; o.dashed.push([R.wall.a[0] + n[0] * d, R.wall.a[1] + n[1] * d, R.wall.b[0] + n[0] * d, R.wall.b[1] + n[1] * d]); }
      o.hud = { p, text: L(Math.abs(d)) };
      return;
    }
    if (tool() === 'wsplit' && p) { const w = wallAt(p); if (w) { const g = station(w, p); const at = w.bulge ? p : [w.a[0] + (w.b[0] - w.a[0]) * g.s / dist(w.a, w.b), w.a[1] + (w.b[1] - w.a[1]) * g.s / dist(w.a, w.b)]; o.points.push(at); o.hud = { p, text: L(g.s) }; } return; }
    if (tool() === 'walign' && R.ref) { const l = R.ref.line, u = unitV(l.u); o.dashed.push([l.p[0] - u[0] * 20000, l.p[1] - u[1] * 20000, l.p[0] + u[0] * 20000, l.p[1] + u[1] * 20000]); }
    if ((tool() === 'wdelseg' || tool() === 'wrejoin') && R.wall) { const poly = A.S.outlines?.get(R.wall.guid); if (poly) o.dashed.push(...poly.map((q, i) => [...q, ...poly[(i + 1) % poly.length]])); }
  }
  function previewPlan(o, plan) {
    const walls = A.wallsHere().map((w) => ({ key: w.guid, a: plan.get(w.guid)?.a || w.a, b: plan.get(w.guid)?.b || w.b, t: w.t, bulge: w.bulge, off: w.joinOff }));
    const polys = wallOutlines(walls);
    for (const g of plan.keys()) if (polys.get(g)) o.walls.push(polys.get(g));
  }
  /** Padlocks on the plan where walls are locked (the Hold block), small, at each held wall's middle. */
  function padlocks(o) {
    const holds = R.holds || [];
    if (!holds.length || !A.pv()) return;
    const r = A.pv().pxToMm(5);
    for (const h of holds) {
      const w = A.wallsHere().find((x) => x.guid === h.wall);
      if (!w) continue;
      const m = h.kind === 'end' ? w[h.end] : [(w.a[0] + w.b[0]) / 2, (w.a[1] + w.b[1]) / 2], c = [m[0] + r * 2.2, m[1] + r * 2.2];
      o.symbols.push({ lines: [[c[0] - r, c[1] - r, c[0] + r, c[1] - r], [c[0] + r, c[1] - r, c[0] + r, c[1] + r * 0.4], [c[0] + r, c[1] + r * 0.4, c[0] - r, c[1] + r * 0.4], [c[0] - r, c[1] + r * 0.4, c[0] - r, c[1] - r]], arcs: [{ c: [c[0], c[1] + r * 0.4], r: r * 0.6, a0: 0, a1: Math.PI }] });
    }
  }

  // ---- Properties of one wall: its locks, and lock to a grid line ----
  function wallProps(w, k) {
    const holds = (R.holds || []).filter((h) => h.wall === w.guid || h.to?.wall === w.guid);
    const desc = (h) => h.kind === 'end' ? t('walls.hold.end', { end: t(h.end === 'a' ? 'walls.end.start' : 'walls.end.end'), grid: h.to.grid })
      : h.to.grid !== undefined ? t('walls.hold.grid', { grid: h.to.grid, off: L(h.off || 0) }) : t('walls.hold.wall', { off: L(Math.abs(h.off || 0)) });
    const list = el('ul', { className: 'bc-wall-holds', 'data-mp-holds': '' }, ...holds.map((h) => el('li', {}, el('span', {}, desc(h) + ' '), k.button(t('walls.unlock'), 'data-mp-unlock', () => A.commit(removeHolds([h.id]), k.one(k.title))))));
    if (holds.length) k.field(t('walls.holds'), list);
    if (w.bulge) return;
    // grid lines this wall lies along (parallel), and grid lines its ends sit on
    const axes = gridAxes(), u = unitV([w.b[0] - w.a[0], w.b[1] - w.a[1]]);
    const par = axes.filter((g) => { const gu = unitV([g.b[0] - g.a[0], g.b[1] - g.a[1]]); return Math.abs(u[0] * gu[1] - u[1] * gu[0]) < 0.009; });
    const onEnd = (end) => axes.filter((g) => { const gu = unitV([g.b[0] - g.a[0], g.b[1] - g.a[1]]); return Math.abs((w[end][0] - g.a[0]) * -gu[1] + (w[end][1] - g.a[1]) * gu[0]) <= 1; });
    const opts = [['', t('walls.lockgrid.pick')], ...par.map((g) => ['line:' + g.tag, t('walls.lockgrid.line', { grid: g.tag, off: L(Math.abs(sdist(w.a, { p: g.a, u: [g.b[0] - g.a[0], g.b[1] - g.a[1]] }))) })]),
      ...['a', 'b'].flatMap((end) => onEnd(end).map((g) => [end + ':' + g.tag, t('walls.lockgrid.end', { end: t(end === 'a' ? 'walls.end.start' : 'walls.end.end'), grid: g.tag })]))];
    if (opts.length > 1) k.field(t('walls.lockgrid'), k.select(opts, '', 'data-mp-lockgrid', (v) => {
      if (!v) return;
      const [what, tag] = [v.slice(0, v.indexOf(':')), v.slice(v.indexOf(':') + 1)];
      A.commit(addHold(what === 'line' ? { kind: 'line', wall: w.guid, ref: 'center', to: { grid: tag } } : { kind: 'end', wall: w.guid, end: what, to: { grid: tag } }), k.one(k.title));
    }));
  }

  A = modelUi.extend({
    tools: [...DRAW, ...EDIT],
    wallRow: (name) => DRAW.includes(name),   // the Draw recipes use the Wall row; the Edit tools have their own rows
    wallShape: (name) => Object.keys(SHAPES).find((k) => SHAPES[k] === name) || null,
    shapeTool: (v) => SHAPES[v] || null,
    hint: (name) => ({ wrect: 'walls.hint.rect', wrectrot: 'walls.hint.rot', wpoly: 'walls.hint.poly', warcc: 'walls.hint.arcc', wtan: 'walls.hint.tan', wpick: 'walls.hint.pick', wtrace: 'walls.hint.trace', wsplit: 'walls.hint.split', wdelseg: 'walls.hint.delseg', wrejoin: 'walls.hint.rejoin', woffset: 'walls.hint.offset', wbox: 'walls.hint.box', walign: 'walls.hint.align' })[name],
    typed,
    move(p) { R.at = p; },
    click,
    key(e) { if (tool() === 'wpick' && e.key === 'Tab') { e.preventDefault(); R.tab = !R.tab; A.drawOverlay(); return true; } return false; },
    escape() { if (!mine() || !(R.pts.length || R.wall || R.ref || R.from)) return false; reset(); R.from = null; hintNow(); return true; },
    toolChanged() { reset(); R.from = null; R.tab = false; R.typed = null; for (const m of A.root.querySelectorAll('[data-wall-tools], [data-wall-shapes]')) if (m.open) m.open = false; if (mine()) hintNow(); },
    refresh() { R.lines = null; try { const ed = A.ed(); R.holds = ed ? readHolds(new ModelWriter(ed.W, ed.api, ed.mid)) : []; } catch (e) { R.holds = []; } },
    overlay(o) { overlay(o); padlocks(o); },
    wallProps,
    drawSet: () => ({ offset: O.offset, joinOff: !O.join }),
    shiftPoints: (pts, d) => offsetPath({ points: pts, bulges: pts.map(() => 0), closed: false }, d).points,
  });

  // ---- the option rows ----
  const row = (name, ...kids) => el('div', { className: 'bc-modelbar-row', 'data-mopts': name, hidden: true }, ...kids);
  const num = (value, attr, label, onSet, { any = false } = {}) => {
    const i = el('input', { type: 'text', className: 'bc-input bc-num', size: 6, value: value ? L(value) : '0', [attr]: '', 'aria-label': label });
    i.addEventListener('change', () => { const mm = parseLen(i.value, units()); if (!Number.isFinite(mm) || (!any && mm < 0)) { status('model.err.length', null, true); i.value = L(0); return; } onSet(mm); });
    return el('label', { className: 'bc-mb-field' }, el('span', {}, label + ' '), i);
  };
  const check = (on, attr, label, onSet) => { const c = el('input', { type: 'checkbox', checked: on, [attr]: '' }); c.addEventListener('change', () => onSet(c.checked)); return el('label', { className: 'bc-mb-field' }, c, ' ' + label); };
  const pick = (opts, value, attr, label, onSet) => { const s = el('select', { className: 'bc-mb-select', [attr]: '', 'aria-label': label }, ...opts.map(([v, l]) => el('option', { value: v, selected: v === value }, l))); s.addEventListener('change', () => onSet(s.value)); return el('label', { className: 'bc-mb-field' }, el('span', {}, label + ' '), s); };
  const wallRow = A.root.querySelector('[data-mopts="wall"]');
  // the Set options in the Wall row: placement offset, join on / off
  wallRow?.append(num(0, 'data-wall-offset', t('walls.set.offset'), (mm) => { O.offset = mm; A.drawOverlay(); }, { any: true }),
    check(true, 'data-wall-join', t('walls.set.join'), (on) => { O.join = on; }));
  const polyRow = el('span', { 'data-wall-polyopts': '', hidden: true },
    num(0, 'data-wall-sides', t('walls.poly.sides'), () => {}), pick([['inscribed', t('walls.poly.inscribed')], ['circumscribed', t('walls.poly.circumscribed')]], O.fit, 'data-wall-fit', t('walls.poly.fit'), (v) => { O.fit = v; }));
  const sidesIn = polyRow.querySelector('[data-wall-sides]');
  sidesIn.value = String(O.sides);
  sidesIn.replaceWith(sidesIn.cloneNode(true));
  const sides2 = polyRow.querySelector('[data-wall-sides]');
  sides2.addEventListener('change', () => { const n = Math.round(Number(sides2.value)); if (n >= 3 && n <= 64) O.sides = n; else { status('walls.err.sides', null, true); sides2.value = String(O.sides); } });
  const arcRow = el('span', { 'data-wall-arcopts': '', hidden: true }, pick([['short', t('walls.arc.short')], ['ccw', t('walls.arc.ccw')], ['cw', t('walls.arc.cw')]], O.dir, 'data-wall-dir', t('walls.arc.dir'), (v) => { O.dir = v; }));
  wallRow?.append(polyRow, arcRow);
  const bar = wallRow?.parentElement;
  bar?.append(
    row('wsplit', num(0, 'data-wall-gap', t('walls.split.gap'), (mm) => { O.gap = mm; }), check(O.free, 'data-wall-free', t('walls.split.free'), (on) => { O.free = on; })),
    row('woffset', check(false, 'data-wall-copy', t('walls.offset.copy'), (on) => { O.copy = on; })),
    row('walign', check(false, 'data-wall-lock', t('walls.align.lock'), (on) => { O.lock = on; })),
  );
  // the polygon and arc options only with their tool
  const showOpts = () => { polyRow.hidden = tool() !== 'wpoly'; arcRow.hidden = tool() !== 'warcc'; };
  A.root.addEventListener('click', () => setTimeout(showOpts), true);
  A.root.querySelector('[data-model-wallshape]')?.addEventListener('change', () => setTimeout(showOpts));
  // the CadCraft icon set (DU.1) on the new buttons when it is loaded; the Bootstrap icon stays otherwise
  const icons = () => { const set = globalThis.ccIconSet; if (!set?.node) return; for (const i of A.root.querySelectorAll('[data-ccic]')) { const n = set.node(i.dataset.ccic); if (n) { n.dataset.ccic = i.dataset.ccic; i.replaceWith(n); } } };
  icons(); globalThis.addEventListener?.('cc-icon-set', icons);
  for (const menu of A.root.querySelectorAll('[data-wall-tools], [data-wall-shapes]')) for (const b of menu.querySelectorAll('[data-mtool]')) b.addEventListener('click', () => { menu.open = false; });

  // ---- Settings › BimCraft › Walls (decisions D2, D3) and the model bar's Measure from (one setting) ----
  const fromSel = A.root.querySelector('[data-model-from]');
  const applyFrom = (v, save = true) => {
    if (!MEASURE_FROM.includes(v)) return;
    A.S.wallFrom = v; if (fromSel) fromSel.value = v;
    for (const i of document.querySelectorAll('[name="bcWallFrom"]')) i.checked = i.value === v;
    if (save) { const s = readStore(); s.from = v; writeStore(s); }
    try { A.buildScene(); A.renderProps(); } catch (e) { /* the plan is not up yet */ }
  };
  applyFrom(MEASURE_FROM.includes(set.from) ? set.from : 'center', false);
  fromSel?.addEventListener('change', () => applyFrom(fromSel.value));
  const fs = document.querySelector('[data-walls-settings]');
  const syncSet = () => { const s = readStore(); for (const i of fs?.querySelectorAll('[name="bcWallSplit"]') || []) i.checked = i.value === (s.split === 'free' ? 'free' : 'joined'); for (const i of fs?.querySelectorAll('[name="bcWallFrom"]') || []) i.checked = i.value === A.S.wallFrom; };
  syncSet();
  fs?.addEventListener('change', (e) => {
    const x = e.target;
    if (x.name === 'bcWallSplit') { const s = readStore(); s.split = x.value === 'free' ? 'free' : 'joined'; writeStore(s); O.free = s.split === 'free'; const c = A.root.querySelector('[data-wall-free]'); if (c) c.checked = O.free; }
    if (x.name === 'bcWallFrom') applyFrom(x.value);
  });
  if (typeof window !== 'undefined') window.bimcraftWallTools = { state: R, opts: O, wallAt };   // for tests
  return { state: R, opts: O };
}
