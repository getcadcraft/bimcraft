---
title: Swap a placed item, and update items from the library
summary: Replace one placed library item with another while keeping its place and item number, and check Library for newer versions of everything in the model.
section: tasks
order: 151
keywords: swap, replace, substitute, update, newer version, check for updates, library, withdrawn, license change, item number
---

## What you'll do

Change your mind about an item without moving it again, and keep the library items in a model current.

## Swap one item

1. Click a placed library item in the model.
2. In {{ui:Properties}}, click {{ui:Swap item…}} in the **Library item** box. The {{ui:Library}} tab opens.
3. Find the new item and click its card.
4. Click {{ui:Swap … to this}}.

The element keeps its place, turn, storey, item number, quantity and notes. Its type, shape and item data change to the new item. Items placed the same way share one type, as when you place them.

An item that has variants (see [Place and swap a library item that has variants](topic:library-variants)) lists its other variants at the top of the {{ui:Library}} tab when you swap it: one click each.

When the new item is a different kind of thing, for example a sink in place of a table, the element's IFC class changes to match (here from furnishing element to sanitary terminal), so other software schedules it correctly. It stays the same element, with the same GlobalId, so links to it still work. {{key:Mod+Z}} brings the old class back with the old item.

## Check for updates

1. Click {{ui:Updates}} in the toolbar (or {{ui:Check for updates}} in a library item's box).
2. Read the list: each Library item in the model with its version in the model, the latest version and a status: **Up to date**, **Newer version**, **Withdrawn** or **Not found**. It also says what changed (geometry, data, license or a fix).
3. Click {{ui:Update}} on a row, or {{ui:Update all}}.

## What you should see

- "Updated *n* placements. Places, item numbers, quantities and notes are kept."
- "Updated: *item*" lines in the change list. {{key:Mod+Z}} undoes each one.

## Good to know

- Only items that came from the Library can be checked. Items from files carry no library id.
- When a license changed, the copy you already placed keeps the license it came with until you update it.
- A **Withdrawn** item is not offered for new placements. One withdrawn for copyright reasons cannot be downloaded at all; replace it with {{ui:Swap item…}}.
- A placed variant stays that variant when the newer version of the item still has it; otherwise it takes the item's default variant.
- Checking sends only the item ids and versions, never your model.
