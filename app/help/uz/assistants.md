---
title: AI yordamchisi modelingiz bilan ishlasin
summary: Sozlamalarda yordamchilarni yoqing, shunda kompyuteringizdagi yordamchi CadCraft Studio orqali elementlarni topishi, ularning xususiyatlarini oʻqishi, koʻrinishda ajratishi va devorlar, eshiklar, derazalar, qavatlar, sathlar hamda setkalarni chizishi mumkin. Siz yoqmaguningizcha oʻchiq.
keywords: ai, yordamchi, mcp, skript, avtomatlashtirish, studio, elementlarni topish, ajratish, xususiyatlar, ruxsatlar, uzish, faoliyat, devor chizish, eshik qoʻshish, deraza qoʻshish, sathlar, setkalar, qavatlar, ortga qaytarish, saqlash, buyruq satri, cli, oynasiz, ai yordamchilari bilan ishlatish
from: c5ee595b
---

## Nimani oʻrganasiz

Qanday qilib AI yordamchisi (MCP ni tushunadigan istalgan yordamchi) siz ochiq turgan IFC modeliga qarab chiza olishi, nima qila olishi va nima qila olmasligi, hamda uni qanday toʻxtatish mumkinligi.

## BimCraft da yordamchi nima qila oladi

| U soʻraydi | Nima yuz beradi | Kerak |
|---|---|---|
| Elementlarni topish | U sinf, qavat, nom yoki xususiyat qiymati boʻyicha elementlar roʻyxatini oladi, xuddi **Topish** kabi | Oʻqish |
| Xususiyatlarni oʻqish | Bitta elementning atributlari, turi, xususiyatlar toʻplamlari va miqdorlarini oladi, xuddi **Xususiyatlar** koʻrsatganidek | Oʻqish |
| Modelni tavsiflash, devorlarni sanab chiqish | Sathlar, devorlar, eshiklar, derazalar, xonalar, qavatlar, setkalar va ustunlarni, hamda har bir devorning uchlari, turi va balandligini oladi | Oʻqish |
| Ajratish, shaffof qilish, yashirish yoki koʻrsatish | 3D koʻrinish xuddi {{ui:Koʻrsatish}} menyusidan foydalanganingizdek oʻzgaradi | Koʻrinishni oʻzgartirish va chizish |
| Devorlar, eshiklar, derazalar, qavatlar, sathlar yoki setka chiziqlarini chizish | Model xuddi {{ui:Chizish}} asboblaridan foydalanganingizdek oʻzgaradi: devorlar tutashadi, xonalar, qavatlar va tomlar ularga ergashadi | Koʻrinishni oʻzgartirish va chizish |
| Nomini yoki xususiyat qiymatini oʻzgartirish | Bitta elementning Name, Description, Object type yoki Tag qiymati, yoki bitta xususiyat qiymati. Boshqa elementlar bilan umumiy boʻlgan qiymat unga avval nusxalanadi; uning turining qiymati faqat yordamchi shuni aytgandagina oʻzgaradi, chunki shu turdagi har bir element unga ergashadi | Koʻrinishni oʻzgartirish va chizish |
| Devorlar, eshiklar va derazalarni siljitish, oʻchirish, oʻzgartirish | Elementlar oʻzi joylashgan elementlar bilan birga siljiydi yoki oʻchiriladi; {{ui:Chizish}} asboblari bilan chizilgan devorlar uchlari yoki turi boʻyicha, eshiklar va derazalar oʻrni, oʻlchami yoki turi boʻyicha oʻzgaradi, xonalar va tutashuvlar ularga ergashadi | Koʻrinishni oʻzgartirish va chizish |
| Jadvalni sozlash, tartiblash va oʻqish | "Qavat boʻyicha eshiklar jadvali, yongʻinga chidamlilik va furnitura bilan": yordamchi jadval nomini, uning ustunlarini (xususiyat yoki belgi ustunga aylanadi) va guruhlanishini aytadi; BimCraft uni modeldan toʻldiradi va joylashtiradi, yordamchi aytmagan narsani idora standartidan oladi. Sozlash {{ui:Jadvallar}} roʻyxatingizga qoʻshiladi. Qaytib kelgan har bir qator oʻz elementlarini nomlaydi, shuning uchun ularni tanlashi mumkin | Oʻqish — oʻqish uchun; sozlashni saqlash uchun Koʻrinishni oʻzgartirish va chizish |
| Jadvalni eksport qilish | CSV, Excel yoki Google Sheets ga joylashtirish uchun tab bilan ajratilgan matn (hech narsa Google ga yuborilmaydi) | Eksport |
| Xona pardozlarini oʻqish va belgilash | Pardoz turlari, har bir xonaning pol, devor va shift pardozi, zonalar; keyin maydonlar, plitalar soni va asos hajmlari pardoz jadvallaridan olinadi | Oʻqish; belgilash uchun Koʻrinishni oʻzgartirish va chizish |
| Elementlarni tanlash, oʻz qadamlarini ortga qaytarish | Elementlar koʻrinishda tanlanadi; uning oxirgi qadami ortga qaytariladi | Koʻrinishni oʻzgartirish va chizish |
| Saqlash | Barcha oʻzgarishlar bilan yangi IFC fayli, {{ui:IFC sifatida saqlash}} yaratganidek (asl fayl hech qachon oʻzgarmaydi) | Saqlash |
| USD eksport qilish | Ochiq modellar OpenUSD (.usda, .usdc yoki .usdz) sifatida, asboblar panelidagi {{ui:USD}} yozganidek | Eksport |
| Rasm render qilish, render navbatini ishga tushirish | 3D koʻrinishning rasmi, xuddi {{ui:Render}} oynasi Render sozlamalaringiz bilan yaratganidek, agar boshqasini soʻramasa; yoki sifatli rasmlar oynaning navbatiga qoʻshilib, ketma-ket render qilinadi (navbat WebGPU ni talab qiladi). Modelda hech narsa oʻzgarmaydi ([Rasmni render qilish](topic:render)) | Eksport |

Yordamchi qiladigan har bir oʻzgarish **O'zgarishlar** da bitta qadam boʻladi, nomi "Assistant: …" (masalan "Assistant: add 4 walls"), shuning uchun {{key:Mod+Z}} uning butun harakatini ortga qaytaradi va qaysi qadam kimniki ekanini koʻrishingiz mumkin. Oynada u fayllarni ocha olmaydi: siz modelni ochasiz; u ochiq modeli bilan ishlaydi.

## Yoqish

Yordamchilar BimCraft ga kompyuteringizdagi CadCraft Studio orqali kiradi; oddiy brauzerning kirish yoʻli yoʻq.

1. {{ui:Sozlamalar}} ni oching va **BimCraft** yorligʻini tanlang.
2. **Yordamchilar** ostida **AI yordamchilari va skriptlarga BimCraft ni ishlatishga ruxsat berish** ni belgilang.
3. **Oʻqish** siz uchun belgilangan. Yordamchi elementlarni ajratish, yashirish va chizishi mumkin boʻlsa, **Koʻrinishni oʻzgartirish va chizish** ni ham belgilang, va modelni yangi fayl sifatida saqlashi mumkin boʻlsa **Saqlash** ni.
4. Yordamchini Studio da ulang (Studio manzilni va uning ichiga joylashtirish kerak boʻlgan sozlamalarni koʻrsatadi).

## Yordamchi ulangan paytda

Oʻng panelning yuqorisida izoh qaysi yordamchi ulanganini va u nima qila olishini aytadi. Seansni darhol tugatish uchun {{ui:Uzish}} ni bosing; davom etish uchun u qayta ulanishi kerak.

**Faoliyat**, Sozlamalarda **Yordamchilar** ostida, yordamchi qilgan har bir chaqiruvni eng yangisi birinchi boʻlib, ishlaganmi-yoʻqmi koʻrsatib roʻyxatlaydi.

:::tip
Oddiy soʻzlar bilan soʻrang, masalan "1-qavatdagi tashqi devorlarni ajrat", "qaysi eshiklarda yongʻinga chidamlilik yoʻq?" yoki "1-qavatda 6 x 4 metrli xona chiz, janubiy devorda eshik bilan". Yordamchi elementlarni topadi va ularni koʻrinishingizda koʻrsatadi yoki chizadi.
:::

## Oynasiz: skriptlar va buyruq satri

Xuddi shu chizish asboblari siz nomlagan jildlardagi IFC fayllarida, hech qanday oyna ochilmasdan ishlaydi: CadCraft ning MCP serveri va buyruq satri yangi bino boshlashi yoki IFC faylini ochishi, uni tavsiflashi, devorlar, eshiklar, derazalar, qavatlar, sathlar va setkalar qoʻshishi, ortga qaytarishi va yangi `.ifc` fayl sifatida saqlashi mumkin. Qaysi jildlardan foydalanishi mumkinligini va biror narsani oʻzgartirish yoki saqlash huquqi borligini siz hal qilasiz.

## Oʻchirish

**AI yordamchilari va skriptlarga BimCraft ni ishlatishga ruxsat berish** ning belgisini olib tashlang. Har bir yordamchi darhol uziladi, sozlama keyingi safar uchun saqlanadi.

## Shuningdek qarang

- [AI yordamchilari uchun retseptlar](common:assistants-recipes): har biri chaqiradigan asboblari bilan ishlangan misollar.
- [Elementlarni sinf, nom yoki xususiyat boʻyicha topish](topic:find)
- [Elementlarni yashirish, ajratish va shaffof qilish](topic:hide-and-isolate)
- [BimCraft sozlamalari](topic:settings)
