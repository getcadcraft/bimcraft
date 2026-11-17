/* SPDX-License-Identifier: Apache-2.0 */
/**
 * stages/stages-ui.js: the "Project stages" section of BimCraft's left panel (0.10 W1.10, session stages-10): the brief (BK.176), options
 * against the brief (BK.105), specifications and details on types (BK.110, BK.111), shop drawings back for review (BK.113) and site
 * instructions (BK.178). The rules and the file format are in brief.js, options-side.js, types-link.js and records.js; this is the page.
 * It makes its own <details> and puts it after `host.after` (an element), so mounting it is one import and one call:
 *
 *   mountStages(host) → { render(), root, problems() } | null
 *   host = { after (an element), editor() → IfcEditor | null, status(text, isError), afterEdit(), selection() → [GlobalId],
 *            select([GlobalId]), download(name, data, type), fileName(), today?(),
 *            WebIFC, IfcModel, openNew(bytes, name) → Promise, templates?() → Promise<[{ id, name }]>, template?(id) → Promise<{ bytes }>,
 *            priceRows?() → [price row] (cost5d.js, for the options' cost), issues?() → [{ id, code, date, name }], changes?(issueId) → changesFor() | null }
 * Test hooks: window.bimcraftStages = { render, problems }. Words: ./words.js (the catalog first, then English).
 */
import { el } from '../ui-util.js';
import { t as pageT } from '../i18n.js';
import { speak } from './words.js';
import { ModelWriter } from '../model-write.js';
import { snapshotModel } from '../model-ops.js';
import { readOptionSets } from '../mass-options.js';
import { optionCosts } from '../option-compare.js';
import { newBuilding, stackLevels } from '../new-model.js';
import { newFromTemplate } from '../project-template.js';
import { specSections } from '../spec-model.js';
import * as BR from './brief.js';
import * as OS from './options-side.js';
import * as TL from './types-link.js';
import * as RC from './records.js';
import { sha256Hex } from '../handover-docs.js';
import { readSheets } from '../views-model.js';
import { readIssues } from '../issue-set.js';
import { today } from './common.js';

const T = speak(pageT);
const CSS = new URL('./stages.css', import.meta.url).href;
const STATUS_CLS = { met: 'st-ok', over: 'st-warn', short: 'st-bad', notdrawn: 'st-none', approved: 'st-ok', 'approved-as-noted': 'st-ok', open: 'st-none', revise: 'st-bad', closed: 'st-none', answered: 'st-none' };

export function mountStages(host) {
  if (!host?.after || typeof document === 'undefined') return null;
  if (!document.querySelector('link[data-stages-css]')) document.head.append(el('link', { rel: 'stylesheet', href: CSS, 'data-stages-css': true }));
  const root = el('details', { className: 'bc-find-details bc-stages', 'data-stages-details': true }, el('summary', {}, T('stages.title')), el('div', { 'data-stages': true }));
  host.after.after(root);
  const body = root.querySelector('[data-stages]');
  const S = { open: {}, msg: '', err: false, results: null };
  const ed = () => host.editor();
  const W = () => { const e = ed(); return e ? new ModelWriter(e.W, e.api, e.mid) : null; };
  const say = (text, isError = false) => { S.msg = text; S.err = isError; host.status?.(text, isError); };
  const today_ = () => (host.today ? host.today() : today());
  const commit = (run, label) => {
    const e = ed();
    if (!e) { say(T('stages.nomodel'), true); return null; }
    try { const r = e.modelChange(run, { label, verb: T('stages.verb') }); host.afterEdit?.(); invalidate(); return r; }
    catch (err) { say(err.key ? T(err.key, err.fill) : String(err.message || err), true); return null; }
  };
  const num2 = (v) => (Math.round(v * 100) / 100).toLocaleString('en-US');

  // ---- small controls ----
  const btn = (label, attr, fn, cls = 'btn-plot btn-sm-cc') => el('button', { type: 'button', className: cls, [attr]: true, onClick: fn }, label);
  const input = (attr, value = '', type = 'text', extra = {}) => el('input', { className: 'bc-input', type, value, [attr]: true, ...extra });
  const area = (attr, value = '', rows = 3) => el('textarea', { className: 'bc-input', rows, [attr]: true }, value);
  const select = (attr, rows, value) => el('select', { className: 'bc-input select-cc', [attr]: true }, rows.map(([v, l]) => el('option', { value: v, selected: v === value }, l)));
  const field = (label, ctl) => el('label', { className: 'st-field' }, el('span', { className: 'bc-muted' }, label), ctl);
  const chip = (status, text) => el('span', { className: 'st-chip ' + (STATUS_CLS[status] || 'st-none'), 'data-st-status': status }, text);
  const val = (root_, a) => root_.querySelector('[' + a + ']')?.value ?? '';
  const section = (key, title, content) => {
    const d = el('details', { className: 'st-sec', 'data-st-sec': key, open: !!S.open[key] }, el('summary', {}, title), el('div', { className: 'st-body' }, content));
    d.addEventListener('toggle', () => { S.open[key] = d.open; });
    return d;
  };
  const table = (head, rows, attr) => el('table', { className: 'bc-table st-table', [attr]: true }, el('thead', {}, el('tr', {}, head.map((h) => el('th', {}, h)))), el('tbody', {}, rows));
  const guidsOf = () => { try { return host.selection?.() || []; } catch (e) { return []; } };

  // ---- cached reads ----
  let cache = null;
  const invalidate = () => { cache = null; render(); source?.invalidate?.(); };
  const read = () => {
    if (cache) return cache;
    const w = W();
    if (!w) return null;
    const brief = BR.readBrief(w), drawn = BR.drawnRooms(w);
    const sets = readOptionSets(w);
    cache = { w, brief, drawn, acc: BR.accommodation(brief, drawn), sets, layouts: OS.readLayouts(w), history: readIssues(w), extras: RC.readExtras(w), links: TL.readLinks(w) };
    return cache;
  };
  const typeData = () => {
    const c = read(), e = ed();
    if (!c) return null;
    try {
      const snap = snapshotModel(e), sections = specSectionsFor(c.w, snap);
      return { sections, ag: TL.typeAgreement({ sections, links: c.links, sheets: readSheets(c.w), roofs: snap.derived?.roofs || [] }) };
    } catch (err) { console.warn('stages types', err); return { sections: [], ag: { rows: [], findings: [] } }; }
  };
  const specSectionsFor = (w, snap) => specSections(w, snap, { t: T, fmtLen: (mm) => Math.round(mm) + ' mm', fmtArea: (m2) => num2(m2) + ' m²' });

  // ================================================================== 1. the brief
  function briefView(c) {
    const b = c.brief, kids = [];
    if (!b.exists) {
      kids.push(el('p', { className: 'bc-muted' }, T('brief.none')));
    } else {
      kids.push(el('div', { className: 'st-grid', 'data-st-brief-fields': true },
        field(T('brief.client'), input('data-st-client', b.client)), field(T('brief.site'), input('data-st-site', b.site)),
        field(T('brief.budget'), input('data-st-budget', b.budget || '', 'number', { min: 0, step: 'any' })), field(T('brief.currency'), input('data-st-currency', b.currency, 'text', { maxlength: 8 })),
        field(T('brief.tolerance'), input('data-st-tol', b.tolerance, 'number', { min: 0, max: 50, step: 'any' })), field(T('brief.efficiency'), input('data-st-eff', b.efficiency, 'number', { min: 0.1, max: 1, step: '0.05' }))));
      kids.push(field(T('brief.programme'), area('data-st-programme', b.programme, 3)), field(T('brief.notes'), area('data-st-notes', b.notes, 2)));
      kids.push(btn(T('brief.save'), 'data-st-brief-save', () => {
        const q = (a) => body.querySelector('[' + a + ']').value;
        const r = commit(BR.setBriefOp({ client: q('data-st-client'), site: q('data-st-site'), budget: q('data-st-budget') === '' ? 0 : Number(q('data-st-budget')), currency: q('data-st-currency'), tolerance: Number(q('data-st-tol')), efficiency: Number(q('data-st-eff')), programme: q('data-st-programme'), notes: q('data-st-notes') }), T('brief.undo.save'));
        if (r) say(T('brief.saved'));
      }));
    }
    // the rooms: add by paste
    kids.push(el('h5', {}, T('brief.rooms')), el('p', { className: 'bc-muted' }, T('brief.rooms.help')), area('data-st-rooms-text', '', 4),
      btn(T('brief.rooms.add'), 'data-st-rooms-add', () => {
        const parsed = BR.parseRooms(body.querySelector('[data-st-rooms-text]').value);
        if (!parsed.rooms.length) { say(T('brief.rooms.none', { n: parsed.skipped.length }), true); return; }
        const r = commit(b.exists ? BR.addBriefRoomsOp(parsed.rooms) : BR.startBriefOp({ fields: {}, rooms: parsed.rooms }), T('brief.undo.rooms'));
        if (r) say(T('brief.rooms.added', { n: parsed.rooms.length }) + (parsed.skipped.length ? ' ' + T('brief.rooms.skipped', { n: parsed.skipped.length }) : ''));
      }));
    if (c.acc.rows.length) {
      const rows = c.acc.rows.map((r) => el('tr', { 'data-st-brief-row': r.guid, 'data-st-status': r.status },
        el('td', {}, r.name), el('td', { className: 'st-n' }, String(r.count)), el('td', { className: 'st-n' }, num2(r.target_m2)), el('td', { className: 'st-n' }, num2(r.target_total_m2)),
        el('td', { className: 'st-n' }, r.drawn_count + ' / ' + r.count), el('td', { className: 'st-n' }, num2(r.drawn_m2)), el('td', {}, chip(r.status, T('brief.status.' + r.status) + (r.status === 'short' || r.status === 'over' ? ' ' + (r.diff_m2 > 0 ? '+' : '') + num2(r.diff_m2) + ' m²' : ''))),
        el('td', {}, btn('×', 'data-st-brief-remove', () => commit(BR.removeBriefRoomsOp([r.guid]), T('brief.undo.remove', { name: r.name })), 'st-x'))));
      const tt = c.acc.totals;
      kids.push(el('h5', {}, T('brief.accommodation')), el('div', { className: 'st-scroll' }, table([T('brief.h.room'), T('brief.h.count'), T('brief.h.each'), T('brief.h.target'), T('brief.h.drawn'), T('brief.h.area'), T('brief.h.status'), ''], rows, 'data-st-accommodation')),
        el('p', { className: 'bc-muted', 'data-st-totals': true }, T('brief.totals', { target: num2(tt.target_m2), drawn: num2(tt.drawn_m2), gross: tt.gross_m2 === null ? '' : num2(tt.gross_m2), met: tt.met + tt.over, short: tt.short, notdrawn: tt.notdrawn })));
      if (c.acc.unbriefed.length) kids.push(el('p', { className: 'bc-muted', 'data-st-unbriefed': true }, T('brief.unbriefed', { list: c.acc.unbriefed.map((u) => (u.name || '?') + ' ' + num2(u.area_m2) + ' m²').join(', ') })));
    }
    // a new project from a brief
    kids.push(newProjectView());
    return kids;
  }
  function newProjectView() {
    const box = el('details', { className: 'st-sec', 'data-st-new': true }, el('summary', {}, T('brief.new.title')));
    const sel = select('data-st-new-template', [['', T('brief.new.blank')]], '');
    host.templates?.().then((list) => { for (const x of list || []) sel.append(el('option', { value: x.id, selected: /architect/i.test(x.name) }, x.name)); }).catch(() => {});
    box.append(el('p', { className: 'bc-muted' }, T('brief.new.help')),
      el('div', { className: 'st-grid' }, field(T('brief.new.name'), input('data-st-new-name', '', 'text', { maxlength: 80 })), field(T('brief.new.levels'), input('data-st-new-levels', 2, 'number', { min: 1, max: 40 })), field(T('brief.new.template'), sel),
        field(T('brief.client'), input('data-st-new-client')), field(T('brief.site'), input('data-st-new-site')), field(T('brief.budget'), input('data-st-new-budget', '', 'number', { min: 0, step: 'any' }))),
      field(T('brief.rooms'), area('data-st-new-rooms', '', 4)),
      btn(T('brief.new.make'), 'data-st-new-make', async () => {
        const q = (a) => box.querySelector('[' + a + ']').value, name = q('data-st-new-name').trim();
        const parsed = BR.parseRooms(q('data-st-new-rooms'));
        if (!name) { say(T('brief.err.name'), true); return; }
        if (!host.openNew) { say(T('stages.nomodel'), true); return; }
        try {
          const tid = q('data-st-new-template');
          const levels = stackLevels(Math.max(1, Math.min(40, Math.round(Number(q('data-st-new-levels')) || 1))), 3000, (i) => T('stages.level', { n: i + 1 }));
          let bytes;
          if (tid && host.template) { const tpl = await host.template(tid); bytes = (await newFromTemplate(tpl.bytes, { WebIFC: host.WebIFC, IfcModel: host.IfcModel, name })).bytes; }
          else bytes = new TextEncoder().encode(newBuilding({ name, levels, fileName: name + '.ifc' }));
          await host.openNew(bytes, name + '.ifc');
          const r = commit(BR.startBriefOp({ fields: { client: q('data-st-new-client'), site: q('data-st-new-site'), budget: q('data-st-new-budget') === '' ? 0 : Number(q('data-st-new-budget')) }, rooms: parsed.rooms }), T('brief.undo.start'));
          if (r) say(T('brief.new.done', { name, n: parsed.rooms.length }));
        } catch (err) { say(err.key ? T(err.key, err.fill) : String(err.message || err), true); }
      }));
    return box;
  }

  // ================================================================== 2. options
  function optionsView(c) {
    if (!c.sets.length) return [el('p', { className: 'bc-muted', 'data-st-options-none': true }, T('options.none'))];
    const rows = (host.priceRows?.() || []);
    const kids = [];
    for (const set of c.sets) {
      const costs = optionCosts(set.options, rows);
      const cmp = OS.compareToBrief(c.brief, [set], { costs, layouts: c.layouts })[0];
      kids.push(el('h5', {}, set.set));
      const svg = OS.optionFigure(cmp.options, { label: (o) => o.option });
      if (svg) { const fig = el('div', { className: 'st-figure', 'data-st-figure': true }); fig.append(new DOMParser().parseFromString(svg, 'image/svg+xml').documentElement); kids.push(fig); }
      kids.push(el('div', { className: 'st-scroll' }, table([T('options.h.option'), T('options.h.floors'), T('options.h.gross'), T('options.h.asked'), T('options.h.rooms'), T('options.h.cost'), ''],
        cmp.options.map((o) => {
          const f = o.fit, haveBrief = c.brief.rooms.length > 0;
          return el('tr', { 'data-st-option': o.guid }, el('td', {}, o.option + (o.current ? ' ' + T('options.current') : '')), el('td', { className: 'st-n' }, String(o.floors)), el('td', { className: 'st-n' }, num2(o.gross_m2)),
            el('td', { className: 'st-n' }, haveBrief ? num2(f.asked_gross_m2) + ' (' + (f.surplus_m2 >= 0 ? '+' : '') + num2(f.surplus_m2) + ')' : '–'),
            el('td', {}, haveBrief ? chip(f.fits ? 'met' : 'short', T('options.placed', { n: f.placed, of: f.of })) : '–'),
            el('td', {}, f.cost === null ? T('options.nocost') : num2(f.cost) + (f.budget_status === 'none' ? '' : ' ' + T('options.budget.' + f.budget_status))),
            el('td', {}, haveBrief ? btn(T('options.stack'), 'data-st-stack', () => { const r = commit(OS.layoutOp(o.guid, c.brief), T('options.undo.layout', { name: o.option })); if (r) say(T('options.stacked', { name: o.option })); }) : ''));
        }), 'data-st-options-table')));
      for (const o of cmp.options.filter((x) => x.layout)) kids.push(el('p', { className: 'bc-muted', 'data-st-layout': o.guid }, el('b', {}, o.option + ': '), o.layout.floors.map((f) => T('options.floor', { n: f.floor, rooms: f.rooms.map((r) => (r.count > 1 ? r.count + ' × ' : '') + r.name).join(', ') || '–', net: num2(f.net_m2), cap: num2(f.capacity_m2) })).join(' | '),
        o.layout.unplaced.length ? ' ' + T('options.unplaced', { list: o.layout.unplaced.map((r) => (r.count > 1 ? r.count + ' × ' : '') + r.name).join(', ') }) : ''));
    }
    kids.push(el('p', { className: 'bc-muted' }, T('options.note')));
    return kids;
  }

  // ================================================================== 3. types
  function typesView() {
    const d = typeData();
    if (!d || !d.ag.rows.length) return [el('p', { className: 'bc-muted', 'data-st-types-none': true }, T('types.none'))];
    const c = read(), kids = [];
    const rows = d.ag.rows.filter((r) => r.inUse || r.findings.length).map((r) => el('tr', { 'data-st-type': r.id },
      el('td', {}, r.title, el('div', { className: 'bc-muted' }, T('types.group.' + r.group))), el('td', {}, r.text ? chip('met', T('types.text.yes')) : chip('notdrawn', T('types.text.no'))),
      el('td', {}, r.links.length ? r.links.map((l) => el('div', { 'data-st-link': l.id }, l.title, ' ', el('span', { className: 'bc-muted' }, '(' + T('types.app.' + l.app) + (l.ref ? ', ' + l.ref : '') + (l.sheet ? ', ' + T('types.sheet', { sheet: l.sheet }) : '') + ')'), ' ',
        btn('×', 'data-st-unlink', () => commit(TL.unlinkDetailOp(r.id, l.id), T('types.undo.unlink', { title: l.title })), 'st-x'))) : el('span', { className: 'bc-muted' }, '–')),
      el('td', {}, r.findings.map((f) => el('div', { className: 'st-find st-find-' + (f.startsWith('spec.size') || f.endsWith('sheet') || f === 'spec.schedule' ? 'warn' : 'note'), 'data-st-finding': f }, T('types.f.' + f)))),
      el('td', {}, r.group !== 'finish' ? btn(T('types.add'), 'data-st-link-start', () => { S.linkFor = S.linkFor === r.id ? null : r.id; render(); }) : '')));
    kids.push(el('div', { className: 'st-scroll' }, table([T('types.h.type'), T('types.h.spec'), T('types.h.details'), T('types.h.agree'), ''], rows, 'data-st-types-table')));
    if (S.linkFor) {
      const r = d.ag.rows.find((x) => x.id === S.linkFor);
      kids.push(el('div', { className: 'st-form', 'data-st-link-form': true }, el('h5', {}, T('types.add.for', { name: r?.title || S.linkFor })),
        el('div', { className: 'st-grid' }, field(T('types.f.title'), input('data-st-l-title', '', 'text', { maxlength: 160 })), field(T('types.f.app'), select('data-st-l-app', TL.APPS.map((a) => [a, T('types.app.' + a)]), 'detailcraft')),
          field(T('types.f.ref'), input('data-st-l-ref', '', 'text', { maxlength: 500 })), field(T('types.f.sheet'), input('data-st-l-sheet', '', 'text', { maxlength: 40 }))),
        field(T('types.f.note'), input('data-st-l-note', '', 'text', { maxlength: 600 })),
        btn(T('types.add.save'), 'data-st-link-save', () => {
          const q = (a) => body.querySelector('[' + a + ']').value;
          const res = commit(TL.linkDetailOp({ type: S.linkFor, app: q('data-st-l-app'), title: q('data-st-l-title'), ref: q('data-st-l-ref'), sheet: q('data-st-l-sheet'), note: q('data-st-l-note') }), T('types.undo.link'));
          if (res) { S.linkFor = null; invalidate(); say(T('types.linked')); }
        }), ' ', btn(T('stages.cancel'), 'data-st-link-cancel', () => { S.linkFor = null; render(); })));
    }
    kids.push(el('p', { className: 'bc-muted' }, T('types.note')));
    if (c) void c;
    return kids;
  }

  // ================================================================== 4. shop drawings
  function shopView(c) {
    const recs = c.history.records.filter((r) => r.kind === 'shop-drawing').map((r) => ({ ...r, extras: c.extras[r.id] || {} }));
    const kids = [];
    const waiting = RC.waitingOn(c.history, c.extras);
    kids.push(el('p', { className: 'bc-muted', 'data-st-waiting': true }, waiting.length ? T('shop.waiting', { n: waiting.length }) : T('shop.nowaiting')), waiting.length ? btn(T('shop.select.waiting'), 'data-st-select-waiting', () => host.select?.(waiting.map((x) => x.guid))) : '');
    if (recs.length) {
      kids.push(el('div', { className: 'st-scroll' }, table([T('shop.h.ref'), T('shop.h.title'), T('shop.h.trade'), T('shop.h.rev'), T('shop.h.state'), T('shop.h.elements'), ''], recs.map((r) => el('tr', { 'data-st-shop': r.id, 'data-st-status': r.status },
        el('td', {}, r.ref), el('td', {}, r.title, r.file ? el('div', { className: 'bc-muted' }, r.file.name) : null, r.extras.reviews?.length ? el('div', { className: 'bc-muted', 'data-st-reviews': true }, r.extras.reviews.map((v) => v.rev + ' ' + T('shop.state.' + v.state) + (v.by ? ', ' + v.by : '') + (v.on ? ' ' + v.on : '') + (v.note ? ': ' + v.note : '')).join(' / ')) : null),
        el('td', {}, r.extras.trade || ''), el('td', {}, r.rev), el('td', {}, chip(r.status, T('shop.state.' + r.status)), r.extras.due && r.status === 'open' ? el('div', { className: 'bc-muted' }, T('shop.due', { date: r.extras.due })) : null),
        el('td', {}, r.elements.length ? btn(String(r.elements.length), 'data-st-select', () => host.select?.(r.elements), 'st-link') : '0'),
        el('td', {}, r.status === 'approved' || r.status === 'closed' ? '' : [btn(T('shop.act.approve'), 'data-st-review-approved', () => review(r, 'approved')), ' ', btn(T('shop.act.asnoted'), 'data-st-review-approved-as-noted', () => review(r, 'approved-as-noted')), ' ',
          btn(T('shop.act.revise'), 'data-st-review-revise', () => review(r, 'revise')), r.status === 'revise' || r.status === 'approved-as-noted' ? [' ', btn(T('shop.act.resubmit'), 'data-st-resubmit', () => resubmit(r))] : null],
        ' ', btn('×', 'data-st-record-remove', () => commit(RC.removeRecordOp(r.id), T('shop.undo.remove', { ref: r.ref })), 'st-x')))), 'data-st-shop-table')));
    }
    kids.push(el('h5', {}, T('shop.receive')), el('div', { className: 'st-form', 'data-st-shop-form': true },
      el('div', { className: 'st-grid' }, field(T('shop.f.title'), input('data-st-s-title', '', 'text', { maxlength: 200 })), field(T('shop.f.trade'), input('data-st-s-trade', '', 'text', { maxlength: 80 })),
        field(T('shop.f.by'), input('data-st-s-by', '', 'text', { maxlength: 120 })), field(T('shop.f.date'), input('data-st-s-date', today_(), 'date')), field(T('shop.f.due'), input('data-st-s-due', '', 'date')),
        field(T('shop.f.as'), select('data-st-s-as', RC.RETURNED_AS.map((a) => [a, T('shop.as.' + a)]), 'file'))),
      field(T('shop.f.file'), el('input', { className: 'bc-input', type: 'file', 'data-st-s-file': true })), field(T('shop.f.review'), input('data-st-review-by', '', 'text', { maxlength: 120, placeholder: T('shop.f.review.ph') })), field(T('shop.f.note'), input('data-st-review-note', '', 'text', { maxlength: 1000 })),
      el('p', { className: 'bc-muted' }, T('shop.f.elements', { n: guidsOf().length })),
      btn(T('shop.receive.save'), 'data-st-shop-save', async () => {
        const q = (a) => body.querySelector('[' + a + ']');
        const f = q('data-st-s-file').files?.[0];
        const file = f ? { name: f.name, bytes: f.size, sha256: await sha256Hex(new Uint8Array(await f.arrayBuffer())) } : null;
        const r = commit(RC.receiveShopDrawingOp({ title: q('data-st-s-title').value, trade: q('data-st-s-trade').value, by: q('data-st-s-by').value, date: q('data-st-s-date').value, due: q('data-st-s-due').value, as: q('data-st-s-as').value, file, elements: guidsOf(), issue: c.history.issues.at(-1)?.id || '' }), T('shop.undo.receive'));
        if (r) say(T('shop.received', { ref: r.ref }));
      })));
    return kids;
  }
  function review(r, state) {
    const q = (a) => body.querySelector('[' + a + ']').value;
    const res = commit(RC.reviewShopDrawingOp(r.id, { state, by: q('data-st-review-by'), on: today_(), note: q('data-st-review-note') }), T('shop.undo.review', { ref: r.ref }));
    if (res) say(T('shop.reviewed', { ref: r.ref, state: T('shop.state.' + state) }));
  }
  function resubmit(r) {
    const q = (a) => body.querySelector('[' + a + ']').value;
    const res = commit(RC.resubmitShopDrawingOp(r.id, { by: q('data-st-s-by'), date: q('data-st-s-date') || today_(), note: q('data-st-review-note') }), T('shop.undo.resubmit', { ref: r.ref }));
    if (res) say(T('shop.resubmitted', { ref: r.ref, rev: res.rev }));
  }

  // ================================================================== 5. site instructions
  function instructionView(c) {
    const recs = c.history.records.filter((r) => r.kind === 'instruction').map((r) => ({ ...r, extras: c.extras[r.id] || {} })), kids = [];
    if (recs.length) kids.push(el('div', { className: 'st-scroll' }, table([T('si.h.ref'), T('si.h.title'), T('si.h.cause'), T('si.h.effect'), T('si.h.state'), T('si.h.elements'), ''], recs.map((r) => el('tr', { 'data-st-si': r.id, 'data-st-status': r.status },
      el('td', {}, r.ref), el('td', {}, r.title, el('div', { className: 'bc-muted' }, r.date + (r.by ? ', ' + r.by : ''))), el('td', {}, r.extras.cause ? T('si.cause.' + r.extras.cause) : ''), el('td', {}, [r.extras.cost && T('si.cost', { v: r.extras.cost }), r.extras.time && T('si.time', { v: r.extras.time })].filter(Boolean).join('; ')),
      el('td', {}, chip(r.status, T('si.state.' + r.status))), el('td', {}, r.elements.length ? btn(String(r.elements.length), 'data-st-select', () => host.select?.(r.elements), 'st-link') : '0'),
      el('td', {}, r.status !== 'closed' ? btn(T('si.close'), 'data-st-si-close', () => { const res = commit(RC.setInstructionStatusOp(r.id, 'closed', { on: today_() }), T('si.undo.close', { ref: r.ref })); if (res) say(T('si.closed', { ref: r.ref })); }) : '', ' ', btn('×', 'data-st-record-remove', () => commit(RC.removeRecordOp(r.id), T('si.undo.remove', { ref: r.ref })), 'st-x')))), 'data-st-si-table')));
    kids.push(el('h5', {}, T('si.record')), el('div', { className: 'st-form', 'data-st-si-form': true },
      el('div', { className: 'st-grid' }, field(T('si.f.title'), input('data-st-i-title', '', 'text', { maxlength: 200 })), field(T('si.f.cause'), select('data-st-i-cause', [['', '–'], ...RC.CAUSES.map((k) => [k, T('si.cause.' + k)])], '')),
        field(T('si.f.by'), input('data-st-i-by', '', 'text', { maxlength: 120 })), field(T('si.f.date'), input('data-st-i-date', today_(), 'date')), field(T('si.f.cost'), input('data-st-i-cost', '', 'text', { maxlength: 200 })), field(T('si.f.time'), input('data-st-i-time', '', 'text', { maxlength: 200 }))),
      field(T('si.f.note'), input('data-st-i-note', '', 'text', { maxlength: 2000 })), el('p', { className: 'bc-muted' }, T('shop.f.elements', { n: guidsOf().length })),
      btn(T('si.record.save'), 'data-st-si-save', () => {
        const q = (a) => body.querySelector('[' + a + ']').value;
        const r = commit(RC.recordInstructionOp({ title: q('data-st-i-title'), cause: q('data-st-i-cause'), by: q('data-st-i-by'), date: q('data-st-i-date'), cost: q('data-st-i-cost'), time: q('data-st-i-time'), note: q('data-st-i-note'), elements: guidsOf(), issue: c.history.issues.at(-1)?.id || '' }), T('si.undo.record'));
        if (r) say(T('si.recorded', { ref: r.ref, n: r.elements }));
      })));
    if (host.changes && c.history.issues.length) {
      kids.push(el('h5', {}, T('si.explain')), el('div', { className: 'st-form' }, select('data-st-explain-issue', c.history.issues.map((i) => [i.id, i.code + (i.date ? ' ' + i.date : '') + (i.name ? ' ' + i.name : '')]), c.history.issues.at(-1).id),
        btn(T('si.explain.run'), 'data-st-explain', () => {
          const id = body.querySelector('[data-st-explain-issue]').value, ch = host.changes(id);
          if (!ch) { say(T('si.explain.none'), true); return; }
          S.results = RC.explainChanges(ch, c.history, c.extras, { issueId: id }); render();
        })));
      if (S.results) {
        const r = S.results;
        kids.push(el('p', { 'data-st-explained': true }, T('si.explain.sum', r.counts)), r.unexplained.length ? btn(T('si.explain.select'), 'data-st-select-unexplained', () => host.select?.(r.unexplained.map((x) => x.guid))) : '',
          r.explained.length ? el('p', { className: 'bc-muted' }, r.explained.slice(0, 40).map((x) => x.by.join(' ')).filter((v, i, a) => a.indexOf(v) === i).join(' | ')) : null);
      }
    }
    return kids;
  }

  // ================================================================== the whole
  function render() {
    if (!root.isConnected) return;
    const keepScroll = body.scrollTop;
    const c = read();
    body.replaceChildren();
    if (!c) { body.append(el('p', { className: 'bc-muted' }, T('stages.nomodel')), newProjectView()); return; }
    const n = (k) => c.history.records.filter((r) => r.kind === k).length;
    body.append(
      section('brief', T('stages.brief') + (c.brief.rooms.length ? ' (' + c.brief.rooms.length + ')' : ''), briefView(c)),
      section('options', T('stages.options') + (c.sets.length ? ' (' + c.sets.reduce((s, x) => s + x.options.length, 0) + ')' : ''), optionsView(c)),
      section('types', T('stages.types'), typesView()),
      section('shop', T('stages.shop') + (n('shop-drawing') ? ' (' + n('shop-drawing') + ')' : ''), shopView(c)),
      section('si', T('stages.si') + (n('instruction') ? ' (' + n('instruction') + ')' : ''), instructionView(c)),
      el('p', { className: S.err ? 'st-msg st-err' : 'bc-muted st-msg', 'data-st-msg': true, role: 'status' }, S.msg));
    body.scrollTop = keepScroll;
  }
  root.addEventListener('toggle', (e) => { if (e.target === root && root.open) { cache = null; render(); } });

  // Problems: the brief's shortfalls, the types' disagreements, the shop drawings overdue (warnings and notes, never a refusal)
  function problems() {
    const c = read();
    if (!c) return [];
    const out = [...BR.briefProblems(c.w, { t: T })];
    const d = typeData();
    if (d) out.push(...TL.typeProblems(d.ag, { t: T }));
    out.push(...RC.recordProblems(c.history, c.extras, { t: T, today: today_() }));
    return out;
  }
  let source = null;
  const P = typeof window !== 'undefined' ? window.ccProblems : null;
  if (P?.source) { source = P.source({ id: 'bimcraft.stages', kind: 'check', label: T('stages.problems.src'), debounceMs: 400, run: () => { try { cache = null; return problems(); } catch (e) { console.warn('stages check', e); return []; } } }); source.invalidate?.(); }
  if (typeof window !== 'undefined') window.bimcraftStages = { render: () => { cache = null; render(); }, problems: () => { cache = null; return problems(); }, state: S };
  return { render: () => { cache = null; render(); }, root, problems };
}
