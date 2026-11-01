/* SPDX-License-Identifier: Apache-2.0 */
/**
 * viewer3d.js — draws an IfcModel load result with three.js. One THREE.Group per storey,
 * one merged mesh per batch, edges as thin lines for the drafting look, click to pick an
 * element (faceIndex → triIds), and a highlight overlay for the picked element.
 * Renders on demand (control changes, resizes, edits), not in a loop.
 *
 *   const v = new Viewer3D(canvas, { onPick: (id) => … });
 *   v.setModel(model);  v.view('iso');  v.setStoreyVisible(id, false);  v.select(id);
 *   v.setModel(model, { keepCamera: true })   reload after an edit without moving the camera
 *   v.placing = { move(pt|null, e), click(pt, e) }   while set, the pointer hits the plane y = v.placeY instead of picking
 *   v.setGhost(corners|null)                  a see-through box (8 viewer-space corners) where an item would go
 *   v.setSection({ axis, offset, flip }|null) section plane (three.js clipping planes); picking skips the cut-away side
 *   v.setSection({ axis: 'box', box } | { axis: 'box', cells })   section box, or a free-form volume (0.5 WL.1:
 *                                              section-volume.js — a union of cells with tilted faces and extra planes)
 *   v.setGrips([{ p, kind }] | null, hover)   section box grips (0.5 WL.2), IFC rel. points; v.gripAt(x, y) → index | -1;
 *   v.onGrip = (phase 'start'|'move'|'end', index, event) => …   a drag on a grip (orbit and picking stay out of it);
 *   v.rayIfc(x, y) → { o, d, view }            the pointer's ray in the section box's space (IFC axes, m from the min corner)
 *   v.setSectionTurn(rad)                      sections square to a building turned in its site (0.5 BM.9): the Front / Side
 *                                              planes and the box run along axes turned by `rad` about the vertical (the
 *                                              building's own, IfcPlacer.planRotation); 0 = the model's axes, as before
 *   v.setViewTurn(rad)                         the view presets (view(name): Fit, Top, Front, Side) look along a building
 *                                              turned by `rad` about the vertical (0.6 DC.57); 0 = the model's axes
 *   v.vis.hide(keys) / isolate(keys, {ghost}) / showAll(); v.applyVisibility()   hide, isolate, see-through (ifc-vis.js)
 *   v.select(key | [keys] | null, { also })   highlight one or more elements (+ `also`, lit but not picked); v.selection
 *   v.frameKeys(keys)                          zoom to elements, keeping the view direction
 *   v.setColors(Map(key → '#rrggbb') | null)   Color by property (0.4 B15): elements painted per vertex; null = own colors
 *   v.measuring = { move(x, y), click(x, y, e) }   while set, the pointer measures instead of picking (0.4 B6):
 *   v.measureAt(x, y) → { key, point, snap: 'vertex'|'edge'|'face', face: { area, normal, world triangles } } | null
 *   v.setMeasureOverlay({ lines: [[a, b]…], points: [[x,y,z]…], faces: [Float32Array(world triangles)…], hover }) / null
 *   v.project([x, y, z]) → page {x, y} | null      (labels over the canvas)
 *   v.startWalk(point, opts) / v.stopWalk() / v.walk   walk mode (0.4 B18): eye height, gravity, collision; keys and drag
 *   v.walkPick = (point | null) => …          while set, a click hands over the point it hits (where to start walking)
 *   v.setModel(m2, { add: true })  removeModel(mi)  setModelVisible(mi, on)  setModelMatrix(mi, m4)  keyBounds(keys)
 *                                              federation (0.4 B16): one layer per model, keys never collide
 *
 * Elements are KEYS (ifc-model.js): the first model's key is its expressID. Each batch mesh draws two groups — shown
 * elements solid, see-through ones faint — from an index buffer ifc-vis.js rebuilds; hidden elements are left out.
 * Edges are per element (ifc-vis.js batchEdges), so they hide with their element. See-through elements cannot be
 * picked: a click goes through them.
 */
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { Visibility, batchIndex, batchEdges, edgeIndex, boundsOf, boundsMapOf, SOLID } from './ifc-vis.js';
import { KEY_SPAN } from './ifc-model.js';
import { runOf, runEdges, faceRegion, snapTo } from './measure.js';
import { cleanVolume, cellPlanes, polyhedron, modelSpec, capSpec, specKey, clipGlsl } from './section-volume.js';
import { openAcross, stencilIndex } from './caps-closed.js';
import { onMouse } from './input-mouse.js';   // 0.5 IP.1: the input profile's buttons and wheel

const CLIP_EPS = 0.0005;   // m: section planes sit this far outside the kept part (setClip)

const EDGE_LIMIT = 1500000;   // skip edge lines above this many triangles (memory)
const GHOST_OPACITY = 0.12;   // see-through elements (isolate with see-through others)
const IDENTITY = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
/** Section presets in viewer space (web-ifc hands us Y up): the axis the plane is across. */
export const SECTION_AXES = { top: { i: 1, label: 'Top' }, front: { i: 2, label: 'Front' }, side: { i: 0, label: 'Side' } };

export class Viewer3D {
  constructor(canvas, { onPick = () => {} } = {}) {
    this.canvas = canvas;
    this.onPick = onPick;
    // stencil: filled cut faces (0.4 B5). Clipping is per material (localClippingEnabled): every material shares
    // `this.clip` (the section's planes), so the capping passes can be clipped by one plane only.
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, preserveDrawingBuffer: true, stencil: true });
    this.renderer.localClippingEnabled = true;
    this.clip = [];
    this.clipSpec = null;   // a union of cells (WL.1): which of `clip` belong together; null = keep inside every plane
    this.clipGroups = null;
    this.caps = [];       // stencil meshes and cap planes while a section shows
    this.capsOn = true;
    this.sectionTurn = 0;
    this.viewTurn = 0;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, 1, 0.1, 10000);
    this.controls = new OrbitControls(this.camera, canvas);
    this.controls.enableDamping = false;
    this.controls.screenSpacePanning = true;
    // the input profile's mouse (Settings › BimCraft › Menus, keys and mouse): buttons → orbit / pan / zoom / nothing,
    // wheel direction and speed; null buttons = OrbitControls' own (left orbits, middle zooms, right pans)
    const ACT = { orbit: THREE.MOUSE.ROTATE, pan: THREE.MOUSE.PAN, zoom: THREE.MOUSE.DOLLY, none: -1 };
    this._mouseOff = onMouse((m) => {
      const o = m.orbit3d;
      this.controls.mouseButtons = o ? { LEFT: ACT[o.left], MIDDLE: ACT[o.middle], RIGHT: ACT[o.right] } : { LEFT: THREE.MOUSE.ROTATE, MIDDLE: THREE.MOUSE.DOLLY, RIGHT: THREE.MOUSE.PAN };
      this.controls.zoomSpeed = m.zoomSpeed;
      this._wheelFlip = m.wheel === -1;
    });
    // the wheel turned round: a copy of the event with the other sign (a pinch, ctrl+wheel, is never turned round)
    canvas.addEventListener('wheel', (e) => {
      if (!this._wheelFlip || e.ctrlKey || e.ccFlipped) return;
      e.stopImmediatePropagation();
      e.preventDefault();
      const f = new WheelEvent('wheel', { deltaX: e.deltaX, deltaY: -e.deltaY, deltaZ: e.deltaZ, deltaMode: e.deltaMode, clientX: e.clientX, clientY: e.clientY, screenX: e.screenX, screenY: e.screenY, shiftKey: e.shiftKey, altKey: e.altKey, metaKey: e.metaKey, bubbles: true, cancelable: true });
      f.ccFlipped = true;
      canvas.dispatchEvent(f);
    }, { capture: true, passive: false });
    this.controls.addEventListener('change', () => this.render());
    this.controls.addEventListener('start', () => this.onUserMove?.());   // e.g. stop a view-cube turn

    this.scene.add(new THREE.HemisphereLight(0xffffff, 0x8a8f96, 2.2));
    const sun = new THREE.DirectionalLight(0xffffff, 1.6);
    sun.position.set(0.6, 1, 0.45);
    this.scene.add(sun);

    this.root = new THREE.Group();
    this.scene.add(this.root);
    this.layers = new Map();       // model index → { group, meshes, edges, spaceMeshes, batches, storeyGroups, box }
    this.matrices = new Map();     // model index → placement (kept over rebuilds)
    this.hiddenModels = new Set();
    this.meshes = [];
    this.edges = [];
    this.spaceMeshes = [];
    this.highlight = null;
    this.selected = null;          // the first picked key (or null)
    this.selection = new Set();    // every picked key
    this.vis = new Visibility();
    this.batches = [];
    this.edgesOn = true;
    this.displayMode = 'edges';
    this.spacesOn = false;
    this.box = new THREE.Box3();

    this.applyTheme();
    new MutationObserver(() => this.applyTheme())
      .observe(document.documentElement, { attributes: true, attributeFilter: ['data-space'] });

    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(canvas.parentElement);
    this.resize();
    this.bindPicking();
    // 0.8 Track ID: hand the view to the input-device layer (assets/js/app-devices-ui.js) — through OrbitControls as a mouse drag
    // and the wheel move it (rotate/pan speeds, zoom toward the target like this view's own wheel, so (x, y) is not used); while
    // walking an orbit looks round as a drag does and the rest waits; fit = frame what is shown keeping the direction, else Iso
    (window.ccViews ||= []).push({
      el: canvas, kind: '3d',
      orbit: (dx, dy) => {
        if (this.walk) { this.walkLook(dx, dy); return; }
        const c = this.controls, h = canvas.clientHeight || 1;
        if (!c.enabled) return;
        this.onUserMove?.();
        c._rotateLeft(2 * Math.PI * dx * c.rotateSpeed / h); c._rotateUp(2 * Math.PI * dy * c.rotateSpeed / h); c.update();
      },
      pan: (dx, dy) => { const c = this.controls; if (this.walk || !c.enabled) return; this.onUserMove?.(); c._pan(dx * c.panSpeed, dy * c.panSpeed); c.update(); },
      zoom: (f) => { const c = this.controls; if (this.walk || !c.enabled || !(f > 0)) return; this.onUserMove?.(); c._dollyIn(1 / f); c.update(); },
      fit: () => { if (this.walk) return; if (!this.frameKeys(this.shownKeys())) this.view('iso'); },
    });
  }

  /** Background, edge and highlight colours come from the page's paper/model tokens. */
  applyTheme() {
    const cs = getComputedStyle(document.documentElement);
    const token = (n, d) => (cs.getPropertyValue(n).trim() || d);
    this.colors = {
      bg: new THREE.Color(token('--sheet', '#f3f6f8')),
      edge: new THREE.Color(token('--ink', '#1d232b')),
      pick: new THREE.Color(token('--layer-blue', '#2f6fd6')),
      cap: new THREE.Color(token('--ink-2', '#4a5562')),   // the cut: a solid poché in the theme's secondary ink
    };
    for (const o of this.caps || []) if (o.userData.capPlane) o.material.color.copy(this.colors.cap);
    this.scene.background = this.colors.bg;
    for (const e of this.edges) for (const m of e.material) m.color.copy(this.colors.edge);
    if (this.highlight) this.highlight.material.color.copy(this.colors.pick);
    if (this.sectionFrame) this.sectionFrame.material.color.copy(this.colors.pick);
    this.render();
  }

  resize() {
    const host = this.canvas.parentElement;
    const w = Math.max(1, host.clientWidth), h = Math.max(1, host.clientHeight);
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.render();
  }

  render() {
    if (this._raf) return;
    this._raf = requestAnimationFrame(() => {
      this._raf = 0;
      this.renderer.render(this.scene, this.camera);
      if (this.onRender) this.onRender();   // the corner indicator (view cube) follows the camera
    });
  }

  /** Remove every model. */
  clear() {
    this.select(null);
    for (const L of this.layers.values()) this.disposeLayer(L);
    this.layers.clear();
    this.relist();
    this.render();
  }
  disposeLayer(L) {
    for (const m of [...L.meshes, ...L.edges]) { m.geometry.dispose(); for (const mat of [].concat(m.material)) mat.dispose(); }
    L.group.removeFromParent();
  }
  /** The flat lists every other method reads (meshes, edges, spaces, batches, box) from the model layers. */
  relist() {
    const Ls = [...this.layers.values()];
    this.meshes = Ls.flatMap((L) => L.meshes);
    this.edges = Ls.flatMap((L) => L.edges);
    this.spaceMeshes = Ls.flatMap((L) => L.spaceMeshes);
    this.batches = Ls.flatMap((L) => L.batches);
    this.edgesAvailable = Ls.some((L) => L.edges.length);
    this.applyDisplayMode();
    this.box.makeEmpty();
    for (const L of Ls) if (L.group.visible && !L.box.isEmpty()) this.box.union(L.box.clone().applyMatrix4(L.group.matrix));
    if (this.box.isEmpty()) for (const L of Ls) if (L.group.visible) for (const m of L.spaceMeshes) this.box.union(m.geometry.boundingBox.clone().applyMatrix4(L.group.matrix));
    for (const f of this.extraBoxes || []) { const b = f(); if (b && !b.isEmpty()) this.box.union(b); }   // a point cloud (0.5 SG.1)
  }

  /**
   * Show a model (IfcModel.load result). Federation (0.4 B16): each model is a layer, found by its keyBase (model k =
   * k × KEY_SPAN), drawn in its own group with its own placement matrix (setModelMatrix). Without `add` or
   * `keepCamera` every other model goes (a new file); with either, only this model's layer is replaced (an edit rebuild,
   * or another model added to the scene).
   */
  setModel(model, { keepCamera = false, add = false } = {}) {
    const cam = (keepCamera || add) && !this.box.isEmpty() ? { p: this.camera.position.clone(), t: this.controls.target.clone() } : null;
    const mi = Math.floor((model.keyBase || 0) / KEY_SPAN);
    this.select(null);
    if (!keepCamera && !add) {   // a new file: every model goes, with its placement and visibility
      for (const L of this.layers.values()) this.disposeLayer(L);
      this.layers.clear(); this.matrices.clear(); this.hiddenModels.clear();
    }
    else if (this.layers.has(mi)) { const old = this.layers.get(mi); this.disposeLayer(old); this.layers.delete(mi); }
    const group = new THREE.Group();
    group.matrixAutoUpdate = false;
    group.matrix.fromArray(this.matrices.get(mi) || IDENTITY);
    group.visible = this.hiddenModels.has(mi) ? false : true;
    group.userData.mi = mi;
    this.root.add(group);
    const L = { mi, model, group, meshes: [], edges: [], spaceMeshes: [], batches: [], storeyGroups: new Map(), box: new THREE.Box3() };
    this.layers.set(mi, L);
    const drawEdges = model.triangles <= EDGE_LIMIT;
    for (const b of model.batches) {
      let g = L.storeyGroups.get(b.storey);
      if (!g) {
        g = new THREE.Group();
        g.userData.storey = b.storey;
        L.storeyGroups.set(b.storey, g);
        group.add(g);
      }
      L.batches.push(b);
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(b.positions, 3));
      geo.setAttribute('normal', new THREE.BufferAttribute(b.normals, 3));
      geo.setIndex(new THREE.BufferAttribute(b.indices, 1));
      geo.computeBoundingBox();
      geo.computeBoundingSphere();
      const [r, gg, bb, a] = b.color;
      const color = new THREE.Color().setRGB(r, gg, bb, THREE.SRGBColorSpace);
      const mat = this.clipped(new THREE.MeshLambertMaterial({
        color,
        transparent: b.space || a < 1,
        opacity: b.space ? Math.min(a, 0.25) : a,
        depthWrite: !(b.space || a < 1),
        side: THREE.DoubleSide,
        polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1,
      }));
      const ghost = this.clipped(new THREE.MeshLambertMaterial({ color, transparent: true, opacity: GHOST_OPACITY * (b.space ? 0.5 : 1), depthWrite: false, side: THREE.DoubleSide }));
      const mesh = new THREE.Mesh(geo, [mat, ghost]);
      mesh.userData.batch = b;
      mesh.userData.color = color;
      mesh.userData.triIds = b.triIds;
      mesh.userData.space = b.space;
      g.add(mesh);
      L.meshes.push(mesh);
      if (b.space) {
        L.spaceMeshes.push(mesh);
        mesh.visible = this.spacesOn;
      } else {
        L.box.union(geo.boundingBox);
        if (drawEdges) {
          const ed = batchEdges(b, 30);
          const eg = new THREE.BufferGeometry();
          eg.setAttribute('position', new THREE.BufferAttribute(ed.positions, 3));
          eg.computeBoundingSphere();
          const lines = new THREE.LineSegments(eg, [
            this.clipped(new THREE.LineBasicMaterial({ color: this.colors.edge, transparent: true, opacity: 0.55 })),
            this.clipped(new THREE.LineBasicMaterial({ color: this.colors.edge, transparent: true, opacity: 0.08, depthWrite: false })),
          ]);
          lines.userData.edges = ed;
          lines.visible = this.edgesOn;
          g.add(lines);
          L.edges.push(lines);
        }
      }
    }
    this.relist();
    this.applyVisibility(false);
    if (this.colorMap) this.setColors(this.colorMap);   // a rebuild keeps Color by
    if (this.clip.length) this.updateCaps();
    if (cam) { this.camera.position.copy(cam.p); this.controls.target.copy(cam.t); this.controls.update(); this.render(); }
    else this.view('iso');
  }

  /** Take one model out of the scene. */
  removeModel(mi) {
    const L = this.layers.get(mi);
    if (!L) return;
    this.select([...this.selection].filter((k) => Math.floor(k / KEY_SPAN) !== mi));
    this.disposeLayer(L);
    this.layers.delete(mi);
    this.matrices.delete(mi);
    this.hiddenModels.delete(mi);
    this.relist();
    if (this.clip.length) this.updateCaps(); else this.render();
  }
  /** Show or hide a whole model. */
  setModelVisible(mi, on) {
    if (on) this.hiddenModels.delete(mi); else this.hiddenModels.add(mi);
    const L = this.layers.get(mi);
    if (L) L.group.visible = on;
    this.relist();
    this.select([...this.selection].filter((k) => on || Math.floor(k / KEY_SPAN) !== mi));
  }
  /** A model's placement in the scene: a column-major 4 × 4 (viewer space), kept over rebuilds. */
  setModelMatrix(mi, m) {
    this.matrices.set(mi, [...m]);
    const L = this.layers.get(mi);
    if (L) { L.group.matrix.fromArray(m); L.group.matrixWorldNeedsUpdate = true; }
    this.relist();
    if (this.selection.size) this.select([...this.selection]); else this.render();
  }
  modelMatrix(mi) { return this.matrices.get(mi) || IDENTITY; }
  /** Is this object drawn (it and every parent visible)? Raycasting ignores parents' visibility, so picking asks. */
  isShown(o) { for (let x = o; x; x = x.parent) if (!x.visible) return false; return true; }
  /** World-space bounds of elements, over every model (each through its placement), or null. */
  keyBounds(keys) {
    const box = new THREE.Box3();
    for (const L of this.layers.values()) {
      const bb = boundsOf(L.batches, keys);
      if (bb) box.union(new THREE.Box3(new THREE.Vector3(...bb.min), new THREE.Vector3(...bb.max)).applyMatrix4(L.group.matrix));
    }
    return box.isEmpty() ? null : { min: box.min.toArray(), max: box.max.toArray() };
  }

  /** World-space bounds of each element on its own, over every model: Map key → { min, max } (0.8 AC.8, ask-tools.js). */
  keyBoundsMap(keys) {
    const out = new Map(), box = new THREE.Box3();
    for (const L of this.layers.values()) {
      for (const [k, bb] of boundsMapOf(L.batches, keys)) {
        box.set(new THREE.Vector3(...bb.min), new THREE.Vector3(...bb.max)).applyMatrix4(L.group.matrix);
        out.set(k, { min: box.min.toArray(), max: box.max.toArray() });
      }
    }
    return out;
  }

  /** Where the pointer meets the horizontal plane y = h (viewer space), or null. */
  planePoint(clientX, clientY, h) {
    const r = this.canvas.getBoundingClientRect();
    const p = new THREE.Vector2(((clientX - r.left) / r.width) * 2 - 1, -((clientY - r.top) / r.height) * 2 + 1);
    const ray = new THREE.Raycaster();
    ray.setFromCamera(p, this.camera);
    const hit = new THREE.Vector3();
    return ray.ray.intersectPlane(new THREE.Plane(new THREE.Vector3(0, 1, 0), -h), hit) ? hit : null;
  }

  /** Ghost box: 8 corners [x,y,z] in viewer space (bottom 0-3, top 4-7), or null to remove it. */
  setGhost(c) {
    if (!c) {
      if (this.ghost) { this.ghost.traverse((o) => { o.geometry?.dispose(); o.material?.dispose(); }); this.ghost.removeFromParent(); this.ghost = null; }
      this.render();
      return;
    }
    if (!this.ghost) {
      this.ghost = new THREE.Group();
      const faces = new THREE.Mesh(new THREE.BufferGeometry(), new THREE.MeshBasicMaterial({ color: this.colors.pick, transparent: true, opacity: 0.28, side: THREE.DoubleSide, depthWrite: false, depthTest: false }));
      const lines = new THREE.LineSegments(new THREE.BufferGeometry(), new THREE.LineBasicMaterial({ color: this.colors.pick, depthTest: false }));
      faces.renderOrder = lines.renderOrder = 11;
      this.ghost.add(faces, lines);
      this.scene.add(this.ghost);
    }
    const [faces, lines] = this.ghost.children;
    const F = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 0, 1, 5, 0, 5, 4, 1, 2, 6, 1, 6, 5, 2, 3, 7, 2, 7, 6, 3, 0, 4, 3, 4, 7];
    const E = [0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7, 0, 2];   // + a diagonal on the floor
    faces.geometry.setAttribute('position', new THREE.Float32BufferAttribute(F.flatMap((i) => c[i]), 3));
    lines.geometry.setAttribute('position', new THREE.Float32BufferAttribute(E.flatMap((i) => c[i]), 3));
    faces.geometry.attributes.position.needsUpdate = lines.geometry.attributes.position.needsUpdate = true;
    faces.geometry.computeBoundingSphere(); lines.geometry.computeBoundingSphere();
    this.render();
  }

  /** A storey of one model (default the first) on or off. */
  setStoreyVisible(storey, visible, mi = 0) {
    const g = this.layers.get(mi)?.storeyGroups.get(storey);
    if (g) { g.visible = visible; this.render(); }
  }

  setSpacesVisible(on) {
    this.spacesOn = on;
    for (const m of this.spaceMeshes) m.visible = on;
    this.render();
  }

  /**
   * Section plane (three.js clipping planes, on everything the renderer draws: model, edges, highlight).
   *   setSection({ axis: 'top'|'front'|'side', offset, flip })   offset = metres from the model's bottom / front / side
   *   setSection(null)                                            off
   * Top cuts horizontally and keeps what is below; Front keeps what is behind (seen from the Front view);
   * Side keeps what is beyond (seen from the Side view). Flip keeps the other half. `sectionRange(axis)` = [0, size].
   */
  setSection(s) {
    if (this.sectionFrame) { this.sectionFrame.geometry.dispose(); this.sectionFrame.material.dispose(); this.sectionFrame.removeFromParent(); this.sectionFrame = null; }
    this.clipSpec = null; this.clipGroups = null;
    if (!s || this.box.isEmpty()) { this.section = null; this.setClip([]); this.render(); return; }
    if (s.axis === 'box') { this.setSectionBox(s.box, s.cells); return; }
    const k = SECTION_AXES[s.axis] ? s.axis : 'top';
    const { i } = SECTION_AXES[k];
    // in the section's frame (the model's axes, or turned with the building: secBox / toTurned / fromTurned)
    const B = this.secBox();
    const lo = B.min.getComponent(i), hi = B.max.getComponent(i);
    const at = lo + Math.max(0, Math.min(hi - lo, Number(s.offset) || 0));
    const nT = new THREE.Vector3().setComponent(i, s.flip ? 1 : -1);
    const onT = new THREE.Vector3().setComponent(i, at);
    const plane = new THREE.Plane().setFromNormalAndCoplanarPoint(this.turnDir(nT), this.fromTurned(onT));   // kept: n·p + c ≥ 0
    this.section = { axis: k, offset: at - lo, flip: !!s.flip, plane };
    this.setClip([plane]);
    // the plane's outline, nudged onto the kept side so the clipping does not eat it
    const a = B.min.clone(), b = B.max.clone(), c = [];
    const j = (i + 1) % 3, l = (i + 2) % 3, eps = (hi - lo) * 1e-4 + 1e-4, put = at + (s.flip ? eps : -eps);
    for (const [u, v] of [[0, 0], [1, 0], [1, 1], [0, 1]]) {
      const p = new THREE.Vector3();
      p.setComponent(i, put); p.setComponent(j, u ? b.getComponent(j) : a.getComponent(j)); p.setComponent(l, v ? b.getComponent(l) : a.getComponent(l));
      c.push(this.fromTurned(p));
    }
    this.sectionFrame = new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(c), new THREE.LineBasicMaterial({ color: this.colors.pick }));
    this.scene.add(this.sectionFrame);
    this.render();
  }
  /**
   * Section box (0.4 B4) and free-form volumes (0.5 WL.1). `{ box }` = one box: { min: [x, y, z], max: [x, y, z] } in
   * IFC axes (X east, Y north, Z up), metres from the model's own minimum corner — the page's sliders. `{ cells }` = a
   * union of cells (section-volume.js: each a box with tilted faces and extra planes). Kept: inside any cell.
   */
  setSectionBox(b, cellsIn) {
    const cells = cleanVolume(cellsIn || [{ box: b }], this.sizeIfc());
    const B = this.secBox(), lo = B.min, hi = B.max;
    // IFC (x, y, z) → viewer (x, z, −y): IFC Y runs along −viewer Z; the outward normal turned round = what is kept
    // (ifcPoint: in the section's frame, turned with the building when setSectionTurn says so)
    const P = (p) => this.ifcPoint(p);
    const planes = [], groups = [], frame = [];
    const e = (hi.x - lo.x + hi.y - lo.y + hi.z - lo.z) * 1e-5 + 1e-4;
    for (const cell of cells) {
      const pl = cellPlanes(cell), g = [];
      for (const q of pl) { g.push(planes.length); planes.push(new THREE.Plane().setFromNormalAndCoplanarPoint(this.turnDir(new THREE.Vector3(-q.n[0], -q.n[2], q.n[1])), P(q.p))); }
      groups.push(g);
      // the cell's edges, a hair inside (every plane clips the model; the frame is drawn unclipped over it)
      const ph = polyhedron(pl);
      if (!ph.verts.length) continue;
      const c = ph.verts.reduce((s, v) => s.add(P(v)), new THREE.Vector3()).multiplyScalar(1 / ph.verts.length);
      const V = ph.verts.map((v) => { const x = P(v), d = c.clone().sub(x); const l = d.length(); return l > e ? x.add(d.multiplyScalar(e / l)) : x; });
      for (const [a, z] of ph.edges) frame.push(V[a], V[z]);
    }
    this.section = { axis: 'box', box: { min: [...cells[0].box.min], max: [...cells[0].box.max] }, cells, planes, groups, plane: null, empty: !frame.length };
    this.clipGroups = groups;
    this.clipSpec = cells.length > 1 ? modelSpec(groups) : null;
    this.setClip(planes);
    if (frame.length) {
      this.sectionFrame = new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(frame), new THREE.LineBasicMaterial({ color: this.colors.pick }));
      this.scene.add(this.sectionFrame);
    }
    this.render();
  }
  /**
   * A material clipped by the section: `clippingPlanes` is the shared `this.clip`; while the section is a union of cells
   * (`this.clipSpec`), three.js's own test (inside every plane) is swapped for section-volume.js's (inside any cell).
   * `spec` = a fixed spec instead (the cut faces).
   */
  clipped(mat, spec) {
    const get = spec === undefined ? () => this.clipSpec : () => spec;
    if (spec === undefined) mat.clippingPlanes = this.clip;
    mat.onBeforeCompile = (sh) => { const s = get(); if (s) sh.fragmentShader = sh.fragmentShader.replace('#include <clipping_planes_fragment>', clipGlsl(s)); };
    mat.customProgramCacheKey = () => specKey(get());
    return mat;
  }
  /** The section's planes on every material (the shared array changes in place), then the caps. Each plane is moved
   *  CLIP_EPS out of the kept side: a box fitted to the whole model otherwise lies exactly on the outer faces, and the
   *  depth/stencil tests flicker there (speckled walls); half a millimetre is never seen. */
  setClip(planes) {
    this.clip.length = 0;
    this.clip.push(...planes.map((p) => { const q = p.clone(); q.constant += CLIP_EPS; return q; }));
    this.renderer.clippingPlanes = [];
    for (const m of this.meshes) for (const mat of m.material) mat.needsUpdate = true;
    for (const e of this.edges) for (const mat of e.material) mat.needsUpdate = true;
    if (this.highlight) this.highlight.material.needsUpdate = true;
    this.updateCaps();
  }

  /**
   * Filled cut faces (0.4 B5), the stencil method (three.js webgl_clipping_stencil): for each plane, every solid batch
   * is drawn into the stencil only, clipped by THAT plane alone, flipping the stencil's low bit on every surface it
   * crosses — so the bit is set where the plane passes through a solid (an odd number of surfaces behind it); then a
   * quad on the plane (clipped by the other planes) paints there in the cut color and the stencil is cleared for the
   * next plane. Parity, not front/back counting, so faces pointing the wrong way don't matter.
   * Only closed elements count (caps-closed.js): an open surface (tree foliage, terrain, a single-sided panel) would set
   * the bit over its whole outline, and the near cap would paint over it — elements "ghosting" in the cut colour,
   * depending on the view (Discord, 2026-10-14). Spaces and see-through elements are left out too. The stencil parts
   * share the batch's vertices with an index of their own, rebuilt here — every visibility change calls updateCaps().
   */
  updateCaps() {
    for (const o of this.caps) { if (o.userData.capPlane || o.userData.capStencil) { o.geometry.dispose(); } for (const m of [].concat(o.material)) m.dispose(); o.removeFromParent(); }
    this.caps = [];
    if (!this.capsOn || !this.clip.length || this.box.isEmpty()) { this.render(); return; }
    const size = this.box.getSize(new THREE.Vector3()).length() * 2 + 1;
    // Once per set of batches: which elements are open, judged over every batch an element is in (an element of several
    // colours is in several: 0.6 DC.53); then per batch the closed elements' shown triangles, over its own vertices.
    const solid = this.meshes.filter((m) => !m.userData.space && m.userData.batch).map((m) => m.userData.batch);
    if (solid.some((b) => !b.openIds)) { const open = openAcross(solid); for (const b of solid) b.openIds = open; }
    const parts = [];
    for (const m of this.meshes) {
      if (m.userData.space) continue;
      const b = m.userData.batch;
      const idx = m.geometry.index.array;
      const nSolid = m.userData.nSolid ?? idx.length / 3;
      const sel = stencilIndex(idx, nSolid, m.userData.triIds, b ? b.openIds : new Set());
      if (!sel.length) continue;
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', m.geometry.getAttribute('position'));
      geo.setIndex(new THREE.BufferAttribute(sel, 1));
      parts.push({ m, geo });
    }
    const groups = this.clipGroups || [this.clip.map((_, i) => i)];
    groups.forEach((g, gi) => g.forEach((i) => {
      const plane = this.clip[i];
      const order = 20 + i * 2;
      const flip = new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, clippingPlanes: [plane], depthWrite: false, depthTest: false, colorWrite: false,
        stencilWrite: true, stencilWriteMask: 1, stencilFunc: THREE.AlwaysStencilFunc,
        stencilFail: THREE.InvertStencilOp, stencilZFail: THREE.InvertStencilOp, stencilZPass: THREE.InvertStencilOp });
      for (const { m, geo } of parts) {
        const sm = new THREE.Mesh(geo, flip);   // one stencil geometry per batch, shared by every plane's pass
        sm.userData.capStencil = true;
        sm.renderOrder = order;
        sm.frustumCulled = false;
        m.parent.add(sm);
        this.caps.push(sm);
      }
      // the cut face: on this cell's other planes' kept side and — for a union of cells — in no other cell
      const cs = groups.length > 1 ? capSpec(groups, gi, i) : null;
      const capMat = new THREE.MeshBasicMaterial({ color: this.colors.cap, side: THREE.DoubleSide, clippingPlanes: cs ? cs.order.map((k) => this.clip[k]) : this.clip.filter((p) => p !== plane),
        stencilWrite: true, stencilRef: 0, stencilFuncMask: 1, stencilFunc: THREE.NotEqualStencilFunc, stencilFail: THREE.ReplaceStencilOp, stencilZFail: THREE.ReplaceStencilOp, stencilZPass: THREE.ReplaceStencilOp,
        polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 });
      if (cs) this.clipped(capMat, cs.spec);
      const cap = new THREE.Mesh(new THREE.PlaneGeometry(size, size), capMat);
      cap.userData.capPlane = true;
      const at = plane.coplanarPoint(new THREE.Vector3()), c = this.box.getCenter(new THREE.Vector3());
      cap.position.copy(plane.projectPoint(c, at));
      cap.lookAt(cap.position.clone().add(plane.normal));
      cap.renderOrder = order + 1;
      cap.onAfterRender = (r) => r.clearStencil();
      this.scene.add(cap);
      this.caps.push(cap);
    }));
    this.render();
  }
  setCaps(on) { this.capsOn = !!on; this.updateCaps(); }

  /** The model's size along each IFC axis [X, Y, Z] in metres (the section box sliders' range). */
  sizeIfc() {
    if (this.box.isEmpty()) return [0, 0, 0];
    const s = this.secBox().getSize(new THREE.Vector3());
    return [s.x, s.z, s.y];
  }

  // ---- the section's frame (0.5 BM.9): the model's axes, or turned about the vertical with a building turned in its site ----
  /** Turn the section frame by `rad` about the vertical through the model's centre (0 = off). The section in use is not
   *  redrawn here: the page sets it again (its numbers are in the frame). */
  setSectionTurn(rad = 0) {
    this.sectionTurn = Number(rad) || 0;
    this._secBox = null;
  }
  /** The model's bounds in the section frame: the box itself when not turned, else the tight bounds of every vertex. */
  secBox() {
    if (!this.sectionTurn) return this.box;
    const key = this.box.min.toArray().concat(this.box.max.toArray()).join() + '|' + this.sectionTurn + '|' + this.meshes.length;
    if (this._secBox && this._secBoxKey === key) return this._secBox;
    const bb = new THREE.Box3(), v = new THREE.Vector3();
    for (const m of [...this.meshes, ...(this.spaceMeshes || [])]) {
      if (!m.visible && !m.parent?.visible) continue;
      m.updateMatrixWorld();
      const pos = m.geometry.getAttribute('position');
      for (let i = 0; i < pos.count; i++) bb.expandByPoint(this.toTurned(v.fromBufferAttribute(pos, i).applyMatrix4(m.matrixWorld)));
    }
    if (bb.isEmpty()) bb.copy(this.box);
    this._secBox = bb; this._secBoxKey = key;
    return bb;
  }
  /** viewer → the section frame (turned by −sectionTurn about the vertical through the box's centre), and back. */
  toTurned(p) {
    if (!this.sectionTurn) return p.clone();
    const c = this.box.getCenter(new THREE.Vector3()), a = -this.sectionTurn, x = p.x - c.x, z = p.z - c.z;
    return new THREE.Vector3(c.x + x * Math.cos(a) + z * Math.sin(a), p.y, c.z - x * Math.sin(a) + z * Math.cos(a));
  }
  fromTurned(p) {
    if (!this.sectionTurn) return p.clone();
    const c = this.box.getCenter(new THREE.Vector3()), a = this.sectionTurn, x = p.x - c.x, z = p.z - c.z;
    return new THREE.Vector3(c.x + x * Math.cos(a) + z * Math.sin(a), p.y, c.z - x * Math.sin(a) + z * Math.cos(a));
  }
  /** A direction from the section frame into the viewer's (and back: unturnDir). */
  turnDir(d) { if (!this.sectionTurn) return d.clone(); const a = this.sectionTurn; return new THREE.Vector3(d.x * Math.cos(a) + d.z * Math.sin(a), d.y, -d.x * Math.sin(a) + d.z * Math.cos(a)); }
  unturnDir(d) { if (!this.sectionTurn) return d.clone(); const a = -this.sectionTurn; return new THREE.Vector3(d.x * Math.cos(a) + d.z * Math.sin(a), d.y, -d.x * Math.sin(a) + d.z * Math.cos(a)); }
  /** A point of the section box's space (IFC axes, m from the frame's minimum corner) in viewer coordinates. */
  /** 0.8 BIM-FAM-MORE: the inverse of ifcPoint — a scene point [x, y, z] → the grip space's [x, y, z] (IFC axes, metres from the minimum corner). */
  relPoint(s) { const B = this.secBox(), T = this.toTurned(new THREE.Vector3(s[0], s[1], s[2])); return [T.x - B.min.x, B.max.z - T.z, T.y - B.min.y]; }
  ifcPoint(p) { const B = this.secBox(); return this.fromTurned(new THREE.Vector3(B.min.x + p[0], B.min.y + p[2], B.max.z - p[1])); }
  /** World bounds of elements as a section box in IFC axes from the model's minimum corner, with a margin (metres). */
  boxAround(keys, margin = 0.3) {
    let bb = this.keyBounds(keys);
    if (!bb || this.box.isEmpty()) return null;
    if (this.sectionTurn) {   // the pick's corners in the turned frame (a little loose for a pick that is not square to it)
      const q = new THREE.Box3();
      for (const x of [bb.min[0], bb.max[0]]) for (const y of [bb.min[1], bb.max[1]]) for (const z of [bb.min[2], bb.max[2]]) q.expandByPoint(this.toTurned(new THREE.Vector3(x, y, z)));
      bb = { min: q.min.toArray(), max: q.max.toArray() };
    }
    const B = this.secBox(), lo = B.min, hi = B.max, sz = this.sizeIfc();
    const cl = (v, k) => Math.max(0, Math.min(sz[k], v));
    return {
      min: [cl(bb.min[0] - lo.x - margin, 0), cl(hi.z - bb.max[2] - margin, 1), cl(bb.min[1] - lo.y - margin, 2)],
      max: [cl(bb.max[0] - lo.x + margin, 0), cl(hi.z - bb.min[2] + margin, 1), cl(bb.max[1] - lo.y + margin, 2)],
    };
  }
  sectionRange(axis) {
    if (this.box.isEmpty()) return [0, 0];
    const { i } = SECTION_AXES[axis] || SECTION_AXES.top;
    const B = this.secBox();
    return [0, B.max.getComponent(i) - B.min.getComponent(i)];
  }
  /** True when a viewer-space point is on the kept side of the section plane (or there is none). */
  keeps(p) {
    if (!this.section) return true;
    const q = p.isVector3 ? p : new THREE.Vector3(...p);
    const S = this.section;
    if (S.groups) return S.groups.some((g) => g.every((i) => S.planes[i].distanceToPoint(q) >= -1e-6));
    return S.planes ? S.planes.every((pl) => pl.distanceToPoint(q) >= -1e-6) : S.plane.distanceToPoint(q) >= -1e-6;
  }

  /**
   * Section box grips (0.5 WL.2): squares a fixed size on screen, over everything, at IFC rel. points (the section box's
   * space). Faces small, edges a little larger, corners largest; `hover` = the one under the pointer, drawn in the action
   * colour. null = none.
   */
  setGrips(list, hover = -1) {
    if (this.gripObj) { this.gripObj.traverse((o) => { o.geometry?.dispose(); o.material?.dispose(); }); this.gripObj.removeFromParent(); this.gripObj = null; }
    this.grips = list && list.length && !this.box.isEmpty() ? list : null;
    this.gripHover = this.grips ? hover : -1;
    if (!this.grips) { if (this.canvas.style.cursor === 'move') this.canvas.style.cursor = ''; this.render(); return; }
    this.gripObj = new THREE.Group();
    const SIZE = { face: 8, edge: 10, corner: 12 };
    const action = new THREE.Color(getComputedStyle(document.documentElement).getPropertyValue('--action').trim() || '#1d4ed8');
    for (const kind of ['face', 'edge', 'corner', 'hover']) {
      const pts = [];
      this.grips.forEach((g, i) => { if (kind === 'hover' ? i === hover : g.kind === kind && i !== hover) pts.push(...this.ifcPoint(g.p).toArray()); });
      if (!pts.length) continue;
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
      const m = new THREE.Points(geo, new THREE.PointsMaterial({ color: kind === 'hover' ? action : this.colors.pick, size: kind === 'hover' ? 14 : SIZE[kind], sizeAttenuation: false, depthTest: false, transparent: true }));
      m.renderOrder = 30;
      this.gripObj.add(m);
    }
    this.scene.add(this.gripObj);
    this.render();
  }
  /** The grip nearest a page point within `tol` px (corners first when they overlap), or -1. */
  gripAt(clientX, clientY, tol = 9) {
    if (!this.grips) return -1;
    const rank = { corner: 0, edge: 1, face: 2 };
    let best = -1, bd = Infinity;
    this.grips.forEach((g, i) => {
      const s = this.project(this.ifcPoint(g.p).toArray());
      if (!s) return;
      const d = Math.hypot(s.x - clientX, s.y - clientY) + rank[g.kind] * 0.5;
      if (d <= tol + 1 && d < bd) { bd = d; best = i; }
    });
    return best;
  }
  /** The pointer's ray and the view direction in the section box's space: IFC axes, metres from the model's minimum corner. */
  rayIfc(clientX, clientY) {
    const r = this.canvas.getBoundingClientRect(), ray = new THREE.Raycaster();
    this.camera.updateMatrixWorld();
    ray.setFromCamera(new THREE.Vector2(((clientX - r.left) / r.width) * 2 - 1, -((clientY - r.top) / r.height) * 2 + 1), this.camera);
    const B = this.secBox(), lo = B.min, hi = B.max, o = this.toTurned(ray.ray.origin), d = this.unturnDir(ray.ray.direction);
    const v = this.unturnDir(this.camera.getWorldDirection(new THREE.Vector3()));
    return { o: [o.x - lo.x, hi.z - o.z, o.y - lo.y], d: [d.x, -d.z, d.y], view: [v.x, -v.z, v.y] };
  }

  setEdges(on) {
    this.edgesOn = on;
    this.displayMode = on ? 'edges' : 'shaded';
    this.applyDisplayMode();
    this.render();
  }

  setDisplayMode(mode) {
    if (!['shaded', 'edges', 'wireframe'].includes(mode)) return;
    this.displayMode = mode;
    this.edgesOn = mode === 'edges';
    this.applyDisplayMode();
    this.render();
  }

  applyDisplayMode() {
    for (const mesh of this.meshes) for (const material of mesh.material) material.wireframe = this.displayMode === 'wireframe';
    for (const edge of this.edges) edge.visible = this.displayMode === 'edges';
  }

  /** The view presets' frame (0.6 DC.57): turned by `rad` about the vertical, so a building turned in its site is seen
   *  square — Top with its walls along the screen, Front facing its front. The camera is not moved here. */
  setViewTurn(rad = 0) { this.viewTurn = Number(rad) || 0; }

  /** Camera presets around the model's bounding box, in the view frame (setViewTurn). IFC is Z-up; web-ifc hands us Y-up. */
  view(name = 'iso') {
    this.onUserMove?.();   // a preset wins over a view-cube turn still running
    if (this.box.isEmpty()) return;
    const c = this.box.getCenter(new THREE.Vector3());
    const size = this.box.getSize(new THREE.Vector3());
    const radius = Math.max(size.length() / 2, 0.5);
    // 0.7 SU.751: the field of view is vertical; in a pane taller than wide the width is what runs out first (the house was cut off at the side)
    const halfV = THREE.MathUtils.degToRad(this.camera.fov / 2), halfH = Math.atan(Math.tan(halfV) * (this.camera.aspect > 0 ? this.camera.aspect : 1));
    const dist = radius / Math.sin(Math.min(halfV, halfH)) * 1.05;
    const dirs = {
      iso: new THREE.Vector3(1, 0.8, 1),
      top: new THREE.Vector3(0, 1, 0.0001),
      front: new THREE.Vector3(0, 0.05, 1),
      side: new THREE.Vector3(1, 0.05, 0),
    };
    const d = (dirs[name] || dirs.iso).clone().normalize().applyAxisAngle(new THREE.Vector3(0, 1, 0), this.viewTurn);
    this.camera.near = Math.max(dist / 1000, 0.01);
    this.camera.far = dist * 20;
    this.camera.updateProjectionMatrix();
    this.camera.position.copy(c).addScaledVector(d, dist);
    this.controls.target.copy(c);
    this.controls.update();
    this.render();
  }

  bindPicking() {
    const ray = new THREE.Raycaster();
    // Section box grips (0.5 WL.2): a press on a grip is caught on the way down (capture on the canvas's parent), so
    // OrbitControls and the pick below never see it; the drag then follows the window until the button is let go.
    this.canvas.parentElement.addEventListener('pointerdown', (e) => {
      if (!this.grips || !this.onGrip || e.button !== 0 || e.target !== this.canvas || this.walk || this.measuring || this.placing) return;
      const i = this.gripAt(e.clientX, e.clientY, e.pointerType === 'touch' ? 16 : 9);
      if (i < 0) return;
      e.stopPropagation(); e.preventDefault();
      const id = e.pointerId;
      const move = (ev) => { if (ev.pointerId === id) this.onGrip('move', i, ev); };
      const up = (ev) => {
        if (ev.pointerId !== id) return;
        window.removeEventListener('pointermove', move, true); window.removeEventListener('pointerup', up, true); window.removeEventListener('pointercancel', up, true);
        this.onGrip('end', i, ev);
      };
      window.addEventListener('pointermove', move, true); window.addEventListener('pointerup', up, true); window.addEventListener('pointercancel', up, true);
      this.onGrip('start', i, e);
    }, true);
    this.canvas.addEventListener('pointermove', (e) => {
      if (!this.grips || e.buttons) return;
      const i = this.gripAt(e.clientX, e.clientY);
      this.canvas.style.cursor = i >= 0 ? 'move' : '';
      if (i !== this.gripHover) this.setGrips(this.grips, i);
    });
    // Touch (0.4 S.8): OrbitControls turns one finger into orbit and two into pinch + pan. A tap picks (10 px of slack
    // for a finger, 4 px for a mouse); a gesture that ever had two fingers never picks; a long press (LONG_MS, no move)
    // adds the element to the pick or takes it out, as Ctrl+click does.
    const LONG_MS = 500;
    const fingers = new Set();
    let down = null, multi = false, long = 0;
    const slack = (e) => (e.pointerType === 'touch' ? 10 : 4);
    this.canvas.addEventListener('pointerdown', (e) => {
      if (e.pointerType === 'touch') {
        fingers.add(e.pointerId);
        if (fingers.size > 1) { multi = true; clearTimeout(long); down = null; return; }
        multi = false;
      }
      down = { x: e.clientX, y: e.clientY, lx: e.clientX, ly: e.clientY };
      clearTimeout(long);
      if (e.pointerType === 'touch' && !this.walk && !this.walkPick && !this.measuring && !this.placing) {
        long = setTimeout(() => {
          if (!down || multi) return;
          const at = down;
          down = null;   // the lift that follows is not a tap
          const id = this.hitAt(at.x, at.y, ray)?.id ?? null;
          if (id === null) return;
          const next = new Set(this.selection);
          if (next.has(id)) next.delete(id); else next.add(id);
          this.select([...next]);
          navigator.vibrate?.(15);
          this.onPick(this.selected, { added: true, key: id, long: true });
        }, LONG_MS);
      }
    });
    const lift = (e) => { if (e.pointerType === 'touch') fingers.delete(e.pointerId); };
    this.canvas.addEventListener('pointercancel', (e) => { lift(e); clearTimeout(long); down = null; });
    this.canvas.addEventListener('pointermove', (e) => {
      if (down && Math.hypot(e.clientX - down.x, e.clientY - down.y) > slack(e)) clearTimeout(long);
      if (this.walk && down) {   // a drag looks round (a finger too: deltas from the last position, not movementX)
        this.walkLook(e.clientX - down.lx, e.clientY - down.ly);
        down.lx = e.clientX; down.ly = e.clientY;
        return;
      }
      if (this.measuring) { if (!down || Math.hypot(e.clientX - down.x, e.clientY - down.y) <= 4) this.measuring.move(e.clientX, e.clientY, e); return; }
      if (this.placing) this.placing.move(this.planePoint(e.clientX, e.clientY, this.placeY || 0), e);
    });
    this.canvas.addEventListener('pointerleave', (e) => { if (this.placing) this.placing.move(null, e); });
    this.canvas.addEventListener('pointerup', (e) => {
      lift(e);
      clearTimeout(long);
      if (multi) { if (!fingers.size) multi = false; down = null; return; }
      if (!down || Math.hypot(e.clientX - down.x, e.clientY - down.y) > slack(e)) { down = null; return; }
      down = null;
      if (this.walk) return;   // a drag looks round; clicks do nothing while walking
      if (this.walkPick) { if (e.button === 0) { const h = this.hitAt(e.clientX, e.clientY, ray); this.walkPick(h ? h.point : null); } return; }
      if (this.measuring) { if (e.button === 0) this.measuring.click(e.clientX, e.clientY, e); return; }
      if (this.placing) {
        if (e.button === 0) { const pt = this.planePoint(e.clientX, e.clientY, this.placeY || 0); if (pt) this.placing.click(pt, e); }
        return;
      }
      const id = this.hitAt(e.clientX, e.clientY, ray)?.id ?? null;
      // Ctrl/Cmd or Shift + click adds an element to the pick, or takes it out; a click on nothing keeps the pick then.
      if (e.ctrlKey || e.metaKey || e.shiftKey) {
        if (id === null) return;
        const next = new Set(this.selection);
        if (next.has(id)) next.delete(id); else next.add(id);
        this.select([...next]);
      } else this.select(id);
      this.onPick(this.selected, { added: e.ctrlKey || e.metaKey || e.shiftKey, key: id });
    });
  }

  /** The element under a page point: { id, point: [x, y, z] (viewer space) } or null. Skips what a section plane cuts away. */
  hitAt(clientX, clientY, ray = new THREE.Raycaster()) {
    const r = this.canvas.getBoundingClientRect();
    const p = new THREE.Vector2(((clientX - r.left) / r.width) * 2 - 1, -((clientY - r.top) / r.height) * 2 + 1);
    this.camera.updateMatrixWorld();   // as screenOf: the view may have changed since the last render
    ray.setFromCamera(p, this.camera);
    const targets = this.meshes.filter((m) => this.isShown(m));
    const hit = ray.intersectObjects(targets, false).find((h) => h.faceIndex < h.object.userData.nSolid && this.keeps(h.point));
    return hit ? { id: hit.object.userData.triIds[hit.faceIndex], point: hit.point.toArray() } : null;
  }

  /**
   * Draw what this.vis says: each batch's index buffer and the solid / see-through groups, the same for its edges.
   * Call after changing this.vis. The highlight drops elements that are no longer shown solid.
   */
  applyVisibility(render = true) {
    for (const m of this.meshes) {
      const r = batchIndex(m.userData.batch, this.vis);
      const geo = m.geometry;
      if (geo.index.array !== r.index) geo.setIndex(new THREE.BufferAttribute(r.index, 1));
      geo.clearGroups();
      geo.addGroup(0, r.nSolid * 3, 0);
      if (r.nGhost) geo.addGroup(r.nSolid * 3, r.nGhost * 3, 1);
      m.userData.triIds = r.triIds;
      m.userData.nSolid = r.nSolid;
    }
    for (const l of this.edges) {
      const r = edgeIndex(l.userData.edges, this.vis);
      const geo = l.geometry;
      geo.setIndex(new THREE.BufferAttribute(r.index, 1));
      geo.clearGroups();
      geo.addGroup(0, r.nSolid * 2, 0);
      if (r.nGhost) geo.addGroup(r.nSolid * 2, r.nGhost * 2, 1);
    }
    if (this.selection.size) this.select([...this.selection].filter((k) => this.vis.state(k) === SOLID));
    else if (render) this.render();
  }

  /**
   * Color by property: each listed element painted in its color (a per-vertex color attribute on its batch); the rest
   * keep their own. Both materials (solid, see-through) use vertex colors while it is on. null = back to the file's colors.
   */
  setColors(map) {
    this.colorMap = map && map.size ? map : null;
    const c = new THREE.Color();
    for (const m of this.meshes) {
      const b = m.userData.batch, geo = m.geometry, mats = m.material;
      if (!this.colorMap) {
        if (geo.getAttribute('color')) geo.deleteAttribute('color');
        for (const mat of mats) { mat.vertexColors = false; mat.color.copy(m.userData.color); mat.needsUpdate = true; }
        continue;
      }
      const arr = new Float32Array(b.positions.length);
      const own = m.userData.color;
      for (let i = 0; i < arr.length; i += 3) { arr[i] = own.r; arr[i + 1] = own.g; arr[i + 2] = own.b; }
      const E = b.elems;
      for (let r = 0; r < E.ids.length; r++) {
        const hex = this.colorMap.get(E.ids[r]);
        if (!hex) continue;
        c.set(hex);
        for (let v = E.v0[r] * 3, end = (E.v0[r] + E.vn[r]) * 3; v < end; v += 3) { arr[v] = c.r; arr[v + 1] = c.g; arr[v + 2] = c.b; }
      }
      geo.setAttribute('color', new THREE.BufferAttribute(arr, 3));
      for (const mat of mats) { mat.vertexColors = true; mat.color.setRGB(1, 1, 1); mat.needsUpdate = true; }
    }
    this.render();
  }

  /** Keys of every element drawn solid right now (visible storeys; spaces only while they are shown). */
  shownKeys() {
    const out = new Set();
    for (const m of this.meshes) {
      if (!this.isShown(m)) continue;
      for (const k of m.userData.batch.elems.ids) if (this.vis.state(k) === SOLID) out.add(k);
    }
    return out;
  }

  /**
   * What Measure gets under the pointer (world space, metres): the element, the snapped point — a corner of the element
   * within 10 px, else a point on one of its feature edges within 8 px, else the point on the face — and the flat face
   * the pointer is on (its area and triangles, for Face area). Skips see-through elements and what a section cuts away.
   */
  measureAt(clientX, clientY) {
    const r = this.canvas.getBoundingClientRect();
    const ndc = new THREE.Vector2(((clientX - r.left) / r.width) * 2 - 1, -((clientY - r.top) / r.height) * 2 + 1);
    this.camera.updateMatrixWorld();
    const ray = new THREE.Raycaster();
    ray.setFromCamera(ndc, this.camera);
    const h = ray.intersectObjects(this.meshes.filter((m) => this.isShown(m)), false).find((x) => x.faceIndex < x.object.userData.nSolid && this.keeps(x.point));
    // a point cloud's drawn point (0.5 SG.1, this.cloudSnap = pointcloud-three.js pick) wins over a face, unless the
    // model is in front of it; a model corner or edge in reach still wins over the cloud
    const cp = this.cloudSnap?.(clientX, clientY) || null;
    if (cp && (!h || cp.dist <= h.distance + 0.02)) {
      const r = h ? this.measureAt0(h, clientX, clientY) : null;
      if (r && r.snap !== 'face') return r;
      return { key: r?.key ?? null, point: cp.point, snap: 'cloud', face: r?.face ?? null };
    }
    if (!h) return null;
    return this.measureAt0(h, clientX, clientY);
  }
  measureAt0(h, clientX, clientY) {
    const m = h.object, b = m.userData.batch, key = m.userData.triIds[h.faceIndex];
    const run = runOf(b, key);
    if (run < 0) return null;
    // the original triangle (the drawn index buffer is reordered by hide / isolate)
    const cur = m.geometry.index.array, f = h.faceIndex * 3, I = b.indices;
    let tri = -1;
    for (let t = b.elems.t0[run], end = t + b.elems.tn[run]; t < end; t++) if (I[t * 3] === cur[f] && I[t * 3 + 1] === cur[f + 1] && I[t * 3 + 2] === cur[f + 2]) { tri = t; break; }
    const M = m.matrixWorld, w = (x, y, z) => new THREE.Vector3(x, y, z).applyMatrix4(M).toArray();
    // the element's corners and feature edges, cached per element and placement
    this._edgeCache = this._edgeCache || new Map();
    const ck = key + '|' + M.elements.join(',');
    let fe = this._edgeCache.get(ck);
    if (!fe) {
      const local = runEdges(b.positions, I, b.elems.t0[run], b.elems.tn[run], 30);
      const edges = new Float64Array(local.length);
      for (let i = 0; i < local.length; i += 3) edges.set(w(local[i], local[i + 1], local[i + 2]), i);
      const seen = new Map();
      for (let i = 0; i < edges.length; i += 3) { const p = [edges[i], edges[i + 1], edges[i + 2]]; seen.set(p.map((v) => Math.round(v * 1e4)).join(), p); }
      fe = { edges, points: [...seen.values()] };
      if (this._edgeCache.size > 64) this._edgeCache.clear();
      this._edgeCache.set(ck, fe);
    }
    const s = snapTo(fe.points, fe.edges, [clientX, clientY], (p) => { const q = this.project(p); return q ? [q.x, q.y] : null; });
    let face = null;
    if (tri >= 0) {
      const reg = faceRegion(b, run, tri);
      const tris = new Float32Array(reg.tris.length * 9);
      reg.tris.forEach((t, j) => { for (let k = 0; k < 3; k++) tris.set(w(...[0, 1, 2].map((c) => b.positions[I[t * 3 + k] * 3 + c])), j * 9 + k * 3); });
      face = { area: reg.area * Math.abs(M.determinant()) ** (2 / 3), normal: reg.normal, tris };
    }
    return { key, point: s ? s.point : h.point.toArray(), snap: s ? s.kind : 'face', face };
  }

  /**
   * Walk mode (0.4 B18). Start at a point on a floor (world), facing `dir` (horizontal). Eye `height` above the floor;
   * gravity drops you onto the floor below (and up steps of `step`); collision stops you `radius` short of what is ahead,
   * sliding along it. Only what is drawn solid counts (hidden, see-through and cut-away parts are walked through).
   * opts: { height 1.6, speed 1.4 m/s (×3 with Shift), gravity true, collide true }. Keys: W A S D or arrows, Shift runs,
   * Q / E or PageUp / PageDown up and down while gravity is off. A drag looks round.
   */
  startWalk(point, opts = {}) {
    const o = { height: 1.6, speed: 1.4, gravity: true, collide: true, radius: 0.25, step: 0.4, ...opts };
    const d = new THREE.Vector3(); this.camera.getWorldDirection(d);
    const yaw = Math.atan2(-d.x, -d.z);
    this.walk = { o, pos: new THREE.Vector3(point[0], point[1] + o.height, point[2]), yaw, pitch: 0, vy: 0, keys: new Set(), last: 0 };
    this.controls.enabled = false;
    this.walkFrom = { p: this.camera.position.clone(), t: this.controls.target.clone(), near: this.camera.near };
    this.camera.near = 0.05; this.camera.updateProjectionMatrix();
    this.settle();
    this.applyWalk();
    if (!this._walkKeys) {
      const k = (e, on) => {
        if (!this.walk || e.target.closest?.('input, textarea, select')) return;   // i18n-ignore: a CSS selector
        const key = e.key.toLowerCase();
        if (['w', 'a', 's', 'd', 'q', 'e', 'arrowup', 'arrowdown', 'arrowleft', 'arrowright', 'pageup', 'pagedown', 'shift'].includes(key)) {
          if (on) this.walk.keys.add(key); else this.walk.keys.delete(key);
          if (key !== 'shift') e.preventDefault();
          this.walkLoop();
        }
      };
      this._walkKeys = { down: (e) => k(e, true), up: (e) => k(e, false), blur: () => this.walk?.keys.clear() };
      window.addEventListener('keydown', this._walkKeys.down, true);
      window.addEventListener('keyup', this._walkKeys.up, true);
      window.addEventListener('blur', this._walkKeys.blur);
    }
  }
  /** A walk key held by an on-screen button (touch): 'w' 'a' 's' 'd' 'q' 'e', on = pressed. */
  walkKey(key, on) {
    if (!this.walk) return;
    if (on) this.walk.keys.add(key); else this.walk.keys.delete(key);
    this.walkLoop();
  }
  stopWalk() {
    if (!this.walk) return;
    const f = this.walkForward(true);
    this.controls.target.copy(this.walk.pos).addScaledVector(f, 3);
    this.camera.near = this.walkFrom?.near || this.camera.near; this.camera.updateProjectionMatrix();
    this.walk = null;
    this.controls.enabled = true;
    this.controls.update();
    this.render();
  }
  walkForward(withPitch = false) {
    const w = this.walk;
    const c = withPitch ? Math.cos(w.pitch) : 1;
    return new THREE.Vector3(-Math.sin(w.yaw) * c, withPitch ? Math.sin(w.pitch) : 0, -Math.cos(w.yaw) * c).normalize();
  }
  walkLook(dx, dy) {
    const w = this.walk;
    w.yaw -= dx * 0.004;
    w.pitch = Math.max(-1.45, Math.min(1.45, w.pitch - dy * 0.004));
    this.applyWalk();
  }
  applyWalk() {
    const w = this.walk;
    this.camera.position.copy(w.pos);
    this.camera.lookAt(w.pos.clone().add(this.walkForward(true)));
    this.render();
  }
  /** The first solid surface a ray meets (what is drawn solid and kept by a section), or null. */
  walkRay(from, dir, far) {
    const ray = new THREE.Raycaster(from, dir, 0, far);
    const h = ray.intersectObjects(this.meshes.filter((m) => this.isShown(m) && !m.userData.space), false).find((x) => x.faceIndex < x.object.userData.nSolid && this.keeps(x.point));
    return h || null;
  }
  /** Gravity: the floor under the eye (looking down from just above the knees, so a step up is found too). */
  floorUnder(pos) {
    const o = this.walk.o;
    const from = new THREE.Vector3(pos.x, pos.y - o.height + o.step + 0.01, pos.z);
    const h = this.walkRay(from, new THREE.Vector3(0, -1, 0), 200);
    return h ? h.point.y : null;
  }
  /** Put the eye at its height over the floor at once (start, or gravity turned on). No floor: stay. */
  settle() {
    const w = this.walk;
    if (!w.o.gravity) return;
    const fy = this.floorUnder(w.pos);
    if (fy !== null) { w.pos.y = fy + w.o.height; w.vy = 0; }
  }
  walkLoop() {
    if (this._walkRaf || !this.walk) return;
    const tick = (time) => {
      this._walkRaf = 0;
      const w = this.walk;
      if (!w) return;
      const dt = Math.min(0.05, w.last ? (time - w.last) / 1000 : 0.016);
      w.last = time;
      const moving = this.walkStep(dt);
      this.applyWalk();
      if (moving) this._walkRaf = requestAnimationFrame(tick); else w.last = 0;
    };
    this._walkRaf = requestAnimationFrame(tick);
  }
  /** One frame of walking. → true while anything still moves (a key is down, or falling). */
  walkStep(dt) {
    const w = this.walk, o = w.o, K = w.keys;
    const f = this.walkForward(false), r = new THREE.Vector3(-f.z, 0, f.x);
    const v = new THREE.Vector3();
    if (K.has('w') || K.has('arrowup')) v.add(f);
    if (K.has('s') || K.has('arrowdown')) v.sub(f);
    if (K.has('d') || K.has('arrowright')) v.add(r);
    if (K.has('a') || K.has('arrowleft')) v.sub(r);
    let moved = false;
    if (v.lengthSq() > 0) {
      v.normalize().multiplyScalar(o.speed * (K.has('shift') ? 3 : 1) * dt);
      if (o.collide) {
        // look ahead at knee and eye height; stop short of a wall, slide along it
        for (const hgt of [o.step + 0.05, o.height - 0.1]) {
          const from = new THREE.Vector3(w.pos.x, w.pos.y - o.height + hgt, w.pos.z), len = v.length();
          if (!len) break;
          const h = this.walkRay(from, v.clone().normalize(), len + o.radius);
          if (h) {
            const n = h.face ? h.face.normal.clone().transformDirection(h.object.matrixWorld) : v.clone().normalize().negate();
            n.y = 0;
            if (n.lengthSq() < 1e-6) { v.set(0, 0, 0); break; }
            n.normalize();
            v.sub(n.multiplyScalar(v.dot(n)));   // keep only the part along the wall
            const again = this.walkRay(from, v.lengthSq() ? v.clone().normalize() : v, v.length() + o.radius);
            if (again) v.set(0, 0, 0);
          }
        }
      }
      w.pos.add(v);
      moved = true;
    }
    if (o.gravity) {
      const fy = this.floorUnder(w.pos);
      if (fy !== null) {
        const want = fy + o.height;
        if (w.pos.y < want) { w.pos.y = want; w.vy = 0; }   // a step up
        else if (w.pos.y > want + 1e-3) { w.vy -= 9.81 * dt; w.pos.y = Math.max(want, w.pos.y + w.vy * dt); if (w.pos.y === want) w.vy = 0; moved = true; }
      }
    } else {
      if (K.has('q') || K.has('pagedown')) { w.pos.y -= o.speed * dt; moved = true; }
      if (K.has('e') || K.has('pageup')) { w.pos.y += o.speed * dt; moved = true; }
    }
    return moved || K.size > 0;
  }

  /** Page coordinates of a world point, or null behind the camera. */
  project(p) {
    this.camera.updateMatrixWorld();
    const v = new THREE.Vector3(p[0], p[1], p[2]).project(this.camera);
    if (v.z > 1) return null;
    const r = this.canvas.getBoundingClientRect();
    return { x: r.left + (v.x + 1) / 2 * r.width, y: r.top + (1 - v.y) / 2 * r.height };
  }

  /** Measure's drawing: lines (start, end), corner dots, face highlights, a hover marker. Drawn over the model. */
  setMeasureOverlay(o) {
    if (this.measureGroup) { this.measureGroup.traverse((x) => { x.geometry?.dispose(); x.material?.dispose(); }); this.measureGroup.removeFromParent(); this.measureGroup = null; }
    if (!o) { this.render(); return; }
    const g = new THREE.Group();
    const col = this.colors.pick;
    if (o.faces?.length) {
      for (const f of o.faces) {
        const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.BufferAttribute(f, 3));
        const mm = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0.35, side: THREE.DoubleSide, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -3, polygonOffsetUnits: -3 }));
        mm.renderOrder = 30; g.add(mm);
      }
    }
    if (o.lines?.length) {
      const ls = new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(o.lines.flat().map((p) => new THREE.Vector3(...p))), new THREE.LineBasicMaterial({ color: col, depthTest: false }));
      ls.renderOrder = 31; g.add(ls);
    }
    const dots = [...(o.points || []), ...(o.hover ? [o.hover.point] : [])];
    if (dots.length) {
      const pts = new THREE.Points(new THREE.BufferGeometry().setFromPoints(dots.map((p) => new THREE.Vector3(...p))), new THREE.PointsMaterial({ color: col, size: 8, sizeAttenuation: false, depthTest: false }));
      pts.renderOrder = 32; g.add(pts);
    }
    this.measureGroup = g;
    this.scene.add(g);
    this.render();
  }

  /** Page coordinates of the middle of an element's bounding box (tests: click on an element). null without geometry. */
  screenOf(key) {
    const bb = this.keyBounds([key]);
    if (!bb) return null;
    this.camera.updateMatrixWorld();   // a view set this frame is only applied to the matrices on the next render
    const v = new THREE.Vector3((bb.min[0] + bb.max[0]) / 2, (bb.min[1] + bb.max[1]) / 2, (bb.min[2] + bb.max[2]) / 2).project(this.camera);
    const r = this.canvas.getBoundingClientRect();
    return { x: r.left + (v.x + 1) / 2 * r.width, y: r.top + (1 - v.y) / 2 * r.height };
  }

  /** Every element key in the model, shown or not. */
  allKeys() {
    const out = new Set();
    for (const b of this.batches) for (const k of b.elems.ids) out.add(k);
    return out;
  }

  /** Zoom so these elements fill the view, looking the same way as now. → false when none has geometry. */
  frameKeys(keys) {
    const bb = this.keyBounds(keys);
    if (!bb) return false;
    this.onUserMove?.();
    const box = new THREE.Box3(new THREE.Vector3(...bb.min), new THREE.Vector3(...bb.max));
    const c = box.getCenter(new THREE.Vector3());
    const radius = Math.max(box.getSize(new THREE.Vector3()).length() / 2, 0.25);
    const dist = radius / Math.sin(THREE.MathUtils.degToRad(this.camera.fov / 2)) * 1.1;
    const d = this.camera.position.clone().sub(this.controls.target).normalize();
    this.camera.position.copy(c).addScaledVector(d, dist);
    this.controls.target.copy(c);
    this.camera.near = Math.max(dist / 1000, 0.01);
    this.camera.far = Math.max(this.camera.far, dist * 20);
    this.camera.updateProjectionMatrix();
    this.controls.update();
    this.render();
    return true;
  }

  /** Highlight every triangle of the picked elements (a key, a list of keys, or null), across all their batches. */
  select(keys, { also = [] } = {}) {
    if (this.highlight) {
      this.highlight.geometry.dispose();
      this.highlight.material.dispose();
      this.highlight.removeFromParent();
      this.highlight = null;
    }
    const list = keys === null || keys === undefined ? [] : typeof keys === 'number' ? [keys] : [...keys];
    this.selection = new Set(list);
    this.selected = list.length ? list[0] : null;
    if (!list.length) { this.render(); return; }
    const lit = also.length ? new Set([...list, ...also]) : this.selection;   // `also`: highlighted, not picked (a stair's flights)
    const pos = [], q = new THREE.Vector3();
    for (const L of this.layers.values()) {
      const M = L.group.matrix, plain = M.equals(new THREE.Matrix4());
      for (const m of L.meshes) {
        const b = m.userData.batch, E = b.elems, idx = b.indices, p = b.positions;
        for (let r = 0; r < E.ids.length; r++) {
          if (!lit.has(E.ids[r])) continue;
          for (let t = E.t0[r] * 3, tEnd = (E.t0[r] + E.tn[r]) * 3; t < tEnd; t++) {
            const v = idx[t] * 3;
            if (plain) pos.push(p[v], p[v + 1], p[v + 2]);
            else { q.set(p[v], p[v + 1], p[v + 2]).applyMatrix4(M); pos.push(q.x, q.y, q.z); }
          }
        }
      }
    }
    if (!pos.length) { this.render(); return; }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    this.highlight = new THREE.Mesh(geo, this.clipped(new THREE.MeshBasicMaterial({
      color: this.colors.pick, transparent: true, opacity: 0.7, side: THREE.DoubleSide,
      depthTest: true, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2,
    })));
    this.highlight.renderOrder = 10;
    this.scene.add(this.highlight);
    this.render();
  }

  snapshot() {
    this.renderer.render(this.scene, this.camera);
    return this.canvas.toDataURL('image/png');
  }
}
