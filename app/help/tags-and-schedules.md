---
title: Tag elements and schedule by tag
summary: Define your own tags (a name, a type, the values allowed, which classes), tag many elements at once, and make schedules whose columns, filters and groups read the tags. The tags are kept in the IFC.
section: tasks
order: 34
keywords: tags, tag, tagging, custom properties, parameters, shared parameters, property set, pset, schedule, filter, group by, finish, fire rating, bulk edit, csv
---

## What you'll do

A tag is a property of your own, such as *Finish* or *Fire rating*. You define it once for the project, set it on many elements at once, and every schedule in BimCraft can read it: the tag schedule here, {{ui:Quantities}}, Find, Color by property and [Documents from the model](topic:documents-from-the-model).

## Steps

1. Open an IFC model, or start a new building.
2. In the left panel, under {{ui:Quantities}}, open {{ui:Tags}}.
3. Click {{ui:Add a tag}}. Give it a name, pick its type, and if you like list the allowed values (with commas) and the classes it is for (`IfcDoor`, `IfcWall` …). Click {{ui:Add the tag}}.
4. Select the elements in the model (Find helps: pick every door at once).
5. Under {{ui:Tag the selection}}, choose or type a value for each tag you want to set, leave the others as they are, and click {{ui:Apply to … selected elements}}.
6. Under {{ui:Tag schedule}}, tick the columns, add filters, pick {{ui:Group by}}, then {{ui:Download CSV}}.

## What you should see

- A step in the change list for each definition saved and each tagging; {{ui:Undo}} takes it back.
- Elements of a class a tag is not for are left out of that tag, and the status line says how many.
- The tag schedule lists one row per element, grouped by the field you picked; click a row's first cell to pick that element.
- {{ui:Quantities}} lists the tags under `CadCraft_Tags`, so you can total areas or counts by a tag there.

## Types

The types are the same list as family parameters: Length (millimeters), Angle (degrees), Number, Whole number, Yes / No, Pen (1–16), Text, Material and Fill. A value that does not fit its type, or is not one of the allowed values, is refused with a message, and nothing changes.

## Good to know

- Everything is plain IFC, so other programs read the values: the definitions are in a property set `CadCraft_TagDefs` on the project, the values in a property set `CadCraft_Tags` on each element (one property per tag). Lengths are written in the file's length unit.
- `IfcWall` in a tag's classes also takes standard-case and elemented walls.
- Renaming a tag renames its values on every element in the same step. Removing a tag removes only its definition: values already set stay on the elements as plain properties. Clear them first (choose {{ui:Clear}}) to take them off.
- Tags in the CadCraft drafting app (block attributes) are not built yet.
