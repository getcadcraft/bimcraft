/* SPDX-License-Identifier: Apache-2.0 */
/**
 * model-columns.js — columns placed on the plan (0.6 DF.16, session `bim-draw`: "walls and columns can be drawn along the
 * grids"). No DOM: bin/test-bimcraft.mjs --draw06 runs it in Node. Plan millimetres in the storey's own axes.
 *
 * A column is IfcColumn (IFC4 .COLUMN.) contained in its level, placed at its centre relative to the level, turned by its
 * angle; Body = its section (a rectangle, or IfcCircleProfileDef for a round one) extruded up by its height: to the level
 * above (+ TopOffset) or a fixed height. Concrete material, Pset_ColumnCommon (IsExternal false, LoadBearing true),
 * Qto_ColumnBaseQuantities (Length, CrossSectionArea, NetVolume), CadCraft_Column (Shape rect | round, Width, Depth, Angle,
 * TopLevel = GlobalId | '', TopOffset, Height). Follows level heights: syncColumns (res-follow.js calls it).
 *
 *   COLUMN_DEFAULTS, readColumns(w, storey?) → [{ id, guid, storey, at: [x, y], shape, width, depth, angle, topLevel,
 *   topOffset, height (fixed), h (used) }]
 *   placeColumns({ storey, points, shape, width, depth, angle, topLevel, topOffset, height }) → op (one undo step for all)
 *   changeColumn(guid, { at, shape, width, depth, angle, topLevel, topOffset, height }) → op · removeColumns(guids) → op
 *   syncColumns(w, storey) → n remade (their level's height changed)
 *   Errors: model.err.col.size (under 50 mm), model.err.col.height (under 300 mm).
 */
import { op } from './model-ops.js';
import { readLevels, levelAbove } from './model-levels.js';
import { ids, val } from './ifc-util.js';
import { round } from './model-write.js';

export const COLUMN_PSET = 'CadCraft_Column';
const IN = 25.4;
export const COLUMN_DEFAULTS = { shape: 'rect', width: 12 * IN, depth: 12 * IN, angle: 0, topLevel: '', topOffset: 0, height: 3000 };
const refuse = (key) => { throw Object.assign(new Error(key), { key }); };

export function readColumns(w, storey = null) {
  const out = [];
  let list = [];
  try { list = ids(w.api, w.mid, 'IFCCOLUMN'); } catch (e) { return out; }
  const so = w.storeyOf();
  const levels = readLevels(w);
  for (const id of list) {
    const ps = w.readPset(id, COLUMN_PSET);
    if (!ps) continue;
    const st = so.get(id);
    if (storey !== null && st !== storey) continue;
    const line = w.api.GetLine(w.mid, id, false);
    const lp = line.ObjectPlacement?.value;
    const M = lp ? w.relMatrix(w.api.GetLine(w.mid, st, false).ObjectPlacement.value, lp) : [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
    const c = {
      id, guid: val(line.GlobalId), storey: st, at: [M[12], M[13]], shape: ps.Shape === 'round' ? 'round' : 'rect',
      width: Number(ps.Width) * w.unitMm, depth: Number(ps.Depth) * w.unitMm, angle: Number(ps.Angle) || 0,
      topLevel: String(ps.TopLevel || ''), topOffset: (Number(ps.TopOffset) || 0) * w.unitMm, height: (Number(ps.Height) || 0) * w.unitMm,
    };
    c.h = heightOf(levels, c);
    out.push(c);
  }
  return out;
}
/** The height a column has: to its top level (+ offset), else its fixed height. */
function heightOf(levels, c) {
  const me = levels.find((l) => l.id === c.storey), top = c.topLevel ? levels.find((l) => l.guid === c.topLevel) : null;
  if (me && top && top.elevation > me.elevation) return top.elevation - me.elevation + (c.topOffset || 0);
  return c.height > 0 ? c.height : COLUMN_DEFAULTS.height;
}

/** Write a column's placement, shape, quantities and sets (a new one when c.id is null). */
function writeColumn(w, c) {
  if (!(c.width >= 50) || (c.shape !== 'round' && !(c.depth >= 50))) refuse('model.err.col.size');
  const levels = readLevels(w), h = heightOf(levels, c);
  if (!(h >= 300)) refuse('model.err.col.height');
  const st = w.api.GetLine(w.mid, c.storey, false);
  let id = c.id;
  if (!id) {
    const name = c.shape === 'round' ? 'Column, round' : 'Column';   // i18n-ignore: IFC Name (a person renames it in Properties)
    const args = [c.guid || w.guid(), w.ownerHistory(), w.L(name), null, null, w.H(w.placeAt(st.ObjectPlacement.value, c.at[0], c.at[1], 0, c.angle)), null, null];
    if (w.v4) args.push('COLUMN');
    id = w.make('IFCCOLUMN', ...args);
    w.contain(id, c.storey);
    w.associateMaterial(id, w.material('Concrete'));   // i18n-ignore: material name in the file
  } else {
    const line = w.api.GetLine(w.mid, id, false);
    w.movePlacement(line.ObjectPlacement.value, c.at[0], c.at[1], 0, c.angle);
  }
  const prof = c.shape === 'round'
    ? w.make('IFCCIRCLEPROFILEDEF', 'AREA', null, w.H(w.make('IFCAXIS2PLACEMENT2D', w.H(w.point2(0, 0)), null)), round(w.u(c.width / 2)))
    : w.profile([[-c.width / 2, -c.depth / 2], [c.width / 2, -c.depth / 2], [c.width / 2, c.depth / 2], [-c.width / 2, c.depth / 2]]);
  w.setShape(id, [w.rep('body', 'Body', 'SweptSolid', [w.extrude(prof, 0, h)])]);
  const area = c.shape === 'round' ? Math.PI * (c.width / 2) ** 2 : c.width * c.depth;
  w.upsertPset(id, 'Pset_ColumnCommon', [['IsExternal', 'IFCBOOLEAN', false], ['LoadBearing', 'IFCBOOLEAN', true]]);
  w.upsertQto(id, 'Qto_ColumnBaseQuantities', [['Length', 'length', h], ['CrossSectionArea', 'area', area], ['NetVolume', 'volume', area * h]]);
  w.upsertPset(id, COLUMN_PSET, [
    ['Shape', 'IFCLABEL', c.shape], ['Width', 'IFCLENGTHMEASURE', round(w.u(c.width))], ['Depth', 'IFCLENGTHMEASURE', round(w.u(c.shape === 'round' ? c.width : c.depth))],
    ['Angle', 'IFCREAL', round(c.angle || 0, 6)], ['TopLevel', 'IFCLABEL', c.topLevel || ''], ['TopOffset', 'IFCLENGTHMEASURE', round(w.u(c.topOffset || 0))],
    ['Height', 'IFCLENGTHMEASURE', round(w.u(c.height || h))], ['UsedHeight', 'IFCLENGTHMEASURE', round(w.u(h))],
  ]);
  return id;
}

/** A copy of a column moved by (dx, dy), inside a writer (D8.3 Copy). */
export function copyColumn(w, c, dx, dy, guid) {
  return writeColumn(w, { ...c, id: null, guid, at: [c.at[0] + dx, c.at[1] + dy] });
}

export function placeColumns(spec) {
  const s = { ...COLUMN_DEFAULTS, ...spec, points: (spec.points || []).map((p) => [p[0], p[1]]) };
  const guids = [];
  return op((w) => {
    const st = w.byGuid(s.storey);
    if (!st) refuse('model.err.nolevel');
    const made = new Map(), out = [];
    s.points.forEach((p, i) => {
      if (!guids[i]) guids[i] = val(w.guid());
      const id = writeColumn(w, { ...s, id: null, guid: guids[i], storey: st, at: p });
      made.set(guids[i], id); out.push(id);
    });
    return { id: out[0] ?? null, ids: out, made };
  });
}

export function changeColumn(guid, ch) {
  const c = { ...ch };
  return op((w) => {
    const cur = readColumns(w).find((x) => x.guid === guid);
    if (!cur) refuse('model.err.nowall');
    const id = writeColumn(w, { ...cur, ...c, id: cur.id });
    return { id, ids: [id] };
  });
}

export function removeColumns(guids) {
  return op((w) => {
    const list = guids.map((g) => w.byGuid(g)).filter(Boolean);
    if (list.length) w.dropProduct(list);
    return { id: null, ids: [] };
  });
}

/** Columns of a level (and those of the level below, whose top may follow it) whose height no longer matches: made again. */
export function syncColumns(w, storey) {
  let n = 0;
  let cols = [];
  try { cols = readColumns(w); } catch (e) { return 0; }
  for (const c of cols) {
    const used = Number(w.readPset(c.id, COLUMN_PSET)?.UsedHeight) * w.unitMm;
    if (Math.abs(used - c.h) > 0.5) { writeColumn(w, c); n++; }
  }
  void storey; void levelAbove;
  return n;
}
