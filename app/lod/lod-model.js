/* SPDX-License-Identifier: Apache-2.0 */
/**
 * lod-model.js: the LOD framework in the IFC, BimCraft's thin adapter (0.10 booklet rows BK.13, BK.14, BK.17, BK.150, BK.151; session
 * bim-lod-10). DOM-free: node lib/lod/test/adapter.mjs. The rules are ./scale.js, ./record.js, ./milestones.js, ./fixes.js (a byte-identical
 * copy of lib/lod, made by `node lib/lod/sync.mjs`); this file only says where the record lives in the file and reads the model into
 * the plain shapes those take. It READS the verification, classification and type data other modules own and never writes them.
 *
 * In the IFC: property set CadCraft_LOD on the element (a wall, door, slab, column, a pipe from an imported file, anything with a class):
 * LOD, LODGeometry, LODInformation, LODDocumentation, plain integers, written only when set (an element nobody tagged has no set,
 * so a file that never used this is byte for byte what it was). An element with no LOD of its own reads its TYPE's (the plain
 * property LOD of CadCraft_WallType / FloorType / RoofType / CeilingType); a field-verified element reads 500.
 *
 *   recordOf(w, id) → { lod, parts }
 *   appTypeLods(ed) → Map(GlobalId → LOD of its type as the page draws it)
 *   lodList(w, { typeLods }) → [{ id, guid, cls, name, level, record, typeLod, verified, lod, lodFrom, codes, parts, marks }]   every element and room
 *   setLodOp(guids, patch) → op        patch = { lod?: n | null, parts?: { geometry?: n | null, … } }; null takes it off; one undo step
 *   milestoneElements(list) → the shape milestoneCheck takes
 *   roomsAndTags(ed) → { rooms, tagged }      what the audit's rooms and tags sets read (re-read here for the fix lists)
 *   applyFixesOp({ tags, names }) → op          the accepted fix lists, one undo step
 */
import { op } from '../model-ops.js';
import { updateDerived } from '../model-slabs.js';
import { ids, val, deleteLine } from '../ifc-util.js';
import { anyByGuid, classificationIndex, codesOf } from '../classify-model.js';
import { verificationList } from '../verify-model.js';
import { snapshotModel } from '../model-ops.js';
import { readDevices } from '../res-elec.js';
import { ModelWriter } from '../model-write.js';
import { wallTypes } from '../model-walls.js';
import { elementType } from '../element-types.js';
import { openingType, openingLod } from '../opening-types.js';
import { LOD_PSET, PARTS, PART_PROPS, LOD_PROP, fromPset, cleanRecord, recordRows, isEmpty, partMarks, effectiveLod } from './record.js';
import { isLod } from '../walls/lod.js';

const TYPE_PSETS = ['CadCraft_WallType', 'CadCraft_FloorType', 'CadCraft_RoofType', 'CadCraft_CeilingType'];
const refuse = (key) => { throw Object.assign(new Error(key), { key }); };

export function recordOf(w, id) { return fromPset(w.readPset(id, LOD_PSET)); }

function typeLodOf(w, typeId, cache) {
  if (typeId === null || typeId === undefined) return null;
  if (cache.has(typeId)) return cache.get(typeId);
  let lod = null;
  for (const name of TYPE_PSETS) { const ps = w.readPset(typeId, name); if (ps && isLod(Number(ps.LOD))) { lod = Number(ps.LOD); break; } }
  cache.set(typeId, lod);
  return lod;
}

/**
 * The LOD of the TYPE of everything the page itself draws, as the audit reads it (audit-bim.js): a wall type's tag, a floor / ceiling /
 * roof type's tag, a starter door or window (LOD 200). Map GlobalId → number. Anything else reads its type's LOD from the file.
 */
export function appTypeLods(ed) {
  const w = new ModelWriter(ed.W, ed.api, ed.mid), snap = snapshotModel(ed), out = new Map();
  const wt = new Map(wallTypes(w).map((x) => [x.key, x]));
  for (const x of snap.walls) { const v = wt.get(x.typeKey)?.lod; if (isLod(v)) out.set(x.guid, v); }
  for (const o of snap.openings) { const v = openingLod(openingType(o.typeKey)); if (isLod(v)) out.set(o.guid, v); }
  const D = snap.derived || {};
  for (const k of ['floor', 'ceiling', 'roof']) for (const x of D[k + 's'] || []) { const v = x.typeKey ? elementType(k, x.typeKey, w)?.lod : null; if (isLod(v)) out.set(x.guid, v); }
  return out;
}

export function lodList(w, { typeLods = null } = {}) {
  const base = verificationList(w);   // every element and room, with its verification record
  const ix = classificationIndex(w), tcache = new Map();
  w.defs(0);
  return base.map((x) => {
    const record = recordOf(w, x.id);
    const c = codesOf(w, x.id, ix);
    const typeLod = typeLodOf(w, ix.typeOf.get(x.id) ?? null, tcache) ?? typeLods?.get(x.guid) ?? null;
    const verified = x.record?.state === 'field-verified';
    const codes = Object.entries(c.effective || {}).map(([system, v]) => ({ system, code: v.code, title: v.title || '' }));
    const lod = effectiveLod(record, typeLod, verified);
    return { id: x.id, guid: x.guid, cls: x.cls, name: x.name, level: x.level, record, typeLod, verified, lod,
      lodFrom: verified ? 'verified' : record.lod !== null ? 'element' : isLod(typeLod) ? 'type' : '', codes, parts: record.parts, marks: partMarks({ lod, parts: record.parts }) };
  });
}

export const milestoneElements = (list) => list.map((x) => ({ id: x.guid, label: ((x.cls || '').replace(/^Ifc/, '') + (x.name ? ' ' + x.name : '')).trim() + (x.level ? ' (' + x.level + ')' : ''), cls: x.cls, codes: x.codes, lod: x.lod, level: x.level, parts: x.parts }));

function clearProps(w, id, names) {
  const d = w.defNamed(id, LOD_PSET);
  if (!d) return;
  const keep = [];
  for (const h of d.line.HasProperties || []) {
    const p = w.api.GetLine(w.mid, h.value, false);
    if (p?.Name && names.includes(val(p.Name))) { w.touch(h.value); deleteLine(w.api, w.mid, h.value); } else keep.push(h);
  }
  if (keep.length !== (d.line.HasProperties || []).length) { const s = w.touch(d.def); s.HasProperties = keep; w.write(s); }
}

/** Set (or take off, with null) the element's LOD and parts. The tag must be a level of the scale; anything else is refused. */
export function setLodOp(guids, patch = {}) {
  const list = [...new Set(guids || [])];
  if ('lod' in patch && patch.lod !== null && !isLod(patch.lod)) refuse('lod.err.level');
  for (const p of PARTS) if (patch.parts && p in patch.parts && patch.parts[p] !== null && !isLod(patch.parts[p])) refuse('lod.err.level');
  return op((w) => {
    if (!list.length) refuse('model.err.gone');
    const find = anyByGuid(w), out = [];
    for (const g of list) {
      const id = find(g);
      if (!id) refuse('model.err.gone');
      const prev = recordOf(w, id);
      const next = cleanRecord({ lod: 'lod' in patch ? patch.lod : prev.lod, parts: { ...prev.parts, ...(patch.parts || {}) } });
      const rows = recordRows(next);
      const gone = rows.filter((r) => r[2] === null).map((r) => r[0]);
      const set = rows.filter((r) => r[2] !== null);
      if (set.length) w.upsertPset(id, LOD_PSET, set);
      if (gone.length) clearProps(w, id, gone);
      out.push(id);
    }
    return { id: out[0] ?? null, ids: out, count: out.length };
  });
}

// ---------------------------------------------------------------------------------------------- BK.151 fix lists
export function roomsAndTags(ed, { nameOf = null } = {}) {
  const w = new ModelWriter(ed.W, ed.api, ed.mid), snap = snapshotModel(ed);
  const levelName = (id) => snap.levels.find((l) => l.id === id)?.name || '';
  const D = snap.derived || { spaces: [] };
  let devs = [];
  try { devs = readDevices(w); } catch (e) { devs = []; }
  const opLabel = (o) => (o.name || (o.kind === 'door' ? 'Door' : 'Window')) + (levelName(o.storey) ? ' (' + levelName(o.storey) + ')' : '');
  return {
    rooms: D.spaces.map((s) => ({ id: s.guid, number: s.number, name: s.name, level: levelName(s.storey) })),
    tagged: [
      ...snap.openings.map((o) => ({ id: o.guid, kind: o.kind, tag: o.mark, label: opLabel(o) })),
      ...D.spaces.map((s) => ({ id: s.guid, kind: 'room', tag: s.number, label: s.name || levelName(s.storey) })),
      ...devs.map((d) => ({ id: d.guid, kind: 'device', tag: d.tag, label: d.name || 'Device' })),
    ],
  };
}

/**
 * Apply an accepted fix list in ONE undo step: `tags` = [{ id (GlobalId), kind: 'door'|'window'|'room'|'device', tag }], `names` = [{ id, name }].
 * A door's or window's mark is its IFC Tag (as model-openings.js reads it), a room's number and name through updateDerived (the ops the Properties panel uses); a device's tag is its IFC Tag too. A row with nothing in it is skipped; a tag another device already has is refused, as the panel does.
 */
export function applyFixesOp({ tags = [], names = [] } = {}) {
  return op((w) => {
    let n = 0;
    const devices = tags.some((r) => r.kind === 'device') ? readDevices(w) : [];
    for (const r of tags) {
      const tag = String(r.tag ?? '').trim().slice(0, 20);
      if (!tag) continue;
      if (r.kind === 'door' || r.kind === 'window') {
        const id = w.byGuid(r.id);   // the mark IS the IFC Tag (model-openings.js reads it so; nextMark counts it)
        if (!id) refuse('model.err.gone');
        const l = w.touch(id); l.Tag = w.T('IFCIDENTIFIER', tag); w.write(l);
      }
      else if (r.kind === 'room') updateDerived(w, r.id, { number: tag });
      else if (r.kind === 'device') {
        const d = devices.find((x) => x.guid === r.id);
        if (!d) refuse('model.err.gone');
        if (devices.some((x) => x.guid !== r.id && x.tag === tag)) refuse('res.err.eltag');
        const l = w.touch(d.id); l.Tag = w.T('IFCIDENTIFIER', tag); w.write(l); d.tag = tag;
      } else continue;
      n++;
    }
    for (const r of names) {
      const name = String(r.name ?? '').trim();
      if (!name) continue;
      updateDerived(w, r.id, { name });
      n++;
    }
    return { id: null, ids: [], count: n };
  });
}
