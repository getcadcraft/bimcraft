/* SPDX-License-Identifier: Apache-2.0 */
/**
 * main.js — a Bambu Lab P2S as a place 3D Print can send to (roadmap PS.8; docs/0.9-PRINT-STAGE.md). A browser cannot speak to one, and our generic start G-code is not for it, so this route
 * always goes OrcaSlicer's P2S presets → a sliced .gcode.3mf → Bambu Connect, Bambu's documented door for other programs. Studio on a computer only. It adds itself to window.ccPrintLinks.
 */
import { zipStored } from '../../print3d.js';
import { readZip, finish, plateGcode, P2S_ID } from './bambu-file.js';

export function activate(api) {
  const t = (k, v) => api.t(k, v);
  const def = {
    id: 'bambu-p2s', label: t('label'), printer: 'large', studioOnly: true,
    steps: [
      { text: t('step.orca'), url: 'https://github.com/OrcaSlicer/OrcaSlicer/releases', link: t('step.orca.link') },
      { text: t('step.connect'), url: 'https://wiki.bambulab.com/en/software/bambu-connect', link: t('step.connect.link') },
      { text: t('step.bind') },
      { text: t('step.send') },
    ],
    note: t('note'),
    /** ctx: { tris, job, name, studio, run(settings) → Promise<{ bytes } | { detail }>, readGcode, confirm(paragraphs) } → { ok, message } */
    async send(ctx) {
      const found = await ctx.studio.find('orcaslicer');
      if (!found.found) return { ok: false, message: t('fail.orca') };
      const r = await ctx.run({ target: 'bambu-p2s' });
      if (!r.bytes) return { ok: false, message: t('fail.slice', { why: r.detail || '' }) };
      const entries = await readZip(r.bytes), text = plateGcode(entries);
      if (!text) return { ok: false, message: t('fail.nogcode') };
      const g = ctx.readGcode(text.split(/\r?\n/), ctx.job);   // its start sequence wipes off the plate, so the extruding moves are what is checked, with room for its purge line
      if (!g.filament || g.max[0] > ctx.job.bed[0] + 1 || g.max[1] > ctx.job.bed[1] + 1 || g.max[2] > ctx.job.bed[2] + 1) return { ok: false, message: t('fail.bed') };
      const yes = await ctx.confirm([t('confirm', { grams: g.grams, layers: g.layers }), t('confirm.next')]);
      if (!yes) return { ok: false, cancelled: true };
      const zip = zipStored(finish(entries, P2S_ID));
      try { await ctx.studio.bambuConnect(zip, ctx.name); } catch { return { ok: false, message: t('fail.connect') }; }
      return { ok: true, message: t('done') };
    },
  };
  (window.ccPrintLinks ||= []).push(def);
  dispatchEvent(new Event('cc-print-slicers'));
  api.onDeactivate(() => {
    const at = window.ccPrintLinks.indexOf(def);
    if (at >= 0) window.ccPrintLinks.splice(at, 1);
    dispatchEvent(new Event('cc-print-slicers'));
  });
}
