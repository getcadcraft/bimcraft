---
title: Binoda toshqin, shamol yoki zilzilani koʻrsatish
summary: Xonalar orqali koʻtarilayotgan suv, har bir qavatdagi shamol bosimi yoki qavatlarni silkitayotgan zilzila vaqt surgʻichi bilan plan yoki fasadda koʻrsatiladi. Oddiy modellar, ularning taxminlari sanab oʻtilgan; kod tekshiruvi yoki konstruktiv loyiha emas.
keywords: xavf, toshqin, shamol, zilzila, seysmik, siljish, tebranish, tayanch kesuvchi kuch, suv sathi, iqlim, stsenariy, dengiz sathi, koʻrsatish, qavat, davr
from: ff0d34d1
---

{{ui:Xavfni koʻrsatish}} boʻlimi ochiq IFC modelda xavfni koʻrsatadi. Modeldagi hech narsa oʻzgarmaydi.

:::warning
Bular **bu joylashuv xavfga qanday taʼsir qilishini koʻrish uchun oddiy modellar**, toshqin tadqiqoti, shamol kodi tekshiruvi yoki konstruktiv loyiha emas. Har bir natija oʻz taxminlarini koʻrsatadi.
:::

## Toshqin

Eng yuqori suv sathini eng past qavatdan yuqoriga belgilang va koʻtarilish, ushlab turish hamda pasayish daqiqalarini kiriting. Suv xonaga, sathi oʻtib ketgan tubi bilan ochilmadan kiradi; suv sathidan past ochilmalar bilan nam xonalarga ulangan xonalar bir xil sathda turadi (kvazistatik). Jadvalda har bir xona qachon birinchi marta nam boʻlgani va qanchalik chuqurligi koʻrsatiladi; plan uni ijro etadi. Xona qabul qila oladigan eng koʻp suvni kiriting — undan oshgan xonalar ogohlantirish boʻladi. **Iqlim kelajagi:** oʻz stsenariy faylingizni (yil, dengiz sathining koʻtarilishi va toshqin koeffitsiyenti bilan JSON yoki CSV) yuklang va yilni tanlang. Yoki Iqlim kelajagi qoʻshimchasini yoqing va stsenariy hamda yilni tanlang: toshqin ikki marta hisoblanadi — hozirgi va kelajakdagi toshqin yonma-yon (qarang "Iqlim kelajagi: 2050 va 2080 yillardagi toshqin, issiqlik va oʻrmon yongʻini"). Oʻrmon yongʻini xavfi va Issiqlik: kelajakdagi ob-havo fayli turlari ham shu roʻyxatda boʻladi.

## Shamol

Bosim ½ρV² boʻyicha hisoblanadi, tezlik balandlik bilan oshadi; qavatga taʼsir qiladigan kuch — bu bosim, shamol puflash koeffitsiyenti, ikki bosim koeffitsiyenti, kenglik va qavat balandligining koʻpaytmasi. Siz kesuvchi kuch, agʻdarish momenti va tebranishni olasiz.

## Zilzila

Kesuvchi bino: har bir qavat uchun massa (poydevor maydoni × kvadrat metr boʻyicha kilogramm, uni siz belgilaysiz), har bir qavatda bir xil qattiqlik — siz bergan birinchi davrga moslangan (boʻsh qoldirsangiz, qavat boshiga oʻndan bir sekund, buni dastur aytadi), damping va tanlagan eng yuqori tezlanishda tanlangan yer silkinishi (impuls yoki filtrlangan shovqin). Natija: har bir qavatning siljishi, qavat tezlanishlari va tayanch kesuvchi kuch; fasad tebranishni koʻrsatadi, u haqiqatdagidan kattaroq chiziladi. Ruxsat etadigan siljish nisbatini kiriting — undan oshgan qavatlar ogohlantirish boʻladi. U elastik: hech narsa egilmaydi va yorilmaydi.

## Tahlil karkasidan qavat qattiqligi

Zilzila yoki shamol tebranishi uchun davr kiritish oʻrniga qattiqlik manbai sifatida **Tahlil karkasi** ni tanlang. Har bir qavat navbat bilan yon tomonga suriladi, karkas (tirgaklar, ustunlar, bogʻlovlar, plitalar) hisoblanadi va hamma birgalikda ishlaganda qavatlar qattiqligi yurishni boshqaradi. Massa — elementlarning oʻz massasi va har bir qavat planidagi qutiga kiritgan kvadrat metr boʻyicha yuk. Haqiqiy birinchi davr koʻrsatiladi. U elastik: hech narsa egilmaydi va burilish modellashtirilmaydi. Shamol uchun qavat kuchlari hali yuqoridagi taxminiy boʻladi (darajali profil, sizning shamol puflash koeffitsiyentingiz va belgilangan bosim koeffitsiyentlari, shamol kodi emas); faqat tebranish karkasdan keladi — bu kuchlarga qarshi karkasning toʻliq qattiqlik matritsasini yechish orqali. Model Tahlil yorligʻi oʻqiy oladigan karkasli IFC boʻlishi kerak.

## Birliklar

Suv chuqurliklari, qavatma-qavat tebranish va siljish, masofalar va maydonlar siz tanlagan {{ui:Birliklar}} da koʻrsatiladi. Kuchlar (kN), vaqtlar va tezlanishlar oʻz birliklarini saqlaydi; metrda yozilgan qutiga kiritgan qiymat metrda qoladi. Evakuatsiya, kunduzgi yorugʻlik, isitish va sovutish hamda jihozlash natijalari uchun ham shunday: uzunliklar, maydonlar va hajmlar tanlovingizga ergashadi; bosim, oqim, harorat, energiya va quvvat hech qachon aylantirilmaydi.
