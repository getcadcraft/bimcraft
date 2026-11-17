---
title: Qaababka daruurta barta: waxa furma, iyo waxa la dhoofiyo
summary: Faylasha scan-ka laser ee furma muuqaalka 3D, kuwa ah qaabka gaarka ah ee soo saaraha scanner-ka, iyo waxa laga dhoofiyo software-ka scanner-ka si scan-ku halkan u furmo.
keywords: daruurta barta, scan laser, scan, qaababka, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, dhoofin, ma furmo, lama akhriyo
from: 1e985f01
---

## Waxa halkan furma

Kuwan ku fur {{ui:Furan}} ama ku dhig bogga (eeg mawduuca ku saabsan muujinta daruurta barta ee moodeelka ag).

| Qaabka | Kordhinta | Waxa la akhriyo |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: barooyin, midabo, xoog, fasallada LiDAR, nidaamka isku-xirka. LAZ ilaa 1 GB. |
| E57 | `.e57` | Skaan kasta oo faylka ku jira, mid kastaa booskiisa ku dhigan; midabo, ama xoog marka faylku midab ma lahayn. Sawirada faylka ku jira waa laga reebay (waa la sheegaa). Ilaa 6 milyan oo bar iyo 512 MB hadda: skaanada waaweyn dhoofi LAS ama LAZ. |
| PLY | `.ply` | Qoraal iyo binary (labada habka byte): kulmada x y z, midabo iyo xoog. Wejiyada waa laga reebay (waa la sheegaa). |
| PCD | `.pcd` | Qoraal iyo binary: x y z, midabo isku dhex jira ama kala go'an, xoog. PCD la isku qabanqaabiyay weli lama akhriyo: u keydi binary ama qoraal. |
| PTX | `.ptx` | Hal ama in ka badan oo skaan, mid kasta oo leh isbeddelkiisa; barooyinka scanner-ku ma cabbirin waa laga reebay. Mitir. |
| PTS, XYZ | `.pts`, `.xyz` | Qoraal: x y z, oo leh xoog iyo midab marka tiirarkaasi jiraan. |

## Faylasha uu software-ka scanner-ka oo keliya akhriyo

Qaar ka mid ah faylasha scan-ka waa qaabka gaarka ah ee soo saaraha scanner-ka, aan la daabicin oo aan lahayn akhriste furan. BimCraft ma akhrin karo, furista mid wuxuu muujinayaa kaarka sheegaya waxa uu yahay iyo waxa la sameeyo. Ka dhoofi scan-ka software-ka soo saaraha sida E57 ama LAS (ama PTX, PTS), kadibna fur faylka la dhoofiyay.

| Faylka | Kordhinta | Ka dhoofi |
|---|---|---|
| Mashruuca ReCap | `.rcp` | ReCap: fur mashruuca oo dhoofi. Mashruucu wuxuu kaliya tilmaamaa skaanadiisa, sidaas darteed koobiyeynta `.rcp` keliya ma siiso barooyin. |
| Scan ReCap | `.rcs` | ReCap: fur mashruuca uu scan-kaasi ku jiro oo dhoofi. |
| Scan FARO | `.fls` | FARO SCENE. |
| Scan Leica | `.lgs` | Leica Cyclone REGISTER 360. |
| Scan Trimble | `.tzf` | Trimble RealWorks ama Trimble Business Center. |
| Scan Z+F | `.zfs` | Z+F LaserControl. |

:::tip
Marka dhoofintu qaab weyddiiso, LAS ama LAZ waxay hayaan wax kasta oo BimCraft muujiyo (midabada, xoogga, fasallada iyo nidaamka isku-xirka) faylka ugu yar.
:::

## Sababta faylkan aan loo akhrin

Qaababkaas lama daabacin, habka kaliya ee loo akhriyo waa maktabadda software-ka soo saaraha kasta, iyada oo ku xidhan shuruucdeeda. BimCraft wuxuu akhriyaa oo keliya qaababka uu koodkiisa ku akhriyi karo kombiyuutarkaaga, sidaas darteed scan looma baahna in meel loo diro si loo furo.
