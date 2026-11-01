/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — scene code; the words are in the language file (pic.*). */
/**
 * picture-3d.js — pictures as textured planes in the 3D view (0.8 D8.8 round 3, session d88b_PART_3), in the existing three.js scene (no new
 * library). A level picture lies on its level's plane, a vertical-plane picture stands over its section line (picture.js corners3d, level-local mm,
 * Z up); `toScene(storey)` (picture-ui.js) takes those millimetres to the scene (metres, Y up) the same way links-ui.js does.
 * Transparency: every picture is a transparent, double-sided plane that tests depth but NEVER writes it (so a picture can't hide the model or
 * another picture), drawn after the opaque model (renderOrder). three.js sorts transparent objects back to front by their position, so each
 * mesh sits at its own centre (its corners are relative to it) and overlapping pictures sort by distance. A picture off screen is culled by its
 * bounding sphere. A level's plane would z-fight with its floor: polygonOffset pulls the picture towards the camera a little.
 *
 *   const p3 = mount3d({ viewer, list, toScene, visible })
 *     list()         → [{ guid, storey (expressID), bmp (ImageBitmap), len, pic (picture), }]    what to draw
 *     toScene(sid)   → column-major 4x4 | null      level-local mm → scene
 *     visible(sid)   → boolean                       the level is shown
 *   p3.sync() draws again · p3.info() → [{ guid, centre, corners (scene), opacity, vertical, storey }] (tests) · p3.on(bool) · p3.dispose()
 */
import * as THREE from 'three';
import { corners3d } from './picture.js';
import { apply4 } from './ifc-util.js';

export function mount3d({ viewer, list, toScene, visible }) {
  const group = new THREE.Group();
  group.name = 'cc-pictures';
  viewer.scene.add(group);
  const tex = new Map();   // guid → { len, texture }
  let shown = true, timer = 0, last = [];

  function textureOf(item) {
    const c = tex.get(item.guid);
    if (c && c.len === item.len && c.bmp === item.bmp) return c.texture;
    c?.texture.dispose();
    const t = new THREE.Texture(item.bmp);
    t.flipY = false;                       // an ImageBitmap's top row is v = 0
    t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = 4;
    t.needsUpdate = true;
    tex.set(item.guid, { len: item.len, bmp: item.bmp, texture: t });
    return t;
  }
  function clearMeshes() {
    for (const m of [...group.children]) { m.geometry.dispose(); m.material.dispose(); group.remove(m); }
  }
  function sync() {
    clearMeshes();
    last = [];
    const items = list();
    const live = new Set(items.map((i) => i.guid));
    for (const [g, c] of tex) if (!live.has(g)) { c.texture.dispose(); tex.delete(g); }
    if (!shown) { viewer.render(); return; }
    for (const it of items) {
      const p = it.pic;
      if (p.hidden || !it.bmp || !visible(it.storey)) continue;
      const M = toScene(it.storey);
      if (!M) continue;
      const pts = corners3d(p).map(([x, y, z]) => apply4(M, x, y, z));
      const c = [0, 1, 2].map((i) => (pts[0][i] + pts[1][i] + pts[2][i] + pts[3][i]) / 4);
      const pos = new Float32Array(12);
      pts.forEach((q, i) => { pos[i * 3] = q[0] - c[0]; pos[i * 3 + 1] = q[1] - c[1]; pos[i * 3 + 2] = q[2] - c[2]; });
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      geo.setAttribute('uv', new THREE.BufferAttribute(new Float32Array([0, 1, 1, 1, 1, 0, 0, 0]), 2));   // lower-left, lower-right, upper-right, upper-left
      geo.setIndex([0, 1, 2, 0, 2, 3]);
      geo.computeBoundingSphere();
      const mat = new THREE.MeshBasicMaterial({ map: textureOf(it), transparent: true, opacity: p.opacity, depthTest: true, depthWrite: false, side: THREE.DoubleSide, toneMapped: false, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(c[0], c[1], c[2]);
      mesh.renderOrder = 5;
      mesh.userData.picture = it.guid;
      group.add(mesh);
      last.push({ guid: it.guid, centre: c, corners: pts, opacity: p.opacity, vertical: p.plane === 'vertical', storey: it.storey });
    }
    viewer.render();
  }
  /** Asked from many places at once (a model rebuild, a level toggled): draw once, next tick. */
  const later = () => { if (timer) return; timer = setTimeout(() => { timer = 0; sync(); }, 0); };
  // the viewer rebuilds its layers on every model change and toggles levels itself; follow it without editing viewer3d.js
  for (const name of ['setModel', 'setStoreyVisible', 'setModelMatrix', 'removeModel', 'clear']) {
    const orig = viewer[name]?.bind(viewer);
    if (!orig) continue;
    viewer[name] = (...a) => { const r = orig(...a); later(); return r; };
  }
  return {
    sync, later,
    info: () => last.map((x) => ({ ...x })),
    on(v) { shown = !!v; sync(); },
    dispose() { clearMeshes(); for (const c of tex.values()) c.texture.dispose(); tex.clear(); viewer.scene.remove(group); },
  };
}
