/* SPDX-License-Identifier: Apache-2.0 */
/**
 * model-units.js — lengths for the building tools (0.5 part 3, track BM): typed in and shown in feet and inches or in
 * millimetres. No DOM: bin/test-bimcraft.mjs --model runs it in Node. Everything inside the tools is millimetres.
 *
 *   fmtLen(3810, 'ftin')          → 12'-6"         (to 1/16"; fmtLen(-12.7, 'ftin') → -1/2")
 *   fmtLen(3810, 'mm')            → 3810
 *   parseLen("12'6\"", 'ftin')    → 3810           a bare number is inches in 'ftin', millimetres in 'mm';
 *   parseLen('3.81 m', 'ftin')    → 3810           any unit can be typed (mm, cm, m, in, ft, ' and ", and since 0.7
 *                                                  UNITS every length mark of the shared table: 3 yd, 1 ch, 10 US ft)
 *   parseTyped("@1200,-300", 'mm') → { kind: 'rel', dx, dy }   what the wall tool takes from the keyboard (see below)
 */
import { parseLength } from './libitem.js';
import { parseTo } from './unit-table.js';   // 0.7 UNITS: the shared table (lib/units; a copy: tools/units/sync.mjs)
import { defaultUnit, fillSelect, isOn } from './unit-prefs.js';

/*
 * Display units and the toolbar selector: Joel (yisraelk), getcadcraft/bimcraft PR #4 (0.7). Since 0.7 UNITS they are
 * BimCraft's use of the shared unit table: the selector lists the units turned on in Settings › General › Units (plus
 * the one in use), a new browser starts on the starred length unit when BimCraft has it, and the choice saved in
 * localStorage "bimcraft.model.units" is kept as it was.
 */
// GH.3-A (rule 39): the six units, the table ids and every number-to-text helper live in the neutral display-units.js
// (lib/units; a copy: tools/units/sync-display.mjs bimcraft). Re-exported here so every import of model-units.js still works.
import { UNITS, TABLE_ID, INCH, FACTOR, isMetric } from './display-units.js';
export * from './display-units.js';
const FROM_TABLE = Object.fromEntries(Object.entries(TABLE_ID).map(([k, v]) => [v, k]));
let displayUnits = null;
/** A unit BimCraft shows only while Settings › General › Units has it turned on: turning feet and inches off moves a person to metric. */
const offered = (u) => isOn(TABLE_ID[u]);
export function getDisplayUnits() {
  if (displayUnits && offered(displayUnits)) return displayUnits;
  try { const saved = localStorage.getItem('bimcraft.model.units'); if (UNITS.includes(saved) && offered(saved)) return saved; } catch (e) { /* no storage */ }
  const star = defaultUnit('length', { offer: Object.values(TABLE_ID) });
  if (star) return FROM_TABLE[star];
  const own = defaultUnits();
  return offered(own) ? own : (UNITS.find(offered) || own);
}
/**
 * The toolbar's unit <select> rebuilt from Settings › General › Units: the units turned on (in the table's order) and
 * `current` always; each option keeps BimCraft's own words (read once from the options ui.inc printed).
 */
export function fillUnitSelect(select, current) {
  if (!select) return [];
  if (!select._bcLabels) select._bcLabels = new Map([...select.options].map((o) => [o.value, o.textContent]));
  const words = select._bcLabels;
  select.value = current;
  return fillSelect(select, 'length', { offer: UNITS.map((u) => [u, TABLE_ID[u]]), keep: [current], label: (id, v) => words.get(v) || v });
}
export function setDisplayUnits(unit) {
  if (!UNITS.includes(unit)) return;
  displayUnits = unit;
  try { localStorage.setItem('bimcraft.model.units', unit); } catch (e) { /* this tab */ }
}

/** The default for a new building or a model without a choice: feet and inches where the browser speaks US English. */
export function defaultUnits(lang = (typeof navigator !== 'undefined' && navigator.language) || 'en-US') {
  return /^en-(US|LR|MM)$/i.test(lang) ? 'ftin' : 'mm';
}

/** Text → millimetres (NaN when it is not a length). Bare numbers: inches ('ftin') or millimetres ('mm'). */
export function parseLen(text, units = 'ftin') {
  const s = String(text ?? '').trim();
  if (!s) return NaN;
  // 12' 6" without the dash, 12'6, 6 1/2 (inches), 1/2"
  let v = parseLength(s, FACTOR[units] || INCH);
  if (Number.isFinite(v)) return v;
  let m = s.match(/^(-?\d+(?:\.\d+)?)\s*'\s*-?\s*(\d+(?:\.\d+)?)?(?:\s+(\d+)\/(\d+))?\s*"?$/);
  if (m) return Math.sign(Number(m[1]) || 1) * (Math.abs(Number(m[1])) * 12 + Number(m[2] || 0) + (m[3] ? Number(m[3]) / Number(m[4]) : 0)) * INCH;
  m = s.match(/^(\d+)\s+(\d+)\/(\d+)$/);
  if (m && !isMetric(units)) return (Number(m[1]) + Number(m[2]) / Number(m[3])) * INCH;
  m = s.match(/^(-?)\s*(\d+)\/(\d+)$/);
  if (m && !isMetric(units) && Number(m[3])) return (m[1] ? -1 : 1) * Number(m[2]) / Number(m[3]) * INCH;
  // any other length mark in the shared table (0.7 UNITS): 2.5 dm, 3 yd, 1 ch, 10 US ft, 400 nm
  const r = parseTo(s, 'length', 'mm');
  return r.ok ? r.value : NaN;
}

/**
 * What the wall tool (and anything placed by points) takes from the keyboard after the first point:
 *   12'6"            a length along the direction the pointer shows       → { kind: 'len', len }
 *   12'6"<30         a length at an angle (degrees, counter-clockwise from +X) → { kind: 'polar', len, angle }
 *   @1200,-300       a step from the last point                            → { kind: 'rel', dx, dy }
 *   1200,3400        a point                                               → { kind: 'abs', x, y }
 * → null when it is none of these.
 */
export function parseTyped(text, units = 'ftin') {
  const s = String(text ?? '').trim();
  if (!s) return null;
  const pair = (t) => {
    const parts = splitPair(t);
    if (!parts) return null;
    const a = parseLen(parts[0], units), b = parseLen(parts[1], units);
    return Number.isFinite(a) && Number.isFinite(b) ? [a, b] : null;
  };
  if (s.startsWith('@')) { const p = pair(s.slice(1)); return p ? { kind: 'rel', dx: p[0], dy: p[1] } : null; }
  const lt = s.indexOf('<');
  if (lt > 0) {
    const len = parseLen(s.slice(0, lt), units), angle = Number(s.slice(lt + 1).trim().replace(/°$/, ''));
    return Number.isFinite(len) && len > 0 && Number.isFinite(angle) ? { kind: 'polar', len, angle } : null;
  }
  if (/[,;]/.test(s)) { const p = pair(s); return p ? { kind: 'abs', x: p[0], y: p[1] } : null; }
  const len = parseLen(s, units);
  return Number.isFinite(len) && len > 0 ? { kind: 'len', len } : null;
}

/** "a, b" or "a; b" (a comma inside a number is not allowed, so the first separator splits). */
function splitPair(t) {
  const i = t.search(/[,;]/);
  if (i < 0) return null;
  const a = t.slice(0, i).trim(), b = t.slice(i + 1).trim();
  return a && b ? [a, b] : null;
}

/** An angle in degrees as text, to 0.1°. */
export const fmtAngle = (deg) => { let a = Math.round(((deg % 360) + 360) % 360 * 10) / 10; if (a === 360) a = 0; return a + '°'; };
/** Square millimetres → m² (to 0.01) or ft² (to 0.1), as text with the unit. */
export function fmtArea(mm2, units = 'ftin') {
  if (isMetric(units)) return (Math.round(mm2 / 1e4) / 100).toFixed(2) + ' m²';   // i18n-ignore: unit symbol
  return (Math.round(mm2 / (304.8 * 304.8) * 10) / 10).toFixed(1) + ' ft²';   // i18n-ignore: unit symbol
}

/** A roof pitch typed as a rise over 12 ("6/12", "6:12", "6 in 12") or in degrees ("30", "30°") → degrees, or NaN. */
export function parsePitch(text) {
  const s = String(text ?? '').trim().replace(/°$/, '').trim();
  const m = s.match(/^(\d+(?:\.\d+)?)\s*(?:\/|:|in)\s*(\d+(?:\.\d+)?)$/i);
  if (m) { const run = Number(m[2]); return run > 0 ? Math.atan(Number(m[1]) / run) * 180 / Math.PI : NaN; }
  const d = Number(s);
  return Number.isFinite(d) && s !== '' ? d : NaN;
}
/** A pitch as text: a rise over 12 to 1/4 in feet and inches, else degrees to 0.1°. */
export function fmtPitch(deg, units = 'ftin') {
  if (!isMetric(units)) { const r = Math.round(Math.tan(deg * Math.PI / 180) * 12 * 4) / 4; return r + '/12'; }
  return (Math.round(deg * 10) / 10) + '°';
}
