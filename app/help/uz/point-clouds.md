---
title: Nuqtalar buluti modelning yonida
summary: Lazer skanerlashni (LAS, LAZ, E57, PLY, PCD, PTX, PTS yoki XYZ) 3D koʻrinishda oʻz-oʻzidan yoki IFC modeli bilan birga ochish, rang berish, undan yupqa kesim kesish, uning nuqtalariga oʻlchash va as-built chiziqlarni izlash uchun chizma dasturiga yuborish.
keywords: nuqtalar buluti, lazer skanerlash, skanerlash, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, as-built, haqiqiy holat, geodezik oʻlchash, birlashtirish, kesim, reja kesimi, tutib olish, oʻlchash, izlash, skanerdan bim gacha
from: d0a3e740
---

## Nima qilasiz

Binoning lazer skanerlashini uning modeli yonida koʻring: qurilgani loyihaga mos kelishini tekshiring, skanerlangan nuqtalar orasida oʻlchang va devorlar, eshiklar hamda ustunlarni oʻqish uchun yupqa kesim kesing.

## Qadamlar

1. Bulutni oching: `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` yoki `.xyz` faylni {{ui:Ochiq}} bilan oching yoki sahifaga tashlang (har bir format nimani olib kelishi va skanerning oʻz dasturidan nimani eksport qilish haqida nuqtalar buluti formatlari mavzusiga qarang). Model ochiq boʻlsa, bulut 3D koʻrinishda modelga qoʻshiladi; bulutni ochish hech qachon modelni yoki uning saqlanmagan oʻzgarishlarini yopmaydi. Model boʻlmasa, bulut oʻz-oʻzidan ochiladi.
2. Asboblar panelining ostida bulut paneli paydo boʻladi. Unda nechta nuqta koʻrinayotgani va faylda nechta nuqta borligi aytiladi.
3. {{ui:Rang boʻyicha}} ni tanlang: faylning oʻz ranglari (skaner ularni saqlagan boʻlsa), {{ui:Balandlik}}, {{ui:Intensivlik}}, {{ui:Sinf}} (LiDAR sinflari, masalan yer, oʻsimlik va bino) yoki {{ui:Bir rang}}. {{ui:Hajmi}} nuqtalarni kattaroq yoki kichikroq qiladi.
4. {{ui:Kesim}} ostidagi {{ui:Reja}} ni bosing: faqat eng past nuqtadan 1.2 m balandlikdagi yupqa qatlam qoladi, tepadan qaraganda. Devorlar, eshik teshiklari va ustunlar qavat rejasi kabi koʻrinadi. {{ui:Old}} va {{ui:Yon}} tik qatlamlarni kesadi, fasad va kesimlar uchun. Qatlamni {{ui:Da}} bilan siljiting va {{ui:Qalinlik}} ni (metrda) oʻzgartiring. {{ui:Oʻchiq}} butun bulutni yana koʻrsatadi.
5. Asboblar panelidagi {{ui:Oʻlchash}} ni bosing. Koʻrsatkich bulutning nuqtalariga yopishadi (yorliqda "Nuqtalar buluti" yoziladi), shuning uchun kesimda devordan devorgacha yoki model elementidan skanerlashgacha oʻlchashingiz mumkin. Yetarlicha yaqin model burchagi yoki qirrasi baribir ustunlik qiladi.
6. {{ui:Oʻlchash}} › {{ui:Joylashuv}} bilan bulut nuqtasi, agar fayl uni nomlagan boʻlsa, bulutning oʻz koordinatalar tizimidan kenglik va uzunlik beradi.
7. {{ui:Yashirish}} bulutni bir lahzaga yashiradi; {{ui:Olib tashlash}} uni chiqarib tashlaydi. {{ui:Koʻrsatish}} › {{ui:Nuqtalar buluti}} panelni yashiradi yoki koʻrsatadi.

## Bulut qayerga boradi

{{ui:Joylashtirish}} paneldagi bulut modelga qanday mosligini bildiradi:

- **Model koordinatalari**: bulutning raqamlari modelning oʻz raqamlari (loyihaning koordinatalariga birlashtirilgan skanerlash).
- **Xarita koordinatalari**: model xarita konversiyasiga ega (IfcMapConversion) va bulut bir xil proyeksiyalangan tizimda: bulut shu orqali joylashtiriladi. Agar ikkalasi turli tizimlarni nomlasa, holat qatorida shu aytiladi.
- **Model markaziga nisbatan**: agar ikkalasi ham bulutni modelga yaqin joylashtirmasa, uning markazi model markaziga, eng past nuqtasi esa modelning poliga qoʻyiladi. Boshqa tanlovni tanlab, buni bekor qilishingiz mumkin.

Fayl oʻz birliklarini aytmasa, BimCraft metrlarni oʻqiydi va panelda {{ui:Birliklar}} ni taklif qiladi.

## As-built chiziqlarni izlash

{{ui:CadCraft ichida izlash}} tugmasini bosing, bulutni yangi yorliqda chizma dasturiga topshirish uchun. U yerda bulut chizma ostida ochiladi, bu yerda reja kesimi va obyektni tutib olish skanerlash ustiga devorlarni chizishga imkon beradi. Qarang: nuqtalar buluti haqida CadCraft mavzusi.

## Nuqtalar soni

Skanerlashda yuzlab million nuqta boʻlishi mumkin. BimCraft har bir nuqtani bir marta oʻqiydi va chizish uchun ularning teng ulushini saqlaydi: paneldagi {{ui:Koʻrsatish}} nechta ekanligini belgilaydi (1, 2, 5 yoki 10 million). Koʻproq nuqta koʻproq xotira va tezroq grafik karta talab qiladi. LiDAR sinflari boʻyicha hisob faylning har bir nuqtasi boʻyicha.

:::note
Fayllar shu kompyuterda oʻqiladi; hech narsa yuklanmaydi. LAS 1.0–1.4 va LAZ oʻqiladi (LAZ fayllar 1 GB gacha, oʻqish vaqtida xotirada saqlanadi); E57 fayllar hozircha 6 million nuqtagacha va 512 MB gacha (kattaroq skanerlar: LAS yoki LAZ eksport qiling); PLY, PCD va PTX toʻliq; matnli bulutlar `x y z` koʻrinishida, boʻlsa rang (`r g b`) va intensivlik ustunlari bilan.
:::

## Bir nechta skanerlash

Turli joylardan olingan skanerlarni bitta koordinatalar tizimiga birlashtirish, ICP bilan aniqlashtirish va bitta LAS yoki E57 sifatida eksport qilish mumkin: qarang [Bir nechta skanerlashni bittaga birlashtirish](topic:register-scans).
