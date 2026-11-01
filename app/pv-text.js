/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — the English defaults of the pv.* keys. The same strings are in docs/0.8-sessions/energy_PART_2-keys-pv.json for lang/en.json; until the lead merges them, tr() reads these. */
/**
 * pv-text.js — words for the solar PV engines and pane (0.8 EG.15, session `energy_PART_2`).
 *   tr(key, vars) → the language file's string when the page has one, else the English below ({name} fills, as i18n.js).
 * Engines return keys and numbers; the pane and Problems turn them into words here.
 */
import { t as t0 } from './i18n.js';

export const EN = {
  'pv.title': 'Solar PV',
  'pv.intro': 'Arrays on roofs or the ground, shading from the model, yield, strings and the one-line. A design aid, not a permit calculation or a bankable yield report. Every default below is labelled: replace the starter module, losses and climate with yours.',
  'pv.tab.arrays': 'Arrays', 'pv.tab.yield': 'Yield', 'pv.tab.strings': 'Strings', 'pv.tab.oneline': 'One-line',
  'pv.module.starter': 'Generic 400 Wp starter module (starter values, not a maker\'s datasheet)',
  'pv.module.label': 'Module', 'pv.module.table': 'Module table (CSV)', 'pv.module.apply': 'Use this table',
  'pv.inverter.starter': 'Generic 5 kW starter inverter (starter values, not a maker\'s datasheet)',
  'pv.level': 'Level', 'pv.level.auto': 'Top level for a roof array, lowest for a ground array',
  'pv.faces': 'Roof faces','pv.face.row': '{id}: tilt {tilt}°, azimuth {az}°, {area} m²', 'pv.face.flat': '{id}: flat, {area} m²',
  'pv.orient': 'Orientation', 'pv.orient.portrait': 'Portrait', 'pv.orient.landscape': 'Landscape',
  'pv.setback': 'Edge setback (mm)', 'pv.gap': 'Gap between modules (mm)', 'pv.tilt': 'Tilt (°)', 'pv.azimuth': 'Azimuth (° from north, clockwise)',
  'pv.rows': 'Rows', 'pv.perrow': 'Modules per row', 'pv.stack': 'Modules high per table', 'pv.clearance': 'Lower edge above ground (mm)', 'pv.winterhours': 'No-shade rule: hours from solar noon on the winter solstice',
  'pv.check': 'Check', 'pv.fit': 'Fit modules on a face', 'pv.ground': 'Lay out a ground array', 'pv.place': 'Place in the model', 'pv.arrays.none': 'No PV arrays in the model yet.',
  'pv.head.arrays': 'Array|Modules|kWp|Tilt|Azimuth', 'pv.head.yield': 'Month|In-plane kWh/m²|Shade loss %|DC kWh|AC kWh', 'pv.head.strings': 'Check|Value|Limit|State',
  'pv.sky': 'Sky', 'pv.sky.clear': 'Clear-sky ceiling (not a forecast)', 'pv.sky.monthly': 'My monthly horizontal totals (kWh/m²/day)',
  'pv.ghi': 'Twelve monthly means, kWh/m² per day, separated by commas', 'pv.tamb': 'Daytime air temperature, °C (one number or twelve)', 'pv.albedo': 'Ground reflectance',
  'pv.loss.soiling': 'Soiling', 'pv.loss.wiring': 'Wiring', 'pv.loss.mismatch': 'Mismatch', 'pv.loss.availability': 'Availability', 'pv.loss.inverter': 'Inverter efficiency',
  'pv.shading': 'Cast shadows from the model', 'pv.latitude': 'Latitude (°)', 'pv.longitude': 'Longitude (°)',
  'pv.annual': 'Per year: {kwh} kWh AC, {spec} kWh per kWp, performance ratio {pr}, shading loss {shade} %.',
  'pv.tmin': 'Lowest air temperature (°C)', 'pv.thot': 'Hottest cell temperature (°C)', 'pv.vsys': 'System voltage limit (V)', 'pv.vocfactor': 'Voc safety factor', 'pv.modules': 'Modules to connect',
  'pv.strings.result': '{n} modules in series (window {min} to {max}), {count} strings; {state}.',
  'pv.oneline.make': 'Make the one-line', 'pv.oneline.save': 'Save SVG', 'pv.oneline.data': 'Save data (JSON)',
  'pv.climate.fetch': 'Fetch the climate for this site from {p}', 'pv.climate.note': 'Sends only the site\'s latitude and longitude to {p}, once, when you press a button; the answer is kept on this computer.',
  'pv.climate.got': 'Climate from {p} ({from}): {src}.', 'pv.climate.fail': 'No climate data ({why}). The clear-sky ceiling is used instead; an upper bound, not a forecast.',
  'pv.climate.open': 'Open {p} for this site (paste its answer below)', 'pv.climate.open.site': 'Set the site first to open {p}', 'pv.climate.file': 'Load a climate file', 'pv.climate.paste': 'Paste a provider\'s answer as it came, or a climate data pack (cadcraft-data-pack, kind climate)',
  'pv.err.nosite': 'The model has no site latitude and longitude. Type them.',
  'pv.err.noarray': 'There are no PV arrays in the model. Place one first.',
  'pv.err.noface': 'No roof face of that number. Check the roof faces first.',
  'pv.err.nofit': 'No module fits on that face with this setback.',
  'pv.err.nolevel': 'No level with that id.',
  'pv.err.module': 'That module row is not valid.',
  'pv.err.polar': 'The winter sun is too low here for a no-shade row spacing.',
  'pv.err.noinverter': 'Give an inverter.',
  'pv.err.sky': 'The monthly totals need twelve numbers between 0 and 12 kWh/m² per day.',
  'pv.undo.add': 'Add PV array', 'pv.undo.remove': 'Remove PV arrays',
  'pv.array.name': 'PV array {n}',
  'pv.note.clear': 'The sky is the clear-sky ceiling: an upper bound, not a yield forecast. Type your own monthly totals for an estimate.',
  'pv.note.starter': 'The module, losses or inverter are starter values. Replace them with the maker\'s datasheet and your project\'s figures.',
  'pv.note.diffuse': 'Cast shadows reduce the direct sunlight only; the diffuse light is not reduced by what blocks part of the sky.',
  'pv.note.linear': 'A shaded part of an array loses power in proportion; bypass diodes, string mismatch and optimizers are not modelled.',
  'pv.note.temp': 'The air temperature is one daytime value for each month, not an hourly series.',
  'pv.note.code': 'Wire and fuse sizes use the factors and tables you typed. They are not a statement of code compliance; check the code in force.',
  'pv.oneline.over': 'A current is beyond the largest fuse or wire in your tables.',
  'pv.sky.spread': 'Month {month}: the typed daily total is spread over the hours by Collares-Pereira and Rabl and split into beam and diffuse by Erbs.',
  'pv.note.dcac': 'The ratio of array to inverter power is judged against a typical range you can change.',
};

export function tr(key, vars) {
  try {
    const s = t0(key, vars);
    if (s && s !== key) return s;
  } catch { /* no catalog */ }
  const raw = EN[key];
  if (raw === undefined) return key;
  return vars ? raw.replace(/\{\{|\}\}|\{([A-Za-z_][A-Za-z0-9_]*)\}/g, (m, k) => (m === '{{' ? '{' : m === '}}' ? '}' : k in vars ? String(vars[k]) : m)) : raw;
}
