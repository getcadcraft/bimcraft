---
title: Visualitza un dibuix DWG o DXF
summary: Obriu un DWG o DXF, moveu-vos per l'espai model i els fulls, llegiu les coordenades i vegeu què encara no es dibuixa.
keywords: blocs dinàmics, estats de visibilitat, dwg, dxf, cad, dibuix, 2d, visualització, visualitzador, desplaça, zoom, espai model, espai de paper, presentació, coordenades, obre dwg
from: 4db3122a
---

## Què hi fareu

Obriu un dibuix CAD, veieu-lo en 3D o 2D, moveu-vos-hi, canvieu entre l'espai model i els seus fulls, i llegiu les coordenades. BimCraft mostra els dibuixos DWG i DXF; no els edita ni els desa. Per canviar-ne un, cliqueu {{ui:Edita a CadCraft}} i el dibuix s'obre a l'aplicació de delineació de CadCraft en una pestanya nova.

## Passos

1. Cliqueu {{ui:Trieu un fitxer}}, o deixeu anar el dibuix sobre la pàgina.
2. Trieu un fitxer `.dwg` o `.dxf`.
3. Espereu mentre la línia d'estat diu «Llegint el dibuix…». Els dibuixos grans triguen uns segons. Després diu quant ha trigat la lectura, «renderitzant…» mentre es dibuixa la primera imatge, i quant ha trigat.
4. El dibuix s'obre en 3D, la manera més ràpida de mostrar un dibuix gran (vegeu [Visualitza un dibuix DWG o DXF en 3D](topic:dwg-in-3d)). Cliqueu {{ui:Model}} per a la vista 2D plana. Per obrir sempre els dibuixos en 2D, poseu {{ui:Configuració}} › {{ui:BimCraft}} › **Els dibuixos s'obren en** a {{ui:Model (2D)}}. Un dibuix sense res a l'espai model, o un navegador que no pot mostrar 3D, s'obre en 2D.
5. Mireu les pestanyes sobre el dibuix: primer {{ui:Model}}, i després una per cada full, en l'ordre propi del dibuix.
6. Cliqueu una pestanya de full per veure aquell full: el paper, amb el model mostrat a través de les seves finestres gràfiques.
7. Cliqueu {{ui:Model}} per tornar a l'espai model.
8. Moveu el punter sobre el dibuix i llegiu les coordenades X i Y a la cantonada.

## Què heu de veure

- El dibuix, ajustat a la finestra. Els colors segueixen el dibuix; les línies blanques (color 7) es dibuixen en la tinta del tema, i els colors pàlids s'enfosqueixen al tema clar perquè es continuïn llegint.
- El tauler {{ui:Dibuix}} a l'esquerra: fitxer, mida, format (per exemple «AutoCAD 2018 (AC1032)»), unitats, recompte d'entitats i de capes, nombre de fulls, i els dibuixos enllaçats i els equips quan n'hi ha.
- La llista {{ui:Capes}} a l'esquerra.
- A la dreta: com moure's, dibuixos i imatges enllaçats, i **Encara no dibuixat**.

## Moure's

:::mouse
| Per a | Feu això |
|---|---|
| Desplaçar | Arrossegueu amb qualsevol botó del ratolí |
| Zoom | Gireu la roda; el punt sota el punter es queda quiet |
| Ajusta | Feu doble clic, premeu {{key:F}}, o cliqueu {{ui:Ajusta}} |
:::

:::mac mouse
En un trackpad, desplaçar amb dos dits fa **zoom**, no desplaça. La pinça també fa zoom. Per desplaçar, cliqueu i arrossegueu.
:::

:::touch
Arrossegueu amb un dit per desplaçar. El zoom per pinça encara no està implementat per als dibuixos: toqueu {{ui:Ajusta}} per veure el full sencer, i useu un ratolí o un trackpad per fer zoom.
:::

## Blocs dinàmics

Un bloc dinàmic es dibuixa tal com el mostra el dibuix: cada bloc col·locat en l'estat de visibilitat amb què es va desar el dibuix («Planta» o «Alçat», «Pica simple» o «Pica doble»). A la dreta, **Blocs dinàmics** llista cadascun col·locat a l'espai model: quants n'hi ha col·locats, els estats que mostren, i cada estat que té el bloc. A {{ui:3D}}, cliqueu un bloc col·locat per veure **Bloc dinàmic**, **Estat mostrat** i **Altres estats** a Propietats. BimCraft no canvia d'estat.

## Encara no dibuixat

Alguns tipus d'objectes no es dibuixen en aquesta versió. Es compten sota **Encara no dibuixat** a la dreta («Aquestes parts del dibuix s'ometen de moment, no s'endevinen.»), perquè sapigueu que en falta alguna cosa. Es dibuixen les línies, polilínies, arcs, cercles, el·lipses, splines, trames i farciments sòlids, text i text multilínia, blocs amb atributs, cotes, línies de crida i multicrides, taules, imatges i finestres gràfiques. Les cares 3D, les malles poliface i les malles de polígons es dibuixen com les seves arestes vistes des de dalt; canvieu a {{ui:3D}} per veure-les com a superfícies.

Un DXF binari no s'obre: BimCraft ho diu. Torneu-lo a desar com a DXF ASCII, o com a DWG, des del programa que el va fer.

## Errors habituals

- **El dibuix sembla buit.** Algunes capes poden estar apagades o congelades al mateix dibuix; comencen desmarcades a {{ui:Capes}}. Cliqueu {{ui:Activa-ho tot}}. Si l'estat diu «*nom* és un dibuix buit: no conté línies, text ni blocs.», no hi ha res.
- **Un full mostra un marc buit.** El full pot dependre de dibuixos enllaçats. Vegeu [Troba dibuixos i imatges enllaçats](topic:dwg-linked-files).
- **El text es veu una mica diferent.** BimCraft dibuixa el text amb una tipografia sans-serif estreta, no amb les tipografies del dibuix, de manera que el text pot ser una mica més ample o més estret que al programa que el va fer.
- **«*nom* no s'ha pogut llegir. Potser està malmès, o desat en un format que el lector encara no gestiona.»** El parèntesi final indica el codi de format del fitxer. Deseu-lo des del programa que el va fer com a DWG més antic o com a DXF, i torneu-ho a provar.
- **Esperar mesurar, dibuixar o editar.** BimCraft només visualitza dibuixos. Cliqueu {{ui:Edita a CadCraft}} per obrir el mateix fitxer a l'aplicació de delineació de CadCraft, que l'edita i en desa una còpia com a DWG o DXF. El fitxer original no canvia, i els dibuixos enllaçats es queden a BimCraft. El botó només apareix on teniu CadCraft obert.

## Següent

- [Visualitza un dibuix DWG o DXF en 3D](topic:dwg-in-3d)
- [Treballa amb capes i fulls](topic:dwg-layers-sheets)
- [Revisa un dibuix en vista d'impressió](topic:print-view)
