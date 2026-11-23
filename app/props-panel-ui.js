/* SPDX-License-Identifier: Apache-2.0 */
/**
 * props-panel-ui.js: bimcraft.js's 3 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 bimcraft; no behaviour change).
 * mountPropsPanel(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { PSETS } from './ifc-place.js';
import { el } from './ui-util.js';
import { t } from './i18n.js';

export function mountPropsPanel(ctx) {
  const { ST, ui, status, clearProps, lengthRows, lengthToFile, showForeign, cur, entryOf, addonSections, afterEdit, libraryBlock, syncEdit } = ctx;

  async function showProps(id) {
    const token = ++ST.pickToken;
    ST.selected = id ?? null;
    if (id === null || id === undefined) { clearProps(); return; }
    const ent = entryOf(id);
    if (ent && ent !== cur()) {   // an element of a model that is not the active one: read only
      let q;
      try { q = lengthRows(await ent.ifc.properties(id - ent.model.keyBase)); } catch (e) { console.error(e); return; }
      if (token !== ST.pickToken) return;
      ST.selInfo = null;
      showForeign(q, ent);
      return;
    }
    if (ent) id -= ent.model.keyBase;
    let p;
    try { p = lengthRows(await ST.ifc.properties(id)); } catch (e) { console.error(e); return; }
    if (token !== ST.pickToken) return;   // a newer pick won
    ST.selInfo = { id, p, placement: p.sets.some((x) => x.name === PSETS.placement) };
    ST.bundleUi?.picked(p);   // 0.6 DF.12 (b): the bundle's property groups
    const label = p.cls.replace(/^Ifc/, '') + ' ' + (p.name || '#' + p.id);
    const edited = new Set((ST.editor?.changes || []).filter((c) => c.id === id).map((c) => c.kind === 'attr' ? 'a|' + c.attr : 'p|' + c.setName + '|' + c.propName));

    // Element attributes: Name, Object type, Tag, Description are editable.
    const attr = (name, key, value) => editableRow(name, value, edited.has('a|' + key), {}, (v) => {
      ST.editor.setAttribute(id, key, v);
      ctx.tagLast(label);
    });
    const basics = el('dl', { className: 'bc-dl' },
      attr(t('prop.name'), 'Name', p.name),
      ctx.copyRow(t('prop.type'), p.typeName),
      attr(t('prop.objtype'), 'ObjectType', p.objectType),
      attr(t('prop.tag'), 'Tag', p.tag),
      attr(t('prop.desc'), 'Description', p.description),
      ctx.copyRow(t('prop.guid'), p.guid), ctx.copyRow(t('prop.line'), '#' + p.id));

    // 0.8 PANEL-COMPACT: where the shell has the shared property grid, the element's attributes and property sets are its rows
    // (category = the property set; the same editor calls, so one undo step and copy-on-write exactly as the form below).
    const grid = window.ccPropGrid ? propsGrid(id, p, label, edited) : null;
    const sets = grid ? [] : p.sets.map((s, i) => {
      const dl = el('dl', { className: 'bc-dl' }, s.rows.map((r) => r.edit
        ? editableRow(r.name, r.value, edited.has('p|' + r.edit.setName + '|' + r.name), { valueType: r.edit.valueType }, (v) => {
            ST.editor.setProperty(id, r.edit, lengthToFile(r, p, v));
            ctx.tagLast(label);
          })
        : ctx.copyRow(r.name, r.value)));
      return el('details', { className: 'bc-set', open: i < 3 },
        el('summary', {}, s.name),
        s.fromType ? el('p', { className: 'bc-type-note' }, t('prop.typenote')) : null,
        dl);
    });
    ui.props.replaceChildren(...[   // libraryBlock is null for non-library elements: replaceChildren would print "null"
      el('p', { className: 'bc-prop-cls' }, p.cls.replace(/^Ifc/, '')),
      el('p', { className: 'bc-prop-name' }, p.name || t('prop.unnamed')),
      libraryBlock(id, p),
      el('p', { className: 'bc-edit-hint' }, t('prop.edit.hint')),
      ctx.copyAllBar(p, ST.ifcName),
      grid ? grid.node : basics, ...sets].filter(Boolean));
    if (grid && ST.gridFocus) { try { grid.g.focus(ST.gridFocus); } catch (e) { /* the row is gone */ } }
    ST.gridFocus = null;
    ST.modelUi?.decorate(ui.props);   // a drawn wall, door or window: its numbers to change (0.5 BM.5)
    ST.reportAsUi?.decorate(ui.props, id, p);   // 0.9 D8.12-C: Report as another IFC class (report-as.js)
    if (ST.editor) ST.classifyUi?.decorate(ui.props, [id]);   // 0.10 BK.94: Uniclass / OmniClass / UniFormat codes (classify-ui.js)
    if (ST.editor) ST.verifyUi?.decorate(ui.props, [id]);
    if (ST.editor) ST.lodUi?.decorate(ui.props, [id]);   // 0.10 bim-lod-10   // 0.10 BK.64 / BK.49: the verification state (verify-ui.js)
    syncEdit();
    ST.workspace?.propertiesChanged();
    addonSections([id], token);   // 0.5 AO.7
  }

  /** The Properties grid of one element: { node, g } (data only; the file's values never become markup). */
  function propsGrid(id, p, label, edited) {
    const numeric = (vt) => /REAL|MEASURE|INTEGER|COUNT|RATIO/.test(vt || '');
    const rows = [];
    const cat0 = p.cls.replace(/^Ifc/, '');
    const fail = (e) => { status(e.message, true); ST.gridFocus = null; setTimeout(() => { if (ST.selected === id) showProps(id); }, 0); };
    const run = (rowId, fn) => { try { fn(); } catch (e) { fail(e); return; } ST.gridFocus = rowId; afterEdit(); };
    const str = (v) => (v === null || v === undefined ? '' : String(v));
    const ro = (rid, cat, name, v) => rows.push({ id: rid, category: cat, label: name, type: 'readonly', value: str(v) });
    const attrRow = (name, key, value) => rows.push({ id: 'a:' + key, category: cat0, label: name, type: 'text', value: str(value), hint: edited.has('a|' + key) ? t('cmp.changed') : undefined });
    attrRow(t('prop.name'), 'Name', p.name);
    ro('r:type', cat0, t('prop.type'), p.typeName);
    attrRow(t('prop.objtype'), 'ObjectType', p.objectType);
    attrRow(t('prop.tag'), 'Tag', p.tag);
    attrRow(t('prop.desc'), 'Description', p.description);
    ro('r:guid', cat0, t('prop.guid'), p.guid);
    ro('r:line', cat0, t('prop.line'), '#' + p.id);
    const byId = new Map();
    p.sets.forEach((s, si) => s.rows.forEach((r, ri) => {
      const rid = 'p:' + si + ':' + ri;
      if (!r.edit) { ro(rid, s.name, r.name, r.value); return; }
      const vt = r.edit.valueType, shown = str(r.value);
      byId.set(rid, r);
      if (vt === 'IFCBOOLEAN' || vt === 'IFCLOGICAL') {
        const opts = [{ value: 'Yes', label: t('prop.yes') }, { value: 'No', label: t('prop.no') }];
        if (shown !== 'Yes' && shown !== 'No') opts.unshift({ value: '', label: shown });
        rows.push({ id: rid, category: s.name, label: r.name, type: 'select', options: opts, value: shown === 'Yes' || shown === 'No' ? shown : '' });
      } else if (numeric(vt) && shown !== '' && Number.isFinite(Number(shown))) {
        const whole = /INTEGER|COUNT/.test(vt);
        rows.push({ id: rid, category: s.name, label: r.name, type: 'number', value: Number(shown), step: whole ? 1 : undefined,
          parse: (text) => { const x = String(text).trim(); const n = Number(x); if (x === '' || !Number.isFinite(n)) return { ok: false, message: t('ifcedit.err.number') }; if (whole && !Number.isInteger(n)) return { ok: false, message: t('ifcedit.err.whole') }; return { ok: true, value: n }; } });
      } else rows.push({ id: rid, category: s.name, label: r.name, type: 'text', value: shown });
    }));
    const onChange = (rid, v) => {
      if (rid.startsWith('a:')) { const key = rid.slice(2); run(rid, () => { ST.editor.setAttribute(id, key, String(v)); ctx.tagLast(label); }); return; }
      const r = byId.get(rid);
      if (r) run(rid, () => { ST.editor.setProperty(id, r.edit, lengthToFile(r, p, String(v))); ctx.tagLast(label); });
    };
    const host = el('div', { className: 'bc-propgrid', 'data-bc-propgrid': '' });
    const g = window.ccPropGrid.create(host, { label: t('ui.properties'), key: 'properties', rows, onChange,
      onInvalid: (rid, res) => status(res?.message || t('ifcedit.err.number'), true) });
    const typeNote = p.sets.some((s) => s.fromType) ? el('p', { className: 'bc-type-note' }, t('prop.typenote')) : null;
    return { g, node: el('div', { className: 'bc-propgrid-wrap' }, ...[typeNote, host].filter(Boolean)) };
  }

  function editableRow(name, value, isEdited, { valueType }, commit) {
    const shown = value === null || value === undefined ? '' : String(value);
    const dd = el('dd', { className: 'bc-editable' + (isEdited ? ' is-edited' : '') });
    const show = () => dd.replaceChildren(...[el('button', { type: 'button', className: 'bc-val', title: t('prop.change.title', { name }), onClick: start },
      shown || el('span', { className: 'bc-empty-val' }, t('prop.empty'))), shown ? ctx.copyBtn(name, shown) : null].filter(Boolean));   // never hand replaceChildren a null
    function start() {
      const bool = valueType === 'IFCBOOLEAN' || valueType === 'IFCLOGICAL';
      const input = bool
        ? el('select', { className: 'bc-input', 'aria-label': name }, el('option', { value: 'Yes', selected: shown === 'Yes' }, t('prop.yes')), el('option', { value: 'No', selected: shown !== 'Yes' }, t('prop.no')))
        : el('input', { className: 'bc-input', type: 'text', value: shown, 'aria-label': name, inputMode: /REAL|MEASURE|INTEGER|COUNT|RATIO/.test(valueType || '') ? 'decimal' : 'text' });
      const err = el('span', { className: 'bc-input-err', role: 'alert' });
      let done = false;
      const finish = (save) => {
        if (done) return;
        if (save && input.value !== shown) {
          try { commit(input.value); }
          catch (e) { err.textContent = e.message; input.focus(); return; }
          done = true;
          afterEdit();
          return;
        }
        done = true;
        show();
      };
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') { e.preventDefault(); finish(true); }
        if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); finish(false); }
      });
      input.addEventListener('blur', () => setTimeout(() => finish(true), 0));
      if (bool) input.addEventListener('change', () => finish(true));
      dd.replaceChildren(input, err);
      input.focus();
      if (input.select) input.select();
    }
    show();
    return [el('dt', {}, name), dd];
  }

  return { showProps, editableRow };
}
