---
title: Loyiha faylidan IFC orqali BimCraft ga
summary: BimCraft da eng yaxshi ochiladigan IFC eksport sozlamalari (versiya, xossalar toʻplamlari, asosiy miqdorlar, xonalar, bogʻlangan modellar, koordinatalar), natijani qanday ochish va eksport nimani saqlashi.
keywords: eksport, ifc eksport, rvt to ifc, konvertatsiya, 3d, geometriya, ifc2x3, ifc4, muvofiqlashtirish koʻrinishi, havola koʻrinishi, loyihalash uzatish koʻrinishi, xossalar toʻplamlari, asosiy miqdorlar, xonalar, boʻshliqlar, bogʻlangan fayllar, umumiy koordinatalar, soʻrov nuqtasi, loyiha asosiy nuqtasi, sozlamalar
from: 3efd5fc9
---

## Nima qilasiz

Loyiha faylini BimCraft da aylantirish, tekshirish va tahrirlash mumkin boʻlgan IFC fayliga aylantiring. BimCraft hozircha `.rvt` ichidagi 3D modelni oʻqiy olmaydi, shuning uchun eksport uni yaratgan dasturda (Revit) boʻladi; BimCraft natijani ochadi.

## Qadamlar

1. Loyihani uni yaratgan dasturda oching. BimCraft kartochkasi u saqlangan relizni koʻrsatadi.
2. Xohlagan narsani koʻrsatadigan 3D koʻrinishni oching.
3. **Fayl > Eksport > IFC** ni tanlang.
4. Eksport oynasida quyidagi sozlamalar bilan sozlamani tanlang (yoki **Sozlamani oʻzgartirish…**).
5. Papka va fayl nomini tanlang va eksport qiling.
6. BimCraft da {{ui:Fayl tanlash}} ni bosing va yangi `.ifc` faylni tanlang. Alohida fayllar sifatida eksport qilingan bogʻlangan modellar {{ui:Model qoʻshish}} bilan bir sahnaga ochiladi.

## Bu yerda eng yaxshi ochiladigan sozlamalar

| Eksportchidagi sozlama | Tanlang | Nega |
|---|---|---|
| IFC versiyasi | Koʻrish, tekshirish va hajmlarni hisoblash uchun **IFC4 Reference View**; boshqalarga IFC2X3 kerak boʻlganda **IFC2X3 Coordination View 2.0** | Ikkalasi toʻliq ochiladi. **IFC4 Design Transfer View** ham ochiladi, aniqroq shakllar bilan, lekin fayl kattaroq va sekinroq. |
| Fayl turi | **IFC** (oddiy) | BimCraft `.ifczip` yoki `.ifcxml` ni ochmaydi. |
| Bosqich / koʻrinadigan elementlar | Kerakli bosqich va 3D koʻrinishni shu uchun sozlaganingizda **Faqat koʻrinishda koʻrinadigan elementlarni eksport qilish** | Ataylab yashirgan narsalarni qoldiradi. |
| Xossalar toʻplamlari | **Revit xossalar toʻplamlarini eksport qilish** va **IFC umumiy xossalar toʻplamlarini eksport qilish** | Ular BimCraft da {{ui:Xossalar}} da koʻrinadigan xossalar toʻplamiga aylanadi va {{ui:Qidirish}}, {{ui:Rang}} hamda {{ui:Model tekshiruvi}} ulardan foydalanadi. |
| Asosiy miqdorlar | **Asosiy miqdorlarni eksport qilish** | {{ui:Miqdorlar yigʻindisi}} va jadvallar ulardan foydalanadi (uzunliklar, maydonlar, hajmlar), taxmin qilish oʻrniga. |
| Xonalar va maydonlar | **3D koʻrinishlarda xonalarni eksport qilish** (yoki Xonalar / Boʻshliqlar opsiyasi) | Xonalar boʻshliq sifatida keladi: ularni koʻrish uchun {{ui:Boʻshliqlar}} ni bosing. |
| Bogʻlangan fayllar | **Bogʻlangan fayllarni alohida IFC sifatida eksport qilish** | Har bir bogʻlanish oʻz faylini boʻladi; ularni {{ui:Model qoʻshish}} bilan birga oching va ular tekislanadi. |
| Koordinata asosi | **Umumiy koordinatalar** (yoki soʻrov nuqtasi) | Fayl oʻzining xaritadagi joyini olib yuradi (IfcMapConversion), shuning uchun Oʻlchash › Joylashuv, yer ustidagi xarita qatlamlari va xarita koordinatalari bilan joylashtirilgan nuqtali bulutlar ishlaydi. Loyiha asosiy nuqtasi modelni koordinata boshiga yaqin saqlaydi, lekin uning xaritadagi joyisiz. |
| Devorlar va ustunlarni sathlar boʻyicha boʻlish | Yoqilgan, agar qavatlar boʻyicha miqdorlarni hisoblasangiz | Har bir qavatning qismi alohida element boʻladi. |

## Nima koʻrasiz

Model 3D da koʻrinadi, qavatlar loyihaning sathlaridan olinadi va loyiha maʼlumoti {{ui:Fayl}} panelida boʻladi. **Eksport qilingan manba** eksportchini koʻrsatadi.

## Eksport nimani saqlaydi va nimani saqlamaydi

- **Saqlanadi**: geometriya, qavatlar, element turlari, nomlar, tiplar, koʻp parametrlar (xossalar toʻplami sifatida), soʻralganda asosiy miqdorlar, xonalar boʻshliq sifatida va umumiy koordinatalar bilan xaritadagi joy.
- **Saqlanmaydi**: koʻrinishlar, varaqlar, izohlar, tahrirlanadigan oilalar sifatida oilalar, ishchi toʻplamlar va loyiha variantlari. IFC fayli loyiha emas, balki model elementlarining suratidir. Varaqlar uchun DWG ni eksport qiling va 2D koʻrinishda oching.

## Keng tarqalgan xatolar

- **BimCraft da xossalar yoʻq.** Yuqoridagi xossalar toʻplami opsiyalarini yoqing va qayta eksport qiling.
- **Xonalar yoʻq.** Xonalar opsiyasini yoqing, keyin {{ui:Boʻshliqlar}} ni bosing.
- **`.ifczip` sifatida saqlash.** Oddiy IFC tanlang yoki `.ifczip` ni arxivdan chiqaring.
- **Xaritadagi joy yoʻq.** Umumiy koordinatalar bilan eksport qiling; loyihaning soʻrov nuqtasi oʻrnatilganini tekshiring.
- **Tahrirlar qaytib kelishini kutish.** BimCraft da saqlagan tahrirlaringiz loyiha fayliga emas, yangi IFC fayliga boradi.
