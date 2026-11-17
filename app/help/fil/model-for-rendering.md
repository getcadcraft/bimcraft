---
title: Ipadala ang model sa rendering program
summary: I-save ang ipinapakita ng 3D view bilang glTF model (.glb) kasama ang mga materyal, texture at lamp nito, para sa mga rendering at visualization program na nagbabasa ng glTF.
keywords: glb, gltf, gl transmission format, export, rendering, render, visualization, real time, archviz, materyal, texture, lamp, lights, asset, custom asset
from: e62d57dc
---

{{ui:Para sa rendering}} sa toolbar ay nagse-save ng ipinapakita ng 3D view bilang isang **.glb** na file (glTF 2.0, ang bukas na format mula sa Khronos Group). Binubuksan ito ng mga rendering program na nagbabasa ng glTF kasama ang materyal at lamp ng model. Kasama sa listahan ng Twinmotion ang glTF at GLB sa mga geometry file na inaangkat nito, at pinananatili nito ang mga ilaw: gamitin ang {{ui:Para sa rendering}} at i-import doon ang .glb (dokumentasyon ng Epic, "Importing geometry in Twinmotion"). Walang ina-upload: ginagawa ang file sa computer na ito.

## I-save ito

1. Buksan ang IFC model at ihanda ang 3D view: itago ang mga storey, elemento o naka-link na model na ayaw mo, at [ipinta ang mga materyal](topic:paint-materials) na gusto mong makita.
2. I-click ang {{ui:Para sa rendering}} (o i-type ang `GLB`).
3. Dina-download ang file bilang "<model name>.glb". Sinasabi ng status bar kung ilang triangle, materyal at lamp ang taglay nito.

## Ang laman ng file

- **Geometry** ng bawat elementong ipinapakita ng 3D view, sa metro, na may Y pataas (sariling axes ng glTF). Isang object bawat storey at materyal, pinangalanang "Level 1 — Brick, red", para mapili mo ang materyal sa rendering program at mapalitan ito ng sarili nito.
- **Materyal:** bawat kulay na may itsurang pinili mo para dito sa [Render](topic:render) (matte, satin, glossy, metal, glass…), at bawat pininturahang library material na may kulay, roughness at **texture** nito. Nasa file ang larawan nito, naka-scale sa tunay nitong laki: ang brick ay laki ng brick. Nakikita sa loob ang glass.
- **Lamp:** bawat light fixture na naka-on sa Render › Lamps, bilang point o spot light na may liwanag nito (ang lumens ay ginawang candela), kulay at beam angle.
- **Kung nasaan ang site:** nakasulat sa file ang latitude at longitude ng site bilang sanggunian. May sariling araw ang mga rendering program: i-type doon ang lugar.

## Ano ang hindi isinasama

- Ang section cut (buong elemento ang pumapasok) at mga elementong ipinapakitang see-through (iniiwan ang mga ito).
- Mga object na elemento-por-elemento (isang object bawat storey at materyal sa halip), IFC property, bump map, naka-save na view at naitalang lakad.
- Mga edge at background.

## Enscape at iba pang plug-in renderer

Tumatakbo ang Enscape sa loob ng ibang design program at walang file na mabubuksan para sa buong proyekto. Dalawang paraan:

- Buksan ang **IFC** ng model (File › Save) sa program na pinagtatakbuhan ng Enscape; karamihan ay nagbabasa ng IFC. Kasama ang mga kulay; ang library material ay pumapasok bilang kulay nito.
- Ipasok ang isang **maliit na bahagi** (muwebles, fixture) bilang custom asset: ihiwalay muna ito, saka i-click ang {{ui:Para sa Enscape (.gltf)}}. Ang custom asset library ng Enscape ay naglilista ng .gltf, .obj at .fbx na file, hindi .glb, kaya ang button na ito ay nagse-save ng parehong eksena bilang isang **.gltf** na kumpleto sa sarili (nasa loob ng file ang binary data at mga larawan; walang ibang kailangang kopyahin kasama nito). Inirerekomenda ng Enscape ang maliliit na asset (mas mababa sa humigit-kumulang 20,000 triangle).

:::note
Sa CadCraft Studio, maaari ring i-save ang parehong glTF file (at USD file) mula sa {{ui:Render}} › Engine › **glTF file** / **USD file**, o direktang buksan sa ibang program sa computer na ito: tingnan ang [Buksan ang eksena sa ibang program](topic:render-open-in). Hindi pa ginagawa ang plug-in o live link para sa Enscape o Twinmotion. Walang nailathalang specification ang mga format na FBX at Datasmith, kaya hindi ito isinusulat ng BimCraft; ang glTF ang bukas na ruta.
:::
