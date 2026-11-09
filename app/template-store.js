/* SPDX-License-Identifier: Apache-2.0 */
/**
 * template-store.js — your project templates in this browser (0.9 D8.12-D, session `bim-views-09`): IndexedDB `bimcraft-templates`,
 * store `templates` ({ id, name, made, size, bytes: ArrayBuffer }). A template is also a plain IFC file (Save as template can download
 * it; New can open one), so it goes to a colleague or another computer as a file. Team templates through Studio are not built (log).
 *   listTemplates() → [{ id, name, made, size }] newest first      getTemplate(id) → { …, bytes } | null
 *   putTemplate({ name, bytes, made }) → id (a template with the same name is replaced)      removeTemplate(id)
 * Falls back to memory when IndexedDB is missing (a private window): kept for this page only.
 */
const DB = 'bimcraft-templates', STORE = 'templates';
const mem = new Map();
function db() {
  return new Promise((ok, no) => {
    if (typeof indexedDB === 'undefined') { no(new Error('no indexedDB')); return; }
    const r = indexedDB.open(DB, 1);
    r.onupgradeneeded = () => { if (!r.result.objectStoreNames.contains(STORE)) r.result.createObjectStore(STORE, { keyPath: 'id' }); };
    r.onsuccess = () => ok(r.result);
    r.onerror = () => no(r.error);
  });
}
async function tx(mode, fn) {
  let d;
  try { d = await db(); } catch (e) { return fn(null); }
  return new Promise((ok, no) => {
    const t = d.transaction(STORE, mode), st = t.objectStore(STORE);
    let out;
    Promise.resolve(fn(st)).then((v) => { out = v; });
    t.oncomplete = () => { d.close(); ok(out); };
    t.onerror = () => { d.close(); no(t.error); };
  });
}
const req = (r) => new Promise((ok, no) => { r.onsuccess = () => ok(r.result); r.onerror = () => no(r.error); });
export async function listTemplates() {
  const all = await tx('readonly', (st) => (st ? req(st.getAll()) : [...mem.values()]));
  return (all || []).map(({ id, name, made, size }) => ({ id, name, made, size })).sort((a, b) => String(b.made).localeCompare(String(a.made)) || a.name.localeCompare(b.name));
}
export async function getTemplate(id) {
  return (await tx('readonly', (st) => (st ? req(st.get(id)) : mem.get(id)))) || null;
}
export async function putTemplate({ name, bytes, made = new Date().toISOString() }) {
  const have = (await listTemplates()).find((x) => x.name === name);
  const id = have?.id || 'tpl-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 7);
  const buf = bytes instanceof ArrayBuffer ? bytes : bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
  const row = { id, name, made, size: buf.byteLength, bytes: buf };
  await tx('readwrite', (st) => (st ? req(st.put(row)) : mem.set(id, row)));
  return id;
}
export async function removeTemplate(id) {
  await tx('readwrite', (st) => (st ? req(st.delete(id)) : mem.delete(id)));
}
