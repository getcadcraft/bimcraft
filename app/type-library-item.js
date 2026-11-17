/* SPDX-License-Identifier: Apache-2.0 */
/**
 * type-library-item.js — a wall, floor, roof or ceiling type as a Library item of the Types kind, out and in (0.10 booklet rows BK.24 and
 * BK.21, session bk-r3-types-10). No DOM: bin/test-bimcraft.mjs --eltypes runs it in Node.
 *
 * The Library's item kind "type" (libitem.js checkTypeBlock, LibraryItemFormat::typeBlock; agreed with the Library builder) carries the
 * type as a type pack of exactly ONE type (type-pack.js, docs/apps/bimcraft-type-packs.md), so there is one recipe format and one check:
 *   item.kind 'type', item.category 'types/walls' | 'types/floors' | 'types/roofs' | 'types/ceilings', item.ifc { class, predefined },
 *   item.type { element, lod? , thickness (mm), layers (how many), pack }, item.classification [{ system, code, title }] (the type's own codes)
 *
 *   typeToLibraryItem(w, key, { name, description }) → item (no uuid, version, license or provenance: the Library adds those on upload)
 *   typeFromLibraryItem(item) → { ok, pack, element, key, name, errors }     the pack to hand to type-pack.js importTypePack
 *   importTypeItem(item, { conflict }) → op (type-pack.js importTypePack: keep | copy | replace; one undo step)
 */
import { makeTypePack, readTypePack, importTypePack } from './type-pack.js';
import { assemblyKind } from './wall-assemblies.js';
import { FORMAT, FORMAT_VERSION, validateItem } from './libitem.js';

const CATEGORY = { wall: 'types/walls', floor: 'types/floors', roof: 'types/roofs', ceiling: 'types/ceilings' };
const fail = (key, fill = {}) => { throw Object.assign(new Error(key), { key, fill }); };

export function typeToLibraryItem(w, key, { name = '', description = '' } = {}) {
  const pack = makeTypePack(w, { keys: [key], name: '' });
  const ty = pack.types[0], element = assemblyKind(ty.recipe.key);
  const classification = Object.entries(ty.classification || {}).map(([system, c]) => ({ system, code: c.code, ...(c.title ? { title: c.title } : {}) }));
  return {
    format: FORMAT, format_version: FORMAT_VERSION,
    name: String(name || ty.recipe.name).slice(0, 120), kind: 'type', category: CATEGORY[element], description: String(description || '').slice(0, 2000),
    ifc: { ...ty.ifc },
    type: { element, ...(ty.recipe.lod != null ? { lod: ty.recipe.lod } : {}), thickness: ty.thickness, layers: ty.recipe.layers.length, pack },
    ...(classification.length ? { classification } : {}),
    plan: { layers: [], entities: [] }, body: null, params: {},
  };
}

export function typeFromLibraryItem(item) {
  const errors = [];
  if (!item || typeof item !== 'object' || item.kind !== 'type' || !item.type || typeof item.type !== 'object') return { ok: false, errors: ['type: not a Types item'] };   // i18n-ignore: a format refusal for logs; the page says typeitem.err.format
  const v = validateItem(item, { partial: true });
  if (!v.ok) errors.push(...v.errors.map((e) => (typeof e === 'string' ? e : (e.path || '') + ': ' + (e.message || ''))));
  const r = readTypePack(item.type.pack);
  if (!r.ok) errors.push(...r.errors.map((e) => 'type.pack.' + e));
  if (errors.length) return { ok: false, errors };
  if (r.pack.types.length !== 1 || r.pack.families?.length) return { ok: false, errors: ['type.pack: exactly one type'] };   // i18n-ignore
  const ty = r.pack.types[0];
  if (ty.kind !== item.type.element) return { ok: false, errors: ['type.element: not the kind of the type in the pack'] };   // i18n-ignore
  return { ok: true, pack: r.pack, element: ty.kind, key: ty.recipe.key, name: ty.recipe.name, errors: [] };
}

export function importTypeItem(item, { conflict = 'skip' } = {}) {
  const r = typeFromLibraryItem(item);
  if (!r.ok) fail('typeitem.err.format', { why: r.errors[0] });
  return importTypePack(r.pack, { conflict });
}
