/* SPDX-License-Identifier: Apache-2.0 */
/**
 * vis-agents-ui.js: bimcraft.js's 6 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 bimcraft; no behaviour change).
 * mountVisAgents(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { t } from './i18n.js';
import { el } from './ui-util.js';

export function mountVisAgents(ctx) {
  const { ST, $, ui, status, boxRoundPick, settings, settingsDlg, fileHost, clearProps } = ctx;

  function visWhyNot(name) {
    if (!ST.viewer || ST.mode !== 'ifc') return t('vis.need.pick');
    if (name === 'all') return ST.viewer.vis.plain ? t('vis.nothing.hidden') : '';
    return ST.viewer.selection.size ? '' : t('vis.need.pick');
  }
  function syncVis() {
    for (const b of ctx.visButtons) {
      const why = visWhyNot(b.dataset.vis);
      b.setAttribute('aria-disabled', why ? 'true' : 'false');
      b.title = why || t(ctx.VIS_TITLE[b.dataset.vis]);
    }
  }
  function visAct(name) {
    const why = visWhyNot(name);
    if (why) { status(why); return; }
    if (name === 'secbox') { boxRoundPick(); return; }
    const keys = [...ST.viewer.selection], v = ST.viewer.vis;
    if (name === 'hide') {
      const n = v.hide(keys);
      ST.viewer.select(null);
      ST.selected = null; ST.pickToken++; clearProps();
      ST.viewer.applyVisibility();
      status(t('vis.hidden.count', { n, total: v.hidden.size }));
    } else if (name === 'isolate' || name === 'ghost') {
      v.isolate(keys, { ghost: name === 'ghost' });
      ST.viewer.applyVisibility();
      status(t(name === 'ghost' ? 'vis.ghosted' : 'vis.isolated', { n: keys.length }));
    } else {
      v.showAll();
      ST.viewer.applyVisibility();
      if (ST.picked.size) { ST.picked = new Set(); ctx.renderColor(); }
      status(t('vis.shown.all'));
    }
    syncVis();
    if (ST.tree) ctx.treeView.reveal([...ST.viewer.selection]);
  }

  // Settings › BimCraft › Assistants turns them on (applyAssist); the banner at the top of the right panel says while one is
  // connected, with Disconnect; the settings' Activity lists the calls (host.control.log).
  function applyAssist() {
    fileHost.control.configure({ enabled: settings.assistants.enabled, groups: settings.assistants.groups });
    renderAssist();
  }
  function renderAssist() {
    const c = fileHost.control, on = c.sessions();
    const ban = $('[data-assist-banner]');
    if (ban) {
      ban.hidden = !c.enabled || !on.length;
      const who = on.length ? on[on.length - 1].client?.name || t('set.assist.activity.someone') : '';
      ban.querySelector('p').textContent = on.length ? t(c.groups.includes('edit') ? 'assist.banner.edit' : 'assist.banner.read', { client: who }) : '';
    }
    const list = settingsDlg?.querySelector('[data-bc-assist-log] ol');
    if (list && settingsDlg.open) {
      const rows = c.log.slice(-50).reverse();
      list.replaceChildren(...(rows.length ? rows.map((e) => el('li', {}, t('set.assist.activity.row', { time: new Date(e.time).toLocaleTimeString(), client: e.client || t('set.assist.activity.someone'), tool: e.tool, outcome: e.outcome })))
        : [el('li', { className: 'bc-muted' }, t('set.assist.activity.none'))]));
    }
  }

  function renderLayers(drawing) {
    const boxes = [];
    ui.layerList.replaceChildren(...drawing.layers.map((l) => {
      const box = el('input', { type: 'checkbox', checked: ST.dwgView.layerVisible(l.name) });
      box.addEventListener('change', () => { ST.dwgView.setLayerVisible(l.name, box.checked); ST.view3d?.setLayerVisible(l.name, box.checked); });
      boxes.push([box, l.name]);
      return el('li', {}, el('label', {}, box,
        el('span', { className: 'bc-swatch', style: 'background:' + (l.color === 'ink' ? 'var(--ink)' : l.color) }),
        el('span', {}, l.name)));
    }));
    ui.layers.querySelectorAll('[data-layers-all]').forEach((b) => { b.onclick = () => {
      const on = b.dataset.layersAll === '1';
      for (const [box, name] of boxes) { box.checked = on; ST.dwgView.hidden[on ? 'delete' : 'add'](name); }
      ST.dwgView.render();
      ST.view3d?.syncLayers(ST.dwgView.hidden);
    }; });
    ui.layers.hidden = drawing.layers.length === 0;
  }

  return { syncVis, visAct, applyAssist, renderAssist, renderLayers };
}
