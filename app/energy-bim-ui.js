/* SPDX-License-Identifier: Apache-2.0 */
/**
 * energy-bim-ui.js — the Heating and cooling section of BimCraft's Daylight tab (0.7 LC.20 item 7, session bim-ops): each
 * room's heat loss, a degree-day year and a cooling peak (energy-bim.js), every input shown and changeable, every element's
 * area, U-value and where the U came from. A design aid, not a compliance calculation: the section says so.
 * Inputs and typed conductivities are this browser's (localStorage `bimcraft.energy`); a typed U-value is written into the
 * IFC (Pset_<Class>Common.ThermalTransmittance, one undo step) — only when the host passes afterEdit (else read-only, said).
 *
 *   energySection(host, ctx) → element      ctx = the Daylight tab's: { gathered(), render(), busy(on) }
 *   ENERGY — { inputs, lambdas, e, u, rooms, room, open }
 */
import { el } from './ui-util.js';
import { getDisplayUnits, localizeQuantities, fmtM2, areaMark } from './model-units.js';   // GH.3-A: results in the picked unit
const Q = (s) => localizeQuantities(s, getDisplayUnits());
import { t } from './i18n.js';
import { INPUTS, gatherEnergy, uValues, loads, uOp, degreeDaysCsv } from './energy-bim.js';
import { SKY } from './daylight-bim-sky-ui.js';

const KEY = 'bimcraft.energy';
const LIM = { ti: [5, 35], te: [-50, 25], tg: [-10, 25], ach: [0, 20], dd: [0, 15000], teSummer: [10, 55], tiCool: [15, 35], perPerson: [0, 500], wPerson: [0, 300], wLights: [0, 50], wEquip: [0, 200] };
const WORD = { ti: 'ti', te: 'te', tg: 'tg', ach: 'ach', dd: 'dd', teSummer: 'te-summer', tiCool: 'ti-cool', perPerson: 'per-person', wPerson: 'w-person', wLights: 'w-lights', wEquip: 'w-equip' };
export const ENERGY = { inputs: null, lambdas: {}, e: null, u: null, rooms: null, room: null, open: false, from: null };
function load() {
  let o = null;
  try { o = JSON.parse(localStorage.getItem(KEY) || 'null'); } catch { o = null; }
  const I = {};
  for (const k of Object.keys(LIM)) { const x = Number(o?.inputs?.[k]); I[k] = Number.isFinite(x) && x >= LIM[k][0] && x <= LIM[k][1] ? x : INPUTS[k]; }
  const lam = {};
  for (const [k, v] of Object.entries(o?.lambdas || {})) if (Number(v) > 0 && Number(v) < 500 && k.length < 120) lam[k] = Number(v);
  return { I, lam };
}
const save = () => { try { localStorage.setItem(KEY, JSON.stringify({ inputs: ENERGY.inputs, lambdas: ENERGY.lambdas })); } catch { /* private window */ } };
const W0 = (x) => Math.round(x).toLocaleString('en-US').replace(/,/g, ' ');   // whole watts, thin grouping (i18n-ignore: a number format)

export function energySection(host, ctx) {
  if (!ENERGY.inputs) { const l = load(); ENERGY.inputs = l.I; ENERGY.lambdas = l.lam; }
  const I = ENERGY.inputs, g = ctx.gathered(), e = host.editor();
  if (!g || !e) return null;
  if (ENERGY.from !== g) { ENERGY.from = g; ENERGY.e = null; ENERGY.rooms = null; ENERGY.room = null; }   // a new Calculate: the old loads go
  const recompute = () => { if (ENERGY.e) { ENERGY.u = uValues(host.W, e.api, e.mid, [...ENERGY.e.ids], { lambdas: ENERGY.lambdas }); ENERGY.rooms = loads(ENERGY.e, ENERGY.u, I, { solar: SKY.sun }); ENERGY.sun = SKY.sun; } };
  if (ENERGY.e && ENERGY.sun !== SKY.sun) recompute();   // the sun worked out again (or cleared): the cooling peak follows
  const run = async () => {
    ctx.busy(true);
    try {
      const rooms = [], ids2 = new Set();
      for (let i = 0; i < g.rooms.length; i++) {
        host.status(t('energy.working', { n: i + 1, of: g.rooms.length }));
        await new Promise((r) => setTimeout(r, 0));
        const one = gatherEnergy(host.W, e.api, e.mid, { rooms: [g.rooms[i]], prods: g.prods });
        rooms.push(...one.rooms); for (const id of one.ids) ids2.add(id);
      }
      ENERGY.e = { rooms, ids: ids2 };
      recompute();
      host.status(t('energy.done', { n: rooms.length }));
    } catch (err) { host.status(t('day.failed', { why: String(err.message || err) }), true); }
    ctx.busy(false); ctx.render();
  };
  const box = (k, step) => el('label', { className: 'fa-field' }, el('span', {}, t('energy.in.' + WORD[k])),
    el('input', { type: 'number', step, className: 'bc-input fa-input', value: String(I[k]), 'data-energy-in': k,
      onchange: (ev) => { const x = Number(ev.target.value); if (ev.target.value.trim() !== '' && Number.isFinite(x) && x >= LIM[k][0] && x <= LIM[k][1]) { I[k] = x; save(); recompute(); ctx.render(); } else ev.target.value = String(I[k]); } }));
  const out = el('details', { className: 'as-cobie', 'data-energy': '', open: ENERGY.open || !!ENERGY.rooms, ontoggle: (ev) => { ENERGY.open = ev.target.open; } },
    el('summary', {}, t('energy.h')),
    el('p', { className: 'bc-muted' }, t('energy.intro')),
    el('p', { className: 'bc-muted day-not', 'data-energy-not': '' }, t('energy.not')),
    el('h4', { className: 'bc-h fa-h3' }, t('energy.h.heat')),
    el('div', { className: 'as-form' }, box('ti', '0.5'), box('te', '0.5'), box('tg', '0.5'), box('ach', '0.1'), box('dd', '10')),
    el('div', { className: 'fa-head' }, el('label', { className: 'btn-line btn-sm-cc' }, t('energy.btn.dd'),
      el('input', { type: 'file', accept: '.csv,.txt,text/csv', hidden: true, 'data-energy-dd': '', onchange: async (ev) => {
        const f = ev.target.files?.[0]; ev.target.value = '';
        if (!f) return;
        try { if (f.size > 5e6) throw Object.assign(new Error('big'), { key: 'energy.err.dd-big' }); const d = degreeDaysCsv(await f.text()); if (d.total > LIM.dd[1]) throw Object.assign(new Error('big'), { key: 'energy.err.dd-big' }); I.dd = Math.round(d.total * 10) / 10; save(); recompute(); host.status(t('energy.dd.read', { dd: I.dd, n: d.rows })); }
        catch (err) { host.status(err.key ? t(err.key) : String(err.message || err), true); }
        ctx.render();
      } }))),
    el('p', { className: 'bc-muted' }, t('energy.dd.note')),
    el('h4', { className: 'bc-h fa-h3' }, t('energy.h.cool')),
    el('div', { className: 'as-form' }, box('teSummer', '0.5'), box('tiCool', '0.5'), box('perPerson', '1'), box('wPerson', '5'), box('wLights', '1'), box('wEquip', '1')),
    el('p', { className: 'bc-muted', 'data-energy-sun': '' }, SKY.sun ? t('energy.sun.from', { date: SKY.sun.date || '' }) : t('energy.sun.none')),
    el('div', { className: 'fa-head' }, el('button', { type: 'button', className: 'btn-plot btn-sm-cc', 'data-energy-run': '', onclick: run }, t('energy.btn.run'))));
  if (ENERGY.rooms) {
    out.append(el('div', { className: 'fa-wrap' }, el('table', { className: 'bc-qto-table fa-table', 'data-energy-table': '' },
      el('thead', {}, el('tr', {}, el('th', {}, t('day.col.room')), el('th', {}, t('energy.col.heat')), el('th', {}, t('energy.col.year')), el('th', {}, t('energy.col.cool')))),
      el('tbody', {}, ...ENERGY.rooms.map((r) => el('tr', { className: r.id === ENERGY.room ? 'is-on' : '', 'data-energy-row': r.guid, tabindex: '0', onclick: () => { ENERGY.room = r.id; ctx.render(); } },
        el('td', {}, [r.name, r.longName].filter(Boolean).join(' ')), el('td', {}, W0(r.heat.total) + ' W'), el('td', {}, W0(r.annual)), el('td', {}, W0(r.cool.total) + ' W')))))));
    const tot = ENERGY.rooms.reduce((a, r) => ({ heat: a.heat + r.heat.total, year: a.year + r.annual, cool: a.cool + r.cool.total }), { heat: 0, year: 0, cool: 0 });
    out.append(el('p', { 'data-energy-total': '' }, t('energy.total', { heat: W0(tot.heat), year: W0(tot.year), cool: W0(tot.cool) })));
    const r = ENERGY.rooms.find((x) => x.id === ENERGY.room);
    if (r) out.append(roomDetail(r, host, ctx, recompute));
    out.append(lambdaBlock(ctx, recompute));
  }
  return out;
}

function roomDetail(r, host, ctx, recompute) {
  const canEdit = typeof host.afterEdit === 'function';
  const srcName = (s) => t('energy.src.' + s);
  const rows = r.rows.map((p) => {
    const u = ENERGY.u.get(p.id);
    const ue = canEdit && u?.set ? el('input', { type: 'number', step: '0.01', min: '0.01', className: 'bc-input fa-input', value: String(Math.round(p.u * 1000) / 1000), 'data-energy-u': p.id, 'aria-label': t('energy.u.edit', { name: p.name }),
      onchange: (ev) => {
        const ed = host.editor(), guid = ed?.api.GetLine(ed.mid, p.id, false)?.GlobalId?.value;
        if (!ed || !guid) return;
        try { ed.modelChange(uOp(guid, ev.target.value.trim()), { label: t('energy.u.label') }); host.afterEdit(); recompute(); host.status(u.shared > 1 ? t('energy.u.shared', { n: u.shared }) : t('energy.u.saved')); }
        catch (err) { host.status(err.key ? t(err.key) : String(err.message || err), true); }
        ctx.render();
      } }) : String(Math.round(p.u * 1000) / 1000);
    return el('tr', { 'data-energy-part': String(p.id) },
      el('td', {}, p.name || t('energy.opening'), el('span', { className: 'bc-muted' }, ' ' + t('energy.exp.' + p.exposure))),
      el('td', {}, fmtM2(p.area, getDisplayUnits(), false)), el('td', {}, ue, el('span', { className: 'bc-muted' }, ' ' + srcName(p.source))), el('td', {}, p.exposure === 'adjacent' ? '—' : p.ua.toFixed(2)));   // i18n-ignore: a dash for not counted
  });
  const H = r.H, I = r.inputs;
  return el('section', { className: 'as-detail', 'data-energy-detail': r.guid },
    el('h3', { className: 'bc-h fa-h3' }, [r.name, r.longName].filter(Boolean).join(' ')),
    el('p', {}, Q(t('energy.room.size', { floor: r.floorArea.toFixed(1), volume: r.volume.toFixed(1) }))),
    el('div', { className: 'fa-wrap' }, el('table', { className: 'bc-qto-table fa-table', 'data-energy-parts': '' },
      el('thead', {}, el('tr', {}, el('th', {}, t('energy.col.part')), el('th', {}, t('energy.col.area').replace('m²', areaMark(getDisplayUnits()))), el('th', {}, t('energy.col.u')), el('th', {}, t('energy.col.ua')))),
      el('tbody', {}, ...rows))),
    canEdit ? null : el('p', { className: 'bc-muted' }, t('energy.u.readonly')),
    r.open > 0.01 ? el('p', { className: 'fa-warn', 'data-energy-open': '' }, Q(t('energy.open', { a: r.open.toFixed(2) }))) : null,
    el('p', { 'data-energy-h': '' }, t('energy.room.h', { out: H.out.toFixed(2), ground: H.ground.toFixed(2), vent: H.vent.toFixed(2), ach: I.ach, v: r.volume.toFixed(1) })),
    el('p', { 'data-energy-heat': '' }, t('energy.room.heat', { fabric: W0(r.heat.fabric), ground: W0(r.heat.ground), vent: W0(r.heat.vent), total: W0(r.heat.total), ti: I.ti, te: I.te, tg: I.tg })),
    el('p', { 'data-energy-year': '' }, t('energy.room.year', { year: W0(r.annual), dd: I.dd })),
    el('p', { 'data-energy-cool': '' }, t('energy.room.cool', { fabric: W0(r.cool.fabric), vent: W0(r.cool.vent), people: W0(r.cool.people), lights: W0(r.cool.lights), equip: W0(r.cool.equip), solar: W0(r.cool.solar), total: W0(r.cool.total) })),
    el('p', { className: 'bc-muted' }, t('energy.room.formula')));
}

/** The materials of layered elements, each with its λ (typical or typed); typing one works the U-values out again. */
function lambdaBlock(ctx, recompute) {
  const mats = new Map();
  for (const u of ENERGY.u.values()) for (const ly of u.layers || []) { const k = ly.name.trim().toLowerCase(); if (k && !mats.has(k)) mats.set(k, ly); }
  if (!mats.size) return el('p', { className: 'bc-muted' }, t('energy.lambda.none'));
  return el('div', { 'data-energy-lambdas': '' }, el('h4', { className: 'bc-h fa-h3' }, t('energy.lambda.h')), el('p', { className: 'bc-muted' }, t('energy.lambda.intro')),
    el('div', { className: 'as-form' }, ...[...mats].map(([k, ly]) => el('label', { className: 'fa-field' }, el('span', {}, ly.name + (ly.known ? '' : ' ' + t('energy.lambda.unknown'))),
      el('input', { type: 'number', step: '0.001', min: '0.001', className: 'bc-input fa-input', value: ENERGY.lambdas[k] ?? (ly.lambda ?? ''), placeholder: 'λ', 'data-energy-lambda': k,
        onchange: (ev) => { const x = Number(ev.target.value); if (x > 0 && x < 500) ENERGY.lambdas[k] = x; else delete ENERGY.lambdas[k]; save(); recompute(); ctx.render(); } })))));
}
