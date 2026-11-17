---
title: Rutnät och pelare
summary: Lägg ut rutnätslinjer med numrerade och bokstavsbubblor, efter avstånd eller en i taget, rita väggar och pelare längs dem och se dem i plan, fasader och sektioner.
keywords: rutnät, rutnätslinje, pelarrutnät, axel, axlar, bubbla, strukturellt rutnät, 1 2 3, A B C, pelare, stolpe, fångst, IfcGrid, IfcColumn
from: bf99a8f7
---

## Vad du gör

Lägg ut en byggnad på ett rutnät och rita sedan väggar och placera pelare längs dess linjer.

## Placera ett helt rutnät

1. Slå på {{ui:Rita}} och välj sedan {{ui:Bygge}} › {{ui:Rutnät}}.
2. Klicka på {{ui:Placera ett rutnät…}}. Ange hur många **numrerade linjer** (1, 2, 3…) och **bokstavslinjer** (A, B, C…) du vill ha och hur långt från varandra. Skriv ett avstånd, eller flera separerade med kommatecken för ojämna spann (till exempel `20', 24', 20'`). {{ui:Past the last lines}} anger hur långt varje linje sträcker sig utöver de yttre linjerna av den andra sorten, och {{ui:Turned (degrees)}} vrider hela rutnätet.
3. Klicka på {{ui:Placera det}} och klicka sedan där den första skärningen (1 / A) ska ligga. Förhandsvisningen följer pekaren.

Numrerade linjer går upp i planen och fördelas tvärs över den; bokstavslinjer går tvärs över planen och fördelas uppåt. Bokstäverna hoppar över I och O, som på ritningar, så de aldrig läses som 1 och 0.

## Rita rutnätslinjer en i taget

Med {{ui:Rutnät}} på klickar du där en linje börjar och där den slutar. Den får nästa etikett bland de linjer den går längs (efter 3 kommer 4; efter B kommer C). Tryck på {{key:Esc}} för att sluta.

## Ändra en rutnätslinje

Med {{ui:Rutnät}} på klickar du på en linje för att välja den. Skriv en ny {{ui:Etikett}} och tryck på {{key:Enter}}, eller klicka på {{ui:Ta bort den här linjen}} (eller tryck på {{key:Delete}}). {{ui:Bubblor}} sätter bubblor i båda ändarna, i början eller slutet av varje linje, eller ingenstans. Varje ändring är ett steg: {{key:Mod+Z}} tar tillbaka den.

## Rita längs rutnätet

Verktyget {{ui:Vägg}}, verktyget {{ui:Pelare}} och de andra ritverktygen fångar mot rutnätslinjerna och mot var de korsar varandra (fångstmärket är en liten cirkel med ett kryss).

**Pelare:** välj {{ui:Bygge}} › {{ui:Pelare}}, välj form (rektangulär eller rund), storlek och om pelaren går **till planet ovanför** eller till en fast höjd, klicka sedan. {{ui:At every grid crossing}} placerar en pelare vid varje skärning som ännu inte har någon. Klicka på en pelare för att ändra dess form, storlek eller höjd i {{ui:Egenskaper}}; {{key:Delete}} tar bort den. Pelare som går till planet ovanför följer det när dess höjd ändras.

## Vad du ska se

- Rutnätet i planen för varje nivå, med en bubbla och dess etikett i ändarna av varje linje.
- Rutnätslinjer i ritningsuppsättningen: i planerna, och i fasader och sektioner där en linje ses från kanten, med sin bubbla ovanför byggnaden. Se [Fasader, sektioner och blad](topic:sheets).
- I IFC-filen: ett rutnät för byggnaden (IfcGrid, med dess numrerade linjer i en lista och dess bokstavslinjer i den andra), och pelare som IfcColumn med sin storlek, höjd och kvantiteter. Andra BIM-program visar båda.

:::note
Ett rutnät som kom i en fil från ett annat program visas, och verktygen fångar mot det, men dess linjer kan inte ändras här.
:::
