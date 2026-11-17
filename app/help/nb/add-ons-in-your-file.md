---
title: Tillegg filen din bruker
summary: BimCraft noterer i en IFC-fil hvilke tillegg som skrev til den, og tilbyr å legge til de du mangler når du åpner den.
keywords: tillegg, add-on, addon, denne filen bruker, manglende tillegg, trusscraft, bibliotek, oppføring, cadcraft_addons
from: 9d9500d8
---

## Hva det gjør

Når et tillegg skriver inn i modellen (et takstol, en rørstrekk), noterer BimCraft tillegget og versjonen i IFC-prosjektet, i et egenskapssett som heter CadCraft_AddOns. Oppføringen skrives i samme angrestegg som tilleggets egen endring, så når du angrer endringen, tas oppføringen tilbake også. Andre programmer ignorerer egenskapssettet; det tillegget tegnet, blir i filen uansett.

## Steg

1. Åpne en IFC-fil som et tillegg var med på å lage.
2. Hvis et tillegg den brukte ikke er på, vises en merknad over modellen som sier hvilke, med en knapp for å legge dem til fra bibliotekskontoen din.
3. Legg dem til, eller lukk merknaden. Modellen åpnes uansett.

## Vanlige feil

- **Ingen merknad vises.** Du er ikke logget inn på kontoen din i denne fanen, eller filen har ingen oppføring (den ble laget før oppføringer fantes, eller av et annet program).
- **Endringslisten sier "undefined".** Rettet: etiketter viser nå tilleggets navn.

## Neste

- [Plasser utstyr og møbler fra biblioteket](topic:place-from-library)
