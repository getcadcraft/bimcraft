/* SPDX-License-Identifier: Apache-2.0 */
/**
 * finishes-ui.js — the Room finishes dialog (0.10 BK.29; session bk-r3-schedules-10): the finish types of the project, what
 * covers each room's floor, walls and ceiling, its skirting, and the zones (a band of wall, a patch of floor or ceiling) that take
 * another finish. One Save = one undo step (finishes-model.js saveFinishesOp); the quantities follow in the four finish schedules.
 * Lengths are typed in the project's units; areas in m² (metric) or ft².
 *
 *   openFinishesDialog({ A, t, status, writer(), selectedGuids() }) → the <dialog>
 */
import { el } from './ui-util.js';
import { fmtLen, parseLen, isMetric } from './model-units.js';
import { cleanFinishes, FINISH_KINDS, SURFACES } from './quantities/finishes.js';
import { readFinishes, saveFinishesOp, roomInputs } from './finishes-model.js';

const AREA = (metric) => (metric ? 1e6 : 92903.04);

export function openFinishesDialog({ A, t, status, writer, selectedGuids }) {
  const w = writer(), snap = A.S.data;
  if (!w || !snap) return null;
  const U = A.units(), metric = isMetric(U);
  const loops = new Map(), loopsFor = (id) => { if (!loops.has(id)) { let L = null; try { L = A.loopsOf(id); } catch (e) { L = null; } loops.set(id, L); } return loops.get(id); };
  const rooms = roomInputs(snap, loopsFor);
  const doc = JSON.parse(JSON.stringify(readFinishes(w)));
  const len = (mm) => (mm > 0 ? fmtLen(mm, U) : mm === 0 ? '0' : '');
  const S = { finishes: doc.finishes.map((f) => ({ ...f })), rooms: { ...doc.rooms }, zones: doc.zones.map((z) => ({ ...z })), seq: 1 };
  const dlg = el('dialog', { className: 'bc-dialog bc-fin-dlg', 'aria-label': t('fin.title'), 'data-fin-dialog': '', style: 'width:min(1100px,96vw);max-width:1100px' });
  const alert = el('p', { role: 'alert', className: 'bc-fin-alert', 'data-fin-alert': '', hidden: true });
  const input = (value, attrs = {}) => { const i = el('input', { type: 'text', className: 'bc-input', value: value ?? '', autocomplete: 'off', ...attrs }); i.addEventListener('keydown', (e) => e.stopPropagation()); return i; };
  const pick = (options, value, attrs = {}) => { const s = el('select', { className: 'bc-mb-select', ...attrs }, options.map(([v, text]) => el('option', { value: v }, text))); s.value = value ?? ''; return s; };
  const x = (label, fn) => el('button', { type: 'button', className: 'btn-line btn-sm-cc bc-row-x', 'aria-label': label, 'data-bs-toggle': 'tooltip', title: label, onClick: fn }, el('i', { className: 'bi bi-x', 'aria-hidden': 'true' }));
  const newId = (prefix, list) => { let id; do { id = prefix + (S.seq++); } while (list.some((e) => e.id === id)); return id; };
  const finishOptions = () => [['', t('fin.none')], ...S.finishes.map((f) => [f.id, f.name || f.id])];
  const roomLabel = (r) => (r.number ? r.number + ' ' : '') + (r.name || '');
  // typed lengths are kept as text until Save, so a half-typed value is never lost
  const L = (obj, key, attrs) => { const i = input(obj['_' + key] ?? len(obj[key]), { size: 7, ...attrs }); i.addEventListener('input', () => { obj['_' + key] = i.value; }); return i; };
  const N = (obj, key, attrs) => { const i = input(obj['_' + key] ?? (obj[key] ?? ''), { size: 5, inputmode: 'decimal', ...attrs }); i.addEventListener('input', () => { obj['_' + key] = i.value; }); return i; };
  const body = el('div', { className: 'bc-fin-body', style: 'max-height:70vh;overflow:auto' });

  function render() {
    const types = el('table', { className: 'bc-fin-table', 'data-fin-types': '' },
      el('thead', {}, el('tr', {}, [t('fin.f.name'), t('fin.h.kind'), t('fin.f.thickness'), t('fin.f.tilelength'), t('fin.f.tilewidth'), t('fin.f.joint'), t('fin.f.waste'), t('fin.h.substrate'), t('fin.f.subthickness'), ''].map((h) => el('th', {}, h)))),
      el('tbody', {}, S.finishes.map((f, i) => {
        f.tile = f.tile || {}; f.substrate = f.substrate || {};
        const name = input(f.name, { 'data-fin-name': f.id, maxLength: 80, 'aria-label': t('fin.f.name') });
        name.addEventListener('input', () => { f.name = name.value; for (const o of body.querySelectorAll('option')) if (o.value === f.id) o.textContent = f.name || f.id; });   // the lists below follow the name as it is typed (no redraw: the box keeps the caret)
        const kind = pick(FINISH_KINDS.map((k) => [k, t('fin.kind.' + k)]), f.kind, { 'data-fin-kind': f.id, 'aria-label': t('fin.h.kind') });
        kind.addEventListener('change', () => { f.kind = kind.value; render(); });
        const sub = input(f.substrate.name, { 'data-fin-sub': f.id, maxLength: 80, size: 12, 'aria-label': t('fin.h.substrate') });
        sub.addEventListener('input', () => { f.substrate.name = sub.value; });
        const tile = f.kind === 'tile';
        return el('tr', { 'data-fin-type': f.id }, el('td', {}, name), el('td', {}, kind), el('td', {}, L(f, 'thickness', { 'data-fin-th': f.id, 'aria-label': t('fin.f.thickness') })),
          el('td', {}, tile ? L(f.tile, 'length', { 'data-fin-tl': f.id, 'aria-label': t('fin.f.tilelength') }) : ''), el('td', {}, tile ? L(f.tile, 'width', { 'data-fin-tw': f.id, 'aria-label': t('fin.f.tilewidth') }) : ''),
          el('td', {}, tile ? L(f.tile, 'joint', { 'data-fin-tj': f.id, 'aria-label': t('fin.f.joint') }) : ''), el('td', {}, tile ? N(f.tile, 'waste', { 'data-fin-waste': f.id, 'aria-label': t('fin.f.waste') }) : ''),
          el('td', {}, sub), el('td', {}, L(f.substrate, 'thickness', { 'data-fin-subth': f.id, 'aria-label': t('fin.f.subthickness') })),
          el('td', {}, x(t('fin.remove.type'), () => { S.finishes.splice(i, 1); for (const r of Object.values(S.rooms)) for (const s of ['floor', 'walls', 'ceiling']) if (r[s] === f.id) delete r[s]; S.zones = S.zones.filter((z) => z.finish !== f.id); render(); })));
      })));
    const roomRows = rooms.map((r) => {
      const set = S.rooms[r.key] || (S.rooms[r.key] = {});
      set.skirting = set.skirting || {};
      const sel = (s) => { const p = pick(finishOptions(), set[s] || '', { ['data-fin-room-' + s]: r.key, 'aria-label': t('fin.h.' + (s === 'walls' ? 'walls' : s)) }); p.addEventListener('change', () => { if (p.value) set[s] = p.value; else delete set[s]; }); return p; };
      const sk = input(set.skirting.name, { 'data-fin-room-skirting': r.key, size: 12, maxLength: 80, 'aria-label': t('fin.h.skirting') });
      sk.addEventListener('input', () => { set.skirting.name = sk.value; });
      return el('tr', { 'data-fin-room': r.key }, el('td', {}, roomLabel(r)), el('td', {}, sel('floor')), el('td', {}, sel('walls')), el('td', {}, sel('ceiling')), el('td', {}, sk), el('td', {}, L(set.skirting, 'height', { 'data-fin-room-skh': r.key, 'aria-label': t('fin.f.skheight') })));
    });
    const roomsTable = el('table', { className: 'bc-fin-table', 'data-fin-rooms': '' }, el('thead', {}, el('tr', {}, [t('model.room.longname'), t('fin.h.floor'), t('fin.h.walls'), t('fin.h.ceiling'), t('fin.h.skirting'), t('fin.f.skheight')].map((h) => el('th', {}, h)))), el('tbody', {}, roomRows));
    const zones = el('table', { className: 'bc-fin-table', 'data-fin-zones': '' },
      el('thead', {}, el('tr', {}, [t('fin.f.name'), t('model.room.longname'), t('fin.h.surface'), t('qty.sch.finish'), t('fin.h.from'), t('fin.h.to'), t(metric ? 'fin.f.area.m2' : 'fin.f.area.ft2'), t('fin.f.walls'), ''].map((h) => el('th', {}, h)))),
      el('tbody', {}, S.zones.map((z, i) => {
        const name = input(z.name, { 'data-fin-zone-name': z.id, maxLength: 80, 'aria-label': t('fin.f.name') });
        name.addEventListener('input', () => { z.name = name.value; });
        const room = pick(rooms.map((r) => [r.key, roomLabel(r)]), z.room, { 'data-fin-zone-room': z.id, 'aria-label': t('model.room.longname') });
        room.addEventListener('change', () => { z.room = room.value; delete z.walls; render(); });
        const surf = pick(SURFACES.map((s) => [s, t('fin.surface.' + s)]), z.surface, { 'data-fin-zone-surface': z.id, 'aria-label': t('fin.h.surface') });
        surf.addEventListener('change', () => { z.surface = surf.value; render(); });
        const fin = pick(finishOptions().slice(1), z.finish, { 'data-fin-zone-finish': z.id, 'aria-label': t('qty.sch.finish') });
        fin.addEventListener('change', () => { z.finish = fin.value; });
        const wall = z.surface === 'wall';
        const area = input(z._area ?? (z.area > 0 ? String(Math.round(z.area / AREA(metric) * 1000) / 1000) : ''), { size: 6, inputmode: 'decimal', 'data-fin-zone-area': z.id, 'aria-label': t(metric ? 'fin.f.area.m2' : 'fin.f.area.ft2') });
        area.addEventListener('input', () => { z._area = area.value; });
        const use = el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-fin-zone-walls': z.id, onClick: () => {
          const mine = new Set((rooms.find((r) => r.key === z.room)?.edges || []).map((e) => e.wall).filter(Boolean)), got = selectedGuids().filter((g) => mine.has(g));
          if (got.length) z.walls = got; else { delete z.walls; say(t('fin.walls.nonepicked')); }
          render();
        } }, z.walls?.length ? t('fin.walls.n', { n: z.walls.length }) : t('fin.walls.all'));
        return el('tr', { 'data-fin-zone': z.id }, el('td', {}, name), el('td', {}, room), el('td', {}, surf), el('td', {}, fin), el('td', {}, wall ? L(z, 'from', { 'data-fin-zone-from': z.id, 'aria-label': t('fin.h.from') }) : ''),
          el('td', {}, wall ? L(z, 'to', { 'data-fin-zone-to': z.id, 'aria-label': t('fin.h.to') }) : ''), el('td', {}, wall ? '' : area), el('td', {}, wall ? use : ''), el('td', {}, x(t('fin.remove.zone'), () => { S.zones.splice(i, 1); render(); })));
      })));
    body.replaceChildren(...[
      el('h3', {}, t('fin.sec.types')), el('p', { className: 'bc-muted' }, t('fin.sec.types.hint')), types,
      el('p', {}, el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-fin-add-type': '', onClick: () => { S.finishes.push({ id: newId('f', S.finishes), name: '', kind: 'tile', thickness: 0, tile: {}, substrate: {} }); render(); } }, t('fin.add.type'))),
      el('h3', {}, t('fin.sec.rooms')), rooms.length ? roomsTable : el('p', { className: 'bc-muted' }, t('fin.rooms.none')),
      el('h3', {}, t('fin.sec.zones')), el('p', { className: 'bc-muted' }, t('fin.sec.zones.hint')), S.zones.length ? zones : null,
      el('p', {}, el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-fin-add-zone': '', disabled: !rooms.length || !S.finishes.length, onClick: () => { S.zones.push({ id: newId('z', S.zones), name: '', room: rooms[0].key, surface: 'wall', finish: S.finishes[0].id, from: 0 }); render(); } }, t('fin.add.zone')))].filter(Boolean));
  }
  const say = (text) => { alert.textContent = text; alert.hidden = !text; };
  /** What was typed → the document; the first value that cannot be read is said and nothing is saved. */
  function collect() {
    let bad = null;
    const mm = (obj, key, what, { zero = false, need = false } = {}) => {
      const raw = obj['_' + key];
      if (raw === undefined) return obj[key];
      const s = String(raw).trim();
      if (s === '') { if (need) bad = bad || t('fin.err.length', { what }); return undefined; }
      const v = parseLen(s, U);
      if (!Number.isFinite(v) || v < 0 || (!zero && v === 0)) { bad = bad || t('fin.err.length', { what }); return undefined; }
      return v;
    };
    const num = (obj, key, what) => { const raw = obj['_' + key]; if (raw === undefined) return obj[key]; const s = String(raw).trim().replace(',', '.'); if (s === '') return undefined; const v = Number(s); if (!Number.isFinite(v) || v < 0) { bad = bad || t('fin.err.number', { what }); return undefined; } return v; };
    const out = { format: 'cadcraft-finishes', version: 1, finishes: [], rooms: {}, zones: [] };
    for (const f of S.finishes) {
      const name = String(f.name || '').trim() || '?';
      const o = { id: f.id, name: String(f.name || '').trim(), kind: f.kind, thickness: mm(f, 'thickness', name + ': ' + t('fin.f.thickness'), { zero: true }) ?? 0 };
      if (f.code) o.code = f.code;
      if (f.kind === 'tile') o.tile = { length: mm(f.tile, 'length', name + ': ' + t('fin.f.tilelength'), { need: true }), width: mm(f.tile, 'width', name + ': ' + t('fin.f.tilewidth'), { need: true }), joint: mm(f.tile, 'joint', name + ': ' + t('fin.f.joint'), { zero: true }) ?? 0, waste: num(f.tile, 'waste', name + ': ' + t('fin.f.waste')) ?? 0 };
      const sn = String(f.substrate?.name || '').trim(), sth = mm(f.substrate || {}, 'thickness', name + ': ' + t('fin.f.subthickness'));
      if (sn || sth) o.substrate = { name: sn, thickness: sth };
      out.finishes.push(o);
    }
    for (const [k, set] of Object.entries(S.rooms)) {
      const o = {};
      for (const s of ['floor', 'walls', 'ceiling']) if (set[s]) o[s] = set[s];
      const sn = String(set.skirting?.name || '').trim(), sh = mm(set.skirting || {}, 'height', t('fin.f.skheight'));
      if (sn || sh) o.skirting = { name: sn, height: sh };
      if (Object.keys(o).length) out.rooms[k] = o;
    }
    for (const z of S.zones) {
      const o = { id: z.id, name: String(z.name || '').trim(), room: z.room, surface: z.surface, finish: z.finish };
      if (z.surface === 'wall') { o.from = mm(z, 'from', o.name + ': ' + t('fin.h.from'), { zero: true }) ?? 0; o.to = mm(z, 'to', o.name + ': ' + t('fin.h.to'), { need: true }); if (z.walls?.length) o.walls = z.walls; }
      else { const raw = z._area; if (raw === undefined) o.area = z.area; else { const v = Number(String(raw).trim().replace(',', '.')); if (!Number.isFinite(v) || v <= 0) bad = bad || t('fin.err.number', { what: o.name + ': ' + t(metric ? 'fin.f.area.m2' : 'fin.f.area.ft2') }); else o.area = v * AREA(metric); } }
      out.zones.push(o);
    }
    return { out, bad };
  }
  function save() {
    say('');
    const { out, bad } = collect();
    if (bad) { say(bad); return; }
    const chk = cleanFinishes(out);
    if (chk.errors.length) { say(t('fin.err.' + chk.errors[0].code, { at: chk.errors[0].at })); return; }
    try { A.commit(saveFinishesOp(out), { label: t('fin.undo') }); }
    catch (e) { say(e?.key ? t(e.key, e.fill || {}) : String(e?.message || e)); return; }
    status(t('fin.saved', { n: Object.keys(chk.doc.rooms).length }));
    dlg.close();
  }
  render();
  dlg.append(el('h2', {}, t('fin.title')), el('p', { className: 'bc-muted' }, t('fin.lede')), body, alert,
    el('div', { className: 'bc-dialog-actions' }, el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-fin-cancel': '', onClick: () => dlg.close() }, t('fin.cancel')), ' ',
      el('button', { type: 'button', className: 'btn-plot btn-sm-cc', 'data-fin-save': '', onClick: save }, t('fin.save'))));
  dlg.addEventListener('close', () => dlg.remove());
  dlg.addEventListener('keydown', (e) => e.stopPropagation());
  A.host.root.append(dlg);
  dlg.showModal();
  return dlg;
}
