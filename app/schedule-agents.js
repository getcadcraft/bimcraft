/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file: tool names, descriptions and results are read by the assistant program, not shown to the person (AGENTS-SPEC §5). */
/**
 * schedule-agents.js: schedules and finishes as assistant tools (0.10 BK.61, BK.39, BK.149, BK.142, BK.29; session
 * bk-r3-schedules-10), to the AI tool contract (rule 34). The apps contain no AI: the assistant says what the schedule should be
 * ("door schedule by floor, with fire rating and ironmongery"), these tools set it up, and the engine fills it from the model
 * (schedule-data.js, schedule-layouts.js, tables/table.js). What a set-up does not state comes from the office standard.
 * Every line and every figure that comes back names the elements it came from (GlobalIds), so selection_set shows them.
 *
 *   schedule_list     read    the schedules the model can fill, their columns, the saved set-ups, the office standard
 *   schedule_setup    edit    save a set-up (source, columns, property columns, grouping, totals, headings); returns it filled
 *   schedule_arrange  edit    change the grouping, totals, headings or columns of a saved set-up
 *   schedule_read     read    a schedule or a set-up filled from the model now, laid out, with the elements behind each line
 *   schedule_export   export  CSV, Excel (.xlsx) or tab-separated text for pasting into Google Sheets
 *   schedule_remove   edit    remove a saved set-up
 *   finishes_get      read    the finish types, the rooms and their finishes, the zones
 *   finishes_set      edit    add or change finish types, room finishes and zones (millimetres); one undo step
 *   env = { ed(), apply(label, op), schedules?() (the window's own list), units?(), download?(name, data, type) }
 */
import { ToolError } from './host.js';
import { ModelWriter } from './model-write.js';
import { t } from './i18n.js';
import { tableCsv } from './ifc-qto.js';
import { toCsv, toTsv, CASES } from './tables/table.js';
import { writeXlsx } from './tables/xlsx.js';
import { cleanFinishes } from './quantities/finishes.js';
import { readSetups, saveSetupsOp, setupId, officeStandard, sheetOf, elementsOf, MAX_PROPS } from './schedule-layouts.js';
import { modelSchedules, withTables, fillSetup, projectName } from './schedule-data.js';
import { readFinishes, saveFinishesOp, roomInputs } from './finishes-model.js';
import { snapshotModel, loopsOf } from './model-ops.js';

const obj = (properties, required = []) => ({ type: 'object', properties, required, additionalProperties: false });
const norm = (s) => String(s).toLowerCase().replace(/[^a-z0-9]/g, '');
const MAX_LINES = 2000, MAX_GUIDS = 200;
const GROUP = { type: 'string', maxLength: 120, description: 'What to group the rows by: level (by floor), type or room where the schedule has such a column, a column id from schedule_list, or none. Leave it out to take the office standard.' };
const TOT = { type: 'string', enum: ['none', 'grand', 'groups'], description: 'Totals: none, grand (one total line) or groups (a subtotal under each group and a total). Leave it out to take the office standard, else the schedule\'s own total.' };
const TITLE = { type: 'string', maxLength: 120, description: 'The heading over the schedule. {schedule} and {project} are filled in. Leave it out to take the office standard, else the set-up\'s name.' };
const HEADINGS = { ...obj({ case: { type: 'string', enum: CASES, description: 'Column headings as written (asis), in capitals (upper) or With Capitals (title).' },
  columns: { type: 'object', description: 'Other words for column headings: column id → heading.', additionalProperties: { type: 'string', maxLength: 80 } } }), description: 'Column headings: their case and other words for single columns.' };
const COLUMNS = { type: 'array', maxItems: 40, description: 'The columns in order: column ids or headings from schedule_list. A name that is not a column of the schedule is read as a property or tag of the elements (for example FireRating, Pset_DoorCommon.FireRating, Ironmongery) and becomes a column of its own.', items: { type: 'string', minLength: 1, maxLength: 100 } };

export function scheduleTools(env) {
  const E = () => { const ed = env.ed(); if (!ed) throw new ToolError('not_found', 'No IFC model is open in BimCraft.', { next: ['Open a model, then try again.'] }); return ed; };
  const U = () => (env.units ? env.units() : 'mm');
  /** Everything a tool needs: the schedules with their tables, the saved set-ups, the writer. */
  const ctx = () => {
    const ed = E(), w = new ModelWriter(ed.W, ed.api, ed.mid), units = U();
    let all = null, snap = null;
    if (env.schedules) { try { all = env.schedules(); } catch (e) { all = null; } }
    if (all && Object.keys(all).length) { snap = snapshotModel(ed); all = { ...all }; for (const k of Object.keys(all)) if (k.startsWith('setup:')) delete all[k]; }
    else { const m = modelSchedules(ed, { units, t }); all = m.all; snap = m.snap; }
    withTables(all, snap);
    return { ed, w, units, t, all, snap, setups: readSetups(w), project: projectName(w), standard: officeStandard() };
  };
  const sources = (c) => Object.entries(c.all).filter(([, sc]) => sc && sc.table);
  const findSource = (c, key) => {
    const hit = sources(c).find(([k]) => k === key) || sources(c).find(([k, sc]) => norm(k) === norm(key) || norm(sc.table.title) === norm(key));
    if (!hit) throw new ToolError('not_found', 'No schedule "' + key + '".', { next: ['Call schedule_list for the schedules this model can fill.'] });
    return hit;
  };
  const colOf = (table, word) => table.cols.findIndex((col, j) => col.id === word || norm(col.id) === norm(word) || norm(table.head[j]) === norm(word) || norm(String(table.head[j]).replace(/\(.*\)/, '')) === norm(word));
  const groupOf = (table, word) => {
    if (word === undefined) return undefined;
    if (word === null || word === '' || norm(word) === 'none') return null;
    const role = { level: 'level', floor: 'level', storey: 'level', story: 'level', type: 'type', room: 'room' }[norm(word)];
    const byRole = role ? table.cols.find((x) => x.role === role) : null;
    if (byRole) return byRole.id;
    const j = colOf(table, word);
    if (j < 0) throw new ToolError('invalid_argument', 'This schedule has no column "' + word + '" to group by.', { next: ['Group by one of: ' + table.cols.map((x) => x.id).join(', ') + ', or none.'] });
    return table.cols[j].id;
  };
  /** columns as the assistant gave them → { columns (ids), props } against the source table. */
  const splitColumns = (table, list, had = []) => {
    if (!list) return { columns: undefined, props: had };
    const columns = [], props = [];
    for (const word of list) {
      const j = colOf(table, word);
      if (j >= 0) { columns.push(table.cols[j].id); continue; }
      if (props.length >= MAX_PROPS) throw new ToolError('invalid_argument', 'At most ' + MAX_PROPS + ' property columns in one schedule.', { next: ['Leave some property columns out.'] });
      props.push({ name: word });
      columns.push('prop-' + String(word).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 40));
    }
    return { columns, props };
  };
  const layoutFrom = (table, a, base = {}) => {
    const L = { ...base };
    const g = groupOf(table, a.group_by);
    if (g !== undefined) L.groupBy = g;
    if (a.totals) L.totals = a.totals;
    if (a.title) L.title = a.title;
    if (a.headings) L.headings = { ...(base.headings || {}), ...a.headings };
    return L;
  };
  const guids = (c, list) => list.slice(0, MAX_GUIDS).map((id) => { try { return c.w.guidOf(id); } catch (e) { return null; } }).filter(Boolean);
  const shown = (c, f, extra = {}) => {
    const laid = f.laid;
    return {
      ...extra, title: laid.title, columns: laid.colIds.map((id, j) => ({ id, heading: laid.head[j], kind: laid.kinds[j] })), grouped_by: laid.groupBy, rows: laid.count,
      from_office_standard: Object.keys(f.from || {}).map((k) => ({ groupBy: 'grouping', totals: 'totals', title: 'title', headings: 'headings' }[k])),
      ...(f.empty && f.empty.length ? { empty_columns: f.empty, empty_columns_note: 'No element of this schedule has a value for these yet. Set one with element_set or a tag; the column fills itself.' } : {}),
      ...(f.read && Object.keys(f.read).length ? { properties_read: f.read } : {}),
      lines: laid.lines.slice(0, MAX_LINES).map((l) => {
        const figures = {};
        if (l.cellIds) l.cellIds.forEach((ids, j) => { if (ids && ids.length) figures[laid.colIds[j]] = guids(c, ids); });
        return { kind: l.kind, cells: l.cells, elements: guids(c, l.ids || []), element_count: (l.ids || []).length, ...(Object.keys(figures).length ? { figures } : {}) };
      }),
      ...(laid.lines.length > MAX_LINES ? { truncated: laid.lines.length - MAX_LINES } : {}),
      ...(laid.note ? { note: laid.note } : {}),
      elements_note: 'elements are GlobalIds: selection_set shows the elements behind a line; figures names the elements behind one figure when they differ from the line\'s.',
    };
  };
  /** A saved set-up by id or name, or a source schedule with an optional layout of its own. */
  const fill = (c, a) => {
    if (a.id) {
      const s = c.setups.find((x) => x.id === a.id) || c.setups.find((x) => norm(x.name) === norm(a.id));
      if (!s) throw new ToolError('not_found', 'No saved schedule set-up "' + a.id + '".', { next: ['Call schedule_list for the saved set-ups.'] });
      const f = fillSetup(c.all, s, c);
      if (!f) throw new ToolError('not_found', 'The set-up "' + s.name + '" reads the schedule "' + s.source + '", which this model does not have.', { next: ['Call schedule_list.'] });
      return { f, setup: s };
    }
    if (!a.source) throw new ToolError('invalid_argument', 'Give id (a saved set-up) or source (a schedule key).', { next: ['Call schedule_list.'] });
    const [key, sc] = findSource(c, a.source);
    const sp = splitColumns(sc.table, a.columns);
    const setup = { id: '', name: sc.table.title || key, source: key, props: sp.props, layout: layoutFrom(sc.table, a, sp.columns ? { columns: sp.columns } : {}) };
    return { f: fillSetup(c.all, setup, c), setup: null, key };
  };
  const save = async (c, setups, label) => {
    try { await env.apply(label, saveSetupsOp(setups)); }
    catch (e) { throw new ToolError('failed', 'The set-up was not saved and nothing changed: ' + (e?.key ? t(e.key, e.fill || {}) : String(e?.message || e)), { next: ['Try again.'] }); }
  };

  return [
    {
      name: 'schedule_list', group: 'read', untrusted: true, title: 'List schedules',
      description: 'The schedules BimCraft can fill from the open model (doors, windows, walls by type, rooms, floors, finishes by room, by wall and by zone, and more), each with its columns (id, heading, kind, and whether it can be grouped as level, type or room) and its row count; the schedule set-ups saved in the file; and the office standard for schedule layout when the office set one (grouping, totals, title, headings), which fills whatever a set-up does not state.',
      run: () => {
        const c = ctx();
        return {
          schedules: sources(c).map(([key, sc]) => ({ key, title: sc.table.title, rows: sc.table.rows.length, columns: sc.table.cols.map((x, j) => ({ id: x.id, heading: sc.table.head[j], kind: x.kind, ...(x.role ? { group_as: x.role } : {}) })) })),
          setups: c.setups.map((s) => ({ id: s.id, name: s.name, source: s.source, group_by: s.layout.groupBy ?? null, totals: s.layout.totals || null, columns: s.layout.columns || null, properties: s.props.map((p) => p.name) })),
          office_standard: Object.keys(c.standard).length ? c.standard : null,
        };
      },
    },
    {
      name: 'schedule_setup', group: 'edit', rollbackPreview: true, title: 'Set up a schedule',
      description: 'Save a schedule set-up in the model file and get it back filled, in one undo step. Give the source schedule (a key from schedule_list, for example doors), a name, and what you want: the columns in order (a name that is not a column is read from the elements as a property or tag, so "FireRating" and "Ironmongery" become columns), what to group by (level = by floor, type, room, a column id, or none), totals and headings. Whatever you leave out is taken from the office standard, and the answer says which parts were. The set-up then appears in BimCraft\'s Schedules list under its name and follows every change of the model. Example: a door schedule by floor with fire rating and ironmongery = source doors, group_by level, columns mark, type, width, height, FireRating, Ironmongery.',
      inputSchema: obj({
        name: { type: 'string', minLength: 1, maxLength: 120, description: 'The set-up\'s name, shown in the Schedules list, for example "Door schedule by floor".' },
        source: { type: 'string', minLength: 1, maxLength: 60, description: 'The schedule to read: a key from schedule_list (doors, windows, walls, rooms, floors, finishes, roomfinishes, wallfinishes, zonefinishes, finishtotals, …).' },
        columns: COLUMNS, group_by: GROUP, totals: TOT, title: TITLE, headings: HEADINGS,
        replace: { type: 'string', maxLength: 40, description: 'The id of a saved set-up to replace with this one (from schedule_list). Leave it out to add a new set-up.' },
      }, ['name', 'source']),
      run: async (a) => {
        const c = ctx(), [key, sc] = findSource(c, a.source);
        const sp = splitColumns(sc.table, a.columns);
        const taken = new Set(c.setups.map((s) => s.id));
        if (a.replace && !taken.has(a.replace)) throw new ToolError('not_found', 'No saved set-up with the id ' + a.replace + ' to replace.', { next: ['Call schedule_list for the ids.'] });
        const id = a.replace || setupId(a.name, taken);
        const setup = { id, name: a.name, source: key, props: sp.props, layout: layoutFrom(sc.table, a, sp.columns ? { columns: sp.columns } : {}) };
        const next = a.replace ? c.setups.map((s) => (s.id === id ? setup : s)) : [...c.setups, setup];
        await save(c, next, (a.replace ? 'change the schedule ' : 'set up the schedule ') + a.name);
        const c2 = ctx(), saved = c2.setups.find((s) => s.id === id);
        return shown(c2, fillSetup(c2.all, saved, c2), { id, name: saved.name, source: key, saved: true });
      },
    },
    {
      name: 'schedule_arrange', group: 'edit', rollbackPreview: true, title: 'Arrange a schedule',
      description: 'Change how a saved schedule set-up is laid out, in one undo step: its grouping (level, type, room, a column id, or none), totals (none, grand, groups), title, column headings or columns. Only what you give changes. Give office_standard: true to drop the set-up\'s own grouping, totals, title and heading case so the office standard decides them again. Returns the schedule filled from the model.',
      inputSchema: obj({
        id: { type: 'string', minLength: 1, maxLength: 120, description: 'The saved set-up: its id or name from schedule_list.' },
        columns: COLUMNS, group_by: GROUP, totals: TOT, title: TITLE, headings: HEADINGS,
        office_standard: { type: 'boolean', description: 'true: forget this set-up\'s own grouping, totals, title and heading case; the office standard (or the schedule\'s own) applies.' },
      }, ['id']),
      run: async (a) => {
        const c = ctx();
        const s = c.setups.find((x) => x.id === a.id) || c.setups.find((x) => norm(x.name) === norm(a.id));
        if (!s) throw new ToolError('not_found', 'No saved schedule set-up "' + a.id + '".', { next: ['Call schedule_list for the saved set-ups.'] });
        const src = c.all[s.source];
        if (!src || !src.table) throw new ToolError('not_found', 'The set-up reads the schedule "' + s.source + '", which this model does not have.', { next: ['Call schedule_list.'] });
        let base = { ...s.layout };
        if (a.office_standard) { delete base.groupBy; delete base.totals; delete base.title; if (base.headings) { base.headings = { ...base.headings }; delete base.headings.case; } }
        const sp = splitColumns(src.table, a.columns, s.props);
        if (sp.columns) base.columns = sp.columns;
        const setup = { ...s, props: sp.props, layout: layoutFrom(src.table, a, base) };
        await save(c, c.setups.map((x) => (x.id === s.id ? setup : x)), 'arrange the schedule ' + s.name);
        const c2 = ctx(), saved = c2.setups.find((x) => x.id === s.id);
        return shown(c2, fillSetup(c2.all, saved, c2), { id: s.id, name: s.name, source: s.source, saved: true });
      },
    },
    {
      name: 'schedule_read', group: 'read', untrusted: true, title: 'Read a schedule',
      description: 'A schedule filled from the model as it is now, laid out: its title, columns and lines (group headings, rows, subtotals, total), each line with the GlobalIds of the elements it came from, and for a figure whose elements differ from its line\'s (a wall type\'s deductions are its doors and windows) those under figures. Give id for a saved set-up, or source for a plain schedule with an optional layout that is not saved. Nothing in the model changes.',
      inputSchema: obj({
        id: { type: 'string', maxLength: 120, description: 'A saved set-up: its id or name from schedule_list.' },
        source: { type: 'string', maxLength: 60, description: 'Or a schedule key from schedule_list, read without saving anything.' },
        columns: COLUMNS, group_by: GROUP, totals: TOT, title: TITLE, headings: HEADINGS,
      }),
      run: (a) => { const c = ctx(), r = fill(c, a); return shown(c, r.f, r.setup ? { id: r.setup.id, name: r.setup.name, source: r.setup.source } : { source: r.key }); },
    },
    {
      name: 'schedule_export', group: 'export', title: 'Export a schedule',
      description: 'A schedule or saved set-up as a file, laid out as schedule_read shows it: csv, xlsx (Excel: numbers are numbers in the unit the column shows, with a second sheet naming the elements behind each line) or sheets (tab-separated text for Google Sheets: paste it into cell A1 of a sheet; BimCraft does not sign in to Google and sends nothing there). In the window the file is downloaded; the text of a csv or sheets export also comes back.',
      inputSchema: obj({
        id: { type: 'string', maxLength: 120, description: 'A saved set-up: its id or name from schedule_list.' },
        source: { type: 'string', maxLength: 60, description: 'Or a schedule key from schedule_list.' },
        format: { type: 'string', enum: ['csv', 'xlsx', 'sheets'], default: 'xlsx', description: 'csv, xlsx (default) or sheets (tab-separated, to paste into Google Sheets).' },
        columns: COLUMNS, group_by: GROUP, totals: TOT, title: TITLE, headings: HEADINGS,
      }),
      run: async (a) => {
        const c = ctx(), r = fill(c, a), laid = r.f.laid, fmt = a.format || 'xlsx';
        const base = (laid.title || 'schedule').replace(/[\\/:*?"<>|]+/g, ' ').trim().toLowerCase();
        if (fmt === 'xlsx') {
          const bytes = await writeXlsx([sheetOf(laid, c.units), elementsOf(laid, c.w, t)], { title: laid.title, creator: 'BimCraft' });
          if (env.download) env.download(base + '.xlsx', bytes, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
          return { format: 'xlsx', file: base + '.xlsx', bytes: bytes.length, lines: laid.lines.length, downloaded: !!env.download, sheets: [laid.title, t('sched.x.elements')] };
        }
        const text = fmt === 'csv' ? toCsv(laid, tableCsv) : toTsv(laid);
        const file = base + (fmt === 'csv' ? '.csv' : '.tsv');
        if (env.download) env.download(file, (fmt === 'csv' ? '﻿' : '') + text, fmt === 'csv' ? 'text/csv' : 'text/tab-separated-values');
        return { format: fmt, file, lines: laid.lines.length, downloaded: !!env.download, text: text.slice(0, 200000),
          ...(fmt === 'sheets' ? { how: 'Open a Google Sheet (sheets.new makes an empty one in the person\'s own account), click cell A1 and paste this text. Nothing was sent to Google.' } : {}) };
      },
    },
    {
      name: 'schedule_remove', group: 'edit', rollbackPreview: true, title: 'Remove a schedule set-up',
      description: 'Remove a saved schedule set-up from the model file, in one undo step. The model\'s elements and the plain schedules are not touched.',
      inputSchema: obj({ id: { type: 'string', minLength: 1, maxLength: 120, description: 'The saved set-up: its id or name from schedule_list.' } }, ['id']),
      run: async (a) => {
        const c = ctx();
        const s = c.setups.find((x) => x.id === a.id) || c.setups.find((x) => norm(x.name) === norm(a.id));
        if (!s) throw new ToolError('not_found', 'No saved schedule set-up "' + a.id + '".', { next: ['Call schedule_list for the saved set-ups.'] });
        await save(c, c.setups.filter((x) => x.id !== s.id), 'remove the schedule ' + s.name);
        return { removed: s.id, name: s.name, left: c.setups.length - 1 };
      },
    },
    {
      name: 'finishes_get', group: 'read', untrusted: true, title: 'Room finishes',
      description: 'The finishes of the open model in millimetres: the finish types (name, kind tile, sheet, coat or board, thickness, tile size with joint and waste percent, the substrate under it with its thickness), each room (GlobalId, number, name, height, its stretches of wall with their wall GlobalIds, and under finishes its floor, walls and ceiling finish ids and skirting), and the zones (a band of wall between two heights, or a typed area of floor or ceiling, with another finish). The schedules roomfinishes, wallfinishes, zonefinishes and finishtotals (schedule_read) give the areas, tile counts with cuts and substrate volumes.',
      run: () => {
        const ed = E(), w = new ModelWriter(ed.W, ed.api, ed.mid), snap = snapshotModel(ed), doc = readFinishes(w);
        const loops = new Map(), loopsFor = (id) => { if (!loops.has(id)) { let L = null; try { L = loopsOf(ed, id); } catch (e) { L = null; } loops.set(id, L); } return loops.get(id); };
        return { finishes: doc.finishes, zones: doc.zones,
          rooms: roomInputs(snap, loopsFor).map((r) => ({ guid: r.key, number: r.number, name: r.name, height: Math.round(r.height), stretches: r.edges.filter((e) => e.wall).map((e) => ({ wall: e.wall, length: Math.round(e.length), height: Math.round(Math.min(r.height, e.height || r.height)), openings: e.openings.length })), finishes: doc.rooms[r.key] || {} })) };
      },
    },
    {
      name: 'finishes_set', group: 'edit', rollbackPreview: true, title: 'Set room finishes',
      description: 'Add or change finish types, the finishes of rooms and finish zones, in one undo step (millimetres). finishes: types by id (a type with an id that exists replaces it). rooms: by room GlobalId from finishes_get, the finish ids for floor, walls and ceiling and a skirting; null clears one. zones: by id; a wall zone is a band from one height to another on the walls named (or every wall of the room), a floor or ceiling zone is an area in square millimetres taken out of the room\'s own finish. remove_finishes and remove_zones take ids. A wrong entry refuses the whole change and says which. Areas, tile counts including cuts and substrate volumes then follow from the model in the finish schedules.',
      inputSchema: obj({
        finishes: { type: 'array', maxItems: 100, description: 'Finish types to add or replace.', items: obj({
          id: { type: 'string', minLength: 1, maxLength: 64, description: 'The type\'s id: letters, digits, - _ . : only.' }, name: { type: 'string', minLength: 1, maxLength: 80, description: 'Its name, for example Porcelain tile 600 x 600.' },
          kind: { type: 'string', enum: ['tile', 'sheet', 'coat', 'board'], description: 'tile (counted in tiles), sheet (vinyl, carpet), coat (paint, plaster skim) or board.' },
          thickness: { type: 'number', minimum: 0, maximum: 10000, description: 'Thickness of the finish in millimetres (0 for paint).' }, code: { type: 'string', maxLength: 40, description: 'Optional classification code of the finish.' },
          tile: obj({ length: { type: 'number', exclusiveMinimum: 0, maximum: 100000, description: 'Tile length in millimetres.' }, width: { type: 'number', exclusiveMinimum: 0, maximum: 100000, description: 'Tile width in millimetres.' }, joint: { type: 'number', minimum: 0, maximum: 1000, description: 'Joint between tiles in millimetres.' }, waste: { type: 'number', minimum: 0, maximum: 100, description: 'Waste allowance in percent on the tiles to order.' } }, ['length', 'width']),
          substrate: obj({ name: { type: 'string', minLength: 1, maxLength: 80, description: 'What goes under the finish, for example Screed.' }, thickness: { type: 'number', exclusiveMinimum: 0, maximum: 10000, description: 'Its thickness in millimetres.' } }, ['name', 'thickness']),
        }, ['id', 'name', 'kind']) },
        rooms: { type: 'object', description: 'Room finishes by room GlobalId: { floor, walls, ceiling: a finish id or null, skirting: { name, height } or null }.', additionalProperties: obj({
          floor: { type: ['string', 'null'], maxLength: 64, description: 'Finish id for the floor, or null for none.' }, walls: { type: ['string', 'null'], maxLength: 64, description: 'Finish id for the walls, or null.' }, ceiling: { type: ['string', 'null'], maxLength: 64, description: 'Finish id for the ceiling, or null.' },
          skirting: { type: ['object', 'null'], description: 'The skirting: its name and height in millimetres, or null for none.', properties: { name: { type: 'string', maxLength: 80, description: 'Name of the skirting.' }, height: { type: 'number', exclusiveMinimum: 0, maximum: 10000, description: 'Its height in millimetres.' } }, required: ['name', 'height'], additionalProperties: false } }) },
        zones: { type: 'array', maxItems: 200, description: 'Zones to add or replace (by id).', items: obj({
          id: { type: 'string', minLength: 1, maxLength: 64, description: 'The zone\'s id.' }, name: { type: 'string', minLength: 1, maxLength: 80, description: 'Its name, for example Shower walls.' }, room: { type: 'string', minLength: 1, maxLength: 64, description: 'The room\'s GlobalId.' },
          surface: { type: 'string', enum: ['wall', 'floor', 'ceiling'], description: 'Which surface of the room.' }, finish: { type: 'string', minLength: 1, maxLength: 64, description: 'The finish id of the zone.' },
          from: { type: 'number', minimum: 0, maximum: 1000000, description: 'Wall zone: the height above the floor where it starts, in millimetres (default 0).' }, to: { type: 'number', exclusiveMinimum: 0, maximum: 1000000, description: 'Wall zone: the height where it ends, in millimetres.' },
          walls: { type: 'array', maxItems: 200, description: 'Wall zone: the GlobalIds of the walls it is on; leave out for every wall of the room.', items: { type: 'string', minLength: 1, maxLength: 64 } },
          area: { type: 'number', exclusiveMinimum: 0, description: 'Floor or ceiling zone: its area in square millimetres.' } }, ['id', 'name', 'room', 'surface', 'finish']) },
        remove_finishes: { type: 'array', maxItems: 100, description: 'Ids of finish types to remove (rooms and zones that use one lose it).', items: { type: 'string', maxLength: 64 } },
        remove_zones: { type: 'array', maxItems: 200, description: 'Ids of zones to remove.', items: { type: 'string', maxLength: 64 } },
      }),
      run: async (a) => {
        const ed = E(), w = new ModelWriter(ed.W, ed.api, ed.mid), doc = readFinishes(w);
        const gone = new Set(a.remove_finishes || []), zgone = new Set(a.remove_zones || []);
        const next = { format: doc.format, version: doc.version, finishes: doc.finishes.filter((f) => !gone.has(f.id)), rooms: JSON.parse(JSON.stringify(doc.rooms)), zones: doc.zones.filter((z) => !zgone.has(z.id) && !gone.has(z.finish)) };
        for (const f of a.finishes || []) { const i = next.finishes.findIndex((x) => x.id === f.id); if (i >= 0) next.finishes[i] = f; else next.finishes.push(f); }
        for (const r of Object.values(next.rooms)) for (const s of ['floor', 'walls', 'ceiling']) if (gone.has(r[s])) delete r[s];
        for (const [guid, set] of Object.entries(a.rooms || {})) {
          if (!w.byGuid(guid)) throw new ToolError('not_found', 'No room with the GlobalId ' + guid + '.', { next: ['Call finishes_get for the rooms.'] });
          const r = { ...(next.rooms[guid] || {}) };
          for (const s of ['floor', 'walls', 'ceiling', 'skirting']) if (s in set) { if (set[s] === null) delete r[s]; else r[s] = set[s]; }
          if (Object.keys(r).length) next.rooms[guid] = r; else delete next.rooms[guid];
        }
        for (const z of a.zones || []) { const i = next.zones.findIndex((x) => x.id === z.id); if (i >= 0) next.zones[i] = z; else next.zones.push(z); }
        const chk = cleanFinishes(next);
        if (chk.errors.length) throw new ToolError('invalid_argument', 'Nothing changed: ' + t('fin.err.' + chk.errors[0].code, { at: chk.errors[0].at }), { next: ['Correct that entry and call finishes_set again.', 'Call finishes_get for the finish ids and room GlobalIds.'] });
        try { await env.apply('set room finishes', saveFinishesOp(next)); }
        catch (e) { throw new ToolError('failed', 'The finishes were not saved and nothing changed: ' + (e?.key ? t(e.key, e.fill || {}) : String(e?.message || e)), { next: ['Try again.'] }); }
        return { finishes: chk.doc.finishes.length, rooms_with_finishes: Object.keys(chk.doc.rooms).length, zones: chk.doc.zones.length, next: 'schedule_read with source roomfinishes, wallfinishes, zonefinishes or finishtotals gives the areas, tile counts and substrate volumes.' };
      },
    },
  ];
}
