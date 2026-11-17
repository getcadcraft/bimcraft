---
title: Devorlar, pollar va tomlarga material boʻyash
summary: Elementlarga gʻisht, siding, shifer, yogʻoch yoki plitka kabi material bering — butun elementga yoki uning bir tomoniga — IFC da saqlanadi va renderlangan rasmlarda koʻrsatiladi.
keywords: boʻyash, material, materiallar, pardoz, pardozlar, tekstura, gʻisht, siding, shifer, tomqoplama, yogʻoch, tosh, plitka, beton, shtukatur, oʻt, shagʻal, shisha, metall, devor tomoni, ichki, tashqi, pol pardozi, xona, sirt uslubi
from: fbfed676
---

{{ui:Boʻyash}} asboblar panelida 3D koʻrinish ustida material kutubxonasini ochadi: gʻisht va blok, siding, tomqoplama, yogʻoch, tosh, plitka, beton, shtukatur, yer, shisha va metall.

## Elementlarni boʻyash

1. {{ui:Boʻyash}} ni bosing.
2. Materialni bosing.
3. 3D koʻrinishda elementlarni bosing. Har bir bosish bosgan elementni boʻyaydi.

Koʻplab elementlarni bir vaqtda boʻyash uchun avval ularni tanlang (bosing, {{key:Ctrl}}+bosing yoki [qidiruv](topic:find)), keyin materialni bosing: har bir tanlangan element bir qadamda uni oladi.

Element 3D koʻrinishda materialning rangini darhol koʻrsatadi. Uning teksturasi [renderlangan rasmda](topic:render) koʻrinadi. {{key:Esc}} yoki {{ui:Yopish}} boʻyashni tugatadi.

## Bir tomonini boʻyash

{{ui:Faqat bosilgan tomon}} ni tanlang, keyin kerakli tomonni bosing: devorning tashqi tomonini sidingda va ichki tomonini boshqa pardozda, pol yuqori tomonini yogʻochda, pastki tomoni oʻzgarishsiz qoladi. Elementning qolgan qismi oʻz materialini saqlaydi.

Tomon elementning oʻz yoʻnalishlari boʻyicha topiladi, shuning uchun uni koʻchirsangiz yoki burganingizda ham oʻsha tomon boʻlib qoladi.

Polni xonama-xona boʻyash uchun har bir xonaga oʻz poli bering ({{ui:Chizish}} › {{ui:Pol}} › **Bu xona**, qarang: [Xonalar, pollar, shiftlar va tomlar](topic:floors-and-roofs)), keyin har bir polning yuqori tomonini boʻyang.

## Materialni olib tashlash

Chiziqli rangli namunani ({{ui:Material yoʻq}}) bosing, keyin elementni bosing. Undagi barcha materiallar, tomonlari bilan birga, olib tashlanadi.

## Faylda

Boʻyash IFC ni oʻzgartiradi (har bir qadam alohida, {{key:Ctrl+Z}} uni bekor qiladi) va oddiy IFC boʻlib qoladi:

- har bir boʻyalgan element oʻz materialini nomlovchi `CadCraft_Render` xossalar toʻplamini, va har bir boʻyalgan tomon uchun bitta xossani oladi;
- uning jismi materialning rangi bilan sirt uslubini oladi, shuning uchun boshqa BIM dasturlari rangni koʻrsatadi. IFC4 da uslub teksturani ham nomlaydi.

BimCraft siz boʻyagan devorni qayta shakllantirsa (masalan, uning uchini surganingizda), devor oʻz materialini va rangini saqlaydi: BimCraft da, rasmlarda va boshqa dasturlarda.

:::note
Teksturalarni BimCraft oʻzi chizadi: ular oflaynda ishlaydi va istalgan maqsadda bepul foydalanish mumkin (CC0). Oʻzingizning rasmli teksturalaringiz hali qoʻllab-quvvatlanmaydi.
:::

## Teksturalar 3D koʻrinishda

Boʻyalgan gʻisht devor oʻz gʻishtlarini, yogʻoch pol esa taxtalarini haqiqiy oʻlchamida koʻrsatadi — boʻyoq qoʻyilishi bilanoq. Tekis ranglarni koʻrish uchun Boʻyash palitrasida **3D koʻrinishda teksturalarni koʻrsatish** belgisini olib tashlang (juda katta model ularni oʻzi oʻchiradi va buni aytadi). Xossa boʻyicha rang doim oʻz ranglarini koʻrsatadi. Teksturalar dastur tomonidan chiziladi, shuning uchun hech narsa yuklanmaydi; renderlar va glTF fayl ularni baribir oʻz ichiga oladi.
