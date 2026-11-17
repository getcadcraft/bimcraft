---
title: Joyni belgilash nuqtalari va haqiqiy holatni tekshirish
summary: Model asosida qurilish brigadasi joyda belgilaydigan joylarni — ustun markazlari, devor uchlari, langar boltlari, gilzalar, tanlagan har qanday elementni — raqamlang, ularni umumiy stansiya uchun yozing, keyin brigada oʻlchagan haqiqiy nuqtalarni oʻqib, nima noto'gʻri ekanini koʻring.
keywords: joylashtirish nuqtalari, joyni belgilash, belgilash, umumiy stansiya, geodezik oʻlchash, nuqtalar fayli, csv, txt, pnezd, penzd, xyz, shimol, sharq, balandlik, haqiqiy holat, tekshiruv, ogʻish, langar boltlari, ustun markazlari, devor uchlari, gilzalar, geodezik koordinatalar, xarita konvertatsiyasi
from: acea9606
---

Oʻngdagi {{ui:Nuqtalar}} yorligʻi ochiq modeldan brigada joyda belgilaydigan nuqtalarni yaratadi va ular oʻlchagan nuqtalarni keyin tekshiradi.

## Nuqtalarni yaratish

1. IFC modelni va {{ui:Nuqtalar}} yorligʻini oching.
2. Belgilanadigan narsalarni tanlang: **ustun markazlari** (har bir ustun markaz chizigʻining tagi), **devor uchlari** (har bir devor oʻqining ikki uchi, asosida), **langar boltlari**, **gilzalar** (nomi yoki turida sleeve yozilgan elementlar) va **tanlangan elementlar** (har biri joylashish nuqtasida — avval koʻrinishda tanlang).
3. Birinchi raqamni va prefiksni, koordinatalarni, birliklarni, ustunlarni va faylni tanlang:
   - **Model**: faylning oʻz koordinatalari. **Geodezik tarmoq**: model georeferensining xarita tarmogʻi (faqat IFC da xarita konvertatsiyasi boʻlganda koʻrsatiladi), metrda yoki tanlagan birlikda.
   - Ustunlar **PNEZD** (nuqta, shimol, sharq, balandlik, tavsif), **PENZD** yoki **XYZ**; **CSV** (vergullar) yoki **TXT** (tablar).
4. {{ui:Nuqtalarni yaratish}} ni bosing: roʻyxat ularni koʻrsatadi, koʻrinish esa koʻk rangda belgilaydi. {{ui:Nuqtalarni yuklab olish}} faylni yozadi.

Nuqtalar tartibi belgilangan — turi boʻyicha, keyin rejada qatorlar boʻylab — shuning uchun bir xil modeldan qayta yaratilganda bir xil raqamlar chiqadi. Fayl CivilCraft ochadigan va CadCraft ning EXPORTPOINTS buyrugʻi yozadigan fayl: har bir qatorda bitta nuqta, uch oʻnli kasr, tavsifda vergul boʻlsa qoʻshtirnoq ichida.

## Haqiqiy holat nuqtalarini tekshirish

Brigada oʻlchaganini qaytarganda **ogʻish**ni millimetrda tanlang, nuqtalarni qanday juftlashtirishni — **nuqta raqami** (ular sizning raqamlaringizni saqlagan boʻlsa) yoki **eng yaqin oʻlchov** boʻyicha — tanlang va {{ui:Haqiqiy nuqtalarni oʻqish…}} ni bosing. Faylni yozgan birliklar va koordinatalarda oʻqing.

Har bir loyiha nuqtasi endi **ichida** (ogʻish ichida), **tashqarida**, **oʻlchanmagan** boʻladi va hech kim soʻramagan har qanday oʻlchov **qoʻshimcha** deb belgilanadi. Jadvalda farqlar panelda tanlangan birlikda koʻrsatiladi, futlar esa oʻnli dyuymda (haqiqiy minus loyiha: sharq, shimol, balandlik va plandagi masofa). Koʻrinish har bir nuqtani yashil yoki qizil rang bilan belgilaydi, oʻlchovgacha chiziq bilan; oʻlchanmagan boʻlsa kulrang. {{ui:Hisobot (CSV)}} butun solishtirishni yozadi.

Bu yerda hech narsa modelni oʻzgartirmaydi. Hozircha yoʻq: plita qirralaridan belgilash, avtomatik yaratilgan setka kesishmalari yoki teshiklar hamda nuqtalarni asbobga toʻgʻridan-toʻgʻri yuborish — buning oʻrniga faylni ishlating.
