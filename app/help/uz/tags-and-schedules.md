---
title: Elementlarni teglash va teg boʻyicha jadval tuzish
summary: Oʻz teglaringizni belgilang (nomi, turi, ruxsat etilgan qiymatlar, qaysi sinflar uchun), koʻp elementlarni bir vaqtda teglang va ustunlari, filtrlari hamda guruhlari teglarni oʻqiydigan jadvallar tuzing. Teglar IFC faylida saqlanadi.
keywords: teglar, teg, teglash, maxsus xossalar, parametrlar, umumiy parametrlar, xossalar toʻplami, pset, jadval, filtr, guruhlash, pardozlash, yongʻinga chidamlilik, ommaviy tahrir, csv
from: 9cc7c90d
---

## Nima qilasiz

Teg siz oʻzingiz belgilaydigan xossa, masalan *Pardozlash* yoki *Yongʻinga chidamlilik*. Uni loyiha uchun bir marta belgilaysiz, koʻp elementlarga bir vaqtda oʻrnatasiz va BimCraft dagi har bir jadval uni oʻqiy oladi: bu yerdagi teglar jadvali, {{ui:Miqdorlar}}, Qidiruv, Xossa boʻyicha rang va [Modeldan hujjatlar](topic:documents-from-the-model).

## Qadamlar

1. IFC modelni oching yoki yangi bino boshlang.
2. Chap panelda, {{ui:Miqdorlar}} ostida {{ui:Teglar}} ni oching.
3. {{ui:Belgi qoʻshish}} ni bosing. Unga nom bering, turini tanlang, xohlasangiz ruxsat etilgan qiymatlarni (vergul bilan) va u uchun sinflarni kiriting (`IfcDoor`, `IfcWall` …). {{ui:Tegni qoʻshish}} ni bosing.
4. Modeldagi elementlarni tanlang (Qidiruv yordam beradi: barcha eshiklarni bir vaqtda tanlash mumkin).
5. {{ui:Tanlovni teglash}} ostida oʻrnatmoqchi boʻlgan har bir teg uchun qiymatni tanlang yoki kiriting, qolganlarini oʻz holicha qoldiring va {{ui:… ta tanlangan elementga qoʻllash}} ni bosing.
6. {{ui:Teglar jadvali}} ostida ustunlarni belgilang, filtrlar qoʻshing, {{ui:Guruhlash}} ni tanlang, soʻngra {{ui:CSV yuklab olish}} ni bosing.

## Nimani koʻrasiz

- Har bir saqlangan taʼrif va har bir teglash uchun oʻzgarishlar roʻyxatida qadam; {{ui:Ortga qaytarish}} ularni bekor qiladi.
- Teg qaratilmagan sinf elementlari oʻsha teg boʻyicha chiqarib tashlanadi va holat qatori nechtasi ekanini koʻrsatadi.
- Teglar jadvali har bir element uchun bitta qatorni koʻrsatadi, tanlangan maydon boʻyicha guruhlangan; elementni tanlash uchun qatorning birinchi katakchasini bosing.
- {{ui:Miqdorlar}} teglarni `CadCraft_Tags` ostida koʻrsatadi, shuning uchun u yerda teg boʻyicha maydonlar yoki sonlar yigʻindisini chiqarishingiz mumkin.

## Turlar

Turlar oila parametrlari bilan bir xil roʻyxat: Uzunlik (millimetrda), Burchak (gradusda), Son, Butun son, Ha / Yoʻq, Qalam (1–16), Matn, Material va Toʻldirish. Turiga mos kelmaydigan yoki ruxsat etilgan qiymatlardan biri boʻlmagan qiymat xabar bilan rad etiladi va hech narsa oʻzgarmaydi.

## Muhim maʼlumotlar

- Hamma narsa oddiy IFC, shuning uchun boshqa dasturlar qiymatlarni oʻqiy oladi: taʼriflar loyihadagi `CadCraft_TagDefs` xossalar toʻplamida, qiymatlar esa har bir elementdagi `CadCraft_Tags` xossalar toʻplamida (har bir teg uchun bitta xossa). Uzunliklar fayldagi uzunlik birligida yoziladi.
- `IfcWall` sinfi tegning sinflarida standart-case va elementli devorlarni ham oladi.
- Tegni qayta nomlash bir xil qadamda uning qiymatlarini har bir elementda ham qayta nomlaydi. Tegni olib tashlash faqat uning taʼrifini oʻchiradi: allaqachon oʻrnatilgan qiymatlar elementlarda oddiy xossa sifatida qoladi. Ularni olib tashlash uchun avval {{ui:Tozalash}} ni tanlab, ularni tozalang.
- CadCraft drafting ilovasidagi teglar (blok atributlari) hali amalga oshirilmagan.
