/* SPDX-License-Identifier: Apache-2.0 */
/**
 * comforts-ui.js — the drawing comforts in BimCraft's plan (0.6 round 2, DC.58 gap, session bim-comforts_PART_2), as one
 * extension of model-ui.js (extend()): moving and turning placed library items (model-move.js) and, as they land, the dormer
 * tool (res-dormer.js). bimcraft.js mounts it after the other plan tools: mountComforts(modelUi).
 *
 * Moving a library item: pick it (plan or 3D), then in the plan drag it — or its square grip at the insertion point — to a new
 * spot (it snaps like the Wall tool: wall ends and faces, Shift square), drag the round grip to turn it (15° steps, Shift: 1°),
 * press R to turn it 90°, or type X / Y / Rotation in Properties. Each is one undo step (IfcEditor.modelChange).
 */
import { t } from './i18n.js';
import { el } from './ui-util.js';
import { ModelWriter } from './model-write.js';
import { placedItems, moveItems } from './model-move.js';
import { fmtLen, parseLen, parsePitch, fmtPitch, isMetric } from './model-units.js';
import { interiorView, viewNotes, openingFacts, interiorSheet, ROOM_SIDES } from './comforts-views.js';
import { modelTriangles } from './res-views.js';
import { setPdf, sheetSvg } from './res-sheets.js';   // read only: the drawing set's own PDF and preview writers
import { snapshotModel, loopsOf } from './model-ops.js';
import { loopAt } from './model-rooms.js';
import { viewerToPlan } from './model-plan.js';
import { wallGeom } from './model-arcs.js';
import { roofPlans, faceAt, dormerGeometry, readDormers, placeDormer, changeDormer, removeDormers, DORMER_DEFAULTS, DORMER_KINDS } from './res-dormer.js';

const D2R = Math.PI / 180;
const ITEM_CLASSES = /^Ifc(Furniture|FurnishingElement|SanitaryTerminal|ElectricAppliance|LightFixture|FlowTerminal|BuildingElementProxy|DistributionElement|EnergyConversionDevice|FlowController|FlowMovingDevice|FlowStorageDevice|FlowTreatmentDevice|DiscreteAccessory|Furnishing)$/;

export function mountComforts(modelUi) {
  let A = null;
  const C = { cache: null, drag: null, dm: { kind: 'gable', width: DORMER_DEFAULTS.width, height: DORMER_DEFAULTS.height, pitch: DORMER_DEFAULTS.pitch, overhang: DORMER_DEFAULTS.overhang }, hover: null, roofs: null };
  const writer = () => { const e = A?.ed(); return e ? new ModelWriter(e.W, e.api, e.mid) : null; };

  // ---------------------------------------------------------------------------------------- placed library items
  /** Every placed library item (read once per model state). */
  function items() {
    const e = A?.ed();
    if (!e) return [];
    const tag = [A.host.model()?.modelID, e.changes?.length ?? 0, e.undone?.length ?? 0, e.mid].join(':');
    if (C.cache?.tag !== tag || C.cache.ed !== e) {
      let list = [];
      try { list = placedItems(writer()); } catch (err) { list = []; }
      C.cache = { tag, ed: e, list };
    }
    return C.cache.list;
  }
  const itemOfKey = (key) => items().find((x) => A.kb() + x.id === key) || null;
  /** The one picked library item on the level shown (its grips show), else null. */
  function pickedItem() {
    if (!A.S.on || A.S.tool !== 'select') return null;
    const keys = A.selectedKeys();
    if (keys.length !== 1) return null;
    const it = itemOfKey(keys[0]);
    return it && it.storey === A.S.level ? it : null;
  }
  /** The item's plan lines (cut + seen below) from the plan's cut, and how far they reach from its insertion point. */
  function linesOf(it) {
    const key = A.kb() + it.id, out = [];
    for (const list of [A.S.cut?.cut || [], A.S.cut?.below || []]) for (const c of list) {
      if (c.key !== key) continue;
      const s = c.segs;
      for (let i = 0; i + 3 < s.length; i += 4) out.push([s[i], s[i + 1], s[i + 2], s[i + 3]]);
    }
    let r = 0;
    for (const l of out) r = Math.max(r, Math.hypot(l[0] - it.x, l[1] - it.y), Math.hypot(l[2] - it.x, l[3] - it.y));
    return { lines: out, reach: r || 450 };
  }
  const rotGrip = (it, reach) => [it.x + Math.cos(it.rot * D2R) * (reach + A.pv().pxToMm(24)), it.y + Math.sin(it.rot * D2R) * (reach + A.pv().pxToMm(24))];
  /** Where a drag puts the item: { x, y, rot }. */
  function dragTo(d, p, e) {
    const it = d.item;
    if (d.kind === 'rot') {
      const a = Math.atan2(p[1] - it.y, p[0] - it.x) / D2R, step = e?.shiftKey ? 1 : 15;
      return { x: it.x, y: it.y, rot: Math.round(a / step) * step };
    }
    const want = [it.x + p[0] - d.from[0], it.y + p[1] - d.from[1]];
    const s = A.snapFrom(want, e, [it.x, it.y]);
    return { x: s.p[0], y: s.p[1], rot: it.rot, snap: s };
  }
  const commitMove = (it, to, verb) => A.commit(moveItems([{ guid: it.guid, ...to }]), { label: it.name || t('comforts.item'), verb: t(verb), select: [A.kb() + it.id] });

  // ---------------------------------------------------------------------------------------- dormers
  /** The roofs on the level shown and the dormers on them, with their plan shapes (read once per model state). */
  function roofsHere() {
    const e = A?.ed();
    if (!e || !A.S.data) return { plans: [], dormers: [] };
    if (C.roofs?.data !== A.S.data || C.roofs.level !== A.S.level) {
      let plans = [], dormers = [];
      try {
        const w = writer();
        plans = roofPlans(w, A.S.level);
        dormers = readDormers(w).filter((d) => d.storey === A.S.level).map((d) => {
          const rp = plans.find((x) => x.roof.guid === d.roof), f = rp && faceAt(rp.plan, d.at), G = f ? dormerGeometry(rp.plan, f, d) : null;
          return { ...d, G: G && !G.error ? G : null };
        });
      } catch (err) { console.error(err); }
      C.roofs = { data: A.S.data, level: A.S.level, plans, dormers };
    }
    return C.roofs;
  }
  const dmSpec = () => ({ ...C.dm, pitch: C.dm.pitch ?? (C.dm.kind === 'shed' ? DORMER_DEFAULTS.shedPitch : DORMER_DEFAULTS.pitch) });
  function dormerHover(p) {
    for (const rp of roofsHere().plans) {
      const f = faceAt(rp.plan, p);
      if (!f) continue;
      return { rp, f, G: dormerGeometry(rp.plan, f, { ...dmSpec(), at: p }), at: p };
    }
    return { at: p };
  }
  const segsOf = (poly) => poly.map((q, i) => [q[0], q[1], poly[(i + 1) % poly.length][0], poly[(i + 1) % poly.length][1]]);
  /** The Dormer tool's options row ([data-mopts="dormer"] in ui.inc). */
  function bindDormerRow() {
    const row = A.root.querySelector('[data-mopts="dormer"]');
    if (!row) return;
    const $ = (sel) => row.querySelector(sel);
    const kind = $('[data-cf-dkind]'), wd = $('[data-cf-dw]'), ht = $('[data-cf-dh]'), pi = $('[data-cf-dp]'), ov = $('[data-cf-dov]');
    const show = () => {
      if (kind) kind.value = C.dm.kind;
      for (const [inp, k] of [[wd, 'width'], [ht, 'height'], [ov, 'overhang']]) if (inp && document.activeElement !== inp) inp.value = fmtLen(C.dm[k], A.units());
      if (pi && document.activeElement !== pi) pi.value = fmtPitch(dmSpec().pitch, A.units());
    };
    if (!row.dataset.bound) {
      row.dataset.bound = '1';
      kind?.addEventListener('change', () => { C.dm.kind = DORMER_KINDS.includes(kind.value) ? kind.value : 'gable'; C.dm.pitch = null; show(); A.drawOverlay(); });
      for (const [inp, k, min] of [[wd, 'width', 600], [ht, 'height', 300], [ov, 'overhang', 0]]) inp?.addEventListener('change', () => { const mm = parseLen(inp.value, A.units()); if (mm >= min) C.dm[k] = mm; else A.host.status(t('model.err.length'), true); show(); A.drawOverlay(); });
      pi?.addEventListener('change', () => { const d = parsePitch(pi.value); if (d > 1 && d < 80) C.dm.pitch = d; else A.host.status(t('model.err.pitch'), true); show(); A.drawOverlay(); });
    }
    show();
  }
  const dormerOf = (key) => roofsHere().dormers.find((d) => A.kb() + d.id === key || d.parts.some((p) => A.kb() + p === key)) || null;

  // ---------------------------------------------------------------------------------------- interior elevations
  /** A room's four interior elevations with their dimensions and tags, as one sheet (res-sheets.js items). */
  function interiorSet(room) {
    const e = A.ed(), model = A.host.model(), ifc = A.host.ifc?.();
    if (!e || !model || !ifc) return null;
    const data = A.S.data || snapshotModel(e), levels = data.levels, i = levels.findIndex((l) => l.id === room.storey);
    const lv = levels[i];
    if (!lv) return null;
    const loop = loopAt(loopsOf(e, lv.id).rooms, room.seed);
    if (!loop) return null;
    const M = viewerToPlan(ifc.api.GetCoordinationMatrix(model.modelID), A.storeyMatrix(lv.id));
    const els = modelTriangles(model, M);
    const height = levels[i + 1] ? levels[i + 1].elevation - lv.elevation : lv.height;
    const w = writer();
    const facts = openingFacts(data.openings.filter((o) => o.storey === lv.id), data.walls, wallGeom);
    const pl = w.placements(), its = placedItems(w, lv.id).map((p) => { const r = pl.find((x) => x.id === p.id); return { tag: p.itemNumber, at: [p.x, p.y], z: p.z, h: Number(r?.equipment?.Height || 0) * w.unitMm || 900 }; });
    const fmt = (mm) => fmtLen(mm, A.units());
    const name = [room.number, room.name].filter(Boolean).join(' ');
    const views = ROOM_SIDES.map((side) => { const view = interiorView(els, { poly: loop.poly, name }, side, { height }); return { side, view, notes: viewNotes(view, { kind: 'interior', openings: facts, items: its, fmt }) }; });
    const paper = isMetric(A.units()) ? 'a3' : 'tabloid';
    const sheet = interiorSheet({ name }, views, { paper, units: A.units(), project: String(A.host.fileName?.() || '').replace(/\.ifc$/i, ''), date: new Date().toISOString().slice(0, 10) });
    return { sheet, paper, name, views };
  }
  /** The dialog: the sheet as it prints, Download PDF, Close (opened from a room's Properties). */
  function openInterior(room) {
    let set = null;
    try { set = interiorSet(room); } catch (err) { console.error(err); }
    if (!set) { A.host.status(t('comforts.ie.none'), true); return; }
    C.interior = set;
    const stage = el('div', { className: 'bc-cf-ie-stage', 'data-cf-iestage': '' });
    stage.innerHTML = sheetSvg(set.sheet, { paper: set.paper });   // made here from the model; every text in it is escaped
    const pdf = el('button', { type: 'button', className: 'btn-plot btn-sm-cc', 'data-cf-iepdf': '' }, t('comforts.ie.pdf'));
    const close = el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-cf-ieclose': '' }, t('comforts.ie.close'));
    const dlg = el('dialog', { className: 'bc-dialog bc-dialog-wide', 'aria-label': set.sheet.title, 'data-cf-ie': '' },
      el('h2', { className: 'bc-h' }, set.sheet.title), el('p', { className: 'bc-sub' }, t('comforts.ie.note')), stage, el('p', { className: 'bc-actions' }, pdf, ' ', close));
    pdf.addEventListener('click', () => {
      const base = String(A.host.fileName?.() || 'model').replace(/\.ifc$/i, '');
      A.host.download(base + ' — ' + set.sheet.title + '.pdf', setPdf([set.sheet], { paper: set.paper, title: base }), 'application/pdf');   // i18n-ignore: a file name
      A.host.status(t('comforts.ie.done', { room: set.name }));
    });
    close.addEventListener('click', () => dlg.close());
    dlg.addEventListener('close', () => dlg.remove());
    document.body.append(dlg);
    dlg.showModal();
  }

  // ---------------------------------------------------------------------------------------- the extension
  const ext = {
    openInterior,
    tools: ['dormer'],
    hint: () => 'comforts.hint.dormer',
    typed: () => false,
    toolChanged(name) { C.hover = null; if (name === 'dormer') bindDormerRow(); const m = A.root.querySelector('[data-res-tools]'); if (name === 'dormer' && m?.open) m.open = false; },
    refresh() { C.roofs = null; if (A.S.tool === 'dormer') bindDormerRow(); },
    move(p) { if (A.S.tool === 'dormer') C.hover = dormerHover(p); },
    click(p) {
      if (A.S.tool !== 'dormer') return;
      const h = dormerHover(p);
      if (!h.rp) { A.host.status(t('comforts.dm.nohere'), true); return; }
      if (h.G.error) { A.host.status(t(h.G.error), true); return; }
      A.commit(placeDormer({ roof: h.rp.roof.guid, at: p, ...dmSpec() }), { label: t('comforts.dormer'), verb: t('model.verb.placed') });
    },
    scene(scene) {
      if (A.S.kind === 'rcp') return;
      // each dormer on this level: its outline dashed (it is overhead, like the roof's eave), its ridge thin; a click picks it
      for (const d of roofsHere().dormers) {
        if (!d.G || !d.parts.length) continue;
        scene.symbols.push({ key: A.kb() + d.parts[0], dashed: segsOf(d.G.footprint), thin: d.G.ridge, poly: d.G.footprint, roof: true });
      }
    },
    ownKeys(set, k) { for (const d of roofsHere().dormers) for (const p of d.parts) set.add(k + p); },
    classes: ITEM_CLASSES,
    overlay(o) {
      if (A.S.tool === 'dormer' && C.hover) {
        const h = C.hover;
        if (h.G && !h.G.error) {
          o.walls.push(h.G.footprint);
          for (const r of h.G.ridge) o.lines.push(r);
          o.hud = { p: h.at, text: t('comforts.dm.' + h.G.kind) + '  ' + fmtLen(h.G.spec.width, A.units()) + '\n' + t('comforts.dm.height') + ' ' + fmtLen(h.G.spec.height, A.units()) };
        } else o.hud = { p: h.at, text: h.rp ? t(h.G.error) : t('comforts.dm.nohere') };
      }
      const it = pickedItem();
      if (!it || !A.pv()) return;
      const { lines, reach } = linesOf(it);
      (o.grips ||= []).push({ p: [it.x, it.y], kind: 'end' }, { p: rotGrip(it, reach), kind: 'mid' });
      const d = C.drag;
      if (d && d.at && d.item.guid === it.guid) {
        // the item where it would go: its lines turned about its insertion point and moved
        const da = (d.at.rot - it.rot) * D2R, c = Math.cos(da), s = Math.sin(da);
        const T = (x, y) => { const ox = x - it.x, oy = y - it.y; return [d.at.x + ox * c - oy * s, d.at.y + ox * s + oy * c]; };
        for (const l of lines) o.lines.push([...T(l[0], l[1]), ...T(l[2], l[3])]);
        o.dashed.push([it.x, it.y, d.at.x, d.at.y]);
        o.hud = { p: d.kind === 'rot' ? rotGrip({ ...it, rot: d.at.rot }, reach) : [d.at.x, d.at.y], text: d.kind === 'rot' ? t('comforts.mv.turn', { deg: Math.round(((d.at.rot % 360) + 360) % 360) }) : t('comforts.mv.by', { d: fmtLen(Math.hypot(d.at.x - it.x, d.at.y - it.y), A.units()) }) };
        if (d.at.snap && d.at.snap.kind !== 'free') o.snap = { p: [d.at.x, d.at.y], kind: d.at.snap.kind };
      }
    },
    down(p, e) {
      const it = pickedItem();
      if (!it || !A.pv()) return false;
      const tol = A.pv().pxToMm(9), { reach } = linesOf(it), rg = rotGrip(it, reach);
      if (Math.hypot(p[0] - rg[0], p[1] - rg[1]) <= tol) { C.drag = { kind: 'rot', item: it, from: p }; return true; }
      if (Math.hypot(p[0] - it.x, p[1] - it.y) <= tol || A.pv().hit(e.clientX, e.clientY) === A.kb() + it.id) { C.drag = { kind: 'move', item: it, from: p }; return true; }
      return false;
    },
    drag(p, e) { if (C.drag) C.drag.at = dragTo(C.drag, p, e); },
    up(p, e, { moved, cancel }) {
      const d = C.drag;
      C.drag = null;
      if (!d || cancel || moved <= 4 || !d.at) return;
      const to = { x: d.at.x, y: d.at.y, rot: d.at.rot };
      if (Math.hypot(to.x - d.item.x, to.y - d.item.y) < 0.5 && Math.abs(to.rot - d.item.rot) < 1e-6) return;
      commitMove(d.item, to, d.kind === 'rot' ? 'comforts.verb.turned' : 'model.verb.moved');
    },
    key(e, low) {
      if (low !== 'r' || e.shiftKey) return false;
      const it = pickedItem();
      if (!it) return false;
      commitMove(it, { drot: 90 }, 'comforts.verb.turned');
      return true;
    },
    pick(key) {
      const d = dormerOf(key);
      if (d) return { kind: 'dormer', guid: d.guid, label: t('comforts.dormer'), d };
      const it = itemOfKey(key);
      return it ? { kind: 'libitem', guid: it.guid, label: it.name || t('comforts.item'), it, passEdit: true } : null;
    },
    props(list, kit) {
      if (list.length === 1 && list[0].kind === 'dormer') {
        const d = list[0].d, meta = { label: t('comforts.dormer'), verb: t('model.verb.changed'), select: kit.keys };
        const run = (ch) => A.commit(changeDormer(d.guid, ch), meta);
        kit.field(t('comforts.dm.kind'), kit.select(DORMER_KINDS.map((k) => [k, t('comforts.dm.' + k)]), d.kind, 'data-mp-dkind', (v) => run({ kind: v })));
        kit.field(t('comforts.dm.width'), kit.lenInput(d.width, 'data-mp-dw', (mm) => run({ width: mm }), { min: 600 }));
        kit.field(t('comforts.dm.height'), kit.lenInput(d.height, 'data-mp-dh', (mm) => run({ height: mm }), { min: 300 }));
        const pi = el('input', { type: 'text', className: 'bc-input bc-num', value: fmtPitch(d.pitch, A.units()), 'data-mp-dp': '' });
        pi.addEventListener('change', () => { const deg = parsePitch(pi.value); if (deg > 1 && deg < 80) run({ pitch: deg }); else { A.host.status(t('model.err.pitch'), true); pi.value = pi.defaultValue; } });
        pi.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); pi.blur(); } });
        kit.field(t('comforts.dm.pitch'), pi);
        kit.field(t('comforts.dm.overhang'), kit.lenInput(d.overhang, 'data-mp-dov', (mm) => run({ overhang: mm }), { allowZero: true }));
        return { title: t('comforts.dormer') };
      }
      if (!list.every((x) => x.kind === 'libitem')) return null;
      const its = list.map((x) => x.it), meta = (label) => ({ label, verb: t('model.verb.moved'), select: kit.keys });
      const title = its.length > 1 ? t('model.elements', { n: its.length }) : (its[0].name || t('comforts.item'));
      if (its.length === 1) {
        const it = its[0];
        kit.field(t('comforts.mv.x'), kit.lenInput(it.x, 'data-mp-itemx', (mm) => A.commit(moveItems([{ guid: it.guid, x: mm }]), meta(title)), { any: true }));
        kit.field(t('comforts.mv.y'), kit.lenInput(it.y, 'data-mp-itemy', (mm) => A.commit(moveItems([{ guid: it.guid, y: mm }]), meta(title)), { any: true }));
        const r = el('input', { type: 'text', className: 'bc-input bc-num', value: String(Math.round(it.rot * 100) / 100), size: 6, 'data-mp-itemrot': '' });
        r.addEventListener('change', () => { const v = Number(String(r.value).replace(',', '.')); if (Number.isFinite(v)) A.commit(moveItems([{ guid: it.guid, rot: v }]), meta(title)); else r.value = r.defaultValue; });
        r.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); r.blur(); } if (e.key === 'Escape') { r.value = r.defaultValue; r.blur(); } });
        kit.field(t('comforts.mv.rot'), r);
      }
      kit.field('', kit.button(t('comforts.mv.turn90'), 'data-mp-itemturn', () => A.commit(moveItems(its.map((it) => ({ guid: it.guid, drot: 90 }))), { ...meta(title), verb: t('comforts.verb.turned') })));
      kit.rows.push(el('dt', { className: 'bc-mp-wide' }, ''), el('dd', { className: 'bc-mp-wide bc-sub' }, t('comforts.mv.note')));
      return { title };
    },
    remove(list) {
      const guids = list.filter((x) => x.kind === 'libitem').map((x) => x.guid), dorm = list.filter((x) => x.kind === 'dormer').map((x) => x.guid);
      return (ed) => {
        let r = null;
        if (dorm.length) r = removeDormers(dorm)(ed);
        if (!guids.length) return r || { id: null, ids: [] };
        const r2 = new ModelWriter(ed.W, ed.api, ed.mid).run((w) => {
          const all = placedItems(w), ids = all.filter((x) => guids.includes(x.guid)).map((x) => x.id);
          if (ids.length) w.dropProduct(ids);
          return { id: null, ids: [] };
        });
        return r ? { ...r2, journal: A.mergeJournals(r.journal, r2.journal) } : r2;
      };
    },
  };
  A = modelUi.extend(ext);
  if (typeof window !== 'undefined') window.bimcraftComforts = { state: C, api: A, items, pickedItem };   // for tests
  return { ext, state: C };
}
