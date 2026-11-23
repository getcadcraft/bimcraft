/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — the words are in the drawing's title strip and in an assistant's result, not in the app's interface. */
/**
 * plan-export.js — the plan of one level of an IFC model as a PDF or an SVG, with no window and no graphics card
 * (FIX-0101-PLAN-HEADLESS, getcadcraft/bimcraft#21). DOM-free. It draws from what BimCraft's tools wrote (walls with their joins,
 * the doors and windows in them), with the SAME functions the plan view uses (wallOutlines, wallPieces, openingSymbol), and
 * the PDF is the plan view's own writer (model-pdf.js planPdf): there is no second plan drawing.
 *
 *   planSceneOf(snapshot, levelId, { cutZ })       → scene { walls, symbols, … } (the shape model-pdf.js takes)
 *   planFile(editor, { level, format, paper, scale, name }) → { bytes, scale, sheet, level, walls, openings, missing }
 *        format 'pdf' | 'svg' | 'dwg' | 'dxf' (SU.1994, plan-cad.js: true size, layers, real dimensions; the scale sizes the text);
 *        paper 'a4' | 'a3' | 'letter' | 'tabloid' (default a3); scale a ratio (50 = 1:50) else the largest that fits.
 *
 * Not drawn here: what the tools did not make (imported meshes, furniture, rooms, dimensions). The result says how many walls
 * and openings were drawn, so a caller can tell an empty level from a missing one.
 */
import { snapshotModel } from './model-ops.js';
import { wallOutlines } from './model-walls.js';
import { wallPieces } from './model-plan.js';
import { openingSymbol } from './model-openings.js';
import { planPdf, sheetFor } from './model-pdf.js';
import { wallPlanEdges } from './wall-plan-graphics.js';
import { planCad, cadFile, CAD_FORMATS } from './plan-cad.js';   // SU.1994: format 'dwg' | 'dxf' (and the other DWG versions)
import { escXml as esc } from './util.js';   // shared helpers (0.11 PERF.74; tools/perf/util-copies.mjs)

/** The scene of a level (plan mm, y up) cut at cutZ above the level's floor (default 1200 mm). */
export function planSceneOf(snap, levelId, { cutZ = 1200 } = {}) {
  const walls = snap.walls.filter((w) => w.storey === levelId);
  const outlines = wallOutlines(walls.map((w) => ({ key: w.guid, a: w.a, b: w.b, t: w.t, bulge: w.bulge, off: w.joinOff })));
  const ids = new Set(walls.map((w) => w.id));
  const ops = snap.openings.filter((o) => ids.has(o.wall));
  const byId = new Map(walls.map((w) => [w.id, w]));
  const rows = walls.map((w) => {
    const poly = outlines.get(w.guid) || [];
    return { key: w.guid, guid: w.guid, poly, pieces: poly.length ? wallPieces(w, poly, ops.filter((o) => o.wall === w.id), cutZ) : [] };
  });
  const scene = {
    walls: rows, rooms: [], dims: [], cut: [], below: [], above: [], cutZ,
    symbols: ops.map((o) => ({ guid: o.guid, ...openingSymbol(o, byId.get(o.wall)) })),
  };
  const pieces = rows.flatMap((w) => w.pieces);
  if (pieces.length) scene.wallEdges = wallPlanEdges(rows);   // one outline round the walls: joins are not drawn, as in the plan view
  return scene;
}

const f1 = (v) => String(Math.round(v * 100) / 100);

/** The scene as an SVG in paper millimetres: walls filled grey with a heavy outline, doors and windows in black, a title strip. */
export function planSvg(scene, { title = '', lines = [], paper = 'a3', units = 'mm', scale = null } = {}) {
  const { PW, PH, margin, strip, bb, W, H, room, sc } = sheetFor(scene, { paper, units, scale });
  const k = 1 / sc[0];
  const ox = margin + (room[0] - W * k) / 2 - bb.x0 * k, oy = margin + strip + (room[1] - H * k) / 2 - bb.y0 * k;
  const P = ([x, y]) => [ox + x * k, PH - (oy + y * k)];   // the SVG's y runs down
  const d = (pts, close) => pts.map((p, i) => (i ? 'L' : 'M') + f1(P(p)[0]) + ' ' + f1(P(p)[1])).join('') + (close ? 'Z' : '');
  const segsD = (a) => { let s = ''; for (let i = 0; i + 3 < a.length; i += 4) s += d([[a[i], a[i + 1]], [a[i + 2], a[i + 3]]]); return s; };
  const out = [];
  out.push(`<svg xmlns="http://www.w3.org/2000/svg" width="${PW}mm" height="${PH}mm" viewBox="0 0 ${PW} ${PH}" font-family="Helvetica, Arial, sans-serif">`);
  out.push(`<rect width="${PW}" height="${PH}" fill="#fff"/>`);
  for (const w of scene.walls) for (const p of w.pieces || []) if (p.length) out.push(`<path d="${d(p, true)}" fill="#8c8c8c"/>`);
  for (const p of scene.wallEdges || []) if (p.length) out.push(`<path d="${d(p, true)}" fill="none" stroke="#000" stroke-width="0.5" stroke-linejoin="round"/>`);
  for (const s of scene.symbols) {
    if (s.fill) for (const p of s.fill) out.push(`<path d="${d(p, true)}" fill="#fff"/>`);
    out.push(`<path d="${segsD((s.lines || []).flat())}" fill="none" stroke="#000" stroke-width="0.35"/>`);
    for (const a of s.arcs || []) {
      const steps = Math.max(8, Math.ceil(Math.abs(a.a1 - a.a0) / (Math.PI / 32))), pts = [];
      for (let i = 0; i <= steps; i++) { const t = a.a0 + (a.a1 - a.a0) * i / steps; pts.push([a.c[0] + a.r * Math.cos(t), a.c[1] + a.r * Math.sin(t)]); }
      out.push(`<path d="${d(pts)}" fill="none" stroke="#000" stroke-width="0.18"/>`);
    }
    out.push(`<path d="${segsD((s.thin || []).flat())}" fill="none" stroke="#000" stroke-width="0.18"/>`);
    if (s.dashed?.length) out.push(`<path d="${segsD(s.dashed.flat())}" fill="none" stroke="#000" stroke-width="0.18" stroke-dasharray="1.5 1"/>`);
  }
  out.push(`<rect x="${margin}" y="${f1(PH - margin - strip)}" width="${f1(PW - 2 * margin)}" height="${strip}" fill="none" stroke="#000" stroke-width="0.35"/>`);
  out.push(`<text x="${margin + 3}" y="${f1(PH - margin - strip + 7)}" font-size="5" font-weight="bold">${esc(title)}</text>`);
  lines.slice(0, 2).forEach((l, i) => out.push(`<text x="${margin + 3}" y="${f1(PH - margin - strip + 11.5 + i * 3.6)}" font-size="3">${esc(l)}</text>`));
  out.push(`<text x="${f1(PW - margin - 3)}" y="${f1(PH - margin - strip + 7)}" font-size="4" text-anchor="end">${esc(sc[1])}</text>`);
  out.push('</svg>');
  return { bytes: new TextEncoder().encode(out.join('\n')), scale: sc[1], sheet: { w: PW, h: PH, scale: sc[1], fits: true } };
}

/** One level of the model an IfcEditor holds, as a PDF or SVG file. Names the levels when the one asked for is missing. */
export function planFile(ed, { level = null, format = 'pdf', paper = 'a3', scale = null, name = '', cutZ = 1200 } = {}) {
  const snap = snapshotModel(ed);
  if (!snap.levels.length) throw new Error('The model has no levels (IfcBuildingStorey), so there is no plan to draw.');
  const ref = level == null || level === '' ? null : String(level).trim().toLowerCase();
  const lv = ref === null ? (snap.levels.find((l) => Math.abs(l.elevation) < 1) || snap.levels[0])
    : snap.levels.find((l) => l.guid === level) || snap.levels.find((l) => String(l.name).toLowerCase() === ref);
  if (!lv) throw new Error('No level "' + level + '". Levels: ' + snap.levels.map((l) => l.name).join(', ') + '.');
  const scene = planSceneOf(snap, lv.id, { cutZ });
  const opts = { title: lv.name, lines: [name || 'IFC model', 'Plan cut at ' + Math.round(cutZ) + ' mm above the level'], paper, units: 'mm', scale };
  const sheet = sheetFor(scene, { paper, units: 'mm', scale });
  if (CAD_FORMATS[format]) {   // SU.1994: the same plan as DWG or DXF, at true size, annotation sized for the sheet's scale
    const kinds = new Map(snap.openings.map((o) => [o.guid, o.kind]));
    const f = cadFile(planCad(scene, { units: 'mm', ratio: sheet.sc[0], kindOf: (g) => kinds.get(g) || null }), format);
    return { bytes: f.bytes, scale: sheet.sc[1], sheet: { w: sheet.PW, h: sheet.PH, scale: sheet.sc[1] }, level: lv.name, walls: scene.walls.length, openings: scene.symbols.length, missing: 0, entities: f.report.counts };
  }
  const r = format === 'svg' ? planSvg(scene, opts) : planPdf(scene, opts);
  return { bytes: r.bytes, scale: r.scale?.label || r.scale, sheet: { w: sheet.PW, h: sheet.PH, scale: r.scale?.label || r.scale }, level: lv.name, walls: scene.walls.length, openings: scene.symbols.length, missing: r.missing || 0 };
}
