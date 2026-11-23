/* SPDX-License-Identifier: Apache-2.0 */
/**
 * mui-schedules.js: model-ui.js's 4 bindings for this topic, moved out of mountModel() unchanged (0.11 PERF.78, perf-finish-11 bimcraft: one module per panel section; no behaviour change).
 * mountMuiSchedules(ctx) is called once by mountModel(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables mountModel() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { loopsOf } from './model-ops.js';
import { t } from './i18n.js';
import { fmtLen, fmtArea, unitMark } from './model-units.js';
import { rules } from './rules-hook.js';
import { schedules } from './model-schedule.js';
import { readStyle } from './work-style.js';
import { assemblySchedules } from './assembly-schedule.js';
import { ModelWriter } from './model-write.js';
import { el } from './ui-util.js';
import { typeName } from './model-walls.js';
import { materialBackground } from './project-materials.js';

export function mountMuiSchedules(mc) {
  const { ui, S, exts, PR, ed, kb, projectWallType, host } = mc;

  // 0.7.1 → 0.8 (docs/0.8-PROBLEMS-SPEC.md § Regulations): the regulations add-on's check as a live source of the shell's Problems (manifest
  // "problems") — re-checked a moment after each edit (the store's debounce and budget), gone when the add-on is switched off; core BimCraft
  // knows no regulations, it only asks the provider (rules-hook.js problems). Draw's stairs and rooms are found again by GlobalId (problemKeys).
  function rulesCtx() {
    const loops = new Map();
    for (const l of S.data?.levels || []) if ((S.data.derived?.spaces || []).some((x) => x.storey === l.id)) loops.set(l.id, l.id === S.level && S.loops ? S.loops : loopsOf(ed(), l.id));
    const levelName = (id) => S.data?.levels.find((l) => l.id === id)?.name || '';
    return { snap: S.data, loops, stairs: exts.flatMap((x) => x.ruleStairs?.() || []), levelName, stairWord: t('res.stair'), fmtLen: (mm) => fmtLen(mm, S.units) };
  }
  function regsSource() {
    const P = window.ccProblems, p = rules();
    if (!P || typeof p?.problems !== 'function') { PR.src?.dispose(); PR.src = null; return; }
    PR.src ||= P.source({
      id: 'bimcraft.regs', kind: 'regulation', label: t('problems.src.regs'), debounceMs: 400,
      run: () => {
        if (!S.on || !S.data || !ed()) return null;   // Draw off: what was found stays until it is on again
        const ctx = rulesCtx(), k = kb();
        PR.keys.clear();
        for (const sp of S.data.derived?.spaces || []) if (sp.guid) PR.keys.set(sp.guid, [k + sp.id]);
        for (const st of ctx.stairs) if (st.guid && st.id != null) PR.keys.set(st.guid, [k + st.id]);
        return rules()?.problems?.(ctx) || [];
      },
    });
    PR.src.invalidate();
  }

  function scheduleData() {
    const loops = new Map();
    for (const l of S.data?.levels || []) if ((S.data.derived?.spaces || []).some((x) => x.storey === l.id)) loops.set(l.id, l.id === S.level && S.loops ? S.loops : loopsOf(ed(), l.id));
    const all = schedules(S.data, loops, { fmtLen: (mm) => fmtLen(mm, S.units), fmtArea: (mm2) => fmtArea(mm2, S.units), t, unit: unitMark(S.units), countBy: readStyle().count });   // 0.9 D8.12-C
    if (ed() && ed().mid != null) Object.assign(all, assemblySchedules(new ModelWriter(ed().W, ed().api, ed().mid)));   // tests-10: an editor with no IFC model open yet (mid null) has no assemblies to list; the writer threw "No IFC model is open with id null" on every scene build
    // 0.8 REG.1: the model against the building regulations a regulations add-on says are in force (core knows none)
    {
      const levelName = (id) => S.data?.levels.find((l) => l.id === id)?.name || '';
      const sc = rules()?.schedule?.({ snap: S.data, loops, stairs: exts.flatMap((x) => x.ruleStairs?.() || []), levelName, stairWord: t('res.stair'), fmtLen: (mm) => fmtLen(mm, S.units) });
      if (sc && typeof sc.key === 'string') all[sc.key] = sc;
    }
    for (const x of exts) Object.assign(all, x.schedules?.() || {});   // extensions' schedules (res-ui.js: the lumber cut list)
    for (const x of exts) x.scheduleColumns?.(all);   // 0.10 BK.94: optional classification columns (classify-ui.js)
    return all;
  }
  function renderSchedule() {
    if (!ui.sched || !S.on || !S.data) return;
    const all = scheduleData(), sc = all[S.sched];
    for (const key of ['assemblies','materialLegend']) if (!ui.schedKind.querySelector('option[value="'+key+'"]')) ui.schedKind.append(el('option', {value:key}, all[key].title));
    for (const key of ['wfaces', 'wfacetotals', 'wfacerooms']) if (all[key] && !ui.schedKind.querySelector('option[value="'+key+'"]')) ui.schedKind.append(el('option', {value:key}, all[key].title));   // 0.11 BK.130: the wall-face finish schedules (only when the file has wall finishes)
    if (all.regs && !ui.schedKind.querySelector('option[value="regs"]')) ui.schedKind.append(el('option', {value:'regs', 'data-rules': ''}, all.regs.title));   // 0.8 REG.1: the regulations add-on's entry
    if (!sc) return;
    // a row picks what it lists
    const k = kb();
    const xs = exts.find((x) => x.scheduleKeys && (x.schedules?.() || {})[S.sched]);
    const keysOf = (i) => {
      if (sc.rowInfo || S.sched === 'regs') return [];
      if (xs) return xs.scheduleKeys(S.sched, i) || [];
      if (S.sched === 'doors' || S.sched === 'windows') { const kind = S.sched === 'doors' ? 'door' : 'window'; const list = S.data.openings.filter((o) => o.kind === kind); const byRow = sc.rows[i][0]; const o = list.find((x) => x.mark === byRow); return o ? [k + o.id] : []; }
      if (S.sched === 'walls') { const name = sc.rows[i][0]; return S.data.walls.filter((w) => (projectWallType(w.typeKey) ? typeName(projectWallType(w.typeKey)) : w.typeName) === name).map((w) => k + w.id); }
      const sp = (S.data.derived?.spaces || []).find((x) => x.number === sc.rows[i][0]); return sp ? [k + sp.id] : [];
    };
    const table = el('table', {}, el('thead', {}, el('tr', {}, ...sc.head.map((h) => el('th', {}, h)))),
      el('tbody', {}, ...sc.rows.map((r, i) => {
        const info=sc.rowInfo?.[i], group=info?.group;
        const tr = el('tr', { 'data-msched-row': String(i) }, ...r.map((c,j) => {
          const td=el(group?'th':'td', { ...(group?{colSpan:sc.head.length}:{}), style:sc.rowInfo?'white-space:pre-wrap;overflow-wrap:anywhere;max-width:260px;min-width:50px':'' }, c);
          if(S.sched==='materialLegend'&&j===0&&info?.swatch){const m=info.swatch;td.append(el('span', {title:m.kind,'aria-label':m.kind+' symbol',style:`display:block;width:30px;height:14px;border:1px ${m.kind==='missing'?'dashed':'solid'} #777;${m.kind==='membrane'?`height:0;border:0;border-top:3px dashed ${m.color};`:m.kind==='material'?'background:'+materialBackground(m)+';':''}`}));}
          return td;
        }));
        if(!sc.rowInfo)tr.addEventListener('click', () => host.select(keysOf(i))); return tr;
      })),
      sc.total ? el('tfoot', {}, el('tr', {}, ...sc.head.map((_, i) => el('td', {}, sc.total[i] ?? '')))) : null);
    const expand=sc.rowInfo?el('button',{type:'button',className:'btn-line btn-sm-cc','data-schedule-expand':'',onClick:()=>{
      const full=table.cloneNode(true);full.style='width:100%;min-width:900px';
      const dlg=el('dialog',{className:'bc-dialog','data-schedule-expanded':'',style:'width:min(1240px,96vw);max-width:1240px'},
        el('h2',{},sc.title),el('p',{className:'bc-muted'},sc.note),
        el('div',{style:'max-height:70vh;overflow:auto'},full),
        el('button',{type:'button',className:'btn-line btn-sm-cc','data-schedule-close':'',onClick:()=>dlg.close()},t('model.sch.close')));
      dlg.addEventListener('close',()=>dlg.remove());dlg.addEventListener('keydown',e=>e.stopPropagation());host.root.append(dlg);dlg.showModal();
    }},t('model.sch.full')):null;
    ui.sched.replaceChildren(...(sc.note?[el('p',{className:'bc-muted','data-schedule-note':''},sc.note)]:[]),...(expand?[expand]:[]), sc.rows.length ? table : el('p', { className: 'bc-muted' }, t('model.sch.none')));
    for (const x of exts) x.scheduleRendered?.(S.sched, sc, ui.sched);   // 0.10 BK.149 / BK.142 (schedule-layouts-ui.js): the office layout, set-ups, figure links
  }

  return { regsSource, scheduleData, renderSchedule };
}
