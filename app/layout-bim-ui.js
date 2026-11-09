/* SPDX-License-Identifier: Apache-2.0 */
/**
 * layout-bim-ui.js — BimCraft's Points tab (0.6 LC.22, session lc-structure): field points from the open model (column
 * centres, wall ends, anchor bolts, sleeves, the picked elements), numbered, written for a total station (CSV / TXT,
 * PNEZD / PENZD / XYZ — CivilCraft's and CadCraft's file), then an as-built file read back and compared point by point,
 * with the result on the 3D view and as a CSV report. layout-bim.js collects the points; layout/layout-points.js numbers,
 * writes, reads and compares. Nothing here changes the model.
 *
 *   mountFieldPoints(host) → { render(), changed(), picked(), state } | null without a pane
 *   host = { pane, W, editor() → IfcEditor | null, viewer(), selection() → [keys], status(text, isError),
 *            download(name, data, type), fileName(), place(p mm) → [x, y, z] in the scene, shown() }
 */
import * as THREE from 'three';
import { el } from './ui-util.js';
import { t } from './i18n.js';
import { KINDS, fieldPoints, inUnits, UNIT_MM } from './layout-bim.js';
import { formatPoints, parsePoints, numberPoints, comparePoints, compareTable, csv, POINT_FORMATS } from './layout/layout-points.js';
import { readGeoref } from './ifc-geo.js';
import { KEY_SPAN } from './ifc-model.js';
import { getDisplayUnits, smallNumber, smallMark } from './model-units.js';   // 0.9 GH.3-A: the as-built differences in the display unit

const OK = [0.09, 0.44, 0.23], OUT = [0.70, 0.07, 0.18], MISS = [0.45, 0.47, 0.50], DESIGN = [0.12, 0.28, 0.78];

export function mountFieldPoints(host) {
  if (!host.pane) return null;
  const S = { kinds: new Set(['column', 'wall', 'anchor', 'sleeve']), start: '1', prefix: '', coords: 'model', unit: 'm', format: 'PNEZD', file: 'csv',
    tol: '10', match: 'number', points: null, design: null, cmp: null, built: null, builtName: '', version: 0, made: -1, georef: null };
  let group = null;
  const ed = () => host.editor();
  const hide = () => { const v = host.viewer(); if (group && v) { group.traverse((o) => { o.geometry?.dispose(); o.material?.dispose?.(); }); v.scene.remove(group); group = null; v.render(); } };
  /** Small crosses at points (file mm): one LineSegments, a colour each. */
  function draw(list) {
    hide();
    const v = host.viewer();
    if (!v || !list.length) return;
    const pos = [], col = [];
    let lo = [Infinity, Infinity], hi = [-Infinity, -Infinity];
    for (const q of list) { lo = [Math.min(lo[0], q.p[0]), Math.min(lo[1], q.p[1])]; hi = [Math.max(hi[0], q.p[0]), Math.max(hi[1], q.p[1])]; }
    const r = Math.max(150, 0.015 * Math.hypot(hi[0] - lo[0], hi[1] - lo[1]));   // arms: 1.5 % of the points' spread, at least 150 mm
    for (const q of list) {
      for (const [dx, dy, dz] of [[r, 0, 0], [0, r, 0], [0, 0, r]]) {
        pos.push(...host.place([q.p[0] - dx, q.p[1] - dy, q.p[2] - dz]), ...host.place([q.p[0] + dx, q.p[1] + dy, q.p[2] + dz]));
        col.push(...q.c, ...q.c);
      }
      if (q.to) { pos.push(...host.place(q.p), ...host.place(q.to)); col.push(...q.c, ...q.c); }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
    const lines = new THREE.LineSegments(g, new THREE.LineBasicMaterial({ vertexColors: true, depthTest: false, transparent: true }));
    lines.renderOrder = 12;
    group = new THREE.Group();
    group.add(lines);
    v.scene.add(group);
    v.render();
  }
  const words = () => Object.fromEntries(KINDS.map((k) => [k, t('fieldpts.word.' + k)]));
  const selectedIds = () => host.selection().filter((k) => k < KEY_SPAN);

  function make() {
    const e = ed();
    if (!e) return;
    const kinds = new Set(S.kinds);
    if (kinds.has('element') && !selectedIds().length) kinds.delete('element');
    const r = fieldPoints(host.W, e.api, e.mid, { kinds, selection: selectedIds(), words: words() });
    S.georef = (() => { try { return readGeoref(e.api, e.mid); } catch { return null; } })();
    if (S.coords === 'survey' && S.georef?.kind !== 'map') S.coords = 'model';
    S.points = numberPoints(r.points, { start: Number(S.start) || 1, prefix: S.prefix });
    S.design = inUnits(S.points, { coords: S.coords, georef: S.georef, unitMm: r.unitMm, unit: S.unit });
    S.cmp = null; S.made = S.version;
    draw(S.points.map((p) => ({ p: [p.x, p.y, p.z], c: DESIGN })));
    host.status(S.points.length ? t('fieldpts.made', { n: S.points.length, ...Object.fromEntries(KINDS.map((k) => [k, r.counts[k]])) }) : t('fieldpts.none'));
    render();
  }
  function download() {
    if (!S.design?.length) return;
    const delim = S.file === 'txt' ? '\t' : ',';
    const text = formatPoints(S.design, { format: S.format, delimiter: delim });
    const name = base() + '-points.' + S.file;
    host.download(name, text, S.file === 'txt' ? 'text/plain' : 'text/csv');
    host.status(t('fieldpts.written', { n: S.design.length, file: name, format: S.format, unit: t('fieldpts.unit.' + S.unit), coords: t('fieldpts.coords.' + S.coords) }));
  }
  const base = () => String(host.fileName() || 'model').replace(/\.ifc$/i, '').replace(/[\\/:*?"<>|\u0000-\u001f]+/g, '-').slice(0, 80) || 'model';
  async function readBuilt(file) {
    if (!file) return;
    if (file.size > 20 * 1024 * 1024) { host.status(t('fieldpts.read.big'), true); return; }
    const text = await file.text();
    const r = parsePoints(text, { prefer: S.format === 'PENZD' ? 'PENZD' : 'PNEZD' });
    S.built = r; S.builtName = file.name;
    if (!r.points.length) { host.status(t('fieldpts.read.empty', { file: file.name }), true); S.cmp = null; render(); return; }
    compare();
    host.status(t('fieldpts.read.done', { n: r.points.length, file: file.name, format: r.format, bad: r.badCount }));
  }
  function compare() {
    if (!S.design || !S.built?.points.length) return;
    const tolMm = Number(String(S.tol).replace(',', '.'));
    const tol = (Number.isFinite(tolMm) && tolMm > 0 ? tolMm : 10) / (UNIT_MM[S.unit] || 1000);
    S.cmp = comparePoints(S.design, S.built.points, { tol, match: S.match });
    // on the view: each design point, and the as-built shot joined to it, green within the tolerance, red outside
    const k = UNIT_MM[S.unit] || 1000;
    const byN = new Map(S.points.map((p, i) => [p.n, i]));
    const list = [];
    for (const r of S.cmp.rows) {
      const i = byN.get(r.n);
      if (i === undefined) continue;
      const p = S.points[i];
      if (r.status === 'missing') { list.push({ p: [p.x, p.y, p.z], c: MISS }); continue; }
      const d = [r.dx * k, r.dy * k, (r.dz ?? 0) * k];
      const rot = S.coords === 'survey' ? null : d;     // survey offsets are on the map grid: drawn at the design point only
      list.push({ p: [p.x, p.y, p.z], c: r.status === 'ok' ? OK : OUT, to: rot ? [p.x + rot[0], p.y + rot[1], p.z + rot[2]] : null });
    }
    draw(list);
    render();
  }
  function report() {
    if (!S.cmp) return;
    // compareTable's columns: P, the as-built point, status, D, design N E Z, as-built N E Z, dE dN dZ, horizontal distance
    const head = ['P', t('fieldpts.col.built'), t('fieldpts.col.status'), 'D', 'N', 'E', 'Z', t('fieldpts.col.bn'), t('fieldpts.col.be'), t('fieldpts.col.bz'), 'dE', 'dN', 'dZ', t('fieldpts.col.dh')];   // i18n-ignore: column letters
    const rows = compareTable(S.cmp, { head, status: statusWords() });
    host.download(base() + '-as-built.csv', '﻿' + csv(rows), 'text/csv');
    host.status(t('fieldpts.report.done'));
  }
  const statusWords = () => ({ ok: t('fieldpts.st.ok'), out: t('fieldpts.st.out'), missing: t('fieldpts.st.missing'), extra: t('fieldpts.st.extra') });

  // ---- the tab ----
  const sel = (value, options, onchange, attrs = {}) => el('select', { className: 'select-cc fa-select', onchange: (e) => onchange(e.target.value), ...attrs }, ...options.map(([v, label]) => el('option', { value: v, selected: v === value }, label)));
  const field = (label, control) => el('label', { className: 'fa-field' }, el('span', {}, label), control);
  const input = (key, attrs = {}) => el('input', { type: 'text', className: 'bc-input fa-input', value: S[key], oninput: (e) => { S[key] = e.target.value; }, ...attrs });
  function render() {
    if (!host.shown()) return;
    if (!ed()) { host.pane.replaceChildren(el('p', { className: 'bc-muted' }, t('fieldpts.needs-ifc'))); return; }
    const nSel = selectedIds().length;
    const out = [el('p', { className: 'bc-muted' }, t('fieldpts.intro'))];
    out.push(el('div', { className: 'fa-row', 'data-fp-kinds': '' }, ...KINDS.map((k) => el('label', { className: 'fa-check' },
      el('input', { type: 'checkbox', checked: S.kinds.has(k), 'data-fp-kind': k, onchange: (e) => { if (e.target.checked) S.kinds.add(k); else S.kinds.delete(k); } }),
      ' ', k === 'element' ? t('fieldpts.kind.element', { n: nSel }) : t('fieldpts.kind.' + k)))));
    const survey = S.georef?.kind === 'map' || (() => { try { return readGeoref(ed().api, ed().mid)?.kind === 'map'; } catch { return false; } })();
    out.push(el('div', { className: 'fa-row' },
      field(t('fieldpts.f.start'), input('start', { inputMode: 'numeric', 'data-fp': 'start' })),
      field(t('fieldpts.f.prefix'), input('prefix', { 'data-fp': 'prefix' })),
      field(t('fieldpts.f.coords'), sel(S.coords, [['model', t('fieldpts.coords.model')], ...(survey ? [['survey', t('fieldpts.coords.survey')]] : [])], (v) => { S.coords = v; }, { 'data-fp': 'coords' })),
      field(t('fieldpts.f.unit'), sel(S.unit, ['m', 'mm', 'ft'].map((u) => [u, t('fieldpts.unit.' + u)]), (v) => { S.unit = v; }, { 'data-fp': 'unit' })),
      field(t('fieldpts.f.format'), sel(S.format, Object.keys(POINT_FORMATS).map((f) => [f, f]), (v) => { S.format = v; }, { 'data-fp': 'format' })),
      field(t('fieldpts.f.file'), sel(S.file, [['csv', t('fieldpts.file.csv')], ['txt', t('fieldpts.file.txt')]], (v) => { S.file = v; }, { 'data-fp': 'file' }))));
    out.push(el('div', { className: 'fa-head' },
      el('button', { type: 'button', className: 'btn-plot btn-sm-cc', onclick: make, 'data-fp-make': '' }, t('fieldpts.btn.make')),
      el('button', { type: 'button', className: 'btn-line btn-sm-cc', onclick: download, disabled: !S.design?.length, 'data-fp-download': '' }, t('fieldpts.btn.download'))));
    if (S.points && S.made !== S.version) out.push(el('p', { className: 'bc-muted fa-warn', 'data-fp-stale': '' }, t('fieldpts.stale')));
    if (S.design?.length) {
      const f = (v) => (Number.isFinite(v) ? (Math.abs(v) < 5e-4 ? 0 : v).toFixed(3) : '');   // no −0.000
      out.push(el('div', { className: 'fa-wrap' }, el('table', { className: 'bc-qto-table fa-table', 'data-fp-table': '' },
        el('thead', {}, el('tr', {}, ...['P', 'N', 'E', 'Z', 'D'].map((h, i) => el('th', { scope: 'col', className: i && i < 4 ? 'n' : '' }, h)))),   // i18n-ignore: column letters of the point file
        el('tbody', {}, ...S.design.slice(0, 500).map((p) => el('tr', {}, el('td', {}, p.n), el('td', { className: 'n' }, f(p.y)), el('td', { className: 'n' }, f(p.x)), el('td', { className: 'n' }, f(p.z)), el('td', {}, p.d)))))));
      if (S.design.length > 500) out.push(el('p', { className: 'bc-muted' }, t('fieldpts.more', { n: S.design.length - 500 })));
      // as-built
      const fileIn = el('input', { type: 'file', accept: '.csv,.txt,.pnezd,.xyz,text/plain,text/csv', className: 'visually-hidden', tabindex: '-1', 'data-fp-file': '', onchange: (e) => readBuilt(e.target.files?.[0]) });
      out.push(el('h3', { className: 'bc-h fa-h3' }, t('fieldpts.h.asbuilt')),
        el('p', { className: 'bc-muted' }, t('fieldpts.asbuilt.how')),
        el('div', { className: 'fa-row' },
          field(t('fieldpts.f.tol'), input('tol', { inputMode: 'decimal', 'data-fp': 'tol', onchange: () => compare() })),
          field(t('fieldpts.f.match'), sel(S.match, [['number', t('fieldpts.match.number')], ['nearest', t('fieldpts.match.nearest')]], (v) => { S.match = v; compare(); }, { 'data-fp': 'match' })),
          el('button', { type: 'button', className: 'btn-line btn-sm-cc', onclick: () => fileIn.click(), 'data-fp-read': '' }, t('fieldpts.btn.read')), fileIn));
      if (S.built?.bad?.length) out.push(el('p', { className: 'bc-muted fa-warn' }, t('fieldpts.read.bad', { n: S.built.badCount, first: S.built.bad[0].line })));
      if (S.cmp) {
        const s = S.cmp.summary, u = t('fieldpts.unit.' + S.unit);
        out.push(el('p', { className: 'bc-muted', 'data-fp-summary': '' }, t('fieldpts.summary', { file: S.builtName, matched: s.matched, ok: s.ok, out: s.out, missing: s.missing, extra: s.extra, max: s.maxH.toFixed(3), unit: u })),
          el('button', { type: 'button', className: 'btn-line btn-sm-cc', onclick: report, 'data-fp-report': '' }, t('fieldpts.btn.report')));
        const st = statusWords();
        out.push(el('div', { className: 'fa-wrap' }, el('table', { className: 'bc-qto-table fa-table', 'data-fp-cmp': '' },
          el('thead', {}, el('tr', {}, ...['P', t('fieldpts.col.status'), 'dE', 'dN', 'dZ', t('fieldpts.col.dh')].map((h, i) => el('th', { scope: 'col', className: i > 1 ? 'n' : '' }, h)))),   // i18n-ignore: column letters
          el('tbody', {}, ...S.cmp.rows.slice(0, 500).map((r) => el('tr', { className: 'fp-' + r.status },
            el('td', {}, r.n || r.built), el('td', {}, st[r.status]), ...[r.dx, r.dy, r.dz, r.dh].map((v) => el('td', { className: 'n' }, v === null ? '' : smallNumber(v * (UNIT_MM[S.unit] || 1000), getDisplayUnits())))))))));
        out.push(el('p', { className: 'bc-muted', 'data-fp-cmp-units': '' }, t('fieldpts.cmp.units.u', { unit: smallMark(getDisplayUnits()) })));
      }
    }
    host.pane.replaceChildren(...out);
  }
  return {
    render, state: S,
    changed() { S.version++; render(); },
    picked() { render(); },
    hide,
  };
}
