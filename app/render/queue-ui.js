/* SPDX-License-Identifier: Apache-2.0 */
/**
 * queue-ui.js — the Render queue section of the Render and video dialogs (0.7 RN.10; queue.js): the jobs waiting and done, Run /
 * Stop, each job's file to download or remove, Clear finished. While it runs the screen is kept awake (the Screen Wake Lock
 * API where the browser has it), so an overnight queue is not stopped by the screen saver; a closed page stops it and the next
 * Run goes on from the frame it reached.
 *
 *   mountQueue({ el, t, box, o, getSettings }) → { addStill(), addFrames(video) , refresh(), dispose() }
 *     o = the dialog's options (scene(settings), viewSize(), fileBase(), download(blob, name), lanDevices?, length?())
 */
import { openQueue } from './queue.js';
import { sizeFor, cleanSettings } from './looks.js';
import { BUILTIN, sharedRegistry, engineFor } from './engines.js';

const appKey = () => { try { return (globalThis.location?.pathname || '').split('/').filter(Boolean)[1] || 'app'; } catch { return 'app'; } };
let shared = null;   // one queue (and runner) per page, whichever dialog shows it

export function mountQueue({ el, t, box, o, getSettings }) {
  shared ||= { q: openQueue({ app: appKey() }), renderer: null, abort: null, wake: null, listeners: new Set() };
  const S = shared, q = S.q;
  const list = el('ul', { className: 'cc-render-queue', dataset: { renderQueueList: '' } });
  const runBtn = el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { renderQueueRun: '' } }, t('render.queue.run'));
  const clearBtn = el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { renderQueueClear: '' } }, t('render.queue.clear'));
  const note = el('p', { className: 'cc-render-note', dataset: { renderQueueNote: '' } }, t('render.queue.hint'));
  box.append(list, el('div', { className: 'cc-render-date' }, runBtn, clearBtn), note);
  const progress = new Map();
  const label = (j) => t('render.queue.status.' + j.status) + (j.kind === 'frames' ? ' · ' + t('render.queue.frames', { n: j.done, of: j.total }) : '') + (j.error ? ' (' + (j.error === 'needs_model' ? t('render.queue.needs_model') : j.error) + ')' : '');
  async function refresh() {
    const jobs = await q.list();
    list.replaceChildren(...jobs.map((j) => {
      const dl = el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { renderQueueGet: j.id }, disabled: j.status !== 'done' }, t('render.queue.get'));
      const rm = el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { renderQueueRemove: j.id } }, t('render.queue.remove'));
      dl.addEventListener('click', async () => { const out = await q.output(j.id); if (out) o.download(out.blob, out.name); });
      rm.addEventListener('click', async () => { await q.remove(j.id); refresh(); });
      const f = progress.get(j.id);
      return el('li', { dataset: { renderQueueJob: j.id, status: j.status } },
        el('span', { className: 'cc-render-queue-name' }, j.name || t('render.queue.unnamed')),
        el('span', { className: 'cc-render-note' }, (j.engine ? j.engine + ' · ' : '') + t(j.kind === 'still' ? 'render.queue.kind.still' : 'render.queue.kind.frames', { w: j.w, h: j.h }) + ' · ' + label(j) + (j.status === 'running' && f != null ? ' · ' + Math.round(f * 100) + ' %' : '')),
        dl, rm);
    }));
    if (!jobs.length) list.append(el('li', { className: 'cc-render-note' }, t('render.queue.empty')));
    runBtn.textContent = t(S.abort ? 'render.queue.stop' : 'render.queue.run');
    runBtn.disabled = !S.abort && !jobs.some((j) => ['waiting', 'paused', 'running'].includes(j.status));
  }
  S.listeners.add(refresh);
  const tell = () => { for (const f of S.listeners) f(); };
  async function run() {
    if (S.abort) { S.abort.abort(); await q.stop(); return; }
    const { queueRenderer } = await import('./render-pt.js');
    S.renderer?.dispose?.();
    S.renderer = queueRenderer({ lanDevices: o.lanDevices || null });
    S.abort = new AbortController();
    try { S.wake = await globalThis.navigator?.wakeLock?.request('screen'); } catch { S.wake = null; }
    // frames whose objects move: this page's model, made once for the run, posed per frame
    let liveScene = null;
    const key = o.fileBase ? o.fileBase() : '';
    const live = o.scene ? { key, scene: (tt) => {
      liveScene ||= o.scene(cleanSettings({ ...getSettings(), mode: 'hq' }));
      const f = liveScene.frameAt ? liveScene.frameAt(tt) : null;
      return f ? { ...liveScene, items: liveScene.items.map((it, i) => (f.matrices && f.matrices[i] ? { ...it, matrix: f.matrices[i] } : it)), camera: f.camera } : liveScene;
    } } : null;
    tell();
    try {
      await q.run({ render: S.renderer, engines: o.engines || sharedRegistry(o.where || (globalThis.cadcraftDesktop ? 'studio' : 'web')), live, signal: S.abort.signal, onEvent: (e) => { if (e.type === 'progress') progress.set(e.job.id, e.f); tell(); } });
    } finally {
      liveScene?.dispose?.();
      S.abort = null;
      try { await S.wake?.release(); } catch { /* released already */ }
      S.wake = null;
      tell();
    }
  }
  runBtn.addEventListener('click', run);
  clearBtn.addEventListener('click', async () => { await q.clearDone(); tell(); });
  refresh();
  return {
    refresh: tell,
    /** The dialog's picture as it is set now, packed into the queue. */
    async addStill() {
      const s = cleanSettings({ ...getSettings(), mode: 'hq' }), v = o.viewSize(), { w, h } = sizeFor(s, v.w, v.h);
      const engine = engineFor(s);
      if (!BUILTIN.includes(engine)) {
        // an outside engine (0.8 RE.1): the job keeps the hand-off package, not the packed scene
        if (!o.handoff) throw Object.assign(new Error('no handoff'), { code: 'no_package' });   // i18n-ignore: caught by the caller
        const name = (o.fileBase ? o.fileBase() : '') + ' — ' + new Date().toLocaleTimeString();
        await q.addStill({ name, settings: s, w, h, engine, pkg: await o.handoff(s, { w, h }) });
        tell();
        return;
      }
      const scene = o.scene(s);
      try {
        const [{ imagePixels }, { hdriFor, volumeFor }] = await Promise.all([import('./render-pt.js'), import('./session.js')]);
        scene.imagePixels = await imagePixels(scene); scene.hdri = hdriFor(s); scene.volumeData = volumeFor(s);
        const name = (o.fileBase ? o.fileBase() : '') + ' — ' + new Date().toLocaleTimeString();
        await q.addStill({ name, scene, settings: s, w, h });
      } finally { scene.dispose?.(); }
      tell();
    },
    /** The animation (the video dialog's length, size, rate and format), path traced frame by frame. */
    async addFrames({ w, h, fps, format, motionBlur }) {
      const s = cleanSettings({ ...getSettings(), mode: 'hq' }), scene = o.scene(s);
      const engine = engineFor(s);
      if (!BUILTIN.includes(engine)) {
        // an outside engine (0.8 RE.4): one package whose manifest carries the camera of every frame; the engine draws them in one run
        try {
          if (!o.handoff) throw Object.assign(new Error('no handoff'), { code: 'no_package' });   // i18n-ignore: caught by the caller
          const length = o.length(), n = Math.max(1, Math.round(length * fps) + 1), cameras = [];
          for (let i = 0; i < n; i++) { const f = scene.frameAt ? scene.frameAt(Math.min(length, i / fps)) : { camera: scene.camera }; cameras.push({ world: Array.from(f.camera(w / h).world) }); }
          const pkg = await o.handoff(s, { w, h, frames: { from: 0, to: length, fps, count: n, cameras } });
          const name = (o.fileBase ? o.fileBase() : '') + ' — ' + new Date().toLocaleTimeString();
          await q.addFrames({ name, settings: s, w, h, fps, format, engine, pkg, count: n });
        } finally { scene.dispose?.(); }
        tell();
        return;
      }
      try {
        const [{ imagePixels }, { hdriFor, volumeFor }] = await Promise.all([import('./render-pt.js'), import('./session.js')]);
        scene.imagePixels = await imagePixels(scene); scene.hdri = hdriFor(s); scene.volumeData = volumeFor(s);
        const name = (o.fileBase ? o.fileBase() : '') + ' — ' + new Date().toLocaleTimeString();
        await q.addFrames({ name, scene, settings: s, w, h, length: o.length(), fps, format, motionBlur, liveKey: o.fileBase ? o.fileBase() : '' });
      } finally { scene.dispose?.(); }
      tell();
    },
    dispose() { S.listeners.delete(refresh); },
  };
}
