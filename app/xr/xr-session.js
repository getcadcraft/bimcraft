/* SPDX-License-Identifier: Apache-2.0 */
/**
 * xr-session.js — design review in a headset (0.6 LC.19): a WebXR `immersive-vr` session showing the model at full size,
 * with teleport and snap turn, measuring, a section cut, issues placed where you point (with a picture from your eyes), a
 * table-top model, and the other people of a Studio Live session as heads, hands and pointers. Shared by ModelCraft and
 * BimCraft: canonical in modelcraft/dev/xr/, byte-identical copy in bimcraft/dev/xr/ (node tools/xr/sync.mjs). Words
 * through t() with keys `xr.*`. Maths in xr-core.js. Nothing is uploaded; the headset is driven by the browser.
 *
 *   xrSupport() → Promise<{vr: boolean, reason: null | 'none' | 'insecure' | 'unsupported'}>
 *   startXR({
 *     scene() → the app's render scene (render-mc.js / render-bim.js shape: items, up, bounds, groundAt, sun, images)
 *     version() → number             the model's version; the headset's copy is rebuilt when it changes (at most twice a second);
 *                                    a negative number = not ready (no rebuild)
 *     appCamera() → {eye, target}    where the person starts (app space): standing on the floor under the app's camera
 *     format(metres) → string        a length in the app's units
 *     addIssue({title, description, camera, point, snapshot}) → void    camera: BCF perspective camera (app space);
 *                                    point: where it was placed (app space); snapshot: PNG bytes of what the person saw
 *     onExit({eye, target})          when the session ends: where the person's head was (app space)
 *     presence?: {send(p), peers() → Map<c, presence>, nameOf(c) → string}   Studio Live (the app's live adapter)
 *     settings?                      the Render dialog's settings (looks), for the materials
 *   }) → Promise<{session, end(), state()}>  (state() is for tests: rig, mode, measures, issues, section, peers drawn)
 *
 * AR on site (0.8 EG.21): arSupportNow() says whether this browser can do it; startAR({...}) shows the model at full size over the phone's camera
 * (WebXR immersive-ar, Android Chrome), lined up on the building by two points pointed at on site, with an x-ray lens, a one-point re-check on the
 * second visit, and the alignment kept in the file. See startAR below. Look, don't set out: the page says so.
 *
 * Controls (either hand): point and pull the trigger. The menu is on the left hand (in front of you when there is one hand
 * only): Move (teleport), Measure, Section, Issue, Table top / Full size, Clear, Leave VR. The thumbstick: sideways turns
 * 30°, forward aims a teleport (let go to jump). Teleport only lands on floors (surfaces facing up).
 */
import * as THREE from 'three';
import { t } from '../i18n.js';
import { lookFor } from '../render/looks.js';
import { libMaterial, imageTextureReady, imageMaterial } from '../render/three-mats.js';
import { MODES, upMatrix, rigMatrix, startRig, teleportRig, turnRig, tableRig, snapToVertex, measure, sectionPlane, planCut, bcfCamera,
  packPresence, cleanPeer, invert, apply, applyDir, arSupport, arSupportNow, alignPoints, saveAlignment, loadAlignment, recheck } from './xr-core.js';

export async function xrSupport() {
  const xr = globalThis.navigator && navigator.xr;
  if (!xr) return { vr: false, reason: globalThis.isSecureContext === false ? 'insecure' : 'none' };
  try { return (await xr.isSessionSupported('immersive-vr')) ? { vr: true, reason: null } : { vr: false, reason: 'unsupported' }; }
  catch { return { vr: false, reason: 'unsupported' }; }
}

const PEER_COLORS = ['#e4572e', '#2e86de', '#f0a202', '#8e44ad', '#17a589', '#c0392b', '#d35400', '#16a085'];
const BUTTONS = ['teleport', 'measure', 'section', 'issue', 'table', 'clear', 'leave'];

function label(text, { color = '#ffffff', bg = 'rgba(20,24,30,0.82)', h = 0.06 } = {}) {
  const c = document.createElement('canvas');
  const g = c.getContext('2d');
  g.font = '600 40px system-ui, sans-serif';   // i18n-ignore: a font
  const w = Math.ceil(g.measureText(text).width) + 36;
  c.width = w; c.height = 64;
  g.fillStyle = bg; g.fillRect(0, 0, w, 64);
  g.font = '600 40px system-ui, sans-serif';   // i18n-ignore: a font
  g.fillStyle = color; g.textBaseline = 'middle'; g.fillText(text, 18, 33);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.userData.xr = true;
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, depthTest: false, transparent: true }));
  s.scale.set(h * w / 64, h, 1);
  s.renderOrder = 10;
  return s;
}
// textures made here (labels, the menu, imported pictures) carry userData.xr; library textures are shared with the app's view
const disposeTree = (o) => o.traverse((x) => { x.geometry?.dispose?.(); const m = x.material; for (const mm of Array.isArray(m) ? m : m ? [m] : []) { if (mm.map?.userData?.xr) mm.map.dispose(); mm.dispose?.(); } });

export async function startXR(o) {
  if (!navigator.xr) throw new Error(t('xr.none'));
  // 0.7 RT.6 (session realtime): the real-time look (../rt/rt-xr.js: the live view's materials, sky, sun shadow, lamps, scatter
  // and bounce light, at the tier this headset's browser allows, on three's WebGL renderer); the plain look of 0.6 if it fails
  let look = null;
  if (o.look !== false) { try { const { xrLook } = await import('../rt/rt-xr.js'); look = await xrLook({ settings: o.settings || {} }); } catch { look = null; } }
  const renderer = look ? look.renderer : new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
  renderer.xr.enabled = true;
  renderer.xr.setReferenceSpaceType('local-floor');
  renderer.localClippingEnabled = true;
  if (!look) { renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.outputColorSpace = THREE.SRGBColorSpace; }
  // ---- the scene: rig (model space, Y up) › app (the app's own axes) › the model ----
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#b9cfe2');
  const hemi = new THREE.HemisphereLight('#dfeaf5', '#6f6a60', 1.3);
  hemi.visible = !look;   // the real-time look lights with its sky (image light) and the bounce light instead
  scene.add(hemi);
  const sun = new THREE.DirectionalLight('#fff4e0', 1.8);
  const rigG = new THREE.Group(), appG = new THREE.Group(), modelG = new THREE.Group(), marks = new THREE.Group(), peersG = new THREE.Group();
  for (const g of [rigG, appG]) g.matrixAutoUpdate = false;
  rigG.add(appG, marks);
  // the real-time look's sun casts shadows, so it turns with the model (in the rig); the plain sun stays in the room
  if (look) { rigG.add(sun, sun.target); sun.castShadow = true; sun.shadow.mapSize.set(look.preset.shadow.size, look.preset.shadow.size); } else scene.add(sun, sun.target);
  appG.add(modelG, peersG);
  scene.add(rigG);
  // ---- the controllers: a ray each; the menu on the left hand. Made before the session starts: three.js hands the
  // session's input sources only to controllers that exist when it announces them ----
  let menuReady = false;
  const hands = [0, 1].map((i) => {
    const c = renderer.xr.getController(i);
    const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, -1)]), new THREE.LineBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.8 }));
    line.scale.z = 3;
    const cursor = new THREE.Mesh(new THREE.SphereGeometry(0.012, 12, 8), new THREE.MeshBasicMaterial({ color: '#ffffff', depthTest: false }));
    cursor.visible = false; cursor.renderOrder = 8;
    c.add(line);
    scene.add(c, cursor);
    const h = { c, line, cursor, source: null, handed: '', hit: null, aiming: false, stickArmed: true, stickAim: false };
    c.addEventListener('connected', (e) => { h.source = e.data; h.handed = e.data.handedness || ''; if (menuReady) placeMenu(); });
    c.addEventListener('disconnected', () => { h.source = null; h.handed = ''; if (menuReady) placeMenu(); });
    c.addEventListener('selectstart', () => press(h));
    c.addEventListener('selectend', () => release(h));
    return h;
  });

  let session;
  try {
    session = await navigator.xr.requestSession('immersive-vr', { optionalFeatures: ['local-floor', 'bounded-floor', 'hand-tracking'] });
  } catch (e) { renderer.dispose(); throw e; }
  await renderer.xr.setSession(session);

  let src = null, upM = null, bounds = null, groundAt = 0, built = -1, rebuildAt = 0, first = true;
  const clip = new THREE.Plane(), clipModel = new THREE.Plane();
  let section = null;              // {n, d, at} in model space (xr-core sectionPlane)
  const mats = [];                 // the model's materials (for the section cut)
  let ground = null, raycastables = [];
  let bvh = null;
  try { bvh = await import('three-mesh-bvh'); } catch { bvh = null; }   // faster pointing on big models; plain raycasting without

  /** The model's copy for the headset, built aside and swapped in at once (pointing never sees a half-built model). */
  let building = false;
  async function buildModel() {
    if (building) return;
    building = true;
    try {
      const next = o.scene(), ver = o.version();
      const nUp = upMatrix(next.up || [0, 0, 1]);
      const real = look ? await look.build(next) : null;   // RT.6: the model in the real-time look
      const looks = new Map(), newMats = [];
      const matFor = async (key) => {
        if (looks.has(key)) return looks.get(key);
        let m = null;
        if (key.startsWith('img:')) {
          const im = next.images && next.images[key.slice(4)];
          const tex = im ? await imageTextureReady(im) : null;
          if (tex) { tex.userData.xr = true; m = imageMaterial(tex, { clipping: [] }); }
        } else if (key.startsWith('mat:')) m = libMaterial(key.slice(4), { size: 512, clipping: [] });
        if (!m) {
          const L = lookFor(key, o.settings || { looks: {} }, next.defaultColor, next.looks && next.looks[key]);
          m = new THREE.MeshStandardMaterial({ color: new THREE.Color(L.color), roughness: L.rough, metalness: L.metal, side: THREE.DoubleSide,
            transparent: L.glass > 0, opacity: L.glass > 0 ? Math.max(0.15, 1 - L.glass) : 1, depthWrite: !(L.glass > 0) });
        }
        m.side = THREE.DoubleSide;
        looks.set(key, m); newMats.push(m);
        return m;
      };
      const edgeMat = new THREE.LineBasicMaterial({ color: '#2a2f36', transparent: true, opacity: 0.5 });
      newMats.push(edgeMat);
      const objs = real ? [...real.objs] : [], hits = real ? [...real.hits] : [];
      if (real) {
        newMats.push(...real.mats);
        for (const obj of hits) {
          const g0 = obj.geometry, whole = g0.drawRange.start === 0 && g0.drawRange.count === Infinity && !g0.groups.length;
          if (bvh && whole) { try { if (!g0.boundsTree) g0.boundsTree = new bvh.MeshBVH(g0, { indirect: true }); obj.raycast = bvh.acceleratedRaycast; } catch { /* plain raycast */ } }
        }
      }
      for (const it of real ? [] : next.items) {
        const mat = it.lines ? edgeMat : await matFor(it.look || 'default');
        const obj = it.lines ? new THREE.LineSegments(it.geometry, mat) : new THREE.Mesh(it.geometry, mat);
        obj.matrixAutoUpdate = false;
        if (it.matrix) obj.matrix.fromArray(it.matrix);
        if (!it.lines) {
          // a BVH only for geometry drawn whole (BimCraft draws part of a batch: plain raycasting keeps to that part); `indirect`
          // leaves the geometry's own index as it is (BimCraft's render items share index buffers with its live view)
          const whole = it.geometry.drawRange.start === 0 && it.geometry.drawRange.count === Infinity && !it.geometry.groups.length;
          if (bvh && whole) { try { if (!it.geometry.boundsTree) it.geometry.boundsTree = new bvh.MeshBVH(it.geometry, { indirect: true }); obj.raycast = bvh.acceleratedRaycast; } catch { /* plain raycast */ } }
          hits.push(obj);
        }
        objs.push(obj);
      }
      // bounds in model space (Y up), the ground under it
      const bb = next.bounds;
      let nb;
      if (bb) {
        const pts = [];
        for (const x of [bb.min[0], bb.max[0]]) for (const y of [bb.min[1], bb.max[1]]) for (const z of [bb.min[2], bb.max[2]]) pts.push(apply(nUp, [x, y, z]));
        nb = { min: [0, 1, 2].map((i) => Math.min(...pts.map((p) => p[i]))), max: [0, 1, 2].map((i) => Math.max(...pts.map((p) => p[i]))) };
      } else nb = { min: [-5, 0, -5], max: [5, 3, 5] };
      const gAt = next.groundAt ?? nb.min[1];
      const R = Math.max(50, Math.hypot(nb.max[0] - nb.min[0], nb.max[2] - nb.min[2]) * 3);
      const g = new THREE.Mesh(new THREE.CircleGeometry(R, 64), real ? real.ground : new THREE.MeshStandardMaterial({ color: '#a7a397', roughness: 1 }));
      g.receiveShadow = !!real;
      g.rotation.x = -Math.PI / 2;
      g.position.set((nb.min[0] + nb.max[0]) / 2, gAt - 0.002, (nb.min[2] + nb.max[2]) / 2);
      // ---- the swap, all at once ----
      const oldObjs = [...modelG.children], oldGround = ground, oldSrc = src;
      for (const c of oldObjs) modelG.remove(c);
      if (oldGround) rigG.remove(oldGround);
      for (const obj of objs) modelG.add(obj);
      rigG.add(g);
      g.updateMatrixWorld(true);
      src = next; upM = nUp; bounds = nb; groundAt = gAt; ground = g; raycastables = hits; built = ver;
      appG.matrix.fromArray(upM);
      mats.length = 0; mats.push(...newMats);
      // the sun from the scene (app space → model space); else a high afternoon sun
      const sd = src.sun ? applyDir(upM, src.sun) : [0.4, 0.8, 0.3];
      sun.position.set(sd[0] * 100, sd[1] * 100, sd[2] * 100);
      if (real) {
        // the stills' sun (colour and strength, the tracer's units) and a shadow map fitted round the model
        sun.color.copy(real.sun.color); sun.intensity = real.sun.intensity;
        const cx = (nb.min[0] + nb.max[0]) / 2, cy = (nb.min[1] + nb.max[1]) / 2, cz = (nb.min[2] + nb.max[2]) / 2;
        const rr = Math.max(1, Math.hypot(nb.max[0] - nb.min[0], nb.max[1] - nb.min[1], nb.max[2] - nb.min[2]) / 2);
        sun.target.position.set(cx, cy, cz);
        sun.position.set(cx + sd[0] * rr * 4, cy + sd[1] * rr * 4, cz + sd[2] * rr * 4);
        const sc = sun.shadow.camera;
        sc.left = -rr * 1.3; sc.right = rr * 1.3; sc.top = rr * 1.3; sc.bottom = -rr * 1.3; sc.near = rr * 0.5; sc.far = rr * 8;
        sc.updateProjectionMatrix();
        sun.shadow.bias = -0.0002; sun.shadow.normalBias = rr * 0.002;
        real.scene(scene);
      }
      // the app's own section cut (keep n·p ≤ d, app space) comes along the first time
      if (first && src.clip && src.clip.length) { const c = src.clip[0]; section = { n: applyDir(upM, c.n), d: c.d }; }
      first = false;
      applySection();
      for (const c of oldObjs) if (!(real && objs.includes(c))) disposeTree(c);   // the real-time look keeps its probe light
      if (oldGround) disposeTree(oldGround);
      oldSrc?.dispose?.();
      real?.dispose();
    } finally { building = false; }
  }
  await buildModel();

  // ---- where the person stands ----
  const ray = new THREE.Raycaster();
  const toModel = () => invert(rigMatrix(rig));
  function floorAt(eyeModel) {
    rigG.matrix.identity(); rigG.updateMatrixWorld(true);
    ray.set(new THREE.Vector3(...eyeModel), new THREE.Vector3(0, -1, 0));
    ray.far = 1e5;
    const h = ray.intersectObjects([...raycastables, ground], false).find((x) => x.face && x.face.normal);
    return h ? h.point.y : groundAt;
  }
  const cam0 = o.appCamera();
  let rig = startRig(cam0, upM, floorAt);
  let roomRig = rig;
  let mode = 'teleport';
  const setRig = (r) => { rig = r; rigG.matrix.fromArray(rigMatrix(rig)); rigG.updateMatrixWorld(true); applySection(); };
  setRig(rig);

  // ---- section: one plane, in model space, cutting the model only ----
  function applySection() {
    for (const m of mats) { m.clippingPlanes = section ? [clip] : null; m.needsUpdate = true; }
  }
  function updateClip() {
    if (!section) return;
    clipModel.set(new THREE.Vector3(...section.n).negate(), section.d);   // keeps n·p ≤ d
    clip.copy(clipModel).applyMatrix4(rigG.matrixWorld);
  }

  // ---- marks: measurements, issue pins, the teleport target (model space; sizes kept in metres of the room) ----
  const measures = [], issues = [];
  let pending = null;   // the first point of a measurement
  const dotGeo = new THREE.SphereGeometry(0.02, 16, 12);
  const dotMat = new THREE.MeshBasicMaterial({ color: '#ffd400', depthTest: false });
  const ringMat = new THREE.MeshBasicMaterial({ color: '#2ecc71', transparent: true, opacity: 0.85, side: THREE.DoubleSide, depthTest: false });
  const badMat = new THREE.MeshBasicMaterial({ color: '#e74c3c', transparent: true, opacity: 0.85, side: THREE.DoubleSide, depthTest: false });
  const target = new THREE.Mesh(new THREE.RingGeometry(0.18, 0.25, 40), ringMat);
  target.rotation.x = -Math.PI / 2; target.visible = false; target.renderOrder = 5;
  marks.add(target);
  const markScale = () => 1 / (rig.scale || 1);   // marks keep their size in the room whatever the model's scale
  function addDot(p) { const d = new THREE.Mesh(dotGeo, dotMat); d.position.set(...p); d.scale.setScalar(markScale()); d.renderOrder = 6; marks.add(d); return d; }

  // the menu: a canvas on a panel
  const mc = document.createElement('canvas');
  mc.width = 768; mc.height = 512;
  const mtex = new THREE.CanvasTexture(mc);
  mtex.colorSpace = THREE.SRGBColorSpace;
  mtex.userData.xr = true;
  const menu = new THREE.Mesh(new THREE.PlaneGeometry(0.24, 0.16), new THREE.MeshBasicMaterial({ map: mtex, transparent: true, depthTest: false }));
  menu.renderOrder = 9;
  let menuHover = -1, status = t('xr.status.start');
  const btnRect = (i) => { const col = i % 2, row = Math.floor(i / 2); return [24 + col * 368, 24 + row * 104, 352, 88]; };
  function drawMenu() {
    const g = mc.getContext('2d');
    g.clearRect(0, 0, 768, 512);
    g.fillStyle = 'rgba(18,22,28,0.9)'; g.fillRect(0, 0, 768, 512);
    BUTTONS.forEach((b, i) => {
      const [x, y, w, h] = btnRect(i);
      const on = b === mode || (b === 'table' && rig.table);
      g.fillStyle = on ? '#1e48c8' : i === menuHover ? '#3a4452' : '#2a313b';
      g.fillRect(x, y, w, h);
      g.fillStyle = '#ffffff'; g.font = '600 38px system-ui, sans-serif'; g.textBaseline = 'middle';   // i18n-ignore: a font
      g.fillText(t(b === 'table' && rig.table ? 'xr.menu.room' : 'xr.menu.' + b), x + 22, y + h / 2 + 2);
    });
    g.fillStyle = '#d7dde5'; g.font = '30px system-ui, sans-serif';   // i18n-ignore: a font
    wrapText(g, status, 24, 452, 720, 34);
    mtex.needsUpdate = true;
  }
  function wrapText(g, text, x, y, w, lh) {
    const words = String(text).split(/\s+/);
    let line = '', yy = y - lh / 2;
    for (const wd of words) {
      const test = line ? line + ' ' + wd : wd;
      if (g.measureText(test).width > w && line) { g.fillText(line, x, yy); line = wd; yy += lh; } else line = test;
    }
    g.fillText(line, x, yy);
  }
  let menuOwner = null;
  function placeMenu() {
    const left = hands.find((h) => h.handed === 'left');
    const owner = left || (hands.filter((h) => h.source).length === 1 ? null : hands.find((h) => h.source && h.handed !== 'right')) || null;
    menu.removeFromParent();
    menuOwner = owner;
    if (owner) {   // on the back of the left hand, tilted toward the eyes
      owner.c.add(menu);
      menu.position.set(0, 0.06, -0.1);
      menu.rotation.set(-Math.PI / 3, 0, 0);
    } else {       // one hand (or none yet): in front of where the person stood, at chest height
      scene.add(menu);
      menu.position.set(-0.35, 1.15, -0.6);
      menu.rotation.set(-0.35, 0.45, 0);
    }
  }
  menuReady = true;
  placeMenu();
  const say = (m) => { status = m; drawMenu(); };
  drawMenu();

  // ---- pointing ----
  const tmpM = new THREE.Matrix4();
  function aim(h) {
    tmpM.identity().extractRotation(h.c.matrixWorld);
    ray.ray.origin.setFromMatrixPosition(h.c.matrixWorld);
    ray.ray.direction.set(0, 0, -1).applyMatrix4(tmpM);
    ray.far = 200;
    if (menu.parent && h !== menuOwner) {
      const mh = ray.intersectObject(menu, false)[0];
      if (mh) return { menu: true, point: mh.point, uv: mh.uv, distance: mh.distance };
    }
    const hits = ray.intersectObjects([...raycastables, ground], false);
    const x = hits.find((k) => {
      if (!section) return true;
      const pm = apply(toModel(), k.point.toArray());
      return section.n[0] * pm[0] + section.n[1] * pm[1] + section.n[2] * pm[2] <= section.d + 1e-6;   // not in the part cut away
    });
    if (!x) return null;
    const nW = x.face ? x.face.normal.clone().transformDirection(x.object.matrixWorld) : new THREE.Vector3(0, 1, 0);
    if (nW.dot(ray.ray.direction) > 0) nW.negate();
    const Mi = toModel();
    const pModel = apply(Mi, x.point.toArray());
    const nModel = new THREE.Vector3(...nW.toArray()).transformDirection(new THREE.Matrix4().fromArray(Mi)).toArray();
    let tri = null;
    if (x.face && x.object.geometry.attributes.position) {
      const pos = x.object.geometry.attributes.position, v = new THREE.Vector3();
      tri = [x.face.a, x.face.b, x.face.c].map((k) => apply(Mi, v.fromBufferAttribute(pos, k).applyMatrix4(x.object.matrixWorld).toArray()));
    }
    return { point: x.point, distance: x.distance, model: pModel, normal: nModel, tri, ground: x.object === ground };
  }
  const headXr = () => { const m = renderer.xr.getCamera().matrixWorld; return [m.elements[12], m.elements[13], m.elements[14]]; };
  const headYaw = () => { const d = new THREE.Vector3(0, 0, -1).applyQuaternion(renderer.xr.getCamera().quaternion); return Math.atan2(-d.x, -d.z); };

  function menuButton(uv) {
    const x = uv.x * 768, y = (1 - uv.y) * 512;
    return BUTTONS.findIndex((b, i) => { const [bx, by, bw, bh] = btnRect(i); return x >= bx && x <= bx + bw && y >= by && y <= by + bh; });
  }
  function press(h) {
    const a = aim(h);
    if (a && a.menu) { h.menuPress = menuButton(a.uv); return; }
    if (mode === 'teleport') h.aiming = true;
  }
  function release(h) {
    if (h.menuPress !== undefined && h.menuPress !== null) {
      const a = aim(h), i = a && a.menu ? menuButton(a.uv) : -1;
      if (i === h.menuPress && i >= 0) doButton(BUTTONS[i]);
      h.menuPress = null;
      return;
    }
    const a = aim(h);
    if (mode === 'teleport') { h.aiming = false; teleport(a); return; }
    if (!a || a.menu) return;
    if (mode === 'measure') doMeasure(a);
    else if (mode === 'section') doSection(a);
    else if (mode === 'issue') doIssue(a);
  }
  function doButton(b) {
    if (MODES.includes(b)) { mode = b; say(t('xr.status.' + b)); }
    else if (b === 'table') {
      if (rig.table) { setRig(roomRig); mode = 'teleport'; say(t('xr.room.on')); }
      else { roomRig = rig; setRig(tableRig(bounds, headXr(), headYaw())); if (mode === 'teleport') mode = 'measure'; say(t('xr.table.on')); }
    } else if (b === 'clear') {
      for (const m of measures) for (const x of m.objs) { marks.remove(x); x.geometry !== dotGeo && disposeTree(x); }
      measures.length = 0;
      if (pending) { marks.remove(pending.obj); pending = null; }
      section = null; applySection();
      say(t('xr.cleared'));
    } else if (b === 'leave') session.end();
    drawMenu();
  }
  function teleport(a) {
    if (rig.table) { say(t('xr.table.noteleport')); return; }
    if (!a || a.menu) return;
    const r = teleportRig(rig, a.model, headXr(), a.normal);
    if (!r) { say(t('xr.floor.only')); return; }
    setRig(r);
    roomRig = rig;
    say(t('xr.moved'));
  }
  function doMeasure(a) {
    const p = snapToVertex(a.model, a.tri, 0.05 / (rig.scale || 1));
    if (!pending) { pending = { p, obj: addDot(p) }; say(t('xr.measure.first')); return; }
    const q = p, d = measure(pending.p, q);
    const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(...pending.p), new THREE.Vector3(...q)]), new THREE.LineBasicMaterial({ color: '#ffd400', depthTest: false }));
    line.renderOrder = 6;
    const txt = o.format(d);
    const lab = label(txt, { color: '#ffd400' });
    lab.position.set((pending.p[0] + q[0]) / 2, (pending.p[1] + q[1]) / 2 + 0.05 * markScale(), (pending.p[2] + q[2]) / 2);
    lab.scale.multiplyScalar(markScale());
    const dot2 = addDot(q);
    marks.add(line, lab);
    measures.push({ a: pending.p, b: q, d, text: txt, objs: [pending.obj, dot2, line, lab] });
    pending = null;
    say(t('xr.measured', { d: txt }));
  }
  function doSection(a) {
    const eye = apply(toModel(), headXr());
    // a floor seen from above: a plan cut 1.2 m over it; anything else: cut open toward you (best from outside, or across a room)
    const floor = a.normal[1] > 0.9 && eye[1] > a.model[1];
    section = floor ? planCut(a.model, 1.2) : sectionPlane(a.model, a.normal, eye, 0.01 / (rig.scale || 1));
    applySection();
    say(t(floor ? 'xr.section.plan' : 'xr.section.on'));
  }
  async function doIssue(a) {
    const n = issues.length + 1;
    const pin = new THREE.Group();
    const s = markScale();
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.04, 16, 12), new THREE.MeshBasicMaterial({ color: '#e4572e' }));
    head.position.set(0, 0.16, 0);
    const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.006, 0.16, 8), new THREE.MeshBasicMaterial({ color: '#e4572e' }));
    stem.position.set(0, 0.08, 0);
    const tag = label(t('xr.issue.tag', { n }), { color: '#ffffff', bg: 'rgba(228,87,46,0.92)' });
    tag.position.set(0, 0.24, 0);
    pin.add(head, stem, tag);
    pin.position.set(...a.model); pin.scale.setScalar(s);
    marks.add(pin);
    const camera = bcfCamera(renderer.xr.getCamera().matrixWorld.toArray(), rig, upM, 60);   // BCF 2.1 allows 45–60°
    const point = apply(invert(upM), a.model);
    let snapshot = null;
    try { snapshot = await snap(); } catch { snapshot = null; }
    const issue = { title: t('xr.issue.title', { n }), description: t('xr.issue.desc', { where: point.map((v) => o.format(v)).join(', ') }), camera, point, snapshot };
    issues.push({ ...issue, obj: pin });
    try { o.addIssue(issue); } catch (e) { console.error(e); }
    say(t('xr.issue.placed', { n }));
  }
  /** A PNG of what the person sees (the left eye's view, without the menu, rays and other people). */
  async function snap() {
    const xc = renderer.xr.getCamera(), cam = new THREE.PerspectiveCamera(60, 4 / 3, 0.05, 2000);   // the issue's camera (60°)
    cam.matrixWorld.copy(xc.matrixWorld); cam.matrixWorld.decompose(cam.position, cam.quaternion, cam.scale);
    cam.updateMatrixWorld(true);
    const W = 800, H = 600, rt = new THREE.WebGLRenderTarget(W, H, { colorSpace: THREE.SRGBColorSpace });
    const hidden = [menu, peersG, target, ...hands.map((h) => h.cursor), ...hands.map((h) => h.line)];
    const was = hidden.map((x) => x.visible);
    hidden.forEach((x) => { x.visible = false; });
    const xrOn = renderer.xr.enabled;
    renderer.xr.enabled = false;
    renderer.setRenderTarget(rt);
    renderer.render(scene, cam);
    const px = new Uint8Array(W * H * 4);
    renderer.readRenderTargetPixels(rt, 0, 0, W, H, px);
    renderer.setRenderTarget(null);
    renderer.xr.enabled = xrOn;
    hidden.forEach((x, i) => { x.visible = was[i]; });
    rt.dispose();
    const c = document.createElement('canvas');
    c.width = W; c.height = H;
    const img = c.getContext('2d').createImageData(W, H);
    for (let y = 0; y < H; y++) img.data.set(px.subarray((H - 1 - y) * W * 4, (H - y) * W * 4), y * W * 4);
    c.getContext('2d').putImageData(img, 0, 0);
    const blob = await new Promise((res) => c.toBlob(res, 'image/png'));   // i18n-ignore: a media type
    return blob ? new Uint8Array(await blob.arrayBuffer()) : null;
  }

  // ---- other people (Studio Live presence) ----
  const avatars = new Map();
  function avatar(c, name) {
    const col = PEER_COLORS[Math.abs(c) % PEER_COLORS.length];
    const g = new THREE.Group();
    const mat = new THREE.MeshStandardMaterial({ color: col, roughness: 0.6 });
    const headM = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.13, 0.15), mat);
    const visor = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.05, 0.02), new THREE.MeshBasicMaterial({ color: '#1a1d22' }));
    visor.position.set(0, 0.01, -0.08);
    headM.add(visor);
    const tag = label(name, { color: '#ffffff', bg: col });
    tag.position.set(0, 0.17, 0);
    headM.add(tag);
    const hand = () => new THREE.Mesh(new THREE.SphereGeometry(0.035, 12, 8), mat);
    const ptr = new THREE.Mesh(new THREE.SphereGeometry(0.03, 12, 8), new THREE.MeshBasicMaterial({ color: col, depthTest: false }));
    ptr.renderOrder = 7;
    const a = { g, head: headM, left: hand(), right: hand(), ptr, name };
    g.add(headM, a.left, a.right, ptr);
    peersG.add(g);
    return a;
  }
  const setPose = (obj, pose) => { obj.visible = !!pose; if (pose) { obj.position.set(...pose.p); obj.quaternion.set(...pose.q); } };
  function drawPeers() {
    if (!o.presence) return 0;
    const seen = new Set();
    let n = 0;
    for (const [c, p] of o.presence.peers()) {
      const v = cleanPeer(p);
      if (!v) continue;
      seen.add(c);
      let a = avatars.get(c);
      if (!a) { a = avatar(c, o.presence.nameOf(c)); avatars.set(c, a); }
      // only people at full size, while you are at full size: a table-top model is each person's own
      a.g.visible = !v.table && !rig.table;
      if (!a.g.visible) continue;
      n++;
      setPose(a.head, v.head); setPose(a.left, v.left); setPose(a.right, v.right);
      a.ptr.visible = !!v.pointer;
      if (v.pointer) a.ptr.position.set(...v.pointer);
    }
    for (const [c, a] of avatars) if (!seen.has(c)) { peersG.remove(a.g); disposeTree(a.g); avatars.delete(c); }
    return n;
  }
  let lastSent = 0, peersShown = 0;
  function sendPresence(now) {
    if (!o.presence || now - lastSent < 100) return;
    lastSent = now;
    const handOf = (side) => { const h = hands.find((x) => x.handed === side && x.source); return h ? h.c.matrixWorld.toArray() : null; };
    const pointing = hands.find((h) => h.hit && !h.hit.menu);
    const p = packPresence({ head: renderer.xr.getCamera().matrixWorld.toArray(), left: handOf('left'), right: handOf('right'), rig, mode,
      pointer: pointing ? pointing.hit.point.toArray() : null }, upM);
    try { o.presence.send({ xr: p }); } catch { /* the session ended */ }
  }

  // ---- every frame ----
  const viewCam = new THREE.PerspectiveCamera(70, 1, 0.05, 5000);
  const stick = (src) => {
    const ax = src && src.gamepad ? src.gamepad.axes : null;
    if (!ax || !ax.length) return [0, 0];
    return ax.length >= 4 ? [ax[2], ax[3]] : [ax[0], ax[1]];
  };
  let frames = 0;
  renderer.setAnimationLoop((now) => {
    frames++;
    // the model changed (an edit here, or someone else's in a live session): rebuilt, at most twice a second
    const ver = o.version();
    if (ver >= 0 && ver !== built && !rebuildAt) rebuildAt = now + 500;
    if (rebuildAt && now >= rebuildAt) { rebuildAt = 0; buildModel().catch((e) => console.error(e)); }
    rigG.updateMatrixWorld(true);
    updateClip();
    let anyAim = false;
    for (const h of hands) {
      if (!h.source) { h.line.visible = false; h.cursor.visible = false; continue; }
      h.line.visible = true;
      const [sx, sy] = stick(h.source);
      // snap turn: a flick sideways
      if (Math.abs(sx) > 0.7 && h.stickArmed) { h.stickArmed = false; setRig(turnRig(rig, headXr(), sx > 0 ? 30 : -30)); if (!rig.table) roomRig = rig; }
      if (Math.abs(sx) < 0.3) h.stickArmed = true;
      // teleport aim: the stick forward, let go to jump
      if (sy < -0.7) h.stickAim = true;
      else if (h.stickAim && Math.abs(sy) < 0.3) { h.stickAim = false; teleport(aim(h)); }
      h.hit = aim(h);
      const hit = h.hit;
      h.line.scale.z = hit ? Math.max(0.05, hit.distance) : 3;
      h.cursor.visible = !!hit;
      if (hit) h.cursor.position.copy(hit.point);
      if (hit && hit.menu) {
        const i = menuButton(hit.uv);
        if (i !== menuHover) { menuHover = i; drawMenu(); }
      }
      if ((h.aiming || h.stickAim) && hit && !hit.menu) {
        anyAim = true;
        const okFloor = !rig.table && teleportRig(rig, hit.model, headXr(), hit.normal);
        target.material = okFloor ? ringMat : badMat;
        target.position.set(...hit.model);
        target.scale.setScalar(markScale());
      }
    }
    if (!hands.some((h) => h.hit && h.hit.menu) && menuHover !== -1) { menuHover = -1; drawMenu(); }
    target.visible = anyAim;
    peersShown = drawPeers();
    sendPresence(now);
    look?.frame(renderer.xr.getCamera());   // RT.6: the scatter's near set follows the head
    renderer.render(scene, viewCam);   // three draws each eye with the headset's own cameras
  });

  // ---- the end ----
  let ended = false;
  const done = new Promise((resolve) => {
    session.addEventListener('end', () => {
      if (ended) return;
      ended = true;
      let pose = null;
      try {
        const m = renderer.xr.getCamera().matrixWorld.toArray(), toApp = invert(upM);
        const back = invert(rigMatrix(rig));
        const eye = apply(toApp, apply(back, [m[12], m[13], m[14]]));
        const fwd = [-m[8], -m[9], -m[10]];
        const tgt = apply(toApp, apply(back, [m[12] + fwd[0], m[13] + fwd[1], m[14] + fwd[2]]));
        pose = { eye, target: tgt };
      } catch { pose = null; }
      renderer.setAnimationLoop(null);
      try { o.presence?.send({ xr: null }); } catch { /* gone */ }
      disposeTree(scene);
      src?.dispose?.();
      look?.dispose();
      renderer.dispose();
      try { o.onExit?.(pose); } catch (e) { console.error(e); }
      resolve(pose);
    });
  });
  return {
    session, done,
    end: () => session.end(),
    state: () => ({ rig: { ...rig }, mode, table: !!rig.table, measures: measures.map((m) => ({ a: m.a, b: m.b, d: m.d, text: m.text })), pending: pending ? pending.p : null,
      issues: issues.map((i) => ({ title: i.title, point: i.point, camera: i.camera, snapshot: i.snapshot ? i.snapshot.length : 0 })),
      section: section ? { n: section.n.slice(), d: section.d } : null, peers: peersShown, status, built,
      look: look ? 'realtime' : 'plain', tier: look ? look.tier : null, frames, bounce: look ? look.bounce : false, scatter: look ? look.scatterCounts : [],
      hands: hands.map((h) => ({ handed: h.handed, hit: h.hit ? (h.hit.menu ? 'menu' : h.hit.model) : null })) }),
    /** Press a menu button by name (tests; the same as pointing at it and pulling the trigger). */
    button: (b) => doButton(b),
    /** Where a menu button is in the room (xr space), for pointing at it (tests). */
    buttonAt(b) {
      const i = BUTTONS.indexOf(b);
      if (i < 0 || !menu.parent) return null;
      const [x, y, w, h] = btnRect(i);
      menu.updateMatrixWorld(true);
      return new THREE.Vector3(((x + w / 2) / 768 - 0.5) * 0.24, (0.5 - (y + h / 2) / 512) * 0.16, 0).applyMatrix4(menu.matrixWorld).toArray();
    },
  };
}


// ======================================================================================================================================
// AR on site (0.8 EG.21, apps-mount_PART_5). Plan and limits: docs/spikes/EG.21_PART_2.md, EG.21_PART_4.md. Android phones with Chrome; look, don't set out.
// ======================================================================================================================================

/**
 * startAR({
 *   scene() · version() · format(metres)      as startXR (the app's render scene, its version, a length in the app's units)
 *   alignment?                                the record kept in the file (saveAlignment's), so the second visit starts lined up
 *   saveAlignment(record) → void              called when the person lines the model up (or moves it after a re-check): keep it in the file
 *   refs?: [[x,y,z],[x,y,z]]                  the two model points to stand at, in the app's space (default: two ground corners of the model's box)
 *   overlay?: HTMLElement                     the page's own dom-overlay root (else one is made)
 *   onExit()                                  when the session ends
 * }) → Promise<{ session, end(), state() }>   state() is for tests: step, alignment, xray, reticle, advice
 * Steps: align1 → align2 (stand at each reference point, point the phone's centre mark at the ground there, Place point) → aligned. A saved alignment starts at aligned;
 * Re-check (stand at the first point, Place) says keep / move / again. The x-ray lens shows the whole model inside a box in front of the phone and a faint ghost of it
 * everywhere else. Nothing is uploaded; the camera picture stays in the browser (WebXR gives the page no picture of it).
 */
export { arSupportNow };
export async function startAR(o) {
  const sup = arSupportNow();
  if (!sup.ok) throw Object.assign(new Error(t('xr.ar.why.' + sup.reason)), { code: sup.reason, route: sup.route });
  const overlay = o.overlay || document.createElement('div');
  if (!o.overlay) { overlay.setAttribute('data-ar-overlay', ''); overlay.style.cssText = 'position:fixed;inset:0;pointer-events:none;font:16px system-ui,sans-serif;color:#fff;'; document.body.append(overlay); }
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.xr.enabled = true;
  renderer.xr.setReferenceSpaceType('local');
  renderer.localClippingEnabled = true;
  renderer.setClearColor(0x000000, 0);
  const scene = new THREE.Scene();
  const hemi = new THREE.HemisphereLight('#ffffff', '#8a8680', 1.4), sun = new THREE.DirectionalLight('#fff4e0', 1.6);
  sun.position.set(0.4, 1, 0.3);
  scene.add(hemi, sun);
  const worldG = new THREE.Group(), solidG = new THREE.Group(), ghostG = new THREE.Group();
  worldG.matrixAutoUpdate = false;
  worldG.add(solidG, ghostG);
  scene.add(worldG);
  const reticle = new THREE.Mesh(new THREE.RingGeometry(0.05, 0.07, 32).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: '#2ecc71' }));
  reticle.visible = false;
  scene.add(reticle);
  const marks = new THREE.Group();
  scene.add(marks);

  let session;
  try {
    const init = { ...sup.init, domOverlay: { root: overlay } };
    session = await navigator.xr.requestSession('immersive-ar', init);
  } catch (e) { renderer.dispose(); if (!o.overlay) overlay.remove(); throw e; }
  await renderer.xr.setSession(session);
  const viewer = await session.requestReferenceSpace('viewer');
  let hitSource = null;
  try { hitSource = await session.requestHitTestSource({ space: viewer }); } catch { hitSource = null; }

  // ---- the model, built from the app's render scene (solid copy and a ghost copy sharing geometry) ----
  const next = o.scene(), upM = upMatrix(next.up || [0, 0, 1]);
  const solidMats = [], ghostMats = [];
  const looks = new Map();
  for (const it of next.items) {
    const key = it.look || 'default';
    let pair = looks.get(key);
    if (!pair && !it.lines) {
      const L = lookFor(key, o.settings || { looks: {} }, next.defaultColor, next.looks && next.looks[key]);
      pair = [new THREE.MeshStandardMaterial({ color: new THREE.Color(L.color), roughness: L.rough, metalness: L.metal, side: THREE.DoubleSide }),
        new THREE.MeshBasicMaterial({ color: new THREE.Color(L.color), transparent: true, opacity: 0.18, depthWrite: false, side: THREE.DoubleSide })];
      solidMats.push(pair[0]); ghostMats.push(pair[1]); looks.set(key, pair);
    }
    const mk = (mat) => {
      const obj = it.lines ? new THREE.LineSegments(it.geometry, new THREE.LineBasicMaterial({ color: '#2a2f36', transparent: true, opacity: 0.5 })) : new THREE.Mesh(it.geometry, mat);
      obj.matrixAutoUpdate = false;
      if (it.matrix) obj.matrix.fromArray(it.matrix);
      return obj;
    };
    solidG.add(mk(pair && pair[0]));
    if (!it.lines) ghostG.add(mk(pair[1]));
  }
  ghostG.visible = false;
  const bb = next.bounds || { min: [-5, -5, 0], max: [5, 5, 3] };
  const corners = [];
  for (const x of [bb.min[0], bb.max[0]]) for (const y of [bb.min[1], bb.max[1]]) for (const z of [bb.min[2], bb.max[2]]) corners.push(apply(upM, [x, y, z]));
  const nb = { min: [0, 1, 2].map((i) => Math.min(...corners.map((c) => c[i]))), max: [0, 1, 2].map((i) => Math.max(...corners.map((c) => c[i]))) };
  const gAt = next.groundAt ?? nb.min[1];
  // the two model points to stand at (Y-up model space): given by the app, else two ground corners along the longer side
  let refs = Array.isArray(o.refs) && o.refs.length === 2 ? o.refs.map((p) => apply(upM, p)) : null;
  if (!refs) {
    const wx = nb.max[0] - nb.min[0], wz = nb.max[2] - nb.min[2];
    refs = wx >= wz ? [[nb.min[0], gAt, nb.min[2]], [nb.max[0], gAt, nb.min[2]]] : [[nb.min[0], gAt, nb.min[2]], [nb.min[0], gAt, nb.max[2]]];
  }

  // ---- state ----
  let align = null, step = 'align1', xray = false, advice = '', world1 = null, hit = null, ended = false;
  const saved = loadAlignment(o.alignment);
  const setWorld = (a) => {
    const c = Math.cos(-a.yaw), s = Math.sin(-a.yaw);
    // model (Y up) → world: rotate about Y by -yaw, then move; xr space is Y up
    const m = new THREE.Matrix4().set(c, 0, s, a.tx, 0, 1, 0, a.ty || 0, -s, 0, c, a.tz, 0, 0, 0, 1);
    worldG.matrix.copy(m).multiply(new THREE.Matrix4().fromArray(upM));
    worldG.matrixWorldNeedsUpdate = true;
  };
  if (saved) { align = saved; step = 'aligned'; setWorld(saved); } else worldG.visible = false;
  const fmt = (p) => p.slice(0, 3).map((v) => o.format(v)).join(', ');
  const text = (k, v) => t('xr.ar.' + k, v);

  // ---- the overlay: words, five buttons ----
  const root = document.createElement('div');
  root.style.cssText = 'position:absolute;left:0;right:0;bottom:0;padding:12px;background:rgba(18,22,28,0.78);pointer-events:auto;';
  const msg = document.createElement('p'); msg.setAttribute('data-ar-msg', ''); msg.style.cssText = 'margin:0 0 8px;';
  const bar = document.createElement('div'); bar.style.cssText = 'display:flex;gap:8px;flex-wrap:wrap;';
  const mkBtn = (id, label, fn) => { const b = document.createElement('button'); b.type = 'button'; b.setAttribute('data-ar-' + id, ''); b.textContent = label; b.style.cssText = 'padding:10px 14px;font:inherit;border:0;border-radius:6px;background:#1e48c8;color:#fff;'; b.addEventListener('click', fn); bar.append(b); return b; };
  const bPlace = mkBtn('place', text('place'), () => place());
  const bXray = mkBtn('xray', text('xray'), () => setXray(!xray));
  const bAgain = mkBtn('again', text('again'), () => { step = 'align1'; world1 = null; say(); });
  const bRecheck = mkBtn('recheck', text('recheck'), () => { step = 'recheck'; say(); });
  const bLeave = mkBtn('leave', text('leave'), () => end());
  root.append(msg, bar);
  overlay.append(root);
  function say(extra = '') {
    const m = step === 'align1' ? text('step1', { where: fmt(refs[0]) }) : step === 'align2' ? text('step2', { where: fmt(refs[1]) })
      : step === 'recheck' ? text('step.recheck', { where: fmt(refs[0]) }) : text('aligned', { m: align ? o.format(align.residual || 0) : '' });
    msg.textContent = (extra ? extra + ' ' : '') + m + ' ' + text('note');
    bPlace.hidden = step === 'aligned';
    bAgain.hidden = step === 'align1';
    bRecheck.hidden = step !== 'aligned';
  }
  say(sup.reason === 'android-chrome' && !hitSource ? text('nohit') : '');
  function setXray(on) {
    xray = !!on;
    ghostG.visible = xray;
    for (const m of solidMats) { m.clippingPlanes = xray ? lensPlanes : null; m.needsUpdate = true; }
    bXray.setAttribute('aria-pressed', String(xray));
  }
  // the lens: a box 1.4 m wide, 1.6 m tall, 3 m deep, starting 0.4 m in front of the phone and turning with it about the vertical axis
  const lensPlanes = Array.from({ length: 6 }, () => new THREE.Plane());
  const lens = { yaw: 0, pos: new THREE.Vector3() };
  function updateLens(cam) {
    const q = new THREE.Quaternion(); cam.getWorldQuaternion(q);
    const f = new THREE.Vector3(0, 0, -1).applyQuaternion(q); f.y = 0; if (f.lengthSq() < 1e-6) return; f.normalize();
    const p = new THREE.Vector3(); cam.getWorldPosition(p);
    const r = new THREE.Vector3(-f.z, 0, f.x);   // right
    const c = p.clone().addScaledVector(f, 0.4 + 1.5);
    lens.pos.copy(c); lens.yaw = Math.atan2(f.x, f.z);
    // inward-facing planes: keep what is inside the box
    lensPlanes[0].setFromNormalAndCoplanarPoint(r.clone().negate(), c.clone().addScaledVector(r, 0.7));
    lensPlanes[1].setFromNormalAndCoplanarPoint(r, c.clone().addScaledVector(r, -0.7));
    lensPlanes[2].setFromNormalAndCoplanarPoint(f.clone().negate(), c.clone().addScaledVector(f, 1.5));
    lensPlanes[3].setFromNormalAndCoplanarPoint(f, c.clone().addScaledVector(f, -1.5));
    lensPlanes[4].setFromNormalAndCoplanarPoint(new THREE.Vector3(0, -1, 0), new THREE.Vector3(0, p.y + 0.5, 0));
    lensPlanes[5].setFromNormalAndCoplanarPoint(new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, p.y - 1.1, 0));
  }

  // ---- placing a point (the reticle's hit) ----
  const dot = (p) => { const d = new THREE.Mesh(new THREE.SphereGeometry(0.03, 12, 8), new THREE.MeshBasicMaterial({ color: '#ffd400' })); d.position.set(...p); marks.add(d); };
  function place() {
    if (!hit) { say(text('nohit')); return; }
    const w = hit.slice();
    if (step === 'align1') { world1 = w; dot(w); step = 'align2'; say(); return; }
    if (step === 'align2') {
      try {
        const a = alignPoints([refs[0], refs[1]], [world1, w]);
        a.ty = (world1[1] + w[1]) / 2 - (refs[0][1] + refs[1][1]) / 2;
        align = a; setWorld(a); worldG.visible = true; step = 'aligned'; dot(w);
        o.saveAlignment?.(saveAlignment(a));
        say(text('lined', { m: o.format(a.residual) }));
      } catch (e) { world1 = null; step = 'align1'; marks.clear(); say(e && e.code === 'close' ? text('close') : String(e?.message || e)); }
      return;
    }
    if (step === 'recheck') {
      const r = recheck(saveAlignment({ ...align, ty: align.ty || 0 }), refs[0], w);
      advice = r.advice;
      if (r.advice === 'move') { align = { ...align, tx: align.tx + r.adjust[0], tz: align.tz + r.adjust[1] }; setWorld(align); o.saveAlignment?.(saveAlignment(align)); }
      if (r.advice === 'again') { step = 'align1'; world1 = null; marks.clear(); worldG.visible = false; say(text('re.again', { m: o.format(r.offset) })); return; }
      step = 'aligned';
      say(text('re.' + r.advice, { m: o.format(r.offset) }));
    }
  }

  // ---- the frame loop ----
  const refSpace = renderer.xr.getReferenceSpace?.() || null;
  const tmp = new THREE.Vector3();
  renderer.setAnimationLoop((time, frame) => {
    if (!frame || ended) return;
    const rs = renderer.xr.getReferenceSpace();
    if (hitSource && rs) {
      const res = frame.getHitTestResults(hitSource);
      const pose = res && res[0] && res[0].getPose(rs);
      if (pose) {
        const pp = pose.transform.position;
        hit = [pp.x, pp.y, pp.z];
        reticle.position.set(pp.x, pp.y, pp.z); reticle.visible = step !== 'aligned';
      } else { hit = null; reticle.visible = false; }
    }
    if (xray) updateLens(renderer.xr.getCamera());
    renderer.render(scene, renderer.xr.getCamera());
  });
  void refSpace; void tmp;
  const finish = () => {
    if (ended) return;
    ended = true;
    renderer.setAnimationLoop(null);
    try { hitSource?.cancel?.(); } catch { /* gone */ }
    overlay.removeChild(root);
    if (!o.overlay) overlay.remove();
    renderer.dispose();
    for (const m of [...solidMats, ...ghostMats]) m.dispose();
    o.onExit?.();
  };
  session.addEventListener('end', finish);
  async function end() { try { await session.end(); } catch { finish(); } }
  return {
    session, end,
    place, setXray,
    appToWorld: (p) => { const v = new THREE.Vector3(p[0], p[1], p[2]).applyMatrix4(worldG.matrix); return [v.x, v.y, v.z]; },
    refsApp: () => refs.map((p) => apply(invert(upM), p)),
    state: () => ({ step, align: align ? { yaw: align.yaw, tx: align.tx, tz: align.tz, ty: align.ty || 0, residual: align.residual } : null, xray, reticle: !!hit, advice, refs, route: sup.route, lens: { yaw: lens.yaw, pos: lens.pos.toArray() } }),
  };
}
