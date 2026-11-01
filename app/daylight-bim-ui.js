/* SPDX-License-Identifier: Apache-2.0 */
/**
 * daylight-bim-ui.js — BimCraft's Daylight tab (0.6 LC.20, session bim-extra_PART_2): the average daylight factor of every
 * room (IfcSpace) of the open model, with its inputs shown and editable, each window's sky angle measured in the model
 * (daylight-bim.js), a CSV. An early-design estimate, not a simulation or a compliance check: the tab says so. Nothing here
 * changes the model; the inputs are this browser's (localStorage `bimcraft.daylight`).
 *
 *   mountDaylight(host) → { render(), changed(), state } | null without a pane
 *   host = { pane, W, editor() → IfcEditor | null, select(keys), status(text, isError), download(name, data, type), fileName(),
 *            shown(), storeyName(id) → text }
 */
import { el } from './ui-util.js';
import { getDisplayUnits, localizeQuantities, fmtM2 } from './model-units.js';   // GH.3-A: results in the picked unit
const Q = (s) => localizeQuantities(s, getDisplayUnits());
import { t } from './i18n.js';
import { DEFAULTS, gatherRooms, daylight, daylightCsv } from './daylight-bim.js';
import { profile, frontTris, obstructionAngle, vsc } from './daylight-bim-sky.js';
import { SKY, skySection, windowLine, roomExtras } from './daylight-bim-sky-ui.js';
import { energySection } from './energy-bim-ui.js';

const KEY = 'bimcraft.daylight';
const WORD = { T: 'trans', glazedShare: 'glazed', M: 'maint', floor: 'floor', wall: 'wall', ceiling: 'ceiling', A: 'area', R: 'refl' };   // input / column → its key's word
const LIMITS = { T: [0.05, 1], glazedShare: [0.05, 1], M: [0.3, 1], floor: [0, 0.95], wall: [0, 0.95], ceiling: [0, 0.95] };

function loadInputs() {
  let o = null;
  try { o = JSON.parse(localStorage.getItem(KEY) || 'null'); } catch { o = null; }
  const v = (k, d) => { const x = Number(o?.[k]); const [lo, hi] = LIMITS[k]; return Number.isFinite(x) && x >= lo && x <= hi ? x : d; };
  return { T: v('T', DEFAULTS.T), glazedShare: v('glazedShare', DEFAULTS.glazedShare), M: v('M', DEFAULTS.M), floor: v('floor', DEFAULTS.refl.floor), wall: v('wall', DEFAULTS.refl.wall), ceiling: v('ceiling', DEFAULTS.refl.ceiling) };
}

export function mountDaylight(host) {
  if (!host.pane) return null;
  const S = { inputs: loadInputs(), gathered: null, stale: false, busy: false, open: null };
  const ed = () => host.editor();
  const opts = () => ({ T: S.inputs.T, glazedShare: S.inputs.glazedShare, M: S.inputs.M, refl: { floor: S.inputs.floor, wall: S.inputs.wall, ceiling: S.inputs.ceiling } });
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S.inputs)); } catch { /* private window: this session only */ } };
  const pct = (x) => (Math.round(x * 100) / 100).toFixed(2);

  async function calculate() {
    const e = ed();
    if (!e || S.busy) return;
    S.busy = true; render();
    host.status(t('day.working'));
    await new Promise((r) => setTimeout(r, 30));   // let the "working" line paint
    try {
      const g = gatherRooms(host.W, e.api, e.mid, { keep: true });
      // (0.7) each window's sky profile: its VSC and obstruction angle, and what the sun and grid sections read
      const wins = g.rooms.flatMap((r) => r.windows);
      for (let i = 0; i < wins.length; i++) {
        const w = wins[i];
        w.prof = profile(w, frontTris(g.prods, w)); w.alpha = obstructionAngle(w.prof); w.vsc = vsc(w.prof);
        if (i % 4 === 3) { host.status(t('day.sky.working', { n: i + 1, of: wins.length })); await new Promise((r) => setTimeout(r, 0)); }
      }
      S.gathered = g;
      SKY.sun = null; SKY.grid = null;
      S.stale = false;
      const n = S.gathered.rooms.length;
      host.status(n ? t('day.done', { n, w: S.gathered.rooms.reduce((s, r) => s + r.windows.length, 0) }) : t('day.no-rooms'), !n);
    } catch (err) { host.status(t('day.failed', { why: String(err.message || err) }), true); }
    S.busy = false;
    render();
  }
  function csv() {
    const rooms = daylight(S.gathered, opts());
    const head = Object.fromEntries(['room', 'storey', 'A', 'floor', 'R', 'windows', 'glazed', 'theta', 'adf', 'band', 'inputs'].map((k) => [k, t('day.csv.' + (WORD[k] || k))]));
    host.download(String(host.fileName() || 'model').replace(/\.ifc$/i, '') + ' daylight.csv', daylightCsv(rooms, { head, storeyName: host.storeyName, inputs: opts(), bandName: (b) => t('day.band.' + b) }), 'text/csv');
  }
  const num = (k, step) => el('label', { className: 'fa-field' }, el('span', {}, t('day.in.' + WORD[k])),
    el('input', { type: 'number', className: 'bc-input fa-input', step, min: String(LIMITS[k][0]), max: String(LIMITS[k][1]), value: String(S.inputs[k]), 'data-day-in': k,
      onchange: (e) => { const x = Number(e.target.value), [lo, hi] = LIMITS[k]; if (Number.isFinite(x) && x >= lo && x <= hi) { S.inputs[k] = x; save(); } else e.target.value = String(S.inputs[k]); render(); } }));

  const sky = {
    gathered: () => S.gathered, inputs: () => opts(), render: () => render(), busy: (on) => { S.busy = on; },
    open: (id) => { S.open = id; const r = S.gathered?.rooms.find((x) => x.id === id); host.select([id, ...(r?.windows || []).map((w) => w.id)]); render(); },
  };
  function render() {
    if (!host.shown()) return;
    if (!ed()) { host.pane.replaceChildren(el('p', { className: 'bc-muted' }, t('day.needs-ifc'))); return; }
    const out = [el('p', { className: 'bc-muted' }, t('day.intro')), el('p', { className: 'bc-muted day-not', 'data-day-not': '' }, t('day.not'))];
    out.push(el('div', { className: 'as-form' }, num('T', '0.01'), num('glazedShare', '0.05'), num('M', '0.01'), num('floor', '0.05'), num('wall', '0.05'), num('ceiling', '0.05')));
    out.push(el('div', { className: 'fa-head' },
      el('button', { type: 'button', className: 'btn-plot btn-sm-cc', 'data-day-run': '', disabled: S.busy, onclick: calculate }, S.gathered ? t('day.btn.again') : t('day.btn.run')),
      el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-day-csv': '', disabled: !S.gathered?.rooms.length, onclick: csv }, t('day.btn.csv'))));
    if (S.stale) out.push(el('p', { className: 'bc-muted fa-warn', 'data-day-stale': '' }, t('day.stale')));
    if (S.gathered) {
      const rooms = daylight(S.gathered, opts());
      if (!rooms.length) out.push(el('p', { className: 'bc-muted' }, t('day.no-rooms')));
      else {
        out.push(el('div', { className: 'fa-wrap' }, el('table', { className: 'bc-qto-table fa-table', 'data-day-table': '' },
          el('thead', {}, el('tr', {}, el('th', {}, t('day.col.room')), el('th', {}, t('day.col.windows')), el('th', {}, t('day.col.adf')))),
          el('tbody', {}, ...rooms.map((r) => el('tr', { className: r.id === S.open ? 'is-on' : '', 'data-day-row': r.guid, tabindex: '0',
            onclick: () => { S.open = r.id; host.select([r.id, ...r.windows.map((w) => w.id)]); render(); } },
          el('td', {}, [r.name, r.longName].filter(Boolean).join(' '), host.storeyName(r.storey) ? el('span', { className: 'bc-muted' }, ' ' + host.storeyName(r.storey)) : null),
          el('td', {}, String(r.windows.length)),
          el('td', {}, pct(r.adf), ' ', el('span', { className: 'as-due day-' + r.band }, t('day.band.' + r.band)))))))));
        out.push(el('p', { className: 'bc-muted' }, t('day.bands')));
        const open = rooms.find((r) => r.id === S.open);
        if (open) {
          out.push(el('section', { className: 'as-detail', 'data-day-detail': open.guid },
            el('h3', { className: 'bc-h fa-h3' }, [open.name, open.longName].filter(Boolean).join(' ')),
            el('p', {}, t('day.detail.surfaces.u', { A: fmtM2(open.A, getDisplayUnits()), floor: fmtM2(open.areas.floor, getDisplayUnits(), false), wall: fmtM2(open.areas.wall, getDisplayUnits(), false), ceiling: fmtM2(open.areas.ceiling, getDisplayUnits(), false), glass: fmtM2(open.areas.glass, getDisplayUnits(), false), R: open.R.toFixed(3) })),
            open.windows.length ? el('ul', { className: 'as-log' }, ...open.windows.map((w) => el('li', { 'data-day-window': w.guid },
              el('strong', {}, w.name || w.tag || '#' + w.id), ' ', Q(t('day.detail.window', { area: w.area.toFixed(2), glazed: w.glazed.toFixed(2), theta: w.theta.toFixed(1) })), ' ', windowLine(w))))
              : el('p', { className: 'bc-muted' }, t('day.detail.nowindow')),
            el('p', { className: 'bc-muted' }, t('day.detail.formula')),
            ...roomExtras(open, host, sky)));
        }
        out.push(...skySection(host, sky));   // 0.7 LC.20: the sun on a date, the daylight factor on a grid
        const en = energySection(host, sky);   // 0.7 LC.20: heating and cooling loads
        if (en) out.push(en);
      }
      if (S.gathered.roof.length) out.push(el('p', { className: 'bc-muted', 'data-day-roof': '' }, t('day.roof', { n: S.gathered.roof.length })));
      if (S.gathered.unassigned.length) out.push(el('p', { className: 'bc-muted', 'data-day-alone': '' }, t('day.alone', { n: S.gathered.unassigned.length })));
    }
    host.pane.replaceChildren(...out);
  }
  window.addEventListener('bimcraft-units', () => { try { render(); } catch (e) { /* GH.3-A: the tab has nothing to show yet */ } });   // results follow the display unit
  return { render, state: S, sky: SKY, changed() { if (S.gathered) S.stale = true; render(); } };
}
