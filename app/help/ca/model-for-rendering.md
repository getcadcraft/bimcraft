---
title: Envia el model a un programa de renderitzat
summary: Desa el que mostra la vista 3D com a model glTF (.glb) amb els seus materials, textures i llums, per a programes de renderitzat i visualització que llegeixen glTF.
keywords: glb, gltf, format de transmissió gl, exporta, renderitzat, render, visualització, temps real, archviz, materials, textures, llums, il·luminació, recurs, recurs personalitzat
from: e62d57dc
---

{{ui:Per a renderitzat}} a la barra d'eines desa el que mostra la vista 3D com un sol fitxer **.glb** (glTF 2.0, el format obert del Khronos Group). Els programes de renderitzat que llegeixen glTF l'obren amb els materials i les llums del model; Twinmotion llista glTF i GLB entre els fitxers de geometria que importa i conserva les seves llums (documentació d'Epic, "Importing geometry in Twinmotion"): useu {{ui:Per a renderitzat}} i importeu-hi el .glb. No es puja res: el fitxer es fa en aquest ordinador.

## Desa-ho

1. Obriu el model IFC i configureu la vista 3D: amagueu les plantes, els elements o els models enllaçats que no voleu, i [pinteu els materials](topic:paint-materials) que voleu veure.
2. Cliqueu {{ui:Per a renderitzat}} (o escriviu `GLB`).
3. El fitxer es baixa com a "<model name>.glb". La barra d'estat diu quants triangles, materials i llums conté.

## Què porta el fitxer

- **Geometria** de cada element que mostra la vista 3D, en metres, amb Y cap amunt (els eixos propis de glTF). Un objecte per planta i material, anomenat "Level 1 — Brick, red", de manera que podeu triar un material al programa de renderitzat i canviar-lo pel seu.
- **Materials:** cada color amb l'aspecte que hàgiu escollit per a ell a [Renderitzat](topic:render) (mat, satinat, brillant, metall, vidre...), i cada material de biblioteca pintat amb el seu color, rugositat i **textura** (la seva imatge és al fitxer, escalada a la seva mida real: un maó té la mida d'un maó). El vidre és transparent.
- **Llums:** cada llum que està encesa a Renderitzat › Llums, com a llum puntual o de focus, amb la seva lluminositat (lúmens convertits en candeles), color i angle del feix.
- **Emplaçament:** la latitud i la longitud de l'emplaçament es desen al fitxer com a referència. Els programes de renderitzat tenen el seu propi sol: escriviu-hi el lloc.

## Què deixa fora

- El tall de secció (els elements s'hi inclouen sencers) i els elements mostrats com a transparents (es deixen fora).
- Objectes element per element (en el seu lloc, un objecte per planta i material), propietats IFC, mapes de relleu, vistes desades i recorreguts gravats.
- Arestes i el fons.

## Enscape i altres renderitzadors de connector

Enscape funciona dins d'un altre programa de disseny i no té cap fitxer que obrir per a un projecte sencer. Hi ha dues maneres:

- Obriu l'**IFC** del model (Fitxer › Desa) al programa on funciona Enscape; la majoria en llegeixen l'IFC. Els colors es traslladen; els materials de biblioteca arriben com als seus colors.
- Porteu una **peça petita** (mobiliari, un accessori) com a recurs personalitzat: aïlleu-la primer i després cliqueu {{ui:Per a Enscape (.gltf)}}. La biblioteca de recursos personalitzats d'Enscape llista fitxers .gltf, .obj i .fbx, no .glb, de manera que aquest botó desa la mateixa escena com un sol **.gltf** autocontingut (les dades binàries i les imatges són dins del fitxer; no cal copiar res més amb ell). Enscape recomana recursos petits (menys de 20,000 triangles aproximadament).

:::note
A CadCraft Studio el mateix fitxer glTF (i un fitxer USD) també es pot desar des de {{ui:Renderitzat}} › Motor › **fitxer glTF** / **fitxer USD**, o obrir directament en un programa d'aquest ordinador: vegeu [Obre l'escena en un altre programa](topic:render-open-in). Un connector o un enllaç en directe per a Enscape o Twinmotion encara no està implementat. Els formats FBX i Datasmith no tenen una especificació publicada, de manera que BimCraft no els escriu; glTF és la via oberta.
:::
