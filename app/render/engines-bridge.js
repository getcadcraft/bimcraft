/* SPDX-License-Identifier: Apache-2.0 */
/**
 * engines-bridge.js — the page's side of Studio's engines.rs (0.8 RE.3, docs/0.8-PART1.md D3). DOM-free. Part of the shared renderer:
 * canonical in modelcraft/dev/render/, byte-identical copy in bimcraft/dev/render/ (node tools/render/sync.mjs); never edit the copy.
 *
 * The bridge (window.cadcraftDesktop.engines, desktop-shell bridge.js) is: list() · find(id) · pick(id) · forget(id) ·
 * start(id, bytes, settings) → job · status(job) → {state, progress, error, log[]} · result(job) → bytes · cancel(job).
 * The page never builds a command line, a path or an argument: it names an engine id, hands over the package (a stored zip) and typed
 * settings; Studio finds the program, runs only the script shipped inside it, and hands the picture back.
 *
 *   engineBridge(win) → the bridge | null            (null on the web, on tablets and in Studio builds without engines)
 *   runEngineJob(bridge, id, zipBytes, settings, { signal, onProgress, pollMs, timeoutMs, start? }) → Promise<Uint8Array>   the picture
 *     rejects with an Error whose `code` is the shell's (not_found, too_old, no_script, script_failed, usd_import_failed, timed_out …),
 *     'cancelled' when the signal aborted (the job is cancelled in the shell first), or 'bridge' when the bridge itself failed.
 *   availability(bridge, id) → {ok, version, why, path}    the Engine select's answer for a program found in Studio
 */

export function engineBridge(win = globalThis) {
  const b = win && win.cadcraftDesktop && win.cadcraftDesktop.engines;
  return b && typeof b.find === 'function' && typeof b.start === 'function' ? b : null;
}

const codeOf = (e) => {
  const m = /^([a-z0-9_]+):/.exec(String((e && e.message) || e || ''));
  return m ? m[1] : (e && e.code) || 'bridge';
};
const fail = (code, message = code) => Object.assign(new Error(message), { code });   // i18n-ignore: caught by the caller

export async function availability(bridge, id) {
  try {
    const r = await bridge.find(id);
    return r && r.found ? { ok: true, version: r.version || '', why: '', path: r.path || '' } : { ok: false, version: (r && r.version) || '', why: (r && r.why) || 'not_found', path: (r && r.path) || '' };
  } catch (e) { return { ok: false, version: '', why: codeOf(e) === 'unsupported' ? 'studio_only' : 'unknown', path: '' }; }
}

const sleep = (ms, signal) => new Promise((res) => {
  const t = setTimeout(res, ms);
  signal?.addEventListener('abort', () => { clearTimeout(t); res(); }, { once: true });
});

export async function runEngineJob(bridge, id, zip, settings = {}, { signal = null, onProgress = null, pollMs = 250, timeoutMs = 12 * 3600 * 1000, start = null } = {}) {
  if (signal?.aborted) throw fail('cancelled');
  let job;
  try { job = await (start ? start() : bridge.start(id, zip, settings)); } catch (e) { throw fail(codeOf(e), String((e && e.message) || e)); }
  const t0 = Date.now();
  let last = -1;
  const stop = async () => {
    try { await bridge.cancel(job); } catch { /* the shell may have finished it already */ }
    for (let i = 0; i < 40; i++) {   // wait (≤ 10 s) for the shell to say the tree is gone, so the next job does not start on a busy computer
      try { const s = await bridge.status(job); if (s.state !== 'running') break; } catch { break; }
      await sleep(250);
    }
  };
  for (;;) {
    if (signal?.aborted) { await stop(); throw fail('cancelled'); }
    let s;
    try { s = await bridge.status(job); } catch (e) { throw fail('bridge', String((e && e.message) || e)); }
    if (s.progress !== last) { last = s.progress; onProgress?.(Math.max(0, Math.min(1, Number(s.progress) || 0))); }
    if (s.state === 'done') {
      try { const bytes = await bridge.result(job); if (!bytes || !bytes.length) throw fail('no_picture'); return bytes; } catch (e) { throw e.code ? e : fail(codeOf(e), String((e && e.message) || e)); }
    }
    if (s.state === 'failed') throw Object.assign(fail(s.error || 'engine_failed'), { log: Array.isArray(s.log) ? s.log.slice(-20) : [] });
    if (s.state === 'cancelled') throw fail('cancelled');
    if (Date.now() - t0 > timeoutMs) { await stop(); throw fail('timed_out'); }
    await sleep(pollMs, signal);
  }
}
