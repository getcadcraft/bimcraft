/* SPDX-License-Identifier: Apache-2.0 */
/**
 * problems-mep.js — the results of the MEP calculations as shared Problems (rule 29; docs/0.8-PROBLEMS-SPEC.md § 1–2; session `mep_PART_2`).
 * DOM-free. Each builder takes a result (flow.js, carrier.js, photometry.js, the sprinkler add-on's hydraulics) and returns problems in the
 * shape `problems-bimcraft.js` uses: { code, severity, part, msg: { key, vars }, text, about: [{ kind, id, label }], source: { name }, req, found, fixes }.
 * Source names: `bimcraft.mep.pipes`, `.ducts`, `.carriers`, `.lighting`, `.sprinklers` (kind 'engine' — registered by mep-calc.js).
 * `about` names runs by GlobalId (kind 'run' — the model's CadCraft runs are IfcElementAssembly), so an acceptance survives reopening the file.
 * Words: `text` is English; the language files carry `msg.key` later (add-on rule: sources outside the page catalog give `text`).
 * Every engine result that rests on a labelled default says so as a `note` (the example demand curve, default K values, the 0.8 light loss factor).
 */
const f1 = (x) => (Number.isFinite(x) ? Math.round(x * 10) / 10 : x);
const f2 = (x) => (Number.isFinite(x) ? Math.round(x * 100) / 100 : x);
const run = (id, label) => ({ kind: 'run', id: String(id), label: label || undefined });

function P(source, code, severity, text, extra = {}) {
  return { code, severity, part: extra.part || '', msg: { key: 'eg.' + code, vars: extra.vars || {} }, text, about: extra.about || [], source: { name: 'bimcraft.mep.' + source }, ...(extra.req ? { req: extra.req } : {}), ...(extra.found ? { found: extra.found } : {}), ...(extra.fixes ? { fixes: extra.fixes } : {}) };
}

/** Network faults shared by pipes, ducts and trays: a loop, runs not joined to the source. */
export function networkProblems(source, res, labelOf = (id) => id, guidOf = (id) => id) {
  const out = [];
  if (res.cycles?.length) out.push(P(source, 'net.loop', 'warning', `The network has ${res.cycles.length} closed loop${res.cycles.length > 1 ? 's' : ''}; the sizing follows one path to each end and ignores the loop.`, { part: 'loop', about: [...new Set(res.cycles.map((id) => String(id).split(':')[0]))].slice(0, 50).map((r) => run(guidOf(r), labelOf(r))) }));
  if (res.unreached?.length) out.push(P(source, 'net.unreached', 'warning', `${res.unreached.length} piece${res.unreached.length > 1 ? 's are' : ' is'} not joined to the source, so nothing flows through ${res.unreached.length > 1 ? 'them' : 'it'}.`, { part: 'unreached', about: [...new Set(res.unreached.map((id) => String(id).split(':')[0]))].slice(0, 50).map((r) => run(guidOf(r), labelOf(r))) }));
  return out;
}

/** analyzePipes() result → problems. `unit` { len: 'mm' | 'in', ... } is only for words; numbers are SI in the result. */
export function pipeProblems(res, { labelOf = (id) => id, guidOf = (id) => id, imperial = false } = {}) {
  const out = networkProblems('pipes', res, labelOf, guidOf);
  const gpm = (q) => f1(q / 0.003785411784 * 60), lps = (q) => f2(q * 1000), fl = (q) => (imperial ? gpm(q) + ' gpm' : lps(q) + ' L/s');
  const vel = (v) => (imperial ? f1(v / 0.3048) + ' ft/s' : f2(v) + ' m/s');
  for (const s of res.segs) {
    const about = [run(guidOf(s.run), labelOf(s.run))];
    if (s.status === 'small') out.push(P('pipes', 'pipe.small', 'warning', `${labelOf(s.run)} (${s.size}) carries ${fl(s.flow)} at ${vel(s.V)}; the velocity limit of ${vel(res.opts.vmax)}${res.opts.rateMax ? ' or the friction limit' : ''} needs ${s.need}.`,
      { part: s.run + '#' + s.id, about, vars: { run: s.run, flow: s.flow, need: s.need }, req: { op: '<=', value: f2(res.opts.vmax), unit: 'm/s' }, found: { value: f2(s.V), unit: 'm/s' }, fixes: [{ id: 'size', text: `Set the size to ${s.need}`, action: 'run-size', args: { run: s.run, size: s.need } }] }));
    else if (s.status === 'toobig') out.push(P('pipes', 'pipe.toobig', 'error', `${labelOf(s.run)} carries ${fl(s.flow)}: no size of its material keeps the velocity under ${vel(res.opts.vmax)}.`, { part: s.run + '#' + s.id, about, req: { op: '<=', value: f2(res.opts.vmax), unit: 'm/s' }, found: { value: f2(s.V), unit: 'm/s' } }));
    if (s.beyond) out.push(P('pipes', 'pipe.beyond', 'note', `${labelOf(s.run)}: ${f1(s.fu)} fixture units is beyond the last point of the demand curve; the curve's last slope was continued.`, { part: s.run + '#' + s.id, about }));
  }
  for (const l of res.loads) {
    if (l.reached === false) out.push(P('pipes', 'pipe.noroute', 'warning', `${l.label || l.key} is not joined to the source by pipe.`, { part: 'load:' + l.key, about: [] }));
    else if (l.short) out.push(P('pipes', 'pipe.pressure', 'warning', `${l.label || l.key}: ${f1(l.leftKpa)} kPa left at the fixture after ${f1(l.dpKpa)} kPa of loss; ${f1(res.opts.minKpa)} kPa is needed.`,
      { part: 'load:' + l.key, about: l.path.slice(0, 50).map((id) => run(guidOf(res.segs.find((s) => s.id === id)?.run), labelOf(res.segs.find((s) => s.id === id)?.run))), req: { op: '>=', value: f1(res.opts.minKpa), unit: 'kPa' }, found: { value: f1(l.leftKpa), unit: 'kPa' } }));
  }
  if (res.curve?.example) out.push(P('pipes', 'pipe.curve', 'note', 'The demand comes from the built-in example curve, not from a code table. Type the table of the code in force before relying on these sizes.', { part: 'curve' }));
  return out;
}

/** analyzeDucts() result → problems. */
export function ductProblems(res, { labelOf = (id) => id, guidOf = (id) => id, imperial = false } = {}) {
  const out = networkProblems('ducts', res, labelOf, guidOf);
  const vel = (v) => (imperial ? Math.round(v / 0.00508) + ' fpm' : f1(v) + ' m/s');
  for (const s of res.segs) {
    const about = [run(guidOf(s.run), labelOf(s.run))];
    if (s.status === 'small' || s.status === 'fast') out.push(P('ducts', 'duct.' + s.status, 'warning', `${labelOf(s.run)} (${s.size}) carries ${f1(s.flow * 1000)} L/s at ${vel(s.V)}; ${res.opts.method === 'velocity' ? 'the velocity limit' : 'the friction rate'} needs a round equivalent of at least ${Math.round(s.needDeMm)} mm.`,
      { part: s.run + '#' + s.id, about, req: res.opts.method === 'velocity' ? { op: '<=', value: res.opts.vmax, unit: 'm/s' } : { op: '<=', value: res.opts.rate, unit: 'Pa/m' }, found: res.opts.method === 'velocity' ? { value: f2(s.V), unit: 'm/s' } : { value: f2(s.rate), unit: 'Pa/m' } }));
    if (s.aspectHigh) out.push(P('ducts', 'duct.aspect', 'note', `${labelOf(s.run)} (${s.size}) is ${f1(s.aspect)}:1; ${res.opts.maxAspect}:1 is the usual limit.`, { part: s.run + '#' + s.id, about, req: { op: '<=', value: res.opts.maxAspect, unit: ':1' }, found: { value: f1(s.aspect), unit: ':1' } }));
  }
  for (const t of res.terminals) if (t.reached === false) out.push(P('ducts', 'duct.noroute', 'warning', `${t.label || t.key} is not joined to the source by duct.`, { part: 'term:' + t.key }));
  out.push(P('ducts', 'duct.defaults', 'note', 'Fitting losses use rounded default coefficients (elbows, tees, transitions), not a fitting database. Replace them with your project table for a final fan selection.', { part: 'defaults' }));
  return out;
}

/** fillByRun() result → problems. */
export function carrierProblems(fills, routes, { labelOf = (id) => id, guidOf = (id) => id } = {}) {
  const out = [];
  for (const f of fills) {
    const about = [run(guidOf(f.run), labelOf(f.run))];
    if (f.fill.ok) continue;
    const text = f.kind === 'conduit'
      ? (f.fill.tooWide ? `${labelOf(f.run)}: a cable is wider than the conduit's inside diameter.` : `${labelOf(f.run)} is ${f1(f.fill.pct)} % full with ${f.fill.count} cable${f.fill.count > 1 ? 's' : ''}; the limit is ${f.fill.limitPct} %.`)
      : (f.fill.mode === 'layer' ? `${labelOf(f.run)}: the cables' diameters add up to ${Math.round(f.fill.sumOdMm)} mm in one layer; the tray is ${Math.round(f.fill.widthMm)} mm wide.` : `${labelOf(f.run)} is ${f1(f.fill.pct)} % full; the limit is ${f.fill.limitPct} %.`);
    out.push(P('carriers', 'carrier.fill', 'warning', text, { part: f.run, about, req: { op: '<=', value: f.fill.limitPct, unit: 'pct' }, found: { value: f1(f.fill.pct), unit: 'pct' },
      fixes: f.kind === 'conduit' && f.bigger ? [{ id: 'size', text: `Use ${f.bigger.size} in. conduit`, action: 'run-size', args: { run: f.run, size: f.bigger.size } }] : undefined }));
  }
  for (const [tag, r] of routes) if (!r.found) out.push(P('carriers', 'carrier.route', 'warning', `Cable ${tag} has no continuous tray or conduit route between its ends${r.why === 'ends' ? ' (an end is not on a carrier)' : ''}.`, { part: 'cable:' + tag }));
  return out;
}

/** computeGrid() + checkTargets() → problems for one room / area. */
export function lightingProblems(name, res, checks, { id = name, about = [] } = {}) {
  const out = [], s = res.stats;
  if (res.tooMany) return [P('lighting', 'light.grid', 'warning', `${name}: the grid would have more than 40 000 points; use a larger spacing.`, { part: id, about })];
  for (const c of checks) if (!c.ok) {
    const what = { avg: `average ${f1(c.found)} lux, needs ${c.req}`, min: `lowest point ${f1(c.found)} lux, needs ${c.req}`, uniformity: `uniformity (lowest ÷ average) ${f2(c.found)}, needs ${c.req}`, lpd: `${f2(c.found)} W/m², limit ${c.req}` }[c.key];
    out.push(P('lighting', 'light.' + c.key, 'warning', `${name}: ${what}.`, { part: id + '#' + c.key, about, req: { op: c.op, value: c.req, unit: c.key === 'lpd' ? 'W/m2' : c.key === 'uniformity' ? 'ratio' : 'lux' }, found: { value: f2(c.found), unit: c.key === 'lpd' ? 'W/m2' : c.key === 'uniformity' ? 'ratio' : 'lux' } }));
  }
  if (!s.n) out.push(P('lighting', 'light.empty', 'warning', `${name}: no grid points fall inside the outline.`, { part: id, about }));
  return out;
}
export const lightingNote = () => P('lighting', 'light.direct', 'note', 'These are direct illuminance values: no inter-reflection from walls and ceiling and no blocking by furniture or walls. They are a lower bound for a room.', { part: 'direct' });

/** The sprinkler add-on's result → problems (it builds them itself with this helper). */
export const sprinklerProblem = (code, severity, text, extra) => P('sprinklers', code, severity, text, extra);
