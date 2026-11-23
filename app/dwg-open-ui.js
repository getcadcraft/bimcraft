/* SPDX-License-Identifier: Apache-2.0 */
/**
 * dwg-open-ui.js: bimcraft.js's 12 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 bimcraft; no behaviour change).
 * mountDwgOpen(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { t } from './i18n.js';
import { compileDrawing } from './dwg-compile.js';
import { equipmentList, equipmentCsv } from './dwg-equipment.js';
import { DrawingView } from './dwg-view.js';
import { renderEquipment } from './equip-view.js';
import { num, fillDl, bytes, el } from './ui-util.js';
import { sendHandoff } from './handoff.js';

export function mountDwgOpen(ctx) {
  const { ST, $, ui, xrefFiles, status, frame, guard, settings, fromFolder, cur, clearBlankNote, renderLayers, showStage, download, root, startsWith } = ctx;

  // ---- DWG / DXF ----
  async function openDwg(file, path, kind) {
    status(t('dwg.reading'));
    await frame();
    const t0 = performance.now();
    ST.lastDwg = { file, path, kind };
    const { db, tag } = await parseDrawing(file, kind);
    ctx.leave3d();   // back to 2D first; the end of openDwg goes to 3D when Settings › BimCraft says so (the default)
    ST.dwgOpen = { db, fileName: file.name };

    // Linked drawings (xrefs): found by name in the open folder, or among files added by hand.
    const xrefs = new Map(), found = new Map();
    const names = (db.blocks || []).filter((b) => b.flags & 4).map((b) => b.name);
    ST.dwgOpen.xrefs = names.length;
    for (const name of names) {
      const hit = findLinked(name, path);
      if (!hit) continue;
      status(t('dwg.reading.linked', { file: hit.file.name }));
      await frame();
      try {
        xrefs.set(name.toLowerCase(), (await parseDrawing(hit.file, 'dwg')).db);
        found.set(name, hit.where);
      } catch (e) { console.error(e); }
    }
    const drawing = compileDrawing(db, { versionTag: tag, xrefs });
    ST.dwg3d = { db, xrefs, compiled: null };   // compiled for 3D on the first switch to 3D
    if (!drawing.spaces.length) throw new Error(t('dwg.empty.spaces'));
    const equipment = equipmentList(db, drawing);

    showStage('dwg');
    ST.mode = 'dwg';
    ctx.library.refresh();
    if (!ST.dwgView) { ST.dwgView = new DrawingView(ui.dwgCanvas, { onCursor: (x, y) => { ui.coords.textContent = t('dwg.coords.u', { x: coord(x), y: coord(y), units: ST.dwgCoordUnits }); } }); ui.dwgCanvas.view = ST.dwgView; }   // .view: tests
    ui.dwgCanvas.view = ST.dwgView;   // for tests and the console
    // opening in 3D: the 2D canvas stays hidden, so its first (slow) frame is not drawn for nothing
    const modelHas = drawing.spaces.some((sp) => sp.kind !== 'paper' && sp.batches.size);
    const start3d = settings.dwgStart === '3d' && modelHas;
    if (start3d) ui.dwgCanvas.hidden = true;
    ST.dwgView.setDrawing(drawing);
    ST.dwgView.setPrint(ST.printView);
    renderSheetTabs(drawing, equipment);
    if (equipment) {
      const sheetName = (key) => drawing.spaces.find((x) => x.key === key)?.name || key;
      renderEquipment(ui.equip, equipment, {
        sheetName,
        onShow: (row) => {
          const place = row.places.find((p) => p.sheets.length) || row.places[0];
          ui.equip.hidden = true;
          ui.dwgCanvas.hidden = false;   // visible first: the zoom is worked out from the canvas size
          const key = ST.dwgView.focusModelPoint(place.x, place.y, place.sheets[0]);
          selectSpace(key, true);
          status(row.category ? t('equip.ringed.cat', { no: row.no, category: row.category, sheet: sheetName(key) }) : t('equip.ringed', { no: row.no, sheet: sheetName(key) }));
        },
        onCsv: (rows, label, pick) => {
          // i18n-ignore: the CSV's file name
          const name = file.name.replace(/\.(dwg|dxf)$/i, '') + ' equipment' + (label && pick !== 'every' && pick !== 'all' ? ' (' + label.replace(/[\\/:*?"<>|]/g, '') + ')' : '') + '.csv';
          download(name, '\ufeff' + equipmentCsv(rows, sheetName), 'text/csv;charset=utf-8');
          status(t('equip.downloaded', { file: name, n: rows.length, count: num(rows.length) }));
        },
      });
    } else ui.equip.replaceChildren();
    selectSpace(drawing.spaces[0]?.key, true);
    renderLayers(drawing);

    // Raster images (logos in title blocks): the file each points at, found by name like linked drawings.
    const pictures = [], bitmaps = new Map();
    for (const im of drawing.images) {
      const hit = findPicture(im.name, path);
      let shown = false, why = hit ? '' : t('dwg.img.notfound');
      if (hit) {
        try { bitmaps.set(im.ref, await createImageBitmap(hit.file)); shown = true; }
        catch { why = /\.tiff?$/i.test(hit.file.name) ? t('dwg.img.tiff') : t('dwg.img.unreadable'); }
      }
      pictures.push({ ...im, hit, shown, why });
    }
    ST.dwgView.setImages(bitmaps);

    ST.dwgCoordUnits = drawing.units || t('sec.units');   // GH.3-A: a drawing's coordinates keep its own units, and the readout says which
    const sheets = drawing.spaces.filter((s) => s.kind === 'paper').length;
    ui.infoH.textContent = t('info.h.drawing');
    const onSheetsN = equipment ? equipment.rows.filter((r) => r.sheets.length).length : 0;
    fillDl(ui.infoDl, [
      [t('info.file'), file.name], [t('info.size'), bytes(file.size)],
      [t('info.format'), drawing.release ? t('dwg.format.release', { release: drawing.release, tag }) : (tag || kind.toUpperCase())],
      [t('info.units'), drawing.units || null], [t('info.entities'), num(drawing.stats.entities)],
      [t('info.layers'), num(drawing.layers.length)], [t('info.sheets'), sheets ? num(sheets) : t('info.sheets.none')],
      [t('info.linked'), drawing.xrefs.length ? t('dwg.linked.loaded', { loaded: drawing.xrefs.filter((x) => x.loaded).length, total: drawing.xrefs.length }) : null],
      [t('info.equipment'), equipment ? t('dwg.equip.onsheets', { n: onSheetsN, count: num(onSheetsN) }) : null],
    ]);
    ui.info.hidden = false;
    ui.back.hidden = !fromFolder(path);
    ui.storeys.hidden = true;
    ui.classes.hidden = true;
    const missing = Object.entries(drawing.stats.unsupported);
    const missingX = drawing.xrefs.filter((x) => !x.loaded);
    const missingP = pictures.filter((p) => !p.hit);
    ui.props.replaceChildren(...[
      el('p', { className: 'bc-muted' }, t('dwg.hint')),
      drawing.xrefs.length ? el('div', { className: 'bc-xrefs' },
        el('p', { className: 'bc-h' }, t('dwg.linked.title')),
        el('ul', { className: 'bc-copies' }, drawing.xrefs.map((x) => el('li', {},
          el('span', {}, x.name + '.dwg'),
          el('span', { className: 'bc-pill ' + (x.loaded ? 'is-ok' : 'is-bad') }, x.loaded ? t('dwg.linked.shown') : t('dwg.linked.notfound')),
          x.loaded && found.get(x.name) ? el('span', { className: 'bc-sub' }, found.get(x.name)) : null))),
        missingX.length ? el('p', { className: 'bc-muted' }, fromFolder(path)
          ? t('dwg.linked.missing.folder')
          : t('dwg.linked.missing.file')) : null,
        missingX.length ? el('button', { type: 'button', className: 'btn-line btn-sm-cc', onClick: () => ui.xrefInput.click() }, t('dwg.linked.add')) : null) : null,
      pictures.length ? el('div', { className: 'bc-xrefs' },
        el('p', { className: 'bc-h' }, t('dwg.images.title')),
        el('ul', { className: 'bc-copies' }, pictures.map((p) => el('li', {},
          el('span', {}, p.name),
          el('span', { className: 'bc-pill ' + (p.shown ? (p.hit.exact ? 'is-ok' : 'is-warn') : 'is-bad') }, p.shown ? (p.hit.exact ? t('dwg.img.shown') : t('dwg.img.similar')) : p.why),
          p.hit ? el('span', { className: 'bc-sub' }, p.hit.where) : null))),
        missingP.length ? el('p', { className: 'bc-muted' }, fromFolder(path) ? t('dwg.img.missing.folder') : t('dwg.img.missing.file')) : null,
        missingP.length ? el('button', { type: 'button', className: 'btn-line btn-sm-cc', onClick: () => ui.xrefInput.click() }, t('dwg.img.add')) : null) : null,
      missing.length ? el('div', { className: 'bc-notdrawn' },
        el('p', { className: 'bc-h' }, t('dwg.notdrawn.title')),
        el('ul', { className: 'bc-counts' }, missing.map(([ty, n]) => el('li', {}, el('span', {}, ty), el('span', { className: 'n' }, num(n))))),
        el('p', { className: 'bc-muted' }, t('dwg.notdrawn.note'))) : null,
      ctx.dynamicBlock(db),   // 0.5 DB.11
      drawing.stats.truncated ? el('p', { className: 'bc-input-err' }, t('dwg.truncated')) : null,
    ].filter(Boolean));
    if (!drawing.spaces.some((sp) => sp.batches.size) && !drawing.xrefs.length) {
      status(t('dwg.empty', { file: file.name }), true);
      return;
    }
    // read in {s} s, then "rendering…" until the first frame is on screen (3D, or 2D when 3D is off or can't start), then
    // how long that took
    const openS = ((performance.now() - t0) / 1000).toFixed(1), t1 = performance.now();
    const renderingMsg = t('dwg.opened.rendering', { file: file.name, s: openS });
    status(renderingMsg);
    let fallback = false;
    if (start3d) {
      await frame();
      try { await ctx.toggle3d({ quiet: true }); } catch (e) {
        console.warn(e); fallback = true; ctx.leave3d();   // WebGL refused (some browsers, remote desktops): the 2D view
        ctx.ui3.wrap.hidden = true; ctx.ui3.bar.hidden = true; ui.dwgCanvas.hidden = false; ui.coords.hidden = false; ST.dwgView.resize();
      }
    }
    await (ST.view3dOn ? ST.view3d.whenDrawn() : ST.dwgView.whenDrawn());
    if (fallback) status(t('dwg3d.fallback'));
    else if (ui.status.textContent === renderingMsg) status(t('dwg.opened.rendered', { file: file.name, s: openS, r: ((performance.now() - t1) / 1000).toFixed(1) }), false, true);
  }
  async function parseDrawing(file, kind) {
    const data = new Uint8Array(await file.arrayBuffer());
    const tag = kind === 'dwg' ? new TextDecoder().decode(data.subarray(0, 6)) : '';
    let db;
    try { db = await readDrawingModel(data, kind); } catch (e) {
      if (e.binaryDxf) throw Object.assign(new Error(t('dwg.unreadable.binary', { file: file.name, why: e.message })), { userFacing: true });
      console.warn(e);
      throw new Error(t('dwg.unreadable', { file: file.name, format: tag || kind.toUpperCase() }));
    }
    return { db, tag };
  }
  /** DWG or DXF bytes → the drawing model (docs/DWG-LIB-SPEC.md). The readers are plain JS, imported on first use. */
  async function readDrawingModel(data, kind) {
    // a binary DXF ("AutoCAD Binary DXF" + CR LF SUB NUL) cannot be read as text: say so plainly (0.4 B8)
    if (startsWith(data, 'AutoCAD Binary DXF')) { const e = new Error(t('dwg.binary.dxf')); e.binaryDxf = true; throw e; }   // i18n-ignore: the file's own signature
    if (kind === 'dxf') {
      const { readDxfModel } = await import('./dxf-model.js');
      let text = new TextDecoder('utf-8').decode(data);
      if (text.includes('\ufffd')) text = new TextDecoder('windows-1252').decode(data);
      return readDxfModel(text);
    }
    // cc-dwg reads in a module worker (0.4 item 1.3, cad-files): a big drawing no longer freezes the page; it falls back to
    // this thread when a worker cannot start. Same model as readDwg.
    const { readDwgAsync } = await import('./dwg/read-async.js');
    return readDwgAsync(data);
  }

  /** A linked drawing's file: added by hand first, then the open folder (same folder as the host preferred). */
  function findLinked(name, path) {
    const want = (name + '.dwg').toLowerCase();
    if (xrefFiles.has(want)) return { file: xrefFiles.get(want), where: t('dwg.addedbyyou') };
    if (!ST.folder) return null;
    const hits = ST.folder.index.byName.get(want) || [];
    if (!hits.length) return null;
    const dir = path && path.includes('/') ? path.slice(0, path.lastIndexOf('/')) : '';
    const best = hits.find((h) => h.path.slice(0, h.path.lastIndexOf('/') + 1) === (dir ? dir + '/' : '')) || hits[0];
    return { file: best.file, where: best.path };
  }

  /**
   * A picture's file: the same name added by hand or in the open folder (same folder first); else a
   * file whose name contains the picture's name (eTransmit and Revit exports prefix the project name,
   * e.g. "…-studio_logo-5425051.png" for "studio_logo.png").
   */
  function findPicture(name, path) {
    const want = name.toLowerCase();
    if (!want) return null;
    if (xrefFiles.has(want)) return { file: xrefFiles.get(want), where: t('dwg.addedbyyou'), exact: true };
    const dir = path && path.includes('/') ? path.slice(0, path.lastIndexOf('/') + 1) : '';
    const near = (hits) => hits.find((h) => h.path.slice(0, h.path.lastIndexOf('/') + 1) === dir) || hits[0];
    if (ST.folder && ST.folder.index.byName.has(want)) { const h = near(ST.folder.index.byName.get(want)); return { file: h.file, where: h.path, exact: true }; }
    const dot = want.lastIndexOf('.'), stem = dot > 0 ? want.slice(0, dot) : want, ext = dot > 0 ? want.slice(dot) : '';
    if (stem.length < 4) return null;
    const like = (n) => n.endsWith(ext) && n.includes(stem);
    for (const [n, f] of xrefFiles) if (like(n)) return { file: f, where: t('dwg.addedbyyou'), exact: false };
    if (ST.folder) {
      const hits = [...ST.folder.index.byName].filter(([n]) => like(n)).flatMap(([, hs]) => hs);
      if (hits.length) { const h = near(hits); return { file: h.file, where: h.path, exact: false }; }
    }
    return null;
  }

  ui.xrefInput.addEventListener('change', () => {
    for (const f of ui.xrefInput.files) xrefFiles.set(f.name.toLowerCase(), f);
    ui.xrefInput.value = '';
    if (ST.lastDwg) guard(() => openDwg(ST.lastDwg.file, ST.lastDwg.path, ST.lastDwg.kind));
  });

  const coord = (v) => (Math.abs(v) >= 1e5 ? v.toFixed(0) : Math.abs(v) >= 100 ? v.toFixed(2) : v.toFixed(3));

  function renderSheetTabs(drawing, equipment) {
    const tab = (key, icon, label, title) => el('button', { type: 'button', className: 'bc-tool', 'aria-pressed': 'false', 'data-space-key': key, title, onClick: () => working(async () => { selectSpace(key); await ST.dwgView.whenDrawn(); }) },
      el('i', { className: 'bi ' + icon, 'aria-hidden': 'true' }), el('span', {}, label));
    const onSheets = equipment ? equipment.rows.filter((r) => r.sheets.length).length || equipment.rows.length : 0;
    ui.sheetTabs.replaceChildren(...[   // replaceChildren would print a null as "null"
      ...drawing.spaces.map((s) => tab(s.key, s.kind === 'model' ? 'bi-bounding-box-circles' : 'bi-file-earmark', s.name)),
      equipment ? tab('equipment', 'bi-list-check', t('dwg.tab.equipment', { n: num(onSheets) }), t('dwg.tab.equipment.title')) : null,
      el('button', { type: 'button', className: 'bc-tool', 'aria-pressed': 'false', 'data-dwg-3d': '', title: t('dwg.tab.3d.title'), onClick: () => guard(() => working(ctx.toggle3d)) },
        el('i', { className: 'bi bi-badge-3d', 'aria-hidden': 'true' }), el('span', {}, '3D')),   // i18n-ignore: a label that is a symbol
      el('button', { type: 'button', className: 'bc-tool', title: t('dwg.tab.fit.title'), onClick: () => { if (ST.view3dOn) ST.view3d.extents(); else if (ui.equip.hidden) ST.dwgView.fit(); } }, el('i', { className: 'bi bi-arrows-fullscreen', 'aria-hidden': 'true' }), el('span', {}, t('dwg.tab.fit'))),
      el('button', { type: 'button', className: 'bc-tool', 'aria-pressed': ST.printView ? 'true' : 'false', 'data-print-view': '', title: t('dwg.tab.print.title'), onClick: togglePrint },
        el('i', { className: 'bi bi-printer', 'aria-hidden': 'true' }), el('span', {}, t('dwg.tab.print'))),
      root.dataset.editUrl ? el('span', { className: 'bc-tool-sep', 'aria-hidden': 'true' }) : null,
      root.dataset.editUrl ? el('button', { type: 'button', className: 'bc-tool', 'data-edit-drawing': '', title: t('handoff.dwg.title', { app: root.dataset.editApp }), onClick: editDrawing },
        el('i', { className: 'bi bi-pencil-square', 'aria-hidden': 'true' }), el('span', {}, t('handoff.dwg.button', { app: root.dataset.editApp }))) : null,
    ].filter(Boolean));
  }
  /** Hand the open drawing to the drafting app in a new tab (handoff.js). Linked drawings stay behind. */
  function editDrawing() {
    if (!ST.lastDwg) return;
    // sendHandoff opens the tab inside the click (pop-up blockers); the new page waits for the file to arrive.
    sendHandoff(root.dataset.editUrl, ST.lastDwg.file, 'bimcraft').then(
      () => status(t('handoff.dwg.done', { file: ST.lastDwg.file.name, app: root.dataset.editApp }) + (ST.dwgOpen?.xrefs ? ' ' + t('handoff.dwg.xrefs') : ''), false, true),
      (e) => { console.error(e); status(t(e.code === 'blocked' ? 'handoff.blocked' : 'handoff.failed'), true); });
  }
  /** Hand the active IFC model to the detailing app (0.4 1.5): the file as opened, or with the unsaved changes in it. */
  function handIfc(btn) {
    if (ST.mode !== 'ifc' || !ST.model) return;
    const file = ST.editor?.dirty ? new File([ST.editor.save()], ST.ifcName, { type: 'application/x-step' }) : (cur().file || new File([ST.editor.save()], ST.ifcName, { type: 'application/x-step' }));
    sendHandoff(btn.dataset.handoffUrl, file, 'bimcraft').then(
      () => status(t('handoff.ifc.done', { file: ST.ifcName, app: btn.dataset.handoffApp }), false, true),
      (e) => { console.error(e); status(t(e.code === 'blocked' ? 'handoff.blocked' : 'handoff.failed'), true); });
  }
  $('[data-handoff-ifc]')?.addEventListener('click', (e) => handIfc(e.currentTarget));
  /** Model, a sheet or the equipment list; `keep` = the view is already set (opening, or a jump to an item). */
  function selectSpace(key, keep = false) {
    if (ST.view3dOn) ctx.leave3d();   // a sheet, Model or the equipment list: back to the 2D view
    const eq = key === 'equipment';
    ui.equip.hidden = !eq;
    ui.dwgCanvas.hidden = eq;
    ui.coords.hidden = eq;
    if (!eq && !keep) ST.dwgView.setSpace(key);
    if (!eq) ST.dwgView.resize();
    ui.sheetTabs.querySelectorAll('[data-space-key]').forEach((b) => b.setAttribute('aria-pressed', b.dataset.spaceKey === key ? 'true' : 'false'));
    if (eq) ui.equip.scrollTop = 0;
    // A sheet whose viewports show none of the model (dwg-compile.js vp.blank) would just look broken: say why — and only
    // while that sheet is shown (2026-10-24: the note stayed on Model).
    clearBlankNote();
    const sp = !eq && ST.dwgView.space;
    if (sp?.kind === 'paper' && !sp.batches.size && sp.viewports.length && sp.viewports.every((v) => v.blank)) {
      const mb = ST.dwgView.drawing.spaces.find((x) => x.kind === 'model')?.bounds, v = sp.viewports[0];
      if (mb && Number.isFinite(mb.minX)) status(ST.blankNote = t('dwg.sheet.blank', { sheet: sp.name, at: coord(v.vx) + ', ' + coord(v.vy), from: coord(mb.minX) + ', ' + coord(mb.minY), to: coord(mb.maxX) + ', ' + coord(mb.maxY) }));
    }
  }

  async function working(fn) {
    ST.busyDepth++;
    ui.dwgBusy.hidden = false;
    try { await frame(); return await fn(); } finally { if (--ST.busyDepth === 0) ui.dwgBusy.hidden = true; }
  }
  function togglePrint() {
    ST.printView = !ST.printView;
    ST.dwgView.setPrint(ST.printView);
    ui.sheetTabs.querySelector('[data-print-view]')?.setAttribute('aria-pressed', ST.printView ? 'true' : 'false');
  }

  return { openDwg, readDrawingModel, togglePrint };
}
