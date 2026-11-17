---
title: Hudud yer yuzasi, bino platformasi va qoplama
summary: Yerni geodezik nuqtalar, konturlar, LAS / LAZ skanerlash, GeoTIFF, LandXML sirt (CivilCraftʼniki) yoki bir nechta nuqtaviy balandliklardan modelga kiriting; uy bino platformasini qiyaliklari va kesish / toʻldirish bilan kiriting; haydovchi yoʻllari, yoʻlaklar va patiolarni ustiga joylashtiring; uni CivilCraftʼga LandXML sifatida uzating.
keywords: relyef, yer, hudud, topografiya, geodezik oʻlchash, nuqtalar, PNEZD, konturlar, LAS, LAZ, LiDAR, GeoTIFF, DEM, balandlik, nuqtaviy balandlik, nishab, vertikal rejalashtirish, platforma, bino platformasi, kesish, toʻldirish, yer ishlari, chiqish chizigʻi, qiyalik, haydovchi yoʻli, yoʻlak, patio, qoplama, LandXML, CivilCraft
from: 208298d6
---

## Nima qilasiz

Uyni oʻz hududiga joylashtiring. Yer modelning bir qismiga aylanadi: 3D da koʻrsatiladi, kesimlar va koʻrinishlarda kesiladi, rejada konturlar bilan. Uy ostida unga bino platformasi kesib qoʻyiladi, haydovchi yoʻllari va yoʻlaklar uni kuzatadi, poydevorlar esa u bilan birga pastga tushadi.

## Yerni kiritish

1. {{ui:Yigʻilish}} ni oching va {{ui:Relyef}} ni tanlang.
2. Yoki:
   - **Geodezik oʻlchash faylini ochish…**: geodezik nuqtalar (PNEZD, PENZD yoki oddiy easting, northing, balandlik; vergul, tabulyatsiya yoki boʻshliq bilan ajratilgan), DXF yoki DWG dagi konturlar (oʻz balandligidagi polichiziqlar, 3D polichiziqlar), LAS yoki LAZ skanerlash (yer nuqtalari saqlanadi, har bir kvadrat metrga taxminan bittagacha siyraklashtiriladi), GeoTIFF yoki ASCII balandlik toʻri, yoki CivilCraft eksport qiladigan **LandXML** sirt (uning oʻz nuqtalari va uchburchaklari saqlanadi; fayl bir nechta sirt saqlasa, BimCraft qaysi biri yer ekanini soʻraydi; uning birliklari fayldan olinadi). Avval fayl birliklarini tanlang (LandXML oʻzinikini koʻrsatadi).
   - Yoki **Nuqtaviy balandlik** kiriting (bu qavat polidan, shuning uchun `-1'` uning bir fut pastida) va rejada nuqtalarni bosing, balandlikni oʻzgartiring va yana bosing, soʻng **Yerni yaratish** tugmasini bosing. Boshlash uchun uchta nuqta yetarli.

Modeldan uzoq joylashgan geodezik koordinatalar (state plane, UTM) uyga koʻchiriladi va balandliklar uy yonidagi yer birinchi qavatdan taxminan 8" pastda boʻladigan qilib oʻrnatiladi. **Xususiyatlar** ichidagi **Yerni koʻtarish** istalgan miqdorda tuzatadi.

## Bino platformasi

1. {{ui:Bino platformasi}} ni tanlang.
2. Uy atrofidagi **Chegara**ni, **platforma pol ostida qancha pastda** (plita ostida 8", tagyer ostida koʻproq) va mavjud yergacha **Qiyaliklar** (`2:1` = har bir fut koʻtarilish yoki tushish uchun ikki fut tashqariga) ni oʻrnating.
3. Uy ichida nuqta qoʻyib bosing.

Yer uy ostida va chegarasigacha tekislanadi, soʻng yonbagʻirga koʻtarilib (kesish) va past tomonga tushib (toʻldirish) mavjud yergacha yetib boradi. Yer va platformaning **Xususiyatlari** kesish va toʻldirish hajmlarini beradi. Devorlarni koʻchiring — platforma ularga ergashadi.

## Haydovchi yoʻllari, yoʻlaklar va patiolar

{{ui:Qoplama}} ni tanlang, **Yoʻlak**, **Haydovchi yoʻli** yoki **Patio** ni tanlang va burchaklarni bosing. Birinchi burchakni yana bosing, ikki marta bosing yoki {{key:Enter}} ni bosib tugating. Qoplama tugallangan nishabga ergashadi; uning turi yoki qalinligini **Xususiyatlar**da oʻzgartiring.

## Poydevorlar nishabga tushadi

Yer modelda boʻlganda, devor poydevorlari va xonaosti poydevorlari uni kuzatadi: har bir devor boʻylab poydevor tashqaridagi yer ostida oʻz chuqurligini saqlaydi, yer pastga tushgan joyda esa butun 8" qadamlar bilan pastga tushadi (qarang: [Devorlar ostidagi poydevorlar](topic:foundations)).

## CivilCraftʼga uzatish

**CivilCraft uchun LandXML** (Relyef qatorida yoki yerning **Xususiyatlari**da) mavjud yerni va tugallangan nishabni LandXML fayl sifatida yuklab oladi. Uni CivilCraftʼda haqiqiy nishablik, drenaj va yer ishlari uchun oching.

## Bilib qoʻyish kerak

- Yerga IFC4 model kerak, har bir yangi bino kabi.
- Konturlar yer qavatining rejasida yerning **Xususiyatlari**da berilgan oraliq bilan koʻrsatiladi; har beshinchisi qalinroq.
- Yer IFC relyef elementi sifatida saqlanadi (yopiq uchburchakli sirt, shuning uchun kesimlar uni kesadi); platforma va qoplama u bilan birga saqlanadi. Qaytadan boshlash uchun yerni oʻchiring — uning platformasi va qoplamasi ham ketadi.
