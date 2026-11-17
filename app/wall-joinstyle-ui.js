/* SPDX-License-Identifier: Apache-2.0 */
/**
 * wall-joinstyle-ui.js — the Join tools on BimCraft's plan (0.9 WT.5 Join style and Layer priority, FX.70 Disallow join as a tool; session
 * walls-join-10), through model-ui.js extend(); mounted by wall-tools-ui.js. The rules are lib/walls (dev/walls/joinstyle.js, layerjoin.js),
 * the ops wall-joinstyle.js. Every change is one undo step and ends in the join solver's settle step.
 *
 *   Edit › Walls › Join style (wjoinstyle): click a corner (two straight walls, end + end): mitre → butt → square off → mitre. The row holds
 *     the Style list of the corner clicked last and Next (Tab): the other wall runs through. A crossing (X): a click or Next switches which
 *     wall is continuous (the layer clean-up reads it). A T has no choice.
 *   Edit › Walls › Disallow join (wdisjoin): click near a wall end: that end is freed (Disallow join), or joined again. Free ends are marked.
 *   Edit › Walls › Layer priority: opens the wall assembly of the picked wall (else the Wall tool's type), where each layer has its priority.
 *   Properties of one wall: Join style at start / at end (+ Runs through), and "Where it crosses" for each crossing wall.
 *   Settings › BimCraft › Walls: Clean layers at junctions (on by default; localStorage bimcraft.walls `prio`).
 * Test hook: window.bimcraftWallJoins = { state, places }.
 */
import { joinPlaces, nearestJoin, wallEndAt, nextChoice, otherThrough, setJoinStyle } from './wall-joinstyle.js';
import { changeWall } from './model-ops.js';
import { el } from './ui-util.js';

const STORE = 'bimcraft.walls';
const TOOLS = ['wjoinstyle', 'wdisjoin'];
const readStore = () => { try { const v = JSON.parse(localStorage.getItem(STORE) || '{}'); return v && typeof v === 'object' ? v : {}; } catch (e) { return {}; } };
const writeStore = (v) => { try { localStorage.setItem(STORE, JSON.stringify(v)); } catch (e) { /* this tab keeps it */ } };

export function mountWallJoins(modelUi) {
  let A = null;
  const R = { at: null, join: null };   // join: the key of the corner clicked last
  const t = (k, v) => A.t(k, v);
  const tool = () => A.S.tool;
  const status = (k, v, err = false) => A.host.status(t(k, v), err);
  const places = () => joinPlaces(A.wallsHere());
  const tol = () => A.pv().pxToMm(16);
  const styleName = (s) => t('walls.join.' + s);
  const picked = () => (R.join ? places().find((j) => j.key === R.join) || null : null);
  let ui = { style: null, next: null };

  function apply(j, choice) {
    R.join = j.key;
    A.commit(setJoinStyle(j.key, choice), { label: t('walls.tool.joinstyle'), verb: t('model.verb.changed'), select: [] });
    status(j.can === 'through' ? 'walls.join.crossnow' : 'walls.join.now', { style: styleName(choice.style) });
  }
  function clickStyle(p) {
    const j = nearestJoin(places(), p, tol());
    if (!j) { status('walls.err.nojoin', null, true); return; }
    if (j.can === 'style') apply(j, nextChoice(j));
    else if (j.can === 'through') apply(j, otherThrough(j));
    else { R.join = null; syncRow(); status(j.kind === 'T' ? 'walls.err.tjoin' : 'walls.err.nostyle', null, true); }
  }
  function next() {
    const j = picked();
    if (!j) { status('walls.join.none', null, true); return; }
    const c = otherThrough(j);
    if (!c) { status(j.can === 'style' ? 'walls.join.mitrenext' : 'walls.err.tjoin', null, true); return; }
    apply(j, c);
  }
  function clickDisjoin(p) {
    const e = wallEndAt(A.wallsHere(), p, tol());
    if (!e) { status('walls.err.noend', null, true); return; }
    A.commit(changeWall(e.guid, { joinAllowed: { [e.end]: e.off } }), { label: t(e.off ? 'walls.tool.allowjoin' : 'walls.tool.disjoin'), verb: t('model.verb.changed'), select: [] });
    status(e.off ? 'walls.join.allowed' : 'walls.join.freed');
  }
  function syncRow() {
    const j = picked();
    if (ui.style) { ui.style.disabled = !j || j.can !== 'style'; ui.style.value = j && j.can === 'style' ? j.style : 'mitre'; }
    if (ui.next) ui.next.disabled = !j || !otherThrough(j);
  }
  function overlay(o) {
    if (!TOOLS.includes(tool()) || !A.pv()) return;
    const r = A.pv().pxToMm(5), cross = (c) => ({ lines: [[c[0] - r, c[1] - r, c[0] + r, c[1] + r], [c[0] - r, c[1] + r, c[0] + r, c[1] - r]] });
    if (tool() === 'wdisjoin') {
      for (const w of A.wallsHere()) for (const end of ['a', 'b']) if (w.joinOff?.[end]) o.symbols.push(cross(w[end]));   // the free ends
      const e = R.at ? wallEndAt(A.wallsHere(), R.at, tol()) : null;
      if (e) { o.points.push(e.p); o.hud = { p: R.at, text: t(e.off ? 'walls.tool.allowjoin' : 'walls.tool.disjoin') }; }
      return;
    }
    const all = places(), hover = R.at ? nearestJoin(all, R.at, tol()) : null, sel = picked();
    for (const j of [sel, hover]) {
      if (!j) continue;
      o.points.push(j.at);
      const th = j.can === 'through' ? (j.through || null) : j.style !== 'mitre' ? j.through : null, poly = th ? A.S.outlines?.get(th) : null;
      if (poly) o.dashed.push(...poly.map((q, i) => [...q, ...poly[(i + 1) % poly.length]]));   // the wall that runs through
    }
    if (hover) o.hud = { p: R.at, text: hover.can === 'style' ? styleName(hover.style) : hover.can === 'through' ? t('walls.join.cross') : t(hover.kind === 'T' ? 'walls.join.tee' : 'walls.join.fixed') };
  }

  // ---- Properties of one wall: the style of each corner it has, and which wall is continuous where it crosses another ----
  function wallProps(w, k) {
    const all = places();
    for (const [end, pos] of [['a', 'start'], ['b', 'end']]) {
      const j = all.find((x) => x.kind === 'L' && x.can === 'style' && ((x.a === w.guid && x.key.includes(w.guid + ':' + pos)) || (x.b === w.guid && x.key.includes(w.guid + ':' + pos))));
      if (!j) continue;
      const other = j.a === w.guid ? j.b : j.a;
      k.field(t('walls.prop.joinstyle.' + pos), k.select([['mitre', styleName('mitre')], ['butt', styleName('butt')], ['square', styleName('square')]], j.style, 'data-mp-joinstyle-' + end,
        (v) => { if (v && v !== j.style) A.commit(setJoinStyle(j.key, { style: v, through: j.through || w.guid }), k.one(k.title)); }));
      if (j.style !== 'mitre') k.field(t('walls.prop.through.' + pos), k.select([['this', t('walls.join.this')], ['other', t('walls.join.other')]], j.through === w.guid ? 'this' : 'other', 'data-mp-through-' + end,
        (v) => { const g = v === 'this' ? w.guid : other; if (v && g !== j.through) A.commit(setJoinStyle(j.key, { style: j.style, through: g }), k.one(k.title)); }));
    }
    for (const j of all.filter((x) => x.kind === 'X' && (x.a === w.guid || x.b === w.guid))) {
      const other = j.a === w.guid ? j.b : j.a;
      k.field(t('walls.prop.cross'), k.select([['', t('walls.join.auto')], ['this', t('walls.join.this')], ['other', t('walls.join.other')]], !j.through ? '' : j.through === w.guid ? 'this' : 'other', 'data-mp-cross',
        (v) => A.commit(setJoinStyle(j.key, v ? { style: 'butt', through: v === 'this' ? w.guid : other } : { style: 'mitre' }), k.one(k.title))));
    }
  }

  A = modelUi.extend({
    tools: TOOLS,
    hint: (name) => ({ wjoinstyle: 'walls.hint.joinstyle', wdisjoin: 'walls.hint.disjoin' })[name],
    move(p) { R.at = p; },
    click(p) { if (tool() === 'wjoinstyle') clickStyle(p); else if (tool() === 'wdisjoin') clickDisjoin(p); },
    key(e) { if (tool() === 'wjoinstyle' && e.key === 'Tab') { e.preventDefault(); next(); return true; } return false; },
    escape() { if (tool() !== 'wjoinstyle' || !R.join) return false; R.join = null; syncRow(); return true; },
    toolChanged() { R.join = null; syncRow(); },
    refresh() { syncRow(); },
    overlay,
    wallProps,
  });

  // ---- the Join style row: the style of the corner clicked last, and Next ----
  const bar = A.root.querySelector('[data-mopts="wall"]')?.parentElement;
  if (bar) {
    ui.style = el('select', { className: 'bc-mb-select', 'data-join-style': '', 'aria-label': t('walls.join.style'), disabled: true }, ...['mitre', 'butt', 'square'].map((s) => el('option', { value: s }, styleName(s))));
    ui.style.addEventListener('change', () => { const j = picked(); if (j && j.can === 'style') apply(j, { style: ui.style.value, through: j.through || j.a }); });
    ui.next = el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-join-next': '', title: t('walls.join.next.title'), disabled: true }, t('walls.join.next'));
    ui.next.addEventListener('click', next);
    bar.append(el('div', { className: 'bc-modelbar-row', 'data-mopts': 'wjoinstyle', hidden: true }, el('label', { className: 'bc-mb-field' }, el('span', {}, t('walls.join.style') + ' '), ui.style), ui.next));
  }
  // ---- Layer priority: the assembly editor of the picked wall's type (each layer's priority is set there) ----
  A.root.querySelector('[data-wall-layerprio]')?.addEventListener('click', () => {
    const one = modelUi.wallsPicked?.() || [], w = one.length === 1 ? A.wallsHere().find((x) => x.guid === one[0]) : null;
    A.ask('openAssembly', w?.typeKey || undefined);
    for (const m of A.root.querySelectorAll('[data-wall-tools]')) if (m.open) m.open = false;
  });
  // ---- Settings › BimCraft › Walls: clean the layers at junctions by priority (on unless switched off) ----
  const box = document.querySelector('[data-walls-settings] [name="bcWallPrio"]');
  const setPrio = (on, save = true) => {
    A.S.layerPriority = on; if (box) box.checked = on;
    if (save) { const s = readStore(); s.prio = on ? 'on' : 'off'; writeStore(s); try { A.buildScene(); } catch (e) { /* the plan is not up yet */ } }
  };
  setPrio(readStore().prio !== 'off', false);
  box?.addEventListener('change', () => setPrio(box.checked));
  if (typeof window !== 'undefined') window.bimcraftWallJoins = { state: R, places, next };   // for tests
  return { state: R };
}
