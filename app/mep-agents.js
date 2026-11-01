/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — tool names, descriptions and results are read by the assistant program, not shown to the person (AGENTS-SPEC §5). */
/**
 * mep-agents.js — the MEP calculations of 0.8 round 2 (EG.1, EG.2, EG.4; session `mep_PART_2`) as tools for the person's assistant, written to the
 * AI tool contract (docs/AI-CONNECT-SPEC.md § 2, rule 34): `<area>_<verb>` names, short descriptions, bounded schemas, a preview for every edit
 * (rollback: one undo step), errors that say what to try next, and results marked as content (rule 36). Each tool runs the SAME function the panel
 * and menu call (mep-calc.js); none has a second copy of the maths. The apps contain no AI: this gives the assistant the engines.
 *
 *   mepTools(env) → [tool definitions]      env = { ed() (an IfcEditor), apply(label, op) → Promise<op result> } as agents.js modelTools(env)
 *
 *   pipes_check     read   supply pipes: fixture-unit demand, velocity, friction, fittings, static, pressure left at each load; Problems; sizes that fix it
 *   ducts_check     read   duct network: flow, velocity, friction, fittings, critical path, damper excess, fan pressure; Problems; sizes that fix it
 *   carriers_check  read   cables routed through the drawn trays and conduits, fill per run, the cable schedule (CSV text), Problems
 *   lighting_check  read   illuminance grid per room from the luminaires' IES / LDT files, statistics, targets, Problems
 *   runs_sizes_set  edit   apply sizes to pipe / duct / tray / conduit runs (what a check proposed), one undo step
 *   loads_set       edit   a fixture's units, an equipment's flow or a diffuser's airflow, kept on the element
 *   photometry_set  edit   an IES / LDT file for luminaires, kept on each element (refused when it does not parse)
 *   carrier_add     edit   a cable tray or conduit run through points on a level
 * Sprinklers (EG.3) are the Fire sprinklers add-on; add-ons cannot register assistant tools yet (asked of ai-core_PART_2 in the log).
 */
import { ToolError } from './host.js';
import { ModelWriter } from './model-write.js';
import { snapshotModel } from './model-ops.js';
import { readRuns, carrierOf, setRunSizes, elementByGuid } from './mep-model.js';
import { calcPipes, calcDucts, calcCarriers, calcLighting, setLoad, setPhotometry, placeCarrier } from './mep-calc.js';
import { parseCablesCsv, conduitSizes, CONDUIT_TYPES } from './mep/carrier.js';

const obj = (properties, required = [], description) => ({ type: 'object', ...(description ? { description } : {}), properties, required, additionalProperties: false });
const num = (description, min, max, extra = {}) => ({ type: 'number', description, minimum: min, maximum: max, ...extra });
const XYZ = { type: 'array', items: { type: 'number', minimum: -1e7, maximum: 1e7 }, minItems: 3, maxItems: 3 };
const POINT = { description: 'A point [x, y, z] in millimetres in the world of the model.', ...XYZ };
const SYSTEM = (d) => ({ type: 'string', description: d, minLength: 1, maxLength: 20 });
const LIMIT = 200;
const r2 = (v) => (Number.isFinite(v) ? Math.round(v * 100) / 100 : null);
const r1 = (v) => (Number.isFinite(v) ? Math.round(v * 10) / 10 : null);

/** Problems for the assistant: text and values only, the people-facing words marked as content (they name things from the file). */
const problemsOut = (list) => list.slice(0, LIMIT).map((p) => ({ code: p.code, severity: p.severity, text: p.text, about: (p.about || []).slice(0, 10).map((a) => a.id), req: p.req, found: p.found, fixes: (p.fixes || []).map((f) => ({ text: f.text, action: f.action, args: f.args })) }));
const notesOut = (notes) => (notes || []).map((n) => n.key + (n.vars ? ' ' + JSON.stringify(n.vars) : ''));
const failed = (res, next) => { throw new ToolError(res.key === 'calc.norun' || res.key === 'calc.nocarrier' ? 'not_found' : 'failed', messages[res.key] || 'The calculation could not run (' + res.key + ').', { next }); };
const messages = {
  'calc.norun': 'There are no runs of that system in the model.', 'calc.nocarrier': 'There is no cable tray or conduit run in the model.',
  'calc.sourceoff': 'The source point is not on any run of the system, within a few centimetres.', 'calc.noluminaire': 'No luminaire has a photometric file yet.',
  'calc.noroom': 'The model has no room outline (draw closed walls) and none was given.',
};

export function mepTools(env) {
  const E = () => { const ed = env.ed(); if (!ed) throw new ToolError('not_open', 'No IFC model is open in BimCraft.', { next: ['Open a model, then call this tool again.'] }); return ed; };
  const W = () => { const ed = E(); return new ModelWriter(ed.W, ed.api, ed.mid); };
  const edit = async (label, op) => { try { return await env.apply(label, op); } catch (e) { throw new ToolError(e?.key ? 'invalid_argument' : 'failed', String(e?.key || e?.message || e), { next: [] }); } };
  const segOut = (s) => ({ run: s.run, from: s.a, to: s.b, lengthM: r2(s.length), flowLps: r2(s.flow * 1000), velocityMs: r2(s.V), frictionPaPerM: r2(s.rate), lossPa: r1(s.dp), size: s.size, status: s.status, needs: s.need ?? undefined });

  return [
    {
      name: 'pipes_check', group: 'read', untrusted: true, title: 'Check supply pipe sizes',
      description: 'Sizes the supply pipes of one system by fixture units and pressure drop: demand per pipe, velocity, friction, fittings, static head and the pressure left at each load, with Problems and the sizes that fix them. Loads are fixtures with units, equipment with a typed flow (loads_set) or extraLoads; the demand curve is an example unless you pass one.',
      inputSchema: obj({
        system: SYSTEM('Pipe system key: cw (cold water), hw (hot water), hwr, chw, hhw, gas or fire.'),
        source: { description: 'Where the water enters, a point [x, y, z] in millimetres; default an equipment port that makes the system.', ...XYZ },
        extraLoads: { type: 'array', maxItems: 200, description: 'Loads not in the model: each { key, p: [x, y, z] mm, fu: fixture units, lps: fixed flow in litres per second }.',
          items: obj({ key: { type: 'string', description: 'A short name.', maxLength: 40 }, p: { description: 'Where it draws water, millimetres.', ...XYZ }, fu: num('Fixture units (a number from the code table).', 0, 100000), lps: num('Fixed flow in litres per second.', 0, 10000) }, ['key', 'p']) },
        curve: obj({ unit: { type: 'string', enum: ['gpm', 'lps'], description: 'The unit of the second number of each point.' }, points: { type: 'array', minItems: 2, maxItems: 60, description: 'Rising points [fixture units, flow] from the code table in force.', items: { type: 'array', items: { type: 'number', minimum: 0, maximum: 1e6 }, minItems: 2, maxItems: 2 } } }, ['points'], 'The demand curve of the code in force, from fixture units to flow; the built-in curve is only an example.'),
        vmax: num('Highest water velocity allowed, metres per second.', 0.3, 10, { default: 2.4 }),
        availKpa: num('Pressure at the source, kilopascals.', 0, 5000), minKpa: num('Least pressure wanted at a fixture, kilopascals.', 0, 1000),
        limit: { type: 'integer', description: 'Most pipe pieces to return.', minimum: 1, maximum: 1000, default: LIMIT },
      }, ['system']),
      run: (a) => {
        const r = calcPipes(W(), { system: a.system, source: a.source, extraLoads: a.extraLoads, curve: a.curve, opts: { vmax: a.vmax ?? 2.4, availKpa: a.availKpa, minKpa: a.minKpa } });
        if (!r.ok) failed(r, ['Call runs with system ' + a.system + ' first, or check the system key.']);
        const segs = r.res.segs.map(segOut);
        return { system: a.system, total: segs.length, returned: Math.min(segs.length, a.limit ?? LIMIT), pipes: segs.slice(0, a.limit ?? LIMIT),
          loads: r.res.loads.map((l) => ({ key: l.key, label: l.label, reached: l.reached !== false, lossKpa: r1(l.dpKpa), leftKpa: r1(l.leftKpa), short: !!l.short })),
          worst: r.res.worst ? { key: r.res.worst.key, lossKpa: r1(r.res.worst.dpKpa) } : null, curve: r.res.curve.label,
          problems: problemsOut(r.problems), proposals: r.proposals, notes: notesOut(r.notes) };
      },
    },
    {
      name: 'ducts_check', group: 'read', untrusted: true, title: 'Check duct sizes',
      description: 'Sizes a duct network by equal friction or velocity: airflow per piece from the terminals, velocity, friction, fitting losses, the critical path, the damper excess at each terminal and the fan pressure, with Problems and proposed sizes. Terminal airflows come from loads_set on diffusers or from terminals.',
      inputSchema: obj({
        system: SYSTEM('Duct system key: supply, return, exhaust or outside.'),
        source: { description: 'Where air enters the network, a point [x, y, z] in millimetres; default an equipment port that makes the system.', ...XYZ },
        terminals: { type: 'array', maxItems: 500, description: 'Terminals not in the model: each { key, p: [x, y, z] mm, lps: airflow in litres per second }.',
          items: obj({ key: { type: 'string', description: 'A short name.', maxLength: 40 }, p: { description: 'Where air leaves, millimetres.', ...XYZ }, lps: num('Airflow in litres per second.', 0.1, 100000) }, ['key', 'p', 'lps']) },
        method: { type: 'string', enum: ['friction', 'velocity'], description: 'Equal friction (default) or a velocity limit.' },
        ratePaPerM: num('Friction rate for equal friction, pascals per metre.', 0.05, 10, { default: 0.8 }), vmaxMs: num('Velocity limit, metres per second.', 1, 25, { default: 7.5 }),
        equipPa: num('Pressure lost in coils, filters and silencers, pascals.', 0, 5000, { default: 0 }),
        limit: { type: 'integer', description: 'Most duct pieces to return.', minimum: 1, maximum: 1000, default: LIMIT },
      }, ['system']),
      run: (a) => {
        const r = calcDucts(W(), { system: a.system, source: a.source, terminals: a.terminals, opts: { method: a.method || 'friction', rate: a.ratePaPerM ?? 0.8, vmax: a.vmaxMs ?? 7.5, equipDp: a.equipPa ?? 0 } });
        if (!r.ok) failed(r, ['Draw ducts of system ' + a.system + ', or check the system key.']);
        const segs = r.res.segs.map((s) => ({ ...segOut(s), sizeNow: s.size, roundEquivalentNeededMm: s.needDeMm ? Math.round(s.needDeMm) : undefined, aspect: r1(s.aspect) }));
        return { system: a.system, total: segs.length, returned: Math.min(segs.length, a.limit ?? LIMIT), ducts: segs.slice(0, a.limit ?? LIMIT),
          terminals: r.res.terminals.map((t) => ({ key: t.key, reached: t.reached !== false, lossPa: r1(t.dp), damperPa: r1(t.damperPa) })), criticalTerminal: r.res.critical?.key ?? null, fanPa: r1(r.res.fanPa),
          problems: problemsOut(r.problems), proposals: r.proposals, notes: notesOut(r.notes) };
      },
    },
    {
      name: 'carriers_check', group: 'read', untrusted: true, title: 'Check tray and conduit fill',
      description: 'Routes cables through the cable trays and conduits drawn in the model and reports fill per run against the limits, the cable schedule as CSV text, and Problems. Give cables as CSV text (tag, od in mm, n, from, to; from and to are x,y,z in millimetres or the tag of equipment). Limits are percentages from the code in force.',
      inputSchema: obj({
        cablesCsv: { type: 'string', description: 'Cables as CSV with a header: tag, circuit, type, size, od (outside diameter, millimetres), n (count), from, to.', minLength: 10, maxLength: 200000 },
        conduitLimits: obj({ one: num('Fill limit for one cable, percent.', 1, 100), two: num('Fill limit for two cables, percent.', 1, 100), many: num('Fill limit for more than two, percent.', 1, 100) }, [], 'Conduit fill limits from the code in force; all three together, or leave out for the defaults.'),
        trayPercent: num('Fill limit for trays by area, percent.', 1, 100, { default: 50 }),
        trayMode: { type: 'string', enum: ['area', 'layer'], description: 'area: cross-section percentage; layer: cables in a single layer across the width.' },
      }, ['cablesCsv']),
      run: (a) => {
        const parsed = parseCablesCsv(a.cablesCsv);
        if (!parsed.cables.length) throw new ToolError('invalid_argument', 'The cable list has no valid rows' + (parsed.errors[0] ? ' (first problem: line ' + parsed.errors[0].line + ', ' + parsed.errors[0].key + ')' : '') + '.', { next: ['Use a header row with tag and od columns, e.g. "tag,od,n,from,to".'] });
        const r = calcCarriers(W(), { cables: parsed.cables, limits: a.conduitLimits && a.conduitLimits.one && a.conduitLimits.two && a.conduitLimits.many ? a.conduitLimits : undefined, trayPct: a.trayPercent, mode: a.trayMode });
        if (!r.ok) failed(r, ['Draw trays or conduits with carrier_add first.']);
        return { cables: parsed.cables.length, rowErrors: parsed.errors, fills: r.fills.map((f) => ({ run: f.run, kind: f.kind, label: f.label, cables: f.cables, pct: r1(f.fill.pct), limitPct: f.fill.limitPct, ok: f.fill.ok, biggerConduit: f.bigger?.size })),
          scheduleCsv: r.csv.slice(0, 40000), problems: problemsOut(r.problems), proposals: r.proposals };
      },
    },
    {
      name: 'lighting_check', group: 'read', untrusted: true, title: 'Check illuminance in rooms',
      description: 'Computes direct illuminance on a grid in each room from the luminaires that have a photometric file (photometry_set): minimum, average, maximum, uniformity and watts per square metre, checked against the targets you give. No inter-reflection and no shadows: a lower bound. Returns Problems for failed targets.',
      inputSchema: obj({
        targets: obj({ avgLux: num('Required average illuminance, lux.', 0, 100000), minLux: num('Required lowest illuminance, lux.', 0, 100000), uniformity: num('Required lowest ÷ average, a ratio.', 0, 1), lpd: num('Highest power density, watts per square metre.', 0, 1000) }, [], 'Targets from the standard or the brief; leave out any you do not want checked.'),
        spacingMm: num('Grid spacing, millimetres.', 100, 5000, { default: 500 }), heightMm: num('Workplane height above the floor, millimetres.', 0, 5000, { default: 800 }),
        lightLossFactor: num('Light loss factor (maintenance), a ratio.', 0.1, 1, { default: 0.8 }),
      }),
      run: (a) => {
        const r = calcLighting(W(), { targets: a.targets, spacing: a.spacingMm, height: a.heightMm, llf: a.lightLossFactor });
        if (!r.ok) failed(r, ['Call photometry_set for the luminaires, and draw closed walls for the rooms.']);
        return { rooms: r.areas.map((x) => ({ name: x.name, luminaires: x.luminaires, points: x.res.stats.n, minLux: r1(x.res.stats.min), avgLux: r1(x.res.stats.avg), maxLux: r1(x.res.stats.max), uniformity: r2(x.res.stats.minAvg), wattsPerM2: r2(x.res.lpd), checks: x.checks })),
          problems: problemsOut(r.problems), notes: notesOut(r.notes) };
      },
    },
    {
      name: 'runs_sizes_set', group: 'edit', rollbackPreview: true, title: 'Set run sizes',
      description: 'Sets sizes on pipe, duct, cable tray and conduit runs in one undo step: a pipe or conduit size name, or a duct or tray width and height in millimetres. Use the proposals from pipes_check, ducts_check or carriers_check. Refuses a size the run cannot have.',
      inputSchema: obj({ changes: { type: 'array', minItems: 1, maxItems: 200, description: 'One entry per run.', items: obj({
        run: { type: 'string', description: 'The run\'s GlobalId, from a check\'s proposals.', minLength: 1, maxLength: 64 },
        size: { type: 'string', description: 'A pipe size name such as "3/4" or "1-1/2", or a conduit trade size.', maxLength: 12 },
        w: num('Width in millimetres (duct or tray; a round duct\'s diameter).', 10, 5000), h: num('Height in millimetres (duct or tray).', 10, 5000) }, ['run']) } }, ['changes']),
      outputSchema: obj({ changed: { type: 'integer', description: 'How many runs were changed.', minimum: 0, maximum: 1000 } }),
      run: async (a) => {
        const have = new Set(readRuns(W()).map((r) => r.guid));
        const missing = a.changes.filter((c) => !have.has(c.run));
        if (missing.length) throw new ToolError('not_found', 'No run with GlobalId ' + missing[0].run + '.', { next: ['Call pipes_check, ducts_check or carriers_check and use the run ids in its proposals.'] });
        const r = await edit('set ' + a.changes.length + ' run size' + (a.changes.length > 1 ? 's' : ''), setRunSizes(a.changes.map((c) => ({ guid: c.run, size: c.size, w: c.w, h: c.h }))));
        void r;
        return { changed: a.changes.length };
      },
    },
    {
      name: 'loads_set', group: 'edit', rollbackPreview: true, title: 'Set loads on elements',
      description: 'Keeps a calculation input on an element: a fixture\'s fixture units, equipment\'s water flow in litres per second, or a diffuser\'s airflow in litres per second. Read by pipes_check and ducts_check. Use the element\'s GlobalId.',
      inputSchema: obj({ element: { type: 'string', description: 'The element\'s GlobalId.', minLength: 1, maxLength: 64 }, fixtureUnits: num('Fixture units from the code table.', 0, 100000), flowLps: num('Water flow in litres per second.', 0, 10000), airflowLps: num('Airflow in litres per second.', 0, 100000) }, ['element']),
      outputSchema: obj({ element: { type: 'string', description: 'The element changed.', maxLength: 64 } }),
      run: async (a) => {
        if (!elementByGuid(W(), a.element)) throw new ToolError('not_found', 'No element with GlobalId ' + a.element + '.', { next: ['Use element_properties or elements_find to get the id.'] });
        if (a.fixtureUnits === undefined && a.flowLps === undefined && a.airflowLps === undefined) throw new ToolError('invalid_argument', 'Give at least one of fixtureUnits, flowLps or airflowLps.', { next: [] });
        await edit('set loads', setLoad(a.element, a));
        return { element: a.element };
      },
    },
    {
      name: 'photometry_set', group: 'edit', rollbackPreview: true, title: 'Set a luminaire\'s photometry',
      description: 'Stores an IES (LM-63) or EULUMDAT (LDT) file on luminaires so lighting_check can use it. The text is read first and refused with a reason if it does not parse. Content is kept in the model file with each element.',
      inputSchema: obj({ elements: { type: 'array', minItems: 1, maxItems: 500, description: 'GlobalIds of the luminaires.', items: { type: 'string', minLength: 1, maxLength: 64 } },
        name: { type: 'string', description: 'The file name, e.g. "downlight.ies" (its ending tells IES from LDT).', maxLength: 120 }, text: { type: 'string', description: 'The whole file as text.', minLength: 50, maxLength: 400000 } }, ['elements', 'text']),
      outputSchema: obj({ elements: { type: 'integer', description: 'How many elements got the file.', minimum: 0, maximum: 1000 } }),
      run: async (a) => {
        const ed = E(), w = W();
        const bad = a.elements.find((g) => !elementByGuid(w, g));
        if (bad) throw new ToolError('not_found', 'No element with GlobalId ' + bad + '.', { next: ['Use elements_find to get the luminaires\' ids.'] });
        try { setPhotometry(a.elements[0], a.name || '', a.text); } catch (e) { throw new ToolError('invalid_argument', 'The file did not read: ' + (e.key || e.message) + '.', { next: ['Send the whole text of an IES LM-63 type C file or an EULUMDAT file.'] }); }
        void ed;
        for (const g of a.elements) await edit('set photometry', setPhotometry(g, a.name || '', a.text));
        return { elements: a.elements.length };
      },
    },
    {
      name: 'carrier_add', group: 'edit', rollbackPreview: true, title: 'Add a cable tray or conduit',
      description: 'Draws a cable tray or a conduit through points on a level as a run (tray or conduit system, saved as IfcCableCarrierSegment), joined to others it touches, one undo step. A tray has a width and depth in millimetres; a conduit a type and trade size. Points are millimetres in the level\'s plan with z the height.',
      inputSchema: obj({ level: { type: 'string', description: 'A level\'s GlobalId, from model_describe.', minLength: 1, maxLength: 64 }, kind: { type: 'string', enum: ['tray', 'conduit'], description: 'tray or conduit.' },
        points: { type: 'array', minItems: 2, maxItems: 200, description: 'Centre-line points [x, y, z] in millimetres in the level\'s plan.', items: XYZ },
        widthMm: num('Tray width in millimetres.', 50, 1200, { default: 300 }), depthMm: num('Tray depth in millimetres.', 25, 300, { default: 100 }),
        type: { type: 'string', enum: Object.keys(CONDUIT_TYPES), description: 'Conduit type: emt or pvc40.' }, size: { type: 'string', enum: conduitSizes('emt'), description: 'Conduit trade size in inches, e.g. "3/4".' } }, ['level', 'kind', 'points']),
      outputSchema: obj({ run: { type: 'string', description: 'The new run\'s GlobalId, empty if none.', maxLength: 64 }, kind: { type: 'string', description: 'tray or conduit.', maxLength: 10 }, undo: { type: 'string', description: 'The undo label.', maxLength: 80 } }),
      run: async (a) => {
        const lvl = snapshotModel(E()).levels.find((l) => l.guid === a.level);
        if (!lvl) throw new ToolError('not_found', 'No level with GlobalId ' + a.level + '.', { next: ['Call model_describe to list the levels.'] });
        const r = await edit('add ' + a.kind, placeCarrier({ kind: a.kind, storey: a.level, points: a.points, width: a.widthMm ?? 300, depth: a.depthMm ?? 100, type: a.type || 'emt', size: a.size || '3/4' }));
        return { run: [...(r?.made?.keys?.() || [])][0] || '', kind: a.kind, undo: 'Assistant: add ' + a.kind };
      },
    },
  ];
}
void carrierOf;
