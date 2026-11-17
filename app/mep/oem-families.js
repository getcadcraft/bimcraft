/* SPDX-License-Identifier: Apache-2.0 */
/**
 * mep/oem-families.js — manufacturers' valve and equipment models as MEP families (0.9.1, suggestion #1499: "import my custom
 * OEM valve models as a family for connecting"). DOM-free and IMPORT-FREE.
 *
 * A FAMILY is one model a person brought in (through the readers BimCraft already has: IFC, STEP, OBJ, glTF / GLB, a Library
 * item) with the connection ports they gave it: a triangle mesh in millimetres in the model's own axes, and ports
 * { name, kind (pipe | duct), system, direction, shape, size, h?, nominal, end, x, y, z, axis } — where a pipe or duct meets
 * it, the way that connection faces (out of the body), its size (a pipe's outside diameter, a duct's width) and the nominal
 * size as the pipe's table or spec names it. Nothing is measured from the mesh but its box; the ports are the person's.
 *
 *   role 'inline'     a valve, strainer or damper placed ON a run. It needs exactly two ports of one kind that face away from
 *                     each other along one line (inlineFrame says why not otherwise). Its length on the run is the distance
 *                     between them; it is drawn at its own size and never stretched: sizeFits(family, section) tells whether
 *                     its ports are the run's size, and the app warns when they are not.
 *   role 'equipment'  a piece placed on the plan like the generic equipment; runs snap to its ports.
 *
 *   FAMILY_LIMITS · EQUIP_CLASSES (what an equipment family is written as) · cleanFamily(raw) → { family } | { error, fill }
 *   setModelFamilies(list) · modelFamilies() · familyById(id) · onFamiliesChanged(fn)
 *   inlineFrame(family) → { ok, a, b, ex, L, kind } | { ok: false, error }
 *   placeInline(family, at, d, up) → { map(q) → point on the run, dir(v) → direction, L }   the family's first port at `at`,
 *                     its second along `d`, its own up kept as near to `up` as the line allows
 *   meshBox(body) → { min, max } · planHull(body) → [[x, y]…] (the outline seen from above)
 *   sizeFits(family, sec) → { ok, port, want, have }
 *   familyToLibraryItem(family) → a LibraryCraft item (format 1, partial) with its ports — the file the Library flow takes
 */
export const FAMILY_FORMAT = 'cadcraft-mep-family';
export const FAMILY_LIMITS = { families: 40, triangles: 40000, ports: 12, name: 80, coord: 1e6 };
export const PORT_DIRECTIONS = ['in', 'out', 'both'];
/** What an equipment family is written as: [IFC4 occurrence, type, PredefinedType, IFC2X3 occurrence, type, PredefinedType]. */
export const EQUIP_CLASSES = {
  valve: ['IFCVALVE', 'IFCVALVETYPE', 'NOTDEFINED', 'IFCFLOWCONTROLLER', 'IFCVALVETYPE', 'NOTDEFINED'],
  pump: ['IFCPUMP', 'IFCPUMPTYPE', 'NOTDEFINED', 'IFCFLOWMOVINGDEVICE', 'IFCPUMPTYPE', 'NOTDEFINED'],
  tank: ['IFCTANK', 'IFCTANKTYPE', 'NOTDEFINED', 'IFCFLOWSTORAGEDEVICE', 'IFCTANKTYPE', 'NOTDEFINED'],
  unitary: ['IFCUNITARYEQUIPMENT', 'IFCUNITARYEQUIPMENTTYPE', 'NOTDEFINED', 'IFCENERGYCONVERSIONDEVICE', 'IFCUNITARYEQUIPMENTTYPE', 'NOTDEFINED'],
  heater: ['IFCSPACEHEATER', 'IFCSPACEHEATERTYPE', 'NOTDEFINED', 'IFCENERGYCONVERSIONDEVICE', 'IFCSPACEHEATERTYPE', 'NOTDEFINED'],
  boiler: ['IFCBOILER', 'IFCBOILERTYPE', 'NOTDEFINED', 'IFCENERGYCONVERSIONDEVICE', 'IFCBOILERTYPE', 'NOTDEFINED'],
  fan: ['IFCFAN', 'IFCFANTYPE', 'NOTDEFINED', 'IFCFLOWMOVINGDEVICE', 'IFCFANTYPE', 'NOTDEFINED'],
  terminal: ['IFCAIRTERMINAL', 'IFCAIRTERMINALTYPE', 'NOTDEFINED', 'IFCFLOWTERMINAL', 'IFCAIRTERMINALTYPE', 'NOTDEFINED'],
};
const IFC_NAMES = { IFCVALVE: 'IfcValve', IFCPUMP: 'IfcPump', IFCTANK: 'IfcTank', IFCUNITARYEQUIPMENT: 'IfcUnitaryEquipment', IFCSPACEHEATER: 'IfcSpaceHeater', IFCBOILER: 'IfcBoiler', IFCFAN: 'IfcFan', IFCAIRTERMINAL: 'IfcAirTerminal' };
const ID_RE = /^[a-z0-9][a-z0-9-]{0,39}$/;
const text = (s, n) => String(s ?? '').replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, n);
const r2 = (v) => Math.round(v * 100) / 100;
const err = (key, fill = {}) => ({ error: key, fill });
const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const add = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const mul = (a, s) => [a[0] * s, a[1] * s, a[2] * s];
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const len = (a) => Math.hypot(a[0], a[1], a[2]);
const norm = (a) => { const l = len(a) || 1; return [a[0] / l, a[1] / l, a[2] / l]; };

export function familySlug(name) {
  const s = String(name || '').normalize('NFKD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 32);
  return s || 'family';
}
export const freeFamilyId = (name, taken = []) => { const base = familySlug(name); let id = base, n = 2; while (taken.includes(id)) id = base.slice(0, 36) + '-' + n++; return id; };

function cleanPort(raw, i, seen) {
  if (!raw || typeof raw !== 'object') return err('mep.oem.err.port', { n: i + 1 });
  const name = text(raw.name, 40) || 'port-' + (i + 1);
  if (seen.has(name)) return err('mep.oem.err.portname', { n: i + 1 });
  const at = [Number(raw.x), Number(raw.y), Number(raw.z)];
  if (!at.every((v) => Number.isFinite(v) && Math.abs(v) <= FAMILY_LIMITS.coord)) return err('mep.oem.err.portat', { n: i + 1 });
  const ax = Array.isArray(raw.axis) && raw.axis.length === 3 ? raw.axis.map(Number) : [NaN];
  if (!ax.every(Number.isFinite) || !(len(ax) > 1e-9)) return err('mep.oem.err.portaxis', { n: i + 1 });
  const kind = raw.kind === 'duct' ? 'duct' : 'pipe', shape = kind === 'duct' && ['rect', 'oval'].includes(raw.shape) ? raw.shape : 'round';
  const size = Number(raw.size), h = Number(raw.h);
  if (!(size > 0 && size <= 5000)) return err('mep.oem.err.portsize', { n: i + 1 });
  if (shape !== 'round' && !(h > 0 && h <= 5000)) return err('mep.oem.err.portsize', { n: i + 1 });
  const port = { name, kind, system: /^[a-z]{1,12}$/.test(String(raw.system || '')) ? String(raw.system) : (kind === 'duct' ? 'supply' : 'chw'), direction: PORT_DIRECTIONS.includes(raw.direction) ? raw.direction : 'both',
    shape, size: r2(size), nominal: text(raw.nominal, 20), end: text(raw.end, 40), x: r2(at[0]), y: r2(at[1]), z: r2(at[2]), axis: norm(ax).map((v) => Math.round(v * 1e6) / 1e6) };
  if (shape !== 'round') port.h = r2(h);
  return { port };
}
/** A family from untrusted data (a file, the model). The mesh keeps two decimals of a millimetre. */
export function cleanFamily(raw) {
  if (!raw || typeof raw !== 'object') return err('mep.oem.err.format');
  const name = text(raw.name, FAMILY_LIMITS.name);
  if (!name) return err('mep.oem.err.name');
  const b = raw.body;
  if (!b || !Array.isArray(b.positions) || !Array.isArray(b.indices) || b.positions.length < 9 || b.positions.length % 3 || b.indices.length < 3 || b.indices.length % 3) return err('mep.oem.err.body');
  if (b.indices.length / 3 > FAMILY_LIMITS.triangles) return err('mep.oem.err.big', { n: FAMILY_LIMITS.triangles, have: b.indices.length / 3 });
  const nv = b.positions.length / 3;
  if (!b.positions.every((v) => Number.isFinite(v) && Math.abs(v) <= FAMILY_LIMITS.coord) || !b.indices.every((v) => Number.isInteger(v) && v >= 0 && v < nv)) return err('mep.oem.err.body');
  const list = Array.isArray(raw.ports) ? raw.ports : [];
  if (list.length > FAMILY_LIMITS.ports) return err('mep.oem.err.ports', { n: FAMILY_LIMITS.ports });
  const ports = [], seen = new Set();
  for (let i = 0; i < list.length; i++) { const c = cleanPort(list[i], i, seen); if (c.error) return c; seen.add(c.port.name); ports.push(c.port); }
  const role = raw.role === 'equipment' ? 'equipment' : 'inline';
  const src = raw.source && typeof raw.source === 'object' ? raw.source : {};
  return { family: {
    format: FAMILY_FORMAT, version: 1, id: ID_RE.test(String(raw.id || '')) ? String(raw.id) : familySlug(name), name, maker: text(raw.maker, 80), model: text(raw.model, 80),
    role, base: text(raw.base, 20) || (role === 'inline' ? 'gate' : 'valve'), note: text(raw.note, 200),
    rev: Number.isInteger(raw.rev) && raw.rev > 0 ? raw.rev : 1,
    source: { file: text(src.file, 120), format: text(src.format, 20) },
    ports, body: { positions: b.positions.map(r2), indices: b.indices.slice() },
  } };
}

let FAMS = [], BY_ID = new Map(), VER = 0;
export const familiesVersion = () => VER;
const listeners = new Set();
export const onFamiliesChanged = (fn) => { listeners.add(fn); return () => listeners.delete(fn); };
/** The open model's families (already cleaned ones are taken as they are: mep/oem-families-model.js cleans what it reads). */
export function setModelFamilies(list) {
  FAMS = (Array.isArray(list) ? list : []).filter((f) => f && f.format === FAMILY_FORMAT && f.body).slice(0, FAMILY_LIMITS.families);
  BY_ID = new Map(FAMS.map((f) => [f.id, f])); VER++;
  for (const fn of listeners) fn(FAMS);
  return FAMS;
}
export const modelFamilies = () => FAMS.slice();
export const familyById = (id) => BY_ID.get(String(id)) || null;

export function meshBox(body) {
  const P = body.positions, min = [Infinity, Infinity, Infinity], max = [-Infinity, -Infinity, -Infinity];
  for (let i = 0; i < P.length; i += 3) for (let k = 0; k < 3; k++) { if (P[i + k] < min[k]) min[k] = P[i + k]; if (P[i + k] > max[k]) max[k] = P[i + k]; }
  return { min, max };
}
/** The convex outline of the mesh seen from above (Andrew's monotone chain), for the plan symbol. */
export function planHull(body) {
  const P = body.positions, pts = [];
  const seen = new Set();
  for (let i = 0; i < P.length; i += 3) { const k = Math.round(P[i]) + ',' + Math.round(P[i + 1]); if (!seen.has(k)) { seen.add(k); pts.push([P[i], P[i + 1]]); } }
  pts.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  if (pts.length < 3) return pts;
  const cr = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
  const lo = [], up = [];
  for (const p of pts) { while (lo.length >= 2 && cr(lo[lo.length - 2], lo[lo.length - 1], p) <= 0) lo.pop(); lo.push(p); }
  for (let i = pts.length - 1; i >= 0; i--) { const p = pts[i]; while (up.length >= 2 && cr(up[up.length - 2], up[up.length - 1], p) <= 0) up.pop(); up.push(p); }
  return [...lo.slice(0, -1), ...up.slice(0, -1)].map((q) => [r2(q[0]), r2(q[1])]);
}

/** The line an in-line family sits on: its two ports must be of one kind, face away from each other, on one line. */
export function inlineFrame(fam) {
  if (!fam || fam.ports.length !== 2) return { ok: false, error: 'mep.oem.err.twoports' };
  const [p, q] = fam.ports;
  if (p.kind !== q.kind) return { ok: false, error: 'mep.oem.err.samekind' };
  const a = [p.x, p.y, p.z], b = [q.x, q.y, q.z], L = len(sub(b, a));
  if (!(L >= 1)) return { ok: false, error: 'mep.oem.err.apart' };
  const ex = norm(sub(b, a));
  // each port faces out of the body along the line (within about 3 degrees)
  if (dot(p.axis, ex) > -0.9986 || dot(q.axis, ex) < 0.9986) return { ok: false, error: 'mep.oem.err.inline' };
  return { ok: true, a, b, ex, L, kind: p.kind };
}
/** Put an in-line family on a run: its first port at `at`, its line along `d` (unit), its own Z as near `up` as it can be. */
export function placeInline(fam, at, d, up = [0, 0, 1]) {
  const f = inlineFrame(fam);
  if (!f.ok) return null;
  const perp = (axis, want, alt) => { let v = sub(want, mul(axis, dot(want, axis))); if (len(v) < 1e-6) v = sub(alt, mul(axis, dot(alt, axis))); return norm(v); };
  const ez = perp(f.ex, [0, 0, 1], [0, 1, 0]), ey = cross(ez, f.ex);          // the family's own frame on its line
  const tz = perp(d, up, Math.abs(d[2]) < 0.9 ? [0, 0, 1] : [1, 0, 0]), ty = cross(tz, d);   // the run's frame there
  const dir = (v) => add(add(mul(d, dot(v, f.ex)), mul(ty, dot(v, ey))), mul(tz, dot(v, ez)));
  return { L: f.L, dir, map: (q) => add(at, dir(sub(q, f.a))) };
}
/** Whether an in-line family's ports are the run's size (a pipe's outside diameter within 1 mm, or the same nominal name; a duct's sides within 2 mm). */
export function sizeFits(fam, sec) {
  for (const p of fam.ports) {
    if (sec.kind === 'pipe') {
      const same = (p.nominal && sec.p && (p.nominal === sec.p.size || p.nominal === sec.label)) || Math.abs(p.size - sec.od) <= 1;
      if (!same) return { ok: false, port: p.name, want: Math.round(sec.od * 100) / 100, have: p.size, nominal: p.nominal };
    } else if (Math.abs(p.size - sec.w) > 2 || Math.abs((p.shape === 'round' ? p.size : p.h) - sec.h) > 2 || (p.shape === 'round') !== !!sec.round) return { ok: false, port: p.name, want: Math.round(sec.w), have: p.size };
  }
  return { ok: true };
}
/** The family as a LibraryCraft item (format 1; no uuid / version / license: the Library adds them when it is submitted). */
export function familyToLibraryItem(fam) {
  const box = meshBox(fam.body);
  const LIB_SYS = ['cw', 'hw', 'hwr', 'san', 'vent', 'storm', 'chw', 'hhw', 'gas', 'fire', 'supply', 'return', 'exhaust', 'outside'];
  return {
    format: 'cadcraft-library-item', format_version: 1, name: fam.name, kind: 'equipment', category: fam.role === 'inline' ? 'piping/valves' : 'mechanical/equipment',
    ...(fam.maker ? { maker: fam.maker } : {}), ...(fam.model ? { model: fam.model } : {}), ...(fam.note ? { description: fam.note } : {}),
    ifc: { class: fam.role === 'inline' ? (fam.base === 'strainer' ? 'IfcFilter' : fam.base.startsWith('damper') ? 'IfcDamper' : 'IfcValve') : (IFC_NAMES[(EQUIP_CLASSES[fam.base] || EQUIP_CLASSES.valve)[0]] || 'IfcValve') },
    plan: { layers: [{ name: '0' }], entities: [{ type: 'poly', layer: '0', color: null, pts: planHull(fam.body), closed: true }] },
    body: { type: 'mesh', positions: fam.body.positions.slice(), indices: fam.body.indices.slice() }, clearances: [],
    params: { width: r2(box.max[0] - box.min[0]), depth: r2(box.max[1] - box.min[1]), height: r2(box.max[2] - box.min[2]) },
    source_attrs: { 'CC-MEP-FAMILY': fam.id, 'CC-MEP-ROLE': fam.role, 'CC-MEP-BASE': fam.base },
    ports: fam.ports.map((p) => { const o = { name: p.name, system: LIB_SYS.includes(p.system) ? p.system : 'other', direction: p.direction, shape: p.shape, size: p.size, x: p.x, y: p.y, z: p.z, axis: p.axis.slice() }; if (p.h) o.h = p.h; if (p.nominal) o.nominal = p.nominal; return o; }),
  };
}
/** A LibraryCraft item (or a family file) as a family draft: its mesh and whatever ports it already has. */
export function familyFromItem(item, { name = '', file = '', format = '' } = {}) {
  const body = item?.body;
  if (!body || body.type === 'box') {
    if (body?.type === 'box' && Array.isArray(body.a) && Array.isArray(body.b)) {
      const [x0, y0, z0] = body.a, [x1, y1, z1] = body.b;
      const P = [x0, y0, z0, x1, y0, z0, x1, y1, z0, x0, y1, z0, x0, y0, z1, x1, y0, z1, x1, y1, z1, x0, y1, z1], I = [];
      for (const [a, b, c, d] of [[0, 3, 2, 1], [4, 5, 6, 7], [0, 1, 5, 4], [1, 2, 6, 5], [2, 3, 7, 6], [3, 0, 4, 7]]) I.push(a, b, c, a, c, d);
      return { name: item.name || name, body: { positions: P, indices: I }, ports: [], source: { file, format } };
    }
    return null;
  }
  const ports = (item.ports || []).map((p) => ({ ...p, kind: ['supply', 'return', 'exhaust', 'outside'].includes(p.system) ? 'duct' : 'pipe', axis: p.axis || [1, 0, 0] }));
  return { name: text(item.name || name, FAMILY_LIMITS.name), maker: item.maker || '', model: item.model || '', role: item.source_attrs?.['CC-MEP-ROLE'] === 'equipment' ? 'equipment' : 'inline', base: item.source_attrs?.['CC-MEP-BASE'] || '',
    body: { positions: Array.from(body.positions), indices: Array.from(body.indices) }, ports, source: { file, format } };
}
