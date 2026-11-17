---
title: Het maaiveld van de bouwplaats, het bouwvlak en de verharding
summary: Breng het maaiveld in het model vanuit opmetingspunten, hoogtelijnen, een LAS- / LAZ-scan, een GeoTIFF, een LandXML-oppervlak (van CivilCraft) of enkele hoogtepunten; graaf het bouwvlak van het huis uit met de hellingen en de ontgraving / ophoging; leg opritten, paden en terrassen erop; geef het als LandXML aan CivilCraft.
keywords: terrein, maaiveld, bouwplaats, topografie, opmeting, punten, PNEZD, hoogtelijnen, LAS, LAZ, LiDAR, GeoTIFF, DEM, hoogte, hoogtepunt, maaiveldhoogte, grading, plateau, bouwvlak, ontgraving, ophoging, grondwerk, ontgravingslijn, helling, oprit, looppad, terras, verharding, LandXML, CivilCraft
from: 208298d6
---

## Wat u gaat doen

Plaats het huis op zijn terrein. Het maaiveld wordt onderdeel van het model: het wordt in 3D getoond, in doorsneden en gevels doorgesneden, en met hoogtelijnen op de plattegrond. Onder het huis wordt een bouwvlak uitgegraven, opritten en paden volgen het maaiveld, en funderingen zakken mee.

## Het maaiveld inbrengen

1. Open {{ui:Build}} en kies {{ui:Terrain}}.
2. Kies een van de volgende:
   - **Open a survey file…**: opmetingspunten (PNEZD, PENZD of gewoon easting, northing, hoogte; gescheiden door een komma, tab of spatie), hoogtelijnen in een DXF of DWG (polylijnen op hun hoogte, 3D-polylijnen), een LAS- of LAZ-scan (maaiveldpunten worden bewaard, uitgedund tot ongeveer één per vierkante meter), een GeoTIFF of een ASCII-hoogterooster, of een **LandXML**-oppervlak zoals CivilCraft exporteert (de eigen punten en driehoeken blijven bewaard; bevat het bestand meerdere oppervlakken, dan vraagt BimCraft welk oppervlak het maaiveld is; de eenheden komen uit het bestand). Kies eerst de eenheden van het bestand (LandXML geeft die zelf aan).
   - Of typ een **Hoogtepunt** (vanaf de vloer van deze verdieping, dus `-1'` is een voet eronder) en klik punten aan op de plattegrond, wijzig de hoogte en klik meer punten aan, en klik daarna op **Het maaiveld maken**. Drie punten zijn genoeg om te beginnen.

Opmetingscoördinaten die ver van het model liggen (rijksdriehoek, UTM) worden naar het huis verschoven, en de hoogten worden zo ingesteld dat het maaiveld bij het huis ongeveer 8" onder de eerste verdieping ligt. **Het maaiveld verhogen** in **Eigenschappen** corrigeert dat met elk bedrag.

## Het bouwvlak

1. Kies {{ui:Bouwvlak}}.
2. Stel de **Marge** rond het huis in, hoe ver het **plateau onder de vloer ligt** (8" onder een vloerplaat, meer onder een kruipruimte) en de **Hellingen** naar het bestaande maaiveld (`2:1` = twee voet uit voor elke voet omhoog of omlaag).
3. Wijs binnen het huis aan en klik.

Het maaiveld wordt onder het huis en tot aan de marge vlakgemaakt, loopt dan omhoog de heuvel in (ontgraving) en omlaag naar de lage kant (ophoging), totdat het het bestaande maaiveld raakt. **Eigenschappen** van het maaiveld en van het plateau geven de ontgravings- en ophogingsvolumes. Verplaatst u de wanden, dan volgt het plateau mee.

## Opritten, paden en terrassen

Kies {{ui:Verharding}}, kies **Looppad**, **Oprit** of **Terras**, en klik de hoeken aan. Klik de eerste hoek opnieuw aan, dubbelklik of druk op {{key:Enter}} om te eindigen. De verharding volgt het afgewerkte profiel; wijzig de soort of de dikte in **Eigenschappen**.

## Funderingen volgen het profiel

Met het maaiveld in het model volgen de opgaande muren en de funderingen van kruipruimten het maaiveld: langs elke wand blijft de fundering op haar diepte onder het maaiveld aan de buitenkant, en zij stapt in hele stappen van 8" waar het maaiveld daalt (zie [Funderingen onder de wanden](topic:foundations)).

## Naar CivilCraft

**LandXML voor CivilCraft** (in de rij Terrein, of in de **Eigenschappen** van het maaiveld) downloadt het bestaande maaiveld en het afgewerkte profiel als LandXML-bestand. Open het in CivilCraft voor echte grading, afwatering en grondwerk.

## Goed om te weten

- Het maaiveld heeft een IFC4-model nodig, zoals elk nieuw gebouw.
- Hoogtelijnen worden op de plattegrond van het maaiveldniveau getoond met het interval dat is ingesteld in de **Eigenschappen** van het maaiveld; elke vijfde is zwaarder.
- Het maaiveld wordt opgeslagen als een IFC-terreinelement (een gesloten getrianguleerd oppervlak, zodat doorsneden het kunnen snijden); het plateau en de verharding worden ermee opgeslagen. Verwijder het maaiveld om opnieuw te beginnen: het plateau en de verharding gaan dan mee.
