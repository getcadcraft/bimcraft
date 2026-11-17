---
title: Visa en DWG- eller DXF-ritning
summary: Öppna en DWG eller DXF, rör dig runt i modellrummet och bladen, läs koordinater och se vad som ännu inte är ritat.
keywords: dynamiska block, synlighetstillstånd, dwg, dxf, cad, ritning, 2d, vy, visare, panorera, zooma, modellrum, pappersrum, layout, koordinater, öppna dwg
from: 4db3122a
---

## Vad du gör

Öppna en CAD-ritning, se den i 3D eller 2D, rör dig runt i den, byt mellan modellrummet och dess blad, och läs koordinater. BimCraft visar DWG- och DXF-ritningar; den redigerar eller sparar dem inte. För att ändra en ritning klickar du på {{ui:Redigera i CadCraft}}, och ritningen öppnas i CadCraft-ritappen i en ny flik.

## Steg

1. Klicka på {{ui:Välj en fil}}, eller släpp ritningen på sidan.
2. Välj en `.dwg`- eller `.dxf`-fil.
3. Vänta medan statusraden säger "Läser ritningen…". Stora ritningar tar några sekunder. Sedan säger den hur lång läsningen tog, "renderar…" medan den första bilden ritas, och hur lång tid det tog.
4. Ritningen öppnas i 3D, det snabbaste sättet att visa en stor ritning (se [Visa en DWG- eller DXF-ritning i 3D](topic:dwg-in-3d)). Klicka på {{ui:Modell}} för den platta 2D-vyn. För att alltid öppna ritningar i 2D, ställ in {{ui:Inställningar}} › {{ui:BimCraft}} › **Ritningar öppnas i** till {{ui:Modell (2D)}}. En ritning utan något i modellrummet, eller en webbläsare som inte kan visa 3D, öppnas i 2D.
5. Titta på flikarna ovanför ritningen: {{ui:Modell}} först, sedan en flik per blad, i ritningens egen ordning.
6. Klicka på en bladflik för att se bladet: papperet, med modellen visad genom dess vyportar.
7. Klicka på {{ui:Modell}} för att gå tillbaka till modellrummet.
8. För pekaren över ritningen och läs X- och Y-koordinaterna i hörnet.

## Det du ska se

- Ritningen, anpassad till fönstret. Färgerna följer ritningen; vita linjer (färg 7) ritas i temats färg, och ljusa färger mörknas på det ljusa temat så att de förblir läsbara.
- Panelen {{ui:Ritning}} till vänster: fil, storlek, format (till exempel "AutoCAD 2018 (AC1032)"), enheter, antal objekt och lager, antal blad, och länkade ritningar och utrustning när sådana finns.
- Listan {{ui:Lager}} till vänster.
- Till höger: hur du rör dig, länkade ritningar och bilder, och **Ännu inte ritat**.

## Rör dig runt

:::mouse
| För att | Gör så här |
|---|---|
| Panorera | Dra med valfri musknapp |
| Zooma | Rulla hjulet; punkten under pekaren står kvar |
| Anpassa | Dubbelklicka, tryck på {{key:F}} eller klicka på {{ui:Anpassa}} |
:::

:::mac mouse
På en styrplatta **zoomar** tvåfingersrullning, den panorerar inte. Nypning zoomar också. För att panorera klickar du och drar.
:::

:::touch
Dra med ett finger för att panorera. Nypzoom för ritningar finns inte ännu: tryck på {{ui:Anpassa}} för att se hela bladet, och använd mus eller styrplatta för att zooma in.
:::

## Dynamiska block

Ett dynamiskt block ritas som ritningen visar det: varje placerat block i det synlighetstillstånd ritningen sparades med ("Plan" eller "Front", "Single bowl" eller "Double bowl"). Till höger listar **Dynamiska block** varje block som är placerat i modellrummet: hur många som är placerade, vilka tillstånd de visar, och varje tillstånd blocket har. I {{ui:3D}} klickar du på ett placerat block för att se **Dynamiskt block**, **Visat tillstånd** och **Andra tillstånd** i Egenskaper. BimCraft byter inte tillstånd.

## Ännu inte ritat

Vissa typer av objekt ritas inte i den här versionen. De räknas under **Ännu inte ritat** till höger ("Dessa delar av ritningen hoppas över tills vidare, de gissas inte."), så att du vet att något saknas. Linjer, polylinjer, bågar, cirklar, ellipser, splines, skraffering och heltäckande fyllning, text och flerradig text, block med attribut, måttsättningar, hänvisningar och flerhänvisningar, tabeller, bilder och vyportar ritas. 3D-ytor, polyface-nät och polygonnät ritas som sina kanter sedda uppifrån; byt till {{ui:3D}} för att se dem som ytor.

En binär DXF öppnas inte: BimCraft säger det. Spara den igen som ASCII-DXF, eller som DWG, från programmet som skapade den.

## Vanliga misstag

- **Ritningen ser tom ut.** Vissa lager kan vara avstängda eller frysta i själva ritningen; de startar avbockade i {{ui:Lager}}. Klicka på {{ui:Alla på}}. Om statusen säger "*name* är en tom ritning: den innehåller inga linjer, text eller block." finns det inget i den.
- **Ett blad visar en tom ram.** Bladet kan förlita sig på länkade ritningar. Se [Hitta länkade ritningar och bilder](topic:dwg-linked-files).
- **Texten ser lite annorlunda ut.** BimCraft ritar text i ett smalt sanserif-typsnitt, inte ritningens egna typsnitt, så text kan vara lite bredare eller smalare än i programmet som skapade den.
- **"*name* could not be read. It may be damaged, or saved in a format the reader does not handle yet."** Det kan översättas som: "*name* kunde inte läsas. Den kan vara skadad, eller sparad i ett format som läsaren ännu inte hanterar." Hakparentesen i slutet anger filens formatkod. Spara den från programmet som skapade den som en äldre DWG eller som DXF, och försök igen.
- **Man förväntar sig att kunna mäta, rita eller redigera.** BimCraft visar bara ritningar. Klicka på {{ui:Redigera i CadCraft}} för att öppna samma fil i CadCraft-ritappen, som redigerar den och sparar en kopia som DWG eller DXF. Din ursprungliga fil ändras inte, och länkade ritningar stannar kvar i BimCraft. Knappen visas bara där CadCraft är öppet för dig.

## Nästa

- [Visa en DWG- eller DXF-ritning i 3D](topic:dwg-in-3d)
- [Arbeta med lager och blad](topic:dwg-layers-sheets)
- [Kontrollera en ritning i utskriftsvy](topic:print-view)
