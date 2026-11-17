---
title: Elementlarni xossa boʻyicha ranglash
summary: Har bir elementni bitta xossaning qiymati boʻyicha boʻyang, masalan sinfi, turi, qavati, materiali, yongʻinga chidamlilik darajasi yoki narxi; legendani oʻqing, qiymatni bosib faqat shu elementlarni koʻrsating va ranglarni boshqa modellarda ishlatish uchun sxema sifatida saqlang.
keywords: rang, ranglash, rang boʻyicha, legenda, aqlli koʻrinish, koʻrinish, xossa, turi, material, yongʻinga chidamlilik, filtr, ajratish, mavzu, qiymatlar, sxema, rang sxemasi, ranglarni saqlash, qayta ishlatish, jamoa, json, namuna rangi
from: f081d343
---

## Nima qilasiz

Xossa modelda qanday taqsimlanganini bir qarashda koʻring: qaysi devorlar tashqi, qayerda qaysi materiallar ishlatilgan, qaysi elementlarda yongʻinga chidamlilik darajasi yoʻq. Har bir element oʻz qiymatining rangini oladi, legenda esa har bir rang nimani anglatishini va nechta element shu rangga ega ekanini aytadi.

## Qadamlar

1. IFC modelni oching.
2. Oʻngdagi {{ui:Rang}} yorligʻini bosing.
3. Roʻyxatdan xossani tanlang. Birinchilari har bir elementga tegishli ({{ui:Sinf}}, {{ui:Turi}}, {{ui:Qavat}}, {{ui:Material}}, {{ui:Nom}}…); qolganlari modelning xossalar va miqdorlar toʻplamlaridan, toʻplam nomi ostida keladi. Har biridan keyingi raqam — shu xossaga ega elementlar soni.
4. Legendani oʻqing: rang, qiymat va shu rangga ega elementlar soni.
5. Faqat shu elementlarni koʻrsatish uchun qiymatni bosing. Yana qiymatlar qoʻshish uchun {{key:Mod}} ni ushlab turib bosing. Hammasini qayta koʻrsatish uchun {{key:Shift+H}} ni bosing.
6. Modelning oʻz ranglariga qaytish uchun {{ui:Oʻchiq}} ni bosing.

## Nimani koʻrasiz

- Yetti tagacha qiymatning har biri oʻz rangiga ega, eng keng tarqalgani birinchi. Undan koʻp qiymatlar bitta kulrang rangni baham koʻradi va **boshqa qiymatlar** deb roʻyxatga olinadi.
- Turli qiymatlari koʻp boʻlgan son oltita teng oraliqqa boʻlinadi, pastdan (kichik) yuqorigacha (katta) och rangdan toʻq rangga.
- Xossasi boʻlmagan elementlar oʻchroq kulrang boʻladi va **Qiymat yoʻq** deb roʻyxatga olinadi, shunda rangli elementlar ajralib turadi.
- Ranglar Qogʻoz va Model bilan oʻzgaradi va model tahrirlanayotganda ham saqlanadi.
- Tur xossasi shu turdagi har bir element uchun amal qiladi; element oʻsha xossa uchun oʻz qiymatiga ega boʻlsa, oʻz qiymati ustun turadi.

## Ranglarni oʻzgartirish va sxema sifatida saqlash

- Legendadagi qiymat namunasini bosing va unga boshqa rang tanlang. Model darhol qayta boʻyaladi.
- {{ui:Sxemani saqlash}} ranglarni xossa nomi bilan nomlangan kichik `.json` faylga yuklab oladi, masalan `Class colors.json`.
- Boshqa modelda yoki jamoadoshingizning kompyuterida {{ui:Sxemani ochish…}} ni bosing va shu faylni tanlang. Sxemadagi har bir qiymat oʻz rangini oladi, shuning uchun bir xil yongʻinga chidamlilik darajasi yoki tizim har bir modelda bir xil rangda boʻladi.
- Sxemada boʻlmagan qiymat kulrang boʻyaladi va "sxemada yoʻq" deb roʻyxatga olinadi; sxemadagi, lekin bu modelda boʻlmagan qiymatlar 0 bilan roʻyxatda qoladi, shunda butun sxemani koʻrasiz.
- Sxema ikkala mavzuda ham ranglarini saqlaydi. Roʻyxatdan boshqa xossani tanlash avtomatik ranglardan boshlanadi.

## Odatiy xatolar

- **"Bu modelda … qiymatlari yoʻq."** Sxema modelda boʻlmagan xossa uchun saqlangan (masalan, boshqa xossa toʻplami nomi). Shu turdagi model uchun yaratilgan sxemani oching yoki roʻyxatdan xossani tanlang.

- **Xossa roʻyxatda yoʻq.** Modelda shakli bor hech bir element uni egallamagan. Qavatlar va boʻshliqlarning oʻz xossalari roʻyxatga kiritilmagan.
- **Hammasi bir xil rangda.** Har bir element bir xil qiymatga ega yoki hech biriga ega emas: legendadagi sonlarga qarang.

## Keyingi

- [Elementlarni yashirish, ajratish va orqali koʻrish](topic:hide-and-isolate)
- [Model daraxti yordamida yoʻlingizni toping](topic:model-tree)
