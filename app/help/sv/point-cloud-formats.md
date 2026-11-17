---
title: Punktmolnsformat: vad som öppnas och vad som ska exporteras
summary: Vilka laserskanningsfiler som öppnas i 3D-vyn, vilka som är en skanningstillverkares egna format, och vad du ska exportera från skannerns programvara så att skanningen öppnas här.
keywords: punktmoln, laserskanning, skanning, format, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, export, kan inte öppnas, läses inte
from: 1e985f01
---

## Vad som öppnas här

Öppna dessa med {{ui:Open}} eller genom att släppa dem på sidan (se ämnet om att visa ett punktmoln bredvid modellen):

| Format | Filändelse | Vad som läses |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: punkter, färger, intensitet, LiDAR-klasser, koordinatsystemet. LAZ upp till 1 GB. |
| E57 | `.e57` | Varje skanning i filen, var och en placerad efter sin position; färger, eller intensitet när filen saknar färger. Bilder i filen utelämnas (det anges). Upp till 6 miljoner punkter och 512 MB för närvarande: exportera större skanningar som LAS eller LAZ. |
| PLY | `.ply` | Text och binärt (båda byteordningarna): hörnens x y z, färger och intensitet. Ytor utelämnas (det anges). |
| PCD | `.pcd` | Text och binärt: x y z, packade eller separata färger, intensitet. Komprimerade PCD-filer läses inte ännu: spara dem som binärt eller text. |
| PTX | `.ptx` | En eller flera skanningar, var och en placerad med sin egen transformation; punkter som skannern inte mätte utelämnas. Meter. |
| PTS, XYZ | `.pts`, `.xyz` | Text: x y z, med intensitet och färger när kolumnerna finns. |

## Filer som bara skannerns programvara läser

Vissa skanningsfiler är en skanningstillverkares egna format, utan publicerad beskrivning och utan öppen läsare. BimCraft kan inte läsa dem, och när du öppnar en visas ett kort som säger vad det är och vad du ska göra. Exportera skanningen från tillverkarens programvara som E57 eller LAS (eller PTX, PTS) och öppna sedan den exporterade filen.

| Fil | Filändelse | Exportera från |
|---|---|---|
| ReCap-projekt | `.rcp` | ReCap: öppna projektet och exportera det. Projektet pekar bara på sina skanningar, så att kopiera `.rcp` ensam ger inga punkter. |
| ReCap-skanning | `.rcs` | ReCap: öppna projektet som skanningen hör till och exportera det. |
| FARO-skanning | `.fls` | FARO SCENE. |
| Leica-skanning | `.lgs` | Leica Cyclone REGISTER 360. |
| Trimble-skanning | `.tzf` | Trimble RealWorks eller Trimble Business Center. |
| Z+F-skanning | `.zfs` | Z+F LaserControl. |

:::tip
När exporten frågar efter ett format ger LAS eller LAZ det som BimCraft visar (färger, intensitet, klasser och koordinatsystemet) i minsta fil.
:::

## Varför dessa filer inte läses

Dessa format är inte publicerade, och det enda sättet att läsa dem är via varje tillverkares egna programbibliotek, under egna villkor. BimCraft läser bara format som den kan läsa med sin egen kod på din dator, så en skanning behöver aldrig skickas någonstans för att öppnas.
