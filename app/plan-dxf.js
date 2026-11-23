/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — DXF group codes, table names and file-format text, not words on screen. */
/**
 * plan-dxf.js — a cc-dwg model (docs/DWG-LIB-SPEC.md) as ASCII DXF R2000 (AC1015) (SU.1994). DOM-free.
 *
 *   modelDxf(model) → { text, report: { counts } }
 *
 * BimCraft's own copy of the part of CadCraft's dxf2000.js that writes a model (an app never imports another app's folder),
 * cut down to what plan-cad.js makes: LINE, CIRCLE, ARC, LWPOLYLINE, TEXT, solid HATCH, DIMENSION (with its unnamed *D block),
 * layers with colour, lineweight and linetype, linetypes, the Standard text style and one more, the Standard dimension style
 * with the variables plan-cad.js sets, one layout. Every object has a handle and its owner, as AutoCAD wants them in R2000.
 * Written from the public DXF reference.
 */

const deg = (r) => (r * 180) / Math.PI;
const f = (n) => (Number.isFinite(n) ? (Math.abs(n) < 1e-12 ? '0.0' : Number(n.toPrecision(15)).toString()) : '0.0');
/** Text for an R2000 DXF (Windows-1252 file): ASCII as is, everything else as \U+XXXX. */
const enc = (s) => String(s ?? '').replace(/[\r\n]+/g, ' ').replace(/[^\x20-\x7e]/g, (ch) => '\\U+' + ch.charCodeAt(0).toString(16).toUpperCase().padStart(4, '0'));
/** The dimension-style variables plan-cad.js sets → their DXF group codes. */
const DIM_CODES = { DIMSCALE: 40, DIMASZ: 41, DIMEXO: 42, DIMEXE: 44, DIMTXT: 140, DIMTSZ: 142, DIMGAP: 147, DIMTIH: 73, DIMTOH: 74, DIMTAD: 77, DIMZIN: 78, DIMDEC: 271, DIMLUNIT: 277 };
const INT_CODES = new Set([73, 74, 77, 78, 271, 277]);

export function modelDxf(model) {
  const out = [];
  const w = (code, v) => { out.push(String(code).padStart(3, ' ')); out.push(String(v)); };
  let seed = 1;
  const h = () => (seed++).toString(16).toUpperCase();
  const counts = {};
  const H = { vportT: h(), ltypeT: h(), layerT: h(), styleT: h(), viewT: h(), ucsT: h(), appidT: h(), dimT: h(), brT: h(),
    vport: h(), byBlock: h(), byLayer: h(), cont: h(), app: h(), dim: h(), nod: h(), groups: h(), layoutsD: h(), mlsD: h(), mls: h() };
  const ms = model.blocks.find((b) => b.name === '*Model_Space') || { name: '*Model_Space', entities: [] };
  const ps = model.blocks.find((b) => b.name === '*Paper_Space') || { name: '*Paper_Space', entities: [] };
  const plain = model.blocks.filter((b) => b !== ms && b !== ps);
  const rec = new Map();
  for (const b of [ms, ps, ...plain]) rec.set(b.name, { br: h(), block: h(), endblk: h() });
  const layouts = [{ name: 'Model', tab: 0, space: ms, h: h() }, { name: 'Layout1', tab: 1, space: ps, h: h() }];
  for (const L of layouts) rec.get(L.space.name).layout = L.h;
  const hd = model.header || {};

  // ---- HEADER
  w(0, 'SECTION'); w(2, 'HEADER');
  w(9, '$ACADVER'); w(1, 'AC1015');
  w(9, '$DWGCODEPAGE'); w(3, 'ANSI_1252');
  const seedAt = out.length + 3;
  w(9, '$HANDSEED'); w(5, 'FFFF');
  w(9, '$INSBASE'); w(10, '0.0'); w(20, '0.0'); w(30, '0.0');
  if (hd.EXTMIN && hd.EXTMAX) { w(9, '$EXTMIN'); w(10, f(hd.EXTMIN.x)); w(20, f(hd.EXTMIN.y)); w(30, '0.0'); w(9, '$EXTMAX'); w(10, f(hd.EXTMAX.x)); w(20, f(hd.EXTMAX.y)); w(30, '0.0'); }
  w(9, '$INSUNITS'); w(70, hd.INSUNITS | 0);
  w(9, '$MEASUREMENT'); w(70, hd.MEASUREMENT ?? 1);
  w(9, '$LUNITS'); w(70, hd.LUNITS || 2);
  w(9, '$LUPREC'); w(70, Number.isFinite(hd.LUPREC) ? hd.LUPREC | 0 : 0);
  w(9, '$LTSCALE'); w(40, f(hd.LTSCALE || 1));
  w(9, '$PSLTSCALE'); w(70, 0);
  w(9, '$LWDISPLAY'); w(290, 1);
  w(9, '$CLAYER'); w(8, '0');
  w(9, '$DIMSTYLE'); w(2, 'Standard');
  w(9, '$TEXTSTYLE'); w(7, 'Standard');
  w(9, '$TILEMODE'); w(70, 1);
  w(0, 'ENDSEC');
  w(0, 'SECTION'); w(2, 'CLASSES'); w(0, 'ENDSEC');

  // ---- TABLES
  w(0, 'SECTION'); w(2, 'TABLES');
  const table = (name, th, n, body) => { w(0, 'TABLE'); w(2, name); w(5, th); w(330, '0'); w(100, 'AcDbSymbolTable'); w(70, n); body(); w(0, 'ENDTAB'); };
  const entry = (type, eh, th, sub, name, flags = 0) => { w(0, type); w(type === 'DIMSTYLE' ? 105 : 5, eh); w(330, th); w(100, 'AcDbSymbolTableRecord'); w(100, sub); w(2, name); w(70, flags); };
  const e0 = hd.EXTMIN || { x: 0, y: 0 }, e1 = hd.EXTMAX || { x: 12, y: 9 };
  table('VPORT', H.vportT, 1, () => {
    entry('VPORT', H.vport, H.vportT, 'AcDbViewportTableRecord', '*Active');
    w(10, '0.0'); w(20, '0.0'); w(11, '1.0'); w(21, '1.0'); w(12, f((e0.x + e1.x) / 2)); w(22, f((e0.y + e1.y) / 2));
    w(13, '0.0'); w(23, '0.0'); w(14, '1.0'); w(24, '1.0'); w(15, '1.0'); w(25, '1.0'); w(16, '0.0'); w(26, '0.0'); w(36, '1.0'); w(17, '0.0'); w(27, '0.0'); w(37, '0.0');
    w(40, f(Math.max(e1.y - e0.y, (e1.x - e0.x) / 1.5, 1) * 1.05)); w(41, '1.5'); w(42, '50.0'); w(43, '0.0'); w(44, '0.0'); w(50, '0.0'); w(51, '0.0');
    w(71, 0); w(72, 1000); w(73, 1); w(74, 3); w(75, 0); w(76, 0); w(77, 0); w(78, 0);
  });
  const lts = model.tables.linetypes || [];
  const ltNames = new Set(['BYLAYER', 'BYBLOCK', 'CONTINUOUS', ...lts.map((l) => l.name.toUpperCase())]);
  const ltName = (n) => (!n || /^bylayer$/i.test(n) ? null : /^byblock$/i.test(n) ? 'ByBlock' : /^continuous$/i.test(n) ? 'Continuous' : ltNames.has(String(n).toUpperCase()) ? n : null);
  table('LTYPE', H.ltypeT, 3 + lts.length, () => {
    for (const [eh, n, d] of [[H.byBlock, 'ByBlock', ''], [H.byLayer, 'ByLayer', ''], [H.cont, 'Continuous', 'Solid line']]) { entry('LTYPE', eh, H.ltypeT, 'AcDbLinetypeTableRecord', n); w(3, d); w(72, 65); w(73, 0); w(40, '0.0'); }
    for (const l of lts) {
      entry('LTYPE', h(), H.ltypeT, 'AcDbLinetypeTableRecord', enc(l.name)); w(3, enc(l.description || l.name)); w(72, 65); w(73, l.elements.length); w(40, f(l.patternLength));
      for (const x of l.elements) { w(49, f(x.length)); w(74, 0); }
    }
  });
  const ls = model.tables.layers || [];
  const hasZero = ls.some((l) => l.name === '0');
  table('LAYER', H.layerT, ls.length + (hasZero ? 0 : 1), () => {
    if (!hasZero) { entry('LAYER', h(), H.layerT, 'AcDbLayerTableRecord', '0'); w(62, 7); w(6, 'Continuous'); w(370, -3); w(390, '0'); }
    for (const l of ls) {
      entry('LAYER', h(), H.layerT, 'AcDbLayerTableRecord', enc(l.name), (l.frozen ? 1 : 0) | (l.locked ? 4 : 0));
      const ci = l.color?.index ?? 7;
      w(62, l.off ? -Math.abs(ci || 7) : (ci || 7));
      if (l.color?.rgb !== undefined) w(420, l.color.rgb & 0xffffff);
      w(6, ltName(l.linetype) || 'Continuous');
      if (l.plot === false) w(290, 0);
      w(370, Number.isFinite(l.lineweight) ? l.lineweight : -3);
      w(390, '0');
    }
  });
  const styles = model.tables.styles?.length ? model.tables.styles : [{ name: 'Standard', font: 'txt' }];
  const styleH = new Map(styles.map((s, i) => [String(s.name).toUpperCase(), i ? h() : null]));
  const stdH = h(); styleH.set(String(styles[0].name).toUpperCase(), stdH);
  table('STYLE', H.styleT, styles.length, () => {
    for (const s of styles) {
      entry('STYLE', styleH.get(String(s.name).toUpperCase()), H.styleT, 'AcDbTextStyleTableRecord', enc(s.name));
      w(40, f(s.height || 0)); w(41, f(s.widthFactor || 1)); w(50, '0.0'); w(71, 0); w(42, '2.5'); w(3, enc(s.font || 'txt')); w(4, '');
    }
  });
  table('VIEW', H.viewT, 0, () => {});
  table('UCS', H.ucsT, 0, () => {});
  table('APPID', H.appidT, 1, () => entry('APPID', H.app, H.appidT, 'AcDbRegAppTableRecord', 'ACAD'));
  const dims = model.tables.dimstyles?.length ? model.tables.dimstyles : [{ name: 'Standard', vars: {} }];
  table('DIMSTYLE', H.dimT, dims.length, () => {
    dims.forEach((d, k) => {
      entry('DIMSTYLE', k ? h() : H.dim, H.dimT, 'AcDbDimStyleTableRecord', enc(d.name));
      for (const [name, v] of Object.entries(d.vars || {})) { const code = DIM_CODES[name]; if (code) w(code, INT_CODES.has(code) ? v | 0 : f(v)); }
      w(340, stdH);
    });
  });
  table('BLOCK_RECORD', H.brT, rec.size, () => {
    for (const b of [ms, ps, ...plain]) { const r = rec.get(b.name); entry('BLOCK_RECORD', r.br, H.brT, 'AcDbBlockTableRecord', enc(b.name)); w(340, r.layout || '0'); }
  });
  w(0, 'ENDSEC');

  // ---- entities
  const head = (type, e, owner) => {
    const own = h();
    w(0, type); w(5, own); w(330, owner); w(100, 'AcDbEntity');
    w(8, enc(e.layer || '0'));
    const lt = ltName(e.linetype);
    if (lt) w(6, lt);
    const c = e.color;
    if (c && c.index !== undefined && c.index !== 256) w(62, c.index);
    if (c && c.rgb !== undefined) w(420, c.rgb & 0xffffff);
    if (Number.isFinite(e.lineweight) && e.lineweight !== -1) w(370, e.lineweight);
    if (e.ltscale > 0 && e.ltscale !== 1) w(48, f(e.ltscale));
    counts[type] = (counts[type] || 0) + 1;
    return own;
  };
  const P = (c, p) => { w(c, f(p?.x || 0)); w(c + 10, f(p?.y || 0)); w(c + 20, f(p?.z || 0)); };
  const entity = (e, owner) => {
    switch (e.type) {
      case 'LINE': head('LINE', e, owner); w(100, 'AcDbLine'); P(10, e.start); P(11, e.end); break;
      case 'CIRCLE': head('CIRCLE', e, owner); w(100, 'AcDbCircle'); P(10, e.center); w(40, f(e.radius)); break;
      case 'ARC': head('ARC', e, owner); w(100, 'AcDbCircle'); P(10, e.center); w(40, f(e.radius)); w(100, 'AcDbArc'); w(50, f(deg(e.startAngle))); w(51, f(deg(e.endAngle))); break;
      case 'LWPOLYLINE':
        head('LWPOLYLINE', e, owner); w(100, 'AcDbPolyline'); w(90, e.vertices.length); w(70, e.closed ? 1 : 0); w(43, '0.0');
        for (const v of e.vertices) { w(10, f(v.x)); w(20, f(v.y)); if (v.bulge) w(42, f(v.bulge)); }
        break;
      case 'TEXT':
        head('TEXT', e, owner); w(100, 'AcDbText'); P(10, e.insert); w(40, f(e.height)); w(1, enc(e.value));
        if (e.rotation) w(50, f(deg(e.rotation)));
        w(7, enc(e.style || 'Standard'));
        if (e.hAlign) w(72, e.hAlign);
        if (e.hAlign || e.vAlign) P(11, e.align || e.insert);
        w(100, 'AcDbText'); if (e.vAlign) w(73, e.vAlign);
        break;
      case 'HATCH':
        head('HATCH', e, owner); w(100, 'AcDbHatch'); w(10, '0.0'); w(20, '0.0'); w(30, '0.0'); w(210, '0.0'); w(220, '0.0'); w(230, '1.0');
        w(2, 'SOLID'); w(70, 1); w(71, 0); w(91, e.loops.length);
        for (const l of e.loops) {
          const v = l.polyline.vertices;
          w(92, (l.flags | 0) | 2); w(72, 0); w(73, 1); w(93, v.length);
          for (const q of v) { w(10, f(q.x)); w(20, f(q.y)); }
          w(97, 0);
        }
        w(75, e.style | 0); w(76, 1); w(98, 0);
        break;
      case 'DIMENSION':
        head('DIMENSION', e, owner); w(100, 'AcDbDimension'); w(2, enc(e.block)); P(10, e.defPoint); P(11, e.textMid); w(70, e.flags ?? e.dimType);
        w(71, e.attach || 5);
        if (e.text) w(1, enc(e.text));
        w(3, enc(e.style || 'Standard'));
        w(100, 'AcDbAlignedDimension'); P(13, e.xline1); P(14, e.xline2);
        if ((e.dimType & 7) === 0) { w(50, f(deg(e.angle || 0))); w(100, 'AcDbRotatedDimension'); }
        break;
      default: counts.skipped = (counts.skipped || 0) + 1;
    }
  };

  // ---- BLOCKS: every record's BLOCK / ENDBLK; the unnamed dimension blocks hold their lines here
  w(0, 'SECTION'); w(2, 'BLOCKS');
  for (const b of [ms, ps, ...plain]) {
    const r = rec.get(b.name), isPaper = b === ps, name = enc(b.name);
    w(0, 'BLOCK'); w(5, r.block); w(330, r.br); w(100, 'AcDbEntity'); if (isPaper) w(67, 1); w(8, '0'); w(100, 'AcDbBlockBegin'); w(2, name);
    w(70, b !== ms && b !== ps && b.name.startsWith('*') ? 1 : 0);
    P(10, b.base); w(3, name); w(1, '');
    if (b !== ms && b !== ps) for (const e of b.entities || []) entity(e, r.br);
    w(0, 'ENDBLK'); w(5, r.endblk); w(330, r.br); w(100, 'AcDbEntity'); if (isPaper) w(67, 1); w(8, '0'); w(100, 'AcDbBlockEnd');
  }
  w(0, 'ENDSEC');
  w(0, 'SECTION'); w(2, 'ENTITIES');
  for (const e of ms.entities || []) entity(e, rec.get(ms.name).br);
  w(0, 'ENDSEC');

  // ---- OBJECTS: the named-object dictionary, layouts, the Standard multiline style
  w(0, 'SECTION'); w(2, 'OBJECTS');
  const dict = (dh, owner, items) => { w(0, 'DICTIONARY'); w(5, dh); w(330, owner); w(100, 'AcDbDictionary'); w(281, 1); for (const [k, v] of items) { w(3, k); w(350, v); } };
  dict(H.nod, '0', [['ACAD_GROUP', H.groups], ['ACAD_LAYOUT', H.layoutsD], ['ACAD_MLINESTYLE', H.mlsD]]);
  dict(H.groups, H.nod, []);
  dict(H.layoutsD, H.nod, layouts.map((L) => [L.name, L.h]));
  dict(H.mlsD, H.nod, [['Standard', H.mls]]);
  w(0, 'MLINESTYLE'); w(5, H.mls); w(330, H.mlsD); w(100, 'AcDbMlineStyle'); w(2, 'Standard'); w(70, 0); w(3, ''); w(62, 256); w(51, '90.0'); w(52, '90.0'); w(71, 2);
  for (const o of [0.5, -0.5]) { w(49, f(o)); w(62, 256); w(6, 'BYLAYER'); }
  for (const L of layouts) {
    const paper = L.tab > 0;
    w(0, 'LAYOUT'); w(5, L.h); w(102, '{ACAD_REACTORS'); w(330, H.layoutsD); w(102, '}'); w(330, H.layoutsD);
    w(100, 'AcDbPlotSettings'); w(1, ''); w(2, 'none_device'); w(4, ''); w(6, '');
    w(40, '0.0'); w(41, '0.0'); w(42, '0.0'); w(43, '0.0'); w(44, '420.0'); w(45, '297.0'); w(46, '0.0'); w(47, '0.0'); w(48, '0.0'); w(49, '0.0');
    w(140, '0.0'); w(141, '0.0'); w(142, '1.0'); w(143, '1.0'); w(70, paper ? 688 : 1712); w(72, 1); w(73, 0); w(74, paper ? 5 : 0); w(7, ''); w(75, paper ? 16 : 0); w(147, '1.0'); w(148, '0.0'); w(149, '0.0');
    w(100, 'AcDbLayout'); w(1, L.name); w(70, 1); w(71, L.tab);
    w(10, '0.0'); w(20, '0.0'); w(11, '420.0'); w(21, '297.0'); w(12, '0.0'); w(22, '0.0'); w(32, '0.0');
    w(14, '0.0'); w(24, '0.0'); w(34, '0.0'); w(15, '0.0'); w(25, '0.0'); w(35, '0.0'); w(146, '0.0');
    w(13, '0.0'); w(23, '0.0'); w(33, '0.0'); w(16, '1.0'); w(26, '0.0'); w(36, '0.0'); w(17, '0.0'); w(27, '1.0'); w(37, '0.0'); w(76, 0);
    w(330, rec.get(L.space.name).br);
  }
  w(0, 'ENDSEC');
  w(0, 'EOF');
  out[seedAt] = seed.toString(16).toUpperCase();
  return { text: out.join('\r\n') + '\r\n', report: { counts } };
}
