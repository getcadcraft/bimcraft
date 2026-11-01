/* SPDX-License-Identifier: Apache-2.0 */
/**
 * equip.js — process equipment with nozzles (0.7 LC.5 step 2, session plant-design). DOM-free (tested in Node).
 *
 * Seven generic pieces of equipment, built from a few dimensions (millimetres): vertical and horizontal vessel, atmospheric
 * tank, column, centrifugal pump, shell and tube exchanger, plate exchanger. Each is drawn as closed solids (a mesh) from its
 * dimensions and has NOZZLES: where a pipe meets it, with a position, the direction the pipe leaves in, a size and a flow
 * direction. They are plain shapes of the right proportions — no maker's dimensions, no maker's catalogue — so a person puts
 * their own vendor's figures in the dimensions. A drafting aid. The shapes (the build functions in TYPE) are dedicated to the public
 * domain by CadCraft under CC0 1.0; the code around them is Apache-2.0 like the rest of the add-on.
 *
 *   TYPES                          the ids; TYPE[id] = { ifc: { cls, predefined }, params: {defaults}, build(params) }
 *   makeEquipment(type, params?) → { type, params, ifc, mesh: { verts: [[x,y,z]], tris: [[a,b,c]] }, bbox, nozzles: [{ name, p, out, size, flow }],
 *                                    capacityM3 | null }
 *   placeEquipment(eq, { x, y, z, rot }) → the same moved to (x, y, z) and turned `rot` degrees about Z
 *   meshVolume(mesh) → mm³ (signed: positive for outward-facing triangles)    isClosed(mesh) → every edge used by exactly two triangles
 *
 * `flow` is the port's direction in IFC's words: SINK (fluid enters), SOURCE (fluid leaves), SINKANDSOURCE.
 */

import { bodyProfile } from '../../../process/equip/vessel2.js';   // 0.8 chem-draw_PART_4 (CH.9): the vessel body outline of the vessel calculator, revolved

const N = 24;   // sides of a round body

// ---------------------------------------------------------------------------------------------------- mesh helpers
function lathe(profile, sides = N) {   // profile: [[r, z]…] from the axis out and back to the axis; about Z
  const verts = [], tris = [];
  const rings = profile.map(([r, z]) => (r < 1e-9 ? { pole: verts.push([0, 0, z]) - 1 } : { ring: Array.from({ length: sides }, (_, i) => verts.push([r * Math.cos((2 * Math.PI * i) / sides), r * Math.sin((2 * Math.PI * i) / sides), z]) - 1) }));
  for (let k = 0; k + 1 < rings.length; k++) {
    const a = rings[k], b = rings[k + 1];
    for (let i = 0; i < sides; i++) {
      const j = (i + 1) % sides;
      if (a.pole !== undefined && b.ring) tris.push([a.pole, b.ring[i], b.ring[j]]);
      else if (a.ring && b.pole !== undefined) tris.push([a.ring[i], b.pole, a.ring[j]]);
      else if (a.ring && b.ring) { tris.push([a.ring[i], b.ring[i], b.ring[j]]); tris.push([a.ring[i], b.ring[j], a.ring[j]]); }
    }
  }
  return orient({ verts, tris });
}
const box = (x0, y0, z0, x1, y1, z1) => orient({
  verts: [[x0, y0, z0], [x1, y0, z0], [x1, y1, z0], [x0, y1, z0], [x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1]],
  tris: [[0, 2, 1], [0, 3, 2], [4, 5, 6], [4, 6, 7], [0, 1, 5], [0, 5, 4], [1, 2, 6], [1, 6, 5], [2, 3, 7], [2, 7, 6], [3, 0, 4], [3, 4, 7]],
});
/** Flip every triangle when the solid faces inward (so a profile may be given in either direction). */
function orient(m) { if (meshVolume(m) < 0) m.tris = m.tris.map(([a, b, c]) => [a, c, b]); return m; }
const move = (m, f) => ({ verts: m.verts.map(f), tris: m.tris });
const join = (...ms) => {
  const verts = [], tris = [];
  for (const m of ms) { const o = verts.length; for (const v of m.verts) verts.push(v); for (const t of m.tris) tris.push([t[0] + o, t[1] + o, t[2] + o]); }
  return { verts, tris };
};
const alongX = (m) => orient(move(m, ([x, y, z]) => [z, x, y]));   // a body made about Z, laid along X (a cyclic permutation: still a proper turn)
const shift = (m, dx, dy, dz) => move(m, ([x, y, z]) => [x + dx, y + dy, z + dz]);

/** An elliptical head: from the tangent line out to a pole one quarter of the diameter away (2:1), n steps. */
function head(r, z0, up, n = 6) {
  const out = [];
  for (let i = 0; i <= n; i++) { const a = (Math.PI / 2) * (i / n); out.push([r * Math.cos(a), z0 + up * (r / 2) * Math.sin(a)]); }
  return out;
}
const vesselProfile = (r, z0, z1) => [[0, z0 - r / 2], ...head(r, z0, -1).reverse().slice(0, -1), [r, z0], [r, z1], ...head(r, z1, 1).slice(1, -1), [0, z1 + r / 2]];

export function meshVolume(m) {
  let v = 0;
  for (const [a, b, c] of m.tris) {
    const p = m.verts[a], q = m.verts[b], r = m.verts[c];
    v += (p[0] * (q[1] * r[2] - q[2] * r[1]) - p[1] * (q[0] * r[2] - q[2] * r[0]) + p[2] * (q[0] * r[1] - q[1] * r[0])) / 6;
  }
  return v;
}
export function isClosed(m) {
  const e = new Map();
  for (const [a, b, c] of m.tris) for (const [x, y] of [[a, b], [b, c], [c, a]]) { const k = x < y ? x + ',' + y : y + ',' + x; e.set(k, (e.get(k) || 0) + 1); }
  return [...e.values()].every((n) => n === 2);
}
function bboxOf(m) {
  const lo = [Infinity, Infinity, Infinity], hi = [-Infinity, -Infinity, -Infinity];
  for (const v of m.verts) for (let k = 0; k < 3; k++) { lo[k] = Math.min(lo[k], v[k]); hi[k] = Math.max(hi[k], v[k]); }
  return { min: lo, max: hi };
}
const nozzle = (name, p, out, size, flow) => ({ name, p, out, size: String(size), flow });

// ---------------------------------------------------------------------------------------------------- the pieces
const cylCapacity = (d, len) => (Math.PI * (d / 2) ** 2 * len + (4 / 3) * Math.PI * (d / 2) * (d / 2) * (d / 4)) / 1e9;   // m³: a cylinder and two 2:1 heads

const HEADS = { ellip: 'ellipsoidal', hemi: 'hemispherical', tori: 'torispherical' };   // params are short strings (a parameter text is cut at 10 characters)
export const TYPE = {
  'vessel-profile': {   // a vertical vessel whose outline comes from the vessel body calculator (vessel2): ellipsoidal, hemispherical or torispherical heads, inside surface
    ifc: { cls: 'IFCTANK', predefined: 'PRESSUREVESSEL' }, params: { d: 1000, h: 2000, leg: 600, head: 'ellip', crownR: 0, knuckleR: 0, feed: '4', out: '4', vent: '2', drain: '2' },
    build: (p) => {
      const b = bodyProfile({ D: p.d, Ltt: p.h, head: { type: HEADS[p.head] || 'ellipsoidal', ...(p.crownR ? { crownR: p.crownR } : {}), ...(p.knuckleR ? { knuckleR: p.knuckleR } : {}) } });
      const r = p.d / 2, z0 = p.leg, prof = b.profile.map(([x, z]) => [Math.max(0, x < 1e-6 ? 0 : x), z + z0]);
      const body = lathe(prof), skirt = lathe([[0, 0], [r * 0.8, 0], [r * 0.8, z0], [0, z0]]), top = z0 + b.height, bot = z0;
      return {
        mesh: join(body, skirt),
        nozzles: [nozzle('top', [0, 0, top], [0, 0, 1], p.vent, 'SOURCE'), nozzle('bottom', [0, 0, bot], [0, 0, -1], p.drain, 'SOURCE'),
          nozzle('feed', [r, 0, z0 + p.h * 0.75], [1, 0, 0], p.feed, 'SINK'), nozzle('outlet', [-r, 0, z0 + p.h * 0.15], [-1, 0, 0], p.out, 'SOURCE')],
        capacityM3: b.volume,
      };
    },
  },
  'vessel-v': {
    ifc: { cls: 'IFCTANK', predefined: 'PRESSUREVESSEL' }, params: { d: 1200, h: 2400, leg: 600, feed: '4', out: '4', vent: '2', drain: '2' },
    build: (p) => {
      const r = p.d / 2, z0 = p.leg, z1 = p.leg + p.h;
      const body = lathe(vesselProfile(r, z0, z1)), skirt = lathe([[0, 0], [r * 0.8, 0], [r * 0.8, z0], [0, z0]]);
      const top = z1 + r / 2, bot = z0 - r / 2;
      return {
        mesh: join(body, skirt),
        nozzles: [nozzle('top', [0, 0, top], [0, 0, 1], p.vent, 'SOURCE'), nozzle('bottom', [0, 0, bot], [0, 0, -1], p.drain, 'SOURCE'),
          nozzle('feed', [r, 0, z0 + p.h * 0.75], [1, 0, 0], p.feed, 'SINK'), nozzle('outlet', [-r, 0, z0 + p.h * 0.15], [-1, 0, 0], p.out, 'SOURCE')],
        capacityM3: cylCapacity(p.d, p.h),
      };
    },
  },
  'vessel-h': {
    ifc: { cls: 'IFCTANK', predefined: 'PRESSUREVESSEL' }, params: { d: 1200, len: 3600, leg: 500, feed: '4', out: '4', vent: '2', drain: '2' },
    build: (p) => {
      const r = p.d / 2, zc = p.leg + r;
      const body = shift(alongX(lathe(vesselProfile(r, -p.len / 2, p.len / 2))), 0, 0, zc);
      const saddle = (x) => box(x - 100, -r * 0.8, 0, x + 100, r * 0.8, zc - r * 0.55);
      return {
        mesh: join(body, saddle(-p.len * 0.3), saddle(p.len * 0.3)),
        nozzles: [nozzle('feed', [-p.len * 0.35, 0, zc + r], [0, 0, 1], p.feed, 'SINK'), nozzle('vent', [p.len * 0.1, 0, zc + r], [0, 0, 1], p.vent, 'SOURCE'),
          nozzle('outlet', [p.len * 0.35, 0, zc - r], [0, 0, -1], p.out, 'SOURCE'), nozzle('drain', [-p.len * 0.3 - 300, 0, zc - r], [0, 0, -1], p.drain, 'SOURCE')],
        capacityM3: cylCapacity(p.d, p.len),
      };
    },
  },
  tank: {
    ifc: { cls: 'IFCTANK', predefined: 'STORAGE' }, params: { d: 3000, h: 3000, roof: 300, inlet: '4', outlet: '4', vent: '2', drain: '2' },
    build: (p) => {
      const r = p.d / 2;
      return {
        mesh: lathe([[0, 0], [r, 0], [r, p.h], [0, p.h + p.roof]]),
        nozzles: [nozzle('vent', [0, 0, p.h + p.roof], [0, 0, 1], p.vent, 'SOURCE'), nozzle('inlet', [r, 0, p.h * 0.8], [1, 0, 0], p.inlet, 'SINK'),
          nozzle('outlet', [-r, 0, 250], [-1, 0, 0], p.outlet, 'SOURCE'), nozzle('drain', [0, r, 0], [0, 1, 0], p.drain, 'SOURCE')],
        capacityM3: (Math.PI * r * r * p.h) / 1e9,
      };
    },
  },
  column: {
    ifc: { cls: 'IFCTANK', predefined: 'VESSEL' }, params: { d: 1000, h: 8000, leg: 800, feed: '4', overhead: '6', bottoms: '4', reflux: '3' },
    build: (p) => {
      const r = p.d / 2, z0 = p.leg, z1 = p.leg + p.h;
      const body = lathe(vesselProfile(r, z0, z1)), skirt = lathe([[0, 0], [r * 0.9, 0], [r * 0.9, z0], [0, z0]]);
      return {
        mesh: join(body, skirt),
        nozzles: [nozzle('overhead', [0, 0, z1 + r / 2], [0, 0, 1], p.overhead, 'SOURCE'), nozzle('bottoms', [0, 0, z0 - r / 2], [0, 0, -1], p.bottoms, 'SOURCE'),
          nozzle('feed', [-r, 0, z0 + p.h * 0.5], [-1, 0, 0], p.feed, 'SINK'), nozzle('reflux', [r, 0, z0 + p.h * 0.9], [1, 0, 0], p.reflux, 'SINK')],
        capacityM3: cylCapacity(p.d, p.h),
      };
    },
  },
  'pump-cf': {
    ifc: { cls: 'IFCPUMP', predefined: 'ENDSUCTION' }, params: { suction: '3', discharge: '2', len: 1100, w: 400, h: 450 },
    build: (p) => {
      const volute = shift(alongX(lathe([[0, -p.w / 2], [p.h / 2, -p.w / 2], [p.h / 2, p.w / 2], [0, p.w / 2]])), 0, 0, p.h / 2 + 100);
      const motor = shift(alongX(lathe([[0, p.w / 2], [p.h * 0.4, p.w / 2], [p.h * 0.4, p.len - p.w / 2], [0, p.len - p.w / 2]])), 0, 0, p.h / 2 + 100);
      const base = box(-p.w / 2, -p.w / 2, 0, p.len, p.w / 2, 100);
      return {
        mesh: join(base, volute, motor),
        nozzles: [nozzle('suction', [-p.w / 2, 0, p.h / 2 + 100], [-1, 0, 0], p.suction, 'SINK'), nozzle('discharge', [0, 0, p.h + 100], [0, 0, 1], p.discharge, 'SOURCE')],
        capacityM3: null,
      };
    },
  },
  'exch-shell': {
    ifc: { cls: 'IFCHEATEXCHANGER', predefined: 'SHELLANDTUBE' }, params: { d: 600, len: 3000, leg: 400, tube: '3', shell: '3' },
    build: (p) => {
      const r = p.d / 2, zc = p.leg + r;
      const shellBody = shift(alongX(lathe([[0, -p.len / 2], [r, -p.len / 2], [r, p.len / 2], [0, p.len / 2]])), 0, 0, zc);
      const channel = (x) => shift(alongX(lathe([[0, x], [r * 0.9, x], [r * 0.9, x + Math.sign(x) * 250], [0, x + Math.sign(x) * 250]])), 0, 0, zc);
      const saddle = (x) => box(x - 80, -r * 0.7, 0, x + 80, r * 0.7, zc - r * 0.6);
      return {
        mesh: join(shellBody, channel(-p.len / 2), channel(p.len / 2), saddle(-p.len * 0.3), saddle(p.len * 0.3)),
        nozzles: [nozzle('tube in', [-p.len / 2 - 250, 0, zc], [-1, 0, 0], p.tube, 'SINK'), nozzle('tube out', [p.len / 2 + 250, 0, zc], [1, 0, 0], p.tube, 'SOURCE'),   // i18n-ignore: nozzle names are data: the IFC port's Name, matched with the P&ID add-on's connection names
          nozzle('shell in', [-p.len * 0.35, 0, zc + r], [0, 0, 1], p.shell, 'SINK'), nozzle('shell out', [p.len * 0.35, 0, zc - r], [0, 0, -1], p.shell, 'SOURCE')],   // i18n-ignore: nozzle names are data: the IFC port's Name, matched with the P&ID add-on's connection names
        capacityM3: null,
      };
    },
  },
  'exch-plate': {
    ifc: { cls: 'IFCHEATEXCHANGER', predefined: 'PLATE' }, params: { w: 500, d: 300, h: 1200, leg: 150, port: '2' },
    build: (p) => {
      const x = p.w / 2, y = p.d / 2, z0 = p.leg, z1 = p.leg + p.h;
      return {
        mesh: join(box(-x, -y, z0, x, y, z1), box(-x - 40, -y - 20, z0, -x, y + 20, z1), box(x, -y - 20, z0, x + 40, y + 20, z1), box(-x, -y, 0, x, y, z0)),
        nozzles: [nozzle('hot in', [-x * 0.6, -y - 20, z1 - 100], [0, -1, 0], p.port, 'SINK'), nozzle('hot out', [-x * 0.6, -y - 20, z0 + 100], [0, -1, 0], p.port, 'SOURCE'),   // i18n-ignore: nozzle names are data: the IFC port's Name, matched with the P&ID add-on's connection names
          nozzle('cold in', [x * 0.6, -y - 20, z0 + 100], [0, -1, 0], p.port, 'SINK'), nozzle('cold out', [x * 0.6, -y - 20, z1 - 100], [0, -1, 0], p.port, 'SOURCE')],   // i18n-ignore: nozzle names are data: the IFC port's Name, matched with the P&ID add-on's connection names
        capacityM3: null,
      };
    },
  },
};
export const TYPES = Object.keys(TYPE);

/** A piece of equipment from its type and dimensions (mm): the solids, their box, the nozzles. Unknown type → null. */
export function makeEquipment(type, params = {}) {
  const def = TYPE[type];
  if (!def) return null;
  const p = { ...def.params };
  for (const k of Object.keys(def.params)) {
    if (params[k] === undefined) continue;
    if (typeof def.params[k] === 'number') { const v = Number(params[k]); if (Number.isFinite(v) && v >= 50 && v <= 60000) p[k] = v; } else p[k] = String(params[k]).slice(0, 8);
  }
  const b = def.build(p);
  return { type, params: p, ifc: def.ifc, mesh: b.mesh, bbox: bboxOf(b.mesh), nozzles: b.nozzles, capacityM3: b.capacityM3 };
}

/** The equipment moved to (x, y, z) and turned `rot` degrees about Z (counterclockwise from above). */
export function placeEquipment(eq, { x = 0, y = 0, z = 0, rot = 0 } = {}) {
  const a = (rot * Math.PI) / 180, c = Math.cos(a), s = Math.sin(a);
  const pt = ([px, py, pz]) => [x + px * c - py * s, y + px * s + py * c, z + pz];
  const dir = ([dx, dy, dz]) => [dx * c - dy * s, dx * s + dy * c, dz];
  const mesh = { verts: eq.mesh.verts.map(pt), tris: eq.mesh.tris };
  return { ...eq, mesh, bbox: bboxOf(mesh), nozzles: eq.nozzles.map((n) => ({ ...n, p: pt(n.p), out: dir(n.out) })) };
}
