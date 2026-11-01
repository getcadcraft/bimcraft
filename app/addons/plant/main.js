/* SPDX-License-Identifier: Apache-2.0 */
/**
 * main.js — the Plant add-on for BimCraft (0.7 LC.5 step 2, session plant-design): pipe specs, isometrics, process equipment
 * with nozzles and a factory layout check, on BimCraft's add-on API 1.0, and 1.1 where the app has it (docs/ADDONS-SPEC.md §5.7).
 *
 *   Properties    a "Pipe spec" section for a selected pipe run: the spec its material and class name, whether its size and
 *                 valves are allowed, its bends and branches (lib/spec.js)
 *   Export        "Isometric of the selected pipe runs" (SVG, DXF), "Process equipment" (an IFC4 file with nozzle ports)
 *   Panel tab     Plant: the equipment table (type, tag, place), the specs, the isometric, the layout check
 *   Commands      plant:spec-check · plant:iso-svg · plant:iso-dxf · plant:equipment-ifc · plant:layout-check
 *
 * What needs BimCraft to WRITE into the open model — placing equipment in it (`api.model.write`, nozzles as `CadCraft_Port` through
 * `api.mep.addPorts`), drawing a found route (`api.mep.placeRun`) — needs add-on API 1.1 (session mep-07). Until the app has it those
 * say so; nothing here edits the model. 0.8 (mep-08): the isometric numbers its spools from `api.mep.spools()` and the layout check
 * also reads equipment placed from LibraryCraft (`api.model.read`).
 * A drafting aid, not an engineering approval.
 */

import { setT, t, csv } from './lib/core.js';
import { STARTERS, cleanSpec, specFor, allowedSizes, checkRun, bendRadius, branchKind } from './lib/spec.js';
import { readRun, fromMep } from './lib/runs.js';
import { iso, toSvg, toDxf, bom } from './lib/iso.js';
import { TYPES, TYPE, makeEquipment } from './lib/equip.js';
import { writeIfc } from './lib/ifc-out.js';
import { checkLayout, itemFromEquipment, itemFromPlacement, DEFAULTS as LAYOUT_DEFAULTS } from './lib/layout.js';
import { placeEquipment } from './lib/place.js';
import { route } from './lib/route.js';
import { pipeSize } from '../../mep/tables.js';
import { placeEquipment as placeEquip } from './lib/equip.js';
import * as PM from '../../process/model.js';
import * as PLINK from './lib/process-link.js';
import * as LIVE from '../../process/live.js';
import * as CALC from '../../process/calc.js';
import { planRuns, batchCsv, liveMarkers } from './lib/layoutrun.js';   // 0.8 chem-draw_PART_4: the layout placed with pipes (CH.29), the batch schedule in 4D (CH.6), live values in 3D (XE.9)
import { mountOptimise } from './lib/optimise-ui.js';   // 0.8 CH.31: optimise overnight, variants solved on other computers
import { mountEngineering, zoneEquip } from './lib/engineering.js';   // 0.8 CH.9/11/12/16/17: the vessel, pipe stress, relief, consequence and area calculators (not engineer-reviewed)

const FIELD = 40;
/** BimCraft has no "process" system: a drawn route goes into one of its pipe systems (the person picks). */
const ROUTE_SYSTEMS = ['chw', 'hhw', 'cw', 'hw', 'gas', 'fire'];
const fin = (v) => typeof v === 'number' && Number.isFinite(v);

export function activate(api) {
  setT(api.t);
  const stored = (k, d) => { const v = api.storage.get(k); return v === undefined || v === null ? d : v; };

  // ---------------------------------------------------------------------------------------------- the person's tables
  const userSpecs = () => (Array.isArray(stored('specs', [])) ? stored('specs', []).map(cleanSpec).filter(Boolean) : []);
  // the starter specs in the person's language (their records keep the English: spec.js)
  const starter = (s) => ({ ...s, name: t('spec.starter.' + s.id.toLowerCase() + '.name'), notes: t('spec.starter.' + s.id.toLowerCase() + '.notes') });
  const specs = () => { const u = userSpecs(); return [...u, ...STARTERS.filter((s) => !u.some((x) => x.id === s.id)).map(starter)]; };
  const cleanItem = (r) => {
    if (!r || !TYPE[r.type]) return null;
    const num = (v) => (fin(Number(v)) ? Number(v) : 0);
    return { type: r.type, tag: String(r.tag ?? '').slice(0, 24), desc: String(r.desc ?? '').slice(0, 60), x: num(r.x), y: num(r.y), z: num(r.z), rot: num(r.rot), weight: Math.max(0, num(r.weight)), params: r.params && typeof r.params === 'object' ? r.params : {}, guid: typeof r.guid === 'string' && /^[0-9A-Za-z_$]{22}$/.test(r.guid) ? r.guid : '' };
  };
  const equipment = () => (Array.isArray(stored('equipment', [])) ? stored('equipment', []).map(cleanItem).filter(Boolean).slice(0, 200) : []);
  const saveEquipment = (list) => api.storage.set('equipment', list.slice(0, 200));
  const limits = () => ({ minAisle: fin(stored('limits', {}).minAisle) ? stored('limits', {}).minAisle : LAYOUT_DEFAULTS.minAisle, floorLoad: fin(stored('limits', {}).floorLoad) ? stored('limits', {}).floorLoad : LAYOUT_DEFAULTS.floorLoad });

  // ---------------------------------------------------------------------------------------------- reading the selection
  /**
   * The pipe runs the selection is part of. With add-on API 1.1 a pipe segment, fitting or valve picked in the view leads to its
   * run (mep.runs()); with 1.0 only a selected run assembly itself is read (its CadCraft_MepRun set).
   */
  const selectedRuns = () => runsOf(api.model.selection());
  async function runsOf(ids) {
    const sel = [...ids].map(Number);
    if (api.mep && typeof api.mep.runs === 'function') {
      const out = [];
      let all = [];
      try { all = api.mep.runs(); } catch { all = []; }   // no model, or a model the engine cannot read: fall back to the property sets
      for (const r of all) {
        if (r.kind !== 'pipe' || out.some((x) => x.guid === r.guid)) continue;
        if (sel.includes(Number(r.id)) || (r.parts || []).some((p) => sel.includes(Number(p)))) { const run = fromMep(r); if (run) out.push(run); }
      }
      if (out.length) return out;
    }
    const out = [];
    for (const id of sel) {
      let p = null;
      try { p = await api.model.properties(id); } catch { p = null; }
      const r = p ? readRun(p) : null;
      if (r && r.kind === 'pipe' && !out.some((x) => x.guid === r.guid)) out.push(r);
    }
    return out;
  }
  const findingText = (f) => t('finding.' + f.code, f.vars || {});
  function checkAll(runs) {
    const out = [];
    for (const r of runs) {
      const spec = specFor(specs(), r.mat, r.cls);
      if (!spec) { out.push({ run: r, code: 'spec-none', level: 'warning', vars: { mat: r.mat, cls: r.cls } }); continue; }
      for (const f of checkRun(spec, r)) out.push({ run: r, ...f });
    }
    return out;
  }

  // ---------------------------------------------------------------------------------------------- Properties: Pipe spec
  api.props.section({
    key: 'plant', label: t('props.spec'),
    fields: async (sel) => {
      const runs = await runsOf(sel);
      if (runs.length !== 1) return [];
      const r = runs[0], spec = specFor(specs(), r.mat, r.cls);
      if (!spec) return [{ label: t('props.spec'), value: t('props.nospec', { mat: r.mat, cls: r.cls }) }];
      const sizes = allowedSizes(spec), found = checkRun(spec, r);
      const rad = bendRadius(spec, r.size);
      return [
        { label: t('props.spec'), value: spec.id + ' — ' + spec.name },
        { label: t('props.sizes'), value: spec.sizes.min + ' to ' + spec.sizes.max + (sizes.includes(r.size) ? '' : ' — ' + t('props.size.bad', { size: r.size })) },
        { label: t('props.valves'), value: found.some((f) => f.code === 'spec-valve') ? found.filter((f) => f.code === 'spec-valve').map(findingText).join('; ') : (r.valves.length ? t('props.valves.ok', { n: r.valves.length }) : t('props.valves.none')) },
        { label: t('props.bends'), value: rad ? t('props.bends.' + spec.bends, { r: Math.round(rad * 25.4) }) : '' },
        { label: t('props.branch'), value: ['4:1', '2:1', '1:1'].map((x) => { const [h, b] = x.split(':'); return x + ' ' + (branchKind(spec, h, b) || '—'); }).join(', ') },
      ];
    },
  });

  // ---------------------------------------------------------------------------------------------- files
  /** The spools BimCraft numbered on a run (`mep.spools()`, steel runs cut into spools): [{ id, s0, s1 }] — the isometric balloons them, nothing is numbered twice. */
  function spoolsOf(guid) {
    if (!api.mep || typeof api.mep.spools !== 'function') return [];
    try { return api.mep.spools().filter((x) => x.run === guid).map((x) => ({ id: String(x.id), s0: x.s0, s1: x.s1 })); } catch { return []; }
  }
  async function isoOf() {
    const runs = await selectedRuns();
    if (!runs.length) throw new Error(t('err.noruns'));
    const name = api.model.current()?.name || '';
    return iso({ runs: runs.map((r) => ({ id: r.guid, tag: r.tag, size: r.size, mat: r.mat, cls: r.cls, spec: specFor(specs(), r.mat, r.cls)?.id, od: r.od, points: r.points, valves: r.valves, spools: spoolsOf(r.guid) })), units: stored('units', 'mm'), title: { project: name.replace(/\.[^.]+$/, ''), drawing: runs.length === 1 && runs[0].tag ? runs[0].tag : t('iso.drawing'), drawn: 'CadCraft', date: new Date().toISOString().slice(0, 10) } });
  }
  api.files.exporter({ id: 'iso-svg', label: t('export.iso.svg'), extension: 'svg', mime: 'image/svg+xml', write: async () => toSvg(await isoOf()) });
  api.files.exporter({ id: 'iso-dxf', label: t('export.iso.dxf'), extension: 'dxf', mime: 'application/dxf', write: async () => toDxf(await isoOf()) });
  api.files.exporter({
    id: 'equipment-ifc', label: t('export.equipment'), extension: 'ifc', mime: 'application/x-step',
    write: async () => ifcBytes(),
  });
  function ifcBytes() {
    const list = equipment();
    if (!list.length) throw new Error(t('err.noequipment'));
    return writeIfc({ name: (api.model.current()?.name || t('plant.name')).replace(/\.[^.]+$/, ''), items: list.map((it) => ({ equip: makeEquipment(it.type, it.params), tag: it.tag, desc: it.desc, x: it.x, y: it.y, z: it.z, rot: it.rot })) }).bytes;
  }

  // ---------------------------------------------------------------------------------------------- commands
  const say = (s) => api.status(s);
  const needWrite = () => { say(t('need.write')); return false; };
  api.commands.add('spec-check', async () => {
    const runs = await selectedRuns();
    if (!runs.length) { say(t('err.noruns')); return; }
    const found = checkAll(runs);
    say(found.length ? t('done.spec.found', { n: found.length, first: findingText(found[0]) }) : t('done.spec.clean', { n: runs.length }));
  }, { label: t('cmd.spec-check') });
  api.commands.add('iso-svg', async () => { try { await isoOf(); say(t('done.iso')); } catch (e) { say(e.message); } }, { label: t('cmd.iso') });
  api.commands.add('layout-check', () => { const f = layoutFindings(); say(f.length ? t('done.layout.found', { n: f.length }) : t('done.layout.clean')); }, { label: t('cmd.layout-check') });
  /** Put the table's equipment (the rows not placed yet, or one row) into the open model: one undo step. → how many. */
  async function placeRows(only = null) {
    if (typeof api.model.write !== 'function') { needWrite(); return 0; }
    if (!api.model.current()) { say(t('err.nomodel')); return 0; }
    const list = equipment();
    const todo = list.map((it, i) => ({ it, i })).filter(({ it, i }) => (only === null ? !it.guid : i === only));
    if (!todo.length) { say(t('done.place.none')); return 0; }
    const r = await api.model.write(t('cmd.place-equipment'), (w) => todo.map(({ it }) => placeEquipment(w, { equip: makeEquipment(it.type, it.params), tag: it.tag, desc: it.desc, x: it.x, y: it.y, z: it.z, rot: it.rot }, null, { addPorts: api.mep?.addPorts }).guid));
    const guids = Array.isArray(r.value) ? r.value : [];
    saveEquipment(list.map((it, i) => { const k = todo.findIndex((x) => x.i === i); return k >= 0 && guids[k] ? { ...it, guid: guids[k] } : it; }));
    say(t('done.place', { n: todo.length }));
    return todo.length;
  }
  api.commands.add('place-equipment', () => placeRows(), { label: t('cmd.place-equipment') });
  /** Safety zones (consequence and area calculators, metres) as closed solids in the open model: one undo step. → how many, or null when this BimCraft cannot write. */
  function writeZones(volumes) {
    if (typeof api.model.write !== 'function' || !api.model.current()) return null;
    let n = 0;
    api.model.write('Zones (not engineer-reviewed)', (w) => volumes.map((v) => { n++; return placeEquipment(w, { equip: zoneEquip(v), tag: String(v.label || 'Zone').slice(0, 40), desc: 'Safety zone, not engineer-reviewed', x: 0, y: 0, z: 0, rot: 0 }, null, {}).guid; }));
    return n;
  }
  api.commands.add('route', () => say(hasMep() ? t('route.hint') : t('need.write')), { label: t('cmd.route') });
  api.commands.add('route-draw', () => drawRoute(ROUTE_SYSTEMS[0]), { label: t('cmd.route.draw') });

  const hasMep = () => !!api.mep && typeof api.mep.ports === 'function';
  const portLabel = (p) => (p.ownerClass ? p.ownerClass.replace(/^IFC/, '').toLowerCase() + ' ' : '') + (p.name || '') + ' (' + (p.size ? Math.round(Number(p.size)) || p.size : '?') + ', ' + p.flow + ')';
  /** A route between two ports of the model (mep.ports(): storey plan mm), round the equipment of the table that is in the model. */
  function findRoute(a, b, specId, size) {
    const spec = specs().find((x) => x.id === specId) || specs()[0];
    const ps = pipeSize(spec.material, spec.cls, size);
    if (!ps) return { ok: false, error: 'size' };
    const obstacles = equipment().filter((it) => it.guid).map((it) => placeEquip(makeEquipment(it.type, it.params), { x: it.x, y: it.y, z: it.z, rot: it.rot }).bbox);
    const r = route({ from: { p: a.at, out: a.out }, to: { p: b.at, out: b.out }, obstacles, od: ps.od * 25.4 });
    return r.ok ? { ...r, spec, size, od: ps.od * 25.4 } : r;
  }

  /** Equipment placed in the model from LibraryCraft (`model.read` → placements()): layout items, lengths in mm. Nothing when the app lacks the call. */
  function placedItems() {
    if (typeof api.model.read !== 'function' || !api.model.current()) return [];
    try {
      const pls = api.model.read((w) => ({ unitMm: w.unitMm, list: w.placements().map((p) => ({ id: p.id, name: p.name, itemNumber: p.itemNumber, x: p.x, y: p.y, rot: p.rot, equipment: p.equipment })) }));
      return (pls?.list || []).map((p) => itemFromPlacement({ ...p, id: 'm' + p.id }, pls.unitMm)).filter(Boolean);
    } catch { return []; }
  }
  /** Draw the route last found as a pipe run in the model (`mep.placeRun`: one undo step; an end on a free port is connected to it). */
  async function drawRoute(system) {
    if (!api.mep || typeof api.mep.placeRun !== 'function') { say(t('need.write')); return null; }
    const r = lastRoute;
    if (!r) { say(t('route.err.none')); return null; }
    if (!r.a.storey || r.a.storey !== r.b.storey) { say(t('route.err.storey')); return null; }
    try {
      const res = await api.mep.placeRun({ storey: r.a.storey, kind: 'pipe', system, mat: r.spec.material, cls: r.spec.cls, size: r.size, points: r.points, label: t('cmd.route') });
      say(t('route.drawn', { len: Math.round(r.length), spec: r.spec.id, size: r.size }));
      return res;
    } catch (e) { say(e.message); return null; }
  }

  function layoutFindings() {
    const items = [...placedItems(), ...equipment().map((it, i) => itemFromEquipment(makeEquipment(it.type, it.params), { id: 'e' + i, tag: it.tag, name: t('type.' + it.type), x: it.x, y: it.y, rot: it.rot, weight: it.weight })).filter(Boolean)];
    return checkLayout({ items, ...limits() });
  }


  // ---------------------------------------------------------------------------------------------- the process model (0.8 CH.4)
  // The model (a `cadcraft-process` block: flowsheet and links) is kept in this add-on's storage and travels as process.json; a P&ID in CadCraft or
  // SuperCad Studio reads the same block. Here: tie the runs and equipment to its lines and units, work out each line's hydraulics from the run as
  // drawn, and say what the P&ID has to change when a pipe's size changed in 3D.
  const processModel = () => { const raw = api.storage.get('process'); return typeof raw === 'string' ? PM.fromJSON(raw) : null; };
  const saveProcess = (m) => api.storage.set('process', PM.toJSON(m));
  async function plantDesc() {
    let all = []; try { all = typeof api.mep?.runs === 'function' ? api.mep.runs() : []; } catch { all = []; }
    return PLINK.describe({ runs: all.filter((r) => r.kind === 'pipe'), equipment: equipment() });
  }
  async function processCheck() {
    const m = processModel(); if (!m) throw new Error(t('proc.err.none'));
    const r = PLINK.check(m, await plantDesc());
    saveProcess(m);
    return r;
  }
  const processSource = (() => { try { return api.problems?.available?.() ? api.problems.source({ id: 'process', kind: 'engine', label: t('proc.legend') }) : null; } catch { return null; } })();
  // The wire to the P&ID (CH.4): a size made in 3D reruns the hydraulics here and goes to every window that holds the model (a CadCraft tab opens it
  // in its P&ID add-on); a model that arrives is kept, checked against the runs as drawn, and the Problems say what now disagrees. Nothing is written
  // into the 3D model by a message: "Apply the P&ID sizes to the pipe runs" in the panel does that, one undo step.
  let lastDesc = null, wireTimer = 0, wireNote = '';
  const wire = LIVE.open((n) => new BroadcastChannel(n), { from: 'bimcraft', onModel: async (m, change) => {
    try {
      saveProcess(m);
      const desc = await plantDesc(); lastDesc = desc;
      const r = PLINK.check(m, desc); saveProcess(m); processSource?.set(r.problems);
      const todo = PLINK.sizeWrites(m, desc);
      wireNote = change && (change.ln || change.stream) ? t('wire.in', { what: change.ln || change.stream, size: change.size || '', n: todo.length }) : t('wire.in.model', { what: m.name || '', n: todo.length });
      say(wireNote);
    } catch (e) { api.log('process wire failed', e); }
  } });
  api.onDeactivate?.(() => wire.close());
  async function threeDChanged() {
    const desc = await plantDesc(), before = lastDesc; lastDesc = desc;   // the baseline moves on every change, with a model or without
    const m = processModel(); if (!m || !before) return null;
    const ch = PLINK.whatChanged(before, desc); if (!ch.length) return null;
    const r = PLINK.fromThreeD(m, ch, desc); if (!r.done.length) return null;
    saveProcess(m);
    const chk = PLINK.check(m, desc); saveProcess(m); processSource?.set(chk.problems);
    const first = r.done[0];
    wire.publish(m, { stream: first.stream, ln: first.ln, run: first.run, size: first.size, by: '3d' });
    say(t('wire.out', { ln: first.ln || first.stream, size: first.size }));
    return r;
  }
  api.model?.onChange?.(() => { clearTimeout(wireTimer); wireTimer = setTimeout(() => { threeDChanged().catch((e) => api.log('process 3D change failed', e)); }, 400); });
  plantDesc().then((d) => { if (!lastDesc) lastDesc = d; }).catch(() => {});
  async function applyPidSizes() {
    const m = processModel(); if (!m) throw new Error(t('proc.err.none'));
    if (typeof api.mep?.setRunSizes !== 'function') throw new Error(t('need.write'));
    const todo = PLINK.sizeWrites(m, await plantDesc());
    if (!todo.length) return 0;
    await api.mep.setRunSizes(todo);
    lastDesc = await plantDesc();
    const chk = PLINK.check(m, lastDesc); processSource?.set(chk.problems);
    return todo.length;
  }
  api.commands.add('process-check', async () => {
    try {
      const r = await processCheck(); processSource?.set(r.problems);
      const errs = r.problems.filter((p) => p.severity === 'error').length;
      say(t('done.proc', { lines: r.edits.length, linked: r.linked.length, errors: errs, warnings: r.problems.filter((p) => p.severity === 'warning').length, first: r.problems[0] ? r.problems[0].text : '' }));
    } catch (e) { say(e.message); }
  }, { label: t('cmd.process-check') });
  api.commands.add('process-apply-sizes', async () => { try { say(t('wire.applied', { n: await applyPidSizes() })); } catch (e) { say(e.message); } }, { label: t('cmd.process-apply-sizes') });
  api.files.exporter({ id: 'process-json', label: t('export.process'), extension: 'json', mime: 'application/json', write: async () => { const m = processModel(); if (!m) throw new Error(t('proc.err.none')); return PM.toJSON(m); } });


  // ---------------------------------------------------------------------------------------------- the process layout in the model (0.8 CH.29)
  /** The equipment of the model's layout into the table, placed in the open model, then each layout run routed between the two equipment's nozzles and drawn (one undo step each). → { equipment, runs, skipped: [{ tag, why }] } */
  async function placeProcessLayout(system) {
    const m = processModel(); if (!m || !m.layout) throw new Error(m ? t('proc.nolayout') : t('proc.err.none'));
    const have = new Set(equipment().map((x) => x.tag)), add = m.layout.equipment.map(cleanItem).filter((x) => x && !have.has(x.tag));
    if (add.length) saveEquipment([...equipment(), ...add]);
    const placed = await placeRows();
    const out = { equipment: placed, runs: 0, skipped: [] };
    if (!hasMep() || typeof api.mep.placeRun !== 'function') { out.skipped.push({ tag: '*', why: 'nowrite' }); return out; }
    const plan = planRuns(m.layout, equipment(), api.mep.ports());
    for (const s of plan.skipped) out.skipped.push({ tag: s.run.tag || (s.run.from?.equip + '-' + s.run.to?.equip), why: s.why });
    for (const j of plan.jobs) {
      const spec = specs().find((x) => x.id === (j.run.spec)) || specs()[0], r = findRoute(j.a, j.b, spec.id, String(j.run.size || '2'));
      if (!r.ok) { out.skipped.push({ tag: j.run.tag, why: 'route-' + r.error }); continue; }
      lastRoute = { ...r, a: j.a, b: j.b };
      if (await drawRoute(system)) out.runs++; else out.skipped.push({ tag: j.run.tag, why: 'draw' });
    }
    return out;
  }
  /** Live values (XE.9): readings as CSV → one marker per tag the equipment table has, and a tint on those elements in the 3D view when the app can. */
  async function showLive(csvText) {
    const tags = equipment().map((e) => e.tag).filter(Boolean);
    if (!tags.length) throw new Error(t('live3d.notags'));
    const r = await liveMarkers(csvText, tags);
    const tint = globalThis.bimcraftTint && typeof globalThis.bimcraftTint.tint === 'function' ? globalThis.bimcraftTint.tint(r.markers) : null;
    return { ...r, tint };
  }

  // ---------------------------------------------------------------------------------------------- the panel tab
  let lastRoute = null;   // the route the person found last: { ok, points, length, bends, climbs, spec, size, od, a, b }
  api.ui.panelTab({ id: 'plant', title: t('plant.name'), render: (pane) => render(pane) });
  function render(pane) {
    const d = pane.ownerDocument;
    const el = (tag, attrs = {}, ...kids) => {
      const n = d.createElement(tag);
      for (const [k, v] of Object.entries(attrs)) { if (k === 'class') n.className = v; else if (k === 'on') for (const [ev, fn] of Object.entries(v)) n.addEventListener(ev, fn); else if (v !== undefined && v !== false) n.setAttribute(k, v === true ? '' : v); }
      n.append(...kids.flat().filter((x) => x !== null && x !== undefined && x !== false));
      return n;
    };
    const section = (title, body) => el('details', { open: true, class: 'plant-sec' }, el('summary', {}, title), ...body);
    const download = (name, data, mime) => { const a = el('a', { download: name, href: URL.createObjectURL(new Blob([data], { type: mime })) }); d.body.append(a); a.click(); a.remove(); };
    const list = (items) => el('ul', { class: 'plant-list' }, ...items.map((s) => el('li', {}, s)));
    const again = () => { pane.replaceChildren(); render(pane); };
    const again2 = () => { /* keep the result text on screen: the table refreshes the next time the tab opens */ };

    // equipment table
    const eq = equipment();
    const num = (name) => el('input', { type: 'number', step: 'any', name, 'aria-label': t('field.' + name), placeholder: t('field.' + name), style: 'width:100%;min-width:0' });
    // add-ons bring no stylesheet: layout only, in the page's own classes and a little inline style
    const form = el('form', { class: 'plant-form', style: 'display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:0.25rem;margin:0.5rem 0' },
      el('select', { name: 'type', class: 'select-cc', 'aria-label': t('field.type'), style: 'grid-column:1/-1' }, ...TYPES.map((k) => el('option', { value: k }, t('type.' + k)))),
      el('input', { type: 'text', name: 'tag', maxlength: FIELD, 'aria-label': t('field.tag'), placeholder: t('field.tag'), style: 'grid-column:1/-1' }),
      num('x'), num('y'), num('z'), num('rot'), num('weight'),
      el('button', { type: 'submit', class: 'btn-line btn-sm-cc', style: 'grid-column:1/-1' }, t('btn.add')));
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const v = (n) => form.elements[n].value;
      const item = cleanItem({ type: v('type'), tag: v('tag'), x: v('x'), y: v('y'), z: v('z'), rot: v('rot'), weight: v('weight') });
      if (item) { saveEquipment([...equipment(), item]); again(); }
    });
    const table = eq.length
      ? el('table', { class: 'plant-table', style: 'width:100%;font-size:0.75rem;border-collapse:collapse;margin:0.5rem 0' }, el('thead', {}, el('tr', {}, ...['type', 'tag', 'place', 'weight', ''].map((k) => el('th', { style: 'text-align:left;padding:0.125rem 0.25rem' }, k ? t('field.' + k) : '')))),
        el('tbody', {}, ...eq.map((it, i) => el('tr', {}, el('td', {}, t('type.' + it.type)), el('td', {}, it.tag), el('td', {}, it.x + ', ' + it.y + ', ' + it.z + (it.rot ? ' @ ' + it.rot + '°' : '')), el('td', {}, it.weight || ''),
          el('td', { style: 'white-space:nowrap' },
            it.guid ? el('span', { title: t('equip.placed') }, '✓ ') : (typeof api.model.write === 'function' ? el('button', { type: 'button', class: 'btn-line btn-sm-cc', 'data-plant-place': String(i), on: { click: async () => { try { await placeRows(i); } catch (e) { say(e.message); } again(); } } }, t('btn.place')) : null),
            el('button', { type: 'button', class: 'btn-line btn-sm-cc', 'aria-label': t('btn.remove'), on: { click: () => { saveEquipment(equipment().filter((_, j) => j !== i)); again(); } } }, '×'))))))
      : el('p', {}, t('equip.empty'));
    const eqSec = section(t('sec.equipment'), [
      el('p', {}, t('equip.intro')), form, table,
      el('p', {}, el('button', { type: 'button', class: 'btn-line btn-sm-cc', on: { click: async () => { try { download('plant-equipment.ifc', ifcBytes(), 'application/x-step'); } catch (e) { say(e.message); } } } }, t('btn.equipment.ifc'))),
    ]);

    // layout
    const out = el('div', { class: 'plant-out', 'aria-live': 'polite' });
    const lim = limits();
    const aisle = el('input', { type: 'number', min: '0', value: String(lim.minAisle), style: 'width:5rem', 'aria-label': t('field.aisle') });
    const load = el('input', { type: 'number', min: '0', value: String(lim.floorLoad), style: 'width:5rem', 'aria-label': t('field.load') });
    const layoutSec = section(t('sec.layout'), [
      el('p', {}, t('layout.intro')),
      el('label', {}, t('field.aisle'), ' ', aisle), ' ', el('label', {}, t('field.load'), ' ', load), ' ',
      el('button', { type: 'button', class: 'btn-line btn-sm-cc', on: { click: () => {
        api.storage.set('limits', { minAisle: Number(aisle.value) || 0, floorLoad: Number(load.value) || 0 });
        const found = layoutFindings();
        out.replaceChildren(found.length ? list(found.map((x) => t('level.' + x.level) + ': ' + t('layout.' + x.code, x.vars))) : el('p', {}, t('done.layout.clean')));
      } } }, t('btn.layout')),
    ]);

    // specs
    const specSec = section(t('sec.specs'), [
      el('p', {}, t('specs.intro')),
      list(specs().map((s) => s.id + ' — ' + s.name + ' (' + s.sizes.min + '–' + s.sizes.max + ')')),
      el('button', { type: 'button', class: 'btn-line btn-sm-cc', on: { click: async () => {
        const runs = await selectedRuns();
        out.replaceChildren(!runs.length ? el('p', {}, t('err.noruns')) : (() => { const found = checkAll(runs); return found.length ? list(found.map((x) => (x.run.tag || x.run.guid) + ' — ' + t('level.' + x.level) + ': ' + findingText(x))) : el('p', {}, t('done.spec.clean', { n: runs.length })); })());
      } } }, t('btn.spec')),
    ]);

    // isometric
    const isoSec = section(t('sec.iso'), [
      el('p', {}, t('iso.intro')),
      el('button', { type: 'button', class: 'btn-line btn-sm-cc', on: { click: async () => { try { download('isometric.svg', toSvg(await isoOf()), 'image/svg+xml'); } catch (e) { say(e.message); } } } }, t('btn.iso.svg')), ' ',
      el('button', { type: 'button', class: 'btn-line btn-sm-cc', on: { click: async () => { try { download('isometric.dxf', toDxf(await isoOf()), 'application/dxf'); } catch (e) { say(e.message); } } } }, t('btn.iso.dxf')), ' ',
      el('button', { type: 'button', class: 'btn-line btn-sm-cc', on: { click: async () => { try { const runs = await selectedRuns(); if (!runs.length) throw new Error(t('err.noruns')); const b = bom(runs.map((r) => ({ ...r, spec: specFor(specs(), r.mat, r.cls)?.id })), stored('units', 'mm')); download('bill-of-materials.csv', '﻿' + csv([b.columns, ...b.rows]), 'text/csv'); } catch (e) { say(e.message); } } } }, t('btn.bom')),
    ]);

    // routing between two ports of the model
    let routeSec = null;
    if (hasMep()) {
      let ports = [];
      try { ports = api.mep.ports().filter((p) => Array.isArray(p.at) && Array.isArray(p.out) && p.out.some((c) => Math.abs(Math.abs(c) - 1) < 1e-6)); } catch { ports = []; }
      const sel = (name) => el('select', { name, class: 'select-cc', 'aria-label': t('route.' + name), style: 'width:100%' }, ...ports.map((p, i) => el('option', { value: String(i) }, portLabel(p))));
      const from = sel('from'), to = sel('to');
      const specSel = el('select', { name: 'spec', class: 'select-cc', 'aria-label': t('route.spec'), style: 'width:100%' }, ...specs().map((s2) => el('option', { value: s2.id }, s2.id + ' — ' + s2.name)));
      const size = el('input', { type: 'text', name: 'size', value: '2', 'aria-label': t('route.size'), style: 'width:4rem' });
      if (ports.length > 1) to.selectedIndex = 1;
      routeSec = section(t('sec.route'), [
        el('p', {}, ports.length < 2 ? t('route.few') : t('route.intro')),
        ports.length < 2 ? null : el('div', { style: 'display:grid;gap:0.25rem' }, el('label', {}, t('route.from'), from), el('label', {}, t('route.to'), to), el('label', {}, t('route.spec'), specSel), el('label', {}, t('route.size'), ' ', size)),
        ports.length < 2 ? null : el('button', { type: 'button', class: 'btn-line btn-sm-cc', 'data-plant-route': '', on: { click: () => {
          const a = ports[Number(from.value)], b = ports[Number(to.value)];
          if (!a || !b || a === b) { out.replaceChildren(el('p', {}, t('route.same'))); return; }
          const r = findRoute(a, b, specSel.value, size.value.trim());
          if (!r.ok) { out.replaceChildren(el('p', {}, t('route.err.' + r.error))); return; }
          lastRoute = { ...r, a, b };
          const canDraw = typeof api.mep?.placeRun === 'function';
          const sys = el('select', { name: 'system', class: 'select-cc', 'aria-label': t('route.system') }, ...ROUTE_SYSTEMS.map((k) => el('option', { value: k }, t('route.sys.' + k))));
          out.replaceChildren(el('p', {}, t('route.found', { len: Math.round(r.length), bends: r.bends, climbs: r.climbs })), list(r.points.map((p) => p.map((v) => Math.round(v)).join(', '))),
            canDraw ? el('p', {}, el('label', {}, t('route.system'), ' ', sys), ' ', el('button', { type: 'button', class: 'btn-line btn-sm-cc', 'data-plant-draw': '', on: { click: async () => { await drawRoute(sys.value); } } }, t('btn.route.draw'))) : null,
            el('p', { class: 'plant-note' }, t(canDraw ? 'route.draw.note' : 'route.nowrite')));
        } } }, t('btn.route')),
      ]);
    }

    // process model
    const procOut = el('div', { class: 'plant-proc-out', 'aria-live': 'polite' });
    const fileIn = el('input', { type: 'file', accept: '.json,application/json', 'aria-label': t('proc.file'), 'data-plant-process-file': '' });
    fileIn.addEventListener('change', async () => {
      const f = fileIn.files && fileIn.files[0]; if (!f) return;
      const m = PM.fromJSON(await f.text());
      if (!m) { procOut.replaceChildren(el('p', {}, t('proc.err.file'))); return; }
      saveProcess(m); procOut.replaceChildren(el('p', {}, t('proc.loaded', { name: m.name || f.name, units: m.flowsheet.units.length })));
    });
    const procSec = section(t('sec.process'), [
      el('p', {}, t('proc.intro')), el('label', {}, t('proc.file'), ' ', fileIn), ' ',
      el('button', { type: 'button', class: 'btn-line btn-sm-cc', 'data-plant-layout': '', on: { click: () => {
        const m = processModel(); if (!m || !m.layout) { procOut.replaceChildren(el('p', {}, m ? t('proc.nolayout') : t('proc.err.none'))); return; }
        const have = new Set(equipment().map((x) => x.tag)), add = m.layout.equipment.map(cleanItem).filter((x) => x && !have.has(x.tag));
        saveEquipment([...equipment(), ...add]); procOut.replaceChildren(el('p', {}, t('proc.layout.added', { n: add.length }))); again();
      } } }, t('btn.layout.process')), ' ',
      el('button', { type: 'button', class: 'btn-line btn-sm-cc', 'data-plant-process': '', on: { click: async () => {
        try { const r = await processCheck(); processSource?.set(r.problems); procOut.replaceChildren(el('p', {}, t('done.proc', { lines: r.edits.length, linked: r.linked.length, errors: r.problems.filter((p) => p.severity === 'error').length, warnings: r.problems.filter((p) => p.severity === 'warning').length, first: '' })), list([...r.edits.map((x) => t('proc.edit', { ln: x.ln || x.stream, size: x.size, v: x.v.toPrecision(3), dp: (x.dp / 1e5).toPrecision(3) })), ...r.problems.slice(0, 20).map((p) => t('level.' + p.severity) + ': ' + p.text)])); }
        catch (e) { procOut.replaceChildren(el('p', {}, e.message)); }
      } } }, t('btn.process')), ' ',
      el('button', { type: 'button', class: 'btn-line btn-sm-cc', 'data-plant-apply-sizes': '', on: { click: async () => {
        try { const n = await applyPidSizes(); procOut.replaceChildren(el('p', {}, t('wire.applied', { n }))); } catch (e) { procOut.replaceChildren(el('p', {}, e.message)); }
      } } }, t('btn.apply.sizes')), procOut,
    ]);

    // the plant placed with its pipes, the batch schedule in 4D and live values (0.8 CH.29 / CH.6 / XE.9)
    const p4out = el('div', { class: 'plant-p4-out', 'aria-live': 'polite', 'data-plant-p4-out': '' });
    const sysSel = el('select', { name: 'p4system', class: 'select-cc', 'aria-label': t('route.system') }, ...ROUTE_SYSTEMS.map((k) => el('option', { value: k }, t('route.sys.' + k))));
    const recipe = el('textarea', { class: 'form-control', rows: '6', spellcheck: 'false', 'data-plant-recipe': '', 'aria-label': t('p4.recipe'), style: 'font-family:monospace;font-size:0.75rem;width:100%' });
    recipe.value = JSON.stringify(CALC.get('batch').input.recipe, null, 1);
    const nb = el('input', { type: 'number', min: '1', max: '50', value: '3', 'aria-label': t('p4.batches'), style: 'width:4rem' });
    const csvIn = el('textarea', { class: 'form-control', rows: '4', spellcheck: 'false', 'data-plant-live-csv': '', 'aria-label': t('p4.live.csv'), style: 'font-family:monospace;font-size:0.75rem;width:100%' });
    csvIn.value = 'tag,time,value,quality\n';
    const p4Sec = section(t('sec.p4'), [
      el('p', {}, t('p4.place.intro')),
      el('label', {}, t('route.system'), ' ', sysSel), ' ',
      el('button', { type: 'button', class: 'btn-line btn-sm-cc', 'data-plant-place-layout': '', on: { click: async () => {
        try { const r = await placeProcessLayout(sysSel.value); p4out.replaceChildren(el('p', {}, t('p4.place.done', { equipment: r.equipment, runs: r.runs, skipped: r.skipped.length })), ...(r.skipped.length ? [list(r.skipped.map((x) => x.tag + ': ' + t('p4.why.' + x.why.replace(/^route-.*/, 'route'))))] : [])); again2(); }
        catch (e) { p4out.replaceChildren(el('p', {}, e.message)); }
      } } }, t('p4.place.btn')),
      el('p', {}, t('p4.batch.intro')), recipe,
      el('label', {}, t('p4.batches'), ' ', nb), ' ',
      el('button', { type: 'button', class: 'btn-line btn-sm-cc', 'data-plant-batch': '', on: { click: async () => {
        try {
          const r = batchCsv(JSON.parse(recipe.value), { batches: Math.max(1, Math.min(50, Number(nb.value) || 1)) });
          const four = globalThis.bimcraftFourD;
          if (!four || typeof four.open !== 'function') { p4out.replaceChildren(el('p', {}, t('p4.batch.no4d'))); return; }
          await four.open('batch-schedule.csv', r.csv);
          p4out.replaceChildren(el('p', {}, t('p4.batch.done', { tasks: r.tasks.length, hours: Math.round(r.sched.makespan * 10) / 10 })), ...(r.sched.problems && r.sched.problems.length ? [list(r.sched.problems.map((p) => p.text || String(p)))] : []));
        } catch (e) { p4out.replaceChildren(el('p', {}, e.message)); }
      } } }, t('p4.batch.btn')),
      el('p', {}, t('p4.live.intro')), csvIn,
      el('button', { type: 'button', class: 'btn-line btn-sm-cc', 'data-plant-live': '', on: { click: async () => {
        try {
          const r = await showLive(csvIn.value);
          p4out.replaceChildren(el('p', {}, t('p4.live.done', { n: r.markers.length, matched: r.tint ? r.tint.matched : 0 })), ...(r.markers.length ? [list(r.markers.map((m2) => m2.tag + ': ' + m2.text + ' (' + m2.state + ')'))] : []));
        } catch (e) { p4out.replaceChildren(el('p', {}, e.message)); }
      } } }, t('p4.live.btn')),
      el('button', { type: 'button', class: 'btn-line btn-sm-cc', 'data-plant-live-clear': '', on: { click: () => { if (globalThis.bimcraftTint && globalThis.bimcraftTint.clear) globalThis.bimcraftTint.clear(); p4out.replaceChildren(el('p', {}, t('p4.live.cleared'))); } } }, t('p4.live.clear')),
      el('p', { class: 'plant-note' }, t('p4.live.note')), p4out,
    ]);
    const writeNote = el('p', { class: 'plant-note' }, typeof api.model.write === 'function' ? t('note.write.yes') : t('need.write'));
    // engineering checks (0.8 CH.9/11/12/16/17): the calculators with what only BimCraft can do with their results
    const engSec = el('details', { class: 'plant-sec', 'data-plant-eng': '' }, el('summary', {}, t('eng.title') === 'eng.title' ? 'Engineering checks' : t('eng.title')));
    mountEngineering(engSec, { t, runs: () => { try { return typeof api.mep?.runs === 'function' ? api.mep.runs() : []; } catch { return []; } },
      addEquipment: (it) => { saveEquipment([...equipment(), cleanItem(it)].filter(Boolean)); again(); }, writeZones });
    // Connect to a device + the tag map (XE.9, chem-mount_PART_5): the same panel as the P&ID add-on; readings tint the elements of the equipment table by Tag
    const liveSource = (() => { try { return api.problems?.available?.() ? api.problems.source({ id: 'live', kind: 'engine', label: 'Live data' }) : null; } catch { return null; } })();
    const connLabel = t('ui.connect'), connSec = el('details', { class: 'plant-sec', 'data-plant-connect': '' }, el('summary', {}, connLabel === 'ui.connect' ? 'Connect to a device' : connLabel)), connBody = el('div');
    connSec.append(connBody);
    import('../../live/connect-ui.js').then(({ mountConnect }) => {
      mountConnect(connBody, { t, load: () => api.storage.get('livemap'), save: (v) => api.storage.set('livemap', v),
        publish: (list) => { try { liveSource?.set(list); } catch { /* no problems host */ } },
        onReadings: (store) => {
          const markers = store.markers().filter((m2) => m2.state !== 'waiting').map((m2) => ({ tag: m2.target.id, text: m2.text, state: m2.state, level: m2.level }));
          if (globalThis.bimcraftTint && typeof globalThis.bimcraftTint.tint === 'function') globalThis.bimcraftTint.tint(markers);
        } });
    }).catch((e) => { connBody.textContent = String(e && e.message || e); });
    // Optimise overnight (CH.31, chem-mount_PART_5)
    const optLabel = t('ui.optimise'), optSec = el('details', { class: 'plant-sec', 'data-plant-optimise': '' }, el('summary', {}, optLabel === 'ui.optimise' ? 'Optimise overnight' : optLabel)), optBody = el('div');
    optSec.append(optBody); mountOptimise(optBody, { t, model: processModel });
    pane.append(el('p', {}, t('plant.intro')), eqSec, ...(routeSec ? [routeSec] : []), specSec, isoSec, procSec, p4Sec, layoutSec, connSec, optSec, engSec, out, writeNote);
  }

  api.log('Plant ready');   // i18n-ignore (developer log)
}
