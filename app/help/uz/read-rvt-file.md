---
title: Loyiha yoki oila faylini oʻqish
summary: `.rvt`, `.rfa`, `.rte` yoki `.rft` faylni oching va uning versiyasini, birgalikda ishlashni, loyiha maʼlumotlarini, oila parametrlarini, bogʻlanishlarini va oldindan koʻrish rasmini oʻsha dastursiz oʻqing.
keywords: rvt, rfa, rte, rft, loyiha fayli, oila, versiya, build, qaysi versiya, birgalikda ishlash, markaziy, loyiha maʼlumoti, oldindan koʻrish, miniatyura, bogʻlanishlar
from: df3600e1
---

## Nima qilasiz

Revitda ochmasdan loyiha yoki oila faylida nima borligini aniqlang: uni qaysi versiya saqlagan, birgalikda ishlanadimi, loyiha maʼlumoti va nimaga bogʻlangani. Fayl boshqa odamdan kelganda va uni qaysi versiyada ochish kerakligini bilish kerak boʻlganda foydali.

## Qadamlar

1. {{ui:Fayl tanlash}} ni bosing.
2. `.rvt`, `.rfa`, `.rte` yoki `.rft` faylni tanlang.
3. Biroz kuting. Holat qatorida "Fayl oʻqilmoqda…" yoziladi, soʻng "*fayl nomi* ochildi".
4. Kartochkaning yuqorisiga qarang: fayldagi oldindan koʻrish rasmi, fayl turi va u saqlangan versiya, hamda loyiha nomi.
5. Kartochkaning boʻlimlarini oʻqish uchun pastga suring.

## Nimani koʻrasiz

Oʻrtadagi kartochka, fayl tarkibida boʻlsa, quyidagi boʻlimlar bilan:

| Boʻlim | Nimani aytadi |
|---|---|
| Fayl | Fayl nomi, hajmi, turi (loyiha, loyiha shabloni, oila yoki oila shabloni), saqlangan versiya va build, birgalikda ishlash, markaziy modelning yoʻli, oxirgi saqlangan joyi, kim saqlagani, til va hujjat GUID |
| Loyiha maʼlumoti | Loyihaning oʻz maydonlari, masalan nomi, raqami, mijoz, manzil va holati. Yangi loyihaning standart qiymatida qolgan maydonlar chiqarib tashlanadi. |
| Oila, Oila: … | Oila uchun: uning nomi, kategoriyasi, versiyasi, oxirgi yangilanishi va parametrlari, guruh-guruh |
| Bogʻlangan va havola qilingan fayllar | Fayl koʻrsatgan har bir bogʻlangan model, CAD bogʻlanish, rasm va kalit jadvali, saqlangan yoʻli bilan |

Chap tomonda {{ui:Fayl}} paneli asosiy maʼlumotlarni takrorlaydi va **Oʻqildi** qoʻshadi: BimCraft fayldan haqiqatda qancha oʻqiganini, odatda megabaytlar hajmidagi fayldan taxminan 40 KB. Oʻng tomonda {{ui:Xossalar}} paneli element xossalari uchun 3D model kerakligini aytadi.

## Nega 3D yoʻq

3D model va loyiha faylidagi elementlar hujjatlashtirilmagan formatda saqlanadi. BimCraft faqat hujjatlashtirilgan yoki aniq oʻqiladigan qismlarini oʻqiydi: fayl maʼlumotini, loyiha maʼlumotini, oila maʼlumotlarini, bogʻlanishlar roʻyxatini va oldindan koʻrish rasmini. Qolganini taxmin qilmaydi. 3D modelni koʻrish va element xossalarini oʻqish uchun faylni yaratgan dasturdan IFC eksport qiling. Qarang: [Loyiha faylini IFC orqali 3D ga olish](topic:rvt-to-ifc).

## Keng tarqalgan xatolar

- **3D kutish.** Yuqoriga qarang.
- **Bogʻlanishlar faqat saqlangan yoʻlni koʻrsatadi.** Oʻzi ochilgan fayl bogʻlanishlar mavjudligini tekshira olmaydi. Oʻrniga u joylashgan jildni oching; BimCraft har bir bogʻlanishni topilgan yoki topilmagan deb belgilaydi: [Butun loyiha jildini ochish](topic:open-project-folder).
- **"Bu fayl toʻliq emas…"** Fayl nusxalanayotganda, yuklanayotganda yoki sinxronlanayotganda uzilgan. Faqat bulut diskidagi "faqat onlayn" holatidagi fayl ham shunday boʻladi. BimCraft baribir uni ochadi va faqat tiklangan qismini koʻrsatadi: kartochka tepasida sariq ogohlantirish, faylda toʻliq saqlangan qismlarni sanab beruvchi **Bu fayldan tiklangan** boʻlimi va qolgan qismlar uchun **Faylda yoʻq** boʻlimi. Yoʻqolgan qism uchun hech narsa toʻldirilmaydi, shuning uchun uzilish nuqtasidan keyin saqlangan boʻlsa, versiya, oldindan koʻrish rasmi yoki loyiha maʼlumoti yoʻq boʻlishi mumkin. Agar faylning tarkib roʻyxati ham uzilgan boʻlsa, hech narsa ochilmaydi. Toʻliq fayl uchun asl nusxani qayta nusxalang va qayta oching.
- **"Bu faylda oldindan koʻrish rasmi yoʻq".** Baʼzi fayllar uni saqlamasdan saqlanadi. Bu normal.
- **Zaxira nusxani xato bilan ochish.** `Tower.0004.rvt` kabi nomlangan fayllar raqamlangan zaxira nusxalardir. Jildni ochsangiz, ular modeli bilan guruhlanadi.
