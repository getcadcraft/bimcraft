/* SPDX-License-Identifier: Apache-2.0 */
/**
 * energy-ep-worker.js — the Web Worker that runs the person's EnergyPlus WebAssembly build (0.8 EG.13). Gets { engine, job } from energy-ep-run.js's
 * runInWorker, loads <engine>/energyplus.js, .wasm and Energy+.idd only now, runs, and sends the answer files back. Nothing else in BimCraft imports it.
 */
import { runWith, ENGINE_FILES } from './energy-ep-run.js';

self.onmessage = async (ev) => {
  const { engine, job } = ev.data || {};
  try {
    self.postMessage({ stage: 'fetch' });
    const [factory, idd] = await Promise.all([
      import(/* @vite-ignore */ engine + '/' + ENGINE_FILES.js).then((m) => m.default),
      fetch(engine + '/' + ENGINE_FILES.idd).then((r) => { if (!r.ok) throw Object.assign(new Error('idd'), { key: 'ep.err.fetch' }); return r.arrayBuffer(); }).then((b) => new Uint8Array(b)),
    ]);
    self.postMessage({ stage: 'run' });
    const out = await runWith(factory, { ...job, idd, locateFile: (f) => (/\.wasm$/.test(f) ? engine + '/' + ENGINE_FILES.wasm : engine + '/' + f) });
    self.postMessage({ files: out.files, log: out.log });
  } catch (e) { self.postMessage({ error: String(e?.message || e), key: e?.key || 'ep.err.run' }); }
};
