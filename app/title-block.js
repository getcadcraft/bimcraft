/* SPDX-License-Identifier: Apache-2.0 */
// title-block.js — a sheet's frame and title block as drawing items (0.9 SU.1123, session bim-views-09; sheet-formats.js has the data). 0.9 D8.17: or the person's own SVG design (title-svg.js).
import { svgTitleItems, parseTitleSvg, fieldKey } from './title-svg.js';
/**
 * A title block's lines and words on a sheet, and the room left for the views. `fields` = the values a sheet holds ({ key: text });
 * `labels` (key → words) names the built-in fields in the page's language.
 */
export function titleBlockItems(tb, { PW, PH, margin = 10, number = '', title = '', project: pj = '', date = '', fields = {}, labels = {}, madeWith = '' }) {
  const m = margin, items = [];
  if (tb?.place === 'svg') {   // 0.9 D8.17: the design is the whole frame and block; {{drawing-name}} / {{number}} are the sheet's own, the rest the words typed per sheet
    const p = parseTitleSvg(tb.svg);
    if (p.ok) {
      const vals = { project: pj, date, number, title, ...Object.fromEntries(Object.entries(fields).map(([k, v]) => [fieldKey(k), v])) };
      return svgTitleItems(p, { PW, PH, margin: m, vals });
    }
  }
  items.push({ t: 'line', pts: [[m, m], [PW - m, m], [PW - m, PH - m], [m, PH - m], [m, m]], w: 0.5, g: 0 });
  const vals = { project: pj, date, ...fields };
  if (!tb || tb.place !== 'right') {
    const strip = tb?.size || 18;
    items.push({ t: 'line', pts: [[m, m + strip], [PW - m, m + strip]], w: 0.35, g: 0 });
    items.push({ t: 'line', pts: [[PW - m - 40, m], [PW - m - 40, m + strip]], w: 0.35, g: 0 });
    items.push({ t: 'text', s: number, x: PW - m - 20, y: m + strip / 3, size: 18, bold: true });
    items.push({ t: 'text', s: title, x: m + 4, y: m + strip * 0.55, size: 12, align: 'left', bold: true });
    const extra = (tb?.fields || []).filter((f) => vals[f.key]).map((f) => (f.label || labels[f.key] || f.key) + ': ' + vals[f.key]);   // i18n-ignore: "label: value"
    items.push({ t: 'text', s: [pj, date, ...extra, madeWith].filter(Boolean).join('    '), x: m + 4, y: m + 4, size: 7, align: 'left', g: 0.25 });   // i18n-ignore: spacing between the strip's items
    return { items, room: [m, m + strip, PW - m, PH - m] };
  }
  // a column on the right: the fields from the top, the title and the sheet number at the foot
  const cw = tb.size, x0 = PW - m - cw;
  items.push({ t: 'line', pts: [[x0, m], [x0, PH - m]], w: 0.35, g: 0 });
  let y = PH - m;
  for (const f of tb.fields || []) {
    const h = f.size === 'large' ? 16 : 11;
    y -= h;
    items.push({ t: 'line', pts: [[x0, y], [PW - m, y]], w: 0.18, g: 0 });
    items.push({ t: 'text', s: f.label || labels[f.key] || f.key, x: x0 + 2, y: y + h - 3.5, size: 5.5, align: 'left', g: 0.35 });
    items.push({ t: 'text', s: String(vals[f.key] ?? ''), x: x0 + 2, y: y + 2.5, size: f.size === 'large' ? 10 : 8, align: 'left', bold: f.size === 'large' });
  }
  items.push({ t: 'line', pts: [[x0, m + 34], [PW - m, m + 34]], w: 0.35, g: 0 });
  items.push({ t: 'text', s: title, x: x0 + 2, y: m + 24, size: 10, align: 'left', bold: true });
  items.push({ t: 'text', s: number, x: x0 + cw / 2, y: m + 8, size: 18, bold: true });
  if (madeWith) items.push({ t: 'text', s: madeWith, x: x0 + 2, y: m + 2, size: 5, align: 'left', g: 0.4 });
  return { items, room: [m, m, x0, PH - m] };
}
