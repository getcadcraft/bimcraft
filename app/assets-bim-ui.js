/* SPDX-License-Identifier: Apache-2.0 */
/**
 * assets-bim-ui.js — BimCraft's Assets tab (0.6 LC.12, session bim-extra_PART_2): the open model's assets (equipment and
 * fixtures, and any element you track), their data (maker, model, serial, warranty, service life) and a maintenance record,
 * all written into the IFC by assets-bim.js (each change one undo step); what is overdue or due within 30 days first; a CSV.
 *
 *   mountAssets(host) → { render(), changed(), picked(), state } | null without a pane
 *   host = { pane, W, editor() → IfcEditor | null, viewer(), selection() → [keys], select(keys), status(text, isError),
 *            download(name, data, type), fileName(), afterEdit(), shown(), storeyName(id) → text, today() → 'YYYY-MM-DD' }
 * Only the first model's elements (keys below KEY_SPAN), as the Analysis and Points tabs.
 */
import { el } from './ui-util.js';
import { t } from './i18n.js';
import { KEY_SPAN } from './ifc-model.js';
import { cobieSection } from './assets-bim-cobie-ui.js';
import { handoverSection } from './handover-docs-ui.js';   // 0.10 BK.114 (bk-stages-10)
import { SENSORS, sensorSection, readingCell, sensorDetail, paintModel } from './assets-bim-sensors-ui.js';
import { liveSection } from './assets-bim-live-ui.js';
import { FIELDS, DOC_KINDS, readAssets, trackOp, untrackOp, assetDataOp, addEntryOp, editEntryOp, removeEntryOp, addDocOp, removeDocOp, openable, assetsCsv } from './assets-bim.js';

const DATE = new Set(['installed', 'warrantyStart', 'warrantyEnd']);
const slug = (k) => k.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase());   // warrantyId → warranty-id (keys are lower case)

export function mountAssets(host) {
  if (!host.pane) return null;
  const S = { q: '', storey: '', dueOnly: false, open: null, editing: null, draft: null, doc: null, version: 0, read: -1, list: [] };
  const ed = () => host.editor();
  function assets() {
    if (S.read !== S.version) {
      const e = ed();
      S.list = e ? readAssets(host.W, e.api, e.mid, { today: host.today() }) : [];
      S.read = S.version;
    }
    return S.list;
  }
  const commit = (op, label) => {
    const e = ed();
    if (!e) return false;
    try { e.modelChange(op, { label, verb: t('assets.verb') }); }
    catch (err) { host.status(err.key ? t(err.key) : String(err.message || err), true); return false; }
    S.version++;
    host.afterEdit();
    render();
    return true;
  };
  /**
   * A redraw for readings arriving from a live feed: at most one a second, never while the person is typing in the tab (the
   * boxes would lose their place); with the tab hidden only the model's colours and labels follow.
   */
  let softTimer = null;
  function soft() {
    if (softTimer) return;
    const run = () => {
      softTimer = null;
      if (!host.shown()) { const key = SENSORS.show + ':' + SENSORS.store.version + ':' + S.version; if (key !== S.painted) { S.painted = key; paintModel(host, assets()); } return; }
      const a = typeof document !== 'undefined' ? document.activeElement : null;
      if (a && host.pane.contains(a) && /^(INPUT|TEXTAREA|SELECT)$/.test(a.tagName)) { softTimer = setTimeout(run, 1000); return; }
      render();
    };
    softTimer = setTimeout(run, 300);
  }
  const shortCls = (c) => String(c || '').replace(/^IFC/, '').toLowerCase().replace(/^./, (x) => x.toUpperCase());
  const dueBadge = (a) => (a.due ? el('span', { className: 'as-due as-' + a.due }, t('assets.due.' + a.due)) : null);
  const field = (label, control) => el('label', { className: 'fa-field' }, el('span', {}, label), control);

  function track() {
    const e = ed(), keys = host.selection().filter((k) => k < KEY_SPAN);
    if (!e || !keys.length) { host.status(t('assets.pick-first'), true); return; }
    const known = new Set(assets().map((a) => a.id));
    const fresh = keys.filter((k) => !known.has(k));
    if (!fresh.length) { S.open = keys[0]; render(); return; }
    let n = 0;
    for (const k of fresh) {
      const g = e.api.GetLine(e.mid, k, false)?.GlobalId?.value;
      if (g && commit(trackOp(g), t('assets.track'))) n++;
    }
    S.open = fresh[0];
    host.status(t('assets.tracked', { n }));
    render();
  }
  function csv() {
    const H = Object.fromEntries(['kind', 'name', 'tag', 'cls', 'storey', 'guid', ...FIELDS, 'last', 'next', 'work', 'by', 'notes', 'asset', 'entry', 'document', 'location'].map((k) => [k, t('assets.csv.' + slug(k))]));
    host.download(String(host.fileName() || 'model').replace(/\.ifc$/i, '') + ' assets.csv', assetsCsv(assets(), { storeyName: host.storeyName, head: H }), 'text/csv');
  }

  function detail(a) {
    const out = [];
    const vals = Object.fromEntries(FIELDS.map((f) => [f, a.data[f]]));
    const inputs = FIELDS.map((f) => field(t('assets.f.' + slug(f)), el('input', {
      type: DATE.has(f) ? 'date' : f === 'life' ? 'number' : 'text', min: f === 'life' ? '0' : undefined, step: f === 'life' ? 'any' : undefined,
      className: 'bc-input fa-input', value: vals[f], 'data-as-field': f, oninput: (e) => { vals[f] = e.target.value; },
    })));
    out.push(el('h3', { className: 'bc-h fa-h3' }, a.name || shortCls(a.cls), a.tag ? ' ' + a.tag : ''),
      el('p', { className: 'bc-muted' }, shortCls(a.cls), host.storeyName(a.storey) ? ' · ' + host.storeyName(a.storey) : ''),   // i18n-ignore: a separator
      el('div', { className: 'as-form' }, ...inputs),
      el('div', { className: 'fa-head' },
        el('button', { type: 'button', className: 'btn-plot btn-sm-cc', 'data-as-save': '', onclick: () => { const patch = {}; for (const f of FIELDS) if (vals[f] !== a.data[f]) patch[f] = vals[f]; if (Object.keys(patch).length) { try { if (commit(assetDataOp(a.guid, patch), a.name || a.guid)) host.status(t('assets.saved')); } catch (err) { host.status(err.key ? t(err.key) : err.message, true); } } } }, t('assets.btn.save')),
        a.tracked ? el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-as-untrack': '', onclick: () => commit(untrackOp(a.guid), a.name || a.guid) }, t('assets.btn.untrack')) : null));

    // sensor readings and limits (0.7 LC.12 items 3–4)
    if (SENSORS.store.latest(a.guid) || a.limits.low !== null || a.limits.high !== null || SENSORS.store.guids().length) out.push(...sensorDetail(a, host, { assets, commit, render }));
    // documents (0.7 LC.12 item 1): manuals, warranties, photos linked by a name or a web address
    out.push(el('h3', { className: 'bc-h fa-h3' }, t('assets.h.docs')));
    if (!a.docs.length) out.push(el('p', { className: 'bc-muted' }, t('assets.docs.none')));
    else out.push(el('ul', { className: 'as-log', 'data-as-docs': '' }, ...a.docs.map((d) => el('li', { 'data-as-doc': d.rel },
      el('div', { className: 'as-log-head' }, el('span', { className: 'as-due' }, t('assets.doc.' + d.kind)), ' ',
        openable(d.location) ? el('a', { href: d.location.trim(), target: '_blank', rel: 'noopener noreferrer', 'data-as-doc-open': '' }, d.title || d.location) : el('strong', {}, d.title || d.location)),   // i18n-ignore: a rel value
      el('div', { className: 'bc-muted as-notes' }, openable(d.location) ? d.location : t('assets.doc.beside', { name: d.location })),
      d.fromType ? el('div', { className: 'bc-muted' }, t('assets.doc.from-type'))
        : el('div', { className: 'as-log-acts' }, el('button', { type: 'button', className: 'bc-linkbtn', 'data-as-doc-del': d.rel, onclick: () => commit(removeDocOp(a.guid, d.rel), d.title) }, t('assets.btn.remove')))))));
    const DD = S.doc && S.doc.guid === a.guid ? S.doc : (S.doc = { guid: a.guid, kind: 'manual', title: '', location: '' });
    out.push(el('div', { className: 'as-entry-form', 'data-as-doc-form': '' },
      el('div', { className: 'as-form' },
        field(t('assets.doc.kind'), el('select', { className: 'select-cc fa-select', 'data-as-d': 'kind', onchange: (e) => { DD.kind = e.target.value; } },
          ...DOC_KINDS.map((k) => el('option', { value: k, selected: k === DD.kind }, t('assets.doc.' + k))))),
        field(t('assets.doc.title'), el('input', { type: 'text', className: 'bc-input fa-input', value: DD.title, 'data-as-d': 'title', oninput: (e) => { DD.title = e.target.value; } }))),
      field(t('assets.doc.location'), el('input', { type: 'text', className: 'bc-input fa-input', value: DD.location, placeholder: t('assets.doc.location.hint'), 'data-as-d': 'location', oninput: (e) => { DD.location = e.target.value; } })),
      el('div', { className: 'fa-head' }, el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-as-doc-add': '', onclick: () => {
        try { if (commit(addDocOp(a.guid, DD), DD.title || DD.location)) { S.doc = null; host.status(t('assets.doc.added')); render(); } } catch (err) { host.status(err.key ? t(err.key) : err.message, true); }
      } }, t('assets.btn.add-doc')))));

    // the maintenance record
    out.push(el('h3', { className: 'bc-h fa-h3' }, t('assets.h.log')));
    const blank = { date: host.today(), work: '', by: '', next: '', notes: '' };
    const D = S.draft && S.draft.guid === a.guid ? S.draft : (S.draft = { guid: a.guid, ...blank });
    const entryForm = (v, onDone, label, data) => el('div', { className: 'as-entry-form', [data]: '' },
      el('div', { className: 'as-form' },
        field(t('assets.e.date'), el('input', { type: 'date', className: 'bc-input fa-input', value: v.date, 'data-as-e': 'date', oninput: (e) => { v.date = e.target.value; } })),
        field(t('assets.e.next'), el('input', { type: 'date', className: 'bc-input fa-input', value: v.next, 'data-as-e': 'next', oninput: (e) => { v.next = e.target.value; } })),
        field(t('assets.e.work'), el('input', { type: 'text', className: 'bc-input fa-input', value: v.work, 'data-as-e': 'work', oninput: (e) => { v.work = e.target.value; } })),
        field(t('assets.e.by'), el('input', { type: 'text', className: 'bc-input fa-input', value: v.by, 'data-as-e': 'by', oninput: (e) => { v.by = e.target.value; } }))),
      field(t('assets.e.notes'), el('textarea', { className: 'bc-input fa-input', rows: 2, 'data-as-e': 'notes', oninput: (e) => { v.notes = e.target.value; } }, v.notes)),
      el('div', { className: 'fa-head' }, el('button', { type: 'button', className: 'btn-plot btn-sm-cc', 'data-as-e-ok': '', onclick: onDone }, label),
        S.editing ? el('button', { type: 'button', className: 'btn-line btn-sm-cc', onclick: () => { S.editing = null; render(); } }, t('assets.btn.cancel')) : null));
    if (!a.log.length) out.push(el('p', { className: 'bc-muted' }, t('assets.log.none')));
    else out.push(el('ul', { className: 'as-log', 'data-as-log': '' }, ...a.log.map((x) => (S.editing?.guid === x.guid
      ? el('li', {}, entryForm(S.editing, () => { try { if (commit(editEntryOp(x.guid, S.editing), x.work)) { S.editing = null; render(); } } catch (err) { host.status(err.key ? t(err.key) : err.message, true); } }, t('assets.btn.save-entry'), 'data-as-edit-form'))
      : el('li', { 'data-as-entry': x.guid },
        el('div', { className: 'as-log-head' }, el('strong', {}, x.date || '—'), ' ', x.work),   // i18n-ignore: a dash for no date
        el('div', { className: 'bc-muted' }, [x.by ? t('assets.log.by', { by: x.by }) : '', x.next ? t('assets.log.next', { date: x.next }) : ''].filter(Boolean).join(' · ')),   // i18n-ignore: a separator
        x.notes ? el('div', { className: 'as-notes' }, x.notes) : null,
        el('div', { className: 'as-log-acts' },
          el('button', { type: 'button', className: 'bc-linkbtn', 'data-as-edit': x.guid, onclick: () => { S.editing = { guid: x.guid, date: x.date, work: x.work, by: x.by, next: x.next, notes: x.notes }; render(); } }, t('assets.btn.edit')),
          el('button', { type: 'button', className: 'bc-linkbtn', 'data-as-del': x.guid, onclick: () => commit(removeEntryOp(x.guid), x.work) }, t('assets.btn.delete'))))))));
    out.push(el('h4', { className: 'bc-h fa-h3' }, t('assets.h.add')),
      entryForm(D, () => { try { if (commit(addEntryOp(a.guid, D), D.work)) { S.draft = null; host.status(t('assets.added')); render(); } } catch (err) { host.status(err.key ? t(err.key) : err.message, true); } }, t('assets.btn.add'), 'data-as-add-form'));
    return out;
  }

  /** The picks made while the panel was away, as picked() would have taken them then. */
  function openPicks() {
    const list = S.picks; S.picks = null;
    if (!list?.length || !ed()) return;
    const ids = new Set(assets().map((a) => a.id));
    for (const k of list) if (ids.has(k)) { S.open = k; S.editing = null; }
  }
  function render() {
    if (!host.shown()) return;
    if (!ed()) { host.pane.replaceChildren(el('p', { className: 'bc-muted' }, t('assets.needs-ifc'))); return; }
    openPicks();
    const all = assets();
    const storeys = [...new Set(all.map((a) => a.storey).filter((s) => s !== null))];
    const q = S.q.trim().toLowerCase();
    const shown = all.filter((a) => (!S.dueOnly || a.due) && (!S.storey || String(a.storey) === S.storey)
      && (!q || [a.name, a.tag, a.cls, a.data.maker, a.data.model, a.data.serial].some((s) => String(s || '').toLowerCase().includes(q))));
    const overdue = all.filter((a) => a.due === 'overdue').length, soon = all.filter((a) => a.due === 'soon').length;
    const out = [el('p', { className: 'bc-muted' }, t('assets.intro'))];
    out.push(el('p', { 'data-as-summary': '' }, t('assets.summary', { n: all.length, overdue, soon })));
    out.push(el('div', { className: 'fa-row' },
      el('input', { type: 'search', className: 'bc-input fa-input', placeholder: t('assets.filter'), 'aria-label': t('assets.filter'), value: S.q, 'data-as-q': '', oninput: (e) => { S.q = e.target.value; render(); const i = host.pane.querySelector('[data-as-q]'); if (i) { i.focus(); i.setSelectionRange(i.value.length, i.value.length); } } }),
      storeys.length > 1 ? el('select', { className: 'select-cc fa-select', 'aria-label': t('assets.storey'), 'data-as-storey': '', onchange: (e) => { S.storey = e.target.value; render(); } },
        el('option', { value: '' }, t('assets.storey.all')), ...storeys.map((s) => el('option', { value: String(s), selected: String(s) === S.storey }, host.storeyName(s) || '#' + s))) : null,
      el('label', { className: 'fa-check' }, el('input', { type: 'checkbox', checked: S.dueOnly, 'data-as-due': '', onchange: (e) => { S.dueOnly = e.target.checked; render(); } }), t('assets.due-only'))));
    out.push(el('div', { className: 'fa-head' },
      el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-as-track': '', onclick: track, title: t('assets.track.title') }, t('assets.track')),
      el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-as-csv': '', disabled: !all.length, onclick: csv }, t('assets.btn.csv'))));
    out.push(cobieSection(host, { assets, commit, render }));   // 0.7 LC.12 item 2: COBie out and in
    out.push(handoverSection(host, { assets, commit, render }));   // 0.10 BK.114: the project's handover documents and the handover package
    out.push(sensorSection(host, { assets, commit, render }));   // 0.7 LC.12 item 3: sensor readings from a CSV
    out.push(liveSection(host, { assets, commit, render, soft }));   // 0.7 LC.12 item 4: live feeds from the person's own broker
    const readings = SENSORS.store.guids().length > 0;
    if (!all.length) out.push(el('p', { className: 'bc-muted', 'data-as-empty': '' }, t('assets.none')));
    else out.push(el('div', { className: 'fa-wrap' }, el('table', { className: 'bc-qto-table fa-table', 'data-as-table': '' },
      el('thead', {}, el('tr', {}, el('th', {}, t('assets.col.name')), el('th', {}, t('assets.col.next')), readings ? el('th', {}, t('assets.col.reading')) : null)),
      el('tbody', {}, ...shown.slice(0, 500).map((a) => el('tr', { className: a.id === S.open ? 'is-on' : '', 'data-as-row': a.guid, tabindex: '0', onclick: () => { S.open = a.id; S.editing = null; host.select([a.id]); render(); }, onkeydown: (e) => { if (e.key === 'Enter') { S.open = a.id; host.select([a.id]); render(); } } },
        el('td', {}, a.name || shortCls(a.cls), a.tag ? el('span', { className: 'bc-muted' }, a.tag) : null, a.due ? el('span', { className: 'as-badge-line' }, dueBadge(a)) : null),
        el('td', {}, a.nextDue || ''), readings ? readingCell(a) : null))))));
    if (shown.length > 500) out.push(el('p', { className: 'bc-muted' }, t('assets.more', { n: shown.length - 500 })));
    const open = all.find((a) => a.id === S.open);
    if (open) out.push(el('section', { className: 'as-detail', 'data-as-detail': open.guid }, ...detail(open)));
    host.pane.replaceChildren(...out);
    // colours and labels on the model follow the readings and the limits (painted again only when either changed)
    const key = SENSORS.show + ':' + SENSORS.store.version + ':' + S.version;
    if (key !== S.painted) { S.painted = key; paintModel(host, all); }
  }
  return {
    render, state: S,
    changed() { S.version++; S.picks = null; render(); },
    // perf-finish-11 (PERF.37): a pick while the panel is not on screen is only remembered. readAssets reads every element's property sets
    // (1.4 s at 115 MB): it ran on the first click of every model, panel closed. The remembered picks apply, in order, when it shows.
    picked() {
      const k = host.selection().find((x) => x < KEY_SPAN);
      if (!host.shown()) { if (k !== undefined) { (S.picks ||= []).push(k); if (S.picks.length > 64) S.picks.shift(); } return; }
      openPicks(); if (k !== undefined && assets().some((a) => a.id === k)) { S.open = k; S.editing = null; } render();
    },
  };
}
