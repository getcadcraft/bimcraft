/* SPDX-License-Identifier: Apache-2.0 */
/**
 * model-site-constraints-ui.js: building lines and servitudes as tools on the plan (booklet row BK.104, session bk-stages-10),
 * through model-ui.js `extend()`. IFC and the check: model-site-constraints.js; the rules: ./sitelines/sitelines.js.
 *   Building line [data-mtool="bline"]   click its points, finish by double-click or Enter (on the first point = a closed line: the
 *                              area one may build in). The row: Name, Reference, and Setbacks… [data-sc-setbacks] → a dialog
 *                              [data-sc-dialog] with one distance per boundary edge (the edges are numbered on the plan while the
 *                              tool is on): the building line is worked out from them and follows the site outline.
 *   Servitude [data-mtool="servitude"]   click its centre line and finish (a strip of the Width in the row), or close it on its first
 *                              point (an area). The row: Kind, Name, Reference, Width.
 *   Picked (Select): Properties show Name, Reference, Kind, Width and Move; Delete removes it.
 * Drawn on every level's plan: building lines dashed, servitudes dotted, each with a label along its longest side.
 * A wall over the boundary, a building line or a servitude is a WARNING in the shell's Problems (source `bimcraft.site`); the
 * wall is drawn as asked, nothing is refused. Test hook: window.bimcraftSiteConstraints = { state, problems() }.
 */
import { optionFootprints } from './mass-options.js';
import { readConstraints, addConstraint, changeConstraint, moveConstraints, removeConstraints, setSetbacks, siteProblems, SERVITUDE_KINDS } from './model-site-constraints.js';
import { siteToPlan } from './model-site.js';
import { ModelWriter } from './model-write.js';
import { fmtLen, parseLen } from './model-units.js';
import { el } from './ui-util.js';
import { buildingLine } from './sitelines/sitelines.js';

const TOOLS = ['bline', 'servitude', 'scmove'];
const PEN = { buildingline: { dash: 'dash', color: '--layer-red', w: 1.5 }, servitude: { dash: 'dot', color: '--layer-ochre', w: 1.5 } };

export function mountSiteConstraints(modelUi) {
  const C = { data: null, items: [], boundary: [], pts: [], at: null, move: null, reselect: null, src: null, last: [] };
  let A = null;
  const t = (...a) => A.t(...a);
  const W = () => (A.ed() ? new ModelWriter(A.ed().W, A.ed().api, A.ed().mid) : null);
  const L = (mm) => fmtLen(mm, A.units());
  const levelGuid = () => A.S.data?.levels.find((l) => l.id === A.S.level)?.guid;
  const hint = (key) => { const h = A.root.querySelector('[data-model-hint]'); if (h) h.textContent = t(key); };
  const q = (sel) => A.root.querySelector(sel);
  const kindName = (k) => t('site.sc.kind.' + (SERVITUDE_KINDS.includes(k) ? k : 'servitude'));
  const labelOf = (it) => (it.kind === 'servitude'
    ? (it.name || kindName(it.servitude)) + (it.shape === 'strip' ? ' ' + t('site.sc.wide', { w: L(it.width) }) : '')
    : it.name || (it.derived ? t('site.sc.derived') : t('site.sc.bline'))) + (it.reference ? ' (' + it.reference + ')' : '');

  function read() {
    C.data = null; C.items = []; C.boundary = [];
    const w = W();
    if (!w || !A.S.level) return;
    try {
      C.data = readConstraints(w);
      const toPlan = (pts) => (pts?.length ? siteToPlan(w, A.S.level, pts) : []);
      C.boundary = toPlan(C.data.site?.points);
      C.items = C.data.items.map((it) => ({ ...it, plan: toPlan(it.kind === 'servitude' ? it.poly : it.pts), planPath: toPlan(it.pts) })).filter((it) => it.plan.length >= 2);
    } catch (e) { console.warn('site constraints', e); }
  }

  // ---- Problems: a live source, re-checked a moment after each change; warnings only ----
  function problems() {
    const w = W();
    if (!w) return [];
    const levelName = (id) => A.S.data?.levels.find((l) => l.id === id)?.name || '';
    // 0.10 BK.44: the current massing option of each set is checked with the walls (mass-options.js optionFootprints)
    return siteProblems(w, { walls: A.S.on && A.S.data?.walls ? A.S.data.walls : null, t, levelName, extra: optionFootprints(w, (o) => t('massopt.p.name', { name: o.option })) });
  }
  function source() {
    const P = typeof window !== 'undefined' ? window.ccProblems : null;
    if (!P || C.src) return;
    C.src = P.source({ id: 'bimcraft.site', kind: 'check', label: t('problems.src.site'), debounceMs: 300, run: () => { try { C.last = problems(); } catch (e) { console.warn('site check', e); C.last = []; } return C.last; } });
    C.src.invalidate();
  }

  // ---- drawing ----
  const snap = (p, e) => A.snapFrom(p, e, C.pts.length ? C.pts[C.pts.length - 1] : null).p;
  const closeTol = () => A.pv().pxToMm(8);
  function finish(closed = false) {
    const pts = C.pts.slice(), tool = A.S.tool; C.pts = [];
    if (pts.length < 2) return;
    if (tool === 'bline') {
      A.commit(addConstraint({ storey: levelGuid(), kind: 'buildingline', pts, closed, name: q('[data-sc-bname]')?.value || '', reference: q('[data-sc-bref]')?.value || '' }), { label: t('site.sc.bline'), verb: t('model.verb.drew') });
    } else if (tool === 'servitude') {
      const width = parseLen(q('[data-sc-width]')?.value || '', A.units());
      if (!closed && !(width > 0)) { A.host.status(t('model.err.sc.width'), true); return; }
      A.commit(addConstraint({ storey: levelGuid(), kind: 'servitude', shape: closed ? 'area' : 'strip', pts, closed, width: closed ? 0 : width, servitude: q('[data-sc-kind]')?.value || 'servitude', name: q('[data-sc-sname]')?.value || '', reference: q('[data-sc-sref]')?.value || '' }),
        { label: t('site.sc.servitude'), verb: t('model.verb.drew') });
    }
  }
  function bindRows() {
    const ks = q('[data-sc-kind]');
    if (ks && !ks.options.length) for (const k of SERVITUDE_KINDS) ks.append(el('option', { value: k }, kindName(k)));
    const wi = q('[data-sc-width]');
    if (wi && !wi.value) wi.value = L(3000);
    const sb = q('[data-sc-setbacks]');
    if (sb && !sb.dataset.bound) { sb.dataset.bound = '1'; sb.addEventListener('click', () => openSetbacks()); }
  }

  // ---- Setbacks… ----
  function openSetbacks() {
    read();
    const pts = C.data?.site?.points || [], u = A.units();
    if (pts.length < 3) { A.host.status(t('model.err.sc.nosite'), true); return; }
    const have = C.data.setbacks.length === pts.length ? C.data.setbacks : pts.map(() => 0);
    const inputs = pts.map((p, i) => el('input', { type: 'text', className: 'bc-input bc-num', 'data-sc-sb': String(i), value: L(have[i]), size: 8 }));
    const all = el('input', { type: 'text', className: 'bc-input bc-num', 'data-sc-sball': '', size: 8, value: '' });
    const fill = el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-sc-sbfill': '' }, t('site.sc.sb.fill'));
    fill.addEventListener('click', () => { const v = parseLen(all.value, u); if (Number.isFinite(v) && v >= 0) for (const i of inputs) i.value = L(v); });
    const err = el('p', { className: 'bc-input-err', role: 'alert' });
    const field = (label, input, extra) => el('label', { className: 'bc-dlg-field' }, el('span', {}, label), input, extra || null);
    const dlg = el('dialog', { className: 'bc-dialog', 'aria-labelledby': 'bc-sc-h', 'data-sc-dialog': '' },
      el('form', { method: 'dialog' },
        el('h2', { className: 'bc-h', id: 'bc-sc-h' }, t('site.sc.sb.title')),
        el('p', { className: 'bc-muted' }, t('site.sc.sb.lead')),
        field(t('site.sc.sb.all'), all, fill),
        ...pts.map((p, i) => { const b = pts[(i + 1) % pts.length]; return field(t('site.sc.sb.edge', { n: i + 1, len: L(Math.hypot(b[0] - p[0], b[1] - p[1])) }), inputs[i]); }),
        err,
        el('p', { className: 'bc-lib-actions' },
          el('button', { type: 'submit', className: 'btn-plot btn-sm-cc', value: 'ok', 'data-sc-sbok': '' }, t('site.sc.sb.ok')),
          el('button', { type: 'submit', className: 'btn-line btn-sm-cc', value: 'clear', 'data-sc-sbclear': '' }, t('site.sc.sb.clear')),
          el('button', { type: 'submit', className: 'btn-line btn-sm-cc', value: 'cancel' }, t('model.gp.cancel')))));
    dlg.querySelector('form').addEventListener('submit', (e) => {
      const how = e.submitter?.value;
      if (how !== 'ok' && how !== 'clear') return;
      const list = how === 'clear' ? pts.map(() => 0) : inputs.map((i) => parseLen(i.value, u));
      if (!list.every((v) => Number.isFinite(v) && v >= 0)) { e.preventDefault(); err.textContent = t('model.err.sc.setbacks'); return; }
      if (list.some((v) => v > 0) && !buildingLine(pts, list).poly) { e.preventDefault(); err.textContent = t('model.err.sc.fold'); return; }   // said before the dialog closes; the op refuses the same way
      A.commit(setSetbacks({ setbacks: list }), { label: t('site.sc.derived'), verb: t('model.verb.changed') });
    });
    dlg.addEventListener('close', () => dlg.remove());
    A.root.append(dlg);
    dlg.showModal();
  }
  /** No 3D shape, so the reload after a change drops it from the pick: pick it again once the model is back. */
  function reselectLater(ks) {
    C.reselect = ks;
    const go = (n) => setTimeout(() => {
      if (C.reselect !== ks) return;
      if ((A.S.busy || A.S.reloading || A.S.queue?.length) && n < 600) { go(n + 1); return; }
      C.reselect = null;
      const have = new Set(C.items.map((d) => A.kb() + d.id));
      A.host.select(ks.filter((k) => have.has(k)));
    }, 50);
    go(0);
  }
  const change = (op, meta) => { const ks = A.selectedKeys(); A.commit(op, meta); reselectLater(ks); };

  function props(items, kit) {
    const list = items.map((x) => C.items.find((d) => d.guid === x.guid)).filter(Boolean);
    if (list.length !== 1) return list.length ? { title: t('site.sc.many', { n: list.length }) } : null;
    const it = list[0], title = it.kind === 'servitude' ? t('site.sc.servitude') : it.derived ? t('site.sc.derived') : t('site.sc.bline');
    const one = kit.one(title);
    const text = (value, attr, key) => { const i = kit.el('input', { type: 'text', className: 'bc-input', value, [attr]: '', maxLength: 120 }); i.addEventListener('change', () => change(changeConstraint(it.guid, { [key]: i.value }), one)); return i; };
    kit.field(t('site.sc.name'), text(it.name, 'data-mp-scname', 'name'));
    kit.field(t('site.sc.ref'), text(it.reference, 'data-mp-scref', 'reference'));
    if (it.kind === 'servitude') {
      kit.field(t('site.sc.kind'), kit.select(SERVITUDE_KINDS.map((k) => [k, kindName(k)]), it.servitude, 'data-mp-sckind', (v) => change(changeConstraint(it.guid, { servitude: v }), one)));
      if (it.shape === 'strip') kit.field(t('site.sc.width'), kit.lenInput(it.width, 'data-mp-scwidth', (mm) => change(changeConstraint(it.guid, { width: mm }), one)));
    }
    if (it.derived) kit.field(t('site.sc.sb.from'), kit.button(t('site.sc.sb.open'), 'data-mp-scsb', () => openSetbacks()));
    else kit.field(t('model.dr.move'), kit.button(t('model.dr.move.go'), 'data-mp-scmove', () => { A.setTool('scmove'); C.move = { guids: [it.guid], a: null }; hint('model.hint.scmove'); }));
    const over = C.last.filter((p) => p.part === it.guid).length;
    kit.field(t('site.sc.walls'), kit.el('span', { 'data-mp-scover': '' }, over ? t('site.sc.walls.n', { n: over }) : t('site.sc.walls.none')));
    return { title };
  }

  /** A label along the longest side of a line, upright, a little to one side of it. */
  function labelAt(pts, closed, text) {
    let best = null;
    for (let i = 0; i + (closed ? 0 : 1) < pts.length; i++) { const a = pts[i], b = pts[(i + 1) % pts.length], d = Math.hypot(b[0] - a[0], b[1] - a[1]); if (!best || d > best.d) best = { a, b, d }; }
    if (!best || best.d < 1) return null;
    let ang = Math.atan2(best.b[1] - best.a[1], best.b[0] - best.a[0]) * 180 / Math.PI;
    if (ang > 90) ang -= 180; else if (ang <= -90) ang += 180;
    const r = ang * Math.PI / 180, h = 250;
    return { p: [(best.a[0] + best.b[0]) / 2 - Math.sin(r) * h, (best.a[1] + best.b[1]) / 2 + Math.cos(r) * h], h, rot: ang, text };
  }

  A = modelUi.extend({
    tools: TOOLS,
    hint: (name) => (name === 'scmove' ? (C.move?.a ? 'model.hint.scmove2' : 'model.hint.scmove') : 'model.hint.' + name),
    typed: () => false,
    move(p, e) { C.at = snap(p, e); },
    click(p, e) {
      const tool = A.S.tool;
      if (tool === 'scmove') {
        const at = A.snapFrom(p, e, C.move?.a || null).p;
        if (!C.move?.guids?.length) { A.setTool('select'); return; }
        if (!C.move.a) { C.move.a = at; hint('model.hint.scmove2'); return; }
        const { guids, a } = C.move;
        C.move = null;
        A.setTool('select');
        const keys = C.items.filter((d) => guids.includes(d.guid)).map((d) => A.kb() + d.id);
        A.commit(moveConstraints(guids, { storey: levelGuid(), from: a, to: at }), { label: t('site.sc.one'), verb: t('model.verb.moved') });
        reselectLater(keys);
        return;
      }
      const at = snap(p, e);
      if (C.pts.length >= 3 && Math.hypot(at[0] - C.pts[0][0], at[1] - C.pts[0][1]) < closeTol()) { finish(true); return; }
      C.pts.push(at);
    },
    dbl() {
      if (A.S.tool !== 'bline' && A.S.tool !== 'servitude') return;
      if (C.pts.length > 1 && Math.hypot(C.pts[C.pts.length - 1][0] - C.pts[C.pts.length - 2][0], C.pts[C.pts.length - 1][1] - C.pts[C.pts.length - 2][1]) < closeTol()) C.pts.pop();
      finish(false);
    },
    key(e) {
      if (!TOOLS.includes(A.S.tool)) return false;
      if (e.key === 'Enter' && C.pts.length) { finish(false); return true; }
      if (e.key === 'Backspace' && C.pts.length) { C.pts.pop(); A.drawOverlay(); return true; }
      return false;
    },
    escape() { if (!TOOLS.includes(A.S.tool)) return false; if (C.pts.length) { C.pts = []; return true; } if (A.S.tool === 'scmove') { C.move = null; A.setTool('select'); return true; } return false; },
    toolChanged(name) { C.pts = []; C.at = null; if (name !== 'scmove') C.move = null; bindRows(); if (A.S.on && A.S.data) A.buildScene(); },
    refresh() { read(); bindRows(); source(); C.src?.invalidate(); },
    scene(sc) {
      const k = A.kb();
      for (const it of C.items) {
        (sc.drafting ||= []).push({ key: k + it.id, guid: it.guid, kind: 'lines', lines: [it.plan], closed: it.kind === 'servitude' || it.closed, pen: PEN[it.kind] });
        const lb = labelAt(it.plan, it.kind === 'servitude' || it.closed, labelOf(it));
        if (lb) sc.symbols.push({ key: -1, lines: [], texts: [lb], color: PEN[it.kind].color });
        if (lb) (sc.labels ||= []).push({ p: lb.p, rot: lb.rot, text: lb.text });   // the same label for the plan PDF and sheets (model-pdf.js, res-sheets.js); the symbol text above is the screen's
      }
      // the boundary's edges numbered while the Building line tool is on (the Setbacks dialog names them by number)
      if (A.S.tool === 'bline' && C.boundary.length >= 3) {
        const texts = C.boundary.map((a, i) => { const b = C.boundary[(i + 1) % C.boundary.length]; return { p: [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2], h: 350, rot: 0, text: String(i + 1) }; });
        sc.symbols.push({ key: -1, lines: [], texts, color: '--action' });
      }
    },
    overlay(o) {
      if (A.S.tool !== 'bline' && A.S.tool !== 'servitude') return;
      if (C.at) o.snap = { p: C.at, kind: 'free' };
      for (const p of C.pts) o.points.push(p);
      const pts = C.at ? [...C.pts, C.at] : C.pts;
      for (let i = 1; i < pts.length; i++) o.dashed.push([pts[i - 1][0], pts[i - 1][1], pts[i][0], pts[i][1]]);
      if (C.pts.length && C.at) { const l = C.pts[C.pts.length - 1]; o.hud = { p: C.at, text: L(Math.hypot(C.at[0] - l[0], C.at[1] - l[1])) }; }
    },
    classes: /^IfcAnnotation$/,
    pick(key) {
      const k = A.kb(), d = C.items.find((x) => k + x.id === key);
      return d ? { kind: 'siteconstraint', guid: d.guid, label: d.kind === 'servitude' ? t('site.sc.servitude') : t('site.sc.bline') } : null;
    },
    props: (items, kit) => (items.every((x) => x.kind === 'siteconstraint') ? props(items, kit) : null),
    remove(items) { return removeConstraints(items.filter((x) => x.kind === 'siteconstraint').map((x) => x.guid)); },
  });
  if (typeof document !== 'undefined') document.addEventListener('cc-problems-ready', () => { source(); }, { once: true });
  source();
  const api = { state: C, problems, items: () => C.items, openSetbacks, invalidate: () => { source(); C.src?.invalidate(); }, showPlan: () => modelUi.show(true) };
  if (typeof window !== 'undefined') window.bimcraftSiteConstraints = api;   // for tests
  return api;
}
