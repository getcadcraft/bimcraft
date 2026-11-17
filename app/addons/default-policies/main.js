/* SPDX-License-Identifier: Apache-2.0 */
/**
 * main.js: the Default Policies add-on for BimCraft (0.10 DP.1, owner 2026-11-11, session bk-defaults-10; add-on API 1.5). Off until
 * the person switches it on (Settings › Add-ons). It fills BimCraft's defaults hook (defaults-hook.js through api.defaults): the app
 * asks, policy by policy, what a new building starts with (new-policy.js), and uses its own built-in default for every policy that
 * is not set. The engine, the store and the screens are lib/ (canonical lib/defaults, copied by tools/defaults/sync.mjs, never edited
 * here); this file is BimCraft's adapter: the lists only BimCraft knows (wall types, papers, scales, units) and how it writes a length.
 *
 *   Settings › Global › Default Policies      the office name, the unit system for every app, save to / load from a file, reset all
 *   Settings › BimCraft › Default Policies    units, levels (count, names, height), first wall type per unit system, LOD tags,
 *                                             first sheet (paper, scale, number, name, or none), the tool after Create
 */
import { mountDefaultsUi } from './lib/ui.js';
import { WALL_TYPES, wallType, typeName, typeThickness } from '../../model-walls.js';
import { PAPERS, scalesFor, isPortrait } from '../../res-sheets.js';
import { UNITS, fmtLen, parseLen } from '../../model-units.js';
import { LOD_SCALE, lodLabel } from '../../walls/lod.js';
import { startDefaults } from '../../new-defaults.js';
import { t as tr } from '../../i18n.js';

const unitOf = (system) => (system === 'imperial' ? 'ftin' : 'mm');
const lenText = (mm, system) => (system === 'imperial' ? fmtLen(mm, 'ftin') : (Math.round(mm * 1000) / 1000) + ' mm');
const paperName = (k) => { const key = 'res.sh.paper.' + k, v = tr(key); return v !== key ? v : String(k).toUpperCase(); };
// a starter type as BimCraft itself makes it (no LOD policy applied to the name)
const typeLabel = (key, system) => { const x = wallType(key); return x ? typeName(x) + ' (' + lenText(typeThickness(x), system) + ')' : key; };

export function optionsOf(policy, system) {
  if (policy.id === 'bimcraft.units') return UNITS.map((u) => ({ value: u, label: tr('model.units.' + u) }));
  if (policy.id === 'bimcraft.wall.starterLod' || policy.id === 'bimcraft.wall.newLod' || policy.id.startsWith('bimcraft.audit.lod.')) return LOD_SCALE.map((n) => ({ value: n, label: lodLabel(n) }));
  if (policy.optionsFrom === 'wallTypes') return WALL_TYPES.map((x) => ({ value: x.key, label: typeLabel(x.key, system) }));
  if (policy.optionsFrom === 'papers') return Object.keys(PAPERS).filter((k) => !isPortrait(k)).map((k) => ({ value: k, label: paperName(k) }));
  if (policy.optionsFrom === 'scales') return scalesFor(unitOf(system)).map((s) => ({ value: s.ratio, label: s.label }));
  return null;
}
/** What BimCraft does when a policy is not set, in words (new-defaults.js is the source). */
export function ownText(policy, system) {
  const d = startDefaults({ metric: system !== 'imperial' });
  switch (policy.id) {
    case 'bimcraft.levels.count': return String(d.levels);
    case 'bimcraft.levels.name': return tr('new.level', { n: '{n}' });
    case 'bimcraft.levels.height': return d.heightText;
    case 'bimcraft.wall.first': return typeName(wallType(d.wallType));
    case 'bimcraft.sheet.paper': return paperName(d.sheet.paper);
    case 'bimcraft.sheet.scale': return d.sheet.scale;
    case 'bimcraft.sheet.number': return d.sheet.number;
    case 'bimcraft.tool.afterCreate': return tr('model.tool.select');
    default: return '';
  }
}

export async function activate(api) {
  mountDefaultsUi(api, {
    app: 'bimcraft',
    appName: api.app.name,
    optionsOf,
    ownText,
    lenText,
    parseLen: (text, system) => parseLen(text, unitOf(system)),
  });
}
