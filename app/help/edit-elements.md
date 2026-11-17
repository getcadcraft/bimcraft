---
title: Delete, cut, copy and paste building elements
summary: Pick walls, doors, furniture or anything else in an IFC model; delete them, cut them, or copy and paste them where you click, in place, or on another storey.
section: tasks
order: 156
keywords: delete, remove, erase, cut, copy, paste, duplicate, move, select all, pick all, building element, wall, door, window, stair, opening, undo
---

## What you'll do

Change what is in an IFC model: take out elements you do not want, copy a wall or a set of furniture to another place, or move elements by cutting and pasting them. Every change is one step you can undo, and saving writes a new file, so your original stays as it was.

## Steps

1. Open an IFC model. See [Open an IFC model and look around in 3D](topic:open-ifc-model).
2. Pick what you want to change: click an element, hold {{key:Mod}} or {{key:Shift}} and click to pick more, or press {{key:Mod+A}} ({{ui:More}}, {{ui:Select all}}) to pick every element shown.
3. Then:
   - **Delete:** press {{key:Delete}}, or {{ui:More}}, {{ui:Delete}}.
   - **Copy:** press {{key:Mod+C}} or click {{ui:Copy}}.
   - **Cut:** press {{key:Mod+X}}, or {{ui:More}}, {{ui:Cut}}. The elements go, and you can paste them.
4. To paste, press {{key:Mod+V}} or click {{ui:Paste}}. A see-through box the size of what you copied follows the pointer on the storey chosen in the placing bar. Press {{key:R}} to turn it 90°, then click where it goes. Each click places another copy; press {{key:Esc}} to stop.
5. Or press {{key:Mod+Shift+V}} ({{ui:More}}, {{ui:Paste in place}}): after a cut the elements go back exactly where they were; after a copy the copy goes right beside the originals.
6. Click {{ui:Save as IFC}} to download the edited model.

## What goes with an element

- **Parts:** a stair takes its flights, a curtain wall its panels, anything made of parts takes them all.
- **Openings:** a wall takes the openings cut in it. Deleting a door or window also takes the opening it filled, so the wall closes, as it does in an authoring program. Deleting a wall drawn in BimCraft also deletes its doors and windows and re-joins the walls left. Deleting a wall from a file made elsewhere leaves its doors and windows where they were.
- **Data:** a copy has the same type, materials, property sets and quantities as the original, and a new GlobalId. Changing a value on the copy later leaves the original alone.
- **Library items** keep their library data; a copy gets the next free item number, and a cut item pasted back keeps its own.

## What you should see

- "Deleted: …" or "Pasted: …" in the {{ui:Changes}} list. {{key:Mod+Z}} takes the last change back; {{key:Mod+Y}} puts it back again.
- After a delete, the status line says how many parts and openings went too.
- Pasted elements are picked, so you can paste in place again to make a row, or delete them.

## Good to know

- Copies use the same geometry as the original (IFC lets elements share it), so the file grows very little.
- Building elements paste into the model they were copied from, in the same tab. To use placed library items in another model, copy one item at a time: see [Copy, paste and duplicate library items](topic:copy-paste).
- Storeys, spaces, buildings and the site cannot be deleted or copied. Pick the elements in them instead. A room drawn in BimCraft comes from the walls round it: delete a wall to join two rooms.
- Walls, doors and windows drawn with BimCraft's own wall, door and window tools cannot be copied, cut or duplicated yet; the status line says so. Draw them again. Delete works.
- Copy also puts the names and properties of what you copied on your clipboard as text, to paste into a spreadsheet or an e-mail.

## Common mistakes

- **{{ui:Delete}} is greyed out.** Nothing is picked, or only storeys or spaces are. Point at it to read why.
- **Paste says the elements came from another model.** You opened another model since you copied them. Open the first model again and copy them there.
- **The pasted copy is on another floor.** The placing bar's {{ui:Storey}} decides where it goes; pick the storey before you click.

## Related

- [Hide, isolate and see through elements](topic:hide-and-isolate)
- [Keys and mouse](topic:keyboard#edit)
