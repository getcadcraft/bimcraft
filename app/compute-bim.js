/* SPDX-License-Identifier: Apache-2.0 */
/**
 * compute-bim.js — BimCraft's side of lib/compute (0.7 CU.1; the copy is ./compute/, tools/compute/sync.mjs): the probe and
 * tier for this page, and the "Your machine" card in Settings › BimCraft › Rendering, filled the first time the dialog opens.
 *
 *   machine() → Promise<{ facts, info }>     info = tierOf(facts, ?tier= override); one probe per page
 *   mountMachineCard(dialog)                 fills [data-compute-card] when the dialog first opens; inside Studio (its
 *                                            render-nodes bridge) also [data-compute-lan]: other computers (CU.7, lan-ui.js)
 *   lanDevices({ W, H, scene }) → Promise<[device]>  the connected LAN nodes as hybrid devices for that scene ({kernel,
 *                                            buffers, params}: what the render shares with its pool); [] outside Studio
 */
import { probeCached, tierOf, tierFromQuery } from './compute/probe.js';
import { machineCard } from './compute/machine-card.js';
import { shareHardware } from './compute/report.js';
import { el } from './ui-util.js';
import { t } from "./i18n.js";
import { pagePool } from './compute/runtime.js';

export function machine() {
  return probeCached(globalThis).then((facts) => ({ facts, info: tierOf(facts, tierFromQuery(globalThis.location?.search)) }));
}

export function mountMachineCard(dlg) {
  const box = dlg?.querySelector('[data-compute-card]');
  if (!box) return;
  let done = false;
  const fill = () => {
    if (done || !dlg.open) return;
    done = true;
    machine().then(({ facts, info }) => box.replaceChildren(...machineCard({ el, t }, facts, info)));
  };
  new MutationObserver(fill).observe(dlg, { attributes: true, attributeFilter: ['open'] });
  fill();
  scheduleHardwareShare();
  mountLanBox(dlg.querySelector('[data-compute-lan]'));
}

let lan = null;
async function mountLanBox(box) {
  const bridge = globalThis.window?.cadcraftDesktop?.renderNodes;
  if (!box || !bridge) return;   // a browser tab cannot find other computers: the section stays hidden
  const [{ mountLan }, crypto, pool] = await Promise.all([import('./compute/lan-ui.js'), import('./live-crypto.js'), pagePool()]);
  lan = mountLan({ el, t, bridge, crypto, pool, storage: globalThis.localStorage,
    // what this computer runs for others: its own kernels only, by id
    // small JSON jobs it runs for others (0.8 CH.31): the process model's variants of an optimisation, solved here by its own engine
    tasks: (await import('./process/optimise.js')).variantTasks(),
    kernels: {
      preview: { url: new URL('./compute/preview-kernel.js', import.meta.url).href },
      // the path tracer (render's JS reference as tiles); the scene arrives as render/pt-ref-job.js shareable(packed)
      'pt-ref': { url: new URL('./render/pt-ref-job.js', import.meta.url).href },
    } }, box);
}

/** The connected computers that run this job id (0.8 CH.31: 'process-variant'); the Plant add-on's Optimise section sends variants to them. [] outside Studio. */
export function lanTaskNodes(task) { return lan && typeof lan.taskNodes === 'function' ? lan.taskNodes(task) : []; }
globalThis.bimcraftLan = { taskNodes: lanTaskNodes };

export function lanDevices(size) { return lan ? lan.devices(size) : Promise.resolve([]); }

/**
 * Hardware specs for building more efficient engines (owner 2026-10-24; compute/report.js): a while after the app opens, when
 * the page is idle, the probe's facts go to getcadcraft.com — if Settings › Global › Hardware specs allows it (on by default in
 * the browser, off in the desktop app). At most once a month.
 */
let shareTimer = 0;
function scheduleHardwareShare() {
  if (shareTimer || !globalThis.window) return;
  const go = () => machine().then(({ facts, info }) => shareHardware({ facts, info, app: 'bimcraft',
    build: (document.querySelector('.app-bar-ver summary')?.textContent || '').trim() })).catch(() => {});
  shareTimer = setTimeout(() => (globalThis.requestIdleCallback ? globalThis.requestIdleCallback(go, { timeout: 10000 }) : go()), 20000);
}
