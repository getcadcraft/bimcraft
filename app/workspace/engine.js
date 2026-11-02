/* SPDX-License-Identifier: Apache-2.0 */
/**
 * engine.js — BimCraft's own tools behind the docked-ribbon workspace (owner 2026-10-24: "his UX but our engine"; map
 * docs/apps/bimcraft-workspace.md). Doc's workspace (workspace.js, from drsurfbum/bimcraft-SDH F28) wires a few commands of
 * its own (commands.js: open, save, undo, redo, select, wall, Edit Type, plan, 3D, view range, detail, scale, fit); every other
 * ribbon tool runs the app's own button here, the way the menu styles do (input-bimcraft.js: one code path for every layout).
 *
 * ENGINE: ribbon tool key → { tool } a Draw tool ([data-mtool], needs a floor plan open and Draw on)
 *                         | { sel } any other button of the app      | { open } a <details> section of the left panel
 *                         | { rtab } a tab of the right panel
 *                         | { settings } a section of the app's Settings dialog (opens Settings on the tab that holds it)
 * A ribbon tool that is in neither commands.js nor here is not built yet: its button stays, greyed, and says so.
 */
export const ENGINE = {
  door: { tool: 'door' }, window: { tool: 'window' }, component: { tool: 'family' }, column: { tool: 'column' },
  roof: { tool: 'roof' }, ceiling: { tool: 'ceiling' }, floor: { tool: 'floor' },
  railing: { tool: 'railing' }, ramp: { tool: 'ramp' }, stair: { tool: 'stair' }, dormer: { tool: 'dormer' }, grid: { tool: 'grid' },
  framing: { tool: 'framing' }, foundation: { tool: 'foundation' },
  duct: { tool: 'duct' }, pipe: { tool: 'pipe' }, electrical: { tool: 'electrical' },
  terrain: { tool: 'terrain' }, section: { tool: 'section' }, callout: { tool: 'callout' },
  detailline: { tool: 'dline' }, filledregion: { tool: 'dhatch' }, trim: { tool: 'trim' },
  link: { sel: '[data-model-add]' }, loadfamily: { sel: '[data-fam-list]' },
  clash: { open: '[data-clash-details]' }, checks: { open: '[data-checks-details]' }, schedule: { open: '[data-msched-sec]' },
  takeoff: { sel: '[data-res-takeoff]', draw: true }, sheet: { sel: '[data-res-sheetsopen]', draw: true },
  placeview: { sel: '[data-res-sheetsopen]', draw: true }, legend: { sel: '[data-res-sheetsopen]', draw: true },
  assemblyschedule: { sel: '[data-res-sheetsopen]', draw: true },
  paint: { sel: '[data-paint-open]' }, copy: { sel: '[data-edit-menu] [data-act="copy"]' }, delete: { sel: '[data-edit-menu] [data-act="delete"]' },
  daylight: { rtab: 'daylight' }, analysis: { rtab: 'analysis' },
  // 0.8.1 (BIMBro, Discord 2026-11-02): tools 0.8 has that the ribbon had left greyed as "Not built"
  image: { tool: 'picture' },                          // D8.8 pictures as backgrounds
  cad: { sel: '[data-trace-open]', draw: true },       // Build › From a drawing…: DWG / DXF / PDF / scan, kept as an underlay
  units: { settings: '[data-units-set]' },             // Settings › General › Units
  // 0.8.1 sweep (BIMBro again, 2026-11-02: "fix these"): every other ribbon tool whose BimCraft tool exists in the other layouts
  move: { tool: 'move' }, align: { tool: 'align' },    // D8.3 Move / Align
  level: { sel: '[data-lv-addmany]', draw: true },     // Add levels… (the Levels panel's dialog)
  phases: { open: '[data-eg59-details]' },             // EG.59 renovation phases (left panel)
  materials: { sel: '[data-materials-menu]' },         // the material library
  rcp: { kind: 'rcp' },   // the level's reflected ceiling plan: the Draw bar's plan-kind choice ([data-model-viewkind])
};

/** The element a mapped tool clicks (null when the app has no such button here, e.g. an add-on not loaded). */
export function engineTarget(root, spec) {
  if (spec.tool) return root.querySelector('[data-mtool="' + spec.tool + '"]');
  if (spec.sel) return root.querySelector(spec.sel);
  if (spec.open) return root.querySelector(spec.open);
  if (spec.rtab) return root.querySelector('[data-rtab="' + spec.rtab + '"]');
  if (spec.kind) return root.querySelector('[data-model-viewkind]');
  if (spec.settings) return root.querySelector('[data-settings-open]') || root.ownerDocument?.querySelector('[data-settings-open]') || null;
  return null;
}

/**
 * Why a mapped tool can't run now ('' = it can). state = the workspace snapshot; t = the app's text function.
 * Draw tools need an open IFC and a floor plan (the workspace opens one first when none is active, see run()).
 */
export function engineWhy(root, spec, state, t) {
  if (!state.document && !spec.settings) return t('ws.why.open');   // Settings need no open IFC
  if (state.busy) return t(state.placing ? 'ws.why.placing' : 'ws.why.busy');
  const b = engineTarget(root, spec);
  if (!b) return t('ws.why.nothere');
  if (b.disabled || b.getAttribute('aria-disabled') === 'true') return b.getAttribute('title') || t('ws.why.off');
  if ((spec.tool || spec.kind) && !state.levels.length) return t('ws.why.nolevels');
  return '';
}

/**
 * Run a mapped tool: Draw on when it needs it, a floor plan active for a Draw tool (activatePlan), then the app's own button.
 * A left-panel section opens in the Model palette (showModel) and scrolls into view; a right-panel tab is picked.
 */
export async function engineRun(root, spec, { activatePlan, showModel, state }) {
  const frame = () => new Promise((r) => requestAnimationFrame(() => r()));
  if ((spec.tool || spec.kind) && state().view?.kind !== 'plan') { activatePlan(); await frame(); }
  if (spec.tool || spec.draw) {
    const toggle = root.querySelector('[data-model-toggle]');
    if (toggle && toggle.getAttribute('aria-pressed') !== 'true') { toggle.click(); await frame(); }
  }
  const b = engineTarget(root, spec);
  if (!b) return false;
  if (spec.kind) {   // a select, not a button: pick the kind and say so, as a person changing it would
    if (b.value !== spec.kind) { b.value = spec.kind; b.dispatchEvent(new Event('change', { bubbles: true })); }
    return true;
  }
  if (spec.settings) {   // open Settings, go to the tab that holds the section, show it
    b.click(); await frame();
    const doc = b.ownerDocument, box = doc.querySelector(spec.settings);
    const pane = box?.closest('[data-settings-pane]');
    if (pane?.hidden) doc.querySelector('[data-settings-tab="' + pane.getAttribute('data-settings-pane') + '"]')?.click();
    await frame();
    // the 0.7 Settings list on the left (app-settings.js: one section shown at a time): pick the section that holds it
    const pick = [...(box?.closest('dialog')?.querySelectorAll('.shell-sec-nav button') || [])].find((n) => n.ccSet && (n.ccSet === box || n.ccSet.contains(box)));
    if (pick) pick.click(); else box?.scrollIntoView({ block: 'start' });
    return true;
  }
  if (spec.open) {
    showModel();
    const sec = b.closest('section') || b;
    sec.hidden = false;
    if (b.tagName === 'DETAILS') b.open = true;
    sec.scrollIntoView({ block: 'nearest' });
    return true;
  }
  b.closest('details:not([open])')?.setAttribute('open', '');
  b.click();
  b.closest('details.bc-mb-more')?.removeAttribute('open');   // a Build / Modify menu closes as it does on a click in it
  return true;
}
