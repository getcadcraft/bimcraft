/* SPDX-License-Identifier: Apache-2.0 */
/**
 * color-ui.js: bimcraft.js's 12 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 bimcraft; no behaviour change).
 * mountColorBy(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { propertyIndex, schemeOf, applyScheme, readScheme, colorBy } from './ifc-props.js';
import * as WebIFC from './ifc/api.js';
import { t } from './i18n.js';
import { el, num } from './ui-util.js';

export function mountColorBy(ctx) {
  const { ST, ui, status, syncVis, download } = ctx;

  const theme = () => (document.documentElement.dataset.space === 'model' ? 'dark' : 'light');
  function index() {
    if (!ST.propIx && ST.model) ST.propIx = propertyIndex(WebIFC, ST.ifc.api, ST.model.modelID, ST.model);
    return ST.propIx;
  }
  const fieldLabel = (f) => (f.group ? f.label : t('color.field.' + f.id));
  const valueLabel = (v) => (ST.colorField === 'cls' ? String(v).replace(/^Ifc/, '') : v);   // classes read as elsewhere: "Wall"
  function renderColor() {
    if (!ui.color) return;
    if (ST.mode !== 'ifc' || !ST.model) { ui.color.replaceChildren(el('p', { className: 'bc-muted' }, t('color.needs.ifc'))); return; }
    if (ui.color.closest('[data-rpane]').hidden && !ST.colorField) return;   // built when the tab is first shown
    const ix = index();
    const sel = el('select', { className: 'select-cc', 'data-color-field': '' },
      el('option', { value: '', className: 'select-placeholder' }, t('color.field.choose')));
    const groups = new Map();
    for (const f of ix.fields) { const g = f.group || t('color.group.element'); if (!groups.has(g)) groups.set(g, []); groups.get(g).push(f); }
    for (const [g, fs] of groups) sel.append(el('optgroup', { label: g }, fs.map((f) => el('option', { value: f.id }, fieldLabel(f) + ' (' + num(f.count) + ')'))));
    sel.value = ST.colorField;
    sel.classList.toggle('is-empty', !ST.colorField);
    sel.addEventListener('change', () => { if (sel.value) applyColor(sel.value); else colorOff(); });
    const off = el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-color-off': '', disabled: !ST.colorField, onClick: colorOff }, t('color.off'));
    const kids = [el('p', { className: 'bc-muted' }, t('color.intro')), el('div', { className: 'bc-color-pick' }, el('label', {}, t('color.field'), sel), off)];
    // schemes (0.5 WL.5): save the colors as a file, open one a teammate saved
    kids.push(el('div', { className: 'bc-color-scheme' },
      el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-color-save': '', disabled: !ST.colorField || !ST.colorLegend, title: t('color.scheme.save.title'), onClick: saveScheme }, el('i', { className: 'bi bi-download', 'aria-hidden': 'true' }), ' ', t('color.scheme.save')),
      el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-color-open': '', title: t('color.scheme.open.title'), onClick: () => ui.colorInput.click() }, el('i', { className: 'bi bi-folder2-open', 'aria-hidden': 'true' }), ' ', t('color.scheme.open'))));
    if (ST.colorScheme && ST.colorLegend?.missing) kids.push(el('p', { className: 'bc-card-alert', 'data-color-missing': '' }, t('color.scheme.missing', { field: schemeFieldLabel(ST.colorScheme) })));
    if (ST.colorField && ST.colorLegend) {
      if (ST.colorLegend.kind === 'range') kids.push(el('p', { className: 'bc-muted' }, t(ST.colorScheme ? 'color.ranges.scheme' : 'color.ranges')));
      if (ST.colorScheme) kids.push(el('p', { className: 'bc-muted', 'data-color-scheme-note': '' }, t('color.scheme.note')));
      kids.push(el('ul', { className: 'bc-legend', 'data-legend': '' }, ST.colorLegend.legend.map((l, i) => {
        const name = l.none ? t('color.none') : l.outside ? t('color.scheme.outside', { n: typeof l.other === 'number' ? l.other : l.count }) : l.other ? t('color.other', { n: l.other }) : valueLabel(l.label);
        const pick = el('input', { type: 'color', className: 'bc-sw-pick', value: l.color, 'aria-label': t('color.scheme.pick', { value: name }), 'data-legend-color': String(i) });
        pick.addEventListener('change', () => recolor(i, pick.value));
        return el('li', { className: l.count ? '' : 'is-empty' }, pick,
          el('button', { type: 'button', 'aria-pressed': ST.picked.has(i) ? 'true' : 'false', 'data-legend-row': String(i), disabled: !l.count, onClick: (e) => isolateValue(i, e.ctrlKey || e.metaKey || e.shiftKey) },
            el('span', { className: 'bc-lv' + (l.none || l.other ? ' is-muted' : '') }, name),
            el('span', { className: 'n' }, num(l.count))));
      })));
    }
    ui.color.replaceChildren(...kids);
  }
  const schemeFieldLabel = (sc) => (sc.field.group ? sc.field.group + ' › ' + (sc.field.label || sc.field.id) : t('color.field.' + sc.field.id));
  /** Change one row's color: the legend becomes this model's own scheme (kept over themes and edits, ready to save). */
  function recolor(i, color) {
    const ix = index(), f = ix.fields.find((x) => x.id === ST.colorField) || ST.colorScheme?.field;
    if (!f || !ST.colorLegend) return;
    const legend = ST.colorLegend.legend.map((l, j) => (j === i ? { ...l, color } : l));
    ST.colorScheme = schemeOf({ ...ST.colorLegend, legend }, f);
    ST.colorLegend = applyScheme(ix, ST.colorScheme);
    ST.viewer.setColors(ST.colorLegend.colorOf);
    renderColor();
    status(t('color.scheme.changed'), false, true);
  }
  function saveScheme() {
    if (!ST.colorField || !ST.colorLegend) return;
    const ix = index(), f = ix.fields.find((x) => x.id === ST.colorField) || ST.colorScheme?.field;
    const sc = ST.colorScheme || schemeOf(ST.colorLegend, f);
    const name = (fieldLabel(f) || 'colors').replace(/[\\/:*?"<>|]+/g, ' ').trim().slice(0, 80) + ' colors.json';   // i18n-ignore: file name
    download(name, JSON.stringify(sc, null, 2) + '\n', 'application/json');
    status(t('color.scheme.saved', { name }), false, true);
  }
  async function openScheme(file) {
    if (ST.mode !== 'ifc' || !ST.model) return;
    if (file.size > 2e6) { status(t('color.scheme.bad'), true); return; }
    const r = readScheme(await file.text());
    if (!r.ok) { status(t('color.scheme.bad'), true); return; }
    if (ST.fdOn) ctx.fdClear(true);
    ST.colorScheme = r.scheme;
    ST.colorField = r.scheme.field.id;
    ST.colorLegend = applyScheme(index(), ST.colorScheme);
    ST.picked = new Set();
    ST.viewer.setColors(ST.colorLegend.colorOf);
    renderColor();
    if (ST.colorLegend.missing) status(t('color.scheme.missing', { field: schemeFieldLabel(ST.colorScheme) }), true);
    else status(t('color.scheme.opened', { field: schemeFieldLabel(ST.colorScheme), n: ST.colorLegend.legend.filter((l) => l.count && !l.none && !l.outside).length }) + (ST.colorLegend.unmatched ? ' ' + t('color.scheme.unmatched', { n: ST.colorLegend.unmatched }) : ''));
  }
  function applyColor(fid, quiet = false) {
    if (ST.fdOn) ctx.fdClear(true);   // one painting at a time: 4D, Compare or Color by
    const ix = index();
    const f = ix.fields.find((x) => x.id === fid);
    if (!f) { colorOff(); return; }
    ST.colorField = fid;
    ST.colorScheme = null;   // choosing a field starts from its own colors again
    const c = colorBy(ix, fid, { theme: theme() });
    ST.colorLegend = c;
    ST.picked = new Set();
    ST.viewer.setColors(c.colorOf);
    renderColor();
    if (!quiet) status(t('color.done', { field: fieldLabel(f), n: c.legend.filter((l) => !l.none).length }));
  }
  function colorOff() {
    ST.colorField = ''; ST.colorLegend = null; ST.picked = new Set(); ST.colorScheme = null;
    ST.viewer?.setColors(null);
    renderColor();
    status(t('color.cleared'));
  }
  function isolateValue(i, add) {
    const l = ST.colorLegend.legend[i];
    if (add) { if (ST.picked.has(i)) ST.picked.delete(i); else ST.picked.add(i); } else ST.picked = new Set([i]);
    const keys = [...ST.picked].flatMap((j) => ST.colorLegend.legend[j].keys);
    if (keys.length) ST.viewer.vis.isolate(keys); else ST.viewer.vis.showAll();
    ST.viewer.applyVisibility();
    ctx.treeView.sync();
    syncVis();
    renderColor();
    status(t('color.isolated', { n: keys.length, value: l.none ? t('color.none') : l.other ? t('color.other', { n: l.other }) : valueLabel(l.label) }));
  }

  return { theme, index, fieldLabel, renderColor, recolor, openScheme, applyColor, colorOff };
}
