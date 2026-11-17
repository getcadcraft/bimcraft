---
title: Mostra un núvol de punts al costat del model
summary: Obriu un escaneig làser (LAS, LAZ, E57, PLY, PCD, PTX, PTS o XYZ) a la vista 3D sol o amb un model IFC, acoloreix-lo, talla'n una capa fina, mesura fins als seus punts i passa-l'ho a l'aplicació de dibuix per calcar les línies tal com s'han construït.
keywords: núvol de punts, escaneig làser, escaneig, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, tal com s'ha construït, topografia, registre, tall, tall de planta, ajust, mesura, calca, escaneig a bim
from: d0a3e740
---

## Què farà

Mireu un escaneig làser d'un edifici al costat del seu model: comproveu que el que s'ha construït coincideix amb el projecte, mesureu entre punts escanejats i feu un tall fi per llegir-hi murs, portes i columnes.

## Passos

1. Obriu el núvol: feu clic a {{ui:Oberta}} per un fitxer `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` o `.xyz`, o deixeu-lo caure a la pàgina (vegeu el tema sobre els formats de núvol de punts per saber què aporta cadascun, i què exportar del programari propi d'un escàner). Amb un model obert, el núvol s'uneix al model a la vista 3D; obrir un núvol mai no tanca el model ni els seus canvis sense desar. Sense model, el núvol s'obre sol.
2. La barra del núvol apareix sota la barra d'eines. Diu quants punts es mostren i quants té el fitxer.
3. Trieu {{ui:Colora per}}: els colors propis del fitxer (quan l'escàner els ha desat), {{ui:Alçada}}, {{ui:Intensitat}}, {{ui:Classe}} (classes LiDAR com a terra, vegetació i edifici) o {{ui:Un sol color}}. {{ui:Mida}} fa els punts més grossos o més petits.
4. Feu clic a {{ui:Planta}} sota {{ui:Tall}} per conservar només una banda fina d'1.2 m per sobre del punt més baix, vist des de dalt: els murs, les obertures de portes i les columnes es llegeixen com una planta. {{ui:Davant}} i {{ui:Lateral}} tallen bandes verticals per a alçats i seccions. Moveu la banda amb {{ui:A}}, i canvieu {{ui:Gruix}} (metres). {{ui:Desactivat}} torna a mostrar tot el núvol.
5. Feu clic a {{ui:Mesura}} a la barra d'eines. El cursor s'ajusta als punts del núvol (l'etiqueta diu "núvol de punts"), de manera que podeu mesurar de mur a mur dins del tall, o des d'un element del model fins a l'escaneig. Un cantó o una aresta del model a l'abast encara guanya.
6. Amb {{ui:Mesura}} › {{ui:Ubicació}}, un punt del núvol dona la seva latitud i longitud segons el propi sistema de coordenades del núvol, quan el fitxer n'indica un.
7. {{ui:Amaga}} amaga el núvol un moment; {{ui:Suprimeix}} el treu. {{ui:Mostra}} › {{ui:Núvol de punts}} amaga o mostra la barra.

## On va el núvol

{{ui:Situa}} a la barra indica com s'alinea el núvol amb el model:

- **Coordenades del model**: els números del núvol són els propis del model (un escaneig registrat amb les coordenades del projecte).
- **Coordenades de mapa**: el model té una conversió de mapa (IfcMapConversion) i el núvol és al mateix sistema projectat: el núvol es col·loca mitjançant aquesta conversió. Si tots dos indiquen sistemes diferents, la línia d'estat ho diu.
- **Centrat al model**: quan cap de les dues opcions no situa el núvol a prop del model, el seu centre va al centre del model i el seu punt més baix al terra del model. Trieu una altra opció per canviar-ho.

Quan el fitxer no indica les seves unitats, BimCraft llegeix metres i ofereix {{ui:Unitats}} a la barra.

## Calca les línies tal com s'han construït

Feu clic a {{ui:Calca a CadCraft}} per passar el núvol a l'aplicació de dibuix en una pestanya nova. Hi queda obert sota el dibuix, on un tall de planta i la referència a objectes permeten dibuixar els murs sobre l'escaneig. Vegeu el tema de CadCraft sobre núvols de punts.

## Quants punts

Un escaneig pot tenir centenars de milions de punts. BimCraft llegeix cada punt una vegada i en guarda una part uniforme per dibuixar: {{ui:Mostra}} a la barra en fixa la quantitat (1, 2, 5 o 10 milions). Més punts necessiten més memòria i una targeta gràfica més ràpida. Els recomptes per classe LiDAR són de tots els punts del fitxer.

:::note
Els fitxers es llegeixen en aquest ordinador; no es puja res. Es llegeixen LAS 1.0–1.4 i LAZ (fitxers LAZ de fins a 1 GB, mantinguts a la memòria mentre es llegeixen); els fitxers E57 de fins a 6 milions de punts i 512 MB per ara (per a escanejos més grans: exporteu LAS o LAZ); PLY, PCD i PTX completament; els núvols de text són `x y z`, amb columnes de color (`r g b`) i d'intensitat quan hi són.
:::

## Diversos escanejos

Els escanejos presos des de diferents posicions es poden registrar en un sol sistema, refinar amb ICP i exportar com un sol LAS o E57: vegeu [Registra diversos escanejos en un de sol](topic:register-scans).
