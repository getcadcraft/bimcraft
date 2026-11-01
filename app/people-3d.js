/* SPDX-License-Identifier: Apache-2.0 */
/**
 * people-3d.js — the walkers of a people run drawn in the 3D view (0.8 EG.48, session bim-sim_PART_3). One instanced mesh of upright capsules (a person 1.7 m tall,
 * 0.45 m across), coloured by what each is doing, added to the viewer's scene in a group of its own; nothing is added to the model.
 *
 *   mountPeople3d({ viewer() → Viewer3D | null, place([x, y, z] mm) → [x, y, z] in the scene }) → { show(frame, N), hide(), shown() }
 *   frame = a people-sim.js frame { x, y, z (mm), st, room } — z is the floor of the walker's room (a stair walker's height is in between)
 *
 * The scale and the up direction of the scene are read from `place` (a metre apart, and straight up), so it works wherever the model sits.
 */
import * as THREE from 'three';
import { STATES } from './people-sim.js';

const COLOR = { [STATES.walk]: 0x2a6fdb, [STATES.queue]: 0xd9822b, [STATES.stair]: 0x7a4fd6, [STATES.wait]: 0x888888, [STATES.stuck]: 0xc0392b };

export function mountPeople3d(host) {
  let group = null, mesh = null, cap = 0;
  const hide = () => {
    const v = host.viewer();
    if (group && v) { group.traverse((o) => { o.geometry?.dispose(); o.material?.dispose?.(); }); v.scene.remove(group); v.render(); }
    group = null; mesh = null; cap = 0;
  };
  function show(frame, N) {
    const v = host.viewer();
    if (!v || !frame) return false;
    const o = host.place([0, 0, 0]), px = host.place([1000, 0, 0]), pz = host.place([0, 0, 1000]);
    const per = Math.hypot(px[0] - o[0], px[1] - o[1], px[2] - o[2]) / 1000;   // scene units per mm
    const up = new THREE.Vector3(pz[0] - o[0], pz[1] - o[1], pz[2] - o[2]);
    if (!(per > 0) || !(up.lengthSq() > 0)) return false;
    up.normalize();
    if (!mesh || cap < N) {
      hide();
      group = new THREE.Group();
      const geo = new THREE.CylinderGeometry(225 * per, 225 * per, 1700 * per, 10);   // axis along +Y; turned to the scene's up below
      mesh = new THREE.InstancedMesh(geo, new THREE.MeshBasicMaterial({ color: 0xffffff, depthTest: false, transparent: true, opacity: 0.9 }), Math.max(1, N));
      mesh.renderOrder = 12; mesh.frustumCulled = false;
      group.add(mesh); v.scene.add(group); cap = N;
    }
    const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), up), m = new THREE.Matrix4(), c = new THREE.Color(), pos = new THREE.Vector3(), one = new THREE.Vector3(1, 1, 1);
    let n = 0;
    for (let i = 0; i < N; i++) {
      const st = frame.st[i];
      if (st === STATES.done || st === STATES.pending) continue;
      const p = host.place([frame.x[i], frame.y[i], (frame.z ? frame.z[i] : 0) + 850]);
      pos.set(p[0], p[1], p[2]);
      m.compose(pos, q, one); mesh.setMatrixAt(n, m);
      mesh.setColorAt(n, c.setHex(COLOR[st] ?? 0x2a6fdb));
      n++;
    }
    mesh.count = n; mesh.instanceMatrix.needsUpdate = true; if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    v.render();
    return true;
  }
  return { show, hide, shown: () => !!group };
}
