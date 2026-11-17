/* SPDX-License-Identifier: Apache-2.0 */
/**
 * audit-bim.js: BimCraft's thin adapter for the shared audit rule sets (0.10 booklet rows BK.65 and BK.20, session bk-r3-checks-10).
 * DOM-free: node bin/test-bimcraft.mjs --checks10. The rules are ./modelaudit/ (lib/modelaudit: audit.js, interfaces.js, stagelod.js,
 * verify.js); this file only READS the open model into the plain shapes they take. Nothing is changed and nothing is blocked: the
 * result goes to the shared Problems list (source 'bimcraft.audit', kind check), where each finding can be accepted like any other.
 *
 *   gatherAudit({ ed, model, stage, stageName, table, limits, sets, nameOf, clashBudgetMs, tolerance, t }) → input for auditProblems
 *       ed     the IfcEditor of the open model; model = its IfcModel.load() result (batches, classOf, keyBase) for the clash engine
 *       rooms  every room: no name, or the name the program gave ("Room 3"), is unnamed
 *       tags   doors and windows without a mark, rooms without a number, electrical devices without a tag
 *       lod    walls, floors, ceilings, roofs, doors and windows: the element's type LOD (500 while field-verified) against the stage's
 *       clashes       crossings between two disciplines (lib/clashfix/disciplines.js by IFC class; clash.js, tolerance 10 mm), cut
 *                     short after clashBudgetMs (default 4000) and said so
 *       interfaces    BK.20: openings fit their walls, wide openings have a lintel (an IfcBeam LINTEL over them, a framing header, or
 *                     the note in CadCraft_Interface.Lintel), service runs crossing a wall or slab have an opening (found with the
 *                     clash engine: a run through a real opening crosses no surface)
 *       verification  elements recognised from a PDF / scan that nobody has checked yet
 *   runAudit(ctx) → { problems, summary, input }
 *   stageTable(own) → { table, office }   the stage → LOD table in force (starting values < Default Policies bimcraft.audit.lod.* < own)
 *   autoRoomName(text) → bool        the name is one the program gave a new room
 *   lintelOver(ed, model, snap, limits) → Map(opening guid → { element | note })
 */
import { ModelWriter } from './model-write.js';
import { snapshotModel } from './model-ops.js';
import { wallTypes } from './model-walls.js';
import { elementType } from './element-types.js';
import { openingType, openingLod, openingTypeName } from './opening-types.js';
import { readDevices } from './res-elec.js';
import { elementsOf, clashes } from './clash.js';
import { DISCIPLINE_IDS, disciplineOfIfc, kindOfIfc } from './clashfix/disciplines.js';
import { ids, val } from './ifc-util.js';
import { t as tr } from './i18n.js';
import { auditProblems, RULE_SETS } from './modelaudit/audit.js';
import { cleanStageLod } from './modelaudit/stagelod.js';
import { policy } from './defaults-hook.js';
import { openingRules, penetrationRules, mergeInterfaceLimits } from './modelaudit/interfaces.js';
import { effectiveLod } from './modelaudit/verify.js';
import { readVerification, lintelNote } from './verify-model.js';

const SERVICE = new Set(['duct', 'pipe', 'tray', 'conduit']);
const HOST = new Set(['wall', 'slab']);
const AUTO = (() => { const s = tr('model.room.name', { n: '\u0001' }); const i = s.indexOf('\u0001'); return i < 0 ? null : new RegExp('^' + (s.slice(0, i) + '\u0001' + s.slice(i + 1)).replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace('\u0001', '\\d+') + '$'); })();
export const autoRoomName = (text) => /^Room \d+$/.test(String(text).trim()) || (AUTO ? AUTO.test(String(text).trim()) : false);

const safeIds = (w, name, inh = false) => { try { return ids(w.api, w.mid, name, inh); } catch (e) { return []; } };

/** Each wide opening's lintel: an element over it (IfcBeam LINTEL or a framing header, by its box) or the note on the door / window. */
export function lintelOver(ed, model, snap, limits) {
  const w = new ModelWriter(ed.W, ed.api, ed.mid), L = mergeInterfaceLimits(limits), out = new Map();
  const wide = snap.openings.filter((o) => o.width > L.lintelOver);
  if (!wide.length) return out;
  const kb = model?.keyBase || 0;
  let beams = null;
  const beamBoxes = () => {
    if (beams) return beams;
    const keys = [];
    for (const id of safeIds(w, 'IFCBEAM', true)) {
      const l = w.api.GetLine(w.mid, id, false);
      const pre = String(val(l?.PredefinedType) || ''), role = String(w.readPset(id, 'CadCraft_Lumber')?.Role || '');
      if (/LINTEL/i.test(pre) || role === 'header') keys.push(kb + id);
    }
    beams = model?.batches && keys.length ? elementsOf(model.batches, keys) : [];
    return beams;
  };
  const doorBoxes = model?.batches ? new Map(elementsOf(model.batches, wide.map((o) => kb + o.id)).map((e) => [e.key, e.box])) : new Map();
  for (const o of wide) {
    const note = lintelNote(w, o.id);
    if (note) { out.set(o.guid, { note }); continue; }
    const b = doorBoxes.get(kb + o.id);
    if (!b) continue;
    // viewer space: metres, y up. A lintel's box holds the opening's box in plan (slack: a wall's thickness) and starts at its head.
    const hit = beamBoxes().find((e) => e.box[0] <= b[0] + 0.3 && e.box[3] >= b[3] - 0.3 && e.box[2] <= b[2] + 0.3 && e.box[5] >= b[5] - 0.3 && e.box[1] >= b[4] - 0.1 && e.box[1] <= b[4] + 0.6);
    if (hit) out.set(o.guid, { element: hit.key - kb });
  }
  return out;
}

export function gatherAudit({ ed, model = null, stage = '', stageName = '', table = undefined, limits = undefined, sets = RULE_SETS, nameOf = null, clashBudgetMs = 4000, tolerance = 0.01 } = {}) {
  const w = new ModelWriter(ed.W, ed.api, ed.mid);
  const snap = snapshotModel(ed);
  const levelName = (id) => snap.levels.find((l) => l.id === id)?.name || '';
  const input = { stage, stageName, table, isAutoName: autoRoomName };
  const records = new Map(readVerification(w).map((x) => [x.guid, x]));
  const D = snap.derived || { spaces: [], floors: [], ceilings: [], roofs: [] };
  const opLabel = (o) => o.mark || o.name || (openingType(o.typeKey) ? openingTypeName(openingType(o.typeKey)) : tr(o.kind === 'door' ? 'audit.el.door' : 'audit.el.window'));
  const wallLabel = (x) => tr('model.wall') + ' ' + (x.name || '#' + x.id) + (levelName(x.storey) ? ' (' + levelName(x.storey) + ')' : '');

  if (sets.includes('rooms')) input.rooms = D.spaces.map((s) => ({ id: s.guid, number: s.number, name: s.name, level: levelName(s.storey) }));
  if (sets.includes('tags')) {
    let devs = [];
    try { devs = readDevices(w); } catch (e) { devs = []; }
    input.tagged = [
      ...snap.openings.map((o) => ({ id: o.guid, kind: o.kind, tag: o.mark, label: (o.name || (openingType(o.typeKey) ? openingTypeName(openingType(o.typeKey)) : '')) + (levelName(o.storey) ? ' (' + levelName(o.storey) + ')' : '') })),
      ...D.spaces.map((s) => ({ id: s.guid, kind: 'room', tag: s.number, label: s.name || levelName(s.storey) })),
      ...devs.map((d) => ({ id: d.guid, kind: 'device', tag: d.tag, label: tr('res.el.kind.' + d.kind) })),
    ];
  }
  if (sets.includes('lod')) {
    const wt = new Map(wallTypes(w).map((x) => [x.key, x]));
    const eff = (guid, lod) => effectiveLod(typeof lod === 'number' ? lod : null, records.get(guid)?.record);
    input.elements = [
      ...snap.walls.map((x) => ({ id: x.guid, kind: 'wall', label: wallLabel(x), lod: eff(x.guid, wt.get(x.typeKey)?.lod) })),
      ...snap.openings.map((o) => ({ id: o.guid, kind: o.kind, label: opLabel(o), lod: eff(o.guid, openingLod(openingType(o.typeKey))) })),
      ...['floor', 'ceiling', 'roof'].flatMap((k) => (D[k + 's'] || []).map((x) => ({ id: x.guid, kind: k, label: tr('audit.el.' + k) + (levelName(x.storey) ? ' (' + levelName(x.storey) + ')' : ''), lod: eff(x.guid, x.typeKey ? elementType(k, x.typeKey, w)?.lod : null) }))),
    ];
  }
  const wantI = sets.includes('interfaces'), wantC = sets.includes('clashes');
  let findings = [];
  if (wantI) {
    const lint = lintelOver(ed, model, snap, limits);
    const walls = snap.walls.map((x) => ({ id: x.guid, label: wallLabel(x), length: x.len, height: x.height }));
    const ops = snap.openings.map((o) => { const host = snap.walls.find((x) => x.guid === o.wallGuid);
      return { id: o.guid, label: opLabel(o), kind: o.kind, host: o.wallGuid, hasVoid: !!o.openingId, offset: o.offset, width: o.width, sill: o.sill - (host?.baseOffset || 0), height: o.height, lintel: lint.get(o.guid) || null }; });
    // doors and windows BimCraft did not make (an imported model): only whether each fills an opening in something
    const mine = new Set(snap.openings.map((o) => o.id)), R = w.hostIndex();
    for (const cls of ['IFCDOOR', 'IFCWINDOW']) for (const id of safeIds(w, cls)) {
      if (mine.has(id)) continue;
      const l = w.api.GetLine(w.mid, id, false), oid = R.filledBy.get(id), hostId = oid ? R.voidHost.get(oid) : null;
      const g = val(l?.GlobalId);
      if (!g) continue;
      const hostGuid = hostId ? w.guidOf(hostId) : null;
      if (hostGuid && !walls.some((x) => x.id === hostGuid)) walls.push({ id: hostGuid, label: val(w.api.GetLine(w.mid, hostId, false)?.Name) || tr('model.wall'), length: NaN, height: NaN });
      ops.push({ id: g, label: val(l.Tag) || val(l.Name) || (cls === 'IFCDOOR' ? tr('audit.el.door') : tr('audit.el.window')), kind: cls === 'IFCDOOR' ? 'door' : 'window', host: hostGuid, hasVoid: !!oid, offset: 0, width: 1, sill: 0, height: 1, lintel: { note: 'n/a' } });
    }
    findings = openingRules(walls, ops, limits);
    input.interfaceChecked = ops.length;
  }
  if ((wantI || wantC) && model?.batches && model.classOf) {
    const kb = model.keyBase || 0, by = new Map(DISCIPLINE_IDS.map((d) => [d, []]));
    for (const [id, cls] of model.classOf) { const d = disciplineOfIfc(cls); if (d) by.get(d).push(kb + id); }
    const els = new Map(DISCIPLINE_IDS.map((d) => [d, by.get(d).length ? elementsOf(model.batches, by.get(d)) : []]));
    const end = Date.now() + clashBudgetMs;
    const info = (key, d) => { const id = key - kb, cls = model.classOf.get(id) || ''; return { id: w.guidOf(id) || '#' + id, label: (nameOf && nameOf(key)) || val(w.api.GetLine(w.mid, id, false)?.Name) || cls.replace(/^Ifc/, ''), discipline: d, kind: kindOfIfc(cls) }; };
    const general = [], crossings = [];
    // a roof's planes rest on the walls under them and cut their tops by design: that join is not a clash between disciplines
    const roofParts = new Set(D.roofs.flatMap((r) => [r.id, ...(r.parts || [])]));
    const byDesign = (c) => (roofParts.has(c.a - kb) && /^IfcWall/.test(model.classOf.get(c.b - kb) || '')) || (roofParts.has(c.b - kb) && /^IfcWall/.test(model.classOf.get(c.a - kb) || ''));
    let checked = 0, stopped = false;
    for (let i = 0; i < DISCIPLINE_IDS.length && !stopped; i++) for (let j = i + 1; j < DISCIPLINE_IDS.length; j++) {
      const A = els.get(DISCIPLINE_IDS[i]), B = els.get(DISCIPLINE_IDS[j]);
      if (!A.length || !B.length) continue;
      if (Date.now() > end) { stopped = true; break; }
      checked += A.length * B.length;
      for (const c of clashes(A, B, { tolerance, shouldStop: () => Date.now() > end })) {
        if (byDesign(c)) continue;
        const a = info(c.a, DISCIPLINE_IDS[i]), b = info(c.b, DISCIPLINE_IDS[j]);
        const svc = SERVICE.has(a.kind) && HOST.has(b.kind) ? [a, b] : SERVICE.has(b.kind) && HOST.has(a.kind) ? [b, a] : null;
        if (svc) crossings.push({ service: svc[0], host: svc[1], at: [c.point[0] * 1000, -c.point[2] * 1000, c.point[1] * 1000] });
        else general.push({ a, b, depth: c.depth * 1000 });
      }
      if (Date.now() > end) stopped = true;
    }
    if (wantI) { const pen = penetrationRules(crossings, [], limits); findings = [...findings, ...pen]; input.interfaceChecked = (input.interfaceChecked || 0) + crossings.length; }
    else for (const c of crossings) general.push({ a: c.service, b: c.host, depth: NaN });   // interface rules off: a crossing is still a clash
    if (wantC) { input.clashes = general; input.clashChecked = checked; input.clashStopped = stopped; }
  }
  if (wantI) input.findings = findings;
  if (sets.includes('verification')) {
    const all = [...records.values()];
    input.unverified = all.filter((x) => x.record.state === 'unverified').map((x) => ({ id: x.guid, label: (x.cls || '').replace(/^Ifc/, '') + (x.name ? ' ' + x.name : ''), source: tr('verify.source.' + (x.record.source || 'drawing')) }));
    input.verifyChecked = all.length;
  }
  return input;
}

/** The stage → LOD table in force: CadCraft's starting values, the office's Default Policies over them, this browser's own over those. */
const POLICY_KEY = { concept: 'concept', 'design-development': 'designDevelopment', submission: 'submission', 'working-drawings': 'workingDrawings', tender: 'tender', 'close-out': 'closeOut' };
export function stageTable(own = null) {
  const office = {};
  for (const [stage, k] of Object.entries(POLICY_KEY)) { const v = policy('bimcraft.audit.lod.' + k); if (v !== undefined) office[stage] = v; }
  return { table: cleanStageLod(own, cleanStageLod(office)), office };
}

export function runAudit(ctx) {
  const sets = ctx.sets || RULE_SETS;
  const input = gatherAudit({ ...ctx, sets });
  const r = auditProblems(input, { t: ctx.t || ((k, v) => tr(k, v)), sets });
  return { ...r, input };
}
