---
title: Add up quantities, list elements and schedule spaces
summary: Count elements and add up their lengths, areas, volumes or any number property, grouped by any property; list one row per element; or schedule the spaces with their areas and volumes. Each downloads as a CSV.
section: tasks
order: 33
keywords: quantity, quantities, takeoff, totals, sum, schedule, bill of quantities, boq, qto, csv, group by, count, length, area, volume, spaces, rooms, room schedule, area schedule, element list
---

## What you'll do

Get totals out of a model: wall lengths per storey, door counts per type, slab volume per material, the cost of every zone.

## Steps

1. Open an IFC model.
2. Open {{ui:Quantity totals}} in the left panel.
3. In {{ui:Count}}, choose {{ui:Every element}} or only the picked ones.
4. Under {{ui:Group by}}, choose a property, such as {{ui:Class}}. Click {{ui:Add a group}} to split further, up to three, for example by {{ui:Storey}}.
5. Under {{ui:Add up}}, tick the numbers to total. The model's quantity sets are ticked to start with.
6. Click {{ui:Download CSV}} to open the table in a spreadsheet.

## What you should see

- A row per group with how many elements it has and each total, and a total row.
- Elements without a value are counted but add nothing. When that happens, the CSV adds a "left out" column next to the total so you can see how many.
- Numbers are in the file's own units, as the file stores them, often millimetres for lengths.

## One row per element, or the spaces

Change {{ui:Show}}:

- **One row per element**: each element on its own row, with the properties under {{ui:Columns}} and the numbers under {{ui:Add up}}. The CSV starts with each element's GlobalId. Click the first value in a row to pick that element.
- **Spaces**: each room with its number, name, storey, area and volume, and their totals. Areas and volumes come from the space's quantities as the file states them. When the file has none, they are measured from the space's shape in m² and m³ and shown in italics; the CSV says which is which.

## Next

- [Find elements by class, name or property](topic:find)
- [Color elements by a property](topic:color-by-property)

## Infrastructure (IFC 4.3)

Pick **Infrastructure (IFC 4.3)** in the view list to see roads, railways, bridges and marine works totalled per class and type, with the length, area and volume the file itself states. A quantity the file does not state is left blank, never worked out. **Send infrastructure quantities to TakeoffCraft** saves a `.quantities.json` file that TakeoffCraft opens as typed quantities.
