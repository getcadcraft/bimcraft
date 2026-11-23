/* SPDX-License-Identifier: Apache-2.0 */
/**
 * fourd-ui.js: bimcraft.js's 10 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 bimcraft; no behaviour change).
 * mountFourD(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { inGroup, groupsOf, span, statusAt, groupState, groupKeys, dayText, parseTasks, matchTasks, templateCsv } from './ifc-4d.js';
import { el } from './ui-util.js';
import { t } from './i18n.js';
import { CATEGORICAL } from './ifc-props.js';
import { plan as planTasks, ganttSvg, readMspdi, readCsv, writeMspdi, writeCsv } from './schedule-io.js';

export function mountFourD(ctx) {
  const { ST, ui, status, treeView, pickKeys, index, colorOff, syncVis, download } = ctx;

  const fdView = () => (ST.fdTasks ? inGroup(ST.fdTasks, ST.fdGroup) : []);
  const fdGroupName = () => groupsOf(ST.fdTasks || []).find((g) => g.key === ST.fdGroup)?.name || '';
  /** Choose a stage or work package (or '' for every task): the slider, Play, the painting and the list follow it. */
  function fdSetGroup(key) {
    ST.fdGroup = key || '';
    const sp = span(fdView());
    if (sp && (ST.fdDay === null || ST.fdDay < sp.first - 1 || ST.fdDay > sp.last + 1)) ST.fdDay = sp.first;
    fdApply();
  }
  function renderFd() {
    if (!ui.fd) return;
    ui.fdSec.hidden = ST.mode !== 'ifc' || !ST.model;
    if (ui.fdSec.hidden || !ui.fdDetails.open) return;
    const kids = [el('p', { className: 'bc-muted' }, t('fd.intro')),
      el('div', { className: 'bc-find-row' },
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-4d-open': '', onClick: () => ui.fdInput.click() }, el('i', { className: 'bi bi-folder2-open', 'aria-hidden': 'true' }), ' ', t('fd.open')),
        el('button', { type: 'button', className: 'bc-linkbtn', 'data-4d-template': '', onClick: fdTemplate }, t('fd.template')),
        ST.fdTasks && ST.fdTasks.length ? el('button', { type: 'button', className: 'bc-linkbtn', 'data-4d-save-xml': '', onClick: () => fdSave('xml') }, t('fd.save.xml')) : null,
        ST.fdTasks && ST.fdTasks.length ? el('button', { type: 'button', className: 'bc-linkbtn', 'data-4d-save-csv': '', onClick: () => fdSave('csv') }, t('fd.save.csv')) : null)];
    if (ST.fdErrors.length) kids.push(el('p', { className: 'bc-muted' }, t('fd.problems', { n: ST.fdErrors.length })),
      el('ul', { className: 'bc-4d-errors', 'data-4d-errors': '' }, ST.fdErrors.slice(0, 20).map((e) => el('li', {}, t('fd.err.' + e.message, { line: e.line, task: e.task ?? '', field: e.field ?? '', value: e.value ?? '' })))));
    if (ST.fdTasks && ST.fdTasks.length) {
      const view = fdView(), groups = groupsOf(ST.fdTasks);
      const sp = span(view) || span(ST.fdTasks), st = statusAt(view, ST.fdDay);
      const n = { built: 0, progress: 0, waiting: 0 };
      for (const v of st.values()) n[v]++;
      const slider = el('input', { type: 'range', min: String(sp.first - 1), max: String(sp.last + 1), step: '1', value: String(ST.fdDay), 'aria-label': t('fd.date'), 'data-4d-day': '' });
      slider.addEventListener('input', () => { ST.fdDay = Number(slider.value); fdApply(); });
      const pal = CATEGORICAL[ctx.theme()];
      const untasked = index().ids.length - st.size;
      if (groups.length) {   // 0.6 WL.6: stages and work packages
        const sel = el('select', { className: 'select-cc bc-4d-group', 'data-4d-group': '', 'aria-label': t('fd.group') },
          el('option', { value: '' }, t('fd.group.all', { n: ST.fdTasks.length })),
          groups.map((g) => el('option', { value: g.key, selected: g.key === ST.fdGroup }, t(g.kind === 'stage' ? 'fd.group.stage' : (g.stage ? 'fd.group.package.in' : 'fd.group.package'), { name: g.name, stage: g.stage, n: g.tasks }))));
        sel.addEventListener('change', () => fdSetGroup(sel.value));
        const gs = groupState(view, ST.fdDay);
        kids.push(el('div', { className: 'bc-find-row' }, el('label', { className: 'bc-4d-grouplabel' }, el('span', {}, t('fd.group')), sel)),
          ST.fdGroup ? el('div', { className: 'bc-find-row' },
            el('span', { className: 'bc-muted', 'data-4d-group-state': '' }, t('fd.group.state', { ...gs })),
            el('button', { type: 'button', className: 'bc-linkbtn', 'data-4d-group-pick': '', onClick: () => { const k = groupKeys(view); if (k.length) pickKeys(k); } }, t('fd.group.pick'))) : null);
      }
      kids.push(
        el('div', { className: 'bc-4d-day' }, el('span', { className: 'bc-4d-date', 'data-4d-date': '' }, dayText(ST.fdDay)), slider),
        el('div', { className: 'bc-find-row' },
          el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-4d-play': '', 'aria-pressed': ST.fdPlay ? 'true' : 'false', onClick: fdToggle }, el('i', { className: 'bi ' + (ST.fdPlay ? 'bi-pause-fill' : 'bi-play-fill'), 'aria-hidden': 'true' }), ' ', t(ST.fdPlay ? 'fd.pause' : 'fd.play')),
          el('button', { type: 'button', className: 'bc-linkbtn', 'data-4d-clear': '', onClick: () => fdClear() }, t('fd.clear'))),
        el('ul', { className: 'bc-4d-legend', 'data-4d-legend': '' },
          el('li', { 'data-4d-n': 'built' }, el('span', { className: 'bc-sw is-own', 'aria-hidden': 'true' }), el('span', {}, t('fd.built')), el('span', { className: 'n' }, String(n.built))),
          el('li', { 'data-4d-n': 'progress' }, el('span', { className: 'bc-sw', style: 'background:' + pal[2], 'aria-hidden': 'true' }), el('span', {}, t('fd.progress')), el('span', { className: 'n' }, String(n.progress))),
          el('li', { 'data-4d-n': 'waiting' }, el('span', { className: 'bc-sw is-ghost', 'aria-hidden': 'true' }), el('span', {}, t('fd.waiting')), el('span', { className: 'n' }, String(n.waiting)))),
        el('p', { className: 'bc-muted' }, t('fd.untasked', { n: untasked })),
        el('ul', { className: 'bc-4d-tasks', 'data-4d-tasks': '' }, view.map((tk) => el('li', { className: ST.fdDay >= tk.start && ST.fdDay <= tk.finish ? 'is-now' : '' },
          el('button', { type: 'button', className: 'bc-linkbtn', 'data-4d-task': '', title: tk.name, onClick: () => { if (tk.keys.length) pickKeys(tk.keys); } }, tk.name),
          el('span', { className: 'n' }, t('fd.task.count', { n: tk.keys.length })),
          el('span', { className: 'when' }, t('fd.task.when', { start: dayText(tk.start), finish: dayText(tk.finish) }))))));
      const pl = planTasks(view);   // critical path on calendar days (schedule-io.js); the SVG's text is escaped there
      for (const e of pl.errors) kids.push(el('p', { className: 'bc-muted', 'data-4d-plan-error': '' }, t('fd.err.' + e.message, { line: 0, task: e.task ?? '', uid: e.uid ?? '' })));
      const gantt = el('div', { className: 'bc-4d-gantt', 'data-4d-gantt': '', style: 'overflow:auto' });
      gantt.innerHTML = ganttSvg(pl, { width: 760 });
      kids.push(el('p', { className: 'bc-muted' }, t('fd.gantt', { n: pl.critical.length })), gantt);
    } else if (ST.fdTasks) kids.push(el('p', { className: 'bc-muted' }, t('fd.none')));
    ui.fd.replaceChildren(...kids);
  }
  async function fdOpen(file) {
    let text = '';
    try { text = await file.text(); } catch (e) { status(t('fd.none'), true); return; }
    const isXml = /\.(xml|mspdi)$/i.test(file.name) || /^\s*(<\?xml|<Project)/.test(text);
    const p = isXml ? readMspdi(text) : /(^|,)\s*predecessors?\s*(,|\r|\n|$)/im.test(text.split(/\r?\n/)[0]) ? readCsv(text) : parseTasks(text);
    const m = matchTasks(index(), p.tasks);
    ST.fdErrors = [...p.errors, ...m.flatMap((tk) => tk.unmatched.map((r) => ({ line: r.line, message: r.unknownField ? 'nofield' : 'nomatch', field: r.field, value: r.value, task: tk.name })))].sort((a, b) => a.line - b.line);
    ST.fdTasks = m;
    ST.bimTotalsInvalidate();
    ST.fdGroup = '';
    ST.fdFile = file.name;
    if (!m.length) { ST.fdOn = false; renderFd(); status(t('fd.none'), true); return; }
    ST.fdDay = span(m).first;
    if (ST.colorField) colorOff();
    if (ST.cmpRes) ctx.clearCompare(true);
    ST.fdOn = true;
    fdApply();
    status(t('fd.loaded', { file: file.name, n: m.length }), false, true);
  }
  /** Paint the chosen day: in progress ochre, not started see-through, the rest as it is. */
  function fdApply() {
    if (!ST.fdOn || !ST.fdTasks || !ST.viewer) return;
    const view = fdView(), st = statusAt(view, ST.fdDay), pal = CATEGORICAL[ctx.theme()];
    const inG = ST.fdGroup ? new Set(groupKeys(view)) : null;   // a group plays as one: what is outside it goes see-through
    const colors = new Map(), solid = [];
    for (const k of index().keys) { const s2 = st.get(k); if (s2 === 'progress') colors.set(k, pal[2]); if (s2 !== 'waiting' && (!inG || inG.has(k))) solid.push(k); }
    ST.viewer.setColors(colors.size ? colors : null);
    if (solid.length === index().keys.length) ST.viewer.vis.showAll(); else ST.viewer.vis.isolate(solid, { ghost: true });
    ST.viewer.applyVisibility();
    treeView.sync();
    syncVis();
    renderFd();
    const n = { built: 0, progress: 0, waiting: 0 };
    for (const v of st.values()) n[v]++;
    if (!ST.fdPlay) status(ST.fdGroup ? t('fd.status.group', { group: fdGroupName(), date: dayText(ST.fdDay), ...n }) : t('fd.status', { date: dayText(ST.fdDay), ...n }));
  }
  function fdToggle() {
    if (ST.fdPlay) { clearInterval(ST.fdPlay); ST.fdPlay = 0; renderFd(); return; }
    const sp = span(fdView()) || span(ST.fdTasks);
    if (ST.fdDay > sp.last) ST.fdDay = sp.first - 1;
    ST.fdPlay = setInterval(() => {
      if (!ST.fdOn || ST.fdDay > sp.last) { clearInterval(ST.fdPlay); ST.fdPlay = 0; fdApply(); return; }
      ST.fdDay++;
      cancelAnimationFrame(ST.fdRaf);
      ST.fdRaf = requestAnimationFrame(fdApply);
    }, 150);
    renderFd();
  }
  function fdClear(quiet = false) {
    if (ST.fdPlay) { clearInterval(ST.fdPlay); ST.fdPlay = 0; }
    const was = ST.fdOn;
    ST.fdOn = false; ST.fdTasks = null; ST.fdErrors = []; ST.fdDay = null; ST.fdGroup = '';
    ST.bimTotalsInvalidate();
    if (was && ST.viewer) { ST.viewer.setColors(null); ST.viewer.vis.showAll(); ST.viewer.applyVisibility(); treeView.sync(); syncVis(); }
    renderFd();
    if (!quiet) status(t('fd.cleared'));
  }
  /** Save the loaded schedule with its links: MS Project XML (MSPDI) or CSV (SU.931). */
  function fdSave(kind) {
    if (!ST.fdTasks?.length) return;
    const base = (ST.fdFile || ST.ifcName || 'schedule').replace(/\.[^.]+$/, '');
    const name = base + (kind === 'xml' ? '.xml' : ' links.csv');   // i18n-ignore: a file name
    const tasks = ST.fdTasks.map(({ keys, unmatched, ...rest }) => rest);
    download(name, kind === 'xml' ? writeMspdi(tasks, { title: base }) : '\ufeff' + writeCsv(tasks), kind === 'xml' ? 'application/xml' : 'text/csv;charset=utf-8');
    status(t('fd.template.done', { name }));
  }
  function fdTemplate() {
    const name = ST.ifcName.replace(/\.ifc$/i, '') + ' tasks.csv';   // i18n-ignore: a file name
    const storeys = [...ST.model.storeys].sort((a, b) => (a.elevation ?? 0) - (b.elevation ?? 0)).map((s2) => s2.name).filter(Boolean);
    download(name, '\ufeff' + templateCsv(storeys), 'text/csv;charset=utf-8');
    status(t('fd.template.done', { name }));
  }
  ui.fdInput?.addEventListener('change', () => { const f = ui.fdInput.files[0]; ui.fdInput.value = ''; if (f) fdOpen(f); });
  ui.fdDetails?.addEventListener('toggle', () => { if (ui.fdDetails.open) renderFd(); });
  new MutationObserver(() => { if (ST.fdOn) fdApply(); }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-space'] });

  return { fdView, fdSetGroup, renderFd, fdOpen, fdApply, fdClear };
}
