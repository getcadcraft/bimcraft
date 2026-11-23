---
title: AI yordamchiga modelingiz bilan ishlashga ruxsat bering
summary: Sozlamalarda yordamchilarni yoqing, shunda kompyuteringizdagi yordamchi CadCraft Studio orqali elementlarni topishi, ularning xossalarini oʻqishi, koʻrinishda ajratishi hamda devor, eshik, deraza, pol, sath va setkalarni chizishi mumkin. Siz yoqmaguningizcha oʻchiq turadi.
keywords: ai, yordamchi, mcp, skript, avtomatlashtirish, studio, elementlarni topish, ajratish, xossalar, ruxsatlar, uzish, faollik, devor chizish, eshik qoʻshish, deraza qoʻshish, sathlar, setkalar, qavatlar, ortga qaytarish, saqlash, buyruq qatori, cli, interfeyssiz, AI yordamchilar bilan ishlatish
from: 66d72742
---

## Nima oʻrganasiz

AI yordamchi (MCP tilida gaplashadigan istalgan yordamchi) ochiq IFC modelingizni qanday koʻrishi va unda chizishi, nimalarni qila olishi va qila olmasligi hamda uni qanday toʻxtatish mumkinligi.

## BimCraftda yordamchi nima qila oladi

| U soraydi | Nima sodir boʻladi | Kerak |
|---|---|---|
| Elementlarni topish | Sinf, qavat, nom yoki xossa qiymati boʻyicha elementlar roʻyxatini oladi, xuddi **Topish** kabi | Oʻqish |
| Xossalarni oʻqish | Bitta elementning atributlari, turi, xossalar toʻplamlari va miqdorlarini oladi, **Xossalar** oynasida koʻrsatilgani kabi | Oʻqish |
| Modelni tavsiflash, devorlarni roʻyxatlash | Sathlar, devorlar, eshiklar, derazalar, xonalar, polar, setkalar va ustunlarni, shuningdek har bir devorning uchlari, turi va balandligini oladi | Oʻqish |
| Ajratish, yarim shaffof qilish, yashirish yoki koʻrsatish | 3D koʻrinish {{ui:Show}} menyusidan foydalanganingizdagidek oʻzgaradi | Koʻrinishni oʻzgartirish va chizish |
| Devor, eshik, deraza, pol, sath yoki setka chiziqlarini chizish | Model {{ui:Draw}} asboblaridan foydalanganingizdagidek oʻzgaradi: devorlar birikadi, xonalar, pollar va tomlar mos ravishda kuzatadi | Koʻrinishni oʻzgartirish va chizish |
| Nom yoki xossa qiymatini oʻzgartirish | Bitta elementning Nomi, Tavsifi, Obyekt turi yoki Tegi, yoki bitta xossa qiymati. Boshqa elementlar bilan birga ishlatiladigan qiymat unga avval nusxalanadi; turining qiymati faqat yordamchi shunday deganda oʻzgaradi, chunki shu turdagi har bir element unga ergashadi | Koʻrinishni oʻzgartirish va chizish |
| Koʻchirish, oʻchirish, devor, eshik va derazalarni oʻzgartirish | Elementlar ular joylashgan narsalar bilan birga koʻchiriladi yoki oʻchiriladi; {{ui:Draw}} asboblari bilan chizilgan devorlar uchlari yoki turi boʻyicha, eshik va derazalar oʻrni, oʻlchami yoki turi boʻyicha oʻzgaradi, xonalar va birikmalar kuzatib boradi | Koʻrinishni oʻzgartirish va chizish |
| Jadval tuzish, joylashtirish va oʻqish | "Qavatlar boʻyicha eshik jadvali, yongʻinga chidamlilik va apparat bilan": yordamchi jadval nomini, ustunlarini (xossa yoki teg ustunga aylanadi) va guruhlashini belgilaydi; BimCraft uni modeldan toʻldiradi va joylashtiradi, yordamchi aytmagan narsalarni idora standartidan oladi. Tuzilma Jadvallar roʻyxatingizga qoʻshiladi. Qaytgan har bir qator oʻz elementlarini nomlaydi, shuning uchun ularni tanlash mumkin | Oʻqish uchun oʻqish; tuzilmani saqlash uchun Koʻrinishni oʻzgartirish va chizish |
| Jadvalni eksport qilish | CSV, Excel yoki tab bilan ajratilgan matn, Google Sheets ga joylashtirish uchun (hech narsa Googleʼga yuborilmaydi) | Eksport |
| Xona pardozlarini oʻqish va belgilash | Pardoz turlari, har bir xonaning poli, devori va shifti pardozi, zonalar; maydonlar, plitalar soni va tagqatlam hajmlari pardoz jadvallaridan olinadi | Oʻqish; belgilash uchun Koʻrinishni oʻzgartirish va chizish |
| Elementlarni tanlash, oʻz qadamlarini ortga qaytarish | Elementlar koʻrinishda tanlanadi; uning oxirgi qadami bekor qilinadi | Koʻrinishni oʻzgartirish va chizish |
| Saqlash | Har bir oʻzgarish bilan yangi IFC fayl, {{ui:Save as IFC}} yaratgandek (asl fayl hech qachon oʻzgartirilmaydi) | Saqlash |
| USD eksport | Ochiq modellar OpenUSD formatida (.usda, .usdc yoki .usdz), asboblar panelidagi {{ui:USD}} tugmasi yozgandek | Eksport |
| Rasm render qilish, render navbatini ishga tushirish | 3D koʻrinishning rasmi, {{ui:Render}} dialogi sozlamalaringiz bilan yaratgandek, agar boshqasini soʻramasa; yoki dialog navbatiga qoʻshilgan yuqori sifatli rasmlar ketma-ket render qilinadi (navbat WebGPU ni talab qiladi). Modelda hech narsa oʻzgarmaydi ([Rasmni render qilish](topic:render)) | Eksport |

Yordamchining har bir oʻzgarishi **Oʻzgarishlar** ichida "Yordamchi: …" nomli bitta qadam boʻlib saqlanadi (masalan, "Yordamchi: 4 ta devor qoʻshish"), shuning uchun {{key:Mod+Z}} uning butun amalini bekor qiladi va qaysi qadam kimga tegishli ekanini koʻrasiz. Oynada u fayllarni ocha olmaydi: siz modelni ochasiz, u ochiq boʻlgan model bilan ishlaydi.

## Yoqish

Yordamchilar BimCraftga kompyuteringizdagi CadCraft Studio orqali yetib boradi; oddiy brauzerda bunga yoʻl yoʻq.

1. {{ui:Settings}} ni oching va **BimCraft** yorligʻini tanlang.
2. **Yordamchilar** boʻlimida **AI yordamchilar va skriptlarga BimCraftdan foydalanishga ruxsat berish** katakchasini belgilang.
3. **Oʻqish** siz uchun belgilangan. Agar yordamchi elementlarni ajratishi, yashirishi va chizishi mumkin boʻlsa, **Koʻrinishni oʻzgartirish va chizish** ni ham belgilang; agar modelni yangi fayl sifatida saqlashi mumkin boʻlsa, **Saqlash** ni belgilang.
4. Studio da yordamchini ulang (Studio manzilni va unga qoʻyiladigan sozlamalarni koʻrsatadi).

## Yordamchi ulangan paytda

Oʻng panelning yuqori qismidagi eslatmada qaysi yordamchi ulangani va u nima qila olishi aytiladi. Seansni darhol tugatish uchun {{ui:Disconnect}} ni bosing; davom ettirish uchun u qayta ulanishi kerak.

**Faollik** (Sozlamalardagi **Yordamchilar** ostida) yordamchi qilgan har bir chaqiruvni, eng yangisi birinchi boʻlib, uning ishlagan-ishlamaganligi bilan koʻrsatadi.

:::tip
Oddiy soʻzlar bilan soʻrang, masalan: "1-qavatdagi tashqi devorlarni ajrat", "qaysi eshiklarda yongʻinga chidamlilik yoʻq?" yoki "1-qavatda janub devorida eshigi boʻlgan 6 x 4 metrli xona chiz". Yordamchi elementlarni topadi va koʻrinishingizda koʻrsatadi yoki chizadi.
:::

## Oynasiz: skriptlar va buyruq qatori

Xuddi shu chizish asboblari siz koʻrsatgan jildlardagi IFC fayllarda oynasiz ishlaydi: CadCraft MCP serveri va buyruq qatori yangi binoni boshlashi yoki IFC faylni ochishi, uni tavsiflashi, devor, eshik, deraza, pol, sath va setka qoʻshishi, bekor qilishi va yangi `.ifc` fayl sifatida saqlashi mumkin. Skriptlar uchun yana toʻrtta asbob mos keladi: `ifc_batch` 200 tagacha tahrirlash qadamini bitta qilib bajaradi (hammasi yoki hech narsa: bitta ortga qaytarish butun toʻplamni qaytaradi, rad etilgan qadam qolganini bekor qiladi va qadamni nomlaydi); `ifc_describe` sathlar va har bir devorni uning eshik va derazalari bilan roʻyxatlaydi; `ifc_render_png` oynasiz modelning tekis soyalangan tekshirish rasmini yozadi (materiallar, teksturalar va soyalarsiz); `usd_export` `.usda`, `.usdc` yoki `.usdz` yozadi. Buyruq qatorida `cadcraft bim script.json --from model.ifc -o out.ifc` qadamlar skriptini ishga tushiradi, `--usd`, `--png` va `--plan` esa xuddi shu ishlashdan USD fayl, rasm yoki reja yozadi. Qaysi jildlardan foydalanishini va biror narsani oʻzgartirish yoki saqlashiga ruxsat berish-bermasligini siz hal qilasiz.

## Oʻchirish

**AI yordamchilar va skriptlarga BimCraftdan foydalanishga ruxsat berish** katakchasini olib tashlang. Har bir yordamchi darhol uziladi va sozlama keyingi safar uchun saqlanadi.

## Shuningdek qarang

- [AI yordamchilar uchun retseptlar](common:assistants-recipes): ishlaydigan misollar, har biri chaqiradigan asboblari bilan.
- [Elementlarni sinf, nom yoki xossa boʻyicha topish](topic:find)
- [Elementlarni yashirish, ajratish va yarim shaffof qilish](topic:hide-and-isolate)
- [BimCraft sozlamalari](topic:settings)
