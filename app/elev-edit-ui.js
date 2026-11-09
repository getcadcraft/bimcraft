/* SPDX-License-Identifier: Apache-2.0 */
/**
 * elev-edit-ui.js — edit in an elevation or a section (0.9 SU.1123, session `bim-views-09`), through model-ui.js `extend()`.
 * Project browser › Elevations / Sections: each row's Edit [data-pb-elevedit=<view key>] opens the view in a panel [data-ev-dialog]
 * (data-ev-key): the drawing the sheets show, and over it what can be changed:
 *   Select and move [data-ev-tool=select]  drag a wall along the view [data-ev-wall=<GlobalId>], a door or window along its wall and
 *                                          a window up or down [data-ev-opening], a level line up or down [data-ev-level], a note
 *                                          [data-ev-note]; Delete [data-ev-delete] removes the picked one
 *   Wall [data-ev-tool=wall]               sections only: two clicks along the section's plane, on the level under the first click
 *   Door / Window [data-ev-tool=door|window] a click on a wall that faces the view places one there (a window at that height)
 *   Note [data-ev-tool=note]               a click, then the words [data-ev-notetext]: kept in the file, drawn on the view's sheets
 *   Level [data-ev-tool=level]             a click at a height: a new level there, as tall as the gap to the level above
 *   Dimension [data-ev-tool=dim]           two clicks (they catch wall, opening and level edges): a horizontal or vertical dimension
 *                                          [data-ev-dim=<id>], kept in the file and drawn on the view's sheets; pick it and Delete
 * Every change is one undo step (Ctrl+Z works with the panel open); the panel draws again when the model has reloaded.
 * The ops are elev-edit.js. Test hook: window.bimcraftElevEdit = { state, open, close }.
 */
import { frameOf, viewItemsOf, moveWallInView, moveOpeningInView, moveLevelInView, wallInView, openingInView, levelInView, readViewDims, addViewDim, removeViewDim, snapTargets, snapTo, readViewNotes, addViewNote, changeViewNote, removeViewNote } from './elev-edit.js';
import { removeWalls, removeOpenings, snapshotModel } from './model-ops.js';
import { readSectionLines } from './res-sheets.js';
import { ModelWriter } from './model-write.js';
import { fmtLen } from './model-units.js';
import { el } from './ui-util.js';

const CSS = `.bc-dialog.bc-ev-dlg { width: min(96rem, calc(100vw - 2rem)); max-width: none; max-height: calc(100vh - 2rem); }
.bc-ev-bar { display: flex; flex-wrap: wrap; gap: .35rem; align-items: center; margin-bottom: .4rem; }
.bc-ev-bar [aria-pressed="true"] { background: var(--action); color: var(--sheet, #fff); border-color: var(--action); }
.bc-ev-stage:focus { outline: none; }
.bc-ev-stage { border: var(--pen-1, 1px) solid var(--line); background: var(--sheet, #fff); height: 62vh; position: relative; touch-action: none; }
.bc-ev-stage svg { width: 100%; height: 100%; display: block; }
.bc-ev-stage .ev-ln { stroke: var(--ink, #111); fill: none; vector-effect: non-scaling-stroke; stroke-width: 1; }
.bc-ev-stage .ev-cut { fill: var(--ink-2, #666); opacity: .45; }
.bc-ev-stage .ev-hit { fill: transparent; stroke: transparent; vector-effect: non-scaling-stroke; stroke-width: 2; cursor: move; }
.bc-ev-stage .ev-hit:hover, .bc-ev-stage .ev-hit[aria-selected="true"] { stroke: var(--action); fill: color-mix(in srgb, var(--action) 10%, transparent); }
.bc-ev-stage .ev-lv { stroke: var(--ink-2, #666); stroke-dasharray: 6 3; vector-effect: non-scaling-stroke; }
.bc-ev-stage .ev-lvhit { stroke: transparent; stroke-width: 10; vector-effect: non-scaling-stroke; cursor: ns-resize; }
.bc-ev-stage .ev-lvhit:hover, .bc-ev-stage .ev-lvhit[aria-selected="true"] { stroke: color-mix(in srgb, var(--action) 35%, transparent); }
.bc-ev-stage .ev-ghost { fill: none; stroke: var(--action); stroke-dasharray: 4 3; vector-effect: non-scaling-stroke; }
.bc-ev-stage text { font-family: var(--font, sans-serif); fill: var(--ink, #111); }
.bc-ev-stage .ev-notehit { cursor: move; }
.bc-ev-stage .ev-dimln { stroke: var(--ink-2, #666); vector-effect: non-scaling-stroke; stroke-width: 1; }
.bc-ev-stage .ev-dimhit { stroke: transparent; stroke-width: 10; vector-effect: non-scaling-stroke; cursor: pointer; }
.bc-ev-stage .ev-dim[aria-selected="true"] .ev-dimln { stroke: var(--action); stroke-width: 2; }`;

export function mountElevEdit(modelUi) {
  if (typeof document !== 'undefined' && !document.getElementById('bc-ev-css')) { const st = document.createElement('style'); st.id = 'bc-ev-css'; st.textContent = CSS; document.head.append(st); }
  const R = { key: null, dlg: null, tool: 'select', sel: null, drag: null, a: null, F: null, items: null, view: null, notes: [], dims: [] };
  let A = null;
  const t = (...a) => A.t(...a);
  const W = () => { const ed = A.ed(); return ed ? new ModelWriter(ed.W, ed.api, ed.mid) : null; };
  const icon = (c) => el('i', { className: 'bi ' + c, 'aria-hidden': 'true' });
  const NS = 'http://www.w3.org/2000/svg';
  const S = (tag, attrs = {}) => { const n = document.createElementNS(NS, tag); for (const [k, v] of Object.entries(attrs)) if (v !== null && v !== undefined) n.setAttribute(k, String(v)); return n; };
  const L = (mm) => fmtLen(mm, A.units());

  function frame() {
    const w = W(), snap = A.S.data || (A.ed() ? snapshotModel(A.ed()) : null);
    if (!w || !snap) return null;
    let sections = [];
    try { sections = readSectionLines(w); } catch (e) { sections = []; }
    return { F: frameOf(R.key, { levels: snap.levels, sections }), snap, w };
  }
  /** The drawing of the view: the same projection the sheets use (res-ui.js sheetInput). */
  function viewOf() {
    const input = A.ask('sheetInput');
    if (!input) return null;
    const [kind, ref] = [R.key.slice(0, R.key.indexOf(':')), R.key.slice(R.key.indexOf(':') + 1)];
    return ((kind === 'elevation' ? input.elevations : input.sections) || []).find((x) => x.ref === ref)?.view || null;
  }
  const hint = (k, fill) => { const h = R.dlg?.querySelector('[data-ev-hint]'); if (h) h.textContent = t(k, fill); };
  function commit(o, label) {
    let why = null;
    try { A.commit(o, { label, verb: t('model.verb.changed'), onError: (e, w) => { why = w; } }); } catch (e) { why = e.key ? t(e.key) : String(e.message || e); }
    if (why) { hint('model.ev.refused', { why }); A.host.status(why, true); }
    return !why;
  }
  function draw() {
    if (!R.dlg) return;
    const fr = frame();
    if (!fr?.F) { hint('model.ev.gone'); return; }
    R.F = fr.F; R.items = viewItemsOf(fr.F, fr.snap); R.view = viewOf(); R.notes = readViewNotes(fr.w, R.key); R.dims = readViewDims(fr.w, R.key);
    const svg = R.dlg.querySelector('[data-ev-svg]');
    const b = { ...(R.view?.bounds || (() => { const xs = R.items.walls.flatMap((x) => [x.x0, x.x1]), ys = R.items.walls.flatMap((x) => [x.y0, x.y1]); return xs.length ? { x0: Math.min(...xs) - 1000, x1: Math.max(...xs) + 1000, y0: Math.min(0, ...ys) - 1000, y1: Math.max(...ys) + 1000 } : { x0: -5000, x1: 5000, y0: -1000, y1: 6000 }; })()) };
    // dimensions and notes can sit outside the building: the panel's view grows to show them (a dimension's line stands out from what it measures)
    const room = Math.max(b.x1 - b.x0, b.y1 - b.y0) * 0.05 + 300;
    for (const dm of R.dims) { for (const q of [dm.a, dm.b]) { b.x0 = Math.min(b.x0, q[0] - room); b.x1 = Math.max(b.x1, q[0] + room); b.y0 = Math.min(b.y0, q[1] - room); b.y1 = Math.max(b.y1, q[1] + room); } }
    for (const n of R.notes) { b.x0 = Math.min(b.x0, n.x - room); b.x1 = Math.max(b.x1, n.x + room * 4); b.y0 = Math.min(b.y0, n.y - room); b.y1 = Math.max(b.y1, n.y + room); }
    const pad = Math.max(b.x1 - b.x0, b.y1 - b.y0) * 0.06 + 500;
    const vb = [b.x0 - pad, -(b.y1 + pad), b.x1 - b.x0 + 2 * pad, b.y1 - b.y0 + 2 * pad];
    svg.setAttribute('viewBox', vb.join(' '));
    R.vb = vb;
    const Y = (y) => -y;
    const g = S('g');
    let d = '';
    for (const l of R.view?.lines || []) d += 'M' + l[0].toFixed(1) + ' ' + Y(l[1]).toFixed(1) + 'L' + l[2].toFixed(1) + ' ' + Y(l[3]).toFixed(1);
    if (d) g.append(S('path', { class: 'ev-ln', d }));
    for (const c of R.view?.cuts || []) for (const lp of c.loops || []) { const pts = []; for (let i = 0; i + 1 < lp.length; i += 2) pts.push(lp[i].toFixed(1) + ',' + Y(lp[i + 1]).toFixed(1)); if (pts.length > 2) g.append(S('polygon', { class: 'ev-cut', points: pts.join(' ') })); }
    const fs = Math.max(120, vb[2] / 90);
    for (const lv of R.items.levels) {
      g.append(S('line', { class: 'ev-lv', x1: vb[0], x2: vb[0] + vb[2], y1: Y(lv.y), y2: Y(lv.y) }));
      const tx = S('text', { x: vb[0] + fs * 0.4, y: Y(lv.y) - fs * 0.3, 'font-size': fs }); tx.textContent = lv.name + '  ' + L(lv.y + R.F.base); g.append(tx);
      g.append(S('line', { class: 'ev-lvhit', 'data-ev-level': lv.guid, x1: vb[0], x2: vb[0] + vb[2], y1: Y(lv.y), y2: Y(lv.y), 'aria-selected': R.sel?.level === lv.guid ? 'true' : 'false' }));
    }
    for (const w of R.items.walls) g.append(S('rect', { class: 'ev-hit', 'data-ev-wall': w.guid, x: w.x0, y: Y(w.y1), width: Math.max(1, w.x1 - w.x0), height: Math.max(1, w.y1 - w.y0), 'aria-selected': R.sel?.wall === w.guid ? 'true' : 'false' }));
    for (const o of R.items.openings) g.append(S('rect', { class: 'ev-hit', 'data-ev-opening': o.guid, 'data-ev-kind': o.kind, x: o.x0, y: Y(o.y1), width: Math.max(1, o.x1 - o.x0), height: Math.max(1, o.y1 - o.y0), 'aria-selected': R.sel?.opening === o.guid ? 'true' : 'false' }));
    for (const n of R.notes) { const tx = S('text', { class: 'ev-notehit', 'data-ev-note': n.id, x: n.x, y: Y(n.y), 'font-size': fs * 1.1, 'font-weight': R.sel?.note === n.id ? '700' : '400' }); tx.textContent = n.text; g.append(tx); }
    for (const dm of R.dims) {
      const horiz = dm.a[1] === dm.b[1], o = vb[2] * 0.03 * (dm.off >= 0 ? 1 : -1), tk = fs * 0.5;
      const A = horiz ? [dm.a[0], dm.a[1] + o] : [dm.a[0] - o, dm.a[1]], B = horiz ? [dm.b[0], dm.b[1] + o] : [dm.b[0] - o, dm.b[1]];
      const sel = R.sel?.dim === dm.id;
      const dg = S('g', { 'data-ev-dim': dm.id, class: 'ev-dim', 'aria-selected': sel ? 'true' : 'false' });
      dg.append(S('line', { class: 'ev-dimhit', x1: A[0], y1: Y(A[1]), x2: B[0], y2: Y(B[1]) }), S('line', { class: 'ev-dimln', x1: dm.a[0], y1: Y(dm.a[1]), x2: A[0], y2: Y(A[1]) }), S('line', { class: 'ev-dimln', x1: dm.b[0], y1: Y(dm.b[1]), x2: B[0], y2: Y(B[1]) }), S('line', { class: 'ev-dimln', x1: A[0], y1: Y(A[1]), x2: B[0], y2: Y(B[1]) }));
      for (const q of [A, B]) dg.append(S('line', { class: 'ev-dimln', x1: q[0] - tk, y1: Y(q[1]) + tk, x2: q[0] + tk, y2: Y(q[1]) - tk }));
      const tx = S('text', { x: (A[0] + B[0]) / 2, y: Y((A[1] + B[1]) / 2) - fs * 0.3, 'font-size': fs, 'text-anchor': 'middle', 'font-weight': sel ? '700' : '400' }); tx.textContent = L(dm.len);
      dg.append(tx); g.append(dg);
    }
    svg.replaceChildren(g, S('g', { 'data-ev-ghost': '' }));
    R.dlg.querySelector('[data-ev-tool="wall"]').disabled = R.F.kind !== 'section';
    hint(R.tool === 'select' ? 'model.ev.hint.select' : 'model.ev.hint.' + R.tool);
  }
  const at = (e) => { const svg = R.dlg.querySelector('[data-ev-svg]'), m = svg.getScreenCTM(); if (!m) return [0, 0]; const p = new DOMPoint(e.clientX, e.clientY).matrixTransform(m.inverse()); return [p.x, -p.y]; };
  const snap10 = (v) => Math.round(v / 10) * 10;
  function down(e) {
    const p = at(e), tg = e.target;
    e.currentTarget.closest?.('.bc-ev-stage')?.focus({ preventScroll: true });
    if (R.tool === 'select') {
      const dim = tg.closest?.('[data-ev-dim]')?.dataset.evDim, wall = tg.closest?.('[data-ev-wall]')?.dataset.evWall, op = tg.closest?.('[data-ev-opening]')?.dataset.evOpening, lv = tg.closest?.('[data-ev-level]')?.dataset.evLevel, nt = tg.closest?.('[data-ev-note]')?.dataset.evNote;
      R.sel = dim ? { dim } : op ? { opening: op } : wall ? { wall } : nt ? { note: nt } : lv ? { level: lv } : null;
      if (R.sel && !R.sel.dim) { R.drag = { from: p, at: p }; e.currentTarget.setPointerCapture?.(e.pointerId); }
      draw();
      return;
    }
    if (R.tool === 'wall') {
      if (!R.a) { R.a = p; hint('model.ev.hint.wall2'); return; }
      const a = R.a; R.a = null;
      commit(wallInView(R.F, A.S.data, { x0: snap10(a[0]), x1: snap10(p[0]), y: a[1] }), t('model.tool.wall'));
      return;
    }
    if (R.tool === 'door' || R.tool === 'window') {
      const wall = tg.closest?.('[data-ev-wall]')?.dataset.evWall;
      if (!wall) { hint('model.ev.hint.pickwall'); return; }
      commit(openingInView(R.F, A.S.data, { wall, x: p[0], y: R.tool === 'window' ? Math.max(0, p[1] - 600) : 0, typeKey: R.tool === 'window' ? 'win-fixed' : 'door-single' }), t(R.tool === 'window' ? 'model.tool.window' : 'model.tool.door'));
      return;
    }
    if (R.tool === 'note') askNote(null, p);
    if (R.tool === 'level') {
      const n = (R.items.levels.length || 0) + 1;
      commit(levelInView(R.F, A.S.data, { y: p[1], name: t('model.ev.level.name', { n }) }), t('model.ev.what.newlevel'));
      return;
    }
    if (R.tool === 'dim') {
      const T = snapTargets(R.items), q = [snapTo(p[0], T.xs), snapTo(p[1], T.ys)];
      if (!R.a) { R.a = q; hint('model.ev.hint.dim2'); return; }
      const a = R.a; R.a = null;
      if (commit(addViewDim({ view: R.key, a, b: q }), t('model.ev.what.dim'))) setTool('dim');
    }
  }
  function move(e) {
    const p = at(e);
    const ghost = R.dlg?.querySelector('[data-ev-ghost]');
    if (R.tool === 'wall' && R.a && ghost) { ghost.replaceChildren(S('line', { class: 'ev-ghost', x1: R.a[0], y1: -R.a[1], x2: p[0], y2: -R.a[1] })); hint('model.ev.len', { len: L(Math.abs(p[0] - R.a[0])) }); return; }
    if (R.tool === 'dim' && R.a && ghost) {
      const T = snapTargets(R.items), q = [snapTo(p[0], T.xs), snapTo(p[1], T.ys)], horiz = Math.abs(q[0] - R.a[0]) >= Math.abs(q[1] - R.a[1]);
      ghost.replaceChildren(S('line', { class: 'ev-ghost', x1: R.a[0], y1: -R.a[1], x2: horiz ? q[0] : R.a[0], y2: horiz ? -R.a[1] : -q[1] }));
      hint('model.ev.len', { len: L(horiz ? Math.abs(q[0] - R.a[0]) : Math.abs(q[1] - R.a[1])) }); return;
    }
    if (R.tool === 'level' && ghost) { ghost.replaceChildren(S('line', { class: 'ev-ghost', x1: R.vb[0], x2: R.vb[0] + R.vb[2], y1: -snap10(p[1]), y2: -snap10(p[1]) })); hint('model.ev.atheight', { h: L(snap10(p[1]) + R.F.base) }); return; }
    if (!R.drag || !ghost) return;
    R.drag.at = p;
    const dx = snap10(p[0] - R.drag.from[0]), dy = snap10(p[1] - R.drag.from[1]);
    const it = R.sel.wall ? R.items.walls.find((x) => x.guid === R.sel.wall) : R.sel.opening ? R.items.openings.find((x) => x.guid === R.sel.opening) : null;
    if (it) ghost.replaceChildren(S('rect', { class: 'ev-ghost', x: it.x0 + dx, y: -(it.y1 + (R.sel.opening && it.kind === 'window' ? dy : 0)), width: it.x1 - it.x0, height: it.y1 - it.y0 }));
    else if (R.sel.level) ghost.replaceChildren(S('line', { class: 'ev-ghost', x1: R.vb[0], x2: R.vb[0] + R.vb[2], y1: -((R.items.levels.find((l) => l.guid === R.sel.level)?.y || 0) + dy), y2: -((R.items.levels.find((l) => l.guid === R.sel.level)?.y || 0) + dy) }));
    hint(R.sel.level ? 'model.ev.dy' : 'model.ev.dx', { dx: L(dx), dy: L(dy) });
  }
  function up() {
    if (!R.drag) return;
    const d = R.drag; R.drag = null;
    const dx = snap10(d.at[0] - d.from[0]), dy = snap10(d.at[1] - d.from[1]);
    if (!dx && !dy) return;
    const snap = A.S.data;
    if (R.sel?.wall && dx) commit(moveWallInView(R.F, snap, R.sel.wall, dx), t('model.ev.what.wall'));
    else if (R.sel?.opening) commit(moveOpeningInView(R.F, snap, R.sel.opening, dx, dy), t('model.ev.what.opening'));
    else if (R.sel?.level && dy) commit(moveLevelInView(snap, R.sel.level, dy), t('model.ev.what.level'));
    else if (R.sel?.note) { const n = R.notes.find((x) => x.id === R.sel.note); if (n) commit(changeViewNote(n.id, { x: n.x + dx, y: n.y + dy }), t('model.ev.what.note')); }
  }
  function remove() {
    const s = R.sel;
    if (!s) { hint('model.ev.hint.nothing'); return; }
    if (s.wall) commit(removeWalls([s.wall]), t('model.ev.what.wall'));
    else if (s.opening) commit(removeOpenings([s.opening]), t('model.ev.what.opening'));
    else if (s.note) commit(removeViewNote(s.note), t('model.ev.what.note'));
    else if (s.dim) commit(removeViewDim(s.dim), t('model.ev.what.dim'));
    else { hint('model.ev.nolevel'); return; }
    R.sel = null;
  }
  function askNote(id, p) {
    const n = id ? R.notes.find((x) => x.id === id) : null;
    const box = el('textarea', { className: 'bc-input', rows: 3, 'data-ev-notetext': '', maxLength: 400 }, n?.text || '');
    const dlg = el('dialog', { className: 'bc-dialog', 'data-ev-notedlg': '' }, el('form', { method: 'dialog' }, el('h2', { className: 'bc-h' }, t('model.ev.note')), box,
      el('p', { className: 'bc-lib-actions' }, el('button', { type: 'submit', className: 'btn-plot btn-sm-cc', value: 'ok', 'data-ev-noteok': '' }, t('model.co.ok')), el('button', { type: 'submit', className: 'btn-line btn-sm-cc', value: 'cancel' }, t('model.gp.cancel')))));
    dlg.addEventListener('close', () => {
      const v = box.value.trim(); dlg.remove();
      if (dlg.returnValue !== 'ok' || !v) return;
      if (n) commit(changeViewNote(n.id, { text: v }), t('model.ev.what.note')); else commit(addViewNote({ view: R.key, x: snap10(p[0]), y: snap10(p[1]), text: v }), t('model.ev.what.note'));
    });
    R.dlg.append(dlg); dlg.showModal();
  }
  function setTool(name) {
    R.tool = name; R.a = null; R.drag = null;
    for (const b of R.dlg.querySelectorAll('[data-ev-tool]')) b.setAttribute('aria-pressed', b.dataset.evTool === name ? 'true' : 'false');
    R.dlg.querySelector('[data-ev-ghost]')?.replaceChildren();
    hint('model.ev.hint.' + name);
  }
  function open(key) {
    if (!A.ed()) { A.host.status(t('model.needs.ifc'), true); return; }
    close();
    R.key = key; R.sel = null; R.tool = 'select';
    const name = globalThis.bimcraftViews?.api?.anyName?.(key) || key;
    const tool = (k, ic) => el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-ev-tool': k, 'aria-pressed': k === 'select' ? 'true' : 'false', onClick: () => setTool(k) }, icon(ic), ' ' + t('model.ev.tool.' + k));
    const stage = el('div', { className: 'bc-ev-stage', tabindex: '-1' });   // focusable, so a click in the view sends Delete and Esc to the panel's keys
    const svg = S('svg', { 'data-ev-svg': '', preserveAspectRatio: 'xMidYMid meet', role: 'img', 'aria-label': t('model.ev.title', { name }) });
    stage.append(svg);
    svg.addEventListener('pointerdown', down);
    svg.addEventListener('pointermove', move);
    svg.addEventListener('pointerup', up);
    svg.addEventListener('dblclick', (e) => { const nt = e.target.closest?.('[data-ev-note]')?.dataset.evNote; if (nt) askNote(nt, null); });
    const dlg = el('dialog', { className: 'bc-dialog bc-ev-dlg', 'data-ev-dialog': '', 'data-ev-key': key, 'aria-labelledby': 'bc-ev-h' },
      el('h2', { className: 'bc-h', id: 'bc-ev-h' }, t('model.ev.title', { name })),
      el('div', { className: 'bc-ev-bar' }, tool('select', 'bi-cursor'), tool('wall', 'bi-bricks'), tool('door', 'bi-door-open'), tool('window', 'bi-window'), tool('note', 'bi-fonts'), tool('level', 'bi-layers'), tool('dim', 'bi-rulers'),
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-ev-delete': '', onClick: remove }, icon('bi-trash'), ' ' + t('model.ev.delete')),
        el('span', { className: 'bc-muted', 'data-ev-hint': '', 'aria-live': 'polite' }),
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-ev-close': '', onClick: () => close() }, t('model.sh.close'))),
      stage, el('p', { className: 'bc-muted' }, t('model.ev.note.lede')));
    dlg.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') { if (R.tool !== 'select' || R.a) { e.preventDefault(); setTool('select'); } }
      else if ((e.ctrlKey || e.metaKey) && !e.shiftKey && e.key.toLowerCase() === 'z' && !/^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)) { e.preventDefault(); document.querySelector('[data-undo]')?.click(); }   // the page's own keys wait while a dialog is open
      else if ((e.key === 'Delete' || e.key === 'Backspace') && !/^(INPUT|TEXTAREA)$/.test(e.target.tagName)) { e.preventDefault(); remove(); }
    });
    dlg.addEventListener('close', () => { if (R.dlg === dlg) { R.dlg = null; R.key = null; } dlg.remove(); });
    A.root.append(dlg);
    R.dlg = dlg;
    dlg.showModal();
    draw();
  }
  function close() { if (R.dlg) R.dlg.close(); }

  A = modelUi.extend({
    elevationEditButton: (key) => el('button', { type: 'button', className: 'bc-pb-ic', 'data-pb-elevedit': key, title: t('model.ev.open'), 'aria-label': t('model.ev.open'), onClick: () => open(key) }, icon('bi-pencil-square')),
    refresh() { if (R.dlg && !R.drag) draw(); },
  });
  window.bimcraftElevEdit = { state: R, open, close, draw };
  return { open, close };
}
