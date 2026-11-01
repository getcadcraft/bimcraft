---
title: Bestanden die BimCraft opent en opslaat
summary: Elk formaat dat BimCraft opent, wat het behoudt, wat het opslaat, waar opgeslagen bestanden heen gaan en wat er verandert tussen browsers en wanneer u offline bent.
keywords: formaten, openen, opslaan, exporteren, downloaden, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, uploaden, privacy, bestandsgrootte
from: a1f0161b
---

BimCraft leest bestanden op uw computer, in het browsertabblad. **Er wordt niets geüpload** naar CadCraft of iemand anders. Als u opslaat, geeft BimCraft de browser een nieuw bestand om te downloaden; het overschrijft nooit een bestand dat u hebt geopend.

## Wat het opent

| Formaat | Extensies | Wat u krijgt |
|---|---|---|
| IFC | `.ifc` | Het model in 3D, verdiepingen, elementaantallen en de eigenschappen van elk element. Namen, tags en afzonderlijke eigenschapswaarden kunt u wijzigen. |
| Project- en familiebestanden | `.rvt` `.rfa` `.rte` `.rft` | Een bestandskaart: release, build, worksharing, projectinformatie, familieparameters, gekoppelde bestanden en de voorbeeldafbeelding. Geen 3D. |
| DWG | `.dwg` | De tekening in 2D: modelruimte, elk blad, lagen, gekoppelde tekeningen, afbeeldingen en afdrukweergave. De modelruimte ook in 3D. De formaten van AutoCAD 2000 tot 2018 zijn gecontroleerd. |
| DXF | `.dxf` | Hetzelfde als DWG. |
| STEP | `.step` `.stp` | Een onderdeel, een stuk apparatuur of het model van een leverancier (AP203, AP214, AP242) in 3D: elk volume wordt één element (een bouwelementproxy) van een klein IFC-model op één verdieping, gelezen als driehoeken op ware grootte, een samenstelling met elk onderdeel op de plaats die het bestand opgeeft. Vanaf dat punt werkt het als elke IFC: eigenschappen, doorsneden, meten, opslaan als IFC. Kleuren en de samenstellingsboom worden niet gelezen. |
| Puntenwolken | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | De scan in de 3D-weergave, naast een model of op zichzelf: zie [Een puntenwolk naast het model tonen](topic:point-clouds). |
| Projectbundel | `.ccbundle.zip` | Het model met zijn weergaven, indelingen en eigenschapsgroepen: zie [Een projectbundel openen](topic:open-project-bundle). |
| Een map | elk | Een rapport van elk model, elke tekening en elke projectbundel erin. Elke IFC, elk model, elke tekening of bundel in het rapport opent met een klik. |

[Wat BimCraft uit elk formaat leest](topic:file-formats) gaat in detail.

BimCraft bepaalt wat een bestand is door naar de eerste bytes te kijken en ook naar de naam, dus een projectbestand met een ongebruikelijke extensie opent nog steeds als bestandskaart.

### Niet geopend

- `.ifczip` en `.ifcxml`: BimCraft meldt ".ifczip wordt nog niet ondersteund. Sla het model op of exporteer het als een gewoon .ifc-bestand." Pak de `.ifczip` uit (er zit een gewone `.ifc` in) of exporteer opnieuw als gewone IFC.
- DGN-tekeningen staan in een maprapport maar worden niet geopend.
- PDF, afbeeldingen en kantoorbestanden openen niet op zichzelf. Afbeeldingen worden gebruikt als beeld in een DWG, en {{ui:Bouwen}} › {{ui:Vanuit een tekening…}} maakt van de pagina's van een PDF of een scan wanden: zie [Wanden uit een set plattegronden](topic:walls-from-plans).

## Wat het opslaat

| U klikt op | U krijgt | Waar |
|---|---|---|
| {{ui:Opslaan als IFC}} | Een nieuw IFC-bestand met uw bewerkingen, genaamd "*oorspronkelijke naam* (edited).ifc" | De downloadmap van uw browser |
| {{ui:CSV downloaden}} in de apparatuurstaat | Een CSV van de items in de lijst, genaamd "*tekeningnaam* equipment.csv" | De downloadmap van uw browser |

Andere dingen worden opgeslagen waar ze worden gemaakt, elk in een eigen onderwerp: {{ui:USD}} ([Het model als USD exporteren](topic:usd)), de .glb {{ui:Voor renderen}}, gerenderde afbeeldingen, bladen en plattegronden als PDF, staten en lijsten als CSV, BCF-issues, het COBie-werkblad, familiebestanden en geregistreerde scans als LAS of E57. BimCraft slaat geen DWG-, DXF- of projectbestanden op en wijzigt de bestanden die u hebt geopend nooit.

:::chromium
Chrome en Edge slaan downloads op in de map die in hun instellingen staat, meestal Downloads. Wilt u elke keer gevraagd worden waar het wordt opgeslagen, zet dan in de downloadinstellingen van de browser "Vragen waar elk bestand moet worden opgeslagen voordat het wordt gedownload" aan.
:::

:::firefox
Firefox slaat op in de map Downloads, tenzij u in de instellingen "Altijd vragen waar bestanden moeten worden opgeslagen" kiest.
:::

:::safari
Safari slaat op in Downloads, tenzij u een andere map kiest onder **Safari > Instellingen > Algemeen > Locatie voor gedownloade bestanden**.
:::

## Een tweede keer opslaan

Bij elke keer opslaan wordt het hele model gedownload met **elke bewerking sinds u het opende**, niet alleen de bewerkingen na de laatste keer opslaan. De lijst {{ui:Wijzigingen}} is na elke keer opslaan weer leeg, dus u kunt niet verder terug dan een keer opslaan. Wilt u opnieuw beginnen vanaf het origineel, open dan het originele bestand opnieuw.

## Grote bestanden en geheugen

- **IFC**-bestanden worden volledig in het geheugen van het tabblad gelezen, en de 3D-geometrie neemt daar nog geheugen bovenop in beslag. Een model van enkele honderden megabytes kan te veel zijn voor een laptop. Boven 1,5 miljoen driehoeken worden randen uitgezet om geheugen te sparen ("Randen staan uit bij zeer grote modellen").
- **Projectbestanden** worden niet volledig gelezen. BimCraft leest alleen de kleine delen die het nodig heeft, circa 40 KB tot 100 KB hoe groot het bestand ook is, dus een centraal model van 500 MB op een netwerkschijf opent in een oogwenk.
- **DWG- en DXF**-bestanden worden volledig gelezen. Een zeer grote tekening toont "Deze tekening is zeer groot; alleen een deel wordt getoond."
- **Mappen** tot 20.000 bestanden worden geopend. Alleen de paar kilobytes die elke modelkaart nodig heeft, worden gelezen.

Zie [Browsers, apparaten en geheugen](topic:platforms) voor meer.

## Online en offline

Bestanden openen heeft nooit internet nodig. Eén lezer wordt de eerste keer dat u hem nodig hebt van de site geladen: de IFC-engine, de eerste keer dat u een IFC-model opent ("De IFC-engine wordt gestart…"). De DWG- en DXF-lezers maken deel uit van de app.

:::offline
U bent offline. Staat er op de knop in de appbalk {{ui:Klaar voor offline gebruik}}, dan opent elk formaat zoals gewoonlijk. Zo niet, dan kan een IFC-model niet worden geopend, tenzij er in dit tabblad al een is geopend: maak eerst verbinding. Zie [Online en offline](topic:online-offline).
:::

Om BimCraft zonder verbinding te gebruiken, klikt u terwijl u online bent in de appbalk op {{ui:Opslaan voor offline gebruik}} en wacht u op {{ui:Klaar voor offline gebruik}}. De opgeslagen kopie is circa 33 MB; ze bevat de IFC-engine, dus IFC-modellen openen ook offline. [Offline werken](common:offline) legt opgeslagen kopieën in het algemeen uit.

## Opslaan in de cloud

Opslaan in de cloud is nog niet beschikbaar. Sla uw bewerkte kopieën op uw eigen computer of de bestandsserver van uw kantoor op, zoals bij elk ander bestand. Zie [Uw bestanden](common:your-files).
