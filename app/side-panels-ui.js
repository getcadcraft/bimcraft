/* SPDX-License-Identifier: Apache-2.0 */
/**
 * side-panels-ui.js: bimcraft.js's 19 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountSidePanels(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { cleanSets, SETS_KEY, OPS, suggestions, find } from './ifc-find.js';
import { el } from './ui-util.js';
import { t } from './i18n.js';
import { propertyIndex } from './ifc-props.js';
import * as WebIFC from './ifc/api.js';
import { spaceSchedule, elementRows, totals, quantityFields, MAX_GROUP, tableCsv, totalsCsv } from './ifc-qto.js';
import { summary as summary43, read43, quantitiesFile as quantities43 } from './ifc/ifc43.js';
import { cleanRules } from './ifc-checks.js';

export function mountSidePanels(ctx) {
  const { ui, status, afterPick, editableBox, runModelChecks, pickKeys, clearProps, showProps, showMany } = ctx;

  const readSets = () => { try { return cleanSets(localStorage.getItem(SETS_KEY) || '[]'); } catch (e) { return []; } };
  const writeSets = (sets) => { try { localStorage.setItem(SETS_KEY, JSON.stringify(sets)); } catch (e) { /* this tab only */ } };
  function renderFind() {
    if (!ui.find) return;
    ui.findSec.hidden = ctx.mode !== 'ifc' || !ctx.model;
    if (ui.findSec.hidden || !ui.findDetails.open) return;   // built when opened: the index reads every element
    const ix = ctx.index();
    const fieldSel = (r) => {
      const sel = el('select', { className: 'select-cc', 'aria-label': t('find.field'), 'data-find-field': '' });
      const groups = new Map();
      for (const f of ix.fields) { const g = f.group || t('color.group.element'); if (!groups.has(g)) groups.set(g, []); groups.get(g).push(f); }
      for (const [g, fs] of groups) sel.append(el('optgroup', { label: g }, fs.map((f) => el('option', { value: f.id }, f.group ? f.label : t('color.field.' + f.id)))));
      if (!ix.fields.some((f) => f.id === r.field)) sel.append(el('option', { value: r.field }, r.field));
      sel.value = r.field;
      return sel;
    };
    const rows = ctx.findRules.map((r, i) => {
      const fs = fieldSel(r);
      const op = el('select', { className: 'select-cc', 'aria-label': t('find.op'), 'data-find-op': '' }, OPS.map((o) => el('option', { value: o }, t('find.op.' + o))));
      op.value = r.op;
      const listId = 'bc-find-vals-' + i;
      const val = el('input', { type: 'text', className: 'bc-input', 'aria-label': t('find.value'), value: r.value, list: listId, 'data-find-value': '', hidden: r.op === 'has' || r.op === 'hasnot' });
      const dl = el('datalist', { id: listId }, suggestions(ix, r.field, 100).map((v) => el('option', { value: v })));
      fs.addEventListener('change', () => { r.field = fs.value; r.value = ''; renderFind(); });
      op.addEventListener('change', () => { r.op = op.value; renderFind(); });
      val.addEventListener('input', () => { r.value = val.value; });
      val.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); runFind(); } });
      return el('div', { className: 'bc-find-rule', 'data-find-rule': String(i) }, fs, op, val, dl,
        ctx.findRules.length > 1 ? el('button', { type: 'button', className: 'bc-forget', title: t('find.remove'), 'aria-label': t('find.remove'), onClick: () => { ctx.findRules.splice(i, 1); renderFind(); } }, el('i', { className: 'bi bi-x', 'aria-hidden': 'true' })) : null);
    });
    const modeSel = el('select', { className: 'select-cc', 'aria-label': t('find.mode'), 'data-find-mode': '' }, el('option', { value: 'all' }, t('find.mode.all')), el('option', { value: 'any' }, t('find.mode.any')));
    modeSel.value = ctx.findMode;
    modeSel.addEventListener('change', () => { ctx.findMode = modeSel.value; });
    const sets = readSets();
    const saveName = el('input', { type: 'text', className: 'bc-input', 'aria-label': t('find.save.name'), placeholder: t('find.save.name'), maxLength: 80, 'data-find-setname': '', hidden: !ctx.findSaving });
    ui.find.replaceChildren(el('div', { className: 'bc-find' },
      ...rows,
      el('div', { className: 'bc-find-row' },
        el('button', { type: 'button', className: 'bc-linkbtn', 'data-find-add': '', onClick: () => { ctx.findRules.push({ field: ctx.findRules[ctx.findRules.length - 1]?.field || 'cls', op: 'is', value: '' }); renderFind(); } }, t('find.add')),
        ctx.findRules.length > 1 ? modeSel : null),
      el('div', { className: 'bc-find-row' },
        el('button', { type: 'button', className: 'btn-plot btn-sm-cc', 'data-find-go': '', onClick: () => runFind() }, el('i', { className: 'bi bi-search', 'aria-hidden': 'true' }), ' ', t('find.go')),
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-find-save': '', onClick: () => {
          if (!ctx.findSaving) { ctx.findSaving = true; renderFind(); ui.find.querySelector('[data-find-setname]')?.focus(); return; }
          const name = ui.find.querySelector('[data-find-setname]').value.trim();
          if (!name) return;
          const rest = readSets().filter((x) => x.name !== name);
          writeSets(cleanSets([...rest, { name, mode: ctx.findMode, rules: ctx.findRules }]));
          ctx.findSaving = false; renderFind();
          status(t('find.saved', { name }));
        } }, t('find.save')),
        saveName),
      el('p', { className: 'bc-h' }, t('find.sets')),
      sets.length ? el('ul', { className: 'bc-find-sets', 'data-find-sets': '' }, sets.map((x) => el('li', {},
        el('button', { type: 'button', className: 'bc-linkbtn', title: t('find.apply', { name: x.name }), 'data-find-set': x.name, onClick: () => { ctx.findRules = x.rules.map((r) => ({ ...r })); ctx.findMode = x.mode; renderFind(); runFind(); } }, x.name),
        el('button', { type: 'button', className: 'bc-forget', title: t('find.delete', { name: x.name }), 'aria-label': t('find.delete', { name: x.name }), onClick: () => { writeSets(readSets().filter((y) => y.name !== x.name)); renderFind(); } }, el('i', { className: 'bi bi-x', 'aria-hidden': 'true' })))))
        : el('p', { className: 'bc-muted' }, t('find.none'))));
  }
  function runFind() {
    const needs = ctx.findRules.filter((r) => r.op !== 'has' && r.op !== 'hasnot');
    if (needs.some((r) => !String(r.value).trim())) { status(t('find.incomplete'), true); return; }
    const keys = find(ctx.index(), { rules: ctx.findRules, mode: ctx.findMode });
    ctx.viewer.select(keys);
    afterPick();
    if (keys.length > 1) showMany(); else if (keys.length) showProps(keys[0]); else clearProps();
    status(t('find.found', { n: keys.length }));
  }

  let spaceIx = null;   // { model, ix }: the spaces' own index (they are rooms, not in the element index)
  const spacesIndex = () => { if (spaceIx?.model !== ctx.model) spaceIx = { model: ctx.model, ix: propertyIndex(WebIFC, ctx.ifc.api, ctx.model.modelID, ctx.model, { spaces: true }) }; return spaceIx.ix; };
  const qtoKeys = () => (ctx.qtoScope === 'pick' ? [...ctx.viewer.selection] : null);
  const spaceRes = () => spaceSchedule(spacesIndex(), ctx.model, { keys: qtoKeys() });
  const rowsRes = () => elementRows(ctx.index(), { keys: qtoKeys(), columns: [...ctx.qtoGroups, ...(ctx.qtoSums || [])] });
  const QTO_SHOWN = 200;
  const fmtNum = (n) => (Number.isInteger(n) ? String(n) : String(Number(n.toFixed(4))));
  function qtoResult() {
    const ix = ctx.index();
    const keys = ctx.qtoScope === 'pick' ? [...ctx.viewer.selection] : null;
    return totals(ix, { keys, groupBy: ctx.qtoGroups, sum: ctx.qtoSums || [] });
  }
  function renderQto() {
    if (!ui.qto) return;
    ui.qtoSec.hidden = ctx.mode !== 'ifc' || !ctx.model;
    if (ui.qtoSec.hidden || !ui.qtoDetails.open) return;
    const ix = ctx.index(), qf = quantityFields(ix);
    if (ctx.qtoSums === null) ctx.qtoSums = qf.filter((f) => /^Qto_|BaseQuantities/i.test(f.group)).slice(0, 3).map((f) => f.id);
    ctx.qtoSums = ctx.qtoSums.filter((id) => qf.some((f) => f.id === id));
    const fieldName = (id) => { const f = ix.fields.find((x) => x.id === id); return f ? ctx.fieldLabel(f) : id; };
    const scope = el('select', { className: 'select-cc', 'data-qto-scope': '' }, el('option', { value: 'all' }, t('qto.scope.all')), el('option', { value: 'pick' }, t('qto.scope.pick', { n: ctx.viewer.selection.size })));
    scope.value = ctx.qtoScope;
    scope.addEventListener('change', () => { ctx.qtoScope = scope.value; renderQto(); });
    const viewSel = el('select', { className: 'select-cc', 'data-qto-view': '' }, ['totals', 'rows', 'spaces', 'infra'].map((v) => el('option', { value: v }, t('qto.view.' + v))));
    viewSel.value = ctx.qtoView;
    viewSel.addEventListener('change', () => { ctx.qtoView = viewSel.value; renderQto(); });
    const csvBtn = el('div', { className: 'bc-find-row' }, el('button', { type: 'button', className: 'btn-plot btn-sm-cc', 'data-qto-csv': '', onClick: () => qtoCsv() }, el('i', { className: 'bi bi-download', 'aria-hidden': 'true' }), ' ', t('qto.csv')));
    if (ctx.qtoView === 'infra') {   // 0.8 SU.882: IFC 4.3 roads, rails, bridges and the rest, totalled per class
      let rows = [], why = '';
      try { rows = summary43(read43(ctx.ifc.api.file(ctx.model.modelID))); } catch (e) { why = String(e.message || e); }
      const m = (v) => (v ? fmtNum(v) : '');
      ui.qto.replaceChildren(el('div', { className: 'bc-find', 'data-qto-infra': '' },
        el('label', { className: 'bc-clash' }, t('qto.view'), viewSel),
        why ? el('p', { className: 'bc-muted' }, t('qto.infra.failed', { why })) : rows.length ? el('p', { className: 'bc-muted' }, t('qto.infra.kinds', { n: rows.length })) : el('p', { className: 'bc-muted', 'data-qto-noinfra': '' }, t('qto.infra.none')),
        rows.length ? el('div', { className: 'bc-qto-wrap' }, el('table', { className: 'bc-qto-table', 'data-qto-table': '' },
          el('thead', {}, el('tr', {}, ['group', 'class', 'type'].map((h) => el('th', {}, t('qto.infra.' + h))), ['count', 'length', 'area', 'volume'].map((h) => el('th', { className: 'n' }, t('qto.infra.' + h))))),
          el('tbody', {}, rows.slice(0, QTO_SHOWN).map((r) => el('tr', {}, el('td', {}, r.group), el('td', {}, String(r.cls).replace(/^Ifc/, '')), el('td', {}, r.predefined), el('td', { className: 'n' }, String(r.count)), el('td', { className: 'n' }, m(r.length)), el('td', { className: 'n' }, m(r.area)), el('td', { className: 'n' }, m(r.volume))))))) : null,
        rows.length ? el('div', { className: 'bc-find-row' }, el('button', { type: 'button', className: 'btn-plot btn-sm-cc', 'data-qto-toTakeoff': '', title: t('qto.infra.send.title'), onClick: () => sendInfra() }, el('i', { className: 'bi bi-download', 'aria-hidden': 'true' }), ' ', t('qto.infra.send'))) : null));
      return;
    }
    if (ctx.qtoView === 'spaces') {
      const sp = spaceRes();
      const cellOf = (v, from) => el('td', { className: 'n' + (from === 'shape' ? ' is-measured' : ''), title: from === 'shape' ? t('qto.sp.measured') : null }, v === '' ? '' : fmtNum(v));
      ui.qto.replaceChildren(el('div', { className: 'bc-find' },
        el('label', { className: 'bc-clash' }, t('qto.view'), viewSel),
        el('label', { className: 'bc-clash' }, t('qto.scope'), scope),
        sp.rows.length ? el('p', { className: 'bc-muted' }, t('qto.spaces.count', { n: sp.rows.length }), ' ', t('qto.sp.note')) : el('p', { className: 'bc-muted', 'data-qto-nospaces': '' }, t('qto.spaces.none')),
        sp.rows.length ? el('div', { className: 'bc-qto-wrap' }, el('table', { className: 'bc-qto-table', 'data-qto-table': '' },
          el('thead', {}, el('tr', {}, ['number', 'name', 'storey'].map((h) => el('th', {}, t('qto.sp.' + h))), ['area', 'volume'].map((h) => el('th', { className: 'n' }, t('qto.sp.' + h))))),
          el('tbody', {}, sp.rows.slice(0, QTO_SHOWN).map((r) => el('tr', {}, el('td', {}, el('button', { type: 'button', className: 'bc-linkbtn', 'data-qto-pick': '', onClick: () => pickKeys([r.key]) }, String(r.number))), el('td', {}, String(r.name)), el('td', {}, String(r.storey)), cellOf(r.area, r.areaFrom), cellOf(r.volume, r.volumeFrom)))),
          el('tfoot', {}, el('tr', {}, el('td', { colSpan: 3 }, t('qto.total')), el('td', { className: 'n' }, fmtNum(sp.total.area)), el('td', { className: 'n' }, fmtNum(sp.total.volume)))))) : null,
        sp.rows.length ? csvBtn : null));
      return;
    }
    const groupRows = ctx.qtoGroups.map((g, i) => {
      const sel = el('select', { className: 'select-cc', 'aria-label': t('qto.group'), 'data-qto-group': String(i) });
      const groups = new Map();
      for (const f of ix.fields) { if (f.id === 'guid') continue; const gn = f.group || t('color.group.element'); if (!groups.has(gn)) groups.set(gn, []); groups.get(gn).push(f); }
      for (const [gn, list] of groups) sel.append(el('optgroup', { label: gn }, list.map((f) => el('option', { value: f.id }, ctx.fieldLabel(f)))));
      sel.value = g;
      sel.addEventListener('change', () => { ctx.qtoGroups[i] = sel.value; renderQto(); });
      return el('div', { className: 'bc-find-rule' }, sel,
        ctx.qtoGroups.length > 1 ? el('button', { type: 'button', className: 'bc-forget', title: t('find.remove'), 'aria-label': t('find.remove'), onClick: () => { ctx.qtoGroups.splice(i, 1); renderQto(); } }, el('i', { className: 'bi bi-x', 'aria-hidden': 'true' })) : null);
    });
    const sumBoxes = [];
    let lastSet = null;
    for (const f of qf) {   // under a heading per property set, so each box shows just the property's name
      const set = f.group || t('color.group.element');
      if (set !== lastSet) { sumBoxes.push(el('p', { className: 'bc-qto-set', title: set }, set)); lastSet = set; }
      const cb = el('input', { type: 'checkbox', value: f.id, checked: ctx.qtoSums.includes(f.id), 'data-qto-sum': f.id });
      cb.addEventListener('change', () => { ctx.qtoSums = cb.checked ? [...ctx.qtoSums, f.id] : ctx.qtoSums.filter((x) => x !== f.id); renderQto(); });
      sumBoxes.push(el('label', {}, cb, el('span', {}, ctx.fieldLabel(f))));
    }
    const sums = qf.length ? el('div', { className: 'bc-qto-sums', role: 'group', 'aria-label': t('qto.sum') }, ...sumBoxes) : el('p', { className: 'bc-muted' }, t('qto.sum.none'));
    if (ctx.qtoView === 'rows') {
      const rr = rowsRes();
      const show2 = (v) => (v === '' ? '' : typeof v === 'number' ? fmtNum(v) : String(v).replace(/^Ifc(?=[A-Z])/, ''));
      ui.qto.replaceChildren(el('div', { className: 'bc-find' },
        el('label', { className: 'bc-clash' }, t('qto.view'), viewSel),
        el('label', { className: 'bc-clash' }, t('qto.scope'), scope),
        el('p', { className: 'bc-h' }, t('qto.columns')), ...groupRows,
        ctx.qtoGroups.length < MAX_GROUP ? el('div', { className: 'bc-find-row' }, el('button', { type: 'button', className: 'bc-linkbtn', 'data-qto-add': '', onClick: () => { ctx.qtoGroups.push('name'); renderQto(); } }, t('qto.column.add'))) : null,
        el('p', { className: 'bc-h' }, t('qto.sum')), sums,
        el('p', { className: 'bc-muted' }, t('qto.elements', { n: rr.rows.length }), ' ', t('qto.units')),
        rr.rows.length > QTO_SHOWN ? el('p', { className: 'bc-muted' }, t('qto.more', { shown: QTO_SHOWN, n: rr.rows.length })) : null,
        el('div', { className: 'bc-qto-wrap' }, el('table', { className: 'bc-qto-table', 'data-qto-table': '' },
          el('thead', {}, el('tr', {}, rr.columns.map((c, i) => el('th', { className: i >= ctx.qtoGroups.length ? 'n' : '' }, fieldName(c))))),
          el('tbody', {}, rr.rows.slice(0, QTO_SHOWN).map((r) => el('tr', {}, r.values.map((v, i) => i === 0
            ? el('td', {}, el('button', { type: 'button', className: 'bc-linkbtn', 'data-qto-pick': '', onClick: () => pickKeys([r.key]) }, show2(v) || '#' + (r.key - ctx.model.keyBase)))
            : el('td', { className: i >= ctx.qtoGroups.length ? 'n' : '' }, show2(v)))))))),
        csvBtn));
      return;
    }
    const res = qtoResult();
    const shown = res.rows.slice(0, QTO_SHOWN);
    const gaps = res.sum.map((_, i) => res.total.counted[i] < res.total.count);
    const show = (v) => (v === '' ? t('qto.empty') : typeof v === 'number' ? fmtNum(v) : String(v).replace(/^Ifc(?=[A-Z])/, ''));
    const table = el('div', { className: 'bc-qto-wrap' }, el('table', { className: 'bc-qto-table', 'data-qto-table': '' },
      el('thead', {}, el('tr', {}, res.groupBy.map((g) => el('th', {}, fieldName(g))), el('th', { className: 'n' }, t('qto.count')), res.sum.map((f) => el('th', { className: 'n' }, fieldName(f))))),
      el('tbody', {}, shown.map((r) => el('tr', {}, r.values.map((v) => el('td', {}, show(v))), el('td', { className: 'n' }, String(r.count)), r.sums.map((v, i) => el('td', { className: 'n', title: gaps[i] && r.counted[i] < r.count ? t('qto.leftout', { name: String(r.count - r.counted[i]) }) : null }, fmtNum(v)))))),
      el('tfoot', {}, el('tr', {}, el('td', { colSpan: res.groupBy.length }, t('qto.total')), el('td', { className: 'n' }, String(res.total.count)), res.total.sums.map((v) => el('td', { className: 'n' }, fmtNum(v)))))));
    ui.qto.replaceChildren(el('div', { className: 'bc-find' },
      el('label', { className: 'bc-clash' }, t('qto.view'), viewSel),
      el('label', { className: 'bc-clash' }, t('qto.scope'), scope),
      el('p', { className: 'bc-h' }, t('qto.group')), ...groupRows,
      ctx.qtoGroups.length < MAX_GROUP ? el('div', { className: 'bc-find-row' }, el('button', { type: 'button', className: 'bc-linkbtn', 'data-qto-add': '', onClick: () => { ctx.qtoGroups.push('storey'); renderQto(); } }, t('qto.group.add'))) : null,
      el('p', { className: 'bc-h' }, t('qto.sum')), sums,
      el('p', { className: 'bc-muted' }, t('qto.rows', { n: res.rows.length }), ' ', t('qto.units')),
      res.rows.length > QTO_SHOWN ? el('p', { className: 'bc-muted' }, t('qto.more', { shown: QTO_SHOWN, n: res.rows.length })) : null,
      table,
      csvBtn));
  }
  function sendInfra() {   // 0.8 SU.882: a 'cadcraft-quantities' file TakeoffCraft opens
    try {
      const doc = quantities43(read43(ctx.ifc.api.file(ctx.model.modelID)), { project: ctx.ifcName.replace(/\.ifc$/i, ''), app: 'BimCraft' });
      const name = ctx.ifcName.replace(/\.ifc$/i, '') + '.quantities.json';   // i18n-ignore: a file name
      ctx.download(name, JSON.stringify(doc, null, 1), 'application/json');
      status(t('qto.downloaded', { name }));
    } catch (e) { status(t('qto.infra.failed', { why: String(e.message || e) }), true); }
  }
  function qtoCsv() {
    const ix = ctx.index();
    const label = (id) => { const f = ix.fields.find((x) => x.id === id); return f ? (f.group ? f.group + '.' + f.label : ctx.fieldLabel(f)) : id; };
    const base = ctx.ifcName.replace(/\.ifc$/i, '');
    let name, text;
    if (ctx.qtoView === 'spaces') {
      const sp = spaceRes();
      if (!sp.rows.length) { status(t('qto.spaces.none'), true); return; }
      const from = (f) => (f === 'shape' ? t('qto.sp.shape') : f === 'file' ? t('qto.sp.file') : '');
      text = tableCsv(['number', 'name', 'storey', 'area', 'areafrom', 'volume', 'volumefrom'].map((h) => t('qto.sp.' + h)),
        [...sp.rows.map((r) => [r.number, r.name, r.storey, r.area, from(r.areaFrom), r.volume, from(r.volumeFrom)]), [t('qto.total'), '', '', sp.total.area, '', sp.total.volume, '']]);
      name = base + ' spaces.csv';   // i18n-ignore: a file name
    } else if (ctx.qtoView === 'rows') {
      const rr = rowsRes();
      if (!rr.rows.length) { status(t('qto.nothing'), true); return; }
      text = tableCsv(['GlobalId', ...rr.columns.map(label)], rr.rows.map((r) => [ix.value('guid', r.key - ix.keyBase) ?? '', ...r.values]));   // i18n-ignore: an IFC attribute name
      name = base + ' elements.csv';   // i18n-ignore: a file name
    } else {
      const res = qtoResult();
      if (!res.total.count) { status(t('qto.nothing'), true); return; }
      text = totalsCsv(res, { label, countLabel: t('qto.count'), totalLabel: t('qto.total'), leftOut: (h) => t('qto.leftout', { name: h }) });
      name = base + ' quantities.csv';   // i18n-ignore: a file name
    }
    ctx.download(name, '\ufeff' + text, 'text/csv;charset=utf-8');
    status(t('qto.downloaded', { name }));
  }

  // ---- Model checks (0.4 B19) ----
  const RULES_KEY = 'bimcraft.checkrules';

  const readRules = () => { try { return cleanRules(localStorage.getItem(RULES_KEY)) || [{ cls: '', field: 'name' }]; } catch (e) { return [{ cls: '', field: 'name' }]; } };
  const writeRules = (rs) => { try { localStorage.setItem(RULES_KEY, JSON.stringify(rs)); } catch (e) { /* this tab only */ } };
  function renderChecks() {
    if (!ui.checks) return;
    ui.checksSec.hidden = ctx.mode !== 'ifc' || !ctx.model;
    if (ui.checksSec.hidden || !ui.checksDetails.open) return;
    const ix = ctx.index(), rules = readRules();
    const classes = [...new Set(ix.values('cls').values())].sort();
    const rows = rules.map((r, i) => {
      const cs = el('select', { className: 'select-cc', 'aria-label': t('color.field.cls'), 'data-checks-cls': '' }, el('option', { value: '' }, t('checks.class.any')), classes.map((c) => el('option', { value: c }, c.replace(/^Ifc/, ''))));
      cs.value = classes.includes(r.cls) ? r.cls : '';
      const fs = el('select', { className: 'select-cc', 'aria-label': t('find.field'), 'data-checks-field': '' });
      const groups = new Map();
      for (const f of ix.fields) { if (f.id === 'cls' || f.id === 'guid') continue; const g = f.group || t('color.group.element'); if (!groups.has(g)) groups.set(g, []); groups.get(g).push(f); }
      for (const [g, list] of groups) fs.append(el('optgroup', { label: g }, list.map((f) => el('option', { value: f.id }, ctx.fieldLabel(f)))));
      if (![...fs.options].some((o) => o.value === r.field)) fs.append(el('option', { value: r.field }, r.field));
      fs.value = r.field;
      cs.addEventListener('change', () => { rules[i].cls = cs.value; writeRules(rules); });
      fs.addEventListener('change', () => { rules[i].field = fs.value; writeRules(rules); });
      return el('div', { className: 'bc-find-rule', 'data-checks-rule': String(i) }, cs, fs,
        rules.length > 1 ? el('button', { type: 'button', className: 'bc-forget', title: t('find.remove'), 'aria-label': t('find.remove'), onClick: () => { rules.splice(i, 1); writeRules(rules); renderChecks(); } }, el('i', { className: 'bi bi-x', 'aria-hidden': 'true' })) : null);
    });
    const pickBtn = (label, keys) => el('button', { type: 'button', className: 'bc-linkbtn', 'data-checks-pick': '', onClick: () => pickKeys(keys) }, label);
    const groupLabel = (c, g) => {
      if (c.id === 'required') return t('checks.group.required', { cls: g.rule.cls ? g.rule.cls.replace(/^Ifc/, '') : t('checks.class.any'), field: ctx.fieldLabel(ix.fields.find((f) => f.id === g.rule.field) || { group: '-', label: g.rule.field }), n: g.keys.length });
      if (c.id === 'guid') return t('checks.group.guid', { guid: g.label, n: g.keys.length });
      if (c.id === 'stacked') return t('checks.group.stacked', { name: ctx.nameOfKey(g.keys[0]), n: g.keys.length });
      return t('checks.group.storey', { n: g.keys.length });
    };
    const res = ctx.checkRes ? el('ul', { className: 'bc-checks-res', 'data-checks-res': '' }, ctx.checkRes.map((c) => el('li', { 'data-check': c.id },
      el('div', { className: 'bc-check-head' }, el('span', {}, t('checks.name.' + c.id)), c.count ? el('span', { className: 'n' }, String(c.count)) : el('span', { className: 'ok' }, t('checks.none'))),
      c.groups.length ? el('ul', {}, c.groups.slice(0, 50).map((g) => el('li', {}, pickBtn(groupLabel(c, g), g.keys)))) : null))) : null;
    ui.checks.replaceChildren(el('div', { className: 'bc-find' },
      el('p', { className: 'bc-h' }, t('checks.required')),
      el('p', { className: 'bc-muted' }, t('checks.required.hint')),
      ...rows,
      el('div', { className: 'bc-find-row' },
        el('button', { type: 'button', className: 'bc-linkbtn', 'data-checks-add': '', onClick: () => { rules.push({ cls: '', field: 'name' }); writeRules(rules); renderChecks(); } }, t('checks.add'))),
      el('div', { className: 'bc-find-row' }, el('button', { type: 'button', className: 'btn-plot btn-sm-cc', 'data-checks-run': '', onClick: () => runModelChecks() }, t('checks.run'))),
      res,
      editableBox()));
  }

  return { readSets, renderFind, runFind, spacesIndex, spaceRes, qtoResult, renderQto, readRules, renderChecks };
}
