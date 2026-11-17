/* SPDX-License-Identifier: Apache-2.0 */
/**
 * stages/brief.js: Stage 1, the brief (0.10 BK.176, session stages-10). DOM-free: node tools/bimcraft-test/stages-test.mjs --brief.
 *
 * A new project starts from a brief: the client, the site, a budget and programme notes, and a list of rooms with a TARGET AREA, kept as
 * spaces before any wall exists (LOD 100). As the walls make rooms, the accommodation schedule says for each brief room whether what is
 * drawn MEETS it or is SHORT of it. Nothing is invented: a target is a number the person typed (or pasted from their brief).
 *
 * In the IFC:
 *   the project   property set CadCraft_Brief: Format 'cadcraft-brief 1', Client, Site, Budget (a number), Currency, Programme (IfcText,
 *                 one 'YYYY-MM-DD | milestone' per line), Notes, Tolerance (percent, default 5), Efficiency (0 to 1, default 0.8; how much
 *                 of a floor is rooms, the same word EG.58 program-mass.js uses).
 *   a brief room  an IfcSpace aggregated into the IfcBuilding, ObjectType 'BriefRoom', NO shape; Name and LongName = the room's name;
 *                 property set CadCraft_BriefRoom: Target (IfcAreaMeasure, m² per room), Count, Group, Note, Order. It carries no
 *                 quantity set, so a room schedule or COBie sheet never counts a target as a drawn area.
 *
 *   readBrief(w) → { exists, client, site, budget, currency, programme, notes, tolerance, efficiency, rooms: [{ id, guid, name, count, target_m2, group, note, order }] }
 *   drawnRooms(w) → [{ id, guid, name, number, level, area_m2 }]       the rooms the walls made (spaces with CadCraft_Room)
 *   accommodation(brief, drawn) → { rows, unbriefed, totals }          rows: { guid, name, group, count, target_m2 (each), target_total_m2,
 *        drawn: [{ guid, name, level, area_m2 }], drawn_count, drawn_m2, diff_m2, status: 'notdrawn' | 'short' | 'met' | 'over' }
 *   programOf(brief) → [{ name, count, area_m2 }]                      the shape program-mass.js cleanProgram / massingOptions read
 *   parseRooms(text) → { rooms, skipped }                              'Name; count; area' lines (tab, ; or , between; the count may be left out)
 *   parseProgramme(text) → [{ date, text }]
 *   ops, one undo step each (IfcEditor.modelChange): setBriefOp(fields) · addBriefRoomsOp([room…]) · changeBriefRoomOp(guid, fields) · removeBriefRoomsOp([guid…])
 *       startBriefOp({ fields, rooms }): all of it in one step (a new project's first edit)
 *   briefProblems(w, { t }) → [problem]   one WARNING for a brief room with a drawn area short of its target (source bimcraft.stages)
 */
import { op } from '../model-ops.js';
import { val } from '../ifc-util.js';
import { readLevels } from '../model-levels.js';
import { refuse, clean, cleanText, num, r2, safeIds, projectId, aggregateInto, parentsOf, quantityOf, day } from './common.js';

export const BRIEF_PSET = 'CadCraft_Brief', ROOM_PSET = 'CadCraft_BriefRoom', DRAWN_PSET = 'CadCraft_Room';
export const FORMAT = 'cadcraft-brief 1';
export const LIMITS = { rooms: 500, area_m2: 100000, count: 1000, budget: 1e12, programme: 40 };
export const DEFAULTS = { tolerance: 5, efficiency: 0.8 };

const BRIEF_OBJECT = 'BriefRoom';   // i18n-ignore: IFC file data (ObjectType)

/** A room name as matched: lower case, no accents, spaces collapsed, a trailing number ("Bedroom 2", "Bedroom #2") taken off. */
export const nameKey = (s) => String(s ?? '').normalize('NFKD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[#_]+/g, ' ').trim().replace(/\s+(no\.?|nr\.?)?\s*\d+[a-z]?$/i, '').replace(/\s+/g, ' ').trim();

// ---- reading -------------------------------------------------------------------------------------------------------------
export function readBrief(w) {
  const pj = projectId(w), ps = pj === undefined ? null : w.readPset(pj, BRIEF_PSET);
  const rooms = [];
  for (const id of safeIds(w, 'IFCSPACE')) {
    const r = w.readPset(id, ROOM_PSET);
    if (!r) continue;
    const l = w.api.GetLine(w.mid, id, false);
    rooms.push({ id, guid: val(l.GlobalId), name: val(l.Name) || val(l.LongName) || '', count: Math.max(1, Math.round(num(r.Count, 1))), target_m2: num(r.Target), group: String(r.Group || ''), note: String(r.Note || ''), order: Math.round(num(r.Order)) });
  }
  rooms.sort((a, b) => a.order - b.order || a.name.localeCompare(b.name));
  const tol = num(ps?.Tolerance, DEFAULTS.tolerance), eff = num(ps?.Efficiency, DEFAULTS.efficiency);
  return {
    exists: !!ps || rooms.length > 0, client: String(ps?.Client || ''), site: String(ps?.Site || ''), budget: num(ps?.Budget), currency: String(ps?.Currency || ''),
    programme: String(ps?.Programme || ''), notes: String(ps?.Notes || ''), tolerance: tol >= 0 && tol <= 50 ? tol : DEFAULTS.tolerance, efficiency: eff > 0 && eff <= 1 ? eff : DEFAULTS.efficiency, rooms,
  };
}

export function drawnRooms(w) {
  const parents = parentsOf(w), out = [];
  for (const id of safeIds(w, 'IFCSPACE')) {
    if (!w.readPset(id, DRAWN_PSET)) continue;
    const l = w.api.GetLine(w.mid, id, false), st = parents.get(id), lv = st ? w.api.GetLine(w.mid, st, false) : null;
    const a = quantityOf(w, id, ['NetFloorArea', 'GrossFloorArea']);
    out.push({ id, guid: val(l.GlobalId), name: val(l.LongName) || '', number: val(l.Name) || '', level: lv ? val(lv.Name) || '' : '', area_m2: r2(a || 0) });
  }
  return out;
}

// ---- the accommodation schedule --------------------------------------------------------------------------------------------
export function accommodation(brief, drawn) {
  const byKey = new Map();
  for (const d of drawn || []) { const k = nameKey(d.name); if (!k) continue; if (!byKey.has(k)) byKey.set(k, []); byKey.get(k).push(d); }
  const wanted = new Map();   // a name two brief rows share is matched once, by the first row
  const tol = (brief.tolerance ?? DEFAULTS.tolerance) / 100, used = new Set();
  const rows = (brief.rooms || []).map((r) => {
    const k = nameKey(r.name);
    const mine = wanted.has(k) ? [] : (byKey.get(k) || []);
    wanted.set(k, true);
    for (const d of mine) used.add(d.guid);
    const total = r2(r.target_m2 * r.count), got = r2(mine.reduce((s, d) => s + d.area_m2, 0));
    let status = 'met';
    if (!mine.length) status = 'notdrawn';
    else if (got < total * (1 - tol) || mine.length < r.count) status = 'short';
    else if (got > total * (1 + tol)) status = 'over';
    return { guid: r.guid, name: r.name, group: r.group, count: r.count, target_m2: r.target_m2, target_total_m2: total, drawn: mine.map((d) => ({ guid: d.guid, name: d.name, level: d.level, area_m2: d.area_m2 })), drawn_count: mine.length, drawn_m2: got, diff_m2: r2(got - total), status };
  });
  const unbriefed = (drawn || []).filter((d) => !used.has(d.guid)).map((d) => ({ guid: d.guid, name: d.name, level: d.level, area_m2: d.area_m2 }));
  const count = (s) => rows.filter((x) => x.status === s).length;
  const target = r2(rows.reduce((s, x) => s + x.target_total_m2, 0)), got = r2(rows.reduce((s, x) => s + x.drawn_m2, 0));
  return { rows, unbriefed, totals: { target_m2: target, drawn_m2: got, diff_m2: r2(got - target), gross_m2: brief.efficiency > 0 ? r2(target / brief.efficiency) : null, met: count('met'), over: count('over'), short: count('short'), notdrawn: count('notdrawn'), rooms: rows.length, unbriefed_m2: r2(unbriefed.reduce((s, x) => s + x.area_m2, 0)) } };
}

export const programOf = (brief) => (brief.rooms || []).filter((r) => r.target_m2 > 0).map((r) => ({ name: r.name, count: r.count, area_m2: r.target_m2 }));

// ---- typed input -----------------------------------------------------------------------------------------------------------
/** Lines of 'Name; count; area' (or 'Name; area'), split on a tab, a semicolon or a comma: what pastes from a spreadsheet or a brief. */
export function parseRooms(text) {
  const rooms = [], skipped = [];
  for (const raw of String(text ?? '').split(/\r?\n/)) {
    const line = raw.trim();
    if (!line || /^#/.test(line)) continue;
    const parts = line.split(/\t|;|,(?=\s*[\d.]+\s*(?:m2|m²|sqm)?\s*(?:[;,]|$))/).map((x) => x.trim()).filter((x) => x !== '');
    const nums = parts.slice(1).map((x) => Number(String(x).replace(/\s*(m2|m²|sqm)$/i, '').replace(',', '.')));
    const name = clean(parts[0], 80);
    let count = 1, area;
    if (nums.length === 1) area = nums[0]; else if (nums.length >= 2) { count = nums[0]; area = nums[1]; }
    if (!name || !(area > 0) || !(count >= 1) || !Number.isInteger(count) || area > LIMITS.area_m2 || count > LIMITS.count) { skipped.push(line.slice(0, 80)); continue; }
    rooms.push({ name, count, target_m2: area });
  }
  return { rooms: rooms.slice(0, LIMITS.rooms), skipped };
}
export function parseProgramme(text) {
  return String(text ?? '').split(/\r?\n/).map((l) => l.trim()).filter(Boolean).slice(0, LIMITS.programme).map((l) => {
    const m = /^(\d{4}-\d{2}-\d{2})\s*[|:\-–]\s*(.*)$/.exec(l);
    return m ? { date: m[1], text: m[2].trim() } : { date: '', text: l };
  }).sort((a, b) => (a.date || '9999') < (b.date || '9999') ? -1 : (a.date || '9999') > (b.date || '9999') ? 1 : 0);
}

// ---- ops ---------------------------------------------------------------------------------------------------------------------
function cleanRoom(r) {
  const name = clean(r?.name, 80), target = num(r?.target_m2 ?? r?.area_m2), count = Math.round(num(r?.count, 1));
  if (!name) refuse('brief.err.name');
  if (!(target > 0) || target > LIMITS.area_m2) refuse('brief.err.area');
  if (!(count >= 1) || count > LIMITS.count) refuse('brief.err.count');
  return { name, target, count, group: clean(r?.group, 40), note: clean(r?.note, 300), guid: r?.guid || null };
}
function writeProject(w, f) {
  const pj = projectId(w);
  if (pj === undefined) refuse('brief.err.noproject');
  const rows = [['Format', 'IFCLABEL', FORMAT]];
  if (f.client !== undefined) rows.push(['Client', 'IFCLABEL', clean(f.client, 120)]);
  if (f.site !== undefined) rows.push(['Site', 'IFCTEXT', cleanText(f.site, 300)]);
  if (f.budget !== undefined) { const b = num(f.budget, -1); if (!(b >= 0) || b > LIMITS.budget) refuse('brief.err.budget'); rows.push(['Budget', 'IFCREAL', b]); }
  if (f.currency !== undefined) rows.push(['Currency', 'IFCLABEL', clean(f.currency, 8)]);
  if (f.programme !== undefined) rows.push(['Programme', 'IFCTEXT', cleanText(f.programme, 3000)]);
  if (f.notes !== undefined) rows.push(['Notes', 'IFCTEXT', cleanText(f.notes, 3000)]);
  if (f.tolerance !== undefined) { const t = num(f.tolerance, -1); if (!(t >= 0 && t <= 50)) refuse('brief.err.tolerance'); rows.push(['Tolerance', 'IFCREAL', t]); }
  if (f.efficiency !== undefined) { const e = num(f.efficiency); if (!(e > 0 && e <= 1)) refuse('brief.err.efficiency'); rows.push(['Efficiency', 'IFCREAL', e]); }
  w.upsertPset(pj, BRIEF_PSET, rows);
  return pj;
}
function addRoom(w, r, order) {
  const bid = safeIds(w, 'IFCBUILDING')[0];
  if (bid === undefined) refuse('model.err.site.nobuilding');
  const bl = w.api.GetLine(w.mid, bid, false), lp = w.placeAt(bl.ObjectPlacement.value, 0, 0, 0, 0);
  const g = r.guid || w.guid();
  const id = w.make('IFCSPACE', g, w.ownerHistory(), w.L(r.name), null, w.L(BRIEF_OBJECT), w.H(lp), null, w.L(r.name), 'ELEMENT', ...(w.v4 ? ['SPACE', null] : ['INTERNAL', null]));
  aggregateInto(w, bid, id);
  w.upsertPset(id, ROOM_PSET, [['Target', 'IFCAREAMEASURE', r.target], ['Count', 'IFCINTEGER', r.count], ['Group', 'IFCLABEL', r.group], ['Note', 'IFCTEXT', r.note], ['Order', 'IFCINTEGER', order]]);
  return { id, guid: val(g) };
}
const nextOrder = (w) => readBrief(w).rooms.reduce((m, r) => Math.max(m, r.order), 0) + 1;
function findRoom(w, guid) { const id = w.byGuid(guid); if (!id || !w.readPset(id, ROOM_PSET)) refuse('brief.err.gone'); return id; }

export const setBriefOp = (fields = {}) => op((w) => { const id = writeProject(w, fields); return { id, ids: [], made: new Map() }; });

export function addBriefRoomsOp(list = []) {
  const rooms = list.slice(0, LIMITS.rooms).map(cleanRoom);
  if (!rooms.length) refuse('brief.err.norooms');
  return op((w) => {
    if (readBrief(w).rooms.length + rooms.length > LIMITS.rooms) refuse('brief.err.many', { n: LIMITS.rooms });
    let order = nextOrder(w);
    const made = rooms.map((r) => addRoom(w, r, order++));
    return { id: made[0].id, ids: made.map((m) => m.id), made: new Map(made.map((m) => [m.guid, m.id])), guids: made.map((m) => m.guid) };
  });
}

export function changeBriefRoomOp(guid, fields = {}) {
  return op((w) => {
    const id = findRoom(w, guid), rows = [];
    const cur = readBrief(w).rooms.find((r) => r.id === id);
    const r = cleanRoom({ ...cur, ...fields });
    if (fields.name !== undefined) { const l = w.touch(id); l.Name = w.L(r.name); l.LongName = w.L(r.name); w.write(l); }
    rows.push(['Target', 'IFCAREAMEASURE', r.target], ['Count', 'IFCINTEGER', r.count], ['Group', 'IFCLABEL', r.group], ['Note', 'IFCTEXT', r.note]);
    w.upsertPset(id, ROOM_PSET, rows);
    return { id, ids: [id], made: new Map() };
  });
}

export function removeBriefRoomsOp(guids = []) {
  return op((w) => {
    const list = guids.map((g) => findRoom(w, g));
    if (!list.length) refuse('brief.err.norooms');
    w.dropProduct(list);
    return { id: list[0], ids: [], made: new Map() };
  });
}

/** A new project's first edit: the brief's fields and its rooms in ONE undo step. */
export function startBriefOp({ fields = {}, rooms = [] } = {}) {
  const rs = rooms.slice(0, LIMITS.rooms).map(cleanRoom);
  return op((w) => {
    const id = writeProject(w, fields);
    let order = nextOrder(w);
    const made = rs.map((r) => addRoom(w, r, order++));
    return { id, ids: made.map((m) => m.id), made: new Map(made.map((m) => [m.guid, m.id])) };
  });
}

// ---- Problems ----------------------------------------------------------------------------------------------------------------
/** A brief room that has been drawn and falls short of its target: a warning, never a refusal (the person decides). */
export function briefProblems(w, { t = (k) => k } = {}) {
  const brief = readBrief(w);
  if (!brief.rooms.length) return [];
  const acc = accommodation(brief, drawnRooms(w)), out = [];
  for (const r of acc.rows) {
    if (r.status !== 'short') continue;
    out.push({
      code: 'brief.short', severity: 'warning', part: r.guid, msg: { key: 'brief.short', vars: {} },
      text: t('brief.p.short', { name: r.name, drawn: r.drawn_m2, target: r.target_total_m2, n: r.drawn_count, count: r.count }),
      about: [{ kind: 'element', id: r.guid, label: r.name }, ...r.drawn.map((d) => ({ kind: 'element', id: d.guid, label: d.name }))],
      source: { name: 'bimcraft.stages' },
    });
  }
  return out;
}
export { readLevels, day };
