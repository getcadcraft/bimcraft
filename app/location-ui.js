/* SPDX-License-Identifier: Apache-2.0 */
/**
 * location-ui.js: bimcraft.js's 4 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 bimcraft; no behaviour change).
 * mountLocation(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { crsUnitNote, getDisplayUnits, fmtCoord } from './model-units.js';
import { t } from './i18n.js';
import { readGeoref, viewerToFile, fileToMap, datumOf, siteLonLat, dms } from './ifc-geo.js';

export function mountLocation(ctx) {
  const { ST, status, entryOf, cur, settings } = ctx;

  const fx = (v, n) => (Math.round(v * 10 ** n) / 10 ** n).toFixed(n);

  const ownNote = (unitId) => { const id = crsUnitNote(getDisplayUnits(), unitId); return id ? ' (' + t(ctx.OWN_UNIT[id]) + ')' : ''; };   // GH.3-A: the CRS's own unit when it differs from the pick
  const gu = (m) => fmtCoord(m * 1000, getDisplayUnits());   // GH.3-A: a map grid value or height (metres in) in the person's display unit, with its unit
  async function locatePoint(h) {
    const ent = entryOf(h.key) || cur();
    if (!ST.geoCache.has(ent)) ST.geoCache.set(ent, readGeoref(ent.ifc.api, ent.model.modelID));
    const g = ST.geoCache.get(ent);
    if (!g) { status(t('geo.none', { file: ent.name }), true); return; }
    const C = [...ent.ifc.api.GetCoordinationMatrix(ent.model.modelID)];
    const p = viewerToFile(h.point, ST.viewer.modelMatrix(ent.mi), C, g.fileUnitM);
    const rows = [];
    let lonlat = null, sysName = '', note = '', gridRow = '';
    if (g.kind === 'map') {
      const [E, N, H] = fileToMap(g, p);
      ST.crsLib ||= await import('./crs.js');
      if (!ST.crsLib.catalogLoaded()) await ST.crsLib.loadCatalog();
      ST.pickLib ||= await import('./crs-pick.js');
      // 0.8 D8.9: the system the person chose for the model (saved in it) wins; else the EPSG code the file names
      const ms = ST.pickLib.modelSystem(g.crs);
      const crsLabel = (ms && ms.source === 'model' ? ms.crs.name : g.crs.name) + (!ms && g.crs.description && g.crs.description !== g.crs.name ? ' (' + g.crs.description + ')' : '');
      rows.push(t('geo.grid.u', { e: gu(E), n: gu(N), crs: crsLabel }) + ownNote(ms ? ms.crs.unit : (Math.abs((g.mapUnitM || 1) - 0.3048) < 1e-9 ? 'ft' : Math.abs((g.mapUnitM || 1) - 1200 / 3937) < 1e-9 ? 'ftUS' : 'm')));
      rows.push(t('geo.height.u', { h: gu(H), datum: g.crs.verticalDatum || t('geo.datum.unstated') }));
      const entry = ms ? ms.crs : null;
      if (!entry || entry.unit === 'deg') note = t(g.crs.code ? 'geo.crs.unknown' : 'geo.crs.nocode', { crs: g.crs.name });
      else {
        const per = ST.crsLib.METRES_PER[entry.unit] || 1;
        const own = settings.geoCrs === 'file', pick = own ? null : ST.pickLib.systemFor(settings.geoCrs);
        const targetGrid = pick && pick.unit !== 'deg';   // a projected system asked for: lat/long in WGS 84 and the grid of that system besides
        const target = own ? datumOf(entry.proj4) : targetGrid || settings.geoCrs === '4326' ? null : pick;
        const shiftTo = ms.entry?.shiftAccuracy;
        lonlat = ST.crsLib.transformer(entry, target)(E / per, N / per);
        sysName = own ? t('geo.sys.file', { datum: g.crs.geodeticDatum || entry.name.split(' / ')[0] }) : !target ? 'WGS 84' : (target.name || 'WGS 84');   // i18n-ignore: the system's own name
        if (!own && shiftTo) note = t('geo.shift', { m: shiftTo, datum: g.crs.geodeticDatum || entry.name.split(' / ')[0] });
        if (targetGrid) { const [te, tn] = ST.crsLib.transformer(entry, pick)(E / per, N / per); gridRow = t('geo.target.grid', { e: gu(te * (ST.crsLib.METRES_PER[pick.unit] || 1)), n: gu(tn * (ST.crsLib.METRES_PER[pick.unit] || 1)), sys: pick.name }); }
      }
      rows.push(t('geo.datum', { datum: g.crs.geodeticDatum || t('geo.datum.unstated') }));
      if (gridRow) rows.push(gridRow);
    } else {
      const [lon, lat, hh] = siteLonLat(g, p);
      lonlat = [lon, lat];
      sysName = t('geo.sys.site');
      rows.push(t('geo.height.site.u', { h: gu(hh) }));
      note = t('geo.site.note');
    }
    let label = rows[0];
    if (lonlat) {
      const [lon, lat] = lonlat;
      rows.unshift(t('geo.latlon', { lat: fx(lat, 8), lon: fx(lon, 8), sys: sysName }), dms(lat, 'lat') + ', ' + dms(lon, 'lon'));
      label = fx(lat, 6) + ', ' + fx(lon, 6);
    }
    // the bar shows three lines (lat/long, the map grid, height and datum); Copy and the tests get one line
    const lines = lonlat ? [rows[0] + ' · ' + rows[1], rows[2], rows.slice(3).join(' · ')] : [rows[0], rows.slice(1).join(' · ')];
    ST.meas.items.push({ kind: 'point', a: h.point, label, text: rows.join(' · '), lines: lines.filter(Boolean), geo: { lonlat, text: rows.join(' · ') } });
    ctx.syncMeasureBar();
    ctx.redrawMeasure();
    status(note || t('geo.done'), false, !note);
  }

  return { fx, ownNote, gu, locatePoint };
}
