---
title: Jaunumi 0.9
summary: Sienu formas, sadalīšana, nobīde, stiepšana un bloķēšana pie režģa, līmeņi zem zemes, režģa izmēri un Mērīt plānā, dublēti skati ar darba stiliem un pildspalvu tabulām, Mērīt kā, Collada un Google Earth eksports, Scan to BIM, vēja un seismiskā analīze, sveķu drukas papildinājumi.
keywords: jaunumi, 0.9, izlaiduma piezīmes, sienu formas, taisnstūris, daudzstūris, loks, izvēlēties līnijas, pārzīmēt kontūru, nobīde, savienojums, kastes stiepšana, izlīdzināt un bloķēt, sadalīt sienu, sprauga, savienot atpakaļ, bloķēt pie režģa, augt no, mērīt no, pievienot līmeni zemāk, pagrabs, līmeņa komanda, režģa izmēri, mērīt plānā, darba stils, dublēts skats, savs eksemplārs, saistīts skats, pildspalvu tabula, drukāt kā redzams, mērīt kā, ziņot kā, mērogs, importēt SVG, novietot plānā, novietot modelī, collada, dae, kmz, google earth, scan to bim, vēja slodze, seismiskā, galīgo elementu, dokumentu panelis, sveķu drukāšana, jaunumi, izmaiņu žurnāls, 0.8, 0.8.1, versija, jaunas funkcijas, evakuācija, cilvēki, rindas, akustika, reverberācija, impulsa reakcija, plūdi, vējš, zemestrīce, bīstamība, dzīves cikls, kalpošanas laiks, ids, tagi, specifikācijas, pārvietot, izlīdzināt, sadalīt, attēls, fons, skenējums uz sienām, vieta no CivilCraft, paneļu rasējumi, karkass, saule, pv, sadalīt, vrf, fan coil, cauruļu izmēru noteikšana, kabeļu trase, apgaismojums, betons, seismiskā, salīdzināt skenējumu, epsg, projekcija, dokumenti, veidne, oglekļis, izmaksas, energyplus, renderēšanas dzinējs, atvērt ...
from: 5624fe88
---

Šis ir tas, kas mainījās BimCraft 0.9 salīdzinājumā ar 0.8.1. Divas galvenās tēmas ir īsta sienu rīks un skati, kas uzvedas tā, kā cilvēki no lielajām BIM programmām sagaida. Ap tām ir Collada eksports, asistenti, kas var novietot elektroierīces, Scan to BIM un vēja, seismiskā un galīgo elementu darbs cilnē {{ui:Aprēķins}}.

## Jaunais

### Sienas

- **Zīmējiet veselas formas.** {{ui:Zīmēšana}} grupā atveriet {{ui:Formas}} (vai izvēlieties formu sienas rindas **Forma** sarakstā): taisnstūri, pagrieztu taisnstūri, daudzstūri ar 3 līdz 64 malām, loku pēc centra, tangenciālu loku, sienas uz izvēlētām līnijām vai sienas ap slēgtu laukumu, uz kura noklikšķiniet iekšpusē. Taisnstūris ir četras sienas ar četriem savienotiem stūriem un viens atsaukšanas solis. Sk. [Sienu formas, sadalīšana, nobīde, stiepšana un bloķēšana](topic:wall-tools).
- **Iestatiet pirms zīmēšanas, mainiet pēc tam.** Sienas rindā ir {{ui:Nobīde}} un {{ui:Savienojums}} (noņemiet atzīmi, lai zīmētu brīvi stāvošas sienas). Pēc tam izmantojiet {{ui:Nobīde}}, {{ui:Kastes stiepšana}} un {{ui:Izlīdzināt un bloķēt}} uz uzzīmētām sienām. Pārvietota vai izstiepta siena saglabā savas durvis, logus un izmērus. Katra recepte ir viens atsaukšanas solis.
- **Sadaliet sienas.** {{ui:Sadalīt}}, {{ui:Atstarpe}}, {{ui:Brīvi gali}}, {{ui:Dzēst posmu}} un {{ui:Savienot atpakaļ}} sagriež sienu ar klikšķi vai tur, kur to krusto cita siena. Griezums cauri durvīm tiek noraidīts. Sk. [Sienu formas, sadalīšana, nobīde, stiepšana un bloķēšana](topic:wall-tools).
- **Bloķējiet sienas pie režģa līnijām.** Atlasiet sienu gar režģa līniju un atzīmējiet {{ui:Bloķēt pie režģa}} {{ui:Rekvizītos}}. Ar ieslēgtu Režģa rīku ierakstiet attālumu {{ui:Pārvietot par}} izvēlētai līnijai, un bloķētās sienas seko vienā atsaukšanas solī.
- **Formējiet vienu sienu.** {{ui:Rekvizītos}} vienai sienai var piesaistīt tās augšu vai pamatni jumtam, grīdai vai griestiem, labot tās fasādes kontūru, noliekt to vai izgriezt sienas atveri bez durvīm vai loga. Sk. [Sienas forma](topic:wall-shape).
- **Garums norāda, kurš gals paliek.** {{ui:Augt no}} nosaka, vai sākums, gals vai centrs paliek vietā, mainot garumu.
- **Garums un plāna izmērs sakrīt.** {{ui:Mērīt no}} (centrālā līnija, iekšējā virsma vai ārējā virsma) vada gan Garuma lauku, gan plāna sienu izmērus. Tas sākas ar centrālo līniju, tāpēc plāna sienu izmēri tagad lasa centrālo līniju tur, kur iepriekš lasīja ārējo virsmu. Mainiet to sienu rindā, {{ui:Rekvizītos}} vai {{ui:Iestatījumi}} › {{ui:BimCraft}} › {{ui:Sienas}}.

### Līmeņi, režģi un mērīšana

- **Pievienot līmeni zemāk.** {{ui:Pievienot līmeni zemāk}} {{ui:Līmeņi}} panelī pievieno līmeni zem zemākā, tikpat augstu kā tas, negatīvā augstumā (Līmenis -1, Līmenis -2). Nekas cits nepārvietojas. {{ui:Pievienot līmeņus…}} tagad pieņem negatīvus augstumus. Ja komandas rindā ierakstāt LEVEL, LEVELS, STOREY vai STOREYS, atveras {{ui:Pievienot līmeņus…}}, un izvēlnēs un lentes cilnēs ir poga {{ui:Līmeņi}}. Sk. [Vietnes, ēkas un līmeņi](topic:site-building-and-levels).
- **Režģa izmēri plānā.** Ar ieslēgtu {{ui:Režģis}} rīku atzīmējiet {{ui:Izmēri}}, lai zīmētu atstarpi starp blakus esošām līnijām un kopējo izmēru aiz burbuļiem katra līmeņa plānā. Sk. [Režģa izmēru noteikšana](topic:grid-dimensions).
- **Mērīt plānā.** {{ui:Mērīt}} {{ui:Zīmēšana}} grupā dod attālumu ar X un Y starpībām starp diviem klikšķiem. Modelī nekas netiek saglabāts. Sk. [Mērīt plānā](topic:measure-on-the-plan).
- **Mainiet vairākas kolonnas vienlaikus.** Izvēlieties kolonnas kopā ar sienu, un izvēle parāda katru veidu ar {{ui:Atstāt tikai šos}}. Viens klikšķis paturs kolonnas un parādīs to kopīgos laukus.
- **Viena rādīšanas mērvienība visur.** Koordinātes, mērījumi, griezumi, lapu mēroga, rāmja cilnes slodzes un rezultāti un Problēmu teksts seko mērvienībai, ko izvēlaties. Eksporti paliek SI.

### Skati, lapas un drukāšana

- **Darba stils.** {{ui:Iestatījumi}} › {{ui:BimCraft}} › {{ui:Darba stils}} izvēlas starp to, ka katram skatam ir savas anotācijas un pildspalvu tabulas, vai tās tiek koplietotas. Sk. [Darba stils, dublēti skati, pildspalvas uz papīra, Mērīt kā un veidnes](topic:working-style).
- **Dublēt skatu.** Plānus, griestu plānus, izsaukumus, fasādes un griezumus var dublēt kā {{ui:Savs eksemplārs}} vai {{ui:Saistīts}}; {{ui:Veidot savu eksemplāru}} padara saistītu neatkarīgu. Sk. [Darba stils, dublēti skati, pildspalvas uz papīra, Mērīt kā un veidnes](topic:working-style).
- **Drukāt kā redzams vai caur pildspalvu tabulu.** Pildspalvu pārrakstījumi tiek saglabāti IFC kopā ar skatu, un lapas un PDF tos zīmē kā ekrāns. Tā pati tēma aptver pildspalvu tabulas.
- **Mērīt kā.** {{ui:Ziņot kā}} {{ui:Rekvizītos}} raksta plātni, kas zīmēta kā ceļš, sienu kā paneli vai jumtu kā rampu IFC kā klasi, ko izvēlaties, un to tā skaita specifikācijās, daudzumos, Meklēšanā, Krāsot pēc un Problēmās.
- **Rediģējiet fasādēs un griezumos.** Zīmējiet un pārvietojiet sienas, atveres, līmeņus, izmērus un piezīmes tieši fasādē vai griezumā, ar saviem lapu izmēriem un titula blokiem. Sk. [Rediģēt fasādēs un griezumos](topic:edit-in-elevations).
- **Lapas.** Katra lapa var būt ainava vai portrets. Lodziņš {{ui:Ierakstiet mērogu}} atrodas blakus mēroga sarakstam katrā novietotā skatā (1:64, 2:1, 1/4" = 1'). Novietotu zīmējumu var pavilkt vai pabīdīt ar bultiņu taustiņiem, un {{ui:Formāti…}} › {{ui:Importēt SVG…}} pārveido jūsu pašu lapas dizainu par titula bloku ar laukiem, ko ieraksta katrai lapai atsevišķi.
- **Bibliotēkas kredīti uz lapas.** Zīmējumu kopai ar bibliotēkas vienumiem ir Bibliotēkas kredītu specifikācija, ko var novietot uz jebkuras lapas. Sk. [Bibliotēkas kredīti](topic:library-credits).

### Bibliotēka: novietošana

- **Novietošana seko skatam.** Plāna skatā Bibliotēka rāda {{ui:Novietot plānā}}; 3D skatā tā rāda {{ui:Novietot modelī}}; Sadalītā skatā tā rāda sadalītu pogu ar {{ui:Novietot plānā}} kā galveno darbību. Abi veidi raksta to pašu IFC elementu. Varat arī ievilkt Bibliotēkas kartīti uz plāna vai 3D skata; ar pildspalvu vai pirkstu nospiediet un turiet, tad velciet. Sk. [Novietot no bibliotēkas](topic:place-from-library).

### Faili un asistenti

- **Collada un Google Earth.** {{ui:Collada}} rīkjoslā (Fails izvēlnē izvēlnes stilos) raksta .dae vai .kmz, novietotu, kur modelis atrodas kartē. Sk. [Eksportēt modeli kā Collada vai Google Earth](topic:collada).
- **Asistenti var novietot elektroierīces.** Jūsu pieslēgtajam asistentam ir jauni rīki, lai pievienotu, uzskaitītu, mainītu un dzēstu ierīces un iestatītu gaismas. Asistenti paliek izslēgti, līdz tos ieslēdzat {{ui:Iestatījumi}}. Sk. [Ļaujiet MI asistentam strādāt ar jūsu modeli](topic:assistants).
- **Scan to BIM (papildinājums).** Pēc noklusējuma izslēgts, un nepieciešams Punktu mākoņu papildinājums. Tas piedāvā stāvus, sienas, durvis un logus no skenējuma ar izmērītu novirzi katram; pieņemšana ir viens atsaukšanas solis.

### Aprēķins

- **Vēja un seismiskie vietas dati.** {{ui:Aprēķins}} cilnē: vēja slodzes saskaņā ar ASCE 7-10 vai 7-16 stingrai noslēgtai ēkai, ar spēku uz katra stāva kā slodzes gadījumiem, un seismiskie vietas dati ar USGS meklēšanu un projektēšanas spektru.
- **Konstrukciju turpinājums un galīgie elementi.** Betona pārbaudes saskaņā ar ACI 318-19, ekvivalentie horizontālie spēki saskaņā ar ASCE 7-22, stāvu nobīde, pārsegumi un sienas kā plātnes, un slodzes kombinācijas no ASCE 7 un EN 1990. Mūsu pašu galīgo elementu dzinējs veido čaulas, tetraedrus un modālo analīzi. Sk. [Pārbaudīt betona elementus un veidot seismiskās slodzes](topic:concrete-and-seismic) un [Rāmja analīze](topic:frame-analysis).

### Citi papildinājumi un dokumenti

- **Iekšējais apgaismojums (papildinājums).** Novieto apgaismojuma ierīces un ieraksta luksus kā skaitļus katra līmeņa plānā, ar mirdzuma aplēsi un drukājamu pārskatu.
- **Dokumentu panelis.** {{ui:Fails}} › {{ui:Dokumenti…}} ietver izņemšanu un ievietošanu ar bloķēšanas failu, pārskatījumu burtiem, izlaides stāvokļiem un vēsturi.
- **Reģioni un tērauds.** Dienvidāfrikas rasējumu un būvnoteikumu paketes Regulējumu papildinājumā un 976 Lielbritānijas tērauda izmēri kopīgajā sekciju tabulā.
- **Bezmaksas sveķu drukas papildinājumi.** Slicer, atbalsti un plāts, ekspozīcijas tests un GOO, SL1, Chitubox un Anycubic failu formāti, visi pēc noklusējuma izslēgti.

## Visās lietotnēs

- Novietojot peli uz pogas vai vadības elementa, parādās Bootstrap rīka padomu.
- Sākuma padoms tukšā zīmēšanas laukumā ir ar aizvēršanas pogu; BimCraft atceras, ka tas tika aizvērts.
- Paneļa cilņu josla, kas neiekļaujas, tagad ritina, nevis tiek apgriezta.
- Ar atvērtu dokumentu pārlūka cilne rāda "<dokuments> - BimCraft | CadCraft".
- {{ui:Iestatījumi}} › {{ui:Vispārīgi}} › {{ui:Izkārtojums}} izkārtojumi ir nolaižams saraksts ar divrindu izvēlēm.
- Valodu saraksts {{ui:Iestatījumi}} piedāvā vairāk valodu nekā 0.8; valodas, kas nav angļu, ir mašīntulkojuma melnraksti.

## Labots

- **Pārvietošana darbojas uz kāpnēm** un uz rampām, margām, jumta plaknēm, brīvi stāvošām ierīcēm, attēliem un ceļiem.
- **Sienas vilkšana vairs nesagroza telpu.** Centrālais rokturis pārvieto sienu perpendikulāri pati sev, un tās stūri slīd pa pieslēgtajām sienām. Turiet {{key:Mod}} vecajai brīvajai pārvietošanai; {{ui:Izlīdzināt kvadrātā}} atjauno 90 grādus.
- **Biezuma vai tipa maiņa pieslēgtā mezglā** tagad saglabā stūri slēgtu L, T, trīs sienu mezglā un blakus izliektai sienai.
- **Telpu grupas pārvietošana vai kopēšana** saglabā pieslēgtās sienas ārpus grupas pieslēgtas.
- **Redzamu sienu pārvietošana** ar Zīmēšanu izslēgtu Rekvizītos vairs nemet kļūdu.
- **Renderēšana atkāpjas uz WebGL**, kad GPU nevar sākt, nevis apstājas.
- **EnergyPlus pārbaudi** atkal var ieslēgt.
- **Dokumenti atveras kā centrēts dialogs.** {{key:Esc}}, X vai klikšķis uz aptumšotās lapas to aizver.
- **Pogas {{ui:Plāns}}, {{ui:Sadalīt}} un {{ui:3D}} parādās**, tiklīdz modelis ir atvērts, nevis tikai pēc tam, kad Zīmēšana bija kādreiz ieslēgta.

## Godīgi ierobežojumi

- Nekas netika drukāts uz reālas aparatūras. Sveķu atbalsti ir jauni un nepierādīti.
- Vēja, seismiskie, betona un galīgo elementu rezultāti ir pārbaudes palīglīdzekļi inženierim, pārbaudīti pret slēgtām formulām, nevis pret reālu ēku.
- Scan to BIM tika testēts uz sintētiskas ēkas, nevis reāla skenējuma, un atrod tikai taisnstūrveida telpas.
- Collada šeit nav atvērts Blender vai Google Earth.
- Apgaismojuma aplēse pārbaudīta pret mūsu pašu trasēšanu, nevis pret citām apgaismojuma programmām.
- Dienvidāfrikas skaitļi nav pārbaudīti.
- Sienu savienojumu stili (butt, mitre, square off) un slāņu prioritāte nav izveidota; stūri ir šķautnēs.
- Valodas, kas nav angļu, ir mašīntulkojuma melnraksti.

Viss pārējais ir [Kas vēl nav izveidots](topic:not-built-yet). Iepriekšējās izmaiņas ir 0.8 un 0.8.1 piezīmēs tālāk šajā lappusē.

## Agrāk: 0.8 un 0.8.1

Šis ir tas, kas mainījās BimCraft 0.8 (2026-11-01) un 0.8.1 (2026-11-02) salīdzinājumā ar 0.7. BimCraft tagad var atbildēt uz jautājumiem par ēku un to pārbaudīt ar cilvēkiem, skaņu, ūdeni, vēju un zemestrīcēm, un zīmēt to ar vairāk rīkiem; 0.8.1 ir labojumu izlaidums.

### Jaunais

**Ēkas pārbaude**

- **Cilvēki ēkā.** {{ui:Cilvēki ēkā}} sadaļa kreisajā panelī vada evakuāciju vai parastas dienas ierašanos cauri jūsu telpām, durvīm un kāpnēm. Jūs redzat rindas, kur ēka sašaurinās, garāko ceļu uz izeju no katras telpas un to, cik ilgi pēdējais cilvēks nonāk. Atzīmējiet {{ui:Slēgts}} uz durvīm, lai redzētu, kas mainās, un atzīmējiet {{ui:Rādīt cilvēkus 3D skatā}}, lai vērotu gājējus. Secinājumi nonāk Problēmās. Rupjs pūļa modelis projektēšanas lēmumiem, nevis ugunsdrošības sertifikāts. Sk. [Vest cilvēkus caur ēku](topic:people-in-the-building).
- **Telpu akustika, un dzirdiet to.** {{ui:Telpu akustika}} sadaļa dod katras telpas reverberācijas laiku pa oktāvju joslām (Sabine un Eyring) no tās izmēra un izvēlētajām apdarēm, un ar jūsu pašu mērķi saka, cik daudz absorbcijas atbilstu tam. {{ui:Atskaņot šajā telpā}} atskaņo balsi, plaukšķināšanu, plūktas notis vai jūsu pašu skaņas failu caur impulsa reakciju, kas aprēķināta telpai. Absorbcijas skaitļi ir tipiskas publicētas vērtības, ko jūs varat aizstāt. Sk. [Telpu akustika](topic:room-acoustics).
- **Plūdu, vēja un zemestrīces atskaņošana.** {{ui:Bīstamības atskaņošana}} atskaņo ūdeni, kas paceļas pa telpām, vēja spiedienu uz katru stāvu un zemestrīci, kas krata stāvus, plānā vai fasādē ar laika slīdni. Vienkāršoti modeļi ar to pieņēmumiem uz paneļa; nav noteikumu pārbaude. Sk. [Atskaņot plūdus, vēju vai zemestrīci](topic:hazard-playback).
- **Ko nodilst piecdesmit gadu laikā.** {{ui:Dzīves cikla skats}} uzskaita logus, durvis, apdares un jumtu ar katra kalpošanas laiku, gadus, kad tie tiek nomainīti, un, ja ierakstāt izmaksas par vienību, izmaksas pēc gada un to tagadnes vērtību. {{ui:Saglabāt specifikāciju (CSV)}} to uzraksta. Kalpošanas laiki ir plānošanas skaitļi. Sk. [Redzēt, kas nodilst piecdesmit gadu laikā](topic:life-cycle-view).
- **Betona un seismiskās pārbaudes.** {{ui:Betona elementi}} un {{ui:Seismiskās slodzes}} bloki {{ui:Aprēķins}} cilnē pārbauda betona sijas un kolonnas pēc ACI 318-19 un veido ekvivalentos horizontālos spēkus pēc ASCE 7-22 uz stingriem stāviem, ar stāvu nobīdi. Inženierim pārbaudei. Sk. [Pārbaudīt betona elementus un veidot seismiskās slodzes](topic:concrete-and-seismic).

**Pārbaude un pārskati**

- **Pārbaude pret IDS.** Ielādējiet `.ids` failu, ko jums iedeva klients, un redziet katru elementu, kas tam neatbilst, Problēmās, pirms piegādājat IFC. Atveriet {{ui:Pārbaudīt pret IDS}} zem {{ui:Modeļa pārbaudes}}. Sk. [Pārbaudīt modeli pret klienta IDS](topic:check-against-ids).
- **Tagi un specifikācijas.** Definējiet savus tagus, uzlieciet tos uzreiz daudziem elementiem un veidojiet specifikācijas, kuru kolonnas, filtri un grupas tos lasa; tagi tiek saglabāti IFC. Sk. [Tagi un specifikācijas](topic:tags-and-schedules).
- **Dokumenti no modeļa.** {{ui:Dokumenti no modeļa}} aizpilda specifikācijas veidni no atvērtā IFC un saglabā to kā PDF, Word dokumentu vai Markdown. Sk. [Dokumenti no modeļa](topic:documents-from-the-model).
- **Salīdziniet skenējumu ar modeli.** Ar atvērtu punktu mākoni {{ui:Salīdzināt}} katru elementu vērtē kā uzbūvētu, daļēji uzbūvētu, trūkstošu vai nesasniegtu, un rāda uzbūvēto procentu. Sk. [Salīdzināt skenējumu ar modeli](topic:compare-scan-with-model).
- **Oglekļis un izmaksas.** Oglekļa panelis saskaita iemiesoto oglekli pēc faktoru tabulas, ko varat rediģēt, un Izmaksu panelis sadala cenas pa 4D grafiku. Faktori, kas nāk kopā ar BimCraft, ir vispārīgi un atzīmēti kā nepārbaudīti. Sk. [Iemiesotais oglekļis un izmaksas](topic:embodied-carbon-and-5d-cost).
- **Jebkura kartes projekcija.** {{ui:Mērīt}} › {{ui:Koordinātu sistēma…}} pieņem EPSG numuru, UTM zonu, nosaukumu vai jūsu pašu projekcijas definīciju. Sk. [Georeferencēt ar jebkuru projekciju](topic:georeference-any-projection).

**Zīmēšana un labošana**

- **Pārvietot, izlīdzināt un sadalīt.** Zem {{ui:Būvējums}}; {{key:Shift+M}} sāk Pārvietošanu (vienkāršs {{key:M}} joprojām ir Mērīt). Pārvietošana kopē, kamēr ejat, ar {{key:C}}, katrs solis ir viens atsaukšanas solis, un tā ceļo Live TeamWork sesijā. Sk. [Pārvietot, kopēt, izlīdzināt un sadalīt](topic:move-align-distribute).
- **Attēli zem plāna.** {{ui:Būvējums}} › {{ui:Attēls}} novieto PNG, JPEG vai WebP zem stāva plāna vai vertikālā plaknē. Iestatiet mērogu ar diviem punktiem un pārvietojiet, pagrieziet, izbalējiet un bloķējiet to. Apgabals, kas nokopēts MarkupCraft, tiek ielīmēts savas lapas mērogā. Sk. [Novietot attēlu zem plāna](topic:pictures-as-backgrounds).
- **Sienas no skenējuma.** Ar atvērtu skenējumu sienas, durvis un telpas nāk kā priekšlikumi, ko paturat vai noraidāt katru atsevišķi, vienā atsaukšanas solī. Atrod tikai sienas divos perpendikulāros virzienos. Sk. [Pārvērst skenējumu sienās](topic:scan-to-walls).
- **Pārzīmēšana, pildspalvas un skicēta kāpnes.** {{ui:Pārzīmēt}} rāda citu stāvu punktētu zem plāna, {{ui:Pildspalvas}} dod sienām, durvīm un logiem savu līnijas biezumu vienā skatā, un {{ui:Skicēt kāpnes}} pārvērš gājiena līniju kāpnēs. Atveras Wavefront OBJ tīkls. Sk. [Pārzīmēt stāvu, pildspalvas un kāpnes no skices](topic:trace-pens-stairs-obj).
- **Ēkas ap adresi.** Ēkas un parcela, ko CivilCraft adrešu-uz-vietu atrada, nāk kā priekšlikumi; jūs atzīmējat tās, ko pievienot. Sk. [Sākt no CivilCraft vietas](topic:site-from-civilcraft).
- **Paneļu rasējumi.** {{ui:Būvējums}} › {{ui:Paneļu rasējumi}} ietver sienas, grīdas un jumtus kokā vai vieglā tērauda profilā un saglabā griešanas sarakstu kā CSV un darbnīcas rasējumus kā PDF. Sākuma vērtības, nevis konstrukcijas projekts. Sk. [Paneļu rasējumi](topic:panel-drawings).
- **Simbolu paleta un augi.** {{ui:Būvējums}} › {{ui:Simbolu paleta}} atrod elektriskos un santehnikas simbolus pēc nosaukuma; {{ui:Augi}} avots {{ui:Bibliotēka}} uzskaita apmēram 400 augus ar plāna simboliem. Sk. [Simbolu paleta](topic:symbol-palette) un [Novietot augu](topic:plant-list).

**Caurules, gaisa vadi un enerģija**

- **Sadalītie, VRF un fan coil.** Iekšējās un ārējās vienības ar to pieslēgumiem, un šķidruma līnijas, izmērītas pēc tipisku piemēra vērtību tabulas, ko varat mainīt. Sk. [Sadalītās, VRF un fan coil sistēmas](topic:split-vrf-fan-coils).
- **Aprēķini.** Aprēķinu panelis pārbauda padeves cauruļu un gaisa vadu izmērus ar spiediena zudumu, vada kabeļus caur trauku un caurulēm un parāda to aizpildījumu, un aprēķina apgaismojumu no IES vai EULUMDAT failiem. Noklusējumi ir apzīmēti; ierakstiet savas normas vērtības. Sk. [Cauruļu, gaisa vadu, kabeļu un gaismas aprēķini](topic:mep-calculations).
- **PCF faili.** Cauruļu rīka **Eksportēt PCF** raksta trases cauruļu sprieguma un izometrisko programmu vajadzībām, un PCF fails, kas nolasīts atpakaļ, zīmē savu cauruli. Sk. [Cauruļu komponentu faili](topic:piping-pcf).
- **Saules PV.** Uzstādiet masīvus uz jumtiem vai zemes, nomāciet tos no modeļa, aprēķiniet gada enerģiju, pārbaudiet virknes un izveidojiet vienas līnijas shēmas datus. Sākuma modulis un zudumi ir vispārīgi. Sk. [Saules PV](topic:solar-pv).
- **EnergyPlus fails.** Panelis Pārbaudīt ar EnergyPlus raksta modeli kā IDF, lai palaistu savā EnergyPlus. Palaišana pārlūkā prasa jūsu pašu uzstādītu versiju un adresi, ko ierakstāt; BimCraft to nenes līdzi. Sk. [Pārbaudīt apkuri un dzesēšanu ar EnergyPlus](topic:check-with-energyplus).

**Attēli un faili**

- **Izvēlieties renderēšanas dzinēju.** {{ui:Renderēt}} ir {{ui:Dzinējs}} izvēle. Mūsu divi iebūvētie dzinēji (Ātrais un Ceļu izsekotājs) paliek noklusējums. {{ui:Atvērt ...}} saglabā ainu kā USD vai glTF failu, un Unreal projekta mapi kā .zip; CadCraft Studio papildinājums var pievienot dzinēju. Unreal spraudnis, kas atver projektu, nav izlaists. Sk. [Izvēlieties, kura programma zīmē attēlu](topic:render-engines).
- **Studio atsaukšana.** CadCraft Studio iekšienē BimCraft pasaka Studio katru pabeigto soli, lai Studio varētu atsaukt jūsu pēdējo soli logā, ko izmantojāt pēdējo. Sk. [Atsaukšana starp lietotnēm](topic:undo-across-apps).
- **Papildinājumi jūsu failā.** IFC ieraksta, kuri papildinājumi tajā rakstīja, un piedāvā tos, kas jums trūkst, kad to atverat. Sk. [Papildinājumi jūsu failā](topic:add-ons-in-your-file).

**Visās lietotnēs**

- **Savienojiet savu MI.** Jūsu pašu asistents var vadīt BimCraft caur Studio savienojumu un atbildēt uz jautājumiem par modeli, piemēram, kuras telpas ir zem noteiktas platības. Studio pats nav MI. Sk. [Ļaujiet MI asistentam strādāt ar jūsu modeli](topic:assistants).
- **Lentes cilnes rindas.** {{ui:Iestatījumi}} › {{ui:Vispārīgi}} › {{ui:Rīkjoslas rindas}} piedāvā Ietīt, 2 rindas vai 1 rindu; Ietīt paliek noklusējums.
- **Ievades ierīces.** Skārienpaliktņa, pildspalvas, 3D peles, kontrollera un MIDI iestatījumi ir kopīgi visām lietotnēm.
- **Problēmas un Live.** Brīdinājumu panelis un Live sesijas darbojas kā iepriekš, ar iepriekš minētajām jaunajām pārbaudēm, kas baro Problēmas.
- **Valodas.** 54 valodas, desmit no tām jaunas. Valodas, kas nav angļu, ir mašīntulkojuma melnraksti, ko dzimtā valoda vēl nav pārskatījusi; palīdzības tēmas galvenokārt ir angļu valodā.

### Labots 0.8.1

- **Lentes + Projekta pārlūka izkārtojums.** Ievietot › Importēt CAD, Ievietot › Attēls un Pārvaldīt › Projekta mērvienības teica "Vēl nav izveidots BimCraft". Attēls tagad atver {{ui:Attēls}} rīku, Importēt CAD atver {{ui:Būvējums}} › {{ui:No rasējuma…}} (DWG, DXF, PDF vai skenējums), un Projekta mērvienības atver {{ui:Iestatījumi}} › {{ui:Visur}} › {{ui:Mērvienības}}. Pārvietot un Izlīdzināt palaiž Pārvietošanas un Izlīdzināšanas rīkus, Līmenis atver {{ui:Pievienot līmeņus…}}, Fāzes atver renovācijas fāžu sadaļu, un Materiāli atver materiālu bibliotēku.
- **DWG klašu sadaļa.** Tā tika nolasīta kā nepareizs tips; labots BimCraft un citās lietotnēs, kas nolasa DWG.
- **Valoda izpildes laikā.** Studio un iepakotie izdevumi tagad var pārslēgt valodu bez restartēšanas. Tas vēl nav pārbaudīts uz katras platformas; pastāstiet mums, ja valoda nemainās.
- **Archicad paketes skripts.** `archicad_bundle.py`, atsevišķa lejupielāde, tagad atrod Archicad ceļu, vēro mapi līdz 20 sekundēm un mēģina vēlreiz blakus paketei.

### Vēl nav šajā versijā

- **Drošības un projektēšanas palīglīdzekļi.** Cilvēki ēkā nav ceļu attāluma ierobežojuma no būvnoteikumiem (jūs to ierakstāt) un nav pārbaudīts ar roku uz reāla plāna. Akustikas, dzīves cikla un bīstamību skaitļi ir plānošanas vērtības, nevis noteikumu pārbaude.
- **Klimata nākotnes un EnergyPlus.** Iebūvētu klimata nākotņu nav: plūdu palaišanai varat ielādēt scenārija failu. EnergyPlus palaišana pārlūkā nav šajā izlaidumā.
- **Lentes izkārtojums.** Materiālu uzskaite paliek "Nav izveidots", jo BimCraft nav materiālu daudzumu saraksta, un 54 citi pelēkie lentes rīki vēl nav BimCraft rīku.
- **Parakstīšana un platformas.** Windows instalētāji un macOS .dmg nav parakstīti, tāpēc SmartScreen rāda {{ui:Papildinformācija}}, tad {{ui:Palaist tomēr}}, un macOS prasa peles labo pogu un tad {{ui:Atvērt}}. iPad un iPhone versija netika pārbūvēta 0.8.1.
- **Reālās lapas testi.** Daži vecāki BimCraft pārlūka testi joprojām neizdodas mūsu testa lapā, kā tie neizdevās pirms 0.8.1.

Viss pārējais ir [Kas vēl nav izveidots](topic:not-built-yet). Agrākās izmaiņas ir [Jaunumi 0.7](topic:whats-new-0-7).
