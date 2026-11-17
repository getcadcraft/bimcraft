---
title: Visa en DWG- eller DXF-ritning i 3D
summary: Växla en ritnings modellrum till 3D för att se höjder, tjocklek, 3D-ytor, nät och block, kretsa runt den, klicka på ett objekt för att se dess egenskaper och se vad som ännu inte ritas.
keywords: 3d, dwg, dxf, ritning, modellrum, kretsa, bana, snitt, klippning, plocka, markera, egenskaper, attribut, objekthandtag, höjd, tjocklek, extrudering, 3dface, polyface, nät, 3D-polylinje, block, vyer, perspektiv, parallell, utsträckning, acis, solider
from: a0c6cd17
---

## Vad du ska göra

Titta på en ritnings modellrum i 3D. Linjer och polylinjer ligger på sina verkliga höjder, objekt med en tjocklek står upp som väggar, och 3D-ytor, nät och 3D-block visas som ytor du kan kretsa runt. Bladen förblir 2D.

## Steg

1. Öppna en DWG eller DXF. Se [Visa en DWG- eller DXF-ritning](topic:view-dwg). Den öppnas i 3D om inte {{ui:Inställningar}} › {{ui:BimCraft}} › **Ritningar öppnas i** säger {{ui:Modell (2D)}}.
2. Från 2D, klicka på {{ui:3D}} i raden ovanför ritningen, eller tryck på {{key:3}}.
3. Vänta en stund första gången: statusraden säger "Ritningen byggs i 3D…", och sedan hur många linjer och ytor den visar.
4. Kretsa, panorera och zooma (se tabellen nedan).
5. Klicka på en vy på andra raden: {{ui:Iso}}, {{ui:Ovan}}, {{ui:Under}}, {{ui:Framsida}}, {{ui:Baksida}}, {{ui:Vänster}} eller {{ui:Höger}}.
6. Klicka på {{ui:Perspektiv}} för att växla mellan en perspektivvy och en parallell vy.
7. Klicka på {{ui:Utsträckning}} eller tryck på {{key:F}} för att se hela ritningen igen.
8. Klicka på {{ui:3D}} igen, tryck på {{key:3}}, eller klicka på {{ui:Modell}} eller en bladflik för att gå tillbaka till 2D.

## Vad du ska se

- Modellrummet i 3D, Z uppåt, i ritningens egna färger. Ytor är en nyans ljusare än sina kanter.
- Lager som du stänger av i {{ui:Lager}} försvinner även från 3D-vyn.
- Till höger: antalet linjer och ytor, ritningens storlek i X, Y och Z, **Endast i 2D-vyn** och **Ännu inte ritat**.

## Skär av med ett snittplan

Klicka på {{ui:Sektion}} på 3D-raden, eller tryck på {{key:X}}. Raden under den fungerar som för IFC-modeller (se [Skär av en IFC-modell med ett snittplan](topic:section-plane)): skär från {{ui:Ovan}}, {{ui:Framsida}} eller {{ui:Sida}}, dra eller skriv in förskjutningen (här i ritningens egna enheter), och {{ui:Vänd}} för att behålla den andra sidan. Det som snittplanet skär bort kan inte plockas. Att gå tillbaka till 2D tar bort snittet.

## Se ett objekts egenskaper

Klicka på ett objekt i 3D-vyn. Det får markeringsfärgen och {{ui:Egenskaper}} visar vad filen säger om det: dess typ, lager, färg, linjetyp och objekthandtag, sedan dess egna data, till exempel en linjes start, slut och längd, en cirkels mittpunkt och radie, en 3D-ytas hörn, eller ett blockreferens block, infogningspunkt, skala, rotation och attributvärden.

- En blockreferens plockas som en helhet, och blocken som ligger nästlade i den också.
- Ett klick några bildpunkter från en linje plockar linjen.
- Håll ned {{key:Mod}} och klicka för att plocka fler objekt, eller för att ta bort ett ur markeringen; {{ui:Egenskaper}} räknar dem då per typ.
- {{key:Esc}}, eller ett klick på tomt utrymme, rensar markeringen.
- Objekt på lager som du stängt av kan inte plockas.

## Röra sig omkring

:::mouse
| För att | Gör så här |
|---|---|
| Kretsa | Dra med mittenknappen, eller med vänster knapp |
| Panorera | Dra med högerknappen, eller håll ned {{key:Shift}} och dra |
| Zooma | Rulla hjulet; det zoomar mot det som ligger under pekaren |
| Se allt | {{ui:Utsträckning}} eller {{key:F}} |
| Titta från en sida | Klicka på en yta, kant eller ett hörn på ViewCube nere till höger |
:::

ViewCube kan bytas mot en axelikon, eller döljas, i {{ui:Inställningar}}. Se [BimCraft-inställningar](topic:settings).

:::mac mouse
På en styrplatta sveper du med två fingrar för att kretsa, håller ned {{key:Shift}} och sveper för att panorera, och nyper för att zooma.
:::

:::touch
Dra med ett finger för att kretsa. Nyp med två fingrar för att zooma, och för dem tillsammans för att panorera.
:::

## Vad som ritas i 3D

| I ritningen | I 3D |
|---|---|
| Linjer, 3D-polylinjer | På sina verkliga höjder |
| Polylinjer, cirklar, bågar, ellipser | I sitt eget plan, på sitt höjdläge, lutade när ritningen lutar dem |
| Tjocklek på linjer, polylinjer, cirklar och bågar | Väggar med den höjden; cirklar är stängda upptill och nedtill |
| 3D-ytor, polyface-nät, polygonnät | Skuggade ytor med sina synliga kanter |
| Block | Placerade, vridna och skalade i 3D, även nästlade block |
| Skraffering | Deras konturer |
| Vanliga 2D-linjer | Platta, där de ritades |

## Endast i 2D-vyn

Text, flerradig text och blockens synliga attribut ritas i 3D, i sitt eget plan på sin egen höjd, och ett klick på dem plockar dem. Breda polylinjer visar sin bredd som ett platt band. Flerhänvisningar, bilder och skrafferingsmönster räknas under **Endast i 2D-vyn**: se dem på fliken {{ui:Modell}} eller på bladen.

## Ännu inte ritat

Solider och ytor lagrade som ACIS-kroppar (3D-solider, kroppar, regioner och ytor) och subdivisionsnät listas under **Ännu inte ritat** med hur många det finns. De hoppas över, inte gissas.

## Vanliga misstag

- **Allt ser platt ut.** Ritningen är 2D: dess linjer har ingen höjd. Klicka på {{ui:Framsida}} för att kontrollera; en platt ritning visas som en linje.
- **En solidmodell visar ingenting.** Solider gjorda med en solidmodellerare är ACIS-kroppar, listade under **Ännu inte ritat**. Exportera modellen som IFC eller som 3D-ytor från programmet som gjorde den.
- **Ritningen är ett litet kluster mitt i.** Något långt bort i modellrummet, till exempel en gammal kopia av en plan, gör utsträckningen stor. Zooma in med hjulet där du vill titta.

## Nästa

- [Arbeta med lager och blad](topic:dwg-layers-sheets)
- [Skär av en IFC-modell med ett snittplan](topic:section-plane)
