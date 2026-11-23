/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file: errors carry a `code`; part-link-ui.js words them through t() */
/**
 * part-link-bim.js — BimCraft's side of the link to PartCraft (0.10 BK.179 / SU.1814, session bim-part-link-10). The package, the update and the
 * link book are cc-partlink's (./partlink/, a copy of lib/partlink/ written only by tools/partlink/sync.mjs); this file reads an element out of the
 * open model and writes an accepted update back into it. DOM-free: tools/partlink-test/bim-test.mjs runs it in Node on a real IFC.
 *
 *   linkable(cls)                         → false for what the building tools rebuild from an outline (walls, floors, roofs, openings, spaces, levels)
 *   elementPackage(ent, id, opts)         → { pkg, mesh, hash }   ent = { ifc, model, name }, id = the element's expressID; the element in its own frame
 *                                           (mm, Z up, origin at its placement) with the neighbours within `radius` mm as read-only context
 *   elementLocalMesh(ent, id)             → the same mesh now (what an accept compares against)
 *   replaceBodyOp(guid, mesh, rec, ids, form?) → an op for IfcEditor.modelChange: the element's body becomes `mesh` (a tessellation), or `form` when given
 *                                           (bodyForm: one IfcExtrudedAreaSolid, or a Boolean result of extrusions), its link set CadCraft_PartLink is written
 *   bodyForm(update)                      → { as: 'csg' | 'prism' | 'mesh', solid?, prism? }   (0.11 SU.1814, su-finish-11) how an accepted update is written:
 *                                           the part's history as solids when it came with one, else the mesh as one extrusion when it IS a straight prism, else a mesh
 *   class PartLinks                       the book of this file's links + where updates wait (a partlink store)
 */
import * as PL from './partlink/index.js';
import { elementsOf } from './clash.js';
import { boundsMapOf, keysOf } from './ifc-vis.js';
import { lengthUnitMm, val } from './ifc-util.js';
import { op } from './model-ops.js';
import { scaleT } from './model-write.js';
import { meshToPrism } from './ifc-solids.js';   // 0.11 SU.1814: an element or a shape that IS a straight prism travels and comes back as one

/** Classes the building tools draw from an outline and rebuild after every change: a replaced body would be written over (model-walls.js, model-slabs.js, model-openings.js). */
const TOOL_CLASSES = /^(IFCWALL|IFCWALLSTANDARDCASE|IFCSLAB|IFCROOF|IFCCOVERING|IFCDOOR|IFCWINDOW|IFCOPENINGELEMENT|IFCSPACE|IFCBUILDINGSTOREY|IFCSITE|IFCBUILDING|IFCCURTAINWALL|IFCSTAIR|IFCSTAIRFLIGHT|IFCRAMP|IFCRAMPFLIGHT)$/;
export const linkable = (cls) => !!cls && !TOOL_CLASSES.test(String(cls).toUpperCase());

/** Viewer (Y up, m) → file world (Z up, mm): the same axes swap as model-plan.js viewerToPlan, before the storey. */
export const Y_UP_M_TO_Z_UP_MM = [1000, 0, 0, 0, 0, 0, 1000, 0, 0, -1000, 0, 0, 0, 0, 0, 1];

const coordination = (api, mid) => { try { const C = [...api.GetCoordinationMatrix(mid)]; return C.length === 16 ? C : PL.IDENT; } catch { return PL.IDENT; } };

/** The element's frame in the file's world, mm, Z up (its IfcLocalPlacement chain). */
export function placementOf(api, mid, id, unitMm) {
  const line = api.GetLine(mid, id, false);
  const lp = line?.ObjectPlacement?.value;
  if (!lp) return PL.IDENT.slice();
  return scaleT([...api.GetWorldTransformMatrix(mid, lp)], unitMm);
}

/** The matrices of one open model: viewer → file world mm, and viewer → the element's own frame. */
export function frameOf(ent, id) {
  const { api } = ent.ifc, mid = ent.model.modelID;
  const unitMm = lengthUnitMm(api, mid);
  const placement = placementOf(api, mid, id, unitMm);
  const pre = PL.mmul(Y_UP_M_TO_Z_UP_MM, PL.minv(coordination(api, mid)));
  return { unitMm, placement, pre, toLocal: PL.toLocalMatrix(placement, pre) };
}

/** The element as a welded mesh in its own frame. */
export function elementLocalMesh(ent, id) {
  const key = (ent.model.keyBase || 0) + id;
  const els = elementsOf(ent.model.batches, [key]);
  if (!els.length || !els[0].tris.length) throw new PL.PartLinkError('partlink.err.nogeometry');
  return PL.localMesh(els[0].tris, frameOf(ent, id).toLocal);
}

/** The package for one element, with the neighbours (read-only context). opts: { radius mm, budget triangles, file, now } */
export function elementPackage(ent, id, { radius = 3000, budget, file = '', now, link, rev = 0 } = {}) {
  const { api } = ent.ifc, mid = ent.model.modelID, model = ent.model;
  const cls = model.classOf.get(id) || '';
  if (!linkable(cls)) throw new PL.PartLinkError('partlink.err.notlinkable', { cls });
  const line = api.GetLine(mid, id, false);
  const guid = val(line?.GlobalId);
  if (!guid) throw new PL.PartLinkError('partlink.err.source');
  const key = (model.keyBase || 0) + id;
  const F = frameOf(ent, id);
  const mesh = elementLocalMesh(ent, id);
  // neighbours: boxes first (cheap, in viewer metres), the nearest few hundred read as triangles
  const target = boundsMapOf(model.batches, [key]).get(key);
  const tbox = [...target.min, ...target.max].map((v) => v * 1000);
  const boxes = boundsMapOf(model.batches, [...keysOf(model.batches)].filter((k) => k !== key && model.classOf.get(k - (model.keyBase || 0)) !== 'IfcSpace'));
  const cand = [];
  for (const [k, b] of boxes) {
    const box = [...b.min, ...b.max].map((v) => v * 1000);
    const gap = Math.hypot(...[0, 1, 2].map((a) => Math.max(tbox[a] - box[a + 3], box[a] - tbox[a + 3], 0)));
    if (gap <= radius) cand.push({ k, box, gap });
  }
  cand.sort((a, b) => a.gap - b.gap);
  const near = cand.slice(0, 1200);
  const els = elementsOf(model.batches, near.map((c) => c.k));
  const boxOf = new Map(near.map((c) => [c.k, c.box]));
  const elements = els.map((e) => {
    const eid = e.key - (model.keyBase || 0), l = api.GetLine(mid, eid, false);
    return { id: val(l?.GlobalId) || String(eid), name: val(l?.Name) || '', cls: model.classOf.get(eid) || '', box: boxOf.get(e.key), tris: e.tris };
  });
  const ctx = PL.contextMeshes(elements, tbox, { radius, ...(budget ? { budget } : {}), toLocal: F.toLocal });
  const storey = model.storeys?.find?.((s) => s.expressID === model.storeyOf.get(id));
  const pkg = PL.makePackage({
    link: link || PL.newLinkId(),
    source: { app: 'BimCraft', file, globalId: guid, ifcClass: cls, name: val(line.Name) || cls, storey: storey?.name || '', placement: F.placement },
    mesh, context: ctx.meshes, omitted: ctx.omitted + (cand.length - near.length), now, rev,
    prism: meshToPrism(mesh.positions, mesh.indices),   // 0.11: PartCraft builds a cut or an added feature on it as solids
  });
  return { pkg, mesh, hash: pkg.geometry.hash, context: ctx };
}

/** The element's expressID in this model by GlobalId (the elements with geometry), or null. */
export function findByGuid(ent, guid) {
  const { api } = ent.ifc, mid = ent.model.modelID;
  for (const id of ent.model.classOf.keys()) { const l = api.GetLine(mid, id, false); if (l && val(l.GlobalId) === guid) return id; }
  return null;
}

/** How an accepted update is written (0.11 SU.1814, su-finish-11). The part's history as solids when it came with one (a base and the
 *  features added or cut); else the shape as one extrusion when the mesh IS a straight prism; else the mesh. */
export function bodyForm(update) {
  const s = update.solid ? PL.cleanSolid(update.solid) : null;
  if (s && s.steps.length > 1) return { as: 'csg', solid: s };
  if (s) return { as: 'prism', prism: s.steps[0] };
  const p = meshToPrism(update.mesh.positions, update.mesh.indices);
  return p ? { as: 'prism', prism: PL.cleanPrism(p) } : { as: 'mesh' };
}

/** One prism (element frame, mm) as an IfcExtrudedAreaSolid through a ModelWriter. */
export function prismItem(w, p) {
  const prof = p.circle
    ? w.make('IFCCIRCLEPROFILEDEF', 'AREA', null, w.H(w.make('IFCAXIS2PLACEMENT2D', w.H(w.point2mm(p.circle.c[0], p.circle.c[1])), null)), w.u(p.circle.r))
    : w.profileVoids(p.outer, p.holes || []);
  return w.extrudeAt(prof, w.axisFrame(p.origin, p.n, p.x), p.depth);
}
/** A csg solid as one item: the base, then each step added (UNION) or cut (DIFFERENCE) in order. → { item, type } */
export function solidItem(w, form) {
  if (form.as === 'prism') return { item: prismItem(w, form.prism), type: 'SweptSolid' };
  let cur = prismItem(w, form.solid.steps[0]);
  for (const st of form.solid.steps.slice(1)) cur = w.make('IFCBOOLEANRESULT', st.op === 'cut' ? 'DIFFERENCE' : 'UNION', w.H(cur), w.H(prismItem(w, st)));
  return { item: cur, type: 'CSG' };
}

/**
 * The body of the element named by GlobalId becomes `mesh` (element frame, mm, Z up): an IfcTriangulatedFaceSet in the Body context, or, with
 * `form` (bodyForm, not 'mesh'), IFC's own solids; the placement, type, material and properties kept; the link's set CadCraft_PartLink written.
 * One undo step. `find()` → the element's id now.
 */
export function replaceBodyOp(guid, mesh, rec, find, form = null) {
  const positions = Array.from(mesh.positions), indices = Array.from(mesh.indices);
  return op((w) => {
    const id = find(w, guid);
    if (!id) throw Object.assign(new Error('partlink.err.gone'), { code: 'partlink.err.gone' });
    if (form && form.as !== 'mesh') { const s = solidItem(w, form); w.setShape(id, [w.rep('body', 'Body', s.type, [s.item])]); }
    else { const b = w.bodyItems({ type: 'mesh', positions, indices }); w.setShape(id, [w.rep('body', 'Body', b.type, b.items)]); }
    w.upsertPset(id, PL.PSET, PL.psetRows(rec).map(([n, v]) => [n, typeof v === 'number' ? 'IFCINTEGER' : 'IFCLABEL', v]));
    return { id, ids: [id] };
  });
}

/** The book of this file's links. store = a partlink store (idb or memory); key = what names the file (its name). */
export class PartLinks {
  constructor({ store, key = 'model', channel = null }) { this.store = store; this.key = key; this.channel = channel; this.book = new PL.LinkBook(); }
  async load() { this.book = new PL.LinkBook((await this.store.get('book', this.key)) || []); return this.book; }
  async save() { await this.store.put('book', this.key, this.book.list()); }
  /** Send one element: store its package, record the link, say so on the channel. → { link, pkg } */
  async send(ent, id, opts = {}) {
    const guid = val(ent.ifc.api.GetLine(ent.model.modelID, id, false)?.GlobalId);
    const had = this.book.byElement(guid)[0];
    const { pkg, hash, context } = elementPackage(ent, id, { ...opts, link: had?.link, rev: had?.rev || 0 });   // 0.11: the receiver counts on from the last revision taken
    await this.store.put('package', pkg.link, pkg);
    this.book.sent({ link: pkg.link, globalId: guid, name: pkg.source.name, ifcClass: pkg.source.ifcClass, model: this.key, hash });
    await this.save();
    this.channel?.post({ kind: 'package', link: pkg.link });
    return { link: pkg.link, pkg, context };
  }
  /** Take what PartCraft saved back since last time. → the records now marked changed. */
  async refresh(ent) {
    const hashNow = (rec) => { try { const id = findByGuid(ent, rec.globalId); return id ? PL.meshHash(elementLocalMesh(ent, id)) : null; } catch { return null; } };
    const got = await PL.takeUpdates(this.store, this.book, { currentHash: hashNow });
    if (got.length) await this.save();
    return got;
  }
  /** The update waiting to be accepted: { mesh, rev, from, note, volume } or null. */
  async pending(link) { const raw = await this.store.get('pending', link); if (!raw) return null; try { return PL.readUpdate(raw); } catch { return null; } }
  async reject(link) { const r = this.book.reject(link); if (r) { await this.store.delete('pending', link); await this.save(); } return r; }
  async accepted(link, hash) { const r = this.book.accept(link, { hash }); if (r) { await this.store.delete('pending', link); await this.save(); } return r; }
}
