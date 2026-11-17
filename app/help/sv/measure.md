---
title: Mät avstånd, ytarea och platser i 3D
summary: Mät mellan två punkter i en IFC-modell med fångst till hörn och kanter, läs skillnaden längs X, Y och Z och mät arean på en plan yta.
keywords: mät, mätning, avstånd, längd, måttsättning, area, ytarea, fångst, hörn, kant, måttband, linjal, frigång, plats, latitud, longitud, lat long, koordinater, georeferens, kartkonvertering, EPSG, mätning, östvärde, nordvärde, WGS 84, datum
from: 5f430bba
---

## Vad du gör

Kontrollera en frigång, en väggs längd eller storleken på en yta direkt från modellen, utan att öppna det program du ritade den i.

## Steg

1. Öppna en IFC-modell.
2. Klicka på {{ui:Mät}} i verktygsfältet, eller tryck på {{key:M}}. Ett fält öppnas längst ner i vyn.
3. **Ett avstånd:** med {{ui:Avstånd}} valt klickar du på den första punkten och sedan på den andra. Nära ett hörn fångas pekaren till det, nära en kant till kanten. Den lilla etiketten vid pekaren säger vilket. Varje par klick ger en mätning.
4. **Ytarea:** välj {{ui:Ytarea}} och klicka på en yta. Hela den plana ytan lyser upp och dess area visas.
5. **Raka linjer:** håll {{key:Shift}} medan du väljer den andra punkten, eller tryck på {{ui:Rak}} i fältet för att hålla den. Linjen går då längs den ena axel som pekaren ligger närmast (i en vy uppifrån längs planens X eller Y, i andra vyer längs X, Y eller Z). Pekaretiketten säger "rakt längs en axel". {{key:M}} startar och stoppar fortfarande Mät.
6. Klicka på {{ui:Rensa}} för att ta bort mätningarna, eller på {{ui:Klar}} (eller {{key:Esc}}) för att sluta mäta.

## Vad du bör se

- En linje mellan de två punkterna med dess längd på sig. I fältet visas längden med hur långt den går längs X, Y och Z (i modellens axlar, Z uppåt), allt i den {{ui:Enheter}} som valts i verktygsfältet.
- En ytas area i kvadratmeter, på ytan och i fältet.
- Etiketterna ligger kvar på sina mätningar när du kretsar, panorerar och zoomar.
- Medan du mäter väljer klick inga element. Ett snittplan eller en snittlåda skär fortfarande modellen, och du kan mäta det som visas, även snittytorna.

## Var en punkt är på jorden

Klicka på {{ui:Plats}} i mätfältet och klicka sedan på en punkt i modellen. Den fångas till hörn och kanter, precis som vid avstånd. Fältet visar:

- **latitud och longitud**, i decimala grader och i grader, minuter och sekunder, i WGS 84 från början;
- **kartkoordinaterna** (östvärde och nordvärde, skrivna i den {{ui:Enheter}} som valts i verktygsfältet) i modellens egna kartsystem, till exempel `EPSG:28356`;
- **höjden** och den höjdnivå som filen anger, och filens **egna datum** (till exempel GDA94).

{{ui:Kopiera}} lägger allt på urklipp på en rad. Vilket system latitud och longitud anges i ändrar du under {{ui:Inställningar}} › {{ui:BimCraft}} › {{ui:Plats}}: WGS 84 (som GPS och webbkartor), filens egna datum, eller ett annat vanligt system, till exempel ETRS89 eller NAD83.

Det här kräver en georefererad modell: en som exporterats med kartkoordinater (en kartkonvertering till ett projicerat system med en EPSG-kod). En modell som bara har en plats med latitud och longitud får en ungefärlig position, beräknad från platsens punkt och dess sanna nord, och fältet säger det. Med flera modeller öppna använder varje punkt georeferensen från sin egen modell.

:::note
Att gå mellan datum (till exempel GDA94 till WGS 84) görs utan rutnätsfiler, så det är bra inom några meter. Statusraden säger hur bra. Kartkoordinaterna i sig är exakta.
:::

## Vanliga misstag

- **"…saknar georeferens".** Filen har varken någon kartkonvertering eller någon plats med latitud och longitud. Exportera den igen med dess koordinatsystem satt (gemensamma koordinater eller mätpunkt i det ritande verktyget).
- **Kartkoordinater men ingen latitud och longitud.** Filen anger sitt kartsystem utan EPSG-kod, eller med en kod som inte finns i listan. Statusraden säger vilken.
- **Punkten hamnar på ytan, inte på hörnet.** Fångsten tittar på elementet under pekaren. Flytta närmare hörnet eller zooma in.
- **Arean är mindre än väntat.** Öppningar räknas inte med, och en yta som böjer sig är flera ytor. Klicka på varje.
- **{{key:Esc}} slutade mäta.** Den första {{key:Esc}} tar bort ett halvgjort avstånd. Den andra stoppar.

## Nästa

- [Skär en IFC-modell med ett snittplan](topic:section-plane)
- [Dölj, isolera och gör element genomskinliga](topic:hide-and-isolate)
