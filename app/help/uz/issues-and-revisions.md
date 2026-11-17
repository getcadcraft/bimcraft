---
title: Muammolar, revizyalar va chizma oʻzgarishlari jurnali
summary: Har bir topshirilgan varaqlar toʻplamini qayd eting, har bir varaq va elementda oʻzgarganini koʻring, hamda uchastka koʻrsatmalarini, ustaxona chizmalarini va bogʻlangan modellarni tegishli muammo bilan saqlang.
keywords: muammo, chiqarilgan toʻplam, topshirilgan toʻplam, topshirish, revizya, revizyalar, nima oʻzgargan, muammodan beri, oʻzgarishlar jurnali, chizma oʻzgarishlar jurnali, chizmalar reyestri, uzatish varaqasi, uchastka koʻrsatmasi, ustaxona chizmasi, bogʻlangan model, tender, qurilish, surat, solishtirish
from: 4c732832
---

## Nima qilasiz

Muammoni qayd eting: qaysi varaqlar chiqarildi, qanday sanada, qanday maqsadda, har biri oʻz revizyasi bilan. Keyinroq muammodan beri nima oʻzgarganini soʻrang. Uchastka koʻrsatmalarini va qaytarilgan ustaxona chizmalarini muammo bilan saqlang.

## Qadamlar

1. Chap panelda **Muammolar va revizyalar** ni oching.
2. **Muammoni qayd etish** ni tanlang. Revizya taklif qilinadi (A, soʻng B; P1 kabi raqamlangan revizya esa oshib boradi). Muammo nima uchun chiqarilayotganini, kimga yuborilishini, sanasini va varaqlarni tanlang. Loyiha bosqichi belgilangan boʻlsa, maqsad unga ergashadi. Ruxsatnoma paketida qoʻllab-quvvatlovchi hujjatlar roʻyxati boʻlsa, shu roʻyxatga bogʻlangan varaqlar avtomatik belgilanadi.
3. **Modelning chiqarilgan nusxasini ham saqlash** belgisini qoldiring, shunda model aynan chiqarilgan holatida saqlanadi. Nusxa yuklab olinadi; uning nomi, hajmi va SHA-256 muammo bilan birga saqlanadi.
4. **Bu muammoni qayd etish** ni tanlang. Oxirgi marta chiqarilganidan beri oʻzgargan varaq yangi revizyani oladi. Oʻzgarmagan varaq oʻz revizyasini saqlab qoladi. Har bir varaqning sarlavha blokida uning revizyasi koʻrsatiladi.
5. Nima oʻzgarganini koʻrish uchun muammo yonidagi **Oxirgidan beri oʻzgarishlar** ni tanlang. Har bir varaq **Bir xil** yoki **Oʻzgargan** deb koʻrsatiladi, shuningdek unda qoʻshilgan, oʻzgargan va olib tashlangan elementlar sanab beriladi. Sonni bosing — shu elementlar tanlanadi.
6. Uchastka koʻrsatmasi, ustaxona chizmasi, belgilash toʻplami, bogʻlangan model yoki izoh uchun **Yozuv qoʻshish** ni tanlang. Unga tegishli muammoni tanlang. Tanlagan faylingiz nomi, hajmi va SHA-256 bilan qayd etiladi; fayl oʻz joyida qoladi.
7. **Chizmalar oʻzgarishlar jurnali** har bir varaq uchun bitta qator va har bir muammo uchun bitta ustun koʻrsatadi. **Oʻzgarishlar jurnalini yuklab olish (CSV)** ni tanlang — u muammolar va yozuvlarni ham saqlaydi.
8. **Muammolar tarixini saqlash** `.issues.json` faylini yozadi. MarkupCraft, TakeoffCraft va DetailCraft uni **Muammolar tarixini oʻqish** orqali oʻqiydi.

## Yaxshi bilish kerak

- Tarix IFC faylining ichida saqlanadi (loyihadagi `CadCraft_Issues` xossalar toʻplami). Boshqa dasturlar uni eʼtiborsiz qoldiradi.
- Varaq oʻzining sozlamasi oʻzgargan boʻlsa yoki u koʻrsatadigan element oʻzgargan boʻlsa, oʻzgargan hisoblanadi: reja oʻz qavatini, fasad yoki kesim butun modelni, eshik yoki deraza jadvali esa oʻz eshik va derazalarini koʻrsatadi.
- Element xossasi, joylashuvi, oʻlchami yoki shakli oʻzgargan boʻlsa, oʻzgargan hisoblanadi.
- Qaysi xossa aynan oʻzgarganini koʻrish uchun muammoning saqlangan chiqarilgan model nusxasini **Versiyalarni solishtirish** bilan oching.
- Muammoni olib tashlash yozuvlarni saqlab qoladi, lekin ularni muammosiz qoldiradi. Har bir qadam bitta Ortga qaytarish.
- 60,000 dan ortiq elementli modelda har bir element uchun muammo bilan yozuv saqlanmaydi. Varaqlar baribir solishtiriladi.

## Hali qilinmagan

- Varaqlar muammo bilan birga PDF sifatida saqlanmaydi.
- Revizya buluti BimCraft ning oʻz varaqlarida chizilmaydi. Bulutlarni muammo bilan bogʻlab, MarkupCraft da qayd eting.
