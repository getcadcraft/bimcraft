/* SPDX-License-Identifier: Apache-2.0 */
/**
 * maps-bim.js — map layers on the ground of BimCraft's 3D view (0.5 SG.3, suggestion #572): the site as a map or aerial
 * picture under a georeferenced model. The shared maplayers.js (CadCraft's, copied here) draws the layers into a picture of
 * the area round the model (its drape), laid on a flat ground just under the model's lowest point.
 *
 * The "project" system is the model's own: its IfcProjectedCRS through IfcMapConversion (ifc-geo.js readGeoref), the
 * first model in the scene. A model without a map conversion cannot have map layers (the dialog says so); a picture with
 * a world file in the model's map coordinates works the same way.
 *
 *   installBimMaps({ root, attrib, viewer, models, say, busy, ask, refocus }) → { open(), modelChanged(), state() }
 *   Kept in localStorage "bimcraft.maps" { layers, internet } (this browser). Imported by bimcraft.js on first use.
 */
import * as THREE from 'three';
import { createMapLayers } from './maplayers.js';
import { byCode, crsFromEntry, loadCatalog, catalogLoaded } from './crs.js';
import { readGeoref } from './ifc-geo.js';
import { modelSystem } from './crs-pick.js';   // 0.8 D8.9: the system chosen for the model
import { M4 } from './pointcloud-three.js';
import { t } from './i18n.js';

const KEY = 'bimcraft.maps';

export async function installBimMaps({ root, attrib, viewer, models, say, busy, ask, refocus }) {
  if (!catalogLoaded()) await loadCatalog();
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch { saved = {}; }
  let geoCache = new WeakMap();
  const first = () => models()[0] || null;
  function geo() {
    const ent = first();
    if (!ent) return null;
    if (!geoCache.has(ent)) { let g = null; try { g = readGeoref(ent.ifc.api, ent.model.modelID); } catch { g = null; } geoCache.set(ent, g); }
    const g = geoCache.get(ent);
    return g?.kind === 'map' ? { ent, g } : null;
  }
  let crsKey = '', crsVal = null;
  function crs() {
    const x = geo();
    const key = x ? x.ent.name + '|' + x.g.crs.code + '|' + (x.g.crs.record?.Proj4 || '') : '';
    if (key === crsKey) return crsVal;
    crsKey = key; crsVal = null;
    try { const ms = x ? modelSystem(x.g.crs) : null; if (ms && ms.crs.unit !== 'deg') crsVal = { ...ms.crs, local: null }; } catch { crsVal = null; }
    return crsVal;
  }
  /** Map units (Z up, the map's own) → the viewer, and back. */
  function mapToViewer() {
    const x = geo(), v = viewer();
    if (!x || !v) return null;
    const C = [...x.ent.ifc.api.GetCoordinationMatrix(x.ent.model.modelID)], P = v.modelMatrix(x.ent.mi);
    return M4.mul(M4.mul(M4.mul(P, C), M4.YUP), M4.mul(M4.S(x.g.fileUnitM), M4.inv(x.g.matrix)));
  }

  let ground = null, texture = null, timer = 0;
  const ml = createMapLayers({
    root, attrib, load: () => saved, save: (s) => { saved = { ...saved, ...s }; try { localStorage.setItem(KEY, JSON.stringify(saved)); } catch { /* private window */ } },
    crs, canSetCrs: false, crsHelp: t('ml.bim.nocrs'),
    invalidate: () => schedule(), say, busy, ask, refocus,
    fit: () => viewer()?.view('top'),
  });
  ml.drape.onChange(() => schedule());

  function schedule() { clearTimeout(timer); timer = setTimeout(rebuild, 120); }
  /** The area the drape covers: the model's footprint on the map, grown by its size (at least 100 m) each way. */
  function areaBox(M) {
    const v = viewer();
    const b = v?.box;
    if (!b || b.isEmpty()) return null;
    const Mi = M4.inv(M);
    const pts = [[b.min.x, b.min.z], [b.max.x, b.min.z], [b.max.x, b.max.z], [b.min.x, b.max.z]].map(([x, z]) => M4.apply(Mi, [x, b.min.y, z]));
    const xs = pts.map((p) => p[0]), ys = pts.map((p) => p[1]);
    const unitM = geo().g.mapUnitM || 1, grow = Math.max(100 / unitM, Math.max(...xs) - Math.min(...xs), Math.max(...ys) - Math.min(...ys));
    return { minX: Math.min(...xs) - grow, minY: Math.min(...ys) - grow, maxX: Math.max(...xs) + grow, maxY: Math.max(...ys) + grow };
  }
  function clear() {
    if (ground) { ground.removeFromParent(); ground.geometry.dispose(); ground.material.dispose(); ground = null; }
    if (texture) { texture.dispose(); texture = null; }
  }
  function rebuild() {
    const v = viewer();
    if (!v) return;
    const M = crs() ? mapToViewer() : null;
    const box = M ? areaBox(M) : null;
    const r = box ? ml.drape.render(box, 2048) : null;
    if (!r) { clear(); v.render(); return; }
    // the ground: the box's corners in the viewer, just under the model
    const y = v.box.min.y - 0.02;
    const corner = (x, yy) => { const p = M4.apply(M, [x, yy, 0]); return [p[0], y, p[2]]; };
    const c = [corner(box.minX, box.minY), corner(box.maxX, box.minY), corner(box.maxX, box.maxY), corner(box.minX, box.maxY)];
    if (!ground) {
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(12), 3));
      g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), 2));
      g.setIndex([0, 1, 2, 0, 2, 3]);
      texture = new THREE.CanvasTexture(r.canvas);
      texture.colorSpace = THREE.SRGBColorSpace;
      ground = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ map: texture, transparent: true, side: THREE.DoubleSide, depthWrite: false, polygonOffset: true, polygonOffsetFactor: 4, polygonOffsetUnits: 4 }));
      ground.renderOrder = -1;
      ground.userData.mapGround = true;
      v.scene.add(ground);
    } else if (texture.image !== r.canvas) { texture.image = r.canvas; }
    const pos = ground.geometry.getAttribute('position');
    c.forEach((p, i) => pos.setXYZ(i, ...p));
    pos.needsUpdate = true;
    ground.geometry.computeBoundingSphere();
    texture.needsUpdate = true;
    v.render();
  }
  if (ml.has()) schedule();

  return {
    open: () => ml.openDialog(),
    modelChanged: () => { geoCache = new WeakMap(); crsKey = '~'; ml.crsChanged(); schedule(); },
    ml, state: () => ({ crs: crs(), ground: !!ground, box: ground ? (ground.geometry.computeBoundingBox(), ground.geometry.boundingBox.min.toArray().concat(ground.geometry.boundingBox.max.toArray())) : null, ...ml.state() }),
    mapToViewer,
  };
}
