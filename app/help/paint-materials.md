---
title: Paint materials onto walls, floors and roofs
summary: Give elements a material such as brick, siding, shingles, wood or tile, on the whole element or on one side, saved in the IFC and shown in rendered pictures.
section: tasks
order: 33
keywords: paint, material, materials, finish, finishes, texture, brick, siding, shingles, roofing, wood, stone, tile, concrete, stucco, grass, gravel, glass, metal, wall side, inside, outside, floor finish, room, surface style
---

{{ui:Paint}} on the toolbar opens the material library over the 3D view: brick and block, siding, roofing, wood, stone, tile, concrete, stucco, ground, glass and metal.

## Paint elements

1. Click {{ui:Paint}}.
2. Click a material.
3. Click elements in the 3D view. Each click paints the element you click.

To paint many at once, select them first (click, {{key:Ctrl}}+click, or a [search](topic:find)), then click the material: every selected element takes it in one step.

The element shows the material's color in the 3D view at once. Its texture shows in a [rendered picture](topic:render). {{key:Esc}} or {{ui:Close}} ends painting.

## Paint one side

Choose {{ui:Only the side clicked}}, then click the side you want: the outside of a wall in siding and its inside in another finish, a floor's top in wood with its underside left as it is. The rest of the element keeps its material.

A side is found from the element's own directions, so it stays the same side when you move or turn the element.

To paint floors room by room, give each room its own floor ({{ui:Draw}} › {{ui:Floor}} › **This room**, see [Rooms, floors, ceilings and roofs](topic:floors-and-roofs)), then paint each floor's top.

## Take a material off

Click the striped swatch ({{ui:No material}}), then click the element. Every material on it, sides included, goes.

## In the file

Painting changes the IFC (one step each, {{key:Ctrl+Z}} undoes it) and stays plain IFC:

- each painted element gets the property set `CadCraft_Render` naming its material, and one property per painted side;
- its body gets a surface style with the material's color, so other BIM programs show the color. In IFC4 the style also names the texture.

When BimCraft reshapes a wall you painted (you move its end, say), the wall keeps its material and its color, in BimCraft, in pictures and in other programs.

:::note
The textures are drawn by BimCraft itself: they work offline and are free to use for anything (CC0). Your own image textures are not built yet.
:::

## Textures in the 3D view

A painted brick wall shows its bricks, a wood floor its boards, at their real size, as soon as the paint is on. Untick **Show the textures in the 3D view** in the Paint palette to see flat colours instead (a very large model switches them off by itself and says so). Colour by property always shows its own colours. The textures are drawn by the program, so nothing is downloaded, and the renders and the glTF file carry them either way.
