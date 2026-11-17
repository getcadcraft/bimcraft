---
title: Import qilishda birliklar: fayl oʻz birliklarini bildiradi yoki sizdan avval soraladi
summary: Import qilayotgan fayl oʻz birliklarini bildirsa, BimCraft ulardan foydalanadi va buni aytadi. Bildirmasa, BimCraft biror narsa joylashtirishdan oldin soraydi va javobingizni shu fayl uchun eslab qoladi.
keywords: birliklar, import, ochish, OBJ, STL, DWG, DXF, IFC, nuqtali bulut, kutubxona elementi, millimetr, metr, dyuym, fut, masshtab, notoʻgʻri oʻlcham, juda katta, juda kichik, 1000 marta, soʻrash, eslab qolingan
from: f044e9bc
---

## Nima qilasiz

Faylni import qiling va u toʻgʻri oʻlchamda kelishiga ishonch hosil qiling.

## Qadamlar

1. Faylni odatdagidek oching yoki qoʻshing: {{ui:Ochiq}}, Kutubxonaning {{ui:Fayllar}} boʻlimi, {{ui:Nuqtali bulutlar}} yoki Yaratish › Chizmadan.
2. Agar fayl oʻz birliklarini bildirsa, hech narsa soralmaydi. Holat qatorida fayl qaysi birliklarni bildirishi koʻrsatiladi.
3. Bildirmasa, dialog faylning birliklarini soraydi. Fayldagi bir birlik nimaga teng ekanini tanlang va {{ui:Ushbu birliklardan foydalanish}} ni bosing. Javob bermaguningizcha hech narsa joylashtirilmaydi.
4. {{ui:Bekor qilish}} (yoki {{key:Esc}}) hech narsani import qilmaydi.

## Qaysi fayllar oʻz birliklarini bildiradi

- **IFC**: oʻz uzunlik birligini bildiradi, va "Ochildi" qaysi birlik ekanini koʻrsatadi. Birligi boʻlmagan IFC ochilishdan oldin soraladi; javobingiz modelga yoziladi, shuning uchun saqlaganingizdan keyin fayl uni bir marta bildiradi.
- **DWG va DXF**: chizmaning qoʻyish birliklari. Birlikka ega boʻlmagan chizma soraladi (Kutubxona fayllari, Yaratish › Chizmadan, konturlardan relyef).
- **Relyef uchun nuqtalar roʻyxati**: birlik bildirmaydi. Sizdan soraladi.
- **Nuqtali bulutlar**: koordinatalar tizimiga ega LAS va LAZ, E57, PTX va PLY oʻz birliklarini bildiradi. Boshqalari haqida soraladi.
- **OBJ va STL**: hech qachon birlik bildirmaydi. Sizdan soraladi.
- **glTF va GLB**: metr, formatning oʻz qoidasiga koʻra.
- **Tasvirlar**: oʻz oʻlchami yoʻq. Tasvir koʻrinishga moslanadi va uning oʻlchamini ikki nuqta boʻyicha masshtablash bilan belgilaysiz. Bergan oʻlchamingiz shu fayl uchun eslab qolinadi: qayta joylashtirilganda u shu oʻlchamda keladi va holat qatorida buni aytiladi.
- **Nuqtali bulutlar qoʻshimchasi**: birlik bildirmagan faylli bulutni yaratganingizda soraydi va bulut raqamlarini u olib yuradigan birlikda belgilaydi.

## Yaxshi bilish kerak

- Javob shu fayl uchun (uning nomi, oʻlchami va sanasi) bu kompyuterda, barcha CadCraft dasturlarida eslab qolinadi. Keyingi safar xuddi shu fayl kelganda sizdan soralmaydi va holat qatorida eslab qolingan birliklar ishlatilgani aytiladi.
- Qayta soralish uchun: buyruqlar paneli ({{key:Mod+K}}) › **Import qilingan fayllar birliklarini qayta soʻrash**.
- Importda allaqachon mavjud birliklar roʻyxatlari (Kutubxonaning birliklari, bulut panelidagi birliklar, Yaratish › Chizmadan boʻlimidagi chizma birliklari) hali ham importdan keyin birliklarni oʻzgartiradi. Relyef asbobidagi birliklar roʻyxati endi faqat soʻrov boshlanadigan qiymat.
