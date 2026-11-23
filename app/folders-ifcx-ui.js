/* SPDX-License-Identifier: Apache-2.0 */
/**
 * folders-ifcx-ui.js: bimcraft.js's 11 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 bimcraft; no behaviour change).
 * mountFoldersIfcx(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { t } from './i18n.js';
import { el, num, fillDl, bytes } from './ui-util.js';
import { scanFolder } from './folder-scan.js';
import { rememberFolder } from './folder-pick.js';
import { renderFolder } from './folder-view.js';

export function mountFoldersIfcx(ctx) {
  const { ST, ui, status, frame, guard, addModel, showStage, root } = ctx;

  // ---- IFC5 alpha (IFCX), a lab option (0.9 SU.882, session bim-ifcx-09) ----
  // Settings › BimCraft › "IFC5 alpha (IFCX) - the format is still changing; read first" turns on Open IFC5 alpha (one or several
  // files together: the file, its layers, its schema files) and Export › IFC5 alpha. The reading is ifcx-bimcraft.js on cc-ifcx
  // (./ifcx/, lib/ifcx synced): the file becomes a small IFC4 model that opens like any IFC. Nothing is fetched from the network.
  function applyIfcxOption() {
    root.querySelectorAll('[data-ifcx-open], [data-ifcx-export]').forEach((b) => { b.hidden = !ctx.settings.ifcx; });
  }

  const ifcxWords = (err) => (err && typeof err.code === 'string' && err.code.startsWith('ifcx.err.') ? t(err.code, err.vars || {}) : String((err && err.message) || err));
  const shortPath = (p) => (typeof p === 'string' && p.length > 30 ? p.slice(0, 8) + '…' : p ?? '');
  /** The issues of a read as short sentences: the same finding on many nodes is one line with a count. */
  function ifcxIssueLines(issues) {
    const groups = new Map();
    for (const i of issues) {
      const key = i.level + '|' + i.code + '|' + (i.attribute || '') + '|' + (i.vars && i.vars.uri || '');
      const g = groups.get(key) || groups.set(key, { i, n: 0 }).get(key);
      g.n++;
    }
    const order = { error: 0, warning: 1, info: 2 };
    return [...groups.values()].sort((a, b) => order[a.i.level] - order[b.i.level]).map(({ i, n }) => {
      const words = t('ifcx.issue.' + i.code, { ...(i.vars || {}), path: shortPath(i.path ?? (i.vars && i.vars.path)), attribute: i.attribute || '', where: i.where ? ' (' + i.where + ')' : '' });
      return { level: i.level, text: (n > 1 ? words + ' (×' + n + ')' : words) };
    });
  }
  function ifcxReport(r) {
    const lines = ifcxIssueLines(r.issues.filter((i) => i.level !== 'info'));
    if (!lines.length) return Promise.resolve();
    return new Promise((done) => {
      const none = t('ifcx.report.none');
      const dlg = el('dialog', { className: 'bc-dialog', 'aria-labelledby': 'bc-ifcx-h', 'data-ifcx-report': '' },
        el('form', { method: 'dialog' },
          el('h2', { className: 'bc-h', id: 'bc-ifcx-h' }, t('ifcx.report.title')),
          el('p', {}, t('ifcx.report.lede')),
          el('p', { className: 'bc-muted' }, t('ifcx.report.files', { main: r.used.main, layers: r.used.layers.join(', ') || none, schemas: r.used.schemas.join(', ') || none })),
          el('ul', { className: 'bc-ifcx-issues' }, ...lines.slice(0, 40).map((l) => el('li', { 'data-ifcx-level': l.level }, el('strong', {}, t('ifcx.report.' + l.level) + ': '), l.text))),
          lines.length > 40 ? el('p', {}, t('ifcx.report.more', { n: lines.length - 40 })) : null,
          el('p', { className: 'bc-lib-actions' }, el('button', { type: 'submit', className: 'btn-line btn-sm-cc', value: 'ok' }, t('ifcx.dialog.close')))));
      dlg.addEventListener('close', () => { dlg.remove(); done(); });
      document.body.append(dlg);
      dlg.showModal();
    });
  }
  /** Open IFCX file(s). The first file with nodes is the main file; the others are layers or schema files (see readIfcxFiles).
   *  With a model already open the dedicated button adds the file beside it (remove it with the x in the model list = the undo);
   *  Open replaces, after the usual question about edits. */
  async function openIfcx(files, path, { checked = false, beside = false } = {}) {
    if (!ctx.settings.ifcx) throw Object.assign(new Error(t('ifcx.off')), { userFacing: true });
    if (beside && ctx.models.length && ST.mode === 'ifc') { /* added below */ } else if (!checked && await ctx.keepEdits()) return;
    status(t('ifcx.reading', { n: files.length }));
    await frame();
    let r;
    try { r = await (await import('./ifcx-bimcraft.js')).readIfcxFiles(await Promise.all(files.map(async (f) => ({ name: f.name, text: await f.text() })))); }
    catch (err) { throw Object.assign(new Error(t('ifcx.failed', { name: files[0].name, why: ifcxWords(err) })), { userFacing: true }); }
    const name = r.used.main.replace(/\.ifcx$/i, '');
    const ifcFile = new File([r.text], name + '.ifc', { type: 'application/x-step' });   // i18n-ignore: a file name
    const facts = { name: r.used.main, elements: num(r.stats.elements), tris: num(r.stats.triangles), layers: r.stats.layers };
    const notes = ifcxIssueLines(r.issues.filter((i) => i.level !== 'info')).length;   // the same finding on many nodes counts once
    if (beside && ctx.models.length && ST.mode === 'ifc') {
      await addModel(ifcFile);
      status(t('ifcx.added', facts));
    } else {
      await ctx.openIfc(new TextEncoder().encode(r.text), ifcFile, path);
      status(t('ifcx.opened', { ...facts, notes: notes ? t('ifcx.notes.some', { n: notes }) : t('ifcx.notes.none') }));
    }
    window.bimcraftIfcx = { last: { issues: r.issues, used: r.used, stats: r.stats } };
    await ifcxReport(r);
  }
  async function exportIfcx() {
    if (!ST.viewer || ST.mode !== 'ifc' || !ctx.models.length) { status(t('ifcx.export.none'), true); return; }
    const go = await new Promise((done) => {
      const dlg = el('dialog', { className: 'bc-dialog', 'aria-labelledby': 'bc-ifcx-x', 'data-ifcx-dialog': '' },
        el('form', { method: 'dialog' },
          el('h2', { className: 'bc-h', id: 'bc-ifcx-x' }, t('ifcx.dialog.title')),
          el('p', {}, t('ifcx.export.lede')),
          el('p', { className: 'bc-lib-actions' },
            el('button', { type: 'submit', className: 'btn-plot btn-sm-cc', value: 'ok', 'data-ifcx-go': '' }, t('ifcx.export.go')),
            el('button', { type: 'submit', className: 'btn-line btn-sm-cc', value: 'cancel' }, t('dialog.cancel')))));
      dlg.addEventListener('close', () => { const ok = dlg.returnValue === 'ok'; dlg.remove(); done(ok); });
      document.body.append(dlg);
      dlg.showModal();
    });
    if (!go) return;
    status(t('ifcx.export.making'));
    try {
      const base = (ST.ifcName || 'model').replace(/\.ifc$/i, '');
      const { bimIfcx } = await import('./ifcx-bimcraft.js');
      const { text, report } = await bimIfcx(ctx.models, { name: base, matrixOf: (mi) => ST.viewer.modelMatrix(mi), progress: (d, n) => status(t('ifcx.export.progress', { done: d, total: n })) });
      ctx.fileHost.download(new Blob([text], { type: 'application/json' }), base + '.ifcx', 'application/json');
      status(t('ifcx.export.done', { name: base + '.ifcx', n: report.elements }));
    } catch (err) { status(t('ifcx.export.failed', { why: String(err.message || err) }), true); }
  }

  /** A Wavefront OBJ (0.8 SU.1055): obj-ifc.js reads it (metres, Y up), each OBJ object becomes a mesh element of a small IFC4
   *  model on one storey, and that model opens like any IFC. */
  async function openObj(file, path) {
    // 0.10 BK.8 (units on import): an OBJ states no units. Ask before anything is built (the shell's one dialog, remembered per file); it was read as meters, unasked
    const iu = window.ccImportUnits ? await window.ccImportUnits.resolve({ file, format: 'OBJ', stated: null, choices: ['mm', 'cm', 'm', 'in', 'ft'], suggest: 'm' }) : { unit: 'm', text: '' };
    if (!iu) { status(t('obj.open.nounits', { name: file.name })); return; }
    status(t('obj.open.reading', { name: file.name }));
    await frame();
    let r;
    try { r = (await import('./obj-ifc.js')).objToIfc(await file.text(), { name: file.name.replace(/\.obj$/i, ''), unit: iu.unit }); }
    catch (err) { throw Object.assign(new Error(t('obj.open.failed', { name: file.name, why: err && err.code ? t(err.code, err.vars) : String(err && err.message || err) })), { userFacing: true }); }
    await ctx.openIfc(new TextEncoder().encode(r.text), new File([r.text], file.name.replace(/\.obj$/i, '') + '.ifc', { type: 'application/x-step' }), path);   // i18n-ignore: a file name
    const left = Object.keys(r.read.skipped).map((k) => t('obj.skip.' + k));
    status((iu.text ? iu.text + ' ' : '') + t('obj.open.facts', { n: r.read.objects, tris: num(r.read.triangles) }) + (left.length ? ' ' + t('obj.open.skipped', { what: left.join(', ') }) : '') + (r.prisms ? ' ' + t('ifcsolids.kept', { n: r.prisms }) : ''));
  }

  // ---- Folders ----
  async function openFolder(picked) {
    if (await ctx.keepEdits()) return;
    status(t('folder.reading', { n: picked.files.length, count: num(picked.files.length) }));
    await frame();
    const t0 = performance.now();
    const scan = await scanFolder(picked, { onProgress: ({ done, total }) => status(t('folder.checking', { done, total })) });
    ST.folder = { scan, index: scan.index };
    showFolder();
    if (picked.handle) { await rememberFolder(picked.handle); ctx.renderRecent(); }
    status(t('folder.read', { s: ((performance.now() - t0) / 1000).toFixed(1), models: t('folder.n.models', { n: scan.models.length, count: num(scan.models.length) }), files: t('folder.n.files', { n: scan.files, count: num(scan.files) }) }), false, true);
  }

  function showFolder() {
    const s = ST.folder.scan;
    renderFolder(ui.folder, s, { openFile: (file, path) => guard(() => ctx.open(file, path)) });
    showStage('folder');
    ui.infoH.textContent = t('info.h.folder');
    fillDl(ui.infoDl, [
      [t('info.folder'), s.name], [t('info.files'), num(s.files)], [t('info.size'), bytes(s.totalSize)], [t('info.models'), num(s.models.length)],
      [t('info.cad'), s.cad.length ? num(s.cad.length) : null], [t('info.ifc'), s.ifc.length ? num(s.ifc.length) : null],
      [t('info.problems'), s.problems ? num(s.problems) : t('info.problems.none')],
    ]);
    ui.info.hidden = false;
    ui.back.hidden = true;
    ui.storeys.hidden = true;
    ui.classes.hidden = true;
    ui.props.replaceChildren(el('p', { className: 'bc-muted' }, t('folder.hint')));
  }

  /** GH.3-B: the display-mode buttons show the viewer's mode. */
  function syncDisplayButtons() {
    const m = ST.viewer?.displayMode || 'edges';
    root.querySelectorAll('[data-display-set]').forEach((b) => b.setAttribute('aria-pressed', b.dataset.displaySet === m ? 'true' : 'false'));
  }

  return { applyIfcxOption, openIfcx, exportIfcx, openObj, openFolder, showFolder, syncDisplayButtons };
}
