---
title: Starta en ny byggnad
summary: Skapa en tom byggnadsmodell med dess nivåer, rita dess väggar, placera objekt från biblioteket och spara den som IFC.
keywords: ny, ny byggnad, tom, start från början, mall, nivåer, våningsplan, golv, skapa, modell
from: 68786865
---

## Vad du gör

Starta en byggnadsmodell från början i stället för att öppna en. BimCraft skapar en tom IFC-modell med ett projekt, en tomt, byggnaden och dess nivåer. Du kan placera utrustning och möbler från biblioteket på nivåerna och spara det som en IFC-fil.

:::note
Väggar kan ritas nu: se [Rita väggar](topic:draw-walls). Dörrar, fönster, bjälklag och tak byggs härnäst.
:::

## Steg

1. Klicka på {{ui:Ny byggnad}} under **Öppna en fil eller mapp**, eller på startsidan.
2. Skriv in **Byggnadens namn**.
3. Välj hur många **Nivåer** den har (1 till 200).
4. Skriv in **Nivåhöjd**, golv till golv: till exempel `10'-0"`, `10'6"` eller `3000 mm`. Ett vanligt tal är fot i USA och millimeter annars.
5. Alla fält är redan ifyllda, så du kan lämna dem som de är. Under dem visar rutan vad du börjar med: enheterna, den **Väggtyp** som Vägg-verktyget ritar först (välj en annan i listan om du vill) och det första bladet.
6. Klicka på {{ui:Skapa}}. Nivåerna staplas från 0, var och en en nivåhöjd över den föregående, och heter Nivå 1, Nivå 2 och så vidare. De visas i modellträdet, och planen för Nivå 1 öppnas bredvid 3D-vyn med {{ui:Rita}} påslaget.
7. Rita väggarna: klicka på {{ui:Vägg}} och två punkter. Se [Rita väggar](topic:draw-walls). Byt namn på nivåer eller ändra deras höjder i panelen **Nivåer**.
8. Placera objekt: se [Placera utrustning och möbler från biblioteket](topic:place-from-library). Placeringsfältet listar alla nivåer.
9. Klicka på {{ui:Spara som IFC}}. Filen namnges efter byggnaden, till exempel `Smith's house.ifc`.

## Bra att veta

- Modellen sparas i millimeter, som IFC4. Andra BIM-program öppnar den.
- En ny byggnad får ett blad, **A-101**, som håller planen för den lägsta nivån: A3 i skala 1:100 när du arbetar med metriska enheter, Tabloid i 1/8" = 1'-0" annars. Bladet är tomt tills den första väggen och visar sedan planen när du ritar. Öppna det under **Blad** i projektbläddraren för att ändra dess papper, skala eller titel, lägga till vyer eller ta bort det. En byggnad som startas från en mall tar i stället mallens blad.
- Vill du ändra vad varje ny byggnad börjar med (väggtypen för metriska projekt, nivåerna, det första bladet, verktyget som är aktivt efter Skapa), se [Standardinställningar](topic:default-policies).
- Ingenting behöver ställas in före den första väggen. Väggtypen, nivåhöjderna, enheterna och bladet kan alla ändras senare.
- **Våningsplan** i den vänstra panelen listar bara nivåer som har något på sig; modellträdet listar alla.
- Tills du sparar räknas den nya byggnaden som osparat arbete. BimCraft frågar innan du öppnar en annan fil eller lämnar, och sparar en kopia i den här webbläsaren ifall fliken stängs.
