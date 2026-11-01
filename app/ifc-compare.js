/* SPDX-License-Identifier: Apache-2.0 */
/**
 * ifc-compare.js — what changed between two versions of an IFC model, element by element through their GlobalIds
 * (0.4 B21). No DOM: bin/test-bimcraft.mjs --compare runs it on the fixture and its revision 'b'.
 *
 *   compareModels(A, B, { tolerance }) → { added, removed, changed, same, dupes }
 *     A, B = { ix (ifc-props.js propertyIndex), model (IfcModel.load() result), matrix (column-major 4 × 4 into a frame both
 *     share, or null) } — A the older version, B the newer.
 *     added    [keyB]   GlobalIds only in B          removed [keyA]   only in A
 *     changed  [{ guid, a: keyA, b: keyB, props: [{ field, before, after }], moved: metres | 0, reshaped: bool }]
 *     same     how many matched with nothing different
 *     dupes    GlobalIds used more than once in either model (left out: there is no telling which is which)
 *   Only elements with a shape take part (the property index's). Positions compare in the shared frame: `moved` = how far
 *   the middle of the element's box went (over `tolerance`, metres, default 0.001); `reshaped` = its size or triangle count
 *   changed. Properties: every field of either index (GlobalId and the storey's own name included), values as the index
 *   holds them (numbers compare with a relative 1e-9).
 */

function boxes(model, matrix) {
  const M = matrix, tris = new Map(), box = new Map();
  for (const b of model.batches) {
    const E = b.elems, P = b.positions;
    for (let r = 0; r < E.ids.length; r++) {
      const k = E.ids[r];
      tris.set(k, (tris.get(k) || 0) + E.tn[r]);
      let bb = box.get(k);
      if (!bb) box.set(k, (bb = [Infinity, Infinity, Infinity, -Infinity, -Infinity, -Infinity]));
      for (let v = E.v0[r] * 3, end = (E.v0[r] + E.vn[r]) * 3; v < end; v += 3) {
        let x = P[v], y = P[v + 1], z = P[v + 2];
        if (M) { const X = M[0] * x + M[4] * y + M[8] * z + M[12], Y = M[1] * x + M[5] * y + M[9] * z + M[13], Z = M[2] * x + M[6] * y + M[10] * z + M[14]; x = X; y = Y; z = Z; }
        if (x < bb[0]) bb[0] = x; if (y < bb[1]) bb[1] = y; if (z < bb[2]) bb[2] = z;
        if (x > bb[3]) bb[3] = x; if (y > bb[4]) bb[4] = y; if (z > bb[5]) bb[5] = z;
      }
    }
  }
  return { tris, box };
}

const byGuid = (ix) => {
  const m = new Map(), dup = new Set();
  for (const [id, g] of ix.values('guid')) { if (m.has(g)) dup.add(g); else m.set(g, id); }
  return { m, dup };
};
const sameVal = (a, b) => (typeof a === 'number' && typeof b === 'number' ? Math.abs(a - b) <= 1e-9 * Math.max(1, Math.abs(a), Math.abs(b)) : a === b);

export function compareModels(A, B, { tolerance = 0.001 } = {}) {
  const ga = byGuid(A.ix), gb = byGuid(B.ix);
  const dupes = [...new Set([...ga.dup, ...gb.dup])];
  const skip = new Set(dupes);
  const sa = boxes(A.model, A.matrix), sb = boxes(B.model, B.matrix);
  const fields = [...new Set([...A.ix.fields, ...B.ix.fields].map((f) => f.id))].filter((f) => f !== 'guid');
  const va = new Map(fields.map((f) => [f, A.ix.values(f)])), vb = new Map(fields.map((f) => [f, B.ix.values(f)]));
  const added = [], removed = [], changed = [];
  let same = 0;
  for (const [g, idA] of ga.m) {
    if (skip.has(g)) continue;
    const idB = gb.m.get(g);
    if (idB === undefined) { removed.push(A.ix.keyBase + idA); continue; }
    const ka = A.ix.keyBase + idA, kb = B.ix.keyBase + idB;
    const props = [];
    for (const f of fields) {
      const x = va.get(f).get(idA), y = vb.get(f).get(idB);
      if (x === undefined && y === undefined) continue;
      if (!sameVal(x, y)) props.push({ field: f, before: x, after: y });
    }
    const p = sa.box.get(ka), q = sb.box.get(kb);
    let moved = 0, reshaped = false;
    if (p && q) {
      const d = Math.hypot((p[0] + p[3] - q[0] - q[3]) / 2, (p[1] + p[4] - q[1] - q[4]) / 2, (p[2] + p[5] - q[2] - q[5]) / 2);
      if (d > tolerance) moved = d;
      reshaped = [0, 1, 2].some((i) => Math.abs((p[i + 3] - p[i]) - (q[i + 3] - q[i])) > tolerance) || sa.tris.get(ka) !== sb.tris.get(kb);
    }
    if (props.length || moved || reshaped) changed.push({ guid: g, a: ka, b: kb, props, moved, reshaped });
    else same++;
  }
  for (const [g, idB] of gb.m) if (!skip.has(g) && !ga.m.has(g)) added.push(B.ix.keyBase + idB);
  return { added, removed, changed, same, dupes };
}

/** CSV of a comparison (no BOM: the page adds it). name(side, key) / guid(side, key) → the element's; words from the page. */
export function compareCsv(res, { name = (s, k) => String(k), guid = () => '', label = (f) => f, words = {} } = {}) {
  const w = { change: 'Change', guid: 'GlobalId', element: 'Element', what: 'What', before: 'Before', after: 'After', added: 'Added', removed: 'Removed', changed: 'Changed', moved: 'Moved', reshaped: 'Shape changed', ...words };   // i18n-ignore: defaults; the page passes translated words
  const cell = (v) => { let s = String(v ?? ''); if (/^[=+\-@\t\r]/.test(s) && !/^-?\d/.test(s)) s = "'" + s; return /[",\r\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s; };
  const rows = [[w.change, w.guid, w.element, w.what, w.before, w.after]];
  for (const c of res.changed) {
    for (const p of c.props) rows.push([w.changed, c.guid, name('b', c.b), label(p.field), p.before, p.after]);
    if (c.moved) rows.push([w.moved, c.guid, name('b', c.b), '', '', Number(c.moved.toFixed(4))]);
    if (c.reshaped) rows.push([w.reshaped, c.guid, name('b', c.b), '', '', '']);
  }
  for (const k of res.added) rows.push([w.added, guid('b', k), name('b', k), '', '', '']);
  for (const k of res.removed) rows.push([w.removed, guid('a', k), name('a', k), '', '', '']);
  return rows.map((r) => r.map(cell).join(',')).join('\r\n') + '\r\n';
}

/** The comparison as plain sentences, one per change, for a person or an assistant to read. say = { added, removed, moved, reshaped, prop } each (vars) → text from the page's language file. */
export function compareWords(res, { name = (s, k) => String(k), label = (f) => f, say, max = 500 } = {}) {
  const out = [];
  const val = (v) => (v === undefined || v === null || v === '' ? '—' : String(v));
  for (const k of res.added) out.push(say.added({ name: name('b', k) }));
  for (const k of res.removed) out.push(say.removed({ name: name('a', k) }));
  for (const c of res.changed) {
    const n = name('b', c.b);
    if (c.moved) out.push(say.moved({ name: n, d: Number(c.moved.toFixed(3)) }));
    if (c.reshaped) out.push(say.reshaped({ name: n }));
    for (const pr of c.props) out.push(say.prop({ name: n, field: label(pr.field), before: val(pr.before), after: val(pr.after) }));
  }
  return { lines: out.slice(0, max), total: out.length };
}
