---
title: Modellijnen en modeltekst: getekend in het model, op het werkvlak
summary: Een modellijn is een lijn, polylijn of boog die in het model leeft en in elke weergave zichtbaar is die hem ziet. Modeltekst is 3D-letterwerk met echte diepte. Beide worden op het werkvlak getekend.
keywords: modellijn, modeltekst, 3D-tekst, letterwerk, bord, bewegwijzering, lijn in 3D, boog, polylijn, werkvlak, geëxtrudeerde tekst, lettertype, diepte, detaillijn, tekenlijn, annotatie, IfcAnnotation
from: fc9cccb5
---

## Wat u gaat doen

Teken lijnen en letters die deel uitmaken van het model, niet van één weergave.

## Stappen

1. Stel eerst het werkvlak in (zie **Het werkvlak**). Een vlak op verdiepingsniveau tekent u op de plattegrond; een verticaal vlak in de Werkvlakviewer.
2. Voor een lijn kiest u **Modellijn** in het menu **Build** en kiest u **Lijn**, **Polylijn** of **Boog (drie punten)**:
   - een lijn is twee klikken;
   - een polylijn is een klik per punt, daarna Enter of een dubbelklik. Een klik op het eerste punt sluit hem;
   - een boog is drie klikken: het begin, een punt waar hij doorheen gaat, en het eind.
3. Voor tekst kiest u **Modeltekst**. Typ de woorden, stel de hoofdlettershoogte en de diepte in, en klik dan waar de tekst begint (het linkeruiteinde van de basislijn).
4. Selecteer een lijn of tekst om hem in **Eigenschappen** te zien. De woorden, hoogte en diepte van een tekst kunnen daar worden gewijzigd. {{key:Delete}} verwijdert hem.

## Waar ze zichtbaar zijn

- Een modellijn is zichtbaar op de plattegrond van zijn verdieping, in de 3D-weergave, in het gevel- en snedevenster en in de Werkvlakviewer wanneer hij op het werkvlak ligt. Een tekenlijn (Annoteren, Lijn) hoort bij één weergave alleen.
- Modeltekst is massieve geometrie: hij is zichtbaar waar het model zichtbaar is, op de plattegrond, in 3D, in gevels en snedes, en op bladen.
- Modellijnen worden nog niet op afgedrukte bladen getekend. Modeltekst wel.

## Het lettertype

Modeltekst gebruikt hetzelfde lettertype als de bladen en pdf's: Liberation Sans, onder de SIL Open Font License. Een letter die het lettertype niet heeft, wordt getekend als vraagteken en u krijgt te zien welke. Er is één lettertype en één dikte. Letters worden op de breedtes van het lettertype zelf geplaatst, zonder kerning.

## In het IFC-bestand

- Een modellijn is een IfcAnnotation met het objecttype ModelLine. Zijn vorm is een 3D-kromme: een polylijn, of een afgesneden cirkel voor een boog.
- Modeltekst is een IfcBuildingElementProxy met het objecttype ModelText. Zijn vorm is per letterdeel één geëxtrudeerd volume, met de gaten van letters als O en B. Zijn hoeveelheden zijn het vlakoppervlak en het volume (vlakoppervlak keer diepte).

## Goed om te weten

- Elke maat wordt gemaakt zoals u vraagt. Alleen een lijn zonder lengte, een boog waarvan de drie punten op één lijn liggen, of een tekst zonder letters wordt geweigerd, omdat er niets te maken is.
- Elke lijn, en elke tekst of wijziging eraan, is één stap van Ongedaan maken.
