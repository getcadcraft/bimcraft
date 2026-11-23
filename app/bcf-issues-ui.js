/* SPDX-License-Identifier: Apache-2.0 */
/**
 * bcf-issues-ui.js: bimcraft.js's 9 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 bimcraft; no behaviour change).
 * mountBcfIssues(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { toIfcPoint, toIfcDir, newGuid, fromIfcPoint, fromIfcDir, writeBcf, readBcf } from './bcf.js';
import { t } from './i18n.js';
import { MAX_PLANES, planeFromPoint } from './section-volume.js';
import { el } from './ui-util.js';
import * as WebIFC from './ifc/api.js';

export function mountBcfIssues(ctx) {
  const { ST, ui, status, guard, afterPick, showProps, models, accountName, authorOf, keepAuthor, clearProps, showMany, entryOf, applySection, sectionOff, download } = ctx;

  // i18n-ignore: the TopicStatus values written to the file; their labels come from the language file
  const STATUSES = [['Open', 'bcf.st.open'], ['In progress', 'bcf.st.progress'], ['Closed', 'bcf.st.closed']];
  /** GlobalId → key over every open model (built on first use, again after edits). */
  function guidIndex() {
    if (ST.guidKeys) return ST.guidKeys;
    ST.guidKeys = new Map();
    for (const m of models) for (const id of m.model.classOf.keys()) { const g = m.ifc.api.GetLine(m.model.modelID, id).GlobalId?.value; if (g) ST.guidKeys.set(g, m.model.keyBase + id); }
    return ST.guidKeys;
  }
  function guidOf(key) { const e = entryOf(key); if (!e) return null; try { return e.ifc.api.GetLine(e.model.modelID, key - e.model.keyBase).GlobalId?.value || null; } catch (err) { return null; } }
  const frameC = () => ST.refC || [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
  /** This view as a BCF viewpoint, in the first model's IFC coordinates. */
  function captureViewpoint() {
    const cam = ST.viewer.camera, C = frameC();
    cam.updateMatrixWorld();
    const e = cam.matrixWorld.elements, dir = [-e[8], -e[9], -e[10]], up = [e[4], e[5], e[6]];
    const v = ST.viewer.vis;
    const guids = (keys) => [...keys].map(guidOf).filter(Boolean);
    const visibility = v.isolated ? { defaultVisible: false, exceptions: guids(v.isolated) } : { defaultVisible: true, exceptions: guids(v.hidden) };
    // BCF holds one convex cut: a free-form volume of several boxes keeps its first (WL.1; the issue form says so)
    const S = ST.viewer.section, planes = S?.groups?.length > 1 ? S.groups[0].map((i) => ST.viewer.clip[i]) : (ST.viewer.clip || []);
    const clipping = planes.map((pl) => {
      const at = pl.normal.clone().multiplyScalar(-pl.constant).toArray();   // the plane's point nearest the origin
      return { location: toIfcPoint(C, at), direction: toIfcDir(C, pl.normal.clone().negate().toArray()) };   // BCF: towards the side cut away
    });
    let snapshot = null;
    try { const url = ST.viewer.snapshot(); const bin = atob(url.split(',')[1]); snapshot = Uint8Array.from(bin, (c) => c.charCodeAt(0)); } catch (err) { snapshot = null; }
    return { guid: newGuid(), camera: { kind: 'perspective', viewPoint: toIfcPoint(C, cam.position.toArray()), direction: toIfcDir(C, dir), up: toIfcDir(C, up), fov: cam.fov },
      selection: guids(ST.viewer.selection), visibility, clipping, snapshot };
  }
  /** Put an issue's view back: camera, visibility, pick, section (when it lines up with the model's axes). */
  function showIssue(tp0) {
    const vp = tp0.viewpoints[0];
    ST.currentIssue = tp0.guid;
    if (!vp) { renderIssues(); return; }
    const C = frameC(), idx = guidIndex();
    let missing = 0;
    const keys = (list) => list.map((g) => { const k = idx.get(g); if (k === undefined) missing++; return k; }).filter((k) => k !== undefined);
    const v = ST.viewer.vis;
    v.showAll();
    if (vp.visibility.defaultVisible) v.hide(keys(vp.visibility.exceptions)); else v.isolate(keys(vp.visibility.exceptions));
    ST.viewer.applyVisibility();
    ST.viewer.select(keys(vp.selection));
    afterPick();
    if (ST.viewer.selection.size > 1) showMany(); else if (ST.viewer.selection.size) showProps(ST.viewer.selected); else clearProps();
    let clipNote = '';
    if (vp.clipping.length) clipNote = applyBcfClipping(vp.clipping, C) ? '' : t('bcf.clip.skipped');
    else if (ST.cut) sectionOff();
    if (vp.camera) {
      const cam = ST.viewer.camera, c = vp.camera;
      const pos = fromIfcPoint(C, c.viewPoint), dir = fromIfcDir(C, c.direction);
      const center = ST.viewer.box.isEmpty() ? pos : ST.viewer.box.getCenter(cam.position.clone()).toArray();
      const along = Math.max(1, (center[0] - pos[0]) * dir[0] + (center[1] - pos[1]) * dir[1] + (center[2] - pos[2]) * dir[2]);
      if (c.kind === 'orthogonal') {   // no parallel camera here: back off so the same height of the model fills the view
        const d = (c.scale / 2) / Math.tan(cam.fov * Math.PI / 360);
        cam.position.set(pos[0] - dir[0] * d + dir[0] * along, pos[1] - dir[1] * d + dir[1] * along, pos[2] - dir[2] * d + dir[2] * along);
      } else { cam.position.set(...pos); cam.fov = Math.max(10, Math.min(120, c.fov || 60)); }
      cam.updateProjectionMatrix();
      ST.viewer.controls.target.set(cam.position.x + dir[0] * along, cam.position.y + dir[1] * along, cam.position.z + dir[2] * along);
      ST.viewer.controls.update();
      ST.viewer.render();
    }
    renderIssues();
    status(t('bcf.shown', { title: tp0.title || t('bcf.untitled') }) + (missing ? ' ' + t('bcf.missing', { n: missing }) : '') + (clipNote ? ' ' + clipNote : ''));
  }
  /**
   * One plane, or six making a box, along the model's axes → BimCraft's section plane or box. Any other set of planes (up to
   * MAX_PLANES, tilted or not) → a section volume: the whole model's box cut by those planes (WL.1). → false when too many.
   */
  function applyBcfClipping(planes, C) {
    const vplanes = planes.map((p) => ({ at: fromIfcPoint(C, p.location), n: fromIfcDir(C, p.direction).map((x) => -x) }));   // n: towards what is kept
    const axisOf = (n) => { const a = n.map(Math.abs), i = a.indexOf(Math.max(...a)); return a[i] > 0.999 ? i : -1; };
    const lo = ST.viewer.box.min.toArray(), hi = ST.viewer.box.max.toArray();
    if (vplanes.some((p) => axisOf(p.n) < 0) || (vplanes.length !== 1 && vplanes.length !== 6)) {
      if (!vplanes.length || vplanes.length > MAX_PLANES) return false;
      // viewer → IFC from the model's minimum corner: (x, y, z) → (x − lo.x, hi.z − z, y − lo.y); kept normal → outward
      const size = ST.viewer.sizeIfc(), box = { min: [0, 0, 0], max: [...size] };
      const extra = vplanes.map((p) => planeFromPoint([-p.n[0], p.n[2], -p.n[1]], [p.at[0] - lo[0], hi[2] - p.at[2], p.at[1] - lo[1]], box));
      ST.cut = { axis: 'box', cells: [{ box, tilt: {}, planes: extra }], cell: 0 };
      ST.cut.box = ST.cut.cells[0].box;
      applySection();
      return true;
    }
    if (vplanes.length === 1) {
      const p = vplanes[0], i = axisOf(p.n), name = { 1: 'top', 2: 'front', 0: 'side' }[i];
      ST.cut = { axis: name, offset: p.at[i] - lo[i], flip: p.n[i] > 0 };   // SECTION_AXES keep the low side unless flipped
      applySection();
      return true;
    }
    if (vplanes.length === 6) {
      const mn = [...lo], mx = [...hi];
      for (const p of vplanes) { const i = axisOf(p.n); if (p.n[i] > 0) mn[i] = p.at[i]; else mx[i] = p.at[i]; }
      // viewer (x, y up, z) → the box's IFC axes from the model's minimum corner (viewer3d.js setSectionBox)
      ST.cut = { axis: 'box', box: { min: [mn[0] - lo[0], hi[2] - mx[2], mn[1] - lo[1]], max: [mx[0] - lo[0], hi[2] - mn[2], mx[1] - lo[1]] } };
      applySection();
      return true;
    }
    return false;
  }
  function renderIssues() {
    if (!ui.issues) return;
    if (ST.mode !== 'ifc' || !ST.model) { ui.issues.replaceChildren(el('p', { className: 'bc-muted' }, t('bcf.needs.ifc'))); return; }
    const kids = [el('p', { className: 'bc-muted' }, t('bcf.intro')),
      el('div', { className: 'bc-issue-actions' },
        el('button', { type: 'button', className: 'btn-plot btn-sm-cc', 'data-bcf-new': '', onClick: () => { ST.issueForm = true; renderIssues(); ui.issues.querySelector('[data-bcf-f-title]')?.focus(); } }, t('bcf.new')),
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-bcf-open': '', onClick: () => ui.bcfInput.click() }, t('bcf.open')),
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-bcf-save': '', disabled: !ST.issues.length, onClick: () => guard(saveIssues) }, t('bcf.save', { n: ST.issues.length })))];
    if (ST.issueForm) {
      const title = el('input', { type: 'text', className: 'bc-input', 'data-bcf-f-title': '', maxLength: 200 });
      const comment = el('textarea', { className: 'bc-input', rows: 3, 'data-bcf-f-comment': '', maxLength: 4000 });
      const st = el('select', { className: 'select-cc', 'data-bcf-f-status': '' }, STATUSES.map(([v, k]) => el('option', { value: v }, t(k))));
      const who = el('input', { type: 'text', className: 'bc-input', value: authorOf(), 'data-bcf-f-author': '', maxLength: 120 });
      const form = el('form', { className: 'bc-issue-form', 'data-bcf-form': '' },
        el('label', {}, t('bcf.f.title'), title), el('label', {}, t('bcf.f.comment'), comment), el('label', {}, t('bcf.f.status'), st), el('label', {}, t('bcf.f.author'), who),
        el('p', { className: 'bc-lib-actions' }, el('button', { type: 'submit', className: 'btn-plot btn-sm-cc' }, t('bcf.f.create')),
          el('button', { type: 'button', className: 'btn-line btn-sm-cc', onClick: () => { ST.issueForm = false; renderIssues(); } }, t('bcf.f.cancel'))));
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!title.value.trim()) { status(t('bcf.need.title'), true); title.focus(); return; }
        keepAuthor(who.value.trim());   // SI.9: the account's own name is not kept as a typed one
        const now = new Date().toISOString().replace(/\.\d{3}Z$/, 'Z');
        const vp = captureViewpoint();
        const tp = { guid: newGuid(), title: title.value.trim(), status: st.value, type: 'Issue', author: who.value.trim() || accountName() || 'BimCraft', created: now, description: comment.value.trim(), comments: [], viewpoints: [vp] };
        if (comment.value.trim()) tp.comments.push({ guid: newGuid(), date: now, author: tp.author, text: comment.value.trim(), viewpoint: vp.guid });
        ST.issues.push(tp);
        ST.issueForm = false;
        ST.currentIssue = tp.guid;
        renderIssues();
        status(t('bcf.created', { title: tp.title }) + (ST.viewer.section?.groups?.length > 1 ? ' ' + t('bcf.clip.cells') : ''));
      });
      kids.push(form);
    }
    if (!ST.issues.length) kids.push(el('p', { className: 'bc-muted' }, t('bcf.none')));
    else kids.push(el('ul', { className: 'bc-issues', 'data-issue-list': '' }, ST.issues.map((tp) => {
      const snap = tp.viewpoints[0]?.snapshot;
      if (snap && !tp._url) tp._url = URL.createObjectURL(new Blob([snap], { type: snap[0] === 0xff ? 'image/jpeg' : 'image/png' }));
      const st = STATUSES.find(([v]) => v === tp.status);
      return el('li', {}, el('div', { className: 'bc-issue' + (tp.guid === ST.currentIssue ? ' is-current' : ''), 'data-issue': tp.guid },
        tp._url ? el('img', { src: tp._url, alt: '' }) : el('span', { className: 'bc-issue-noimg', 'aria-hidden': 'true' }),
        el('div', {}, el('p', { className: 'bc-issue-title' }, tp.title || t('bcf.untitled')),
          el('p', { className: 'bc-issue-meta' }, (st ? t(st[1]) : tp.status || '') + ' · ' + t('bcf.meta', { author: tp.author || '?', date: (tp.created || '').slice(0, 10) })),   // i18n-ignore: a separator
          el('button', { type: 'button', className: 'btn-line btn-sm-cc bc-issue-show', 'data-issue-show': tp.guid, onClick: () => showIssue(tp) }, t('bcf.show'))),
        el('button', { type: 'button', className: 'bc-forget', 'aria-label': t('bcf.delete', { title: tp.title }), title: t('bcf.delete', { title: tp.title }), onClick: () => {
          ST.issues = ST.issues.filter((x) => x !== tp); if (tp._url) URL.revokeObjectURL(tp._url); renderIssues();
        } }, el('i', { className: 'bi bi-x', 'aria-hidden': 'true' }))));
    })));
    ui.issues.replaceChildren(...kids);
  }
  async function saveIssues() {
    const proj = ST.ifc.api.GetLineIDsWithType(ST.model.modelID, WebIFC.IFCPROJECT);
    const projGuid = proj.size() ? ST.ifc.api.GetLine(ST.model.modelID, proj.get(0)).GlobalId?.value : null;
    const bytes = await writeBcf({ topics: ST.issues, file: { name: models[0]?.name || ST.ifcName, ifcProject: projGuid, date: null } });
    const name = (models[0]?.name || ST.ifcName).replace(/\.ifc$/i, '') + ' issues.bcf';
    download(name, bytes, 'application/octet-stream');
    status(t('bcf.saved', { file: name, n: ST.issues.length }));
  }
  ui.bcfInput?.addEventListener('change', () => {
    const f = ui.bcfInput.files[0];
    ui.bcfInput.value = '';
    if (!f) return;
    guard(async () => {
      let r;
      try { r = await readBcf(new Uint8Array(await f.arrayBuffer())); } catch (e) { throw Object.assign(new Error(t('bcf.unreadable', { file: f.name, why: e.message })), { userFacing: true }); }
      const known = new Set(ST.issues.map((x) => x.guid));
      for (const tp of r.topics) if (!known.has(tp.guid)) ST.issues.push(tp);
      renderIssues();
      status(t('bcf.read', { n: r.topics.length, file: f.name }) + (r.notes.length ? ' ' + t('bcf.read.notes', { n: r.notes.length, first: r.notes[0] }) : ''));
    });
  });
  window.bimcraftIssues = { list: () => ST.issues.map((x) => ({ guid: x.guid, title: x.title, status: x.status, viewpoints: x.viewpoints.length })), show: (g) => showIssue(ST.issues.find((x) => x.guid === g)), capture: captureViewpoint };   // for tests

  return { guidIndex, guidOf, frameC, renderIssues };
}
