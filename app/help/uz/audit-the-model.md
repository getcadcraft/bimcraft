---
title: Modelni auditdan oʻtkazish: xonalar, belgilar, LOD, toʻqnashuvlar va interfeyslar
summary: Nomsiz xonalar, yetishmayotgan belgilar, loyiha bosqichi talab qiladigan rivojlanish darajasidan past elementlar, intizomlar orasidagi toʻqnashuvlar va LOD 350 interfeyslari uchun tayyor tekshiruvlarni bajaring. Faqat maslahat: hech narsa bloklanmaydi.
keywords: audit, tekshiruv, nomsiz xona, yetishmayotgan belgi, belgi, lod, rivojlanish darajasi, bosqich, toʻqnashuv, intizom, muvofiqlashtirish, interfeys, lod 350, teshik, peremichka, tirgak, quvur, havo kanali, muammolar, tekshiruv hisoboti, maslahat
from: cc83a14d
---

## Nima qilasiz

Chiqarishdan oldin butun modelni bir martada koʻrib chiqing. Audit tayyor qoidalar toʻplamini ishga tushiradi va topilganlarni {{ui:Muammolar}} roʻyxatiga maslahat sifatida joylaydi. Hech narsa bloklanmaydi: topilmani tuzatasiz yoki sababi bilan qabul qilasiz, boshqa har qanday muammo kabi.

## Qadamlar

1. Chap panelda {{ui:Model tekshiruvi}} › {{ui:Audit}} ni oching yoki {{ui:Tools}} › {{ui:Audit the model…}} (yoziladigan buyruq: `AUDIT`).
2. {{ui:Loyiha bosqichi}} ni tanlang. Bu chizma tafsilotlaridagi bosqich bilan bir xil.
3. Ishga tushiriladigan qoidalar toʻplamlarini belgilang.
4. {{ui:Auditni ishga tushirish}} ni bosing.
5. Har bir qoidalar toʻplami uchun qatorni oʻqing, soʻng {{ui:Muammolar roʻyxatini ochish}} ni bosing. Topilmani bosish uning elementini tanlaydi.
6. {{ui:Tekshiruv hisoboti}} hisobotni yuklab oladi: har bir topilma, kim nimani va nima uchun qabul qilgani va ishga tushgan qoidalar toʻplamlari.

## Qoidalar toʻplamlari

- **Nomsiz xonalar**: nomi yoʻq yoki hali dastur nomlagan nom bilan ("Room 3") atalgan xona.
- **Yetishmayotgan belgilar**: belgisi yoʻq eshik yoki deraza, raqami yoʻq xona, belgisi yoʻq elektr qurilmasi.
- **Bosqich LOD dan past elementlar**: LOD si bosqich talab qilganidan past boʻlgan har bir devor, pol, shift, tom, eshik va deraza. Element oʻz turining LOD belgisini oʻqiydi; dalada tasdiqlangan element LOD 500 hisoblanadi. Belgisi yoʻq elementlar bitta izohda sanab oʻtiladi, chunki ularni tekshirib boʻlmaydi.
- **Intizomlar orasidagi toʻqnashuvlar**: ikki intizom elementlari (arxitektura, konstruksiya, mexanika, santexnika, elektr; IFC sinfi boʻyicha), bir-biriga kirib ketgan. Devorlariga tayangan tom hisobga olinmaydi.
- **LOD 350 interfeyslari**: har bir eshik va deraza devorining teshigida turadi, teshik devor ichiga sigʻadi, ikki teshik bir-birini kesmaydi, chegaradan kengroq teshikda peremichka yoki tirgak bor (u ustidagi element yoki eshik/deraza ustidagi izoh), va devor yoki plitani kesib oʻtgan quvur, havo kanali yoki kabel lotogi shu yerda teshikka ega. Topilmalar intizomlar juftligi boʻyicha sanaladi.
- **Hech kim tekshirmagan tanib olingan elementlar**: PDF, skaner yoki chizmadan oʻqilgan, hali tasdiqlanmagan devorlar, eshiklar, derazalar va xonalar. Qarang: [Elementlarni tekshirilgan yoki dalada tasdiqlangan deb belgilash](topic:verification).

## Har bir bosqich talab qiladigan LOD

Jadvalni koʻrish yoki oʻzgartirish uchun {{ui:Har bir bosqich talab qiladigan LOD}} ni oching.

:::note
Jadval va peremichka kengligi CadCraft ning boshlangʻich qiymatlari. Ular standartdan olinmagan: loyiha har bir bosqich uchun LOD ni oʻzining BIM ijro rejasida belgilaydi. Ularni oʻzingiznikiga moslang. Idora jadvalni hamma uchun Sozlamalar › Default Policies › Audit da belgilashi mumkin; Audit boʻlimidagi oʻzgarish shu kompyuterda saqlanadi.
:::

## Bilish foydali

- Peremichkani modellashtirish oʻrniga izoh qoldirish mumkin: eshik yoki derazani tanlang va Xususiyatlar da {{ui:Tekshiruv}} ostidagi {{ui:Peremichka yoki tirgak izohi}} ni toʻldiring.
- Haqiqiy teshikdan oʻtgan quvur hech qanday yuzani kesib oʻtmaydi va xabar berilmaydi. Devor orqali toʻgʻridan-toʻgʻri modellashtirilgan quvur esa xabar beriladi.
- Toʻqnashuv tekshiruvi juda katta modelda bir necha soniyadan keyin toʻxtaydi va buni aytadi. Tanlangan ikki toʻplamni toʻliq tekshirish uchun [Elementlar orasidagi toʻqnashuvlarni topish](topic:clash-check) dan foydalaning.
- Modelni oʻzgartirganingizdan keyin auditni qayta ishga tushiring. Qabul qilingan topilmalar raqamlari oʻzgarmasa, qabul qilingan boʻlib qoladi.
- U modelni oʻqiydi. Masʼul odamlarning muvofiqlashtirish koʻrib chiqishi oʻrnini bosmaydi.

## Keyingi

- [Modelni keng tarqalgan muammolar uchun tekshirish](topic:model-checks)
- [Elementlar orasidagi toʻqnashuvlarni topish](topic:clash-check)
- [Elementlarni tekshirilgan yoki dalada tasdiqlangan deb belgilash](topic:verification)
