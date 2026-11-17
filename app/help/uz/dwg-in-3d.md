---
title: DWG yoki DXF chizmasini 3D da koʻrish
summary: Chizmaning model fazosini 3D ga oʻtkazing: balandliklar, qalinlik, 3D yuzlar, toʻrlar va bloklarni koʻring, atrofida aylantiring, obyektni bosib uning xossalarini koʻring va hali chizilmagan narsalarni koʻring.
keywords: 3d, dwg, dxf, chizma, model fazosi, aylantirish, kesim, kesish, tekislik, tanlash, xossalar, atributlar, handle, balandlik, qalinlik, ekstruziya, 3dface, polyface, mesh, 3d polilinya, bloklar, koʻrinishlar, perspektiva, parallel, chegaralar, acis, qattiq jismlar
from: a0c6cd17
---

## Nima qilasiz

Chizmaning model fazosiga 3D da qarang. Chiziqlar va polilinyalar oʻz haqiqiy balandligida turadi; qalinligi bor obyektlar devor kabi koʻtariladi; 3D yuzlar, toʻrlar va 3D bloklar esa aylantirish mumkin boʻlgan sirtlar sifatida koʻrinadi. Varaqlar 2D boʻlib qoladi.

## Qadamlar

1. DWG yoki DXF ni oching. Qarang: [DWG yoki DXF chizmasini koʻrish](topic:view-dwg). {{ui:Settings}} › {{ui:BimCraft}} › **Chizmalar ochiladigan rejim** da {{ui:Model (2D)}} yozilmagan boʻlsa, u 3D da ochiladi.
2. 2D da chizma ustidagi panelda {{ui:3D}} ni bosing yoki {{key:3}} ni bosing.
3. Birinchi marta biroz kuting: holat qatorida "Chizma 3D da qurilmoqda…" deyiladi, soʻng nechta chiziq va yuz koʻrsatilishi aytiladi.
4. Aylantiring, suring va kattalashtiring (quyidagi jadvalga qarang).
5. Ikkinchi panelda koʻrinishni tanlang: {{ui:Iso}}, {{ui:Top}}, {{ui:Bottom}}, {{ui:Front}}, {{ui:Back}}, {{ui:Left}} yoki {{ui:Right}}.
6. Perspektiva va parallel koʻrinish oʻrtasida almashish uchun {{ui:Perspective}} ni bosing.
7. Butun chizmani yana koʻrish uchun {{ui:Extents}} ni yoki {{key:F}} ni bosing.
8. 2D ga qaytish uchun {{ui:3D}} ni yana bosing, {{key:3}} ni bosing, yoki {{ui:Model}} yoki varaq yorligʻini bosing.

## Nimani koʻrishingiz kerak

- Model fazosi 3D da, Z yuqoriga, chizmaning oʻz ranglarida. Yuzlar oʻz qirralaridan bir oz ochroq.
- {{ui:Layers}} da oʻchirgan qatlamlaringiz 3D koʻrinishdan ham yoʻqoladi.
- Oʻngda: chiziqlar va yuzlar soni, chizmaning X, Y va Z boʻyicha oʻlchami, **Faqat 2D koʻrinishda** va **Hali chizilmagan**.

## Kesim tekisligi bilan kesish

3D panelidagi {{ui:Section}} ni bosing yoki {{key:X}} ni bosing. Undagi panel IFC modellari uchun ishlagandek ishlaydi (qarang: [IFC modelini kesim tekisligi bilan kesish](topic:section-plane)): {{ui:Top}}, {{ui:Front}} yoki {{ui:Side}} dan kesing, siljishni torting yoki yozing (bu yerda chizmaning oʻz birliklarida) va boshqa tomonni saqlash uchun {{ui:Flip}} ni bosing. Tekislik kesib tashlagan narsani tanlab boʻlmaydi. 2D ga qaytish kesimni olib tashlaydi.

## Obyekt xossalarini koʻring

3D koʻrinishda obyektni bosing. U tanlov rangiga oʻtadi va {{ui:Properties}} faylda u haqida nima deyilganini koʻrsatadi: uning turi, qatlami, rangi, chiziq turi va handle, soʻng uning oʻz maʼlumotlari, masalan chiziqning boshi, oxiri va uzunligi, aylananing markazi va radiusi, 3D yuzning burchaklari yoki blok havolasining bloki, kiritish nuqtasi, masshtabi, aylanishi va atribut qiymatlari.

- Blok havolasi butunligicha tanlanadi, ichidagi bloklar ham.
- Chiziqdan bir necha piksel uzoqda bosilsa, chiziq tanlanadi.
- Yana obyektlarni tanlash yoki birini olib tashlash uchun {{key:Mod}} ni ushlab bosing; {{ui:Properties}} keyin ularni turi boʻyicha sanaydi.
- {{key:Esc}} yoki boʻsh joyni bosish tanlovni tozalaydi.
- Oʻchirilgan qatlamlardagi obyektlarni tanlab boʻlmaydi.

## Harakatlanish

:::mouse
| Maqsad | Bajaring |
|---|---|
| Aylantirish | Oʻrta tugma bilan yoki chap tugma bilan torting |
| Surish | Oʻng tugma bilan torting yoki {{key:Shift}} ni ushlab torting |
| Kattalashtirish | Gʻildirakni aylantiring; u kursor ostidagi narsaga qarab kattalashadi |
| Hammasini koʻrish | {{ui:Extents}} yoki {{key:F}} |
| Yon tomondan qarash | Pastki oʻng burchakdagi koʻrinish kubining yuzi, qirrasi yoki uchini bosing |
:::

Koʻrinish kubi {{ui:Settings}} da oʻq belgisiga almashtirilishi yoki yashirilishi mumkin. Qarang: [BimCraft sozlamalari](topic:settings).

:::mac mouse
Trekpadda ikki barmoq bilan suring va aylantiring, {{key:Shift}} ni ushlab suring va surib suring, barmoqlarni yaqinlashtirib yoki uzoqlashtirib kattalashtiring.
:::

:::touch
Aylantirish uchun bir barmoq bilan torting. Kattalashtirish uchun ikki barmoq bilan qisib, surish uchun ularni birga harakatlantiring.
:::

## 3D da nima chiziladi

| Chizmada | 3D da |
|---|---|
| Chiziqlar, 3D polilinyalar | Oʻz haqiqiy balandligida |
| Polilinyalar, aylanalar, yoylar, ellipslar | Oʻz tekisligida, oʻz balandligida; chizma ularni egsa, egilgan holda |
| Chiziq, polilinya, aylana va yoylardagi qalinlik | Shu balandlikdagi devorlar; aylanalar yuqori va pastdan yopiq |
| 3D yuzlar, polyface toʻrlari, polygon toʻrlari | Koʻrinadigan qirralari bilan soyalangan sirtlar |
| Bloklar | 3D da joylashtirilgan, burilgan va masshtabli, ichki bloklar ham |
| Shtrixlash | Ularning konturlari |
| Oddiy 2D chiziqlar | Tekis, qanday chizilgan boʻlsa shunday |

## Faqat 2D koʻrinishda

Matn, koʻp qatorli matn va bloklarning koʻrinadigan atributlari 3D da, oʻz tekisligida va oʻz balandligida chiziladi, ularni bosish ularni tanlaydi. Keng polilinyalar kengligini tekis lenta sifatida koʻrsatadi. Multileader, rasmlar va shtrix naqshlari **Faqat 2D koʻrinishda** boʻlib sanaladi: ularni {{ui:Model}} yorligʻida yoki varaqlarda koʻring.

## Hali chizilmagan

ACIS jismlar sifatida saqlangan qattiq jismlar va sirtlar (3D qattiq jismlar, jismlar, sohalar va sirtlar) hamda subdivision toʻrlar **Hali chizilmagan** ostida nechta ekanligi bilan roʻyxatlanadi. Ular taxmin qilinmasdan oʻtkazib yuboriladi.

## Keng tarqalgan xatolar

- **Hammasi tekis koʻrinadi.** Chizma 2D: uning chiziqlarining balandligi yoʻq. Tekshirish uchun {{ui:Front}} ni bosing; tekis chizma chiziq sifatida koʻrinadi.
- **Qattiq model hech narsa koʻrsatmaydi.** Qattiq modelyor bilan yaratilgan qattiq jismlar ACIS jismlar boʻlib, **Hali chizilmagan** ostida roʻyxatlanadi. Modelni IFC yoki 3D yuzlar sifatida uni yaratgan dasturdan eksport qiling.
- **Chizma oʻrtada kichik toʻplam boʻlib turadi.** Model fazosida uzoqdagi narsa, masalan rejaning eski nusxasi, chegaralarni katta qiladi. Koʻrmoqchi boʻlgan joyingizda gʻildirak bilan kattalashtiring.

## Keyingisi

- [Qatlamlar va varaqlar bilan ishlash](topic:dwg-layers-sheets)
- [IFC modelini kesim tekisligi bilan kesish](topic:section-plane)
