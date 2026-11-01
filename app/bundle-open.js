// SPDX-License-Identifier: Apache-2.0
// BimCraft's side of a project bundle: the generic reader is the shared library (./bundle/read.js, rule 39); what stays here reads the
// IFC model it opened (layers, storeys, view plans). DOM-free.
/* i18n-ignore-file: file-format code. */
export * from './bundle/read.js';

// ---- the model side: layers and views ----

const ifcText = (s) => String(s ?? '').replace(/\\X2\\([0-9A-F]+)\\X0\\/gi, (_, h) => h.match(/.{4}/g).map((x) => String.fromCharCode(parseInt(x, 16))).join(''))
  .replace(/\\X\\([0-9A-F]{2})/gi, (_, h) => String.fromCharCode(parseInt(h, 16)));
const lineIds = (api, mid, name) => { const v = api.GetLineIDsWithType(mid, api.GetTypeCodeFromName(name), true); const out = []; for (let i = 0; i < v.size(); i++) out.push(v.get(i)); return out; };
const ref = (x) => (x && typeof x === 'object' ? x.value : x);
const decodeName = (v) => { const s = typeof v === 'object' && v ? v.value : v; return typeof s === 'string' && /\\X2?\\/i.test(s) ? ifcText(s) : (s ?? ''); };

/**
 * Presentation layers of a model → Map(layer name → Set(expressID)) over the model's elements (`model.classOf` keys):
 * an IfcPresentationLayerAssignment names representations (or their items); an element is on a layer when one of its
 * shape representations, or an item of one, is assigned to it.
 */
export function layerIndex(api, mid, model) {
  const repOwner = new Map();   // representation or item id → element id
  for (const id of model.classOf.keys()) {
    let l; try { l = api.GetLine(mid, id, false); } catch (e) { continue; }
    const pds = ref(l?.Representation); if (!pds) continue;
    let s; try { s = api.GetLine(mid, pds, false); } catch (e) { continue; }
    for (const r of s?.Representations || []) {
      const rid = ref(r); repOwner.set(rid, id);
      let rl; try { rl = api.GetLine(mid, rid, false); } catch (e) { continue; }
      for (const it of rl?.Items || []) repOwner.set(ref(it), id);
    }
  }
  const out = new Map();
  for (const lid of lineIds(api, mid, 'IFCPRESENTATIONLAYERASSIGNMENT')) {
    let l; try { l = api.GetLine(mid, lid, false); } catch (e) { continue; }
    const name = decodeName(l?.Name); if (!name) continue;
    let set = out.get(name); if (!set) out.set(name, (set = new Set()));
    for (const a of l.AssignedItems || []) { const e = repOwner.get(ref(a)); if (e !== undefined) set.add(e); }
  }
  return out;
}

/**
 * What to show for one view of the bundle in the opened model.
 * → { storeyIds (null = every storey), hidden Set(expressID) (elements on layers the view's combination hides),
 *     scale, combination (name | null), unknownCombination, story (manifest story row | null), mode 'plan'|'3d'|'other' }.
 * Stories are matched by the IFC GlobalId the manifest gives (`stories[].ifc`, through `guids` = storeyGuids()), else by
 * name, else by order.
 */
export function viewPlan(manifest, view, model, layers, guids = null) {
  const out = { storeyIds: null, hidden: new Set(), scale: view.scale ?? null, combination: view.layer_combination ?? null, unknownCombination: false, story: null, mode: view.kind === 'plan' ? 'plan' : (view.kind === '3d' || view.kind === 'document_3d') ? '3d' : 'other' };
  if (view.story !== undefined) {
    const s = manifest.stories.find((x) => x.index === view.story) || null;
    out.story = s;
    const storeys = model.storeys || [];
    let hit = null;
    if (s?.ifc && guids) hit = storeys.find((x) => guids.get(x.id) === s.ifc) || null;
    if (!hit && s?.name) hit = storeys.find((x) => x.name === s.name) || null;
    if (!hit && !s) { const sorted = [...manifest.stories].sort((a, b) => a.index - b.index); const k = sorted.findIndex((x) => x.index === view.story); hit = k >= 0 ? storeys[k] || null : null; }
    if (hit) out.storeyIds = [hit.id];
  }
  if (out.combination) {
    const lc = manifest.standards.layer_combinations.find((x) => x.name === out.combination);
    if (!lc) out.unknownCombination = true;
    else for (const [name, st] of Object.entries(lc.layers)) if (st.hidden && layers?.has(name)) for (const id of layers.get(name)) out.hidden.add(id);
  }
  return out;
}

/** Storey expressID → GlobalId (the model's storey list carries no GlobalId). */
export function storeyGuids(api, mid, model) {
  const out = new Map();
  for (const s of model.storeys || []) { try { const g = api.GetLine(mid, s.id, false)?.GlobalId; out.set(s.id, decodeName(g)); } catch (e) { /* a storey the engine cannot read */ } }
  return out;
}

/** Views grouped by their folder path, in manifest order: [{ path: [...], views: [...] }]. */
export function viewTree(list) {
  const groups = new Map();
  for (const v of list) { const k = (v.path || []).join(' / '); if (!groups.has(k)) groups.set(k, { path: v.path || [], items: [] }); groups.get(k).items.push(v); }
  return [...groups.values()];
}
