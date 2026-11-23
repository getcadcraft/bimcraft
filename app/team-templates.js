/* SPDX-License-Identifier: Apache-2.0 */
/**
 * team-templates.js — project templates shared with a team (D8.12-D, the part left from 0.9; session bim-core-11, 2026-11-21).
 * The team store is the one office standards already use: TeamShared on the server, /api/v1/team/shared (FX.216, kind `template`), reached
 * with the account's Bearer token (Studio's device sign-in or the tab's /library/connect token: window.ccAddonsAccount). Nothing new is stored.
 * A shared template body is { format: 'bimcraft-template', app: 'bimcraft', name, ifc } (the template's IFC text; the server keeps at most 200 KB).
 * The website page prints window.ccTeamShared when it is open for the person; without it a web tab never calls (no 403 in the console).
 * No token, the switch off (.env TEAM_SHARED_ITEMS), cloud sync closed, offline or no team: every call answers empty and the app works as before.
 *   teamTemplates({ account, fetch }) → {
 *     list()                        → { teams[{owner, team, name, role}], items[{id, name, owner_user_id, team, team_name, by, updated_at}] }   ([] when closed)
 *     share({ owner, team, name, bytes }) → { ok, item?, message? }      (bytes = the template's IFC bytes)
 *     bytes({ owner, team, id })    → Uint8Array (throws with a message when it cannot be read)
 *   }
 *   teamValue(item) / parseTeamValue(v): the <option> value of a team template in New building › Start from ('@team:<owner>:<team>:<id>').
 */
export const FORMAT = 'bimcraft-template';
const PATH = '/api/v1/team/shared';
const TIMEOUT = 6000;

export function teamValue(it) { return '@team:' + it.owner_user_id + ':' + it.team + ':' + it.id; }
export function parseTeamValue(v) {
  const m = /^@team:(\d+):([0-9a-f-]{36}):([A-Za-z0-9_-]{6,40})$/i.exec(String(v || ''));
  return m ? { owner: Number(m[1]), team: m[2], id: m[3] } : null;
}

export function teamTemplates({ account = () => (typeof window !== 'undefined' ? window.ccAddonsAccount || null : null), fetch: f = (typeof fetch === 'function' ? fetch.bind(globalThis) : null) } = {}) {
  // Open? A website page says so (window.ccTeamShared, printed by office-shared.inc while TEAM_SHARED_ITEMS is on): no flag on the web = closed, no call.
  // Studio and the other desktop editions have no server page: they ask, and a "closed" answer is kept for the tab (sessionStorage), so it is asked once.
  const CLOSED = 'bimcraft.teamshared.closed';
  const open = () => {
    const g = typeof window !== 'undefined' ? window : {};
    if (g.ccTeamShared) return !!g.ccTeamShared.open;
    if ((g.ccEdition || 'web') === 'web') return false;
    try { return sessionStorage.getItem(CLOSED) !== '1'; } catch { return true; }
  };
  const acc = () => { try { const a = account(); return a && a.token && open() ? a : null; } catch { return null; } };
  async function call(path, init = {}) {
    const a = acc();
    if (!a || !f) return { ok: false, status: 0, message: 'signed out' };   // i18n-ignore: a developer's reason
    const ctl = typeof AbortController === 'function' ? new AbortController() : null;
    const timer = ctl ? setTimeout(() => ctl.abort(), TIMEOUT) : null;
    try {
      const r = await f((a.base || '') + path, { ...init, signal: ctl?.signal, credentials: 'omit', headers: { Accept: 'application/json', Authorization: 'Bearer ' + a.token, ...(init.body ? { 'Content-Type': 'application/json' } : {}) } });
      let j = null; try { j = await r.json(); } catch { j = null; }
      if (r.status === 403 && j && (j.code === 'team_shared_closed' || j.code === 'sync_closed')) { try { sessionStorage.setItem(CLOSED, '1'); } catch { /* blocked */ } }
      if (!r.ok || !j || j.status !== 'success') return { ok: false, status: r.status, message: (j && j.message) || 'HTTP ' + r.status, code: j && j.code };   // i18n-ignore: the server's words
      return { ok: true, status: r.status, data: j.data || {} };
    } catch (e) { return { ok: false, status: 0, message: String(e && e.message || e) }; }
    finally { if (timer) clearTimeout(timer); }
  }
  async function list() {
    const r = await call(PATH + '?mine=1&kind=template&app=bimcraft');
    if (!r.ok) return { teams: [], items: [], closed: true, why: r.message };
    return { teams: Array.isArray(r.data.teams) ? r.data.teams : [], items: Array.isArray(r.data.items) ? r.data.items : [] };
  }
  async function share({ owner, team, name, bytes }) {
    const ifc = typeof bytes === 'string' ? bytes : new TextDecoder().decode(bytes);
    const r = await call(PATH, { method: 'POST', body: JSON.stringify({ owner, team, kind: 'template', name, body: { format: FORMAT, app: 'bimcraft', name, ifc } }) });
    return r.ok ? { ok: true, item: r.data.item } : { ok: false, message: r.message };
  }
  async function bytes({ owner, team, id }) {
    const r = await call(PATH + '?owner=' + encodeURIComponent(owner) + '&team=' + encodeURIComponent(team) + '&id=' + encodeURIComponent(id));
    if (!r.ok) throw new Error(r.message);
    let b = null; try { b = JSON.parse(r.data.item?.body || 'null'); } catch { b = null; }
    if (!b || b.format !== FORMAT || typeof b.ifc !== 'string' || !b.ifc.startsWith('ISO-10303-21')) throw new Error('not a BimCraft template');   // i18n-ignore: shown inside new.from.teamgone
    return new TextEncoder().encode(b.ifc);
  }
  return { list, share, bytes, available: () => !!acc() };
}
