/* SPDX-License-Identifier: Apache-2.0 */
/**
 * res-elec.js — the electrical plan (0.5 part 4, RC.6): outlets, switches, lights, sensors, junction boxes and panels as
 * IFC electrical elements on walls and ceilings, with the CadCraft Electrical add-on's plan symbols (res-elec-symbols.js,
 * generated from it), switch-to-light links, circuits, and the device and circuit schedules. No DOM: bin/test-bimcraft.mjs
 * --res runs it in Node.
 *
 *   DEVICES[kind] → { ifc4: [class, PredefinedType], ifc2: class, mount: wall | ceiling, prefix, height: { ftin, mm }, body }
 *   defaultHeight(kind, units, ceiling) · symbolPlan(kind, at, angle, scale) → { lines, arcs, thin, poly } (plan mm)
 *   wallSpot(walls, p, reach) → { wall, side, offset, at, angle } | null   the nearest wall face (devices sit on it)
 *   readDevices(w) → [{ id, guid, storey, level, kind, tag, circuit, load, height, wall, side, offset, at, angle, controls }]
 *   placeDevice(spec) · changeDevice(guid, ch) · linkLight(switchGuid, lightGuid) · removeDevices(guids) → ops
 *   syncElectrical(w, storey)   devices on walls follow their wall (res-follow.js); a wall deleted leaves them where they were
 *   deviceSchedule(devs, levels, opts) · circuitSchedule(devs, opts) → { head, rows, total }
 *
 * IFC4: IfcOutlet (POWEROUTLET), IfcSwitchingDevice (TOGGLESWITCH, DIMMERSWITCH, MOMENTARYSWITCH), IfcSensor (MOVEMENTSENSOR),
 * IfcLightFixture (POINTSOURCE, SECURITYLIGHTING), IfcJunctionBox (POWER), IfcElectricDistributionBoard (DISTRIBUTIONBOARD);
 * IFC2X3: IfcFlowTerminal / IfcFlowController / IfcFlowFitting. Placed in the level (x along the wall, +y into the room), a small
 * box body, Tag = the device tag (R1, S1, L1, …). CadCraft_Electrical: Level, Kind (the add-on's symbol key), Circuit, Load (W),
 * MountingHeight (centre for a wall device, the ceiling for a ceiling one), Wall (GlobalId) + Side (1 | −1, the face) + Offset
 * (along the wall from its start), X, Y, Angle (degrees; where it is when not on a wall), Controls (a switch: the GlobalIds of
 * the lights it switches, comma separated). Loads and heights are planning defaults, labelled as such in the help.
 */
import { ModelWriter, round } from './model-write.js';
import { readLevels } from './model-levels.js';
import { readWalls } from './model-walls.js';
import { ids, val } from './ifc-util.js';
import { t as tr } from './i18n.js';
import { SYMBOLS } from './res-elec-symbols.js';
import { isMetric } from './model-units.js';

export const ELEC_PSET = 'CadCraft_Electrical';
const IN = 25.4;
const box = (w, d, h) => ({ w, d, h });
/** Wall devices: body width × depth (out of the wall) × height; ceiling ones: diameter (or length × width) × thickness. */
export const DEVICES = {
  'socket':              { ifc4: ['IFCOUTLET', 'POWEROUTLET'], ifc2: 'IFCFLOWTERMINAL', mount: 'wall', prefix: 'R', height: { ftin: 16 * IN, mm: 300 }, body: box(70, 12, 115) },
  'socket.double':       { ifc4: ['IFCOUTLET', 'POWEROUTLET'], ifc2: 'IFCFLOWTERMINAL', mount: 'wall', prefix: 'R', height: { ftin: 16 * IN, mm: 300 }, body: box(120, 12, 115) },
  'socket.earth':        { ifc4: ['IFCOUTLET', 'POWEROUTLET'], ifc2: 'IFCFLOWTERMINAL', mount: 'wall', prefix: 'R', height: { ftin: 16 * IN, mm: 300 }, body: box(70, 12, 115) },
  'socket.3ph':          { ifc4: ['IFCOUTLET', 'POWEROUTLET'], ifc2: 'IFCFLOWTERMINAL', mount: 'wall', prefix: 'R', height: { ftin: 16 * IN, mm: 300 }, body: box(100, 15, 130) },
  'switch':              { ifc4: ['IFCSWITCHINGDEVICE', 'TOGGLESWITCH'], ifc2: 'IFCFLOWCONTROLLER', mount: 'wall', prefix: 'S', height: { ftin: 48 * IN, mm: 1100 }, body: box(70, 10, 115) },
  'switch.2way':         { ifc4: ['IFCSWITCHINGDEVICE', 'TOGGLESWITCH'], ifc2: 'IFCFLOWCONTROLLER', mount: 'wall', prefix: 'S', height: { ftin: 48 * IN, mm: 1100 }, body: box(70, 10, 115) },
  'switch.dimmer':       { ifc4: ['IFCSWITCHINGDEVICE', 'DIMMERSWITCH'], ifc2: 'IFCFLOWCONTROLLER', mount: 'wall', prefix: 'S', height: { ftin: 48 * IN, mm: 1100 }, body: box(70, 12, 115) },
  'pushbutton':          { ifc4: ['IFCSWITCHINGDEVICE', 'MOMENTARYSWITCH'], ifc2: 'IFCFLOWCONTROLLER', mount: 'wall', prefix: 'S', height: { ftin: 48 * IN, mm: 1100 }, body: box(70, 10, 70) },
  'sensor':              { ifc4: ['IFCSENSOR', 'MOVEMENTSENSOR'], ifc2: 'IFCFLOWCONTROLLER', mount: 'ceiling', prefix: 'M', body: box(110, 110, 40) },
  'luminaire':           { ifc4: ['IFCLIGHTFIXTURE', 'POINTSOURCE'], ifc2: 'IFCFLOWTERMINAL', mount: 'ceiling', prefix: 'L', body: box(300, 300, 80) },
  'downlight':           { ifc4: ['IFCLIGHTFIXTURE', 'POINTSOURCE'], ifc2: 'IFCFLOWTERMINAL', mount: 'ceiling', prefix: 'L', body: box(150, 150, 30) },
  'luminaire.linear':    { ifc4: ['IFCLIGHTFIXTURE', 'POINTSOURCE'], ifc2: 'IFCFLOWTERMINAL', mount: 'ceiling', prefix: 'L', body: box(1200, 150, 60) },
  'luminaire.emergency': { ifc4: ['IFCLIGHTFIXTURE', 'SECURITYLIGHTING'], ifc2: 'IFCFLOWTERMINAL', mount: 'ceiling', prefix: 'L', body: box(300, 120, 60) },
  'junction':            { ifc4: ['IFCJUNCTIONBOX', 'POWER'], ifc2: 'IFCFLOWFITTING', mount: 'ceiling', prefix: 'J', body: box(100, 100, 55) },
  'appliance':           { ifc4: ['IFCOUTLET', 'POWEROUTLET'], ifc2: 'IFCFLOWTERMINAL', mount: 'wall', prefix: 'R', height: { ftin: 16 * IN, mm: 300 }, body: box(110, 18, 130) },
  'board':               { ifc4: ['IFCELECTRICDISTRIBUTIONBOARD', 'DISTRIBUTIONBOARD'], ifc2: 'IFCFLOWCONTROLLER', mount: 'wall', prefix: 'P', height: { ftin: 60 * IN, mm: 1500 }, body: box(360, 100, 760) },  // the Electrical add-on's 0.7 symbols (elec-sync.mjs, 0.7 closing fixes): IFC4 classes with the same nine attributes as above
  'socket.data':         { ifc4: ['IFCOUTLET', 'DATAOUTLET'], ifc2: 'IFCFLOWTERMINAL', mount: 'wall', prefix: 'D', height: { ftin: 16 * IN, mm: 300 }, body: box(70, 12, 115) },
  'socket.tel':          { ifc4: ['IFCOUTLET', 'TELEPHONEOUTLET'], ifc2: 'IFCFLOWTERMINAL', mount: 'wall', prefix: 'D', height: { ftin: 16 * IN, mm: 300 }, body: box(70, 12, 115) },
  'socket.tv':           { ifc4: ['IFCOUTLET', 'AUDIOVISUALOUTLET'], ifc2: 'IFCFLOWTERMINAL', mount: 'wall', prefix: 'D', height: { ftin: 16 * IN, mm: 300 }, body: box(70, 12, 115) },
  'switch.key':          { ifc4: ['IFCSWITCHINGDEVICE', 'SELECTORSWITCH'], ifc2: 'IFCFLOWCONTROLLER', mount: 'wall', prefix: 'S', height: { ftin: 48 * IN, mm: 1100 }, body: box(70, 12, 115) },
  'switch.timer':        { ifc4: ['IFCELECTRICTIMECONTROL', 'TIMECLOCK'], ifc2: 'IFCFLOWCONTROLLER', mount: 'wall', prefix: 'S', height: { ftin: 48 * IN, mm: 1100 }, body: box(70, 15, 115) },
  'thermostat':          { ifc4: ['IFCUNITARYCONTROLELEMENT', 'THERMOSTAT'], ifc2: 'IFCFLOWCONTROLLER', mount: 'wall', prefix: 'T', height: { ftin: 54 * IN, mm: 1500 }, body: box(90, 25, 90) },
  'luminaire.exit':      { ifc4: ['IFCLIGHTFIXTURE', 'SECURITYLIGHTING'], ifc2: 'IFCFLOWTERMINAL', mount: 'ceiling', prefix: 'L', body: box(350, 60, 200) },
  'detector.smoke':      { ifc4: ['IFCSENSOR', 'SMOKESENSOR'], ifc2: 'IFCFLOWCONTROLLER', mount: 'ceiling', prefix: 'A', body: box(110, 110, 50) },
  'detector.heat':       { ifc4: ['IFCSENSOR', 'HEATSENSOR'], ifc2: 'IFCFLOWCONTROLLER', mount: 'ceiling', prefix: 'A', body: box(110, 110, 50) },
  'callpoint':           { ifc4: ['IFCALARM', 'MANUALPULLBOX'], ifc2: 'IFCFLOWTERMINAL', mount: 'wall', prefix: 'A', height: { ftin: 48 * IN, mm: 1400 }, body: box(90, 50, 90) },
  'sounder':             { ifc4: ['IFCALARM', 'SIREN'], ifc2: 'IFCFLOWTERMINAL', mount: 'wall', prefix: 'A', height: { ftin: 84 * IN, mm: 2300 }, body: box(110, 80, 110) },
  'fan':                 { ifc4: ['IFCFAN', 'PROPELLORAXIAL'], ifc2: 'IFCFLOWMOVINGDEVICE', mount: 'ceiling', prefix: 'V', body: box(250, 250, 120) },
  'heater':              { ifc4: ['IFCOUTLET', 'POWEROUTLET'], ifc2: 'IFCFLOWTERMINAL', mount: 'wall', prefix: 'R', height: { ftin: 16 * IN, mm: 300 }, body: box(110, 18, 130) },
  'cooker':              { ifc4: ['IFCOUTLET', 'POWEROUTLET'], ifc2: 'IFCFLOWTERMINAL', mount: 'wall', prefix: 'R', height: { ftin: 16 * IN, mm: 300 }, body: box(150, 25, 150) },
  'evcharger':           { ifc4: ['IFCOUTLET', 'POWEROUTLET'], ifc2: 'IFCFLOWTERMINAL', mount: 'wall', prefix: 'R', height: { ftin: 42 * IN, mm: 1100 }, body: box(250, 120, 350) },
  'meter':               { ifc4: ['IFCFLOWMETER', 'ENERGYMETER'], ifc2: 'IFCFLOWCONTROLLER', mount: 'wall', prefix: 'E', height: { ftin: 60 * IN, mm: 1500 }, body: box(180, 100, 300) },
  'board.sub':           { ifc4: ['IFCELECTRICDISTRIBUTIONBOARD', 'DISTRIBUTIONBOARD'], ifc2: 'IFCFLOWCONTROLLER', mount: 'wall', prefix: 'P', height: { ftin: 60 * IN, mm: 1500 }, body: box(300, 100, 500) },
};
export const KINDS = Object.keys(DEVICES);
const CLASSES = [...new Set(Object.values(DEVICES).flatMap((d) => [d.ifc4[0], d.ifc2]))];
export const isLight = (kind) => /^(luminaire|downlight)/.test(kind);
export const isSwitch = (kind) => /^(switch|pushbutton|sensor)/.test(kind);
/** A panel (the main board or a sub-board): never on a circuit of its own in the schedules. */
export const isBoard = (kind) => /^board/.test(kind);
/** Volts for the circuit schedule's amps: 120 / 240 in a feet-and-inches model, 230 / 400 in a metric one. */
export const voltsOf = (kind, units) => (kind === 'socket.3ph' ? (isMetric(units) ? 400 : 240) : /^(cooker|heater|evcharger)$/.test(kind) ? (isMetric(units) ? 230 : 240) : (isMetric(units) ? 230 : 120));
export function defaultHeight(kind, units, ceiling) {
  const d = DEVICES[kind];
  if (!d) return 0;
  return d.mount === 'ceiling' ? ceiling : d.height[isMetric(units) ? 'mm' : 'ftin'];
}
/** Plan mm per paper mm for the symbols: drawn for a 1:50 plan (1/4" = 1'-0" in feet and inches). */
export const symbolScale = (units) => (isMetric(units) ? 50 : 48);

/** A symbol in the plan: rotated (angle in radians; the symbol's +y points along it), scaled, moved to `at`. */
export function symbolPlan(kind, at, angle, scale) {
  const s = SYMBOLS.find((x) => x.key === kind);
  if (!s) return null;
  // +y of the symbol → the facing direction (cos, sin); +x → its right
  const fx = Math.cos(angle), fy = Math.sin(angle), rx = fy, ry = -fx;
  const P = (x, y) => [at[0] + (x * rx + y * fx) * scale, at[1] + (x * ry + y * fy) * scale];
  const rot = Math.atan2(ry, rx);   // the symbol's 0° (its +x) in the plan
  const lines = [], arcs = [], thin = [];
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  const grow = (q, r = 0) => { x0 = Math.min(x0, q[0] - r); y0 = Math.min(y0, q[1] - r); x1 = Math.max(x1, q[0] + r); y1 = Math.max(y1, q[1] + r); };
  const seg = (list, a, b) => { list.push([a[0], a[1], b[0], b[1]]); grow(a); grow(b); };
  for (const e of s.ents) {
    if (e.type === 'line') seg(lines, P(e.x1, e.y1), P(e.x2, e.y2));
    else if (e.type === 'circle') { const c = P(e.cx, e.cy); arcs.push({ c, r: e.r * scale, a0: 0, a1: Math.PI * 2 }); grow(c, e.r * scale); }
    else if (e.type === 'arc') { const c = P(e.cx, e.cy); const mirror = rx * fy - ry * fx < 0; const a0 = mirror ? rot - e.a1 : rot + e.a0, a1 = mirror ? rot - e.a0 : rot + e.a1; arcs.push({ c, r: e.r * scale, a0, a1 }); grow(c, e.r * scale); }
    else if (e.type === 'poly') { const pts = e.pts.map((q) => P(q.x, q.y)); for (let i = 0; i + 1 < pts.length; i++) seg(lines, pts[i], pts[i + 1]); if (e.closed && pts.length > 2) seg(lines, pts[pts.length - 1], pts[0]); }
    else if (e.type === 'hatch') for (const l of e.loops) { const pts = []; for (let i = 0; i + 1 < l.length; i += 2) pts.push(P(l[i], l[i + 1])); for (let i = 0; i < pts.length; i++) seg(thin, pts[i], pts[(i + 1) % pts.length]); }
  }
  if (!Number.isFinite(x0)) return null;
  const pad = scale * 0.8;
  return { lines, arcs, thin, poly: [[x0 - pad, y0 - pad], [x1 + pad, y0 - pad], [x1 + pad, y1 + pad], [x0 - pad, y1 + pad]], text: s.ents.find((e) => e.type === 'text')?.s || null };
}

/** The nearest wall face within `reach` of p: the device's spot on it and the way it faces (into the room). */
export function wallSpot(walls, p, reach = 600) {
  let best = null;
  for (const w of walls) {
    const d = [w.b[0] - w.a[0], w.b[1] - w.a[1]], L = Math.hypot(...d);
    if (L < 1) continue;
    const u = [d[0] / L, d[1] / L], n = [-u[1], u[0]];
    const s = Math.max(0, Math.min(L, (p[0] - w.a[0]) * u[0] + (p[1] - w.a[1]) * u[1]));
    const off = (p[0] - w.a[0]) * n[0] + (p[1] - w.a[1]) * n[1];
    const side = off >= 0 ? 1 : -1, dist = Math.abs(Math.abs(off) - w.t / 2);
    const along = (p[0] - w.a[0]) * u[0] + (p[1] - w.a[1]) * u[1];
    if (along < -w.t || along > L + w.t || dist > reach) continue;
    if (!best || dist < best.dist) best = { wall: w.guid, side, offset: s, dist, at: spotOn(w, s, side), angle: Math.atan2(n[1] * side, n[0] * side) };
  }
  return best;
}
function spotOn(w, s, side) {
  const d = [w.b[0] - w.a[0], w.b[1] - w.a[1]], L = Math.hypot(...d) || 1, u = [d[0] / L, d[1] / L], n = [-u[1], u[0]];
  return [w.a[0] + u[0] * s + n[0] * side * w.t / 2, w.a[1] + u[1] * s + n[1] * side * w.t / 2];
}

// ------------------------------------------------------------------------------------------------------------ reading
const num = (v, d = 0) => (Number.isFinite(Number(v)) ? Number(v) : d);
export function readDevices(w) {
  const out = [];
  const so = w.storeyOf();
  const seen = new Set();
  for (const cls of CLASSES) {
    let list = [];
    try { list = ids(w.api, w.mid, cls); } catch (e) { continue; }
    for (const id of list) {
      if (seen.has(id)) continue;
      seen.add(id);
      const ps = w.readPset(id, ELEC_PSET);
      if (!ps || !DEVICES[ps.Kind]) continue;
      const l = w.api.GetLine(w.mid, id, false);
      const mm = w.unitMm;
      out.push({ id, guid: val(l.GlobalId), storey: so.get(id) ?? null, level: ps.Level || '', kind: ps.Kind, tag: val(l.Tag) || '', circuit: String(ps.Circuit ?? ''), load: num(ps.Load), height: num(ps.MountingHeight) * mm,
        wall: ps.Wall || '', side: num(ps.Side, 1) < 0 ? -1 : 1, offset: num(ps.Offset) * mm, at: [num(ps.X) * mm, num(ps.Y) * mm], angle: num(ps.Angle) * Math.PI / 180,
        controls: String(ps.Controls || '').split(',').map((x) => x.trim()).filter(Boolean) });
    }
  }
  return out.sort((a, b) => cmpTag(a.tag, b.tag));
}
export function cmpTag(a, b) {
  const m = (s) => /^([A-Za-z]*)(\d*)(.*)$/.exec(String(s)) || ['', s, '', ''];
  const x = m(a), y = m(b);
  return x[1].localeCompare(y[1]) || (Number(x[2]) || 0) - (Number(y[2]) || 0) || String(x[3]).localeCompare(String(y[3]));
}
function nextTag(w, prefix, taken = null) {
  const used = taken || new Set(readDevices(w).map((d) => d.tag));
  for (let i = 1; ; i++) if (!used.has(prefix + i)) return prefix + i;
}
/** The ceiling of a level: its walls' usual height, else the level's height less 300 (a floor's depth). */
function ceilingOf(w, storey) {
  const ws = readWalls(w, storey);
  if (ws.length) { const hs = ws.map((x) => x.height).sort((a, b) => a - b); return hs[Math.floor(hs.length / 2)]; }
  const lv = readLevels(w).find((l) => l.id === storey);
  return Math.max(2000, (lv?.height || 2700) - 300);
}

// ------------------------------------------------------------------------------------------------------------ writing
function writeDevice(w, d, walls) {
  const D = DEVICES[d.kind];
  let at = d.at, ang = d.angle;
  const wall = d.wall ? walls.find((x) => x.guid === d.wall) : null;
  if (wall) { const L = Math.hypot(wall.b[0] - wall.a[0], wall.b[1] - wall.a[1]); const s = Math.min(Math.max(0, d.offset), L); at = spotOn(wall, s, d.side); const n = [-(wall.b[1] - wall.a[1]) / L, (wall.b[0] - wall.a[0]) / L]; ang = Math.atan2(n[1] * d.side, n[0] * d.side); }
  // local axes: x along the wall (the device's right), y out into the room; the placement turns +x to (sin, −cos)·…
  const deg = (ang * 180) / Math.PI - 90;
  const l = w.api.GetLine(w.mid, d.id, false);
  w.movePlacement(l.ObjectPlacement.value, at[0], at[1], 0, deg);
  const b = D.body;
  const solid = D.mount === 'wall' ? w.box(-b.w / 2, 0, d.height - b.h / 2, b.w / 2, b.d, d.height + b.h / 2) : w.box(-b.w / 2, -b.d / 2, d.height - b.h, b.w / 2, b.d / 2, d.height);
  const color = isBoard(d.kind) ? [0.55, 0.57, 0.6] : isLight(d.kind) ? [0.98, 0.95, 0.75] : [0.95, 0.95, 0.93];
  w.styleItem(solid, w.surfaceStyle(tr(isBoard(d.kind) ? 'res.style.panel' : 'res.style.device'), color, 0));
  w.setShape(d.id, [w.rep('body', 'Body', 'SweptSolid', [solid])]);
  w.upsertPset(d.id, ELEC_PSET, [['X', 'IFCLENGTHMEASURE', round(w.u(at[0]))], ['Y', 'IFCLENGTHMEASURE', round(w.u(at[1]))], ['Angle', 'IFCREAL', round((ang * 180) / Math.PI, 4)]]);
  return { at, angle: ang };
}
const op = (fn) => (ed) => new ModelWriter(ed.W, ed.api, ed.mid).run(fn);
const fail = (key) => { throw Object.assign(new Error(key), { key }); };

/** One device written inside a running writer (placeDevice and placeDevices share it). */
function placeIn(w, spec) {
  const s = { ...spec };
  const D = DEVICES[s.kind];
  if (!D) fail('res.err.elkind');
  if (!s.guid) s.guid = val(w.guid());
  const storey = w.byGuid(s.level);
  if (!storey) fail('model.err.nolevel');
  const walls = readWalls(w, storey);
  if (D.mount === 'wall' && !(s.wall && walls.some((x) => x.guid === s.wall))) fail('res.err.elwall');
  const height = Number.isFinite(s.height) && s.height > 0 ? s.height : defaultHeight(s.kind, s.units, ceilingOf(w, storey));
  if (s.tag && readDevices(w).some((x) => x.tag === String(s.tag).slice(0, 20))) fail('res.err.eltag');   // 0.9 GH.10: a typed tag is never given twice
  const tag = String(s.tag || nextTag(w, D.prefix)).slice(0, 20);
  const st = w.api.GetLine(w.mid, storey, false);
  const nm = w.L(tr('res.el.kind.' + s.kind));
  const [cls, en] = w.v4 ? D.ifc4 : [D.ifc2, null];
  const id = w.make(cls, s.guid, w.ownerHistory(), nm, null, w.L(s.kind), w.H(w.placeAt(st.ObjectPlacement.value, 0, 0, 0, 0)), null, w.T('IFCIDENTIFIER', tag), ...(w.v4 ? [en] : []));
  w.noteGuid(s.guid, id);
  w.contain(id, storey);
  const load = Number.isFinite(s.load) ? s.load : (SYMBOLS.find((x) => x.key === s.kind)?.load || 0);
  w.upsertPset(id, ELEC_PSET, [['Level', 'IFCIDENTIFIER', s.level], ['Kind', 'IFCLABEL', s.kind], ['Circuit', 'IFCLABEL', String(s.circuit ?? '')], ['Load', 'IFCPOWERMEASURE', round(load, 3)],
    ['MountingHeight', 'IFCLENGTHMEASURE', round(w.u(height))], ['Wall', 'IFCIDENTIFIER', s.wall || ''], ['Side', 'IFCINTEGER', s.side < 0 ? -1 : 1], ['Offset', 'IFCLENGTHMEASURE', round(w.u(s.offset || 0))], ['Controls', 'IFCTEXT', '']]);
  writeDevice(w, { id, kind: s.kind, at: s.at || [0, 0], angle: s.angle || 0, wall: s.wall || '', side: s.side < 0 ? -1 : 1, offset: s.offset || 0, height }, walls);
  return { id, guid: s.guid };
}
export function placeDevice(spec) {
  return op((w) => {
    const r = placeIn(w, spec);
    return { id: r.id, ids: [r.id], made: new Map([[r.guid, r.id]]) };
  });
}
/** Several devices in ONE change (one undo step); a refusal on any of them undoes all of them. */
export function placeDevices(specs) {
  return op((w) => {
    const made = new Map(), idl = [];
    for (const spec of specs) { const r = placeIn(w, spec); made.set(r.guid, r.id); idl.push(r.id); }
    return { id: idl[0] ?? null, ids: idl, made };
  });
}
export function changeDevice(guid, ch) {
  return op((w) => {
    const d = readDevices(w).find((x) => x.guid === guid);
    if (!d) fail('model.err.gone');
    const rows = [];
    const nx = { ...d };
    if (typeof ch.tag === 'string' && ch.tag.trim()) {
      const tag = ch.tag.trim().slice(0, 20);
      if (readDevices(w).some((x) => x.guid !== guid && x.tag === tag)) fail('res.err.eltag');
      const l = w.touch(d.id); l.Tag = w.T('IFCIDENTIFIER', tag); w.write(l);
    }
    if (typeof ch.circuit === 'string') rows.push(['Circuit', 'IFCLABEL', ch.circuit.trim().slice(0, 20)]);
    if (Number.isFinite(ch.load) && ch.load >= 0) rows.push(['Load', 'IFCPOWERMEASURE', round(ch.load, 3)]);
    if (Number.isFinite(ch.height) && ch.height > 0) { nx.height = ch.height; rows.push(['MountingHeight', 'IFCLENGTHMEASURE', round(w.u(ch.height))]); }
    if (Array.isArray(ch.controls)) {
      if (!isSwitch(d.kind)) fail('res.err.elnotswitch');
      const lights = new Set(readDevices(w).filter((x) => isLight(x.kind)).map((x) => x.guid));
      rows.push(['Controls', 'IFCTEXT', [...new Set(ch.controls)].filter((g) => lights.has(g)).join(',')]);
    }
    // 0.9 GH.10: a new position (and facing) in the level's plan: a device on a wall lands on the nearest wall face like a click does, the others where they are put
    let moved = false;
    if (Array.isArray(ch.at) && ch.at.length === 2 && ch.at.every(Number.isFinite)) {
      const walls = readWalls(w, d.storey);
      if (DEVICES[d.kind].mount === 'wall') {
        const sp = wallSpot(walls.map((x) => ({ guid: x.guid, a: x.a, b: x.b, t: x.t })), ch.at, 600);
        if (!sp) fail('res.err.elwall');
        Object.assign(nx, { at: sp.at, angle: sp.angle, wall: sp.wall, side: sp.side, offset: sp.offset });
        rows.push(['Wall', 'IFCIDENTIFIER', sp.wall], ['Side', 'IFCINTEGER', sp.side], ['Offset', 'IFCLENGTHMEASURE', round(w.u(sp.offset))]);
      } else { nx.at = ch.at.slice(); if (!Number.isFinite(ch.angle)) nx.angle = d.angle; }
      moved = true;
    }
    if (Number.isFinite(ch.angle) && !(ch.at && DEVICES[d.kind].mount === 'wall') && !nx.wall) { nx.angle = ch.angle; moved = true; }
    if (rows.length) w.upsertPset(d.id, ELEC_PSET, rows);
    if (nx.height !== d.height || moved) writeDevice(w, nx, readWalls(w, d.storey));
    return { id: d.id, ids: [d.id] };
  });
}
/** Move a free-standing device by (dx, dy) inside a running writer (model-modify.js); one on a wall follows its wall. */
export function moveDeviceIn(w, guid, dx, dy) {
  const d = readDevices(w).find((x) => x.guid === guid);
  if (!d) fail('model.err.gone');
  if (d.wall) return d.id;
  writeDevice(w, { ...d, at: [d.at[0] + dx, d.at[1] + dy] }, readWalls(w, d.storey));
  return d.id;
}
/** Link a light to a switch, or unlink it when it is linked already. */
export function linkLight(switchGuid, lightGuid) {
  return (ed) => {
    const w = new ModelWriter(ed.W, ed.api, ed.mid);
    const sw = readDevices(w).find((x) => x.guid === switchGuid);
    if (!sw) throw Object.assign(new Error('model.err.gone'), { key: 'model.err.gone' });
    const has = sw.controls.includes(lightGuid);
    return changeDevice(switchGuid, { controls: has ? sw.controls.filter((g) => g !== lightGuid) : [...sw.controls, lightGuid] })(ed);
  };
}
export function removeDevices(guids) {
  return op((w) => {
    const all = readDevices(w);
    const list = all.filter((x) => guids.includes(x.guid));
    // switches forget the lights that go
    for (const s of all) if (!guids.includes(s.guid) && s.controls.some((g) => guids.includes(g))) w.upsertPset(s.id, ELEC_PSET, [['Controls', 'IFCTEXT', s.controls.filter((g) => !guids.includes(g)).join(',')]]);
    if (list.length) w.dropProduct(list.map((x) => x.id));
    return { id: null, ids: [] };
  });
}
/** Devices on walls follow their wall: placed again where the stored side and offset put them now. */
export function syncElectrical(w, storey) {
  const devs = readDevices(w).filter((d) => d.storey === storey && d.wall);
  if (!devs.length) return 0;
  const walls = readWalls(w, storey);
  let n = 0;
  for (const d of devs) {
    const wall = walls.find((x) => x.guid === d.wall);
    if (!wall) continue;
    const L = Math.hypot(wall.b[0] - wall.a[0], wall.b[1] - wall.a[1]);
    const at = spotOn(wall, Math.min(Math.max(0, d.offset), L), d.side);
    if (Math.hypot(at[0] - d.at[0], at[1] - d.at[1]) < 0.5) continue;
    writeDevice(w, d, walls);
    n++;
  }
  return n;
}

// ------------------------------------------------------------------------------------------------------------ schedules
export function deviceSchedule(devs, levels, { fmtLen = (mm) => String(Math.round(mm)), t = tr } = {}) {
  const byGuid = new Map(devs.map((d) => [d.guid, d]));
  const rows = devs.map((d) => [d.tag, t('res.el.kind.' + d.kind), levels.find((l) => l.id === d.storey)?.name || '', d.circuit, d.load ? String(Math.round(d.load)) : '', fmtLen(d.height), d.controls.map((g) => byGuid.get(g)?.tag).filter(Boolean).join(', ')]);
  const watts = devs.reduce((s, d) => s + (d.load || 0), 0);
  return { head: [t('res.el.sch.tag'), t('res.el.sch.device'), t('res.el.sch.level'), t('res.el.sch.circuit'), t('res.el.sch.load'), t('res.el.sch.height'), t('res.el.sch.controls')], rows, total: [t('model.sch.total'), String(devs.length), '', '', String(Math.round(watts)), '', ''] };
}
export function circuitSchedule(devs, { units = 'ftin', t = tr } = {}) {
  const map = new Map();
  for (const d of devs) {
    if (isBoard(d.kind)) continue;
    const c = d.circuit || '';
    if (!map.has(c)) map.set(c, { circuit: c, n: 0, watts: 0, volts: 0, kinds: new Map() });
    const r = map.get(c);
    r.n++; r.watts += d.load || 0; r.volts = Math.max(r.volts, voltsOf(d.kind, units));
    r.kinds.set(d.kind, (r.kinds.get(d.kind) || 0) + 1);
  }
  const list = [...map.values()].sort((a, b) => (a.circuit === '') - (b.circuit === '') || cmpTag(a.circuit, b.circuit));
  const rows = list.map((r) => [r.circuit || t('res.el.nocircuit'), String(r.n), [...r.kinds].map(([k, n]) => n + ' × ' + t('res.el.kind.' + k)).join(', '), String(Math.round(r.watts)), (r.watts / r.volts).toFixed(1), String(r.volts)]);   // i18n-ignore: a count
  const watts = list.reduce((s, r) => s + r.watts, 0);
  return { head: [t('res.el.sch.circuit'), t('res.el.sch.count'), t('res.el.sch.devices'), t('res.el.sch.load'), t('res.el.sch.amps'), t('res.el.sch.volts')], rows, total: [t('model.sch.total'), String(list.reduce((s, r) => s + r.n, 0)), '', String(Math.round(watts)), '', ''] };
}
