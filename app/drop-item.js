/* SPDX-License-Identifier: Apache-2.0 */
/**
 * drop-item.js — a library item dragged here from another app (0.8 EG.78, studio_PART_2): PartCraft's part arrives as a library item
 * (format 1, hub/drag.js kind `item`), is checked like any item the library gives, and goes through BimCraft's own placement: the
 * ghost follows the pointer, the click (or, for a drop, the drop point) puts it on the storey, the placement dialog suggests the next
 * item number and the placement is a row in the equipment schedule. Nothing here writes the model; startPlacing / commitPlace do.
 *
 *   dropHandlers({ L, startPlacing, viewer, status, ready, t }) → { item(offer) }   for window.cadcraftStudio.drag.accept(…)
 *     L = libitem.js; startPlacing(entry) enters placement mode (bimcraft.js); viewer.planePoint(clientX, clientY, y) and
 *     viewer.placing.{move,click} drive it; ready() → null | the reason no model is open.
 *   itemFromText(text, L) → { item } | { error: 'json' | 'invalid', why }
 */
export async function itemFromText(text, L) {
  let obj;
  try { obj = JSON.parse(text); } catch { return { error: 'json' }; }
  if (!obj || typeof obj !== 'object' || obj.format !== L.FORMAT) return { error: 'invalid', why: 'format' };
  const item = L.cleanItem(obj);
  const v = L.validateItem(item, { partial: true });
  if (!v.ok) return { error: 'invalid', why: String((v.errors && v.errors[0]) || '') };
  return { item };
}

export function dropHandlers(ctx) {
  const { L, startPlacing, ready = () => null, t = (k) => k } = ctx;   // ctx.viewer is read when it is needed: BimCraft makes it on the first model
  return {
    item: async ({ file, point, name, from }) => {
      const why = ready();
      if (why) throw new Error(why);
      const got = await itemFromText(await file.text(), L);
      if (got.error === 'json') throw new Error(t('drop.item.json'));
      if (got.error) throw new Error(t('drop.item.invalid', { why: got.why || '' }));
      const sha256 = await L.itemHash(got.item);
      startPlacing({ item: got.item, meta: { library: 'file', sha256, sourceFile: String(from || '') + ': ' + String(name || got.item.name) } });
      // dropped on the drawing: put it where it was dropped (the placement dialog still asks for its number); from the shelf's
      // button there is no point, and the ghost follows the pointer until the person clicks
      const viewer = ctx.viewer;
      if (point && viewer && typeof viewer.planePoint === 'function' && viewer.placing) {
        const pt = viewer.planePoint(point.clientX, point.clientY, viewer.placeY || 0);
        if (pt) { viewer.placing.click(pt, null); return t('drop.item.dropped', { name: got.item.name }); }
      }
      return t('drop.item.click', { name: got.item.name });
    },
  };
}
