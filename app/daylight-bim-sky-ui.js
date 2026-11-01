/* SPDX-License-Identifier: Apache-2.0 */
/**
 * daylight-bim-sky-ui.js — the sky, sun and grid parts of BimCraft's Daylight tab (0.7 LC.20 item 6, session bim-ops):
 * each window's vertical sky component and obstruction angle (in a room's detail), the sun through each room's windows on
 * a date, and the daylight factor on a grid in each room, drawn on the room's plan. Design aids, not compliance
 * calculations: every panel with a number says so. Inputs are this browser's (localStorage `bimcraft.daylight.sky`).
 *
 *   skySection(host, ctx) → [elements]     the Sun and Grid sections (after the average-daylight table)
 *   windowLine(w) → text                   a window's VSC + obstruction angle for the room's detail
 *   roomExtras(room, host, ctx) → [elements]   the open room's sun chart and grid plan
 *   ctx = { gathered() → gatherRooms(…, { keep }) with profiles, inputs() → the daylight inputs, render(), busy(on) }
 * Lowest tier (rule 19): grids ≤ 400 points (daylight-bim-sky.js roomGrid), charts off on a phone until asked.
 */
import { el } from './ui-util.js';
import { getDisplayUnits, localizeQuantities } from './model-units.js';   // GH.3-A: results in the picked unit
const Q = (s) => localizeQuantities(s, getDisplayUnits());
import { t } from './i18n.js';
import { siteOf, solarDay, gridDaylight, CLIMATES } from './daylight-bim-sky.js';

const KEY = 'bimcraft.daylight.sky';
const LIM = { g: [0.05, 1], ground: [0, 0.9], height: [0, 2], border: [0, 2], spacing: [0, 5], obstruction: [0, 0.5], tz: [-12, 14], lat: [-90, 90], lon: [-180, 180] };
const SVG = 'http://www.w3.org/2000/svg';
const svg = (tag, attrs = {}, ...kids) => { const n = document.createElementNS(SVG, tag); for (const [k, v] of Object.entries(attrs)) if (v !== null && v !== undefined) n.setAttribute(k, String(v)); n.append(...kids.filter(Boolean)); return n; };
const isPhone = () => document.documentElement.classList.contains('cc-phone') || (typeof matchMedia === 'function' && matchMedia('(max-width: 760px)').matches);   // i18n-ignore: a media query
const hhmm = (h) => (h === null || h === undefined ? '—' : String(Math.floor(h)).padStart(2, '0') + ':' + String(Math.round((h % 1) * 60)).padStart(2, '0'));   // i18n-ignore: a dash for no time
export const BANDS = [[0, 1, '#f0f4fa'], [1, 2, '#c6dbef'], [2, 3, '#6baed6'], [3, 5, '#2171b5'], [5, Infinity, '#08306b']];
const bandColor = (df) => BANDS.find(([a, b]) => df >= a && df < b)[2];

function load() {
  let o = null;
  try { o = JSON.parse(localStorage.getItem(KEY) || 'null'); } catch { o = null; }
  const v = (k, d) => { const x = Number(o?.[k]); return Number.isFinite(x) && x >= LIM[k][0] && x <= LIM[k][1] ? x : d; };
  return { date: /^\d{2}-\d{2}$/.test(o?.date || '') ? o.date : '07-21', tz: o?.tz === '' || o?.tz === undefined ? '' : v('tz', ''), g: v('g', 0.6), ground: v('ground', 0.2), climate: CLIMATES[o?.climate] ? o.climate : '',
    lat: o?.lat === '' || o?.lat === undefined ? '' : v('lat', ''), lon: o?.lon === '' || o?.lon === undefined ? '' : v('lon', ''), height: v('height', 0.85), border: v('border', 0.5), spacing: o?.spacing ? v('spacing', '') : '', obstruction: v('obstruction', 0.1) };
}
export const SKY = { inputs: null, sun: null, grid: null, open: { sun: false, grid: false }, charts: new Set() };
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(SKY.inputs)); } catch { /* private window */ } };

export function windowLine(w) {
  return Number.isFinite(w.vsc) ? t('day.sky.window', { vsc: w.vsc.toFixed(1), alpha: (w.alpha || 0).toFixed(0) }) : '';
}

export function skySection(host, ctx) {
  if (!SKY.inputs) SKY.inputs = load();
  const I = SKY.inputs, g = ctx.gathered();
  if (!g) return [];
  const e = host.editor(), site0 = e ? siteOf(e.api, e.mid) : null;
  const site = site0 || (I.lat !== '' && I.lon !== '' ? { lat: Number(I.lat), lon: Number(I.lon), north: [0, 1] } : null);
  const box = (k, step, attrs = {}) => el('label', { className: 'fa-field' }, el('span', {}, t('day.sky.in.' + k)),
    el('input', { type: 'number', step, className: 'bc-input fa-input', value: String(I[k]), 'data-day-sky': k, ...attrs,
      onchange: (ev) => { const raw = ev.target.value.trim(), x = Number(raw); if ((raw === '' && ['tz', 'spacing', 'lat', 'lon'].includes(k)) || (Number.isFinite(x) && x >= LIM[k][0] && x <= LIM[k][1])) { I[k] = raw === '' ? '' : x; save(); if (k === 'lat' || k === 'lon') ctx.render(); } else ev.target.value = String(I[k]); } }));
  const out = [];
  // ---- the sun on a date
  const runSun = async () => {
    if (!site) { host.status(t('day.sun.no-site'), true); return; }
    const [mo, dd] = I.date.split('-').map(Number);
    ctx.busy(true); host.status(t('day.sun.working'));
    await new Promise((r) => setTimeout(r, 30));
    try {
      SKY.sun = solarDay(g.rooms, g.prods, site, { month: mo, day: dd, tz: I.tz === '' ? null : Number(I.tz), g: I.g, ground: I.ground, glazedShare: ctx.inputs().glazedShare, climate: I.climate || null, altitudeKm: (site.elevation || 0) / 1000 });
      SKY.sun.site = site; SKY.sun.date = new Date(Date.UTC(2026, mo - 1, dd)).toLocaleDateString(undefined, { month: 'long', day: 'numeric', timeZone: 'UTC' });
      host.status(t('day.sun.done', { n: SKY.sun.rooms.length }));
    } catch (err) { host.status(t('day.failed', { why: String(err.message || err) }), true); }
    ctx.busy(false); ctx.render();
  };
  out.push(el('details', { className: 'as-cobie', 'data-day-sun': '', open: SKY.open.sun || !!SKY.sun, ontoggle: (ev) => { SKY.open.sun = ev.target.open; } },
    el('summary', {}, t('day.sun.h')),
    el('p', { className: 'bc-muted' }, t('day.sun.intro')),
    el('p', { className: 'bc-muted day-not' }, t('day.aid')),
    site0 ? el('p', { className: 'bc-muted' }, t('day.sun.site', { lat: site0.lat.toFixed(3), lon: site0.lon.toFixed(3) })) : el('p', { className: 'fa-warn', 'data-day-sun-nosite': '' }, t('day.sun.no-site')),
    el('div', { className: 'as-form' },
      el('label', { className: 'fa-field' }, el('span', {}, t('day.sky.in.date')), el('input', { type: 'date', className: 'bc-input fa-input', value: '2026-' + I.date, 'data-day-sky': 'date', onchange: (ev) => { const m = /^\d{4}-(\d{2}-\d{2})$/.exec(ev.target.value); if (m) { I.date = m[1]; save(); } } })),
      box('tz', '1', { placeholder: site ? String(Math.round(site.lon / 15)) : '' }),
      box('g', '0.05'), box('ground', '0.05'),
      site0 ? null : box('lat', 'any'), site0 ? null : box('lon', 'any')),
    el('div', { className: 'fa-head' }, el('button', { type: 'button', className: 'btn-plot btn-sm-cc', 'data-day-sun-run': '', disabled: !site, onclick: runSun }, t('day.sun.btn'))),
    SKY.sun ? el('div', { className: 'fa-wrap' }, el('table', { className: 'bc-qto-table fa-table', 'data-day-sun-table': '' },
      el('thead', {}, el('tr', {}, el('th', {}, t('day.col.room')), el('th', {}, t('day.sun.col.kwh')), el('th', {}, t('day.sun.col.peak')))),
      el('tbody', {}, ...SKY.sun.rooms.map((r) => el('tr', { 'data-day-sun-row': r.guid, onclick: () => ctx.open(r.id) },
        el('td', {}, [r.name, r.longName].filter(Boolean).join(' ')), el('td', {}, r.kWh.toFixed(2)), el('td', {}, r.peak.toFixed(0) + ' W ', el('span', { className: 'bc-muted' }, hhmm(r.peakAt)))))))) : null,
    SKY.sun ? el('p', { className: 'bc-muted' }, t('day.sun.note', { tz: (SKY.sun.tz >= 0 ? '+' : '') + SKY.sun.tz, climate: t('day.sun.climate.' + SKY.sun.climate) })) : null));

  // ---- the daylight factor on a grid
  const runGrid = async () => {
    ctx.busy(true); host.status(t('day.grid.working'));
    await new Promise((r) => setTimeout(r, 30));
    try {
      const inp = ctx.inputs();
      const rooms = [];
      for (const r of g.rooms) { rooms.push(...gridDaylight(g, [r], { ...inp, refl: inp.refl, height: I.height, border: I.border, spacing: I.spacing === '' ? null : I.spacing, obstruction: I.obstruction })); await new Promise((res) => setTimeout(res, 0)); }
      SKY.grid = { rooms, at: JSON.stringify([inp, I.height, I.border, I.spacing, I.obstruction]) };
      host.status(t('day.grid.done', { n: rooms.length, p: rooms.reduce((s, r) => s + r.grid.points.length, 0) }));
    } catch (err) { host.status(t('day.failed', { why: String(err.message || err) }), true); }
    ctx.busy(false); ctx.render();
  };
  out.push(el('details', { className: 'as-cobie', 'data-day-grid': '', open: SKY.open.grid || !!SKY.grid, ontoggle: (ev) => { SKY.open.grid = ev.target.open; } },
    el('summary', {}, t('day.grid.h')),
    el('p', { className: 'bc-muted' }, t('day.grid.intro')),
    el('p', { className: 'bc-muted day-not' }, t('day.aid')),
    el('div', { className: 'as-form' }, box('height', '0.05'), box('border', '0.1'), box('spacing', '0.05', { placeholder: t('day.grid.auto') }), box('obstruction', '0.05')),
    el('div', { className: 'fa-head' }, el('button', { type: 'button', className: 'btn-plot btn-sm-cc', 'data-day-grid-run': '', onclick: runGrid }, t('day.grid.btn'))),
    SKY.grid ? el('div', { className: 'fa-wrap' }, el('table', { className: 'bc-qto-table fa-table', 'data-day-grid-table': '' },
      el('thead', {}, el('tr', {}, el('th', {}, t('day.col.room')), el('th', {}, t('day.grid.col.mean')), el('th', {}, t('day.grid.col.min')), el('th', {}, t('day.grid.col.over2')))),
      el('tbody', {}, ...SKY.grid.rooms.map((r) => el('tr', { 'data-day-grid-row': r.guid, onclick: () => ctx.open(r.id) },
        el('td', {}, [r.name, r.longName].filter(Boolean).join(' ')), el('td', {}, r.grid.mean.toFixed(2)), el('td', {}, r.grid.min.toFixed(2)), el('td', {}, Math.round(r.grid.over2 * 100) + ' %')))))) : null,
    SKY.grid ? el('p', { className: 'bc-muted' }, t('day.grid.note')) : null));
  return out;
}

/** The open room's sun chart (hourly W through its windows) and its grid drawn on its plan. */
export function roomExtras(room, host, ctx) {
  const out = [];
  const sun = SKY.sun?.rooms.find((r) => r.id === room.id);
  if (sun) {
    out.push(el('p', { 'data-day-room-sun': '' }, t('day.sun.room', { kwh: sun.kWh.toFixed(2), peak: sun.peak.toFixed(0), at: hhmm(sun.peakAt) })));
    if (isPhone() && !SKY.charts.has(room.id)) out.push(el('p', { className: 'bc-muted' }, t('day.chart-off'), ' ', el('button', { type: 'button', className: 'bc-linkbtn', onclick: () => { SKY.charts.add(room.id); ctx.render(); } }, t('day.btn.chart'))));
    else out.push(sunChart(sun, SKY.sun.times));
  }
  const gr = SKY.grid?.rooms.find((r) => r.id === room.id);
  if (gr && gr.grid.points.length) {
    out.push(el('p', { 'data-day-room-grid': '' }, Q(t('day.grid.room', { mean: gr.grid.mean.toFixed(2), min: gr.grid.min.toFixed(2), max: gr.grid.max.toFixed(2), u: gr.grid.uniformity.toFixed(2), n: gr.grid.points.length, s: gr.grid.spacing.toFixed(2), irc: gr.irc.toFixed(2) }))));
    out.push(gridPlan(gr));
  }
  return out;
}

function sunChart(sun, times) {
  const W = 280, H = 80, max = Math.max(1, sun.peak);
  const pts = sun.hourly.map((v, i) => [(times[i] / 24) * W, H - (v / max) * H]);
  const d = pts.map(([x, y], i) => (i ? 'L' : 'M') + x.toFixed(1) + ' ' + y.toFixed(1)).join(' ');
  return el('figure', { className: 'as-figure' },
    svg('svg', { viewBox: `-2 -2 ${W + 4} ${H + 4}`, width: '100%', role: 'img', 'aria-label': t('day.sun.chart', { peak: sun.peak.toFixed(0), at: hhmm(sun.peakAt) }), 'data-day-sun-chart': '' },
      svg('rect', { x: 0, y: 0, width: W, height: H, fill: 'none', stroke: 'currentColor', 'stroke-opacity': '.25', 'vector-effect': 'non-scaling-stroke' }),
      ...[6, 12, 18].map((h) => svg('line', { x1: (h / 24) * W, x2: (h / 24) * W, y1: 0, y2: H, stroke: 'currentColor', 'stroke-opacity': '.15', 'vector-effect': 'non-scaling-stroke' })),
      svg('path', { d, fill: 'none', stroke: 'currentColor', 'stroke-width': '1.5', 'vector-effect': 'non-scaling-stroke' })),
    el('figcaption', { className: 'bc-muted' }, t('day.sun.axis')));
}

/** The room's floor in plan (north up when the model's +Y is north), each grid point a square in its band's colour. */
function gridPlan(gr) {
  const G = gr.grid, xs = G.floor.flat().map((p) => p[0]), ys = G.floor.flat().map((p) => p[1]);
  const x0 = Math.min(...xs), x1 = Math.max(...xs), y0 = Math.min(...ys), y1 = Math.max(...ys);
  const w = x1 - x0 || 1, h = y1 - y0 || 1, pad = Math.max(w, h) * 0.04;
  const Y = (y) => y1 - y + pad, X = (x) => x - x0 + pad;   // flip: plan north (+Y) up
  const half = G.spacing / 2;
  const plan = svg('svg', { viewBox: `0 0 ${(w + 2 * pad).toFixed(3)} ${(h + 2 * pad).toFixed(3)}`, width: '100%', role: 'img', 'aria-label': t('day.grid.plan', { n: G.points.length, mean: G.mean.toFixed(2) }), 'data-day-grid-plan': '' },
    ...G.floor.map((tr) => svg('path', { d: 'M' + tr.map((p) => X(p[0]).toFixed(3) + ' ' + Y(p[1]).toFixed(3)).join(' L') + ' Z', fill: 'none', stroke: 'none' })),
    ...G.points.map((p) => svg('rect', { x: (X(p.x) - half).toFixed(3), y: (Y(p.y) - half).toFixed(3), width: G.spacing.toFixed(3), height: G.spacing.toFixed(3), fill: bandColor(p.df), 'data-df': p.df.toFixed(2) })),
    ...G.edges.map(([a, b]) => svg('line', { x1: X(a[0]).toFixed(3), y1: Y(a[1]).toFixed(3), x2: X(b[0]).toFixed(3), y2: Y(b[1]).toFixed(3), stroke: 'currentColor', 'stroke-width': '1.5', 'vector-effect': 'non-scaling-stroke' })),
    ...gr.windows.map((wi) => { const m = (wi.span[0] + wi.span[1]) / 2, c = [wi.origin[0] + wi.s[0] * m, wi.origin[1] + wi.s[1] * m], hw = (wi.span[1] - wi.span[0]) / 2;
      return svg('line', { x1: X(c[0] - wi.s[0] * hw).toFixed(3), y1: Y(c[1] - wi.s[1] * hw).toFixed(3), x2: X(c[0] + wi.s[0] * hw).toFixed(3), y2: Y(c[1] + wi.s[1] * hw).toFixed(3), stroke: '#c53030', 'stroke-width': '4', 'vector-effect': 'non-scaling-stroke' }); }));
  const legend = el('p', { className: 'bc-muted as-legend' }, ...BANDS.map(([a, b, c]) => { const k = el('span', { className: 'as-key' }); const sw = el('span', { 'aria-hidden': 'true' }); Object.assign(sw.style, { display: 'inline-block', width: '.75rem', height: '.75rem', marginRight: '.25rem', verticalAlign: '-.1rem', border: '1px solid currentColor', background: c }); k.append(sw, b === Infinity ? t('day.grid.band.over', { a }) : t('day.grid.band', { a, b })); k.style.marginRight = '.6rem'; k.style.display = 'inline-block'; return k; }),
    el('span', { className: 'as-key' }, t('day.grid.window-key')));
  return el('figure', { className: 'as-figure' }, plan, legend);
}
