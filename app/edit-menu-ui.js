/* SPDX-License-Identifier: Apache-2.0 */
/**
 * edit-menu-ui.js: bimcraft.js's 19 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 bimcraft; no behaviour change).
 * mountEditMenu(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { KEY_SPAN } from './ifc-model.js';
import { readClip, libKey, elementText, placementClip, boxFromItem, boxFromEquipment, writeClip, elementsClip, ghostItem, pasteMove, besideSpot, pickStorey } from './clipboard.js';
import { t } from './i18n.js';
import { boundsOf } from './ifc-vis.js';
import { fromViewer } from './ifc-place.js';
import { el } from './ui-util.js';

export function mountEditMenu(ctx) {
  const { ST, libItems, status, guard, clearProps, showMany } = ctx;

  const picks = () => (ST.viewer && ST.mode === 'ifc' ? [...ST.viewer.selection] : []);

  /** Class of any line: elements with geometry from the load result, the rest (storeys, a stair's parent) read once. */
  const classOfId = (id) => {
    const known = ST.model.classOf.get(id);
    if (known) return known;
    if (ctx.clsMemo.model !== ST.model) { ctx.clsMemo.model = ST.model; ctx.clsMemo.map = new Map(); }
    if (!ctx.clsMemo.map.has(id)) ctx.clsMemo.map.set(id, ST.ifc.className(id));
    return ctx.clsMemo.map.get(id);
  };
  const editable = () => (ST.editor && ST.model ? picks().filter((k) => Math.floor(k / KEY_SPAN) === ctx.cur().mi).map((k) => k - ST.model.keyBase).filter((id) => !ctx.SPATIAL.test(classOfId(id))) : []);

  function currentClip() {
    const shared = readClip(ctx.store);
    if (!ST.clip) return shared;
    if (shared && shared.copiedAt > ST.clip.copiedAt) return shared;
    return ST.clip;
  }

  function clipSource(c) {
    if (!c || c.kind !== 'placement' || c.model !== ST.modelTag || !ST.editor) return null;
    const k = c.copiedAt + '|' + c.id + '|' + ST.modelTag + '|' + ST.editor.changes.length + '|' + ST.editor.undone.length;
    if (ST.srcMemo.k === k) return ST.srcMemo.p;
    const id = ST.editor.now(c.id);
    const p = ST.editor.placer().placements().find((x) => x.id === id);
    ST.srcMemo = { k, p: p && libKey(p) === c.key ? p : null };
    return ST.srcMemo.p;
  }
  /** Why an action cannot act right now ('' = it can). `area` false: BimCraft's own clip only (0.8 D8.15: a copied area newer than it
   *  makes Paste the area's, picture-ui.js). */
  function whyNot(name, { area = true } = {}) {
    const ifcOpen = ST.mode === 'ifc' && !!ST.editor;
    const c = currentClip();
    switch (name) {
      case 'undo': return !ifcOpen ? t('edit.need.ifc.edit') : ST.editor.changes.length ? '' : t('edit.undo.nothing');
      case 'redo': return !ifcOpen ? t('edit.need.ifc.edit') : ST.editor.canRedo ? '' : t('edit.redo.nothing');
      case 'copy':
        if (ST.mode === 'dwg') return ctx.NOT_BUILT.dwg;
        if (!ifcOpen) return t('edit.need.ifc');
        if (!picks().length) return t('edit.need.pick.one');
        return editable().length ? '' : t('edit.refused.spatial');
      case 'paste': case 'paste-in-place':
        if (!ifcOpen) return t('edit.need.ifc.paste');
        if (area && name === 'paste' && ST.picturesUi?.areaWins(c)) return ST.placing ? t('edit.finish.placing') : '';
        if (!c) return t('edit.paste.nothing');
        if (c.kind === 'element') return ctx.NOT_BUILT.element;
        if (c.kind === 'elements') {
          if (c.model !== ST.modelTag) return t('edit.paste.othermodel', { file: c.file || '?' });
          if (!ctx.elementSnaps.has(c.copiedAt)) return t('edit.paste.othertab');
          return ST.placing ? t('edit.finish.placing') : '';
        }
        if (!clipSource(c) && !c.item) return c.file ? t('edit.paste.noitem', { name: c.name, file: c.file }) : t('edit.paste.noitem.other', { name: c.name });
        return ST.placing ? t('edit.finish.placing') : '';
      case 'duplicate': case 'cut': case 'delete':
        if (ST.mode === 'dwg') return ctx.NOT_BUILT.dwg;
        if (!ifcOpen) return t('edit.need.ifc');
        if (!picks().length) return t('edit.need.pick');
        if (!editable().length) return t('edit.refused.spatial');
        return ST.placing ? t('edit.finish.placing') : '';
      case 'select-all': return ifcOpen ? '' : t('edit.need.ifc');
      case 'select-none': return ifcOpen && (picks().length || ST.selInfo || ST.selected !== null) ? '' : t('edit.nothing.picked');
      default: return '';
    }
  }
  function syncEdit() {
    ST.workspace?.refresh();
    for (const b of ctx.editButtons) {
      const why = whyNot(b.dataset.act);
      b.setAttribute('aria-disabled', why ? 'true' : 'false');
      b.title = why || (b.getAttribute('role') === 'menuitem' ? ctx.MENU_TITLE[b.dataset.act] || '' : b.dataset.titleDefault);
    }
  }

  function act(name) {
    if (ST.addons?.runCommand(name)) return;   // 0.5 AO.7: an add-on's command
    if (ST.modelUi?.edit(name)) return;   // drawn walls, doors and windows (model-ui.js): their own delete; copy not yet
    const why = whyNot(name);
    if (name === 'undo') { if (why) status(why); else ctx.undo(); return; }
    if (name === 'redo') { if (why) status(why); else redo(); return; }
    if (name === 'select-none') {
      if (ST.placing) { ctx.stopPlacing(); status(t('place.stopped')); return; }
      if (ST.viewer) ST.viewer.select(null);
      ST.selected = null;
      ST.pickToken++;
      clearProps();
      ctx.afterPick();
      return;
    }
    if (name === 'copy') { if (why) status(why); else copyPicked(); return; }
    if (name === 'paste' || name === 'paste-in-place') {
      if (why) { status(why); return; }
      // 0.8 D8.15: a copied area newer than BimCraft's own clip becomes a picture on this level's plan (picture-ui.js)
      if (name === 'paste' && ST.picturesUi?.areaWins(currentClip())) { guard(() => ST.picturesUi.paste({ own: currentClip(), ownOk: false })); return; }
      if (name === 'paste') startPaste(currentClip());
      else guard(() => pasteInPlace(currentClip()));
      return;
    }
    if (name === 'duplicate') {
      if (why) { status(why); return; }
      if (copyPicked(true)) startPaste(ST.clip, true);
      return;
    }
    if (name === 'select-all') {
      if (why) { status(why); return; }
      if (ST.placing) ctx.stopPlacing();
      const keys = [...ST.viewer.shownKeys()];
      ST.viewer.select(keys);
      if (keys.length > 1) showMany(); else ctx.showProps(ST.viewer.selected);
      ctx.afterPick();
      status(t('edit.selectall.done', { n: keys.length }));
      return;
    }
    if (name === 'delete' || name === 'cut') {
      if (why) { status(why); return; }
      guard(() => deletePicked(name === 'cut'));
      return;
    }
    status(why || t('edit.notbuilt'));
  }

  /** Delete the picked elements (with their parts and openings) — or Cut: copy them first. One undo step. */
  async function deletePicked(isCut) {
    const list = editable(), refused = picks().length - list.length;
    if (isCut && !copyPicked(true, true)) return;
    const label = list.length === 1 ? classOfId(list[0]).replace(/^Ifc/, '') + ' ' + (ST.ifc.api.GetLine(ST.model.modelID, list[0]).Name?.value || '#' + list[0]) : t('edit.many', { n: list.length });
    const r = ST.editor.removeElements(list, { label });
    ST.viewer.select(null);
    await ctx.rebuild(null);
    const extra = r.removed.length - list.length;
    status((isCut ? t('edit.cut.done', { n: list.length }) : t('edit.delete.done', { n: list.length }))
      + (extra > 0 ? ' ' + t('edit.delete.parts', { n: extra }) : '')
      + (refused ? ' ' + t('edit.refused.some', { n: refused }) : ''));
  }

  function redo() {
    let c;
    try { c = ST.editor.redo(); } catch (e) { console.error(e); status(t('edit.redo.failed', { why: e.message || e }), true); syncEdit(); return; }
    if (!c) return;
    ctx.undoHook.redone();   // 0.8 EG.77
    if (c.journal) { guard(async () => { await ctx.rebuild(c.kind === 'place' ? c.id : ST.editor.now(c.id)); status(t('edit.redid.step', { what: c.label || c.kind })); }); return; }
    status(t('edit.redid', { what: c.kind === 'attr' ? c.attr : c.propName }));
    ctx.afterEdit();
  }

  /**
   * Copy the picked element(s). ONE placed library item → a placement clip (and its text), so it pastes into any model;
   * anything else, several elements, or a Cut → an elements clip (snapshot kept in memory, names and properties as text).
   */
  function copyPicked(quiet = false, isCut = false) {
    const now = new Date().toISOString();
    if (isCut || !ST.selInfo || !ST.selInfo.placement || picks().length > 1) return copyElements(now, quiet, isCut);
    const p = ST.selInfo.p;
    copyText(elementText(p));
    if (ST.selInfo.placement) {
      const placer = ST.editor.placer();
      const pl = placer.placements().find((x) => x.id === ST.selInfo.id);
      if (!pl) { status(t('edit.copy.noplacement'), true); return false; }
      const kept = libItems.get(libKey(pl));
      const st = placer.info().storeys.find((s) => s.id === pl.storey);
      ST.clip = placementClip(pl, {
        model: ST.modelTag, file: ST.ifcName, storeyName: st?.name || '', storeyElevation: st ? st.elevation : null, now,
        item: kept ? kept.item : null, meta: kept ? kept.meta : null,
        box: kept ? boxFromItem(kept.item) : boxFromEquipment(pl.equipment, placer.unitMm),
      });
      const w = writeClip(ctx.store, ST.clip);
      syncEdit();
      if (!quiet) status((ST.clip.itemNumber ? t('edit.copy.item.no', { name: ST.clip.name, no: ST.clip.itemNumber }) : t('edit.copy.item', { name: ST.clip.name }))
        + (w.withoutItem ? ' ' + t('edit.copy.toolarge') : ''));
      return true;
    }
    return copyElements(now, quiet, false);
  }

  /** An elements clip: snapshot in memory, anchor and box from the meshes (model mm), the text on the system clipboard. */
  function copyElements(now, quiet, isCut) {
    const list = editable();
    if (!list.length) { status(t('edit.refused.spatial')); return false; }
    const snap = ST.editor.snapshot(list);
    const C = ctx.coordMatrix(), bb = boundsOf(ST.model.batches, snap.elements.map((e) => ST.model.keyBase + e.id));
    const info = ST.editor.placer().info();
    const st = info.storeys.find((x) => x.id === snap.storey);
    const zb = st ? st.elevation : 0;
    let box = null, ax = 0, ay = 0, rot = 0;
    if (snap.frame) {
      // turned like the element (ifc-place.js elementsFrame): a door in a building turned in its site keeps its own shape,
      // and the ghost, wall snap and paste turn from there, not from the model's axes (Discord bug, 2026-10-14)
      ({ x: ax, y: ay, rot, box } = snap.frame);
    } else if (bb) {
      const pts = [];
      for (const x of [bb.min[0], bb.max[0]]) for (const y of [bb.min[1], bb.max[1]]) for (const z of [bb.min[2], bb.max[2]]) pts.push(fromViewer(C, [x, y, z]));
      const lo = [0, 1, 2].map((k) => Math.min(...pts.map((q) => q[k]))), hi = [0, 1, 2].map((k) => Math.max(...pts.map((q) => q[k])));
      ax = (lo[0] + hi[0]) / 2; ay = (lo[1] + hi[1]) / 2;
      box = { x0: lo[0] - ax, y0: lo[1] - ay, z0: lo[2] - zb, x1: Math.max(hi[0] - ax, lo[0] - ax + 1), y1: Math.max(hi[1] - ay, lo[1] - ay + 1), z1: Math.max(hi[2] - zb, lo[2] - zb) };
    } else {
      const pl = ST.ifc.api.GetLine(ST.model.modelID, list[0]).ObjectPlacement?.value;
      if (pl) { const w = ST.ifc.api.GetWorldTransformMatrix(ST.model.modelID, pl); ax = w[12] * info.unitMm; ay = w[13] * info.unitMm; }
    }
    const rows = list.map((id) => { const l = ST.ifc.api.GetLine(ST.model.modelID, id); return { id, name: l.Name?.value || '', cls: classOfId(id), guid: l.GlobalId?.value || '' }; });
    ST.clip = elementsClip(rows, { model: ST.modelTag, file: ST.ifcName, now, storey: snap.storey, storeyName: st?.name || '', storeyElevation: st ? st.elevation : null, x: ax, y: ay, rot, box, cut: isCut });
    ctx.elementSnaps.clear();   // one clip at a time: an older snapshot is never pasted
    ctx.elementSnaps.set(ST.clip.copiedAt, { snap, cut: isCut, pasted: 0 });
    writeClip(ctx.store, ST.clip);
    if (list.length === 1 && ST.selInfo && ST.selInfo.id === list[0]) copyText(elementText(ST.selInfo.p));
    else copyText(rows.map((r) => r.cls.replace(/^Ifc/, '') + ': ' + (r.name || t('prop.unnamed')) + (r.guid ? ' (' + r.guid + ')' : '')).join('\n') + '\n');
    syncEdit();
    if (!quiet) status(t('edit.copy.done', { n: list.length }));
    return true;
  }

  /** Text to the system clipboard; a hidden textarea when the Clipboard API is refused; else a dialog to copy from. */
  async function copyText(text) {
    try { await navigator.clipboard.writeText(text); return; } catch (e) { /* not allowed here: try the old way */ }
    const ta = el('textarea', { readOnly: true, 'aria-hidden': 'true', className: 'bc-offscreen' });
    ta.value = text;
    document.body.append(ta);
    ta.select();
    let done = false;
    try { done = document.execCommand('copy'); } catch (e) { done = false; }
    ta.remove();
    if (done) return;
    const box = el('textarea', { className: 'bc-input bc-copy-text', readOnly: true, rows: 12, 'aria-label': t('clip.text.label') });
    box.value = text;
    ctx.dialog(t('clip.text.title'), el('div', {}, el('p', { className: 'bc-muted' }, t('clip.text.hint')), box));
    box.focus();
    box.select();
  }

  /** Paste with the pointer: the placing bar and ghost; each click places another copy until Esc. */
  function startPaste(c, dup = false) {
    const item = ghostItem(c);
    ctx.startPlacing({ item, meta: { sha256: c.meta?.sha256 || '' } }, c);
    if (ST.placing && c.kind === 'elements') { status(t(dup ? 'edit.duplicate.start' : 'edit.paste.start', { n: c.count })); return; }
    if (ST.placing) status(t(dup ? 'edit.dup.item' : 'edit.paste.item', { name: c.name }));
  }

  /** One pasted copy: like its source in the model it came from, else from the kept library item. */
  function pastePlacement(c, at) {
    const opts = { storey: at.storey, x: at.x, y: at.y, rot: at.rot, itemNumber: ST.editor.placer().nextItemNumber(), quantity: c.quantity, notes: c.notes };
    const src = clipSource(c);
    if (src) return { r: ST.editor.placeLike(src.id, opts, { label: c.name }), opts };
    if (!c.item) throw new Error(whyNot('paste'));
    const h = c.box ? Math.round(c.box.z1 - c.box.z0) : 900;
    const r = ST.editor.placeItem(c.item, { ...opts, library: c.meta?.library, sha256: c.meta?.sha256 || '', sourceFile: c.meta?.sourceFile || '', variant: c.meta?.variant || null, standInHeight: c.item.body ? 0 : Math.max(1, h) });
    rememberItem({ item: c.item, meta: c.meta || {} });
    return { r, opts };
  }
  /** Paste an elements clip: copies of the snapshot moved from the clip's anchor to `at` (storey, x, y, rot). */
  async function pasteElementsAt(c, at, how) {
    const kept = ctx.elementSnaps.get(c.copiedAt);
    if (!kept || c.model !== ST.modelTag) { status(whyNot('paste')); return; }
    const r = ST.editor.pasteElements(kept.snap, { storey: at.storey, ...pasteMove(c, at), keepNumbers: kept.cut && !kept.pasted },
      { label: c.count === 1 ? (c.cls || '').replace(/^Ifc/, '') + ' ' + (c.name || '') : t('edit.many', { n: c.count }) });
    kept.pasted++;
    await ctx.rebuild(r.ids[0]);
    ST.viewer.select(r.ids.map((id) => ST.model.keyBase + id));
    if (r.ids.length > 1) showMany();
    ctx.afterPick();
    status(t(how === 'place' ? 'edit.paste.inplace' : how === 'beside' ? 'edit.paste.beside' : 'edit.paste.done', { n: r.ids.length }));
    if (ST.placing) ST.viewer.setGhost(null);
  }
  async function commitPaste(c, at) {
    if (c.kind === 'elements') { await pasteElementsAt(c, at, 'click'); return; }
    const { r, opts } = pastePlacement(c, at);
    await ctx.rebuild(r.id);
    status(t('edit.pasted.item', { name: c.name, no: opts.itemNumber }));
    if (ST.placing) { ST.placing.faces = ST.placing.snap ? ST.editor.placer().wallFaces(Number(ctx.pb.storey.value)) : null; ST.viewer.setGhost(null); }
  }
  /** Paste in place: same X, Y and turn; beside the original when it is still on that storey (an exact overlap helps no one). */
  async function pasteInPlace(c) {
    if (c.kind === 'elements') {
      // beside the originals while they are still in the model (an exact overlap helps no one), else exactly in place
      const still = c.ids.some((id) => ST.model.classOf.has(ST.editor.now(id)));
      const at = still ? { storey: c.storey, ...besideSpot(c) } : { storey: c.storey, x: c.x, y: c.y, rot: c.rot || 0 };
      await pasteElementsAt(c, at, still ? 'beside' : 'place');
      return;
    }
    const storeys = ST.editor.placer().info().storeys;
    const src = clipSource(c);
    const st = pickStorey(c, storeys, !!src || c.model === ST.modelTag);
    if (!st) { status(t('edit.paste.nostoreys'), true); return; }
    let at = { storey: st.id, x: c.x, y: c.y, rot: c.rot }, beside = false;
    if (src && src.storey === st.id) { at = { storey: st.id, ...besideSpot(c) }; beside = true; }
    const { r, opts } = pastePlacement(c, at);
    await ctx.rebuild(r.id);
    const where = storeys.find((s) => s.id === st.id)?.name || t('edit.paste.thestorey');
    const HOW = { same: '', name: ' ' + t('edit.paste.how.name'), elevation: ' ' + t('edit.paste.how.elevation'), first: ' ' + t('edit.paste.how.first') };
    status(t(beside ? 'edit.pasted.inplace.beside' : 'edit.pasted.inplace.same', { name: c.name, no: opts.itemNumber, storey: where, how: HOW[st.how] }));
  }

  function rememberItem(entry) {
    if (!entry || !entry.item) return;
    const key = entry.item.uuid ? entry.item.uuid + '@' + entry.item.version + (entry.meta?.variant?.id ? '#' + entry.meta.variant.id : '') : 'sha:' + (entry.meta?.sha256 || '');
    libItems.set(key, { item: entry.item, meta: { library: entry.meta?.library || (entry.item.uuid ? 'librarycraft' : 'file'), sha256: entry.meta?.sha256 || '', sourceFile: entry.meta?.sourceFile || '', ...(entry.meta?.variant ? { variant: entry.meta.variant } : {}) } });
  }

  return { picks, classOfId, currentClip, whyNot, syncEdit, act, redo, copyText, commitPaste, rememberItem };
}
