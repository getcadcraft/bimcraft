---
title: BimCraft ochadigan va saqlaydigan fayllar
summary: BimCraft ochadigan har bir format, nimalarni saqlab qolishi, nimalarni saqlashi, saqlangan fayllar qayerga tushishi va brauzerlar hamda oflayn rejimda nimalar oʻzgarishi.
keywords: formatlar, ochish, saqlash, eksport, yuklab olish, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, yuklash, maxfiylik, fayl hajmi
from: a7275dbf
---

BimCraft fayllarni kompyuteringizda, brauzer yorligʻida oʻqiydi. CadCraft yoki boshqa birovga **hech narsa yuklanmaydi**. Saqlaganingizda BimCraft brauzerga yuklab olish uchun yangi fayl beradi; ochgan faylingiz ustiga hech qachon yozmaydi.

## Nima ochiladi

| Format | Kengaytmalar | Nima olasiz |
|---|---|---|
| IFC | `.ifc` | 3D modelni, qavatlarni, elementlar sonini va har bir elementning barcha xususiyatlarini. Nomlar, belgilar va yakka xususiyat qiymatlarini oʻzgartirish mumkin. |
| Loyiha va oila fayllari | `.rvt` `.rfa` `.rte` `.rft` | Fayl kartochkasi: versiya, yigʻilish, birgalikda ishlash, loyiha maʼlumotlari, oila parametrlari, bogʻlangan fayllar va oldindan koʻrish rasmi. 3D yoʻq. |
| DWG | `.dwg` | Chizma 2D shaklda: model fazosi, har bir varaq, qatlamlar, bogʻlangan chizmalar, rasmlar va chop etish koʻrinishi. Model fazosi 3D shaklda ham. AutoCAD 2000 dan 2018 gacha boʻlgan formatlar tekshirilgan. |
| DXF | `.dxf` | DWG bilan bir xil. |
| STEP | `.step` `.stp` | Detal, jihoz yoki yetkazib beruvchining modeli (AP203, AP214, AP242) 3D shaklda: har bir qattiq jism bitta elementga (binoning element proksisi) aylanadi, u bitta qavatdagi kichik IFC modelning bir qismi boʻladi va haqiqiy oʻlchamida uchburchaklar sifatida oʻqiladi; yigʻma esa fayl joylashtirgan joyda har bir detal bilan birga boʻladi. Undan keyin u istalgan IFC kabi ishlaydi: xususiyatlar, kesimlar, oʻlchash, IFC sifatida saqlash. Ranglar va yigʻma daraxti oʻqilmaydi. |
| Nuqta bulutlari | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | Skanerlash 3D koʻrinishda, model yonida yoki alohida: qarang [Nuqta bulutini model yonida koʻrsatish](topic:point-clouds). |
| Loyiha toʻplami | `.ccbundle.zip` | Model, uning koʻrinishlari, maketlari va xususiyat guruhlari: qarang [Loyiha toʻplamini ochish](topic:open-project-bundle). |
| Papka | istalgan | Undagi har bir model, chizma va loyiha toʻplami boʻyicha hisobot. Hisobotdagi istalgan IFC, model, chizma yoki toʻplam bir marta bosish bilan ochiladi. |

[BimCraft har bir formatdan nimani oʻqishi](topic:file-formats) batafsil bayon etilgan.

BimCraft fayl nima ekanligini nomiga qarab emas, balki birinchi baytlariga qarab ham aniqlaydi, shuning uchun gʻayrioddiy kengaytmali loyiha fayli ham fayl kartochkasi sifatida ochiladi.

### Ochilmaydi

- `.ifczip` va `.ifcxml`: BimCraft shunday deydi: ".ifczip hali qoʻllab-quvvatlanmaydi. Modelni oddiy .ifc fayl sifatida saqlang yoki eksport qiling." `.ifczip` ni arxivdan chiqaring (ichida oddiy `.ifc` boʻladi) yoki modelni oddiy IFC sifatida qayta eksport qiling.
- DGN chizmalari papka hisobotida koʻrsatiladi, lekin ochilmaydi.
- PDF, rasmlar va ofis fayllari oʻz-oʻzidan ochilmaydi. Rasmlar DWG ichida rasm sifatida ishlatiladi, {{ui:Build}} › {{ui:From a drawing…}} esa PDF yoki skanerlangan sahifalarni devorlarga aylantiradi: qarang [Chizmalar toʻplamidan devorlar](topic:walls-from-plans).

## Nimani saqlaydi

| Siz bosasiz | Olasiz | Qayerga |
|---|---|---|
| {{ui:Save as IFC}} | Tahrirlaringiz bilan yangi IFC fayl, nomi "*asl nom* (tahrirlangan).ifc" | Brauzeringizning yuklab olinadigan papkasi |
| Jihoz jadvalidagi {{ui:Download CSV}} | Roʻyxatdagi elementlarning CSV fayli, nomi "*chizma nomi* equipment.csv" | Brauzeringizning yuklab olinadigan papkasi |

Boshqa narsalar oʻz joyida saqlanadi, har biri oʻz mavzusida: {{ui:USD}} ([Modelni USD sifatida eksport qilish](topic:usd)), {{ui:Collada}} (.dae va Google Earth .kmz: [Modelni Collada yoki Google Earth uchun eksport qilish](topic:collada)), {{ui:For rendering}} bilan .glb fayl, render qilingan rasmlar, varaqlar va rejalar PDF sifatida, jadvallar va roʻyxatlar CSV sifatida, BCF muammolari, COBie elektron jadvali, oila fayllari hamda roʻyxatga olingan skanerlar LAS yoki E57 sifatida. BimCraft DWG, DXF yoki loyiha fayllarini saqlamaydi va ochgan fayllaringizni hech qachon oʻzgartirmaydi.

:::chromium
Chrome va Edge yuklab olingan fayllarni sozlamalarida belgilangan papkaga saqlaydi, odatda Downloads. Har safar qayerga saqlashni soʻrash uchun brauzerning yuklab olish sozlamalarida "Yuklab olishdan oldin har bir faylni qayerga saqlashni soʻrash" ni yoqing.
:::

:::firefox
Firefox fayllarni Downloads papkasiga saqlaydi, agar sozlamalarda "Fayllarni qayerga saqlashni har safar soʻrash" ni tanlamagan boʻlsangiz.
:::

:::safari
Safari fayllarni Downloads papkasiga saqlaydi, agar **Safari > Sozlamalar > Umumiy > Fayl yuklab olinadigan joy** ostida boshqa papkani tanlamagan boʻlsangiz.
:::

## Ikkinchi marta saqlash

Har bir saqlash modelni **ochganingizdan beri qilingan har bir tahrir** bilan toʻliq yuklab oladi, faqat oxirgi saqlashdan keyingi tahrirlar emas. {{ui:Changes}} roʻyxati har bir saqlashdan keyin yana boʻsh boshlanadi, shuning uchun saqlashdan oldingi holatga qaytib boʻlmaydi. Asl nusxadan boshlash uchun asl faylni qayta oching.

## Katta fayllar va xotira

- **IFC** fayllar brauzer yorligʻining xotirasiga toʻliq oʻqiladi, 3D geometriya esa qoʻshimcha xotira talab qiladi. Bir necha yuz megabaytlik model noutbuk uchun juda koʻp boʻlishi mumkin. 1.5 million uchburchakdan oshganda xotirani tejash uchun qirralar oʻchiriladi ("Juda katta modellar uchun qirralar oʻchirilgan").
- **Loyiha fayllari** toʻliq oʻqilmaydi. BimCraft faqat kerakli kichik qismlarni oʻqiydi, fayl qanchalik katta boʻlishidan qatʼiy nazar taxminan 40 KB dan 100 KB gacha, shuning uchun tarmoq diskidagi 500 MB markaziy model bir zumda ochiladi.
- **DWG va DXF** fayllar toʻliq oʻqiladi. Juda katta chizma "Bu chizma juda katta; uning faqat bir qismi koʻrsatilmoqda." xabarini koʻrsatadi.
- **Papkalar** 20 000 tagacha fayl bilan ochiladi. Har bir model kartochkasi uchun kerak boʻladigan bir necha kilobayt oʻqiladi.

Batafsil: [Brauzerlar, qurilmalar va xotira](topic:platforms).

## Onlayn va oflayn

Fayllarni ochish uchun internet hech qachon kerak emas. Bitta oʻquvchi kerak boʻlganda birinchi marta saytdan yuklanadi: IFC mexanizmi, IFC modelni birinchi marta ochganingizda ("IFC mexanizmi ishga tushirilmoqda…"). DWG va DXF oʻquvchilari ilova tarkibiga kiradi.

:::offline
Siz oflaynsiz. Ilova panelidagi tugmada {{ui:Offline ready}} yozilgan boʻlsa, har bir format odatdagidek ochiladi. Aks holda, bu tabda avval ochilmagan boʻlsa, IFC model ochilmaydi: avval ulaning. Qarang [Onlayn va oflayn](topic:online-offline).
:::

BimCraft ni ulanishsiz ishlatish uchun onlaynda ilova panelidagi {{ui:Save for offline}} tugmasini bosing va {{ui:Offline ready}} paydo boʻlguncha kuting. Saqlangan nusxa taxminan 33 MB; unda IFC mexanizmi ham bor, shuning uchun IFC modellar ham oflaynda ochiladi. [Oflaynda ishlash](common:offline) saqlangan nusxalar haqida umumiy maʼlumot beradi.

## Bulutli saqlash

Bulutli saqlash hali mavjud emas. Tahrirlangan nusxalaringizni istalgan boshqa fayl kabi, oʻz kompyuteringizda yoki idoraning fayl serverida saqlang. Qarang [Sizning fayllaringiz](common:your-files).
