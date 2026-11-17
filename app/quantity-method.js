/* SPDX-License-Identifier: Apache-2.0 */
/**
 * quantity-method.js — the project's measurement method, kept in the IFC (booklet row BK.42, session bk-measure-10). A thin
 * adapter over quantities/methods.js (host-free, shared with TakeoffCraft). No DOM, and no model-* imports, so the IFC quantity
 * writers (model-slabs.js, model-floors.js) can ask it for the rule without an import loop.
 *
 * Stored on the IfcProject as the property set CadCraft_Quantities:
 *   Format 'cadcraft-quantities 1' · Method (the method's id, a plain string) · MethodName (its name, for other programs)
 *   MethodFile (IfcText: the whole pack as JSON when it is an office's own file, '' for a shipped pack; so the file opens the
 *   same on a computer that never loaded that office file)
 * No set = the CadCraft default, which measures exactly as before BK.42.
 *
 *   readMethodSetting(w) → { id, method, own (the office pack | null), missing (the id is not known here: the default is used) }
 *   activeMethod(w) → the method in force (never null) · ruleOf(w, quantity) → methods.js methodRule in mm / mm², null for the default
 *   writeMethodSetting(w, id, own = null)   inside an op; own: a cleaned office pack
 *   MM   the units BimCraft measures in, for methodRule: { m2: 1e6, mm: 1 }
 */
import { ids } from './ifc-util.js';
import { DEFAULT_METHOD, cleanMethod, defaultMethod, findMethod, isDefault, methodRule, builtinMethods } from './quantities/methods.js';

export const METHOD_PSET = 'CadCraft_Quantities';
export const MM = Object.freeze({ m2: 1e6, mm: 1 });
const projectOf = (w) => { try { return ids(w.api, w.mid, 'IFCPROJECT')[0] ?? null; } catch (e) { return null; } };

export function readMethodSetting(w) {
  const none = { id: DEFAULT_METHOD, method: defaultMethod(), own: null, missing: false };
  const p = w ? projectOf(w) : null;
  if (!p) return none;
  let ps = null;
  try { ps = w.readPset(p, METHOD_PSET); } catch (e) { ps = null; }
  const id = typeof ps?.Method === 'string' ? ps.Method.trim() : '';
  if (!id || id === DEFAULT_METHOD) return none;
  let own = null;
  if (typeof ps.MethodFile === 'string' && ps.MethodFile.trim()) {
    try { const r = cleanMethod(JSON.parse(ps.MethodFile)); if (r.method && r.method.id === id && !builtinMethods().some((m) => m.id === id)) own = r.method; } catch (e) { own = null; }
  }
  const method = findMethod(id, own ? [own] : []);
  return method ? { id, method, own, missing: false } : { id, method: defaultMethod(), own: null, missing: true };
}
export function activeMethod(w) { return readMethodSetting(w).method; }
/** The rule of one quantity in BimCraft's units, or null under the default method (callers then measure exactly as before). */
export function ruleOf(w, quantity) {
  const m = activeMethod(w);
  return isDefault(m) ? null : methodRule(m, quantity, MM);
}
export function writeMethodSetting(w, id, own = null) {
  const p = projectOf(w);
  if (!p) throw new Error('no project');   // i18n-ignore: never reached from the picker (a file is open)
  const method = findMethod(id, own ? [own] : []);
  if (!method) throw new Error('unknown method');   // i18n-ignore: the picker only offers methods it holds
  const isOwn = !!own && own.id === id && !builtinMethods().some((m) => m.id === id);
  if (id === DEFAULT_METHOD && !w.readPset(p, METHOD_PSET)) return method;   // the default on a file that never had a method: nothing to write
  w.upsertPset(p, METHOD_PSET, [['Format', 'IFCLABEL', 'cadcraft-quantities 1'], ['Method', 'IFCIDENTIFIER', id], ['MethodName', 'IFCLABEL', method.name], ['MethodFile', 'IFCTEXT', isOwn ? JSON.stringify(own) : '']]);
  return method;
}
