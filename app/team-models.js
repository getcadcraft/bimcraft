/* SPDX-License-Identifier: Apache-2.0 */
/**
 * team-models.js — "Several models" reads the team's model (0.8 LC.2 mount, from teamwork_PART_4): the project's other cloud files, each opened
 * beside the open model at the offset the project set. DOM-free except the fetch; the app passes addModel.
 *
 *   const r = await loadTeamModels({ tw, addModel, request, have }) → { ok, added: [name], skipped: [{name, why}], hidden, turned: n, message }
 *     tw       window.ccTeamwork.tw (its model() → { ok, models[{drawing{uuid,name,app,version}, discipline, offset{x,y,z,rot}, visible}], hidden })
 *     addModel (file, {link}) → entry | null    the app's addModel(); the entry's `offset` (metres) is set here
 *     request  (path) → { status, bytes() } | null   the signed-in transport (window.ccVaultCloud.request, else same-origin fetch)
 *     have     () → [uuid]   cloud files already open (never opened twice)
 * Offsets are millimetres in the team model; BimCraft keeps metres. A turn (rot, degrees about Z) is not applied: the placement matrix of a model here
 * is an offset only, so a turned model is opened unturned and the result says how many. Files that are not IFC are skipped with a reason.
 */
const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export function defaultRequest() {
  const vc = typeof window !== 'undefined' ? window.ccVaultCloud : null;
  if (vc && typeof vc.request === 'function') return (path) => vc.request('GET', path, {});
  return async (path) => {
    const r = await fetch(path, { credentials: 'include' });
    return { status: r.status, bytes: async () => new Uint8Array(await r.arrayBuffer()) };
  };
}

export async function loadTeamModels({ tw, addModel, request = defaultRequest(), have = () => [], FileCtor = (typeof File !== 'undefined' ? File : null) }) {
  if (!tw || typeof tw.model !== 'function') return { ok: false, added: [], skipped: [], hidden: 0, turned: 0, message: 'team' };
  const m = await tw.model();
  if (!m || !m.ok) return { ok: false, added: [], skipped: [], hidden: 0, turned: 0, message: (m && m.message) || 'team' };
  const added = [], skipped = [];
  let turned = 0;
  const open = new Set(have());
  for (const e of m.models || []) {
    const d = e.drawing || {};
    if (!UUID_RE.test(String(d.uuid || ''))) continue;
    if (d.uuid === tw.drawing || open.has(d.uuid)) continue;
    if (e.visible === false) { skipped.push({ name: d.name || d.uuid, why: 'hidden' }); continue; }
    if (d.app && d.app !== 'bimcraft' && !/\.ifc$/i.test(String(d.name || ''))) { skipped.push({ name: d.name || d.uuid, why: 'not-ifc' }); continue; }
    try {
      const res = await request('/api/v1/sync/open?drawing=' + encodeURIComponent(d.uuid) + (d.version ? '&version=' + Number(d.version) : ''));
      if (!res || res.status !== 200) { skipped.push({ name: d.name || d.uuid, why: 'http-' + (res ? res.status : 0) }); continue; }
      const bytes = await res.bytes();
      const name = String(d.name || d.uuid).replace(/[\\/]/g, '_');
      const file = new FileCtor([bytes], /\.ifc$/i.test(name) ? name : name + '.ifc', { type: 'application/x-step' });
      const ent = await addModel(file, {});
      if (!ent) { skipped.push({ name, why: 'full' }); continue; }
      const o = e.offset || {};
      ent.offset = [Number(o.x) / 1000 || 0, Number(o.y) / 1000 || 0, Number(o.z) / 1000 || 0];
      ent.teamDrawing = d.uuid;
      if (Number(o.rot)) turned++;
      added.push(name);
    } catch (err) { skipped.push({ name: d.name || d.uuid, why: String((err && err.message) || err) }); }
  }
  return { ok: true, added, skipped, hidden: Number(m.hidden) || 0, turned, message: '' };
}
