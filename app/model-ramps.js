/* SPDX-License-Identifier: Apache-2.0 */
/**
 * model-ramps.js — ramps (0.6 DF.18, session `bim-draw`): a straight ramp of sloped flights with level landings between them,
 * from one level to the level above or up a given rise. No DOM: bin/test-bimcraft.mjs --draw06 runs it in Node. Plan mm in
 * the storey's own axes.
 *
 * Layout (`rampLayout`): from `start` (the middle of the bottom edge) along `angle`; the rise is split into flights of at
 * most `maxRise` each (760 mm / 30", a planning value) with a landing `landing` long (1525 mm / 5') between them. Set by
 * slope (run = rise × `slope`, 1:12 by default; the second click gives only the direction) or by length (the second click
 * gives the run, landings included; the slope follows, and is flagged when steeper than 1:12).
 *
 * IFC: IfcRamp (IFC4 .STRAIGHT_RUN_RAMP. for one flight, .TWO_STRAIGHT_RUN_RAMP. for two, else .USERDEFINED. "Straight ramp
 * with landings"; IFC2X3 ShapeType the same) contained in its level, aggregating one IfcRampFlight per flight (IFC4
 * .STRAIGHT.; an extruded side profile: a sloped slab `thickness` deep, across the width) and an IfcSlab .LANDING. per landing;
 * Concrete; Pset_RampCommon (RequiredSlope, IsExternal false), Pset_RampFlightCommon on each flight (ClearWidth, Slope in
 * radians, the project's angle unit); CadCraft_Ramp (StartX, StartY, Angle, Width, Rise (fixed), TopLevel, Mode slope | length,
 * Slope (run per unit of rise), Length, Thickness, MaxRise, Landing, RiseUsed, RunUsed, Steep).
 * Follows its top level's height: syncRamps (res-follow.js).
 *
 *   RAMP_DEFAULTS, rampLayout(spec, rise) → { pieces: [{ kind: 'flight' | 'landing', s0, s1, z0, z1 }], run, slope, steep,
 *   outline, arrow }   (s along the ramp from its start, z above the level)
 *   readRamps(w) · placeRamp(spec) → op · changeRamp(guid, ch) → op · removeRamps(guids) → op · syncRamps(w, storey)
 *   Errors: model.err.ramp.rise (no rise: no level above and none typed), model.err.ramp.width, model.err.ramp.short.
 */
import { op } from './model-ops.js';
import { readLevels } from './model-levels.js';
import { ids, val } from './ifc-util.js';
import { round } from './model-write.js';
import { t as tr } from './i18n.js';

export const RAMP_PSET = 'CadCraft_Ramp';
const IN = 25.4;
export const RAMP_DEFAULTS = { width: 48 * IN, slope: 12, maxRise: 30 * IN, landing: 60 * IN, thickness: 6 * IN, mode: 'slope', rise: 0, topLevel: '', length: 0, angle: 0 };
const refuse = (key) => { throw Object.assign(new Error(key), { key }); };

export function rampLayout(spec, rise) {
  const s = { ...RAMP_DEFAULTS, ...spec };
  const n = Math.max(1, Math.ceil(rise / s.maxRise - 1e-9));
  const landings = n - 1;
  let flightRun, slope;
  if (s.mode === 'length') {
    flightRun = (s.length - landings * s.landing) / n;
    if (!(flightRun > 0)) return { error: 'model.err.ramp.short' };
    slope = flightRun / (rise / n);
  } else { slope = s.slope; flightRun = rise / n * slope; }
  const pieces = [];
  let sPos = 0, z = 0;
  for (let i = 0; i < n; i++) {
    pieces.push({ kind: 'flight', s0: sPos, s1: sPos + flightRun, z0: z, z1: z + rise / n });
    sPos += flightRun; z += rise / n;
    if (i < n - 1) { pieces.push({ kind: 'landing', s0: sPos, s1: sPos + s.landing, z0: z, z1: z }); sPos += s.landing; }
  }
  const a = (s.angle || 0) * Math.PI / 180, u = [Math.cos(a), Math.sin(a)], l = [-u[1], u[0]], hw = s.width / 2, st = s.start || [0, 0];
  const P = (along, across) => [st[0] + u[0] * along + l[0] * across, st[1] + u[1] * along + l[1] * across];
  return { pieces, run: sPos, slope, steep: slope < 12 - 1e-9, outline: [P(0, -hw), P(sPos, -hw), P(sPos, hw), P(0, hw)], arrow: [P(0, 0), P(sPos, 0)], P, u, l };
}

export function readRamps(w) {
  const out = [];
  let list = [];
  try { list = ids(w.api, w.mid, 'IFCRAMP'); } catch (e) { return out; }
  const so = w.storeyOf();
  for (const id of list) {
    const ps = w.readPset(id, RAMP_PSET);
    if (!ps) continue;
    const mm = (v) => (Number(v) || 0) * w.unitMm;
    out.push({
      id, guid: val(w.api.GetLine(w.mid, id, false).GlobalId), storey: so.get(id), start: [mm(ps.StartX), mm(ps.StartY)], angle: Number(ps.Angle) || 0,
      width: mm(ps.Width), rise: mm(ps.Rise), topLevel: String(ps.TopLevel || ''), mode: ps.Mode === 'length' ? 'length' : 'slope', slope: Number(ps.Slope) || 12,
      length: mm(ps.Length), thickness: mm(ps.Thickness), maxRise: mm(ps.MaxRise), landing: mm(ps.Landing), riseUsed: mm(ps.RiseUsed), runUsed: mm(ps.RunUsed),
      steep: String(ps.Steep) === 'true', parts: aggKids(w, id),
    });
  }
  return out;
}
function aggKids(w, id) {
  for (const rid of ids(w.api, w.mid, 'IFCRELAGGREGATES')) { const r = w.api.GetLine(w.mid, rid, false); if (r.RelatingObject?.value === id) return (r.RelatedObjects || []).map((h) => h.value); }
  return [];
}
function riseOf(w, r) {
  if (r.topLevel) {
    const L = readLevels(w), me = L.find((l) => l.id === r.storey), top = L.find((l) => l.guid === r.topLevel);
    if (me && top && top.elevation > me.elevation) return top.elevation - me.elevation;
  }
  return r.rise > 0 ? r.rise : 0;
}

/** The ramp's parts again (its flights and landings), its sets and quantities. */
function writeRamp(w, r) {
  if (!(r.width >= 300)) refuse('model.err.ramp.width');
  const rise = riseOf(w, r);
  if (!(rise >= 10)) refuse('model.err.ramp.rise');
  const L = rampLayout(r, rise);
  if (L.error) refuse(L.error);
  // the old parts go (relations, shapes, sets)
  const old = aggKids(w, r.id);
  if (old.length) w.dropProduct(old);
  const st = w.api.GetLine(w.mid, r.storey, false), lp = st.ObjectPlacement.value;
  const conc = w.material(tr('model.mat.concrete'));
  const kids = [];
  const zDir = [L.u[1], -L.u[0], 0], xDir = [L.u[0], L.u[1], 0];   // frame: X up the ramp, Z across it (to the right), so Y is up
  for (const pc of L.pieces) {
    const name = w.L(tr(pc.kind === 'flight' ? 'model.ramp.flight' : 'model.ramp.landing'));
    let id;
    if (pc.kind === 'flight') {
      id = w.make('IFCRAMPFLIGHT', w.guid(), w.ownerHistory(), name, null, null, w.H(w.placeAt(lp, 0, 0, 0, 0)), null, null, ...(w.v4 ? ['STRAIGHT'] : []));
      const o = L.P(pc.s0, r.width / 2);   // the left edge at the flight's foot; the profile is extruded to the right
      const len = pc.s1 - pc.s0, t = r.thickness;
      const prof = w.profile([[0, 0], [len, pc.z1 - pc.z0], [len, pc.z1 - pc.z0 - t], [0, -t]]);
      w.setShape(id, [w.rep('body', 'Body', 'SweptSolid', [w.extrudeAt(prof, w.axisFrame([o[0], o[1], pc.z0], zDir, xDir), r.width)])]);
      w.upsertPset(id, 'Pset_RampFlightCommon', [['ClearWidth', 'IFCPOSITIVELENGTHMEASURE', round(w.u(r.width))], ['Slope', 'IFCPLANEANGLEMEASURE', round(Math.atan((pc.z1 - pc.z0) / len), 9)]]);
      w.upsertQto(id, 'Qto_RampFlightBaseQuantities', [['Length', 'length', Math.hypot(len, pc.z1 - pc.z0)], ['Width', 'length', r.width], ['GrossVolume', 'volume', Math.hypot(len, pc.z1 - pc.z0) * r.width * t]]);
    } else {
      id = w.make('IFCSLAB', w.guid(), w.ownerHistory(), name, null, name, w.H(w.placeAt(lp, 0, 0, 0, 0)), null, null, 'LANDING');
      const q = [L.P(pc.s0, -r.width / 2), L.P(pc.s1, -r.width / 2), L.P(pc.s1, r.width / 2), L.P(pc.s0, r.width / 2)];
      w.setShape(id, [w.rep('body', 'Body', 'SweptSolid', [w.extrude(w.profile(q), pc.z0 - r.thickness, r.thickness)])]);
      w.upsertQto(id, 'Qto_SlabBaseQuantities', [['Width', 'length', r.thickness], ['GrossArea', 'area', (pc.s1 - pc.s0) * r.width]]);
    }
    w.associateMaterial(id, conc);
    kids.push(id);
  }
  w.make('IFCRELAGGREGATES', w.guid(), w.ownerHistory(), null, null, w.H(r.id), kids.map((k) => w.H(k)));
  const nF = L.pieces.filter((p) => p.kind === 'flight').length;
  const type = nF === 1 ? 'STRAIGHT_RUN_RAMP' : nF === 2 ? 'TWO_STRAIGHT_RUN_RAMP' : 'USERDEFINED';
  const line = w.touch(r.id);
  if (w.v4) line.PredefinedType = type; else line.ShapeType = type === 'USERDEFINED' ? 'NOTDEFINED' : type;
  line.ObjectType = type === 'USERDEFINED' ? w.L('Straight ramp with landings') : null;   // i18n-ignore: IFC ObjectType
  w.write(line);
  w.upsertPset(r.id, 'Pset_RampCommon', [['RequiredSlope', 'IFCPLANEANGLEMEASURE', round(Math.atan(1 / L.slope), 9)], ['IsExternal', 'IFCBOOLEAN', false]]);
  const Lm = (k, v) => [k, 'IFCLENGTHMEASURE', round(w.u(v || 0))];
  w.upsertPset(r.id, RAMP_PSET, [Lm('StartX', r.start[0]), Lm('StartY', r.start[1]), ['Angle', 'IFCREAL', round(r.angle || 0, 6)], Lm('Width', r.width), Lm('Rise', r.rise),
    ['TopLevel', 'IFCLABEL', r.topLevel || ''], ['Mode', 'IFCLABEL', r.mode], ['Slope', 'IFCREAL', round(L.slope, 6)], Lm('Length', r.mode === 'length' ? r.length : L.run),
    Lm('Thickness', r.thickness), Lm('MaxRise', r.maxRise), Lm('Landing', r.landing), Lm('RiseUsed', rise), Lm('RunUsed', L.run), ['Steep', 'IFCBOOLEAN', !!L.steep]]);
  return L;
}

export function placeRamp(spec) {
  const s = { ...RAMP_DEFAULTS, ...spec, start: [spec.start[0], spec.start[1]] };
  return op((w) => {
    const storey = w.byGuid(s.storey);
    if (!storey) refuse('model.err.nolevel');
    const st = w.api.GetLine(w.mid, storey, false);
    const g = w.gid(s.guid); s.guid = g;
    const name = w.L(tr('model.ramp'));
    const id = w.v4
      ? w.make('IFCRAMP', g, w.ownerHistory(), name, null, null, w.H(w.placeAt(st.ObjectPlacement.value, 0, 0, 0, 0)), null, null, 'STRAIGHT_RUN_RAMP')
      : w.make('IFCRAMP', g, w.ownerHistory(), name, null, null, w.H(w.placeAt(st.ObjectPlacement.value, 0, 0, 0, 0)), null, null, 'STRAIGHT_RUN_RAMP');
    w.noteGuid(g, id);
    w.contain(id, storey);
    writeRamp(w, { ...s, id, storey });
    return { id, ids: [id], made: new Map([[g, id]]) };
  });
}

export function changeRamp(guid, ch) {
  const c = { ...ch };
  return op((w) => {
    const r = readRamps(w).find((x) => x.guid === guid);
    if (!r) refuse('model.err.ramp.none');
    writeRamp(w, { ...r, ...c });
    return { id: r.id, ids: [r.id] };
  });
}

/** Move a ramp by (dx, dy) inside a running writer (model-modify.js). */
export function moveRampIn(w, guid, dx, dy) {
  const r = readRamps(w).find((x) => x.guid === guid);
  if (!r) refuse('model.err.ramp.none');
  writeRamp(w, { ...r, start: [r.start[0] + dx, r.start[1] + dy] });
  return r.id;
}
export function removeRamps(guids) {
  return op((w) => {
    const rs = readRamps(w).filter((r) => guids.includes(r.guid));
    const list = rs.flatMap((r) => [r.id, ...r.parts]);
    if (list.length) w.dropProduct(list);
    return { id: null, ids: [] };
  });
}

/** Ramps whose rise follows a level that moved: made again. */
export function syncRamps(w, storey) {
  let n = 0, rs = [];
  try { rs = readRamps(w); } catch (e) { return 0; }
  for (const r of rs) if (r.topLevel && Math.abs(riseOf(w, r) - r.riseUsed) > 0.5) { writeRamp(w, r); n++; }
  void storey;
  return n;
}
