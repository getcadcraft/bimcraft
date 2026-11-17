---
title: Stuur die model na 'n weergawe-program
summary: Stoor wat die 3D-aansig wys as 'n glTF-model (.glb) met sy materiale, teksture en lampe, vir weergawe- en visualiseringsprogramme wat glTF lees.
keywords: glb, gltf, gl transmission format, uitvoer, weergawe, weergee, visualisering, intyds, archviz, materiale, teksture, lampe, ligte, bate, pasgemaakte bate
from: e62d57dc
---

{{ui:Vir weergawe}} op die nutsbalk stoor wat die 3D-aansig wys as een **.glb**-lêer (glTF 2.0, die oop formaat van die Khronos Group). Weergawe-programme wat glTF lees, maak dit oop met die model se materiale en lampe; Twinmotion lys glTF en GLB onder die geometrie-lêers wat dit invoer, en hou hul ligte (Epic se dokumentasie, "Invoer van geometrie in Twinmotion"): gebruik {{ui:Vir weergawe}} en voer die .glb daar in. Niks word opgelaai nie: die lêer word op hierdie rekenaar gemaak.

## Stoor dit

1. Maak die IFC-model oop en stel die 3D-aansig op: versteek die verdiepings, elemente of gekoppelde modelle wat jy nie wil hê nie, en [verf die materiale](topic:paint-materials) wat jy wil sien.
2. Klik {{ui:Vir weergawe}} (of tik `GLB`).
3. Die lêer laai af as "<modelnaam>.glb". Die statusbalk sê hoeveel driehoeke, materiale en lampe dit bevat.

## Wat die lêer dra

- **Geometrie** van elke element wat die 3D-aansig wys, in meter, met Y op (glTF se eie asse). Een voorwerp per verdieping en materiaal, genoem "Level 1 — Brick, red", sodat jy 'n materiaal in die weergawe-program kan kies en dit met sy eie kan vervang.
- **Materiale:** elke kleur met die voorkoms wat jy daarvoor gekies het in [Weergee](topic:render) (mat, satyn, glansend, metaal, glas…), en elke geverfde biblioteekmateriaal met sy kleur, ruwheid en **tekstuur** (sy prent is in die lêer, geskaal na sy werklike grootte: 'n baksteen is 'n baksteen se grootte). Glas is deursigtig.
- **Lampe:** elke ligtoestel wat aan is in {{ui:Weergee}} › Lampe, as 'n punt- of spotlig met sy helderheid (lumen omgeskakel na kandela), kleur en straalhoek.
- **Waar die perseel is:** die perseel se breedte- en lengtegraad word in die lêer geskryf vir verwysing. Weergawe-programme het hul eie son: tik die plek daarin.

## Wat dit weglaat

- Die snit (hele elemente gaan in) en elemente wat deursigtig gewys word (hulle word weggelaat).
- Element-vir-element-voorwerpe (een voorwerp per verdieping en materiaal in plaas daarvan), IFC-eienskappe, bulkaarte, gestoorde aansigte en opgeneemde wandelings.
- Rande en die agtergrond.

## Enscape en ander inprop-weergawers

Enscape loop binne 'n ander ontwerpprogram en het geen lêer om 'n hele projek oop te maak nie. Twee maniere:

- Maak die model se **IFC** oop (Lêer › Stoor) in die program waarin Enscape loop; die meeste lees IFC. Kleure kom saam; die biblioteekmateriale kom as hul kleure.
- Bring 'n **klein deel** (meubels, 'n toestel) in as 'n pasgemaakte bate: isoleer dit eers, klik dan {{ui:Vir Enscape (.gltf)}}. Enscape se pasgemaakte bate-biblioteek lys .gltf-, .obj- en .fbx-lêers, nie .glb nie, dus stoor hierdie knoppie dieselfde toneel as een selfstandige **.gltf**-lêer (die binêre data en die prente is binne die lêer; daar is niks anders om saam te kopieer nie). Enscape beveel klein bate aan (onder ongeveer 20 000 driehoeke).

:::note
In CadCraft Studio kan dieselfde glTF-lêer (en 'n USD-lêer) ook gestoor word vanaf {{ui:Weergee}} › Enjin › **glTF file** / **USD file**, of direk oopgemaak word in 'n program op hierdie rekenaar: sien [Maak die toneel in 'n ander program oop](topic:render-open-in). 'n Inprop- of lewendige skakel vir Enscape of Twinmotion is nie gebou nie. Die FBX- en Datasmith-formate het geen gepubliseerde spesifikasie nie, dus skryf BimCraft hulle nie; glTF is die oop roete.
:::
