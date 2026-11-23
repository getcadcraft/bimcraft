/* SPDX-License-Identifier: Apache-2.0 */
/**
 * main.js — a spec side add-on of the Dome generator (0.11 DOME.4 / DOME.5). It is data: pack.json (format cadcraft-dome-spec v1, made from
 * the cited research by `node tools/dome/make-packs.mjs`; never edit the copy). Switched on, it puts the pack on the page for the generator's
 * panel to offer (lib/dome spec.js reads globalThis.ccDomeSpecs); switched off, it takes it away. No code of its own beyond that.
 */
export async function activate(api) {
  const pack = await (await fetch(api.url('pack.json'))).json();
  (globalThis.ccDomeSpecs ||= []).push(pack);
  dispatchEvent(new Event('cc-dome-specs'));
  api.onDeactivate(() => {
    const at = (globalThis.ccDomeSpecs || []).indexOf(pack);
    if (at >= 0) globalThis.ccDomeSpecs.splice(at, 1);
    dispatchEvent(new Event('cc-dome-specs'));
  });
}
