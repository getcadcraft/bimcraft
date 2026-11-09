/* SPDX-License-Identifier: Apache-2.0 */
/**
 * climate-future-ui.js — BimCraft's thin adapter for the shared climate-futures block (0.9 EG.46, session climate-futures-09). The engines and the
 * block are lib/climate (copied into ./climate/ by tools/climate/sync.mjs; never edit the copies). This file only says where BimCraft's site is, how
 * BimCraft saves a file and how the EnergyPlus check is handed a weather file; hazard-ui.js and energy-ep-ui.js mount it.
 *
 *   climateFor(host, { key, show, onChange }) → the lib block (createClimate) with BimCraft's look and site
 *   floodFuture(peakM, f, kind)                 → raiseFlood result for a flood that is `peakM` deep above the lowest floor (depth = level, ground ≈ floor)
 *   handEpw(text, name)                         → gives the EnergyPlus check a weather file (event `cc-bimcraft-climate-epw`)
 */
import { t, locale } from './i18n.js';
import { createClimate } from './climate/panel.js';
import { raiseFlood } from './climate/flood.js';
import { siteOf } from './daylight-bim-sky.js';

const CLS = { input: 'bc-input', select: 'select-cc', btn: 'btn-line btn-sm-cc', run: 'btn-plot btn-sm-cc', table: 'bc-qto-table', note: 'bc-note', muted: 'bc-muted', h: 'bc-h' };

export function handEpw(text, name) {
  globalThis.ccBimcraftClimateEpw = { text, name };
  globalThis.dispatchEvent?.(new CustomEvent('cc-bimcraft-climate-epw', { detail: { name } }));
}

function save(name, text) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([text], { type: 'text/plain' }));
  a.download = name;
  document.body.append(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 5000);
}

export function climateFor(host, { key = 'bimcraft.climate', show = [], onChange, epw } = {}) {
  return createClimate({ doc: document, t, locale: locale(), key, show, cls: CLS, onChange,
    host: { latLon: () => { try { const ed = host.editor?.(); return ed ? siteOf(ed.api, ed.mid) : null; } catch (e) { return null; } }, download: save, useEpw: handEpw, epw } });
}

export const floodFuture = (peakM, f, kind = 'coastal') => raiseFlood({ level: peakM, depth: peakM, kind, d: f.d });
