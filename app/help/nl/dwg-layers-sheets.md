---
title: Werken met lagen en bladen
summary: Zet tekeningslagen aan en uit, schakel tussen modelruimte en bladen, en begrijp hoe bladen het model via hun viewports tonen.
keywords: lagen, laag aan uit, bevriezen, ontdooien, bladen, indelingen, papierruimte, tabbladen, viewports, laagbeheer, la
from: a9a16b53
---

## Wat u gaat doen

Maak het beeld van een drukke tekening overzichtelijker door lagen uit te zetten, en bekijk daarna de bladen van de tekening één voor één.

## Stappen: lagen

1. Open een DWG- of DXF-tekening.
2. Zoek de lijst {{ui:Lagen}} aan de linkerkant. Elke laag heeft een vinkvak, een kleurvlak en zijn naam.
3. Haal het vinkje weg bij een laag om alles erop te verbergen.
4. Klik op {{ui:Alles uit}} om elke laag te verbergen.
5. Vink alleen de lagen aan die u wilt zien.
6. Klik op {{ui:Alles aan}} om alles weer te tonen.

## Wat u zou moeten zien

Lagen verdwijnen en verschijnen tegelijk, op {{ui:Model}} en op elk blad. Lagen die in de tekening zelf uit of bevroren staan, beginnen niet aangevinkt.

## Stappen: bladen

1. Kijk naar de rij tabbladen boven de tekening: {{ui:Model}}, daarna elk blad op naam.
2. Klik op een bladtab.
3. Bekijk het blad: het papier ligt op een donkerder bureau, en elke viewport toont zijn deel van het model op zijn eigen schaal en hoek.
4. Zoom in op een viewport om details te lezen. U zoomt het blad, niet de viewport, dus het hele blad beweegt samen.
5. Klik op {{ui:Passend}} of dubbelklik om het hele blad weer te zien.

## Hoe bladen hier werken

Een blad (een indeling of papierruimte) bevat een titelblok en viewports die in de modelruimte kijken. BimCraft tekent elke viewport afgeknipt op zijn rand, op zijn eigen schaal en draaiing, en verbergt de lagen die in die viewport bevroren zijn. De eerste viewport van elk blad is het blad zelf en wordt niet twee keer getekend.

## Veelgemaakte fouten

- **Verwachten dat laagwijzigingen worden opgeslagen.** Laginstellingen werken alleen op het beeld, tot u een ander bestand opent.
- **Verwachten dat lagen per viewport te regelen zijn.** De lijst {{ui:Lagen}} schakelt een laag overal. Lagen die in de tekening in één viewport zijn bevroren, blijven daar bevroren.
- **Zoeken naar een laagzoekfunctie of laagstatussen.** Nog niet beschikbaar. De lijst staat in de volgorde van de tekening.
- **Verwachten dat u binnen een viewport kunt werken.** Er is niets om te activeren: BimCraft toont alleen het blad. Gebruik {{ui:Model}} om de modelruimte direct te bekijken.
