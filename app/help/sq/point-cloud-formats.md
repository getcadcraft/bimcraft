---
title: Formatet e reve të pikave: çfarë hapet dhe çfarë të eksportohet
summary: Cilët skedarë skanimi lazer hapen në pamjen 3D, cilët janë format i vetë prodhuesit të skanerit, dhe çfarë të eksportohet nga softueri i skanerit që skanimi të hapet këtu.
keywords: re pikash, skanim lazer, skanim, formate, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, eksport, nuk hapet, nuk lexohet
from: 1e985f01
---

## Çfarë hapet këtu

Hapi këto me {{ui:Open}} ose duke i lëshuar në faqe (shih temën mbi shfaqjen e një reje pikash pranë modelit):

| Format | Shtesa | Çfarë lexohet |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: pikat, ngjyrat, intensiteti, klasat LiDAR, sistemi i koordinatave. LAZ deri në 1 GB. |
| E57 | `.e57` | Çdo skanim në skedar, secili i vendosur sipas pozicionit të vet; ngjyrat, ose intensiteti kur skedari nuk ka ngjyra. Imazhet në skedar lihen jashtë (thuhet). Deri në 6 milionë pika dhe 512 MB për tani: eksporto skanimet më të mëdha si LAS ose LAZ. |
| PLY | `.ply` | Tekst dhe binar (të dy rendet e bajtëve): x y z të kulmeve, ngjyrat dhe intensiteti. Faqet lihen jashtë (thuhet). |
| PCD | `.pcd` | Tekst dhe binar: x y z, ngjyra të paketuara ose të ndara, intensiteti. Skedarët PCD të ngjeshur nuk lexohen ende: ruaji si binar ose tekst. |
| PTX | `.ptx` | Një ose më shumë skanime, secili i vendosur me transformimin e vet; pikat që skaneri nuk i ka matur lihen jashtë. Metra. |
| PTS, XYZ | `.pts`, `.xyz` | Tekst: x y z, me intensitet dhe ngjyra kur kolonat janë aty. |

## Skedarët që lexohen vetëm nga softueri i skanerit

Disa skedarë skanimi janë format i vetë prodhuesit të skanerit, pa përshkrim të publikuar dhe pa lexues të hapur. BimCraft nuk mund t'i lexojë, dhe hapja e një prej tyre shfaq një kartelë që thotë çfarë është dhe çfarë të bësh. Eksporto skanimin nga softueri i prodhuesit si E57 ose LAS (ose PTX, PTS), pastaj hap skedarin e eksportuar.

| Skedari | Shtesa | Eksporto nga |
|---|---|---|
| Projekt ReCap | `.rcp` | ReCap: hap projektin dhe eksportoje. Projekti thjesht tregon skanimet e tij, kështu që kopjimi i vetëm i `.rcp` nuk jep asnjë pikë. |
| Skanim ReCap | `.rcs` | ReCap: hap projektin ku i takon skanimi dhe eksportoje. |
| Skanim FARO | `.fls` | FARO SCENE. |
| Skanim Leica | `.lgs` | Leica Cyclone REGISTER 360. |
| Skanim Trimble | `.tzf` | Trimble RealWorks ose Trimble Business Center. |
| Skanim Z+F | `.zfs` | Z+F LaserControl. |

:::tip
Kur eksporti kërkon një format, LAS ose LAZ ruan gjithçka që BimCraft shfaq (ngjyrat, intensitetin, klasat dhe sistemin e koordinatave) në skedarin më të vogël.
:::

## Pse këto skedarë nuk lexohen

Këto formate nuk janë publikuar, dhe e vetmja mënyrë për t'i lexuar është biblioteka softuerike e secilit prodhues, sipas kushteve të veta. BimCraft lexon vetëm formatet që mund t'i lexojë me kodin e vet në kompjuterin tënd, kështu që një skanim nuk duhet të dërgohet askund për t'u hapur.
