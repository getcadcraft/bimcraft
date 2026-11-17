---
title: Mērīt attālumus, virsmu laukumus un atrašanās vietas 3D
summary: Mēriet starp diviem IFC modeļa punktiem ar piesaisti stūriem un malām, nolasiet starpību pa X, Y un Z un izmēriet plakanas virsmas laukumu.
keywords: mērīt, mērījums, attālums, garums, izmērs, laukums, virsmas laukums, piesaistīt, stūris, mala, mērlente, lineāls, atstarpe, atrašanās vieta, ģeogrāfiskais platums, ģeogrāfiskais garums, lat long, koordinātes, georeferencēšana, kartes pārveidojums, EPSG, uzmērījums, austrumu koordinātes, ziemeļu koordinātes, WGS 84, datums
from: 5f430bba
---

## Ko jūs darīsiet

Pārbaudiet atstarpi, sienas garumu vai virsmas izmēru tieši no modeļa, neatverot autorēšanas programmu.

## Soļi

1. Atveriet IFC modeli.
2. Noklikšķiniet {{ui:Mērīt}} rīkjoslā vai nospiediet {{key:M}}. Skata apakšā atveras josla.
3. **Attālums:** ar izvēlētu {{ui:Attālums}} noklikšķiniet pirmo punktu, tad otro. Tuvu stūrim rādītājs piesaistās tam, tuvu malai – malai; mazais uzraksts pie rādītāja norāda, kurš. Katrs klikšķu pāris veido vienu mērījumu.
4. **Virsmas laukums:** izvēlieties {{ui:Virsmas laukums}} un noklikšķiniet virsmu. Visa plakanā virsma iedegas, un tās laukums tiek rādīts.
5. **Taisnas līnijas:** turiet {{key:Shift}}, izvēloties otro punktu, vai nospiediet {{ui:Taisna}} joslā, lai to saglabātu. Līnija iet pa vienu asi, kurai rādītājs ir tuvākais (augšskatā pa plāna X vai Y; citos skatos pa X, Y vai Z), un rādītāja uzraksts saka „taisni pa asi”. {{key:M}} joprojām sāk un aptur Mērīt.
6. Noklikšķiniet {{ui:Notīrīt}}, lai noņemtu mērījumus, vai {{ui:Gatavs}} (vai {{key:Esc}}), lai beigtu mērīt.

## Ko vajadzētu redzēt

- Līniju starp abiem punktiem ar tās garumu uz tās, un joslā garumu ar to, cik tālu tas iet pa X, Y un Z (modeļa asīs, Z uz augšu), visu mērvienībās, ko izvēlējāties rīkjoslā sadaļā {{ui:Mērvienības}}.
- Virsmas laukumu kvadrātmetros, uz virsmas un joslā.
- Uzraksti paliek pie saviem mērījumiem, kamēr griežat, pārvietojat un tuvināt.
- Kamēr mērāt, klikšķi neatlasa elementus. Griezuma plakne vai kaste joprojām griež modeli, un jūs varat mērīt to, ko tā rāda, ieskaitot griezuma virsmas.

## Kur punkts atrodas uz zemes

Noklikšķiniet {{ui:Atrašanās vieta}} mērīšanas joslā, tad noklikšķiniet punktu uz modeļa (tas piesaistās stūriem un malām kā attālumos). Josla rāda:

- **ģeogrāfisko platumu un garumu** decimālgrādos un grādos, minūtēs un sekundēs, sākumā WGS 84;
- **kartes koordinātes** (austrumu un ziemeļu koordinātes, rakstītas rīkjoslā izvēlētajās {{ui:Mērvienības}}) modeļa pašas kartes sistēmā, piemēram, `EPSG:28356`;
- **augstumu** un vertikālo datumu, ko fails nosauc, un faila **pašu datumu** (piemēram, GDA94).

{{ui:Kopēt}} ieliek visu starpliksnē vienā rindā. Mainiet sistēmu, kādā ir ģeogrāfiskais platums un garums, sadaļā {{ui:Iestatījumi}} › {{ui:BimCraft}} › {{ui:Atrašanās vieta}}: WGS 84 (kā GPS un tīmekļa kartēs), faila pašu datumu vai citu bieži lietotu, piemēram, ETRS89 vai NAD83.

Tam nepieciešams georeferencēts modelis: tāds, kas eksportēts ar kartes koordinātēm (kartes pārveidojums uz projicētu sistēmu ar EPSG kodu). Modelis, kam ir tikai objekta ģeogrāfiskais platums un garums, saņem aptuvenu pozīciju, kas aprēķināta no objekta punkta un tā patiesā ziemeļa, un josla to saka. Ja atvērti vairāki modeļi, katrs punkts izmanto sava modeļa georeferenci.

:::note
Pārejas starp datumiem (piemēram, GDA94 uz WGS 84) notiek bez režģa failiem, tāpēc tās ir precīzas līdz dažiem metriem; statusa rinda norāda, cik labi. Pašas kartes koordinātes ir precīzas.
:::

## Biežākās kļūdas

- **„…nav georeferences”.** Failam nav kartes pārveidojuma un nav objekta ģeogrāfiskā platuma un garuma. Eksportējiet to vēlreiz ar iestatītu koordinātu sistēmu (kopīgās koordinātes / uzmērījuma punkts autorēšanas rīkā).
- **Kartes koordinātes, bet nav ģeogrāfiskā platuma un garuma.** Fails nosauc savu kartes sistēmu bez EPSG koda vai ar kodu, kas nav sarakstā; statusa rinda norāda, kurā.

- **Punkts nokrīt uz virsmas, nevis stūrī.** Piesaiste skatās uz elementu zem rādītāja. Pabīdiet tuvāk stūrim vai tuvināt.
- **Laukums ir mazāks, nekā gaidīts.** Atvērumi nav ieskaitīti, un virsma, kas liecas, ir vairākas virsmas: noklikšķiniet katru.
- **{{key:Esc}} apturēja mērīšanu.** Pirmais {{key:Esc}} nomet pusizveidotu attālumu; otrais aptur.

## Tālāk

- [Sagrieziet IFC modeli ar griezuma plakni](topic:section-plane)
- [Paslēpt, izolēt un redzēt caur elementiem](topic:hide-and-isolate)
