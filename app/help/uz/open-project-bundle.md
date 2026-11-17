---
title: Loyiha toʻplamini ochish
summary: Loyiha toʻplami bitta zip boʻlib, model, uning koʻrinishlari, varaqlari va xossalar guruhlarini oʻz ichiga oladi. Uni oching, koʻrinishni qavat va qatlamlar bilan koʻrsating, varaqni oching va xossalarni loyihaning oʻz guruhlarida koʻring.
keywords: toʻplam, loyiha toʻplami, ccbundle, zip, koʻrinishlar, koʻrinishlar xaritasi, varaqlar, varaqlar kitobi, qatlamlar birikmasi, xossalar guruhlari, standartlar, pln, shablon
from: b5b86e8f
---

## Nima qilasiz

Loyiha toʻplamini (`.ccbundle.zip`) oching va loyiha bilan uning tashkil etilgan tartibida ishlang: koʻrinishlari, varaqlari va xossalar guruhlari modelning ustida boʻladi.

Toʻplamda quyidagilar boʻladi:

- model IFC koʻrinishida;
- varaqlar PDF va DWG koʻrinishida;
- IFC qoldirib ketadigan narsalar roʻyxati: koʻrinishlar (har biri qavati, qatlamlar birikmasi va masshtabi bilan), varaqlar va ularga joylashtirilgan chizmalar, guruhlardagi xossa taʼriflari, tasniflar hamda qatlamlar, qalam toʻplamlari, chiziq turlari, toʻldirishlar, sirtlar va kompozitlar kabi standartlar.

Toʻplamlarni Archicad ichida ishlaydigan ochiq manbali skript yozadi va bu roʻyxatlarni Archicad oʻzidan soʻraydi. BimCraft `.pln` yoki `.tpl` fayllarni toʻgʻridan-toʻgʻri oʻqimaydi; qarang: [.pln va .pla loyiha fayllarini ochish](topic:pln-project-files).

## Toʻplam yaratish

Skript hali har bir Archicad versiyasida sinab koʻrilmagan, shuning uchun uni oldindan koʻrish sifatida qabul qiling. Uni [github.com/getcadcraft/bim-project-bundle](https://github.com/getcadcraft/bim-project-bundle) manzilidan oling. Archicad 24 yoki undan yangi va Python 3.8 yoki undan yangi versiya kerak; boshqa hech narsa oʻrnatish shart emas.

1. `archicad_bundle.py` faylini masalan `C:\cc-bundle` jildiga saqlang.
2. Archicad da loyihani oching va aynan **CadCraft bundle** nomli nashr toʻplamini yarating: 3D koʻrinish IFC koʻrinishida, har bir varaq PDF koʻrinishida va har bir varaq yana DWG koʻrinishida, bir tekis jilddagi fayllarga nashr qilingan holda.
3. Loyiha ochiq holda `python archicad_bundle.py --probe --out .` buyrugʻini bir marta ishga tushiring. U faqat oʻqiydi va `probe.json` faylini yozadi.
4. `python archicad_bundle.py --out . --translator "IFC4 Reference View"` buyrugʻini ishga tushiring (oʻzingiz tanlagan IFC tarjimoni nomidan foydalaning). Archicad toʻplamni nashr qiladi va skript `<project>.ccbundle.zip` faylini yozadi.

Skript orqali nashr qilish muvaffaqiyatsiz boʻlsa, toʻplamni qoʻlda nashr qiling va `python archicad_bundle.py --out . --no-publish --files <folder>\*.ifc <folder>\*.pdf <folder>\*.dwg` buyrugʻini ishga tushiring. Barcha variantlar repozitoriy README faylida. Biror narsa yetib kelmasa, u yerda muammo haqida xabar oching va `probe.json` faylini biriktiring.

## Toʻplamni ochish

1. {{ui:Fayl tanlash}} tugmasini bosing yoki `.ccbundle.zip` faylini BimCraft ustiga tashlang. {{ui:Jild ochish}} bilan ochilgan jildda toʻplamlar **Loyiha toʻplamlari** ostida roʻyxatlanadi; nomi boʻyicha birini bosing.
2. Model har qanday IFC kabi ochiladi va chapda, faylning maʼlumotlari ostida **Loyiha toʻplami** boʻlimi paydo boʻladi.

Hech narsa yuklanmaydi: toʻplam kompyuteringizda bir vaqtda bitta fayl boʻyicha oʻqiladi, shuning uchun katta model ikki marta nusxalanmaydi.

## Koʻrinishni koʻrsatish

**Koʻrinishlar** ostida koʻrinishlar loyihadagi jildlari boʻyicha guruhlangan. Koʻrinish nomini bosing:

- **Qavat rejasi** faqat oʻz qavatini yuqoridan koʻrsatadi.
- **Uning qatlamlar birikmasi** shu birikma yashiradigan qatlamlardagi elementlarni yashiradi. Holat qatori necha element yashirilganini koʻrsatadi.
- **Uning masshtabi** nom yonida va holat qatorida koʻrsatiladi.
- **3D koʻrinish** barcha qavatlarni koʻrsatadi.

Hammasini qayta koʻrsatish uchun {{ui:Koʻrsatish}} ichidan {{ui:Hammasini koʻrsatish}} ni tanlang va har bir qavatni belgilang.

:::note
BimCraft qatlamlarni IFC faylidagi qatlam tayinlashlari orqali topadi. Agar IFC ularsiz eksport qilingan boʻlsa, qatlamlar birikmasi hech narsani yashirmaydi va holat qatorida 0 element yashirilgani koʻrsatiladi.
:::

## Varaqni ochish

**Varaqlar** ostida har bir varaq raqami, nomi, qogʻoz oʻlchami va unga joylashtirilgan koʻrinishlarni koʻrsatadi.

- **PDF** varaqning PDF faylini toʻplamdan saqlaydi.
- **DWG** varaqning chizmasini 2D koʻrinishda ochadi. Modelga qaytish uchun istalgan koʻrinishni bosing.
- **… da ochish** varaq faylini uni ishlaydigan ilovaga yangi yorliqda yuboradi: PDF MarkupCraft ga, DWG CadCraft ga. Bu faqat oʻsha ilova BimCraft yonida ochiq boʻlganda koʻrinadi. Fayl yorliq yuklanayotganda toʻplamdan oʻqiladi va hech narsa yuklanmaydi.

Varaqda ikkalasi ham boʻlmasa, **Toʻplamda fayl yoʻq** deb yoziladi.

## Xossalarni loyiha guruhlarida koʻrish

Elementni tanlang. **Xossalar guruhlari** uning xossalarini loyiha belgilagan guruhlar ostida koʻrsatadi; moslik taʼrif beradigan IFC xossalar toʻplami va nomi orqali, aks holda elementning nomi boʻyicha topiladi. Qolgan xossalar odatdagidek {{ui:Xossalar}} da qoladi. **Xossa taʼriflari** har bir taʼrifni uning guruhi, turi va IFC nomi bilan roʻyxatlaydi.

## Standartlar va izohlar

- **Standartlar** toʻplamdagi qatlamlar, qatlamlar birikmalari, qalam toʻplamlari, chiziq turlari, toʻldirishlar, sirtlar, kompozitlar va materiallarni sanaydi.
- **Izohlar** skript oʻsha Archicad versiyasidan ololmagan narsalarni, BimCraft oʻqiy olmagan har qanday maydonni va toʻplam nomlagan, lekin saqlamagan har qanday faylni roʻyxatlaydi.

## Muammolarni bartaraf etish

- **"… zip, lekin loyiha toʻplami emas."** Zipda `manifest.json` yoʻq. Uni arxivdan chiqarib, ichidagi `.ifc` faylini oching.
- **"… BimCraft oʻqiydiganidan yangiroq loyiha toʻplami."** BimCraft ni yangilang.
- **"… manifestda nomlangan modelni saqlamaydi."** Zip qisqa uzilgan yoki tahrirlangan. Toʻplamni qaytadan yarating.
- **Koʻrinish barcha qavatlarni koʻrsatadi.** Uning qavati modelning IFC faylida yoʻq (holat qatorida shunday deyiladi). IFC eksportida oʻsha qavat kiritilganini tekshiring.

Shuningdek qarang: [Ikki BIM dasturi orasida ishlash](topic:two-bim-programs) va [BimCraft har bir formatdan nimani oʻqiydi](topic:file-formats).
