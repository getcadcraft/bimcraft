---
title: Arbeta i en modell tillsammans med Live TeamWork
summary: Vad som ändras i BimCraft medan du är i en Live TeamWork-session från CadCraft Studio: allas redigeringar i samma IFC-modell, din egen ångra och att ansluta från en webbläsare på samma nätverk.
keywords: live, live teamwork, studio live, tillsammans, samarbeta, session, dela live, ansluta, ifc, egenskaper, byt namn, markör, pekare, se varandra, namn, färg, markering, ångra, värd
from: 32061b72
---

## Vad du lär dig

Vad som händer med en IFC-modell när flera personer redigerar den samtidigt. CadCraft Studio startar och ansluter till Live TeamWork-sessionen (Dela, Anslut); den här sidan handlar om själva modellen.

## Alla redigerar samtidigt

Värdens modell kommer till alla som ansluter. Byt namn på element, ändra deras egenskapsvärden, placera, byt ut eller ta bort biblioteksobjekt och element som vanligt. Dina egna redigeringar syns direkt; andras syns en stund efter att de gjort dem. När en redigering ändrar det du ser (ett element placeras eller tas bort) ritar BimCraft om modellen och behåller din vy.

- **Två personer ändrar ett element:** den senare ändringen på samma rad i modellen gäller. En egenskapsuppsättning som delas av flera element kopieras för elementet du redigerar, som vanligt, så de andra behåller sina värden.
- **Ett element som någon just tagit bort** kan inte redigeras längre: din redigering tas tillbaka, och statusfältet säger varför.
- Varje persons nya rader i modellen får egna nummer, så två personer får aldrig samma nummer.

## Se varandra

Alla i sessionen har en egen färg. I 3D-vyn ser du varje persons markör som en pil i deras färg med deras namn bredvid, på elementet de pekar på, och en streckad ruta i deras färg runt varje element de har markerat.

Markörer, namn och markeringar gäller bara sessionen: de sparas aldrig i filen och hamnar aldrig i någons ångra. De glider till där varje person befinner sig, så de förblir jämna även vid en långsam uppkoppling.

## Ångra gäller ditt eget arbete

{{ui:Undo}} ångrar din egen senaste redigering och lämnar allas andra ifred. När någon ändrat samma sak sedan dess ångras inget, och statusfältet säger vem.

## Anslut från en webbläsare

En medarbetare utan Studio kan skanna bilden under värdens kod med en telefon, surfplatta eller dator på samma nätverk. BimCraft öppnas i webbläsaren och öppnar värdens modell när värden släpper in dig. En inbjudningslänk gör att någon kan ansluta från ett annat nätverk: värden behöver en Team Cloud Plan-plats för appen, alla andra ansluter gratis, och länken fungerar bara medan värdens session är öppen.

## När sessionen slutar

Bara värden sparar modellen. Alla andra behåller en osparad kopia: använd Spara som IFC om du vill behålla den.

:::note
Bara den första modellen i scenen delas. Om du öppnar en annan fil under en session lämnar sessionen det fönstret.
:::
