---
title: Visa ett punktmoln bredvid modellen
summary: Öppna en laserskanning (LAS, LAZ, E57, PLY, PCD, PTX, PTS eller XYZ) i 3D-vyn ensam eller tillsammans med en IFC-modell, färglägg den, skär en tunn skiva genom den, mät till dess punkter och skicka den till ritningsappen för att spåra as-built-linjer.
keywords: punktmoln, laserskanning, skanning, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, as-built, as built, mätning, inpassning, skiva, planskärning, fångst, mät, spåra, skanning till BIM
from: d0a3e740
---

## Vad du gör

Titta på en laserskanning av en byggnad bredvid dess modell: kontrollera att det som byggts stämmer med ritningen, mät mellan skannade punkter och skär en tunn skiva för att läsa av väggar, dörrar och pelare.

## Steg

1. Öppna molnet: {{ui:Open}} en fil `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` eller `.xyz`, eller släpp den på sidan (se ämnet om punktmolnsformat för vad var och en ger, och vad du ska exportera från en skannertillverkares egna programvara). När en modell är öppen går molnet med i modellen i 3D-vyn; att öppna ett moln stänger aldrig modellen eller dess osparade ändringar. Utan modell öppnas molnet på egen hand.
2. Molnfältet visas under verktygsfältet. Det anger hur många punkter som visas och hur många filen har.
3. Välj {{ui:Color by}}: filens egna färger (när skannern sparade dem), {{ui:Height}}, {{ui:Intensity}}, {{ui:Class}} (LiDAR-klasser som mark, vegetation och byggnad) eller {{ui:One color}}. {{ui:Size}} gör punkterna större eller mindre.
4. Klicka på {{ui:Plan}} under {{ui:Slice}} för att bara behålla ett tunt band 1.2 m över den lägsta punkten, sett uppifrån: väggar, dörröppningar och pelare läses som en planritning. {{ui:Front}} och {{ui:Side}} skär upprätta band för fasader och sektioner. Flytta bandet med {{ui:At}} och ändra {{ui:Thickness}} (meter). {{ui:Off}} visar hela molnet igen.
5. Klicka på {{ui:Measure}} i verktygsfältet. Pekaren fångar molnets punkter (texten säger ”point cloud”), så att du kan mäta från vägg till vägg i skivan, eller från ett modellelement till skanningen. Ett modellhörn eller en modellkant inom räckhåll går före.
6. Med {{ui:Measure}} › {{ui:Location}} ger en molnpunkt dess latitud och longitud från molnets eget koordinatsystem, när filen anger ett.
7. {{ui:Hide}} döljer molnet en stund; {{ui:Remove}} tar bort det. {{ui:Show}} › {{ui:Point cloud}} döljer eller visar fältet.

## Var molnet hamnar

{{ui:Place}} i fältet anger hur molnet passar in mot modellen:

- **Modellkoordinater**: molnets tal är modellens egna (en skanning inpassad i ritningens koordinater).
- **Kartkoordinater**: modellen har en kartkonvertering (IfcMapConversion) och molnet ligger i samma projicerade system: molnet placeras via den. Om de två anger olika system säger statusraden det.
- **Centrerat på modellen**: när varken det ena eller det andra placerar molnet nära modellen läggs dess mitt på modellens mitt och dess lägsta punkt på modellens golv. Välj ett annat alternativ för att åsidosätta det.

När filen inte anger sina enheter läser BimCraft meter och erbjuder {{ui:Units}} i fältet.

## Spåra as-built-linjerna

Klicka på {{ui:Trace in CadCraft}} för att skicka molnet till ritningsappen i en ny flik. Det öppnas där under ritningen, där ett planskiva och objektfångst låter dig rita väggarna över skanningen. Se CadCraft-ämnet om punktmoln.

## Hur många punkter

En skanning kan innehålla hundratals miljoner punkter. BimCraft läser varje punkt en gång och behåller en jämn andel av dem att rita: {{ui:Show}} i fältet anger hur många (1, 2, 5 eller 10 miljoner). Fler punkter kräver mer minne och ett snabbare grafikkort. Antalet per LiDAR-klass gäller alla punkter i filen.

:::note
Filer läses på den här datorn; inget laddas upp. LAS 1.0–1.4 och LAZ läses (LAZ-filer upp till 1 GB, hålls i minnet medan de läses); E57-filer upp till 6 miljoner punkter och 512 MB för närvarande (större skanningar: exportera LAS eller LAZ); PLY, PCD och PTX läses i sin helhet; textmoln är `x y z`, med färg (`r g b`) och intensitetskolumner när de finns.
:::

## Flera skanningar

Skanningar tagna från olika positioner kan passas in i en och samma ram, förfinas med ICP och exporteras som en LAS eller E57: se [Passa in flera skanningar till en](topic:register-scans).
