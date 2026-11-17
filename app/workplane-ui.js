/* SPDX-License-Identifier: Apache-2.0 */
/**
 * workplane-ui.js — the work plane and what is drawn on it, in the page (session bk-tools-b-10), through model-ui.js `extend()`.
 * A thin adapter: the mathematics is workplane/plane.js, curve.js, glyphs.js (lib/workplane), the IFC is model-workplane.js.
 *
 * Build menu (made here, before extend() wires every [data-mtool]):
 *   Set Work Plane    [data-mtool="workplane"]  its row: the plane in force [data-wp-current], a level [data-wp-level], a named
 *                     reference plane [data-wp-ref]; or click a line in the plan (a wall, a grid line, a reference plane, a model
 *                     line, a curtain system: the upright plane through it) or a flat face in the 3D view
 *   Show Work Plane   [data-wp-show]  on / off (aria-pressed; remembered in this browser): the plane drawn in the 3D view, in the
 *                     plan, in the elevation and section panel
 *   Reference Plane   [data-mtool="refplane"]   two clicks in the plan: an upright named plane; its row: the name the next one
 *                     gets [data-wp-refname], its height [data-wp-refh]
 *   Work Plane Viewer [data-wp-viewer]  the panel [data-wpv-dialog]: the work plane seen square on, the model's cut by it, and the
 *                     drawing tools [data-wpv-tool=select|line|polyline|arc|text|refplane]; Delete [data-wpv-delete], Fit
 *                     [data-wpv-fit], Look at it in 3D [data-wpv-look]
 *   Model Line        [data-mtool="modelline"]  Line, Polyline or Arc [data-wp-linekind] on the work plane
 *   Model Text        [data-mtool="modeltext"]  the words [data-wp-text], capital height [data-wp-texth], depth [data-wp-textd]; a
 *                     click puts the left end of its baseline there
 * On a level (or sloping) work plane the three drawing tools work in the plan; on an upright one they open the viewer, where the
 * plane can be drawn on. Reference planes, model lines and model text are picked like anything else (Properties, Delete).
 * Test hook: window.bimcraftWorkPlane = { state, api: { plane(), setShow(on), openViewer(), section(), viewerClick([u, v]), … } }.
 */
import { el } from './ui-util.js';
import { PadDetector } from './wheel-pad.js';   // D7.56: a trackpad's two-finger swipe pans
import { ModelWriter } from './model-write.js';
import { fmtLen, parseLen, fmtArea } from './model-units.js';
import { inv4, mul4, apply4, val } from './ifc-util.js';
import { fromViewer, toViewer } from './ifc-place.js';
import * as P from './workplane/plane.js';
import { curvePoints, arcThrough, arcPoints } from './workplane/curve.js';
import { readOutlineFont, textPolygons } from './workplane/glyphs.js';
import { readWorkPlane, defaultWorkPlane, setWorkPlane, readRefPlanes, addRefPlane, changeRefPlane, removeRefPlanes, refCorners, readModelLines, linePoints3, addModelLine, removeModelLines,
  readModelTexts, addModelText, changeModelText, removeModelTexts, TEXT_DEFAULTS } from './model-workplane.js';

const FONT_URL = '/assets/vendor/liberation-sans/current/LiberationSans-Regular.ttf';   // the sheets' and PDFs' font (SIL OFL 1.1; its LICENSE is beside it)
const SHOW_KEY = 'bimcraft.workplane.show';
const TOOLS = ['workplane', 'refplane', 'modelline', 'modeltext'];
const ICON = { workplane: ['workplane', 'bi-grid-3x3'], refplane: ['refplane', 'bi-border-center'], modelline: ['modelline', 'bi-slash-lg'], modeltext: ['modeltext', 'bi-badge-3d'], showplane: ['showplane', 'bi-eye'], viewer: ['planeviewer', 'bi-aspect-ratio'] };
const CSS = `.bc-dialog.bc-wpv-dlg { width: min(72rem, calc(100vw - 2rem)); max-width: none; max-height: calc(100vh - 2rem); }
.bc-wpv-bar { display: flex; flex-wrap: wrap; gap: .35rem; align-items: center; margin-bottom: .4rem; }
.bc-wpv-bar [aria-pressed="true"] { background: var(--action); color: var(--sheet, #fff); border-color: var(--action); }
.bc-wpv-bar input[type="text"] { max-width: 12rem; }
.bc-wpv-stage { border: var(--pen-1, 1px) solid var(--line); background: var(--sheet, #fff); height: 58vh; position: relative; touch-action: none; }
.bc-wpv-stage:focus { outline: none; }
.bc-wpv-stage svg { width: 100%; height: 100%; display: block; cursor: crosshair; }
.bc-wpv-stage .wv-grid { stroke: var(--grid, #ddd); fill: none; vector-effect: non-scaling-stroke; stroke-width: 1; }
.bc-wpv-stage .wv-axis { stroke: var(--ink-2, #666); fill: none; vector-effect: non-scaling-stroke; stroke-width: 1; stroke-dasharray: 8 4; }
.bc-wpv-stage .wv-cut { stroke: var(--ink, #111); fill: none; vector-effect: non-scaling-stroke; stroke-width: 1.5; }
.bc-wpv-stage .wv-line { stroke: var(--ink, #111); fill: none; vector-effect: non-scaling-stroke; stroke-width: 2; }
.bc-wpv-stage .wv-ref { stroke: var(--layer-green, #2a7); fill: none; vector-effect: non-scaling-stroke; stroke-width: 1.5; stroke-dasharray: 10 5; }
.bc-wpv-stage .wv-text { fill: var(--ink, #111); fill-rule: evenodd; opacity: .8; }
.bc-wpv-stage .wv-ghost { stroke: var(--action); fill: none; vector-effect: non-scaling-stroke; stroke-width: 1.5; stroke-dasharray: 5 3; }
.bc-wpv-stage [aria-selected="true"] { stroke: var(--action); }
.bc-wpv-stage .wv-text[aria-selected="true"] { fill: var(--action); stroke: none; }
.bc-wpv-stage text { fill: var(--ink-2, #666); }`;
const NS = 'http://www.w3.org/2000/svg';
const S = (tag, attrs = {}) => { const n = document.createElementNS(NS, tag); for (const [k, v] of Object.entries(attrs)) if (v !== null && v !== undefined) n.setAttribute(k, String(v)); return n; };

export function mountWorkPlane(modelUi) {
  const R = {
    wp: null, stored: false, refs: [], lines: [], texts: [],
    show: (() => { try { return localStorage.getItem(SHOW_KEY) === '1'; } catch (e) { return false; } })(),
    pts: [], ptsPlan: [], hover: null, lineKind: 'line', refName: '', refH: 0,
    text: { text: '', height: TEXT_DEFAULTS.height, depth: TEXT_DEFAULTS.depth },
    font: null, fontWait: null,
    v: { open: false, tool: 'select', pts: [], hover: null, sel: null, vb: null, cut: null, cutFor: '' },
  };
  let A = null;
  const t = (k, f) => A.t('wp.' + k, f);
  const W = () => new ModelWriter(A.ed().W, A.ed().api, A.ed().mid);
  const L = (mm) => fmtLen(mm, A.units());
  const say = (text, bad) => A.host.status(text, !!bad);
  const hint = (key, f) => { const h = A.root.querySelector('[data-model-hint]'); if (h) h.textContent = t(key, f); };
  const mine = () => TOOLS.includes(A.S.tool);
  const R10 = (v) => Math.round(v);

  // ---- spaces: the plan of the level shown ↔ model mm ↔ the 3D view ----
  const Sm = () => A.storeyMatrix(A.S.level) || [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
  const mmOfPlan = (p, z = 0) => apply4(Sm(), p[0], p[1], z);
  const planOfMm = (q) => apply4(inv4(Sm()), q[0], q[1], q[2]);
  const viewer = () => A.host.viewer?.() || null;
  function space3d() {
    const v = viewer(), ed = A.ed();
    if (!v || !ed) return null;
    const C = ed.api.GetCoordinationMatrix(ed.mid);
    let MM = null;
    try { MM = v.modelMatrix?.(A.host.model()?.mi ?? 0) || null; } catch (e) { MM = null; }
    const Mi = MM ? inv4(MM) : null;
    return { C, mmOfViewer: (pt) => fromViewer(C, Mi ? apply4(Mi, pt[0], pt[1], pt[2]) : pt), viewerOfMm: (q) => { const lv = toViewer(C, q); return MM ? apply4(MM, lv[0], lv[1], lv[2]) : lv; } };
  }
  const frame = () => (R.wp || { frame: P.levelPlane(0) }).frame;
  const upright = () => P.isUpright(frame());
  /** A plan point of the level shown, laid on the work plane straight up or down → [u, v]; null on an upright plane. */
  function planToPlane(p) {
    const F = frame();
    if (Math.abs(F.n[2]) < 1e-3) return null;
    const m = mmOfPlan(p, 0), k = P.dot(P.sub(F.o, m), F.n) / F.n[2];
    const c = P.toPlane(F, [m[0], m[1], m[2] + k]);
    return [c[0], c[1]];
  }
  const planOfPlane = (F, uv) => { const q = planOfMm(P.fromPlane(F, uv[0], uv[1])); return [q[0], q[1]]; };
  const levelName = (guid) => A.S.data?.levels.find((l) => l.guid === guid)?.name || '';
  const planeLabel = () => { const w = R.wp; if (!w) return ''; return w.kind === 'level' ? t('kind.level', { name: levelName(w.ref) || w.label }) : w.kind === 'reference' ? t('kind.reference', { name: R.refs.find((r) => r.guid === w.ref)?.name || w.label }) : w.kind === 'line' ? t('kind.line', { name: w.label }) : t('kind.face', { name: w.label }); };

  function read() {
    if (!A.ed()) { R.wp = null; R.refs = []; R.lines = []; R.texts = []; return; }
    try {
      const w = W(), st = readWorkPlane(w);
      R.stored = !!st; R.wp = st || defaultWorkPlane(w);
      R.refs = readRefPlanes(w); R.lines = readModelLines(w); R.texts = readModelTexts(w);
    } catch (e) { console.error(e); R.wp = null; R.refs = []; R.lines = []; R.texts = []; }
  }

  // ---- the font (the sheets' own), fetched once ----
  function ensureFont() {
    if (R.font) return Promise.resolve(R.font);
    if (!R.fontWait) R.fontWait = fetch(FONT_URL).then((r) => { if (!r.ok) throw new Error('font ' + r.status); return r.arrayBuffer(); }).then((b) => (R.font = readOutlineFont(new Uint8Array(b)))).catch((e) => { R.fontWait = null; throw e; });
    return R.fontWait;
  }
  async function textAt(uv, F = frame()) {
    const s = String(R.text.text || '').trim();
    if (!s) { say(A.t('model.err.wp.text'), true); return; }
    let font;
    try { font = await ensureFont(); } catch (e) { say(t('font.failed'), true); return; }
    const tp = textPolygons(font, s, { height: R.text.height });
    if (tp.missing.length) say(t('font.missing', { chars: tp.missing.join(' ') }), true);
    A.commit(addModelText({ frame: F, at: uv, text: s, font: TEXT_DEFAULTS.font, height: R.text.height, depth: R.text.depth, polys: tp.polys, width: tp.width }), { label: t('text'), verb: A.t('model.verb.placed') });
  }
  async function retext(x, ch) {
    let font;
    try { font = await ensureFont(); } catch (e) { say(t('font.failed'), true); return; }
    const n = { ...x, ...ch }, tp = textPolygons(font, n.text, { height: n.height });
    if (tp.missing.length) say(t('font.missing', { chars: tp.missing.join(' ') }), true);
    A.commit(changeModelText(x.guid, { ...ch, polys: tp.polys, width: tp.width }), { label: t('text'), verb: A.t('model.verb.changed'), select: A.selectedKeys() });
  }

  // ---- Set Work Plane ----
  function setPlane(wp, quiet = false) {
    A.commit(setWorkPlane(wp), { label: t('plane'), verb: A.t('model.verb.changed') });
    if (!quiet) say(t('set', { name: planeLabel() }));
  }
  const setLevelPlane = (l) => setPlane({ kind: 'level', ref: l.guid, label: l.name || '', frame: P.levelPlane(apply4(A.storeyMatrix(l.id) || Sm(), 0, 0, 0)[2]) });
  const setRefPlane = (r) => setPlane({ kind: 'reference', ref: r.guid, label: r.name, frame: r.frame });
  /** The straight things of the plan a click can take a plane from: [{ a, b (plan), label, ref }]. */
  function planLines() {
    const out = [], k = A.kb();
    for (const w of A.wallsHere()) if (!w.bulge) out.push({ a: w.a, b: w.b, label: A.t('model.wall'), ref: w.guid });
    try { const ctx = A.snapCtx(); for (const g of ctx.lines || []) if (g?.a && g?.b) out.push({ a: g.a, b: g.b, label: t('pick.grid'), ref: '' }); } catch (e) { /* no grids */ }
    for (const r of R.refs) { const c = refCorners(r).map(planOfMm); if (Math.hypot(c[1][0] - c[0][0], c[1][1] - c[0][1]) > 1) out.push({ a: c[0], b: c[1], label: r.name, ref: r.guid, plane: r }); }
    for (const l of R.lines.filter((x) => x.kind !== 'arc')) { const p = linePoints3(l).map(planOfMm); for (let i = 0; i + 1 < p.length; i++) if (Math.hypot(p[i + 1][0] - p[i][0], p[i + 1][1] - p[i][1]) > 1) out.push({ a: p[i], b: p[i + 1], label: t('line'), ref: l.guid }); }
    for (const c of A.ask('curtainTraces') || []) out.push(c);
    void k;
    return out;
  }
  const segDist = (p, a, b) => { const dx = b[0] - a[0], dy = b[1] - a[1], L2 = dx * dx + dy * dy, k = L2 ? Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / L2)) : 0; return Math.hypot(p[0] - a[0] - dx * k, p[1] - a[1] - dy * k); };
  function pickPlanLine(p) {
    let best = null, bd = A.pv().pxToMm(10);
    for (const l of planLines()) { const d = segDist(p, l.a, l.b); if (d < bd) { bd = d; best = l; } }
    return best;
  }
  /** A flat face under a point of the 3D view → the work plane on it. */
  function planeFromFace(x, y) {
    const v = viewer(), sp = space3d();
    if (!v || !sp) return null;
    const h = v.measureAt(x, y);
    if (!h?.face?.tris || h.face.tris.length < 9) return null;
    const T = h.face.tris, q = [0, 3, 6].map((i) => sp.mmOfViewer([T[i], T[i + 1], T[i + 2]]));
    let n = P.unit(P.cross(P.sub(q[1], q[0]), P.sub(q[2], q[0])));
    if (!n) return null;
    // towards the eye: the face is seen from its front
    const eye = sp.mmOfViewer(v.camera.position.toArray());
    if (P.dot(P.sub(eye, q[0]), n) < 0) n = P.mul(n, -1);
    const F = P.frame(sp.mmOfViewer(h.point), n);
    const mmTris = new Float64Array(T.length);
    for (let i = 0; i < T.length; i += 3) mmTris.set(sp.mmOfViewer([T[i], T[i + 1], T[i + 2]]), i);
    let guid = '', cls = '';
    try { const id = h.key - A.kb(); guid = val(A.ed().api.GetLine(A.ed().mid, id, false).GlobalId) || ''; cls = A.host.model()?.classOf?.get(id) || ''; } catch (e) { guid = ''; }
    return { frame: F, tris: mmTris, key: h.key, guid, cls, area: h.face.area };
  }
  function click3d(x, y) {
    const v = viewer();
    if (!v || v.measuring || v.placing || v.walk || A.S.tool !== 'workplane') return;
    const f = planeFromFace(x, y);
    if (!f) { say(t('pick.noface'), true); return; }
    setPlane({ kind: 'face', ref: f.guid, label: f.cls.replace(/^Ifc/, '') || t('pick.face'), frame: f.frame });
  }
  const wired = new WeakSet();
  function wire3d() {
    const v = viewer();
    if (!v?.canvas || wired.has(v.canvas)) return;
    wired.add(v.canvas);
    let down = null;
    v.canvas.addEventListener('pointerdown', (e) => { down = e.button === 0 ? [e.clientX, e.clientY] : null; });
    v.canvas.addEventListener('pointerup', (e) => { if (!down || Math.hypot(e.clientX - down[0], e.clientY - down[1]) > 4) { down = null; return; } down = null; if (A.S.tool === 'workplane') setTimeout(() => click3d(e.clientX, e.clientY), 0); });
  }

  // ---- drawing on the plane from the plan ----
  const at = (p, e) => A.snapFrom(p, e, R.pts.length && !(A.S.tool === 'modelline' && R.lineKind === 'arc') ? R.ptsPlan[R.ptsPlan.length - 1] : null).p;   // an arc's points are free: no angle or length from the one before
  function finishLine(closed = false) {
    const pts = R.pts.slice(), kind = R.lineKind;
    R.pts = []; R.ptsPlan = [];
    if (pts.length < (kind === 'arc' ? 3 : 2)) return;
    A.commit(addModelLine({ frame: frame(), kind, pts, closed }), { label: t('line'), verb: A.t('model.verb.drew') });
  }
  function hintNow() {
    const k = A.S.tool;
    if (k === 'workplane') hint('hint.workplane');
    else if (upright() && k !== 'refplane') hint('hint.upright');
    else if (k === 'refplane') hint(R.pts.length ? 'hint.ref2' : 'hint.ref');
    else if (k === 'modeltext') hint('hint.text');
    else if (k === 'modelline') hint(R.lineKind === 'arc' ? ['hint.arc1', 'hint.arc2', 'hint.arc3'][Math.min(2, R.pts.length)] : R.lineKind === 'polyline' ? (R.pts.length ? 'hint.poly2' : 'hint.poly') : (R.pts.length ? 'hint.line2' : 'hint.line'));
  }

  // ---- the buttons and option rows (before extend(), which wires every [data-mtool]) ----
  const menu = document.querySelector('[data-res-tools] .bc-mb-menu');
  if (menu && !menu.querySelector('[data-mtool="workplane"]')) {
    const btn = (name, attrs) => el('button', { type: 'button', className: 'bc-tool', ...attrs }, el('i', { className: 'bi ' + ICON[name][1], 'aria-hidden': 'true', 'data-ccic': ICON[name][0] }), el('span', {}, ''));
    menu.append(btn('workplane', { 'data-mtool': 'workplane', 'aria-pressed': 'false' }), btn('showplane', { 'data-wp-show': '', 'aria-pressed': 'false' }), btn('refplane', { 'data-mtool': 'refplane', 'aria-pressed': 'false' }),
      btn('viewer', { 'data-wp-viewer': '' }), btn('modeltext', { 'data-mtool': 'modeltext', 'aria-pressed': 'false' }), btn('modelline', { 'data-mtool': 'modelline', 'aria-pressed': 'false' }));
  }

  // ---- what the plan shows ----
  function scene(sc) {
    const k = A.kb();
    for (const r of R.refs.filter((x) => x.storey === A.S.level)) {
      const c = refCorners(r).map(planOfMm), flat = Math.hypot(c[1][0] - c[2][0], c[1][1] - c[2][1]) < 1;
      const segs = flat ? [[c[0][0], c[0][1], c[1][0], c[1][1]]] : c.map((q, i) => { const n = c[(i + 1) % 4]; return [q[0], q[1], n[0], n[1]]; });
      sc.symbols.push({ key: k + r.id, lines: [], dashed: segs, poly: flat ? [[c[0][0], c[0][1]], [c[1][0], c[1][1]]] : c.map((q) => [q[0], q[1]]), color: '--layer-green' });
      (sc.rooms ||= []).push({ key: k + r.id, label: [r.name], at: [c[0][0], c[0][1]] });
    }
    for (const l of R.lines.filter((x) => x.storey === A.S.level)) {
      const p = linePoints3(l).map(planOfMm), segs = [];
      for (let i = 0; i + 1 < p.length; i++) segs.push([p[i][0], p[i][1], p[i + 1][0], p[i + 1][1]]);
      sc.symbols.push({ key: k + l.id, lines: segs, poly: p.map((q) => [q[0], q[1]]), lw: 1.75 });
    }
    if (R.show && R.wp) {
      const F = R.wp.frame, b = extentOn(F);
      const c = [[b.u0, b.v0], [b.u1, b.v0], [b.u1, b.v1], [b.u0, b.v1]].map((q) => planOfPlane(F, q));
      const segs = P.isUpright(F) ? [[c[0][0], c[0][1], c[1][0], c[1][1]]] : c.map((q, i) => { const n = c[(i + 1) % 4]; return [q[0], q[1], n[0], n[1]]; });
      sc.symbols.push({ key: -1, lines: [], dashed: segs, color: '--layer-cyan', wp: true });
    }
  }
  /** How much of a plane to draw: the model's box laid on it, a metre round it. */
  function extentOn(F) {
    const v = viewer(), sp = space3d(), us = [], vs = [];
    if (v && sp && v.box && !v.box.isEmpty()) {
      const lo = v.box.min, hi = v.box.max;
      for (const x of [lo.x, hi.x]) for (const y of [lo.y, hi.y]) for (const z of [lo.z, hi.z]) { const c = P.toPlane(F, sp.mmOfViewer([x, y, z])); us.push(c[0]); vs.push(c[1]); }
    }
    for (const q of [...R.lines.flatMap(linePoints3), ...R.refs.flatMap(refCorners)]) { const c = P.toPlane(F, q); if (Math.abs(c[2]) < 5000) { us.push(c[0]); vs.push(c[1]); } }
    if (!us.length) return { u0: -5000, u1: 5000, v0: -5000, v1: 5000 };
    return { u0: Math.min(...us) - 1000, u1: Math.max(...us) + 1000, v0: Math.min(...vs) - 1000, v1: Math.max(...vs) + 1000 };
  }

  // ---- what the 3D view shows ----
  function overlays3d() {
    const v = viewer(), sp = space3d();
    if (!v?.setOverlay) return;
    if (!sp || !A.ed()) { for (const n of ['workplane', 'refplanes', 'modellines']) v.setOverlay(n, null); return; }
    const V = (q) => sp.viewerOfMm(q);
    const seg = (pts, close) => { const out = []; for (let i = 0; i + 1 < pts.length + (close ? 1 : 0); i++) out.push([V(pts[i]), V(pts[(i + 1) % pts.length])]); return out; };
    v.setOverlay('modellines', R.lines.length ? { lines: R.lines.flatMap((l) => seg(linePoints3(l), false)), color: getComputedStyle(document.documentElement).getPropertyValue('--ink').trim() || '#111111' } : null);
    v.setOverlay('refplanes', R.refs.length ? { dashed: R.refs.flatMap((r) => seg(refCorners(r), true)), faces: R.refs.map((r) => { const c = refCorners(r).map(V); return new Float32Array([...c[0], ...c[1], ...c[2], ...c[0], ...c[2], ...c[3]]); }), color: '#2a9d6f', opacity: 0.06 } : null);
    if (R.show && R.wp) {
      const F = R.wp.frame, b = extentOn(F), c = [[b.u0, b.v0], [b.u1, b.v0], [b.u1, b.v1], [b.u0, b.v1]].map((q) => V(P.fromPlane(F, q[0], q[1])));
      const lines = seg([[b.u0, b.v0], [b.u1, b.v0], [b.u1, b.v1], [b.u0, b.v1]].map((q) => P.fromPlane(F, q[0], q[1])), true);
      const step = Math.max(1000, Math.ceil(Math.max(b.u1 - b.u0, b.v1 - b.v0) / 20000) * 1000);
      for (let u = Math.ceil(b.u0 / step) * step; u < b.u1; u += step) lines.push([V(P.fromPlane(F, u, b.v0)), V(P.fromPlane(F, u, b.v1))]);
      for (let w = Math.ceil(b.v0 / step) * step; w < b.v1; w += step) lines.push([V(P.fromPlane(F, b.u0, w)), V(P.fromPlane(F, b.u1, w))]);
      v.setOverlay('workplane', { lines, faces: [new Float32Array([...c[0], ...c[1], ...c[2], ...c[0], ...c[2], ...c[3]])], color: '#1f8fc4', opacity: 0.12 });
    } else v.setOverlay('workplane', null);
  }
  function setShow(on) {
    R.show = !!on;
    try { localStorage.setItem(SHOW_KEY, R.show ? '1' : '0'); } catch (e) { /* private window */ }
    syncRows();
    overlays3d();
    A.buildScene();
    drawViewer();
    window.bimcraftElevEdit?.draw?.();
    say(t(R.show ? 'show.on' : 'show.off'));
  }

  // ---- the option rows ----
  function syncRows() {
    const root = document;   // a layout may move a tool's row out of the app's root (the docked layout's Tool options bar)
    const show = root.querySelector('[data-wp-show]');
    if (show) show.setAttribute('aria-pressed', R.show ? 'true' : 'false');
    const cur = root.querySelector('[data-wp-current]'); if (cur) cur.textContent = planeLabel();
    const lv = root.querySelector('[data-wp-level]');
    if (lv) { const levels = A.S.data?.levels || []; lv.replaceChildren(el('option', { value: '' }, t('row.level')), ...levels.map((l) => el('option', { value: l.guid, selected: R.stored && R.wp?.kind === 'level' && R.wp.ref === l.guid }, l.name))); }
    const rf = root.querySelector('[data-wp-ref]');
    if (rf) { rf.replaceChildren(el('option', { value: '' }, t(R.refs.length ? 'row.ref' : 'row.noref')), ...R.refs.map((r) => el('option', { value: r.guid, selected: R.wp?.kind === 'reference' && R.wp.ref === r.guid }, r.name))); rf.disabled = !R.refs.length; }
    const set = (sel, v) => { const i = root.querySelector(sel); if (i && document.activeElement !== i) i.value = v; };
    set('[data-wp-linekind]', R.lineKind); set('[data-wp-text]', R.text.text); set('[data-wp-texth]', L(R.text.height)); set('[data-wp-textd]', L(R.text.depth));
    set('[data-wp-refname]', R.refName); set('[data-wp-refh]', R.refH > 0 ? L(R.refH) : '');
    for (const n of root.querySelectorAll('[data-wp-on]')) n.textContent = t('row.on', { name: planeLabel() });
  }
  function makeRows() {
    const bar = A.root.querySelector('[data-mopts="wall"]')?.parentElement;
    if (!bar || bar.querySelector('[data-mopts="workplane"]')) return;
    const row = (name, ...kids) => el('div', { className: 'bc-modelbar-row', 'data-mopts': name, hidden: true }, ...kids);
    const lab = (text, input) => el('label', { className: 'bc-mb-field' }, el('span', {}, text + ' '), input);
    const len = (attr, get, put, min = 0.1) => { const i = el('input', { type: 'text', className: 'bc-input bc-num', size: 7, [attr]: '' }); i.addEventListener('change', () => { if (!i.value.trim() && min === 0) { put(0); return; } const mm = parseLen(i.value, A.units()); if (Number.isFinite(mm) && mm >= min) put(mm); else say(A.t('model.err.length'), true); syncRows(); }); void get; return i; };
    const on = () => el('span', { className: 'bc-muted', 'data-wp-on': '' }, '');
    const lv = el('select', { className: 'bc-mb-select', 'data-wp-level': '', 'aria-label': t('row.level') });
    lv.addEventListener('change', () => { const l = A.S.data?.levels.find((x) => x.guid === lv.value); if (l) setLevelPlane(l); });
    const rf = el('select', { className: 'bc-mb-select', 'data-wp-ref': '', 'aria-label': t('row.ref') });
    rf.addEventListener('change', () => { const r = R.refs.find((x) => x.guid === rf.value); if (r) setRefPlane(r); });
    const kind = el('select', { className: 'bc-mb-select', 'data-wp-linekind': '', 'aria-label': t('row.linekind') }, ...['line', 'polyline', 'arc'].map((k) => el('option', { value: k }, t('linekind.' + k))));
    kind.addEventListener('change', () => { R.lineKind = kind.value; R.pts = []; R.ptsPlan = []; hintNow(); A.drawOverlay(); });
    const text = el('input', { type: 'text', className: 'bc-input', size: 18, 'data-wp-text': '', placeholder: t('row.text.ph') });
    text.addEventListener('input', () => { R.text.text = text.value; });
    const rn = el('input', { type: 'text', className: 'bc-input', size: 16, 'data-wp-refname': '', placeholder: t('row.refname.ph') });
    rn.addEventListener('input', () => { R.refName = rn.value; });
    bar.append(
      row('workplane', el('strong', { 'data-wp-current': '' }, ''), lab(t('row.setlevel'), lv), lab(t('row.setref'), rf)),
      row('refplane', lab(t('row.refname'), rn), lab(t('row.refh'), len('data-wp-refh', () => R.refH, (mm) => { R.refH = mm; }, 0))),
      row('modelline', lab(t('row.linekind'), kind), on()),
      row('modeltext', lab(t('row.text'), text), lab(t('row.texth'), len('data-wp-texth', () => R.text.height, (mm) => { R.text.height = mm; }, 1)), lab(t('row.textd'), len('data-wp-textd', () => R.text.depth, (mm) => { R.text.depth = mm; })), on()));
  }

  // ================================================================================================ the Work Plane Viewer
  /** The model's cut by a plane: [{ key, segs: Float64Array of u1, v1, u2, v2 }]. */
  function sectionOf(F) {
    const model = A.host.model(), ed = A.ed();
    if (!model || !ed) return [];
    const M = mul4([1000, 0, 0, 0, 0, 0, 1000, 0, 0, -1000, 0, 0, 0, 0, 0, 1], inv4(ed.api.GetCoordinationMatrix(ed.mid)));   // the model's own viewer space → model mm (model-plan.js viewerToPlan)
    const out = [];
    for (const b of model.batches || []) {
      if (b.space) continue;
      const Pn = b.positions, I = b.indices, E = b.elems, n = Pn.length / 3, U = new Float64Array(n), Vv = new Float64Array(n), Wd = new Float64Array(n);
      for (let i = 0; i < n; i++) {
        const x = Pn[i * 3], y = Pn[i * 3 + 1], z = Pn[i * 3 + 2];
        const c = P.toPlane(F, [M[0] * x + M[4] * y + M[8] * z + M[12], M[1] * x + M[5] * y + M[9] * z + M[13], M[2] * x + M[6] * y + M[10] * z + M[14]]);
        U[i] = c[0]; Vv[i] = c[1]; Wd[i] = Math.abs(c[2]) < 1e-4 ? 1e-4 : c[2];
      }
      for (let r = 0; r < E.ids.length; r++) {
        let lo = Infinity, hi = -Infinity;
        for (let q = E.v0[r], qe = E.v0[r] + E.vn[r]; q < qe; q++) { if (Wd[q] < lo) lo = Wd[q]; if (Wd[q] > hi) hi = Wd[q]; }
        if (lo > 0 || hi < 0) continue;
        const segs = [];
        for (let tr = E.t0[r], te = E.t0[r] + E.tn[r]; tr < te; tr++) {
          const v3 = [I[tr * 3], I[tr * 3 + 1], I[tr * 3 + 2]], pts = [];
          for (let e = 0; e < 3; e++) { const a = v3[e], c = v3[(e + 1) % 3]; if ((Wd[a] > 0) !== (Wd[c] > 0)) { const k = Wd[a] / (Wd[a] - Wd[c]); pts.push(U[a] + (U[c] - U[a]) * k, Vv[a] + (Vv[c] - Vv[a]) * k); } }
          if (pts.length === 4 && Math.hypot(pts[2] - pts[0], pts[3] - pts[1]) > 0.01) segs.push(pts[0], pts[1], pts[2], pts[3]);
        }
        if (segs.length) out.push({ key: E.ids[r], segs: Float64Array.from(segs) });
      }
    }
    return out;
  }
  const V = R.v;
  function viewerCut() {
    const model = A.host.model(), F = frame();
    const tag = (model ? model.modelID + ':' + (model.batches?.length || 0) + ':' + model.triangles : '') + '|' + P.frameKey(F);
    if (V.cutFor !== tag || !V.cut) { V.cut = sectionOf(F); V.cutFor = tag; }
    return V.cut;
  }
  /** What lies on (or crosses) the work plane, in its own coordinates. */
  function onPlane() {
    const F = frame(), same = (G) => Math.abs(Math.abs(P.dot(G.n, F.n)) - 1) < 1e-6 && Math.abs(P.dot(P.sub(G.o, F.o), F.n)) < 0.5;
    const lines = R.lines.filter((l) => same(l.frame)).map((l) => ({ guid: l.guid, id: l.id, pts: linePoints3(l).map((q) => P.toPlane(F, q).slice(0, 2)) }));
    const texts = R.texts.filter((x) => same(x.frame)).map((x) => {
      const c = [[x.at[0], x.at[1]], [x.at[0] + x.width, x.at[1]], [x.at[0] + x.width, x.at[1] + x.height], [x.at[0], x.at[1] + x.height]].map((q) => P.toPlane(F, P.fromPlane(x.frame, q[0], q[1])).slice(0, 2));
      return { guid: x.guid, id: x.id, box: c, text: x.text, x };
    });
    const refs = [];
    for (const r of R.refs) {
      const c = refCorners(r);
      if (same(r.frame)) { refs.push({ guid: r.guid, name: r.name, pts: [...c, c[0]].map((q) => P.toPlane(F, q).slice(0, 2)) }); continue; }
      // its trace: where its outline crosses the work plane
      const tris = [...c[0], ...c[1], ...c[2], ...c[0], ...c[2], ...c[3]], sg = P.planeSection(F, tris);
      if (sg.length) { const all = sg.flatMap((g) => [[g[0], g[1]], [g[2], g[3]]]); let a = all[0], b = all[1], bd = 0; for (const p of all) for (const q of all) { const d = Math.hypot(p[0] - q[0], p[1] - q[1]); if (d > bd) { bd = d; a = p; b = q; } } refs.push({ guid: r.guid, name: r.name, pts: [a, b] }); }
    }
    return { lines, texts, refs };
  }
  function viewerBounds() {
    const xs = [], ys = [];
    for (const c of viewerCut()) for (let i = 0; i < c.segs.length; i += 2) { xs.push(c.segs[i]); ys.push(c.segs[i + 1]); }
    const o = onPlane();
    for (const p of [...o.lines.flatMap((l) => l.pts), ...o.texts.flatMap((x) => x.box), ...o.refs.flatMap((r) => r.pts)]) { xs.push(p[0]); ys.push(p[1]); }
    if (!xs.length) { const b = extentOn(frame()); return { x0: b.u0, x1: b.u1, y0: b.v0, y1: b.v1 }; }
    const m = Math.max(1000, (Math.max(...xs) - Math.min(...xs)) * 0.08);
    return { x0: Math.min(...xs) - m, x1: Math.max(...xs) + m, y0: Math.min(...ys) - m, y1: Math.max(...ys) + m };
  }
  function fitViewer() { const b = viewerBounds(); V.vb = [b.x0, -b.y1, b.x1 - b.x0, b.y1 - b.y0]; drawViewer(); }
  const pathOf = (pts, close) => pts.map((q, i) => (i ? 'L' : 'M') + q[0].toFixed(2) + ' ' + (-q[1]).toFixed(2)).join('') + (close ? 'Z' : '');
  function drawViewer() {
    if (!V.open || !V.dlg) return;
    const svg = V.dlg.querySelector('[data-wpv-svg]'), F = frame();
    if (!V.vb) { const b = viewerBounds(); V.vb = [b.x0, -b.y1, b.x1 - b.x0, b.y1 - b.y0]; }
    const vb = V.vb;
    svg.setAttribute('viewBox', vb.join(' '));
    const g = S('g'), fs = Math.max(60, vb[2] / 80);
    // a metre grid (coarser when far out), the plane's own axes
    const step = [100, 500, 1000, 5000, 10000, 50000].find((s) => vb[2] / s < 60) || 100000;
    let d = '';
    for (let x = Math.ceil(vb[0] / step) * step; x < vb[0] + vb[2]; x += step) d += 'M' + x + ' ' + vb[1] + 'V' + (vb[1] + vb[3]);
    for (let y = Math.ceil(vb[1] / step) * step; y < vb[1] + vb[3]; y += step) d += 'M' + vb[0] + ' ' + y + 'H' + (vb[0] + vb[2]);
    g.append(S('path', { class: 'wv-grid', d }), S('path', { class: 'wv-axis', d: 'M' + vb[0] + ' 0H' + (vb[0] + vb[2]) + 'M0 ' + vb[1] + 'V' + (vb[1] + vb[3]) }));
    if (P.isUpright(F)) for (const l of A.S.data?.levels || []) {   // the levels, as an elevation shows them
      const y = apply4(A.storeyMatrix(l.id) || Sm(), 0, 0, 0)[2] - F.o[2];
      g.append(S('path', { class: 'wv-axis', 'data-wpv-level': l.guid, d: 'M' + vb[0] + ' ' + (-y) + 'H' + (vb[0] + vb[2]) }));
      const tx = S('text', { x: vb[0] + fs * 0.4, y: -y - fs * 0.3, 'font-size': fs }); tx.textContent = l.name; g.append(tx);
    }
    let cd = '';
    for (const c of viewerCut()) for (let i = 0; i < c.segs.length; i += 4) cd += 'M' + c.segs[i].toFixed(2) + ' ' + (-c.segs[i + 1]).toFixed(2) + 'L' + c.segs[i + 2].toFixed(2) + ' ' + (-c.segs[i + 3]).toFixed(2);
    if (cd) g.append(S('path', { class: 'wv-cut', 'data-wpv-cut': '', d: cd }));
    const o = onPlane(), sel = (k, guid) => (V.sel?.kind === k && V.sel.guid === guid ? 'true' : 'false');
    for (const r of o.refs) { g.append(S('path', { class: 'wv-ref', 'data-wpv-ref': r.guid, 'aria-selected': sel('refplane', r.guid), d: pathOf(r.pts, false) })); const tx = S('text', { x: r.pts[0][0] + fs * 0.3, y: -r.pts[0][1] - fs * 0.3, 'font-size': fs }); tx.textContent = r.name; g.append(tx); }
    for (const l of o.lines) g.append(S('path', { class: 'wv-line', 'data-wpv-line': l.guid, 'aria-selected': sel('modelline', l.guid), d: pathOf(l.pts, false) }));
    for (const x of o.texts) {
      const n = S('path', { class: 'wv-text', 'data-wpv-text': x.guid, 'aria-selected': sel('modeltext', x.guid), d: pathOf(x.box, true) });
      g.append(n);
      if (R.font) { const tp = textPolygons(R.font, x.text, { height: x.x.height }); n.setAttribute('d', tp.polys.map((p) => [p.outer, ...p.holes].map((lp) => pathOf(lp.map((q) => P.toPlane(F, P.fromPlane(x.x.frame, x.x.at[0] + q[0], x.x.at[1] + q[1])).slice(0, 2)), true)).join('')).join('')); }
      else ensureFont().then(() => drawViewer()).catch(() => {});
    }
    // what is being drawn
    const gh = S('g', { 'data-wpv-ghost': '' });
    if (V.pts.length || V.hover) {
      const pts = V.hover ? [...V.pts, V.hover] : V.pts;
      if (V.tool === 'arc' && pts.length === 3) { const a = arcThrough(pts[0], pts[1], pts[2]); gh.append(S('path', { class: 'wv-ghost', d: pathOf(a ? arcPoints(a) : pts, false) })); }
      else if (pts.length > 1) gh.append(S('path', { class: 'wv-ghost', d: pathOf(pts, false) }));
      if (V.hover) gh.append(S('circle', { class: 'wv-ghost', cx: V.hover[0], cy: -V.hover[1], r: vb[2] / 250 }));
    }
    svg.replaceChildren(g, gh);
    const nm = V.dlg.querySelector('[data-wpv-name]'); if (nm) nm.textContent = planeLabel();
    for (const b of V.dlg.querySelectorAll('[data-wpv-tool]')) b.setAttribute('aria-pressed', b.dataset.wpvTool === V.tool ? 'true' : 'false');
    const tr = V.dlg.querySelector('[data-wpv-textrow]'); if (tr) tr.hidden = V.tool !== 'text';
    const del = V.dlg.querySelector('[data-wpv-delete]'); if (del) del.disabled = !V.sel;
  }
  const vHint = () => { const h = V.dlg?.querySelector('[data-wpv-hint]'); if (h) h.textContent = t('viewer.hint.' + V.tool + (V.pts.length ? '2' : '')); };
  function vTool(name) { V.tool = name; V.pts = []; V.hover = null; if (name !== 'select') V.sel = null; drawViewer(); vHint(); }
  /** The plane point under the pointer: caught by the ends of the cut and of what is drawn, else rounded to the millimetre; Shift keeps it square. */
  function vSnap(uv, e) {
    let q = [uv[0], uv[1]];
    const tol = (V.vb?.[2] || 10000) / 120, cands = [];
    for (const c of viewerCut()) for (let i = 0; i < c.segs.length; i += 2) cands.push([c.segs[i], c.segs[i + 1]]);
    const o = onPlane(); for (const l of [...o.lines, ...o.refs]) cands.push(...l.pts);
    let bd = tol; for (const c of cands) { const dd = Math.hypot(c[0] - q[0], c[1] - q[1]); if (dd < bd) { bd = dd; q = [c[0], c[1]]; } }
    const from = V.pts[V.pts.length - 1];
    if (e?.shiftKey && from) { if (Math.abs(q[0] - from[0]) >= Math.abs(q[1] - from[1])) q = [q[0], from[1]]; else q = [from[0], q[1]]; }
    return [R10(q[0]), R10(q[1])];
  }
  function viewerClick(uv, e = {}) {
    const q = vSnap(uv, e), F = frame();
    if (V.tool === 'select') {
      const tol = (V.vb?.[2] || 10000) / 100, o = onPlane();
      const nearPts = (pts) => { for (let i = 0; i + 1 < pts.length; i++) if (segDist(uv, pts[i], pts[i + 1]) < tol) return true; return false; };
      const hitL = o.lines.find((l) => nearPts(l.pts)), hitT = o.texts.find((x) => P.inPolygon(x.box, uv)), hitR = o.refs.find((r) => nearPts(r.pts));
      V.sel = hitT ? { kind: 'modeltext', guid: hitT.guid } : hitL ? { kind: 'modelline', guid: hitL.guid } : hitR ? { kind: 'refplane', guid: hitR.guid } : null;
      drawViewer(); return;
    }
    if (V.tool === 'text') { textAt(q, F); return; }
    V.pts.push(q);
    const need = V.tool === 'arc' ? 3 : V.tool === 'polyline' ? Infinity : 2;
    if (V.tool === 'polyline' && V.pts.length > 3 && Math.hypot(q[0] - V.pts[0][0], q[1] - V.pts[0][1]) < 1) { V.pts.pop(); vFinish(true); return; }
    if (V.pts.length >= need) vFinish(false); else { drawViewer(); vHint(); }
  }
  function vFinish(closed) {
    const pts = V.pts.slice(), F = frame();
    V.pts = []; V.hover = null;
    if (V.tool === 'refplane') {
      if (pts.length < 2) return;
      const G = P.acrossPlane(F, pts[0], pts[1]), len = Math.hypot(pts[1][0] - pts[0][0], pts[1][1] - pts[0][1]), h = R.refH > 0 ? R.refH : 3000;
      if (!G || len < 1) { say(A.t('model.err.wp.short'), true); drawViewer(); return; }
      A.commit(addRefPlane({ storey: A.level()?.guid, name: R.refName.trim() || '', baseName: t('ref.base'), frame: G, length: len, height: h, base: -h / 2 }), { label: t('ref'), verb: A.t('model.verb.drew') });
      R.refName = '';
    } else if (pts.length >= (V.tool === 'arc' ? 3 : 2)) A.commit(addModelLine({ frame: F, kind: V.tool, pts, closed }), { label: t('line'), verb: A.t('model.verb.drew') });
    drawViewer(); vHint();
  }
  function vDelete() {
    const s = V.sel; if (!s) return;
    V.sel = null;
    const run = s.kind === 'modelline' ? removeModelLines([s.guid]) : s.kind === 'modeltext' ? removeModelTexts([s.guid]) : removeRefPlanes([s.guid]);
    A.commit(run, { label: t(s.kind === 'modelline' ? 'line' : s.kind === 'modeltext' ? 'text' : 'ref'), verb: A.t('model.verb.deleted') });
    V.dlg?.querySelector('.bc-wpv-stage')?.focus();   // the Delete button is off again: a disabled button that holds the focus swallows Ctrl+Z
  }
  /** The 3D view turned to look straight at the work plane. */
  function lookAt() {
    const v = viewer(), sp = space3d(); if (!v || !sp || !v.camera || !v.controls) return;
    modelUi.ensure3d?.();
    const F = frame(), b = extentOn(F), c = P.fromPlane(F, (b.u0 + b.u1) / 2, (b.v0 + b.v1) / 2), size = Math.max(b.u1 - b.u0, b.v1 - b.v0);
    const dist = size / 2 / Math.tan((v.camera.fov || 45) * Math.PI / 360) * 1.1;
    const eye = P.add(c, P.mul(F.n, dist)), E = sp.viewerOfMm(P.isLevel(F) ? P.add(eye, P.mul(F.y, -dist * 1e-4)) : eye), Tg = sp.viewerOfMm(c);
    v.onUserMove?.();
    v.camera.position.set(E[0], E[1], E[2]); v.controls.target.set(Tg[0], Tg[1], Tg[2]);
    v.camera.near = Math.max(dist / 1e6, 0.01); v.camera.far = Math.max(v.camera.far, dist / 1000 * 20); v.camera.updateProjectionMatrix();
    v.controls.update(); v.render();
    say(t('viewer.looking', { name: planeLabel() }));
  }
  function closeViewer() { if (V.dlg) { V.dlg.close(); V.dlg.remove(); V.dlg = null; } V.open = false; V.pts = []; V.sel = null; }
  function openViewer(tool = 'select') {
    if (!A.ed()) { say(A.t('model.needs.ifc'), true); return; }
    if (V.open) { vTool(tool); return; }
    if (!document.getElementById('bc-wpv-css')) document.head.append(el('style', { id: 'bc-wpv-css' }, CSS));
    const icon = (c) => el('i', { className: 'bi ' + c, 'aria-hidden': 'true' });
    const tb = (k, ic) => el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-wpv-tool': k, 'aria-pressed': 'false', onClick: () => vTool(k) }, icon(ic), ' ' + t('viewer.tool.' + k));
    const stage = el('div', { className: 'bc-wpv-stage', tabindex: '-1' });
    const svg = S('svg', { 'data-wpv-svg': '', preserveAspectRatio: 'xMidYMid meet', role: 'img', 'aria-label': t('viewer.title') });
    stage.append(svg);
    const atEv = (e) => { const pt = svg.createSVGPoint(); pt.x = e.clientX; pt.y = e.clientY; const m = svg.getScreenCTM(); if (!m) return [0, 0]; const q = pt.matrixTransform(m.inverse()); return [q.x, -q.y]; };
    let down = null, pan = null;
    svg.addEventListener('pointerdown', (e) => { stage.focus(); down = [e.clientX, e.clientY]; if (e.button === 1 || e.button === 2 || V.tool === 'select') { pan = { at: atEv(e), vb: V.vb.slice(), moved: false }; svg.setPointerCapture?.(e.pointerId); } });
    svg.addEventListener('pointermove', (e) => {
      if (pan && e.buttons) { const m = svg.getScreenCTM(); if (m) { const dx = (e.clientX - down[0]) / m.a, dy = (e.clientY - down[1]) / m.d; if (Math.hypot(e.clientX - down[0], e.clientY - down[1]) > 4) pan.moved = true; if (pan.moved) { V.vb = [pan.vb[0] - dx, pan.vb[1] - dy, pan.vb[2], pan.vb[3]]; svg.setAttribute('viewBox', V.vb.join(' ')); } } return; }
      if (V.tool !== 'select') { V.hover = vSnap(atEv(e), e); drawViewer(); }
    });
    svg.addEventListener('pointerup', (e) => { const wasPan = pan?.moved; pan = null; if (e.button !== 0 || wasPan || !down || Math.hypot(e.clientX - down[0], e.clientY - down[1]) > 4) { if (wasPan) drawViewer(); return; } viewerClick(atEv(e), e); });
    svg.addEventListener('dblclick', () => { if (V.tool === 'polyline' && V.pts.length >= 2) { vFinish(false); } });
    svg.addEventListener('contextmenu', (e) => e.preventDefault());
    const pad = new PadDetector();
    svg.addEventListener('wheel', (e) => { e.preventDefault();
      if (pad.isSwipe(e)) { const m = svg.getScreenCTM(); if (m && V.vb) { V.vb = [V.vb[0] + e.deltaX / m.a, V.vb[1] + e.deltaY / m.d, V.vb[2], V.vb[3]]; drawViewer(); } return; }   // D7.56: two fingers pan, a pinch and a mouse wheel zoom
      const p = atEv(e), k = (e.ctrlKey && e.deltaMode === 0 ? Math.exp(Math.max(-30, Math.min(30, e.deltaY)) * 0.01) : e.deltaY > 0 ? 1.2 : 1 / 1.2), vb = V.vb; V.vb = [p[0] - (p[0] - vb[0]) * k, -p[1] - (-p[1] - vb[1]) * k, vb[2] * k, vb[3] * k]; drawViewer(); }, { passive: false });
    const text = el('input', { type: 'text', className: 'bc-input', 'data-wpv-text': '', placeholder: t('row.text.ph'), value: R.text.text });
    text.addEventListener('input', () => { R.text.text = text.value; syncRows(); });
    const num = (attr, key, min) => { const i = el('input', { type: 'text', className: 'bc-input bc-num', size: 7, [attr]: '', value: L(R.text[key]) }); i.addEventListener('change', () => { const mm = parseLen(i.value, A.units()); if (Number.isFinite(mm) && mm >= min) R.text[key] = mm; else say(A.t('model.err.length'), true); i.value = L(R.text[key]); syncRows(); }); return i; };
    const dlg = el('dialog', { className: 'bc-dialog bc-wpv-dlg', 'data-wpv-dialog': '', 'aria-labelledby': 'bc-wpv-h' },
      el('h2', { className: 'bc-h', id: 'bc-wpv-h' }, t('viewer.title'), ': ', el('span', { 'data-wpv-name': '' }, '')),
      el('div', { className: 'bc-wpv-bar' }, tb('select', 'bi-cursor'), tb('line', 'bi-slash-lg'), tb('polyline', 'bi-bezier2'), tb('arc', 'bi-rainbow'), tb('text', 'bi-badge-3d'), tb('refplane', 'bi-border-center'),
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-wpv-delete': '', disabled: true, onClick: vDelete }, icon('bi-trash'), ' ' + A.t('model.ev.delete')),
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-wpv-fit': '', onClick: fitViewer }, icon('bi-arrows-fullscreen'), ' ' + t('viewer.fit')),
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-wpv-look': '', onClick: lookAt }, icon('bi-camera-video'), ' ' + t('viewer.look')),
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-wpv-close': '', onClick: closeViewer }, A.t('model.sh.close'))),
      el('div', { className: 'bc-wpv-bar', 'data-wpv-textrow': '', hidden: true }, el('label', {}, t('row.text') + ' ', text), el('label', {}, t('row.texth') + ' ', num('data-wpv-texth', 'height', 1)), el('label', {}, t('row.textd') + ' ', num('data-wpv-textd', 'depth', 0.1))),
      stage, el('p', { className: 'bc-muted', 'data-wpv-hint': '', 'aria-live': 'polite' }, ''), el('p', { className: 'bc-muted' }, t('viewer.lede')));
    dlg.addEventListener('keydown', (e) => {
      const inField = /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName);
      if (e.key === 'Escape') { e.preventDefault(); if (V.pts.length) { V.pts = []; drawViewer(); vHint(); } else if (V.tool !== 'select') vTool('select'); else closeViewer(); }
      else if (e.key === 'Enter' && !inField && V.tool === 'polyline' && V.pts.length >= 2) { e.preventDefault(); vFinish(false); }
      else if ((e.key === 'Delete' || e.key === 'Backspace') && !inField && V.sel) { e.preventDefault(); vDelete(); }
      else if ((e.ctrlKey || e.metaKey) && !e.shiftKey && e.key.toLowerCase() === 'z' && !inField) { e.preventDefault(); document.querySelector('[data-undo]')?.click(); }
    });
    dlg.addEventListener('cancel', (e) => e.preventDefault());
    A.root.append(dlg);
    dlg.showModal();
    V.dlg = dlg; V.open = true; V.vb = null; V.cutFor = '';
    vTool(tool);
    stage.focus();
  }

  // ---- the elevation and section panel: what is drawn on planes shows there too ----
  function plugElev() {
    const EV = window.bimcraftElevEdit;
    if (!EV?.plug || plugElev.done) return;
    plugElev.done = true;
    const K = EV.plug({
      draw({ g, vb, fs, Y }) {
        const F = K.R.F; if (!F?.right || !F.dir) return;
        const tv = (q) => [q[0] * F.right[0] + q[1] * F.right[1], q[2] - F.base];
        const seen = (q) => F.kind !== 'section' || (q[0] - F.o[0]) * F.dir[0] + (q[1] - F.o[1]) * F.dir[1] >= -1;
        const path = (pts, cls, attr) => { if (!pts.some(seen)) return; const n = S('path', { class: cls, ...attr, d: pts.map((q, i) => { const p = tv(q); return (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + Y(p[1]).toFixed(1); }).join('') }); n.style.fill = 'none'; n.style.vectorEffect = 'non-scaling-stroke'; g.append(n); return n; };
        for (const l of R.lines) { const n = path(linePoints3(l), 'ev-ln', { 'data-wp-evline': l.guid }); if (n) n.style.strokeWidth = '2'; }
        for (const r of R.refs) { const c = refCorners(r), n = path([...c, c[0]], 'ev-lv', { 'data-wp-evref': r.guid }); if (n) { n.style.stroke = 'var(--layer-green, #2a7)'; const p = tv(c[3]); const tx = S('text', { x: p[0] + fs * 0.3, y: Y(p[1]) - fs * 0.3, 'font-size': fs }); tx.textContent = r.name; g.append(tx); } }
        if (R.show && R.wp) { const Fw = R.wp.frame, b = extentOn(Fw), c = [[b.u0, b.v0], [b.u1, b.v0], [b.u1, b.v1], [b.u0, b.v1]].map((q) => P.fromPlane(Fw, q[0], q[1])); const n = path([...c, c[0]], 'ev-lv', { 'data-wp-evplane': '' }); if (n) n.style.stroke = 'var(--layer-cyan, #19c)'; }
        void vb;
      },
    });
  }

  A = modelUi.extend({
    tools: TOOLS,
    hint: (name) => 'wp.hint.' + (name === 'workplane' ? 'workplane' : name === 'refplane' ? 'ref' : name === 'modeltext' ? 'text' : 'line'),
    typed: () => false,
    classes: /^Ifc(Annotation|BuildingElementProxy)$/,
    move(p, e) { if (!mine()) return; R.hover = A.S.tool === 'workplane' ? p : at(p, e); },
    click(p, e) {
      const k = A.S.tool;
      if (k === 'workplane') {
        const l = pickPlanLine(p);
        if (!l) { say(t('pick.noline'), true); return; }
        if (l.plane) { setRefPlane(l.plane); return; }
        const a = mmOfPlan(l.a), b = mmOfPlan(l.b), F = P.linePlane(a, b, a[2]);
        if (F) setPlane({ kind: 'line', ref: l.ref, label: l.label, frame: F });
        return;
      }
      const q = at(p, e);
      if (k === 'refplane') {
        if (!R.pts.length) { R.pts = [q]; R.ptsPlan = [q]; hintNow(); return; }
        const a = mmOfPlan(R.pts[0]), b = mmOfPlan(q), F = P.linePlane(a, b, a[2]), len = Math.hypot(b[0] - a[0], b[1] - a[1]);
        R.pts = []; R.ptsPlan = []; hintNow();
        if (!F || len < 1) { say(A.t('model.err.wp.short'), true); return; }
        A.commit(addRefPlane({ storey: A.level()?.guid, name: R.refName.trim() || '', baseName: t('ref.base'), frame: F, length: len, height: R.refH > 0 ? R.refH : (A.level()?.height || 3000), base: 0 }), { label: t('ref'), verb: A.t('model.verb.drew') });
        R.refName = ''; syncRows();
        return;
      }
      if (upright()) { openViewer(k === 'modeltext' ? 'text' : R.lineKind); say(t('hint.upright')); return; }
      const uv = planToPlane(q);
      if (!uv) return;
      if (R.wp?.kind === 'level' && R.wp.ref && R.wp.ref !== A.level()?.guid && !R.toldLevel) { R.toldLevel = true; say(t('other.level', { name: levelName(R.wp.ref) })); }
      if (k === 'modeltext') { textAt(uv); return; }
      if (R.lineKind === 'polyline' && R.pts.length >= 3 && Math.hypot(q[0] - R.ptsPlan[0][0], q[1] - R.ptsPlan[0][1]) < A.pv().pxToMm(8)) { finishLine(true); hintNow(); return; }
      R.pts.push(uv); (R.ptsPlan ||= []).push(q);
      if ((R.lineKind === 'line' && R.pts.length === 2) || (R.lineKind === 'arc' && R.pts.length === 3)) finishLine(false);
      hintNow();
    },
    dbl() { if (A.S.tool === 'modelline' && R.lineKind === 'polyline' && R.pts.length >= 2) { finishLine(false); hintNow(); } },
    key(e) {
      if (A.S.tool === 'modelline' && R.lineKind === 'polyline' && e.key === 'Enter' && R.pts.length >= 2) { finishLine(false); hintNow(); return true; }
      if (mine() && e.key === 'Backspace' && R.pts.length) { R.pts.pop(); R.ptsPlan.pop(); hintNow(); return true; }
      return false;
    },
    escape() { if (mine() && R.pts.length) { R.pts = []; R.ptsPlan = []; hintNow(); return true; } return false; },
    toolChanged(name) {
      R.pts = []; R.ptsPlan = []; R.hover = null; R.toldLevel = false;
      wire3d();
      if (!TOOLS.includes(name)) return;
      const m = A.root.querySelector('[data-res-tools]'); if (m?.open) m.open = false;
      syncRows(); hintNow();
      if (name === 'workplane') say(t('hint.workplane'));
      if ((name === 'modelline' || name === 'modeltext') && upright()) openViewer(name === 'modeltext' ? 'text' : R.lineKind);
    },
    refresh() { read(); makeRows(); syncRows(); wire3d(); plugElev(); overlays3d(); if (V.open) { V.cutFor = ''; drawViewer(); } },
    settled() { overlays3d(); if (V.open) { V.cutFor = ''; drawViewer(); } },
    ownKeys(set, k) { for (const r of R.refs) set.add(k + r.id); for (const l of R.lines) set.add(k + l.id); },
    scene,
    overlay(o) {
      if (!mine()) return;
      const k = A.S.tool;
      if (R.hover && k !== 'workplane') o.snap = { p: R.hover, kind: 'free' };
      if (k === 'workplane' && R.hover) { const l = pickPlanLine(R.hover); if (l) o.lines.push([l.a[0], l.a[1], l.b[0], l.b[1]]); return; }
      const pp = R.ptsPlan || [];
      if (!pp.length || !R.hover) return;
      const pts = [...pp, R.hover];
      if (k === 'modelline' && R.lineKind === 'arc' && pts.length === 3) { const a = arcThrough(pts[0], pts[1], pts[2]), ap = a ? arcPoints(a, 20) : pts; for (let i = 0; i + 1 < ap.length; i++) o.dashed.push([ap[i][0], ap[i][1], ap[i + 1][0], ap[i + 1][1]]); }
      else for (let i = 0; i + 1 < pts.length; i++) o.lines.push([pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1]]);
      for (const q of pp) o.points.push(q);
      const last = pp[pp.length - 1];
      o.hud = { p: R.hover, text: L(Math.hypot(R.hover[0] - last[0], R.hover[1] - last[1])) };
    },
    pick(key) {
      const k = A.kb();
      const r = R.refs.find((x) => k + x.id === key); if (r) return { kind: 'refplane', guid: r.guid, label: r.name };
      const l = R.lines.find((x) => k + x.id === key); if (l) return { kind: 'modelline', guid: l.guid, label: t('line') };
      const x = R.texts.find((q) => k + q.id === key); if (x) return { kind: 'modeltext', guid: x.guid, label: t('text') };
      return null;
    },
    props(items, kit) {
      if (items.length !== 1) return null;
      const it = items[0];
      const ro = (label, text, attr) => kit.rows.push(el('dt', {}, label), el('dd', { [attr]: '' }, text));
      if (it.kind === 'refplane') {
        const r = R.refs.find((x) => x.guid === it.guid); if (!r) return null;
        const run = (ch) => A.commit(changeRefPlane(r.guid, ch), kit.one(t('ref')));
        const nm = el('input', { type: 'text', className: 'bc-input', value: r.name, 'data-mp-wprefname': '' });
        nm.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); nm.blur(); } });
        nm.addEventListener('change', () => { const s = nm.value.trim(); if (s && s !== r.name) run({ name: s }); else nm.value = r.name; });
        kit.field(t('prop.name'), nm);
        kit.field(t('prop.length'), kit.lenInput(r.length, 'data-mp-wpreflen', (mm) => run({ length: mm })));
        kit.field(t('prop.height'), kit.lenInput(r.height, 'data-mp-wprefh', (mm) => run({ height: mm })));
        kit.field(t('prop.base'), kit.lenInput(r.base, 'data-mp-wprefbase', (mm) => run({ base: mm }), { any: true }));
        kit.field(t('prop.use'), kit.button(t('prop.use.btn'), 'data-mp-wprefuse', () => setRefPlane(r)));
        return { title: t('ref') };
      }
      if (it.kind === 'modelline') {
        const l = R.lines.find((x) => x.guid === it.guid); if (!l) return null;
        ro(t('prop.kind'), t('linekind.' + l.kind) + (l.closed ? ' (' + t('prop.closed') + ')' : ''), 'data-mp-wplinekind');
        ro(t('prop.length'), L(l.length), 'data-mp-wplinelen');
        ro(t('prop.plane'), P.isLevel(l.frame) ? t('prop.plane.level', { z: L(l.frame.o[2]) }) : P.isUpright(l.frame) ? t('prop.plane.upright') : t('prop.plane.sloped'), 'data-mp-wplineplane');
        kit.field(t('prop.use'), kit.button(t('prop.use.btn'), 'data-mp-wplineuse', () => setPlane({ kind: 'face', ref: l.guid, label: t('line'), frame: l.frame })));
        return { title: t('line') };
      }
      if (it.kind === 'modeltext') {
        const x = R.texts.find((q) => q.guid === it.guid); if (!x) return null;
        const tx = el('input', { type: 'text', className: 'bc-input', value: x.text, 'data-mp-wptext': '' });
        tx.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); tx.blur(); } });
        tx.addEventListener('change', () => { const s = tx.value.trim(); if (s && s !== x.text) retext(x, { text: s }); else tx.value = x.text; });
        kit.field(t('row.text'), tx);
        kit.field(t('row.texth'), kit.lenInput(x.height, 'data-mp-wptexth', (mm) => retext(x, { height: mm })));
        kit.field(t('row.textd'), kit.lenInput(x.depth, 'data-mp-wptextd', (mm) => retext(x, { depth: mm }), { min: 0.1 }));
        ro(t('prop.font'), x.font, 'data-mp-wpfont');
        ro(t('prop.face'), fmtArea(x.faceArea, A.units()), 'data-mp-wpface');
        ro(t('prop.volume'), (x.faceArea * x.depth / 1e9).toFixed(4) + ' m³', 'data-mp-wpvol');
        return { title: t('text') };
      }
      return null;
    },
    remove(items) {
      const g = (k) => items.filter((x) => x.kind === k).map((x) => x.guid);
      const ops = [g('refplane').length && removeRefPlanes(g('refplane')), g('modelline').length && removeModelLines(g('modelline')), g('modeltext').length && removeModelTexts(g('modeltext'))].filter(Boolean);
      return (ed) => { let r = null; for (const o of ops) { const r2 = o(ed); r = r ? { ...r2, journal: A.mergeJournals(r.journal, r2.journal) } : r2; } return r || { id: null, ids: [] }; };
    },
    /** For other tools (curtain-ui.js By Face): the plane in force and a flat face under a point of the 3D view. */
    workPlane: () => R.wp,
  });
  // the words on the menu buttons, the CadCraft icon set when it is loaded
  const words = { workplane: 'tool.workplane', refplane: 'tool.refplane', modelline: 'tool.modelline', modeltext: 'tool.modeltext' };
  for (const [name, key] of Object.entries(words)) { const b = A.root.querySelector(`[data-mtool="${name}"]`); if (b) { b.title = t(key + '.title'); b.querySelector('span').textContent = t(key); } }
  const sb = A.root.querySelector('[data-wp-show]'), vb = A.root.querySelector('[data-wp-viewer]');
  const drawOn = () => { const tg = A.root.querySelector('[data-model-toggle]'); if (tg && tg.getAttribute('aria-pressed') !== 'true') tg.click(); };
  if (sb) { sb.title = t('tool.show.title'); sb.querySelector('span').textContent = t('tool.show'); sb.addEventListener('click', () => { if (!A.ed()) { say(A.t('model.needs.ifc'), true); return; } drawOn(); read(); setShow(!R.show); sb.closest('details')?.removeAttribute('open'); }); }
  if (vb) { vb.title = t('tool.viewer.title'); vb.querySelector('span').textContent = t('tool.viewer'); vb.addEventListener('click', () => { drawOn(); read(); openViewer('select'); vb.closest('details')?.removeAttribute('open'); }); }
  const icons = () => { const set = globalThis.ccIconSet; if (!set?.node) return; for (const i of A.root.querySelectorAll('[data-mtool="workplane"] [data-ccic], [data-mtool="refplane"] [data-ccic], [data-mtool="modelline"] [data-ccic], [data-mtool="modeltext"] [data-ccic], [data-wp-show] [data-ccic], [data-wp-viewer] [data-ccic]')) { const n = set.node(i.dataset.ccic); if (n) { n.dataset.ccic = i.dataset.ccic; i.replaceWith(n); } } };
  icons(); globalThis.addEventListener?.('cc-icon-set', icons);
  if (typeof window !== 'undefined') window.bimcraftWorkPlane = { state: R, api: { plane: () => R.wp, label: planeLabel, setShow, openViewer, closeViewer, section: () => viewerCut(), onPlane, viewerClick, viewerTool: vTool, fit: fitViewer, lookAt, planeFromFace, extentOn, read, setPlane } };
  return { state: R, planeFromFace, frame, space3d, setPlane };
}
