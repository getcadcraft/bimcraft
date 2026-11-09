/* SPDX-License-Identifier: Apache-2.0 */
/**
 * ifcx-bimcraft.js — IFC5 alpha (IFCX) in BimCraft (0.9 SU.882, session bim-ifcx-09). A LAB option: Settings › BimCraft › "IFC5 alpha
 * (IFCX)". The format is an alpha that still changes; read first, write second. DOM-free (Node tests drive it); the library is
 * cc-ifcx (./ifcx/, a copy of lib/ifcx written by tools/ifcx/sync.mjs).
 *
 *   readIfcxFiles([{ name, text }])  → Promise<{ model, issues, used, text, stats }>
 *        One main file; other files with nodes are extra layers (applied after it); files with no nodes, or the ones the main
 *        file imports by file name (ifc@v5a.ifcx …), are schemas. Nothing is fetched from the network: an import that was not
 *        picked is a warning and its attributes are read without a type check.
 *        `text` is the model as a small IFC4 file (ifcxModelToIfc4), which BimCraft opens like any IFC.
 *   ifcxModelToIfc4(model, { name }) → { text, stats }      project › site › building › storeys › elements (class, name, property
 *        sets, IFC4 quantity sets `Qto_*`, classification, material, colour, triangle mesh, placement)
 *   bimIfcx(entries, { name, matrixOf }) → Promise<{ text, file, report }>     the open models as an .ifcx file (per-batch colours)
 *
 * Quantities stay IFC4 `Qto_*` sets on the IFC side: an IFCX attribute whose schema has a quantityKind (Length, Area, Volume,
 * Mass …) becomes an IfcQuantityLength / Area / Volume / Weight in the set `Qto_IFCX`; sets we wrote ourselves come back under
 * their own names.
 */
import { readIfcx, writeIfcx, parseIfcx, globalIdToUuid, uuidToGlobalId, uuidFromText, isUuid, isRigid, A } from './ifcx/index.js';
import { lengthUnitMm } from './ifc-util.js';

const IFCX_SET = 'IFCX';
const IFC_SET = 'Pset_IFCX';
const QTO_IFC = 'Qto_IFCX';
const base = (u) => String(u).split(/[?#]/)[0].split('/').pop().toLowerCase();

export async function readIfcxFiles(files, { name = '' } = {}) {
  if (!files.length) throw Object.assign(new Error('ifcx.err.nofile'), { code: 'ifcx.err.nofile', vars: {} });
  const parsed = files.map((f) => ({ name: f.name, ...parseIfcx(f.text) }));   // throws IfcxError with a code
  const withData = parsed.filter((p) => p.file.data.length > 0);
  const main = withData[0] || parsed[0];
  const imported = new Set((main.file.imports || []).map((i) => base(i.uri)));
  const layers = withData.filter((p) => p !== main && !imported.has(base(p.name)));
  const schemaFiles = parsed.filter((p) => p !== main && !layers.includes(p));
  const byName = new Map(schemaFiles.concat(withData.filter((p) => imported.has(base(p.name)))).map((p) => [base(p.name), p.file]));
  const resolve = (uri) => byName.get(base(uri)) || null;
  const r = await readIfcx(main.file, { resolve, extra: layers.map((l) => ({ file: l.file, uri: l.name })), name: name || main.name.replace(/\.ifcx$/i, '') });
  const issues = [...main.issues, ...r.issues];
  const out = ifcxModelToIfc4(r.model, { name: r.model.name });
  return { model: r.model, issues, used: { main: main.name, layers: layers.map((l) => l.name), schemas: [...byName.keys()] }, text: out.text, stats: { ...r.model.stats, ...out.stats, layers: r.composed.layers.length } };
}

// ---------------------------------------------------------------- model → IFC4 STEP
const B64 = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_$';
const str = (s) => "'" + String(s ?? '').replace(/[\u0000-\u001f\u007f]/g, ' ').replace(/\\/g, '\\\\').replace(/'/g, "''").replace(/[^ -~]/g, (c) => '\\X2\\' + c.charCodeAt(0).toString(16).toUpperCase().padStart(4, '0') + '\\X0\\') + "'";
const real = (v) => { const s = String(+(+v).toFixed(9)); return /[.eE]/.test(s) ? s : s + '.'; };
const KNOWN = new Set(['IfcWall', 'IfcWallStandardCase', 'IfcSlab', 'IfcBeam', 'IfcColumn', 'IfcRoof', 'IfcStair', 'IfcStairFlight', 'IfcRamp', 'IfcRailing', 'IfcCovering', 'IfcPlate', 'IfcMember', 'IfcFooting', 'IfcPile', 'IfcCurtainWall', 'IfcFurniture', 'IfcBuildingElementProxy', 'IfcDoor', 'IfcWindow', 'IfcSpace']);
const label = (v) => 'IFCLABEL(' + str(String(v).slice(0, 255)) + ')';

export function ifcxModelToIfc4(model, { name = 'IFCX' } = {}) {
  const lines = [];
  let n = 0;
  const add = (t) => { lines.push('#' + (++n) + '=' + t + ';'); return '#' + n; };
  const taken = new Set();
  const guid = (id, seed) => {
    let u = typeof id === 'string' && isUuid(id) ? id.toLowerCase() : uuidFromText(String(id ?? seed));
    let k = 1;
    while (taken.has(u)) u = uuidFromText(u + '/' + (k++));
    taken.add(u);
    return str(uuidToGlobalId(u));
  };
  const stats = { elements: 0, other: 0, triangles: 0, sets: 0 };
  const title = String(model.name || name).slice(0, 120);
  const units = add('IFCUNITASSIGNMENT((' + add('IFCSIUNIT(*,.LENGTHUNIT.,$,.METRE.)') + ',' + add('IFCSIUNIT(*,.AREAUNIT.,$,.SQUARE_METRE.)') + ',' + add('IFCSIUNIT(*,.VOLUMEUNIT.,$,.CUBIC_METRE.)') + ',' + add('IFCSIUNIT(*,.MASSUNIT.,.KILO.,.GRAM.)') + ',' + add('IFCSIUNIT(*,.PLANEANGLEUNIT.,$,.RADIAN.)') + '))');
  const origin = add('IFCCARTESIANPOINT((0.,0.,0.))');
  const axis0 = add('IFCAXIS2PLACEMENT3D(' + origin + ',$,$)');
  const ctx = add("IFCGEOMETRICREPRESENTATIONCONTEXT($,'Model',3,1.E-05," + axis0 + ',$)');
  const body = add("IFCGEOMETRICREPRESENTATIONSUBCONTEXT('Body','Model',*,*,*,*," + ctx + ',$,.MODEL_VIEW.,$)');
  const project = add('IFCPROJECT(' + guid(model.project.id, 'p') + ',$,' + str(model.project.name || title) + ',' + str(model.project.description || '') + ',$,$,$,(' + ctx + '),' + units + ')');
  const axisAt = (x, y, z, rowX, rowZ) => add('IFCAXIS2PLACEMENT3D(' + add('IFCCARTESIANPOINT((' + [x, y, z].map(real).join(',') + '))') + (rowZ ? ',' + add('IFCDIRECTION((' + rowZ.map(real).join(',') + '))') + ',' + add('IFCDIRECTION((' + rowX.map(real).join(',') + '))') : ',$,$') + ')');
  const place = (rel, ax) => add('IFCLOCALPLACEMENT(' + (rel || '$') + ',' + (ax || axis0) + ')');
  const rel = (kind, relating, related) => add('IFC' + kind + '(' + guid(null, kind + n) + ',$,$,$,' + relating + ',(' + related.join(',') + '))');   // IfcRelAggregates: relating first
  const defines = (pset, elem) => add('IFCRELDEFINESBYPROPERTIES(' + guid(null, 'd' + n) + ',$,$,$,(' + elem + '),' + pset + ')');   // IfcRelDefinesByProperties: related objects first
  const styles = new Map();
  const styleFor = (color, opacity) => {
    const key = color.map((x) => Math.round(x * 255)).join(',') + '|' + (typeof opacity === 'number' ? opacity : 1);
    if (!styles.has(key)) {
      const c = add('IFCCOLOURRGB($,' + color.map(real).join(',') + ')');
      const rend = add('IFCSURFACESTYLERENDERING(' + c + ',' + real(1 - (typeof opacity === 'number' ? opacity : 1)) + ',$,$,$,$,$,$,.NOTDEFINED.)');
      styles.set(key, add('IFCSURFACESTYLE($,.BOTH.,(' + rend + '))'));
    }
    return styles.get(key);
  };
  const classif = new Map(), refs = new Map(), mats = new Map();
  const assoc = new Map();   // relation target → [elements]
  const later = (target, kind, el) => { const k = kind + '|' + target; (assoc.get(k) || assoc.set(k, { kind, target, els: [] }).get(k)).els.push(el); };

  const writeElement = (el) => {
    let cls = el.ifcClass || 'IfcBuildingElementProxy';
    const known = KNOWN.has(cls);
    if (!known) { stats.other++; cls = 'IfcBuildingElementProxy'; }
    // placement: a rigid placement is IFC's own; anything else is baked into the points
    const M = el.placement;
    const rigid = M && isRigid(M);
    const ax = rigid ? axisAt(M[3][0], M[3][1], M[3][2], M[0], M[2]) : axis0;
    const lp = place(null, rigid ? ax : null);
    const items = [];
    for (const m of el.meshes || []) {
      if (m.hidden || !m.indices.length) continue;
      const pts = [];
      for (let i = 0; i < m.positions.length; i += 3) {
        let x = m.positions[i], y = m.positions[i + 1], z = m.positions[i + 2];
        if (M && !rigid) { x = m.positions[i] * M[0][0] + y * M[1][0] + z * M[2][0] + M[3][0]; const y2 = m.positions[i] * M[0][1] + m.positions[i + 1] * M[1][1] + z * M[2][1] + M[3][1]; z = m.positions[i] * M[0][2] + m.positions[i + 1] * M[1][2] + z * M[2][2] + M[3][2]; y = y2; }
        pts.push('(' + real(x) + ',' + real(y) + ',' + real(z) + ')');
      }
      const tri = [];
      for (let i = 0; i < m.indices.length; i += 3) tri.push('(' + (m.indices[i] + 1) + ',' + (m.indices[i + 1] + 1) + ',' + (m.indices[i + 2] + 1) + ')');
      const fs = add('IFCTRIANGULATEDFACESET(' + add('IFCCARTESIANPOINTLIST3D((' + pts.join(',') + '))') + ',$,$,(' + tri.join(',') + '),$)');
      const color = m.color || el.color;
      if (color) add('IFCSTYLEDITEM(' + fs + ',(' + styleFor(color, m.opacity ?? el.opacity) + '),$)');
      items.push(fs);
      stats.triangles += m.indices.length / 3;
    }
    let shape = '$';
    if (items.length) shape = add('IFCPRODUCTDEFINITIONSHAPE($,$,(' + add("IFCSHAPEREPRESENTATION(" + body + ",'Body','Tessellation',(" + items.join(',') + '))') + '))');
    const head = guid(el.id, 'e' + n) + ',$,' + str(el.name) + ',' + str(el.description || '') + ',' + (known ? '$' : str(el.ifcClass)) + ',' + lp + ',' + shape;
    const E = cls.toUpperCase();
    const line = cls === 'IfcSpace' ? 'IFCSPACE(' + head + ',$,.ELEMENT.,.SPACE.,$)'
      : cls === 'IfcDoor' || cls === 'IfcWindow' ? E + '(' + head + ',$,$,$,$,$,$,$)'
      : E + '(' + head + ',$,$)';
    const id = add(line);
    // property sets and quantity sets
    for (const [set, vals] of Object.entries(el.props || {})) {
      const ps = [];
      for (const [pn, v] of Object.entries(vals)) {
        if (typeof v === 'string') ps.push(add('IFCPROPERTYSINGLEVALUE(' + str(pn) + ',$,' + label(v) + ',$)'));
        else if (typeof v === 'boolean') ps.push(add('IFCPROPERTYSINGLEVALUE(' + str(pn) + ',$,IFCBOOLEAN(' + (v ? '.T.' : '.F.') + '),$)'));
        else if (typeof v === 'number') ps.push(add('IFCPROPERTYSINGLEVALUE(' + str(pn) + ',$,' + (Number.isInteger(v) ? 'IFCINTEGER(' + v + ')' : 'IFCREAL(' + real(v) + ')') + ',$)'));
      }
      if (ps.length) { defines(add('IFCPROPERTYSET(' + guid(null, 'ps' + n) + ',$,' + str(set === IFCX_SET ? IFC_SET : set) + ',$,(' + ps.join(',') + '))'), id); stats.sets++; }
    }
    for (const [set, vals] of Object.entries(el.quantities || {})) {
      const qs = [], loose = [];
      for (const [qn, q] of Object.entries(vals)) {
        const v = real(q.value);
        if (q.kind === 'Length') qs.push(add('IFCQUANTITYLENGTH(' + str(qn) + ',$,$,' + v + ',$)'));
        else if (q.kind === 'Area') qs.push(add('IFCQUANTITYAREA(' + str(qn) + ',$,$,' + v + ',$)'));
        else if (q.kind === 'Volume') qs.push(add('IFCQUANTITYVOLUME(' + str(qn) + ',$,$,' + v + ',$)'));
        else if (q.kind === 'Mass') qs.push(add('IFCQUANTITYWEIGHT(' + str(qn) + ',$,$,' + v + ',$)'));
        else loose.push(add('IFCPROPERTYSINGLEVALUE(' + str(qn) + ',' + str(q.kind || '') + ',IFCREAL(' + v + '),$)'));
      }
      if (qs.length) { defines(add('IFCELEMENTQUANTITY(' + guid(null, 'q' + n) + ',$,' + str(set === IFCX_SET ? QTO_IFC : set) + ',$,$,(' + qs.join(',') + '))'), id); stats.sets++; }
      if (loose.length) { defines(add('IFCPROPERTYSET(' + guid(null, 'qp' + n) + ',$,' + str(set === IFCX_SET ? IFC_SET : set) + ',$,(' + loose.join(',') + '))'), id); }
    }
    for (const c of el.classifications || []) {
      if (!classif.has(c.system)) classif.set(c.system, add('IFCCLASSIFICATION(' + str(c.system) + ',$,$,' + str(c.system) + ',$,$,$)'));
      const k = c.system + '|' + c.code;
      if (!refs.has(k)) refs.set(k, add('IFCCLASSIFICATIONREFERENCE(' + (c.uri ? str(c.uri) : '$') + ',' + str(c.code) + ',$,' + classif.get(c.system) + ',$,$)'));
      later(refs.get(k), 'RELASSOCIATESCLASSIFICATION', id);
    }
    if (el.material && el.material.code) {
      if (!mats.has(el.material.code)) mats.set(el.material.code, add('IFCMATERIAL(' + str(el.material.code) + ',$,$)'));
      later(mats.get(el.material.code), 'RELASSOCIATESMATERIAL', id);
    }
    stats.elements++;
    return id;
  };

  const sites = [];
  for (const s of model.sites) {
    const sPl = place(null);
    const site = add('IFCSITE(' + guid(s.id, 's' + n) + ',$,' + str(s.name) + ',' + str(s.description || '') + ',$,' + sPl + ',$,$,.ELEMENT.,$,$,$,$,$)');
    sites.push(site);
    // IFC's containment relation has the elements first: IfcRelContainedInSpatialStructure(…, RelatedElements, RelatingStructure)
    const containIn = (container, list) => { if (list && list.length) add('IFCRELCONTAINEDINSPATIALSTRUCTURE(' + guid(null, 'c' + n) + ',$,$,$,(' + list.map(writeElement).join(',') + '),' + container + ')'); };
    containIn(site, s.elements);
    const blds = [];
    for (const b of s.buildings) {
      const bPl = place(sPl);
      const bld = add('IFCBUILDING(' + guid(b.id, 'b' + n) + ',$,' + str(b.name) + ',' + str(b.description || '') + ',$,' + bPl + ',$,$,.ELEMENT.,$,$,$)');
      blds.push(bld);
      containIn(bld, b.elements);
      const stos = [];
      for (const st of b.storeys) {
        const z = Number.isFinite(st.elevation) ? st.elevation : 0;
        const stoPl = place(bPl, axisAt(0, 0, z));
        const sto = add('IFCBUILDINGSTOREY(' + guid(st.id, 'st' + n) + ',$,' + str(st.name) + ',' + str(st.description || '') + ',$,' + stoPl + ',$,$,.ELEMENT.,' + real(z) + ')');
        stos.push(sto);
        containIn(sto, st.elements);
      }
      if (stos.length) rel('RELAGGREGATES', bld, stos);
    }
    if (blds.length) rel('RELAGGREGATES', site, blds);
  }
  if (sites.length) rel('RELAGGREGATES', project, sites);
  for (const a of assoc.values()) add('IFC' + a.kind + '(' + guid(null, a.kind + n) + ',$,$,$,(' + a.els.join(',') + '),' + a.target + ')');
  const text = ['ISO-10303-21;', 'HEADER;', "FILE_DESCRIPTION(('ViewDefinition [ReferenceView]'),'2;1');", 'FILE_NAME(' + str(title + '.ifc') + ",'',(''),(''),'CadCraft BimCraft (from IFCX alpha)','','');",
    "FILE_SCHEMA(('IFC4'));", 'ENDSEC;', 'DATA;', ...lines, 'ENDSEC;', 'END-ISO-10303-21;', ''].join('\n');
  return { text, stats };
}

// ---------------------------------------------------------------- open models → IFCX
/** Y up (the viewer) → Z up: (x, y, z) → (x, −z, y), metres. */
const hexOf = (c) => c.slice(0, 3).map((x) => Math.round(Math.min(1, Math.max(0, x)) * 255));
const sv = (v) => (v && typeof v === 'object' && 'value' in v ? (v.value === '' || v.value === undefined ? null : v.value) : v ?? null);

export async function bimIfcx(entries, { name = 'model', matrixOf = () => null, author = 'CadCraft', progress = () => {} } = {}) {
  const sites = [];
  let projectName = null, count = 0;
  const total = entries.reduce((s, e) => s + (e.model.elements || 0) + (e.model.spaces || 0), 0) || 1;
  const report = { elements: 0, storeys: 0, models: 0, triangles: 0 };
  for (const e of entries) {
    if (e.visible === false) continue;
    report.models++;
    const { api } = e.ifc, mid = e.model.modelID, M = e.model, keyBase = M.keyBase || 0;
    const line = (id) => { try { return api.GetLine(mid, id, false); } catch { return null; } };
    const mm = lengthUnitMm(api, mid) / 1000;
    // each model is written in its OWN file coordinates (metres, Z up): the viewer moved it near the origin (the coordination
    // matrix) and may have placed it (matrixOf); both are taken back. The alpha has no coordinate system to put them in.
    let C = null;
    try { C = [...api.GetCoordinationMatrix(mid)]; } catch { C = null; }
    const P = C && C.length === 16 ? rigidInverse(C) : [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
    void matrixOf;
    const findType = (node, type) => { if (!node) return null; if (String(node.type || '').toUpperCase() === type) return node; for (const c of node.children || []) { const f = findType(c, type); if (f) return f; } return null; };
    const prj = M.tree && findType(M.tree, 'IFCPROJECT');
    if (!projectName && prj) projectName = sv(line(prj.expressID)?.Name);
    const siteLn = M.tree && findType(M.tree, 'IFCSITE'), bldLn = M.tree && findType(M.tree, 'IFCBUILDING');
    const site = { id: null, key: 'Site', name: (siteLn && sv(line(siteLn.expressID)?.Name)) || e.name.replace(/\.ifc$/i, '') || 'Site', nameSource: 'key', description: '', extra: {}, raw: [], ifcClass: 'IfcSite', buildings: [], elements: [] };
    const bld = { id: null, key: 'Building', name: (bldLn && sv(line(bldLn.expressID)?.Name)) || 'Building', nameSource: 'key', description: '', extra: {}, raw: [], ifcClass: 'IfcBuilding', storeys: [], elements: [] };
    site.buildings.push(bld);
    const storeyOf = new Map();
    for (const s of [...(M.storeys || [])].sort((a, b) => (a.elevation ?? 0) - (b.elevation ?? 0))) {
      const st = { id: sv(line(s.id)?.GlobalId) ? globalIdToUuid(sv(line(s.id).GlobalId)) : null, key: s.name, name: s.name, nameSource: 'key', description: '', extra: {}, raw: [], ifcClass: 'IfcBuildingStorey', elevation: (Number.isFinite(s.elevation) ? s.elevation : 0) * mm, placement: null, elements: [] };
      st.placement = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, st.elevation, 1]];
      bld.storeys.push(st); storeyOf.set(s.id, st); report.storeys++;
    }
    const runs = new Map();
    for (const bt of M.batches) {
      const E = bt.elems;
      for (let k = 0; k < E.ids.length; k++) {
        const key = E.ids[k];
        (runs.get(key) || runs.set(key, []).get(key)).push({ bt, t0: E.t0[k], tn: E.tn[k], v0: E.v0[k], vn: E.vn[k] });
      }
    }
    for (const [key, parts] of runs) {
      const id = key - keyBase;
      const cls = M.classOf.get(id) || 'IfcBuildingElementProxy';
      const ln = line(id) || {};
      const gid = sv(ln.GlobalId);
      const el = { id: gid ? globalIdToUuid(gid) : null, key: '', name: sv(ln.Name) || cls, nameSource: 'key', ifcClass: cls, host: null, placement: null, props: {}, quantities: {}, classifications: [], material: null, color: null, opacity: null, description: sv(ln.Description) || '', extra: {}, raw: [], meshes: [] };
      el.key = el.name;
      await readSets(api, mid, id, el, mm);
      // one mesh per colour, points in scene metres, Z up
      const groups = new Map();
      for (const r of parts) {
        const c = r.bt.color || [0.7, 0.7, 0.7, 1];
        const k = hexOf(c).join(',') + '|' + (c[3] ?? 1);
        let g = groups.get(k);
        if (!g) groups.set(k, (g = { color: c, positions: [], indices: [] }));
        const base0 = g.positions.length / 3;
        for (let v = 0; v < r.vn; v++) {
          const s = (r.v0 + v) * 3, x = r.bt.positions[s], y = r.bt.positions[s + 1], z = r.bt.positions[s + 2];
          const wx = P[0] * x + P[4] * y + P[8] * z + P[12], wy = P[1] * x + P[5] * y + P[9] * z + P[13], wz = P[2] * x + P[6] * y + P[10] * z + P[14];
          g.positions.push(wx, -wz, wy);
        }
        for (let t = 0; t < r.tn; t++) for (let c2 = 0; c2 < 3; c2++) g.indices.push(r.bt.indices[(r.t0 + t) * 3 + c2] - r.v0 + base0);
      }
      let gi = 0;
      for (const g of groups.values()) {
        el.meshes.push({ id: null, key: gi ? 'Body ' + (gi + 1) : 'Body', positions: g.positions, indices: g.indices, color: g.color.slice(0, 3), opacity: (g.color[3] ?? 1) < 0.999 ? g.color[3] : null, hidden: false, extra: {} });
        report.triangles += g.indices.length / 3; gi++;
      }
      (storeyOf.get(M.storeyOf.get(id)) || bld).elements.push(el);
      report.elements++;
      if (++count % 200 === 0) progress(count, total);
    }
    sites.push(site);
  }
  progress(total, total);
  const model = { name, header: null, units: 'm', up: 'z', schemas: {}, issues: [], stats: {}, project: { id: null, key: projectName || name, name: projectName || name, nameSource: 'key', description: '', extra: {}, raw: [], ifcClass: 'IfcProject' }, sites };
  const w = writeIfcx(model, { id: 'cadcraft/' + name.replace(/[^A-Za-z0-9._-]+/g, '_') + '.ifcx', author });
  return { text: w.text, file: w.file, report, issues: w.issues };
}

/** The inverse of a rigid move with a uniform scale (the viewer's coordination matrix, column-major). */
function rigidInverse(m) {
  const s2 = m[0] * m[0] + m[1] * m[1] + m[2] * m[2] || 1;
  const r = [m[0] / s2, m[4] / s2, m[8] / s2, 0, m[1] / s2, m[5] / s2, m[9] / s2, 0, m[2] / s2, m[6] / s2, m[10] / s2, 0, 0, 0, 0, 1];
  r[12] = -(r[0] * m[12] + r[4] * m[13] + r[8] * m[14]);
  r[13] = -(r[1] * m[12] + r[5] * m[13] + r[9] * m[14]);
  r[14] = -(r[2] * m[12] + r[6] * m[13] + r[10] * m[14]);
  return r;
}

/** Property sets (scalars) and quantity sets (SI) of one element, instance only. */
async function readSets(api, mid, id, el, mm) {
  let ps = [];
  try { ps = await api.properties.getPropertySets(mid, id, true); } catch { ps = []; }
  for (const s of ps) {
    const set = sv(s.Name) || 'Properties';
    for (const p of s.HasProperties || []) {
      const pn = sv(p.Name);
      const v = p.NominalValue != null ? sv(p.NominalValue) : null;
      if (!pn || v === null || v === undefined) continue;
      if (typeof v === 'string' || typeof v === 'number' || typeof v === 'boolean') (el.props[set] = el.props[set] || {})[pn] = v;
    }
    for (const q of s.Quantities || []) {
      const qn = sv(q.Name);
      if (!qn) continue;
      const pick = (f, k, kind) => (q[f] != null ? { value: Number(typeof q[f] === 'object' ? q[f].value : q[f]) * k, kind } : null);
      const got = pick('LengthValue', mm, 'Length') || pick('AreaValue', mm * mm, 'Area') || pick('VolumeValue', mm * mm * mm, 'Volume') || pick('WeightValue', 1, 'Mass');
      if (got && Number.isFinite(got.value)) (el.quantities[set === QTO_IFC ? IFCX_SET : set] = el.quantities[set === QTO_IFC ? IFCX_SET : set] || {})[qn] = got;
    }
  }
  for (const [set, vals] of Object.entries(el.props)) if (set === IFC_SET) { el.props[IFCX_SET] = vals; delete el.props[set]; }
}
void A;
