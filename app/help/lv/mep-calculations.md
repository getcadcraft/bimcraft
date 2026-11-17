---
title: Caurulu un gaisa vadu izmēru aprēķins, kabeļu aizpildījuma un apgaismojuma pārbaude
summary: Pārbaudiet ūdens padeves cauruļu un gaisa vadu izmērus ar spiediena zudumu, novadiet kabeļus pa kabeļu trepēm un kabeļu caurulēm un redziet to aizpildījumu, un aprēķiniet apgaismojumu telpās no IES vai EULUMDAT failiem. Noklusējumi ir atzīmēti; ierakstiet spēkā esošā kodeksa vērtības.
keywords: izmēru aprēķins, cauruļu izmērs, gaisa vada izmērs, spiediena zudums, sanitāro ierīču vienības, pieprasījums, Hunter, Hazen-Williams, ātrums, berze, vienāda berze, ventilatora spiediens, aizvars, kritiskais ceļš, kabeļu trepe, kabeļu caurule, aizpildījums, kabeļu saraksts, ies, ldt, eulumdat, fotometrija, apgaismojums, lukss, vienmērīgums, apgaismojuma aprēķins, jaudas blīvums, mep, aprēķini, problēmas
from: 9cb90815
---

## Ko darīsiet

Zīmējiet caurules, gaisa vadus, kabeļu trepes un kabeļu caurules kā parasti, tad atveriet **Aprēķinu** paneli. Katrā cilnē tiek nolasīts modelis, parādīta tabula un uzskaitīts, kas nav kārtībā, kā **Problēmas** ⚠ panelī. Kad izmērs novērstu problēmu, **Lietot izmērus** maina posmus vienā atsaukšanas solī.

Šie ir zīmēšanas palīglīdzekļi. Katrs noklusējums ekrānā ir atzīmēts, un neviens no tiem nav kodeksa tabula: ierakstiet skaitļus no standarta, pēc kura projektējat, un rezultātu pārskatiet inženierim, kas par to atbild.

## Caurules

1. Izvēlieties **sistēmas** atslēgu (aukstais ūdens ir `cw`, karstais ūdens `hw`).
2. Iestatiet lielāko ātrumu un, ja vēlaties pārbaudīt spiedienu, spiedienu avotā un mazāko spiedienu, kāds nepieciešams sanitārajai ierīcei.
3. Noklikšķiniet uz {{ui:Pārbaudīt}}.

Katra caurule nes zemāk esošo sanitāro ierīču vienību pieprasījumu. Pieprasījums nāk no līknes, kas sanitāro ierīču vienības salīdzina ar plūsmu, kā aprakstīja Hunter. **Iebūvētā līkne ir piemērs, nevis kodeksa tabula**; problēmas to norāda, kamēr neievadāt savu. Berze ir Hazen–Williams, detaļām ir zuduma koeficienti, un pacelšanās zaudē 9.8 kPa uz metru. Ierīces vienības nāk no tās veida vai no skaita, ko iestatāt ar palīgrīku `loads_set`.

## Gaisa vadi

Iestatiet sistēmu, berzes līmeni (vienāda berze) vai ātrumu un jebkuru zudumu no dzesētāja, filtra vai klusinātāja. Termināļi gaisa plūsmu ņem no `loads_set` difuzorā. Tabulā rādīts ātrums un berze katrai daļai, **ventilatora spiediens** kritiskajā ceļā un spiediens, ko katra cita termināla aizvars jāuztver. Detaļu zudumi izmanto noapaļotus noklusējuma koeficientus, nevis detaļu datubāzi.

## Kabeļu trepes un kabeļu caurules

Zīmējiet tās ar gaisa vada rīku: sistēmas **Kabeļu trepe** un **Kabeļu caurule** tiek saglabātas kā kabeļu nesēji, tāpēc citas programmas tās nolasa kā trepes un caurules. Cilnē Kabeļi ielīmējiet kabeļu sarakstu (marķējums, ārējais diametrs mm, skaits, no, uz). `from` un `to` ir iekārtas marķējums vai punkts `x,y,z` milimetros. Kabeļi seko īsākajam nepārtrauktajam maršrutam pa trepēm un caurulēm; katrs posms rāda savu aizpildījumu salīdzinājumā ar jūsu ierakstītajām robežvērtībām, un saraksts saglabājas kā CSV ar garumu, kas ietver rezerves procentu un galus.

## Apgaismojums

Katram gaismeklim piešķiriet IES (LM-63) vai EULUMDAT failu ar palīgrīku `photometry_set`. Ievadiet mērķus, režģa soli un darba virsmas augstumu. Rezultāts ir tikai **tiešs** apgaismojums: bez atstarojumiem starp virsmām un bez ēnām, tāpēc telpā tas ir zemākā robeža.

## Ugunsdzēsības sprinkleri

Papildinājumam **Ugunsdzēsības sprinkleri** ir sava cilne; skatiet tā palīdzību.
