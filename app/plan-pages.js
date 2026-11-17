/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — data fields and option names; nothing here is read by a person. */
/**
 * plan-pages.js — from the pages of a set of plans to walls (0.7 DC.116, session `trace`): the pages are a vector PDF (pdf-vector.js's
 * shapes), a PDF page or a file that is a scan (the trace of raster/), and the page's lines and arcs become what DF.23's
 * `wallsFromLines` takes. DOM-free: tools/bimcraft-test/plans-test.mjs runs it in Node. Millimetres, y up (plan coordinates).
 *
 *   pdfPageParts(vec, { mmPerPt })        → { segs: [[x1, y1, x2, y2]], arcs: [{ cx, cy, r, a0, sweep }], bounds, curves }   straight
 *       pieces of every shape (a filled wall's edges too) and the circular arcs the page's Bézier curves are (a door's swing); the
 *       page is in PDF points, y up, so only the scale is applied
 *       + labels: [{ name, at, h }] (0.10 BK.64: roomLabels: the page's words that can name a room, tallest first)
 *   scanParts(result, { mmPerPx, hPx })   → the same (+ source: 'scan'; no labels: a scan has no text), from a trace result (raster/trace.js: pixels, y down)
 *   mmPerUnit(a, b, distMm)               → millimetres a unit is, from two picked points and the true distance between them
 *   wallsFromPlan(parts, opts)            → { walls: [{ a, b, t }], openings: [{ wall, kind: 'door' | 'window', offset, width, face }], report }
 *       'pairs' mode first (two parallel lines are a wall's two faces), then the gaps in a wall: two collinear walls with a gap
 *       500…2600 mm between them are one wall with an opening there; a door when a swing arc (a quarter circle about as wide as
 *       the gap, hinged at one end) lies beside the gap, a window when there are sill lines in it, else a door up to 1300 mm and a
 *       window over; hatching (a bundle of short parallel lines) and lettering are left out
 *   tracePicture(img, opts)               → { bitmap, skew: { deg, confidence, applied }, result }   a scan or a rendered raster page: squared when
 *       its long lines say it is turned (opts.deskew 'auto' | degrees | false), black and white, despeckled, traced (raster/trace.js)
 *   tracePages(...)                       — in model-trace.js (the op: every page, one undo step)
 */
import { wallsFromLines } from './model-trace.js';
import { toGrey, threshold, despeckle, findSkew, rotateImage, trace } from './raster/index.js';

const TAU = Math.PI * 2;
const norm = (a) => ((a % TAU) + TAU) % TAU;
const len = (a, b) => Math.hypot(b[0] - a[0], b[1] - a[1]);

/** The circle through three points, or null. */
function circle3(p, q, r) {
  const d = 2 * (p[0] * (q[1] - r[1]) + q[0] * (r[1] - p[1]) + r[0] * (p[1] - q[1]));
  if (Math.abs(d) < 1e-9) return null;
  const a = p[0] * p[0] + p[1] * p[1], b = q[0] * q[0] + q[1] * q[1], c = r[0] * r[0] + r[1] * r[1];
  const cx = (a * (q[1] - r[1]) + b * (r[1] - p[1]) + c * (p[1] - q[1])) / d, cy = (a * (r[0] - q[0]) + b * (p[0] - r[0]) + c * (q[0] - p[0])) / d;
  return { cx, cy, r: Math.hypot(p[0] - cx, p[1] - cy) };
}
const bez = (P0, P1, P2, P3, t) => { const u = 1 - t; return [u * u * u * P0[0] + 3 * u * u * t * P1[0] + 3 * u * t * t * P2[0] + t * t * t * P3[0], u * u * u * P0[1] + 3 * u * u * t * P1[1] + 3 * u * t * t * P2[1] + t * t * t * P3[1]]; };

/** A cubic Bézier that is (within 1 %) a circular arc → { cx, cy, r, a0, sweep } (counterclockwise), else null. */
function arcOfBezier(P0, P1, P2, P3) {
  const chord = len(P0, P3);
  if (!(chord > 1e-6)) return null;
  const M = bez(P0, P1, P2, P3, 0.5), c = circle3(P0, M, P3);
  if (!c || !(c.r > chord * 0.3) || c.r > chord * 400) return null;
  for (const t of [0.25, 0.75]) { const q = bez(P0, P1, P2, P3, t); if (Math.abs(Math.hypot(q[0] - c.cx, q[1] - c.cy) - c.r) > 0.012 * c.r) return null; }
  const A0 = Math.atan2(P0[1] - c.cy, P0[0] - c.cx), AM = Math.atan2(M[1] - c.cy, M[0] - c.cx), A1 = Math.atan2(P3[1] - c.cy, P3[0] - c.cx);
  const ccw = norm(A1 - A0);
  return norm(AM - A0) <= ccw ? { ...c, a0: A0, sweep: ccw } : { ...c, a0: A1, sweep: norm(A0 - A1) };
}

/** Arcs drawn as several curves (one circle, end to end) are one arc. */
function joinArcs(list) {
  const out = list.slice();
  let again = true;
  while (again) {
    again = false;
    for (let i = 0; i < out.length && !again; i++) for (let j = 0; j < out.length && !again; j++) {
      if (i === j) continue;
      const A = out[i], B = out[j];
      if (Math.hypot(A.cx - B.cx, A.cy - B.cy) > 0.01 * A.r || Math.abs(A.r - B.r) > 0.01 * A.r) continue;
      if (Math.abs(norm(A.a0 + A.sweep - B.a0 + Math.PI) - Math.PI) < 0.02) { out[i] = { ...A, sweep: A.sweep + B.sweep }; out.splice(j, 1); again = true; }
    }
  }
  return out;
}

export function pdfPageParts(vec, { mmPerPt = 1 } = {}) {
  const segs = [], arcs = [];
  let curves = 0;
  const push = (a, b) => { if (a[0] !== b[0] || a[1] !== b[1]) segs.push([a[0], a[1], b[0], b[1]]); };
  for (const sh of vec.shapes) for (const sub of sh.subs) {
    let p = null, s = null;
    const here = [];
    for (const o of sub.ops) {
      if (o[0] === 'M') p = s = [o[1], o[2]];
      else if (o[0] === 'L' && p) { const q = [o[1], o[2]]; push(p, q); p = q; }
      else if (o[0] === 'C' && p) {
        curves++;
        const q = [o[5], o[6]], a = arcOfBezier(p, [o[1], o[2]], [o[3], o[4]], q);
        if (a) here.push(a);
        p = q;
      }
    }
    if (sub.closed && p && s) push(p, s);
    for (const a of joinArcs(here)) if (a.sweep >= 0.5 && a.sweep <= Math.PI * 1.2) arcs.push(a);   // 30°–216°: a swing, not a circle
  }
  const k = mmPerPt;
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  const S = segs.map((q) => { const r = [q[0] * k, q[1] * k, q[2] * k, q[3] * k]; x0 = Math.min(x0, r[0], r[2]); x1 = Math.max(x1, r[0], r[2]); y0 = Math.min(y0, r[1], r[3]); y1 = Math.max(y1, r[1], r[3]); return r; });
  return { source: 'pdf', segs: S, arcs: arcs.map((a) => ({ cx: a.cx * k, cy: a.cy * k, r: a.r * k, a0: norm(a.a0), sweep: a.sweep })), bounds: Number.isFinite(x0) ? { x0, y0, x1, y1 } : null, curves,
    labels: roomLabels(vec.texts, { k }) };   // 0.10 BK.64: the page's words that can name a room
}

/**
 * 0.10 BK.64 (bk-r3-checks-10): the words on a page that can be a room's name. texts = pdf-vector.js's [{ s, x, y, h, rot, w }].
 * Kept: text with at least two letters and not mostly digits (a dimension, a scale "1:100", a sheet number are left out), at most
 * 40 characters, lying flat or upright. Runs on one baseline close together are one label ("LIVING" + "ROOM"). → [{ name, at: [x, y]
 * (the middle of the text), h }] in the page's units × k, tallest first (so the largest lettering in a room names it).
 * A scan has no text: no labels, and its rooms keep the names the program gives them.
 */
export function roomLabels(texts, { k = 1 } = {}) {
  const ok = (s) => { const t = s.trim(); const letters = (t.match(/\p{L}/gu) || []).length, digits = (t.match(/\d/g) || []).length; return t.length <= 40 && letters >= 2 && letters > digits && !/^\d+\s*[:/]\s*\d+$/.test(t); };
  const flat = (texts || []).filter((t) => t && typeof t.s === 'string' && t.s.trim() && Number.isFinite(t.x) && Number.isFinite(t.y) && t.h > 0 && Math.abs(Math.sin(t.rot || 0)) < 0.1)
    .map((t) => ({ s: t.s.trim(), x: t.x, y: t.y, h: t.h, w: t.w > 0 ? t.w : t.s.trim().length * t.h * 0.55 })).sort((a, b) => b.y - a.y || a.x - b.x);
  const runs = [];
  for (const t of flat) {
    const r = runs.find((q) => Math.abs(q.y - t.y) < 0.5 * q.h && Math.abs(q.h - t.h) < 0.25 * q.h && t.x >= q.x && t.x - (q.x + q.w) < 1.5 * q.h);
    if (r) { r.s += ' ' + t.s; r.w = t.x + t.w - r.x; } else runs.push({ ...t });
  }
  return runs.filter((r) => ok(r.s)).map((r) => ({ name: r.s.replace(/\s+/g, ' ').slice(0, 40), at: [(r.x + r.w / 2) * k, (r.y + r.h * 0.35) * k], h: r.h * k })).sort((a, b) => b.h - a.h).slice(0, 400);
}

export function scanParts(res, { mmPerPx = 1, hPx = 0 } = {}) {
  const k = mmPerPx, Y = (y) => (hPx - y) * k;
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  const segs = res.lines.map((l) => { const r = [l.x1 * k, Y(l.y1), l.x2 * k, Y(l.y2)]; x0 = Math.min(x0, r[0], r[2]); x1 = Math.max(x1, r[0], r[2]); y0 = Math.min(y0, r[1], r[3]); y1 = Math.max(y1, r[1], r[3]); return r; });
  const arcs = res.arcs.filter((a) => a.a1 - a.a0 >= 0.5 && a.a1 - a.a0 <= Math.PI * 1.2).map((a) => ({ cx: a.cx * k, cy: Y(a.cy), r: a.r * k, a0: norm(-a.a1), sweep: a.a1 - a.a0 }));
  return { source: 'scan', segs, arcs, bounds: Number.isFinite(x0) ? { x0, y0, x1, y1 } : null, curves: res.arcs.length };
}

export const mmPerUnit = (a, b, distMm) => { const d = Math.hypot(b[0] - a[0], b[1] - a[1]); return d > 0 && distMm > 0 ? distMm / d : 0; };

/** Bundles of short parallel lines (hatching): their indexes. */
function hatchOf(segs, { maxLen = 4500, gap = 300, minRun = 5 } = {}) {
  const cand = [];
  segs.forEach((s, i) => { const L = Math.hypot(s[2] - s[0], s[3] - s[1]); if (L <= maxLen) cand.push({ i, a: ((Math.atan2(s[3] - s[1], s[2] - s[0]) % Math.PI) + Math.PI) % Math.PI }); });
  const bins = new Map();
  for (const c of cand) { const b = Math.round(c.a / (3 * Math.PI / 180)) % 60; if (!bins.has(b)) bins.set(b, []); bins.get(b).push(c); }
  const out = new Set();
  for (const list of bins.values()) {
    if (list.length < minRun) continue;
    const a = list.reduce((s, c) => s + c.a, 0) / list.length, nx = -Math.sin(a), ny = Math.cos(a), ux = Math.cos(a), uy = Math.sin(a);
    const it = list.map((c) => { const s = segs[c.i]; return { i: c.i, off: (s[0] + s[2]) / 2 * nx + (s[1] + s[3]) / 2 * ny, t0: Math.min(s[0] * ux + s[1] * uy, s[2] * ux + s[3] * uy), t1: Math.max(s[0] * ux + s[1] * uy, s[2] * ux + s[3] * uy) }; }).sort((p, q) => p.off - q.off);
    let run = [it[0]];
    const flush = () => { if (run.length >= minRun) for (const r of run) out.add(r.i); };
    for (let k = 1; k < it.length; k++) {
      const p = run[run.length - 1], q = it[k];
      if (q.off - p.off <= gap && q.off - p.off > 1 && Math.min(q.t1, p.t1) - Math.max(q.t0, p.t0) > -gap) run.push(q); else { flush(); run = [q]; }
    }
    flush();
  }
  return out;
}

/**
 * Lines of one straight run that a joining wall cut (a face line the trace or the drawing stops at each side of a T) are one line:
 * collinear (within `tol` mm, `angDeg`°) with at most `gap` mm between them. A door's gap is wider than that.
 */
export function joinCollinearMm(segs, { tol = 35, gap = 350, angDeg = 1.2 } = {}) {
  let L = segs.map((s) => s.slice(0, 4));
  const cos = Math.cos(angDeg * Math.PI / 180);
  let changed = true, guard = 0;
  while (changed && guard++ < 40) {
    changed = false;
    const dead = new Set();
    for (let i = 0; i < L.length; i++) {
      if (dead.has(i)) continue;
      const a = L[i], la = Math.hypot(a[2] - a[0], a[3] - a[1]);
      if (la < 1) continue;
      const u = [(a[2] - a[0]) / la, (a[3] - a[1]) / la], n = [-u[1], u[0]];
      for (let j = i + 1; j < L.length; j++) {
        if (dead.has(j)) continue;
        const b = L[j], lb = Math.hypot(b[2] - b[0], b[3] - b[1]);
        if (lb < 1 || Math.abs(((b[2] - b[0]) * u[0] + (b[3] - b[1]) * u[1]) / lb) < cos) continue;
        if (Math.abs((b[0] - a[0]) * n[0] + (b[1] - a[1]) * n[1]) > tol || Math.abs((b[2] - a[0]) * n[0] + (b[3] - a[1]) * n[1]) > tol) continue;
        const sa = [0, la].sort((p, q) => p - q), sb = [(b[0] - a[0]) * u[0] + (b[1] - a[1]) * u[1], (b[2] - a[0]) * u[0] + (b[3] - a[1]) * u[1]].sort((p, q) => p - q);
        const g = Math.max(sb[0] - sa[1], sa[0] - sb[1]);
        if (g > gap) continue;
        const lo = Math.min(sa[0], sb[0]), hi = Math.max(sa[1], sb[1]);
        L[i] = [a[0] + u[0] * lo, a[1] + u[1] * lo, a[0] + u[0] * hi, a[1] + u[1] * hi];
        dead.add(j); changed = true;
        break;
      }
    }
    if (dead.size) L = L.filter((_, k) => !dead.has(k));
  }
  return L;
}

const sub = (a, b) => [a[0] - b[0], a[1] - b[1]];
const dot = (a, b) => a[0] * b[0] + a[1] * b[1];

export function wallsFromPlan(parts, { t = 200, maxT = 600, minSeg = 400, minGap = 500, maxGap = 2600, doorMax = 1300, hatch = true, join = parts.source === 'scan' } = {}) {
  const report = { lines: parts.segs.length, hatchLines: 0, short: 0, walls: 0, merged: 0, sills: 0, doors: 0, windows: 0, unpaired: 0 };
  // a scan's face lines are cut where a wall joins them (the trace stops at each T): one line again; a PDF's lines are as drawn
  let segs = (join ? joinCollinearMm(parts.segs.filter((s) => Math.hypot(s[2] - s[0], s[3] - s[1]) >= 60), { gap: Math.min(350, 0.7 * maxT) }) : parts.segs).filter((s) => Math.hypot(s[2] - s[0], s[3] - s[1]) >= minSeg);
  report.short = parts.segs.length - segs.length;
  if (hatch) { const h = hatchOf(segs); report.hatchLines = h.size; segs = segs.filter((_, i) => !h.has(i)); }
  const r = wallsFromLines(segs, { mode: 'pairs', t, maxT, minLen: minSeg });
  report.unpaired = r.left.length;
  let walls = r.walls.map((w) => ({ ...w }));
  const openings = [];
  // group the walls on one line (same direction, same centre line), in order along it
  const dir = (w) => { const L = len(w.a, w.b); return [(w.b[0] - w.a[0]) / L, (w.b[1] - w.a[1]) / L]; };
  const used = new Set(), merged = [], gone = new Set();
  const order = walls.map((_, i) => i);
  for (const i of order) {
    if (used.has(i)) continue;
    const base = walls[i], u = dir(base), n = [-u[1], u[0]];
    const group = [i];
    used.add(i);
    for (const j of order) {
      if (used.has(j)) continue;
      const w = walls[j], v = dir(w);
      if (Math.abs(u[0] * v[1] - u[1] * v[0]) > 0.035) continue;   // 2°
      const tt = Math.max(base.t, w.t);
      if (Math.abs(dot(sub(w.a, base.a), n)) > 0.4 * tt || Math.abs(dot(sub(w.b, base.a), n)) > 0.4 * tt) continue;
      if (Math.abs(base.t - w.t) > 0.4 * tt) continue;
      group.push(j); used.add(j);
    }
    // order along u and merge across gaps
    const along = (p) => dot(sub(p, base.a), u);
    const items = group.map((k) => { const w = walls[k]; const s0 = along(w.a), s1 = along(w.b); return { k, s0: Math.min(s0, s1), s1: Math.max(s0, s1), t: w.t }; }).sort((p, q) => p.s0 - q.s0);
    const run = [items[0]];
    const runs = [];
    for (let k = 1; k < items.length; k++) {
      const prev = run[run.length - 1], cur = items[k], g = cur.s0 - prev.s1;
      if (g >= minGap && g <= maxGap) run.push(cur); else { runs.push(run.slice()); run.length = 0; run.push(cur); }
    }
    runs.push(run.slice());
    for (const rr of runs) {
      const tot = rr.reduce((s, x) => s + (x.s1 - x.s0), 0), tAvg = rr.reduce((s, x) => s + x.t * (x.s1 - x.s0), 0) / tot;
      // the wall's line: the first piece's centre line pushed onto the average offset of the pieces
      const off = rr.reduce((s, x) => { const w = walls[x.k]; return s + dot(sub(w.a, base.a), n) * (x.s1 - x.s0); }, 0) / tot;
      const A = [base.a[0] + u[0] * rr[0].s0 + n[0] * off, base.a[1] + u[1] * rr[0].s0 + n[1] * off];
      const B = [base.a[0] + u[0] * rr[rr.length - 1].s1 + n[0] * off, base.a[1] + u[1] * rr[rr.length - 1].s1 + n[1] * off];
      const wall = { a: A, b: B, t: tAvg, gaps: [] };
      for (let k = 0; k + 1 < rr.length; k++) wall.gaps.push({ s0: rr[k].s1 - rr[0].s0, s1: rr[k + 1].s0 - rr[0].s0 });
      if (rr.length > 1) report.merged += rr.length - 1;
      merged.push({ wall, members: rr.map((x) => x.k), base: { u, n, o: base.a, s0: rr[0].s0 } });
    }
  }
  // evidence for each gap: a swing arc beside it, sill lines in it; pieces of walls inside it (sills the pairing made) are dropped
  const lines = parts.segs;
  const finalWalls = [];
  for (const m of merged) {
    const w = m.wall, u = m.base.u, n = m.base.n, o = A_of(w);
    for (const gp of w.gaps) {
      const p0 = [o[0] + u[0] * gp.s0, o[1] + u[1] * gp.s0], p1 = [o[0] + u[0] * gp.s1, o[1] + u[1] * gp.s1], g = gp.s1 - gp.s0;
      // an arc: hinged at one end of the gap (its centre near that end, off the wall's line by about its half thickness), as wide as the gap
      let door = null;
      for (const a of parts.arcs) {
        if (a.r < 0.6 * g || a.r > 1.45 * g) continue;
        const c = [a.cx, a.cy], sC = dot(sub(c, p0), u), pC = dot(sub(c, p0), n);
        const nearEnd = Math.min(Math.abs(sC), Math.abs(sC - g));
        if (nearEnd > 0.35 * g + w.t || Math.abs(pC) > w.t + 0.3 * g) continue;
        const mid = norm(a.a0 + a.sweep / 2), mp = [a.cx + a.r * Math.cos(mid), a.cy + a.r * Math.sin(mid)];
        const side = dot(sub(mp, p0), n);
        if (Math.abs(side) < 0.3 * g) continue;
        door = { face: side >= 0 ? 'left' : 'right' };
        break;
      }
      // sill lines: long lines inside the gap, along the wall
      let sill = 0;
      for (const l of lines) {
        const la = [l[0], l[1]], lb = [l[2], l[3]];
        if (len(la, lb) < 0.6 * g) continue;
        const sa = dot(sub(la, p0), u), sb = dot(sub(lb, p0), u), pa = dot(sub(la, p0), n), pb = dot(sub(lb, p0), n);
        if (Math.min(sa, sb) < -120 || Math.max(sa, sb) > g + 120 || Math.abs(pa) > 1.2 * w.t || Math.abs(pb) > 1.2 * w.t || Math.abs(pa - pb) > 0.15 * w.t) continue;
        sill++;
      }
      const kind = door ? 'door' : sill >= 2 ? 'window' : g <= doorMax ? 'door' : 'window';
      if (sill >= 2) report.sills++;
      openings.push({ at: w, kind, offset: gp.s0, width: g, face: door ? door.face : 'left' });
      if (kind === 'door') report.doors++; else report.windows++;
    }
    finalWalls.push(w);
  }
  // a wall the pairing made out of sill lines: it lies inside a gap of a longer wall
  const gapBoxes = [];
  for (const m of merged) { const w = m.wall, u = m.base.u, n = m.base.n, o = A_of(w); for (const gp of w.gaps) gapBoxes.push({ o, u, n, s0: gp.s0 - 150, s1: gp.s1 + 150, t: w.t, w }); }
  const keep = finalWalls.filter((w) => {
    for (const b of gapBoxes) {
      if (b.w === w) continue;
      const sa = dot(sub(w.a, b.o), b.u), sb = dot(sub(w.b, b.o), b.u), pa = dot(sub(w.a, b.o), b.n), pb = dot(sub(w.b, b.o), b.n);
      if (Math.min(sa, sb) >= b.s0 && Math.max(sa, sb) <= b.s1 && Math.abs(pa) <= 1.3 * b.t && Math.abs(pb) <= 1.3 * b.t) return false;
    }
    return true;
  });
  for (const op of openings) op.wall = keep.indexOf(op.at);
  const ops = openings.filter((o) => o.wall >= 0).map(({ at, ...rest }) => rest);
  // a window drawn over a wall whose faces run on across it (the usual scan, and many plotted plans): the sill line inside the wall's
  // thickness, as long as a window and parallel to the wall, marks it
  keep.forEach((w, wi) => {
    const L = len(w.a, w.b), u = [(w.b[0] - w.a[0]) / L, (w.b[1] - w.a[1]) / L], n = [-u[1], u[0]];
    for (const l of r.left) {
      const la = [l[0], l[1]], lb = [l[2], l[3]], ll = len(la, lb);
      if (ll < minGap || ll > maxGap) continue;
      const cr = Math.abs(((lb[0] - la[0]) * u[1] - (lb[1] - la[1]) * u[0]) / ll);
      if (cr > 0.035) continue;
      const pa = dot(sub(la, w.a), n), pb = dot(sub(lb, w.a), n);
      if (Math.abs(pa) > 0.3 * w.t || Math.abs(pb) > 0.3 * w.t) continue;
      const sa = dot(sub(la, w.a), u), sb = dot(sub(lb, w.a), u), s0 = Math.min(sa, sb), s1 = Math.max(sa, sb);
      if (s0 < -100 || s1 > L + 100) continue;
      if (ops.some((o) => o.wall === wi && Math.min(o.offset + o.width, s1) - Math.max(o.offset, s0) > 0.5 * Math.min(o.width, ll))) continue;
      ops.push({ wall: wi, kind: 'window', offset: Math.max(0, s0), width: s1 - s0, face: 'left' });
      report.sills++;
    }
  });
  for (const w of keep) delete w.gaps;
  report.walls = keep.length;
  report.doors = ops.filter((o) => o.kind === 'door').length; report.windows = ops.filter((o) => o.kind === 'window').length;
  return { walls: keep, openings: ops, report, left: r.left };
}
const A_of = (w) => [w.a[0], w.a[1]];

/**
 * A picture (a scan, or a raster PDF page drawn at some dpi: { w, h, channels, data }) → its trace, ready for scanParts. The sheet is turned
 * square first when it was scanned crooked (`deskew`: 'auto' turns it when the angle found is over 0.15° and the sheet has long lines,
 * a number turns it by that, false leaves it). `tol` is in pixels.
 */
export function tracePicture(img, { deskew = 'auto', tol = 1.5, specks = 8, win = null } = {}) {
  let grey = toGrey(img);
  let bm = threshold(grey, { mode: 'auto' });
  const found = findSkew(bm);
  let deg = 0;
  if (typeof deskew === 'number') deg = deskew;
  else if (deskew === 'auto' && Math.abs(found.deg) > 0.15 && found.confidence > 1.6) deg = found.deg;
  if (deg) { grey = rotateImage({ w: grey.w, h: grey.h, channels: 1, data: grey.data }, -deg, { fill: 255 }); bm = threshold(grey, { mode: 'auto' }); }
  if (specks > 0) despeckle(bm, { maxArea: specks });
  const result = trace(bm, { tol, win: win || undefined });
  return { bitmap: bm, skew: { deg: found.deg, confidence: found.confidence, applied: deg }, result };
}
