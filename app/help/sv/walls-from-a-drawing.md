---
title: Väggar från en inritad ritning
summary: Gör en DWG- eller DXF-plan till väggar, dörrar och fönster på en nivå, och behåll ritningen under planen som referens.
keywords: dwg, dxf, spåra, spårad, importera plan, konvertera, cad till bim, 2d till 3d, väggar från linjer, lager, block, dörrar från block, underlägg, referensritning, bakgrund, xref, ritprogram
from: 3bf213f1
---

## Vad du gör

Använd en plan som du (eller någon annan) ritat i ritprogrammet som början på modellen: dess väggstreck blir väggar, dess dörr- och fönsterblock blir dörrar och fönster.

## Steg

1. Slå på {{ui:Rita}} och välj den nivå som ritningen visas på i planens nivålista.
2. Välj {{ui:Bygge}} › {{ui:Från en ritning…}}, sedan {{ui:Välj en ritning…}} och välj DWG- eller DXF-filen.
3. I dialogrutan:
   - **Ritningsenheter** kommer från ritningen; välj andra om de är fel (en plan ritad i fot men läst som tum blir tolv gånger för liten).
   - **Lager med väggarna**: bocka för de lager väggstrecken ligger på. Lager vars namn säger ”vägg” är ibockade åt dig.
   - **Linjerna är**: **båda ytorna på varje vägg** (det vanliga sättet att rita planer: varje par av parallella linjer upp till 600 mm från varandra blir en vägg lika tjock som mellanrummet), **väggarnas mittlinjer**, eller **en yta** med väggen till vänster eller höger. Med mittlinjer eller en yta bestämmer väggtypen tjockleken.
   - **Väggtyp** och **Väggens höjd**, som för verktyget {{ui:Vägg}}.
   - **Block**: välj en dörr- eller fönstertyp för varje block som är en dörr eller ett fönster, eller lämna det utanför. Block vars namn säger ”dörr” eller ”fönster” väljs åt dig. Varje block placeras i väggen det sitter i, lika brett som blocket längs väggen; en dörr öppnas åt det håll dess svängning är ritad åt.
   - **Var det hamnar**: vid ritningens egna koordinater, eller med dess nedre vänstra hörn på planens origo.
   - **Behåll ritningen under planen för den här nivån**: låt den vara ibockad för att se ritningen som tunna linjer under det du gör.
4. Raden under valen säger hur många väggar, dörrar och fönster det skapar. Klicka på {{ui:Gör dem}}.

## Det här ser du

- Väggarna, dörrarna och fönstren på nivån, sammanfogade där de möts, med de rum de sluter; allt detta är ett steg, så {{key:Mod+Z}} tar tillbaka det.
- Ritningen som tunna linjer under planen. {{ui:Bygge}} › {{ui:Från en ritning…}} listar ritningarna som sparats på nivån, var och en med {{ui:Ta bort}}; att ta bort en lämnar väggarna kvar.
- I IFC-filen är den sparade ritningen en notering på nivån (dess linjer), så andra BIM-program visar den också.

:::note
En PDF eller en skanning fungerar också: se [Väggar från en uppsättning planer](topic:walls-from-plans). Bågar utelämnas (BimCraft ritar raka väggar), liksom linjer inne i block. Linjer utan en partner i ”båda ytorna” räknas i dialogrutan och utelämnas: rita de väggarna med verktyget {{ui:Vägg}}, eller städa dem med {{ui:Ändra}} › {{ui:Trimma / förläng}} (se [Trimma, förläng och sammanfoga väggar](topic:trim-extend-walls)).
:::

:::tip
Spårade över en skanning i ritprogrammet? Öppna skanningen här också och kontrollera väggarna mot den: se [Modell från en skanning](topic:model-from-a-scan).
:::
