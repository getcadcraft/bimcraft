/* SPDX-License-Identifier: Apache-2.0 */
/**
 * engine-open.js — "Open in …" (0.8 RE.6, docs/0.8-PART1.md). DOM-free. Part of the shared renderer: canonical in
 * modelcraft/dev/render/, byte-identical copy in bimcraft/dev/render/ (node tools/render/sync.mjs); never edit the copy.
 *
 * Engines of kind `open`: the scene is saved and a program opens it; nothing comes back.
 *   - Everywhere (web and Studio): `open.usd` and `open.glb` — "save the file for any program that reads it": the dialog downloads the
 *     scene as a .usdc / .usdz or a .glb (`saveAs`; the manifest is not needed by a program that just opens a file).
 *   - Studio, the programs engines.rs finds on this computer (`bridge.openList()`: usdview, the system's own program for the file
 *     type): `send` writes the package to a folder under Documents and starts the program on its file (`bridge.open`).
 *     No GPL program is ever listed (rule 43, RE.4 decided 2026-10-30): a row engines.rs might return for one (a build made with its
 *     opt-in feature) is dropped here, and the registry refuses it too (engines.js GPL_PROGRAMS).
 * Which file reads best: usdview reads USD; the system's own program is whatever the computer has for the file type; any other program
 * that reads USD or glTF opens the file the two file engines save.
 *
 *   openInEngines(bridge | null) → Promise<[engine…]>       registerOpenIn(registry, win) → Promise<[ids]>
 */
import { engineBridge } from './engines-bridge.js';
import { zipPackage, safeName } from './handoff.js';
import { isGplEngine } from './engines.js';

const usdName = (pkg) => ['scene.usdc', 'scene.usdz', 'scene.usda'].find((n) => pkg.files[n]) || '';
const KINDS = Object.freeze({ usd: { nameKey: 'render.engine.open.usd', needsGlb: false }, glb: { nameKey: 'render.engine.open.glb', needsGlb: true } });
const NAME_KEY = Object.freeze({ system: 'render.engine.open.system' });

/** "Save the file for any program that reads it": USD or glTF. */
function fileEngine(kind) {
  return {
    id: 'open.' + kind, nameKey: KINDS[kind].nameKey, kind: 'open', where: ['web', 'studio'], needsGlb: KINDS[kind].needsGlb, queueable: false, settings: [],
    available: () => ({ ok: true }),
    send: async () => { throw Object.assign(new Error('saves a file'), { code: 'save_only' }); },   // i18n-ignore: caught by the caller
    /** → {blob, name}: the scene file alone (the package's own file, whichever USD form the app wrote). */
    async saveAs(pkg, { base = 'scene' } = {}) {
      if (kind === 'glb') {
        if (!pkg.files['scene.glb']) throw Object.assign(new Error('no glb'), { code: 'no_glb' });   // i18n-ignore: caught by the caller
        return { blob: new Blob([pkg.files['scene.glb']], { type: 'model/gltf-binary' }), name: safeName(base) + '.glb' };
      }
      const n = usdName(pkg);
      if (!n) throw Object.assign(new Error('no usd'), { code: 'no_usd' });   // i18n-ignore: caught by the caller
      return { blob: new Blob([pkg.files[n]], { type: 'model/vnd.usd' }), name: safeName(base) + n.slice(n.lastIndexOf('.')) };
    },
  };
}

/** A program engines.rs found: Studio writes the package to a folder and opens the file in the program. */
function programEngine(bridge, row) {
  const reads = (row.reads || []).filter((k) => k in KINDS);
  return {
    id: 'open.' + row.id, ...(NAME_KEY[row.id] ? { nameKey: NAME_KEY[row.id] } : { name: row.name }), kind: 'open', where: ['studio'], queueable: false, programId: row.id,
    needsGlb: (opts) => opts && opts.format === 'glb',
    settings: reads.length > 1 ? [{ key: 'format', type: 'select', default: reads[0], labelKey: 'render.engine.open.format', options: reads.map((k) => ({ value: k, labelKey: KINDS[k].nameKey })) }] : [],
    available: async () => { try { const r = (await bridge.openList()).find((x) => x.id === row.id); return r && r.found ? { ok: true, version: r.version || '' } : { ok: false, why: 'not_found' }; } catch { return { ok: false, why: 'unknown' }; } },
    async send(pkg, { opts = {}, base = 'scene' } = {}) {
      const kind = reads.includes(opts.format) ? opts.format : reads[0];
      if (kind === 'glb' && !pkg.files['scene.glb']) throw Object.assign(new Error('no glb'), { code: 'no_glb' });   // i18n-ignore: caught by the caller
      const folder = await bridge.open(row.id, zipPackage(pkg), { kind, name: base });
      return { note: String(folder || '') };
    },
  };
}

export async function openInEngines(bridge) {
  const out = [fileEngine('usd'), fileEngine('glb')];
  if (bridge && typeof bridge.openList === 'function') {
    let rows = [];
    try { rows = await bridge.openList(); } catch { rows = []; }
    for (const r of rows) if (r && /^[a-z0-9]+$/.test(r.id) && !isGplEngine(r.id)) out.push(programEngine(bridge, r));
  }
  return out;
}

export async function registerOpenIn(registry, win = globalThis) {
  const made = [];
  for (const e of await openInEngines(engineBridge(win) || (win && win.cadcraftDesktop && win.cadcraftDesktop.engines) || null)) {
    if (!registry.get(e.id)) { const r = registry.register(e); if (r.ok) made.push(e.id); }
  }
  return made;
}
