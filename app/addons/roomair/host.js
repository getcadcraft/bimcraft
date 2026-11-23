/* SPDX-License-Identifier: Apache-2.0 */
/**
 * host.js — the BimCraft side of the Room air add-on (0.11 SU.1812, su-finish-11 lane cfd). Reads only; it writes nothing into the model.
 *
 *   detect(api) → the host, or null when the add-on API has no rooms (model.roomPlans, API 1.4)
 *   host.rooms() → [{ name, poly mm, area m², height mm (the median height of the walls on its edge), z, storey (GlobalId) }]
 *   host.terminals(room) → [{ kind, x, y, z, w, d, h?, rot, flowLps, T, rh, name, guid, from }]   the diffusers, grilles and fan coils BimCraft placed
 *       (mep.equipment(): CadCraft_MepEquipment) whose plan point lies in the room on its level. The airflow is the element's CadCraft_MepCalc AirflowLps (the
 *       one the duct calculation reads; 0 when not set, and the panel says so). A diffuser or grille is a supply or a return from its duct system; the supply
 *       air temperature and humidity are not in the model, so the panel fills its own defaults and says so.
 */
const SUPPLY_T = 14, SUPPLY_RH = 90;   // the panel's starting supply air (a typical cooling setting, labelled on screen; the person types theirs)

export function detect(api) {
  if (!api || !api.model || typeof api.model.roomPlans !== 'function' || !api.mep || typeof api.mep.equipment !== 'function') return null;
  const inPoly = (q, p) => { let c = false; for (let i = 0, j = p.length - 1; i < p.length; j = i++) { const a = p[i], b = p[j]; if ((a[1] > q[1]) !== (b[1] > q[1]) && q[0] < (b[0] - a[0]) * (q[1] - a[1]) / (b[1] - a[1]) + a[0]) c = !c; } return c; };
  const area = (p) => { let s = 0; for (let i = 0; i < p.length; i++) { const a = p[i], b = p[(i + 1) % p.length]; s += a[0] * b[1] - a[1] * b[0]; } return Math.abs(s / 2); };
  return {
    id: 'bim',
    async rooms() {
      let plans = [];
      try { plans = (await api.model.roomPlans()) || []; } catch { plans = []; }
      let walls = [];
      try { walls = (await api.model.walls()) || []; } catch { walls = []; }
      const byGuid = new Map(walls.map((x) => [x.guid, x]));
      return plans.filter((r) => r && Array.isArray(r.poly) && r.poly.length >= 3).map((r) => {
        const hs = (r.walls || []).map((g) => byGuid.get(g)).filter(Boolean).map((x) => x.height).filter((x) => x > 0).sort((a, b) => a - b);
        return { name: r.name || '', poly: r.poly.map((q) => [Math.round(q[0]), Math.round(q[1])]), area: area(r.poly) / 1e6, z: r.z || 0, storey: r.storey || '', level: r.storeyName || '',
          height: hs.length ? Math.round(hs[Math.floor(hs.length / 2)]) : undefined };
      });
    },
    async terminals(room) {
      let eq = [];
      try { eq = (await api.mep.equipment()) || []; } catch { eq = []; }
      const mine = eq.filter((e) => ['diffuser', 'grille', 'fancoil'].includes(e.kind) && (!room.storey || e.storey === room.storey) && inPoly([e.x, e.y], room.poly));
      if (!mine.length) return [];
      let flows = {};
      try { flows = await api.model.read((w) => Object.fromEntries(mine.map((e) => { let p = null; try { p = w.readPset(e.id, 'CadCraft_MepCalc'); } catch { p = null; } return [e.guid, Number(p && p.AirflowLps) || 0]; }))); } catch { flows = {}; }
      return mine.map((e, i) => {
        const v = e.values || {}, flowLps = flows[e.guid] || 0, name = e.tag || e.kind + ' ' + (i + 1);
        if (e.kind === 'fancoil') return { kind: 'fancoil', x: e.x, y: e.y, z: e.z, w: v.length, d: v.width, h: v.height, rot: e.rot || 0, flowLps, T: SUPPLY_T, rh: SUPPLY_RH, name, guid: e.guid, from: 'model' };
        const sys = String(v.system || (e.kind === 'grille' ? 'return' : 'supply')), kind = sys === 'supply' ? 'supply' : sys === 'exhaust' ? 'exhaust' : 'return';
        const w = e.kind === 'diffuser' ? v.face : v.faceW, d = e.kind === 'diffuser' ? v.face : v.faceH;
        return { kind, x: e.x, y: e.y, z: e.z, w, d, rot: e.rot || 0, flowLps, T: kind === 'supply' ? SUPPLY_T : NaN, rh: kind === 'supply' ? SUPPLY_RH : NaN, name, guid: e.guid, from: 'model' };
      });
    },
  };
}
export const SUPPLY_DEFAULTS = Object.freeze({ T: SUPPLY_T, rh: SUPPLY_RH });
