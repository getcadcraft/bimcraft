// SPDX-License-Identifier: Apache-2.0
/**
 * panel-focus.js — the side panels' sections as an accordion (0.9 FX.55, BIMBro 2026-11-05): opening one collapsible section
 * (Find, Quantity totals, Checks, Clash …) closes the others in the same panel when Settings › BimCraft › Side panels is on (default off), so the one you opened is what you see. A lock
 * beside the caret keeps a section open (it neither closes when another opens nor is closed by it); the locks are remembered
 * on this device. Mounted once on the app's root; sections the app adds later are picked up as they appear.
 *   mountPanelFocus(root, { t })  →  { locked(key) → boolean }
 * A section is `.bc-sec > details.bc-find-details` with a `data-<name>-details` attribute (that attribute names the lock).
 */
const SEL = '.bc-sec > details.bc-find-details';
const STORE = 'bimcraft.panel-locks';

export function mountPanelFocus(root, { t }) {
  let locks = new Set();
  try { const v = JSON.parse(localStorage.getItem(STORE) || '[]'); if (Array.isArray(v)) locks = new Set(v.filter((x) => typeof x === 'string').slice(0, 100)); } catch (e) { /* no storage: locks last this visit */ }
  const save = () => { try { localStorage.setItem(STORE, JSON.stringify([...locks])); } catch (e) { /* private window */ } };
  const keyOf = (d) => Object.keys(d.dataset).find((k) => /Details$/.test(k)) || '';
  const panelOf = (d) => d.closest('.bc-left, .bc-right') || root;

  function paint(btn, on) {
    btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    btn.title = btn.ariaLabel = t(on ? 'panel.unlock' : 'panel.lock');
    btn.firstElementChild.className = 'bi ' + (on ? 'bi-lock-fill' : 'bi-unlock');
  }
  function addLock(d) {
    const key = keyOf(d), sum = d.querySelector(':scope > summary');
    if (!key || !sum || sum.querySelector('[data-panel-lock]')) return;
    const btn = document.createElement('button');
    btn.type = 'button'; btn.className = 'bc-lock'; btn.setAttribute('data-panel-lock', key);
    btn.append(document.createElement('i')); btn.firstElementChild.setAttribute('aria-hidden', 'true');
    paint(btn, locks.has(key));
    btn.addEventListener('click', (e) => {
      e.preventDefault(); e.stopPropagation();   // inside a <summary>: do not also open or close the section
      if (locks.has(key)) locks.delete(key); else locks.add(key);
      save(); paint(btn, locks.has(key));
    });
    sum.append(btn);
  }
  const scan = () => root.querySelectorAll(SEL).forEach(addLock);
  scan();
  new MutationObserver(scan).observe(root, { childList: true, subtree: true });

  // toggle does not bubble: listen in the capture phase
  root.addEventListener('toggle', (e) => {
    const d = e.target;
    if (!root.hasAttribute('data-panel-focus') || !(d instanceof HTMLDetailsElement) || !d.matches(SEL) || !d.open) return;   // Settings › BimCraft › Side panels, default off
    const panel = panelOf(d);
    for (const o of panel.querySelectorAll(SEL)) if (o !== d && o.open && !locks.has(keyOf(o))) o.open = false;
  }, true);

  return { locked: (key) => locks.has(key) };
}
