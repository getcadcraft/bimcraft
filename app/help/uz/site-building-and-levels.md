---
title: Hudud, unda bino va uning sathlari
summary: Hududning konturini chizing, binoni hududda joylashtiring va burang, sathlarni berilgan balandliklarda qoʻshing yoki bino balandligini boʻlib qoʻying va tanlagan sathda chizing.
keywords: hudud, sayt rejasi, qurilish chizigʻi, chekinish, servitut, yoʻl huquqi, mulk chegarasi, uchastka, yer uchastkasi, chegara, binoni joylashtirish, binoni burish, sathlar, qavatlar, pollar, sathlar qoʻshish, balandlikni boʻlish, qavatdan qavatgacha, IfcSite, IfcBuilding, IfcBuildingStorey, fazoviy tuzilma
from: 48d10c1e
---

## Nima qilasiz

IFC modelning hammasini tutadigan qismlarini sozlang: hudud, unda bino va binoning sathlari.

Model **hudud**dan iborat boʻlib, unda **bino** bor, u oʻz **sathlarini** (qavatlarni) saqlaydi; devorlar, pollar va boshqa hamma narsa sathga tegishli. {{ui:Fayl}} › {{ui:Yangi bino}} uchala qismni tayyorlaydi. Boshqa dasturdan kelgan, binosi bor, ammo hududi boʻlmagan model birinchi marta hudud chizganda hudud oladi: bino oʻsha joyida hududga joylashtiriladi.

## Hududni chizish

1. {{ui:Chizish}} ni yoqing, soʻng {{ui:Yigʻilish}} › {{ui:Hudud}} ni tanlang.
2. Hudud burchaklarini bosing (asbob Devor asbobi kabi tutashtiradi). Birinchi burchakni yana bosing, ikki marta bosing yoki tugatish uchun {{key:Enter}} ni bosing. {{key:Backspace}} bitta burchakni qaytaradi.
3. Qatorda hududning maydoni koʻrsatiladi. Oʻzgartirish uchun uni qayta chizing.

Har bir sathning rejasi hudud konturini mulk chegarasi sifatida koʻrsatadi.

## Binoni hududda joylashtirish

{{ui:Hudud}} yoqilganda binoning hududdagi **X** va **Y** ni va uning **Burilish** ini gradusda kiriting, yoki {{ui:Binoni bosish orqali joylashtirish}} ni bosing va binoning boshi tushishi kerak boʻlgan joyni bosing. Binodagi hamma narsa (sathlar, devorlar, setkalar, chizgan hamma narsangiz) u bilan birga koʻchadi; hudud va uning konturi qoladi. Rejalar har bir sathni binoga nisbatan toʻgʻri koʻrsatishda davom etadi.

## Qurilish chiziqlari va servitutlar

Qurilish chiziqlari va servitutlar (yoʻl huquqlari) hududda cheklovlar sifatida chiziladi. Ular **ogohlantiradi, hech qachon toʻsmaydi**: ustidan oʻtgan devor siz soʻraganingizdek chiziladi va devor hamda chiziq yoki servitut nomini koʻrsatuvchi ogohlantirish Muammolar da paydo boʻladi. Devorni orqaga qaytarsangiz, ogohlantirish yoʻqoladi. Ogohlantirishni sabab bilan qabul qilish mumkin (masalan, vakolatli organ bergan yengillik).

- **Chekinishlardan qurilish chizigʻi.** {{ui:Yigʻilish}} › {{ui:Qurilish chizigʻi}}, soʻng {{ui:Chekinishlar}}: chiziq hududning har bir chegarasidan qancha ichkarida turishini kiriting. Vosita yoqilgan paytda chegaralar rejada raqamlanadi. Chiziq shu masofalardan hisoblanadi va agar uni shuncha chegara bilan qayta chizsangiz, hudud konturini kuzatadi. Masofalar sizniki boʻlishi kerak, mulk hujjatingizdan yoki zonalash sxemasidan olinadi; BimCraft hech birini toʻldirmaydi.
- **Chizilgan qurilish chizigʻi.** {{ui:Qurilish chizigʻi}} yoqilganda uning nuqtalarini bosing va ikki marta bosish yoki {{key:Enter}} bilan tugating. Yopiq chiziq uchun birinchi nuqtada tugating: ichidagi maydon qurish mumkin boʻlgan joy, va undan tashqarida biror qismi bor devor haqida ogohlantiriladi. Ochiq chiziq faqat uni kesib oʻtgan devor haqida ogohlantiradi.
- **Servitut.** {{ui:Yigʻilish}} › {{ui:Servitut}}: turini tanlang, nomini, roʻyxatdagi havolasini va kengligini kiriting, soʻng markaziy chizigʻini bosing va tugating (chiziq), yoki birinchi nuqtada yoping (maydon). Undagi qismi bor har qanday devor har bir sathda haqida ogohlantiriladi.
- Chiziqqa aniq tekkan yuz kesishmaydi, tegib turadi (chegara 1 mm).
- Har bir opsiya toʻplamining joriy massa opsiyasi devorlar kabi tekshiriladi: chegaradan tashqaridagi, qurilish chizigʻi ustidagi yoki servitutdagi massa ogohlantirish oladi. Qarang: [Yonma-yon saqlangan massa variantlari](topic:massing-options).
- Tahrirlash uchun birini {{ui:Tanlash}} bilan tanlang: nomini, havolasini, turini yoki kengligini oʻzgartirish, uni siljitish yoki oʻchirish.

Chiziqlar har bir sathning rejasida, varaqlarda va reja PDF da koʻrsatiladi: qurilish chiziqlari shtrixli, servitutlar nuqtali, har biri belgisi bilan. IFC faylda har biri hududdagi annotatsiya (IfcAnnotation, turi BuildingLine yoki Servitude) boʻladi, uning chizigʻi boshqa dasturlar oʻqiy oladigan oddiy egri chiziq sifatida. Tekshiruv har bir devorning rejadagi haqiqiy konturidan, chizilgandek tutashuvlari bilan foydalanadi; egri devor esa oʻz markaziy chizigʻi atrofida oʻz qalinligi bilan tekshiriladi.

## Sathlar qoʻshish

{{ui:Sathlar}} panelida {{ui:Tepaga yangi sath qoʻshish}} bitta sath qoʻshadi, {{ui:Pastga sath qoʻshish}} eng pastdagi sath ostiga bittasini qoʻshadi (yerto'la, manfiy balandlikda). {{ui:Sathlar qoʻshish…}} bir nechtasini bir vaqtda qoʻshadi:

- **Shu balandliklarda**: eng pastki sathdan yuqoridagi balandliklarni vergul bilan ajratib kiriting (masalan `12', 24', 36'`). Sathi allaqachon boʻlgan balandliklar oʻtkazib yuboriladi.
- **Bino balandligini boʻlish**: bino balandligi va sathlar sonini kiriting. Sizda bor sathlar eng pastdan boshlab yangi balandliklariga koʻchadi, yoʻqlari qoʻshiladi va ularning ustidagilari oʻz joyida qoladi.

Yuqoridagi sathgacha borgan devorlar unga ergashadi, ustunlar va panduslar ham shunday.

{{ui:Bu sathni nusxalash…}} (xuddi shu panelda) koʻrayotgan sathingizda chizilganlarni boshqa sathga yoki tepada yangi sathga nusxalaydi, shuning uchun qavat rejasi binoda bir qadamda yuqoriga koʻtarilishi mumkin. Qarang: [Devorlarni chizish](topic:draw-walls).

## Sathda chizish

{{ui:Chizish}} ning har bir asbobi reja sathlar roʻyxatida (yoki {{ui:Sathlar}} panelida tanlangan) sathda ishlaydi: siz chizgan narsa oʻsha sathga tegishli.

## Nimani koʻrishingiz kerak

- Bu oʻzgarishlarning har biri bitta qadam: {{key:Mod+Z}} uni qaytaradi.
- IFC faylda: hudud (IfcSite) uning konturi va maydoni bilan, bino (IfcBuilding) hududga joylashtirilgan holda, va sathlar (IfcBuildingStorey) binoda.

Shuningdek qarang: [Koordinatalar (BimCraft)](topic:coordinates) — loyiha koordinata boshi va geodezik nuqta uchun.
