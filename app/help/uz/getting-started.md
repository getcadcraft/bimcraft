---
title: BimCraft bilan tanishish
summary: BimCraft hozir nima qila olishi, birinchi modelni qanday ochish, uni 3D da koʻrish, bitta qiymatni oʻzgartirish va nusxani saqlash.
keywords: boshlash, birinchi ishga tushirish, ochish, ifc, rvt, dwg, tezkor boshlash, kirish, koʻrish, bim
from: fc2dea19
---

BimCraft — CadCraft oilasining bino modeli ilovasi. Ushbu versiyada u bino fayllarini **ochadi, oʻqiydi va tekshiradi** hamda **IFC modellardagi maʼlumotlarni tahrirlaydi**. U hali yangi elementlarni chizmaydi va modellashtirmaydi. Uni model koʻrish va tekshirish vositasi deb tasavvur qiling, u ham IFC fayldagi nomlar, teglar va xossa qiymatlarini tuzatish imkonini beradi.

U nimalarni ochadi:

| Fayl | Nima olasiz |
|---|---|
| IFC (`.ifc`) | 3D da toʻliq model: aylantirish, qavatlar, element xossalari va nomlar hamda xossa qiymatlarini tahrirlash |
| Loyiha va oila fayllari (`.rvt`, `.rfa`, `.rte`, `.rft`) | Fayl kartochkasi: saqlangan nashr, loyiha maʼlumoti, oldindan koʻrish rasmi va bogʻlangan fayllar. 3D yoʻq. |
| DWG va DXF | 2D da chizma: model fazosi va har bir varaq, qatlamlar, bogʻlangan chizmalar, chop etish koʻrinishi va belgilangan ovqatlanish chizmalari uchun jihozlar jadvali |
| Loyiha jildi | Jilddagi har bir model hisoboti: zaxira nusxalar, bogʻlanishlar, shikastlangan nusxalar va qaysi fayldan boshlash kerakligi boʻyicha tavsiya |

Hammasi brauzeringizda, kompyuteringizda sodir boʻladi. **Hech narsa yuklanmaydi.** Batafsil maʼlumot uchun qarang [BimCraft ochadigan va saqlaydigan fayllar](topic:files).

## BimCraft ni ochish

1. BimCraft ni joriy brauzerda oching. Chrome, Edge, Firefox va Safari ishlaydi; [Brauzerlar, qurilmalar va xotira](topic:platforms) farqlarni koʻrsatadi.
2. "Bino modelini oching." yozuvi bor boʻsh ekran paydo boʻlishini kuting.

:::note
BimCraft brauzerda ishlaydi, shuningdek boshqa ilovalar bilan birga CadCraft Studio ichida, ish stolida ham. Bulutli saqlash hali mavjud emas: fayllarni kompyuteringizdan ochasiz va nusxalarni unga qaytarib saqlaysiz.
:::

## Birinchi modelingizni oching

Nima qilishini tezda koʻrishning eng oson yoʻli — IFC fayl.

1. Ekranning oʻrtasidagi {{ui:Choose a file}} tugmasini bosing.
2. {{pick:mac=Finder|windows=File Explorer|linux=fayl menejeringiz}} ichida `.ifc` faylni tanlang va tasdiqlang.
3. Holat satri "IFC dvigateli ishga tushirilmoqda…" deyishini, soʻng "Geometriya qurilmoqda" deyishini kuting.

Oʻrtada modelni 3D da, chapda {{ui:File}} paneli va {{ui:Storeys}} roʻyxatini, oʻngda esa boʻsh {{ui:Properties}} panelini koʻrasiz. Holat satri "Ochildi" va elementlar sonini koʻrsatib tugaydi.

:::tip
Faylni {{pick:mac=Finder|windows=File Explorer|linux=fayl menejeringiz}} dan toʻgʻridan-toʻgʻri sahifaga ham sudrab olib tashlashingiz mumkin. Sudrab borayotganda ekranda "Ochish uchun tashlang" yozuvi chiqadi.
:::

:::offline
IFC dvigateli birinchi marta IFC modelni ochganingizda saytdan yuklanadi, agar BimCraft oflayn foydalanish uchun saqlanmagan boʻlmasa. DWG va DXF chizmalar, loyiha fayllari va jildlarga hech narsa kerak emas: ularning oʻquvchilari ilova tarkibiga kiradi. Ilova panelidagi tugmada {{ui:Offline ready}} yozilgan boʻlsa, hamma narsa oflaynda ochiladi. Aks holda, IFC modellar siz ulanmaguningizcha ochilmaydi, agar bu yorliqda avval ochilmagan boʻlsa. Qarang [Onlayn va oflayn](topic:online-offline).
:::

:::online
Ulanishsiz joyga ketyapsizmi? Ilova panelidagi {{ui:Save for offline}} tugmasini bosing va {{ui:Offline ready}} chiqquncha kuting. Saqlangan nusxa (taxminan 11 MB) IFC dvigatelini oʻz ichiga oladi. Qarang [Oflayn ishlash](common:offline).
:::

## Atrofga qarang

:::mouse
1. Modelni aylantirish uchun sichqonchaning chap tugmasini bosib torting.
2. Kattalashtirish uchun gʻildirakni aylantiring.
3. Surish uchun sichqonchaning oʻng tugmasini bosib torting. Mac trekpadida {{key:Shift}} ni bosib turing va torting.
4. Modelning hammasini yana koʻrish uchun {{key:F}} ni bosing yoki {{ui:Fit}} ni bosing.
:::

:::touch
1. Bir barmoq bilan torting: model aylanadi.
2. Ikki barmoq bilan qisib kattalashtiring, ikki barmoqni birga surib siljiting.
3. Modelning hammasini yana koʻrish uchun {{ui:Fit}} ni bosing.
:::

## Bitta haqiqiy ishni bajaring: tegni tuzating

1. Modeldagi devor, eshik yoki istalgan elementni bosing. U koʻk rangga kiradi va uning xossalari oʻngda chiqadi.
2. {{ui:Properties}} panelida **Teg** yonidagi qiymatni bosing.
3. Yangi tegni kiriting va {{key:Enter}} ni bosing.
4. Chapda ochilgan {{ui:Changes}} boʻlimiga qarang: oʻzgarishingiz eski va yangi qiymat bilan roʻyxatda chiqadi.

## Nusxani saqlang

1. {{ui:Changes}} boʻlimidagi {{ui:Save as IFC}} tugmasini bosing yoki {{key:Mod+S}} ni bosing.
2. Yangi faylni yuklab olinganlar jildidan toping. U asl nomi bilan nomlanadi va unga " (edited)" qoʻshiladi, masalan `Clinic (edited).ifc`.

Asl faylingiz hech qachon oʻzgartirilmaydi. [IFC xossalarini oʻzgartirish va tahrirlangan nusxani saqlash](topic:edit-ifc-properties) tahrirlashni toʻliq tushuntiradi.

## Keyingi qadamlar

- [BimCraft ekrani](topic:workspace): har bir panelni nomi boʻyicha.
- [Boshqa BIM va chizma dasturlaridan oʻtish](topic:coming-from): agar Revitga odatlangan boʻlsangiz, nimasi boshqacha tuyulishi.
- [Butun loyiha jildini ochish](topic:open-project-folder): BimCraft ga loyiha jildini koʻrsating va fayllarni saralashni unga topshiring.
- [DWG yoki DXF chizmani koʻrish](topic:view-dwg): varaqlar, qatlamlar va chop etish koʻrinishi.
