/* SPDX-License-Identifier: Apache-2.0 */
/**
 * stair-sketch-ui.js — a stair from a sketch on the plan (0.8 SU.1055, session `bim-08`), through model-ui.js `extend()`:
 *   Sketch stair  [data-mtool="stairsketch"]  click the walking line's corners (one line straight, two lines an L, three lines a U),
 *                 L draws a landing boundary (click its corners, Enter closes it) that sets the width, Enter places the stair,
 *                 Esc starts over. The stair is an ordinary one afterwards (Properties, handrails, the stairwell above, the checks).
 * The rules are stair-sketch.js; the stair is written by res-stair.js `placeStair`. Test hook: window.bimcraftStairSketch.
 */
import { stairFromSketch } from './stair-sketch.js';
import { placeStair } from './res-stair.js';
import { stairFamily, stairFamilyPlace } from './stair-family.js';
import { importFamily, placeFamily } from './family-ops.js';
import { newFamilyKey } from './family-model.js';
import { fmtLen } from './model-units.js';

export function mountStairSketch(modelUi) {
  const R = { pts: [], landing: [], mode: 'line', hover: null, asFamily: false };
  let A = null;
  const t = (...a) => A.t(...a);
  const hint = () => { const h = A.root.querySelector('[data-model-hint]'); if (h) h.textContent = t(R.mode === 'landing' ? 'model.hint.stairsketch.landing' : R.pts.length ? 'model.hint.stairsketch2' : 'model.hint.stairsketch'); };
  const reset = () => { R.pts = []; R.landing = []; R.mode = 'line'; R.hover = null; };
  const levelHeight = () => {
    const L = A.level(), up = A.levelAbove();
    return up && L ? up.elevation - L.elevation : L?.height || 0;
  };
  const preview = () => { try { return R.pts.length >= 2 ? stairFromSketch(R.pts, { height: levelHeight(), landing: R.landing.length >= 3 ? R.landing : null }) : null; } catch { return null; } };

  function finish() {
    if (R.mode === 'landing') { R.mode = 'line'; hint(); A.drawOverlay(); return true; }
    if (R.pts.length < 2) { A.host.status(t('model.err.stairsketch.lines'), true); return false; }
    let r;
    try { r = stairFromSketch(R.pts, { height: levelHeight(), landing: R.landing.length >= 3 ? R.landing : null }); }
    catch (e) { A.host.status(e.key ? t(e.key) : String(e.message || e), true); return false; }
    const g = (A.S.data?.levels || []).find((l) => l.id === A.S.level)?.guid;
    if (R.asFamily) {   // 0.8 SU.1055 round 5: the stair as a family (family editor, sizes, hotspots), placed as one element: ONE undo step
      let rec;
      try { rec = stairFamily(r.spec, { name: t('model.stairfamily.name'), key: newFamilyKey() }); }
      catch (e) { A.host.status(e.key ? t(e.key) : String(e.message || e), true); return false; }
      const at = stairFamilyPlace(r.spec), imp = importFamily(rec, { key: rec.key }), put = placeFamily({ storey: g, family: rec.key, ...at });
      A.commit((ed) => { const r1 = imp(ed), r2 = put(ed); return { ...r2, journal: A.mergeJournals(r1.journal, r2.journal) }; }, { label: t('model.stairfamily.name'), verb: t('model.verb.placed') });
      A.host.status(t('model.stairfamily.done'));
    } else A.commit(placeStair({ level: g, ...r.spec }), { label: t('res.stair'), verb: t('model.verb.placed') });
    reset(); hint();
    return true;
  }

  A = modelUi.extend({
    tools: ['stairsketch'],
    hint: () => 'model.hint.stairsketch',
    typed: () => false,
    move(p, e) { R.hover = A.snapAt(p, e).p; },
    click(p, e) {
      const q = A.snapAt(p, e).p;
      if (R.mode === 'landing') R.landing.push(q); else { if (R.pts.length < 4) R.pts.push(q); else { A.host.status(t('model.err.stairsketch.lines'), true); return; } }
      hint();
    },
    dbl() { finish(); },
    escape() { if (A.S.tool !== 'stairsketch' || !(R.pts.length || R.landing.length)) return false; reset(); hint(); return true; },
    key(e, low) {
      if (A.S.tool !== 'stairsketch') return false;
      if (e.key === 'Enter') return finish() || true;
      if (low === 'f' && !e.shiftKey && !e.ctrlKey && !e.metaKey) { R.asFamily = !R.asFamily; const c = A.root.querySelector('[data-stairsketch-family]'); if (c) c.checked = R.asFamily; A.host.status(t(R.asFamily ? 'model.stairfamily.on' : 'model.stairfamily.off')); return true; }
      if (low === 'l' && !e.shiftKey) { R.mode = R.mode === 'landing' ? 'line' : 'landing'; if (R.mode === 'landing') R.landing = []; hint(); A.drawOverlay(); return true; }
      return false;
    },
    toolChanged(name) { reset(); if (name === 'stairsketch') hint(); },
    overlay(o) {
      if (A.S.tool !== 'stairsketch') return;
      const pts = R.mode === 'line' && R.hover && R.pts.length ? [...R.pts, R.hover] : R.pts;
      for (let i = 0; i + 1 < pts.length; i++) o.lines.push([pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1]]);
      for (const q of R.pts) o.points.push(q);
      if (R.landing.length) { const l = R.mode === 'landing' && R.hover ? [...R.landing, R.hover] : R.landing; for (let i = 0; i < l.length; i++) { const n = l[(i + 1) % l.length]; if (i + 1 < l.length || R.mode === 'line') o.dashed.push([l[i][0], l[i][1], n[0], n[1]]); } }
      const r = preview();
      if (r) { for (const pc of r.layout.outline || []) o.walls.push(pc); }
      if (R.hover && R.pts.length) o.hud = { p: R.hover, text: fmtLen(Math.hypot(R.hover[0] - R.pts[R.pts.length - 1][0], R.hover[1] - R.pts[R.pts.length - 1][1]), A.S.units) };
    },
  });
  A.root.querySelector('[data-stairsketch-family]')?.addEventListener('change', (e) => { R.asFamily = !!e.target.checked; });
  window.bimcraftStairSketch = { state: R, finish, preview };
  return A;
}
