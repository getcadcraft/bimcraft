---
title: Bring your own objects and family files into the Library
summary: Read family files (.rfa) and IFC, DWG, DXF, glTF or OBJ files in the Library tab, place them like any library item, and keep them in My objects, a private list only you can see.
section: tasks
order: 62
keywords: rfa, family, families, family library, own objects, my objects, private objects, private library, import objects, manufacturer content, bim objects, ifc object, gltf, obj, dwg block, keep, switch, migrate
---

## What you'll do

Bring objects you already have into BimCraft: a family library from Revit, a manufacturer's IFC or DWG download, a mesh from another modeler. You read the file in the {{ui:Library}} tab, place the object in your model as a proper IFC element, and, if you want it again later, keep it in {{ui:My objects}}.

## Steps

1. Open an IFC model, or start a new building.
2. Click the {{ui:Library}} tab beside {{ui:Properties}}.
3. Click {{ui:Files…}}, then {{ui:Choose a file…}}. Pick one file or several at once: `.rfa`, `.ifc`, `.dwg`, `.dxf`, `.glb`, `.gltf`, `.obj` or `.csv`. Or click {{ui:Choose a folder…}} to read a whole folder and the folders inside it (up to 200 files in one go).
4. Click a card to see what was read: the plan preview, the name, maker and model, the sizes and the notes.
5. Click {{ui:Place in plan}} or {{ui:Place in model}} to place it.
6. To use it again in other projects, click {{ui:Keep in my objects}}. With several files read, {{ui:Keep all in my objects}} keeps them in one go.
7. Later, click {{ui:My objects}} in the Library tab to find them. They are placed, swapped and updated like any library item.

The files are read in this tab. Nothing is uploaded until you choose {{ui:Keep in my objects}}.

## What is read from each kind of file

| File | What you get |
|---|---|
| IFC | Each element type as an object with its real 3D shape, IFC class and property sets |
| glTF, GLB, OBJ | One object with its real 3D shape as a mesh. Set the units and which way is up first. |
| DWG, DXF | Each block as an object with its plan drawing and attributes |
| Family file (`.rfa`) | The family's name, category, maker, model, parameters and its types. **Not its 3D shape:** a box of the family's Width, Depth and Height stands in. |
| CSV | One object per row: name, sizes and data, drawn as a box |

## Family files and their 3D shape

The 3D shape inside an `.rfa` file is stored in an undocumented format, so BimCraft reads the family's data and does not guess at its geometry. The card says so: "Geometry not read from this family; a box stands in."

To bring a family in with its real shape, export it from the program that made it (Revit):

1. Open the family, or a project with the family placed in it.
2. Choose **File > Export > IFC**. See [the export settings that open best here](topic:rvt-to-ifc).
3. In BimCraft, read the `.ifc` file with {{ui:Files…}}. Each family type arrives as its own object, with its shape and property sets.

Many manufacturers offer an IFC or DWG download beside the family file. Those read directly.

## Family types

A family with several types arrives as one item with a {{ui:Variant}} choice, one variant per type. Each variant has the values that differ between the types, and its own box when the type has a Width and a Depth. A family with one type is a plain item filled with that type's values.

Some families keep their types in a type catalog: a `.txt` file with the same name beside the family file. Pick both together, or pick the folder, and the catalog's rows become the variants.

## A family's data on a real shape

If a folder holds a family file and an IFC, glTF or OBJ file with the same name (`Chair.rfa` and `Chair.ifc`), pick both together or pick the folder. BimCraft makes one item: the family file gives the name, maker, model, parameters and types, and the other file gives the real 3D shape. The notes say which file the shape came from. One shape is used for every type.

When a family file has a picture saved in it, the item's details show that picture under the plan drawing. The picture is shown there only; it is not kept with the item.

## My objects

{{ui:My objects}} is your own private list in the Library. Only you can see what is in it: it is not in the public library, not in search, and not shown to your team. It follows your account, so the same objects are there on another computer once you sign in to the library.

- You need to be signed in to the library to keep an object. See [sign in to the library](topic:library-credits).
- Keeping an object sends that one object to your account. Until then it stays on your computer.
- {{ui:Remove from my objects}} takes an object out of the list. Copies already placed in drawings stay.
- To share an object with everyone, upload it to the public library instead, under a license you choose.

:::note
My objects is being tested and may not be open for your account yet. If the source is missing, or it says "My objects is not open for this account yet", you can still read and place your own files with {{ui:Files…}}; they are saved inside your model.
:::

## Common mistakes

- **Expecting the family's real shape from an `.rfa`.** Only its data is read. Export IFC for the shape.
- **Two items where you expected one.** A family and its shape file are joined only when their names match exactly, apart from the ending, and they sit in the same folder.
- **A mesh arrives a thousand times too big or lying on its side.** Set {{ui:Units of the file}} and {{ui:Up axis of a mesh}} under {{ui:Files…}} before choosing the file.
- **"No family data" on a file.** It is a project (`.rvt` saved with another ending) or a family template, not a family. See [Read a project or family file](topic:read-rvt-file).
- **Keeping content you may not store.** Some paid libraries do not allow copies outside their own service. Check the terms of content you did not make.
