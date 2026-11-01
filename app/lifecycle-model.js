/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — English fallbacks for the assistant's results and file text; the panels pass t() and show the language files' words. */
/**
 * lifecycle-model.js — lifecycle.js on a BimCraft model (0.8 EG.45, session bim-sim_PART_2). No DOM: bin/test-bimcraft.mjs --lifecycle runs it in Node.
 *
 *   lifecycleParts(ed) → { parts: [{ key, name, qty, unit, life }], notes }      what the model holds, with the default life of each
 *        windows (m² of opening), exterior and interior doors (each: a door with a room on one side only is exterior), exterior wall (m² net of openings),
 *        wall paint (m² of every room's wall, net of openings: both faces of an inside wall), floor and ceiling finish (m² of rooms), roof (m² of the top
 *        level's footprint, flat: slope is not measured), stairs (each)
 */
import { modelLinks } from './people-model.js';
import { attachDoors } from './people-sim.js';
import { acousticsRooms } from './acoustics-model.js';
import { storeyLoops } from './model-slabs.js';
import { ModelWriter } from './model-write.js';
import { LIVES, EQUIPMENT_LIVES, DEFAULT_EQUIPMENT_LIFE } from './lifecycle.js';
import { readAssets } from './assets-bim.js';
import { readRuns } from './mep-model.js';
import { readDevices } from './res-elec.js';
import { calcCarbonModel } from './carbon-calc.js';

export function lifecycleParts(ed, { mep = true, today = null } = {}) {
  const { w, levels, rooms, doors, stairs, notes } = modelLinks(ed);
  const at = attachDoors(rooms, doors), byId = new Map(doors.map((d) => [d.id, d]));
  const area = (d) => (d.w / 1000) * (d.h / 1000);
  let winArea = 0, extDoors = 0, intDoors = 0, extOpen = 0;
  for (const d of doors) if (d.kind === 'window') { winArea += area(d); extOpen += area(d); }
  for (const o of at) { const d = byId.get(o.id); if (d.kind !== 'door') continue; if (o.rooms[1] === null) { extDoors++; extOpen += area(d); } else intDoors++; }
  const ac = acousticsRooms(ed, {}), sum = (name) => ac.reduce((s, r) => s + r.surfaces.filter((x) => x.name === name || x.name.startsWith(name + ':')).reduce((q, x) => q + x.area_m2, 0), 0);
  // exterior wall: the footprint's perimeter × the storey heights, less the openings in outside walls
  let extWall = 0, roof = 0;
  levels.forEach((lv, i) => {
    const outs = (storeyLoops(w, lv.id).outlines || []).filter((o) => o.poly && o.poly.length > 2), next = levels[i + 1], h = (next ? next.elevation - lv.elevation : lv.height) / 1000;
    for (const o of outs) { let per = 0; for (let k = 0; k < o.poly.length; k++) { const a = o.poly[k], b = o.poly[(k + 1) % o.poly.length]; per += Math.hypot(b[0] - a[0], b[1] - a[1]); } extWall += (per / 1000) * h; }
    if (!next) roof = outs.reduce((s, o) => s + Math.abs(o.area) / 1e6, 0);
  });
  extWall = Math.max(0, extWall - extOpen);
  const r1 = (v) => Math.round(v * 100) / 100;
  const part = (key, name, qty) => ({ key, name, qty: r1(qty), unit: LIVES[key].unit, life: LIVES[key].years });
  const building = [part('windows', 'Windows', winArea), part('door-exterior', 'Exterior doors', extDoors), part('door-interior', 'Interior doors', intDoors), part('wall-exterior', 'Exterior wall finish', extWall),
    part('wall-paint', 'Interior wall paint', sum('walls')), part('floor-finish', 'Floor finish', sum('floor')), part('ceiling-finish', 'Ceiling finish', sum('ceiling')), part('roof', 'Roof covering', roof), part('stairs', 'Stairs', stairs.length)].filter((p) => p.qty > 0);
  const svc = mep ? lifecycleServices(ed, { today }) : { parts: [], notes: [] };
  return { parts: [...building, ...svc.parts], notes: [...notes, ...svc.notes] };
}

const YEAR_MS = 365.25 * 86400000;
const CLASS_NAME = (cls) => cls.replace(/^IFC/, '').toLowerCase();
/** years between a 'YYYY-MM-DD' date and today (0 when unreadable or in the future) */
const ageOf = (day, today) => { if (!/^\d{4}-\d{2}-\d{2}$/.test(String(day || ''))) return 0; const a = Date.parse(day + 'T00:00:00Z'), b = Date.parse((today || new Date().toISOString().slice(0, 10)) + 'T00:00:00Z'); return Number.isFinite(a) && b > a ? (b - a) / YEAR_MS : 0; };

/**
 * 0.8 EG.45 (bim-sim_PART_3): the building services as parts to schedule.
 *   lifecycleServices(ed, { today }) → { parts: [{ key, name, qty, unit, life, firstYear?, group: 'services', classes?, guids? }], notes }
 *   - equipment (pumps, fans, boilers, valves, terminals, fixtures, outlets, switches, boards …, the classes the Assets tab tracks): grouped by IFC class with the class's planning life;
 *     an item whose own Pset_ServiceLife says otherwise is its own part with that life, and one with an install date starts at its age (so an old pump is due sooner, an overdue one now)
 *   - pipes and ducts: the metres of every drawn run (mep-model readRuns); wiring: an estimate, the straight plan distance from the board along each circuit's devices in the
 *     nearest-first order, × 1.25 for the routing (a labelled estimate: the model draws no cable)
 */
export function lifecycleServices(ed, { today = null } = {}) {
  const parts = [], notes = [];
  const group = 'services';
  let assets = [];
  try { assets = readAssets(ed.W, ed.api, ed.mid, today ? { today } : {}); } catch (e) { assets = []; }
  const byClass = new Map();
  for (const a of assets) {
    if (!EQUIPMENT_LIVES[a.cls] && !a.data?.life) continue;
    const own = Number(a.data?.life) > 0 ? Number(a.data.life) : 0;
    const age = ageOf(a.data?.installed, today);
    if (own || age) {
      parts.push({ key: 'asset:' + a.guid, name: a.tag || a.name || CLASS_NAME(a.cls), qty: 1, unit: 'each', life: own || EQUIPMENT_LIVES[a.cls] || DEFAULT_EQUIPMENT_LIFE, firstYear: -Math.round(age * 10) / 10, group, cls: a.cls, guids: [a.guid] });
    } else {
      const g = byClass.get(a.cls) || { n: 0, guids: [] }; g.n++; g.guids.push(a.guid); byClass.set(a.cls, g);
    }
  }
  for (const [cls, g] of byClass) parts.push({ key: 'eq:' + cls, name: CLASS_NAME(cls), qty: g.n, unit: 'each', life: EQUIPMENT_LIVES[cls] || DEFAULT_EQUIPMENT_LIFE, group, cls, guids: g.guids });
  const w = new ModelWriter(ed.W, ed.api, ed.mid);
  let runs = [];
  try { runs = readRuns(w); } catch (e) { runs = []; }
  const len = (r) => { let s = 0; for (let i = 1; i < r.points.length; i++) s += Math.hypot(r.points[i][0] - r.points[i - 1][0], r.points[i][1] - r.points[i - 1][1], (r.points[i][2] || 0) - (r.points[i - 1][2] || 0)); return s / 1000; };
  for (const kind of ['pipe', 'duct']) {
    const mine = runs.filter((r) => r.kind === kind);
    if (mine.length) parts.push({ key: kind, name: kind, qty: Math.round(mine.reduce((s, r) => s + len(r), 0) * 100) / 100, unit: 'm', life: LIVES[kind].years, group, guids: mine.map((r) => r.guid) });
  }
  let devices = [];
  try { devices = readDevices(w); } catch (e) { devices = []; }
  const circuits = new Map();
  for (const d of devices) if (d.circuit) { const l = circuits.get(d.circuit) || []; l.push(d); circuits.set(d.circuit, l); }
  let cable = 0;
  for (const list of circuits.values()) {
    const left = list.slice(), board = left.findIndex((d) => /^board/.test(d.kind));
    let cur = board >= 0 ? left.splice(board, 1)[0] : left.shift();
    while (left.length && cur) {
      let bi = 0, bd = Infinity;
      left.forEach((d, i) => { const dd = Math.hypot(d.at[0] - cur.at[0], d.at[1] - cur.at[1]); if (dd < bd) { bd = dd; bi = i; } });
      cable += bd / 1000; cur = left.splice(bi, 1)[0];
    }
  }
  if (cable > 0) { parts.push({ key: 'wiring', name: 'wiring', qty: Math.round(cable * 1.25 * 100) / 100, unit: 'm', life: LIVES.wiring.years, group, estimate: true }); notes.push({ key: 'eg45.note.wiring' }); }
  return { parts, notes };
}

/**
 * Carbon per unit of each part (kg CO2e), read from the model's carbon factors (carbon-calc.js, the Carbon tab's engine): the embodied carbon of the elements of the part's IFC
 * class, divided by its quantity — what one replacement puts back. A part with no element carbon (paint, floor and ceiling finishes, wiring, anything with no factor) has none and
 * says so. Modules A1–A3 (+ A4/A5 when the Carbon tab has them on) are what a replacement part costs to make; use of the old part, B and C modules are not counted.
 *   lifecycleCarbon(ed, parts, { geometry }) → { units: Map(key → kg per unit | null), notes, total_kg }
 */
const CARBON_CLASSES = { windows: ['IFCWINDOW'], 'door-exterior': ['IFCDOOR'], 'door-interior': ['IFCDOOR'], roof: ['IFCROOF'], stairs: ['IFCSTAIR', 'IFCSTAIRFLIGHT'], pipe: ['IFCPIPESEGMENT', 'IFCPIPEFITTING'], duct: ['IFCDUCTSEGMENT', 'IFCDUCTFITTING'] };
export function lifecycleCarbon(ed, parts, { geometry = true } = {}) {
  const w = new ModelWriter(ed.W, ed.api, ed.mid), units = new Map(), notes = [];
  let r;
  try { r = calcCarbonModel(w, { geometry }); } catch (e) { r = { ok: false }; }
  if (!r.ok) { for (const p of parts) units.set(p.key, null); notes.push({ key: 'eg45.note.nocarbon' }); return { units, notes, total_kg: 0 }; }
  const rows = r.res.rows;
  const doorQty = parts.filter((p) => p.key.startsWith('door-')).reduce((s, p) => s + p.qty, 0);
  for (const p of parts) {
    let kg = null;
    const sumBy = (f) => rows.filter(f).reduce((s, x) => s + x.total, 0);
    if (p.guids && p.cls) kg = sumBy((x) => p.guids.includes(x.guid));
    else if (p.key.startsWith('door-')) kg = doorQty > 0 ? sumBy((x) => x.cls === 'IFCDOOR') / doorQty : null;
    else if (CARBON_CLASSES[p.key]) kg = sumBy((x) => CARBON_CLASSES[p.key].includes(x.cls));
    if (kg !== null && !(kg > 0)) kg = null;
    units.set(p.key, kg === null || !(p.qty > 0) ? null : p.key.startsWith('door-') ? kg : kg / p.qty);
  }
  return { units, notes, total_kg: r.res.totals.total };
}
