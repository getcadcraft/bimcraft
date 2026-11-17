---
title: Taster og mus
summary: Alle taste-, mus-, trackpad- og touchhandlinger i BimCraft, grupperet efter det, du kigger på.
keywords: tastatur, genveje, hurtigtaster, taster, mus, trackpad, touch, drej, panorér, zoom, skjul, isolér, gennemsigtig, fortryd, gentag, kopiér, sæt ind, duplikér, gem, tilpas, udskriftsvisning, escape, indstillinger, tegn, væg, dør, vindue, plan
from: 5c6eedce
---

BimCraft har få genveje. De fleste opgaver udføres med musen og panelerne. Genveje skrevet med {{key:Mod}} bruger Command på en Mac og Ctrl ellers. Se [Taster, mus og trackpads](common:keys) for, hvordan taster skrives i denne hjælp.

## Overalt

| Tast | Hvad den gør |
|---|---|
| {{key:Ctrl+Shift+F}} | Skifter mellem skærmtilstandene: normal, fuld skærm og fuld skærm med værktøjslinjerne skjult. Ctrl på alle platforme, også på en Mac |
| {{key:Esc}} | Forlader fuld skærm |
| {{key:Mod+,}} | Åbner {{ui:Indstillinger}}. Se [BimCraft-indstillinger](topic:settings) |
| {{key:Tab}} | Flytter mellem knapper, afkrydsningsfelter og værdier. Alle kontroller kan nås fra tastaturet |

## 3D-visning (IFC-modeller)

| Tast eller handling | Hvad den gør |
|---|---|
| {{key:F}} | Tilpasser hele modellen i en tre-kvart-visning (samme som {{ui:Tilpas}}) |
| {{key:Esc}} | Fjerner valget, eller stopper placering eller indsætning |
| Klik | Vælger elementet under markøren; klik på tom baggrund for at fjerne valget |
| {{key:Mod}}+klik eller {{key:Shift}}+klik | Tilføjer et element til valget, eller fjerner det |
| {{key:H}} | Skjuler de valgte elementer. Se [Skjul, isolér og gør elementer gennemsigtige](topic:hide-and-isolate) |
| {{key:I}} | Viser kun de valgte elementer (isolér) |
| {{key:T}} | Viser de valgte elementer, alt andet gennemsigtigt |
| {{key:Shift+H}} | Viser alle elementer igen |
| {{ui:Gå}} | Derefter går {{key:W}} {{key:A}} {{key:S}} {{key:D}} eller piletasterne, {{key:Shift}} løber, træk kigger rundt, {{key:Esc}} stopper. Se [Gå rundt i en model](topic:walk) |
| {{key:M}} | Måler afstande og fladeareal. Se [Mål afstande, fladeareal og placeringer i 3D](topic:measure) |
| Træk med venstre knap | Drej |
| Træk med højre knap | Panorér |
| {{key:Shift}} eller {{key:Mod}} og træk med venstre knap | Panorér (praktisk på en trackpad) |
| Rul hjulet, eller træk med midterknappen | Zoom |
| Rul med to fingre eller knib på en trackpad | Zoom |
| Én finger (touch) | Drej; et tryk vælger |
| To fingre (touch) | Knib for at zoome, flyt dem sammen for at panorere |

| {{key:X}} | Snitplan til og fra. Se [Skær en IFC-model med en snitplan](topic:section-plane) |
| {{key:Shift+X}} | Snitboks rundt om de valgte elementer, med rummet sat i Indstillinger |

Der er ingen taster til {{ui:Top}}, {{ui:Front}} og {{ui:Side}}; brug knapperne.

## Redigér

De samme kommandoer findes i værktøjslinjen: {{ui:Fortryd}}, {{ui:Gentag}}, {{ui:Kopiér}}, {{ui:Sæt ind}} og menuen {{ui:Mere}}, der viser hver tast. De virker i 3D-visningen af en IFC-model, ikke mens du skriver i et felt. Se [Kopiér, sæt ind og duplikér biblioteksemner](topic:copy-paste).

| Tast | Hvad den gør |
|---|---|
| {{key:Mod+Z}} | Fortryder den sidste ændring |
| {{key:Mod+Y}} eller {{key:Mod+Shift+Z}} | Gentager det, Fortryd tog tilbage |
| {{key:Mod+C}} | Kopiér de valgte elementer (deres navne og egenskaber går også til udklipsholderen som tekst) |
| {{key:Mod+X}} | Klip de valgte elementer: kopiér dem, og slet dem derefter |
| {{key:Mod+V}} | Sæt det ind, du kopierede: det følger markøren; klik, hvor det skal hen |
| {{key:Mod+Shift+V}} | Sæt ind på samme sted: hvor et klip kom fra, eller ved siden af originalerne efter en kopi |
| {{key:Mod+D}} | Duplikér: kopiér de valgte elementer, og begynd at indsætte dem |
| {{key:Delete}} | Slet de valgte elementer med deres dele og åbninger. Se [Slet, klip, kopiér og sæt bygningselementer ind](topic:edit-elements) |
| {{key:Mod+A}} | Vælg alle viste elementer |
| {{key:Esc}} | Fravælg alle |

Når der er markeret tekst på siden, kopierer {{key:Mod+C}} teksten som normalt.

## Planvisning (Tegn)

Disse virker, mens {{ui:Tegn}} er slået til, og du ikke skriver i et felt. Se [Tegn vægge](topic:draw-walls) og [Døre og vinduer](topic:doors-and-windows).

| Tast eller handling | Hvad den gør |
|---|---|
| {{key:V}} | {{ui:Vælg}} |
| {{key:W}} | {{ui:Væg}} |
| {{key:D}} | {{ui:Dør}} |
| {{key:N}} | {{ui:Vindue}} |
| {{key:H}} | Med {{ui:Dør}} eller {{ui:Vindue}}: hængsler i den anden ende |
| {{key:Shift}} mens du tegner en væg | Holder den på 0°, 90°, 180° eller 270° |
| Cifre og fod- og tommetegnene (`'` og `"`) | Begynder at skrive en længde i feltet {{ui:Længde}}; {{key:Enter}} bruger den |
| {{key:Enter}}, {{key:Esc}}, højreklik eller dobbeltklik | Afslutter væggen, du tegner; {{key:Esc}} igen går tilbage til {{ui:Vælg}} |
| {{key:Delete}} | Sletter de valgte vægge, døre og vinduer; de resterende vægge sammenkobles igen |
| {{key:F}} med markøren over planen | Tilpasser planen |
| Rul hjulet | Zoomer om markøren |
| Træk med midter- eller højreknap, eller {{key:Space}} og træk | Panorér; med {{ui:Vælg}} slået til panorerer et almindeligt træk også |
| Træk en dør eller et vindue med {{ui:Vælg}} | Flytter den langs sin væg, eller over på en anden væg |
| To fingre (touch) | Knib for at zoome, flyt dem sammen for at panorere |

## Placering og indsætning af biblioteksemner

| Tast | Hvad den gør |
|---|---|
| {{key:R}} | Drejer emnet 90° |
| {{key:Tab}} | Vægfang til og fra: emnets bagside går mod den nærmeste væg |
| {{key:Enter}} i **X, Y (mm)** | Placerer emnet på den indtastede position |
| {{key:Esc}} | Stopper placering eller indsætning |

## Redigering af IFC-værdier

| Tast | Hvad den gør |
|---|---|
| {{key:Enter}} | Beholder den værdi, du skrev |
| {{key:Esc}} | Annullerer og sætter den gamle værdi tilbage |
| Klik et andet sted | Beholder den værdi, du skrev |
| {{key:Mod+Z}} | Fortryder den sidste ændring. Kun mens du har ikke-gemte ændringer og ikke skriver i et felt |
| {{key:Mod+Y}} | Gentager det, Fortryd tog tilbage |
| {{key:Mod+S}} | Gem som IFC. Kun mens du har ikke-gemte ændringer; ellers åbnes browserens egen gemmekommando |

For at redigere kun med tastaturet: tryk på {{key:Tab}}, indtil en værdi er markeret, og tryk derefter på {{key:Enter}} for at begynde at skrive.

## 2D-tegninger (DWG og DXF)

| Tast eller handling | Hvad den gør |
|---|---|
| {{key:F}} | Tilpasser tegningen eller arket |
| {{key:P}} | Udskriftsvisning til og fra |
| Dobbeltklik | Tilpas |
| Træk med en vilkårlig knap | Panorér |
| Rul hjulet | Zoom ved markøren |
| Rul med to fingre eller knib på en trackpad | Zoom ved markøren. Rul med to fingre panorerer ikke |
| Én finger (touch) | Panorér. Knibe-zoom er ikke lavet endnu til tegninger |

## Tegninger i 3D

| Tast eller handling | Hvad den gør |
|---|---|
| {{key:3}} | 3D til og fra (også i 2D-visningen) |
| {{key:F}} | Udstrækning: hele tegningen |
| Træk med midter- eller venstre knap | Drej |
| Træk med højre knap, eller {{key:Shift}} og træk | Panorér |
| Rul hjulet | Zoom mod det, der er under markøren |
| Rul med to fingre på en trackpad | Drej; med {{key:Shift}}, panorér |
| Knib på en trackpad | Zoom |
| Én finger (touch) | Drej |
| To fingre (touch) | Knib for at zoome, flyt dem sammen for at panorere |

{{key:F}}, {{key:P}} og {{key:3}} gør ikke noget, mens du skriver i et felt, mens udstyrslisten vises, eller når du holder {{key:Mod}} eller {{key:Alt}} nede.

## Filer

| Handling | Hvad den gør |
|---|---|
| Træk en fil ind på siden | Åbner den |
| Træk en mappe ind på siden | Åbner den som projektmappe uden tilladelsesspørgsmål |
