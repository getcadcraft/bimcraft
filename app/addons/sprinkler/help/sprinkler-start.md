---
title: Fire sprinklers: getting started
summary: Lay out sprinkler heads in a room by hazard class, draw the pipe that feeds them, and run the density and area hydraulic calculation against a water-supply test.
section: start
order: 1
keywords: sprinkler, sprinklers, fire protection, hazard class, density, design area, hydraulic calculation, hazen-williams, k-factor, hose allowance, water supply, add-on
---

## What you'll do

1. Switch the add-on on in {{ui:Settings}} › {{ui:Add-ons}}.
2. Open the **Sprinklers** tab. Choose the level, type the room's corners (millimetres, one per line) and pick the hazard class.
3. Click {{ui:Lay out heads}}: heads go on a grid as far apart as the class allows, so the head count is the least that works. A cross main feeds a branch line to each side of every row.
4. Type the water-supply test (static pressure, residual pressure and the flow it was measured at) and click {{ui:Calculate}}.
5. {{ui:Place in the model}} writes the heads (fire suppression terminals) and the steel pipe runs, sized by the calculation.

## The calculation

The most remote design area is found by trying several: each head in it discharges **K √P**, friction is Hazen–Williams, fittings are equivalent lengths in pipe diameters, and the lowest source pressure that gives every operating head its minimum is kept. The hose allowance is added and the total is compared with the supply curve.

## What is yours to set

The design density, design area, spacing, coverage and hose allowance are **your table**; the defaults are the commonly quoted figures, labelled for professional review. Check them against the standard in force. This is a design aid and not an approval.
