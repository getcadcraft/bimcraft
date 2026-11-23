/* SPDX-License-Identifier: Apache-2.0 */
/**
 * library-drop-ui.js: bimcraft.js's 14 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 bimcraft; no behaviour change).
 * mountLibraryDrop(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { boxFromItem } from './clipboard.js';
import { t } from './i18n.js';
import { el, bytes, num } from './ui-util.js';
import { isCloudFile, cloudSignature } from './cloud-types.js';
import { isOleFile } from './rvt-reader.js';
import { archicadVerdict } from './bundle-open.js';

export function mountLibraryDrop(ctx) {
  const { ST, ui, status, frame, guard, openIfcx, openObj, ifcWithUnits, cur, setActive, saveIfc, openCloud, startPlacing, moveGhost, moveGhostXY, commitPlace, root, hasFiles, startsWith } = ctx;

  const isCardDrag = (e) => !!e.dataTransfer && [...(e.dataTransfer.types || [])].includes(ctx.DRAG_TYPE);
  const inRect = (r, x, y) => !!r && r.width > 0 && x >= r.left && x <= r.right && y >= r.top && y <= r.bottom;
  /** Which pane is under a screen point: 'plan' | 'model' | null (the placing bar and tool panels over a pane are not the drawing). */
  function dropTarget(x, y) {
    if (ST.mode !== 'ifc' || !ST.editor) return null;
    if (inRect(ST.modelUi?.planRect?.(), x, y)) return 'plan';
    if (ui.canvasWrap && !ui.canvasWrap.hidden && inRect(ui.canvas.getBoundingClientRect(), x, y)) { const hit = document.elementFromPoint(x, y); if (!hit || !hit.closest('[data-placebar]')) return 'model'; }
    return null;
  }
  function setDropMark(target) { ui.canvasWrap?.classList.toggle('is-drop-target', target === 'model'); }
  /** While dragging: highlight the pane and, once the item is read, draw its footprint under the pointer (plan). */
  function dragOver(drag, x, y) {
    const target = dropTarget(x, y);
    setDropMark(target);
    if (target !== 'plan') { ST.modelUi?.setDropGhost(null); return target; }
    const p = ST.modelUi.planPoint(x, y), b = drag?.got ? boxFromItem(drag.got.item) : null;
    ST.modelUi.setDropGhost({ at: p, poly: b ? [[b.x0, b.y0], [b.x1, b.y0], [b.x1, b.y1], [b.x0, b.y1]].map(([lx, ly]) => [p[0] + lx, p[1] + ly]) : [[p[0] - 150, p[1] - 150], [p[0] + 150, p[1] - 150], [p[0] + 150, p[1] + 150], [p[0] - 150, p[1] + 150]], text: drag?.name });
    return target;
  }
  function dragEnd() { setDropMark(null); ST.modelUi?.setDropGhost(null); }
  /** The drop: the same process as Place in plan / Place in model, started at the drop point (the one question still follows). */
  async function dropIt(drag, x, y) {
    dragEnd();
    if (!drag) return;
    const target = dropTarget(x, y);
    if (ST.mode !== 'ifc' || !ST.editor) { status(t('place.need.ifc'), true); return; }
    if (!target) { if (!root.querySelector('[data-rpane="library"]')?.contains(document.elementFromPoint(x, y))) status(t('lib.drop.where'), true); return; }
    let got;
    try { got = await (drag.load ? drag.load() : drag.resolve()); } catch (e) { status(e.message || String(e), true); return; }
    if (!got) return;
    // the drop point is read first: placing in the plan keeps the level the plan shows
    const plan = target === 'plan' ? ST.modelUi.planPoint(x, y) : null;
    startPlacing({ item: got.item, meta: got.meta, where: target, storey: target === 'plan' ? ST.modelUi.level : undefined });
    if (!ST.placing) return;
    if (target === 'plan' && plan) moveGhostXY(plan[0], plan[1], true);
    else if (target === 'model' && typeof ST.viewer.planePoint === 'function') { const pt = ST.viewer.planePoint(x, y, ST.viewer.placeY || 0); if (pt) moveGhost(pt); }
    if (ST.placing?.at) guard(() => commitPlace(ST.placing.at));
  }

  const outsideFiles = (e) => !ST.innerDrag && hasFiles(e);

  /** Unsaved edits? Ask before replacing the model. */
  /** Unsaved work in this editor: edits, or a model recovered from an autosaved copy (its edits are inside it). */
  const unsavedIn = (ed) => !!(ed && (ed.dirty || ed.recovered || ed.isNew));
  const anyDirty = () => ctx.models.some((m) => unsavedIn(m.editor)) || unsavedIn(ST.editor);
  /** Unsaved edits (in `only`, or any open model)? Ask first. → true = cancel what was asked. */
  const keepEdits = async (only = null) => {
    const ed = only ? only.editor : (unsavedIn(ST.editor) ? ST.editor : ctx.models.find((m) => unsavedIn(m.editor))?.editor);
    if (!unsavedIn(ed)) return false;
    const n = ed.changes.length;
    const fileName = only ? only.name : (ctx.models.find((m) => m.editor === ed)?.name || ST.ifcName);
    const choice = await new Promise((done) => {
      const dlg = el('dialog', { className: 'bc-dialog', 'aria-labelledby': 'bc-unsaved-h' },
        el('form', { method: 'dialog' },
          el('h2', { className: 'bc-h', id: 'bc-unsaved-h' }, t('unsaved.title')),
          el('p', {}, t('unsaved.text', { n, file: fileName })),
          el('p', { className: 'bc-lib-actions' },
            el('button', { type: 'submit', className: 'btn-plot btn-sm-cc', value: 'save' }, t('unsaved.save')),
            el('button', { type: 'submit', className: 'btn-line btn-sm-cc', value: 'discard' }, t('unsaved.discard')),
            el('button', { type: 'submit', className: 'btn-line btn-sm-cc', value: 'cancel' }, t('dialog.cancel')))));
      dlg.addEventListener('close', () => { dlg.remove(); done(dlg.returnValue || 'cancel'); });
      document.body.append(dlg);
      dlg.showModal();
      dlg.querySelector('button[value="cancel"]').focus();
    });
    if (choice === 'save') { const m = ctx.models.find((x) => x.editor === ed); if (m && m !== cur()) setActive(m); if (!(await saveIfc())) return true; }
    return choice === 'cancel';
  };

  /** Open one file. `path` is its place in the open folder (null for a file opened on its own). */
  async function open(file, path, { keepBundle = false } = {}) {
    ST.vaultRef = null;   // the vault sets its own mark after it opens a file (vault-app.js)
    if (!keepBundle) ST.bundleUi?.clear();   // 0.6 DF.12 (b): another file ends the bundle (its own layout DWGs keep it)
    if (ST.addons?.importerFor(file.name)) { await ST.addons.openFromAddon(file); return; }   // 0.5 AO.7: an add-on reads it into IFC
    if (isCloudFile(file.name)) { await openCloud(file); return; }   // 0.5 SG.1 / 0.6 PF (cloud-types.js; a cloud under another name: see the last branch)
    if (await keepEdits()) return;
    const ext = (file.name.split('.').pop() || '').toLowerCase();
    status(t('open.reading', { file: file.name, size: bytes(file.size) }));
    await frame();
    const head = new Uint8Array(await file.slice(0, 16).arrayBuffer());
    if (ext === 'ccbundle' || ext === 'zip') {
      await ST.bundleUi.open(file);   // 0.6 DF.12 (b): a project bundle (manifest.json + the model + layouts); bundle-view.js
    } else if (ext === 'dwg' || ext === 'dxf' || startsWith(head, 'AC10')) {
      await ctx.openDwg(file, path, ext === 'dxf' ? 'dxf' : 'dwg');
    } else if (isOleFile(head)) {
      await ctx.openRevit(file, path);
    } else if (ext === 'step' || ext === 'stp') {
      await openStep(file, path);   // 0.7 D7.26 (session part-08): a part's STEP, read as triangles and opened as an IFC
    } else if (ext === 'ifcx') {
      await openIfcx([file], path, { checked: true });   // 0.9 SU.882: IFC5 alpha, a lab option (Settings › BimCraft)
    } else if (ext === 'obj') {
      await openObj(file, path);   // 0.8 SU.1055 (session bim-08): a Wavefront OBJ, opened as mesh elements of a small IFC
    } else if (ext === 'ifc' || startsWith(head, 'ISO-10303-21')) {
      const data = await ifcWithUnits(new Uint8Array(await file.arrayBuffer()), file);
      if (!data) return;
      await ctx.openIfc(data, file, path, { transfer: true });
    } else if (archicadVerdict(file.name, head)) {
      // 0.6 DF.12 (a): "ROF FDB " at offset 0 = an Archicad project for certain; the extension without it = renamed?
      throw Object.assign(new Error(t(archicadVerdict(file.name, head) === 'project' ? 'open.pln.project' : 'open.pln.renamed', { name: file.name })), { userFacing: true });
    } else if (ext === 'ifczip' || ext === 'ifcxml') {
      throw new Error(t('open.unsupported', { ext: '.' + ext }));
    } else if (cloudSignature(head)) {
      await openCloud(file);   // a LAS / LAZ, E57 or RCS point cloud with another extension
    } else {
      throw new Error(t('open.unknown', { name: file.name }));
    }
  }
  const fromFolder = (path) => !!(ST.folder && path !== null && path !== undefined);

  /** A STEP file (0.7 D7.26): cc-step reads it as triangles (step-ifc.js), each placed solid becomes a proxy element of a small
   *  IFC4 model on one storey, and that model opens like any IFC; what the reader skipped goes into the status line. */
  async function openStep(file, path) {
    status(t('step.open.reading', { name: file.name }));
    await frame();
    let r;
    try { r = (await import('./step-ifc.js')).stepToIfc(new Uint8Array(await file.arrayBuffer()), { name: file.name.replace(/\.(step|stp)$/i, '') }); }
    catch (err) { throw Object.assign(new Error(t('step.open.failed', { name: file.name, why: err && err.code ? t(err.code, err.vars) : String(err && err.message || err) })), { userFacing: true }); }
    const ifc = new File([r.text], file.name.replace(/\.(step|stp)$/i, '') + '.ifc', { type: 'application/x-step' });   // i18n-ignore: a file name
    await ctx.openIfc(new TextEncoder().encode(r.text), ifc, path);
    const tris = r.read.solids.reduce((n, s) => n + s.indices.length / 3, 0);
    const notes = r.read.notes.map((n) => t(n.key, n.vars));
    status(t('step.open.facts', { schema: r.read.schema === 'other' ? 'STEP' : r.read.schema, n: r.read.solids.length, tris: num(tris) }) + (notes.length ? ' ' + t('step.open.notes', { notes: notes.slice(0, 3).join(' ') }) : '') + (r.prisms ? ' ' + t('ifcsolids.kept', { n: r.prisms }) : ''), false, true);
  }

  return { isCardDrag, dragOver, dragEnd, dropIt, outsideFiles, unsavedIn, anyDirty, keepEdits, open, fromFolder };
}
