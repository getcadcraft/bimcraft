/* SPDX-License-Identifier: Apache-2.0 */
/**
 * host.js — the Weather files add-on's adapter for BimCraft (copied from tools/weather/src/weather/hosts/bimcraft.js by tools/weather/sync.mjs).
 * 0.11 WX.5. Where the model stands = IfcSite's latitude and longitude (ifc-geo.js readGeoref; a map-projected file gives no latitude here, so
 * the person types the place). Two actions: the station's design figures into Heating and cooling loads (energy-bim-ui.js setEnergyInputs:
 * winter outside temperature = the 99.6 % figure, summer = the 0.4 % figure, degree-days at 18.3 °C, ground = the station's ground figure), and
 * the hourly year to the EnergyPlus check (the pane reads globalThis.ccBimcraftWeatherEpw).
 */
import { readGeoref } from '../../ifc-geo.js';
import { setEnergyInputs } from '../../energy-bim-ui.js';

export function makeHost(api) {
  const t = api.t;
  let handed = null;
  return {
    id: 'bimcraft',
    async site() {
      if (!api.model.current()) return null;
      const g = await api.model.read((w) => readGeoref(w.api, w.mid));
      return g && g.kind === 'site' ? { lat: g.lat, lon: g.lon, elev: g.elev } : null;
    },
    actions: [
      { id: 'loads', label: t('wx.bim.loads'), run({ station, set, summary }) {
        const from = t('wx.bim.from', { station: station.name, set: set ? set.name : t('wx.bim.ownfile'), how: t('wx.src.short.' + summary.heat.source) });
        const took = setEnergyInputs({ te: summary.heat.t996, teSummer: summary.cool.t004, dd: summary.hdd, tg: summary.ground.t }, from);
        if (!took.length) throw new Error(t('wx.bim.none'));
        return t('wx.bim.loads.done', { te: summary.heat.t996.toFixed(1), ts: summary.cool.t004.toFixed(1), dd: summary.hdd });
      } },
      { id: 'year', label: t('wx.bim.year'), needsYear: true, run({ station, year }) {
        handed = { text: year, name: String(station.file).replace(/\.gz$/, '') };
        globalThis.ccBimcraftWeatherEpw = handed;
        globalThis.dispatchEvent(new Event('cc-bimcraft-weather-epw'));
        return t('wx.bim.year.done', { name: handed.name });
      } },
    ],
    off() { if (handed && globalThis.ccBimcraftWeatherEpw === handed) delete globalThis.ccBimcraftWeatherEpw; },
  };
}
