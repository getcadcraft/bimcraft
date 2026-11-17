---
title: Elementlarni tekshirilgan yoki dalada tasdiqlangan deb belgilash
summary: PDF yoki skanerdan oʻqilgan element siz tekshirmaguningizcha tekshirilmagan hisoblanadi. Elementlarni tekshirilgan deb yoki kim, qachon va qanday oʻlchagani bilan dalada tasdiqlangan (LOD 500) deb belgilang, va qaysi biri qaysi ekanini koʻrsatadigan haqiqiy holatdagi modelni topshiring.
keywords: tekshirilmagan, tekshirilgan, tasdiqlangan, dalada tasdiqlangan, haqiqiy holat, lod 500, yakuniy topshirish, joyida oʻlchangan, lenta, lazer, skan, geodezik oʻlchash, mavjud bino, oʻzgartirish, tekshirilgan deb belgilash, tekshiruv, 7-bosqich
from: df35d908
---

## Nima qilasiz

Modelda biror narsani kimdir haqiqatan koʻrib chiqqanini kuzatib boring. Elementda uchta belgidan biri yoki hech biri boʻladi:

- **Tekshirilmagan**: dastur uni PDF, skanerlangan chizma, qayta chizilgan chizma yoki nuqtali bulut skanerdan tanigan. Hali hech kim tekshirmagan.
- **Tekshirilgan**: odam uni manbasi boʻlgan chizma bilan solishtirgan.
- **Dalada tasdiqlangan (LOD 500)**: odam uni joyida oʻlchagan. Kim, qachon va qanday ekani u bilan saqlanadi.
- **Belgi yoʻq**: odam chizgan. Model u haqida hech narsa daʼvo qilmaydi.

## Qadamlar

1. Bitta elementni yoki koʻpini tanlang (devorlar, eshiklar, derazalar, xonalar, istalgan element).
2. {{ui:Xossalar}} da {{ui:Tekshiruv}} ni oching.
3. Kim tekshirganini yoki oʻlchaganini kiriting. Sana bugungi, agar uni oʻzgartirmasangiz.
4. {{ui:Tekshirilgan deb belgilash}} ni bosing. Joyida oʻlchash uchun oʻlchash usulini tanlang (lenta oʻlchagich, lazerli masofa oʻlchagich, skan, geodezik oʻlchash) va {{ui:Dalada tasdiqlangan (LOD 500) deb belgilash}} ni bosing.
5. {{ui:Tekshirilmagan deb belgilash}} va {{ui:Belgini olib tashlash}} ortga qaytaradi. Har bir bosish butun tanlov uchun bitta ortga qaytariladigan qadam.

Tez belgilash uchun: {{ui:Asboblar}} › {{ui:Tekshirilgan deb belgilash}} (buyruq sifatida yozilganda: `MARKCHECKED`) tanlovni siz tomondan, bugun, tekshirilgan deb belgilaydi.

## Nimani koʻrishingiz kerak

- Rejada tekshirilmagan element chiziqli quti va "?" bilan; dalada tasdiqlangan element belgisi bilan. Yashirish uchun {{ui:Audit}} boʻlimidagi {{ui:Rejada tekshiruv belgilarini koʻrsatish}} belgisini olib tashlang.
- {{ui:Jadvallar}} › {{ui:Tekshiruv}} har bir belgilangan elementni uning darajasi, holati, kimligi, vaqti, usuli va manbasi bilan roʻyxatlaydi.
- Audit tekshirilmagan elementlar roʻyxatini chiqaradi va dalada tasdiqlangan elementni LOD 500 sifatida hisoblaydi. Qarang: [Modelni audit qilish](topic:audit-the-model).

## Skandan

Skan bilan modelni solishtirganingizda, {{ui:Mos elementlarni dalada tasdiqlangan deb belgilash}} skan koʻrgan, chegara ichida qurilgan deb topilgan har bir elementni "skan" usuli va izohda chegara bilan dalada tasdiqlangan deb belgilaydi. Qarang: [Skanni model bilan solishtirish](topic:compare-scan-with-model).

:::warning
Solishtirish har bir element qutisini skan nuqtalari bilan mos keltiradi. Bu geodezik oʻlchash emas. Uni faqat oʻzingiz ham koʻrib chiqqan elementlar uchun ishlating.
:::

## Haqiqiy holatdagi model va topshirish toʻplami

{{ui:Topshirish toʻplamini yaratish}} ni {{ui:Resurslar}} yorligʻida bosish haqiqiy holatdagi modelni zipga qoʻyadi, quyidagilar bilan:

- loyihada nechta element dalada tasdiqlangan, tekshirilgan, tekshirilmagan va belgilanmagan ekani haqida bayonot;
- `as-built/verified-elements.csv`: har bir element va xona holati, kim, qachon, qanday bilan;
- `as-built/as-built-drawings.pdf`: hozirgi chizmalar toʻplami;
- model chiqarilgan toʻplamlarga ega boʻlsa, chizmalar oʻzgarishlar jurnali.

Qarang: [Aktivlar va texnik xizmat](topic:assets-and-maintenance).

## IFC da qanday saqlanadi

Har bir belgilangan element `CadCraft_Verification` xossalar toʻplamini oladi: State, By, On, Method, Source, Note va LevelOfDevelopment (dalada tasdiqlangan boʻlganda `LOD 500`). Ular oddiy matn xossalari, shuning uchun boshqa dasturlar ularni roʻyxatlaydi, va Topish, xossa boʻyicha rang berish hamda teg jadvallari ulardan foydalana oladi. Haqiqiy holat statistikasi loyihadagi `CadCraft_AsBuilt` xossalar toʻplamidir. Bu toʻplamsiz element joyida oʻlchanmagan.

## Keyingisi

- [Devorlar rejalar toʻplamidan](topic:walls-from-plans)
- [Modelni audit qilish](topic:audit-the-model)
