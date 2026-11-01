/* SPDX-License-Identifier: Apache-2.0 */
/**
 * engines.js — the render engine interface and registry (0.8 RE.1, docs/0.8-PART1.md D1). DOM-free, no imports, so Node tests it
 * as is. Part of the shared renderer: canonical in modelcraft/dev/render/, byte-identical copy in bimcraft/dev/render/
 * (node tools/render/sync.mjs); never edit the copy.
 *
 * An engine is a plain object:
 *   { id, name | nameKey, kind: 'internal' | 'render' | 'link' | 'open', where: ['web', 'studio'],
 *     available() → {ok, version?, why?}   (sync or async; why = a code: 'not_found', 'studio_only', 'no_script', …)
 *     settings: [field…]                   typed fields the dialog draws and the settings keep (see FIELD_TYPES)
 *     render(job, {signal, onProgress}) → {blob, w, h} | null      kind 'internal' | 'render'
 *     send(scene, opts) → {…}              kind 'link' | 'open' (the package goes to the program; nothing comes back)
 *     queueable: bool                      a job for it may wait in the render queue (queue.js) }
 *
 * Our own two engines are wrapped first (BUILTIN): `fast` (the raster still, render-core.js) and `pt` (the path tracer, GPU or
 * CPU, render-pt.js). Everything else is a plug-in (an Unreal link, "Open in …", an add-on's engine, RE.7).
 *
 * Rule 43 (owner 2026-10-28; decided for 0.8 on 2026-10-30, RE.4): no GPL program is launched through Studio or listed as an engine.
 * Our own path tracer is the engine; `GPL_PROGRAMS` names the programs the registry refuses whatever registers them (a Studio bridge,
 * an add-on, "Open in …"): an engine id that is one of them, or ends in ".<one of them>", is refused with the code 'gpl_program'.
 *
 *   createRegistry({ where: 'web' | 'studio', onChange? }) → registry
 *     registry.register(def) → {ok, id, problems}      registry.unregister(id)      registry.get(id)      registry.ids()
 *     registry.describe(t?) → Promise<[{id, name, kind, ok, why, version, saveOnly, settings}]>   what the dialog's Engine select shows
 *     registry.resolve(settings) → engine | null      the engine a settings object asks for (falls back to a built-in)
 *   engineFor(settings), modeFor(id), cleanEngineId(v), cleanEngineOpts(v, fields), validateEngine(def), defaultEngine(storage)
 */

export const BUILTIN = Object.freeze(['fast', 'pt']);
export const ENGINE_KINDS = Object.freeze(['internal', 'render', 'link', 'open']);
export const WHERES = Object.freeze(['web', 'studio']);
export const FIELD_TYPES = Object.freeze(['select', 'number', 'check', 'text']);
export const ENGINE_KEY = 'cc-render:engine';   // the person's default engine (the Settings default; localStorage)
const ID_RE = /^[a-z0-9][a-z0-9._-]{0,63}$/;
/** Programs never offered as an engine or an "Open in" target (rule 43: GPL). engines.rs keeps the same name in DENIED_PROGRAMS. */
export const GPL_PROGRAMS = Object.freeze(['blender']);
/** Does this engine id name a GPL program ('blender', 'open.blender', 'my-addon.blender')? */
export function isGplEngine(id) { const last = String(id || '').toLowerCase().split('.').pop(); return GPL_PROGRAMS.includes(last); }

/** An engine id from anything (a file, localStorage): the id, or '' when it is not one. */
export function cleanEngineId(v) { return typeof v === 'string' && ID_RE.test(v) ? v : ''; }

/** The engine id a settings object asks for: its own `engine`, else the built-in its `mode` names. */
export function engineFor(settings) {
  const id = cleanEngineId(settings && settings.engine);
  return id || (settings && settings.mode === 'hq' ? 'pt' : 'fast');
}

/** The `mode` that goes with an engine id: 'fast' for the raster engine, 'hq' for the path tracer and every outside engine (they take the quality settings). */
export function modeFor(id) { return id === 'fast' ? 'fast' : 'hq'; }

/**
 * An outside engine's own settings (typed fields), cleaned against the engine's `settings` list. Unknown keys dropped; a select keeps
 * only its options, a number is clamped to min/max, a check is a boolean, a text is ≤ 200 characters without control characters.
 */
export function cleanEngineOpts(v, fields) {
  const o = v && typeof v === 'object' && !Array.isArray(v) ? v : {};
  const out = {};
  for (const f of Array.isArray(fields) ? fields : []) {
    const x = o[f.key];
    if (f.type === 'select') out[f.key] = (f.options || []).some((p) => String(p.value) === String(x)) ? x : f.default;
    else if (f.type === 'number') { const n = Number(x); out[f.key] = Number.isFinite(n) ? Math.min(f.max ?? n, Math.max(f.min ?? n, n)) : f.default; }
    else if (f.type === 'check') out[f.key] = typeof x === 'boolean' ? x : !!f.default;
    else out[f.key] = typeof x === 'string' ? x.replace(/[\u0000-\u001f]/g, '').slice(0, 200) : (f.default ?? '');
  }
  return out;
}

/** Is `def` an engine the registry will take? → {ok, problems[]} (codes, never prose: the dialog words them). */
export function validateEngine(def) {
  const p = [];
  if (!def || typeof def !== 'object') return { ok: false, problems: ['not_object'] };
  if (!cleanEngineId(def.id)) p.push('bad_id');
  else if (isGplEngine(def.id) || (typeof def.programId === 'string' && isGplEngine(def.programId))) p.push('gpl_program');
  if (typeof def.name !== 'string' && typeof def.nameKey !== 'string') p.push('no_name');
  if (!ENGINE_KINDS.includes(def.kind)) p.push('bad_kind');
  if (!Array.isArray(def.where) || !def.where.length || def.where.some((w) => !WHERES.includes(w))) p.push('bad_where');
  if (typeof def.available !== 'function') p.push('no_available');
  if ((def.kind === 'internal' || def.kind === 'render') && typeof def.render !== 'function') p.push('no_render');
  if ((def.kind === 'link' || def.kind === 'open') && typeof def.send !== 'function') p.push('no_send');
  const keys = new Set();
  for (const f of def.settings === undefined ? [] : Array.isArray(def.settings) ? def.settings : [null]) {
    if (!f || typeof f.key !== 'string' || !/^[a-zA-Z][a-zA-Z0-9_]{0,31}$/.test(f.key) || keys.has(f.key) || !FIELD_TYPES.includes(f.type)) { p.push('bad_field'); break; }
    keys.add(f.key);
    if (f.type === 'select' && !(Array.isArray(f.options) && f.options.length && f.options.every((x) => x && 'value' in x))) { p.push('bad_field'); break; }
  }
  return { ok: !p.length, problems: p };
}

/** The person's default engine, read from `storage` (localStorage or a stand-in); '' when none or storage is unavailable. */
export function defaultEngine(storage) {
  try { return cleanEngineId(storage && storage.getItem(ENGINE_KEY)); } catch { return ''; }
}
export function saveDefaultEngine(storage, id) {
  try { if (cleanEngineId(id)) storage.setItem(ENGINE_KEY, id); } catch { /* private window: the file's own setting still holds */ }
}

/** The two built-ins. `render` of `pt` hands a packed scene to the queue's renderer; `fast` is drawn by the dialog itself (queueable: false). */
function builtins() {
  const ok = () => ({ ok: true });
  return [
    { id: 'fast', nameKey: 'render.engine.fast', kind: 'internal', where: ['web', 'studio'], available: ok, settings: [], queueable: false,
      render: async () => { throw Object.assign(new Error('fast is drawn by the dialog'), { code: 'not_queueable' }); } },   // i18n-ignore: caught by the caller
    { id: 'pt', nameKey: 'render.engine.pt', kind: 'internal', where: ['web', 'studio'], available: ok, settings: [], queueable: true,
      async render(job, ctl = {}) {
        const { queueRenderer } = await import('./render-pt.js');
        const r = queueRenderer({ lanDevices: job.lanDevices || null });
        try { return await r.packed(job.pack, job.settings, ctl); } finally { r.dispose?.(); }
      } },
  ];
}

export function createRegistry({ where = 'web', onChange = null } = {}) {
  const map = new Map();
  const reg = {
    where,
    register(def) {
      const v = validateEngine(def);
      if (!v.ok) return { ok: false, id: def && def.id, problems: v.problems };
      if (BUILTIN.includes(def.id) && map.has(def.id)) return { ok: false, id: def.id, problems: ['builtin'] };
      map.set(def.id, { settings: [], queueable: def.kind === 'render', ...def });
      onChange?.();
      return { ok: true, id: def.id, problems: [] };
    },
    unregister(id) { if (BUILTIN.includes(id)) return false; const r = map.delete(id); if (r) onChange?.(); return r; },
    get(id) { return map.get(id) || null; },
    ids() { return [...map.keys()]; },
    /** The engine `settings` asks for; an id nothing registered (an add-on removed, a file from another machine) falls back to the built-in its mode names. */
    resolve(settings) { return map.get(engineFor(settings)) || map.get(settings && settings.mode === 'hq' ? 'pt' : 'fast') || null; },
    /** The rows for the Engine select. A render/link engine outside Studio is "save only" (D4): the page saves the package, nothing runs. */
    async describe(t = null) {
      const rows = [];
      for (const e of map.values()) {
        let a;
        try { a = (await e.available()) || { ok: false, why: 'unknown' }; } catch { a = { ok: false, why: 'unknown' }; }
        const here = e.where.includes(where);
        const saveOnly = !here && (e.kind === 'render' || e.kind === 'link' || e.kind === 'open') && e.where.includes('studio');
        rows.push({
          id: e.id, kind: e.kind, name: e.nameKey && t ? t(e.nameKey) : e.name || e.nameKey,
          ok: here ? !!a.ok : saveOnly, why: here ? (a.ok ? '' : a.why || 'unknown') : saveOnly ? 'save_only' : 'studio_only',
          version: a.version || '', saveOnly, settings: e.settings,
        });
      }
      // built-ins first, then the rest in the order they arrived (the sort is stable)
      return rows.sort((a, b) => (BUILTIN.includes(a.id) ? 0 : 1) - (BUILTIN.includes(b.id) ? 0 : 1));
    },
  };
  for (const b of builtins()) map.set(b.id, b);
  return reg;
}

const shared = new Map();
/** One registry per page and place: the dialog, the queue and add-ons (RE.7) all talk to this one. */
export function sharedRegistry(where = 'web') {
  if (!shared.has(where)) shared.set(where, createRegistry({ where }));
  return shared.get(where);
}
