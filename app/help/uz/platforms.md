---
title: Brauzerlar, qurilmalar va xotira
summary: BimCraft Chrome, Edge, Firefox va Safari brauzerlarida, Mac, Windows va Linuxda, sichqoncha, trekpad yoki sensorli ekran bilan qanday farq qilishi va u qanday hajmdagi faylni qabul qila olishi.
keywords: brauzer, chrome, edge, firefox, safari, brave, mac, windows, linux, ipad, planshet, telefon, sensorli, trekpad, xotira, katta fayllar, webgl, unumdorlik
from: fd8acba1
---

BimCraft Chrome, Edge, Firefox va Safarining joriy versiyalarida, Mac, Windows va Linuxda ishlaydi. 3D koʻrinish WebGL talab qiladi, uni har bir joriy brauzer qoʻllab-quvvatlaydi. Ilovalarga umuman nima kerakligi uchun [Brauzerlar va kompyuterlar](common:browsers) boʻlimiga qarang.

## {{ui:Jild ochish}}

| Brauzer | {{ui:Jild ochish}} nima qiladi | Jildni sudrab olib kirish | {{ui:Oxirgi jildlar}} |
|---|---|---|---|
| Chrome, Edge | Brauzerning jild tanlagichi, soʻng "Saytga fayllarni koʻrishga ruxsat berasizmi?": **View files** tugmasini bosing | Soʻrovsiz ochiladi | Ha, tanlangan yoki sudrab olingan jildlar uchun |
| Firefox | Tizimning jild tanlagichi | Soʻrovsiz ochiladi | Yoʻq |
| Safari | Tizimning jild tanlagichi, **Upload** tugmasi bilan (hech narsa yuklanmaydi) | Soʻrovsiz ochiladi | Yoʻq |

Orqada: Chrome va Edge File System Access tanlagichidan foydalanadi va jildni eslab qolishi mumkin. Firefox va Safari eskiroq jild tanlagichidan foydalanadi; u jilddagi barcha fayllarni bir vaqtda beradi va eslab qolinmaydi. Sudrab olingan jild har bir brauzerda yozuvma-yozuv oʻqiladi.

:::chromium
Brave va baʼzi boshqa Chromium brauzerlari jild tanlagichini oʻchirib qoʻyadi. Shunda BimCraft tizimning jild tanlagichidan foydalanadi va brauzer "Bu saytga *n* ta fayl yuklansinmi?" deb soʻrashi mumkin. Hech narsa yuklanmaydi; fayllar faqat varaqqa boradi. Jildni sudrab olib kirish bu savolni chiqarmaydi.
:::

## Mac, Windows va Linux

- {{key:Mod+S}} va {{key:Mod+Z}} bilan yozilgan yorliqlar Macda Command, Windows va Linuxda Ctrl boʻladi.
- {{key:Ctrl+Shift+F}} (ekran rejimlari) har bir platformada Control, Macda ham.
- Fayl oynalari va yuklab olish jildi tizimniki.

## Sichqoncha, trekpad va sensorli ekran

| Kiritish | 3D koʻrinish | 2D chizma |
|---|---|---|
| Sichqoncha | Chap tugmani bosib sudrash aylantiradi, oʻng tugmani bosib sudrash suradi, gʻildirak kattalashtiradi, bosish tanlaydi | Har qanday sudrash suradi, gʻildirak kattalashtiradi, ikki marta bosish moslaydi |
| Trekpad | Bosib sudrash aylantiradi; {{key:Shift}} yoki {{key:Mod}} va sudrash suradi; ikki barmoq bilan aylantirish yoki chimdish kattalashtiradi | Bosib sudrash suradi; ikki barmoq bilan aylantirish yoki chimdish kattalashtiradi |
| Sensorli ekran | Bir barmoq aylantiradi, ikki barmoq chimdab suradi, teginish tanlaydi | Bir barmoq suradi; hali chimdab kattalashtirish yoʻq; {{ui:Moslash}} ga teging |

Macdagi trekpadda oʻng tugmani bosish ikki barmoq bilan bosish (yoki Control bilan bosish) hisoblanadi. Qarang: [Tugmalar, sichqonchalar va trekpadlar](common:keys).

Planshetlar va telefonlar alohida fayllarni ochib koʻrishi mumkin, lekin ekran kichik, koʻp mobil brauzerlar jildlarni tanlay olmaydi va katta modellar ularning xotirasiga sigʻmasligi mumkin. Kompyuter eng yaxshi ishlaydi.

## Katta fayllar va xotira

BimCraft oʻqiydigan hamma narsa brauzer varagʻining xotirasida saqlanadi. Varaq qancha foydalana olishi BimCraftdan koʻra brauzer va kompyuteringizga koʻproq bogʻliq.

| Fayl | Qancha oʻqiladi | Nimani kutish kerak |
|---|---|---|
| IFC | Butun fayl, va undan qurilgan 3D geometriya | Hajmi kompyuter va brauzerga bogʻliq; bir necha yuz megabaytlik model noutbuk uchun juda katta boʻlishi mumkin. 1.5 million uchburchakdan oshsa, qirralar oʻchiriladi |
| Loyiha va oila fayllari | Hajmidan qatʼiy nazar taxminan 40 KB dan 100 KB gacha | Hatto juda katta markaziy modellar ham bir zumda ochiladi, tarmoq diskidan ham |
| DWG va DXF | Butun fayl | Juda katta chizmalar "Bu chizma juda katta; uning faqat bir qismi koʻrsatilmoqda." deb koʻrsatadi |
| Jildlar | Fayllar roʻyxati, har bir model uchun bir necha kilobayt | 20,000 tagacha fayl |

Agar varaq xotira yetmasa, brauzer oʻzining xato sahifasini koʻrsatadi (masalan, Chromeda "Aw, Snap!"). Boshqa varaqlarni yoping, BimCraftni qayta yuklab, yana urinib koʻring yoki koʻproq xotirali kompyuterdan foydalaning.

## Tegishli

- [Onlayn va oflayn](topic:online-offline)
- [Muammolarni bartaraf etish](topic:troubleshooting)
