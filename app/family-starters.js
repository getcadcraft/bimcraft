/* SPDX-License-Identifier: Apache-2.0 */
/**
 * family-starters.js — the families BimCraft starts with (0.6 DC.114, session bim-families_PART_2). No DOM.
 *
 *   starterRecipe(key) → a family recipe (family-model.js format) for a starter door / window kind of model-openings.js
 *                        (DOOR_TYPES / WINDOW_TYPES keys), or for a starter furniture family (STARTER_FURNITURE keys)
 *   STARTER_KEYS       every starter family key, doors first, then windows, then furniture
 *   STARTER_FURNITURE  the furniture families: a table, a shelf unit, a base cabinet (each with a visibility parameter)
 *   STARTER_FIXTURES   plumbing fixtures with their connectors: a water closet, a lavatory, a kitchen sink, a shower tray and a
 *                      laundry tub. Their front is at y = 0 and the wall behind at y = Depth; drains are sized at the smallest
 *                      fixture drain of NBR 8160 (DN 100 for the water closet), water at DN 20. Each says which fixture it is
 *                      (`fixture`, mep/fixtures.js), so a drain can be sized by the fixture units it carries.
 *
 * The door and window recipes are model-openings.js `doorParts` / `windowParts` written as solids bound to parameters: the
 * same boxes, in the same order, with the same numbers (constants are written with JavaScript's own digits), so an element
 * drawn from its recipe is the element drawn before families existed (bin/test-bimcraft.mjs --families checks every kind,
 * both faces, several sizes and wall thicknesses against doorParts / windowParts). Hosted recipes read two names the wall
 * gives: WallThickness (mm) and Face (1 = the door swings to / the window sits on the wall's left, −1 = its right).
 */
import { DOOR_TYPES, WINDOW_TYPES, openingType, openingTypeName } from './opening-types.js';
import { t as tr } from './i18n.js';

const IN = 25.4;
const FRAME = 1.5 * IN, LEAF = 1.75 * IN, WFRAME = 2 * IN, WDEPTH = 4.5 * IN, GLASS = 6;

// ---- a tiny expression builder: numbers fold as JavaScript would, names stay names ----
const ex = (x) => (typeof x === 'number' ? String(x) : x);
const num = (x) => typeof x === 'number';
const add = (a, b) => (num(a) && num(b) ? a + b : `(${ex(a)} + ${ex(b)})`);
const sub = (a, b) => (num(a) && num(b) ? a - b : `(${ex(a)} - ${ex(b)})`);
const mul = (a, b) => (num(a) && num(b) ? a * b : `(${ex(a)} * ${ex(b)})`);
const div = (a, b) => (num(a) && num(b) ? a / b : `(${ex(a)} / ${ex(b)})`);
const neg = (a) => (num(a) ? -a : `(-${ex(a)})`);
const min = (...a) => `min(${a.map(ex).join(', ')})`;
const max = (...a) => `max(${a.map(ex).join(', ')})`;
const iff = (c, a, b) => `if(${c}, ${ex(a)}, ${ex(b)})`;
const POS = '(Face > 0)';

const P = (key, kind, value, formula = null) => (formula === null ? { key, kind, value } : { key, kind, value: 0, formula: ex(formula) });

function doorRecipe(type) {
  const W = 'Width', H = 'Height', T = 'WallThickness', s = 'Face';
  const params = [P('Width', 'length', type.width), P('Height', 'length', type.height),
    P('Frame', 'length', 0, min(FRAME, div(W, 6))), P('Inner', 'length', 0, sub(W, mul(2, 'Frame'))), P('Top', 'length', 0, sub(H, 'Frame'))];
  const f = 'Frame', inner = 'Inner', top = 'Top';
  const solids = [];
  const box = (x0, y0, z0, x1, y1, z1, style) => solids.push({ id: 's' + (solids.length + 1), op: 'box', x0: ex(x0), y0: ex(y0), z0: ex(z0), x1: ex(x1), y1: ex(y1), z1: ex(z1), style });
  const y0 = div(neg(T), 2), y1 = div(T, 2);
  box(0, y0, 0, f, y1, H, 'frame'); box(sub(W, f), y0, 0, W, y1, H, 'frame'); box(f, y0, sub(H, f), sub(W, f), y1, H, 'frame');
  const ly0 = iff(POS, sub(y1, LEAF), y0), ly1 = iff(POS, y1, add(y0, LEAF));
  if (type.garage) box(f, -LEAF / 2, 0, sub(W, f), LEAF / 2, top, 'garage');
  else if (type.slide) {
    params.push(P('Half', 'length', 0, add(div(inner, 2), 25)));
    const half = 'Half';
    box(f, -LEAF, 0, add(f, half), 0, top, 'glass'); box(sub(sub(W, f), half), 0, 0, sub(W, f), LEAF, top, 'glass');
    box(f, -LEAF, 0, add(f, 40), 0, top, 'leaf'); box(sub(sub(W, f), 40), 0, 0, sub(W, f), LEAF, top, 'leaf');
  } else if (type.pocket) box(f, -LEAF / 2, 0, sub(W, f), LEAF / 2, top, 'leaf');
  else if (type.bifold) box(f, -LEAF / 2, 0, sub(W, f), LEAF / 2, top, 'leaf');
  else if (type.barn) {
    const yb = iff(POS, y1, sub(y0, LEAF)), yt = iff(POS, add(y1, LEAF), y0);
    box(-50, yb, 0, add(W, 50), yt, add(H, 25), 'leaf');
    box(-50, iff(POS, yt, sub(yb, 25)), add(H, 40), mul(2, W), iff(POS, add(yt, 25), yb), add(H, 80), 'frame');
  } else if (type.sidelites) {
    params.push(P('Sidelite', 'length', 0, min(type.sidelites, div(W, 4))));
    const sl = 'Sidelite';
    box(f, -GLASS / 2, 0, add(f, sl), GLASS / 2, top, 'glass'); box(sub(sub(W, f), sl), -GLASS / 2, 0, sub(W, f), GLASS / 2, top, 'glass');
    box(add(f, sl), y0, 0, add(add(f, sl), f), y1, top, 'frame'); box(sub(sub(sub(W, f), sl), f), y0, 0, sub(sub(W, f), sl), y1, top, 'frame');
    box(add(add(f, sl), f), ly0, 0, sub(sub(sub(W, f), sl), f), ly1, sub(top, 3), 'leaf');
  } else if (type.leaves === 2) {
    if (type.glazed) {
      for (const [a, b] of [[f, sub(add(f, div(inner, 2)), 2)], [add(add(f, div(inner, 2)), 2), sub(W, f)]]) {
        const st = 100;
        box(a, ly0, 0, add(a, st), ly1, sub(top, 3), 'leaf'); box(sub(b, st), ly0, 0, b, ly1, sub(top, 3), 'leaf');
        box(add(a, st), ly0, 0, sub(b, st), ly1, 200, 'leaf'); box(add(a, st), ly0, sub(sub(top, 3), st), sub(b, st), ly1, sub(top, 3), 'leaf');
        box(add(a, st), sub(div(add(ly0, ly1), 2), GLASS / 2), 200, sub(b, st), add(div(add(ly0, ly1), 2), GLASS / 2), sub(sub(top, 3), st), 'glass');
      }
    } else { box(f, ly0, 0, sub(add(f, div(inner, 2)), 2), ly1, sub(top, 3), 'leaf'); box(add(add(f, div(inner, 2)), 2), ly0, 0, sub(W, f), ly1, sub(top, 3), 'leaf'); }
  } else box(f, ly0, 0, sub(W, f), ly1, sub(top, 3), 'leaf');
  void s;
  return { params, solids };
}

function windowRecipe(type) {
  const W = 'Width', H = 'Height', T = 'WallThickness';
  const params = [P('Width', 'length', type.width), P('Height', 'length', type.height),
    P('Frame', 'length', 0, min(WFRAME, div(W, 6), div(H, 6))), P('Depth', 'length', 0, min(WDEPTH, T))];
  const f = 'Frame', d = 'Depth';
  params.push(P('Y0', 'length', 0, iff(POS, sub(div(T, 2), d), div(neg(T), 2))));
  params.push(P('Y1', 'length', 0, add('Y0', d)));
  params.push(P('GlassY', 'length', 0, div(add('Y0', 'Y1'), 2)));
  const y0 = 'Y0', y1 = 'Y1', gy = 'GlassY';
  const solids = [];
  const box = (x0, by0, z0, x1, by1, z1, style) => solids.push({ id: 's' + (solids.length + 1), op: 'box', x0: ex(x0), y0: ex(by0), z0: ex(z0), x1: ex(x1), y1: ex(by1), z1: ex(z1), style });
  box(0, y0, 0, f, y1, H, 'frame'); box(sub(W, f), y0, 0, W, y1, H, 'frame');
  box(f, y0, 0, sub(W, f), y1, f, 'frame'); box(f, y0, sub(H, f), sub(W, f), y1, H, 'frame');
  if (type.rail) { const m = div(H, 2); box(f, add(y0, mul(d, 0.15)), sub(m, div(f, 2)), sub(W, f), sub(y1, mul(d, 0.15)), add(m, div(f, 2)), 'frame'); }
  if (type.stile) { const m = div(W, 2); box(sub(m, div(f, 2)), add(y0, mul(d, 0.15)), f, add(m, div(f, 2)), sub(y1, mul(d, 0.15)), sub(H, f), 'frame'); }
  box(f, sub(gy, GLASS / 2), f, sub(W, f), add(gy, GLASS / 2), sub(H, f), 'glass');
  if (type.well) {
    params.push(P('WellWidth', 'length', 0, max(48 * IN, add(W, 12 * IN))));
    const ww = 'WellWidth', x0 = div(sub(W, ww), 2), x1 = div(add(W, ww), 2), near = div(T, 2), far = add(div(T, 2), 36 * IN), bottom = -6 * IN, gauge = IN;
    const Y = (v) => mul('Face', v);
    const wall = (a, b, c, e) => box(a, min(Y(b), Y(e)), bottom, c, max(Y(b), Y(e)), H, 'frame');
    wall(sub(x0, gauge), near, x0, add(far, gauge));
    wall(x1, near, add(x1, gauge), add(far, gauge));
    wall(x0, far, x1, add(far, gauge));
  }
  return { params, solids };
}

/** Furniture to start from (each with a Yes / No parameter, so a visibility parameter is there to see). */
export const STARTER_FURNITURE = ['fam-table', 'fam-shelf', 'fam-cabinet', 'fam-bed', 'fam-sofa', 'fam-wardrobe', 'fam-chair', 'fam-desk'];   // + bed, sofa, wardrobe, chair, desk: 0.8 EG.60 (furnish.js places them)

function furnitureRecipe(key) {
  /* i18n-ignore-start: the furniture's expressions (code, not words) */
  if (key === 'fam-table') return {
    ifc: { class: 'IfcFurniture', predefined: 'TABLE' },
    params: [P('Width', 'length', 1500), P('Depth', 'length', 900), P('Height', 'length', 750), P('Top', 'length', 30), P('Leg', 'length', 50),
      { key: 'Apron', kind: 'yesno', value: 1 }],
    solids: [
      { id: 's1', name: tr('fam.part.top'), op: 'box', x0: '(-Width / 2)', y0: '(-Depth / 2)', z0: '(Height - Top)', x1: '(Width / 2)', y1: '(Depth / 2)', z1: 'Height', style: 'wood' },
      { id: 's2', name: tr('fam.part.leg'), op: 'box', x0: '(-Width / 2 + 25)', y0: '(-Depth / 2 + 25)', z0: '0', x1: '(-Width / 2 + 25 + Leg)', y1: '(-Depth / 2 + 25 + Leg)', z1: '(Height - Top)', style: 'wood' },
      { id: 's3', name: tr('fam.part.leg'), op: 'box', x0: '(Width / 2 - 25 - Leg)', y0: '(-Depth / 2 + 25)', z0: '0', x1: '(Width / 2 - 25)', y1: '(-Depth / 2 + 25 + Leg)', z1: '(Height - Top)', style: 'wood' },
      { id: 's4', name: tr('fam.part.leg'), op: 'box', x0: '(-Width / 2 + 25)', y0: '(Depth / 2 - 25 - Leg)', z0: '0', x1: '(-Width / 2 + 25 + Leg)', y1: '(Depth / 2 - 25)', z1: '(Height - Top)', style: 'wood' },
      { id: 's5', name: tr('fam.part.leg'), op: 'box', x0: '(Width / 2 - 25 - Leg)', y0: '(Depth / 2 - 25 - Leg)', z0: '0', x1: '(Width / 2 - 25)', y1: '(Depth / 2 - 25)', z1: '(Height - Top)', style: 'wood' },
      { id: 's6', name: tr('fam.part.apron'), op: 'box', x0: '(-Width / 2 + 25 + Leg)', y0: '(-Depth / 2 + 35)', z0: '(Height - Top - 90)', x1: '(Width / 2 - 25 - Leg)', y1: '(-Depth / 2 + 55)', z1: '(Height - Top)', style: 'wood', visible: 'Apron' },
      { id: 's7', name: tr('fam.part.apron'), op: 'box', x0: '(-Width / 2 + 25 + Leg)', y0: '(Depth / 2 - 55)', z0: '(Height - Top - 90)', x1: '(Width / 2 - 25 - Leg)', y1: '(Depth / 2 - 35)', z1: '(Height - Top)', style: 'wood', visible: 'Apron' },
    ],
    booleans: [],
  };
  if (key === 'fam-shelf') return {
    ifc: { class: 'IfcFurniture', predefined: 'SHELF' },
    params: [P('Width', 'length', 900), P('Depth', 'length', 350), P('Height', 'length', 1800), P('Board', 'length', 18), { key: 'Shelves', kind: 'number', value: 4 },
      { key: 'Back', kind: 'yesno', value: 1 }, P('Gap', 'length', 0, '((Height - 2 * Board) / Shelves)')],
    solids: [
      { id: 's1', name: tr('fam.part.side'), op: 'box', x0: '(-Width / 2)', y0: '0', z0: '0', x1: '(-Width / 2 + Board)', y1: 'Depth', z1: 'Height', style: 'wood' },
      { id: 's2', name: tr('fam.part.side'), op: 'box', x0: '(Width / 2 - Board)', y0: '0', z0: '0', x1: '(Width / 2)', y1: 'Depth', z1: 'Height', style: 'wood' },
      { id: 's3', name: tr('fam.part.bottom'), op: 'box', x0: '(-Width / 2 + Board)', y0: '0', z0: '0', x1: '(Width / 2 - Board)', y1: 'Depth', z1: 'Board', style: 'wood' },
      { id: 's4', name: tr('fam.part.top'), op: 'box', x0: '(-Width / 2 + Board)', y0: '0', z0: '(Height - Board)', x1: '(Width / 2 - Board)', y1: 'Depth', z1: 'Height', style: 'wood' },
      { id: 's5', name: tr('fam.part.shelf'), op: 'box', x0: '(-Width / 2 + Board)', y0: '0', z0: '(Board + Gap)', x1: '(Width / 2 - Board)', y1: 'Depth', z1: '(2 * Board + Gap)', style: 'wood', visible: '(Shelves >= 2)' },
      { id: 's6', name: tr('fam.part.shelf'), op: 'box', x0: '(-Width / 2 + Board)', y0: '0', z0: '(Board + 2 * Gap)', x1: '(Width / 2 - Board)', y1: 'Depth', z1: '(2 * Board + 2 * Gap)', style: 'wood', visible: '(Shelves >= 3)' },
      { id: 's7', name: tr('fam.part.shelf'), op: 'box', x0: '(-Width / 2 + Board)', y0: '0', z0: '(Board + 3 * Gap)', x1: '(Width / 2 - Board)', y1: 'Depth', z1: '(2 * Board + 3 * Gap)', style: 'wood', visible: '(Shelves >= 4)' },
      { id: 's8', name: tr('fam.part.back'), op: 'box', x0: '(-Width / 2)', y0: '(Depth - 6)', z0: '0', x1: '(Width / 2)', y1: 'Depth', z1: 'Height', style: 'wood', visible: 'Back' },
    ],
    booleans: [],
  };
  // 0.8 EG.60 (bim_PART_2): a bed, a sofa and a wardrobe, for furnish.js. Like the shelf: centred across, the front at y = 0, the back (headboard, sofa back) at y = Depth.
  if (key === 'fam-bed') return {
    ifc: { class: 'IfcFurniture', predefined: 'NOTDEFINED' },
    params: [P('Width', 'length', 1600), P('Depth', 'length', 2000), P('Height', 'length', 520), P('Frame', 'length', 300), P('Headboard', 'length', 1000)],
    solids: [
      { id: 's1', name: tr('fam.part.frame'), op: 'box', x0: '(-Width / 2)', y0: '0', z0: '100', x1: '(Width / 2)', y1: 'Depth', z1: 'Frame', style: 'wood' },
      { id: 's2', name: tr('fam.part.mattress'), op: 'box', x0: '(-Width / 2 + 40)', y0: '40', z0: 'Frame', x1: '(Width / 2 - 40)', y1: '(Depth - 80)', z1: 'Height', style: 'frame' },
      { id: 's3', name: tr('fam.part.headboard'), op: 'box', x0: '(-Width / 2)', y0: '(Depth - 60)', z0: '100', x1: '(Width / 2)', y1: 'Depth', z1: 'Headboard', style: 'wood' },
      { id: 's4', name: tr('fam.part.leg'), op: 'box', x0: '(-Width / 2)', y0: '0', z0: '0', x1: '(-Width / 2 + 60)', y1: '60', z1: '100', style: 'wood' },
      { id: 's5', name: tr('fam.part.leg'), op: 'box', x0: '(Width / 2 - 60)', y0: '0', z0: '0', x1: '(Width / 2)', y1: '60', z1: '100', style: 'wood' },
    ],
    booleans: [],
  };
  if (key === 'fam-sofa') return {
    ifc: { class: 'IfcFurniture', predefined: 'NOTDEFINED' },
    params: [P('Width', 'length', 2000), P('Depth', 'length', 900), P('Height', 'length', 850), P('Seat', 'length', 430), P('Arm', 'length', 180)],
    solids: [
      { id: 's1', name: tr('fam.part.seat'), op: 'box', x0: '(-Width / 2)', y0: '0', z0: '80', x1: '(Width / 2)', y1: 'Depth', z1: 'Seat', style: 'leaf' },
      { id: 's2', name: tr('fam.part.back'), op: 'box', x0: '(-Width / 2)', y0: '(Depth - 220)', z0: 'Seat', x1: '(Width / 2)', y1: 'Depth', z1: 'Height', style: 'leaf' },
      { id: 's3', name: tr('fam.part.arm'), op: 'box', x0: '(-Width / 2)', y0: '0', z0: 'Seat', x1: '(-Width / 2 + Arm)', y1: '(Depth - 220)', z1: '(Seat + 250)', style: 'leaf' },
      { id: 's4', name: tr('fam.part.arm'), op: 'box', x0: '(Width / 2 - Arm)', y0: '0', z0: 'Seat', x1: '(Width / 2)', y1: '(Depth - 220)', z1: '(Seat + 250)', style: 'leaf' },
      { id: 's5', name: tr('fam.part.leg'), op: 'box', x0: '(-Width / 2 + 40)', y0: '40', z0: '0', x1: '(Width / 2 - 40)', y1: '(Depth - 40)', z1: '80', style: 'wood' },
    ],
    booleans: [],
  };
  if (key === 'fam-wardrobe') return {
    ifc: { class: 'IfcFurniture', predefined: 'NOTDEFINED' },
    params: [P('Width', 'length', 1200), P('Depth', 'length', 600), P('Height', 'length', 2100), { key: 'Doors', kind: 'yesno', value: 1 }],
    solids: [
      { id: 's1', name: tr('fam.part.carcass'), op: 'box', x0: '(-Width / 2)', y0: '0', z0: '0', x1: '(Width / 2)', y1: 'Depth', z1: 'Height', style: 'wood' },
      { id: 's2', name: tr('fam.part.door'), op: 'box', x0: '(-Width / 2 + 2)', y0: '-18', z0: '0', x1: '-1', y1: '0', z1: 'Height', style: 'leaf', visible: 'Doors' },
      { id: 's3', name: tr('fam.part.door'), op: 'box', x0: '1', y0: '-18', z0: '0', x1: '(Width / 2 - 2)', y1: '0', z1: 'Height', style: 'leaf', visible: 'Doors' },
    ],
    booleans: [],
  };
  if (key === 'fam-chair') return {
    ifc: { class: 'IfcFurniture', predefined: 'CHAIR' },
    params: [P('Width', 'length', 450), P('Depth', 'length', 500), P('Height', 'length', 880), P('SeatHeight', 'length', 450), P('Leg', 'length', 40)],
    solids: [
      { id: 's1', name: tr('fam.part.seat'), op: 'box', x0: '(-Width / 2)', y0: '0', z0: '(SeatHeight - 40)', x1: '(Width / 2)', y1: 'Depth', z1: 'SeatHeight', style: 'wood' },
      { id: 's2', name: tr('fam.part.back'), op: 'box', x0: '(-Width / 2)', y0: '(Depth - 30)', z0: 'SeatHeight', x1: '(Width / 2)', y1: 'Depth', z1: 'Height', style: 'wood' },
      { id: 's3', name: tr('fam.part.leg'), op: 'box', x0: '(-Width / 2)', y0: '0', z0: '0', x1: '(-Width / 2 + Leg)', y1: 'Leg', z1: '(SeatHeight - 40)', style: 'wood' },
      { id: 's4', name: tr('fam.part.leg'), op: 'box', x0: '(Width / 2 - Leg)', y0: '0', z0: '0', x1: '(Width / 2)', y1: 'Leg', z1: '(SeatHeight - 40)', style: 'wood' },
      { id: 's5', name: tr('fam.part.leg'), op: 'box', x0: '(-Width / 2)', y0: '(Depth - Leg)', z0: '0', x1: '(-Width / 2 + Leg)', y1: 'Depth', z1: '(SeatHeight - 40)', style: 'wood' },
      { id: 's6', name: tr('fam.part.leg'), op: 'box', x0: '(Width / 2 - Leg)', y0: '(Depth - Leg)', z0: '0', x1: '(Width / 2)', y1: 'Depth', z1: '(SeatHeight - 40)', style: 'wood' },
    ],
    booleans: [],
  };
  if (key === 'fam-desk') return {
    ifc: { class: 'IfcFurniture', predefined: 'DESK' },
    params: [P('Width', 'length', 1400), P('Depth', 'length', 700), P('Height', 'length', 740), P('Top', 'length', 30), P('Panel', 'length', 25), { key: 'Drawers', kind: 'yesno', value: 1 }],
    solids: [
      { id: 's1', name: tr('fam.part.top'), op: 'box', x0: '(-Width / 2)', y0: '0', z0: '(Height - Top)', x1: '(Width / 2)', y1: 'Depth', z1: 'Height', style: 'wood' },
      { id: 's2', name: tr('fam.part.side'), op: 'box', x0: '(-Width / 2 + 20)', y0: '40', z0: '0', x1: '(-Width / 2 + 20 + Panel)', y1: '(Depth - 20)', z1: '(Height - Top)', style: 'wood' },
      { id: 's3', name: tr('fam.part.side'), op: 'box', x0: '(Width / 2 - 20 - Panel)', y0: '40', z0: '0', x1: '(Width / 2 - 20)', y1: '(Depth - 20)', z1: '(Height - Top)', style: 'wood' },
      { id: 's4', name: tr('fam.part.back'), op: 'box', x0: '(-Width / 2 + 20)', y0: '(Depth - 45)', z0: '(Height - Top - 300)', x1: '(Width / 2 - 20)', y1: '(Depth - 20)', z1: '(Height - Top)', style: 'wood' },
      { id: 's5', name: tr('fam.part.drawers'), op: 'box', x0: '(Width / 2 - 20 - Panel - 400)', y0: '40', z0: '(Height - Top - 600)', x1: '(Width / 2 - 20 - Panel)', y1: '(Depth - 45)', z1: '(Height - Top)', style: 'leaf', visible: 'Drawers' },
    ],
    booleans: [],
  };
  // a base cabinet: a carcass with its front recess cut out by a Boolean, a door, a toe kick cut
  return {
    ifc: { class: 'IfcFurniture', predefined: 'NOTDEFINED' },
    params: [P('Width', 'length', 600), P('Depth', 'length', 600), P('Height', 'length', 870), P('ToeKick', 'length', 100), { key: 'Door', kind: 'yesno', value: 1 }],
    solids: [
      { id: 's1', name: tr('fam.part.carcass'), op: 'box', x0: '(-Width / 2)', y0: '0', z0: '0', x1: '(Width / 2)', y1: 'Depth', z1: 'Height', style: 'wood' },
      { id: 's2', name: tr('fam.part.recess'), op: 'box', x0: '(-Width / 2 + 18)', y0: '-1', z0: '(ToeKick + 18)', x1: '(Width / 2 - 18)', y1: '(Depth - 18)', z1: '(Height - 18)', style: 'wood' },
      { id: 's3', name: tr('fam.part.toekick'), op: 'box', x0: '(-Width / 2 - 1)', y0: '-1', z0: '-1', x1: '(Width / 2 + 1)', y1: '75', z1: 'ToeKick', style: 'wood' },
      { id: 's4', name: tr('fam.part.door'), op: 'box', x0: '(-Width / 2 + 2)', y0: '-18', z0: 'ToeKick', x1: '(Width / 2 - 2)', y1: '0', z1: 'Height', style: 'leaf', visible: 'Door' },
    ],
    booleans: [{ id: 'b1', op: 'difference', a: 's1', b: 's2' }, { id: 'b2', op: 'difference', a: 'b1', b: 's3' }],
  };
  /* i18n-ignore-end */
}

/** Plumbing fixtures to start from, each with its drain and water connectors. */
export const STARTER_FIXTURES = ['fam-wc', 'fam-lavatory', 'fam-kitchensink', 'fam-shower', 'fam-laundrytub', 'fam-bathtub'];   // + bath tub: 0.8 EG.60

function fixtureRecipe(key) {
  /* i18n-ignore-start: the fixtures' expressions and connector keys (code, not words) */
  const box = (id, part, x0, y0, z0, x1, y1, z1, style = 'ceramic') => ({ id, name: tr('fam.part.' + part), op: 'box', x0, y0, z0, x1, y1, z1, style });
  const conn = (id, system, x, y, z, dir, size, flow) => ({ id, name: tr(system === 'cw' ? 'fam.part.water' : 'fam.part.drain'), domain: 'pipe', system, x, y, z, dir, size, flow });
  // a bowl or basin: a block with its inside cut out (Rim thick all round, Bowl deep)
  const basin = (W, D, z0, z1) => [box('s1', 'basin', '(-' + W + ' / 2)', '0', z0, '(' + W + ' / 2)', D, z1),
    box('s2', 'bowl', '(-' + W + ' / 2 + Rim)', 'Rim', '(' + z1 + ' - Bowl)', '(' + W + ' / 2 - Rim)', '(' + D + ' - Rim)', '(' + z1 + ' + 1)')];
  if (key === 'fam-wc') return {
    fixture: 'wc', ifc: { class: 'IfcSanitaryTerminal', predefined: 'TOILETPAN' },
    params: [P('Width', 'length', 380), P('Depth', 'length', 680), P('Height', 'length', 400), P('TankHeight', 'length', 780), P('Outlet', 'length', 300)],
    solids: [
      { id: 's1', name: tr('fam.part.bowl'), op: 'extrude', plane: 'xy', at: '0', profile: [['(-Width / 2)', '(Depth - 200)'], ['(-Width / 2)', '150', 0.4142], ['(Width / 2)', '150'], ['(Width / 2)', '(Depth - 200)']], depth: 'Height', style: 'ceramic' },
      box('s2', 'tank', '(-Width / 2 - 20)', '(Depth - 200)', '0', '(Width / 2 + 20)', 'Depth', 'TankHeight'),
    ],
    booleans: [],
    connectors: [conn('c1', 'san', '0', '(Depth - Outlet)', '0', '-z', '100', 'out'), conn('c2', 'cw', '(-Width / 2 + 60)', 'Depth', '200', '+y', '20', 'in')],
  };
  if (key === 'fam-lavatory') return {
    fixture: 'lav', ifc: { class: 'IfcSanitaryTerminal', predefined: 'WASHHANDBASIN' },
    params: [P('Width', 'length', 500), P('Depth', 'length', 450), P('Height', 'length', 850), P('Rim', 'length', 20), P('Bowl', 'length', 150)],
    solids: [...basin('Width', 'Depth', '(Height - 180)', 'Height'), box('s3', 'pedestal', '-90', '(Depth - 250)', '0', '90', '(Depth - 60)', '(Height - 180)')],
    booleans: [{ id: 'b1', op: 'difference', a: 's1', b: 's2' }],
    connectors: [conn('c1', 'san', '0', 'Depth', '500', '+y', '40', 'out'), conn('c2', 'cw', '0', 'Depth', '(Height - 250)', '+y', '20', 'in')],
  };
  if (key === 'fam-kitchensink') return {
    fixture: 'sink', ifc: { class: 'IfcSanitaryTerminal', predefined: 'SINK' },
    params: [P('Width', 'length', 1200), P('Depth', 'length', 600), P('Height', 'length', 900), P('Rim', 'length', 60), P('Bowl', 'length', 180)],
    solids: [box('s1', 'cabinet', '(-Width / 2)', '0', '0', '(Width / 2)', 'Depth', '(Height - 30)', 'wood'), box('s2', 'top', '(-Width / 2)', '0', '(Height - 30)', '(Width / 2)', 'Depth', 'Height', 'metal'),
      box('s3', 'bowl', '-250', 'Rim', '(Height - Bowl)', '250', '(Depth - Rim)', '(Height + 1)', 'metal')],
    booleans: [{ id: 'b1', op: 'difference', a: 's2', b: 's3' }],
    connectors: [conn('c1', 'san', '0', 'Depth', '500', '+y', '50', 'out'), conn('c2', 'cw', '100', 'Depth', '600', '+y', '20', 'in')],
  };
  if (key === 'fam-shower') return {
    fixture: 'shower', ifc: { class: 'IfcSanitaryTerminal', predefined: 'SHOWER' },
    params: [P('Width', 'length', 900), P('Depth', 'length', 900), P('Tray', 'length', 40), P('HeadHeight', 'length', 2100)],
    solids: [box('s1', 'tray', '(-Width / 2)', '0', '0', '(Width / 2)', 'Depth', 'Tray'), { id: 's2', name: tr('fam.part.head'), op: 'sweep', path: [['0', 'Depth', 'HeadHeight'], ['0', '(Depth - 250)', 'HeadHeight']], radius: '12', style: 'metal' }],
    booleans: [],
    connectors: [conn('c1', 'san', '0', '(Depth / 2)', '0', '-z', '40', 'out'), conn('c2', 'cw', '0', 'Depth', 'HeadHeight', '+y', '20', 'in')],
  };
  if (key === 'fam-bathtub') return {
    fixture: 'bath', ifc: { class: 'IfcSanitaryTerminal', predefined: 'BATH' },
    params: [P('Width', 'length', 1700), P('Depth', 'length', 750), P('Height', 'length', 550), P('Wall', 'length', 40), P('Floor', 'length', 100)],
    solids: [box('s1', 'tub', '(-Width / 2)', '0', '0', '(Width / 2)', 'Depth', 'Height'),
      box('s2', 'recess', '(-Width / 2 + Wall)', 'Wall', 'Floor', '(Width / 2 - Wall)', '(Depth - Wall)', '(Height + 1)')],
    booleans: [{ id: 'b1', op: 'difference', a: 's1', b: 's2' }],
    connectors: [conn('c1', 'san', '(-Width / 2 + 150)', '(Depth / 2)', '0', '-z', '40', 'out'), conn('c2', 'cw', '(Width / 2 - 150)', 'Depth', '(Height + 100)', '+y', '20', 'in')],
  };
  return {
    fixture: 'laundry', ifc: { class: 'IfcSanitaryTerminal', predefined: 'SINK' },
    params: [P('Width', 'length', 600), P('Depth', 'length', 550), P('Height', 'length', 850), P('Rim', 'length', 40), P('Bowl', 'length', 300)],
    solids: [...basin('Width', 'Depth', '0', 'Height')],
    booleans: [{ id: 'b1', op: 'difference', a: 's1', b: 's2' }],
    connectors: [conn('c1', 'san', '0', 'Depth', '450', '+y', '40', 'out'), conn('c2', 'cw', '0', 'Depth', '(Height + 200)', '+y', '20', 'in')],
  };
  /* i18n-ignore-end */
}

export const STARTER_KEYS = [...DOOR_TYPES.map((x) => x.key), ...WINDOW_TYPES.map((x) => x.key), ...STARTER_FURNITURE, ...STARTER_FIXTURES];

/** A starter family's recipe; null for an unknown key. Names come from the language files (as the tools show them). */
export function starterRecipe(key) {
  const type = openingType(key);
  if (type) {
    const r = type.kind === 'door' ? doorRecipe(type) : windowRecipe(type);
    return {
      format: 'cadcraft-family', version: 1, key, name: openingTypeName(type), kind: type.kind, host: 'wall', base: key,
      ifc: { class: type.kind === 'door' ? 'IfcDoor' : 'IfcWindow' }, params: r.params, solids: r.solids, booleans: [], starter: true,
    };
  }
  if (STARTER_FIXTURES.includes(key)) {
    const r = fixtureRecipe(key);
    return { format: 'cadcraft-family', version: 1, key, name: tr('fam.starter.' + key), kind: 'fixture', host: 'none', base: '', ...r, starter: true };
  }
  if (!STARTER_FURNITURE.includes(key)) return null;
  const r = furnitureRecipe(key);
  return { format: 'cadcraft-family', version: 1, key, name: tr('fam.starter.' + key), kind: 'furniture', host: 'none', base: '', ifc: r.ifc, params: r.params, solids: r.solids, booleans: r.booleans, starter: true };
}
