/* SPDX-License-Identifier: Apache-2.0 */
/**
 * tree-access-ui.js: bimcraft.js's 4 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 bimcraft; no behaviour change).
 * mountTreeAccess(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { buildTree } from './ifc-tree.js';

export function mountTreeAccess(ctx) {
  const { ST, ui, syncVis } = ctx;

  const lineName = (id, spatial) => {
    try { const l = ST.ifc.api.GetLine(ST.model.modelID, id); const n = l.Name?.value, ln = l.LongName?.value, tg = l.Tag?.value; return (spatial ? (ln && n && ln !== n && !ln.startsWith(n) ? n + ' ' + ln : ln || n) : n || tg) || '#' + id; } catch (e) { return '#' + id; }
  };
  const short = (cls) => String(cls || '').replace(/^Ifc/, '').replace(/^BuildingStorey$/, 'Storey');

  function fillTree(keep) {
    ST.tree = buildTree(ST.model, { className: (id) => ST.ifc.className(id) });
    ctx.treeView.setTree(ST.tree, ST.viewer.vis, { keep });
    ui.treeSec.hidden = !ST.tree.root && !ST.tree.loose;
    ctx.treeView.reveal([...ST.viewer.selection]);
  }
  /** After any change of the pick: the Show menu's states and the tree's marks follow. */
  function afterPick() { syncVis(); try { window.bimcraftFamilies?.api?.sync3d?.(); } catch (e) { /* the family panel is not up yet */ } if (ST.tree) ctx.treeView.reveal([...ST.viewer.selection]); if (ST.qtoScope === 'pick') ctx.renderQto(); ST.modelUi?.picked(); ST.workspace?.picked(); ST.toolbox?.refresh(); ST.analysisUi?.picked(); ST.pointsUi?.picked(); ST.assetsUi?.picked(); ST.tagsUi?.picked(); }

  return { lineName, short, fillTree, afterPick };
}
