/* SPDX-License-Identifier: Apache-2.0 */
/**
 * spec-model.js — the project's specification, written from the model (0.10 BK.47 Stage 5 working drawings; session
 * bk-r3-schedules-10). No DOM: bin/test-bimcraft.mjs --schedules runs it in Node.
 *
 * One section per type in use: each wall type, door type, window type, floor kind and room finish. A section's FACTS are read
 * from the model every time (the build-up layer by layer, sizes, how many and how much, the classification codes its elements
 * carry); its TEXT is the person's own words, kept in the file, and nothing else is ever put there: BimCraft writes no clause
 * of any standard. A section whose type is no longer in the model keeps its text in the file and is listed as not in use.
 *
 * Stored on IfcProject as the property set CadCraft_Specification: Format 'cadcraft-specification 1', Sections (IfcText, JSON
 * { format, version, sections: { <section id>: { text } } }).
 *
 *   specSections(w, snap, { t, fmtLen, fmtArea, finishes, sideOf, measure }) → [{ id, group, title, code, facts: [text…], text, count, ids, inUse }…]
 *   readSpecTexts(w) → { id: text } · saveSpecTextsOp(texts) → op (one undo step; '' removes a section's text)
 *   specMarkdown(sections, { t, title }) → Markdown for Documents from the model ({{specification}})
 */
import { ids as idsOf } from './ifc-util.js';
import { ModelWriter } from './model-write.js';
import { wallType, typeName } from './model-walls.js';
import { openingType, openingTypeName } from './model-openings.js';
import { wallSideOf } from './model-schedule.js';
import { addMeasures } from './quantities/rules.js';
import { readProjectClassification, effectiveCodes } from './classify-model.js';

export const SPEC_PSET = 'CadCraft_Specification';
export const SPEC_FORMAT = 'cadcraft-specification';
export const MAX_TEXT = 20000, MAX_SECTIONS = 2000;
export const GROUPS = ['wall', 'door', 'window', 'floor', 'finish'];
const projectOf = (w) => { try { return idsOf(w.api, w.mid, 'IFCPROJECT')[0] ?? null; } catch (e) { return null; } };
const tidyText = (s) => String(s ?? '').replace(/\r\n?/g, '\n').replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, ' ').trim().slice(0, MAX_TEXT);
const ID_RE = /^(wall|door|window|floor|finish):.{1,120}$/;

export function cleanSpecTexts(raw) {
  const out = {};
  let j = raw;
  if (typeof raw === 'string') { try { j = JSON.parse(raw); } catch (e) { return out; } }
  const src = j && typeof j === 'object' && j.sections && typeof j.sections === 'object' ? j.sections : {};
  for (const id of Object.keys(src).slice(0, MAX_SECTIONS)) { const text = tidyText(typeof src[id] === 'string' ? src[id] : src[id]?.text); if (ID_RE.test(id) && text) out[id] = text; }
  return out;
}
export function readSpecTexts(w) {
  const p = w ? projectOf(w) : null;
  if (!p) return {};
  let ps = null;
  try { ps = w.readPset(p, SPEC_PSET); } catch (e) { ps = null; }
  return ps && typeof ps.Sections === 'string' ? cleanSpecTexts(ps.Sections) : {};
}
export function saveSpecTextsOp(texts) {
  const clean = cleanSpecTexts({ sections: texts });
  return (ed) => {
    const w = new ModelWriter(ed.W, ed.api, ed.mid);
    return w.run(() => {
      const p = projectOf(w);
      if (!p) throw Object.assign(new Error('no project'), { key: 'sched.err.noproject' });   // i18n-ignore: the person reads the key's sentence
      w.upsertPset(p, SPEC_PSET, [['Sections', 'IFCTEXT', JSON.stringify({ format: SPEC_FORMAT, version: 1, sections: Object.fromEntries(Object.entries(clean).map(([k, v]) => [k, { text: v }])) })], ['Format', 'IFCLABEL', SPEC_FORMAT + ' 1']]);
      return { id: p, ids: [p], made: new Map(), sections: Object.keys(clean).length };
    });
  };
}

export function specSections(w, snap, { t, fmtLen, fmtArea, finishes = null, finishRows = null, sideOf = null, measure = null, matName = null } = {}) {
  const texts = readSpecTexts(w), out = [];
  // the classification codes the elements of a section share, per system the project uses ("Uniclass Pr_25_71; …")
  let systems = [], maps = [];
  try { const rec = readProjectClassification(w); systems = rec.systems || []; maps = systems.map((s) => effectiveCodes(w, s) || new Map()); } catch (e) { systems = []; }
  const codeOf = (ids) => systems.map((s, i) => { const set = new Set(ids.map((id) => maps[i].get(id)?.code || '')); set.delete(''); return set.size === 1 ? s + ' ' + [...set][0] : set.size > 1 ? s + ' ' + t('classify.varies') : ''; }).filter(Boolean).join('; ');
  const add = (id, group, title, ids, facts) => out.push({ id, group, title, code: codeOf(ids), facts: facts.filter(Boolean), text: texts[id] || '', count: ids.length, ids, inUse: true });

  // ---- wall types
  const wt = new Map();
  for (const x of snap.walls) { if (!wt.has(x.typeKey)) wt.set(x.typeKey, []); wt.get(x.typeKey).push(x); }
  for (const [key, list] of wt) {
    const ty = list[0].assembly || wallType(key), m = addMeasures(list.map((x) => wallSideOf(x, snap.openings, sideOf, measure)));
    const layers = (ty?.layers || []).map((l, i) => t('spec.fact.layer', { n: i + 1, mat: (matName && matName(l)) || l.mat || t('spec.fact.cavity'), t: fmtLen(l.t), fn: t('assembly.function.' + (l.function || 'structure')) }) + (l.core ? ' ' + t('spec.fact.core') : ''));
    add('wall:' + key, 'wall', ty ? typeName(ty) : (list[0].typeName || key), list.map((x) => x.id), [
      t('spec.fact.thickness', { t: fmtLen(list[0].t) }), ty?.lod != null ? t('spec.fact.lod', { lod: ty.lod }) : '', ...layers,
      t('spec.fact.walls', { n: list.length, len: fmtLen(list.reduce((s, x) => s + x.len, 0)), area: fmtArea(m.net) })]);
  }
  // ---- door and window types
  for (const kind of ['door', 'window']) {
    const by = new Map();
    for (const o of snap.openings.filter((x) => x.kind === kind)) { if (!by.has(o.typeKey)) by.set(o.typeKey, []); by.get(o.typeKey).push(o); }
    for (const [key, list] of by) {
      const sizes = new Map();
      for (const o of list) { const k = fmtLen(o.width) + ' x ' + fmtLen(o.height); sizes.set(k, (sizes.get(k) || 0) + 1); }
      add(kind + ':' + key, kind, openingTypeName(openingType(key) || { key }), list.map((o) => o.id), [
        t('spec.fact.count.' + kind, { n: list.length }), ...[...sizes].map(([s, n]) => t('spec.fact.size', { size: s, n })),
        t('spec.fact.marks', { list: list.map((o) => o.mark).filter(Boolean).sort((a, b) => String(a).localeCompare(String(b), undefined, { numeric: true })).join(', ') || '—' })]);
    }
  }
  // ---- floors by construction
  const fl = new Map();
  for (const f of snap.derived?.floors || []) { const k = f.kind + '|' + Math.round(f.thickness); if (!fl.has(k)) fl.set(k, []); fl.get(k).push(f); }
  for (const [k, list] of fl) add('floor:' + k.replace('|', '-'), 'floor', t('qty.floor.' + (list[0].kind === 'concrete' ? 'concrete' : 'wood')), list.map((f) => f.id), [t('spec.fact.thickness', { t: fmtLen(list[0].thickness) }), t('spec.fact.floors', { n: list.length })]);
  // ---- room finishes in use (finishes-model.js: the document and its measured rows)
  if (finishes && finishRows) {
    for (const g of finishRows.totals) {
      const f = finishes.finishes.find((x) => x.id === g.finish);
      if (!f) continue;
      out.push({ id: 'finish:' + f.id, group: 'finish', title: f.name, code: f.code || '', text: texts['finish:' + f.id] || '', count: g.rows, ids: [], inUse: true, facts: [
        t('spec.fact.kind', { kind: t('fin.kind.' + f.kind) }), f.thickness > 0 ? t('spec.fact.thickness', { t: fmtLen(f.thickness) }) : '',
        f.tile ? t('spec.fact.tile', { l: fmtLen(f.tile.length), w: fmtLen(f.tile.width), j: fmtLen(f.tile.joint) }) : '',
        f.substrate ? t('spec.fact.substrate', { name: f.substrate.name, t: fmtLen(f.substrate.thickness) }) : '',
        t('spec.fact.area', { area: fmtArea(g.net), n: g.rows })].filter(Boolean) });
    }
  }
  const rank = (s) => GROUPS.indexOf(s.group);
  out.sort((a, b) => rank(a) - rank(b) || (a.code || '￿').localeCompare(b.code || '￿', undefined, { numeric: true }) || a.title.localeCompare(b.title, undefined, { numeric: true }));
  // text written for a type the model no longer has: kept, and said
  for (const id of Object.keys(texts)) if (!out.some((s) => s.id === id)) out.push({ id, group: id.split(':')[0], title: id.slice(id.indexOf(':') + 1), code: '', facts: [], text: texts[id], count: 0, ids: [], inUse: false });
  return out;
}

const esc = (v) => String(v ?? '').replace(/([\\*_`|#[\]])/g, '\\$1');
export function specMarkdown(sections, { t, title = '' } = {}) {
  const lines = ['# ' + esc(title || t('spec.title')), '', t('spec.lede'), ''];
  for (const g of GROUPS) {
    const list = sections.filter((s) => s.group === g && s.inUse);
    if (!list.length) continue;
    lines.push('## ' + t('spec.group.' + g), '');
    for (const s of list) {
      lines.push('### ' + (s.code ? esc(s.code) + ' · ' : '') + esc(s.title), '');
      for (const f of s.facts) lines.push('- ' + esc(f));
      lines.push('');
      if (s.text) for (const para of s.text.split(/\n{2,}/)) lines.push(esc(para.replace(/\n/g, ' ')), '');
      else lines.push('*' + t('spec.text.none') + '*', '');
    }
  }
  const gone = sections.filter((s) => !s.inUse);
  if (gone.length) { lines.push('## ' + t('spec.group.unused'), ''); for (const s of gone) lines.push('### ' + esc(s.title), '', esc(s.text.replace(/\n+/g, ' ')), ''); }
  return lines.join('\n');
}
