/* SPDX-License-Identifier: Apache-2.0 */
/**
 * new-model.js — a new, empty building as IFC4 text (0.5 part 3, BM.2 start; owner 2026-10-14: "make it so you can
 * start from a NEW"). No DOM, no engine: bin/test-bimcraft.mjs --new runs it in Node and opens the result with cc-ifc.
 *
 *   const text = newBuilding({ name, levels: [{ name, elevation, height }], author, now });   // lengths in mm
 *   const levels = stackLevels(count, heightMm, (i) => name);                                  // evenly stacked levels
 *   newBuilding({ …, sheet: { number, title, paper, x, y, ratio } })   0.10 BK.74: also the first sheet, with the lowest
 *        level's plan on it (new-defaults.js firstSheet); read by views-model.js readSheets like any saved sheet
 *
 * What it writes (Design Transfer View, millimetres, Z up): owner history (BimCraft), units, the 3D model context with
 * Body and FootPrint sub-contexts (ifc-place.js reuses them when items are placed), IfcProject → IfcSite → IfcBuilding →
 * one IfcBuildingStorey per level (placement and Elevation at the level's height above the building), each level's
 * storey height in a `CadCraft_Level` property set (IFC has no height attribute; walls drawn later read it).
 * Names come from the caller (the page's language file), never from here.
 */

const B64 = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_$';

/** A new IFC GlobalId: 128 random bits in IFC's 22-character base-64. */
export function ifcGuid(rand = (n) => crypto.getRandomValues(new Uint8Array(n))) {
  const b = rand(16);
  b[6] = (b[6] & 0x0f) | 0x40; b[8] = (b[8] & 0x3f) | 0x80;   // a version-4 UUID underneath
  const enc = (n, len) => { let s = ''; for (let i = 0; i < len; i++) { s = B64[n % 64] + s; n = Math.floor(n / 64); } return s; };
  let out = enc(b[0], 2);
  for (let i = 1; i < 16; i += 3) out += enc((b[i] << 16) | (b[i + 1] << 8) | b[i + 2], 4);
  return out;
}

/** A STEP string literal: quotes doubled, backslashes doubled, anything outside printable ASCII as \X2\…\X0\. */
export function stepString(s) {
  let out = '', wide = '';
  const flush = () => { if (wide) { out += '\\X2\\' + wide + '\\X0\\'; wide = ''; } };
  for (const ch of String(s ?? '')) {
    const c = ch.codePointAt(0);
    if (c >= 0x20 && c <= 0x7e) {
      flush();
      out += ch === "'" ? "''" : ch === '\\' ? '\\\\' : ch;
    } else if (c > 0xffff) {
      const v = c - 0x10000;
      wide += (0xd800 + (v >> 10)).toString(16).toUpperCase().padStart(4, '0') + (0xdc00 + (v & 0x3ff)).toString(16).toUpperCase().padStart(4, '0');
    } else if (c >= 0xa0) {
      wide += c.toString(16).toUpperCase().padStart(4, '0');
    }   // control characters are dropped
  }
  flush();
  return "'" + out + "'";
}

/** A STEP real: always with a decimal point. */
const real = (n) => { const s = String(Math.round(n * 1e6) / 1e6); return /[.eE]/.test(s) ? s : s + '.'; };

/** `count` levels `heightMm` apart, the first at 0. `nameOf(i)` names level i (0-based). */
export function stackLevels(count, heightMm, nameOf) {
  return Array.from({ length: count }, (_, i) => ({ name: nameOf(i), elevation: i * heightMm, height: heightMm }));
}

/** Checks the caller's input. → '' or the problem's key ('new.err.*', for the page's language file). */
export function levelsProblem(levels) {
  if (!Array.isArray(levels) || !levels.length) return 'new.err.levels';
  if (levels.length > 200) return 'new.err.levels';
  for (const l of levels) {
    if (!Number.isFinite(l.height) || l.height < 10 || l.height > 1e7) return 'new.err.height';   // 0.10 BK.73: was 1 m to 100 m (practice); outside that is advice now (draw-advice.js USUAL.level)
    if (!Number.isFinite(l.elevation) || Math.abs(l.elevation) > 1e6) return 'new.err.elevation';
  }
  return '';
}

/**
 * The building as IFC4 text. `name` names the project and the building; `fileName` goes in the header;
 * `now` is a Date (header time stamp and owner history), `guid` makes GlobalIds (tests pass a fixed one).
 */
export function newBuilding({ name, siteName, levels, author = '', fileName = 'building.ifc', now = new Date(), guid = ifcGuid, version = '', sheet = null }) {
  const bad = levelsProblem(levels);
  if (bad) throw Object.assign(new Error(bad), { key: bad });
  const lines = [];
  let n = 0;
  const add = (s) => { lines.push('#' + (++n) + '=' + s + ';'); return '#' + n; };
  const S = stepString;
  const ts = Math.floor(now.getTime() / 1000);

  const person = add(`IFCPERSON($,${S(author || '')},$,$,$,$,$,$)`);
  const org = add(`IFCORGANIZATION($,${S('CadCraft')},$,$,$)`);   // i18n-ignore: the maker named in the file
  const po = add(`IFCPERSONANDORGANIZATION(${person},${org},$)`);
  const appl = add(`IFCAPPLICATION(${org},${S(version || 'dev')},${S('BimCraft')},${S('BimCraft')})`);   // i18n-ignore: product names in the file
  const oh = add(`IFCOWNERHISTORY(${po},${appl},$,.ADDED.,${ts},$,$,${ts})`);

  const units = [
    add('IFCSIUNIT(*,.LENGTHUNIT.,.MILLI.,.METRE.)'),
    add('IFCSIUNIT(*,.AREAUNIT.,$,.SQUARE_METRE.)'),
    add('IFCSIUNIT(*,.VOLUMEUNIT.,$,.CUBIC_METRE.)'),
    add('IFCSIUNIT(*,.PLANEANGLEUNIT.,$,.RADIAN.)'),
  ];
  const unitAssign = add(`IFCUNITASSIGNMENT((${units.join(',')}))`);

  const origin = add('IFCCARTESIANPOINT((0.,0.,0.))');
  const world = add(`IFCAXIS2PLACEMENT3D(${origin},$,$)`);
  const north = add('IFCDIRECTION((0.,1.))');
  const ctx = add(`IFCGEOMETRICREPRESENTATIONCONTEXT($,'Model',3,1.E-05,${world},${north})`);
  add(`IFCGEOMETRICREPRESENTATIONSUBCONTEXT('Body','Model',*,*,*,*,${ctx},$,.MODEL_VIEW.,$)`);
  add(`IFCGEOMETRICREPRESENTATIONSUBCONTEXT('FootPrint','Model',*,*,*,*,${ctx},$,.MODEL_VIEW.,$)`);
  add(`IFCGEOMETRICREPRESENTATIONSUBCONTEXT('Axis','Model',*,*,*,*,${ctx},$,.GRAPH_VIEW.,$)`);

  const project = add(`IFCPROJECT(${S(guid())},${oh},${S(name)},$,$,$,$,(${ctx}),${unitAssign})`);
  const sitePl = add(`IFCLOCALPLACEMENT($,${world})`);
  const site = add(`IFCSITE(${S(guid())},${oh},${S(siteName || name)},$,$,${sitePl},$,$,.ELEMENT.,$,$,$,$,$)`);
  const bldgPl = add(`IFCLOCALPLACEMENT(${sitePl},${world})`);
  const building = add(`IFCBUILDING(${S(guid())},${oh},${S(name)},$,$,${bldgPl},$,$,.ELEMENT.,$,$,$)`);

  const storeys = [], storeyGuids = [];
  for (const l of levels) {
    const pt = add(`IFCCARTESIANPOINT((0.,0.,${real(l.elevation)}))`);
    const ax = add(`IFCAXIS2PLACEMENT3D(${pt},$,$)`);
    const pl = add(`IFCLOCALPLACEMENT(${bldgPl},${ax})`);
    const stGuid = guid();
    storeyGuids.push({ guid: stGuid, elevation: l.elevation });
    const st = add(`IFCBUILDINGSTOREY(${S(stGuid)},${oh},${S(l.name)},$,$,${pl},$,$,.ELEMENT.,${real(l.elevation)})`);
    const h = add(`IFCPROPERTYSINGLEVALUE('Height',$,IFCPOSITIVELENGTHMEASURE(${real(l.height)}),$)`);
    const ps = add(`IFCPROPERTYSET(${S(guid())},${oh},'CadCraft_Level',$,(${h}))`);
    add(`IFCRELDEFINESBYPROPERTIES(${S(guid())},${oh},$,$,(${st}),${ps})`);
    storeys.push(st);
  }
  add(`IFCRELAGGREGATES(${S(guid())},${oh},$,$,${project},(${site}))`);
  add(`IFCRELAGGREGATES(${S(guid())},${oh},$,$,${site},(${building}))`);
  add(`IFCRELAGGREGATES(${S(guid())},${oh},$,$,${building},(${storeys.join(',')}))`);
  // 0.10 BK.74: the first sheet (views-model.js CadCraft_Sheets on the project, as saveSheet writes it): the lowest level's plan
  if (sheet) {
    const low = storeyGuids.slice().sort((p, q) => p.elevation - q.elevation)[0];
    const num = (v, d) => (Number.isFinite(Number(v)) ? Number(v) : d);
    const spec = { number: String(sheet.number || 'A-101').slice(0, 20), title: String(sheet.title || '').slice(0, 120), paper: String(sheet.paper || ''),   // i18n-ignore: a sheet number
      views: [{ kind: 'plan', ref: low.guid, x: num(sheet.x, 200), y: num(sheet.y, 150), ratio: Math.max(0, num(sheet.ratio, 0)) }] };
    const pv = add(`IFCPROPERTYSINGLEVALUE('sheet-1',$,IFCTEXT(${S(JSON.stringify(spec))}),$)`);
    const ps = add(`IFCPROPERTYSET(${S(guid())},${oh},'CadCraft_Sheets',$,(${pv}))`);
    add(`IFCRELDEFINESBYPROPERTIES(${S(guid())},${oh},$,$,(${project}),${ps})`);
  }

  const iso = now.toISOString().slice(0, 19);
  return [
    'ISO-10303-21;',
    'HEADER;',
    "FILE_DESCRIPTION(('ViewDefinition [DesignTransferView]'),'2;1');",
    `FILE_NAME(${S(fileName)},'${iso}',(${S(author || '')}),(''),'BimCraft','BimCraft','');`,   // i18n-ignore: STEP header fields
    "FILE_SCHEMA(('IFC4'));",
    'ENDSEC;',
    'DATA;',
    ...lines,
    'ENDSEC;',
    'END-ISO-10303-21;',
    '',
  ].join('\n');
}
