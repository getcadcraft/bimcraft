---
title: Comprova una carpeta per detectar còpies malmeses, enllaços que falten i restes
summary: Feu servir l'informe de la carpeta per trobar fitxers de model tallats, triar la còpia de seguretat completa més recent, veure quins enllaços falten i detectar fitxers de bloqueig i temporals.
keywords: comprovació de salut, malmès, corrupte, incomplet, truncat, còpia de seguretat, enllaços que falten, xref que falta, auditoria, restes, fitxers de bloqueig, dwl, bak, lliurament
from: 3025a539
---

## Què hi fareu

Comproveu una carpeta de projecte abans de lliurar-la o de començar a treballar-hi: és complet cada model, quina còpia de seguretat és l'última bona, i hi són tots els fitxers enllaçats?

## Passos: còpies malmeses

1. Obriu la carpeta del projecte. Vegeu [Obre una carpeta de projecte sencera](topic:open-project-folder).
2. Llegiu les notes sota el nom de la carpeta. «2 fitxers estan incomplets o no es poden llegir. Vegeu els models a continuació.» vol dir que hi ha alguna cosa a revisar.
3. A **Models**, mireu la columna **Estat**. **Complet** és correcte. Un «1 incomplet» en ambre vol dir que una còpia és dolenta però una altra és sana. Un **Incomplet** en vermell vol dir que no s'ha trobat cap còpia sana.
4. Obriu **Totes les … còpies** sota un model amb problemes. Hi surt el fitxer principal i cada còpia de seguretat numerada, la més recent primer, amb la mida, la data i l'estat.
5. Llegiu la nota de sobre de la llista, per exemple: «Tower.rvt és incomplet (183.2 MB, hauria de tenir almenys 214.0 MB). La fitxa mostra la còpia completa més recent, Tower.0012.rvt (3 de març de 2025).»
6. Cliqueu la còpia que voleu obrir. Només es poden clicar les còpies completes.

## Què fa la comprovació de salut

Cada còpia de cada model rep una comprovació ràpida de la seva capçalera, de 512 bytes cada una, de manera que fins i tot una carpeta de models grans es revisa en segons. Un fitxer que el seu propi índex apunta més enllà del final s'ha tallat mentre es copiava, pujava o sincronitzava. Un fitxer d'un disc al núvol que encara és «només en línia» té el mateix aspecte.

La fitxa de cada model es llegeix del fitxer principal quan és sà, i de la còpia de seguretat sana més recent quan no ho és.

## Passos: enllaços que falten

1. Busqueu la nota «*n* fitxers enllaçats no són en aquesta carpeta.» sota el nom de la carpeta.
2. Desplaceu-vos fins a **Fitxers enllaçats i referenciats**. Els enllaços que falten es llisten primer.
3. Llegiu la columna **Ubicació** de cada enllaç:
   - **En aquesta carpeta**: trobat a la ruta que va desar el model.
   - **Mateix nom trobat**: hi ha un fitxer amb el mateix nom en un altre lloc de la carpeta. Comproveu que és el correcte.
   - **Fitxer de biblioteca**: una taula de keynotes o de codis d'ensamblatge. Aquestes venen amb el programa a cada ordinador, així que no s'espera que siguin a la carpeta.
   - **No és en aquesta carpeta**: no s'ha trobat enlloc de la carpeta.
4. Llegiu **Utilitzat per** per veure quins models enllacen cada fitxer.

BimCraft cerca cada enllaç primer per la seva ruta relativa, després pel final de la ruta desada (així que `\\server\jobs\Tower\Cad\X-Refs\site.dwg` es troba a `X-Refs/site.dwg` quan heu triat la carpeta `Cad`), i després pel nom de fitxer en qualsevol lloc de la carpeta.

## Passos: restes

1. Desplaceu-vos fins a **Posats a part** al final de l'informe.
2. Llegiu les tres línies que poden aparèixer:
   - Carpetes de manteniment (`*_backup`, `*_log`, `Revit_temp`): no es llegeixen.
   - Restes de bloqueig, registre i còpia de seguretat: fitxers com `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp`, `.sv$`. Les deixen programes que s'han penjat o que estaven oberts quan es va copiar la carpeta. Normalment es poden suprimir sense problemes quan ningú no té els fitxers oberts.
   - Altres fitxers: tot el que BimCraft no llegeix.

## Errors habituals

- **Suprimir el fitxer principal malmès abans de desar una còpia bona.** Copieu primer la còpia de seguretat completa més recent i després tracteu el fitxer malmès.
- **Confiar cegament en «Mateix nom trobat».** Dos dibuixos diferents poden tenir el mateix nom. Obriu-ne tots dos si en teniu dubtes.
- **Pensar que un fitxer de biblioteca que falta és un problema.** Les taules de keynotes i de codis d'ensamblatge viuen amb el programa a cada ordinador.
- **El nombre de fitxers difereix entre navegadors.** A Firefox i Safari, {{ui:Obre una carpeta}} entrega cada fitxer, inclosos els que hi ha dins de les carpetes de manteniment, així que el recompte (i el límit de 20.000 fitxers) els inclou. En arrossegar la carpeta, se les salta, com fan Chrome i Edge. Per la resta, l'informe és el mateix.
