---
title: Väggar och dörrar från en telefon- eller laserskanning
summary: Gör om en skanning av ett rum till föreslagna väggar, dörrar och rum som du godkänner en i taget.
keywords: skanning, telefonskanning, lidar, punktmoln, väggar från skanning, dörrar från skanning, rumsskanning, ply, e57, las, obj, föreslå
from: a4ef0f10
---

## Vad den gör

Med en skanning öppen (ett punktmoln som PLY, E57 eller LAS, eller ett nät som OBJ) skär BimCraft skanningen vid planhöjden, vrider den rät mot byggnaden och letar efter långa, tunna serier av punkter: de är väggar. Ett gap i dörrens bredd mellan två serier på samma linje blir en vägg med en dörr i. Väggarna som sluter ett utrymme bildar ett rum.

Inget ritas förrän du godkänner. Väggarna och dörrarna kommer som en lista med förslag (de är ändringar i Föreslå-läget): behåll de som stämmer, avvisa de övriga, och allt du behåller ritas i ett steg i Ångra. Rummen dyker upp av sig själva.

## Vad den kontrollerar

Väggar som inte sluter sig, väggserier som är kortare än en vägg är tjock, och ett dörrstort gap utan vägg runt sig rapporteras som Problem med en position, så att du kan titta på skanningen där.

## Overifierat tills det är kontrollerat

Väggarna, dörrarna och rummen du godkänner från en skanning markeras som overifierade: en streckad ruta och ett "?" i planen tills du markerar dem som kontrollerade. Se [Markera element som kontrollerade eller fältverifierade](topic:verification).

## Vad den inte kan göra

- Den hittar väggar som går i två vinkelräta riktningar. En diagonal eller krökt vägg hittas inte.
- En våningsplan i taget. Fönster hittas inte (ett fönster är bara ett gap när snittet ligger på fönsterbänkens höjd).
- Den har testats på genererade rumsskanningar och nät, men ännu inte på skanningar från en riktig telefon. Hur väl den klarar en riktig skanning (drift över en lång promenad, möbler mot väggar, glas, öppna dörrar) är inte känt, och att finjustera den på riktiga skanningar är nästa steg. Kontrollera varje förslag mot skanningen innan du godkänner det.
