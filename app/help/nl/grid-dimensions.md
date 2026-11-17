---
title: Maatvoering van een raster
summary: Toon de afstand tussen naburige rasterlijnen en de totale rastermaat op de plattegrond van elke verdieping. Dit wordt opgeslagen in de IFC en volgt het raster wanneer lijnen veranderen.
keywords: raster, rastermaatvoering, maatvoering, afstand, traveeën, totale afmeting, bolletjes, kolomraster, plattegrond, blad
from: aaea5d08
---

## Wat u gaat doen

De afstand tussen rasterlijnen en de totale afmeting van het raster op de plattegronden zetten, voorbij de bolletjes, zodat de bladen die ervan gemaakt worden de maten bevatten. U hebt eerst een raster nodig: zie [Rasters en kolommen](topic:grids-and-columns).

## Stappen

1. Toon de plattegrond van een verdieping en klik op {{ui:Raster}} om het rastergereedschap in te schakelen. De optiebalk van het raster verschijnt.
2. Vink {{ui:Maten}} aan. De afstand tussen naburige genummerde lijnen en tussen naburige letterlijnen, en de totale afmeting in beide richtingen, worden op de plattegrond getekend.
3. Kies een andere verdieping: dezelfde maten verschijnen op de plattegrond daarvan.
4. Verplaats een lijn, hernoem er een of voeg er een toe. De maten volgen het raster.
5. Vink {{ui:Maten}} uit om ze weer te verwijderen.

## Opmerkingen

- Elke wijziging is één stap: {{key:Mod+Z}} maakt die ongedaan.
- De instelling wordt samen met het raster in de IFC opgeslagen, en de plattegronden die op bladen zijn geplaatst, dragen de maten.
- Als het model geen raster heeft dat u kunt wijzigen (een raster dat uit een bestand van een ander programma komt, kan hier niet worden gewijzigd), staat in de statusregel "Er is geen raster om te wijzigen."
