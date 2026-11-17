---
title: Oʻrnatilgan uglerod va jadvaldagi xarajatlar
summary: Ochiq, tahrirlanadigan koeffitsiyentlar jadvalidan modelning oʻrnatilgan uglerodini hisoblang va 4D jadvali boʻylab narxlarni xarajat va pul oqimi egri chizigʻiga taqsimlang. Ikkalasi ham siz kiritgan yoki import qilgan qiymatlardan boshlanadi.
keywords: oʻrnatilgan uglerod, uglerod, co2, kgco2e, emissiya, koeffitsiyentlar jadvali, epd, 5d, xarajat, pul oqimi, s egri chizigʻi, jadval xarajati, narxlar, hajmlarni hisoblash narxlari
from: 83e82840
---

## Oʻrnatilgan uglerod

**Uglerod** panelini oching. Har bir elementning miqdori (hajm, maydon yoki uzunlik) jadvaldagi koeffitsiyentga koʻpaytiriladi, hayot aylanishi moduli boʻyicha: ishlab chiqarish bosqichi majburiy, transport va chiqindi ixtiyoriy. Yigʻindilar material, sinf va qavat boʻyicha hamda har bir kvadrat metr polga koʻra chiqadi.

**Koeffitsiyentlar jadvali sizniki.** BimCraft bilan keladigan qatorlar tegishli tartibdagi umumiy boshlangʻich qiymatlar. Ular maʼlumotlar bazasidan olinmagan, tekshirilmagan deb belgilangan va sizning manbangiz bilan almashtirilishi kerak (EPD, milliy maʼlumotlar bazasi yoki firmangiz koʻrsatkichlari). Qatorlarni panelda tahrirlang yoki jadvalni CSV yoki JSON sifatida import va eksport qiling. Qoʻshgan qatoringiz bir xil identifikatorli boshlangʻich qatorni almashtiradi. Jadval model ichida saqlanadi.

Mos keladigan koeffitsiyenti yoki miqdori boʻlmagan elementlar nolga teng deb sanalmaydi, balki **Muammo** sifatida roʻyxatga olinadi.

## Jadvaldagi xarajatlar 4D

4D jadvali yonidagi **Xarajat** panelini oching. Unga narxlar bering (yozing, CSV yoki JSON import qiling yoki TakeoffCraft qatorlarini olib keling), har bir narxni kalit soʻzlar bilan model materiallariga moslang: u har bir vazifaning elementlarini narxlaydi. Vazifaning xarajati boshlanish va tugash kunlari boʻylab taqsimlanadi (teng, yoki oldinga yoki orqaga ogʻirlashtirilgan). Panel esa kun, hafta yoki oy boʻyicha yigʻma pul oqimi egri chizigʻini chizadi, bosqich va paket boʻyicha xarajatlar hamda sanada rejalashtirilgan va qurilgan narsalarni solishtirish bilan. CSV eksport qilinadi. Narxlar siz bermaguningizcha hech narsa hisoblanmaydi: tayyor narxlar yoʻq.

## Valyuta

Narxlar jadvali narxlar qaysi valyutada ekanini aytishi mumkin (uch harfli, masalan USD yoki EUR). 5D panelida bunga moʻljallangan katak bor, u narxlar bilan faylda saqlanadi va JSON eksportlarida olib boriladi. Bundan oldin yaratilgan yoki boʻsh qoldirilgan jadvalda valyuta yoʻq: uning xarajatlari USD sifatida koʻrsatiladi (qobiqning standart valyutasi), panel va umumiy jamlamalar buni aytadi. Valyutalar oʻrtasida hech narsa konvertatsiya qilinmaydi.
