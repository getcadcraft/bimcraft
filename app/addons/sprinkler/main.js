/* SPDX-License-Identifier: Apache-2.0 */
/**
 * main.js — the Fire sprinklers add-on for BimCraft (0.8 EG.3, session `mep_PART_2`): heads on a grid by hazard class, the cross main and branch
 * lines that feed them, and the density/area hydraulic calculation, on add-on API 1.1 (`model.write`, `mep.placeRun`). Panel tab "Sprinklers",
 * commands sprinkler:layout · sprinkler:calc · sprinkler:place. Problems go to the shell's Problems when the app has `api.problems` (API 1.3).
 * A design aid, not an approval. The design criteria are the person's table (lib/hazard.js).
 */
import { setT, t, csv } from './lib/core.js';
import { DEFAULT_HAZARDS, DEFAULT_OPTIONS, HAZARD_LABEL, cleanHazards, hazardById } from './lib/hazard.js';
import { layoutRoom, buildNetwork } from './lib/layout.js';
import { design } from './lib/hydraulics.js';
import { layoutProblems, designProblems } from './lib/problems.js';
import { placeHeads } from './lib/place.js';
import { ids, val } from '../../ifc-util.js';

export function activate(api) {
  setT(api.t);
  const stored = (k, d) => { const v = api.storage.get(k); return v === undefined || v === null ? d : v; };
  const hazards = () => { const h = cleanHazards(stored('hazards', [])); return h.length ? h : DEFAULT_HAZARDS; };
  const S = { room: stored('room', t('room.default')), hazard: stored('hazard', 'ord1'), ceiling: stored('ceiling', 3000), k: stored('k', DEFAULT_OPTIONS.kFactor), level: '', ps: stored('ps', 5.5), pr: stored('pr', 4), qr: stored('qr', 3000), layout: null, net: null, result: null };
  const save = () => { for (const k of ['room', 'hazard', 'ceiling', 'k', 'ps', 'pr', 'qr']) api.storage.set(k, S[k]); };
  let src = null;
  try { if (api.problems && typeof api.problems.source === 'function') src = api.problems.source({ id: 'sprinklers', kind: 'engine', label: t('name') }); } catch { src = null; }

  const poly = () => String(S.room).split(/\n|;/).map((l) => l.trim().split(/[\s,]+/).map(Number)).filter((p) => p.length >= 2 && p.every(Number.isFinite)).map((p) => [p[0], p[1]]);
  const opts = () => ({ ...DEFAULT_OPTIONS, kFactor: Number(S.k) || DEFAULT_OPTIONS.kFactor, ceilingZ: Number(S.ceiling) || 3000 });
  const levels = () => { try { return api.model.read((w) => ids(w.api, w.mid, 'IFCBUILDINGSTOREY').map((id) => ({ id, guid: w.guidOf(id), name: val(w.api.GetLine(w.mid, id, false).Name) || w.guidOf(id) }))); } catch { return []; } };

  /** 0.8 EG.3: the rooms the model's walls enclose, to take the outline from (api.model.rooms, API 1.3): [{ i, name, area (m²), level (name) }]. */
  const roomList = () => { try { return typeof api.model.rooms === 'function' ? api.model.rooms() : []; } catch { return []; } };
  const area = (p) => Math.abs(p.reduce((a, q, i) => { const n = p[(i + 1) % p.length]; return a + q[0] * n[1] - n[0] * q[1]; }, 0)) / 2e6;
  const roomsInModel = () => { const lv = levels(); return roomList().map((r, i) => ({ i, name: r.name, area: area(r.poly), level: (lv.find((l) => l.id === r.storey) || {}).name || '' })); };
  /** Fill the outline (and the level) from room `i` of the model; the old layout is dropped, the next Lay out uses the room. */
  function useRoom(i) {
    const r = roomList()[i];
    if (!r || !Array.isArray(r.poly) || r.poly.length < 3) throw new Error(t('err.noroom'));
    S.room = r.poly.map((q) => Math.round(q[0]) + ', ' + Math.round(q[1])).join('\n');
    try { S.level = api.model.read((w) => w.guidOf(r.storey)) || S.level; } catch { /* the level stays what it was */ }
    S.layout = null; S.net = null; S.result = null;
    save();
    return r;
  }
  function doLayout() {
    const p = poly();
    if (p.length < 3) throw new Error(t('err.room'));
    const hz = hazardById(hazards(), S.hazard) || hazards()[0];
    S.layout = layoutRoom(p, hz, opts()); S.net = buildNetwork(S.layout, opts()); S.result = null;
    src?.set(layoutProblems(S.layout, hz));
    return S.layout;
  }
  function doCalc() {
    if (!S.layout) doLayout();
    const hz = hazardById(hazards(), S.hazard) || hazards()[0], o = opts();
    S.net = buildNetwork(S.layout, o);
    S.result = design(S.layout, S.net, hz, { ps: Number(S.ps), pr: Number(S.pr), qr: Number(S.qr) }, o);
    src?.set([...layoutProblems(S.layout, hz), ...designProblems(S.result, hz, o)]);
    return S.result;
  }
  async function doPlace() {
    if (!S.layout) throw new Error(t('err.norun'));
    if (typeof api.model.write !== 'function') throw new Error(t('err.write'));
    const hz = hazardById(hazards(), S.hazard) || hazards()[0], lv = S.level || levels()[0]?.guid;
    if (!lv) throw new Error(t('err.nolevel'));
    if (!S.result) doCalc();
    const sizes = S.result.sizes || {};
    await api.model.write(t('cmd.place.undo'), (w) => placeHeads(w, S.layout.heads, { storey: w.byGuid(lv), hazard: hz, k: Number(S.k), coverageM2: S.layout.coveragePerHead }));
    // pipes: the riser and cross main as one run, each branch line as one run, sized by the calculation
    let runs = 0;
    const net = S.net, node = (id) => net.nodes.get(id).p;
    const chain = (ids2) => ids2.map(node);
    const edgeBy = new Map(net.edges.map((e) => [e.a + '>' + e.b, e]));
    const main = [net.source, ...net.edges.filter((e) => e.kind === 'main' || e.kind === 'riser').map((e) => e.b)];
    const mainEdges = net.edges.filter((e) => e.kind === 'main' || e.kind === 'riser');
    const place = async (points, size) => { await api.mep.placeRun({ storey: lv, kind: 'pipe', system: 'fire', mat: 'steel', cls: '40', size, points, label: t('name') }); runs++; };
    await place(chain(main), biggest(mainEdges.map((e) => sizes[e.id])));
    for (const j of net.edges.filter((e) => e.kind === 'main' || e.kind === 'riser').map((e) => e.b)) {
      for (const first of net.edges.filter((e) => e.a === j && e.kind === 'branch')) {
        const pts = [j]; const es = [first]; let cur = first;
        while (cur) { pts.push(cur.b); const nxt = net.edges.find((e) => e.a === cur.b && e.kind === 'branch'); if (nxt) es.push(nxt); cur = nxt; }
        await place(chain(pts), biggest(es.map((e) => sizes[e.id])));
      }
    }
    void edgeBy;
    return { heads: S.layout.heads.length, runs };
  }
  const order = ['1/2', '3/4', '1', '1-1/4', '1-1/2', '2', '2-1/2', '3', '3-1/2', '4', '5', '6', '8'];
  const biggest = (list) => list.filter(Boolean).sort((a, b) => order.indexOf(b) - order.indexOf(a))[0] || '1';

  const fmt = (x, d = 2) => (Number.isFinite(x) ? String(Math.round(x * 10 ** d) / 10 ** d) : '—');
  const summary = () => {
    if (!S.layout) return '';
    const L = S.layout, a = t('result.layout', { n: L.heads.length, nx: L.nx, ny: L.ny, sx: Math.round(L.sx), sy: Math.round(L.sy), cover: fmt(L.coveragePerHead, 1) });
    const r = S.result;
    if (!r) return a;
    if (r.failed) return a;
    const b = r.availableBar == null ? t('result.calc.nosupply', { n: r.gov.heads.length, flow: Math.round(r.qTotalLmin), hose: Math.round(r.hoseLmin), need: fmt(r.requiredWithMarginBar) })
      : t('result.calc', { n: r.gov.heads.length, flow: Math.round(r.qTotalLmin), hose: Math.round(r.hoseLmin), need: fmt(r.requiredWithMarginBar), have: fmt(r.availableBar) });
    return a + '\n' + b;
  };
  const report = () => {
    if (!S.layout) return '';
    const rows = [['head', 'x_mm', 'y_mm', 'z_mm'], ...S.layout.heads.map((h) => [h.id, ...h.p.map((x) => Math.round(x))])];
    if (S.result && !S.result.failed) { rows.push([]); rows.push(['required_bar', fmt(S.result.requiredWithMarginBar)], ['available_bar', S.result.availableBar == null ? '' : fmt(S.result.availableBar)], ['flow_Lmin', Math.round(S.result.qTotalLmin)], ['hose_Lmin', Math.round(S.result.hoseLmin)], ['hazard', S.hazard]); }
    return csv(rows);
  };

  api.commands.add('layout', async () => { try { doLayout(); api.status(summary()); } catch (e) { api.status(e.message); } }, { label: t('cmd.layout') });
  api.commands.add('calc', async () => { try { doLayout(); doCalc(); api.status(summary().split('\n').pop()); } catch (e) { api.status(e.message); } }, { label: t('cmd.calc') });
  api.commands.add('place', async () => { try { const r = await doPlace(); api.status(t('result.placed', { n: r.heads, runs: r.runs })); } catch (e) { api.status(e.message); } }, { label: t('cmd.place') });

  api.ui.panelTab({ id: 'sprinkler', title: t('tab'), render: (pane) => render(pane) });
  function render(pane) {
    const d = pane.ownerDocument;
    const el = (tag, attrs = {}, ...kids) => {
      const n = d.createElement(tag);
      for (const [k, v] of Object.entries(attrs)) { if (k === 'class') n.className = v; else if (k === 'on') for (const [ev, fn] of Object.entries(v)) n.addEventListener(ev, fn); else if (v !== undefined && v !== false) n.setAttribute(k, v === true ? '' : String(v)); }
      n.append(...kids.flat().filter((x) => x !== null && x !== undefined && x !== false));
      return n;
    };
    const again = () => { pane.replaceChildren(); render(pane); };
    const say = el('pre', { class: 'sprk-say', style: 'white-space:pre-wrap;font-size:0.8rem;margin:0.5rem 0' }, summary());
    const run = (fn) => async () => { try { const r = await fn(); if (r) { say.textContent = r; } else say.textContent = summary(); } catch (e) { say.textContent = e.message; } };
    const field = (label, input) => el('label', { style: 'display:grid;gap:0.15rem;font-size:0.8rem;margin:0.35rem 0' }, el('span', {}, label), input);
    const num = (key, step) => { const i = el('input', { type: 'number', step: step || 'any', value: S[key], class: 'form-control form-control-sm' }); i.addEventListener('change', () => { S[key] = Number(i.value); save(); }); return i; };
    const room = el('textarea', { rows: 4, class: 'form-control form-control-sm' }, S.room); room.addEventListener('change', () => { S.room = room.value; save(); });
    const fromModel = roomsInModel();
    const pick = el('select', { class: 'form-select form-select-sm', 'data-spk-rooms': '' }, el('option', { value: '' }, fromModel.length ? t('room.pick') : t('room.none')),
      ...fromModel.map((r) => el('option', { value: String(r.i) }, (r.level ? r.level + ' — ' : '') + r.name + ' (' + fmt(r.area, 1) + ' m²)')));
    pick.addEventListener('change', () => { if (pick.value === '') return; try { useRoom(Number(pick.value)); again(); } catch (e) { say.textContent = e.message; } });
    const hz = el('select', { class: 'form-select form-select-sm' }, ...hazards().map((h) => el('option', { value: h.id, selected: h.id === S.hazard }, `${h.label} — ${h.density} mm/min over ${h.area} m²`)));
    hz.addEventListener('change', () => { S.hazard = hz.value; save(); });
    const lv = levels();
    const lvl = el('select', { class: 'form-select form-select-sm' }, ...lv.map((l) => el('option', { value: l.guid, selected: l.guid === S.level }, l.name)));
    lvl.addEventListener('change', () => { S.level = lvl.value; });
    const hasWrite = typeof api.model.write === 'function' && api.mep && typeof api.mep.placeRun === 'function';
    pane.append(el('div', { style: 'padding:0.5rem' },
      el('p', { style: 'font-size:0.8rem' }, t('intro')), el('p', { style: 'font-size:0.75rem;opacity:0.8' }, HAZARD_LABEL),
      field(t('level'), lvl), fromModel.length || typeof api.model.rooms === 'function' ? field(t('room.model'), pick) : null, field(t('room'), room), field(t('hazard'), hz), field(t('ceiling'), num('ceiling')), field(t('k'), num('k')),
      el('fieldset', { style: 'border:1px solid var(--line);padding:0.4rem;margin:0.4rem 0' }, el('legend', { style: 'font-size:0.8rem' }, t('supply')), field(t('supply.static'), num('ps')), field(t('supply.residual'), num('pr')), field(t('supply.flow'), num('qr'))),
      el('div', { style: 'display:flex;gap:0.4rem;flex-wrap:wrap' },
        el('button', { type: 'button', class: 'btn-line btn-sm-cc', on: { click: run(async () => { doLayout(); again(); }) } }, t('btn.layout')),
        el('button', { type: 'button', class: 'btn-line btn-sm-cc', on: { click: run(async () => { doCalc(); again(); }) } }, t('btn.calc')),
        hasWrite ? el('button', { type: 'button', class: 'btn-line btn-sm-cc', on: { click: run(async () => { const r = await doPlace(); return t('result.placed', { n: r.heads, runs: r.runs }); }) } }, t('btn.place')) : el('span', { style: 'font-size:0.75rem' }, t('err.write'))),
      say));
  }
  return { csv: report, layout: doLayout, calc: doCalc, rooms: roomsInModel, useRoom };
}
