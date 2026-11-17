/* SPDX-License-Identifier: Apache-2.0 */
/**
 * asset-symbol.js — an asset linked to a symbol, in the IFC (0.10 booklet row BK.23, session bk-r3-types-10). No DOM:
 * bin/test-bimcraft.mjs --eltypes runs it in Node. The rule is lib/symbols/symbol-link.js (formFor); this file is BimCraft's way of
 * keeping the links and the views' forms.
 *
 * Place an asset once (a Library item, a family, any element with a body). Link it to a symbol of a registered symbol set
 * (symbol-sets.js: electrical, plumbing). It stays ONE element: 3D shows its body, a plan shows its plan form, and a plan whose form is
 * "symbols" (the electrical layout) shows its symbol in its place. Schedules and counts count the element once.
 *
 * In the file:
 *   the links     property set CadCraft_SymbolLinks on IfcProject: Links (IfcText, JSON { format 'cadcraft-symbol-links 1',
 *                 links: { <element GlobalId>: { set, key, turn, id (the element's line number, a hint: checked against the GlobalId) } } }) — one read finds them all; a link whose element is gone is dropped
 *                 at the next change. Each linked element also carries CadCraft_SymbolLink (Set, Key) for other programs.
 *   the views     property set CadCraft_ViewForms on IfcProject: Forms (IfcText, JSON { 'plan:<level GlobalId>' | 'rcp:…' |
 *                 'callout:<id>': 'symbols' }); a view not named shows plan forms, as before 0.10.
 *
 *   readSymbolLinks(w) → [{ id, guid, storey, set, key, turn, name, cls, at: [x, y] mm in the level, angle (radians, the symbol's +y), room }]
 *   linkSymbol(elementIds, { set, key, turn }) → op (the elements' line numbers: any class of element) · unlinkSymbol(guids) → op ·
 *   turnSymbol(guids) → op (a quarter turn)   one undo step each
 *   readViewForms(w) → { viewKey: 'symbols' } · setViewForm(viewKey, 'plan' | 'symbols') → op
 *   viewKeyOf(kind, levelGuid, callout) → 'plan:<guid>' | 'rcp:<guid>' | 'callout:<id>'
 *   linkedSchedule(links, { levels, t, nameOf, roomOf }) → { title, head, rows, total, ids }   each linked element ONE row
 */
import { ModelWriter } from './model-write.js';
import { ids, val } from './ifc-util.js';
import { cleanLink, cleanForms, VIEW_FORMS, countLinked } from './symbol-link.js';
import { placedSources, syncPlacedRooms, readLocation } from './room-lookup.js';

export const LINKS_PSET = 'CadCraft_SymbolLinks', LINK_PSET = 'CadCraft_SymbolLink', FORMS_PSET = 'CadCraft_ViewForms';
export const LINKS_FORMAT = 'cadcraft-symbol-links 1';
const op = (fn) => (ed) => new ModelWriter(ed.W, ed.api, ed.mid).run((w) => { const r = fn(w); syncPlacedRooms(w); return r; });
const fail = (key) => { throw Object.assign(new Error(key), { key }); };
const project = (w) => ids(w.api, w.mid, 'IFCPROJECT')[0] || null;

function rawLinks(w) {
  const pj = project(w);
  const ps = pj ? w.readPset(pj, LINKS_PSET) : null;
  if (!ps?.Links) return {};
  try {
    const j = JSON.parse(ps.Links);
    const out = {};
    if (j && j.format === LINKS_FORMAT && j.links && typeof j.links === 'object') for (const [g, l] of Object.entries(j.links)) { const c = cleanLink(l); if (c && /^[0-9A-Za-z_$]{22}$/.test(g) && Object.keys(out).length < 20000) out[g] = { ...c, id: Number.isInteger(l.id) && l.id > 0 ? l.id : 0 }; }
    return out;
  } catch (e) { return {}; }
}
function writeLinks(w, links) {
  const pj = project(w);
  if (!pj) fail('model.err.gone');
  w.upsertPset(pj, LINKS_PSET, [['Links', 'IFCTEXT', JSON.stringify({ format: LINKS_FORMAT, links })]]);
}
/** The element of a link: its line number when that line still has the GlobalId, else looked for among every element (a file another program wrote again). */
function elementOf(w, guid, hint, cache) {
  if (hint) { let l = null; try { l = w.api.GetLine(w.mid, hint, false); } catch (e) { l = null; } if (l && val(l.GlobalId) === guid) return hint; }
  if (!cache.map) {
    cache.map = new Map();
    let list = [];
    try { list = ids(w.api, w.mid, 'IFCELEMENT', true); } catch (e) { list = []; }
    for (const id of list) { const g = val(w.api.GetLine(w.mid, id, false)?.GlobalId); if (g) cache.map.set(g, id); }
  }
  return cache.map.get(guid) ?? null;
}
/** Where an element stands in its level's plan (mm) and the way its +y points. */
function placeOf(w, line, storey) {
  if (!line?.ObjectPlacement?.value) return null;
  const M = w.api.GetWorldTransformMatrix(w.mid, line.ObjectPlacement.value);
  let sx = 0, sy = 0;
  if (storey) { const st = w.api.GetLine(w.mid, storey, false); if (st?.ObjectPlacement?.value) { const S = w.api.GetWorldTransformMatrix(w.mid, st.ObjectPlacement.value); sx = S[12]; sy = S[13]; } }
  return { at: [(M[12] - sx) * w.unitMm, (M[13] - sy) * w.unitMm], angle: Math.atan2(M[5], M[4]) };   // M[4], M[5]: the element's +y in the plan
}

export function readSymbolLinks(w) {
  const links = rawLinks(w), out = [];
  const guids = Object.keys(links);
  if (!guids.length) return out;
  const so = w.storeyOf(), cache = {};
  for (const g of guids) {
    const id = elementOf(w, g, links[g].id, cache);
    if (!id) continue;
    const line = w.api.GetLine(w.mid, id, false);
    const storey = so.get(id) ?? null;
    const pl = placeOf(w, line, storey);
    if (!pl) continue;
    const l = links[g];
    out.push({ id, guid: g, storey, set: l.set, key: l.key, turn: l.turn, name: val(line.Name) || '', cls: String(line.constructor?.name || ''), at: pl.at, angle: pl.angle + (l.turn * Math.PI) / 180, room: readLocation(w, id)?.room || '' });
  }
  return out;
}
placedSources().set('linked-assets', (w) => readSymbolLinks(w).map((d) => ({ id: d.id, storey: d.storey, at: d.at })));

const live = (w, links) => { const cache = {}; return Object.fromEntries(Object.entries(links).map(([g, l]) => [g, { ...l, id: elementOf(w, g, l.id, cache) }]).filter(([, l]) => l.id)); };

export function linkSymbol(guids, link) {   // guids: the elements' line numbers (see the header)
  const c = cleanLink(link);
  return op((w) => {
    if (!c) fail('symlink.err.symbol');
    const links = live(w, rawLinks(w)), idl = [];
    for (const id of [].concat(guids)) {
      let line = null;
      try { line = w.api.GetLine(w.mid, id, false); } catch (e) { line = null; }
      const g = val(line?.GlobalId);
      if (!g) continue;
      if (!line.ObjectPlacement?.value || !line.Representation?.value) fail('symlink.err.nobody');   // only a placed thing with a body has forms to choose between
      links[g] = { ...c, turn: links[g]?.turn ?? c.turn, id };
      w.upsertPset(id, LINK_PSET, [['Set', 'IFCLABEL', c.set], ['Key', 'IFCLABEL', c.key]]);
      idl.push(id);
    }
    if (!idl.length) fail('model.err.gone');
    writeLinks(w, links);
    return { id: idl[0], ids: idl };
  });
}
export function unlinkSymbol(guids) {
  return op((w) => {
    const links = live(w, rawLinks(w)), idl = [];
    for (const g of [].concat(guids)) {
      if (!links[g]) continue;
      const id = links[g].id;
      delete links[g];
      if (id) { w.upsertPset(id, LINK_PSET, [['Set', 'IFCLABEL', ''], ['Key', 'IFCLABEL', '']]); idl.push(id); }
    }
    writeLinks(w, links);
    return { id: idl[0] ?? null, ids: idl };
  });
}
export function turnSymbol(guids) {
  return op((w) => {
    const links = live(w, rawLinks(w)), idl = [];
    for (const g of [].concat(guids)) if (links[g]) { links[g] = { ...links[g], turn: (links[g].turn + 90) % 360 }; idl.push(links[g].id); }
    if (!idl.length) fail('symlink.err.none');
    writeLinks(w, links);
    return { id: idl[0], ids: idl };
  });
}

export const viewKeyOf = (kind, levelGuid, callout = null) => (callout ? 'callout:' + callout : (kind === 'rcp' ? 'rcp:' : 'plan:') + levelGuid);
export function readViewForms(w) {
  const pj = project(w);
  const ps = pj ? w.readPset(pj, FORMS_PSET) : null;
  if (!ps?.Forms) return {};
  try { return cleanForms(JSON.parse(ps.Forms)); } catch (e) { return {}; }
}
export function setViewForm(viewKey, form) {
  return op((w) => {
    if (!VIEW_FORMS.includes(form)) fail('symlink.err.form');
    const forms = readViewForms(w);
    if (form === 'symbols') forms[viewKey] = 'symbols'; else delete forms[viewKey];
    const clean = cleanForms(forms);
    if (form === 'symbols' && !clean[viewKey]) fail('symlink.err.view');
    const pj = project(w);
    if (!pj) fail('model.err.gone');
    w.upsertPset(pj, FORMS_PSET, [['Forms', 'IFCTEXT', JSON.stringify(clean)]]);
    return { id: null, ids: [] };
  });
}

export function linkedSchedule(links, { levels = [], t, nameOf = null, roomOf = null } = {}) {
  const once = [...new Map(links.map((l) => [l.guid, l])).values()];
  const sym = (l) => (nameOf && nameOf(l)) || l.key;
  const rows = once.map((l) => [sym(l), l.name, levels.find((v) => v.id === l.storey)?.name || '', (roomOf ? roomOf(l) : l.room) || '', '1']).sort((a, b) => a[0].localeCompare(b[0]) || a[2].localeCompare(b[2]) || a[1].localeCompare(b[1]));
  const kinds = countLinked(once);
  return { title: t('symlink.sch.title'), head: [t('symlink.sch.symbol'), t('symlink.sch.asset'), t('model.level'), t('res.el.sch.room'), t('model.sch.count.h')], rows,
    ids: once.map((l) => l.id), kinds, total: [t('model.sch.total'), '', '', '', String(once.length)], note: t('symlink.sch.note') };
}
