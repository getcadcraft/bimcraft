/* SPDX-License-Identifier: Apache-2.0 */
/**
 * assets-bim-cobie.js — a COBie spreadsheet out of the open model and back in (0.7 LC.12 item 2, session bim-ops). DOM-free:
 * node bin/test-bimcraft.mjs --ops --only cobie.
 *
 * COBie (Construction Operations Building information exchange) is the public handover spreadsheet published by NIBS
 * (National BIM Standard-United States) and used in the UK as BS 1192-4. The sheets and column names below follow COBie 2.4.
 * What we fill and how (every value from the model or the Assets tab; nothing invented):
 *   Contact     one row: the address the person types (CreatedBy everywhere), else 'n/a'
 *   Facility    the project, site and building names, the file's length unit (areas and volumes in its square / cube)
 *   Floor       each storey: name, elevation, height to the next storey
 *   Space       each IfcSpace: name, its storey, long name as the room tag, areas from Qto_SpaceBaseQuantities
 *   Type        the element's IFC type, or one made from class + maker + model; maker, model, model reference, service life,
 *               warranty length (years) from the assets of that type
 *   Component   every asset (assets-bim.js readAssets): its type, space, serial, installed day, warranty start, tag, barcode;
 *               ExtIdentifier = the element's GlobalId (how a spreadsheet coming back is matched)
 *   System      each IfcSystem (IfcDistributionSystem too) with the components assigned to it
 *   Job         one row per maintenance entry (COBie's jobs belong to a type: TypeName is the asset's type)
 *   Document    one row per linked document (SheetName Component, RowName the asset)
 *   Attribute   per component what COBie's columns cannot hold per component: WarrantyEndDate, WarrantyIdentifier,
 *               Manufacturer, ModelNumber, ModelReference, ServiceLife — so a spreadsheet read back restores each asset
 *               exactly even when several share one type
 * 'n/a' where COBie wants a value and the model has none. Category = the IFC class (not an OmniClass code).
 *
 *   gatherFacility(W, api, mid) → facts for cobieWorkbook (storeys, spaces, systems, types, where each element is)
 *   cobieWorkbook(assets, facts, { createdBy, createdOn }) → [{ name, rows, cols, freeze }]   (assets-bim-xlsx writeXlsx)
 *       documents: more Document rows (objects keyed by the sheet's columns), or a function ({ by, on, facility }) → rows (BK.114)
 *   cobieChanges(sheets, assets, others) → { changes: [{ guid, name, data, docs, diff }], unmatched: [name], skipped: [{ name,
 *       why: 'warranty' | 'doc', what }], rows, jobs }
 *       sheets = readXlsx's; assets = readAssets'; others = Map(guid → { name }) for elements that are not assets yet.
 *       Components match by ExtIdentifier (GlobalId), then by Name; only values present in the spreadsheet and different
 *       from the model become a change; Jobs are counted, not read (a COBie job is a type's planned work, not a record).
 */
import { ids, val, lengthUnitMm } from './ifc-util.js';
import { FIELDS, DOC_KINDS, isDay, docLocation } from './assets-bim.js';
import { serialDay } from './assets-bim-xlsx.js';
import { schemaFor } from './ifc/schema.js';

export const SHEETS = {
  Contact: ['Email', 'CreatedBy', 'CreatedOn', 'Category', 'Company', 'Phone', 'ExtSystem', 'ExtObject', 'ExtIdentifier', 'Department', 'OrganizationCode', 'GivenName', 'FamilyName', 'Street', 'PostalBox', 'Town', 'StateRegion', 'PostalCode', 'Country'],
  Facility: ['Name', 'CreatedBy', 'CreatedOn', 'Category', 'ProjectName', 'SiteName', 'LinearUnits', 'AreaUnits', 'VolumeUnits', 'CurrencyUnit', 'AreaMeasurement', 'ExternalSystem', 'ExternalProjectObject', 'ExternalProjectIdentifier', 'ExternalSiteObject', 'ExternalSiteIdentifier', 'ExternalFacilityObject', 'ExternalFacilityIdentifier', 'Description', 'ProjectDescription', 'SiteDescription', 'Phase'],
  Floor: ['Name', 'CreatedBy', 'CreatedOn', 'Category', 'ExtSystem', 'ExtObject', 'ExtIdentifier', 'Description', 'Elevation', 'Height'],
  Space: ['Name', 'CreatedBy', 'CreatedOn', 'Category', 'FloorName', 'Description', 'ExtSystem', 'ExtObject', 'ExtIdentifier', 'RoomTag', 'UsableHeight', 'GrossArea', 'NetArea'],
  Type: ['Name', 'CreatedBy', 'CreatedOn', 'Category', 'Description', 'AssetType', 'Manufacturer', 'ModelNumber', 'WarrantyGuarantorParts', 'WarrantyDurationParts', 'WarrantyGuarantorLabor', 'WarrantyDurationLabor', 'WarrantyDurationUnit', 'ExtSystem', 'ExtObject', 'ExtIdentifier', 'ReplacementCost', 'ExpectedLife', 'DurationUnit', 'WarrantyDescription', 'NominalLength', 'NominalWidth', 'NominalHeight', 'ModelReference', 'Shape', 'Size', 'Color', 'Finish', 'Grade', 'Material', 'Constituents', 'Features', 'AccessibilityPerformance', 'CodePerformance', 'SustainabilityPerformance'],
  Component: ['Name', 'CreatedBy', 'CreatedOn', 'TypeName', 'Space', 'Description', 'ExtSystem', 'ExtObject', 'ExtIdentifier', 'SerialNumber', 'InstallationDate', 'WarrantyStartDate', 'TagNumber', 'BarCode', 'AssetIdentifier'],
  System: ['Name', 'CreatedBy', 'CreatedOn', 'Category', 'ComponentNames', 'ExtSystem', 'ExtObject', 'ExtIdentifier', 'Description'],
  Job: ['Name', 'CreatedBy', 'CreatedOn', 'Category', 'Status', 'TypeName', 'Description', 'Duration', 'DurationUnit', 'Start', 'TaskStartUnit', 'Frequency', 'FrequencyUnit', 'ExtSystem', 'ExtObject', 'ExtIdentifier', 'TaskNumber', 'Priors', 'ResourceNames'],
  Document: ['Name', 'CreatedBy', 'CreatedOn', 'Category', 'ApprovalBy', 'Stage', 'SheetName', 'RowName', 'Directory', 'File', 'ExtSystem', 'ExtObject', 'ExtIdentifier', 'Description', 'Reference'],
  Attribute: ['Name', 'CreatedBy', 'CreatedOn', 'Category', 'SheetName', 'RowName', 'Value', 'Unit', 'ExtSystem', 'ExtObject', 'ExtIdentifier', 'Description', 'AllowedValues'],
};
const NA = 'n/a', EXT = 'BimCraft';
/** Our per-component Attribute rows: COBie attribute name → the Assets field. */
export const ATTRS = { WarrantyEndDate: 'warrantyEnd', WarrantyIdentifier: 'warrantyId', Manufacturer: 'maker', ModelNumber: 'model', ModelReference: 'ref', ServiceLife: 'life' };
const UNIT = { 1: 'millimeters', 10: 'centimeters', 1000: 'meters', 25.4: 'inches', 304.8: 'feet' };
const DOC_CAT = { manual: 'Operations and maintenance manual', warranty: 'Warranty', photo: 'Photo', certificate: 'Certificate', drawing: 'Drawing', other: 'Document' };   // i18n-ignore: COBie category values (data)
const tryIds = (api, mid, cls, inh = false) => { try { return ids(api, mid, cls, inh); } catch { return []; } };
/** 'IFCFURNITURETYPE' → 'IfcFurnitureType' (the schemas' own spelling; IFC4 first, then IFC2X3). */
const ifcName = (cls) => { const up = String(cls || '').toUpperCase(); try { return schemaFor('IFC4').entity(up)?.name || schemaFor('IFC2X3').entity(up)?.name || up; } catch { return up; } };
const round = (x, d = 3) => Math.round(x * 10 ** d) / 10 ** d;

// ---------------------------------------------------------------- the model's facts
export function gatherFacility(W, api, mid) {
  const one = (cls) => { const id = tryIds(api, mid, cls)[0]; return id === undefined ? null : api.GetLine(mid, id, false); };
  const project = one('IFCPROJECT'), site = one('IFCSITE'), building = one('IFCBUILDING');
  const mm = lengthUnitMm(api, mid);
  const unit = UNIT[mm] || 'millimeters', k = UNIT[mm] ? 1 : mm;   // an unknown unit: values in millimetres
  const parent = new Map(), inside = new Map();
  for (const rid of tryIds(api, mid, 'IFCRELAGGREGATES')) { const r = api.GetLine(mid, rid, false); for (const h of r?.RelatedObjects || []) parent.set(h.value, r.RelatingObject?.value); }
  for (const rid of tryIds(api, mid, 'IFCRELCONTAINEDINSPATIALSTRUCTURE')) { const r = api.GetLine(mid, rid, false); for (const h of r?.RelatedElements || []) inside.set(h.value, r.RelatingStructure?.value); }
  const storeyIds = tryIds(api, mid, 'IFCBUILDINGSTOREY');
  const floors = storeyIds.map((id) => { const l = api.GetLine(mid, id, false); return { id, guid: val(l.GlobalId), name: String(val(l.Name) ?? '') || '#' + id, desc: String(val(l.Description) ?? val(l.LongName) ?? ''), elevation: Number(val(l.Elevation)) }; })
    .sort((a, b) => (Number.isFinite(a.elevation) ? a.elevation : 0) - (Number.isFinite(b.elevation) ? b.elevation : 0));
  floors.forEach((f, i) => { const nx = floors[i + 1]; f.height = nx && Number.isFinite(nx.elevation) && Number.isFinite(f.elevation) ? nx.elevation - f.elevation : null; });
  const floorName = new Map(floors.map((f) => [f.id, f.name]));
  const storeyOf = (id) => { let s = inside.get(id) ?? parent.get(id); for (let n = 0; s !== undefined && !floorName.has(s) && n < 6; n++) s = parent.get(s); return floorName.has(s) ? s : null; };
  // quantities: Qto_SpaceBaseQuantities (or any set) areas and heights
  const qto = new Map();
  for (const rid of tryIds(api, mid, 'IFCRELDEFINESBYPROPERTIES')) {
    const r = api.GetLine(mid, rid, false), d = r?.RelatingPropertyDefinition?.value ? api.GetLine(mid, r.RelatingPropertyDefinition.value, false) : null;
    if (!d?.Quantities) continue;
    const q = {};
    for (const h of d.Quantities) { const x = api.GetLine(mid, h.value, false); const v = val(x?.AreaValue ?? x?.LengthValue ?? x?.VolumeValue); if (x?.Name && v !== null && v !== undefined) q[val(x.Name)] = Number(v); }
    for (const h of r.RelatedObjects || []) qto.set(h.value, { ...(qto.get(h.value) || {}), ...q });
  }
  const spaces = tryIds(api, mid, 'IFCSPACE').map((id) => {
    const l = api.GetLine(mid, id, false), q = qto.get(id) || {};
    return { id, guid: val(l.GlobalId), name: String(val(l.Name) ?? '') || '#' + id, longName: String(val(l.LongName) ?? ''), desc: String(val(l.Description) ?? ''),
      storey: storeyOf(id), gross: q.GrossFloorArea ?? null, net: q.NetFloorArea ?? q.GrossFloorArea ?? null, height: q.FinishCeilingHeight ?? q.Height ?? null };
  });
  const spaceIds = new Set(spaces.map((s) => s.id));
  const spaceOf = (id) => { let s = inside.get(id); for (let n = 0; s !== undefined && !spaceIds.has(s) && n < 6; n++) s = parent.get(s); return spaceIds.has(s) ? s : null; };
  // referenced in a space (IfcRelReferencedInSpatialStructure) counts too
  const refIn = new Map();
  for (const rid of tryIds(api, mid, 'IFCRELREFERENCEDINSPATIALSTRUCTURE')) { const r = api.GetLine(mid, rid, false); if (spaceIds.has(r?.RelatingStructure?.value)) for (const h of r.RelatedElements || []) refIn.set(h.value, r.RelatingStructure.value); }
  // types
  const types = new Map();
  for (const rid of tryIds(api, mid, 'IFCRELDEFINESBYTYPE')) {
    const r = api.GetLine(mid, rid, false), ty = r?.RelatingType?.value ? api.GetLine(mid, r.RelatingType.value, false) : null;
    if (!ty) continue;
    for (const h of r.RelatedObjects || []) types.set(h.value, { name: String(val(ty.Name) ?? ''), cls: String(ty.constructor?.name || '').toUpperCase(), guid: val(ty.GlobalId) });
  }
  // systems and their members
  const systems = [];
  for (const sid of tryIds(api, mid, 'IFCSYSTEM', true)) {
    const s = api.GetLine(mid, sid, false);
    const cls = String(s?.constructor?.name || '').toUpperCase();
    if (!s || cls === 'IFCZONE' || cls === 'IFCSTRUCTURALANALYSISMODEL') continue;   // zones and analysis models are not COBie systems
    const members = [];
    for (const rid of tryIds(api, mid, 'IFCRELASSIGNSTOGROUP')) { const r = api.GetLine(mid, rid, false); if (r?.RelatingGroup?.value === sid) members.push(...(r.RelatedObjects || []).map((h) => h.value)); }
    systems.push({ id: sid, guid: val(s.GlobalId), name: String(val(s.Name) ?? '') || '#' + sid, cls, desc: String(val(s.Description) ?? ''), members });
  }
  return {
    project: project ? { name: String(val(project.Name) ?? val(project.LongName) ?? ''), guid: val(project.GlobalId), desc: String(val(project.Description) ?? '') } : null,
    site: site ? { name: String(val(site.Name) ?? ''), guid: val(site.GlobalId), desc: String(val(site.Description) ?? '') } : null,
    building: building ? { name: String(val(building.Name) ?? ''), guid: val(building.GlobalId), desc: String(val(building.Description) ?? '') } : null,
    unit, k, floors, spaces, systems, types, spaceOf: (id) => spaceOf(id) ?? refIn.get(id) ?? null, floorName,
  };
}

// ---------------------------------------------------------------- out
/** The Facility row's Name: what a Document row about the facility names in RowName. */
export const facilityName = (facts) => facts.building?.name || facts.project?.name || NA;
const yearsBetween = (a, b) => { if (!isDay(a) || !isDay(b)) return null; const y = (Date.parse(b) - Date.parse(a)) / (365.25 * 86400000); return y > 0 ? Math.round(y * 10) / 10 : null; };
/** Names COBie wants unique within a sheet: the second "Desk" becomes "Desk (F-102)" or "Desk 2". */
function uniqueNamer() {
  const used = new Set();
  return (base, extra) => {
    let n = String(base || '').trim() || NA, k = 2;
    if (used.has(n.toLowerCase()) && extra) n = n + ' (' + extra + ')';
    const b = n;
    while (used.has(n.toLowerCase())) n = b + ' ' + k++;
    used.add(n.toLowerCase());
    return n;
  };
}

export function cobieWorkbook(assets, facts, { createdBy = '', createdOn = new Date().toISOString().slice(0, 19), documents = null } = {}) {
  const by = String(createdBy || '').trim() || NA, on = createdOn;
  const sheets = Object.fromEntries(Object.entries(SHEETS).map(([name, head]) => [name, [head.map((h) => ({ v: h, s: 'head' }))]]));
  const put = (sheet, obj) => sheets[sheet].push(SHEETS[sheet].map((h) => (obj[h] === undefined || obj[h] === null || obj[h] === '' ? NA : obj[h])));
  const num = (x, d = 3) => (Number.isFinite(x) ? round(x * facts.k, d) : null);   // file units → the Facility's unit
  const area = (x) => (Number.isFinite(x) ? round(x * facts.k * facts.k, 3) : null);
  put('Contact', { Email: by, CreatedBy: by, CreatedOn: on, Category: NA });
  put('Facility', { Name: facts.building?.name || facts.project?.name, CreatedBy: by, CreatedOn: on, Category: NA, ProjectName: facts.project?.name, SiteName: facts.site?.name,
    LinearUnits: facts.unit, AreaUnits: 'square' + facts.unit, VolumeUnits: 'cubic' + facts.unit, CurrencyUnit: NA, AreaMeasurement: 'Qto_SpaceBaseQuantities (IFC)',
    ExternalSystem: EXT, ExternalProjectObject: 'IfcProject', ExternalProjectIdentifier: facts.project?.guid, ExternalSiteObject: 'IfcSite', ExternalSiteIdentifier: facts.site?.guid,
    ExternalFacilityObject: 'IfcBuilding', ExternalFacilityIdentifier: facts.building?.guid, Description: facts.building?.desc, ProjectDescription: facts.project?.desc, SiteDescription: facts.site?.desc, Phase: NA });
  for (const f of facts.floors) put('Floor', { Name: f.name, CreatedBy: by, CreatedOn: on, Category: 'Floor', ExtSystem: EXT, ExtObject: 'IfcBuildingStorey', ExtIdentifier: f.guid, Description: f.desc, Elevation: num(f.elevation), Height: num(f.height) });
  const spaceName = new Map();
  const sName = uniqueNamer();
  for (const s of facts.spaces) {
    const n = sName(s.name, s.longName);
    spaceName.set(s.id, n);
    put('Space', { Name: n, CreatedBy: by, CreatedOn: on, Category: 'IfcSpace', FloorName: facts.floorName.get(s.storey), Description: s.longName || s.desc, ExtSystem: EXT, ExtObject: 'IfcSpace', ExtIdentifier: s.guid,
      RoomTag: s.longName, UsableHeight: num(s.height), GrossArea: area(s.gross), NetArea: area(s.net) });
  }
  // types: the IFC type, or class + maker + model
  const typeKey = (a) => { const ty = facts.types.get(a.id); return ty?.guid ? 'g:' + ty.guid : 'm:' + [a.cls, a.data.maker, a.data.model].join('|'); };
  const typeRows = new Map(), tName = uniqueNamer();
  for (const a of assets) {
    const key = typeKey(a);
    if (typeRows.has(key)) { typeRows.get(key).assets.push(a); continue; }
    const ty = facts.types.get(a.id);
    const base = ty?.name || [ifcName(a.cls), a.data.maker, a.data.model].filter(Boolean).join(' ');
    typeRows.set(key, { name: tName(base), ty, assets: [a] });
  }
  for (const tr of typeRows.values()) {
    const first = (f) => tr.assets.map((a) => a.data[f]).find(Boolean) || '';
    const withW = tr.assets.find((a) => yearsBetween(a.data.warrantyStart, a.data.warrantyEnd));
    put('Type', { Name: tr.name, CreatedBy: by, CreatedOn: on, Category: tr.ty ? ifcName(tr.ty.cls) : ifcName(tr.assets[0].cls), Description: tr.ty?.name || '', AssetType: 'Fixed',
      Manufacturer: first('maker'), ModelNumber: first('model'), WarrantyGuarantorParts: NA, WarrantyDurationParts: withW ? yearsBetween(withW.data.warrantyStart, withW.data.warrantyEnd) : null,
      WarrantyGuarantorLabor: NA, WarrantyDurationLabor: NA, WarrantyDurationUnit: withW ? 'Year' : NA, ExtSystem: EXT, ExtObject: tr.ty ? ifcName(tr.ty.cls) : NA, ExtIdentifier: tr.ty?.guid,
      ExpectedLife: first('life') ? Number(first('life')) : null, DurationUnit: first('life') ? 'Year' : NA, ModelReference: first('ref') });
  }
  const cName = uniqueNamer(), compName = new Map();
  for (const a of assets) {
    const n = cName(a.name || ifcName(a.cls), a.tag);
    compName.set(a.id, n);
    put('Component', { Name: n, CreatedBy: by, CreatedOn: on, TypeName: typeRows.get(typeKey(a)).name, Space: spaceName.get(facts.spaceOf(a.id)), Description: a.name, ExtSystem: EXT, ExtObject: ifcName(a.cls), ExtIdentifier: a.guid,
      SerialNumber: a.data.serial, InstallationDate: a.data.installed, WarrantyStartDate: a.data.warrantyStart, TagNumber: a.tag, BarCode: a.data.barcode, AssetIdentifier: a.tag });
    for (const [attr, f] of Object.entries(ATTRS)) if (a.data[f]) put('Attribute', { Name: attr, CreatedBy: by, CreatedOn: on, Category: 'Submitted', SheetName: 'Component', RowName: n,
      Value: f === 'life' ? Number(a.data[f]) : a.data[f], Unit: f === 'life' ? 'Year' : NA, ExtSystem: EXT, ExtObject: NA, ExtIdentifier: NA, Description: NA, AllowedValues: NA });
    a.log.forEach((e, i) => put('Job', { Name: e.work, CreatedBy: by, CreatedOn: on, Category: 'PM', Status: 'Done', TypeName: typeRows.get(typeKey(a)).name, Description: [e.by && 'By ' + e.by, e.notes].filter(Boolean).join('. ') || e.work,   // i18n-ignore: COBie cell text
      Duration: NA, DurationUnit: NA, Start: e.date, TaskStartUnit: 'day', Frequency: NA, FrequencyUnit: NA, ExtSystem: EXT, ExtObject: 'IfcTask', ExtIdentifier: e.guid, TaskNumber: n + ' ' + (a.log.length - i), Priors: NA, ResourceNames: NA }));
    for (const d of a.docs || []) put('Document', { Name: d.title || d.location, CreatedBy: by, CreatedOn: on, Category: DOC_CAT[d.kind] || DOC_CAT.other, ApprovalBy: NA, Stage: 'As built', SheetName: 'Component', RowName: n,   // i18n-ignore: COBie's stage value (data)
      Directory: /^https?:/i.test(d.location) ? NA : d.location.replace(/[^\\/]*$/, '') || NA, File: /^https?:/i.test(d.location) ? NA : d.location.split(/[\\/]/).pop(), ExtSystem: EXT, ExtObject: 'IfcDocumentReference', ExtIdentifier: d.rel,
      Description: d.kind, Reference: d.location });
  }
  for (const s of facts.systems) {
    const names = s.members.map((m) => compName.get(m)).filter(Boolean);
    put('System', { Name: s.name, CreatedBy: by, CreatedOn: on, Category: ifcName(s.cls), ComponentNames: names.join(','), ExtSystem: EXT, ExtObject: ifcName(s.cls), ExtIdentifier: s.guid, Description: s.desc });
  }
  // BK.114: documents of the facility as a whole (handover-docs.js handoverRows: completion and occupancy certificates, warranties, manuals, as-built drawings)
  for (const d of (typeof documents === 'function' ? documents({ by, on, facility: facilityName(facts) }) : documents) || []) put('Document', d);
  const widths = (head) => head.map((h) => Math.max(10, Math.min(36, h.length + 4)));
  return Object.entries(sheets).map(([name, rows]) => ({ name, rows, cols: widths(SHEETS[name]), freeze: 1 }));
}

// ---------------------------------------------------------------- back in
/** Every element by GlobalId → { name }: a spreadsheet may carry data for an element that is not an asset yet. */
export function elementIndex(api, mid) {
  const out = new Map();
  for (const id of tryIds(api, mid, 'IFCELEMENT', true)) { const l = api.GetLine(mid, id, false); if (l?.GlobalId) out.set(val(l.GlobalId), { name: String(val(l.Name) ?? '') }); }
  return out;
}
const blank = (v) => { const s = String(v ?? '').trim(); return !s || /^n\/?a$/i.test(s) ? '' : s; };
/** A day from a cell: 'YYYY-MM-DD…' or a spreadsheet date number; '' when neither. */
function dayOf(v) {
  const s = blank(v);
  if (!s) return '';
  if (/^\d{4}-\d{2}-\d{2}/.test(s)) return isDay(s.slice(0, 10)) ? s.slice(0, 10) : '';
  return /^\d+(\.\d+)?$/.test(s) ? serialDay(s) : '';
}
function table(sheets, name) {
  const sh = sheets.find((s) => s.name.trim().toLowerCase() === name.toLowerCase());
  if (!sh || !sh.rows.length) return [];
  const head = sh.rows[0].map((h) => String(h).trim().toLowerCase());
  return sh.rows.slice(1).filter((r) => r.some((c) => blank(c))).map((r) => { const o = {}; head.forEach((h, i) => { if (h) o[h] = r[i] ?? ''; }); return o; });
}
const lifeOf = (v, unit) => {
  const s = blank(v);
  if (!s || !/^\d+(\.\d+)?$/.test(s)) return '';
  const u = String(unit || '').toLowerCase(), x = Number(s);
  const y = /month/.test(u) ? x / 12 : /week/.test(u) ? x / 52.1775 : /day/.test(u) ? x / 365.25 : x;
  return y > 0 && y <= 200 ? String(Math.round(y * 10) / 10) : '';
};
const kindOf = (cat, desc) => { const d = String(desc || '').toLowerCase(); if (DOC_KINDS.includes(d)) return d; const c = String(cat || '').toLowerCase(); return /manual|o&m|operation/.test(c) ? 'manual' : /warrant/.test(c) ? 'warranty' : /photo|image/.test(c) ? 'photo' : /certif/.test(c) ? 'certificate' : /drawing/.test(c) ? 'drawing' : 'other'; };

export function cobieChanges(sheets, assets, others = new Map()) {
  const comps = table(sheets, 'Component'), types = table(sheets, 'Type'), attrs = table(sheets, 'Attribute'), docs = table(sheets, 'Document');
  const typeBy = new Map(types.map((t) => [blank(t.name).toLowerCase(), t]));
  const byGuid = new Map(assets.map((a) => [a.guid, a])), byName = new Map();
  for (const a of assets) { const k = String(a.name || '').trim().toLowerCase(); if (k && !byName.has(k)) byName.set(k, a); }
  const out = [], unmatched = [], skipped = [];
  for (const c of comps) {
    const ext = blank(c.extidentifier), nm = blank(c.name);
    const a = byGuid.get(ext) || (others.has(ext) ? { guid: ext, name: others.get(ext).name, data: Object.fromEntries(FIELDS.map((f) => [f, ''])), docs: [] } : null) || byName.get(nm.toLowerCase());
    if (!a) { unmatched.push(nm || ext); continue; }
    const t = typeBy.get(blank(c.typename).toLowerCase()) || {};
    const got = {
      serial: blank(c.serialnumber), barcode: blank(c.barcode), installed: dayOf(c.installationdate), warrantyStart: dayOf(c.warrantystartdate),
      maker: blank(t.manufacturer), model: blank(t.modelnumber), ref: blank(t.modelreference), life: lifeOf(t.expectedlife, t.durationunit),
    };
    // the type's warranty length, from the start day, when no attribute gives the end
    const wy = Number(blank(t.warrantydurationparts));
    if (got.warrantyStart && wy > 0 && /year/i.test(t.warrantydurationunit || 'year')) { const d = new Date(got.warrantyStart + 'T00:00:00Z'); d.setUTCMonth(d.getUTCMonth() + Math.round(wy * 12)); got.warrantyEnd = d.toISOString().slice(0, 10); }
    for (const at of attrs) {
      if (blank(at.sheetname).toLowerCase() !== 'component' || blank(at.rowname).toLowerCase() !== nm.toLowerCase()) continue;
      const f = ATTRS[blank(at.name)];
      if (!f) continue;
      got[f] = f === 'warrantyEnd' ? dayOf(at.value) : f === 'life' ? lifeOf(at.value, at.unit || 'year') : blank(at.value);
    }
    const data = {}, diff = [];
    for (const f of FIELDS) {
      if (!got[f]) continue;
      const v = String(got[f]).slice(0, 255);
      if (v !== String(a.data[f] || '')) { data[f] = v; diff.push({ field: f, from: a.data[f] || '', to: v }); }
    }
    // a warranty that would end before it starts is left as the model has it, and said
    const ws = data.warrantyStart ?? a.data.warrantyStart, we = data.warrantyEnd ?? a.data.warrantyEnd;
    if (ws && we && we < ws) {
      for (const f of ['warrantyStart', 'warrantyEnd']) delete data[f];
      for (let i = diff.length - 1; i >= 0; i--) if (/^warranty(Start|End)$/.test(diff[i].field)) diff.splice(i, 1);
      skipped.push({ name: a.name || nm, why: 'warranty' });
    }
    const have = new Set((a.docs || []).map((d) => String(d.location).trim()));
    const newDocs = [];
    for (const d of docs) {
      if (blank(d.sheetname).toLowerCase() !== 'component' || blank(d.rowname).toLowerCase() !== nm.toLowerCase()) continue;
      const loc = blank(d.reference) || [blank(d.directory), blank(d.file)].filter(Boolean).join('');
      if (!loc || have.has(loc)) continue;
      if (docLocation(loc)) { skipped.push({ name: a.name || nm, why: 'doc', what: loc.slice(0, 80) }); continue; }
      have.add(loc);
      newDocs.push({ title: blank(d.name), location: loc, kind: kindOf(d.category, d.description) });
      diff.push({ field: 'doc', from: '', to: blank(d.name) || loc });
    }
    if (diff.length) out.push({ guid: a.guid, name: a.name || nm, data, docs: newDocs, diff });
  }
  return { changes: out, unmatched, skipped, rows: comps.length, jobs: table(sheets, 'Job').length };
}
