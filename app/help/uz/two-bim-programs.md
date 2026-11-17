---
title: Ikki BIM dastur oʻrtasida ishlash
summary: Modelni bir BIM dasturidan boshqasiga IFC orqali yuboring, BimCraft oʻrtada: uning GlobalId, xususiyatlar toʻplamlari va tasniflarini saqlang, ikkala dasturni bir xil xususiyatlar uchun sozlang va qaytib kelganini koʻring.
keywords: ifc, aylanma yoʻl, oʻzaro ishlash, globalid, guid, xususiyatlar toʻplamlari, psets, tasniflar, umumiy parametrlar, xususiyatlarni xaritalash, tarjimon, bcf, muvofiqlashtirish, almashinuv
from: 9f224176
---

## Nima qilasiz

Modelni bir BIM dasturidan boshqasiga, masalan Revitʼdan Archicadʼga va orqaga, IFC orqali koʻchiring; BimCraft oʻrtada tekshirish, qoʻshish va nima saqlanib qolganini hisobot qilish uchun turadi. Hech bir dasturning oʻz fayl formati oʻqilmaydi: hammasi IFC orqali yuradi.

## BimCraft nimani saqlaydi

BimCraftʼda modelni oʻzgartirib, {{ui:IFC sifatida saqlash}} ni bossangiz, oʻzgartirmagan har bir qator aynan oʻsha holicha qayta yoziladi. Shunday qilib:

- **GlobalId** lar oʻzgarmaydi, va boshqa dastur har bir elementni yuborgan elementi bilan moslashtiradi.
- **Xususiyatlar toʻplamlari** va ularning qiymatlari saqlanadi, siz oʻzgartirgan qiymatlardan tashqari.
- **Tasniflar** oʻz elementlariga biriktirilgan holda qoladi.

## Ikkala dasturni bir xil xususiyatlar uchun sozlang

1. Modelni BimCraftʼda oching (va agar loyiha toʻplami boʻlsa, uni ham: uning xususiyatlar guruhlari qoʻshiladi).
2. Chap panelda {{ui:Ikki BIM dastur orasida}} ni oching.
3. **Xususiyatlarni xaritalash** ostida har bir dasturga kerakli narsani yuklab oling:
   - {{ui:Umumiy parametrlar}}: umumiy parametrlar fayli. Revitʼda uni Boshqarish › Umumiy parametrlar orqali yuklang va parametrlarni kerakli kategoriyalarga qoʻshing.
   - {{ui:IFC eksport xususiyatlari toʻplamlari}}: foydalanuvchi aniqlagan xususiyatlar toʻplami fayli. Revitʼning IFC eksport sozlamalarida uni foydalanuvchi aniqlagan xususiyatlar toʻplamlari ostida tanlang, shunda eksport qilingan IFC bir xil toʻplam va xususiyat nomlarini olib yuradi.
   - {{ui:Xaritalash jadvali (CSV)}}: har bir xususiyat, uning IFC toʻplami va nomi, turi va har bir dasturdagi mos nomlar. Archicadʼning xaritalash fayllari nashr etilgan format emas, shuning uchun uning IFC tarjimoni va xususiyatlar boshqaruvchisini bu jadvaldan qoʻlda sozlang.
   - {{ui:Xaritalash fayli}}: butun xaritalash bitta fayl sifatida, loyiha bilan birga saqlash uchun.

Standart toʻplamlar (Pset_ va Qto_) umumiy parametrlar faylidan chiqarib tashlanadi: ikkala dastur ularni oʻz maʼlumotlaridan yozadi.

## Modelni yuborish va qaytarib olish

1. Birinchi dasturdan IFC eksport qiling, GlobalId lar saqlangan holda (Revit: "Store the IFC GUID in an element parameter after export" yoqilgan boʻlsin).
2. BimCraftʼda oching, tekshiring ({{ui:Model tekshiruvi}}, {{ui:Toʻqnashuvni tekshirish}}), muammolarni qoʻshing ({{ui:Muammolar}}, BCF), kerak boʻlsa qiymatlarni oʻzgartiring va {{ui:IFC sifatida saqlash}} ni bosing.
3. Saqlangan IFC ni ikkinchi dasturda oching, unda ishlang va u yerdan GlobalId lar saqlangan holda IFC eksport qiling (Archicad tarjimoni: "Global Unique Identifiers: Keep existing").
4. BimCraftʼga qaytib, yuborilgan modelni oching, soʻng qaytib kelganini qoʻshing ({{ui:Model qoʻshish}} Modellar ostida).
5. {{ui:Ikki BIM dastur orasida}} da **Yuborilgan** va **Qaytib kelgan** ni tanlang va {{ui:Hisobot tuzish}} ni bosing.

## Hisobotni oʻqish

- **Elementlar**: qancha element bir xil GlobalId bilan qaytgan, qancha yoʻqolgan va qancha yangi. Yangi GlobalId li elementlar bir yoʻqolgan va bir yangi boʻlib koʻrinadi: boshqa dastur uni saqlamagan.
- **IFC sinfi oʻzgargan**: boshqa turdagi element boʻlib qaytgan elementlar.
- **Saqlangan xususiyat qiymatlari**: oʻzgarishsiz qaytgan qiymatlar ulushi. Pastdagi roʻyxatda eng koʻp oʻzgargan yoki yoʻqolgan qiymatli xususiyatlar koʻrsatiladi.
- **Tasniflar**: saqlangan, oʻzgargan (xuddi shu tizim, boshqa kod) yoki yoʻqolgan.

{{ui:Hisobotni yuklab olish (CSV)}} har bir xususiyatni hisoblari bilan beradi. Qaysi elementlar koʻchgani yoki shakli oʻzgarganini koʻrish uchun bir xil ikki modelda {{ui:Versiyalarni solishtirish}} dan foydalaning.

:::note
BimCraft ikkala dasturdan birortasini ham ishga tushirmaydi. Qaysi sozlamalar qiymatni olib oʻtishi har bir dasturning IFC sozlamalariga bogʻliq: hisobot haqiqatda nima qaytganini koʻrsatadi, shuning uchun bir sozlamani sinab koʻring, qayta eksport qiling va solishtiring.
:::

## Muammolar BCF sifatida uzatiladi

BimCraftʼda koʻtargan muammolaringiz BCF sifatida eksport qilinadi ({{ui:Muammolar}}), uni ikkala dastur ham oʻzining BCF vositalari bilan oʻqiy oladi, shuning uchun element haqidagi savol boshqa dasturda ishlayotgan odamga koʻrinishi bilan yetib boradi.

Shuningdek qarang: [Loyiha toʻplamini ochish](topic:open-project-bundle), [Loyiha fayldan BimCraftʼga IFC orqali](topic:rvt-to-ifc) va [Model ikki versiyasini solishtirish](topic:compare-versions).
