---
title: Wanden tekenen
summary: Teken wanden op de plattegrond van een niveau door de hoeken aan te klikken of lengtes in te typen; hoeken sluiten zichzelf aan en de wanden worden als IFC opgeslagen.
keywords: gebogen, boog, locatielijn, uitlijning, wand, wanden, tekenen, plattegrond, vloerplan, ruimte, hoek, aansluiten, wandtype, 2x6, 2x4, cmu, beton, hoogte, niveau, niveaus, verdieping, ingetypte lengte, ortho, snap
from: 8269cd4b
---

## Wat u gaat doen

Teken de wanden van een gebouw op een plattegrond van elk niveau. Klik waar een wand begint en daarna op elke hoek; BimCraft sluit de hoeken voor u aan, geeft elke wand zijn lagen (gevelbekleding, beschot, stijlen, gipsplaat …) en laat de wand doorlopen tot het niveau erboven. De 3D-weergave toont de wanden terwijl u tekent.

## De plattegrond openen

1. Start een nieuw gebouw ([Een nieuw gebouw starten](topic:start-a-new-building)) of open een IFC-model.
2. Klik op {{ui:Tekenen}} in de werkbalk. Er wordt dan al een nieuw gebouw geopend.
3. De plattegrond van een niveau staat links en de 3D-weergave rechts. Kies het niveau in de lijst boven de plattegrond, of met de ronde knop ernaast in het paneel **Niveaus**.
4. {{ui:Plattegrond}}, {{ui:Splitsen}} en {{ui:3D}} zijn hulpmiddelen in de rij {{ui:Weergave}} van de werkbalk (de opdrachten PLAN, SPLIT en de sneltoetsen werken zoals voorheen). Gebruik {{ui:Plattegrond}} voor alleen de plattegrond, {{ui:Splitsen}} voor beide, en {{ui:3D}} om de plattegrond te sluiten. Als het venster smal is (of de interface groot ingesteld), zet {{ui:Splitsen}} de plattegrond boven de 3D-weergave in plaats van ernaast.

De plattegrond snijdt het niveau 4'-0" (1200 mm) boven de vloer, zoals een vloerplan doet. Scrol om te zoomen; sleep met de middelste of rechter knop (of houd {{key:Space}} ingedrukt en sleep) om te verschuiven. Met {{ui:Selecteren}} aan verschuift een gewone sleepbeweging ook. Met de aanwijzer boven de plattegrond maakt {{key:F}} de plattegrond passend.

## Een ruimte tekenen

1. Klik op {{ui:Wand}} (of druk op {{key:W}}).
2. Kies het wandtype in de eerste lijst, bijvoorbeeld **Exterior 2×6** of **Interior 2×4**.
3. Kies de hoogte: **Tot het niveau erboven** (de wand volgt als dat niveau verschuift), **Tot** een hoger niveau voor een wand die door meerdere niveaus loopt (een trappenhal, een dubbelhoge ruimte, een hoge gevel), of **Vaste hoogte** en typ die in. Zo'n wand hoort bij het niveau waarop u hem tekende; de plattegronden van de niveaus die hij doorkruist tonen hem lichter, de ruimten daar sluiten erop aan, en vanaf die plattegronden kunt u deuren en ramen erin klikken (een deur staat op de vloer van dat niveau). Om de wand zelf te verplaatsen of te wijzigen, gaat u naar het niveau waar hij begint.
4. Klik waar de eerste wand begint.
5. Klik op elke hoek. Elke klik maakt een wand; de volgende begint waar de vorige eindigde. De lengte en hoek worden naast de aanwijzer getoond.
6. Klik nogmaals op het eerste punt om de ruimte te sluiten. De statusregel zegt hoeveel wanden de ruimte heeft, en in de modus **Hartlijn** krijgt elke wand zijn buitenlaag aan de buitenkant van de ruimte.
7. Druk op {{key:Esc}} (of klik met de rechtermuisknop, of dubbelklik) om te stoppen zonder te sluiten.

De hoeken sluiten zichzelf aan: twee wanden komen samen in een verstek, een wand die op een andere eindigt, stopt bij het vlak van die wand (een T), en drie of meer wanden in één punt delen de hoek. Wanden die elkaar kruisen, blijven zoals ze zijn.

Een hele ruimte in één keer: open {{ui:Vormen}} voor een rechthoek, een gedraaide rechthoek, een veelhoek, bogen, wanden op gekozen lijnen of rond een omtrek (zie [Wandvormen, splitsen, offset, uitrekken en vergrendelen](topic:wall-tools)).

## Kies de tekenreferentie

Kies **Hartlijn**, **Binnenvlak** of **Buitenvlak** vóór de eerste klik. Met een vlak gekozen beschrijven uw klikken en getypte lengtes dat vlak; BimCraft verschuift de hartlijn van de wand met de helft van de totale dikte en sluit opeenvolgende hoeken aan. Kies **Buitenkant links** of **Buitenkant rechts** ten opzichte van de richting waarin u tekent. Bij een gesloten omtrek die tegen de klok in getekend is, ligt de buitenkant rechts; met de klok mee, links. Bij **Binnenvlak** gaat het lichaam van de wand naar de buitenkant van uw lijn; bij **Buitenvlak** naar de andere kant. Vlakken tekenen behoudt de buitenkant die u koos wanneer u de lus sluit. Op de hartlijn nemen wanden die geen ruimte sluiten de buitenkant over die u koos; het sluiten van een ruimte zet de buitenkant van elke wand vanzelf op de buitenkant van de ruimte, hoe u ook getekend hebt.

Het wijzigen van het wandtype, de referentie of de buitenkant beëindigt de huidige keten. Dicht bij een omkerende hoek worden lange verstekken afgekapt door vierkante uiteinden te laten.

Terwijl u tekent, kan een eindpunt over lege ruimte horizontaal of verticaal uitlijnen met een wandeindpunt of een eerdere hoek. Een gestreepte hulplijn verbindt dat punt met de aanwijzer op het snappunt. Shift houdt de tekenrichting haaks; de uitlijning stopt dan langs die richting. Nabije eindpunten, middelpunten en snijpunten van wanden hebben voorrang op verre uitlijning.

## Locatielijn

Met **Referentie** op **Buitenvlak** of **Binnenvlak** houdt de wand dat vlak als zijn locatielijn. Als de wand later dikker wordt of zijn buitenkant wordt omgedraaid, blijft dat vlak waar het is en groeit of draait de wand eromheen. Een rechte wand die er op een hoek op aansluit, volgt mee, zodat de hoek toch sluit. U kunt de locatielijn achteraf wijzigen in **Eigenschappen**: zie [Een wand, deur of raam wijzigen](topic:change-a-wall-or-door).

## Een gebogen wand tekenen

1. Klik op {{ui:Wand}} en kies daarna **Gebogen** in de lijst **Vorm** van de optiesrij.
2. Klik waar de wand begint, en daarna waar hij eindigt.
3. Klik op een punt van de boog. Of typ de boogshoogte en druk op {{key:Enter}}.
4. De keten gaat verder vanaf het einde van de wand. Druk op {{key:Esc}} om te stoppen.

Een gebogen wand sluit aan op de wanden aan zijn uiteinden (hoek- en T-aansluitingen werken), maakt ruimten en houdt deuren en ramen langs zijn boog vast. Die blijven rechte eenheden, loodrecht op de wand in het midden, en hun afstand wordt langs de boog gemeten. Een wand kan maximaal drie kwart van een cirkel draaien. Hij snapt naar zijn uiteinden en naar het midden van zijn boog.

Nog niet beschikbaar voor gebogen wanden: {{ui:Bijsnijden / verlengen}} en {{ui:Hoek}}, framing, automatische maatvoering op de plattegrond en snappen langs de boog. Zie [Wat nog niet beschikbaar is](topic:not-built-yet).

## Een lengte typen in plaats van klikken

Typ na de eerste klik en druk op {{key:Enter}}:

| Typ | Tekent |
|---|---|
| `12'6"` of `3810` | een wand van die lengte, in de richting die de aanwijzer toont |
| `12'6"<90` | die lengte, onder die hoek (graden, tegen de klok in vanaf rechts) |
| `@3000,0` | naar een punt op die afstand van het laatste punt, in x- en y-richting |
| `1200,3400` | naar dat punt op de plattegrond |

Een getal typen terwijl het hulpmiddel Wand aan staat, gaat rechtstreeks naar het vak {{ui:Lengte}}. In feet en inch is een kaal getal inch; in millimeter is het millimeter. U kunt de eenheid altijd typen: `3.5 m`, `10 ft`, `6 1/2"`.

## Snappen

- Wanduiteinden, hun hoekpunten van het vlak en wandmiddens snappen wanneer de aanwijzer er dichtbij is (een vierkant, een driehoek).
- De aanwijzer snapt naar de hartlijn van een wand of naar een van beide vlakken (een kruis).
- Vanaf het laatste punt blijft de richting op elke 15° vastzitten als die dichtbij is; houd {{key:Shift}} ingedrukt om hem op 0°, 90°, 180° of 270° te houden.
- Vrije richtingen ronden de lengte af op 1/2" (of 10 mm).

## Wijzigen, ongedaan maken, verwijderen

- Elke wand is één stap in **Wijzigingen**: {{ui:Ongedaan maken}} en {{ui:Opnieuw}} nemen wanden terug en zetten ze weer neer.
- Met {{ui:Selecteren}} aan: klik op een wand in de plattegrond om hem te kiezen; de 3D-weergave en **Eigenschappen** volgen. {{key:Delete}} verwijdert de gekozen wanden, en de wanden waarmee zij verbonden waren, worden weer opgeruimd.

## Niveaus

Het paneel **Niveaus** toont elk niveau met zijn hoogte en peil.

- Typ een nieuwe naam, een nieuw peil of een nieuwe hoogte en druk op {{key:Enter}}. Als u de hoogte (of het peil) van een niveau wijzigt, verschuiven de niveaus erboven met hetzelfde bedrag, en wanden die tot een niveau doorlopen, volgen mee.
- {{ui:Een niveau bovenop toevoegen}} voegt een niveau boven het bovenste toe, even hoog als dat.
- {{ui:Een niveau eronder toevoegen}} voegt een niveau onder het laagste toe (een kelder), even hoog als dat: het peil is negatief wanneer het laagste niveau op 0 staat, en geen ander niveau verschuift. Ongedaan maken haalt het weer weg.
- {{ui:Dit niveau kopiëren…}} tekent opnieuw wat op het niveau staat dat u bekijkt, op een ander niveau of op een nieuw niveau erboven: de wanden met hun deuren en ramen, vloeren en plafonds (geen daken). Wanden die tot het niveau erboven liepen, lopen tot het niveau boven het nieuwe niveau; ruimten verschijnen vanzelf. Eén {{ui:Ongedaan maken}} haalt alles terug. Als het andere niveau al wanden heeft, worden de kopieën eraan toegevoegd.
- {{ui:Eenheden}} op de werkbalk kiest de eenheden (feet en inch, inch, decimale feet, millimeter, centimeter of meter) voor alles wat de tekenhulpmiddelen tonen en lezen.

## Opslaan

Klik op {{ui:Opslaan als IFC}}. Elke wand wordt een IFC-wand met zijn hartlijn, zijn samengevoegde vorm, zijn type en lagen, `Pset_WallCommon` en basishoeveelheden (lengte, hoogte, oppervlakten en volumes), zodat andere BIM-programma's hem openen en in een staat kunnen opnemen.

## Goed om te weten

- Wanden worden op hun hartlijn getekend. De dikte komt van het wandtype.
- De plattegrond toont hier getekende wanden gevuld, en al het andere (bibliotheekitems, modellen uit andere programma's) doorgesneden door hetzelfde vlak, met wat onder de snede ligt in dunne lijnen.
- Wanden die door andere programma's zijn gemaakt, staan op de plattegrond, maar kunnen met deze hulpmiddelen nog niet worden gewijzigd.
