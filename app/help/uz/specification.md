---
title: Modeldan spetsifikatsiya yozish
summary: Binoda haqiqatda mavjud har bir devor, eshik, deraza, pol va pardozlash turi uchun bitta spetsifikatsiya boʻlimi. Uning faktlari modeldan olinadi, matnni esa siz yozasiz, natija PDF yoki Word hujjat boʻladi.
keywords: spetsifikatsiya, spec, ishchi chizmalar, 5-bosqich, qurilish hujjatlari, boʻlim, devor turi, eshik turi, deraza turi, pardozlash, tasniflash, uniclass, omniclass, masterformat, hujjat, pdf, word, docx, jadvallar
from: a6acc6d4
---

## Nima qilasiz

Modelga mos spetsifikatsiya oling: binoda haqiqatda mavjud har bir tur uchun alohida boʻlim boʻladi, uning tuzilishi va miqdorlari modeldan olinadi, shuningdek siz u uchun yozgan matn bilan birga.

## Qadamlar

1. {{ui:Chizish}} ni yoqing, chap panelda **Jadvallar** ni oching va **Spetsifikatsiya** tugmasini bosing.
2. Dialog oynasida har bir devor turi, eshik turi, deraza turi, pol va xona pardozlash uchun bittadan boʻlim chiqadi. Har bir sarlavha ostida uning **faktlari** modeldan oʻqilgan holda koʻrsatiladi: qalinligi, qatlamlar birma-bir, ishlab chiqish darajasi, oʻlchamlari, soni va miqdori. Elementlari tasniflash kodiga ega boʻlgan boʻlim sarlavhasida shu kod koʻrinadi.
3. Boʻlim ostidagi katakchaga spetsifikatsiya matnini yozing. **Elementlarini tanlash** boʻlim nimaga tegishli ekanini koʻrsatadi.
4. **Saqlash** ni bosing. Bu {{ui:Ortga qaytarish}} da bitta qadam boʻladi va matn bino faylida saqlanadi.
5. **Modeldan hujjatlar** ni oching, **Spetsifikatsiya** shablonini tanlang va **Oldindan koʻrish** ni bosing, soʻngra uni PDF, Word yoki Markdown sifatida saqlang. Qarang: [Modeldan hujjatlar](topic:documents-from-the-model).

## Ishchi chizma jadvallari hujjat sifatida

**Ishchi chizma jadvallari** shabloni eshik, deraza va pardozlash jadvallarini modeldan toʻgʻridan-toʻgʻri, ofisingiz maketida chop etadi. Oʻz shablonuzda `{{schedule doors}}`, `{{schedule windows}}`, `{{schedule roomfinishes}}`, `{{schedule finishtotals}}` yoki saqlangan sozlamaning nomini yozing, masalan `{{schedule Door schedule by floor}}`. `{{specification}}` spetsifikatsiyani chop etadi.

## Muhim maʼlumotlar

- Faktlar modelniki. Model oʻzgarganda ular ham oʻzgaradi; sizning matningiz oʻzgarmaydi.
- BimCraft hech qanday standart bandini va ishlab chiqaruvchi matnini yozmaydi. Matni boʻlmagan boʻlim "No specification text written yet." deb chop etiladi.
- Modeldan olib tashlangan tur uchun yozilgan matn saqlanadi va "Text for types no longer in the model" ostida roʻyxatlanadi.
- Umumiy turni aniq yigʻma uchun oʻzgartirish uchun qarang: [Devor asboblari](topic:wall-tools) (Turni almashtirish).
