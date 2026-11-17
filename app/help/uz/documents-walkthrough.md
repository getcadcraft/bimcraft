---
title: Hujjatlar va qayta koʻrib chiqishlar (ombor)
summary: Haqiqiy ish boʻyicha bosqichma-bosqich yoʻriqnoma: loyiha jildidagi IFC modellarini nazoratga olish, modelni olish, oʻzgartirish, izoh bilan qaytarib joylash, koʻrib chiqishga yuborish, tasdiqlash va chiqarish, tarixi va nima ishlatishini koʻrish, ikkinchi shaxs qulflangan paytda nimani koʻradi va bulutli jildlar bilan qanday ishlashi.
keywords: ombor, hujjatlar, yoʻriqnoma, qoʻllanma, olish, qaytarib joylash, qayta koʻrib chiqish, chiqarish, tasdiqlash, qulf, tarix, nima ishlatadi, qayerda ishlatilgan, ifc, model, bulutli jild, loyiha jildi, ikki kishi, umumiy jild
from: 0a753f25
---

## Nima qilasiz

Siz Ana, Riverside Clinic ustida kollegangiz Ben bilan ishlayapsiz. Loyihaning IFC modellari bir jildda yashaydi, unga ikkalangiz ham kira olasiz (umumiy disk, sinxronlangan jild yoki bulutli jild). Oxirida bitta fayl birinchi nusxasidan chiqarilgan **A** qayta koʻrib chiqishigacha yoʻl bosadi, yana **B.1** sifatida oʻzgartiriladi, siz kim nima qilganini koʻrasiz va faylni ushlab turganingizda Ben nimani koʻrishini bilib olasiz.

Hamma narsa fayllaringiz yonidagi yashirin `.ccvault` jildida saqlanadi: server yoʻq, hech narsa yuklanmaydi (bulutli jild istisno, oxirgi qadamga qarang). Har bir tugma va qoida bir joyda: mavzu *Hujjatlar: olish, qayta koʻrib chiqishlar va chiqarish*, ilovangizda bor boʻlgan joyda.

## 1. Loyiha jildini sozlang

1. Boshlash ekranida {{ui:Jild ochish}} yonidagi {{ui:Hujjatlar}} ni tanlang yoki **Fayl** menyusidagi {{ui:Hujjatlar…}} ni tanlang.
2. {{ui:Loyiha jildini tanlang}} ni tanlang va loyihaning IFC modellarini saqlaydigan jildni tanlang. (Loyiha jildlari Studio da va jild ochishi mumkin boʻlgan brauzerlarda, masalan Chrome va Edge da ishlaydi. Boshqa brauzerlarda panel buni aytadi.)
3. **Siz:** yonidagi {{ui:Oʻzgarish}} ni tanlang va ismingizni kiriting, `Ana` (soʻralsa, bu kompyuterning nomini ham). Panelda endi *Siz: Ana, kompyuter* yozuvi chiqadi. Ismingiz siz qilgan hamma narsaga yoziladi.
4. {{ui:Bu jildda hujjatlar omborini boshlash}} ni tanlang va loyiha nomini kiriting, `Riverside clinic`. Panelda *Hujjatlar ombori Riverside clinic uchun boshlandi.* deb yoziladi.

## 2. Faylni nazoratga oling

1. **Ombordan tashqaridagi fayllar** ni oching va `models/House.ifc` yonidagi {{ui:Qoʻshish}} ni tanlang.
2. U **Ombordagi fayllar** ostida **A.1** qayta koʻrib chiqishi bilan, **Ishlanmoqda** holatida chiqadi. A.1 uning birinchi nusxasi; ombor har bir qayta koʻrib chiqishning nusxasini saqlaydi.

## 3. Olish, oʻzgartirish, qaytarib joylash

1. `models/House.ifc` yonidagi {{ui:Ochiq}} ni tanlang. Model BimCraftda ochiladi va panel yopiladi, shunda uni koʻrasiz. Panelni yana {{ui:Hujjatlar}} dan oching.
2. Panelni yana oching va {{ui:Olish}} ni tanlang. Qator endi **Siz tomonidan olingan** deydi. `.ccvault/locks` da qulf fayli yaratildi; siz uni qaytarib joylamaguningizcha hech kim bu faylni ola olmaydi.
3. Modelni oʻzgartiring: devorni koʻchiring, eshik qoʻshing. Model sizga olinmagan boʻlsa, {{ui:Saqlash}} rad etiladi va sababini aytadi; {{ui:Boshqacha saqlash}} har doim sizning nusxangiz uchun ishlaydi.
4. Panelni oching, {{ui:Qaytarib joylash}} ni tanlang va nima oʻzgarganini yozing (`Eshikni koʻchirdi`). Panel *A.2 sifatida qaytarib joylandi* deydi. Loyiha jildidagi fayl endi siz ochgan model va qulf yoʻqoladi. Oʻzgarishsiz qaytarib joylash qayta koʻrib chiqishni saqlab qoladi.

Fikringizdan qaytsangiz, {{ui:Olishni bekor qilish}} faylni yangi qayta koʻrib chiqishsiz qaytaradi.

## 4. Koʻrib chiqish va chiqarish

1. {{ui:Koʻrib chiqishga yuborish}} ni tanlang. Holat **Koʻrib chiqishda** boʻladi va fayl faqat oʻqish uchun boʻladi.
2. Tasdiqlashdan oldin {{ui:Loyiha sozlamalari}} ni tanlang va kim tasdiqlay olishini roʻyxatlang (har qatorda bitta ism), masalan `Ben` va `Carla`, va muallifdan boshqa birov tasdiqlashi kerak degan qoidani belgilang. {{ui:Sozlamalarni saqlash}} ni tanlang. Endi ombornining oʻzi boshqa birovni rad etadi.
3. Ben (yoki Carla) {{ui:Tasdiqlash}} ni tanlaydi va tasdiqlovchining ismini kiritadi. Holat **Chiqarilgan** boʻladi, qayta koʻrib chiqish esa **A** boʻladi, *tasdiqlagan* va ism bilan. Chiqarilgan fayl faqat oʻqish uchun. {{ui:Qaytarib yuborish}} uni sabab bilan Ishlanmoqda holatiga qaytarardi.

Tasdiqlovchining ismi panelda kiritilgan ism; u kim imzo qoʻyganining yozuvi, shaxsning isboti emas.

## 5. Yangi qayta koʻrib chiqish

1. Chiqarilgan faylda {{ui:Yangi qayta koʻrib chiqish}} ni tanlang. Siz keyingi harfni band qilasiz.
2. Uni oʻzgartiring, soʻng {{ui:Qaytarib joylash}} ni tanlang. Qayta koʻrib chiqish **B.1**, ishlanmoqda boʻladi. Xuddi shunday chiqaring, u **B** boʻladi. Birinchi qaytarib joylashdan oldin {{ui:Olishni bekor qilish}} uni **A** da qoldiradi.

Qayta koʻrib chiqish harflari A, B … Z, AA, AB tartibida ketadi. Agar standartingiz baʼzi harflarni tashlab ketsa, *ASME Y14.35 ketma-ketligidan foydalanish* loyiha sozlamasi keyingi qayta koʻrib chiqishlarda I, O, Q, S, X va Z ni tashlab ketadi.

## 6. Nima boʻlganini koʻring

Faylning nomini tanlab, tafsilotlarini oching:

- **{{ui:Tarix}}**: har bir voqea, eng yangisi birinchi, kim, qaysi kompyuterda va qachon: Ana tomonidan *A.2 qaytarib joylandi*, Ben tomonidan *Chiqarildi* va hokazo.
- **{{ui:Qayta koʻrib chiqishlar}}**: qayta koʻrib chiqishlar jadvali: saqlangan har bir qayta koʻrib chiqish, sanasi, kim qaytarib joylagani, izohi va kim tasdiqlagani bilan. Ombor har birining nusxasini `.ccvault/revs` da saqlaydi.
- **{{ui:Ishlatiladi}}**: IFC modeli koʻrsatadigan hujjatlar.
- **{{ui:Foydalanadi}}**: bu fayl koʻrsatadigan har bir modelni ombordan roʻyxatlaydi.

## Boshqa hujjatlarga ishora qiluvchi modellar

Jilddagi boshqa hujjatlarga (chizmalar, jadvallar) ishora qiladigan IFC modeli ularni **Ishlatiladi** ostida koʻrsatadi, va ularning har biri modelni **Foydalanadi** ostida koʻrsatadi. Hujjatni qaytarib joylasangiz, qaysi modellar unga ishora qilayotganini koʻrasiz.

## 7. Siz faylni ushlab turganingizda Ben nimani koʻradi

Endi faylni yana oling va Benga xuddi shu loyiha jildini kompyuterida ochib, panelni ochishni ayting. Fayl qatorida u **Ana tomonidan olingan** (uning kompyuterida), **boshlanish vaqti** koʻradi va {{ui:Olish}} tugmasi yoʻq. Agar baribir urinsa, ombor rad etadi: qulf tizim ikki marta yarata olmaydigan fayl, shuning uchun hatto bir soniyada ham ikki kishi faylni ushlay olmaydi, jild Studio da diskda boʻlganda. (Brauzerda jild faqat eng yaxshi harakatga ruxsat beradi va panel buni **Jild** ostida aytadi.)

Agar Ana uzoqda boʻlsa va Benga fayl kerak boʻlsa, {{ui:Olishni buzish}} uni boʻshatadi. U sabab yozishi kerak; u jurnalga kimning olishi ekanligi bilan yoziladi. Loyiha administratorlarni sanab oʻtsa, faqat ular buzishi mumkin. Eskirish chegarasidan (standart boʻyicha 14 kun) oldingi olish *uzoq vaqt* deb belgilanadi. Buzilgandan keyin Ananing kechikkan qaytarib joylashi rad etiladi, shuning uchun ikkalangiz bir-biringizning ustiga yoza olmaysiz.

## 8. Bulutli jildlar

Bulutli jild — jamoangizning bulut xotirasida saqlanadigan loyiha jildi, shuning uchun jamoaga umumiy disk kerak emas. Studio da, CadCraft hisobingizga kirganingizda, panelda {{ui:Bulutli jildni ochish}} {{ui:Loyiha jildini tanlang}} yonida chiqadi. Uni tanlang va jildni tanlang, u ish maydoni / jild koʻrinishida roʻyxatlanadi. Avval ish maydoni egasi jildni yaratadi va jamoaning bulut xotirasi faol boʻlishi kerak. Yuqoridagi hamma narsa xuddi shunday ishlaydi; server qulfni yaratadi, u odamlar orasida qat’iy. Hisobingizga kirmagan boʻlsangiz, panel kirishni aytadi. Oddiy brauzer yorligʻida bulut tugmasi taklif etilmaydi: Studio dan foydalaning.

## Sinab koʻring

Yuqoridagi sakkiz qadamning hammasini haqiqiy faylning nusxasi bilan bajaring. Ikki kishilik qadamlar uchun yana bir kishi kerak, yoki ikki oynada ikki ism. Haqiqiy umumiy jild bilan sinasangiz, Jamoa sinovi sahifasida aynan shuni soʻraydigan tekshiruv bor va natijalarni qabul qiladi.
