/* SPDX-License-Identifier: Apache-2.0 */
/**
 * dwg-3d-ui.js: bimcraft.js's 9 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 bimcraft; no behaviour change).
 * mountDwg3d(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { t } from './i18n.js';
import { cameraCubeOptions } from './m3d/viewcube-camera.js';
import { num, el } from './ui-util.js';
import { dynamicDefs, dynamicSummary, dynamicOf } from './dwg-dynamic.js';
import { entityRows, attributeRows } from './dwg-props.js';

export function mountDwg3d(ctx) {
  const { ST, $, ui, status, frame, addCorner, clearBlankNote, sectionOff, toggleSection } = ctx;

  // ---- Drawing in 3D (dwg-compile3d.js + dwg-view3d.js, both imported on the first switch) ----
  const ui3 = { wrap: $('[data-dwg3d]'), canvas: $('[data-dwg3d-canvas]'), bar: $('[data-dwg3d-bar]') };
  async function toggle3d({ quiet = false } = {}) {   // quiet: openDwg says what happened itself
    if (!ST.dwg3d || ui.dwg.hidden) return;
    if (ST.view3dOn) { leave3d(); return; }
    clearBlankNote();
    if (!ST.dwg3d.compiled) {
      if (!quiet) status(t('dwg3d.building'));
      await frame();
      const { compileModel3d } = await import('./dwg-compile3d.js');
      ST.dwg3d.compiled = compileModel3d(ST.dwg3d.db, { xrefs: ST.dwg3d.xrefs });
    }
    const m = ST.dwg3d.compiled;
    if (ST.cut) sectionOff();
    ui.equip.hidden = true;
    ui.dwgCanvas.hidden = true;
    ui.coords.hidden = true;
    ui3.wrap.hidden = false;
    ui3.bar.hidden = false;
    if (!ST.view3d) {
      const { DrawingView3D } = await import('./dwg-view3d.js');
      ST.view3d = new DrawingView3D(ui3.canvas);
      ui3.canvas.view = ST.view3d;   // for tests and the console
      ST.view3d.onPick = (owner, { add }) => pick3d(owner, add);
      const cd = addCorner(ui3.wrap, cameraCubeOptions(ST.view3d.cam, { invalidate: () => ST.view3d.render(), home: () => ST.view3d.standard('iso') }));
      ST.view3d.onRender = cd.update;
      ST.view3d.onUserMove = cd.stop;
      ui3.canvas.cube = cd.c;   // for tests
    }
    ST.view3d.resize();
    if (ST.view3d.model !== m) ST.view3d.setModel(m, ST.dwgView.hidden);
    else ST.view3d.syncLayers(ST.dwgView.hidden);
    ST.view3d.highlight(null);
    ST.view3dOn = true;
    ui.sheetTabs.querySelectorAll('[data-space-key]').forEach((b) => b.setAttribute('aria-pressed', 'false'));
    ui.sheetTabs.querySelector('[data-dwg-3d]')?.setAttribute('aria-pressed', 'true');
    ui3.bar.querySelector('[data-v3="persp"]')?.setAttribute('aria-pressed', ST.view3d.cam.persp ? 'true' : 'false');
    ST.props2d = [...ui.props.childNodes];
    ST.props3dSummary = props3d(m);
    ui.props.replaceChildren(...ST.props3dSummary);
    const s = m.stats;
    if (!quiet) status(s.segments + s.triangles
      ? t(s.truncated ? 'dwg3d.shown.large' : 'dwg3d.shown', { lines: num(s.segments), faces: num(s.triangles) })
      : t('dwg3d.nothing'), !(s.segments + s.triangles));
  }
  function leave3d() {
    if (!ST.view3dOn) return;
    if (ST.cut) sectionOff();   // the cut belongs to the 3D view
    ST.view3dOn = false;
    ST.view3d?.highlight(null);
    ui3.wrap.hidden = true;
    ui3.bar.hidden = true;
    ui.dwgCanvas.hidden = false;
    ui.coords.hidden = false;
    ui.sheetTabs.querySelector('[data-dwg-3d]')?.setAttribute('aria-pressed', 'false');
    const key = ST.dwgView?.space?.key;
    ui.sheetTabs.querySelectorAll('[data-space-key]').forEach((b) => b.setAttribute('aria-pressed', b.dataset.spaceKey === key ? 'true' : 'false'));
    if (ST.props2d) { ui.props.replaceChildren(...ST.props2d); ST.props2d = null; }
    ST.dwgView?.resize();
  }

  const modelSpaceOf = (db) => (db.blocks || []).find((b) => /^\*model_space$/i.test(b.name))?.entities || [];
  /**
   * 0.5 DB.11: dynamic blocks (dwg-dynamic.js). The drawing shows each reference in the state its file saved (other states'
   * entities are invisible there); the drawing panel lists every dynamic block placed in model space with the states
   * shown and the ones it also has, and a picked reference names its block, state and other states.
   */
  const dynCache = new WeakMap();
  const defsOf = (db) => { let d = dynCache.get(db); if (!d) dynCache.set(db, (d = dynamicDefs(db))); return d; };
  function dynamicBlock(db) {
    const list = dynamicSummary(db, defsOf(db));
    if (!list.length) return null;
    return el('div', { className: 'bc-xrefs', 'data-dyn-blocks': '' },
      el('p', { className: 'bc-h' }, t('dwg.dyn.title')),
      el('ul', { className: 'bc-copies' }, list.map((d) => el('li', { 'data-dyn-block': d.name },
        el('span', {}, d.name), el('span', { className: 'bc-sub' }, t('dwg.dyn.count', { n: d.count })),
        d.states.length ? el('span', { className: 'bc-sub' }, t('dwg.dyn.shown', { list: d.shown.filter(([k]) => k).map(([k, n]) => t('dwg.dyn.shown.one', { state: k, n })).join(', ') || '—' })) : null,
        d.states.length ? el('span', { className: 'bc-sub' }, t('dwg.dyn.states', { label: d.label || t('dwg.dyn.label'), list: d.states.join(', ') })) : el('span', { className: 'bc-sub' }, t('dwg.dyn.nostates'))))),
      el('p', { className: 'bc-muted' }, t('dwg.dyn.note')));
  }

  function pick3d(owner, add) {
    const cur = [...ST.view3d.picked];
    let next;
    if (add) { if (owner === null) return; next = cur.includes(owner) ? cur.filter((o) => o !== owner) : [...cur, owner]; }
    else next = owner === null ? [] : [owner];
    ST.view3d.highlight(next);
    if (!next.length) { if (ST.props3dSummary) ui.props.replaceChildren(...ST.props3dSummary); status(''); return; }
    const ents = modelSpaceOf(ST.dwg3d.db);
    if (next.length > 1) {
      const by = new Map();
      for (const o of next) { const ty = ents[o]?.type || '?'; by.set(ty, (by.get(ty) || 0) + 1); }
      ui.props.replaceChildren(
        el('p', { className: 'bc-prop-name', 'data-pick-count': String(next.length) }, t('dwg.pick.many', { n: next.length })),
        el('p', { className: 'bc-muted' }, t('dwg.pick.hint')),
        el('ul', { className: 'bc-counts' }, [...by].sort((a, b) => b[1] - a[1]).map(([ty, n]) => el('li', {}, el('span', {}, ty), el('span', { className: 'n' }, num(n))))));
      return;
    }
    const e = ents[next[0]];
    if (!e) return;
    const dyn = dynamicOf(ST.dwg3d.db, e, defsOf(ST.dwg3d.db));   // 0.5 DB.11
    const rows = entityRows(e, { units: ST.dwg3d.compiled.units, dyn });
    const attrs = attributeRows(e);
    ui.props.replaceChildren(...[
      el('p', { className: 'bc-prop-cls' }, dyn ? t('dwg.dyn.kind', { type: e.type }) : e.type),
      el('p', { className: 'bc-prop-name', 'data-dwg-pick': String(next[0]) }, dyn?.name || e.block || e.layer || e.type),
      el('dl', { className: 'bc-dl' }, rows.flatMap((r) => [el('dt', {}, t(r.key)), el('dd', {}, r.valueKey ? t(r.value) : r.value)])),
      attrs.length ? el('details', { className: 'bc-set', open: true }, el('summary', {}, t('dwg.prop.attributes', { n: attrs.length })),
        el('dl', { className: 'bc-dl' }, attrs.flatMap((a) => [el('dt', {}, a.tag), el('dd', {}, a.value)]))) : null,
      el('p', { className: 'bc-muted' }, t('dwg.pick.back')),
    ].filter(Boolean));
  }
  window.bimcraftPick3d = (owner, add = false) => pick3d(owner, add);   // for tests
  window.bimcraftDwgState = () => import('./dwg/read-async.js').then((m) => m.dwgWorkerState());   // 'worker' | 'main' (tests)

  /** Properties while in 3D: what is drawn, what shows in 2D only, and what is not drawn yet. */
  function props3d(m) {
    const s = m.stats, rows = (o) => Object.entries(o).sort((a, b) => b[1] - a[1]);
    const flat = rows(s.flatOnly), missing = rows(s.notDrawn);
    const size = m.bounds.min[0] <= m.bounds.max[0] ? m.bounds.max.map((v, k) => v - m.bounds.min[k]) : null;
    const f = (v) => (Math.abs(v) >= 100 ? v.toFixed(0) : v.toFixed(2));
    return [
      el('p', { className: 'bc-muted' }, t('dwg3d.hint')),
      el('p', { className: 'bc-muted' }, t('dwg.pick.intro')),
      el('dl', { className: 'bc-dl' },
        el('dt', {}, t('dwg3d.lines')), el('dd', {}, num(s.segments)),
        el('dt', {}, t('dwg3d.faces')), el('dd', {}, num(s.triangles)),
        size ? el('dt', {}, t('dwg3d.size')) : null,
        size ? el('dd', {}, size.map(f).join(' × ') + (m.units ? ' ' + m.units : '')) : null,
        s.polyline3dFixed ? el('dt', {}, t('dwg3d.poly3d')) : null,
        s.polyline3dFixed ? el('dd', {}, t('dwg3d.poly3d.fixed', { count: num(s.polyline3dFixed) })) : null),
      flat.length ? el('div', { className: 'bc-notdrawn' },
        el('p', { className: 'bc-h' }, t('dwg3d.flat.title')),
        el('ul', { className: 'bc-counts' }, flat.map(([ty, n]) => el('li', {}, el('span', {}, ty), el('span', { className: 'n' }, num(n))))),
        el('p', { className: 'bc-muted' }, t('dwg3d.flat.note'))) : null,
      missing.length ? el('div', { className: 'bc-notdrawn' },
        el('p', { className: 'bc-h' }, t('dwg.notdrawn.title')),
        el('ul', { className: 'bc-counts' }, missing.map(([ty, n]) => el('li', {}, el('span', {}, ty), el('span', { className: 'n' }, num(n))))),
        el('p', { className: 'bc-muted' }, t('dwg3d.notdrawn.note'))) : null,
    ].filter(Boolean);
  }
  ui3.bar.addEventListener('click', (e) => {
    const b = e.target.closest('[data-v3]');
    if (!b || !ST.view3d) return;
    const v = b.dataset.v3;
    if (v === 'section') { toggleSection(); return; }
    if (v === 'persp') { ST.view3d.setPersp(!ST.view3d.cam.persp); b.setAttribute('aria-pressed', ST.view3d.cam.persp ? 'true' : 'false'); }
    else if (v === 'extents') ST.view3d.extents();
    else ST.view3d.standard(v);
  });

  return { ui3, toggle3d, leave3d, dynamicBlock, pick3d };
}
