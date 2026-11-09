/* SPDX-License-Identifier: Apache-2.0 */
/**
 * print3d.js — is a mesh ready for a 3D printer, and the files a slicer reads (0.5 SG.4, suggestion #531).
 * Import-free and DOM-free. Canonical in modelcraft/dev; PartCraft carries a byte-identical copy
 * (node tools/modelcraft-test/print3d-sync.mjs [--check]). Never edit the copy.
 *
 * Meshes here are printer meshes: millimetres, Z up (the bed is the XY plane), triangles wound counter-clockwise
 * seen from outside.
 *
 *   meshFromTriangles(tris)        [{p: [[x,y,z] ×3], color?: '#rrggbb'}] → {positions, indices, colors}
 *   weld(mesh, tol)                → {positions, indices, colors, degenerate}: corners within tol merged, triangles that
 *                                    collapse (two corners the same, or no area) dropped and counted
 *   printCheck(mesh, opts)         → the report below; opts {tol (mm, 1e-4), bed: [x, y, z] mm | null,
 *                                    overhang: degrees from vertical that print without support (45), maxTests (4e6)}
 *   stlBinary(mesh, header)        binary STL (triangles as given, normals from the winding)
 *   threeMF(mesh, {name, app})     3MF core: one object, millimetres, colours (when the mesh has them) as one
 *                                  basematerials group; a stored zip
 *   crc32(bytes), zipStored(files) the zip writer 3MF uses
 *
 * Report: {ok, triangles, vertices, shells, volume (mm³, null unless watertight), area (mm²), min, max, size,
 *   open, nonManifold, touching, flipped, inverted, selfIntersections, overlaps, degenerate, checked (false = the intersection
 *   test hit maxTests and stopped), overhangArea, bedArea, problems: [{kind, n, at: [[x,y,z] …≤ 20]}],
 *   warnings: [{kind, …}]}
 *   problems (a slicer may fail or print it wrong): empty · open (edges with one face: holes) · nonmanifold (edges with
 *     three or more faces) · flipped (neighbours facing opposite ways) · inverted (a closed shell inside out) ·
 *     selfintersect (a shell passing through itself)
 *   warnings (prints, but look): overlap (separate shells overlap: slicers merge them) · touch (edges where parts meet face
 *     to face, as many faces one way as the other) · tiny (under 1 mm:
 *     check the units) · bed (larger than the bed) · nobase (nothing lies flat on the bed) · overhang (needs support) ·
 *     degenerate (zero-area triangles left out) · unchecked (too big to check for self-intersection fully)
 */

// ---------------------------------------------------------------- building and welding

export function meshFromTriangles(tris) {
  const n = tris.length;
  const positions = new Float64Array(n * 9), indices = new Uint32Array(n * 3);
  let colors = null;
  for (let i = 0; i < n; i++) {
    const t = tris[i];
    for (let k = 0; k < 3; k++) {
      const p = t.p[k];
      positions[i * 9 + k * 3] = p[0]; positions[i * 9 + k * 3 + 1] = p[1]; positions[i * 9 + k * 3 + 2] = p[2];
      indices[i * 3 + k] = i * 3 + k;
    }
    if (t.color) { if (!colors) colors = new Array(n).fill(null); colors[i] = t.color; }
  }
  return { positions, indices, colors };
}

export function weld(mesh, tol = 1e-4) {
  const P = mesh.positions, I = mesh.indices, nIn = P.length / 3;
  // cells 4 × tol wide, hashed to numbers (a clash only costs a comparison); a corner looks in the next cell only
  // when it lies within tol of that side
  const cs = tol * 4, cell = new Map(), remap = new Int32Array(nIn), out = [];
  const hash = (x, y, z) => (Math.imul(x, 73856093) ^ Math.imul(y, 19349663) ^ Math.imul(z, 83492791)) | 0;
  let nv = 0;
  for (let i = 0; i < nIn; i++) {
    const x = P[i * 3], y = P[i * 3 + 1], z = P[i * 3 + 2];
    const fx = x / cs, fy = y / cs, fz = z / cs, cx = Math.floor(fx), cy = Math.floor(fy), cz = Math.floor(fz);
    const r = 0.25 + 1e-9;   // tol in cells
    const x0 = fx - cx < r ? -1 : 0, x1 = cx + 1 - fx < r ? 1 : 0, y0 = fy - cy < r ? -1 : 0, y1 = cy + 1 - fy < r ? 1 : 0, z0 = fz - cz < r ? -1 : 0, z1 = cz + 1 - fz < r ? 1 : 0;
    let found = -1;
    for (let dx = x0; dx <= x1 && found < 0; dx++) for (let dy = y0; dy <= y1 && found < 0; dy++) for (let dz = z0; dz <= z1 && found < 0; dz++) {
      const list = cell.get(hash(cx + dx, cy + dy, cz + dz));
      if (!list) continue;
      for (let k = 0; k < list.length; k++) {
        const j = list[k];
        if (Math.abs(out[j * 3] - x) <= tol && Math.abs(out[j * 3 + 1] - y) <= tol && Math.abs(out[j * 3 + 2] - z) <= tol) { found = j; break; }
      }
    }
    if (found < 0) {
      found = nv++;
      out.push(x, y, z);
      const h = hash(cx, cy, cz), list = cell.get(h);
      if (list) list.push(found); else cell.set(h, [found]);
    }
    remap[i] = found;
  }
  const positions = new Float64Array(out);
  const idx = [], cols = mesh.colors ? [] : null;
  let degenerate = 0;
  const area2 = tol * tol * 1e-2;
  for (let t = 0; t < I.length / 3; t++) {
    const a = remap[I[t * 3]], b = remap[I[t * 3 + 1]], c = remap[I[t * 3 + 2]];
    if (a === b || b === c || a === c) { degenerate++; continue; }
    const n = triNormal(positions, a, b, c);
    if (n[0] * n[0] + n[1] * n[1] + n[2] * n[2] <= area2 * area2) { degenerate++; continue; }
    idx.push(a, b, c);
    if (cols) cols.push(mesh.colors[t] || null);
  }
  return { positions, indices: new Uint32Array(idx), colors: cols && cols.some(Boolean) ? cols : null, degenerate };
}

function triNormal(P, a, b, c) {
  const ux = P[b * 3] - P[a * 3], uy = P[b * 3 + 1] - P[a * 3 + 1], uz = P[b * 3 + 2] - P[a * 3 + 2];
  const vx = P[c * 3] - P[a * 3], vy = P[c * 3 + 1] - P[a * 3 + 1], vz = P[c * 3 + 2] - P[a * 3 + 2];
  return [uy * vz - uz * vy, uz * vx - ux * vz, ux * vy - uy * vx];   // length = 2 × area
}

// ---------------------------------------------------------------- the check

export function printCheck(meshIn, { tol = 1e-4, bed = null, overhang = 45, maxTests = 4e6 } = {}) {
  const mesh = weld(meshIn, tol);
  const P = mesh.positions, I = mesh.indices, nt = I.length / 3, nv = P.length / 3;
  const rep = {
    ok: false, triangles: nt, vertices: nv, shells: 0, volume: null, area: 0, min: null, max: null, size: null,
    open: 0, nonManifold: 0, touching: 0, flipped: 0, inverted: 0, selfIntersections: 0, overlaps: 0, degenerate: mesh.degenerate,
    checked: true, overhangArea: 0, bedArea: 0, problems: [], warnings: [], mesh,
  };
  if (!nt) { rep.problems.push({ kind: 'empty', n: 0, at: [] }); return rep; }
  const pt = (v) => [P[v * 3], P[v * 3 + 1], P[v * 3 + 2]];
  const lo = [Infinity, Infinity, Infinity], hi = [-Infinity, -Infinity, -Infinity];
  for (let v = 0; v < nv; v++) for (let k = 0; k < 3; k++) { const x = P[v * 3 + k]; if (x < lo[k]) lo[k] = x; if (x > hi[k]) hi[k] = x; }
  rep.min = lo; rep.max = hi; rep.size = [hi[0] - lo[0], hi[1] - lo[1], hi[2] - lo[2]];

  // edges: key a*nv+b (a < b) → [uses a→b, uses b→a, first triangle]
  const edges = new Map();
  const ek = (a, b) => (a < b ? a * nv + b : b * nv + a);
  for (let t = 0; t < nt; t++) {
    for (let k = 0; k < 3; k++) {
      const a = I[t * 3 + k], b = I[t * 3 + (k + 1) % 3], key = ek(a, b);
      let e = edges.get(key);
      if (!e) { e = [0, 0, t, a, b]; edges.set(key, e); }
      e[a < b ? 0 : 1]++;
    }
  }
  // shells: triangles joined through their edges
  const parent = new Int32Array(nt);
  for (let t = 0; t < nt; t++) parent[t] = t;
  const find = (x) => { while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; };
  const join = (a, b) => { a = find(a); b = find(b); if (a !== b) parent[a] = b; };
  const at = { open: [], nonmanifold: [], flipped: [], touch: [] };
  const mid = (a, b) => { const p = pt(a), q = pt(b); return [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2, (p[2] + q[2]) / 2]; };
  const edgeTris = new Map();
  for (let t = 0; t < nt; t++) for (let k = 0; k < 3; k++) {
    const key = ek(I[t * 3 + k], I[t * 3 + (k + 1) % 3]);
    const l = edgeTris.get(key);
    if (l) l.push(t); else edgeTris.set(key, [t]);
  }
  const badShell = new Set();
  for (const [key, e] of edges) {
    const n = e[0] + e[1], ts = edgeTris.get(key);
    for (let i = 1; i < ts.length; i++) join(ts[0], ts[i]);
    if (n === 1) { rep.open++; if (at.open.length < 20) at.open.push(mid(e[3], e[4])); badShell.add(ts[0]); }
    else if (n > 2 && e[0] === e[1]) { rep.touching++; if (at.touch.length < 20) at.touch.push(mid(e[3], e[4])); }   // parts meeting face to face: as many faces one way as the other
    else if (n > 2) { rep.nonManifold++; if (at.nonmanifold.length < 20) at.nonmanifold.push(mid(e[3], e[4])); badShell.add(ts[0]); }
    else if (e[0] === 2 || e[1] === 2) { rep.flipped++; if (at.flipped.length < 20) at.flipped.push(mid(e[3], e[4])); badShell.add(ts[0]); }
  }
  const shellOf = new Int32Array(nt), roots = new Map();
  for (let t = 0; t < nt; t++) { const r = find(t); if (!roots.has(r)) roots.set(r, roots.size); shellOf[t] = roots.get(r); }
  rep.shells = roots.size;
  const broken = new Set([...badShell].map((t) => shellOf[t]));

  // volume and area per shell; overhangs; bed contact
  const vol = new Float64Array(rep.shells);
  const cosLimit = Math.cos((90 - overhang) * Math.PI / 180);   // a face whose normal points down more steeply than this needs support
  const zTol = Math.max(tol * 10, 1e-6 * Math.max(...rep.size, 1));
  for (let t = 0; t < nt; t++) {
    const a = I[t * 3], b = I[t * 3 + 1], c = I[t * 3 + 2];
    const n = triNormal(P, a, b, c), l = Math.hypot(n[0], n[1], n[2]), area = l / 2;
    rep.area += area;
    vol[shellOf[t]] += (P[a * 3] * (P[b * 3 + 1] * P[c * 3 + 2] - P[b * 3 + 2] * P[c * 3 + 1])
      - P[a * 3 + 1] * (P[b * 3] * P[c * 3 + 2] - P[b * 3 + 2] * P[c * 3])
      + P[a * 3 + 2] * (P[b * 3] * P[c * 3 + 1] - P[b * 3 + 1] * P[c * 3])) / 6;
    const nz = l ? n[2] / l : 0;
    const onBed = Math.abs(P[a * 3 + 2] - lo[2]) <= zTol && Math.abs(P[b * 3 + 2] - lo[2]) <= zTol && Math.abs(P[c * 3 + 2] - lo[2]) <= zTol;
    if (onBed && nz < -0.999) rep.bedArea += area;
    else if (nz < -cosLimit) rep.overhangArea += area;
  }
  // a closed shell with negative volume is inside out, unless it is a hollow inside another shell (then it is right)
  const inv = [];
  let tested = 0;
  for (let s = 0; s < rep.shells; s++) {
    if (broken.has(s) || vol[s] >= 0) continue;
    const p = shellPoint(s);
    if (tested++ < 200 && p && insideOther(p, s)) continue;
    rep.inverted++;
    if (inv.length < 20) inv.push(p);
  }
  function shellPoint(s) { for (let t = 0; t < nt; t++) if (shellOf[t] === s) return pt(I[t * 3]); return null; }
  function insideOther(p, s) {
    // a ray from p, a little off every axis, crossing the other shells an odd number of times
    const d = [0.000123, 0.000457, 1], hits = [];
    for (let t = 0; t < nt; t++) {
      if (shellOf[t] === s) continue;
      const h = rayHit(p, d, pt(I[t * 3]), pt(I[t * 3 + 1]), pt(I[t * 3 + 2]));
      if (h > 1e-9) hits.push(h);
    }
    return hits.length % 2 === 1;
  }

  // self-intersections: a uniform grid over the triangles' boxes; pairs that share a corner are neighbours, not tested
  const si = selfIntersections(P, I, nt, shellOf, rep.size, maxTests);
  rep.selfIntersections = si.same; rep.overlaps = si.other; rep.checked = si.checked;

  if (rep.open) rep.problems.push({ kind: 'open', n: rep.open, at: at.open });
  if (rep.nonManifold) rep.problems.push({ kind: 'nonmanifold', n: rep.nonManifold, at: at.nonmanifold });
  if (rep.flipped) rep.problems.push({ kind: 'flipped', n: rep.flipped, at: at.flipped });
  if (rep.inverted) rep.problems.push({ kind: 'inverted', n: rep.inverted, at: inv });
  if (rep.selfIntersections) rep.problems.push({ kind: 'selfintersect', n: rep.selfIntersections, at: si.atSame });
  rep.ok = rep.problems.length === 0;
  if (rep.ok) { let v = 0; for (let s = 0; s < rep.shells; s++) v += vol[s]; rep.volume = v; }   // hollows subtract

  if (rep.overlaps) rep.warnings.push({ kind: 'overlap', n: rep.overlaps, at: si.atOther });
  if (rep.touching) rep.warnings.push({ kind: 'touch', n: rep.touching, at: at.touch });
  if (Math.max(...rep.size) < 1) rep.warnings.push({ kind: 'tiny', size: rep.size });
  if (Array.isArray(bed) && bed.length === 3) {
    const fit = (s, b) => s[0] <= b[0] + 1e-9 && s[1] <= b[1] + 1e-9 && s[2] <= b[2] + 1e-9;
    if (!fit(rep.size, bed) && !fit([rep.size[1], rep.size[0], rep.size[2]], bed)) rep.warnings.push({ kind: 'bed', size: rep.size, bed });
  }
  if (rep.bedArea <= 0) rep.warnings.push({ kind: 'nobase' });
  if (rep.overhangArea > 0.01 * rep.area) rep.warnings.push({ kind: 'overhang', area: rep.overhangArea, share: rep.overhangArea / rep.area, angle: overhang });
  if (rep.degenerate) rep.warnings.push({ kind: 'degenerate', n: rep.degenerate });
  if (!rep.checked) rep.warnings.push({ kind: 'unchecked' });
  return rep;
}

function selfIntersections(P, I, nt, shellOf, size, maxTests) {
  const res = { same: 0, other: 0, atSame: [], atOther: [], checked: true };
  const diag = Math.hypot(size[0], size[1], size[2]) || 1, eps = diag * 1e-9;
  const box = new Float64Array(nt * 6);
  let ext = 0;
  for (let t = 0; t < nt; t++) {
    for (let k = 0; k < 3; k++) {
      const a = P[I[t * 3] * 3 + k], b = P[I[t * 3 + 1] * 3 + k], c = P[I[t * 3 + 2] * 3 + k];
      box[t * 6 + k] = Math.min(a, b, c) - eps; box[t * 6 + 3 + k] = Math.max(a, b, c) + eps;
      ext += box[t * 6 + 3 + k] - box[t * 6 + k];
    }
  }
  // cell size about twice the mean triangle extent, no more than ~2M cells
  let cs = Math.max((ext / (nt * 3)) * 2, diag / 1e3);
  const cellsOf = (s) => Math.max(1, Math.ceil(s / cs));
  while (cellsOf(size[0] || cs) * cellsOf(size[1] || cs) * cellsOf(size[2] || cs) > 2e6) cs *= 1.5;
  const o = [box[0], box[1], box[2]];
  for (let t = 0; t < nt; t++) for (let k = 0; k < 3; k++) o[k] = Math.min(o[k], box[t * 6 + k]);
  const nx = cellsOf(size[0] + 4 * eps), ny = cellsOf(size[1] + 4 * eps), nz = cellsOf(size[2] + 4 * eps);
  const ci = (v, k) => Math.max(0, Math.min([nx, ny, nz][k] - 1, Math.floor((v - o[k]) / cs)));
  const grid = new Map(), big = [], isBig = new Uint8Array(nt);
  for (let t = 0; t < nt; t++) {
    const x0 = ci(box[t * 6], 0), x1 = ci(box[t * 6 + 3], 0), y0 = ci(box[t * 6 + 1], 1), y1 = ci(box[t * 6 + 4], 1), z0 = ci(box[t * 6 + 2], 2), z1 = ci(box[t * 6 + 5], 2);
    if ((x1 - x0 + 1) * (y1 - y0 + 1) * (z1 - z0 + 1) > 512) { big.push(t); isBig[t] = 1; continue; }
    for (let x = x0; x <= x1; x++) for (let y = y0; y <= y1; y++) for (let z = z0; z <= z1; z++) {
      const k = (x * ny + y) * nz + z, l = grid.get(k);
      if (l) l.push(t); else grid.set(k, [t]);
    }
  }
  let tests = 0;
  const overlapBox = (a, b) => box[a * 6] <= box[b * 6 + 3] && box[b * 6] <= box[a * 6 + 3] && box[a * 6 + 1] <= box[b * 6 + 4] && box[b * 6 + 1] <= box[a * 6 + 4] && box[a * 6 + 2] <= box[b * 6 + 5] && box[b * 6 + 2] <= box[a * 6 + 5];
  const shares = (a, b) => { for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) if (I[a * 3 + i] === I[b * 3 + j]) return true; return false; };
  const V = (t, k) => [P[I[t * 3 + k] * 3], P[I[t * 3 + k] * 3 + 1], P[I[t * 3 + k] * 3 + 2]];
  const test = (a, b) => {
    if (!overlapBox(a, b) || shares(a, b)) return;
    if (++tests > maxTests) { res.checked = false; return; }
    if (!triTri(V(a, 0), V(a, 1), V(a, 2), V(b, 0), V(b, 1), V(b, 2), eps * 10)) return;
    const p = V(a, 0);
    if (shellOf[a] === shellOf[b]) { res.same++; if (res.atSame.length < 20) res.atSame.push(p); }
    else { res.other++; if (res.atOther.length < 20) res.atOther.push(p); }
  };
  for (const [k, l] of grid) {
    if (!res.checked) break;
    const z = k % nz, y = ((k - z) / nz) % ny, x = (k - z - y * nz) / (nz * ny);
    for (let i = 0; i < l.length && res.checked; i++) for (let j = i + 1; j < l.length; j++) {
      const a = l[i], b = l[j];
      // test each pair once: in the cell holding the low corner of the two boxes' overlap
      if (ci(Math.max(box[a * 6], box[b * 6]), 0) !== x || ci(Math.max(box[a * 6 + 1], box[b * 6 + 1]), 1) !== y || ci(Math.max(box[a * 6 + 2], box[b * 6 + 2]), 2) !== z) continue;
      test(a, b);
    }
  }
  for (const a of big) for (let b = 0; b < nt && res.checked; b++) if (b !== a && (!isBig[b] || b > a)) test(a, b);
  return res;
}

const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
/** Möller–Trumbore: distance along d where the ray from o meets the triangle, or -1. */
function rayHit(o, d, a, b, c) {
  const e1 = sub(b, a), e2 = sub(c, a), h = cross(d, e2), det = dot(e1, h);
  if (Math.abs(det) < 1e-18) return -1;
  const f = 1 / det, s = sub(o, a), u = f * dot(s, h);
  if (u < 0 || u > 1) return -1;
  const q = cross(s, e1), v = f * dot(d, q);
  if (v < 0 || u + v > 1) return -1;
  return f * dot(e2, q);
}
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];

/** Do two triangles cross (more than touch)? Möller's interval test; coplanar pairs in 2D. */
export function triTri(a0, a1, a2, b0, b1, b2, eps = 1e-9) {
  const nB = cross(sub(b1, b0), sub(b2, b0)), lB = Math.hypot(...nB);
  const nA = cross(sub(a1, a0), sub(a2, a0)), lA = Math.hypot(...nA);
  if (!lA || !lB) return false;
  const uB = nB.map((c) => c / lB), uA = nA.map((c) => c / lA);
  const snap = (d) => (Math.abs(d) <= eps ? 0 : d);
  const dA = [a0, a1, a2].map((p) => snap(dot(uB, sub(p, b0))));
  if ((dA[0] > 0 && dA[1] > 0 && dA[2] > 0) || (dA[0] < 0 && dA[1] < 0 && dA[2] < 0)) return false;
  const dB = [b0, b1, b2].map((p) => snap(dot(uA, sub(p, a0))));
  if ((dB[0] > 0 && dB[1] > 0 && dB[2] > 0) || (dB[0] < 0 && dB[1] < 0 && dB[2] < 0)) return false;
  if (!dA[0] && !dA[1] && !dA[2]) return coplanar([a0, a1, a2], [b0, b1, b2], uA, eps);
  const D = cross(uA, uB);
  const ax = Math.abs(D[0]) > Math.abs(D[1]) ? (Math.abs(D[0]) > Math.abs(D[2]) ? 0 : 2) : (Math.abs(D[1]) > Math.abs(D[2]) ? 1 : 2);
  const iv = (pts, d) => {
    const pr = pts.map((p) => p[ax]), xs = [];
    for (let i = 0; i < 3; i++) {
      const j = (i + 1) % 3;
      if (d[i] === 0) xs.push(pr[i]);
      if (d[i] * d[j] < 0) xs.push(pr[i] + (pr[j] - pr[i]) * d[i] / (d[i] - d[j]));
    }
    return xs.length ? [Math.min(...xs), Math.max(...xs)] : null;
  };
  const A = iv([a0, a1, a2], dA), B = iv([b0, b1, b2], dB);
  if (!A || !B) return false;
  return Math.max(A[0], B[0]) < Math.min(A[1], B[1]) - eps;
}

function coplanar(A, B, n, eps) {
  const ax = Math.abs(n[0]) > Math.abs(n[1]) ? (Math.abs(n[0]) > Math.abs(n[2]) ? 0 : 2) : (Math.abs(n[1]) > Math.abs(n[2]) ? 1 : 2);
  const [i, j] = ax === 0 ? [1, 2] : ax === 1 ? [2, 0] : [0, 1];
  const a = A.map((p) => [p[i], p[j]]), b = B.map((p) => [p[i], p[j]]);
  const orient = (p, q, r) => (q[0] - p[0]) * (r[1] - p[1]) - (q[1] - p[1]) * (r[0] - p[0]);
  const e2 = eps * eps;
  const cross2 = (p, q, r, s) => {
    const d1 = orient(r, s, p), d2 = orient(r, s, q), d3 = orient(p, q, r), d4 = orient(p, q, s);
    return ((d1 > e2 && d2 < -e2) || (d1 < -e2 && d2 > e2)) && ((d3 > e2 && d4 < -e2) || (d3 < -e2 && d4 > e2));
  };
  for (let k = 0; k < 3; k++) for (let l = 0; l < 3; l++) if (cross2(a[k], a[(k + 1) % 3], b[l], b[(l + 1) % 3])) return true;
  const inside = (p, t) => {
    const s = Math.sign(orient(t[0], t[1], t[2]));
    return s * orient(t[0], t[1], p) > e2 && s * orient(t[1], t[2], p) > e2 && s * orient(t[2], t[0], p) > e2;
  };
  const c = (t) => [(t[0][0] + t[1][0] + t[2][0]) / 3, (t[0][1] + t[1][1] + t[2][1]) / 3];
  return inside(c(a), b) || inside(c(b), a);
}

// ---------------------------------------------------------------- files

export function stlBinary(mesh, header = 'binary STL, millimeters') {
  const P = mesh.positions, I = mesh.indices, nt = I.length / 3;
  const out = new Uint8Array(84 + nt * 50), dv = new DataView(out.buffer);
  const h = String(header).slice(0, 79);
  for (let i = 0; i < h.length; i++) out[i] = h.charCodeAt(i) & 0x7f;
  dv.setUint32(80, nt, true);
  let o = 84;
  for (let t = 0; t < nt; t++) {
    const a = I[t * 3], b = I[t * 3 + 1], c = I[t * 3 + 2];
    const n = triNormal(P, a, b, c), l = Math.hypot(n[0], n[1], n[2]) || 1;
    for (const v of [n[0] / l, n[1] / l, n[2] / l]) { dv.setFloat32(o, v, true); o += 4; }
    for (const v of [a, b, c]) for (let k = 0; k < 3; k++) { dv.setFloat32(o, P[v * 3 + k], true); o += 4; }
    o += 2;
  }
  return out;
}

const CRC_TABLE = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; }
  return t;
})();
export function crc32(bytes) {
  let c = 0xffffffff;
  for (let i = 0; i < bytes.length; i++) c = CRC_TABLE[(c ^ bytes[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

/** files: [{name, data: Uint8Array | string}] → a zip with every entry stored (no compression), UTF-8 names. */
export function zipStored(files) {
  const enc = new TextEncoder(), parts = [], central = [];
  let offset = 0;
  for (const f of files) {
    const name = enc.encode(f.name), data = typeof f.data === 'string' ? enc.encode(f.data) : f.data, crc = crc32(data);
    const lh = new DataView(new ArrayBuffer(30));
    lh.setUint32(0, 0x04034b50, true); lh.setUint16(4, 20, true); lh.setUint16(6, 0x0800, true); lh.setUint16(12, 0x21, true);
    lh.setUint32(14, crc, true); lh.setUint32(18, data.length, true); lh.setUint32(22, data.length, true); lh.setUint16(26, name.length, true);
    parts.push(new Uint8Array(lh.buffer), name, data);
    const ch = new DataView(new ArrayBuffer(46));
    ch.setUint32(0, 0x02014b50, true); ch.setUint16(4, 20, true); ch.setUint16(6, 20, true); ch.setUint16(8, 0x0800, true); ch.setUint16(14, 0x21, true);
    ch.setUint32(16, crc, true); ch.setUint32(20, data.length, true); ch.setUint32(24, data.length, true); ch.setUint16(28, name.length, true);
    ch.setUint32(42, offset, true);
    central.push(new Uint8Array(ch.buffer), name);
    offset += 30 + name.length + data.length;
  }
  const csize = central.reduce((s, b) => s + b.length, 0);
  const end = new DataView(new ArrayBuffer(22));
  end.setUint32(0, 0x06054b50, true); end.setUint16(8, files.length, true); end.setUint16(10, files.length, true);
  end.setUint32(12, csize, true); end.setUint32(16, offset, true);
  const all = [...parts, ...central, new Uint8Array(end.buffer)];
  const out = new Uint8Array(all.reduce((s, b) => s + b.length, 0));
  let o = 0;
  for (const b of all) { out.set(b, o); o += b.length; }
  return out;
}

const xmlEsc = (s) => String(s).replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g, '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const num = (v) => { const r = Math.abs(v) < 1e-12 ? 0 : v; return Number(r.toPrecision(10)).toString(); };

export function threeMF(mesh, { name = 'model', app = 'CadCraft' } = {}) {
  const P = mesh.positions, I = mesh.indices, nv = P.length / 3, nt = I.length / 3;
  const cols = Array.isArray(mesh.colors) && mesh.colors.some(Boolean) ? mesh.colors : null;
  const palette = [], pidx = new Map();
  if (cols) for (const c of cols) { const k = /^#[0-9a-f]{6}$/i.test(c || '') ? c.toLowerCase() : '#c8c8c8'; if (!pidx.has(k)) { pidx.set(k, palette.length); palette.push(k); } }
  const out = [];
  out.push('<?xml version="1.0" encoding="UTF-8"?>\n<model unit="millimeter" xml:lang="en-US" xmlns="http://schemas.microsoft.com/3dmanufacturing/core/2015/02">\n');
  out.push(` <metadata name="Title">${xmlEsc(name)}</metadata>\n <metadata name="Application">${xmlEsc(app)}</metadata>\n <resources>\n`);
  if (palette.length) {
    out.push('  <basematerials id="1">\n');
    for (const c of palette) out.push(`   <base name="${c}" displaycolor="${c.toUpperCase()}FF"/>\n`);
    out.push('  </basematerials>\n');
  }
  out.push(`  <object id="2" type="model" name="${xmlEsc(name)}"${palette.length ? ' pid="1" pindex="0"' : ''}>\n   <mesh>\n    <vertices>\n`);
  for (let i = 0; i < nv; i++) out.push(`     <vertex x="${num(P[i * 3])}" y="${num(P[i * 3 + 1])}" z="${num(P[i * 3 + 2])}"/>\n`);
  out.push('    </vertices>\n    <triangles>\n');
  for (let t = 0; t < nt; t++) {
    const pp = cols ? ` pid="1" p1="${pidx.get(/^#[0-9a-f]{6}$/i.test(cols[t] || '') ? cols[t].toLowerCase() : '#c8c8c8')}"` : '';
    out.push(`     <triangle v1="${I[t * 3]}" v2="${I[t * 3 + 1]}" v3="${I[t * 3 + 2]}"${pp}/>\n`);
  }
  out.push('    </triangles>\n   </mesh>\n  </object>\n </resources>\n <build>\n  <item objectid="2"/>\n </build>\n</model>\n');
  const types = '<?xml version="1.0" encoding="UTF-8"?>\n<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="model" ContentType="application/vnd.ms-package.3dmanufacturing-3dmodel+xml"/></Types>\n';
  const rels = '<?xml version="1.0" encoding="UTF-8"?>\n<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Target="/3D/3dmodel.model" Id="rel0" Type="http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel"/></Relationships>\n';
  return zipStored([{ name: '[Content_Types].xml', data: types }, { name: '_rels/.rels', data: rels }, { name: '3D/3dmodel.model', data: out.join('') }]);
}
