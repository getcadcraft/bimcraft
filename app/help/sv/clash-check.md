---
title: Kontrollera kollisioner
summary: Hitta var element i en uppsättning går in i element i en annan, till exempel kanaler genom balkar eller väggar in i bjälklag, i en modell eller över flera, med en tolerans, och gör en kollision till ett ärende.
keywords: kollision, kollisionsdetektering, kollisionskontroll, hård kollision, interferens, krock, samordning, överlapp, tolerans, mep, konstruktion
from: 9cb12346
---

## Vad du gör

Hitta platserna där två uppsättningar element går in i varandra, till exempel allt i installationsmodellen mot konstruktionen. Titta sedan på varje plats och behåll de som betyder något som ärenden.

## Steg

1. Öppna en IFC-modell och lägg till de andra med {{ui:Add a model…}} om du kontrollerar över flera modeller. Se [Visa flera IFC-modeller tillsammans](topic:several-models).
2. Öppna {{ui:Clash check}} i vänstra panelen.
3. I {{ui:Check}} och {{ui:Against}} väljer du två uppsättningar: de element du valt, en klass (över alla öppna modeller), en sparad sökuppsättning (se [Hitta element efter klass, namn eller egenskap](topic:find)) eller allt.
4. Ange hur mycket överlapp som ska ignoreras, i meter. 0.01 ignorerar element som precis möts.
5. Klicka på {{ui:Run}}. Kontrollen körs i bakgrunden; {{ui:Cancel}} stoppar den.
6. Klicka på ett resultat för att se det: de två elementen väljs och visas, allt annat blir genomskinligt och vyn zoomar till dem.
7. Klicka på {{ui:Make an issue of it}} under ett resultat för att skriva upp det i fliken {{ui:Issues}}. Se [Ärenden och BCF-filer](topic:issues-bcf).

## Vad du bör se

- Kollisionerna listade med båda elementens namn (och deras filer, när flera modeller är öppna) och hur djupt de överlappar, djupast först.
- Ytor som bara vidrör varandra, som en vägg som står på ett bjälklag eller en dörr i sin öppning, är inte kollisioner.

## Bra att veta

- Detta är en grundläggande kontroll av hård kollision: element vars ytor korsar varandra. Ett element som helt döljs inuti ett annat (ett rör gömt i en vägg) hittas ännu inte.
- Djupet är hur långt de två elementens gränser överlappar på minsta sätt. Det är en vägledning, inte ett exakt mått.

## Nästa

- [Mät avstånd, ytareor och lägen i 3D](topic:measure)
- [Dölj, isolera och gör element genomskinliga](topic:hide-and-isolate)
