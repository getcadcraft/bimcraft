---
title: Elementen verbergen, isoleren en doorzichtig maken
summary: Selecteer meerdere elementen, verberg ze, toon alleen die, of toon ze terwijl al het andere doorzichtig is, en breng daarna alles terug.
keywords: verbergen, isoleren, doorzichtig, transparant, geest, röntgen, alles tonen, weer tonen, meerdere selecteren, meervoudige selectie, ctrl-klik, shift-klik, zichtbaarheid
from: 97e98b8c
---

## Wat u gaat doen

Maak het beeld leeg tot wat u bekijkt: verberg elementen die in de weg staan, toon alleen de elementen die u koos, of houd al het andere op het scherm als een zwakke contour, zodat u nog weet waar u bent.

## Stappen

1. Open een IFC-model. Zie [Een IFC-model openen en in 3D rondkijken](topic:open-ifc-model).
2. Klik op een element om het te selecteren. Om meer te selecteren, houd {{key:Mod}} of {{key:Shift}} ingedrukt en klik op elk element. Op een geselecteerd element zo klikken haalt het er weer uit.
3. Open {{ui:Tonen}} in de werkbalk en kies wat u wilt doen, of druk op de sneltoets:
   - {{ui:Verbergen}} ({{key:H}}) verbergt de geselecteerde elementen.
   - {{ui:Isoleren}} ({{key:I}}) toont alleen de geselecteerde elementen.
   - {{ui:Doorzichtig}} ({{key:T}}) toont de geselecteerde elementen zoals ze zijn, en al het andere doorzichtig.
4. Klik op {{ui:Alles tonen}} in hetzelfde menu, of druk op {{key:Shift+H}}, om elk element weer te tonen.
5. Om alles rond de geselecteerde elementen weg te snijden, klikt u in hetzelfde menu op {{ui:Snijkader om de keuze}}, of drukt u op {{key:Shift+X}}. Zie [Een IFC-model doorsnijden met een snijvlak](topic:section-plane).

## Wat u ziet

- Met meerdere geselecteerde elementen zegt {{ui:Eigenschappen}} hoeveel het zijn, en somt ze op per klasse. Klik op één ervan apart om zijn eigenschappen te zien.
- Verborgen elementen kunnen niet geselecteerd worden: een klik komt terecht bij wat erachter ligt.
- Doorzichtige elementen kunnen ook niet geselecteerd worden, zodat u rechtstreeks door muren heen kunt klikken naar wat u hebt geïsoleerd.
- Randen verbergen zich met hun element en worden er zwak mee.
- Verbergen, isoleren en doorzichtig blijven zoals ze zijn terwijl u bewerkt, bibliotheekitems plaatst of het model met een snijvlak doorsnijdt. Een ander model openen toont alles weer.

## Veelvoorkomende fouten

- **De menu-items zijn grijs.** Er is niets geselecteerd. Klik eerst op een element; wijs een item aan om te lezen waarom het niet kan werken.
- **Isoleren toonde een wand die ik had verborgen.** Isoleren toont precies wat u selecteerde, verborgen of niet.
- **Een hele verdieping ontbreekt.** Dat is de lijst {{ui:Verdiepingen}}, niet {{ui:Alles tonen}}: vink de verdieping opnieuw aan.

## Volgende

- [Verdiepingen, ruimten en randen tonen en verbergen](topic:storeys-and-spaces)
- [Een IFC-model doorsnijden met een snijvlak](topic:section-plane)
