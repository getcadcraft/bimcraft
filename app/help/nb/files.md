---
title: Filer BimCraft åpner og lagrer
summary: Alle formater BimCraft åpner, hva det beholder, hva det lagrer, hvor lagrede filer havner, og hva som endrer seg mellom nettlesere og når du er frakoblet.
keywords: formater, åpne, lagre, eksporter, last ned, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, last opp, personvern, filstørrelse
from: a7275dbf
---

BimCraft leser filer på datamaskinen din, i nettleserfanen. **Ingenting lastes opp** til CadCraft eller noen andre. Når du lagrer, gir BimCraft nettleseren en ny fil å laste ned; den skriver aldri over en fil du åpnet.

## Hva den åpner

| Format | Utvidelser | Hva du får |
|---|---|---|
| IFC | `.ifc` | Modellen i 3D, etasjer, antall elementer og alle egenskapene til hvert element. Navn, merkelapper og enkeltverdier for egenskaper kan endres. |
| Prosjekt- og familiefiler | `.rvt` `.rfa` `.rte` `.rft` | Et filkort: utgivelse, bygg, delt arbeid, prosjektinformasjon, familieparametere, koblede filer og forhåndsvisningsbildet. Ingen 3D. |
| DWG | `.dwg` | Tegningen i 2D: modellrom, hvert ark, lag, koblede tegninger, bilder og utskriftsvisning. Modellrom i 3D også. Formater fra AutoCAD 2000 til 2018 er de som er kontrollert. |
| DXF | `.dxf` | Det samme som DWG. |
| STEP | `.step` `.stp` | En del, et stykke utstyr eller en leverandørs modell (AP203, AP214, AP242) i 3D: hvert legeme blir ett element (et proxy-byggelement) i en liten IFC-modell på én etasje, leses som trekanter i riktig størrelse, og en sammenstilling med hver del der filen plasserer den. Det fungerer som enhver IFC videre: egenskaper, snitt, mål, lagre som IFC. Farger og sammenstillingstreet leses ikke. |
| Punktskyer | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | Skanningen i 3D-visningen, ved siden av en modell eller alene: se [Vis en punktsky ved siden av modellen](topic:point-clouds). |
| Prosjektpakke | `.ccbundle.zip` | Modellen med visningene, layoutene og egenskapsgruppene: se [Åpne en prosjektpakke](topic:open-project-bundle). |
| En mappe | alle | En rapport over hver modell, tegning og prosjektpakke i den. Enhver IFC, modell, tegning eller pakke i rapporten åpnes med ett klikk. |

[Hva BimCraft leser fra hvert format](topic:file-formats) går i detalj.

BimCraft avgjør hva en fil er ved å se på de første bytene i tillegg til navnet, så en prosjektfil med en uvanlig utvidelse åpnes fortsatt som et filkort.

### Åpnes ikke

- `.ifczip` og `.ifcxml`: BimCraft sier ".ifczip støttes ikke ennå. Lagre eller eksporter modellen som en vanlig .ifc-fil." Pakk ut `.ifczip` (den inneholder en vanlig `.ifc`) eller eksporter på nytt som vanlig IFC.
- DGN-tegninger er oppført i en mapperapport, men åpnes ikke.
- PDF, bilder og kontorfiler åpnes ikke på egen hånd. Bilder brukes som bilder inni en DWG, og {{ui:Bygg}} › {{ui:Fra en tegning…}} gjør sidene i en PDF eller en skanning om til vegger: se [Vegger fra et sett med planer](topic:walls-from-plans).

## Hva den lagrer

| Du klikker | Du får | Hvor |
|---|---|---|
| {{ui:Lagre som IFC}} | En ny IFC-fil med redigeringene dine, navngitt "*opprinnelig navn* (edited).ifc" | Nedlastingsmappen i nettleseren din |
| {{ui:Last ned CSV}} i utstyrsplanen | En CSV med elementene i listen, navngitt "*tegningsnavn* equipment.csv" | Nedlastingsmappen i nettleseren din |

Andre ting lagres der de lages, hver i sitt eget emne: {{ui:USD}} ([Eksporter modellen som USD](topic:usd)), {{ui:Collada}} ([Eksporter modellen som Collada eller for Google Earth](topic:collada): .dae og Google Earth-filen .kmz), .glb-filen for {{ui:For rendering}}, renderte bilder, ark og planer som PDF, lister og tabeller som CSV, BCF-saker, COBie-regnearket, familiefiler og registrerte skanninger som LAS eller E57. BimCraft lagrer ikke DWG-, DXF- eller prosjektfiler, og den endrer aldri filene du åpnet.

:::chromium
Chrome og Edge lagrer nedlastinger i mappen som er satt i innstillingene, vanligvis Nedlastinger. For å bli spurt hver gang om hvor hver fil skal lagres, slå på «Spør hvor hver fil skal lagres før nedlasting» i nettleserens innstillinger for nedlasting.
:::

:::firefox
Firefox lagrer til mappen Nedlastinger med mindre du har satt den til «Spør alltid hvor filer skal lagres» i innstillingene.
:::

:::safari
Safari lagrer til Nedlastinger med mindre du velger en annen mappe under **Safari > Innstillinger > Generelt > Plassering for filnedlasting**.
:::

## Lagre en gang til

Hver lagring laster ned hele modellen med **alle redigeringer siden du åpnet den**, ikke bare redigeringene gjort etter forrige lagring. Listen {{ui:Endringer}} tømmes igjen etter hver lagring, så du kan ikke angre forbi en lagring. For å starte på nytt fra originalen, åpne originalfilen på nytt.

## Store filer og minne

- **IFC**-filer leses helt inn i fanens minne, og 3D-geometrien tar mer minne i tillegg. En modell på noen hundre megabyte kan bli for mye for en bærbar datamaskin. Over 1.5 million trekanter slås kanter av for å spare minne («Kanter er av for veldig store modeller»).
- **Prosjektfiler** leses ikke i sin helhet. BimCraft leser bare de små delene den trenger, omtrent 40 KB til 100 KB uansett hvor stor filen er, så en 500 MB sentral modell på en nettverksstasjon åpnes på et øyeblikk.
- **DWG og DXF** leses helt. En veldig stor tegning viser «Denne tegningen er veldig stor; bare en del av den vises.»
- **Mapper** med opptil 20 000 filer åpnes. Bare de få kilobyte-ene hvert modellkort trenger, leses.

Se [Nettlesere, enheter og minne](topic:platforms) for mer.

## Tilkoblet og frakoblet

Åpning av filer krever aldri internett. Én leser laster fra nettstedet første gang du trenger den: IFC-motoren, første gang du åpner en IFC-modell («Starter IFC-motoren…»). DWG- og DXF-leserne er en del av appen.

:::offline
Du er frakoblet. Hvis knappen i appfeltet sier {{ui:Klar frakoblet}}, åpnes alle formater som vanlig. Hvis ikke, kan en IFC-modell bare åpnes hvis en tilsvarende modell allerede er åpnet i denne fanen: koble til igjen først. Se [Tilkoblet og frakoblet](topic:online-offline).
:::

For å bruke BimCraft uten forbindelse, klikk {{ui:Lagre for frakoblet bruk}} i appfeltet mens du er tilkoblet, og vent på {{ui:Klar frakoblet}}. Den lagrede kopien er omtrent 33 MB; den inkluderer IFC-motoren, så IFC-modeller åpnes også frakoblet. [Arbeide frakoblet](common:offline) forklarer lagrede kopier generelt.

## Skylagring

Skylagring er ikke tilgjengelig ennå. Lagre de redigerte kopiene dine på egen datamaskin eller kontorets filserver, slik du ville gjort med en hvilken som helst annen fil. Se [Dine filer](common:your-files).
