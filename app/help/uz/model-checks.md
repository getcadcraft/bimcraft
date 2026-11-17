---
title: Modelni keng tarqalgan muammolar uchun tekshirish
summary: Kerakli xususiyati yoʻq elementlarni, ikki marta ishlatilgan GlobalId larni, hech qavatda turmagan elementlarni va bir-birining ustiga joylashgan nusxalarni toping.
keywords: tekshirish, model tekshiruvi, validatsiya, sifat, muammo, majburiy xususiyat, kerakli, dublikat, globalid, guid, qavat, ustma-ust, bir-birining ustida
from: 4d835513
---

## Nima qilasiz

Modelni boshqaga topshirishdan oldin koʻrib chiqing: jadvallarni, miqdorlarni va boshqa odamlarning dasturlarini buzadigan muammolarni.

## Qadamlar

1. IFC modelini oching.
2. Chap panelda {{ui:Model tekshiruvi}} ni oching.
3. {{ui:Majburiy xususiyatlar}} ostida qoida allaqachon bor (istalgan sinf, Name). Uning sinfini ({{ui:Istalgan sinf}} yoki boshqa) va xususiyatini oʻzgartiring, yoki boshqa qoida uchun {{ui:Xususiyat qoʻshish}} ni bosing; x belgisi bittasini olib tashlaydi. Element xususiyatga qiymat bermagan yoki qiymati boʻsh boʻlsa, qoidadan oʻtmaydi. Qoidalar barcha modellar uchun shu brauzerda saqlanadi.
4. {{ui:Tekshirishni ishga tushirish}} ni bosing.
5. Natijani bosing: oʻsha elementlar tanlanadi va ularga yaqinlashtiriladi.

## Nimani koʻrasiz

- **Majburiy xususiyat yoʻq**: har bir qoida boʻyicha unga qiymati yoʻq elementlar.
- **GlobalId ikki marta ishlatilgan**: bitta GlobalId ni ulashgan elementlar. Boshqa dasturlar ularni bitta element deb hisoblaydi.
- **Hech qavatda emas**: hech bir qavat oʻz ichiga olmaydigan shaklga ega elementlar.
- **Nusxalar bir-birining ustida**: bir xil sinf va turdagi, bir joyda bir xil shaklga ega elementlar; ular miqdorlarda ikki marta hisoblanadi.

Natijadagi har bir satr tugma: uni bosing, shu elementlarni tanlash va ularga yaqinlashtirish uchun. Tekshiruvning faqat birinchi 50 ta guruhi roʻyxatga olinadi. Xuddi shu topilmalar {{ui:Muammolar}} panelida ham chiqadi.

## Bilib oling

- Bir nechta model ochiq boʻlganda tekshiruvlar faol modelni tekshiradi. Qarang: [Bir nechta IFC modelni birga koʻrish](topic:several-models).
- Tahrirlashdan keyin tekshiruvlarni qayta ishga tushiring.
- {{ui:Muammolar}} panelida muammo matnidagi uzunliklar, maydonlar va hajmlar asboblar panelida tanlangan {{ui:Birliklar}} ga amal qiladi ("800 mm" eshik futlar va dyuymlarda 2'-7 1/2" deb koʻrinadi); birlikni oʻzgartirsangiz, panel matnni qayta yozadi.

## Keyingi

- [Modelni auditdan oʻtkazish: xonalar, teglar, LOD, toʻqnashuvlar va interfeyslar](topic:audit-the-model)
- [Elementlarni sinf, nom yoki xususiyat boʻyicha topish](topic:find)
- [Elementlarni oʻchirish, kesish, nusxalash va qoʻyish](topic:copy-paste)
