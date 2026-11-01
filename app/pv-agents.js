/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — tool names, descriptions and results are read by the assistant program, not shown to the person (AGENTS-SPEC §5). */
/**
 * pv-agents.js — solar PV (0.8 EG.15, session `energy_PART_2`) as tools for the person's assistant, written to the AI tool contract (docs/AI-CONNECT-SPEC.md § 2,
 * rule 34): `<area>_<verb>` names, short descriptions, bounded schemas, a preview for every edit (rollback: one undo step), errors that say what to try next,
 * and results marked as content (rule 36). Each tool runs the SAME function the pane calls (pv-calc.js); none has a second copy of the maths. The apps contain
 * no AI: this gives the assistant the engines.
 *
 *   pvTools(env) → [tool definitions]      env = { ed() (an IfcEditor), apply(label, op) → Promise<op result> } as mep-agents.js
 *
 *   pv_arrays_check     read   the roof faces found in the model (tilt, azimuth, area) and the PV arrays in it, with Problems
 *   pv_yield_estimate   read   annual and monthly energy per array with shadows from the model, every input and loss shown
 *   pv_strings_check    read   modules per string and strings per inverter input against the module's and inverter's limits
 *   pv_oneline_make     read   the one-line diagram as data (and as SVG text on request), wire and fuse sizes from the factors given
 *   pv_array_add        edit   an array on a roof face or a set of ground rows, saved as an IfcSolarDevice, one undo step
 *   pv_array_delete     edit   remove arrays by GlobalId
 * The climate (monthly totals, temperatures), the module, the losses and the code factors are the CALLER's numbers; the starter values are labelled in the result.
 */
import { ToolError } from './host.js';
import { ModelWriter } from './model-write.js';
import { snapshotModel } from './model-ops.js';
import { cleanModule, STARTER_MODULE, STARTER_INVERTER } from './pv.js';
import { DEFAULT_LOSSES } from './pv-yield.js';
import { pvSite, modelFaces, planRoofArray, planGroundArray, placeArray, removeArrays, readArrays, calcArrays, calcYield, calcStrings, calcOneline } from './pv-calc.js';

const obj = (properties, required = [], description) => ({ type: 'object', ...(description ? { description } : {}), properties, required, additionalProperties: false });
const num = (description, min, max, extra = {}) => ({ type: 'number', description, minimum: min, maximum: max, ...extra });
const XYZ = { type: 'array', items: { type: 'number', minimum: -1e7, maximum: 1e7 }, minItems: 3, maxItems: 3 };
const LIMIT = 200;
const r1 = (v) => (Number.isFinite(v) ? Math.round(v * 10) / 10 : null);
const r2 = (v) => (Number.isFinite(v) ? Math.round(v * 100) / 100 : null);

const SITE = obj({ lat: num('Latitude in degrees, north positive.', -90, 90), lon: num('Longitude in degrees, east positive.', -180, 180), trueNorth: { type: 'array', items: num('A component.', -1, 1), minItems: 2, maxItems: 2, description: 'True north as a unit vector [x, y] in the model\'s plan; default [0, 1].' } },
  [], 'The site, when the model has no IfcSite latitude and longitude (or to try another place).');
const MODULE = obj({
  id: { type: 'string', description: 'A short name.', maxLength: 60 }, name: { type: 'string', description: 'A label.', maxLength: 120 },
  wp: num('Rated power, watts.', 50, 1000), voc: num('Open-circuit voltage, volts.', 5, 200), vmp: num('Voltage at maximum power, volts.', 5, 200), isc: num('Short-circuit current, amps.', 0.5, 30), imp: num('Current at maximum power, amps.', 0.5, 30),
  betaVocPctPerK: num('Voc temperature coefficient, percent per kelvin (negative).', -1, 0), betaVmpPctPerK: num('Vmp temperature coefficient, percent per kelvin (negative).', -1, 0), gammaPmaxPctPerK: num('Power temperature coefficient, percent per kelvin (negative).', -1, 0),
  noct: num('Nominal operating cell temperature, °C.', 30, 70), lengthMm: num('Long side, millimetres.', 300, 3000), widthMm: num('Short side, millimetres.', 300, 2000), thicknessMm: num('Thickness, millimetres.', 10, 100),
}, ['wp', 'voc', 'vmp', 'isc', 'imp', 'lengthMm', 'widthMm'], 'A module from its datasheet. Leave it out to use the labelled generic 400 Wp starter module.');
const INVERTER = obj({
  name: { type: 'string', description: 'A label.', maxLength: 120 }, pacKw: num('AC rating, kilowatts.', 0.1, 5000), vdcMax: num('Highest DC voltage, volts.', 50, 1500), mpptMin: num('Lowest MPPT voltage, volts.', 10, 1500), mpptMax: num('Highest MPPT voltage, volts.', 10, 1500),
  mppts: { type: 'integer', description: 'MPPT inputs.', minimum: 1, maximum: 20 }, idcMax: num('Operating current per input, amps.', 1, 500), iscMax: num('Short-circuit current per input, amps.', 1, 500), eta: num('Efficiency, a ratio.', 0.8, 1),
  vac: num('AC voltage, volts.', 100, 1000), phases: { type: 'integer', enum: [1, 3], description: 'AC phases.' },
}, ['pacKw', 'vdcMax', 'mpptMin', 'mpptMax'], 'An inverter from its datasheet. Leave it out to use the labelled generic 5 kW starter inverter.');

const moduleFrom = (m) => {
  if (!m) return STARTER_MODULE;
  const c = cleanModule({ ...m, id: m.id || 'typed', name: m.name || m.id || 'typed module', betaVoc: m.betaVocPctPerK === undefined ? undefined : m.betaVocPctPerK / 100, betaVmp: m.betaVmpPctPerK === undefined ? undefined : m.betaVmpPctPerK / 100,
    gammaPmax: m.gammaPmaxPctPerK === undefined ? undefined : m.gammaPmaxPctPerK / 100, noct: m.noct ?? 45 });
  if (!c.ok) throw new ToolError('invalid_argument', 'The module does not read: check ' + c.errors.join(', ') + ' (Vmp must be below Voc, Imp below Isc, coefficients negative).', { next: ['Fix those fields from the datasheet and call again.'] });
  return c.module;
};
const inverterFrom = (i) => (i ? { id: 'typed', name: i.name || 'Inverter', mppts: 1, idcMax: 0, iscMax: 0, eta: 0.97, vac: 240, phases: 1, ...i } : STARTER_INVERTER);
const skyFrom = (s) => {
  if (!s) return { mode: 'clear' };
  if (s.mode === 'monthly') {
    if (!Array.isArray(s.ghiKwhPerDay) || s.ghiKwhPerDay.length !== 12) throw new ToolError('invalid_argument', 'mode "monthly" needs ghiKwhPerDay with twelve numbers (kWh/m² per day, January first).', { next: ['Give twelve monthly means, or use mode "clear" for the clear-sky ceiling.'] });
    return { mode: 'monthly', ghi: s.ghiKwhPerDay };
  }
  return { mode: 'clear', factor: s.factor ?? 1 };
};
const tempsFrom = (t) => {
  if (t === undefined) return 20;
  if (t.length === 1) return t[0];
  if (t.length === 12) return t;
  throw new ToolError('invalid_argument', 'airTempC takes one number or twelve (January first), not ' + t.length + '.', { next: ['Give one value for the whole year, or twelve monthly values.'] });
};
const SKY = obj({ mode: { type: 'string', enum: ['clear', 'monthly'], description: 'clear: the clear-sky ceiling (an upper bound, not a forecast). monthly: your own monthly horizontal totals.' },
  ghiKwhPerDay: { type: 'array', items: num('Mean daily global horizontal irradiation, kWh per square metre per day.', 0, 12), minItems: 12, maxItems: 12, description: 'Twelve monthly means, January first.' },
  factor: num('For mode clear: a share of the clear-sky light, a ratio.', 0.05, 1, { default: 1 }) }, ['mode'], 'The light: the clear-sky ceiling or your own monthly totals.');
const LOSSES = obj({ soiling: num('Soiling loss, a ratio.', 0, 0.5), wiring: num('Wiring loss, a ratio.', 0, 0.5), mismatch: num('Mismatch loss, a ratio.', 0, 0.5), availability: num('Downtime loss, a ratio.', 0, 0.5), inverter: num('Inverter efficiency, a ratio.', 0.8, 1) }, [], 'System losses as ratios; the defaults are starter values.');

const problemsOut = (list) => list.slice(0, LIMIT).map((p) => ({ code: p.code, severity: p.severity, text: p.text, about: (p.about || []).slice(0, 10).map((a) => a.id), req: p.req, found: p.found }));
const notesOut = (notes) => (notes || []).map((n) => n.key + (n.vars ? ' ' + JSON.stringify(n.vars) : ''));
const messages = {
  'pv.err.nosite': 'The model has no site latitude and longitude, and none was given.', 'pv.err.noarray': 'There are no PV arrays in the model.', 'pv.err.noface': 'No roof face with that id.', 'pv.err.nofit': 'No module fits there with this setback and gap.',
  'pv.err.module': 'The module does not read.', 'pv.err.polar': 'The winter sun is too low at this latitude for a no-shade row spacing.', 'pv.err.nolevel': 'No level with that id.', 'pv.err.noinverter': 'Give an inverter.',
};
const failed = (r, next) => { throw new ToolError(r.key === 'pv.err.noarray' || r.key === 'pv.err.noface' || r.key === 'pv.err.nolevel' ? 'not_found' : r.key === 'pv.err.nosite' || r.key === 'pv.err.module' ? 'invalid_argument' : 'failed', messages[r.key] || 'The calculation could not run (' + r.key + ').', { next }); };

export function pvTools(env) {
  const E = () => { const ed = env.ed(); if (!ed) throw new ToolError('not_open', 'No IFC model is open in BimCraft.', { next: ['Open a model, then call this tool again.'] }); return ed; };
  const W = () => { const ed = E(); return new ModelWriter(ed.W, ed.api, ed.mid); };
  const siteArg = (s) => (s ? { lat: s.lat, lon: s.lon, north: s.trueNorth } : null);
  const edit = async (label, op) => { try { return await env.apply(label, op); } catch (e) { throw new ToolError(e?.key ? 'invalid_argument' : 'failed', String(e?.key || e?.message || e), { next: [] }); } };
  const arrOut = (a) => ({ id: a.id, guid: a.guid, name: a.name, mount: a.mount, modules: a.modules.length, kwp: a.kwp, tilt: r1(a.tilt), azimuth: a.azimuth === null ? null : r1(a.azimuth), module: a.module.name, rowPitchMm: a.rowPitchMm ?? undefined });

  return [
    {
      name: 'pv_arrays_check', group: 'read', untrusted: true, title: 'Check roof faces and PV arrays',
      description: 'Lists the roof faces found in the model (tilt, azimuth, area, from the saved triangles) and the PV arrays already placed (modules, kWp, tilt, azimuth), with Problems such as a steep or north-facing array. Use the face ids with pv_array_add.',
      inputSchema: obj({ site: SITE, faces: { type: 'boolean', description: 'Include the roof faces (default true).' } }),
      run: (a) => {
        const w = W(), site = pvSite(w, siteArg(a.site));
        if (!site) failed({ key: 'pv.err.nosite' }, ['Give site: { lat, lon } or set the latitude and longitude on the IfcSite.']);
        const arrays = calcArrays(w, { site: siteArg(a.site) });
        const faces = a.faces === false ? [] : modelFaces(w, site).faces.map((f) => ({ id: f.id, tiltDeg: r1(f.tilt), azimuthDeg: f.azimuth === null ? null : r1(f.azimuth), flat: f.flat, areaM2: f.areaM2 }));
        return { site: { lat: site.lat, lon: site.lon, fromModel: !!site.fromModel }, faces: faces.slice(0, LIMIT), arrays: arrays.ok ? arrays.arrays.map(arrOut) : [], problems: arrays.ok ? problemsOut(arrays.problems) : [] };
      },
    },
    {
      name: 'pv_yield_estimate', group: 'read', untrusted: true, title: 'Estimate PV energy per year',
      description: 'Estimates the energy of the PV arrays in the model: plane-of-array light from the sky you give, shadows cast by the model on the direct sunlight, cell temperature, losses and an inverter limit; monthly and annual per array and in total, with the specific yield and performance ratio. Every input is returned. The clear-sky mode is a ceiling, not a forecast; the starter module and losses are labelled.',
      inputSchema: obj({ site: SITE, sky: SKY, airTempC: { type: 'array', items: num('A temperature in °C.', -50, 60), minItems: 1, maxItems: 12, description: 'Daytime air temperature in °C: one number for the year, or twelve (January first).' },
        albedo: num('Ground reflectance, a ratio.', 0, 1, { default: 0.2 }), losses: LOSSES, inverterKw: num('Total AC rating that clips the output, kilowatts (leave out for no clipping).', 0.1, 100000), shading: { type: 'boolean', description: 'Cast shadows from the model (default true).' } }),
      run: (a) => {
        const w = W();
        const r = calcYield(w, { site: siteArg(a.site), sky: skyFrom(a.sky), tAmb: tempsFrom(a.airTempC), albedo: a.albedo ?? 0.2, losses: { ...DEFAULT_LOSSES, ...(a.losses || {}) }, inverter: a.inverterKw ? { pacKw: a.inverterKw } : null, shading: a.shading !== false });
        if (!r.ok) failed(r, ['Place an array with pv_array_add first, and give the site if the model has none.']);
        const t = r.res.total;
        return { site: { lat: r.site.lat, lon: r.site.lon }, total: { kwp: t.kwp, acKwhPerYear: t.acKwh, specificKwhPerKwp: t.specificKwhKwp, performanceRatio: t.pr, clippedPct: t.clippedPct, shadeLossPct: t.shadeLossPct, acKwhByMonth: t.monthly.map((m) => m.acKwh) },
          arrays: r.res.arrays.map((x) => ({ id: x.id, name: x.name, kwp: x.kwp, modules: x.modules, tilt: x.tilt, azimuth: x.azimuth, annual: x.annual, monthly: x.monthly })), inputs: r.res.inputs, problems: problemsOut(r.problems), notes: notesOut(r.notes) };
      },
    },
    {
      name: 'pv_strings_check', group: 'read', untrusted: true, title: 'Check PV string sizing',
      description: 'Finds the modules per string and strings per inverter input for a module and inverter: cold-day open-circuit voltage against the inverter and system limits, hot-day voltage against the MPPT window, current per input, and DC-to-AC ratio. Returns Problems when out of window. Temperatures and safety factors are yours; the starter module and inverter are labelled.',
      inputSchema: obj({ modules: { type: 'integer', description: 'How many modules to connect; default all modules of the arrays in the model.', minimum: 1, maximum: 100000 }, module: MODULE, inverter: INVERTER, inverters: { type: 'integer', description: 'Identical inverters.', minimum: 1, maximum: 100, default: 1 },
        coldestC: num('Lowest air temperature of record at the site, °C.', -60, 40, { default: -10 }), hotCellC: num('Hottest cell temperature, °C.', 30, 100, { default: 70 }), systemVoltage: num('System voltage limit of the code you design to, volts.', 100, 1500, { default: 1000 }),
        vocFactor: num('Safety factor on the cold open-circuit voltage.', 1, 2, { default: 1 }), dcAcMin: num('Lowest DC to AC ratio you accept.', 0.5, 2, { default: 1 }), dcAcMax: num('Highest DC to AC ratio you accept.', 0.8, 3, { default: 1.5 }) }),
      run: (a) => {
        const w = W(), module = moduleFrom(a.module);
        const r = calcStrings(w, { modules: a.modules, module, inverter: inverterFrom(a.inverter), inverters: a.inverters || 1, limits: { tMin: a.coldestC ?? -10, tHot: a.hotCellC ?? 70, vSys: a.systemVoltage ?? 1000, vocFactor: a.vocFactor ?? 1, dcacMin: a.dcAcMin ?? 1, dcacMax: a.dcAcMax ?? 1.5 } });
        if (!r.ok) failed(r, ['Give modules, or place an array first.']);
        const d = r.design;
        return { ok: d.ok, modulesPerString: d.n, strings: d.count, leftoverModules: d.leftover, inputsUsed: d.mpptsUsed, stringsPerInput: d.stringsPerMppt, dcKwp: d.kwp, acKw: d.acKw, dcToAc: d.dcac, window: { vocColdPerModule: d.window.vocCold, vmpColdPerModule: d.window.vmpCold, vmpHotPerModule: d.window.vmpHot, maxModules: d.window.nMax, minModules: d.window.nMin },
          string: { vocColdV: d.vocString, vmpHotV: d.vmpHotString, vmpColdV: d.vmpColdString }, checks: d.checks, problems: problemsOut(r.problems), notes: notesOut(r.notes) };
      },
    },
    {
      name: 'pv_oneline_make', group: 'read', untrusted: true, title: 'Make the PV one-line diagram',
      description: 'Makes the one-line diagram of the PV arrays in the model as data: array, combiner, DC disconnect, inverter, AC disconnect, panel, utility, with the current, fuse and wire size on every run from the factors and tables you give. Not a statement of code compliance. Ask for svg to get the drawing as SVG text.',
      inputSchema: obj({ inverter: INVERTER, inverters: { type: 'integer', description: 'Identical inverters.', minimum: 1, maximum: 100, default: 1 }, acVoltage: num('AC voltage, volts.', 100, 1000), acPhases: { type: 'integer', enum: [1, 3], description: 'AC phases.' },
        panel: { type: 'string', description: 'The panel\'s name.', maxLength: 60 }, iscFactor: num('Factor on short-circuit current (your code\'s, e.g. 1.25).', 1, 3, { default: 1.25 }), continuousFactor: num('Second factor for continuous operation.', 1, 3, { default: 1.25 }), acFactor: num('Factor on AC output current.', 1, 3, { default: 1.25 }),
        wireTable: { type: 'array', maxItems: 40, description: 'Your wire table, smallest first: { size, amps } after the derating you apply.', items: obj({ size: { type: 'string', description: 'A size name.', maxLength: 20 }, amps: num('Allowed current, amps.', 1, 2000) }, ['size', 'amps']) },
        fuseSizes: { type: 'array', maxItems: 60, description: 'Your standard fuse and breaker sizes, amps.', items: num('A size.', 1, 5000) }, svg: { type: 'boolean', description: 'Also return the drawing as SVG text.' } }),
      run: (a) => {
        const code = { ...(a.iscFactor ? { iscFactor: a.iscFactor } : {}), ...(a.continuousFactor ? { contFactor: a.continuousFactor } : {}), ...(a.acFactor ? { acFactor: a.acFactor } : {}), ...(a.wireTable ? { wire: a.wireTable } : {}), ...(a.fuseSizes ? { ocpd: a.fuseSizes } : {}) };
        const r = calcOneline(W(), { inverter: inverterFrom(a.inverter), inverters: a.inverters || 1, ac: a.acVoltage || a.acPhases ? { voltage: a.acVoltage || 240, phases: a.acPhases || 1 } : undefined, panel: a.panel, code });
        if (!r.ok) failed(r, ['Place an array with pv_array_add first.']);
        return { nodes: r.diagram.nodes, edges: r.diagram.edges, totals: r.diagram.totals, code: r.diagram.code, ...(a.svg ? { svg: r.svg.slice(0, 60000) } : {}), problems: problemsOut(r.problems) };
      },
    },
    {
      name: 'pv_array_add', group: 'edit', rollbackPreview: true, title: 'Add a PV array',
      description: 'Places a PV array in the model as one IfcSolarDevice (IFC2X3: IfcBuildingElementProxy) holding every module, one undo step. mount "roof" fits modules inside a roof face from pv_arrays_check with a setback from every edge; "ground" lays rows of tables at a tilt and azimuth with the row spacing that leaves no shade at the winter-solstice sun (or a pitch you give).',
      inputSchema: obj({ level: { type: 'string', description: 'The level (GlobalId, from model_describe) the array belongs to.', minLength: 1, maxLength: 64 }, mount: { type: 'string', enum: ['roof', 'ground'], description: 'roof or ground.' }, site: SITE, module: MODULE,
        face: { type: 'string', description: 'Roof face id from pv_arrays_check (mount roof).', maxLength: 12 }, orientation: { type: 'string', enum: ['portrait', 'landscape'], description: 'Module orientation.' }, setbackMm: num('Setback from every roof edge, millimetres.', 0, 3000, { default: 300 }), gapMm: num('Gap between modules, millimetres.', 0, 100, { default: 20 }),
        name: { type: 'string', description: 'The array\'s name.', maxLength: 80 }, origin: { description: 'Ground: the middle of the first table\'s lower edge on the ground, millimetres.', ...XYZ }, rows: { type: 'integer', description: 'Ground: number of rows.', minimum: 1, maximum: 100, default: 1 }, modulesPerRow: { type: 'integer', description: 'Ground: modules across a table.', minimum: 1, maximum: 200, default: 10 },
        modulesHigh: { type: 'integer', description: 'Ground: modules up the slope of a table.', minimum: 1, maximum: 6, default: 1 }, tiltDeg: num('Ground: tilt from horizontal.', 0, 80, { default: 30 }), azimuthDeg: num('Ground: bearing the array faces, degrees from true north clockwise.', 0, 360), rowPitchMm: num('Ground: row spacing, millimetres (leave out for the winter-solstice rule).', 500, 50000),
        winterHours: num('Ground: hours from solar noon the no-shade rule covers.', 0, 5, { default: 0 }) }, ['level', 'mount']),
      outputSchema: obj({ array: { type: 'string', description: 'The array\'s id.', maxLength: 20 }, guid: { type: 'string', description: 'The device\'s GlobalId.', maxLength: 64 }, modules: { type: 'integer', description: 'Modules placed.', minimum: 0, maximum: 100000 }, kwp: { type: 'number', description: 'DC power, kWp.' }, undo: { type: 'string', description: 'The undo label.', maxLength: 80 } }),
      run: async (a) => {
        const ed = E(), w = W();
        if (!snapshotModel(ed).levels.some((l) => l.guid === a.level)) failed({ key: 'pv.err.nolevel' }, ['Call model_describe to list the levels.']);
        const site = pvSite(w, siteArg(a.site));
        if (!site) failed({ key: 'pv.err.nosite' }, ['Give site: { lat, lon }.']);
        const module = moduleFrom(a.module);
        let p;
        if (a.mount === 'roof') {
          if (!a.face) throw new ToolError('invalid_argument', 'mount "roof" needs a face id.', { next: ['Call pv_arrays_check and pick a face id.'] });
          p = planRoofArray(w, { site, face: a.face, module, orient: a.orientation, setback: a.setbackMm ?? 300, gap: a.gapMm ?? 20, name: a.name });
        } else {
          p = planGroundArray(w, { site, module, orient: a.orientation, perRow: a.modulesPerRow ?? 10, stack: a.modulesHigh ?? 1, rows: a.rows ?? 1, tilt: a.tiltDeg ?? 30, azimuth: a.azimuthDeg ?? (site.lat >= 0 ? 180 : 0), origin: a.origin || [0, 0, 0], pitchMm: a.rowPitchMm, hours: a.winterHours ?? 0, gap: a.gapMm ?? 20, name: a.name });
        }
        if (!p.ok) failed(p, a.mount === 'roof' ? ['Try a smaller setback or another face, or call pv_arrays_check to see the faces.'] : ['Check the site latitude and the tilt.']);
        const r = await edit('add PV array', placeArray({ array: p.array, storey: a.level }));
        return { array: p.array.id, guid: [...(r?.made?.keys?.() || [])][0] || '', modules: p.array.modules.length, kwp: p.array.kwp, undo: 'Assistant: add PV array' };
      },
    },
    {
      name: 'pv_array_delete', group: 'edit', rollbackPreview: true, title: 'Delete PV arrays',
      description: 'Deletes PV arrays (the IfcSolarDevice and all its modules) by GlobalId, one undo step. Use the guids from pv_arrays_check.',
      inputSchema: obj({ arrays: { type: 'array', minItems: 1, maxItems: 100, description: 'GlobalIds of the arrays.', items: { type: 'string', minLength: 1, maxLength: 64 } } }, ['arrays']),
      outputSchema: obj({ deleted: { type: 'integer', description: 'How many arrays were deleted.', minimum: 0, maximum: 100 } }),
      run: async (a) => {
        const have = new Set(readArrays(W()).map((x) => x.guid)), missing = a.arrays.filter((g) => !have.has(g));
        if (missing.length) throw new ToolError('not_found', 'No PV array with GlobalId ' + missing[0] + '.', { next: ['Call pv_arrays_check and use the guids it lists.'] });
        await edit('delete PV arrays', removeArrays(a.arrays));
        return { deleted: a.arrays.length };
      },
    },
  ];
}
void r2;
