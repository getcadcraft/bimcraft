---
title: Modell från en skanning
summary: En kort genomgång från en laserskanning till väggar: öppna punktmolnet bredvid en ny byggnad, rikta in det mot en nivå och spåra dess väggar på planen.
keywords: skanning, laserskanning, punktmoln, as-built, befintlig byggnad, mätning, spåra, skanning till BIM, modell från skanning, skiva, rikta in, rätvinkla, LAS, LAZ, E57, PLY
from: ce3b9b37
---

## Vad du ska göra

Rita en befintlig byggnad utifrån dess laserskanning: väggar där skanningen visar dem, på rätt nivå och rätvinkliga mot varandra.

## Steg

1. **En byggnad att rita i.** {{ui:Fil}} › {{ui:Ny byggnad}}, med så många våningsplan som byggnaden har (du kan lägga till fler senare, se [Tomten, byggnaden på den och dess nivåer](topic:site-building-and-levels)). {{ui:Rita}} slås på.
2. **Skanningen.** {{ui:Visa}} › {{ui:Punktmoln}} och välj filen (LAS, LAZ, E57, PLY, PCD, PTX eller XYZ: se [Visa ett punktmoln bredvid modellen](topic:point-clouds)). Molnet visas i 3D-vyn, och planen visar dess **skiva**: de skannade punkterna 1200 mm (4 feet) ovanför nivån, som prickar. Det är höjden där väggar, dörrar och fönster syns bäst.
3. **Rikta in det mot nivån.** Öppna modellfältets {{ui:Skanning}}-meny och klicka på {{ui:Rikta in dess golv mot den här nivån}}: molnet flyttas upp eller ned tills golvet det skannade hamnar på den visade nivån. Kontrollera att skivan nu skär genom väggarna.
4. **Rätvinkla mot byggnaden.** {{ui:Skanning}} › {{ui:Vrid det rätt mot byggnaden}} vrider molnet så att väggarna i dess skiva går längs planens axlar, så att väggar du ritar med {{key:Shift}} nedtryckt linjerar upp mot skanningen. Den vrids kring mitten av de väggar den hittade, så att träd eller en grannes vägg som fångats i skivan inte vrider bort skanningen. Rikta in golvet först: då skär skivan genom väggarna.
5. **Spåra väggarna.** Välj {{ui:Vägg}} och klicka längs prickarna: verktyget fäster vid skannade punkter (fångstmärket är en liten romb) och även vid väggar du redan ritat. En vägg ritas på sin mittlinje, så klicka mitt mellan de två rader prickar som en vägg lämnar; skriv dess tjocklek genom att välja väggtyp först. Lägg sedan till dörrar och fönster där skivan visar luckorna.
6. **Nästa våningsplan.** Välj planet ovanför i planens nivålista: skivan följer nivåns skärhöjd. Rikta in golvet mot den nivån igen endast om skanningens golv inte ligger där dina nivåer ligger.

## Vad du bör se

- Skivan ändras när du byter nivå, och en tjockare skiva ({{ui:Skanning}} › {{ui:Skivans tjocklek}}) visar fler punkter där en skanning är tunn.
- {{ui:Skanning}} › {{ui:Ångra inriktningen}} flyttar tillbaka molnet till där det placerades när det öppnades. Inriktningen flyttar molnet endast i vyn: den sparas inte i IFC-filen, och väggar du ritat står kvar. Inriktningen följer med molnet när du ändrar {{ui:Placera}} eller {{ui:Enheter}}, eller öppnar en annan modell.
- {{ui:Skanning}} › {{ui:Visa skivan på planen}} döljer eller visar prickarna.

:::tip
Stora skanningar: planen ritar upp till 60 000 punkter av skivan och 3D-vyn några miljoner av hela molnet, båda jämnt utspridda över skanningen, så att en stor fil förblir snabb. Vill du spåra i ritningsappen i stället, använd molnfältets {{ui:Spåra i CadCraft}}.
:::
