/* SPDX-License-Identifier: Apache-2.0 */
/**
 * report-as-core.js — "Report as": an element keeps the drawing tool it was made with (its geometry and editing) but is reported as
 * another IFC class and predefined type (0.9 D8.12-C, session `bim-views-09`): a slab drawn as a road, a wall as a panel, a roof as
 * a ramp. No DOM and no op (ifc-edit.js imports it; report-as.js has the op and the Properties field). node bin/test-bimcraft.mjs
 * --views09 --only c.
 *
 * In the file, as other programs read it: the element IS the reported class. On every save (IfcEditor.save → withReportedClasses)
 * each element with a CadCraft_ReportAs set is written as Class with PredefinedType (USERDEFINED takes ObjectType = the name), under
 * the same express ID (as 0.4 B11 swaps a class), so every relation still points at it; then it is put back at once. On opening
 * (IfcEditor → restoreDrawnClasses) an element whose class is its reported one and whose DrawnAs differs is turned back into the
 * drawing tool's class in memory, so BimCraft's tools find it again. The set: CadCraft_ReportAs on the element —
 *   Class (IfcLabel, 'IfcCovering'), PredefinedType (IfcLabel, 'FLOORING' | '' ), Name (IfcLabel, for USERDEFINED),
 *   DrawnAs (IfcLabel, the tool's class 'IfcSlab'), DrawnType (IfcLabel, its own predefined type 'FLOOR' | ''), DrawnObjectType (its own
 *   ObjectType, given back when a USERDEFINED name had replaced it).
 *
 *   TARGETS  { IfcSlab: { group, v4: [types] | null (no predefined type), x3: [types] | null | false (not in IFC2X3), x3attr } … }
 *   groupOf(drawnClass) → 'horizontal' | 'vertical' | 'linear' | 'any'
 *   classesFor(drawnClass, schema) → [{ cls, types: [..] }]   the classes that fit the shape, in the file's schema (searchable list)
 *   readReportAs(api, mid) → Map(expressID → { cls, type, name, drawnAs, drawnType })
 *   withReportedClasses(W, api, mid, fn) → fn()'s result, with the reported classes in place while it runs
 *   restoreDrawnClasses(W, api, mid) → n (elements turned back to their drawing tool's class)
 */
import { ids, replaceLine, retypeLine } from './ifc-util.js';

export const REPORT_PSET = 'CadCraft_ReportAs';
const U = ['USERDEFINED', 'NOTDEFINED'];
/** Classes an element can be reported as. v4 / x3: the predefined types in IFC4 / IFC2X3 (null = the class has none; false = not in the schema). */
export const TARGETS = Object.freeze({
  IfcSlab: { groups: ['horizontal'], v4: ['FLOOR', 'ROOF', 'LANDING', 'BASESLAB', ...U], x3: ['FLOOR', 'ROOF', 'LANDING', 'BASESLAB', ...U], x3attr: 'PredefinedType' },
  IfcCovering: { groups: ['horizontal', 'vertical'], v4: ['FLOORING', 'CEILING', 'ROOFING', 'CLADDING', 'INSULATION', 'MEMBRANE', 'SKIRTINGBOARD', 'MOLDING', ...U], x3: ['FLOORING', 'CEILING', 'ROOFING', 'CLADDING', 'INSULATION', 'MEMBRANE', ...U], x3attr: 'PredefinedType' },
  IfcRoof: { groups: ['horizontal'], v4: ['FLAT_ROOF', 'SHED_ROOF', 'GABLE_ROOF', 'HIP_ROOF', 'FREEFORM', ...U], x3: ['FLAT_ROOF', 'SHED_ROOF', 'GABLE_ROOF', 'HIP_ROOF', 'FREEFORM', ...U], x3attr: 'ShapeType' },
  IfcRamp: { groups: ['horizontal'], v4: ['STRAIGHT_RUN_RAMP', 'TWO_STRAIGHT_RUN_RAMP', 'QUARTER_TURN_RAMP', 'HALF_TURN_RAMP', 'SPIRAL_RAMP', ...U], x3: ['STRAIGHT_RUN_RAMP', 'TWO_STRAIGHT_RUN_RAMP', 'QUARTER_TURN_RAMP', 'HALF_TURN_RAMP', 'SPIRAL_RAMP', ...U], x3attr: 'ShapeType' },
  IfcPlate: { groups: ['horizontal', 'vertical'], v4: ['CURTAIN_PANEL', 'SHEET', ...U], x3: null },
  IfcFurniture: { groups: ['horizontal', 'vertical'], v4: ['SHELF', 'TABLE', 'DESK', 'BED', 'CHAIR', 'FILECABINET', 'SOFA', ...U], x3: false },
  IfcFurnishingElement: { groups: ['horizontal', 'vertical'], v4: false, x3: null },
  IfcCivilElement: { groups: ['horizontal', 'linear'], v4: null, x3: false },
  IfcGeographicElement: { groups: ['horizontal'], v4: ['TERRAIN', ...U], x3: false },
  IfcWall: { groups: ['vertical'], v4: ['STANDARD', 'PARTITIONING', 'PARAPET', 'SHEAR', 'SOLIDWALL', 'MOVABLE', 'PLUMBINGWALL', ...U], x3: null },
  IfcCurtainWall: { groups: ['vertical'], v4: U, x3: null },
  IfcRailing: { groups: ['vertical', 'linear'], v4: ['GUARDRAIL', 'HANDRAIL', 'BALUSTRADE', ...U], x3: ['GUARDRAIL', 'HANDRAIL', 'BALUSTRADE', ...U], x3attr: 'PredefinedType' },
  IfcColumn: { groups: ['linear', 'vertical'], v4: ['COLUMN', 'PILASTER', ...U], x3: null },
  IfcBeam: { groups: ['linear', 'horizontal'], v4: ['BEAM', 'JOIST', 'LINTEL', 'SPANDREL', 'HOLLOWCORE', 'T_BEAM', ...U], x3: null },
  IfcMember: { groups: ['linear', 'vertical', 'horizontal'], v4: ['MEMBER', 'BRACE', 'CHORD', 'MULLION', 'POST', 'PURLIN', 'RAFTER', 'STRINGER', 'STRUT', 'STUD', 'PLATE', ...U], x3: null },
  IfcBuildingElementProxy: { groups: ['any'], v4: ['ELEMENT', 'COMPLEX', 'PARTIAL', 'PROVISIONSPACE', 'PROVISIONFORVOID', ...U], x3: null, x3attr: 'CompositionType' },
});
const GROUP_OF = {
  IfcSlab: 'horizontal', IfcSlabStandardCase: 'horizontal', IfcCovering: 'horizontal', IfcRoof: 'horizontal', IfcRamp: 'horizontal', IfcRampFlight: 'horizontal', IfcPlate: 'vertical',
  IfcWall: 'vertical', IfcWallStandardCase: 'vertical', IfcWallElementedCase: 'vertical', IfcCurtainWall: 'vertical', IfcRailing: 'vertical',
  IfcColumn: 'linear', IfcColumnStandardCase: 'linear', IfcBeam: 'linear', IfcBeamStandardCase: 'linear', IfcMember: 'linear', IfcMemberStandardCase: 'linear',
};
export const groupOf = (cls) => GROUP_OF[cls] || 'any';
const isV4 = (schema) => !/^IFC2X3/i.test(String(schema || 'IFC4'));
export function classesFor(drawn, schema) {
  const g = groupOf(drawn), v4 = isV4(schema), out = [];
  for (const [cls, t] of Object.entries(TARGETS)) {
    const types = v4 ? t.v4 : t.x3;
    if (types === false) continue;
    if (g !== 'any' && !t.groups.includes(g) && !t.groups.includes('any')) continue;
    out.push({ cls, types: types || [] });
  }
  return out;
}
/** The drawing tools' classes "Report as" can take (the same attribute layout as the targets: doors, windows, stairs and spaces cannot). */
export const canReport = (cls) => !!(TARGETS[cls] || TARGETS[String(cls || '').replace(/(StandardCase|ElementedCase)$/, '')]);
export const targetOk = (cls, type, schema) => {
  const t = TARGETS[cls];
  if (!t) return false;
  const types = isV4(schema) ? t.v4 : t.x3;
  if (types === false) return false;
  return !type ? true : Array.isArray(types) && types.includes(type);
};

const name = (l) => String(l?.constructor?.name || '');
const plain = (v) => (v && typeof v === 'object' && 'value' in v ? v.value : v);
export function readReportAs(api, mid) {
  const out = new Map(), seen = new Map();
  let rels = [];
  try { rels = ids(api, mid, 'IFCRELDEFINESBYPROPERTIES'); } catch (e) { return out; }
  for (const rid of rels) {
    const r = api.GetLine(mid, rid, false);
    const d = r?.RelatingPropertyDefinition?.value;
    if (!d) continue;
    if (!seen.has(d)) {
      const ps = api.GetLine(mid, d, false);
      let v = null;
      if (ps && plain(ps.Name) === REPORT_PSET) {
        v = {};
        for (const h of ps.HasProperties || []) { const p = api.GetLine(mid, h.value, false); if (p?.Name) v[plain(p.Name)] = plain(p.NominalValue) ?? ''; }
      }
      seen.set(d, v);
    }
    const v = seen.get(d);
    if (!v || !v.Class || !TARGETS[v.Class]) continue;
    for (const h of r.RelatedObjects || []) out.set(h.value, { cls: v.Class, type: String(v.PredefinedType || ''), name: String(v.Name || ''), drawnAs: String(v.DrawnAs || ''), drawnType: String(v.DrawnType || ''), drawnObjType: String(v.DrawnObjectType || '') });
  }
  return out;
}

/** The element written as another class under its express ID: the shared attributes carried over, the class's own last ones set. */
function lineAs(W, api, mid, line, cls, type, objType, v4) {
  const t = TARGETS[cls] || TARGETS[String(cls).replace(/(StandardCase|ElementedCase)$/, '')] || null;   // IfcWallStandardCase has IfcWall's attributes
  const enumOf = (v) => (v ? { type: 3, value: v } : null);
  const head = [plain(line.GlobalId), line.OwnerHistory, line.Name ?? null, line.Description ?? null, objType !== undefined ? objType : (line.ObjectType ?? null), line.ObjectPlacement ?? null, line.Representation ?? null, retypeLine(api, mid, { Tag: line.Tag ?? null }).Tag];
  let extra = [];
  if (t) {
    const types = v4 ? t.v4 : t.x3;
    if (Array.isArray(types)) extra = [enumOf(type || 'NOTDEFINED')];
    else if (!v4 && t.x3attr === 'CompositionType') extra = [null];
  }
  const e = api.CreateIfcEntity(mid, api.GetTypeCodeFromName(cls.toUpperCase()), ...head, ...extra);
  e.expressID = line.expressID;
  return e;
}
const TEXT = (W, api, mid, s) => (s ? api.CreateIfcType(mid, api.GetTypeCodeFromName('IFCLABEL'), String(s).slice(0, 255)) : null);

export function withReportedClasses(W, api, mid, fn, onSwapped = null) {
  let map;
  try { map = readReportAs(api, mid); } catch (e) { map = new Map(); }
  if (!map.size) return fn();
  const v4 = isV4(api.GetModelSchema?.(mid));
  const kept = [];
  for (const [id, r] of map) {
    const line = api.GetLine(mid, id, false);
    if (!line || name(line).toUpperCase() === r.cls.toUpperCase() || !targetOk(r.cls, r.type, v4 ? 'IFC4' : 'IFC2X3')) continue;
    try {
      const objType = r.type === 'USERDEFINED' && r.name ? TEXT(W, api, mid, r.name) : undefined;
      replaceLine(api, mid, lineAs(W, api, mid, line, r.cls, r.type, objType, v4));
      kept.push(line);
    } catch (e) { /* a class this engine cannot write stays as drawn */ }
  }
  if (kept.length) onSwapped?.();
  try { return fn(); } finally { for (const line of kept.reverse()) replaceLine(api, mid, retypeLine(api, mid, line)); }
}

export function restoreDrawnClasses(W, api, mid) {
  let map;
  try { map = readReportAs(api, mid); } catch (e) { return 0; }
  let n = 0;
  for (const [id, r] of map) {
    const line = api.GetLine(mid, id, false);
    if (!line || !r.drawnAs || name(line).toUpperCase() !== r.cls.toUpperCase() || r.drawnAs.toUpperCase() === r.cls.toUpperCase()) continue;
    try {
      const v4 = isV4(api.GetModelSchema?.(mid));
      const e = lineAs(W, api, mid, line, r.drawnAs, r.drawnType, r.type === 'USERDEFINED' ? TEXT(W, api, mid, r.drawnObjType) : undefined, v4);
      replaceLine(api, mid, e);
      n++;
    } catch (e) { /* left as the reported class */ }
  }
  return n;
}
