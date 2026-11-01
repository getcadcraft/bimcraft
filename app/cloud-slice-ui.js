/* SPDX-License-Identifier: Apache-2.0 */
/**
 * cloud-slice-ui.js — drawing on a point cloud in the plan (0.6 DF.22, session `bim-draw`), through model-ui.js `extend()`:
 * while a cloud is open (cloud-ui.js, session `pointcloud`) and Draw is on, the plan shows the cloud's slice at the level's cut
 * height (1200 above the level, `thick` deep) as dots, and every Draw tool snaps to its points (snap kind 'cloud'). The model
 * bar's Scan menu `[data-scan-tools]` (shown with a cloud): Show the slice `[data-scan-slice]`, its thickness `[data-scan-thick]`,
 * Align its floor to this level `[data-scan-floor]`, Turn it square to the building `[data-scan-square]` (about the middle of the
 * walls that gave the angle, squareAngle's `about`), Reset the alignment `[data-scan-reset]`. Aligning changes where the cloud
 * sits in the scene (cloud-ui.js `pc.adjust`, kept in the cloud's own frame), not the IFC; it lasts while the cloud is open. The maths is cloud-slice.js.
 *
 *   const s = mountCloudSlice(modelUi, { cloud: () => pc | null, viewer: () => viewer, entry: () => { C, P } | null })
 *   s.changed()      the cloud was opened, placed or removed: cut it again
 * Test hook: window.bimcraftScan = { state, api: s }.
 */
import { planMatrix, slicePoints, SliceGrid, squareAngle, floorZ, planAdjust, rotZ, moveZ } from './cloud-slice.js';
import { mul4 } from './ifc-util.js';
import { fmtLen, parseLen } from './model-units.js';
import { proposeFromScan } from './scan-propose.js';   // 0.8 EG.37 (spikes_PART_4)
import { scanChange, pick } from './scan-build.js';

const CUT = 1200;
const MIN_WALL_POINTS = 40;   // fewer points on straight walls than this: no turn is guessed

export function mountCloudSlice(modelUi, o) {
  let show = true, thick = 100;
  try { const v = JSON.parse(localStorage.getItem('bimcraft.scan') || '{}'); if (v.show === false) show = false; if (v.thick >= 10 && v.thick <= 2000) thick = v.thick; } catch (e) { /* defaults */ }
  const R = { key: '', slice: null, grid: null, note: '' };
  let A = null;
  const t = (...a) => A.t(...a);
  const save = () => { try { localStorage.setItem('bimcraft.scan', JSON.stringify({ show, thick })); } catch (e) { /* this tab */ } };
  const layerOf = () => { const pc = o.cloud(); const L = pc?.has?.() ? pc.layer?.() : null; return L?.cloud && L.points ? L : null; };
  const storeyMm = () => { const ed = A.ed(); if (!ed || !A.S.level) return null; try { return storeyWorld(ed); } catch (e) { return null; } };
  function storeyWorld(ed) {
    const w = ed.placer(), st = w.api.GetLine(w.mid, A.S.level, false);
    const M = st?.ObjectPlacement ? w.api.GetWorldTransformMatrix(w.mid, st.ObjectPlacement.value) : [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
    const s = M.slice(); s[12] *= w.unitMm; s[13] *= w.unitMm; s[14] *= w.unitMm;
    return s;
  }
  /** cloud positions → plan, and scene → plan (for an adjustment), for the shown level. */
  function matrices() {
    const L = layerOf(), ent = o.entry(), SW = storeyMm();
    if (!L || !ent || !SW) return null;
    L.points.updateMatrixWorld(true);
    const lm = [...L.points.matrixWorld.elements];   // what the view draws: the cloud's positions → the scene
    return { M: planMatrix(lm, ent.P, ent.C, SW), Mvp: planMatrix([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], ent.P, ent.C, SW), L };
  }
  /** Cut the slice again when anything it depends on moved. */
  function cut(force = false) {
    const L = layerOf();
    const menu = A.root.querySelector('[data-scan-tools]');
    if (menu) menu.hidden = !L;
    if (!L || !show || !A.S.on) { R.slice = null; R.grid = null; R.key = ''; return false; }
    const mx = matrices();
    if (!mx) return false;
    const cutZ = A.viewRange?.()?.cut ?? CUT;   // 0.6 DF.19: the slice follows the plan's own cut height
    const key = [A.S.level, L.cloud.n, thick, cutZ, ...mx.M.map((v) => Math.round(v * 1e6))].join(',');
    if (!force && key === R.key) return false;
    R.key = key;
    R.slice = slicePoints(L.cloud.pos, L.cloud.n, mx.M, { cutZ, thick });
    R.grid = new SliceGrid(R.slice.xy, R.slice.n, 200);
    return true;
  }
  function bindMenu() {
    const root = A.root;
    const b = root.querySelector('[data-scan-slice]');
    if (b && !b.dataset.bound) {
      b.dataset.bound = '1';
      b.addEventListener('click', () => { show = !show; save(); cut(true); A.refresh(); bindMenu(); });
      const th = root.querySelector('[data-scan-thick]');
      th?.addEventListener('change', () => { const mm = parseLen(th.value, A.units()); if (mm >= 10 && mm <= 2000) { thick = mm; save(); cut(true); A.refresh(); } else A.host.status(t('model.err.length'), true); bindMenu(); });
      root.querySelector('[data-scan-floor]')?.addEventListener('click', () => align('floor'));
      root.querySelector('[data-scan-square]')?.addEventListener('click', () => align('square'));
      root.querySelector('[data-scan-reset]')?.addEventListener('click', () => align('reset'));
      root.querySelector('[data-scan-propose]')?.addEventListener('click', () => propose());
    }
    if (b) b.setAttribute('aria-pressed', String(show));
    const th = root.querySelector('[data-scan-thick]'); if (th && document.activeElement !== th) th.value = fmtLen(thick, A.units());
  }
  /** 0.8 EG.37: walls and doors proposed from the slice, a checkbox for each; Accept draws the ones kept as one undo step on this level. */
  let psrc = null;
  function publish(list) {
    try {
      if (!window.ccProblems?.source) return;
      psrc = psrc || window.ccProblems.source({ id: 'bimcraft.scan', kind: 'import', label: t('model.scan.source') });
      psrc.set(list.map((p) => ({ code: p.code, severity: p.severity, text: p.text, about: [{ kind: 'file', id: 'scan' }] })));
    } catch (e) { /* the panel is optional */ }
  }
  function propose() {
    const box = A.root.querySelector('[data-scan-list]');
    if (!box) return;
    cut(true);
    if (!R.slice?.n) { A.host.status(t('model.scan.noslice'), true); return; }
    const r = proposeFromScan(R.slice.xy, R.slice.n);
    publish(r.problems);
    const doc = box.ownerDocument;
    box.replaceChildren(); box.hidden = false;
    const items = r.proposals;
    if (!items.length) { const p = doc.createElement('p'); p.className = 'bc-muted'; p.textContent = t('model.scan.nothing'); box.append(p); return; }
    const head = doc.createElement('p'); head.className = 'bc-muted'; head.textContent = t('model.scan.found', { walls: items.filter((x) => x.kind === 'wall').length, doors: items.filter((x) => x.kind === 'door').length, rooms: r.rooms.length });
    box.append(head);
    const boxes = [];
    for (const it of items) {
      const lab = doc.createElement('label'); lab.className = 'bc-mb-field';
      const cb = doc.createElement('input'); cb.type = 'checkbox'; cb.checked = true; cb.value = it.id; cb.dataset.scanItem = it.id;
      const sp = doc.createElement('span');
      sp.textContent = it.kind === 'wall' ? t('model.scan.item.wall', { id: it.id, len: fmtLen(Math.hypot(it.b[0] - it.a[0], it.b[1] - it.a[1]), A.units()) }) : t('model.scan.item.door', { id: it.id, wall: it.wall, w: fmtLen(it.width, A.units()) });
      lab.append(cb, ' ', sp); box.append(lab); boxes.push(cb);
    }
    const ok = doc.createElement('button'); ok.type = 'button'; ok.className = 'bc-tool'; ok.dataset.scanAccept = ''; ok.textContent = t('model.scan.accept');
    ok.addEventListener('click', () => {
      const ids = boxes.filter((b) => b.checked).map((b) => b.value);
      const kept = pick(r, ids);
      if (!kept.some((x) => x.kind === 'wall')) { A.host.status(t('model.scan.none.kept'), true); return; }
      A.commit(scanChange(kept, { storey: A.S.data?.levels?.find((l) => l.id === A.S.level)?.guid || A.S.level }), { label: t('model.scan.undo'), verb: t('model.verb.drew') });
      box.hidden = true; box.replaceChildren();
      A.host.status(t('model.scan.drawn', { n: kept.length }));
    });
    box.append(ok);
  }
  /** Align the cloud: its floor to this level, its walls square to the building, or back as it was placed. */
  function align(what) {
    const pc = o.cloud(), mx = matrices();
    if (!pc || !mx) return;
    if (typeof pc.adjust !== 'function') { A.host.status(t('model.scan.needs'), true); return; }
    const cur = pc.adjust() || [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
    let A2;
    if (what === 'reset') { pc.adjust(null); api.changed(); A.host.status(t('model.scan.reset'), false, true); return; }
    if (what === 'floor') {
      const z = floorZ(mx.L.cloud.pos, mx.L.cloud.n, mx.M);
      if (z === null) return;
      A2 = moveZ(-z);
      pc.adjust(mul4(planAdjust(A2, mx.Mvp), cur));
      api.changed();
      A.host.status(t('model.scan.floored', { dz: fmtLen(-z, A.units()) }), false, true);
      return;
    }
    cut(true);
    const sq = R.slice?.n ? squareAngle(R.slice.xy, R.slice.n) : null;
    if (!sq || sq.strength < 0.2 || sq.walls < MIN_WALL_POINTS) { A.host.status(t('model.scan.nowalls'), true); return; }
    // turned about the middle of the walls that gave the angle (0.6.1 FIX-061-SQUARE: the middle of every slice point could be
    // far from the building — trees, a neighbour, stray points — and a few degrees about it swung the scan out of view)
    A2 = rotZ(-sq.angle, sq.about);
    pc.adjust(mul4(planAdjust(A2, mx.Mvp), cur));
    api.changed();
    A.host.status(t('model.scan.squared', { a: (Math.round(-sq.angle * 100) / 100).toString() }), false, true);
  }

  A = modelUi.extend({
    snapCtx(ctx) { if (R.grid) ctx.nearest = (p, tol) => R.grid.nearest(p[0], p[1], tol); },
    refresh() { cut(); bindMenu(); },
    scene(sc) { if (R.slice?.n) sc.cloud = { xy: R.slice.xy, n: R.slice.n }; },
  });
  const api = {
    changed() { cut(true); bindMenu(); if (A.S.on) A.refresh(); },
  };
  if (typeof window !== 'undefined') window.bimcraftScan = { state: R, api, get show() { return show; }, get thick() { return thick; } };   // for tests
  return api;
}
