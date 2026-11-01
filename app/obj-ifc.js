/* SPDX-License-Identifier: Apache-2.0 */
/**
 * obj-ifc.js — a Wavefront OBJ file opened in BimCraft (0.8 SU.1055, session bim-08). Written from the OBJ format description
 * (`v`, `f`, `o`, `g`, negative indices, `\` continuation); nothing is copied from another reader. Faces of any size are turned
 * into triangles (a fan), every `o` / `g` object becomes one mesh element (an IfcBuildingElementProxy with an
 * IfcTriangulatedFaceSet, step-ifc.js `solidsToIfc`) on one storey, and the result opens like any IFC: view, properties,
 * sections, measure, place it in a model, Save as IFC. DOM-free; untrusted input (caps below, errors with `code` obj.err.*).
 *
 * Units and axes: OBJ has neither. Like ModelCraft's own OBJ files this reads METRES and Y up (so Z up in the IFC); `unit`
 * ('m' | 'mm' | 'cm' | 'ft' | 'in') says otherwise, `yUp: false` keeps the axes as written.
 *
 *   objToIfc(text, { name, unit, yUp }) → { text (IFC4 STEP), read: { objects, vertices, faces, triangles, skipped } }
 */
import { solidsToIfc } from './step-ifc.js';

export const MAX_VERTICES = 2_000_000;
export const MAX_TRIANGLES = 3_000_000;
const MM = { m: 1000, mm: 1, cm: 10, ft: 304.8, in: 25.4 };
const fail = (code, vars = {}) => { throw Object.assign(new Error(code), { code, vars }); };

export function readObj(text, { unit = 'm', yUp = true } = {}) {
  if (typeof text !== 'string') fail('obj.err.text');
  const k = MM[unit];
  if (!k) fail('obj.err.unit', { unit });
  const V = [];   // vertices in mm, Z up
  const objects = [];
  let cur = null;
  const skipped = {};
  const skip = (w) => { skipped[w] = (skipped[w] || 0) + 1; };
  let faces = 0, tris = 0;
  const open = (name) => { cur = { name, map: new Map(), positions: [], indices: [] }; objects.push(cur); return cur; };
  const lines = text.replace(/\\\r?\n/g, ' ').split(/\r?\n/);
  for (const raw of lines) {
    const s = raw.trim();
    if (!s || s[0] === '#') continue;
    const parts = s.split(/\s+/), tag = parts[0];
    if (tag === 'v') {
      const p = [parseFloat(parts[1]), parseFloat(parts[2]), parseFloat(parts[3])];
      if (!p.every((x) => Number.isFinite(x) && Math.abs(x) < 1e9)) fail('obj.err.vertex', { line: s.slice(0, 40) });
      V.push(yUp ? [p[0] * k, -p[2] * k, p[1] * k] : [p[0] * k, p[1] * k, p[2] * k]);
      if (V.length > MAX_VERTICES) fail('obj.err.big', { n: MAX_VERTICES });
    } else if (tag === 'o' || tag === 'g') {
      const name = parts.slice(1).join(' ').slice(0, 80);
      if (!cur || cur.indices.length) open(name || 'Object ' + (objects.length + 1)); else cur.name = name || cur.name;
    } else if (tag === 'f') {
      const ids = [];
      let bad = false;
      for (const tok of parts.slice(1)) {
        let i = parseInt(tok.split('/')[0], 10);
        if (!Number.isInteger(i) || i === 0) { bad = true; break; }
        if (i < 0) i = V.length + 1 + i;
        if (i < 1 || i > V.length) { bad = true; break; }
        ids.push(i - 1);
      }
      if (bad || ids.length < 3) { skip('faces'); continue; }
      const o = cur || open('Object 1');
      faces++;
      for (let j = 1; j + 1 < ids.length; j++) {
        const tri = [ids[0], ids[j], ids[j + 1]].map((g) => {
          let n = o.map.get(g);
          if (n === undefined) { n = o.positions.length / 3; o.map.set(g, n); o.positions.push(...V[g]); }
          return n;
        });
        if (tri[0] === tri[1] || tri[1] === tri[2] || tri[0] === tri[2]) { skip('degenerate'); continue; }
        o.indices.push(...tri);
        if (++tris > MAX_TRIANGLES) fail('obj.err.big', { n: MAX_TRIANGLES });
      }
    } else if (tag === 'l' || tag === 'p') skip('lines');
    else if (!['vt', 'vn', 'vp', 's', 'usemtl', 'mtllib', 'mg', 'cstype', 'deg', 'curv', 'surf'].includes(tag)) skip('other');
    else if (['cstype', 'curv', 'surf', 'deg'].includes(tag)) skip('curves');
  }
  const solids = objects.filter((o) => o.indices.length).map(({ name, positions, indices }) => ({ name, positions, indices }));
  if (!solids.length) fail('obj.err.empty');
  return { solids, vertices: V.length, faces, triangles: tris, skipped };
}

export function objToIfc(text, { name = 'OBJ', unit = 'm', yUp = true, parametric = true } = {}) {
  const read = readObj(text, { unit, yUp });
  const stats = { prisms: 0 };
  const out = solidsToIfc(read.solids, { title: name, tag: 'OBJ', note: 'OBJ', from: 'OBJ', parametric, stats });
  return { text: out, prisms: stats.prisms, read: { objects: read.solids.length, vertices: read.vertices, faces: read.faces, triangles: read.triangles, skipped: read.skipped } };
}
