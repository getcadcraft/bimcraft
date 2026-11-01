---
title: Starta en ny byggnad
summary: Skapa en tom byggnadsmodell med nivåer, rita väggarna, placera objekt från biblioteket och spara som IFC.
keywords: ny, ny byggnad, tom, börja från början, mall, nivåer, våningsplan, golv, skapa, modell
from: 546b8ae8
---

## Det här gör du

Starta en byggnadsmodell från noll i stället för att öppna en. BimCraft skapar en tom IFC-modell med ett projekt, en tomt, byggnaden och dess nivåer. Du kan placera utrustning och möbler på nivåerna från biblioteket och spara som en IFC-fil.

:::note
Väggar kan ritas nu: se [Rita väggar](topic:draw-walls). Dörrar, fönster, golv och tak byggs härnäst.
:::

## Steg

1. Klicka på {{ui:Ny byggnad}} under **Öppna en fil eller mapp**, eller på startsidan.
2. Skriv **Byggnadens namn**.
3. Välj hur många **Nivåer** den har (1 till 200).
4. Skriv **Nivåhöjd**, golv till golv: till exempel `10'-0"`, `10'6"` eller `3000 mm`. Ett vanligt tal är fot i USA och millimeter på andra håll.
5. Klicka på {{ui:Skapa}}. Nivåerna staplas från 0, varje nivå en nivåhöjd över den förra, och får namnen Nivå 1, Nivå 2 och så vidare. De visas i modellträdet, och planen för Nivå 1 öppnas bredvid 3D-vyn med {{ui:Rita}} på.
6. Rita väggarna: se [Rita väggar](topic:draw-walls). Byt namn på nivåer eller ändra deras höjder i panelen **Nivåer**.
7. Placera objekt: se [Placera utrustning och möbler från biblioteket](topic:place-from-library). Placeringsraden listar alla nivåer.
8. Klicka på {{ui:Spara som IFC}}. Filen får byggnadens namn, till exempel `Smith's house.ifc`.

## Bra att veta

- Modellen sparas i millimeter, som IFC4. Andra BIM-program kan öppna den.
- **Våningsplan** i vänstra panelen listar bara nivåer som har något på sig. Modellträdet listar alla.
- Tills du sparar räknas den nya byggnaden som osparat arbete. BimCraft frågar innan du öppnar en annan fil eller lämnar sidan, och behåller en kopia i den här webbläsaren om fliken skulle stängas.
