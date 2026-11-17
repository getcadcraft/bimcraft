---
title: Mapmelding: rollen, statussen en koppelingen
summary: Elk label in de mapmelding, wat het betekent, en hoe de suggestie Hier beginnen wordt gekozen.
keywords: mapmelding, rollen, status, compleet, incompleet, onleesbaar, gekoppeld, achtergrond, startbestand, centraal, familie, alleen back-ups, hier beginnen, koppelingsstatus
from: b35bdd10
---

## Kopiestatus

Elke kopie van een model, het hoofdbestand en de genummerde back-ups allemaal, krijgt een controle van de kop.

| Label | Betekenis |
|---|---|
| **Compleet** | De kop en de index van het bestand passen binnen het bestand |
| **Incompleet** | Het bestand is korter dan zijn eigen index aangeeft: het is afgebroken bij het kopiëren, uploaden of synchroniseren, of het is een cloudbestand dat nog "alleen online" is |
| **Onleesbaar** | Het bestand is geen geldig samengesteld bestand, of het kon niet worden gelezen |

In de kolom **Status** toont een model **Compleet**, een oranje "*n* incompleet" wanneer minstens één kopie beschadigd is maar een andere goed is, of een rode **Incompleet** wanneer geen enkele kopie goed is.

## Back-ups

Bestanden met de naam `Naam.0001.rvt`, `Naam.0002.rvt` enzovoort zijn genummerde back-ups van `Naam.rvt`. Ze worden onder hun model gegroepeerd, nieuwste eerst, in **Alle … kopieën**. De kaart wordt gelezen uit het hoofdbestand wanneer dat compleet is, anders uit de nieuwste complete back-up ("nieuwste compleet").

## Rollen

Weergegeven in cursief onder de naam van een model.

| Rol | Betekenis |
|---|---|
| Gekoppeld door *ander model*: achtergrond | Een ander model in de map koppelt dit model, dus het is waarschijnlijk iemands achtergrond, zoals het model van een adviseur |
| Startbestand of naamloos bestand | Een naam als Blank, Template, Default, Untitled of Project1: een startpunt, of een bestand dat nooit goed is benoemd |
| Centraal model | Een centraal model van gedeeld werk. Het werk gebeurt in een lokale kopie, niet hier |
| Familie (een onderdeel) | Een `.rfa`- of `.rft`-bestand: een component, niet het project |
| Alleen back-ups | Het hoofdbestand is weg, en alleen genummerde back-ups zijn overgebleven |

## Hoe Hier beginnen wordt gekozen

BimCraft past de redenering toe die een ervaren gebruiker zou volgen:

1. Kandidaten zijn leesbare projectbestanden (`.rvt`, `.rte`) die niet door een ander model worden gekoppeld en geen startbestanden zijn.
2. Centrale modellen en modellen met alleen back-ups tellen alleen mee wanneer niets beters bestaat.
3. Van de kandidaten wint het bestand dat het laatst is opgeslagen.

Het vak somt de redenen op en waarschuwt wanneer een bestand dat de voor de hand liggende keuze lijkt, beschadigd is, wanneer andere modellen achtergrond zijn, en wanneer de keuze een centraal model is. Het is een beste gok; controleer het bij degene die het project als laatste heeft bewerkt.

## Koppelingsstatus

| Label | Betekenis |
|---|---|
| **In deze map** | Gevonden op het opgeslagen relatieve pad, of aan het einde van het opgeslagen volledige pad binnen de map |
| **Zelfde naam gevonden** | Niet op het eigen pad, maar een bestand met dezelfde naam staat in de map. Controleer of het het juiste is |
| **Bibliotheekbestand** | Een keynote-tabel of een assemblagecodetabel. Deze komen met het programma op elke computer mee |
| **Niet in deze map** | Nergens in de map gevonden |

De kolom **Gevonden koppelingen** in **Modellen** toont hoeveel koppelingen van een model zijn gevonden, van de koppelingen die in de map worden verwacht (bibliotheekbestanden tellen niet mee).

## Terzijde gelegd

| Regel | Betekenis |
|---|---|
| Revit-hulpmappen (niet gelezen) | `*_backup`-, `*_log`- en `Revit_temp`-mappen, plus verborgen mappen en `__MACOSX` |
| Vergrendel-, logboek- en back-upresten | `.dwl`-, `.dwl2`-, `.bak`-, `.err`-, `.log`-, `.tmp`-, `.sv$`-, `.ac$`-, `.lck`- en `.slog`-bestanden |
| Overige bestanden | Al het andere (de eerste 40 worden genoemd) |
