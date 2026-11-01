/* SPDX-License-Identifier: Apache-2.0 */
/**
 * modify-ui.js — Move, Align and Distribute on the plan and on what is picked in 3D (0.8 D8.3, session `bim-08`), through
 * model-ui.js `extend()`. The names are CadCraft's (MOVE, ALIGN, DISTRIBUTE); M stays Measure, so Move's key is Shift+M.
 *   Move        [data-mtool="move"]        pick what to move (plan or 3D), click a base point, then a second point — or type a
 *                                          distance (along the pointer's direction), "dx,dy" (@ for relative) or "len<angle"; C
 *                                          switches Copy on and off (copies stay until Esc). Walls take their doors and windows,
 *                                          drawn floors their openings; columns and placed library items move by their point.
 *   Align       [data-mtool="align"]       left / centre / right / top / middle / bottom, to the picked set, its first or last
 *                                          element, or a clicked point; [data-mod-apply="align"]
 *   Distribute  [data-mtool="distribute"]  evenly by centres or by gaps, across or down; [data-mod-apply="distribute"]
 * Each is ONE model change (model-modify.js: undo, and Studio Live carry it). Test hook: window.bimcraftModify.
 */
import { ModelWriter } from './model-write.js';
import { movables, alignMoves, distributeMoves, moveElements } from './model-modify.js';
import { fmtLen, parseTyped } from './model-units.js';

export function mountModify(modelUi) {
  const R = { base: null, hover: null, copy: false, side: 'left', to: 'selection', axis: 'h', mode: 'gaps' };
  let A = null;
  const t = (...a) => A.t(...a);
  const L = (mm) => fmtLen(mm, A.S.units);
  const hint = (key) => { const h = A.root.querySelector('[data-model-hint]'); if (h) h.textContent = t(key); };
  const hintNow = () => {
    const sel = selected().length;
    hint(A.S.tool === 'move' ? (!sel ? 'model.hint.move' : R.base ? 'model.hint.move2' : 'model.hint.move1') : A.S.tool === 'align' ? (R.to === 'point' ? 'model.hint.alignpt' : 'model.hint.align') : 'model.hint.distribute');
  };

  /** What is picked that Move / Align / Distribute can work on, in pick order, with its box in plan mm. */
  function selected() {
    const ed = A?.ed();
    if (!ed) return [];
    const keys = [...(A.host.viewer()?.selection || [])], kb = A.kb();
    if (!keys.length) return [];
    const w = new ModelWriter(ed.W, ed.api, ed.mid), order = new Map(keys.map((k, i) => [k, i]));
    const mine = [];
    for (const e of movables(w)) { const id = w.byGuid(e.guid); if (id != null && order.has(kb + id)) mine.push({ ...e, at: order.get(kb + id) }); }
    return mine.sort((a, b) => a.at - b.at);
  }
  const snap = (p, e) => A.snapAt(p, e).p;
  const label = (n) => (n === 1 ? t('model.move.one') : t('model.move.n', { n }));

  function run(moves, copy, verb) {
    if (!moves.length) { A.host.status(t('model.move.nothing'), true); return false; }
    A.commit(moveElements(moves, { copy }), { label: label(moves.length), verb: t(verb) });
    return true;
  }
  function moveBy(d) {
    const sel = selected();
    if (!sel.length) { A.host.status(t('model.move.pick'), true); return false; }
    if (!(Math.abs(d[0]) + Math.abs(d[1]) > 0)) { A.host.status(t('model.move.zero'), true); return false; }
    const ok = run(sel.map((e) => ({ guid: e.guid, dx: d[0], dy: d[1] })), R.copy, R.copy ? 'model.verb.copied' : 'model.verb.moved');
    R.base = null; hintNow();
    return ok;
  }
  function align(point = null) {
    const sel = selected();
    if (sel.length < (R.to === 'point' ? 1 : 2)) { A.host.status(t('model.move.pick2'), true); return false; }
    const m = alignMoves(sel, { side: R.side, to: R.to, point });
    if (!m.size) { A.host.status(t('model.move.aligned')); return true; }
    return run([...m].map(([guid, [dx, dy]]) => ({ guid, dx, dy })), false, 'model.verb.aligned');
  }
  function distribute() {
    const sel = selected();
    if (sel.length < 3) { A.host.status(t('model.move.pick3'), true); return false; }
    const m = distributeMoves(sel, { axis: R.axis, mode: R.mode });
    if (!m.size) { A.host.status(t('model.move.even')); return true; }
    return run([...m].map(([guid, [dx, dy]]) => ({ guid, dx, dy })), false, 'model.verb.distributed');
  }

  /** D8.3: Move's points inside the 3D view — the pointer meets the plane at the level's height (host.pointer3d). */
  function pick3d(e) {
    const v = A.host.viewer(), id = v && e && e.clientX !== undefined ? v.hitAt(e.clientX, e.clientY)?.id ?? null : null;
    if (id === null) { A.host.status(t('model.move.pick'), true); return; }
    const cur = new Set(v.selection || []);
    if (e.shiftKey || e.ctrlKey || e.metaKey) { if (cur.has(id)) cur.delete(id); else cur.add(id); } else { cur.clear(); cur.add(id); }
    A.host.select([...cur]);
  }
  const in3d = {
    move(p) {
      if (!p) return;
      R.hover = [Math.round(p[0]), Math.round(p[1])];
      if (R.base) A.host.status(L(Math.hypot(R.hover[0] - R.base[0], R.hover[1] - R.base[1])) + (R.copy ? '  ' + t('model.move.copy') : ''));
    },
    click(p, e) {
      if (!p || !selected().length || e.shiftKey || e.ctrlKey || e.metaKey) { pick3d(e); hintNow(); return; }
      const q = [Math.round(p[0]), Math.round(p[1])];
      if (!R.base) { R.base = q; hintNow(); return; }
      moveBy([q[0] - R.base[0], q[1] - R.base[1]]);
    },
  };
  function sync3d(name) { if (typeof A.host.pointer3d === 'function') A.host.pointer3d(name === 'move' ? (A.level()?.elevation ?? 0) : 0, name === 'move' ? in3d : null); }

  function bindRows() {
    const q = (s) => A.root.querySelector(s);
    for (const [sel, key] of [['[data-mod-side]', 'side'], ['[data-mod-to]', 'to'], ['[data-mod-axis]', 'axis'], ['[data-mod-mode]', 'mode']]) {
      const f = q(sel); if (f && !f.dataset.bound) { f.dataset.bound = '1'; f.value = R[key]; f.addEventListener('change', () => { R[key] = f.value; hintNow(); A.drawOverlay(); }); }
    }
    for (const b of A.root.querySelectorAll('[data-mod-apply]')) if (!b.dataset.bound) { b.dataset.bound = '1'; b.addEventListener('click', () => (b.dataset.modApply === 'align' ? align() : distribute())); }
    const c = q('[data-mod-copy]'); if (c && !c.dataset.bound) { c.dataset.bound = '1'; c.addEventListener('click', () => toggleCopy()); }
    if (c) c.setAttribute('aria-pressed', R.copy ? 'true' : 'false');
  }
  function toggleCopy() { R.copy = !R.copy; bindRows(); A.host.status(t(R.copy ? 'model.move.copyon' : 'model.move.copyoff')); A.drawOverlay(); }

  A = modelUi.extend({
    tools: ['move', 'align', 'distribute'],
    hint: (name) => 'model.hint.' + name,
    typed: (name, text) => {
      if (name !== 'move') return text === undefined ? false : false;
      if (text === undefined) return true;   // the tool takes typed values: the field stays
      const v = parseTyped(text, A.S.units);
      if (!v) { A.host.status(t('model.err.typed'), true); return false; }
      if (v.kind === 'rel') return moveBy([v.dx, v.dy]);
      if (v.kind === 'polar') return moveBy([v.len * Math.cos(v.angle * Math.PI / 180), v.len * Math.sin(v.angle * Math.PI / 180)]);
      if (v.kind === 'abs') { if (!R.base) { A.host.status(t('model.move.base'), true); return false; } return moveBy([v.x - R.base[0], v.y - R.base[1]]); }
      // a distance: along the direction from the base point to the pointer
      if (!R.base || !R.hover) { A.host.status(t('model.move.base'), true); return false; }
      const dx = R.hover[0] - R.base[0], dy = R.hover[1] - R.base[1], d = Math.hypot(dx, dy) || 1;
      return moveBy([dx / d * v.len, dy / d * v.len]);
    },
    move(p, e) { R.hover = A.S.tool === 'move' || R.to === 'point' ? snap(p, e) : null; },
    click(p, e) {
      const tool = A.S.tool;
      if (tool === 'move') {
        if (!selected().length) {
          const k = e && e.clientX !== undefined ? A.pv().hit(e.clientX, e.clientY) : null;
          if (k !== null) { const cur = new Set(A.host.viewer()?.selection || []); if (e.shiftKey || e.ctrlKey) cur.add(k); else { cur.clear(); cur.add(k); } A.host.select([...cur]); }
          else A.host.status(t('model.move.pick'), true);
          hintNow(); return;
        }
        const q = snap(p, e);
        if (!R.base) { R.base = q; hintNow(); return; }
        moveBy([q[0] - R.base[0], q[1] - R.base[1]]);
      } else if (tool === 'align') {
        if (R.to === 'point') align(snap(p, e));
        else if (!selected().length) { const k = e && e.clientX !== undefined ? A.pv().hit(e.clientX, e.clientY) : null; if (k !== null) { const cur = new Set(A.host.viewer()?.selection || []); cur.add(k); A.host.select([...cur]); } }
      } else if (tool === 'distribute' && !selected().length) { const k = e && e.clientX !== undefined ? A.pv().hit(e.clientX, e.clientY) : null; if (k !== null) A.host.select([k]); }
    },
    escape() {
      if (A.S.tool !== 'move' || !R.base) return false;
      R.base = null; hintNow(); return true;
    },
    key(e, low) {
      if (low === 'm' && e.shiftKey) { A.setTool('move'); return true; }   // M stays Measure (bimcraft.js)
      if (A.S.tool === 'move' && low === 'c' && !e.shiftKey) { toggleCopy(); return true; }
      if (A.S.tool === 'move' && e.key === 'Enter' && R.base && R.hover) return moveBy([R.hover[0] - R.base[0], R.hover[1] - R.base[1]]) || true;
      return false;
    },
    toolChanged(name) { R.base = null; R.hover = null; sync3d(name); if (['move', 'align', 'distribute'].includes(name)) { bindRows(); hintNow(); } },
    overlay(o) {
      if (A.S.tool !== 'move' || !R.base || !R.hover) return;
      const d = [R.hover[0] - R.base[0], R.hover[1] - R.base[1]];
      o.points.push(R.base);
      o.lines.push([R.base[0], R.base[1], R.hover[0], R.hover[1]]);
      for (const e of selected()) { const b = e.box; o.dashed.push([b.minX + d[0], b.minY + d[1], b.maxX + d[0], b.minY + d[1]], [b.maxX + d[0], b.minY + d[1], b.maxX + d[0], b.maxY + d[1]], [b.maxX + d[0], b.maxY + d[1], b.minX + d[0], b.maxY + d[1]], [b.minX + d[0], b.maxY + d[1], b.minX + d[0], b.minY + d[1]]); }
      o.hud = { p: R.hover, text: L(Math.hypot(d[0], d[1])) + (R.copy ? '  ' + t('model.move.copy') : '') };
    },
    refresh() { bindRows(); },
  });
  bindRows();
  // for tests and for the commands when Draw is off: the same actions without the pointer
  window.bimcraftModify = { state: R, in3d, sync3d, selected, moveBy, align, distribute, setCopy: (v) => { R.copy = !!v; bindRows(); } };
  return A;
}
