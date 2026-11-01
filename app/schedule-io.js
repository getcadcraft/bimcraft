/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file: file-format element and column names (MSPDI, CSV); the page words every message code. */
/**
 * schedule-io.js — project schedules in and out of BimCraft's 4D schedule (0.8 SU.931). No DOM: bin/test-bimcraft.mjs --schedule.
 *
 * A schedule task is ifc-4d.js's task ({ name, start, finish, stage, package, rows }, days since 1970-01-01 UTC, Finish
 * inclusive) plus { uid, preds: [{ uid, type: 'FS'|'SS'|'FF'|'SF', lag }] } (lag in whole days, negative = lead).
 *
 *   readMspdi(xml)            → { tasks, errors }   Microsoft Project's open XML (MSPDI, the published schema): Name, Start,
 *                                Finish, UID, PredecessorLink (Type 0 FF · 1 FS · 2 SF · 3 SS; LinkLag in tenths of a minute,
 *                                480 minutes a day unless the file says otherwise), summary tasks become stages (outline level 1)
 *                                and work packages (level 2); their children are the tasks. Element rows come from our own
 *                                convention: Notes lines "Field=Value" (what writeMspdi writes), nothing else in the file is used.
 *   writeMspdi(tasks, opts)   → the XML text (outline stage → package → task; milestones are tasks of one day)
 *   readCsv(text)             → { tasks, errors }   ifc-4d.js's columns + optional UID and Predecessors ("2FS+3d", "4SS", "5FF-1d")
 *   writeCsv(tasks)           → the CSV text ifc-4d.js reads back (and Predecessors / UID)
 *   plan(tasks)               → { tasks: [{ ...t, es, ef, ls, lf, float, critical }], finish, critical: [uid…], errors }
 *                                the critical path method on calendar days: every link is one inequality
 *                                start(succ) ≥ start(pred) + d (FS: dur+lag · SS: lag · FF: dur+lag−dur(succ) · SF: lag−dur(succ));
 *                                a task with no predecessor may not start before its own Start; a cycle is an error.
 *   ganttSvg(planned, opts)   → an SVG string: bars by day, critical bars marked, dependency arrows, a day scale.
 */
import { parseDay, dayText, csvRows } from './ifc-4d.js';

const TYPES = ['FF', 'FS', 'SF', 'SS'];                   // MSPDI Type 0..3
const MINUTES_PER_DAY = 480;
const MAX_TASKS = 20000;
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' }[c]));
const dur = (t) => t.finish - t.start + 1;

// ---- a small XML reader: elements, text, the five entities and numeric references; DOCTYPE / entity declarations are refused ----
function parseXml(src) {
  const text = String(src).replace(/^﻿/, '');
  if (/<!DOCTYPE|<!ENTITY/i.test(text)) throw Object.assign(new Error('doctype'), { key: 'doctype' });
  const decode = (s) => s.replace(/&(#x[0-9a-f]+|#\d+|amp|lt|gt|quot|apos);/gi, (m, e) => {
    if (e[0] === '#') { const n = e[1].toLowerCase() === 'x' ? parseInt(e.slice(2), 16) : +e.slice(1); return n > 0 && n < 0x110000 ? String.fromCodePoint(n) : ''; }
    return { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'" }[e.toLowerCase()];
  });
  const root = { name: '#root', kids: [], text: '' };
  const stack = [root];
  const re = /<!--[\s\S]*?-->|<\?[\s\S]*?\?>|<!\[CDATA\[([\s\S]*?)\]\]>|<\/([^\s>]+)\s*>|<([^\s/>]+)((?:[^>"']|"[^"]*"|'[^']*')*?)(\/?)>|([^<]+)/g;
  let m, depth = 0;
  while ((m = re.exec(text))) {
    const top = stack[stack.length - 1];
    if (m[1] !== undefined) top.text += m[1];
    else if (m[2]) { if (stack.length > 1) stack.pop(); depth--; }
    else if (m[3]) {
      const el = { name: m[3].replace(/^.*:/, ''), kids: [], text: '' };
      top.kids.push(el);
      if (!m[5]) { stack.push(el); if (++depth > 64) throw Object.assign(new Error('deep'), { key: 'deep' }); }
    } else if (m[6] !== undefined) top.text += decode(m[6]);
  }
  return root;
}
const kid = (el, name) => el.kids.find((k) => k.name === name);
const kids = (el, name) => el.kids.filter((k) => k.name === name);
const val = (el, name) => (kid(el, name)?.text ?? '').trim();

/** "2026-11-02T08:00:00" → day number (the date part only; the file's clock times do not matter to a day plan). */
const dayOf = (s) => parseDay(String(s).slice(0, 10));

export function readMspdi(xml) {
  const errors = [];
  let root;
  try { root = parseXml(xml); } catch (e) { return { tasks: [], errors: [{ line: 0, message: e.key || 'xml' }] }; }
  const proj = kid(root, 'Project');
  if (!proj) return { tasks: [], errors: [{ line: 0, message: 'noproject' }] };
  const perDay = (+val(proj, 'MinutesPerDay') || MINUTES_PER_DAY);
  const rawTasks = kids(kid(proj, 'Tasks') || { kids: [] }, 'Task');
  if (rawTasks.length > MAX_TASKS) return { tasks: [], errors: [{ line: 0, message: 'toomany' }] };
  const tasks = [], outline = [];   // outline[level] = the last summary seen at that level
  for (const r of rawTasks) {
    const uid = val(r, 'UID'), name = val(r, 'Name').slice(0, 200), level = +val(r, 'OutlineLevel') || 1;
    if (uid === '0' && !name) continue;                              // the project summary row Project writes first
    if (+val(r, 'Summary') === 1) { outline[level] = name; outline.length = level + 1; continue; }
    if (!name) { errors.push({ line: 0, message: 'noname', uid }); continue; }
    const start = dayOf(val(r, 'Start')), finish = dayOf(val(r, 'Finish'));
    if (start === null || finish === null) { errors.push({ line: 0, message: 'date', task: name }); continue; }
    if (finish < start) { errors.push({ line: 0, message: 'order', task: name }); continue; }
    const preds = [];
    for (const p of kids(r, 'PredecessorLink')) {
      const ty = +(val(p, 'Type') || 1);
      const fmt = +(val(p, 'LinkLagFormat') || 7);                    // 7 = days · 5 = minutes, 3 = elapsed… : we read the tenth-of-a-minute figure
      const lagMin = (+val(p, 'LinkLag') || 0) / 10;
      void fmt;
      if (!(ty >= 0 && ty <= 3) || !val(p, 'PredecessorUID')) { errors.push({ line: 0, message: 'link', task: name }); continue; }
      preds.push({ uid: val(p, 'PredecessorUID'), type: TYPES[ty], lag: Math.round(lagMin / perDay) });
    }
    const rows = [];
    for (const line of val(r, 'Notes').split(/\r?\n/)) { const i = line.indexOf('='); if (i > 0) rows.push({ field: line.slice(0, i).trim(), value: line.slice(i + 1).trim(), line: 0 }); }
    const stage = level >= 2 ? outline[1] || '' : '', pkg = level >= 3 ? outline[2] || '' : '';
    tasks.push({ uid: uid || String(tasks.length + 1), name, start, finish, stage, package: pkg, rows, preds });
  }
  return { tasks, errors: errors.concat(dangling(tasks)) };
}

function dangling(tasks) {
  const ids = new Set(tasks.map((t) => t.uid)), out = [];
  for (const t of tasks) for (const p of t.preds || []) if (!ids.has(p.uid)) out.push({ line: 0, message: 'nopred', task: t.name, uid: p.uid });
  return out;
}

export function writeMspdi(tasks, { title = 'BimCraft schedule', perDay = MINUTES_PER_DAY } = {}) {
  const iso = (d, end) => dayText(d) + (end ? 'T17:00:00' : 'T08:00:00');
  const lines = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>', '<Project xmlns="http://schemas.microsoft.com/project">',
    `<Name>${esc(title)}</Name>`, `<MinutesPerDay>${perDay}</MinutesPerDay>`, '<Tasks>'];
  let id = 0;
  const out = [];
  const summary = (name, level, a, b) => out.push({ summary: true, name, level, start: a, finish: b, id: ++id, uid: 's' + id });
  const stages = [...new Set(tasks.map((t) => t.stage || ''))];
  const uidOf = new Map(), items = [];
  for (const st of stages) {
    const inSt = tasks.filter((t) => (t.stage || '') === st);
    const lvlSt = st ? 2 : 1;
    if (st) summary(st, 1, Math.min(...inSt.map((t) => t.start)), Math.max(...inSt.map((t) => t.finish)));
    for (const pk of [...new Set(inSt.map((t) => t.package || ''))]) {
      const inPk = inSt.filter((t) => (t.package || '') === pk);
      if (pk) summary(pk, lvlSt, Math.min(...inPk.map((t) => t.start)), Math.max(...inPk.map((t) => t.finish)));
      for (const t of inPk) { const rec = { t, level: lvlSt + (pk ? 1 : 0), id: ++id }; items.push(rec); out.push(rec); }
    }
  }
  // MSPDI UIDs are integers; our uids may be anything, so number them and keep the mapping for the links
  for (const rec of items) uidOf.set(rec.t.uid ?? rec.t.name, 1000 + rec.id);
  const sumUid = (o) => 1000 + o.id;
  lines.push('<Task><UID>0</UID><ID>0</ID><Name>' + esc(title) + '</Name><OutlineLevel>0</OutlineLevel><Summary>1</Summary></Task>');
  for (const o of out) {
    if (o.summary) { lines.push(`<Task><UID>${sumUid(o)}</UID><ID>${o.id}</ID><Name>${esc(o.name)}</Name><OutlineLevel>${o.level}</OutlineLevel><Summary>1</Summary><Start>${iso(o.start)}</Start><Finish>${iso(o.finish, true)}</Finish></Task>`); continue; }
    const t = o.t, notes = (t.rows || []).map((r) => `${r.field}=${r.value}`).join('\n');
    const links = (t.preds || []).filter((p) => uidOf.has(p.uid)).map((p) => `<PredecessorLink><PredecessorUID>${uidOf.get(p.uid)}</PredecessorUID><Type>${TYPES.indexOf(p.type)}</Type><LinkLag>${p.lag * perDay * 10}</LinkLag><LagFormat>7</LagFormat></PredecessorLink>`).join('');
    lines.push(`<Task><UID>${uidOf.get(t.uid ?? t.name)}</UID><ID>${o.id}</ID><Name>${esc(t.name)}</Name><OutlineLevel>${o.level}</OutlineLevel><Summary>0</Summary><Start>${iso(t.start)}</Start><Finish>${iso(t.finish, true)}</Finish>${notes ? `<Notes>${esc(notes)}</Notes>` : ''}${links}</Task>`);
  }
  lines.push('</Tasks>', '</Project>');
  return lines.join('\r\n') + '\r\n';
}

// ---- CSV ----
const PRED = /^\s*([^\s+\-]+?)\s*(FS|SS|FF|SF)?\s*(?:([+-])\s*(\d+)\s*d?)?\s*$/i;
export function parsePreds(cell) {
  const preds = [], bad = [];
  for (const part of String(cell ?? '').split(/[;|]/).map((s) => s.trim()).filter(Boolean)) {
    const m = PRED.exec(part);
    if (!m) { bad.push(part); continue; }
    preds.push({ uid: m[1], type: (m[2] || 'FS').toUpperCase(), lag: m[3] ? (m[3] === '-' ? -1 : 1) * +m[4] : 0 });
  }
  return { preds, bad };
}
// ";" separates predecessors inside one cell, so a semicolon-delimited file would clash: the writer always uses commas.

export function readCsv(text) {
  const rows = csvRows(text), errors = [];
  if (!rows.length) return { tasks: [], errors: [{ line: 1, message: 'empty' }] };
  const head = rows[0].cells.map((h) => h.trim().toLowerCase());
  const col = (...n) => head.findIndex((h) => n.includes(h));
  const ci = { task: col('task', 'task name', 'name'), start: col('start', 'start date'), finish: col('finish', 'end', 'finish date', 'end date'), field: col('field', 'property'), value: col('value'),
    stage: col('stage', 'phase'), package: col('package', 'work package', 'wbs'), uid: col('uid', 'id'), preds: col('predecessors', 'predecessor') };
  const missing = ['task', 'start', 'finish'].filter((k) => ci[k] < 0);
  if (missing.length) return { tasks: [], errors: [{ line: rows[0].line, message: 'header', missing }] };
  const by = new Map();
  for (const r of rows.slice(1)) {
    const g = (k) => (ci[k] >= 0 ? String(r.cells[ci[k]] ?? '').trim() : '');
    const name = g('task').slice(0, 200), start = parseDay(g('start')), finish = parseDay(g('finish'));
    if (!name) { errors.push({ line: r.line, message: 'noname' }); continue; }
    if (start === null || finish === null) { errors.push({ line: r.line, message: 'date', task: name }); continue; }
    if (finish < start) { errors.push({ line: r.line, message: 'order', task: name }); continue; }
    let t = by.get(name);
    if (!t) {
      const { preds, bad } = parsePreds(g('preds'));
      for (const b of bad) errors.push({ line: r.line, message: 'link', task: name, text: b });
      by.set(name, (t = { uid: g('uid') || String(by.size + 1), name, start, finish, stage: g('stage'), package: g('package'), rows: [], preds }));
    } else if (t.start !== start || t.finish !== finish) { errors.push({ line: r.line, message: 'dates-differ', task: name }); continue; }
    if (g('field') && g('value')) t.rows.push({ field: g('field'), value: g('value'), line: r.line });
  }
  const tasks = [...by.values()];
  return { tasks, errors: errors.concat(dangling(tasks)) };
}

const q = (s) => { s = String(s ?? ''); return /[",;\r\n]/.test(s) || /^[=+\-@]/.test(s) ? '"' + (/^[=+\-@]/.test(s) ? "'" : '') + s.replace(/"/g, '""') + '"' : s; };
export function writeCsv(tasks) {
  const lines = ['UID,Task,Start,Finish,Stage,Package,Predecessors,Field,Value'];
  for (const t of tasks) {
    const preds = (t.preds || []).map((p) => `${p.uid}${p.type}${p.lag ? (p.lag > 0 ? '+' : '-') + Math.abs(p.lag) + 'd' : ''}`).join('|');
    const rows = t.rows?.length ? t.rows : [{ field: '', value: '' }];
    rows.forEach((r, i) => lines.push([q(t.uid), q(t.name), dayText(t.start), dayText(t.finish), q(t.stage), q(t.package), i ? '' : q(preds), q(r.field), q(r.value)].join(',')));
  }
  return lines.join('\r\n') + '\r\n';
}

// ---- critical path ----
export function plan(tasks) {
  const errors = [], byUid = new Map(), list = tasks.map((t) => ({ ...t }));
  for (const t of list) byUid.set(String(t.uid ?? t.name), t);
  const edges = [];                                                    // { from, to, d }
  for (const t of list) for (const p of t.preds || []) {
    const a = byUid.get(String(p.uid));
    if (!a) { errors.push({ message: 'nopred', task: t.name, uid: p.uid }); continue; }
    if (a === t) { errors.push({ message: 'cycle', task: t.name }); continue; }
    const da = dur(a), ds = dur(t), lag = p.lag || 0;
    const d = p.type === 'SS' ? lag : p.type === 'FF' ? da + lag - ds : p.type === 'SF' ? lag - ds : da + lag;
    edges.push({ from: a, to: t, d });
  }
  const out = new Map(), inn = new Map();
  for (const t of list) { out.set(t, []); inn.set(t, []); }
  for (const e of edges) { out.get(e.from).push(e); inn.get(e.to).push(e); }
  // topological order (Kahn); what is left over is in a cycle
  const left = new Map(list.map((t) => [t, inn.get(t).length])), order = [], queue = list.filter((t) => !left.get(t));
  while (queue.length) { const t = queue.shift(); order.push(t); for (const e of out.get(t)) if (!(left.set(e.to, left.get(e.to) - 1), left.get(e.to))) queue.push(e.to); }
  if (order.length < list.length) {
    const stuck = list.filter((t) => !order.includes(t));
    errors.push({ message: 'cycle', task: stuck[0].name, tasks: stuck.map((t) => t.name) });
    return { tasks: list, finish: null, critical: [], errors };
  }
  for (const t of order) {
    t.es = t.start;                                                    // a task may not start before its own Start (it is the constraint)
    for (const e of inn.get(t)) t.es = Math.max(t.es, e.from.es + e.d);
    t.ef = t.es + dur(t) - 1;
  }
  const finish = list.length ? Math.max(...list.map((t) => t.ef)) : null;
  for (const t of [...order].reverse()) {
    t.ls = finish - dur(t) + 1;
    for (const e of out.get(t)) t.ls = Math.min(t.ls, e.to.ls - e.d);
    t.lf = t.ls + dur(t) - 1;
    t.float = t.ls - t.es;
    t.critical = t.float === 0;
  }
  return { tasks: list, finish, critical: list.filter((t) => t.critical).map((t) => t.uid ?? t.name), errors };
}

// ---- Gantt ----
export function ganttSvg(planned, { width = 960, rowH = 22, labelW = 220, showPlan = true, from = null, to = null } = {}) {
  const ts = planned.tasks || planned;
  if (!ts.length) return '';
  const a = from ?? Math.min(...ts.map((t) => t.start)), b = to ?? Math.max(...ts.map((t) => Math.max(t.finish, t.ef ?? t.finish))) + 1;
  const span = Math.max(1, b - a + 1), px = (width - labelW - 10) / span, head = 28, H = head + ts.length * rowH + 6;
  const X = (d) => labelW + (d - a) * px;
  const pos = new Map();
  const s = [`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${H}" width="${width}" height="${H}" font-family="sans-serif" font-size="11" role="img">`];
  const step = span > 400 ? 90 : span > 120 ? 30 : span > 40 ? 7 : 1;
  for (let d = a; d <= b; d += step) s.push(`<line x1="${X(d).toFixed(1)}" y1="${head - 6}" x2="${X(d).toFixed(1)}" y2="${H}" stroke="#8884" /><text x="${(X(d) + 2).toFixed(1)}" y="${head - 10}" fill="currentColor">${dayText(d).slice(span > 400 ? 0 : 5)}</text>`);
  ts.forEach((t, i) => {
    const y = head + i * rowH, s0 = showPlan && t.es !== undefined ? t.es : t.start, f0 = showPlan && t.ef !== undefined ? t.ef : t.finish;
    pos.set(t, { y: y + rowH / 2, x0: X(s0), x1: X(f0 + 1) });
    s.push(`<text x="4" y="${y + rowH * 0.7}" fill="currentColor">${esc(t.name.slice(0, 32))}</text>`,
      `<rect x="${X(s0).toFixed(1)}" y="${y + 4}" width="${Math.max(2, (f0 - s0 + 1) * px).toFixed(1)}" height="${rowH - 8}" rx="2" fill="${t.critical ? '#c0392b' : '#2e7dd1'}" data-critical="${t.critical ? 1 : 0}"><title>${esc(t.name)}: ${dayText(s0)} – ${dayText(f0)}</title></rect>`);
  });
  for (const t of ts) for (const p of t.preds || []) {
    const from_ = ts.find((x) => String(x.uid ?? x.name) === String(p.uid)); if (!from_) continue;
    const A = pos.get(from_), B = pos.get(t);
    const ax = p.type === 'SS' || p.type === 'SF' ? A.x0 : A.x1, bx = p.type === 'FF' || p.type === 'SF' ? B.x1 : B.x0;
    s.push(`<path d="M${ax.toFixed(1)} ${A.y} H${(Math.max(ax, bx) + 4).toFixed(1)} V${B.y} H${bx.toFixed(1)}" fill="none" stroke="#666" stroke-width="1"/>`);
  }
  s.push('</svg>');
  return s.join('');
}
