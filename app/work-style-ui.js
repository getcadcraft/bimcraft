/* SPDX-License-Identifier: Apache-2.0 */
/**
 * work-style-ui.js — Settings › BimCraft › Working style (0.9 D8.12, session `bim-views-09`): settings.inc's fieldset
 * [data-bc-workstyle-set]. A preset radio [data-ws9-preset=own|shared] sets all four defaults ([data-ws9=dup|print|count|start]);
 * changing one makes it "Custom" (shown, not pickable), as the workspace layouts do. The hint [data-ws9-hint] says what the preset does.
 * work-style.js keeps it. bindWorkStyle(root, t) — idempotent; it follows changes from other windows (storage events).
 */
import { readStyle, setPreset, setOne, KEY } from './work-style.js';

export function bindWorkStyle(root, t) {
  const set = root.querySelector('[data-bc-workstyle-set]');
  if (!set) return null;
  const show = () => {
    const s = readStyle();
    for (const r of set.querySelectorAll('[data-ws9-preset]')) r.checked = r.value === s.preset;
    for (const f of set.querySelectorAll('[data-ws9]')) f.value = s[f.dataset.ws9];
    const h = set.querySelector('[data-ws9-hint]');
    if (h) h.textContent = t('ws9.hint.' + s.preset);
  };
  if (!set.dataset.bound) {
    set.dataset.bound = '1';
    for (const r of set.querySelectorAll('[data-ws9-preset]')) r.addEventListener('change', () => { if (r.checked && r.value !== 'custom') { setPreset(r.value); show(); } });
    for (const f of set.querySelectorAll('[data-ws9]')) f.addEventListener('change', () => { setOne(f.dataset.ws9, f.value); show(); });
    addEventListener('storage', (e) => { if (e.key === KEY) show(); });
    addEventListener('bimcraft-workstyle', show);
  }
  show();
  return { show };
}
