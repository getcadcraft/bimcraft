/* SPDX-License-Identifier: Apache-2.0 */
/**
 * tags-ui.js — BimCraft's Tags section and Documents from the model (0.8 SU.915 + SU.889, session sx-tags): two <details> under
 * Quantities in the left panel (ui.inc), so they show and hide with it. The cores are tags.js and doc-template.js (DOM-free,
 * tools/bimcraft-test/tags-test.mjs); every change goes through IfcEditor.modelChange (one undo step) and host.afterEdit().
 *
 *   mountTags(host) → { changed(), picked(), state } | null without the boxes
 *   host = { root, W, editor() → IfcEditor | null, model() → loaded model | null, selection() → [keys], select(keys),
 *            status(text, isError), download(name, data, type), fileName(), afterEdit() }
 *
 * Tags: the project's definitions (add, change, remove; kinds = BIM-FAM-MORE's typed-parameter list with the family editor's
 * labels), "Tag the selection" (one control per tag; only the ones filled in are set; "Clear" takes a tag off), and a schedule
 * whose columns, filters and group read tags (CSV out). The Quantities panel above reads the same values as CadCraft_Tags.
 */
import { el } from './ui-util.js';
import { t } from './i18n.js';
import { KEY_SPAN } from './ifc-model.js';
import { propertyIndex } from './ifc-props.js';
import { ModelWriter } from './model-write.js';
import { OPS } from './ifc-find.js';
import { FILL_KEYS } from './family-model.js';
import { TAG_KINDS, readProjectDefs, readTagDefs, saveDefsOp, tagOp, tagField, tagSchedule, scheduleCsv, NAME_RE } from './tags.js';
import { mountDocs } from './doc-ui.js';

const BUILT = ['name', 'type', 'storey', 'cls', 'material'];
const MAX_SHOWN = 200;
const fmt = (v) => (v === '' || v === undefined || v === null ? '' : typeof v === 'number' ? String(Number(v.toFixed(4))) : String(v).replace(/^Ifc(?=[A-Z])/, ''));
const splitList = (s) => String(s || '').split(',').map((x) => x.trim()).filter(Boolean);

export function mountTags(host) {
  const box = host.root?.querySelector('[data-sx-tags]');
  const details = host.root?.querySelector('[data-sx-tags-details]');
  if (!box) return null;
  const S = { version: 0, ixAt: -1, ix: null, defsAt: -1, defs: [], editing: null, values: {}, cols: ['name', 'type', 'storey'], filters: [], groupBy: '', classes: '', scope: 'all' };
  const ed = () => host.editor();
  const writer = () => { const e = ed(); return e ? new ModelWriter(e.W, e.api, e.mid) : null; };
  function defs() {
    if (S.defsAt !== S.version) { const w = writer(); S.defs = w ? readProjectDefs(w) : []; S.defsAt = S.version; }
    return S.defs;
  }
  function index() {
    const e = ed(), m = host.model();
    if (!e || !m) return null;
    if (S.ixAt !== S.version || S.ix?.model !== m) { S.ix = { model: m, ix: propertyIndex(host.W, e.api, m.modelID, m) }; S.ixAt = S.version; }
    return S.ix.ix;
  }
  const commit = (op, label) => {
    const e = ed();
    if (!e) return null;
    let r;
    try { r = e.modelChange(op, { label, verb: t('sx.su915.verb') }); }
    catch (err) { host.status(err.key ? t(err.key, err.fill || {}) : String(err.message || err), true); return null; }
    S.version++;
    host.afterEdit();
    return r;
  };
  /** Selected keys of the open model → their GlobalIds. */
  function selectedGuids() {
    const e = ed(), m = host.model();
    if (!e || !m) return [];
    const kb = m.keyBase || 0, out = [];
    for (const k of host.selection()) {
      if (k < kb || k >= kb + KEY_SPAN) continue;
      try { const l = e.api.GetLine(e.mid, k - kb, false); const g = l?.GlobalId?.value ?? l?.GlobalId; if (g) out.push(String(g)); } catch (err) { /* not a line */ }
    }
    return out;
  }
  const kindLabel = (k) => t('fam.ed.kind.' + k);
  const fieldName = (id) => {
    const pre = 'p:CadCraft_Tags.';
    return id.startsWith(pre) ? id.slice(pre.length) : t('color.field.' + id);
  };

  // ---------------------------------------------------------------- definitions
  function defForm(d) {
    const isNew = !d;
    const name = el('input', { type: 'text', className: 'bc-input', value: d?.name || '', maxLength: 48, 'aria-label': t('sx.su915.def.name'), 'data-sx-tag-name': '' });
    const kind = el('select', { className: 'select-cc', 'aria-label': t('sx.su915.def.kind'), 'data-sx-tag-kind': '' }, TAG_KINDS.map((k) => el('option', { value: k }, kindLabel(k))));
    kind.value = d?.kind || 'text';
    const values = el('input', { type: 'text', className: 'bc-input', value: (d?.values || []).join(', '), placeholder: t('sx.su915.def.values.ph'), 'aria-label': t('sx.su915.def.values'), 'data-sx-tag-values': '' });
    const classes = el('input', { type: 'text', className: 'bc-input', value: (d?.classes || []).join(', '), placeholder: t('sx.su915.def.classes.ph'), 'aria-label': t('sx.su915.def.classes'), list: 'sx-tag-classes', 'data-sx-tag-classes': '' });
    const ix = index();
    const clsList = el('datalist', { id: 'sx-tag-classes' }, ix ? [...new Set(ix.ids.map((id) => ix.value('cls', id)))].sort().map((c) => el('option', { value: c })) : []);
    const save = () => {
      const nd = { name: name.value.trim(), kind: kind.value, values: splitList(values.value), classes: splitList(classes.value) };
      if (!NAME_RE.test(nd.name)) { host.status(t('sx.su915.err.name', { name: nd.name }), true); name.focus(); return; }
      const list = defs().filter((x) => x !== d);
      if (list.some((x) => x.name.toLowerCase() === nd.name.toLowerCase())) { host.status(t('sx.su915.err.dup', { name: nd.name }), true); return; }
      const r = readTagDefs([nd]);
      if (r.errors.length) { host.status(t(r.errors[0].key, r.errors[0].fill), true); return; }
      const all = isNew ? [...defs(), r.defs[0]] : defs().map((x) => (x === d ? r.defs[0] : x));
      const ok = commit(saveDefsOp(all, { renames: d && d.name !== nd.name ? { [d.name]: nd.name } : {} }), nd.name);
      if (ok) { S.editing = null; host.status(t(isNew ? 'sx.su915.def.added' : 'sx.su915.def.saved', { name: nd.name })); render(); }
    };
    return el('div', { className: 'bc-find', 'data-sx-tag-form': '' },
      el('label', { className: 'bc-clash' }, t('sx.su915.def.name'), name),
      el('label', { className: 'bc-clash' }, t('sx.su915.def.kind'), kind),
      el('label', { className: 'bc-clash' }, t('sx.su915.def.values'), values),
      el('label', { className: 'bc-clash' }, t('sx.su915.def.classes'), classes), clsList,
      el('p', { className: 'bc-muted' }, t('sx.su915.def.hint')),
      el('div', { className: 'bc-find-row' },
        el('button', { type: 'button', className: 'btn-plot btn-sm-cc', 'data-sx-tag-save': '', onClick: save }, t(isNew ? 'sx.su915.def.add' : 'sx.su915.def.save')),
        ' ', el('button', { type: 'button', className: 'bc-linkbtn', onClick: () => { S.editing = null; render(); } }, t('sx.su915.cancel'))));
  }
  function defsSection() {
    const list = defs();
    const rows = list.map((d) => el('li', { 'data-sx-tag-def': d.name },
      el('strong', {}, d.name), ' ', el('span', { className: 'bc-sub' }, kindLabel(d.kind)),
      d.values.length ? el('span', { className: 'bc-sub' }, ': ' + d.values.join(', ')) : null,   // i18n-ignore: a separator
      d.classes.length ? el('span', { className: 'bc-sub' }, ' — ' + d.classes.map((c) => c.replace(/^Ifc/, '')).join(', ')) : null,   // i18n-ignore: a separator
      ' ', el('button', { type: 'button', className: 'bc-linkbtn', onClick: () => { S.editing = d; render(); } }, t('sx.su915.def.edit')),
      ' ', el('button', { type: 'button', className: 'bc-linkbtn', onClick: () => {
        if (commit(saveDefsOp(list.filter((x) => x !== d)), d.name)) { host.status(t('sx.su915.def.removed', { name: d.name })); render(); }
      } }, t('sx.su915.def.remove'))));
    return [
      el('p', { className: 'bc-h' }, t('sx.su915.defs')),
      list.length ? el('ul', { className: 'bc-checks', 'data-sx-tag-defs': '' }, rows) : el('p', { className: 'bc-muted' }, t('sx.su915.defs.none')),
      S.editing === 'new' ? defForm(null) : S.editing ? defForm(S.editing) : el('div', { className: 'bc-find-row' }, el('button', { type: 'button', className: 'bc-linkbtn', 'data-sx-tag-new': '', onClick: () => { S.editing = 'new'; render(); } }, t('sx.su915.def.new'))),
      list.length ? el('p', { className: 'bc-muted' }, t('sx.su915.def.removenote')) : null,
    ];
  }

  // ---------------------------------------------------------------- tag the selection
  function valueControl(d) {
    const cur = S.values[d.name] ?? '';
    const set = (v) => { S.values[d.name] = v; };
    let c;
    if (d.kind === 'yesno' || d.values.length || d.kind === 'fill') {
      const opts = d.kind === 'yesno' ? [['1', t('sx.su915.yes')], ['0', t('sx.su915.no')]] : (d.kind === 'fill' && !d.values.length ? FILL_KEYS : d.values).map((v) => [String(v), String(v)]);
      c = el('select', { className: 'select-cc', 'aria-label': d.name }, el('option', { value: '', className: 'select-placeholder' }, t('sx.su915.leave')), el('option', { value: '\u0000' }, t('sx.su915.clear')), opts.map(([v, l]) => el('option', { value: v }, l)));
    } else {
      c = el('input', { type: ['length', 'angle', 'number', 'integer', 'pen'].includes(d.kind) ? 'number' : 'text', className: 'bc-input', 'aria-label': d.name, placeholder: t('sx.su915.leave'), step: 'any' });
    }
    c.value = cur;
    c.dataset.sxTagValue = d.name;
    c.addEventListener('change', () => set(c.value));
    c.addEventListener('input', () => set(c.value));
    const unit = d.kind === 'length' ? ' (mm)' : d.kind === 'angle' ? ' (°)' : '';   // i18n-ignore: unit symbols
    const clearBtn = c.tagName === 'INPUT' ? el('button', { type: 'button', className: 'bc-linkbtn', title: t('sx.su915.clear.title'), onClick: () => { c.value = '\u0000'; set('\u0000'); apply(); } }, t('sx.su915.clear')) : null;
    return el('label', { className: 'bc-clash' }, d.name + unit, c, clearBtn);
  }
  function apply() {
    const vals = {};
    for (const d of defs()) {
      const v = S.values[d.name];
      if (v === undefined || v === '') continue;
      vals[d.name] = v === '\u0000' ? null : v;
    }
    if (!Object.keys(vals).length) { host.status(t('sx.su915.err.notags'), true); return; }
    const guids = selectedGuids();
    const r = commit(tagOp(guids, vals), t('sx.su915.label.n', { n: guids.length }));
    if (!r) return;
    S.values = {};
    const sk = r.counts.skipped.length;
    host.status(t('sx.su915.tagged', { n: r.counts.elements }) + (sk ? ' ' + t('sx.su915.skipped', { n: sk }) : ''));
    render();
  }
  function tagSection() {
    const list = defs();
    if (!list.length) return [];
    const n = selectedGuids().length;
    return [
      el('p', { className: 'bc-h' }, t('sx.su915.apply.h')),
      ...list.map(valueControl),
      el('div', { className: 'bc-find-row' }, el('button', { type: 'button', className: 'btn-plot btn-sm-cc', disabled: !n, 'data-sx-tag-apply': '', onClick: apply }, t('sx.su915.apply', { n }))),
      n ? null : el('p', { className: 'bc-muted' }, t('sx.su915.apply.none')),
    ];
  }

  // ---------------------------------------------------------------- schedule
  function scheduleSection() {
    const ix = index();
    const list = defs();
    if (!ix) return [];
    const tagIds = list.map((d) => tagField(d.name));
    const fieldsAll = [...BUILT, ...tagIds];
    S.cols = S.cols.filter((c) => fieldsAll.includes(c));
    const colBoxes = fieldsAll.map((f) => {
      const cb = el('input', { type: 'checkbox', checked: S.cols.includes(f), 'data-sx-sch-col': f });
      cb.addEventListener('change', () => { S.cols = cb.checked ? [...S.cols, f] : S.cols.filter((x) => x !== f); render(); });
      return el('label', {}, cb, el('span', {}, fieldName(f)));
    });
    const fieldSel = (value, onChange, withNone) => {
      const s = el('select', { className: 'select-cc' }, withNone ? el('option', { value: '' }, t('sx.su915.sch.nogroup')) : null, fieldsAll.map((f) => el('option', { value: f }, fieldName(f))));
      s.value = value; s.addEventListener('change', () => onChange(s.value));
      return s;
    };
    const filterRows = S.filters.map((r, i) => {
      const op = el('select', { className: 'select-cc', 'aria-label': t('sx.su915.sch.op') }, OPS.map((o) => el('option', { value: o }, t('find.op.' + o))));
      op.value = r.op; op.addEventListener('change', () => { r.op = op.value; render(); });
      const val = el('input', { type: 'text', className: 'bc-input', value: r.value, 'aria-label': t('sx.su915.sch.value') });
      val.addEventListener('change', () => { r.value = val.value; render(); });
      return el('div', { className: 'bc-find-rule', 'data-sx-sch-filter': String(i) }, fieldSel(r.field, (v) => { r.field = v; render(); }), op, ['has', 'hasnot'].includes(r.op) ? null : val,
        el('button', { type: 'button', className: 'bc-forget', title: t('sx.su915.sch.remove'), 'aria-label': t('sx.su915.sch.remove'), onClick: () => { S.filters.splice(i, 1); render(); } }, el('i', { className: 'bi bi-x', 'aria-hidden': 'true' })));
    });
    const scope = el('select', { className: 'select-cc', 'data-sx-sch-scope': '' }, el('option', { value: 'all' }, t('sx.su915.sch.all')), el('option', { value: 'pick' }, t('sx.su915.sch.pick')));
    scope.value = S.scope; scope.addEventListener('change', () => { S.scope = scope.value; render(); });
    const classes = el('input', { type: 'text', className: 'bc-input', value: S.classes, placeholder: t('sx.su915.def.classes.ph'), list: 'sx-tag-classes', 'aria-label': t('sx.su915.sch.classes') });
    classes.addEventListener('change', () => { S.classes = classes.value; render(); });
    const m = host.model(), kb = m?.keyBase || 0;
    const res = tagSchedule(ix, list, { columns: S.cols.length ? S.cols : ['name'], filters: S.filters, groupBy: S.groupBy || null, classes: splitList(S.classes), keys: S.scope === 'pick' ? host.selection() : null, unitMm: writer()?.unitMm || 1 });
    let shown = 0;
    const body = [];
    for (const g of res.groups) {
      if (res.groupBy) body.push(el('tr', { className: 'is-group' }, el('th', { colSpan: res.columns.length, scope: 'rowgroup' }, (g.value === '' ? t('qto.empty') : fmt(g.value)) + ' (' + g.rows.length + ')')));
      for (const r of g.rows) {
        if (shown++ >= MAX_SHOWN) break;
        body.push(el('tr', {}, r.values.map((v, i) => i === 0
          ? el('td', {}, el('button', { type: 'button', className: 'bc-linkbtn', 'data-sx-sch-pick': '', onClick: () => host.select([r.key]) }, fmt(v) || '#' + (r.key - kb)))
          : el('td', { className: typeof v === 'number' ? 'n' : '' }, fmt(v)))));
      }
    }
    const csv = () => {
      const text = scheduleCsv(res, { label: fieldName, groupLabel: fieldName });
      const name = String(host.fileName() || 'model').replace(/\.ifc$/i, '') + ' tag schedule.csv';   // i18n-ignore: a file name
      host.download(name, '﻿' + text, 'text/csv;charset=utf-8');
      host.status(t('sx.su915.sch.saved', { name }));
    };
    return [
      el('p', { className: 'bc-h' }, t('sx.su915.sch.h')),
      el('label', { className: 'bc-clash' }, t('qto.scope'), scope),
      el('label', { className: 'bc-clash' }, t('sx.su915.sch.classes'), classes),
      el('p', { className: 'bc-muted' }, t('sx.su915.sch.cols')),
      el('div', { className: 'bc-qto-sums', role: 'group', 'aria-label': t('sx.su915.sch.cols') }, colBoxes),
      el('p', { className: 'bc-muted' }, t('sx.su915.sch.filters')), ...filterRows,
      el('div', { className: 'bc-find-row' }, el('button', { type: 'button', className: 'bc-linkbtn', 'data-sx-sch-addfilter': '', onClick: () => { S.filters.push({ field: tagIds[0] || 'name', op: tagIds.length ? 'has' : 'contains', value: '' }); render(); } }, t('sx.su915.sch.addfilter'))),
      el('label', { className: 'bc-clash' }, t('sx.su915.sch.group'), fieldSel(S.groupBy, (v) => { S.groupBy = v; render(); }, true)),
      el('p', { className: 'bc-muted', 'data-sx-sch-count': String(res.count) }, t('sx.su915.sch.count', { n: res.count }), res.count > MAX_SHOWN ? ' ' + t('qto.more', { shown: MAX_SHOWN, n: res.count }) : ''),
      el('div', { className: 'bc-qto-wrap' }, el('table', { className: 'bc-qto-table', 'data-sx-sch-table': '' },
        el('thead', {}, el('tr', {}, res.columns.map((c) => el('th', {}, fieldName(c))))), el('tbody', {}, body))),
      el('div', { className: 'bc-find-row' }, el('button', { type: 'button', className: 'btn-plot btn-sm-cc', 'data-sx-sch-csv': '', onClick: csv }, el('i', { className: 'bi bi-download', 'aria-hidden': 'true' }), ' ', t('qto.csv'))),
      el('p', { className: 'bc-muted' }, t('sx.su915.sch.qtonote')),
    ];
  }

  function render() {
    if (!details?.open) return;
    if (!ed() || !host.model()) { box.replaceChildren(el('p', { className: 'bc-muted' }, t('sx.su915.needs'))); return; }
    box.replaceChildren(el('div', { className: 'bc-find' }, el('p', { className: 'bc-muted' }, t('sx.su915.intro')), ...defsSection(), ...tagSection(), ...scheduleSection()));
  }
  details?.addEventListener('toggle', () => { if (details.open) render(); });
  const docs = mountDocs({ ...host, defs, index, writer, commit, version: () => S.version, tagsChanged: () => { S.version++; render(); } });
  return {
    changed() { S.version++; render(); docs?.changed(); },
    picked() { if (details?.open) render(); },
    render,
    get state() { return { defs: defs(), version: S.version, cols: S.cols, filters: S.filters, groupBy: S.groupBy, docs: docs?.state }; },
    set(o = {}) { if (o.cols) S.cols = o.cols; if (o.filters) S.filters = o.filters; if ('groupBy' in o) S.groupBy = o.groupBy; if (o.values) S.values = o.values; if (details) details.open = true; render(); },   // tests
    apply: () => apply(),
    docs,
  };
}
