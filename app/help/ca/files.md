---
title: Fitxers que BimCraft obre i desa
summary: Cada format que BimCraft obre, què conserva, què desa, on van els fitxers desats, i què canvia entre navegadors i quan no hi ha connexió.
keywords: formats, obre, desa, exporta, baixa, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, puja, privadesa, mida del fitxer
from: a1f0161b
---

BimCraft llegeix els fitxers del vostre ordinador, a la pestanya del navegador. **No es puja res** a CadCraft ni a ningú més. Quan deseu, BimCraft lliura al navegador un fitxer nou per baixar; mai no sobreescriu un fitxer que hàgiu obert.

## Què obre

| Format | Extensions | Què obteniu |
|---|---|---|
| IFC | `.ifc` | El model en 3D, les plantes, el recompte d'elements i les propietats de cada element. Els noms, les etiquetes i els valors d'una sola propietat es poden canviar. |
| Fitxers de projecte i de família | `.rvt` `.rfa` `.rte` `.rft` | Una fitxa del fitxer: versió, compilació, treball compartit, informació del projecte, paràmetres de família, fitxers enllaçats i la imatge de vista prèvia. Sense 3D. |
| DWG | `.dwg` | El dibuix en 2D: espai model, cada full, capes, dibuixos enllaçats, imatges i vista d'impressió. També l'espai model en 3D. Són els formats d'AutoCAD de 2000 a 2018 els que s'han comprovat. |
| DXF | `.dxf` | El mateix que DWG. |
| STEP | `.step` `.stp` | Una peça, un equip o un model d'un proveïdor (AP203, AP214, AP242) en 3D: cada sòlid esdevé un element (un intermediari d'element de construcció) d'un petit model IFC en una sola planta, es llegeix com a triangles a la seva mida real, i un conjunt amb cada peça on la situa el fitxer. A partir d'aquí funciona com qualsevol IFC: propietats, seccions, mesura, desa com a IFC. Els colors i l'arbre del conjunt no es llegeixen. |
| Núvols de punts | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | L'escaneig a la vista 3D, al costat d'un model o sol: vegeu [Mostra un núvol de punts al costat del model](topic:point-clouds). |
| Paquet de projecte | `.ccbundle.zip` | El model amb les seves vistes, presentacions i grups de propietats: vegeu [Obre un paquet de projecte](topic:open-project-bundle). |
| Una carpeta | qualsevol | Un informe de cada model, dibuix i paquet de projecte que hi hagi. Qualsevol IFC, model, dibuix o paquet de l'informe s'obre amb un clic. |

[Què llegeix BimCraft de cada format](topic:file-formats) entra en detall.

BimCraft decideix què és un fitxer mirant-ne els primers bytes a més del nom, així que un fitxer de projecte amb una extensió poc habitual s'obre igualment com a fitxa.

### No s'obren

- `.ifczip` i `.ifcxml`: BimCraft diu ".ifczip encara no és compatible. Desa o exporta el model com a fitxer .ifc simple." Descomprimiu el `.ifczip` (conté un `.ifc` simple) o exporteu de nou com a IFC simple.
- Els dibuixos DGN apareixen en un informe de carpeta però no s'obren.
- Els PDF, les imatges i els fitxers d'oficina no s'obren per si sols. Les imatges s'usen com a imatges dins d'un DWG, i {{ui:Compilació}} › {{ui:Des d'un dibuix…}} converteix les pàgines d'un PDF o d'un escaneig en murs: vegeu [Murs a partir d'un conjunt de plànols](topic:walls-from-plans).

## Què desa

| Feu clic a | Obteniu | On |
|---|---|---|
| {{ui:Desa com a IFC}} | Un fitxer IFC nou amb les vostres edicions, anomenat "*nom original (edited).ifc*" | La carpeta de baixades del navegador |
| {{ui:Baixa el CSV}} a la llista d'equips | Un CSV dels elements de la llista, anomenat "*nom del dibuix equipment.csv*" | La carpeta de baixades del navegador |

Altres coses es desen on es fan, cadascuna al seu tema: {{ui:USD}} ([Exporta el model en USD](topic:usd)), el .glb de {{ui:Per a renderitzat}}, les imatges renderitzades, els fulls i els plànols en PDF, els quadres i les llistes en CSV, les incidències BCF, el full de càlcul COBie, els fitxers de família, i els escanejos registrats com a LAS o E57. BimCraft no desa fitxers DWG, DXF ni de projecte, i mai no canvia els fitxers que heu obert.

:::chromium
Chrome i Edge desen les baixades a la carpeta definida a la seva configuració, normalment Baixades. Per ser preguntat on desar cada fitxer cada vegada, activeu "Pregunta on desar cada fitxer abans de baixar-lo" a la configuració de baixades del navegador.
:::

:::firefox
Firefox desa a la carpeta Baixades tret que l'hàgiu configurat per "Pregunta sempre on desar els fitxers" a la seva configuració.
:::

:::safari
Safari desa a Baixades tret que trieu una altra carpeta a **Safari > Configuració > General > Ubicació de les baixades de fitxers**.
:::

## Desar una segona vegada

Cada desament baixa tot el model amb **totes les edicions des que l'heu obert**, no només les edicions fetes després de l'últim desament. La llista {{ui:Canvis}} es buida de nou després de cada desament, així que no podeu desfer més enllà d'un desament. Per tornar a començar des de l'original, torneu a obrir el fitxer original.

## Fitxers grans i memòria

- Els fitxers **IFC** es llegeixen completament a la memòria de la pestanya, i la geometria 3D ocupa més memòria a sobre. Un model de diverses centenes de megabytes pot ser massa per a un portàtil. Per sobre d'1.5 milions de triangles, les arestes es desactiven per estalviar memòria ("Les arestes estan desactivades per als models molt grans").
- Els fitxers de **projecte** no es llegeixen sencers. BimCraft només llegeix les petites parts que necessita, d'uns 40 KB a 100 KB, per gran que sigui el fitxer, de manera que un model central de 500 MB en una unitat de xarxa s'obre en un instant.
- Els fitxers **DWG i DXF** es llegeixen completament. Un dibuix molt gran mostra "Aquest dibuix és molt gran; només se'n mostra una part."
- Les **carpetes** de fins a 20,000 fitxers s'obren. Només es llegeixen els pocs kilobytes que necessita cada fitxa de model.

Vegeu [Navegadors, dispositius i memòria](topic:platforms) per a més informació.

## En línia i fora de línia

Obrir fitxers mai no necessita internet. Un lector es carrega des del lloc la primera vegada que el necessiteu: el motor IFC, la primera vegada que obriu un model IFC ("S'està iniciant el motor IFC…"). Els lectors de DWG i DXF formen part de l'aplicació.

:::offline
Esteu fora de línia. Si el botó de la barra d'aplicació diu {{ui:Disponible sense connexió}}, tots els formats s'obren com de costum. Si no, un model IFC no es pot obrir tret que ja n'hi hagi un d'obert en aquesta pestanya: torneu a connectar primer. Vegeu [En línia i fora de línia](topic:online-offline).
:::

Per usar BimCraft sense connexió, feu clic a {{ui:Desa per fer-lo servir sense connexió}} a la barra d'aplicació mentre teniu connexió, i espereu que aparegui {{ui:Disponible sense connexió}}. La còpia desada ocupa uns 33 MB; inclou el motor IFC, de manera que els models IFC també s'obren fora de línia. [Treballar fora de línia](common:offline) explica en general les còpies desades.

## Desament al núvol

El desament al núvol encara no està disponible. Deseu les còpies editades al vostre ordinador o al servidor de fitxers de l'oficina, com faríeu amb qualsevol altre fitxer. Vegeu [Els vostres fitxers](common:your-files).
