---
title: Neighbouring buildings and the parcel from CivilCraft
summary: Take the buildings and parcel that CivilCraft's Address to site found round an address as suggestions, and add the ones you tick.
section: tasks
order: 30
keywords: site, address, parcel, neighbours, context, civilcraft, ccsite, buildings, site outline, suggest
---

## What it does

In CivilCraft, Surface › More › Address to site finds the buildings, parcel, zoning, flood zone and soil round an address from open data. Its "Send to BimCraft as suggestions" button (or "Save the site as a file", then open the `.ccsite.json` here) brings them to BimCraft. Nothing is added until you say so.

## How to use it

1. Start or open a model. The address point sits at the origin of the level you are on.
2. A box lists each neighbouring building and the parcel with a checkbox. Untick what you do not want.
3. Buildings whose height the source did not give use the height typed at the top of the box. A building that gave only its number of levels counts 3 m a level, and the box says so.
4. Press "Add the ticked ones". The buildings become walls round their footprints, as tall as listed, in one undo step. The parcel becomes the site outline, as a second undo step.

Zoning, flood zone and soil are listed for information only; they are not drawn.

## What to know

- The outlines are as good as the open data: OpenStreetMap and county parcel layers differ a lot from place to place. Check what matters against a survey.
- Positions are metres east and north of the address point on a flat approximation, good to a few metres within a few kilometres.
- The data carry their sources' licences (OpenStreetMap is ODbL); the box shows the credit line.
