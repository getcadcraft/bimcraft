#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/** 0.11 close-out (EG.41): BimCraft's live adapter answers where(ops): the storey is the sheet, the IFC classes are the tags.
 *  A small stand-in for the open file (the calls where() makes: inverse, attr, has, type, schema.isA). Run: node bin/test-bimcraft-live-where.mjs */
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const { createLive } = await import(pathToFileURL(path.join(REPO, 'public_html/assets/apps/bimcraft/dev/live.js')).href);
let pass = 0, fail = 0;
const ok = (c, m, x) => { if (c) pass++; else { fail++; console.log('FAIL ' + m + (x !== undefined ? ' — ' + JSON.stringify(x) : '')); } };

const REL = 'IFCRELCONTAINEDINSPATIALSTRUCTURE';
const PRODUCTS = new Set(['IFCWALL', 'IFCDOOR', 'IFCPIPESEGMENT', 'IFCSLAB']);
// storeys 10 (Ground) and 11 (First); wall 20 and door 21 on Ground, pipe 22 on First; 30 is a property set; rels 40, 41
const lines = new Map([[10, { t: 'IFCBUILDINGSTOREY', Name: 'Ground' }], [11, { t: 'IFCBUILDINGSTOREY', Name: 'First' }],
  [20, { t: 'IFCWALL' }], [21, { t: 'IFCDOOR' }], [22, { t: 'IFCPIPESEGMENT' }], [30, { t: 'IFCPROPERTYSET' }],
  [40, { t: REL, RelatingStructure: { ref: 10 } }], [41, { t: REL, RelatingStructure: { ref: 11 } }]]);
const file = {
  inverse: (type, attr) => (type === REL && attr === 'RelatedElements' ? new Map([[20, [40]], [21, [40]], [22, [41]]]) : new Map()),
  attr: (id, name) => (lines.get(id) || {})[name] ?? null,
  has: (id) => lines.has(id),
  type: (id) => (lines.get(id) || {}).t || null,
  schema: { isA: (type, base) => base === 'IFCPRODUCT' && PRODUCTS.has(type) },
};
let open = true;
const lv = createLive({ editor: () => ({ mid: open ? 0 : null, api: { file: () => file } }) });
ok(typeof lv.where === 'function', 'where exists');
let w = lv.where([{ o: 'line', id: 20, t: 'IFCWALL', p: [] }]);
ok(w && w.sheet === 'Ground' && w.box === null && JSON.stringify(w.tags) === '["IFCWALL"]', 'a wall is on its storey, tagged by its class, no box', w);
w = lv.where([{ o: 'line', id: 20, t: 'IFCWALL', p: [] }, { o: 'line', id: 21, t: 'IFCDOOR', p: [] }]);
ok(w.sheet === 'Ground' && w.tags.length === 2 && w.tags.includes('IFCDOOR'), 'two elements on one storey: one sheet, both classes', w);
w = lv.where([{ o: 'line', id: 20, t: 'IFCWALL', p: [] }, { o: 'line', id: 22, t: 'IFCPIPESEGMENT', p: [] }]);
ok(w.sheet === '\u0000mixed', 'two storeys in one step are mixed', w);
w = lv.where([{ o: 'gone', id: 22 }]);
ok(w && w.sheet === 'First' && w.tags[0] === 'IFCPIPESEGMENT', 'a removal is placed by what the file still says', w);
w = lv.where([{ o: 'line', id: 50, t: 'IFCSLAB', p: [] }, { o: 'line', id: 51, t: REL, p: [null, null, null, null, [{ ref: 50 }], { ref: 11 }] }]);
ok(w && w.sheet === 'First' && w.tags[0] === 'IFCSLAB', 'a new element is placed by the step\'s own containment line', w);
w = lv.where([{ o: 'line', id: 60, t: 'IFCSLAB', p: [] }]);
ok(w && w.sheet === undefined && w.tags[0] === 'IFCSLAB', 'a new element with no storey yet: tagged, no sheet (a scope that names a sheet refuses it)', w);
ok(lv.where([{ o: 'line', id: 30, t: 'IFCPROPERTYSET', p: [] }]) === null, 'a step with no element in it is null');
ok(lv.where([]) === null && lv.where(null) === null, 'empty and missing ops are null');
const many = lv.where(Array.from({ length: 12 }, (_, i) => ({ o: 'line', id: 100 + i, t: 'IFCWALL', p: [] })).concat([{ o: 'line', id: 22, t: 'IFCPIPESEGMENT', p: [] }]));
ok(many.tags.length <= 8, 'at most eight tags', many);
open = false;
ok(lv.where([{ o: 'line', id: 20, t: 'IFCWALL', p: [] }]) === null, 'no file open: null');
console.log(pass + ' passed, ' + fail + ' failed'); process.exit(fail ? 1 : 0);
