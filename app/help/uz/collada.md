---
title: Modelni Collada yoki Google Earth uchun eksport qilish
summary: Ochiq IFC modellarni Blender va boshqa 3D dasturlar uchun Collada (.dae) fayli sifatida yoki xaritadagi oʻz joyiga joylashtirilgan Google Earth paketi (.kmz) sifatida yozing.
keywords: collada, dae, kmz, kml, google earth, blender, eksport, geolokatsiya, georeferens, kenglik, uzunlik, joylashuv, 3d dasturlar
from: 81cfec09
---

{{ui:Collada}} asboblar panelida (yoki menyu va lenta uslublaridagi Fayl menyusida {{ui:Collada (.dae, .kmz) eksport qilish…}}) ochiq boʻlgan narsani Collada 1.4.1 sifatida yozadi: koʻrinib turgan har bir model, bogʻlangan modellar esa siz ularni joylashtirgan joyda.

## Eksport

1. {{ui:Collada}} ni tanlang.
2. Formatni tanlang:
   - {{ui:Collada file (.dae), for Blender and other 3D programs}}.
   - {{ui:Google Earth package (.kmz): the model placed where it is on the map}}. Faqat model joylashuvga ega boʻlganda taklif qilinadi.
3. Parametrlarni tanlang, keyin {{ui:Eksport}} ni bosing. Fayl yuklab olinadi, holat satrida esa faylga nechta element kirganligi koʻrsatiladi.

| Parametr | Nima qiladi |
|---|---|
| {{ui:Write the location into the file}} | .dae ga faylning boshlangʻich nuqtasining kenglik, uzunlik, balandlik va yoʻnalishini qoʻshadi |
| {{ui:Height}} | {{ui:On the ground: the model’s level 0 sits on the terrain}} yoki {{ui:The model’s own height above sea level}} |
| {{ui:Include rooms and spaces}} | Boʻshliqlar ham kiritiladi (odatda chiqarib tashlanadi) |
| {{ui:Include hidden elements}} | Siz yashirgan elementlar ham yoziladi (odatda faqat koʻrinib turgani yoziladi) |

## Faylda nima bor

| Modelda | Collada faylida |
|---|---|
| Bino, qavatlar | Ichma-ich tugunlar, qavatlar balandlik boʻyicha tartibda; hech bir qavatga tegishli boʻlmagan elementlar "Unplaced" ostida |
| Har bir element | Oʻz mesh’i bilan bitta tugun, modeldagidek nomlangan (uning nomi, boʻlmasa sinfi va tegi) |
| Sinf, GlobalId, oldindan belgilangan tur | Tugunning qoʻshimcha maʼlumotlarida (profile IFC), aniq nomi bilan (profile ModelCraft) |
| Ranglar | Shaffoflik bilan materiallar |
| Birliklar va oʻqlar | Metrlar, Z yuqoriga. Oldingi modelning 0-darajasi balandlik 0 da |

Model koordinatalar boshi yaqinida turadi, shuning uchun bir aniqlikdagi dasturlar uni titrashsiz koʻrsatadi. ModelCraft oʻz Collada fayllarini shu yozuvchi bilan yozadi va bu fayllarni elementlar nomlari bilan ochadi.

## Joylashuv qayerdan olinadi

Oldingi model joylashuvni beradi, xuddi {{ui:Oʻlchash}} nuqtaning kenglik va uzunligini hisoblagani kabi:

- Xarita konvertatsiyasi (IFC4 IfcMapConversion yoki IFC2X3 xossalar toʻplamlari) modelning koordinata tizimi orqali. Siz modelga tanlagan tizim fayl nomlagan tizimdan ustun turadi.
- Aks holda, obyektning kenglik va uzunligi (taxminiy: obyekt doirasida yetarli).

Yoʻnalish taxmin qilinmay, oʻlchanadi: xaritaning aylanishi, haqiqiy shimol va xaritaning yaqinlashishi hisobga olinadi. Modelga joylashuv berish uchun {{ui:Oʻlchash}} boʻlimidagi {{ui:Xarita boshlangʻichi…}} dan foydalaning.

## Boshqa dasturlarda

- **Google Earth** .kmz ni oʻqiydi: model joylashuvda, shimolga qaratilgan holda koʻrinadi. Oddiy .dae da Google Earth joylashuvni oʻqiydigan joy yoʻq; .kmz dan foydalaning.
- **Blender** (4.x va undan oldingi): File, Import, Collada (.dae). Har bir element oʻz materiali bilan alohida obyekt sifatida kiradi. Joylashuv faylning qoʻshimcha maʼlumotlarida saqlanadi, Blender uni oʻqimaydi. Blender 5.0 oʻrnatilgan Collada importyorini olib tashladi; u holda {{ui:USD}} yoki glTF eksportidan foydalaning, yoki .dae ni Blender 4.5 da oching va .blend sifatida saqlang.

Bizning testlarimiz har bir faylni Collada 1.4.1 sxemasi bilan tekshiradi va uni mustaqil Collada oʻquvchisi bilan qayta oʻqiydi. Ular faylni Blender yoki Google Earth da ochmagan.
