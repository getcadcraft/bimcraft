/* SPDX-License-Identifier: Apache-2.0 */
/**
 * drafting-ui.js — drafting lines and hatch regions on the plan (0.6 DC.117 (d), session `bim-views_PART_2`), through
 * model-ui.js extend(); mounted by views-ui.js, which says which view is shown (a floor plan, a ceiling plan or a callout).
 * Tools (the model bar's Annotate menu, ui.inc): Line [data-mtool="dline"] (two clicks a line, the next starts where it
 * ended), Polyline [dpoly] (clicks, Enter / double-click ends, a click on its first point closes it), Rectangle [drect] (two
 * corners), Hatch region [dhatch] (the outline's corners — Enter, a double-click or a click on the first corner closes it —, or
 * with "Fill a room" [data-dr-room] one click in a room fills its outline; pattern [data-dr-pattern], scale [data-dr-scale]),
 * Move [dmove] (from Properties: two points). Snaps as the Wall tool does (Shift = square), typed lengths in the Draw bar.
 * Each item is one undo step; Delete and Properties (pattern, scale, Move) through the plan's own selection.
 * IFC: drafting.js. Test hook: window.bimcraftDrafting = { state, api }.
 */
import { readDrafting, addDrafting, changeDrafting, moveDrafting, removeDrafting, draftingItem, PATTERNS } from './drafting.js';
import { loopAt } from './model-rooms.js';
import { ModelWriter } from './model-write.js';
import { fmtLen, parseTyped } from './model-units.js';

const TOOLS = ['dline', 'dpoly', 'drect', 'dhatch', 'dmove'];

export function mountDrafting(modelUi, views) {
  const D = { items: [], pts: [], at: null, pattern: 'diagonal', scale: 1, room: false, move: null, reselect: null };
  let A = null;
  const t = (...a) => A.t(...a);
  const W = () => (A.ed() ? new ModelWriter(A.ed().W, A.ed().api, A.ed().mid) : null);
  const L = (mm) => fmtLen(mm, A.units());
  const levelGuid = () => A.S.data?.levels.find((l) => l.id === A.S.level)?.guid || null;
  const closeTol = () => A.pv()?.pxToMm(10) || 150;

  // ---- the options row (ui.inc [data-mopts="dhatch"]) ----
  const $ = (s) => A.root.querySelector(s);
  function bindRow() {
    const pat = $('[data-dr-pattern]'), sc = $('[data-dr-scale]'), room = $('[data-dr-room]');
    if (pat && !pat.dataset.bound) { pat.dataset.bound = '1'; pat.addEventListener('change', () => { D.pattern = pat.value; }); }
    if (sc && !sc.dataset.bound) { sc.dataset.bound = '1'; sc.addEventListener('change', () => { const v = Number(String(sc.value).replace(',', '.')); if (Number.isFinite(v) && v > 0) D.scale = Math.min(50, Math.max(0.1, v)); sc.value = String(D.scale); }); }
    if (room && !room.dataset.bound) { room.dataset.bound = '1'; room.addEventListener('change', () => { D.room = room.checked; D.pts = []; A.drawOverlay(); }); }
    if (pat) pat.value = D.pattern;
    if (sc) sc.value = String(D.scale);
    if (room) room.checked = D.room;
  }

  // ---- making ----
  function commit(spec, label) {
    const view = views.viewKey(), level = levelGuid();
    if (!view || !level) return;
    A.commit(addDrafting({ ...spec, view, level }), { label, verb: t('model.verb.drew') });
  }
  const snap = (p, e) => A.snapFrom(p, e, D.pts[D.pts.length - 1] || null).p;
  function finish(close = false) {
    const tool = A.S.tool, pts = D.pts.slice();
    D.pts = [];
    if (tool === 'dpoly' && pts.length >= 2) commit({ kind: 'lines', pts, closed: close && pts.length >= 3 }, t('model.dr.line'));
    else if (tool === 'dhatch' && pts.length >= 3) commit({ kind: 'hatch', pts, pattern: D.pattern, scale: D.scale }, t('model.dr.hatch'));
    else if (tool === 'dhatch' && pts.length) A.host.status(t('model.err.dr.area'), true);
    A.drawOverlay();
  }
  function point(q) {
    const tool = A.S.tool;
    if (tool === 'dline') {
      if (!D.pts.length) { D.pts = [q]; return; }
      const a = D.pts[0];
      if (Math.hypot(q[0] - a[0], q[1] - a[1]) < 10) return;
      commit({ kind: 'lines', pts: [a, q] }, t('model.dr.line'));
      D.pts = [q];   // the next line starts where this one ended
      return;
    }
    if (tool === 'drect') {
      if (!D.pts.length) { D.pts = [q]; return; }
      const a = D.pts[0];
      D.pts = [];
      if (Math.abs(q[0] - a[0]) < 10 || Math.abs(q[1] - a[1]) < 10) { A.host.status(t('model.err.dr.short'), true); return; }
      commit({ kind: 'lines', pts: [a, [q[0], a[1]], q, [a[0], q[1]]], closed: true }, t('model.dr.rect'));
      return;
    }
    if (tool === 'dpoly' || tool === 'dhatch') {
      const f = D.pts[0];
      if (f && D.pts.length >= 3 && Math.hypot(q[0] - f[0], q[1] - f[1]) <= closeTol()) { finish(true); return; }
      const l = D.pts[D.pts.length - 1];
      if (l && Math.hypot(q[0] - l[0], q[1] - l[1]) < 1) return;
      D.pts.push(q);
    }
  }
  function fillRoom(p) {
    let loops = null;
    try { loops = A.loopsOf(A.S.level); } catch (e) { loops = null; }
    const lp = loops && (loopAt(loops.rooms, p) || loopAt(loops.outlines, p));
    if (!lp) { A.host.status(t('model.err.noroom'), true); return; }
    commit({ kind: 'hatch', pts: lp.poly, holes: lp.holes || [], pattern: D.pattern, scale: D.scale }, t('model.dr.hatch'));
  }

  // ---- the plan scene: this view's drafting ----
  function addScene(scene) {
    const key = views.viewKey(), r = A.viewRange?.();
    if (!key || [...(r?.hiddenClasses || [])].some((c) => c.toLowerCase() === 'ifcannotation')) return;
    const k = A.kb();
    scene.drafting = [...(scene.drafting || []), ...D.items.filter((d) => d.view === key).map((d) => draftingItem(d, k + d.id))];   // BK.104: kept what an earlier extension put there (site constraints)
  }
  function overlay(o) {
    const tool = A.S.tool;
    if (!TOOLS.includes(tool)) return;
    const at = D.at;
    if (at) o.snap = { p: at, kind: 'free' };
    if (tool === 'dmove') {
      if (D.move?.a && at) { o.points.push(D.move.a); o.dashed.push([D.move.a[0], D.move.a[1], at[0], at[1]]); o.hud = { p: at, text: L(Math.hypot(at[0] - D.move.a[0], at[1] - D.move.a[1])) }; }
      return;
    }
    if (tool === 'dhatch' && D.room) return;
    for (const q of D.pts) o.points.push(q);
    const pts = at ? [...D.pts, at] : D.pts;
    if (tool === 'drect' && D.pts.length && at) { const a = D.pts[0]; o.lines.push([a[0], a[1], at[0], a[1]], [at[0], a[1], at[0], at[1]], [at[0], at[1], a[0], at[1]], [a[0], at[1], a[0], a[1]]); o.hud = { p: at, text: L(Math.abs(at[0] - a[0])) + ' × ' + L(Math.abs(at[1] - a[1])) }; return; }   // i18n-ignore: width × height
    for (let i = 1; i < pts.length; i++) o.lines.push([pts[i - 1][0], pts[i - 1][1], pts[i][0], pts[i][1]]);
    if (tool === 'dhatch' && pts.length >= 3) o.dashed.push([pts[pts.length - 1][0], pts[pts.length - 1][1], pts[0][0], pts[0][1]]);
    if (D.pts.length && at) { const l = D.pts[D.pts.length - 1]; o.hud = { p: at, text: L(Math.hypot(at[0] - l[0], at[1] - l[1])) }; }
  }

  /** Drafting has no 3D shape, so the reload after a change drops it from the pick: pick it again once the model is back. */
  function reselectLater(ks) {
    D.reselect = ks;
    const go = (n) => setTimeout(() => {
      if (D.reselect !== ks) return;
      if ((A.S.busy || A.S.reloading || A.S.queue?.length) && n < 600) { go(n + 1); return; }
      D.reselect = null;
      const have = new Set(D.items.map((d) => A.kb() + d.id));
      A.host.select(ks.filter((k) => have.has(k)));
    }, 50);
    go(0);
  }
  const change = (op, meta) => { const ks = A.selectedKeys(); A.commit(op, meta); reselectLater(ks); };

  // ---- Properties ----
  function props(items, kit) {
    const list = items.map((x) => D.items.find((d) => d.guid === x.guid)).filter(Boolean);
    if (!list.length) return null;
    const guids = list.map((d) => d.guid), hatches = list.filter((d) => d.kind === 'hatch');
    const one = kit.one(list.length === 1 ? (list[0].kind === 'hatch' ? t('model.dr.hatch') : t('model.dr.line')) : t('model.dr.many', { n: list.length }));
    if (hatches.length === list.length) {
      const same = hatches.every((d) => d.pattern === hatches[0].pattern);
      kit.field(t('model.dr.pattern'), kit.select(PATTERNS.map((p) => [p.key, t('model.dr.pat.' + p.key)]), same ? hatches[0].pattern : '', 'data-mp-drpat', (v) => change(changeDrafting(guids, { pattern: v }), one)));
      const sc = kit.el('input', { type: 'text', className: 'bc-input bc-num', value: String(hatches[0].scale), 'data-mp-drscale': '', size: 5 });
      sc.addEventListener('change', () => { const v = Number(String(sc.value).replace(',', '.')); if (Number.isFinite(v) && v > 0) change(changeDrafting(guids, { scale: v }), one); else { A.host.status(t('model.err.dr.scale'), true); sc.value = sc.defaultValue; } });
      kit.field(t('model.dr.scale'), sc);
    }
    kit.field(t('model.dr.view'), kit.el('span', {}, views.viewName(list[0].view)));
    kit.field(t('model.dr.move'), kit.button(t('model.dr.move.go'), 'data-mp-drmove', () => { D.move = { guids, a: null }; A.setTool('dmove'); D.move = { guids, a: null }; }));
    return { title: list.length === 1 ? (list[0].kind === 'hatch' ? t('model.dr.hatch') : t('model.dr.line')) : t('model.dr.many', { n: list.length }) };
  }

  A = modelUi.extend({
    tools: TOOLS,
    hint: (name) => (name === 'dhatch' && D.room ? 'model.hint.dhatchroom' : name === 'dmove' && D.move?.a ? 'model.hint.dmove2' : 'model.hint.' + name),
    typed: (name, text) => {
      if (text === undefined) return name !== 'dmove';
      const v = parseTyped(text, A.units());
      if (!v) { A.host.status(t('model.err.typed'), true); return false; }
      const last = D.pts[D.pts.length - 1] || null;
      let q = null;
      if (v.kind === 'abs') q = [v.x, v.y];
      else if (!last) { A.host.status(t('model.typed.first'), true); return false; }
      else if (v.kind === 'rel') q = [last[0] + v.dx, last[1] + v.dy];
      else if (v.kind === 'polar') q = [last[0] + v.len * Math.cos(v.angle * Math.PI / 180), last[1] + v.len * Math.sin(v.angle * Math.PI / 180)];
      else { const to = D.at || [last[0] + 1, last[1]], d = Math.hypot(to[0] - last[0], to[1] - last[1]) || 1; q = [last[0] + (to[0] - last[0]) / d * v.len, last[1] + (to[1] - last[1]) / d * v.len]; }
      point(q);
      A.drawOverlay();
      return true;
    },
    move(p, e) { D.at = A.S.tool === 'dhatch' && D.room ? p.slice() : snap(p, e); },
    click(p, e) {
      const tool = A.S.tool;
      if (tool === 'dmove') {
        const q = A.snapFrom(p, e, D.move?.a || null).p;
        if (!D.move?.guids?.length) { A.setTool('select'); return; }
        if (!D.move.a) { D.move.a = q; const h = A.root.querySelector('[data-model-hint]'); if (h) h.textContent = t('model.hint.dmove2'); return; }
        const { guids, a } = D.move;
        D.move = null;
        A.setTool('select');
        const k = A.kb(), keys = D.items.filter((d) => guids.includes(d.guid)).map((d) => k + d.id);
        A.commit(moveDrafting(guids, q[0] - a[0], q[1] - a[1]), { label: guids.length === 1 ? t('model.dr.item') : t('model.dr.many', { n: guids.length }), verb: t('model.verb.moved') });
        reselectLater(keys);
        return;
      }
      if (tool === 'dhatch' && D.room) { fillRoom(p); return; }
      point(snap(p, e));
    },
    dbl() { if (A.S.tool === 'dpoly' || A.S.tool === 'dhatch') { if (D.pts.length > 1 && Math.hypot(D.pts[D.pts.length - 1][0] - D.pts[D.pts.length - 2][0], D.pts[D.pts.length - 1][1] - D.pts[D.pts.length - 2][1]) < closeTol()) D.pts.pop(); finish(A.S.tool === 'dhatch'); } },
    key(e) {
      if (!TOOLS.includes(A.S.tool)) return false;
      if (e.key === 'Enter' && D.pts.length) { if (A.S.tool === 'dline') { D.pts = []; A.drawOverlay(); } else finish(A.S.tool === 'dhatch'); return true; }
      if (e.key === 'Backspace' && D.pts.length) { D.pts.pop(); A.drawOverlay(); return true; }
      return false;
    },
    escape() { if (!TOOLS.includes(A.S.tool)) return false; if (D.pts.length) { D.pts = []; return true; } if (A.S.tool === 'dmove') { D.move = null; A.setTool('select'); return true; } return false; },
    toolChanged(name) { D.pts = []; D.at = null; if (name !== 'dmove') D.move = null; bindRow(); const m = A.root.querySelector('[data-annot-tools]'); if (m?.open && TOOLS.includes(name)) m.open = false; },
    overlay,
    scene: (scene) => addScene(scene),
    classes: /^IfcAnnotation$/,
    pick(key) {
      const k = A.kb(), d = D.items.find((x) => k + x.id === key);
      return d ? { kind: 'drafting', guid: d.guid, label: d.kind === 'hatch' ? t('model.dr.hatch') : t('model.dr.line') } : null;
    },
    props: (items, kit) => (items.every((x) => x.kind === 'drafting') ? props(items, kit) : null),
    remove(items) { return removeDrafting(items.filter((x) => x.kind === 'drafting').map((x) => x.guid)); },
    refresh() { const w = W(); try { D.items = w ? readDrafting(w) : []; } catch (e) { D.items = []; } },
  });
  const api = { state: D, items: () => D.items };
  if (typeof window !== 'undefined') window.bimcraftDrafting = { state: D, api };   // for tests
  return api;
}
