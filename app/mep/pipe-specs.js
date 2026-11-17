/* SPDX-License-Identifier: Apache-2.0 */
/**
 * mep/pipe-specs.js — custom piping specifications (0.9.1, suggestion #1499: "set up your own custom piping specs … ASME BPE,
 * DIN, etc"). DOM-free and IMPORT-FREE (Node tests run it; another app can copy it byte for byte).
 *
 * A PIPE SPEC is a person's own size table: a name, the standard it follows (text), a material, an end / joint type, how its
 * fittings are made, and one row per size — the size's name, its outside diameter and its wall (or inside diameter), with an
 * optional DN, pressure rating and weight. Every length is MILLIMETRES. It is data (format `cadcraft-pipe-size-spec`, version 1;
 * NOT the Plant add-on's `cadcraft-pipespec`, which is a rule set over the built-in tables). The numbers are the person's:
 * nothing here knows any standard's table.
 *
 * A run drawn in a spec has the material `spec:<id>` and no class (mep/pipes.js hands those to specPipeSize below), so every part
 * of the MEP model that asks pipes.js for a size — the section, the fittings, the schedules, the IFC file, the sizing
 * calculations — reads the spec's outside and inside diameter. The specs in force are the open model's (setModelSpecs is called
 * from the model: mep/pipe-specs-model.js).
 *
 *   SPEC_FORMAT · SPEC_VERSION · SPEC_PREFIX · SPEC_LIMITS · JOINTS
 *   cleanSpec(raw) → { spec } | { error: key, fill }          untrusted input: a file, a paste, the model
 *   newSpec(name, taken) → an empty spec with a free id · duplicateSpec(spec, taken) → a copy with a free id and "(copy)"
 *   specToJson(spec) → text · specsFromJson(text) → { specs, errors }       one spec, or a file of several ({ specs: [...] })
 *   specToCsv(spec) → text · specFromCsv(text, { unit, name }) → { spec, notes } | { error, fill }
 *        one row per size; the first row names the columns (Size, DN, OD, Wall, ID, Pressure, Weight — any order, any case);
 *        lines "# key: value" before it carry the spec's own fields (name, standard, material, joint, roughness …).
 *        Numbers are mm unless `unit` is 'in' or a cell writes its unit (0.065 in, 0.065", 1.65 mm). Comma, semicolon or tab.
 *   setModelSpecs(list) · modelSpecs() · specById(id) · specStamp(id) (changes when its numbers change)
 *   isSpecMaterial(mat) · specMaterial(id) · specOfMaterial(mat) · specSizesFor(mat) · specPipeSize(mat, size)
 *        → { mat, cls: '', size, od, wall, id (INCHES, as mep/tables.js gives them), odMm, wallMm, idMm, dn, nps, label,
 *            metric: true, spec: id, roughnessMm } | null
 *   specBendRadius(p) → inches (the spec's elbow factor × its outside diameter; a drawing radius, not a fitting dimension)
 *   systemSpec(system) · setSystemSpecs(map) · systemSpecs()     the spec a service starts its runs in (kept in the model too)
 */

export const SPEC_FORMAT = 'cadcraft-pipe-size-spec';
export const SPEC_VERSION = 1;
export const SPEC_PREFIX = 'spec:';
export const SPEC_LIMITS = { specs: 60, sizes: 120, name: 80, text: 200, size: 20, bytes: 1048576 };
/** End / joint types (the app's language files name them: mep.spec.joint.<key>). */
export const JOINTS = ['buttweld', 'orbital', 'socketweld', 'threaded', 'flanged', 'clamp', 'grooved', 'press', 'solvent', 'compression', 'other'];
const IN = 25.4;
const ID_RE = /^[a-z0-9][a-z0-9-]{0,39}$/;
const text = (s, n) => String(s ?? '').replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, n);
const numOr = (v, d) => { const n = typeof v === 'string' ? Number(v.replace(',', '.')) : Number(v); return Number.isFinite(n) ? n : d; };
const r4 = (v) => Math.round(v * 10000) / 10000;
const err = (key, fill = {}) => ({ error: key, fill });

/** A slug for a spec's id from its name (ASCII letters and digits; "spec" when nothing is left). */
export function specSlug(name) {
  const s = String(name || '').normalize('NFKD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 32);
  return s || 'spec';
}
const freeId = (base, taken) => { let id = base, n = 2; const has = (x) => (taken instanceof Set ? taken.has(x) : (taken || []).includes(x)); while (has(id)) id = base.slice(0, 36) + '-' + n++; return id; };

/** One size row, checked: { name, dn, od, wall, id, pn, weight } (mm, kg/m) or an error. */
function cleanSize(raw, i) {
  if (!raw || typeof raw !== 'object') return err('mep.spec.err.row', { row: i + 1 });
  const name = text(raw.name ?? raw.size, SPEC_LIMITS.size);
  if (!name || /[|\n]/.test(name)) return err('mep.spec.err.sizename', { row: i + 1 });
  const od = numOr(raw.od, NaN);
  if (!(od >= 1 && od <= 5000)) return err('mep.spec.err.od', { row: i + 1, size: name });
  let wall = numOr(raw.wall, NaN);
  const idIn = numOr(raw.id, NaN);
  if (!(wall > 0) && idIn > 0) wall = (od - idIn) / 2;
  if (!(wall > 0) || !(od - 2 * wall > 0)) return err('mep.spec.err.wall', { row: i + 1, size: name });
  // a typed inside diameter that disagrees with OD − 2 × wall: said, not silently averaged
  if (numOr(raw.wall, NaN) > 0 && idIn > 0 && Math.abs(od - 2 * wall - idIn) > 0.06) return err('mep.spec.err.idwall', { row: i + 1, size: name });
  const dn = numOr(raw.dn, NaN), weight = numOr(raw.weight, NaN);
  return { size: { name, dn: dn > 0 && dn <= 5000 ? r4(dn) : null, od: r4(od), wall: r4(wall), id: r4(od - 2 * wall), pn: text(raw.pn ?? raw.pressure, 40), weight: weight > 0 && weight < 1e5 ? r4(weight) : null } };
}

/**
 * A spec from untrusted data. Sizes come out smallest first (by outside diameter); a spec may have no sizes yet (a template:
 * it draws nothing until rows are typed).
 */
export function cleanSpec(raw) {
  if (!raw || typeof raw !== 'object') return err('mep.spec.err.format');
  if (raw.format !== undefined && raw.format !== SPEC_FORMAT) return err('mep.spec.err.format');
  const name = text(raw.name, SPEC_LIMITS.name);
  if (!name) return err('mep.spec.err.name');
  const id = ID_RE.test(String(raw.id || '')) ? String(raw.id) : specSlug(name);
  const rows = Array.isArray(raw.sizes) ? raw.sizes : [];
  if (rows.length > SPEC_LIMITS.sizes) return err('mep.spec.err.many', { n: SPEC_LIMITS.sizes });
  const sizes = [], seen = new Set();
  for (let i = 0; i < rows.length; i++) {
    const c = cleanSize(rows[i], i);
    if (c.error) return c;
    if (seen.has(c.size.name)) return err('mep.spec.err.dupsize', { row: i + 1, size: c.size.name });
    seen.add(c.size.name);
    sizes.push(c.size);
  }
  sizes.sort((a, b) => a.od - b.od || a.wall - b.wall);
  const rough = raw.roughness === null || raw.roughness === undefined || raw.roughness === '' ? null : numOr(raw.roughness, NaN);
  if (rough !== null && !(rough >= 0 && rough <= 10)) return err('mep.spec.err.roughness');
  const elbow = numOr(raw.elbow, 1.5);
  if (!(elbow >= 0.5 && elbow <= 10)) return err('mep.spec.err.elbow');
  const ins = numOr(raw.insulation, 0);
  const src = raw.source && typeof raw.source === 'object' ? raw.source : {};
  const colour = /^#[0-9a-f]{6}$/i.test(String(raw.colour || '')) ? String(raw.colour).toLowerCase() : '';
  return { spec: {
    format: SPEC_FORMAT, version: SPEC_VERSION, id, name,
    standard: text(raw.standard, SPEC_LIMITS.text), material: text(raw.material, SPEC_LIMITS.name), joint: JOINTS.includes(raw.joint) ? raw.joint : 'other',
    service: /^[a-z]{1,12}$/.test(String(raw.service || '')) ? String(raw.service) : '', colour,
    roughness: rough === null ? null : r4(rough), insulation: ins > 0 && ins <= 1000 ? r4(ins) : 0,
    elbow: r4(elbow), tees: raw.tees !== false, reducers: raw.reducers !== false,
    note: text(raw.note, SPEC_LIMITS.text),
    source: { url: text(src.url, 300), edition: text(src.edition, SPEC_LIMITS.text), fetched: text(src.fetched, 20), url2: text(src.url2, 300) },
    check: raw.check !== false, builtin: text(raw.builtin, 40), template: raw.template === true && !sizes.length,
    sizes,
  } };
}
export function newSpec(name, taken = []) {
  const c = cleanSpec({ name: name || 'New spec', sizes: [] });
  return { ...c.spec, id: freeId(c.spec.id, taken), check: true };
}
export function duplicateSpec(spec, taken = [], suffix = ' (copy)') {
  const c = cleanSpec({ ...spec, id: '', name: text(spec.name, SPEC_LIMITS.name - suffix.length) + suffix, builtin: '', sizes: spec.sizes.map((s) => ({ ...s })) });
  return { ...c.spec, id: freeId(c.spec.id, taken) };
}

// ---- JSON ----
export const specToJson = (spec) => JSON.stringify(spec, null, 1);
export const specsToJson = (specs) => JSON.stringify({ format: SPEC_FORMAT + '-set', version: SPEC_VERSION, specs }, null, 1);
/** One spec, an array of specs, or { specs: [...] }: each cleaned; what fails is listed, never guessed. */
export function specsFromJson(textIn) {
  const s = String(textIn ?? '');
  if (s.length > SPEC_LIMITS.bytes) return { specs: [], errors: [err('mep.spec.err.big')] };
  let v;
  try { v = JSON.parse(s.charCodeAt(0) === 0xfeff ? s.slice(1) : s); } catch (e) { return { specs: [], errors: [err('mep.spec.err.json')] }; }
  const list = Array.isArray(v) ? v : Array.isArray(v?.specs) ? v.specs : [v];
  const specs = [], errors = [];
  for (const raw of list.slice(0, SPEC_LIMITS.specs)) { const c = cleanSpec(raw); if (c.error) errors.push({ ...c, fill: { ...c.fill, name: text(raw?.name, 60) } }); else specs.push(c.spec); }
  return { specs, errors };
}

// ---- CSV ----
/** Rows of cells (quotes round a cell with the delimiter; a doubled quote inside). The delimiter is guessed from the header row. */
function csvRows(src) {
  let s = String(src ?? '');
  if (s.charCodeAt(0) === 0xfeff) s = s.slice(1);
  const lines = s.split(/\r\n|\n|\r/);
  const head = lines.find((l) => l.trim() && !l.trim().startsWith('#')) || '';
  const count = (d) => { let n = 0, q = false; for (const ch of head) { if (ch === '"') q = !q; else if (ch === d && !q) n++; } return n; };
  const delim = ['\t', ';', ','].map((d) => [d, count(d)]).sort((a, b) => b[1] - a[1])[0];
  const d = delim[1] > 0 ? delim[0] : ',';
  const out = [];
  for (const line of lines) {
    if (!line.trim()) continue;
    if (line.trim().startsWith('#')) { out.push({ meta: line.trim().slice(1).trim() }); continue; }
    const cells = [];
    let cell = '', q = false;
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (q) { if (ch === '"') { if (line[i + 1] === '"') { cell += '"'; i++; } else q = false; } else cell += ch; continue; }
      if (ch === '"' && cell.trim() === '') { q = true; cell = ''; continue; }
      if (ch === d) { cells.push(cell.trim()); cell = ''; continue; }
      cell += ch;
    }
    cells.push(cell.trim());
    out.push({ cells });
  }
  return out;
}
const COLS = {
  name: ['size', 'name', 'nominal', 'nominal size', 'nps', 'tube size'], dn: ['dn', 'nominal diameter'],
  od: ['od', 'outside diameter', 'outer diameter', 'o.d.', 'da', 'd'], wall: ['wall', 'wall thickness', 'wt', 't', 's', 'thickness'],
  id: ['id', 'inside diameter', 'inner diameter', 'i.d.', 'di'], pn: ['pressure', 'pn', 'rating', 'pressure rating', 'class'], weight: ['weight', 'kg/m', 'weight kg/m', 'mass'],
};
const META = { name: 'name', standard: 'standard', reference: 'standard', material: 'material', joint: 'joint', end: 'joint', service: 'service', colour: 'colour', color: 'colour',
  roughness: 'roughness', insulation: 'insulation', elbow: 'elbow', tees: 'tees', reducers: 'reducers', note: 'note', source: 'source.url', edition: 'source.edition', fetched: 'source.fetched', id: 'id' };
/** A length cell → mm: "1.65", "1,65", "1.65 mm", "0.065 in", '0.065"', "1/2 in", '1-1/2"'. unit = what a bare number is. */
export function lengthMm(cell, unit = 'mm') {
  const s = String(cell ?? '').trim().toLowerCase();
  if (!s) return NaN;
  const m = /^(\d+(?:[.,]\d+)?|\d+\s*-\s*\d+\s*\/\s*\d+|\d+\s*\/\s*\d+)\s*(mm|in|inch|inches|"|″)?$/.exec(s);
  if (!m) return NaN;
  let v;
  const f = /^(?:(\d+)\s*-\s*)?(\d+)\s*\/\s*(\d+)$/.exec(m[1]);
  if (f) v = (Number(f[1]) || 0) + Number(f[2]) / Number(f[3]); else v = Number(m[1].replace(',', '.'));
  const u = m[2] ? (m[2] === 'mm' ? 'mm' : 'in') : unit;
  return u === 'in' ? v * IN : v;
}
export function specFromCsv(src, { unit = 'mm', name = '' } = {}) {
  if (String(src ?? '').length > SPEC_LIMITS.bytes) return err('mep.spec.err.big');
  const rows = csvRows(src), raw = { name, sizes: [], source: {} }, notes = [];
  let cols = null;
  for (const row of rows) {
    if (row.meta !== undefined) {
      const m = /^([A-Za-z ]+?)\s*[:=]\s*(.*)$/.exec(row.meta), k = m && META[m[1].trim().toLowerCase()];
      if (!k) continue;
      const v = m[2].trim();
      if (k.startsWith('source.')) raw.source[k.slice(7)] = v;
      else if (k === 'tees' || k === 'reducers') raw[k] = !/^(no|false|0|n)$/i.test(v);
      else if (k === 'roughness' || k === 'insulation') raw[k] = v === '' ? null : lengthMm(v, 'mm');
      else raw[k] = v;
      continue;
    }
    if (!cols) {
      cols = {};
      row.cells.forEach((c, i) => { const h = c.toLowerCase().replace(/\s*[\[(].*$/, '').trim(), unitIn = /\b(in|inch|inches)\b|"/.test(c.toLowerCase()) && !/mm/.test(c.toLowerCase()); const k = Object.keys(COLS).find((x) => COLS[x].includes(h)); if (k && !(k in cols)) cols[k] = { i, unit: /mm/.test(c.toLowerCase()) ? 'mm' : unitIn ? 'in' : null }; else if (c) notes.push({ key: 'mep.spec.note.column', fill: { column: c } }); });
      if (!('name' in cols) || !('od' in cols) || !('wall' in cols || 'id' in cols)) return err('mep.spec.err.columns');
      continue;
    }
    const cell = (k) => (k in cols ? row.cells[cols[k].i] ?? '' : '');
    const len = (k) => (k in cols ? lengthMm(cell(k), cols[k].unit || unit) : NaN);
    if (!cell('name') && !cell('od')) continue;
    raw.sizes.push({ name: cell('name'), dn: Number(String(cell('dn')).replace(/^dn\s*/i, '').replace(',', '.')), od: len('od'), wall: len('wall'), id: len('id'), pn: cell('pn'), weight: Number(String(cell('weight')).replace(',', '.')) });
  }
  if (!cols) return err('mep.spec.err.columns');
  if (!raw.sizes.length) return err('mep.spec.err.norows');
  if (!raw.name) raw.name = 'Imported spec';
  const c = cleanSpec(raw);
  return c.error ? c : { spec: c.spec, notes };
}
const csvCell = (v) => { const s = v === null || v === undefined ? '' : String(v); return /[",;\n\t]/.test(s) || /^[=+\-@]/.test(s) ? '"' + (/^[=+\-@]/.test(s) ? "'" : '') + s.replace(/"/g, '""') + '"' : s; };
export function specToCsv(spec) {
  const meta = [['name', spec.name], ['standard', spec.standard], ['material', spec.material], ['joint', spec.joint], ['service', spec.service], ['colour', spec.colour],
    ['roughness', spec.roughness === null ? '' : spec.roughness + ' mm'], ['insulation', spec.insulation ? spec.insulation + ' mm' : ''], ['elbow', spec.elbow], ['tees', spec.tees ? 'yes' : 'no'], ['reducers', spec.reducers ? 'yes' : 'no'],
    ['note', spec.note], ['source', spec.source.url], ['edition', spec.source.edition], ['fetched', spec.source.fetched]].filter(([, v]) => v !== '' && v !== null && v !== undefined);
  const lines = meta.map(([k, v]) => '# ' + k + ': ' + String(v).replace(/[\r\n]+/g, ' '));
  lines.push(['Size', 'DN', 'OD (mm)', 'Wall (mm)', 'ID (mm)', 'Pressure', 'Weight (kg/m)'].join(','));
  for (const s of spec.sizes) lines.push([s.name, s.dn ?? '', s.od, s.wall, s.id, s.pn, s.weight ?? ''].map(csvCell).join(','));
  return '﻿' + lines.join('\r\n') + '\r\n';
}

// ---- the specs in force (the open model's) ----
let SPECS = [], BY_ID = new Map(), SYSTEM_SPEC = {}, VER = 0;
/** Counts every change of the specs in force (the model reader knows by it whether someone else set them since it last did). */
export const specsVersion = () => VER;
const listeners = new Set();
/** Called with the new list whenever the specs in force change (mep/pipes.js keeps its material list in step). */
export const onSpecsChanged = (fn) => { listeners.add(fn); return () => listeners.delete(fn); };
export function setModelSpecs(list) {
  const next = [];
  for (const raw of Array.isArray(list) ? list.slice(0, SPEC_LIMITS.specs) : []) { const c = cleanSpec(raw); if (c.spec && !next.some((s) => s.id === c.spec.id)) next.push(c.spec); }
  SPECS = next; BY_ID = new Map(next.map((s) => [s.id, s])); VER++;
  for (const fn of listeners) fn(SPECS);
  return SPECS;
}
export const modelSpecs = () => SPECS.slice();
export const specById = (id) => BY_ID.get(String(id)) || null;
export const isSpecMaterial = (mat) => typeof mat === 'string' && mat.startsWith(SPEC_PREFIX);
export const specMaterial = (id) => SPEC_PREFIX + id;
export const specOfMaterial = (mat) => (isSpecMaterial(mat) ? specById(mat.slice(SPEC_PREFIX.length)) : null);
export const specSizesFor = (mat) => (specOfMaterial(mat)?.sizes || []).map((s) => s.name);
export function specPipeSize(mat, size) {
  const spec = specOfMaterial(mat), s = spec?.sizes.find((x) => x.name === String(size));
  if (!s) return null;
  const dn = s.dn ?? s.od;
  return { mat, cls: '', size: s.name, od: s.od / IN, wall: s.wall / IN, id: s.id / IN, odMm: s.od, wallMm: s.wall, idMm: s.id, dn, nps: dn / IN, label: s.name, metric: true, spec: spec.id, roughnessMm: spec.roughness, pn: s.pn, weight: s.weight };
}
export const specBendRadius = (p) => { const spec = specById(p.spec); return (spec ? spec.elbow : 1.5) * p.od; };
/** A short text that changes when a spec's numbers (or how its fittings are made) change: runs drawn in it are made again. */
export function specStamp(id) {
  const s = specById(id);
  return s ? [s.elbow, s.material, s.name, s.colour, ...s.sizes.map((x) => x.name + '=' + x.od + '/' + x.wall)].join(';') : '';
}
/** The spec each service (pipe system key) starts its runs in: { chw: 'bpe-tube', … }. Unknown specs are dropped. */
export function setSystemSpecs(map) {
  SYSTEM_SPEC = {}; VER++;
  if (map && typeof map === 'object') for (const [k, v] of Object.entries(map)) if (/^[a-z]{1,12}$/.test(k) && typeof v === 'string' && BY_ID.has(v)) SYSTEM_SPEC[k] = v;
  return SYSTEM_SPEC;
}
export const systemSpecs = () => ({ ...SYSTEM_SPEC });
export const systemSpec = (system) => { const s = specById(SYSTEM_SPEC[system]); return s && s.sizes.length ? s : null; };
