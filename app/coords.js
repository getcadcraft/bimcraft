/* SPDX-License-Identifier: Apache-2.0 */
/**
 * coords.js — where am I working (0.6 DF.15, session `bim-draw`): the project origin, the site's survey point, the level a
 * height is on and the text of a coordinate readout. DOM-free: bin/test-bimcraft.mjs --coords runs it in Node.
 *
 *   readMarkers(api, mid) → { unitMm, origin: [0, 0, 0], survey: { at: [x, y, z] (file mm, Z up), lat, lon, elev (m) |
 *                             null, map: [E, N, H] (m) | null } | null, georef (ifc-geo.js readGeoref) | null, same }
 *       origin = the file's own 0, 0, 0 (every coordinate in the model is measured from it); survey = the IfcSite's
 *       placement origin — the point its RefLatitude / RefLongitude / RefElevation describe — with its map grid
 *       coordinates when the file has a map conversion. `same`: the two are within 1 mm (one marker).
 *   levelFor(levels, zMm) → the level a height is on (the highest whose floor is at or below it; the lowest when below
 *                           them all) | null       levels = model-levels.js readLevels rows (elevation mm, Z up)
 *   mapText(georef, eM, nM) → { e, n, unit }        map grid values in the map's own unit (m, ft, US ft), 3 decimals
 *   readout({ x, y, z?, level, map }, fmt, t) → [lines]   the readout's lines (fmt = model-units.js fmtLen with the units)
 *   planToFile(M, p) / fileToPlan(M, q)              a storey's plan (its own X / Y, mm) ↔ file mm, M = ModelWriter.storeyWorld
 *   fileToViewer(p, place, C, fileUnitM)            file units (Z up) → BimCraft's viewer (metres, Y up); the inverse of
 *                                                    ifc-geo.js viewerToFile
 */
import { ids, val, lengthUnitMm, inv4, apply4 } from './ifc-util.js';
import { readGeoref, fileToMap, compound } from './ifc-geo.js';
import { coordNumber, unitMark, crsUnitNote } from './model-units.js';   // GH.3-A: map coordinates follow the display unit

export function readMarkers(api, mid) {
  const unitMm = lengthUnitMm(api, mid);
  let georef = null;
  try { georef = readGeoref(api, mid); } catch (e) { georef = null; }
  let survey = null;
  const siteId = ids(api, mid, 'IFCSITE')[0];
  if (siteId !== undefined) {
    const s = api.GetLine(mid, siteId, false);
    let at = [0, 0, 0];
    try { if (s.ObjectPlacement && api.GetWorldTransformMatrix) { const M = api.GetWorldTransformMatrix(mid, s.ObjectPlacement.value); at = [M[12] * unitMm, M[13] * unitMm, M[14] * unitMm]; } } catch (e) { /* at the file's origin */ }
    const lat = compound(s.RefLatitude), lon = compound(s.RefLongitude);
    const geo = lat !== null && lon !== null && Math.abs(lat) <= 90 && Math.abs(lon) <= 180;
    const elev = s.RefElevation !== null && s.RefElevation !== undefined ? (Number(val(s.RefElevation)) || 0) * unitMm / 1000 : null;
    const map = georef?.kind === 'map' ? fileToMap(georef, at.map((v) => v / unitMm)) : null;
    survey = { at, lat: geo ? lat : null, lon: geo ? lon : null, elev, map };
  }
  const same = !survey || Math.hypot(...survey.at) < 1;
  return { unitMm, origin: [0, 0, 0], survey, georef, same };
}

export function levelFor(levels, zMm) {
  if (!levels?.length || !Number.isFinite(zMm)) return null;
  let best = null;
  for (const l of levels) if (l.elevation <= zMm + 1 && (!best || l.elevation > best.elevation)) best = l;
  return best || levels.reduce((a, b) => (b.elevation < a.elevation ? b : a));
}

const FT = 0.3048, USFT = 1200 / 3937;
export function mapText(georef, eM, nM, units = null) {
  if (units) {   // GH.3-A: the person's display unit (eM, nM in metres, as fileToMap gives them); the map's own text is kept in `own`
    const own = mapText(georef, eM, nM), M = 1000;   // eM, nM are metres (fileToMap)
    return { e: coordNumber(eM * M, units), n: coordNumber(nM * M, units), unit: unitMark(units === 'ftin' ? 'ftdec' : units), own, note: crsUnitNote(units, own.unit) };   // note: the CRS's own unit id when it differs ('ft', 'us-ft', 'm')
  }
  const u = georef?.mapUnitM || 1;
  const unit = Math.abs(u - FT) < 1e-9 ? 'ft' : Math.abs(u - USFT) < 1e-9 ? 'US ft' : 'm';   // the two feet differ by 2 ppm   // i18n-ignore: unit symbols
  const k = unit === 'm' ? 1 : u;
  const f = (v) => (v / k).toLocaleString('en-US', { minimumFractionDigits: 3, maximumFractionDigits: 3 }).replace(/,/g, ' ');
  return { e: f(eM), n: f(nM), unit };
}

/**
 * The lines of a readout. p = { x, y (mm from the project origin), z (mm, or null in the plan), level ({ name, elevation }),
 * map ({ e, n, unit } | null) }. The 3D view gives z; the line under the level then says how high above its floor.
 */
export function readout(p, fmt, t) {
  const lines = [];
  if (p.level) lines.push(Number.isFinite(p.z) ? t('coords.level.at', { level: p.level.name, h: fmt(p.z - p.level.elevation) }) : p.level.name);
  if (Number.isFinite(p.x)) lines.push(t('coords.xy', { x: fmt(p.x), y: fmt(p.y) }) + (Number.isFinite(p.z) ? '  ' + t('coords.z', { z: fmt(p.z) }) : ''));
  if (p.map) lines.push(t('coords.map', { e: p.map.e, n: p.map.n, unit: p.map.unit }));
  return lines;
}

export function planToFile(M, p) { return apply4(M, p[0], p[1], 0); }
export function fileToPlan(M, q) { const r = apply4(inv4(M), q[0], q[1], q[2] || 0); return [r[0], r[1]]; }

export function fileToViewer(p, place, C, fileUnitM) {
  const m = [p[0] * fileUnitM, p[2] * fileUnitM, -p[1] * fileUnitM];   // Z up → Y up, metres, where the file has it
  const c = apply4(C, m[0], m[1], m[2]);
  return apply4(place, c[0], c[1], c[2]);
}
