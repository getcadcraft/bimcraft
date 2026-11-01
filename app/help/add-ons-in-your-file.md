---
title: Add-ons your file uses
summary: BimCraft notes in an IFC file which add-ons wrote into it, and offers to add the ones you are missing when you open it.
section: tasks
order: 151
keywords: add-on, addon, this file uses, missing add-on, trusscraft, library, record, cadcraft_addons
---

## What it does

When an add-on writes into the model (a truss, a pipe run), BimCraft records the add-on and its version on the IFC project, in a property set called CadCraft_AddOns. The record is written in the same undo step as the add-on's own change, so undoing the change takes the record back too. Other programs ignore the property set; what the add-on drew stays in the file either way.

## Steps

1. Open an IFC file that an add-on helped to make.
2. If an add-on it used is not on, a note above the model says which ones, with a button to add them from your Library account.
3. Add them, or close the note. The model opens either way.

## Common mistakes

- **No note appears.** You are not signed in to your account in this tab, or the file holds no record (it was made before records, or by another program).
- **The change list says "undefined".** Fixed: labels now show the add-on's name.

## Next

- [Place equipment and furniture from the library](topic:place-from-library)
