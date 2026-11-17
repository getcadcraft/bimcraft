---
title: Tērauda cauruļu spoles un spoļu lapas
summary: Sagrieziet tērauda cauruļvadu ar sastumjamo metinājumu spolēs līdz garākajam garumam un montāžas metinājumos, ko izvietojat, sanumurējiet tās un lejupielādējiet spoļu lapu katrai spolei (3D skats, griezuma garumi, veidgabali, metinājumi, materiālu saraksts) kā PDF un CSV; gaisa vadiem tiek izveidots griešanas saraksts ar taisniem gabaliem.
keywords: spole, spoles, spoļu lapa, izometrija, izgatavošana, iepriekšēja ražošana, montāžas metinājums, ceha metinājums, sastumjamais metinājums, griezuma garums, griešanas saraksts, materiālu saraksts, bom, tērauda caurule, schedule 40, līnijas numurs, gaisa vadu griešanas saraksts, gaisa vadu gabali
from: 539f51de
---

## Ko jūs darīsiet

Pārvērst tērauda cauruļvada trasi gabalos, ko ceha metina un montētājs uzstāda: spolēs, kas nav garākas par jūsu izvēlēto garumu, sadalītas tur, kur novietojat montāžas metinājumus, katra ar savu lapu.

Spolēs tiek griezta tikai **tērauda caurule ar sastumjamo metinājumu** (caurules izmēri ASME B36.10M, elkoņi ASME B16.9 garajā rādiusā). Vara, PVC un PEX savienojumi nav sastumjamie metinājumi, tāpēc to trasēm spoļu nav.

## Trases sagriešana spolēs

1. Izvēlieties tērauda caurules trasi. Rekvizītos atzīmējiet **Sagriezt spolēs**.
2. **Garākā spole**: lielākais centrālās līnijas garums, ko viena spole var būt (sākumā 6 m, aptuveni 20 ft).
3. **Līnijas numurs**: daļa no katras spoles numura. Jaunā spoļu trase saņem nākamo brīvo savas sistēmas numuru.

Spoles tiek numurētas pa trasi no tās pirmā punkta: `CHW-12-S01`, `CHW-12-S02` … (sistēma, līnijas numurs, spole). Spole aug detaļu pa detaļai; detaļa, kas to padarītu pārāk garu, sāk nākamo, un taisns garums, kas garāks par spoli, tiek griezts tur, kur spole ir pilna.

## Montāžas metinājumu izvietošana

1. Atveriet {{ui:Būvējums}} un izvēlieties {{ui:Montāžas metinājums}}.
2. Noklikšķiniet uz spoļu caurules vietas, kur jāatrodas montāžas metinājumam. Taisnā garumā caurule tur tiek pārgriezta; veidgabalā vai vārstā metinājums pārvietojas uz tuvāko savienojumu.

Trases rekvizītos ir uzskaitīti montāžas metinājumi, katrs ar {{ui:Noņemt}}. Katra izmaiņa ir viens solis {{ui:Atsaukt}}.

## Spoļu lapas

Spoļotas trases rekvizītos:

- {{ui:Spoļu lapas (PDF)}}: viena lapa katrai spolei. Kreisajā pusē spole 30° izometriskajā skatā: tās taisnie garumi numurēti, ceha metinājumi attēloti kā punkti, montāžas metinājumi atzīmēti ar FW, un plāna ziemeļi. Labajā pusē spoles numurs, izmērs, specifikācija un garums, tad tās **griezuma garumi**, **veidgabali**, **metinājumi** (ceha sastumjamais metinājums katrā savienojumā spoles iekšpusē, montāžas metinājums tur, kur tā saskaras ar nākamo spoli) un tās **materiālu saraksts** ar caurules svaru (ASME B36.10M gludo galu svars).
- {{ui:Spoļu saraksts (CSV)}}: tas pats, bloks katrai spolei.

:::note
Griezuma garumi ir gals līdz galam, kā zīmēts: nekas netiek atņemts ne sakņu spraugai, ne metinājuma pielaidei. Elkoņi ir ASME B16.9 garajā rādiusā; T veida savienojumi, reducētāji un vārsti ir vispārīgi, izmēroti pēc caurules, nevis pēc ASME B16.9 vai ražotāja, un lapa to norāda. Veidgabalu svari nav doti. Zīmēšanas un koordinācijas palīglīdzeklis, ko izmēro inženieris.
:::

## IFC failā

Katrai spoļotas trases daļai ir **CadCraft_Spool** ar tās SpoolId, trasi, spoles numuru trasē un to, kur tā sākas un beidzas pa trasi. Trase saglabā savus noteikumus (garākā spole, montāžas metinājumi, līnijas numurs) savā kopā, tāpēc spoles pēc faila atkārtotas atvēršanas ir tādas pašas.

## Gaisa vadi: griešanas saraksts

Atveriet {{ui:Būvējums}} un noklikšķiniet {{ui:Gaisa vadu griešanas saraksts}}: CSV ar taisniem gaisa vadu gabaliem pēc sistēmas, formas un izmēra, katrs taisnais garums sagriezts gabalos ar **Gabala garumu** gaisa vada joslā (sākumā 1500 mm, aptuveni 5 ft) un atlikumu. Tikai garumi: bez šuvēm, biezumiem vai savienotājiem.
