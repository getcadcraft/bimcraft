/* SPDX-License-Identifier: Apache-2.0 */
/**
 * credits-updates-ui.js: bimcraft.js's 4 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 bimcraft; no behaviour change).
 * mountCreditsUpdates(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { t } from './i18n.js';
import { licenseLabel } from './library-view.js';
import { el, num } from './ui-util.js';
import { withVariant } from './ifc-place.js';
import { renderEquipment } from './equip-view.js';
import { equipmentCsv } from './dwg-equipment.js';

export function mountCreditsUpdates(ctx) {
  const { ST, ui, status, guard, rememberItem } = ctx;

  // ---- library credits (file menu: the Credits button) ----
  function showCredits() {
    if (!ST.editor) return;
    const pls = ST.editor.placer().placements();
    const groups = new Map();
    for (const p of pls) {
      const k = p.uuid ? p.uuid + '@' + p.version : 'sha:' + p.sha256;
      if (!groups.has(k)) groups.set(k, { ...p, count: 0, numbers: [] });
      const g = groups.get(k); g.count++; g.numbers.push(p.itemNumber);
    }
    const list = [...groups.values()];
    const line = (g) => (g.attribution || (g.license ? t('credits.line.license', { name: g.equipment.Name || g.name, license: licenseLabel(g.license) }) : t(g.sourceFile ? 'credits.line.file.src' : 'credits.line.file', { name: g.equipment.Name || g.name, file: g.sourceFile })));
    const text = list.map(line).join('\n');
    const body = list.length ? el('table', { className: 'bc-equip-table' },
      el('thead', {}, el('tr', {}, [t('credits.col.item'), t('credits.col.version'), t('credits.col.license'), t('credits.col.attribution'), t('credits.col.usedas')].map((h) => el('th', { scope: 'col' }, h)))),
      el('tbody', {}, list.map((g) => el('tr', {},
        el('th', { scope: 'row' }, g.equipment.Name || g.name), el('td', {}, g.version ? t('lib.version', { version: g.version }) : '—'), el('td', {}, g.license ? licenseLabel(g.license) : t('credits.fromfile')),
        el('td', {}, line(g)), el('td', {}, g.numbers.join(', '))))))
      : el('p', { className: 'bc-muted' }, t('credits.none'));
    ctx.dialog(t('credits.title'), el('div', {}, el('p', { className: 'bc-muted' }, t('credits.intro')), body), list.length ? [
      el('button', { type: 'button', className: 'btn-plot btn-sm-cc', onClick: async () => {
        try { await navigator.clipboard.writeText(text); status(t('credits.copied')); } catch (e) { status(t('credits.copy.refused'), true); }
      } }, t('credits.copy')),
      el('button', { type: 'button', className: 'btn-line btn-sm-cc', onClick: () => {
        const head = ['Item', 'Qty', 'Name', 'Maker', 'Model', 'Library', 'Item id', 'Version', 'License', 'Attribution', 'Notes'];   // i18n-ignore: CSV column headers
        const rows = pls.map((p) => [p.itemNumber, p.quantity, p.equipment.Name || p.name, p.equipment.Maker || '', p.equipment.Model || '', p.library, p.uuid, p.version || '', p.license, p.attribution, p.notes]);
        ctx.download(ST.ifcName.replace(/\.ifc$/i, '') + ' library credits.csv',   // i18n-ignore: a file name
           '\ufeff' + [head, ...rows].map((r) => r.map(ctx.csvCell).join(',')).join('\r\n') + '\r\n', 'text/csv;charset=utf-8');
        status(t('credits.downloaded'));
      } }, t('credits.csv'))] : []);
  }

  // ---- check for updates (§6.3) ----
  async function checkUpdates() {
    if (!ST.editor) return;
    const pls = ST.editor.placer().placements().filter((p) => p.uuid && p.library === 'librarycraft');
    if (!pls.length) { status(t('updates.none')); return; }
    const refs = [...new Map(pls.map((p) => [p.uuid + '@' + p.version, { uuid: p.uuid, version: Number(p.version) }])).values()];
    status(t('updates.asking', { n: refs.length }));
    let results;
    try { results = await ctx.library.updates(refs); } catch (e) { status(e.message || t('updates.unreachable'), true); return; }
    status('');
    const nameOf = (r) => pls.find((p) => p.uuid === r.uuid)?.equipment.Name || pls.find((p) => p.uuid === r.uuid)?.name || r.uuid;
    const todo = results.filter((r) => r.status === 'newer');
    const STATUS = { current: t('updates.st.current'), newer: t('updates.st.newer'), withdrawn: t('updates.st.withdrawn'), unknown: t('updates.st.unknown') };
    const update = async (list, dlg) => {
      let n = 0;
      for (const r of list) {
        const got = await ctx.library.fetchItem(r.uuid, r.latest);
        const sha = got.item.provenance?.sha256 || '';
        for (const p of ST.editor.placer().placements().filter((x) => x.uuid === r.uuid && Number(x.version) === Number(r.version))) {
          // 0.7 W3.19: a placement of a variant stays that variant when the new version still has it, else it takes the default
          const row = p.variant && got.item.variants ? got.item.variants.rows.find((x) => x.id === p.variant) : null;
          const variant = row ? { id: row.id, name: row.name, values: row.values } : null;
          ST.editor.swapItem(p.id, got.item, { library: 'librarycraft', sha256: sha, variant, oldName: (p.equipment.Name || p.name) + ' ' + t('lib.version', { version: p.version }) }, { what: 'update' });
          rememberItem({ item: variant ? withVariant(got.item, { variant })[0] : got.item, meta: { library: 'librarycraft', sha256: sha, ...(variant ? { variant } : {}) } });
          n++;
        }
      }
      dlg.close();
      await ctx.rebuild(ST.selected);
      status(t('updates.done', { n }));
    };
    const body = el('table', { className: 'bc-equip-table' },
      el('thead', {}, el('tr', {}, [t('updates.col.item'), t('updates.col.inmodel'), t('updates.col.latest'), t('updates.col.status'), ''].map((h) => el('th', { scope: 'col' }, h)))),
      el('tbody', {}, results.map((r) => el('tr', {},
        el('th', { scope: 'row' }, nameOf(r)), el('td', {}, t('lib.version', { version: r.version })), el('td', {}, r.latest ? t('lib.version', { version: r.latest }) : '—'),
        el('td', {}, el('span', { className: 'bc-pill ' + (r.status === 'current' ? 'is-ok' : r.status === 'withdrawn' ? 'is-bad' : 'is-warn') }, STATUS[r.status] || r.status),
          r.change_kinds?.length ? el('span', { className: 'bc-sub' }, t('updates.changes', { kinds: r.change_kinds.join(', ') })) : null,
          r.license_changed ? el('span', { className: 'bc-sub' }, t('updates.license')) : null,
          r.withdrawn_reason ? el('span', { className: 'bc-sub' }, r.withdrawn_reason) : null),
        el('td', {}, r.status === 'newer' ? el('button', { type: 'button', className: 'btn-line btn-sm-cc', onClick: (e) => guard(() => update([r], e.target.closest('dialog'))) }, t('updates.update')) : null)))));
    ctx.dialog(t('updates.title'), body, todo.length > 1 ? [el('button', { type: 'button', className: 'btn-plot btn-sm-cc', onClick: (e) => guard(() => update(todo, e.target.closest('dialog'))) }, t('updates.all', { n: todo.length }))] : []);
  }

  // ---- equipment schedule from the IFC (same rows and CSV as a drawing's) ----
  function toggleIfcEquipment() {
    const show = ui.ifcEquip.hidden;
    if (show && !renderIfcEquipment()) return;
    ui.ifcEquip.hidden = !show;
    ctx.setPressed('equipment', show, 'lib-tool');
  }
  function renderIfcEquipment() {
    const list = ST.editor && ST.editor.placer().schedule();
    if (!list) { status(t('ifcequip.none')); ui.ifcEquip.hidden = true; ctx.setPressed('equipment', false, 'lib-tool'); return false; }
    const sheetName = (key) => ST.model.storeys.find((s) => 'storey:' + s.id === key)?.name || key;
    renderEquipment(ui.ifcEquip, list, {
      sheetName, sheetWord: 'storey',
      intro: t('ifcequip.intro', { n: list.tags, count: num(list.tags) }),
      onShow: (row) => { const id = row.places[0].id; ui.ifcEquip.hidden = true; ctx.setPressed('equipment', false, 'lib-tool'); ST.viewer.select(id); ctx.showProps(id); ctx.showTab('props'); },
      onCsv: (rows, label) => {
        const name = ST.ifcName.replace(/\.ifc$/i, '') + ' equipment.csv';   // i18n-ignore: a file name
        ctx.download(name, '\ufeff' + equipmentCsv(rows, sheetName), 'text/csv;charset=utf-8');
        status(t('equip.downloaded', { file: name, n: rows.length, count: num(rows.length) }));
      },
    });
    return true;
  }

  return { showCredits, checkUpdates, toggleIfcEquipment, renderIfcEquipment };
}
