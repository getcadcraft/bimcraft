/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — geometry and panel specs; the words are the host's (panels.* and frm.* keys). */
/**
 * panels-bim.js — BimCraft's walls, floors and roofs as framing PANELS in timber or light-gauge steel (0.8 EG.6, round 5, session bim-build_PART_5).
 * DOM-free; bin/test-bimcraft.mjs --r52. The panel maths is framing.js (a byte-identical copy of DetailCraft's: wallPanel, floorPanel, roofPanel, cutList,
 * panelSvg, panelProblems, panelsPdf); this file only turns a drawn wall, floor or roof into the spec framing.js takes (cleanPanelSpec).
 *
 *   panelHosts({ walls, openings, floors, roofs, loops: (storeyId) → { rooms, outlines }, levels, fmt }) → [{ id, kind, guid, level, levelName, size, spec }]  (the host adds the display name)
 *     wall   one per drawn wall: its length and height, its doors and windows as openings (x from the wall's start, width, height, sill)
 *     floor  one per floor slab: the joists run the short way of the bounding rectangle of its outline (the rectangle's long side is the panel width)
 *     roof   one per roof: a gable panel over the bounding rectangle of the walls' outline: rafters span half the short side, the ridge runs the long way,
 *            the rise from the roof's pitch. A hip or a complex roof is framed as that gable and says so (note 'approx')
 *   panelSpec(host, { material, size, spacing, ridge }) → spec    cleanPanelSpec'd, the person's material and size applied (a size of the other material is dropped)
 *   buildPanels(hosts, opts) → [{ host, spec, panel, rows, problems }]
 */
import { cleanPanelSpec, panelOf, cutList, panelProblems, TIMBER, STEEL } from './framing.js';
import { loopAt } from './model-rooms.js';

const bbox = (poly) => { const xs = poly.map((p) => p[0]), ys = poly.map((p) => p[1]); return { x0: Math.min(...xs), y0: Math.min(...ys), x1: Math.max(...xs), y1: Math.max(...ys) }; };

export function panelHosts({ walls = [], openings = [], floors = [], roofs = [], loops = () => ({ rooms: [], outlines: [] }), levels = [], fmt = (mm) => String(Math.round(mm)) } = {}) {
  const lvName = (id) => levels.find((l) => l.id === id)?.name || '';
  const out = [];
  walls.forEach((w, i) => {
    const ops = openings.filter((o) => o.wallGuid === w.guid).map((o) => ({ x: Math.max(0, o.offset), width: o.width, height: o.height, sill: o.kind === 'window' ? o.sill || 0 : 0 }));
    out.push({ id: 'w:' + w.guid, kind: 'wall', guid: w.guid, level: w.storey, levelName: lvName(w.storey), size: fmt(w.len), spec: { kind: 'wall', length: w.len, height: w.height, openings: ops }, order: i });
  });
  for (const f of floors) {
    const L = loops(f.storey), loop = loopAt(f.mode === 'building' ? L.outlines : L.rooms, f.seed);
    if (!loop) continue;
    const b = bbox(loop.poly), a = b.x1 - b.x0, c = b.y1 - b.y0;
    out.push({ id: 'f:' + f.guid, kind: 'floor', guid: f.guid, level: f.storey, levelName: lvName(f.storey), size: fmt(Math.max(bbox(loop.poly).x1 - bbox(loop.poly).x0, bbox(loop.poly).y1 - bbox(loop.poly).y0)), spec: { kind: 'floor', width: Math.max(a, c), span: Math.min(a, c) } });
  }
  for (const r of roofs) {
    const base = levels.find((l) => l.guid === r.walls)?.id ?? r.storey, L = loops(base), loop = loopAt(L.outlines, r.seed);   // a roof sits on the level above the walls it covers
    if (!loop) continue;
    const b = bbox(loop.poly), a = b.x1 - b.x0, c = b.y1 - b.y0, run = Math.min(a, c) / 2, pitch = Number.isFinite(r.pitch) ? r.pitch : 30;
    out.push({ id: 'r:' + r.guid, kind: 'roof', guid: r.guid, level: r.storey, levelName: lvName(r.storey), size: fmt(Math.max(a, c)), approx: true,
      spec: { kind: 'roof', length: Math.max(a, c), run, rise: run * Math.tan(pitch * Math.PI / 180), overhang: Number.isFinite(r.overhang) ? r.overhang : 400 } });
  }
  return out;
}

/** The sizes a material offers for a kind of panel (framing.js defaults first). */
export const sizesFor = (material) => Object.keys(material === 'lgs' ? STEEL : TIMBER);

export function panelSpec(host, { material = 'timber', size = '', spacing = 0, ridge = '' } = {}) {
  const sz = (material === 'lgs' ? STEEL : TIMBER)[size] ? size : undefined;
  const j = { ...host.spec, material, ...(sz ? { size: sz } : {}), ...(spacing > 0 ? { spacing } : {}), ...(host.kind === 'roof' && ridge && (material === 'lgs' ? STEEL : TIMBER)[ridge] ? { ridge } : {}) };
  return cleanPanelSpec(j);
}

export function buildPanels(hosts, opts = {}) {
  const out = [];
  for (const host of hosts) {
    const spec = panelSpec(host, opts);
    if (!spec) continue;
    const panel = panelOf(spec);
    out.push({ host, spec, panel, rows: cutList(panel), problems: panelProblems(panel, undefined, { name: host.nameFor ? host.nameFor(host) : host.id }) });
  }
  return out;
}
