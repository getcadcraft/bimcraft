/* SPDX-License-Identifier: Apache-2.0 */
/**
 * pv-ui.js — the Solar PV pane (0.8 EG.15, session `energy_PART_2`): arrays (roof faces from the model, modules fitted with a setback, ground rows), yield,
 * strings and the one-line. One pane, four small forms; each Check runs pv-calc.js on the open model, lists the result, posts the Problems to the shell's ⚠ panel
 * (source `bimcraft.pv`, kind engine) and places arrays as ONE undo step. Every default is labelled on screen.
 *
 *   mountPv(pane, app) → { show(kind), state }
 *     app = { w() → ModelWriter (read), apply(label, op) → Promise (one undo step), problems?: window.ccProblems, save?(name, text), storey?() → the level GlobalId to place on }
 * bimcraft.js mounts it as a right-panel tab (the mount line is in docs/0.8-sessions/energy_PART_2.md). Test: bin/test-bimcraft.mjs --pv (a stand-in DOM).
 */
import { fetchClimate, PROVIDERS, readPack, parseClimateAnswer } from './data-packs.js';
import { tr } from './pv-text.js';
import { getDisplayUnits, localizeQuantities } from './model-units.js';   // GH.3-A: results in the picked unit
const Q = (s) => localizeQuantities(s, getDisplayUnits());
import { STARTER_MODULE, STARTER_INVERTER, modulesCsv, parseModulesCsv } from './pv.js';
import { DEFAULT_LOSSES } from './pv-yield.js';
import { DEFAULT_STRING } from './pv-string.js';
import { pvSite, modelFaces, planRoofArray, planGroundArray, placeArray, calcArrays, calcYield, calcStrings, calcOneline } from './pv-calc.js';
import { onelineSvg, pvOnelineForElectrical } from './pv-oneline.js';
import { readLevels } from './model-levels.js';

const KINDS = ['arrays', 'yield', 'strings', 'oneline'];
const f1 = (x) => (Number.isFinite(x) ? String(Math.round(x * 10) / 10) : '—');
const f2 = (x) => (Number.isFinite(x) ? String(Math.round(x * 100) / 100) : '—');
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];   // i18n-ignore: month abbreviations in a table head

export function mountPv(pane, app) {
  const d = pane.ownerDocument;
  const el = (tag, attrs = {}, ...kids) => {
    const n = d.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) { if (k === 'class') n.className = v; else if (k === 'on') for (const [ev, fn] of Object.entries(v)) n.addEventListener(ev, fn); else if (v !== undefined && v !== false) n.setAttribute(k, v === true ? '' : String(v)); }
    n.append(...kids.flat().filter((x) => x !== null && x !== undefined && x !== false));
    return n;
  };
  const S = {
    kind: 'arrays', modules: [STARTER_MODULE], mod: { moduleId: STARTER_MODULE.id }, csv: modulesCsv([STARTER_MODULE]),
    site: { lat: '', lon: '' },
    arrays: { face: '', orient: 'portrait', setback: 300, gap: 20, rows: 2, perRow: 8, stack: 2, tilt: 30, azimuth: 180, hours: 0, level: '' },
    yield: { sky: 'clear', ghi: '2, 2.9, 4, 5, 5.9, 6.5, 6.3, 5.6, 4.5, 3.2, 2.1, 1.7', tamb: '20', soiling: DEFAULT_LOSSES.soiling, wiring: DEFAULT_LOSSES.wiring, mismatch: DEFAULT_LOSSES.mismatch, availability: DEFAULT_LOSSES.availability, inverter: DEFAULT_LOSSES.inverter, albedo: 0.2, shading: true },
    strings: { modules: 0, tMin: DEFAULT_STRING.tMin, tHot: DEFAULT_STRING.tHot, vSys: DEFAULT_STRING.vSys, vocFactor: 1, pacKw: STARTER_INVERTER.pacKw, vdcMax: STARTER_INVERTER.vdcMax, mpptMin: STARTER_INVERTER.mpptMin, mpptMax: STARTER_INVERTER.mpptMax, mppts: STARTER_INVERTER.mppts, idcMax: STARTER_INVERTER.idcMax, iscMax: STARTER_INVERTER.iscMax },
    last: null, faces: [], said: '',
  };
  let src = null;
  const post = (list) => { try { src ||= app.problems?.source?.({ id: 'bimcraft.pv', kind: 'engine', label: tr('pv.title') }); src?.set(list); } catch { /* the shell's Problems are not loaded */ } };
  const module = () => S.modules.find((m) => m.id === S.mod.moduleId) || S.modules[0] || STARTER_MODULE;
  const siteArg = () => (Number.isFinite(parseFloat(S.site.lat)) && Number.isFinite(parseFloat(S.site.lon)) ? { lat: parseFloat(S.site.lat), lon: parseFloat(S.site.lon) } : null);
  const say = (s) => { S.said = s; };
  const fail = (r) => { S.last = null; say(tr(r.key || 'pv.err.module')); post([]); };

  function draw() {
    pane.replaceChildren();
    const tabs = el('div', { role: 'tablist', style: 'display:flex;gap:0.25rem;margin-bottom:0.5rem' }, ...KINDS.map((k) => el('button', { type: 'button', role: 'tab', 'data-pv-tab': k, 'aria-selected': S.kind === k ? 'true' : 'false', class: 'btn-line btn-sm-cc', on: { click: () => show(k) } }, tr('pv.tab.' + k))));
    pane.append(el('div', { class: 'pv', style: 'padding:0.5rem;font-size:0.8rem' }, el('p', {}, tr('pv.intro')), tabs, form(), el('p', { 'data-pv-say': true, style: 'white-space:pre-wrap' }, S.said), result()));
  }
  const show = (k) => { S.kind = k; S.said = ''; S.last = null; draw(); };

  const field = (label, key, group, type = 'number') => {
    const i = el('input', { type, step: 'any', value: S[group][key], class: 'form-control form-control-sm', 'data-pv-field': group + '.' + key });
    i.addEventListener('change', () => { S[group][key] = type === 'number' ? Number(i.value) : i.value; });
    return el('label', { style: 'display:grid;gap:0.1rem;margin:0.25rem 0' }, el('span', {}, label), i);
  };
  const choice = (label, key, group, options) => {
    const s = el('select', { class: 'form-select form-select-sm', 'data-pv-field': group + '.' + key }, ...options.map(([v, t]) => el('option', { value: v, ...(String(S[group][key]) === String(v) ? { selected: true } : {}) }, t)));
    s.addEventListener('change', () => { S[group][key] = s.value; });
    return el('label', { style: 'display:grid;gap:0.1rem;margin:0.25rem 0' }, el('span', {}, label), s);
  };
  const button = (label, fn, attr) => el('button', { type: 'button', class: 'btn-line btn-sm-cc', ...attr, on: { click: async () => { try { await fn(); } catch (e) { say(String(e.key ? tr(e.key) : e.message || e)); } draw(); } } }, label);
  const siteFields = () => (pvSite(app.w()) ? null : el('div', {}, field(tr('pv.latitude'), 'lat', 'site', 'text'), field(tr('pv.longitude'), 'lon', 'site', 'text'), el('p', {}, tr('pv.err.nosite'))));

  function form() {
    if (S.kind === 'arrays') {
      const mt = el('textarea', { rows: 4, class: 'form-control form-control-sm', 'data-pv-field': 'csv' }, S.csv);
      mt.addEventListener('change', () => { S.csv = mt.value; });
      return el('div', {}, siteFields(),
        choice(tr('pv.module.label'), 'moduleId', 'mod', S.modules.map((m) => [m.id, m.name])), el('p', { style: 'opacity:0.8' }, tr('pv.module.starter')),
        el('label', {}, el('span', {}, tr('pv.module.table')), mt), button(tr('pv.module.apply'), () => { const r = parseModulesCsv(S.csv); if (r.modules.length) { S.modules = r.modules; S.mod.moduleId = r.modules[0].id; } say(r.errors.length ? tr('pv.err.module') + ' ' + r.errors.map((e) => (e.id || e.index) + ': ' + e.keys.join(',')).join('; ') : ''); }, { 'data-pv-modules': 'apply' }),
        button(tr('pv.check'), () => { const r = faces(); if (!r) return; }, { 'data-pv-check': 'arrays' }),
        choice(tr('pv.faces'), 'face', 'arrays', [['', '—'], ...S.faces.map((f) => [f.id, Q(f.flat ? tr('pv.face.flat', { id: f.id, area: f.areaM2 }) : tr('pv.face.row', { id: f.id, tilt: f.tilt, az: f.azimuth, area: f.areaM2 }))])]),
        choice(tr('pv.level'), 'level', 'arrays', [['', tr('pv.level.auto')], ...levels().map((l) => [l.guid, l.name])]),
        choice(tr('pv.orient'), 'orient', 'arrays', [['portrait', tr('pv.orient.portrait')], ['landscape', tr('pv.orient.landscape')]]), field(tr('pv.setback'), 'setback', 'arrays'), field(tr('pv.gap'), 'gap', 'arrays'),
        button(tr('pv.place'), () => place('roof'), { 'data-pv-place': 'roof' }),
        el('hr', {}), field(tr('pv.rows'), 'rows', 'arrays'), field(tr('pv.perrow'), 'perRow', 'arrays'), field(tr('pv.stack'), 'stack', 'arrays'), field(tr('pv.tilt'), 'tilt', 'arrays'), field(tr('pv.azimuth'), 'azimuth', 'arrays'), field(tr('pv.winterhours'), 'hours', 'arrays'),
        button(tr('pv.ground'), () => place('ground'), { 'data-pv-place': 'ground' }));
    }
    if (S.kind === 'yield') {
      const y = S.yield;
      return el('div', {}, siteFields(), choice(tr('pv.sky'), 'sky', 'yield', [['clear', tr('pv.sky.clear')], ['monthly', tr('pv.sky.monthly')]]), field(tr('pv.ghi'), 'ghi', 'yield', 'text'), field(tr('pv.tamb'), 'tamb', 'yield', 'text'), field(tr('pv.albedo'), 'albedo', 'yield'),
        field(tr('pv.loss.soiling'), 'soiling', 'yield'), field(tr('pv.loss.wiring'), 'wiring', 'yield'), field(tr('pv.loss.mismatch'), 'mismatch', 'yield'), field(tr('pv.loss.availability'), 'availability', 'yield'), field(tr('pv.loss.inverter'), 'inverter', 'yield'),
        el('p', { style: 'opacity:0.8' }, tr('pv.climate.note', { p: 'NASA POWER / PVGIS' })),
        el('div', { style: 'display:flex;gap:0.25rem;flex-wrap:wrap' }, ...Object.entries(PROVIDERS).map(([k, P]) => !P.direct ? (() => { const st = siteArg(); const u = st ? P.url(st.lat, st.lon) : null; return u ? el('a', { href: u, target: '_blank', rel: 'noopener noreferrer', class: 'btn-line btn-sm-cc', 'data-pv-climate-link': k }, tr('pv.climate.open', { p: P.name })) : el('span', { class: 'text-muted', 'data-pv-climate-link': k }, tr('pv.climate.open.site', { p: P.name })); })() : button(tr('pv.climate.fetch', { p: P.name }), async () => {
          const site = siteArg(); if (!site) throw new Error(tr('pv.err.nosite'));
          const r = await fetchClimate(k, site.lat, site.lon, { store: (() => { try { return globalThis.localStorage; } catch { return null; } })() });
          if (!r.ok) { y.sky = 'clear'; say(tr('pv.climate.fail', { why: r.error })); return; }
          y.sky = 'monthly'; y.ghi = r.climate.ghi.join(', '); y.tamb = r.climate.tAmb.join(', ');
          say(tr('pv.climate.got', { p: r.provider, from: r.from, src: r.climate.source }));
        }, { 'data-pv-climate': k }))),
        el('label', { style: 'display:grid;gap:0.1rem;margin:0.25rem 0' }, el('span', {}, tr('pv.climate.paste')), (() => { const ta = el('textarea', { rows: 2, class: 'form-control form-control-sm', 'data-pv-climate-paste': true }, S.climatePaste || ''); ta.addEventListener('change', () => { S.climatePaste = ta.value; }); return ta; })()),
        button(tr('pv.climate.file'), () => {
          const ans = parseClimateAnswer(S.climatePaste || '');   // a provider's own answer pasted as it came
          if (ans) { y.sky = 'monthly'; y.ghi = ans.climate.ghi.join(', '); y.tamb = ans.climate.tAmb.join(', '); say(tr('pv.climate.got', { p: ans.provider, from: 'pasted', src: ans.climate.source })); return; }
          const r = readPack(S.climatePaste || '');
          if (!r.ok || r.pack.kind !== 'climate') throw new Error(tr('pv.climate.fail', { why: r.error || 'kind' }));
          y.sky = 'monthly'; y.ghi = r.pack.data.ghi.join(', '); y.tamb = r.pack.data.tAmb.join(', ');
          say(tr('pv.climate.got', { p: r.pack.source.name, from: 'file', src: r.pack.name }));
        }, { 'data-pv-climate-file': true }),
        el('p', { style: 'opacity:0.8' }, DEFAULT_LOSSES.label),
        button(tr('pv.check'), () => {
          const sky = y.sky === 'monthly' ? { mode: 'monthly', ghi: String(y.ghi).split(/[\s,;]+/).filter(Boolean).map(Number) } : { mode: 'clear' };
          const t = String(y.tamb).split(/[\s,;]+/).filter(Boolean).map(Number), tAmb = t.length === 12 ? t : (t[0] ?? 20);
          const r = calcYield(app.w(), { site: siteArg(), sky, tAmb, albedo: y.albedo, shading: y.shading, losses: { ...DEFAULT_LOSSES, soiling: y.soiling, wiring: y.wiring, mismatch: y.mismatch, availability: y.availability, inverter: y.inverter } });
          if (!r.ok) return fail(r);
          S.last = r; say(''); post(r.problems);
        }, { 'data-pv-check': 'yield' }));
    }
    if (S.kind === 'strings') {
      const s = S.strings;
      return el('div', {}, field(tr('pv.modules'), 'modules', 'strings'), field(tr('pv.tmin'), 'tMin', 'strings'), field(tr('pv.thot'), 'tHot', 'strings'), field(tr('pv.vsys'), 'vSys', 'strings'), field(tr('pv.vocfactor'), 'vocFactor', 'strings'),
        el('p', { style: 'opacity:0.8' }, tr('pv.inverter.starter')), field('P AC (kW)', 'pacKw', 'strings'), field('V DC max', 'vdcMax', 'strings'), field('MPPT min (V)', 'mpptMin', 'strings'), field('MPPT max (V)', 'mpptMax', 'strings'), field('MPPT inputs', 'mppts', 'strings'), field('I DC max (A)', 'idcMax', 'strings'), field('I sc max (A)', 'iscMax', 'strings'),
        el('p', { style: 'opacity:0.8' }, DEFAULT_STRING.label),
        button(tr('pv.check'), () => {
          const r = calcStrings(app.w(), { modules: s.modules > 0 ? s.modules : undefined, module: module(), inverter: { ...STARTER_INVERTER, ...pick(s, ['pacKw', 'vdcMax', 'mpptMin', 'mpptMax', 'mppts', 'idcMax', 'iscMax']), starter: true }, limits: { tMin: s.tMin, tHot: s.tHot, vSys: s.vSys, vocFactor: s.vocFactor } });
          if (!r.ok) return fail(r);
          S.last = r; say(''); post(r.problems);
        }, { 'data-pv-check': 'strings' }));
    }
    return el('div', {}, el('p', { style: 'opacity:0.8' }, tr('pv.note.code')),
      button(tr('pv.oneline.make'), () => { const r = calcOneline(app.w(), { inverter: { ...STARTER_INVERTER, ...pick(S.strings, ['pacKw', 'vdcMax', 'mpptMin', 'mpptMax', 'mppts', 'idcMax', 'iscMax']) }, limits: { tMin: S.strings.tMin, tHot: S.strings.tHot, vSys: S.strings.vSys, vocFactor: S.strings.vocFactor } }); if (!r.ok) return fail(r); S.last = r; say(''); post(r.problems); }, { 'data-pv-check': 'oneline' }));
  }
  const pick = (o, ks) => Object.fromEntries(ks.map((k) => [k, Number(o[k])]));

  function faces() {
    const site = pvSite(app.w(), siteArg());
    if (!site) { say(tr('pv.err.nosite')); return null; }
    S.faces = modelFaces(app.w(), site).faces;
    const a = calcArrays(app.w(), { site: siteArg() });
    S.last = { ok: true, kind: 'arrays', faces: S.faces, arrays: a.ok ? a.arrays : [], problems: a.ok ? a.problems : [] };
    say(S.faces.length ? '' : tr('pv.err.noface')); post(S.last.problems);
    return S.last;
  }
  // The model's levels, lowest first; a pane with no model open has none.
  function levels() { try { return readLevels(app.w()).filter((l) => l.guid); } catch { return []; } }
  async function place(mount) {
    const ls = levels(), auto = mount === 'roof' ? ls[ls.length - 1] : ls[0];   // no level picked: the top one for a roof, the lowest for the ground
    const a = S.arrays, site = siteArg() || undefined, lv = app.storey?.() || a.level || auto?.guid;
    if (!lv) throw Object.assign(new Error('pv.err.nolevel'), { key: 'pv.err.nolevel' });
    const p = mount === 'roof' ? planRoofArray(app.w(), { site: site && { ...site }, face: a.face, module: module(), orient: a.orient, setback: a.setback, gap: a.gap })
      : planGroundArray(app.w(), { site: site && { ...site }, module: module(), orient: a.orient, perRow: a.perRow, stack: a.stack, rows: a.rows, tilt: a.tilt, azimuth: a.azimuth, hours: a.hours, gap: a.gap, origin: [0, 0, 0] });
    if (!p.ok) { say(tr(p.key)); return; }
    await app.apply(tr('pv.undo.add'), placeArray({ array: p.array, storey: lv }));
    say(p.array.modules.length + ' × ' + module().wp + ' Wp = ' + f2(p.array.kwp) + ' kWp'); faces();
  }

  function table(head, rows, attr) {
    return el('table', { 'data-pv-table': attr, style: 'width:100%;border-collapse:collapse;margin:0.5rem 0' }, el('thead', {}, el('tr', {}, ...head.split('|').map((h) => el('th', { style: 'text-align:left' }, h)))), el('tbody', {}, ...rows.map((row) => el('tr', {}, ...row.map((c) => el('td', {}, c))))));
  }
  function result() {
    const r = S.last;
    if (!r) return el('div', {});
    const out = [];
    if (S.kind === 'arrays') {
      out.push(r.arrays.length ? table(tr('pv.head.arrays'), r.arrays.map((a) => [a.name, a.modules.length, f2(a.kwp), f1(a.tilt), a.azimuth === null ? '—' : f1(a.azimuth)]), 'arrays') : el('p', {}, tr('pv.arrays.none')));
    } else if (S.kind === 'yield') {
      const t = r.res.arrays[0];
      out.push(table(tr('pv.head.yield'), t.monthly.map((m, i) => [MONTHS[i], f1(m.poaKwhM2), f1(m.shadeLossPct), Math.round(m.dcKwh), Math.round(r.res.total.monthly[i].acKwh)]), 'yield'));
      out.push(el('p', { 'data-pv-annual': true }, tr('pv.annual', { kwh: r.res.total.acKwh, spec: r.res.total.specificKwhKwp, pr: f2(r.res.total.pr), shade: f1(r.res.total.shadeLossPct) })));
    } else if (S.kind === 'strings') {
      const g = r.design;
      out.push(el('p', { 'data-pv-strings': true }, tr('pv.strings.result', { n: g.n, min: g.window.nMin, max: g.window.nMax, count: g.count, state: g.ok ? 'ok' : '⚠' })));
      out.push(table(tr('pv.head.strings'), g.checks.map((c) => [c.key, f2(c.value), (c.op || '') + ' ' + f2(c.limit) + ' ' + (c.unit || ''), c.ok ? 'ok' : '⚠']), 'strings'));
    } else {
      const holder = el('div', { 'data-pv-svg': true });
      holder.innerHTML = r.svg;
      out.push(holder);
      out.push(button(tr('pv.oneline.save'), () => app.save?.('pv-oneline.svg', onelineSvg(r.diagram)), { 'data-pv-save': 'svg' }));
      out.push(button(tr('pv.oneline.data'), () => app.save?.('pv-oneline.json', JSON.stringify(pvOnelineForElectrical(r.plan), null, 2)), { 'data-pv-save': 'json' }));
    }
    out.push(el('ul', { 'data-pv-problems': true, style: 'padding-left:1rem' }, ...(r.problems || []).map((p) => el('li', {}, (p.severity === 'error' ? '⛔ ' : p.severity === 'warning' ? '⚠ ' : 'ℹ ') + p.text))));
    return el('div', {}, ...out);
  }

  draw();
  if (typeof window !== 'undefined') window.addEventListener('bimcraft-units', () => { try { draw(); } catch (e) { /* GH.3-A: the tab has nothing to show yet */ } });   // results follow the display unit
  return { show, state: S, refresh: draw };
}
