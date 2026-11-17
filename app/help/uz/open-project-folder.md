---
title: Butun loyiha jildini ochish
summary: BimCraft ga loyiha jildini koʻrsating: barcha modellarni, ularning zaxira nusxalarini va havolalarini bir vaqtda koʻring, hamda “Bu yerdan boshlang” oynasi qaysi faylda ishlash kerakligini taklif qilsin.
keywords: jild, katalog, loyiha jildi, tarmoq diski, server, bu yerdan boshlang, qaysi fayl, zaxiralar, havolalar, xrefs, oxirgi jildlar, jildni sudrab olib kelish
from: 16fbdce2
---

## Nima qilasiz

Butun loyiha jildini, masalan ish uchun berilgan jildni oching va BimCraft ga uni tartibga solishni topshiring: qanday modellar bor, qaysi nusxalar zaxira, nima nimaga bogʻlangan, qaysi fayllar buzilgan va qaysi faylni ochishni xohlashingiz ehtimoli eng katta.

Har bir model kartochkasi uchun kerak boʻladigan bir necha kilobayt oʻqiladi, shuning uchun tarmoq diskidagi yoki sinxronlanadigan bulutli jild ham yaxshi.

## Qadamlar

:::chromium
1. Chapdagi {{ui:Jild ochish}} tugmasini bosing (yoki boʻsh ekranning oʻrtasida).
2. Ochilgan oynada loyiha jildini tanlang va **Tanlash** tugmasini bosing (tizimingizga qarab **Yuklash** yoki **Ochish**).
3. Brauzer sahifa fayllarni koʻrishi mumkinmi, deb soʻraganda **Fayllarni koʻrish** tugmasini bosing. Bu faqat yorliqqa jildni oʻqishga ruxsat beradi; hech narsa yuklanmaydi.
4. Holat qatori sanashini kuting: “Jild roʻyxati tuzilmoqda: … ta fayl”, keyin “Revit fayllari tekshirilmoqda: … dan …”.
:::

:::firefox
1. Chapdagi {{ui:Jild ochish}} tugmasini bosing (yoki boʻsh ekranning oʻrtasida).
2. Ochilgan oynada loyiha jildini tanlang va tasdiqlang. Firefox sahifaning jild fayllarini oʻqishiga ruxsat soʻrashi mumkin; ular baribir kompyuteringizda qoladi.
3. Holat qatori “Jild oʻqilmoqda: … ta fayl” va keyin “Revit fayllari tekshirilmoqda: … dan …” deguncha kuting.
:::

:::safari
1. Chapdagi {{ui:Jild ochish}} tugmasini bosing (yoki boʻsh ekranning oʻrtasida).
2. Ochilgan oynada loyiha jildini tanlang va **Yuklash** tugmasini bosing. Soʻz nimani anglatishidan qatʼiy nazar, Mac’ingizdan hech narsa chiqmaydi: fayllar faqat yorliqqa beriladi.
3. Holat qatori “Jild oʻqilmoqda: … ta fayl” va keyin “Revit fayllari tekshirilmoqda: … dan …” deguncha kuting.
:::

Jildni {{pick:mac=Finder|windows=File Explorer|linux=fayl menejeri}} dan sahifaga **sudrab tashlashingiz** ham mumkin. Sudrab tashlangan jild har bir brauzerda ruxsat soʻramasdan ochiladi.

## Nimani koʻrasiz

Jild hisoboti oʻrtada chiqadi:

- jild nomi, modellar, CAD chizmalar, IFC modellari va fayllar soni hamda umumiy hajm;
- agar ba’zi fayllar toʻliq boʻlmasa yoki bogʻlangan fayllar jildda yoʻq boʻlsa, qizil yoki sariq eslatmalar;
- {{ui:Bu yerdan boshlang}} oynasi: BimCraft taklif qilgan fayl va sabablari;
- **Modellar**: har bir model uchun bitta qator, zaxiralari uning ostida guruhlangan;
- **Bogʻlangan va havola qilingan fayllar**, **IFC modellari**, **CAD chizmalari** va **Chetga qoʻyilgan** boʻlimlari, jildda boʻlsa.

Chapda {{ui:Jild}} paneli buni umumlashtiradi; **Muammolar** har bir nusxa sogʻlom boʻlsa “Yoʻq” deydi.

## “Bu yerdan boshlang” oynasidan foydalanish

Oyna bitta faylni nomlaydi va nima uchun ekanligini aytadi, masalan:

- “Bu jilddagi eng yangi saqlangan ish (3-mart, 2025).”
- “*Consultant.rvt* boshqa modellarga bogʻlangan, shuning uchun u tahrir qilinadigan fayl emas, fon sifatida ishlatiladi.”
- “*Tower.rvt* eng aniq tanlovga oʻxshaydi, lekin u buzilgan; uning oxirgi yaxshi nusxasi …”
- “Bu markaziy model: Revit da uni “Create New Local” bilan oching va mahalliy nusxada ishlang.”

1. Sabablarini oʻqing.
2. Faylning kartochkasini oʻqish uchun {{ui:Kartochkasini ochish}} ni, yoki uning qatorini **Modellar** roʻyxatida topish uchun {{ui:Roʻyxatda koʻrsatish}} ni bosing.
3. Uni ishlatishdan oldin loyihada oxirgi marta ishlagan odam bilan tekshiring. Oyna ham shunday deydi: bu nomlar, sanalar va havolalar asosida qilingan taxminiy tanlov.

## Fayllarni hisobotdan ochish

1. Model nomini bosing — uning kartochkasi ochiladi. Kartochka har bir havolani jild bilan tekshiradi.
2. Yuqoridagi {{ui:Qaytish}} va kartochka tepasidagi jild nomini bosing (yoki chapdagi {{ui:Jildga qaytish}} ni bosing).
3. **IFC modellari** ostidagi istalgan IFC faylni bosing — u 3D da ochiladi.
4. **CAD chizmalari** ostidagi istalgan DWG yoki DXF ni bosing — u 2D da ochiladi. Uning bogʻlangan chizmalari va rasmlari jildda avtomatik topiladi.

## Jildni keyinroq qayta ochish

:::chromium
{{ui:Jild ochish}} yoki sudrab tashlash orqali ochilgan jildlar chapda {{ui:Oxirgi jildlar}} ostida roʻyxatlanadi. {{ui:Qayta ochish}} va jild nomini bosing — uni tanlamasdan qayta ochiladi. Brauzer qayta ishga tushgandan keyin Chrome yoki Edge yana bir marta soʻraydi; soʻrashni toʻxtatish uchun “Har bir tashrifda ruxsat berish” ni tanlang. Roʻyxat faqat shu brauzerda saqlanadi va hech qayerga yuborilmaydi. Jildni unutish uchun × ni bosing.
:::

:::firefox safari
Bu brauzer tashriflar orasida jildlarni eslab qololmaydi. Jildni {{ui:Jild ochish}} bilan yana tanlang yoki sudrab tashlang.
:::

## Keng tarqalgan xatolar

- **Juda katta jild tanlash.** 20 000 dan ortiq fayl boʻlsa: “Bu jildda 20 000 dan ortiq fayl bor. Kichikroq jild tanlang, masalan, bitta loyiha.” Butun diskni emas, loyiha jildini tanlang.
- **Bir nechta loyihaning ota jildini tanlash.** {{ui:Bu yerdan boshlang}} oynasi u holda loyihalar orasida tanlaydi. Bitta loyihani tanlang.
- **Revit ning oʻz jildlari eʼtiborga olinmagandek tuyuladi.** `*_backup`, `*_log` va `Revit_temp` jildlari texnik xizmat jildlari boʻlib, **Chetga qoʻyilgan** ostida roʻyxatlanadi, oʻqilmaydi.
- **Kartochkadan modelning 3D da ochilishini kutish.** Loyiha fayli faqat kartochka boʻladi. Uning IFC eksportini oching.
- **Telefon va planshetlar.** Koʻpgina mobil brauzerlar jildlarni umuman tanlay olmaydi. Kompyuterdan foydalaning.

Shuningdek qarang: [Jildni zarar koʻrgan nusxalar, yoʻqolgan havolalar va qoldiqlar uchun tekshirish](topic:check-folder-health) va [Jild hisoboti: rollar, holatlar va havolalar](topic:folder-roles).
