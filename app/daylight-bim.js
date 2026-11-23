/* SPDX-License-Identifier: Apache-2.0 */
/**
 * daylight-bim.js — the average daylight factor of each room (0.6 LC.20, session bim-extra_PART_2; spike
 * docs/spikes/LC.20_PART_2.md). An early-design estimate by the published formula (Littlefair; BRE 209, BS 8206-2,
 * CIBSE LG10), NOT a simulation and not a compliance check:
 *
 *   ADF (%) = T · Ag · θ · M / (A · (1 − R²))   summed over the room's windows
 *   T  light transmittance of the glass · Ag glazed area (window area × glazed share) · θ the angle of visible sky, degrees ·
 *   M  maintenance factor · A every inside surface of the room (floor, walls, ceiling, windows) · R their area-weighted mean
 *   reflectance (floor, walls and ceiling as set; glass GLASS_R).
 *
 * θ is measured in the model, exactly: the vertical section square to the window through its centre, starting on the
 * window's outer face, cut through every other element's triangles (the window and the wall it sits in left out); each cut
 * piece in front of the window hides the angles between its two ends; θ = what is left of 0°…90° (horizon to straight up).
 * No sampling, so a building of height H above the window centre at distance D takes exactly atan(H/D).
 * No DOM: node bin/test-bimcraft.mjs --extra2 --only daylight.
 *
 *   sectionTheta(origin, n, tris) → { theta, blocked: [[a0, a1]…] }   origin [x,y,z] m, n outward horizontal unit vector,
 *                                     tris = Float64Array/array of 9 numbers per triangle (m, Z up)
 *   averageDF({ A, R, windows: [{ glazed, theta }] }, { T, M }) → %
 *   meanReflectance(areas {floor, wall, ceiling, glass}, refl {floor, wall, ceiling}) → R
 *   gatherRooms(W, api, mid, { keep }) → { rooms: [{ id, guid, name, longName, storey, A, areas, windows: [{ id, guid, name, area, tag, n, origin,
 *                                theta, blocked, s, span: [lo, hi] along s from the origin, hz (height), host }] }], unassigned: [window…],
 *                                roof: [window…], skipped: n, prods (keep: every product's { cls, tr, box }, not enumerable) }
 *                                (geometry read once; θ measured here; the sky, sun, grid and energy analyses of 0.7 read the same)
 *   daylight(gathered, inputs) → rooms with { R, glazed per window, adf, band 'low'|'mid'|'high' }
 *   DEFAULTS = { T: 0.7, glazedShare: 0.75, M: 1, refl: { floor: 0.2, wall: 0.5, ceiling: 0.7 } }, GLASS_R = 0.1
 *   daylightCsv(rooms, { head, storeyName }) → text
 */
import { ids, val, lengthUnitMm, productTriangles } from './ifc-util.js';
import { ModelWriter } from './model-write.js';
import { dot3 as dot, sub3 as sub } from './geom-vec.js';   // shared helpers (0.11 PERF.74)

export const DEFAULTS = Object.freeze({ T: 0.7, glazedShare: 0.75, M: 1, refl: Object.freeze({ floor: 0.2, wall: 0.5, ceiling: 0.7 }) });
export const GLASS_R = 0.1;
const D2R = Math.PI / 180, R2D = 180 / Math.PI;
const EPS = 1e-6;
/** How far a window may sit from a room's inside surface and still be its window (a thick wall and half the frame), metres. */
export const NEAR = 0.75;
/** Where across the window's width θ is measured; θ = the mean of the five. */
export const SECTIONS = Object.freeze([0.1, 0.3, 0.5, 0.7, 0.9]);

// ---------------------------------------------------------------- the sky angle
/** Merge intervals and return their total length (degrees), clipped to [lo, hi]. */
function covered(list, lo = 0, hi = 90) {
  const a = list.map(([x, y]) => [Math.max(lo, Math.min(x, y)), Math.min(hi, Math.max(x, y))]).filter(([x, y]) => y > x).sort((p, q) => p[0] - q[0]);
  const out = [];
  for (const iv of a) { const last = out[out.length - 1]; if (last && iv[0] <= last[1] + 1e-9) last[1] = Math.max(last[1], iv[1]); else out.push([...iv]); }
  return { total: out.reduce((s, [x, y]) => s + (y - x), 0), merged: out };
}

export function sectionTheta(origin, n, tris) {
  const up = [0, 0, 1], s = [n[1], -n[0], 0];   // the section plane holds n and up; s is square to it
  const [ox, oy, oz] = origin;
  const blocked = [];
  for (let i = 0; i + 8 < tris.length; i += 9) {
    // signed distance of each corner from the plane, and where it lies in the section (u outward, v up)
    const P = [[tris[i], tris[i + 1], tris[i + 2]], [tris[i + 3], tris[i + 4], tris[i + 5]], [tris[i + 6], tris[i + 7], tris[i + 8]]];
    const d = P.map((p) => (p[0] - ox) * s[0] + (p[1] - oy) * s[1]);
    if ((d[0] > EPS && d[1] > EPS && d[2] > EPS) || (d[0] < -EPS && d[1] < -EPS && d[2] < -EPS)) continue;
    const uv = (p) => [(p[0] - ox) * n[0] + (p[1] - oy) * n[1], p[2] - oz];
    const uvs = P.map(uv);
    if (uvs[0][0] <= EPS && uvs[1][0] <= EPS && uvs[2][0] <= EPS) continue;   // all behind the window
    const pts = [];
    for (let k = 0; k < 3; k++) {
      const a = k, b = (k + 1) % 3;
      if (Math.abs(d[a]) <= EPS) pts.push(uvs[a]);
      if ((d[a] > EPS && d[b] < -EPS) || (d[a] < -EPS && d[b] > EPS)) { const t = d[a] / (d[a] - d[b]); pts.push([uvs[a][0] + t * (uvs[b][0] - uvs[a][0]), uvs[a][1] + t * (uvs[b][1] - uvs[a][1])]); }
    }
    if (pts.length < 2) continue;
    // the cut piece (a segment; a triangle lying in the plane gives its extreme points), clipped to u > 0
    let lo = pts[0], hi = pts[0];
    // a point on the window's own face (u = 0, clipped to EPS) is seen straight up or straight down: the exact limit
    const ang = (p) => (p[0] <= EPS * 1.000001 ? (p[1] >= 0 ? Math.PI / 2 : -Math.PI / 2) : Math.atan2(p[1], p[0]));
    // clip each candidate pair to the front half (u ≥ EPS) and take the widest angular span
    const front = [];
    for (let a = 0; a < pts.length; a++) for (let b = a + 1; b < pts.length; b++) {
      let p = pts[a], q = pts[b];
      if (p[0] < EPS && q[0] < EPS) continue;
      if (p[0] < EPS || q[0] < EPS) {
        const t = (EPS - p[0]) / (q[0] - p[0]), m = [EPS, p[1] + t * (q[1] - p[1])];
        if (p[0] < EPS) p = m; else q = m;
      }
      front.push(p, q);
    }
    if (!front.length) continue;
    lo = front[0]; hi = front[0];
    for (const p of front) { if (ang(p) < ang(lo)) lo = p; if (ang(p) > ang(hi)) hi = p; }
    const a0 = ang(lo) * R2D, a1 = ang(hi) * R2D;
    if (a1 > 0 && a0 < 90) blocked.push([a0, a1]);
  }
  const c = covered(blocked);
  return { theta: Math.max(0, 90 - c.total), blocked: c.merged };
}

// ---------------------------------------------------------------- the formula
export function meanReflectance(areas, refl = DEFAULTS.refl) {
  const A = areas.floor + areas.wall + areas.ceiling + areas.glass;
  return A > 0 ? (areas.floor * refl.floor + areas.wall * refl.wall + areas.ceiling * refl.ceiling + areas.glass * GLASS_R) / A : 0;
}
export function averageDF({ A, R, windows }, { T = DEFAULTS.T, M = DEFAULTS.M } = {}) {
  if (!(A > 0) || !(R < 1)) return 0;
  let s = 0;
  for (const w of windows) s += T * w.glazed * w.theta * M;
  return s / (A * (1 - R * R));
}
export const band = (df) => (df < 2 ? 'low' : df < 5 ? 'mid' : 'high');

// ---------------------------------------------------------------- geometry from the model
const tryIds = (api, mid, cls, inh = false) => { try { return ids(api, mid, cls, inh); } catch { return []; } };
const SKIP = /^IFC(SPACE|OPENINGELEMENT|OPENINGSTANDARDCASE|ANNOTATION|GRID|VIRTUALELEMENT|SITE|BUILDINGSTOREY|BUILDING)$/;

/** Triangles of one product in metres, Z up, as a flat Float64Array. */
function trisOf(api, mid, id, mm) {
  let t;
  try { t = productTriangles(api, mid, id, mm); } catch { return null; }
  const k = mm / 1000, out = new Float64Array(t.indices.length * 3);
  for (let i = 0; i < t.indices.length; i++) { const v = t.indices[i] * 3; out[i * 3] = t.positions[v] * k; out[i * 3 + 1] = t.positions[v + 1] * k; out[i * 3 + 2] = t.positions[v + 2] * k; }
  return out;
}
const bboxOf = (tr) => { const lo = [Infinity, Infinity, Infinity], hi = [-Infinity, -Infinity, -Infinity]; for (let i = 0; i < tr.length; i += 3) for (let k = 0; k < 3; k++) { lo[k] = Math.min(lo[k], tr[i + k]); hi[k] = Math.max(hi[k], tr[i + k]); } return { lo, hi }; };
function triArea(tr, i) {
  const ax = tr[i + 3] - tr[i], ay = tr[i + 4] - tr[i + 1], az = tr[i + 5] - tr[i + 2], bx = tr[i + 6] - tr[i], by = tr[i + 7] - tr[i + 1], bz = tr[i + 8] - tr[i + 2];
  const cx = ay * bz - az * by, cy = az * bx - ax * bz, cz = ax * by - ay * bx, l = Math.hypot(cx, cy, cz);
  return { area: l / 2, nz: l > 0 ? cz / l : 0 };
}
/** Closest point of a triangle to p (Ericson, Real-Time Collision Detection 5.1.5). */
function closestOnTri(p, a, b, c) {
  const add = (x, y, t) => [x[0] + y[0] * t, x[1] + y[1] * t, x[2] + y[2] * t];
  const ab = sub(b, a), ac = sub(c, a), ap = sub(p, a);
  const d1 = dot(ab, ap), d2 = dot(ac, ap);
  if (d1 <= 0 && d2 <= 0) return a;
  const bp = sub(p, b), d3 = dot(ab, bp), d4 = dot(ac, bp);
  if (d3 >= 0 && d4 <= d3) return b;
  const vc = d1 * d4 - d3 * d2;
  if (vc <= 0 && d1 >= 0 && d3 <= 0) return add(a, ab, d1 / (d1 - d3));
  const cp = sub(p, c), d5 = dot(ab, cp), d6 = dot(ac, cp);
  if (d6 >= 0 && d5 <= d6) return c;
  const vb = d5 * d2 - d1 * d6;
  if (vb <= 0 && d2 >= 0 && d6 <= 0) return add(a, ac, d2 / (d2 - d6));
  const va = d3 * d6 - d5 * d4;
  if (va <= 0 && d4 - d3 >= 0 && d5 - d6 >= 0) return add(b, sub(c, b), (d4 - d3) / ((d4 - d3) + (d5 - d6)));
  const den = 1 / (va + vb + vc);
  return add(add(a, ab, vb * den), ac, vc * den);
}
function nearestOnShell(p, tr) {
  let best = Infinity, at = null;
  for (let i = 0; i + 8 < tr.length; i += 9) {
    const q = closestOnTri(p, [tr[i], tr[i + 1], tr[i + 2]], [tr[i + 3], tr[i + 4], tr[i + 5]], [tr[i + 6], tr[i + 7], tr[i + 8]]);
    const d = Math.hypot(q[0] - p[0], q[1] - p[1], q[2] - p[2]);
    if (d < best) { best = d; at = q; }
  }
  return { d: best, at };
}

/** The level direction across which a window is thinnest (its glass faces that way, one way or the other): a search by degree, then by a tenth. */
export function facing(tr) {
  const width = (a) => { const x = Math.cos(a), y = Math.sin(a); let lo = Infinity, hi = -Infinity; for (let i = 0; i < tr.length; i += 3) { const u = tr[i] * x + tr[i + 1] * y; if (u < lo) lo = u; if (u > hi) hi = u; } return hi - lo; };
  let best = 0, bw = Infinity;
  for (let d = 0; d < 180; d++) { const w = width(d * D2R); if (w < bw - 1e-12) { bw = w; best = d; } }
  let fine = best;
  for (let d = best - 1; d <= best + 1; d += 0.1) { const w = width(d * D2R); if (w < bw - 1e-12) { bw = w; fine = d; } }
  const a = fine * D2R;
  return [Math.cos(a), Math.sin(a)];
}

export function gatherRooms(W, api, mid, { onProgress = null, keep = false } = {}) {
  const mm = lengthUnitMm(api, mid);
  const w = new ModelWriter(W, api, mid);
  const H = w.hostIndex();
  // where each element is (a space's storey)
  const inside = new Map(), parent = new Map(), storeys = new Set(tryIds(api, mid, 'IFCBUILDINGSTOREY'));
  for (const rid of tryIds(api, mid, 'IFCRELCONTAINEDINSPATIALSTRUCTURE')) { const r = api.GetLine(mid, rid, false); for (const h of r?.RelatedElements || []) inside.set(h.value, r.RelatingStructure?.value); }
  for (const rid of tryIds(api, mid, 'IFCRELAGGREGATES')) { const r = api.GetLine(mid, rid, false); for (const h of r?.RelatedObjects || []) parent.set(h.value, r.RelatingObject?.value); }
  const storeyOf = (id) => { let s = inside.get(id) ?? parent.get(id); for (let k = 0; s && !storeys.has(s) && k < 6; k++) s = parent.get(s); return s && storeys.has(s) ? s : null; };

  // every product's triangles, once
  const prods = new Map();
  let skipped = 0;
  const all = tryIds(api, mid, 'IFCPRODUCT', true);
  for (const id of all) {
    const l = api.GetLine(mid, id, false);
    const cls = String(l?.constructor?.name || '').toUpperCase();
    if (!l || !l.Representation || (SKIP.test(cls) && cls !== 'IFCSPACE')) continue;
    const tr = trisOf(api, mid, id, mm);
    if (!tr) { skipped++; continue; }
    if (tr.length) prods.set(id, { cls, tr, box: bboxOf(tr) });
  }
  const spaces = [...prods].filter(([, p]) => p.cls === 'IFCSPACE');
  const windowIds = [...new Set([...tryIds(api, mid, 'IFCWINDOW', true)])].filter((id) => prods.has(id));
  const obstruct = [...prods].filter(([, p]) => p.cls !== 'IFCSPACE');

  const rooms = new Map(spaces.map(([id, p]) => {
    const l = api.GetLine(mid, id, false);
    const areas = { floor: 0, wall: 0, ceiling: 0, glass: 0 }, zMid = (p.box.lo[2] + p.box.hi[2]) / 2;
    for (let i = 0; i + 8 < p.tr.length; i += 9) {
      const { area, nz } = triArea(p.tr, i);
      if (Math.abs(nz) > 0.7) { if ((p.tr[i + 2] + p.tr[i + 5] + p.tr[i + 8]) / 3 < zMid) areas.floor += area; else areas.ceiling += area; } else areas.wall += area;
    }
    return [id, { id, guid: val(l.GlobalId), name: String(val(l.Name) ?? ''), longName: String(val(l.LongName) ?? ''), storey: storeyOf(id), A: areas.floor + areas.wall + areas.ceiling, areas, windows: [] }];
  }));
  const unassigned = [], roof = [];
  let done = 0;
  for (const wid of windowIds) {
    const p = prods.get(wid), l = api.GetLine(mid, wid, false);
    const c = [(p.box.lo[0] + p.box.hi[0]) / 2, (p.box.lo[1] + p.box.hi[1]) / 2, (p.box.lo[2] + p.box.hi[2]) / 2];
    const ext = [p.box.hi[0] - p.box.lo[0], p.box.hi[1] - p.box.lo[1], p.box.hi[2] - p.box.lo[2]];
    const base = { id: wid, guid: val(l.GlobalId), name: String(val(l.Name) ?? ''), tag: String(val(l.Tag) ?? '') };
    if (ext[2] <= Math.min(ext[0], ext[1])) { roof.push(base); continue; }   // thin in Z: a roof window (the formula's θ is for upright glass)
    // the way the window faces: its thinnest width across, level (any wall angle)
    const face = facing(p.tr);
    // its room: the nearest space within NEAR that lies square behind or in front of it (a room beside it at a corner is not)
    let best = null;
    for (const [sid, sp] of spaces) {
      const b = sp.box;
      if (c[0] < b.lo[0] - NEAR - ext[0] || c[0] > b.hi[0] + NEAR + ext[0] || c[1] < b.lo[1] - NEAR - ext[1] || c[1] > b.hi[1] + NEAR + ext[1] || c[2] < b.lo[2] - NEAR || c[2] > b.hi[2] + NEAR) continue;
      const q = nearestOnShell(c, sp.tr);
      if (q.d > NEAR) continue;
      const v = [c[0] - q.at[0], c[1] - q.at[1]], lv = Math.hypot(v[0], v[1]);
      let side;
      if (lv < 1e-4) {   // the window's centre on the room's surface: outward = away from the room's middle
        const m = [(b.lo[0] + b.hi[0]) / 2, (b.lo[1] + b.hi[1]) / 2];
        side = Math.sign((c[0] - m[0]) * face[0] + (c[1] - m[1]) * face[1]) || 1;
      } else {
        const cos = (v[0] * face[0] + v[1] * face[1]) / lv;
        if (Math.abs(cos) < 0.9) continue;
        side = Math.sign(cos);
      }
      if (!best || q.d < best.d) best = { sid, d: q.d, side };
    }
    if (!best) { unassigned.push(base); continue; }
    const n = [face[0] * best.side, face[1] * best.side, 0];
    // the window's outer face along n, and its size across (s) and up
    const s = [n[1], -n[0]];
    let uMax = -Infinity, sLo = Infinity, sHi = -Infinity;
    for (let i = 0; i < p.tr.length; i += 3) { const dx = p.tr[i] - c[0], dy = p.tr[i + 1] - c[1]; uMax = Math.max(uMax, dx * n[0] + dy * n[1]); const sv = dx * s[0] + dy * s[1]; sLo = Math.min(sLo, sv); sHi = Math.max(sHi, sv); }
    const ow = Number(val(l.OverallWidth)), oh = Number(val(l.OverallHeight)), k = mm / 1000;
    const area = ow > 0 && oh > 0 ? ow * k * oh * k : (sHi - sLo) * ext[2];
    const origin = [c[0] + n[0] * uMax, c[1] + n[1] * uMax, c[2]];
    // what can block it: every other element (not the window, not the wall it sits in), roughly in front of it
    const host = H.voidHost.get(H.filledBy.get(wid));
    // five sections across the window (10 %, 30 %, 50 %, 70 %, 90 % of its width), θ their mean: a slender post in front
    // of the centre takes its share, not the whole sky; anything as wide as the window gives every section the same answer
    const cuts = SECTIONS.map((f) => { const o2 = sLo + f * (sHi - sLo); return [origin[0] + s[0] * o2, origin[1] + s[1] * o2, origin[2]]; });
    const tris = [];
    for (const [oid, o] of obstruct) {
      if (oid === wid || oid === host) continue;
      const b = o.box;
      // the band of section planes must pass through its box, and some of it lie in front of the window
      const corners = [[b.lo[0], b.lo[1]], [b.hi[0], b.lo[1]], [b.lo[0], b.hi[1]], [b.hi[0], b.hi[1]]];
      const ds = corners.map(([x, y]) => (x - origin[0]) * s[0] + (y - origin[1]) * s[1]), us = corners.map(([x, y]) => (x - origin[0]) * n[0] + (y - origin[1]) * n[1]);
      if (Math.min(...ds) > sHi + EPS || Math.max(...ds) < sLo - EPS || Math.max(...us) <= EPS) continue;
      tris.push(o.tr);
    }
    const sections = cuts.map((o2) => {
      const all2 = [];
      for (const tr of tris) all2.push(...sectionTheta(o2, n, tr).blocked);
      const cov = covered(all2);
      return { theta: Math.max(0, 90 - cov.total), blocked: cov.merged };
    });
    const theta = sections.reduce((t, x) => t + x.theta, 0) / sections.length;
    const blocked = sections[2].blocked;   // the centre section's, for the detail
    // (0.7, bim-ops) the window's frame for the sky / sun / grid analyses: s across it, its span along s from the origin, its height, its host wall
    rooms.get(best.sid).windows.push({ ...base, area, n, origin, theta, blocked, sections: sections.map((x) => x.theta), s: [s[0], s[1], 0], span: [sLo, sHi], hz: ext[2], host: host ?? null });
    onProgress?.(++done, windowIds.length);
  }
  for (const r of rooms.values()) {
    const g = r.windows.reduce((t, x) => t + x.area, 0);
    r.areas.glass = Math.min(g, r.areas.wall);
    r.areas.wall -= r.areas.glass;
  }
  const out = { rooms: [...rooms.values()], unassigned, roof, skipped };
  // (0.7, bim-ops) every product's triangles, for the sky, sun, grid and energy analyses that run on the same reading
  if (keep) Object.defineProperty(out, 'prods', { value: prods, enumerable: false });
  return out;
}

/** The result for these inputs (cheap: run again whenever an input changes). */
export function daylight(g, inputs = {}) {
  const T = Number.isFinite(inputs.T) ? inputs.T : DEFAULTS.T, M = Number.isFinite(inputs.M) ? inputs.M : DEFAULTS.M;
  const share = Number.isFinite(inputs.glazedShare) ? inputs.glazedShare : DEFAULTS.glazedShare;
  const refl = { ...DEFAULTS.refl, ...(inputs.refl || {}) };
  return g.rooms.map((r) => {
    const R = meanReflectance(r.areas, refl);
    const windows = r.windows.map((x) => ({ ...x, glazed: x.area * share }));
    const adf = averageDF({ A: r.A, R, windows }, { T, M });
    return { ...r, R, windows, adf, band: band(adf) };
  });
}

const cell = (v) => { let s = String(v ?? ''); if (/^[=+\-@\t\r]/.test(s)) s = "'" + s; return /[",\n;]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s; };
export function daylightCsv(rooms, { head, storeyName = () => '', inputs = {}, bandName = (b) => b } = {}) {
  const H = head || { room: 'Room', storey: 'Level', A: 'Inside surfaces (m²)', floor: 'Floor (m²)', R: 'Mean reflectance', windows: 'Windows', glazed: 'Glazed area (m²)', theta: 'Sky angle θ (°)', adf: 'Average daylight factor (%)', band: 'Guidance band', inputs: 'Inputs' };   // i18n-ignore: the page passes `head` in the person's language
  const rows = [[H.room, H.storey, H.A, H.floor, H.R, H.windows, H.glazed, H.theta, H.adf, H.band]];
  for (const r of rooms) rows.push([[r.name, r.longName].filter(Boolean).join(' '), storeyName(r.storey), r.A.toFixed(2), r.areas.floor.toFixed(2), r.R.toFixed(3), r.windows.length,
    r.windows.reduce((s, x) => s + x.glazed, 0).toFixed(2), r.windows.map((x) => x.theta.toFixed(1)).join(' '), r.adf.toFixed(2), bandName(r.band)]);
  rows.push([H.inputs, JSON.stringify(inputs)]);
  return '﻿' + rows.map((r) => r.map(cell).join(',')).join('\r\n') + '\r\n';
}
