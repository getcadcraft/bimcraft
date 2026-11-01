/* SPDX-License-Identifier: Apache-2.0 */
/**
 * nest.js — cut-list nesting: the linear parts of a model cut from stock bars (0.4 D24). No DOM. Millimeters.
 *
 *   nestBars(pieces, { stock, kerf, trim, keep }) → { groups: [group], totals }
 *     pieces  [{ mark, profile, material, length, count }]   (the bill of materials' rows; plates are not nested here)
 *     stock   stock lengths to buy, e.g. [6000, 9000, 12000] (per profile you may pass { 'W16X26': [12000, 18000] })
 *     kerf    saw blade width taken by each cut (default 3)
 *     trim    end trim on every bar before the first cut (default 0)
 *     keep    a drop at least this long is kept as usable stock (default 500); shorter = scrap
 *   group = { profile, material, bars: [{ stock, cuts: [{ mark, length }], used, drop, scrap }], pieces, waste (0–1), bought,
 *             tooLong: [marks longer than every stock length] }
 *
 * Each profile and material is nested on its own. Pieces are cut first-fit decreasing into the bars already started; a new
 * bar starts as the longest stock length. Then every bar is shrunk to the shortest stock length its cuts
 * still fit in (a 12 m bar holding 7.5 m of cuts becomes a 9 m bar when 9 m is offered). A bar of n cuts loses n kerfs
 * (the last cut also needs one unless it ends exactly at the bar's end) and the trim. used + kerfs + trim + drop = stock.
 */

import { t } from './i18n.js';

const sum = (a) => a.reduce((s, v) => s + v, 0);

/** Material a set of cuts needs on one bar. */
export function barNeed(cuts, kerf, trim) {
  return trim + sum(cuts) + kerf * cuts.length;
}

export function nestBars(pieces, { stock = [6000, 12000], kerf = 3, trim = 0, keep = 500 } = {}) {
  const byProfile = new Map();
  for (const p of pieces) {
    if (!(p.length > 0) || !(p.count > 0)) continue;
    const k = p.profile.toUpperCase() + '|' + String(p.material).toUpperCase();
    if (!byProfile.has(k)) byProfile.set(k, { profile: p.profile, material: p.material, items: [] });
    for (let i = 0; i < p.count; i++) byProfile.get(k).items.push({ mark: p.mark, length: Math.round(p.length * 10) / 10 });
  }
  const groups = [];
  for (const g of byProfile.values()) {
    const lengths = (Array.isArray(stock) ? stock : stock[g.profile.toUpperCase()] || stock['*'] || [12000]).filter((v) => v > 0).sort((a, b) => a - b);
    const max = lengths[lengths.length - 1];
    const items = g.items.sort((a, b) => b.length - a.length || a.mark.localeCompare(b.mark, 'en', { numeric: true }));
    const bars = [], tooLong = [];
    for (const it of items) {
      if (barNeed([it.length], kerf, trim) - kerf > max) { tooLong.push(it.mark); continue; }
      let bar = bars.find((b) => barNeed([...b.cuts.map((c) => c.length), it.length], kerf, trim) <= b.stock + kerf);
      if (!bar) { bar = { stock: max, cuts: [] }; bars.push(bar); }   // filled as the longest bar, shrunk below
      bar.cuts.push(it);
    }
    for (const b of bars) {
      const need = barNeed(b.cuts.map((c) => c.length), kerf, trim);
      b.stock = lengths.find((L) => need <= L + kerf) || b.stock;          // the shortest stock length that still takes the cuts
      b.used = sum(b.cuts.map((c) => c.length));
      const kerfs = kerf * b.cuts.length;
      b.drop = Math.max(0, Math.round((b.stock - trim - b.used - kerfs) * 10) / 10);
      if (b.drop < 0.05) b.drop = 0;                                       // the last cut ends at the bar's end: no kerf after it
      b.scrap = b.drop < keep;
    }
    const bought = sum(bars.map((b) => b.stock)), used = sum(bars.map((b) => b.used));
    groups.push({ profile: g.profile, material: g.material, bars, pieces: items.length - tooLong.length, bought, used, waste: bought ? 1 - used / bought : 0, tooLong,
      stock: Object.fromEntries(lengths.map((L) => [L, bars.filter((b) => b.stock === L).length])) });
  }
  groups.sort((a, b) => a.profile.localeCompare(b.profile, 'en', { numeric: true }));
  const bought = sum(groups.map((g) => g.bought)), used = sum(groups.map((g) => g.used));
  return { groups, totals: { bars: sum(groups.map((g) => g.bars.length)), bought, used, waste: bought ? 1 - used / bought : 0 } };
}

/** The bill of materials' part rows → nesting pieces (linear parts only: plates are cut from sheet, not bars). */
export function piecesFromMarks(marks) {
  return marks.parts.filter((p) => p.type !== 'plate').map((p) => ({ mark: p.mark, profile: p.profile, material: p.material, length: p.length, count: p.count }));
}

/**
 * The cut list as tables (header row first): summary per profile (pieces, bars to buy by stock length, bought, used,
 * waste) with a total row, and every bar with its cuts and drop. Lengths in mm, bought / used in m.
 */
export function cutListTables(res) {
  const m = (v) => (v / 1000).toFixed(2), pc = (v) => (v * 100).toFixed(1);
  const summary = [['profile', 'material', 'pieces', 'bars', 'bought', 'used', 'waste', 'too-long'].map((k) => t('nest.col.' + k))];
  const bars = [['profile', 'bar', 'stock', 'cuts', 'drop', 'keep'].map((k) => t('nest.col.' + k))];
  for (const g of res.groups) {
    const buy = Object.entries(g.stock).filter(([, n]) => n).sort((a, b) => Number(b[0]) - Number(a[0])).map(([L, n]) => n + ' × ' + L).join(', ');
    summary.push([g.profile, g.material, String(g.pieces), buy, m(g.bought), m(g.used), pc(g.waste), g.tooLong.join(' ')]);
    g.bars.forEach((b, i) => bars.push([g.profile, String(i + 1), String(b.stock), b.cuts.map((c) => c.mark + ' ' + Math.round(c.length)).join(' + '), String(Math.round(b.drop)), b.scrap ? t('nest.scrap') : t('nest.kept')]));
  }
  summary.push([t('nest.total'), '', String(sum(res.groups.map((g) => g.pieces))), String(res.totals.bars), m(res.totals.bought), m(res.totals.used), pc(res.totals.waste), '']);
  return { summary, bars };
}
