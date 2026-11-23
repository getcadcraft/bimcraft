/* SPDX-License-Identifier: Apache-2.0 */
/**
 * dwg-equipment.js — the equipment list hidden in a foodservice drawing's item tags. No DOM:
 * bin/test-bimcraft.mjs runs it in Node.
 *
 * Kitchen-design libraries (KCL's, for one) put every fact about a piece of
 * equipment into invisible attributes on its item tag: number (KCL-ITEM), quantity, category,
 * manufacturer, model, electrical and plumbing data, remarks. The printed schedule is drawn from
 * them. This reads the tags themselves:
 *
 *   const list = equipmentList(model, drawing);   // model: readDwg / dxf-model.js; null when the drawing has no such tags
 *   list.rows    [{ no, qty, category, mfr, model, remark, elec[], elecText, plumbText, elRemark, plRemark,
 *                   places: [{ x, y, sheets: [key] }], sheets: [key], clash }]
 *   list.sheets  [{ key, name, count }]  sheets that show tagged equipment, in tab order
 *   list.offSheet  rows placed only where no sheet looks (often leftovers from earlier jobs)
 *
 * A row is one item number with one set of data. Its quantity is the sum of its tags' quantities
 * (shelving tagged "5" in one place and "3" in another is scheduled as 8, as the printed schedule
 * does); `qtys` keeps the parts. The same number on different equipment gives two rows, both marked
 * `clash`. "Sheets" are worked out from each layout's viewports (what prints).
 * Only fields whose meaning was checked against a printed schedule are decoded: electrical
 * amps~kW~HP~volts~phase~cycle~direct~plug~NEMA (later fields are not shown), plumbing sizes.
 */

import { decodeElec, elecText, plumbSize } from './libitem.js';
import { csvCell as cell } from './util.js';   // shared helpers (0.11 PERF.74)

const TAG = 'KCL-ITEM';

export function equipmentList(db, drawing) {
  const model = (db.blocks || []).find((b) => /^\*model_space$/i.test(b.name));
  if (!model) return null;

  // Where each sheet looks into model space: its viewports' windows.
  const windows = [];
  for (const s of drawing?.spaces || []) {
    if (s.kind !== 'paper') continue;
    for (const v of s.viewports) {
      const k = v.h / v.viewHeight;
      if (!(k > 0)) continue;
      const hw = v.w / 2 / k, hh = v.h / 2 / k, c = Math.cos(-v.twist), sn = Math.sin(-v.twist);
      windows.push({ key: s.key, name: s.name, vx: v.vx, vy: v.vy, hw, hh, c, sn });
    }
  }
  const sheetsAt = (x, y) => {
    const out = [];
    for (const w of windows) {
      const dx = x - w.vx, dy = y - w.vy;
      const u = dx * w.c - dy * w.sn, v = dx * w.sn + dy * w.c;   // into the viewport's own axes
      if (Math.abs(u) <= w.hw && Math.abs(v) <= w.hh && !out.includes(w.key)) out.push(w.key);
    }
    return out;
  };

  const rows = new Map();
  let tags = 0;
  for (const e of model.entities) {
    if ((e.type !== 'INSERT' && e.type !== 'MINSERT') || !e.attribs?.length) continue;
    const a = {};
    for (const t of e.attribs) if (t.tag) a[t.tag.toUpperCase()] = clean(t.value);
    if (!(TAG in a) || !a[TAG]) continue;
    tags++;
    const row = {
      no: a[TAG], qty: a['KCL-QTY'] || '', category: a['KCL-CATEGORY'] || '',
      mfr: a['KCL-MFR-SCHDNAME'] || a['KCL-MFR'] || '', model: a['KCL-MODEL'] || '',
      remark: joinText(a['KCL-REMARK-USER-EQUIP'], a['KCL-REMARK']),
      elec: decodeElec(a['KCL-ELEC']),
      plumb: { cw: size(a['KCL-CW']), hw: size(a['KCL-HW']), dd: size(a['KCL-DD']), id: size(a['KCL-ID']), gas: size(a['KCL-GAS']) },
      elRemark: joinText(a['KCL-EL-REMARK-USER'], a['KCL-EL-REMARK']),
      plRemark: joinText(a['KCL-PL-REMARK-USER'], a['KCL-PL-REMARK']),
    };
    const key = [row.no, row.category, row.mfr, row.model, a['KCL-ELEC'] || '', a['KCL-CW'] || '', a['KCL-HW'] || ''].join('\u0000');
    let r = rows.get(key);
    if (!r) { r = { ...row, places: [] }; rows.set(key, r); }
    const p = e.insert || { x: 0, y: 0 };
    r.places.push({ x: p.x, y: p.y, qty: row.qty, sheets: sheetsAt(p.x, p.y) });
  }
  if (!tags) return null;

  const list = [...rows.values()];
  for (const r of list) {
    r.sheets = [...new Set(r.places.flatMap((p) => p.sheets))];
    r.qtys = r.places.map((p) => p.qty);
    const nums = r.qtys.map(Number);
    r.qty = r.qtys.length === 1 ? r.qtys[0] : nums.every((n, i) => r.qtys[i] !== '' && Number.isFinite(n)) ? String(nums.reduce((x, y) => x + y, 0)) : r.qtys.filter(Boolean).join(' + ');
    r.elecText = r.elec.map(elecText).join(' + ');
    r.plumbText = Object.entries(r.plumb).filter(([, v]) => v).map(([k, v]) => k.toUpperCase() + ' ' + v).join(', ');
  }
  // The same number used for different equipment where sheets show it (or everywhere, if none do).
  const byNo = new Map();
  for (const r of list) { if (!byNo.has(r.no)) byNo.set(r.no, []); byNo.get(r.no).push(r); }
  for (const same of byNo.values()) {
    const onSheets = same.filter((r) => r.sheets.length);
    const group = onSheets.length ? onSheets : same;
    if (group.length > 1) for (const r of group) r.clash = true;
  }
  list.sort((x, y) => x.no.localeCompare(y.no, undefined, { numeric: true }) || x.category.localeCompare(y.category));

  const order = (drawing?.spaces || []).filter((s) => s.kind === 'paper').map((s) => s.key);
  const sheets = order.map((key) => ({ key, name: drawing.spaces.find((s) => s.key === key).name, count: list.filter((r) => r.sheets.includes(key)).length }))
    .filter((s) => s.count);
  return { rows: list, tags, sheets, offSheet: list.filter((r) => !r.sheets.length).length };
}

/** The KCL field decoders live in libitem.js (shared with the library item format); re-exported here. */
export { decodeElec, elecText };
const size = plumbSize;

const clean = (s) => String(s ?? '').replace(/\p{C}/gu, '').trim();
const joinText = (...xs) => xs.map(clean).filter(Boolean).filter((x, i, a) => a.indexOf(x) === i).join(' ');

/** CSV for a spreadsheet: BOM added by the caller; cells starting = + - @ get a leading '. */
export function equipmentCsv(rows, sheetName) {
  const head = ['Item', 'Qty', 'Category', 'Manufacturer', 'Model', 'Electrical', 'Plumbing', 'Remarks', 'Electrical remarks', 'Plumbing remarks', 'Sheets', 'Placed'];   // i18n-ignore: CSV column headers other programs read (data file)
  const lines = [head, ...rows.map((r) => [r.no, r.qty, r.category, r.mfr, r.model, r.elecText, r.plumbText, r.remark, r.elRemark, r.plRemark,
    r.sheets.map(sheetName).join('; '), r.places.length])];
  return lines.map((l) => l.map(cell).join(',')).join('\r\n') + '\r\n';
}
