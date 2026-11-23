/* SPDX-License-Identifier: Apache-2.0 */
/**
 * ids-wire.js: bimcraft.js's 2 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountIdsWire(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { mountIds } from './ids-ui.js';
import { t } from './i18n.js';
import { el } from './ui-util.js';
import { ModelWriter } from './model-write.js';

export function mountIdsWire(ctx) {
  const { ST, ui, status, afterEdit, settings, projectOf } = ctx;

  // ---- Check against IDS (0.7.1 71.25; ids-ui.js, cc-ids in ./ids/): the client's .ids, referred to from the IFC by a property set on
  // IfcProject (CadCraft_IDS: Name, Hash, Title, Version, Format; one undo step through modelChange, like the accepted problems above).
  // The text stays beside the model in this browser (ids-ui.js); Content only with Settings › "Keep the IDS inside the IFC" (lead 2026-10-26)
  const IDS_PSET = 'CadCraft_IDS', IDS_FORMAT = 'cadcraft-ids 1';
  if (ui.idsBox) ST.idsUi = mountIds({
    box: ui.idsBox, details: ui.idsDetails, openBtn: ui.idsOpen, t, el, status: (m) => status(m, false, true),
    ifc: () => (ST.editor && ST.mode === 'ifc' && typeof ST.editor.api?.file === 'function' ? ST.editor.api.file(ST.editor.mid) : null),
    canWrite: () => !!ST.editor && ST.mode === 'ifc',
    embed: () => settings.idsEmbed === true,   // Settings › BimCraft › Keep the IDS inside the IFC (off)
    readRecord: () => {
      if (!ST.editor || ST.mode !== 'ifc') return null;
      try {
        const w = new ModelWriter(ST.editor.W, ST.editor.api, ST.editor.mid), pid = projectOf(w);
        const ps = pid === null ? null : w.readPset(pid, IDS_PSET);
        return ps && ps.Hash ? { name: String(ps.Name || ''), hash: String(ps.Hash), title: String(ps.Title || ''), version: String(ps.Version || ''), text: typeof ps.Content === 'string' && ps.Content ? ps.Content : null } : null;
      } catch (e) { return null; }
    },
    writeRecord: (rec) => {
      if (!ST.editor || ST.mode !== 'ifc') throw new Error(t('ids.err.noifc'));
      const run = (ed) => new ModelWriter(ed.W, ed.api, ed.mid).run((w) => {
        const pid = projectOf(w);
        if (pid === null) throw new Error(t('problems.err.noproject'));
        const had = w.readPset(pid, IDS_PSET);
        // Content: the text only when embedding; a text embedded before is emptied, never left behind
        const content = rec?.text ? [['Content', 'IFCTEXT', rec.text]] : had && 'Content' in had ? [['Content', 'IFCTEXT', '']] : [];
        w.upsertPset(pid, IDS_PSET, [['Name', 'IFCLABEL', rec ? rec.name : ''], ['Hash', 'IFCLABEL', rec ? rec.hash : ''], ['Title', 'IFCLABEL', rec ? rec.title : ''], ['Version', 'IFCLABEL', rec ? rec.version : ''], ...content, ['Format', 'IFCLABEL', IDS_FORMAT]]);
        return {};
      });
      ST.editor.modelChange(run, { label: t(rec ? 'ids.undo.set' : 'ids.undo.clear'), verb: '' });
      afterEdit();
    },
  });
  window.bimcraftIds = ST.idsUi;   // for tests (tools/ids/browser-bimcraft.mjs)
}
