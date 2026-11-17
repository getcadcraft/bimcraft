---
title: Tur toʻplamlari: devor turlarini ochiq fayllar sifatida ulashish
summary: Devor turlarini qatlamlari, materiallari, teglari va tasnif kodlari hamda oilalari bilan bitta ochiq fayl (oddiy JSON yoki IFC) sifatida saqlang va boshqa loyihaga qoʻshing. Boshqa dasturdagi IFC fayllarning devor turlarini ham oʻqish mumkin.
keywords: tur toʻplami, turlar, devor turi, ulashish, eksport, import, kutubxona, ochiq format, json, ifc, IfcWallType, IfcMaterialLayerSet, IfcProjectLibrary, materiallar, qatlamlar, shablon, ofis standarti, oilalar
from: e4c91331
---

## Nima qilasiz

Devor turlaringizni bir loyihadan boshqasiga olib oʻting yoki boshqa dasturda ishlaydigan odamga bering. Tur toʻplami har bir devor turini qatlamlari, qalinliklari, materiallari, yadrosi, boʻshliqlari, qatlam ustuvorligi, ishlab chiqish darajasi, hajmlarni hisoblash maʼlumotlari va tasnif kodlari bilan saqlaydi, shuningdek qoʻshgan har qanday oilalarni. U ochiq fayl: har kim oʻqiy oladigan oddiy JSON matn yoki IFC fayl. Unda hech narsa firma, mamlakat yoki hisob bilan bogʻlanmagan.

## Loyihadan turlarni saqlash

1. Model panelidagi **Maʼlumotlar** ni oching va {{ui:Tur toʻplamlari}} ni tanlang.
2. {{ui:Bu loyihadagi turlarni saqlash}} ostida qoʻshmoqchi boʻlgan devor turlarini belgilang. Loyihaning oʻz turlari belgilangan; boshlangʻich tur qoʻshilishi mumkin va nusxa sifatida kiradi. Xohlasangiz, oilalarni ham belgilang.
3. {{ui:Toʻplam nomi}} ni kiriting.
4. {{ui:Toʻplam sifatida saqlash (.json)}} `.cctypes.json` faylni yuklab oladi. {{ui:IFC sifatida saqlash (.ifc)}} faqat turlarni saqlovchi IFC faylni yuklab oladi: har bir devor turi IfcWallType sifatida material qatlamlari toʻplami, materiallar va tasnif bilan, istalgan BIM dasturi uchun.

## Loyihaga turlar qoʻshish

1. Oʻsha dialogda {{ui:Toʻplam yoki IFC faylni ochish…}} ni tanlang va `.json` toʻplam yoki `.ifc` faylni tanlang.
2. Dialog fayl nimani saqlashini koʻrsatadi: har bir devor turi qalinligi, qatlamlar soni va kodlari bilan, materiallar va oilalar.
3. {{ui:Loyihada allaqachon mavjud tur}} bilan nima qilinishini tanlang: **Loyihanikini saqlash**, **Toʻplamdagisini nusxa sifatida qoʻshish** (yangi nomi "(2)" bilan tugaydi) yoki **Almashtirish (faqat hech bir devor ishlatmasa)**.
4. {{ui:Loyihaga qoʻshish}}. Dialog qoʻshilgan, nusxalangan, almashtirilgan yoki saqlab qolingan narsalar roʻyxatini koʻrsatadi. Bu bitta bekor qilish qadami.

Yangi turlar Devor vositasining tur roʻyxatida darhol boʻladi.

## Pol, tom va shift turlari

Saqlash uchun turlar roʻyxatida loyihaning pol, tom va shift turlari va ularning boshlangʻich nusxalari ham bor (Pol, Tom, Shift deb belgilangan). Toʻplam toʻrtala turni olib yuradi; har bir tur oʻz IFC sinfini nomlaydi (IfcWallType, IfcSlabType, IfcCoveringType). Elementlar ishlatadigan pol, tom yoki shift turi toʻplamdan almashtirilmaydi: uni tur muharririda oʻzgartiring.

## Bitta tur Kutubxona elementi sifatida

Aynan bitta turni belgilang va **Kutubxona elementi sifatida saqlash…** ni tanlang. U `.cctype.json` faylni saqlaydi: Turlar turidagi kutubxona elementi, u bitta turni olib yuradi (qatlamlari, materiallari, LOD va tasnif kodlari). Ulashish uchun uni Kutubxonaga yuklang. {{ui:Toʻplam yoki IFC faylni ochish}} ham bunday elementni oʻqiydi va uning turini toʻplam kabi loyihaga qoʻshadi.

## Bilib qoʻyish kerak

- Boshqa dasturdagi IFC faylni ham shu yerda ochish mumkin. Undagi material qatlamlari bor har bir devor turi oʻqiladi: nomi, qatlamlarning materiallari va qalinliklari hamda boʻshliq faylning oʻzidan. Qaysi qatlam yadro ekani va har bir qatlam nima qilishi (pardozlash, konstruksiya, izolyatsiya) taxmin qilinadi, tur **(taxmin)** deb belgilanadi va devor tur muharririda tekshirilishi kerak. Qatlamlari yoʻq devor turi chiqarib tashlanadi va nomi bilan koʻrsatiladi.
- Loyihada mavjud material saqlanadi. Nomi band boʻlgan yangi material nomidan keyin "(toʻplam)" oladi.
- Devorlar ishlatadigan tur toʻplamdan hech qachon almashtirilmaydi. Uni devor tur muharririda oʻzgartiring, u devorlarini toʻgʻri koʻchiradi.
- Bitta devorga qoʻyilgan kod uzatilmaydi: u oʻsha devorniki. Turga qoʻyilgan kod uzatiladi.
- Formatda boʻlmagan maydonli fayl, materiali yoʻq qatlam yoki oddiy matn boʻlmagan har qanday narsa rad etiladi va xabarda qayerda va nima uchunligi aytiladi.
- Hali qurilmagan: pol, tom va shift turlari (bu versiyada ularning turlari yoʻq: har biri oʻz qalinligiga ega), oilalardan tashqari eshik va deraza turlari, hamda boshqa dasturning fayllaridagi shtrixlar yoki ranglar.
