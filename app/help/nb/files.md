---
title: Filer BimCraft åpner og lagrer
summary: Hvert format BimCraft åpner, hva det beholder, hva det lagrer, hvor lagrede filer havner, og hva som endres mellom nettlesere og når du er frakoblet.
keywords: formater, åpne, lagre, eksporter, last ned, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, last opp, personvern, filstørrelse
from: a1f0161b
---

BimCraft leser filer på din egen datamaskin, i nettleserfanen. **Ingenting lastes opp** til CadCraft eller noen andre. Når du lagrer, gir BimCraft nettleseren en ny fil å laste ned; den skriver aldri over en fil du har åpnet.

## Dette åpner den

| Format | Filendelser | Hva du får |
|---|---|---|
| IFC | `.ifc` | Modellen i 3D, etasjer, elementantall og egenskapene til hvert element. Navn, merker og enkeltstående egenskapsverdier kan endres. |
| Prosjekt- og familiefiler | `.rvt` `.rfa` `.rte` `.rft` | Et filkort: utgave, build, worksharing, prosjektinformasjon, familieparametere, lenkede filer og forhåndsvisningsbildet. Ingen 3D. |
| DWG | `.dwg` | Tegningen i 2D: modellrommet, hvert ark, layer, lenkede tegninger, bilder og utskriftsvisning. Modellrommet også i 3D. Formater fra AutoCAD 2000 til 2018 er de som er kontrollert. |
| DXF | `.dxf` | Det samme som DWG. |
| STEP | `.step` `.stp` | En del, et utstyr eller en leverandørmodell (AP203, AP214, AP242) i 3D: hvert volumlegeme blir ett element (et byggeelement-proxy) i en liten IFC-modell på én etasje, lest som trekanter i ekte størrelse, en sammenstilling med hver del der filen plasserer den. Derfra fungerer den som enhver IFC: egenskaper, snitt, mål, lagre som IFC. Farger og sammenstillingstreet leses ikke. |
| Punktskyer | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | Skanningen i 3D-visningen, ved siden av en modell eller alene: se [Vis en punktsky ved siden av modellen](topic:point-clouds). |
| Prosjektpakke | `.ccbundle.zip` | Modellen med visninger, layouter og egenskapsgrupper: se [Åpne en prosjektpakke](topic:open-project-bundle). |
| En mappe | alle | En rapport over hver modell, tegning og prosjektpakke i den. Alle IFC-er, modeller, tegninger eller pakker i rapporten åpnes med ett klikk. |

[Hva BimCraft leser fra hvert format](topic:file-formats) går i detalj.

BimCraft avgjør hva en fil er ved å se på de første bytene i tillegg til navnet, så en prosjektfil med uvanlig filendelse åpnes likevel som et filkort.

### Åpnes ikke

- `.ifczip` og `.ifcxml`: BimCraft sier «.ifczip er ikke støttet ennå. Lagre eller eksporter modellen som en vanlig .ifc-fil.» Pakk ut `.ifczip` (den inneholder en vanlig `.ifc`) eller eksporter på nytt som vanlig IFC.
- DGN-tegninger listes i en mapperapport, men åpnes ikke.
- PDF, bilder og kontorfiler åpnes ikke alene. Bilder brukes som bilder inne i en DWG, og {{ui:Bygg}} › {{ui:Fra en tegning…}} gjør sidene i en PDF eller en skanning om til vegger: se [Vegger fra et sett med planer](topic:walls-from-plans).

## Dette lagrer den

| Du klikker | Du får | Hvor |
|---|---|---|
| {{ui:Lagre som IFC}} | En ny IFC-fil med endringene dine, med navnet «*originalnavn* (edited).ifc» | Nettleserens nedlastingsmappe |
| {{ui:Last ned CSV}} i utstyrslisten | En CSV med elementene i listen, med navnet «*tegningsnavn* equipment.csv» | Nettleserens nedlastingsmappe |

Andre ting lagres der de lages, hver i sitt eget emne: {{ui:USD}} ([Eksporter modellen som USD](topic:usd)), .glb-filen {{ui:For rendering}}, rendrede bilder, ark og planer som PDF, tabeller og lister som CSV, BCF-saker, COBie-regnearket, familiefiler og registrerte skanninger som LAS eller E57. BimCraft lagrer ikke DWG-, DXF- eller prosjektfiler, og den endrer aldri filene du åpnet.

:::chromium
Chrome og Edge lagrer nedlastinger i mappen som er valgt i innstillingene deres, vanligvis Nedlastinger. For å bli spurt hvor hver fil skal lagres slår du på «Spør hvor hver fil skal lagres før nedlasting» i nettleserens nedlastingsinnstillinger.
:::

:::firefox
Firefox lagrer i mappen Nedlastinger med mindre du setter den til «Spør alltid hvor filer skal lagres» i innstillingene.
:::

:::safari
Safari lagrer i Nedlastinger med mindre du velger en annen mappe under **Safari > Innstillinger > Generelt > Plassering for filnedlasting**.
:::

## Lagre en gang til

Hver lagring laster ned hele modellen med **alle endringer siden du åpnet den**, ikke bare endringene etter forrige lagring. Listen {{ui:Endringer}} er tom igjen etter hver lagring, så du kan ikke angre forbi en lagring. For å starte på nytt fra originalen åpner du originalfilen igjen.

## Store filer og minne

- **IFC**-filer leses helt inn i fanens minne, og 3D-geometrien tar mer minne i tillegg. En modell på noen hundre megabyte kan være for mye for en bærbar. Over 1,5 million trekanter slås kanter av for å spare minne («Kanter er av for svært store modeller»).
- **Prosjektfiler** leses ikke i sin helhet. BimCraft leser bare de små delene den trenger, omtrent 40 KB til 100 KB uansett hvor stor filen er, så en sentralmodell på 500 MB på et nettverksområde åpnes på et øyeblikk.
- **DWG- og DXF**-filer leses helt. En svært stor tegning viser «Denne tegningen er svært stor; bare en del av den vises.»
- **Mapper** med opptil 20 000 filer åpnes. Bare de få kilobytene hvert modellkort trenger, leses.

Se [Nettlesere, enheter og minne](topic:platforms) for mer.

## Tilkoblet og frakoblet

Å åpne filer trenger aldri internett. Én leser lastes fra nettstedet første gang du trenger den: IFC-motoren, første gang du åpner en IFC-modell («Starter IFC-motoren…»). DWG- og DXF-leserne er en del av appen.

:::offline
Du er frakoblet. Hvis knappen i appfeltet sier {{ui:Klar frakoblet}}, åpnes alle formater som vanlig. Hvis ikke, kan ikke en IFC-modell åpnes med mindre en allerede er åpnet i denne fanen: koble til først. Se [Tilkoblet og frakoblet](topic:online-offline).
:::

For å bruke BimCraft uten forbindelse klikker du {{ui:Lagre for frakoblet bruk}} i appfeltet mens du er tilkoblet og venter på {{ui:Klar frakoblet}}. Den lagrede kopien er omtrent 33 MB; den inneholder IFC-motoren, så IFC-modeller åpnes også frakoblet. [Arbeide frakoblet](common:offline) forklarer lagrede kopier generelt.

## Skylagring

Skylagring finnes ikke ennå. Lagre de redigerte kopiene dine på din egen datamaskin eller kontorets filserver, som du ville gjort med enhver annen fil. Se [Filene dine](common:your-files).
