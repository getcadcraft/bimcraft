---
title: Invändiga fasader
summary: Gör ett blad som visar de fyra väggarna i ett rum inifrån, med mått och taggar, och spara det som PDF.
keywords: invändig fasad, rum, vägg, skåp, kök, fasad, blad, PDF, mått, tagg, utrymme, A-501
from: 1e3a70a8
---

## Vad du gör

Välj ett rum och få ett blad som visar dess fyra väggar så som du skulle se dem när du står inne i rummet. Det är gjort för kök, badrum och alla rum där du behöver se skåp, dörrar och fönster på varje vägg.

## Gör bladet

1. Välj rummet. I planen med {{ui:Rita}} på klickar du inne i rummet. I 3D-vyn eller modellträdet väljer du utrymmet (en IfcSpace).
2. Under **Egenskaper** klickar du på {{ui:Invändiga fasader…}}.
3. Dialogrutan öppnas med bladet.
4. Klicka på {{ui:Ladda ner PDF}} för att spara det. Filen heter "<file> — Invändiga fasader — <room>.pdf" och är en vektor-PDF.
5. Klicka på {{ui:Stäng}} när du är klar.

## Vad bladet visar

Bladet har fyra vyer, två och två, i en gemensam skala: den största standardskalan som ryms. De är **Norra vägg**, **Östra vägg**, **Södra vägg** och **Västra vägg**. Ett ritningshuvud bär bladnumret A-501, titeln "Invändiga fasader — " med rumsnummer och rumsnamn, projektet och datumet.

Varje vy är skuren genom mitten av rummet och tittar på väggen på den sidan. Sidoväggarna, och allt som är skuret i dem, till exempel ett fönster, visas som grå skuren poché runt vyn. Vyn slutar strax efter väggens yta, så ingenting bakom väggen syns.

Varje vy bär:

- rummets bredd under den, från insida till insida;
- rummets höjd bredvid den, från golvet till nivån ovanför;
- en kvadratisk tagg på varje dörr och en sexkantig tagg på varje fönster i den väggen, med deras beteckning (D1, W1 och så vidare);
- en cirkeltagg med artikelnumret på varje biblioteksobjekt som placerats framför den väggen: skåp, sanitetsutrustning och annan utrustning.

:::note
Vyerna görs av modellen varje gång du öppnar dialogrutan, så de stämmer alltid med den. Flytta ett skåp och öppna dialogrutan igen.
:::

## På egna blad

Varje vägg i varje rum är också en vy som du kan lägga på ett blad du gör själv: i projektbläddraren klickar du på {{ui:Nytt blad}} och lägger sedan till under **Invändiga fasader** "101 Kök — Norra vägg" och de andra. Den får samma mått och taggar.

## Finns inte ännu

Invändiga fasader i den genererade ritningsuppsättningen (de kommer från rummets **Egenskaper** eller dina egna blad), rum som inte är i huvudsak rektangulära (vyn ser kvadratisk ut mot varje sida av rummets box), ritning, noteringar eller egna mått på dem, och att välja vilka väggar som visas. Se [Vad som finns inte ännu](topic:not-built-yet).
