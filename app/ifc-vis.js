/* SPDX-License-Identifier: Apache-2.0 */
/**
 * ifc-vis.js — which IFC elements are drawn, and how: hide, isolate, see-through others (0.4 B12). No DOM and no
 * three.js: bin/test-bimcraft.mjs runs it in Node; viewer3d.js turns its index arrays into draw ranges.
 *
 * Every element is a KEY (ifc-model.js: keyBase + expressID). A batch (one merged mesh) lists its elements' runs
 * (`batch.elems`): triangles [t0, t0 + tn) and vertices [v0, v0 + vn). Hiding never touches the geometry: each batch's
 * index buffer is rebuilt with the shown elements' triangles first (drawn solid) and the see-through ones after them
 * (drawn with a faint material), hidden ones left out. With nothing hidden the original buffer is used as it is.
 *
 *   const vis = new Visibility();
 *   vis.hide([k1, k2]);  vis.isolate([k3]);  vis.isolate([k3], { ghost: true });  vis.showAll();
 *   vis.state(key)          → HIDDEN | SOLID | GHOST
 *   batchIndex(batch, vis)  → { index, triIds, nSolid, nGhost }  (triangle counts; triIds in the new order)
 *   batchEdges(batch)       → { positions, ids, s0, sn }          element outlines, computed per element
 *   edgeIndex(edges, vis)   → { index, nSolid, nGhost }           (segment counts)
 *   boundsOf(batches, keys) → { min: [x,y,z], max: [x,y,z] } | null
 */

export const HIDDEN = 0, SOLID = 1, GHOST = 2;

export class Visibility {
  constructor() {
    this.hidden = new Set();     // hidden by the user (Hide, the model tree)
    this.isolated = null;        // null = no isolation; else the only elements shown solid
    this.ghost = false;          // with isolation: the others are drawn see-through instead of hidden
    this.version = 0;            // bumps on every change (callers cache by it)
  }

  /** Nothing hidden, nothing isolated. */
  get plain() { return this.hidden.size === 0 && this.isolated === null; }

  state(key) {
    if (this.hidden.has(key)) return HIDDEN;
    if (this.isolated === null || this.isolated.has(key)) return SOLID;
    return this.ghost ? GHOST : HIDDEN;
  }

  hide(keys) { let n = 0; for (const k of keys) if (!this.hidden.has(k)) { this.hidden.add(k); n++; } if (n) this.version++; return n; }
  unhide(keys) { let n = 0; for (const k of keys) if (this.hidden.delete(k)) n++; if (n) this.version++; return n; }
  /** Show only `keys` (and keep showing them even if they were hidden). ghost: the rest see-through, not hidden. */
  isolate(keys, { ghost = false } = {}) {
    this.isolated = new Set(keys);
    for (const k of this.isolated) this.hidden.delete(k);
    this.ghost = !!ghost;
    this.version++;
  }
  showAll() { this.hidden.clear(); this.isolated = null; this.ghost = false; this.version++; }

  /** Plain data, to carry the state over a rebuild (same keys) or into a test. */
  toJSON() { return { hidden: [...this.hidden], isolated: this.isolated ? [...this.isolated] : null, ghost: this.ghost }; }
  load(s) {
    this.hidden = new Set(s?.hidden || []);
    this.isolated = s?.isolated ? new Set(s.isolated) : null;
    this.ghost = !!s?.ghost;
    this.version++;
  }
  /** Forget keys that are no longer in the model (after a delete); `keep(key)` → true when it still is. */
  prune(keep) {
    let n = 0;
    for (const k of [...this.hidden]) if (!keep(k)) { this.hidden.delete(k); n++; }
    if (this.isolated) for (const k of [...this.isolated]) if (!keep(k)) { this.isolated.delete(k); n++; }
    if (n) this.version++;
    return n;
  }
}

/** The batch's triangles in draw order: solid first, see-through after, hidden left out. */
export function batchIndex(batch, vis) {
  const all = batch.indices.length / 3;
  if (!vis || vis.plain) return { index: batch.indices, triIds: batch.triIds, nSolid: all, nGhost: 0 };
  const E = batch.elems, src = batch.indices;
  let nSolid = 0, nGhost = 0;
  const st = new Uint8Array(E.ids.length);
  for (let r = 0; r < E.ids.length; r++) {
    st[r] = vis.state(E.ids[r]);
    if (st[r] === SOLID) nSolid += E.tn[r]; else if (st[r] === GHOST) nGhost += E.tn[r];
  }
  if (nSolid === all) return { index: src, triIds: batch.triIds, nSolid: all, nGhost: 0 };
  const index = new Uint32Array((nSolid + nGhost) * 3), triIds = new Uint32Array(nSolid + nGhost);
  let s = 0, g = nSolid;
  for (let r = 0; r < E.ids.length; r++) {
    if (st[r] === HIDDEN) continue;
    const t0 = E.t0[r], tn = E.tn[r];
    const at = st[r] === SOLID ? s : g;
    index.set(src.subarray(t0 * 3, (t0 + tn) * 3), at * 3);
    triIds.fill(E.ids[r], at, at + tn);
    if (st[r] === SOLID) s += tn; else g += tn;
  }
  return { index, triIds, nSolid, nGhost };
}

/**
 * Edge lines of each element on its own (an edge where the faces meet at more than `angle` degrees, or a free edge):
 * the drafting look, and an element's edges hide with it. Vertices are matched by position (0.1 mm in metres), as
 * three.js EdgesGeometry does, but never across two elements, so element outlines stay. → segments grouped by element.
 */
export function batchEdges(batch, angle = 30) {
  const P = batch.positions, I = batch.indices, E = batch.elems;
  const out = [], ids = [], s0 = [], sn = [];
  for (let r = 0; r < E.ids.length; r++) {
    const start = out.length / 6;
    runEdges(P, I, E.t0[r], E.tn[r], angle, out);
    const count = out.length / 6 - start;
    if (count) { ids.push(E.ids[r]); s0.push(start); sn.push(count); }
  }
  return { positions: Float32Array.from(out), ids: Uint32Array.from(ids), s0: Uint32Array.from(s0), sn: Uint32Array.from(sn) };
}

/** One element's feature edges (triangles t0 … t0 + tn of an indexed batch): appended to `out` as x y z x y z. */
export function runEdges(P, I, t0, tn, angle = 30, out = []) {
  const cos = Math.cos(angle * Math.PI / 180), q = 1e4;
  const n = [0, 0, 0];
  {
    const seen = new Map();   // "a|b" (quantised vertices, sorted) → [i0, i1, nx, ny, nz]
    for (let t = t0, tEnd = t0 + tn; t < tEnd; t++) {
      const a = I[t * 3] * 3, b = I[t * 3 + 1] * 3, c = I[t * 3 + 2] * 3;
      const ux = P[b] - P[a], uy = P[b + 1] - P[a + 1], uz = P[b + 2] - P[a + 2];
      const vx = P[c] - P[a], vy = P[c + 1] - P[a + 1], vz = P[c + 2] - P[a + 2];
      n[0] = uy * vz - uz * vy; n[1] = uz * vx - ux * vz; n[2] = ux * vy - uy * vx;
      const l = Math.hypot(n[0], n[1], n[2]);
      if (!(l > 0)) continue;   // a degenerate triangle has no normal and no edges of its own
      n[0] /= l; n[1] /= l; n[2] /= l;
      const v = [a, b, c], h = v.map((o) => Math.round(P[o] * q) + ',' + Math.round(P[o + 1] * q) + ',' + Math.round(P[o + 2] * q));
      for (let k = 0; k < 3; k++) {
        const i0 = v[k], i1 = v[(k + 1) % 3], h0 = h[k], h1 = h[(k + 1) % 3];
        if (h0 === h1) continue;
        const key = h0 < h1 ? h0 + '|' + h1 : h1 + '|' + h0;
        const other = seen.get(key);
        if (!other) { seen.set(key, [i0, i1, n[0], n[1], n[2]]); continue; }
        seen.delete(key);
        if (other[2] * n[0] + other[3] * n[1] + other[4] * n[2] <= cos) out.push(P[i0], P[i0 + 1], P[i0 + 2], P[i1], P[i1 + 1], P[i1 + 2]);
      }
    }
    for (const [i0, i1] of seen.values()) out.push(P[i0], P[i0 + 1], P[i0 + 2], P[i1], P[i1 + 1], P[i1 + 2]);
  }
  return out;
}

/** Line-segment vertex pairs in draw order (solid first, see-through after), like batchIndex. */
export function edgeIndex(edges, vis) {
  const all = edges.positions.length / 6;
  let nSolid = 0, nGhost = 0;
  const st = new Uint8Array(edges.ids.length);
  for (let r = 0; r < edges.ids.length; r++) {
    st[r] = vis ? vis.state(edges.ids[r]) : SOLID;
    if (st[r] === SOLID) nSolid += edges.sn[r]; else if (st[r] === GHOST) nGhost += edges.sn[r];
  }
  const index = new Uint32Array((nSolid + nGhost) * 2);
  let s = 0, g = nSolid;
  for (let r = 0; r < edges.ids.length; r++) {
    if (st[r] === HIDDEN) continue;
    const at = st[r] === SOLID ? s : g;
    for (let j = 0; j < edges.sn[r]; j++) { const seg = edges.s0[r] + j; index[(at + j) * 2] = seg * 2; index[(at + j) * 2 + 1] = seg * 2 + 1; }
    if (st[r] === SOLID) s += edges.sn[r]; else g += edges.sn[r];
  }
  return { index, nSolid, nGhost, all };
}

/** Bounding box of the elements' vertices over every batch (viewer space), or null when none has geometry. */
export function boundsOf(batches, keys) {
  const want = keys instanceof Set ? keys : new Set(keys);
  const min = [Infinity, Infinity, Infinity], max = [-Infinity, -Infinity, -Infinity];
  let any = false;
  for (const b of batches) {
    const E = b.elems, P = b.positions;
    for (let r = 0; r < E.ids.length; r++) {
      if (!want.has(E.ids[r])) continue;
      for (let v = E.v0[r], vEnd = E.v0[r] + E.vn[r]; v < vEnd; v++) {
        for (let k = 0; k < 3; k++) { const x = P[v * 3 + k]; if (x < min[k]) min[k] = x; if (x > max[k]) max[k] = x; }
      }
      any = true;
    }
  }
  return any ? { min, max } : null;
}

/** Bounding box of each element on its own: Map key → { min, max } (viewer space) for the keys that have geometry, one pass (0.8 AC.8). */
export function boundsMapOf(batches, keys) {
  const want = keys instanceof Set ? keys : new Set(keys);
  const out = new Map();
  for (const b of batches) {
    const E = b.elems, P = b.positions;
    for (let r = 0; r < E.ids.length; r++) {
      const key = E.ids[r];
      if (!want.has(key)) continue;
      let bb = out.get(key);
      if (!bb) { bb = { min: [Infinity, Infinity, Infinity], max: [-Infinity, -Infinity, -Infinity] }; out.set(key, bb); }
      for (let v = E.v0[r], vEnd = E.v0[r] + E.vn[r]; v < vEnd; v++) {
        for (let k = 0; k < 3; k++) { const x = P[v * 3 + k]; if (x < bb.min[k]) bb.min[k] = x; if (x > bb.max[k]) bb.max[k] = x; }
      }
    }
  }
  return out;
}

/** Every element key with geometry in these batches. */
export function keysOf(batches) {
  const out = new Set();
  for (const b of batches) for (const k of b.elems.ids) out.add(k);
  return out;
}
