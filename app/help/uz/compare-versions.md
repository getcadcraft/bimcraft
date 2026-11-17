---
title: Model ikki versiyasini solishtirish
summary: Bir xil IFC modelning ikki versiyasini oching va qaysi elementlar qoʻshilgani, olib tashlangani va oʻzgarganini koʻring — GlobalId boʻyicha moslashtirilgan, har bir oʻzgarish CSV da.
keywords: solishtirish, farq, versiyalar, revizya, oʻzgarishlar, oʻzgargan, qoʻshilgan, olib tashlangan, koʻchirilgan, globalid, guid, nima oʻzgargan
from: cfca6971
---

## Nima qilasiz

Sizga yuborilgan versiya bilan siz bilgan model orasida nima oʻzgarganini koʻring: qaysi elementlar yangi, qaysilari yoʻq, qaysilari koʻchgan yoki yangi xossa qiymatlarini olgan.

## Qadamlar

1. Yangi versiyani oching, keyin {{ui:Model qoʻshish…}} ni bosing va eskisini tanlang. Qarang: [Bir nechta IFC modelni birga koʻrish](topic:several-models).
2. {{ui:Modellar}} ichida {{ui:Versiyalarni solishtirish}} ni oching.
3. {{ui:Eski versiya}} va {{ui:Yangi versiya}} ni tanlang.
4. {{ui:Solishtirish}} ni bosing.
5. Elementni tanlash va uning xossalarini koʻrish uchun roʻyxatdagi elementni bosing. Har bir oʻzgarishni xossama-xossa koʻrish uchun {{ui:CSV yuklab olish}} ni bosing.
6. Oddiy koʻrinishga qaytish uchun {{ui:Tozalash}} ni bosing.

## Nimani koʻrasiz

- **Qoʻshilgan** elementlar koʻk rangda, yangi versiyadan.
- **Olib tashlangan** elementlar qizil rangda, eski versiyadan.
- **Oʻzgargan** elementlar jigarrang-sariq rangda, yangi versiyadan; har biri nima oʻzgarganini aytadi: xossalar, masofa bilan koʻchish yoki yangi shakl.
- Bir xil boʻlgan hamma narsa shaffof koʻrinadi.

## Yaxshi bilish

- Elementlar GlobalId orqali moslashtiriladi. Har bir eksportda elementlarga yangi GlobalId beradigan dastur har bir elementni olib tashlangan va qayta qoʻshilgan deb koʻrsatadi.
- Joylashuvlar modellar sahnada turgan joyda solishtiriladi. Agar bir versiya ataylab koʻchirilgan boʻlsa, avval {{ui:Modellar}} ichidagi {{ui:Siljitish}} bilan ularni tekislang.
- Bitta modelda ikki marta ishlatilgan GlobalId solishtirishdan chiqariladi. [Modelni odatiy muammolar uchun tekshirish](topic:model-checks) ularni topadi.

## Keyingi

- [Muammolar va BCF fayllari](topic:issues-bcf)
- [Xossa boʻyicha miqdorlarni jamlash](topic:quantity-totals)
