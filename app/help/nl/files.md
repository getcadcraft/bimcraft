---
title: Bestanden die BimCraft opent en opslaat
summary: Elk formaat dat BimCraft opent, wat het bewaart, wat het opslaat, waar opgeslagen bestanden terechtkomen en wat er verandert tussen browsers en wanneer u offline bent.
keywords: formaten, openen, opslaan, exporteren, downloaden, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, uploaden, privacy, bestandsgrootte
from: a7275dbf
---

BimCraft leest bestanden op uw computer, in het browsertabblad. **Er wordt niets geüpload** naar CadCraft of naar iemand anders. Wanneer u opslaat, geeft BimCraft de browser een nieuw bestand om te downloaden; het overschrijft nooit een bestand dat u hebt geopend.

## Wat het opent

| Formaat | Extensies | Wat u krijgt |
|---|---|---|
| IFC | `.ifc` | Het model in 3D, verdiepingen, aantallen elementen en de eigenschappen van elk element. Namen, tags en afzonderlijke eigenschapswaarden kunnen worden gewijzigd. |
| Project- en familiebestanden | `.rvt` `.rfa` `.rte` `.rft` | Een bestandskaart: release, build, samenwerkingsmodus, projectinformatie, familieparameters, gekoppelde bestanden en de voorbeeldafbeelding. Geen 3D. |
| DWG | `.dwg` | De tekening in 2D: modelruimte, elk blad, lagen, gekoppelde tekeningen, afbeeldingen en de printweergave. Modelruimte ook in 3D. Formaten van AutoCAD 2000 tot 2018 zijn getest. |
| DXF | `.dxf` | Hetzelfde als DWG. |
| STEP | `.step` `.stp` | Een onderdeel, een stuk apparatuur of het model van een leverancier (AP203, AP214, AP242) in 3D: elk volume wordt één element (een proxy-bouwelement) van een klein IFC-model op één verdieping, gelezen als driehoeken op de juiste grootte, een samenstelling met elk onderdeel op de plaats waar het bestand het plaatst. Vanaf daar werkt het als elk IFC: eigenschappen, doorsneden, meten, opslaan als IFC. Kleuren en de samenstellingsboom worden niet gelezen. |
| Puntenwolken | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | De scan in de 3D-weergave, naast een model of op zichzelf: zie [Een puntenwolk naast het model tonen](topic:point-clouds). |
| Projectbundel | `.ccbundle.zip` | Het model met zijn weergaven, indelingen en eigenschapsgroepen: zie [Een projectbundel openen](topic:open-project-bundle). |
| Een map | elk | Een rapport van elk model, elke tekening en elke projectbundel erin. Elk IFC-, model-, tekening- of bundelbestand in het rapport opent met één klik. |

[Wat BimCraft uit elk formaat leest](topic:file-formats) wordt in detail beschreven.

BimCraft bepaalt wat een bestand is door naar de eerste bytes te kijken, en niet alleen naar de naam. Een projectbestand met een ongebruikelijke extensie wordt dus toch als bestandskaart geopend.

### Niet geopend

- `.ifczip` en `.ifcxml`: BimCraft meldt: ".ifczip wordt nog niet ondersteund. Sla het model op als gewoon .ifc-bestand of exporteer het opnieuw." Pak het `.ifczip`-bestand uit (het bevat een gewoon `.ifc`-bestand) of exporteer opnieuw als gewoon IFC.
- DGN-tekeningen worden vermeld in een maprapport, maar openen niet.
- PDF, afbeeldingen en kantoorbestanden openen niet op zichzelf. Afbeeldingen worden gebruikt als afbeeldingen binnen een DWG, en {{ui:Build}} › {{ui:Vanuit een tekening…}} zet de pagina's van een PDF of een scan om in wanden: zie [Wanden uit een set plattegronden](topic:walls-from-plans).

## Wat het opslaat

| U klikt op | U krijgt | Waar |
|---|---|---|
| {{ui:Opslaan als IFC}} | Een nieuw IFC-bestand met uw bewerkingen, genoemd "*oorspronkelijke naam* (edited).ifc" | De downloadmap van uw browser |
| {{ui:CSV downloaden}} in de apparatuurlijst | Een CSV van de items in de lijst, genoemd "*tekeningnaam* equipment.csv" | De downloadmap van uw browser |

Andere zaken worden opgeslagen waar ze zijn gemaakt, elk in een eigen onderwerp: {{ui:USD}} ([Het model exporteren als USD](topic:usd)), {{ui:Collada}} (.dae en de Google Earth .kmz: [Het model exporteren als Collada of voor Google Earth](topic:collada)), de .glb van {{ui:Voor renderen}}, gerenderde afbeeldingen, bladen en plattegronden als PDF, staten en lijsten als CSV, BCF-issues, het COBie-spreadsheet, familiebestanden en geregistreerde scans als LAS of E57. BimCraft slaat geen DWG-, DXF- of projectbestanden op, en het wijzigt de bestanden die u hebt geopend nooit.

:::chromium
Chrome en Edge slaan downloads op in de map die is ingesteld in hun instellingen, meestal Downloads. Om elke keer gevraagd te worden waar u elk bestand wilt opslaan, zet u "Vragen waar elk bestand moet worden opgeslagen voordat het wordt gedownload" aan in de downloadinstellingen van de browser.
:::

:::firefox
Firefox slaat op in de map Downloads, tenzij u in de instellingen hebt gekozen voor "Altijd vragen waar bestanden moeten worden opgeslagen".
:::

:::safari
Safari slaat op in Downloads, tenzij u onder **Safari > Instellingen > Algemeen > Downloadlocatie** een andere map kiest.
:::

## Opnieuw opslaan

Elke keer dat u opslaat, wordt het hele model gedownload met **elke bewerking sinds u het hebt geopend**, en niet alleen de bewerkingen na de laatste keer opslaan. De lijst {{ui:Wijzigingen}} begint na elke keer opslaan weer leeg, dus u kunt niet verder terug dan een opslag. Wilt u opnieuw beginnen vanaf het origineel, open dan het originele bestand opnieuw.

## Grote bestanden en geheugen

- **IFC**-bestanden worden volledig in het geheugen van het tabblad ingelezen, en de 3D-geometrie neemt daar bovenop nog meer geheugen in beslag. Een model van enkele honderden megabytes kan voor een laptop te veel zijn. Boven 1.5 miljoen driehoeken worden randen uitgeschakeld om geheugen te besparen ("Randen zijn uit voor zeer grote modellen").
- **Projectbestanden** worden niet volledig ingelezen. BimCraft leest alleen de kleine delen die nodig zijn, ongeveer 40 KB tot 100 KB, hoe groot het bestand ook is, dus een centraal model van 500 MB op een netwerkschijf opent in een moment.
- **DWG- en DXF-**bestanden worden volledig ingelezen. Een zeer grote tekening toont "Deze tekening is zeer groot; er wordt slechts een deel getoond."
- **Mappen** met tot 20,000 bestanden worden geopend. Alleen de paar kilobytes die elke modelkaart nodig heeft, worden gelezen.

Zie [Browsers, apparaten en geheugen](topic:platforms) voor meer informatie.

## Online en offline

Het openen van bestanden vereist nooit internet. Eén lezer wordt de eerste keer dat u hem nodig hebt van de site geladen: de IFC-engine, de eerste keer dat u een IFC-model opent ("IFC-engine wordt gestart…"). De DWG- en DXF-lezers zijn onderdeel van de app.

:::offline
U bent offline. Als de knop in de app-balk {{ui:Klaar voor offline gebruik}} zegt, opent elk formaat zoals gewoonlijk. Zo niet, dan kan een IFC-model niet openen, tenzij er al een in dit tabblad is geopend: maak eerst opnieuw verbinding. Zie [Online en offline](topic:online-offline).
:::

Om BimCraft zonder verbinding te gebruiken, klikt u terwijl u online bent op {{ui:Opslaan voor offline gebruik}} in de app-balk en wacht u tot {{ui:Klaar voor offline gebruik}} verschijnt. De opgeslagen kopie is ongeveer 33 MB; ze bevat de IFC-engine, dus IFC-modellen openen ook offline. [Offline werken](common:offline) legt opgeslagen kopieën in het algemeen uit.

## Opslaan in de cloud

Opslaan in de cloud is nog niet beschikbaar. Sla uw bewerkte kopieën op uw eigen computer of de bestandsserver van uw kantoor op, zoals u elk ander bestand zou doen. Zie [Uw bestanden](common:your-files).
