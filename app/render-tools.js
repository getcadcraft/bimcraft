/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — tool names, descriptions and results are read by the assistant program, not shown to the person. */
/**
 * render-tools.js — the Render dialog for AI assistants (0.7 AS.6, session assistants-gaps): `render_still` and `render_queue`.
 * Shared by ModelCraft and BimCraft: canonical in modelcraft/dev/, byte-identical copy in bimcraft/dev/ (bin/test-agents.mjs
 * checks it). Each app's agents.js registers these tools with the app's own Render dialog hooks.
 *
 * No second renderer: a picture goes through the same calls the Render dialog's Render button makes (render/render-ui.js go():
 * the app's scene adapter, then render/render-core.js renderStill for the fast render or render/render-pt.js pathTraceStill for
 * high quality), and Save's writers (render/pt-output.js: EXR, the .ccrender file). The queue is the dialog's own (render/queue.js,
 * the same IndexedDB per app, so the jobs show in Render › Queue), run by render-pt.js queueRenderer as Run does.
 *
 *   renderTools(C, prepare) → tool definitions for C.tool()
 *     prepare() → Promise<{ scene(settings) → scene, viewSize() → {w, h}, settings() → the dialog's remembered settings | null,
 *                           fileBase() → string, download(blob, name), appName, scenes?() → [name], goScene?(i) → Promise }>
 *       (the same hooks the app hands openRenderDialog; scenes/goScene: ModelCraft's saved scenes)
 *   renderSettings(base, a) · renderSize(settings, view, a)   DOM-free (Node tests)
 *
 * Nothing in the model changes (no undo step). One picture at a time per window.
 */
import { QUALITY, SKIES, MAX_SIDE, cleanSettings, sizeFor } from './render/looks.js';

export const RENDER_FORMATS = Object.freeze({ png: { ext: 'png', mime: 'image/png' }, exr: { ext: 'exr', mime: 'image/x-exr' }, ccrender: { ext: 'ccrender', mime: 'application/octet-stream' } });
/** Inline pictures (returned to the assistant rather than written or downloaded): at most this many pixels on the long side. */
export const INLINE_MAX = 1600;

/** The dialog's remembered settings with the assistant's choices on top (cleaned as the dialog cleans them). */
export function renderSettings(base, a = {}) {
  const s = { ...(base && typeof base === 'object' ? base : {}) };
  if (a.mode) s.mode = a.mode;
  if (a.quality) s.quality = a.quality;
  if (a.sky) s.sky = a.sky;
  if (typeof a.denoise === 'boolean') s.denoise = a.denoise;
  if (typeof a.exposure === 'number') s.exposure = a.exposure;
  return cleanSettings(s);
}

/** The picture's size: width and height as given (one of them: the view's shape), else the dialog's size setting. */
export function renderSize(settings, view, a = {}) {
  const vw = Math.max(1, view?.w || 1), vh = Math.max(1, view?.h || 1);
  let w, h;
  if (a.width && a.height) { w = a.width; h = a.height; }
  else if (a.width) { w = a.width; h = Math.round((a.width * vh) / vw); }
  else if (a.height) { h = a.height; w = Math.round((a.height * vw) / vh); }
  else return sizeFor(settings, vw, vh);
  const k = Math.min(1, MAX_SIDE / w, MAX_SIDE / h);
  return { w: Math.max(1, Math.round(w * k)), h: Math.max(1, Math.round(h * k)) };
}

const obj = (properties, required = []) => ({ type: 'object', properties, required, additionalProperties: false });
const SIDE = { type: 'integer', minimum: 16, maximum: MAX_SIDE };
const PATH = { type: 'string', minLength: 1, maxLength: 4096, description: 'Studio: a file inside the folders the person allowed (Settings › Assistants › Folders).' };
const SCENE = { anyOf: [{ type: 'string', minLength: 1, maxLength: 80 }, { type: 'integer', minimum: 1 }], description: 'ModelCraft: a saved scene (its name, or its number from 1); the view goes to it first, as scene_show does. Default: the view as it is.' };
const b64 = (bytes) => { let s = ''; for (let i = 0; i < bytes.length; i += 32768) s += String.fromCharCode(...bytes.subarray(i, i + 32768)); return btoa(s); };
const appKey = () => { try { return (globalThis.location?.pathname || '').split('/').filter(Boolean)[1] || 'app'; } catch { return 'app'; } };   // as queue-ui.js names its queue

export function renderTools(C, prepare, { toolResult = null } = {}) {
  let busy = false;
  const once = async (fn) => {
    if (busy) throw new Error('A render for the assistant is already running in this window; wait for it to finish.');
    busy = true;
    try { return await fn(); } finally { busy = false; }
  };
  /** A saved scene the assistant named → its index, or an error listing the scenes. */
  const sceneIndex = (o, q) => {
    if (q === undefined || q === null) return -1;
    if (!o.scenes || !o.goScene) throw new Error('This app has no saved scenes: the picture is of the view as it is.');
    const names = o.scenes();
    const i = typeof q === 'number' ? q - 1 : names.findIndex((n) => String(n).toLowerCase() === String(q).toLowerCase());
    if (!(i >= 0 && i < names.length)) throw new Error('No scene ' + JSON.stringify(q) + '. Scenes: ' + (names.join(', ') || 'none') + '.');
    return i;
  };
  const write = async (path, bytes, overwrite) => {
    if (!C.files.available) throw new Error('File paths work only in CadCraft Studio (the desktop app).');
    return C.files.write(path, bytes, { overwrite });
  };

  const still = {
    name: 'render_still', group: 'export', title: 'Render a picture',
    description: 'A rendered picture of the 3D view (or, in ModelCraft, of a saved scene), as the Render dialog\'s Render button makes it, with the person\'s Render settings unless given here: mode "fast" (the quick renderer) or "hq" (the path tracer: WebGPU on the graphics card, else WebGL); quality draft / good / best = 16 / 64 / 256 samples; width and height in pixels (default the dialog\'s size); seconds = a time limit for "hq". Format png (default), or exr / ccrender (the linear picture with its render elements: "hq" only). With a path (Studio) the file is written there; without one a PNG up to ' + INLINE_MAX + ' px comes back to you as a picture, anything else downloads. Nothing in the model changes.',
    inputSchema: obj({
      mode: { type: 'string', enum: ['fast', 'hq'], description: '"fast" = the quick renderer, "hq" = the path tracer. Default: the Render dialog\'s setting.' }, quality: { type: 'string', enum: Object.keys(QUALITY), description: 'draft / good / best = 16 / 64 / 256 samples.' }, width: { ...SIDE, description: 'Picture width in pixels. Default: the dialog\'s size.' }, height: { ...SIDE, description: 'Picture height in pixels. Default: the dialog\'s size.' },
      seconds: { type: 'integer', minimum: 1, maximum: 3600, description: 'Time limit in seconds for "hq".' }, engine: { type: 'string', enum: ['auto', 'webgl'], default: 'auto', description: '"hq" only: webgl keeps the path tracer off WebGPU.' },
      sky: { type: 'string', enum: Object.keys(SKIES), description: 'The sky to light the picture with. Default: the dialog\'s setting.' }, denoise: { type: 'boolean', description: 'Smooth the noise of an "hq" picture. Default: the dialog\'s setting.' }, scene: SCENE,
      format: { type: 'string', enum: Object.keys(RENDER_FORMATS), default: 'png', description: 'png, or exr / ccrender (the linear picture with its render elements; "hq" only).' }, path: PATH, overwrite: { type: 'boolean', default: false, description: 'Replace the file at path when it exists. Otherwise an existing file is an error.' },
      download: { type: 'boolean', default: false, description: 'Download the file even when it could come back as a picture.' },
    }),
    run: (a) => once(async () => {
      const fmt = a.format || (a.path && /\.(png|exr|ccrender)$/i.exec(a.path)?.[1].toLowerCase()) || 'png';
      if (a.path && !new RegExp('\\.' + RENDER_FORMATS[fmt].ext + '$', 'i').test(a.path)) throw new Error('A ' + fmt + ' file ends in .' + RENDER_FORMATS[fmt].ext + '.');
      const o = await prepare();
      const s = renderSettings(o.settings?.() || null, a);
      if (fmt !== 'png' && s.mode !== 'hq') throw new Error(fmt.toUpperCase() + ' keeps the path tracer\'s linear picture: render with mode "hq".');
      const si = sceneIndex(o, a.scene);
      if (si >= 0) await o.goScene(si);
      const { w, h } = renderSize(s, o.viewSize(), a);
      const scene = o.scene(s);
      let r = null;
      try {
        if (!scene.items.some((it) => !it.lines)) throw new Error('There is nothing to render in the view.');
        const noop = () => {};
        if (s.mode === 'hq') {
          const [PT, SE] = await Promise.all([import('./render/render-pt.js'), import('./render/session.js')]);
          r = await PT.pathTraceStill(scene, s, { w, h, onProgress: noop, seconds: a.seconds || 0, ...(a.engine === 'webgl' ? { engine: 'webgl' } : {}), hdri: SE.hdriFor(s), lut: SE.lutFor(s), volumeData: SE.volumeFor(s) });
        } else {
          const RC = await import('./render/render-core.js');
          r = await RC.renderStill(scene, s, { w, h, onProgress: noop });
          r.engine = 'webgl-fast';
        }
      } finally { scene.dispose?.(); }
      try {
        if (!r.blob) throw new Error('The render stopped before its first pass.');
        let bytes;
        if (fmt === 'png') bytes = new Uint8Array(await r.blob.arrayBuffer());
        else {
          if (!r.layers) throw new Error('This engine (' + r.engine + ') keeps no linear picture: EXR and .ccrender need WebGPU (engine auto).');
          const OUT = await import('./render/pt-output.js');
          bytes = fmt === 'exr' ? OUT.exrBytes(r.layers, { samples: r.passes, app: o.appName || 'CadCraft' })
            : OUT.writeRenderFile(r.layers, s, { samples: r.passes, app: o.appName || 'CadCraft', created: new Date().toISOString() });
        }
        const info = { format: fmt, width: r.w, height: r.h, mode: s.mode, quality: s.quality, samples: r.passes, ms: r.ms, engine: r.engine, ...(r.fallback && r.fallback !== 'no-webgpu' ? { fallback: r.fallback } : {}), ...(r.stopped || r.budget ? { stoppedEarly: true } : {}), ...(si >= 0 ? { scene: o.scenes()[si] } : {}), bytes: bytes.length };
        const name = (o.fileBase ? o.fileBase() : 'render') + ' render.' + RENDER_FORMATS[fmt].ext;
        if (a.path) return { ...info, path: await write(a.path, bytes, a.overwrite) };
        if (fmt === 'png' && !a.download && toolResult && Math.max(r.w, r.h) <= INLINE_MAX) return toolResult([{ type: 'image', data: b64(bytes), mimeType: 'image/png' }], info);
        o.download(new Blob([bytes], { type: RENDER_FORMATS[fmt].mime }), name);
        return { ...info, downloaded: name };
      } finally { r?.release?.(); }
    }),
  };

  const JOB = obj({ name: { type: 'string', maxLength: 120 }, scene: SCENE, quality: { type: 'string', enum: Object.keys(QUALITY) }, width: SIDE, height: SIDE });
  const queue = {
    name: 'render_queue', group: 'export', title: 'Render queue',
    description: 'The Render dialog\'s queue (high-quality pictures that render one after another, kept in this browser until removed): add pictures (each one packed now, as the dialog\'s "Add to the queue" does: the view as it is, or in ModelCraft a saved scene; the person\'s Render settings with the quality and size given), then run every job that waits, in order, and wait for them. Finished pictures go into a folder (Studio) as "<name>.png", else download when download is true, else stay in Render › Queue for the person. Without add it lists the queue (and runs it when run is true). Needs WebGPU (the path tracer on the graphics card).',
    inputSchema: obj({
      add: { type: 'array', items: JOB, minItems: 1, maxItems: 50, description: 'Pictures to add to the queue, one object per picture.' }, run: { type: 'boolean', default: true, description: 'Run every waiting job, in order, and wait for them. false only adds or lists.' },
      folder: { ...PATH, description: 'Studio: a folder inside the allowed ones for the finished pictures of this call.' },
      download: { type: 'boolean', default: false, description: 'Download the finished pictures when no folder is given.' }, overwrite: { type: 'boolean', default: false, description: 'Replace files that exist in the folder. Otherwise an existing file is an error.' },
    }),
    run: (a) => once(async () => {
      const o = await prepare();
      const [{ openQueue }, PT, SE] = await Promise.all([import('./render/queue.js'), import('./render/render-pt.js'), import('./render/session.js')]);
      const q = openQueue({ app: appKey() });
      const added = [];
      const run = a.run !== false;
      if (run && (!globalThis.navigator?.gpu || !(await (await import('./render/pt-gpu.js')).gpuAdapter()))) throw new Error('The render queue needs WebGPU (the path tracer on the graphics card) and this window has none; render_still with engine "webgl" works without it.');
      for (const [k, j] of (a.add || []).entries()) {
        const s = renderSettings(o.settings?.() || null, { mode: 'hq', quality: j.quality });
        const si = sceneIndex(o, j.scene);
        if (si >= 0) await o.goScene(si);
        const { w, h } = renderSize(s, o.viewSize(), j);
        const scene = o.scene(s);
        try {
          if (!scene.items.some((it) => !it.lines)) throw new Error('Job ' + (k + 1) + ': there is nothing to render in the view.');
          scene.imagePixels = await PT.imagePixels(scene); scene.hdri = SE.hdriFor(s); scene.volumeData = SE.volumeFor(s);
          const name = j.name || ((o.fileBase ? o.fileBase() : '') + (si >= 0 ? ' — ' + o.scenes()[si] : '') + ' — ' + (k + 1));
          added.push((await q.addStill({ name, scene, settings: s, w, h })).id);
        } finally { scene.dispose?.(); }
      }
      if (run && (await q.list()).some((j) => ['waiting', 'paused', 'running'].includes(j.status))) {
        const renderer = PT.queueRenderer({ lanDevices: o.lanDevices || null });
        try { await q.run({ render: renderer }); } finally { renderer.dispose?.(); }
      }
      const rows = [];
      for (const j of await q.list()) {
        const row = { id: j.id, name: j.name, status: j.status, kind: j.kind, width: j.w, height: j.h, quality: j.settings?.quality, ...(j.error ? { error: j.error } : {}), ...(added.includes(j.id) ? { added: true } : {}) };
        if (added.includes(j.id) && j.status === 'done' && (a.folder || a.download)) {
          const out = await q.output(j.id);
          const file = String(j.name || 'render').replace(/[\\/:*?"<>|\u0000-\u001f]+/g, ' ').trim().slice(0, 100) + '.png';
          if (out && a.folder) row.path = await write(a.folder.replace(/[\\/]+$/, '') + '/' + file, new Uint8Array(await out.blob.arrayBuffer()), a.overwrite);
          else if (out) { o.download(out.blob, file); row.downloaded = file; }
        }
        rows.push(row);
      }
      return { jobs: rows, added: added.length, ran: run };
    }),
  };
  return [still, queue];
}
