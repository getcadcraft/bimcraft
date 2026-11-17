/* SPDX-License-Identifier: Apache-2.0 */
/**
 * new-defaults-ui.js : the "You start with" block of the New building dialog (0.10 BK.74): the units, the wall type the
 * Wall tool starts on (a list: pick another before the first wall, or leave it) and the first sheet, so nothing has to be
 * set up before the first wall. The values are new-defaults.js; bimcraft.js askNewBuilding mounts it.
 *
 *   startBlock({ el, t, metric, units, wallKey }) → { rows: [elements], wallType() → key, sheet() → firstSheet spec fields, show(on) }
 *
 * 0.10 DP.1 (bk-defaults-10): the person's Default Policies, when that add-on is on and has something set (new-policy.js asks the
 * defaults hook; nothing here imports the add-on):
 *   startFor({ metricOwn, unitsNow }) → new-policy.js startPolicy with BimCraft's wall types, papers and scale words filled in
 *   startBlock({ …, start })          shows start's wall type and sheet, and marks what a policy set: [data-new-policy="<what>"]
 *   policyMark(el, start, what) → a small "from your Default Policies" span, or null when no policy set that value
 *   startSheet(start, { titleOf, levelName }) → the first sheet's spec for new-model.js, or null (the policy says no first sheet)
 */
import { startDefaults } from './new-defaults.js';
import { WALL_TYPES, wallType, typeName, typeThickness } from './model-walls.js';
import { fmtLen } from './model-units.js';
import { startPolicy, sheetSpec } from './new-policy.js';
import { PAPERS, scalesFor } from './res-sheets.js';

const scaleLabel = (ratio, metric) => scalesFor(metric ? 'mm' : 'ftin').find((s) => s.ratio === ratio)?.label || '1:' + ratio;   // i18n-ignore: a scale ratio
export function startFor({ metricOwn, unitsNow }) {
  const s = startPolicy({ metricOwn, unitsNow, wallKeys: WALL_TYPES.map((x) => x.key), papers: PAPERS, scaleLabel });
  if (s.heightText === null) s.heightText = s.metric ? (Math.round(s.height * 1000) / 1000) + ' mm' : fmtLen(s.height, 'ftin');   // i18n-ignore: a length
  return s;
}
export const startSheet = (start, opts) => sheetSpec(start, { ...opts, papers: PAPERS });
export const policyMark = (el, start, what, inline = false) => (start && start.from[what] && start.source ? el('span', { className: 'bc-sub bc-new-policy', 'data-new-policy': what }, inline ? '(' + start.source + ')' : start.source) : null);

export function startBlock({ el, t, metric, units, wallKey, start = null }) {
  const d = start || startDefaults({ metric });
  const types = WALL_TYPES.map((x) => wallType(x.key));
  const key = start && start.from.wallType ? start.wallType : types.some((x) => x.key === wallKey) ? wallKey : d.wallType;
  const paperName = (p) => { const own = t('new.paper.' + p); return own !== 'new.paper.' + p ? own : t('res.sh.paper.' + p) !== 'res.sh.paper.' + p ? t('res.sh.paper.' + p) : String(p).toUpperCase(); };
  const sel = el('select', { 'data-new-walltype': '' }, ...types.map((x) => el('option', { value: x.key, selected: x.key === key }, typeName(x) + ' (' + fmtLen(typeThickness(x), units) + ')')));
  sel.value = key;
  const wall = el('label', { className: 'bc-new-field', 'data-new-wallrow': '' }, el('span', {}, t('new.walltype')), sel, el('span', { className: 'bc-sub' }, t('new.walltype.hint')), policyMark(el, start, 'wallType'));
  const starts = el('p', { className: 'bc-new-starts bc-sub', 'data-new-starts': '' },
    el('strong', {}, t('new.starts')), ' ',
    el('span', { 'data-new-units': '' }, t('new.starts.units', { units: t('model.units.' + units) })), ' ', policyMark(el, start, 'units', true), start && start.from.units ? ' ' : null,
    el('span', { 'data-new-sheet': '' }, d.sheet ? t('new.starts.sheet', { number: d.sheet.number, paper: paperName(d.sheet.paper), scale: d.sheet.scale }) : t('new.starts.nosheet')), ' ', policyMark(el, start, 'sheet', true), start && start.from.sheet ? ' ' : null,
    start && start.tool === 'wall' ? el('span', { 'data-new-tool': '' }, t('new.starts.walltool'), ' ', policyMark(el, start, 'tool', true), ' ') : null,
    el('span', {}, t('new.starts.later')));
  const rows = [wall, starts];
  return { rows, wallType: () => sel.value, defaults: d, show: (on) => { starts.hidden = !on; starts.style.display = on ? '' : 'none'; } };
}
