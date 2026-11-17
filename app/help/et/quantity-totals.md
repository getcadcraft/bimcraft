---
title: Koguste liitmine, elementide loend ja ruumide tabel
summary: Loenda elemente ja liida kokku nende pikkused, pindalad, mahud või mis tahes arvuomadus, rühmitatuna mis tahes omaduse järgi; loetle üks rida elemendi kohta või koosta ruumide tabel pindalade ja mahtudega. Igaüks laaditakse alla CSV-na.
keywords: kogus, kogused, koguste arvestus, summa, loend, eelarve, csv, rühmita, loenda, pikkus, pindala, maht, ruumid, ruumide loend, pindalade loend, elementide loend, BOQ, QTO
from: e2e7210c
---

## Mida sa teed

Saa mudelist kogused: seinte pikkused korruste kaupa, uste arv tüübi järgi, plaadi maht materjali järgi, iga tsooni maksumus.

## Sammud

1. Ava IFC-mudel.
2. Ava vasakpoolses paneelis {{ui:Koguste kokkuvõtted}}.
3. Valikus {{ui:Loendus}} vali {{ui:Kõik elemendid}} või ainult valitud.
4. Jaotises {{ui:Rühmita}} vali omadus, näiteks {{ui:Klass}}. Klõpsa {{ui:Lisa rühm}}, et jaotada veel, kuni kolm rühma, näiteks {{ui:Korrus}} järgi.
5. Jaotises {{ui:Liida}} märgi arvud, mida summeerida. Mudeli koguste jaotised on algul märgitud.
6. Klõpsa {{ui:Laadi CSV alla}}, et avada tabel tabelarvutuses.

## Mida peaksid nägema

- Rida iga rühma kohta, kus on elementide arv ja iga summa, ning summarida.
- Elemendid ilma väärtuseta loetakse, kuid need ei lisa midagi. Sellisel juhul lisab CSV summa kõrvale veeru „jäeti välja“, et näeksid, mitu.
- Arvud on faili enda ühikutes, nii nagu fail need salvestab, sageli pikkused millimeetrites.

## Üks rida elemendi kohta või ruumid

Muuda {{ui:Näita}}:

- **Üks rida elemendi kohta**: iga element on eraldi real, omadused jaotises {{ui:Veerud}} ja arvud jaotises {{ui:Liida}}. CSV algab iga elemendi GlobalId-ga. Klõpsa rea esimesel väärtusel, et valida see element.
- **Ruumid**: iga ruum oma numbri, nime, korruse, pindala ja mahuga ning nende summad. Pindalad ja mahud tulevad ruumi kogustest, nii nagu fail need esitab. Kui faili neid pole, mõõdetakse need ruumi kujult m² ja m³ ning kuvatakse kaldkirjas; CSV ütleb, kumb on kumb.

## Järgmiseks

- [Leia elemendid klassi, nime või omaduse järgi](topic:find)
- [Värvi elemendid omaduse järgi](topic:color-by-property)

## Infrastruktuur (IFC 4.3)

Vali vaadete loendist **Infrastruktuur (IFC 4.3)**, et näha teid, raudteid, sildu ja merekonstruktsioone liigi ja tüübi kaupa summeerituna, koos pikkuse, pindala ja mahuga, mille fail ise esitab. Koguseid, mida fail ei esita, ei arvutata: need jäetakse tühjaks. **Saada infrastruktuuri kogused TakeoffCraftile** salvestab faili `.quantities.json`, mille TakeoffCraft avab tüüpi kogustena.
