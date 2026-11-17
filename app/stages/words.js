/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file: the English fallback table; the same keys are in lang/en.json (lang-10, 2026-11-16), the page asks the catalog first. */
/**
 * stages/words.js: the English words of the project-stage modules (0.10 W1.10, session stages-10).
 * The shared language file (lang/en.json) belongs to another session, so these keys live here: speak(t) gives a t() that asks the
 * page's catalog first (a translation, once `lang-10` has copied these keys into it) and falls back to this table. Same {name} fills
 * and "{{" / "}}" as i18n.js. Every key is `brief.*`, `options.*`, `types.*`, `records.*` or `stages.*`.
 */
export const EN = {
  'brief.p.short': '{name}: {n} of {count} drawn, {drawn} m² against {target} m² in the brief',
  'brief.err.name': 'Give the room a name.', 'brief.err.area': 'A room needs a target area above 0 and up to 100,000 m².', 'brief.err.count': 'A room needs a count from 1 to 1000.',
  'brief.err.budget': 'The budget must be a number, 0 or more.', 'brief.err.tolerance': 'The tolerance is a percentage from 0 to 50.', 'brief.err.efficiency': 'The efficiency is above 0 and at most 1 (0.8 means 80 % of a floor is rooms).',
  'brief.err.gone': 'That brief room is not in the model any more.', 'brief.err.norooms': 'There is no room to add or remove.', 'brief.err.many': 'A brief holds at most {n} rooms.', 'brief.err.noproject': 'This file has no project to keep a brief in.',
  'options.err.layout': 'That is not a room layout.', 'options.err.nobrief': 'Write the brief first: there are no rooms to stack.',
  'types.p.spec.missing': '{name}: no specification text yet', 'types.p.spec.orphan': '{name}: specification text for a type this model no longer has',
  'types.p.spec.size': '{name}: the text says {sizes} mm; the type in the model has {known}', 'types.p.spec.schedule': '{name}: no sheet holds the {schedule} schedule',
  'types.p.detail.missing': '{name}: no construction detail linked', 'types.p.detail.sheet': '{name}: the detail "{link}" points to sheet {sheet}, which this model does not have',
  'types.err.noproject': 'This file has no project to keep links in.', 'types.err.type': 'That is not a type of this model.', 'types.err.link': 'A detail needs a title and a file, an address or a sheet.',
  'types.err.many': 'At most {n} types can carry links.', 'types.err.per-type': 'A type carries at most {n} details.', 'types.err.gone': 'That link is not there any more.',
  'types.title': 'Types, specifications and details', 'types.details': 'Details', 'types.sheet': 'sheet {sheet}',
  'types.app.detailcraft': 'DetailCraft', 'types.app.cadcraft': 'CadCraft', 'types.app.bimcraft': 'this model', 'types.app.other': 'other',
  'spec.text.none': 'No specification text yet.',
  'records.p.shop.overdue': '{ref} {title}: still open past its due date {due}', 'records.p.shop.revise': '{ref} {title}: revise and resubmit (revision {rev} is waiting for the trade)',
  'records.err.noproject': 'This file has no project to keep records in.', 'records.err.title': 'Give the record a title.', 'records.err.state': 'That is not a review result.',
  'records.err.gone': 'That record is not in the model any more.', 'records.err.settled': 'That shop drawing is approved: a new one starts a new record.', 'records.err.cause': 'That is not a cause an instruction can have.',
};
const fill = (s, v = {}) => String(s).replace(/\{\{|\}\}|\{([A-Za-z_][A-Za-z0-9_]*)\}/g, (m, k) => (m === '{{' ? '{' : m === '}}' ? '}' : v[k] === undefined ? m : String(v[k])));
/** A t() over the page's: the catalog's words when it has the key, else this table's. */
export function speak(t) {
  return (key, vars) => { const s = typeof t === 'function' ? t(key, vars) : key; return s === key && EN[key] !== undefined ? fill(EN[key], vars) : s; };
}
export const say = speak(null);

// ---- the page (stages-ui.js) ----
Object.assign(EN, {
  'stages.title': 'Project stages', 'stages.brief': 'Brief', 'stages.options': 'Options against the brief', 'stages.types': 'Types, specifications and details', 'stages.shop': 'Shop drawings', 'stages.si': 'Site instructions',
  'stages.nomodel': 'Open or start a model first.', 'stages.verb': 'Project stages', 'stages.cancel': 'Cancel', 'stages.level': 'Level {n}', 'stages.problems.src': 'Project stages',
  'brief.none': 'No brief yet. Paste the rooms your client asked for, with the area each should have, and the accommodation schedule will say whether what you draw meets them.',
  'brief.client': 'Client', 'brief.site': 'Site', 'brief.budget': 'Budget', 'brief.currency': 'Currency', 'brief.tolerance': 'Tolerance (%)', 'brief.efficiency': 'Rooms per floor area (0 to 1)',
  'brief.programme': 'Programme (one "date | milestone" a line)', 'brief.notes': 'Notes', 'brief.save': 'Save the brief', 'brief.saved': 'The brief is saved.', 'brief.undo.save': 'Save the brief',
  'brief.rooms': 'Rooms', 'brief.rooms.help': 'One room a line: name; how many; area in m² each (the count may be left out). A line that cannot be read is skipped and counted.',
  'brief.rooms.add': 'Add the rooms', 'brief.rooms.none': 'No room could be read ({n} lines skipped).', 'brief.rooms.added': '{n} rooms added to the brief.', 'brief.rooms.skipped': '{n} lines skipped.', 'brief.undo.rooms': 'Add brief rooms', 'brief.undo.remove': 'Remove brief room {name}', 'brief.undo.start': 'Start the brief',
  'brief.accommodation': 'Accommodation schedule', 'brief.h.room': 'Room', 'brief.h.count': 'No.', 'brief.h.each': 'Each m²', 'brief.h.target': 'Target m²', 'brief.h.drawn': 'Drawn', 'brief.h.area': 'Drawn m²', 'brief.h.status': 'State',
  'brief.status.met': 'Met', 'brief.status.over': 'Over', 'brief.status.short': 'Short', 'brief.status.notdrawn': 'Not drawn',
  'brief.totals': 'Target {target} m² net, drawn {drawn} m² (about {gross} m² gross at the efficiency above). Met {met}, short {short}, not drawn {notdrawn}.',
  'brief.unbriefed': 'Drawn rooms the brief does not list: {list}.',
  'brief.new.title': 'Start a new project from a brief', 'brief.new.help': 'Opens a new model (from one of your saved templates when you choose one; a template named like Architecture is chosen for you) and puts the brief in as its first step.',
  'brief.new.name': 'Project name', 'brief.new.levels': 'Levels', 'brief.new.template': 'Start from', 'brief.new.blank': 'A blank building', 'brief.new.make': 'Start the project', 'brief.new.done': '{name} started with {n} brief rooms.',
  'options.none': 'No massing options in this model yet. Keep options from Room program to massing, or add them from a file.', 'options.current': '(current)',
  'options.h.option': 'Option', 'options.h.floors': 'Floors', 'options.h.gross': 'Gross m²', 'options.h.asked': 'Asked m² (surplus)', 'options.h.rooms': 'Brief rooms placed', 'options.h.cost': 'Cost',
  'options.placed': '{n} of {of}', 'options.nocost': 'No rate', 'options.budget.under': 'under budget', 'options.budget.over': 'over budget', 'options.stack': 'Stack the brief here', 'options.stacked': 'The brief is stacked into {name}.', 'options.undo.layout': 'Room layout for {name}',
  'options.floor': 'Floor {n}: {rooms} ({net} of {cap} m²)', 'options.unplaced': 'Does not fit: {list}.',
  'options.note': 'A layout stacks rooms into floors by area only. It draws no walls. Cost comes only from the project price table; with no row it says so.',
  'types.none': 'No types in use yet: draw walls or place doors and windows.', 'types.group.wall': 'Wall type', 'types.group.door': 'Door type', 'types.group.window': 'Window type', 'types.group.floor': 'Floor', 'types.group.finish': 'Finish', 'types.group.roof': 'Roof type',
  'types.h.type': 'Type', 'types.h.spec': 'Specification', 'types.h.details': 'Details', 'types.h.agree': 'Agreement', 'types.text.yes': 'Written', 'types.text.no': 'None',
  'types.f.spec.missing': 'No specification text', 'types.f.spec.orphan': 'Text for a type no longer in the model', 'types.f.spec.size': 'A size in the text is not in the model', 'types.f.spec.schedule': 'No sheet holds its schedule', 'types.f.detail.missing': 'No detail linked', 'types.f.detail.sheet': 'A linked sheet is missing',
  'types.add': 'Link a detail', 'types.add.for': 'Link a detail to {name}', 'types.add.save': 'Link it', 'types.linked': 'Detail linked.', 'types.f.title': 'Title', 'types.f.app': 'In', 'types.f.ref': 'File or address', 'types.f.sheet': 'Sheet of this model', 'types.f.note': 'Note',
  'types.undo.link': 'Link a detail', 'types.undo.unlink': 'Unlink {title}',
  'types.note': 'The specification text itself is written in Documents from the model (Specification). Here it is only compared with the model: nothing is refused.',
  'brief.status.none': '',
  'shop.waiting': '{n} elements wait on a review.', 'shop.nowaiting': 'No element is waiting on a shop drawing review.', 'shop.select.waiting': 'Select them',
  'shop.h.ref': 'Ref', 'shop.h.title': 'Shop drawing', 'shop.h.trade': 'Trade', 'shop.h.rev': 'Rev', 'shop.h.state': 'State', 'shop.h.elements': 'Elements',
  'shop.state.open': 'With the reviewer', 'shop.state.approved': 'Approved', 'shop.state.approved-as-noted': 'Approved as noted', 'shop.state.revise': 'Revise and resubmit', 'shop.state.closed': 'Closed', 'shop.state.answered': 'Answered', 'shop.due': 'due {date}',
  'shop.act.approve': 'Approve', 'shop.act.asnoted': 'As noted', 'shop.act.revise': 'Revise', 'shop.act.resubmit': 'Resubmitted',
  'shop.receive': 'Receive a shop drawing', 'shop.f.title': 'Title', 'shop.f.trade': 'Trade', 'shop.f.by': 'From', 'shop.f.date': 'Received', 'shop.f.due': 'Review due', 'shop.f.as': 'Comes back as', 'shop.f.file': 'File',
  'shop.f.review': 'Reviewer (for the buttons above)', 'shop.f.review.ph': 'Who reviewed it', 'shop.f.note': 'Review note', 'shop.f.elements': 'It covers the {n} elements selected in the model.',
  'shop.as.file': 'A file', 'shop.as.markup': 'Markups', 'shop.as.model': 'A linked model', 'shop.receive.save': 'Receive it', 'shop.received': '{ref} received.', 'shop.reviewed': '{ref}: {state}.', 'shop.resubmitted': '{ref} resubmitted as revision {rev}.',
  'shop.undo.receive': 'Receive a shop drawing', 'shop.undo.review': 'Review {ref}', 'shop.undo.resubmit': 'Resubmit {ref}', 'shop.undo.remove': 'Remove {ref}',
  'si.h.ref': 'Ref', 'si.h.title': 'Instruction', 'si.h.cause': 'Cause', 'si.h.effect': 'Effect', 'si.h.state': 'State', 'si.h.elements': 'Elements',
  'si.cause.client': 'Client request', 'si.cause.site': 'Site condition', 'si.cause.design': 'Design development', 'si.cause.authority': 'Authority requirement', 'si.cause.error': 'Error or omission', 'si.cause.other': 'Other',
  'si.cost': 'cost {v}', 'si.time': 'time {v}', 'si.state.open': 'Open', 'si.state.closed': 'Closed', 'si.state.answered': 'Answered', 'si.state.approved': 'Approved', 'si.state.approved-as-noted': 'Approved as noted', 'si.state.revise': 'Revise',
  'si.close': 'Close', 'si.closed': '{ref} closed.', 'si.record': 'Record a site instruction', 'si.f.title': 'Instruction', 'si.f.cause': 'Cause', 'si.f.by': 'Given by', 'si.f.date': 'Date', 'si.f.cost': 'Effect on cost (words)', 'si.f.time': 'Effect on time (words)', 'si.f.note': 'Note',
  'si.record.save': 'Record it', 'si.recorded': '{ref} recorded against {n} elements.', 'si.undo.record': 'Record a site instruction', 'si.undo.close': 'Close {ref}', 'si.undo.remove': 'Remove {ref}',
  'si.explain': 'What explains the changes?', 'si.explain.run': 'Explain the changes since this issue', 'si.explain.none': 'There is nothing to compare with: record the issue with its element prints first.',
  'si.explain.sum': '{changed} elements changed since the issue: {explained} explained by an instruction, {unexplained} with nothing recorded.', 'si.explain.select': 'Select the ones with nothing recorded',
});
