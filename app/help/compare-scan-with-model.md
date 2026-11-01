---
title: Compare a scan with the model and the 4D schedule
summary: Judge every element of the model against an open point cloud (built, partly, missing, not reached), see the percent built, colour the model by it, and with a 4D schedule loaded list what is behind or ahead on the 4D day.
section: tasks
order: 63
keywords: scan, point cloud, progress, percent complete, built, missing, behind schedule, ahead of schedule, 4D, site progress, deviation, as-built, laser scan, drone, compare
---

Open an IFC, open a point cloud beside it (see [Point clouds](topic:point-clouds)) and place it on the model. The {{ui:Compare the scan with the model}} section appears in the right panel while a cloud is open.

## What it does

Press {{ui:Compare}}. Each element of the model is judged by its surface, because that is what a scanner sees. The six faces of its box are cut into cells of about 20 cm; a cell counts when a scan point lies within your {{ui:Tolerance}} (50 mm to start) of the face. The best large face counts, so a wall scanned from one side is not penalised for its other side.

- **Built**: at least 40 % of the surface is seen.
- **Partly**: 10 % to 40 %.
- **Missing**: less than that, but the scan reaches the element (points within 1.5 m of it).
- **Not reached**: the scan never went there, so nothing is said about it.

For built and partly built elements it also gives the mean offset of the scan points from the model's surface and says whether the element is in place (within the tolerance), near (within three times) or off (further). It only sees offsets up to five times the tolerance: an element built further from its place than that reads as missing.

The summary gives the percent built among the elements the scan reaches, by count and by volume. Partly built elements are counted separately and are not added to the built ones.

## Against the 4D schedule

With a 4D schedule loaded (see [4D schedule](topic:4d-schedule)), the result also uses the day you have set on the 4D slider: elements due by that day that the scan does not show as built are **behind the schedule**; elements not yet due that are built are **ahead**. Behind-schedule elements are listed in {{ui:Problems}}, and the table can be filtered to them. Without a schedule nothing is said about behind or ahead.

## The table and the model

Click a row to select the element. {{ui:Colour the model}} paints elements green (built), amber (partly), red (missing) or grey (not reached); {{ui:Own colours}} puts them back. {{ui:Save CSV}} writes the table.

:::warning
This compares the box of each element with scan points within a tolerance. It is **not a survey, a quantity take-off or a basis for payment**. An element hidden against a scanned one (a wall behind a lining, a slab under a floor finish) shares its surface and can read as built; a curved or sloping element has a box larger than its body and can read as partly or missing. Look at the list before you act on it. Permit comments and progress notes are not part of this: they stay in the columns you keep them in.
:::

An assistant can run the same comparison with the {{ui:Compare the scan with the model}} tool; it changes nothing in the model.
