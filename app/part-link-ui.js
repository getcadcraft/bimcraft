/* SPDX-License-Identifier: Apache-2.0 */
/**
 * part-link-ui.js — the "Part links" card (0.10 BK.179 / SU.1814, session bim-part-link-10). Send the picked element to PartCraft; see which links came
 * back changed; accept (the element's body becomes the part's shape, one undo step) or refuse. The logic is part-link-bim.js and cc-partlink.
 *
 *   mountPartLinks({ t, el, root, status, button, countEl, partUrl, models, selection, apply, show })
 *     models()           → the open models [{ mi, ifc, model, name }]
 *     selection()        → the picked element keys     show(keys) → select and frame them
 *     apply(ent, run, label) → Promise: editor.modelChange(run), the model rebuilt (bimcraft.js)
 *     partUrl            → the PartCraft page's path in this area (from ui.inc; the button is not drawn without it)
 *   → { open(), refresh() }   window.bimcraftPartLinks
 */
import * as PL from './partlink/index.js';
import { PartLinks, linkable, elementLocalMesh, findByGuid, replaceBodyOp } from './part-link-bim.js';
import { KEY_SPAN } from './ifc-model.js';
import { val } from './ifc-util.js';

export function mountPartLinks(h) {
  const { t, el, status } = h;
  const store = PL.idbStore(globalThis.indexedDB);
  const channel = PL.openChannel();
  const books = new Map();   // file name → PartLinks
  let dlg = null, root_pointer = null;
  const words = (e) => (e && e.code ? t(e.code, e.vars) : String((e && e.message) || e));
  const linksOf = async (ent) => { let b = books.get(ent.name); if (!b) { b = new PartLinks({ store, key: ent.name }); await b.load(); books.set(ent.name, b); } return b; };
  const entryOfKey = (key) => h.models().find((m) => m.mi === Math.floor(key / KEY_SPAN)) || null;
  const idOfKey = (key) => key % KEY_SPAN;
  const guidOf = (ent, id) => val(ent.ifc.api.GetLine(ent.model.modelID, id, false)?.GlobalId);

  /** Take what PartCraft sent back; the toolbar count follows. */
  async function refresh() {
    let changed = 0;
    for (const ent of h.models()) { const b = await linksOf(ent); await b.refresh(ent).catch(() => []); changed += b.book.changed().length; }
    if (h.countEl) { h.countEl.textContent = changed ? String(changed) : ''; h.countEl.hidden = !changed; }
    if (h.button) h.button.dataset.changed = String(changed);
    return changed;
  }

  async function send() {
    const keys = h.selection();
    if (keys.length !== 1) { status(t('partlink.pick_one'), true); return; }
    const ent = entryOfKey(keys[0]);
    if (ent) await sendElement(ent, idOfKey(keys[0]));
  }
  async function sendElement(ent, id) {
    const cls = ent.model.classOf.get(id) || '';
    if (!linkable(cls)) { status(t('partlink.err.notlinkable', { cls }), true); return; }
    const win = globalThis.open('', '_blank');   // inside the click: a pop-up blocker lets it through; the page is pointed at PartCraft below
    if (!win) { status(t('handoff.blocked'), true); return; }
    try {
      const b = await linksOf(ent);
      const { link, pkg, context } = await b.send(ent, id, { file: ent.name });
      win.location.href = h.partUrl + '?' + PL.QUERY + '=' + link;
      status(t('partlink.sent', { name: pkg.source.name, n: context.meshes.length }) + (context.omitted ? ' ' + t('partlink.sent_omitted', { n: context.omitted }) : ''), false, true);
      await render();
    } catch (e) { win.close(); status(t('partlink.send_failed', { error: words(e) }), true); }
  }

  async function accept(ent, rec) {
    const b = await linksOf(ent);
    const pend = await b.pending(rec.link);
    if (!pend) { status(t('partlink.err.gone'), true); return; }
    const accepted = { ...rec, state: 'accepted', rev: pend.rev, from: pend.from?.app || 'PartCraft', hash: pend.hash };
    try {
      await h.apply(ent, replaceBodyOp(rec.globalId, pend.mesh, accepted, () => findByGuid(ent, rec.globalId)), t('partlink.undo', { name: rec.name }));
      const now = h.models().find((m) => m.name === ent.name) || ent;
      const id = findByGuid(now, rec.globalId);
      await b.accepted(rec.link, id ? PL.meshHash(elementLocalMesh(now, id)) : pend.hash);
      status(t('partlink.accepted', { name: rec.name }), false, true);
    } catch (e) { status(t('partlink.accept_failed', { error: words(e) }), true); }
    await refresh(); await render();
  }
  async function reject(ent, rec) {
    const b = await linksOf(ent);
    await b.reject(rec.link);
    status(t('partlink.rejected', { name: rec.name }), false, true);
    await refresh(); await render();
  }

  const stateLabel = (r) => t('partlink.state.' + r.state);
  /** What an update would change, in words: volume, size. */
  function summary(ent, rec, pend) {
    const id = findByGuid(ent, rec.globalId);
    if (!id) return t('partlink.err.gone');
    try {
      const c = PL.compareMeshes(elementLocalMesh(ent, id), pend.mesh);
      if (c.same) return t('partlink.same');
      const f = (n) => Math.round(n).toLocaleString();
      const pct = c.volume.pct === null ? '' : ' (' + (c.volume.pct >= 0 ? '+' : '') + c.volume.pct.toFixed(1) + ' %)';
      return t('partlink.change', { a: c.size.before.map(f).join(' x '), b: c.size.after.map(f).join(' x '), pct });
    } catch (e) { return words(e); }
  }

  async function render() {
    if (!dlg) return;
    const body = dlg.querySelector('[data-pl-body]');
    const keys = h.selection();
    const sel = keys.length === 1 ? entryOfKey(keys[0]) : null;
    const selId = sel ? idOfKey(keys[0]) : null;
    const selCls = sel ? sel.model.classOf.get(selId) || '' : '';
    const selName = sel ? val(sel.ifc.api.GetLine(sel.model.modelID, selId, false)?.Name) || selCls : '';
    const can = !!sel && linkable(selCls);
    const why = !sel ? t('partlink.pick_one') : !can ? t('partlink.err.notlinkable', { cls: selCls }) : '';
    const sendBtn = el('button', { type: 'button', className: 'btn-plot btn-sm-cc', 'data-pl-send': '', disabled: !can, title: why || t('partlink.send_title'), onClick: send }, t('partlink.send'));
    const rows = [];
    for (const ent of h.models()) {
      const b = await linksOf(ent);
      for (const r of b.book.list()) {
        const pend = r.state === 'changed' ? await b.pending(r.link) : null;
        rows.push(el('li', { className: 'bc-pl-row', 'data-pl-link': r.link, 'data-pl-state': r.state },
          el('div', { className: 'bc-pl-head' },
            el('strong', {}, r.name || r.ifcClass), ' ', el('span', { className: 'bc-pl-chip is-' + r.state }, stateLabel(r)),
            r.rev ? el('span', { className: 'bc-muted' }, ' ' + t('partlink.rev', { n: r.rev })) : null),
          pend ? el('p', { className: 'bc-pl-change' }, summary(ent, r, pend), r.stale ? el('span', { className: 'bc-pl-stale' }, ' ' + t('partlink.stale')) : null, pend.note ? el('em', {}, ' ' + pend.note) : null) : null,
          el('div', { className: 'bc-pl-actions' },
            el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-pl-show': '', onClick: () => { const id = findByGuid(ent, r.globalId); if (id) h.show([(ent.model.keyBase || 0) + id]); } }, t('partlink.show')),
            pend ? el('button', { type: 'button', className: 'btn-plot btn-sm-cc', 'data-pl-accept': '', onClick: () => accept(ent, r) }, t('partlink.accept')) : null,
            pend ? el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-pl-reject': '', onClick: () => reject(ent, r) }, t('partlink.reject')) : null,
            r.state === 'sent' || r.state === 'accepted' || r.state === 'rejected' ? el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-pl-resend': '', title: t('partlink.resend_title'), onClick: async () => { const id = findByGuid(ent, r.globalId); if (id) await sendElement(ent, id); } }, t('partlink.resend')) : null)));
      }
    }
    body.replaceChildren(
      el('section', {}, el('h3', { className: 'bc-pl-h' }, t('partlink.picked')),
        el('p', {}, sel ? el('span', {}, el('strong', {}, selName), ' ', el('span', { className: 'bc-muted' }, selCls)) : t('partlink.nothing_picked')),
        el('p', { className: 'bc-pl-actions' }, sendBtn), why && sel ? el('p', { className: 'bc-muted', role: 'note' }, why) : null),
      el('section', {}, el('h3', { className: 'bc-pl-h' }, t('partlink.list')),
        rows.length ? el('ul', { className: 'bc-pl-list' }, ...rows) : el('p', { className: 'bc-muted', 'data-pl-empty': '' }, t('partlink.none'))));
  }

  async function open() {
    if (dlg) { dlg.focus(); return; }
    dlg = el('dialog', { className: 'bc-dialog bc-dialog-wide bc-partlink', 'aria-labelledby': 'bc-pl-h', 'data-partlink-dialog': '' },
      el('form', { method: 'dialog' },
        el('h2', { className: 'bc-h', id: 'bc-pl-h' }, t('partlink.title')),
        el('p', {}, t('partlink.lede')),
        el('div', { 'data-pl-body': '' }),
        el('p', { className: 'bc-lib-actions' }, el('button', { type: 'submit', className: 'btn-line btn-sm-cc', value: 'close' }, t('partlink.close')))));
    dlg.addEventListener('close', () => { h.root.removeEventListener('pointerup', root_pointer); dlg.remove(); dlg = null; });
    h.root.append(dlg);
    dlg.show();   // not modal: the person keeps picking in the model, and the card follows
    root_pointer = () => setTimeout(() => render(), 150);
    h.root.addEventListener('pointerup', root_pointer);
    await refresh(); await render();
  }

  channel.on((m) => { if (m && m.kind === 'update') refresh().then(() => render()); });
  globalThis.addEventListener?.('focus', () => { refresh().then(() => render()); });
  h.button?.addEventListener('click', open);
  refresh();
  return { open, refresh, render, send };
}
