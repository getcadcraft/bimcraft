/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — the CSV column names are a file format, not a screen */
/**
 * scan-progress.js — a scan against the model, element by element, and against the 4D schedule (0.8 EG.39, the BimCraft half; session
 * bim-analysis_PART_4). No DOM, no strings (the panel words the codes), no imports. Tested by tools/bimcraft-test/scan-progress-test.mjs.
 *
 * What it does. The scan is points in the same space as the model (the viewer's: the caller brings both there). Each element is its
 * axis-aligned box. Surfaces are what a scanner sees, so an element is judged by its box SURFACE:
 *   - the six faces are cut into cells of about `cell` (default 0.2 m, at most 24 × 24 a face);
 *   - a cell is COVERED when a point lies within `tol` (default 0.05 m) of the face plane and inside the cell;
 *   - coverage = the best face's covered share, among faces with at least a quarter of the largest face's area (a scan from inside sees one side of a wall, so the best face counts, not the average; thin end faces are left out).
 *   state: built (coverage ≥ builtMin, default 0.4), partly (≥ partlyMin, default 0.1), missing (below that, but the scan reaches the
 *   element: points within `reach`, default 1.5 m, of its box), unseen (no scan point within reach: the scan never went there, so nothing is said).
 *   deviation: for a built or partly element, the points within `band` (default 5 × tol) of the box surface give the mean signed offset
 *   (+ outside the box) and the RMS; a mean offset within tol is "ok", within 3 × tol "near", beyond that "off". It only sees offsets
 *   under `band`: an element built further from its place than that reads as missing.
 *   percent complete = built ÷ (built + partly + missing) by count, and by volume; partly elements are counted in the middle, not as built.
 *   4D: `expected` (a Map key → 'built' | 'progress' | 'waiting', ifc-4d.js statusAt) is compared with what the scan saw:
 *   behind = expected built but missing or partly; ahead = expected waiting but built; the elements the schedule does not name are not compared.
 *
 * It is a comparison of boxes with points, not a survey: an element whose box is much larger than its body (a diagonal brace, a curved wall) can
 * read as partly or missing though it stands; the numbers are tolerance-bound; a person looks at the list. Not a quantity or a payment basis.
 *
 *   scanProgress({ pos, n, matrix?, boxes: Map key → { min, max }, tol, cell, band, reach, builtMin, partlyMin, expected?, max? })
 *     → { ok: true, tol, rows: [{ key, state, coverage, mean, rms, dev: 'ok'|'near'|'off'|null, points, volume, plan?: 'built'|'progress'|'waiting', flag?: 'behind'|'ahead' }],
 *         totals: { elements, built, partly, missing, unseen, ok, near, off, pct, pctVolume }, plan?: { scheduled, expectedBuilt, scanned, builtOfExpected, behind, ahead, pctExpected, pctSeen },
 *         points: { n, used, outside } } | { ok: false, reason: 'nopoints' | 'noboxes' | 'toolarge' }
 *   Units are the caller's: pass tol, cell, band, reach in the same units as the points and boxes (the viewer's are metres).
 *   matrix = 16 numbers, column-major (three.js `elements`): the cloud's positions → that space; omit when they already are.
 */

const DEF = { tol: 0.05, cell: 0.2, builtMin: 0.4, partlyMin: 0.1 };
const MAX_DIM = 24;

export function scanProgress(o) {
  const { pos, n: n0, boxes } = o;
  const tol = o.tol > 0 ? o.tol : DEF.tol, cell = o.cell > 0 ? o.cell : DEF.cell, band = o.band > 0 ? o.band : 5 * tol, reach = o.reach > 0 ? o.reach : 1.5;
  const builtMin = o.builtMin ?? DEF.builtMin, partlyMin = o.partlyMin ?? DEF.partlyMin;
  const n = Math.min(n0 || 0, pos ? Math.floor(pos.length / 3) : 0);
  if (!n) return { ok: false, reason: 'nopoints' };
  if (!boxes || !boxes.size) return { ok: false, reason: 'noboxes' };
  const M = o.matrix || null;
  // 1. points into the model's space, bucketed in a coarse grid (cell G) so an element only meets the points near it
  const P = new Float32Array(n * 3);
  const lo = [Infinity, Infinity, Infinity], hi = [-Infinity, -Infinity, -Infinity];
  for (let i = 0; i < n; i++) {
    let x = pos[i * 3], y = pos[i * 3 + 1], z = pos[i * 3 + 2];
    if (M) { const X = M[0] * x + M[4] * y + M[8] * z + M[12], Y = M[1] * x + M[5] * y + M[9] * z + M[13], Z = M[2] * x + M[6] * y + M[10] * z + M[14]; x = X; y = Y; z = Z; }
    P[i * 3] = x; P[i * 3 + 1] = y; P[i * 3 + 2] = z;
    if (x < lo[0]) lo[0] = x; if (x > hi[0]) hi[0] = x; if (y < lo[1]) lo[1] = y; if (y > hi[1]) hi[1] = y; if (z < lo[2]) lo[2] = z; if (z > hi[2]) hi[2] = z;
  }
  if (!lo.every(Number.isFinite)) return { ok: false, reason: 'nopoints' };
  let G = Math.max(band * 2, cell, 0.25);
  const dimOf = (g) => [0, 1, 2].map((k) => Math.max(1, Math.ceil((hi[k] - lo[k]) / g) + 1));
  let dim = dimOf(G);
  while (dim[0] * dim[1] * dim[2] > 4e6) { G *= 1.5; dim = dimOf(G); if (G > 1e6) return { ok: false, reason: 'toolarge' }; }
  const cellOf = (x, y, z) => ((Math.floor((z - lo[2]) / G) * dim[1] + Math.floor((y - lo[1]) / G)) * dim[0] + Math.floor((x - lo[0]) / G));
  const counts = new Int32Array(dim[0] * dim[1] * dim[2] + 1);
  const ids = new Int32Array(n);
  for (let i = 0; i < n; i++) { const c = cellOf(P[i * 3], P[i * 3 + 1], P[i * 3 + 2]); ids[i] = c; counts[c + 1]++; }
  for (let c = 0; c < counts.length - 1; c++) counts[c + 1] += counts[c];
  const order = new Int32Array(n), fill = counts.slice(0, -1);
  for (let i = 0; i < n; i++) order[fill[ids[i]]++] = i;
  const near = (min, max, r, fn) => {   // every point whose cell meets the box grown by r
    const a = [0, 1, 2].map((k) => Math.max(0, Math.floor((min[k] - r - lo[k]) / G))), b = [0, 1, 2].map((k) => Math.min(dim[k] - 1, Math.floor((max[k] + r - lo[k]) / G)));
    for (let cz = a[2]; cz <= b[2]; cz++) for (let cy = a[1]; cy <= b[1]; cy++) for (let cx = a[0]; cx <= b[0]; cx++) {
      const c = (cz * dim[1] + cy) * dim[0] + cx;
      for (let q = counts[c]; q < counts[c + 1]; q++) fn(order[q]);
    }
  };
  // 2. each element
  const rows = [];
  let usedPts = 0;
  const seenPts = new Uint8Array(n);
  for (const [key, bx] of boxes) {
    const { min, max } = bx;
    if (!min || !max || min.some((v, k) => !(max[k] >= v))) continue;
    const size = [max[0] - min[0], max[1] - min[1], max[2] - min[2]];
    const volume = Math.max(0, size[0]) * Math.max(0, size[1]) * Math.max(0, size[2]);
    // faces: axis k, side 0 = min, 1 = max; cells over the other two axes
    const faces = [];
    for (let k = 0; k < 3; k++) {
      const u = (k + 1) % 3, v = (k + 2) % 3;
      const nu = Math.min(MAX_DIM, Math.max(1, Math.ceil(size[u] / cell))), nv = Math.min(MAX_DIM, Math.max(1, Math.ceil(size[v] / cell)));
      for (let s = 0; s < 2; s++) faces.push({ k, u, v, s, nu, nv, area: size[u] * size[v], hit: new Uint8Array(nu * nv), got: 0 });
    }
    let sum = 0, sum2 = 0, cnt = 0, any = 0;
    near(min, max, Math.max(reach, band), (i) => {
      const x = P[i * 3], y = P[i * 3 + 1], z = P[i * 3 + 2], p = [x, y, z];
      // distance to the box surface, outside positive
      let out2 = 0, inner = Infinity;
      for (let k = 0; k < 3; k++) { const d = p[k] < min[k] ? min[k] - p[k] : p[k] > max[k] ? p[k] - max[k] : 0; out2 += d * d; if (p[k] >= min[k] && p[k] <= max[k]) inner = Math.min(inner, p[k] - min[k], max[k] - p[k]); }
      const d = out2 > 0 ? Math.sqrt(out2) : -inner;
      if (d > reach) return;
      any++;
      if (Math.abs(d) > band) return;
      cnt++; sum += d; sum2 += d * d; seenPts[i] = 1;
      {
        for (const f of faces) {
          const plane = f.s ? max[f.k] : min[f.k];
          if (Math.abs(p[f.k] - plane) > tol) continue;
          if (p[f.u] < min[f.u] - tol || p[f.u] > max[f.u] + tol || p[f.v] < min[f.v] - tol || p[f.v] > max[f.v] + tol) continue;
          const iu = Math.min(f.nu - 1, Math.max(0, Math.floor((p[f.u] - min[f.u]) / (size[f.u] || 1) * f.nu))), iv = Math.min(f.nv - 1, Math.max(0, Math.floor((p[f.v] - min[f.v]) / (size[f.v] || 1) * f.nv)));
          if (!f.hit[iu * f.nv + iv]) { f.hit[iu * f.nv + iv] = 1; f.got++; }
        }
      }
    });
    let coverage = 0;
    const bigFace = Math.max(...faces.map((f) => f.area));
    for (const f of faces) if (f.area >= 0.25 * bigFace) coverage = Math.max(coverage, f.got / (f.nu * f.nv));   // thin end faces are not what a scanner judges an element by
    const state = coverage >= builtMin ? 'built' : coverage >= partlyMin ? 'partly' : any ? 'missing' : 'unseen';
    const mean = cnt ? sum / cnt : null, rms = cnt ? Math.sqrt(sum2 / cnt) : null;
    const dev = (state === 'built' || state === 'partly') && cnt ? (Math.abs(mean) <= tol ? 'ok' : Math.abs(mean) <= 3 * tol ? 'near' : 'off') : null;
    usedPts += cnt;
    rows.push({ key, state, coverage: Math.round(coverage * 1000) / 1000, mean: mean === null ? null : mean, rms, dev, points: cnt, volume });
  }
  // 3. totals
  const T = { elements: rows.length, built: 0, partly: 0, missing: 0, unseen: 0, ok: 0, near: 0, off: 0, pct: null, pctVolume: null };
  let vB = 0, vAll = 0;
  for (const r of rows) {
    T[r.state]++; if (r.dev) T[r.dev]++;
    if (r.state !== 'unseen') { vAll += r.volume; if (r.state === 'built') vB += r.volume; }
  }
  const judged = T.built + T.partly + T.missing;
  if (judged) { T.pct = Math.round(1000 * T.built / judged) / 10; T.pctVolume = vAll > 0 ? Math.round(1000 * vB / vAll) / 10 : null; }
  const out = { ok: true, tol, cell, band, reach, builtMin, partlyMin, rows, totals: T, points: { n, used: usedPts, outside: n - seenPts.reduce((a, b) => a + b, 0) } };
  // 4. the schedule
  if (o.expected instanceof Map) {
    const byKey = new Map(rows.map((r) => [r.key, r]));
    let scheduled = 0, expectedBuilt = 0, scanned = 0, builtOfExpected = 0, behind = 0, ahead = 0;
    for (const [key, plan] of o.expected) {
      const r = byKey.get(key);
      if (!r) continue;
      r.plan = plan; scheduled++;
      if (plan === 'built') expectedBuilt++;
      if (r.state === 'unseen') continue;
      scanned++;
      if (plan === 'built') { if (r.state === 'built') builtOfExpected++; else { r.flag = 'behind'; behind++; } }
      else if (plan === 'waiting' && r.state === 'built') { r.flag = 'ahead'; ahead++; }
    }
    const scannedExpected = rows.filter((r) => r.plan === 'built' && r.state !== 'unseen').length;
    out.plan = { scheduled, expectedBuilt, scanned, builtOfExpected, behind, ahead,
      pctExpected: scheduled ? Math.round(1000 * expectedBuilt / scheduled) / 10 : null,
      pctSeen: scannedExpected ? Math.round(1000 * builtOfExpected / scannedExpected) / 10 : null };
  }
  return out;
}

/** The colour of a state for the model: [r, g, b] 0–255 (built green, partly amber, missing red, unseen grey). */
export const STATE_COLORS = { built: [76, 160, 90], partly: [226, 168, 52], missing: [208, 70, 62], unseen: [150, 150, 150] };

/** A CSV of the rows (key → name through names). Cells starting with = + - @ get a leading apostrophe. */
export function progressCsv(res, names = new Map(), unit = 'm') {
  const safe = (v) => { const s = String(v ?? ''); return /^[=+\-@\t\r]/.test(s) ? "'" + s : s; };
  const q = (v) => '"' + safe(v).replace(/"/g, '""') + '"';
  const f = (v, d) => (v === null || v === undefined ? '' : String(Math.round(v * 10 ** d) / 10 ** d));
  const lines = [['element', 'state', 'coverage', 'mean offset (' + unit + ')', 'rms (' + unit + ')', 'deviation', 'points', 'volume (' + unit + '3)', 'schedule', 'flag'].map(q).join(',')];
  for (const r of res.rows) lines.push([names.get(r.key) ?? r.key, r.state, f(r.coverage, 3), f(r.mean, 4), f(r.rms, 4), r.dev ?? '', r.points, f(r.volume, 4), r.plan ?? '', r.flag ?? ''].map(q).join(','));
  return lines.join('\r\n') + '\r\n';
}
