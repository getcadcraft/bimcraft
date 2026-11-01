/* SPDX-License-Identifier: Apache-2.0 */
/**
 * rules-hook.js — the one place an add-on can fill in "the building regulations in force" (add-on API 1.2, 0.8 REG.1). Core
 * BimCraft knows no regulations: with no add-on it asks nothing and its stair tools use their built-in limits. DOM-free, no imports.
 *
 *   setRules(provider | null)    the add-on's provider (addons/bimcraft-api.js api.rules.provide); null when it is switched off
 *   rules() → provider | null
 *   rulesChanged()               the provider's pack changed: everything below asks again
 *   onRules(fn) → stop()         fn(provider | null) after a change
 *
 * provider = {
 *   stairStart(kind) → { riserMax, tread } | {}      what a NEW stair of that kind starts from (mm); a spiral stair keeps its own
 *   stairLine(stair, layout, fmt) → string | null    what Properties says about a stair's checks (fmt(value, unit) writes a number)
 *   tag() → string                                   the stair options row: where the limits come from
 *   schedule({ snap, loops, stairs, levelName, stairWord, fmtLen }) → { key: 'regs', title, note, head, rows, nums, total, rowInfo? } | null
 *                                                    one more entry in Schedules (the add-on words it; the picker's value is 'regs')
 *   problems?(same context as schedule) → [problem]  (0.7.1 → 0.8) the rules the model does not meet, in the shell's Problems shape
 *                                                    (docs/0.8-PROBLEMS-SPEC.md); model-ui.js re-checks them after each edit
 *   packs?() → [{ id, name, edition, jurisdiction, review }]   the packs a check report names (REG.1d)
 * }
 * The add-on also applies its stair limits itself (res-stair.js useStairLimits) and undoes that when it is switched off.
 */
let current = null;
const listeners = new Set();
export const rules = () => current;
export function onRules(fn) { listeners.add(fn); return () => listeners.delete(fn); }
export function rulesChanged() { for (const fn of [...listeners]) { try { fn(current); } catch (e) { /* a listener's failure never stops the others */ } } }
export function setRules(p) { current = p && typeof p === 'object' ? p : null; rulesChanged(); }
