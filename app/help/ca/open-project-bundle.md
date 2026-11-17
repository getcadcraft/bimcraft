---
title: Obre un paquet de projecte
summary: Un paquet de projecte és un únic zip amb un model, les seves vistes, les seves presentacions i els seus grups de propietats. Obriu-lo, mostreu una vista amb la seva planta i capes, obriu una presentació i vegeu les propietats als grups del projecte.
keywords: paquet, paquet de projecte, ccbundle, zip, vistes, mapa de vistes, presentacions, llibre de presentacions, combinació de capes, grups de propietats, estàndards, pln, plantilla
from: b5b86e8f
---

## Què hi fareu

Obriu un **paquet de projecte** (`.ccbundle.zip`) i treballeu amb el projecte tal com estava organitzat: les seves vistes, les seves presentacions i els seus grups de propietats, sobre el model.

Un paquet conté:

- el model en IFC,
- les presentacions en PDF i DWG,
- una llista del que IFC deixa fora: les vistes (cadascuna amb la seva planta, combinació de capes i escala), les presentacions i els dibuixos col·locats a sobre, les definicions de propietats als seus grups, les classificacions i els estàndards com les capes, els jocs de plomes, els tipus de línia, els farciments, les superfícies i els compostos.

Els paquets els escriu un script de codi obert que s'executa dins d'Archicad i demana al mateix Archicad aquestes llistes. BimCraft mai no llegeix directament fitxers `.pln` ni `.tpl`; vegeu [Obre fitxers de projecte .pln i .pla](topic:pln-project-files).

## Creeu un paquet

El script és una versió de prova: encara no s'ha provat en totes les versions d'Archicad. Baixeu-lo de [github.com/getcadcraft/bim-project-bundle](https://github.com/getcadcraft/bim-project-bundle). Necessiteu Archicad 24 o posterior i Python 3.8 o posterior; no cal instal·lar res més.

1. Deseu `archicad_bundle.py` en una carpeta, per exemple `C:\cc-bundle`.
2. A Archicad, obriu el projecte i creeu un joc de publicació anomenat exactament **CadCraft bundle**: la vista 3D com a IFC, cada presentació com a PDF, i cada presentació de nou com a DWG, publicats en fitxers al disc en una sola carpeta plana.
3. Amb el projecte obert, executeu una vegada `python archicad_bundle.py --probe --out .`. Només llegeix i escriu `probe.json`.
4. Executeu `python archicad_bundle.py --out . --translator "IFC4 Reference View"` (useu el traductor IFC que heu triat). Archicad publica el joc i el script escriu `<project>.ccbundle.zip`.

Si la publicació amb el script falla, publiqueu el joc a mà i executeu `python archicad_bundle.py --out . --no-publish --files <folder>\*.ifc <folder>\*.pdf <folder>\*.dwg`. El README del repositori té totes les opcions. Si falta alguna cosa, obriu-hi una incidència i adjunteu `probe.json`.

## Obriu un paquet

1. Feu clic a {{ui:Trieu un fitxer}}, o deixeu anar el `.ccbundle.zip` sobre BimCraft. En una carpeta que hàgiu obert amb {{ui:Obre una carpeta}}, els paquets apareixen a **Paquets de projecte**; feu clic al nom d'un.
2. El model s'obre com qualsevol IFC, i la secció **Paquet de projecte** apareix a l'esquerra, sota les dades del fitxer.

No es puja res: el paquet es llegeix al vostre ordinador, un fitxer cada vegada, de manera que un model gran no es copia dues vegades.

## Mostra una vista

A **Vistes**, les vistes s'agrupen segons les carpetes que tenien al projecte. Feu clic al nom d'una vista:

- **Un plànol de planta** mostra només la seva planta, vista des de dalt.
- **La seva combinació de capes** amaga els elements de les capes que amaga aquesta combinació. La línia d'estat indica quants elements ha amagat.
- **La seva escala** es mostra al costat del nom i a la línia d'estat.
- **Una vista 3D** mostra totes les plantes.

Per tornar a mostrar-ho tot, useu {{ui:Mostra-ho tot}} a {{ui:Mostra}} i marqueu totes les plantes.

:::note
BimCraft troba les capes a través de les assignacions de capes del fitxer IFC. Si l'IFC s'ha exportat sense elles, una combinació de capes no amaga res, i la línia d'estat indica 0 elements amagats.
:::

## Obre una presentació

A **Presentacions**, cada presentació mostra el seu número, nom, mida de paper i les vistes col·locades a sobre.

- **PDF** desa el PDF de la presentació des del paquet.
- **DWG** obre el dibuix de la presentació a la vista 2D. Feu clic a qualsevol vista per tornar al model.
- **Obre a …** envia el fitxer de la presentació a l'aplicació que hi treballa, en una pestanya nova: el PDF a MarkupCraft, el DWG a CadCraft. Només apareix quan aquesta aplicació és oberta al costat de BimCraft. El fitxer es llegeix del paquet mentre es carrega la pestanya, i no es puja res.

Una presentació sense cap dels dos diu **No hi ha cap fitxer al paquet**.

## Vegeu les propietats als grups del projecte

Trieu un element. **Grups de propietats** mostra les seves propietats sota els grups que ha definit el projecte, identificades pel conjunt de propietats i el nom que la definició dona per a IFC, o si no pel seu nom. La resta es queden a {{ui:Propietats}} com de costum. **Definicions de propietats** llista cada definició amb el seu grup, tipus i nom IFC.

## Estàndards i notes

- **Estàndards** compta les capes, les combinacions de capes, els jocs de plomes, els tipus de línia, els farciments, les superfícies, els compostos i els materials del paquet.
- **Notes** llista el que el script no ha pogut obtenir d'aquella versió d'Archicad, qualsevol camp que BimCraft no ha pogut llegir, i qualsevol fitxer que el paquet anomena però no conté.

## Resolució de problemes

- **"… és un zip però no un paquet de projecte."** El zip no té `manifest.json`. Descomprimiu-lo i obriu el `.ifc` que conté.
- **"… és un paquet de projecte més nou del que llegeix aquest BimCraft."** Actualitzeu BimCraft.
- **"… no conté el model que indica el seu manifest."** El zip s'ha tallat o editat. Torneu a crear el paquet.
- **Una vista mostra totes les plantes.** La seva planta no és a l'IFC del model (la línia d'estat ho indica). Comproveu que l'exportació IFC incloïa aquella planta.

Vegeu també [Treball entre dos programes BIM](topic:two-bim-programs) i [Què llegeix BimCraft de cada format](topic:file-formats).
