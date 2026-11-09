---
title: Place and swap a library item that has variants
summary: Some library items come in several sizes or options. Choose the variant before you place it, see which one a placed item is, swap it for another variant in one click, and keep it when the item is updated.
section: tasks
order: 153
keywords: variant, variants, sizes, options, configuration, library, librarycraft, place, swap, configurator, family, type, update, ports
---

## What you'll do

Place a library item in the size or option you need, and change your mind later without placing it again. An item with variants is one item in the library (one name, one license, one version) with a table of the variants it comes in: for example a mounting plate in Small, Medium and Large, or the same plate without holes.

## Choose the variant and place it

1. Open the {{ui:Library}} tab and click the item's card.
2. Under the name, the {{ui:Variant}} choice lists every variant with its size. The item's default is chosen first.
3. Pick one. The plan, the size and the 3D body row follow your choice.
4. Click {{ui:Place in plan}} (or {{ui:Place in model}} in the 3D view) and place it as any item: see [Place equipment and furniture from the library](topic:place-from-library).

The placed element is named after the item and the variant, for example *Mounting plate — Large*, so the {{ui:Equipment}} schedule and the tree tell them apart. Each variant is its own IFC type: placing the same variant twice shares one type, a different variant gets its own.

## See which variant a placed item is

Pick the element. In {{ui:Properties}}, the **Library item** box has a **Variant** line. The IFC keeps it in `CadCraft_LibraryItem`: `Variant` (the variant's id), `VariantName` and `VariantValues` (the option values, as text), so other programs can read it.

## Swap to another variant

1. Pick the placed item and click {{ui:Swap item…}} in the **Library item** box. The {{ui:Library}} tab opens.
2. At the top, **Other variants of** *the item* lists every variant with its size. The one placed is marked and cannot be picked.
3. Click {{ui:Swap to …}} on the variant you want.

The element keeps its place, turn, storey, item number, quantity and notes; its type, shape and data change to the other variant. {{key:Mod+Z}} brings the first one back. You can still pick any other item from the list below instead, as before: see [Swap a placed item, and update items from the library](topic:swap-and-update-library-items).

## Copy, paste and updates

- A copy of a placed variant is the same variant: in this model, and in another model opened in the same browser tab, through Copy and Paste.
- **Updates** keep the variant: if the newer version of the item still has it, the placement becomes that variant of the new version. If the new version no longer has it, the placement takes the item's default variant instead.

## Good to know

- Only some library items have variants. The cards do not say so; you see the {{ui:Variant}} choice when you open one.
- An item can list **ports** (connection points for pipes and ducts) per variant. The Library tab shows how many a variant has. They are **not** written into the IFC when you place the item from the Library tab yet.
- A variant that has no 3D body is placed with a stand-in box, as any 2D symbol is.
- Sizes in the choice are in millimeters, as the library writes them.
