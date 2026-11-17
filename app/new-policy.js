/* SPDX-License-Identifier: Apache-2.0 */
/**
 * new-policy.js : what a new building starts with once the person's Default Policies are asked (0.10 DP.1, owner 2026-11-11,
 * session bk-defaults-10). BimCraft's READERS of the defaults hook, in one place: each value is the app's own (new-defaults.js)
 * unless a policy is set for it, and `from` says which ones a policy set so the New building dialog can say so. With no add-on,
 * or with nothing set, every value here equals new-defaults.js: the test bin/test-bimcraft.mjs --defaults proves it.
 * No DOM, no engine; imports only the hook and new-defaults.js, so Node runs it. The add-on is never imported.
 *
 *   startSystem({ metricOwn, unitsNow }) → { metric, units | undefined, from }
 *        the unit system of the new building: policy bimcraft.units, else all.system, else the app's own (metricOwn).
 *        `units` is the display unit to switch to on Create (undefined = leave the person's unit alone).
 *   startPolicy({ metricOwn, unitsNow, wallKeys, papers, scaleLabel }) → {
 *        metric, system, units, levels, height (mm), heightText | null (null = the caller writes `height` in its units),
 *        levelName(i) | null, wallType, sheet: { number, paper, ratio, scale, title | null (a pattern with {level}) } | null,
 *        tool: 'select' | 'wall', from: { units, levels, height, levelName, wallType, sheet, tool }, any, source }
 *        wallKeys = the wall types on offer; papers = { key: [w, h] mm } (res-sheets.js PAPERS); scaleLabel(ratio, metric) → text
 *   sheetSpec(start, { titleOf, papers }) → the spec new-model.js newBuilding({ sheet }) takes, or null (no first sheet)
 *        titleOf(levelName) = the app's own title words; a title policy replaces them
 *   starterLod() → 100…500 | undefined     the LOD tag starter wall types carry (policy bimcraft.wall.starterLod)
 *   newTypeLod() → 100…500 | undefined     the LOD a newly made wall type starts with (policy bimcraft.wall.newLod)
 */
import { policy, policySource } from './defaults-hook.js';
import { startDefaults, START_PAPERS } from './new-defaults.js';

const METRIC_UNITS = ['mm', 'cm', 'm'], IMPERIAL_UNITS = ['ftin', 'ftdec', 'in'];
const LODS = [100, 200, 300, 350, 400, 500];
const fill = (pattern, vars) => String(pattern).replace(/\{([a-zA-Z][a-zA-Z0-9]*)\}/g, (m, k) => (Object.prototype.hasOwnProperty.call(vars, k) ? String(vars[k]) : m));
const two = (v) => String(v).padStart(2, '0');

export function startSystem({ metricOwn = false, unitsNow = '' } = {}) {
  const u = policy('bimcraft.units');
  if (METRIC_UNITS.includes(u) || IMPERIAL_UNITS.includes(u)) return { metric: METRIC_UNITS.includes(u), units: u, from: true };
  const s = policy('all.system');
  if (s === 'metric' || s === 'imperial') {
    const metric = s === 'metric', fits = (metric ? METRIC_UNITS : IMPERIAL_UNITS).includes(unitsNow);
    return { metric, units: fits ? undefined : (metric ? 'mm' : 'ftin'), from: true };
  }
  return { metric: !!metricOwn, units: undefined, from: false };
}

export function startPolicy({ metricOwn = false, unitsNow = '', wallKeys = [], papers = START_PAPERS, scaleLabel = null } = {}) {
  const sys = startSystem({ metricOwn, unitsNow }), system = sys.metric ? 'metric' : 'imperial', ctx = { system };
  const d = startDefaults({ metric: sys.metric }), from = {};
  const out = { metric: sys.metric, system, units: sys.units, levels: d.levels, height: d.height, heightText: d.heightText, levelName: null, wallType: d.wallType,
    sheet: { ...d.sheet, title: null }, tool: 'select' };
  if (sys.from) from.units = true;

  const n = policy('bimcraft.levels.count');
  if (Number.isInteger(n) && n >= 1 && n <= 200) { out.levels = n; from.levels = true; }
  const h = policy('bimcraft.levels.height', ctx);
  if (typeof h === 'number' && h >= 10 && h <= 1e7) { out.height = h; out.heightText = null; from.height = true; }
  const nm = policy('bimcraft.levels.name');
  if (typeof nm === 'string' && nm.trim()) { out.levelName = (i) => fill(nm, { n: i + 1, n0: i, nn: two(i + 1), nn0: two(i) }).slice(0, 120); from.levelName = true; }

  const wt = policy('bimcraft.wall.first', ctx);
  if (typeof wt === 'string' && wallKeys.includes(wt)) { out.wallType = wt; from.wallType = true; }

  if (policy('bimcraft.sheet.first') === 'none') { out.sheet = null; from.sheet = true; }
  else {
    const paper = policy('bimcraft.sheet.paper', ctx), ratio = policy('bimcraft.sheet.scale', ctx), number = policy('bimcraft.sheet.number', ctx), title = policy('bimcraft.sheet.title', ctx);
    if (typeof paper === 'string' && papers[paper]) { out.sheet.paper = paper; from.sheet = true; }
    if (typeof ratio === 'number' && ratio > 0 && ratio <= 100000) { out.sheet.ratio = ratio; out.sheet.scale = scaleLabel ? scaleLabel(ratio, sys.metric) : '1:' + ratio; from.sheet = true; }
    if (typeof number === 'string' && number.trim()) { out.sheet.number = number.trim().slice(0, 20); from.sheet = true; }
    if (typeof title === 'string' && title.trim()) { out.sheet.title = title.trim().slice(0, 120); from.sheet = true; }
  }
  if (policy('bimcraft.tool.afterCreate') === 'wall') { out.tool = 'wall'; from.tool = true; }
  else if (policy('bimcraft.tool.afterCreate') === 'select') from.tool = true;
  out.from = from;
  out.any = Object.keys(from).length > 0;
  out.source = out.any ? policySource() : '';
  return out;
}

/** The first sheet as new-model.js writes it; the same numbers as new-defaults.js firstSheet when no policy is set. */
export function sheetSpec(start, { titleOf = () => '', levelName = '', papers = START_PAPERS } = {}) {
  const s = start && start.sheet;
  if (!s) return null;
  const [pw, ph] = papers[s.paper] || START_PAPERS[s.paper] || START_PAPERS.tabloid;
  const title = s.title ? fill(s.title, { level: levelName }) : titleOf(levelName);
  // the middle of the drawing area: the title block strip takes 28 mm at the bottom, the frame 10 mm all round (as firstSheet)
  return { number: s.number, title: String(title || '').slice(0, 120), paper: s.paper, x: Math.round(pw / 2 * 10) / 10, y: Math.round((ph + 28) / 2 * 10) / 10, ratio: s.ratio };
}

export function starterLod() { const v = policy('bimcraft.wall.starterLod'); return LODS.includes(v) ? v : undefined; }
export function newTypeLod() { const v = policy('bimcraft.wall.newLod'); return LODS.includes(v) ? v : undefined; }
