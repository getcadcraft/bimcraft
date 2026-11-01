/* SPDX-License-Identifier: Apache-2.0 */
/**
 * georef-cloud.js — move a loaded point cloud or a list of ground points into another coordinate system (0.8 D8.9 item 3, session
 * `d89b_PART_3`). DOM-free. The projection is crs-georef.js reproject(); this file only turns BimCraft's shapes into x/y arrays and back.
 * The file on disk is never written: the loaded copy changes, and opening the file again gives back its own system.
 *
 *   cloudXY(cloud) → Float64Array [x, y, …] absolute, in the cloud's unit        (pointcloud.js cloud: pos relative to origin)
 *   applyCloud(cloud, xy, { unit, zFactor }) → { dropped }                        the reprojected x/y back in: new origin, unit, extent; unprojectable points left out
 *   pointsXY(points) → Float64Array · applyPoints(points, xy, zFactor) → points   ground points [{x, y, z}] (res-terrain.js)
 *   boxOf(xy) → [minx, miny, maxx, maxy] | null
 */
export function boxOf(xy) {
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  for (let i = 0; i < xy.length; i += 2) {
    const x = xy[i], y = xy[i + 1];
    if (!Number.isFinite(x) || !Number.isFinite(y)) continue;
    if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y;
  }
  return Number.isFinite(x0) ? [x0, y0, x1, y1] : null;
}
export function cloudXY(cloud) {
  const xy = new Float64Array(cloud.n * 2), o = cloud.origin, p = cloud.pos;
  for (let i = 0; i < cloud.n; i++) { xy[2 * i] = p[3 * i] + o[0]; xy[2 * i + 1] = p[3 * i + 1] + o[1]; }
  return xy;
}
export function applyCloud(cloud, xy, { unit, zFactor = 1 }) {
  const n = cloud.n, keep = [];
  for (let i = 0; i < n; i++) if (Number.isFinite(xy[2 * i]) && Number.isFinite(xy[2 * i + 1])) keep.push(i);
  const m = keep.length, o = cloud.origin;
  let x0 = Infinity, y0 = Infinity, z0 = Infinity, x1 = -Infinity, y1 = -Infinity, z1 = -Infinity;
  const zs = new Float64Array(m);
  for (let k = 0; k < m; k++) {
    const i = keep[k], x = xy[2 * i], y = xy[2 * i + 1], z = (cloud.pos[3 * i + 2] + o[2]) * zFactor;
    zs[k] = z;
    if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; if (z < z0) z0 = z; if (z > z1) z1 = z;
  }
  const pos = new Float32Array(3 * m), origin = m ? [x0, y0, z0] : [0, 0, 0];
  for (let k = 0; k < m; k++) { const i = keep[k]; pos[3 * k] = xy[2 * i] - origin[0]; pos[3 * k + 1] = xy[2 * i + 1] - origin[1]; pos[3 * k + 2] = zs[k] - origin[2]; }
  const pick = (a, w) => { if (!a) return a; const b = new a.constructor(m * w); for (let k = 0; k < m; k++) for (let c = 0; c < w; c++) b[k * w + c] = a[keep[k] * w + c]; return b; };
  cloud.rgb = pick(cloud.rgb, 3); cloud.inten = pick(cloud.inten, 1); cloud.cls = pick(cloud.cls, 1);
  cloud.pos = pos; cloud.n = m; cloud.origin = origin;
  cloud.min = m ? [x0, y0, z0] : [0, 0, 0]; cloud.max = m ? [x1, y1, z1] : [0, 0, 0];
  cloud.unit = unit; cloud.zUnit = unit;
  if (cloud.info) { cloud.info.unit = unit; cloud.info.zUnit = unit; }
  return { dropped: n - m };
}
export function pointsXY(points) {
  const xy = new Float64Array(points.length * 2);
  for (let i = 0; i < points.length; i++) { xy[2 * i] = points[i].x; xy[2 * i + 1] = points[i].y; }
  return xy;
}
export function applyPoints(points, xy, zFactor = 1) {
  const out = [];
  for (let i = 0; i < points.length; i++) if (Number.isFinite(xy[2 * i]) && Number.isFinite(xy[2 * i + 1])) out.push({ ...points[i], x: xy[2 * i], y: xy[2 * i + 1], z: points[i].z * zFactor });
  return out;
}
