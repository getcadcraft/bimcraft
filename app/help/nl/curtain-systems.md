---
title: "Gordijngevelsystemen: beglaasde wanden op een raster, met stijlen"
summary: Teken een gordijngevelsysteem als een wand of leg het op een vlak, en stel daarna de rasterlijnen en de stijlen in. Het wordt opgeslagen als een IfcCurtainWall met zijn ruiten en stijlen.
keywords: gordijngevelsysteem, gordijngevel, gordijngevelraster, stijl, beglazing, winkelgevel, glazen wand, paneel, ruit, op vlak, vlak, massa, rasterlijn, afstand, profiel, bovenlicht, IfcCurtainWall, IfcPlate, IfcMember
from: 99d6219c
---

## Wat u gaat doen

Maak een beglaasde wand van ruiten tussen stijlen, wijzig waar de rasterlijnen liggen, en kies welke lijnen een stijl krijgen.

## Stappen

1. Zet **Tekenen** aan en open het menu **Bouwen** (in een lintindeling: het tabblad Architectuur).
2. Kies **Gordijngevelsysteem**. Stel in de rij de bovenkant in (het niveau erboven, of een hoogte), een lijn elke zoveel langs de wand, een lijn elke zoveel omhoog (leeg laten voor geen), of er stijlen komen, en het stijlprofiel.
3. Klik waar het begint en waar het eindigt, zoals bij het tekenen van een wand. Shift houdt het vierkant.
4. Om het raster te wijzigen kiest u **Gordijngevelraster** en klikt u op het systeem:
   - **Een lijn toevoegen**: een verticale lijn komt waar u klikt. Typ voor een horizontale lijn eerst de hoogte bij **Op**.
   - **Een lijn verplaatsen**: klik op de lijn, en daarna waar hij heen moet.
   - **Een lijn verwijderen**: klik op de lijn.
   - **Instellen op afstand**: typ de afstand bij **Elke**, en klik daarna op het systeem.
5. Om stijlen te wijzigen kiest u **Stijl**, kiest u waarop die werkt (de verticale lijn waarop u klikt, de horizontale lijn op een hoogte, de rand, of elke lijn), kiest u **Stijlen plaatsen** of **Stijlen verwijderen** en een profiel, en klikt u daarna op het systeem.
6. Selecteer een systeem om alles ervan te zien in **Eigenschappen**: elke rasterlijn met zijn plaats, een vinkje voor de stijl en een knop om die te verwijderen; de afstand; de rand; het profiel; de dikte van de ruit.

## Op vlak

**Op vlak** maakt een gordijngevelsysteem op een vlak dat u in de 3D-weergave aanklikt. De rij heeft dezelfde raster- en stijlinstellingen.

- Het werkt op elk vlak van elk element dat de 3D-weergave toont: een massa, een wand, een vloer, een dakvlak, een kolom, een geplaatst item. Het vlak kan verticaal, hellend of horizontaal zijn.
- Het systeem neemt de contour van het vlak over. Een puntgevel of een andere vreemde vorm snijdt de ruiten en stijlen erop af.
- Het kan in plaats daarvan een **wand** maken, langs de voet van een verticaal vlak en zo hoog als het vlak. Een wand staat hier altijd verticaal, dus een hellend of horizontaal vlak kan er geen krijgen.
- Het maakt geen dak. Een dak in BimCraft wordt berekend uit de contour van een niveau en een helling, niet uit één vlak.
- Een gebogen vlak bestaat uit vele kleine vlakken: één klik neemt er één van.
- Een vlak met openingen erin: het systeem bedekt de buitencontour van het vlak.

## Hoe het gemeten wordt

- **Bruto oppervlakte** is de contour van het systeem.
- **Glasoppervlakte** is het oppervlak van de ruiten zoals gemaakt: elke ruit verliest een halve stijlbreedte aan een zijde met een rasterstijl en een hele breedte bij een randstijl.
- Een verticale stijl loopt van rand tot rand door. Een horizontale stijl stopt bij elke verticale stijl en bij de rand. Randstijlen liggen binnen de contour; waar er twee samenkomen, loopt de meest verticale door. Verbindingen worden recht afgesneden, niet onder hoek.
- **Staten** heeft een lijst **Gordijngevelsystemen** met deze getallen zodra het model er een heeft.

## In het IFC-bestand

Een IfcCurtainWall op zijn niveau, samengesteld uit één IfcPlate (gordijngevelpaneel) per ruit en één IfcMember (stijl) per stijlstuk, elk met eigen vorm, materiaal en basishoeveelheden.

## Goed om te weten

- Elk formaat wordt gemaakt zoals u vraagt. Alleen een contour zonder oppervlak wordt geweigerd, omdat er niets te maken valt.
- Een systeem dat als wand is getekend, behoudt de hoogte waarmee het getekend is. Als u later een niveau verplaatst, stel de hoogte dan opnieuw in via Eigenschappen.
- Het gereedschap Verplaatsen verplaatst een gordijngevelsysteem nog niet. Verwijder het en teken het opnieuw, of wijzig het raster ter plekke.
- Ongedaan maken neemt elke stap terug: het hele systeem, één wijziging van het raster, één wijziging van de stijlen.
