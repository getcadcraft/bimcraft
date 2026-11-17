---
title: Leidingen en kanalen controleren tegen de draagconstructie
summary: Voer de kant-en-klare botsingssets van leidingen en kanalen uit tegen wanden, vloeren, balken en kolommen, zoek leidingen die dichter bij de constructie liggen dan hun isolatie plus een ruimte, en maak een lijst van de sparingen die leidingen nodig hebben door wanden en vloeren, als CSV en BCF.
keywords: mep, botsing, botsingscontrole, coördinatie, constructie, wanden, vloeren, balken, kolommen, vrije ruimte, zachte botsing, isolatie, ruimte, sparing, sparingen, doorvoer, mantel, kern, bouwkundig werk, bcf, csv
from: 2d597f01
---

## Wat u gaat doen

Zorg dat de installaties in het gebouw passen: wat de constructie binnendringt, wat er te dicht langs komt en waar wanden en vloeren gaten nodig hebben. Open {{ui:Botsingscontrole}} in het linkerpaneel; de sectie **Leidingen en kanalen tegen de draagconstructie** staat onder de gebruikelijke controle.

## Harde botsingen

De twee setlijsten bieden nu ook **Leidingen en kanalen**, **Wanden**, **Vloeren en daken**, **Balken**, **Kolommen** en **Constructie** (alle vier), met het aantal elementen per lijst. Klik op {{ui:Leidingen en kanalen × draagconstructie}} om de eerste en de laatste te kiezen en de controle uit te voeren; of kies zelf een paar en klik op {{ui:Uitvoeren}}. Zie [Controleren op botsingen](topic:clash-check).

## Vrije ruimte

Sommige installaties hebben ruimte nodig eromheen: hun isolatie, en ruimte om te werken of voor een mantel.

1. Geef een leiding- of kanaalstuk zijn **Isolatie**-dikte in Eigenschappen (er wordt niets voor getekend).
2. Typ de **Ruimte rond leidingen en kanalen** (mm) in de botsingscontrole.
3. Klik op {{ui:Vrije ruimte controleren}}: elk onderdeel dat dichter bij een wand, vloer, balk of kolom ligt dan zijn isolatie plus de ruimte, wordt getoond met de afstand die het heeft en de afstand die het nodig heeft. Klik op een regel om de twee te zien.

Een onderdeel dat door een wand of vloer loopt, is een sparing en geen vrije-ruimteprobleem; het wordt daar in plaats daarvan vermeld.

## Benodigde sparingen

Klik op {{ui:Benodigde sparingen}}. Waar de middellijn van een leiding of kanaal door een wand of vloer loopt, toont BimCraft de sparing die nodig is: rond voor een ronde leiding of een rond kanaal, anders rechthoekig, zo groot als de buitenmaat van het stuk plus tweemaal de isolatie plus tweemaal de ruimte, gecentreerd op de plaats waar het stuk kruist. Klik op een regel om het stuk en de wand of vloer te zien.

- {{ui:Sparingen als CSV}}: één regel per sparing met het stuk, zijn maat en isolatie, de maat van de sparing, het element waar het doorheen gaat en zijn GlobalId, de verdieping, de X-, Y- en Z-waarden van het middelpunt en hoever het stuk erdoor gaat.
- {{ui:Sparingen als BCF-issues}}: één issue per sparing, met een camera die er naar kijkt en het gekozen stuk en element, voor het programma van de constructeur.

:::note
Er wordt niets uitgesneden: de sparingen zijn een lijst voor de mensen die ze dimensioneren. De ruimte is aan u om in te typen; geen voorschrift zegt hoe groot een sparing moet zijn. Balken en kolommen zijn botsingen, geen sparingen: of een leiding er doorheen mag, is aan de constructeur.
:::
