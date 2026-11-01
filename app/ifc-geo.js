/* SPDX-License-Identifier: Apache-2.0 */
/**
 * ifc-geo.js — where a point of an IFC model is on the earth (0.5 WL.4). DOM-free; the projection maths is CivilCraft's
 * crs.js (a byte-identical copy here, tools/bimcraft-test/crs-sync.mjs), loaded only when someone asks for a location.
 *
 *   readGeoref(api, mid) → how the file places itself, or null:
 *     { kind: 'map', crs: { name, code (EPSG number | null), record (the CadCraft_CRS set, crs-model.js | null), description, geodeticDatum, verticalDatum, projection, zone },
 *       matrix (file units, Z up → map units; IfcMapConversion / IfcRigidOperation via cc-ifc GetGeoReference),
 *       mapUnitM (metres per map unit: IfcProjectedCRS.MapUnit, else the project's length unit), fileUnitM }
 *     { kind: 'site', lat, lon (degrees), elev (m), origin [x, y, z] (file units), north [x, y] (unit, TrueNorth), fileUnitM }
 *       — no map conversion, but IfcSite has RefLatitude / RefLongitude: positions are then taken on the ellipsoid round
 *       the site's own point (approximate: fine across a site, not across a city)
 *   fileToMap(g, p)    → [E, N, H] in metres on the map grid (kind 'map')
 *   siteLonLat(g, p)   → [lon, lat, h] WGS 84 degrees / metres (kind 'site')
 *   epsgOf(text)       → EPSG number from 'EPSG:28356', 'EPSG 28356', 'urn:ogc:def:crs:EPSG::28356', '…/EPSG/0/28356' | null
 *   datumOf(proj4)     → the geographic system on a projected system's own datum ('+proj=longlat …' with its ellps/datum/towgs84)
 *   dms(deg, 'lat'|'lon') → '33° 51′ 35.9″ S'        compound(v) → degrees from an IfcCompoundPlaneAngleMeasure
 *
 * A model point in BimCraft's viewer is first taken back to the file's own coordinates (viewerToFile): undo the scene
 * placement, the coordination matrix (cc-ifc moves every model to the origin), Y up → Z up and metres → file units.
 */

import { ids, val, unitMm, lengthUnitMm, inv4, apply4 } from './ifc-util.js';
import { readModelCrs } from './crs-model.js';
import { readConversion, convMatrix, mapUnitMOf } from './georef-model.js';   // 0.8 D8.9: IFC2X3's ePSet_MapConversion   // 0.8 D8.9: the system the person chose, kept in the model

const A = 6378137, F = 1 / 298.257223563, E2 = F * (2 - F);   // WGS 84

/** EPSG number named by a CRS name, or null. */
export function epsgOf(text) {
  const s = String(text ?? '').trim();
  const m = /(?:^|EPSG\D{0,8}?)(\d{4,6})$/i.exec(s) || /EPSG(?::{1,2}|\s+|\/0\/|\/)(\d{4,6})\b/i.exec(s);
  if (!m) return null;
  if (!/epsg/i.test(s) && !/^\d{4,6}$/.test(s)) return null;
  return Number(m[1]);
}

/** IfcCompoundPlaneAngleMeasure [deg, min, sec, millionths of a second] (all the same sign) → degrees. */
export function compound(v) {
  const a = (Array.isArray(v) ? v : []).map((x) => Number(val(x)) || 0);
  if (!a.length) return null;
  return a[0] + (a[1] || 0) / 60 + ((a[2] || 0) + (a[3] || 0) / 1e6) / 3600;
}

/** How the file places itself on the earth (see the header), or null. */
export function readGeoref(api, mid) {
  const fileUnitM = lengthUnitMm(api, mid) / 1000;
  let geo = null;
  try { geo = api.GetGeoReference?.(mid) || null; } catch (e) { geo = null; }
  if (geo && geo.crs) {
    let mapUnitM = fileUnitM;   // IFC: a projected CRS without MapUnit uses the project's length unit
    const crsId = ids(api, mid, 'IFCPROJECTEDCRS')[0];
    if (crsId !== undefined) {
      const c = api.GetLine(mid, crsId, true);
      if (c.MapUnit) { const mm = unitMm(c.MapUnit); if (Number.isFinite(mm) && mm > 0) mapUnitM = mm / 1000; }
    }
    // IfcMapConversion's Scale is the unit difference between the model and the map, so heights take it too: cc-ifc's
    // matrix does that itself since the 0.5 final sweep (geo-ctx.js georef; BimCraft corrected it here before).
    const matrix = [...geo.matrix];
    return { kind: 'map', crs: { ...geo.crs, code: epsgOf(geo.crs.name) ?? epsgOf(geo.crs.description), record: readModelCrs(api, mid) }, matrix, mapUnitM, fileUnitM };
  }
  if (!geo) {   // 0.8 D8.9: IFC2X3 has no IfcMapConversion; the standard's property sets on the IfcProject say the same
    const pc = readConversion(api, mid);
    if (pc && pc.kind === 'pset') {
      const f = pc.fields, name = val(f.Name) ?? null;
      return { kind: 'map', crs: { name, description: val(f.Description) ?? null, geodeticDatum: val(f.GeodeticDatum) ?? null, verticalDatum: null, projection: val(f.MapProjection) ?? null, zone: val(f.MapZone) ?? null,
        code: epsgOf(name) ?? epsgOf(val(f.Description)), record: readModelCrs(api, mid) }, matrix: convMatrix(pc.conv), mapUnitM: mapUnitMOf(val(f.MapUnit)), fileUnitM };
    }
  }
  const siteId = ids(api, mid, 'IFCSITE')[0];
  if (siteId === undefined) return null;
  const s = api.GetLine(mid, siteId, false);
  const lat = compound(s.RefLatitude), lon = compound(s.RefLongitude);
  if (lat === null || lon === null || Math.abs(lat) > 90 || Math.abs(lon) > 180) return null;
  const elev = (Number(val(s.RefElevation)) || 0) * fileUnitM;
  let origin = [0, 0, 0];
  try { if (s.ObjectPlacement && api.GetWorldTransformMatrix) { const M = api.GetWorldTransformMatrix(mid, s.ObjectPlacement.value); origin = [M[12], M[13], M[14]]; } } catch (e) { /* the file's origin */ }
  let north = [0, 1];
  for (const id of ids(api, mid, 'IFCGEOMETRICREPRESENTATIONCONTEXT')) {
    const c = api.GetLine(mid, id, true);
    const r = c.TrueNorth?.DirectionRatios?.map((x) => Number(val(x)));
    if (r && r.length >= 2 && Math.hypot(r[0], r[1]) > 1e-9) { const l = Math.hypot(r[0], r[1]); north = [r[0] / l, r[1] / l]; break; }
  }
  return { kind: 'site', lat, lon, elev, origin, north, fileUnitM };
}

/** A file point (file units, Z up) → [E, N, H] metres on the map grid. */
export function fileToMap(g, p) {
  const q = apply4(g.matrix, p[0], p[1], p[2]);
  return [q[0] * g.mapUnitM, q[1] * g.mapUnitM, q[2] * g.mapUnitM];
}

/** A file point → [lon, lat, h] on WGS 84 from the site's reference point (east / north along TrueNorth, up). */
export function siteLonLat(g, p) {
  const u = g.fileUnitM, d = [(p[0] - g.origin[0]) * u, (p[1] - g.origin[1]) * u, (p[2] - g.origin[2]) * u];
  const [nx, ny] = g.north, east = d[0] * ny - d[1] * nx, north = d[0] * nx + d[1] * ny;
  const phi = g.lat * Math.PI / 180, w = Math.sqrt(1 - E2 * Math.sin(phi) ** 2);
  const N = A / w, M = A * (1 - E2) / w ** 3;
  return [g.lon + (east / ((N + g.elev) * Math.cos(phi))) * 180 / Math.PI, g.lat + (north / (M + g.elev)) * 180 / Math.PI, g.elev + d[2]];
}

/** The geographic system on a projected system's own datum: its ellipsoid / datum / shift, no projection. */
export function datumOf(proj4) {
  const keep = String(proj4 || '').split(/\s+/).filter((p) => /^\+(datum|ellps|towgs84|nadgrids|a|b|rf|f)=/.test(p));
  return '+proj=longlat ' + (keep.length ? keep.join(' ') : '+datum=WGS84') + ' +no_defs';
}

/** Degrees → degrees, minutes, seconds with the hemisphere letter. */
export function dms(deg, axis) {
  const h = axis === 'lat' ? (deg < 0 ? 'S' : 'N') : (deg < 0 ? 'W' : 'E');   // i18n-ignore: compass letters as on maps
  let a = Math.abs(deg), d = Math.floor(a), m = Math.floor((a - d) * 60), s = (a - d - m / 60) * 3600;
  if (s >= 59.995) { s = 0; m += 1; }
  if (m >= 60) { m = 0; d += 1; }
  return d + '° ' + String(m).padStart(2, '0') + '′ ' + s.toFixed(2).padStart(5, '0') + '″ ' + h;
}

/**
 * A point in BimCraft's viewer (scene space, metres, Y up) → the file's own coordinates (file units, Z up).
 * `place` = the model's scene placement (viewer.modelMatrix), `C` = its coordination matrix (api.GetCoordinationMatrix).
 */
export function viewerToFile(p, place, C, fileUnitM) {
  const local = apply4(inv4(place), p[0], p[1], p[2]), y = apply4(inv4(C), local[0], local[1], local[2]);   // Y up, metres, where the file has it
  return [y[0] / fileUnitM, -y[2] / fileUnitM, y[1] / fileUnitM];
}
