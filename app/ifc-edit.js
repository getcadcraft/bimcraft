/* SPDX-License-Identifier: Apache-2.0 */
/**
 * ifc-edit.js — edits an open IFC model (IfcModel) and saves it as a new IFC file.
 * No DOM: bin/test-bimcraft.mjs runs it in Node and re-opens what it saves.
 *
 * What can change (step 1):
 *   attributes  Name, Description, ObjectType, Tag of an element
 *   properties  single values in the element's property sets (IfcPropertySingleValue);
 *               type properties too, which by definition change every element of that type
 * Quantities, enumerations, lists and geometry are read-only here.
 *
 * Copy-on-write, because exporters share entities (a Revit export reuses one property value in
 * up to ~90 property sets, and one property set across up to ~20 elements):
 *   - an instance property set related to several elements is copied for the edited element
 *     (new IfcPropertySet + new IfcRelDefinesByProperties; the element leaves the old relation)
 *   - a property referenced by more than one property set is copied before it changes
 * so an edit only ever changes the element the user picked (or, for a type property, its type).
 *
 *   const ed = new IfcEditor(WebIFC, ifcModel);
 *   ed.setAttribute(id, 'Name', 'Walk-in cooler');
 *   ed.setProperty(id, { psetId, propId, fromType }, 'Kolpak');
 *   ed.undo();  ed.changes;  const bytes = ed.save();
 *
 * Library items (ifc-place.js), recorded as one change each and undone the same way:
 *   ed.placeItem(item, { storey, x, y, rot, itemNumber, quantity, notes, … })  → { id, typeId, … }
 *   ed.swapItem(id, item, opts)   (also "Update": same call with the newer version)
 *   ed.placeLike(srcId, opts)     another placement of an existing one (copy / paste / duplicate; ifc-place.js placeLike)
 *   ed.placer()                   an IfcPlacer on the current model (placements, schedule, walls)
 *
 * Any element (0.4 B1; ifc-elements.js), one change each, undone the same way:
 *   ed.removeElements(ids, { label })          delete (with parts and openings) → { removed, refused }
 *   ed.snapshot(ids)                            what Copy / Cut keep in memory for Paste (+ `frame`: rot, x, y, box in the
 *                                               element's own plan axes — clipboard.js elementsClip / pasteMove use it)
 *   ed.pasteElements(snap, opts, { label })     new copies → { ids, all }; opts.rot turns them BY that much (a change)
 *
 * Building tools (0.5 track BM; model-ops.js), one change each, undone the same way:
 *   ed.modelChange(op, { label, verb })      op = (editor) → { journal, id, ids, made }; redo runs op again (it names
 *                                            elements by GlobalId; `made` maps the old ids to the new ones)
 *
 * Redo: undo() keeps what it undid; redo() applies the newest of those again (a placement is placed again — same item,
 * same place, a new element id). Any new change clears what could be redone, as in every editor.
 */

import { IfcPlacer, undoJournal } from './ifc-place.js';
import { IfcElements } from './ifc-elements.js';
import { ids } from './ifc-util.js';
import { t } from "./i18n.js";

export const EDITABLE_ATTRS = ['Name', 'Description', 'ObjectType', 'Tag'];
const ATTR_TYPE = { Name: 'IFCLABEL', Description: 'IFCTEXT', ObjectType: 'IFCLABEL', Tag: 'IFCIDENTIFIER' };
const NUMERIC = /REAL|INTEGER|MEASURE|NUMERIC|COUNT|RATIO|TIMESTAMP/;

export class IfcEditor {
  constructor(WebIFC, model) {
    this.W = WebIFC;
    this.model = model;
    this.changes = [];
    this.undone = [];         // changes undo() took back, newest last (redo() re-applies them)
    this.moved = new Map();   // element id → the id it got when a redo placed it again
    this.propRefs = null;     // propertyId → number of property sets that list it
    this.relsByPset = null;   // psetId → [IfcRelDefinesByProperties ids]
  }

  get api() { return this.model.api; }
  get mid() { return this.model.modelID; }
  get dirty() { return this.changes.length > 0; }
  get canRedo() { return this.undone.length > 0; }

  /** A new change: recorded, and what could be redone is gone. */
  record(c) { this.changes.push(c); this.undone = []; return c; }

  setAttribute(id, attr, value, { record = true } = {}) {
    if (!EDITABLE_ATTRS.includes(attr)) throw new Error(attr + ' cannot be edited.');   // i18n-ignore: developer error (the UI offers only editable attributes)
    const line = this.api.GetLine(this.mid, id, false);
    const old = line[attr] && line[attr].value !== undefined ? line[attr].value : null;
    const next = value === null || value === undefined || String(value).trim() === '' ? null : String(value);
    if (next === old) return false;
    if (next === null) line[attr] = null;
    else if (line[attr] && typeof line[attr] === 'object') line[attr].value = next;
    else line[attr] = this.api.CreateIfcType(this.mid, this.W[ATTR_TYPE[attr]], next);
    this.api.WriteLine(this.mid, line);
    if (record) this.record({ kind: 'attr', id, attr, old, value: next });
    return true;
  }

  /**
   * Change one property value for one element (or its type, when ref.fromType).
   * ref: { psetId, propId, fromType, setName, propName } from IfcModel.properties().
   */
  setProperty(elementId, ref, value, { record = true } = {}) {
    const api = this.api, mid = this.mid;
    const prop = api.GetLine(mid, ref.propId, false);
    if (!prop || !prop.NominalValue) throw new Error(t('ifcedit.err.single_value'));
    const old = prop.NominalValue.value;
    const typed = this.typedValue(prop.NominalValue, value);
    if (typed.value === old) return false;
    this.index();

    let psetId = ref.psetId;
    if (!ref.fromType) psetId = this.ownPset(elementId, psetId);
    const pset = api.GetLine(mid, psetId, false);

    if ((this.propRefs.get(ref.propId) || 0) > 1) {
      // Shared value: give this property set its own copy.
      const copy = api.CreateIfcEntity(mid, prop.type, prop.Name, prop.Description, typed, prop.Unit);
      api.WriteLine(mid, copy);
      pset.HasProperties = pset.HasProperties.map((h) => (h.value === ref.propId ? new this.W.Handle(copy.expressID) : h));
      api.WriteLine(mid, pset);
      this.propRefs.set(ref.propId, this.propRefs.get(ref.propId) - 1);
      this.propRefs.set(copy.expressID, 1);
    } else {
      prop.NominalValue = typed;
      api.WriteLine(mid, prop);
    }
    if (record) {
      this.record({ kind: 'prop', id: elementId, ref: { ...ref, psetId }, setName: ref.setName, propName: ref.propName, old, value: typed.value, fromType: !!ref.fromType });
    }
    return true;
  }

  placer() { return new IfcPlacer(this.W, this.api, this.mid); }

  placeItem(item, opts, { record = true } = {}) {
    const r = this.placer().place(item, opts);
    this.reindex();
    if (record) this.record({ kind: 'place', id: r.id, label: opts.itemNumber ? t('ifcedit.change.item', { label: item.name, item: opts.itemNumber }) : item.name, journal: r.journal, old: null, value: item.name, again: { item, opts } });
    return r;
  }

  /** Another placement of placement `srcId` (same type and library data) — one change, undone like a placement. */
  placeLike(srcId, opts, { record = true, label = '' } = {}) {
    const r = this.placer().placeLike(srcId, opts);
    this.reindex();
    const name = label || t('ifcedit.copy.label', { id: srcId });
    if (record) this.record({ kind: 'place', id: r.id, label: opts.itemNumber ? t('ifcedit.change.item', { label: name, item: opts.itemNumber }) : name, journal: r.journal, old: null, value: name, again: { srcId, opts } });
    return r;
  }

  swapItem(id, item, opts = {}, { record = true, what = 'swap' } = {}) {
    const r = this.placer().swap(id, item, opts);
    this.reindex();
    if (record) this.record({ kind: what, id, label: item.name, journal: r.journal, old: opts.oldName || null, value: item.name + (item.version ? ' v' + item.version : ''), again: { item, opts, what } });
    return r;
  }

  elements() { return new IfcElements(this.W, this.api, this.mid); }

  /** Delete elements (with their parts and openings): one change. Refused ones (spatial structure) are listed. */
  removeElements(list, { record = true, label = '' } = {}) {
    const r = this.elements().remove(list.map((id) => this.now(id)));
    if (!r.removed.length) return r;
    this.reindex();
    if (record) this.record({ kind: 'remove', id: r.removed[0], ids: r.removed, label: label || '#' + r.removed[0], journal: r.journal, old: null, value: null, again: { ids: list } });
    return r;
  }
  /** What Copy / Cut keep, plus `frame` (IfcPlacer.elementsFrame: turned like the first element, its box; or null). */
  snapshot(list) {
    const snap = this.elements().snapshot(list.map((id) => this.now(id)));
    try {
      const pl = this.placer();
      const zBase = snap.storey ? pl.info().storeys.find((s) => s.id === snap.storey)?.elevation ?? 0 : 0;
      snap.frame = pl.elementsFrame(snap, { zBase });
    } catch (e) { snap.frame = null; }
    return snap;
  }
  pasteElements(snap, opts, { record = true, label = '' } = {}) {
    const r = this.elements().paste(snap, opts);
    this.reindex();
    if (record) this.record({ kind: 'paste', id: r.ids[0], ids: r.ids, label: label || 'Pasted', journal: r.journal, old: null, value: null, again: { snap, opts } });
    return r;
  }

  /**
   * A building-tool change (0.5 track BM, model-*.js): `run(editor)` writes through a ModelWriter and returns { journal,
   * id?, ids?, made? (Map GlobalId → id of what it created) }. One undo step; redo runs it again (it names elements by
   * GlobalId, so it finds them under their new ids). `verb` is the change list's word for it ("Drew", "Changed" …).
   */
  modelChange(run, { label = '', verb = '', coalesce = null } = {}) {
    const r = run(this);
    this.reindex();
    // GH.3-D: a rapid series of edits of one field is ONE undo step. `coalesce` = { key, merge (journals), ms }: when the
    // newest change is a model change with the same key, made less than `ms` ago, the new journal is folded into it and
    // redo runs the newest `run` alone (each such change sets absolute values of the same field, so the last one wins).
    const last = this.changes[this.changes.length - 1], now = Date.now();
    if (coalesce?.key && last && last.kind === 'model' && last.coalesce === coalesce.key && now - last.coalesceT < (coalesce.ms ?? 2500) && !this.undone.length) {
      last.journal = coalesce.merge(last.journal, r.journal);
      last.again = { run }; last.result = r; last.coalesceT = now; last.label = label || last.label;
      last.id = r.id ?? last.id; last.ids = r.ids ?? last.ids; last.made = r.made ?? last.made;
      return r;
    }
    this.record({ kind: 'model', id: r.id ?? null, ids: r.ids, made: r.made, label, verb, journal: r.journal, old: null, value: null, again: { run }, result: r, ...(coalesce?.key ? { coalesce: coalesce.key, coalesceT: now } : {}) });
    return r;
  }

  /** After lines were added or removed the property indexes are rebuilt on the next edit. */
  reindex() { this.propRefs = null; this.relsByPset = null; }

  /** Undo the last change by writing the old value back (copies made on the way stay; they are harmless). */
  undo() {
    const c = this.changes.pop();
    if (!c) return null;
    this.undone.push(c);
    if (c.journal) { undoJournal(this.api, this.mid, c.journal); this.reindex(); return c; }
    if (c.kind === 'attr') this.setAttribute(c.id, c.attr, c.old, { record: false });
    else this.setPropertyRaw(c, c.old);
    return c;
  }

  /** Apply the change undo() last took back. → the new change (a placement gets a new id), or null. */
  redo() {
    const c = this.undone.pop();
    if (!c) return null;
    const keep = this.undone;   // record() would clear the rest of the redo list
    const id = this.now(c.id);
    let n;
    try {
      if (c.kind === 'attr') { this.setAttribute(id, c.attr, c.value, { record: false }); n = { ...c, id }; }
      else if (c.kind === 'prop') { this.setPropertyRaw({ ...c, id }, c.value); n = { ...c, id }; }
      else if (c.kind === 'place') {
        const r = c.again?.srcId !== undefined ? this.placer().placeLike(this.now(c.again.srcId), c.again.opts) : this.placer().place(c.again.item, c.again.opts);
        this.moved.set(c.id, r.id);
        n = { ...c, id: r.id, journal: r.journal };
      } else if (c.kind === 'remove') {
        const r = this.elements().remove(c.again.ids.map((x) => this.now(x)));
        n = { ...c, journal: r.journal };
      } else if (c.kind === 'paste') {
        const r = this.elements().paste(c.again.snap, c.again.opts);
        c.ids.forEach((old, i) => { if (r.ids[i]) this.moved.set(old, r.ids[i]); });
        n = { ...c, id: r.ids[0], ids: r.ids, journal: r.journal };
      } else if (c.kind === 'model') {
        const r = c.again.run(this);
        // the change makes its elements with the same GlobalIds again: later changes that named the old ids find the new ones
        for (const [g, oldId] of c.made || []) { const nid = r.made?.get(g); if (nid && nid !== oldId) this.moved.set(oldId, nid); }
        n = { ...c, id: r.id ?? c.id, ids: r.ids ?? c.ids, made: r.made, journal: r.journal, result: r };
      } else { const r = this.placer().swap(id, c.again.item, c.again.opts); n = { ...c, id, journal: r.journal }; }
    } catch (e) { this.undone.push(c); throw e; }
    this.reindex();
    this.changes.push(n);
    this.undone = keep;
    return n;
  }

  /** The id an element has now (a redo that placed it again gave it a new one). */
  now(id) { const seen = new Set(); while (this.moved.has(id) && !seen.has(id)) { seen.add(id); id = this.moved.get(id); } return id; }

  /** The bytes of a new IFC file with every change applied. */
  save() {
    return this.api.SaveModel(this.mid);
  }

  // ---- internals ----

  setPropertyRaw(c, value) {
    // After the first edit the property set is the element's own; find the property by name in it.
    const pset = this.api.GetLine(this.mid, c.ref.psetId, false);
    for (const h of pset.HasProperties || []) {
      const p = this.api.GetLine(this.mid, h.value, false);
      if (p && p.Name && p.Name.value === c.propName && p.NominalValue) {
        this.setProperty(c.id, { ...c.ref, propId: h.value }, value === null ? '' : value, { record: false });
        return;
      }
    }
  }

  typedValue(current, raw) {
    const name = current.name || '';
    let value;
    if (name === 'IFCBOOLEAN' || name === 'IFCLOGICAL') {
      const s = String(raw).trim().toLowerCase();
      value = ['yes', 'true', 't', '1'].includes(s) ? true : ['no', 'false', 'f', '0'].includes(s) ? false : null;
      if (value === null) throw new Error(t('ifcedit.err.yesno'));
    } else if (NUMERIC.test(name)) {
      value = Number(String(raw).trim());
      if (!Number.isFinite(value) || String(raw).trim() === '') throw new Error(t('ifcedit.err.number'));
      if (/INTEGER|COUNT/.test(name) && !Number.isInteger(value)) throw new Error(t('ifcedit.err.whole'));
    } else {
      value = String(raw);
    }
    const t = this.W[name];
    return t !== undefined ? this.api.CreateIfcType(this.mid, t, value) : { ...current, value };
  }

  /** Reference counts and pset → relation map, built once per model. */
  index() {
    if (this.propRefs) return;
    const api = this.api, mid = this.mid, W = this.W;
    this.propRefs = new Map();
    for (const ps of ids(api, mid, 'IFCPROPERTYSET')) {
      for (const h of api.GetLine(mid, ps, false).HasProperties || []) this.propRefs.set(h.value, (this.propRefs.get(h.value) || 0) + 1);
    }
    this.relsByPset = new Map();
    for (const rid of ids(api, mid, 'IFCRELDEFINESBYPROPERTIES')) {
      const r = api.GetLine(mid, rid, false);
      const p = r.RelatingPropertyDefinition && r.RelatingPropertyDefinition.value;
      if (!p) continue;
      if (!this.relsByPset.has(p)) this.relsByPset.set(p, []);
      this.relsByPset.get(p).push(r.expressID);
    }
  }

  /**
   * The element's own copy of a property set: if the set is related to other elements too,
   * copy it (same properties), relate the copy to this element alone, and take the element out
   * of the shared relation. Returns the id of the set to edit.
   */
  ownPset(elementId, psetId) {
    const api = this.api, mid = this.mid, W = this.W;
    const relIds = this.relsByPset.get(psetId) || [];
    let others = 0, mine = null;
    for (const rid of relIds) {
      const r = api.GetLine(mid, rid, false);
      const objs = (r.RelatedObjects || []).map((h) => h.value);
      if (objs.includes(elementId)) mine = r;
      others += objs.filter((o) => o !== elementId).length;
    }
    if (!mine || others === 0) return psetId;

    const pset = api.GetLine(mid, psetId, false);
    const copy = api.CreateIfcEntity(mid, pset.type, api.CreateIFCGloballyUniqueId(mid), pset.OwnerHistory, pset.Name, pset.Description, [...pset.HasProperties]);
    api.WriteLine(mid, copy);
    for (const h of copy.HasProperties) this.propRefs.set(h.value, (this.propRefs.get(h.value) || 0) + 1);
    const rest = mine.RelatedObjects.filter((h) => h.value !== elementId);
    if (!rest.length) {
      // The element is alone in its relation (the set is shared through another one): repoint it.
      mine.RelatingPropertyDefinition = new W.Handle(copy.expressID);
      api.WriteLine(mid, mine);
      this.relsByPset.set(psetId, relIds.filter((r) => r !== mine.expressID));
      this.relsByPset.set(copy.expressID, [mine.expressID]);
      return copy.expressID;
    }
    const rel = api.CreateIfcEntity(mid, W.IFCRELDEFINESBYPROPERTIES, api.CreateIFCGloballyUniqueId(mid), mine.OwnerHistory, null, null,
      [new W.Handle(elementId)], new W.Handle(copy.expressID));
    api.WriteLine(mid, rel);
    mine.RelatedObjects = rest;   // a relation always keeps at least one element
    api.WriteLine(mid, mine);
    this.relsByPset.set(copy.expressID, [rel.expressID]);
    return copy.expressID;
  }
}
