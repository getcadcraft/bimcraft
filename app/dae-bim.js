/* SPDX-License-Identifier: Apache-2.0 */
/**
 * dae-bim.js — Export › Collada: the open IFC models as Collada 1.4.1 for Blender and other 3D programs, or as a Google Earth
 * .kmz placed where the model is on the earth (0.9 SU.1125, session `bim-dae-09`). DOM-free (Node tests drive it). The XML is
 * cc-collada's (collada-write.js, a copy of lib/collada written by tools/collada/sync.mjs; ModelCraft's exportDAE uses the same
 * file); this is BimCraft's thin adapter.
 *
 *   bimDae(entries, { name, matrixOf(mi), spaces, isHidden(key), geo, lift, date, progress(done, total) })
 *     → Promise<{ text, report: { elements, materials, models, storeys, triangles } }>
 *   entries = the federated models [{ mi, ifc, model, name, visible }] (as usd-bimcraft.js); matrixOf(mi) = viewer.modelMatrix.
 *   geo = daeGeo's answer + { altitudeMode, alt } (null = no location block).
 *   daeLift(entry, place) → metres from the file's level 0 up to the viewer's origin (bimDae's default lift: the first model's)
 *   daeGeo(entry, { place, lift, crs, pick }) → Promise<{ lon, lat, h, levelZero, heading, source 'map' | 'site', crs } | { error } | null>
 *     where the file's origin of the Collada scene is on WGS 84; crs = crs.js, pick = crs-pick.js (loaded by the caller).
 *   bimKmz(daeText, geo, { name, zip }) → Uint8Array   doc.kml + models/model.dae (zip = bcf.js's stored zip)
 *
 * What is written: scene › one node per model › its building › one node per storey (in elevation order; "Unplaced" for
 * elements on none) › one node per element, named as in the model (Name, else class + tag), its exact name, IFC class,
 * GlobalId and predefined type in the node's <extra>. Each element has its own <geometry>: the triangles the viewer draws
 * (per-element runs), one <triangles> per colour; colours are lambert materials (sRGB, transparency A_ONE).
 * **Coordinates:** metres, Z up, the viewer's scene turned Z up ((x, y, z) → (x, −z, y)) and lifted so z = 0 is the first model's
 * own level 0 (daeLift): the model stays near the origin across the ground, so the numbers stay small for Blender, and sits on
 * z = 0 as drawn; federated models where BimCraft shows them. The geolocation names where that origin is.
 * Spaces (IfcSpace) only when asked; hidden elements are left out unless isHidden is not given.
 */
import { xmlText, fx, ncName, nameExtra, geometryXml, instanceGeometryXml, nodeXml, documentXml, geoExtraXml, kmlModel } from './collada-write.js';
import { readGeoref, fileToMap, siteLonLat, viewerToFile } from './ifc-geo.js';
import { lengthUnitMm } from './ifc-util.js';

const D2R = Math.PI / 180;
const ID = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
const n6 = (x) => fx(Math.round(x * 1e6) / 1e6);   // micrometres: Float32 geometry carries no more
const str = (v) => (v && typeof v === 'object' && 'value' in v ? (v.value === '' || v.value === null || v.value === undefined ? null : v.value) : v ?? null);
const hexOf = (c) => [0, 1, 2].map((k) => Math.round(Math.min(1, Math.max(0, c[k])) * 255).toString(16).padStart(2, '0')).join('');

function findType(node, type) {
  if (!node) return null;
  if (String(node.type || '').toUpperCase() === type) return node;
  for (const c of node.children || []) { const f = findType(c, type); if (f) return f; }
  return null;
}

export async function bimDae(entries, { name = 'model', matrixOf = () => null, spaces = false, isHidden = null, geo = null, lift = null, date = new Date(), progress = () => {} } = {}) {
  if (lift === null) { const first = entries.find((e) => e.visible !== false); lift = first ? daeLift(first, matrixOf(first.mi) || ID) : 0; }
  const report = { elements: 0, materials: 0, models: 0, storeys: 0, triangles: 0 };
  const mats = new Map(), effects = [], materials = [];
  const material = (color) => {
    const a = Math.round((color[3] ?? 1) * 100) / 100;
    const key = hexOf(color) + (a < 1 ? '_' + Math.round(a * 100) : '');
    if (mats.has(key)) return mats.get(key);
    const i = mats.size, id = 'mat-' + i;
    effects.push({ id: 'eff-' + i, rgb: [0, 1, 2].map((k) => parseInt(key.slice(k * 2, k * 2 + 2), 16) / 255), alpha: a });
    materials.push({ id, name: 'Colour_' + key, effect: 'eff-' + i });
    mats.set(key, id);
    return id;
  };
  const geometries = [];
  const total = entries.reduce((s, e) => s + (e.visible === false ? 0 : (e.model.elements || 0) + (spaces ? e.model.spaces || 0 : 0)), 0) || 1;
  let done = 0, nodeN = 0;
  const modelNodes = [];
  for (const e of entries) {
    if (e.visible === false) continue;
    report.models++;
    const { api } = e.ifc, mid = e.model.modelID, M = e.model, keyBase = M.keyBase || 0;
    const line = (id) => { try { return api.GetLine(mid, id, false); } catch { return null; } };
    const P = matrixOf(e.mi) || ID;
    // every element's triangles, gathered from the batches it was drawn in (as usd-bimcraft.js)
    const runs = new Map();
    for (const bt of M.batches) {
      const E = bt.elems;
      for (let k = 0; k < E.ids.length; k++) {
        const key = E.ids[k];
        let r = runs.get(key);
        if (!r) runs.set(key, (r = []));
        r.push({ bt, t0: E.t0[k], tn: E.tn[k], v0: E.v0[k], vn: E.vn[k] });
      }
    }
    const byStorey = new Map();   // storey id | 'none' → element node texts
    for (const [key, parts] of runs) {
      const id = key - keyBase;
      const cls = M.classOf.get(id) || 'IfcBuildingElementProxy';
      if (cls === 'IfcSpace' && !spaces) continue;
      if (isHidden && isHidden(key)) continue;
      const ln = line(id) || {};
      const nm = str(ln.Name) || cls + (str(ln.Tag) ? ' ' + str(ln.Tag) : '');
      // positions (Z up, scene) and normals per vertex; one <triangles> per colour, consecutive runs of one colour merged
      const pos = [], nrm = [], sets = [];
      let vo = 0;
      for (const r of parts) {
        const { bt } = r, ps = bt.positions, ns = bt.normals, ix = bt.indices;
        for (let v = 0; v < r.vn; v++) {
          const s = (r.v0 + v) * 3, x = ps[s], y = ps[s + 1], z = ps[s + 2];
          pos.push(P[0] * x + P[4] * y + P[8] * z + P[12], -(P[2] * x + P[6] * y + P[10] * z + P[14]), P[1] * x + P[5] * y + P[9] * z + P[13] + lift);
          const a = ns[s], b = ns[s + 1], c = ns[s + 2];
          const wx = P[0] * a + P[4] * b + P[8] * c, wy = P[1] * a + P[5] * b + P[9] * c, wz = P[2] * a + P[6] * b + P[10] * c;
          const l = Math.hypot(wx, wy, wz) || 1;
          nrm.push(wx / l, -wz / l, wy / l);
        }
        const m = material(bt.color);
        let set = sets[sets.length - 1];
        if (!set || set.material !== m) sets.push((set = { material: m, vcount: null, p: [] }));
        for (let t = 0; t < r.tn; t++) for (let c = 0; c < 3; c++) { const vi = ix[(r.t0 + t) * 3 + c] - r.v0 + vo; set.p.push(vi, vi); }
        vo += r.vn;
        report.triangles += r.tn;
      }
      if (!vo) continue;
      const gid = 'geom-' + e.mi + '-' + id;
      geometries.push(geometryXml({ id: gid, name: nm, pos, nrm, sets, num: n6 }));
      const ifcTech = `<technique profile="IFC"><class>${xmlText(cls)}</class>` + (str(ln.GlobalId) ? `<global_id>${xmlText(str(ln.GlobalId))}</global_id>` : '') +
        (str(ln.PredefinedType) ? `<predefined_type>${xmlText(str(ln.PredefinedType))}</predefined_type>` : '') + '</technique>';
      const node = nodeXml({ id: 'el-' + e.mi + '-' + id, name: nm, body: instanceGeometryXml(gid, [...new Set(sets.map((s) => s.material))]), extra: nameExtra(nm, ifcTech) });
      const st = M.storeyOf?.get(id) ?? 'none';
      if (!byStorey.has(st)) byStorey.set(st, []);
      byStorey.get(st).push(node);
      report.elements++;
      if (++done % 200 === 0) { progress(done, total); await new Promise((r) => setTimeout(r, 0)); }
    }
    // the tree: model › building › storeys (elevation order) › elements
    const storeyNodes = [];
    for (const s of M.storeys || []) {
      const els = byStorey.get(s.id);
      if (!els) continue;
      storeyNodes.push(nodeXml({ id: 'storey-' + e.mi + '-' + s.id, name: s.name, body: els.join(''), extra: nameExtra(s.name) }));
      report.storeys++;
      byStorey.delete(s.id);
    }
    const rest = [...byStorey.values()].flat();
    if (rest.length) storeyNodes.push(nodeXml({ id: 'unplaced-' + e.mi, name: 'Unplaced', body: rest.join('') }));
    const bldLine = M.tree ? findType(M.tree, 'IFCBUILDING') : null;
    const bldName = (bldLine && str(line(bldLine.expressID)?.Name)) || 'Building';
    const building = nodeXml({ id: 'building-' + e.mi, name: bldName, body: storeyNodes.join(''), extra: nameExtra(bldName) });
    const mname = String(e.name || 'model').replace(/^.*[\\/]/, '').replace(/\.ifc$/i, '');
    modelNodes.push(nodeXml({ id: 'model-' + e.mi, name: mname, body: building, extra: nameExtra(mname) }));
  }
  progress(total, total);
  report.materials = materials.length;
  const scene = `<visual_scene id="scene" name="${xmlText(ncName(name))}">` + modelNodes.join('') + '</visual_scene>';
  const text = documentXml({ tool: 'BimCraft', date, effects, materials, geometries, scene, extra: geoExtraXml(geo) });
  return { text, report };
}

const coordination = (api, mid) => { try { const C = [...api.GetCoordinationMatrix(mid)]; return C.length === 16 ? C : ID; } catch { return ID; } };
/** Metres from the file's own level 0 up to the viewer's origin (the coordination offset moves models to the middle of their box). */
export function daeLift(ent, place = ID) {
  const { api } = ent.ifc, mid = ent.model.modelID;
  let u = 0.001;
  try { u = lengthUnitMm(api, mid) / 1000; } catch { u = 0.001; }
  const f = viewerToFile([0, 0, 0], place, coordination(api, mid), u);
  return Number.isFinite(f[2]) ? f[2] * u : 0;
}

/**
 * Where the Collada scene's origin is on the earth, for one model (the one the georeference comes from). place =
 * viewer.modelMatrix(mi). heading = degrees clockwise from true north to the scene's +Y (Google Earth's Orientation);
 * levelZero = metres from the file's own level 0 up to the scene's origin; h = the origin's height (map heights, else the
 * site's RefElevation + offset).
 */
export async function daeGeo(ent, { place = ID, lift = 0, crs = null, pick = null } = {}) {
  const { api } = ent.ifc, mid = ent.model.modelID;
  const g = readGeoref(api, mid);
  if (!g) return null;
  const C = coordination(api, mid);
  const toFile = (X, Y, Z) => viewerToFile([X, Z - lift, -Y], place, C, g.fileUnitM);   // the scene (Z up, lifted) → viewer Y up → the file
  let at, source, crsName = null;
  if (g.kind === 'map') {
    if (!crs || !pick) return { error: 'nocrs' };
    if (!crs.catalogLoaded()) await crs.loadCatalog();
    const ms = pick.modelSystem(g.crs), entry = ms ? ms.crs : null;
    if (!entry || entry.unit === 'deg') return { error: g.crs.code ? 'unknown' : 'nocode', crs: g.crs.name };
    const per = crs.METRES_PER[entry.unit] || 1, tr = crs.transformer(entry, null);
    at = (p) => { const [E, N, H] = fileToMap(g, p); const [lon, lat] = tr(E / per, N / per); return [lon, lat, H]; };
    source = 'map';
    crsName = entry.name || g.crs.name;
  } else {
    at = (p) => siteLonLat(g, p);
    source = 'site';
  }
  const f0 = toFile(0, 0, 0), o = at(f0), y = at(toFile(0, 10, 0));
  if (![...o, ...y].every(Number.isFinite)) return { error: 'math' };
  const heading = bearing(o[0], o[1], y[0], y[1]);
  return { lon: o[0], lat: o[1], h: o[2], levelZero: f0[2] * g.fileUnitM, heading, source, crs: crsName };
}

/** Degrees clockwise from north, from one point to a nearby one, on the WGS 84 ellipsoid (meridian and prime-vertical radii). */
export function bearing(lon0, lat0, lon1, lat1) {
  const A = 6378137, E2 = 0.0066943799901413165, s = Math.sin(lat0 * D2R), w = Math.sqrt(1 - E2 * s * s);
  const east = (lon1 - lon0) * D2R * (A / w) * Math.cos(lat0 * D2R), north = (lat1 - lat0) * D2R * (A * (1 - E2) / (w * w * w));
  return ((Math.atan2(east, north) / D2R) % 360 + 360) % 360;
}

/** The geo block's numbers for a height choice: 'ground' (level 0 on the terrain) | 'model' (the model's own height). */
export function geoPlace(geo, height = 'ground') {
  if (!geo || geo.error) return null;
  return height === 'model'
    ? { ...geo, altitudeMode: 'absolute', alt: geo.h }
    : { ...geo, altitudeMode: 'relativeToGround', alt: geo.levelZero };
}

const enc = new TextEncoder();
/** A Google Earth package: doc.kml (the KML Model, placed by geo) + models/model.dae. */
export function bimKmz(daeText, geo, { name = 'model', zip }) {
  const kml = kmlModel({ name, href: 'models/model.dae', lon: geo.lon, lat: geo.lat, alt: geo.alt, altitudeMode: geo.altitudeMode, heading: geo.heading });
  return zip([{ name: 'doc.kml', data: enc.encode(kml) }, { name: 'models/model.dae', data: enc.encode(daeText) }]);
}
