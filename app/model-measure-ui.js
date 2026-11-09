/* SPDX-License-Identifier: Apache-2.0 */
/**
 * model-measure-ui.js — Measure on the plan (0.9 D9.3, Discord ask 2026-11-03: "a measure tool to add temporary dimensions
 * in the Plan view"), through model-ui.js `extend()`:
 *   Measure [data-mtool="pmeasure"]  click a point, then another: a dimension between them with the distance, and ΔX / ΔY
 *                                    along the plan's axes (dashed legs). Points snap as the Draw tools do (wall ends and
 *                                    faces, grid lines and crossings, columns); Shift keeps the second point straight across
 *                                    or straight up from the first. Further clicks chain on: each leg is measured and the
 *                                    HUD adds the running total. Esc (or another tool) clears it.
 * Nothing is written to the model: a measure is temporary, never saved and never undone. A saved dimension is Annotate's.
 * The M key opens this tool when only the plan is shown (bimcraft.js); in a layout with the 3D view, M stays the 3D Measure.
 * Test hook: window.bimcraftPlanMeasure = { state, api }.
 */
import { fmtLen } from './model-units.js';

/** The second point kept straight across or straight up from the first (whichever is nearer the pointer). */
export function orthoTo(a, p) {
  return Math.abs(p[0] - a[0]) >= Math.abs(p[1] - a[1]) ? [p[0], a[1]] : [a[0], p[1]];
}
/** The legs of a chain of points: [{ a, b, len, dx, dy }] and the total. Plan mm. */
export function measureLegs(points) {
  const legs = [];
  for (let i = 0; i + 1 < points.length; i++) {
    const a = points[i], b = points[i + 1], dx = b[0] - a[0], dy = b[1] - a[1];
    legs.push({ a, b, len: Math.hypot(dx, dy), dx, dy });
  }
  return { legs, total: legs.reduce((s, l) => s + l.len, 0) };
}

export function mountPlanMeasure(modelUi) {
  const R = { pts: [], hover: null };
  let A = null;
  const t = (...a) => A.t(...a);
  const L = (mm) => fmtLen(mm, A.units());
  const pointAt = (p, e) => {
    let q = A.snapAt(p, null)?.p || p;
    const last = R.pts[R.pts.length - 1];
    if (e?.shiftKey && last) q = orthoTo(last, q);
    return q;
  };
  const hint = () => { const h = A.root.querySelector('[data-model-hint]'); if (h) h.textContent = t(R.pts.length ? 'model.hint.pmeasure2' : 'model.hint.pmeasure'); };
  const clear = () => { R.pts = []; R.hover = null; };

  A = modelUi.extend({
    tools: ['pmeasure'],
    hint: () => 'model.hint.pmeasure',
    typed: () => false,
    move(p, e) { R.hover = pointAt(p, e); },
    click(p, e) {
      R.pts.push(pointAt(p, e));
      hint();
      // the readout stays in the status line too, for a screen reader and for copying
      if (R.pts.length > 1) {
        const { legs, total } = measureLegs(R.pts), l = legs[legs.length - 1];
        A.host.status(t('model.pm.status', { d: L(l.len), dx: L(Math.abs(l.dx)), dy: L(Math.abs(l.dy)) }) + (legs.length > 1 ? ' ' + t('model.pm.total', { d: L(total) }) : ''));
      }
    },
    dbl() { clear(); hint(); A.drawOverlay(); return true; },
    escape() {
      if (A.S.tool !== 'pmeasure' || (!R.pts.length && !R.hover)) return false;
      clear(); hint(); A.drawOverlay();
      return true;
    },
    key() { return false; },
    toolChanged() { clear(); },
    overlay(o) {
      if (A.S.tool !== 'pmeasure') return;
      const pts = R.hover ? [...R.pts, R.hover] : R.pts;
      for (const q of R.pts) o.points.push(q);
      if (R.hover) o.snap = A.snapAt(R.hover, null);
      const { legs, total } = measureLegs(pts);
      for (const l of legs) {
        if (l.len < 1) continue;
        o.dims.push({ a: l.a, b: l.b, text: L(l.len), offPx: 0 });
        // ΔX / ΔY legs: dashed, only when the leg is not already straight
        if (Math.abs(l.dx) > 1 && Math.abs(l.dy) > 1) o.dashed.push([l.a[0], l.a[1], l.b[0], l.a[1]], [l.b[0], l.a[1], l.b[0], l.b[1]]);
      }
      const last = legs[legs.length - 1];
      if (last && last.len >= 1) {
        const lines = [t('model.pm.hud', { d: L(last.len) }), t('model.pm.hud.dxy', { dx: L(Math.abs(last.dx)), dy: L(Math.abs(last.dy)) })];
        if (legs.length > 1) lines.push(t('model.pm.total', { d: L(total) }));
        o.hud = { p: last.b, text: lines.join('\n') };
      }
    },
  });
  if (typeof window !== 'undefined') window.bimcraftPlanMeasure = { state: R, api: A };   // for tests
  return { state: R };
}
