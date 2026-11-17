---
title: Nöqtə buludu formatları: nə açılır və nəyi ixrac etmək
summary: Hansı lazer skan fayllarının 3D görünüşündə açıldığı, hansıların skaner istehsalçısının öz formatı olduğu və skanın burada açılması üçün skaner proqramından nə ixrac etmək lazım olduğu.
keywords: nöqtə buludu, lazer skanı, skan, formatlar, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, ixrac, açılmır, oxunmur
from: 1e985f01
---

## Burada nə açılır

Bunları {{ui:Açıq}} ilə və ya səhifəyə sürükləyib buraxmaqla açın (bax: modelin yanında nöqtə buludunun göstərilməsi mövzusu):

| Format | Uzantı | Nə oxunur |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: nöqtələr, rənglər, intensivlik, LiDAR sinifləri, koordinat sistemi. LAZ 1 GB-a qədər. |
| E57 | `.e57` | Fayldakı hər skan öz pozası ilə yerləşdirilmiş; rənglər, fayl rəng daşımadıqda isə intensivlik. Fayldakı şəkillər buraxılır (bu bildirilir). Hazırda 6 milyon nöqtəyə və 512 MB-a qədər: daha böyük skanları LAS və ya LAZ kimi ixrac edin. |
| PLY | `.ply` | Mətn və ikili (hər iki bayt sırası): təpələrin x y z, rənglər və intensivlik. Üzlər buraxılır (bu bildirilir). |
| PCD | `.pcd` | Mətn və ikili: x y z, qablaşdırılmış və ya ayrı rənglər, intensivlik. Sıxılmış PCD faylları hələ oxunmur: onları ikili və ya mətn kimi saxlayın. |
| PTX | `.ptx` | Bir və ya bir neçə skan, hər biri öz çevrilməsi ilə yerləşdirilmiş; skanerin ölçmədiyi nöqtələr buraxılır. Metrlə. |
| PTS, XYZ | `.pts`, `.xyz` | Mətn: x y z, sütunlar olduqda intensivlik və rənglərlə. |

## Yalnız skaner proqramının oxuduğu fayllar

Bəzi skan faylları skan istehsalçısının öz formatıdır, dərc edilmiş təsviri və açıq oxuyucusu yoxdur. BimCraft onları oxuya bilmir və birini açdıqda bu faylın nə olduğunu və nə etmək lazım olduğunu göstərən kart açılır. Skanı istehsalçının proqramından E57, LAS (və ya PTX, PTS) kimi ixrac edin, sonra ixrac olunmuş faylı açın.

| Fayl | Uzantı | Bunu buradan ixrac edin |
|---|---|---|
| ReCap layihəsi | `.rcp` | ReCap: layihəni açın və ixrac edin. Layihə yalnız öz skanlarına işarə edir, ona görə yalnız `.rcp` faylını kopyalamaq nöqtə vermir. |
| ReCap skanı | `.rcs` | ReCap: skanın aid olduğu layihəni açın və ixrac edin. |
| FARO skanı | `.fls` | FARO SCENE. |
| Leica skanı | `.lgs` | Leica Cyclone REGISTER 360. |
| Trimble skanı | `.tzf` | Trimble RealWorks və ya Trimble Business Center. |
| Z+F skanı | `.zfs` | Z+F LaserControl. |

:::tip
Ixrac format istədikdə LAS və ya LAZ BimCraft-ın göstərdiyi hər şeyi (rənglər, intensivlik, siniflər və koordinat sistemi) ən kiçik faylda saxlayır.
:::

## Niyə bu fayllar oxunmur

Bu formatlar dərc edilməyib və onları oxumağın yeganə yolu hər istehsalçının öz proqram kitabxanasıdır, öz şərtləri altında. BimCraft yalnız öz kodu ilə kompüterinizdə oxuya bildiyi formatları oxuyur, ona görə skanı açmaq üçün heç nə heç yerə göndərilmir.
