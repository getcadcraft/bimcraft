---
title: BimCraft ochadigan va saqlaydigan fayllar
summary: BimCraft ochadigan har bir format, nimalarni saqlab qolishi, saqlangan fayllar qayerga borishi va brauzerlar hamda oflayn rejimda nima oʻzgarishi.
keywords: formatlar, ochish, saqlash, eksport, yuklab olish, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, yuklash, maxfiylik, fayl hajmi
from: a1f0161b
---

BimCraft fayllarni brauzer oynasida, sizning kompyuteringizda oʻqiydi. **Hech narsa yuklanmaydi** na CadCraft ga, na boshqa birovga. Saqlaganingizda BimCraft brauzerga yuklab olish uchun yangi fayl beradi; u hech qachon ochgan faylingiz ustiga yozmaydi.

## Nimalarni ochadi

| Format | Kengaytmalar | Nima olasiz |
|---|---|---|
| IFC | `.ifc` | Model 3D da, qavatlar, elementlar soni va har bir elementning xossalari. Nomlar, teglar va yagona xossa qiymatlarini oʻzgartirish mumkin. |
| Loyiha va oila fayllari | `.rvt` `.rfa` `.rte` `.rft` | Fayl kartochkasi: nashr, versiya, birgalikda ishlash, loyiha maʼlumoti, oila parametrlari, bogʻlangan fayllar va oldindan koʻrish rasmi. 3D yoʻq. |
| DWG | `.dwg` | Chizma 2D da: model fazosi, har bir varaq, qatlamlar, bogʻlangan chizmalar, rasmlar va chop etish koʻrinishi. Model fazosi 3D da ham. Tekshirilgan formatlar AutoCAD 2000 dan 2018 gacha. |
| DXF | `.dxf` | DWG bilan bir xil. |
| STEP | `.step` `.stp` | Detal, jihoz yoki yetkazib beruvchining modeli (AP203, AP214, AP242) 3D da: har bir qattiq jism bitta elementga aylanadi (bino elementi proksi) kichik IFC modelda, bitta qavatda, uchburchaklar sifatida haqiqiy oʻlchamida oʻqiladi; fayl qoʻygan joyida har bir detal bilan yigʻma. Undan keyin u har qanday IFC kabi ishlaydi: xossalar, kesimlar, oʻlchash, IFC sifatida saqlash. Ranglar va yigʻma daraxti oʻqilmaydi. |
| Nuqta bulutlari | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | Skanerlash natijasi 3D koʻrinishda, model yonida yoki alohida: qarang [Nuqta bulutini model yonida koʻrsatish](topic:point-clouds). |
| Loyiha toʻplami | `.ccbundle.zip` | Model va uning koʻrinishlari, maketlari va xossalar guruhlari: qarang [Loyiha toʻplamini ochish](topic:open-project-bundle). |
| Jild | istalgan | Undagi har bir model, chizma va loyiha toʻplamining hisoboti. Hisobotdagi istalgan IFC, model, chizma yoki toʻplam bir bosishda ochiladi. |

[BimCraft har bir formatdan nimani oʻqishi](topic:file-formats) batafsil bayon etiladi.

BimCraft fayl nima ekanini nomiga qarab emas, balki birinchi baytlariga qarab ham aniqlaydi, shuning uchun gʻayrioddiy kengaytmali loyiha fayli ham fayl kartochkasi sifatida ochiladi.

### Ochilmaydi

- `.ifczip` va `.ifcxml`: BimCraft shunday deydi: ".ifczip hali qoʻllab-quvvatlanmaydi. Modelni oddiy .ifc fayl sifatida saqlang yoki eksport qiling." `.ifczip` ni arxivdan chiqaring (ichida oddiy `.ifc` boʻladi) yoki modelni oddiy IFC sifatida qayta eksport qiling.
- DGN chizmalari jild hisobotida roʻyxatga olinadi, lekin ochilmaydi.
- PDF, rasmlar va ofis fayllari oʻz-oʻzidan ochilmaydi. Rasmlar DWG ichida rasm sifatida ishlatiladi, va {{ui:Build}} › {{ui:From a drawing…}} PDF yoki skanerlangan sahifalarni devorlarga aylantiradi: qarang [Chizmalar toʻplamidan devorlar](topic:walls-from-plans).

## Nimalarni saqlaydi

| Siz bosasiz | Olasiz | Qayerda |
|---|---|---|
| {{ui:Save as IFC}} | Tahrirlaringiz bilan yangi IFC fayl, nomi "*original name* (edited).ifc" | Brauzeringizning yuklab olinganlar jildi |
| Jihozlar jadvalidagi {{ui:Download CSV}} | Roʻyxatdagi elementlarning CSV fayli, nomi "*drawing name* equipment.csv" | Brauzeringizning yuklab olinganlar jildi |

Boshqa narsalar ularning yaratilgan joyida saqlanadi, har biri oʻz mavzusida: {{ui:USD}} ([Modelni USD sifatida eksport qilish](topic:usd)), {{ui:For rendering}} uchun .glb fayli, render qilingan rasmlar, varaqlar va rejalar PDF sifatida, jadvallar va roʻyxatlar CSV sifatida, BCF muammolari, COBie elektron jadvali, oila fayllari va roʻyxatga olingan skanerlar LAS yoki E57 sifatida. BimCraft DWG, DXF yoki loyiha fayllarini saqlamaydi va ochgan fayllaringizni hech qachon oʻzgartirmaydi.

:::chromium
Chrome va Edge yuklab olinganlarni sozlamalarida belgilangan jildga saqlaydi, odatda Yuklab olinganlar. Har bir faylni yuklashdan oldin qayerga saqlashni soʻrash uchun brauzerning yuklab olish sozlamalarida "Ask where to save each file before downloading" ni yoqing.
:::

:::firefox
Firefox fayllarni Yuklab olinganlar jildiga saqlaydi, agar sozlamalarda "Always ask you where to save files" tanlanmagan boʻlsa.
:::

:::safari
Safari fayllarni Yuklab olinganlarga saqlaydi, agar **Safari > Settings > General > File download location** ostida boshqa jild tanlamagan boʻlsangiz.
:::

## Ikkinchi marta saqlash

Har bir saqlash modelni **uni ochganingizdan beri kiritilgan barcha tahrirlar** bilan yuklab oladi, faqat oxirgi saqlashdan keyingi tahrirlarni emas. {{ui:Changes}} roʻyxati har bir saqlashdan keyin yana boʻsh boshlanadi, shuning uchun saqlashdan oldingi holatga qaytib boʻlmaydi. Asldan boshlash uchun asl faylni qayta oching.

## Katta fayllar va xotira

- **IFC** fayllar brauzer yorligʻining xotirasiga toʻliq oʻqiladi, 3D geometriya esa undan koʻp xotira oladi. Bir necha yuz megabaytli model noutbuk uchun ortiqcha boʻlishi mumkin. 1.5 million uchburchakdan oshsa, juda katta modellar uchun xotirani tejash maqsadida qirralar oʻchiriladi ("Juda katta modellar uchun qirralar oʻchirilgan").
- **Loyiha fayllari** toʻliq oʻqilmaydi. BimCraft faqat kerakli kichik qismlarini oʻqiydi, fayl qanchalik katta boʻlishidan qat'i nazar, taxminan 40 KB dan 100 KB gacha, shuning uchun tarmoq diskidagi 500 MB markaziy model bir zumda ochiladi.
- **DWG va DXF** fayllar toʻliq oʻqiladi. Juda katta chizma "Bu chizma juda katta; faqat bir qismi koʻrsatilmoqda." xabarini koʻrsatadi.
- **Jildlar** 20,000 tagacha faylli holda ochiladi. Har bir model kartochkasi uchun faqat bir necha kilobayt oʻqiladi.

Qoʻshimcha maʼlumot uchun qarang [Brauzerlar, qurilmalar va xotira](topic:platforms).

## Onlayn va oflayn

Fayllarni ochish hech qachon internetni talab qilmaydi. Bitta oʻquvchi birinchi marta kerak boʻlganda saytdan yuklanadi: IFC dvigateli, IFC modelni birinchi marta ochganingizda ("IFC dvigateli ishga tushirilmoqda…"). DWG va DXF oʻquvchilari ilova tarkibiga kiradi.

:::offline
Siz oflaynsiz. Ilova panelidagi tugmada {{ui:Offline ready}} yozilgan boʻlsa, har bir format odatdagidek ochiladi. Aks holda, bu yorliqda avval ochilmagan boʻlsa, IFC model ochilmaydi: avval ulaning. Qarang [Onlayn va oflayn](topic:online-offline).
:::

BimCraft ni ulanishsiz ishlatish uchun internet bor paytda ilova panelidagi {{ui:Save for offline}} tugmasini bosing va {{ui:Offline ready}} chiqquncha kuting. Saqlangan nusxa taxminan 33 MB; unda IFC dvigateli ham bor, shuning uchun IFC modellar ham oflaynda ochiladi. [Oflayn ishlash](common:offline) umumiy holda saqlangan nusxalarni tushuntiradi.

## Bulutli saqlash

Bulutli saqlash hali mavjud emas. Tahrirlangan nusxalarni oʻz kompyuteringizda yoki idoraning fayl serverida saqlang, xuddi istalgan boshqa fayl kabi. Qarang [Sizning fayllaringiz](common:your-files).
