/* SPDX-License-Identifier: Apache-2.0 */
/**
 * walk-measure-ui.js: bimcraft.js's 15 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 bimcraft; no behaviour change).
 * mountWalkMeasure(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { getDisplayUnits, fmtLen, unitMark, lenMark, parseLen } from './model-units.js';
import { t } from './i18n.js';
import { fmtLength, fmtArea, ifcDelta, distance, orthoPoint, axisSnap } from './measure.js';
import { el } from './ui-util.js';

export function mountWalkMeasure(ctx) {
  const { ST, ui, status, guard, locatePoint, locateCloudPoint, stopPlacing, root } = ctx;

  // GH.3-A: the eye height is shown and typed in the display unit (bare number = the pick; a unit mark is read as written); the viewer works in metres
  const eyeShow = () => {
    const u = getDisplayUnits(), m = Number(ctx.uw.height.dataset.eyeM) || 1.6, lab = ctx.uw.height.parentNode, last = lab && lab.lastChild;
    ctx.uw.height.value = fmtLen(m * 1000, u);
    if (last && last.nodeType === 3) last.textContent = unitMark(u) ? ' ' + unitMark(u) : '';
  };
  const eyeBad = () => status(t('walk.bad.height.u', { example: lenMark(1600, getDisplayUnits()) }), true);
  const walkOpts = () => {
    const h = parseLen(String(ctx.uw.height.value).replace(',', '.'), getDisplayUnits()) / 1000;
    if (h > 0 && h < 10) ctx.uw.height.dataset.eyeM = String(h);
    return { height: h, gravity: ctx.uw.gravity.checked, collide: ctx.uw.collide.checked };
  };

  function walkOn() {
    if (!ST.viewer || ST.mode !== 'ifc') return;
    if (ST.meas) measureOff();
    if (ST.placing) stopPlacing();
    ST.walking = true;
    ctx.setPressed('walk', true);
    ctx.uw.bar.hidden = false;
    ctx.uw.out.textContent = t('walk.pick');
    status(t('walk.pick'));
    ST.viewer.walkPick = (pt) => {
      if (!pt) { status(t('walk.nofloor')); return; }
      const o = walkOpts();
      if (!(o.height > 0 && o.height < 10)) { eyeBad(); return; }
      ST.viewer.walkPick = null;
      ST.viewer.startWalk(pt, o);
      const msg = t(root.classList.contains('is-touch') ? 'walk.on.touch' : 'walk.on');
      ctx.uw.out.textContent = msg;
      status(msg);
      ui.canvas.focus?.();
    };
  }
  function walkOff() {
    ST.walking = false;
    if (ST.viewer) { ST.viewer.walkPick = null; ST.viewer.stopWalk(); }
    ctx.uw.bar.hidden = true;
    ctx.setPressed('walk', false);
  }

  const m3 = (v) => fmtLength(v);
  const measurementText = (it) => it.kind === 'distance'
    ? t('measure.result.distance', { d: fmtLength(it.value), dx: m3(it.delta[0]), dy: m3(it.delta[1]), dz: m3(it.delta[2]) })
    : it.kind === 'area' ? t('measure.result.area', { a: fmtArea(it.value) }) : it.text;

  function measureOn(kind = 'distance') {
    ST.paintUi?.close();   // 0.5 RC.7: Measure and Paint both take the 3D view's clicks
    if (!ST.viewer || (ST.mode !== 'ifc' && !ST.pc?.has())) return;
    if (ST.placing) stopPlacing();
    ST.meas = { mode: kind, a: null, items: [], hover: null };
    ST.viewer.measuring = { move: (x, y) => { ST.meas.hover = measureHit(x, y); redrawMeasure(); }, click: measureClick };
    ui.canvasWrap.classList.add('is-measuring');
    ctx.um.bar.hidden = false;
    syncMeasureBar();
    ctx.setPressed('measure', true);
    status(t('measure.start'));
  }
  function measureOff() {
    ST.meas = null;
    if (ST.viewer) { ST.viewer.measuring = null; ST.viewer.setMeasureOverlay(null); }
    ui.canvasWrap.classList.remove('is-measuring');
    ctx.um.labels.replaceChildren();
    ctx.um.bar.hidden = true;
    ctx.setPressed('measure', false);
  }
  function syncMeasureBar() {
    ctx.um.bar.querySelector('[data-measure-ortho]')?.setAttribute('aria-pressed', String(ST.measOrtho));
    ctx.um.bar.querySelectorAll('[data-measure-mode]').forEach((b) => b.setAttribute('aria-pressed', b.dataset.measureMode === ST.meas.mode ? 'true' : 'false'));
    const last = ST.meas.items[ST.meas.items.length - 1];
    ctx.um.out.textContent = last ? (last.lines ? last.lines.join('\n') : last.text) : '';
    ctx.um.out.classList.toggle('is-lines', !!last?.lines);
    ctx.um.copy.hidden = !(last && last.kind === 'point' && last.geo);
  }
  function measureClick(x, y) {
    const h = measureHit(x, y);
    if (!h) { status(t('measure.nothing')); return; }
    if (ST.meas.mode === 'point') { guard(() => (h.snap === 'cloud' && (!ctx.models.length || h.key === null) ? locateCloudPoint(h) : locatePoint(h))); return; }
    if (ST.meas.mode === 'area') {
      if (!h.face || !h.face.tris.length) { status(t('measure.nothing')); return; }
      const T = h.face.tris, c = [0, 0, 0];
      for (let i = 0; i < T.length; i += 3) for (let k = 0; k < 3; k++) c[k] += T[i + k] / (T.length / 3);
      const it = { kind: 'area', tris: T, center: c, value: h.face.area }; it.text = measurementText(it); ST.meas.items.push(it);
    } else if (!ST.meas.a) { ST.meas.a = h.point; status(t('measure.second')); }
    else {
      const a = ST.meas.a, b = h.point, d = ifcDelta(a, b);
      const it = { kind: 'distance', a, b, value: distance(a, b), delta: d }; it.text = measurementText(it); ST.meas.items.push(it);
      ST.meas.a = null;
      status('');
    }
    syncMeasureBar();
    redrawMeasure();
  }
  function measureHit(x, y) {
    const h = ST.viewer.measureAt(x, y);
    if (!h || !ST.meas?.a || ST.meas.mode !== 'distance' || h.snap === 'vertex') return h;
    if (ST.measOrtho || ST.measShift) {   // GH.3-C: held orthogonal (toggle or Shift): the nearest axis; the horizontal two only when looking straight down
      const dir = ST.viewer.camera.position.clone().sub(ST.viewer.controls.target);
      const o = orthoPoint(ST.meas.a, h.point, Math.abs(dir.y) > 0.98 * dir.length());
      return o.point[0] === h.point[0] && o.point[1] === h.point[1] && o.point[2] === h.point[2] ? { ...h, snap: 'ortho' } : { ...h, point: o.point, snap: 'ortho' };
    }
    const point = axisSnap(ST.meas.a, h.point, [x, y], (p) => { const q = ST.viewer.project(p); return q ? [q.x, q.y] : null; });
    return point === h.point ? h : { ...h, point, snap: 'axis' };
  }
  // GH.3-C: Shift held = orthogonal for as long as it is held (read from the keys and from every pointer event, so a click with Shift counts)
  const shiftNow = (v) => { if (v === ST.measShift) return; ST.measShift = v; if (ST.meas?.a) { ST.meas.hover = measureHit(ST.meas.lastX ?? 0, ST.meas.lastY ?? 0) || ST.meas.hover; redrawMeasure(); } };

  function redrawMeasure() {
    if (!ST.meas) return;
    const lines = [], points = [], faces = [];
    for (const it of ST.meas.items) {
      if (it.kind === 'distance') { lines.push([it.a, it.b]); points.push(it.a, it.b); } else if (it.kind === 'point') points.push(it.a); else faces.push(it.tris);
    }
    const h = ST.meas.hover;
    if (ST.meas.a) { points.push(ST.meas.a); if (h) lines.push([ST.meas.a, h.point]); }
    if (ST.meas.mode === 'area' && h?.face?.tris.length) faces.push(h.face.tris);
    ST.viewer.setMeasureOverlay({ lines, points, faces, hover: h && ST.meas.mode !== 'area' ? h : null });
    placeMeasureLabels();
  }
  /** Each measurement's value beside it (distances at the middle, areas at the face's centre), redrawn with the camera. */
  function placeMeasureLabels() {
    if (!ST.meas || !ST.viewer) return;
    const wrap = ui.canvasWrap.getBoundingClientRect();
    const tags = [];
    ST.meas.items.forEach((it, i) => {
      const at = it.kind === 'distance' ? it.a.map((v, k) => (v + it.b[k]) / 2) : it.kind === 'point' ? it.a : it.center;
      const p = ST.viewer.project(at);
      if (!p) return;
      tags.push(el('span', { className: 'bc-measure-label', 'data-measure-label': String(i), style: 'left:' + (p.x - wrap.left).toFixed(1) + 'px;top:' + (p.y - wrap.top).toFixed(1) + 'px' }, it.kind === 'distance' ? fmtLength(it.value) : it.kind === 'point' ? it.label : fmtArea(it.value)));
    });
    const h = ST.meas.hover;
    if (h && ST.meas.mode !== 'area') {
      const p = ST.viewer.project(h.point);
      if (p) tags.push(el('span', { className: 'bc-measure-label', style: 'left:' + (p.x - wrap.left).toFixed(1) + 'px;top:' + (p.y - wrap.top).toFixed(1) + 'px;opacity:.75' }, t('measure.snap.' + h.snap)));
    }
    ctx.um.labels.replaceChildren(...tags);
  }

  return { eyeShow, eyeBad, walkOpts, walkOn, walkOff, measurementText, measureOn, measureOff, syncMeasureBar, shiftNow, redrawMeasure, placeMeasureLabels };
}
