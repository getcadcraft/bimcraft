/* SPDX-License-Identifier: Apache-2.0 */
/**
 * engine-unreal.js — "Send to Unreal" (0.8 RE.5, docs/0.8-PART1.md O2: the file link). DOM-free. Part of the shared renderer:
 * canonical in modelcraft/dev/render/, byte-identical copy in bimcraft/dev/render/ (node tools/render/sync.mjs); never edit the copy.
 *
 * An engine of kind `link` (Studio only): the person picks their project folder once (`pickProject`), then each Render ▸ Send writes
 * `<project>/CadCraft/<name>/` through Studio's engines.rs: the scene, the manifest, IES files and textures are replaced; the stage's
 * root layer and the person's own layer are written once and never again (docs/spikes/RE.5.md), so their edits in Unreal cannot be lost
 * to a reload. The plug-in in the project (its own repo, tools/render/engines/unreal/plugin/ until then) opens the stage, applies the
 * manifest, reloads when the scene file changes and renders a chosen camera through Movie Render Queue.
 *
 *   unrealEngine(bridge) → engine {id 'unreal', kind 'link', where ['studio'], settings [], available(), send(pkg, {base}) → {note}}
 *   registerUnreal(registry, win) → ['unreal'] | []
 *
 * The same folder without Studio (0.8 RE.5, `render_PART_4`): the web edition, or a Studio that has no Unreal found, saves it as a zip.
 *   unrealFolderName(name) → the folder's name, exactly as engines.rs `safe_folder_name` makes it
 *   unrealLayers(name, sceneFile) → {root, user}   the stage's root layer and the person's empty layer, byte for byte engines.rs `unreal_layers`
 *   unrealFolder(pkg, base, {stage}) → {folder, files: {'<folder>/<file>': bytes}}   what engines.rs `unreal_send` writes into
 *     <project>/CadCraft/<folder>/; `stage: false` leaves the root and user layers out (a later send: the person's own layer is kept)
 *   unrealFileEngine() → engine {id 'open.unreal', kind 'open', where ['web', 'studio'], saveAs(pkg, {base, opts}) → {blob, name}}
 *   registerUnrealFile(registry) → ['open.unreal'] | []
 * `available()` is the program's own state (found + version, or why not), plus whether a project folder is set: "ok" needs the program
 * found; a missing project is asked for at send time (`no_project`), with the picker offered by the dialog's "Choose project…" button.
 */
import { engineBridge, availability } from './engines-bridge.js';
import { zipPackage } from './handoff.js';

export function unrealEngine(bridge) {
  return {
    id: 'unreal', name: 'Unreal Engine', kind: 'link', where: ['studio'], queueable: false, settings: [],   // i18n-ignore: an engine's own name
    async available() {
      const a = await availability(bridge, 'unreal');
      if (!a.ok) return a;
      let project = '';
      try { project = (await bridge.project()) || ''; } catch { project = ''; }
      return { ...a, project };
    },
    /** The person's project folder: the one remembered, or null; `pick()` opens Studio's folder dialog (a folder with a .uproject). */
    async project() { try { return (await bridge.project()) || null; } catch { return null; } },
    async pick() { return (await bridge.pickProject()) || null; },
    async send(pkg, { base = 'scene' } = {}) {
      if (!(await this.project())) {
        const p = await this.pick();
        if (!p) throw Object.assign(new Error('no_project: pick your Unreal project folder first'), { code: 'no_project' });   // i18n-ignore: caught by the caller
      }
      try { return { note: String(await bridge.send(zipPackage(pkg), { name: base })) }; } catch (e) {
        const m = /^([a-z0-9_]+):/.exec(String((e && e.message) || e));
        throw Object.assign(new Error(String((e && e.message) || e)), { code: m ? m[1] : 'bridge' });   // i18n-ignore: caught by the caller
      }
    },
  };
}

export function registerUnreal(registry, win = globalThis) {
  const bridge = engineBridge(win) || (win && win.cadcraftDesktop && win.cadcraftDesktop.engines) || null;
  if (!bridge || typeof bridge.send !== 'function' || registry.get('unreal')) return [];
  return registry.register(unrealEngine(bridge)).ok ? ['unreal'] : [];
}

/** engines.rs `safe_folder_name`: letters, digits, space . _ - (60 at most), trimmed, no leading dots; '' → 'scene'. */
export function unrealFolderName(name) {
  const s = [...String(name ?? '')].filter((c) => /[\p{L}\p{N}]/u.test(c) || ' ._-'.includes(c)).slice(0, 60).join('').trim().replace(/^\.+/, '').trim();
  return s || 'scene';
}

/** engines.rs `unreal_layers`: the root layer (the person's layer over the scene) and the person's own layer, empty. */
export function unrealLayers(name, sceneFile) {
  const n = unrealFolderName(name);
  return {
    root: `#usda 1.0\n(\n    defaultPrim = "World"\n    upAxis = "Z"\n    metersPerUnit = 1\n    subLayers = [\n        @./${n}.user.usda@,\n        @./${sceneFile}@\n    ]\n)\n`,
    user: '#usda 1.0\n(\n    defaultPrim = "World"\n)\n',
  };
}

/** What `unreal_send` writes, as zip entries under the folder's name: the package's files, then (stage) the two layers. Throws {code}. */
export function unrealFolder(pkg, base = 'scene', { stage = true } = {}) {
  const fail = (code) => { throw Object.assign(new Error(code), { code }); };   // i18n-ignore: caught by the caller
  if (!pkg || !pkg.files || !pkg.files['cadcraft-render.json']) fail('no_manifest');
  const scene = ['scene.usdc', 'scene.usdz', 'scene.usda'].find((n) => pkg.files[n]);
  if (!scene) fail('no_usd');
  const folder = unrealFolderName(base), enc = new TextEncoder(), files = {};
  for (const [n, d] of Object.entries(pkg.files)) files[folder + '/' + n] = d;
  if (stage) {
    const { root, user } = unrealLayers(folder, scene);
    files[folder + '/' + folder + '.root.usda'] = enc.encode(root);
    files[folder + '/' + folder + '.user.usda'] = enc.encode(user);
  }
  return { folder, files };
}

export const UNREAL_FILE_FIELDS = Object.freeze([{ key: 'stage', type: 'check', default: true, labelKey: 'render.engine.unreal.stage' }]);

/** "Unreal project folder (.zip)": the folder Send to Unreal writes, saved for the person to unzip into <project>/CadCraft/. */
export function unrealFileEngine() {
  return {
    id: 'open.unreal', nameKey: 'render.engine.open.unreal', kind: 'open', where: ['web', 'studio'], queueable: false, settings: UNREAL_FILE_FIELDS.slice(),
    available: () => ({ ok: true }),
    send: async () => { throw Object.assign(new Error('saves a file'), { code: 'save_only' }); },   // i18n-ignore: caught by the caller
    async saveAs(pkg, { base = 'scene', opts = {} } = {}) {
      const { folder, files } = unrealFolder(pkg, base, { stage: opts.stage !== false });
      const zip = zipPackage({ files });
      return { blob: new Blob([zip], { type: 'application/zip' }), name: folder.replace(/ /g, '_') + '.unreal.zip' };   // i18n-ignore: media type
    },
  };
}

export function registerUnrealFile(registry) {
  if (registry.get('open.unreal')) return [];
  return registry.register(unrealFileEngine()).ok ? ['open.unreal'] : [];
}
