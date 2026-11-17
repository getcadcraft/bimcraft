---
title: Punktskyformater: hva som åpnes, og hva du skal eksportere
summary: Hvilke laserskannefiler som åpnes i 3D-visningen, hvilke som er en skanneprodusents eget format, og hva du skal eksportere fra skannerens programvare slik at skanningen åpnes her.
keywords: punktsky, laserskanning, skanning, formater, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, eksport, kan ikke åpne, ikke lest
from: 1e985f01
---

## Hva som åpnes her

Åpne disse med {{ui:Åpen}} eller ved å slippe dem på siden (se emnet om å vise en punktsky ved siden av modellen):

| Format | Filendelse | Hva som leses |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: punkter, farger, intensitet, LiDAR-klasser og koordinatsystemet. LAZ opptil 1 GB. |
| E57 | `.e57` | Hver skanning i filen, hver plassert etter sin posisjon; farger, eller intensitet når filen ikke har farger. Bilder i filen utelates (det sies fra). Opptil 6 millioner punkter og 512 MB foreløpig: eksporter større skanninger som LAS eller LAZ. |
| PLY | `.ply` | Tekst og binær (begge bytrekkefølger): hjørnepunktenes x y z, farger og intensitet. Flater utelates (det sies fra). |
| PCD | `.pcd` | Tekst og binær: x y z, pakkede eller separate farger, intensitet. Komprimerte PCD-filer leses ikke ennå: lagre dem som binær eller tekst. |
| PTX | `.ptx` | En eller flere skanninger, hver plassert med sin egen transformasjon; punkter skanneren ikke målte, utelates. Meter. |
| PTS, XYZ | `.pts`, `.xyz` | Tekst: x y z, med intensitet og farger når kolonnene finnes. |

## Filer som bare skannerens programvare leser

Noen skannefiler er en skanneprodusents eget format, uten publisert beskrivelse og uten åpen leser. BimCraft kan ikke lese dem, og når du åpner en, vises et kort som sier hva den er og hva du skal gjøre. Eksporter skanningen fra produsentens programvare som E57 eller LAS (eller PTX, PTS), og åpne den eksporterte filen.

| Fil | Filendelse | Eksporter fra |
|---|---|---|
| ReCap-prosjekt | `.rcp` | ReCap: åpne prosjektet og eksporter det. Prosjektet peker bare til skanningene sine, så å kopiere `.rcp` alene gir ingen punkter. |
| ReCap-skanning | `.rcs` | ReCap: åpne prosjektet skanningen hører til, og eksporter det. |
| FARO-skanning | `.fls` | FARO SCENE. |
| Leica-skanning | `.lgs` | Leica Cyclone REGISTER 360. |
| Trimble-skanning | `.tzf` | Trimble RealWorks eller Trimble Business Center. |
| Z+F-skanning | `.zfs` | Z+F LaserControl. |

:::tip
Når eksporten spør etter et format, beholder LAS eller LAZ alt BimCraft viser (farger, intensitet, klasser og koordinatsystemet) i den minste filen.
:::

## Hvorfor disse filene ikke leses

Disse formatene er ikke publisert, og den eneste måten å lese dem på er produsentens eget programvarebibliotek, under deres egne vilkår. BimCraft leser bare formater det kan lese med sin egen kode på datamaskinen din, så en skanning må aldri sendes et sted for å åpnes.
