/* SPDX-License-Identifier: Apache-2.0 */
/**
 * mui-tools.js: model-ui.js's 20 bindings for this topic, moved out of mountModel() unchanged (0.11 PERF.78, perf-finish-11 bimcraft: one module per panel section; no behaviour change).
 * mountMuiTools(ctx) is called once by mountModel(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables mountModel() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { t } from './i18n.js';
import { topLevelChoices, wallTypes, typeName, typeThickness, wallType } from './model-walls.js';
import { el } from './ui-util.js';
import { fmtLen, parseLen, parsePitch, fmtPitch, fmtArea } from './model-units.js';
import { handKind, openingType, libraryBase } from './model-openings.js';
import { openingFamilies, familyWriter, readFamilies } from './family-ops.js';
import { familyFor, sizeValues, sizeKey } from './family-model.js';
import { ModelWriter } from './model-write.js';
import { snapshotModel, changeDerived, placeFloor, placeCeiling, placeRoof } from './model-ops.js';
import { FLOOR_KINDS } from './model-slabs.js';
import { formatEdges, parseEdges, ROOF_DEFAULTS, presetEdges, roofGeometry, edgeKinds } from './res-roof.js';
import { loopAt, labelPoint } from './model-rooms.js';
import { inPoly } from './model-plan.js';
import { libraryFrame } from './ifc-place.js';

export function mountMuiTools(ctx) {
  const { MS, root, ui, S, exts, extTool, ed, kb, endChain, drawOverlay, commit, host } = ctx;

  // ---- tools ----
  function setTool(name) {
    if (S.libFor && name !== S.libFor) { delete S.open[S.libFor]?.lib; S.libFor = null; try { fillOpeningOpts(); } catch (e) { /* the options row is not up yet */ } }   // 2026-11-02: another tool puts a Library door / window down
    S.tool = name;
    for (const b of ui.tools) b.setAttribute('aria-pressed', b.dataset.mtool === name ? 'true' : 'false');
    const xw = extTool(name);   // 0.9 WT.2 (wall-tools-ui.js): the wall recipes (rectangle, polygon, arcs, pick, trace) use the Wall row too
    if (ui.wallOpts) ui.wallOpts.hidden = name !== 'wall' && !(typeof xw?.wallRow === 'function' ? xw.wallRow(name) : xw?.wallRow);
    if (ui.wallShape) ui.wallShape.value = xw?.wallShape?.(name) || S.wall.shape;
    for (const [k, row] of Object.entries(ui.oOpts)) if (row) row.hidden = name !== k;
    for (const k of ['floor', 'ceiling', 'roof']) { const row = root.querySelector(`[data-mopts="${k}"]`); if (row) row.hidden = name !== k; }
    for (const row of root.querySelectorAll('[data-mopts]')) if (!['wall', 'door', 'window', 'floor', 'ceiling', 'roof'].includes(row.dataset.mopts)) row.hidden = row.dataset.mopts !== name;
    const xt = extTool(name);
    S.hover = null;
    if (ui.typedRow) ui.typedRow.hidden = name === 'select';
    const typedLabel = ui.typed?.closest('label');
    if (typedLabel) typedLabel.hidden = name === 'floor' || name === 'ceiling' || name === 'roof' || (xt && !xt.typed?.(name));
    if (MS.pv) MS.pv.dragPan = name === 'select';
    ui.canvas.classList.toggle('is-drawing', name !== 'select');
    if (ui.hint) ui.hint.textContent = xt ? t(xt.hint?.(name) || 'res.hint.' + name) : t(name === 'wall' && S.wall.shape === 'arc' ? 'comforts.hint.arcwall' : 'model.hint.' + name);
    endChain();
    for (const x of exts) x.toolChanged?.(name);
  }

  /** 0.7 BIM-MLWALL: where the walls being drawn end up: the level above, a level further up ('level:<GlobalId>'), or a fixed height. */
  function drawTop(above) {
    const m = /^level:(.+)$/.exec(S.wall.top || '');
    const far = m && topLevelChoices(S.data.levels, S.level).find((l) => l.guid === m[1]);
    if (far) return { topLevel: far.guid };
    return S.wall.top !== 'fixed' && above ? { topLevel: above.guid } : { height: S.wall.top === 'fixed' ? S.wall.height : ctx.level()?.height || 2438.4 };
  }
  /** The Wall tool's "up to" list: the level above, each level further up (a wall through several levels), a fixed height. */
  function fillTopOpts() {
    if (!ui.wallTop) return;
    const up = topLevelChoices(S.data.levels, S.level);
    const opts = [['level', t('model.wall.top.level')], ...up.slice(1).map((l) => ['level:' + l.guid, t('model.wall.top.upto', { name: l.name })]), ['fixed', t('model.wall.top.fixed')]];
    if (!opts.some((o) => o[0] === S.wall.top)) S.wall.top = 'level';
    ui.wallTop.replaceChildren(...opts.map(([v, label]) => el('option', { value: v, selected: v === S.wall.top }, label)));
    ui.wallH.hidden = S.wall.top !== 'fixed';
  }
  function fillWallOpts() {
    fillTopOpts();
    if (!ui.wallType) { if (ui.wallH && document.activeElement !== ui.wallH) ui.wallH.value = fmtLen(S.wall.height, S.units); return; }
    const types = wallTypes(famW());
    if (!types.some(x => x.key === S.wall.typeKey)) S.wall.typeKey = types[0].key;
    const signature = types.map(x => x.key + ':' + typeName(x) + ':' + typeThickness(x) + ':' + (x.lod || '')).join('|');
    if (ui.wallType.dataset.signature !== signature) {
      ui.wallType.dataset.signature = signature;
      ui.wallType.replaceChildren(...types.map((x) => el('option', { value: x.key, selected: x.key === S.wall.typeKey }, typeName(x) + ' (' + fmtLen(typeThickness(x), S.units) + ')' + ctx.lodTag(x))));   // 0.10 BK.16: + the type's LOD tag
    }
    if (document.activeElement !== ui.wallType) ui.wallType.value = S.wall.typeKey;
    if (ui.wallType.dataset.bound) { if (ui.wallH && document.activeElement !== ui.wallH) ui.wallH.value = fmtLen(S.wall.height, S.units); return; }
    ui.wallType.dataset.bound = '1';
    ui.wallType.addEventListener('change', () => { endChain(); S.wall.typeKey = ui.wallType.value; drawOverlay(); });
    for (const [input, key] of [[ui.wallRef, 'reference'], [ui.wallSide, 'side'], [ui.wallShape, 'shape']]) input?.addEventListener('change', () => {
      if ((key === 'shape' && input.value === 'arc' && S.wall.reference.startsWith('core')) || (key === 'reference' && input.value.startsWith('core') && S.wall.shape === 'arc')) { input.value = S.wall[key]; host.status(t('wall.err.core_arc'), true); return; }
      // 0.9 WT.2: the other shapes are recipes (wall-tools-ui.js), each its own tool behind this one list
      if (key === 'shape' && !['straight', 'arc'].includes(input.value)) { const xs = exts.find((x) => x.shapeTool?.(input.value)); if (xs) { endChain(); setTool(xs.shapeTool(input.value)); } return; }
      if (key === 'shape' && S.tool !== 'wall') { S.wall.shape = input.value; setTool('wall'); return; }
      endChain(); S.wall[key] = input.value; if (ui.hint && S.tool === 'wall') ui.hint.textContent = t(S.wall.shape === 'arc' ? 'comforts.hint.arcwall' : 'model.hint.wall'); drawOverlay(); });
    ui.wallTop.addEventListener('change', () => { S.wall.top = ui.wallTop.value; ui.wallH.hidden = S.wall.top !== 'fixed'; });   // 'level' | 'level:<guid>' | 'fixed'
    ui.wallH.addEventListener('change', () => { const mm = parseLen(ui.wallH.value, S.units); if (mm > 100) { S.wall.height = mm; host.status(t('model.wall.height') + ': ' + fmtLen(mm, S.units)); } else host.status(t('model.err.length'), true); ui.wallH.value = fmtLen(S.wall.height, S.units); });
    ui.wallH.hidden = S.wall.top !== 'fixed';
    ui.wallH.value = fmtLen(S.wall.height, S.units);
  }

  function fillOpeningOpts() {
    for (const kind of ['door', 'window']) {
      const sel = root.querySelector(`[data-model-otype="${kind}"]`), wIn = root.querySelector(`[data-model-ow="${kind}"]`), hIn = root.querySelector(`[data-model-oh="${kind}"]`);
      if (!sel) continue;
      const o = S.open[kind], sill = kind === 'window' ? root.querySelector('[data-model-osill]') : null;
      const flipBtn = root.querySelector(`[data-mopts="${kind}"] [data-model-flip]`);
      const show = () => {
        if (document.activeElement !== wIn) wIn.value = fmtLen(o.width, S.units); if (document.activeElement !== hIn) hIn.value = fmtLen(o.height, S.units); if (sill && document.activeElement !== sill) sill.value = fmtLen(o.sill, S.units);
        // 0.6 BIM-F2: a type with no hand (fixed, hung, picture, double doors) has nothing to flip
        const hk = handKind(openingType(o.typeKey));
        if (flipBtn) { flipBtn.hidden = !hk; flipBtn.title = t(hk === 'hinges' ? 'model.ot.flip.title' : 'model.ot.flip.slide.title'); }
        // 2026-11-02: holding a Library door / window, the list names it and its size can't be typed (it is the size it was made)
        let libOpt = sel.querySelector('option[value="__lib"]');
        if (o.lib) {
          if (!libOpt) { libOpt = el('option', { value: '__lib' }); sel.prepend(libOpt); }
          libOpt.textContent = t('model.lib.option', { name: o.lib.item.name });
          sel.value = '__lib';
        } else if (libOpt) { libOpt.remove(); sel.value = o.family || o.typeKey; }
        const lst = o.lib?.stretch || [];
        if (wIn) wIn.disabled = !!o.lib && !lst.includes('x');
        if (hIn) hIn.disabled = !!o.lib && !lst.includes('z');
        const zs = root.querySelector(`[data-model-osize="${kind}"]`); if (zs) zs.disabled = !!o.lib;
      };
      // 0.6 DC.114: the list is the families of that kind (the starter kinds, then the file's own), and beside it their sizes
      const fams = openingFamilies(famW(), kind), sig = fams.map((f) => f.key + '=' + f.name).join('|');
      if (sel.dataset.sig !== sig) {
        sel.dataset.sig = sig;
        if (!fams.some((f) => f.key === (o.family || o.typeKey))) { o.family = o.typeKey; o.values = {}; }
        sel.replaceChildren(...fams.map((x) => el('option', { value: x.key, selected: x.key === (o.family || o.typeKey) }, x.name)));
      }
      let sizeSel = root.querySelector(`[data-model-osize="${kind}"]`);
      if (!sizeSel) {
        sizeSel = el('select', { className: 'bc-mb-select', 'data-model-osize': kind, 'aria-label': t('fam.size'), title: t('fam.size') });
        sel.closest('label').after(el('label', {}, el('span', { className: 'visually-hidden' }, t('fam.size')), sizeSel));
        sizeSel.addEventListener('change', () => {
          const z = toolSizes(kind).find((x) => x.key === sizeSel.value);
          if (z) { o.values = { ...z.values }; o.width = z.values.Width; o.height = z.values.Height; show(); drawOverlay(); }
        });
      }
      if (!sel.dataset.bound) {
        sel.dataset.bound = '1';
        sel.addEventListener('change', () => {
          const key = sel.value, ty = openingType(key);
          if (key === '__lib') return;
          delete o.lib;   // a type of ours: the Library door the tool held is put down
          if (S.libFor === kind) S.libFor = null;
          if (ty) { Object.assign(o, { typeKey: ty.key, family: ty.key, values: {}, width: ty.width, height: ty.height }); if (kind === 'window') o.sill = ty.sill; }
          else {
            const fam = familyFor(famW(), key);
            if (!fam) return;
            const first = toolSizes(kind, key)[0], v = first ? first.values : sizeValues(fam, {});
            Object.assign(o, { typeKey: fam.base, family: key, values: { ...v }, width: v.Width, height: v.Height });
          }
          show(); drawOverlay();
        });
        const len = (input, key, min) => input.addEventListener('change', () => {
          if (o.lib && key !== 'sill' && !o.lib.stretch.includes(key === 'width' ? 'x' : 'z')) { host.status(t('model.lib.fixed', { name: o.lib.item.name }), true); show(); return; }   // a Library door / window is the size it was made, unless the Library lets that size be stretched
          const mm = parseLen(input.value, S.units); if (mm >= min) o[key] = mm; else host.status(t('model.err.length'), true); show(); drawOverlay();
        });
        len(wIn, 'width', 100); len(hIn, 'height', 100); if (sill) len(sill, 'sill', 0);
      }
      const sizes = toolSizes(kind), cur = sizes.find((z) => near(z.values.Width, o.width) && near(z.values.Height, o.height) && Object.entries(z.values).every(([k, v]) => k === 'Width' || k === 'Height' || o.values?.[k] === undefined || near(o.values[k], v)));
      sizeSel.replaceChildren(el('option', { value: '' }, t('fam.size.typed')), ...sizes.map((z) => el('option', { value: z.key }, z.name)));
      sizeSel.value = cur ? cur.key : '';
      show();
    }
    for (const b of root.querySelectorAll('[data-model-flip]')) if (!b.dataset.bound) { b.dataset.bound = '1'; b.addEventListener('click', () => flipHand()); }
  }
  /** A writer on the open model for the family lists (null without one). */
  function famW() { if (!ed()) return null; try { const w = new ModelWriter(ed().W, ed().api, ed().mid); familyWriter(w); return w; } catch (e) { return null; } }   // 0.7: null too while the model is being rebuilt (a pointer move then asked for it)
  function projectWallType(key) { return wallType(key, famW()); }
  const near = (a, b) => Math.abs(a - b) < 0.5;
  /** The sizes the tool offers for its family (the file's sizes of it, then its own default when the file has none). */
  function toolSizes(kind, key = S.open[kind].family || S.open[kind].typeKey) {
    const w = famW();
    const fam = familyFor(w, key);
    if (!fam) return [];
    const fs = w ? readFamilies(w).find((f) => f.key === key && f.source !== 'guess') : null;
    const out = (fs?.sizes || []).map((z) => ({ key: z.guid || 'legacy:' + sizeKey(fam, z.values), name: z.name, values: sizeValues(fam, z.values) }));
    const dv = sizeValues(fam, {});
    if (!out.some((z) => sizeKey(fam, z.values) === sizeKey(fam, dv))) out.push({ key: 'default', name: sizeName(dv) + ' ' + t('fam.size.default'), values: dv });
    return out;
  }
  /** A new size's name in the units the person works in ("3'-0\" × 6'-8\""). */
  const sizeName = (v) => fmtLen(v.Width, S.units) + ' × ' + fmtLen(v.Height, S.units);
  function fillSlabOpts() {
    const fl = S.slab.floor, ce = S.slab.ceiling, rf = S.slab.roof;
    const selectedRoof = () => S.data?.derived?.roofs.find((r) => r.parts.some((p) => ctx.selectedKeys().includes(kb() + p)));
    const editSelectedRoof = (changes) => {
      const r = selectedRoof();
      if (!r) return;
      const again = () => { const next = snapshotModel(ed()).derived.roofs.find((x) => x.guid === r.guid); return next?.parts.length ? [kb() + next.parts[0]] : null; };
      commit(changeDerived([r.guid], changes), { label: t('model.roof'), verb: t('model.verb.changed'), reselect: again });
    };
    const bind = (sel, fn) => { const e = root.querySelector(sel); if (e && !e.dataset.bound) { e.dataset.bound = '1'; e.addEventListener('change', () => { fn(e); drawOverlay(); }); } return e; };
    const len = (e, key, obj, min) => { const mm = parseLen(e.value, S.units); if (mm >= min) obj[key] = mm; else host.status(t('model.err.length'), true); e.value = fmtLen(obj[key], S.units); };
    bind('[data-model-flmode="floor"]', (e) => { fl.mode = e.value; });
    bind('[data-model-flmode="ceiling"]', (e) => { ce.mode = e.value; });
    bind('[data-model-flkind]', (e) => { fl.kind = e.value; fl.thickness = FLOOR_KINDS.find((x) => x.key === e.value)?.t || fl.thickness; const th = root.querySelector('[data-model-flthick]'); if (th) th.value = fmtLen(fl.thickness, S.units); });
    const th = bind('[data-model-flthick]', (e) => len(e, 'thickness', fl, 10));
    const ch = bind('[data-model-ceheight]', (e) => len(e, 'height', ce, 500));
    const pi = bind('[data-model-rfpitch]', (e) => { const d = parsePitch(e.value); if (d > 1 && d < 80) { rf.pitch = d; editSelectedRoof({ pitch: d, edges: formatEdges(new Map([...parseEdges(selectedRoof()?.edges)].map(([k, v]) => [k, v.kind === 'pitch' ? { kind: 'pitch', overhang: v.overhang } : v]))) || ' ' }); } else host.status(t('model.err.pitch'), true); e.value = fmtPitch(rf.pitch, S.units); });
    const ov = bind('[data-model-rfover]', (e) => { const mm = parseLen(e.value, S.units); if (mm >= 0) rf.overhang = mm; else host.status(t('model.err.length'), true); e.value = fmtLen(rf.overhang, S.units); });
    bind('[data-model-rfends]', (e) => { rf.ends = e.value; });
    const fa = bind('[data-model-rffascia]', (e) => { rf.fascia = e.checked; editSelectedRoof({ fascia: e.checked ? ROOF_DEFAULTS.fascia : 0, soffit: e.checked }); });
    if (fa) fa.checked = rf.fascia;
    if (ce.height === null && ctx.level()) ce.height = Math.max(2000, (ctx.levelAbove() ? ctx.levelAbove().elevation - ctx.level().elevation : ctx.level().height) - 304.8);
    if (th && document.activeElement !== th) th.value = fmtLen(fl.thickness, S.units);
    if (ch && document.activeElement !== ch) ch.value = fmtLen(ce.height ?? 2438.4, S.units);
    if (pi && document.activeElement !== pi) pi.value = fmtPitch(rf.pitch, S.units);
    if (ov && document.activeElement !== ov) ov.value = fmtLen(rf.overhang, S.units);
  }
  /** The Roof tool's per-wall settings for its choice (RC.1 presets: hip, gables on the short / long sides — four-sided
   *  outlines only —, shed with its low side nearest `at`), as stored text, or null when it can't. */
  function roofEdges(poly, ends, at, storey = S.level) {
    const m = presetEdges(poly, ctx.wallsOn(storey), ends, at);
    return m ? formatEdges(m) : null;
  }
  const roofOpts = (rf) => ({ thickness: ROOF_DEFAULTS.thickness, fascia: rf.fascia ? ROOF_DEFAULTS.fascia : 0, soffit: !!rf.fascia });
  /** What the Floor, Ceiling or Roof tool would cover at p: the room or the building outline round it. */
  function hoverSlab(p, tool) {
    if (!S.loops) return null;
    const mode = tool === 'roof' ? 'building' : S.slab[tool].mode;
    const loop = loopAt(mode === 'building' ? S.loops.outlines : S.loops.rooms, p);
    return loop ? { loop, mode, seed: p } : null;
  }
  function slabPreview(h, tool, o) {
    o.walls.push(h.loop.poly);
    let text = fmtArea(Math.abs(h.loop.area), S.units);
    if (tool === 'roof') {
      const rf = S.slab.roof, g = roofEdges(h.loop.poly, rf.ends, h.seed);
      const plan = g !== null ? roofGeometry(h.loop.poly, edgeKinds(h.loop.poly, ctx.wallsHere(), { pitch: rf.pitch, overhang: rf.overhang, edges: g }), roofOpts(rf)) : { error: 'model.err.gable4' };
      if (plan.error) text = t(plan.error);
      else {
        o.symbols.push({ dashed: plan.eave.map((p, i) => [p[0], p[1], plan.eave[(i + 1) % plan.eave.length][0], plan.eave[(i + 1) % plan.eave.length][1]]), thin: plan.ridge });
        text = fmtPitch(rf.pitch, S.units) + '  ' + fmtArea(plan.area, S.units);
      }
    }
    o.hud = { p: labelPoint(h.loop.poly), text };
  }
  function placeSlab(h, tool) {
    const st = ctx.level().guid;
    if (tool === 'floor') { const f = S.slab.floor; commit(placeFloor({ storey: st, seed: h.seed, mode: f.mode, kind: f.kind, thickness: f.thickness, typeKey: ctx.api.ask('newElementType', 'floor') || '' }), { label: t('model.floor.' + f.kind), verb: t('model.verb.placed') }); }
    else if (tool === 'ceiling') { const c = S.slab.ceiling; commit(placeCeiling({ storey: st, seed: h.seed, mode: c.mode, height: c.height, thickness: c.thickness, typeKey: ctx.api.ask('newElementType', 'ceiling') || '' }), { label: t('model.ceiling'), verb: t('model.verb.placed') }); }
    else {
      const rf = S.slab.roof, g = roofEdges(h.loop.poly, rf.ends, h.seed);
      if (g === null) { host.status(t('model.err.gable4'), true); return; }
      // These walls already carry a roof: change that one to the new settings instead of putting a second roof over it
      // (2026-10-24: a hip roof and a gable roof on the same walls cut through each other — fascia, gables, stray lines).
      const had = S.data?.derived?.roofs.find((r) => r.walls === st && r.seed && inPoly(r.seed[0], r.seed[1], h.loop.poly));
      if (had) { commit(changeDerived(had.guid, { pitch: rf.pitch, overhang: rf.overhang, edges: g, gables: [], ...roofOpts(rf) }), { label: t('model.roof'), verb: t('model.verb.changed') }); return; }
      commit(placeRoof({ storey: st, seed: h.seed, pitch: rf.pitch, overhang: rf.overhang, edges: g, ...roofOpts(rf), typeKey: ctx.api.ask('newElementType', 'roof') || '' }), { label: t('model.roof'), verb: t('model.verb.placed') });
    }
  }
  /**
   * 2026-11-02: a Library door / window put down away from any wall stands on its own (an IfcDoor / IfcWindow on the level), its
   * width along X and its middle at the click; a wall drawn through it later takes it in (model-openings.js adoptLibraryOpenings).
   */
  function placeFree(p, kind) {
    const o = S.open[kind], item = o.lib.item, f = libraryFrame(item.body);
    if (!f) { host.status(t('model.err.libopening'), true); return; }
    const rot = f.turn;   // a door drawn along Y is turned so its width runs along X
    const c = f.turn ? [f.dy, f.width / 2 - f.dx] : [f.width / 2 - f.dx, -f.dy];   // its middle in its own axes (the frame turned back)
    const a = rot * Math.PI / 180, cr = [c[0] * Math.cos(a) - c[1] * Math.sin(a), c[0] * Math.sin(a) + c[1] * Math.cos(a)];
    const z = kind === 'window' ? o.sill : 0;
    commit((editor) => {
      const r = editor.placer().place(item, { storey: S.level, x: p[0] - cr[0], y: p[1] - cr[1], rot, z, itemNumber: editor.placer().nextItemNumber(), ...o.lib.opts });
      editor.reindex();
      return { journal: r.journal, id: r.id, ids: [r.id] };
    }, { label: item.name, verb: t('model.verb.placed') });
    libraryPlaced(item.name, 'model.lib.free');
  }
  /** 2026-11-02 (BIMBro: "delete doesn't work"): one Library item per Place — back to Select, so the next click picks it (it used to place a
   *  second one on top of the first, and Delete then had nothing picked). */
  function libraryPlaced(name, key = 'model.lib.placed') {
    setTool('select');
    host.status(t(key, { name }));
  }
  /** 2026-11-02: the Library's Place on a door or window item: the plan's Door / Window tool takes it (its size is the item's). */
  function placeLibrary(entry) {
    const item = entry?.item, kind = item?.kind;
    if (kind !== 'door' && kind !== 'window') return false;
    const f = libraryFrame(item.body);
    if (!f) { host.status(t('model.err.libopening'), true); return true; }
    if (!S.on) ctx.show(true);
    const o = S.open[kind];
    const stretch = Array.isArray(entry.meta?.stretch) ? entry.meta.stretch : [];   // 2026-11-02: the axes the Library lets it be stretched along
    Object.assign(o, { lib: { item, stretch, opts: { library: entry.meta?.library || 'librarycraft', sha256: entry.meta?.sha256 || '', sourceFile: entry.meta?.sourceFile || '', stretch } }, typeKey: libraryBase(kind, f.width), family: '', values: {}, width: f.width, height: f.height, hand: 'a' });
    S.libFor = kind;
    setTool(kind);
    fillOpeningOpts();
    host.status(t('model.lib.start', { name: item.name, size: fmtLen(f.width, S.units) + ' × ' + fmtLen(f.height, S.units) }));
    return true;
  }
  function flipHand() {
    const o = S.open[S.tool];
    if (!o || !handKind(openingType(o.typeKey))) return;
    o.hand = o.hand === 'b' ? 'a' : 'b';
    if (S.hover) S.hover.hand = o.hand;
    drawOverlay();
  }

  return { setTool, drawTop, fillWallOpts, fillOpeningOpts, famW, projectWallType, sizeName, fillSlabOpts, hoverSlab, slabPreview, placeSlab, placeFree, libraryPlaced, placeLibrary, flipHand };
}
