---
title: Place equipment and furniture from the library
summary: Find an item in the Library, a file or the open drawing, place it on a storey of an IFC model with a ghost preview, turn it, snap it to a wall, and save.
section: tasks
order: 150
keywords: move, rotate, turn, drag, library, librarycraft, place, insert, equipment, furniture, block, family, item, catalog, content, kcl, csv, gltf, obj, rfa, dwg, ifc type
---

## What you'll do

Put a library item into an IFC model: a sink, a work table, a chair. BimCraft writes it as a proper IFC element with a type, so every copy of the same item shares one set of geometry, and its data, item number and license travel with it.

## Steps

1. Open an IFC model.
2. Click the {{ui:Library}} tab beside {{ui:Properties}} on the right, or {{ui:Library}} in the toolbar above the model.
3. Pick a source:
   - **Built-in symbols**: generic plumbing plan symbols included with BimCraft under Apache-2.0, available offline. Check their dimensions before construction. For electrical plan symbols and IFC electrical devices, use **Build › Electrical**.
   - **Library**: the CadCraft library on this site. Public items need no sign-in.
   - **This file**: the blocks of an open DWG or DXF drawing. A dynamic block with visibility states is offered once per state, named "Sink: Double bowl", each drawn with only that state's objects.
   - **Files…**: a DWG, DXF, IFC, glTF/GLB, OBJ, RFA or CSV file on your computer. It is read in this tab; nothing is uploaded.
   - **Other feeds**: another library that speaks the same feed format. Add its address once; it is kept in this browser.
4. Search or pick a category, then click a card. The card shows a plan preview, the name, maker and model, the license and the version.
5. Click {{ui:Place in the model}}.
6. Pick the storey in the placing bar. Storeys above it are hidden while you place, and the view turns to the top.
7. Move the pointer over the model: a see-through box shows where the item goes.
8. Press {{key:R}} to turn it 90°. Press {{key:Tab}} (or {{ui:Wall snap}}) to put its back against the nearest wall, facing the room.
9. Click to place it. Or type the position in **X, Y (mm)**, for example `1200, 3400`, and press {{key:Enter}}.

A light or anything else hung from above: set **Mount** to **At the ceiling**. The item's top then sits at the underside of the ceiling over the spot (or at the level's height where there is no ceiling). With a ceiling plan on the plan view, **Mount** starts on **At the ceiling**.
10. Answer the one question: the **item number** (the next free number is filled in), the quantity and a note. Press {{key:Enter}}.
11. Place more, or press {{key:Esc}} to stop.
12. Click {{ui:Save as IFC}} to download the edited copy.

## Move or turn a placed item

In {{ui:Draw}}, pick the item in the plan. A square grip shows at its insertion point and a round grip beside it.

- Drag the item, or its square grip, to move it. It snaps like the Wall tool (wall ends and faces); {{key:Shift}} keeps it square to where it was.
- Drag the round grip to turn it in 15° steps. Hold {{key:Shift}} for 1° steps.
- Press {{key:R}} to turn it 90°.
- In **Properties** (also in the 3D view), type **X**, **Y** and **Rotation (°)**, or click **Turn 90°**.

Each move is one undo step and travels in Live TeamWork. The item keeps its item number, its library data and its height above the level. Not built yet: dragging it in the 3D view.

## What you should see

- The item in the model, picked, with its properties on the right: a **Library item** box with its license and attribution, and the sets `CadCraft_Placement`, `CadCraft_LibraryItem`, `CadCraft_Equipment` and, for items from tagged drawings, `CadCraft_SourceAttributes`.
- "Placed: *item* (item *n*)" in the change list. {{key:Mod+Z}} undoes it.
- The status line: "Placed *item* as item *n*."

## Good to know

- Some items come in several sizes or options: the card then has a **Variant** choice, and the one you pick is the one placed. See [Place and swap a library item that has variants](topic:library-variants).
- An item with no 3D body (a 2D symbol) is placed with a stand-in box; you give its height when asked.
- More of the same: pick a placed item and use {{ui:Copy}} and {{ui:Paste}}, or {{key:Mod+D}}. See [Copy, paste and duplicate library items](topic:copy-paste).
- To start every placement with wall snap on, turn on **Start with wall snap on** in [BimCraft settings](topic:settings).
- Lengths are converted to the model's own units, whatever they are.
- **Entourage** (trees, shrubs, people, cars) is in the library too: search for "tree", "person" or "car". These are drawn by CadCraft (CC0) and keep their colors when placed (a trunk brown, leaves green, a car's windows see-through), in BimCraft and in other BIM programs. They show in [rendered pictures](topic:render).
- In an IFC2X3 file the body is written as a faceted solid; in IFC4 as a triangulated face set. Both open in other IFC tools.
- A drawing (DWG or DXF) cannot be saved here, so items are placed into IFC models only. Use **This file** on a drawing to see what its blocks would become.

## Items in your language

An item can carry its name, description and type in other languages. When it has them in the language BimCraft is set to (Settings › General › Language), the item's page shows those, with the name its maker gave it underneath, and **Place** writes the name in your language into the model, so the {{ui:Equipment}} schedule lists it that way. The item stays the same item: checking for updates and swapping go by the item itself, never by its name. Items without a translation keep their own words.

## Common mistakes

- **{{ui:Place in the model}} is missing.** No IFC model is open. Open one first.
- **The ghost does not follow the pointer.** The pointer is off the model's area, or the storey plane is out of view. Click {{ui:Top}}.
- **{{ui:Wall snap}} says there are no walls.** The storey has no walls in the IFC (some exports put walls on another storey). Pick that storey, or type X and Y.
- **A file's items are the wrong size.** The file has no units, or says the wrong ones. In {{ui:Files…}} choose the units and read it again.

:::tip
Placing the same item twice shares one IFC type, so a model with forty chairs stores the chair once.
:::
