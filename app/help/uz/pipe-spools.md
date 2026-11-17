---
title: Poʻlat quvur spullari va spul varaqlari
summary: Poʻlat uchma-uch payvandli quvur trassasini eng uzun uzunlik boyicha va siz qoʻygan montaj payvandlari boʻyicha spullarga kesing, ularni raqamlang va har bir spul uchun varaqni (3D koʻrinish, kesish uzunliklari, fittinglar, payvandlar, materiallar roʻyxati) PDF va CSV sifatida yuklab oling; kanallar uchun toʻgʻri boʻlaklar kesish roʻyxati olinadi.
keywords: spul, spullar, spul varaqlari, izometrik, tayyorlash, oldindan tayyorlash, montaj payvandi, ustaxona payvandi, uchma-uch payvand, kesish uzunligi, kesish roʻyxati, materiallar roʻyxati, bom, poʻlat quvur, jadval 40, liniya raqami, havo kanali kesish roʻyxati, kanal boʻlaklari
from: 539f51de
---

## Nima qilasiz

Poʻlat quvur trassasini ustaxonada payvandlanadigan va montajchi oʻrnatadigan boʻlaklarga aylantirasiz: tanlagan uzunlikdan uzun boʻlmagan spullar, siz qoʻygan montaj payvandlarida boʻlinadi, har biri oʻz varagiga ega.

Spullarga faqat **poʻlat uchma-uch payvandli quvur** kesiladi (quvur oʻlchamlari ASME B36.10M, tirsaklar ASME B16.9 uzun radiusli). Mis, PVX va PEX birikmalari uchma-uch payvand emas, shuning uchun ularning trassalarida spullar yoʻq.

## Trassani spullarga kesish

1. Poʻlat quvur trassasini tanlang. Xossalarda **Cut into spools** ni belgilang.
2. **Longest spool**: bitta spul boʻlishi mumkin boʻlgan markaziy chiziq boʻyicha eng katta uzunlik (dastlab 6 m, taxminan 20 ft).
3. **Line number**: har bir spul raqamining bir qismi. Yangi spullangan trassa tizimining keyingi boʻsh raqamini oladi.

Spullar trassa boshidan boshlab tartib bilan raqamlanadi: `CHW-12-S01`, `CHW-12-S02` … (tizim, liniya raqami, spul). Spul qism-qism boʻlib oʻsadi; uni juda uzun qiladigan qism keyingi spulni boshlaydi, spuldan uzunroq toʻgʻri uzunlik esa spul toʻlgan joyda kesiladi.

## Montaj payvandlarini qoʻyish

1. {{ui:Build}} ni oching va {{ui:Field weld}} ni tanlang.
2. Montaj payvandi qaerga kelishi kerak boʻlsa, spullangan quvurni bosing. Toʻgʻri uzunlik ichida quvur oʻsha yerda kesiladi; fitting yoki klapan ichida payvand yaqinroq birikmaga suriladi.

Xossalarda trassaning montaj payvandlari roʻyxatlanadi, har biri {{ui:Remove}} bilan. Har bir oʻzgarish {{ui:Undo}} ning bir qadamidir.

## Spul varaqlari

Spullangan trassaning Xossalarida:

- {{ui:Spool sheets (PDF)}}: har bir spul uchun bir sahifa. Chapda, 30° izometrik koʻrinishdagi spul: uning toʻgʻri uzunliklari raqamlangan, ustaxona payvandlari nuqta bilan, montaj payvandlari FW bilan belgilangan va rejaning shimoli. Oʻngda, spulning raqami, oʻlchami, jadvali va uzunligi, soʻng uning **kesish uzunliklari**, **fittinglari**, **payvandlari** (spul ichidagi har bir birikmada ustaxona uchma-uch payvandi, keyingi spulga tutashadigan joyda montaj payvandi) va quvur massasi bilan **materiallar roʻyxati** (ASME B36.10M oddiy uchli massa).
- {{ui:Spool list (CSV)}}: xuddi shu maʼlumot, har bir spul uchun alohida blok.

:::note
Kesish uzunliklari chizilganidek uchma-uch oʻlchanadi: ildiz tirqishi yoki payvand zahirasi ayirilmaydi. Tirsaklar B16.9 uzun radiusida; troynik, reduktor va klapanlar umumiy boʻlib, quvur oʻlchamidan olinadi, B16.9 yoki ishlab chiqaruvchidan emas, va varaqda shu aytilgan. Fitting massasi berilmagan. Loyihalash va muvofiqlashtirish uchun yordamchi vosita, muhandis tomonidan oʻlchangan.
:::

## IFC faylida

Spullangan trassaning har bir qismi **CadCraft_Spool** ni SpoolId bilan, trassasi, spulning trassadagi raqami va trassa boʻylab boshlanish va tugash joylari bilan olib yuradi. Trassa oʻz qoidalarini (eng uzun spul, montaj payvandlari, liniya raqami) oʻz toʻplamida saqlaydi, shuning uchun fayl qayta ochilganda spullar oʻsha holatda chiqadi.

## Kanallar: kesish roʻyxati

{{ui:Build}} ni oching va {{ui:Duct cut list}} ni bosing: tizim, shakl va oʻlcham boʻyicha toʻgʻri kanal boʻlaklarining CSV fayli; har bir toʻgʻri uzunlik Kanal panelidagi **Piece length** boʻyicha boʻlaklarga boʻlinadi (dastlab 1500 mm, taxminan 5 ft) va qolgani. Faqat uzunliklar: tikuvlar, oʻlchov qalinliklari yoki ulagichlar yoʻq.
