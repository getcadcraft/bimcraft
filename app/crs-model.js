/* SPDX-License-Identifier: Apache-2.0 */
/**
 * crs-model.js — the coordinate system a person chose for a model, kept in the model (0.8 D8.9, session `d89_PART_3`). DOM-free.
 *
 * Plain IFC4 / IFC2X3 so other programs open it: the property set `CadCraft_CRS` on the IfcProject, properties
 *   Name (IfcLabel) · Code (IfcInteger, the EPSG number when it has one) · Unit (IfcLabel: m / ft / ftUS) · Proj4 (IfcText, the definition).
 * The file's own IfcProjectedCRS stays as it was; this set says what BimCraft should use when that one names no EPSG code
 * (a custom projection) or the wrong one. The checking and the maths are crs-pick.js (the shared library).
 *
 *   PSET
 *   readModelCrs(api, mid) → { Name, Code, Unit, Proj4 } | null        the raw record (crs-pick.fromRecord checks it)
 *   crsOp(crs | null) → op for IfcEditor.modelChange                    null takes the choice off (the set is emptied)
 */
import { ModelWriter } from './model-write.js';
import { ids, val } from './ifc-util.js';

export const PSET = 'CadCraft_CRS';

export function readModelCrs(api, mid) {
  const proj = ids(api, mid, 'IFCPROJECT')[0];
  if (proj === undefined) return null;
  for (const rid of ids(api, mid, 'IFCRELDEFINESBYPROPERTIES')) {
    const r = api.GetLine(mid, rid, false);
    if (!(r.RelatedObjects || []).some((h) => h.value === proj)) continue;
    const d = r.RelatingPropertyDefinition?.value ? api.GetLine(mid, r.RelatingPropertyDefinition.value, false) : null;
    if (!d || val(d.Name) !== PSET) continue;
    const out = {};
    for (const h of d.HasProperties || []) { const p = api.GetLine(mid, h.value, false); if (p?.Name) out[val(p.Name)] = val(p.NominalValue); }
    return out.Proj4 ? out : null;
  }
  return null;
}

/** The rows of the CadCraft_CRS set for a system (null = emptied). georef-model.js writes the same rows when it moves the georeference. */
export function crsRows(crs) {
  const code = crs && crs.code != null ? Number(crs.code) : 0;
  return crs
    ? [['Name', 'IFCLABEL', String(crs.name || '').slice(0, 255)], ['Code', 'IFCINTEGER', code], ['Unit', 'IFCLABEL', crs.unit], ['Proj4', 'IFCTEXT', crs.proj4]]
    : [['Name', 'IFCLABEL', ''], ['Code', 'IFCINTEGER', 0], ['Unit', 'IFCLABEL', ''], ['Proj4', 'IFCTEXT', '']];
}
export function crsOp(crs) {
  const rows = crsRows(crs);
  return (ed) => {
    const w = new ModelWriter(ed.W, ed.api, ed.mid);
    return w.run(() => {
      const proj = ids(w.api, w.mid, 'IFCPROJECT')[0];
      if (proj === undefined) throw new Error('no IfcProject');   // i18n-ignore: a programming error
      if (!crs && !w.defNamed(proj, PSET)) return { id: proj };
      w.upsertPset(proj, PSET, rows);
      return { id: proj };
    });
  };
}
