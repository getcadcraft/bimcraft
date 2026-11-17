/* SPDX-License-Identifier: Apache-2.0 */
/**
 * option-compare.js: concept options side by side on area and cost (0.10 BK.170; session bk-r3-stages-10). No DOM:
 * tools/bimcraft-test/pack-test.mjs (node bin/test-bimcraft.mjs --pack) runs it in Node.
 *
 * The areas are the kept massing options' own (mass-options.js readOptionSets: footprint, gross floor area, envelope, volume).
 * The cost comes from the project's price table and nowhere else (cost5d.js: readCostSettings, priceItems, the 5D cost engine):
 *   the floor area is priced by the row whose words name the option's use ("office", "residential" …), else by a row whose words are
 *   "gross floor area" or "building mass" (unit m2 or sf = the gross floor area, m3 = the volume, item = one building);
 *   the envelope is priced by a row whose words are "envelope" or "facade" (m2 = perimeter x height).
 * Only price rows whose classes name IfcBuildingElementProxy are read (a row for slabs, walls or any element never prices a mass).
 * A part with no row has NO cost: it reads "No rate" and the option's total is left empty rather than a part sum presented as the whole.
 *
 *   optionCosts(options, rows) → Map(guid → { floor: { cost, rate, unit, qty } | null, envelope: {…} | null, total: number | null, missing: ['floor' | 'envelope'] })
 *       total = floor + envelope when both are priced; the floor cost alone when the table has no envelope row at all (then `envelopeAsked` is false
 *       for the whole comparison and no option is marked as missing it); null when the floor has no rate.
 *   compareOptions(sets, { rows, currency }) → [{ set, envelopeAsked, currency, options: [{ …option, cost: optionCosts entry, perM2: number | null }] }]
 *   optionTable(cmp, { t, fmtArea (m² → text), fmtLen (mm → text), money (n → text) }) → { title, head, rows, ids: [[guid]], note }
 */
import { priceItems } from './cost5d.js';
import { matchRow } from './carbon-factors.js';

const CLS = 'IfcBuildingElementProxy';
const FLOOR_WORDS = 'gross floor area building mass', ENVELOPE_WORDS = 'envelope facade';   // i18n-ignore: the words a price row is matched by (file data, as cost5d.js matches them)

export function optionCosts(options, rows = []) {
  const out = new Map();
  rows = (rows || []).filter((r) => (r.classes || []).includes(CLS.toUpperCase()));   // only a row made for building masses: a slab's or a wall's price never prices a mass
  const envelopeAsked = !!matchRow(rows, { material: ENVELOPE_WORDS, cls: CLS });
  const items = [];
  for (const o of options) {
    const use = String(o.use || '').trim();
    const floorWords = use && matchRow(rows, { material: use, cls: CLS }) ? use : FLOOR_WORDS;
    items.push({ id: o.guid + '|floor', guid: o.guid, name: o.name, cls: CLS, parts: [{ material: floorWords, area: o.gross_m2, volume: o.volume_m3, count: 1 }] });
    if (envelopeAsked) items.push({ id: o.guid + '|envelope', guid: o.guid, name: o.name, cls: CLS, parts: [{ material: ENVELOPE_WORDS, area: o.envelope_m2, count: 1 }] });
  }
  const priced = priceItems(items, rows);
  const line = (id) => { const l = priced.lines.find((x) => x.id === id); return l ? { cost: l.cost, rate: l.price, unit: l.unit, qty: l.qty } : null; };
  for (const o of options) {
    const floor = line(o.guid + '|floor'), envelope = envelopeAsked ? line(o.guid + '|envelope') : null;
    const missing = [...(floor ? [] : ['floor']), ...(envelopeAsked && !envelope ? ['envelope'] : [])];
    out.set(o.guid, { floor, envelope, total: missing.length ? null : Math.round((floor.cost + (envelope ? envelope.cost : 0)) * 100) / 100, missing });
  }
  out.envelopeAsked = envelopeAsked;
  return out;
}

export function compareOptions(sets, { rows = [], currency = '' } = {}) {
  return (sets || []).map((s) => {
    const costs = optionCosts(s.options, rows);
    return { set: s.set, envelopeAsked: costs.envelopeAsked, currency, options: s.options.map((o) => { const c = costs.get(o.guid); return { ...o, cost: c, perM2: c.total !== null && o.gross_m2 > 0 ? Math.round((c.total / o.gross_m2) * 100) / 100 : null }; }) };
  });
}

export function optionTable(cmp, { t, fmtArea, fmtLen, money }) {
  const norate = t('pack.opt.norate');
  const m = (v) => (v === null || v === undefined ? norate : money(v));
  const head = [t('pack.opt.h.option'), t('pack.opt.h.floors'), t('pack.opt.h.height'), t('pack.opt.h.footprint'), t('pack.opt.h.gross'), t('pack.opt.h.envelope'), t('pack.opt.h.floorcost'), ...(cmp.envelopeAsked ? [t('pack.opt.h.envcost')] : []), t('pack.opt.h.total'), t('pack.opt.h.perm2')];
  const rows = cmp.options.map((o) => [(o.option || o.name) + (o.current ? ' ' + t('pack.opt.current') : ''), String(o.floors), fmtLen(o.height), fmtArea(o.footprint_m2), fmtArea(o.gross_m2), fmtArea(o.envelope_m2),
    m(o.cost.floor?.cost ?? null), ...(cmp.envelopeAsked ? [m(o.cost.envelope?.cost ?? null)] : []), m(o.cost.total), m(o.perM2)]);
  const any = cmp.options.some((o) => o.cost.total !== null), all = cmp.options.every((o) => o.cost.total !== null);
  const used = [...new Set(cmp.options.flatMap((o) => [o.cost.floor?.rate, o.cost.envelope?.rate]).filter(Boolean))];
  const note = (all ? t('pack.opt.note.rates', { rows: used.join(', '), currency: cmp.currency || t('pack.opt.nocurrency') }) : any ? t('pack.opt.note.some', { rows: used.join(', ') }) : t('pack.opt.note.none'))
    + (cmp.envelopeAsked ? '' : ' ' + t('pack.opt.note.noenv')) + (cmp.options.some((o) => o.simplified) ? ' ' + t('pack.opt.note.simplified') : '');
  return { title: t('pack.opt.title', { set: cmp.set }), head, rows, ids: cmp.options.map((o) => [o.guid]), note };
}
