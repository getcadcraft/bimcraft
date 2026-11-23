/* SPDX-License-Identifier: Apache-2.0 */
/**
 * rsu-foundations.js: res-ui.js's 5 bindings for this topic, moved out of mountRes() unchanged (0.11 PERF.78, perf-finish-11 bimcraft: one module per panel section; no behaviour change).
 * mountRsuFoundations(ctx) is called once by mountRes(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables mountRes() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { loopAt, labelPoint } from './model-rooms.js';
import { loadsOn, foundationParams, foundationGeometry, changeFoundation, FOUNDATION_KINDS } from './res-foundation.js';
import { el } from './ui-util.js';

export function mountRsuFoundations(ctx) {
  const { R, t, L, writer, again } = ctx;

  // ---- foundations (RC.2) ----
  const pp = (poly) => poly.map((p, i) => [p[0], p[1], poly[(i + 1) % poly.length][0], poly[(i + 1) % poly.length][1]]);
  function foundHover(p) {
    const loops = ctx.A.S.loops, o = loops && loopAt(loops.outlines, p);
    if (!o) return null;
    const w = writer(), loads = w ? loadsOn(w, ctx.A.S.level, { walls: ctx.A.wallsHere() }) : { stories: 1, heavy: false };
    const prm = foundationParams(R.found.kind, {}, loads);
    return { seed: p, outline: o.poly, prm, geo: foundationGeometry(o.poly, prm) };
  }
  function foundScene(scene) {
    const k = ctx.A.kb();
    for (const f of R.founds) {
      if (f.storey !== ctx.A.S.level || !f.geo) continue;
      const dashed = [], thin = [];
      for (const g of f.geo) {
        if (g.role === 'footing' || g.role === 'edge') { dashed.push(...pp(g.outer), ...pp(g.inner)); }
        else if (g.role === 'stem') { thin.push(...pp(g.outer), ...pp(g.inner)); }
      }
      const outer = f.geo.find((g) => g.role === 'footing' || g.role === 'edge')?.outer || f.outline;
      scene.symbols.push({ key: k + f.id, dashed, thin, poly: outer, roof: true });
    }
  }
  function foundOverlay(o) {
    if (ctx.A.S.tool !== 'foundation' || !R.found.hover) return;
    const h = R.found.hover;
    o.walls.push(h.outline);
    for (const g of h.geo) if (g.role !== 'slab') o.dashed.push(...pp(g.outer), ...pp(g.inner));
    o.hud = { p: labelPoint(h.outline), text: t('res.fd.hud', { kind: t('res.fd.kind.' + h.prm.kind), w: L(h.prm.footW), d: L(h.prm.footD) }) };
  }
  function foundProps(items, kit) {
    if (items.length !== 1) return null;
    const f = R.founds.find((x) => x.guid === items[0].guid);
    if (!f) return null;
    const run = (ch) => ctx.A.commit(changeFoundation(f.guid, ch), { ...kit.one(t('res.fd.kind.' + f.kind)), reselect: again(() => R.founds, f.guid) });
    const p = f.prm;
    kit.field(t('res.fd.kind'), kit.select(FOUNDATION_KINDS.map((x) => [x, t('res.fd.kind.' + x)]), f.kind, 'data-mp-fdkind', (v) => run({ kind: v })));
    const size = (label, k, attr, show = true) => {
      if (!show) return;
      const inp = kit.lenInput(p[k], attr, (mm) => run({ [k]: mm }), { allowZero: true });
      kit.field(label, inp, p.auto[k] ? el('span', { className: 'bc-sub' }, ' ' + t('res.fd.auto')) : null);
    };
    const k = f.kind;
    size(t('res.fd.footw'), 'footW', 'data-mp-fdfootw', k !== 'slab');
    size(t('res.fd.footd'), 'footD', 'data-mp-fdfootd', k !== 'slab');
    size(t('res.fd.bottom'), 'bottom', 'data-mp-fdbottom', k === 'stemslab' || k === 'crawl');
    size(t('res.fd.stemt'), 'stemT', 'data-mp-fdstemt', k !== 'slab');
    size(t('res.fd.stemdrop'), 'stemDrop', 'data-mp-fdstemdrop', k === 'crawl' || k === 'basement');
    size(t('res.fd.basementh'), 'basementH', 'data-mp-fdbasementh', k === 'basement');
    size(t('res.fd.slabt'), 'slabT', 'data-mp-fdslabt', k !== 'crawl');
    size(t('res.fd.edgew'), 'edgeW', 'data-mp-fdedgew', k === 'slab');
    size(t('res.fd.edged'), 'edgeD', 'data-mp-fdedged', k === 'slab');
    kit.rows.push(el('dt', { className: 'bc-mp-wide' }, ''), el('dd', { className: 'bc-mp-wide bc-sub', 'data-mp-fdnote': '' }, t('res.fd.autonote', { n: f.loads.stories })));
    return { title: t('res.fd.kind.' + f.kind) };
  }

  return { pp, foundHover, foundScene, foundOverlay, foundProps };
}
