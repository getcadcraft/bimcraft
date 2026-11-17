---
title: Elektr rejasi
summary: Rozetkalar, kalitlar, chiroqlar, datchiklar, tarmoq qutilari va shitlarni rejaga CadCraft Elektr qoʻshimchasidagi belgilar bilan joylashtiring, kalitlarni yoqadigan chiroqlar bilan bogʻlang va qurilmalar hamda zanjirlarni jadvallarda sanab chiqing.
keywords: elektr, elektr rejasi, rozetka, ulagich, dupleks, kalit, uch joyli kalit, dimmer, chiroq, shift chirogʻi, ichki oʻrnatilgan chiroq, downlight, harakat datchigi, tarmoq qutisi, shit, taqsimlash shiti, zanjir, yuklama, vatt, amper, kalit simi, qurilmalar jadvali, shit jadvali
from: f7de1947
---

## Nima qilasiz

Uy elektr rejasini modelda chizing: devorlardagi rozetkalar, kalitlar va shitlar, shiftdagi chiroqlar va datchiklar. Har bir qurilma IFC faylidagi haqiqiy elektr elementi boʻladi, oʻz belgisi, zanjiri va yuklamasi bilan; kalitlar esa yoqadigan chiroqlarni eslab qoladi.

## Qurilmalarni joylashtirish

1. Qavatda {{ui:Yigʻilish}} ni oching va {{ui:Elektr}} ni tanlang.
2. Qurilmani tanlang: rozetkalar (quvvat, maʼlumot, telefon, audio-video), kalitlar va datchiklar (termostat va taymer ham), chiroqlar, detektorlar va signal qurilmalari, tarmoq qutisi, shit yoki quyi shit.
3. Agar bilsangiz, **Zanjir** ni kiriting (istalgan nom: 1, 2, A-3). **Oʻrnatish balandligi** ni boʻsh qoldiring, u holda shu qurilma uchun odatdagi balandlik qoʻllanadi.
4. Rejada bosing. Rozetkalar, kalitlar va shitlar eng yaqin devor yuzasiga, xonaga qaratib joylashadi; chiroqlar, datchiklar va tarmoq qutilari esa bosgan joyingizda shiftga joylashadi.

Qurilmalar joylashtirilgach belgilanadi: rozetkalar uchun **R**, kalitlar uchun **S**, chiroqlar uchun **L**, harakat datchiklari uchun **M**, tarmoq qutilari uchun **J**, shitlar uchun **P**. Devordagi qurilmalar devor bilan birga siljiydi.

Rasm orqali qidirishni afzal koʻrasizmi? {{ui:Yigʻilish}} dan **Belgilar palitrasi** ni oching, qurilmani nomi boʻyicha toping, koʻp ishlatadiganlaringizga yulduzcha qoʻying va bir bosishda joylashtiring: qarang [Belgilar palitrasi](topic:symbol-palette).

## Kalitlarni chiroqlarga bogʻlash

1. Kalitni (yoki harakat datchigini) tanlang va **{{ui:Xossalar}}** ichida **Chiroqlarni bogʻlash** tugmasini bosing.
2. Kalit yoqadigan har bir chiroqni bosing. Bogʻlangan chiroqni yana bosing, bogʻlanish uziladi.
3. {{key:Enter}} ni bosing yoki **Tayyor** ni bosing.

Reja kalitdan uning har bir chirogʻigacha nuqtali egri chiziq chizadi. Chiroqning **{{ui:Xossalar}}** oynasida uni qaysi kalitlar yoqishi koʻrsatiladi.

## Qurilma turgan xona

Har bir qurilma qaysi xonada turganini biladi. Devordagi qurilma qaragan xonada; shiftdagi qurilma ustida turgan xonada boʻladi. **{{ui:Xossalar}}** da **Xona** koʻrsatiladi, **Elektr qurilmalari** jadvalida esa **Xona** ustuni bor (raqam va nom, masalan 101 Oshxona).

Bu maʼlumot doim yangilanadi: xonaning nomini yoki raqamini oʻzgartirsangiz, qurilmani yoki devorni siljitsangiz, xona oʻsha qadamda oʻzgaradi. Bino tashqi yuzasidagi yoki xona boʻlmagan boʻshliqdagi qurilma xonada emasligi aytiladi.

Xona faylga ham yoziladi: qurilmaning `CadCraft_Location` xossalar toʻplamiga (Room, RoomNumber, RoomName). Shu sababli Qidirish, Xossa boʻyicha rang berish va belgilar jadvali undan foydalanishi mumkin, boshqa dastur ham foydalanishi mumkin. Reja belgilari va belgiga bogʻlangan elementlar ham shu toʻplamni oladi; qarang [Belgilar palitrasi](topic:symbol-palette).

## Yordamchi orqali joylashtirish

Yordamchi ulangan boʻlsa (Sozlamalar › Yordamchilar, tahrirlashga ruxsat bilan), qurilmalarni soʻz bilan soʻrashingiz mumkin: "yashash xonasi devorlari boʻylab har 2 m da ikkilik rozetka qoʻy, 300 mm balandlikda, 3-zanjirga", yoki "eshik yonida chiroq va uning kaliti qoʻshilsin". Yordamchi beshta vositadan foydalanadi: `devices_add`, `device_change`, `lights_set`, `devices_delete` va `devices_list`. Ular Elektr vositasi yaratadigan oʻsha qurilmalarni yaratadi, oʻsha devorlarda, oʻsha belgilar, zanjirlar, yuklamalar va balandliklar bilan; har bir chaqiruv bitta bekor qilish qadami boʻladi.

Qurilma hech qachon Elektr vositasida boʻlmagan turga ega boʻlmaydi: nomaʼlum tur rad etiladi va yordamchiga roʻyxat beriladi. Rozetka yoki kalit bosilgandagidek devor yuzidan 600 mm ichida turishi kerak, aks holda chaqiruv rad etiladi va hech narsa joylashmaydi. Standart balandliklar millimetrda: rozetka uchun 300, kalit uchun 1100; shiftdagi qurilma shiftdan osilib turadi.

## Oʻzgartirish va roʻyxat

Qurilmani tanlab, uning belgisi, zanjiri, yuklamasi (vatt) va oʻrnatish balandligini oʻzgartiring. Bir nechtasini tanlasangiz, hammasini bir vaqtda bitta zanjirga qoʻyishingiz mumkin. Bittasini oʻchirish uchun {{key:Delete}} ni bosing; oʻchirilgan chiroq kalitlaridan olib tashlanadi.

{{ui:Jadvallar}} da **Elektr qurilmalari** ni tanlang: har bir qurilma qavati, zanjiri, yuklamasi, balandligi va har bir kalit yoqadigan chiroqlar bilan. Yoki **Zanjirlar** ni tanlang: har bir zanjirning qurilmalari, umumiy yuklamasi va toki. Ikkalasi ham chizmalar toʻplamining jadval varagida bor; qarang [Fasadlar, kesimlar va varaqlar](topic:sheets).

:::note
Oʻrnatish balandliklari va yuklamalar rejalashtirish uchun standart qiymatlar (rozetka 16" balandlikda va 200 W, kalit 48" da, shift chirogʻi 60 W), loyiha emas: elektrik yoki muhandis zanjirlarni hisoblaydi va normalarni tekshiradi.
:::

:::tip
Belgilar CadCraft Elektr qoʻshimchasi oʻrnatish chizmalarida chizadigan belgilar, shuning uchun ikkala dasturdagi reja bir xil oʻqiladi.
:::
