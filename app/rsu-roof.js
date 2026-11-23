/* SPDX-License-Identifier: Apache-2.0 */
/**
 * rsu-roof.js: res-ui.js's 5 bindings for this topic, moved out of mountRes() unchanged (0.11 PERF.78, perf-finish-11 bimcraft: one module per panel section; no behaviour change).
 * mountRsuRoof(ctx) is called once by mountRes(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables mountRes() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { placeRoofPlane, planeFrame, changeRoofPlane } from './res-roofplane.js';
import { fmtPitch, parsePitch, fmtArea } from './model-units.js';
import { el } from './ui-util.js';

export function mountRsuRoof(ctx) {
  const { R, t, L, levelGuid, snap, again } = ctx;

  // ---- roof planes (RC.1) ----
  function planeClick(p, e) {
    const pts = R.plane.pts || (R.plane.pts = []);
    const s = snap(p, e, pts).p;
    if (pts.length >= 3 && Math.hypot(s[0] - pts[0][0], s[1] - pts[0][1]) <= ctx.A.pv().pxToMm(10)) { finishPlane(); return; }
    if (pts.length && Math.hypot(s[0] - pts[pts.length - 1][0], s[1] - pts[pts.length - 1][1]) < 1) return;
    pts.push(s);
  }
  function finishPlane() {
    const pts = R.plane.pts;
    R.plane.pts = null;
    if (!pts || pts.length < 3) { ctx.A.host.status(t('res.err.plane'), true); return; }
    ctx.A.commit(placeRoofPlane({ level: levelGuid(), points: pts, pitch: R.plane.pitch, base: R.plane.base ?? undefined }), { label: t('res.roofplane'), verb: t('model.verb.placed') });
  }
  function planeOverlay(o) {
    const pts = R.plane.pts;
    if (ctx.A.S.tool !== 'roofplane') return;
    const cur = R.plane.at;
    if (cur) o.snap = cur;
    if (!pts || !pts.length) { if (cur) o.hud = { p: cur.p, text: t('res.rp.hud.start') }; return; }
    const all = cur ? [...pts, cur.p] : pts.slice();
    for (const q of pts) o.points.push(q);
    for (let i = 0; i + 1 < all.length; i++) (i === 0 ? o.lines : o.dashed).push([all[i][0], all[i][1], all[i + 1][0], all[i + 1][1]]);
    if (all.length >= 3) o.dashed.push([all[all.length - 1][0], all[all.length - 1][1], all[0][0], all[0][1]]);
    if (cur) {
      const a = pts[pts.length - 1], b = cur.p;
      o.dims.push({ a, b, off: ctx.A.pv().pxToMm(16), text: L(Math.hypot(b[0] - a[0], b[1] - a[1])) });
      o.hud = { p: b, text: (pts.length === 1 ? t('res.rp.hud.eave') : fmtPitch(R.plane.pitch, ctx.A.units())) + (pts.length >= 3 && Math.hypot(b[0] - pts[0][0], b[1] - pts[0][1]) <= ctx.A.pv().pxToMm(10) ? '\n' + t('model.hud.close') : '') };
    }
  }
  function planesScene(scene) {
    const lv = ctx.A.level();
    if (!lv) return;
    const k = ctx.A.kb(), levels = ctx.A.S.data?.levels || [];
    for (const rp of R.planes) {
      // drawn on the level it sits on (the one above the level it was drawn on), like the automatic roofs
      if (rp.storey !== lv.id || rp.points.length < 3) continue;
      const drawnOn = levels.find((l) => l.guid === rp.level);
      if (!drawnOn) continue;
      const P = rp.points, eave = [P[0][0], P[0][1], P[1][0], P[1][1]];
      const dashed = P.map((p, i) => [p[0], p[1], P[(i + 1) % P.length][0], P[(i + 1) % P.length][1]]).slice(1);
      // an arrow up the slope from the eave's middle
      const f = planeFrame(P), m = [(P[0][0] + P[1][0]) / 2, (P[0][1] + P[1][1]) / 2], len = Math.min(900, Math.hypot(P[1][0] - P[0][0], P[1][1] - P[0][1]) / 3);
      const tip = [m[0] + f.n[0] * len, m[1] + f.n[1] * len], hw = len / 5;
      const thin = [eave, [m[0], m[1], tip[0], tip[1]], [tip[0], tip[1], tip[0] - f.n[0] * hw + f.u[0] * hw / 2, tip[1] - f.n[1] * hw + f.u[1] * hw / 2], [tip[0], tip[1], tip[0] - f.n[0] * hw - f.u[0] * hw / 2, tip[1] - f.n[1] * hw - f.u[1] * hw / 2]];
      scene.symbols.unshift({ key: k + rp.id, dashed, thin, poly: P, roof: true });   // first: a plane over a roof picks before it
    }
  }
  function planeProps(items, kit) {
    if (items.length !== 1) return null;
    const rp = R.planes.find((x) => x.guid === items[0].guid);
    if (!rp) return null;
    const run = (ch) => ctx.A.commit(changeRoofPlane(rp.guid, ch), { ...kit.one(t('res.roofplane')), reselect: again(() => R.planes, rp.guid) });
    const pi = el('input', { type: 'text', className: 'bc-input bc-num', value: fmtPitch(rp.pitch, ctx.A.units()), 'data-mp-rppitch': '' });
    pi.addEventListener('change', () => { const d = parsePitch(pi.value); if (d >= 0 && d < 80) run({ pitch: d }); else { ctx.A.host.status(t('model.err.pitch'), true); pi.value = pi.defaultValue; } });
    pi.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); pi.blur(); } });
    kit.field(t('model.rf.pitch'), pi);
    kit.field(t('res.rp.base'), kit.lenInput(rp.base, 'data-mp-rpbase', (mm) => run({ base: mm }), { any: true }));
    kit.field(t('model.prop.thickness'), kit.lenInput(rp.thickness, 'data-mp-rpthick', (mm) => run({ thickness: mm }), { min: 10 }));
    const P = rp.points;
    let a = 0; for (let i = 0; i < P.length; i++) { const p = P[i], q = P[(i + 1) % P.length]; a += p[0] * q[1] - p[1] * q[0]; }
    kit.rows.push(el('dt', {}, t('res.rp.area')), el('dd', {}, fmtArea(Math.abs(a / 2) / Math.cos(rp.pitch * ctx.D2R), ctx.A.units())));
    return { title: t('res.roofplane') };
  }

  return { planeClick, finishPlane, planeOverlay, planesScene, planeProps };
}
