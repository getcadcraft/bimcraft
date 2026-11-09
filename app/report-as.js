/* SPDX-License-Identifier: Apache-2.0 */
/**
 * report-as.js — "Report as" (0.9 D8.12-C, session `bim-views-09`): the op and the Properties field. The file side is
 * report-as-core.js (saved as the reported class, opened as the drawn one).
 *   setReportAs(guids, { cls, type, name }) → op   one undo step for every element; cls '' clears it. Refused: an element whose class
 *       cannot be reported as another (doors, windows, stairs, spaces: model.err.ra.element), a class or type the file's schema lacks
 *       (model.err.ra.class)
 *   readReported(w) → Map(GlobalId → { cls, type, name, drawnAs })
 *   mountReportAs({ modelUi, root, t, status, schema }) → { decorate(container, id, props) }   the "Report as" field in the right
 *       panel's Properties [data-ra]: a search box [data-ra-search] over the classes that fit the shape, the class [data-ra-class], its
 *       predefined type [data-ra-type], a name for USERDEFINED [data-ra-name], Apply [data-ra-apply], Clear [data-ra-clear]; what it is
 *       now [data-ra-now]. Schedules: Elements by reported class (model-ui.js schedules: key 'reported').
 */
import { op } from './model-ops.js';
import { REPORT_PSET, classesFor, targetOk, canReport, readReportAs } from './report-as-core.js';
import { el } from './ui-util.js';
import { ids } from './ifc-util.js';

const refuse = (key) => { throw Object.assign(new Error(key), { key }); };
const cname = (l) => String(l?.constructor?.name || '');
/** Any element by its GlobalId (ModelWriter.byGuid knows the classes BimCraft draws; a beam from another program is found here). */
function anyByGuid(w, g) {
  let list = [];
  try { list = ids(w.api, w.mid, 'IFCELEMENT', true); } catch (e) { return null; }
  for (const id of list) if (w.guidOf(id) === g) return id;
  return null;
}
export function readReported(w) {
  const out = new Map();
  for (const [id, r] of readReportAs(w.api, w.mid)) { const g = w.guidOf(id); if (g) out.set(g, r); }
  return out;
}
export function setReportAs(guids, spec) {
  const S = { cls: String(spec?.cls || ''), type: String(spec?.type || ''), name: String(spec?.name || '').replace(/\s+/g, ' ').trim().slice(0, 80) };
  const list = [...new Set(guids || [])];
  return op((w) => {
    if (!list.length) refuse('model.err.gone');
    const schema = w.v4 === false ? 'IFC2X3' : 'IFC4';
    if (S.cls && !targetOk(S.cls, S.type, schema)) refuse('model.err.ra.class');
    const was = readReportAs(w.api, w.mid);
    const out = [];
    for (const g of list) {
      const id = w.byGuid(g) ?? anyByGuid(w, g);
      if (!id) refuse('model.err.gone');
      const line = w.api.GetLine(w.mid, id, false);
      const prev = was.get(id);
      const drawn = prev?.drawnAs || cname(line);
      if (!canReport(drawn)) refuse('model.err.ra.element');
      const pt = line.PredefinedType?.value ?? line.PredefinedType ?? line.ShapeType?.value ?? '';
      const ot = line.ObjectType?.value ?? '';
      w.upsertPset(id, REPORT_PSET, S.cls
        ? [['Class', 'IFCLABEL', S.cls], ['PredefinedType', 'IFCLABEL', S.type], ['Name', 'IFCLABEL', S.type === 'USERDEFINED' ? S.name : ''],
          ['DrawnAs', 'IFCLABEL', drawn], ['DrawnType', 'IFCLABEL', prev?.drawnType ?? String(pt || '')], ['DrawnObjectType', 'IFCLABEL', prev ? prev.drawnObjType : String(ot || '')]]
        : [['Class', 'IFCLABEL', ''], ['PredefinedType', 'IFCLABEL', ''], ['Name', 'IFCLABEL', '']]);
      out.push(id);
    }
    return { id: out[0], ids: out };
  });
}

const pretty = (c) => String(c || '').replace(/^Ifc/, '');
export function mountReportAs({ modelUi, t, status, schema }) {
  let A = null;
  if (modelUi) A = modelUi.extend({
    schedules() {
      const ed = A.ed();
      if (!ed) return {};
      const map = readReportAs(ed.api, ed.mid);
      if (!map.size) return {};
      const by = new Map();
      for (const [, r] of map) { const k = r.cls + '|' + r.type + '|' + (r.type === 'USERDEFINED' ? r.name : '') + '|' + r.drawnAs; by.set(k, (by.get(k) || 0) + 1); }
      const rows = [...by].sort(([a], [b]) => a.localeCompare(b)).map(([k, n]) => { const [c, ty, nm, d] = k.split('|'); return [pretty(c), nm || ty, pretty(d), String(n)]; });
      return { reported: { title: t('model.ra.sched'), head: [t('model.ra.class'), t('model.ra.type'), t('model.ra.drawnas'), t('model.sch.count.h')], rows, total: [t('model.sch.total'), '', '', String(map.size)] } };
    },
    scheduleKeys(kind, i) {
      if (kind !== 'reported') return [];
      const ed = A.ed(), map = readReportAs(ed.api, ed.mid), k = A.kb();
      const rows = [...map];
      const sch = this.schedules().reported;
      const [c, ty, d] = [sch.rows[i][0], sch.rows[i][1], sch.rows[i][2]];
      return rows.filter(([, r]) => pretty(r.cls) === c && (r.type === 'USERDEFINED' ? r.name : r.type) === ty && pretty(r.drawnAs) === d).map(([id]) => k + id);
    },
    refresh() {
      const sel = A.root.querySelector('[data-msched-kind]'), ed = A.ed();
      if (!sel || !ed) return;
      let n = 0;
      try { n = readReportAs(ed.api, ed.mid).size; } catch (e) { n = 0; }
      const have = sel.querySelector('option[value="reported"]');
      if (n && !have) sel.append(el('option', { value: 'reported' }, t('model.ra.sched')));
      if (!n && have && sel.value !== 'reported') have.remove();
    },
  });
  /** The field under the element's name in Properties. */
  function decorate(container, id, p) {
    container.querySelector('[data-ra]')?.remove();
    const ed = A?.ed();
    if (!ed || !p?.guid) return;
    const map = readReportAs(ed.api, ed.mid), cur = map.get(id) || null;
    const drawn = cur?.drawnAs || p.cls;
    if (!canReport(drawn)) return;
    const sch = schema();
    const all = classesFor(drawn, sch);
    const search = el('input', { type: 'search', className: 'bc-input', 'data-ra-search': '', placeholder: t('model.ra.search'), 'aria-label': t('model.ra.search') });
    const cls = el('select', { className: 'select-cc', 'data-ra-class': '', 'aria-label': t('model.ra.class') });
    const type = el('select', { className: 'select-cc', 'data-ra-type': '', 'aria-label': t('model.ra.type') });
    const name = el('input', { type: 'text', className: 'bc-input', 'data-ra-name': '', maxLength: 80, placeholder: t('model.ra.name'), 'aria-label': t('model.ra.name'), value: cur?.name || '' });
    const fillClasses = () => {
      const q = search.value.trim().toLowerCase();
      const hits = all.filter((c) => !q || c.cls.toLowerCase().includes(q) || c.types.some((x) => x.toLowerCase().includes(q)) || t('model.ra.cls.' + c.cls).toLowerCase().includes(q));
      cls.replaceChildren(el('option', { value: '' }, t('model.ra.none', { cls: pretty(drawn) })), ...hits.map((c) => el('option', { value: c.cls }, pretty(c.cls) + ' — ' + t('model.ra.cls.' + c.cls))));
      cls.value = cur && hits.some((c) => c.cls === cur.cls) ? cur.cls : (hits.length && q ? hits[0].cls : '');
      fillTypes();
    };
    const fillTypes = () => {
      const c = all.find((x) => x.cls === cls.value);
      type.replaceChildren(...(c?.types.length ? c.types : ['']).map((x) => el('option', { value: x }, x || t('model.ra.notype'))));
      if (cur && c && c.types.includes(cur.type)) type.value = cur.type;
      type.disabled = !c || !c.types.length;
      name.hidden = type.value !== 'USERDEFINED';
    };
    search.addEventListener('input', fillClasses);
    cls.addEventListener('change', fillTypes);
    type.addEventListener('change', () => { name.hidden = type.value !== 'USERDEFINED'; });
    const commit = (spec, label) => { let why = null; A.commit(setReportAs([p.guid], spec), { label, verb: t('model.verb.changed'), onError: (e, w) => { why = w; } }); if (why) status(why, true); else status(spec.cls ? t('model.ra.done', { name: p.name || '#' + id, cls: pretty(spec.cls), type: spec.type }) : t('model.ra.cleared', { name: p.name || '#' + id })); };
    const apply = el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-ra-apply': '', onClick: () => { if (!cls.value) { commit({ cls: '' }, t('model.ra.label')); return; } commit({ cls: cls.value, type: type.disabled ? '' : type.value, name: name.value }, t('model.ra.label')); } }, t('model.ra.apply'));
    const clear = el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-ra-clear': '', disabled: !cur, onClick: () => commit({ cls: '' }, t('model.ra.label')) }, t('model.ra.clear'));
    const now = el('p', { className: 'bc-muted', 'data-ra-now': cur ? cur.cls : '' }, cur ? t('model.ra.now', { cls: pretty(cur.cls), type: cur.type === 'USERDEFINED' ? cur.name || cur.type : cur.type, drawn: pretty(cur.drawnAs) }) : t('model.ra.hint', { cls: pretty(drawn) }));
    const box = el('details', { className: 'bc-set', 'data-ra': '', open: !!cur }, el('summary', {}, t('model.ra.label')), now, search, el('div', { className: 'bc-ra-row' }, cls, type), name, el('p', { className: 'bc-lib-actions' }, apply, clear));
    fillClasses();
    const at = container.querySelector('[data-model-props]') || container.querySelector('.bc-prop-name');
    if (at) at.after(box); else container.prepend(box);
  }
  return { decorate };
}
