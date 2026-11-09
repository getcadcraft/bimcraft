/* SPDX-License-Identifier: Apache-2.0 */
/**
 * energy-ep-ui.js — the "Check with EnergyPlus" pane (0.8 EG.13, session `energy_PART_2`). Always works without the engine: it writes the IDF for
 * the open model to a file, so anyone with their own EnergyPlus can run it. With the person's engine address (energy-ep-run.js) it simulates, only
 * when they press the button — design days (no weather file) or a year on an .epw they pick — and lists EnergyPlus's loads beside the design aid's.
 * Offered only while epGate() says so (in /lab until the owner has answered the licence questions). A design aid's second opinion, said on screen.
 *
 *   mountEnergyEp(pane, app) → { show() }     app = { ed() → IfcEditor, inputs?() → energy INPUTS overrides, save?(name, text), problems?: window.ccProblems }
 * bimcraft.js mounts it as a right-panel tab (mount line in docs/0.8-sessions/energy_PART_2.md). Test: bin/test-bimcraft.mjs --ep (the engine side).
 */
import { t } from './i18n.js';
import { prepareModel, EP_NAME } from './energy-ep.js';
import { epGate, epAddonOn, getEngine, setEngine, simulate, ENGINE_SIZE_MB } from './energy-ep-run.js';
import { climateFor } from './climate-future-ui.js';   // 0.9 EG.46 (climate-futures-09): a year on the present and the morphed future weather file
import { morphEpw } from './climate/morph.js';

const pct = (x) => (x === null || x === undefined ? '—' : (x > 0 ? '+' : '') + Math.round(x * 100) + ' %');
const W0 = (x) => (Number.isFinite(x) ? String(Math.round(x)) : '—');

export function mountEnergyEp(pane, app) {
  const d = pane.ownerDocument;
  const el = (tag, attrs = {}, ...kids) => {
    const n = d.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) { if (k === 'class') n.className = v; else if (k === 'on') for (const [ev, fn] of Object.entries(v)) n.addEventListener(ev, fn); else if (v !== undefined && v !== false) n.setAttribute(k, v === true ? '' : String(v)); }
    n.append(...kids.flat().filter((x) => x !== null && x !== undefined && x !== false));
    return n;
  };
  const S = { mass: false, said: '', busy: false, last: null, epw: null, epwName: '' };
  let src = null;
  const post = (list) => { try { src ||= app.problems?.source?.({ id: 'bimcraft.energy.ep', kind: 'engine', label: t('ep.title') }); src?.set(list); } catch { /* the shell's Problems are not loaded */ } };
  const say = (m, bad) => { S.said = m; S.bad = !!bad; draw(); };
  let clim = null;
  const climate = () => (clim ||= climateFor({ editor: app.ed }, { show: [], onChange: () => draw() }));
  async function runBoth() {   // 0.9 EG.46: the same model, a year on the present file and on the future one
    const f = climate().future();
    if (!f?.ok || !S.epw) return say(climate().say('clim.needfuture'), true);
    S.busy = true; say(t('ep.running'));
    try {
      const r = model('year'), text = new TextDecoder().decode(S.epw), fut = new TextEncoder().encode(morphEpw(text, f.d, { label: f.scenario + ' ' + f.horizon }).text);
      const present = await simulate({ idf: r.text, epw: S.epw, mode: 'year', zoneOf: r.zoneOf, ours: r.ours }), future = await simulate({ idf: r.text, epw: fut, mode: 'year', zoneOf: r.zoneOf, ours: r.ours });
      S.both = { r, f, present, future }; S.last = null; post(present.problems);
      S.busy = false; say(present.err.completed && future.err.completed ? t('ep.done') : t('ep.notdone'), !(present.err.completed && future.err.completed));
    } catch (e) { S.busy = false; S.both = null; say(e.key ? t(e.key) : String(e.message || e), true); }
  }
  function bothResult() {
    const B = S.both;
    if (!B) return null;
    const s = climate().say, head = s('clim.col.future', { scenario: s('clim.sc.' + B.f.scenario).replace(/ \(.*\)$/, ''), year: B.f.horizon }), tot = { hp: 0, hf: 0, cp: 0, cf: 0 };
    const rows = [...B.present.year].map(([zone, v]) => { const w = B.future.year.get(zone) || {}; tot.hp += v.heating || 0; tot.hf += w.heating || 0; tot.cp += v.cooling || 0; tot.cf += w.cooling || 0;
      return el('tr', {}, el('td', {}, B.r.zoneOf.get(zone)?.name || zone), el('td', {}, W0(v.heating)), el('td', {}, W0(w.heating)), el('td', {}, W0(v.cooling)), el('td', {}, W0(w.cooling))); });
    rows.push(el('tr', {}, el('td', {}, el('strong', {}, s('clim.ep.total'))), el('td', {}, W0(tot.hp)), el('td', {}, W0(tot.hf)), el('td', {}, W0(tot.cp)), el('td', {}, W0(tot.cf))));
    const h = (k, w) => s(k) + ' · ' + w;
    return el('table', { 'data-ep-climate-table': true, class: 'bc-qto-table' }, el('thead', {}, el('tr', {}, ...[t('ep.col.room'), h('clim.ep.col.heat', s('clim.col.present')), h('clim.ep.col.heat', head), h('clim.ep.col.cool', s('clim.col.present')), h('clim.ep.col.cool', head)].map((x) => el('th', {}, x)))), el('tbody', {}, ...rows));
  }
  const takeFuture = (redraw) => { const g = globalThis.ccBimcraftClimateEpw; if (!g) return; S.epw = new TextEncoder().encode(g.text); S.epwName = g.name; S.epwFuture = true; S.both = null; if (redraw) draw(); };
  takeFuture(false);   // handed over before this pane was mounted
  globalThis.addEventListener?.('cc-bimcraft-climate-epw', () => takeFuture(true));

  const model = (mode) => {
    const ed = app.ed();
    if (!ed) throw Object.assign(new Error('ep.err.nomodel'), { key: 'ep.err.nomodel' });
    const r = prepareModel(ed.W, ed.api, ed.mid, { inputs: app.inputs?.() || {}, mode, mass: S.mass });
    if (!r.ok) throw Object.assign(new Error(r.key), { key: r.key });
    return r;
  };
  async function save() {
    const r = model(S.epw ? 'year' : 'design');
    if (typeof app.save !== 'function') throw Object.assign(new Error('ep.err.nosave'), { key: 'ep.err.nosave' });
    await app.save('model.idf', r.text);
    say(t('ep.saved', { zones: r.zones, surfaces: r.surfaces, windows: r.windows, skipped: r.skipped.length }));
  }
  async function run(mode) {
    S.busy = true; say(t('ep.running'));
    try {
      const r = model(mode);
      S.last = { mode, r, sim: await simulate({ idf: r.text, epw: mode === 'year' ? S.epw : null, mode, zoneOf: r.zoneOf, ours: r.ours }) };
      post(S.last.sim.problems);
      S.busy = false; say(S.last.sim.err.completed ? t('ep.done') : t('ep.notdone'), !S.last.sim.err.completed);
    } catch (e) { S.busy = false; S.last = null; post([]); say(e.key ? t(e.key) : String(e.message || e), true); }
  }
  const btn = (label, fn, attr = {}) => el('button', { type: 'button', class: 'btn-line btn-sm-cc', ...attr, on: { click: () => { Promise.resolve().then(fn).catch((e) => say(e.key ? t(e.key) : String(e.message || e), true)); } } }, label);

  function result() {
    const L = S.last;
    if (!L) return null;
    const rows = L.mode === 'design'
      ? L.sim.cmp.map((c) => el('tr', {}, el('td', {}, c.name), el('td', {}, W0(c.ep.heating)), el('td', {}, W0(c.ours.heating)), el('td', {}, pct(c.dHeating)), el('td', {}, W0(c.ep.cooling)), el('td', {}, W0(c.ours.cooling)), el('td', {}, pct(c.dCooling))))
      : [...L.sim.year].map(([zone, v]) => el('tr', {}, el('td', {}, L.r.zoneOf.get(zone)?.name || zone), el('td', {}, W0(v.heating)), el('td', {}, W0(v.cooling))));
    const head = L.mode === 'design' ? ['ep.col.room', 'ep.col.heat.ep', 'ep.col.heat.ours', 'ep.col.diff', 'ep.col.cool.ep', 'ep.col.cool.ours', 'ep.col.diff'] : ['ep.col.room', 'ep.col.year.heat', 'ep.col.year.cool'];
    return el('div', {}, el('table', { 'data-ep-table': true, class: 'bc-qto-table' }, el('thead', {}, el('tr', {}, ...head.map((k) => el('th', {}, t(k))))), el('tbody', {}, ...rows)),
      el('p', { 'data-ep-counts': true }, t('ep.counts', { severe: L.sim.err.severe, warnings: L.sim.err.warnings })),
      el('ul', { 'data-ep-problems': true }, ...L.sim.problems.map((p) => el('li', {}, p.text))));
  }

  function draw() {
    pane.replaceChildren();
    const gate = !epAddonOn() ? 'addon' : epGate();
    if (gate) { pane.append(el('p', { 'data-ep-gate': gate }, t('ep.gate.' + gate))); return; }
    const addr = el('input', { type: 'text', class: 'form-control form-control-sm', value: getEngine() || '', placeholder: 'https://…', 'data-ep-engine': true });
    const epw = el('input', { type: 'file', accept: '.epw', hidden: true, 'data-ep-epw': true });
    epw.addEventListener('change', async () => { const f = epw.files?.[0]; if (!f) return; if (f.size > 4e6) return say(t('ep.err.epw'), true); S.epw = new Uint8Array(await f.arrayBuffer()); S.epwName = f.name; S.epwFuture = false; S.both = null; draw(); });
    const mass = el('input', { type: 'checkbox', 'data-ep-mass': true }); mass.checked = S.mass; mass.addEventListener('change', () => { S.mass = mass.checked; });
    const engine = getEngine();
    pane.append(el('div', { class: 'ep', style: 'padding:0.5rem;font-size:0.8rem' },
      el('p', {}, t('ep.intro', { name: EP_NAME })), el('p', { style: 'opacity:0.8' }, t('ep.not')),
      el('details', { 'data-ep-licence': true }, el('summary', {}, t('ep.licence.title')), el('p', {}, t('ep.licence', { name: EP_NAME }))),
      el('label', { style: 'display:grid;gap:0.1rem' }, el('span', {}, t('ep.engine')), addr),
      el('p', { style: 'opacity:0.8' }, t('ep.engine.size', { mb: ENGINE_SIZE_MB.wasmBrotli + ENGINE_SIZE_MB.idd })),
      btn(t('ep.engine.save'), () => { try { setEngine(addr.value.trim() || null); say(t('ep.engine.saved')); } catch (e) { say(t(e.key || 'ep.err.url'), true); } }, { 'data-ep-engine-save': true }),
      el('label', {}, mass, ' ', t('ep.mass')),
      el('div', { style: 'display:flex;gap:0.25rem;flex-wrap:wrap;margin:0.5rem 0' },
        btn(t('ep.btn.save'), save, { 'data-ep-save': true }),
        btn(t('ep.btn.design'), () => run('design'), { 'data-ep-run': 'design', disabled: !engine || S.busy }),
        btn(t('ep.btn.epw'), () => epw.click(), { 'data-ep-pick': true }), epw,
        btn(t('ep.btn.year'), () => run('year'), { 'data-ep-run': 'year', disabled: !engine || !S.epw || S.busy })),
      S.epwName ? el('p', {}, S.epwName) : null,
      S.epw && S.epwFuture ? el('p', { 'data-ep-climate-handed': true }, climate().say('clim.he.used')) : null,
      S.epw && !S.epwFuture ? el('div', { 'data-ep-climate': true, style: 'border-top:1px solid var(--grid);margin-top:0.4rem;padding-top:0.3rem' }, climate().render(),
        climate().future()?.ok ? btn(climate().say('clim.ep.both'), runBoth, { 'data-ep-run': 'climate', disabled: !engine || S.busy }) : null, bothResult()) : null,
      el('p', { 'data-ep-say': true, style: 'white-space:pre-wrap' + (S.bad ? ';color:var(--bs-danger,#b00)' : '') }, S.said), result()));
  }
  draw();
  globalThis.addEventListener?.('cc-bimcraft-ep-addon', () => draw());
  return { show: draw, state: S };
}
