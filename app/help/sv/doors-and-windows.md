---
title: Dörrar och fönster
summary: Placera dörrar och fönster i ritade väggar: peka på en vägg, se svängningen och avstånden till hörnen, klicka; väggöppningen skär sig själv.
keywords: dörr, dörrar, fönster, öppning, svängning, gångjärn, handed, vänd, skjutdörr, pocketdörr, garageport, dubbeldörr, utåtgående fönster, enkelhängt, dubbelhängt, skjutfönster, fast fönster, fönsterbänk, överstycke, vikdörr, garderobsdörr, franska dörrar, ladugårdsdörr, sidoljus, entrédörr, markisfönster, panoramafönster, ovanljus
from: 4d8ac009
---

## Vad du gör

Placera dörrar och fönster i väggar du ritat ([Rita väggar](topic:draw-walls)). Peka på en vägg så visar dörren eller fönstret var det skulle hamna, åt vilket håll det svänger och hur långt det är från varje hörn. Klicka, så skär öppningen sig själv ut ur väggen i planen och i 3D.

## Placera en dörr

1. Med {{ui:Rita}} på klickar du på {{ui:Dörr}} (eller trycker på {{key:D}}).
2. Välj typ: **Enkelslagsdörr**, **Dubbelslagsdörr**, **Skjutdörr**, **Pocketdörr**, **Garageport**, **Vikdörr för garderob**, **Franska dörrar**, **Ladugårdsdörr (på väggen)** eller **Entrédörr med sidoljus**. Dess vanliga storlek fyller i **W** och **H**. Välj en annan från storleks listan bredvid, eller skriv in andra, till exempel `2'-8"` eller `800`. Listan erbjuder också dörrfamiljerna i den här modellen (se [Familjer och deras storlekar](topic:families)).
3. Peka på en vägg. Dörrens symbol följer pekaren längs väggen, och avståndet från varje ände av den väggytan visas i planen.
4. Dörren svänger åt den sida av väggen som pekaren är på. Tryck på {{key:H}} (eller klicka på {{ui:Vänd}}) för att lägga gångjärnen i den andra änden.
5. Klicka. Dörren placeras och verktyget är kvar på för nästa. Peka på mitten av en vägg så centrerar dörren sig själv.

För att placera den på ett exakt avstånd, peka på väggen nära hörnet du mäter från, skriv avståndet (till exempel `2'` eller `600`) och tryck på {{key:Enter}}. Avståndet går från den närmaste änden av väggytan till dörrens kant.

## Placera ett fönster

1. Klicka på {{ui:Fönster}} (eller tryck på {{key:N}}).
2. Välj typ: **Fast fönster**, **Enkelhängt fönster**, **Dubbelhängt fönster**, **Utåtgående fönster**, **Skjutfönster**, **Markisfönster**, **Panoramafönster** eller **Ovanljus**, samt dess **W**, **H** och **Sill** (höjden på fönstrets nederkant över golvet).
3. Peka på en vägg och klicka, eller skriv ett avstånd och tryck på {{key:Enter}} som för dörrar. Ett fönster sitter på väggens utsida.

## Flytta, vänd, ta bort

- Med {{ui:Markera}} på drar du en dörr eller ett fönster längs sin vägg. Dra det till en annan vägg för att flytta det dit.
- {{key:Delete}} tar bort de markerade dörrarna och fönstren. Väggen sluts.
- Att flytta eller ta bort en vägg flyttar eller tar bort det som sitter i den. När en väggs start flyttas längs sin egen linje behåller dess dörrar och fönster sin plats.
- {{ui:Ångra}} och {{ui:Gör om}} tar varje placering, flytt eller borttagning tillbaka och fram.

## Vad som nekas

- **Det ryms inte i väggen.** Dörren eller fönstret är bredare än väggen, eller skulle sticka ut ur dess ände. Prova en kortare bredd eller en längre vägg.
- **Det är högre än väggen.** Sillen plus höjden ligger över väggens överkant.

## Vad som sparas

Varje dörr eller fönster är en IFC-dörr eller IFC-fönster med sin storlek, sin funktion (till exempel enkel svängning vänster), sin storlekstyp (en typ för varje storlek i sin familj), `Pset_DoorCommon` eller `Pset_WindowCommon` och grundmängder, och fyller en IFC-öppning i sin vägg. Väggens nettoarea på sidan och volymen lämnar öppningen utanför. Andra BIM-program öppnar den som en dörr i en vägg.

## Bra att veta

- Planen visar dörrar öppna i 90° med deras svängning, skjutdörrar som två paneler, pocketdörrar som glider in i väggen, garageportar som en streckad linje ovanför, och fönster med deras karm- och glaslinjer.
- Bredden är fönsterkarmens totala bredd. Dörrbladet är bredden minus de två karmarna.
- Att kopiera ritade dörrar och fönster är inte byggt ännu. Placera ett nytt.

## Källarfönster för utrymning och fönsterbrunn

Välj **Källarfönster för utrymning med brunn** i listan över fönstertyper. Det börjar som ett utåtgående fönster på 36 × 48 inch med en fönsterbänk 36 inch över nivån. Brunnen ligger på väggens utsida, med minst 48 inch fri bredd, 36 inch utsträckning och en botten 6 inch under fönsterbänken. Den syns som streckade linjer i planen och som tre sidor utan lock i 3D. Brunnen är en del av fönstrets IFC-kropp, så att spara, flytta, ändra storlek på eller ta bort fönstret tar med den. Vid storleksändring behålls minst 6 inch bredvid varje karm.

Det här är modelleringsstandarder, inte ett intyg om att utrymningskravet uppfylls. Kontrollera tillverkarens faktiska fria öppning, lokala krav, marknivå, dränering och eventuell nödvändig stege separat. Brunnens djup och höjd är förinställda mått. De följer inte terrängen.
