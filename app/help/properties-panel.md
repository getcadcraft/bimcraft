---
title: Properties panel fields
summary: What every field in the Properties panel and the File, Drawing and Folder panels means, and which ones you can change.
section: reference
order: 30
keywords: properties, fields, attributes, globalid, guid, copy, copy value, copy all, csv, clipboard, serial number, tag, object type, line, express id, property set, pset, quantities, schema, file panel
---

## An IFC element

The top of the {{ui:Properties}} panel shows the element's kind without the "Ifc" prefix (for example "Door", "WallStandardCase", "FurnishingElement") and its name, or "Unnamed".

| Field | Meaning | Editable |
|---|---|---|
| Name | The element's name, often the family and type name from the exporter | Yes |
| Type | The name of the element's type, when it has one | No |
| Object type | A free-text type description some exporters fill | Yes |
| Tag | The element's tag or mark; many exporters write the element ID here | Yes |
| Description | Free text | Yes |
| GlobalId | The element's permanent 22-character IFC identifier, the same in every export of the same element | No |
| Line | The element's line number (`#1234`) in this IFC file. It changes between exports | No |

Below come the **property sets**, sorted by name:

- Each set opens and closes when you click its name. The first three are open.
- A set marked "(type)" belongs to the element's type: "Type property: a change here applies to every element of this type."
- Quantity sets (lengths, areas, volumes, counts, weights) are read-only.
- Lists and enumerated values are shown, read-only.
- Yes/No values show as **Yes** or **No**.
- Numbers are rounded to four decimals for display. Lengths (a length property or a quantity's length) show in the {{ui:Units}} chosen on the toolbar, with the unit beside them, and you can type a new one in that unit or with another unit mark (2.4 m, 8'-0"): BimCraft writes the file's own number back. Other numbers show as the file has them.
- An empty value shows as *empty*. An edited value is bold with a blue bar beside it.

## Copy a value

Every value in {{ui:Properties}} has a small copy button beside it: click it to put that value on the clipboard exactly as shown, for example a GlobalId, a serial number or any property set value. Copying never starts an edit.

At the top, {{ui:Copy all}} copies every value of the element as text, set by set, and {{ui:Copy as CSV}} copies them as rows of group, property and value to paste into a spreadsheet; empty values are kept so every field has a row. This works the same for an element of another open model; when more than one model is open, the CSV starts with a Model column naming its file.

## The File panel (IFC)

| Field | Meaning |
|---|---|
| File, Size | The file you opened |
| Schema | The IFC version, such as IFC2X3 or IFC4 |
| Project | The project's name and long name |
| Phase | The project phase, if the exporter wrote one |
| Exported from | The exporting program, from the file header |
| Author | The author in the file header |
| Exported | The date and time in the file header |
| Elements | How many elements with a shape were drawn |
| Triangles | How many triangles their shapes make; a measure of how heavy the model is |

## The File panel (project and family files)

| Field | Meaning |
|---|---|
| Kind | Project, Project template, Family or Family template |
| Saved in | The release that last saved the file |
| Build | The exact build of that release |
| Read | How much of the file BimCraft read, out of its size |

## The Drawing panel (DWG and DXF)

| Field | Meaning |
|---|---|
| Format | The release the drawing was saved as, with its format code, such as AC1032 |
| Units | The drawing's insertion units, when set |
| Entities | How many objects were read |
| Layers | How many layers |
| Sheets | How many sheets (layouts), or None |
| Linked drawings | How many of its linked drawings were found and loaded |
| Equipment | How many tagged equipment items are on sheets |

## The Folder panel

| Field | Meaning |
|---|---|
| Folder, Files, Size | The folder you opened, how many files it holds and their total size |
| Models | Project and family files, each with its backups counted once |
| CAD drawings, IFC models | How many of each |
| Problems | How many model copies are incomplete or unreadable, or None |
