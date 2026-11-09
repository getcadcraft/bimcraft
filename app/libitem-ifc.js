/* SPDX-License-Identifier: Apache-2.0 */
/**
 * libitem-ifc.js — IFC types → library items (docs/LIBRARY-SPEC.md §2). No DOM: Node runs it.
 * Open the model WITHOUT COORDINATE_TO_ORIGIN (geometry must be in the file's own coordinates).
 *
 *   itemsFromIfc(api, modelId, { list })  → { items, notes, candidates }
 *
 * Candidates: every IfcTypeProduct with RepresentationMaps (key "type-<id>"), plus every occurrence of a
 * furnishing / proxy / distribution class that has no type, grouped by ObjectType (key "group-<n>").
 * Body = the triangulated mesh of one occurrence, taken back into the occurrence's own placement, in mm.
 * Plan = the type's 'FootPrint'/'Plan' polylines when present, else the convex hull of the mesh.
 * Params from the type's (or occurrence's) property sets; every property also goes to source_attrs as "Pset.Name".
 */
import { validateItem, convexHull, suggestCategory, LIMITS, CATEGORIES } from './libitem.js';
import { ids, val, lengthUnitMm, productTriangles, inv4, apply4 } from './ifc-util.js';

const LOOSE = ['IFCFURNISHINGELEMENT', 'IFCFURNITURE', 'IFCBUILDINGELEMENTPROXY', 'IFCFLOWTERMINAL', 'IFCSANITARYTERMINAL',
  'IFCELECTRICAPPLIANCE', 'IFCSYSTEMFURNITUREELEMENT', 'IFCDISTRIBUTIONELEMENT', 'IFCENERGYCONVERSIONDEVICE', 'IFCFLOWCONTROLLER', 'IFCDOOR', 'IFCWINDOW'];
const r4 = (v) => Math.round(v * 10000) / 10000;
const clip = (s, n = LIMITS.text) => { const t = String(s ?? '').replace(/[\u0000-\u001f\u007f]/g, ' ').trim(); return t.length > n ? t.slice(0, n) : t; };

export function itemsFromIfc(api, mid, { list = false, keys = null } = {}) {
  const notes = [];
  const mm = lengthUnitMm(api, mid);
  const typeOf = new Map(), occOfType = new Map();
  for (const rid of ids(api, mid, 'IFCRELDEFINESBYTYPE')) {
    const r = api.GetLine(mid, rid, false);
    const t = r.RelatingType?.value;
    for (const h of r.RelatedObjects || []) { typeOf.set(h.value, t); if (!occOfType.has(t)) occOfType.set(t, []); occOfType.get(t).push(h.value); }
  }
  const cands = [];
  // Types with representation maps.
  for (const t of api.GetAllTypesOfModel(mid)) {
    const name = String(t.typeName || api.GetNameFromTypeCode(t.typeID) || '').toUpperCase();
    if (!/TYPE$/.test(name) || /^IFCRELDEFINES/.test(name)) continue;
    for (const id of ids(api, mid, name)) {
      const line = api.GetLine(mid, id, false);
      if (!line.RepresentationMaps || !line.RepresentationMaps.length) continue;
      const occ = occOfType.get(id) || [];
      cands.push({ key: 'type-' + id, id, typeId: id, cls: line.constructor?.name || name, name: val(line.Name) || val(line.ElementType) || name, occ });
    }
  }
  // Occurrences without a type, grouped by ObjectType (else name without a trailing ":id").
  const groups = new Map();
  for (const n of LOOSE) {
    let list_;
    try { list_ = ids(api, mid, n); } catch (e) { continue; }
    for (const id of list_) {
      if (typeOf.has(id)) continue;
      const l = api.GetLine(mid, id, false);
      if (!l.Representation) continue;
      const label = val(l.ObjectType) || String(val(l.Name) || n).replace(/:\d+$/, '');
      const k = (l.constructor?.name || n) + '|' + label;
      if (!groups.has(k)) groups.set(k, { cls: l.constructor?.name || n, name: label, occ: [] });
      groups.get(k).occ.push(id);
    }
  }
  let g = 0;
  for (const v of groups.values()) cands.push({ key: 'group-' + ++g, id: v.occ[0], typeId: null, cls: v.cls, name: v.name, occ: v.occ });

  const candidates = cands.map((c) => ({ key: c.key, name: clip(c.name, 200), entities: 0, attrs: {}, has_body: c.occ.length > 0, ifc_class: c.cls, occurrences: c.occ.length }));
  if (list) {
    for (const c of candidates) if (!c.has_body) notes.push(c.name + ': the type is not placed anywhere in this file, so its geometry cannot be read.');   // i18n-ignore: tools/library/convert.mjs prints/writes this and loads no language file (reported)
    return { items: [], notes, candidates };
  }
  const items = [];
  for (const c of cands) {
    if (keys && !keys.includes(c.key)) continue;
    try {
      const it = itemFrom(api, mid, c, mm, notes);
      if (it) { it._key = c.key; items.push(it); }
    } catch (e) { notes.push(c.name + ': could not be read (' + (e.message || e) + ').'); }   // i18n-ignore: tools/library/convert.mjs prints/writes this and loads no language file (reported)
  }
  return { items, notes, candidates };
}

function itemFrom(api, mid, c, mm, notes) {
  const it = {
    format: 'cadcraft-library-item', format_version: 1, name: clip(c.name) || 'IFC item', kind: 'equipment', category: 'other/other',   // i18n-ignore: tools/library/convert.mjs prints/writes this and loads no language file (reported)
    description: clip('IFC ' + (c.typeId ? 'type' : 'element group') + ' ' + c.cls.replace(/^Ifc/, '') + '.'), maker: '', model: '',   // i18n-ignore: tools/library/convert.mjs prints/writes this and loads no language file (reported)
    ifc: { class: occurrenceClass(c), predefined: 'NOTDEFINED' }, plan: { layers: [{ name: 'EQUIP', color: 7 }], entities: [] },
    body: null, clearances: [], params: {}, source_attrs: {},
  };
  // Body: one occurrence's triangles, taken into its own placement.
  if (c.occ.length) {
    const occ = c.occ[0];
    const ol = api.GetLine(mid, occ, false);
    const W = ol.ObjectPlacement ? api.GetWorldTransformMatrix(mid, ol.ObjectPlacement.value) : null;
    const Wi = W ? inv4(W) : null;
    const tri = productTriangles(api, mid, occ, mm);
    // i18n-ignore: tools/library/convert.mjs prints this without a language file (log: For the owner)
    if (tri.indices.length / 3 > LIMITS.triangles) notes.push(c.name + ': ' + tri.indices.length / 3 + ' triangles, over the limit; no body.');
    else if (tri.indices.length) {
      const P = tri.positions, out = [];
      for (let i = 0; i < P.length; i += 3) {
        const [x, y, z] = Wi ? apply4(Wi, P[i], P[i + 1], P[i + 2]) : [P[i], P[i + 1], P[i + 2]];
        out.push(r4(x * mm), r4(y * mm), r4(z * mm));
      }
      it.body = { type: 'mesh', positions: out, indices: tri.indices };
      let b = [Infinity, Infinity, Infinity, -Infinity, -Infinity, -Infinity];
      for (let i = 0; i < out.length; i += 3) for (let k = 0; k < 3; k++) { b[k] = Math.min(b[k], out[i + k]); b[k + 3] = Math.max(b[k + 3], out[i + k]); }
      it.params.width = r4(b[3] - b[0]); it.params.depth = r4(b[4] - b[1]); it.params.height = r4(b[5] - b[2]);
      const fp = c.typeId ? footprint(api, mid, c.typeId, mm) : null;
      if (fp && fp.length) it.plan.entities = fp;
      else {
        const hull = convexHull(Array.from({ length: out.length / 3 }, (_, i) => [out[i * 3], out[i * 3 + 1]]));
        if (hull.length >= 3) it.plan.entities.push({ type: 'poly', layer: 'EQUIP', color: null, pts: hull, closed: true });
      }
    }
  // i18n-ignore: tools/library/convert.mjs prints this without a language file (log: For the owner)
  } else notes.push(c.name + ': the type is not placed anywhere in this file, so its geometry cannot be read; no body.');

  // Properties: the type's sets, else the first occurrence's.
  const props = {};
  const take = (pset) => {
    const setName = val(pset?.Name) || 'Properties';
    for (const p of pset?.HasProperties || []) {
      if (!p || p.NominalValue === undefined || p.NominalValue === null) continue;
      const v = val(p.NominalValue);
      if (v === null || v === '') continue;
      props[setName + '.' + val(p.Name)] = { v, type: p.NominalValue.name || '' };
    }
  };
  if (c.typeId) { const tl = api.GetLine(mid, c.typeId, true); for (const s of tl.HasPropertySets || []) take(s); }
  else if (c.occ.length) for (const rid of ids(api, mid, 'IFCRELDEFINESBYPROPERTIES')) {
    const r = api.GetLine(mid, rid, false);
    if ((r.RelatedObjects || []).some((h) => h.value === c.occ[0]) && r.RelatingPropertyDefinition) take(api.GetLine(mid, r.RelatingPropertyDefinition.value, true));
  }
  for (const [k, { v }] of Object.entries(props)) { const s = typeof v === 'boolean' ? (v ? 'Yes' : 'No') : String(v); if (s.length <= LIMITS.text) it.source_attrs[k.slice(0, 255)] = s; }
  const get = (...names) => { for (const n of names) for (const [k, p] of Object.entries(props)) if (k.toLowerCase().endsWith('.' + n.toLowerCase())) return p; return null; };
  const s = (p) => (p ? clip(String(p.v)) : '');
  it.maker = s(get('Manufacturer', 'Maker'));
  it.model = s(get('ModelReference', 'ModelLabel', 'Model'));
  for (const [k, names] of [['width', ['Width', 'NominalWidth', 'NominalLength']], ['depth', ['Depth', 'NominalDepth']], ['height', ['Height', 'NominalHeight']]]) {
    const p = get(...names);
    if (p && typeof p.v === 'number' && p.v > 0 && !it.params[k]) it.params[k] = r4(/LENGTH|POSITIVELENGTH/.test(p.type) || p.type === '' ? p.v * mm : p.v);
  }
  const elec = {};
  const volts = get('RatedVoltage', 'Volts'), amps = get('RatedCurrent', 'Amps'), kw = get('RatedPower', 'Kw'), ph = get('NumberOfPoles', 'Phase'), hz = get('NominalFrequencyRange', 'Hz');
  if (volts) elec.volts = s(volts); if (amps) elec.amps = s(amps); if (kw) elec.kw = s(kw); if (ph) elec.phase = s(ph); if (hz) elec.hz = s(hz);
  if (Object.keys(elec).length) it.params.elec = elec;
  const rem = get('Remarks', 'Notes'); if (rem) it.params.remarks = s(rem);

  if (/^IfcDoor/i.test(c.cls)) { it.kind = 'door'; it.category = 'openings/doors'; }
  else if (/^IfcWindow/i.test(c.cls)) { it.kind = 'window'; it.category = 'openings/windows'; }
  else if (/FURNITURE|FURNISHING|SYSTEMFURNITURE/i.test(c.cls)) { it.kind = 'furniture'; it.category = suggestFurniture(it.name); }
  else if (/SANITARY|FLOWTERMINAL/i.test(c.cls)) { it.kind = 'fixture'; it.category = 'plumbing/fixtures'; }
  else { const sg = suggestCategory(it.name); if (sg) it.category = sg; }
  // i18n-ignore: tools/library/convert.mjs prints this without a language file (log: For the owner)
  notes.push(it.name + ': category ' + it.category + (CATEGORIES[it.category] ? '' : '') + ' set from the IFC class and name; check it.');
  const v = validateItem(it, { partial: true });
  if (!v.ok) { notes.push(it.name + ': ' + v.errors.slice(0, 3).join('; ')); return null; }
  return it;
}

function suggestFurniture(name) {
  const t = String(name).toLowerCase();
  if (/chair|seat|sofa|bench|stool/.test(t)) return 'furniture/seating';
  if (/desk/.test(t)) return 'furniture/desks';
  if (/bed/.test(t)) return 'furniture/beds';
  if (/table/.test(t)) return 'furniture/tables';
  if (/cabinet|shelf|storage|wardrobe|dresser|bookcase/.test(t)) return 'furniture/storage';
  return 'furniture/other';
}

function occurrenceClass(c) {
  const n = String(c.cls).replace(/Type$/, '');
  if (/^IfcFurnitureType$/.test(c.cls) || /^IfcFurniture$/.test(n)) return 'IfcFurniture';
  if (/Furnishing/.test(n)) return 'IfcFurnishingElement';
  if (/^IfcSanitaryTerminal/.test(n)) return 'IfcSanitaryTerminal';
  if (/^IfcDoor(Style)?$/i.test(n)) return 'IfcDoor';
  if (/^IfcWindow(Style)?$/i.test(n)) return 'IfcWindow';
  if (/^IfcElectricAppliance/.test(n)) return 'IfcElectricAppliance';
  if (/^IfcFlowTerminal/.test(n)) return 'IfcFlowTerminal';
  return /^Ifc[A-Za-z]+$/.test(n) && /Proxy/.test(n) ? 'IfcBuildingElementProxy' : /^Ifc[A-Za-z]+$/.test(n) ? n : 'IfcBuildingElementProxy';
}

/** The type's FootPrint / Plan curves (IfcPolyline / IfcIndexedPolyCurve lines) in mm, or null. */
function footprint(api, mid, typeId, mm) {
  const tl = api.GetLine(mid, typeId, true);
  const out = [];
  for (const rm of tl.RepresentationMaps || []) {
    const rep = rm?.MappedRepresentation;
    if (!rep || !/^(FootPrint|Plan)$/i.test(val(rep.RepresentationIdentifier) || '')) continue;
    const curves = [];
    for (const item of rep.Items || []) {
      if (item?.Elements) curves.push(...item.Elements); else curves.push(item);
    }
    for (const cv of curves) {
      let pts = null;
      if (cv?.Points && Array.isArray(cv.Points)) pts = cv.Points.map((p) => (p.Coordinates || []).map((q) => Number(val(q))));
      else if (cv?.Points?.CoordList && !cv.Segments) pts = cv.Points.CoordList.map((c) => c.map((q) => Number(val(q))));
      if (!pts || pts.length < 2) continue;
      const P = pts.map((p) => [r4(p[0] * mm), r4(p[1] * mm)]);
      const closed = P.length > 2 && P[0][0] === P[P.length - 1][0] && P[0][1] === P[P.length - 1][1];
      out.push({ type: 'poly', layer: 'EQUIP', color: null, pts: closed ? P.slice(0, -1) : P, closed });
    }
  }
  return out.length ? out : null;
}
