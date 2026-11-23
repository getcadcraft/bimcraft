/* SPDX-License-Identifier: Apache-2.0 */
/**
 * section-plane-wire.js: bimcraft.js's 0 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountSectionPlaneWire(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { t } from './i18n.js';

export function mountSectionPlaneWire(ctx) {
  const { ST, ui, status, buildingTurn, applySection, placeSectionBar, usec, turnBtn, root } = ctx;

  ST.turnOf = null;
  turnBtn?.addEventListener('click', () => {
    if (!ST.viewer || !ST.cut) return;
    const on = !ST.viewer.sectionTurn, deg = buildingTurn();
    ST.viewer.setSectionTurn(on ? deg * Math.PI / 180 : 0);
    ST.cut.offset = null; ST.cut.cells = null; ST.cut.box = null;   // the numbers were in the other frame
    applySection();
    status(on ? t('sec.turn.on', { deg: Math.round(deg * 10) / 10 }) : t('sec.turn.off'));
  });
  {
    const again = () => { if (!usec.bar.hidden) placeSectionBar(); };
    const ro = new ResizeObserver(again);
    for (const o of [ui.toolbar, usec.bar.parentElement, root.querySelector('[data-modelbar]')]) if (o) ro.observe(o);
    // the layout (Split / Plan only / stacked) and the plan showing or not
    const mo = new MutationObserver(again);
    mo.observe(usec.bar.parentElement, { attributes: true, attributeFilter: ['class'] });
    const pw = root.querySelector('[data-plan-wrap]');
    if (pw) mo.observe(pw, { attributes: true, attributeFilter: ['hidden'] });
  }
}
