---
title: Points for setting out, and as-built checks
summary: Number the places a crew sets out from the model — column centres, wall ends, anchor bolts, sleeves, any element you pick — write them for a total station, then read the crew's as-built points back and see what is out.
section: tasks
order: 61
keywords: layout points, setting out, set out, stake out, staking, total station, survey, point file, csv, txt, pnezd, penzd, xyz, northing, easting, elevation, as built, as-built, check, tolerance, deviation, anchor bolts, column centres, wall ends, sleeves, survey coordinates, map conversion
---

The {{ui:Points}} tab on the right makes the points a crew sets out on site from the open model, and checks the points they measure afterwards.

## Make the points

1. Open an IFC model and the {{ui:Points}} tab.
2. Tick what to set out: **column centres** (the foot of each column's centre line), **wall ends** (both ends of each wall's axis, at its base), **anchor bolts**, **sleeves** (elements whose name or type says sleeve), and the **picked elements** (each at its placement point — pick them in the view first).
3. Choose the first number and a prefix, the coordinates, the units, the columns and the file:
   - **Model**: the file's own coordinates. **Survey grid**: the map grid of the model's georeference (shown only when the IFC has a map conversion), in metres or the unit you choose.
   - Columns **PNEZD** (point, northing, easting, elevation, description), **PENZD** or **XYZ**; **CSV** (commas) or **TXT** (tabs).
4. Press {{ui:Make points}}: the list shows them and the view marks them in blue. {{ui:Download the points}} writes the file.

Points come in a fixed order — by kind, then in rows across the plan — so making them again from the same model gives the same numbers. The file is the one CivilCraft opens and CadCraft's EXPORTPOINTS writes: one point per line, three decimals, a description in quotes when it holds a comma.

## Check the as-built points

When the crew sends back what they measured, choose a **tolerance** in millimetres and how to pair the points — by **point number** (they kept your numbers) or the **nearest shot** — and press {{ui:Read as-built points…}}. Read the file in the same units and coordinates you wrote.

Each design point is then **within** the tolerance, **outside** it, **not measured**, and any shot nobody asked for is **extra**. The table gives the differences in the unit you pick in the toolbar, feet shown as decimal inches (as built minus design: east, north, height, and the distance in plan); the view marks each point green or red with a line to the shot, and grey when it was not measured. {{ui:Report (CSV)}} writes the whole comparison.

Nothing here changes the model. Not built yet: setting out from slab edges, grid intersections or openings made for you, and sending points to an instrument directly — use the file.
