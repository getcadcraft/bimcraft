---
title: Documents from the model
summary: Write a specification or a description once as a template, with fields for quantities, properties and tags, and fill it from the open IFC as a PDF or a Word document.
section: tasks
order: 35
keywords: document, documents, specification, spec, description, template, markdown, report, word, docx, pdf, quantities, schedule, trade, door schedule, finishes, documentcad
---

## What you'll do

A template is a text in Markdown with fields in double braces. BimCraft fills the fields from the open model (counts, quantities by type, properties, your [tags](topic:tags-and-schedules)) and saves the result as a PDF, a Word document (.docx) or Markdown.

## Steps

1. Open an IFC model.
2. In the left panel, under {{ui:Quantities}}, open {{ui:Documents from the model}}.
3. Pick a template: {{ui:Doors and hardware}} or {{ui:Walls, linings and finishes}}, or {{ui:Load a template (.md)…}} for your own.
4. If the template reads tags the model does not define yet, click {{ui:Add this template’s tags}}, then tag elements under {{ui:Tags}}.
5. Change the text as you like and click {{ui:Show the document}}.
6. Click {{ui:PDF}} (pick A4 or Letter first) or {{ui:Word (.docx)}}.

## What you should see

- The filled document under the buttons, with its tables.
- A list of warnings when a field cannot be read (a tag that is not defined, a property the model does not have, a block that is never closed); such a field prints as `[?…]`.
- PDF pages with the document's title and "Page 1 of 3" at the foot of each page; long tables carry over with their header row.

## Fields

| Field | Gives |
|---|---|
| `{{project}}`, `{{project description}}`, `{{file}}`, `{{date}}` | the project's name and description, the file's name, today |
| `{{count IfcDoor}}` | how many doors |
| `{{sum IfcWall NetSideArea}}` | a total, with its unit |
| `{{calc [sum IfcWall NetSideArea] * 1.1 round 1 unit m²}}` | arithmetic (`+ - * /` and brackets) over terms in square brackets: `[sum …]`, `[count …]`, and inside an each `[qty Width]`. `round n` sets the decimals, `unit` adds a unit. Something it cannot read, or a division by zero, prints `[?…]` and warns |
| `{{qty IfcWall NetSideArea by Type}}` | a table: one row per type with its count and total, and a total row |
| `{{table IfcDoor cols Mark, Type, Width, tag:Fire rating}}` | a table, one row per element |
| `{{tag Finish}}` | in a loop, the element's value; elsewhere every value used (Oak, Paint) |
| `{{tags}}` | the tag definitions as a table |
| `{{#each IfcDoor}} … {{else}} … {{/each}}` | the text once per element; the part after `{{else}}` when there are none |
| `{{#group IfcWall by Type}} … {{/group}}` | the text once per type, with `{{value}}`, `{{count}}`, `{{sum Length}}` and a plain `{{#each}}` inside |

Inside `{{#each}}`: `{{name}}`, `{{type}}`, `{{storey}}`, `{{class}}`, `{{material}}`, `{{mark}}` (the IFC Tag), `{{guid}}`, `{{n}}` (1, 2, 3 …), `{{prop Pset_DoorCommon.FireRating}}`, `{{qty Width}}` (the element's own, with its unit).

A class may be several (`IfcDoor|IfcWindow`) or every element (`*`). Narrow any of them with `where`: `{{#each IfcDoor where Fire rating >= 60}}`, `{{count IfcWall where Wall finish hasnot}}`. The tests are `=`, `!=`, `~` (contains), `>`, `<`, `>=`, `<=`, `has` and `hasnot`; join several with `and`; put a value with spaces in "quotes". `sort Name` orders a loop.

## Good to know

- A field names a built-in (Name, Type, Storey, Class, Material, Mark), a tag (`tag:Fire rating`, or its name), a property (`Pset_WallCommon.FireRating`) or just a property's name (`NetSideArea`, `Width`): a bare name reads each element's own set, quantity sets first, so `Width` on a door is the door's width, not a wall's thickness. Inside `where`, a bare name reads the set most of the chosen elements have.
- Quantities are what the file's quantity sets say (BimCraft writes them for what it draws); units come from the file's unit settings.
- The field words (`count`, `sum`, `qty`, `by`, `cols`, `where`, `each`, `group` …) stay in English in every language. The example templates are in English.
- Text from the model never becomes formatting: a name with a `*` or `|` in it prints as it is.
- Keep a template you changed with {{ui:Keep in this browser}} (only this browser has it) or {{ui:Download the template}}.
- PDF text uses the standard PDF fonts: a character outside Western European text prints as "?" and the status line says how many.
- Templates per trade live in the Library (kind Document template). In Documents from the model, choose From the Library…, pick one, and its text and the tags it reads come in; edit it as you like. Publishing your own template to the Library is the same upload as any other item. Not built yet: calculations beyond counts and totals.
