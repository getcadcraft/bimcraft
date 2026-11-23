/* SPDX-License-Identifier: Apache-2.0 */
/**
 * rsu-counters.js: res-ui.js's 5 bindings for this topic, moved out of mountRes() unchanged (0.11 PERF.78, perf-finish-11 bimcraft: one module per panel section; no behaviour change).
 * mountRsuCounters(ctx) is called once by mountRes(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables mountRes() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { counterRuns, changeCountertop, fitCountertop } from './res-counter.js';
import { labelPoint } from './model-rooms.js';
import { fmtArea } from './model-units.js';
import { el } from './ui-util.js';

export function mountRsuCounters(ctx) {
  const { R, t, pp } = ctx;

  // ---- countertops (RC.4) ----
  const inRun = (p, poly) => { let c = false; for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) { const [xi, yi] = poly[i], [xj, yj] = poly[j]; if ((yi > p[1]) !== (yj > p[1]) && p[0] < (xj - xi) * (p[1] - yi) / (yj - yi) + xi) c = !c; } return c; };
  function counterHover(p) {
    const runs = counterRuns(R.cabinets.filter((cb) => cb.storey === ctx.A.S.level), { overhang: R.counter.overhang });
    const run = runs.find((r) => inRun(p, r.poly));
    return run ? { seed: p, run, have: R.counters.find((c) => c.storey === ctx.A.S.level && c.state?.run && inRun(c.seed, run.poly)) || null } : null;
  }
  function counterScene(scene) {
    const k = ctx.A.kb();
    for (const c of R.counters) {
      if (c.storey !== ctx.A.S.level || !c.state?.run) continue;
      const P = c.state.run.poly;
      // out of date (a cabinet placed or removed since): dashed, until it is fitted again
      scene.symbols.push({ key: k + c.id, poly: P, [c.state.stale ? 'dashed' : 'thin']: pp(P) });
    }
  }
  function counterOverlay(o) {
    if (ctx.A.S.tool !== 'countertop' || !R.counter.hover) return;
    const h = R.counter.hover;
    o.walls.push(h.run.poly);
    o.hud = { p: labelPoint(h.run.poly), text: t(h.have ? 'res.ct.hud.fit' : 'res.ct.hud', { n: h.run.cabinets.length, area: fmtArea(h.run.area, ctx.A.units()) }) };
  }
  function counterProps(items, kit) {
    if (items.length !== 1) return null;
    const c = R.counters.find((x) => x.guid === items[0].guid);
    if (!c) return null;
    const run = (ch) => ctx.A.commit(changeCountertop(c.guid, ch), { ...kit.one(t('res.counter')), reselect: () => { const x = R.counters.find((y) => y.guid === c.guid); return x ? [ctx.A.kb() + x.id] : null; } });
    kit.field(t('res.ct.overhang'), kit.lenInput(c.overhang, 'data-mp-ctover', (mm) => run({ overhang: mm }), { allowZero: true }));
    kit.field(t('model.prop.thickness'), kit.lenInput(c.thickness, 'data-mp-ctthick', (mm) => run({ thickness: mm }), { min: 5 }));
    if (c.state?.run) kit.rows.push(el('dt', {}, t('res.ct.area')), el('dd', {}, fmtArea(c.state.run.area, ctx.A.units())), el('dt', {}, t('res.ct.cabinets')), el('dd', {}, String(c.state.run.cabinets.length)));
    const fit = kit.button(t('res.ct.fit'), 'data-mp-ctfit', () => ctx.A.commit(fitCountertop(c.guid), kit.one(t('res.counter'))));
    if (!c.state?.stale) fit.disabled = true;
    kit.field(t('res.ct.cabinetsnow'), el('span', {}, el('span', { className: 'bc-sub' }, t(c.state?.gone ? 'res.ct.gone' : c.state?.stale ? 'res.ct.stale' : 'res.ct.fits') + ' '), fit));
    return { title: t('res.counter') };
  }

  return { inRun, counterHover, counterScene, counterOverlay, counterProps };
}
