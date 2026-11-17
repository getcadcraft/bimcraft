---
title: Add-ons din fil bruger
summary: BimCraft noterer i en IFC-fil, hvilke add-ons der har skrevet i den, og tilbyder at tilføje dem, du mangler, når du åbner den.
keywords: add-on, addon, denne fil bruger, manglende add-on, trusscraft, bibliotek, optegnelse, cadcraft_addons
from: 9d9500d8
---

## Hvad den gør

Når en add-on skriver ind i modellen (et gitterspær, en rørstrækning), noterer BimCraft add-on'en og dens version på IFC-projektet, i et egenskabssæt kaldet CadCraft_AddOns. Noteringen skrives i samme fortrydelsestrin som add-on'ens egen ændring, så fortrydelse af ændringen fjerner noteringen også. Andre programmer ignorerer egenskabssættet; det, add-on'en har tegnet, bliver i filen under alle omstændigheder.

## Trin

1. Åbn en IFC-fil, som en add-on har været med til at lave.
2. Hvis en add-on, filen bruger, ikke er slået til, vises en note over modellen, der siger hvilke, med en knap til at tilføje dem fra din bibliotekskonto.
3. Tilføj dem, eller luk noten. Modellen åbnes under alle omstændigheder.

## Almindelige fejl

- **Ingen note vises.** Du er ikke logget ind på din konto i denne fane, eller filen indeholder ingen optegnelse (den blev lavet før optegnelser, eller af et andet program).
- **Ændringslisten siger "undefined".** Rettet: etiketter viser nu add-on'ens navn.

## Næste

- [Placér udstyr og møbler fra biblioteket](topic:place-from-library)
