/* SPDX-License-Identifier: Apache-2.0 */
/**
 * hazard-ui.js — Hazard playback (0.8 EG.47, session bim-sim_PART_2): a <details> under Room acoustics (ui.inc data-eg47). A flood rising through the
 * rooms, wind on the storeys, or an earthquake shaking them, played on a plan or an elevation with a time slider. The cores are hazard.js and
 * hazard-model.js (DOM-free, tools/bimcraft-test/hazard-test.mjs). The models are simple and their assumptions are on the panel. Nothing here
 * changes the model.
 *
 *   mountHazard(host) → { render(), run() } | null          host = { root, editor(), status(text, isError), problems?: window.ccProblems }
 */
import { el } from './ui-util.js';
import { getDisplayUnits, localizeQuantities } from './model-units.js';   // GH.3-A: results in the picked unit
const Q = (s) => localizeQuantities(s, getDisplayUnits());
import { t } from './i18n.js';
import { floodScene, hazardBuilding, hazardFrameBuilding } from './hazard-model.js';
import { floodRun, windRun, quakeRun, staticSway, groundMotion } from './hazard.js';
import { parseScenario, scenarioAt, futureFlood } from './climate.js';   // 0.8 EG.46: the person's own scenario file; no data is shipped

const SAVE = 'bimcraft.hazard';
const num = (v) => { const n = Number(String(v).replace(',', '.')); return Number.isFinite(n) ? n : NaN; };
const label = (text, ctl) => el('label', { className: 'bc-4d-grouplabel' }, el('span', {}, text), ctl);
const fmt = (v, d = 1) => (Number.isFinite(v) ? String(Math.round(v * 10 ** d) / 10 ** d) : '–');

export function mountHazard(host) {
  const box = host.root?.querySelector('[data-eg47]');
  if (!box) return null;
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(SAVE) || '{}') || {}; } catch (e) { saved = {}; }
  const S = { kind: saved.kind || 'flood', peak: saved.peak || '1.5', rise: saved.rise || '60', hold: saved.hold || '0', fall: saved.fall || '0', tol: saved.tol || '',
    wind: saved.wind || '35', gust: saved.gust || '1.2', dir: saved.dir || 'x', mass: saved.mass || '500', T1: saved.T1 || '', pga: saved.pga || '0.3', zeta: saved.zeta || '5', motion: saved.motion || 'ricker', hz: saved.hz || '2', dur: saved.dur || '20', drift: saved.drift || '',
    source: saved.source || 'period', scText: saved.scText || '', year: saved.year || '2050', sc: null, scErr: '',
    run: null, level: '', frame: 0, playing: false };
  if (S.scText) { const p = parseScenario(S.scText); if (p.ok) S.sc = p.scenario; }
  const keep = () => { try { localStorage.setItem(SAVE, JSON.stringify({ kind: S.kind, peak: S.peak, rise: S.rise, hold: S.hold, fall: S.fall, tol: S.tol, wind: S.wind, gust: S.gust, dir: S.dir, mass: S.mass, source: S.source, T1: S.T1, pga: S.pga, zeta: S.zeta, motion: S.motion, hz: S.hz, dur: S.dur, drift: S.drift, scText: S.scText, year: S.year })); } catch (e) { /* private window */ } };
  let src = null, timer = 0, canvas = null;
  const post = (list) => { try { src ||= (host.problems || window.ccProblems)?.source?.({ id: 'bimcraft.hazard', kind: 'engine', label: t('eg47.title') }); src?.set(list); } catch { /* the shell's Problems are not loaded */ } };
  const prob = (code, text, extra = {}) => ({ code, severity: 'warning', msg: { key: 'eg47.p.' + code.split('.')[1], vars: {} }, text, source: { kind: 'engine', name: 'bimcraft.hazard' }, ...extra });

  function run() {
    const ed = host.editor();
    if (!ed) { host.status(t('eg47.nomodel'), true); return null; }
    let r = null;
    try {
      if (S.kind === 'flood') {
        const sc = floodScene(ed);
        if (!sc.rooms.length) { host.status(t('eg47.norooms'), true); return null; }
        const rise = Math.max(1, num(S.rise) || 60) * 60, hold = Math.max(0, num(S.hold) || 0) * 60, fall = Math.max(0, num(S.fall) || 0) * 60, peak0 = Math.max(0.05, num(S.peak) || 1), peak = S.sc ? Math.max(0.05, futureFlood(peak0, S.sc, num(S.year) || 2050)) : peak0;
        const hy = [[0, 0], [rise, peak]];
        if (hold) hy.push([rise + hold, peak]);
        if (fall) hy.push([rise + hold + fall, 0]);
        r = { kind: 'flood', sc, peak, out: floodRun({ rooms: sc.rooms, openings: sc.openings, hydrograph: hy, dt: Math.max(10, Math.round(hy[hy.length - 1][0] / 240)) }) };
        S.level = sc.rooms[0]?.level || '';
      } else {
        let hb;
        if ((S.kind === 'quake' || S.kind === 'wind') && S.source === 'frame') {   // 0.8 EG.47 (bim-sim_PART_3; wind: bim-analysis_PART_4): floor stiffness from the Analysis tab's frame solver
          const fm = host.frameModel?.();
          if (!fm) { host.status(t('eg47.fr.noframe'), true); return null; }
          hb = hazardFrameBuilding(fm, ed, { addKgM2: Math.max(0, num(S.mass) || 500), dir: S.dir });
          if (!hb.storeys.length) { host.status(t('eg47.fr.nofloors'), true); return null; }
        } else hb = hazardBuilding(ed, { massPerM2: Math.max(50, num(S.mass) || 500), T1: num(S.T1) > 0 ? num(S.T1) : null, dir: S.dir });
        if (!hb.storeys.length) { host.status(t('eg47.nostoreys'), true); return null; }
        if (S.kind === 'wind') {
          const w = windRun({ V10: Math.max(1, num(S.wind) || 35), G: Math.max(1, num(S.gust) || 1.2), storeys: hb.storeys.map((s) => ({ z: s.z, h: s.h, width: s.width_m })) });
          r = { kind: 'wind', hb, out: w, sway: staticSway(hb.building, w.floors) };
        } else {
          const dt = 0.005, rec = groundMotion({ kind: S.motion, pga: Math.max(0.01, num(S.pga) || 0.3) * 9.80665, duration: Math.max(5, num(S.dur) || 20), dt, f: Math.max(0.2, num(S.hz) || 2) });
          r = { kind: 'quake', hb, rec, out: quakeRun(hb.building, rec, { dt, zeta: Math.max(0.005, (num(S.zeta) || 5) / 100) }) };
        }
      }
    } catch (err) { host.status(String(err?.message || err), true); return null; }
    S.run = r; S.frame = 0; S.playing = false;
    post(problems(r));
    host.status(t('eg47.done.' + r.kind));
    render();
    return r;
  }
  function problems(r) {
    const out = [];
    if (r.kind === 'flood' && num(S.tol) >= 0 && S.tol !== '') for (const x of r.out.rooms) if (x.maxDepth > num(S.tol) + 1e-9) out.push(prob('hazard.flood', Q(t('eg47.p.flood', { room: x.name, d: fmt(x.maxDepth, 2), tol: num(S.tol) })), { req: { op: '<=', value: num(S.tol), unit: 'm' }, found: { value: Math.round(x.maxDepth * 100) / 100, unit: 'm' } }));
    if (r.kind !== 'flood' && num(S.drift) > 0) {
      const drifts = r.kind === 'wind' ? r.sway.drift : r.out.peak.drift;
      r.hb.storeys.forEach((s, i) => { const ratio = Math.abs(drifts[i]) / s.h; if (ratio > num(S.drift)) out.push(prob('hazard.drift', t('eg47.p.drift', { name: s.name, r: Math.round(ratio * 1e4) / 1e4, lim: num(S.drift) }), { req: { op: '<=', value: num(S.drift), unit: 'ratio' }, found: { value: Math.round(ratio * 1e4) / 1e4, unit: 'ratio' } })); });
    }
    return out;
  }

  function colors() { const cs = getComputedStyle(host.root), get = (v, d) => cs.getPropertyValue(v).trim() || d; return { ink: get('--ink', '#222'), grid: get('--grid', '#ccc'), water: get('--layer-blue', '#2a6fdb'), accent: get('--action', '#2a6fdb'), warn: get('--layer-red', '#c0392b') }; }
  function draw() {
    const r = S.run;
    if (!canvas || !r) return;
    const dpr = window.devicePixelRatio || 1, c = canvas, ctx = c.getContext('2d'), W = c.width = c.clientWidth * dpr, Hh = c.height = c.clientHeight * dpr, col = colors();
    ctx.clearRect(0, 0, W, Hh); ctx.lineWidth = Math.max(1, dpr); ctx.strokeStyle = col.ink;
    if (r.kind === 'flood') {
      const rooms = r.sc.rooms.filter((x) => x.level === S.level);
      let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
      for (const x of rooms) for (const p of x.poly) { x0 = Math.min(x0, p[0]); y0 = Math.min(y0, p[1]); x1 = Math.max(x1, p[0]); y1 = Math.max(y1, p[1]); }
      if (!isFinite(x0)) return;
      const pad = 12 * dpr, k = Math.min((W - 2 * pad) / (x1 - x0 || 1), (Hh - 2 * pad) / (y1 - y0 || 1)), X = (v) => pad + (v - x0) * k, Y = (v) => Hh - pad - (v - y0) * k, i = Math.min(S.frame, r.out.times.length - 1);
      const depthOf = new Map(r.out.rooms.map((x) => [x.id, x.depth[i]]));
      for (const x of rooms) {
        ctx.beginPath(); x.poly.forEach((p, j) => (j ? ctx.lineTo(X(p[0]), Y(p[1])) : ctx.moveTo(X(p[0]), Y(p[1])))); ctx.closePath();
        const d = depthOf.get(x.id) || 0;
        if (d > 0) { ctx.globalAlpha = Math.min(0.85, 0.2 + d / 2.5); ctx.fillStyle = col.water; ctx.fill(); ctx.globalAlpha = 1; }
        ctx.stroke();
      }
      return;
    }
    // elevation: stacked storeys, displaced sideways
    const st = r.hb.storeys, total = r.hb.height || 1, wmax = Math.max(...st.map((s) => s.width_m || 1), 1) * 1.2;
    const pad = 14 * dpr, k = Math.min((W - 2 * pad) / (wmax * 2), (Hh - 2 * pad) / total), cx = W / 2, base = Hh - pad;
    const u = r.kind === 'wind' ? r.sway.u.map((v) => v * Math.min(1, (S.frame + 1) / 60)) : r.out.u.map((h) => h[Math.min(S.frame, h.length - 1)]);
    const peak = r.kind === 'wind' ? Math.max(...r.sway.u.map(Math.abs), 1e-9) : r.out.peak.top || 1e-9, exag = Math.min(60, (wmax * 0.25) / peak);
    ctx.strokeStyle = col.grid; ctx.beginPath(); ctx.moveTo(pad, base); ctx.lineTo(W - pad, base); ctx.stroke(); ctx.strokeStyle = col.ink;
    let z = 0, prevX = cx;
    st.forEach((s, i) => {
      const z1 = z + s.h, ux = cx + u[i] * exag * k, w = (s.width_m || 4) * k * 0.5;
      ctx.beginPath(); ctx.moveTo(prevX - w, base - z * k); ctx.lineTo(prevX + w, base - z * k); ctx.lineTo(ux + w, base - z1 * k); ctx.lineTo(ux - w, base - z1 * k); ctx.closePath(); ctx.stroke();
      if (r.kind === 'wind') { const f = r.out.storeys[i].force / Math.max(...r.out.storeys.map((q) => q.force)), a = 40 * dpr * f + 6 * dpr; ctx.strokeStyle = col.accent; ctx.beginPath(); ctx.moveTo(cx - w - a, base - (z + s.h / 2) * k); ctx.lineTo(cx - w, base - (z + s.h / 2) * k); ctx.stroke(); ctx.strokeStyle = col.ink; }
      z = z1; prevX = ux;
    });
  }

  function playback(r) {
    const last = r.kind === 'flood' ? r.out.times.length - 1 : r.kind === 'wind' ? 60 : r.out.t.length - 1;
    const slider = el('input', { type: 'range', min: 0, max: last, value: S.frame, 'data-eg47-time': '', 'aria-label': t('eg47.time') }), clock = el('span', { className: 'bc-muted', 'data-eg47-clock': '' }, '');
    const tick = () => {
      const f = Math.min(S.frame, last);
      clock.textContent = r.kind === 'flood' ? Q(t('eg47.clock.flood', { min: fmt(r.out.times[f] / 60), level: fmt(r.out.level[f], 2) })) : r.kind === 'wind' ? t('eg47.clock.wind', { pct: Math.round((f + 1) / 0.6) }) : t('eg47.clock.quake', { s: fmt(r.out.t[f], 2) });
      slider.value = f; draw();
    };
    slider.addEventListener('input', () => { S.frame = Number(slider.value); tick(); });
    const play = el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-eg47-play': '' }, t('eg47.play'));
    const stop = () => { S.playing = false; clearInterval(timer); play.textContent = t('eg47.play'); };
    play.addEventListener('click', () => {
      if (S.playing) { stop(); return; }
      if (S.frame >= last) S.frame = 0;
      S.playing = true; play.textContent = t('eg47.pause');
      const stride = r.kind === 'quake' ? 2 : 1;
      timer = setInterval(() => { S.frame = Math.min(last, S.frame + stride); tick(); if (S.frame >= last) stop(); }, 33);
    });
    canvas = el('canvas', { className: 'bc-hazard-plan', 'data-eg47-plan': '', role: 'img', 'aria-label': t('eg47.plan.alt'), style: 'width:100%;height:16rem;border:1px solid var(--grid)' });
    const parts = [];
    if (r.kind === 'flood') { const lv = el('select', { className: 'select-cc', 'data-eg47-level': '' }, [...new Map(r.sc.rooms.map((x) => [x.level, x.levelName])).entries()].map(([g, n]) => el('option', { value: g }, n))); lv.value = S.level; lv.addEventListener('change', () => { S.level = lv.value; draw(); }); parts.push(label(t('eg47.level'), lv)); }
    setTimeout(tick, 0);
    return el('div', { 'data-eg47-playback': '' }, ...parts, canvas, el('div', { className: 'bc-find-row' }, play, slider, clock));
  }

  function results(r) {
    const rows = [];
    if (r.kind === 'flood') {
      const wet = r.out.rooms.filter((x) => x.firstWet !== null);
      rows.push(el('p', { 'data-eg47-sum': '' }, Q(t('eg47.sum.flood', { n: r.out.wetCount, all: r.out.rooms.length, peak: fmt(r.out.peak, 2), push: fmt(Math.round(0.5 * 1000 * 9.80665 * r.out.peak * r.out.peak) / 1000) }))));
      if (wet.length) rows.push(el('div', { style: 'overflow-x:auto' }, el('table', { className: 'bc-qto-table', 'data-eg47-table': '' }, el('thead', {}, el('tr', {}, ...[t('eg47.col.room'), t('eg47.col.first'), t('eg47.col.depth'), t('eg47.col.for')].map((h) => el('th', {}, h)))),
        el('tbody', {}, ...wet.map((x) => el('tr', {}, el('td', {}, x.name), el('td', {}, fmt(x.firstWet / 60) + ' min'), el('td', {}, Q(fmt(x.maxDepth, 2) + ' m')), el('td', {}, fmt(x.wetFor / 60) + ' min')))))));
      rows.push(el('p', { className: 'bc-muted' }, t('eg47.model.flood')));
    } else {
      const names = r.hb.storeys;
      if (r.kind === 'wind') {
        rows.push(el('p', { 'data-eg47-sum': '' }, t('eg47.sum.wind', { v: fmt(r.out.base.shear / 1000), m: fmt(r.out.base.moment / 1000) })));
        rows.push(el('div', { style: 'overflow-x:auto' }, el('table', { className: 'bc-qto-table', 'data-eg47-table': '' }, el('thead', {}, el('tr', {}, ...[t('eg47.col.storey'), t('eg47.col.force'), t('eg47.col.sway'), t('eg47.col.ratio')].map((h) => el('th', {}, h)))),
          el('tbody', {}, ...names.map((s, i) => el('tr', {}, el('td', {}, s.name), el('td', {}, fmt(r.out.storeys[i].force / 1000) + ' kN'), el('td', {}, Q(fmt(r.sway.u[i] * 1000) + ' mm')), el('td', {}, fmt(r.sway.drift[i] / s.h, 4))))))));
        rows.push(el('p', { className: 'bc-muted' }, t('eg47.model.wind')));
      } else {
        const p = r.out.peak;
        rows.push(el('p', { 'data-eg47-sum': '' }, Q(t('eg47.sum.quake', { v: fmt(p.shear / 1000), top: fmt(p.top * 1000), T: fmt(r.hb.T1, 2) }))));
        if (r.hb.assumedT1) rows.push(el('p', { className: 'bc-note', 'data-eg47-assumed': '' }, t('eg47.assumed', { T: fmt(r.hb.T1, 2) })));
        rows.push(el('div', { style: 'overflow-x:auto' }, el('table', { className: 'bc-qto-table', 'data-eg47-table': '' }, el('thead', {}, el('tr', {}, ...[t('eg47.col.storey'), t('eg47.col.drift'), t('eg47.col.ratio'), t('eg47.col.acc')].map((h) => el('th', {}, h)))),
          el('tbody', {}, ...names.map((s, i) => el('tr', {}, el('td', {}, s.name), el('td', {}, Q(fmt(p.drift[i] * 1000) + ' mm')), el('td', {}, fmt(p.drift[i] / s.h, 4)), el('td', {}, fmt(p.acc[i] / 9.80665, 2) + ' g')))))));
        rows.push(el('p', { className: 'bc-muted' }, t('eg47.model.quake')));
      }
    }
    for (const p of problems(r)) rows.push(el('p', { className: 'bc-note', 'data-eg47-problem': p.code }, '⚠ ' + p.text));
    return rows;
  }

  function render() {
    clearInterval(timer);
    const ed = host.editor();
    if (!ed) { box.replaceChildren(el('p', { className: 'bc-muted' }, t('eg47.nomodel'))); return; }
    const kind = el('select', { className: 'select-cc', 'data-eg47-kind': '' }, [['flood', t('eg47.k.flood')], ['wind', t('eg47.k.wind')], ['quake', t('eg47.k.quake')]].map(([v, l]) => el('option', { value: v }, l)));
    kind.value = S.kind; kind.addEventListener('change', () => { S.kind = kind.value; S.run = null; keep(); render(); });
    const field = (k, text) => { const i = el('input', { className: 'bc-input', value: S[k], 'data-eg47-field': k, 'aria-label': text }); i.addEventListener('input', () => { S[k] = i.value; keep(); }); return label(text, i); };
    const motion = el('select', { className: 'select-cc', 'data-eg47-motion': '' }, [['ricker', t('eg47.m.ricker')], ['noise', t('eg47.m.noise')]].map(([v, l]) => el('option', { value: v }, l)));
    motion.value = S.motion; motion.addEventListener('change', () => { S.motion = motion.value; keep(); });
    const dir = el('select', { className: 'select-cc', 'data-eg47-dir': '' }, [['x', t('eg47.dir.x')], ['y', t('eg47.dir.y')]].map(([v, l]) => el('option', { value: v }, l)));
    dir.value = S.dir; dir.addEventListener('change', () => { S.dir = dir.value; keep(); });
    const rows = [el('p', { className: 'bc-muted' }, t('eg47.intro')), label(t('eg47.kind'), kind)];
    if (S.kind === 'flood') {
      rows.push(field('peak', t('eg47.peak')), field('rise', t('eg47.rise')), field('hold', t('eg47.hold')), field('fall', t('eg47.fall')), field('tol', t('eg47.tol')));
      const file = el('input', { type: 'file', accept: '.json,.csv,.txt', 'data-eg46-file': '', 'aria-label': t('eg46.load') });
      file.addEventListener('change', async () => {
        const f = file.files?.[0];
        if (!f) return;
        const text = await f.text(), p = parseScenario(text);
        if (!p.ok) { S.scErr = p.errors.slice(0, 3).join('; '); S.sc = null; S.scText = ''; } else { S.sc = p.scenario; S.scText = text.length < 200000 ? text : ''; S.scErr = ''; }
        keep(); render();
      });
      rows.push(el('p', { className: 'bc-h' }, t('eg46.title')), el('p', { className: 'bc-muted' }, t('eg46.intro')), label(t('eg46.load'), file));
      if (S.scErr) rows.push(el('p', { className: 'bc-note', 'data-eg46-error': '' }, t('eg46.bad', { why: S.scErr })));
      if (S.sc) {
        const yr = num(S.year) || 2050, at = scenarioAt(S.sc, yr), inp = el('input', { className: 'bc-input', value: S.year, 'data-eg46-year': '', 'aria-label': t('eg46.year') });
        inp.addEventListener('change', () => { S.year = inp.value; keep(); render(); });
        rows.push(label(t('eg46.year'), inp), el('p', { 'data-eg46-info': '' }, Q(t('eg46.info', { name: S.sc.name || t('eg46.unnamed'), source: S.sc.source || t('eg46.nosource'), year: yr, rise: fmt(at.seaLevelRiseM, 2), factor: fmt(at.floodFactor, 2), peak: fmt(futureFlood(Math.max(0.05, num(S.peak) || 1), S.sc, yr), 2) }))));
        if (!at.exact) rows.push(el('p', { className: 'bc-note' }, t('eg46.noexact')));
        rows.push(el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-eg46-clear': '', onClick: () => { S.sc = null; S.scText = ''; keep(); render(); } }, t('eg46.clear')));
      }
    }
    else {
      if (S.kind === 'wind') rows.push(field('wind', t('eg47.wind')), field('gust', t('eg47.gust')), label(t('eg47.dir'), dir));
      {
        const srcSel = el('select', { className: 'select-cc', 'data-eg47-source': '' }, [['period', t('eg47.fr.src.period')], ['frame', t('eg47.fr.src.frame')]].map(([v, l]) => el('option', { value: v }, l)));
        srcSel.value = S.source; srcSel.addEventListener('change', () => { S.source = srcSel.value; keep(); render(); });
        rows.push(label(t('eg47.fr.src'), srcSel));
        if (S.source === 'frame') rows.push(...(S.kind === 'wind' ? [] : [label(t('eg47.dir'), dir)]), el('p', { className: 'bc-muted' }, t('eg47.fr.intro')));
      }
      if (S.kind === 'quake') rows.push(field('pga', t('eg47.pga')), label(t('eg47.motion'), motion), field('hz', t('eg47.hz')), field('dur', t('eg47.dur')), field('zeta', t('eg47.zeta')));
      rows.push(field('mass', t('eg47.mass')), ...(S.source === 'frame' ? [] : [field('T1', t('eg47.period'))]), field('drift', t('eg47.drift')));
    }
    rows.push(el('div', { className: 'bc-find-row' }, el('button', { type: 'button', className: 'btn-plot btn-sm-cc', 'data-eg47-run': '', onClick: () => run() }, t('eg47.run'))));
    if (S.run) rows.push(...results(S.run), playback(S.run));
    box.replaceChildren(...rows);
  }
  window.addEventListener('bimcraft-units', () => { try { render(); } catch (e) { /* GH.3-A: the tab has nothing to show yet */ } });   // results follow the display unit
  return { render, run, last: () => S.run };
}
