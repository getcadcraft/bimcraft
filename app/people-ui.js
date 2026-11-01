/* SPDX-License-Identifier: Apache-2.0 */
/**
 * people-ui.js — People in the building (0.8 EG.48, session bim-sim_PART_2): a <details> under Room program in the left panel (ui.inc data-eg48).
 * The cores are people-model.js / people-sim.js (DOM-free, tools/bimcraft-test/people-test.mjs). Evacuation or a normal day's arrivals, the
 * result in numbers, the queues at each door and stair, a plan that plays the run, and the findings as shared Problems. Nothing here changes
 * the model.
 *
 *   mountPeople(host) → { render(), run(), last() } | null
 *   host = { root, editor(), status(text, isError), download(name, data, type), problems?: window.ccProblems }
 */
import { el } from './ui-util.js';
import { getDisplayUnits, localizeQuantities } from './model-units.js';   // GH.3-A: results in the picked unit
const Q = (s) => localizeQuantities(s, getDisplayUnits());
import { t } from './i18n.js';
import { runPeople, roomCounts } from './people-model.js';
import { mountPeople3d } from './people-3d.js';   // 0.8 EG.48 (bim-sim_PART_3): the walkers in the 3D view
import { STATES } from './people-sim.js';

const num = (v) => { const n = Number(String(v).replace(',', '.')); return Number.isFinite(n) ? n : NaN; };
const label = (text, ctl) => el('label', { className: 'bc-4d-grouplabel' }, el('span', {}, text), ctl);
const SAVE = 'bimcraft.people';
const fmt = (v, d = 1) => (v === null || v === undefined || !Number.isFinite(v) ? '–' : String(Math.round(v * 10 ** d) / 10 ** d));

export function mountPeople(host) {
  const box = host.root?.querySelector('[data-eg48]');
  if (!box) return null;
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(SAVE) || '{}') || {}; } catch (e) { saved = {}; }
  const S = { scenario: saved.scenario || 'evacuate', m2: saved.m2 || '10', pre0: saved.pre0 || '10', pre1: saved.pre1 || '60', win: saved.win || '600', limit: saved.limit || '', avail: saved.avail || '', seed: saved.seed || '1',
    shut: new Set(), loads: saved.loads || {}, in3d: !!saved.in3d, run: null, level: '', frame: 0, playing: false, speed: 8 };
  const keep = () => { try { localStorage.setItem(SAVE, JSON.stringify({ scenario: S.scenario, m2: S.m2, pre0: S.pre0, pre1: S.pre1, win: S.win, limit: S.limit, avail: S.avail, seed: S.seed, loads: S.loads, in3d: S.in3d })); } catch (e) { /* private window */ } };
  let src = null, timer = 0, canvas = null;
  const post = (list) => { try { src ||= (host.problems || window.ccProblems)?.source?.({ id: 'bimcraft.people', kind: 'engine', label: t('eg48.title') }); src?.set(list); } catch { /* the shell's Problems are not loaded */ } };

  // a count the person typed for a room (a number, 0 allowed); a blank box leaves the room to the factor
  const loadsMap = () => { const m = {}; for (const [k, v] of Object.entries(S.loads)) if (String(v).trim() !== '' && Number.isFinite(num(v)) && num(v) >= 0) m[k] = Math.floor(num(v)); return m; };
  const p3 = host.viewer ? mountPeople3d({ viewer: host.viewer, place: host.place }) : null;
  function options() {
    const o = { scenario: S.scenario, m2PerPerson: num(S.m2) > 0 ? num(S.m2) : 10, seed: Math.max(1, Math.floor(num(S.seed)) || 1), blocked: [...S.shut], loads: loadsMap() };
    if (S.scenario === 'evacuate') { const a = Math.max(0, num(S.pre0) || 0), b = Math.max(a, num(S.pre1) || a); o.premove = [a, b]; } else o.window = Math.max(1, num(S.win) || 600);
    if (num(S.limit) > 0) o.travelLimit = num(S.limit);
    if (num(S.avail) > 0) o.availableTime = num(S.avail);
    return o;
  }
  function run() {
    const ed = host.editor();
    if (!ed) { host.status(t('eg48.nomodel'), true); return null; }
    let r;
    try { r = runPeople(ed, { ...options(), t, guidOf: (id) => id }); } catch (err) { host.status(String(err?.message || err), true); return null; }
    if (!r.scene.openings.length || !r.scene.rooms.length) { S.run = null; host.status(t('eg48.empty'), true); render(); return null; }
    S.run = r; S.frame = 0; S.playing = false;
    if (!r.levels.find((l) => l.guid === S.level)) S.level = r.levels[0]?.guid || '';
    post(r.problems);
    host.status(t(S.scenario === 'evacuate' ? 'eg48.done.evac' : S.scenario === 'exchange' ? 'eg48.done.exchange' : 'eg48.done.arrive', { n: r.out.results.finished, all: r.out.results.people, s: fmt(r.out.results.totalTime) }));
    render();
    return r;
  }
  const nameOf = (r) => {
    const names = new Map();
    let d = 0, s = 0;
    for (const o of r.scene.openings) {
      const lv = r.scene.rooms[o.end[0].room]?.levelName || '';
      names.set(o.id, o.kind === 'stair' ? t('eg48.stair', { n: ++s }) : t(o.exit ? 'eg48.exit' : 'eg48.door', { n: ++d, level: lv }));
    }
    return names;
  };

  function table(head, rows, attr) {
    return el('div', { style: 'overflow-x:auto' }, el('table', { className: 'bc-qto-table', ...attr }, el('thead', {}, el('tr', {}, ...head.map((h) => el('th', {}, h)))), el('tbody', {}, ...rows.map((r) => el('tr', {}, ...r.map((c) => el('td', {}, c)))))));
  }

  function summary(r) {
    const R = r.out.results, names = nameOf(r), rows = [];
    rows.push(el('p', { 'data-eg48-sum': '' }, t('eg48.sum', { all: R.people, n: R.finished, total: fmt(R.totalTime), t50: fmt(R.t50), t90: fmt(R.t90) })));
    if (R.stuck) rows.push(el('p', { className: 'bc-note', 'data-eg48-stuck': '' }, t('eg48.stuck', { n: R.stuck })));
    if (R.unfinished) rows.push(el('p', { className: 'bc-note' }, t('eg48.unfinished', { n: R.unfinished })));
    rows.push(el('p', { className: 'bc-muted' }, Q(t('eg48.walk', { mean: fmt(R.meanWalked), max: fmt(R.maxWalked), wait: fmt(R.meanWait) }))));
    if (R.bottleneck) rows.push(el('p', { 'data-eg48-bottleneck': '' }, t('eg48.bottleneck', { name: names.get(R.bottleneck) || R.bottleneck })));
    const open = R.openings.filter((x) => x.passed > 0 || S.shut.has(x.id));
    if (open.length) {
      rows.push(table([t('eg48.col.opening'), t('eg48.col.passed'), t('eg48.col.queue'), t('eg48.col.wait'), t('eg48.col.cap'), t('eg48.col.shut')],
        open.map((x) => {
          const cb = el('input', { type: 'checkbox', 'data-eg48-shut': x.id, 'aria-label': t('eg48.shut') }); cb.checked = S.shut.has(x.id);
          cb.addEventListener('change', () => { if (cb.checked) S.shut.add(x.id); else S.shut.delete(x.id); });
          return [names.get(x.id) || x.id, String(x.passed), String(x.peakQueue), fmt(x.maxWait) + ' s', fmt(x.capacity, 2) + '/s', cb];
        }), { 'data-eg48-openings': '' }));
      rows.push(el('p', { className: 'bc-muted' }, t('eg48.shuthint')));
    }
    const far = new Map(r.travel.map((x) => [x.id, x]));
    const rr = R.rooms.filter((x) => x.people > 0 || (far.get(x.id) && far.get(x.id).reachable));
    if (rr.length) {
      rows.push(table([t('eg48.col.room'), t('eg48.col.people'), t('eg48.col.clear'), t('eg48.col.walked'), t('eg48.col.far')],
        rr.map((x) => [x.name, String(x.people), x.clearT === null ? '–' : fmt(x.clearT) + ' s', Q(fmt(x.maxWalked) + ' m'), far.get(x.id)?.reachable ? Q(fmt(far.get(x.id).maxM) + ' m') : t('eg48.noroute')]), { 'data-eg48-rooms': '' }));
    }
    for (const p of r.problems.slice(0, 12)) rows.push(el('p', { className: 'bc-note', 'data-eg48-problem': p.code }, (p.severity === 'error' ? '⛔ ' : p.severity === 'warning' ? '⚠ ' : 'ℹ ') + Q(p.text)));
    rows.push(el('p', { className: 'bc-muted' }, t('eg48.model')));
    return rows;
  }

  // ---- the plan that plays the run
  function colors() {
    const cs = getComputedStyle(host.root);
    const get = (v, d) => cs.getPropertyValue(v).trim() || d;
    return { ink: get('--ink', '#222'), grid: get('--grid', '#ccc'), walk: get('--action', '#2a6fdb'), queue: get('--layer-orange', '#d9822b'), stair: get('--layer-violet', '#7a4fd6'), wait: get('--ink-2', '#888'), door: get('--layer-green', '#2a9d5c') };
  }
  function draw() {
    const r = S.run;
    if (!canvas || !r) return;
    const rooms = r.scene.rooms.map((x, i) => ({ x, i })).filter((q) => q.x.level === S.level);
    const c = canvas, ctx = c.getContext('2d'), W = c.width = c.clientWidth * (window.devicePixelRatio || 1), H = c.height = c.clientHeight * (window.devicePixelRatio || 1), col = colors();
    ctx.clearRect(0, 0, W, H);
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    for (const { x } of rooms) for (const p of x.poly) { x0 = Math.min(x0, p[0]); y0 = Math.min(y0, p[1]); x1 = Math.max(x1, p[0]); y1 = Math.max(y1, p[1]); }
    if (!isFinite(x0)) return;
    const pad = 12 * (window.devicePixelRatio || 1), k = Math.min((W - 2 * pad) / (x1 - x0 || 1), (H - 2 * pad) / (y1 - y0 || 1));
    const X = (v) => pad + (v - x0) * k, Y = (v) => H - pad - (v - y0) * k;
    ctx.lineWidth = Math.max(1, (window.devicePixelRatio || 1));
    ctx.strokeStyle = col.ink;
    for (const { x } of rooms) { ctx.beginPath(); x.poly.forEach((p, i) => (i ? ctx.lineTo(X(p[0]), Y(p[1])) : ctx.moveTo(X(p[0]), Y(p[1])))); ctx.closePath(); ctx.stroke(); }
    ctx.fillStyle = col.door;
    for (const o of r.scene.openings) for (const e of o.end) { const rm = r.scene.rooms[e.room]; if (rm && rm.level === S.level) { ctx.fillRect(X(e.p[0]) - 3, Y(e.p[1]) - 3, 6, 6); break; } }
    const f = r.out.frames[Math.min(S.frame, r.out.frames.length - 1)];
    if (!f) return;
    const on = new Set(rooms.map((q) => q.i));
    const rad = Math.max(2, 0.25 * k * 1000 * 0.5 + 1.5);
    for (let i = 0; i < f.x.length; i++) {
      const st = f.st[i];
      if (st === STATES.done || st === STATES.pending) continue;
      const rmi = f.room[i];
      if (rmi >= 0 && !on.has(rmi)) continue;
      if (rmi < 0 && st !== STATES.stair) continue;
      ctx.fillStyle = st === STATES.queue ? col.queue : st === STATES.stair ? col.stair : st === STATES.wait ? col.wait : col.walk;
      ctx.beginPath(); ctx.arc(X(f.x[i]), Y(f.y[i]), rad, 0, 6.283); ctx.fill();
    }
  }
  function draw3d() {
    if (!p3) return;
    const r = S.run;
    if (!S.in3d || !r) { if (p3.shown()) p3.hide(); return; }
    const f = r.out.frames[Math.min(S.frame, r.out.frames.length - 1)];
    try { p3.show(f, f ? f.x.length : 0); } catch (e) { /* the 3D view is not ready */ }
  }
  function playback(r) {
    const frames = r.out.frames, last = Math.max(0, frames.length - 1);
    const lv = el('select', { className: 'select-cc', 'data-eg48-level': '' }, r.levels.map((l) => el('option', { value: l.guid }, l.name)));
    lv.value = S.level;
    lv.addEventListener('change', () => { S.level = lv.value; draw(); });
    canvas = el('canvas', { className: 'bc-people-plan', 'data-eg48-plan': '', role: 'img', 'aria-label': t('eg48.plan.alt'), style: 'width:100%;height:16rem;border:1px solid var(--grid)' });
    const slider = el('input', { type: 'range', min: 0, max: last, value: S.frame, 'data-eg48-time': '', 'aria-label': t('eg48.time') });
    const clock = el('span', { className: 'bc-muted', 'data-eg48-clock': '' }, '');
    const tick = () => { clock.textContent = fmt(frames[Math.min(S.frame, last)]?.t || 0) + ' s'; slider.value = S.frame; draw(); draw3d(); };
    slider.addEventListener('input', () => { S.frame = Number(slider.value); tick(); });
    const play = el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-eg48-play': '' }, t('eg48.play'));
    const stop = () => { S.playing = false; clearInterval(timer); play.textContent = t('eg48.play'); };
    play.addEventListener('click', () => {
      if (S.playing) { stop(); return; }
      if (S.frame >= last) S.frame = 0;
      S.playing = true; play.textContent = t('eg48.pause');
      timer = setInterval(() => { S.frame = Math.min(last, S.frame + 1); tick(); if (S.frame >= last) stop(); }, 1000 / Math.max(1, S.speed));
    });
    const legend = el('p', { className: 'bc-muted' }, t('eg48.legend'));
    setTimeout(tick, 0);
    return el('div', { 'data-eg48-playback': '' }, label(t('eg48.level'), lv), canvas, el('div', { className: 'bc-find-row' }, play, slider, clock), legend);
  }

  function csv() {
    const r = S.run;
    if (!r) return;
    // i18n-ignore-start — the CSV's column headings are text written into a file
    const names = nameOf(r), q = (v) => '"' + String(v).replace(/"/g, '""') + '"', rows = [['kind', 'name', 'passed', 'peak queue', 'longest wait s', 'capacity per s']];
    for (const x of r.out.results.openings) rows.push([x.kind, names.get(x.id) || x.id, x.passed, x.peakQueue, x.maxWait, x.capacity]);
    rows.push([], ['room', 'people', 'all out s', 'longest walked m', 'farthest from an exit m']);
    const far = new Map(r.travel.map((x) => [x.id, x]));
    for (const x of r.out.results.rooms) rows.push([x.name, x.people, x.clearT ?? '', x.maxWalked, far.get(x.id)?.maxM ?? '']);
    // i18n-ignore-end
    host.download('people-' + S.scenario + '.csv', rows.map((a) => a.map(q).join(',')).join('\n'), 'text/csv');
  }

  function render() {
    clearInterval(timer);
    const ed = host.editor();
    if (!ed) { box.replaceChildren(el('p', { className: 'bc-muted' }, t('eg48.nomodel'))); return; }
    const sc = el('select', { className: 'select-cc', 'data-eg48-scenario': '' }, [['evacuate', t('eg48.sc.evac')], ['arrive', t('eg48.sc.arrive')], ['exchange', t('eg48.sc.exchange')]].map(([v, l]) => el('option', { value: v }, l)));
    sc.value = S.scenario;
    sc.addEventListener('change', () => { S.scenario = sc.value; S.run = null; keep(); render(); });
    const field = (k, text) => { const i = el('input', { className: 'bc-input', value: S[k], 'data-eg48-field': k, 'aria-label': text }); i.addEventListener('input', () => { S[k] = i.value; keep(); }); return label(text, i); };
    const counts = (() => {
      let list = [];
      try { list = roomCounts(ed, { m2PerPerson: num(S.m2) > 0 ? num(S.m2) : 10, loads: loadsMap() }); } catch (e) { list = []; }
      if (!list.length) return null;
      const det = el('details', { 'data-eg48-counts-box': '', open: S.countsOpen ? '' : null }, el('summary', {}, t('eg48.counts', { n: list.length })),
        el('p', { className: 'bc-muted' }, t('eg48.counts.hint')),
        table([t('eg48.col.room'), t('eg48.col.level'), t('eg48.col.area'), t('eg48.col.count')], list.map((x) => {
          const i = el('input', { className: 'bc-input', type: 'number', min: '0', step: '1', value: S.loads[x.id] ?? '', placeholder: String(x.auto), 'data-eg48-count': x.id, 'aria-label': t('eg48.count.for', { room: x.name }) });
          i.addEventListener('input', () => { if (i.value === '') delete S.loads[x.id]; else S.loads[x.id] = i.value; keep(); });
          return [x.name, x.levelName, fmt(x.area_m2) + ' m²', i];
        }), { 'data-eg48-counts': '' }));
      det.addEventListener('toggle', () => { S.countsOpen = det.open; });
      return det;
    })();
    const rows = [el('p', { className: 'bc-muted' }, t('eg48.intro')), label(t('eg48.scenario'), sc), field('m2', t('eg48.m2')), counts,
      ...(S.scenario === 'evacuate' ? [field('pre0', t('eg48.pre0')), field('pre1', t('eg48.pre1'))] : [field('win', t('eg48.win'))]),
      field('limit', t('eg48.limit')), field('avail', t('eg48.avail')), field('seed', t('eg48.seed')),
      ...(p3 ? [(() => { const cb = el('input', { type: 'checkbox', 'data-eg48-3d': '' }); cb.checked = S.in3d; cb.addEventListener('change', () => { S.in3d = cb.checked; keep(); draw3d(); }); return el('label', { className: 'bc-4d-grouplabel' }, cb, el('span', {}, t('eg48.in3d'))); })()] : []),
      el('div', { className: 'bc-find-row' }, el('button', { type: 'button', className: 'btn-plot btn-sm-cc', 'data-eg48-run': '', onClick: () => run() }, t('eg48.run')),
        S.run ? el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-eg48-save': '', onClick: () => csv() }, t('eg48.save')) : null)];
    if (S.run) rows.push(...summary(S.run), playback(S.run));
    box.replaceChildren(...rows.filter(Boolean));
  }
  window.addEventListener('bimcraft-units', () => { try { render(); } catch (e) { /* GH.3-A: the tab has nothing to show yet */ } });   // results follow the display unit
  return { render, run, last: () => S.run, shown3d: () => !!p3?.shown(), hide3d: () => p3?.hide(), set3d: (on) => { S.in3d = !!on; draw3d(); }, setShut: (ids) => { S.shut = new Set(ids); } };
}
