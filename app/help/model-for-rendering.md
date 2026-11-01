---
title: Send the model to a rendering program
summary: Save what the 3D view shows as a glTF model (.glb) with its materials, textures and lamps, for rendering and visualization programs that read glTF.
section: tasks
order: 34
keywords: glb, gltf, gl transmission format, export, rendering, render, visualization, real time, archviz, materials, textures, lamps, lights, asset, custom asset
---

{{ui:For rendering}} on the toolbar saves what the 3D view shows as one **.glb** file (glTF 2.0, the open format from the Khronos Group). Rendering programs that read glTF open it with the model's materials and lamps; Twinmotion lists glTF and GLB among the geometry files it imports and keeps their lights (Epic's documentation, "Importing geometry in Twinmotion"): use {{ui:For rendering}} and import the .glb there. Nothing is uploaded: the file is made on this computer.

## Save it

1. Open the IFC model and set up the 3D view: hide the storeys, elements or linked models you don't want, and [paint the materials](topic:paint-materials) you want to see.
2. Click {{ui:For rendering}} (or type `GLB`).
3. The file downloads as "<model name>.glb". The status bar says how many triangles, materials and lamps it holds.

## What the file carries

- **Geometry** of every element the 3D view shows, in meters, with Y up (glTF's own axes). One object per storey and material, named "Level 1 — Brick, red", so you can pick a material in the rendering program and swap it for its own.
- **Materials:** each color with the look you chose for it in [Render](topic:render) (matte, satin, glossy, metal, glass…), and each painted library material with its color, roughness and **texture** (its picture is in the file, scaled to its real size: a brick is a brick's size). Glass is see-through.
- **Lamps:** every light fixture that is switched on in Render › Lamps, as a point or spot light with its brightness (lumens turned into candela), color and beam angle.
- **Where the site is:** the site's latitude and longitude are written in the file for reference. Rendering programs have their own sun: type the place in there.

## What it leaves out

- The section cut (whole elements go in) and elements shown see-through (they are left out).
- Element by element objects (one object per storey and material instead), IFC properties, bump maps, saved views and recorded walks.
- Edges and the background.

## Enscape and other plug-in renderers

Enscape runs inside another design program and has no file to open a whole project. Two ways:

- Open the model's **IFC** (File › Save) in the program Enscape runs in; most of them read IFC. Colors come along; the library materials come as their colors.
- Bring a **small part** (furniture, a fixture) in as a custom asset: isolate it first, then click {{ui:For Enscape (.gltf)}}. Enscape's custom asset library lists .gltf, .obj and .fbx files, not .glb, so this button saves the same scene as one self-contained **.gltf** (the binary data and the pictures are inside the file; there is nothing else to copy with it). Enscape advises small assets (under about 20,000 triangles).

:::note
In CadCraft Studio the same glTF file (and a USD file) can also be saved from {{ui:Render}} › Engine › **glTF file** / **USD file**, or opened straight in a program on this computer: see [Open the scene in another program](topic:render-open-in). A plug-in or live link for Enscape or Twinmotion is not built. The FBX and Datasmith formats have no published specification, so BimCraft does not write them; glTF is the open route.
:::
