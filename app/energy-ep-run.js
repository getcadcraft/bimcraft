/* SPDX-License-Identifier: Apache-2.0 */
/**
 * energy-ep-run.js — running EnergyPlus on an IDF, only when the person asks (0.8 EG.13, session `energy_PART_2`). The engine is NOT part of
 * BimCraft: it is the person's (or the site's) own WebAssembly build of EnergyPlus (docs/spikes/LC.20-energyplus.md: 35.7 MB, 6.1 MB brotli, plus
 * the 4.6 MB Energy+.idd), fetched from an address they set, in a Web Worker, once they press Simulate. Nothing loads at start-up.
 *
 *   EP_GATE                      { licenceCleared } — the owner's answers on the licence (docs/0.7-sessions/bim-ops.md § C); false until he says so
 *   epGate(loc?)                 → null when the step may be offered, else 'licence' (outside /lab until the answers are in)
 *   validEngineUrl(url)          → the base address (no trailing slash) or null: https, the site's own path, or http on localhost
 *   getEngine() / setEngine(url) the address, kept in this browser (localStorage `bimcraft.ep`)
 *   runWith(create, job)         → { files: { err, eio, eso }, log }   the Emscripten module's FS: write the IDF (and EPW), callMain, read the answers
 *   runInWorker(job)             → the same, through energy-ep-worker.js
 *   simulate({ idf, epw, mode, zoneOf, ours, run })  → { err, sizing, year, cmp, problems }   the whole step; `run` is injectable (tests)
 * Files named for the person's engine: `<base>/energyplus.js` (an Emscripten MODULARIZE factory, default export), `<base>/energyplus.wasm`,
 * `<base>/Energy+.idd`. Same-origin or CORS-enabled. The file names are kept in ENGINE_FILES so one place says them.
 */
import { parseErr, parseSizing, parseEso, yearByZone, compareDesign, problemsEp } from './energy-ep.js';

export const EP_GATE = Object.freeze({ licenceCleared: false });
export const ENGINE_FILES = Object.freeze({ js: 'energyplus.js', wasm: 'energyplus.wasm', idd: 'Energy+.idd' });
export const ENGINE_SIZE_MB = Object.freeze({ wasmBrotli: 6.1, wasmGzip: 9.0, idd: 4.6 });
const KEY = 'bimcraft.ep';

/** The EnergyPlus add-on (addons/energyplus) is the person's opt-in: it sets this flag when switched on in Settings › Add-ons, clears it when switched off (owner 2026-10-29). */
export const epAddonOn = () => globalThis.bimcraftEpAddon === true;
export function epGate(loc = (typeof location !== 'undefined' ? location : null)) {
  if (EP_GATE.licenceCleared) return null;
  return loc && /^\/lab(\/|$)/.test(String(loc.pathname || '')) ? null : 'licence';
}
export function validEngineUrl(url) {
  const s = String(url ?? '').trim().replace(/\/+$/, '');
  if (!s || s.length > 300 || /[\s"'<>\\]/.test(s)) return null;
  if (s.startsWith('/') && !s.startsWith('//')) return s;
  try {
    const u = new URL(s);
    if (u.protocol === 'https:' || (u.protocol === 'http:' && /^(localhost|127\.0\.0\.1|\[::1\])$/.test(u.hostname))) return u.origin + u.pathname.replace(/\/+$/, '');
  } catch { /* not a URL */ }
  return null;
}
export function getEngine() { try { return validEngineUrl(JSON.parse(localStorage.getItem(KEY) || '{}').url); } catch { return null; } }
export function setEngine(url) {
  const v = url ? validEngineUrl(url) : null;
  if (url && !v) throw Object.assign(new Error('ep.err.url'), { key: 'ep.err.url' });
  try { localStorage.setItem(KEY, JSON.stringify({ url: v })); } catch { /* private window */ }
  return v;
}

const MAX_LOG = 400;
/** The Emscripten side. `create` = the engine's factory; job = { idf (text), epw (Uint8Array | null), idd (Uint8Array), wasmBinary? , design (bool) }. */
export async function runWith(create, job) {
  const log = [];
  const say = (l) => { if (log.length < MAX_LOG) log.push(String(l)); };
  const M = await create({ noInitialRun: true, print: say, printErr: say, ...(job.wasmBinary ? { wasmBinary: job.wasmBinary } : {}), ...(job.locateFile ? { locateFile: job.locateFile } : {}) });
  const FS = M.FS;
  FS.mkdir('/work'); FS.mkdir('/work/out');
  FS.writeFile('/work/in.idf', job.idf);
  FS.writeFile('/work/Energy+.idd', job.idd);
  if (job.epw) FS.writeFile('/work/in.epw', job.epw);
  const args = ['-d', '/work/out', '-i', '/work/Energy+.idd', ...(job.epw ? ['-w', '/work/in.epw'] : []), ...(job.design || !job.epw ? ['-D'] : []), '/work/in.idf'];
  try { M.callMain(args); } catch (e) { if (!(e && typeof e === 'object' && 'status' in e)) throw e; }   // Emscripten's exit(n) is an ExitStatus
  const read = (n) => { try { return FS.readFile('/work/out/' + n, { encoding: 'utf8' }); } catch { return ''; } };
  return { files: { err: read('eplusout.err'), eio: read('eplusout.eio'), eso: read('eplusout.eso') }, log };
}

/** Through a module Web Worker, so the page stays alive; the worker fetches the engine files itself. */
export function runInWorker(job, { engine = getEngine(), onStage = () => {} } = {}) {
  return new Promise((resolve, reject) => {
    if (!engine) return reject(Object.assign(new Error('ep.err.noengine'), { key: 'ep.err.noengine' }));
    let w;
    try { w = new Worker(new URL('./energy-ep-worker.js', import.meta.url), { type: 'module' }); } catch (e) { return reject(e); }
    w.onmessage = (ev) => {
      const m = ev.data || {};
      if (m.stage) return onStage(m.stage);
      w.terminate();
      if (m.error) reject(Object.assign(new Error(m.error), { key: m.key || 'ep.err.run' })); else resolve({ files: m.files, log: m.log });
    };
    w.onerror = (ev) => { w.terminate(); reject(Object.assign(new Error(ev.message || 'worker'), { key: 'ep.err.run' })); };
    w.postMessage({ engine, job });
  });
}

/** The runner `simulate` uses unless it is given one — a hook so a test can stand in for the worker. */
export const hooks = { run: (job) => runInWorker(job) };

/**
 * The step: IDF in, EnergyPlus run, answers read. mode 'design' → sizing loads per zone compared with ours; 'year' → heating and cooling kWh per zone.
 * `ours` = energy-bim.js loads() rooms; `zoneOf` = idfFromModel().zoneOf. The ENGINE's own messages (severe, fatal) become Problems.
 */
export async function simulate({ idf, epw = null, mode = 'design', zoneOf, ours = [], run = (job) => hooks.run(job), idd = null } = {}) {
  if (mode === 'year' && !epw) throw Object.assign(new Error('ep.err.noweather'), { key: 'ep.err.noweather' });
  const r = await run({ idf, epw, idd, design: mode !== 'year' });
  const err = parseErr(r.files.err);
  const sizing = parseSizing(r.files.eio);
  const year = mode === 'year' ? yearByZone(parseEso(r.files.eso)) : null;
  const cmp = mode === 'design' && zoneOf ? compareDesign(sizing, ours, zoneOf) : [];
  return { err, sizing, year, cmp, problems: problemsEp(cmp, err), log: r.log || [] };
}
