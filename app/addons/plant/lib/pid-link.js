/* SPDX-License-Identifier: Apache-2.0 */
/**
 * pid-link.js — Plant's side of the shared plant graph (0.10 SU.1561). DOM-free. The graph engine is the host's synced copy of lib/schematic
 * (../../../schematic/plant.js); it is passed in, so this file is tested in Node with the library's own copy.
 *
 *   describe3d({ equipment, runs, specFor, placeEquip, makeEquip }) → the 3D model as the graph engine reads it (nozzles in world mm, specs named)
 *   PidLink(engine, store)   store = { get(), set(json) } for the graph in the add-on's storage
 *     .update(desc)          read the 3D model into the graph (what 3D now shows; what the P&ID must follow is flagged)
 *     .sheets()              the P&ID sheets from the graph · .svg(i, labels) · .bom() · .bomCsv()
 *     .pending(view)         what a view still has to change
 *     .addValve(line, kind) / .addInstrument(line, letters, loc)   an edit made on the P&ID: pending in 3D
 *     .addEquipment({kind,tag,name,nozzles}) / .renameLine(id, number) / .addLine({...})   0.11: the forms; each is pending in 3D
 *     .instrumentWrites(desc)  0.11: the instruments to store on the model's runs ({ writes [{ guid, instruments }], left })
 *     .acknowledge(view, id) / .adoptPid()                         the person did it in 3D · the P&ID was redrawn
 */
export function describe3d({ equipment = [], runs = [], specOf = () => '', placeEquip, makeEquip }) {
  const eq = [];
  for (const it of equipment) {
    if (!it || !it.tag) continue;
    const e = makeEquip(it.type, it.params);
    if (!e) continue;
    const placed = placeEquip(e, { x: it.x, y: it.y, z: it.z, rot: it.rot });
    eq.push({ tag: it.tag, type: it.type, guid: it.guid || '', nozzles: placed.nozzles.map((n) => ({ name: n.name, size: n.size, flow: n.flow, p: n.p })) });
  }
  return { equipment: eq, runs: runs.filter((r) => r && r.kind !== 'duct').map((r) => ({ guid: String(r.guid), tag: r.tag || '', size: String(r.size || ''), spec: specOf(r), system: r.system || '', points: r.points || [], valves: r.valves || [], instruments: r.instruments || [] })) };
}

export class PidLink {
  constructor(engine, store) { this.E = engine; this.store = store; this.g = null; }
  graph() {
    if (!this.g) { const raw = this.store.get(); this.g = (typeof raw === 'string' && this.E.PlantGraph.fromJSON(raw)) || new this.E.PlantGraph(''); }
    return this.g;
  }
  save() { this.store.set(JSON.stringify(this.graph().toJSON())); }
  setName(n) { this.graph().name = String(n || '').slice(0, 60); }
  update(desc) {
    const g = this.graph(), r = g.merge('three', this.E.snapshotFrom3d(desc, g));
    this.save(); return r;
  }
  sheets() { return this.E.layout(this.graph()); }
  svg(i = 0, labels) { return this.E.toSvg(this.sheets(), i, { labels }); }
  bom() { return this.E.bom(this.graph()); }
  bomCsv() { return this.E.bomCsv(this.bom()); }
  pending(view) { return this.graph().pending(view); }
  problems() { return this.E.checkPlant(this.graph()); }
  lines() { return this.graph().live(this.graph().lines).map((l) => ({ id: l.id, number: l.number })); }
  addValve(line, kind) { const o = this.graph().addItem('pid', { line, cls: 'valve', kind }); this.save(); return o; }
  addInstrument(line, letters, loc = 'field') { const o = this.graph().addItem('pid', { line, cls: 'instrument', kind: letters, loc }); this.save(); return o; }
  /** 0.11: forms on the P&ID side. Equipment drawn here is pending in 3D; a line renamed here is pending in 3D; a line between two nozzles is pending in 3D. */
  addEquipment({ kind, tag, name, nozzles }) { const o = this.graph().addEquipment('pid', { kind, tag, name, nozzles }); this.save(); return o; }
  renameLine(line, number) { const o = this.graph().rename('pid', line, number); this.save(); return o; }
  addLine({ number, size, spec, service, from, to }) { const o = this.graph().addLine('pid', { number, size, spec, service, from: from || null, to: to || null }); this.save(); return o; }
  equipmentList() { const g = this.graph(); return g.live(g.equipment).map((e) => ({ id: e.id, tag: e.tag, kind: e.kind, nozzles: e.nozzles.map((n) => n.name) })); }
  setLineSize(line, size) { const o = this.graph().change('pid', line, { size }); this.save(); return o; }
  /** 0.11: sizes changed on the P&ID that 3D does not show yet: what api.mep.setRunSizes should write ([{ id (the line), guid (the run), size }]). */
  sizeWrites() { const g = this.graph(); return g.live(g.lines).filter((l) => l.run && l.state.three === 'change' && l.was && l.was.size !== undefined).map((l) => ({ id: l.id, guid: l.run, size: l.size })); }
  /** 0.11: the instruments the model must store on its runs so 3D carries what the graph has (api.mep.setRunInstruments takes `writes`); `left` = on lines with no run. */
  instrumentWrites(desc) { return this.E.instrumentWrites(this.graph(), desc); }
  acknowledge(view, id) { this.graph().acknowledge(view, id); this.save(); }
  /** The P&ID drawing was redrawn from the graph: it shows everything now. */
  adoptPid() { this.graph().merge('pid', this.E.readPid(this.sheets())); this.save(); }
}
