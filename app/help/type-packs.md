---
title: Type packs: share wall types as open files
summary: Save wall types with their layers, materials, tags and classification codes, and families, as one open file (plain JSON or IFC), and add them to another project. Wall types of an IFC file from another program can be read too.
section: tasks
order: 19
keywords: type pack, types, wall type, share, export, import, library, open format, json, ifc, IfcWallType, IfcMaterialLayerSet, IfcProjectLibrary, materials, layers, template, office standard, families
---

## What you'll do

Carry your wall types from one project to another, or hand them to someone who works in another program. A type pack holds each wall type with its layers, thicknesses, materials, core, cavities, layer priority, level of development, takeoff data and classification codes, and any families you add. It is an open file: plain JSON text that anyone can read, or an IFC file. Nothing in it is locked to a firm, a country or an account.

## Save types from a project

1. Open **Data** on the model bar and choose {{ui:Type packs}}.
2. Under {{ui:Save types from this project}}, tick the wall types to put in. The project's own types are ticked; a starter type can be added and goes in as a copy. Tick families if you want them in.
3. Type a {{ui:Pack name}}.
4. {{ui:Save as a pack (.json)}} downloads a `.cctypes.json` file. {{ui:Save as IFC (.ifc)}} downloads an IFC file that holds only types: each wall type as an IfcWallType with its material layer set, materials and classification, for any BIM program.

## Add types to a project

1. In the same dialog, choose {{ui:Open a pack or an IFC file…}} and pick a `.json` pack or an `.ifc` file.
2. The dialog lists what the file holds: each wall type with its thickness, number of layers and codes, the materials and the families.
3. Choose what happens to {{ui:A type this project already has}}: **Keep the project's**, **Add the pack's as a copy** (it gets a new name ending in "(2)"), or **Replace it (only when no wall uses it)**.
4. {{ui:Add to the project}}. The dialog lists what was added, copied, replaced or kept. It is one undo step.

The new types are in the Wall tool's type list at once.

## Floor, roof and ceiling types

The list of types to save also holds the project's floor, roof and ceiling types and their starters (marked Floor, Roof, Ceiling). A pack can carry all four kinds; each type names its IFC class (IfcWallType, IfcSlabType, IfcCoveringType). A floor, roof or ceiling type that elements use is not replaced from a pack: change it in the type editor.

## One type as a Library item

Tick exactly one type and choose **Save as a Library item…**. It saves a `.cctype.json` file: a Library item of the Types kind that holds that one type (its layers, materials, LOD and classification codes). Upload it in the Library to share it. **Open a pack or an IFC file** reads such an item too and adds its type to the project like a pack.

## Good to know

- An IFC file from another program can be opened here too. Each of its wall types that has material layers is read: the name, the layers' materials and thicknesses and any cavity are the file's own. Which layers are the core and what each layer does (finish, structure, insulation) are guessed, the type is marked **(guessed)**, and you should check it in the wall type editor. A wall type with no layers is left out and named.
- A material the project already has is kept as it is. A new material whose name is taken gets "(pack)" after its name.
- A type that walls use is never replaced from a pack. Change it in the wall type editor, which moves its walls properly.
- A code set on one wall does not travel: it belongs to that wall. A code set on the type does.
- A file with a field the format does not have, a layer whose material is missing, or anything that is not plain text is refused, and the message says where and why.
- Not built: floor, roof and ceiling types (they have no types in this version: each has its own thickness), door and window types other than families, and hatches or colours from another program's file.
