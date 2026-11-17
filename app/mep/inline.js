/* SPDX-License-Identifier: Apache-2.0 */
/**
 * mep/inline.js — the in-line components a pipe or duct run can carry (0.9.1, suggestions #1499 and #1493). Import-free.
 * A component cuts into its run, keeps both sides connected through its two ports, takes the run's size, moves with the run,
 * and the run is whole again when it is removed (mep-model.js keeps them on the run: CadCraft_MepRun.Valves).
 *
 *   key             on    IFC4 occurrence · PredefinedType                 IFC2X3 occurrence + type
 *   gate            pipe  IfcValve ISOLATING                               IfcFlowController + IfcValveType ISOLATING
 *   ball            pipe  IfcValve ISOLATING                               (same)
 *   butterfly       pipe  IfcValve ISOLATING                               (same)
 *   globe           pipe  IfcValve REGULATING                              IfcFlowController + IfcValveType REGULATING
 *   check           pipe  IfcValve CHECK                                   IfcFlowController + IfcValveType CHECK
 *   balancing       pipe  IfcValve COMMISSIONING                           IfcFlowController + IfcValveType COMMISSIONING
 *   control         pipe  IfcValve REGULATING (ObjectType "Control valve") IfcFlowController + IfcValveType REGULATING
 *   strainer        pipe  IfcFilter STRAINER                               IfcFlowTreatmentDevice + IfcFilterType STRAINER
 *   damper-volume   duct  IfcDamper BALANCINGDAMPER                        IfcFlowController + IfcDamperType BALANCINGDAMPER
 *   damper-fire     duct  IfcDamper FIREDAMPER                             IfcFlowController + IfcDamperType FIREDAMPER
 *   oem             pipe / duct   a manufacturer's family (mep/oem-families.js): the class of the kind it stands for
 * (IfcValveTypeEnum, IfcFilterTypeEnum and IfcDamperTypeEnum as the IFC4 and IFC2X3 schemas list them.)
 *
 * LENGTHS ARE SCHEMATIC. A built-in component's face-to-face length is a drawing proportion of the run's size, NOT a valve
 * standard's or a maker's dimension: `k` × the pipe's outside diameter, at least `min` mm (ducts: a fixed length). The first
 * four keep the proportion they have had since 0.6, so files drawn earlier come out the same. Only a manufacturer's family
 * has a real length: the distance between its two ports.
 */
export const INLINE = {
  gate: { on: 'pipe', cls: 'IFCVALVE', pre: 'ISOLATING', tcls: 'IFCVALVETYPE', x3: 'IFCFLOWCONTROLLER', k: 2.5, min: 75 },
  ball: { on: 'pipe', cls: 'IFCVALVE', pre: 'ISOLATING', tcls: 'IFCVALVETYPE', x3: 'IFCFLOWCONTROLLER', k: 2.5, min: 75 },
  butterfly: { on: 'pipe', cls: 'IFCVALVE', pre: 'ISOLATING', tcls: 'IFCVALVETYPE', x3: 'IFCFLOWCONTROLLER', k: 0.6, min: 40 },
  globe: { on: 'pipe', cls: 'IFCVALVE', pre: 'REGULATING', tcls: 'IFCVALVETYPE', x3: 'IFCFLOWCONTROLLER', k: 2.5, min: 75 },
  check: { on: 'pipe', cls: 'IFCVALVE', pre: 'CHECK', tcls: 'IFCVALVETYPE', x3: 'IFCFLOWCONTROLLER', k: 2.5, min: 75 },
  balancing: { on: 'pipe', cls: 'IFCVALVE', pre: 'COMMISSIONING', tcls: 'IFCVALVETYPE', x3: 'IFCFLOWCONTROLLER', k: 2.5, min: 75 },
  control: { on: 'pipe', cls: 'IFCVALVE', pre: 'REGULATING', tcls: 'IFCVALVETYPE', x3: 'IFCFLOWCONTROLLER', k: 3, min: 90 },
  strainer: { on: 'pipe', cls: 'IFCFILTER', pre: 'STRAINER', tcls: 'IFCFILTERTYPE', x3: 'IFCFLOWTREATMENTDEVICE', k: 3, min: 90 },
  'damper-volume': { on: 'duct', cls: 'IFCDAMPER', pre: 'BALANCINGDAMPER', tcls: 'IFCDAMPERTYPE', x3: 'IFCFLOWCONTROLLER', fixed: 200 },
  'damper-fire': { on: 'duct', cls: 'IFCDAMPER', pre: 'FIREDAMPER', tcls: 'IFCDAMPERTYPE', x3: 'IFCFLOWCONTROLLER', fixed: 300 },
};
export const INLINE_KINDS = Object.keys(INLINE);
export const OEM_KIND = 'oem';
/** The kinds a run of this kind (pipe | duct) can carry. */
export const inlineKindsFor = (runKind) => INLINE_KINDS.filter((k) => INLINE[k].on === runKind);
/** A built-in component's schematic length on a section (mm). */
export function inlineLength(kind, sec) {
  const d = INLINE[kind];
  if (!d) return 0;
  return d.fixed ? d.fixed : Math.max(d.min, d.k * (sec.od || sec.w));
}
