/* SPDX-License-Identifier: Apache-2.0 */
/**
 * main.js — the Building regulations add-on for BimCraft (0.8 REG.1, owner 2026-10-25; docs/0.8-ZA-STANDARDS.md § 1a), on add-on API 1.2. Since 0.8 (regs_PART_3) the screens live in lib/ui.js, shared with the other apps; this file is BimCraft's adapter.
 * Off until the person switches it on (Settings › Add-ons). It fills the building-regulations hook (rules-hook.js through api.rules):
 *
 *   Settings    Building regulations (owner 2026-10-26): the packs as a checkbox tree in sets by place (country, then the state, county and
 *               city packs under it), each pack opening to its trust state, edition, source, maker, price and rules; paid packs and sets
 *               with paid packs are marked; how ticked packs that disagree are handled; "Upload a regulations file" adds a pack of the
 *               person's own (kept on this computer, "Your pack", never shown as reviewed)
 *   Stairs      a new stair starts from the tightest riser and tread of the ticked packs; Properties says what each ticked pack makes of it
 *   Schedules   "Building regulations": every named room (wall height, window and openable area) and every stair against each ticked pack
 *   Problems    the same check, live: each rule a stair or room does not meet is a regulation problem in the shell's ⚠ panel, with the
 *               pack, edition and clause (provider.problems / provider.packs; core BimCraft re-checks after each edit)
 *
 * The packs are data (packs/*.json, format lib/regs.js): numbers, units and clause numbers, never the standard's text. Today they are
 * the files beside this add-on and the person's uploads; they are meant to come from LibraryCraft as their own kind of item, so loading
 * goes through ONE place (lib/active.js) and a library source changes nothing else. A guide only: the registered professional and the
 * local authority decide.
 *
 *   Global      Settings › Global › Building regulations (owner decision 8): a tree of the Library's countries, each a checkbox (ticked =
 *               installed on this computer for every app, lib/library.js) opening to its packs; Check for updates
 *   Panel       the Regulations tab in the right panel (owner decision 7): the listed packs by country, each ticked or not for THIS drawing
 *               and opening to its rules (each a checkbox); how disagreeing packs combine; Use my defaults. Saved in the IFC as
 *               CadCraft_Regulations on IfcProject (Settings = JSON {format cc-regs-drawing, packs, rulesOff, mode, versions}), one undo step
 */
import { setActivePacks, activeIds, profiles, onRegsChange, packVersion, setLimitsApplier, setAppliesFilter } from './lib/active.js';
import { stairLimitsFrom, strictest } from './lib/regs.js';
import * as BK from '../../study/breakit.js';   // 0.8 EG.31: escape routes through the pack's egress rule (lib/study, copied by tools/study/sync.mjs bimcraft)
import { routeFindings } from './lib/route.js';
import { stairRows, roomRows, doorRows, elecRows, foundRows, framingRows, joistRows, rafterRows, ceilingJoistRows, energyRows, regsSchedule, limitText } from './lib/check.js';
import { setupRegs, mountRegsUi, packLabel, pct } from './lib/ui.js';
import { parseMarkdown } from '../../doc-template.js';
import { docPdf } from '../../doc-pdf.js';
import { wallTypes, typeName } from '../../model-walls.js';
import { readDerived } from '../../model-slabs.js';
import { LAMBDA } from '../../energy-bim.js';   // keyword → conductivity, for the energy rows
import { readDevices } from '../../res-elec.js';   // tier 3: outlets, lights and alarms the electrical tools placed
import { readFoundations, foundationParams, loadsOn } from '../../res-foundation.js';   // tier 3: footings and slabs
import { readFraming, LUMBER_PSET } from '../../res-framing.js';   // tier 3: wall studs and headers
import { regsProblems, packRef } from './lib/problems.js';   // 0.7.1 → 0.8: the shell's Problems (docs/0.8-PROBLEMS-SPEC.md § Regulations)
import { useStairLimits } from '../../res-stair.js';
import { activeTji, tjiMaxSpan } from '../../tji-table.js';   // GH.3-E: used only while the person has loaded a joist maker's table
/** The loaded TJI table as the joist check wants it, or null (then TJI joists stay skipped, as before). */
const tjiForRules = () => { const a = activeTji(); return a ? { table: a.table, caseId: a.caseId, maxSpan: (size, spacing) => { const h = tjiMaxSpan(a.table, size, spacing, a.caseId); return h ? { span: h.span, name: a.table.id + ' (' + a.table.edition + ')' } : null; } } : null; };
import { fmtLen, fmtArea, getDisplayUnits } from '../../model-units.js';   // the person's units (7¾" or 197 mm), as the rest of BimCraft writes them

const PSET = 'CadCraft_Regulations';

export async function activate(api) {
  setLimitsApplier(useStairLimits);   // the engine (lib/active.js) has no app imports; BimCraft applies the limits through its stair tool
  const t = api.t;
  setAppliesFilter(['stair', 'room', 'door', 'window', 'building', 'storey', 'foundation', 'wall', 'header', 'floor', 'roof']);   // the packs for drawing practice, zoning, roads and connections belong to the other apps
  await setupRegs(api);
  api.onDeactivate(() => useStairLimits(null));

  // The model's electrical devices, read once per model change (the checks run often; the model changes less)
  let devCache = null;
  let foundCache = null, frameCache = null, typeCache = null;
  api.model.onChange(() => { devCache = null; foundCache = null; frameCache = null; typeCache = null; });
  const devices = () => {
    if (devCache) return devCache;
    try { devCache = api.model.current() ? api.model.read((w) => readDevices(w)) || [] : []; } catch (e) { devCache = []; }
    return devCache;
  };
  const foundations = () => {
    if (foundCache) return foundCache;
    try {
      foundCache = api.model.current() ? api.model.read((w) => readFoundations(w).map((f) => {
        const loads = loadsOn(w, f.storey);
        return { ...f, loads, params: foundationParams(f.kind, f.stored, loads) };
      })) || [] : [];
    } catch (e) { foundCache = []; }
    return foundCache;
  };
  const typesByKey = () => {   // the wall types in the model (starter + the model's own), by key
    if (typeCache) return typeCache;
    try { typeCache = new Map((api.model.current() ? api.model.read((w) => wallTypes(w)) || [] : []).map((x) => [x.key, x])); } catch (e) { typeCache = new Map(); }
    return typeCache;
  };
  const framings = () => {
    if (frameCache) return frameCache;
    try {
      frameCache = api.model.current() ? api.model.read((w) => (() => { const roofs = readDerived(w).roofs; return readFraming(w).filter((f) => f.kind === 'wall' || f.kind === 'floor' || f.kind === 'roof').map((f) => ({ guid: f.guid, kind: f.kind, storey: f.storey, host: f.host, spacing: f.spacing, pitch: f.kind === 'roof' ? roofs.find((r) => r.guid === f.host)?.pitch ?? 0 : 0,
        pieces: f.parts.map((pid) => { const ps = w.readPset(pid, LUMBER_PSET) || {}; const l = w.api.GetLine(w.mid, pid, false);
          return { role: String(ps.Role || ''), size: String(ps.Size || ''), length: Number(ps.Length) * w.unitMm || 0, guid: l?.GlobalId?.value || '' }; }) })); })()) || [] : [];
    } catch (e) { frameCache = []; }
    return frameCache;
  };
  let lastCtx = null;   // the last model the app had checked (the code summary sheet reads it)
  const allRows = (prof, { snap, loops, stairs, levelName, stairWord }) => [
    ...stairRows(stairs, prof, { whereOf: (st) => stairWord + ' ' + levelName(st.storey) }), ...roomRows(snap, loops, prof),
    ...doorRows(snap, loops, prof, { where: t('regs.where.egress') }), ...elecRows(snap, loops, devices(), prof),
    ...foundRows(foundations(), prof, { levelName }), ...framingRows(framings().filter((f) => f.kind === 'wall'), snap, loops, prof, { levelName }),
    ...joistRows(framings().filter((f) => f.kind === 'floor'), prof, { levelName, tji: tjiForRules() }),
    ...rafterRows(framings().filter((f) => f.kind === 'roof'), prof, { levelName }), ...ceilingJoistRows(framings().filter((f) => f.kind === 'roof'), prof, { levelName }),
    ...energyRows(snap, prof, { typeOf: (k) => typesByKey().get(k) || null, typeName, lambdaOf: (name) => { const k = name.toLowerCase(); return (LAMBDA.find(([kw]) => k.includes(kw)) || [])[1] ?? null; } })];

  // ---- what the app asks (rules-hook.js): the stair limits are applied by active.js; the rest is asked for, for every ticked pack
  const provider = {
    stairStart() {
      const list = profiles();
      const lim = stairLimitsFrom(list.length > 1 ? strictest(list) : list[0] || null), out = {};
      if (lim.riserMax !== null) out.riserMax = lim.riserMax;
      if (lim.treadMin !== null) out.tread = lim.treadMin;
      return out;
    },
    stairLine(st, layout, fmt) {
      const list = profiles();
      if (!list.length) return null;
      return list.map((prof) => {
        const rows = stairRows([{ ...st, layout }], prof);
        if (!rows.length) return t('regs.st.none', { pack: packLabel(t, prof) });
        const bad = rows.filter((r) => r.ok === false);
        if (!bad.length) return t('regs.st.ok', { pack: packLabel(t, prof), list: rows.map((r) => r.label + ' ' + limitText(r, fmt, t)).join(', ') });
        return t('regs.st.bad', { pack: packLabel(t, prof), list: bad.map((r) => t('regs.st.row', { label: r.label, found: fmt(r.found, r.unit), need: limitText(r, fmt, t) })).join('; ') });
      }).join(' ');
    },
    tag() { const list = profiles(); return list.length ? t('regs.tag', { pack: list.map((p) => packLabel(t, p)).join(', ') }) : ''; },
    schedule({ snap, loops, stairs, levelName, stairWord, fmtLen }) {
      const list = profiles();
      if (!list.length || !snap) return null;
      const rows = list.flatMap((prof) => allRows(prof, { snap, loops, stairs, levelName, stairWord }).map((r) => ({ ...r, pack: prof.name })));
      return { key: 'regs', ...regsSchedule(rows, list, { fmtLen, fmtArea: (m2) => fmtArea(m2 * 1e6, getDisplayUnits()), t }) };
    },
    problems({ snap, loops, stairs, levelName, stairWord, fmtLen }) {
      if (!snap) return [];
      lastCtx = { snap, loops, stairs, levelName, stairWord, fmtLen };
      return profiles().flatMap((prof) => {
        const rows = allRows(prof, { snap, loops, stairs, levelName, stairWord });
        let ways = [];   // EG.31: the way out of every room against the pack's egress door rule (the narrowest door on its best route); nothing when the pack has no such rule
        try { ways = BK.findingProblems(routeFindings(snap, loops, prof, BK).findings, { source: 'bimcraft.regs' }); } catch { /* a model the graph cannot read gives no route findings */ }
        // owner 2026-10-26: a failed regulation rule is a warning ("failed regulation"); a route that meets the rule, however close, is a note, never that label
        ways = ways.map((p) => ({ ...p, severity: p.msg?.key?.endsWith('.fail') ? 'warning' : 'note' }));
        return ways.concat(regsProblems(rows, prof, { t, versionOf: packVersion, fmt: (v, unit) => (unit === 'pct' ? pct(v) : unit === 'm2' ? fmtArea(v * 1e6, getDisplayUnits()) : unit === 'count' ? String(Math.round(v)) : unit === 'ratio' ? String(Math.round(v * 100) / 100) : unit === 'r' ? 'R-' + (Math.round(v * 10) / 10) : unit === 'u' ? 'U-' + (Math.round(v * 100) / 100) : fmtLen(v)) }));
      });
    },
    packs() { return profiles().flatMap((p) => (p.parts || [p]).map((x) => packRef(x, packVersion))).filter(Boolean); },
  };
  api.rules.provide(provider);
  onRegsChange(() => api.rules.changed());


  // ---- the screens (lib/ui.js, the same in every app); this app tells it where its model, units and drawing ticks are
  mountRegsUi(api, {
    allRows: (prof, ctx) => allRows(prof, ctx),
    ctx: () => lastCtx,
    hasModel: () => !!api.model.current(),
    modelName: () => api.model.current()?.name || '',
    onModelChange: (fn) => api.model.onChange(fn),
    drawing: {   // the drawing's own ticks: CadCraft_Regulations on IfcProject (Settings = JSON text)
      read: () => api.model.read((w) => { const v = w.api.GetLineIDsWithType(w.mid, w.W.IFCPROJECT); return v.size() ? (w.readPset(v.get(0), PSET) || {}).Settings ?? null : null; }),
      write: (label, json) => api.model.write(label, (w) => { const v = w.api.GetLineIDsWithType(w.mid, w.W.IFCPROJECT); if (v.size()) w.upsertPset(v.get(0), PSET, [['Settings', 'IFCTEXT', json]]); }),
    },
    lenText: (mm) => fmtLen(mm, getDisplayUnits()),
    areaText: (m2) => fmtArea(m2 * 1e6, getDisplayUnits()),
    pdf: (md, opts) => docPdf(parseMarkdown(md), opts),
  });
  api.onDeactivate(() => { lastCtx = null; });
}

export function deactivate() { useStairLimits(null); }
