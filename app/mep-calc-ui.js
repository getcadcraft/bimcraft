/* SPDX-License-Identifier: Apache-2.0 */
/**
 * mep-calc-ui.js — the Calculations pane for the MEP engines of 0.8 round 2 (EG.1, EG.2, EG.4; session `mep_PART_2`): pipes, ducts, cables (tray and
 * conduit fill) and lighting. One pane, four small forms; each Check runs mep-calc.js on the open model, lists the result, posts the Problems to the
 * shell's ⚠ panel (source `bimcraft.mep.calc`, kind engine) and offers the sizes that fix them as ONE undo step. Defaults are labelled on screen.
 *
 *   mountMepCalc(pane, app) → { show(kind) }
 *     app = { w() → ModelWriter (read), apply(label, op) → Promise (one undo step), problems?: window.ccProblems, save?(name, text) }
 * bimcraft.js mounts it as a right-panel tab (the mount line is in docs/0.8-sessions/mep_PART_2.md). Test: bin/test-bimcraft.mjs --eg (a stand-in DOM).
 */
import { t } from './i18n.js';
import { getDisplayUnits, localizeQuantities } from './model-units.js';   // GH.3-A: results in the picked unit
const Q = (s) => localizeQuantities(s, getDisplayUnits());
import { roomsOf } from './mep-calc.js';
import { calcPipes, calcDucts, calcCarriers, calcLighting, applyProposals } from './mep-calc.js';
import { parseCablesCsv, FILL_DEFAULTS } from './mep/carrier.js';
import { heatCells, lightingReportCsv } from './mep/photometry.js';
import { DEFAULT_CURVE } from './mep/flow.js';
import { DEFAULT_LLF } from './mep/photometry.js';

const KINDS = ['pipes', 'ducts', 'cables', 'lighting'];
const f1 = (x) => (Number.isFinite(x) ? String(Math.round(x * 10) / 10) : '—');
const f2 = (x) => (Number.isFinite(x) ? String(Math.round(x * 100) / 100) : '—');

export function mountMepCalc(pane, app) {
  const d = pane.ownerDocument;
  const el = (tag, attrs = {}, ...kids) => {
    const n = d.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) { if (k === 'class') n.className = v; else if (k === 'on') for (const [ev, fn] of Object.entries(v)) n.addEventListener(ev, fn); else if (v !== undefined && v !== false) n.setAttribute(k, v === true ? '' : String(v)); }
    n.append(...kids.flat().filter((x) => x !== null && x !== undefined && x !== false));
    return n;
  };
  const S = { kind: 'pipes', pipes: { system: 'cw', vmax: 2.4, availKpa: 400, minKpa: 100 }, ducts: { system: 'supply', method: 'friction', rate: 0.8, vmax: 7.5, equip: 0 },
    cables: { csv: 'tag,circuit,type,size,od,n,from,to\n', pct: FILL_DEFAULTS.tray, one: FILL_DEFAULTS.conduit.one, two: FILL_DEFAULTS.conduit.two, many: FILL_DEFAULTS.conduit.many },
    lighting: { avg: 0, min: 0, uni: 0, lpd: 0, spacing: 500, height: 800, llf: DEFAULT_LLF.value, site: '' }, last: null, said: '' };
  let src = null;
  const post = (list) => { try { src ||= app.problems?.source?.({ id: 'bimcraft.mep.calc', kind: 'engine', label: t('mepc.title') }); src?.set(list); } catch { /* the shell's Problems are not loaded */ } };

  function draw() {
    pane.replaceChildren();
    const tabs = el('div', { role: 'tablist', style: 'display:flex;gap:0.25rem;margin-bottom:0.5rem' }, ...KINDS.map((k) => el('button', { type: 'button', role: 'tab', 'data-mepc-tab': k, 'aria-selected': S.kind === k, class: 'btn-line btn-sm-cc', on: { click: () => { S.kind = k; S.last = null; S.said = ''; draw(); } } }, t('mepc.tab.' + k))));
    pane.append(el('div', { class: 'mepc', style: 'padding:0.5rem;font-size:0.8rem' }, el('p', {}, t('mepc.intro')), tabs, form(), el('p', { 'data-mepc-say': true, style: 'white-space:pre-wrap' }, S.said), result()));
  }
  const field = (label, key, group, type = 'number') => {
    const i = el('input', { type, step: 'any', value: S[group][key], class: 'form-control form-control-sm', 'data-mepc-field': group + '.' + key });
    i.addEventListener('change', () => { S[group][key] = type === 'number' ? Number(i.value) : i.value; });
    return el('label', { style: 'display:grid;gap:0.1rem;margin:0.25rem 0' }, el('span', {}, label), i);
  };
  const button = (label, fn, attr) => el('button', { type: 'button', class: 'btn-line btn-sm-cc', ...attr, on: { click: async () => { try { await fn(); } catch (e) { S.said = String(e.key ? t(e.key) : e.message); } draw(); } } }, label);

  function form() {
    const run = (fn) => () => { const r = fn(); if (!r.ok) { S.last = null; S.said = t('mepc.err.' + String(r.key || 'failed').replace('calc.', '')); post([]); return; } S.last = r; S.said = ''; post(r.problems || []); };
    if (S.kind === 'pipes') return el('div', {}, field(t('mepc.system'), 'system', 'pipes', 'text'), field(t('mepc.vmax.water'), 'vmax', 'pipes'), field(t('mepc.availkpa'), 'availKpa', 'pipes'), field(t('mepc.minkpa'), 'minKpa', 'pipes'),
      el('p', { style: 'opacity:0.8' }, DEFAULT_CURVE.label), button(t('mepc.check'), run(() => calcPipes(app.w(), { system: S.pipes.system, opts: { vmax: S.pipes.vmax, availKpa: S.pipes.availKpa, minKpa: S.pipes.minKpa } })), { 'data-mepc-check': 'pipes' }));
    if (S.kind === 'ducts') return el('div', {}, field(t('mepc.system'), 'system', 'ducts', 'text'), field(t('mepc.rate'), 'rate', 'ducts'), field(t('mepc.vmax.air'), 'vmax', 'ducts'), field(t('mepc.equip'), 'equip', 'ducts'),
      button(t('mepc.check'), run(() => calcDucts(app.w(), { system: S.ducts.system, opts: { method: S.ducts.method, rate: S.ducts.rate, vmax: S.ducts.vmax, equipDp: S.ducts.equip } })), { 'data-mepc-check': 'ducts' }));
    if (S.kind === 'cables') {
      const ta = el('textarea', { rows: 6, class: 'form-control form-control-sm', 'data-mepc-field': 'cables.csv' }, S.cables.csv);
      ta.addEventListener('change', () => { S.cables.csv = ta.value; });
      return el('div', {}, el('label', {}, el('span', {}, t('mepc.cables.csv')), ta), el('p', { style: 'opacity:0.8' }, FILL_DEFAULTS.label), field(t('mepc.pct.one'), 'one', 'cables'), field(t('mepc.pct.two'), 'two', 'cables'), field(t('mepc.pct.many'), 'many', 'cables'), field(t('mepc.pct.tray'), 'pct', 'cables'),
        button(t('mepc.check'), run(() => { const p = parseCablesCsv(S.cables.csv); if (!p.cables.length) return { ok: false, key: 'calc.nocables' }; return calcCarriers(app.w(), { cables: p.cables, limits: { one: S.cables.one, two: S.cables.two, many: S.cables.many }, trayPct: S.cables.pct }); }), { 'data-mepc-check': 'cables' }));
    }
    return el('div', {}, field(t('mepc.light.avg'), 'avg', 'lighting'), field(t('mepc.light.min'), 'min', 'lighting'), field(t('mepc.light.uni'), 'uni', 'lighting'), field(t('mepc.light.lpd'), 'lpd', 'lighting'), field(t('mepc.light.spacing'), 'spacing', 'lighting'), field(t('mepc.light.height'), 'height', 'lighting'), field(t('mepc.light.llf'), 'llf', 'lighting'),
      (() => { const ta = el('textarea', { rows: 3, class: 'form-control form-control-sm', 'data-mepc-field': 'lighting.site', placeholder: '0, 0\n20000, 0\n20000, 10000\n0, 10000' }, S.lighting.site); ta.addEventListener('change', () => { S.lighting.site = ta.value; }); return el('label', {}, el('span', {}, t('mepc.light.site')), ta); })(),
      el('p', { style: 'opacity:0.8' }, DEFAULT_LLF.label), button(t('mepc.check'), run(() => calcLighting(app.w(), { rooms: siteRooms(), targets: { avgLux: S.lighting.avg, minLux: S.lighting.min, uniformity: S.lighting.uni, lpd: S.lighting.lpd }, spacing: S.lighting.spacing, height: S.lighting.height, llf: S.lighting.llf })), { 'data-mepc-check': 'lighting' }));
  }

  /** The model's rooms plus the site area typed as corners (x, y in mm per line), if any: an outdoor area is lit by every luminaire. */
  const siteRooms = () => {
    const poly = String(S.lighting.site || '').split(/\n|;/).map((l) => l.trim().split(/[\s,]+/).map(Number)).filter((p) => p.length >= 2 && p.every(Number.isFinite)).map((p) => [p[0], p[1]]);
    const model = app.rooms ? app.rooms() : null;   // a host that hands its own rooms (tests); else the calculation reads them from the model
    if (poly.length < 3) return model || undefined;
    return [...(model || (app.w ? roomsOf(app.w()) : [])), { storey: null, name: t('mepc.light.site.name'), poly, z: 0 }];
  };

  function result() {
    const r = S.last;
    if (!r) return el('div', {});
    const rows = [];
    if (S.kind === 'pipes') for (const s of r.res.segs) rows.push([s.size, f2(s.flow * 1000), f2(s.V), f1(s.dp / 1000), s.status]);
    else if (S.kind === 'ducts') for (const s of r.res.segs) rows.push([s.size, f1(s.flow * 1000), f2(s.V), f2(s.rate), s.status]);
    else if (S.kind === 'cables') for (const f of r.fills) rows.push([f.label, f.cables.join(' '), f1(f.fill.pct) + ' %', f.fill.limitPct + ' %', f.fill.ok ? 'ok' : 'over']);
    else for (const a of r.areas) rows.push([a.name, f1(a.res.stats.min), f1(a.res.stats.avg), f1(a.res.stats.max), f2(a.res.stats.minAvg)]);
    const head = t('mepc.head.' + S.kind).split('|');
    const table = el('table', { 'data-mepc-table': S.kind, style: 'width:100%;border-collapse:collapse;margin:0.5rem 0' }, el('thead', {}, el('tr', {}, ...head.map((h) => el('th', { style: 'text-align:left' }, h)))), el('tbody', {}, ...rows.map((row) => el('tr', {}, ...row.map((c) => el('td', {}, c))))));
    const extra = S.kind === 'ducts' ? el('p', {}, t('mepc.fan', { pa: f1(r.res.fanPa) })) : null;
    const probs = el('ul', { 'data-mepc-problems': true, style: 'padding-left:1rem' }, ...(r.problems || []).map((p) => el('li', {}, (p.severity === 'error' ? '⛔ ' : p.severity === 'warning' ? '⚠ ' : 'ℹ ') + Q(p.text))));
    const acts = [];
    if (r.proposals?.length) acts.push(button(t('mepc.apply', { n: r.proposals.length }), async () => { await app.apply('MEP sizes', applyProposals(r.proposals)); S.last = null; S.said = t('mepc.applied', { n: r.proposals.length }); }, { 'data-mepc-apply': true }));
    if (S.kind === 'cables' && r.csv && app.save) acts.push(button(t('mepc.save.csv'), async () => { await app.save('cable-schedule.csv', r.csv); }, { 'data-mepc-csv': true }));
    // the lighting result as colour (0.8 EG.4): one map per area, blue at no light to red at the area's brightest point, each cell titled with its lux
    const maps = S.kind === 'lighting' ? r.areas.map((a) => {
      const h = heatCells(a.res);
      if (!h) return null;
      if (h.cells.length > 4000) return el('p', { 'data-mepc-map': a.name, style: 'opacity:0.8' }, t('mepc.light.map.fine', { name: a.name, n: h.cells.length }));
      return el('figure', { 'data-mepc-map': a.name, style: 'margin:0.5rem 0' },
        el('div', { style: 'position:relative;width:100%;background:#222;aspect-ratio:' + h.aspect.toFixed(3) },
          ...h.cells.map((c) => el('div', { title: f1(c.lux) + ' lx', style: 'position:absolute;left:' + c.left.toFixed(2) + '%;top:' + c.top.toFixed(2) + '%;width:' + c.w.toFixed(2) + '%;height:' + c.h.toFixed(2) + '%;background:' + c.color }))),
        el('figcaption', { style: 'font-size:0.75rem' }, t('mepc.light.map', { name: a.name, max: f1(h.max) })));
    }) : [];
    if (S.kind === 'lighting' && app.save) acts.push(button(t('mepc.save.lightcsv'), async () => { await app.save('lighting-report.csv', lightingReportCsv(r.areas)); }, { 'data-mepc-csv': true }));
    return el('div', {}, table, extra, ...maps, probs, ...acts);
  }
  draw();
  if (typeof window !== 'undefined') window.addEventListener('bimcraft-units', () => { try { draw(); } catch (e) { /* GH.3-A: the tab has nothing to show yet */ } });   // results follow the display unit
  return { show: (k) => { if (KINDS.includes(k)) { S.kind = k; S.last = null; S.said = ''; draw(); } }, state: S, redraw: draw };
}
