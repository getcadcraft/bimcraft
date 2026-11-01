/* SPDX-License-Identifier: Apache-2.0 */
/**
 * georef-ui.js — the three georeference dialogs (0.8 D8.9 round 3, session `d89b_PART_3`). The maths is crs-georef.js (shared); the IFC writing is
 * georef-model.js. Test hooks: dialog[data-georef-origin | data-georef-choice | data-georef-file].
 *
 *   openOriginDialog({ crs, fileUnitM, v4, near, onApply({ conv, fields, lonlat, trueNorth }), say }) → dialog      item 1: a model with no map conversion
 *     fields [data-geo-e] [data-geo-n] [data-geo-h] [data-geo-rot] [data-geo-scale] [data-geo-lat] [data-geo-lon]; buttons [data-geo-convert] [data-geo-apply]
 *   openChoiceDialog({ oldName, newCrs, c0, moved, problems, onOnly(), onMove() }) → dialog                          item 2: another system for a model on the map
 *     buttons [data-georef-only] [data-georef-move] [data-georef-cancel]
 *   decideFile({ file, fileCrs, modelCrs, box, say, near }) → Promise<{ action: 'reproject' | 'keep', from, problems } | null>      item 3: a cloud or terrain file
 *     asks which system when the file names none (remembered per file); buttons [data-georef-do] [data-georef-keep] [data-georef-pick]
 *   runReproject({ xy, from, to, file, say }) → { xy, bad, problems } | null          batched, a Worker when large, progress in the status line
 *   sendProblems(list)                                                                 the shell's Problems (window.ccProblems), source bimcraft.georef
 */
import { el } from './ui-util.js';
import { t } from './i18n.js';

const num = (v) => Number(String(v).trim().replace(',', '.'));
export function problemList(problems) {
  return el('ul', { className: 'bc-sub bc-georef-problems', 'data-georef-problems': '', role: 'status' }, ...(problems || []).map((p) => el('li', { className: 'bc-georef-' + p.severity, 'data-georef-problem': p.code }, p.text)));
}
let src = null;
export function sendProblems(list) {
  const P = typeof window !== 'undefined' ? window.ccProblems : null;
  if (!P?.source) return;
  src ||= P.source({ id: 'bimcraft.georef', kind: 'engine', label: t('georef.src') });
  src.set(list.map((p) => ({ ...p })));
}
const field = (id, label, input, help) => el('div', { className: 'bc-crs-row' }, el('label', { for: id }, label, ' '), input, help ? el('span', { className: 'bc-sub' }, help) : null);
const inp = (id, attr, value = '') => el('input', { type: 'text', className: 'bc-input', id, inputmode: 'decimal', autocomplete: 'off', spellcheck: 'false', value: String(value), [attr]: '' });
const unitName = (u) => (u === 'ftUS' ? 'ftUS' : u);
function shell(attr, title, ...kids) {
  const dlg = el('dialog', { className: 'bc-dialog bc-dialog-wide', 'aria-label': title, [attr]: '' }, el('h2', { className: 'bc-h' }, title), ...kids);
  dlg.addEventListener('close', () => dlg.remove());
  document.body.append(dlg);
  dlg.showModal();
  return dlg;
}

// ------------------------------------------------------------------ item 1
export async function openOriginDialog({ crs, fileUnitM = 0.001, v4 = true, near = null, onApply, say = () => {} }) {
  const [Z, C] = await Promise.all([import('./crs-georef.js'), import('./crs.js')]);
  if (!C.catalogLoaded()) await C.loadCatalog();
  const u = unitName(crs.unit), defScale = fileUnitM / (C.METRES_PER[crs.unit] || 1);
  const e = inp('bc-geo-e', 'data-geo-e'), n = inp('bc-geo-n', 'data-geo-n'), h = inp('bc-geo-h', 'data-geo-h', '0'), rot = inp('bc-geo-rot', 'data-geo-rot', '0'), sc = inp('bc-geo-scale', 'data-geo-scale', String(defScale));
  const lat = inp('bc-geo-lat', 'data-geo-lat', near ? near[1] : ''), lon = inp('bc-geo-lon', 'data-geo-lon', near ? near[0] : '');
  const out = el('div', { 'data-geo-out': '' });
  const paint = (list) => out.replaceChildren(problemList(list));
  const convert = () => {
    const r = Z.originFromLonLat(crs, num(lon.value), num(lat.value));
    if (r.error) { paint([r.error]); return; }
    e.value = String(r.eastings); n.value = String(r.northings); paint(r.problems);
  };
  const apply = () => {
    const r = Z.makeConversion({ crs, eastings: num(e.value), northings: num(n.value), height: num(h.value), rotationDeg: num(rot.value), scale: sc.value.trim() === '' ? undefined : num(sc.value), fileUnitM });
    if (r.error) { paint([r.error]); return; }
    paint(r.problems);
    onApply?.({ conv: r.conv, fields: Z.projectedCrsFields(crs), lonlat: r.lonlat, trueNorth: Z.trueNorth(r.conv, crs), problems: r.problems });
    dlg.close();
  };
  const dlg = shell('data-georef-origin', t('georef.origin.title'),
    el('p', { className: 'bc-sub' }, t('georef.origin.intro', { name: crs.name })),
    v4 ? null : el('p', { className: 'bc-sub', 'data-geo-2x3': '' }, t('georef.origin.intro2x3')),
    field('bc-geo-e', t('georef.origin.e', { unit: u }), e), field('bc-geo-n', t('georef.origin.n', { unit: u }), n),
    el('div', { className: 'bc-crs-row' }, el('span', { className: 'bc-sub' }, t('georef.origin.or')), ' ', el('label', { for: 'bc-geo-lat' }, t('georef.origin.lat'), ' '), lat, ' ', el('label', { for: 'bc-geo-lon' }, t('georef.origin.lon'), ' '), lon, ' ',
      el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-geo-convert': '', onClick: convert }, t('georef.origin.convert'))),
    field('bc-geo-h', t('georef.origin.h', { unit: u }), h),
    field('bc-geo-rot', t('georef.origin.rot'), rot, t('georef.origin.rot.help')),
    field('bc-geo-scale', t('georef.origin.scale'), sc, t('georef.origin.scale.help')),
    out,
    el('p', { className: 'bc-lib-actions' }, el('button', { type: 'button', className: 'btn-plot btn-sm-cc', 'data-geo-apply': '', onClick: apply }, t('georef.origin.apply')),
      el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-geo-cancel': '', onClick: () => dlg.close() }, t('georef.choice.cancel'))));
  e.focus();
  return dlg;
}

// ------------------------------------------------------------------ item 2
export async function openChoiceDialog({ oldName, newCrs, c0, moved, problems = [], onOnly, onMove }) {
  const Z = await import('./crs-georef.js');
  const f = (v, d = 3) => (Math.round(v * 10 ** d) / 10 ** d).toString();
  const ll = moved.before;
  const preview = t('georef.choice.preview', { e0: f(c0.Eastings), n0: f(c0.Northings), e1: f(moved.conv.Eastings), n1: f(moved.conv.Northings), r0: f(Z.rotationDeg(c0), 4), r1: f(Z.rotationDeg(moved.conv), 4), s0: f(c0.Scale, 9), s1: f(moved.conv.Scale, 9), lat: f(ll[1], 7), lon: f(ll[0], 7) });
  const dlg = shell('data-georef-choice', t('georef.choice.title'),
    el('p', { className: 'bc-sub' }, t('georef.choice.intro', { old: oldName, new: newCrs.name })),
    el('div', { className: 'bc-georef-choice' },
      el('p', {}, el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-georef-only': '', onClick: () => { dlg.close(); onOnly?.(); } }, t('georef.choice.only')), ' ', el('span', { className: 'bc-sub' }, t('georef.choice.only.help', { new: newCrs.name }))),
      el('p', {}, el('button', { type: 'button', className: 'btn-plot btn-sm-cc', 'data-georef-move': '', onClick: () => { dlg.close(); onMove?.(); } }, t('georef.choice.move')), ' ', el('span', { className: 'bc-sub' }, t('georef.choice.move.help', { new: newCrs.name })))),
    el('p', { className: 'bc-sub', 'data-georef-preview': '' }, preview),
    problemList(problems),
    el('p', { className: 'bc-lib-actions' }, el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-georef-cancel': '', onClick: () => dlg.close() }, t('georef.choice.cancel'))));
  return dlg;
}

// ------------------------------------------------------------------ item 3
function ask(attr, title, intro, buttons, problems = []) {
  return new Promise((done) => {
    let answer = null;
    const dlg = shell(attr, title, el('p', { className: 'bc-sub' }, intro), problemList(problems),
      el('p', { className: 'bc-lib-actions' }, ...buttons.map(([a, label, cls]) => el('button', { type: 'button', className: cls, [a]: '', onClick: () => { answer = a; dlg.close(); } }, label))));
    dlg.addEventListener('close', () => done(answer));
  });
}
/** Which system a file is in and what to do about it. null = the person closed the dialog (leave the file as it is). */
export async function decideFile({ file, fileCrs, modelCrs, box = null, say = () => {}, near = null }) {
  const [Z, P, C] = await Promise.all([import('./crs-georef.js'), import('./crs-pick.js'), import('./crs.js')]);
  if (!C.catalogLoaded()) await C.loadCatalog();
  if (!modelCrs) { say(t('georef.file.nomodel'), true); return { action: 'keep', problems: [] }; }
  const key = Z.fileKey(file);
  let from = fileCrs || Z.recallFileCrs(null, key);
  if (!from) {
    const a = await ask('data-georef-file', t('georef.file.ask.title'), t('georef.file.ask.intro', { file: file.name }),
      [['data-georef-pick', t('georef.file.ask.pick'), 'btn-plot btn-sm-cc'], ['data-georef-keep', t('georef.file.keep'), 'btn-line btn-sm-cc']]);
    if (a !== 'data-georef-pick') return a ? { action: 'keep', problems: [] } : null;
    const { openCrsPicker } = await import('./crs-pick-ui.js');
    from = await new Promise((res) => { let got = null; openCrsPicker({ mode: 'target', near, onPick: (c) => { got = c; } }).then((d) => d.addEventListener('close', () => res(got))); });
    if (!from) return null;
    Z.rememberFileCrs(null, key, from);
    say(t('georef.file.remembered', { name: from.name, file: file.name }), false, true);
  }
  if (P.sameCoordinates(from, modelCrs)) { say(t('georef.file.same', { file: file.name }), false, true); return { action: 'keep', from, problems: [] }; }
  const problems = box ? Z.extentProblems(from, modelCrs, box) : Z.shiftProblems(from, modelCrs);
  const a = await ask('data-georef-file', t('georef.file.title'), t('georef.file.intro', { file: file.name, from: from.name, to: modelCrs.name }) + ' ' + t('georef.file.help'),
    [['data-georef-do', t('georef.file.do'), 'btn-plot btn-sm-cc'], ['data-georef-keep', t('georef.file.keep'), 'btn-line btn-sm-cc']], problems);
  if (!a) return null;
  return { action: a === 'data-georef-do' ? 'reproject' : 'keep', from, problems };
}

export async function runReproject({ xy, from, to, file, say = () => {} }) {
  const [Z, proj4mod] = await Promise.all([import('./crs-georef.js'), import('proj4')]);
  let worker = null;
  try { worker = { url: new URL('./reproject-worker.js', import.meta.url).href, proj4Url: import.meta.resolve('proj4') }; } catch (e) { worker = null; }
  try {
    return await Z.reproject({ proj4: proj4mod.default, from, to, xy, worker, progress: (p) => say(t('georef.file.working', { file: file.name, pct: Math.round(p * 100) })) });
  } catch (err) {
    if (err?.name === 'AbortError') return null;
    say(t('georef.file.failed', { file: file.name, why: err?.message || String(err) }), true);
    return null;
  }
}

/**
 * Ground points from a survey / terrain file (res-ui.js readGroundFile → { points, lines, faces?, unit, zUnit?, crs? }) into the model's system.
 * → { r (the same shape, in the model's unit), problems, dropped } | null (cancelled or failed; the reason is in the status line).
 * A TIN with its own triangles (LandXML) cannot lose a point: if any point does not project, nothing is changed and it says so.
 */
export async function reprojectGround({ r, from, modelCrs, file, say = () => {} }) {
  const [Z, GC, C] = await Promise.all([import('./crs-georef.js'), import('./georef-cloud.js'), import('./crs.js')]);
  const all = [...r.points, ...r.lines.flat()];
  const out = await runReproject({ xy: GC.pointsXY(all), from, to: modelCrs, file, say });
  if (!out) return null;
  if (out.refused) { say(out.problems[0].text, true); return { r, problems: out.problems, dropped: 0, refused: true }; }
  if (out.bad && r.faces) { const p = Z.problem('dropped', 'error', { n: out.bad }); say(p.text, true); return { r, problems: [p], dropped: 0, refused: true }; }
  const per = (u) => C.METRES_PER[u] || 1, zFactor = per(r.zUnit || r.unit) / per(modelCrs.unit);
  let at = 0;
  const take = (list) => { const seg = out.xy.subarray(2 * at, 2 * (at + list.length)); at += list.length; return GC.applyPoints(list, seg, zFactor); };
  const points = take(r.points), lines = r.lines.map((l) => take(l));
  return { r: { ...r, points, lines, unit: modelCrs.unit, zUnit: modelCrs.unit, crs: modelCrs }, problems: out.problems, dropped: out.bad };
}
