/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — geometry only; no words. */
/**
 * pen-bim.js — BimCraft's sketch tools read the pen (0.11 SU.1807 / BK.181 BimCraft half, session bim-inbox-11; CadCraft's pen-cad.js is the pattern).
 * The pen is the shell's one module (assets/js/app-pen.js): with a pen it sends window 'cc-pen-stroke' {phase, samples: [{x, y, pressure, …}], pointerId}.
 * It runs only where the page carries #cc-pen (the owner's .env switch PEN_SHARED, off), so without it nothing here changes: the stair sketch is
 * clicked as before.
 *
 * With it, the stair sketch (stair-sketch-ui.js) takes a stroke drawn with the pen as the walking line: the stroke's corners (1 to 3 segments)
 * become the line's points, ready for Enter. DOM-free parts are exported (bin/test-bimcraft.mjs --pen).
 *
 *   penStrokes(win, onStroke?) → { take(maxAgeMs), stop() }       the last finished pen stroke (once); onStroke(stroke) when one ends
 *   strokeCorners(points, { tolFrac, maxPoints }) → [[x, y]…]     Douglas-Peucker corners of a plan-mm path, at most maxPoints (default 4)
 */
import { dist2 as dist } from './geom-vec.js';   // shared helpers (0.11 PERF.74; tools/perf/util-copies.mjs)
function distToSeg(p, a, b) {
  const dx = b[0] - a[0], dy = b[1] - a[1], L2 = dx * dx + dy * dy;
  const t = L2 ? Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / L2)) : 0;
  return Math.hypot(p[0] - (a[0] + t * dx), p[1] - (a[1] + t * dy));
}
function keepIndexes(pts, eps) {
  const keep = new Uint8Array(pts.length); keep[0] = keep[pts.length - 1] = 1;
  const stack = [[0, pts.length - 1]];
  while (stack.length) {
    const [i, j] = stack.pop();
    let worst = -1, wd = eps;
    for (let k = i + 1; k < j; k++) { const d = distToSeg(pts[k], pts[i], pts[j]); if (d > wd) { wd = d; worst = k; } }
    if (worst >= 0) { keep[worst] = 1; stack.push([i, worst], [worst, j]); }
  }
  const out = []; for (let i = 0; i < pts.length; i++) if (keep[i]) out.push(i);
  return out;
}

/** The corners of a stroke (plan mm). The tolerance starts at tolFrac of the stroke's extent and grows until at most maxPoints are left. */
export function strokeCorners(points, { tolFrac = 0.03, maxPoints = 4 } = {}) {
  const P = (points || []).filter((p) => Array.isArray(p) && Number.isFinite(p[0]) && Number.isFinite(p[1]));
  if (P.length < 2) return [];
  const xs = P.map((p) => p[0]), ys = P.map((p) => p[1]);
  const ext = Math.hypot(Math.max(...xs) - Math.min(...xs), Math.max(...ys) - Math.min(...ys));
  if (!(ext > 0)) return [];
  let eps = ext * tolFrac, idx = keepIndexes(P, eps);
  for (let n = 0; idx.length > maxPoints && n < 40; n++) { eps *= 1.4; idx = keepIndexes(P, eps); }
  const out = idx.map((i) => [P[i][0], P[i][1]]);
  // a corner too close to its neighbour is a wobble, not a corner (a tenth of the extent)
  const min = ext * 0.1;
  for (let i = out.length - 2; i > 0; i--) if (dist(out[i], out[i - 1]) < min || dist(out[i], out[i + 1]) < min) out.splice(i, 1);
  return out.length >= 2 ? out : [];
}

export function penStrokes(win = typeof window !== 'undefined' ? window : null, onStroke = null) {
  let cur = null, last = null;
  const on = (e) => {
    const d = e.detail || {};
    const samples = Array.isArray(d.samples) ? d.samples : [];
    if (d.phase === 'down') cur = { id: d.pointerId, samples: [...samples] };
    else if (cur && d.pointerId === cur.id) {
      cur.samples.push(...samples);
      if (d.phase === 'up') {
        const ps = cur.samples.map((s) => s.pressure).filter((x) => Number.isFinite(x) && x > 0);
        last = { samples: cur.samples, pressure: ps.length ? ps.reduce((a, b) => a + b, 0) / ps.length : null, at: Date.now() };
        cur = null;
        if (onStroke) { try { onStroke(last); } catch { /* the tool reports its own errors */ } }
      }
    }
  };
  win?.addEventListener?.('cc-pen-stroke', on);
  return {
    take(maxAge = 1500) { const s = last; last = null; return s && Date.now() - s.at <= maxAge ? s : null; },
    stop() { win?.removeEventListener?.('cc-pen-stroke', on); },
  };
}
