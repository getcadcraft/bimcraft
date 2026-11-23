/* SPDX-License-Identifier: Apache-2.0 */
/**
 * library-place-ui.js: bimcraft.js's 28 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 bimcraft; no behaviour change).
 * mountLibraryPlace(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { PSETS, toViewer, fromViewer, snapToWall } from './ifc-place.js';
import { el } from './ui-util.js';
import { t } from './i18n.js';
import { licenseLabel } from './library-view.js';
import { pickStorey, boxFromItem } from './clipboard.js';
import { getDisplayUnits, unitMark, lenMark, parseTyped, fmtLen, parseLen } from './model-units.js';
import { KEY_SPAN } from './ifc-model.js';
import { csvCell } from './util.js';   // shared helpers (0.11 PERF.74)

export function mountLibraryPlace(ctx) {
  const { ST, ui, status, frame, guard, fillStoreys, fillClasses, clearProps, checkUpdates, renderIfcEquipment, syncEdit, commitPaste, rememberItem } = ctx;

  /** 2026-11-02 (BIMBro: "button is not working"): a tab asked for from elsewhere (the toolbar's Library) needs its panel on screen —
   *  reopened when it was closed, brought to the front when it shares a dock with another panel. */
  function revealRightPanel() {
    const sp = window.ccShellPanels;
    if (!sp?.panels) return;
    const id = /(?:^|\s)bc-(left|right)(?:\s|$)/.exec(ctx.rPanel.className || '')?.[1] || 'right';
    const st = sp.panels().find((p) => p.id === id);
    if (!st) return;
    if (st.hidden) sp.show(id);
    if (st.showing === false) sp.activate(id);
  }
  /** A workspace layout that moved the right panel's tabs into a palette ("More panels" in Toolbox and info box): select that palette. */
  function revealPaletteOf(node) {
    const slot = node?.closest('.ws-palette-scroll[hidden]');
    if (!slot) return;
    const key = [...slot.attributes].map((a) => a.name).find((n) => /^data-ws-.+-scroll$/.test(n))?.slice(8, -7);
    slot.closest('.ws-palettes')?.querySelector(`[data-ws-lower="${key}"]`)?.click();
  }
  function showTab(name) {
    if (name === 'library' && !ST.libraryLoaded) { ST.libraryLoaded = true; ctx.library.load(); }   // no request until the tab is opened
    // looked up each time: add-ons add tabs of their own (0.5 AO.7) — inside the right panel kept at start, so it works
    // when the panel has moved into the pop-out panels window (another document)
    ctx.rPanel.querySelectorAll('[data-rtab]').forEach((t) => { const on = t.dataset.rtab === name; t.setAttribute('aria-selected', on ? 'true' : 'false'); t.tabIndex = on ? 0 : -1; });
    ctx.rPanel.querySelectorAll('[data-rpane]').forEach((p) => { p.hidden = p.dataset.rpane !== name; if (!p.hidden && p.dataset.addon) p.dispatchEvent(new Event('cc-tab-shown')); });
    if (name === 'color') ctx.renderColor();   // after the pane shows: renderColor builds a hidden pane only when coloring
    if (name === 'issues') ctx.renderIssues();
    if (name === 'analysis') ST.analysisUi?.render();
    if (name === 'points') ST.pointsUi?.render();
    if (name === 'assets') ST.assetsUi?.render();
    if (name === 'daylight') ST.daylightUi?.render();
    if (name === 'calc') ST.mepCalcUi?.redraw();
    if (name === 'energy') { ST.mountEnergy?.(); ST.energyUis?.ep?.show?.(); ST.energyUis?.pv?.show?.(); }
  }

  /** The library item behind a picked element: license, attribution, swap, updates. */
  function libraryBlock(id, p) {
    const set = p.sets.find((x) => x.name === PSETS.library) || p.sets.find((x) => x.name === PSETS.library + ' (type)');
    if (!set) return null;
    const v = (n) => set.rows.find((r) => r.name === n)?.value || '';
    const pl = p.sets.find((x) => x.name === PSETS.placement);
    const num_ = pl?.rows.find((r) => r.name === 'ItemNumber')?.value;
    return el('div', { className: 'bc-lib-propblock' },
      el('p', { className: 'bc-h' }, num_ ? t('lib.block.title.no', { no: num_ }) : t('lib.block.title')),
      el('dl', { className: 'bc-dl' },
        el('dt', {}, t('lib.block.license')), el('dd', {}, v('License') ? licenseLabel(v('License')) : t('lib.block.license.none')),
        v('Attribution') ? [el('dt', {}, t('lib.block.attribution')), el('dd', {}, v('Attribution'))] : null,
        el('dt', {}, t('lib.block.from')), el('dd', {}, v('Library') === 'librarycraft' ? 'Library' : v('Library') === 'file' ? (v('SourceFile') ? t('lib.block.from.file.name', { file: v('SourceFile') }) : t('lib.block.from.file')) : v('Library')),   // i18n-ignore: LibraryCraft is a product name
        v('ItemVersion') && v('ItemVersion') !== '0' ? [el('dt', {}, t('lib.block.version')), el('dd', {}, v('ItemVersion'))] : null,
        v('VariantName') ? [el('dt', {}, t('lib.block.variant')), el('dd', { 'data-lib-block-variant': '' }, v('VariantName'))] : null),   // 0.7 W3.19
      pl && ctx.libraryOn ? el('p', { className: 'bc-lib-actions' },
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-swap': '', onClick: () => {
          ST.swapTarget = { id, name: p.name || t('lib.swap.theitem'), uuid: v('ItemUuid'), version: Number(v('ItemVersion')) || null, variant: v('Variant'), library: v('Library') };   // 0.7 W3.19: the panel lists the item's other variants
          showTab('library');
          ctx.library.render();
          status(t('lib.swap.pick', { name: ST.swapTarget.name }));
        } }, el('i', { className: 'bi bi-arrow-left-right', 'aria-hidden': 'true' }), ' ' + t('lib.swap.button')),
        v('ItemUuid') ? el('button', { type: 'button', className: 'btn-line btn-sm-cc', onClick: () => guard(checkUpdates) }, t('lib.updates.button')) : null) : null);
  }

  const coordMatrix = () => ST.ifc.api.GetCoordinationMatrix(ST.ifc.modelID);

  const storeyElev = () => ST.storeyElevs.get(Number(ctx.pb.storey.value)) ?? 0;
  /** 0.6 DC.117: how far above its storey an item sits: 0 on the floor; at the ceiling, its top at the underside of the ceiling
   *  over the point (model-ui.js ceilingZ), else at the level's height (up to the next storey). */
  function mountZ(item, at) {
    if (ctx.pb.mount?.value !== 'ceiling' || !at) return 0;
    const st = Number(ctx.pb.storey.value), b = localBox(item);
    let top = ST.modelUi?.ceilingZ?.(st, at.x, at.y) ?? null;
    if (top === null) { const e = storeyElev(), next = [...ST.storeyElevs.values()].filter((v) => v > e + 1).sort((a, c) => a - c)[0]; top = next !== undefined ? next - e : 2438.4; }
    return Math.max(0, top - b.z1);
  }

  /** Place an item (from the Library tab), or — with `paste` (a placement clip) — paste a copy where the user clicks. */
  function startPlacing(entry, paste = null) {
    if (ST.mode !== 'ifc' || !ST.editor) { status(t('place.need.ifc'), true); return; }
    // 2026-11-02: a Library door or window goes in with the plan's Door / Window tool: into a wall (the opening cut), or on its own
    if (!paste && (entry?.item?.kind === 'door' || entry?.item?.kind === 'window') && ST.modelUi?.placeLibrary?.(entry)) return;
    const info = ST.editor.placer().info();
    if (!info.storeys.length) { status(t('place.need.storeys'), true); return; }
    ST.storeyElevs = new Map(info.storeys.map((s) => [s.id, s.elevation]));
    const keep = ctx.pb.storey.value;
    ctx.pb.storey.replaceChildren(...info.storeys.map((s) => el('option', { value: String(s.id) }, s.name)));
    if (info.storeys.some((s) => String(s.id) === keep)) ctx.pb.storey.value = keep;
    if (paste) {
      // Paste on the storey the copy came from when this model has it (same model, or same name / nearest elevation).
      const st = pickStorey(paste, info.storeys, paste.model === ST.modelTag);
      if (st && st.how !== 'first') ctx.pb.storey.value = String(st.id);
    }
    ST.placing = { entry, rot: paste ? paste.rot : 0, snap: false, faces: null, last: null, at: null, sha: entry.meta.sha256, paste };
    if (ctx.pb.mount) ctx.pb.mount.value = !paste && ST.modelUi?.kind === 'rcp' ? 'ceiling' : 'floor';   // 0.6 DC.117: a ceiling plan on screen = at the ceiling
    if (ctx.settings.snap) {
      ST.placing.faces = ST.editor.placer().wallFaces(Number(ctx.pb.storey.value));
      ST.placing.snap = ST.placing.faces.length > 0;
    }
    ctx.pb.name.textContent = t(paste ? 'place.bar.pasting' : 'place.bar.placing', { name: entry.item.name });
    ui.placebar.hidden = false;
    if (!paste && entry.storey !== undefined && info.storeys.some((s) => s.id === entry.storey)) ctx.pb.storey.value = String(entry.storey);   // a drop on the plan: the level the plan shows
    pointWhere(!paste && entry.where === 'plan' ? 'plan' : 'model');   // one process; only the pointer's pane differs
    syncPlacebar();
    syncEdit();
    status(t(paste ? (ST.placing.snap ? 'place.start.paste.snap' : 'place.start.paste') : (ST.placing.snap ? 'place.start.snap' : 'place.start'), { name: entry.item.name }));
  }
  /**
   * Where the pointer works while placing: 'model' (the 3D view: a plane at the storey's height, the view turned to the top and the
   * storeys above hidden — what Place in the model always did) or 'plan' (the plan view: a click on the storey in the plan; the 3D view
   * is left as it is). Both end in commitPlace(), the same ghost, snap, X,Y entry, one question and one IFC writing.
   */
  function pointWhere(where) {
    if (!ST.placing) return;
    if (where === 'plan' && !ST.modelUi?.ensurePlan?.(Number(ctx.pb.storey.value))) where = 'model';
    ST.placing.where = where;
    if (where === 'plan') {
      if (ST.viewer) { ST.viewer.placing = null; ST.viewer.setGhost(null); }
      planCut(null);   // a switch from 3D: every storey shows again, the plan has its own cut
      const xy = (p) => moveGhostXY(p[0], p[1], true);
      ST.modelUi.setPlaceHook({ move: xy, click: (p) => { xy(p); if (ST.placing?.at) guard(() => commitPlace(ST.placing.at)); }, overlay: ghostOverlay });
    } else {
      ST.modelUi?.setPlaceHook(null);
      ST.modelUi?.ensure3d?.();
      planCut();
      ST.viewer.view('top');
      ST.viewer.placeY = ctx.toWorld(toViewer(coordMatrix(), [0, 0, storeyElev()]))[1];
      ST.viewer.placing = { move: moveGhost, click: (pt) => { moveGhost(pt); if (ST.placing?.at) guard(() => commitPlace(ST.placing.at)); } };
    }
    ST.placing.last = null; ST.placing.at = null;
    syncPlacebar();
  }
  /** The ghost's footprint in the plan (the item's box turned and moved), for the plan view's overlay while placing there. */
  function ghostOverlay(o) {
    const a = ST.placing?.at;
    if (!a || ST.placing.where !== 'plan') return;
    const b = localBox(ST.placing.entry.item), r = a.rot * Math.PI / 180, c = Math.cos(r), sn = Math.sin(r);
    o.walls.push([[b.x0, b.y0], [b.x1, b.y0], [b.x1, b.y1], [b.x0, b.y1]].map(([lx, ly]) => [a.x + lx * c - ly * sn, a.y + lx * sn + ly * c]));
    o.hud = { p: [a.x, a.y], text: ST.placing.entry.item.name };
  }
  function stopPlacing() {
    const was = ST.placing;
    ST.placing = null;
    ST.modelUi?.setPlaceHook(null);
    if (ST.viewer) { ST.viewer.placing = null; ST.viewer.setGhost(null); }
    ui.placebar.hidden = true;
    if (was && ST.model) planCut(null);
    if (was) syncEdit();
  }
  /** While placing, storeys above the chosen one are hidden (a plan cut); their checkboxes follow. null = show all again. */
  function planCut(on = Number(ctx.pb.storey.value)) {
    const elev = on === null ? Infinity : ST.storeyElevs.get(on) ?? Infinity;
    for (const s of ST.model.storeys) {
      const show = (ST.storeyElevs.get(s.id) ?? -Infinity) <= elev + 1;
      ST.viewer.setStoreyVisible(s.id, show, ctx.cur().mi);
      const box = ui.storeyList.querySelector('[data-storey="' + s.id + '"]');
      if (box) box.checked = show;
    }
  }
  /** GH.3-A: the X, Y box says its unit and shows an example in it (it is typed in the display unit, marks allowed). */
  function syncPlaceUnits() {
    const u = getDisplayUnits(), label = ctx.pb.xy.closest('label');
    if (label && label.firstChild?.nodeType === 3) label.firstChild.nodeValue = t('ui.place.xy.u', { unit: unitMark(u) || 'ft-in' }) + ' ';   // i18n-ignore: a unit symbol
    ctx.pb.xy.placeholder = lenMark(1200, u) + ', ' + lenMark(3400, u);
  }
  function syncPlacebar() {
    if (!ST.placing) return;
    syncPlaceUnits();
    ctx.pb.snap.setAttribute('aria-pressed', ST.placing.snap ? 'true' : 'false');
    const a = ST.placing.at;
    ctx.pb.at.textContent = a ? t(a.snapped ? 'place.at.wall' : 'place.at', { x: lenMark(a.x, getDisplayUnits()), y: lenMark(a.y, getDisplayUnits()), rot: Math.round(a.rot) }) : t('place.rot', { rot: Math.round(ST.placing.rot) });
    ctx.pb.at.title = ctx.pb.at.textContent;   // the full readout when it is cut short
  }
  function toggleSnap() {
    if (!ST.placing) return;
    ST.placing.snap = !ST.placing.snap;
    if (ST.placing.snap && !ST.placing.faces) {
      ST.placing.faces = ST.editor.placer().wallFaces(Number(ctx.pb.storey.value));
      if (!ST.placing.faces.length) { ST.placing.snap = false; status(t('place.nowalls'), true); }
    }
    syncPlacebar();
    moveGhost(ST.placing.last);
  }

  const typedPlace = () => {
    if (!ST.placing) return;
    const typed = parseTyped(ctx.pb.xy.value, getDisplayUnits());   // GH.3-A: typed in the display unit (marks allowed: 2500 mm, 8'-2")
    const m = typed?.kind === 'abs' ? typed : null;
    if (!m) { status(t('place.typed.bad'), true); ctx.pb.xy.focus(); return; }
    const at = { x: m.x, y: m.y, rot: ST.placing.rot, snapped: false };
    ST.placing.at = at; drawGhost(at); syncPlacebar();
    guard(() => commitPlace(at));
  };

  /** Item-local bounds of what the ghost shows: the body, else the plan with a stand-in height (clipboard.js). */
  const localBox = (item) => boxFromItem(item);
  function moveGhost(pt) {
    if (!ST.placing) return;
    if (ST.placing.where === 'plan') { if (pt) moveGhostXY(pt.x, pt.y); else { ST.viewer.setGhost(null); ST.modelUi?.redrawOverlay?.(); } return; }   // `last` holds the plan point
    ST.placing.last = pt;
    if (!pt) { ST.viewer.setGhost(null); return; }
    const [x, y] = fromViewer(coordMatrix(), ctx.toLocal([pt.x, pt.y, pt.z]));
    moveGhostXY(x, y);
  }
  /** The ghost at model X, Y (mm) — from a 3D pointer or, with fromPlan, a point in the plan view (its level is the storey placed on). */
  function moveGhostXY(x, y, fromPlan = false) {
    if (!ST.placing) return;
    if (fromPlan) {
      const lv = ST.modelUi?.level;
      if (lv !== null && lv !== undefined && String(lv) !== ctx.pb.storey.value && [...ctx.pb.storey.options].some((o) => o.value === String(lv))) {
        ctx.pb.storey.value = String(lv); ST.placing.faces = null; ST.placing.snap = false;
        if (ctx.settings.snap) { ST.placing.faces = ST.editor.placer().wallFaces(lv); ST.placing.snap = ST.placing.faces.length > 0; }
        ST.viewer.placeY = ctx.toWorld(toViewer(coordMatrix(), [0, 0, storeyElev()]))[1];
      }
      ST.placing.last = { x, y };
    }
    let at = { x, y, rot: ST.placing.rot, snapped: false };
    if (ST.placing.snap && ST.placing.faces?.length) {
      const s = snapToWall([x, y], ST.placing.entry.item, ST.placing.faces);
      if (s && s.distance < 3000) at = { x: s.x, y: s.y, rot: s.rot, snapped: true };
    }
    ST.placing.at = at;
    drawGhost(at);
    syncPlacebar();
  }
  function drawGhost(at) {
    const b = localBox(ST.placing.entry.item), r = at.rot * Math.PI / 180, c = Math.cos(r), sn = Math.sin(r), z = storeyElev() + (ST.placing.paste ? 0 : mountZ(ST.placing.entry.item, at)), C = coordMatrix();
    const corner = (lx, ly, lz) => ctx.toWorld(toViewer(C, [at.x + lx * c - ly * sn, at.y + lx * sn + ly * c, z + lz]));
    ST.viewer.setGhost([[b.x0, b.y0, b.z0], [b.x1, b.y0, b.z0], [b.x1, b.y1, b.z0], [b.x0, b.y1, b.z0], [b.x0, b.y0, b.z1], [b.x1, b.y0, b.z1], [b.x1, b.y1, b.z1], [b.x0, b.y1, b.z1]].map((q) => corner(...q)));
    if (ST.placing.where === 'plan') ST.modelUi?.redrawOverlay?.();
  }

  async function commitPlace(at) {
    if (ST.placing.paste) { await commitPaste(ST.placing.paste, { storey: Number(ctx.pb.storey.value), x: at.x, y: at.y, rot: at.rot }); return; }
    const { entry } = ST.placing;
    const pl = ST.editor.placer();
    const ask = await askPlacement(entry.item, pl.nextItemNumber());
    if (!ask) return;
    const opts = { storey: Number(ctx.pb.storey.value), x: at.x, y: at.y, rot: at.rot, itemNumber: ask.itemNumber, quantity: ask.quantity, notes: ask.notes,
      library: entry.meta.library, sha256: entry.meta.sha256, sourceFile: entry.meta.sourceFile || '', variant: entry.meta.variant || null, standInHeight: ask.height, z: mountZ(entry.item, at), stretch: entry.meta.stretch || [] };
    const r = ST.editor.placeItem(entry.item, opts);
    rememberItem(entry);
    await rebuild(r.id);
    ctx.library.registerUse(entry, ST.ifcName);
    status(t(r.typeCreated ? 'place.done' : 'place.done.shared', { name: entry.item.name, no: ask.itemNumber }));
    if (ST.placing) { ST.placing.faces = null; if (ST.placing.snap) ST.placing.faces = ST.editor.placer().wallFaces(Number(ctx.pb.storey.value)); ST.viewer.placing && ST.viewer.setGhost(null); }
  }

  async function doSwap(entry) {
    if (!ST.swapTarget) return;
    const tg = ST.swapTarget;
    const r = ST.editor.swapItem(tg.id, entry.item, { library: entry.meta.library, sha256: entry.meta.sha256, sourceFile: entry.meta.sourceFile || '', variant: entry.meta.variant || null, oldName: tg.name });
    ST.swapTarget = null;
    rememberItem(entry);
    await rebuild(tg.id);
    ctx.library.registerUse(entry, ST.ifcName);
    showTab('props');
    status(t('swap.done', { from: tg.name, to: entry.item.name }) + (r.classChanged ? ' ' + t('swap.class', { from: r.classChanged.from, to: r.classChanged.to }) : ''));
  }

  /** Rebuild the model from the editor's bytes (the simplest correct way to show new geometry), camera kept. */
  async function rebuild(selectId) {
    const updating = t('model.updating');
    status(updating);
    try { await rebuildNow(selectId); } finally { if (ui.status.textContent === updating) status(''); }   // 0.6 BIM-F4: not left up after the reload
  }
  async function rebuildNow(selectId) {
    ST.modelUi?.rebuilding();
    await frame();
    window.bimcraftLive?.live?.reloading();   // Studio Live: others' edits wait while the model reloads (live.js)
    const bytes_ = ST.editor.save();
    // the same coordination matrix: cc-ifc centres a model on its first element, which a drawn or edited wall can change —
    // the model would then shift in the scene, away from a point cloud, links and the camera (Discord: scan-to-BIM)
    ST.model = await ST.ifc.load(bytes_, undefined, { keyBase: ST.model.keyBase, coordination: ST.ifc.api.GetCoordinationMatrix(ST.model.modelID) });
    ctx.cur().model = ST.model;
    ST.editor.reindex();
    window.bimcraftLive?.live?.loaded();
    const keys = new Set(); for (const b of ST.model.batches) for (const k of b.elems.ids) keys.add(k);
    const mi = ctx.cur().mi;
    ST.viewer.vis.prune((k) => Math.floor(k / KEY_SPAN) !== mi || keys.has(k));   // hidden / isolated stay so (keys survive a rebuild); deleted ones drop out
    ST.viewer.setModel(ST.model, { keepCamera: true });
    if (ST.cut) ctx.applySection();   // the same cut on the rebuilt model
    if (ST.placing) ST.viewer.placeY = ctx.toWorld(toViewer(coordMatrix(), [0, 0, storeyElev()]))[1];
    fillStoreys(ST.model);
    fillClasses(ST.model);
    ctx.fillTree(true);
    ST.propIx = null;   // values may have changed: read again on the next use
    ST.guidKeys = null;
    ctx.renderFind();
    ST.checkRes = null; ctx.renderChecks();   // results describe the model before the edit
    if (ST.checksArmed) ST.checksSrc?.invalidate();   // 0.7.1 → 0.8: once run, Model checks re-run a moment after each edit for the Problems panel
    ST.adviceSrc?.invalidate();   // 0.10 BK.73: the drawing advice follows the model
    ctx.renderQto();
    if (ST.colorField) ctx.applyColor(ST.colorField, true); else ctx.renderColor();
    if (ST.placing) planCut();
    ctx.renderChanges();
    if (!ui.ifcEquip.hidden) renderIfcEquipment();
    if (selectId !== null && selectId !== undefined) { ST.viewer.select(selectId); await ctx.showProps(selectId); }
    else { ST.selected = null; clearProps(); }
    ST.modelUi?.rebuilt();
    ST.coordsUi?.modelChanged();   // 0.6 DF.15: levels and the site may have moved
    ST.linksUi?.modelChanged();   // 0.6 DF.21: a link added, moved or removed
  }

  /** The one prompt per placement: item number (default next free), quantity, notes, and a stand-in height for a 2D-only item. */
  function askPlacement(item, next) {
    return new Promise((resolve) => {
      const f = (label, input) => el('label', { className: 'bc-dlg-field' }, el('span', {}, label), input);
      const no = el('input', { type: 'text', className: 'bc-input', value: next, 'data-ask-number': '', maxLength: 40 });
      const qty = el('input', { type: 'number', className: 'bc-input', value: '1', min: '1', step: '1' });
      const notes = el('input', { type: 'text', className: 'bc-input', maxLength: 200 });
      const h = item.body ? null : el('input', { type: 'text', className: 'bc-input', value: fmtLen(900, getDisplayUnits()), inputMode: 'decimal', 'data-place-height': '' });   // GH.3-A: a length in the display unit
      const err = el('p', { className: 'bc-input-err', role: 'alert' });
      const dlg = el('dialog', { className: 'bc-dialog', 'aria-label': t('place.dlg.title', { name: item.name }) },
        el('form', { method: 'dialog' },
          el('h2', { className: 'bc-h' }, t('place.dlg.title', { name: item.name })),
          f(t('place.dlg.number'), no), f(t('place.dlg.qty'), qty), f(t('place.dlg.notes'), notes),
          h ? f(t('place.dlg.height.u', { unit: unitMark(getDisplayUnits()) || 'ft-in' }), h) : null,   // i18n-ignore: a unit symbol
          err,
          el('p', { className: 'bc-lib-actions' },
            el('button', { type: 'submit', className: 'btn-plot btn-sm-cc', value: 'ok' }, t('place.dlg.ok')),
            el('button', { type: 'submit', className: 'btn-line btn-sm-cc', value: 'cancel', formNoValidate: true }, t('dialog.cancel')))));
      document.body.append(dlg);
      dlg.addEventListener('close', () => {
        dlg.remove();
        if (dlg.returnValue !== 'ok') { resolve(null); return; }
        resolve({ itemNumber: no.value.trim() || next, quantity: Math.max(1, Math.round(Number(qty.value) || 1)), notes: notes.value.trim(), height: h ? Math.max(1, parseLen(h.value, getDisplayUnits()) || 900) : 0 });
      });
      dlg.showModal();
      no.select();
    });
  }

  function dialog(title, body, actions = []) {
    const dlg = el('dialog', { className: 'bc-dialog bc-dialog-wide', 'aria-label': title },
      el('h2', { className: 'bc-h' }, title), body,
      el('p', { className: 'bc-lib-actions' }, ...actions, el('button', { type: 'button', className: 'btn-line btn-sm-cc', onClick: () => dlg.close() }, t('dialog.close'))));
    dlg.addEventListener('close', () => dlg.remove());
    document.body.append(dlg);
    dlg.showModal();
    return dlg;
  }
  /** An export (CSV, BCF, …): always a copy — a download in the browser, the shell's own handling on the desktop. */
  function download(name, text, type) { return ctx.fileHost.download(text, name, type); }

  return { revealRightPanel, revealPaletteOf, showTab, libraryBlock, coordMatrix, storeyElev, startPlacing, pointWhere, stopPlacing, planCut, syncPlaceUnits, syncPlacebar, toggleSnap, typedPlace, moveGhost, moveGhostXY, commitPlace, doSwap, rebuild, dialog, download, csvCell };
}
