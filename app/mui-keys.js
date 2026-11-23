/* SPDX-License-Identifier: Apache-2.0 */
/**
 * mui-keys.js: model-ui.js's 6 bindings for this topic, moved out of mountModel() unchanged (0.11 PERF.78, perf-finish-11 bimcraft: one module per panel section; no behaviour change).
 * mountMuiKeys(ctx) is called once by mountModel(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables mountModel() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { t } from './i18n.js';
import { removeElements, snapshotModel } from './model-ops.js';
import { openingTypeName, openingType } from './model-openings.js';

export function mountMuiKeys(ctx) {
  const { MS, S, exts, ed, kb, commit, selectedKeys, host, mergeJournals } = ctx;

  function pickedWalls() {
    const k = kb(), byKey = new Map((S.data?.walls || []).map((w) => [k + w.id, w.guid]));
    return selectedKeys().map((x) => byKey.get(x)).filter(Boolean);
  }
  /** Delete what is picked of the tools' own elements in one change. Rooms come from the walls: they can't be deleted. */
  function deletePicked(p) {
    if (p.derived.some((d) => d.kind === 'room')) { host.status(t('model.room.nodelete'), true); return; }
    host.select([]);
    const base = removeElements({ walls: p.walls, openings: p.openings, derived: p.derived.map((d) => d.guid) });
    const extOps = [...new Set(p.ext.map((q) => q.x))].map((x) => x.remove(p.ext.filter((q) => q.x === x).map((q) => q.it)));
    const run = !extOps.length ? base : (editor) => { let r = (p.walls.length || p.openings.length || p.derived.length) ? base(editor) : null; for (const o of extOps) { const r2 = o(editor); r = r ? { ...r2, journal: mergeJournals(r.journal, r2.journal) } : r2; } return r; };
    commit(run, { label: p.count === 1 ? p.label : t('model.elements', { n: p.count }), verb: t('model.verb.deleted') });
  }
  /** Only placed library items picked (comforts-ui.js `passEdit`): bimcraft.js copies, cuts, duplicates and deletes them, as
   *  before 0.6 round 2 (its delete says so in the status line and undoes as one step). */
  const passesEdit = (p) => p.ext.length === p.count && p.ext.every((q) => q.it.passEdit);

  function pickSnapshot() {
    const e = ed(), f = e?.api?.file?.(e.mid) || null;
    if (MS.pickSnap && f && MS.pickSnap.e === e && MS.pickSnap.f === f && MS.pickSnap.v === f.version) return MS.pickSnap.data;
    const data = snapshotModel(e);
    MS.pickSnap = f ? { e, f, v: f.version, data } : null;
    return data;
  }
  /** 0.11 fix: the warm is for the model that was just opened. It runs up to 4 s later, and by then another file may be opening
   *  (IfcModel.load closes the old model first: the same editor then has mid null until the new one is adopted), the model
   *  may be closed, or a reload may have given it a new id. Such a stale warm is dropped ("No IFC model is open with id null"
   *  came from the LOD list built here in that window); the next open warms again, and a click reads the model as before. */
  const live = (e) => !!e && e.mid != null && (typeof e.api?.IsModelOpen !== 'function' || e.api.IsModelOpen(e.mid));
  function warmPicks() {
    const idle = typeof requestIdleCallback === 'function' ? (fn) => requestIdleCallback(fn, { timeout: 4000 }) : (fn) => setTimeout(fn, 1500);
    const e0 = ed(), mid0 = e0?.mid ?? null;
    idle(() => {
      const e = ed();
      if (!live(e) || e !== e0 || e.mid !== mid0) return;
      try { if (!(S.on && S.data)) pickSnapshot(); } catch (err) { /* a model that cannot be read: the click reads it as before */ }
      for (const x of exts) { if (ed() !== e0 || !live(e0) || e0.mid !== mid0) return; try { x.warm?.(); } catch (err) { console.error(err); } }
    });
  }
  /** The tools' own elements among the picked: walls, doors and windows (GlobalIds), how many, a label for one. */
  function picked() {
    const k = kb(), walls = [], openings = [], derived = [];
    const keys = selectedKeys();
    if (!keys.length || !ed()) return { walls, openings, derived: [], ext: [], count: 0, label: '' };
    // cheap first: none of the picked is a wall, door or window → nothing of ours (no reading of the model)
    const cls = host.model()?.classOf;
    if (cls && !keys.some((x) => /^Ifc(Wall|WallStandardCase|Door|Window|Space|Slab|Covering|Roof)$/.test(cls.get(x - k) || '') || exts.some((e) => e.classes?.test(cls.get(x - k) || '')) || !cls.has(x - k))) return { walls, openings, derived: [], ext: [], count: 0, label: '' };
    const data = S.on && S.data ? S.data : pickSnapshot();   // with Draw off the plan's data may be old
    let label = '';
    const ext = [];
    for (const key of keys) {
      const xi = exts.map((x) => ({ x, it: x.pick?.(key) })).find((q) => q.it);
      if (xi) { if (!ext.some((q) => q.it.guid === xi.it.guid)) ext.push(xi); label = xi.it.label; continue; }
      const w = (data.walls || []).find((x) => k + x.id === key);
      if (w) { walls.push(w.guid); label = t('model.wall'); continue; }
      const o = (data.openings || []).find((x) => k + x.id === key);
      if (o) { openings.push(o.guid); label = o.name || openingTypeName(openingType(o.typeKey) || { key: o.typeKey }); continue; }
      const D = data.derived || {};
      const sp = (D.spaces || []).find((x) => k + x.id === key);
      if (sp) { derived.push({ kind: 'room', ...sp }); label = sp.name || sp.number; continue; }
      const fl = (D.floors || []).find((x) => k + x.id === key);
      if (fl) { derived.push({ ...fl, kind: 'floor', floorKind: fl.kind }); label = t('model.floor.' + fl.kind); continue; }
      const ce = (D.ceilings || []).find((x) => k + x.id === key);
      if (ce) { derived.push({ kind: 'ceiling', ...ce }); label = t('model.ceiling'); continue; }
      const rf = (D.roofs || []).find((x) => k + x.id === key || x.parts.some((p) => k + p === key));
      if (rf) { if (!derived.some((d) => d.guid === rf.guid)) derived.push({ kind: 'roof', ...rf }); label = t('model.roof'); }
    }
    return { walls, openings, derived, ext, count: walls.length + openings.length + derived.length + ext.length, label, picks: keys.length };
  }

  return { pickedWalls, deletePicked, passesEdit, pickSnapshot, warmPicks, picked };
}
