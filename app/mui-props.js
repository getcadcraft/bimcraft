/* SPDX-License-Identifier: Apache-2.0 */
/**
 * mui-props.js: model-ui.js's 6 bindings for this topic, moved out of mountModel() unchanged (0.11 PERF.78, perf-finish-11 bimcraft: one module per panel section; no behaviour change).
 * mountMuiProps(ctx) is called once by mountModel(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables mountModel() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { fmtLen, parseLen, fmtAngle, fmtArea, fmtPitch, parsePitch } from './model-units.js';
import { el } from './ui-util.js';
import { t } from './i18n.js';
import { wallTypes, typeName, typeAt, JUSTIFICATIONS, topLevelChoices, wallLevelsPassed, wallOutlines } from './model-walls.js';
import { changeWalls, changeWall, changeWallsBy, changeOpenings, changeOpening, snapshotModel, changeDerived, loopsOf } from './model-ops.js';
import { MEASURE_FROM, GROW, lengthFrom, setLengthGrow, fixedPoint, roomSize, setRoomSize, moveOutward, angleOf, setAngle, squareUp } from './wall-square.js';
import { arcHeight, bulgeFromHeight, BULGE_MAX, wallGeom } from './model-arcs.js';
import { DOOR_TYPES, WINDOW_TYPES, openingTypeName, openingType, handKind } from './model-openings.js';
import { openingFamilies, readFamilies, setFamilySize } from './family-ops.js';
import { loopAt } from './model-rooms.js';
import { FLOOR_KINDS, CEILING_PATTERNS } from './model-slabs.js';
import { formatEdges, parseEdges, edgeKinds, presetEdges, edgeWalls } from './res-roof.js';

export function mountMuiProps(ctx) {
  const { MS, S, exts, ed, kb, commit, drawOverlay, famW, projectWallType, sizeName, selectedKeys, faceEnds, picked, pickSnapshot, host, mergeJournals } = ctx;

  // ---- Properties: change a drawn wall, door or window (BM.5) ----
  /**
   * The block Properties shows above the IFC data when the pick is the tools' own: one wall, one door / window, or several
   * of one kind (then only what they share: type, height, size). Every field is one change on Enter or leaving it.
   */
  function propsBlock() {
    const keys = selectedKeys();
    const p = picked();
    if (!p.count || p.count !== keys.length) return null;
    const data = S.on && S.data ? S.data : pickSnapshot();
    const k = kb();
    const walls = data.walls.filter((w) => p.walls.includes(w.guid)), ops = data.openings.filter((o) => p.openings.includes(o.guid));
    const levels = data.levels;
    const L = (mm) => fmtLen(mm, S.units);
    const rows = [];
    const field = (label, input, extra) => rows.push(el('dt', {}, label), el('dd', {}, input, extra || null));
    const lenInput = (value, attr, onLen, { min = 1, allowZero = false, any = false } = {}) => {
      const i = el('input', { type: 'text', className: 'bc-input bc-num', value: Number.isFinite(value) ? L(value) : '', [attr]: '' });
      const go = () => {
        if (i.value === i.defaultValue) return;
        const mm = parseLen(i.value, S.units);
        if (!Number.isFinite(mm) || (!any && (allowZero ? mm < 0 : mm < min))) { host.status(t('model.err.length'), true); i.value = i.defaultValue; return; }
        onLen(mm);
      };
      i.addEventListener('change', go);
      i.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); i.blur(); } if (e.key === 'Escape') { i.value = i.defaultValue; i.blur(); } });
      return i;
    };
    const select = (options, value, attr, onPick) => {
      const s2 = el('select', { className: 'bc-mb-select', [attr]: '' }, ...options.map(([v, label]) => el('option', { value: v, selected: v === value }, label)));
      s2.addEventListener('change', () => onPick(s2.value));
      return s2;
    };
    const button = (label, attr, onClick) => { const b = el('button', { type: 'button', className: 'btn-line btn-sm-cc', [attr]: '' }, label); b.addEventListener('click', onClick); return b; };
    const one = (label) => ({ label, verb: t('model.verb.changed'), select: keys });
    let title = '';
    if (p.ext.length) {
      // another module's elements (all of one module): it fills the rows
      const xs = new Set(p.ext.map((q) => q.x));
      if (xs.size !== 1 || p.ext.length !== p.count) return null;
      const r = p.ext[0].x.props?.(p.ext.map((q) => q.it), { rows, field, lenInput, select, button, one, keys, el });
      if (!r) return null;
      title = r.title;
    } else if (walls.length && !ops.length) {
      const w0 = walls[0], many = walls.length > 1, guids = walls.map((w) => w.guid);
      title = many ? t('model.walls', { n: walls.length }) : t('model.wall');
      const sameType = walls.every((w) => w.typeKey === w0.typeKey);
      const typeOpts = wallTypes(famW()).map((x) => [x.key, typeName(x) + ctx.lodTag(x)]);   // 0.10 BK.16: the type's LOD tag
      if (sameType && !typeOpts.some((x) => x[0] === w0.typeKey) && projectWallType(w0.typeKey)) typeOpts.unshift([w0.typeKey, typeName(projectWallType(w0.typeKey))]);
      if (!sameType) typeOpts.unshift(['', t('model.prop.changetype')]);
      field(t('model.wall.type'), select(typeOpts, sameType ? w0.typeKey : '', 'data-mp-type', (v) => { if (v && !ctx.api.ask('swapType', guids, v, one(title))) commit(many ? changeWalls(guids, { typeKey: v }) : changeWall(w0.guid, { typeKey: v }), one(title)); }));   // 0.10 BK.7: wall-typeswap-ui.js swaps and reports what moved
      { const sw = ctx.api.ask('typeSwapBlock', guids); if (sw) rows.push(el('dt', { className: 'bc-mp-wide' }, ''), el('dd', { className: 'bc-mp-wide' }, sw)); }   // the Swap type list and its report (wall-typeswap-ui.js)
      if (sameType) field('', button(t('assembly.open'), 'data-mp-assembly', () => ctx.api.ask('openAssembly', w0.typeKey, guids)));
      const above = (w) => { const i = levels.findIndex((l) => l.id === w.storey); return i >= 0 ? levels[i + 1] || null : null; };
      if (!many) {
        field(t('model.prop.thickness'), w0.assembly?.custom ? el('span', {}, fmtLen(w0.t, S.units)) : lenInput(w0.t, 'data-mp-thick', (mm) => { const key = typeAt(w0.typeKey, mm); if (!key) { host.status(t('model.err.thin'), true); return; } commit(changeWall(w0.guid, { typeKey: key }), one(title)); }, { min: 10 }));
        if (w0.bulge) field(t('model.prop.length'), lenInput(w0.len, 'data-mp-len', (mm) => { const u = [(w0.b[0] - w0.a[0]) / w0.len, (w0.b[1] - w0.a[1]) / w0.len]; commit(changeWall(w0.guid, { b: [w0.a[0] + u[0] * mm, w0.a[1] + u[1] * mm] }), one(title)); }, { min: 10 }));
        else {
          // 0.9 FX.22: read and set from the centre line or a face; the joined walls follow and keep their angle
          const from = MEASURE_FROM.includes(S.wallFrom) ? S.wallFrom : 'center', all = data.walls, go = (plan) => commit(changeWallsBy(w0.guid, plan), one(title));
          field(t('model.prop.from'), select(MEASURE_FROM.map((m) => [m, t('model.from.' + m)]), from, 'data-mp-from', (v) => { S.wallFrom = v; renderProps(); }));
          // 0.9 FX.67: which side holds when the Length changes (start | end | centre); the fixed side is marked on the plan while the field is in use
          const grow = GROW.includes(S.wallGrow) ? S.wallGrow : 'start';
          const lenIn = lenInput(lengthFrom(all, w0, from), 'data-mp-len', (mm) => go((walls) => setLengthGrow(walls, w0.guid, mm, from, grow)), { min: 10 });
          lenIn.addEventListener('focus', () => { S.fixedMark = fixedPoint(w0, grow); drawOverlay(); });
          lenIn.addEventListener('blur', () => { S.fixedMark = null; drawOverlay(); });
          field(t('model.prop.length'), lenIn);
          field(t('walls.grow'), select(GROW.map((g) => [g, t('walls.grow.' + g)]), grow, 'data-mp-grow', (v) => { S.wallGrow = v; renderProps(); }));
          const room = roomSize(all, w0, from);
          if (room) field(t('model.prop.room'), lenInput(room.value, 'data-mp-room', (mm) => go((walls) => setRoomSize(walls, w0.guid, mm, from)), { min: 10 }));
          const mv = lenInput(NaN, 'data-mp-move', (mm) => { if (mm) go((walls) => moveOutward(walls, w0.guid, mm)); }, { any: true });
          mv.placeholder = t('model.prop.move.hint');
          field(t('model.prop.move'), mv);
          const ang = angleOf(all, w0.guid), ai = el('input', { type: 'text', className: 'bc-input bc-num', value: fmtAngle(ang.deg), 'data-mp-angle': '' });
          ai.addEventListener('change', () => {
            const deg = parseFloat(ai.value);
            if (!Number.isFinite(deg) || (ang.to && !(deg > 0 && deg < 180))) { host.status(t('model.err.angle'), true); ai.value = ai.defaultValue; return; }
            go((walls) => setAngle(walls, w0.guid, deg));
          });
          ai.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); ai.blur(); } if (e.key === 'Escape') { ai.value = ai.defaultValue; ai.blur(); } });
          field(t(ang.to ? 'model.prop.angle' : 'model.prop.direction'), ai);
          field('', button(t('model.prop.squareup'), 'data-mp-square', () => {
            if (!squareUp(all, w0.guid).size) { host.status(t('model.square.none')); return; }
            go((walls) => squareUp(walls, w0.guid));
          }));
        }
      }
      // 0.6 round 2: the location line (what stays put when the wall gets thicker or its outside flips)
      const sameJ = walls.every((w) => (w.justification || 'center') === (w0.justification || 'center'));
      const jOpts = JUSTIFICATIONS.map((j) => [j, t('comforts.just.' + j.toLowerCase())]);
      if (!sameJ) jOpts.unshift(['', t('model.prop.mixed')]);
      field(t('comforts.prop.just'), select(jOpts, sameJ ? (w0.justification || 'center') : '', 'data-mp-just', (v) => { if (v) commit(many ? changeWalls(guids, { justification: v }) : changeWall(w0.guid, { justification: v }), one(title)); }));
      // 0.9 FX.60 (wall tool spec: Disallow join, per end): a free end stays free where the wall goes, until it is allowed again
      if (!many) for (const [end, key, attr] of [['a', 'model.prop.joinstart', 'data-mp-join-a'], ['b', 'model.prop.joinend', 'data-mp-join-b']]) {
        field(t(key), select([['on', t('model.join.on')], ['off', t('model.join.off')]], w0.joinOff?.[end] ? 'off' : 'on', attr, (v) => { if (v) commit(changeWall(w0.guid, { joinAllowed: { [end]: v === 'on' } }), one(title)); }));
      }
      const ab = !many ? levels.find((l) => l.guid === w0.topLevel) || null : null, toLevel = walls.every((w) => w.topLevel), fixed = walls.every((w) => !w.topLevel);
      // 0.7 BIM-MLWALL: one wall can go up to any level above it (the nearest is "the level above")
      const choices = !many ? topLevelChoices(levels, w0.storey) : [];
      const topLv = !many && toLevel ? levels.find((l) => l.guid === w0.topLevel) || null : null;
      const topOpts = !many ? [...choices.map((l, i) => ['level:' + l.guid, i === 0 ? t('model.wall.top.level') : t('model.wall.top.upto', { name: l.name })]), ['fixed', t('model.wall.top.fixed')]]
        : [['level', t('model.wall.top.level')], ['fixed', t('model.wall.top.fixed')]];
      if (many ? !toLevel && !fixed : toLevel && !topLv) topOpts.unshift(['', t('model.prop.mixed')]);
      const topVal = many ? (toLevel ? 'level' : fixed ? 'fixed' : '') : topLv ? 'level:' + topLv.guid : toLevel ? '' : 'fixed';
      field(t('model.wall.top'), select(topOpts, topVal, 'data-mp-top', (v) => {
        if (v.startsWith('level:')) commit(changeWall(w0.guid, { topLevel: v.slice(6), topOffset: 0 }), one(title));
        else if (v === 'level') {
          const ch = walls.map((w) => ({ w, a: above(w) }));
          if (ch.some((x) => !x.a)) { host.status(t('model.err.notop'), true); renderProps(); return; }
          commit((editor) => { let r = null; for (const x of ch) r = mergeR(r, changeWall(x.w.guid, { topLevel: x.a.guid, topOffset: 0 })(editor)); return r; }, one(title));
        } else if (v === 'fixed') commit(many ? changeWalls(guids, { height: w0.height }) : changeWall(w0.guid, { height: w0.height }), one(title));
      }));
      field(t('model.wall.height'), lenInput(walls.every((w) => Math.abs(w.height - w0.height) < 0.5) ? w0.height : NaN, 'data-mp-height', (mm) => {
        if (toLevel && !many && ab) commit(changeWall(w0.guid, { topOffset: w0.topOffset + (mm - w0.height) }), one(title));
        else commit(many ? changeWalls(guids, { height: mm }) : changeWall(w0.guid, { height: mm }), one(title));
      }, { min: 100 }), toLevel && ab ? el('span', { className: 'bc-sub' }, ' ' + t('model.prop.tolevel', { name: ab.name })) : null);
      if (!many) {
        field(t('model.prop.base'), lenInput(w0.baseOffset, 'data-mp-base', (mm) => commit(changeWall(w0.guid, { baseOffset: mm }), one(title)), { allowZero: true }));
        field(t('model.prop.outside'), el('span', {}, el('span', {}, t(w0.extSide === 'right' ? 'model.prop.right' : 'model.prop.left') + ' '),
          button(t('model.ot.flip'), 'data-mp-flipside', () => commit(changeWall(w0.guid, { extSide: w0.extSide === 'right' ? 'left' : 'right' }), one(title)))));
        // 0.6 round 2 (bim-comforts_PART_2): how far the middle bows off a straight line (0 = straight; − = to the right)
        field(t('comforts.prop.archeight'), lenInput(arcHeight(w0.a, w0.b, w0.bulge), 'data-mp-arc', (mm) => {
          const bg = bulgeFromHeight(w0.a, w0.b, mm);
          if (!(Math.abs(bg) <= BULGE_MAX)) { host.status(t('comforts.err.arc'), true); renderProps(); return; }
          commit(changeWall(w0.guid, { bulge: Math.abs(bg) < 1e-9 ? 0 : bg }), one(title));
        }, { any: true }), w0.bulge ? el('span', { className: 'bc-sub' }, ' ' + t('comforts.prop.radius', { r: fmtLen(wallGeom(w0).arc.R, S.units) })) : null);
        rows.push(el('dt', {}, t('model.level')), el('dd', {}, levels.find((l) => l.id === w0.storey)?.name || ''));
        const passed = wallLevelsPassed(w0, levels);
        if (passed.length) rows.push(el('dt', {}, t('model.wall.passes')), el('dd', {}, passed.map((l) => l.name).join(', ')));   // 0.7 BIM-MLWALL
        // 0.9 WT.3 / WT.6 / WT.7: rows other modules add for one wall (locks, grid locks, shape): wall-tools-ui.js, wall-shape-ui.js
        for (const x of exts) { try { x.wallProps?.(w0, { rows, field, lenInput, select, button, one, el, data, title }); } catch (e) { console.error(e); } }
      }
    } else if (ops.length && !walls.length && ops.every((o) => o.kind === ops[0].kind)) {
      const o0 = ops[0], many = ops.length > 1, guids = ops.map((o) => o.guid), door = o0.kind === 'door';
      const types = door ? DOOR_TYPES : WINDOW_TYPES;
      title = many ? t('model.elements', { n: ops.length }) : (o0.name || openingTypeName(openingType(o0.typeKey) || types[0]));
      const run = (ch) => commit(many ? changeOpenings(guids, ch) : changeOpening(o0.guid, ch), one(title));
      const same = (f) => ops.every((o) => Math.abs(o[f] - o0[f]) < 0.5);
      // 0.6 DC.114: the family (the starter kinds and the file's own of this kind), then its sizes
      const sameFam = ops.every((o) => o.family === o0.family);
      const opts = openingFamilies(famW(), o0.kind).map((x) => [x.key, x.name]);
      if (!sameFam) opts.unshift(['', t('model.prop.changetype')]);
      field(t('fam.family'), select(opts, sameFam ? o0.family : '', 'data-mp-otype', (v) => { if (!v) return; if (openingType(v)) run({ typeKey: v }); else run({ family: v }); }));
      const famUi = exts.find((x) => x.openFamily);   // family-ui.js: the family's dialog (sizes, edit, duplicate)
      if (sameFam && famUi) field('', button(t('fam.open'), 'data-mp-ofam', () => famUi.openFamily(o0.family)));
      if (sameFam) {
        const fs = readFamilies(famW()).find((f) => f.key === o0.family && f.source !== 'guess');
        const sz = (fs?.sizes || []).filter((z) => z.guid);
        const sameSize = ops.every((o) => o.typeId === o0.typeId) && sz.some((z) => z.typeId === o0.typeId);
        const so = sz.map((z) => [z.guid, z.name + ' (' + z.count + ')']);
        if (!sameSize) so.unshift(['', t('fam.size.pick')]);
        field(t('fam.size'), select(so, sameSize ? sz.find((z) => z.typeId === o0.typeId).guid : '', 'data-mp-osize', (v) => { if (v) commit(setFamilySize(guids, v), one(title)); }));
        famUi?.instanceFields?.(ops, { field }, one(title));   // 0.7 BIM-FAM-MORE (7): what each door or window sets itself
      }
      const sized = (ch) => run({ ...ch, sizeName: sizeName({ Width: ch.width ?? o0.width, Height: ch.height ?? o0.height }) });
      field(t('model.ot.width'), lenInput(same('width') ? o0.width : NaN, 'data-mp-ow', (mm) => sized({ width: mm }), { min: 100 }));
      field(t('model.ot.height'), lenInput(same('height') ? o0.height : NaN, 'data-mp-oh', (mm) => sized({ height: mm }), { min: 100 }));
      if (!door) field(t('model.ot.sill'), lenInput(same('sill') ? o0.sill : NaN, 'data-mp-osill', (mm) => run({ sill: mm }), { allowZero: true }));
      if (!many) {
        const wall = data.walls.find((w) => w.id === o0.wall);
        const [e0, e1] = wall ? faceEndsOf(wall, o0.face) : [0, o0.offset + o0.width];
        field(t('model.prop.fromstart'), lenInput(o0.offset - e0, 'data-mp-ostart', (mm) => run({ offset: e0 + mm }), { allowZero: true }));
        field(t('model.prop.fromend'), lenInput(e1 - o0.offset - o0.width, 'data-mp-oend', (mm) => run({ offset: e1 - mm - o0.width }), { allowZero: true }));
        const hk = handKind(openingType(o0.typeKey));   // 0.6 BIM-F2: only types that have a hand
        if (hk) field(t(hk === 'hinges' ? 'model.prop.hinges' : 'model.prop.opensto'), button(t('model.ot.flip'), 'data-mp-hand', () => run({ hand: o0.hand === 'b' ? 'a' : 'b' })));
        field(t(door ? 'model.prop.swing' : 'model.prop.wface'), button(t('model.ot.flip'), 'data-mp-face', () => run({ face: o0.face === 'right' ? 'left' : 'right' })));
      }
    } else if (p.derived.length === 1 && !walls.length && !ops.length) {
      const d = p.derived[0];
      // a roof is picked by one of its parts, which are made again: pick it again by its GlobalId after the reload
      const again = () => { const r = snapshotModel(ed()).derived.roofs.find((x) => x.guid === d.guid); return r?.parts.length ? [kb() + r.parts[0]] : null; };
      // GH.3-D: edits of one roof field in a row (pitch typed twice, fascia nudged) are one undo step
      const run = (ch) => commit(changeDerived([d.guid], ch), { ...one(title), ...(d.kind === 'roof' ? { reselect: again, coalesce: 'roof:' + d.guid + ':' + Object.keys(ch).sort().join(',') } : {}) });
      const text = (value, attr, onText) => {
        const i = el('input', { type: 'text', className: 'bc-input', value: value || '', maxLength: 120, [attr]: '' });
        i.addEventListener('change', () => { if (i.value.trim() && i.value !== i.defaultValue) onText(i.value.trim()); else i.value = i.defaultValue; });
        i.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); i.blur(); } if (e.key === 'Escape') { i.value = i.defaultValue; i.blur(); } });
        return i;
      };
      for (const x of exts) { try { x.derivedProps?.(d, { rows, field, select, button, el, run }); } catch (e) { console.error(e); } }   // 0.10 BK.24 (bk-r3-types-10): the Type row of a floor, ceiling or roof (element-types-ui.js)
      if (d.kind === 'room') {
        title = t('model.room');
        const loops = loopsOf(ed(), d.storey), loop = loopAt(loops.rooms, d.seed);
        field(t('model.room.longname'), text(d.name, 'data-mp-rname', (v) => run({ name: v })));
        field(t('model.room.number'), text(d.number, 'data-mp-rnum', (v) => run({ number: v })));
        if (loop) { rows.push(el('dt', {}, t('model.room.area')), el('dd', { 'data-mp-rarea': '' }, fmtArea(loop.area, S.units)), el('dt', {}, t('model.room.perimeter')), el('dd', {}, fmtLen(loop.perimeter, S.units))); }
        for (const x of exts) { try { x.roomProps?.(d, { rows, el, loop, button }); } catch (e) { console.error(e); } }   // bk-tools-a-10: the room's volume and its tag (spaces-ui.js)
        // 0.6 round 2 (comforts-ui.js): the room's four walls as interior elevations, with their dimensions and tags
        const ie = exts.find((x) => x.openInterior);
        if (ie && loop) field('', button(t('comforts.ie.open'), 'data-mp-intel', () => ie.openInterior(d)));
      } else if (d.kind === 'floor') {
        title = t('model.floor.' + (FLOOR_KINDS.some((k) => k.key === d.floorKind) ? d.floorKind : 'wood'));   // bk-r3-types-10: the floor's own kind (wood | concrete) is floorKind; `kind` says it is a floor
        field(t('model.fl.kind'), select(FLOOR_KINDS.map((k) => [k.key, t('model.floor.' + k.key)]), d.floorKind, 'data-mp-flkind', (v) => run({ kind: v })));
        field(t('model.prop.thickness'), lenInput(d.thickness, 'data-mp-flthick', (mm) => run({ thickness: mm }), { min: 10 }));
        field(t('model.fl.offset'), lenInput(d.offset, 'data-mp-floff', (mm) => run({ offset: mm }), { any: true }));
      } else if (d.kind === 'ceiling') {
        title = t('model.ceiling');
        field(t('model.ce.height'), lenInput(d.height, 'data-mp-ceh', (mm) => run({ height: mm }), { min: 500 }));
        field(t('model.prop.thickness'), lenInput(d.thickness, 'data-mp-cet', (mm) => run({ thickness: mm }), { min: 1 }));
        // 0.6 DC.117: the grid a ceiling plan draws on it
        field(t('model.ce.pattern'), select(CEILING_PATTERNS.map((p) => [p.key, t('model.ce.pattern.' + (p.key || 'none'))]), d.pattern || '', 'data-mp-cepat', (v) => run({ pattern: v })));
      } else {
        title = t('model.roof');
        const pi = el('input', { type: 'text', className: 'bc-input bc-num', value: fmtPitch(d.pitch, S.units), 'data-mp-rfpitch': '' });
        pi.addEventListener('change', () => { const deg = parsePitch(pi.value); if (deg > 1 && deg < 80) run({ pitch: deg, edges: formatEdges(new Map([...parseEdges(d.edges)].map(([k, v]) => [k, v.kind === 'pitch' ? { kind: 'pitch', overhang: v.overhang } : v]))) || ' ' }); else { host.status(t('model.err.pitch'), true); pi.value = pi.defaultValue; } });
        pi.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); pi.blur(); } });
        field(t('model.rf.pitch'), pi);
        field(t('model.rf.overhang'), lenInput(d.overhang, 'data-mp-rfover', (mm) => run({ overhang: mm }), { allowZero: true }));
        // RC.1: gable overhang, presets incl. shed, plate height, fascia, soffit, and each wall's own setting
        field(t('res.rf.rake'), lenInput(Number.isFinite(d.rake) ? d.rake : d.overhang, 'data-mp-rfrake', (mm) => run({ rake: mm }), { allowZero: true }));
        const wl = data.levels.find((l) => l.guid === d.walls);
        const ws = wl ? (data.walls || []).filter((w) => w.storey === wl.id) : [];
        const o = wl && loopAt(loopsOf(ed(), wl.id).outlines, d.seed);
        const kinds = o ? edgeKinds(o.poly, ws, d) : [];
        const sig = kinds.map((k) => k.kind).join(',');
        const custom = kinds.some((k) => k.kind === 'pitch' && Math.abs(k.pitch - d.pitch) > 1e-6);
        const presetSig = (v) => { const m = o && presetEdges(o.poly, ws, v, null); return m ? edgeKinds(o.poly, ws, { ...d, edges: formatEdges(m), gables: [] }).map((k) => k.kind).join(',') : null; };
        let cur = '';
        if (!custom) for (const v of ['hip', 'gable-short', 'gable-long']) if (presetSig(v) === sig) { cur = v; break; }
        if (!cur && !custom && kinds.filter((k) => k.kind === 'pitch').length === 1 && kinds.every((k) => k.kind !== 'none')) cur = 'shed';
        field(t('model.rf.ends'), select([['', t('res.rf.custom')], ['hip', t('model.rf.hip')], ['gable-short', t('model.rf.gable.short')], ['gable-long', t('model.rf.gable.long')], ['shed', t('res.rf.shed')]], cur, 'data-mp-rfends', (v) => {
          if (!v) return;
          const m = o ? presetEdges(o.poly, ws, v, v === 'shed' ? shedLow(o.poly, kinds) : null) : null;
          if (!m) { host.status(t('model.err.gable4'), true); renderProps(); return; }
          run({ edges: formatEdges(m) || ' ', gables: [] });
        }));
        field(t('res.rf.plate'), lenInput(d.plate > 0 ? d.plate : NaN, 'data-mp-rfplate', (mm) => run({ plate: mm }), { allowZero: true }), el('span', { className: 'bc-sub' }, ' ' + t('res.rf.plate.auto')));
        field(t('res.rf.fascia'), lenInput(d.fascia, 'data-mp-rffascia', (mm) => run({ fascia: mm }), { allowZero: true }));
        const so = el('input', { type: 'checkbox', checked: !!d.soffit, 'data-mp-rfsoffit': '' });
        so.addEventListener('change', () => run({ soffit: so.checked }));
        field(t('res.rf.soffit'), el('label', {}, so, ' ' + t('res.rf.soffit.on')));
        field(t('model.prop.thickness'), lenInput(d.thickness, 'data-mp-rfthick', (mm) => run({ thickness: mm }), { min: 10 }));
        if (o) {
          // one row per wall under the roof: pitched (its own pitch), gable end, or none (stops flush)
          const guids = edgeWalls(o.poly, ws), map = parseEdges(d.edges);
          const keyAt = (i) => guids[i] || '@' + i;
          const setEdge = (i, e) => {
            const m = new Map(map);
            if (!d.edges && d.gables.length) d.gables.forEach((gi) => m.set(keyAt(gi), { kind: 'gable' }));
            if (e) m.set(keyAt(i), e); else m.delete(keyAt(i));
            run({ edges: formatEdges(m) || ' ', gables: [] });
          };
          const list = el('ol', { className: 'bc-rf-edges', 'data-mp-rfedges': '' }, ...kinds.map((k, i) => {
            const a = o.poly[i], b = o.poly[(i + 1) % o.poly.length];
            const kind = select([['pitch', t('res.rf.k.pitch')], ['gable', t('res.rf.k.gable')], ['none', t('res.rf.k.none')]], k.kind, 'data-mp-rfedge', (v) => setEdge(i, v === 'pitch' ? null : { kind: v }));
            const ep = el('input', { type: 'text', className: 'bc-input bc-num', value: k.kind === 'pitch' ? fmtPitch(k.pitch, S.units) : '', size: 6, hidden: k.kind !== 'pitch', 'data-mp-rfedgepitch': String(i), 'aria-label': t('model.rf.pitch') });
            ep.addEventListener('change', () => { const deg = parsePitch(ep.value); if (!(deg > 1 && deg < 80)) { host.status(t('model.err.pitch'), true); ep.value = ep.defaultValue; return; } setEdge(i, Math.abs(deg - d.pitch) < 1e-6 ? null : { kind: 'pitch', pitch: deg }); });
            ep.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); ep.blur(); } });
            const li = el('li', { 'data-mp-rfedgerow': String(i) }, el('span', { className: 'bc-sub' }, t('res.rf.edge', { len: fmtLen(Math.hypot(b[0] - a[0], b[1] - a[1]), S.units) })), ' ', kind, ' ', ep);
            const hi = (on) => { S.hiEdge = on && wl.id === S.level ? [a[0], a[1], b[0], b[1]] : null; drawOverlay(); };
            li.addEventListener('mouseenter', () => hi(true)); li.addEventListener('mouseleave', () => hi(false));
            kind.addEventListener('focus', () => hi(true)); kind.addEventListener('blur', () => hi(false));
            return li;
          }));
          rows.push(el('dt', { className: 'bc-mp-wide' }, t('res.rf.walls')), el('dd', { className: 'bc-mp-wide' }, list));
        }
      }
    } else return null;
    return el('section', { className: 'bc-model-props', 'data-model-props': '' },
      el('h3', { className: 'bc-h' }, title), el('dl', { className: 'bc-dl bc-mp-dl' }, ...rows),
      el('p', { className: 'bc-sub' }, t('model.prop.note')));
  }
  /** A point just outside the roof's current low side (its one pitched edge), else its longest edge: where Shed puts the eave. */
  function shedLow(poly, kinds) {
    const n = poly.length, len = poly.map((p, i) => Math.hypot(poly[(i + 1) % n][0] - p[0], poly[(i + 1) % n][1] - p[1]));
    const p1 = kinds.filter((k) => k.kind === 'pitch').length === 1 ? kinds.findIndex((k) => k.kind === 'pitch') : len.indexOf(Math.max(...len));
    const a = poly[p1], b = poly[(p1 + 1) % n];
    return [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
  }
  /** The face's ends of a wall along it, from the joined outline of its storey's walls. */
  function faceEndsOf(wall, face) {
    if (!S.outlines.has(wall.guid) || wall.storey !== S.level) {
      const here = (S.data?.walls || snapshotModel(ed()).walls).filter((w) => w.storey === wall.storey);
      const o = wallOutlines(here.map((w) => ({ key: w.guid, a: w.a, b: w.b, t: w.t, bulge: w.bulge, off: w.joinOff })));
      const keep = S.outlines; S.outlines = o; const r = faceEnds(wall, face); S.outlines = keep; return r;
    }
    return faceEnds(wall, face);
  }
  const mergeR = (a, b) => (!a ? b : { ...b, journal: mergeJournals(a.journal, b.journal) });

  function renderProps() { if (MS.propsHost) decorate(MS.propsHost); }
  function decorate(container) {
    MS.propsHost = container;
    container.querySelector('[data-model-props]')?.remove();
    let block = null;
    try { block = propsBlock(); } catch (e) { console.error(e); }
    if (!block) return;
    const after = container.querySelector('.bc-prop-name, [data-pick-count]');
    if (after) after.after(block); else container.prepend(block);
  }

  return { renderProps, decorate };
}
