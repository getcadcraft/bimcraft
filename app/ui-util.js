/* SPDX-License-Identifier: Apache-2.0 */
/**
 * ui-util.js — small DOM and formatting helpers shared by the BimCraft UI modules.
 * el() is the only way file-derived text reaches the page: children are appended as text
 * nodes (textContent semantics), never parsed as HTML. A model or folder is untrusted input.
 */
import { makeEl } from './ui-util-core.js';

export const el = makeEl({ on: 'click', dataset: false });   // PERF.74: the shared builder with this app's own rules (ui-util-core.js)

export function fillDl(dl, rows, keepEmpty = false) {
  dl.replaceChildren();
  for (const [k, v] of rows) {
    if (!keepEmpty && (v === null || v === undefined || v === '')) continue;
    dl.append(el('dt', {}, k || ''), el('dd', {}, v === null || v === undefined ? '' : String(v)));
  }
}

export function bytes(n) {
  if (n < 1024) return n + ' B';
  if (n < 1048576) return (n / 1024).toFixed(0) + ' KB';
  if (n < 1073741824) return (n / 1048576).toFixed(1) + ' MB';
  return (n / 1073741824).toFixed(2) + ' GB';
}

export function num(n) { return Number(n).toLocaleString('en-US'); }

export function day(ms) {
  return ms ? new Date(ms).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : '';
}

// Revit's new-project defaults are not data: a value equal to its own parameter name
// ("Project Number" = "Project Number") or one of the stock fill-ins below.
const REVIT_DEFAULTS = { 'Project Issue Date': 'issue date', 'Project Address': 'enter address here', 'Client Name': 'owner' };   // i18n-ignore: Revit file data (stock values matched, never shown)
export function isPlaceholder(p) {
  const v = String(p.value || '').trim().toLowerCase();
  return !v || v === String(p.name || '').trim().toLowerCase() || REVIT_DEFAULTS[p.name] === v;
}

/** A real (non-placeholder) Project Information value, or null. */
export function projectParam(atom, name) {
  for (const g of atom?.groups || []) for (const p of g.params) if (p.name === name && !isPlaceholder(p)) return p.value;
  return null;
}
