/* SPDX-License-Identifier: Apache-2.0 */
/**
 * pv-problems.js — the results of the PV engines as shared Problems (rule 29; docs/0.8-PROBLEMS-SPEC.md § 1–2; 0.8 EG.15, session `energy_PART_2`). DOM-free.
 * One source, `bimcraft.pv` (kind 'engine'), registered by pv-ui.js. Same shape as mep/problems-mep.js:
 *   { code, severity, part, msg: { key, vars }, text, about: [{ kind, id, label }], source: { name }, req, found, fixes }
 * `about` names arrays by GlobalId (kind 'element'). Every result that rests on a labelled default says so as a note.
 *   arrayProblems(arrays, faces)    stringProblems(design)    yieldProblems(res)    onelineProblems(diagram)
 */
const f1 = (x) => (Number.isFinite(x) ? Math.round(x * 10) / 10 : x);
const f2 = (x) => (Number.isFinite(x) ? Math.round(x * 100) / 100 : x);

function P(code, severity, text, extra = {}) {
  return { code, severity, part: extra.part || '', msg: { key: 'pv.' + code, vars: extra.vars || {} }, text, about: extra.about || [], source: { name: 'bimcraft.pv' }, ...(extra.req ? { req: extra.req } : {}), ...(extra.found ? { found: extra.found } : {}), ...(extra.fixes ? { fixes: extra.fixes } : {}) };
}
const el = (a) => (a?.guid ? [{ kind: 'element', id: a.guid, label: a.name }] : []);

export function arrayProblems(arrays = [], { shadeLimitPct = 10 } = {}) {
  const out = [];
  for (const a of arrays) {
    if (!a.modules?.length) out.push(P('array.empty', 'warning', `${a.name} has no modules.`, { part: a.id, about: el(a) }));
    if (a.tilt !== undefined && a.azimuth !== null && a.azimuth !== undefined && a.tilt > 5 && (a.azimuth < 90 || a.azimuth > 270) && a.lat >= 0)
      out.push(P('array.facing', 'note', `${a.name} faces ${Math.round(a.azimuth)}° (away from the sun's side in the northern hemisphere), so it will give less than a south-facing array.`, { part: a.id, about: el(a), vars: { az: a.azimuth } }));
    if (a.tilt !== undefined && a.tilt > 60) out.push(P('array.steep', 'note', `${a.name} is tilted ${f1(a.tilt)}°: a steep plane loses most of the summer light.`, { part: a.id, about: el(a), vars: { tilt: a.tilt } }));
    if (a.shadeLossPct > shadeLimitPct) out.push(P('array.shade', 'warning', `${a.name} loses ${f1(a.shadeLossPct)} % of its light to shadows from the model; more than ${shadeLimitPct} % is worth a look.`, { part: a.id, about: el(a), req: { op: '<=', value: shadeLimitPct, unit: '%' }, found: { value: f1(a.shadeLossPct), unit: '%' }, vars: { pct: a.shadeLossPct } }));
  }
  return out;
}

export function stringProblems(design, { label = 'The array' } = {}) {
  const out = [];
  for (const p of design.problems || []) {
    const v = p.vars || {};
    const text = {
      'string.voc': `${label}: a string at the coldest temperature reaches ${f1(v.vocCold)} V, above the limit of ${f1(v.limit)} V (even one module is too much, or the strings are too long).`,
      'string.window': `Modules in series must be at least ${v.nMin} to start the inverter at the hot cell temperature, but at most ${v.nMax} for the cold voltage: this module and inverter have no valid string length.`,
      'string.mppt.low': `${label}: ${v.n !== undefined ? v.n + ' modules in series give ' : 'the string gives '}${f1(v.v ?? 0)} V hot, below the inverter's lowest MPPT voltage${v.min ? ' of ' + v.min + ' V' : ''}.`,
      'string.mppt.high': `${label}: the string's voltage at its maximum power point reaches ${f1(v.v)} V in the cold, above the inverter's MPPT ceiling of ${f1(v.max)} V.`,
      'string.current': `The module's current of ${f2(v.imp)} A is more than one input of the inverter takes (${f1(v.max)} A).`,
      'string.inputs': `${v.count} strings need more inputs than the inverter has: ${v.mppts} input${v.mppts > 1 ? 's' : ''} at ${v.perMppt} string${v.perMppt > 1 ? 's' : ''} each.`,
      'string.uneven': `${v.left} module${v.left > 1 ? 's' : ''} are left over after ${v.count} strings of ${v.n}; strings in one input should be equal.`,
      'string.dcac.high': `${label}: DC power is ${f2(v.ratio)} times the inverter's AC rating, above the ${f2(v.max)} you set. The inverter will clip at midday.`,
      'string.dcac.low': `${label}: DC power is only ${f2(v.ratio)} times the inverter's AC rating, below ${f2(v.min)}: the inverter is bigger than it needs to be.`,
    }[p.code] || p.code;
    out.push(P(p.code, p.severity, text, { vars: v, req: p.req, found: p.found }));
  }
  return out;
}

export function yieldProblems(res, { arrays = [] } = {}) {
  const out = [];
  for (const n of res.notes || []) {
    const text = {
      'pv.note.clear': 'The sky is the clear-sky ceiling: an upper bound, not a yield forecast. Type your own monthly totals for an estimate.',
      'pv.note.starter': 'The module, losses or inverter are starter values. Replace them with the maker\'s datasheet and your project\'s figures.',
      'pv.note.diffuse': 'Cast shadows reduce the direct sunlight only; the diffuse light is not reduced by what blocks part of the sky.',
      'pv.note.linear': 'A shaded part of an array loses power in proportion; bypass diodes, string mismatch and optimizers are not modelled.',
      'pv.note.temp': 'The air temperature is one daytime value for each month, not an hourly series.',
    }[n.key];
    if (text) out.push(P(n.key.replace(/^pv\./, ''), 'note', text));
  }
  for (const p of res.problems || []) out.push(P('sky.' + p.code.replace(/^sky\./, ''), 'warning', p.code.includes('kt') ? `Month ${p.month}: the typed total is more than the sun can deliver (clearness ${p.kt}); it was limited.` : `Month ${p.month}: the typed total ${p.value} is not a number between 0 and 12 kWh/m² per day.`, { vars: p }));
  if (res.total?.clippedPct > 2) out.push(P('yield.clip', 'warning', `The inverter clips ${f1(res.total.clippedPct)} % of the energy at its rating.`, { found: { value: res.total.clippedPct, unit: '%' }, vars: { pct: res.total.clippedPct } }));
  void arrays;
  return out;
}

export function onelineProblems(d) {
  const out = [];
  for (const e of d.edges.filter((x) => x.over)) {
    const a = d.nodes.find((n) => n.id === e.from)?.label, b = d.nodes.find((n) => n.id === e.to)?.label;
    out.push(P('oneline.over', 'error', `${a} to ${b}: ${f1(e.required)} A is beyond the largest ${e.ocpd === null ? 'overcurrent device' : 'wire'} in your tables.`, { part: e.id, found: { value: e.required, unit: 'A' } }));
  }
  out.push(P('note.code', 'note', 'Wire and fuse sizes use the factors and tables you typed. They are not a statement of code compliance; check the code in force.'));
  return out;
}
