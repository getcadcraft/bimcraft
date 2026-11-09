---
title: Fitxers que BimCraft obre i desa
summary: Cada format que BimCraft obre, què conserva, què desa, on van els fitxers desats, i què canvia entre navegadors i quan estàs sense connexió.
keywords: formats, obre, desa, exporta, baixa, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, puja, privadesa, mida del fitxer
from: a7275dbf
---

BimCraft llegeix fitxers del teu ordinador, en la pestanya del navegador. **No es puja res** a CadCraft ni a ningú més. Quan desa, BimCraft ofereix al navegador un fitxer nou per baixar; mai no sobreescriu un fitxer que hagis obert.

## Què obre

| Format | Extensions | Què obtens |
|---|---|---|
| IFC | `.ifc` | El model en 3D, les plantes, el recompte d'elements i les propietats de cada element. Es poden canviar els noms, les etiquetes i els valors de propietat individuals. |
| Fitxers de projecte i de família | `.rvt` `.rfa` `.rte` `.rft` | Una fitxa del fitxer: versió, compilació, treball compartit, informació del projecte, paràmetres de família, fitxers enllaçats i la imatge de previsualització. Sense 3D. |
| DWG | `.dwg` | El dibuix en 2D: espai model, cada full, capes, dibuixos enllaçats, imatges i vista de traçat. També l'espai model en 3D. Els formats d'AutoCAD de 2000 a 2018 són els que s'han verificat. |
| DXF | `.dxf` | El mateix que DWG. |
| STEP | `.step` `.stp` | Una peça, un equip o el model d'un proveïdor (AP203, AP214, AP242) en 3D: cada sòlid esdevé un element (un proxy d'element de construcció) d'un petit model IFC en una planta, llegit com a triangles a la seva mida real, i un muntatge amb cada peça on la col·loca el fitxer. A partir d'aquí funciona com qualsevol IFC: propietats, seccions, mesura, desa com a IFC. Els colors i l'arbre de muntatge no es llegeixen. |
| Núvols de punts | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | L'escaneig a la vista 3D, al costat d'un model o sol: vegeu [Mostra un núvol de punts al costat del model](topic:point-clouds). |
| Paquet de projecte | `.ccbundle.zip` | El model amb les seves vistes, disposicions i grups de propietats: vegeu [Obre un paquet de projecte](topic:open-project-bundle). |
| Una carpeta | qualsevol | Un informe de cada model, dibuix i paquet de projecte que hi hagi. Qualsevol IFC, model, dibuix o paquet de l'informe s'obre amb un clic. |

[Què llegeix BimCraft de cada format](topic:file-formats) ho detalla.

BimCraft decideix què és un fitxer mirant-ne els primers bytes a més del nom, de manera que un fitxer de projecte amb una extensió poc habitual encara s'obre com a fitxa.

### No s'obre

- `.ifczip` i `.ifcxml`: BimCraft diu ".ifczip encara no és compatible. Desa o exporta el model com a fitxer .ifc normal." Descomprimeix el `.ifczip` (conté un `.ifc` normal) o torna a exportar com a IFC normal.
- Els dibuixos DGN apareixen a l'informe d'una carpeta, però no s'obren.
- Els PDF, les imatges i els fitxers d'oficina no s'obren per si sols. Les imatges es fan servir com a imatges dins d'un DWG, i {{ui:Build}} › {{ui:From a drawing…}} converteix les pàgines d'un PDF o d'un escaneig en murs: vegeu [Murs a partir d'un conjunt de plànols](topic:walls-from-plans).

## Què desa

| Hi fas clic a | Obtens | On |
|---|---|---|
| {{ui:Save as IFC}} | Un fitxer IFC nou amb les teves edicions, anomenat "*nom original* (edited).ifc" | La carpeta de baixades del navegador |
| {{ui:Download CSV}} al calendari d'equips | Un CSV dels elements de la llista, anomenat "*nom del dibuix* equipment.csv" | La carpeta de baixades del navegador |

Altres coses es desen on es fan, cadascuna en el seu propi tema: {{ui:USD}} ([Exporta el model com a USD](topic:usd)), {{ui:Collada}} ([Exporta el model com a Collada o per a Google Earth](topic:collada): els .dae i els .kmz de Google Earth), el .glb de {{ui:For rendering}}, les imatges renderitzades, els fulls i els plànols com a PDF, els calendaris i les llistes com a CSV, les incidències BCF, el full de càlcul COBie, els fitxers de família, i els escanejos registrats com a LAS o E57. BimCraft no desa fitxers DWG, DXF ni de projecte, i mai no canvia els fitxers que obres.

:::chromium
Chrome i Edge desen les baixades a la carpeta que tinguin configurada, normalment Baixades. Per a què et demani on desar cada fitxer, activa "Pregunta on desar cada fitxer abans de baixar-lo" a la configuració de baixades del navegador.
:::

:::firefox
Firefox desa a la carpeta Baixades tret que l'hagis configurat com a "Pregunta sempre on vols desar els fitxers" a la seva configuració.
:::

:::safari
Safari desa a Baixades tret que triïs una altra carpeta a **Safari > Configuració > General > Ubicació de baixada de fitxers**.
:::

## Desar una segona vegada

Cada desada baixa el model complet amb **totes les edicions des que l'has obert**, no només les edicions fetes després de l'última desada. La llista de {{ui:Changes}} es buida de nou després de cada desada, de manera que no pots desfer més enrere d'una desada. Per començar de nou des de l'original, torna a obrir el fitxer original.

## Fitxers grans i memòria

- Els fitxers **IFC** es llegeixen sencers a la memòria de la pestanya, i la geometria 3D hi afegeix més memòria. Un model de diversos centenars de megabytes pot ser massa per a un portàtil. Per sobre de 1.5 milions de triangles, les arestes es desactiven per estalviar memòria ("Les arestes estan desactivades per a models molt grans").
- Els **fitxers de projecte** no es llegeixen sencers. BimCraft només llegeix les petites parts que necessita, d'uns 40 KB a 100 KB sigui quina sigui la mida del fitxer, de manera que un model central de 500 MB en una unitat de xarxa s'obre en un moment.
- Els fitxers **DWG** i **DXF** es llegeixen sencers. Un dibuix molt gran mostra "Aquest dibuix és molt gran; només se'n mostra una part".
- Les **carpetes** de fins a 20,000 fitxers s'obren. Només es llegeixen els pocs kilobytes que necessita cada fitxa de model.

Vegeu [Navegadors, dispositius i memòria](topic:platforms) per a més informació.

## En línia i fora de línia

Obrir fitxers mai no necessita Internet. Un lector es carrega des del lloc la primera vegada que el necessites: el motor IFC, la primera vegada que obres un model IFC ("S'està iniciant el motor IFC…"). Els lectors de DWG i DXF formen part de l'aplicació.

:::offline
No hi ha connexió. Si el botó de la barra de l'aplicació diu {{ui:Offline ready}}, tots els formats s'obren com de costum. Si no, un model IFC no es pot obrir tret que ja n'hagis obert un en aquesta pestanya: torna a connectar-te primer. Vegeu [En línia i fora de línia](topic:online-offline).
:::

Per fer servir BimCraft sense connexió, fes clic a {{ui:Save for offline}} a la barra de l'aplicació mentre tinguis connexió i espera {{ui:Offline ready}}. La còpia desada ocupa uns 33 MB; inclou el motor IFC, de manera que els models IFC també s'obren sense connexió. [Treballar sense connexió](common:offline) explica les còpies desades en general.

## Desada al núvol

La desada al núvol encara no està disponible. Desa les còpies editades al teu ordinador o al servidor de fitxers de la teva oficina, com faries amb qualsevol altre fitxer. Vegeu [Els teus fitxers](common:your-files).
