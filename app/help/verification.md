---
title: Mark elements as checked or field-verified
summary: An element read from a PDF or a scan is unverified until you check it. Mark elements as checked, or as field-verified (LOD 500) with who measured them, when and how, and hand over an as-built model that says which is which.
section: tasks
order: 176
keywords: unverified, verified, checked, field verified, as built, as-built, lod 500, close-out, handover, measured on site, tape, laser, scan, survey, existing building, alteration, mark as checked, verification, stage 7
---

## What you'll do

Keep track of what in the model somebody has actually looked at. An element has one of three marks, or none:

- **Unverified**: the program recognised it from a PDF, a scanned drawing, a traced drawing or a point cloud scan. Nobody has checked it yet.
- **Checked**: a person compared it with the drawing it came from.
- **Field-verified (LOD 500)**: a person measured it on site. Who, when and how are kept with it.
- **No mark**: drawn by a person. The model makes no claim about it.

## Steps

1. Pick one element or many (walls, doors, windows, rooms, any element).
2. In {{ui:Properties}}, open {{ui:Verification}}.
3. Type who checked or measured it. The date is today unless you change it.
4. Click {{ui:Mark as checked}}. For a site measurement choose how it was measured (tape measure, laser distance meter, scan, survey) and click {{ui:Mark as field-verified (LOD 500)}}.
5. {{ui:Mark as unverified}} and {{ui:Take the mark off}} go back. Each click is one step you can undo, for the whole pick.

To mark a pick quickly: {{ui:Tools}} › {{ui:Mark as checked}} (typed: `MARKCHECKED`) marks it as checked by you, today.

## What you should see

- In the plan, an unverified element has a dashed box and a "?"; a field-verified one has a tick. Untick {{ui:Show verification marks in the plan}} in the {{ui:Audit}} section to hide them.
- {{ui:Schedules}} › {{ui:Verification}} lists every marked element with its level, state, who, when, how and where it came from.
- The audit lists unverified elements, and counts a field-verified element as LOD 500. See [Audit the model](topic:audit-the-model).

## From a scan

When you compare a scan with the model, {{ui:Mark the matching elements as field-verified}} marks every element the scan saw as built within the tolerance, with the method "scan" and the tolerance in the note. See [Compare a scan with the model](topic:compare-scan-with-model).

:::warning
That comparison matches each element's box with scan points. It is not a survey. Use it for elements you have also looked at.
:::

## The as-built model and the handover package

{{ui:Build the handover package}} on the {{ui:Assets}} tab puts the as-built model in the zip, with:

- a statement on the project of how many elements are field-verified, checked, unverified and unmarked;
- `as-built/verified-elements.csv`: every element and room with its state, who, when and how;
- `as-built/as-built-drawings.pdf`: the drawing set as it is now;
- the drawing changelog, when the model has issued sets.

See [Assets and maintenance](topic:assets-and-maintenance).

## How it is kept in the IFC

Each marked element carries the property set `CadCraft_Verification`: State, By, On, Method, Source, Note, and LevelOfDevelopment (`LOD 500` while field-verified). They are plain text properties, so other programs list them, and Find, Color by property and tag schedules can use them. The as-built statement is the property set `CadCraft_AsBuilt` on the project. An element without the set was not measured on site.

## Next

- [Walls from a set of plans](topic:walls-from-plans)
- [Audit the model](topic:audit-the-model)
