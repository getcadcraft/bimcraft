/* SPDX-License-Identifier: Apache-2.0 */
/**
 * verify-ui.js: the verification state in the page (0.10 booklet rows BK.64 and BK.49, session bk-r3-checks-10). A thin adapter over
 * verify-model.js (the record in the IFC) and ./modelaudit/verify.js (the rules, shared).
 *
 *   mountVerify({ modelUi, t, status, today, who }) → { decorate(container, ids), mark(state, fields, ids?), records(), fromScan(keys, o) }
 *
 * Where a person finds it:
 *   Properties › Verification [data-verify]: the state of the picked element(s) [data-verify-state], who [data-verify-by], when
 *     [data-verify-on], how [data-verify-method], a note [data-verify-note]; Mark as checked [data-verify-checked], Mark as
 *     field-verified (LOD 500) [data-verify-field], Mark as unverified [data-verify-un], Take the mark off [data-verify-clear]. One
 *     undo step for the whole pick. For doors and windows also the Lintel or header note [data-verify-lintel] (BK.20).
 *   The plan: an unverified wall, door, window or room is drawn with a dashed box and a "?"; a field-verified one with a tick
 *     (Audit › Show verification marks in the plan turns it off).
 *   Schedules › Verification: every element that carries a mark, with level, state, who, when, how and where it came from.
 *   Tools › Mark as checked [data-verify-mark] (command tools.markchecked, typed MARKCHECKED): the picked elements, today, your name.
 * Test hook: window.bimcraftVerify = { records(), mark(state, fields, ids), show(on) }.
 */
import { el } from './ui-util.js';
import { ModelWriter } from './model-write.js';
import { STATES, METHODS, isDay } from './modelaudit/verify.js';
import { readVerification, setVerificationOp, lintelNote, setLintelNoteOp, recordOf } from './verify-model.js';
import { setDrawingSource } from './asbuilt.js';

const KEY = 'bimcraft.verify';
export function mountVerify({ modelUi, t, status, today = () => new Date().toISOString().slice(0, 10), who = () => '' }) {
  let A = null;
  const T = (k, v) => t('verify.' + k, v);
  const R = { list: [], byId: new Map(), show: true };
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) { saved = {}; }
  R.show = saved.show !== false;
  const F = { by: String(saved.by || ''), on: '', method: METHODS.includes(saved.method) ? saved.method : 'tape', note: '' };
  const keep = () => { try { localStorage.setItem(KEY, JSON.stringify({ by: F.by, method: F.method, show: R.show })); } catch (e) { /* private window */ } };
  const W = () => (A.ed() ? new ModelWriter(A.ed().W, A.ed().api, A.ed().mid) : null);
  const pickedIds = () => { const k = A.kb(); return A.selectedKeys().map((x) => x - k).filter((id) => id > 0); };
  const stateText = (rec) => {
    if (!rec) return T('none');
    if (rec.state === 'unverified') return T('is.unverified', { source: T('source.' + (rec.source || 'drawing')) });
    if (rec.state === 'checked') return T('is.checked', { by: rec.by, on: rec.on });
    return T('is.field', { by: rec.by, on: rec.on, method: T('method.' + rec.method) });
  };

  function mark(state, fields = {}, idsIn = null) {
    const w = W(), ids = idsIn || pickedIds();
    if (!w || !ids.length) { status(T('err.pick'), true); return false; }
    const guids = ids.map((id) => w.guidOf(id)).filter(Boolean);
    const f = { by: (fields.by ?? F.by ?? '').trim() || who(), on: fields.on || F.on || today(), method: fields.method || F.method, note: fields.note ?? F.note, source: fields.source };
    let why = null;
    A.commit(setVerificationOp(guids, state, f), { label: T('undo'), verb: t('model.verb.changed'), select: A.selectedKeys(), onError: (e, text) => { why = e.key ? t(e.key) : text || e.message; } });
    if (why) { status(why, true); return false; }
    if (state && state !== 'unverified') { F.by = f.by; keep(); }
    status(state ? T('done.' + state, { n: guids.length }) : T('done.clear', { n: guids.length }));
    return true;
  }

  // ---------------------------------------------------------------------------------------------- Properties
  const last = { container: null, ids: [] };
  let userOpen = null;
  function decorate(container, ids) {
    last.container = container; last.ids = ids;
    container.querySelector('[data-verify]')?.remove();
    const w = W();
    if (!w || !ids || !ids.length) return;
    let recs;
    try { recs = ids.map((id) => recordOf(w, id)); } catch (e) { return; }
    const n = { none: 0, unverified: 0, checked: 0, 'field-verified': 0 };
    for (const r of recs) n[r ? r.state : 'none']++;
    const one = ids.length === 1 ? recs[0] : null;
    const stateLine = ids.length === 1 ? stateText(one) : T('many', { n: ids.length, unverified: n.unverified, checked: n.checked, field: n['field-verified'], none: n.none });
    const input = (attr, type, value, on, more = {}) => { const i = el('input', { type, className: 'bc-input', value, [attr]: '', 'aria-label': more.label || '', ...(more.placeholder ? { placeholder: more.placeholder } : {}) }); i.addEventListener('input', () => on(i.value)); return i; };
    const method = el('select', { className: 'bc-mb-select', 'data-verify-method': '', 'aria-label': T('method') }, ...METHODS.map((m) => el('option', { value: m, selected: m === F.method }, T('method.' + m))));
    method.addEventListener('change', () => { F.method = method.value; keep(); });
    const btn = (attr, text, fn, cls = 'btn-line') => el('button', { type: 'button', className: cls + ' btn-sm-cc', [attr]: '', onClick: fn }, text);
    const cls = A.host.model()?.classOf;
    const openings = cls && ids.every((id) => /^Ifc(Door|Window)/.test(cls.get(id) || ''));
    const rows = [
      el('dt', {}, T('state')), el('dd', { 'data-verify-state': one ? one.state : ids.length === 1 ? 'none' : 'many' }, stateLine, one?.note ? el('div', { className: 'bc-sub' }, one.note) : null),
      el('dt', {}, T('by')), el('dd', {}, input('data-verify-by', 'text', F.by || who(), (v) => { F.by = v; }, { label: T('by'), placeholder: T('by.hint') })),
      el('dt', {}, T('on')), el('dd', {}, input('data-verify-on', 'date', F.on || today(), (v) => { F.on = isDay(v) ? v : ''; }, { label: T('on') })),
      el('dt', {}, T('method')), el('dd', {}, method),
      el('dt', {}, T('note')), el('dd', {}, input('data-verify-note', 'text', F.note, (v) => { F.note = v; }, { label: T('note') })),
      el('dt', {}, ''), el('dd', { className: 'bc-lib-actions' },
        btn('data-verify-checked', T('mark.checked'), () => mark('checked')),
        btn('data-verify-field', T('mark.field'), () => mark('field-verified')),
        btn('data-verify-un', T('mark.unverified'), () => mark('unverified')),
        (n.none < ids.length ? btn('data-verify-clear', T('mark.clear'), () => mark('')) : null)),
    ];
    if (openings) {
      const cur = ids.map((id) => lintelNote(w, id)), same = cur.every((x) => x === cur[0]);
      const li = el('input', { type: 'text', className: 'bc-input', value: same ? cur[0] : '', 'data-verify-lintel': '', 'aria-label': T('lintel'), placeholder: same ? T('lintel.hint') : T('lintel.varies') });
      const go = () => {
        if (li.value === li.defaultValue) return;
        let why = null;
        A.commit(setLintelNoteOp(ids.map((id) => w.guidOf(id)).filter(Boolean), li.value), { label: T('lintel'), verb: t('model.verb.changed'), select: A.selectedKeys(), onError: (e, text) => { why = e.key ? t(e.key) : text || e.message; } });
        status(why || T('lintel.done'), !!why);
      };
      li.addEventListener('change', go);
      li.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); li.blur(); } });
      rows.push(el('dt', {}, T('lintel')), el('dd', {}, li));
    }
    // folded like Classification beside it; open by itself when the pick carries a mark, and as the person left it afterwards
    const block = el('details', { className: 'bc-set', 'data-verify': '', 'data-count': String(ids.length), open: userOpen ?? n.none < ids.length },
      el('summary', {}, T('title') + (n.none < ids.length && ids.length === 1 ? ': ' + T('state.' + one.state) : '')), el('dl', { className: 'bc-dl' }, ...rows), el('p', { className: 'bc-muted' }, T('about')));
    block.addEventListener('toggle', () => { userOpen = block.open; });
    const after = container.querySelector('[data-cls]') || container.querySelector('[data-ra]') || container.querySelector('[data-model-props]') || container.querySelector('.bc-prop-name, [data-pick-count]');
    if (after) after.after(block); else container.append(block);
  }

  // ---------------------------------------------------------------------------------------------- the plan and the schedule
  const levelName = (st) => A.S.data?.levels.find((l) => l.id === st)?.name || '';
  function schedule() {
    const cls = A.host.model()?.classOf;
    const name = (x) => ((cls?.get(x.id) || x.cls || '').replace(/^Ifc/, '') + (x.name ? ' ' + x.name : '')).trim();
    const rows = R.list.map((x) => [name(x), levelName(x.storey), T('state.' + x.record.state), x.record.by, x.record.on, x.record.method ? T('method.' + x.record.method) : '', x.record.source ? T('source.' + x.record.source) : '', x.record.note]);
    const c = { unverified: 0, checked: 0, 'field-verified': 0 };
    for (const x of R.list) c[x.record.state]++;
    return { title: T('sch.title'), head: [T('sch.element'), t('model.level'), T('state'), T('by'), T('on'), T('method'), T('source'), T('note')], rows, ids: R.list.map((x) => x.id),
      total: [t('model.sch.total'), '', T('sch.total', { unverified: c.unverified, checked: c.checked, field: c['field-verified'] }), '', '', '', '', ''], note: T('sch.note') };
  }
  const box = (a, b, half, grow = 60) => {
    const L = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1, u = [(b[0] - a[0]) / L, (b[1] - a[1]) / L], n = [-u[1], u[0]], h = half + grow;
    const P = [[a[0] - u[0] * grow + n[0] * h, a[1] - u[1] * grow + n[1] * h], [b[0] + u[0] * grow + n[0] * h, b[1] + u[1] * grow + n[1] * h], [b[0] + u[0] * grow - n[0] * h, b[1] + u[1] * grow - n[1] * h], [a[0] - u[0] * grow - n[0] * h, a[1] - u[1] * grow - n[1] * h]];
    return P.map((p, i) => [p[0], p[1], P[(i + 1) % 4][0], P[(i + 1) % 4][1]]);
  };
  function overlay(o) {
    if (!R.show || !R.byId.size || !A.S.data) return;
    const D = A.S.data, pv = A.pv(), h = pv ? Math.max(180, pv.pxToMm(13)) : 220;
    const sym = (rec, at, dashed) => {
      if (rec.state === 'checked') return;
      o.symbols.push({ lines: [], arcs: [], thin: [], dashed: rec.state === 'unverified' ? dashed : [], texts: [{ p: at, h, text: rec.state === 'unverified' ? '?' : '✓' }], verify: rec.state });
    };
    for (const x of D.walls) { const rec = R.byId.get(x.id); if (rec && x.storey === A.S.level) sym(rec, [(x.a[0] + x.b[0]) / 2, (x.a[1] + x.b[1]) / 2], box(x.a, x.b, x.t / 2)); }
    for (const op of D.openings) {
      const rec = R.byId.get(op.id), x = rec && D.walls.find((q) => q.id === op.wall);
      if (!x || x.storey !== A.S.level) continue;
      const L = Math.hypot(x.b[0] - x.a[0], x.b[1] - x.a[1]) || 1, u = [(x.b[0] - x.a[0]) / L, (x.b[1] - x.a[1]) / L];
      const p = [x.a[0] + u[0] * op.offset, x.a[1] + u[1] * op.offset], q = [p[0] + u[0] * op.width, p[1] + u[1] * op.width];
      sym(rec, [(p[0] + q[0]) / 2 - u[1] * (x.t / 2 + h), (p[1] + q[1]) / 2 + u[0] * (x.t / 2 + h)], box(p, q, x.t / 2, 120));
    }
    for (const sp of D.derived?.spaces || []) { const rec = R.byId.get(sp.id); if (rec && sp.storey === A.S.level && sp.seed) sym(rec, [sp.seed[0], sp.seed[1] - 3 * h], box([sp.seed[0] - h, sp.seed[1] - 3 * h], [sp.seed[0] + h, sp.seed[1] - 3 * h], h * 0.8, 0)); }
  }

  A = modelUi.extend({
    refresh() {
      const w = W();
      try { R.list = w ? readVerification(w) : []; } catch (e) { R.list = []; }
      R.byId = new Map(R.list.map((x) => [x.id, x.record]));
      const sel = A.root.querySelector('[data-msched-kind]'), opt = sel?.querySelector('option[value="verification"]');
      if (sel && R.list.length && !opt) sel.append(el('option', { value: 'verification', 'data-verify-sched': '' }, T('sch.title')));
      if (last.container?.isConnected && last.container.querySelector('[data-verify]')) decorate(last.container, last.ids);
    },
    overlay,
    schedules() { return R.list.length ? { verification: schedule() } : {}; },
    scheduleKeys(kind, i) { return kind === 'verification' && R.list[i] ? [A.kb() + R.list[i].id] : []; },
  });
  // BK.49: the handover package's as-built drawings are the drawing set as it is now (res-ui.js makes it; asbuilt.js asks for it)
  setDrawingSource(() => A.ask('setPdfBytes'));
  for (const b of A.root.querySelectorAll('[data-verify-mark]')) b.addEventListener('click', () => mark('checked', { on: today() }));
  const api = {
    decorate, mark, records: () => R.list,
    show(on) { R.show = !!on; keep(); A.root.dispatchEvent(new CustomEvent('bimcraft-verify-show')); try { modelUi.redrawOverlay(); } catch (e) { /* the plan is not up */ } },
    get shown() { return R.show; },
    /** BK.49: the elements a scan matched within tolerance (scan-progress-ui.js) become field-verified, method scan. keys = viewer keys. */
    fromScan(keys, { by = '', note = '' } = {}) { const k = A.kb(); return mark('field-verified', { by: by || F.by || who(), on: today(), method: 'scan', note }, keys.map((x) => x - k).filter((id) => id > 0)); },
    stateText,
  };
  if (typeof window !== 'undefined') window.bimcraftVerify = api;
  return api;
}
export { STATES };
