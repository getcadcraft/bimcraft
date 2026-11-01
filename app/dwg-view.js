/* SPDX-License-Identifier: Apache-2.0 */
/**
 * dwg-view.js — draws a compiled drawing (dwg-compile.js) on a 2D canvas: model space or one
 * sheet (layout) at a time, pan by dragging, zoom at the cursor with the wheel, fit, layers on
 * and off, and a live coordinate readout. Sheets show their paper and the model through each
 * viewport (clipped, scaled, twisted). Colours follow the page's paper/model theme: ACI 7 is
 * ink, and pale colours are darkened on paper (and dark ones lightened on a dark screen) so
 * yellow stays readable on white.
 *
 * Print view (`setPrint(true)`) shows the drawing as it prints: black on white paper, layers that
 * never print hidden, and line weights. On a sheet a weight is its true width on paper; it never
 * draws thinner than its screen weight (≤ 0.25 mm = 1 px, 0.5 mm = 2 px …), which is all model
 * space uses. Raster images are drawn from the files handed to `setImages()` (else their frame).
 *
 *   const v = new DrawingView(canvas, { onCursor: (x, y) => … });
 *   v.setDrawing(drawing);  v.setSpace('model');  v.setLayerVisible('A-WALL', false);  v.fit();
 *   v.setPrint(true);  v.setImages(new Map([[ref, imageBitmap]]));
 *   v.focusModelPoint(x, y, sheetKey);   // go to a model point (on that sheet if it shows it) and ring it
 */

import { PadDetector } from './wheel-pad.js';   // 0.8 D7.56 (CadCraft's copy, byte-identical): a trackpad's two-finger swipe pans
import { wheelFactor } from './input-mouse.js';   // 0.5 IP.1: buttons and wheel from the input profile

export class DrawingView {
  constructor(canvas, { onCursor = () => {} } = {}) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.onCursor = onCursor;
    this.drawing = null;
    this.space = null;
    this.hidden = new Set();
    this.noPlot = new Set();
    this.print = false;
    this.images = new Map();      // image ref → ImageBitmap (absent: draw the frame)
    this.cx = 0; this.cy = 0; this.zoom = 1;
    this.paths = new WeakMap();   // batch → { origin, lines: Path2D, fills: [{ path, pattern }] }
    this.raf = 0;
    this.theme();
    new MutationObserver(() => { this.theme(); this.render(); })
      .observe(document.documentElement, { attributes: true, attributeFilter: ['data-space'] });
    new ResizeObserver(() => this.resize()).observe(canvas.parentElement);
    this.bind();
    this.resize();
    // 0.8 Track ID: hand the view to the input-device layer (assets/js/app-devices-ui.js) — 2D: pan as a drag does, zoom as the
    // wheel does (the drawing point under (x, y) stays put, same limits), fit = fit() (Zoom extents / double-click)
    (window.ccViews ||= []).push({
      el: canvas, kind: '2d',
      pan: (dx, dy) => { this.cx -= dx / this.zoom; this.cy += dy / this.zoom; this.render(); },
      zoom: (f, x = canvas.clientWidth / 2, y = canvas.clientHeight / 2) => {
        if (!(f > 0)) return;
        const [wx, wy] = this.toWorld(x, y);
        this.zoom = Math.min(Math.max(this.zoom * f, 1e-9), 1e9);
        this.cx = wx - (x - canvas.clientWidth / 2) / this.zoom;
        this.cy = wy + (y - canvas.clientHeight / 2) / this.zoom;
        this.render();
      },
      fit: () => this.fit(),
    });
  }

  theme() {
    const cs = getComputedStyle(document.documentElement);
    const t = (n, d) => cs.getPropertyValue(n).trim() || d;
    this.colors = { bg: t('--sheet', '#f3f6f8'), paper: t('--sheet-2', '#ffffff'), ink: t('--ink', '#17202b'), line: t('--line', '#7a8796'), grid: t('--grid', '#d5dde5') };
    this.action = t('--action', '#1f5fd1');
    // Print view is paper whatever the page theme: white sheet, black ink, a grey desk round sheets.
    if (this.print) this.colors = { bg: this.space?.kind === 'paper' ? '#c9ced3' : '#ffffff', paper: '#ffffff', ink: '#000000', line: '#80868c', grid: '#d5dde5' };
    this.dark = luminance(this.colors.bg) < 0.4;
    this.colorCache = new Map();
  }

  setDrawing(drawing) {
    this.drawing = drawing;
    this.hidden = new Set(drawing.layers.filter((l) => !l.on).map((l) => l.name));
    this.noPlot = new Set(drawing.layers.filter((l) => l.plot === false).map((l) => l.name));
    this.mark = null;
    this.setSpace(drawing.spaces[0]?.key);
  }

  setSpace(key) {
    this.space = this.drawing?.spaces.find((s) => s.key === key) || null;
    if (this.print) this.theme();   // the desk colour differs between model and sheets
    this.fit();
  }

  /**
   * Show a model-space point: on sheet `sheetKey` through the viewport that shows it, else in model
   * space; zoomed in a little and marked with a ring until another point is shown or the file changes.
   */
  focusModelPoint(x, y, sheetKey) {
    let key = 'model', px = x, py = y;
    const sheet = sheetKey && this.drawing?.spaces.find((s) => s.key === sheetKey);
    if (sheet) {
      for (const vp of sheet.viewports) {
        const m = vpMatrix(vp), qx = m[0] * x + m[2] * y + m[4], qy = m[1] * x + m[3] * y + m[5];
        if (Math.abs(qx - vp.cx) <= vp.w / 2 && Math.abs(qy - vp.cy) <= vp.h / 2) { key = sheet.key; px = qx; py = qy; break; }
      }
    }
    this.space = this.drawing?.spaces.find((s) => s.key === key) || this.space;
    if (this.print) this.theme();
    const b = this.space.kind === 'paper' && this.space.paper ? this.space.paper : this.space.bounds;
    const span = Math.max(b.maxX - b.minX, b.maxY - b.minY) / (this.space.kind === 'paper' ? 8 : 30);
    const W = this.canvas.clientWidth || 1, H = this.canvas.clientHeight || 1;
    this.zoom = Math.min(W, H) / (span || 1);
    this.cx = px; this.cy = py;
    this.mark = { key, x: px, y: py };
    this.render();
    return key;
  }

  setPrint(on) {
    this.print = !!on;
    this.theme();
    this.render();
  }

  setImages(map) {
    this.images = map || new Map();
    this.render();
  }

  setLayerVisible(name, on) {
    if (on) this.hidden.delete(name); else this.hidden.add(name);
    this.render();
  }

  layerVisible(name) { return !this.hidden.has(name); }

  /** Zoom to the drawing (model) or the sheet (layout). */
  fit() {
    const s = this.space;
    if (!s) return this.render();
    const b = s.kind === 'paper' && s.paper ? s.paper : s.bounds;
    if (!Number.isFinite(b.minX)) { this.cx = 0; this.cy = 0; this.zoom = 1; return this.render(); }
    const w = Math.max(b.maxX - b.minX, 1e-6), h = Math.max(b.maxY - b.minY, 1e-6);
    const W = this.canvas.clientWidth || 1, H = this.canvas.clientHeight || 1;
    this.zoom = Math.min(W / w, H / h) * 0.92;
    this.cx = (b.minX + b.maxX) / 2;
    this.cy = (b.minY + b.maxY) / 2;
    this.render();
  }

  resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const W = this.canvas.clientWidth, H = this.canvas.clientHeight;
    this.canvas.width = Math.max(1, Math.round(W * dpr));
    this.canvas.height = Math.max(1, Math.round(H * dpr));
    this.dpr = dpr;
    this.render();
  }

  toWorld(px, py) {
    const W = this.canvas.clientWidth, H = this.canvas.clientHeight;
    return [this.cx + (px - W / 2) / this.zoom, this.cy - (py - H / 2) / this.zoom];
  }

  bind() {
    const c = this.canvas;
    let drag = null;
    // Touch (0.4 S.8): one finger pans; two pinch-zoom about their middle and pan with it; a double tap fits.
    const touches = new Map();   // pointerId → {x, y} on the canvas
    let pinch = null, lastTap = null;
    const local = (e) => { const r = c.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; };
    c.addEventListener('pointerdown', (e) => {
      if (e.pointerType === 'touch') {
        touches.set(e.pointerId, local(e));
        if (touches.size === 2) {
          drag = null;
          const [a, b] = [...touches.values()];
          pinch = { d: Math.hypot(a.x - b.x, a.y - b.y), m: { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 } };
          return;
        }
        if (touches.size > 2) return;
      }
      drag = { x: e.clientX, y: e.clientY, cx: this.cx, cy: this.cy, touch: e.pointerType === 'touch', t: performance.now() };
      c.setPointerCapture(e.pointerId);
      c.classList.add('is-panning');
    });
    c.addEventListener('pointermove', (e) => {
      if (e.pointerType === 'touch' && touches.has(e.pointerId)) {
        touches.set(e.pointerId, local(e));
        if (pinch && touches.size === 2) {
          const [a, b] = [...touches.values()];
          const d = Math.hypot(a.x - b.x, a.y - b.y), m = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
          const [wx, wy] = this.toWorld(pinch.m.x, pinch.m.y);   // the drawing point under the old middle …
          if (d > 10 && pinch.d > 10) this.zoom = Math.min(Math.max(this.zoom * d / pinch.d, 1e-9), 1e9);
          const W = c.clientWidth, H = c.clientHeight;          // … ends up under the new middle
          this.cx = wx - (m.x - W / 2) / this.zoom;
          this.cy = wy + (m.y - H / 2) / this.zoom;
          pinch = { d, m };
          this.render();
          return;
        }
        if (pinch) return;
      }
      const r = c.getBoundingClientRect();
      const [wx, wy] = this.toWorld(e.clientX - r.left, e.clientY - r.top);
      this.onCursor(wx, wy);
      if (!drag) return;
      this.cx = drag.cx - (e.clientX - drag.x) / this.zoom;
      this.cy = drag.cy + (e.clientY - drag.y) / this.zoom;
      this.render();
    });
    const end = (e) => {
      if (e && e.pointerType === 'touch') {
        touches.delete(e.pointerId);
        if (pinch) { if (!touches.size) pinch = null; drag = null; c.classList.remove('is-panning'); return; }
        // a double tap (two short taps close together) fits, as a double-click does
        if (e.type === 'pointerup' && drag && Math.hypot(e.clientX - drag.x, e.clientY - drag.y) < 10 && performance.now() - drag.t < 300) {
          const now = performance.now();
          if (lastTap && now - lastTap.t < 350 && Math.hypot(e.clientX - lastTap.x, e.clientY - lastTap.y) < 30) { lastTap = null; this.fit(); }
          else lastTap = { t: now, x: e.clientX, y: e.clientY };
        }
      }
      drag = null; c.classList.remove('is-panning');
    };
    c.addEventListener('pointerup', end);
    c.addEventListener('pointercancel', end);
    const pad = new PadDetector();
    c.addEventListener('wheel', (e) => {
      e.preventDefault();
      if (pad.isSwipe(e)) { this.cx -= -e.deltaX / this.zoom; this.cy += -e.deltaY / this.zoom; this.render(); return; }   // D7.56: two fingers pan, a pinch and a mouse wheel zoom
      const r = c.getBoundingClientRect(), px = e.clientX - r.left, py = e.clientY - r.top;
      const [wx, wy] = this.toWorld(px, py);
      const f = Math.exp(-Math.sign(e.deltaY) * Math.min(Math.abs(e.deltaY), 120) / 120 * 0.2 * wheelFactor());   // 0.5 IP.1: the profile's wheel
      this.zoom = Math.min(Math.max(this.zoom * f, 1e-9), 1e9);
      const W = c.clientWidth, H = c.clientHeight;   // keep the point under the cursor still
      this.cx = wx - (px - W / 2) / this.zoom;
      this.cy = wy + (py - H / 2) / this.zoom;
      this.render();
    }, { passive: false });
    c.addEventListener('dblclick', () => this.fit());
  }

  render() {
    if (this.raf) return;
    this.raf = requestAnimationFrame(() => {
      this.raf = 0;
      try { if (!this.canvas.hidden) this.draw(); } finally {   // hidden behind the 3D view: drawn when it shows again (resize)
        const w = this.drawnWaiters; this.drawnWaiters = null; w?.forEach((f) => f()); }
    });
  }

  /** Resolves once the next frame is drawn: a drawing's first frame builds its paths, the slow part on a big file. */
  whenDrawn() {
    return new Promise((resolve) => { (this.drawnWaiters ||= []).push(resolve); this.render(); });
  }

  // ---- drawing ----

  draw() {
    const { ctx, dpr } = this;
    const W = this.canvas.clientWidth, H = this.canvas.clientHeight;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.fillStyle = this.colors.bg;
    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    const s = this.space;
    if (!s) return;
    // world → device pixels
    const view = [this.zoom * dpr, 0, 0, -this.zoom * dpr, (W / 2 - this.cx * this.zoom) * dpr, (H / 2 + this.cy * this.zoom) * dpr];

    if (s.kind === 'paper') {
      if (s.paper) {   // the sheet itself
        this.setT(view);
        ctx.fillStyle = this.colors.paper;
        ctx.fillRect(s.paper.minX, s.paper.minY, s.paper.maxX - s.paper.minX, s.paper.maxY - s.paper.minY);
        ctx.lineWidth = 1 / (this.zoom);
        ctx.strokeStyle = this.colors.line;
        ctx.strokeRect(s.paper.minX, s.paper.minY, s.paper.maxX - s.paper.minX, s.paper.maxY - s.paper.minY);
      }
      const model = this.drawing.spaces.find((x) => x.kind === 'model');
      for (const vp of s.viewports) {
        if (!model) break;
        const k = vp.h / vp.viewHeight, m2p = vpMatrix(vp);
        ctx.save();
        this.setT(view);
        ctx.beginPath();
        ctx.rect(vp.cx - vp.w / 2, vp.cy - vp.h / 2, vp.w, vp.h);
        ctx.clip();
        this.drawBatches(model, mul(view, m2p), this.zoom * k, this.zoom / mmPer(s));
        if (vp.blank) {   // looks at an empty part of the model: its frame, dashed, so the sheet doesn't look broken (bimcraft.js says why)
          this.setT(view);   // drawBatches ends in screen space (its text pass)
          ctx.lineWidth = 1 / this.zoom;
          ctx.setLineDash([6 / this.zoom, 4 / this.zoom]);
          ctx.strokeStyle = this.colors.line;
          ctx.strokeRect(vp.cx - vp.w / 2, vp.cy - vp.h / 2, vp.w, vp.h);
          ctx.setLineDash([]);
        }
        ctx.restore();
      }
    }
    this.drawBatches(s, view, this.zoom, s.kind === 'paper' ? this.zoom / mmPer(s) : 0);
    if (this.mark && this.mark.key === s.key) {   // the ring round a point picked from a list
      const X = (W / 2 + (this.mark.x - this.cx) * this.zoom) * dpr, Y = (H / 2 - (this.mark.y - this.cy) * this.zoom) * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.strokeStyle = this.action;
      ctx.lineWidth = 3 * dpr;
      ctx.beginPath(); ctx.arc(X, Y, 22 * dpr, 0, Math.PI * 2); ctx.stroke();
      ctx.lineWidth = 1 * dpr;
      ctx.beginPath(); ctx.arc(X, Y, 30 * dpr, 0, Math.PI * 2); ctx.stroke();
    }
  }

  setT(m) { this.ctx.setTransform(m[0], m[1], m[2], m[3], m[4], m[5]); }

  /**
   * All visible batches of a space, with `m` = world → device, `pxPerUnit` = screen px per world unit
   * and `pxPerMm` = screen px per millimetre of paper (0 in model space: weights in screen px only).
   */
  drawBatches(space, m, pxPerUnit, pxPerMm = 0) {
    const { ctx } = this;
    const texts = [];
    const shown = (layer) => !this.hidden.has(layer) && !(this.print && this.noPlot.has(layer));
    for (const im of space.images || []) {
      if (!shown(im.layer)) continue;
      this.setT(mul(m, im.m));
      const bmp = this.images.get(im.ref);
      if (bmp) { ctx.imageSmoothingQuality = 'high'; ctx.drawImage(bmp, 0, 0, im.w, im.h); }
      else {   // picture file not found: its frame, as AutoCAD shows it
        const k = Math.hypot(im.m[0], im.m[1]) * pxPerUnit || 1;
        ctx.lineWidth = 1 / k;
        ctx.strokeStyle = this.colors.line;
        ctx.strokeRect(0, 0, im.w, im.h);
      }
    }
    for (const b of space.batches.values()) {
      if (!shown(b.layer)) continue;
      const p = this.pathsFor(b);
      const color = this.color(b.color);
      // Paths are stored relative to an origin near the data (keeps float precision when zoomed in).
      this.setT(mul(m, [1, 0, 0, 1, p.origin[0], p.origin[1]]));
      for (const f of p.fills) {
        ctx.globalAlpha = f.pattern ? 0.18 : 1;
        ctx.fillStyle = color;
        ctx.fill(f.path, 'evenodd');
      }
      ctx.globalAlpha = 1;
      if (p.lines) {
        ctx.strokeStyle = color;
        // a hairline at any zoom; in print view the line weight
        ctx.lineWidth = (this.print ? Math.max(Math.max(1, Math.round((b.lw ?? 0.25) / 0.25)), (b.lw ?? 0) * pxPerMm) : 1) / pxPerUnit;
        ctx.lineJoin = 'round';
        ctx.stroke(p.lines);
      }
      if (b.texts.length) texts.push([b, color]);
    }
    // Text last, in screen space so it stays crisp; skipped when smaller than ~2 px.
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    const dpr = this.dpr;
    for (const [b, color] of texts) {
      ctx.fillStyle = color;
      for (const t of b.texts) {
        const px = t.h * pxPerUnit;
        if (px < 2 || px > 4000) continue;
        const X = (m[0] * t.x + m[2] * t.y + m[4]), Y = (m[1] * t.x + m[3] * t.y + m[5]);
        const ang = Math.atan2(-(m[1] * Math.cos(t.rot) + m[3] * Math.sin(t.rot)), m[0] * Math.cos(t.rot) + m[2] * Math.sin(t.rot));
        ctx.save();
        ctx.translate(X, Y);
        ctx.rotate(-ang);
        if (t.mirror) ctx.scale(-1, 1);
        ctx.font = (px * dpr * 1.1).toFixed(2) + 'px "Archivo Narrow", "Arial Narrow", Arial, sans-serif';   // i18n-ignore: CSS font list
        ctx.textAlign = ['left', 'center', 'right'][t.ha] || 'left';
        ctx.textBaseline = ['alphabetic', 'bottom', 'middle', 'top'][t.va] || 'alphabetic';
        ctx.fillText(t.s, 0, 0);
        ctx.restore();
      }
    }
  }

  pathsFor(b) {
    let p = this.paths.get(b);
    if (p) return p;
    const first = b.lines[0] || b.fills[0]?.rings[0] || [0, 0];
    const ox = first[0] || 0, oy = first[1] || 0;
    let lines = null;
    if (b.lines.length) {
      lines = new Path2D();
      for (const pl of b.lines) {
        lines.moveTo(pl[0] - ox, pl[1] - oy);
        for (let i = 2; i < pl.length; i += 2) lines.lineTo(pl[i] - ox, pl[i + 1] - oy);
      }
    }
    const fills = b.fills.map((f) => {
      const path = new Path2D();
      for (const r of f.rings) {
        path.moveTo(r[0] - ox, r[1] - oy);
        for (let i = 2; i < r.length; i += 2) path.lineTo(r[i] - ox, r[i + 1] - oy);
        path.closePath();
      }
      return { path, pattern: f.pattern };
    });
    p = { origin: [ox, oy], lines, fills };
    this.paths.set(b, p);
    return p;
  }

  /** 'ink' → the theme's ink; other colours adjusted for contrast with the background. */
  color(c) {
    let v = this.colorCache.get(c);
    if (v) return v;
    if (c === 'ink' || this.print) v = this.colors.ink;
    else {
      const L = luminance(c);
      v = !this.dark && L > 0.6 ? mix(c, '#000000', 0.45) : this.dark && L < 0.12 ? mix(c, '#ffffff', 0.45) : c;
    }
    this.colorCache.set(c, v);
    return v;
  }
}

function mul(p, q) {
  return [
    p[0] * q[0] + p[2] * q[1], p[1] * q[0] + p[3] * q[1],
    p[0] * q[2] + p[2] * q[3], p[1] * q[2] + p[3] * q[3],
    p[0] * q[4] + p[2] * q[5] + p[4], p[1] * q[4] + p[3] * q[5] + p[5],
  ];
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
/** Millimetres per paper unit of a sheet (inches unless the compiler found millimetres). */
function mmPer(space) { return space.paperUnit === 'mm' ? 1 : 25.4; }

/** A viewport's model → paper transform: about the view centre, scaled to the viewport, twisted, moved to its centre. */
function vpMatrix(vp) {
  const k = vp.h / vp.viewHeight, c = Math.cos(vp.twist), sn = Math.sin(vp.twist);
  return [k * c, k * sn, -k * sn, k * c, vp.cx - k * (c * vp.vx - sn * vp.vy), vp.cy - k * (sn * vp.vx + c * vp.vy)];
}
