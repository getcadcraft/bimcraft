/* SPDX-License-Identifier: Apache-2.0 */
/**
 * paper-labels.js — GH.3-A: the paper lists (sheet set, sheet editor, document export) keep the standard names and show
 * the dimensions in the display unit: "Letter · 8.5 × 11 in", "A3 · 297 × 420 mm". The numbers come from display-units.js.
 *   labelPapers(select, units?)   rewrites each option's text; the option values (letter, a4, tabloid, archd, a3, a1) stay
 */
import { t } from './i18n.js';
import { getDisplayUnits, paperLabel } from './model-units.js';

export function labelPapers(select, units = getDisplayUnits()) {
  if (!select) return;
  for (const o of select.options) o.textContent = paperLabel(t('paper.name.' + o.value), o.value, units);
}
