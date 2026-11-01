/* SPDX-License-Identifier: Apache-2.0 */
/**
 * acoustics-ui.js — Room acoustics (0.8 EG.49, session bim-sim_PART_2): a <details> under People in the building (ui.inc data-eg49). The reverberation
 * time of every room by octave band (Sabine and Eyring) from the room's size and the finishes the person picks, a target they may set, and
 * listening: a voice, a clap or music (or the person's own sound file) played through an impulse response computed for the selected room.
 * The cores are acoustics-model.js, acoustics.js and acoustics-ir.js (DOM-free, tools/bimcraft-test/acoustics-test.mjs). Nothing here changes the model.
 *
 *   mountAcoustics(host) → { render(), rooms(), play(kind) } | null
 *   host = { root, editor(), status(text, isError), download(name, data, type), problems?: window.ccProblems }
 */
import { el } from './ui-util.js';
import { getDisplayUnits, localizeQuantities, fmtM2, areaMark } from './model-units.js';   // GH.3-A: results in the picked unit
const Q = (s) => localizeQuantities(s, getDisplayUnits());
import { t } from './i18n.js';
import { acousticsRooms, DEFAULT_FINISHES } from './acoustics-model.js';
import { MATERIALS, materialKeys, BANDS, rtProblems } from './acoustics.js';
import { synthIR, drySample, listen, wavBytes } from './acoustics-ir.js';
import { allBands, parseWav, compare } from './metrics.js';
import { boxReverb } from './stat.js';
import { boxModes, schroederFrequency, modalGap } from './modes.js';
import { airborneRating, impactRating, MATERIALS as WALLS, massLawBands } from './insul.js';

const SAVE = 'bimcraft.acoustics';
const num = (v) => { const n = Number(String(v).replace(',', '.')); return Number.isFinite(n) ? n : NaN; };
const label = (text, ctl) => el('label', { className: 'bc-4d-grouplabel' }, el('span', {}, text), ctl);
const f2 = (v) => (Number.isFinite(v) ? (Math.round(v * 100) / 100).toFixed(2) : '–');

export function mountAcoustics(host) {
  const box = host.root?.querySelector('[data-eg49]');
  if (!box) return null;
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(SAVE) || '{}') || {}; } catch (e) { saved = {}; }
  const S = { target: saved.target || '', T: saved.T || '20', RH: saved.RH || '50', finishes: saved.finishes || {}, defaults: saved.defaults || {}, room: '', sound: saved.sound || 'speech', dist: saved.dist || '4', people: saved.people || {}, pos: saved.pos || {}, place: '', dryFile: null, dryName: '' };
  const keep = () => { try { localStorage.setItem(SAVE, JSON.stringify({ target: S.target, T: S.T, RH: S.RH, finishes: S.finishes, defaults: S.defaults, sound: S.sound, dist: S.dist, people: S.people, pos: S.pos })); } catch (e) { /* private window */ } };
  let ctx = null, node = null, src = null, last = [];
  const post = (list) => { try { src ||= (host.problems || window.ccProblems)?.source?.({ id: 'bimcraft.acoustics', kind: 'engine', label: t('eg49.title') }); src?.set(list); } catch { /* the shell's Problems are not loaded */ } };
  const settings = () => ({ env: { T: num(S.T) || 20, RH: num(S.RH) || 50 }, defaults: S.defaults, rooms: S.finishes, people: peopleMap() });
  const peopleMap = () => { const m = {}; for (const [k, v] of Object.entries(S.people)) if (Number.isFinite(num(v)) && num(v) > 0) m[k] = Math.floor(num(v)); return m; };
  const compute = () => { const ed = host.editor(); last = ed ? acousticsRooms(ed, settings()) : []; return last; };
  const sel = (attrs, opts, value) => { const s = el('select', { className: 'select-cc', ...attrs }, opts.map(([v, l]) => el('option', { value: String(v) }, l))); s.value = String(value); return s; };
  const mats = (kind) => materialKeys(kind).map((k) => [k, t('ac.mat.' + k)]);

  function notes(res) {
    return (res.notes || []).map((n) => el('p', { className: 'bc-note', 'data-eg49-note': n.key }, t(n.key, n)));
  }
  function detail(r) {
    const rows = [];
    const set = { ...DEFAULT_FINISHES, ...S.defaults, ...(S.finishes[r.id] || {}) };
    const pick = (k, kind, text) => {
      const s = sel({ 'data-eg49-finish': k }, mats(kind), set[k]);
      s.addEventListener('change', () => { S.finishes[r.id] = { ...(S.finishes[r.id] || {}), [k]: s.value }; keep(); render(); });
      return label(text + ' (' + t('eg49.src.' + (r.finishSource?.[k] || 'default')) + ')', s);
    };
    rows.push(el('p', { 'data-eg49-room': '' }, Q(t('eg49.roomline', { name: r.name, area: r.area_m2, h: r.height_m, v: r.volume_m3 }))));
    rows.push(pick('floor', 'floor', t('eg49.floor')), pick('wall', 'wall', t('eg49.walls')), pick('ceiling', 'ceiling', t('eg49.ceiling')));
    const ppl = el('input', { className: 'bc-input', type: 'number', min: '0', step: '1', value: S.people[r.id] ?? '', 'data-eg49-people': '', 'aria-label': t('eg49.people') });
    ppl.addEventListener('change', () => { if (ppl.value === '') delete S.people[r.id]; else S.people[r.id] = ppl.value; keep(); render(); });
    rows.push(label(t('eg49.people'), ppl));
    const extras = (r.spec.extra || []).filter((e) => e.n);
    if (extras.length) rows.push(el('p', { className: 'bc-muted', 'data-eg49-extras': '' }, extras.map((e) => t('eg49.extra.' + e.name, { n: e.n })).join('; ')));
    if (!r.res.ok) { rows.push(el('p', { className: 'bc-note' }, t('eg49.nores'))); return rows; }
    const head = ['', ...BANDS.map((f) => (f >= 1000 ? f / 1000 + ' k' : String(f)))];
    const row = (name, vals, attr) => el('tr', attr || {}, el('th', {}, name), ...vals.map((v) => el('td', {}, f2(v))));
    rows.push(el('div', { style: 'overflow-x:auto' }, el('table', { className: 'bc-qto-table', 'data-eg49-bands': '' }, el('thead', {}, el('tr', {}, ...head.map((h) => el('th', {}, h)))),
      el('tbody', {}, row(t('eg49.sabine'), r.res.bands.map((b) => b.sabine)), row(t('eg49.eyring'), r.res.bands.map((b) => b.eyring)), row(t('eg49.answer'), r.res.bands.map((b) => b.T), { 'data-eg49-answer': '' }), row(t('eg49.alpha'), r.res.bands.map((b) => b.alpha))))));
    rows.push(el('p', { 'data-eg49-mid': '' }, Q(t('eg49.mid', { t: f2(r.res.mid.T), mfp: f2(r.res.meanFreePath) }))));
    rows.push(...notes(r.res), el('p', { className: 'bc-muted' }, t('eg49.model')));
    return rows;
  }

  async function audioCtx() { ctx ||= new (window.AudioContext || window.webkitAudioContext)(); if (ctx.state === 'suspended') await ctx.resume(); return ctx; }
  function dry(sr) { return S.dryFile && S.sound === 'file' ? S.dryFile : drySample(S.sound, sr); }
  // 0.8 EG.49 (bim-sim_PART_3): a source and a listener the person places on the room's plan (mm in the plan; the room's low corner is the origin of the IR's box)
  const lowCorner = (r) => [Math.min(...r.poly.map((p) => p[0])), Math.min(...r.poly.map((p) => p[1]))];
  const toBox = (r, p, z) => { const [x0, y0] = lowCorner(r); return [(p[0] - x0) / 1000, (p[1] - y0) / 1000, z]; };
  function makeIR(r, sr) {
    const pos = S.pos[r.id] || {};
    return synthIR(r.res, { sr, distance: Math.max(0.5, num(S.dist) || 4), seed: 1, box: r.box, source: pos.src ? toBox(r, pos.src, 1.5) : null, listener: pos.lis ? toBox(r, pos.lis, 1.2) : null });
  }
  function placer(r) {
    const c = el('canvas', { 'data-eg49-plan': '', role: 'img', 'aria-label': t('eg49.plan.alt'), style: 'width:100%;height:11rem;border:1px solid var(--grid);cursor:crosshair' });
    const [x0, y0] = lowCorner(r), x1 = Math.max(...r.poly.map((p) => p[0])), y1 = Math.max(...r.poly.map((p) => p[1])), pos = S.pos[r.id] || {};
    const geom = () => { const dpr = window.devicePixelRatio || 1, W = c.clientWidth * dpr, H = c.clientHeight * dpr, pad = 10 * dpr, k = Math.min((W - 2 * pad) / (x1 - x0 || 1), (H - 2 * pad) / (y1 - y0 || 1)); return { dpr, W, H, pad, k }; };
    const draw = () => {
      const { dpr, W, H, pad, k } = geom(), ctx = c.getContext('2d'), cs = getComputedStyle(host.root), ink = cs.getPropertyValue('--ink').trim() || '#222';
      c.width = W; c.height = H; ctx.clearRect(0, 0, W, H); ctx.strokeStyle = ink; ctx.lineWidth = Math.max(1, dpr);
      const X = (v) => pad + (v - x0) * k, Y = (v) => H - pad - (v - y0) * k;
      ctx.beginPath(); r.poly.forEach((p, i) => (i ? ctx.lineTo(X(p[0]), Y(p[1])) : ctx.moveTo(X(p[0]), Y(p[1])))); ctx.closePath(); ctx.stroke();
      const dot = (p, color, ch) => { if (!p) return; ctx.fillStyle = color; ctx.beginPath(); ctx.arc(X(p[0]), Y(p[1]), 6 * dpr, 0, 6.283); ctx.fill(); ctx.fillStyle = '#fff'; ctx.font = (9 * dpr) + 'px sans-serif'; ctx.textAlign = 'center'; ctx.fillText(ch, X(p[0]), Y(p[1]) + 3 * dpr); };
      if (pos.src && pos.lis) { ctx.setLineDash([4 * dpr, 4 * dpr]); ctx.beginPath(); ctx.moveTo(X(pos.src[0]), Y(pos.src[1])); ctx.lineTo(X(pos.lis[0]), Y(pos.lis[1])); ctx.stroke(); ctx.setLineDash([]); }
      dot(pos.src, '#d9822b', 'S'); dot(pos.lis, '#2a6fdb', 'L');
    };
    c.addEventListener('click', (e) => {
      if (!S.place) return;
      const b = c.getBoundingClientRect(), { dpr, H, pad, k } = geom(), px = (e.clientX - b.left) * dpr, py = (e.clientY - b.top) * dpr;
      const p = [x0 + (px - pad) / k, y0 + (H - pad - py) / k];
      S.pos[r.id] = { ...(S.pos[r.id] || {}), [S.place]: p.map(Math.round) }; S.place = ''; keep(); render();
    });
    setTimeout(draw, 0);
    const btn = (k, text) => el('button', { type: 'button', className: (S.place === k ? 'btn-plot' : 'btn-line') + ' btn-sm-cc', 'data-eg49-place': k, onClick: () => { S.place = S.place === k ? '' : k; render(); } }, text);
    const d = pos.src && pos.lis ? Math.hypot(pos.src[0] - pos.lis[0], pos.src[1] - pos.lis[1]) / 1000 : null;
    return el('div', { 'data-eg49-placer': '' }, el('p', { className: 'bc-h' }, t('eg49.place.title')), el('p', { className: 'bc-muted' }, t(S.place ? 'eg49.place.click' : 'eg49.place.hint')), c,
      el('div', { className: 'bc-find-row' }, btn('src', t('eg49.place.src')), btn('lis', t('eg49.place.lis')),
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-eg49-place-clear': '', onClick: () => { delete S.pos[r.id]; S.place = ''; keep(); render(); } }, t('eg49.place.clear'))),
      pos.src && pos.lis ? el('p', { 'data-eg49-placed': '' }, Q(t('eg49.place.dist', { d: f2(Math.max(0.3, d)) }))) : null);
  }
  function stopNow() { try { node?.stop(); } catch (e) { /* already stopped */ } node = null; }
  async function play(inRoom) {
    const r = last.find((x) => x.id === S.room);
    if (!r?.res.ok) { host.status(t('eg49.nores'), true); return; }
    const c = await audioCtx(), sr = c.sampleRate > 48000 ? 48000 : c.sampleRate, d = dry(sr), x = inRoom ? listen(d, makeIR(r, sr).ir) : d;
    const buf = c.createBuffer(1, x.length, sr);
    buf.copyToChannel(x, 0);
    stopNow();
    node = c.createBufferSource(); node.buffer = buf; node.connect(c.destination); node.start();
    host.status(t(inRoom ? 'eg49.playing.room' : 'eg49.playing.dry', { name: r.name }));
  }
  function saveIR(inRoom) {
    const r = last.find((x) => x.id === S.room);
    if (!r?.res.ok) return;
    const sr = 44100, ir = makeIR(r, sr), data = inRoom ? listen(dry(sr), ir.ir) : ir.ir;
    host.download((inRoom ? 'in-' : 'impulse-') + r.name.replace(/[^\w-]+/g, '_') + '.wav', wavBytes(data, sr), 'audio/wav');
  }

  // ISO 3382-1 measures of the computed response, beside a measured one (0.8 XE.3 S1)
  function measures(r) {
    const keys = ['t30', 't20', 'edt', 'c50', 'c80', 'd50'], fmt = (k, v) => (v == null ? '–' : k === 'd50' ? v.toFixed(2) : k.startsWith('c') ? v.toFixed(1) : v.toFixed(2));
    const calc = el('button', { type: 'button', className: 'btn-plot btn-sm-cc', 'data-eg49-measures': '', onClick: () => { try { S.pred = allBands(makeIR(r, 44100).ir, 44100); S.predRoom = r.id; } catch (e) { S.pred = null; } render(); } }, t('eg49.m.calc'));
    const file = el('input', { type: 'file', accept: '.wav,audio/wav', 'data-eg49-meas-file': '', 'aria-label': t('eg49.m.load') });
    file.addEventListener('change', async () => {
      const f = file.files?.[0];
      if (!f) return;
      try { const w = parseWav(new Uint8Array(await f.arrayBuffer())); S.meas = allBands(w.x, w.sr, { noise: 'auto' }); S.measName = f.name; render(); } catch (e) { host.status(t('eg49.m.bad'), true); }
    });
    const out = [el('p', { className: 'bc-h' }, t('eg49.m.title')), el('p', { className: 'bc-muted' }, t('eg49.m.intro')), el('div', { className: 'bc-find-row' }, calc), label(t('eg49.m.load'), file)];
    if (S.pred && S.predRoom === r.id) {
      const cmp = S.meas ? compare(S.pred, S.meas) : [], bad = new Set(cmp.filter((c) => !c.within).map((c) => c.key + c.f));
      const head = el('tr', {}, el('th', {}, ''), ...BANDS.map((b) => el('th', {}, b + ' Hz')));
      const rows = [];
      for (const k of keys) {
        rows.push(el('tr', { 'data-eg49-m': k + '-pred' }, el('th', {}, t('eg49.m.k.' + k) + ' ' + t('eg49.m.pred')), ...S.pred.bands.map((b) => el('td', {}, fmt(k, b[k])))));
        if (S.meas) {
          rows.push(el('tr', { 'data-eg49-m': k + '-meas' }, el('th', {}, t('eg49.m.k.' + k) + ' ' + t('eg49.m.meas')), ...S.meas.bands.map((b) => el('td', {}, fmt(k, b[k])))));
          rows.push(el('tr', { 'data-eg49-m': k + '-diff' }, el('th', {}, t('eg49.m.diff')), ...S.pred.bands.map((b, i) => { const d = S.pred.bands[i][k] != null && S.meas.bands[i][k] != null ? S.pred.bands[i][k] - S.meas.bands[i][k] : null; return el('td', {}, (d == null ? '–' : (d > 0 ? '+' : '') + fmt(k, d)) + (bad.has(k + b.f) ? ' ⚠' : '')); })));
        }
      }
      out.push(el('div', { style: 'overflow-x:auto' }, el('table', { className: 'bc-qto-table', 'data-eg49-mtable': '' }, el('thead', {}, head), el('tbody', {}, ...rows))));
    }
    out.push(el('p', { className: 'bc-muted' }, t('eg49.m.note')));
    return out;
  }
  // ISO 717 ratings and the mass law (0.8 XE.3 S3, first part)
  function insulation() {
    const ta = el('textarea', { className: 'bc-input', rows: '2', 'data-eg49-rvals': '', 'aria-label': t('eg49.i.vals'), value: S.rvals || '' });
    ta.addEventListener('change', () => { S.rvals = ta.value; });
    const kind = sel({ 'data-eg49-rkind': '' }, [['air', t('eg49.i.kind.air')], ['imp', t('eg49.i.kind.imp')]], S.rkind || 'air');
    kind.addEventListener('change', () => { S.rkind = kind.value; });
    const res = el('p', { 'data-eg49-rating': '' });
    const rate = el('button', { type: 'button', className: 'btn-plot btn-sm-cc', 'data-eg49-rate': '', onClick: () => {
      try {
        const v = ta.value.split(/[\s,;]+/).filter(Boolean).map(Number);
        if (kind.value === 'imp') { const x = impactRating(v); res.textContent = t('eg49.i.imp', { lnw: x.Lnw, ci: x.CI }); } else { const x = airborneRating(v); res.textContent = t('eg49.i.air', { rw: x.Rw, c: x.C, ctr: x.Ctr }); }
      } catch (e) { res.textContent = t('eg49.i.bad'); }
    } }, t('eg49.i.rate'));
    const mat = sel({ 'data-eg49-wall-mat': '' }, Object.keys(WALLS).map((k) => [k, t('eg49.i.mat.' + k)]), S.wmat || 'gypsum'), th = el('input', { className: 'bc-input', type: 'number', min: '1', step: '1', value: S.wh || '12.5', 'data-eg49-wall-h': '', 'aria-label': t('eg49.i.mass.h') });
    const ml = el('div', { 'data-eg49-mass': '' });
    const mass = () => {
      S.wmat = mat.value; S.wh = th.value;
      const h = num(th.value) / 1000;
      if (!(h > 0)) { ml.replaceChildren(); return; }
      const m = massLawBands({ ...WALLS[mat.value], h });
      ml.replaceChildren(el('p', {}, t('eg49.i.mass.fc', { fc: Math.round(m.fc), m: Math.round(m.m * 10) / 10 })),
        el('p', {}, m.bands.map((b) => b.f + ' Hz: ' + (b.R == null ? t('eg49.i.mass.none') : Math.round(b.R * 10) / 10 + ' dB')).join('; ')));
    };
    mat.addEventListener('change', mass); th.addEventListener('input', mass); mass();
    return [el('p', { className: 'bc-h' }, t('eg49.i.title')), el('p', { className: 'bc-muted' }, t('eg49.i.intro')), label(t('eg49.i.kind'), kind), label(t('eg49.i.vals'), ta), el('div', { className: 'bc-find-row' }, rate), res,
      el('p', { className: 'bc-h' }, t('eg49.i.mass.title')), label(t('eg49.i.mass.mat'), mat), label(t('eg49.i.mass.h'), th), ml, el('p', { className: 'bc-muted' }, t('eg49.i.mass.note'))];
  }

  // Uneven absorption and room modes of a box room (0.8 XE.3 S2 stat / S6 modes, ind_PART_4). Box rooms only; the person types the box, the finishes come from the list.
  function boxShape(r) {
    if (!S.bx) { const h = 2.7, a = r.volume_m3 / h; S.bx = String(Math.round(Math.sqrt(a * 1.4) * 10) / 10); S.by = String(Math.round(a / Math.sqrt(a * 1.4) * 10) / 10); S.bz = String(h); S.bf = S.bf || 'carpet'; S.bc = S.bc || 'ceiling-board'; S.bw = S.bw || 'plaster'; }
    const inp = (k, key) => { const i = el('input', { className: 'bc-input', value: S[k], 'data-eg49-box': k, 'aria-label': t(key) }); i.addEventListener('change', () => { S[k] = i.value; keep(); render(); }); return label(t(key), i); };
    const pick = (k, kind, key) => { const c = sel({ 'data-eg49-box-mat': k }, materialKeys(kind).map((m) => [m, t('ac.mat.' + m)]), S[k]); c.addEventListener('change', () => { S[k] = c.value; keep(); render(); }); return label(t(key), c); };
    const lx = num(S.bx), ly = num(S.by), lz = num(S.bz), out = [el('p', { className: 'bc-h' }, t('eg49.u.title')), el('p', { className: 'bc-muted' }, t('eg49.u.intro')),
      inp('bx', 'eg49.u.lx'), inp('by', 'eg49.u.ly'), inp('bz', 'eg49.u.lz'), pick('bf', 'floor', 'eg49.u.floor'), pick('bc', 'ceiling', 'eg49.u.ceil'), pick('bw', 'wall', 'eg49.u.wall')];
    if (!(lx > 0 && ly > 0 && lz > 0)) return out;
    const a = (k) => MATERIALS[S[k]].alpha, res = boxReverb({ lx, ly, lz, pairs: { floor: a('bf'), ceiling: a('bc'), west: a('bw'), east: a('bw'), south: a('bw'), north: a('bw') } }, { T: num(S.T), RH: num(S.RH) });
    if (!res.ok) return out;
    const head = el('tr', {}, el('th', {}, ''), ...BANDS.map((b) => el('th', {}, b + ' Hz')));
    out.push(el('div', { style: 'overflow-x:auto' }, el('table', { className: 'bc-qto-table', 'data-eg49-utable': '' }, el('thead', {}, head),
      el('tbody', {}, ...['sabine', 'eyring', 'fitzroy', 'arau'].map((k) => el('tr', { 'data-eg49-u': k }, el('th', {}, t('eg49.u.k.' + k)), ...res.bands.map((b) => el('td', {}, f2(b[k])))))))));
    if (res.notes.length) out.push(el('p', { className: 'bc-muted', 'data-eg49-u-uneven': '' }, t('eg49.u.uneven')));
    const mid = (res.bands[2].arau + res.bands[3].arau) / 2, fs = schroederFrequency(mid, res.V), modes = boxModes({ lx, ly, lz }, { fmax: Math.max(120, Math.ceil(fs)) });
    out.push(el('p', { className: 'bc-h' }, t('eg49.u.modes')), el('p', { 'data-eg49-schroeder': '' }, t('eg49.u.fs', { fs: Math.round(fs), t: f2(mid) })),
      el('p', { 'data-eg49-modes': '' }, modes.slice(0, 12).map((m) => m.n.join('') + ' ' + (Math.round(m.f * 10) / 10) + ' Hz').join('; ')),
      el('p', { className: 'bc-muted' }, t('eg49.u.modes.note', { gap: f2(modalGap(modes, 120)) })));
    return out;
  }

  function render() {
    const ed = host.editor();
    if (!ed) { box.replaceChildren(el('p', { className: 'bc-muted' }, t('eg49.nomodel'))); return; }
    const rooms = compute();
    if (!rooms.length) { box.replaceChildren(el('p', { className: 'bc-muted' }, t('eg49.norooms'))); post([]); return; }
    if (!rooms.find((r) => r.id === S.room)) S.room = rooms[0].id;
    const field = (k, text) => { const i = el('input', { className: 'bc-input', value: S[k], 'data-eg49-field': k, 'aria-label': text }); i.addEventListener('change', () => { S[k] = i.value; keep(); render(); }); return label(text, i); };
    const rs = sel({ 'data-eg49-select': '' }, rooms.map((r) => [r.id, r.levelName + ' · ' + r.name]), S.room);
    rs.addEventListener('change', () => { S.room = rs.value; render(); });
    const tgt = num(S.target) > 0 ? num(S.target) : null;
    post(rtProblems(rooms, { target: tgt, t }));
    const r = rooms.find((x) => x.id === S.room);
    const out = [el('p', { className: 'bc-muted' }, t('eg49.intro')), field('target', t('eg49.target')), field('T', t('eg49.temp')), field('RH', t('eg49.rh')),
      el('div', { style: 'overflow-x:auto' }, el('table', { className: 'bc-qto-table', 'data-eg49-rooms': '' }, el('thead', {}, el('tr', {}, ...[t('eg49.col.room'), t('eg49.col.vol'), t('eg49.col.mid'), t('eg49.col.vs')].map((h) => el('th', {}, h)))),
        el('tbody', {}, ...rooms.map((x) => el('tr', { 'data-eg49-row': x.id }, el('td', {}, x.levelName + ' · ' + x.name), el('td', {}, Q(String(x.volume_m3) + ' m³')), el('td', {}, x.res.ok ? f2(x.res.mid.T) + ' s' : '–'),
          el('td', {}, !x.res.ok || !tgt ? '' : x.res.mid.T > tgt ? '⚠ ' + t('eg49.over') : '✓')))))),
      label(t('eg49.pick'), rs), ...detail(r)];
    // listening
    const snd = sel({ 'data-eg49-sound': '' }, [['speech', t('eg49.snd.speech')], ['clap', t('eg49.snd.clap')], ['music', t('eg49.snd.music')], ...(S.dryFile ? [['file', t('eg49.snd.file', { name: S.dryName })]] : [])], S.sound);
    snd.addEventListener('change', () => { S.sound = snd.value; keep(); });
    const file = el('input', { type: 'file', accept: 'audio/*', 'data-eg49-file': '', 'aria-label': t('eg49.snd.load') });
    file.addEventListener('change', async () => {
      const f = file.files?.[0];
      if (!f) return;
      try {
        const c = await audioCtx(), buf = await c.decodeAudioData(await f.arrayBuffer());
        const m = new Float32Array(buf.length), chs = buf.numberOfChannels;
        for (let k = 0; k < chs; k++) { const d = buf.getChannelData(k); for (let i = 0; i < m.length; i++) m[i] += d[i] / chs; }
        S.dryFile = m.length > buf.sampleRate * 20 ? m.slice(0, buf.sampleRate * 20) : m; S.dryName = f.name; S.sound = 'file'; render();
      } catch (e) { host.status(t('eg49.snd.bad'), true); }
    });
    const btn = (attr, text, fn, cls = 'btn-line') => el('button', { type: 'button', className: cls + ' btn-sm-cc', ...attr, onClick: fn }, text);
    out.push(placer(r), el('p', { className: 'bc-h' }, t('eg49.listen')), label(t('eg49.sound'), snd), label(t('eg49.snd.load'), file), ...(S.pos[r.id]?.src && S.pos[r.id]?.lis ? [] : [field('dist', t('eg49.dist'))]),
      el('div', { className: 'bc-find-row' }, btn({ 'data-eg49-dry': '' }, t('eg49.play.dry'), () => play(false)), btn({ 'data-eg49-room-play': '' }, t('eg49.play.room'), () => play(true), 'btn-plot'), btn({ 'data-eg49-stop': '' }, t('eg49.stop'), stopNow)),
      el('div', { className: 'bc-find-row' }, btn({ 'data-eg49-save-ir': '' }, t('eg49.save.ir'), () => saveIR(false)), btn({ 'data-eg49-save-room': '' }, t('eg49.save.room'), () => saveIR(true))),
      el('p', { className: 'bc-muted' }, t('eg49.ir.model')), ...measures(r), ...boxShape(r), ...insulation());
    box.replaceChildren(...out.filter(Boolean));
  }
  window.addEventListener('bimcraft-units', () => { try { render(); } catch (e) { /* GH.3-A: the tab has nothing to show yet */ } });   // results follow the display unit
  return { render, rooms: () => last, play: (inRoom) => play(inRoom) };
}
