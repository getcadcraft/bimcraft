---
title: "Iqlim kelajagi: 2050 va 2080 yillardagi suv toshqini, issiqlik va oʻrmon yongʻini"
summary: "Kelajakdagi iqlim bilan (SSP2-4.5 va SSP5-8.5 stsenariylari, 2050 va 2080 yillar) iqlim maʼlumotlar toʻplamidan suv toshqini, energiya yili va oʻrmon yongʻini skriningini qayta ishga tushiring, hozirgi holat bilan yonma-yon."
keywords: iqlim, iqlim oʻzgarishi, kelajak, 2050, 2080, ssp, cmip6, stsenariy, dengiz sathi, suv toshqini, issiqlik, ob-havo fayli, epw, morph, energyplus, oʻrmon yongʻini, bushfayr, yongʻin ob-havosi
from: 224ecd08
---

Iqlim raqamlari ilovadan emas, **maʼlumotlar toʻplamidan** keladi. Sozlamalar › Qoʻshimchalar boʻlimida {{ui:Iqlim kelajagi}} qoʻshimchasini yoqing yoki {{ui:Kelajakdagi iqlim}} blokida oʻz toʻplam faylingizni yuklang.

:::warning
Qoʻshimcha bilan keladigan toʻplam **namuna**: uchta joy (Denver, Miami, Johannesburg), bitta iqlim modeli va har bir 20 yillik davrda besh yil. U vositalarni sinab koʻrish uchun moʻljallangan, **loyihalash uchun emas**. Panel uni ishlatilayotganda buni qalin harflar bilan aytadi. Toʻliq toʻplam (koʻp modellar, barcha yillar, koʻproq joylar) `tools/climate/build-pack.mjs` bilan NASA NEX-GDDP-CMIP6 maʼlumotlaridan tuziladi.
:::

## Kelajakni tanlash

Chap panelning {{ui:Xavfni koʻrsatish}} boʻlimida **Stsenariy** (SSP2-4.5, oʻrtacha yoʻl, yoki SSP5-8.5, yuqori emissiya) va **Yil** ni tanlang (2050 yil 2041–2060 ni, 2080 yil 2071–2090 ni bildiradi; ikkalasi ham 1995–2014 bilan solishtiriladi). **Joy** — modelning joyiga eng yaqin toʻplam joyi (IfcSite kengligi va uzunligi boʻyicha) yoki siz tanlagan joy. Har qanday joydan uzoqda boʻlsa, toʻplamning global oʻrtacha oʻzgarishlari ishlatiladi va panel buni aytadi.

## Suv toshqini: hozirgi va kelajak yonma-yon

Stsenariy tanlangan boʻlsa, **Suv toshqini turi** ni belgilang: qirgʻoqboʻyi (dengiz sathi koʻtarilishini qoʻshadi), daryo yoki kuchli yomgʻir (eng yomgʻirli kundagi yomgʻir oʻzgarishi boʻyicha chuqurroq), yoki ikkalasi. Ishga tushiring: suv toshqini avvalgidek koʻrsatiladi va jadvalda hozirgi va kelajakdagi suv toshqini yonma-yon chiqadi (suv sathi, nam boʻladigan xonalar, eng chuqur suv). Taxminlar uning ostida sanab oʻtilgan:

- qirgʻoq sathi butun dengiz sathi koʻtarilishi bilan koʻtariladi; boʻron va toʻlqinlar oʻzgarmaydi;
- daryo oqimi eng yomgʻirli kun yomgʻiriga birma-bir koʻtariladi, chuqurlik esa oqimga 0.6 daraja bilan bogʻliq (keng kanal uchun Manning tenglamasi);
- ikki qism oddiygina qoʻshiladi.

## Issiqlik: kelajakdagi ob-havo fayli

Turni {{ui:Issiqlik: kelajakdagi ob-havo fayli}} tanlang, hozirgi kundagi `.epw` ob-havo faylini tanlang va {{ui:Kelajakdagi ob-havo faylini yaratish}} tugmasini bosing. Fayl oy boʻyicha chop etilgan siljish va choʻzish usuli bilan **morph** qilinadi (Belcher, Hacker va Powell 2005): oyning oʻrtacha harorati toʻplamning oʻzgarishiga qadar isiydi, issiq tushlar kunlik maksimal oʻzgarishga, sovuq tunlar esa kunlik minimal oʻzgarishga koʻra isiydi; nisbiy namlik toʻplam oʻzgarishi bilan siljiydi va shudring nuqtasi qayta hisoblanadi. Bosim va shamol oʻzgarmaydi. Jadvalda oʻrtacha va eng issiq haroratlar, 0.4 % sovitish va 99.6 % isitish loyiha haroratlari, 30 °C va 35 °C dagi soatlar hamda darajali kunlar solishtiriladi.

{{ui:Kelajakdagi ob-havo faylini saqlash}} uni saqlaydi; {{ui:Energiya tekshiruvida ishlatish}} uni EnergyPlus tekshiruviga (Energiya yorligʻi) uzatadi. Kelajakdagi fayl bir xil tipik yil, faqat issiqroq: u yangi issiqlik toʻlqinlarini qoʻshmaydi.

## Energiya yili: hozirgi va kelajak yonma-yon

Energiya yorligʻidagi EnergyPlus tekshiruvida (oʻz qoʻshimchasi, oʻz dvigatelingiz bilan) hozirgi ob-havo faylini tanlang, soʻng uning {{ui:Kelajakdagi iqlim}} blokida stsenariy va yilni tanlang hamda {{ui:Bir yilni simulyatsiya qilish: hozirgi va kelajakdagi}} tugmasini bosing: yil hozirgi fayl va uning morph qilingan kelajagi boʻyicha ishlaydi va har bir xonaning isitish va sovitishi yonma-yon chiqadi.

## Oʻrmon yongʻini xavfi (faqat skrining)

Turni {{ui:Oʻrmon yongʻini xavfi (faqat skrining)}} tanlang: eng yaqin oʻsimlik qoplami, undan binogacha boʻlgan yuqoriga koʻtarilish qiyaligi va unga masofa. Natija juda pastdan ekstremalgacha boʻlgan diapazon, hozirgi va kelajak uchun.

:::warning
**Faqat skrining.** Bu bizning oʻz nisbiy shkalamiz: joyga toʻliq yongʻin bahosi kerakligini aniqlash uchun, muvofiqlik bahosi yoki bushfayr hujum darajasi emas. U oʻsimlik qoplami uchun vazn, qiyalik omili (yongʻin qiyalikka har 10 darajada tezligini taxminan ikki barobar oshiradi, 20 darajagacha hisoblanadi), masofa omili (10 m ni masofaga boʻlingan, eng koʻpi 1) va toʻplamning yongʻin ob-havo indeksidagi oʻzgarishi bilan koʻpaytiriladi.
:::

## Raqamlar qayerdan keladi

- **Harorat, namlik, quyosh, yomgʻir, yongʻin ob-havosi:** NASA NEX-GDDP-CMIP6, har kunlik pasaytirilgan CMIP6 model chiqishi. Har bir modelning chiqishi CC BY 4.0 ostida. Yongʻin ob-havosi oʻzgarishi Kanadaning yongʻin ob-havo indeksi boʻlib, u modelning ob-havosidan kunma-kun hisoblanadi (tushlik namligi oʻrniga kunlik namlik bilan).
- **Dengiz sathi koʻtarilishi:** IPCC AR6 global oʻrtachasi (mahalliy emas; yerning koʻtarilishi yoki choʻkishi unga kirmaydi), agar toʻplamda mahalliy raqamlar boʻlmasa.
- Toʻplam oʻz manbasi, litsenziyasi va sanasini nomlaydi; panel ularni koʻrsatadi.
