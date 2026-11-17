---
title: Summera mängder, lista element och förteckna utrymmen
summary: Räkna element och summera deras längder, areor, volymer eller valfri talegenskap, grupperat efter valfri egenskap; lista en rad per element; eller förteckna utrymmena med deras areor och volymer. Varje alternativ blir en CSV-nedladdning.
keywords: mängd, mängder, mängdavtagning, summor, summering, förteckning, mängdförteckning, boq, qto, csv, gruppera efter, räkna, längd, area, volym, utrymmen, rum, rumsförteckning, areaförteckning, elementlista
from: e2e7210c
---

## Vad du gör

Få ut summor ur en modell: väggarnas längder per våningsplan, antal dörrar per typ, bjälklagsvolym per material, kostnaden för varje zon.

## Steg

1. Öppna en IFC-modell.
2. Öppna {{ui:Quantity totals}} i vänstra panelen.
3. Under {{ui:Count}} väljer du {{ui:Every element}} eller bara de markerade.
4. Under {{ui:Group by}} väljer du en egenskap, till exempel {{ui:Class}}. Klicka på {{ui:Add a group}} för att dela upp ytterligare, upp till tre, till exempel per {{ui:Storey}}.
5. Under {{ui:Add up}} bockar du i de tal som ska summeras. Modellens mängduppsättningar är ibockade från början.
6. Klicka på {{ui:Download CSV}} för att öppna tabellen i ett kalkylblad.

## Vad du bör se

- En rad per grupp med hur många element den har och varje summa, samt en totalrad.
- Element utan värde räknas men bidrar med ingenting. När det händer lägger CSV:n till en kolumn ”left out” bredvid summan, så att du ser hur många det är.
- Talen är i filens egna enheter, som filen lagrar dem, ofta millimeter för längder.

## En rad per element, eller utrymmena

Ändra {{ui:Show}}:

- **En rad per element**: varje element på sin egen rad, med egenskaperna under {{ui:Columns}} och talen under {{ui:Add up}}. CSV:n börjar med varje elements GlobalId. Klicka på det första värdet i en rad för att välja det elementet.
- **Spaces**: varje rum med sitt nummer, namn, våningsplan, area och volym, samt deras summor. Areor och volymer kommer från utrymmets mängder så som filen anger dem. När filen saknar dem mäts de från utrymmets form i m² och m³ och visas i kursiv stil; CSV:n anger vilket som är vilket.

## Nästa

- [Hitta element efter klass, namn eller egenskap](topic:find)
- [Färglägg element efter en egenskap](topic:color-by-property)

## Infrastruktur (IFC 4.3)

Välj **Infrastruktur (IFC 4.3)** i vylistan för att se vägar, järnvägar, broar och marina anläggningar summerade per klass och typ, med längden, arean och volymen som filen själv anger. En mängd som filen inte anger lämnas tom, aldrig beräknad. **Skicka infrastrukturmängder till TakeoffCraft** sparar en `.quantities.json`-fil som TakeoffCraft öppnar som typade mängder.
