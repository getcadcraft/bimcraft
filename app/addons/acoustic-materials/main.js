/* SPDX-License-Identifier: Apache-2.0 */
/**
 * main.js — Acoustic materials add-on for BimCraft. Adds the BRAS absorption/scattering sets (materials.json, CC BY-SA 4.0, see
 * DATA-SOURCES.md) to the acoustic material list in acoustics.js (MATERIALS), so Rooms › Acoustics, the model reader and the pickers see them.
 * Each entry carries basis (measured|estimated), origin and source; the picker label says which. Off until switched on (Settings › Add-ons).
 */
const added = [];

export async function activate(api) {
  const [{ MATERIALS }, { catalog }, data] = await Promise.all([
    import('../../acoustics.js'),
    import('../../i18n.js'),
    fetch(new URL('./materials.json', import.meta.url)).then((r) => r.json()),
  ]);
  for (const [key, m] of Object.entries(data.materials)) {
    if (MATERIALS[key]) continue;
    MATERIALS[key] = { name: `${m.name} [${m.basis}]`, kind: m.kind, alpha: m.alpha, scattering: m.scattering, basis: m.basis, origin: m.origin, source: data.source.name, license: data.source.license };
    catalog().strings['ac.mat.' + key] = MATERIALS[key].name;   // the pickers label a finish by t('ac.mat.' + key)
    added.push(key);
  }
  return { count: added.length, source: data.source };
}

export async function deactivate() {
  const [{ MATERIALS }, { catalog }] = await Promise.all([import('../../acoustics.js'), import('../../i18n.js')]);
  for (const k of added.splice(0)) { delete MATERIALS[k]; delete catalog().strings['ac.mat.' + k]; }
}
