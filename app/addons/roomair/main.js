/* SPDX-License-Identifier: Apache-2.0 */
/**
 * main.js — the Room air add-on (0.11 SU.1812, su-finish-11 lane cfd): air speed, temperature and humidity in one room, from its terminals and fan coils, on our own
 * solver (lib/room.js over lib/lbm3d.js; both copied from lib/cfd/ by tools/cfd/sync.mjs, never edited here). One panel tab; nothing is written into the model.
 *
 *   Room (from the model's rooms, or typed) → Terminals (read from the model, or typed: one per line) → Heat and moisture sources → Start air → Grid and time →
 *   Run (in steps, the page stays live; Stop) → occupied-zone numbers, the air in and out, a plan or section coloured by speed, temperature or humidity → CSV.
 *   Every result says what the model leaves out and that it has not been compared with measured room air (the comparison waits on the measured numbers).
 */
import { RoomRun, cleanSpec, compareProfiles, DEFAULTS } from './lib/room.js';
import * as hostMod from './host.js';

const SETTINGS = {
  outline: '0, 0\n4000, 0\n4000, 3000\n0, 3000', height: 2700,
  terminals: 'supply, 1000, 1500, 2700, 600, 600, 80, 14, 90\nreturn, 3000, 1500, 2700, 600, 600, 80',
  sources: '1800, 1300, 0, 2200, 1700, 1200, 120, 60', startT: 24, startRh: 50, grid: 'quick', seconds: 120,
};
const GRIDS = { quick: 12000, normal: 40000 };
const QUANT = ['speed', 'T', 'rh'];

export function activate(api) {
  const t = (k, v) => api.t(k, v);
  const host = typeof hostMod.detect === 'function' ? hostMod.detect(api) : null;
  const S = { ...SETTINGS, ...(safe(() => api.storage.get('settings')) || {}) };
  const R = { rooms: null, roomPick: -1, run: null, result: null, busy: false, stop: false, error: '', message: '', view: { q: 'speed', axis: 'z', at: 1100 }, measured: null };
  let pane = null, styleEl = null;
  function safe(fn) { try { return fn(); } catch { return null; } }
  const save = () => { safe(() => api.storage.set('settings', { ...S })); };
  const fmt = (x, d = 0) => (Number.isFinite(x) ? x.toFixed(d) : '-');
  const failure = (e) => (e && e.key ? t(e.key, e.vars || {}) : String((e && e.message) || e));

  // ------------------------------------------------------------------------------------------------ reading the form
  const rows = (text, min) => String(text || '').split(/\n|;/).map((l) => l.trim()).filter(Boolean).map((l) => l.split(/\s*,\s*/)).filter((r) => r.length >= min);
  const outline = () => rows(S.outline, 2).map((r) => [Number(r[0]), Number(r[1])]).filter((p) => p.every(Number.isFinite));
  /** kind, x, y, z, w, d, L/s, T, RH, rot, name  (a fan coil: w = its length, d = its width; its height is 270 mm unless an 12th value says) */
  const terminalsOf = () => rows(S.terminals, 7).map((r, i) => ({ kind: r[0].toLowerCase(), x: +r[1], y: +r[2], z: +r[3], w: +r[4], d: +r[5], flowLps: +r[6], T: r[7] === undefined || r[7] === '' ? NaN : +r[7],
    rh: r[8] === undefined || r[8] === '' ? NaN : +r[8], rot: +(r[9] || 0), name: r[10] || r[0] + ' ' + (i + 1), h: r[11] ? +r[11] : 270 }));
  /** x0, y0, z0, x1, y1, z1, watts, g/h */
  const sourcesOf = () => rows(S.sources, 7).map((r, i) => ({ name: t('src.name', { n: i + 1 }), x0: +r[0], y0: +r[1], z0: +r[2], x1: +r[3], y1: +r[4], z1: +r[5], watts: +r[6], moistureGph: +(r[7] || 0) }));
  const specOf = () => ({ poly: outline(), height: Number(S.height), terminals: terminalsOf(), sources: sourcesOf(), start: { T: Number(S.startT), rh: Number(S.startRh) },
    maxCells: GRIDS[S.grid] || GRIDS.quick, seconds: Number(S.seconds) });

  // ------------------------------------------------------------------------------------------------ the model
  async function readRooms() {
    if (!host) { R.rooms = []; render(); return; }
    try { R.rooms = await host.rooms(); } catch (e) { R.rooms = []; R.error = failure(e); }
    render();
  }
  async function useRoom(i) {
    const r = (R.rooms || [])[i];
    if (!r) return;
    R.roomPick = i; R.result = null; R.run = null; R.message = ''; R.error = '';
    S.outline = r.poly.map((p) => p[0] + ', ' + p[1]).join('\n');
    if (r.height) S.height = r.height;
    let ts = [];
    try { ts = await host.terminals(r); } catch (e) { R.error = failure(e); }
    if (ts.length) {
      S.terminals = ts.map((x) => [x.kind, Math.round(x.x), Math.round(x.y), Math.round(x.z), Math.round(x.w), Math.round(x.d), x.flowLps, Number.isFinite(x.T) ? x.T : '', Number.isFinite(x.rh) ? x.rh : '', x.rot, String(x.name).replace(/,/g, ' ')].concat(x.kind === 'fancoil' ? [Math.round(x.h)] : []).join(', ')).join('\n');
      R.message = t('term.read', { n: ts.length }) + (ts.some((x) => !(x.flowLps > 0)) ? ' ' + t('term.noflow') : '') + (ts.some((x) => x.kind === 'supply' || x.kind === 'fancoil') ? ' ' + t('term.defaults') : '');
    } else R.message = t('term.none');
    save(); render();
  }

  // ------------------------------------------------------------------------------------------------ the run
  async function start() {
    if (R.busy) return;
    R.error = ''; R.message = ''; R.result = null; R.stop = false;
    let run;
    try { cleanSpec(specOf()); run = new RoomRun(specOf()); } catch (e) { R.error = failure(e); render(); return; }
    R.run = run; R.busy = true; render();
    const perStep = run.grid.cells * 1.2e-3;   // ms, a browser's usual pace for this solver; each chunk is about 60 ms so the page stays live
    const chunk = Math.max(5, Math.round(60 / perStep));
    while (!run.done && !R.stop) {
      run.advance(chunk);
      const bar = pane && pane.querySelector('[data-ra-progress]');
      if (bar) { bar.value = run.progress; bar.textContent = Math.round(run.progress * 100) + ' %'; }
      const said = pane && pane.querySelector('[data-ra-progress-text]');
      if (said) said.textContent = t('run.progress', { s: fmt(run.steps * run.lattice.dt, 0), of: fmt(run.spec.seconds, 0) });
      await new Promise((r) => setTimeout(r, 0));
    }
    R.busy = false;
    R.result = run.result();
    if (run.failed) R.error = failure(run.failed);
    else if (R.stop) R.message = t('run.stopped', { s: fmt(R.result.time, 0) });
    if (!R.result.ok) R.result = null;
    if (R.result) R.view.at = R.view.axis === 'z' ? 1100 : R.view.axis === 'x' ? centre()[0] : centre()[1];
    render();
  }
  const centre = () => { const p = outline(); if (!p.length) return [0, 0]; const xs = p.map((q) => q[0]), ys = p.map((q) => q[1]); return [(Math.min(...xs) + Math.max(...xs)) / 2, (Math.min(...ys) + Math.max(...ys)) / 2]; };

  // ------------------------------------------------------------------------------------------------ drawing a plane
  const ramp = (f) => { f = Math.max(0, Math.min(1, f)); const stops = [[49, 54, 149], [69, 117, 180], [116, 173, 209], [254, 224, 144], [244, 109, 67], [165, 0, 38]]; const x = f * (stops.length - 1), i = Math.min(stops.length - 2, Math.floor(x)), u = x - i; return stops[i].map((c, k) => Math.round(c + (stops[i + 1][k] - c) * u)); };
  const unitOf = (q) => (q === 'speed' ? 'm/s' : q === 'T' ? '°C' : '%');
  function planeCanvas(r) {
    const sec = r.section({ axis: R.view.axis, at: R.view.at, q: R.view.q }), px = Math.max(4, Math.min(16, Math.floor(420 / Math.max(sec.cols, sec.rows))));
    const cv = document.createElement('canvas'); cv.width = sec.cols * px; cv.height = sec.rows * px;
    cv.setAttribute('data-ra-canvas', R.view.q + ':' + R.view.axis); cv.setAttribute('role', 'img'); cv.setAttribute('aria-label', t('view.aria', { q: t('q.' + R.view.q) }));
    const g = cv.getContext && cv.getContext('2d');
    const lo = sec.min, hi = sec.max > sec.min ? sec.max : sec.min + 1e-6;
    if (g) for (let v = 0; v < sec.rows; v++) for (let u = 0; u < sec.cols; u++) {
      const x = sec.values[u + sec.cols * v];
      g.fillStyle = x === x ? 'rgb(' + ramp((x - lo) / (hi - lo)).join(',') + ')' : '#9a9a9a';
      g.fillRect(u * px, (sec.rows - 1 - v) * px, px, px);
    }
    const legend = h('div', { class: 'ra-row', 'data-ra-legend': '' }, [0, 0.25, 0.5, 0.75, 1].map((f) => h('span', { style: 'padding:.1rem .4rem;color:#fff;text-shadow:0 0 2px #000;background:rgb(' + ramp(f).join(',') + ')' }, fmt(lo + f * (hi - lo), R.view.q === 'speed' ? 2 : 1) + ' ' + unitOf(R.view.q))));
    return h('figure', { style: 'margin:0' }, cv, legend, h('figcaption', { class: 'ra-note' }, t('view.caption.' + R.view.axis, { at: Math.round(R.view.at) })));
  }
  function sectionCsv(r) {
    const sec = r.section({ axis: R.view.axis, at: R.view.at, q: R.view.q }), lines = [[t('csv.u'), t('csv.v'), t('q.' + R.view.q) + ' (' + unitOf(R.view.q) + ')'].join(',')];
    for (let v = 0; v < sec.rows; v++) for (let u = 0; u < sec.cols; u++) { const x = sec.values[u + sec.cols * v]; if (x === x) lines.push([Math.round(sec.origin[0] + (u + 0.5) * sec.cell), Math.round(sec.origin[1] + (v + 0.5) * sec.cell), x.toFixed(4)].join(',')); }
    return lines.join('\n') + '\n';
  }
  function download(text, name, mime) {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([text], { type: mime })); a.download = name; a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 4000);
  }

  // ------------------------------------------------------------------------------------------------ the panel
  const h = (tag, attrs = {}, ...kids) => {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) {
      if (v === false || v === null || v === undefined) continue;
      if (k === 'class') n.className = v; else if (k.startsWith('on')) n.addEventListener(k.slice(2), v); else if (k === 'value') n.value = v; else if (k === 'checked' || k === 'selected' || k === 'disabled') n[k] = !!v; else n.setAttribute(k, v === true ? '' : String(v));
    }
    for (const c of kids.flat()) if (c !== null && c !== undefined && c !== false) n.append(c.nodeType ? c : document.createTextNode(String(c)));
    return n;
  };
  const field = (key, label, o = {}) => h('label', {}, label, h('input', { type: 'number', value: S[key], step: o.step ?? 'any', min: o.min, max: o.max, 'data-ra': key, onchange: (e) => { S[key] = Number(e.target.value); save(); } }), o.unit ? h('span', { class: 'ra-note' }, o.unit) : null);
  const area = (key, label, hint) => h('label', { style: 'display:block' }, label, h('textarea', { 'data-ra': key, rows: 4, onchange: (e) => { S[key] = e.target.value; save(); } }, S[key]), h('span', { class: 'ra-note', style: 'display:block' }, hint));
  const table = (attr, pairs) => h('table', { [attr]: '' }, pairs.map(([a, b, k]) => h('tr', k ? { 'data-ra-row': k } : {}, h('th', { class: 'ra-note' }, a), h('td', {}, b))));

  function results(r) {
    const z = r.zone, kids = [h('h4', {}, t('sec.result'))];
    kids.push(h('p', { class: 'ra-note', 'data-ra-facts': '' }, t('res.facts', { s: fmt(r.time, 0), cells: r.grid.cells, cell: r.grid.cell, mb: fmt(r.memoryBytes / 1e6, 1) })));
    if (z) kids.push(table('data-ra-zone', [
      [t('res.speed'), fmt(z.speedMean, 2) + ' / ' + fmt(z.speedMax, 2) + ' m/s', 'speed'],
      [t('res.temp'), fmt(z.Tmin, 1) + ' / ' + fmt(z.Tmean, 1) + ' / ' + fmt(z.Tmax, 1) + ' °C', 'T'],
      [t('res.rh'), fmt(z.rhMin, 0) + ' / ' + fmt(z.rhMean, 0) + ' / ' + fmt(z.rhMax, 0) + ' %', 'rh'],
      [t('res.dt'), fmt(z.dTvertical, 1) + ' K', 'dt'],
    ]));
    kids.push(h('p', { class: 'ra-note' }, t('res.zone', { low: z ? z.low : DEFAULTS.zoneLow, high: z ? z.high : DEFAULTS.zoneHigh, edge: z ? z.edge : DEFAULTS.zoneEdge })));
    kids.push(table('data-ra-flows', [
      [t('res.in'), fmt(r.flows.supplyLps, 0) + ' L/s', 'in'],
      [t('res.out'), fmt(r.flows.outLps, 0) + ' L/s', 'out'],
      [t('res.exhaust'), r.exhaust ? fmt(r.exhaust.T, 1) + ' °C, ' + fmt(r.exhaust.rh, 0) + ' %' : '-', 'exhaust'],
      [t('res.heat'), fmt(r.heatW, 0) + ' W, ' + fmt(r.moistureGph, 0) + ' g/h', 'heat'],
    ]));
    if (Number.isFinite(r.settling)) kids.push(h('p', { class: 'ra-note', 'data-ra-settling': '' }, t('res.settling', { d: fmt(r.settling, 2), s: fmt(r.settlingOver, 0) })));
    if (r.warnings.length) kids.push(h('ul', { class: 'ra-warn', 'data-ra-warnings': '' }, r.warnings.map((w) => h('li', {}, t(w.key, w.vars || {})))));
    // the plane
    kids.push(h('div', { class: 'ra-row' },
      h('label', {}, t('view.q'), h('select', { 'data-ra': 'q', onchange: (e) => { R.view.q = e.target.value; render(); } }, QUANT.map((q) => h('option', { value: q, selected: R.view.q === q }, t('q.' + q))))),
      h('label', {}, t('view.axis'), h('select', { 'data-ra': 'axis', onchange: (e) => { R.view.axis = e.target.value; R.view.at = R.view.axis === 'z' ? 1100 : R.view.axis === 'x' ? centre()[0] : centre()[1]; render(); } }, ['z', 'x', 'y'].map((a) => h('option', { value: a, selected: R.view.axis === a }, t('view.axis.' + a))))),
      h('label', {}, t('view.at'), h('input', { type: 'number', step: 50, value: Math.round(R.view.at), 'data-ra': 'at', onchange: (e) => { R.view.at = Number(e.target.value); render(); } }), h('span', { class: 'ra-note' }, 'mm')),
      h('button', { type: 'button', class: 'btn-line btn-sm-cc', 'data-ra': 'csv', onclick: () => download('﻿' + sectionCsv(r), 'room-air-' + R.view.q + '.csv', 'text/csv') }, t('view.csv'))));
    kids.push(h('div', { 'data-ra-view': '' }, planeCanvas(r)));
    // what it is not
    kids.push(h('h4', {}, t('sec.limits')));
    kids.push(h('ul', { class: 'ra-note', 'data-ra-limits': '' }, ['lim.turb', 'lim.walls', 'lim.faces', 'lim.cell'].map((k) => h('li', {}, t(k, { cell: r.grid.cell, nu: r.lattice.nuEffective.toExponential(1) })))));
    const v = compareProfiles(r, R.measured);
    kids.push(h('p', { class: v.status === 'waits' ? 'ra-warn' : 'ra-note', 'data-ra-validation': v.status }, v.status === 'waits' ? t('valid.waits') : t('valid.done', { n: v.profiles.length, source: v.source })));
    return kids;
  }

  function render() {
    if (!pane) return;
    const kids = [h('p', { class: 'ra-note' }, t('intro'))];
    kids.push(h('h4', {}, t('sec.room')));
    if (!host) kids.push(h('p', { class: 'ra-note' }, t('host.none')));
    else {
      const rooms = R.rooms || [];
      kids.push(h('div', { class: 'ra-row' }, rooms.length ? h('label', {}, t('room.pick'), h('select', { 'data-ra': 'roompick', onchange: (e) => { if (e.target.value !== '') useRoom(Number(e.target.value)); } }, h('option', { value: '' }, t('room.choose')), rooms.map((r, i) => h('option', { value: String(i), selected: R.roomPick === i }, (r.name || t('room.unnamed', { n: i + 1 })) + ' (' + fmt(r.area, 1) + ' m²)')))) : h('span', { class: 'ra-note', 'data-ra-rooms': '' }, R.rooms === null ? t('room.reading') : t('room.none')),
        h('button', { type: 'button', class: 'btn-line btn-sm-cc', 'data-ra': 'reread', onclick: () => readRooms() }, t('room.reread'))));
    }
    kids.push(area('outline', t('room.outline'), t('room.outline.hint')));
    kids.push(h('div', { class: 'ra-row' }, field('height', t('f.height'), { unit: 'mm', min: 1000 })));
    kids.push(h('h4', {}, t('sec.terminals')));
    kids.push(area('terminals', t('term.list'), t('term.hint')));
    kids.push(h('h4', {}, t('sec.sources')));
    kids.push(area('sources', t('src.list'), t('src.hint')));
    kids.push(h('h4', {}, t('sec.run')));
    kids.push(h('div', { class: 'ra-row' }, field('startT', t('f.startT'), { unit: '°C' }), field('startRh', t('f.startRh'), { unit: '%', min: 0, max: 100 })));
    kids.push(h('div', { class: 'ra-row' },
      h('label', {}, t('f.grid'), h('select', { 'data-ra': 'grid', onchange: (e) => { S.grid = e.target.value; save(); } }, Object.keys(GRIDS).map((g) => h('option', { value: g, selected: S.grid === g }, t('grid.' + g, { n: GRIDS[g] }))))),
      field('seconds', t('f.seconds'), { unit: 's', min: 1 })));
    kids.push(h('div', { class: 'ra-row' },
      h('button', { type: 'button', class: 'btn-plot btn-sm-cc', 'data-ra': 'run', disabled: R.busy, onclick: () => { start(); } }, t('run.go')),
      R.busy ? h('button', { type: 'button', class: 'btn-line btn-sm-cc', 'data-ra': 'stop', onclick: () => { R.stop = true; } }, t('run.stop')) : null));
    if (R.busy && R.run) kids.push(h('div', {}, h('progress', { max: 1, value: R.run.progress, 'data-ra-progress': '' }), h('span', { class: 'ra-note', 'data-ra-progress-text': '' }, t('run.progress', { s: fmt(R.run.steps * R.run.lattice.dt, 0), of: fmt(R.run.spec.seconds, 0) }))));
    if (R.error) kids.push(h('p', { class: 'ra-err', role: 'alert', 'data-ra-error': '' }, R.error));
    if (R.message) kids.push(h('p', { class: 'ra-note', 'data-ra-message': '' }, R.message));
    if (R.result) kids.push(h('div', { 'data-ra-result': '' }, results(R.result)));
    kids.push(h('p', { class: 'ra-note' }, t('aid')));
    pane.replaceChildren(h('div', { class: 'ra', 'data-ra-root': '' }, kids));
  }

  const CSS = '.ra{padding:.5rem;font-size:.8rem}.ra h4{font-size:.85rem;margin:.75rem 0 .25rem}.ra textarea{width:100%;font-family:monospace;font-size:.75rem}.ra input[type=number]{width:6.5rem}.ra-row{display:flex;flex-wrap:wrap;gap:.5rem;align-items:center;margin:.25rem 0}.ra-note{opacity:.8}.ra-warn{color:#a15c00}.ra-err{color:#b3261e}.ra table td,.ra table th{padding:.1rem .4rem;text-align:left}.ra canvas{max-width:100%;image-rendering:pixelated;border:1px solid rgba(127,127,127,.4)}';
  styleEl = document.createElement('style'); styleEl.textContent = CSS; document.head.append(styleEl);
  api.ui.panelTab({ id: 'roomair', title: t('tab'), render: (el) => { pane = el; if (R.rooms === null && host) readRooms(); else render(); } });
  api.onDeactivate(() => { R.stop = true; pane = null; try { styleEl.remove(); } catch { /* no page */ } });
  window.ccRoomAir = { state: S, R, start, render, readRooms, useRoom, host, api, specOf, setMeasured: (m) => { R.measured = m; render(); } };   // for the tests and the console
}
