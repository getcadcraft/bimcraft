/* SPDX-License-Identifier: Apache-2.0 */
/**
 * dwg-view3d.js — the drawing's model space in 3D (dwg-compile3d.js batches) with three.js. Loaded with import()
 * the first time someone switches a drawing to 3D. The camera is ModelCraft's (m3d/camera.js, a byte-identical
 * copy): its matrices go straight into a bare THREE.Camera, so the navigation is the same as every other 3D view:
 *
 *   middle-drag orbits, Shift+middle-drag or right-drag pans, the wheel zooms at the cursor (toward what is under
 *   it); left-drag orbits too (Shift+left pans), a left CLICK picks (0.4 B2); a trackpad's two-finger swipe orbits
 *   (Shift pans) and a pinch zooms (ModelCraft's looksLikePad rule: sideways or fine-grained scrolling); touch: one
 *   finger orbits, two pinch and pan. Standard views Iso/Top/Bottom/Front/Back/Left/Right, perspective or
 *   parallel, zoom to extents. Z up. Colours from the page tokens; re-themes on data-space (paper/model).
 *
 *   const v = new DrawingView3D(canvas);
 *   v.setModel(compiled, hiddenLayers);  v.standard('top');  v.setPersp(false);  v.extents();
 *   v.setLayerVisible('A-WALL', false);  v.syncLayers(hiddenSet);  v.dispose()
 *   v.onRender = () => cube.update();  v.onUserMove = () => cubeOpts.stop();   (bimcraft.js mounts the view cube)
 *   v.onPick = (owner | null, { add }) => …     a click: the model-space entity under the pointer (m.owners index)
 *   v.pick(x, y) → { owner, kind: 'face'|'line', point } | null    (canvas pixels; faces by ray, lines within 6 px)
 *   v.highlight([owners] | null)               draw those entities in the pick colour, over everything
 *   v.setSection({ axis: 'top'|'front'|'side', offset, flip } | null)   a section plane (0.4 B3); offset in drawing units
 *                                              from the bottom / front / side; v.sectionRange(axis) → [0, size]; picking
 *                                              skips what the plane cuts away
 *
 * Geometry is built round the drawing's centre and scaled so its extents are ~100 units across: drawings in
 * state-plane or millimetre coordinates keep their precision in 32-bit floats and the camera's limits hold.
 * Renders on demand (navigation, resize, theme, layers), not in a loop.
 */
import * as THREE from 'three';
import { Camera, VIEWS } from './m3d/camera.js';
import { action3d, wheelFactor } from './input-mouse.js';   // 0.5 IP.1: buttons and wheel from the input profile

export { VIEWS };
const SCENE = 100;   // the drawing's extents in scene units
/** Section axes in scene space (Z up): which coordinate, and which side Top / Front / Side keep. */
const SECTION = { top: { i: 2, keep: -1 }, front: { i: 1, keep: 1 }, side: { i: 0, keep: -1 } };

export class DrawingView3D {
  constructor(canvas) {
    this.canvas = canvas;
    this.cam = new Camera();
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, preserveDrawingBuffer: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.scene = new THREE.Scene();
    this.tcam = new THREE.Camera();
    this.tcam.matrixAutoUpdate = false;
    this.scene.add(new THREE.HemisphereLight(0xffffff, 0x8a8f96, 2.0));
    const sun = new THREE.DirectionalLight(0xffffff, 1.5);
    sun.position.set(0.5, -0.8, 1);
    this.scene.add(sun);
    this.root = new THREE.Group();
    this.scene.add(this.root);
    this.objects = [];       // { obj, layer }
    this.meshes = [];
    this.hidden = new Set();
    this.box = null;         // scene-space bounds { min, max }
    this.picked = new Set();
    this.applyTheme();
    this.themeObserver = new MutationObserver(() => this.applyTheme());
    this.themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-space'] });
    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(canvas.parentElement);
    this.resize();
    this.bind();
    // 0.8 Track ID: hand the view to the input-device layer (assets/js/app-devices-ui.js) — the same camera calls a drag and the
    // wheel make (cam.orbit / cam.pan in px, cam.zoomAt toward what is under the point; k < 1 = closer), fit = extents()
    (window.ccViews ||= []).push({
      el: canvas, kind: '3d',
      orbit: (dx, dy) => { this.onUserMove?.(); this.cam.orbit(dx, dy); this.render(); },
      pan: (dx, dy) => { this.onUserMove?.(); this.cam.pan(dx, dy); this.render(); },
      zoom: (f, x = canvas.clientWidth / 2, y = canvas.clientHeight / 2) => { if (!(f > 0)) return; this.onUserMove?.(); this.cam.zoomAt(1 / f, x, y, this.hit(x, y)); this.render(); },
      fit: () => this.extents(),
    });
  }

  applyTheme() {
    const cs = getComputedStyle(document.documentElement);
    const t = (n, d) => cs.getPropertyValue(n).trim() || d;
    this.colors = { bg: t('--sheet', '#f3f6f8'), ink: t('--ink', '#17202b'), pick: t('--layer-blue', '#2f6fd6') };
    if (this.sectionFrame) this.sectionFrame.material.color.set(this.colors.pick);
    if (this.hl) for (const o of this.hl.children) o.material.color.set(this.colors.pick);
    this.dark = luminance(this.colors.bg) < 0.4;
    this.scene.background = new THREE.Color(this.colors.bg);
    for (const { obj, color, kind } of this.objects) obj.material.color.set(this.color(color, kind));
    this.render();
  }

  /** 'ink' → the theme's ink; pale colours darkened on paper, dark ones lightened on a dark screen (as the 2D view). */
  color(c, kind = 'line') {
    if (c === 'ink') return kind === 'face' ? (this.dark ? '#9aa4b0' : '#c3cad2') : this.colors.ink;
    const L = luminance(c);
    const v = !this.dark && L > 0.6 ? mix(c, '#000000', 0.45) : this.dark && L < 0.12 ? mix(c, '#ffffff', 0.45) : c;
    return kind === 'face' ? mix(v, this.colors.bg, 0.3) : v;   // faces a little lighter, so their edges read
  }

  clear() {
    this.highlight(null);
    if (this.atlas) { this.atlas.dispose(); this.atlas = null; }
    this.textMeshes = 0;
    for (const { obj } of this.objects) { obj.geometry.dispose(); obj.material.dispose(); }
    this.root.clear();
    this.objects = [];
    this.meshes = [];
    this.box = null;
  }

  /** Show a compiled model (compileModel3d); `hidden` = layer names that start off. */
  setModel(m, hidden = new Set()) {
    this.clear();
    this.model = m;
    this.hidden = new Set(hidden);
    const { min, max } = m.bounds;
    if (!(min[0] <= max[0])) { this.render(); return; }
    const c = [(min[0] + max[0]) / 2, (min[1] + max[1]) / 2, (min[2] + max[2]) / 2];
    const span = Math.max(max[0] - min[0], max[1] - min[1], max[2] - min[2]) || 1;
    const s = SCENE / span;
    this.origin = c; this.scale = s;
    const toScene = (src) => {
      const a = new Float32Array(src.length);
      for (let i = 0; i < src.length; i += 3) { a[i] = (src[i] - c[0]) * s; a[i + 1] = (src[i + 1] - c[1]) * s; a[i + 2] = (src[i + 2] - c[2]) * s; }
      return a;
    };
    for (const b of m.batches) {
      if (b.tris.length) {
        const g = new THREE.BufferGeometry();
        g.setAttribute('position', new THREE.BufferAttribute(toScene(b.tris), 3));
        g.computeVertexNormals();   // non-indexed: one normal per face
        const mat = new THREE.MeshLambertMaterial({ color: this.color(b.color, 'face'), side: THREE.DoubleSide,
          polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1 });
        const mesh = new THREE.Mesh(g, mat);
        mesh.userData.owner = b.triOwner;
        this.add(mesh, b, 'face');
        this.meshes.push(mesh);
      }
      if (b.texts?.length) this.addTexts(b, toScene, s);
      if (b.lines.length) {
        const g = new THREE.BufferGeometry();
        g.setAttribute('position', new THREE.BufferAttribute(toScene(b.lines), 3));
        const ls = new THREE.LineSegments(g, new THREE.LineBasicMaterial({ color: this.color(b.color, 'line') }));
        ls.userData.owner = b.lineOwner;
        this.add(ls, b, 'line');
      }
    }
    this.box = { min: min.map((v, k) => (v - c[k]) * s), max: max.map((v, k) => (v - c[k]) * s) };
    this.cam.standard('iso', this.box);
    this.render();
  }
  /**
   * Text in 3D (0.4 B7): each line of text is drawn once into a shared canvas atlas (white on transparent) and shown as a
   * quad at its place — origin o, one height unit along xd (baseline) and yd (up) — tinted with the batch's colour. One
   * mesh per batch and atlas page, so layers turn text off with the rest and a click on text picks its entity.
   */
  addTexts(b, toScene, s) {
    const A = this.atlas || (this.atlas = new TextAtlas());
    const quads = new Map();   // page → { pos[], uv[], owner[] }
    for (const tx of b.texts) {
      const g = A.place(tx.s);
      if (!g) continue;
      const w = g.width, asc = g.ascent, desc = g.descent;   // in units of the text height
      const dx = tx.ha === 1 ? -w / 2 : tx.ha === 2 ? -w : 0;
      const dy = tx.va === 1 ? desc : tx.va === 2 ? -0.5 : tx.va === 3 ? -1 : 0;
      const corner = (u, v) => [0, 1, 2].map((k) => (tx.o[k] + tx.xd[k] * (u + dx) + tx.yd[k] * (v + dy) - this.origin[k]) * s);
      const p00 = corner(0, -desc), p10 = corner(w, -desc), p11 = corner(w, asc), p01 = corner(0, asc);
      let q = quads.get(g.page);
      if (!q) { q = { pos: [], uv: [], owner: [] }; quads.set(g.page, q); }
      q.pos.push(...p00, ...p10, ...p11, ...p00, ...p11, ...p01);
      const [u0, v0, u1, v1] = g.uv;
      q.uv.push(u0, v0, u1, v0, u1, v1, u0, v0, u1, v1, u0, v1);
      q.owner.push(tx.owner, tx.owner);
    }
    for (const [page, q] of quads) {
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.Float32BufferAttribute(q.pos, 3));
      geo.setAttribute('uv', new THREE.Float32BufferAttribute(q.uv, 2));
      const mat = new THREE.MeshBasicMaterial({ map: A.texture(page), color: this.color(b.color, 'line'), transparent: true, alphaTest: 0.25, side: THREE.DoubleSide,
        depthWrite: false, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.userData.owner = Uint32Array.from(q.owner);
      mesh.userData.text = true;
      mesh.renderOrder = 3;
      this.add(mesh, b, 'line');
      this.meshes.push(mesh);   // a click on text picks its entity
      this.textMeshes = (this.textMeshes || 0) + 1;
    }
  }

  add(obj, b, kind) {
    obj.userData.layer = b.layer;
    obj.visible = !this.hidden.has(b.layer);
    obj.frustumCulled = false;
    this.root.add(obj);
    this.objects.push({ obj, color: b.color, kind, layer: b.layer });
  }

  setLayerVisible(name, on) {
    if (on) this.hidden.delete(name); else this.hidden.add(name);
    for (const o of this.objects) if (o.layer === name) o.obj.visible = on;
    this.highlight([...this.picked]);
  }
  syncLayers(hidden) {
    this.hidden = new Set(hidden);
    for (const o of this.objects) o.obj.visible = !this.hidden.has(o.layer);
    this.highlight([...this.picked]);
  }

  /**
   * The entity under a canvas pixel. Faces: the first one the ray meets. Lines: the nearest segment within 6 px on
   * screen. A line wins when it is not behind the face (edges sit on their faces). Hidden layers are skipped.
   */
  pick(x, y, tol = 6) {
    if (!this.box) return null;
    this.draw();   // camera matrices as shown now
    let best = null;
    const r = this.cam.ray(x, y);
    const meshes = this.meshes.filter((m) => m.visible);
    if (meshes.length) {
      const rc = new THREE.Raycaster(new THREE.Vector3(...r.o), new THREE.Vector3(...r.d));
      const h = rc.intersectObjects(meshes, false).find((x) => this.keeps([x.point.x, x.point.y, x.point.z]));
      if (h) best = { owner: h.object.userData.owner[h.faceIndex], kind: 'face', point: [h.point.x, h.point.y, h.point.z], depth: h.distance };
    }
    const vp = new THREE.Matrix4().fromArray(this.cam.proj()).multiply(new THREE.Matrix4().fromArray(this.cam.view())).elements;
    const W = this.canvas.clientWidth, H = this.canvas.clientHeight;
    const proj = (P, i, out) => {
      const px = P[i], py = P[i + 1], pz = P[i + 2];
      const cx = vp[0] * px + vp[4] * py + vp[8] * pz + vp[12], cy = vp[1] * px + vp[5] * py + vp[9] * pz + vp[13];
      const cw = vp[3] * px + vp[7] * py + vp[11] * pz + vp[15];
      if (!(cw > 1e-9)) return false;
      out[0] = (cx / cw + 1) / 2 * W; out[1] = (1 - cy / cw) / 2 * H;
      return true;
    };
    const a = [0, 0], b = [0, 0];
    let line = null;
    for (const { obj, kind } of this.objects) {
      if (kind !== 'line' || !obj.visible || obj.userData.text) continue;
      const P = obj.geometry.attributes.position.array, own = obj.userData.owner;
      for (let i = 0, s = 0; i < P.length; i += 6, s++) {
        if (!proj(P, i, a) || !proj(P, i + 3, b)) continue;
        const dx = b[0] - a[0], dy = b[1] - a[1], l2 = dx * dx + dy * dy;
        const t = l2 > 0 ? Math.max(0, Math.min(1, ((x - a[0]) * dx + (y - a[1]) * dy) / l2)) : 0;
        const d = Math.hypot(a[0] + t * dx - x, a[1] + t * dy - y);
        if (d > tol || (line && d >= line.px)) continue;
        const q = [P[i] + t * (P[i + 3] - P[i]), P[i + 1] + t * (P[i + 4] - P[i + 1]), P[i + 2] + t * (P[i + 5] - P[i + 2])];
        if (!this.keeps(q)) continue;
        line = { owner: own[s], kind: 'line', point: q, px: d, depth: (q[0] - r.o[0]) * r.d[0] + (q[1] - r.o[1]) * r.d[1] + (q[2] - r.o[2]) * r.d[2] };
      }
    }
    const span = Math.hypot(...this.box.max.map((v, k) => v - this.box.min[k]));
    if (line && (!best || line.depth <= best.depth + span * 1e-3)) best = line;
    return best ? { owner: best.owner, kind: best.kind, point: best.point } : null;
  }

  /** Draw these entities (m.owners indexes) in the pick colour over everything; null or [] = none. */
  highlight(owners) {
    if (this.hl) { for (const o of this.hl.children) { o.geometry.dispose(); o.material.dispose(); } this.hl.removeFromParent(); this.hl = null; }
    this.picked = new Set(owners || []);
    if (!this.picked.size) { this.render(); return; }
    const lines = [], tris = [];
    for (const { obj, kind } of this.objects) {
      if (!obj.visible) continue;
      const P = obj.geometry.attributes.position.array, own = obj.userData.owner;
      const asLines = kind === 'line' && !obj.userData.text;   // text quads are triangles
      const per = asLines ? 6 : 9, out = asLines ? lines : tris;
      for (let s = 0; s < own.length; s++) if (this.picked.has(own[s])) for (let k = 0; k < per; k++) out.push(P[s * per + k]);
    }
    this.hl = new THREE.Group();
    this.hl.renderOrder = 20;
    if (tris.length) {
      const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(tris, 3));
      const mm = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ color: this.colors.pick, transparent: true, opacity: 0.45, side: THREE.DoubleSide, depthTest: false }));
      mm.renderOrder = 20; mm.frustumCulled = false; this.hl.add(mm);
    }
    if (lines.length) {
      const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(lines, 3));
      const ll = new THREE.LineSegments(g, new THREE.LineBasicMaterial({ color: this.colors.pick, depthTest: false }));
      ll.renderOrder = 21; ll.frustumCulled = false; this.hl.add(ll);
    }
    this.scene.add(this.hl);
    this.render();
  }

  /** Canvas pixel of a drawing point (drawing units); for tests. */
  screenOf(p) {
    const q = this.toScene(p);
    const vp = new THREE.Matrix4().fromArray(this.cam.proj()).multiply(new THREE.Matrix4().fromArray(this.cam.view())).elements;
    const cx = vp[0] * q[0] + vp[4] * q[1] + vp[8] * q[2] + vp[12], cy = vp[1] * q[0] + vp[5] * q[1] + vp[9] * q[2] + vp[13], cw = vp[3] * q[0] + vp[7] * q[1] + vp[11] * q[2] + vp[15];
    return { x: (cx / cw + 1) / 2 * this.canvas.clientWidth, y: (1 - cy / cw) / 2 * this.canvas.clientHeight };
  }

  standard(name) { this.onUserMove?.(); if (this.box) { this.cam.standard(name, this.box); this.render(); } }
  extents() { this.onUserMove?.(); if (this.box) { this.cam.fit(this.box); this.render(); } }
  setPersp(on) { this.cam.persp = !!on; this.render(); }
  /**
   * Section plane (three.js clipping planes, like the IFC viewer's): Top cuts horizontally and keeps what is below;
   * Front keeps what is behind (seen from the Front view, which looks along +Y); Side keeps what is beyond seen from the
   * Right view (looking along −X). Flip keeps the other side. The plane's outline is drawn on the kept side.
   */
  setSection(s) {
    if (this.sectionFrame) { this.sectionFrame.geometry.dispose(); this.sectionFrame.material.dispose(); this.sectionFrame.removeFromParent(); this.sectionFrame = null; }
    if (!s || !this.box) { this.section = null; this.renderer.clippingPlanes = []; this.render(); return; }
    const k = SECTION[s.axis] ? s.axis : 'top';
    const { i, keep } = SECTION[k];
    const lo = this.box.min[i], hi = this.box.max[i];
    const at = lo + Math.max(0, Math.min(hi - lo, (Number(s.offset) || 0) * this.scale));
    const sign = (s.flip ? -1 : 1) * keep;   // keep: −1 = keep the low side (x ≤ at), +1 = the high side
    const n = new THREE.Vector3().setComponent(i, sign);
    const plane = new THREE.Plane(n, -sign * at);   // kept: n·p + c ≥ 0
    this.section = { axis: k, offset: (at - lo) / this.scale, flip: !!s.flip, plane };
    this.renderer.clippingPlanes = [plane];
    const j = (i + 1) % 3, l = (i + 2) % 3, eps = (hi - lo) * 1e-4 + 1e-4, put = at + sign * eps, c = [];
    for (const [u, v] of [[0, 0], [1, 0], [1, 1], [0, 1]]) {
      const p = new THREE.Vector3();
      p.setComponent(i, put); p.setComponent(j, u ? this.box.max[j] : this.box.min[j]); p.setComponent(l, v ? this.box.max[l] : this.box.min[l]);
      c.push(p);
    }
    this.sectionFrame = new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(c), new THREE.LineBasicMaterial({ color: this.colors.pick }));
    this.sectionFrame.frustumCulled = false;
    this.scene.add(this.sectionFrame);
    this.render();
  }
  /** [0, size] along the axis, in drawing units. */
  sectionRange(axis) {
    if (!this.box) return [0, 0];
    const { i } = SECTION[axis] || SECTION.top;
    return [0, (this.box.max[i] - this.box.min[i]) / this.scale];
  }
  /** Is a scene point on the kept side of the section plane (or is there none)? */
  keeps(p) { return !this.section || this.section.plane.distanceToPoint(new THREE.Vector3(p[0], p[1], p[2])) >= -1e-6; }

  /** A drawing point (drawing units) → scene; for tests. */
  toScene(p) { return [(p[0] - this.origin[0]) * this.scale, (p[1] - this.origin[1]) * this.scale, (p[2] - this.origin[2]) * this.scale]; }

  resize() {
    const host = this.canvas.parentElement;
    const w = Math.max(1, this.canvas.clientWidth || host.clientWidth), h = Math.max(1, this.canvas.clientHeight || host.clientHeight);
    this.renderer.setSize(w, h, false);
    this.cam.setSize(w, h);
    this.render();
  }

  render() {
    if (this._raf) return;
    this._raf = requestAnimationFrame(() => {
      this._raf = 0;
      try { this.draw(); } finally { const w = this.drawnWaiters; this.drawnWaiters = null; w?.forEach((f) => f()); }
    });
  }
  /** Resolves once the next frame is drawn (bimcraft.js times a drawing's first frame). */
  whenDrawn() {
    return new Promise((resolve) => { (this.drawnWaiters ||= []).push(resolve); this.render(); });
  }
  draw() {
    const cam = this.cam;
    if (this.box) cam.clip(Math.hypot(...this.box.max.map((v, k) => v - this.box.min[k])) / 2);
    const tc = this.tcam;
    tc.matrix.fromArray(cam.view()).invert();
    tc.matrixWorld.copy(tc.matrix);
    tc.matrixWorldInverse.fromArray(cam.view());
    tc.projectionMatrix.fromArray(cam.proj());
    tc.projectionMatrixInverse.copy(tc.projectionMatrix).invert();
    this.renderer.render(this.scene, tc);
    this.frames = (this.frames || 0) + 1;
    if (this.onRender) this.onRender();   // the corner indicator (view cube) follows the camera
  }
  snapshot() { this.draw(); return this.canvas.toDataURL('image/png'); }

  /** Where the ray through a pixel first meets a face (scene space), or null. */
  hit(x, y) {
    if (!this.meshes.length) return null;
    const r = this.cam.ray(x, y);
    const rc = new THREE.Raycaster(new THREE.Vector3(...r.o), new THREE.Vector3(...r.d));
    const h = rc.intersectObjects(this.meshes.filter((m) => m.visible), false)[0];
    return h ? [h.point.x, h.point.y, h.point.z] : null;
  }

  bind() {
    const c = this.canvas;
    const pos = (e) => { const r = c.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; };
    let drag = null, pinch = null, longTimer = 0;
    const touches = new Map();
    c.addEventListener('contextmenu', (e) => e.preventDefault());
    c.addEventListener('pointerdown', (e) => {
      const p = pos(e);
      if (e.pointerType === 'touch') {
        touches.set(e.pointerId, p);
        if (touches.size === 2) { drag = null; clearTimeout(longTimer); const [a, b] = [...touches.values()]; pinch = { d: Math.hypot(a.x - b.x, a.y - b.y), c: { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 } }; return; }
        if (touches.size > 2) return;
      }
      if (e.button > 2) return;
      this.onUserMove?.();   // e.g. stop a view-cube turn
      c.setPointerCapture?.(e.pointerId);
      // what this button does comes from the input profile (input-mouse.js); Shift swaps orbit and pan
      let act = e.pointerType === 'touch' ? null : action3d(e.button);
      if (act === null) act = e.button === 2 || e.shiftKey ? 'pan' : 'orbit';   // this view's own: right or Shift pans
      else if (e.shiftKey && (act === 'orbit' || act === 'pan')) act = act === 'orbit' ? 'pan' : 'orbit';
      drag = { x: p.x, y: p.y, pan: act === 'pan', zoom: act === 'zoom', none: act === 'none', x0: p.x, y0: p.y, button: e.button };
      e.preventDefault();
      // touch: a long press without moving adds the object to the pick or takes it out (Ctrl+click), 0.4 S.8
      clearTimeout(longTimer);
      if (e.pointerType === 'touch' && this.onPick) {
        longTimer = setTimeout(() => {
          if (!drag || pinch || Math.hypot(drag.x - drag.x0, drag.y - drag.y0) > 10) return;
          const h = this.pick(drag.x0, drag.y0);
          drag = null;
          if (!h) return;
          navigator.vibrate?.(15);
          this.onPick(h.owner, { add: true, hit: h, long: true });
        }, 500);
      }
    });
    c.addEventListener('pointermove', (e) => {
      const p = pos(e);
      if (e.pointerType === 'touch' && touches.has(e.pointerId)) {
        touches.set(e.pointerId, p);
        if (pinch && touches.size === 2) {
          const [a, b] = [...touches.values()];
          const d = Math.hypot(a.x - b.x, a.y - b.y), m = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
          this.cam.pan(m.x - pinch.c.x, m.y - pinch.c.y);
          if (d > 10 && pinch.d > 10) this.cam.zoomAt(pinch.d / d, m.x, m.y);
          pinch = { d, c: m };
          this.render();
          return;
        }
        if (pinch) return;
      }
      if (!drag) return;
      const dx = p.x - drag.x, dy = p.y - drag.y;
      drag.x = p.x; drag.y = p.y;
      if (drag.none) return;
      if (drag.zoom) this.cam.zoomAt(Math.exp(dy * 0.01), drag.x0, drag.y0);
      else if (drag.pan) this.cam.pan(dx, dy); else this.cam.orbit(dx, dy);
      this.render();
    });
    const end = (e) => {
      clearTimeout(longTimer);
      if (e.pointerType === 'touch') { touches.delete(e.pointerId); if (pinch) { if (!touches.size) pinch = null; return; } }
      // a left click that did not move (a tap too) picks; Ctrl/Cmd adds to the pick or takes out
      if (drag && drag.button === 0 && e.type === 'pointerup') {
        const p = pos(e);
        if (Math.hypot(p.x - drag.x0, p.y - drag.y0) <= (e.pointerType === 'touch' ? 10 : 4) && this.onPick) {
          const h = this.pick(p.x, p.y);
          this.onPick(h ? h.owner : null, { add: e.ctrlKey || e.metaKey, hit: h });
        }
      }
      drag = null;
    };
    c.addEventListener('pointerup', end);
    c.addEventListener('pointercancel', (e) => { touches.delete(e.pointerId); pinch = null; drag = null; });
    // Trackpads (ModelCraft's rule, "auto"): sideways or fine-grained scrolling is a two-finger swipe → orbit
    // (Shift pans) for 400 ms; a pinch arrives as a wheel event with ctrlKey and always zooms.
    let padUntil = 0;
    const looksLikePad = (e) => {
      if (e.deltaMode !== 0) return false;
      if (e.deltaX !== 0 || (e.deltaY % 1 !== 0 && Math.abs(e.deltaY) < 50)) padUntil = e.timeStamp + 400;
      return e.timeStamp < padUntil;
    };
    c.addEventListener('wheel', (e) => {
      e.preventDefault();
      if (!e.ctrlKey && looksLikePad(e)) {
        if (e.shiftKey) this.cam.pan(-e.deltaX, -e.deltaY);
        else this.cam.orbit(-e.deltaX * 0.6, -e.deltaY * 0.6);
        this.render();
        return;
      }
      const p = pos(e);
      const k = Math.exp((e.deltaMode === 1 ? e.deltaY * 16 : e.deltaY) * (e.ctrlKey ? 0.01 : 0.0015) * (e.ctrlKey ? 1 : wheelFactor()));
      this.cam.zoomAt(k, p.x, p.y, this.hit(p.x, p.y));
      this.render();
    }, { passive: false });
  }

  dispose() {
    this.clear();
    this.themeObserver.disconnect();
    this.resizeObserver.disconnect();
    this.renderer.dispose();
  }
}

/**
 * Pages of text drawn once each: white letters on transparent, Helvetica/Arial (as the 2D view), FONT px high. place(s)
 * → { page, uv: [u0, v0, u1, v1], width, ascent, descent } with sizes in units of the text height (cap height = 1).
 */
const FONT = 44, PAGE = 2048, ROW = 64;
class TextAtlas {
  constructor() { this.pages = []; this.cache = new Map(); }
  newPage() {
    const c = document.createElement('canvas');
    c.width = PAGE; c.height = PAGE;
    const g = c.getContext('2d');
    g.font = FONT + 'px Helvetica, Arial, sans-serif';   // i18n-ignore: a CSS font, not prose
    g.textBaseline = 'alphabetic';
    g.fillStyle = '#ffffff';
    const cap = g.measureText('H').actualBoundingBoxAscent || FONT * 0.72;
    const p = { c, g, x: 0, y: 0, cap, tex: null };
    this.pages.push(p);
    return p;
  }
  place(s) {
    if (this.cache.has(s)) return this.cache.get(s);
    let p = this.pages[this.pages.length - 1] || this.newPage();
    let w = Math.ceil(p.g.measureText(s).width) + 4;
    if (w > PAGE) { s = s.slice(0, Math.floor(s.length * PAGE / w)); w = PAGE; }
    if (p.x + w > PAGE) { p.x = 0; p.y += ROW; }
    if (p.y + ROW > PAGE) { if (this.pages.length >= 16) return null; p = this.newPage(); }
    const base = p.y + ROW - 16;   // baseline inside the row: room for descenders
    p.g.fillText(s, p.x + 2, base);
    const g = { page: this.pages.indexOf(p), uv: [p.x / PAGE, 1 - (p.y + ROW) / PAGE, (p.x + w) / PAGE, 1 - p.y / PAGE],
      width: w / p.cap, ascent: (base - p.y) / p.cap, descent: (p.y + ROW - base) / p.cap };
    p.x += w;
    if (p.tex) p.tex.needsUpdate = true;
    this.cache.set(s, g);
    return g;
  }
  texture(i) {
    const p = this.pages[i];
    if (!p.tex) { p.tex = new THREE.CanvasTexture(p.c); p.tex.anisotropy = 4; p.tex.colorSpace = THREE.SRGBColorSpace; }
    p.tex.needsUpdate = true;
    return p.tex;
  }
  dispose() { for (const p of this.pages) p.tex?.dispose(); }
}

function rgb(hex) {
  const h = String(hex).replace('#', '');
  if (!/^[0-9a-f]{6}$/i.test(h)) return [128, 128, 128];
  return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16));
}
function luminance(hex) {
  const [r, g, b] = rgb(hex).map((v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
function mix(a, b, t) {
  const x = rgb(a), y = rgb(b);
  return '#' + x.map((v, i) => Math.round(v + (y[i] - v) * t).toString(16).padStart(2, '0')).join('');
}
