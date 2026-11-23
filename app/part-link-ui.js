/* SPDX-License-Identifier: Apache-2.0 */
/**
 * part-link-ui.js — the "Part links" card (0.10 BK.179 / SU.1814, session bim-part-link-10). Send the picked element to PartCraft; see which links came
 * back changed; accept (the element's body becomes the part's shape, one undo step) or refuse. The logic is part-link-bim.js and cc-partlink.
 *
 *   mountPartLinks({ t, el, root, status, button, countEl, partUrl, modelUrl?, models, selection, apply, undo?, show })
 *     models()           → the open models [{ mi, ifc, model, name }]
 *     selection()        → the picked element keys     show(keys) → select and frame them
 *     apply(ent, run, label) → Promise: editor.modelChange(run), the model rebuilt (bimcraft.js)
 *     partUrl            → the PartCraft page's path in this area (from ui.inc); modelUrl → ModelCraft's (0.11 SU.1814); the button is drawn when either is
 *     undo(ent)          → Promise: take the last change back (an accept whose solids do not build to the shape sent goes back and is written as a mesh)
 *   → { open(), refresh(), render(), send(target), list(), acceptLink(link), rejectLink(link), sendLink(link, app?), showLink(link), targets() }   window.bimcraftPartLinks
 *     (list/acceptLink/rejectLink/sendLink/showLink: 0.11 su-finish-11 super-link, for a host window such as SuperCad's Links window; accept and reject → { ok, message })
 */
import * as PL from './partlink/index.js';
import { PartLinks, linkable, elementLocalMesh, findByGuid, replaceBodyOp, bodyForm } from './part-link-bim.js';
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

  // 0.11 SU.1814 (su-finish-11): PartCraft and ModelCraft take the same package
  const targets = [h.partUrl ? { app: 'PartCraft', url: h.partUrl } : null, h.modelUrl ? { app: 'ModelCraft', url: h.modelUrl } : null].filter(Boolean);   // i18n-ignore: app names
  async function send(target = targets[0]) {
    const keys = h.selection();
    if (keys.length !== 1) { status(t('partlink.pick_one'), true); return; }
    const ent = entryOfKey(keys[0]);
    if (ent) await sendElement(ent, idOfKey(keys[0]), target);
  }
  async function sendElement(ent, id, target = targets[0]) {
    if (!target) return;
    const cls = ent.model.classOf.get(id) || '';
    if (!linkable(cls)) { status(t('partlink.err.notlinkable', { cls }), true); return; }
    const win = globalThis.open('', '_blank');   // inside the click: a pop-up blocker lets it through; the page is pointed at PartCraft below
    if (!win) { status(t('handoff.blocked'), true); return; }
    try {
      const b = await linksOf(ent);
      const { link, pkg, context } = await b.send(ent, id, { file: ent.name });
      win.location.href = target.url + '?' + PL.QUERY + '=' + link;
      status(t('partlink.sent_to', { name: pkg.source.name, n: context.meshes.length, app: target.app }) + (context.omitted ? ' ' + t('partlink.sent_omitted', { n: context.omitted }) : ''), false, true);
      await render();
    } catch (e) { win.close(); status(t('partlink.send_failed', { error: words(e) }), true); }
  }

  async function accept(ent, rec) {
    const b = await linksOf(ent);
    const pend = await b.pending(rec.link);
    if (!pend) { status(t('partlink.err.gone'), true); return { ok: false, message: t('partlink.err.gone') }; }
    const app = pend.from?.app || 'PartCraft';   // i18n-ignore: an app name
    const accepted = { ...rec, state: 'accepted', rev: pend.rev, from: app, hash: pend.hash };
    const label = t('partlink.undo_from', { name: rec.name, app });
    const after = () => { const now = h.models().find((m) => m.name === ent.name) || ent; const id = findByGuid(now, rec.globalId); return { now, id }; };
    try {
      // 0.11 SU.1814: IFC's own solids when the shape is one (bodyForm); the engine's build of them must be the shape that was sent, else a mesh
      let form = bodyForm(pend), fell = false;
      await h.apply(ent, replaceBodyOp(rec.globalId, pend.mesh, accepted, () => findByGuid(ent, rec.globalId), form), label);
      let { now, id } = after();
      if (form.as !== 'mesh' && !builtAsSent(now, id, pend.mesh)) {
        if (h.undo) await h.undo(now);
        const fresh = h.models().find((m) => m.name === ent.name) || now;   // the rebuild opened the model again: use the entry as it is now
        await h.apply(fresh, replaceBodyOp(rec.globalId, pend.mesh, accepted, () => findByGuid(fresh, rec.globalId)), label);
        ({ now, id } = after()); form = { as: 'mesh' }; fell = true;
      }
      await b.accepted(rec.link, id ? PL.meshHash(elementLocalMesh(now, id)) : pend.hash);
      const how = form.as === 'csg' ? t('partlink.form.csg', { n: form.solid.steps.length - 1 }) : t('partlink.form.' + form.as);
      const message = t('partlink.accepted_as', { name: rec.name, app, form: how }) + (fell ? ' ' + t('partlink.fellback') : '');
      status(message, false, true);
      await refresh(); await render();
      return { ok: true, message, form: form.as };
    } catch (e) { const message = t('partlink.accept_failed', { error: words(e) }); status(message, true); await refresh(); await render(); return { ok: false, message, code: e && e.code || '' }; }
  }
  async function reject(ent, rec) {
    const b = await linksOf(ent);
    await b.reject(rec.link);
    const message = t('partlink.rejected', { name: rec.name });
    status(message, false, true);
    await refresh(); await render();
    return { ok: true, message };
  }

  /* 0.11 SU.1814 (su-finish-11 super-link): the same links for a host window (SuperCad's Links window). Plain records, no DOM; the actions run the
     card's own accept / keep mine / send, so the host never copies BimCraft's logic. */
  async function list() {
    const out = [];
    for (const ent of h.models()) {
      const b = await linksOf(ent);
      await b.refresh(ent).catch(() => []);
      for (const r of b.book.list()) {
        const pend = r.state === 'changed' ? await b.pending(r.link) : null;
        out.push({ link: r.link, file: ent.name, globalId: r.globalId, name: r.name || r.ifcClass, ifcClass: r.ifcClass, state: r.state, label: stateLabel(r), rev: r.rev || 0,
          from: r.from || '', stale: !!r.stale, pending: r.pending ? { app: r.pending.from?.app || '', rev: r.pending.rev, note: r.pending.note || '', savedAt: r.pending.savedAt || '' } : null,
          change: pend ? summary(ent, r, pend) : '' });
      }
    }
    return out;
  }
  const findRec = (link) => { for (const ent of h.models()) { const b = books.get(ent.name), r = b && b.book.get(link); if (r) return { ent, b, r }; } return null; };
  async function acceptLink(link) { await list(); const f = findRec(link); return f ? accept(f.ent, f.r) : { ok: false, message: t('partlink.err.gone') }; }
  async function rejectLink(link) { await list(); const f = findRec(link); return f ? reject(f.ent, f.r) : { ok: false, message: t('partlink.err.gone') }; }
  /** Send the element of a link again, to `app` ('PartCraft' | 'ModelCraft'; default the app it last came from). Call it inside the click: it opens the tab first. */
  function sendLink(link, app = '') {
    const f = findRec(link); if (!f) return { ok: false, message: t('partlink.err.gone') };
    const id = findByGuid(f.ent, f.r.globalId); if (!id) return { ok: false, message: t('partlink.err.gone') };
    const tg = targets.find((x) => x.app === (app || f.r.from || f.r.pending?.from?.app)) || targets[0];
    sendElement(f.ent, id, tg);
    return { ok: !!tg, app: tg ? tg.app : '' };
  }
  function showLink(link) { const f = findRec(link); const id = f ? findByGuid(f.ent, f.r.globalId) : 0; if (id) h.show([(f.ent.model.keyBase || 0) + id]); return !!id; }

  /** The element as the engine built it is the shape that was sent: volume within 0.5 %, box within 0.5 mm (and 0.01 % of its size). */
  function builtAsSent(ent, id, mesh) {
    if (!id) return false;
    let got; try { got = PL.meshStats(elementLocalMesh(ent, id)); } catch { return false; }
    const want = PL.meshStats(mesh), diag = Math.hypot(want.box[3] - want.box[0], want.box[4] - want.box[1], want.box[5] - want.box[2]);
    return Math.abs(got.volume - want.volume) <= Math.abs(want.volume) * 0.005 && got.box.every((v, i) => Math.abs(v - want.box[i]) <= 0.5 + diag * 1e-4);
  }
  const stateLabel = (r) => (r.state === 'changed' && r.pending?.from?.app ? t('partlink.state.changed_in', { app: r.pending.from.app }) : t('partlink.state.' + r.state));
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

  // 0.11 (su-finish-11): a render that lands while BimCraft reloads the model after an edit (the old model is closed, the new one not yet in
  // place) would read a closed model; it waits a moment and draws again instead of throwing into the page
  async function render() { try { await renderNow(); } catch { setTimeout(() => renderNow().catch(() => {}), 400); } }
  async function renderNow() {
    if (!dlg) return;
    const body = dlg.querySelector('[data-pl-body]');
    const keys = h.selection();
    const sel = keys.length === 1 ? entryOfKey(keys[0]) : null;
    const selId = sel ? idOfKey(keys[0]) : null;
    const selCls = sel ? sel.model.classOf.get(selId) || '' : '';
    const selName = sel ? val(sel.ifc.api.GetLine(sel.model.modelID, selId, false)?.Name) || selCls : '';
    const can = !!sel && linkable(selCls);
    const why = !sel ? t('partlink.pick_one') : !can ? t('partlink.err.notlinkable', { cls: selCls }) : '';
    const sendBtns = targets.map((tg, i) => el('button', { type: 'button', className: (i ? 'btn-line' : 'btn-plot') + ' btn-sm-cc', 'data-pl-send': tg.app.toLowerCase(), disabled: !can, title: why || t('partlink.send_to_title', { app: tg.app }), onClick: () => send(tg) }, t('partlink.send_to', { app: tg.app })));
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
            r.state === 'sent' || r.state === 'accepted' || r.state === 'rejected' ? el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-pl-resend': '', title: t('partlink.resend_title'), onClick: async () => { const id = findByGuid(ent, r.globalId); if (id) await sendElement(ent, id, targets.find((x) => x.app === r.from) || targets[0]); } }, t('partlink.resend')) : null)));
      }
    }
    body.replaceChildren(
      el('section', {}, el('h3', { className: 'bc-pl-h' }, t('partlink.picked')),
        el('p', {}, sel ? el('span', {}, el('strong', {}, selName), ' ', el('span', { className: 'bc-muted' }, selCls)) : t('partlink.nothing_picked')),
        el('p', { className: 'bc-pl-actions' }, ...sendBtns), why && sel ? el('p', { className: 'bc-muted', role: 'note' }, why) : null),
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
  return { open, refresh, render, send, list, acceptLink, rejectLink, sendLink, showLink, targets: () => targets.map((x) => x.app) };
}
