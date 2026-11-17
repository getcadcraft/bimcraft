---
title: Miqdorlarni qoʻshish, elementlarni roʻyxatga olish va boʻshliqlar jadvalini tuzish
summary: Elementlarni sanang va ularning uzunliklari, maydonlari, hajmlari yoki istalgan raqamli xossasini qoʻshing, istalgan xossa boʻyicha guruhlang; har bir elementni alohida qatorda roʻyxatga oling yoki boʻshliqlarni maydon va hajmlari bilan jadvalga kiriting. Har biri CSV sifatida yuklab olinadi.
keywords: miqdor, miqdorlar, hajmlarni hisoblash, yigʻindi, jadval, miqdorlar roʻyxati, boq, qto, csv, guruhlash, sanash, uzunlik, maydon, hajm, boʻshliqlar, xonalar, xonalar jadvali, maydonlar jadvali, element roʻyxati
from: e2e7210c
---

## Nima qilasiz

Modeldan yigʻindilarni oling: qavat boʻyicha devor uzunliklari, tur boʻyicha eshiklar soni, material boʻyicha plita hajmi, har bir zonaning narxi.

## Qadamlar

1. IFC modelni oching.
2. Chap panelda {{ui:Miqdorlar yigʻindisi}} ni oching.
3. {{ui:Sanash}} da {{ui:Har bir element}} yoki faqat tanlab olinganlarni tanlang.
4. {{ui:Guruhlash}} ostida xossani tanlang, masalan {{ui:Sinf}}. Yana boʻlish uchun {{ui:Guruh qoʻshish}} ni bosing, ko'pi bilan uchtagacha, masalan {{ui:Qavat}} boʻyicha.
5. {{ui:Qoʻshish}} ostida yigʻish uchun raqamlarni belgilang. Modelning miqdor toʻplamlari boshidanoq belgilangan boʻladi.
6. Jadvalni elektron jadvalda ochish uchun {{ui:CSV yuklab olish}} ni bosing.

## Nimani koʻrasiz

- Har bir guruh uchun qator: nechta elementi bor va har bir yigʻindi, hamda yigʻindi qatori.
- Qiymatsiz elementlar sanaladi, lekin hech narsa qoʻshmaydi. Shunday boʻlganda CSV yigʻindi yonida "chetda qolgan" ustunini qoʻshadi, shunda nechta ekanligini koʻrasiz.
- Raqamlar faylning oʻz birliklarida, fayl ularni qanday saqlasa shunday; uzunliklar koʻpincha millimetrda.

## Har bir element bir qatorda yoki boʻshliqlar

{{ui:Koʻrsatish}} ni oʻzgartiring:

- **Har bir element bir qatorda**: har bir element oʻz qatorida, {{ui:Ustunlar}} ostidagi xossalar va {{ui:Qoʻshish}} ostidagi raqamlar bilan. CSV har bir elementning GlobalId sidan boshlanadi. Qatordagi birinchi qiymatni bosib, shu elementni tanlang.
- **Boʻshliqlar**: har bir xona oʻz raqami, nomi, qavati, maydoni va hajmi bilan, hamda ularning yigʻindilari. Maydonlar va hajmlar boʻshliqning miqdorlaridan fayl qanday koʻrsatsa shundan olinadi. Fayl ularga ega boʻlmasa, ular boʻshliqning shaklidan m² va m³ da oʻlchanadi va kursivda koʻrsatiladi; CSV qaysi biri ekanligini aytadi.

## Keyingi

- [Elementlarni sinf, nom yoki xossa boʻyicha topish](topic:find)
- [Elementlarni xossa boʻyicha rangga boʻyash](topic:color-by-property)

## Infratuzilma (IFC 4.3)

Koʻrinishlar roʻyxatidan **Infratuzilma (IFC 4.3)** ni tanlang, shunda yoʻllar, temir yoʻllar, koʻprik va dengiz inshootlari sinf va tur boʻyicha yigʻilgan holda, fayl oʻzi koʻrsatgan uzunlik, maydon va hajm bilan koʻrinadi. Fayl koʻrsatmagan miqdor boʻsh qoldiriladi, hech qachon hisoblab chiqilmaydi. **Infratuzilma miqdorlarini TakeoffCraftga yuborish** TakeoffCraft tur bilan belgilangan miqdorlar sifatida ochadigan `.quantities.json` faylni saqlaydi.
