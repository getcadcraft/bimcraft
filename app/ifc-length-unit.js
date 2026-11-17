/* SPDX-License-Identifier: Apache-2.0 */
/**
 * ifc-length-unit.js — an IFC file that states no length unit (0.10 BK.8, units on import). DOM-free, no imports, Node-tested
 * (bin/test-import-units.mjs). The IFC standard reads such a file in meters; BimCraft asks instead (the shell's one dialog) and
 * writes the answer INTO the model text before it is loaded, so the reader, the viewer and a later Save all agree and the saved
 * file states its unit from then on.
 *
 *   hasLengthUnit(bytes)           → true when the file has a unit of type LENGTHUNIT (a byte search for ".LENGTHUNIT.": no decoding)
 *   stateLengthUnit(bytes, unit)   → Uint8Array: the same file with a length unit added to its IfcUnitAssignment (one is made, and
 *                                     given to the IfcProject, when the file has none). unit: mm | cm | m | in | ft. Throws
 *                                     { code: 'ifc.units.cantstate' } when the file has no DATA section or no IfcProject to hold it.
 */
const NEEDLE = [...'.LENGTHUNIT.'].map((c) => c.charCodeAt(0));
export function hasLengthUnit(bytes) {
  const n = bytes.length - NEEDLE.length;
  outer: for (let i = 0; i <= n; i++) {
    if (bytes[i] !== 46 || bytes[i + 1] !== 76) continue;   // ".L"
    for (let k = 2; k < NEEDLE.length; k++) if (bytes[i + k] !== NEEDLE[k]) continue outer;
    return true;
  }
  return false;
}
const SI = { mm: '.MILLI.', cm: '.CENTI.', m: '$' };
const CONV = { in: ['INCH', '0.0254'], ft: ['FOOT', '0.3048'] };
const cant = () => Object.assign(new Error('ifc.units.cantstate'), { code: 'ifc.units.cantstate' });
/** The end (index after ';') of the STEP statement that starts at `from`, quotes respected. */
function statementEnd(text, from) {
  let q = false;
  for (let i = from; i < text.length; i++) {
    const c = text[i];
    if (c === "'") q = !q; else if (c === ';' && !q) return i + 1;
  }
  return -1;
}
export function stateLengthUnit(bytes, unit) {
  if (!SI[unit] && !CONV[unit]) throw cant();
  const text = new TextDecoder('latin1').decode(bytes);
  const end = text.lastIndexOf('ENDSEC;');
  if (end < 0 || text.indexOf('DATA;') < 0) throw cant();
  let max = 0;
  for (const m of text.matchAll(/(?:^|[\r\n;])\s*#(\d+)\s*=/g)) max = Math.max(max, Number(m[1]));
  const lines = [];
  let id = max + 1, unitId;
  if (SI[unit]) { unitId = id++; lines.push('#' + unitId + '=IFCSIUNIT(*,.LENGTHUNIT.,' + SI[unit] + ',.METRE.);'); }
  else {
    const si = id++, dim = id++, mu = id++; unitId = id++;
    lines.push('#' + si + '=IFCSIUNIT(*,.LENGTHUNIT.,$,.METRE.);', '#' + dim + '=IFCDIMENSIONALEXPONENTS(1,0,0,0,0,0,0);',
      '#' + mu + '=IFCMEASUREWITHUNIT(IFCLENGTHMEASURE(' + CONV[unit][1] + '),#' + si + ');', '#' + unitId + "=IFCCONVERSIONBASEDUNIT(#" + dim + ",.LENGTHUNIT.,'" + CONV[unit][0] + "',#" + mu + ');');
  }
  let body = text.slice(0, end), tail = text.slice(end);
  const ua = /=\s*IFCUNITASSIGNMENT\s*\(\s*\(/.exec(body);
  if (ua) {   // the assignment the file has: our unit joins its list
    const at = ua.index + ua[0].length, empty = /^\s*\)/.test(body.slice(at));
    body = body.slice(0, at) + '#' + unitId + (empty ? '' : ',') + body.slice(at);
  } else {    // none: one is made and the project takes it (UnitsInContext, the last attribute of IfcProject)
    const pj = /=\s*IFCPROJECT\s*\(/.exec(body);
    if (!pj) throw cant();
    const stop = statementEnd(body, pj.index);
    const stmt = stop > 0 ? body.slice(pj.index, stop) : '';
    const m = /,\s*\$\s*\)\s*;$/.exec(stmt);
    if (!m) throw cant();
    const asg = id++;
    lines.push('#' + asg + '=IFCUNITASSIGNMENT((#' + unitId + '));');
    body = body.slice(0, pj.index) + stmt.slice(0, m.index) + ',#' + asg + ');' + body.slice(stop);
  }
  const out = body + lines.join('\n') + '\n' + tail;
  const u8 = new Uint8Array(out.length);
  for (let i = 0; i < out.length; i++) u8[i] = out.charCodeAt(i) & 255;
  return u8;
}
