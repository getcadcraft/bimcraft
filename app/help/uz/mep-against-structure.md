---
title: Quvur va havo kanallarini konstruksiya bilan tekshirish
summary: Quvur va havo kanallarining tayyor toʻqnashuv toʻplamlarini devor, plita, balka va ustunlarga qarshi ishga tushiring, izolyatsiya va boʻshliqdan kamroq masofada konstruksiyaga yaqin yoʻlaklarni toping va yoʻlaklar devor va plitalardan oʻtishi uchun kerak boʻlgan teshiklarni CSV va BCF koʻrinishida roʻyxatlang.
keywords: mep, toʻqnashuv, toʻqnashuvni tekshirish, muvofiqlashtirish, konstruksiya, devorlar, plitalar, balkalar, ustunlar, oraliq, yumshoq toʻqnashuv, izolyatsiya, boʻshliq, teshik, teshiklar, oʻtish, gilza, yadro, quruvchi ishlari, bcf, csv
from: 2d597f01
---

## Nima qilasiz

Xizmat tarmoqlari binoga mos kelishiga ishonch hosil qiling: nima konstruksiyaga kirib ketadi, nima unga juda yaqin oʻtadi va devor hamda plitalarda qayerda teshik kerak. Chap paneldagi {{ui:Toʻqnashuvni tekshirish}} ni oching; **Quvur va havo kanallari konstruksiya bilan** boʻlimi odatdagi tekshiruv ostida.

## Qattiq toʻqnashuvlar

Ikki toʻplam roʻyxatida endi **Quvurlar va havo kanallari**, **Devorlar**, **Plitalar va tomlar**, **Balkalar**, **Ustunlar** va **Konstruksiya** (barchasi toʻrttasi) ham bor, har bir toʻplamda nechta element borligi koʻrsatilgan. {{ui:Quvurlar va havo kanallari × konstruksiya}} ni bosing: birinchi va oxirgi toʻplam tanlanadi va tekshiruv ishga tushadi; yoki istalgan juftlikni oʻzingiz tanlab, {{ui:Ishga tushirish}} ni bosing. Qarang: [Toʻqnashuvlarni tekshirish](topic:clash-check).

## Oraliqlar

Ba'zi xizmatlarga atrofida boʻshliq kerak: izolyatsiya va ishlash yoki gilza uchun joy.

1. Quvur yoki havo kanali yoʻlagiga Xususiyatlarda **Izolyatsiya** qalinligini bering (uning uchun hech narsa chizilmaydi).
2. Toʻqnashuv tekshiruvida **Quvur va havo kanallari atrofidagi boʻshliq** (mm) ni kiriting.
3. {{ui:Oraliqlarni tekshirish}} ni bosing: devor, plita, balka yoki ustunga izolyatsiyasi va boʻshligi yigʻindisidan yaqinroq har bir qism, uning hozirgi masofasi va kerakli masofasi bilan roʻyxatlanadi. Ikkalasini koʻrish uchun qatorni bosing.

Devor yoki plitadan oʻtadigan qism oraliq emas, teshik hisoblanadi va oʻsha yerda roʻyxatlanadi.

## Kerakli teshiklar

{{ui:Kerakli teshiklar}} ni bosing. Yoʻlakning oʻq chizigʻi devor yoki plitadan oʻtgan joyda BimCraft unga kerak boʻlgan teshikni roʻyxatlaydi: dumaloq quvur yoki havo kanali uchun dumaloq, aks holda toʻrtburchak, yoʻlakning tashqi oʻlchami, uning izolyatsiyasining ikki baravari va boʻshliqning ikki baravari yigʻindisida, yoʻlak kesib oʻtgan joyda markazlashgan. Qatorni bosing va yoʻlakni hamda devor yoki plitani koʻring.

- {{ui:Teshiklar CSV formatida}}: har bir teshik uchun bitta qator: yoʻlak, uning oʻlchami va izolyatsiyasi, teshikning oʻlchami, oʻtadigan element va uning GlobalId, qavat, markazning X, Y va Z koordinatalari hamda yoʻlak qancha oʻtishi.
- {{ui:Teshiklar BCF muammolari sifatida}}: har bir teshik uchun bitta muammo, unga qaragan kamera, yoʻlak va tanlangan element bilan, konstruksiya muhandisining dasturi uchun.

:::note
Hech narsa kesilmaydi: teshiklar ularni oʻlchaydigan odamlar uchun roʻyxat. Boʻshliqni siz kiritasiz; teshik qanchalik katta boʻlishi kerakligini hech qanday qoida aytmaydi. Balkalar va ustunlar teshik emas, toʻqnashuv: quvur ulardan oʻtishi mumkinmi, bu konstruksiya muhandisining qarori.
:::
