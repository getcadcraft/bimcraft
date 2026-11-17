/* SPDX-License-Identifier: Apache-2.0 */
/**
 * model-curtain.js — curtain systems (session bk-tools-b-10): a glazed wall of panels between mullions on a grid, drawn like a
 * wall or laid on a face (By Face). No DOM: bin/test-bimcraft.mjs --tools-b runs it in Node. The layout (which panes and which
 * mullion pieces a grid makes, their sizes) is curtain/layout.js (lib/curtain, shared); this file is the IFC.
 *
 * A system lies in a plane: a FRAME { o, x, y, n } in model mm (workplane/plane.js), with its outline and its grid lines in that
 * plane's coordinates (u along x, v along y). Drawn like a wall: x runs along the line, y is up, the outline is the rectangle
 * 0,0 → length,height. By Face: the frame and the outline are the face's.
 *
 * IFC: IfcCurtainWall (IFC4 NOTDEFINED) contained in its level, no shape of its own, aggregating (IfcRelAggregates)
 *   IfcPlate   (IFC4 CURTAIN_PANEL) per pane: 'Body' / 'SweptSolid', the pane's outline pushed through the panel thickness, centred
 *              on the plane; material Glass; Qto_PlateBaseQuantities Width (thickness), Perimeter, GrossArea (grid line to grid
 *              line), NetArea (the pane made, between mullions), NetVolume
 *   IfcMember  (IFC4 MULLION) per mullion piece: 'Body' / 'SweptSolid', an IfcRectangleProfileDef (width on the face x depth) run
 *              along the piece, centred on the plane; material Aluminium; Qto_MemberBaseQuantities Length, CrossSectionArea,
 *              NetVolume; Pset_MemberCommon Span
 *   on the IfcCurtainWall: Pset_CurtainWallCommon (IsExternal), Qto_CurtainWallQuantities (Length, Height, Width, GrossSideArea,
 *              NetSideArea) and CadCraft_CurtainSystem: Source (line | face), Host (the GlobalId of the element whose face it
 *              lies on), the frame (OriginX/Y/Z, AxisX/Y/Z, NormalX/Y/Z), Outline (JSON, mm), GridU / GridV ("at:mullion;…", mm
 *              from the frame's origin), SpacingU / SpacingV (0 = lines set one by one), Border, MullionWidth, MullionDepth,
 *              PanelThickness, Panels, Mullions, MullionLength.
 *
 *   CURTAIN_DEFAULTS, MULLION_PROFILES [{ key, width, depth }]
 *   wallCurtain({ a, b, z, height }) → { frame, outline }      the frame and rectangle of a system drawn from a to b (model mm)
 *   readCurtains(w) → [{ id, guid, storey, source, host, frame, outline, linesU, linesV, spacingU, spacingV, border, mullion,
 *                        panel, parts: [ids], plates: [ids], members: [ids], totals }]
 *   placeCurtain(spec) → op   changeCurtain(guid, ch) → op   removeCurtains(guids) → op   moveCurtain(guid, d: [dx, dy, dz]) → op
 *   gridChange(guid, { dir 'u' | 'v', add | move: [i, at] | remove: i | spacing | lines }) → op
 *   mullionChange(guid, { dir 'u' | 'v' | 'border' | 'all', line?: i, on, width?, depth? }) → op
 *   Errors (only when there is nothing to make): model.err.cw.outline (no area), model.err.cw.none, model.err.cw.line (no such
 *   grid line), model.err.nolevel
 */
import { op } from './model-ops.js';
import { ids, val } from './ifc-util.js';
import { round } from './model-write.js';
import { t as tr } from './i18n.js';
import { fromPlane, linePlane, polyArea, frame as makeFrame } from './workplane/plane.js';
import { layoutCurtain, cleanLines, linesAtSpacing, addLine, moveLine, removeLine, setMullions, linesText, parseLines } from './curtain/layout.js';
import { frameRows, frameFrom, localOf } from './model-workplane.js';

export const CURTAIN_PSET = 'CadCraft_CurtainSystem';
export const MULLION_PROFILES = [{ key: '50x150', width: 50, depth: 150 }, { key: '65x150', width: 65, depth: 150 }, { key: '50x100', width: 50, depth: 100 }, { key: '80x200', width: 80, depth: 200 }];
export const CURTAIN_DEFAULTS = { spacingU: 1500, spacingV: 0, border: true, mullions: true, mullion: { width: 50, depth: 150 }, panel: { thickness: 25 }, height: 3000 };
const refuse = (key) => { throw Object.assign(new Error(key), { key }); };

export function wallCurtain({ a, b, z = 0, height }) {
  const F = linePlane(a, b, z);
  if (!F) return null;
  const L = Math.hypot(b[0] - a[0], b[1] - a[1]);
  return { frame: F, outline: [[0, 0], [L, 0], [L, height], [0, height]] };
}

function kids(w, id) {
  for (const rid of ids(w.api, w.mid, 'IFCRELAGGREGATES')) { const r = w.api.GetLine(w.mid, rid, false); if (r.RelatingObject?.value === id) return (r.RelatedObjects || []).map((h) => h.value); }
  return [];
}
export function readCurtains(w) {
  const out = [];
  let list = [];
  try { list = ids(w.api, w.mid, 'IFCCURTAINWALL'); } catch (e) { return out; }
  const so = w.storeyOf();
  let plates = null;
  for (const id of list) {
    const ps = w.readPset(id, CURTAIN_PSET), F = frameFrom(w, ps);
    if (!F) continue;
    let outline = [];
    try { outline = JSON.parse(String(ps.Outline || '[]')).map((p) => [Number(p[0]), Number(p[1])]).filter((p) => p.every(Number.isFinite)); } catch (e) { outline = []; }
    if (outline.length < 3) continue;
    const mm = (v) => (Number(v) || 0) * w.unitMm, parts = kids(w, id);
    if (!plates) plates = new Set(ids(w.api, w.mid, 'IFCPLATE'));
    const c = {
      id, guid: val(w.api.GetLine(w.mid, id, false).GlobalId), storey: so.get(id) ?? null, source: ps.Source === 'face' ? 'face' : 'line', host: ps.Host && ps.Host !== '-' ? String(ps.Host) : '',
      frame: F, outline, linesU: parseLines(ps.GridU), linesV: parseLines(ps.GridV), spacingU: mm(ps.SpacingU), spacingV: mm(ps.SpacingV), border: ps.Border === true || String(ps.Border) === 'true',
      mullion: { width: mm(ps.MullionWidth), depth: mm(ps.MullionDepth) }, panel: { thickness: mm(ps.PanelThickness) },
      parts, plates: parts.filter((p) => plates.has(p)), members: parts.filter((p) => !plates.has(p)),
    };
    c.totals = layoutCurtain(c).totals;
    out.push(c);
  }
  return out;
}

/** The system's parts again (panes and mullion pieces), its sets and quantities. */
function writeCurtain(w, c) {
  const L = layoutCurtain(c);
  if (L.error) refuse('model.err.cw.outline');
  if (!L.panels.length && !L.mullions.length) refuse('model.err.cw.none');
  const old = kids(w, c.id);
  if (old.length) w.dropProduct(old);
  const st = w.api.GetLine(w.mid, c.storey, false), lp = st.ObjectPlacement.value, F = c.frame, Lc = localOf(w, c.storey);
  const n = Lc.D(F.n), x = Lc.D(F.x), y = Lc.D(F.y);
  const glass = w.material(tr('curtain.mat.glass')), alu = w.material(tr('curtain.mat.aluminium'));
  const glassStyle = w.surfaceStyle('Glass (CadCraft curtain system)', [0.62, 0.8, 0.9], 0.6), aluStyle = w.surfaceStyle('Aluminium (CadCraft curtain system)', [0.56, 0.58, 0.6], 0);   // i18n-ignore: style names kept in the IFC
  const T = c.panel.thickness, MW = c.mullion.width, MD = c.mullion.depth;
  const made = [];
  for (const p of L.panels) {
    const name = w.L(tr('curtain.panel'));
    const id = w.make('IFCPLATE', w.guid(), w.ownerHistory(), name, null, null, w.H(w.placeAt(lp, 0, 0, 0, 0)), null, null, ...(w.v4 ? ['CURTAIN_PANEL'] : []));
    const solid = w.extrudeAt(w.profile(p.glass), w.axisFrame(Lc.P(fromPlane(F, 0, 0, -T / 2)), n, x), T);
    w.styleItem(solid, glassStyle);
    w.setShape(id, [w.rep('body', 'Body', 'SweptSolid', [solid])]);
    w.associateMaterial(id, glass);
    w.upsertQto(id, 'Qto_PlateBaseQuantities', [['Width', 'length', T], ['Perimeter', 'length', p.perimeter], ['GrossArea', 'area', p.gross], ['NetArea', 'area', p.net], ['NetVolume', 'volume', p.net * T]]);
    made.push(id);
  }
  for (const m of L.mullions) {
    const name = w.L(tr('curtain.mullion'));
    const id = w.make('IFCMEMBER', w.guid(), w.ownerHistory(), name, null, null, w.H(w.placeAt(lp, 0, 0, 0, 0)), null, null, ...(w.v4 ? ['MULLION'] : []));
    const du = (m.b[0] - m.a[0]) / m.length, dv = (m.b[1] - m.a[1]) / m.length;
    const along = [x[0] * du + y[0] * dv, x[1] * du + y[1] * dv, x[2] * du + y[2] * dv], across = [-x[0] * dv + y[0] * du, -x[1] * dv + y[1] * du, -x[2] * dv + y[2] * du];
    const prof = w.make('IFCRECTANGLEPROFILEDEF', 'AREA', null, w.H(w.make('IFCAXIS2PLACEMENT2D', w.H(w.point2(0, 0)), null)), round(w.u(MW)), round(w.u(MD)));
    const solid = w.extrudeAt(prof, w.axisFrame(Lc.P(fromPlane(F, m.a[0], m.a[1], 0)), along, across), m.length);
    w.styleItem(solid, aluStyle);
    w.setShape(id, [w.rep('body', 'Body', 'SweptSolid', [solid])]);
    w.associateMaterial(id, alu);
    w.upsertPset(id, 'Pset_MemberCommon', [['Span', 'IFCPOSITIVELENGTHMEASURE', round(w.u(m.length))], ['IsExternal', 'IFCBOOLEAN', true]]);
    w.upsertQto(id, 'Qto_MemberBaseQuantities', [['Length', 'length', m.length], ['CrossSectionArea', 'area', MW * MD], ['NetVolume', 'volume', MW * MD * m.length]]);
    made.push(id);
  }
  if (made.length) w.make('IFCRELAGGREGATES', w.guid(), w.ownerHistory(), null, null, w.H(c.id), made.map((k) => w.H(k)));
  const tt = L.totals, Lm = (k, v) => [k, 'IFCLENGTHMEASURE', round(w.u(v || 0))];
  w.upsertPset(c.id, 'Pset_CurtainWallCommon', [['IsExternal', 'IFCBOOLEAN', true]]);
  w.upsertQto(c.id, 'Qto_CurtainWallQuantities', [['Length', 'length', tt.uMax - tt.uMin], ['Height', 'length', tt.vMax - tt.vMin], ['Width', 'length', Math.max(T, L.mullions.length ? MD : 0)], ['GrossSideArea', 'area', tt.area], ['NetSideArea', 'area', tt.net]]);
  w.upsertPset(c.id, CURTAIN_PSET, [['Source', 'IFCLABEL', c.source === 'face' ? 'face' : 'line'], ['Host', 'IFCLABEL', c.host || '-'], ...frameRows(w, F),
    ['Outline', 'IFCTEXT', JSON.stringify(L.outline.map((p) => [round(p[0], 3), round(p[1], 3)]))], ['GridU', 'IFCTEXT', linesText(L.linesU) || '-'], ['GridV', 'IFCTEXT', linesText(L.linesV) || '-'],
    Lm('SpacingU', c.spacingU), Lm('SpacingV', c.spacingV), ['Border', 'IFCBOOLEAN', !!c.border], Lm('MullionWidth', MW), Lm('MullionDepth', MD), Lm('PanelThickness', T),
    ['Panels', 'IFCINTEGER', tt.panels], ['Mullions', 'IFCINTEGER', tt.mullions], Lm('MullionLength', tt.mullionLength)]);
  return L;
}

/** A spec made whole: the grid from its spacings when no lines were given. */
function whole(spec) {
  const s = { ...CURTAIN_DEFAULTS, ...spec, mullion: { ...CURTAIN_DEFAULTS.mullion, ...(spec.mullion || {}) }, panel: { ...CURTAIN_DEFAULTS.panel, ...(spec.panel || {}) } };
  s.outline = (spec.outline || []).map((p) => [Number(p[0]), Number(p[1])]);
  if (s.outline.length >= 3 && polyArea(s.outline) < 0) s.outline.reverse();
  const us = s.outline.map((p) => p[0]), vs = s.outline.map((p) => p[1]);
  const on = s.mullions !== false;
  s.linesU = spec.linesU ? cleanLines(spec.linesU, Math.min(...us), Math.max(...us)) : linesAtSpacing(Math.min(...us), Math.max(...us), s.spacingU, on);
  s.linesV = spec.linesV ? cleanLines(spec.linesV, Math.min(...vs), Math.max(...vs)) : linesAtSpacing(Math.min(...vs), Math.max(...vs), s.spacingV, on);
  if (!on && spec.border === undefined) s.border = false;
  return s;
}
export function placeCurtain(spec) {
  const s0 = { ...spec };
  return op((w) => {
    const storey = w.byGuid(s0.storey);
    if (!storey) refuse('model.err.nolevel');
    const F = s0.frame && makeFrame(s0.frame.o, s0.frame.n, s0.frame.x);
    if (!F || (s0.outline || []).length < 3) refuse('model.err.cw.outline');
    const s = whole(s0);
    const st = w.api.GetLine(w.mid, storey, false), g = w.gid(s0.guid); s0.guid = g;
    const id = w.make('IFCCURTAINWALL', g, w.ownerHistory(), w.L(tr('curtain.system')), null, null, w.H(w.placeAt(st.ObjectPlacement.value, 0, 0, 0, 0)), null, null, ...(w.v4 ? ['NOTDEFINED'] : []));
    w.noteGuid(g, id);
    w.contain(id, storey);
    writeCurtain(w, { ...s, id, storey, frame: F });
    return { id, ids: [id], made: new Map([[g, id]]), guid: g };
  });
}
const find = (w, guid) => { const c = readCurtains(w).find((x) => x.guid === guid); if (!c) refuse('model.err.cw.gone'); return c; };
export function changeCurtain(guid, ch) {
  const c0 = { ...ch };
  return op((w) => {
    const c = find(w, guid), n = { ...c, ...c0, mullion: { ...c.mullion, ...(c0.mullion || {}) }, panel: { ...c.panel, ...(c0.panel || {}) } };
    if (c0.frame) n.frame = makeFrame(c0.frame.o, c0.frame.n, c0.frame.x);
    writeCurtain(w, n);
    return { id: c.id, ids: [c.id] };
  });
}
export function moveCurtain(guid, d) {
  return op((w) => { const c = find(w, guid); writeCurtain(w, { ...c, frame: { ...c.frame, o: [c.frame.o[0] + d[0], c.frame.o[1] + d[1], c.frame.o[2] + (d[2] || 0)] } }); return { id: c.id, ids: [c.id] }; });
}
export function gridChange(guid, g) {
  const q = { ...g };
  return op((w) => {
    const c = find(w, guid), key = q.dir === 'v' ? 'linesV' : 'linesU', sp = q.dir === 'v' ? 'spacingV' : 'spacingU';
    const ax = c.outline.map((p) => p[q.dir === 'v' ? 1 : 0]), lo = Math.min(...ax), hi = Math.max(...ax);
    let lines = c[key];
    const n = { ...c };
    if (q.spacing !== undefined) { lines = linesAtSpacing(lo, hi, q.spacing, q.m !== false); n[sp] = q.spacing > 0 ? q.spacing : 0; }
    else {
      if (q.lines) lines = q.lines;
      else if (q.add !== undefined) lines = addLine(lines, q.add, q.m !== false);
      else if (q.move) { if (!lines[q.move[0]]) refuse('model.err.cw.line'); lines = moveLine(lines, q.move[0], q.move[1]); }
      else if (q.remove !== undefined) { if (!lines[q.remove]) refuse('model.err.cw.line'); lines = removeLine(lines, q.remove); }
      n[sp] = 0;   // set one by one now: no longer "every so much"
    }
    n[key] = cleanLines(lines, lo, hi);
    writeCurtain(w, n);
    return { id: c.id, ids: [c.id] };
  });
}
export function mullionChange(guid, m) {
  const q = { ...m };
  return op((w) => {
    const c = find(w, guid), n = { ...c, mullion: { ...c.mullion } };
    if (q.width > 0) n.mullion.width = q.width;
    if (q.depth > 0) n.mullion.depth = q.depth;
    if (q.on !== undefined) {
      const one = Number.isInteger(q.line) ? q.line : null;
      if (one !== null && q.dir !== 'border' && q.dir !== 'all' && !c[q.dir === 'v' ? 'linesV' : 'linesU'][one]) refuse('model.err.cw.line');
      if (q.dir === 'u' || q.dir === 'all') n.linesU = setMullions(c.linesU, q.on, q.dir === 'all' ? null : one);
      if (q.dir === 'v' || q.dir === 'all') n.linesV = setMullions(c.linesV, q.on, q.dir === 'all' ? null : one);
      if (q.dir === 'border' || q.dir === 'all') n.border = !!q.on;
    }
    writeCurtain(w, n);
    return { id: c.id, ids: [c.id] };
  });
}
export function removeCurtains(guids) {
  return op((w) => {
    const list = readCurtains(w).filter((c) => guids.includes(c.guid)).flatMap((c) => [c.id, ...c.parts]);
    if (list.length) w.dropProduct(list);
    return { id: null, ids: [] };
  });
}
