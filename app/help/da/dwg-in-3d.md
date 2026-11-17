---
title: Se en DWG- eller DXF-tegning i 3D
summary: Skift en tegnings modelrum til 3D for at se koter, tykkelser, 3D-flader, net og blokke, dreje rundt om den, klikke på et objekt for at se dets egenskaber og se, hvad der endnu ikke er tegnet.
keywords: 3d, dwg, dxf, tegning, modelrum, drej, snit, udsnit, afklipning, vælg, plukke, egenskaber, attributter, håndtag, kote, tykkelse, udtrækning, 3dface, polyface, net, 3d-polylinje, blokke, visninger, perspektiv, parallel, udstrækning, acis, massive legemer
from: a0c6cd17
---

## Hvad du skal gøre

Se en tegnings modelrum i 3D. Linjer og polylinjer står i deres rigtige højder, objekter med en tykkelse rejser sig som vægge, og 3D-flader, net og 3D-blokke vises som overflader, du kan dreje rundt om. Arkene forbliver 2D.

## Trin

1. Åbn en DWG eller DXF. Se [Vis en DWG- eller DXF-tegning](topic:view-dwg). Den åbnes i 3D, medmindre {{ui:Indstillinger}} › {{ui:BimCraft}} › **Tegninger åbnes i** siger {{ui:Model (2D)}}.
2. Fra 2D klikker du på {{ui:3D}} i bjælken over tegningen, eller trykker på {{key:3}}.
3. Vent et øjeblik første gang. Statuslinjen siger »Bygger tegningen i 3D…«, og derefter hvor mange linjer og flader der vises.
4. Drej, panorér og zoom (se tabellen nedenfor).
5. Klik på en visning i den anden bjælke: {{ui:Iso}}, {{ui:Top}}, {{ui:Bund}}, {{ui:Front}}, {{ui:Bag}}, {{ui:Venstre}} eller {{ui:Højre}}.
6. Klik på {{ui:Perspektiv}} for at skifte mellem en perspektivisk og en parallel visning.
7. Klik på {{ui:Udstrækning}} eller tryk på {{key:F}} for at se hele tegningen igen.
8. Klik på {{ui:3D}} igen, tryk på {{key:3}}, eller klik på {{ui:Model}} eller en arkfane for at gå tilbage til 2D.

## Hvad du bør se

- Modelrummet i 3D, Z opad, i tegningens egne farver. Flader er en nuance lysere end deres kanter.
- Lag, du slår fra i {{ui:Lag}}, forsvinder også fra 3D-visningen.
- Til højre: antallet af linjer og flader, tegningens størrelse i X, Y og Z, **Kun i 2D-visningen** og **Endnu ikke tegnet**.

## Skær den med et snitplan

Klik på {{ui:Snit}} på 3D-bjælken, eller tryk på {{key:X}}. Bjælken under den virker, som den gør for IFC-modeller (se [Skær en IFC-model med et snitplan](topic:section-plane)): skær fra {{ui:Top}}, {{ui:Front}} eller {{ui:Side}}, træk eller skriv forskydningen (her i tegningens egne enheder), og brug {{ui:Vend}} for at beholde den anden side. Det, planet skærer væk, kan ikke vælges. Når du går tilbage til 2D, fjernes snittet.

## Se et objekts egenskaber

Klik på et objekt i 3D-visningen. Det får udvælgelsesfarven, og {{ui:Egenskaber}} viser, hvad filen siger om det: dets type, lag, farve, linjetype og håndtag, derefter dets egne data. Det kan være en linjes start, slut og længde, en cirkels centrum og radius, en 3D-flades hjørner eller en blokreferences blok, indsætningspunkt, skala, rotation og attributværdier.

- En blokreference vælges som helhed, og de blokke, der er indlejret i den, også.
- Et klik et par pixels fra en linje vælger linjen.
- Hold {{key:Mod}} nede og klik for at vælge flere objekter, eller for at fjerne et. {{ui:Egenskaber}} tæller dem derefter efter type.
- {{key:Esc}}, eller et klik på tomt rum, fjerner valget.
- Objekter på lag, du har slået fra, kan ikke vælges.

## Bevægelse rundt

:::mouse
| For at | Gør dette |
|---|---|
| Dreje | Træk med midterknappen eller med venstre knap |
| Panorere | Træk med højre knap, eller hold {{key:Shift}} nede og træk |
| Zoome | Rul hjulet; det zoomer mod det, der er under markøren |
| Se det hele | {{ui:Udstrækning}} eller {{key:F}} |
| Se fra en side | Klik på en flade, kant eller et hjørne af ViewCube'en i nederste højre hjørne |
:::

ViewCube'en kan udskiftes med et akseikon, eller skjules, i {{ui:Indstillinger}}. Se [BimCraft-indstillinger](topic:settings).

:::mac mouse
På en touchpad: stryg med to fingre for at dreje, hold {{key:Shift}} nede og stryg for at panorere, og knib for at zoome.
:::

:::touch
Træk med én finger for at dreje. Knib med to fingre for at zoome, og flyt dem sammen for at panorere.
:::

## Hvad der tegnes i 3D

| I tegningen | I 3D |
|---|---|
| Linjer, 3D-polylinjer | I deres rigtige højder |
| Polylinjer, cirkler, buer, ellipser | I deres eget plan, i deres kote, vippet når tegningen vipper dem |
| Tykkelse på linjer, polylinjer, cirkler og buer | Vægge i den højde; cirkler er lukkede i top og bund |
| 3D-flader, polyface-net, polygonnet | Skyggelagte overflader med deres synlige kanter |
| Blokke | Placeret, drejet og skaleret i 3D, også indlejrede blokke |
| Skraveringer | Deres konturer |
| Almindelige 2D-linjer | Flade, hvor de blev tegnet |

## Kun i 2D-visningen

Tekst, flerlinjet tekst og synlige attributter på blokke tegnes i 3D, i deres eget plan og i deres egen højde, og et klik på dem vælger dem. Brede polylinjer viser deres bredde som et fladt bånd. Flere henvisningslinjer, billeder og skraveringsmønstre tælles under **Kun i 2D-visningen**: se dem på fanen {{ui:Model}} eller på arkene.

## Endnu ikke tegnet

Faste stoffer og overflader gemt som ACIS-legemer (3D-massive legemer, legemer, regioner og overflader) og underinddelingsnet er opført under **Endnu ikke tegnet**, med hvor mange der er. De springes over, ikke gættes på.

## Almindelige fejl

- **Alt ser fladt ud.** Tegningen er 2D, så dens linjer har ingen højde. Klik på {{ui:Front}} for at kontrollere. En flad tegning vises som en linje.
- **En massiv model viser intet.** Massive legemer lavet med en solid-modellerer er ACIS-legemer, opført under **Endnu ikke tegnet**. Eksporter modellen som IFC eller som 3D-flader fra det program, der lavede den.
- **Tegningen er en lille klump midt i billedet.** Noget langt væk i modelrummet, såsom en gammel kopi af en plan, gør udstrækningen stor. Zoom ind med hjulet, hvor du vil kigge.

## Næste

- [Arbejd med lag og ark](topic:dwg-layers-sheets)
- [Skær en IFC-model med et snitplan](topic:section-plane)
