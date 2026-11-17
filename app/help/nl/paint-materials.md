---
title: Materiaal aanbrengen op wanden, vloeren en daken
summary: Geef elementen een materiaal zoals baksteen, gevelbekleding, dakbedekking, hout of tegels, op het hele element of op één zijde, opgeslagen in het IFC en getoond in gerenderde afbeeldingen.
keywords: verven, materiaal, materialen, afwerking, afwerkingen, textuur, baksteen, gevelbekleding, dakbedekking, hout, steen, tegel, beton, stucco, gras, grind, glas, metaal, wandzijde, binnenkant, buitenkant, vloerafwerking, ruimte, oppervlaktestijl
from: fbfed676
---

{{ui:Verven}} op de werkbalk opent de materiaalbibliotheek over de 3D-weergave: baksteen en blokken, gevelbekleding, dakbedekking, hout, steen, tegels, beton, stucco, grond, glas en metaal.

## Elementen verven

1. Klik op {{ui:Verven}}.
2. Klik op een materiaal.
3. Klik op elementen in de 3D-weergave. Elke klik verft het element waarop u klikt.

Om er veel tegelijk te verven, selecteert u ze eerst (klik, {{key:Ctrl}}+klik, of een [zoekopdracht](topic:find)), en klikt u daarna op het materiaal: elk geselecteerd element krijgt het in één stap.

Het element toont de kleur van het materiaal meteen in de 3D-weergave. De textuur verschijnt in een [gerenderde afbeelding](topic:render). {{key:Esc}} of {{ui:Sluiten}} beëindigt het verven.

## Eén zijde verven

Kies {{ui:Alleen de geklikte kant}}, en klik dan op de zijde die u wilt: de buitenkant van een wand in gevelbekleding en de binnenkant in een andere afwerking, of de bovenkant van een vloer in hout met de onderkant ongewijzigd. De rest van het element houdt zijn materiaal.

Een zijde wordt bepaald aan de hand van de eigen richtingen van het element, dus het blijft dezelfde zijde wanneer u het verplaatst of draait.

Om vloeren ruimte voor ruimte te verven, geeft u elke ruimte een eigen vloer ({{ui:Tekenen}} › {{ui:Vloer}} › **Deze ruimte**, zie [Ruimten, vloeren, plafonds en daken](topic:floors-and-roofs)), en verft u daarna de bovenkant van elke vloer.

## Materiaal verwijderen

Klik op het gestreepte staal ({{ui:Geen materiaal}}), en klik dan op het element. Elk materiaal erop, ook op de zijden, verdwijnt.

## In het bestand

Verven wijzigt het IFC (per stap één; {{key:Ctrl+Z}} maakt het ongedaan) en blijft gewoon IFC:

- elk geverfd element krijgt de eigenschapsset `CadCraft_Render` met de naam van zijn materiaal, en één eigenschap per geverfde zijde;
- het lichaam krijgt een oppervlaktestijl met de kleur van het materiaal, zodat andere BIM-programma's de kleur tonen. In IFC4 noemt de stijl ook de textuur.

Wanneer BimCraft een geverfde wand van vorm verandert (u verplaatst bijvoorbeeld het uiteinde), houdt de wand zijn materiaal en zijn kleur: in BimCraft, in afbeeldingen en in andere programma's.

:::note
De texturen worden door BimCraft zelf getekend: ze werken offline en zijn vrij te gebruiken voor alles (CC0). Uw eigen afbeeldingstexturen zijn nog niet beschikbaar.
:::

## Texturen in de 3D-weergave

Een geverfde bakstenen wand toont zijn stenen, een houten vloer zijn planken, op hun echte grootte, zodra de verf erop zit. Vink **Texturen tonen in de 3D-weergave** uit in het paneel Verven om in plaats daarvan egale kleuren te zien (een zeer groot model schakelt ze zelf uit en zegt dat). Kleur op eigenschap toont altijd de eigen kleuren. De texturen worden door het programma getekend, dus er wordt niets gedownload, en de renders en het glTF-bestand bevatten ze in beide gevallen.
