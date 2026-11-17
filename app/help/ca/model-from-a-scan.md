---
title: Model a partir d'un escaneig
summary: Pas a pas, des de l'escaneig làser fins als murs: obriu el núvol de punts al costat d'un edifici nou, alineu-lo amb un nivell i calqueu-ne els murs a la planta.
keywords: escaneig, escaneig làser, núvol de punts, tal com s'ha construït, edifici existent, topografia, calcar, escaneig a BIM, model a partir d'un escaneig, tall, alinear, escairar, LAS, LAZ, E57, PLY
from: ce3b9b37
---

## Què faràs

Dibuixeu un edifici existent a partir del seu escaneig làser: murs on els mostra l'escaneig, al nivell correcte, escairats entre ells.

## Passos

1. **Un edifici on dibuixar.** {{ui:File}} › {{ui:New building}}, amb tants nivells com tingui l'edifici (en podeu afegir més després, vegeu [El solar, l'edifici que hi ha a sobre i els seus nivells](topic:site-building-and-levels)). {{ui:Draw}} s'activa.
2. **L'escaneig.** {{ui:Show}} › {{ui:Point cloud}} i trieu el fitxer (LAS, LAZ, E57, PLY, PCD, PTX o XYZ: vegeu [Mostra un núvol de punts al costat del model](topic:point-clouds)). El núvol es mostra a la vista 3D, i la planta mostra el seu **tall**: els punts escanejats a 1200 mm (4 peus) per sobre del nivell, com a punts. Aquesta és l'alçada on els murs, les portes i les finestres es llegeixen millor.
3. **Alineu-lo amb el nivell.** Obriu el menú {{ui:Scan}} de la barra del model i feu clic a {{ui:Align its floor to this level}}: el núvol es mou amunt o avall fins que el terra escanejat quedi sobre el nivell mostrat. Comproveu que ara el tall travessa els murs.
4. **Escaireu-lo respecte de l'edifici.** {{ui:Scan}} › {{ui:Turn it square to the building}} gira el núvol perquè els murs del seu tall quedin al llarg dels eixos de la planta, de manera que els murs que dibuixeu amb {{key:Shift}} premut quedin alineats amb l'escaneig. Gira al voltant del centre dels murs que ha trobat, de manera que els arbres o un mur del veí capturats al tall no facin girar l'escaneig fora de lloc. Alineeu primer el terra: aleshores el tall travessa els murs.
5. **Calqueu els murs.** Trieu {{ui:Wall}} i feu clic al llarg dels punts: l'eina s'ajusta als punts escanejats (la marca d'ajust és un petit rombe) i també als murs que heu dibuixat. Un mur es dibuixa sobre la seva línia central; feu clic al mig de les dues files de punts que deixa un mur. Introduïu-ne el gruix triant abans el tipus de mur. Després afegiu les portes i les finestres on el tall mostri els buits.
6. **El nivell següent.** Trieu el nivell superior a la llista de nivells de la planta: el tall segueix l'alçada de tall del nivell. Torneu a alinear el terra amb aquest nivell només si els terres de l'escaneig no coincideixen amb els vostres nivells.

## Què hauríeu de veure

- El tall canvia quan canvieu de nivell, i un tall més gruixut ({{ui:Scan}} › {{ui:Gruix del tall}}) mostra més punts on l'escaneig és menys dens.
- {{ui:Scan}} › {{ui:Desfés l'alineació}} torna el núvol a on era col·locat quan es va obrir. Alinear-lo només el mou a la vista: no es desa al fitxer IFC, i els murs que heu dibuixat es queden on són. L'alineació va amb el núvol quan canvieu {{ui:Situa}} o {{ui:Unitats}}, o quan obriu un altre model.
- {{ui:Scan}} › {{ui:Show the slice on the plan}} amaga o mostra els punts.

:::tip
Escaneigs grans: la planta dibuixa fins a 60,000 punts del tall i la vista 3D uns quants milions del núvol sencer, tots dos triats de manera uniforme a través de l'escaneig, de manera que un fitxer gran es manté ràpid. Per calcar a l'aplicació de dibuix, useu {{ui:Calca a CadCraft}} de la barra del núvol.
:::
