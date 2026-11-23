---
title: Oʻz obyektlaringiz va oila fayllaringizni kutubxonaga qoʻshing
summary: Kutubxona yorligʻida oila fayllarini (.rfa) hamda IFC, DWG, DXF, glTF yoki OBJ fayllarini oʻqing, ularni boshqa kutubxona elementi kabi joylashtiring va faqat siz koʻra oladigan shaxsiy roʻyxat boʻlgan Mening obyektlarim da saqlang.
keywords: rfa, oila, oilalar, oilalar kutubxonasi, oʻz obyektlar, mening obyektlarim, shaxsiy obyektlar, shaxsiy kutubxona, obyektlarni import qilish, ishlab chiqaruvchi kontenti, bim obyektlar, ifc obyekt, gltf, obj, dwg blok, saqlash, almashtirish, koʻchirish
from: 886261f8
---

## Nima qilasiz

Oʻzingizda allaqachon bor obyektlarni BimCraftga olib keling: Revitdan oila kutubxonasi, ishlab chiqaruvchining IFC yoki DWG yuklamasi yoki boshqa modelerdan mesh. Faylni **Kutubxona** yorligʻida oʻqiysiz, obyektni modelingizga haqiqiy IFC elementi sifatida joylashtirasiz va keyinroq qayta ishlatmoqchi boʻlsangiz, uni **Mening obyektlarim** da saqlaysiz.

## Qadamlar

1. IFC model oching yoki yangi bino boshlang.
2. **Xossalar** yonidagi **Kutubxona** yorligʻini bosing.
3. {{ui:Files…}} ni, soʻng {{ui:Choose a file…}} ni bosing. Bitta yoki bir nechta faylni bir vaqtda tanlang: `.rfa`, `.ifc`, `.dwg`, `.dxf`, `.glb`, `.gltf`, `.obj` yoki `.csv`. Yoki butun jild va undagi jildlarni oʻqish uchun {{ui:Choose a folder…}} ni bosing (bir martada 200 tagacha fayl).
4. Nima oʻqilganini koʻrish uchun kartochkani bosing: reja koʻrinishi, nomi, ishlab chiqaruvchi va modeli, oʻlchamlari hamda izohlar.
5. Joylashtirish uchun {{ui:Place in plan}} yoki {{ui:Place in model}} ni bosing.
6. Boshqa loyihalarda qayta ishlatish uchun {{ui:Keep in my objects}} ni bosing. Bir nechta fayl oʻqilgan boʻlsa, Hammasini mening obyektlarimga saqlash ularni bir martada saqlaydi.
7. Keyinroq ularni topish uchun Kutubxona yorligʻida {{ui:My objects}} ni bosing. Ular boshqa kutubxona elementlari kabi joylashtiriladi, almashtiriladi va yangilanadi.

Fayllar bu yorliqda oʻqiladi. {{ui:Keep in my objects}} ni tanlamaguningizcha hech narsa yuklanmaydi.

## Har bir fayl turidan nima oʻqiladi

| Fayl | Nima olasiz |
|---|---|
| IFC | Har bir element turi haqiqiy 3D shakli, IFC sinfi va xossalar toʻplamlari bilan obyekt sifatida |
| glTF, GLB, OBJ | Haqiqiy 3D shakli mesh sifatida bitta obyekt. Avval birliklarni va yuqoriga yoʻnalishni belgilang. |
| DWG, DXF | Har bir blok reja chizmasi va atributlari bilan obyekt sifatida |
| Oila fayli (`.rfa`) | Oilaning nomi, kategoriyasi, ishlab chiqaruvchisi, modeli, parametrlari va turlari. **3D shakli emas:** oilaning Kenglik, Chuqurlik va Balandlik qiymatlari boʻyicha quti oʻrnini bosadi. |
| CSV | Har bir qator uchun bitta obyekt: nomi, oʻlchamlari va maʼlumotlari, quti sifatida chiziladi |

## Oila fayllari va ularning 3D shakli

`.rfa` ichidagi 3D shakl hujjatlashtirilmagan formatda saqlanadi, shuning uchun BimCraft oilaning maʼlumotlarini oʻqiydi va geometriyasini taxmin qilmaydi. Kartochka buni aytadi: "Bu oiladan geometriya oʻqilmadi; oʻrniga quti qoʻyildi."

Oilani haqiqiy shakli bilan olib kelish uchun uni yaratgan dasturdan (Revit) eksport qiling:

1. Oilani yoki unga joylashtirilgan loyihani oching.
2. **File > Export > IFC** ni tanlang. [Bu yerda eng yaxshi ochiladigan eksport sozlamalari](topic:rvt-to-ifc).
3. BimCraftda `.ifc` faylni {{ui:Files…}} bilan oʻqing. Har bir oila turi oʻz shakli va xossalar toʻplamlari bilan alohida obyekt sifatida keladi.

Koʻp ishlab chiqaruvchilar oila fayli yonida IFC yoki DWG yuklamasini taklif qiladi. Ular toʻgʻridan-toʻgʻri oʻqiladi.

## Oila turlari

Bir nechta turga ega oila bitta element sifatida {{ui:Variant}} tanlovi bilan keladi, har bir tur uchun bitta variant. Har bir variantda turlar orasida farq qiladigan qiymatlar boʻladi va turda Kenglik va Chuqurlik boʻlsa, oʻz qutisi ham boʻladi. Bitta turdagi oila oʻsha turning qiymatlari bilan toʻldirilgan oddiy element boʻladi.

Ba'zi oilalar turlarini turlar katalogida saqlaydi: oila fayli yonida xuddi shu nomdagi `.txt` fayl. Ikkalasini birga tanlang yoki jildni tanlang; katalogning qatorlari variantlarga aylanadi.

## Oilaning maʼlumotlari haqiqiy shaklda

Agar jildda oila fayli va xuddi shu nomdagi IFC, glTF yoki OBJ fayl boʻlsa (`Chair.rfa` va `Chair.ifc`), ikkalasini birga tanlang yoki jildni tanlang. BimCraft bitta element yaratadi: oila fayli nomi, ishlab chiqaruvchi, model, parametrlar va turlarni beradi, boshqa fayl esa haqiqiy 3D shaklini. Izohlar shakl qaysi fayldan olinganini aytadi. Barcha turlar uchun bitta shakl ishlatiladi.

Oila faylida saqlangan rasm boʻlsa, elementning tafsilotlarida reja chizmasi ostida oʻsha rasm koʻrsatiladi. Rasm faqat koʻrsatiladi; elementda saqlanmaydi.

## Mening obyektlarim

{{ui:My objects}} — Kutubxonadagi shaxsiy roʻyxatingiz. Unda nima borligini faqat siz koʻra olasiz: u ommaviy kutubxonada yoʻq, qidiruvda yoʻq va jamoangizga koʻrsatilmaydi. U hisobingizga bogʻliq, shuning uchun kutubxonaga kirganingizdan keyin boshqa kompyuterda ham xuddi shu obyektlar boʻladi.

- Obyektni saqlash uchun kutubxonaga kirgan boʻlishingiz kerak. Qarang: [kutubxonaga kirish](topic:library-credits).
- Obyektni saqlash faqat shu bitta obyektni hisobingizga yuboradi. Shunga qadar u kompyuteringizda qoladi.
- {{ui:Remove from my objects}} obyektni roʻyxatdan chiqaradi. Chizmalarga joylashtirilgan nusxalar qoladi.
- Obyektni hammaga ulashish uchun uni tanlagan litsenziyangiz ostida ommaviy kutubxonaga yuklang.

:::note
My objects sinovdan oʻtkazilmoqda va hisobingiz uchun hali ochilmagan boʻlishi mumkin. Agar manba yoʻq boʻlsa yoki "My objects is not open for this account yet" (Mening obyektlarim bu hisob uchun hali ochilmagan) degan xabar chiqsa, siz baribir oʻz fayllaringizni {{ui:Files…}} bilan oʻqib joylashtirishingiz mumkin; ular model ichida saqlanadi.
:::

## Keng tarqalgan xatolar

- **Oilaning haqiqiy shaklini `.rfa` dan kutish.** Faqat uning maʼlumotlari oʻqiladi. Shakl uchun IFC eksport qiling.
- **Kutilgan bitta oʻrniga ikkita element.** Oila va uning shakl fayli faqat nomlari aniq mos kelganda (kengaytmasidan tashqari) va bir jildda joylashgan boʻlsa birlashadi.
- **Mesh minglab marta katta yoki yonboshiga yotgan holda keladi.** Faylni tanlashdan oldin {{ui:Files…}} ostida {{ui:Units of the file}} va {{ui:Up axis of a mesh}} ni oʻrnating.
- **Fayl uchun "No family data" (oila maʼlumoti yoʻq).** Bu loyiha (`.rvt` boshqa kengaytma bilan saqlangan) yoki oila shabloni, oila emas. Qarang: [Loyiha yoki oila faylini oʻqish](topic:read-rvt-file).
- **Saqlashga ruxsat berilmagan kontentni saqlash.** Ba'zi pullik kutubxonalar oʻz xizmatidan tashqarida nusxa olishga ruxsat bermaydi. Oʻzingiz yaratmagan kontentning shartlarini tekshiring.
