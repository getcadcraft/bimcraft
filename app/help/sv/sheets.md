---
title: Fasader, sektioner och blad
summary: Rita sektionslinjer i planen och öppna sedan Blad för en utskriftsklar uppsättning gjord från modellen: planer för varje nivå, de fyra fasaderna, byggnadssektioner, förteckningar och väggreglar, med ritningshuvuden och skalor, som en enda PDF.
keywords: blad, ritningsuppsättning, bygghandlingar, utskrift, plotta, pdf, fasad, fasader, nordfasad, sektion, byggnadssektion, sektionslinje, snitt, dolda linjer, ritningshuvud, bladnummer, skala, 1/4" = 1'-0", 1:50, 1:100, papper, 11x17, 24x36, A3, A1, bygglovsuppsättning
from: 91ed0cde
---

## Vad du gör

Gör en ritningsuppsättning av modellen: planen för varje nivå, nord-, öst-, syd- och västfasaden, en byggnadssektion för varje sektionslinje, förteckningarna över dörrar, fönster, rum och virke, och en fasad av varje inramad vägg. Uppsättningen ritas om från modellen varje gång du öppnar den, så den alltid stämmer med det du byggt.

## Rita en sektionslinje

1. På en nivå, öppna {{ui:Bygge}} och välj {{ui:Sektionslinje}}.
2. Klicka där linjen börjar och där den slutar. Den korta linjen mitt på visar vilken sida sektionen tittar mot: linjens vänstra sida, i riktning från första klicket till det andra.
3. Linjen visas i planen med sina ändar och sin bokstav (A, sedan B, och så vidare).

Markera linjen för att ändra den i **Egenskaper**: dess bokstav, **Vänd vyn** för att titta åt andra hållet, och **Titta så långt** för att stoppa vyn ett valt avstånd bakom snittet (0 visar allt bakom det). Tryck på {{key:Delete}} för att ta bort den.

## Öppna bladen

1. Klicka på {{ui:Blad}} i modellfältet (bredvid {{ui:Skriv ut}}).
2. Bladen listas till vänster: **A-101** och vidare för planer, **A-201** för fasader, **A-301** för sektioner, **A-401** för förteckningar och **S-101** för väggreglar. Klicka på ett för att se det.
3. Välj **Papper**: Letter, Tabloid (11 × 17), Arch D (24 × 36), A3 eller A1. Papperet behåller sitt standardnamn och dess storlek skrivs i de {{ui:Enheter}} du valt, till exempel *Letter · 8.5 × 11 in* eller *A3 · 297 × 420 mm*.
4. Klicka på {{ui:Ladda ner uppsättningen som PDF}}: en sida per blad.

## Standardnoteringar från ett regelverk

I ett blad låter {{ui:Standardnoteringar}} dig placera noteringar från ett regelverk (per disciplin) i bladets högra kolumn. Varje notering behåller det regelverk och den paragraf den kommer från, och det utskrivna bladet anger när regelverket är ej verifierat. Noteringarna är en utgångspunkt: den ansvariga personen för ritningen bestämmer vad de säger. De kräver tillägget Byggregler.

## Vad som finns på bladen

- **Planer** visar väggar, dörrar, fönster, rum med sina ytor, mått och sektionslinjer, i den största standardskala som ryms: 1/4" = 1'-0" eller mindre (1:50 eller mindre i millimeter).
- **Fasader** ritas från 3D-modellen med dolda linjer borttagna, två per blad, alla i samma skala, med en markerlinje under dem. Taket, grunden och marken visas som de är modellerade.
- **Sektioner** fyller det snittet går genom (väggar, golv, tak) och ritar det som syns bortom det.
- **Fasader och sektioner har sina noteringar:** en markering för varje nivå med dess namn och höjd till höger, höjden mellan nivåerna till vänster, och på en fasad byggnadens bredd under den samt en etikett (D1, W1) på varje dörr och fönster i en vägg som vetter mot dig. För ett rums egna väggar, se [Interiörfasader](topic:interior-elevations).
- **Förteckningar** är samma tabeller som {{ui:Förteckningar}} i modellfältet.
- **Reglar** visar varje inramad väggs reglar, syllar, överliggare och fönsterbänkar sett från dess utsida, så att ett arbetslag kan lägga ut den. Se [Rama in väggar, golv och tak](topic:framing).

Varje blad har ett ritningshuvud med sitt nummer, sin titel, filens namn och datumet.

:::tip
Bladen kommer från modellen: för att ändra en ritning, ändra modellen och öppna {{ui:Blad}} igen.
:::

:::note
Fasader och sektioner visar bara linjer och fyllningar: mått, nivåmarkeringar och noteringar på dem finns inte ännu.
:::
