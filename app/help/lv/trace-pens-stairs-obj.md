---
title: Pārzīmējiet stāvu, iestatiet pildspalvas pa skatiem, uzskicējiet kāpnes un atveriet OBJ
summary: Parādiet citu līmeni punktētu zem plāna un saskaņojiet to; piešķiriet sienām, durvīm un logiem atsevišķu pildspalvu vienā skatā; zīmējiet gājiena līniju, lai iegūtu kāpnes; atveriet Wavefront OBJ tīklu.
keywords: pārzīmēšanas atsauce, ēna, pamatslānis, pildspalva, līnijas biezums, līnijas tips, pārrakstīšana, kāpnes, skice, laukums, OBJ, tīkls, imports, Wavefront
from: 333ebbde
---

## Pārzīmējiet līmeni

Izvēlieties {{ui:Pārzīmēt}} izvēlnē {{ui:Būvējums}}, pēc tam skatu sarakstā: cita līmeņa plānu, līmeņa griestu plānu vai izsaukuma skatu (apgriezts līdz tā izgriezumam). Tā sienas, kolonnas un grīdas tiek rādītas punktēti zem plāna, ko zīmējat. Pārvietojiet to, noklikšķinot bāzes punktu atsauces objektā un pēc tam vietu, kur šim punktam jābūt, vai ierakstiet X, Y un leņķi (tas pagriežas ap savu centru). {{ui:Atiestatīt}} to atgriež vietā, {{ui:Paslēpt}} to noņem. Tā ir tikai atsauce: to nevar atlasīt, tā netiek drukāta un netiek saglabāta IFC. BimCraft to atceras katram līmenim šajā pārlūkprogrammā.

## Pildspalvas pa skatiem

Izvēlieties {{ui:Pildspalvas}}. Norādiet, kam paredzēta pildspalva: visas sienas, visas durvis, visi logi, atlasītā elementa tips vai atlasītie elementi. Izvēlieties biezumu, līniju (cieta, punktēta, punktīra) un krāsu, pēc tam {{ui:Lietot}}. Izmaiņas attiecas tikai uz šā līmeņa plānu. Atlase ir stiprāka par tipu, un tips ir stiprāks par visu kategoriju. {{ui:Notīrīt visu}} tās noņem. Tās tiek saglabātas šajā pārlūkprogrammā. Atzīmējiet **Pildspalvu krāsas 3D**, lai 3D skatā uzkrāsotu krāsu pildspalvas uz modeļa (biezumu vai punktējumu nosaka līnija, tāpēc tur redzama tikai krāsa); noņemiet atzīmi, lai atgrieztos. {{ui:Drukāt}} tās zīmē plāna PDF: biezums mērogojas no ekrāna (noklusējuma sienas pildspalva 1.75 pikseļi ir 0.5 mm), punktējumi paliek punktējumi, un krāsa tiek drukāta savā papīra tēmas vērtībā.

## Kāpnes no skices

Izvēlieties {{ui:Skicēt kāpnes}} un noklikšķiniet gājiena līnijas stūrus, sākot ar apakšējo pakāpienu. Viena līnija ir taisnas kāpnes, divas līnijas, kas saiet taisnā leņķī, ir L, un trīs līnijas (uz augšu, pāri, atpakaļ) ir U. Nospiediet {{key:L}}, lai zīmētu laukumu: noklikšķiniet tā stūrus un nospiediet {{key:Enter}}, un tā īsā mala nosaka kāpņu platumu. Nospiediet {{key:Enter}}, lai novietotu kāpnes. Katrs pakāpiens tiek aprēķināts no jūsu līnijas garuma un paaugstinājumu skaita, kāds nepieciešams augstumam. Pēc tam tās ir parastas kāpnes: mainiet tās sadaļā Rekvizīti, un kāpņu telpa un margas seko.

Atzīmējiet **Padarīt par ģimeni** rīka joslā (vai nospiediet {{key:F}}) pirms {{key:Enter}}, lai kāpnes novietotu kā ģimeni (taisnas, L vai U kāpnes). Tās ievietotas kā viens elements un ģimenes redaktorā atveras ar parametriem: platums, pakāpiens, kopējais augstums, pakāpieni katrā posmā un U veida sprauga; tāpēc varat pievienot izmērus, plāna simbolu vai karstos punktus. Soļi un paaugstinājuma augstums seko no tiem. Tām nav margu un kāpņu telpas: tās pieder parastām kāpnēm.

## Atveriet OBJ

Atveriet `.obj` failu kā jebkuru citu failu. OBJ failam nav mērvienību, tāpēc BimCraft lasa metrus ar Y uz augšu, kā to raksta lielākā daļa programmu. Katrs objekts vai grupa kļūst par vienu tīkla elementu vienā līmenī, un pēc tam to varat skatīt, mērīt, griezt, novietot modelī un saglabāt kā IFC. Līnijas, līknes un virsmas tiek izlaistas, un statusa joslā par to tiek paziņots.

Objekts, kas ir tieši taisna prizma (slēgts tīkls ar diviem paralēliem, identiskiem galu virsmām un plakanām sānu virsmām, kas ir taisnā leņķī pret tām: plātne, stabs, sienas bloks, plāksne ar caurumiem), tiek saglabāts IFC kā IFC paša ekstrudētais cietais ķermenis ar savu kontūru un dziļumu, nevis kā trijstūru saraksts. Citas programmas to lasa kā īstu cietu ķermeni, tas paliek mazs, un tā dziļumu un kontūru vēlāk var rediģēt. Statusa joslā ir norādīts, cik objektu tā tika saglabāti. Viss, kas nav tieši prizma (konusveida forma, tīkls ar vienu pārvietotu virsotni, tīkls ar spraugu), paliek kā trijstūri. STEP fails tiek lasīts tāpat.
