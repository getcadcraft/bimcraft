---
title: Caurules un gaisa vadi
summary: Zīmējiet caurules un gaisa vadu trases plānā pēc to centrālajām līnijām; elkoņus, T veida savienojumus, reducētājus un pārejas veido jūsu vietā; trases pieder sistēmām ar savienotām pieslēgvietām IFC failā, un tās redzamas plānos, specifikācijās un apjomu aprēķinā.
keywords: caurule, caurules, cauruļvadi, santehnika, gaisa vads, gaisa vadi, ventilācija, hvac, mep, mehāniskais, elkonis, T veida savienojums, reducētājs, pāreja, veidgabals, veidgabali, vārsts, vārsti, vārtu vārsts, lodveida vārsts, tauriņvārsts, pārbaudes vārsts, stāvvads, slīpums, notekas, kanalizācija, lietus, ventilācijas caurule, aukstais ūdens, karstais ūdens, dzesētais ūdens, apkure, gāze, ugunsdrošība, padeves gaiss, atgaises gaiss, izplūde, sistēma, sistēmas, pieslēgvieta, pieslēgvietas, savienotājs, savienotāji, santehnikas ierīce, ierīces, izlietne, tualete, roku mazgātne, virtuves izlietne, duša, veļas mazgātne, ierīču vienības, notekas izmērs, notekas izmēru noteikšana, atzars, kolektors, gaisa plūsma, cfm, berze, vienāda berze, izmēru noteikšana, specifikācija, apjomu aprēķins, nbr, nbr 5648, nbr 5688, nbr 8160, līmējams pvc, kanalizācija, dn
from: 85140bc5
---

## Ko jūs darīsiet

Zīmējiet ēkas caurules un gaisa vadus tāpat kā sienas: noklikšķiniet uz trases centrālās līnijas stūriem iestatītajā augstumā. BimCraft izveido veidgabalus, ieliek katru daļu savā sistēmā un savieno tās, lai citas programmas trasi nolasītu kā vienu savienotu sistēmu.

## Caurules zīmēšana

1. Ieslēdziet {{ui:Zīmēšana}}, atveriet {{ui:Būvējums}} un izvēlieties {{ui:Caurule}}.
2. Joslā izvēlieties **sistēmu** (aukstais ūdens, karstais ūdens, sanitārā notekūdeņu notekas, gāze…). Tā iestata parasto materiālu: varš ūdenim, PVC notekām un ventilācijai, tērauds apkurei, dzesētajam ūdenim, gāzei un ugunsdrošībai. Ja nepieciešams, mainiet **materiālu**, **klasi** un **izmēru**. Izmēri un sienas nāk no publiskiem standartiem: tērauda caurule ASME B36.10M, vara caurule ASTM B88, PVC ASTM D1785 un PEX ASTM F876. Brazīlijas projektos var izmantot **PVC ūdensvada caurule (NBR 5648)**, līmējamo PVC aukstajam ūdenim, un **PVC kanalizācijas caurule (NBR 5688)**, normālā vai pastiprinātā sērija, notekām un ventilācijai: to izmēri nosaukti pēc DN (DN 25, DN 100). Kad izvēlaties vienu no tām, citas sistēmas izvēle paliek pie Brazīlijas caurulēm (PVC kanalizācijas caurule sanitārai notekai pēc PVC ūdensvada caurules).
3. Iestatiet **Augstums**: caurules centrālās līnijas augstums virs līmeņa.
4. Noklikšķiniet, kur caurule sākas, tad katrā stūrī. Veiciet dubultklikšķi vai nospiediet {{key:Enter}} pēdējā punktā. {{key:Backspace}} atceļ pēdējo stūri; {{key:Esc}} atmet trasi.

Caurule piesaistās kā sienas un citām trasēm: sāciet no caurules gala, lai turpinātu no tās, vai beidziet uz caurules līnijas, lai atzarotu. Jaunā trase pārņem to caurules augstumu, pie kuras tā piesaistās.

Trase, kas sākta vai beigta uz aprīkojuma pieslēgvietas, pārņem tās izmēru un sistēmu un paliek piestiprināta: skatiet [MEP aprīkojums ar pieslēgvietām](topic:mep-equipment) un [Caurules un gaisa vadu savienošana ar aprīkojumu](topic:mep-connections).

## Projekta santehnikas standarts

Pirmais saraksts caurules joslā ir modeļa **santehnikas standarts**: **ASV (IPC, collas)** vai **Brazīlija (ABNT, DN)**. Tas tiek saglabāts modelī, tāpēc ikviens, kas atver failu, sāk trases vienādi. Pie **ASV** jauna trase sākas ar varu (ūdenim) vai PVC Schedule 40 (notekām), collās, ar Starptautiskā santehnikas kodeksa (IPC) slīpumu. Pie **Brazīlijas** aukstais ūdens sākas kā līmējams PVC DN 25, sanitārās un lietus notekas un ventilācija — kā PVC kanalizācijas caurule DN 100 ar NBR 8160 slīpumu, un karstais ūdens — varā. Tas attiecas arī uz trasi, kas sākas ierīces savienotājā vai aprīkojuma pieslēgvietā. Jau uzzīmētās caurules saglabā savu materiālu un savas tabulas; materiālu saraksts paliek atvērts, tāpēc jūs joprojām varat tīši uzzīmēt vienu Brazīlijas trasi ASV modelī. Fails bez izvēles darbojas kā līdz šim: jauna trase seko izmantotajam materiālam.

## Gaisa vada zīmēšana

1. Izvēlieties {{ui:Gaisa vads}}. Izvēlieties sistēmu (padeve, atgaise, izplūde vai ārgaiss) un formu: apaļu, taisnstūra vai plakanu ovālu.
2. Ierakstiet platumu un augstumu (apaļa gaisa vada platums ir tā diametrs) un **Augstums** centrālās līnijas augstumam.
3. Lai to izmērotu pēc gaisa plūsmas, ierakstiet **Gaisa plūsmu** un **Berzes** likmi un noklikšķiniet {{ui:Izmērot}}. Gaisa vads tiek izmērots pēc vienādas berzes metodes (ASHRAE rokasgrāmatas gaisa vadu projektēšanas nodaļa) un noapaļots līdz krājumā esošam izmēram, tā ka berze ir vienāda ar vai zemāka par ierakstīto likmi. Ja berzes likme nav ievadīta, tiek izmantots 0.08 in. of water uz 100 ft (0.8 Pa/m). Taisnstūra gaisa vads saglabā ievadīto augstumu un iegūst platumu; BimCraft to norāda, kad malas ir vairāk nekā 4 pret 1.
4. Noklikšķiniet stūrus kā caurulei.

## Santehnikas ierīces

{{ui:Būvējums}} › {{ui:Novietot ģimeni}} piedāvā piecas ierīces, no kurām sākt, katru ar notekas un aukstā ūdens savienotāju: **Tualete**, **Roku mazgātne**, **Virtuves izlietne**, **Dušas paliktnis** un **Veļas mazgātne**. To priekšpuse jūs redz, kad tās novietojat, un aizmugure atrodas pie sienas. To notekas ir mazākajā ierīces notekas izmērā pēc NBR 8160 (DN 100 tualetei, DN 50 virtuves izlietnei, DN 40 pārējām); ūdens ir DN 20. Mainiet to izmērus vai rediģējiet tās kā jebkuru ģimeni: skatiet [Ģimenes un to izmēri](topic:families).

Ģimene norāda, kāda ierīce tā ir, zem {{ui:Santehnikas ierīce}} cilnē {{ui:Savienotāji}} ģimenes redaktorā. Tās noteka tad tiek skaitīta ierīču vienībās: 6 UHC tualetei, 1 roku mazgātnei, 3 virtuves izlietnei vai veļas mazgātnei, 2 dušai (NBR 8160), vai IPC 709.1 tabulas notekas ierīču vienības.

## No ierīces savienotāja

Elementi, kas novietoti no ģimenes ar savienotājiem (baseina noteka un krāns, gaisa padeves kakls: skatiet [Ģimenes rediģēšana](topic:family-editor)), rāda savus brīvos savienotājus kā punktus, kamēr {{ui:Caurule}} vai {{ui:Gaisa vads}} ir ieslēgts, un rādītājs tiem piesaistās.

- **Sākt pie savienotāja**: trase pārņem savu sistēmu un izmēru (caurule ar joslas materiālu savienotāja izmērā vai nedaudz lielākā; apaļš gaisa vads ar tā diametru). Ja savienotājs vērsts uz leju vai augšu, kā noteka zem baseina, trase vispirms iet taisni uz leju vai augšu līdz augstumam **Augstums**, tad turpinās pēc jūsu klikšķiem.
- **Beigt pie savienotāja**: trase iet uz leju vai augšu līdz tam un tur beidzas.

Trase IFC failā ir savienota ar elementu, tāpēc citas programmas redz ierīci kā daļu no tās sistēmas. Elements, kas vēlāk novietots ar savienotāju trases galā, arī ir ar to savienots. Trase, kas pārvietota nost no savienotāja, ar to vairs nav savienota.

## Veidgabali, ko veido jums

| Kur | Ko veido BimCraft |
|---|---|
| Trase pagriežas | Elkonis. Tērauda caurule ASME B16.9 garajā rādiusā (1.5 × izmērs), citas caurules vienā ārējā diametrā, apaļais gaisa vads 1.5 diametros, taisnstūra gaisa vads vienā platumā (vai vienā augstumā pagriežoties uz augšu vai leju) |
| Trase beidzas uz citas trases līnijas | T veida savienojums; otra trase tur tiek sadalīta |
| Divas trases saskaras gals pret galu dažādos izmēros | Reducētājs (caurulēm) vai pāreja (gaisa vadiem) |
| Divas viena izmēra trases saskaras gals pret galu leņķī | Elkonis |

Kad maināt, pārvietojat vai dzēšat trasi, katrs veidgabals šajā līmenī tiek veidots no jauna. Ja kāja ir pārāk īsa veidgabaliem tās galos, BimCraft to norāda un neko nemaina: pārvietojiet stūri tālāk.

:::note
Veidgabali un vārsti ir vispārīgi: veidoti pēc caurules vai gaisa vada izmēra, nevis pēc ražotāja kataloga. Veidgabaliem ar uzmavu, presēšanu un rievām, vārstu korpusiem un aprīkojumam ir paši ražotāja izmēri; pārbaudiet tos ar piegādātāju, pirms pasūtāt.
:::

## Stāvvadi

Zīmējot ierakstiet jaunu **Augstums** un nospiediet {{key:Enter}}: trase iet taisni uz augšu vai leju pēdējā stūrī, ar elkoni katrā galā. Stāvvads var iet augšā līdz nākamajam līmenim. Katrs līmenis rāda trases daļas, ko sasniedz tā skata diapazons, ar **UP** vai **DN** pie stāvvada.

## Notekas un to slīpums

Sanitārās un lietus notekas sākas ar mazāko slīpumu, ko atļauj Starptautiskais santehnikas kodekss, atbilstoši to izmēram: 1/4 in. uz pēdu līdz 2-1/2 in., 1/8 in. uz pēdu no 3 līdz 6 in., 1/16 in. uz pēdu no 8 in. Brazīlijas PVC kanalizācijas caurule sākas ar NBR 8160 slīpumu: 2 % līdz DN 75, 1 % no DN 100. Ierakstiet citu slīpumu joslā vai rekvizītos: `1/4"/ft`, `2 %` vai `1:50`. Trase krīt no sava pirmā punkta, tāpēc zīmējiet notekas virzienā, kādā tās tek. Plāns rāda kritumu un bultu. Rekvizīti brīdina, ja noteka ir plakanāka par kodeksa minimumu.

## Notekas izmēro pēc ierīču vienībām

Izvēlieties sanitāro notekas: **Ierīču vienības** rekvizītos rāda, cik daudz tā nes un mazāko izmēru, kas tai vajadzīgs. Skaitās katra santehnikas ierīce, kuras notekas savienotājs atrodas uz trases, un arī katra noteka, kas tajā ietek: zīmējiet notekas to tecēšanas virzienā, katra beidzas uz notekas, kurā tā ietek.

- Brazīlijas PVC kanalizācijas caurules notekas skaita **UHC** un seko NBR 8160; pārējās skaita **DFU** un seko Starptautiskajam santehnikas kodeksam.
- **Noteka**: **Atzars** tiek izmērots pēc kodeksa tabulas ierīču atzariem; **Ēkas noteka** pēc tās tabulas pēc slīpuma, tāpēc tās **Slīpums** ir svarīgs.
- Noteka nekad nav mazāka par ierīču notekām, ko tā apkalpo (tualetei vajadzīgs DN 100 jeb 3 in.), nedz par notekām, kas tajā ietek. Pēc NBR 8160 ēkas noteka ir vismaz DN 100.

{{ui:Izmērot notekas}} padara katru sanitāro notekas modeli, kas ir par mazu savām ierīču vienībām, tādā izmērā, kāds tai vajadzīgs, kā vienu soli, ko var atsaukt. Noteka, kas zīmēta lielāka par vajadzīgo, paliek kā ir. Kad noteka nes vairāk, nekā tās caurule var pie sava slīpuma lielākajā izmērā, BimCraft to norāda: dodiet tai stāvāku slīpumu vai citu cauruli.

:::note
Tabulas ir horizontālām notekām. Stāvvadi, ventilācijas un lietus notekas šeit netiek izmērotas: pārbaudiet tās un visu projektu pret kodeksu, kas attiecas uz projektu.
:::

## Vārsti

1. Izvēlieties {{ui:Vārsts}} un veidu: vārtu, lodveida, tauriņvārsts vai pārbaudes.
2. Noklikšķiniet uz caurules, kur tam jābūt. Caurule tiek pārgriezta ap to, un vārsts ir savienots ar abām pusēm.

Trases rekvizītos uzskaitīti tās vārsti, katrs ar {{ui:Noņemt}}.

Papildu vārstu veidi, filtrs, aizvari gaisa vados, jūsu pašu cauruļu specifikācijas un ražotāju ģimenes: skatiet [Cauruļu specifikācijas, vārsti, aizvari un ražotāju ģimenes](topic:pipe-specs).

## Trases maiņa

Izvēlieties jebkuru trases daļu plānā vai 3D skatā. Rekvizītos:

- **Sistēma**, **Materiāls**, **Klase** un **Izmērs** (caurulēm), vai **Forma**, **Platums** un **Augstums** (gaisa vadiem).
- **Augstums virs līmeņa** pārvieto visu trasi uz augšu vai leju.
- **Izolācija**: tās biezums, saglabāts sadursmju pārbaudei un atverumu sarakstam (tam nekas netiek zīmēts): skatiet [Caurules un gaisa vadi pret konstrukciju](topic:mep-against-structure).
- Tērauda caurule: **Sagriezt spolēs**: skatiet [Tērauda cauruļu spoles un spoļu lapas](topic:pipe-spools).
- **Slīpums** (caurulēm).
- **Plūsma** ar {{ui:Izmērot}}: ūdenim mazākais izmērs, kas notur ūdeni pie 8 ft/s (2.4 m/s), vai 5 ft/s (1.5 m/s) karstajam ūdenim; 3 m/s Brazīlijas PVC ūdensvada caurulei (NBR 5626). Gaisa vadiem — ātrums un berzes likme gaisa vadam tādam, kāds tas zīmēts. Sanitārās notekas tā vietā tiek izmērotas pēc ierīču vienībām: skatiet zemāk **Notekas izmēro pēc ierīču vienībām**.

Katra izmaiņa ir viens solis {{ui:Atsaukt}}. {{key:Delete}} noņem visu trasi.

## Plāni

- Caurules, mazākas par 150 mm (aptuveni 6 in.), tiek zīmētas kā viena līnija pa to centrālo līniju; lielākās caurules un visi gaisa vadi — kā divas līnijas to platumā.
- Katrai sistēmai ir sava krāsa; plāna PDF tās drukā melnas.
- Katra trase ir apzīmēta ar savu izmēru un sistēmu (piemēram, `2" CW` vai `16×10 SA`).
- Plāna skata diapazons nosaka, kuras trases tas rāda, un {{ui:Rādīts šajā plānā}} var atstāt ārpus **Caurules** vai **Gaisa vadi**: skatiet [Skati, skata diapazoni un jūsu paši lapas](topic:views-and-sheets).

## Specifikācijas un apjomu aprēķins

Panelis {{ui:Specifikācijas}} pievieno **Caurules** (pēc sistēmas, materiāla un izmēra, ar garumiem), **Gaisa vadi** (pēc sistēmas, formas un izmēra, ar garumiem un ārējo virsmas laukumu) un **Veidgabali un vārsti** (pēc veida un izmēra, saskaitīti). Noklikšķiniet uz rindas, lai izvēlētos, ko tā uzskaita; {{ui:Lejupielādēt CSV}} to lejupielādē.

{{ui:Apjomu aprēķins}} nodod trases TakeoffCraft: caurules un gaisa vadi pēc izmēra kā trases, kas zīmētas plānā (slīpās notekas mēra pa to slīpumu), veidgabali un vārsti saskaitīti tur, kur tie atrodas: skatiet [Modeļa daudzumu nosūtīšana uz TakeoffCraft](topic:takeoff). Stāvvadi šajā lapā nav iekļauti, jo plāns tos nevar izmērīt; caurules specifikācijā ir to garums.

## IFC failā

Katra trase ir komplekts, kas satur savas daļas: caurules un gaisa vadu segmentus, veidgabalus un vārstus, katru ar savu tipu, materiālu, savas sistēmas krāsu un pieslēgvietām. Savienotās pieslēgvietas ir savienotas, un katra daļa pieder savai sadales sistēmai (IFC2X3 failos tāpat kā plūsmas segmenti, veidgabali un kontrolieri sistēmā). Citas programmas, kas nolasa IFC sistēmas, redz vienu savienotu trasi katrai sistēmai. Trases pašu definīcija tiek saglabāta kopā ar to, tāpēc BimCraft to atkal veido tādu pašu, kad to maināt.
