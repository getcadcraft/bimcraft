---
title: Nuqtalar buluti formatlari: nima ochiladi va nimani eksport qilish kerak
summary: Qaysi lazer skanerlash fayllari 3D koʻrinishda ochiladi, qaysilari skaner ishlab chiqaruvchisining oʻz formati ekanligi va skanerning dasturidan nimani eksport qilish kerakki, skanerlash bu yerda ochilsin.
keywords: nuqtalar buluti, lazer skanerlash, skanerlash, formatlar, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, eksport, ochilmayapti, oʻqilmaydi
from: 1e985f01
---

## Bu yerda nima ochiladi

Bularni {{ui:Ochiq}} bilan yoki sahifaga tashlab oching (qarang: nuqtalar bulutini model yonida koʻrsatish haqidagi mavzu):

| Format | Kengaytma | Nima oʻqiladi |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: nuqtalar, ranglar, intensivlik, LiDAR sinflari, koordinatalar tizimi. LAZ 1 GB gacha. |
| E57 | `.e57` | Fayldagi har bir skanerlash, oʻz holati boʻyicha joylashtirilgan; ranglar yoki fayl rangga ega boʻlmasa intensivlik. Fayldagi rasmlar chiqarib tashlanadi (aytiladi). Hozircha 6 million nuqtagacha va 512 MB gacha: kattaroq skanerlarni LAS yoki LAZ sifatida eksport qiling. |
| PLY | `.ply` | Matnli va ikkilik (ikkala bayt tartibi ham): uchlarning x y z, ranglari va intensivligi. Yuzlar chiqarib tashlanadi (aytiladi). |
| PCD | `.pcd` | Matnli va ikkilik: x y z, jamlangan yoki alohida ranglar, intensivlik. Siqilgan PCD fayllar hali oʻqilmaydi: ularni ikkilik yoki matnli sifatida saqlang. |
| PTX | `.ptx` | Bitta yoki bir nechta skanerlash, har biri oʻz transformatsiyasi bilan joylashtirilgan; skaner oʻlchamagan nuqtalar chiqarib tashlanadi. Metrlarda. |
| PTS, XYZ | `.pts`, `.xyz` | Matnli: x y z, ustunlar boʻlsa intensivlik va ranglar bilan. |

## Faqat skaner dasturi oʻqiydigan fayllar

Baʼzi skanerlash fayllari skaner ishlab chiqaruvchisining oʻz formati boʻlib, uning tavsifi nashr etilmagan va ochiq oʻquvchisi yoʻq. BimCraft ularni oʻqiy olmaydi; ularni ochganingizda qanday fayl ekanligini va nima qilish kerakligini koʻrsatuvchi kartochka chiqadi. Skanerlashni ishlab chiqaruvchi dasturidan E57 yoki LAS (yoki PTX, PTS) sifatida eksport qiling, soʻng eksport qilingan faylni oching.

| Fayl | Kengaytma | Eksport qilinadigan dastur |
|---|---|---|
| ReCap loyihasi | `.rcp` | ReCap: loyihani oching va eksport qiling. Loyiha faqat oʻz skanerlariga ishora qiladi, shuning uchun faqat `.rcp` ni nusxalash nuqta bermaydi. |
| ReCap skanerlash | `.rcs` | ReCap: skanerlash tegishli boʻlgan loyihani oching va eksport qiling. |
| FARO skanerlash | `.fls` | FARO SCENE. |
| Leica skanerlash | `.lgs` | Leica Cyclone REGISTER 360. |
| Trimble skanerlash | `.tzf` | Trimble RealWorks yoki Trimble Business Center. |
| Z+F skanerlash | `.zfs` | Z+F LaserControl. |

:::tip
Eksport format soʻraganda, LAS yoki LAZ BimCraft koʻrsatadigan hamma narsani (ranglar, intensivlik, sinflar va koordinatalar tizimi) eng kichik faylda saqlaydi.
:::

## Nega bu fayllar oʻqilmaydi

Bu formatlar nashr etilmagan; ularni oʻqishning yagona yoʻli har bir ishlab chiqaruvchining oʻz dasturiy kutubxonasi, oʻz shartlari bilan. BimCraft faqat oʻzining kodi bilan kompyuteringizda oʻqiy oladigan formatlarni oʻqiydi, shuning uchun skanerlashni ochish uchun hech qachon biror joyga yuborilmaydi.
