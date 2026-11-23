/* SPDX-License-Identifier: Apache-2.0 */
/**
 * clash-wire-2.js: bimcraft.js's 1 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountClashWire2(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { mountPartLinks } from './part-link-ui.js';
import { t } from './i18n.js';
import { el } from './ui-util.js';

export function mountClashWire2(ctx) {
  const { ST, status, rebuild, afterEdit, cur, afterPick, showProps, models, root } = ctx;

  // 0.10 SU.1814 (bim-part-link-10): the "Part links" card; the button is drawn by ui.inc only when PartCraft takes a link in this area
  const partLinks = (() => {
    const btn = root.querySelector('[data-part-link]');
    if (!btn || !(btn.dataset.partUrl || btn.dataset.modelUrl)) return null;
    return mountPartLinks({
      t, el, root, status, button: btn, countEl: btn.querySelector('[data-part-link-count]'), partUrl: btn.dataset.partUrl, modelUrl: btn.dataset.modelUrl,   // 0.11 SU.1814: ModelCraft too
      models: () => models.filter((m) => m.ifc && m.model), selection: () => (ST.mode === 'ifc' ? [...ST.viewer.selection] : []),
      show: (keys) => { ST.viewer.select(keys); afterPick(); showProps(keys[0]); ST.viewer.frameKeys(keys); },
      apply: async (ent, run, label) => {
        if (ent !== cur()) throw Object.assign(new Error('partlink.err.notactive'), { code: 'partlink.err.notactive' });
        ent.editor.modelChange(run, { label, verb: t('partlink.verb') });
        await rebuild(); afterEdit();
      },
      // 0.11 SU.1814 (su-finish-11): an accept whose IFC solids do not build to the shape sent is taken back and written as a mesh
      undo: async (ent) => { if (ent !== cur() || !ent.editor.undo()) return; try { ctx.undoHook.undone(); } catch { /* not mounted yet */ } await rebuild(); afterEdit(); },
    });
  })();
  window.bimcraftPartLinks = partLinks;
}
