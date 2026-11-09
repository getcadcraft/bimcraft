---
title: Open and export IFC5 alpha (IFCX files)
summary: A lab option for the IFC5 alpha file format (.ifcx): open a file with its layers, see what the reading could not check, and export the open models. The format is still changing, so read first.
section: tasks
order: 142
keywords: ifc5, ifcx, alpha, buildingsmart, json, layers, schema, lab, quantities, qto, export, import
---

IFC5 alpha (file ending {{ui:.ifcx}}) is the file format buildingSMART is still designing. It is not final: the files, and our reading of them, can change. That is why this is a lab option and why reading comes first.

## Turn it on

1. Choose {{ui:Settings}}, then the {{ui:IFC5 alpha (IFCX)}} section of the BimCraft tab.
2. Tick {{ui:IFC5 alpha (IFCX) - the format is still changing; read first}}.

It is off by default. While it is off, an .ifcx file is refused with a sentence that points here. {{ui:Open IFC5 alpha (.ifcx)…}} and the {{ui:IFC5 alpha}} export button appear when it is on.

## Open

- Choose a .ifcx file with {{ui:Open a file or folder}} (it replaces the open model, after the usual question about edits), or
- choose {{ui:Open IFC5 alpha (.ifcx)…}} and pick several files together: the file, its layers, and the schema files it imports. With a model already open, the file is **added beside it**; the x in the model list removes it again, which is the undo.

An IFCX file lists nodes (a path, its children, what it inherits, its attributes). Several files can describe the same node: a later file (a layer) overrides the attributes of an earlier one, and a null child removes a child. BimCraft composes them, then draws the result as a small IFC4 model: project, site, building, storeys and elements with names, classes, properties, quantities, colours and meshes.

Nothing is fetched from the network. The schema files a file imports (for example `ifc@v5a.ifcx`) are used only if you picked them with the file; otherwise the report says so and the attributes are read without a type check.

### The report

After opening, a report lists what the reading found: data that does not match its schema, schema files not given, attributes that have no IFC meaning here. Attributes without a mapping are **kept** in the model, not dropped, and are written back on export.

## What becomes what

| In the IFCX file | In BimCraft |
|---|---|
| A node with an IFC class (project, site, building, storey, wall …) | The matching IFC4 element; a class this reading does not know becomes a building element proxy |
| The name the node has under its parent | The element name |
| Attributes with a quantity kind (Length, Area, Volume, Mass …) | An IFC4 quantity set called `Qto_IFCX` (IFC4 quantities stay IFC4 `Qto_*` sets) |
| Other property attributes | A property set called `Pset_IFCX` |
| Mesh and transform attributes | The element's triangles and placement; invisible meshes are not drawn |
| Colour, opacity, material, classification | Surface style, material and classification of the element |

Units are taken as metres, with Z up: the alpha says units will be documented later.

## Export

Choose {{ui:IFC5 alpha}} on the toolbar, read the note, then {{ui:Export .ifcx}}. The file has our own header (author CadCraft, version ifcx_alpha) and says in itself that it is the alpha format. Each model is written in its own file coordinates, in metres, with names, classes, property sets, quantities (as attributes with their kind), colours and triangles. Layers and inheritance are written flattened. Check the file in the program you send it to.

## Limits

- Curved geometry (curves, surfaces) is not read: only triangle meshes.
- Doors and windows nested in a wall are placed on the storey; the wall they came from is not linked.
- IFC4 `Qto_*` set names are kept as attribute groups of our own (`cadcraft::qto::…`); the standard alpha schema has only a few quantity names.
- The format may change under us; a file made today may not read tomorrow.
