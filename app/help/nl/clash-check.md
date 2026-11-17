---
title: Botsingen controleren
summary: Vind waar elementen van de ene set in elementen van een andere set lopen — kanalen door balken, muren in vloeren — in één model of over meerdere heen, met een tolerantie, en maak van een botsing een issue.
keywords: clash, clashdetectie, clashcontrole, harde clash, interferentie, botsing, coördinatie, overlap, tolerantie, mep, constructie
from: 9cb12346
---

## Wat u gaat doen

Vind de plekken waar twee sets elementen in elkaar lopen, bijvoorbeeld alles in het installatiemodel tegen de constructie. Bekijk daarna elk ervan en houd de belangrijke als issue.

## Stappen

1. Open een IFC-model, en voeg de andere toe met {{ui:Add a model…}} als u over modellen heen controleert. Zie [Meerdere IFC-modellen samen bekijken](topic:several-models).
2. Open {{ui:Clash check}} in het linkerpaneel.
3. Kies bij {{ui:Check}} en {{ui:Against}} twee sets: de elementen die u hebt geselecteerd, een klasse (over elk geopend model), een opgeslagen zoekset (zie [Elementen zoeken op klasse, naam of eigenschap](topic:find)), of alles.
4. Stel in hoeveel overlap u wilt negeren, in meter. 0.01 negeert elementen die elkaar net raken.
5. Klik op {{ui:Run}}. De controle draait op de achtergrond; {{ui:Cancel}} stopt hem.
6. Klik op een resultaat om het te zien: de twee elementen worden geselecteerd en getoond, al het andere wordt doorzichtig, en het beeld zoomt erop in.
7. Klik onder een resultaat op {{ui:Make an issue of it}} om het uit te werken in het tabblad {{ui:Issues}}. Zie [Issues en BCF-bestanden](topic:issues-bcf).

## Wat u moet zien

- De botsingen met de namen van beide elementen (en hun bestanden, wanneer meerdere modellen open zijn) en hoe diep ze overlappen, de diepste eerst.
- Vlakken die elkaar alleen raken, zoals een muur op een vloer of een deur in haar opening, zijn geen botsingen.

## Goed om te weten

- Dit is een basale harde botsingscontrole: elementen waarvan de oppervlakken elkaar kruisen. Een element dat volledig in een ander zit (een leiding in een muur) wordt nog niet gevonden.
- De diepte is hoeveel de begrenzingen van de twee elementen op zijn minst overlappen: een richtlijn, geen exacte meting.

## Volgende

- [Afstanden, vlakoppervlakten en locaties in 3D meten](topic:measure)
- [Elementen verbergen, isoleren en doorzichtig maken](topic:hide-and-isolate)
