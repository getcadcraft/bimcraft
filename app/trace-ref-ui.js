/* SPDX-License-Identifier: Apache-2.0 */
/**
 * trace-ref-ui.js — Trace Reference on the plan (0.8 SU.1055, session `bim-08`), through model-ui.js `extend()`:
 *   Trace  [data-mtool="traceref"]  choose another level: its walls, columns and floors show dashed under this plan, never picked
 *          or printed. Move it with two clicks (base point, then where it goes) or type X and Y; turn it by an angle; Reset.
 * Kept per level in this browser (localStorage `bimcraft.traceref`), not in the IFC. The geometry is trace-ref.js.
 * Test hook: window.bimcraftTraceRef = { state, set }.
 */
import { ModelWriter } from './model-write.js';
import { movables } from './model-modify.js';
import { referenceSegs, fitOffset, placeSegs, clipSegs, parseRef } from './trace-ref.js';
import { underlaySegments, calloutRoot } from './views-model.js';
import { fmtLen, parseLen } from './model-units.js';

const KEY = 'bimcraft.traceref';
const load = () => { try { return JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch { return {}; } };
const save = (o) => { try { localStorage.setItem(KEY, JSON.stringify(o)); } catch { /* private window: this session only */ } };

export function mountTraceRef(modelUi) {
  const R = { all: load(), base: null, hover: null, cache: new Map() };
  let A = null;
  const t = (...a) => A.t(...a);
  const hint = (key) => { const h = A.root.querySelector('[data-model-hint]'); if (h) h.textContent = t(key); };
  const levelGuid = () => (A.S.data?.levels || []).find((l) => l.id === A.S.level)?.guid;
  const mine = () => R.all[levelGuid()] || null;
  const set = (patch) => { const g = levelGuid(); if (!g) return; const cur = mine() || { ref: '', dx: 0, dy: 0, angle: 0 }; R.all[g] = { ...cur, ...patch }; if (!R.all[g].ref) delete R.all[g]; save(R.all); R.cache.clear(); A.buildScene(); fill(); };

  /** The reference level's parts in plan mm: walls with their thickness, the other elements as boxes. */
  function partsOf(levelId) {
    if (R.cache.has(levelId)) return R.cache.get(levelId);
    const walls = A.wallsOn(levelId).map((w) => ({ a: w.a, b: w.b, t: w.t }));
    let boxes = [];
    try { const ed = A.ed(); boxes = movables(new ModelWriter(ed.W, ed.api, ed.mid), levelId).filter((e) => e.kind !== 'wall' && e.kind !== 'item').map((e) => e.box); } catch { boxes = []; }
    const p = { walls, boxes };
    R.cache.set(levelId, p);
    return p;
  }
  /** A ceiling plan's or a callout's drawing as plan mm (cached until the model changes); null when its level or callout is gone. */
  const IDENT = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
  function viewSegs(r) {
    const key = r.kind + ':' + (r.id || r.level);
    if (R.cache.has(key)) return R.cache.get(key);
    let segs = null;
    try {
      const levels = A.S.data?.levels || [];
      if (r.kind === 'rcp') {
        const lv = levels.find((l) => l.guid === r.level);
        if (lv && lv.id !== A.S.level) segs = underlaySegments(A.sceneFor(lv.id, 'rcp'), IDENT);
      } else {
        const cos = window.bimcraftViews?.state?.callouts || [], co = cos.find((x) => x.id === r.id);
        const root = co && calloutRoot(cos, co.id, new Set(levels.map((l) => l.guid)));
        const lv = root && levels.find((l) => l.guid === root.level);
        if (lv && lv.id !== A.S.level) segs = clipSegs(underlaySegments(A.sceneFor(lv.id, root.kind === 'rcp' ? 'rcp' : 'plan', co.id), IDENT), co.crop);
      }
    } catch { segs = null; }
    R.cache.set(key, segs);
    return segs;
  }
  function fill() {
    const q = (s) => A.root.querySelector(s);
    const sel = q('[data-tr-level]');
    if (!sel) return;
    const cur = mine(), levels = (A.S.data?.levels || []).filter((l) => l.id !== A.S.level);
    const cos = (window.bimcraftViews?.state?.callouts || []);
    const opts = [new Option(t('model.trace.none'), ''), ...levels.map((l) => new Option(l.name, l.guid)), ...(A.S.data?.levels || []).map((l) => new Option(t('model.trace.rcp', { level: l.name }), 'rcp:' + l.guid)), ...cos.map((c) => new Option(t('model.trace.callout', { name: c.name }), 'co:' + c.id))];
    sel.replaceChildren(...opts);
    sel.value = cur?.ref && opts.some((o) => o.value === cur.ref) ? cur.ref : '';
    const u = A.S.units;
    if (document.activeElement !== q('[data-tr-x]')) q('[data-tr-x]').value = fmtLen(cur?.dx || 0, u);
    if (document.activeElement !== q('[data-tr-y]')) q('[data-tr-y]').value = fmtLen(cur?.dy || 0, u);
    if (document.activeElement !== q('[data-tr-angle]')) q('[data-tr-angle]').value = String(cur?.angle || 0);
  }
  function bind() {
    const q = (s) => A.root.querySelector(s);
    const sel = q('[data-tr-level]');
    if (!sel || sel.dataset.bound) return;
    sel.dataset.bound = '1';
    sel.addEventListener('change', () => set({ ref: sel.value }));
    const num = (el, key, parse) => el.addEventListener('change', () => { const v = parse(el.value); if (Number.isFinite(v)) set({ [key]: v }); else fill(); });
    num(q('[data-tr-x]'), 'dx', (v) => parseLen(v, A.S.units));
    num(q('[data-tr-y]'), 'dy', (v) => parseLen(v, A.S.units));
    num(q('[data-tr-angle]'), 'angle', (v) => parseFloat(v));
    q('[data-tr-reset]').addEventListener('click', () => set({ dx: 0, dy: 0, angle: 0 }));
    q('[data-tr-off]').addEventListener('click', () => set({ ref: '' }));
  }

  A = modelUi.extend({
    tools: ['traceref'],
    hint: () => 'model.hint.traceref',
    typed: () => false,
    scene(scene) {
      const c = mine();
      if (!c || !c.ref) return;
      const r = parseRef(c.ref);
      if (r?.kind === 'rcp' || r?.kind === 'callout') {   // another VIEW: its drawing (a callout: cut to its crop), as the view shows it
        const raw = viewSegs(r);
        if (raw) scene.trace = { segs: placeSegs(raw, c) };
        return;
      }
      const lv = (A.S.data?.levels || []).find((l) => l.guid === c.ref);
      if (!lv) return;
      const p = partsOf(lv.id);
      scene.trace = { segs: referenceSegs(p.walls, p.boxes, c) };
    },
    move(p, e) { R.hover = A.snapAt(p, e).p; },
    click(p, e) {
      if (!mine()?.ref) { A.host.status(t('model.trace.pick'), true); return; }
      const q = A.snapAt(p, e).p;
      if (!R.base) { R.base = q; hint('model.hint.traceref2'); return; }
      const d = fitOffset(R.base, q), c = mine();
      R.base = null; hint('model.hint.traceref');
      set({ dx: (c.dx || 0) + d.dx, dy: (c.dy || 0) + d.dy });
    },
    escape() { if (A.S.tool !== 'traceref' || !R.base) return false; R.base = null; hint('model.hint.traceref'); return true; },
    toolChanged(name) { R.base = null; R.hover = null; if (name === 'traceref') { bind(); fill(); } },
    refresh() { R.cache.clear(); bind(); fill(); },
    overlay(o) {
      if (A.S.tool !== 'traceref' || !R.base || !R.hover) return;
      o.points.push(R.base); o.lines.push([R.base[0], R.base[1], R.hover[0], R.hover[1]]);
      o.hud = { p: R.hover, text: fmtLen(Math.hypot(R.hover[0] - R.base[0], R.hover[1] - R.base[1]), A.S.units) };
    },
  });
  bind();
  window.bimcraftTraceRef = { state: R, set };
  return A;
}
