/* SPDX-License-Identifier: Apache-2.0 */
/**
 * comforts-views.js — interior elevations of a room and the notes elevations and sections carry (0.6 round 2, DC.58 gap,
 * session bim-comforts_PART_2): dimensions, level marks and tags for doors, windows and placed library items. No DOM, no
 * three.js: bin/test-bimcraft.mjs --comforts runs it on models it loads in Node. Built on res-views.js (projectView).
 *
 *   ROOM_SIDES ['north', 'east', 'south', 'west'] · LOOK (side → the way the view looks, plan axes)
 *   interiorView(elements, room, side, { height, depth? }) → a projectView result framed on the room (floor to `height`, wall to
 *        wall) + { side, frame: { x0, x1, y0, y1 }, ground: true, dir, d0, d1 }; elements from res-views.js modelTriangles in the
 *        room's storey plan (z up from its floor). The view cuts through the room's middle (the side walls, floor and ceiling
 *        come out as cut poché round the frame) and looks at the wall on `side`, past its face by 50 mm only.
 *   noteItems(notes, P, k) → sheet items (res-sheets.js item shapes) for the notes, P = view mm → sheet mm, k = sheet mm per view mm
 *   viewItems(view, P) → sheet items for a view's cuts (filled, outlined) and lines (thin)
 *   interiorSheet(room, views, { paper, units, project, date, notes }) → { number, title, items } — one sheet, the room's four
 *        walls two by two at one scale (the largest that fits), each with its notes: res-sheets.js sheetSvg / setPdf draw it
 *   viewNotes(view, ctx) → [note]   in view coordinates (x along the view's right, y = z):
 *        { t: 'dim', a: [x, y], b: [x, y], off (mm on paper, + = above / left), text }
 *        { t: 'level', y, x0, x1, name, text }    a level mark: the line and its name and height at the right end
 *        { t: 'tag', x, y, s, shape: 'hex' | 'box' }   a door / window mark (D1, W3) or a library item's number
 *      ctx { kind: 'elevation' | 'section' | 'interior', dir, levels: [{ name, elevation }] (mm, the view's z = elevation − base),
 *            base (the view's z 0 as an elevation), openings: [{ mark, kind, at: [x, y] (plan), z0, z1, face: [nx, ny] (outward) }],
 *            items: [{ tag, at: [x, y], z }], fmt(mm) → text, d0, d1 (depth range for interiors) }
 *
 * What each kind gets: an exterior elevation — level marks on the right, the overall width under the ground line, the heights
 * between levels on the left, a tag on each door and window on a wall facing the viewer; a section — level marks and heights
 * between them; an interior elevation — the room's width under it, its height beside it, and tags on the doors, windows and
 * library items (cabinets, fixtures) in front of the wall it looks at.
 */
import { projectView } from './res-views.js';
import { cutFaceItems } from './wall-section-graphics.js';
import { PAPERS, scaleFor } from './res-sheets.js';   // read only: the papers and scales every sheet uses
import { t as tr } from './i18n.js';

export const ROOM_SIDES = ['north', 'east', 'south', 'west'];
/** An interior elevation is named for the wall it shows: the north one looks north. */
export const LOOK = { north: [0, 1], east: [1, 0], south: [0, -1], west: [-1, 0] };
const dot = (a, b) => a[0] * b[0] + a[1] * b[1];

function middle(poly) {
  // the middle of the room's box (the cut runs through it): robust for L-shaped rooms too
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  for (const p of poly) { x0 = Math.min(x0, p[0]); y0 = Math.min(y0, p[1]); x1 = Math.max(x1, p[0]); y1 = Math.max(y1, p[1]); }
  return [(x0 + x1) / 2, (y0 + y1) / 2];
}

/** One wall of a room, seen from inside it. room = { poly (plan, the room's inside outline), name }. */
export function interiorView(elements, room, side, { height = 2438.4, past = 50, res = 1400 } = {}) {
  const dir = LOOK[side], right = [dir[1], -dir[0]];
  if (!dir || !room?.poly?.length) return { lines: [], cuts: [], bounds: null, n: 0 };
  const xs = room.poly.map((p) => dot(p, right)), ds = room.poly.map((p) => dot(p, dir));
  const o = middle(room.poly), d0 = dot(o, dir), d1 = Math.max(...ds) + past;
  const x0 = Math.min(...xs), x1 = Math.max(...xs);
  // wall to wall and floor to ceiling, with room for the cut walls, the floor and the ceiling round it
  const box = { x0: x0 - 400, x1: x1 + 400, y0: -350, y1: height + 350 };
  const v = projectView(elements, { dir, cut: { o }, far: d1 - d0, box, res });
  return { ...v, side, dir, d0, d1, frame: { x0, x1, y0: 0, y1: height }, ground: true, room: room.name || '' };
}

/** The notes a view carries (see the header). Never throws on what it can't place: it leaves that note out. */
export function viewNotes(view, ctx = {}) {
  const out = [], b = view?.bounds;
  if (!b) return out;
  const fmt = ctx.fmt || ((mm) => String(Math.round(mm)));
  const dir = ctx.dir || view.dir, right = [dir[1], -dir[0]];
  const X = (p) => dot(p, right);
  const base = ctx.base || 0;
  if (ctx.kind === 'interior') {
    const f = view.frame;
    if (f && f.x1 - f.x0 > 1) out.push({ t: 'dim', a: [f.x0, f.y0], b: [f.x1, f.y0], off: -8, text: fmt(f.x1 - f.x0) });
    if (f && f.y1 - f.y0 > 1) out.push({ t: 'dim', a: [f.x0, f.y0], b: [f.x0, f.y1], off: 8, text: fmt(f.y1 - f.y0) });
    const inRange = (p, past = 1) => { const d = dot(p, dir); return d >= (ctx.d0 ?? view.d0) - 1 && d <= (ctx.d1 ?? view.d1) + past; };
    for (const o of ctx.openings || []) {
      // a door or window in the wall it looks at (its centre line lies inside that wall: up to a wall's thickness past its face)
      if (!o.mark || !inRange(o.at, 400) || (o.face && dot(o.face, dir) > -0.5 && dot(o.face, dir) < 0.5)) continue;
      const x = X(o.at);
      if (x < f.x0 - 1 || x > f.x1 + 1) continue;
      out.push({ t: 'tag', x, y: (o.z0 + o.z1) / 2, s: o.mark, shape: o.kind === 'door' ? 'box' : 'hex' });
    }
    for (const it of ctx.items || []) {
      if (!it.tag || !inRange(it.at)) continue;
      const x = X(it.at);
      if (x < f.x0 - 1 || x > f.x1 + 1) continue;
      out.push({ t: 'tag', x, y: Math.max(150, (it.z || 0) + (it.h || 900) / 2), s: String(it.tag), shape: 'circle' });
    }
    return out;
  }
  // elevations and sections: the levels that fall in the view
  const lv = (ctx.levels || []).map((l) => ({ ...l, y: l.elevation - base })).filter((l) => l.y >= b.y0 - 1 && l.y <= b.y1 + 600).sort((p, q) => p.y - q.y);
  const xr = b.x1 + 600;
  for (const l of lv) out.push({ t: 'level', y: l.y, x0: b.x0 - 300, x1: xr, name: l.name, text: fmt(l.elevation) });
  for (let i = 0; i + 1 < lv.length; i++) if (lv[i + 1].y - lv[i].y > 1) out.push({ t: 'dim', a: [b.x0, lv[i].y], b: [b.x0, lv[i + 1].y], off: 12, text: fmt(lv[i + 1].y - lv[i].y) });
  if (ctx.kind === 'elevation') {
    // the building's width (its walls, not the ground round it), under the ground line
    const w = ctx.width || (view.content || b);
    if (w.x1 - w.x0 > 1) out.push({ t: 'dim', a: [w.x0, b.y0], b: [w.x1, b.y0], off: -10, text: fmt(w.x1 - w.x0) });
    for (const o of ctx.openings || []) {
      // tags only on the walls that face the viewer (an elevation shows those)
      if (!o.mark || !o.face || dot(o.face, dir) > -0.7) continue;
      out.push({ t: 'tag', x: X(o.at), y: (o.z0 + o.z1) / 2, s: o.mark, shape: o.kind === 'door' ? 'box' : 'hex' });
    }
  }
  return out;
}

/** The plan facts viewNotes needs about doors and windows, from model-ops.js snapshotModel openings and their walls. */
export function openingFacts(openings, walls, geom) {
  const out = [];
  for (const o of openings || []) {
    const w = (walls || []).find((x) => x.id === o.wall);
    if (!w) continue;
    const g = geom(w), s = o.offset + o.width / 2, at = g.at(s, 0), n = g.normal(s);
    const ext = w.extSide === 'right' ? -1 : 1;   // the wall's outside: its left (+n) or its right
    out.push({ mark: o.mark, kind: o.kind, at, z0: o.sill, z1: o.sill + o.height, face: [n[0] * ext, n[1] * ext], storey: w.storey, wall: w.guid, base: w.baseOffset || 0 });
  }
  return out;
}

// ------------------------------------------------------------------------------------------------------------ on paper
/** Sheet items for a view's drawing: what it cuts filled grey with a heavy outline, what it sees as thin lines. */
export function viewItems(view, P) {
  const out = [];
  for (const l of view.lines || []) out.push({ t: 'line', pts: [P([l[0], l[1]]), P([l[2], l[3]])], w: 0.18, g: 0 });
  for (const c of view.cuts || []) out.push(...cutFaceItems(c,P));
  return out;
}
/** Sheet items for notes: dimensions (a line with ticks and its text, `off` mm of paper out from what it measures), level marks
 *  (a dash-dot line, a small triangle and the level's name and height at its right end) and tags (the mark in a box, a hexagon or a
 *  circle). Text is 6 pt, as the plan's dimensions. */
export function noteItems(notes, P, k) {
  const out = [];
  for (const n of notes || []) {
    if (n.t === 'dim') {
      const A0 = P(n.a), B0 = P(n.b), L = Math.hypot(B0[0] - A0[0], B0[1] - A0[1]);
      if (L < 0.5) continue;
      const u = [(B0[0] - A0[0]) / L, (B0[1] - A0[1]) / L], nn = [-u[1], u[0]], off = n.off || 0;
      const A = [A0[0] + nn[0] * off, A0[1] + nn[1] * off], B = [B0[0] + nn[0] * off, B0[1] + nn[1] * off];
      out.push({ t: 'line', pts: [A0, A], w: 0.1, g: 0.3 }, { t: 'line', pts: [B0, B], w: 0.1, g: 0.3 }, { t: 'line', pts: [A, B], w: 0.13, g: 0 });
      const tk = [(u[0] - nn[0]) * 0.9, (u[1] - nn[1]) * 0.9];
      for (const q of [A, B]) out.push({ t: 'line', pts: [[q[0] - tk[0], q[1] - tk[1]], [q[0] + tk[0], q[1] + tk[1]]], w: 0.18, g: 0 });
      let rot = Math.atan2(u[1], u[0]);
      if (rot > Math.PI / 2 + 1e-9 || rot <= -Math.PI / 2) rot += Math.PI;
      const mid = [(A[0] + B[0]) / 2, (A[1] + B[1]) / 2];
      out.push({ t: 'text', s: n.text, x: mid[0] - Math.sin(rot) * 0.9, y: mid[1] + Math.cos(rot) * 0.9, size: 6, rot });
    } else if (n.t === 'level') {
      const a = P([n.x0, n.y]), b = P([n.x1, n.y]);
      out.push({ t: 'line', pts: [a, b], w: 0.13, g: 0.25, dash: [4, 0.8, 0.6, 0.8] });
      out.push({ t: 'fill', polys: [[[b[0], b[1]], [b[0] - 1.2, b[1] + 1.8], [b[0] + 1.2, b[1] + 1.8]]], g: 0 });
      out.push({ t: 'text', s: n.name, x: b[0] + 2, y: b[1] + 0.8, size: 6.5, align: 'left', bold: true }, { t: 'text', s: n.text, x: b[0] + 2, y: b[1] - 2.2, size: 6, align: 'left' });
    } else if (n.t === 'text') {   // 0.9 SU.1123: a note written in the elevation or section view (elev-edit.js)
      const q = P([n.x, n.y]);
      String(n.s).split('\n').slice(0, 8).forEach((line, i) => out.push({ t: 'text', s: line, x: q[0], y: q[1] - i * 3, size: 6.5, align: 'left' }));
    } else if (n.t === 'tag') {
      const c = P([n.x, n.y]), r = String(n.s).length > 2 ? 2.8 : 2.2, pts = [];
      const sides = n.shape === 'hex' ? 6 : n.shape === 'box' ? 4 : 24, turn = n.shape === 'box' ? Math.PI / 4 : 0;
      const rr = n.shape === 'box' ? r * Math.SQRT2 : r;
      for (let i = 0; i <= sides; i++) { const a = turn + i / sides * Math.PI * 2; pts.push([c[0] + rr * Math.cos(a), c[1] + rr * Math.sin(a)]); }
      out.push({ t: 'fill', polys: [pts], g: 1 }, { t: 'line', pts, w: 0.2, g: 0 }, { t: 'text', s: String(n.s), x: c[0], y: c[1] - 0.9, size: String(n.s).length > 2 ? 4.5 : 5.5, bold: true });
    }
  }
  return out;
}
/**
 * One sheet with a room's interior elevations, two by two at one scale: views = [{ side, view, notes }] (interiorView, viewNotes).
 * The title block as the drawing set's (res-sheets.js): number, title, project and date.
 */
export function interiorSheet(room, views, { paper = 'tabloid', units = 'ftin', project = '', date = '', number = 'A-501' } = {}) {
  const [PW, PH] = PAPERS[paper] || PAPERS.tabloid;
  const m = 10, strip = 18, items = [];
  const title = tr('comforts.ie.sheet', { room: room.name || '' });
  items.push({ t: 'line', pts: [[m, m], [PW - m, m], [PW - m, PH - m], [m, PH - m], [m, m]], w: 0.5, g: 0 });
  items.push({ t: 'line', pts: [[m, m + strip], [PW - m, m + strip]], w: 0.35, g: 0 });
  items.push({ t: 'line', pts: [[PW - m - 40, m], [PW - m - 40, m + strip]], w: 0.35, g: 0 });
  items.push({ t: 'text', s: number, x: PW - m - 20, y: m + 6, size: 18, bold: true });
  items.push({ t: 'text', s: title, x: m + 4, y: m + 10, size: 12, align: 'left', bold: true });
  items.push({ t: 'text', s: [project, date, tr('res.sh.madewith')].filter(Boolean).join('    '), x: m + 4, y: m + 4, size: 7, align: 'left', g: 0.25 });   // i18n-ignore: spacing between the strip's items
  const shown = views.filter((v) => v.view?.bounds);
  const cw = (PW - 2 * m) / 2, ch = (PH - 2 * m - strip) / 2;
  // one scale for all four: the largest at which the biggest view (with room for its notes) fits its quarter
  let W = 1, H = 1;
  for (const v of shown) { W = Math.max(W, v.view.bounds.x1 - v.view.bounds.x0); H = Math.max(H, v.view.bounds.y1 - v.view.bounds.y0); }
  const sc = scaleFor(W, H, [cw - 40, ch - 30], units);
  const k = 1 / sc.ratio;
  const placed = [];
  shown.forEach((v, i) => {
    const col = i % 2, row = Math.floor(i / 2);
    const x = m + col * cw, y = m + strip + (1 - row) * ch;   // first row on top
    const b = v.view.bounds, ox = x + 22 + (cw - 40 - (b.x1 - b.x0) * k) / 2 - b.x0 * k, oy = y + 16 + (ch - 30 - (b.y1 - b.y0) * k) / 2 - b.y0 * k;
    const P = (q) => [ox + q[0] * k, oy + q[1] * k];
    items.push(...viewItems(v.view, P), ...noteItems(v.notes, P, k));
    const name = tr('comforts.ie.side.' + v.side);
    items.push({ t: 'text', s: name, x: x + 6, y: y + 7, size: 9, align: 'left', bold: true }, { t: 'text', s: sc.label, x: x + 6, y: y + 3, size: 7, align: 'left', g: 0.25 });
    items.push({ t: 'line', pts: [[x + 6, y + 6], [x + Math.min(cw - 12, 90), y + 6]], w: 0.35, g: 0 });
    placed.push({ side: v.side, P, k });
  });
  return { number, title, items, scale: sc, views: placed };
}
