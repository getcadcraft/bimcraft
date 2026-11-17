/* SPDX-License-Identifier: Apache-2.0 */
/**
 * wall-shape-view-ui.js — the wall Shape tools in the elevation, section and 3D views and as commands (0.9 WT.6, session
 * walls-shape-10). Every edit runs the SAME ops as Properties (wall-shape.js), one undo step each; the geometry of a drag is
 * wall-shape-view.js (no DOM).
 *
 * 1. In the elevation / section panel (elev-edit-ui.js, through its plug()):
 *    Select [data-ev-tool=select], a wall that faces the view picked → its profile: the top and bottom line [data-ws-pline=top|bottom],
 *      a grip on every point [data-ws-pv="top:1"] (drag; Delete or right-click removes it), a grip in the middle of every piece
 *      [data-ws-ps="top:0"] (drag the whole piece up or down); double-click (or right-click) a line adds a point. The strip under the
 *      toolbar [data-ws-strip] has the typed values: Along / Height of the picked point [data-ws-vs] [data-ws-vz], Add a point
 *      [data-ws-evadd=top|bottom], Back to straight [data-ws-evreset], Attach top / base lists [data-ws-evtop] [data-ws-evbase].
 *    Wall openings (no door or window) [data-ws-vo=<GlobalId>]: drag one to move it, its eight grips [data-ws-voh=n|ne|e|se|s|sw|w|nw]
 *      resize it, Delete removes it; typed [data-ws-so] [data-ws-sw] [data-ws-ss] [data-ws-sh].
 *    Wall opening [data-ev-tool=wsopen]: drag a rectangle on a wall's face.
 *    Attach top / Attach base [data-ev-tool=wsattachtop|wsattachbase]: click the wall(s), then the roof, floor or ceiling
 *      (its box in the view [data-ws-target]).
 *    A wall seen end-on (the view looks along it) [data-ws-cross]: picked, a handle at its top [data-ws-slanth] leans it (single
 *      slant); the strip has Upright / Slanted / Double slant and the angles [data-ws-cslant] [data-ws-cl] [data-ws-cr].
 *    A wall's own face view, key `wall:<GlobalId>` (any wall, a curved one unrolled): the same grips; opened by Edit profile.
 * 2. Commands (input-bimcraft.js wall.attach, wall.profile, wall.slant, wall.opening → the Walls menu's [data-mtool=wsattach|
 *    wsprofile|wsslant|wsopen], icons wallattach, wallprofile, wallslant, wallopen), working in the plan AND the 3D view:
 *      wsattach   click wall(s) — plan or 3D — then the roof, floor or ceiling: in 3D the element itself, in the plan a point under
 *                 it (several there: a list to choose from [data-ws-choose]); Top / Base in the tool's row [data-ws-which]
 *      wsprofile  plan: click a wall → its face view. 3D: click a wall → grips on its profile points (drag in the wall's plane)
 *      wsslant    click a wall (plan or 3D) → the angle(s) [data-ws-sdialog]
 *      wsopen     plan: click a wall → an opening there, the size from the tool's row [data-ws-ow] [data-ws-oh] [data-ws-osill].
 *                 3D: two clicks on a wall's face = its corners; with the wall picked, grips on its openings' corners (resize)
 *                 and middle (move)
 *    The 3D grips are the 3D view's own (host.grips3d, as the family hotspots): not there while the section box shows its grips.
 * Test hook: window.bimcraftWallShapeView = { state, grips() → [{ kind, …, page: { x, y } }], pageOf(guid, s, z) → { x, y } }.
 */
import { readShape, attachTargets, readWallOpenings, setWallShape, setWallsShape, addWallOpening, changeWallOpening, removeWallOpenings } from './wall-shape.js';
import { isWallView, wallFrame, faceOf, profileLines, editProfile, profileOp, openingRect, openingFromRect, dragOpening, crossWallsOf, crossOutline, slantFromHandle, targetsInView, pickTarget, rayPlane, wallPlane, wallCoords, wallPoint } from './wall-shape-view.js';
import { wallGeom } from './model-arcs.js';
import { snapshotModel } from './model-ops.js';
import { fromViewer, toViewer } from './ifc-place.js';
import { inv4, apply4 } from './ifc-util.js';
import { inPoly, profileAt } from './walls/shape.js';
import { ModelWriter } from './model-write.js';
import { fmtLen, parseLen } from './model-units.js';
import { el } from './ui-util.js';

const CSS = `.bc-ev-stage .ev-ws-out { fill: none; stroke: var(--ink, #111); vector-effect: non-scaling-stroke; stroke-width: 1.2; pointer-events: none; }
.bc-ev-stage .ev-ws-pline { fill: none; stroke: var(--action); vector-effect: non-scaling-stroke; stroke-width: 2; pointer-events: none; }
.bc-ev-stage .ev-ws-plhit { fill: none; stroke: transparent; vector-effect: non-scaling-stroke; stroke-width: 12; cursor: copy; }
.bc-ev-stage .ev-ws-grip { fill: var(--sheet, #fff); stroke: var(--action); vector-effect: non-scaling-stroke; stroke-width: 1.5; cursor: move; }
.bc-ev-stage .ev-ws-grip[aria-selected="true"], .bc-ev-stage .ev-ws-grip:hover { fill: var(--action); }
.bc-ev-stage .ev-ws-seg { fill: var(--action); opacity: .55; cursor: ns-resize; }
.bc-ev-stage .ev-ws-seg:hover { opacity: 1; }
.bc-ev-stage .ev-ws-vo { stroke: var(--ink-2, #666); stroke-dasharray: 5 3; }
.bc-ev-stage .ev-ws-target { fill: color-mix(in srgb, var(--action) 14%, transparent); stroke: var(--action); stroke-dasharray: 6 3; vector-effect: non-scaling-stroke; pointer-events: none; }
.bc-ev-stage .ev-ws-picked { fill: color-mix(in srgb, var(--action) 22%, transparent); stroke: var(--action); vector-effect: non-scaling-stroke; stroke-width: 2; pointer-events: none; }
.bc-ev-stage .ev-ws-cross { fill: color-mix(in srgb, var(--ink-2, #666) 18%, transparent); stroke: var(--ink-2, #666); vector-effect: non-scaling-stroke; cursor: pointer; }
.bc-ev-stage .ev-ws-cross[aria-selected="true"], .bc-ev-stage .ev-ws-cross:hover { stroke: var(--action); fill: color-mix(in srgb, var(--action) 14%, transparent); }
.bc-ev-bar[data-ws-strip] { height: 2.4rem; flex-wrap: nowrap; overflow-x: auto; overflow-y: hidden; white-space: nowrap; }
.bc-ev-bar[data-ws-strip] > * { flex: 0 0 auto; }
.bc-ev-bar[data-ws-strip] .bc-input { width: 6rem; }`;
const TOOLS = ['wsattach', 'wsprofile', 'wsslant', 'wsopen'];
const ICON = { wsattach: ['wallattach', 'bi-arrow-bar-up'], wsprofile: ['wallprofile', 'bi-bezier2'], wsslant: ['wallslant', 'bi-slash-lg'], wsopen: ['wallopen', 'bi-bounding-box-circles'] };
const HANDLES = ['sw', 's', 'se', 'e', 'ne', 'n', 'nw', 'w'];
const NS = 'http://www.w3.org/2000/svg';
const R10 = (v) => Math.round(v / 10) * 10;
const safe = (fn, dflt) => { try { return fn(); } catch (e) { return dflt; } };
const IDENT = { xOf: (s) => s, sOf: (x) => x, zOf: (y) => y, yOf: (z) => z, y0: 0, k: 1 };   // a wall's own (s, z) as a "view" (3D)

export function mountWallShapeViews(modelUi) {
  if (typeof document === 'undefined') return {};
  if (!document.getElementById('bc-wsv-css')) { const st = document.createElement('style'); st.id = 'bc-wsv-css'; st.textContent = CSS; document.head.append(st); }
  let A = null, K = null;
  const t = (k, v) => A.t('wshape.' + k, v);
  const L = (mm) => fmtLen(mm, A.units());
  const writer = () => { const ed = A.ed(); return ed ? new ModelWriter(ed.W, ed.api, ed.mid) : null; };
  const snapNow = () => A.S.data || (A.ed() ? snapshotModel(A.ed()) : null);
  const wallBy = (guid) => (snapNow()?.walls || []).find((w) => w.guid === guid) || null;
  let cached = { data: null, openings: [], targets: [] };
  const model = () => {
    const d = snapNow();
    if (cached.data !== d) { const w = writer(); cached = { data: d, openings: w ? safe(() => readWallOpenings(w, d?.walls || undefined), []) : [], targets: w ? safe(() => attachTargets(w), []) : [] }; }
    return cached;
  };
  const meta = () => ({ label: A.t('model.wall'), verb: A.t('model.verb.changed'), select: A.selectedKeys() });
  const runMain = (o) => A.commit(o, meta());
  const say = (k, v, err = false) => A.host.status(t(k, v), err);

  // ---- the Walls menu's four buttons and their option rows (before extend(), which wires every [data-mtool] it finds) ----
  const menu = document.querySelector('[data-wall-tools] .bc-mb-menu');
  if (menu && !menu.querySelector('[data-mtool="wsattach"]')) {
    for (const name of TOOLS) {
      const b = el('button', { type: 'button', className: 'bc-tool', 'data-mtool': name, 'aria-pressed': 'false' }, el('i', { className: 'bi ' + ICON[name][1], 'aria-hidden': 'true', 'data-ccic': ICON[name][0] }), el('span', {}, ''));
      b.addEventListener('click', () => { const d = menu.closest('details'); if (d) d.open = false; });
      menu.append(b);
    }
  }

  // =================================================================================== 1. the elevation / section panel
  const P = { drag: null, attach: null, faces: new Map(), cross: [], targets: [], strip: null };
  const S = (tag, attrs = {}) => { const n = document.createElementNS(NS, tag); for (const [k, v] of Object.entries(attrs)) if (v !== null && v !== undefined) n.setAttribute(k, String(v)); return n; };
  const pvOf = (sel) => { const m = /^(top|bottom):(\d+)$/.exec(sel?.pv || ''); return m ? { line: m[1], i: Number(m[2]) } : null; };
  /** A profile line as view points (a curved wall seen in an elevation: more points, it is not straight there). */
  function linePts(face, line) {
    const out = [];
    for (let i = 0; i < line.length; i++) {
      if (i && face.curved) { const [s0, z0] = line[i - 1], [s1, z1] = line[i]; for (let k = 1; k < 12; k++) out.push([face.xOf(s0 + (s1 - s0) * k / 12), face.yOf(z0 + (z1 - z0) * k / 12)]); }
      out.push([face.xOf(line[i][0]), face.yOf(line[i][1])]);
    }
    return out;
  }
  const pathOf = (pts, close = false) => pts.map((p, i) => (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + (-p[1]).toFixed(1)).join('') + (close ? 'Z' : '');
  function evDraw({ g, vb }) {
    const R = K.R, F = R.F, sn = snapNow(), M = model(), gs = Math.max(30, vb[2] / 130);
    P.faces = new Map(); P.gs = gs;
    for (const it of R.items.walls) {
      const wall = wallBy(it.guid), face = wall ? faceOf(F, sn, wall) : null;
      if (!face) continue;
      P.faces.set(wall.guid, face);
      const sh = readShape(wall), PL = profileLines(wall, sh);
      if (F.kind === 'wall' || sh.profile) g.append(S('path', { class: 'ev-ws-out', d: pathOf([...linePts(face, PL.top), ...linePts(face, PL.bottom).reverse()], true) }));
      for (const o of M.openings.filter((x) => x.wallGuid === wall.guid)) {
        const r = openingRect(face, wall, o);
        g.append(S('rect', { class: 'ev-hit ev-ws-vo', 'data-ws-vo': o.guid, x: r.x0, y: -r.y1, width: Math.max(1, r.x1 - r.x0), height: Math.max(1, r.y1 - r.y0), 'aria-selected': R.sel?.wo === o.guid ? 'true' : 'false' }));
      }
    }
    // walls seen end-on: their (leaning) cross-section, to pick for the slant
    P.cross = crossWallsOf(F, sn);
    for (const cw of P.cross) {
      const wall = wallBy(cw.guid), pts = crossOutline(cw, wall ? readShape(wall).slant : null);
      g.append(S('path', { class: 'ev-ws-cross', 'data-ws-cross': cw.guid, d: pathOf(pts, true), 'aria-selected': R.sel?.cross === cw.guid ? 'true' : 'false' }));
      if (R.sel?.cross === cw.guid) g.append(S('circle', { class: 'ev-ws-grip', 'data-ws-slanth': cw.guid, cx: (pts[1][0] + pts[2][0]) / 2, cy: -cw.y1, r: gs * 1.2 }));
    }
    // attach: what can be attached to, and the walls picked so far
    P.targets = [];
    if (P.attach) {
      P.targets = targetsInView(F, sn, M.targets).filter((x) => (P.attach.which === 'base' ? x.base : x.top));
      for (const x of P.targets) { const h = Math.max(x.y1 - x.y0, gs * 2); g.append(S('rect', { class: 'ev-ws-target', 'data-ws-target': x.guid, 'data-ws-kind': x.kind, x: x.x0, y: -(x.y0 + h), width: x.x1 - x.x0, height: h })); }
      for (const it of R.items.walls) if (P.attach.walls.has(it.guid)) g.append(S('rect', { class: 'ev-ws-picked', 'data-ws-picked': it.guid, x: it.x0, y: -it.y1, width: Math.max(1, it.x1 - it.x0), height: Math.max(1, it.y1 - it.y0) }));
    }
    // the picked wall's profile: lines, a grip per point, a grip per piece
    const wsel = R.sel?.wall ? wallBy(R.sel.wall) : null, face = wsel ? P.faces.get(wsel.guid) : null;
    if (wsel && face && R.tool === 'select') {
      const PL = profileLines(wsel), pv = pvOf(R.sel);
      for (const line of ['top', 'bottom']) {
        const pts = linePts(face, PL[line]);
        g.append(S('path', { class: 'ev-ws-pline', d: pathOf(pts) }), S('path', { class: 'ev-ws-plhit', 'data-ws-pline': line, d: pathOf(pts) }));
      }
      for (const line of ['top', 'bottom']) {
        PL[line].forEach(([s, z], i) => {
          if (i < PL[line].length - 1) { const [s1, z1] = PL[line][i + 1]; g.append(S('circle', { class: 'ev-ws-seg', 'data-ws-ps': line + ':' + i, cx: face.xOf((s + s1) / 2), cy: -face.yOf((z + z1) / 2), r: gs * 0.8 })); }
        });
        PL[line].forEach(([s, z], i) => g.append(S('rect', { class: 'ev-ws-grip', 'data-ws-pv': line + ':' + i, x: face.xOf(s) - gs, y: -face.yOf(z) - gs, width: gs * 2, height: gs * 2, 'aria-selected': pv && pv.line === line && pv.i === i ? 'true' : 'false' })));
      }
    }
    // the picked opening's eight grips
    const o = R.sel?.wo ? M.openings.find((x) => x.guid === R.sel.wo) : null, ow = o ? wallBy(o.wallGuid) : null, of = ow ? P.faces.get(ow.guid) : null;
    if (o && of) {
      const r = openingRect(of, ow, o), xm = (r.x0 + r.x1) / 2, ym = (r.y0 + r.y1) / 2;
      const at = { sw: [r.x0, r.y0], s: [xm, r.y0], se: [r.x1, r.y0], e: [r.x1, ym], ne: [r.x1, r.y1], n: [xm, r.y1], nw: [r.x0, r.y1], w: [r.x0, ym] };
      for (const h of HANDLES) g.append(S('rect', { class: 'ev-ws-grip', 'data-ws-voh': h, x: at[h][0] - gs, y: -at[h][1] - gs, width: gs * 2, height: gs * 2 }));
    }
    renderStrip();
  }
  function evBounds(b) {
    const R = K.R, sn = snapNow();
    if (!R.F || !sn) return;
    for (const it of R.items?.walls || []) {
      const wall = wallBy(it.guid), face = wall ? faceOf(R.F, sn, wall) : null;
      if (!face) continue;
      const PL = profileLines(wall);
      for (const q of [...PL.top, ...PL.bottom]) { b.y1 = Math.max(b.y1, face.yOf(q[1]) + 300); b.y0 = Math.min(b.y0, face.yOf(q[1]) - 300); }
      if (R.F.kind === 'wall') { b.x0 = Math.min(b.x0, -500); b.x1 = Math.max(b.x1, wall.len + 500); }
    }
    if (P.attach) for (const x of targetsInView(R.F, sn, model().targets)) { b.x0 = Math.min(b.x0, x.x0); b.x1 = Math.max(b.x1, x.x1); b.y0 = Math.min(b.y0, x.y0); b.y1 = Math.max(b.y1, x.y1); }
  }
  const ghost = () => K.R.dlg?.querySelector('[data-ev-ghost]');
  const grab = (e) => { try { e.currentTarget.setPointerCapture?.(e.pointerId); } catch (x) { /* a synthetic event */ } };
  function evDown(p, e) {
    const R = K.R, tg = e.target, cl = (s) => tg.closest?.(s), M = model();
    if (P.attach) {
      const hit = P.attach.walls.size ? pickTarget(P.targets, p, P.attach.which, P.gs * 2) : null;
      const wg = cl('[data-ev-wall]')?.dataset.evWall;
      // a thin target (a floor or ceiling: a band across the walls) wins once a wall is picked; a tall one (a roof) only where no
      // wall not yet picked stands in front of it
      const thin = hit && hit.y1 - hit.y0 < 600;
      if (wg && P.faces.has(wg) && !P.attach.walls.has(wg) && !thin) { P.attach.walls.add(wg); K.draw(); return true; }
      if (hit) {
        const guids = [...P.attach.walls];
        if (K.commit(setWallsShape(guids, P.attach.which === 'base' ? { attachBase: hit.guid } : { attachTop: hit.guid }), t(P.attach.which === 'base' ? 'attachbase' : 'attachtop'))) P.attach.walls.clear();
        return true;
      }
      if (wg && P.attach.walls.has(wg)) { P.attach.walls.delete(wg); K.draw(); return true; }
      K.hintText(t(P.attach.walls.size ? 'ev.hint.attach2' : 'ev.hint.attach'));
      return true;
    }
    if (R.tool === 'wsopen') {
      const wg = cl('[data-ev-wall]')?.dataset.evWall;
      if (!wg || !P.faces.has(wg)) { K.hintText(t('ev.hint.open')); return true; }
      P.drag = { kind: 'new', wall: wg, from: p, at: p }; grab(e);
      return true;
    }
    if (R.tool !== 'select') return false;
    const h = cl('[data-ws-voh]');
    if (h && R.sel?.wo) { P.drag = { kind: 'woh', handle: h.dataset.wsVoh, guid: R.sel.wo, from: p, at: p }; grab(e); return true; }
    const vo = cl('[data-ws-vo]');
    if (vo) { const o = M.openings.find((x) => x.guid === vo.dataset.wsVo); if (!o) return true; R.sel = { wo: o.guid, wallOf: o.wallGuid }; P.drag = { kind: 'wo', guid: o.guid, from: p, at: p }; grab(e); K.draw(); return true; }
    const pv = cl('[data-ws-pv]');
    if (pv && R.sel?.wall) { const [line, i] = pv.dataset.wsPv.split(':'); R.sel = { wall: R.sel.wall, pv: line + ':' + i }; P.drag = { kind: 'pv', line, i: Number(i), from: p, at: p }; grab(e); K.draw(); return true; }
    const ps = cl('[data-ws-ps]');
    if (ps && R.sel?.wall) { const [line, i] = ps.dataset.wsPs.split(':'); P.drag = { kind: 'ps', line, i: Number(i), from: p, at: p }; grab(e); return true; }
    if (cl('[data-ws-pline]') && R.sel?.wall) return true;   // on the picked wall's line: it stays picked (a double-click adds a point)
    const sh = cl('[data-ws-slanth]');
    if (sh) { P.drag = { kind: 'slant', guid: sh.dataset.wsSlanth, from: p, at: p }; grab(e); return true; }
    const cr = cl('[data-ws-cross]');
    if (cr) { R.sel = { cross: cr.dataset.wsCross }; K.draw(); return true; }
    if (R.F?.kind === 'wall') { const wg = cl('[data-ev-wall]')?.dataset.evWall; R.sel = wg ? { wall: wg } : null; K.draw(); return true; }   // its own face view: nothing to move
    return false;
  }
  /** What the drag in hand would make: { op, ghost: view points | rect, words }. */
  function dragResult(d) {
    const M = model();
    if (d.kind === 'new') {
      const wall = wallBy(d.wall), face = P.faces.get(d.wall), o = openingFromRect(face, wall, d.from, d.at);
      return { run: () => addWallOpening(o), rect: openingRect(face, wall, o), words: t('ev.size', { w: L(o.width), h: L(o.height) }), label: t('opening') };
    }
    if (d.kind === 'wo' || d.kind === 'woh') {
      const o = M.openings.find((x) => x.guid === d.guid), wall = o ? wallBy(o.wallGuid) : null, face = wall ? P.faces.get(wall.guid) : null;
      if (!face) return null;
      const n = dragOpening(face, wall, o, d.kind === 'wo' ? 'move' : d.handle, d.at, d.from);
      return { run: () => changeWallOpening(o.guid, n), rect: openingRect(face, wall, n), words: d.kind === 'wo' ? t('ev.at', { s: L(n.offset), z: L(n.sill) }) : t('ev.size', { w: L(n.width), h: L(n.height) }), label: t('opening') };
    }
    if (d.kind === 'pv' || d.kind === 'ps') {
      const wall = wallBy(K.R.sel?.wall), face = wall ? P.faces.get(wall.guid) : null;
      if (!face) return null;
      const act = d.kind === 'pv' ? { type: 'move', line: d.line, i: d.i, s: R10(face.sOf(d.at[0])), z: R10(face.zOf(d.at[1])) } : { type: 'segment', line: d.line, i: d.i, dz: R10(d.at[1] - d.from[1]) };
      const pr = editProfile(wall, readShape(wall), act), line = pr?.[d.line] || profileLines(wall, { profile: pr })[d.line];
      const q = d.kind === 'pv' ? line[Math.min(d.i, line.length - 1)] : null;
      return { run: () => profileOp(wall, act), line: linePts(face, line), words: q ? t('ev.at', { s: L(q[0]), z: L(q[1]) }) : t('ev.dz', { dz: L(act.dz) }), label: t('profile') };
    }
    if (d.kind === 'slant') {
      const cw = P.cross.find((x) => x.guid === d.guid);
      if (!cw) return null;
      const cur = readShape(wallBy(cw.guid)).slant, base = cur ? Math.tan(cur[0] * Math.PI / 180) * (cw.y1 - cw.y0) * cw.side : 0;
      const deg = slantFromHandle(cw, base + d.at[0] - d.from[0]);
      return { run: () => setWallShape(cw.guid, { slant: deg ? [deg] : null }), line: crossOutline(cw, deg ? [deg] : null), close: true, words: t('ev.deg', { deg }), label: t('slant') };
    }
    return null;
  }
  function evMove(p) {
    if (!P.drag) return false;
    P.drag.at = p;
    const r = safe(() => dragResult(P.drag), null), g = ghost();
    if (!r || !g) return true;
    if (r.rect) g.replaceChildren(S('rect', { class: 'ev-ghost', x: r.rect.x0, y: -r.rect.y1, width: Math.max(1, r.rect.x1 - r.rect.x0), height: Math.max(1, r.rect.y1 - r.rect.y0) }));
    else if (r.line) g.replaceChildren(S('path', { class: 'ev-ghost', d: pathOf(r.line, !!r.close) }));
    K.hintText(r.words);
    return true;
  }
  function evUp() {
    if (!P.drag) return false;
    const d = P.drag; P.drag = null;
    ghost()?.replaceChildren();
    if (Math.hypot(d.at[0] - d.from[0], d.at[1] - d.from[1]) < 5) { K.draw(); return true; }   // a click, not a drag
    const r = safe(() => dragResult(d), null);
    if (r) K.commit(r.run(), r.label);
    return true;
  }
  /** A point added to the picked wall's line where it was double-clicked (or right-clicked). */
  function addPointAt(line, p) {
    const wall = wallBy(K.R.sel?.wall), face = wall ? P.faces.get(wall.guid) : null;
    if (!face) return false;
    K.commit(profileOp(wall, { type: 'add', line, s: R10(face.sOf(p[0])) }), t('profile'));
    return true;
  }
  function removePoint() {
    const pv = pvOf(K.R.sel), wall = wallBy(K.R.sel?.wall);
    if (!pv || !wall) return false;
    if (profileLines(wall)[pv.line].length <= 2) { K.hintText(t('ev.keep2')); return true; }
    K.R.sel = { wall: wall.guid };
    K.commit(profileOp(wall, { type: 'remove', line: pv.line, i: pv.i }), t('profile'));
    return true;
  }
  function evDbl(p, e) { const ln = e.target.closest?.('[data-ws-pline]')?.dataset.wsPline; return ln ? addPointAt(ln, p) : false; }
  function evContext(p, e) {
    const pv = e.target.closest?.('[data-ws-pv]');
    if (pv && K.R.sel?.wall) { const [line, i] = pv.dataset.wsPv.split(':'); K.R.sel = { wall: K.R.sel.wall, pv: line + ':' + i }; return removePoint(); }
    const ln = e.target.closest?.('[data-ws-pline]')?.dataset.wsPline;
    return ln ? addPointAt(ln, p) : false;
  }
  function evRemove() {
    const R = K.R;
    if (pvOf(R.sel)) return removePoint();
    if (R.sel?.wo) { const g = R.sel.wo; R.sel = null; K.commit(removeWallOpenings([g]), t('opening')); return true; }
    if (R.sel?.cross) { K.hintText(t('ev.hint.cross')); return true; }
    return false;
  }
  function evEscape() {
    if (P.drag) { P.drag = null; ghost()?.replaceChildren(); return true; }
    if (P.attach?.walls.size) { P.attach.walls.clear(); K.draw(); return true; }
    return false;
  }
  function evToolChanged(name) {
    const R = K.R;
    P.attach = name === 'wsattachtop' || name === 'wsattachbase' ? { which: name === 'wsattachbase' ? 'base' : 'top', walls: new Set(R.sel?.wall && P.faces.has(R.sel.wall) ? [R.sel.wall] : []) } : null;
    P.drag = null;
    if (R.dlg && R.F) K.draw();
  }
  const evHint = (tool) => (tool === 'wsopen' ? t('ev.hint.open') : tool === 'wsattachtop' || tool === 'wsattachbase' ? t(P.attach?.walls.size ? 'ev.hint.attach2' : 'ev.hint.attach') : tool === 'select' && (K.R.F?.kind === 'wall' || (K.R.sel?.wall && P.faces.has(K.R.sel.wall))) ? t('ev.hint.face') : null);
  /** The strip under the toolbar: the typed values of what is picked. */
  function renderStrip() {
    const st = P.strip, R = K.R;
    if (!st) return;
    const M = model(), kids = [];
    const num = (attr, v, label, onSet, unit = true) => {
      const i = el('input', { type: 'text', className: 'bc-input bc-num', size: 7, value: unit ? L(v) : String(v), [attr]: '', 'aria-label': label });
      i.addEventListener('change', () => { const mm = unit ? parseLen(i.value, A.units()) : parseFloat(i.value); if (!Number.isFinite(mm)) { K.hintText(A.t(unit ? 'model.err.length' : 'wshape.err.slant')); i.value = i.defaultValue; return; } onSet(mm); });
      i.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); e.stopPropagation(); i.blur(); } else if (e.key !== 'Escape') e.stopPropagation(); });
      return el('label', { className: 'bc-mb-field' }, el('span', {}, label + ' '), i);
    };
    const btn = (attr, label, onClick) => el('button', { type: 'button', className: 'btn-line btn-sm-cc', [attr[0]]: attr[1] ?? '', onClick }, label);
    const sel = (attr, opts, value, onPick) => { const s = el('select', { className: 'bc-mb-select', [attr]: '' }, ...opts.map(([v, l]) => el('option', { value: v, selected: v === value }, l))); s.addEventListener('change', () => onPick(s.value)); return s; };
    const wall = R.sel?.wall ? wallBy(R.sel.wall) : null, face = wall ? P.faces.get(wall.guid) : null;
    const o = R.sel?.wo ? M.openings.find((x) => x.guid === R.sel.wo) : null;
    const cw = R.sel?.cross ? wallBy(R.sel.cross) : null;
    if (wall && face) {
      const sh = readShape(wall), PL = profileLines(wall, sh), pv = pvOf(R.sel);
      kids.push(el('strong', {}, t('title')));
      if (pv && PL[pv.line][pv.i]) {
        const [s, z] = PL[pv.line][pv.i], ends = pv.i === 0 || pv.i === PL[pv.line].length - 1;
        if (!ends) kids.push(num('data-ws-vs', s, t('profile.along'), (mm) => K.commit(profileOp(wall, { type: 'move', line: pv.line, i: pv.i, s: mm, z }), t('profile'))));
        kids.push(num('data-ws-vz', z, t('profile.height'), (mm) => K.commit(profileOp(wall, { type: 'move', line: pv.line, i: pv.i, s, z: mm }), t('profile'))),
          btn(['data-ws-evrm'], t('ev.point.remove'), () => removePoint()));
      }
      const addMid = (line) => { const ln = PL[line]; let k = 0; for (let i = 1; i < ln.length - 1; i++) if (ln[i + 1][0] - ln[i][0] > ln[k + 1][0] - ln[k][0]) k = i; K.commit(profileOp(wall, { type: 'add', line, s: R10((ln[k][0] + ln[k + 1][0]) / 2) }), t('profile')); };
      kids.push(btn(['data-ws-evadd', 'top'], t('ev.point.top'), () => addMid('top')), btn(['data-ws-evadd', 'bottom'], t('ev.point.bottom'), () => addMid('bottom')));
      if (sh.profile) kids.push(btn(['data-ws-evreset'], t('profile.reset'), () => { R.sel = { wall: wall.guid }; K.commit(setWallShape(wall.guid, { profile: null }), t('profile')); }));
      const tops = M.targets.filter((x) => x.top), bases = M.targets.filter((x) => x.base);
      kids.push(el('label', { className: 'bc-mb-field' }, el('span', {}, t('attachtop') + ' '), sel('data-ws-evtop', [['', t('own')], ...tops.map((x) => [x.guid, x.label])], sh.attachTop, (v) => K.commit(setWallShape(wall.guid, { attachTop: v }), t('attachtop')))),
        el('label', { className: 'bc-mb-field' }, el('span', {}, t('attachbase') + ' '), sel('data-ws-evbase', [['', t('own')], ...bases.map((x) => [x.guid, x.label])], sh.attachBase, (v) => K.commit(setWallShape(wall.guid, { attachBase: v }), t('attachbase')))));
    } else if (o) {
      const ch = (key) => (mm) => K.commit(changeWallOpening(o.guid, { [key]: mm }), t('opening'));
      kids.push(el('strong', {}, t('opening')), num('data-ws-so', o.offset, t('opening.offset'), ch('offset')), num('data-ws-sw', o.width, t('opening.width'), ch('width')), num('data-ws-ss', o.sill, t('opening.sill'), ch('sill')), num('data-ws-sh', o.height, t('opening.height'), ch('height')),
        btn(['data-ws-evrmopen'], t('opening.remove'), () => evRemove()));
    } else if (cw) {
      const sh = readShape(cw), kind = !sh.slant ? 'none' : sh.slant.length === 2 ? 'double' : 'single';
      const set = (k, a, b) => K.commit(setWallShape(cw.guid, { slant: k === 'none' ? null : k === 'double' ? [a, b] : [a] }), t('slant'));
      kids.push(el('strong', {}, t('slant')), sel('data-ws-cslant', [['none', t('slant.none')], ['single', t('slant.single')], ['double', t('slant.double')]], kind, (v) => set(v, sh.slant?.[0] ?? 5, sh.slant?.[1] ?? sh.slant?.[0] ?? 5)));
      if (kind !== 'none') kids.push(num('data-ws-cl', sh.slant[0], t('ev.slant.left'), (v) => set(kind, v, sh.slant[1] ?? v), false));
      if (kind === 'double') kids.push(num('data-ws-cr', sh.slant[1], t('ev.slant.right'), (v) => set(kind, sh.slant[0], v), false));
      kids.push(el('span', { className: 'bc-muted' }, t('slant.deg')));
    } else kids.push(el('span', { className: 'bc-muted' }, t('ev.lede')));
    st.replaceChildren(...kids);
  }

  const EV = window.bimcraftElevEdit;
  if (EV?.plug) {
    K = EV.plug({
      frame: (key, snap) => wallFrame(key, snap),
      name: (key) => (isWallView(key) ? A.t('wshape.ev.face') : null),
      buttons: ({ setTool, icon }) => [['wsopen', 'bi-bounding-box-circles', 'ev.tool.open'], ['wsattachtop', 'bi-arrow-bar-up', 'ev.tool.attachtop'], ['wsattachbase', 'bi-arrow-bar-down', 'ev.tool.attachbase']]
        .map(([k, ic, w]) => el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-ev-tool': k, 'aria-pressed': 'false', onClick: () => setTool(k) }, icon(ic), ' ' + t(w))),
      panel: () => { P.strip = el('div', { className: 'bc-ev-bar', 'data-ws-strip': '' }); P.attach = null; P.drag = null; return P.strip; },
      hint: evHint, bounds: evBounds, draw: evDraw, down: evDown, move: evMove, up: evUp, dblclick: evDbl, context: evContext, remove: evRemove, escape: evEscape, toolChanged: evToolChanged,
    });
  }
  /** A wall's own face view, the wall picked. */
  function openFace(guid) {
    if (!window.bimcraftElevEdit?.open) return;
    window.bimcraftElevEdit.open('wall:' + guid, { sel: { wall: guid } });
  }

  // ================================================================================================ 2. plan and 3D commands
  const O = { which: 'top', w: 900, h: 2100, sill: 0 };
  const T = { walls: new Set(), a: null, grips: [], gripWall: null, drag: null, last: null };
  const tool = () => A.S.tool;
  const mine = () => TOOLS.includes(tool());
  const keyOf = (wall) => A.kb() + wall.id;
  const showPicked = () => { const sn = snapNow(); A.host.select([...T.walls].map((g) => sn?.walls.find((w) => w.guid === g)).filter(Boolean).map(keyOf)); };
  function wallAtPlan(p) {
    const tol = A.pv().pxToMm(8);
    let best = null;
    for (const w of A.wallsHere()) {
      const q = wallGeom(w).param(p);
      if (q.s < -tol || q.s > w.len + tol) continue;
      const sc = Math.max(0, Math.abs(q.off) - w.t / 2);
      if (sc <= tol && (!best || sc < best.sc)) best = { sc, w, s: q.s };
    }
    return best;
  }
  function attachTo(guid) {
    const guids = [...T.walls];
    if (!guids.length) return;
    runMain(setWallsShape(guids, O.which === 'base' ? { attachBase: guid } : { attachTop: guid }));
    T.walls.clear();
    hintNow();
  }
  function choose(cands) {
    const list = el('select', { className: 'select-cc', 'data-ws-choose': '', size: Math.min(6, Math.max(2, cands.length)) }, ...cands.map((c, i) => el('option', { value: c.guid, selected: i === 0 }, c.label)));
    const dlg = el('dialog', { className: 'bc-dialog', 'data-ws-choosedlg': '' }, el('form', { method: 'dialog' }, el('h2', { className: 'bc-h' }, t(O.which === 'base' ? 'attachbase' : 'attachtop')), el('p', {}, t('pick.several')), list,
      el('p', { className: 'bc-lib-actions' }, el('button', { type: 'submit', className: 'btn-plot btn-sm-cc', value: 'ok', 'data-ws-chooseok': '' }, A.t('model.co.ok')), el('button', { type: 'submit', className: 'btn-line btn-sm-cc', value: 'cancel' }, A.t('model.gp.cancel')))));
    dlg.addEventListener('close', () => { const v = list.value; dlg.remove(); if (dlg.returnValue === 'ok' && v) attachTo(v); });
    A.root.append(dlg); dlg.showModal();
  }
  function slantDialog(guids) {
    const first = wallBy(guids[0]), sh = first ? readShape(first) : { slant: null };
    const kind = el('select', { className: 'select-cc', 'data-ws-skind': '' }, ...[['none', 'slant.none'], ['single', 'slant.single'], ['double', 'slant.double']].map(([v, k]) => el('option', { value: v, selected: v === (!sh.slant ? 'single' : sh.slant.length === 2 ? 'double' : 'single') }, t(k))));
    const a = el('input', { type: 'text', className: 'bc-input bc-num', size: 6, value: String(sh.slant?.[0] ?? 5), 'data-ws-sl': '', 'aria-label': t('ev.slant.left') });
    const b = el('input', { type: 'text', className: 'bc-input bc-num', size: 6, value: String(sh.slant?.[1] ?? sh.slant?.[0] ?? 5), 'data-ws-sr': '', 'aria-label': t('ev.slant.right') });
    const show = () => { a.hidden = kind.value === 'none'; b.hidden = kind.value !== 'double'; };
    kind.addEventListener('change', show); show();
    const dlg = el('dialog', { className: 'bc-dialog', 'data-ws-sdialog': '' }, el('form', { method: 'dialog' }, el('h2', { className: 'bc-h' }, t('slant')), el('p', {}, kind, ' ', a, ' ', b), el('p', { className: 'bc-muted' }, t('slant.deg')),
      el('p', { className: 'bc-lib-actions' }, el('button', { type: 'submit', className: 'btn-plot btn-sm-cc', value: 'ok', 'data-ws-sok': '' }, A.t('model.co.ok')), el('button', { type: 'submit', className: 'btn-line btn-sm-cc', value: 'cancel' }, A.t('model.gp.cancel')))));
    dlg.addEventListener('close', () => {
      const k = kind.value, x = parseFloat(a.value), y = parseFloat(b.value); dlg.remove();
      if (dlg.returnValue !== 'ok') return;
      if (k !== 'none' && (!Number.isFinite(x) || (k === 'double' && !Number.isFinite(y)))) { say('err.slant', null, true); return; }
      runMain(setWallsShape(guids, { slant: k === 'none' ? null : k === 'double' ? [x, y] : [x] }));
    });
    A.root.append(dlg); dlg.showModal();
  }
  function openingAt(wall, s) {
    const width = Math.min(O.w, wall.len - 20), sill = Math.max(0, O.sill);
    runMain(addWallOpening({ wall: wall.guid, offset: Math.max(0, Math.min(wall.len - width, R10(s - width / 2))), width, height: Math.max(50, Math.min(O.h, wall.height - sill - 50)), sill: wall.baseOffset + sill }));
  }
  function hintNow() {
    const h = A.root.querySelector('[data-model-hint]'), ty = tool();
    if (!h || !mine()) return;
    h.textContent = t(ty === 'wsattach' ? (T.walls.size ? 'hint.attach2' : 'hint.attach') : ty === 'wsprofile' ? 'hint.profile' : ty === 'wsslant' ? 'hint.slant' : T.a ? 'hint.open2' : 'hint.open');
  }
  function click(p) {
    if (!mine()) return;
    const hit = wallAtPlan(p), ty = tool();
    if (ty === 'wsattach') {
      if (hit) { if (T.walls.has(hit.w.guid)) T.walls.delete(hit.w.guid); else T.walls.add(hit.w.guid); showPicked(); hintNow(); return; }
      if (!T.walls.size) { say('hint.attach', null, true); return; }
      const cands = model().targets.filter((x) => (O.which === 'base' ? x.base : x.top) && x.polys.some((poly) => inPoly(p, poly)));
      if (!cands.length) { say('pick.none', null, true); return; }
      if (cands.length === 1) attachTo(cands[0].guid); else choose(cands);
      return;
    }
    if (!hit) { say('pick.wall', null, true); return; }
    if (ty === 'wsprofile') openFace(hit.w.guid);
    else if (ty === 'wsslant') slantDialog([hit.w.guid]);
    else if (ty === 'wsopen') openingAt(hit.w, hit.s);
  }

  // ---- 3D: model mm ↔ the viewer, a wall's storey plan ↔ model mm ----
  const viewer = () => A.host.viewer?.() || null;
  function space(wall) {
    const v = viewer(), ed = A.ed(), Sm = A.storeyMatrix(wall.storey);
    if (!v || !ed || !Sm) return null;
    const C = ed.api.GetCoordinationMatrix(ed.mid), Si = inv4(Sm);
    let MM = null;
    try { MM = v.modelMatrix?.(A.host.model()?.mi ?? 0) || null; } catch (e) { MM = null; }
    const Mi = MM ? inv4(MM) : null;
    const planOfMm = (mm) => apply4(Si, mm[0], mm[1], mm[2]), mmOfPlan = (q) => apply4(Sm, q[0], q[1], q[2]);
    return {
      planOfMm, mmOfPlan,
      planOfViewer: (pt) => planOfMm(fromViewer(C, Mi ? apply4(Mi, pt[0], pt[1], pt[2]) : pt)),
      viewerOfPlan: (q) => { const lv = toViewer(C, mmOfPlan(q)); return MM ? apply4(MM, lv[0], lv[1], lv[2]) : lv; },
      rayAt: (x, y) => {   // the pointer's ray in the wall's storey plan (as host.grips3d hands its own)
        const r = v.rayIfc(x, y), a = v.ifcPoint(r.o).toArray(), b = v.ifcPoint([r.o[0] + r.d[0], r.o[1] + r.d[1], r.o[2] + r.d[2]]).toArray();
        const o = planOfMm(fromViewer(C, Mi ? apply4(Mi, ...a) : a)), q = planOfMm(fromViewer(C, Mi ? apply4(Mi, ...b) : b));
        return { o, d: [q[0] - o[0], q[1] - o[1], q[2] - o[2]] };
      },
    };
  }
  /** The pointer's place on a wall (its own s, z): the ray against the upright plane touching the wall at sRef. */
  function onWall(wall, ray, sRef, off = 0) {
    const pl = wallPlane(wall, sRef), hit = rayPlane(ray.o, ray.d, [pl.p0[0] + pl.n[0] * off, pl.p0[1] + pl.n[1] * off, 0], pl.n);
    return hit ? wallCoords(wall, hit) : null;
  }
  const selectedWall = () => { const keys = A.selectedKeys(), sn = snapNow(); return keys.length === 1 ? (sn?.walls || []).find((w) => keyOf(w) === keys[0]) || null : null; };
  /** The picked wall's grips in the 3D view: its profile points (Edit profile) or its openings' corners and middles (Wall opening). */
  function grips3d() {
    const host = A.host;
    if (!host.grips3d) return;
    const wall = mine() && (tool() === 'wsprofile' || tool() === 'wsopen') ? selectedWall() : null, sp = wall ? space(wall) : null;
    if (!sp) { if (T.grips.length) { T.grips = []; T.gripWall = null; host.grips3d(null); } return; }
    const list = [];
    if (tool() === 'wsprofile') { const PL = profileLines(wall); for (const line of ['top', 'bottom']) PL[line].forEach(([s, z], i) => list.push({ kind: 'pv', line, i, s, z })); }
    else for (const o of model().openings.filter((x) => x.wallGuid === wall.guid)) {
      const z0 = o.sill - wall.baseOffset, s0 = o.offset, s1 = o.offset + o.width, z1 = z0 + o.height;
      for (const [h, s, z] of [['sw', s0, z0], ['se', s1, z0], ['ne', s1, z1], ['nw', s0, z1], ['move', (s0 + s1) / 2, (z0 + z1) / 2]]) list.push({ kind: 'wo', guid: o.guid, handle: h, s, z });
    }
    for (const g of list) g.mm = sp.mmOfPlan(wallPoint(wall, g.s, g.z, 0));
    T.grips = list; T.gripWall = wall.guid;
    if (!list.length) { host.grips3d(null); return; }
    const at = (ray) => ({ o: sp.planOfMm(ray.o), d: (() => { const q = sp.planOfMm([ray.o[0] + ray.d[0], ray.o[1] + ray.d[1], ray.o[2] + ray.d[2]]), o = sp.planOfMm(ray.o); return [q[0] - o[0], q[1] - o[1], q[2] - o[2]]; })() });
    const ok = host.grips3d(list.map((g) => ({ p: g.mm, kind: g.kind === 'wo' && g.handle === 'move' ? 'face' : 'corner' })), {
      start: (i) => { T.drag = { i, c: null }; },
      move: (i, ray) => { if (T.drag) { T.drag.c = onWall(wall, at(ray), list[i].s); say('ev.at', { s: L(T.drag.c ? R10(T.drag.c.s) : 0), z: L(T.drag.c ? R10(T.drag.c.z) : 0) }); } },
      end: (i) => {
        const d = T.drag; T.drag = null;
        const g = list[i], c = d?.c;
        if (!c || Math.hypot(c.s - g.s, c.z - g.z) < 5) return;
        if (g.kind === 'pv') runMain(profileOp(wall, { type: 'move', line: g.line, i: g.i, s: R10(c.s), z: R10(c.z) }));
        else { const o = model().openings.find((x) => x.guid === g.guid); if (o) { const n = dragOpening(IDENT, { ...wall, baseOffset: 0 }, { ...o, sill: o.sill - wall.baseOffset }, g.handle, [c.s, c.z], [g.s, g.z]); runMain(changeWallOpening(o.guid, { ...n, sill: n.sill + wall.baseOffset })); } }
      },
    });
    if (ok === false) { T.grips = []; say('grips.busy', null, true); }
  }
  /** A click in the 3D view while one of the four tools is on (the view's own pick has run: the element under it is picked). */
  function click3d(x, y) {
    const v = viewer(), sn = snapNow();
    if (!v || !sn || !mine() || v.measuring || v.placing || v.walk) return;
    const h = v.hitAt(x, y), kb = A.kb(), ty = tool();
    const wall = h ? sn.walls.find((w) => kb + w.id === h.id) : null;
    if (ty === 'wsattach') {
      if (wall) { if (T.walls.has(wall.guid)) T.walls.delete(wall.guid); else T.walls.add(wall.guid); showPicked(); hintNow(); return; }
      if (!h || !T.walls.size) { showPicked(); return; }
      const D = sn.derived || {}, key = h.id;
      const d = [...(D.floors || []), ...(D.ceilings || [])].find((q) => kb + q.id === key) || (D.roofs || []).find((q) => kb + q.id === key || (q.parts || []).some((pp) => kb + pp === key));
      const tg = d ? model().targets.find((q) => q.guid === d.guid && (O.which === 'base' ? q.base : q.top)) : null;
      if (!tg) { say('pick.none', null, true); showPicked(); return; }
      attachTo(tg.guid);
      return;
    }
    if (ty === 'wsslant') { if (wall) slantDialog([wall.guid]); return; }
    if (ty === 'wsprofile') { grips3d(); return; }
    if (ty === 'wsopen') {
      if (!T.a) {
        if (!wall) return;
        const sp = space(wall), c = sp ? wallCoords(wall, sp.planOfViewer(h.point)) : null;
        if (c) { T.a = { wall: wall.guid, s: c.s, z: c.z, off: Math.sign(c.off) * wall.t / 2 }; hintNow(); }   // the face that was clicked: the second corner is found on it too
        return;
      }
      const w0 = wallBy(T.a.wall), sp = w0 ? space(w0) : null, c = sp ? onWall(w0, sp.rayAt(x, y), T.a.s, T.a.off) : null, a = T.a;
      T.a = null; hintNow();
      if (!c || Math.abs(c.s - a.s) < 50 || Math.abs(c.z - a.z) < 50) { say('err.nofit', null, true); return; }
      const o = openingFromRect(IDENT, { ...w0, baseOffset: 0 }, [a.s, a.z], [c.s, c.z]);
      runMain(addWallOpening({ ...o, wall: w0.guid, sill: w0.baseOffset + o.sill }));
    }
  }
  /** One listener per 3D canvas: a click (not a drag) while one of the tools is on. */
  const wired = new WeakSet();
  function wire3d() {
    const v = viewer();
    if (!v?.canvas || wired.has(v.canvas)) return;
    wired.add(v.canvas);
    let down = null;
    v.canvas.addEventListener('pointerdown', (e) => { down = e.button === 0 ? [e.clientX, e.clientY] : null; });
    v.canvas.addEventListener('pointerup', (e) => { if (!down || Math.hypot(e.clientX - down[0], e.clientY - down[1]) > 4) { down = null; return; } down = null; if (mine()) setTimeout(() => click3d(e.clientX, e.clientY), 0); });
  }

  A = modelUi.extend({
    tools: TOOLS,
    hint: (name) => ({ wsattach: 'wshape.hint.attach', wsprofile: 'wshape.hint.profile', wsslant: 'wshape.hint.slant', wsopen: 'wshape.hint.open' })[name],
    click,
    escape() { if (!mine() || !(T.walls.size || T.a)) return false; T.walls.clear(); T.a = null; showPicked(); hintNow(); return true; },
    toolChanged(name) {
      T.a = null;
      T.walls = new Set(name === 'wsattach' ? (modelUi.wallsPicked?.() || []) : []);
      wire3d();
      grips3d();
      if (TOOLS.includes(name)) hintNow();
    },
    picked() { if (mine()) grips3d(); },
    refresh() { wire3d(); if (mine()) grips3d(); },
  });
  // the words on the menu buttons, the CadCraft icon set (DU.1) when it is loaded, the two option rows
  for (const name of TOOLS) { const b = A.root.querySelector(`[data-mtool="${name}"]`); if (b) { b.title = t('tool.' + name + '.title'); const sp = b.querySelector('span'); if (sp) sp.textContent = t('tool.' + name); } }
  const icons = () => { const set = globalThis.ccIconSet; if (!set?.node) return; for (const name of TOOLS) { const i = A.root.querySelector(`[data-mtool="${name}"] [data-ccic]`); const n = i && set.node(i.dataset.ccic); if (n) { n.dataset.ccic = i.dataset.ccic; i.replaceWith(n); } } };
  icons(); globalThis.addEventListener?.('cc-icon-set', icons);
  const bar = A.root.querySelector('[data-mopts="wall"]')?.parentElement;
  if (bar) {
    const num = (attr, key, label) => {
      const i = el('input', { type: 'text', className: 'bc-input bc-num', size: 6, value: L(O[key]), [attr]: '', 'aria-label': label });
      i.addEventListener('change', () => { const mm = parseLen(i.value, A.units()); if (!Number.isFinite(mm) || mm < 0) { A.host.status(A.t('model.err.length'), true); i.value = L(O[key]); return; } O[key] = mm; });
      return el('label', { className: 'bc-mb-field' }, el('span', {}, label + ' '), i);
    };
    const which = el('select', { className: 'bc-mb-select', 'data-ws-which': '', 'aria-label': t('which') }, el('option', { value: 'top', selected: true }, t('attachtop')), el('option', { value: 'base' }, t('attachbase')));
    which.addEventListener('change', () => { O.which = which.value === 'base' ? 'base' : 'top'; });
    bar.append(el('div', { className: 'bc-modelbar-row', 'data-mopts': 'wsattach', hidden: true }, el('label', { className: 'bc-mb-field' }, el('span', {}, t('which') + ' '), which)),
      el('div', { className: 'bc-modelbar-row', 'data-mopts': 'wsopen', hidden: true }, num('data-ws-ow', 'w', t('opening.width')), num('data-ws-oh', 'h', t('opening.height')), num('data-ws-osill', 'sill', t('opening.sill'))));
  }
  const pageOf = (guid, s, z, off = 0) => { const wall = wallBy(guid), sp = wall ? space(wall) : null, v = viewer(); return sp && v ? v.project(sp.viewerOfPlan(wallPoint(wall, s, z, off))) : null; };
  window.bimcraftWallShapeView = {
    state: { P, T, O },
    grips: () => { const wall = wallBy(T.gripWall); return wall ? T.grips.map((g) => ({ kind: g.kind, line: g.line, i: g.i, guid: g.guid, handle: g.handle, s: g.s, z: g.z, page: pageOf(wall.guid, g.s, g.z) })) : []; },
    pageOf, openFace, profileAt,
    pagePlan: (guid, q) => { const wall = wallBy(guid), sp = wall ? space(wall) : null, v = viewer(); return sp && v ? v.project(sp.viewerOfPlan(q)) : null; },
    hitKey: (x, y) => viewer()?.hitAt(x, y)?.id ?? null,
    hit3d: (x, y) => { const v = viewer(), sn = snapNow(), h = v?.hitAt(x, y), wall = h ? sn?.walls.find((w) => keyOf(w) === h.id) : null, sp = wall ? space(wall) : null; return sp ? { guid: wall.guid, ...wallCoords(wall, sp.planOfViewer(h.point)) } : null; },
    keyOfGuid: (guid) => { const wall = wallBy(guid); return wall ? keyOf(wall) : null; },
  };
  return { openFace };
}
