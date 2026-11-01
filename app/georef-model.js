/* SPDX-License-Identifier: Apache-2.0 */
/**
 * georef-model.js — write a model's place on the map into the IFC (0.8 D8.9 items 1 and 2, session `d89b_PART_3`). DOM-free.
 * The maths (conversion numbers, reprojecting a conversion, what IfcProjectedCRS says) is crs-georef.js (shared); this file only writes.
 *
 *   IFC4 / IFC4X3: IfcProjectedCRS (Name "EPSG:n", Description, GeodeticDatum, MapProjection, MapZone, MapUnit) + IfcMapConversion from the model's
 *     geometric representation context to it; the context's TrueNorth follows. Made when the file has none, rewritten in place when it has.
 *   IFC2X3 has neither entity. The standard allows the georeference there as the buildingSMART property sets ePSet_MapConversion and ePSet_ProjectedCRS
 *     on the IfcProject (same attributes), plus IfcSite.RefLatitude / RefLongitude / RefElevation and the context's TrueNorth: all four are written.
 *   Both: the CadCraft_CRS set (crs-model.js) says the same system, so Location and the map layers follow it. Element coordinates never change.
 *
 *   readConversion(api, mid) → { kind: 'ifc4' | 'pset', conv, fields: {Name, Description, …} } | null
 *   georefOp({ crs, conv, fields, trueNorth, lonlat }) → op for IfcEditor.modelChange (one undo step)
 */
import { ModelWriter } from './model-write.js';
import { ids, val, unitMm } from './ifc-util.js';
import { PSET, crsRows } from './crs-model.js';

/** model units → map units, column-major (the same as cc-ifc's georef; crs-georef.js conversionMatrix is the shared twin). */
export function convMatrix(c) {
  let ax = c.XAxisAbscissa ?? 1, ay = c.XAxisOrdinate ?? 0;
  const l = Math.hypot(ax, ay) || 1; ax /= l; ay /= l;
  const s = c.Scale ?? 1;
  return [ax * s, ay * s, 0, 0, -ay * s, ax * s, 0, 0, 0, 0, s, 0, c.Eastings, c.Northings, c.OrthogonalHeight, 1];
}
/** metres per map unit from the label ePSet_ProjectedCRS.MapUnit carries. */
export const mapUnitMOf = (label) => (/us\s*survey/i.test(label) ? 1200 / 3937 : /^(foot|feet|ft)$/i.test(String(label || '').trim()) ? 0.3048 : 1);
export const PSET_CONV = 'ePSet_MapConversion', PSET_CRS = 'ePSet_ProjectedCRS';
const CONV_KEYS = ['Eastings', 'Northings', 'OrthogonalHeight', 'XAxisAbscissa', 'XAxisOrdinate', 'Scale'];

export function readConversion(api, mid) {
  const proj = ids(api, mid, 'IFCPROJECT')[0];
  let g = null;
  try { g = api.GetGeoReference?.(mid) || null; } catch (e) { g = null; }
  if (g && g.kind === 'map-conversion') {
    return { kind: 'ifc4', conv: { Eastings: g.eastings, Northings: g.northings, OrthogonalHeight: g.height, XAxisAbscissa: g.xAxis[0], XAxisOrdinate: g.xAxis[1], Scale: g.scale }, fields: g.crs || {} };
  }
  if (proj === undefined) return null;
  const w = new ModelWriter({}, api, mid);
  const c = w.readPset?.(proj, PSET_CONV);
  if (!c || !CONV_KEYS.every((k) => Number.isFinite(Number(c[k])))) return null;
  const f = w.readPset(proj, PSET_CRS) || {};
  return { kind: 'pset', conv: Object.fromEntries(CONV_KEYS.map((k) => [k, Number(c[k])])), fields: f };
}

/** The line of a length unit worth `metres` per unit, found or made. */
function mapUnit(w, unit) {
  const want = { m: 1000, ft: 304.8, ftUS: 1200 / 3937 * 1000 }[unit] || 1000;
  for (const cls of ['IFCSIUNIT', 'IFCCONVERSIONBASEDUNIT']) {
    for (const id of ids(w.api, w.mid, cls)) {
      const u = w.api.GetLine(w.mid, id, true);
      if (val(u.UnitType) !== 'LENGTHUNIT') continue;
      const mm = unitMm(u);
      if (Math.abs(mm - want) < 1e-9 * want) return id;
    }
  }
  const derived = { type: w.W.UNKNOWN, value: null, derived: true };
  let si = null;
  for (const id of ids(w.api, w.mid, 'IFCSIUNIT')) { const u = w.api.GetLine(w.mid, id, true); if (val(u.UnitType) === 'LENGTHUNIT' && !val(u.Prefix) && unitMm(u) === 1000) si = id; }
  si ??= w.make('IFCSIUNIT', derived, w.E('LENGTHUNIT'), null, w.E('METRE'));
  if (unit === 'm') return si;
  const dim = w.make('IFCDIMENSIONALEXPONENTS', 1, 0, 0, 0, 0, 0, 0);
  const mwu = w.make('IFCMEASUREWITHUNIT', w.T('IFCLENGTHMEASURE', want / 1000), w.H(si));
  return w.make('IFCCONVERSIONBASEDUNIT', w.H(dim), w.E('LENGTHUNIT'), w.L(unit === 'ft' ? 'foot' : 'US survey foot'), w.H(mwu));
}
const ident = (w, s) => (s === null || s === undefined || s === '' ? null : w.T('IFCIDENTIFIER', String(s).slice(0, 255)));
const compound = (deg) => {
  const sgn = deg < 0 ? -1 : 1; let a = Math.abs(deg);
  const d = Math.floor(a); a = (a - d) * 60; const m = Math.floor(a); a = (a - m) * 60; const s = Math.floor(a); const ms = Math.round((a - s) * 1e6);
  return [sgn * d, sgn * m, sgn * s, sgn * ms];
};
const MAPUNIT_WORD = { m: 'METRE', ft: 'FOOT', ftUS: 'US SURVEY FOOT' };

export function georefOp({ crs, conv, fields, trueNorth = null, lonlat = null }) {
  return (ed) => {
    const w = new ModelWriter(ed.W, ed.api, ed.mid);
    return w.run(() => {
      const proj = ids(w.api, w.mid, 'IFCPROJECT')[0];
      if (proj === undefined) throw new Error('no IfcProject');   // i18n-ignore: a programming error
      const ctx = w.contexts().model;
      if (w.v4) {
        const unitId = mapUnit(w, fields.unit);
        const crsRowsArgs = [w.L(fields.Name), w.X(fields.Description), ident(w, fields.GeodeticDatum), null, ident(w, fields.MapProjection), ident(w, fields.MapZone), w.H(unitId)];
        let crsId = ids(w.api, w.mid, 'IFCPROJECTEDCRS')[0];
        if (crsId === undefined) crsId = w.make('IFCPROJECTEDCRS', ...crsRowsArgs);
        else {
          const c = w.touch(crsId);
          c.Name = crsRowsArgs[0]; c.Description = crsRowsArgs[1]; c.GeodeticDatum = crsRowsArgs[2]; c.MapProjection = crsRowsArgs[4]; c.MapZone = crsRowsArgs[5]; c.MapUnit = crsRowsArgs[6];
          w.write(c);
        }
        const mc = ids(w.api, w.mid, 'IFCMAPCONVERSION')[0];
        if (mc === undefined) w.make('IFCMAPCONVERSION', w.H(ctx), w.H(crsId), conv.Eastings, conv.Northings, conv.OrthogonalHeight, conv.XAxisAbscissa, conv.XAxisOrdinate, conv.Scale);
        else {
          const m = w.touch(mc);
          Object.assign(m, { TargetCRS: w.H(crsId), Eastings: conv.Eastings, Northings: conv.Northings, OrthogonalHeight: conv.OrthogonalHeight, XAxisAbscissa: conv.XAxisAbscissa, XAxisOrdinate: conv.XAxisOrdinate, Scale: conv.Scale });
          w.write(m);
        }
      } else {
        w.upsertPset(proj, PSET_CONV, [['Eastings', 'IFCLENGTHMEASURE', conv.Eastings], ['Northings', 'IFCLENGTHMEASURE', conv.Northings], ['OrthogonalHeight', 'IFCLENGTHMEASURE', conv.OrthogonalHeight],
          ['XAxisAbscissa', 'IFCREAL', conv.XAxisAbscissa], ['XAxisOrdinate', 'IFCREAL', conv.XAxisOrdinate], ['Scale', 'IFCREAL', conv.Scale]]);
        w.upsertPset(proj, PSET_CRS, [['Name', 'IFCLABEL', fields.Name], ['Description', 'IFCTEXT', fields.Description], ['GeodeticDatum', 'IFCIDENTIFIER', fields.GeodeticDatum],
          ['MapProjection', 'IFCIDENTIFIER', fields.MapProjection], ['MapZone', 'IFCIDENTIFIER', fields.MapZone], ['MapUnit', 'IFCLABEL', MAPUNIT_WORD[fields.unit] || 'METRE']]);
        const site = ids(w.api, w.mid, 'IFCSITE')[0];
        if (site !== undefined && lonlat) {
          const s = w.touch(site);
          s.RefLatitude = compound(lonlat[1]); s.RefLongitude = compound(lonlat[0]);
          w.write(s);
        }
      }
      if (trueNorth) { const c = w.touch(ctx); c.TrueNorth = w.H(w.dir(trueNorth[0], trueNorth[1])); w.write(c); }
      w.upsertPset(proj, PSET, crsRows(crs));
      return { id: proj };
    });
  };
}
