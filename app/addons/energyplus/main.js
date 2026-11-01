/* SPDX-License-Identifier: Apache-2.0 */
/**
 * main.js — the EnergyPlus check add-on for BimCraft (0.8 EG.13; owner 2026-10-29: "EnergyPlus as an opt-in add-on"). Off until switched on in Settings › Add-ons.
 * The step itself (energy-ep*.js: IDF writer, result readers, the pane in the Energy tab) stays in the app's own files; this add-on is the switch. While it is on
 * `globalThis.bimcraftEpAddon` is true and the pane (and the assistant tools energyplus_export / energyplus_simulate) work; off, the pane says how to switch it on.
 * It loads no engine and fetches nothing: the person's engine address and the Simulate button are the pane's.
 */
const say = () => globalThis.dispatchEvent?.(new Event('cc-bimcraft-ep-addon'));
export function activate() { globalThis.bimcraftEpAddon = true; say(); return () => { globalThis.bimcraftEpAddon = false; say(); }; }
