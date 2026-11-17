---
title: Läs en projekt- eller familjefil
summary: Öppna en .rvt-, .rfa-, .rte- eller .rft-fil och läs dess version, arbetsdelning, projektinformation, familjeparametrar, länkar och förhandsvisningsbild, utan programmet som skapade den.
keywords: rvt, rfa, rte, rft, projektfil, familj, version, vilken version, build, arbetsdelning, central, projektinformation, förhandsvisning, miniatyr, länkar
from: df3600e1
---

## Vad du gör

Ta reda på vad som finns i en projekt- eller familjefil utan att öppna den i Revit: vilken version som sparade den, om den är arbetsdelad, projektinformationen och vad den länkar till. Användbart när en fil kommer från någon annan och du behöver veta i vilken version den ska öppnas.

## Steg

1. Klicka på {{ui:Choose a file}}.
2. Välj en `.rvt`-, `.rfa`-, `.rte`- eller `.rft`-fil.
3. Vänta en stund. Statusraden säger ”Läser filen…” och sedan ”Öppnade *filnamn*”.
4. Titta överst på kortet: förhandsvisningsbilden som sparats i filen, typen av fil och den version den sparades i, samt projektnamnet.
5. Scrolla nedåt för att läsa kortets avsnitt.

## Vad du bör se

Kortet i mitten, med dessa avsnitt när filen innehåller dem:

| Avsnitt | Vad det berättar |
|---|---|
| File (Fil) | Filnamn, storlek, typ (projekt, projektmall, familj eller familjmall), version och byggnummer den sparades i, arbetsdelning, den centrala modellens sökväg, var den senast sparades, vem som sparade den, språk och dokument-GUID |
| Project information (Projektinformation) | Projektets egna fält, till exempel namn, nummer, kund, adress och status. Fält som fortfarande har nya projektets standardvärden utelämnas. |
| Family, Family: … (Familj, Familj: …) | För en familj: dess namn, kategori, version, senaste uppdatering och dess parametrar, grupp för grupp |
| Linked and referenced files (Länkade och refererade filer) | Varje länkad modell, CAD-länk, bild och nyckeltabell som filen pekar på, med dess sparade sökväg |

Till vänster upprepar panelen {{ui:File}} de viktigaste fakta och lägger till **Read**: hur mycket av filen BimCraft faktiskt läste, vanligtvis cirka 40 KB av en fil som är många megabyte stor. Till höger säger panelen {{ui:Properties}} att elementegenskaper kräver 3D-modellen.

## Varför det inte finns någon 3D

3D-modellen och elementen i en projektfil lagras i ett odokumenterat format. BimCraft läser bara de delar av filen som är dokumenterade eller tydligt läsbara: filinformationen, projektinformationen, familjedata, länklistan och förhandsvisningsbilden. Den gissar inte om resten. För att se modellen i 3D och läsa elementegenskaper, exportera IFC från programmet som skapade filen. Se [Få en projektfil in i 3D via IFC](topic:rvt-to-ifc).

## Vanliga misstag

- **Att förvänta sig 3D.** Se ovan.
- **Länkar visar bara sin sparade sökväg.** En fil som öppnas ensam kan inte kontrollera om dess länkar finns. Öppna mappen den ligger i i stället, så markerar BimCraft varje länk som hittad eller inte hittad: [Öppna en hel projektmapp](topic:open-project-folder).
- **”This file is incomplete…” (Filen är ofullständig…)** Filen klipptes av när den kopierades, laddades upp eller synkroniserades. En molnfil som fortfarande är ”endast online” gör det också. BimCraft öppnar den ändå och visar bara det som återställdes: ett gult meddelande överst på kortet, ett avsnitt **Återställt från den här filen** som listar de delar vars alla byte finns i filen, och **Inte i filen** för resten. Inget fylls i för den saknade delen, så utgåvan, förhandsvisningsbilden eller projektinformationen kan saknas när de lagrades efter klippet. Om även filens innehållsförteckning klipptes av kan ingenting öppnas. Kopiera originalet igen och öppna det på nytt för hela filen.
- **”No preview picture in this file” (Ingen förhandsvisningsbild i den här filen).** Vissa filer sparas utan en. Det är normalt.
- **Att öppna en säkerhetskopia av misstag.** Filer som heter som `Tower.0004.rvt` är numrerade säkerhetskopior. Om du öppnar mappen grupperas de med sin modell.
