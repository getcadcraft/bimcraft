/* SPDX-License-Identifier: Apache-2.0 */
/**
 * site-ctx-ui.js — CivilCraft's "Address to site" file taken as SUGGESTIONS (0.8 EG.63, civil_PART_4). A `.ccsite.json` handed over from CivilCraft (?handoff=…, meta kind 'site') or
 * dropped/opened shows a dialog: the buildings and the parcel the open sources found round the address, a checkbox for each, the height typed for buildings whose height
 * the source did not give; flood, zoning and soil outlines are listed as information. Nothing is added until "Add the ticked ones": the buildings become walls in one undo
 * step on this level, the parcel becomes the site outline (a second step). The file is read with site-context.js (the shared, cleaning reader).
 *
 *   mountSiteContext(modelUi) → { receive(file) → Promise<boolean> }       true when the file was a site-context file (handled here), false = let the app open it
 */
import { readContext, proposals, pick } from './site-context.js';
import { contextChange, outlineChange } from './site-ctx-build.js';
import { fmtLen, parseLen } from './model-units.js';

export const isSiteFile = (file) => /\.ccsite\.json$/i.test(file?.name || '');

export function mountSiteContext(modelUi) {
  const A = modelUi.extend({});
  const t = (...a) => A.t(...a);
  async function receive(file) {
    if (!isSiteFile(file)) return false;
    const r = readContext(await file.text());
    if (!r.ok) { A.host.status(t('model.sitectx.bad.' + r.why), true); return true; }
    show(r.ctx);
    return true;
  }
  function show(ctx) {
    document.querySelector('[data-sitectx-dialog]')?.remove();
    const doc = document, dlg = doc.createElement('dialog');
    dlg.dataset.sitectxDialog = ''; dlg.setAttribute('aria-label', t('model.sitectx.title')); dlg.style.cssText = 'max-width:34rem;width:calc(100vw - 2rem);max-height:80vh;overflow:auto';
    const add = (tag, text, cls) => { const n = doc.createElement(tag); if (cls) n.className = cls; if (text !== undefined) n.textContent = text; dlg.append(n); return n; };
    add('h2', t('model.sitectx.title'));
    add('p', t('model.sitectx.lead', { lat: ctx.origin.lat.toFixed(5), lon: ctx.origin.lon.toFixed(5), n: ctx.items.length }), 'bc-muted');
    const hl = doc.createElement('label'); hl.className = 'bc-mb-field'; hl.append(t('model.sitectx.height') + ' ');
    const hin = doc.createElement('input'); hin.type = 'text'; hin.value = fmtLen(6000, A.units()); hin.dataset.sitectxHeight = ''; hl.append(hin); dlg.append(hl);
    const list = doc.createElement('div'); dlg.append(list);
    let props = proposals(ctx);
    const boxes = [];
    const draw = () => {
      const hmm = parseLen(hin.value, A.units());
      props = proposals(ctx, { defaultHeight: Number.isFinite(hmm) && hmm > 0 ? hmm / 1000 : 6 });
      list.replaceChildren(); boxes.length = 0;
      for (const p of props) {
        if (!p.adds) { const li = doc.createElement('p'); li.className = 'bc-muted'; li.textContent = t('model.sitectx.info.' + p.kind, { label: p.label || p.name || p.id }); list.append(li); continue; }
        const lab = doc.createElement('label'); lab.className = 'bc-mb-field'; const cb = doc.createElement('input'); cb.type = 'checkbox'; cb.checked = true; cb.value = p.id; cb.dataset.sitectxItem = p.id;
        const sp = doc.createElement('span');
        sp.textContent = p.kind === 'parcel' ? t('model.sitectx.item.parcel', { name: p.name || p.id }) : t('model.sitectx.item.building', { name: p.name || p.id, h: fmtLen(p.height * 1000, A.units()) }) + (p.assumed ? ' ' + t('model.sitectx.assumed.' + p.assumed) : '');
        lab.append(cb, ' ', sp); list.append(lab); boxes.push(cb);
      }
    };
    hin.addEventListener('change', draw); draw();
    add('p', t('model.sitectx.attr', { a: ctx.attribution.join('; ') }), 'bc-muted');
    const row = doc.createElement('div'), ok = doc.createElement('button'), no = doc.createElement('button');
    ok.type = no.type = 'button'; ok.className = no.className = 'bc-tool'; ok.dataset.sitectxAdd = ''; ok.textContent = t('model.sitectx.add'); no.textContent = t('model.sitectx.cancel');
    ok.addEventListener('click', () => {
      const ids = boxes.filter((b) => b.checked).map((b) => b.value), kept = pick(props, ids);
      const storey = A.S.data?.levels?.find((l) => l.id === A.S.level)?.guid;   // S.level is the level's id; the model ops take its GlobalId
      if (!A.ed() || !storey) { A.host.status(t('model.sitectx.nomodel'), true); return; }
      if (!kept.length) { A.host.status(t('model.sitectx.none'), true); return; }
      const bld = kept.filter((p) => p.kind === 'building').length;
      if (bld) A.commit(contextChange(kept, { storey, defaultHeight: props.find((p) => p.assumed === 'default')?.height || 6 }), { label: t('model.sitectx.undo'), verb: t('model.verb.drew') });
      const out = outlineChange(kept, { storey });
      if (out) A.commit(out, { label: t('model.sitectx.undo.site'), verb: t('model.verb.drew') });
      dlg.close(); dlg.remove();
      A.host.status(t('model.sitectx.done', { b: bld, p: out ? 1 : 0 }));
    });
    no.addEventListener('click', () => { dlg.close(); dlg.remove(); });
    row.append(ok, ' ', no); dlg.append(row);
    doc.body.append(dlg); dlg.showModal();
  }
  const api = { receive, show };
  if (typeof window !== 'undefined') window.bimcraftSiteContext = api;   // for tests
  return api;
}
