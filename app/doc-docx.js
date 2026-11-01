/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — Office Open XML markup and style ids; nothing here is read by a person. */
/**
 * doc-docx.js — a document's blocks (doc-template.js parseMarkdown) as a Word document, .docx (0.8 SU.889, session sx-tags).
 * No library: the zip is bcf.js's (stored entries, the one BimCraft's BCF writer uses) and the parts are the minimum ECMA-376
 * WordprocessingML a word processor opens — [Content_Types].xml, _rels/.rels, word/document.xml, word/styles.xml,
 * word/_rels/document.xml.rels, docProps/core.xml. DOM-free; doc-test.mjs unzips it and reads document.xml back.
 *
 *   docDocx(blocks, { title, creator, created }) → Uint8Array
 * Headings use the built-in style ids Heading1–Heading4 (so the reader's navigation pane lists them), lists are paragraphs with a
 * bullet or number and a hanging indent (no numbering part), tables carry single borders and a bold header row repeated on each page.
 */
import { zip } from './bcf.js';

const enc = new TextEncoder();
/** Text for XML: the five entities, and characters XML 1.0 does not allow dropped. */
const x = (s) => String(s ?? '').replace(/[^\u0009\u000a\u000d -퟿-�\u{10000}-\u{10ffff}]/gu, '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const NS = 'xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"';

function runs(rs, base = {}) {
  return rs.map((r0) => {
    const r = { ...base, ...r0 };
    const pr = (r.b ? '<w:b/>' : '') + (r.i ? '<w:i/>' : '') + (r.code ? '<w:rFonts w:ascii="Courier New" w:hAnsi="Courier New" w:cs="Courier New"/>' : '');
    return '<w:r>' + (pr ? '<w:rPr>' + pr + '</w:rPr>' : '') + '<w:t xml:space="preserve">' + x(r.s) + '</w:t></w:r>';
  }).join('');
}
const para = (inner, ppr = '') => '<w:p>' + (ppr ? '<w:pPr>' + ppr + '</w:pPr>' : '') + inner + '</w:p>';

function body(blocks) {
  const out = [];
  for (const b of blocks) {
    if (b.t === 'h') out.push(para(runs(b.runs), `<w:pStyle w:val="Heading${Math.min(4, b.level)}"/>`));
    else if (b.t === 'p') out.push(para(runs(b.runs)));
    else if (b.t === 'quote') out.push(para(runs(b.runs, { i: true }), '<w:ind w:left="567"/>'));
    else if (b.t === 'hr') out.push(para('', '<w:pBdr><w:bottom w:val="single" w:sz="6" w:space="1" w:color="auto"/></w:pBdr>'));
    else if (b.t === 'ul' || b.t === 'ol') b.items.forEach((it, i) => out.push(para('<w:r><w:t xml:space="preserve">' + (b.t === 'ul' ? '•' : (i + 1) + '.') + '</w:t></w:r><w:r><w:tab/></w:r>' + runs(it), '<w:pStyle w:val="ListParagraph"/><w:tabs><w:tab w:val="left" w:pos="567"/></w:tabs><w:ind w:left="567" w:hanging="425"/>')));
    else if (b.t === 'table') {
      const cell = (rs, j, head) => '<w:tc><w:tcPr><w:tcW w:w="0" w:type="auto"/></w:tcPr>' + para(runs(rs, head ? { b: true } : {}), '<w:spacing w:before="0" w:after="0"/>' + (!head && b.align[j] === 'r' ? '<w:jc w:val="right"/>' : b.align[j] === 'c' ? '<w:jc w:val="center"/>' : '')) + '</w:tc>';
      const border = ['top', 'left', 'bottom', 'right', 'insideH', 'insideV'].map((s) => `<w:${s} w:val="single" w:sz="4" w:space="0" w:color="808080"/>`).join('');
      out.push('<w:tbl><w:tblPr><w:tblW w:w="5000" w:type="pct"/><w:tblBorders>' + border + '</w:tblBorders><w:tblCellMar><w:left w:w="80" w:type="dxa"/><w:right w:w="80" w:type="dxa"/></w:tblCellMar></w:tblPr>'
        + '<w:tblGrid>' + b.head.map(() => '<w:gridCol/>').join('') + '</w:tblGrid>'
        + '<w:tr><w:trPr><w:tblHeader/></w:trPr>' + b.head.map((h, j) => cell(h, j, true)).join('') + '</w:tr>'
        + b.rows.map((r) => '<w:tr>' + r.map((c, j) => cell(c, j, false)).join('') + '</w:tr>').join('') + '</w:tbl>');
      out.push(para(''));
    }
  }
  return out.join('');
}

const STYLES = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:styles ${NS}><w:docDefaults><w:rPrDefault><w:rPr><w:rFonts w:ascii="Calibri" w:hAnsi="Calibri" w:cs="Calibri"/><w:sz w:val="21"/><w:szCs w:val="21"/><w:lang w:val="en-US"/></w:rPr></w:rPrDefault><w:pPrDefault><w:pPr><w:spacing w:after="120" w:line="264" w:lineRule="auto"/></w:pPr></w:pPrDefault></w:docDefaults>
<w:style w:type="paragraph" w:default="1" w:styleId="Normal"><w:name w:val="Normal"/><w:qFormat/></w:style>
${[1, 2, 3, 4].map((n) => `<w:style w:type="paragraph" w:styleId="Heading${n}"><w:name w:val="heading ${n}"/><w:basedOn w:val="Normal"/><w:next w:val="Normal"/><w:uiPriority w:val="9"/><w:qFormat/><w:pPr><w:keepNext/><w:spacing w:before="${[0, 360, 280, 200, 160][n]}" w:after="${[0, 160, 120, 80, 60][n]}"/><w:outlineLvl w:val="${n - 1}"/></w:pPr><w:rPr><w:b/><w:sz w:val="${[0, 36, 28, 24, 22][n]}"/><w:szCs w:val="${[0, 36, 28, 24, 22][n]}"/></w:rPr></w:style>`).join('\n')}
<w:style w:type="paragraph" w:styleId="ListParagraph"><w:name w:val="List Paragraph"/><w:basedOn w:val="Normal"/><w:pPr><w:spacing w:after="60"/></w:pPr></w:style>
</w:styles>`;

export function docDocx(blocks, { title = '', creator = 'BimCraft', created = new Date() } = {}) {
  const when = new Date(created).toISOString().replace(/\.\d{3}Z$/, 'Z');
  const files = {
    '[Content_Types].xml': `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/><Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/><Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/></Types>`,
    '_rels/.rels': `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/></Relationships>`,
    'word/_rels/document.xml.rels': `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>`,
    'word/styles.xml': STYLES,
    'word/document.xml': `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document ${NS}><w:body>${body(blocks)}<w:sectPr><w:pgSz w:w="11906" w:h="16838"/><w:pgMar w:top="1134" w:right="1134" w:bottom="1134" w:left="1134" w:header="567" w:footer="567" w:gutter="0"/></w:sectPr></w:body></w:document>`,
    'docProps/core.xml': `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><dc:title>${x(title)}</dc:title><dc:creator>${x(creator)}</dc:creator><dcterms:created xsi:type="dcterms:W3CDTF">${when}</dcterms:created></cp:coreProperties>`,
  };
  return zip(Object.entries(files).map(([name, s]) => ({ name, data: enc.encode(s) })));
}
