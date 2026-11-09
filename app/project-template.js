/* SPDX-License-Identifier: Apache-2.0 */
/**
 * project-template.js — project templates (0.9 D8.12-D, session `bim-views-09`): "a good template is essential" (the requester).
 * No DOM: node bin/test-bimcraft.mjs --views09 --only d (a template round-trips every setting).
 *
 * A template is an IFC file: the project as it is, with no model elements. Kept: the levels (names, heights, their plan and ceiling
 * plan settings), view templates, callouts and duplicated views, drafting (title marks, north arrows), sections, grids, the views'
 * pens and the print style (pen table), tags (CadCraft_TagDefs), families and every other type (IfcTypeObject, IfcGroup), materials,
 * sheets, sheet formats and title blocks (sheet-formats.js), the regulations ticked, the working style (CadCraft_Template Style). Left
 * out: every IfcElement (walls, slabs, roofs, doors, windows, openings, furniture, family elements, MEP, terrain…), rooms (IfcSpace)
 * and wall dimensions (they measure walls). Before this, New model (new-model.js) gave a name, levels and a height, and an Archicad
 * bundle's template standards (0.8 DF.12b, bundle/standards.js) give layers, pen sets and line types to the drawing apps — neither
 * keeps a BimCraft project's own settings, so nothing here repeats them.
 *   CadCraft_Template on the project: Format 'cadcraft-bim-template 1' (a template; '' in a model made from one), Name, Made (date),
 *   From (the template a model was made from), Style (the working style as JSON, work-style.js).
 *
 *   await templateBytes(bytes, { WebIFC, IfcModel, name, style, now }) → Uint8Array   the template of a model (its saved bytes)
 *   await newFromTemplate(bytes, { WebIFC, IfcModel, name, now }) → { bytes, style, from }   a new model: the project, site and
 *       building get new GlobalIds and the project the new name; everything else as the template has it
 *   readTemplateInfo(w) → { template: bool, name, made, from, style }      templateSummary(w) → counts for the dialog
 */
import { IfcEditor } from './ifc-edit.js';
import { IfcElements } from './ifc-elements.js';
import { ModelWriter } from './model-write.js';
import { op } from './model-ops.js';
import { ids, val } from './ifc-util.js';
import { readLevels } from './model-levels.js';

export const TEMPLATE_PSET = 'CadCraft_Template';
export const FORMAT = 'cadcraft-bim-template 1';
const project = (w) => ids(w.api, w.mid, 'IFCPROJECT')[0];
const clean = (s, n = 120) => String(s ?? '').replace(/[\u0000-\u001f\u007f]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, n);

async function open(bytes, WebIFC, IfcModel) {
  const eng = await IfcModel.create(WebIFC, null);
  await eng.load(bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes));
  const ed = new IfcEditor(WebIFC, eng);
  return { eng, ed, w: () => new ModelWriter(WebIFC, ed.api, ed.mid) };
}
const close = (eng) => { try { eng.close?.(); } catch (e) { /* scratch engine */ } };

export function readTemplateInfo(w) {
  const pj = project(w), ps = pj === undefined ? null : w.readPset(pj, TEMPLATE_PSET);
  let style = null;
  try { style = ps?.Style ? JSON.parse(ps.Style) : null; } catch (e) { style = null; }
  return { template: ps?.Format === FORMAT, name: clean(ps?.Name), made: clean(ps?.Made, 40), from: clean(ps?.From), style: style && typeof style === 'object' ? style : null };
}
export function templateSummary(w) {
  const count = (c, inh = true) => { try { return ids(w.api, w.mid, c, inh).length; } catch (e) { return 0; } };
  return { levels: readLevels(w).length, elements: count('IFCELEMENT'), spaces: count('IFCSPACE'), types: count('IFCTYPEOBJECT'), groups: count('IFCGROUP', false) };
}

export async function templateBytes(bytes, { WebIFC, IfcModel, name, style = null, now = new Date() }) {
  const { eng, ed, w } = await open(bytes, WebIFC, IfcModel);
  try {
    const nm = clean(name);
    if (!nm) throw Object.assign(new Error('model.err.tpl.name'), { key: 'model.err.tpl.name' });
    // every element (an element takes its parts, openings and the relations naming it: ifc-elements.js), top-level ones first
    const ie = new IfcElements(WebIFC, ed.api, ed.mid);
    for (let pass = 0; pass < 4; pass++) {
      const list = ids(ed.api, ed.mid, 'IFCELEMENT', true);
      if (!list.length) break;
      ie.remove(list);
    }
    ed.modelChange(op((wr) => {
      // rooms and wall dimensions go too; drafting, section lines and grids stay (they belong to the views)
      const drop = [...ids(wr.api, wr.mid, 'IFCSPACE')];
      for (const id of ids(wr.api, wr.mid, 'IFCANNOTATION')) { const ot = val(wr.api.GetLine(wr.mid, id, false)?.ObjectType); if (ot === 'CadCraft_WallDimension' || ot === 'Underlay') drop.push(id); }
      if (drop.length) wr.dropProduct(drop);
      wr.upsertPset(project(wr), TEMPLATE_PSET, [['Format', 'IFCLABEL', FORMAT], ['Name', 'IFCLABEL', nm], ['Made', 'IFCLABEL', now.toISOString().slice(0, 10)], ['From', 'IFCLABEL', ''], ['Style', 'IFCTEXT', style ? JSON.stringify(style) : '']]);
      return { id: project(wr), ids: [] };
    }));
    return ed.save();
  } finally { close(eng); }
}

export async function newFromTemplate(bytes, { WebIFC, IfcModel, name, now = new Date() }) {
  const { eng, ed, w } = await open(bytes, WebIFC, IfcModel);
  try {
    const info = readTemplateInfo(w());
    const nm = clean(name);
    if (!nm) throw Object.assign(new Error('new.err.name'), { key: 'new.err.name' });
    ed.modelChange(op((wr) => {
      const pj = project(wr);
      for (const c of ['IFCPROJECT', 'IFCSITE', 'IFCBUILDING']) for (const id of ids(wr.api, wr.mid, c)) {
        const l = wr.touch(id);
        l.GlobalId = wr.T('IFCGLOBALLYUNIQUEID', val(wr.guid()));
        if (c === 'IFCPROJECT' || c === 'IFCBUILDING') l.Name = wr.L(nm);
        wr.write(l);
      }
      wr.upsertPset(pj, TEMPLATE_PSET, [['Format', 'IFCLABEL', ''], ['From', 'IFCLABEL', info.name || ''], ['Made', 'IFCLABEL', now.toISOString().slice(0, 10)]]);
      return { id: pj, ids: [] };
    }));
    return { bytes: ed.save(), style: info.style, from: info.name };
  } finally { close(eng); }
}
