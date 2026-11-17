---
title: Schachten en openingen door vloeren
summary: Een schacht is één contour die elke vloer, elk plafond en elk dak tussen twee niveaus doorsnijdt. Een verticale opening snijdt er één. Een wandopening snijdt een wand.
keywords: schacht, liftschacht, liftschacht, trapopening, optrede, verticale opening, vloeropening, plafondopening, dakopening, lichtkoepelopening, gat in vloer, wandopening, IfcOpeningElement, aftrek, nettooppervlak
from: 8e9e1641
---

## Wat u gaat doen

Snijd een liftschacht door een gebouw met één schets, snijd een gat in één vloer, en lees wat uit de oppervlakken is gehaald.

## Waar de gereedschappen staan

- Lintindelingen: {{ui:Architectuur}} › **Opening** › {{ui:Schacht}}, {{ui:Verticale doorbreking}} en {{ui:Wandopening}}.
- Klassieke indeling: de werkbalk Tekenen › menu {{ui:Ruimten}} (Schacht, Verticale doorbreking) en › menu {{ui:Wanden}} (Wandopening).

## Een schacht

1. Open de plattegrond van het niveau waarop de schacht begint. Kies {{ui:Schacht}}.
2. Kies in de rij het {{ui:Onderste niveau}} en het {{ui:Bovenste niveau}}, en offsets als hij boven of onder die niveaus begint of eindigt.
3. Klik op de hoeken van de contour. Klik nogmaals op de eerste hoek, dubbelklik of druk op Enter om te eindigen.
4. Elke vloer, elk plafond en elk dak tussen de twee hoogten wordt doorgesneden. De statusregel zegt hoeveel.

Een schacht is één ding. Kies de contour op elk niveau dat hij passeert: Eigenschappen heeft de naam, de niveaus en de offsets, wat hij snijdt en de oppervlakte die eruit is gehaald. Wijzig hem en elke opening volgt. Verwijder hem en elke opening verdwijnt. Elk is één stap in Ongedaan maken.

Hij blijft snijden: een vloer die later tussen zijn niveaus wordt gemaakt, wordt zonder dat u erom vraagt doorgesneden, en een vloer die u verwijdert, wordt losgelaten.

De vloer waarop de schacht staat, wordt niet doorgesneden (de bovenkant ervan is de basis). Geef de basis een negatieve offset om die ook door te snijden. Geef de bovenkant een positieve offset om door het dak te gaan.

## Een verticale opening

1. Kies {{ui:Verticale doorbreking}}. Kies in de rij wat er gesneden moet worden: de vloer, het plafond of het dak.
2. Klik op de hoeken van de contour en eindig zoals hierboven.
3. De vloer, het plafond of het dak van dit niveau onder de contour wordt doorgesneden. Het hoort bij dat ene element: verwijder de vloer en de opening gaat mee weg.

## Een wandopening

{{ui:Wandopening}} is het gereedschap van [Een wand vormgeven](topic:wall-shape): klik op een wand in de plattegrond, of op twee hoeken van het vlak in 3D.

## Hoeveelheden

Volgens de meetregel voor vloeren is het nettooppervlak van een element het brutooppervlak min wat eruit is gesneden. Een schacht of verticale opening is een aftrek op elke vloer en elk plafond die hij snijdt; de staten Vloeren en Afwerkingen en de IFC-hoeveelheden tonen dezelfde getallen. Op een dak is de aftrek het oppervlak van het dakvlak: het grondoppervlak gedeeld door de cosinus van de helling.

Een contour die over de rand heen hangt, trekt alleen het deel af dat op het element ligt.

## Als er niets wordt gesneden

Een schacht zonder iets in de weg wordt toch gemaakt, en dat wordt gemeld: hij snijdt wat er later daar wordt gebouwd. Een verticale opening heeft iets eronder nodig; is daar niets, dan zegt de statusregel dat en wordt niets gemaakt.

## In de IFC

Elke snede is een IfcOpeningElement met een IfcRelVoidsElement naar het element dat het snijdt, zodat elk IFC-programma het gat toont. Een dak wordt vlak voor vlak gesneden. De schacht zelf is een IfcGroup van zijn openingen.

## Nog niet beschikbaar

- Gebogen contouren.
- De wanden van een schacht: teken ze met het gereedschap Wand.
- De contour bewerken door de hoeken te verslepen (wijzig hem in Eigenschappen, of verwijder hem en schets opnieuw).
- De eigen Eigenschappen van een getekende vloer tonen alleen het oppervlak min de eigen openingen; de staten en de IFC-hoeveelheden bevatten die van de schacht wel.

Zie ook [Ruimten en ruimtescheiders](topic:rooms-and-separators).
