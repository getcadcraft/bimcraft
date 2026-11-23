/* SPDX-License-Identifier: Apache-2.0 */
/**
 * main.js — a spec side add-on of the Pool generator (0.11 POOL.4 / POOL.5). It is data: pack.json (format cadcraft-pool-spec v1, made from
 * the cited research by `node tools/pool/make-packs.mjs`; never edit the copy). Switched on, it puts the pack on the page for the generator's
 * panel to offer (lib/pool spec.js reads globalThis.ccPoolSpecs); switched off, it takes it away. No code of its own beyond that.
 */
export async function activate(api) {
  const pack = await (await fetch(api.url('pack.json'))).json();
  (globalThis.ccPoolSpecs ||= []).push(pack);
  dispatchEvent(new Event('cc-pool-specs'));
  api.onDeactivate(() => {
    const at = (globalThis.ccPoolSpecs || []).indexOf(pack);
    if (at >= 0) globalThis.ccPoolSpecs.splice(at, 1);
    dispatchEvent(new Event('cc-pool-specs'));
  });
}
