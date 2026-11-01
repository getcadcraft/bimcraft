/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — tool names, descriptions and results are read by the assistant program, not shown to the person (AGENTS-SPEC §5). */
/**
 * energy-agents.js — the EnergyPlus step (0.8 EG.13, session `energy_PART_2`) as tools for the person's assistant, to the AI tool contract
 * (docs/AI-CONNECT-SPEC.md § 2, rule 34): `<area>_<verb>` names, short descriptions, bounded schemas, errors that say what to try next, results
 * marked as content (rule 36). Each runs the SAME functions the pane calls (energy-ep.js, energy-ep-run.js). Neither changes the file.
 *
 *   energyTools(env) → [tool definitions]      env = { ed() (an IfcEditor) } as mep-agents.js
 *   energyplus_export  read  the model written as an EnergyPlus input file: counts, anything skipped, and the text itself (bounded)
 *   energyplus_run   read  runs the person's EnergyPlus engine (when they have set one up) on the model: design-day loads against the design aid's, or a year on an .epw they give as text
 */
import { ToolError } from './host.js';
import { prepareModel, EP_NAME } from './energy-ep.js';
import { epGate, epAddonOn, getEngine, simulate } from './energy-ep-run.js';

const obj = (properties, required = [], description) => ({ type: 'object', ...(description ? { description } : {}), properties, required, additionalProperties: false });
const r1 = (v) => (Number.isFinite(v) ? Math.round(v * 10) / 10 : null);
const MAX_IDF = 60000;

export function energyTools(env) {
  const E = () => { const ed = env.ed(); if (!ed) throw new ToolError('not_open', 'No IFC model is open in BimCraft.', { next: ['Open a model, then call this tool again.'] }); return ed; };
  const model = (mode, mass) => {
    const ed = E(), r = prepareModel(ed.W, ed.api, ed.mid, { mode, mass: !!mass });
    if (!r.ok) throw new ToolError('not_found', 'The model has no rooms (IfcSpace with geometry) to write.', { next: ['Draw closed walls and create rooms, then try again.'] });
    return r;
  };
  const gated = () => { if (!epAddonOn()) throw new ToolError('unsupported', 'The EnergyPlus add-on is switched off.', { next: ['Ask the person to switch on the EnergyPlus check add-on in Settings › Add-ons.'] }); if (epGate()) throw new ToolError('unsupported', 'The EnergyPlus step is not offered in this build yet.', { next: ['Use the lab build, or ask the owner for the status of the licence answers.'] }); };
  return [
    {
      name: 'energyplus_export', group: 'read', untrusted: true, title: 'Export the model as an EnergyPlus file',
      description: 'Writes the open model\'s rooms, walls, floors, roofs, windows and loads as an EnergyPlus input file (IDF): one zone per room, ideal loads, design days or a year. Returns counts, anything skipped and the text (cut at ' + MAX_IDF + ' characters).',
      inputSchema: obj({
        mode: { type: 'string', enum: ['design', 'year'], description: 'design: two design days, no weather file (default). year: a run period for a weather file you run it with.' },
        mass: { type: 'boolean', description: 'true: walls with known material layers get thermal mass (layer by layer). Default false: no-mass at their U-values.' },
      }),
      run: (a) => {
        gated();
        const r = model(a.mode || 'design', a.mass);
        return { engine: EP_NAME, zones: r.zones, surfaces: r.surfaces, windows: r.windows, skipped: r.skipped.slice(0, 50), notes: r.notes, truncated: r.text.length > MAX_IDF, idf: r.text.slice(0, MAX_IDF) };
      },
    },
    {
      name: 'energyplus_run', group: 'read', untrusted: true, title: 'Simulate with EnergyPlus',
      description: 'Runs the person\'s EnergyPlus engine (their address is set in the pane; nothing is downloaded unless it is) on the open model. Design mode returns each room\'s design heating and cooling in watts beside the design aid\'s, with Problems. Year mode needs a weather file (.epw text) and returns heating and cooling kWh per room.',
      inputSchema: obj({
        mode: { type: 'string', enum: ['design', 'year'], description: 'design (default) or year.' },
        epw: { type: 'string', description: 'The weather file as EPW text, for year mode only.', maxLength: 3000000 },
        mass: { type: 'boolean', description: 'true: layered constructions with thermal mass where the file has layers.' },
      }),
      run: async (a) => {
        gated();
        if (!getEngine()) throw new ToolError('unsupported', 'No EnergyPlus engine is set up in this browser.', { next: ['Ask the person to enter the engine address in the Check with EnergyPlus pane, or use energyplus_export and run the file themselves.'] });
        const mode = a.mode || 'design';
        if (mode === 'year' && !a.epw) throw new ToolError('invalid_argument', 'Year mode needs a weather file.', { next: ['Give the .epw text in epw, or use mode design.'] });
        const r = model(mode, a.mass);
        let s;
        try { s = await simulate({ idf: r.text, epw: mode === 'year' ? new TextEncoder().encode(a.epw) : null, mode, zoneOf: r.zoneOf, ours: r.ours }); } catch (e) { throw new ToolError('failed', 'The EnergyPlus run failed: ' + String(e.key || e.message), { next: ['Check the engine address and that its files are reachable.'] }); }
        return {
          engine: EP_NAME, completed: s.err.completed, severe: s.err.severe, warnings: s.err.warnings, messages: s.err.messages,
          design: s.cmp.map((c) => ({ room: c.name, epHeatingW: r1(c.ep.heating), oursHeatingW: r1(c.ours.heating), heatingDiff: r1(c.dHeating * 100), epCoolingW: r1(c.ep.cooling), oursCoolingW: r1(c.ours.cooling) })),
          yearKwh: s.year ? [...s.year].map(([z, v]) => ({ room: r.zoneOf.get(z)?.name || z, heating: r1(v.heating), cooling: r1(v.cooling) })) : undefined,
          problems: s.problems.map((p) => ({ code: p.code, severity: p.severity, text: p.text })),
        };
      },
    },
  ];
}
