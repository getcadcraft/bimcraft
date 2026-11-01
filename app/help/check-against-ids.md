---
title: Check a model against a client's IDS
summary: Load the .ids file you were given and see every element that does not meet it in Problems, before you deliver the IFC.
section: tasks
order: 33
keywords: ids, information delivery specification, buildingsmart, requirements, delivery, check, validation, qa, eir, bep, property, classification, material, procurement
---

## What you'll do

An IDS (Information Delivery Specification, a buildingSMART standard) is the list of what an IFC must contain: which classes, which properties with which values, classifications, materials, where things belong. Clients and public procurement send one with the job. BimCraft checks the open IFC model against it and lists every element that falls short.

## Steps

1. Open an IFC model.
2. Open {{ui:Check against an IDS}} in the left panel, under {{ui:Model checks}}, or choose {{ui:Check against IDS…}} from the menu of your menu style.
3. Click {{ui:Load an .ids file…}} and pick the file. Nothing is uploaded.
4. Read the result: each specification with {{ui:Pass}} or {{ui:Fail}} and how many elements it applies to.
5. Open Problems ({{key:Ctrl+Shift+M}}) and click a failure to pick the element and zoom to it.

## What you should see

- One warning per element and requirement it misses, with the specification's name, what the IDS asks for and what the element has.
- A required specification that nothing in the model matches is one warning of its own.
- The check report (in Problems) starts with the IDS: its title, version, author and each specification's applicable, passed and failed counts.

## Good to know

- The IFC keeps only a reference to the IDS (its name, title, version and a hash), not the IDS itself: a client's IDS may be confidential, and the IFC goes to other people. The IDS stays in this browser beside the model, so when you open the saved IFC here again it is checked again. Loading or forgetting the IDS is one step you can undo.
- Opened on another computer or in another browser, Problems shows a note that the IDS was not found: load it again to re-check.
- To send the IDS along with the IFC, turn on {{ui:Keep the IDS inside the IFC}} in Settings, on the BimCraft tab, before you load it.
- Every edit, undo and redo is checked again a moment later.
- Values are compared the IDS way: text exactly (case counts), numbers in SI units with a small tolerance (lengths in metres, so a model in millimetres is converted first).
- A specification written for another IFC version (say IFC2X3 when the model is IFC4) is still checked; the result says so.
- If the IDS file has faults an IDS audit would flag, the dialog lists them; the specifications they are in fail.
- You can accept a failure with a reason, like any problem. It stays accepted while the element's values stay the same.

- Patterns in the IDS are read as the whole value. A `^` at the start and a `$` at the end are taken as "the whole value" too, as most IDS files mean them.

## Next

- [Check a model for common problems](topic:model-checks)
- [Change a wall or door](topic:change-a-wall-or-door)
