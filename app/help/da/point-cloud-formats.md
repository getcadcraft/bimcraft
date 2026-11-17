---
title: Punktskyformater: hvad der åbnes, og hvad du eksporterer
summary: Hvilke laserscanfiler der åbnes i 3D-visningen, hvilke der er en scannerproducents eget format, og hvad du eksporterer fra scannerens software, så scanningen kan åbnes her.
keywords: punktsky, laserscanning, scanning, formater, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, eksport, kan ikke åbnes, ikke læst
from: 1e985f01
---

## Hvad der åbnes her

Åbn disse med {{ui:Åben}} eller ved at slippe dem på siden (se emnet om visning af en punktsky ved siden af modellen):

| Format | Filendelse | Hvad der læses |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: punkter, farver, intensitet, LiDAR-klasser og koordinatsystemet. LAZ op til 1 GB. |
| E57 | `.e57` | Hver scanning i filen, placeret efter sin position; farver, eller intensitet når filen ikke har farver. Billeder i filen udelades (der siges det). Op til 6 millioner punkter og 512 MB for nu: eksportér større scanninger som LAS eller LAZ. |
| PLY | `.ply` | Tekst og binær (begge byteordener): hjørnepunkternes x y z, farver og intensitet. Flader udelades (der siges det). |
| PCD | `.pcd` | Tekst og binær: x y z, pakkede eller separate farver, intensitet. Komprimerede PCD-filer læses ikke endnu: gem dem som binær eller tekst. |
| PTX | `.ptx` | En eller flere scanninger, hver placeret med sin egen transformation; punkter, scanneren ikke målte, udelades. Meter. |
| PTS, XYZ | `.pts`, `.xyz` | Tekst: x y z, med intensitet og farver, når kolonnerne findes. |

## Filer, som kun scannerens software læser

Nogle scanningsfiler er en scannerproducents eget format uden offentliggjort beskrivelse og uden åben læser. BimCraft kan ikke læse dem, og når du åbner en, vises et kort, der siger, hvad den er, og hvad du skal gøre. Eksportér scanningen fra producentens software som E57 eller LAS (eller PTX, PTS), og åbn så den eksporterede fil.

| Fil | Filendelse | Eksportér den fra |
|---|---|---|
| ReCap-projekt | `.rcp` | ReCap: åbn projektet og eksportér det. Projektet peger kun på sine scanninger, så kopiering af `.rcp` alene giver ingen punkter. |
| ReCap-scanning | `.rcs` | ReCap: åbn projektet, som scanningen hører til, og eksportér det. |
| FARO-scanning | `.fls` | FARO SCENE. |
| Leica-scanning | `.lgs` | Leica Cyclone REGISTER 360. |
| Trimble-scanning | `.tzf` | Trimble RealWorks eller Trimble Business Center. |
| Z+F-scanning | `.zfs` | Z+F LaserControl. |

:::tip
Når eksporten spørger om et format, beholder LAS eller LAZ alt, BimCraft viser (farver, intensitet, klasser og koordinatsystemet), i den mindste fil.
:::

## Hvorfor disse filer ikke læses

Disse formater er ikke offentliggjort, og den eneste måde at læse dem på er producentens eget softwarebibliotek, under dets egne vilkår. BimCraft læser kun formater, det kan læse med sin egen kode på din computer, så en scanning skal aldrig sendes et sted for at blive åbnet.
