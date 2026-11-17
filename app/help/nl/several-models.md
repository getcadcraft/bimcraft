---
title: Meerdere IFC-modellen samen bekijken
summary: Voeg meer IFC-bestanden toe aan de scène, zoals architectuur, constructie en installaties, bekijk ze in dezelfde coördinaten, verplaats er één, verberg er één en kies welke u bewerkt.
keywords: federeren, federatie, gefedereerd model, meerdere modellen, meerdere bestanden, combineren, overlay, coördinatie, discipline, constructie, mep, installaties, offset, model verplaatsen, actief model, model toevoegen
from: df0efbbf
---

## Wat u gaat doen

Bekijk modellen van verschillende disciplines op één plek: het architectenmodel met de constructie- en installatiemodellen erin. Elk blijft een eigen bestand; BimCraft toont ze alleen samen.

## Stappen

1. Open het eerste IFC-model zoals gewoonlijk.
2. Klik in {{ui:Modellen}} links op {{ui:Een model toevoegen…}} en kies een of meer IFC-bestanden. Elk verschijnt in de lijst en in de 3D-weergave.
3. Vink een model uit om het te verbergen; vink het weer aan om het te tonen.
4. Komt een model op de verkeerde plaats (een ander meetpunt), klik dan onder het model op {{ui:Verplaatsen}}, typ hoe ver het langs X, Y en Z moet worden verschoven, in meter, en klik op {{ui:Toepassen}}.
5. Het model met de stip is het model dat u bewerkt. Klik op de stip van een ander model om dat te bewerken.
6. Klik op × naast een model om het uit de scène te halen.

## De modellen van het team openen

Wanneer het geopende model een cloudbestand in een teamproject is, verschijnt {{ui:Open de modellen van het team}} onder de lijst. Het opent de andere IFC-modellen van het project naast dit model, elk verschoven met de offset die het project heeft ingesteld. Modellen die voor u verborgen zijn, blijven weg en worden geteld; een model dat door het project is gedraaid, wordt ongedraaid geopend en ook geteld; bestanden die geen IFC zijn (een DWG, bijvoorbeeld) worden overgeslagen en in de statusregel genoemd. Een model dat al open is, wordt nooit twee keer geopend. De knop is verborgen voor een bestand dat niet in een teamproject staat.

## Wat u zou moeten zien

- Elk model in de coördinaten van het eerste model, zoals het bestand ze plaatst. Modellen die uit hetzelfde project zijn geëxporteerd, sluiten aan zonder iets te verplaatsen.
- Een element kiezen van een model dat u niet bewerkt, toont de eigenschappen alleen-lezen, met {{ui:Dat model bewerken}} om te wisselen.
- De {{ui:Modelboom}}, {{ui:Verdiepingen}}, {{ui:Kleur}}, de lijst {{ui:Wijzigingen}}, het plaatsen van bibliotheekitems en {{ui:Opslaan als IFC}} werken allemaal op het model dat u bewerkt. Verbergen, isoleren, doorzichtig maken en {{ui:Alles selecteren}} werken over elk model heen.
- {{ui:Opslaan als IFC}} downloadt het model dat u bewerkt, met alleen de wijzigingen.

## Veelgemaakte fouten

- **Een model staat ver weg of ontbreekt.** Het bestand gebruikt andere coördinaten. Gebruik {{ui:Passend}} om het te vinden en verplaats het dan met {{ui:Verplaatsen}} naar de juiste plek.
- **Verwijderen of Kopiëren is grijs bij een gekozen element.** Het hoort bij een ander model: schakel er eerst naar over.
- **Een bestand openen met Een bestand kiezen verving alles.** Dat start een nieuwe scène. Gebruik {{ui:Een model toevoegen…}} om bestanden toe te voegen aan de scène die u hebt.

## Volgende

- [Elementen verbergen, isoleren en doorzichtig maken](topic:hide-and-isolate)
- [Elementen kleuren op basis van een eigenschap](topic:color-by-property)
