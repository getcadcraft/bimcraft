---
title: Telpas, grīdas, griesti un jumti
summary: Telpas parādās, kad sienas tās noslēdz; telpai vai visai ēkai piešķiriet grīdu un griestus, bet virs sienām uzliekiet četrslīpu vai divslīpu jumtu. Visi seko līdzi, kad sienas tiek pārvietotas.
keywords: telpa, telpas, telpa, laukums, perimetrs, grīda, pārsegums, apakšgrīda, griesti, jumts, četrslīpu jumts, divslīpu jumts, slīpums, pārkare, dzega, kore, ieleja, 6/12
from: 1fb1813c
---

## Ko jūs darīsiet

Pabeidziet ēkas apvalku. Telpas veidojas pašas no sienām; grīdas, griesti un jumts prasa vienu klikšķi katrs. Tā kā tie tiek noteikti pēc sienām, tie seko līdzi, kad sienas mainās.

## Telpas

Katra telpa, ko noslēdz zīmētas sienas, ir telpa. Tā parādās, tiklīdz pēdējā siena to noslēdz, ar numuru (101, 102 … pirmajā līmenī, 201 … nākamajā) un nosaukumu (**Telpa 1**, **Telpa 2** …), un tās laukums tiek rādīts plāna vidū.

- Ar ieslēgtu {{ui:Atlasīt}} noklikšķiniet telpas iekšpusē, lai to atlasītu. Sadaļā **Rekvizīti** mainiet tās **Nosaukumu** (piemēram, `Virtuve`) un **Numuru**; tiek rādīts tās laukums un perimetrs.
- Dzēsiet sienu starp divām telpām, un tās kļūst par vienu; novelciet sienu pāri telpai, un tā kļūst par divām. Telpa paturē savu nosaukumu un numuru, kamēr apkārtējās sienas pārvietojas.
- Telpu nevar dzēst atsevišķi: tā ir telpa, ko veido sienas.

Laukumi tiek mērīti sienu iekšējās virsmās. Telpas tiek saglabātas kā IFC telpas ar grīdas laukumu, perimetru, augstumu un tilpumu, tāpēc specifikācijas tos nolasa (skatiet [Daudzumu apkopošana, elementu uzskaitīšana un telpu specifikācijas](topic:quantity-totals)).

## Grīdas

1. Noklikšķiniet uz {{ui:Grīda}}.
2. Izvēlieties **Šī telpa** vai **Visa ēka**, **veidu** (koka grīda vai betona pārsegums) un tā biezumu.
3. Norādiet telpas iekšpusē (vai jebkur ēkas iekšpusē). Tas, ko grīda segtu, tiek izcelts ar savu laukumu.
4. Noklikšķiniet. Grīdas augša ir līmeņa grīda; tā iet lejup par savu biezumu. Visas ēkas grīda sasniedz sienu ārējās virsmas.

## Griesti

1. Noklikšķiniet uz {{ui:Griesti}}.
2. Izvēlieties **Šī telpa** vai **Visa ēka**, un tā **Augstumu** virs grīdas.
3. Norādiet telpas iekšpusē un noklikšķiniet.
4. Lai to redzētu no apakšas, ar tā režģi un gaismām, pārslēdziet plānu uz griestu plānu: skatiet [Skati, skatu diapazoni un jūsu pašu lapas](topic:views-and-sheets).

## Jumts

1. Līmenī, kura sienas nes jumtu, noklikšķiniet uz {{ui:Jumts}}.
2. Ierakstiet **Slīpumu** kā pacēlumu uz 12 (`6/12`) vai grādos (`30`), kā arī **Pārkari**.
3. Izvēlieties **Galus**: **Četrslīpu jumts** (katra puse slīpa), **Zalkumi īsajās malās** vai **Zalkumi garajās malās** (ēkai ar četrām malām), vai **Vienslīpu jumtu**.
4. Norādiet ēkas iekšpusē: dzega un kore parādās plānā. Noklikšķiniet.

Jumts atrodas virs sienām, līmenī virs tām, un tā apakšējā mala sasniedz sienu ārējo virsmu. Zalkumu galus aizpilda zalkuma siena, tikpat bieza kā siena zemāk. Ēka ar L, T vai U veida formu saņem četrslīpu jumtu, kura spārni satiekas ielejās.

## Mainiet tos

Atlasiet grīdu, griestus vai jumtu (3D skatā, modeļa kokā vai jumtu, noklikšķinot uz tā kontūras iekšpusē virs līmeņa) un mainiet to sadaļā **Rekvizīti**: grīdas veidu, biezumu un to, cik augstu tās augša atrodas virs līmeņa; griestu augstumu, biezumu un **Rakstu** (režģi, ko griestu plāns uz tiem zīmē: nav, 600 × 600, 600 × 1200, 2' × 2' vai 2' × 4'); jumta slīpumu, pārkari, galus un biezumu. Katra izmaiņa ir viens atsaukšanas solis.

## Grīdas, griestu vai jumta piešķiršana tipu ar slāņiem

Grīdai, griestiem un jumtam var piešķirt **tipu**, kā tas notiek ar sienu: nosauktu slāņu kārtību, katram ar savu materiālu un reālo biezumu.

- **Kad to izvietojat.** Rīkiem Grīda, Griesti, Jumts un Zīmēt grīdu savā rindā ir **Tips** saraksts. **Nav tipa** izvieto kā līdz šim, ar savu biezumu. Tips izvieto tik biezu, cik kopā ir tipa slāņi.
- **Vēlāk.** Atlasiet grīdu, griestus vai jumtu un izvēlieties **Tips** sadaļā Rekvizīti. Elements paliek tas pats elements: tā vieta, telpa un dati tiek saglabāti, un nekas netiek zīmēts no jauna. Mainās tikai tā tips, biezums un materiāls. Tā tas kļūst no skices stadijas izstrādāts elements: nomainiet tā vispārīgo tipu pret reālu.
- **Rediģēt tipu…** atver tipa redaktoru: slāņi no **augšas** uz leju, kodols, katra slāņa funkcija un tipa LOD atzīme. Saglabājot, mainās katrs šā tipa elements vienā solī, un viens Atsaukt to atsauc. Mainot sākuma tipu, tiek saglabāta tā kopija kā jūsu tips.
- Kamēr elementam ir tips, tā **Biezums** ir tipa biezums un to nevar ierakstīt. Lai to mainītu, izvēlieties citu tipu vai **Nav tipa**.

Sākuma tipi ir viens **vispārīgs** tips katram (viens vispārīga materiāla slānis, atzīmēts ar LOD 200) un divi daudzslāņu tipi (atzīmēti ar LOD 300): koka balķu grīda un betona grīda ar izlīdzinošo kārtu; koka jumts un betona plakanais jumts; ģipškartona griesti un piekārtie flīžu griesti. Tie ir sākuma vērtības, nevis pārbaudītas konstrukcijas: pirms paļaušanās pārbaudiet slāņus.

Specifikācija **Slāņi: laukums un tilpums** uzskaita katru slāni katram lietotajam tipam; skatiet [Specifikācijas, izmēri un PDF](topic:plan-schedules-and-pdf). Grīdu, jumtu un griestu tipi pārvietojas starp projektiem tipu paketē vai kā bibliotēkas vienums; skatiet [Tipu paketes](topic:type-packs).

## Noderīga informācija

- Sienu pārvietošana, pievienošana vai dzēšana atkārtoti veido telpas, grīdas, griestus un jumtu pāri tām.
- Jumts piestāv jebkurai kontūrai. Lai katrai sienai dotu savu slīpumu, zalkuma vai vienslīpu galu, paaugstinātu rievojumu, apšuvumu un pārkares apšuvumu vai zīmētu vienu jumta plakni, skatiet [Jumti: slīpums katrai sienai, zalkumi, vienslīpu jumti un jumta plaknes](topic:roofs).
- {{key:Delete}} dzēš atlasītu grīdu, griestus vai jumtu.
