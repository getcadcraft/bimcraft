/* SPDX-License-Identifier: Apache-2.0 */
/**
 * queue.js — the render queue (0.7 RN.10): high-quality pictures and animation frames waiting their turn, run one after another
 * (overnight too), kept in the browser so a queue survives closing the page and goes on where it stopped. Shared by ModelCraft
 * and BimCraft; the dialog's Queue section (render-ui.js) and the video dialog (video-ui.js) add to it.
 *
 *   openQueue({ app, store? }) → queue      store = idbStore(name) by default (IndexedDB), memoryStore() for tests
 *   queue.list() → Promise<job[]>          queue.get(id)          queue.remove(id)          queue.clearDone()
 *   queue.addStill({ name, scene, settings, w, h, engine?, pkg? }) → job   the scene packed now (pt-pack.js): what was queued is what renders;
 *     an outside engine's id + its hand-off package (handoff.js) instead; queue.run({ engines }) = the registry (engines.js) that runs them
 *   queue.addFrames({ name, scene, settings, w, h, length, fps, from, to, format, motionBlur }) → job
 *     camera-only animations: one packed scene + a camera per frame (resumable after closing); when objects move the frames
 *     need the scene itself (job.live: resumable while the same model is open: `scene` handed to run())
 *   queue.run({ render, live?: {key, scene(t)}, onEvent?, signal? }) → Promise   jobs waiting/paused, in order, until done or stopped
 *     (a live job runs only when `live.key` is the key it was queued with: the same model);
 *     render = { packed(pk, settings, {spp, signal, onProgress}) → Promise<{blob, w, h}> , frameHeader(pk, frame, settings) → header,
 *               video(blobs[], {w, h, fps, format}) → Promise<{blob, ext}> } (render-pt.js queueRenderer)
 *   queue.output(id) → Promise<{blob, name} | null>    the job's picture or video
 *
 * Job: { id, kind 'still' | 'frames', engine ('' = the path tracer; else an outside engine's id, 0.8 RE.1), madeBy ({engine, version}, D5), name, created, w, h, settings, status 'waiting' | 'running' | 'paused' | 'done' | 'failed',
 *        done, total, error, live, fps, format, ext }  — frames' pictures are kept until the video is made, then dropped.
 */
import { packScene } from './pt-pack.js';

/** Engines the queue runs itself (the path tracer); every other id goes to the registry passed to run() (0.8 RE.1). */
const BUILT_IN = new Set(['', 'pt']);
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 8);

/** A store in memory (tests). */
export function memoryStore() {
  const jobs = new Map(), blobs = new Map();
  return {
    async jobs() { return [...jobs.values()].map((j) => ({ ...j })); },
    async putJob(j) { jobs.set(j.id, { ...j }); },
    async delJob(id) { jobs.delete(id); for (const k of [...blobs.keys()]) if (k.startsWith(id + '/')) blobs.delete(k); },
    async put(id, name, v) { blobs.set(id + '/' + name, v); },
    async get(id, name) { return blobs.get(id + '/' + name) ?? null; },
    async del(id, name) { blobs.delete(id + '/' + name); },
  };
}

/** IndexedDB: one database per app, stores `jobs` (by id) and `data` (packed scenes, cameras, frames, outputs: "id/name"). */
export function idbStore(name) {
  let dbP = null;
  const db = () => (dbP ||= new Promise((res, rej) => {
    const r = indexedDB.open(name, 1);
    r.onupgradeneeded = () => { r.result.createObjectStore('jobs', { keyPath: 'id' }); r.result.createObjectStore('data'); };
    r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error);
  }));
  const tx = async (store, mode, fn) => { const d = await db(); return new Promise((res, rej) => { const t = d.transaction(store, mode), s = t.objectStore(store), out = fn(s); t.oncomplete = () => res(out && 'result' in out ? out.result : out); t.onerror = () => rej(t.error); t.onabort = () => rej(t.error); }); };
  return {
    async jobs() { return (await tx('jobs', 'readonly', (s) => s.getAll())) || []; },
    putJob: (j) => tx('jobs', 'readwrite', (s) => { s.put(j); }),
    async delJob(id) {
      await tx('jobs', 'readwrite', (s) => { s.delete(id); });
      await tx('data', 'readwrite', (s) => { s.delete(IDBKeyRange.bound(id + '/', id + '/￿')); });
    },
    put: (id, nm, v) => tx('data', 'readwrite', (s) => { s.put(v, id + '/' + nm); }),
    async get(id, nm) { return (await tx('data', 'readonly', (s) => s.get(id + '/' + nm))) ?? null; },
    del: (id, nm) => tx('data', 'readwrite', (s) => { s.delete(id + '/' + nm); }),
  };
}

export function openQueue({ app = 'cadcraft', store = null } = {}) {
  const S = store || idbStore('cadcraft-render-queue-' + app);
  let running = null, stopAsked = false;
  const save = (j) => S.putJob(j);
  const q = {
    async list() { return (await S.jobs()).sort((a, b) => a.created - b.created); },
    async get(id) { return (await S.jobs()).find((j) => j.id === id) || null; },
    async remove(id) { if (running && running.id === id) { stopAsked = true; await running.p; } await S.delJob(id); },
    async clearDone() { for (const j of await q.list()) if (j.status === 'done') await S.delJob(j.id); },
    async addStill({ name, scene, settings, w, h, engine = '', pkg = null }) {
      // an outside engine (0.8 RE.1) takes the hand-off package (handoff.js, RE.2) instead of the packed scene
      const outside = !!engine && !BUILT_IN.has(engine);
      if (outside && !pkg) throw Object.assign(new Error('no package'), { code: 'no_package' });   // i18n-ignore: caught by the caller
      const j = { id: uid(), kind: 'still', name: String(name || '').slice(0, 120), created: Date.now(), w, h, settings, engine: outside ? engine : '', status: 'waiting', done: 0, total: 1, error: '', live: false };
      if (outside) await S.put(j.id, 'pkg', pkg);
      else await S.put(j.id, 'pack', packScene(scene, settings, { w, h, images: scene.imagePixels || null, hdri: scene.hdri || null, volumeData: scene.volumeData || null }));
      await save(j);
      return j;
    },
    async addFrames({ name, scene, settings, w, h, length, fps, from = 0, to = length, format = 'webm', motionBlur = false, liveKey = '', engine = '', pkg = null, count = 0 }) {
      if (engine && !BUILT_IN.has(engine)) {
        // an outside engine draws every frame in one run: the package carries the camera per frame (manifest.frames.cameras)
        if (!pkg || !(count >= 1)) throw Object.assign(new Error('no package'), { code: 'no_package' });   // i18n-ignore: caught by the caller
        const j = { id: uid(), kind: 'frames', name: String(name || '').slice(0, 120), created: Date.now(), w, h, settings, engine, status: 'waiting', done: 0, total: count, error: '', live: false, liveKey: '', fps, format, motionBlur: false };
        await S.put(j.id, 'pkg', pkg);
        await save(j);
        return j;
      }
      const n = Math.max(1, Math.round((to - from) * fps) + 1), frames = [];
      let moves = false;
      for (let i = 0; i < n; i++) {
        const t = Math.min(to, from + i / fps), f = scene.frameAt ? scene.frameAt(t) : { camera: scene.camera };
        if (f.matrices && f.matrices.some((m) => m)) moves = true;
        const cam = f.camera(w / h), next = motionBlur && scene.frameAt ? scene.frameAt(Math.min(to, t + 0.5 / fps)).camera(w / h) : null;
        frames.push({ t, camera: { world: Array.from(cam.world), proj: Array.from(cam.proj) }, camera1: next ? { world: Array.from(next.world), proj: Array.from(next.proj) } : null });
      }
      const j = { id: uid(), kind: 'frames', name: String(name || '').slice(0, 120), created: Date.now(), w, h, settings, status: 'waiting', done: 0, total: n, error: '', live: moves, liveKey: String(liveKey || ''), fps, format, motionBlur: !!motionBlur };
      if (!moves) await S.put(j.id, 'pack', packScene(scene, { ...settings, caustics: false }, { w, h, images: scene.imagePixels || null, hdri: scene.hdri || null, volumeData: scene.volumeData || null }));
      await S.put(j.id, 'frames', frames);
      await save(j);
      return j;
    },
    /** Run what waits. `live` = { key, scene(t) → scene } for frames whose objects move (this page's model). */
    run({ render, engines = null, live = null, onEvent = null, signal = null } = {}) {
      if (running) return running.p;
      stopAsked = false;
      const p = (async () => {
        for (;;) {
          const j = (await q.list()).find((x) => x.status === 'waiting' || x.status === 'paused' || x.status === 'running');
          if (!j || stopAsked || signal?.aborted) break;
          if (j.live && (!live || live.key !== j.liveKey)) { j.status = 'paused'; j.error = 'needs_model'; await save(j); onEvent?.({ type: 'job', job: j }); break; }
          running = { id: j.id, p };
          j.status = 'running'; j.error = ''; await save(j); onEvent?.({ type: 'job', job: j });
          try {
            if (j.engine) {
              // an outside engine: one job, one call; the engine reports progress 0…1 and hands the picture back
              const eng = engines && engines.get(j.engine);
              if (!eng || typeof eng.render !== 'function') throw Object.assign(new Error('engine missing'), { code: 'engine_missing' });   // i18n-ignore: caught by the caller
              const job = { id: j.id, kind: j.kind, w: j.w, h: j.h, settings: j.settings, engine: j.engine, pkg: await S.get(j.id, 'pkg'), frames: j.kind === 'frames' ? { from: 0, to: j.total - 1, fps: j.fps } : null };
              const r = await eng.render(job, { signal, onProgress: (f) => onEvent?.({ type: 'progress', job: j, f }) });
              if (j.kind === 'frames') {
                // every frame came from one run of the engine; the video is made here, as for our own frames
                if (!r || !Array.isArray(r.blobs) || r.blobs.length !== j.total) throw Object.assign(new Error('frames missing'), { code: 'no_picture' });   // i18n-ignore: caught by the caller
                const v = await render.video(r.blobs, { w: j.w, h: j.h, fps: j.fps, format: j.format });
                await S.put(j.id, 'out', v.blob); j.ext = v.ext; j.done = j.total; j.madeBy = r.madeBy || { engine: j.engine };
              } else {
              if (!r || !r.blob) throw Object.assign(new Error('no picture'), { code: 'no_picture' });   // i18n-ignore: caught by the caller
              await S.put(j.id, 'out', r.blob); j.ext = r.ext || 'png'; j.done = 1; j.madeBy = r.madeBy || { engine: j.engine };
              }
            } else if (j.kind === 'still') {
              const pk = await S.get(j.id, 'pack');
              const r = await render.packed(pk, j.settings, { signal, onProgress: (f) => onEvent?.({ type: 'progress', job: j, f }) });
              await S.put(j.id, 'out', r.blob); j.ext = 'png'; j.done = 1;
            } else {
              const frames = await S.get(j.id, 'frames'), base = j.live ? null : await S.get(j.id, 'pack');
              for (let i = j.done; i < frames.length; i++) {
                if (stopAsked || signal?.aborted) break;
                const fr = frames[i];
                const pk = j.live ? packScene(live.scene(fr.t), { ...j.settings, caustics: false }, { w: j.w, h: j.h, camera1: fr.camera1 }) : { ...base, header: render.frameHeader(base, fr, j.settings) };
                const r = await render.packed(pk, j.settings, { signal, onProgress: (f) => onEvent?.({ type: 'progress', job: j, f: (i + f) / frames.length }) });
                await S.put(j.id, 'frame-' + i, r.blob);
                j.done = i + 1; await save(j); onEvent?.({ type: 'job', job: j });
              }
              if (j.done >= frames.length) {
                const blobs = [];
                for (let i = 0; i < frames.length; i++) blobs.push(await S.get(j.id, 'frame-' + i));
                const v = await render.video(blobs, { w: j.w, h: j.h, fps: j.fps, format: j.format });
                await S.put(j.id, 'out', v.blob); j.ext = v.ext;
                for (let i = 0; i < frames.length; i++) await S.del(j.id, 'frame-' + i);
              }
            }
            j.status = stopAsked || signal?.aborted ? 'paused' : 'done';
          } catch (e) {
            j.status = e?.code === 'cancelled' ? 'paused' : 'failed'; j.error = String(e?.code || e?.message || e).slice(0, 200);
          }
          await save(j); onEvent?.({ type: 'job', job: j });
          running = null;
          if (j.status !== 'done') break;
        }
        running = null;
        onEvent?.({ type: 'idle' });
      })();
      running = { id: null, p };
      return p;
    },
    stop() { stopAsked = true; return running ? running.p : Promise.resolve(); },
    get busy() { return !!running; },
    async output(id) {
      const j = await q.get(id);
      if (!j || j.status !== 'done') return null;
      const blob = await S.get(id, 'out');
      return blob ? { blob, name: (j.name || 'render') + (j.kind === 'still' ? ' render.' + (j.ext || 'png') : ' animation.' + (j.ext || 'webm')) } : null;
    },
  };
  return q;
}
