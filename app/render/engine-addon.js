/* SPDX-License-Identifier: Apache-2.0 */
/**
 * engine-addon.js — render engines from add-ons (0.8 RE.7; docs/ADDONS-SPEC.md § 16). DOM-free. Part of the shared renderer: canonical in
 * modelcraft/dev/render/, byte-identical copy in bimcraft/dev/render/ (node tools/render/sync.mjs); never edit the copy.
 *
 * An add-on's main.js hands an engine to the loader (`api.renderEngines.register(def)`, the loader's one line calls registerAddonEngine):
 *
 *   def = { id: '<add-on id>.<name>', name, where?: ['studio'], needs?: ['glb'], settings?: [field…],
 *           run?: { programs: ['python', 'python3'], script: 'engine/run.py', args: ['{script}', '{job}'] },   // runs a program in Studio
 *           render?(job, ctl) → {blob, w, h, madeBy?}  (an engine written in JS: no program, no permission) }
 * `run` is the engine.run permission: Studio finds the program (or the person picks it once), asks the person in its own dialog the first
 * time, and runs the add-on's own script, which must sit inside the signed package (the script's bytes come from the verified package
 * here, never from a path). Arguments are placeholders or plain words (engines.rs `validate_addon_run` is the authority; this file checks
 * the same things first so a bad declaration is refused when it registers, with a reason). A GPL program is never a `run` program (rule 43):
 * 'blender' heads DENIED_PROGRAMS, as in engines.rs.
 *
 *   validateAddonEngine(def, addonId) → {ok, problems[]}
 *   addonEngine(addon, def, bridge) → engine        addon = {id, name, version, files: {path → Uint8Array}} (the verified package)
 *   registerAddonEngine(registry, addon, def, win) → {ok, id, problems}      removeAddonEngines(registry, addonId) → ids removed
 */
import { engineBridge, runEngineJob } from './engines-bridge.js';
import { validateEngine, BUILTIN } from './engines.js';
import { zipPackage } from './handoff.js';

export const ADDON_PLACEHOLDERS = Object.freeze(['{script}', '{job}', '{manifest}', '{out}', '{width}', '{height}', '{samples}']);
export const DENIED_PROGRAMS = Object.freeze(['blender', 'sh', 'bash', 'zsh', 'fish', 'dash', 'csh', 'tcsh', 'ksh', 'cmd', 'powershell', 'pwsh', 'wscript', 'cscript', 'mshta', 'rundll32', 'regsvr32', 'msiexec', 'bitsadmin', 'certutil', 'curl', 'wget', 'ssh', 'scp', 'nc', 'ncat', 'sudo', 'su', 'doas', 'env', 'xargs', 'osascript', 'open', 'explorer', 'start']);
const CODE_FLAGS = new Set(['-c', '-e', '-m', '-x', '-i', '--eval', '--exec', '--command', '-command', '-encodedcommand', '--print', '-p']);
const PROGRAM_RE = /^[A-Za-z0-9][A-Za-z0-9._-]{0,39}$/;
const LITERAL_RE = /^-{0,2}[A-Za-z0-9][A-Za-z0-9_.=-]{0,39}$/;
const idOk = (id) => typeof id === 'string' && /^[a-z][a-z0-9.-]{1,63}$/.test(id) && !id.includes('..') && !id.includes('--') && !/[.-]$/.test(id);
const relOk = (s) => typeof s === 'string' && s.length > 0 && s.length <= 120 && !s.startsWith('/') && !s.includes('\\') && !s.includes(':') && s.split('/').every((p) => p && p !== '.' && p !== '..');

export function validateAddonEngine(def, addonId) {
  const p = [];
  if (!def || typeof def !== 'object') return { ok: false, problems: ['not_object'] };
  if (!idOk(addonId)) p.push('bad_addon_id');
  if (typeof def.id !== 'string' || !def.id.startsWith(addonId + '.') || !/^[a-z0-9][a-z0-9._-]{0,63}$/.test(def.id) || BUILTIN.includes(def.id)) p.push('bad_id');
  if (typeof def.name !== 'string' || !def.name.trim() || def.name.length > 60 || /[<>\u0000-\u001f]/.test(def.name)) p.push('bad_name');
  if (def.where !== undefined && (!Array.isArray(def.where) || def.where.some((w) => w !== 'studio' && w !== 'web'))) p.push('bad_where');
  if (def.needs !== undefined && (!Array.isArray(def.needs) || def.needs.some((n) => n !== 'glb'))) p.push('bad_needs');
  if ((def.run === undefined) === (typeof def.render !== 'function')) p.push('run_or_render');
  if (def.run !== undefined) {
    const r = def.run;
    if (!r || typeof r !== 'object') p.push('bad_run');
    else {
      if (!Array.isArray(r.programs) || !r.programs.length || r.programs.length > 4 || !r.programs.every((x) => PROGRAM_RE.test(x) && !/\.exe$/i.test(x))) p.push('bad_program');
      else if (r.programs.some((x) => DENIED_PROGRAMS.includes(x.toLowerCase()))) p.push('denied_program');
      if (!relOk(r.script) || !r.script.startsWith('engine/') || r.script.split('/').length > 4) p.push('bad_script');
      if (!Array.isArray(r.args) || r.args.length > 16 || !r.args.every((a) => ADDON_PLACEHOLDERS.includes(a) || (typeof a === 'string' && LITERAL_RE.test(a) && !CODE_FLAGS.has(a.split('=')[0].toLowerCase())))) p.push('bad_args');
      else if (!r.args.includes('{script}')) p.push('no_script_arg');
    }
  }
  if (!p.length) {
    const v = validateEngine({ id: def.id, name: def.name, kind: 'render', where: def.where || ['studio'], available() {}, render() {}, settings: def.settings || [] });
    for (const x of v.problems) if (x !== 'no_name') p.push(x);
  }
  return { ok: !p.length, problems: p };
}

/** The engine object for a validated declaration. A `run` engine goes through Studio's engines.rs; a `render` engine is the add-on's own JavaScript. */
export function addonEngine(addon, def, bridge) {
  const base = { id: def.id, name: def.name, kind: 'render', where: def.where || ['studio'], settings: (def.settings || []).slice(), queueable: true, source: 'addon', addon: addon.id, needsGlb: (def.needs || []).includes('glb') };
  if (!def.run) return { ...base, available: async () => ({ ok: true }), render: (job, ctl) => def.render(job, ctl) };
  const decl = { addon: addon.id, name: String(addon.name || addon.id).slice(0, 60), programs: def.run.programs.slice(), script: def.run.script, args: def.run.args.slice() };
  const script = addon.files && addon.files[def.run.script];
  return {
    ...base,
    async available() {
      if (!bridge || typeof bridge.addonFind !== 'function') return { ok: false, why: 'studio_only' };
      if (!(script instanceof Uint8Array)) return { ok: false, why: 'no_script' };
      try { const r = await bridge.addonFind(decl); return r && r.found ? { ok: true, version: '', program: r.program, allowed: !!r.allowed } : { ok: false, why: 'not_found' }; } catch { return { ok: false, why: 'unknown' }; }
    },
    async render(job, ctl = {}) {
      if (!job.pkg) throw Object.assign(new Error('no package'), { code: 'no_package' });   // i18n-ignore: caught by the caller
      if (!(script instanceof Uint8Array)) throw Object.assign(new Error('no script'), { code: 'no_script' });   // i18n-ignore: caught by the caller
      let found = await bridge.addonFind(decl).catch(() => null);
      if (!found || !found.found) { const picked = await bridge.addonPick(decl).catch(() => null); if (!picked) throw Object.assign(new Error('not_found'), { code: 'not_found' }); }   // i18n-ignore: caught by the caller
      const files = { ...job.pkg.files, [def.run.script]: script };   // the add-on's script rides in the package, from the verified bytes
      const zip = zipPackage({ manifest: job.pkg.manifest, files });
      const opts = job.opts || (job.settings && job.settings.engineOpts && job.settings.engineOpts[def.id]) || {};
      const settings = { width: String(Math.round(job.w)), height: String(Math.round(job.h)), samples: String(Math.round(Number(opts.samples) || (job.pkg.manifest.image && job.pkg.manifest.image.samples) || 64)) };
      const bytes = await runEngineJob(bridge, def.id, zip, settings, { ...ctl, start: () => bridge.addonStart(decl, zip, settings) });
      return { blob: new Blob([bytes], { type: 'image/png' }), w: job.w, h: job.h, ext: 'png', madeBy: { engine: def.name, version: '', addon: addon.id } };
    },
  };
}

export function registerAddonEngine(registry, addon, def, win = globalThis) {
  const v = validateAddonEngine(def, addon && addon.id);
  if (!v.ok) return { ok: false, id: def && def.id, problems: v.problems };
  if (registry.get(def.id)) return { ok: false, id: def.id, problems: ['taken'] };
  return registry.register(addonEngine(addon, def, engineBridge(win) || (win && win.cadcraftDesktop && win.cadcraftDesktop.engines) || null));
}

export function removeAddonEngines(registry, addonId) {
  const out = [];
  for (const id of registry.ids()) { const e = registry.get(id); if (e && e.source === 'addon' && e.addon === addonId) { registry.unregister(id); out.push(id); } }
  return out;
}
