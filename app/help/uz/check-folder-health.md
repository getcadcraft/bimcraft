---
title: "Papkani shikastlangan nusxalar, yoʻqolgan havolalar va qoldiqlar uchun tekshirish"
summary: "Kesilgan model fayllarni topish, eng yangi toʻliq zaxira nusxani tanlash, qaysi havolalar yoʻqligini koʻrish va qulf hamda vaqtinchalik fayllarni aniqlash uchun papka hisobotidan foydalaning."
keywords: sogʻliqni tekshirish, shikastlangan, buzilgan, toʻliqsiz, kesilgan, zaxira, yoʻqolgan havolalar, xref yoʻq, audit, qoldiqlar, qulf fayllari, dwl, bak, topshirish
from: 3025a539
---

## Nima qilasiz

Papkani topshirishdan yoki unda ishlashni boshlashdan oldin tekshiring: har bir model toʻliqmi, qaysi zaxira oxirgi sogʻ nusxa va barcha bogʻlangan fayllar joyidami?

## Qadamlar: shikastlangan nusxalar

1. Loyiha papkasini oching. Qarang: [Butun loyiha papkasini ochish](topic:open-project-folder).
2. Papka nomi ostidagi izohlarni oʻqing. "2 ta fayl toʻliqsiz yoki oʻqib boʻlmaydi. Quyidagi modellarga qarang." degan izoh koʻrib chiqish kerakligini bildiradi.
3. **Modellar** boʻlimida **Holat** ustuniga qarang. **Toʻliq** yaxshi. Sariq "1 ta toʻliqsiz" degani bitta nusxa yaroqsiz, lekin boshqasi sogʻ. Qizil **Toʻliqsiz** degani sogʻ nusxa topilmagan.
4. Muammosi bor model ostidagi **Barcha … nusxalar** ni oching. U asosiy fayl va har bir raqamlangan zaxira nusxani, eng yangisi birinchi boʻlib, hajmi, sanasi va holati bilan koʻrsatadi.
5. Roʻyxat ustidagi izohni oʻqing, masalan: "Tower.rvt toʻliqsiz (183.2 MB, kamida 214.0 MB boʻlishi kerak). Kartochkada eng yangi toʻliq nusxa, Tower.0012.rvt (2025-yil 3-mart) koʻrsatiladi."
6. Ochmoqchi boʻlgan nusxani bosing. Faqat toʻliq nusxalarni bosish mumkin.

## Sogʻliqni tekshirish nima qiladi

Har bir modelning har bir nusxasi sarlavhasi boʻyicha tez tekshiriladi (har biri 512 bayt), shuning uchun hatto katta modellar papkasi ham soniyalarda tekshiriladi. Oʻz indeksi oxiridan oʻtib ketgan fayl nusxalash, yuklash yoki sinxronlash vaqtida kesilgan. "Faqat onlayn" holatidagi bulut diskidagi fayl ham shunday koʻrinadi.

Har bir model kartochkasi asosiy fayl sogʻ boʻlsa, undan, aks holda eng yangi sogʻ zaxira nusxadan oʻqiladi.

## Qadamlar: yoʻqolgan havolalar

1. Papka nomi ostida "*n* ta bogʻlangan fayl bu papkada emas." degan izohni toping.
2. **Bogʻlangan va havola qilingan fayllar** boʻlimiga aylantiring. Yoʻqolgan havolalar roʻyxatda birinchi boʻladi.
3. Har bir havola uchun **Qayerda** ustunini oʻqing:
   - **Bu papkada**: model saqlagan yoʻlda topildi.
   - **Bir xil nom topildi**: papkada bir xil nomli fayl boshqa joyda. Toʻgʻri faylligini tekshiring.
   - **Kutubxona fayli**: kalit yozuvlar yoki yigʻma kodlari jadvali. Ular har bir kompyuterda dastur bilan birga keladi, shuning uchun papkada boʻlishi kutilmaydi.
   - **Bu papkada emas**: papkaning hech qayerida topilmadi.
4. Har bir faylni qaysi modellar bogʻlaganini koʻrish uchun **Kim tomonidan ishlatiladi** ni oʻqing.

BimCraft har bir havolani avval nisbiy yoʻli boʻyicha, soʻng saqlangan yoʻlining oxiri boʻyicha qidiradi (masalan, `\\server\jobs\Tower\Cad\X-Refs\site.dwg` fayli, `Cad` papkasini tanlagan boʻlsangiz, `X-Refs/site.dwg` da topiladi), keyin esa papkaning istalgan joyida fayl nomi boʻyicha.

## Qadamlar: qoldiqlar

1. Hisobot oxiridagi **Chetga qoʻyilgan** boʻlimiga aylantiring.
2. Paydo boʻlishi mumkin boʻlgan uch qatorni oʻqing:
   - Xizmat papkalari (`*_backup`, `*_log`, `Revit_temp`): oʻqilmaydi.
   - Qulf, jurnal va zaxira qoldiqlari: `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp`, `.sv$` kabi fayllar. Ular ishdan chiqqan yoki papka nusxalanayotganda ochiq boʻlgan dasturlar tomonidan qoldiriladi. Hech kim fayllarni ochiq holda ushlab turmasa, odatda ularni oʻchirish xavfsiz.
   - Boshqa fayllar: BimCraft oʻqimaydigan barcha boshqa narsalar.

## Keng tarqalgan xatolar

- **Shikastlangan asosiy faylni yaxshi zaxira saqlamasdan oʻchirish.** Avval eng yangi toʻliq zaxira nusxadan nusxa oling, keyin shikastlangan faylni hal qiling.
- **"Bir xil nom topildi" ga koʻr-koʻrona ishonish.** Ikki xil chizma bir nomga ega boʻlishi mumkin. Shubha boʻlsa, ikkalasini ham oching.
- **Yoʻqolgan kutubxona faylini muammo deb oʻylash.** Kalit yozuvlar va yigʻma kodlari jadvallari har bir kompyuterdagi dastur bilan birga turadi.
- **Brauzerlar boʻyicha fayllar soni farq qiladi.** Firefox va Safari da {{ui:Jild ochish}} xizmat papkalari ichidagilar bilan birga har bir faylni uzatadi, shuning uchun son (va 20,000 fayl chegarasi) ularni ham oʻz ichiga oladi. Papkani sudrab tashlash Chrome va Edge dagidek ularni oʻtkazib yuboradi. Hisobot boshqa jihatdan bir xil.
