/* SPDX-License-Identifier: Apache-2.0 */
/**
 * shell-mount.js — BimCraft attaches the shell's seven modules (0.8 round 3, oltl-eg-a_PART_3; docs/apps/shell-modules.md § Mounting): calc sheets (EG.18),
 * design reasons (EG.34), running totals (EG.30, fed in bimcraft.js), lessons (EG.23), Suggest (AC.12), the activity log (AC.13) and the Ask box (AC.8).
 * The block in mountShellModules is the doc's, unchanged; bimHost() is what BimCraft hands over.
 *
 * Calc sheets and reasons are kept IN THE IFC, as the property set `CadCraft_Shell` on the IfcProject (rows `Calcs` and `Reasons`, each IfcText JSON; plain
 * IFC, ignored by other programs), so they travel with the model and every change is one undo step through IfcEditor.modelChange. A file with none
 * stays byte-identical (nothing is written until a sheet or a reason exists). BimCraft has no named-parameter table, so `params` is not handed over
 * (the calc panel says so; sheets still compute and convert units).
 *
 *   mountBimShell({ ifc, editor, model, mode, ... accessors }) → { host, changed }   changed(): call after any edit, undo, redo, open or save
 */
import { ModelWriter } from './model-write.js';
import { ids as idsOfType, val, deleteLine } from './ifc-util.js';
import { assistantPrefs, ASSIST_KEY } from './host.js';
import { t as tr } from './i18n.js';

export const SHELL_PSET = 'CadCraft_Shell';
const KEYS = { calcs: 'Calcs', reasons: 'Reasons' };
const MAX_JSON = 2_000_000;

/** The doc's block (shell-modules.md § Mounting 2), as the doc has it. */
export function mountShellModules(host) {
  const when = (api, name, go) => (window[api] ? go() : document.addEventListener('cc-' + name + '-ready', go, { once: true }));
  // EG.18 calc sheets — parameters in, drives out, saved inside the app's own file
  when('ccCalc', 'calc', () => {
    ccCalc.attach({ units: host.units /* the build's unit-table.js, optional */, params: host.params /* { get, set, list } */,
                    step: host.step, persist: (json) => host.file.set('calcs', json) });
    ccCalc.registerTools(host.control);
  });
  // EG.34 design reasons — the selection, optionally the elements that should have a reason
  when('ccReasons', 'reasons', () => {
    ccReasons.attach({ selection: host.selection, onSelection: host.onSelection, select: host.select, expected: host.expected /* optional */,
                       step: host.step, persist: (json) => host.file.set('reasons', json) });
    ccReasons.registerTools(host.control);
  });
  // EG.30 running totals — one source per kind of number the app can stand behind (null until it has one)
  when('ccTotals', 'totals', () => {
    for (const s of host.totals || []) ccTotals.source(s);              // { id, measure: cost|carbon|weight|time, label, read: () => number | null }
    if (host.statusBar) ccTotals.mount(host.statusBar);                 // optional: the app's own status bar element
    ccTotals.registerTools(host.control);
  });
  // EG.23 lessons — the app's lessons, and where it already knows something happened
  when('ccLessons', 'lessons', () => {
    for (const l of host.lessons || []) ccLessons.register(l);          // { id, title, steps: [{ id, text, hints, done: { event, match } | { probe } }] }
    for (const [name, fn] of Object.entries(host.probes || {})) ccLessons.probe(name, fn);
    ccLessons.registerTools(host.control);
    host.emit = (event, data) => ccLessons.emit(event, data);           // the app calls host.emit('tool', { name: 'line' }) where it runs a command
  });
  // AC.12 Suggest, AC.13 activity log, AC.8 Ask box — they ride on host.control, so the app hands over very little
  when('ccSuggest', 'suggest', () => {
    ccSuggest.attach({ control: host.control, rev: host.rev, step: host.step, document: host.document, perms: host.perms, ghost: host.ghost });
    ccSuggest.registerTools(host.control);
    host.fileOpened = (why) => ccSuggest.reset(why || 'A file was opened.');   // call when another file opens
  });
  when('ccActivity', 'activity', () => {
    ccActivity.attach({ control: host.control, rev: host.rev, document: host.document, undoTo: host.undoTo, history: host.history, version: host.version });
  });
  when('ccAsk', 'ask', () => {
    ccAsk.attach({ control: host.control, context: host.askContext, system: host.skillPack /* the app's skill pack text, AC.5 */ });
    ccAsk.registerTools(host.control);
  });
  // when a file opens / saves (the app's own two places):  open: ccCalc.load(file.calcs); ccReasons.load(file.reasons);
  //                                                        save: file.calcs = ccCalc.save(); file.reasons = ccReasons.save();
}


const projectId = (api, mid) => idsOfType(api, mid, 'IFCPROJECT')[0] ?? null;

/** Reads the stored JSON texts: { calcs, reasons } (each a parsed object or null). A file is untrusted: bad JSON reads as nothing. */
export function readShell(api, mid) {
  const out = { calcs: null, reasons: null };
  const pid = projectId(api, mid);
  if (pid === null) return out;
  for (const rid of idsOfType(api, mid, 'IFCRELDEFINESBYPROPERTIES')) {
    const r = api.GetLine(mid, rid, false);
    if (!(r?.RelatedObjects || []).some((h) => h.value === pid)) continue;
    const d = r.RelatingPropertyDefinition?.value ? api.GetLine(mid, r.RelatingPropertyDefinition.value, false) : null;
    if (!d || val(d.Name) !== SHELL_PSET) continue;
    for (const h of d.HasProperties || []) {
      const p = api.GetLine(mid, h.value, false), n = String(val(p?.Name) || ''), v = val(p?.NominalValue);
      for (const [k, row] of Object.entries(KEYS)) {
        if (n !== row || typeof v !== 'string' || v.length > MAX_JSON) continue;
        try { const j = JSON.parse(v); if (j && typeof j === 'object') out[k] = j; } catch { /* a damaged row reads as no sheets */ }
      }
    }
    break;
  }
  return out;
}

/** The op for IfcEditor.modelChange: the set replaced by these two (null = none). One undo step. */
export function writeShellOp({ calcs = null, reasons = null }) {
  const rows = [];
  if (calcs) rows.push([KEYS.calcs, 'IFCTEXT', JSON.stringify(calcs)]);
  if (reasons) rows.push([KEYS.reasons, 'IFCTEXT', JSON.stringify(reasons)]);
  return (ed) => {
    const w = new ModelWriter(ed.W, ed.api, ed.mid);
    return w.run(() => {
      const pid = projectId(w.api, w.mid);
      if (pid === null) throw new Error('no IfcProject');   // i18n-ignore: a file with no project cannot hold a sheet
      const d = w.defNamed(pid, SHELL_PSET);
      if (!d) { if (rows.length) w.relateDef(pid, w.pset(SHELL_PSET, rows)); return { id: pid }; }
      const ps = w.touch(d.def);
      for (const h of ps.HasProperties || []) { if (w.api.GetLine(w.mid, h.value, false)) { w.touch(h.value); deleteLine(w.api, w.mid, h.value); } }
      ps.HasProperties = w.propLines(rows);
      w.write(ps);
      return { id: pid };
    });
  };
}

/**
 * The 4D schedule's length as working time for the running totals (EG.30 "time"): Monday to Friday days from the first start to the last finish
 * (both included) × 8 hours. Calendars and holidays are not read; the note says so. Tasks = ifc-4d.js parseTasks / matchTasks rows (start, finish in UTC days).
 */
export function scheduleHours(tasks) {
  const t = (tasks || []).filter((x) => Number.isFinite(x.start) && Number.isFinite(x.finish) && x.finish >= x.start);
  if (!t.length) return null;
  const first = Math.min(...t.map((x) => x.start)), last = Math.max(...t.map((x) => x.finish));
  if (last - first > 36500) return null;
  let days = 0;
  for (let d = first; d <= last; d++) { const dow = (d + 4) % 7; if (dow !== 0 && dow !== 6) days++; }
  return days * 8;
}

const WALLS = ['IFCWALL', 'IFCWALLSTANDARDCASE'];

/** The first lesson: steps the model itself can answer, so nothing is taken on trust. `s` = { ifc, model, editor, mode, saved }. */
export function lessonsOf(s) {
  const count = (types) => { const m = s.model(); return m && s.mode() === 'ifc' ? types.reduce((n, c) => n + idsOfType(s.ifc().api, m.modelID, c).length, 0) : 0; };
  return {
    lessons: [{
      id: 'first-model', title: tr('lesson.first.title'), intro: tr('lesson.first.intro'), level: 'beginner',
      steps: [
        { id: 'open', text: tr('lesson.first.open'), hints: [tr('lesson.first.open.h1')], done: { probe: 'bim-open' } },
        { id: 'wall', text: tr('lesson.first.wall'), hints: [tr('lesson.first.wall.h1'), tr('lesson.first.wall.h2')], done: { probe: 'bim-wall' } },
        { id: 'door', text: tr('lesson.first.door'), hints: [tr('lesson.first.door.h1')], done: { probe: 'bim-door' } },
        { id: 'save', text: tr('lesson.first.save'), hints: [tr('lesson.first.save.h1')], done: { probe: 'bim-saved' } },
      ],
      badge: { title: tr('lesson.first.badge') },
    }],
    probes: {
      'bim-open': () => !!s.model() && s.mode() === 'ifc',
      'bim-wall': () => count(WALLS) >= 1,
      'bim-door': () => count(['IFCDOOR']) >= 1,
      'bim-saved': () => s.saved(),
    },
  };
}

/**
 * Mounts everything. `a` = accessors into bimcraft.js (all functions, so they always see the current model):
 *   ifc, model(), editor(), mode(), control, saved(), selection(), select(keys), onSelection(fn), name()
 */
export function mountBimShell(a) {
  const ASSIST = () => assistantPrefs({ app: 'bimcraft', win: window });
  let stored = { calcs: null, reasons: null };   // what the file holds, as last read or written (JSON text, to compare)
  let seenModel = null;
  const text = (j) => (j ? JSON.stringify(j) : '');
  const ready = () => !!(a.model() && a.editor() && a.mode() === 'ifc');
  const write = (key, json) => {
    if (!ready()) return;
    if (text(json) === text(stored[key])) return;
    const next = { ...stored, [key]: json || null };
    stored = next;
    try { a.editor().modelChange(writeShellOp(next), { label: key === 'calcs' ? 'Calc sheets' : 'Design reasons', verb: tr('energy.verb') }); a.after?.(); } catch (e) { console.warn('shell sheets', e); }
  };
  const host = {
    control: a.control,
    step: (label, fn) => fn(),
    file: { set: (key, json) => { if (key === 'calcs' || key === 'reasons') write(key, json); } },
    selection: () => { const k = a.selection(); return k.length ? { kind: 'element', id: String(k[0]), label: a.describe ? a.describe(k[0]) + (k.length > 1 ? ' +' + (k.length - 1) : '') : String(k[0]) } : null; },
    onSelection: (fn) => a.onSelection(fn),
    select: (el) => { if (el?.id != null) a.select([String(el.id)]); },
    totals: [],   // fed in bimcraft.js (bim.carbon, bim.cost)
    ...lessonsOf({ ifc: a.ifc, model: a.model, mode: a.mode, saved: a.saved }),
    rev: () => (a.editor() ? a.editor().changes.length + ':' + a.editor().undone.length : 0),
    document: () => ({ docId: a.name(), path: '', name: a.name() }),
    perms: { get: () => ASSIST(), set: (rec) => { try { localStorage.setItem(ASSIST_KEY + 'bimcraft', JSON.stringify(rec)); } catch { /* private mode */ } } },
    version: () => String(a.editor() ? a.editor().changes.length : 0),
    askContext: () => ({ file: a.name(), selection: host.selection() }),
  };
  mountShellModules(host);
  /** Reads the model's sheets and hands them to the modules when the file (or an undo / redo) moved them. */
  const changed = () => {
    if (window.ccLessons) ccLessons.emit('model', {});
    if (!ready()) { seenModel = null; return; }
    const first = seenModel !== a.model();
    seenModel = a.model();
    let now;
    try { now = readShell(a.ifc().api, a.model().modelID); } catch { return; }
    if (!first && text(now.calcs) === text(stored.calcs) && text(now.reasons) === text(stored.reasons)) return;
    stored = now;
    if (window.ccCalc) ccCalc.load(now.calcs);
    if (window.ccReasons) ccReasons.load(now.reasons);
    if (first) host.fileOpened?.('A file was opened.');
    if (window.ccTotals) { if (first) ccTotals.reset(); else ccTotals.invalidate(); }
  };
  document.addEventListener('cc-calc-ready', changed, { once: true });
  document.addEventListener('cc-reasons-ready', changed, { once: true });
  changed();
  return { host, changed };
}
