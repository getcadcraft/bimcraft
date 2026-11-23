/* SPDX-License-Identifier: Apache-2.0 */
/**
 * rsu-takeoff.js: res-ui.js's 3 bindings for this topic, moved out of mountRes() unchanged (0.11 PERF.78, perf-finish-11 bimcraft: one module per panel section; no behaviour change).
 * mountRsuTakeoff(ctx) is called once by mountRes(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables mountRes() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { wallType, typeName as wallTypeName } from './model-walls.js';
import { readOpenings, openingType, openingTypeName } from './model-openings.js';
import { loopAt } from './model-rooms.js';
import { roofGeometry, edgeKinds } from './res-roof.js';
import { lumberList } from './res-framing.js';
import { isMetric } from './model-units.js';
import { readMethodSetting } from './quantity-method.js';
import { modelQuantities, buildTakeoff } from './res-takeoff.js';
import { PAPERS } from './res-sheets.js';
import { newHandoffId, putHandoff } from './handoff.js';

export function mountRsuTakeoff(ctx) {
  const { R, t, L, writer } = ctx;

  // ---- the takeoff (RC.8) ----
  /** What the model holds now, as modelQuantities (res-takeoff.js) wants it. */
  function takeoffData() {
    const w = writer(), D = ctx.A.S.data;
    if (!w || !D) return null;
    const levels = D.levels || [];
    const walls = (D.walls || []).map((x) => { const ty = (x.assembly || wallType(x.typeKey)); return { ...x, typeName: ty ? wallTypeName(ty) : (x.typeName || x.typeKey), exterior: ty?.exterior !== false }; });
    const openings = readOpenings(w, null, D.walls || []).map((o) => { const ty = openingType(o.typeKey); return { ...o, typeName: ty ? openingTypeName(ty) : o.typeName }; });
    const loops = new Map();
    const loopsFor = (id) => { if (!loops.has(id)) loops.set(id, ctx.A.loopsOf(id)); return loops.get(id); };
    const roofs = [];
    for (const r of D.derived?.roofs || []) {
      const wl = levels.find((l) => l.guid === r.walls);
      const o = wl && loopAt(loopsFor(wl.id).outlines, r.seed);
      if (o) roofs.push({ storey: r.storey, plan: roofGeometry(o.poly, edgeKinds(o.poly, ctx.A.wallsOn(wl.id), r), { thickness: r.thickness, fascia: r.fascia, soffit: r.soffit }) });
    }
    const rooms = levels.flatMap((l) => (loopsFor(l.id)?.rooms || []).map((r) => ({ storey: l.id, poly: r.poly, holes: r.holes || [] })));
    const scenes = new Map(levels.map((l) => [l.id, ctx.A.sceneFor(l.id)]));
    const base = String(ctx.A.host.fileName?.() || 'model').replace(/\.ifc$/i, '');
    return { name: base + ' — ' + t('res.to.button').toLowerCase(), units: ctx.A.units(), levels, scenes, walls, openings, roofs, founds: R.founds, cabinets: R.cabinets, devs: R.devs, rooms,
      lumber: lumberList(w, { metric: isMetric(ctx.A.units()) }).rows, fmtLen: L, date: new Date().toISOString().slice(0, 10), method: readMethodSetting(w).method };   // i18n-ignore: a file name   (method: 0.10 BK.42, the project's measurement method)
  }
  async function makeTakeoff() {
    const d = takeoffData();
    if (!d) return null;
    const input = modelQuantities(d, t);
    ctx.A.ask('takeoffExtra', input);   // 0.6 DF.29: pipes, ducts, fittings and valves (mep-ui.js)
    input.paper = (() => { let p = null; try { p = localStorage.getItem('bimcraft.sheets.paper'); } catch (e) { /* none */ } return PAPERS[p] ? p : null; })();
    return buildTakeoff(input);
  }
  function takeoffClick() {
    const btn = ctx.A.root.querySelector('[data-res-takeoff]');
    const url = btn?.dataset.handoffUrl || '';
    // the hand-off's tab opens inside the click (pop-up blockers); the file follows in a moment
    let id = null, tab = null;
    if (url) { id = newHandoffId(); tab = window.open(url + '?handoff=' + id, '_blank'); }
    ctx.A.host.status(t('res.sh.making'));
    makeTakeoff().then(async (r) => {
      if (!r?.pdf) { if (tab) tab.close(); ctx.A.host.status(t('res.to.none'), true); return; }
      const file = new File([r.pdf], r.name, { type: 'application/pdf' });
      if (tab) { await putHandoff(id, file, 'bimcraft'); ctx.A.host.status(t('res.to.sent', { items: r.takeoff.items.length, marks: r.takeoff.marks.length })); return; }
      ctx.A.host.download(r.name, r.pdf, 'application/pdf');
      ctx.A.host.status(t('res.to.saved', { file: r.name }));
    }).catch((e) => { console.error(e); if (tab) tab.close(); ctx.A.host.status(t('res.to.failed', { why: e.message || e }), true); });
  }

  return { makeTakeoff, takeoffClick };
}
