/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — every word a person reads comes from the add-on (api.t) or the app's language file. */
/**
 * bimcraft-api.js — BimCraft's add-on API 1.1 and its own add-on loader (0.5 AO.7; docs/ADDONS-SPEC.md §5.7; 1.1: 0.7 LC.9,
 * session `mep-07`; 1.2: 0.8 REG.1, `rules`).
 * Once BimCraft's manifest says "addons": "own", the shell's boot (app-addons.js) steps aside and bimcraft.js calls
 * startAddons({ … }) with the open model and the hooks listed below.
 *
 *   api = { ...sharedApi (ui.toolbarGroup, ui.panelSection, ui.settingsSection, files.importer / exporter),
 *           model: { current, properties, selection, select, onChange, write },
 *           edit: { setAttribute, setProperty },   (each one undo step through BimCraft's IfcEditor, then the panels refresh)
 *           mep: { runs, ports },                   (1.1, read-only)
 *           commands: { add, run, has }, props: { section }, ui.panelTab, status }
 *
 * 1.1 (0.7): model.write(label, fn) → Promise<{ created, guids, value }> writes geometry and relations into the open model as ONE
 * undo step. fn(w) gets BimCraft's ModelWriter (model-write.js: make, placeAt, profile, extrudeAt, rep, setShape, upsertPset,
 * contain, relateType, dropProduct, byGuid …; mm in) and returns any JSON value. It goes through IfcEditor.modelChange like the
 * Draw tools (so Studio Live sends it, the plan and the 3D view follow); Redo runs fn again with the same GlobalIds handed out in
 * the same order, so fn must make the same lines from the same model (no clocks, no random numbers; find things by GlobalId).
 * A throw writes nothing and rejects. created = express ids of the elements, ports, spatial elements and types it made (not
 * relations or property sets; ids change after Undo / Redo, guids don't). mep.runs() → the pipe and duct runs (mep-model.js readRuns, plain data, storeys by GlobalId); mep.ports() → every
 * distribution port (mep/ports.js readPorts); mep.equipment() → the generic equipment placed (mep/equipment.js readEquipment);
 * model.read(fn) → fn(w)'s value (a ModelWriter with no journal: any write throws; nothing recorded); mep.placeRun(spec) →
 * Promise<{ guid, created }> draws a pipe or duct run as the Pipe and Duct tools do (mep-model.js placeRun; one undo step), spec =
 * { storey (GlobalId), kind: 'pipe' | 'duct', system, points: [[x, y, z]] (storey plan mm), pipe: mat, cls, size, slope?; duct:
 * shape, w, h, flow?; ends?: [{ eq, port } | null, …] }; mep.spools() → [{ id, run, index, s0, s1, parts }] the steel spools written (CadCraft_Spool; s0 / s1 = mm along the run's drawn
 * line from its first point); mep.addPorts(w, elementId, ports) — inside model.write's fn only — writes ports on an element the add-on made, the way
 * BimCraft's own equipment has them (IfcDistributionPort nested, CadCraft_Port set; ports in the LibraryCraft item shape:
 * { name, system, direction, shape, size, h?, nominal?, x, y, z, axis }, mm in the element's own axes) → [{ id, name }].
 * 1.2 (0.8 REG.1): rules.provide(provider) / rules.changed() — one add-on at a time may say which building regulations are in force: where a
 * new stair starts from, what Properties says about a stair, and one more entry in Schedules (rules-hook.js has the provider's shape). A
 * second add-on's provide() replaces the first's; switching the add-on off removes it. Core BimCraft knows no regulations itself.
 * 1.3 (0.8 P.4b): api.problems.source(def) / available() from the shared addons.js: an add-on's checks go into the shell's Problems.
 * 1.4 (0.8 DC.117, session `cabinetcraft_hosts`): model.levels() · model.roomPlans() · drafting.put(tag, items, { label }) — see ADDONS-SPEC § 5.7. Plain data in, plain data out;
 * the add-on writes its own elements with model.write.
 * Add-ons written for 1.0, 1.1, 1.2 and 1.3 keep working (the loader takes 1.0 to 1.4 manifests).
 *
 * The model is BimCraft's IFC model (ifc-model.js: properties(id) → { id, cls, name, guid, tag, sets: [{ name, rows: [{ name,
 * value, edit }] }] }); ids are the open model's express ids. Importers return { ifc: Uint8Array, name } (opened like an .ifc
 * file); exporters get { save: () => IFC bytes with the edits, name }.
 *
 * The app reads what add-ons registered through the object startAddons returns (also window.ccAddons):
 *   runCommand(key) · propsSections(selection ids, model) → [{ key, label, fields: [{ label, value, edit? }] }] · panelTabs() ·
 *   importerFor(name) / openFromAddon(file) · exporters() / exportInput(name) · changed(why).
 * DOM-free except ui.panelTab: bin/test-addons-model-apps.mjs runs it in Node.
 */

import { AddonLoader, sharedApi } from '../addons.js';
import { recordUse } from '../addons-file.js';   // 0.8 AL.6: the file says which add-on wrote into it
import { EDITABLE_ATTRS } from '../ifc-edit.js';
import { installTrust, bundledOnly, NO_PACKAGES } from './trust.js';
import { ModelWriter } from '../model-write.js';
import { roomsOf } from '../mep-calc.js';   // 0.8 (bim_PART_2, mep_PART_2's line 4): model.rooms()
import { op } from '../model-ops.js';
import { levelRooms, roomOpenings } from '../furnish-model.js';   // 1.4 (0.8 DC.117): model.roomPlans
import { readLevels } from '../model-levels.js';
import { readWalls } from '../model-walls.js';
import { putDrafting } from '../drafting.js';
import { readRuns, placeRun, setRunSizes, PIPE_SYSTEMS, DUCT_SYSTEMS } from '../mep-model.js';
import { readPorts } from '../mep/ports.js';
import { writePorts, readEquipment } from '../mep/equipment.js';
import { readSpools } from '../mep/spools.js';
import { val } from '../ifc-util.js';
import { rules as currentRules, setRules, rulesChanged } from '../rules-hook.js';

export const BIMCRAFT_API_VERSION = '1.4';
const SAFE_ID = /^[a-z0-9][a-z0-9-]{0,40}$/;
const clone = (v) => (v === undefined || v === null ? v ?? null : JSON.parse(JSON.stringify(v)));

/**
 * The API one add-on gets. ctx = { editor() → IfcEditor | null, model() → IfcModel | null, name() → file name, selection() →
 * [ids], select(ids), afterEdit() (the panels after an edit), status(text), registry, commands, props, tabs, changeListeners,
 * find(selector), showTab(key), write?(run, { label }) → Promise<op result> (1.1: the app's way to apply a model op so the
 * views follow; without it the op goes straight to editor.modelChange and afterEdit) }.
 */
export function makeBimcraftApi(base, addon, ctx) {
  const shared = sharedApi(base, addon, ctx.registry);
  const id = addon.id;
  // the loader hands over {id, manifest, ...}; the display name lives in the manifest (0.8 R4.7: labels read "undefined: ...")
  const addonName = String(addon.manifest?.name || addon.name || addon.id);
  const track = (fn) => base.onDeactivate(fn);
  const listen = new Set();
  ctx.changeListeners.add((why) => { for (const fn of listen) { try { fn(why); } catch (e) { base.log('onChange threw', e); } } });
  const needEditor = () => { const ed = ctx.editor(); if (!ed) throw new Error('no IFC model is open'); return ed; };

  const model = {
    /** { name } of the open IFC model, or null. */
    current: () => (ctx.model() ? { name: ctx.name() } : null),
    /** An element's attributes and property sets (a copy; rows with `edit` can be changed with edit.setProperty). */
    properties: async (eid) => { const m = ctx.model(); return m ? clone(await m.properties(Number(eid))) : null; },
    selection: () => [...ctx.selection()],
    select: (ids) => ctx.select([...ids].map(Number)),
    onChange(fn) { listen.add(fn); const off = () => listen.delete(fn); track(off); return off; },
    /** 1.1: read the open model through a writer that cannot write (no journal: a write throws). → fn's value (a copy). */
    read(fn) {
      if (typeof fn !== 'function') throw new Error('model.read: (fn)');
      const ed = needEditor();
      const v = fn(new ModelWriter(ed.W, ed.api, ed.mid));
      return v === undefined ? null : clone(v);
    },
    /** 0.8 (mep_PART_2's line 4): the rooms the walls enclose, on every level: [{ storey (expressID), name, poly: [[x, y]…] (world mm), z }] — a copy; read-only. */
    rooms() { const ed = needEditor(); return clone(roomsOf(new ModelWriter(ed.W, ed.api, ed.mid))); },
    /** 1.1: write into the open model, one undo step labelled "<add-on>: <label>" (see the header). */
    async write(label, fn) {
      if (typeof fn !== 'function') throw new Error('model.write: (label, fn)');
      const ed = needEditor();
      let value;
      const run = op((w) => {
        value = fn(w);
        try { recordUse(w, id, (ctx.versionOf && ctx.versionOf(id)) || addon.manifest?.version); } catch (e) { base.log('could not record the add-on in the file', e); }
        const made = new Map();
        // elements, ports, spaces and types made (not the relations and property sets that hang off them)
        for (const lid of w.journal.created) {
          const l = w.api.GetLine(w.mid, lid, false), g = l && l.GlobalId ? val(l.GlobalId) : null;
          if (g && !/^IFC(REL|PROPERTYSET|ELEMENTQUANTITY)/.test(String(w.api.GetNameFromTypeCode(l.type) || '').toUpperCase())) made.set(g, lid);
        }
        const created = [...made.values()];
        return { id: created[0] ?? null, ids: created, made };
      });
      const meta = { label: addonName + ': ' + String(label || '').slice(0, 120) };
      const r = ctx.write ? await ctx.write(run, meta) : (() => { const x = ed.modelChange(run, { label: meta.label, verb: '' }); ctx.afterEdit(meta.label); return x; })();
      const made = r?.made instanceof Map ? r.made : new Map();
      return { created: [...made.values()], guids: [...made.keys()], value: value === undefined ? null : clone(value) };
    },
  };

  /** 1.1: the pipe and duct runs and every distribution port, read-only (plain data, a fresh read each call). */
  const writer = () => { const ed = needEditor(); return new ModelWriter(ed.W, ed.api, ed.mid); };
  const mep = {
    runs() {
      const w = writer();
      return readRuns(w).map((r) => clone({ guid: r.guid, id: r.id, storey: r.storey ? w.guidOf(r.storey) : null, kind: r.kind, system: r.system, points: r.points,
        mat: r.mat, cls: r.cls, size: r.size, shape: r.kind === 'duct' ? r.shape : null, w: r.kind === 'duct' ? r.w : null, h: r.kind === 'duct' ? r.h : null,
        slope: r.slope, flow: r.flow, valves: r.valves, parts: r.parts }));
    },
    ports() {
      const w = writer();
      return readPorts(w).map((p) => clone({ ...p, storey: p.storey ? w.guidOf(p.storey) : null }));
    },
    /** 1.1: a pipe or duct run drawn by the add-on (one undo step, as the Pipe and Duct tools draw it). */
    async placeRun(spec = {}) {
      const s = spec && typeof spec === 'object' ? spec : {};
      const kind = s.kind === 'duct' ? 'duct' : s.kind === 'pipe' ? 'pipe' : null;
      if (!kind || !(kind === 'pipe' ? PIPE_SYSTEMS : DUCT_SYSTEMS)[s.system]) throw new Error('mep.placeRun: kind pipe | duct and a system of that kind');
      if (!Array.isArray(s.points) || s.points.length < 2 || s.points.length > 500 || !s.points.every((q) => Array.isArray(q) && q.length >= 2 && q.slice(0, 3).every(Number.isFinite))) throw new Error('mep.placeRun: points [[x, y, z]] (2 to 500, mm)');
      needEditor();
      const run = { storey: String(s.storey || ''), kind, system: s.system, points: s.points.map((q) => [Number(q[0]), Number(q[1]), Number(q[2]) || 0]),
        ...(kind === 'pipe' ? { mat: String(s.mat || ''), cls: String(s.cls || ''), size: String(s.size || ''), slope: Number(s.slope) || 0 } : { shape: String(s.shape || 'rect'), w: Number(s.w), h: Number(s.h ?? s.w), flow: Number(s.flow) || 0 }),
        ends: Array.isArray(s.ends) ? s.ends.slice(0, 2) : [null, null] };
      const meta = { label: addonName + ': ' + String(s.label || kind).slice(0, 120) };
      const op = placeRun(run);
      const r = ctx.write ? await ctx.write(op, meta) : (() => { const x = ctx.editor().modelChange(op, { label: meta.label, verb: '' }); ctx.afterEdit(meta.label); return x; })();
      const made = r?.made instanceof Map ? r.made : new Map();
      return { guid: [...made.keys()][0] ?? null, created: [...(r?.ids || [])] };
    },
    /** 1.2 (0.8 CH.4): sizes for runs, ONE undo step. changes [{ guid, size }] (a pipe's size name); an unknown guid is skipped. → Promise<{ n }>. */
    async setRunSizes(changes) {
      if (!Array.isArray(changes) || !changes.length || changes.length > 500) throw new Error('mep.setRunSizes: 1 to 500 changes [{ guid, size }]');
      const list = changes.map((c) => ({ guid: String(c && c.guid || ''), size: String(c && c.size || '') })).filter((c) => c.guid && c.size);
      if (!list.length) throw new Error('mep.setRunSizes: every change needs a guid and a size');
      needEditor();
      const meta = { label: addonName + ': ' + list.length + ' run size' + (list.length > 1 ? 's' : '') };
      const op = setRunSizes(list);
      if (ctx.write) await ctx.write(op, meta); else { ctx.editor().modelChange(op, { label: meta.label, verb: '' }); ctx.afterEdit(meta.label); }
      return { n: list.length };
    },
    spools() {
      const w = writer();
      return readSpools(w, readRuns(w)).map((s) => clone(s));
    },
    equipment() {
      const w = writer();
      return readEquipment(w).map((e) => clone({ ...e, storey: e.storey ? w.guidOf(e.storey) : null }));
    },
    /** Only inside model.write's fn (w = the writer it was given). */
    addPorts(w, elementId, ports) {
      if (!w || !w.journal) throw new Error('mep.addPorts: call it inside model.write(label, (w) => …) with that w');
      if (!Array.isArray(ports) || !ports.length || ports.length > 32) throw new Error('mep.addPorts: 1 to 32 ports');
      return writePorts(w, Number(elementId), ports);
    },
  };

  // 1.4: the levels, the rooms the walls enclose (with the doors and windows near them), and drafting lines / hatches put in a level's plan view for an owner.
  model.levels = () => { const w = writer(); return readLevels(w).map((l) => clone({ guid: l.guid, name: l.name, elevation: l.elevation, height: l.height })); };
  /** [{ storey (GlobalId), storeyName, index, name, poly [[x, y]…] (the level's plan mm), holes, area (mm2), z (the level's elevation, mm), doors [{ x, y, w }], windows [{ x, y, w, sill }], walls [GlobalId…] (the walls on the room's edge) }]. */
  model.roomPlans = () => {
    const ed = needEditor(), w = writer(), out = [];
    for (const lv of readLevels(w)) {
      const rooms = levelRooms(ed, lv.guid);
      if (!rooms.length) continue;
      const { doors, windows } = roomOpenings(ed, lv.guid);
      const walls = readWalls(w, lv.id);
      const segD = (p, a, b) => { const dx = b[0] - a[0], dy = b[1] - a[1], L = dx * dx + dy * dy || 1, t = Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / L)); return Math.hypot(p[0] - a[0] - dx * t, p[1] - a[1] - dy * t); };
      for (const r of rooms) {
        const edge = (p, tol) => r.poly.some((q, i) => segD(p, q, r.poly[(i + 1) % r.poly.length]) <= tol);
        out.push(clone({ storey: lv.guid, storeyName: lv.name, index: r.index, name: lv.name + ': ' + String(r.index + 1), poly: r.poly, holes: r.holes, area: r.area, z: lv.elevation,
          doors: doors.filter((d) => edge([d.x, d.y], 700)), windows: windows.filter((d) => edge([d.x, d.y], 700)),
          walls: walls.filter((x) => edge([(x.a[0] + x.b[0]) / 2, (x.a[1] + x.b[1]) / 2], (x.t || 0) / 2 + 60)).map((x) => x.guid) }));
      }
    }
    return out;
  };
  /** The model's walls (GlobalId, level, ends, thickness, mm) — to match a selection with a room. */
  model.walls = () => { const w = writer(); return readWalls(w).map((x) => clone({ guid: x.guid, id: x.id, storey: x.storey ? w.guidOf(x.storey) : null, a: x.a, b: x.b, t: x.t, height: x.height })); };
  const drafting = {
    /** Drafting lines and hatches put in plan views for an owner `tag`, replacing what the same tag put before: ONE undo step. → Promise<{ n, removed }>. */
    async put(tag, items, { label = 'drawing' } = {}) {
      if (!Array.isArray(items)) throw new Error('drafting.put: (tag, items)');
      needEditor();
      const meta = { label: addonName + ': ' + String(label).slice(0, 120) };
      const run = putDrafting(tag, items);
      const r = ctx.write ? await ctx.write(run, meta) : (() => { const x = ctx.editor().modelChange(run, { label: meta.label, verb: '' }); ctx.afterEdit(meta.label); return x; })();
      return { n: items.length, removed: r?.removed ?? 0 };
    },
  };

  const edit = {
    /** Name, Description, ObjectType or Tag of an element: one undo step. */
    setAttribute(eid, attr, value) {
      if (!EDITABLE_ATTRS.includes(attr)) throw new Error('edit.setAttribute: one of ' + EDITABLE_ATTRS.join(', '));
      const r = needEditor().setAttribute(Number(eid), attr, String(value ?? ''));
      ctx.afterEdit(addonName);
      return r;
    },
    /** One property value (by property set and property name), as Properties edits it: one undo step. → false when it has none. */
    async setProperty(eid, setName, propName, value) {
      const ed = needEditor();
      const p = await ctx.model().properties(Number(eid));
      const row = p?.sets?.find((s) => s.name === setName)?.rows?.find((r) => r.name === propName && r.edit);
      if (!row) return false;
      ed.setProperty(Number(eid), row.edit, value);
      ctx.afterEdit(addonName);
      return true;
    },
  };

  const commands = {
    add(name, fn, { label = name } = {}) {
      if (!SAFE_ID.test(String(name)) || typeof fn !== 'function') throw new Error('commands.add: name and fn');
      const key = id + ':' + name;
      if (ctx.commands.has(key)) throw new Error('commands.add: "' + name + '" is already added');
      ctx.commands.set(key, { addon: id, name, label: String(label), run: () => fn(api) });
      const off = () => ctx.commands.delete(key);
      track(off);
      return off;
    },
    run: (name) => { const c = ctx.commands.get(id + ':' + name); return c ? c.run() : undefined; },
    has: (name) => ctx.commands.has(id + ':' + name),
  };

  const props = {
    /** A section in the Properties panel: fields(selection ids, model) → [{ label, value, edit?(value) }] or []. */
    section({ key = id, label, fields } = {}) {
      if (key !== id && !String(key).startsWith(id + '.')) throw new Error('props.section: the key must be "' + id + '" or start with "' + id + '."');
      if (typeof fields !== 'function') throw new Error('props.section: fields(selection, model)');
      ctx.props.set(key, { key, addon: id, label: String(label || addonName), fields });
      const off = () => ctx.props.delete(key);
      track(off);
      return off;
    },
  };

  /** 1.2: the building regulations in force (rules-hook.js). */
  const rulesApi = {
    provide(provider) {
      if (!provider || typeof provider !== 'object') throw new Error('rules.provide: (provider)');
      setRules(provider);
      const off = () => { if (currentRules() === provider) setRules(null); };
      track(off);
      return off;
    },
    changed() { rulesChanged(); },
  };
  const ui = { ...shared.ui, panelTab: panelTabMaker(ctx, id, base, track, '.bc-rtabs[role="tablist"]', 'bc-rtab', 'bc-rpane-') };
  const api = { ...shared, ui, model, edit, mep, drafting, commands, props, rules: rulesApi, status: (text) => ctx.status(String(text)) };
  return api;
}

function panelTabMaker(ctx, id, base, track, listSel, tabClass, paneIdPrefix) {
  return function panelTab({ id: tid, title, render } = {}) {
    if (!SAFE_ID.test(String(tid))) throw new Error('ui.panelTab: id');
    const key = 'addon-' + (id + '-' + tid).replace(/[^a-z0-9-]/g, '-');
    ctx.tabs.set(key, { addon: id, title: String(title || tid), render });
    track(() => ctx.tabs.delete(key));
    if (!ctx.find || typeof document === 'undefined') return null;
    const list = ctx.find(listSel);
    if (!list) return null;
    const btn = document.createElement('button');
    Object.assign(btn, { type: 'button', className: tabClass, id: tabClass + '-' + key, textContent: String(title || tid), tabIndex: -1 });
    btn.setAttribute('role', 'tab'); btn.setAttribute('aria-selected', 'false'); btn.setAttribute('aria-controls', paneIdPrefix + key);
    btn.dataset.rtab = key; btn.dataset.addon = id;
    const pane = document.createElement('section');
    Object.assign(pane, { id: paneIdPrefix + key, hidden: true });
    pane.setAttribute('role', 'tabpanel'); pane.setAttribute('aria-labelledby', btn.id);
    pane.dataset.rpane = key; pane.dataset.addon = id;
    pane.addEventListener('cc-tab-shown', () => { try { pane.replaceChildren(); render?.(pane); } catch (e) { base.log('panelTab render threw', e); } });
    btn.addEventListener('click', () => ctx.showTab?.(key));
    list.append(btn);
    list.parentElement.append(pane);
    track(() => { if (btn.getAttribute('aria-selected') === 'true') ctx.showTab?.(null); btn.remove(); pane.remove(); });
    return pane;
  };
}

/**
 * Start BimCraft's add-ons. ctx: see makeBimcraftApi, plus openIfc(bytes, name) for importers, and loader options for tests
 * (packages, storage, importer, fetchJson, base, verify, bundledOnly).
 */
export async function startAddons(ctx) {
  const registry = { importers: new Map(), exporters: new Map(), listeners: new Set(), changed() { for (const fn of this.listeners) { try { fn(); } catch { /* app */ } } } };
  const full = { ...ctx, registry, commands: new Map(), props: new Map(), tabs: new Map(), changeListeners: new Set() };
  const opts = { app: 'bimcraft', appName: ctx.appName || 'BimCraft', apiVersion: BIMCRAFT_API_VERSION, makeApi: (b, a) => makeBimcraftApi(b, a, full) };
  for (const k of ['packages', 'storage', 'importer', 'fetchJson', 'base', 'locale', 'timeout']) if (ctx[k] !== undefined) opts[k] = ctx[k];
  if (ctx.bundledOnly ?? bundledOnly()) opts.packages = NO_PACKAGES;
  if (!ctx.verify) installTrust(AddonLoader); else AddonLoader.verify = ctx.verify;
  const loader = new AddonLoader(opts);
  const importerFor = (name) => { const n = String(name || '').toLowerCase(); return [...registry.importers.values()].find((e) => e.extensions.some((x) => n.endsWith(x))) || null; };
  const api = {
    loader,
    list: () => loader.list(), installPackage: (p) => loader.installPackage(p), uninstall: (id) => loader.uninstall(id),
    onChange: (fn) => { registry.listeners.add(fn); const off = loader.on(fn); return () => { registry.listeners.delete(fn); off(); }; },
    runCommand(key) { const c = full.commands.get(String(key)); if (!c) return false; try { c.run(); } catch (e) { console.warn('add-on command failed:', e); } return true; },   // i18n-ignore
    commandList: () => [...full.commands.entries()].map(([key, c]) => ({ key, addon: c.addon, name: c.name, label: c.label })),
    async propsSections(selection, model) {
      const out = [];
      for (const s of full.props.values()) {
        let fields;
        try { fields = await s.fields([...selection], model); } catch (e) { console.warn('add-on Properties section failed:', e); continue; }   // i18n-ignore
        if (!Array.isArray(fields) || !fields.length) continue;
        out.push({ key: s.key, label: s.label, fields: fields.filter((f) => f && typeof f.label === 'string').map((f) => ({ label: f.label, value: f.value === null || f.value === undefined ? '' : String(f.value), ...(typeof f.edit === 'function' ? { edit: f.edit } : {}) })) });
      }
      return out;
    },
    panelTabs: () => [...full.tabs.entries()].map(([key, x]) => ({ key, addon: x.addon, title: x.title })),
    importers: () => [...registry.importers.values()],
    exporters: () => [...registry.exporters.values()],
    importerFor,
    /** An add-on importer for this file → true when it opened it as IFC. */
    async openFromAddon(file) {
      const imp = importerFor(file?.name);
      if (!imp) return false;
      const data = await imp.read(file);
      if (!data || !(data.ifc instanceof Uint8Array)) throw new Error('the add-on\'s importer returned no IFC bytes');   // i18n-ignore
      await ctx.openIfc(data.ifc, String(data.name || file.name.replace(/\.[^.]+$/, '') + '.ifc'));
      return true;
    },
    /** What an exporter's write() gets. */
    exportInput: (name) => ({ save: () => ctx.editor()?.save() ?? null, name: name || ctx.name() }),
    changed: (why) => { for (const fn of full.changeListeners) fn(why); },
  };
  if (typeof window !== 'undefined' && !ctx.noGlobal) window.ccAddons = api;
  await loader.start();
  return api;
}
