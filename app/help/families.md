---
title: Families and their sizes
summary: Doors, windows and furniture come in families. Each size of a family is one type in the IFC file, so the type list stays short in BimCraft while other programs read plain types.
section: tasks
order: 37
keywords: family, families, type, types, size, sizes, door type, window type, furniture, table, shelf, cabinet, new size, duplicate, place family, family file, ccfamily, ifc library, project library, group, visibility, IfcDoorType, IfcWindowType, IfcGroup
---

## What a family is

A family is one kind of thing in several sizes: a single swing door that comes 32, 36 and 42 inches wide, or a table that comes long and short. In BimCraft you see the family once, with its sizes under it, instead of a long list of types.

IFC has no families. In the file each size is an ordinary type (a door type, a window type, a furniture type…), and the family is a group that lists its sizes. Other BIM programs read the types and the group as they are; BimCraft reads the family back from them.

## Where to find them

- The project browser's **Families** group lists the families in this model, with how many sizes each has and how many are placed. Below them are the **Starter families**: the doors and windows of the Door and Window tools, and a table, a shelf unit and a base cabinet.
- {{ui:Build}} › {{ui:Families…}} shows the same list in a window.
- Click a family to open it: its sizes, what each size's values are, and how many elements use each.

## Doors and windows

The Door and Window tools list the families of that kind, then a **size list** beside them. Pick a size, or type **W** and **H**: a width and height no size has yet becomes a new size of the family when you place the door. Doors of the same size share one type.

In {{ui:Properties}}, a picked door or window shows its **Family** and **Size**. Choose another size from the list, or type a new width or height. {{ui:Open the family}} opens the family it belongs to.

Each door's or window's frame follows its own wall's thickness, as before families. The size's type also keeps the door drawn in a 140 mm wall, for programs that read types.

## New size from this family

1. Open the family.
2. Under **New size from this family**, type its values (Width, Height and the family's other parameters) and, if you like, a name. Without a name it is named from its values.
3. Click {{ui:Make the size}}.

Two sizes cannot have the same values. **Rename** changes a size's name; **Remove** takes away a size nobody uses; **Select** picks the elements of that size.

## Place furniture

1. {{ui:Build}} › {{ui:Place family}}, or {{ui:Place}} in a family's window.
2. In the bar, choose the family and its size.
3. Click on the plan to place it on the level. Press {{key:R}} to turn it 90° before you click. {{key:Esc}} stops.

A placed piece's {{ui:Properties}} show its size, where it is and how far it is turned; {{key:Delete}} removes it. Every piece of one size shares that size's shape, so changing the family changes them all.

## Sizes from a table

{{ui:Sizes from a table…}} in a family's window reads a CSV file (comma, semicolon or tab). The first row names the columns: a parameter's name or label, and optionally `Name`. Lengths are millimetres unless you write a unit (`1.2 m`, `36 in`), Yes / No columns take yes, no, true, false, 1 or 0, and a parameter with no column keeps its default. Every row becomes a size, in one step you can undo; a size that is already there is skipped. One row that does not read, or that the family cannot draw, refuses the whole table and names its line. At most 200 rows and 1 MB. {{ui:Save the sizes as a table}} writes the same table back out.

## Set on each element

A parameter marked **Per element** in the editor (a Yes / No that adds a transom, a label, a material) is not part of a size: two doors of one size can differ. Pick the element and **Properties** shows these parameters; change one and that element is drawn again with its own shape (furniture and fixtures get a shape of their own, doors and windows are made again in their walls). Set them all back to their defaults and it goes back to its size's shape.

## Detail level

{{ui:Build}} › {{ui:Families…}} › **Detail level** sets, for every family in the model, what is saved in the solids and drawn in the plan symbols: **Fine** keeps everything, **Medium** and **Coarse** leave out the parts the editor marks as finer (smaller files, quicker views). **Automatic** saves everything and lets a sheet's view choose by its scale: 1:50 and larger fine, 1:100 medium, 1:200 and smaller coarse. One step you can undo.

## Duplicate a family

You do not have to start from nothing. {{ui:Duplicate}} copies a family with its parameters, solids and sizes under a new name. Change the copy in the editor; the original stays as it was.

## Family files

- {{ui:Save the family file}} saves a `.ccfamily.json`: the family's parameters, solids and sizes. Open it in another model with {{ui:Open a family file…}} in the Families group.
- {{ui:Save as IFC}} saves the family as a small IFC file: its sizes' types and its group, declared by an IFC project library. Other programs open it as a set of types; BimCraft opens it as the family again.

A family file opened here is read as data and checked before anything is written. A family whose key is already in the model comes in as a separate family. A family that holds others (see Families inside, in the editor help) brings them along: the file lists them, and the model keeps the ones it already has.

## Families in the Library

Open {{ui:Families…}} and choose {{ui:From the Library…}} to see the families that have been shared in the Library. {{ui:Add to this project}} reads one like a family file: BimCraft checks every field before it makes anything, the family comes in as a family of its own, and it opens in the editor. Adding it is one undo step. To share your own, use {{ui:Save all as a library}} and send the file to the Library (the Library's staff publish a family file with a command, and each family is its own item with its sizes). If the Library cannot be reached the list says so and nothing changes.

## Other programs' types

Types made by other programs show in the Families group too, grouped by a guess: by the part of their elements' names before the first colon, else by type names that differ only in their numbers. The family window says which guess it used. They are listed and you can select their elements, but they are not edited here: they have no family recipe.

:::note
The starter doors and windows are drawn exactly as they were before families. Files made before families open unchanged: their doors and windows show under their family with the sizes in use, and move onto a size of their own the first time you change them.
:::

See also [Edit a family](topic:family-editor) and [Doors and windows](topic:doors-and-windows).
