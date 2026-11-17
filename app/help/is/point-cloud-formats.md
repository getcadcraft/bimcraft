---
title: Punktskýjasnið: hvað opnast og hvað skal flytja út
summary: Hvaða laserskannaskrár opnast í 3D-sýninni, hver eru eigin snið skannaframleiðanda, og hvað skal flytja út úr hugbúnaði skannans svo skönnunin opnist hér.
keywords: punktský, laserskanni, skönnun, snið, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, útflutningur, opnast ekki, ekki lesið
from: 1e985f01
---

## Hvað opnast hér

Opnaðu þessar skrár með {{ui:Opið}} eða með því að draga þær á síðuna (sjá efnið um að sýna punktský við hlið líkansins):

| Snið | Ending | Hvað er lesið |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: punktar, litir, styrkur, LiDAR-flokkar og hnitakerfið. LAZ allt að 1 GB. |
| E57 | `.e57` | Sérhver skanni í skránni, staðsettur eftir stöðu sinni; litir, eða styrkur þegar skráin hefur enga liti. Myndir í skránni eru skildar eftir (það er sagt). Allt að 6 milljónir punkta og 512 MB eins og er: fluttu stærri skanna út sem LAS eða LAZ. |
| PLY | `.ply` | Texti og tvíundir (báðar bæti-raðir): hornpunktar x y z, litir og styrkur. Fletir eru skildir eftir (það er sagt). |
| PCD | `.pcd` | Texti og tvíundir: x y z, pakkaðir eða aðskildir litir, styrkur. Þjappaðar PCD-skrár eru ekki lesnar enn: vistaðu þær sem tvíundir eða texta. |
| PTX | `.ptx` | Einn eða fleiri skannar, hver staðsettur með eigin umbreytingu; punktar sem skanninn mældi ekki eru skildir eftir. Metrar. |
| PTS, XYZ | `.pts`, `.xyz` | Texti: x y z, með styrk og litum þegar dálkarnir eru þar. |

## Skrár sem aðeins hugbúnaður skannans les

Sumar skannaskrár eru eigið snið skannaframleiðanda, án birtrar lýsingar og án opins lesara. BimCraft getur ekki lesið þær, og þegar ein þeirra er opnuð birtist spjald sem segir hvað hún er og hvað skal gera. Flyttu skönnunina út úr hugbúnaði framleiðandans sem E57 eða LAS (eða PTX, PTS) og opnaðu síðan útfluttu skrána.

| Skrá | Ending | Flytja út úr |
|---|---|---|
| ReCap-verkefni | `.rcp` | ReCap: opnaðu verkefnið og fluttu það út. Verkefnið vísar aðeins á skannana sína, svo afritun á `.rcp` eitt og sér gefur engan punkt. |
| ReCap-skanni | `.rcs` | ReCap: opnaðu verkefnið sem skanninn tilheyrir og fluttu það út. |
| FARO-skanni | `.fls` | FARO SCENE. |
| Leica-skanni | `.lgs` | Leica Cyclone REGISTER 360. |
| Trimble-skanni | `.tzf` | Trimble RealWorks eða Trimble Business Center. |
| Z+F-skanni | `.zfs` | Z+F LaserControl. |

:::tip
Þegar útflutningurinn biður um snið, geymir LAS eða LAZ allt sem BimCraft sýnir (liti, styrk, flokka og hnitakerfið) í minnstu skránni.
:::

## Af hverju þessar skrár eru ekki lesnar

Þessi snið eru ekki birt, og eina leiðin til að lesa þau er bókasafn hugbúnaðar hvers framleiðanda, samkvæmt hans eigin skilmálum. BimCraft les aðeins snið sem það getur lesið með eigin kóða á tölvunni þinni, svo skönnun þarf aldrei að senda neitt til að opnast.
