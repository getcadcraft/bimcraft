/* SPDX-License-Identifier: Apache-2.0 */
/**
 * render-bim.js — BimCraft's adapter for the shared renderer (0.5 RC.11; render/ is a byte-identical copy of ModelCraft's,
 * tools/render/sync.mjs). BimCraft's own file: it turns what the 3D view shows into the renderer's plain scene.
 *
 *   bimSite(api, mid) → {lat, lon, north: [x, y]} | null   IfcSite's RefLatitude / RefLongitude and the context's TrueNorth
 *   bimSun(site, settings, place) → [x, y, z] | null       toward the sun in viewer space (Y up), June 21 15:00 unless the
 *                                                          render has its own date and time; no site → 40° N, 105° W
 *   bimColors(viewer) → [{key, faces, look?}]             the colours on screen (most triangles first); see-through IFC
 *                                                          colours (surface style transparency) start as glass
 *   bimScene(viewer, settings, sunDir, paints) → scene (see render/render-core.js) + dispose()
 *                                                          paints: Map<model index, {paint (paint-bim.js readPaint), api,
 *                                                          mid, keyBase, C}> — painted elements (and their sides) take
 *                                                          library materials, with UVs along each face's plane
 *
 *   bimLamps(viewer, models) → [{key, name, kind, p, dir, color, lumens, angle, size, on}]   the light fixtures (RC.11 (d)):
 *                                     IFC4 IfcLightFixture, IFC2X3 elements typed IfcLightFixtureType; a lamp just under each
 *                                     shown fixture's box, pointing down; values from its `CadCraft_Light` set, else its
 *                                     Pset_LightFixtureTypeCommon TotalWattage × 80 lm/W, else 800 lm warm white
 *   lampOp(id, patch) → op for IfcEditor.modelChange: the fixture's CadCraft_Light set (Kind, Lumens, Color, Angle, On)
 *
 * Viewer space is web-ifc's: Y up, metres, IFC (x, y, z) → (x, z, −y). Each batch mesh (one colour, merged per storey) is
 * rendered with the part of its index buffer drawn solid (ifc-vis.js puts shown elements first); hidden and see-through
 * (isolate) elements, hidden storeys and models, and rooms unless shown are left out; the section cut clips the render.
 * Colour by property is not used: the picture shows the elements' own colours.
 */
import * as THREE from 'three';
import { sunPosition } from './render/sun.js';
import { colorKey } from './render/looks.js';
import { planarUVs } from './render/materials.js';
import { paintOf, viewerToFileDir } from './paint-bim.js';
import { compound } from './ifc-geo.js';
import { ids, val } from './ifc-util.js';
import { ModelWriter } from './model-write.js';
import { SOLID } from './ifc-vis.js';

export const DEFAULT_FACE = '#e6e3dc';

export function bimSite(api, mid) {
  try {
    const siteId = ids(api, mid, 'IFCSITE')[0];
    if (siteId === undefined) return null;
    const s = api.GetLine(mid, siteId, false);
    const lat = compound(s.RefLatitude), lon = compound(s.RefLongitude);
    if (lat === null || lon === null || Math.abs(lat) > 90 || Math.abs(lon) > 180) return null;
    let north = [0, 1];
    for (const id of ids(api, mid, 'IFCGEOMETRICREPRESENTATIONCONTEXT')) {
      const c = api.GetLine(mid, id, true);
      const r = c.TrueNorth?.DirectionRatios?.map((x) => Number(val(x)));
      if (r && r.length >= 2 && Math.hypot(r[0], r[1]) > 1e-9) { const l = Math.hypot(r[0], r[1]); north = [r[0] / l, r[1] / l]; break; }
    }
    return { lat, lon, north };
  } catch { return null; }
}

/** The base date and place: the site's latitude and longitude (time zone from the longitude), else 40° N. */
export function bimSunBase(site) {
  return site
    ? { month: 6, day: 21, hour: 15, lat: site.lat, lon: site.lon, tz: Math.round(site.lon / 15) }
    : { month: 6, day: 21, hour: 15, lat: 40, lon: -105, tz: -7 };
}

export function bimSun(site, settings, place = null) {
  const base = bimSunBase(site);
  const s = sunPosition(settings && settings.sun ? { ...base, ...settings.sun } : base);
  if (!s.up) return null;
  // east / north / up → the model's IFC axes (TrueNorth turns north in the plan) → viewer (Y up)
  const n = site?.north || [0, 1], e = [n[1], -n[0]], d = s.dir;
  const m = [e[0] * d[0] + n[0] * d[1], e[1] * d[0] + n[1] * d[1], d[2]];
  let v = [m[0], m[2], -m[1]];
  if (place) v = [place[0] * v[0] + place[4] * v[1] + place[8] * v[2], place[1] * v[0] + place[5] * v[1] + place[9] * v[2], place[2] * v[0] + place[6] * v[1] + place[10] * v[2]];
  const l = Math.hypot(v[0], v[1], v[2]) || 1;
  return [v[0] / l, v[1] / l, v[2] / l];
}

const solidCount = (geo) => (geo.groups.length ? geo.groups[0].count : (geo.index ? geo.index.count : geo.getAttribute('position').count));
const shown = (o) => { for (let p = o; p; p = p.parent) if (!p.visible) return false; return true; };
const keyOf = (mesh) => colorKey('#' + (mesh.userData.color || new THREE.Color(DEFAULT_FACE)).getHexString()) || 'default';

function meshesOf(viewer) {
  const out = [];
  for (const L of viewer.layers.values()) for (const mesh of L.meshes) if (shown(mesh) && solidCount(mesh.geometry) > 0) out.push(mesh);
  return out;
}

export function bimColors(viewer) {
  const n = new Map();
  for (const mesh of meshesOf(viewer)) {
    const k = keyOf(mesh), c = n.get(k) || { key: k, faces: 0, look: undefined };
    c.faces += solidCount(mesh.geometry) / 3;
    const a = mesh.userData.batch?.color?.[3] ?? 1;
    if (a < 0.98 && !mesh.userData.space) c.look = 'glass';
    n.set(k, c);
  }
  return [...n.values()].sort((a, b) => b.faces - a.faces).map((c) => ({ key: c.key, faces: Math.round(c.faces), ...(c.look ? { look: c.look } : {}) }));
}

/**
 * A batch mesh's solid triangles grouped by the look each shows: painted elements (and sides) their library material,
 * the rest the batch colour. → [{look, index: Uint32Array}] or null when nothing in it is painted.
 */
function paintedGroups(mesh, count, baseKey, pt, axesCache) {
  if (!pt || !pt.paint.size) return null;
  const tri = mesh.userData.triIds, idx = mesh.geometry.index?.array, nor = mesh.geometry.getAttribute('normal');
  if (!tri || !idx || !nor) return null;
  let any = false;
  for (let t = 0; t < count / 3 && !any; t++) if (pt.paint.has(tri[t] - pt.keyBase)) any = true;
  if (!any) return null;
  const by = new Map();
  for (let t = 0; t < count / 3; t++) {
    const id = tri[t] - pt.keyBase, p = pt.paint.get(id);
    let look = baseKey;
    if (p) {
      const v = idx[t * 3], n = viewerToFileDir([nor.getX(v), nor.getY(v), nor.getZ(v)], pt.C);
      const m = paintOf(pt.paint, id, n, pt.api, pt.mid, axesCache);
      if (m) look = 'mat:' + m;
    }
    let a = by.get(look);
    if (!a) by.set(look, (a = []));
    a.push(idx[t * 3], idx[t * 3 + 1], idx[t * 3 + 2]);
  }
  return [...by].map(([look, a]) => ({ look, index: Uint32Array.from(a) }));
}

export function bimScene(viewer, settings, sunDir, paints = null) {
  const items = [], geos = [], looks = {};
  viewer.root.updateMatrixWorld(true);
  for (const [mi, L] of viewer.layers) {
    const pt = paints ? paints.get(mi) : null, axesCache = new Map();
    for (const mesh of L.meshes) {
      if (!shown(mesh)) continue;
      const src = mesh.geometry, count = solidCount(src);
      if (!count) continue;
      const groups = paintedGroups(mesh, count, keyOf(mesh), pt, axesCache);
      if (groups) {
        let uv = null;   // UVs along each face's plane (metres), made once per batch when a material needs them
        for (const g0 of groups) {
          const g = new THREE.BufferGeometry();
          g.setAttribute('position', src.getAttribute('position'));
          g.setAttribute('normal', src.getAttribute('normal'));
          g.setIndex(new THREE.BufferAttribute(g0.index, 1));
          if (g0.look.startsWith('mat:')) {
            uv ||= new THREE.Float32BufferAttribute(planarUVs(src.getAttribute('position').array, src.getAttribute('normal').array, [0, 1, 0]), 2);
            g.setAttribute('uv', uv);
          }
          geos.push(g);
          items.push({ geometry: g, matrix: mesh.matrixWorld.elements.slice(), look: g0.look, mi, storey: mesh.parent?.userData?.storey ?? null });
        }
        continue;
      }
      // the same buffers, only the solid part of the index (no copy of the model's geometry)
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', src.getAttribute('position'));
      g.setAttribute('normal', src.getAttribute('normal'));
      if (src.index) g.setIndex(src.index);
      g.setDrawRange(0, count);
      geos.push(g);
      const key = keyOf(mesh), a = mesh.userData.batch?.color?.[3] ?? 1;
      if (a < 0.98 && !mesh.userData.space) looks[key] = 'glass';
      items.push({ geometry: g, matrix: mesh.matrixWorld.elements.slice(), look: key, mi, storey: mesh.parent?.userData?.storey ?? null });   // mi, storey: names in glb-bim.js (0.6 DC.22)
    }
    for (const lines of L.edges) {
      if (!shown(lines)) continue;
      const src = lines.geometry, count = solidCount(src);
      if (!count) continue;
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', src.getAttribute('position'));
      if (src.index) g.setIndex(src.index);
      g.setDrawRange(0, count);
      geos.push(g);
      items.push({ geometry: g, matrix: lines.matrixWorld.elements.slice(), lines: true });
    }
  }
  const box = viewer.box;
  const bounds = box.isEmpty() ? null : { min: box.min.toArray(), max: box.max.toArray() };
  const cam = viewer.camera;
  cam.updateMatrixWorld(true);
  const clip = (viewer.clip || []).map((p) => ({ n: [-p.normal.x, -p.normal.y, -p.normal.z], d: p.constant }));
  return {
    items,
    looks,   // the colours' own looks (see-through IFC styles → glass) where the render settings choose none
    defaultColor: DEFAULT_FACE,
    up: [0, 1, 0],
    bounds,
    groundAt: bounds ? bounds.min[1] : 0,
    camera(aspect) {
      const c = cam.clone();
      if (c.isPerspectiveCamera) c.aspect = aspect;
      else if (c.isOrthographicCamera) { const h = (c.top - c.bottom) / 2, mid = (c.left + c.right) / 2; c.left = mid - h * aspect; c.right = mid + h * aspect; }
      c.updateProjectionMatrix();
      c.updateMatrixWorld(true);
      return { world: c.matrixWorld.elements.slice(), proj: c.projectionMatrix.elements.slice() };
    },
    sun: sunDir,
    clip,
    dispose() { for (const g of geos) g.dispose(); },
  };
}

// ---- lamps (0.5 RC.11 (d)) ----
export const LAMP_PSET = 'CadCraft_Light';
const KINDS = ['point', 'spot', 'area'];
function psetValues(api, mid, rels, id, name) {
  for (const d of rels.get(id) || []) {
    const ps = api.GetLine(mid, d, false);
    if (!ps || val(ps.Name) !== name) continue;
    const out = {};
    for (const h of ps.HasProperties || []) { const p = api.GetLine(mid, h.value, false); if (p?.Name) out[val(p.Name)] = val(p.NominalValue); }
    return out;
  }
  return null;
}
/** Every light fixture of one model: expressID → {name, own (CadCraft_Light | null), watts}. */
export function fixturesOf(api, mid) {
  const out = new Map(), rels = new Map(), types = new Map();
  for (const rid of ids(api, mid, 'IFCRELDEFINESBYPROPERTIES')) {
    const r = api.GetLine(mid, rid, false), d = r?.RelatingPropertyDefinition?.value;
    if (d) for (const h of r.RelatedObjects || []) { if (!rels.has(h.value)) rels.set(h.value, []); rels.get(h.value).push(d); }
  }
  const fixtureTypes = new Set();
  try { for (const id of ids(api, mid, 'IFCLIGHTFIXTURETYPE')) fixtureTypes.add(id); } catch { /* not in this schema */ }
  const typed = [];
  for (const rid of ids(api, mid, 'IFCRELDEFINESBYTYPE')) {
    const r = api.GetLine(mid, rid, false), ty = r?.RelatingType?.value;
    for (const h of r?.RelatedObjects || []) { types.set(h.value, ty); if (fixtureTypes.has(ty)) typed.push(h.value); }
  }
  let own = [];
  try { own = ids(api, mid, 'IFCLIGHTFIXTURE'); } catch { own = []; }
  for (const id of new Set([...own, ...typed])) {
    const e = api.GetLine(mid, id, false);
    if (!e) continue;
    // a type's HasPropertySets carries Pset_LightFixtureTypeCommon
    let watts = null;
    const ty = types.get(id), tl = ty ? api.GetLine(mid, ty, false) : null;
    for (const h of tl?.HasPropertySets || []) {
      const ps = api.GetLine(mid, h.value, false);
      if (val(ps?.Name) !== 'Pset_LightFixtureTypeCommon') continue;
      for (const q of ps.HasProperties || []) { const p = api.GetLine(mid, q.value, false); if (val(p?.Name) === 'TotalWattage') watts = Number(val(p.NominalValue)); }
    }
    const w2 = psetValues(api, mid, rels, id, 'Pset_LightFixtureTypeCommon');
    if (w2 && Number.isFinite(Number(w2.TotalWattage))) watts = Number(w2.TotalWattage);
    out.set(id, { name: String(val(e.Name) || val(e.ObjectType) || '#' + id), own: psetValues(api, mid, rels, id, LAMP_PSET), watts: Number.isFinite(watts) && watts > 0 ? watts : null });
  }
  return out;
}
const hexOk = (c) => (typeof c === 'string' && /^#[0-9a-f]{6}$/i.test(c) ? c.toLowerCase() : null);
const num = (x, lo, hi, d) => { const v = Number(x); return Number.isFinite(v) ? Math.min(hi, Math.max(lo, v)) : d; };
/** models: [{mi, api, mid, keyBase}] */
export function bimLamps(viewer, models) {
  const out = [];
  for (const m of models) {
    const L = viewer.layers.get(m.mi);
    if (!L || !L.group.visible) continue;
    for (const [id, f] of fixturesOf(m.api, m.mid)) {
      const key = (m.keyBase || 0) + id;
      if (viewer.vis && viewer.vis.state(key) !== SOLID) continue;
      const bb = viewer.keyBounds([key]);
      if (!bb) continue;
      const o = f.own || {}, kind = KINDS.includes(String(o.Kind).toLowerCase()) ? String(o.Kind).toLowerCase() : 'point';
      const lumens = Math.round(num(o.Lumens, 1, 200000, f.watts ? f.watts * 80 : 800));
      const w = Math.max(0.05, bb.max[0] - bb.min[0]), d = Math.max(0.05, bb.max[2] - bb.min[2]);
      out.push({
        key, name: o.Ies ? String(o.Ies).slice(0, 80) : f.name, kind, lumens, on: !(o.On === false || String(o.On).toLowerCase() === 'false'),   // 0.11 SU.1816: a fixture with an Ies name is lit by that web (bimIes)
        p: [(bb.min[0] + bb.max[0]) / 2, bb.min[1] - (kind === 'area' ? 0.005 : 0.03), (bb.min[2] + bb.max[2]) / 2], dir: [0, -1, 0],
        color: hexOk(o.Color) || '#ffe7c4', angle: Math.round(num(o.Angle, 5, 170, 60)),
        size: kind === 'area' ? [Math.min(w, 20), Math.min(d, 20)] : [0.06, 0.06],
      });
      if (out.length >= 200) return out;
    }
  }
  return out;
}
/**
 * 0.11 SU.1816: the measured light webs the model carries — the IfcProject's CadCraft_LightIes set, Webs = JSON { name: { file, text } } (LM-63 text), written by the
 * Interior lighting design add-on when it draws its luminaires (each fixture's CadCraft_Light Ies = the web's name). → the same map for the render's `settings.ies`,
 * at most `cap` webs (looks.js IES_MAX_LAMPS) of at most `maxText` characters each; a web that does not read as JSON is skipped.
 */
export function bimIes(models, { cap = 32, maxText = 262144 } = {}) {
  const out = {};
  for (const m of models) {
    let pid;
    try { pid = ids(m.api, m.mid, 'IFCPROJECT')[0]; } catch { pid = undefined; }
    if (pid === undefined || pid === null) continue;
    const rels = new Map();
    for (const rid of ids(m.api, m.mid, 'IFCRELDEFINESBYPROPERTIES')) {
      const r = m.api.GetLine(m.mid, rid, false), d = r?.RelatingPropertyDefinition?.value;
      if (d && (r.RelatedObjects || []).some((h) => h.value === pid)) { if (!rels.has(pid)) rels.set(pid, []); rels.get(pid).push(d); }
    }
    const v = psetValues(m.api, m.mid, rels, pid, 'CadCraft_LightIes');
    let webs = null;
    try { webs = v && v.Webs ? JSON.parse(String(v.Webs)) : null; } catch { webs = null; }
    for (const [name, w] of Object.entries(webs && typeof webs === 'object' ? webs : {})) {
      if (Object.keys(out).length >= cap) return out;
      if (w && typeof w.text === 'string' && w.text.length <= maxText && /^IESNA/.test(w.text)) out[String(name).slice(0, 80)] = { file: String(w.file || '').slice(0, 120), text: w.text };
    }
  }
  return out;
}
export function lampOp(id, patch) {
  const rows = [];
  if (patch.kind !== undefined && KINDS.includes(patch.kind)) rows.push(['Kind', 'IFCLABEL', patch.kind]);
  if (patch.lumens !== undefined) rows.push(['Lumens', 'IFCREAL', Math.round(num(patch.lumens, 1, 200000, 800))]);
  if (patch.color !== undefined && hexOk(patch.color)) rows.push(['Color', 'IFCLABEL', hexOk(patch.color)]);
  if (patch.angle !== undefined) rows.push(['Angle', 'IFCREAL', Math.round(num(patch.angle, 5, 170, 60))]);
  if (patch.on !== undefined) rows.push(['On', 'IFCBOOLEAN', !!patch.on]);
  return (ed) => {
    const w = new ModelWriter(ed.W, ed.api, ed.mid);
    return w.run(() => { w.upsertPset(id, LAMP_PSET, rows); return { id }; });
  };
}

