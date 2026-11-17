/* SPDX-License-Identifier: Apache-2.0 */
/**
 * opening-types.js — the starter door and window kinds (0.5 part 3 BM.4; moved out of model-openings.js in 0.6 DC.114 so the
 * family modules can read them without importing the writer). model-openings.js re-exports everything here. No DOM.
 *
 *   DOOR_TYPES, WINDOW_TYPES, openingType(key)   key, kind ('door' | 'window'), default width / height / sill (mm)
 *   openingTypeName(type)                        its name in the person's language
 *   handKind(type)                               'hinges' | 'slides' | 'folds' | null: what flipping the hand changes
 */
import { t as tr } from './i18n.js';

const IN = 25.4;
/** Starter doors: width × height (mm), op = the IFC4 IfcDoorTypeOperationEnum for hinges at end 'a' / 'b'. */
export const DOOR_TYPES = [
  { key: 'door-single', kind: 'door', width: 36 * IN, height: 80 * IN, leaves: 1, op: ['SINGLE_SWING_LEFT', 'SINGLE_SWING_RIGHT'] },
  { key: 'door-double', kind: 'door', width: 60 * IN, height: 80 * IN, leaves: 2, op: ['DOUBLE_DOOR_SINGLE_SWING', 'DOUBLE_DOOR_SINGLE_SWING'] },
  { key: 'door-sliding', kind: 'door', width: 72 * IN, height: 80 * IN, slide: 2, op: ['SLIDING_TO_LEFT', 'SLIDING_TO_RIGHT'] },
  { key: 'door-pocket', kind: 'door', width: 32 * IN, height: 80 * IN, pocket: true, op: ['SLIDING_TO_LEFT', 'SLIDING_TO_RIGHT'] },
  { key: 'door-garage', kind: 'door', width: 16 * 12 * IN, height: 7 * 12 * IN, garage: true, op: ['ROLLINGUP', 'ROLLINGUP'] },
  // the residential set (0.5 part 4 RC.4, bim-residential; names res.ot.*)
  { key: 'door-bifold', kind: 'door', width: 36 * IN, height: 80 * IN, bifold: true, res: true, op: ['FOLDING_TO_LEFT', 'FOLDING_TO_RIGHT'] },
  { key: 'door-french', kind: 'door', width: 60 * IN, height: 80 * IN, leaves: 2, glazed: true, res: true, op: ['DOUBLE_DOOR_SINGLE_SWING', 'DOUBLE_DOOR_SINGLE_SWING'] },
  { key: 'door-barn', kind: 'door', width: 36 * IN, height: 84 * IN, barn: true, res: true, op: ['SLIDING_TO_LEFT', 'SLIDING_TO_RIGHT'] },
  { key: 'door-entry-sidelites', kind: 'door', width: 60 * IN, height: 80 * IN, sidelites: 12 * IN, res: true, op: ['SINGLE_SWING_LEFT', 'SINGLE_SWING_RIGHT'] },
];
/** Starter windows: width × height, sill (the head at 6'-8" like the doors), the IFC4 IfcWindowTypePartitioningEnum. */
export const WINDOW_TYPES = [
  { key: 'win-fixed', kind: 'window', width: 48 * IN, height: 48 * IN, sill: 32 * IN, part: 'SINGLE_PANEL' },
  { key: 'win-single-hung', kind: 'window', width: 36 * IN, height: 48 * IN, sill: 32 * IN, part: 'DOUBLE_PANEL_HORIZONTAL', rail: true },
  { key: 'win-double-hung', kind: 'window', width: 36 * IN, height: 60 * IN, sill: 20 * IN, part: 'DOUBLE_PANEL_HORIZONTAL', rail: true },
  { key: 'win-casement', kind: 'window', width: 30 * IN, height: 48 * IN, sill: 32 * IN, part: 'SINGLE_PANEL', casement: true },
  { key: 'win-slider', kind: 'window', width: 60 * IN, height: 48 * IN, sill: 32 * IN, part: 'DOUBLE_PANEL_VERTICAL', stile: true },
  { key: 'win-awning', kind: 'window', width: 36 * IN, height: 24 * IN, sill: 56 * IN, part: 'SINGLE_PANEL', awning: true, res: true },
  { key: 'win-picture', kind: 'window', width: 72 * IN, height: 60 * IN, sill: 20 * IN, part: 'SINGLE_PANEL', res: true },
  { key: 'win-basement-egress', kind: 'window', width: 36 * IN, height: 48 * IN, sill: 36 * IN, part: 'SINGLE_PANEL', casement: true, well: true, res: true },
  { key: 'win-transom', kind: 'window', width: 36 * IN, height: 12 * IN, sill: 82 * IN, part: 'SINGLE_PANEL', res: true },
];
/** 0.10 BK.15 (bk-r3-types-10): the starter doors and windows are generic kinds (a size and a way of opening, no product): LOD 200. A family or a Library item says its own. */
export const OPENING_LOD = 200;
export const openingLod = (type) => (type && (DOOR_TYPES.includes(type) || WINDOW_TYPES.includes(type)) ? OPENING_LOD : null);
export const openingType = (key) => DOOR_TYPES.find((x) => x.key === key) || WINDOW_TYPES.find((x) => x.key === key) || null;
export const openingTypeName = (type) => tr((type.res ? 'res.ot.' : 'model.ot.') + type.key);
/** What the hand (a | b) of a type changes (0.6 BIM-F2): 'hinges' (one swing leaf, a casement), 'slides' (sliding, pocket,
 *  barn), 'folds' (bifold), or null — fixed, hung, picture and double doors have no hand to flip. */
export function handKind(type) {
  if (!type) return null;
  if (type.leaves === 1 || type.sidelites || type.casement) return 'hinges';
  if (type.kind === 'door' && (type.slide || type.pocket || type.barn)) return 'slides';
  if (type.bifold) return 'folds';
  return null;
}
