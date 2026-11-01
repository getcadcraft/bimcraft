/* SPDX-License-Identifier: Apache-2.0 */
/**
 * ifc-model.js — opens an IFC file with cc-ifc (./ifc/, our own engine; 0.4 I.11 — web-ifc until then) and turns it into what the viewer draws:
 * geometry merged into a few large batches (one per storey × colour, so a 50,000-element
 * model is a few hundred draw calls, not 50,000), storeys, element counts by class, and
 * properties on demand. No DOM and no three.js: bin/test-bimcraft.mjs runs this file in Node.
 *
 *   const ifc = await IfcModel.create(WebIFC);                  // WebIFC = import * as WebIFC from './ifc/api.js'
 *   const model = await ifc.load(bytes, (done, total) => …);   // one model open per IfcModel
 *   const props = await ifc.properties(expressID);
 *   const other = IfcModel.sharing(ifc);                        // a second model on the same engine (federation)
 *
 * Element KEYS: everything the viewer handles (triIds, element runs, selection, hide/isolate) is a key =
 * keyBase + expressID. The first model has keyBase 0 (key = expressID); a federated model k gets k × KEY_SPAN, so keys
 * from several models never collide (`keyOf`, `splitKey`). Each batch lists its elements' runs (`elems`): an element's
 * triangles and vertices are contiguous in a batch, because the engine streams one element at a time.
 *
 * Opening: the one pass over the file runs in a Worker (cc-ifc open-async.js; Node and pages without workers scan on
 * this thread), then `AdoptModel`. An engine without AdoptModel (web-ifc, for the oracle tests) uses OpenModel.
 */
import { openIfcAsync } from './ifc/open-async.js';
import { t } from "./i18n.js";
import { lengthUnitMm } from './ifc-util.js';   // GH.3-A: lengths in Properties follow the display unit

const OTHER = -1; // storey key for elements outside any storey
/** Keys per model: expressIDs stay below 2^26 (67 M lines — far beyond a file a browser can open), up to 63 models. */
export const KEY_SPAN = 2 ** 26;
export const keyOf = (mi, id) => mi * KEY_SPAN + id;
export const splitKey = (key) => ({ mi: Math.floor(key / KEY_SPAN), id: key % KEY_SPAN });

export class IfcModel {
  constructor(WebIFC, api) {
    this.WebIFC = WebIFC;
    this.api = api;
    this.modelID = null;
  }

  /** `opts` go to IfcAPI.Init (cc-ifc: `{ manifold }`, else it imports 'manifold-3d' by name for openings). */
  static async create(WebIFC, wasmPath, opts) {
    const api = new WebIFC.IfcAPI();
    if (wasmPath) api.SetWasmPath(wasmPath, true);
    await api.Init(opts);
    return new IfcModel(WebIFC, api);
  }
  /** Another model on the same engine (one wasm, several open models). */
  static sharing(other) { return new IfcModel(other.WebIFC, other.api); }

  close() {
    if (this.modelID !== null) {
      try { this.api.CloseModel(this.modelID); } catch (e) { /* already closed */ }
      this.modelID = null;
    }
  }

  /** `coordination`: the coordination matrix to keep (a reload after an edit: the model stays where it was in the scene). */
  async load(bytes, onProgress = () => {}, { keyBase = 0, coordination = null } = {}) {
    this.close();
    const { api, WebIFC } = this;
    const settings = coordination ? { COORDINATE_TO_ORIGIN: true, COORDINATION_MATRIX: [...coordination] } : { COORDINATE_TO_ORIGIN: true };
    let modelID = -1;
    if (typeof api.AdoptModel === 'function') {
      try { modelID = api.AdoptModel(await openIfcAsync(bytes), settings); } catch (e) { modelID = -1; }
    } else modelID = api.OpenModel(bytes, settings);
    if (modelID < 0) throw new Error(t('ifc.open.failed'));
    this.modelID = modelID;

    const schema = api.GetModelSchema(modelID);
    const project = this.projectInfo();
    const { storeys, storeyOf, tree } = await this.spatial();

    const batches = new Map();   // "storey|r,g,b,a" → accumulator
    const typeCounts = new Map();
    const seen = new Set();
    const classOf = new Map();
    let triangles = 0;

    const onMesh = (mesh, index, total) => {
      const id = mesh.expressID;
      let cls = classOf.get(id);
      if (!cls) {
        cls = this.className(id);
        classOf.set(id, cls);
        seen.add(id);
        typeCounts.set(cls, (typeCounts.get(cls) || 0) + 1);
      }
      const space = cls === 'IfcSpace';
      const storey = storeyOf.get(id) ?? OTHER;
      const placed = mesh.geometries;
      for (let i = 0; i < placed.size(); i++) {
        const pg = placed.get(i);
        const geom = api.GetGeometry(modelID, pg.geometryExpressID);
        const verts = api.GetVertexArray(geom.GetVertexData(), geom.GetVertexDataSize());
        const idx = api.GetIndexArray(geom.GetIndexData(), geom.GetIndexDataSize());
        const c = pg.color;
        const key = storey + (space ? '|s|' : '|e|') + [c.x, c.y, c.z, c.w].map((v) => v.toFixed(3)).join(',');
        let b = batches.get(key);
        if (!b) {
          b = { storey, space, color: [c.x, c.y, c.z, c.w], pos: [], nrm: [], idx: [], ids: [], vcount: 0, runs: { ids: [], t0: [], tn: [], v0: [], vn: [] } };
          batches.set(key, b);
        }
        appendGeometry(b, verts, idx, pg.flatTransformation, keyBase + id);
        triangles += idx.length / 3;
        geom.delete();
      }
      if (index % 200 === 0) onProgress(index + 1, total);
    };
    api.StreamAllMeshes(modelID, onMesh);
    // web-ifc's StreamAllMeshes leaves IfcSpace out: stream the spaces too (hidden in the viewer until Spaces is on; the
    // spaces schedule, 0.4 B10, measures them). Found 2026-10-12: before this the Spaces button had nothing to show.
    api.StreamAllMeshesWithTypes(modelID, [WebIFC.IFCSPACE], (mesh) => onMesh(mesh, 1, 1));

    const out = [...batches.values()].map(finishBatch);
    return {
      modelID,
      keyBase,
      schema,
      project,
      storeys,
      storeyOf,              // expressID → storey expressID (anything inside one, at any depth)
      classOf,               // expressID → class name, for every element with geometry
      tree,                  // web-ifc's spatial structure {expressID, type, children} (ifc-tree.js reads it)
      batches: out,
      elements: [...seen].filter((id) => classOf.get(id) !== 'IfcSpace').length,   // spaces are rooms, not elements: counted apart
      spaces: [...seen].filter((id) => classOf.get(id) === 'IfcSpace').length,
      triangles,
      types: [...typeCounts.entries()].sort((a, b) => b[1] - a[1]).map(([name, count]) => ({ name, count })),
    };
  }

  /** Project name, description and the application that wrote the file (FILE_NAME header). */
  projectInfo() {
    const { api, WebIFC, modelID } = this;
    const info = { name: null, longName: null, phase: null, application: null, author: null, timestamp: null };
    const ids = api.GetLineIDsWithType(modelID, WebIFC.IFCPROJECT);
    if (ids.size() > 0) {
      const p = api.GetLine(modelID, ids.get(0));
      info.name = val(p.Name);
      info.longName = val(p.LongName);
      info.phase = val(p.Phase);
    }
    try {
      const h = api.GetHeaderLine(modelID, WebIFC.FILE_NAME);
      const a = h && h.arguments;
      if (a) {
        info.timestamp = val(a[1]);
        info.author = flat(a[2]);
        // preprocessor_version and originating_system; exporters fill one or both.
        const apps = [val(a[4]), val(a[5])].filter(Boolean);
        info.application = apps.length ? [...new Set(apps)].join(', ') : null;
      }
    } catch (e) { /* header is optional */ }
    return info;
  }

  /** Storeys in elevation order, and expressID → storey expressID for everything inside one. */
  async spatial() {
    const { api, modelID } = this;
    const storeyOf = new Map();
    const storeys = [];
    let tree = null;
    try { tree = await api.properties.getSpatialStructure(modelID, false); } catch (e) { tree = null; }
    const walk = (node, storey) => {
      if (!node) return;
      let here = storey;
      const isStorey = String(node.type).toUpperCase() === 'IFCBUILDINGSTOREY';
      if (isStorey) {
        here = node.expressID;
        const s = api.GetLine(modelID, node.expressID);
        storeys.push({ id: node.expressID, name: val(s.Name) || val(s.LongName) || 'Storey ' + node.expressID, elevation: num(s.Elevation) });
      }
      if (here !== null && !isStorey) storeyOf.set(node.expressID, here);
      for (const ch of node.children || []) walk(ch, here);
    };
    walk(tree, null);
    storeys.sort((a, b) => (a.elevation ?? 0) - (b.elevation ?? 0));
    return { storeys, storeyOf, tree };
  }

  /** "IfcWallStandardCase" — the entity's class name, from web-ifc's line object. */
  className(id) {
    try {
      const line = this.api.GetLine(this.modelID, id, false);
      if (line && line.constructor && /^Ifc/.test(line.constructor.name)) return line.constructor.name;
    } catch (e) { /* fall through */ }
    try { return pretty(this.api.GetNameFromTypeCode(this.api.GetLineType(this.modelID, id))); } catch (e) { return 'Unknown'; }
  }

  /** Everything the properties panel shows for one element. */
  async properties(id) {
    const { api, modelID } = this;
    const line = api.GetLine(modelID, id, false);
    const out = {
      id,
      cls: this.className(id),
      name: val(line.Name),
      guid: val(line.GlobalId),
      objectType: val(line.ObjectType),
      tag: val(line.Tag),
      description: val(line.Description),
      typeName: null,
      sets: [],
    };
    let sets = [];
    try { sets = await api.properties.getPropertySets(modelID, id, true); } catch (e) { sets = []; }
    const typeSets = [];
    try {
      const types = await api.properties.getTypeProperties(modelID, id, true);
      if (types && types[0]) {
        out.typeName = val(types[0].Name);
        for (const s of types[0].HasPropertySets || []) if (s) typeSets.push({ ...s, fromType: true });
      }
    } catch (e) { /* no type */ }
    for (const s of [...(sets || []), ...typeSets]) {
      const rows = [];
      const setName = val(s.Name) || 'Properties';
      for (const p of s.HasProperties || []) {
        if (!p) continue;
        const single = p.NominalValue !== undefined && p.NominalValue !== null && !Array.isArray(p.NominalValue);
        rows.push({
          name: val(p.Name), value: fmt(p.NominalValue ?? p.EnumerationValues ?? p.ListValues), len: single && /LENGTHMEASURE$/.test(p.NominalValue.name || ''),
          // What ifc-edit.js needs to change this value (single values only).
          edit: single ? { psetId: s.expressID, propId: p.expressID, fromType: !!s.fromType, setName, propName: val(p.Name), valueType: p.NominalValue.name || null } : null,
        });
      }
      for (const q of s.Quantities || []) {
        if (!q) continue;
        const v = q.LengthValue ?? q.AreaValue ?? q.VolumeValue ?? q.CountValue ?? q.WeightValue ?? q.TimeValue;
        rows.push({ name: val(q.Name), value: fmt(v), edit: null, len: q.LengthValue !== undefined && q.LengthValue !== null });
      }
      if (rows.length) out.sets.push({ name: setName + (s.fromType ? ' (type)' : ''), fromType: !!s.fromType, rows });
    }
    out.sets.sort((a, b) => a.name.localeCompare(b.name));
    if (out.sets.some((s) => s.rows.some((r) => r.len))) { try { out.unitMm = lengthUnitMm(api, modelID); } catch (e) { out.unitMm = 1000; } }   // mm per file unit, for the rows marked `len`
    return out;
  }
}

function appendGeometry(b, verts, idx, m, id) {
  // verts: x,y,z,nx,ny,nz per vertex; m: column-major 4×4 placement. `id` is the element's key.
  const base = b.vcount;
  const r = b.runs, last = r.ids.length - 1;
  if (last >= 0 && r.ids[last] === id) { r.tn[last] += idx.length / 3; r.vn[last] += verts.length / 6; }
  else { r.ids.push(id); r.t0.push(b.idx.length / 3); r.tn.push(idx.length / 3); r.v0.push(base); r.vn.push(verts.length / 6); }
  for (let i = 0; i < verts.length; i += 6) {
    const x = verts[i], y = verts[i + 1], z = verts[i + 2];
    b.pos.push(
      m[0] * x + m[4] * y + m[8] * z + m[12],
      m[1] * x + m[5] * y + m[9] * z + m[13],
      m[2] * x + m[6] * y + m[10] * z + m[14],
    );
    const nx = verts[i + 3], ny = verts[i + 4], nz = verts[i + 5];
    let tx = m[0] * nx + m[4] * ny + m[8] * nz;
    let ty = m[1] * nx + m[5] * ny + m[9] * nz;
    let tz = m[2] * nx + m[6] * ny + m[10] * nz;
    const l = Math.hypot(tx, ty, tz) || 1;
    b.nrm.push(tx / l, ty / l, tz / l);
  }
  for (let i = 0; i < idx.length; i++) b.idx.push(base + idx[i]);
  for (let i = 0; i < idx.length; i += 3) b.ids.push(id);
  b.vcount += verts.length / 6;
}

function finishBatch(b) {
  return {
    storey: b.storey,
    space: b.space,          // IfcSpace volumes: hidden by default in the viewer
    color: b.color,
    positions: Float32Array.from(b.pos),
    normals: Float32Array.from(b.nrm),
    indices: Uint32Array.from(b.idx),
    triIds: Uint32Array.from(b.ids),   // element key per triangle (faceIndex → element)
    // one run per element: its triangles [t0, t0 + tn) and vertices [v0, v0 + vn) in this batch
    elems: { ids: Uint32Array.from(b.runs.ids), t0: Uint32Array.from(b.runs.t0), tn: Uint32Array.from(b.runs.tn), v0: Uint32Array.from(b.runs.v0), vn: Uint32Array.from(b.runs.vn) },
  };
}

function val(v) {
  if (v === null || v === undefined) return null;
  if (typeof v === 'object' && 'value' in v) return v.value === '' ? null : v.value;
  return v;
}
function num(v) { const n = Number(val(v)); return Number.isFinite(n) ? n : null; }
function flat(v) {
  if (Array.isArray(v)) return v.map(val).filter(Boolean).join(', ') || null;
  return val(v);
}
function fmt(v) {
  if (Array.isArray(v)) return v.map(fmt).join(', ');
  const x = val(v);
  if (x === null || x === undefined) return '';
  if (typeof x === 'number') return Number.isInteger(x) ? String(x) : String(Math.round(x * 10000) / 10000);
  if (x === true || x === '.T.' || x === 'T' || x === 'true') return 'Yes';
  if (x === false || x === '.F.' || x === 'F' || x === 'false') return 'No';
  return String(x);
}
function pretty(code) {
  return typeof code === 'string' ? code.replace(/^IFC/, 'Ifc') : 'Unknown';
}
