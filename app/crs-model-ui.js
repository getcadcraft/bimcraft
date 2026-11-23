/* SPDX-License-Identifier: Apache-2.0 */
/**
 * crs-model-ui.js: bimcraft.js's 3 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 bimcraft; no behaviour change).
 * mountCrsModel(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { t } from './i18n.js';
import { readGeoref } from './ifc-geo.js';

export function mountCrsModel(ctx) {
  const { ST, status, guard, renderChanges, cur } = ctx;

  // ---- Coordinate system of the model (0.8 D8.9, session d89_PART_3): any EPSG system, UTM zone or projection of your own, kept in the
  // model (crs-model.js: CadCraft_CRS on the IfcProject). Measure › Location, the map layers and the point clouds' placement read it. ----
  // The writing side of the georeference dialogs (georef-ui.js, georef-model.js) for one model
  function georefTools(ent) {
    const api = ent.ifc.api, mid = ent.model.modelID;
    const refresh = () => { renderChanges(); ST.geoCache = new WeakMap(); ST.bimMaps?.modelChanged(); ST.pc?.modelChanged?.(); };
    const writeGeoref = async (crs, conv, lonlat, vb, done) => {
      const [Z, GM] = await Promise.all([import('./crs-georef.js'), import('./georef-model.js')]);
      try { ent.editor.modelChange(GM.georefOp({ crs, conv, fields: Z.projectedCrsFields(crs), trueNorth: Z.trueNorth(conv, crs), lonlat }), { label: ent.name, verb: vb }); } catch (err) { status(String(err.message || err), true); return; }
      refresh();
      status(done, false, true);
    };
    const placeOnMap = async (crs, gNow, cancel) => {
      const [{ lengthUnitMm }, GU] = await Promise.all([import('./ifc-util.js'), import('./georef-ui.js')]);
      const v4 = !/^IFC2X3/i.test(api.GetModelSchema(mid));
      let placed = false;
      const dlg = await GU.openOriginDialog({ crs, fileUnitM: lengthUnitMm(api, mid) / 1000, v4, near: gNow?.kind === 'site' ? [gNow.lon, gNow.lat] : null, say: status,
        onApply: async ({ conv, lonlat, problems }) => {
          placed = true;
          GU.sendProblems(problems || []);
          await writeGeoref(crs, conv, lonlat, t('georef.origin.verb'), t(v4 ? 'georef.origin.done' : 'georef.origin.done2x3', { name: crs.name, e: conv.Eastings, n: conv.Northings }));
        } });
      dlg.addEventListener('close', () => { if (!placed) cancel?.(); });
    };
    return { refresh, writeGeoref, placeOnMap };
  }
  async function openModelCrs() {
    const ent = cur();
    if (!ent || ST.mode !== 'ifc') { status(t('geo.pick.model.none'), true); return; }
    const [{ openCrsPicker }, { readModelCrs, crsOp }, P, C, GU] = await Promise.all([import('./crs-pick-ui.js'), import('./crs-model.js'), import('./crs-pick.js'), import('./crs.js'), import('./georef-ui.js')]);
    if (!C.catalogLoaded()) await C.loadCatalog();
    const api = ent.ifc.api, mid = ent.model.modelID;
    const g = readGeoref(api, mid);
    const rec = P.fromRecord(readModelCrs(api, mid));
    const current = rec ? t('geo.pick.current', { name: rec.name + (rec.code ? ' (EPSG:' + rec.code + ')' : '') }) : g?.kind === 'map' ? t('geo.pick.current.file', { crs: g.crs.name }) : t('geo.pick.current.none');
    const verb = t('geo.pick.verb');
    const { refresh, writeGeoref, placeOnMap } = georefTools(ent);
    const apply = (crs) => {
      if (!ent.editor) return;
      try { ent.editor.modelChange(crsOp(crs), { label: ent.name, verb }); } catch (err) { status(String(err.message || err), true); return; }
      refresh();
      status(crs ? t('geo.pick.model.set', { name: crs.name }) : t('geo.pick.model.cleared'), false, true);
    };
    // 0.8 D8.9 round 3 (session d89b_PART_3): what picking a system does to the file. A model with no map conversion is offered one (item 1);
    // a model that has one chooses between "only change what Location reports" and "move the model to this system" (item 2).
    const afterPick = async (crs) => {
      if (!ent.editor) return;
      const [Z, GM] = await Promise.all([import('./crs-georef.js'), import('./georef-model.js')]);
      const gNow = readGeoref(api, mid), cv = gNow?.kind === 'map' ? GM.readConversion(api, mid) : null;
      if (gNow?.kind !== 'map') { await placeOnMap(crs, gNow, () => apply(crs)); return; }
      const ms = P.modelSystem(gNow.crs);
      if (!cv || !ms || ms.crs.unit === 'deg') { apply(crs); if (cv && !ms) GU.sendProblems([Z.problem('nofrom', 'warning', { name: crs.name })]); return; }
      if (P.sameCoordinates(ms.crs, crs)) { apply(crs); return; }
      const mv = Z.reprojectConversion(cv.conv, ms.crs, crs);
      if (mv.error) { apply(crs); GU.sendProblems([mv.error]); status(mv.error.text, true); return; }
      GU.sendProblems(mv.problems);
      await GU.openChoiceDialog({ oldName: ms.crs.name, newCrs: crs, c0: cv.conv, moved: mv, problems: mv.problems, onOnly: () => apply(crs), onMove: () => writeGeoref(crs, mv.conv, mv.after, t('georef.choice.verb'), t('georef.choice.moved', { name: crs.name })) });
    };
    await openCrsPicker({ mode: 'model', near: g?.kind === 'site' ? [g.lon, g.lat] : null, current, note: g?.kind === 'map' ? '' : t('geo.pick.nomap'), canOff: !!rec, onPick: (c) => guard(() => afterPick(c)), onOff: () => apply(null) });
  }
  // Measure › Map origin…: place a model that has no map conversion on the map (the system first, if none was chosen)
  async function openMapOrigin() {
    const ent = cur();
    if (!ent || ST.mode !== 'ifc') { status(t('geo.pick.model.none'), true); return; }
    const [{ readModelCrs }, P, C] = await Promise.all([import('./crs-model.js'), import('./crs-pick.js'), import('./crs.js')]);
    if (!C.catalogLoaded()) await C.loadCatalog();
    const api = ent.ifc.api, mid = ent.model.modelID, g = readGeoref(api, mid);
    const rec = P.fromRecord(readModelCrs(api, mid)) || (g?.kind === 'map' ? P.modelSystem(g.crs)?.crs : null);
    if (g?.kind === 'map') { status(t('georef.origin.already', { name: rec?.name || g.crs.name }), false); return; }
    if (!rec || rec.unit === 'deg') { status(t('georef.origin.pickfirst'), true); await openModelCrs(); return; }
    await georefTools(ent).placeOnMap(rec, g, null);
  }

  return { openModelCrs, openMapOrigin };
}
