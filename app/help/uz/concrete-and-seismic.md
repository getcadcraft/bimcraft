---
title: Beton elementlarni tekshirish va seysmik yuklarni hisoblash
summary: Ochiq modelning beton balkalari va ustunlarini sozlang, ularni ACI 318-19 boʻyicha tekshiring, qattiq qavatlarda ASCE 7-22 boʻyicha ekvivalent yon kuchlarni hisoblang va qavat siljishini koʻring. Muhandis tekshiruvi uchun yordam.
keywords: beton, temirbeton, ACI 318, ACI 318-19, armatura, balka, ustun, kesish, bogʻlamlar, seysmik, zilzila, ekvivalent yon kuch, ELF, ASCE 7-22, siljish, qavat siljishi, qattiq diafragma, qavat ogʻirligi, yuklanish holati, foydalanish darajasi, konstruktiv, muhandis, tahlil
from: 2f342e72
---

{{ui:Tahlil}} yorligʻidagi {{ui:Beton elementlar}} va {{ui:Seysmik yuklar}} boʻlimlari ochiq IFC ning temirbeton balkalari va ustunlarini tekshiradi hamda ramaning qavatlariga zilzilaning yon kuchlarini hisoblaydi. Ular DetailCraft dagi bilan bir xil boʻlimlar; {{ui:Tahlil}} yorligʻidagi tahlildan keyin ishlaydi va boshqa tahlil sozlamalari bilan IFC da saqlanadi.

:::warning
Natijalar **muhandis tekshiruvi uchun**: u koʻrib chiqquncha yordam vositasi. Beton tekshiruvlari birinchi tartibdagi kuchlardan foydalanadi (ramada siljimaydigan deb hisoblangan ustun magnitlangan moment uchun loyihalanadi), siljish magnitlanishisiz, burilish hisobisiz, seysmik detallashtirisiz (ACI 18-bob) va bogʻlam detallashtirisiz. Seysmik yuklar redundantlik koeffitsiyentini, vertikal seysmik taʼsirni, burilish kuchaytirishini va P-delta taʼsirlarini hisobga olmaydi. **Shamol yuklari hali qurilmagan**: standartning shamol boblari loyihaning manba sahifalarida yoʻq.
:::

## IFC dan nima oʻqiladi

Tahlil ochiq modelning balkalarini, ustunlarini va boʻlgan boʻlsa, diagonallarini ularning profillari bilan oʻqiydi (qarang: [Konstruktiv ramani tahlil qilish](topic:frame-analysis)). {{ui:Beton elementlar}} bloki ular ishlatgan har bir kesimni roʻyxatlaydi. Beton boʻlgan kesimda {{ui:Beton sifatida sozlash…}} ni bosing: BimCraft profilning maydoni va qattiqligidan toʻgʻri toʻrtburchak oladi (keyin oʻzgartirishingiz mumkin boʻlgan kenglik b va chuqurlik h); shuning uchun toʻgʻri toʻrtburchakka yaqin boʻlmagan kesim (prokat poʻlat shakli) tuzatilishi kerak boʻlgan oʻlcham beradi yoki tegilmaydi.

Beton sifatida sozlangan kesim va materiali beton deb nomlangan har qanday element beton sifatida tahlil qilinadi: E = 4700 √f′c, 2400 kg/m³, va odatda **yoriqli kesimlar** bilan (ustunlar 0.70 Ig, balkalar 0.35 Ig; ACI 318-19 Table 6.6.3.1.1(a)). Buni oʻchirish uchun {{ui:Toʻliq kesimlar}} ni tanlang. Bu sozlamalarsiz model oldingidek tahlil qilinadi.

## Armatura, kombinatsiyalar, tekshiruv

Qoplama, yuqori, pastki va yon armaturalarni (yoki ustun karkasini) va har bir kesimning bogʻlamlarini kiriting, f′c, fy, fyt, K ni belgilang va siljuvchi yoki siljimaydigan rejimni tanlang. Yuklanish holatlariga ularning turini bering, keyin {{ui:Kombinatsiyalarni yaratish}} ni bosing (ASCE 7 §5.3.1) va {{ui:Betonni tekshirish}} ni bosing: har bir element foydalanish darajasini oladi va modelda rangli koʻrsatiladi. Sigʻimdan oshgan elementlar va chegaradan oshgan qavat siljishi {{ui:Muammolar}} ichida oʻz bandi bilan roʻyxatlanadi; elementni tanlash uchun uni bosing.

## Qavatlar va seysmik yuklar

{{ui:Seysmik yuklar}} blokida {{ui:Qavatlarni topish}} ikki yoki undan koʻp balka uchrashadigan sathlarni oladi; har biri qattiq diafragma boʻladi. {{ui:Ogʻirliklarni holatlardan olish}} har bir qavatning seysmik ogʻirligini siz koeffitsiyent bergan holatlardan oʻqiydi. SDS, SD1, S1, R, Ie, Cd, TL, tizim va xavf toifasini kiriting, keyin {{ui:Seysmik holatlarni yaratish}} ni bosing (ASCE 7-22 12.8: davr, asos kesuvchi kuchi, qavatlar boʻylab taqsimlash, 5 % tasodifiy burilish). Qavat kuchlari va siljish tekshiruvi (12.12) hisobdan keyin koʻrinadi. Xuddi shu davr va qavat qattiqligi, tahlil ramasini manba sifatida tanlasangiz, [Suv toshqini, shamol yoki zilzilani ijro etish](topic:hazard-playback) dagi zilzilaga ham taʼsir qiladi.

Beton plitalar va devorlar tahlilda plastinalarga aylanadi, {{ui:Plita armaturasi}} bloki esa ularga metriga kerak boʻladigan poʻlatni hisoblaydi. Har bir tekshiruvning tafsilotlari DetailCraft ning shu nomli mavzusida.
