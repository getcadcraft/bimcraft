/* SPDX-License-Identifier: Apache-2.0 */
/**
 * pens-ui.js — pen and line overrides per view (0.8 SU.1055, session `bim-08`), through model-ui.js `extend()`:
 *   Pens  [data-mtool="pens"]  "For": all walls / doors / windows, the type of the picked element, or the picked elements; a pen
 *         weight, a line (solid, dashed, dotted) and a colour; Apply adds the override to THIS level's plan, Clear removes them.
 * Walls get a second outline in the pen (model-planview.js); doors and windows take the weight and colour. Kept per level in this
 * browser (localStorage `bimcraft.pens`); not in the IFC, and not on the printed plan yet. "Show pen colours in 3D" [data-pen-3d] (round 5) paints the
 * colour pens on the model in the 3D view (pens.js penColors). The rules are pens.js.
 * Test hook: window.bimcraftPens = { state, add, clear }.
 */
import { cleanOverride, penFor, penColors } from './pens.js';

const KEY = 'bimcraft.pens';
const load = () => { try { const o = JSON.parse(localStorage.getItem(KEY) || '{}') || {}; return o && typeof o === 'object' ? o : {}; } catch { return {}; } };
const save = (o) => { try { localStorage.setItem(KEY, JSON.stringify(o)); } catch { /* private window: this session only */ } };

export function mountPens(modelUi) {
  const R = { all: load(), scope: 'wall', weight: 2.5, dash: 'solid', color: '', show3d: false, painted: false };
  let A = null;
  const t = (...a) => A.t(...a);
  const levelGuid = () => (A.S.data?.levels || []).find((l) => l.id === A.S.level)?.guid;
  const list = () => (R.all[levelGuid()] || []).map(cleanOverride).filter(Boolean);
  const put = (arr) => { const g = levelGuid(); if (!g) return; if (arr.length) R.all[g] = arr; else delete R.all[g]; save(R.all); A.buildScene(); fill(); paint3d(); };

  /** The scope the "For" list says: category, or the picked elements' type, or the picked elements themselves. */
  function scopesFor(choice) {
    if (['wall', 'door', 'window'].includes(choice)) return [{ by: 'category', value: choice }];
    const p = A.pickedElements();
    const D = A.S.data || {};
    const guids = [...p.walls, ...p.openings];
    if (choice === 'element') return guids.map((g) => ({ by: 'element', value: g }));
    const types = new Set(guids.map((g) => (D.walls || []).find((w) => w.guid === g)?.typeKey || (D.openings || []).find((o) => o.guid === g)?.typeKey).filter(Boolean));
    return [...types].map((v) => ({ by: 'type', value: v }));
  }
  function add() {
    const scopes = scopesFor(R.scope);
    if (!scopes.length) { A.host.status(t(['type', 'element'].includes(R.scope) ? 'model.pens.pick' : 'model.pens.none'), true); return false; }
    const next = list().filter((o) => !scopes.some((s) => s.by === o.scope.by && s.value === o.scope.value));
    for (const s of scopes) { const o = cleanOverride({ id: Math.random().toString(36).slice(2, 8), scope: s, weight: R.weight, dash: R.dash, color: R.color }); if (o) next.push(o); }
    put(next);
    A.host.status(t('model.pens.done', { n: scopes.length }));
    return true;
  }
  /** 0.8 SU.1055 round 5: the pens' colours on the model in the 3D view (viewer.setColors); a weight or a dash is a line's, so only the colour shows there. */
  function paint3d() {
    const v = A.host.viewer?.();
    if (!v?.setColors) return 0;
    if (!R.show3d) { if (R.painted) { v.setColors(null); R.painted = false; } return 0; }
    const hex = (tok) => { const c = getComputedStyle(document.documentElement).getPropertyValue(tok).trim(); return c || null; };
    const map = new Map();
    for (const [k, tok] of penColors(R.all, A.S.data, (id) => A.kb() + id)) { const c = hex(tok); if (c) map.set(k, c); }
    v.setColors(map.size ? map : null);
    R.painted = map.size > 0;
    return map.size;
  }
  function fill() {
    const q = (s) => A.root.querySelector(s);
    const n = q('[data-pen-count]');
    if (n) n.textContent = t('model.pens.count', { n: list().length });
  }
  function bind() {
    const q = (s) => A.root.querySelector(s);
    const sc = q('[data-pen-scope]');
    if (!sc || sc.dataset.bound) return;
    sc.dataset.bound = '1';
    for (const [sel, key, parse] of [['[data-pen-scope]', 'scope', String], ['[data-pen-weight]', 'weight', Number], ['[data-pen-dash]', 'dash', String], ['[data-pen-color]', 'color', String]]) {
      const f = q(sel); f.value = String(R[key]); f.addEventListener('change', () => { R[key] = parse(f.value); });
    }
    const c3 = q('[data-pen-3d]');
    if (c3) { c3.checked = R.show3d; c3.addEventListener('change', () => { R.show3d = c3.checked; const n = paint3d(); A.host.status(t(R.show3d ? (n ? 'model.pens.3d.on' : 'model.pens.3d.none') : 'model.pens.3d.off', { n })); }); }
    q('[data-pen-apply]').addEventListener('click', add);
    q('[data-pen-clear]').addEventListener('click', () => { put([]); A.host.status(t('model.pens.cleared')); });
  }

  A = modelUi.extend({
    tools: ['pens'],
    hint: () => 'model.hint.pens',
    typed: () => false,
    scene(scene) {
      const ov = list();
      if (!ov.length) return;
      const D = A.S.data || {};
      for (const w of scene.walls || []) {
        const src = (D.walls || []).find((x) => x.guid === w.guid);
        const pen = penFor(ov, { kind: 'wall', typeKey: src?.typeKey, guid: w.guid });
        if (pen) w.pen = pen;
      }
      for (const s of scene.symbols || []) {
        const src = (D.openings || []).find((x) => x.guid === s.guid);
        if (!src) continue;
        const pen = penFor(ov, { kind: src.kind === 'window' ? 'window' : 'door', typeKey: src.typeKey, guid: s.guid });
        if (pen) { if (pen.w) s.lw = pen.w; if (pen.color) s.color = pen.color; }
      }
    },
    toolChanged(name) { if (name === 'pens') { bind(); fill(); } },
    refresh() { bind(); fill(); if (R.show3d) paint3d(); },
  });
  bind();
  window.bimcraftPens = { state: R, add, clear: () => put([]), list, paint3d };
  return A;
}
