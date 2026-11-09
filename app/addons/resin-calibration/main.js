/* SPDX-License-Identifier: Apache-2.0 */
/**
 * main.js — the resin exposure test (roadmap RSN.4; docs/0.9-RESIN-STAGE.md): puts a test part on the bed and saves the same print at a ladder of exposures, one file each, in a zip.
 * It adds a block to the Resin card through window.ccResinTools. rs-calibration.js is lib/printresin's copy (node tools/printresin/sync.mjs).
 */
import { testPart, ladder } from './rs-calibration.js';

export function activate(api) {
  const t = (k, v) => api.t(k, v);
  let busy = null;
  const tool = {
    id: 'calibration', t,
    build(r) {
      const { el, C, ctx } = r, host = ctx.host;
      return el('div', { className: C.block, dataset: { rsCalibration: '' } },
        el('h3', { className: C.head }, t('h')),
        el('p', { className: C.note }, t('note')),
        el('div', { className: C.row },
          el('button', { type: 'button', className: C.btn, disabled: !!busy, dataset: { rsTestPart: '' }, onclick: async () => {
            const bed = ctx.bed(), tris = testPart(await host.manifold());
            host.place(t('part.name'), tris, { scale: 1, at: [bed[0] / 2, bed[1] / 2] });
            host.showBed(bed); host.rerender();
          } }, t('part')),
          el('button', { type: 'button', className: C.btn, disabled: !!busy, dataset: { rsLadder: '' }, onclick: async () => {
            if (!host.objects().length) { r.say(t('ladder.nopart'), true); return; }
            const steps = ladder(r.job().exposure), files = [];
            try {
              for (let i = 0; i < steps.length; i++) {
                busy = i; r.say(t('ladder.busy', { i: i + 1, n: steps.length }));
                const f = await r.file({ exposure: steps[i] });
                files.push({ name: `${f.name}-${String(steps[i]).replace('.', '_')}s.${f.ext}`, data: f.bytes });
              }
              host.download(`${files[0].name.replace(/-[\d_]+s\.\w+$/, '')}-exposure-ladder.zip`, window.ccResin.zipStored(files), 'application/zip');
              r.say(t('ladder.made', { n: files.length, list: steps.join(', ') }));
            } catch (e) { console.error(e); r.say(t('ladder.failed', { why: String(e?.message || e).slice(0, 160) }), true); } finally { busy = null; host.rerender(); }
          } }, t('ladder', { n: ladder(r.job().exposure).length }))));
    },
  };
  (window.ccResinTools ||= []).push(tool);
  dispatchEvent(new Event('cc-print-slicers'));
  api.onDeactivate(() => {
    const at = window.ccResinTools.indexOf(tool);
    if (at >= 0) window.ccResinTools.splice(at, 1);
    dispatchEvent(new Event('cc-print-slicers'));
  });
}
