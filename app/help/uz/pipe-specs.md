---
title: Quvur spetsifikatsiyalari, klapanlar, zaslonkalar va ishlab chiqaruvchi oilalari
summary: Oʻz quvur spetsifikatsiyalaringizni tuzing (material, birikma va gʻadir-budurlik bilan oʻlcham jadvallari), ular model faylida saqlanadi; trassalarga klapanlar, filtr va zaslonkalar qoʻying; ishlab chiqaruvchining klapan yoki jihoz modelini ulanish portlari bilan oila sifatida kiriting.
keywords: quvur spetsifikatsiyasi, quvur spetsifikatsiyalari, quvur spetsifikatsiyasi sinfi, maxsus quvur, oʻlcham jadvali, truba, gigiyenik truba, zanglamas poʻlat, jadval, tashqi diametr, devor qalinligi, ichki diametr, gʻadir-budurlik, bosim klassi, csv, json, import, eksport, elektron jadval, standart, bpe, din, en 10357, en 10255, klapan, klapanlar, qopqoqli klapan, balanslovchi klapan, boshqaruv klapani, filtr, zaslonka, hajm zaslonkasi, yongʻin zaslonkasi, oem, ishlab chiqaruvchi, zavod, oila, oilalar, portlar, ulanish, step, obj, gltf, ifc, radiator, konvektor, panelli isitgich, havo ishlov berish qurilmasi, diffuzor, panjara
from: bc2f7c4e
---

## Nima qilasiz

Quvurlarni oʻrnatilgan poʻlat, mis va plastik jadvallar oʻrniga oʻz spetsifikatsiyangizda chizing, trassalarga klapanlar va zaslonkalar qoʻying hamda ishlab chiqaruvchining klapan yoki jihoz modelini quvurlar ulanadigan portlari bilan joylashtiring.

:::note
Loyihalash va muvofiqlashtirish uchun yordamchi vosita. Quvur spetsifikatsiyasi siz kiritgan yoki import qilgan raqamlarni saqlaydi: har bir jadvalni loyiha standartiga solishtirib tekshiring. Oʻrnatilgan klapanlar, filtrlar va zaslonkalar trassa oʻlchamidan kelib chiqqan sxematik shakllar boʻlib, ishlab chiqaruvchi yoki klapan standarti uzunligiga mos emas.
:::

## Quvur spetsifikatsiyasini sozlash

1. {{ui:Draw}} ni yoqing, {{ui:Build}} ni oching va {{ui:Pipe specs}} ni tanlang. Shu tugma Quvur asbobi panelida ham bor.
2. {{ui:New}} ni tanlang yoki fayldan, nusxalashdan yoki boshlangʻich spetsifikatsiyadan (quyida) boshlang.
3. Uning nomini, unga mos keladigan standart yoki havolani, materialni hamda uchi yoki birikma turini kiriting.
4. Har bir oʻlcham uchun bitta qator kiriting: oʻlcham nomi, tashqi diametr va devor qalinligi millimetrda. Agar sizda bor boʻlsa, devor oʻrniga ichki diametrni kiriting: ikkinchisi avtomatik toʻldiriladi. DN, bosim klassi va massa ixtiyoriy.
5. Ixtiyoriy: millimetrdagi gʻadir-budurlik (bosim pasayishi hisobi undan foydalanadi), yangi trassalar boshlanadigan izolyatsiya qalinligi, tirsak radiusi tashqi diametrning koʻpaytuvchisi sifatida, spetsifikatsiyada troynik va reduktorlar bor-yoʻqligi hamda 3D dagi oʻz rangi.
6. Yangi trassalar shu spetsifikatsiyada boshlanishi kerak boʻlgan xizmatlarni belgilang, masalan, sovutilgan suv.
7. {{ui:Save in the model}} ni tanlang.

Spetsifikatsiyalar model faylida saqlanadi. Faylni ochgan har bir kishi ularga ega boʻladi, Ortga qaytarish esa oʻzgarishni bekor qiladi.

Spetsifikatsiya yoki uning oʻlchamlaridan biri, unda trassa chizilgan boʻlsa, oʻchirilmaydi. Oʻlchamning raqamlarini oʻzgartirsangiz, shu oʻlchamdagi trassalar qayta chiziladi.

## Spetsifikatsiyani boshqa modelda qayta ishlatish

- {{ui:Export .json}} tanlangan spetsifikatsiyani kichik fayl sifatida saqlaydi; {{ui:Export all}} modeldagi barcha spetsifikatsiyalarni saqlaydi. {{ui:Import a file}} ularni qayta oʻqiydi.
- {{ui:Export .csv}} oʻlcham jadvalini elektron jadval uchun saqlaydi. {{ui:Import a file}} `.csv` faylni ham oʻqiydi.
- {{ui:Paste rows}} elektron jadvaldan nusxalangan jadvalni oladi. Birinchi qator ustunlar nomlarini beradi: `Size`, `OD` va `Wall` (yoki `ID`), ixtiyoriy ravishda `DN`, `Pressure`, `Weight`. Har bir oʻlcham uchun bitta qator. Raqamlar millimetrda, agar dyuym tanlamasangiz yoki katakcha oʻz birligini koʻrsatmasa (`0.065 in`).

## Boshlangʻich spetsifikatsiyalar

{{ui:Add a starter spec}} modelingizga quyidagilardan birini nusxa sifatida qoʻshadi, uni tahrirlash mumkin:

| Boshlangʻich | Oʻlchamlar |
|---|---|
| ASME BPE truba | 1/4" dan 6" gacha |
| EN 10357 seriya A truba (DIN 11850 qatori 2) | DN10 dan DN200 gacha |
| EN 10255 poʻlat truba, oʻrtacha seriya | DN15 dan DN150 gacha |
| EN 10255 poʻlat truba, ogʻir seriya | DN15 dan DN125 gacha |

Bu jadvallar standart uchun ikki yoki undan ortiq nashr etilgan yetkazib beruvchi sahifalari koʻrsatgan va kelishilgan tashqi diametr hamda devor qiymatlaridir. Ular standartlarning oʻzidan olinmagan. Faqat bitta sahifada koʻrsatilgan oʻlchamlar chiqarib tashlangan. Har bir boshlangʻich spetsifikatsiya oʻz manba sahifalarini koʻrsatadi va «loyiha standartiga solishtirib tekshiring» deb belgilangan. Gʻadir-budurlik, bosim klassi yoki massa berilmagan.

## Spetsifikatsiyada trassa chizish

1. {{ui:Pipe}} ni tanlang. Spetsifikatsiyada belgilangan xizmat shu spetsifikatsiyada boshlanadi. Boshqa trassa uchun materiallar roʻyxatida spetsifikatsiyani tanlang: spetsifikatsiyalar oʻrnatilgan materiallardan keyin «Spetsifikatsiya: nomi» koʻrinishida chiqadi.
2. Oʻlchamlar roʻyxatida endi faqat shu spetsifikatsiyaning oʻlchamlari qoladi. Bittasini tanlang va trassani chizing.

Trassani keyinroq spetsifikatsiyaga koʻchirish uchun uni tanlang va Xossalar ichida **Material** ni oʻzgartiring. Uning oʻlchami tashqi diametr boʻyicha spetsifikatsiyaning eng yaqin oʻlchamiga aylanadi.

IFC faylida quvur spetsifikatsiyaning nomi, standarti, materiali, birikmasi va oʻlchamlarini olib yuradi (`CadCraft_PipeSpec` va `Pset_PipeSegmentTypeCommon`, quvurda va uning turida).

Oʻlcham va bosim pasayishi hisoblari spetsifikatsiyaning ichki diametrini oʻqiydi. Spetsifikatsiyada gʻadir-budurlik boʻlsa, trassaning ishqalanishi shu bilan hisoblanadi (Darcy-Weisbach); aks holda hisob odatdagi standart qiymatdan foydalanadi.

## Klapanlar, filtr va zaslonkalar

1. {{ui:Valve}} ni tanlang va panelda turini tanlang: zadvijka, shar, qopqoqli, globus, teskari, balanslovchi yoki boshqaruv klapani yoki quvurlar uchun filtr; kanallar uchun hajm zaslonkasi yoki yongʻin zaslonkasi.
2. Qaerga qoʻyish kerak boʻlsa, trassaning oʻsha joyini bosing. Trassa uning atrofida kesiladi va ikki tomoni ulangan holda qoladi. Klapan trassaning oʻlchamini oladi va trassa bilan birga harakatlanadi.

Trassaning Xossalarida har biri {{ui:Remove}} bilan koʻrsatiladi; trassa yana yopiladi.

Bosim pasayishi hisobi faqat zadvijka, shar, globus va teskari klapanlar uchun birikma yoʻqotishini hisobga oladi. Boshqa turlar, zaslonkalar va ishlab chiqaruvchi oilalari u yerda hech qanday yoʻqotish qoʻshmaydi: ularni oʻz tekshiruvingizda hisobga oling. Ular **Fittings and valves** jadvalida va hisob-kitobda hisobga olinadi hamda IFC ga ikki ulangan portli klapan, filtr (filtr) va zaslonka sifatida yoziladi.

## Ishlab chiqaruvchi modeli oila sifatida

1. {{ui:Build}} ni oching va {{ui:Families}} ni tanlang, soʻng {{ui:Import a model}}. IFC, STEP, OBJ, STL, glTF va Kutubxona elementi fayllari oʻqiladi. OBJ va STL uchun avval fayl birliklarini va yuqori oʻqni belgilang.
2. Portlar dialogida nomi, ishlab chiqaruvchi va model raqamini kiriting.
3. U **Trassada** (klapan, filtr yoki zaslonka) boʻladimi yoki **Jihoz** boʻladimi va qanday yozilishini tanlang.
4. Unga portlarini bering. Har biri nomi, quvur yoki kanal, xizmati, millimetrdagi oʻlchami (quvurning tashqi diametri), spetsifikatsiyangiz nomlagan nominal oʻlchami, uchi turi, joylashuvi va qaragan yoʻnalishiga ega. {{ui:On a face}} model qutisi yuzining markaziga port qoʻyadi. Kichik yuqori koʻrinishda portlar koʻrinadi.
5. {{ui:Save the family in the model}} ni tanlang.

Trassaga qoʻyiladigan oila bitta chiziqda bir-biridan qarama-qarshi qaragan aniq ikkita portga ega boʻlishi kerak. Uni Klapan asbobi roʻyxatidan tanlang va trassani bosing: u oʻz uzunligida joylashadi va quvurlar uning portlariga ulanadi.

Oila hech qachon choʻzilmaydi. Agar uning portlari trassa oʻlchamiga mos kelmasa, joylashtirganingizda sizga xabar beriladi va {{ui:Check connections}} uni roʻyxatga oladi.

Jihoz oilasi {{ui:Equipment}} bilan, turi **Ishlab chiqaruvchi oilasi** qilib joylashtiriladi. Quvurlar va kanallar uning portlariga tutashadi.

{{ui:Download as a Library item}} portlari bilan birga oilani Kutubxonaga yuborish mumkin boʻlgan fayl sifatida saqlaydi.

## Radiatorlar va konvektorlar

{{ui:Equipment}} da **Radiator** va **Konvektor / panelli isitgich** ham bor: isitish suvi uchun oqim va qaytish ulanishi boʻlgan umumiy korpuslar. Qarang: [Portli MEP jihozlari](topic:mep-equipment).
