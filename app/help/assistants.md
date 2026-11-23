---
title: Let an AI assistant work with your model
summary: Turn on assistants in Settings so an assistant on your computer can find elements, read their properties, isolate them in the view and draw walls, doors, windows, floors, levels and grids, through CadCraft Studio. Off until you turn it on.
section: tasks
order: 60
keywords: ai, assistant, mcp, script, automation, studio, find elements, isolate, properties, permissions, disconnect, activity, draw walls, add doors, add windows, levels, grids, floors, undo, save, command line, cli, headless, use with ai assistants
---

## What you will learn

How to let an AI assistant (any assistant that speaks MCP) look into the IFC model you have open and draw in it, what it can and cannot do, and how to stop it.

## What an assistant can do in BimCraft

| It asks to | What happens | Needs |
|---|---|---|
| Find elements | It gets a list of elements by class, storey, name or property value, as **Find** does | Read |
| Read properties | It gets one element's attributes, type, property sets and quantities, as **Properties** shows them | Read |
| Describe the model, list walls | It gets the levels, walls, doors, windows, rooms, floors, grids and columns, and each wall's ends, type and height | Read |
| Isolate, see-through, hide or show | The 3D view changes as if you had used the {{ui:Show}} menu | Change the view and draw |
| Draw walls, doors, windows, floors, levels or grid lines | The model changes as if you had used the {{ui:Draw}} tools: walls join, rooms, floors and roofs follow | Change the view and draw |
| Change a name or a property value | One element's Name, Description, Object type or Tag, or one property value. A value it shares with other elements is copied for it first; a value of its type changes only when the assistant says so, because every element of that type follows | Change the view and draw |
| Move, delete, change walls, doors and windows | Elements move or are deleted with what they host; walls drawn with the {{ui:Draw}} tools change by their ends or type, doors and windows by their place, size or type, and rooms and joins follow | Change the view and draw |
| Set up, arrange and read a schedule | "A door schedule by floor, with fire rating and ironmongery": the assistant names the schedule, its columns (a property or tag becomes a column) and its grouping; BimCraft fills it from the model and lays it out, taking what the assistant did not state from the office standard. The set-up joins your Schedules list. Each line it gets back names its elements, so it can select them | Read to read; Change the view and draw to save a set-up |
| Export a schedule | CSV, Excel, or tab-separated text to paste into Google Sheets (nothing is sent to Google) | Export |
| Read and set room finishes | The finish types, each room's floor, wall and ceiling finish, zones; areas, tile counts and substrate volumes then come from the finish schedules | Read; Change the view and draw to set |
| Select elements, undo its own steps | Elements are picked in the view; its last step is taken back | Change the view and draw |
| Save | A new IFC file with every change, as {{ui:Save as IFC}} makes it (the original is never changed) | Save |
| Export USD | The open models as OpenUSD (.usda, .usdc or .usdz), as {{ui:USD}} on the toolbar writes it | Export |
| Render a picture, run the render queue | A picture of the 3D view, as the {{ui:Render}} dialog makes it with your Render settings unless it asks for others, or high-quality pictures added to the dialog's queue and rendered one after another (the queue needs WebGPU). Nothing in the model changes ([Render a picture](topic:render)) | Export |

Each change an assistant makes is one step in **Changes**, named "Assistant: …" (for example "Assistant: add 4 walls"), so {{key:Mod+Z}} takes back its whole action, and you can see whose step it was. In the window it cannot open files: you open the model; it works with the one that is open.

## Turn it on

Assistants reach BimCraft through CadCraft Studio on your computer; the plain browser has no way in.

1. Open {{ui:Settings}} and choose the **BimCraft** tab.
2. Under **Assistants**, tick **Let AI assistants and scripts use BimCraft**.
3. **Read** is ticked for you. Tick **Change the view and draw** too if the assistant may isolate and hide elements and draw, and **Save** if it may save the model as a new file.
4. Connect the assistant in Studio (Studio shows the address and the settings to paste into it).

## While an assistant is connected

A note at the top of the right panel says which assistant is connected and what it can do. Click {{ui:Disconnect}} to end its session at once; it has to connect again to continue.

**Activity**, under **Assistants** in Settings, lists every call the assistant made, newest first, with whether it worked.

:::tip
Ask in plain words, for example "isolate the external walls on Level 1", "which doors have no fire rating?" or "draw a 6 by 4 metre room on Level 1 with a door in the south wall". The assistant finds the elements and shows them in your view, or draws them.
:::

## Without a window: scripts and the command line

The same drawing tools work on IFC files in folders you name, with no window open: CadCraft's MCP server and command line can start a new building or open an IFC file, describe it, add walls, doors, windows, floors, levels and grids, undo and save it as a new `.ifc` file. Four more tools suit scripts: `ifc_batch` runs up to 200 edit steps as one (all or nothing: one undo takes the whole batch back, and a refused step undoes the rest and names the step); `ifc_describe` lists the levels and every wall with its doors and windows; `ifc_render_png` writes a flat-shaded checking picture of the model (no materials, textures or shadows) without a window; `usd_export` writes `.usda`, `.usdc` or `.usdz`. On the command line, `cadcraft bim script.json --from model.ifc -o out.ifc` runs a script of steps, and `--usd`, `--png` and `--plan` write a USD file, a picture or a plan from the same run. You decide which folders it may use and whether it may change or save anything.

## Turn it off

Untick **Let AI assistants and scripts use BimCraft**. Every assistant is disconnected straight away, and the setting is kept for next time.

## See also

- [Recipes for AI assistants](common:assistants-recipes): worked examples, each with the tools it calls.
- [Find elements by class, name or property](topic:find)
- [Hide, isolate and see through elements](topic:hide-and-isolate)
- [BimCraft settings](topic:settings)
