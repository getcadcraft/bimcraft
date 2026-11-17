/* SPDX-License-Identifier: Apache-2.0 */
/**
 * mep/pipe-specs-data.js — starter pipe specs a person can add to their model (0.9.1, suggestion #1499). Import-free data.
 *
 * HONESTY: these are NOT the standards' own texts (they are sold documents we did not read). Each table below is the outside
 * diameter and wall that TWO OR MORE published supplier / maker pages, fetched on the date given, print for that standard and
 * agree on, row by row. Rows only one page gave, or that pages disagreed on, are LEFT OUT (listed under each table). The source
 * pages and the edition each page names are recorded in the spec (`source`), every spec is marked `check: true` ("check against
 * your project standard"), and the app shows that mark wherever the spec is named. Roughness, pressure ratings and weights are
 * not given: no source for them was checked. The joint and the elbow factor are drawing defaults a person changes.
 * Millimetres throughout.
 */
const FETCHED = '2026-11-11';
const rows = (list) => list.map(([name, dn, od, wall]) => ({ name, dn, od, wall }));

export const STARTER_SPECS = [
  {
    builtin: 'asme-bpe-tube', name: 'ASME BPE tube', standard: 'ASME BPE, Part DT, Table DT-4-1 (hygienic tube, nominal OD sizes)', material: 'Stainless steel', joint: 'orbital', elbow: 1.5,
    note: 'Outside diameter and wall as two supplier pages print them (mm). Check against your project standard.',
    source: { url: 'https://www.aseptconn.ch/resources/ASME-BPE-PRODUCT-CATALOG-PORTRAIT.pdf', url2: 'https://tecarvepipes.com/asme-bpe-stainless-steel-tubing-guide/',
      edition: 'Page 1 cites the 2022 revision (Table DT-4-1); page 2 cites "ASME BPE-2026, Table DT-4-1". Both give the same mm figures.', fetched: FETCHED },
    // every row: both pages agree
    sizes: rows([['1/4"', null, 6.35, 0.89], ['3/8"', null, 9.53, 0.89], ['1/2"', null, 12.7, 1.65], ['3/4"', null, 19.05, 1.65], ['1"', null, 25.4, 1.65], ['1-1/2"', null, 38.1, 1.65],
      ['2"', null, 50.8, 1.65], ['2-1/2"', null, 63.5, 1.65], ['3"', null, 76.2, 1.65], ['4"', null, 101.6, 2.11], ['6"', null, 152.4, 2.77]]),
  },
  {
    builtin: 'en-10357-a', name: 'EN 10357 series A tube (DIN 11850 row 2)', standard: 'EN 10357 series A; the former DIN 11850 Reihe 2 (hygienic stainless tube)', material: 'Stainless steel', joint: 'orbital', elbow: 1.5,
    note: 'Outside diameter and wall as three supplier pages print them for DIN 11850 Reihe 2. One of them states that EN 10357 series A has the same dimensions. Check against your project standard.',
    source: { url: 'https://assets.alfalaval.com/documents/p1d5118c5/alfa-laval-hygienic-fittings-din-en-10357-a-product-leaflets-en-gb.pdf', url2: 'https://www.chronimo.de/files/chronimo/products/rohre/rohre-din-11850-lebensmittel.pdf',
      edition: 'No page states the edition. A third page (k-vt.de/din-11850) agrees on every row kept.', fetched: FETCHED },
    // left out: DN 6 (8 × 1.0) and DN 8 (10 × 1.0), one page only
    sizes: rows([['DN10', 10, 13, 1.5], ['DN15', 15, 19, 1.5], ['DN20', 20, 23, 1.5], ['DN25', 25, 29, 1.5], ['DN32', 32, 35, 1.5], ['DN40', 40, 41, 1.5], ['DN50', 50, 53, 1.5],
      ['DN65', 65, 70, 2], ['DN80', 80, 85, 2], ['DN100', 100, 104, 2], ['DN125', 125, 129, 2], ['DN150', 150, 154, 2], ['DN200', 200, 204, 2]]),
  },
  {
    builtin: 'en-10255-m', name: 'EN 10255 steel tube, medium series', standard: 'EN 10255, medium series (M); tubes suitable for welding and threading', material: 'Non-alloy steel', joint: 'threaded', elbow: 1.5,
    note: 'Specified outside diameter and wall as two to four maker pages print them. Check against your project standard.',
    source: { url: 'https://www.tuspipe.com/standards/en-10255/s195t/', url2: 'https://www.tenaris.com/media/tjyk5gu5/pipes-for-civil-and-industrial-installations_2026.pdf',
      edition: 'No page states the edition. Further pages agreeing on the rows they cover: steeltube.sk (DN 20 to 100), tubasys.com (DN 25 to 150).', fetched: FETCHED },
    // left out: 1/8 (10.2 × 2.0), 1/4 (13.5 × 2.3) and 3/8 (17.2 × 2.3): the outside diameter is on one page only
    sizes: rows([['DN15', 15, 21.3, 2.6], ['DN20', 20, 26.9, 2.6], ['DN25', 25, 33.7, 3.2], ['DN32', 32, 42.4, 3.2], ['DN40', 40, 48.3, 3.2], ['DN50', 50, 60.3, 3.6], ['DN65', 65, 76.1, 3.6],
      ['DN80', 80, 88.9, 4], ['DN100', 100, 114.3, 4.5], ['DN125', 125, 139.7, 5], ['DN150', 150, 165.1, 5]]),
  },
  {
    builtin: 'en-10255-h', name: 'EN 10255 steel tube, heavy series', standard: 'EN 10255, heavy series (H); tubes suitable for welding and threading', material: 'Non-alloy steel', joint: 'threaded', elbow: 1.5,
    note: 'Specified outside diameter and wall as two or three maker pages print them. Check against your project standard.',
    source: { url: 'https://www.tuspipe.com/standards/en-10255/s195t/', url2: 'https://www.tenaris.com/media/tjyk5gu5/pipes-for-civil-and-industrial-installations_2026.pdf',
      edition: 'No page states the edition. steeltube.sk agrees on DN 20 to 100.', fetched: FETCHED },
    // left out: 1/8, 1/4, 3/8 (as the medium series) and DN 150 (165.1 × 5.4, one page only)
    sizes: rows([['DN15', 15, 21.3, 3.2], ['DN20', 20, 26.9, 3.2], ['DN25', 25, 33.7, 4], ['DN32', 32, 42.4, 4], ['DN40', 40, 48.3, 4], ['DN50', 50, 60.3, 4.5], ['DN65', 65, 76.1, 4.5],
      ['DN80', 80, 88.9, 5], ['DN100', 100, 114.3, 5.4], ['DN125', 125, 139.7, 5.4]]),
  },
];
/** A starter by its key, as a fresh spec object (check: true; the caller gives it a free id). */
export const starterSpec = (key) => { const s = STARTER_SPECS.find((x) => x.builtin === key); return s ? { ...s, check: true, source: { ...s.source }, sizes: s.sizes.map((z) => ({ ...z })) } : null; };
