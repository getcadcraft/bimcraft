/* SPDX-License-Identifier: Apache-2.0 */
/**
 * model-grids-ui.js — grids and columns on the plan (0.6 DF.16, session `bim-draw`), through model-ui.js `extend()`:
 *   Grid    [data-mtool="grid"]    click two points: a grid line (labelled the next number or letter of the lines it runs
 *                                  along); click a line to pick it (label, delete); "Place a grid…" [data-grid-place] opens
 *                                  a dialog (numbered and lettered lines: how many, spacing, first label, how far past, turn),
 *                                  then a click puts its first crossing (1 / A); Bubbles [data-grid-bubbles] for the grid;
 *                                  Dimensions [data-grid-dims] (0.9 D9.2): the spacings and overall size on every plan
 *   Column  [data-mtool="column"]  click: a column there (snaps to grid crossings, walls); "At every grid crossing"
 *                                  [data-col-grid]; shape, width, depth, top (the level above / a fixed height)
 * Every level's plan draws the building's grid (scene.grids, model-planview.js) and the Draw tools snap to its lines and
 * crossings (snapCtx). A picked column shows its shape, size and top in Properties; Delete removes it.
 * IFC: model-grids.js, model-columns.js. Test hook: window.bimcraftGrids = { state, api }.
 */
import { gridLayout, gridSnap, gridDims, readGrids, toPlan, placeGrid, changeGridAxis, removeGridAxes, changeGrid, BUBBLES } from './model-grids.js';
import { COLUMN_DEFAULTS, readColumns, placeColumns, changeColumn, removeColumns } from './model-columns.js';
import { ModelWriter } from './model-write.js';
import { fmtLen, parseLen } from './model-units.js';
import { el } from './ui-util.js';

export function mountGrids(modelUi) {
  const R = {
    grids: [],          // readGrids in the shown level's plan (own + other programs')
    cols: [],           // readColumns of the model
    a: null,            // grid tool: the first point of a line being drawn
    pick: null,         // grid tool: the tag of the picked line (our grid)
    placing: null,      // a layout from the dialog, waiting for its click
    hover: null,        // the last snapped point
    col: { ...COLUMN_DEFAULTS },
    lay: { nu: 4, su: 6000, fu: '1', nv: 3, sv: 6000, fv: 'A', extend: 1500, angle: 0 },
  };
  let A = null;
  const t = (...a) => A.t(...a);
  const W = () => new ModelWriter(A.ed().W, A.ed().api, A.ed().mid);
  const L = (mm) => fmtLen(mm, A.units());
  const own = () => R.grids.find((g) => g.own) || null;
  const allAxes = () => R.grids.flatMap((g) => g.axes.map((x) => ({ ...x, own: g.own, bubbles: g.bubbles })));
  const hint = (key) => { const h = A.root.querySelector('[data-model-hint]'); if (h) h.textContent = t(key); };
  const hintNow = () => hint(A.S.tool === 'column' ? 'model.hint.column' : R.placing ? 'model.hint.gridplace' : R.a ? 'model.hint.grid2' : 'model.hint.grid');

  function read() {
    const ed = A.ed();
    if (!ed || !A.S.level) { R.grids = []; R.cols = []; return; }
    try { const w = W(); R.grids = toPlan(w, A.S.level, readGrids(w)); R.cols = readColumns(w); } catch (e) { R.grids = []; R.cols = []; }
    if (R.pick && !own()?.axes.some((x) => x.tag === R.pick)) R.pick = null;
  }
  /** The grid line under plan point p (within 8 px), ours first. */
  function axisAt(p) {
    const tol = A.pv().pxToMm(8);
    let best = null;
    for (const x of allAxes()) {
      const d = [x.b[0] - x.a[0], x.b[1] - x.a[1]], l2 = d[0] * d[0] + d[1] * d[1];
      const s = Math.max(0, Math.min(1, ((p[0] - x.a[0]) * d[0] + (p[1] - x.a[1]) * d[1]) / l2));
      const q = [x.a[0] + d[0] * s, x.a[1] + d[1] * s], e = Math.hypot(p[0] - q[0], p[1] - q[1]);
      if (e <= tol && (!best || (x.own && !best.x.own) || e < best.e)) best = { x, e };
    }
    return best?.x || null;
  }
  const snap = (p, e) => A.snapAt(p, e).p;
  /** The layout from the dialog with its first crossing at p. */
  const layoutAt = (p) => gridLayout({ origin: p, angle: R.lay.angle, u: { count: R.lay.nu, spacing: R.lay.su, first: R.lay.fu }, v: { count: R.lay.nv, spacing: R.lay.sv, first: R.lay.fv }, extend: R.lay.extend });

  // ---- the option rows (ui.inc [data-mopts="grid"], [data-mopts="column"]) ----
  function bindRows() {
    const root = A.root, units = A.units();
    const place = root.querySelector('[data-grid-place]');
    if (place && !place.dataset.bound) {
      place.dataset.bound = '1';
      place.addEventListener('click', () => openPlace());
      root.querySelector('[data-grid-bubbles]')?.addEventListener('change', (e) => { if (own()) A.commit(changeGrid({ bubbles: e.target.value }), { label: t('model.grid'), verb: t('model.verb.changed') }); });
      root.querySelector('[data-grid-dims]')?.addEventListener('change', (e) => { if (own()) A.commit(changeGrid({ dims: e.target.checked }), { label: t('model.grid'), verb: t('model.verb.changed') }); else { e.target.checked = false; A.host.status(t('model.err.grid.none'), true); } });
      const tag = root.querySelector('[data-grid-tag]');
      tag?.addEventListener('change', () => { const v = tag.value.trim(); if (R.pick && v && v !== R.pick) { const old = R.pick; R.pick = v; A.commit(changeGridAxis(old, { tag: v }), { label: t('model.grid'), verb: t('model.verb.renamed') }); } });
      root.querySelector('[data-grid-del]')?.addEventListener('click', () => deletePicked());
      // 0.9 WT.7: move the picked line by a typed distance, square to itself (+ = to its left); walls locked to it follow (wall-tools.js)
      const mv = root.querySelector('[data-grid-move]');
      mv?.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); mv.blur(); } });
      mv?.addEventListener('change', () => {
        const raw = mv.value.trim(), mm = parseLen(raw, A.units()), ax = R.grids.flatMap((g) => g.axes).find((x) => x.tag === R.pick);
        mv.value = '';
        if (!ax || !Number.isFinite(mm) || !mm) { if (raw) A.host.status(t('model.err.length'), true); return; }
        const L0 = Math.hypot(ax.b[0] - ax.a[0], ax.b[1] - ax.a[1]) || 1, n = [-(ax.b[1] - ax.a[1]) / L0 * mm, (ax.b[0] - ax.a[0]) / L0 * mm];
        A.commit(changeGridAxis(R.pick, { a: [ax.a[0] + n[0], ax.a[1] + n[1]], b: [ax.b[0] + n[0], ax.b[1] + n[1]], storey: A.level().guid }), { label: t('model.grid'), verb: t('model.verb.moved') });
      });
    }
    const bub = root.querySelector('[data-grid-bubbles]');
    if (bub && !bub.options.length) bub.replaceChildren(...BUBBLES.map((b) => el('option', { value: b }, t('model.grid.bub.' + b))));
    if (bub) bub.value = own()?.bubbles || 'both';
    const gd = root.querySelector('[data-grid-dims]'); if (gd) { gd.checked = !!own()?.dims; gd.disabled = !own(); }
    const pickRow = root.querySelector('[data-grid-picked]');
    if (pickRow) { pickRow.hidden = !R.pick; const tg = root.querySelector('[data-grid-tag]'); if (tg && document.activeElement !== tg) tg.value = R.pick || ''; }
    // columns
    const shape = root.querySelector('[data-col-shape]');
    if (shape && !shape.dataset.bound) {
      shape.dataset.bound = '1';
      shape.addEventListener('change', () => { R.col.shape = shape.value; bindRows(); A.drawOverlay(); });
      const len = (sel, key, min) => { const i = root.querySelector(sel); i?.addEventListener('change', () => { const mm = parseLen(i.value, A.units()); if (mm >= min) R.col[key] = mm; else A.host.status(t('model.err.length'), true); i.value = L(R.col[key]); A.drawOverlay(); }); };
      len('[data-col-width]', 'width', 50); len('[data-col-depth]', 'depth', 50); len('[data-col-height]', 'height', 300);
      root.querySelector('[data-col-top]')?.addEventListener('change', (e) => { R.col.top = e.target.value; bindRows(); });
      root.querySelector('[data-col-grid]')?.addEventListener('click', () => columnsAtCrossings());
    }
    const set = (sel, v) => { const i = root.querySelector(sel); if (i && document.activeElement !== i) i.value = v; };
    set('[data-col-width]', L(R.col.width)); set('[data-col-depth]', L(R.col.depth)); set('[data-col-height]', L(R.col.height));
    const dep = root.querySelector('[data-col-depth]'); if (dep) dep.closest('label').hidden = R.col.shape === 'round';
    const h = root.querySelector('[data-col-height]'); if (h) h.closest('label').hidden = (R.col.top || 'level') !== 'fixed';
    void units;
  }
  function deletePicked() {
    if (!R.pick) return false;
    const tg = R.pick; R.pick = null;
    A.commit(removeGridAxes([tg]), { label: t('model.grid'), verb: t('model.verb.deleted') });
    bindRows();
    return true;
  }
  /** Columns at every crossing of the grid on this level's plan (none where one already stands). */
  function columnsAtCrossings() {
    const pts = gridSnap(allAxes()).points.filter((q) => !R.cols.some((c) => c.storey === A.S.level && Math.hypot(c.at[0] - q[0], c.at[1] - q[1]) < 1));
    if (!pts.length) { A.host.status(t(allAxes().length ? 'model.col.allthere' : 'model.col.nogrid'), true); return; }
    A.commit(placeColumns({ storey: levelGuid(), points: pts, ...colSpec() }), { label: t('model.col.n', { n: pts.length }), verb: t('model.verb.placed') });
  }
  const levelGuid = () => A.S.data.levels.find((l) => l.id === A.S.level)?.guid;
  const colSpec = () => {
    const above = A.levelAbove();
    const toLevel = (R.col.top || 'level') !== 'fixed' && above;
    return { shape: R.col.shape, width: R.col.width, depth: R.col.shape === 'round' ? R.col.width : R.col.depth, topLevel: toLevel ? above.guid : '', height: R.col.height };
  };

  // ---- "Place a grid…" ----
  function openPlace() {
    const u = A.units(), f = R.lay;
    const field = (label, input) => el('label', { className: 'bc-dlg-field' }, el('span', {}, label), input);
    const num = (v, attr) => el('input', { type: 'number', className: 'bc-input', value: String(v), min: '0', max: '60', step: '1', [attr]: '' });
    const txt = (v, attr) => el('input', { type: 'text', className: 'bc-input', value: v, [attr]: '', maxLength: 40 });
    const nu = num(f.nu, 'data-gp-nu'), su = txt(L(f.su), 'data-gp-su'), fu = txt(f.fu, 'data-gp-fu');
    const nv = num(f.nv, 'data-gp-nv'), sv = txt(L(f.sv), 'data-gp-sv'), fv = txt(f.fv, 'data-gp-fv');
    const ex = txt(L(f.extend), 'data-gp-extend'), an = el('input', { type: 'number', className: 'bc-input', value: String(f.angle), step: 'any', 'data-gp-angle': '' });
    const err = el('p', { className: 'bc-input-err', role: 'alert' });
    const dlg = el('dialog', { className: 'bc-dialog', 'aria-labelledby': 'bc-gp-h', 'data-grid-dialog': '' },
      el('form', { method: 'dialog' },
        el('h2', { className: 'bc-h', id: 'bc-gp-h' }, t('model.gp.title')),
        el('p', { className: 'bc-muted' }, t('model.gp.lede')),
        el('fieldset', {}, el('legend', {}, t('model.gp.numbered')), field(t('model.gp.count'), nu), field(t('model.gp.spacing'), su), field(t('model.gp.first'), fu)),
        el('fieldset', {}, el('legend', {}, t('model.gp.lettered')), field(t('model.gp.count'), nv), field(t('model.gp.spacing'), sv), field(t('model.gp.first'), fv)),
        field(t('model.gp.extend'), ex), field(t('model.gp.angle'), an), err,
        el('p', { className: 'bc-lib-actions' },
          el('button', { type: 'submit', className: 'btn-plot btn-sm-cc', value: 'ok', 'data-gp-ok': '' }, t('model.gp.ok')),
          el('button', { type: 'submit', className: 'btn-line btn-sm-cc', value: 'cancel' }, t('model.gp.cancel')))));
    const spacings = (s) => { const parts = String(s).split(/[,;]+/).map((x) => x.trim()).filter(Boolean); const v = parts.map((x) => parseLen(x, u)); return v.length && v.every((x) => x >= 100) ? (v.length === 1 ? v[0] : v) : null; };
    dlg.querySelector('form').addEventListener('submit', (e) => {
      if (e.submitter?.value !== 'ok') return;
      const s1 = spacings(su.value), s2 = spacings(sv.value), e1 = parseLen(ex.value, u), a1 = Number(an.value);
      const c1 = Math.floor(Number(nu.value)), c2 = Math.floor(Number(nv.value));
      if (!(c1 >= 0 && c2 >= 0 && c1 + c2 > 0 && c1 <= 60 && c2 <= 60) || !s1 || !s2 || !(e1 >= 0) || !Number.isFinite(a1) || !fu.value.trim() || !fv.value.trim()) { e.preventDefault(); err.textContent = t('model.gp.bad'); return; }
      Object.assign(R.lay, { nu: c1, su: s1, fu: fu.value.trim(), nv: c2, sv: s2, fv: fv.value.trim(), extend: e1, angle: a1 });
      R.placing = true; R.a = null; R.pick = null; hintNow(); bindRows();
    });
    dlg.addEventListener('close', () => dlg.remove());
    A.root.append(dlg);
    dlg.showModal();
    nu.focus();
  }

  A = modelUi.extend({
    tools: ['grid', 'column'],
    hint: (name) => (name === 'column' ? 'model.hint.column' : 'model.hint.grid'),
    typed: () => false,
    classes: /^IfcColumn$/,
    snapCtx(ctx) { const g = gridSnap(allAxes()); ctx.lines = g.lines; ctx.gridPoints = g.points; },
    move(p, e) { R.hover = snap(p, e); },
    click(p, e) {
      const q = snap(p, e);
      if (A.S.tool === 'column') {
        A.commit(placeColumns({ storey: levelGuid(), points: [q], ...colSpec() }), { label: t('model.col'), verb: t('model.verb.placed') });
        return;
      }
      if (R.placing) {
        const axes = layoutAt(q);
        R.placing = null;
        A.commit(placeGrid({ storey: levelGuid(), axes }), { label: t('model.grid'), verb: t('model.verb.placed') });
        hintNow(); return;
      }
      if (!R.a) {
        const ax = axisAt(p);
        if (ax) {
          if (!ax.own) { A.host.status(t('model.grid.foreign'), true); return; }
          R.pick = ax.tag; bindRows(); hintNow(); return;
        }
        R.pick = null; R.a = q; bindRows(); hintNow(); return;
      }
      const a = R.a; R.a = null;
      if (Math.hypot(q[0] - a[0], q[1] - a[1]) < 100) { A.host.status(t('model.err.grid.short'), true); hintNow(); return; }
      A.commit(placeGrid({ storey: levelGuid(), axes: [{ a, b: q }] }), { label: t('model.grid'), verb: t('model.verb.drew') });
      hintNow();
    },
    escape() {
      if (A.S.tool !== 'grid' || !(R.a || R.pick || R.placing)) return false;
      R.a = null; R.pick = null; R.placing = null; bindRows(); hintNow();
      return true;
    },
    key(e, low) {
      if (A.S.tool === 'grid' && (e.key === 'Delete' || e.key === 'Backspace') && R.pick) return deletePicked();
      return false;
    },
    toolChanged() { R.a = null; R.pick = null; R.placing = null; R.hover = null; bindRows(); const m = A.root.querySelector('[data-res-tools]'); if (m?.open) m.open = false; },
    refresh() { read(); bindRows(); },
    scene(scene) {
      scene.grids = allAxes().map((x) => ({ tag: x.tag, a: x.a, b: x.b, bubbles: x.bubbles, sel: x.own && x.tag === R.pick }));
      // 0.9 D9.2: the grid's dimensions (spacings + overall), when its Dimensions box is ticked
      const g = own();
      if (g?.dims && A.S.kind !== 'rcp') scene.dims = [...(scene.dims || []), ...gridDims(g.axes, L)];
    },
    overlay(o) {
      if (A.S.tool === 'grid') {
        if (R.hover) o.snap = { p: R.hover, kind: 'grid' };
        if (R.placing && R.hover) {
          for (const x of layoutAt(R.hover)) o.dashed.push([x.a[0], x.a[1], x.b[0], x.b[1]]);
          o.hud = { p: R.hover, text: t('model.hud.gridplace', { n: R.lay.nu + R.lay.nv }) };
        } else if (R.a && R.hover) {
          o.lines.push([R.a[0], R.a[1], R.hover[0], R.hover[1]]);
          o.points.push(R.a);
          o.hud = { p: R.hover, text: L(Math.hypot(R.hover[0] - R.a[0], R.hover[1] - R.a[1])) };
        } else if (R.hover) {
          const ax = axisAt(R.hover);
          if (ax) o.hud = { p: R.hover, text: t(ax.own ? 'model.hud.gridpick' : 'model.grid.foreign2', { tag: ax.tag }) };
        }
      } else if (A.S.tool === 'column' && R.hover) {
        const c = colSpec(), hw = c.width / 2, hd = c.depth / 2, p = R.hover;
        if (c.shape === 'round') { const pts = []; for (let i = 0; i < 24; i++) { const a = i / 24 * Math.PI * 2; pts.push([p[0] + hw * Math.cos(a), p[1] + hw * Math.sin(a)]); } o.walls.push(pts); }
        else o.walls.push([[p[0] - hw, p[1] - hd], [p[0] + hw, p[1] - hd], [p[0] + hw, p[1] + hd], [p[0] - hw, p[1] + hd]]);
        o.snap = A.snapAt(p, null);
      }
    },
    pick(key) {
      const k = A.kb(), c = R.cols.find((x) => k + x.id === key);
      return c ? { kind: 'column', guid: c.guid, label: t('model.col') } : null;
    },
    props(items, kit) {
      if (!items.every((x) => x.kind === 'column')) return null;
      const cs = items.map((x) => R.cols.find((c) => c.guid === x.guid)).filter(Boolean);
      if (!cs.length) return null;
      const one = cs.length === 1, c0 = cs[0];
      const run = (ch) => { const ops = cs.map((c) => changeColumn(c.guid, ch)); A.commit((ed) => { let r = null; for (const o of ops) { const r2 = o(ed); r = r ? { ...r2, journal: A.mergeJournals(r.journal, r2.journal) } : r2; } return r; }, kit.one(t('model.col'))); };
      // 0.9 D9.1: several columns that differ show an empty field ("Mixed"), never the first one's value
      const sameShape = cs.every((c) => c.shape === c0.shape), same = (f) => cs.every((c) => Math.abs(f(c) - f(c0)) < 0.5);
      const shapeOpts = [['rect', t('model.col.rect')], ['round', t('model.col.round')]];
      kit.field(t('model.col.shape'), kit.select(sameShape ? shapeOpts : [['', t('model.prop.mixed')], ...shapeOpts], sameShape ? c0.shape : '', 'data-mp-colshape', (v) => { if (v) run({ shape: v }); }));
      kit.field(t(!sameShape ? 'model.col.size' : c0.shape === 'round' ? 'model.col.diameter' : 'model.col.width'), kit.lenInput(cs.every((c) => Math.abs(c.width - c0.width) < 0.5) ? c0.width : NaN, 'data-mp-colwidth', (mm) => run({ width: mm }), { min: 50 }));
      if (sameShape && c0.shape !== 'round') kit.field(t('model.col.depth'), kit.lenInput(cs.every((c) => Math.abs(c.depth - c0.depth) < 0.5) ? c0.depth : NaN, 'data-mp-coldepth', (mm) => run({ depth: mm }), { min: 50 }));
      const above = A.S.data.levels[A.S.data.levels.findIndex((l) => l.id === c0.storey) + 1];
      const sameTop = cs.every((c) => !!c.topLevel === !!c0.topLevel);
      const topOpts = [['level', t('model.col.top.level')], ['fixed', t('model.col.top.fixed')]];
      // each column keeps its own level: "to the level above" means the level above ITS level; a fixed height keeps its own height
      const topOf = (c) => { const i = A.S.data.levels.findIndex((l) => l.id === c.storey); return A.S.data.levels[i + 1] || null; };
      const runEach = (chOf) => { const ops = cs.map((c) => changeColumn(c.guid, chOf(c))); A.commit((ed) => { let r = null; for (const o of ops) { const r2 = o(ed); r = r ? { ...r2, journal: A.mergeJournals(r.journal, r2.journal) } : r2; } return r; }, kit.one(t('model.col'))); };
      kit.field(t('model.col.top'), kit.select(sameTop ? topOpts : [['', t('model.prop.mixed')], ...topOpts], sameTop ? (c0.topLevel ? 'level' : 'fixed') : '', 'data-mp-coltop', (v) => { if (v) runEach((c) => (v === 'level' && topOf(c) ? { topLevel: topOf(c).guid, topOffset: 0 } : { topLevel: '', height: c.h })); }));
      // Height: typed once, every picked column ends up that tall (one following its level gets the offset that makes it so)
      kit.field(t('model.col.height'), kit.lenInput(same((c) => c.h) ? c0.h : NaN, 'data-mp-colheight', (mm) => runEach((c) => (c.topLevel ? { topOffset: c.topOffset + mm - c.h } : { height: mm })), { min: 300 }));
      if (one) kit.rows.push(el('dt', {}, t('model.col.at')), el('dd', {}, L(c0.at[0]) + ', ' + L(c0.at[1])));
      return { title: one ? t('model.col') : t('model.elements', { n: cs.length }) };
    },
    remove(items) { const g = items.filter((x) => x.kind === 'column').map((x) => x.guid); return g.length ? removeColumns(g) : null; },
  });
  if (typeof window !== 'undefined') window.bimcraftGrids = { state: R, api: A };   // for tests
  return { state: R };
}
