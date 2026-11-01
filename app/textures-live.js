/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — scene code; the words are in the language file (paint.*). */
/**
 * textures-live.js — painted library materials shown WITH their texture in the 3D view (0.8 RENDER-NEXT, session bim-model_PART_4).
 * The viewer merges geometry per storey and colour, with no UVs, so a painted brick wall showed as a flat brick colour. This adds a
 * second layer without touching viewer3d.js's batches: the render scene (render-bim.js bimScene, the same split the renderer and the glTF
 * export use) already separates the painted triangles by material; here each textured material's triangles are drawn again as an
 * overlay mesh with UVs along each face's plane, divided by the texture's real size (a brick tile is 0.9 x 0.6 m), the texture drawn by
 * code (render/textures.js, CC0). The overlay sits a hair in front (polygonOffset), takes the section cut, and follows what is shown:
 * it is made again when the viewer's visibility, model, levels or colours change. Edges stay the batches'.
 *
 *   const lt = mountLiveTextures({ viewer, paints, settings })
 *     paints()   → Map<model index, {paint, api, mid, keyBase, C}>   (paint-bim.js readPaint per model, as the export builds it)
 *     settings() → render settings (render/looks.js cleanSettings)
 *   lt.sync() · lt.later() · lt.on(bool) · lt.isOn() · lt.info() → { meshes, triangles, materials: [id] }   (tests) · lt.dispose()
 */
import * as THREE from 'three';
import { bimScene } from './render-bim.js';
import { material as libMaterial, planarUVs, onMaterialsChanged } from './render/materials.js';
import { makeTexture } from './render/textures.js';

const KEY = 'bimcraft.liveTextures';
const MAX_TRIS = 2_000_000;   // beyond this the overlay is left off and the status says so (a texture is not worth a slow view)

export function readPref() { try { return localStorage.getItem(KEY) !== 'off'; } catch (e) { return true; } }
export function writePref(on) { try { localStorage.setItem(KEY, on ? 'on' : 'off'); } catch (e) { /* this tab */ } }

export function mountLiveTextures({ viewer, paints, settings, onTooBig = () => {} }) {
  const group = new THREE.Group();
  group.name = 'cc-live-textures';
  viewer.scene.add(group);
  const texCache = new Map();    // material id -> THREE.Texture
  const uvCache = new WeakMap(); // position array -> Map(size key -> uv attribute)
  let shown = readPref(), timer = 0, last = { meshes: 0, triangles: 0, materials: [] }, busy = false;

  function textureOf(id, m) {
    let t = texCache.get(id);
    if (t) return t;
    // 0.8 EG.62: a photo material of the file carries its own decoded tile; a library material is drawn by code
    const px = m.photo ? { albedo: m.photo.pixels.data, w: m.photo.pixels.w, h: m.photo.pixels.h } : makeTexture(m.tex, 256);
    t = new THREE.DataTexture(new Uint8Array(px.albedo.buffer, px.albedo.byteOffset, px.albedo.byteLength), px.w, px.h, THREE.RGBAFormat);
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.colorSpace = THREE.SRGBColorSpace;
    t.generateMipmaps = true;
    t.minFilter = THREE.LinearMipmapLinearFilter;
    t.magFilter = THREE.LinearFilter;
    t.anisotropy = 4;
    t.needsUpdate = true;
    texCache.set(id, t);
    return t;
  }
  function uvFor(src, size) {
    const pos = src.getAttribute('position'), key = size[0] + 'x' + size[1];
    let per = uvCache.get(pos.array);
    if (!per) uvCache.set(pos.array, (per = new Map()));
    let uv = per.get(key);
    if (!uv) { uv = new THREE.Float32BufferAttribute(planarUVs(pos.array, src.getAttribute('normal').array, [0, 1, 0], size), 2); per.set(key, uv); }
    return uv;
  }
  function clear() {
    for (const m of [...group.children]) { m.geometry.dispose(); m.material.dispose(); group.remove(m); }
  }
  function sync() {
    if (busy) return;
    busy = true;
    try {
      clear();
      last = { meshes: 0, triangles: 0, materials: [] };
      if (!shown || viewer.colorMap || !viewer.layers?.size) { viewer.render(); return; }   // colour by property shows its own colours
      const sc = bimScene(viewer, settings(), null, paints());
      try {
        const mats = new Set();
        let tris = 0;
        const todo = [];
        for (const it of sc.items) {
          if (it.lines || typeof it.look !== 'string' || !it.look.startsWith('mat:')) continue;
          const id = it.look.slice(4), m = libMaterial(id);
          if (!m || !(m.tex || m.photo?.pixels)) continue;
          const n = it.geometry.index ? it.geometry.index.count : 0;
          tris += n / 3;
          todo.push([it, id, m]);
        }
        if (tris > MAX_TRIS) { onTooBig(tris); viewer.render(); return; }
        for (const [it, id, m] of todo) {
          const ts = m.photo ? m.photo.size : m.tex.size, size = Array.isArray(ts) && ts[0] > 0 && ts[1] > 0 ? ts : [1, 1];
          const g = new THREE.BufferGeometry();
          g.setAttribute('position', it.geometry.getAttribute('position'));
          g.setAttribute('normal', it.geometry.getAttribute('normal'));
          g.setAttribute('uv', uvFor(it.geometry, size));
          g.setIndex(it.geometry.index);
          const mat = new THREE.MeshLambertMaterial({ map: textureOf(id, m), side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });
          const mesh = new THREE.Mesh(g, viewer.clipped ? viewer.clipped(mat) : mat);
          mesh.matrixAutoUpdate = false;
          mesh.matrix.fromArray(it.matrix);
          mesh.matrixWorldNeedsUpdate = true;
          mesh.userData.liveTexture = id;
          mesh.raycast = () => {};   // picking stays with the batches
          group.add(mesh);
          mats.add(id);
          last.meshes++;
        }
        last.triangles = tris;
        last.materials = [...mats];
      } finally { sc.dispose(); }
    } finally { busy = false; }
    viewer.render();
  }
  const later = () => { if (timer) return; timer = setTimeout(() => { timer = 0; try { sync(); } catch (e) { console.warn('live textures:', e); } }, 30); };
  // follow the viewer without editing viewer3d.js (picture-3d.js does the same): a model, a level, a colour set or what is shown changed
  for (const name of ['setModel', 'setStoreyVisible', 'setModelMatrix', 'setModelVisible', 'removeModel', 'clear', 'applyVisibility', 'setColors']) {
    const orig = viewer[name]?.bind(viewer);
    if (!orig) continue;
    viewer[name] = (...a) => { const r = orig(...a); if (name !== 'applyVisibility' || a[0] !== false) later(); return r; };
  }
  const off = onMaterialsChanged(() => { for (const t of texCache.values()) t.dispose(); texCache.clear(); later(); });
  return {
    sync, later,
    isOn: () => shown,
    on(v) { shown = !!v; writePref(shown); sync(); },
    info: () => ({ ...last, materials: last.materials.slice() }),
    dispose() { clear(); off(); for (const t of texCache.values()) t.dispose(); texCache.clear(); viewer.scene.remove(group); },
  };
}
