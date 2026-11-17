---
title: De afbeelding tekenen met een ander programma
summary: Onze eigen padtracer tekent de afbeelding van Renderen; een ander programma kan dat alleen doen via een render-engine-add-on in CadCraft Studio. Wat er wordt meegenomen, en waarom sommige programma's nooit worden aangeboden.
keywords: render, engine, extern programma, add-on-engine, studio, achtergrond, wachtrij, usd, gltf, getekend door, blender, gpl
from: 652b413c
---

De afbeelding in {{ui:Renderen}} wordt getekend door **onze eigen engines**: Snel en de Padtracer, in de browser en in CadCraft Studio. Een ander programma kan hem alleen tekenen wanneer een **render-engine-add-on** dat mogelijk maakt: zie [Een renderengine toevoegen met een add-on](topic:render-engine-addons). Om de scène naar een ander programma te brengen en daar verder te werken, gebruikt u [De scène openen in een ander programma](topic:render-open-in) of [De scène naar een game-engine sturen](topic:render-unreal).

## Een afbeelding tekenen met de engine van een add-on

1. Schakel de add-on in via Instellingen › Add-ons. De engine verschijnt in de lijst Engine van {{ui:Renderen}}.
2. Kies hem. De eigen instellingen van de engine verschijnen onder de lijst Engine.
3. Klik op {{ui:Renderen}}. In Studio vraagt Studio u de eerste keer dat een add-on een programma uitvoert, in een eigen dialoogvenster. De voortgang wordt getoond terwijl hij tekent; met {{ui:Stoppen}} stopt u hem. De afbeelding verschijnt met een markering van de engine die hem heeft getekend.

Een engine geschreven in JavaScript werkt ook in de browser. Een engine die een programma op deze computer uitvoert, werkt alleen in Studio; in de browser verschijnt hij als een bestand om op te slaan.

## Wat wordt meegenomen

De engine krijgt een **pakket**: het model als USD-bestand (en een glTF-bestand wanneer hij daarom vraagt), en een instellingenbestand met de exacte materiaalwaarden, de zon en de lucht, elke lamp die aan staat met zijn vermogen en lichtprofiel, de camera en de belichting. Elk programma verlicht, tint en bemonstert op zijn eigen manier, dus afbeeldingen lijken qua camera, zon, lampen en belichting op elkaar, maar niet pixel voor pixel.

## Programma's die CadCraft nooit uitvoert

CadCraft start nooit een programma onder de GNU GPL-licentie, en vermeldt er nooit een als engine of als doel van Openen in. Blender is er een van, dus die staat niet in de lijst Engine. Een USD- of glTF-bestand dat vanuit {{ui:Renderen}} is opgeslagen, opent daarin nog steeds, net als in elk programma dat die bestanden leest.

:::note
Panorama- en stereocamera's en een luchtafbeelding (de kleuren van de lucht worden dan gebruikt) worden niet meegenomen naar een ander programma. Niets wat in een ander programma gebeurt, komt terug in het model.
:::
