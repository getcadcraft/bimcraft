---
title: Solar PV arrays, shading and yield
summary: Fit solar arrays on roofs or the ground, shade them from the model, estimate yearly energy, size strings and make the one-line diagram data. All inputs are shown and the starter module and losses are generic.
section: tasks
order: 40
keywords: solar, pv, photovoltaic, array, module, roof, shading, yield, kwh, kwp, string sizing, inverter, one-line, single line, tilt, azimuth, row spacing
---

## What you'll do

Open the **Solar PV** pane. Pick a roof face (its tilt and facing are read from the model) or lay a ground array with a tilt and facing; the modules are fitted inside with setbacks and counted, giving the DC power in kWp. Placing the array writes it into the model as solar devices, in one undo step.

## Shading, yield and strings

- **Shading** casts a ray from every module toward the sun for typical days of each month against the model's own geometry, so neighbouring buildings, parapets and the rows in front count. Only the direct sunlight is reduced, and a part-shaded array loses power in proportion.
- **Yield** gives kWh by month and year, kWh per kWp, and the performance ratio. The sun comes from your own monthly totals on a horizontal surface if you type them. Without them the pane uses a clear-sky upper bound, and says so. **Fetch the climate from NASA POWER** with a button on the Yield tab: it sends only the site's latitude and longitude, once, and keeps the answer on this computer (checked from the browser on 2026-10-30). PVGIS does not let a web page read its answer, so the tab gives a link that opens PVGIS's monthly data for the site in a new tab; paste what it shows in the box and the twelve months fill in.
- **Strings** checks modules per string against the inverter's voltage window at the coldest and hottest day, and the parallel strings against its current.
- **One-line** makes the diagram data (array, combiner, disconnect, inverter, panel, utility) with wire and fuse sizes from the factors you type. It is data and an SVG; the Electrical add-on in CadCraft can place it as symbols.

The module, inverter, losses and wire factors that come with BimCraft are generic examples, labelled in every result. Type the maker's data and the code values you design to, and have the design reviewed by the person who answers for it.
