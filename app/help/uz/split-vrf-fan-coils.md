---
title: Split, VRF va fankoil qurilmalari
summary: Devorga, kassetali va kanalli ichki qurilmalarni, split va VRF tashqi qurilmalarini, refnet tugunlarini hamda 2-quvurli yoki 4-quvurli fankoillarni joylashtiring, ularning sovutgich, suv, kondensat va havo kanali ulanishlari bilan, ular orasidagi liniya toʻplamlarini esa oʻzgartirish mumkin boʻlgan jadval boʻyicha oʻlchab chizing.
keywords: split, mini split, minisplit, multi split, vrf, vrv, oʻzgaruvchan sovutgich oqimi, issiqlik nasosi, ichki qurilma, tashqi qurilma, kondensator bloki, devorga oʻrnatiladigan, yuqori devor, kassetali, kanalli, yashirin, fankoil, fcu, 2-quvurli, 4-quvurli, refnet, tarmoqlanish tuguni, y tugun, liniya toʻplami, lineset, sovutgich, suyuqlik liniyasi, gaz liniyasi, soʻrish liniyasi, acr, mis, kondensat, hvac, ifcunitaryequipment, splitsystem, ifcpipefitting
from: d102cee8
---

## Nima qilasiz

Split, multi-split yoki VRF tizimining qurilmalarini va fankoillarini modelga joylashtiring, soʻngra ularni liniya toʻplamlari bilan ulang: qurilmalarning portlariga mahkamlangan ACR misdan yasalgan suyuqlik va gaz liniyasi. Qurilmalar [portlari bor MEP jihozlari](topic:mep-equipment) bilan bir xil ishlaydi: oʻsha panel, Xossalar, portlar va [ulanishlar](topic:mep-connections).

:::note
Bu loyihalash va muvofiqlashtirish uchun yordamchi vosita. Qurilmalar siz kiritgan qiymatlar boʻyicha oʻlchangan umumiy shakllar, ishlab chiqaruvchi mahsulotlari emas. Ularning quvur oʻlchamlari R410A va R32 jihozlari uchun **odatiy namuna qiymatlari** jadvalidan olinadi, hech qanday ishlab chiqaruvchidan emas: haqiqiy oʻlchamlarni qurilmaning oʻrnatish qoʻllanmasi hal qiladi, uzun trassalar va katta balandlik farqlari ularni oʻzgartiradi. Foydalanadigan qurilmalaringizga mos kelishi uchun jadvalni oʻzgartiring yoki oʻlchamlarni oʻzingiz kiriting.
:::

## Qurilmani joylashtirish

1. {{ui:Chizish}} ni yoqing, {{ui:Yigʻilish}} ni oching va {{ui:Jihozlar}} ni tanlang.
2. Turini tanlang va qiymatlarini belgilang:

| Tur | Siz belgilaysiz | Portlari |
|---|---|---|
| Split ichki qurilma, devorga oʻrnatilgan | sovutish quvvati, suyuqlik va gaz liniyasi, uzunlik, chuqurlik, balandlik, kondensat oʻlchami | sovutgich suyuqligi va gazi, kondensat drenaji (oʻng uchida, devor yaqinida) |
| Split ichki qurilma, kassetali | quvvat, suyuqlik va gaz liniyasi, panel, korpus, balandlik, kondensat oʻlchami | sovutgich suyuqligi va gazi, kondensat drenaji (bir tomonda, yuqori yaqinida) |
| Split ichki qurilma, kanalli | quvvat, suyuqlik va gaz liniyasi, uzunlik, kenglik, balandlik, taʼminot va qaytish teshiklari, kondensat oʻlchami | taʼminot kanali chiqishi, qaytish kanali kirishi, sovutgich suyuqligi va gazi, kondensat drenaji |
| Split tashqi qurilma | quvvat, suyuqlik va gaz liniyasi, kenglik, chuqurlik, balandlik | sovutgich suyuqligi va gazi (oʻng tomonda) |
| VRF tashqi qurilma | quvvat, suyuqlik va gaz liniyasi, kenglik, chuqurlik, balandlik | sovutgich suyuqligi va gazi (old tomonda, past) |
| Refnet tugun | suyuqlik yoki gaz liniyasi, har bir tarmoqdagi yuk, har bir uchidagi quvur | kirish, A tarmoq, B tarmoq |
| Fankoil | 2-quvurli yoki 4-quvurli, uzunlik, kenglik, balandlik, taʼminot va qaytish teshiklari, gʻaltak quvuri va tizimi, isitish quvuri, kondensat oʻlchami | taʼminot kanali chiqishi, qaytish kanali kirishi, gʻaltak kirishi va chiqishi, isitish kirishi va chiqishi (4-quvurli), kondensat drenaji |

3. **Joylashuv balandligi** (At) ni belgilang: qurilma tagining sath ustidagi balandligi. Devor qurilmasining tagi uning pastki yuzasi (odatda 2100 mm); kassetaniki shipdagi yuzasi; refnetniki quvurining oʻq chizigʻi balandligi.
4. Joyni bosing ({{key:R}} uni 90° ga buradi).

**Quvvat** — qurilmaning kW dagi nominal sovutish quvvati, yonida Btu/h bilan. **Suyuqlik liniyasi** va **Gaz liniyasi** **Jadvaldan** holatida qoldirilganda, qurilmaning ulanishlari shu quvvat uchun jadvaldagi oʻlchamlarni oladi; oʻz qurilmangizniki uchun quvur oʻlchamini tanlang. Refnetning kirishi ikkala tarmoq uchun birgalikda, har bir tarmoq esa oʻz yuki uchun oʻlchanadi.

Sovutgich portlari ikki tomonlama ishlaydi (issiqlik nasosi ikkala yoʻnalishda ishlaydi). Kondensat drenaji har qanday drenaj kabi quvur oʻlchami hisoblanadi.

## Liniya toʻplamini chizish

1. Ikkita elementni tanlang ({{key:Shift}} bosib ikkinchisini bosing): tashqi qurilma va ichki qurilma (bitta split boʻlsa), yoki tashqi qurilma va refnet, refnet va ichki qurilma, yoki ikkita refnet (VRF).
2. {{ui:Yigʻilish}} ni oching va {{ui:Liniya toʻplami}} ni tanlang.

BimCraft ularning boʻsh portlari orasidagi suyuqlik va gaz yoʻllarini chizadi: har bir portdan chiqib, umumiy balandlikkacha koʻtariladi, ACR misdan (1-5/8 dyuymgacha boʻlgan quvur tavlangan oʻram, undan katta boʻlgan quvur choʻzilgan holda) va bu {{ui:Ortga qaytarish}} ning bitta qadami boʻladi. Refnet faqat oʻz liniyasini oladi: kirishiga tashqi tomondan va ichki qurilmalarga yoʻnalgan tarmoqdan chiqadi. Har bir yoʻl oʻzining quyi oqim uchi oʻlchamini oladi (ichki qurilma yoki refnet kirishi); boshqa uchidagi port boshqa oʻlchamda boʻlsa, {{ui:Ulanishlarni tekshirish}} uni roʻyxatga oladi: reduktor shu yerga qoʻyiladi. Ikkita ichki qurilma orasida refnet boʻlishi kerak.

Yoʻllarni keyin xuddi boshqa quvur yoʻli kabi siljiting; ularning uchlari portlarda qoladi. Qavatlar orasidagi yoʻllar {{ui:Quvur}} bilan chiziladi: sovutgich portidan boshlangan quvur oʻz tizimini, ACR misini va oʻlchamini oladi.

## Liniya toʻplami jadvalini oʻzgartirish

{{ui:Yigʻilish}} ni oching va {{ui:Liniya toʻplami oʻlchamlari}} ni tanlang. Har bir qator shuni bildiradi: shu quvvatgacha (kW), bu suyuqlik quvuri va bu gaz quvuri.

| Gacha | Suyuqlik | Gaz |
|---|---|---|
| 2.8 kW | Ø6.35 (1/4") | Ø9.52 (3/8") |
| 5.6 kW | Ø6.35 (1/4") | Ø12.7 (1/2") |
| 16 kW | Ø9.52 (3/8") | Ø15.88 (5/8") |
| 22.4 kW | Ø9.52 (3/8") | Ø19.05 (3/4") |
| 33 kW | Ø9.52 (3/8") | Ø22.22 (7/8") |
| 47 kW | Ø12.7 (1/2") | Ø28.58 (1-1/8") |
| 71 kW | Ø15.88 (5/8") | Ø28.58 (1-1/8") |
| 104 kW | Ø19.05 (3/4") | Ø34.92 (1-3/8") |
| 180 kW | Ø19.05 (3/4") | Ø41.28 (1-5/8") |

Bular boshlangʻich, odatiy qiymatlar. Qatorni oʻzgartiring, qator qoʻshing yoki oʻchiring va {{ui:Saqlash}} ni tanlang: jadval modelda saqlanadi, shuning uchun faylda ishlayotgan hamma uni ishlatadi va {{ui:Ortga qaytarish}} uni qaytaradi. {{ui:Odatiy qiymatlardan foydalanish}} boshlangʻich jadvalni qaytaradi. Joylashtirilgan qurilmalar siz ularni oʻzgartirmaguningizcha oʻz portlarini saqlaydi.

## IFC faylida

Split va VRF tizimlarining ichki va tashqi qurilmalari SPLITSYSTEM turidagi IfcUnitaryEquipment boʻladi, obyekt turi qaysi ekanini koʻrsatadi ("Split indoor unit, wall-mounted", "Split indoor unit, ceiling cassette", "Split indoor unit, ducted", "Split outdoor unit", "VRF outdoor unit"). Fankoil AIRHANDLER turidagi IfcUnitaryEquipment boʻladi, obyekt turi "Fan coil unit": IFC4 da fankoil turi yoʻq, bitta xona uchun ventilyator, gʻaltak va filtr esa aynan AIRHANDLER tasvirlaydi. Refnet tugun JUNCTION turidagi IfcPipeFitting boʻladi ("Refnet joint"). IFC2X3 fayllari mos turlar bilan IfcEnergyConversionDevice va IfcFlowFitting oladi.

Sovutgich portlari va yoʻllari REFRIGERATION tizimlarida (suyuqlik liniyalari uchun bitta, gaz liniyalari uchun bitta), kondensat esa DRAINAGE tizimida boʻladi. ACR yoʻllari tashqi diametri boʻyicha nomlanadi. Liniya toʻplami jadvali loyihadagi CadCraft_HvacLineSets xossalar toʻplami hisoblanadi.

Shuningdek qarang: [Portlari bor MEP jihozlari](topic:mep-equipment), [Quvurlar va kanallarni jihozlarga ulash](topic:mep-connections) va [Quvurlar va kanallar](topic:pipes-and-ducts).
