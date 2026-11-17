---
title: Rivojlanish darajasi (LOD) va bosqich tekshiruvlari
summary: Elementlarga rivojlanish darajasini bering, uning qayerdan olinganini ko'ring, modelni bosqich talab qilgan LOD bo'yicha tekshiring va yo'q teglar hamda nomsiz xonalarni tuzating. Har bir tekshiruv faqat maslahat beradi; hech narsa bloklanmaydi.
keywords: lod, rivojlanish darajasi, lod 100, lod 200, lod 300, lod 350, lod 400, lod 500, bosqich, bosqichlar jadvali, model tekshiruvi, etishmayotgan teglar, nomsiz xonalar, erta umumiy, ifc sinfi, tasniflash
from: 2091c79b
---

## Nima qilasiz

Har bir elementning qanchalik rivojlanganini belgilang, so'ngra butun modelni loyiha bosqichi talab qiladigan darajaga nisbatan tekshiring.

## Qadamlar

1. Elementni (yoki bir nechtasini) tanlang va {{ui:Properties}} ni oching. {{ui:Level of development}} ni toping.
2. Ro'yxatdan darajani tanlang. Har bir daraja nimani anglatishi bilan nomlanadi va o'zidan pastdagilarni o'z ichiga oladi. Bitta bekor qilish amali butun tanlovni qamraydi.
3. Daraja qayerdan olinganini o'qing: shu element, uning turi yoki dala tekshiruvi bilan tasdiqlangan belgi.
4. Modelni tekshirish uchun chapda {{ui:Model checks}} ni, so'ng {{ui:LOD milestones}} ni oching. Bosqichni va jadvalni tanlang (boshlang'ich jadval yoki {{ui:Load}} yordamida o'zingizning CSV yoki JSON faylingiz).
5. {{ui:Check the model}} ni bosing. Jami natijalar va jadvalning har bir qatori qaysi qism darajasiga yetganini va yetmaganini ko'rsatadi; topilmalar ham Muammolar ro'yxatida chiqadi.
6. {{ui:Missing tags and unnamed rooms}} ostida {{ui:Find them}} ni bosing, xohlasangiz takliflarni tahrirlang va {{ui:Apply}} ni bosing.

## Nimani ko'rasiz

- Elementda tanlagan darajangiz, yonida IFC sinfi va tasniflash kodlari.
- Bosqich uchun jami va qatorlar. Jadval daraja ma'nosini hech qachon o'zgartirmaydi: masshtab qat'iy, jadval esa faqat bosqichga qaysi daraja kerakligini ko'rsatadi.
- "Erta umumiy saqlash": erta bosqichda elementlarni umumiy saqlash bo'yicha maslahat. Bu faqat maslahat.

## Bilish foydali

- Bu yerda hech narsa sizni to'xtatmaydi. Bosqich talab qilganidan past darajadagi model ro'yxatga olinadi, rad etilmaydi.
- Darajaning uch qismini (geometriya, axborot, hujjatlar) alohida belgilash mumkin; belgi bajarilganini, pastligini yoki ko'rsatilmaganini bildiradi.
