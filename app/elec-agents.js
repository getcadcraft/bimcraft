/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — tool names, descriptions and results are read by the assistant program, not shown to the person (AGENTS-SPEC §5). */
/**
 * elec-agents.js — electrical devices for the person's assistant (0.9 GH.10, getcadcraft/bimcraft#16; session `bim-hosts-09`). The tools call the SAME
 * functions the Electrical tool's clicks call (res-elec.js: placeDevices / placeDevice, changeDevice, linkLight's Controls, removeDevices, readDevices,
 * wallSpot); there is no second copy of the device rules. Written to the AI tool contract (docs/AI-CONNECT-SPEC.md § 2): `<area>_<verb>` names, bounded
 * schemas, a preview for every edit (one undo step each), errors that say what to try next, results marked as content.
 *
 *   elecTools(env) → [tool definitions]      env = { ed() (an IfcEditor), apply(label, op) → Promise<op result> } as mep-agents.js
 *
 *   devices_add     edit  up to 200 devices on a level in one undo step: kind (a key of DEVICES), at [x, y] mm in the level's plan, optional wall (a wall's
 *                         GlobalId to put it on), height_mm, angle_deg, circuit, load_w, tag. A wall device lands on the nearest wall face within 600 mm
 *                         of `at` (the way a click does) and faces into the room; ceiling devices hang from the ceiling at `at`
 *   device_change   edit  one device by GlobalId: tag, circuit, load_w, height_mm, at (a wall device re-snaps to the nearest wall face), angle_deg
 *   lights_set     edit  link lights to a switch or sensor (add them), or unlink them
 *   devices_delete  edit  remove devices; switches forget the lights that go
 *   devices_list    read  the devices of a level (or all): kind, tag, circuit, load, height, host wall, linked lights
 *
 * A kind is never invented: an unknown one is refused with the list of valid keys. Default heights are the metric ones of the Electrical tool (socket
 * 300 mm, switch 1100 mm; a ceiling device hangs from the level's ceiling). Loads are planning defaults, not a design.
 */
import { ToolError } from './host.js';
import { snapshotModel } from './model-ops.js';
import { ModelWriter } from './model-write.js';
import { readWalls } from './model-walls.js';
import { DEVICES, KINDS, wallSpot, readDevices, placeDevices, changeDevice, removeDevices, isLight, isSwitch } from './res-elec.js';

const LIMIT = 1000;
const REACH = 600;   // the Electrical tool's own reach (res-ui.js elSpot): the nearest wall face within 600 mm
const obj = (properties, required = [], description) => ({ type: 'object', ...(description ? { description } : {}), properties, required, additionalProperties: false });
const XY = { type: 'array', items: { type: 'number', minimum: -1e7, maximum: 1e7 }, minItems: 2, maxItems: 2 };
const GUID = (d) => ({ type: 'string', description: d, minLength: 1, maxLength: 64 });
const r1 = (v) => (Number.isFinite(v) ? Math.round(v * 10) / 10 : null);
const deg = (rad) => r1((rad * 180 / Math.PI + 360) % 360);

export function elecTools(env) {
  const E = () => { const ed = env.ed(); if (!ed) throw new ToolError('not_open', 'No IFC model is open in BimCraft.', { next: ['Open a model, then call this tool again.'] }); return ed; };
  const W = () => { const ed = E(); return new ModelWriter(ed.W, ed.api, ed.mid); };
  const edit = async (label, op) => { try { return await env.apply(label, op); } catch (e) { throw new ToolError(e?.key ? 'invalid_argument' : 'failed', refusal(e), { next: [] }); } };
  const refusal = (e) => ({ 'res.err.elkind': 'That kind is not a device kind. Valid kinds: ' + KINDS.join(', ') + '.', 'res.err.elwall': 'A wall device needs a wall within 600 mm of its point.',
    'res.err.eltag': 'That tag is already used by another device.', 'model.err.nolevel': 'No such level.', 'model.err.gone': 'No such device.', 'res.err.elnotswitch': 'Only a switch, push button or sensor controls lights.' }[e?.key] || String(e?.key || e?.message || e));
  const level = (ref) => {
    const L = snapshotModel(E()).levels;
    const s = String(ref ?? '').trim().toLowerCase();
    const l = L.find((x) => x.guid === ref) || L.find((x) => String(x.name).toLowerCase() === s);
    if (!l) throw new ToolError('not_found', 'No level "' + ref + '".', { next: ['Call model_describe to list the levels (name and GlobalId).'] });
    return l;
  };
  const unknownKind = (k) => new ToolError('invalid_argument', 'Unknown device kind "' + k + '". Valid kinds: ' + KINDS.join(', ') + '.', { next: ['Use one of the valid kinds.'] });
  const devOut = (d, byGuid, levels) => ({
    guid: d.guid, kind: d.kind, tag: d.tag, level: levels.find((l) => l.id === d.storey)?.name ?? null, circuit: d.circuit, load_w: d.load, height_mm: r1(d.height),
    mount: DEVICES[d.kind].mount, at: d.at.map(r1), angle_deg: deg(d.angle),
    wall: d.wall || null, side: d.wall ? d.side : null, offset_mm: d.wall ? r1(d.offset) : null,
    lights: isSwitch(d.kind) ? d.controls.filter((g) => byGuid.has(g)).map((g) => ({ guid: g, tag: byGuid.get(g).tag })) : undefined,
    switches: isLight(d.kind) ? [...byGuid.values()].filter((s) => s.controls.includes(d.guid)).map((s) => ({ guid: s.guid, tag: s.tag })) : undefined,
  });

  return [
    {
      name: 'devices_add', group: 'edit', rollbackPreview: true, title: 'Add electrical devices',
      description: 'Places electrical devices (sockets, switches, lights, sensors, detectors, boards) on a level in one undo step. Each has a kind, a point `at` [x, y] mm in the level\'s plan and optional wall, height_mm, angle_deg, circuit, load_w, tag. A wall device snaps to the nearest wall face within 600 mm of `at` like a click (give a point in the room near the wall to pick the room side, or `wall` from walls_list). Heights are mm above the level; defaults 300 for sockets, 1100 for switches, ceiling devices hang from the ceiling. Nothing is placed if any device is refused.',
      inputSchema: obj({
        level: { type: 'string', description: 'A level\'s name or GlobalId, from model_describe.', minLength: 1, maxLength: 255 },
        devices: { type: 'array', minItems: 1, maxItems: 200, description: 'The devices to place.', items: obj({
          kind: { type: 'string', enum: KINDS, description: 'A device kind: ' + KINDS.join(', ') + '.' },
          at: { description: 'A point [x, y] in millimetres in the level\'s plan. A wall device snaps to the nearest wall face within 600 mm.', ...XY },
          wall: GUID('Only this wall (a GlobalId from walls_list); the device sits on its face nearest to `at`.'),
          height_mm: { type: 'number', description: 'Height above the level in millimetres (default by kind).', minimum: 1, maximum: 100000 },
          angle_deg: { type: 'number', description: 'Facing in degrees, for a free or ceiling device (a wall device faces into the room).', minimum: -360, maximum: 360 },
          circuit: { type: 'string', description: 'Circuit name, e.g. "3".', maxLength: 20 },
          load_w: { type: 'number', description: 'Load in watts (default by kind).', minimum: 0, maximum: 10000000 },
          tag: { type: 'string', description: 'A tag that no other device has (default: the next R1, S1, L1 ...).', minLength: 1, maxLength: 20 },
        }, ['kind', 'at']) },
      }, ['level', 'devices']),
      outputSchema: obj({ devices: { type: 'array', description: 'The devices made, in order.', maxItems: 200, items: obj({ guid: { type: 'string', maxLength: 64 }, kind: { type: 'string', maxLength: 40 }, tag: { type: 'string', maxLength: 20 }, wall: { type: 'string', maxLength: 64 } }) },
        undo: { type: 'string', description: 'The undo label.', maxLength: 80 } }),
      run: async (a) => {
        const l = level(a.level), ed = E();
        const walls = readWalls(W(), l.id).map((x) => ({ guid: x.guid, a: x.a, b: x.b, t: x.t }));
        const have = new Set(readDevices(W()).map((d) => d.tag));
        const specs = [], tags = new Set();
        a.devices.forEach((d, i) => {
          const where = 'devices[' + i + ']';
          const D = DEVICES[d.kind];
          if (!D) throw unknownKind(d.kind);
          let sp = { at: d.at.slice(), angle: Number.isFinite(d.angle_deg) ? d.angle_deg * Math.PI / 180 : (D.mount === 'wall' ? 0 : Math.PI / 2) };
          if (D.mount === 'wall') {
            const pool = d.wall ? walls.filter((x) => x.guid === d.wall) : walls;
            if (d.wall && !pool.length) throw new ToolError('not_found', where + ': no wall with GlobalId ' + d.wall + ' on ' + l.name + '.', { next: ['Call walls_list for the level to get wall ids.'] });
            const hit = wallSpot(pool, d.at, REACH);
            if (!hit) throw new ToolError('invalid_argument', where + ': no wall within ' + REACH + ' mm of [' + d.at.join(', ') + '] for a ' + d.kind + ' (a wall device).', { next: ['Move `at` to within 600 mm of a wall face on ' + l.name + ', or give wall; walls_list shows the walls.'] });
            sp = { at: hit.at, angle: hit.angle, wall: hit.wall, side: hit.side, offset: hit.offset };
          } else if (d.wall) throw new ToolError('invalid_argument', where + ': ' + d.kind + ' hangs from the ceiling; leave wall out.', { next: [] });
          if (d.tag) {
            const tg = d.tag.slice(0, 20);
            if (have.has(tg) || tags.has(tg)) throw new ToolError('invalid_argument', where + ': the tag "' + tg + '" is used by another device.', { next: ['Leave the tag out for the next free one.'] });
            tags.add(tg);
          }
          specs.push({ level: l.guid, kind: d.kind, units: 'mm', circuit: d.circuit ?? '', height: d.height_mm, load: d.load_w, tag: d.tag, ...sp });
        });
        const r = await edit('add ' + specs.length + ' device' + (specs.length > 1 ? 's' : ''), placeDevices(specs));
        void ed;
        const byId = new Map(readDevices(W()).map((x) => [x.guid, x]));
        const made = [...(r?.made?.keys?.() || [])].map((g) => byId.get(g)).filter(Boolean);
        return { devices: made.map((d) => ({ guid: d.guid, kind: d.kind, tag: d.tag, wall: d.wall || '' })), undo: 'Assistant: add ' + specs.length + ' device' + (specs.length > 1 ? 's' : '') };
      },
    },
    {
      name: 'device_change', group: 'edit', rollbackPreview: true, title: 'Change an electrical device',
      description: 'Changes one device by GlobalId (from devices_list or devices_add): tag, circuit, load_w, height_mm, or its position `at` [x, y] mm in the level\'s plan (a wall device re-snaps to the nearest wall face within 600 mm), angle_deg (a free or ceiling device). Give at least one. One undo step.',
      inputSchema: obj({
        guid: GUID('The device\'s GlobalId.'),
        tag: { type: 'string', description: 'A new tag that no other device has.', minLength: 1, maxLength: 20 },
        circuit: { type: 'string', description: 'Circuit name; an empty string clears it.', maxLength: 20 },
        load_w: { type: 'number', description: 'Load in watts.', minimum: 0, maximum: 10000000 },
        height_mm: { type: 'number', description: 'Height above the level in millimetres.', minimum: 1, maximum: 100000 },
        at: { description: 'A new point [x, y] in millimetres in the level\'s plan.', ...XY },
        angle_deg: { type: 'number', description: 'Facing in degrees (a free or ceiling device).', minimum: -360, maximum: 360 },
      }, ['guid']),
      outputSchema: obj({ guid: { type: 'string', maxLength: 64 }, tag: { type: 'string', maxLength: 20 } }),
      run: async (a) => {
        const d = readDevices(W()).find((x) => x.guid === a.guid);
        if (!d) throw new ToolError('not_found', 'No device with GlobalId ' + a.guid + '.', { next: ['Call devices_list to get the devices\' ids.'] });
        const ch = {};
        if (a.tag !== undefined) ch.tag = a.tag;
        if (a.circuit !== undefined) ch.circuit = a.circuit;
        if (a.load_w !== undefined) ch.load = a.load_w;
        if (a.height_mm !== undefined) ch.height = a.height_mm;
        if (a.at !== undefined) ch.at = a.at;
        if (a.angle_deg !== undefined) ch.angle = a.angle_deg * Math.PI / 180;
        if (!Object.keys(ch).length) throw new ToolError('invalid_argument', 'Give at least one of tag, circuit, load_w, height_mm, at, angle_deg.', { next: [] });
        if (ch.tag && readDevices(W()).some((x) => x.guid !== a.guid && x.tag === ch.tag.trim())) throw new ToolError('invalid_argument', 'The tag "' + ch.tag + '" is used by another device.', { next: [] });
        await edit('change ' + d.tag, changeDevice(a.guid, ch));
        const n = readDevices(W()).find((x) => x.guid === a.guid);
        return { guid: a.guid, tag: n?.tag ?? d.tag };
      },
    },
    {
      name: 'lights_set', group: 'edit', rollbackPreview: true, title: 'Link lights to a switch',
      description: 'Links lights (luminaires and downlights) to a switch, push button or sensor, so the schedule and plan show what it controls; lights already linked stay linked. With unlink: true the given lights are unlinked instead. One undo step.',
      inputSchema: obj({
        switch: GUID('The switch, push button or sensor\'s GlobalId.'),
        lights: { type: 'array', minItems: 1, maxItems: 200, description: 'GlobalIds of luminaires or downlights.', items: GUID('A light\'s GlobalId.') },
        unlink: { type: 'boolean', description: 'true: unlink these lights instead of linking.' },
      }, ['switch', 'lights']),
      outputSchema: obj({ switch: { type: 'string', maxLength: 64 }, linked: { type: 'integer', description: 'How many lights the switch controls now.', minimum: 0, maximum: 100000 } }),
      run: async (a) => {
        const all = readDevices(W());
        const sw = all.find((x) => x.guid === a.switch);
        if (!sw) throw new ToolError('not_found', 'No device with GlobalId ' + a.switch + '.', { next: ['Call devices_list to get the switches\' ids.'] });
        if (!isSwitch(sw.kind)) throw new ToolError('invalid_argument', sw.tag + ' is a ' + sw.kind + ', not a switch, push button or sensor.', { next: ['Pick a device of kind switch, switch.2way, switch.dimmer, pushbutton or sensor.'] });
        for (const g of a.lights) {
          const x = all.find((y) => y.guid === g);
          if (!x) throw new ToolError('not_found', 'No device with GlobalId ' + g + '.', { next: ['Call devices_list to get the lights\' ids.'] });
          if (!isLight(x.kind)) throw new ToolError('invalid_argument', x.tag + ' is a ' + x.kind + ', not a light (luminaire or downlight).', { next: [] });
        }
        const set = new Set(sw.controls);
        for (const g of a.lights) { if (a.unlink) set.delete(g); else set.add(g); }
        await edit((a.unlink ? 'unlink lights from ' : 'link lights to ') + sw.tag, changeDevice(a.switch, { controls: [...set] }));
        return { switch: a.switch, linked: readDevices(W()).find((x) => x.guid === a.switch)?.controls.length ?? 0 };
      },
    },
    {
      name: 'devices_delete', group: 'edit', rollbackPreview: true, title: 'Delete electrical devices',
      description: 'Removes devices by GlobalId in one undo step; a switch forgets the lights that are removed. Nothing is removed if any id is not a device.',
      inputSchema: obj({ guids: { type: 'array', minItems: 1, maxItems: 500, description: 'GlobalIds of the devices to remove.', items: GUID('A device\'s GlobalId.') } }, ['guids']),
      outputSchema: obj({ removed: { type: 'integer', description: 'How many devices were removed.', minimum: 0, maximum: 100000 } }),
      run: async (a) => {
        const have = new Set(readDevices(W()).map((x) => x.guid));
        const miss = a.guids.filter((g) => !have.has(g));
        if (miss.length) throw new ToolError('not_found', 'No device with GlobalId ' + miss[0] + (miss.length > 1 ? ' (and ' + (miss.length - 1) + ' more)' : '') + '. Nothing was removed.', { next: ['Call devices_list to get the devices\' ids.'] });
        const guids = [...new Set(a.guids)];
        await edit('delete ' + guids.length + ' device' + (guids.length > 1 ? 's' : ''), removeDevices(guids));
        return { removed: guids.length };
      },
    },
    {
      name: 'devices_list', group: 'read', untrusted: true, title: 'List electrical devices',
      description: 'The electrical devices of a level (or of every level): GlobalId, kind, tag, circuit, load in watts, height, point and facing, the wall it sits on (GlobalId, side, offset along the wall), the lights a switch controls and the switches of a light. Millimetres, in the level\'s plan.',
      inputSchema: obj({ level: { type: 'string', description: 'A level\'s name or GlobalId; leave out for all levels.', minLength: 1, maxLength: 255 }, kind: { type: 'string', enum: KINDS, description: 'Only this kind.' },
        circuit: { type: 'string', description: 'Only this circuit.', maxLength: 20 }, limit: { type: 'integer', minimum: 1, maximum: LIMIT, description: 'Most devices to return.', default: 200 }, offset: { type: 'integer', minimum: 0, maximum: 100000, description: 'Devices to skip.', default: 0 } }),
      run: (a) => {
        const levels = snapshotModel(E()).levels;
        const l = a.level ? level(a.level) : null;
        const all = readDevices(W());
        const byGuid = new Map(all.map((d) => [d.guid, d]));
        const list = all.filter((d) => (!l || d.storey === l.id) && (!a.kind || d.kind === a.kind) && (a.circuit === undefined || d.circuit === a.circuit));
        const n = a.limit ?? 200, o = a.offset ?? 0;
        return { level: l ? l.name : 'all levels', total: list.length, offset: o, returned: Math.min(Math.max(list.length - o, 0), n), devices: list.slice(o, o + n).map((d) => devOut(d, byGuid, levels)) };
      },
    },
  ];
}
