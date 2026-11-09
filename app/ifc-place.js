/* SPDX-License-Identifier: Apache-2.0 */
/**
 * ifc-place.js — places library items (libitem.js format 1) into an open IFC model, swaps and updates them,
 * and reads them back (docs/LIBRARY-SPEC.md §3.1). No DOM: bin/test-bimcraft.mjs --library runs it in Node.
 * Used through IfcEditor (ifc-edit.js: placeItem / swapItem), so undo, the change list and save work.
 *
 *   const pl = new IfcPlacer(WebIFC, api, modelID);
 *   pl.info()                       { schema, unitMm, storeys:[{id, name, elevation (mm)}] }
 *   pl.place(item, { storey, x, y, rot, z, itemNumber, quantity, notes, library, sha256, sourceFile, standInHeight })
 *                                   z: mm above the storey (0.6 DC.117: a fixture at the ceiling); default 0
 *        → { id, typeId, journal }   x, y in mm in model coordinates (Z up, the file's own origin), rot in degrees
 *   pl.placeLike(srcId, { storey, x, y, rot, itemNumber, quantity, notes })   another placement of an existing one
 *        → { id, typeId, journal }   same type, class and library data; no item JSON needed (copy / paste / duplicate)
 *   pl.swap(id, item, opts)         keeps placement, ItemNumber, Quantity, Notes; new/shared type; the occurrence takes the
 *                                   new item's IFC class (0.4 B11; opts.keepClass keeps it) → { classChanged, journal }
 *   pl.placements()                 [{ id, name, storey, x, y, rot, itemNumber, quantity, notes, library, uuid, version, sha256,
 *                                      license, attribution, sourceFile, typeId }]
 *   pl.schedule()                   the Equipment tab's list, same shape as dwg-equipment.js equipmentList()
 *   pl.nextItemNumber()             next free whole number
 *   pl.wallFaces(storey)            [{ a:[x,y], b:[x,y], n:[nx,ny] }] wall faces in model mm (n points away from the wall)
 *   pl.elementsFrame(snap, { zBase }) { rot, x, y, box } the plan frame of copied elements (turned like the first one)
 *   pl.planRotation(storey)         the building's turn in plan, degrees [0, 90), from its walls
 *   snapToWall(p, item, faces)      → { x, y, rot, face } back of the item against the nearest face
 *   orientedBox(points, rot)        bounds of points in plan axes turned rot → { x, y, box }
 *   undoJournal(api, mid, journal)  deletes what a place/swap created and writes back what it changed
 *
 * Geometry is stored once per type (one IfcTypeProduct per item uuid@version, or per sha256 for items from files):
 *   Body      IFC4: IfcTriangulatedFaceSet ('Tessellation') · IFC2X3: IfcFacetedBrep ('Brep') when the mesh is
 *             closed, else IfcShellBasedSurfaceModel of IfcOpenShell ('SurfaceModel'); IfcPolyLoop triangles
 *   FootPrint IfcGeometricCurveSet of 2D IfcPolylines (arcs, circles, ellipses, bulges and hatch loops tessellated; text left out)
 *   Clearance item.clearances as boxes, same body kind, in a 'Clearance' representation
 * Each placement: an occurrence with an IfcLocalPlacement relative to the storey's placement, IfcMappedItems of
 * the type's maps, IfcRelDefinesByType, IfcRelContainedInSpatialStructure, and the psets CadCraft_Placement,
 * CadCraft_LibraryItem, CadCraft_Equipment, CadCraft_SourceAttributes (the type gets CadCraft_LibraryItem).
 */
import { ids, val, lengthUnitMm, productTriangles, inv4, apply4, mul4, deleteLine, restored, retypeLine, replaceLine } from './ifc-util.js';
import { decodeElec, elecText, planBounds, boxFromPlan, variantOf, itemAsVariant } from './libitem.js';
import { t } from "./i18n.js";

const D2R = Math.PI / 180;

/** item.ifc.class → [IFC4 occurrence, IFC4 type, IFC2X3 occurrence, IFC2X3 type]. */
const CLASSES = {
  IfcFurniture: ['IFCFURNITURE', 'IFCFURNITURETYPE', 'IFCFURNISHINGELEMENT', 'IFCFURNITURETYPE'],
  IfcFurnishingElement: ['IFCFURNISHINGELEMENT', 'IFCFURNISHINGELEMENTTYPE', 'IFCFURNISHINGELEMENT', 'IFCFURNISHINGELEMENTTYPE'],
  IfcBuildingElementProxy: ['IFCBUILDINGELEMENTPROXY', 'IFCBUILDINGELEMENTPROXYTYPE', 'IFCBUILDINGELEMENTPROXY', 'IFCBUILDINGELEMENTPROXYTYPE'],
  IfcSanitaryTerminal: ['IFCSANITARYTERMINAL', 'IFCSANITARYTERMINALTYPE', 'IFCFLOWTERMINAL', 'IFCSANITARYTERMINALTYPE'],
  IfcElectricAppliance: ['IFCELECTRICAPPLIANCE', 'IFCELECTRICAPPLIANCETYPE', 'IFCFLOWTERMINAL', 'IFCELECTRICAPPLIANCETYPE'],
  IfcLightFixture: ['IFCLIGHTFIXTURE', 'IFCLIGHTFIXTURETYPE', 'IFCFLOWTERMINAL', 'IFCLIGHTFIXTURETYPE'],
  // Library doors and windows (kinds door / window, 2026-11-02): typed as doors and windows, placed as free elements (no wall cut yet)
  IfcDoor: ['IFCDOOR', 'IFCDOORTYPE', 'IFCDOOR', 'IFCDOORSTYLE'],
  IfcWindow: ['IFCWINDOW', 'IFCWINDOWTYPE', 'IFCWINDOW', 'IFCWINDOWSTYLE'],
};
export const PSETS = { placement: 'CadCraft_Placement', library: 'CadCraft_LibraryItem', equipment: 'CadCraft_Equipment', source: 'CadCraft_SourceAttributes' };

/**
 * 2026-11-02: how a Library door / window's body sits in its own axes → { turn (0 | 90), dx, dy, dz, width, depth, height } in mm.
 * Turned (x, y) → (y, −x) when it is deeper than wide, then moved by (dx, dy, dz) its width runs 0 → width along x, its thickness is
 * centred on y = 0 and it stands on z = 0: the axes of a wall opening (model-openings.js). Body: { type: mesh, positions } or a box.
 */
export const FRAME_PSET = 'CadCraft_OpeningFrame';
export function libraryFrame(body) {
  let P = [];
  if (body?.type === 'mesh' && Array.isArray(body.positions)) P = body.positions;
  else if (body?.type === 'box') P = [body.x, body.y, body.z, body.x + body.w, body.y + body.d, body.z + body.h];
  if (P.length < 6) return null;
  const lo = [Infinity, Infinity, Infinity], hi = [-Infinity, -Infinity, -Infinity];
  for (let i = 0; i + 2 < P.length; i += 3) for (let k = 0; k < 3; k++) { const v = Number(P[i + k]); if (v < lo[k]) lo[k] = v; if (v > hi[k]) hi[k] = v; }
  if (!lo.every(Number.isFinite) || !hi.every(Number.isFinite)) return null;
  const turn = hi[1] - lo[1] > hi[0] - lo[0] ? 90 : 0;
  // turned: x' = y, y' = −x
  const [x0, x1, y0, y1] = turn ? [lo[1], hi[1], -hi[0], -lo[0]] : [lo[0], hi[0], lo[1], hi[1]];
  const r = (v) => Math.round(v * 1e4) / 1e4;
  return { turn, dx: r(-x0), dy: r(-(y0 + y1) / 2), dz: r(-lo[2]), width: r(x1 - x0), depth: r(y1 - y0), height: r(hi[2] - lo[2]) };
}
function frameRows(f, stretch = []) {
  const ax = ['x', 'y', 'z'].filter((a) => Array.isArray(stretch) && stretch.includes(a));
  return [['Stretch', 'IFCLABEL', ax.join(',')],   // 2026-11-02: the axes the Library lets it be stretched along ('' = none)
    ['Turn', 'IFCPLANEANGLEMEASURE', f.turn], ['Dx', 'IFCLENGTHMEASURE', f.dx], ['Dy', 'IFCLENGTHMEASURE', f.dy], ['Dz', 'IFCLENGTHMEASURE', f.dz],
    ['Width', 'IFCPOSITIVELENGTHMEASURE', f.width], ['Depth', 'IFCPOSITIVELENGTHMEASURE', f.depth], ['Height', 'IFCPOSITIVELENGTHMEASURE', f.height]];
}
/** The frame a type carries (mm, as libraryFrame), or null. */
export function typeFrame(placer, typeId) {
  const p = placer.typePsets(typeId)[FRAME_PSET]?.props;
  if (!p) return null;
  const n = (k) => Number(p[k]?.value ?? p[k]);
  const f = { turn: n('Turn') === 90 ? 90 : 0, dx: n('Dx'), dy: n('Dy'), dz: n('Dz'), width: n('Width'), depth: n('Depth'), height: n('Height'),
    stretch: String(p.Stretch?.value ?? '').split(',').filter((a) => ['x', 'y', 'z'].includes(a)) };
  return ['dx', 'dy', 'dz', 'width', 'height'].every((k) => Number.isFinite(f[k])) && f.width > 0 && f.height > 0 ? f : null;
}

/** The pair of classes an item becomes in this schema. */
export function classesFor(item, schema) {
  let c = item?.ifc?.class || 'IfcBuildingElementProxy';
  if (c === 'IfcFlowTerminal') c = /^electrical\//.test(item.category || '') ? 'IfcLightFixture' : 'IfcSanitaryTerminal';
  const row = CLASSES[c] || CLASSES.IfcBuildingElementProxy;
  const v4 = !/^IFC2X3/i.test(schema);
  return { requested: item?.ifc?.class || null, used: CLASSES[c] ? c : 'IfcBuildingElementProxy', occ: v4 ? row[0] : row[2], type: v4 ? row[1] : row[3] };
}

/**
 * 0.7 W3.19: an item with `variants` is placed as one of them. `opts.variant` ({ id, … }) names it, else the item's default is
 * used. → [the item read as that variant (its body, plan, ports; the name gets " — <variant>"), opts with variant { id, name, values }].
 * Anything without variants comes back as it was.
 */
export function withVariant(item, opts = {}) {
  if (!item || !item.variants) return [item, opts];
  const row = variantOf(item, opts?.variant?.id ?? null);
  if (!row) return [item, opts];
  const one = itemAsVariant(item, row.id, { named: true });
  return [one, { ...opts, variant: { id: row.id, name: row.name, values: row.values || {} } }];
}

export class IfcPlacer {
  constructor(W, api, mid) {
    this.W = W; this.api = api; this.mid = mid;
    this.schema = api.GetModelSchema(mid);
    this.v4 = !/^IFC2X3/i.test(this.schema);
    this.x3 = /^IFC4X3/i.test(this.schema);
    this.unitMm = lengthUnitMm(api, mid);
    this.journal = null;
  }

  // ---- low-level writing (every created id and every first change of an existing line is journaled) ----
  begin() { this.journal = { created: [], before: new Map() }; }
  make(name, ...args) {
    const e = this.api.CreateIfcEntity(this.mid, this.api.GetTypeCodeFromName(name), ...args);
    this.api.WriteLine(this.mid, e);
    // web-ifc drops a line it cannot write without saying so; its id is then handed out again.
    if (!(e.expressID > 0) || e.expressID === this._last) throw new Error(t('place.err.write', { what: name }));
    this._last = e.expressID;
    this.journal.created.push(e.expressID);
    return e.expressID;
  }
  touch(id) { if (!this.journal.before.has(id) && !this.journal.created.includes(id)) this.journal.before.set(id, this.api.GetLine(this.mid, id, false)); return this.api.GetLine(this.mid, id, false); }
  write(line) { this.api.WriteLine(this.mid, line); }
  H(id) { return new this.W.Handle(id); }
  T(name, v) { return this.api.CreateIfcType(this.mid, this.api.GetTypeCodeFromName(name), v); }
  L(s) { return s === null || s === undefined || s === '' ? null : this.T('IFCLABEL', String(s).slice(0, 255)); }
  X(s) { return s === null || s === undefined || s === '' ? null : this.T('IFCTEXT', String(s)); }
  E(v) { return { type: 3, value: v }; }
  guid() { return this.api.CreateIFCGloballyUniqueId(this.mid); }
  u(mm) { return mm / this.unitMm; }   // mm → file units

  ownerHistory() {
    if (this._oh === undefined) { const o = ids(this.api, this.mid, 'IFCOWNERHISTORY')[0]; this._oh = o ? this.H(o) : null; }
    return this._oh;
  }

  // ---- reading ----
  info() {
    const storeys = ids(this.api, this.mid, 'IFCBUILDINGSTOREY').map((id) => {
      const s = this.api.GetLine(this.mid, id, false);
      const Wm = s.ObjectPlacement ? this.api.GetWorldTransformMatrix(this.mid, s.ObjectPlacement.value) : null;
      return { id, name: val(s.Name) || val(s.LongName) || t('place.storey.unnamed', { id }), elevation: Wm ? Wm[14] * this.unitMm : (Number(val(s.Elevation)) || 0) * this.unitMm };
    }).sort((a, b) => a.elevation - b.elevation);
    return { schema: this.schema, unitMm: this.unitMm, storeys };
  }

  /** psets on an object: name → { id, rel, props: name → { id, value } } */
  psetsOf(id) {
    if (!this._psetIndex) {
      this._psetIndex = new Map();
      for (const rid of ids(this.api, this.mid, 'IFCRELDEFINESBYPROPERTIES')) {
        const r = this.api.GetLine(this.mid, rid, false);
        const ps = r.RelatingPropertyDefinition?.value;
        if (!ps) continue;
        for (const h of r.RelatedObjects || []) { if (!this._psetIndex.has(h.value)) this._psetIndex.set(h.value, []); this._psetIndex.get(h.value).push({ ps, rel: rid }); }
      }
    }
    const out = {};
    for (const { ps, rel } of this._psetIndex.get(id) || []) out[this.psetName(ps)] = { id: ps, rel, props: this.propsOf(ps) };
    return out;
  }
  psetName(ps) { const l = this.api.GetLine(this.mid, ps, false); return val(l.Name) || ''; }
  propsOf(ps) {
    const l = this.api.GetLine(this.mid, ps, false), out = {};
    for (const h of l.HasProperties || []) { const p = this.api.GetLine(this.mid, h.value, false); if (p && p.Name) out[val(p.Name)] = { id: h.value, value: val(p.NominalValue) }; }
    return out;
  }
  typePsets(typeId) {
    const t = this.api.GetLine(this.mid, typeId, false), out = {};
    for (const h of t.HasPropertySets || []) out[this.psetName(h.value)] = { id: h.value, props: this.propsOf(h.value) };
    return out;
  }
  relTypeOf() {
    const m = new Map();
    for (const rid of ids(this.api, this.mid, 'IFCRELDEFINESBYTYPE')) {
      const r = this.api.GetLine(this.mid, rid, false);
      for (const h of r.RelatedObjects || []) m.set(h.value, { rel: rid, type: r.RelatingType?.value });
    }
    return m;
  }
  storeyOf() {
    const m = new Map();
    for (const rid of ids(this.api, this.mid, 'IFCRELCONTAINEDINSPATIALSTRUCTURE')) {
      const r = this.api.GetLine(this.mid, rid, false);
      for (const h of r.RelatedElements || []) m.set(h.value, r.RelatingStructure?.value);
    }
    return m;
  }

  /** Types this tool made: key ("uuid@version" or "sha:<sha256>") → type id. */
  libraryTypes() {
    const out = new Map();
    // GetAllTypesOfModel is fixed when the file opens, so the classes this tool writes are always looked at too.
    const names = new Set(Object.values(CLASSES).flatMap((r) => [r[1], r[3]]));
    for (const t of this.api.GetAllTypesOfModel(this.mid)) {
      const n = String(t.typeName || '').toUpperCase();
      if (/TYPE$/.test(n) && !/^IFCREL/.test(n)) names.add(n);
    }
    for (const n of names) {
      let list = [];
      try { list = ids(this.api, this.mid, n); } catch (e) { continue; }
      for (const id of list) {
        let line;
        try { line = this.api.GetLine(this.mid, id, false); } catch (e) { continue; }
        if (!line || !line.HasPropertySets) continue;
        const lib = this.typePsets(id)[PSETS.library];
        if (!lib) continue;
        const p = lib.props;
        const key = p.ItemUuid?.value ? p.ItemUuid.value + '@' + p.ItemVersion?.value + (p.Variant?.value ? '#' + p.Variant.value : '') : 'sha:' + (p.ItemSha256?.value || '');   // 0.7 W3.19: one type per variant
        if (!out.has(key)) out.set(key, id);
      }
    }
    return out;
  }

  placements() {
    const rt = this.relTypeOf(), so = this.storeyOf(), out = [];
    this._psetIndex = null;
    for (const [id] of [...(this._psetIndexAll() || [])]) {
      const ps = this.psetsOf(id);
      const pl = ps[PSETS.placement];
      if (!pl) continue;
      const lib = ps[PSETS.library]?.props || {}, eq = ps[PSETS.equipment]?.props || {};
      const line = this.api.GetLine(this.mid, id, false);
      const Wm = line.ObjectPlacement ? this.api.GetWorldTransformMatrix(this.mid, line.ObjectPlacement.value) : null;
      out.push({
        id, name: val(line.Name) || '', cls: line.constructor?.name || '', storey: so.get(id) ?? null, typeId: rt.get(id)?.type ?? null,
        x: Wm ? Wm[12] * this.unitMm : 0, y: Wm ? Wm[13] * this.unitMm : 0, rot: Wm ? Math.round(Math.atan2(Wm[1], Wm[0]) / D2R * 1000) / 1000 : 0,
        itemNumber: String(pl.props.ItemNumber?.value ?? ''), quantity: pl.props.Quantity?.value ?? 1, notes: pl.props.Notes?.value || '',
        library: lib.Library?.value || '', uuid: lib.ItemUuid?.value || '', version: lib.ItemVersion?.value ?? null, sha256: lib.ItemSha256?.value || '',
        variant: lib.Variant?.value || '', variantName: lib.VariantName?.value || '',   // 0.7 W3.19: the library item's variant this placement is
        license: lib.License?.value || '', attribution: lib.Attribution?.value || '', sourceFile: lib.SourceFile?.value || '',
        equipment: Object.fromEntries(Object.entries(eq).map(([k, v]) => [k, v.value])),
      });
    }
    return out.sort((a, b) => String(a.itemNumber).localeCompare(String(b.itemNumber), undefined, { numeric: true }));
  }
  /** Every Library item in the file with its credit: read from the property sets themselves, because a placed item has its set on the occurrence and a door or window on its type. */
  libraryCredits() {
    const out = [];
    for (const id of ids(this.api, this.mid, 'IFCPROPERTYSET')) {
      if (this.psetName(id) !== PSETS.library) continue;
      const lib = this.propsOf(id);
      out.push({ uuid: lib.ItemUuid?.value || '', version: lib.ItemVersion?.value ?? 0, license: lib.License?.value || '', attribution: lib.Attribution?.value || '' });
    }
    return out;
  }

  _psetIndexAll() { this.psetsOf(-1); return this._psetIndex; }

  nextItemNumber() {
    let n = 0;
    for (const p of this.placements()) { const k = parseInt(p.itemNumber, 10); if (Number.isFinite(k) && k > n) n = k; }
    return String(n + 1);
  }

  // ---- contexts and shared geometry bits ----
  contexts() {
    if (this._ctx) return this._ctx;
    const api = this.api, mid = this.mid;
    const mains = ids(api, mid, 'IFCGEOMETRICREPRESENTATIONCONTEXT');
    const model = mains.find((id) => /^model$/i.test(val(api.GetLine(mid, id, false).ContextType) || '')) ?? mains[0];
    if (!model) throw new Error(t('place.err.no_context'));
    const subs = new Map();
    for (const id of ids(api, mid, 'IFCGEOMETRICREPRESENTATIONSUBCONTEXT')) {
      const c = api.GetLine(mid, id, false);
      const k = String(val(c.ContextIdentifier) || '').toLowerCase();
      if (k && !subs.has(k)) subs.set(k, id);
    }
    const derived = { type: this.W.UNKNOWN, value: null, derived: true };
    const sub = (name, view) => subs.get(name.toLowerCase()) || this.make('IFCGEOMETRICREPRESENTATIONSUBCONTEXT', this.L(name), this.L('Model'), derived, derived, derived, derived, this.H(model), null, this.E(view), null);
    this._ctx = { body: sub('Body', 'MODEL_VIEW'), foot: sub('FootPrint', 'MODEL_VIEW'), clear: null, model, sub };
    return this._ctx;
  }
  point3(x, y, z) { return this.make('IFCCARTESIANPOINT', [x, y, z]); }
  point2(x, y) { return this.make('IFCCARTESIANPOINT', [x, y]); }
  dir(x, y, z) { return this.make('IFCDIRECTION', z === undefined ? [x, y] : [x, y, z]); }
  origin() { return this._origin || (this._origin = this.make('IFCAXIS2PLACEMENT3D', this.H(this.point3(0, 0, 0)), null, null)); }
  operator() {
    if (this._op) return this._op;
    const pt = this.point3(0, 0, 0);
    this._op = this.make('IFCCARTESIANTRANSFORMATIONOPERATOR3D', null, null, this.H(pt), null, null);
    return this._op;
  }

  // ---- geometry → IFC ----
  /** Body items for a mesh or box in mm → [ids], representation type. */
  /** CC-RENDER-PARTS ('from-to #rrggbb[/alpha];…', triangle ranges of the mesh) → {items, type} with each part styled, or null. */
  partBodyItems(item, body) {
    const text = item.source_attrs && item.source_attrs['CC-RENDER-PARTS'];
    if (!text || body.type !== 'mesh' || typeof text !== 'string' || text.length > 2000) return null;
    const parts = [], nTri = body.indices.length / 3;
    for (const sPart of text.split(';')) {
      const m = /^\s*(\d{1,7})-(\d{1,7}) (#[0-9a-fA-F]{6})(?:\/(0(?:\.\d+)?|1(?:\.0+)?))?\s*$/.exec(sPart);
      if (!m) return null;
      const from = Number(m[1]), to = Number(m[2]);
      if (to < from || to >= nTri || (parts.length && from <= parts[parts.length - 1].to) || parts.length >= 64) return null;
      parts.push({ from, to, rgb: [1, 3, 5].map((o) => Math.round((parseInt(m[3].slice(o, o + 2), 16) / 255) * 1e4) / 1e4), tr: m[4] === undefined ? 0 : Math.round((1 - Number(m[4])) * 100) / 100 });
    }
    const out = [];
    let type = null;
    for (const pt of parts) {
      // the part's own mesh: its triangles, its vertices renumbered
      const map = new Map(), positions = [], indices = [];
      for (let t = pt.from; t <= pt.to; t++) for (let k = 0; k < 3; k++) {
        const v = body.indices[t * 3 + k];
        if (!map.has(v)) { map.set(v, positions.length / 3); positions.push(body.positions[v * 3], body.positions[v * 3 + 1], body.positions[v * 3 + 2]); }
        indices.push(map.get(v));
      }
      const b = this.bodyItems({ type: 'mesh', positions, indices });
      if (type && b.type !== type) return null;   // one representation type for the whole body (IFC2X3: Brep / SurfaceModel)
      type = b.type;
      const col = this.make('IFCCOLOURRGB', null, ...pt.rgb);
      const shade = this.v4 ? this.make('IFCSURFACESTYLESHADING', this.H(col), pt.tr) : this.make('IFCSURFACESTYLESHADING', this.H(col));
      const style = this.make('IFCSURFACESTYLE', null, 'BOTH', [this.H(shade)]);
      for (const it of b.items) this.make('IFCSTYLEDITEM', this.H(it), this.v4 ? [this.H(style)] : [this.H(this.make('IFCPRESENTATIONSTYLEASSIGNMENT', [this.H(style)]))], null);
      out.push(...b.items);
    }
    return out.length ? { items: out, type } : null;
  }
  bodyItems(body) {
    const tri = body.type === 'box' ? boxMesh(body) : { positions: body.positions, indices: body.indices };
    const P = tri.positions.map((v) => this.u(v)), I = tri.indices;
    if (this.v4) {
      const coords = [];
      for (let i = 0; i < P.length; i += 3) coords.push([P[i], P[i + 1], P[i + 2]]);
      const list = this.x3 ? this.make('IFCCARTESIANPOINTLIST3D', coords, null) : this.make('IFCCARTESIANPOINTLIST3D', coords);
      const PI = (n) => this.T('IFCPOSITIVEINTEGER', n);
      const idx = [];
      for (let i = 0; i < I.length; i += 3) idx.push([PI(I[i] + 1), PI(I[i + 1] + 1), PI(I[i + 2] + 1)]);
      const closed = isClosed(I);
      const fs = this.x3 ? this.make('IFCTRIANGULATEDFACESET', this.H(list), null, this.T('IFCBOOLEAN', closed), idx, null)
        : this.make('IFCTRIANGULATEDFACESET', this.H(list), null, this.T('IFCBOOLEAN', closed), idx, null);
      return { items: [fs], type: 'Tessellation' };
    }
    const pts = [];
    for (let i = 0; i < P.length; i += 3) pts.push(this.point3(P[i], P[i + 1], P[i + 2]));
    const faces = [];
    for (let i = 0; i < I.length; i += 3) {
      if (I[i] === I[i + 1] || I[i + 1] === I[i + 2] || I[i] === I[i + 2]) continue;
      const loop = this.make('IFCPOLYLOOP', [this.H(pts[I[i]]), this.H(pts[I[i + 1]]), this.H(pts[I[i + 2]])]);
      const bound = this.make('IFCFACEOUTERBOUND', this.H(loop), this.T('IFCBOOLEAN', true));
      faces.push(this.H(this.make('IFCFACE', [this.H(bound)])));
    }
    if (isClosed(I)) return { items: [this.make('IFCFACETEDBREP', this.H(this.make('IFCCLOSEDSHELL', faces)))], type: 'Brep' };
    return { items: [this.make('IFCSHELLBASEDSURFACEMODEL', [this.H(this.make('IFCOPENSHELL', faces))])], type: 'SurfaceModel' };
  }
  footprintItems(plan) {
    const curves = [];
    for (const pts of planPolylines(plan)) {
      if (pts.length < 2) continue;
      curves.push(this.H(this.make('IFCPOLYLINE', pts.map(([x, y]) => this.H(this.point2(this.u(x), this.u(y)))))));
    }
    return curves.length ? [this.make('IFCGEOMETRICCURVESET', curves)] : [];
  }

  /** The type for an item: shared by uuid@version (or sha256); created with its representation maps and LibraryItem pset. */
  typeFor(item, opts) {
    const key = item.uuid ? item.uuid + '@' + item.version + (opts.variant?.id ? '#' + opts.variant.id : '') : 'sha:' + (opts.sha256 || item.provenance?.sha256 || '');
    const known = this.libraryTypes().get(key);
    if (known) return { id: known, created: false };
    const ctx = this.contexts();
    const maps = [];
    let body = item.body;
    if (!body && opts.standInHeight > 0) body = boxFromPlan(item.plan, opts.standInHeight);
    if (body) {
      // 0.5 RC.11 (e), session render: an item whose source attribute CC-RENDER-PARTS gives its parts' colours (the CC0
      // entourage: a tree's trunk and leaves, a car's body and glass) gets one body item per part, each styled in its colour,
      // so every viewer and BIM program shows them; anything else as before
      const b = this.partBodyItems(item, body) || this.bodyItems(body);
      const rep = this.make('IFCSHAPEREPRESENTATION', this.H(ctx.body), this.L('Body'), this.L(b.type), b.items.map((i) => this.H(i)));
      maps.push(this.make('IFCREPRESENTATIONMAP', this.H(this.origin()), this.H(rep)));
    }
    const fp = this.footprintItems(item.plan);
    if (fp.length) {
      const rep = this.make('IFCSHAPEREPRESENTATION', this.H(ctx.foot), this.L('FootPrint'), this.L('GeometricCurveSet'), fp.map((i) => this.H(i)));
      maps.push(this.make('IFCREPRESENTATIONMAP', this.H(this.origin()), this.H(rep)));
    }
    if (item.clearances && item.clearances.length) {
      if (!ctx.clear) ctx.clear = ctx.sub('Clearance', 'MODEL_VIEW');
      const its = [];
      let type = 'Tessellation';
      for (const c of item.clearances) { const b = this.bodyItems({ type: 'box', ...c }); its.push(...b.items); type = b.type; }
      const rep = this.make('IFCSHAPEREPRESENTATION', this.H(ctx.clear), this.L('Clearance'), this.L(type), its.map((i) => this.H(i)));
      maps.push(this.make('IFCREPRESENTATIONMAP', this.H(this.origin()), this.H(rep)));
    }
    const libPset = this.pset(PSETS.library, this.libraryProps(item, opts));
    const cls = classesFor(item, this.schema);
    // 2026-11-02: a Library door or window's type says how its mesh sits, so any placement of it can be set into a wall opening
    const fr = (item.kind === 'door' || item.kind === 'window') && body ? libraryFrame(body) : null;
    const framePset = fr ? this.pset(FRAME_PSET, frameRows(fr, opts.stretch)) : null;
    const head = [this.guid(), this.ownerHistory(), this.L(item.name), this.X(!body && opts.standInHeight > 0 ? 'Stand-in box ' + opts.standInHeight + ' mm tall: the library item has no 3D body.' : item.description || null),   // i18n-ignore: Description written into the saved IFC file (file content, same in every language)
      null, [this.H(libPset), ...(framePset ? [this.H(framePset)] : [])], maps.map((m) => this.H(m)), null, this.L(item.maker && item.model ? item.maker + ' ' + item.model : null)];
    let extra = [];
    if (cls.type === 'IFCDOORTYPE' || cls.type === 'IFCWINDOWTYPE') extra = [cls.type === 'IFCDOORTYPE' ? 'DOOR' : 'WINDOW', 'NOTDEFINED', false, null];   // as family-model.js makeType
    else if (cls.type === 'IFCDOORSTYLE' || cls.type === 'IFCWINDOWSTYLE') { head.pop(); extra = ['NOTDEFINED', 'NOTDEFINED', false, false]; }   // IFC2X3 styles have no ElementType
    else if (cls.type === 'IFCFURNITURETYPE') extra = this.v4 ? [this.E('NOTDEFINED'), this.E('NOTDEFINED')] : [this.E('NOTDEFINED')];
    else if (cls.type !== 'IFCFURNISHINGELEMENTTYPE') extra = [this.E('NOTDEFINED')];
    const id = this.make(cls.type, ...head, ...extra);
    return { id, created: true, maps };
  }

  libraryProps(item, opts) {
    const lic = item.license || {};
    const rows = [
      ['Library', 'IFCLABEL', opts.library || item.provenance?.library || (item.uuid ? 'librarycraft' : 'file')],
      ['ItemUuid', 'IFCIDENTIFIER', item.uuid || ''],
      ['ItemVersion', 'IFCINTEGER', item.version ?? 0],
      ['ItemSha256', 'IFCIDENTIFIER', opts.sha256 || item.provenance?.sha256 || ''],
      ['License', 'IFCLABEL', lic.id || ''],
      ['Attribution', 'IFCTEXT', lic.attribution || ''],
      ['SourceFile', 'IFCLABEL', opts.sourceFile || item.provenance?.source_file || ''],
      // 2026-11-02: the axes the Library lets it be stretched along ('none' unless its maker allows some; nothing stretches it otherwise)
      ['Stretch', 'IFCLABEL', ['x', 'y', 'z'].filter((a) => Array.isArray(opts.stretch) && opts.stretch.includes(a)).join(',') || 'none'],
    ];
    // 0.7 W3.19: the chosen variant of an item with variants (its id, its name, and its option values as text)
    if (opts.variant?.id) {
      rows.push(['Variant', 'IFCIDENTIFIER', String(opts.variant.id)], ['VariantName', 'IFCLABEL', String(opts.variant.name || opts.variant.id)],
        ['VariantValues', 'IFCTEXT', Object.entries(opts.variant.values || {}).map(([k, v]) => k + '=' + v).join('; ')]);
    }
    return rows;
  }
  equipmentProps(item) {
    const p = item.params || {}, out = [['Name', 'IFCLABEL', item.name], ['Maker', 'IFCLABEL', item.maker || ''], ['Model', 'IFCLABEL', item.model || ''], ['Category', 'IFCLABEL', item.category || '']];
    for (const [k, n] of [['width', 'Width'], ['depth', 'Depth'], ['height', 'Height']]) if (p[k] > 0) out.push([n, 'IFCPOSITIVELENGTHMEASURE', this.u(p[k])]);
    if (p.weight_kg > 0) out.push(['WeightKg', 'IFCMASSMEASURE', p.weight_kg]);
    for (const [k, v] of Object.entries(p.elec || {})) if (v) out.push(['Elec' + cap(k), 'IFCLABEL', v]);
    for (const [k, v] of Object.entries(p.plumb || {})) if (v) out.push(['Plumb' + cap(k), 'IFCLABEL', v]);
    if (p.remarks) out.push(['Remarks', 'IFCTEXT', p.remarks]);
    return out;
  }
  propLines(rows) {
    return rows.filter(([, , v]) => v !== null && v !== undefined).map(([name, type, v]) =>
      this.H(this.make('IFCPROPERTYSINGLEVALUE', this.T('IFCIDENTIFIER', String(name).slice(0, 255)), null, this.T(type, v), null)));
  }
  pset(name, rows) { return this.make('IFCPROPERTYSET', this.guid(), this.ownerHistory(), this.L(name), null, this.propLines(rows)); }
  relate(objId, psetId) { return this.make('IFCRELDEFINESBYPROPERTIES', this.guid(), this.ownerHistory(), null, null, [this.H(objId)], this.H(psetId)); }

  /** Shape of an occurrence: mapped items of each of the type's maps. */
  shapeFor(typeId) {
    const t = this.api.GetLine(this.mid, typeId, false);
    const reps = [];
    for (const h of t.RepresentationMaps || []) {
      const map = this.api.GetLine(this.mid, h.value, false);
      const rep = this.api.GetLine(this.mid, map.MappedRepresentation.value, false);
      const mi = this.make('IFCMAPPEDITEM', this.H(h.value), this.H(this.operator()));
      reps.push(this.H(this.make('IFCSHAPEREPRESENTATION', rep.ContextOfItems, rep.RepresentationIdentifier, this.L('MappedRepresentation'), [this.H(mi)])));
    }
    return reps.length ? this.make('IFCPRODUCTDEFINITIONSHAPE', null, null, reps) : null;
  }

  // ---- placing ----
  place(item, opts) {
    [item, opts] = withVariant(item, opts);
    this.begin();
    const st = this.storeyLine(opts.storey);
    const type = this.typeFor(item, opts);
    const lp = this.localPlacement(st, opts);
    const shape = this.shapeFor(type.id);
    const cls = classesFor(item, this.schema);
    const head = [this.guid(), this.ownerHistory(), this.L(item.name), this.X(item.description || null), this.L(item.name), this.H(lp), shape ? this.H(shape) : null, null];
    const id = this.make(cls.occ, ...head, ...this.occExtra(cls.occ, item));
    this.relateType(id, type.id);
    this.contain(id, opts.storey);
    this.relate(id, this.placementPset(opts));
    this.addItemPsets(id, item, opts);
    const journal = this.journal; this.journal = null;
    return { id, typeId: type.id, typeCreated: type.created, cls, journal };
  }

  /**
   * Another placement of what placement `srcId` already is — same type (so the same geometry), class, name and library
   * data — at a new place: { storey, x, y, rot, itemNumber, quantity, notes }. Needs no item JSON, so it works for
   * placements made in an earlier session too. → { id, typeId, journal }. Copy, paste and duplicate use it.
   */
  placeLike(srcId, opts) {
    const api = this.api, mid = this.mid;
    this._psetIndex = null;
    const ps = this.psetsOf(srcId);
    if (!ps[PSETS.placement]) throw new Error(t('place.err.not_placed'));
    const typeId = this.relTypeOf().get(srcId)?.type;
    if (!typeId) throw new Error(t('place.err.no_type'));
    const src = api.GetLine(mid, srcId, false);
    this.begin();
    try {
      const st = this.storeyLine(opts.storey);
      const lp = this.localPlacement(st, opts);
      const shape = this.shapeFor(typeId);
      const occ = String(api.GetNameFromTypeCode(src.type) || '').toUpperCase();
      const head = [this.guid(), this.ownerHistory(), src.Name ?? null, src.Description ?? null, src.ObjectType ?? null, this.H(lp), shape ? this.H(shape) : null, src.Tag ?? null];
      const extra = occ === 'IFCDOOR' || occ === 'IFCWINDOW'
        ? [src.OverallHeight ?? null, src.OverallWidth ?? null, ...(this.v4 ? [src.PredefinedType ?? 'NOTDEFINED', (occ === 'IFCDOOR' ? src.OperationType : src.PartitioningType) ?? 'NOTDEFINED', null] : [])]
        : this.occExtra(occ).map((x) => (x === null ? src.CompositionType ?? null : src.PredefinedType ?? x));
      const id = this.make(occ, ...head, ...extra);
      this.relateType(id, typeId);
      this.contain(id, opts.storey);
      this.relate(id, this.placementPset(opts));
      for (const name of [PSETS.library, PSETS.equipment, PSETS.source]) {
        if (!ps[name]) continue;
        const from = api.GetLine(mid, ps[name].id, false);
        const props = (from.HasProperties || []).map((h) => api.GetLine(mid, h.value, false)).filter((p) => p && p.Name && p.NominalValue !== undefined)
          .map((p) => this.H(this.make('IFCPROPERTYSINGLEVALUE', p.Name, p.Description ?? null, this.retype(p.NominalValue), p.Unit ?? null)));
        this.relate(id, this.make('IFCPROPERTYSET', this.guid(), this.ownerHistory(), from.Name, from.Description ?? null, props));
      }
      const journal = this.journal; this.journal = null;
      return { id, typeId, typeCreated: false, journal };
    } catch (e) {
      // Nothing half-made stays behind.
      if (this.journal) { undoJournal(api, mid, this.journal); this.journal = null; }
      throw e;
    }
  }

  /** A fresh typed value from one read back: the browser build of web-ifc keeps a REAL read from the file as text inside
   * (_internalValue "1320.8"), which it cannot write again. null stays null. */
  retype(v) {
    if (!v || typeof v !== 'object' || !v.name) return v ?? null;
    return this.T(v.name, val(v));
  }
  storeyLine(id) {
    const st = this.api.GetLine(this.mid, id, false);
    if (!st || !/BuildingStorey/i.test(st.constructor?.name || '')) throw new Error(t('place.err.pick_storey'));
    return st;
  }
  /** IfcLocalPlacement relative to the storey: model mm → file units → the storey's own axes. */
  localPlacement(st, opts) {
    const Ws = this.api.GetWorldTransformMatrix(this.mid, st.ObjectPlacement.value), Wi = inv4(Ws);
    const [lx, ly] = apply4(Wi, this.u(opts.x), this.u(opts.y), Ws[14]);
    const r = (opts.rot || 0) * D2R;
    const dl = [Wi[0] * Math.cos(r) + Wi[4] * Math.sin(r), Wi[1] * Math.cos(r) + Wi[5] * Math.sin(r)];
    const loc = this.point3(round(lx), round(ly), Number(opts.z) ? round(this.u(Number(opts.z))) : 0);   // 0.6 DC.117: z above the storey
    const ax = this.make('IFCAXIS2PLACEMENT3D', this.H(loc), this.H(this.dir(0, 0, 1)), this.H(this.dir(round(dl[0], 9), round(dl[1], 9), 0)));
    return this.make('IFCLOCALPLACEMENT', st.ObjectPlacement, this.H(ax));
  }
  /** Attributes after Tag: IFC4 PredefinedType (not on furnishing elements / flow terminals), IFC2X3 proxy CompositionType; a door or
   *  window: OverallHeight, OverallWidth (the item's height / width) and, in IFC4, PredefinedType, OperationType / PartitioningType. */
  occExtra(occ, item = null) {
    if (occ === 'IFCDOOR' || occ === 'IFCWINDOW') {
      const p = item?.params || {};
      const len = (v) => (Number(v) > 0 ? Math.round(this.u(Number(v)) * 1e6) / 1e6 : null);
      return [len(p.height), len(p.width), ...(this.v4 ? [occ === 'IFCDOOR' ? 'DOOR' : 'WINDOW', 'NOTDEFINED', null] : [])];
    }
    if (this.v4 && occ !== 'IFCFURNISHINGELEMENT' && occ !== 'IFCFLOWTERMINAL') return [this.E('NOTDEFINED')];
    if (!this.v4 && occ === 'IFCBUILDINGELEMENTPROXY') return [null];
    return [];
  }
  placementPset(opts) {
    return this.pset(PSETS.placement, [['ItemNumber', 'IFCLABEL', String(opts.itemNumber ?? '')], ['Quantity', 'IFCINTEGER', Math.max(1, Math.round(Number(opts.quantity) || 1))], ['Notes', 'IFCTEXT', opts.notes || '']]);
  }
  addItemPsets(id, item, opts) {
    this.relate(id, this.pset(PSETS.library, this.libraryProps(item, opts)));
    this.relate(id, this.pset(PSETS.equipment, this.equipmentProps(item)));
    const src = Object.entries(item.source_attrs || {});
    if (src.length) this.relate(id, this.pset(PSETS.source, src.map(([k, v]) => [k, 'IFCTEXT', v])));
  }
  relateType(id, typeId) {
    for (const rid of ids(this.api, this.mid, 'IFCRELDEFINESBYTYPE')) {
      const r = this.api.GetLine(this.mid, rid, false);
      if (r.RelatingType?.value === typeId) {
        if ((r.RelatedObjects || []).some(h => h.value === id)) return rid;
        const l = this.touch(rid); l.RelatedObjects = [...l.RelatedObjects, this.H(id)]; this.write(l); return rid;
      }
    }
    return this.make('IFCRELDEFINESBYTYPE', this.guid(), this.ownerHistory(), null, null, [this.H(id)], this.H(typeId));
  }
  contain(id, storey) {
    for (const rid of ids(this.api, this.mid, 'IFCRELCONTAINEDINSPATIALSTRUCTURE')) {
      const r = this.api.GetLine(this.mid, rid, false);
      if (r.RelatingStructure?.value === storey) { const l = this.touch(rid); l.RelatedElements = [...l.RelatedElements, this.H(id)]; this.write(l); return rid; }
    }
    return this.make('IFCRELCONTAINEDINSPATIALSTRUCTURE', this.guid(), this.ownerHistory(), null, null, [this.H(id)], this.H(storey));
  }

  /**
   * Swap (or update): new type reference and shape; placement, ItemNumber, Quantity and Notes stay. When the new item
   * maps to another occurrence class (a refrigerator swapped for a table: IfcElectricAppliance → IfcFurniture), the
   * occurrence is written again as that class under the SAME express ID (0.4 B11), so every relation that points at it
   * (type, storey, property sets, materials, groups) still does; GlobalId, name, placement, shape and tag carry over,
   * PredefinedType becomes NOTDEFINED. The journal holds the old line, so undo brings the old class back.
   */
  swap(id, item, opts = {}) {
    [item, opts] = withVariant(item, opts);
    this.begin();
    const type = this.typeFor(item, opts);
    const rt = this.relTypeOf().get(id);
    if (rt && rt.type !== type.id) {
      const old = this.touch(rt.rel);
      const rest = old.RelatedObjects.filter((h) => h.value !== id);
      if (rest.length) { old.RelatedObjects = rest; this.write(old); }
      else { this.journal.deleted = this.journal.deleted || []; this.journal.deleted.push(rt.rel); deleteLine(this.api, this.mid, rt.rel); }
    }
    if (!rt || rt.type !== type.id) this.relateType(id, type.id);
    const occ = this.touch(id);
    const shape = this.shapeFor(type.id);
    occ.Representation = shape ? this.H(shape) : null;
    occ.Name = this.L(item.name); occ.ObjectType = this.L(item.name); occ.Description = this.X(item.description || null);
    const cls = classesFor(item, this.schema);
    const was = (occ.constructor?.name || '').toUpperCase();
    let classChanged = null;
    if (was && was !== cls.occ && !opts.keepClass) {
      const g = occ.GlobalId?.value ?? occ.GlobalId;   // raw: a typed IfcGloballyUniqueId is dropped (see the header)
      const e = this.api.CreateIfcEntity(this.mid, this.api.GetTypeCodeFromName(cls.occ), g, occ.OwnerHistory, occ.Name, occ.Description, occ.ObjectType,
        occ.ObjectPlacement, occ.Representation, retypeLine(this.api, this.mid, { Tag: occ.Tag ?? null }).Tag, ...this.occExtra(cls.occ, item));
      e.expressID = id;
      replaceLine(this.api, this.mid, e);
      (this.journal.retyped ??= []).push(id);
      if ((this.api.GetLine(this.mid, id, false).constructor?.name || '').toUpperCase() !== cls.occ) throw new Error('Could not change the class of #' + id + ' to ' + cls.occ + '.');   // i18n-ignore: an engine failure; the page shows its own words
      classChanged = { from: occ.constructor?.name || was, to: e.constructor?.name || cls.occ };   // readable names, e.g. IfcFurnishingElement
    } else this.write(occ);
    // Item psets: the relations now point at fresh sets; the placement set is left alone.
    this._psetIndex = null;
    const ps = this.psetsOf(id);
    for (const name of [PSETS.library, PSETS.equipment, PSETS.source]) {
      const cur = ps[name];
      if (!cur) continue;
      const rel = this.touch(cur.rel);
      const rest = rel.RelatedObjects.filter((h) => h.value !== id);
      if (rest.length) { rel.RelatedObjects = rest; this.write(rel); }
      else { this.journal.deleted = this.journal.deleted || []; this.journal.deleted.push(cur.rel); deleteLine(this.api, this.mid, cur.rel); }
    }
    this.addItemPsets(id, item, opts);
    const journal = this.journal; this.journal = null;
    return { id, typeId: type.id, typeCreated: type.created, classChanged, classDiffers: !classChanged && was !== cls.occ, journal };
  }

  // ---- schedule (same row shape as dwg-equipment.js) ----
  schedule() {
    const storeys = this.info().storeys;
    const name = new Map(storeys.map((s) => [s.id, s.name]));
    const rows = new Map();
    let tags = 0;
    for (const p of this.placements()) {
      tags++;
      const e = p.equipment;
      const elecObj = { volts: e.ElecVolts || '', phase: e.ElecPhase || '', amps: e.ElecAmps || '', kw: e.ElecKw || '', hp: e.ElecHp || '', hz: e.ElecHz || '',
        // i18n-ignore: connection code stored in library item data (libitem.js values)
        conn: /yes/i.test(e.ElecDirect || '') ? 'direct' : /yes/i.test(e.ElecPlug || '') ? 'cord and plug' : '', nema: e.ElecNema || '' };
      const elec = Object.values(elecObj).some(Boolean) ? [elecObj] : [];
      const plumb = { cw: e.PlumbCw || '', hw: e.PlumbHw || '', dd: e.PlumbDd || '', id: e.PlumbId || '', gas: e.PlumbGas || '' };
      const row = { no: p.itemNumber, category: e.Name || p.name, mfr: e.Maker || '', model: e.Model || '', remark: e.Remarks || '', elec, plumb, elRemark: '', plRemark: '' };
      const key = [row.no, row.category, row.mfr, row.model, JSON.stringify(elecObj), JSON.stringify(plumb)].join('\u0000');
      let r = rows.get(key);
      if (!r) { r = { ...row, places: [] }; rows.set(key, r); }
      r.places.push({ x: p.x, y: p.y, qty: String(p.quantity ?? 1), sheets: p.storey !== null ? ['storey:' + p.storey] : [], id: p.id });
    }
    const list = [...rows.values()];
    for (const r of list) {
      r.sheets = [...new Set(r.places.flatMap((x) => x.sheets))];
      r.qtys = r.places.map((x) => x.qty);
      r.qty = String(r.qtys.reduce((s, q) => s + (Number(q) || 0), 0));
      r.elecText = r.elec.map(elecText).join(' + ');
      r.plumbText = Object.entries(r.plumb).filter(([, v]) => v).map(([k, v]) => k.toUpperCase() + ' ' + v).join(', ');
    }
    const byNo = new Map();
    for (const r of list) { if (!byNo.has(r.no)) byNo.set(r.no, []); byNo.get(r.no).push(r); }
    for (const same of byNo.values()) if (same.length > 1) for (const r of same) r.clash = true;
    list.sort((a, b) => a.no.localeCompare(b.no, undefined, { numeric: true }) || a.category.localeCompare(b.category));
    const sheets = storeys.map((s) => ({ key: 'storey:' + s.id, name: s.name, count: list.filter((r) => r.sheets.includes('storey:' + s.id)).length })).filter((s) => s.count);
    return tags ? { rows: list, tags, sheets, offSheet: list.filter((r) => !r.sheets.length).length } : null;
  }

  // ---- walls ----
  /** Faces of the walls on a storey (or every wall), as plan segments in model mm. */
  wallFaces(storey = null) {
    const so = this.storeyOf(), out = [];
    const C = this.api.GetCoordinationMatrix(this.mid);
    const Ci = inv4(C);
    let walls = [];
    try { walls = ids(this.api, this.mid, 'IFCWALL', true); } catch (e) { walls = []; }
    if (!walls.length) walls = [...ids(this.api, this.mid, 'IFCWALL'), ...ids(this.api, this.mid, 'IFCWALLSTANDARDCASE')];
    for (const w of new Set(walls)) {
      if (storey !== null && so.get(w) !== storey) continue;
      let tri;
      try { tri = productTriangles(this.api, this.mid, w, this.unitMm, Ci); } catch (e) { continue; }
      const pts = [];
      for (let i = 0; i < tri.positions.length; i += 3) pts.push([tri.positions[i] * this.unitMm, tri.positions[i + 1] * this.unitMm]);
      const rect = minAreaRect(pts);
      if (!rect) continue;
      const [p0, p1, p2, p3] = rect, len01 = dist(p0, p1), len12 = dist(p1, p2);
      // The two long sides are the faces; normals point away from the wall's centre line.
      const sides = len01 >= len12 ? [[p0, p1], [p2, p3]] : [[p1, p2], [p3, p0]];
      const cx = (p0[0] + p2[0]) / 2, cy = (p0[1] + p2[1]) / 2;
      for (const [a, b] of sides) {
        const dx = b[0] - a[0], dy = b[1] - a[1], l = Math.hypot(dx, dy);
        if (l < 1) continue;
        let n = [-dy / l, dx / l];
        if ((a[0] - cx) * n[0] + (a[1] - cy) * n[1] < 0) n = [-n[0], -n[1]];
        out.push({ a, b, n, wall: w });
      }
    }
    return out;
  }

  /**
   * The plan frame Copy gives an elements clip (bimcraft.js copyElements), so the ghost, wall snap and paste turn with the
   * element and not with the model's axes — a building turned in its site (true north, shared coordinates: Revit exports)
   * has every door and wall at an angle to them. rot = the first top-level element's own X axis in plan (degrees, model
   * axes), else the storey's, else 0; box = its meshes (openings and spaces left out) measured in those axes, round the
   * centre (x, y) in model mm, z from zBase (the storey's elevation). → { rot, x, y, box: { x0, y0, z0, x1, y1, z1 } } | null
   * (no geometry, or more than `maxPoints` vertices: the page then measures the viewer's box, turned 0°).
   */
  elementsFrame(snap, { zBase = 0, maxPoints = 2e6 } = {}) {
    const api = this.api, mid = this.mid;
    const turn = (w) => (w && Math.hypot(w[0], w[1]) > 1e-6 ? Math.atan2(w[1], w[0]) / D2R : null);
    const top = snap.elements.find((e) => e.top);
    let rot = turn(top?.world);
    if (rot === null && snap.storey) { const st = api.GetLine(mid, snap.storey, false); rot = st?.ObjectPlacement ? turn(api.GetWorldTransformMatrix(mid, st.ObjectPlacement.value)) : null; }
    rot = Math.round(norm(rot ?? 0) * 1e6) / 1e6;
    const Ci = inv4(api.GetCoordinationMatrix(mid)), pts = [];
    for (const e of snap.elements) {
      if (/^Ifc(OpeningElement|OpeningStandardCase|Space)$/i.test(e.line?.constructor?.name || '')) continue;
      let tri;
      try { tri = productTriangles(api, mid, e.id, this.unitMm, Ci); } catch (err) { continue; }
      if (pts.length + tri.positions.length > maxPoints * 3) return null;
      for (let i = 0; i < tri.positions.length; i++) pts.push(tri.positions[i] * this.unitMm);
    }
    const b = orientedBox(pts, rot);
    return b ? { rot, x: b.x, y: b.y, box: { ...b.box, z0: b.box.z0 - zBase, z1: b.box.z1 - zBase } } : null;
  }

  /**
   * How far the building is turned in plan, in degrees [0, 90): the direction most wall length runs in (walls of the
   * storey, or every wall), folded into a quarter turn. 0 for a model drawn along its axes or without walls. The fix for
   * sections that cut a turned building at an angle would turn the section box / planes by this (not built yet).
   */
  planRotation(storey = null) {
    const bins = new Map();
    for (const f of this.wallFaces(storey)) {
      const len = Math.hypot(f.b[0] - f.a[0], f.b[1] - f.a[1]);
      let a = Math.atan2(f.b[1] - f.a[1], f.b[0] - f.a[0]) / D2R;
      a = ((a % 90) + 90) % 90;
      const k = Math.round(a * 10) % 900;   // 0.1° bins
      bins.set(k, (bins.get(k) || 0) + len);
    }
    let best = null;
    for (const [k, w] of bins) if (!best || w > best.w) best = { k, w };
    return best ? best.k / 10 : 0;
  }
}

/**
 * Bounds of points [x, y, z, x, y, z, …] (model mm, Z up) in plan axes turned `rotDeg`: → { x, y (the box centre in
 * model mm), box: { x0, y0, z0, x1, y1, z1 } (x/y round that centre in the turned axes, z as given) } | null.
 */
export function orientedBox(points, rotDeg) {
  if (!points || points.length < 3) return null;
  const r = rotDeg * D2R, c = Math.cos(r), s = Math.sin(r);
  let u0 = Infinity, u1 = -Infinity, v0 = Infinity, v1 = -Infinity, z0 = Infinity, z1 = -Infinity;
  for (let i = 0; i + 2 < points.length; i += 3) {
    const x = points[i], y = points[i + 1], z = points[i + 2];
    const u = x * c + y * s, v = -x * s + y * c;
    if (u < u0) u0 = u; if (u > u1) u1 = u; if (v < v0) v0 = v; if (v > v1) v1 = v; if (z < z0) z0 = z; if (z > z1) z1 = z;
  }
  const cu = (u0 + u1) / 2, cv = (v0 + v1) / 2;
  return {
    x: cu * c - cv * s, y: cu * s + cv * c,
    box: { x0: u0 - cu, y0: v0 - cv, z0, x1: Math.max(u1 - cu, u0 - cu + 1), y1: Math.max(v1 - cv, v0 - cv + 1), z1: Math.max(z1, z0) },
  };
}

/** Back of the item against the nearest wall face: rotation so the front (−Y) points along the face normal. */
export function snapToWall(p, item, faces) {
  let best = null;
  for (const f of faces) {
    const dx = f.b[0] - f.a[0], dy = f.b[1] - f.a[1], l2 = dx * dx + dy * dy;
    const t = Math.max(0, Math.min(1, ((p[0] - f.a[0]) * dx + (p[1] - f.a[1]) * dy) / l2));
    const q = [f.a[0] + t * dx, f.a[1] + t * dy], d = dist(p, q);
    if ((p[0] - q[0]) * f.n[0] + (p[1] - q[1]) * f.n[1] < -1) continue;   // behind this face (inside the wall or beyond)
    if (!best || d < best.d) best = { d, q, f };
  }
  if (!best) return null;
  const n = best.f.n;
  const rot = Math.atan2(-n[1], -n[0]) / D2R - 90;
  const b = planBounds(item.plan) || (item.body && item.body.type === 'box' ? { maxY: item.body.y + item.body.d } : { maxY: 0 });
  const maxY = b.maxY || 0;
  return { x: best.q[0] + n[0] * maxY, y: best.q[1] + n[1] * maxY, rot: Math.round(norm(rot) * 1000) / 1000, face: best.f, distance: best.d };
}

/**
 * Undo a place/swap/paste/delete: delete what it created, write back what it changed (and recreate what it deleted).
 * Lines made LATER for something it created (a property set IfcEditor copied on the first edit of a pasted element)
 * would still name it: relationships naming a deleted line lose it, and go when nothing is left (pruneRefs).
 */
export function undoJournal(api, mid, journal) {
  const gone = new Set();
  for (const id of [...journal.created].reverse()) { try { deleteLine(api, mid, id); gone.add(id); } catch (e) { /* already gone */ } }
  for (const line of journal.before.values()) {
    restored(api, mid, line.expressID);
    // a line whose class this change changed (B11) needs replaceLine; any other is written as it was (it may not exist now:
    // reading it first would make web-ifc log "Invalid IFC Line")
    if (journal.retyped?.includes(line.expressID)) replaceLine(api, mid, retypeLine(api, mid, line)); else api.WriteLine(mid, retypeLine(api, mid, line));
  }
  for (const line of journal.before.values()) gone.delete(line.expressID);
  if (gone.size) pruneRefs(api, mid, gone);
}

/** Relationships that name any of `gone` lose those references; one left empty or without its single end is deleted. */
export function pruneRefs(api, mid, gone) {
  const isH = (v) => v && typeof v === 'object' && v.type === 5 && typeof v.value === 'number';
  for (const rid of ids(api, mid, 'IFCRELATIONSHIP', true)) {
    const line = api.GetLine(mid, rid, false);
    let dead = false, changed = false;
    for (const k of Object.keys(line)) {
      if (k === 'expressID' || k === 'type') continue;
      const v = line[k];
      if (isH(v) && gone.has(v.value)) { dead = true; break; }
      if (Array.isArray(v) && v.some((h) => isH(h) && gone.has(h.value))) {
        const keep = v.filter((h) => !(isH(h) && gone.has(h.value)));
        if (!keep.length) { dead = true; break; }
        line[k] = keep; changed = true;
      }
    }
    if (dead) deleteLine(api, mid, rid);
    else if (changed) api.WriteLine(mid, retypeLine(api, mid, line));
  }
}

// ---- helpers ----
const round = (v, d = 6) => Math.round(v * 10 ** d) / 10 ** d;
const dist = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1]);
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
const norm = (a) => { let x = a % 360; if (x < 0) x += 360; return x; };

export function boxMesh(b) {
  const x0 = b.x, y0 = b.y, z0 = b.z || 0, x1 = b.x + b.w, y1 = b.y + b.d, z1 = z0 + b.h;
  const positions = [x0, y0, z0, x1, y0, z0, x1, y1, z0, x0, y1, z0, x0, y0, z1, x1, y0, z1, x1, y1, z1, x0, y1, z1];
  const indices = [0, 2, 1, 0, 3, 2, 4, 5, 6, 4, 6, 7, 0, 1, 5, 0, 5, 4, 1, 2, 6, 1, 6, 5, 2, 3, 7, 2, 7, 6, 3, 0, 4, 3, 4, 7];
  return { positions, indices };
}

/** Every undirected edge used exactly twice → a closed shell. */
export function isClosed(I) {
  const m = new Map();
  for (let i = 0; i < I.length; i += 3) for (let k = 0; k < 3; k++) {
    const a = I[i + k], b = I[i + (k + 1) % 3], key = a < b ? a + ',' + b : b + ',' + a;
    m.set(key, (m.get(key) || 0) + 1);
  }
  for (const n of m.values()) if (n !== 2) return false;
  return m.size > 0;
}

/** Plan entities → polylines ([[x,y]…]) for the footprint; text and points left out. */
export function planPolylines(plan) {
  const out = [];
  const arc = (cx, cy, r, a0, a1) => { let s = a1 - a0; while (s <= 0) s += 360; const n = Math.max(4, Math.ceil(s / 10)); return Array.from({ length: n + 1 }, (_, i) => { const a = (a0 + s * i / n) * D2R; return [cx + r * Math.cos(a), cy + r * Math.sin(a)]; }); };
  for (const e of plan?.entities || []) {
    if (e.type === 'line') out.push([[e.x1, e.y1], [e.x2, e.y2]]);
    else if (e.type === 'circle') out.push(arc(e.x, e.y, e.r, 0, 360));
    else if (e.type === 'arc') out.push(arc(e.x, e.y, e.r, e.a0, e.a1));
    else if (e.type === 'ellipse') {
      let s = e.t1 - e.t0; while (s <= 0) s += 360;
      const len = Math.hypot(e.mx, e.my), rot = Math.atan2(e.my, e.mx), c = Math.cos(rot), sn = Math.sin(rot), n = Math.max(8, Math.ceil(s / 10));
      out.push(Array.from({ length: n + 1 }, (_, i) => { const t = (e.t0 + s * i / n) * D2R, x = len * Math.cos(t), y = len * e.ratio * Math.sin(t); return [e.cx + x * c - y * sn, e.cy + x * sn + y * c]; }));
    } else if (e.type === 'poly') {
      const pts = [];
      const n = e.pts.length;
      for (let i = 0; i < n; i++) {
        const a = e.pts[i]; pts.push([a[0], a[1]]);
        if (i === n - 1 && !e.closed) break;
        const b = e.pts[(i + 1) % n], bulge = a[2] || 0;
        if (Math.abs(bulge) > 1e-9) {
          const th = 4 * Math.atan(bulge), ch = Math.hypot(b[0] - a[0], b[1] - a[1]);
          if (ch > 0) {
            const r = ch / (2 * Math.sin(th / 2)), mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2, h = r * Math.cos(th / 2);
            const cx = mx - (b[1] - a[1]) / ch * h, cy = my + (b[0] - a[0]) / ch * h, a0 = Math.atan2(a[1] - cy, a[0] - cx), steps = Math.max(2, Math.ceil(Math.abs(th) / (10 * D2R)));
            for (let k = 1; k < steps; k++) { const t = a0 + th * k / steps; pts.push([cx + Math.abs(r) * Math.cos(t), cy + Math.abs(r) * Math.sin(t)]); }
          }
        }
      }
      if (e.closed) pts.push([e.pts[0][0], e.pts[0][1]]);
      out.push(pts);
    } else if (e.type === 'hatch') for (const l of e.loops) { const p = []; for (let i = 0; i < l.length; i += 2) p.push([l[i], l[i + 1]]); p.push([l[0], l[1]]); out.push(p); }
  }
  return out;
}

/** Minimum-area bounding rectangle of plan points (rotating calipers over the hull edges) → 4 corners. */
function minAreaRect(points) {
  const p = [...new Map(points.map(([x, y]) => [Math.round(x) + ',' + Math.round(y), [x, y]])).values()].sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  if (p.length < 3) return null;
  const cross = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
  const lo = [], hi = [];
  for (const q of p) { while (lo.length >= 2 && cross(lo[lo.length - 2], lo[lo.length - 1], q) <= 0) lo.pop(); lo.push(q); }
  for (const q of p.slice().reverse()) { while (hi.length >= 2 && cross(hi[hi.length - 2], hi[hi.length - 1], q) <= 0) hi.pop(); hi.push(q); }
  const h = lo.slice(0, -1).concat(hi.slice(0, -1));
  if (h.length < 3) return null;
  let best = null;
  for (let i = 0; i < h.length; i++) {
    const a = h[i], b = h[(i + 1) % h.length], l = dist(a, b);
    if (l < 1e-9) continue;
    const ux = (b[0] - a[0]) / l, uy = (b[1] - a[1]) / l;
    let minU = Infinity, maxU = -Infinity, minV = Infinity, maxV = -Infinity;
    for (const q of h) { const u = q[0] * ux + q[1] * uy, v = -q[0] * uy + q[1] * ux; minU = Math.min(minU, u); maxU = Math.max(maxU, u); minV = Math.min(minV, v); maxV = Math.max(maxV, v); }
    const area = (maxU - minU) * (maxV - minV);
    if (!best || area < best.area) best = { area, ux, uy, minU, maxU, minV, maxV };
  }
  const { ux, uy, minU, maxU, minV, maxV } = best;
  const at = (u, v) => [u * ux - v * uy, u * uy + v * ux];
  return [at(minU, minV), at(maxU, minV), at(maxU, maxV), at(minU, maxV)];
}

/** Viewer (web-ifc Y-up meters after the coordination matrix) ↔ model mm (Z up, the file's own origin). */
export function fromViewer(C, v) {
  const Ci = inv4(C);
  const [x, y, z] = apply4(Ci, v[0], v[1], v[2]);
  return [x * 1000, -z * 1000, y * 1000];
}
export function toViewer(C, p) {
  const [x, y, z] = [p[0] / 1000, p[2] / 1000, -p[1] / 1000];
  return apply4(C, x, y, z);
}
export { mul4 };
