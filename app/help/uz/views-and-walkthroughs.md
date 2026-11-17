---
title: Koʻrinishlar va yurishlarni saqlash
summary: Modelning kamera koʻrinishlarini nomi bilan saqlang, ularga qayting, ularni ketma-ket ijro eting va bino boʻylab yurishni yozib olib, keyin uni ijro eting.
keywords: koʻrinishlar, saqlangan koʻrinishlar, kamera, kameralar, nuqtai nazar, sahna, sahnalar, sayohat, taqdimot, yurish, aylanib yurish, yozib olish, ijro etish, yoʻl, animatsiya
from: 3af19a36
---

{{ui:Koʻrinishlar}} asboblar panelida modelning faylida 3D koʻrinish kameralarini saqlaydi, shunda siz va unga yuborgan odam ularga toʻgʻri qaytishi mumkin.

## Koʻrinishni saqlash

1. 3D koʻrinishni sozlang: aylantiring, kattalashtiring, kerakmas narsalarni yashiring.
2. {{ui:Koʻrinishlar}} ni bosing, nom kiriting (yoki taklif qilingan nomni qoldiring) va {{ui:Koʻrinishni saqlash}} ni yoki {{key:Enter}} ni bosing.

Roʻyxatdagi nom bilan saqlash shu koʻrinishni yangilaydi. Koʻrinish nomini bosing — kamera u yerga silliq koʻchadi.

Yuqoriga va pastga tugmalari tartibni oʻzgartiradi, qalam nomini oʻzgartiradi, savat oʻchiradi. Har bir oʻzgarish bitta qadam, shuning uchun {{key:Ctrl+Z}} uni ortga qaytaradi.

## Koʻrinishlarni ijro etish

{{ui:Koʻrinishlarni ijro etish}} roʻyxat tartibida birdan keyingisiga oʻtadi, har birida bir lahza toʻxtab. {{key:Esc}} yoki {{ui:Toʻxtatish}} uni tugatadi.

## Yurishni yozib olish

1. [Yurish](topic:walk) ni yoqing va bino ichida yurishni boshlang.
2. {{ui:Koʻrinishlar}} da {{ui:Yurishni yozib olish}} ni bosing.
3. {{key:W}} {{key:A}} {{key:S}} {{key:D}} bilan yuring va sichqoncha bilan atrofga qarang.
4. {{ui:Yozib olishni toʻxtatish}} ni bosing. Yurish "Yurish 1" nomi bilan, uzunligi bilan saqlanadi.

Yurish nomini bosing, uni yurganingizdek ijro eting. {{key:Esc}} uni toʻxtatadi.

## Yurishni video sifatida render qilish

Yurish yonidagi plyonka belgisini bosing. Video dialogi yurishning har bir kadrini siz oxirgi tanlagan Render sozlamalari bilan chizadi, bu yerda tanlagan oʻlcham, kadr tezligi va sifat bilan. Uni WebM yoki MP4 video sifatida, yoki har bir kadr uchun bitta tasvirli ZIP sifatida saqlang. Kadrlar tasvirlar kabi vaqt oladi, shuning uchun {{ui:Tez}} bilan boshlang.

## Yurishga izoh berish

Yurish yonidagi nutq pufagi belgisini bosing. Har bir aytilgan narsa uchun bir qator yozing va har qatorni u boshlanadigan vaqt bilan boshlang (`12`, `0:12` yoki `1:02.5`); vaqtsiz qator yuqoridagi qatordan keyin, uni aytish uchun ketgan vaqtdan keyin boshlanadi. Tilni tanlang — tomoshabin kim boʻlsa, mijozning tilida. {{ui:Oldindan koʻrish}} soʻzlarni shu kompyuterning oʻz ovozi bilan ijro etadi va subtitr sifatida koʻrsatadi; yurish har safar ijro etilganda ham shunday boʻladi. {{ui:Yurish bilan saqlash}} izohni yurish bilan IFC da saqlaydi.

Oʻzingizning ulangan yordamchingiz izohni siz uchun yozishi mumkin: unga yurish va saqlangan koʻrinishlarni koʻrib chiqishni soʻrang, va u qatorlarni siz nomlagan tilda bitta ortga qaytarish qadami sifatida qoʻyadi.

Render qilingan videoda oʻz ovozi yoʻq, chunki brauzer oʻz ovozini yozib ololmaydi. Subtitrlarni (`.srt` yoki `.vtt`) saqlang va ularni videoga video pleyeringiz yoki muharriringizda qoʻshing. Qaysi ovozlarni tanlash mumkinligi kompyuterga bogʻliq: ovozi oʻrnatilmagan til ham subtitrlarni oladi.

## Faylda

Koʻrinishlar va yurishlar IFC da loyihada `CadCraft_Views` xossalar toʻplami sifatida saqlanadi: boshqa dasturlar eʼtibor bermaydigan oddiy IFC. Ular birinchi modelning koordinatalarida, shuning uchun model qayta yuklangandan yoki boshqa model qoʻshilgandan keyin ham mos keladi.

:::tip
Saqlangan koʻrinishdan tasvir render qilish uchun koʻrinishga oʻting, keyin [Render](topic:render) ni bosing.
:::
