---
title: "Climate futures: 2050 and 2080 flood, heat and wildfire"
summary: Run the flood, the energy year and a wildfire screening again with future climate (scenarios SSP2-4.5 and SSP5-8.5, years 2050 and 2080) from a climate data pack, present beside future.
section: tasks
order: 63
keywords: climate, climate change, future, 2050, 2080, ssp, cmip6, scenario, sea level, flood, heat, weather file, epw, morph, energyplus, wildfire, bushfire, fire weather
---

The climate figures come from a **data pack**, not from the app. Switch on the {{ui:Climate futures}} add-on in Settings › Add-ons, or load a pack file of your own in the {{ui:Climate future}} block.

:::warning
The pack that comes with the add-on is a **sample**: three places (Denver, Miami, Johannesburg), one climate model, five years in each 20-year period. It is there to try the tools, **not for design**. The panel says so in bold while it is in use. A full pack (many models, all years, more places) is built with `tools/climate/build-pack.mjs` from NASA's NEX-GDDP-CMIP6 data.
:::

## Pick a future

In the left panel's {{ui:Hazard playback}}, choose a **Scenario** (SSP2-4.5, the middle of the road, or SSP5-8.5, high emissions) and a **Year** (2050 means 2041-2060, 2080 means 2071-2090; both against 1995-2014). The **Place** is the pack's place nearest to the model's site (IfcSite latitude and longitude), or the one you pick. Far from every place, the pack's global average changes are used and the panel says so.

## Flood, present beside future

With a scenario picked, set the **Flood type**: coastal (adds the sea-level rise), river or heavy rain (deeper by the change in the wettest day's rain), or both. Press Run: the flood plays as before, and a table shows the present and the future flood side by side (water level, rooms that get wet, the deepest water). The assumptions are listed under it:

- a coastal level rises by the whole sea-level rise; surge and waves are not changed;
- river flow rises one to one with the wettest-day rainfall, and depth follows flow to the power 0.6 (Manning's equation for a wide channel);
- the two parts are simply added.

## Heat: a future weather file

Choose the kind {{ui:Heat: future weather file}}, pick a present-day `.epw` weather file and press {{ui:Make the future weather file}}. The file is **morphed** month by month with the published shift and stretch method (Belcher, Hacker and Powell 2005): the month's mean warms by the pack's change, the hot afternoons by the change in the daily maximum and the cold nights by the change in the daily minimum; relative humidity moves by the pack's change and the dew point is worked out again. Pressure and wind stay as they were. The table compares the mean and hottest temperatures, the 0.4 % cooling and 99.6 % heating design temperatures, the hours at 30 °C and 35 °C and the degree-days.

{{ui:Save the future weather file}} saves it; {{ui:Use it in the energy check}} hands it to the EnergyPlus check (Energy tab). The future file is the same typical year, warmer: it does not add new heat waves.

## Energy year, present beside future

In the Energy tab's EnergyPlus check (an add-on of its own, with your own engine), pick a present weather file, then a scenario and a year in its {{ui:Climate future}} block, and press {{ui:Simulate a year: present and future}}: the year runs on the present file and on its morphed future, and the heating and cooling of each room are listed side by side.

## Wildfire exposure (screening only)

Choose the kind {{ui:Wildfire exposure (screening only)}}: the nearest vegetation, the slope up from it to the building and the distance to it. The result is a band from very low to extreme, present and future.

:::warning
**Screening only.** This is our own relative scale to tell whether a site needs a proper wildfire assessment, not a code rating or a bushfire attack level. It multiplies a weight for the vegetation, a slope factor (a fire roughly doubles its speed for every 10 degrees upslope, counted up to 20 degrees), a distance factor (10 m divided by the distance, at most 1) and the pack's change in the fire-weather index.
:::

## Where the numbers come from

- **Temperature, humidity, sunshine, rainfall, fire weather:** NASA NEX-GDDP-CMIP6, daily downscaled CMIP6 model output. Each model's output is under CC BY 4.0. The fire-weather change is the Canadian Fire Weather Index worked out day by day from the model's weather (with daily humidity in place of noon humidity).
- **Sea-level rise:** the IPCC AR6 global mean (not local; land rising or sinking is not in it), unless a pack carries local figures.
- The pack names its source, licence and date; the panel shows them.
