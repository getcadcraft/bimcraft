/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — tool names, descriptions and results are read by the assistant program, not shown to the person (AGENTS-SPEC §5). */
/**
 * sim-agents.js — people in the building (EG.48) and room acoustics (EG.49), session `bim-sim_PART_2`, as tools for the person's assistant, written to the
 * AI tool contract (docs/AI-CONNECT-SPEC.md § 2, rule 34): `<area>_<verb>` names, short descriptions, bounded schemas, errors that say what to try next, results
 * marked as content (rule 36). Each tool runs the SAME function the panel calls (people-model.js, acoustics-model.js); there is no second copy of the maths.
 * All three only read the model; nothing here edits it. The apps contain no AI: this gives the assistant the engines.
 *
 *   simTools(env) → [tool definitions]      env = { ed() (an IfcEditor) } as agents.js modelTools(env)
 *
 *   people_run    read   an evacuation or a day's arrivals: time out, queues at doors and stairs, the bottleneck, Problems; shut doors for a what-if
 *   escape_check   read   the longest walk to an exit from each room, along the walls, through doors and stairs

 *   hazard_run         read   a flood rising through the rooms, wind on the storeys, or an earthquake shaking them (EG.47): the numbers behind the playback
 *   lifecycle_run      read   what wears out over 50 years and when it is replaced, with costs when typed (EG.45)
 *   acoustics_check    read   reverberation time by octave band for each room (Sabine and Eyring) from its size and finishes, with the absorption a target needs
 */
import { ToolError } from './host.js';
import { runPeople, peopleScene } from './people-model.js';
import { travelDistances } from './people-sim.js';
import { acousticsRooms } from './acoustics-model.js';
import { MATERIALS, rtProblems, BANDS } from './acoustics.js';
import { floodScene, hazardBuilding, hazardFrameBuilding } from './hazard-model.js';
import { lifecycleRun, LIVES } from './lifecycle.js';
import { lifecycleParts, lifecycleCarbon } from './lifecycle-model.js';
import { floodRun, windRun, quakeRun, staticSway, groundMotion } from './hazard.js';

const obj = (properties, required = [], description) => ({ type: 'object', ...(description ? { description } : {}), properties, required, additionalProperties: false });
const num = (description, min, max, extra = {}) => ({ type: 'number', description, minimum: min, maximum: max, ...extra });
const r1 = (v) => (Number.isFinite(v) ? Math.round(v * 10) / 10 : null);
const r2 = (v) => (Number.isFinite(v) ? Math.round(v * 100) / 100 : null);
const LIMIT = 100;
const problemsOut = (list) => list.slice(0, LIMIT).map((p) => ({ code: p.code, severity: p.severity, text: p.text, about: (p.about || []).slice(0, 10).map((a) => a.id), req: p.req, found: p.found }));

export function simTools(env) {
  const E = () => { const ed = env.ed(); if (!ed) throw new ToolError('not_open', 'No IFC model is open in BimCraft.', { next: ['Open a model, then call this tool again.'] }); return ed; };
  const names = (scene) => {
    const m = new Map();
    let d = 0, s = 0;
    for (const o of scene.openings) m.set(o.id, o.kind === 'stair' ? 'stair ' + ++s : (o.exit ? 'exit door ' : 'door ') + ++d + ' (' + (scene.rooms[o.end[0].room]?.levelName || '') + ')');
    return m;
  };
  return [
    {
      name: 'people_run', group: 'read', untrusted: true, title: 'Walk people through the building',
      description: 'Walks people through the rooms, doors and stairs: an evacuation (everyone walks to an exit) or arrivals (everyone comes in and walks to a room). Doors and stairs pass people at a set rate, so queues form where the building narrows. Returns the time out, the queues at each opening, the bottleneck and Problems. A coarse crowd model for design decisions, not a fire-safety certificate; the limits are the person\'s.',
      inputSchema: obj({
        scenario: { type: 'string', enum: ['evacuate', 'arrive', 'exchange'], description: 'evacuate (default), arrive, or exchange (the people in the rooms leave while as many come in: counter-flow at the doors).', default: 'evacuate' },
        people: { type: 'object', description: 'People per room: room id (level GlobalId:n, from escape_check) → a count, replacing the area factor for that room (0 empties it).', additionalProperties: num('People.', 0, 100000) },
        m2PerPerson: num('Floor area per person in square metres (default 10). Rooms named like a corridor, stair or toilet hold nobody.', 0.5, 200, { default: 10 }),
        premoveS: { type: 'array', items: { type: 'number', minimum: 0, maximum: 3600 }, minItems: 2, maxItems: 2, description: 'Evacuation: shortest and longest time in seconds from the alarm to the first step, [10, 60] by default.' },
        windowS: num('Arrivals: seconds over which people arrive (default 600).', 1, 7200, { default: 600 }),
        shut: { type: 'array', items: { type: 'string', minLength: 1, maxLength: 64 }, maxItems: 200, description: 'GlobalIds of doors to treat as blocked: a what-if.' },
        travelLimitM: num('The longest walk to an exit the person allows, metres; rooms over it become warnings. Leave out when there is no limit.', 1, 1000),
        availableS: num('Time available to get out, seconds; a run that takes longer is a warning.', 1, 36000),
        seed: num('Run number: the same number gives the same run (default 1).', 1, 1e6, { default: 1 }),
        untilS: num('Longest run in seconds (default 1800).', 10, 14400, { default: 1800 }),
      }),
      run: (a) => {
        const ed = E();
        const o = { scenario: a.scenario || 'evacuate', m2PerPerson: a.m2PerPerson || 10, seed: a.seed || 1, until: a.untilS || 1800, blocked: a.shut || [] };
        if (a.people) o.loads = a.people;
        if (a.premoveS) o.premove = [Math.min(...a.premoveS), Math.max(...a.premoveS)];
        if (a.windowS) o.window = a.windowS;
        if (a.travelLimitM) o.travelLimit = a.travelLimitM;
        if (a.availableS) o.availableTime = a.availableS;
        const r = runPeople(ed, o);
        if (!r.scene.rooms.length || !r.scene.openings.length) throw new ToolError('not_found', 'No rooms with doors were found on any level.', { next: ['Draw closed walls and place doors (model_describe lists what is there), then call again.'] });
        const R = r.out.results, nm = names(r.scene), far = new Map(r.travel.map((x) => [x.id, x]));
        return {
          scenario: R.scenario, people: R.people, finished: R.finished, stuck: R.stuck, unfinished: R.unfinished,
          timeOutS: r1(R.totalTime), halfS: r1(R.t50), ninetyPercentS: r1(R.t90), meanWalkedM: R.meanWalked, longestWalkedM: R.maxWalked, meanWaitS: R.meanWait,
          bottleneck: R.bottleneck ? { guid: R.bottleneck, name: nm.get(R.bottleneck) } : null,
          openings: R.openings.filter((x) => x.passed > 0).slice(0, LIMIT).map((x) => ({ guid: x.id, name: nm.get(x.id), kind: x.kind, people: x.passed, directionChanges: x.switches, peakQueue: x.peakQueue, longestWaitS: x.maxWait, capacityPerS: x.capacity })),
          rooms: R.rooms.filter((x) => x.people > 0).slice(0, LIMIT).map((x) => ({ room: x.id, name: x.name, people: x.people, allOutByS: x.clearT, longestWalkM: x.maxWalked, farthestFromExitM: far.get(x.id)?.maxM ?? null })),
          problems: problemsOut(r.problems), notes: r.notes.map((n) => n.key),
          assumptions: 'Speed S = 1.4 (1 − 0.266 D) m/s by crowd density D; doors pass 1.3 people per second per metre of width less 150 mm each side; stairs 1.0 and 0.75 of walking speed. Seeded: the same run number repeats exactly.',
        };
      },
    },
    {
      name: 'escape_check', group: 'read', untrusted: true, title: 'Walk to an exit, per room',
      description: 'The longest walk to an exit from each room, along the walls and through doors and stairs, with the opening it leaves by and where the farthest point is. Doors to outside are the exits. Close doors for a what-if. The limit is the person\'s (travelLimitM); none is assumed.',
      inputSchema: obj({
        shut: { type: 'array', items: { type: 'string', minLength: 1, maxLength: 64 }, maxItems: 200, description: 'GlobalIds of doors to treat as blocked.' },
        travelLimitM: num('A limit in metres; rooms over it are listed in over.', 1, 1000),
      }),
      run: (a) => {
        const ed = E(), { scene } = peopleScene(ed);
        if (!scene.rooms.length) throw new ToolError('not_found', 'No rooms found.', { next: ['Draw closed walls and doors first.'] });
        const nm = names(scene), tr = travelDistances(scene, { blocked: a.shut || [] });
        const rooms = tr.slice(0, 500).map((x) => ({ room: x.id, name: x.name, level: scene.rooms[x.room].levelName, farthestM: x.maxM, reachable: x.reachable, via: x.via ? { guid: x.via, name: nm.get(x.via) } : null, farthestPointMm: x.at }));
        return { rooms, over: a.travelLimitM ? rooms.filter((x) => x.reachable && x.farthestM > a.travelLimitM).map((x) => x.name) : undefined, noWayOut: rooms.filter((x) => !x.reachable).map((x) => x.name),
          note: 'Walked along the room outlines, straight where a door can be seen, up to about 3 % long around corners. A stair counts its slope length.' };
      },
    },
    {
      name: 'hazard_run', group: 'read', untrusted: true, title: 'Flood, wind or earthquake',
      description: 'Runs one hazard on the model and returns the numbers. flood: a hydrograph rising to peakM above the lowest floor; rooms wet by openings and stairs, when and how deep. wind: pressure by storey from the 10 m wind speed; shear, overturning moment and sway. quake: a shear building (one mass per floor, one stiffness per storey) shaken by a made ground motion; drift, floor acceleration, base shear. Simple models with their assumptions returned; not a code check.',
      inputSchema: obj({
        hazard: { type: 'string', enum: ['flood', 'wind', 'quake'], description: 'Which hazard.' },
        peakM: num('flood: the highest water level above the lowest floor, metres (default 1).', 0.05, 30, { default: 1 }), riseMin: num('flood: minutes to rise (default 60).', 1, 14400, { default: 60 }), holdMin: num('flood: minutes at the peak (default 0).', 0, 14400), fallMin: num('flood: minutes to fall (default 0: no fall).', 0, 14400),
        windMs: num('wind: mean wind speed at 10 m in metres per second (default 35).', 1, 100, { default: 35 }), exponent: num('wind: height power-law exponent (default 0.143, open country).', 0.05, 0.5), gust: num('wind: gust factor (default 1.2).', 1, 3), direction: { type: 'string', enum: ['x', 'y'], description: 'wind: the direction the wind blows along (default x).' },
        pgaG: num('quake: peak ground acceleration in g (default 0.3).', 0.01, 2, { default: 0.3 }), periodS: num('quake and wind sway: the first period of the building in seconds; without it 0.1 s a storey.', 0.05, 10), dampingPct: num('quake: damping in percent of critical (default 5).', 0.5, 30, { default: 5 }),
        motion: { type: 'string', enum: ['ricker', 'noise'], description: 'quake: a Ricker pulse or filtered noise (default ricker).' }, motionHz: num('quake: the pulse\'s peak frequency or the ground\'s dominant frequency in Hz (default 2).', 0.2, 20), durationS: num('quake: length of the record in seconds (default 20).', 5, 120), seed: num('quake noise: run number.', 1, 1e6),
        source: { type: 'string', enum: ['period', 'frame'], description: 'quake and wind: where the floor stiffness comes from. period (default): one stiffness per storey fitted to periodS. frame: the Analysis tab\'s frame (beams, columns, bracing, slabs) is solved with a sideways load on each floor and its condensed stiffness is used; needs an IFC with a readable frame; periodS is ignored and the real period is returned.' },
        massKgM2: num('quake and wind sway: floor mass per square metre of footprint in kilograms (default 500: set it for the construction).', 50, 5000, { default: 500 }),
        driftLimit: num('quake: a storey drift ratio the person allows (drift ÷ storey height); storeys over it are listed.', 0.001, 0.2),
      }, ['hazard']),
      run: (a) => {
        const ed = E();
        if (!['flood', 'wind', 'quake'].includes(a.hazard)) throw new ToolError('invalid_argument', 'Unknown hazard "' + a.hazard + '".', { next: ['Use hazard: flood, wind or quake.'] });
        if (a.hazard === 'flood') {
          const sc = floodScene(ed);
          if (!sc.rooms.length) throw new ToolError('not_found', 'No rooms found.', { next: ['Draw closed walls with doors first.'] });
          const rise = (a.riseMin || 60) * 60, hold = (a.holdMin || 0) * 60, fall = (a.fallMin || 0) * 60, hy = [[0, 0], [rise, a.peakM || 1]];
          if (hold) hy.push([rise + hold, a.peakM || 1]);
          if (fall) hy.push([rise + hold + fall, 0]);
          const r = floodRun({ rooms: sc.rooms, openings: sc.openings, hydrograph: hy, dt: Math.max(10, Math.round((hy[hy.length - 1][0]) / 200)) });
          return { peakM: r.peak, wetRooms: r.wetCount, rooms: r.rooms.map((x) => ({ room: x.id, name: x.name, firstWetMin: x.firstWet === null ? null : r1(x.firstWet / 60), maxDepthM: x.maxDepth, wetForMin: r1(x.wetFor / 60) })).slice(0, 500),
            assumptions: 'Quasi-static: the water inside equals the water outside wherever an opening below it joins the room to the outside or to a wet room. Sills are the openings\' lowest edges above their own floor; walls are watertight; no flow rates, waves or debris.' };
        }
        let hb;
        if ((a.hazard === 'quake' || a.hazard === 'wind') && a.source === 'frame') {
          const fm = env.frameModel?.();
          if (!fm) throw new ToolError('not_found', 'No frame to read: the open IFC has no beams, columns or members the Analysis tab can use.', { next: ['Open an IFC with a structural frame, or leave source out for the period-fitted model.'] });
          hb = hazardFrameBuilding(fm, ed, { addKgM2: a.massKgM2 ?? 500, dir: a.direction || 'x' });
        } else hb = hazardBuilding(ed, { massPerM2: a.massKgM2 || 500, T1: a.periodS || null, dir: a.direction || 'x' });
        if (!hb.storeys.length) throw new ToolError('not_found', 'No levels with walls found.', { next: ['Draw walls on at least one level.'] });
        if (a.hazard === 'wind') {
          const w = windRun({ V10: a.windMs || 35, alpha: a.exponent || 0.143, G: a.gust || 1.2, storeys: hb.storeys.map((s) => ({ z: s.z, h: s.h, width: s.width_m })) }), sw = staticSway(hb.building, w.floors);
          return { windMs: a.windMs || 35, baseShearKN: r1(w.base.shear / 1000), overturningKNm: r1(w.base.moment / 1000), firstPeriodS: r2(hb.T1), periodAssumed: hb.assumedT1,
            storeys: hb.storeys.map((s, i) => ({ name: s.name, forceKN: r1(w.storeys[i].force / 1000), shearKN: r1(w.storeys[i].shear / 1000), swayMm: r1(sw.u[i] * 1000), driftRatio: Math.round(sw.drift[i] / s.h * 1e5) / 1e5 })),
            assumptions: 'q = ½ ρ V(z)², V(z) = V10 (z/10)^exponent; force = q × gust × (0.8 windward + 0.5 leeward) × width × storey height; sway ' + (a.source === 'frame' ? 'from the Analysis frame\'s condensed floor stiffness (K u = F). The wind forces stay these assumed ones' : 'from one stiffness per storey fitted to the first period') + '. Not a wind code check.' };
        }
        const dt = 0.005, rec = groundMotion({ kind: a.motion || 'ricker', pga: (a.pgaG || 0.3) * 9.80665, duration: a.durationS || 20, dt, f: a.motionHz || 2, seed: a.seed || 1 });
        const q = quakeRun(hb.building, rec, { dt, zeta: (a.dampingPct || 5) / 100 });
        const rows = hb.storeys.map((s, i) => ({ name: s.name, driftMm: r1(q.peak.drift[i] * 1000), driftRatio: Math.round(q.peak.drift[i] / s.h * 1e5) / 1e5, floorAccG: r2(q.peak.acc[i] / 9.80665) }));
        return { pgaG: a.pgaG || 0.3, firstPeriodS: r2(hb.T1), periodAssumed: hb.assumedT1, baseShearKN: r1(q.peak.shear / 1000), topDisplacementMm: r1(q.peak.top * 1000), totalMassT: r1(hb.building.totalMass / 1000), storeys: rows,
          over: a.driftLimit ? rows.filter((x) => x.driftRatio > a.driftLimit).map((x) => x.name) : undefined,
          assumptions: 'A shear building: one mass per floor (footprint × kg/m²), the same stiffness in every storey fitted to the first period, Rayleigh damping at the first two modes, Newmark average acceleration; an elastic model, no yielding, no torsion.' };
      },
    },
    {
      name: 'lifecycle_run', group: 'read', untrusted: true, title: 'Replacements over the years',
      description: 'Lists what the model holds that wears out (windows, doors, wall finishes, floors, ceilings, roof, stairs) with its quantity and a typical service life, and when each is replaced over the study period. With a cost per unit it adds cost per year, the total and its present value. Lives are planning defaults for the person to change; costs are the person\'s, none are assumed.',
      inputSchema: obj({
        years: num('Study period in years (default 50).', 5, 200, { default: 50 }), discountPct: num('Discount rate in percent a year for the present value (default 0).', 0, 30), inflationPct: num('Cost inflation in percent a year (default 0).', 0, 30),
        lives: { type: 'object', description: 'Service life in years per part key, replacing the default: ' + Object.keys(LIVES).join(', ') + '.', additionalProperties: num('Years.', 1, 200) },
        carbon: { type: 'boolean', description: 'Also give the embodied carbon (kg CO2e) of each replacement, from the model\'s carbon factors (the Carbon tab); parts with no factor are listed in noCarbon.' },
        unitCosts: { type: 'object', description: 'Cost per unit (the part\'s unit: m² or each) per part key, in the person\'s currency. A part with none is listed without a cost.', additionalProperties: num('Cost per unit.', 0, 1e7) },
      }),
      run: (a) => {
        const ed = E(), { parts } = lifecycleParts(ed);
        if (!parts.length) throw new ToolError('not_found', 'The model holds nothing to schedule.', { next: ['Draw walls, doors and windows first.'] });
        const cb = a.carbon ? lifecycleCarbon(ed, parts) : null, comps = parts.map((p) => ({ ...p, life: a.lives?.[p.key] ?? p.life, unitCost: a.unitCosts?.[p.key] ?? null, unitCarbon: cb ? cb.units.get(p.key) ?? null : null }));
        const r = lifecycleRun(comps, { years: a.years || 50, discount: (a.discountPct || 0) / 100, inflation: (a.inflationPct || 0) / 100 });
        return { years: r.years, parts: r.rows.map((x) => ({ key: x.key, name: x.name, qty: x.qty, unit: x.unit, life: x.life, unitCost: x.unitCost, replacedInYears: x.years, cost: Math.round(x.cost), presentValue: Math.round(x.pv), ...(cb ? { carbonKg: Math.round(x.carbon) } : {}) })), replacements: r.count,
          totalCost: Math.round(r.total), presentValue: Math.round(r.totalPv), ...(cb ? { totalCarbonKg: Math.round(r.totalCarbon), noCarbon: r.nocarbon } : {}), dearestYear: r.peak ? { year: r.peak.year, cost: Math.round(r.peak.cost) } : null, uncosted: r.uncosted,
          assumptions: 'A part is replaced at k × its life while that is before the end of the study; costs are in today\'s money unless inflation is given. Service lives are typical planning figures, not a source. Quantities are measured from the model: slope and waste are not counted.' };
      },
    },
    {
      name: 'acoustics_check', group: 'read', untrusted: true, title: 'Reverberation time of each room',
      description: 'Reverberation time by octave band (125 Hz to 4 kHz) for each room from its volume and its floor, wall and ceiling finishes: Sabine and Eyring, air absorption, the mid-frequency figure, and the absorption that would meet a target. Finishes default to a plain furnished house; pass finishes to change them. A guide for choosing finishes, not a measurement.',
      inputSchema: obj({
        targetS: num('Longest mid-frequency reverberation the person wants, seconds; rooms over it come back as Problems with the absorption needed.', 0.05, 20),
        temperatureC: num('Air temperature in degrees Celsius (default 20).', -20, 50), humidityPct: num('Relative humidity in percent (default 50).', 5, 100),
        finishes: { type: 'object', description: 'Per room: the room id from this tool (level GlobalId:n) → { floor, wall, ceiling } material keys. Keys: ' + Object.keys(MATERIALS).join(', ') + '.', additionalProperties: obj({ floor: { type: 'string', maxLength: 40 }, wall: { type: 'string', maxLength: 40 }, ceiling: { type: 'string', maxLength: 40 } }) },
        room: { type: 'string', maxLength: 100, description: 'Only this room id (level GlobalId:n).' },
        people: { type: 'object', description: 'People in each room (room id → count): each adds its share of sound absorption. Furniture in the model (by name) is counted automatically.', additionalProperties: num('People.', 0, 100000) },
        fromModel: { type: 'boolean', description: 'Read floor, wall and ceiling finishes from the model\'s wall types, floors and ceilings (default true); false uses the plain defaults unless finishes are given.' },
      }),
      run: (a) => {
        const ed = E();
        const set = { env: { T: a.temperatureC ?? 20, RH: a.humidityPct ?? 50 }, rooms: a.finishes || {}, people: a.people || {}, fromModel: a.fromModel !== false };
        let rooms = acousticsRooms(ed, set);
        if (a.room) rooms = rooms.filter((x) => x.id === a.room);
        if (!rooms.length) throw new ToolError('not_found', a.room ? 'No room "' + a.room + '".' : 'No rooms found.', { next: ['Call acoustics_check without room to list the room ids.'] });
        const bad = rooms.find((x) => !x.res.ok);
        if (bad && bad.res.reason === 'nomaterial') throw new ToolError('invalid_argument', 'Unknown finish "' + bad.res.key + '" for ' + bad.name + '.', { next: ['Use one of: ' + Object.keys(MATERIALS).join(', ') + '.'] });
        return {
          bandsHz: BANDS,
          rooms: rooms.slice(0, 500).map((x) => ({ room: x.id, name: x.name, level: x.levelName, areaM2: x.area_m2, heightM: x.height_m, volumeM3: x.volume_m3, finishes: x.set, finishesFrom: x.finishSource,
            sabineS: x.res.bands.map((b) => r2(b.sabine)), eyringS: x.res.bands.map((b) => r2(b.eyring)), usedS: x.res.bands.map((b) => r2(b.T)), midS: r2(x.res.mid.T), notes: x.res.notes.map((n) => n.key) })),
          problems: problemsOut(rtProblems(rooms, { target: a.targetS || null })),
          assumptions: 'Diffuse field: Sabine T = 0.161 V / (A + 4mV), Eyring T = 0.161 V / (−S ln(1 − ᾱ) + 4mV); "used" is Eyring above ᾱ 0.2. Air absorption by ISO 9613-1. Absorption coefficients are typical published values, not a product\'s test data; furniture, people and open doors are not counted.',
        };
      },
    },
  ];
}
