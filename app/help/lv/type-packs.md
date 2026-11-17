---
title: Tipu komplekti: kopīgojiet sienu tipus kā atvērtus failus
summary: Saglabājiet sienu tipus ar to slāņiem, materiāliem, birkām un klasifikācijas kodiem, kā arī ģimenēm, kā vienu atvērtu failu (vienkāršs JSON vai IFC) un pievienojiet tos citam projektam. Sienu tipus no IFC faila, kas izveidots citā programmā, var nolasīt arī.
keywords: tipu komplekts, tipi, sienas tips, kopīgot, eksportēt, importēt, bibliotēka, atvērts formāts, json, ifc, IfcWallType, IfcMaterialLayerSet, IfcProjectLibrary, materiāli, slāņi, sagatave, biroja standarts, ģimenes
from: e4c91331
---

## Ko jūs darīsiet

Pārnesiet savus sienu tipus no viena projekta uz citu vai nododiet tos kādam, kas strādā citā programmā. Tipu komplektā katrs sienas tips ir ar saviem slāņiem, biezumiem, materiāliem, serdi, dobumiem, slāņu prioritāti, izstrādes līmeni, daudzuma datiem un klasifikācijas kodiem, kā arī visām pievienotajām ģimenēm. Tas ir atvērts fails: vienkāršs JSON teksts, ko var lasīt ikviens, vai IFC fails. Nekas tajā nav piesaistīts uzņēmumam, valstij vai kontam.

## Saglabājiet tipus no projekta

1. Atveriet **Dati** modeļa joslā un izvēlieties {{ui:Tipu komplekti}}.
2. Sadaļā {{ui:Saglabāt tipus no šā projekta}} atzīmējiet sienu tipus, kas jāietver. Projekta paši tipi ir atzīmēti; sākuma tipu var pievienot, un tas tiek ievietots kā kopija. Atzīmējiet ģimenes, ja vēlaties tās iekļaut.
3. Ierakstiet {{ui:Pakas nosaukums}}.
4. {{ui:Saglabāt kā paku (.json)}} lejupielādē failu `.cctypes.json`. {{ui:Saglabāt kā IFC (.ifc)}} lejupielādē IFC failu, kurā ir tikai tipi: katrs sienas tips kā IfcWallType ar savu materiālu slāņu kopu, materiāliem un klasifikāciju jebkurai BIM programmai.

## Pievienojiet tipus projektam

1. Tajā pašā logā izvēlieties {{ui:Atvērt paku vai IFC failu…}} un izvēlieties `.json` paku vai `.ifc` failu.
2. Logā ir uzskaitīts, ko fails satur: katrs sienas tips ar biezumu, slāņu skaitu un kodiem, materiāliem un ģimenēm.
3. Izvēlieties, kas notiek ar {{ui:Tips, kas šim projektam jau ir}}: **Paturēt projekta**, **Pievienot paku kā kopiju** (tam tiek dots jauns nosaukums, kas beidzas ar "(2)"), vai **Aizstāt (tikai tad, ja neviena siena to neizmanto)**.
4. {{ui:Pievienot projektam}}. Logā ir uzskaitīts, kas tika pievienots, nokopēts, aizstāts vai paturēts. Tā ir viena atsaukšanas darbība.

Jaunie tipi uzreiz parādās sienas rīka tipu sarakstā.

## Grīdu, jumtu un griestu tipi

Saglabājamo tipu saraksts satur arī projekta grīdu, jumtu un griestu tipus un to sākuma tipus (atzīmēti kā Floor, Roof, Ceiling). Tipu komplektā var būt visi četri veidi; katrs tips nosauc savu IFC klasi (IfcWallType, IfcSlabType, IfcCoveringType). Grīdas, jumta vai griestu tipu, ko izmanto elementi, no komplekta neaizstāj: mainiet to tipa redaktorā.

## Viens tips kā bibliotēkas vienums

Atzīmējiet tieši vienu tipu un izvēlieties **Saglabāt kā bibliotēkas vienumu…**. Tas saglabā failu `.cctype.json`: bibliotēkas vienumu tipā Types, kurā ir šis viens tips (tā slāņi, materiāli, LOD un klasifikācijas kodi). Augšupielādējiet to bibliotēkā, lai to kopīgotu. **Atvērt paku vai IFC failu** nolasa arī šādu vienumu un pievieno tā tipu projektam kā paku.

## Noderīgi zināt

- IFC fails no citas programmas var tikt atvērts arī šeit. Katrs tā sienas tips, kam ir materiālu slāņi, tiek nolasīts: nosaukums, slāņu materiāli un biezumi, kā arī dobums ir paša faila. Kuri slāņi ir serde un ko katrs slānis dara (apdare, konstrukcija, siltināšana) tiek minēts, tips ir atzīmēts kā **(guessed)**, un to jāpārbauda sienas tipa redaktorā. Sienas tips bez slāņiem tiek izlaists un nosaukts.
- Materiāls, kas jau ir projektā, tiek paturēts kā ir. Jauns materiāls, kura nosaukums jau ir aizņemts, pēc nosaukuma saņem "(pack)".
- Tipu, ko izmanto sienas, no komplekta nekad neaizstāj. Mainiet to sienas tipa redaktorā, kas pareizi pārvieto tā sienas.
- Kods, kas iestatīts vienai sienai, nepārvietojas: tas pieder šai sienai. Kods, kas iestatīts tipam, pārvietojas.
- Fails ar lauku, ko formāts neparedz, slāni, kura materiāls trūkst, vai jebko, kas nav vienkāršs teksts, tiek noraidīts, un ziņojumā ir norādīts, kur un kāpēc.
- Vēl nav izveidots: grīdu, jumtu un griestu tipi (šajā versijā tiem nav tipu: katram ir savs biezums), durvju un logu tipi, izņemot ģimenes, un šrafējumi vai krāsas no citas programmas faila.
