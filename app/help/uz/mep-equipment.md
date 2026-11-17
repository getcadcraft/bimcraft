---
title: Portli MEP jihozlari
summary: Umumiy havo ishlov beruvchilar, ventilyatorlar, nasoslar, qozonlar, suv isitgichlar, terminal bloklar, diffuzerlar, panjaralar va baklarni siz kiritgan qiymatlar boʻyicha oʻlchamda joylashtiring, har biri quvur va havo kanali ulanishlari bilan, ularga boshqa yoʻlaklar ulanadi.
keywords: mep, jihoz, havo ishlov beruvchi, ahu, ventilyator, kanalli ventilyator, nasos, qozon, suv isitgich, terminal blok, vav, diffuzer, panjara, bak, port, portlar, ulanish, ulanish uchi, boʻgʻiz oʻlchami, hvac, santexnika, mexanik, ifc, ifcpump, ifcairterminal, ifcunitaryequipment
from: df1bf8c5
---

## Nima qilasiz

Jihozlarni quvur va havo kanallaringizning uchlariga qoʻying. Har bir qism kiritgan qiymatlar boʻyicha oʻlchamlangan umumiy shakl boʻladi, uning ulanishlari **portlar** sifatida: qaysi joyda quvur yoki havo kanali qoʻshiladi, qaysi tizim, oqim qaysi yoʻnalishda va qanday oʻlcham. Portdan chizilgan quvur va havo kanallari uning oʻlchami va tizimini oladi hamda unga mahkam qoladi: qarang [Quvur va havo kanallarini jihozga ulash](topic:mep-connections).

:::note
Bu loyihalash va muvofiqlashtirish yordami, uni muhandis oʻlchaydi. Jihoz ishlab chiqaruvchi mahsuloti emas: quvvat, vazn yoki ishlab chiqaruvchi ulanish oʻlchamlari yoʻq. Kerak boʻlganda ishlab chiqaruvchi modelini MEP dasturingizdan IFC sifatida olib keling.
:::

## Qurilmani joylashtirish

1. {{ui:Chizish}} ni yoqing, {{ui:Qurilish}} ni oching va {{ui:Jihozlar}} ni tanlang.
2. Panelda turni tanlang va oʻlchamlarini kiriting. Har bir tur oʻz parametrlarini soʻraydi:

| Turi | Kiritasiz | Portlari |
|---|---|---|
| Havo ishlov beruvchi | uzunlik, kenglik, balandlik; taʼminot va qaytish teshiklari; gʻaltak quvuri oʻlchami va tizimi; kondensat oʻlchami | taʼminot havo kanali chiqadi, qaytish havo kanali kiradi, gʻaltak kiradi va chiqadi, kondensat drenaji |
| Kanalli ventilyator | diametr, uzunlik, tizim | havo kanali kiradi va chiqadi |
| Nasos | quvur oʻlchami, tizim | kirish va chiqish |
| Qozon | uzunlik, kenglik, balandlik, quvur oʻlchami, gaz oʻlchami, tutun quvuri diametri | isitish taʼminoti chiqadi va qaytish kiradi, gaz kiradi, tutun chiqadi |
| Suv isitgich | diametr, balandlik, quvur oʻlchami, gaz yoki elektr | sovuq suv kiradi, issiq suv chiqadi (gaz yonsa, gaz kiradi va tutun quvuri ham) |
| Terminal blok | uzunlik, kenglik, balandlik, dumaloq kirish, chiqish kengligi va balandligi | taʼminot havosi kiradi va chiqadi |
| Diffuzer | yuz, boʻgʻiz, tizim | uning boʻgʻizi (havo kiradi) |
| Panjara | yuz kengligi va balandligi, boʻgʻiz kengligi va balandligi, tizim | uning boʻgʻizi (havo qaytish yoki chiqarish havo kanaliga chiqadi) |
| Bak | diametr, balandlik, quvur oʻlchami, tizim | tepada kirish, pastda yaqinida chiqish |
| Radiator | uzunlik, balandlik, chuqurlik, quvur oʻlchami, tizim | oqim bir uchining tepasidan kiradi, qaytish ikkinchi uchining pastidan chiqadi |
| Konvektor / panelli isitgich | uzunlik, balandlik, chuqurlik, quvur oʻlchami, tizim | oqim bir uchidan kiradi, qaytish ikkinchisidan chiqadi |
| Ishlab chiqaruvchi oilasi | oila (qarang: [Quvur spetsifikatsiyalari, klapanlar, shiberlar va ishlab chiqaruvchi oilalari](topic:pipe-specs)) | oilasiga berilgan portlar |

3. **Joylashuv**ni belgilang — uning asosining sathdan balandligi. Diffuzer yoki panjaraning balandligi uning yuzi: shift balandligini kiriting.
4. Xohlasangiz **Yorliq**ni kiriting (`AHU-1`); bir xil turdagi keyingi qurilma keyingi raqamni oladi.
5. Koʻrsatkichni rejada harakatlantiring: asos va uning portlari unga ergashadi. {{key:R}} ni bosing — 90° buriladi. Qayerga borishini bosing.

Quvur oʻlchamlari — poʻlat quvur oʻlchamlari (ASME B36.10M). Nasosdan boshqa materialdagi quvur xuddi shu nominal oʻlchamni oʻz materialida oladi.

## Oʻzgartirish yoki olib tashlash

Rejada yoki 3D koʻrinishda tanlang. Xususiyatlar siz kiritgan barcha oʻlchamlarni, yorligʻini, X, Y, balandligi va burilishini, shuningdek har bir portni koʻrsatadi: uning oʻlchami, tizimi, oqim yoʻnalishi va biror narsa ulanganmi. Har bir oʻzgarish {{ui:Ortga qaytarish}} ning bir qadami; uning portlariga mahkamlangan yoʻlaklar u bilan birga harakatlanadi. {{key:Delete}} uni olib tashlaydi; unga mahkamlangan yoʻlaklar qoladi va Ulanishlar tekshiruvi ularni roʻyxatlaydi.

## IFC faylida

Har bir tur oʻzining IFC sinfi sifatida saqlanadi: IfcUnitaryEquipment (havo ishlov beruvchi), IfcFan, IfcPump, IfcBoiler (qozon; suv isitgich suv turidagi IfcBoiler boʻladi, obyekt turi "Water heater"), IfcAirTerminalBox (terminal blok), IfcAirTerminal (diffuzer, panjara) va IfcTank, har bir turdagi va oʻlchamdagi qurilmalar uchun umumiy tur bilan. IFC2X3 fayllari mos turlar bilan IfcEnergyConversionDevice, IfcFlowMovingDevice, IfcFlowController, IfcFlowTerminal va IfcFlowStorageDevice oladi. Har bir port — ulanish joyiga joylashtirilgan, tashqariga qaragan, oqim yoʻnalishi va tizimi bilan IfcDistributionPort; boshqa dasturlar qaysi yoʻlak qaysi portga ulanganini oʻqiydi. Qurilma har bir portining tizimiga qoʻshiladi va joylashtirilgan har bir kutubxona elementining kutubxona toʻplamlarini olib yuradi.
