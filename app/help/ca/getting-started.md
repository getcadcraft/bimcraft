---
title: Primers passos amb BimCraft
summary: Què fa BimCraft avui, com obrir el primer model, mirar-lo en 3D, canviar un valor i desar una còpia.
keywords: primers passos, primera execució, obre, ifc, rvt, dwg, inici ràpid, introducció, visor, bim
from: fc2dea19
---

BimCraft és l'aplicació de models d'edificis de la família CadCraft. En aquesta versió **obre, llegeix i inspecciona** fitxers d'edificis, i **edita les dades dels models IFC**. Encara no dibuixa ni modela elements nous. Penseu-hi com un visor i comprovador de models que també us deixa corregir noms, etiquetes i valors de propietats en un fitxer IFC.

Què obre:

| Fitxer | Què obteniu |
|---|---|
| IFC (`.ifc`) | El model complet en 3D: òrbita, plantes, propietats dels elements, i edició de noms i valors de propietats |
| Fitxers de projecte i de família (`.rvt`, `.rfa`, `.rte`, `.rft`) | Una fitxa del fitxer: la versió en què es va desar, la informació del projecte, la imatge de vista prèvia i els fitxers enllaçats. Sense 3D. |
| DWG i DXF | El dibuix en 2D: espai model i cada full, capes, dibuixos enllaçats, vista d'impressió, i un quadre d'equips per als dibuixos de restauració etiquetats |
| Una carpeta de projecte | Un informe de cada model de la carpeta: còpies de seguretat, enllaços, còpies danyades, i un suggeriment de quin fitxer obrir primer |

Tot passa al vostre navegador, al vostre ordinador. **No es puja res.** Vegeu [Fitxers que BimCraft obre i desa](topic:files) per als detalls.

## Obriu BimCraft

1. Obriu BimCraft en un navegador actual. Chrome, Edge, Firefox i Safari funcionen tots; [Navegadors, dispositius i memòria](topic:platforms) enumera les diferències.
2. Espereu la pantalla buida que diu "Obre un model d'edifici."

:::note
BimCraft funciona al navegador, i a l'escriptori dins de CadCraft Studio, juntament amb les altres aplicacions. El desament al núvol encara no està disponible: obriu fitxers del vostre ordinador i desau les còpies de nou allà.
:::

## Obriu el primer model

La manera més ràpida de veure què fa BimCraft és un fitxer IFC.

1. Feu clic a {{ui:Trieu un fitxer}} al centre de la pantalla.
2. Trieu un fitxer `.ifc` a {{pick:mac=Finder|windows=File Explorer|linux=el vostre gestor de fitxers}} i confirmeu.
3. Espereu mentre la línia d'estat de la part inferior de la pantalla diu "S'està iniciant el motor IFC…", i després "Construint la geometria".

Hauríeu de veure el model en 3D al mig, un tauler {{ui:Fitxer}} i una llista {{ui:Plantes}} a l'esquerra, i un tauler {{ui:Propietats}} buit a la dreta. La línia d'estat acaba amb "Obert" i el nombre d'elements.

:::tip
També podeu arrossegar un fitxer des de {{pick:mac=Finder|windows=File Explorer|linux=el vostre gestor de fitxers}} directament a la pàgina. La pantalla mostra "Deixa-ho anar per obrir" mentre arrossegueu.
:::

:::offline
El motor IFC es carrega des del lloc la primera vegada que obriu un model IFC, tret que BimCraft s'hagi desat per usar fora de línia. Els dibuixos DWG i DXF, els fitxers de projecte i les carpetes no necessiten res més: els seus lectors formen part de l'aplicació. Si el botó de la barra d'aplicació diu {{ui:Disponible sense connexió}}, tot s'obre fora de línia. Si no, els models IFC no s'obriran fins que torneu a connectar, tret que ja n'hi hagi un d'obert en aquesta pestanya. Vegeu [En línia i fora de línia](topic:online-offline).
:::

:::online
Aneu a algun lloc sense connexió? Feu clic a {{ui:Desa per fer-lo servir sense connexió}} a la barra d'aplicació i espereu {{ui:Disponible sense connexió}}. La còpia desada (uns 11 MB) inclou el motor IFC. Vegeu [Treballar fora de línia](common:offline).
:::

## Mireu al voltant

:::mouse
1. Arrossegueu amb el botó esquerre del ratolí per orbitar al voltant del model.
2. Desplaceu la roda del ratolí per fer zoom.
3. Arrossegueu amb el botó dret del ratolí per desplaçar. En el trackpad d'un Mac, manteniu premut {{key:Shift}} i arrossegueu.
4. Premeu {{key:F}} o feu clic a {{ui:Ajusta}} per tornar a veure tot el model.
:::

:::touch
1. Arrossegueu amb un dit per orbitar.
2. Pinceu amb dos dits per fer zoom, i moveu els dos dits junts per desplaçar.
3. Toqueu {{ui:Ajusta}} per tornar a veure tot el model.
:::

## Feu una cosa real: corregiu una etiqueta

1. Feu clic a un mur, una porta o qualsevol element del model. Es torna blau, i les seves propietats apareixen a la dreta.
2. Al tauler {{ui:Propietats}}, feu clic al valor al costat de **Etiqueta**.
3. Escriviu la nova etiqueta i premeu {{key:Enter}}.
4. Mireu la secció {{ui:Canvis}} que s'ha obert a l'esquerra: el vostre canvi apareix amb el valor antic i el nou.

## Desa una còpia

1. Feu clic a {{ui:Desa com a IFC}} a la secció {{ui:Canvis}}, o premeu {{key:Mod+S}}.
2. Cerqueu el fitxer nou a la carpeta de baixades. Té el nom de l'original amb " (edited)" afegit, per exemple `Clinic (edited).ifc`.

L'original mai no es canvia. [Canvia les propietats IFC i desa una còpia editada](topic:edit-ifc-properties) explica l'edició amb detall.

## On anar després

- [La pantalla de BimCraft](topic:workspace): cada tauler pel seu nom.
- [Des d'altres programes BIM i de dibuix](topic:coming-from): què sembla diferent si esteu acostumats a Revit.
- [Obre tota una carpeta de projecte](topic:open-project-folder): indiqueu a BimCraft una carpeta de projecte i deixeu que ordeni els fitxers.
- [Mostra un dibuix DWG o DXF](topic:view-dwg): fulls, capes i vista d'impressió.
