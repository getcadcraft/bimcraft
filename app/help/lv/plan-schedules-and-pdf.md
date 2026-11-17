---
title: Specifikācijas, izmēri un plāna PDF
summary: Durvju, logu, sienu un telpu specifikācijas, kas mainās, kamēr zīmējat, izmēri plānā un stāva plāns, saglabāts kā PDF standarta mērogā.
keywords: specifikācija, durvju specifikācija, logu specifikācija, sienu specifikācija, telpu specifikācija, daudzumi, apjomu aprēķins, platība, csv, izklājlapa, izmēri, izmērs, drukāt, pdf, plots, mērogs, 1/4", 1:50, lapa
from: d97cd16e
---

## Ko jūs darīsiet

Redziet, cik liels ir ēka, ko zīmējat, kamēr to zīmējat: cik durvju un logu katra izmēra, cik daudz sienas katra tipa, cik liela katra telpa. Ievietojiet izmērus plānā un saglabājiet to kā PDF, lai drukātu vai nosūtītu.

## Specifikācijas

Ar ieslēgtu {{ui:Zīmēšana}} kreisajā panelī **Specifikācijas** rāda vienu tabulu vienlaikus:

- **Durvis** un **Logi**: katrs pēc savas atzīmes (D1, D2 … un W1 …, dotas, kad novietojat), tips, platums, augstums (un palodze), līmenis un siena, kurā tas atrodas.
- **Sienas pēc tipa**: katram sienas tipam — cik sienu, to biezums, to kopējais garums un sānu laukums kā **Bruto laukums**, **Atskaitījumi** un **Neto laukums**, ar kopsummu.
- **Telpas**: numurs, nosaukums, līmenis, platība un perimetrs, ar kopējo platību.
- **Grīdas**: katra grīda ar tās līmeni, veidu un biezumu, un tās bruto laukumu, atskaitījumiem un neto laukumu.
- **Apdares**: katrs sienu tipu apdares slānis (pēc materiāla un sienas puses) un griesti, ar virsmu skaitu un bruto, atskaitījumiem un neto.
- **Sienu tipi: apjomu dati**: ko reiz ievadīja katram sienas tipam (vienība, java, norma), ar sienu skaitu, to garumu un neto laukumu, un normu, reizinātu ar izmērīto daudzumu. Skatiet [Sienu konstrukcijas](topic:wall-assemblies).
- **Apdares pēc telpas**, **Apdares pēc sienas**, **Apdares pēc zonas** un **Apdares daudzumi**: kas sedz katru telpu, ar platībām, flīžu skaitu, ieskaitot griezumus, un pamatnes tilpumiem. Skatiet [Telpu apdares un apdares specifikācijas](topic:room-finishes).
- Jūsu pašu **iestatījumi**: specifikācija, ko sagrupējāt, saskaitījāt un saglabājāt zem nosaukuma. Skatiet [Specifikāciju izkārtojums, saglabāšana un eksports](topic:schedule-layouts).

Tabulas mainās ar katru rediģēšanu. Noklikšķiniet uz rindas vai vienas vērtības, lai izvēlētos elementus, no kuriem tā nākusi. {{ui:Lejupielādēt CSV}} saglabā tabulu, ko atvērt izklājlapā; zem tās ir **Lejupielādēt Excel** un **Kopēt Google Sheets**. **Telpu apdares** un **Specifikācija** ([Specifikācijas rakstīšana no modeļa](topic:specification)) atveras no tās pašas vietas.

## Katra slāņa laukums un tilpums

Izvēlieties **Slāņi: laukums un tilpums** specifikāciju sarakstā. Tajā ir viena rinda katram slānim katra sienas, grīdas, jumta un griestu tipa, kas ir lietošanā: elements, tips un tā LOD, slānis (skaitot no sienas ārējās puses vai no grīdas, jumta vai griestu augšas), tā materiāls un funkcija, biezums, elementu skaits, **neto laukums** un **tilpums**.

- Laukums ir šā tipa elementu neto laukums, mērīts tieši kā sienu, grīdu un apdares specifikācijā pēc projekta mērīšanas metodes. Jumts tiek mērīts pa slīpumu; nevienai mērīšanas metodei nav jumtu noteikuma.
- Tilpums ir šis laukums, reizināts ar paša slāņa biezumu.
- Grīda, jumts vai griesti bez tipa ir viena rinda: viens slānis ar savu biezumu.
- Gaisa dobums ir uzskaitīts ar savu laukumu un izlaists no kopējā tilpuma. Membrānai ir laukums, bet tilpuma nav.

Noklikšķiniet uz rindas, lai izvēlētos tās elementus. {{ui:Lejupielādēt CSV}} saglabā tabulu.

## Kā mēra laukumus

Katrs laukums ir trīs skaitļi, kas summējas: bruto mīnus atskaitījumi ir neto. Noteikums ir uzrakstīts virs katras no šīm tabulām, un tas ir viens noteikums: specifikācijas, IFC failā saglabātie neto daudzumi un TakeoffCraft nodotais apjomu aprēķins visi to izmanto.

- **Siena**: bruto ir viena sienas puse, tās garums pa centrālo līniju, reizināts ar augstumu (reālā virsma sienai ar formētu augšu vai pamatni). Katrs durvju, logu un citu atvērumu tiek atskaitīts, platums reizināts ar augstumu, katrs atvērums vienu reizi.
- **Grīda vai griesti**: bruto ir laukums iekšpus tās kontūras. Katrs atvērums un izgriezums iekšpusē tiek atskaitīts vienu reizi.
- **Sienas apdare**: katrs sienas tipa apdares slānis sedz vienu sienas virsmu, mērīts kā siena, ar tiem pašiem atskaitītajiem atvērumiem. Apdare ir sienas slānis: tā ir uzskaitīta zem Apdarēm un nav pieskaitīta sienas laukumam, tāpēc siena ar durvīm nekad netiek saskaitīta divreiz.

Tas ir **CadCraft noklusējums**: katrs atvērums tiek atskaitīts neatkarīgi no tā izmēra; sienu garumi ir pa centrālo līniju; atloki netiek mērīti. Tas ir tas, ko katrs projekts izmanto, kamēr neizvēlaties citu metodi.

## Mērīšanas metodes izvēle

Virs specifikācijas **Mērīšanas metode** uzskaita metodes, kas nāk līdzi BimCraft, un **Ielādēt metodes failu** ielādē jūsu biroja pašu. Izvēle tiek saglabāta IFC failā kā viens atsaukšanas solis, un trīs lietas seko tai uzreiz: specifikācijas, neto daudzumi, kas saglabāti failā, un TakeoffCraft nodotais apjomu aprēķins. Noteikums virs katras tabulas tad sākas ar metodi, tās avotu, datumu, kad avots tika nolasīts, un vārdiem **Nav pārbaudījis daudzumu inženieris**.

Metode ir neliels faktu fails, nevis programmas kods. Katram daudzumam tajā norādīts:

- **mazākais atskaitāmais atvērums**: piemēram, atvērums 0.5 m² vai mazāks paliek sienas laukumā;
- **kā mēra sienu savienojumus**: pa centrālo līniju; vai sienai, kas beidzas pret citu, mērot līdz tās sienas virsmai; vai ar katru sienas galu, kas satiekas ar citu sienu, mērot līdz tuvākajai virsmai;
- **vai atlokus mēra** apdarei (apdares atgriezumi atvērumos), kā laukumu vai, ja tie ir seklie, kā garumu. Atloka dziļums tiek uzskatīts par pusi no sienas biezuma;
- **ko tā saka par mūrējumu**: kā to mēra un visas atkritumu vai javas normas, ko tā norāda.

Metodes, kas nāk līdzi BimCraft:

| Metode | Sienas: mazākais atskaitītais atvērums | Sienu apdares | Griesti | Mūrējums |
|---|---|---|---|---|
| CadCraft noklusējums | katrs atvērums | katrs atvērums | katrs izgriezums | nav normu |
| RICS NRM 2 (Apvienotā Karaliste), 2. izdevums 2021 | 0.5 m² vai mazāks paliek | 1 m² vai mazāks paliek | 1 m² vai mazāks paliek | pēc laukuma; procentu nav norādīts |
| AAQS Standard Method for Africa 2015 | 0.5 m² vai mazāks paliek | 0.5 m² vai mazāks paliek | 0.5 m² vai mazāks paliek | pēc laukuma; mērīts neto, 0% atkritumi |
| IS 1200 (Indija), 1976, mūrējums | 0.1 m² vai mazāks paliek | noklusējums (skatiet zemāk) | noklusējums | pēc tilpuma |
| BIA Technical Note 10 (ASV), 2009 | katrs atvērums | noklusējums | noklusējums | 5% atkritumi vienībām, 15% javai |

Lasiet šos ierobežojumus, pirms paļaujaties uz metodi:

- **Neviens daudzumu inženieris nav pārbaudījis nevienu no tām.** Katra izveidota, nolasot norādīto avotu un ierakstot tā skaitļus ar klauzulu, no kuras tie nākuši. Ja esat daudzumu inženieris un varat pārbaudīt kādu no tām, lietotnes veidotāji labprāt to uzzinātu no jums.
- Ja noteikumu nevarēja nolasīt no avota, metode norāda **nav apstiprināts** un tai tiek izmantots CadCraft noklusējums. Nevienai BimCraft metodei nav apstiprināta noteikuma sienu savienojumiem, atlokiem vai grīdām, tāpēc visās tās tiek mērītas noklusējuma veidā.
- IS 1200 atskaita atvērumus apmetumā trīs joslās. Metodes fails pašlaik nevar saturēt joslas, tāpēc sienu apdarēm šajā metodē tiek izmantots noklusējums, un noteikums to saka.
- Dienvidāfrikas Standarta būvdarbu mērīšanas sistēma **nav** starp tām: tās teksts nevarēja tikt nolasīts. AAQS metode Āfrikai saka, ka tā ir veidota uz šīs sistēmas 1991. gada izdevuma, bet tas ir cits dokuments.
- BIA Technical Note 10 ir nozares aplēšu piezīme, nevis standarta mērīšanas metode.
- Atvērums, kas ir tieši mazākā izmēra, seko metodes pašai formulējumam ("nepārsniedz", "mazāks par"). Izmēri 2 daļās no 10 000 tā robežās skaitās tieši tādi.
- Saskaņā ar metodi faila sienas neto sānu laukums un grīdas vai griestu neto laukums seko metodei, un daudzumu kopa to nosauc. Bruto laukumi un tilpumi failā paliek tādi, kā zīmēti.

**Piezīmes par šo metodi** zem izvēlnes saka, ko katrs avots atstāj atklātu. **Atvērt avotu** ved uz dokumentu.

### Jūsu biroja pašu metode

Metodes fails ir JSON formātā `cadcraft-measurement-method`. Katrā vērtībā tajā ir nosaukta klauzula, no kuras tā nāk; vērtība bez klauzulas tiek noraidīta. Fails tiek pārbaudīts, kad to ielādējat: kļūdainu lauku nosauc, un nekas no faila, kas neiztur pārbaudi, netiek izmantots. Kad izvēlēts, fails tiek saglabāts projektā, tāpēc projekts atveras tāpat citā datorā. Tā id ir jūsu pašu vienkāršs nosaukums (tas var nesakrist ar lietotnes metodes id).

## Ķieģeļi, bloki un java

**Sienu tipi: apjomu dati** saskaita vienības un javu katram sienas tipam, kura vienībai ir garums un augstums (skatiet [Sienas tipam piešķirt apjomu datus](topic:wall-assemblies#give-a-type-its-takeoff-data)). Šīs ir formulas, tieši kā tās aprēķinātas:

- **Vienības uz viena slāņa laukuma** = 1 / ((vienības garums + šuve) × (vienības augstums + šuve)). 215 × 65 mm ķieģelis ar 10 mm šuvi: 1 / (225 × 75 mm) = 59.26 uz m².
- **Vienību platumi pār slāni** = (slāņa biezums + šuve) / (vienības platums + šuve), noapaļots līdz veselam skaitlim, vismaz 1. 102.5 mm slānis no 102.5 mm ķieģeļiem ir 1; 215 mm siena no tādiem pašiem ķieģeļiem ir 2.
- **Vienības** = vienības uz laukuma × vienības platumi pār slāni × sienas virsmas neto laukums, saskaitīts pa tipa mūrējuma slāņiem.
- **Vienības pasūtīšanai** = vienības × (1 + atkritumu % / 100), noapaļots uz augšu līdz veselai vienībai. Atkritumi ir tie, kas ievadīti tipā; ja nav ievadīti, metodes, ja tā tos norāda; citādi 0%.
- **Java** = neto laukums × slāņa biezums, mīnus vienību tilpums (vienības × garums × augstums × platums), tad plus papildu procentuālā daļa, kas ievadīta tipam rievām vai perforācijām, tad plus metodes pieļaujamā daļa, ja tā to norāda. Tam vajadzīgs vienības platums.

Pieņemts: katrs tipa mūrējuma slānis ir uzbūvēts no tā viena tipa vienības; slānis, kas biezāks par vienu vienības platumu, tiek skaitīts kā tik vienību platumi, katrs kā gareniski ieklāts slānis, tāpēc griezti vienības, stūru vienības un speciālās formas netiek skaitītas atsevišķi; ja neviens slānis nav atzīmēts kā uzbūvēts no vienības, kodola slāņi tiek uzskatīti par slāņiem, un virs tabulas esošā piezīme to saka. **Daudzums** ir norma, reizināta ar to, pēc kā norma ir, kas tagad var būt arī vienība pasūtīšanai, 1000 vienības pasūtīšanai vai m³ javas.

Marķējumi ir elementu IFC atzīme: nomainiet vienu **Rekvizītos** (Atzīme), un specifikācija seko. Katram IFC modelim, zīmētam vai nē, [Daudzumu saskaitīšana, elementu uzskaitīšana un telpu specifikācijas](topic:quantity-totals) saskaita jebkuru rekvizītu.

## Izmēri

Plānā katras zīmētās sienas garums ir rādīts pa tās ārējo virsmu (iekšējai sienai — pa vienu virsmu), un sienai ar durvīm vai logiem — ķēde no stūriem līdz katram atvērumam. {{ui:Izmēri}} modeļa joslā tos paslēpj un atkal parāda.

## Plāna saglabāšana kā PDF

1. Parādiet vajadzīgo līmeni un iestatiet mērvienības **Līmeņi** panelī.
2. Noklikšķiniet {{ui:Drukāt}} modeļa joslā.
3. BimCraft saglabā "<fails> — <līmenis>.pdf": plānu melnbaltu lielākajā standarta mērogā, kas ietilpst lapā (1/4" = 1'-0", 1/8" = 1'-0" … uz Letter ar pēdām un collām; 1:50, 1:100 … uz A4 ar milimetriem), ar aizpildītām sienām, durvīm, logiem, telpu nosaukumiem un platībām, izmēriem un nosaukumu joslu ar līmeni, failu, griezuma augstumu, datumu un mērogu.

PDF ir zīmēts kā līnijas un teksts, tāpēc tas paliek ass jebkurā tālummaiņā, un tā tekstu var meklēt.

## Labi zināt

- Specifikācijās uzskaitīts tas, ko izveidoja zīmēšanas rīki. Durvis un logi no citas programmas tā vietā rādās Daudzumu kopsummās.
- Lai novērtētu darbu, nododiet daudzumus TakeoffCraft: skatiet [Daudzumi TakeoffCraft](topic:takeoff). CSV lejupielāde paliek izklājlapai.
