---
title: Skicka rör till ett spännings- eller isometriprogram och läs tillbaka det (PCF)
summary: Skriv modellens rörledningar som en PCF-rörkomponentfil, eller läs en PCF-fil från ett rörspännings- eller isometriprogram och rita dess rör som ledningar.
keywords: pcf, rörkomponentfil, rörspänning, isometri, isometrier, export, import, rör, anläggning, stålrör, flytta ett jobb, annan programvara
from: 24f91355
---

## Det här gör du

PCF är den textfil som rörspännings- och isometriprogram läser och skriver. Den listar varje rörlednings komponenter med deras ändpunkter och diametrar.

## Export

1. Välj Rörverktyget. Alternativraden visar **Exportera PCF**.
2. Klicka på den. Varje rörledning i modellen skrivs: rakt rör, böjar (en vändning på 90 grader, annars en krök), T-stycken med deras grenpunkt, reducerare och ventiler.
3. Filen använder millimeter. Diametrarna är nominella diametrar i millimeter. En böjs mittpunkt är dess hörn, där dess två ben möts.

PCF skrivs för stålrör med stumsvets. En ledning i ett annat material skrivs också, med stålkomponentnycklar, och noteras i problempanelen.

## Import

1. Välj Rörverktyget och klicka på **Importera PCF…**, och välj sedan filen.
2. Rakt rör genom böjar, krökar, ventiler och flänsar blir en ledning på aktuell nivå. En storleksändring startar en ny ledning. En T-stycksgren blir en egen ledning som startar vid T-styckets mittpunkt.
3. Modellen lägger sina egna kopplingsdelar. Reducerare och T-stycken kopieras inte: de visas där ledningar av olika storlek, eller en gren, möts.

:::note
Höjder i filen läses som höjder över aktuell nivå. Laster, fasthållningar och själva spänningsanalysen finns inte i en PCF-fil och följer inte med.
:::

## Kontrollera vad som kom med

- Total rörlängd per rörledning bör stämma med källan.
- Problempanelen listar, en gång vardera, en böj vars mittpunkt inte ligger lika långt från båda ändarna, rör utan längd, och en diameter som inte är en standardstorlek.

## Rör som redan finns i en IFC-fil

När en IFC-fil är öppen skriver **Exportera PCF** också dess egna rörsegment, kopplingsdelar och ventiler, bredvid de ledningar du ritat. Ett segment får sina ändar från sina portar, eller från ändarna på sin kropp. En kopplingsdel utan portar utelämnas och problempanelen säger det. Du kan exportera enbart från IFC-filen när modellen inte har några ritade ledningar.

Vid import ritas inte stöd, avgreningar, flänsar, packningar och lock i filen. Problempanelen listar hur många av varje som lämnades utanför, så att ingenting försvinner tyst.
