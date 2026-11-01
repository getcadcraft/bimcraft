/* SPDX-License-Identifier: Apache-2.0 */
/**
 * energy-ep.js — an EnergyPlus input file (IDF) from a BimCraft model, and the reading of what EnergyPlus writes back (0.8 EG.13, session
 * `energy_PART_2`; the 0.7 spike was tools/bim-ops/idf-spike.mjs, docs/spikes/LC.20-energyplus.md). DOM-free. The engine itself is energy-ep-run.js;
 * nothing here runs it. A checked answer next to the quick design aid of energy-bim.js, not a compliance tool.
 *
 *   idfFromModel(W, api, mid, { g, e, uMap, inputs, site, name, mode, mass, gains }) → { text, zones, surfaces, windows, skipped: [why…], zoneOf: Map(ZONE NAME → room) , notes: [key…] }
 *     g = daylight-bim.js gatherRooms(…, { keep: true }); e = energy-bim.js gatherEnergy; uMap = uValues; inputs = energy INPUTS
 *     mode  'design' (default): two design days, ideal loads, no weather file → each zone's design heating and cooling load
 *           'year': the same model run for a year on a weather file the person brings (-w), ideal loads, heating and cooling energy per zone
 *     mass  true: a wall, roof or floor whose largest element has known material layers (uValues source 'layers') is written layer by layer with
 *           density and specific heat (EP_THERMAL, typical values by keyword) so it has thermal mass; others stay "no mass" at their U-value.
 *           The layers are taken in the order the file lists them, outside first (said in `notes`).
 *     gains true (default for 'year'): people, lights and equipment per m² of floor from the inputs, always on (no schedule is invented)
 *   One zone per room; each room's own shell merged into one polygon per plane; each surface's boundary from a ray at its centre (Outdoors, Ground
 *   on the lowest level, Adiabatic toward another room at the same temperature); windows on the wall they face (SimpleGlazingSystem); infiltration at
 *   the air changes; ideal loads so EnergyPlus sizes and reports each zone.
 *   parseErr(text)        → { completed, fatal, severe, warnings, messages: [first severe/fatal lines] }       eplusout.err
 *   parseSizing(eio)      → Map(ZONE NAME → { heating, cooling })  design loads in W                          eplusout.eio "Zone Sizing Information"
 *   parseEso(text)        → Map("KEY|Variable [unit]" → value) for RunPeriod records                          eplusout.eso
 *   yearByZone(map)       → Map(ZONE NAME → { heating, cooling })  kWh                                         from parseEso
 *   compareDesign(ep, ours, zoneOf) → rows [{ room, name, ep: { heating, cooling }, ours: { heating, cooling }, dHeating, dCooling }]  (ratios)
 *   problemsEp(cmp, err)  → Problems in the shared shape, source `bimcraft.energy.ep` (rule 29)
 */
import { INPUTS, gatherEnergy, uValues, loads } from './energy-bim.js';
import { gatherRooms } from './daylight-bim.js';
import { siteOf } from './daylight-bim-sky.js';

export const EP_VERSION = '26.2.0';
/** The words the help may use for the engine; the name is DOE's (clause 4 of its licence): "EnergyPlus version X", never in marketing without consent. */
export const EP_NAME = 'EnergyPlus version ' + EP_VERSION;
/** Density (kg/m³) and specific heat (J/kgK) by a keyword in the material's name: typical published values; the first keyword found wins. */
export const EP_THERMAL = Object.freeze([
  ['mineral wool', 30, 840], ['glass wool', 20, 840], ['rock wool', 60, 840], ['insulation', 30, 1030], ['eps', 20, 1450], ['xps', 35, 1450], ['pir', 30, 1400], ['pur', 30, 1400], ['polyurethane', 30, 1400],   // i18n-ignore: material keywords matched against names in the file
  ['aerated', 600, 1000], ['aac', 600, 1000], ['brick', 1800, 840], ['concrete', 2300, 880], ['screed', 2000, 840], ['block', 1400, 840], ['stone', 2600, 840], ['plasterboard', 900, 1000], ['plaster', 1300, 840], ['gypsum', 900, 1000],
  ['timber', 500, 1600], ['wood', 500, 1600], ['plywood', 600, 1600], ['osb', 600, 1700], ['clt', 470, 1600], ['steel', 7800, 450], ['aluminium', 2700, 900], ['aluminum', 2700, 900], ['glass', 2500, 750], ['gravel', 1800, 840], ['membrane', 1100, 1000], ['bitumen', 1100, 1000],
]);
export const EP_DEFAULT_THERMAL = Object.freeze({ density: 1500, cp: 900 });
const thermalOf = (name) => { const n = String(name || '').toLowerCase(); const k = EP_THERMAL.find(([w]) => n.includes(w)); return k ? { density: k[1], cp: k[2] } : EP_DEFAULT_THERMAL; };

const f = (x, d = 4) => (Number.isFinite(x) ? (Math.round(x * 10 ** d) / 10 ** d).toString() : '0');
const obj = (type, fields) => type + ',\n' + fields.map((v, i) => '  ' + String(v ?? '') + (i === fields.length - 1 ? ';' : ',')).join('\n') + '\n';
const nm = (s) => String(s).replace(/[,;!\n\r]/g, ' ').trim().slice(0, 90) || 'x';

function planes(tr) {
  const groups = new Map();
  for (let i = 0; i + 8 < tr.length; i += 9) {
    const A = [tr[i], tr[i + 1], tr[i + 2]], B = [tr[i + 3], tr[i + 4], tr[i + 5]], C = [tr[i + 6], tr[i + 7], tr[i + 8]];
    const ab = B.map((v, k) => v - A[k]), ac = C.map((v, k) => v - A[k]);
    const n = [ab[1] * ac[2] - ab[2] * ac[1], ab[2] * ac[0] - ab[0] * ac[2], ab[0] * ac[1] - ab[1] * ac[0]];
    const l = Math.hypot(...n);
    if (l < 1e-9) continue;
    const u = n.map((v) => v / l), d = u[0] * A[0] + u[1] * A[1] + u[2] * A[2];
    const key = u.map((v) => Math.round(v * 1000)).join(',') + '|' + Math.round(d * 1000);
    if (!groups.has(key)) groups.set(key, { n: u, tris: [] });
    groups.get(key).tris.push([A, B, C]);
  }
  return [...groups.values()];
}
/** One loop from a group's triangles (edges used once, chained), or null when it is not a single simple loop. */
function loop(tris) {
  const k = (p) => p.map((v) => Math.round(v * 10000)).join(',');
  const pts = new Map(), use = new Map();
  for (const t of tris) for (let i = 0; i < 3; i++) { const a = t[i], b = t[(i + 1) % 3]; pts.set(k(a), a); pts.set(k(b), b); const e = [k(a), k(b)].sort().join('|'); use.set(e, (use.get(e) || 0) + 1); }
  const next = new Map();
  for (const t of tris) for (let i = 0; i < 3; i++) { const a = k(t[i]), b = k(t[(i + 1) % 3]); if (use.get([a, b].sort().join('|')) === 1) { if (next.has(a)) return null; next.set(a, b); } }
  if (next.size < 3) return null;
  const start = next.keys().next().value, out = [];
  let at = start;
  for (let i = 0; i <= next.size; i++) { out.push(pts.get(at)); at = next.get(at); if (at === undefined) return null; if (at === start) break; }
  if (out.length !== next.size) return null;
  // drop points in a straight line
  return out.filter((p, i) => { const a = out[(i + out.length - 1) % out.length], b = out[(i + 1) % out.length]; const u = p.map((v, j) => v - a[j]), w = b.map((v, j) => v - p[j]); const c = [u[1] * w[2] - u[2] * w[1], u[2] * w[0] - u[0] * w[2], u[0] * w[1] - u[1] * w[0]]; return Math.hypot(...c) > 1e-9; });
}
const newell = (P) => { const n = [0, 0, 0]; for (let i = 0; i < P.length; i++) { const a = P[i], b = P[(i + 1) % P.length]; n[0] += (a[1] - b[1]) * (a[2] + b[2]); n[1] += (a[2] - b[2]) * (a[0] + b[0]); n[2] += (a[0] - b[0]) * (a[1] + b[1]); } return n; };
const ccwAbout = (P, out) => { const n = newell(P); return n[0] * out[0] + n[1] * out[1] + n[2] * out[2] >= 0 ? P : P.slice().reverse(); };

export function idfFromModel(W, api, mid, { g, e, uMap, inputs = {}, site = null, name = 'BimCraft model', mode = 'design', mass = false, gains = mode === 'year' } = {}) {
  const I = { ...INPUTS, ...inputs }, skipped = [], notes = [];
  const lat = site?.lat ?? 51.5, lon = site?.lon ?? 0, tz = Math.round(lon / 15);
  const roomById = new Map(e.rooms.map((r) => [r.id, r]));
  const prods = g.prods, spaces = [...prods].filter(([, p]) => p.cls === 'IFCSPACE');
  if (!site) notes.push('ep.note.nosite');
  // constructions: by U (one NoMass material each, surface resistances as energy-bim.js uses them), or layer by layer when `mass` and the element has known layers
  const cons = new Map(), layered = new Map(), materials = new Map();
  const consFor = (u, kind) => {
    const key = kind + ':' + f(u, 3);
    if (!cons.has(key)) { const rs = kind === 'roof' ? 0.14 : kind === 'floor' ? 0.21 : 0.17; cons.set(key, { name: 'C ' + key, kind, r: Math.max(0.001, 1 / u - rs), u }); }
    return cons.get(key).name;
  };
  const layersFor = (er, pred) => {   // the largest element of that kind in the room that has known layers
    if (!mass) return null;
    let best = null;
    for (const p of er.parts) { const u = p.id !== null && pred(p) ? uMap.get(p.id) : null; if (u?.layers?.length && u.layers.every((x) => x.known && x.d > 0) && (!best || p.area > best.area)) best = { area: p.area, id: p.id, layers: u.layers }; }
    if (!best) return null;
    const key = 'L ' + best.layers.map((x) => nm(x.name) + f(x.d, 4)).join('/');
    if (!layered.has(key)) {
      const names = best.layers.map((x, i) => {
        const mn = nm('M ' + x.name + ' ' + f(x.d * 1000, 1) + ' mm ' + (layered.size + 1) + '.' + i), th = thermalOf(x.name);
        materials.set(mn, obj('Material', [mn, 'MediumRough', f(x.d, 4), f(x.lambda, 4), f(th.density, 0), f(th.cp, 0), '0.9', '0.7', '0.7']));
        return mn;
      });
      layered.set(key, { name: nm(key).slice(0, 80) + ' ' + (layered.size + 1), layers: names });
    }
    return layered.get(key).name;
  };
  if (mass) notes.push('ep.note.layers');
  let text = '! EnergyPlus input written by BimCraft (0.8 EG.13): ' + nm(name) + '\n! A design aid\'s second opinion, not a code-compliance calculation.\n\n';
  text += obj('Version', [EP_VERSION.split('.').slice(0, 2).join('.')]);
  // run for design days only (sizing), or sizing and a weather-file run period
  text += obj('SimulationControl', ['Yes', 'No', 'No', 'Yes', mode === 'year' ? 'Yes' : 'No', 'No', '1']);
  text += obj('Building', [nm(name), '0', 'Suburbs', '0.04', '0.4', 'FullExterior', '25', '6']);
  text += obj('Timestep', ['4']);
  text += obj('Site:Location', ['Site', f(lat), f(lon), tz, f(site?.elevation ?? 0, 1)]);
  text += obj('Site:GroundTemperature:BuildingSurface', Array(12).fill(f(I.tg, 1)));
  // SizingPeriod:DesignDay, field by field as the v26.2 IDD has them: 1 name … 5 max dry-bulb, 6 range, 9 humidity type, 10 wet-bulb,
  // 15 pressure, 16 wind, 17 direction, 18–20 rain / snow / DST, 21 solar model, 26 sky clearness (0 = no sun: the heating day)
  const dd = (nmx, month, day, type, tMax, range, wb, clear) => obj('SizingPeriod:DesignDay', [nmx, month, day, type, f(tMax, 1), f(range, 1), '', '', 'WetBulb', f(wb, 1), '', '', '', '', '101325', '3', '0', 'No', 'No', 'No', 'ASHRAEClearSky', '', '', '', '', f(clear, 2)]);
  text += dd('Heating design day', 1, 21, 'WinterDesignDay', I.te, 0, I.te, 0);
  text += dd('Cooling design day', 7, 21, 'SummerDesignDay', I.teSummer, 8, I.teSummer - 8, 1);
  if (mode === 'year') text += obj('RunPeriod', ['Year', '1', '1', '', '12', '31', '', 'UseWeatherFile', 'Yes', 'Yes', 'No', 'Yes', 'Yes']);
  text += obj('GlobalGeometryRules', ['UpperLeftCorner', 'Counterclockwise', 'World']);
  text += obj('ScheduleTypeLimits', ['Any', '', '', 'Continuous']);
  text += obj('Schedule:Constant', ['Always on', 'Any', '1']);
  text += obj('Schedule:Constant', ['Heating setpoint', 'Any', f(I.ti, 1)]);
  text += obj('Schedule:Constant', ['Cooling setpoint', 'Any', f(I.tiCool, 1)]);
  text += obj('Schedule:Constant', ['Control type', 'Any', '4']);   // 4 = dual setpoint
  text += obj('Schedule:Constant', ['People activity', 'Any', f(I.wPerson, 1)]);
  text += obj('ThermostatSetpoint:DualSetpoint', ['Setpoints', 'Heating setpoint', 'Cooling setpoint']);
  let surfaces = 0, windows = 0;
  const zoneOf = new Map(), ideal = [];
  const lowestZ = Math.min(...spaces.map(([, p]) => p.box.lo[2]));
  const glazing = obj('WindowMaterial:SimpleGlazingSystem', ['Glazing', '1.4', '0.6', '0.7']) + obj('Construction', ['C window', 'Glazing']);
  let body = '';
  for (const r of g.rooms) {
    const er = roomById.get(r.id), sp = prods.get(r.id);
    if (!er || !sp) { skipped.push('room ' + (r.name || r.id) + ': no geometry'); continue; }
    const zone = nm('Zone ' + (r.name || r.id) + ' ' + r.id);
    zoneOf.set(zone.toUpperCase(), { id: r.id, name: r.name || String(r.id) });
    body += obj('Zone', [zone, '0', '0', '0', '0', '1', '1', 'autocalculate', 'autocalculate']);
    // the room's U-values by exposure, area-weighted from the energy reading (walls / roof / floor), for its surfaces
    const isWall = (p) => /WALL|PLATE|CURTAIN/.test(p.cls) && p.exposure === 'outside', isRoof = (p) => /SLAB|ROOF|COVERING/.test(p.cls) && p.exposure === 'outside', isFloor = (p) => p.exposure === 'ground';
    const avgU = (pred) => { let a = 0, ua = 0; for (const p of er.parts) if (p.id !== null && pred(p)) { const u = uMap.get(p.id)?.u ?? 0.3; a += p.area; ua += p.area * u; } return a > 0 ? ua / a : null; };
    const uWall = avgU(isWall) ?? 0.3, uRoof = avgU(isRoof) ?? 0.2, uFloor = avgU(isFloor) ?? 0.25;
    const mWall = layersFor(er, isWall), mRoof = layersFor(er, isRoof), mFloor = layersFor(er, isFloor);
    const c = [(sp.box.lo[0] + sp.box.hi[0]) / 2, (sp.box.lo[1] + sp.box.hi[1]) / 2, (sp.box.lo[2] + sp.box.hi[2]) / 2];
    const wallSurfaces = [];
    for (const pl of planes(sp.tr)) {
      let n = pl.n;
      const p0 = pl.tris[0][0];
      if ((p0[0] - c[0]) * n[0] + (p0[1] - c[1]) * n[1] + (p0[2] - c[2]) * n[2] < 0) n = n.map((v) => -v);
      const L = loop(pl.tris);
      const polys = L && L.length >= 3 ? [L] : pl.tris;
      if (!L) skipped.push(zone + ': a face kept as ' + pl.tris.length + ' triangles');
      for (const P0 of polys) {
        const P = ccwAbout(P0, n);
        const kind = n[2] > 0.7 ? 'Roof' : n[2] < -0.7 ? 'Floor' : 'Wall';
        const ground = kind === 'Floor' && sp.box.lo[2] <= lowestZ + 0.3;
        const cen = P.reduce((s, q) => s.map((v, k) => v + q[k] / P.length), [0, 0, 0]);
        const probe = cen.map((v, k) => v + n[k] * 0.6);
        const next = spaces.find(([id, q]) => id !== r.id && probe[0] >= q.box.lo[0] && probe[0] <= q.box.hi[0] && probe[1] >= q.box.lo[1] && probe[1] <= q.box.hi[1] && probe[2] >= q.box.lo[2] && probe[2] <= q.box.hi[2]);
        const bc = next ? 'Adiabatic' : ground ? 'Ground' : 'Outdoors';
        const u = kind === 'Wall' ? uWall : kind === 'Roof' ? uRoof : uFloor;
        const lay = kind === 'Wall' ? mWall : kind === 'Roof' ? mRoof : mFloor;
        const sname = nm(zone + ' ' + kind + ' ' + (++surfaces));
        body += obj('BuildingSurface:Detailed', [sname, kind, lay && bc !== 'Adiabatic' ? lay : consFor(u, kind.toLowerCase()), zone, '', bc, '', bc === 'Outdoors' ? 'SunExposed' : 'NoSun', bc === 'Outdoors' ? 'WindExposed' : 'NoWind', 'autocalculate', P.length, ...P.flatMap((q) => [f(q[0]), f(q[1]), f(q[2])])]);
        if (kind === 'Wall' && bc === 'Outdoors') wallSurfaces.push({ name: sname, n, P, d: n[0] * P[0][0] + n[1] * P[0][1] + n[2] * P[0][2] });
      }
    }
    // windows on the outside wall they face (projected onto that wall's plane)
    for (const w of r.windows) {
      const wall = wallSurfaces.filter((s) => s.n[0] * w.n[0] + s.n[1] * w.n[1] > 0.99).map((s) => ({ s, dist: Math.abs(s.n[0] * w.origin[0] + s.n[1] * w.origin[1] + s.n[2] * w.origin[2] - s.d) })).sort((a, b) => a.dist - b.dist)[0];
      if (!wall || wall.dist > 0.8) { skipped.push('window ' + (w.name || w.id) + ': no outside wall of its room faces it'); continue; }
      const k = Math.sqrt(w.area / Math.max(1e-9, (w.span[1] - w.span[0]) * w.hz)), mid2 = (w.span[0] + w.span[1]) / 2, hw = (w.span[1] - w.span[0]) * k / 2, hh = w.hz * k / 2;
      const cc = [w.origin[0] + w.s[0] * mid2, w.origin[1] + w.s[1] * mid2, w.origin[2]];
      const onWall = (p) => { const t = wall.s.n[0] * p[0] + wall.s.n[1] * p[1] + wall.s.n[2] * p[2] - wall.s.d; return p.map((v, j) => v - wall.s.n[j] * t); };
      const corners = [[-hw, hh], [-hw, -hh], [hw, -hh], [hw, hh]].map(([a, b]) => onWall([cc[0] + w.s[0] * a, cc[1] + w.s[1] * a, cc[2] + b]));
      const P = ccwAbout(corners, wall.s.n);
      body += obj('FenestrationSurface:Detailed', [nm(zone + ' Window ' + (++windows)), 'Window', 'C window', wall.s.name, '', 'autocalculate', '', '1', 4, ...P.flatMap((q) => [f(q[0]), f(q[1]), f(q[2])])]);
    }
    body += obj('ZoneInfiltration:DesignFlowRate', [nm(zone + ' air'), zone, 'Always on', 'AirChanges/Hour', '', '', '', f(I.ach, 3), '1', '0', '0', '0']);
    if (gains && er.floorArea > 0) {
      body += obj('People', [nm(zone + ' people'), zone, 'Always on', 'Area/Person', '', '', f(I.perPerson, 2), '0.3', 'autocalculate', 'People activity']);
      body += obj('Lights', [nm(zone + ' lights'), zone, 'Always on', 'Watts/Area', '', f(I.wLights, 2), '', '0', '0.2', '0.6', '0']);
      body += obj('ElectricEquipment', [nm(zone + ' equipment'), zone, 'Always on', 'Watts/Area', '', f(I.wEquip, 2), '', '0', '0.3', '0']);
    }
    body += obj('ZoneControl:Thermostat', [nm(zone + ' thermostat'), zone, 'Control type', 'ThermostatSetpoint:DualSetpoint', 'Setpoints']);
    body += obj('Sizing:Zone', [zone, 'SupplyAirTemperature', '14', '', 'SupplyAirTemperature', '50', '', '0.009', '0.004', '', '1.0', '1.0']);
    body += obj('ZoneHVAC:EquipmentConnections', [zone, nm(zone + ' equipment list'), nm(zone + ' supply'), '', nm(zone + ' node'), nm(zone + ' return')]);
    body += obj('ZoneHVAC:EquipmentList', [nm(zone + ' equipment list'), 'SequentialLoad', 'ZoneHVAC:IdealLoadsAirSystem', nm(zone + ' ideal'), '1', '1', '', '']);
    body += obj('ZoneHVAC:IdealLoadsAirSystem', [nm(zone + ' ideal'), '', nm(zone + ' supply'), '', '', '50', '13', '0.0156', '0.0077', 'NoLimit', '', '', 'NoLimit', '', '', '', '', 'ConstantSupplyHumidityRatio', '', 'ConstantSupplyHumidityRatio']);
    ideal.push(nm(zone + ' ideal'));
  }
  for (const c of cons.values()) text += obj('Material:NoMass', [c.name + ' R', 'MediumRough', f(c.r, 4), '0.9', '0.7', '0.7']) + obj('Construction', [c.name, c.name + ' R']);
  for (const m of materials.values()) text += m;
  for (const l of layered.values()) text += obj('Construction', [l.name, ...l.layers]);
  text += glazing + body;
  text += obj('Output:Table:SummaryReports', ['ZoneComponentLoadSummary', 'HVACSizingSummary']);
  text += obj('OutputControl:Table:Style', ['CommaAndHTML']);
  if (mode === 'year') {
    for (const id of ideal) {
      text += obj('Output:Variable', [id, 'Zone Ideal Loads Zone Total Heating Energy', 'RunPeriod']);
      text += obj('Output:Variable', [id, 'Zone Ideal Loads Zone Total Cooling Energy', 'RunPeriod']);
    }
  }
  return { text, zones: zoneOf.size, surfaces, windows, skipped, zoneOf, notes, ideal };
}

/** The whole reading of the open model: rooms → boundaries → U-values → the IDF, and our own loads beside it. `W` = the web-ifc namespace (as ModelWriter takes). */
export function prepareModel(W, api, mid, { inputs = {}, lambdas = {}, mode = 'design', mass = false, gains, name = 'BimCraft model' } = {}) {
  const g = gatherRooms(W, api, mid, { keep: true });
  if (!g?.rooms?.length) return { ok: false, key: 'ep.err.norooms' };
  const e = gatherEnergy(W, api, mid, g);
  const uMap = uValues(W, api, mid, [...e.ids], { lambdas });
  const out = idfFromModel(W, api, mid, { g, e, uMap, inputs, site: siteOf(api, mid), name, mode, mass, gains });
  return { ok: true, ...out, ours: loads(e, uMap, { ...INPUTS, ...inputs }) };
}

// ------------------------------------------------------------------ what EnergyPlus writes back
/** eplusout.err → { completed, fatal, severe, warnings, messages }. */
export function parseErr(text) {
  const s = String(text || '');
  const messages = (s.match(/^ *\*\* +(Severe|Fatal) +\*\*.*$/gm) || []).slice(0, 6).map((l) => l.replace(/^ *\*\* +/, '').trim());
  return { completed: /EnergyPlus Completed Successfully/.test(s), fatal: /\*\*\s+Fatal\s+\*\*/.test(s), severe: (s.match(/\*\*\s+Severe\s+\*\*/g) || []).length, warnings: (s.match(/\*\*\s+Warning\s+\*\*/g) || []).length, messages };
}
/** eplusout.eio: ` Zone Sizing Information, <ZONE>, Heating|Cooling, Calc Des Load {W}, …` → Map(ZONE → { heating, cooling }) in watts. */
export function parseSizing(eio) {
  const out = new Map();
  for (const line of String(eio || '').split(/\r?\n/)) {
    if (!/^\s*Zone Sizing Information,/.test(line)) continue;
    const x = line.split(',').map((v) => v.trim());
    const kind = /^heating/i.test(x[2]) ? 'heating' : /^cooling/i.test(x[2]) ? 'cooling' : null, w = Number(x[3]);
    if (!kind || !Number.isFinite(w)) continue;
    const key = String(x[1]).toUpperCase();
    if (!out.has(key)) out.set(key, { heating: null, cooling: null });
    out.get(key)[kind] = w;
  }
  return out;
}
/** eplusout.eso: the data dictionary (`id,n,Key,Name [unit] !Frequency …`) then `id,value,…` records → Map("KEY|Name [unit]" → the RunPeriod value). */
export function parseEso(text) {
  const dict = new Map(), out = new Map();
  let data = false;
  for (const line of String(text || '').split(/\r?\n/)) {
    if (!line.trim()) continue;
    if (/^End of Data Dictionary/i.test(line)) { data = true; continue; }
    if (/^End of Data$/i.test(line)) break;
    const x = line.split(',');
    if (!data) {
      const m = /^(\d+),(\d+),(.*)$/.exec(line);
      if (!m || Number(m[1]) < 6) continue;
      const rest = m[3], bang = rest.indexOf('!'), head = (bang < 0 ? rest : rest.slice(0, bang)).trim().replace(/,\s*$/, ''), freq = bang < 0 ? '' : rest.slice(bang + 1).trim();
      const comma = head.indexOf(',');
      if (comma < 0 || !/^RunPeriod/i.test(freq)) continue;
      dict.set(Number(m[1]), head.slice(0, comma).trim().toUpperCase() + '|' + head.slice(comma + 1).trim());
    } else {
      const id = Number(x[0]), v = Number(x[1]);
      if (dict.has(id) && Number.isFinite(v)) out.set(dict.get(id), v);
    }
  }
  return out;
}
/** parseEso() → Map(ZONE NAME → { heating, cooling }) in kWh (the variables are joules); the key is the ideal-loads object, ` IDEAL` stripped. */
export function yearByZone(map) {
  const out = new Map();
  for (const [k, j] of map) {
    const m = /^(.*)\|Zone Ideal Loads Zone Total (Heating|Cooling) Energy \[J\]/i.exec(k);
    if (!m) continue;
    const zone = m[1].replace(/ IDEAL$/, '');
    if (!out.has(zone)) out.set(zone, { heating: 0, cooling: 0 });
    out.get(zone)[m[2].toLowerCase()] = j / 3.6e6;
  }
  return out;
}
/** EnergyPlus's design loads against energy-bim.js's (`ours` = loads() rooms): the ratio (ep − ours) / ours per room, null when ours is 0. */
export function compareDesign(ep, ours, zoneOf) {
  const byId = new Map(ours.map((r) => [r.id, r]));
  const rows = [];
  for (const [zone, z] of zoneOf) {
    const e = ep.get(zone), o = byId.get(z.id);
    if (!e || !o) continue;
    const mine = { heating: o.heat?.total ?? null, cooling: o.cool?.total ?? null };
    const d = (a, b) => (Number.isFinite(a) && Number.isFinite(b) && b > 0 ? (a - b) / b : null);
    rows.push({ room: z.id, name: z.name, ep: e, ours: mine, dHeating: d(e.heating, mine.heating), dCooling: d(e.cooling, mine.cooling) });
  }
  return rows;
}
/** The shared Problems shape (rule 29), source `bimcraft.energy.ep`: a run that did not complete, severe errors, rooms the two methods disagree on. */
export function problemsEp(cmp, err, { tolerance = 0.15 } = {}) {
  const P = (code, severity, text, extra = {}) => ({ code, severity, part: extra.part || '', msg: { key: 'ep.' + code, vars: extra.vars || {} }, text, about: extra.about || [], source: { name: 'bimcraft.energy.ep' }, ...(extra.req ? { req: extra.req } : {}), ...(extra.found ? { found: extra.found } : {}) });
  const out = [];
  if (err && !err.completed) out.push(P('run.failed', 'error', `${EP_NAME} did not finish${err.messages?.[0] ? ': ' + err.messages[0] : ''}.`));
  else if (err?.severe) out.push(P('run.severe', 'warning', `${EP_NAME} finished with ${err.severe} severe message${err.severe > 1 ? 's' : ''}${err.messages?.[0] ? ': ' + err.messages[0] : ''}.`));
  for (const r of cmp || []) {
    if (r.dHeating !== null && Math.abs(r.dHeating) > tolerance) out.push(P('heat.differs', 'note', `${r.name}: the two methods differ in design heating by ${Math.round(r.dHeating * 100)} % (${Math.round(r.ep.heating)} W against ${Math.round(r.ours.heating)} W).`, { part: 'room:' + r.room, about: [{ kind: 'room', id: String(r.room), label: r.name }], req: { op: '<=', value: Math.round(tolerance * 100), unit: '%' }, found: { value: Math.round(Math.abs(r.dHeating) * 100), unit: '%' } }));
  }
  return out;
}
