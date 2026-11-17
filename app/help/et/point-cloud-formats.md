---
title: Punktipilve vormingud: mis avaneb ja mida eksportida
summary: Milline laserskannimise fail avaneb 3D-vaates, milline on skanneritootja enda vorming ja mida eksportida skanneri tarkvarast, et skann siin avaneks.
keywords: punktipilv, laserskannimine, skann, vormingud, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, eksport, ei saa avada, ei loeta
from: 1e985f01
---

## Mis siin avaneb

Ava need {{ui:Avatud}} abil või lohistades need lehele (vaata teemat, kuidas kuvada punktipilve mudeli kõrval):

| Vorming | Laiend | Mida loetakse |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: punktid, värvid, intensiivsus, LiDAR-klassid, koordinaatsüsteem. LAZ kuni 1 GB. |
| E57 | `.e57` | Kõik skannid failis, igaüks paigutatud oma asendi järgi; värvid või intensiivsus, kui failis värve pole. BimCraft teatab, et pildid jäetakse välja. Praegu kuni 6 miljonit punkti ja 512 MB: suuremad skannid ekspordi LAS- või LAZ-vormingus. |
| PLY | `.ply` | Tekst ja binaarne (mõlemad baidijärjestused): tippude x y z, värvid ja intensiivsus. BimCraft teatab, et tahud jäetakse välja. |
| PCD | `.pcd` | Tekst ja binaarne: x y z, pakitud või eraldi värvid, intensiivsus. Tihendatud PCD-faile ei loeta veel: salvesta need binaarse või tekstina. |
| PTX | `.ptx` | Üks või mitu skanni, igaüks oma teisenduse järgi paigutatud; punktid, mida skanner ei mõõtnud, jäetakse välja. Meetrites. |
| PTS, XYZ | `.pts`, `.xyz` | Tekst: x y z, koos intensiivsuse ja värvidega, kui vastavad veerud on olemas. |

## Failid, mida loeb ainult skanneri tarkvara

Mõned skannifailid on skanneritootja enda vorming, mille kirjeldust pole avaldatud ega ole avatud lugejat. BimCraft ei saa neid lugeda ning nende avamisel kuvatakse kaart, mis ütleb, mis fail see on ja mida teha. Ekspordi skann tootja tarkvarast E57- või LAS-vormingus (või PTX, PTS) ja ava eksporditud fail.

| Fail | Laiend | Ekspordi allikast |
|---|---|---|
| ReCap-projekt | `.rcp` | ReCap: ava projekt ja ekspordi see. Projekt viitab ainult oma skannidele, seega pelgalt `.rcp`-faili kopeerimine punkte ei anna. |
| ReCap-skann | `.rcs` | ReCap: ava projekt, millesse skann kuulub, ja ekspordi see. |
| FARO-skann | `.fls` | FARO SCENE. |
| Leica-skann | `.lgs` | Leica Cyclone REGISTER 360. |
| Trimble-skann | `.tzf` | Trimble RealWorks või Trimble Business Center. |
| Z+F-skann | `.zfs` | Z+F LaserControl. |

:::tip
Kui eksport küsib vormingut, hoiab LAS või LAZ alles kõik, mida BimCraft näitab (värvid, intensiivsuse, klassid ja koordinaatsüsteemi), kõige väiksemas failis.
:::

## Miks neid faile ei loeta

Need vormingud ei ole avaldatud ja ainus viis neid lugeda on iga tootja enda tarkvarakogu, mille tingimused on tootja omad. BimCraft loeb ainult neid vorminguid, mida suudab lugeda oma koodiga sinu arvutis, nii et skannit ei pea kuskile saatma, et seda avada.
