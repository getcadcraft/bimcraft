/* SPDX-License-Identifier: Apache-2.0 */
/**
 * mep/equip-ui.js — MEP equipment on the plan and the Connections check (0.7 LC.9 items 2–3, session `mep-07`), through
 * model-ui.js `extend()`; mep-ui.js mounts it.
 *   Equipment  [data-mtool="equip"]  pick a kind and type its sizes in the bar ([data-eq-kind], [data-eq-fields], [data-eq-z],
 *              [data-eq-tag]); its footprint follows the pointer, R turns it 90°, a click places it (one undo step). Generic
 *              shapes sized by typed values, no maker's data: "a drafting and coordination aid, sized by an engineer".
 *   On the plan: each piece's footprint, its ports as small circles (an open port drawn in the warning colour); pick it to see
 *   and change its sizes, place, turn and tag in Properties; Delete removes it (runs fixed to it stay, the check lists them).
 *   Check connections  [data-mep-check]  the list ([data-mep-issues]): open ports and run ends, size, kind and system
 *              mismatches, runs with no source, ends fixed to a port that is gone; a line selects what it names.
 * Pipe and Duct (mep-ui.js) snap to these ports: portSnap(p, kind, tol) below.
 */
import { EQUIPMENT, EQUIPMENT_KINDS, equipmentDefaults, equipmentValues, buildEquipment, portsAt, readEquipment, placeEquipment, changeEquipment, removeEquipment, npsOd } from './equipment.js';
import { checkConnections } from './connections.js';
import { readPorts } from './ports.js';
import { PIPE_SYSTEMS, DUCT_SYSTEMS, systemLabel } from '../mep-model.js';
import { STEEL } from './tables.js';
import { ModelWriter } from '../model-write.js';
import { fmtLen, parseLen } from '../model-units.js';
import { el } from '../ui-util.js';
import { ACR_MM } from './tables-acr.js';   // 0.8 SU.888 (sx-mep): refrigerant ports are ACR tube, named by OD

const D2R = Math.PI / 180;

export function mountEquipment(modelUi) {
  const Q = { eqs: [], free: new Set(), kind: 'pump', values: {}, z: 0, tag: '', rot: 0, hover: null, issues: null };
  Q.values = equipmentDefaults(Q.kind);
  let A = null;
  const t = (...a) => A.t(...a);
  const W = () => new ModelWriter(A.ed().W, A.ed().api, A.ed().mid);
  const L = (mm) => fmtLen(mm, A.units());
  const levelGuid = () => A.S.data.levels.find((l) => l.id === A.S.level)?.guid;
  const kindName = (k) => t('mep.eq.kind.' + k);
  const portName = (n) => { const k = 'mep.eq.port.' + n, s = t(k); return s === k ? n : s; };

  function read() {
    Q.eqs = []; Q.free = new Set();
    if (!A.ed()) return;
    try {
      const w = W();
      Q.eqs = readEquipment(w).map((e) => ({ ...e, ports: portsAt(e), built: buildEquipment(e.kind, e.values).built }));
      for (const p of readPorts(w)) if (p.role === 'equipment' && !p.connectedTo) Q.free.add(p.owner + '#' + p.portName);
    } catch (e) { console.error(e); Q.eqs = []; }
  }
  const here = () => Q.eqs.filter((e) => e.storey === A.S.level);
  const turn = (q, rot, x, y) => { const a = rot * D2R, c = Math.cos(a), s = Math.sin(a); return [x + q[0] * c - q[1] * s, y + q[0] * s + q[1] * c]; };
  /** A footprint's plan lines and circles at a place (for the plan and the ghost). */
  function outline(built, x, y, rot) {
    const lines = [], arcs = [];
    for (const e of built.plan) {
      if (e.type === 'circle') { arcs.push({ c: turn([e.x, e.y], rot, x, y), r: e.r, a0: 0, a1: Math.PI * 2 }); continue; }
      const P = e.pts.map((q) => turn(q, rot, x, y));
      for (let i = 0; i + 1 < P.length + (e.closed ? 1 : 0); i++) { const a = P[i], b = P[(i + 1) % P.length]; lines.push([a[0], a[1], b[0], b[1]]); }
    }
    return { lines, arcs };
  }

  /** The nearest port of this kind (pipe | duct) on the level within tol of p: { eq, port } or null. Used by mep-ui.js. */
  function portSnap(p, kind, tol) {
    let best = null;
    for (const e of here()) for (const q of e.ports) {
      if (kind && q.kind !== kind) continue;
      const d = Math.hypot(q.at[0] - p[0], q.at[1] - p[1]);
      if (d <= tol && (!best || d < best.d)) best = { d, eq: e, port: q };
    }
    return best;
  }

  function scene(sc) {
    const k = A.kb();
    for (const e of here()) {
      const key = k + e.id, o = outline(e.built, e.x, e.y, e.rot);
      const sym = { key, lines: o.lines, thin: [], dashed: [], arcs: o.arcs, color: '--ink' };
      const xs = o.lines.flatMap((l) => [l[0], l[2]]).concat(o.arcs.flatMap((a) => [a.c[0] - a.r, a.c[0] + a.r])), ys = o.lines.flatMap((l) => [l[1], l[3]]).concat(o.arcs.flatMap((a) => [a.c[1] - a.r, a.c[1] + a.r]));
      if (xs.length) { const x0 = Math.min(...xs), x1 = Math.max(...xs), y0 = Math.min(...ys), y1 = Math.max(...ys); sym.poly = [[x0, y0], [x1, y0], [x1, y1], [x0, y1]]; sym.box = [x0, y0, x1, y1]; }
      sc.symbols.push(sym);
      for (const q of e.ports) {
        const open = Q.free.has(e.id + '#' + q.name), r = Math.max(30, Math.min(120, (q.size || 50) / 2));
        sc.symbols.push({ key, lines: [], thin: [[q.at[0], q.at[1], q.at[0] + q.axis[0] * r * 1.8, q.at[1] + q.axis[1] * r * 1.8]], dashed: [], arcs: [{ c: [q.at[0], q.at[1]], r, a0: 0, a1: Math.PI * 2 }], color: open ? '--layer-orange' : '--ink-2' });
      }
      (sc.rooms ||= []).push({ key, label: [e.tag ? e.tag : kindName(e.kind)], at: [e.x, e.y] });
    }
  }

  // ---- the option row ----
  function bindRow() {
    const q = (s) => A.root.querySelector(s);
    const kSel = q('[data-eq-kind]');
    if (!kSel) return;
    if (!kSel.dataset.bound) {
      kSel.dataset.bound = '1';
      kSel.replaceChildren(...EQUIPMENT_KINDS.map((k) => el('option', { value: k }, kindName(k))));
      kSel.addEventListener('change', () => { Q.kind = kSel.value; Q.values = equipmentDefaults(Q.kind); Q.tag = ''; Q.z = ['diffuser', 'grille'].includes(Q.kind) ? 2700 : 0; bindRow(); A.drawOverlay(); });
      const z = q('[data-eq-z]');
      z?.addEventListener('change', () => { const mm = parseLen(z.value, A.units()); if (Number.isFinite(mm)) Q.z = mm; else A.host.status(t('model.err.length'), true); bindRow(); });
      const tag = q('[data-eq-tag]');
      tag?.addEventListener('change', () => { Q.tag = tag.value.trim().slice(0, 40); });
    }
    if (document.activeElement !== kSel) kSel.value = Q.kind;
    const box = q('[data-eq-fields]');
    if (box && box.dataset.kind !== Q.kind) {
      box.dataset.kind = Q.kind;
      box.replaceChildren(...EQUIPMENT[Q.kind].fields.map(([key, type]) => {
        const label = t('mep.eq.f.' + key.toLowerCase());
        let input;
        if (type === 'len') {
          input = el('input', { type: 'text', className: 'bc-input bc-num', size: 5, value: L(Q.values[key]), 'data-eq-f': key, 'aria-label': label });
          input.addEventListener('change', () => { const mm = parseLen(input.value, A.units()); if (Number.isFinite(mm) && mm >= 10) Q.values[key] = mm; else A.host.status(t('model.err.length'), true); input.value = L(Q.values[key]); A.drawOverlay(); });
        } else {
          input = el('select', { className: 'bc-mb-select', 'data-eq-f': key, 'aria-label': label }, ...optionsFor(type).map(([v, l]) => el('option', { value: v }, l)));
          input.value = Q.values[key];
          input.addEventListener('change', () => { Q.values[key] = input.value; A.drawOverlay(); });
        }
        return el('label', {}, el('span', {}, label), ' ', input);
      }));
    }
    const set = (sel, v) => { const i = q(sel); if (i && document.activeElement !== i) i.value = v; };
    set('[data-eq-z]', L(Q.z)); set('[data-eq-tag]', Q.tag);
  }
  function optionsFor(type) {
    if (type === 'nps') return Object.keys(STEEL).map((s) => [s, A.units() === 'mm' ? 'DN' + STEEL[s][3] : s + '"']);   // i18n-ignore: size marks
    if (type === 'sys:pipe') return Object.keys(PIPE_SYSTEMS).map((k) => [k, systemLabel('pipe', k)]);
    if (type === 'sys:duct') return Object.keys(DUCT_SYSTEMS).map((k) => [k, systemLabel('duct', k)]);
    if (type.startsWith('choice:')) return type.slice(7).split(',').map((c) => [c, t('mep.eq.c.' + c)]);
    return [];
  }
  /** What the bar would place now, or null with the reason on the status line. */
  function ghost() {
    try { return buildEquipment(Q.kind, Q.values).built; } catch (e) { return null; }
  }
  function place(p) {
    let vals;
    try { vals = equipmentValues(Q.kind, Q.values); } catch (e) { A.host.status(t(e.key || 'mep.eq.err.value', { what: t('mep.eq.f.' + String(e.fill?.what || '').toLowerCase()) }), true); return; }
    try { buildEquipment(Q.kind, vals); } catch (e) { A.host.status(t(e.key || 'mep.eq.err.fit'), true); return; }
    const name = kindName(Q.kind);
    A.commit(placeEquipment({ storey: levelGuid(), kind: Q.kind, values: vals, x: p[0], y: p[1], z: Q.z, rot: Q.rot, tag: Q.tag, name }), { label: name, verb: t('model.verb.placed') });
    // the next one gets the next number when the tag ends in one (AHU-1 → AHU-2)
    const m = /^(.*?)(\d+)$/.exec(Q.tag);
    if (m) Q.tag = m[1] + (Number(m[2]) + 1);
    bindRow();
  }

  // ---- Properties ----
  function props(items, kit) {
    if (items.length !== 1) return null;
    const e = Q.eqs.find((x) => x.guid === items[0].guid);
    if (!e) return null;
    const meta = { label: kindName(e.kind), verb: t('model.verb.changed'), reselect: () => { read(); const x = Q.eqs.find((y) => y.guid === e.guid); return x ? [A.kb() + x.id] : []; } };
    const run = (ch) => A.commit(changeEquipment(e.guid, ch), meta);
    for (const [key, type] of EQUIPMENT[e.kind].fields) {
      const label = t('mep.eq.f.' + key.toLowerCase());
      if (type === 'len') kit.field(label, kit.lenInput(e.values[key], 'data-mp-eq-' + key, (mm) => run({ values: { [key]: mm } }), { min: 10 }));
      else kit.field(label, kit.select(optionsFor(type), e.values[key], 'data-mp-eq-' + key, (v) => run({ values: { [key]: v } })));
    }
    const tag = el('input', { type: 'text', className: 'bc-input', value: e.tag, 'data-mp-eqtag': '', size: 10 });
    tag.addEventListener('change', () => run({ tag: tag.value.trim().slice(0, 40) }));
    kit.field(t('mep.eq.tag'), tag);
    kit.field('X', kit.lenInput(e.x, 'data-mp-eqx', (mm) => run({ x: mm }), { any: true }));   // i18n-ignore: axis letter
    kit.field('Y', kit.lenInput(e.y, 'data-mp-eqy', (mm) => run({ y: mm }), { any: true }));   // i18n-ignore: axis letter
    kit.field(t('mep.z'), kit.lenInput(e.z, 'data-mp-eqz', (mm) => run({ z: mm }), { any: true }));
    kit.field(t('mep.eq.rot'), kit.button(t('mep.eq.turn'), 'data-mp-eqturn', () => run({ rot: ((e.rot || 0) + 90) % 360 })), el('span', { className: 'bc-sub' }, Math.round(e.rot || 0) + '°'));
    for (const q of e.ports) {
      const open = Q.free.has(e.id + '#' + q.name);
      const size = q.kind === 'pipe' && (q.system === 'refl' || q.system === 'refg') && ACR_MM[q.nominal] ? 'Ø' + ACR_MM[q.nominal] + ' (' + q.nominal + '")' : q.kind === 'pipe' ? (A.units() === 'mm' ? 'DN' + (STEEL[q.nominal]?.[3] ?? '') : q.nominal + '"') : q.shape === 'round' ? 'Ø' + L(q.size) : L(q.size) + ' × ' + L(q.h);   // i18n-ignore: size marks (0.8 SU.888 sx-mep: + the ACR mark)
      kit.rows.push(el('dt', {}, portName(q.name)), el('dd', { className: open ? 'bc-input-err' : 'bc-muted', 'data-mp-eqport': q.name },
        t(open ? 'mep.eq.port.open' : 'mep.eq.port.joined', { size, sys: systemLabel(q.kind, q.system), dir: t('mep.eq.dir.' + q.direction) })));
    }
    kit.rows.push(el('dt', {}, ''), el('dd', { className: 'bc-sub' }, t('mep.eq.generic')));
    return { title: (e.tag ? e.tag + ' ' : '') + kindName(e.kind) };
  }

  // ---- the Connections check ----
  function check() {
    if (!A.ed()) return;
    const res = checkConnections(W());
    Q.issues = res;
    showIssues();
  }
  function issueText(i) {
    const f = { ...i.fill };
    if (f.kind && EQUIPMENT[f.kind]) { f.kind = kindName(f.kind); f.name = i.fill.tag ? f.kind + ' ' + i.fill.tag : f.kind; }
    else if (f.kind === 'pipe' || f.kind === 'duct') f.kind = t(f.kind === 'pipe' ? 'mep.run.pipe' : 'mep.run.duct');
    if (i.code === 'system') { const k = i.fill.kind || (PIPE_SYSTEMS[f.a] ? 'pipe' : 'duct'); f.a = systemLabel(k, f.a); f.b = systemLabel(k, f.b); }
    if (i.code === 'kind') { f.a = t('mep.kind.' + f.a); f.b = t('mep.kind.' + f.b); }
    if (f.system) f.system = systemLabel(i.fill.kind === 'duct' ? 'duct' : 'pipe', f.system);
    if (f.port) f.port = portName(f.port);
    if (f.end) f.end = t('mep.chk.end.' + f.end);
    return t(i.key, f);
  }
  function showIssues() {
    const box = A.root.querySelector('[data-mep-issues]');
    if (!box) return;
    const res = Q.issues;
    if (!res) { box.hidden = true; return; }
    const levelName = (st) => A.S.data.levels.find((l) => l.id === st)?.name || '';
    const list = el('ol', { className: 'bc-mep-issues' }, ...res.issues.slice(0, 200).map((i) => {
      const b = el('button', { type: 'button', className: 'btn-link-cc', 'data-mep-issue': i.code }, issueText(i));
      b.addEventListener('click', () => { if (i.storey && i.storey !== A.S.level) A.host.status(t('mep.chk.onlevel', { level: levelName(i.storey) })); A.host.select((i.ids || []).filter((x) => x != null).map((x) => A.kb() + x)); });
      return el('li', { className: i.level === 'error' ? 'bc-input-err' : '' }, b);
    }));
    const close = el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-mep-issues-close': '' }, t('mep.chk.close'));
    close.addEventListener('click', () => { Q.issues = null; showIssues(); });
    box.replaceChildren(el('span', { className: 'bc-sub', 'data-mep-issues-sum': '' }, res.issues.length ? t('mep.chk.sum', { e: res.counts.error, w: res.counts.warn, c: res.connections }) : t('mep.chk.none', { c: res.connections })), list, close, el('span', { className: 'bc-sub' }, t('mep.chk.aid')));
    box.hidden = false;
  }

  A = modelUi.extend({
    tools: ['equip'],
    hint: () => 'mep.hint.equip',
    typed: () => false,
    classes: /^Ifc(UnitaryEquipment|Fan|Pump|Boiler|AirTerminalBox|AirTerminal|Tank|EnergyConversionDevice|FlowMovingDevice|FlowStorageDevice|FlowTerminal)$/,
    move(p, e) { if (A.S.tool === 'equip') Q.hover = A.snapFrom(p, e, null).p; },
    click(p, e) { if (A.S.tool === 'equip') place(A.snapFrom(p, e, null).p); },
    key(e, low) { if (A.S.tool === 'equip' && low === 'r') { Q.rot = (Q.rot + 90) % 360; A.drawOverlay(); return true; } return false; },
    escape() { return false; },
    toolChanged() { Q.hover = null; bindRow(); },
    refresh() { read(); bindRow(); if (Q.issues) check(); },
    ownKeys(set, k) { for (const e of Q.eqs) set.add(k + e.id); },
    snapCtx(ctx) { ctx.points = [...(ctx.points || []), ...here().flatMap((e) => e.ports.map((q) => [q.at[0], q.at[1]]))]; },
    scene,
    overlay(o) {
      if (A.S.tool !== 'equip' || !Q.hover) return;
      const b = ghost();
      if (!b) { o.hud = { p: Q.hover, text: t('mep.eq.err.fit') }; return; }
      const g = outline(b, Q.hover[0], Q.hover[1], Q.rot);
      o.lines.push(...g.lines);
      for (const a of g.arcs) for (let i = 0; i < 24; i++) { const a0 = 2 * Math.PI * i / 24, a1 = 2 * Math.PI * (i + 1) / 24; o.lines.push([a.c[0] + a.r * Math.cos(a0), a.c[1] + a.r * Math.sin(a0), a.c[0] + a.r * Math.cos(a1), a.c[1] + a.r * Math.sin(a1)]); }
      for (const q of b.ports) o.points.push(turn(q.at, Q.rot, Q.hover[0], Q.hover[1]));
      o.hud = { p: Q.hover, text: kindName(Q.kind) + '\n' + t('mep.hud.z', { z: L(Q.z) }) + ' · ' + Math.round(Q.rot) + '°' };
    },
    pick(key) { const e = Q.eqs.find((x) => A.kb() + x.id === key); return e ? { kind: 'mepeq', guid: e.guid, label: kindName(e.kind) } : null; },
    props,
    remove(items) { return removeEquipment([...new Set(items.map((x) => x.guid))]); },
  });
  const btn = A.root.querySelector('[data-mep-check]');
  if (btn && !btn.dataset.bound) { btn.dataset.bound = '1'; btn.addEventListener('click', () => { const m = btn.closest('details'); if (m) m.open = false; check(); }); }
  read(); bindRow();
  const api = { state: Q, portSnap, check, read, npsOd };
  if (typeof window !== 'undefined') window.bimcraftMepEq = { ...api, api: A };   // for tests
  return api;
}
