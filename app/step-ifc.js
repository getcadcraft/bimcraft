/* SPDX-License-Identifier: Apache-2.0 */
/**
 * step-ifc.js — a STEP file (AP203 / AP214 / AP242: a part, equipment or a supplier's model) opened in BimCraft (0.7 D7.26,
 * session part-08). cc-step (./step/, a copy of lib/step/ written only by tools/step/sync.mjs) reads it as triangles in
 * millimetres; this turns them into a small IFC4 file — one IfcBuildingElementProxy per placed solid, its body an
 * IfcTriangulatedFaceSet, on one storey — which BimCraft then opens like any IFC (view, properties, sections, measure, place
 * it in a model, save it as IFC). DOM-free; untrusted input (cc-step's caps, errors with `code` step.err.*).
 *
 *   stepToIfc(bytes, { name }) → { text (IFC4 STEP), read (cc-step's read: schema, solids, notes, counts) }
 */
import { readStep } from './step/read.js';
import { meshToPrism, prismLines } from './ifc-solids.js';   // DC.115: a straight prism stays an extrusion

const B64 = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_$';
/** A fresh IFC GlobalId: 128 random bits in IFC's 22-character base-64. */
function guid() {
  const b = new Uint8Array(16);
  globalThis.crypto.getRandomValues(b);
  let n = 0n;
  for (const x of b) n = (n << 8n) | BigInt(x);
  let s = '';
  for (let i = 0; i < 22; i++) { s = B64[Number(n & 63n)] + s; n >>= 6n; }
  return s;
}
const str = (s) => "'" + String(s).replace(/[\u0000-\u001f\u007f]/g, ' ').replace(/\\/g, '\\\\').replace(/'/g, "''").replace(/[^ -~]/g, (c) => '\\X2\\' + c.charCodeAt(0).toString(16).toUpperCase().padStart(4, '0') + '\\X0\\') + "'";
const real = (v) => { const s = String(+v.toFixed(6)); return /[.eE]/.test(s) ? s : s + '.'; };

export function stepToIfc(bytes, { name = 'STEP', parametric = true } = {}) {
  const read = readStep(bytes);
  const stats = { prisms: 0 };
  return { text: solidsToIfc(read.solids, { title: name, tag: 'STEP', note: 'STEP ' + read.schema.replace(/[^A-Z0-9]/g, ''), from: 'STEP', parametric, stats }), read, prisms: stats.prisms };
}

/** Solids ({ name?, positions (mm: x y z …), indices }) as a small IFC4 file: one proxy element per solid on one storey.
 *  The OBJ reader (obj-ifc.js, 0.8 SU.1055) uses it too. */
export function solidsToIfc(solids, { title: name = 'Model', tag = 'STEP', note = '', from = 'STEP', parametric = false, stats = null } = {}) {
  const lines = [];
  let id = 0;
  const add = (text) => { lines.push('#' + (++id) + '=' + text + ';'); return '#' + id; };
  const title = String(name).slice(0, 120) || tag;
  const owner = '$';   // owner history is optional in IFC4
  const units = add('IFCUNITASSIGNMENT((' + add('IFCSIUNIT(*,.LENGTHUNIT.,.MILLI.,.METRE.)') + ',' + add('IFCSIUNIT(*,.AREAUNIT.,$,.SQUARE_METRE.)') + ',' + add('IFCSIUNIT(*,.VOLUMEUNIT.,$,.CUBIC_METRE.)') + ',' + add('IFCSIUNIT(*,.PLANEANGLEUNIT.,$,.RADIAN.)') + '))');
  const origin = add('IFCCARTESIANPOINT((0.,0.,0.))');
  const axis = add('IFCAXIS2PLACEMENT3D(' + origin + ',$,$)');
  const ctx = add("IFCGEOMETRICREPRESENTATIONCONTEXT($,'Model',3,1.E-05," + axis + ',$)');
  const body = add("IFCGEOMETRICREPRESENTATIONSUBCONTEXT('Body','Model',*,*,*,*," + ctx + ',$,.MODEL_VIEW.,$)');
  const project = add('IFCPROJECT(' + str(guid()) + ',' + owner + ',' + str(title) + ',$,$,$,$,(' + ctx + '),' + units + ')');
  const place = (rel) => add('IFCLOCALPLACEMENT(' + (rel || '$') + ',' + axis + ')');
  const pSite = place(null), pBld = place(pSite), pSto = place(pBld);
  const site = add('IFCSITE(' + str(guid()) + ',' + owner + ",'Site',$,$," + pSite + ',$,$,.ELEMENT.,$,$,$,$,$)');   // i18n-ignore: IFC names (data)
  const bld = add('IFCBUILDING(' + str(guid()) + ',' + owner + ',' + str(title) + ',$,$,' + pBld + ',$,$,.ELEMENT.,$,$,$)');
  const sto = add('IFCBUILDINGSTOREY(' + str(guid()) + ',' + owner + ",'" + tag + "',$,$," + pSto + ',$,$,.ELEMENT.,0.)');   // i18n-ignore: IFC names (data)
  add('IFCRELAGGREGATES(' + str(guid()) + ',' + owner + ',$,$,' + project + ',(' + site + '))');
  add('IFCRELAGGREGATES(' + str(guid()) + ',' + owner + ',$,$,' + site + ',(' + bld + '))');
  add('IFCRELAGGREGATES(' + str(guid()) + ',' + owner + ',$,$,' + bld + ',(' + sto + '))');
  const elems = [];
  solids.forEach((s, i) => {
    const P = s.positions, pts = [];
    const prism = parametric ? meshToPrism(P, s.indices) : null;   // DC.115: IFC's own solid where the mesh is exactly one
    if (prism) {
      const solid = prismLines(add, prism);
      const rep = add("IFCSHAPEREPRESENTATION(" + body + ",'Body','SweptSolid',(" + solid + '))');
      const shape = add('IFCPRODUCTDEFINITIONSHAPE($,$,(' + rep + '))');
      const label = s.name || title + ' ' + (i + 1);
      elems.push(add('IFCBUILDINGELEMENTPROXY(' + str(guid()) + ',' + owner + ',' + str(label) + ",'" + note + "',$," + place(pSto) + ',' + shape + ',$,$)'));
      if (stats) stats.prisms++;
      return;
    }
    for (let k = 0; k < P.length; k += 3) pts.push('(' + real(P[k]) + ',' + real(P[k + 1]) + ',' + real(P[k + 2]) + ')');
    const tri = [];
    for (let k = 0; k < s.indices.length; k += 3) tri.push('(' + (s.indices[k] + 1) + ',' + (s.indices[k + 1] + 1) + ',' + (s.indices[k + 2] + 1) + ')');
    const list = add('IFCCARTESIANPOINTLIST3D((' + pts.join(',') + '))');
    const fs = add('IFCTRIANGULATEDFACESET(' + list + ',$,$,(' + tri.join(',') + '),$)');
    const rep = add("IFCSHAPEREPRESENTATION(" + body + ",'Body','Tessellation',(" + fs + '))');
    const shape = add('IFCPRODUCTDEFINITIONSHAPE($,$,(' + rep + '))');
    const label = s.name || title + ' ' + (i + 1);
    elems.push(add('IFCBUILDINGELEMENTPROXY(' + str(guid()) + ',' + owner + ',' + str(label) + ",'" + note + "',$," + place(pSto) + ',' + shape + ',$,$)'));
  });
  add('IFCRELCONTAINEDINSPATIALSTRUCTURE(' + str(guid()) + ',' + owner + ',$,$,(' + elems.join(',') + '),' + sto + ')');
  const text = ['ISO-10303-21;', 'HEADER;', "FILE_DESCRIPTION(('ViewDefinition [ReferenceView]'),'2;1');", 'FILE_NAME(' + str(title + '.ifc') + ",'',(''),(''),'CadCraft BimCraft (from " + from + ")','','');",   // i18n-ignore: file header (data)
    "FILE_SCHEMA(('IFC4'));", 'ENDSEC;', 'DATA;', ...lines, 'ENDSEC;', 'END-ISO-10303-21;', ''].join('\n');
  return text;
}
