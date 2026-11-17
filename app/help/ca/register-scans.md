---
title: Registra diversos escanejos en un de sol
summary: Col·loqueu escanejos presos des de diferents posicions en un mateix sistema mitjançant parells de punts escollits o dianes escrites, refineu-los amb ICP, deseu el registre com a projecte i exporteu el núvol registrat com a LAS o E57.
keywords: registre, escanejos, núvol de punts, icp, iterative closest point, dianes, parells de punts, transformació rígida, alinea, combina, e57, las, escaneig a bim
from: e8e270db
---

## Què farà

Diversos escanejos d'un mateix lloc (cadascun des de la seva posició de l'escàner) comencen amb les seves pròpies coordenades. Registreu-los: doneu a cada escaneig una sola col·locació perquè tots quedin en un mateix sistema, després deseu-ho com a projecte i escriviu el núvol registrat com un sol fitxer LAS o E57.

## Col·loca els escanejos

1. Obriu el diàleg ({{ui:Registra escanejos…}} al panell d'inici, o {{ui:Mostra}} › {{ui:Registra escanejos…}} quan hi hagi un model obert). {{ui:Afegeix escanejos…}} accepta fitxers LAS, LAZ, E57, PLY, PCD, PTX, PTS o XYZ, o deixeu-los caure sobre el diàleg. Els escanejos amb unitats diferents es rebutgen amb una nota: convertiu-ne un primer.
2. Trieu {{ui:Escaneig a moure}} i {{ui:Col·loca contra}}. La imatge mostra cada escaneig al sistema tal com és ara, cadascun d'un color: {{ui:Planta}}, {{ui:Davant}} o {{ui:Lateral}}; arrossegueu per desplaçar i useu la roda per fer zoom.
3. **Per parells de punts.** Feu clic a {{ui:Triar un parell}}, després a un punt de l'escaneig a moure, i després al mateix lloc en un altre escaneig (un cantó, una diana, el peu d'una columna). Feu-ho almenys tres cops, amb punts que no siguin en una mateixa línia i que estiguin separats. Feu clic a {{ui:Col·loca per parells}}: l'escaneig es col·loca amb un ajust de mínims quadrats, i **Restants** mostra quant falla encara cada parell. Un parell amb un número gran és una mala selecció: suprimiu-lo amb la creu i torneu a col·locar.
4. **Per dianes.** Si es coneixen les coordenades reals d'un punt (dianes topografiades), feu clic a {{ui:Triar i després escriure la diana}}, feu clic al punt al seu escaneig, i escriviu la X, la Y i la Z de la diana a la fila. Els parells i les dianes escrites es poden barrejar lliurement.

## Refina amb ICP

Els parells donen una col·locació aproximada. {{ui:Refina}} mou l'escaneig fins que les seves superfícies coincideixen amb les de l'altre: primer **punt a punt** i després **punt a pla**. La taula mostra cada pas amb el seu error i quants punts han coincidit; la línia de sobre dibuixa com baixa l'error. {{ui:Atura}} acaba l'execució després del pas en curs i conserva el que ha arribat a fer. {{ui:Desfés}} desfà tota l'execució (o la darrera col·locació); {{ui:Restableix}} torna l'escaneig a les seves coordenades del fitxer.

Per anar més ràpid en un portàtil, l'ICP treballa amb una part reduïda dels punts ({{ui:Punts utilitzats}}, de 5,000 a 60,000) i ignora les coincidències més llunyanes que {{ui:Distància màxima de coincidència}} (per defecte el 5% de la mida de l'escaneig, i es redueix a mesura que s'estabilitza). Primer cal una col·locació aproximada: els escanejos que gairebé no se solapen informen que no es poden fer coincidir. Les superfícies només planes o només rectes no poden fixar una posició al llarg d'elles mateixes; en aquest cas, afegiu parells.

## Desa i exporta

- {{ui:Desa el projecte}} escriu un petit fitxer `.ccscans.json`: el nom de cada escaneig, la mida i una empremta dels seus primers 64 KB, amb la seva transformació. No conté punts. {{ui:Obre el projecte…}} troba els fitxers d'escaneig a partir d'aquestes referències (els fitxers s'han d'haver afegit abans) i torna a posar cada transformació.
- {{ui:Exporta LAS}} i {{ui:Exporta E57}} escriuen un fitxer amb tots els escanejos a la seva posició registrada. Els punts dels originals no es reescriuen mai: la transformació s'aplica a la sortida. Amb {{ui:Llegeix tots els punts dels fitxers}} activat, cada fitxer es torna a llegir per a cada punt (fins a 20 milions per escaneig); desactivat, només s'escriuen els punts que es veuen al visor.
- {{ui:Mostra el núvol registrat}} (BimCraft) escriu el LAS i l'obre a la vista 3D al costat del model, com qualsevol altre núvol.

:::note
No es puja res. El registre treballa amb les unitats dels fitxers i manté els mil·límetres: un LAS s'escriu amb una escala que s'ajusta (fins a 0.1 mm), i un E57 amb dobles. Un sistema de coordenades només es passa al LAS quan tots els escanejos indiquen el mateix codi EPSG. L'escriptor E57 és propi; es comprova llegint els seus fitxers amb aquest lector i amb libE57Format.
:::
