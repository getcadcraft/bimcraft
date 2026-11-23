---
title: Jaunumi 0.9 (iepriekšējais laidiens)
summary: Sienu formas, sadalīšana, nobīde, stiepšana un bloķēšana pie režģa, līmeņi zem zemes, režģa izmēri un Mērīt plānā, dublēti skati ar darba stiliem un pildspalvu tabulām, Ziņot kā, Collada un Google Earth eksports, Scan to BIM, vēja un seismiskā analīze, sveķu drukas papildinājumi.
keywords: jaunumi 0.9, iepriekšējais laidiens, jaunumi, 0.9, laidiena piezīmes, sienu formas, taisnstūris, daudzstūris, loks, izvēlēties līnijas, nobīde, savienojums, kastes stiepšana, izlīdzināt un bloķēt, sadalīt sienu, atstarpe, savienot atpakaļ, bloķēt pie režģa, augt no, mērīt no, pievienot līmeni zemāk, pagrabs, līmeņa komanda, režģa izmēri, mērīt plānā, darba stils, dublēt skatu, patstāvīga kopija, saistīts skats, pildspalvu tabula, drukāt kā redzams, ziņot kā, ierakstīt mērogu, importēt svg, novietot plānā, novietot modelī, collada, dae, kmz, google earth, scan to bim, vēja slodze, seismiska, galīgo elementu, dokumentu panelis, sveķu drukāšana, jaunumi, what's new, laidiena piezīmes, izmaiņu žurnāls, izmaiņas, 0.8, 0.8.1, versija, jaunas funkcijas, evakuācija, cilvēki, rindas, akustika, reverberācija, impulsa atbilde, plūdi, vējš, zemestrīce, apdraudējums, dzīves cikls, kalpošanas laiks, ids, birkas, specifikācijas, pārvietot, izlīdzināt, sadalīt, attēls, fons, skenējums uz sienām, teritorija no civilcraft, paneļu rasējumi, karkass, saule, pv, sadalīt, vrf, fankoilu, cauruļu izmēri, kabeļu trase, apgaismojums, betons, seismiska, salīdzināt skenējumu, epsg, projekcija, dokumenti, veidne, oglekļa, izmaksas, energyplus, renderēšanas dzinējs, atvērt, usd, glb, unreal, atsaukt, papildinājumi, pcf, simboli, augi, pārzīmēt, pildspalvas, lente, projektu pārlūks, izkārtojums
from: 816df7f8
---

Šis ir tas, kas mainījās BimCraft 0.9 versijā, salīdzinot ar 0.8.1. Divas galvenās tēmas ir īsts sienu rīks un skati, kas darbojas tā, kā to gaida cilvēki, kas nākuši no lielajām BIM programmām. Ap tām ir Collada eksports, asistenti, kas var novietot elektroierīces, Scan to BIM un vēja, seismiskā un galīgo elementu darbs cilnē {{ui:Aprēķins}}.

## Jauns

### Sienas

- **Zīmēt veselas formas.** Sadaļā {{ui:Zīmēšana}} atveriet {{ui:Formas}} (vai izvēlieties formu sienu rindas sarakstā Forma) taisnstūrim, pagrieztam taisnstūrim, daudzstūrim ar 3 līdz 64 malām, lokam pēc centra, tangenciālam lokam, sienām pa izvēlētām līnijām vai sienām ap slēgtu laukumu, kurā noklikšķiniet. Taisnstūris ir četras sienas ar četriem savienotiem stūriem un viens atsaukšanas solis. Skatiet [Sienu formas, sadalīšana, nobīde, stiepšana un bloķēšana](topic:wall-tools).
- **Iestatīt pirms zīmēšanas, mainīt pēc.** Sienu rindā ir {{ui:Nobīde}} un {{ui:Savienojums}} (noņemiet atzīmi, lai zīmētu brīvi stāvošas sienas). Vēlāk zīmētām sienām izmantojiet {{ui:Nobīde}}, {{ui:Kastes stiepšana}} un {{ui:Izlīdzināt un bloķēt}}. Pārvietota vai izstiepta siena saglabā savas durvis, logus un izmērus. Katra receptes darbība ir viens atsaukšanas solis.
- **Sienu sadalīšana.** {{ui:Sadalīt}}, {{ui:Atstarpe}}, {{ui:Brīvi gali}}, {{ui:Dzēst posmu}} un {{ui:Savienot atpakaļ}} sadala sienu ar klikšķi vai tur, kur to krusto cita siena. Griezums caur durvīm tiek noraidīts. Skatiet [Sienu formas, sadalīšana, nobīde, stiepšana un bloķēšana](topic:wall-tools).
- **Sienu bloķēšana pie režģa līnijām.** Atlasiet sienu gar režģa līniju un atzīmējiet {{ui:Bloķēt pie režģa}} sadaļā {{ui:Rekvizīti}}. Ar ieslēgtu Režģa rīku ierakstiet attālumu laukā {{ui:Pārvietot par}} izvēlētai līnijai, un bloķētās sienas seko vienā atsaukšanas solī.
- **Vienas sienas forma.** Sadaļā {{ui:Rekvizīti}} vienai sienai varat piestiprināt tās augšu vai pamatni pie jumta, grīdas vai griestiem, rediģēt tās augstuma kontūru, noliekt to vai izveidot sienas atvērumu bez durvīm vai logiem. Skatiet [Sienas forma](topic:wall-shape).
- **Garums rāda, kurš gals paliek vietā.** {{ui:Augt no}} nosaka, vai mainot garumu, paliek vietā sākums, gals vai centrs.
- **Garums un plāna izmērs sakrīt.** {{ui:Mērīt no}} (centra līnija, iekšējā virsma vai ārējā virsma) vada gan lauku Garums, gan plāna sienu izmērus. Sākotnēji tas ir centra līnijā, tāpēc plāna sienu izmēri tagad rāda centra līniju, kur iepriekš rādīja ārējo virsmu. Mainiet to sienu rindā, sadaļā {{ui:Rekvizīti}} vai {{ui:Iestatījumi}} › {{ui:BimCraft}} › {{ui:Sienas}}.

### Līmeņi, režģi un mērīšana

- **Pievienot līmeni zemāk.** {{ui:Pievienot līmeni zemāk}} sadaļā {{ui:Līmeņi}} pievieno līmeni zem zemākā, tikpat augstu kā tas, negatīvā augstumā (Level -1, Level -2). Nekas cits nepārvietojas. {{ui:Pievienot līmeņus…}} tagad pieņem negatīvus augstumus. Ierakstot komandrindā LEVEL, LEVELS, STOREY vai STOREYS, atveras {{ui:Pievienot līmeņus…}}, un izvēlnēs un lentes cilnēs ir poga {{ui:Līmeņi}}. Skatiet [Vietas, ēkas un līmeņi](topic:site-building-and-levels).
- **Režģa izmēri plānā.** Ieslēdziet {{ui:Režģis}} rīku un atzīmējiet {{ui:Izmēri}}, lai zīmētu attālumu starp blakusesošām līnijām un kopējo izmēru aiz burbuļiem katra līmeņa plānā. Skatiet [Režģa izmēru dimensionēšana](topic:grid-dimensions).
- **Mērīšana plānā.** {{ui:Mērīt}} grupā {{ui:Zīmēšana}} dod attālumu ar X un Y starpībām starp diviem klikšķiem. Modelī nekas netiek saglabāts. Skatiet [Mērīšana plānā](topic:measure-on-the-plan).
- **Vairāku kolonnu maiņa vienlaikus.** Atlasiet kolonnas kopā ar sienu, un saraksts parāda katru veidu ar {{ui:Atstāt tikai šos}}. Viens klikšķis paturē kolonnas un parāda to kopīgos laukus.
- **Viena attēlošanas mērvienība visur.** Koordinātas, mērījumi, griezumi, lapu mērogi, rāmja cilnes slodzes un rezultāti un Problēmu teksts seko mērvienībai, ko izvēlaties. Eksporti paliek SI.

### Skati, lapas un drukāšana

- **Darba stils.** {{ui:Iestatījumi}} › {{ui:BimCraft}} › {{ui:Darba stils}} izvēlas, vai katram skatam ir savas anotācijas un pildspalvu tabulas, vai tās tiek kopīgotas. Skatiet [Darba stils, dublētie skati, pildspalvas uz papīra, Ziņot kā un veidnes](topic:working-style).
- **Skata dublēšana.** Plānus, griestu plānus, izsaukumus, fasādes un griezumus var dublēt kā {{ui:Patstāvīga kopija}} vai {{ui:Saistīts}}; {{ui:Padarīt par patstāvīgu kopiju}} padara saistīto neatkarīgu. Skatiet [Darba stils, dublētie skati, pildspalvas uz papīra, Ziņot kā un veidnes](topic:working-style).
- **Drukāt kā redzams vai caur pildspalvu tabulu.** Pildspalvu pārrakstījumi tiek saglabāti IFC kopā ar skatu, un lapas un PDF failos tie tiek zīmēti tā, kā ekrānā. Tas pats temats aptver pildspalvu tabulas.
- **Ziņot kā.** {{ui:Ziņot kā}} sadaļā {{ui:Rekvizīti}} ieraksta IFC failā nogāzi, zīmētu kā ceļu, sienu kā paneli vai jumtu kā rampu, kā izvēlēto klasi, un tā tiek skaitīta specifikācijās, daudzumos, meklēšanā, krāsošanā pēc vērtības un Problēmās.
- **Rediģēšana fasādēs un griezumos.** Zīmējiet un pārvietojiet sienas, atvērumus, līmeņus, izmērus un piezīmes tieši fasādē vai griezumā, ar saviem lapu izmēriem un titula blokiem. Skatiet [Rediģēšana fasādēs un griezumos](topic:edit-in-elevations).
- **Lapas.** Katra lapa var būt ainava vai portrets. Lauks {{ui:Ierakstiet mērogu}} atrodas blakus mērogu sarakstam katrā novietotajā skatā (1:64, 2:1, 1/4" = 1'). Novietotu rasējumu var pavilkt vai pabīdīt ar bultiņu taustiņiem, un {{ui:Formāti…}} › {{ui:Importēt SVG…}} pārvērš jūsu pašu lapas dizainu par titula bloku ar laukiem, kas ierakstīti katrai lapai.
- **Bibliotēkas kredīti uz lapas.** Rasējumu komplektam ar bibliotēkas vienumiem tiek izveidota bibliotēkas kredītu specifikācija, ko var novietot uz jebkuras lapas. Skatiet [Bibliotēkas kredīti](topic:library-credits).

### Bibliotēka: novietošana

- **Novietošana seko skatam.** Plāna skatā bibliotēka rāda {{ui:Novietot plānā}}; 3D skatā tā rāda {{ui:Novietot modelī}}; sadalītajā skatā tā rāda sadalītu pogu ar {{ui:Novietot plānā}} kā galveno darbību. Abi veidi ieraksta to pašu IFC elementu. Varat arī vilkt bibliotēkas kartīti uz plāna vai 3D skata; ar pildspalvu vai pirkstu nospiediet un turiet, pēc tam velciet. Skatiet [Novietošana no bibliotēkas](topic:place-from-library).

### Faili un asistenti

- **Collada un Google Earth.** {{ui:Collada}} rīkjoslā (izvēlnē Fails izvēlņu stilos) raksta .dae vai .kmz failu, kas novietots tur, kur modelis atrodas kartē. Skatiet [Eksportēt modeli kā Collada vai Google Earth](topic:collada).
- **Asistenti var novietot elektroierīces.** Jūsu pievienotajam asistentam ir jauni rīki, lai pievienotu, uzskaitītu, mainītu un dzēstu ierīces un iestatītu apgaismojumu. Asistenti paliek izslēgti, līdz tos ieslēdzat sadaļā {{ui:Iestatījumi}}. Skatiet [Ļaut MI asistentam strādāt ar jūsu modeli](topic:assistants).
- **Scan to BIM (papildinājums).** Pēc noklusējuma izslēgts, nepieciešams papildinājums Point clouds. Tas no skenējuma piedāvā stāvus, sienas, durvis un logus ar izmērīto novirzi katram; apstiprināšana ir viens atsaukšanas solis.

### Analīze

- **Vēja un seismiskie vietas dati.** Cilnē {{ui:Aprēķins}}: vēja slodzes pēc ASCE 7-10 vai 7-16 stingrai noslēgtai ēkai, ar spēku uz katra stāva kā slodzes gadījumiem, un seismiskie vietas dati ar USGS meklēšanu un projektēšanas spektru.
- **Konstrukciju turpinājums un galīgie elementi.** Betona pārbaudes pēc ACI 318-19, ekvivalentie horizontālie spēki pēc ASCE 7-22, stāvu nobīde, plātnes un sienas kā plāksnes, un slodžu kombinācijas pēc ASCE 7 un EN 1990. Mūsu pašu galīgo elementu dzinējs veic čaulas, tetraedrus un modālo analīzi. Skatiet [Betona elementu pārbaude un seismiskās slodzes](topic:concrete-and-seismic) un [Rāmja analīze](topic:frame-analysis).

### Citi papildinājumi un dokumenti

- **Iekšējais apgaismojums (papildinājums).** Novieto gaismekļus un ieraksta luksus kā skaitļus katra līmeņa plānā, ar spilgtuma novērtējumu un drukājamu atskaiti.
- **Dokumentu panelis.** {{ui:Fails}} › {{ui:Dokumenti…}} nodrošina izņemšanu un atgriešanu ar bloķēšanas failu, pārskatījumu burtiem, izlaides statusiem un vēsturi.
- **Reģioni un tērauds.** Dienvidāfrikas rasējumu un būvnoteikumu komplekti papildinājumā Regulations un 976 Lielbritānijas tērauda izmēri kopīgajā šķērsgriezumu tabulā.
- **Bezmaksas sveķu drukas papildinājumi.** Slicer, atbalsti un plāksne, ekspozīcijas tests un failu formāti GOO, SL1, Chitubox un Anycubic, visi pēc noklusējuma izslēgti.

## Visās lietotnēs

- Novietojot peli virs pogas vai vadības elementa, parādās Bootstrap rīkpadoms.
- Sākuma padomam tukšā zīmēšanas laukumā ir aizvēršanas poga; BimCraft atceras, ka tas ir aizvērts.
- Paneļa cilņu josla, kas neiederas, tagad ritina, nevis tiek apgriezta.
- Ar atvērtu dokumentu pārlūkprogrammas cilne rāda "<dokuments> - BimCraft | CadCraft".
- Sadaļā {{ui:Iestatījumi}} › {{ui:Vispārīgi}} › {{ui:Izkārtojums}} izkārtojumi ir nolaižams saraksts ar divrindu izvēlēm.
- Valodu saraksts sadaļā {{ui:Iestatījumi}} piedāvā vairāk valodu nekā 0.8; valodas, kas nav angļu, ir mašīntulkojumi.

## Labots

- **Pārvietošana darbojas uz kāpnēm** un uz rampām, margām, jumta plaknēm, brīvi stāvošām ierīcēm, attēliem un ceļiem.
- **Sienas vilkšana vairs nesagroza telpu.** Centra turis pārvieto sienu kvadrātā pret sevi, un tās stūri slīd pa savienotajām sienām. Turiet {{key:Mod}}, lai iegūtu veco brīvo pārvietošanu; {{ui:Izlīdzināt kvadrātā}} atjauno 90 grādus.
- **Biezuma vai tipa maiņa savienotā mezglā** tagad saglabā stūri slēgtu pie L, T, trīssienu mezgla un blakus izliektai sienai.
- **Telpu grupas pārvietošana vai kopēšana** saglabā savienotās sienas ārpus grupas savienotas.
- **Atkārtot saglabā sienas izmēra identitāti.**
- **Sienas atlasīšana, kad Zīmēšana ir izslēgta,** vairs neizraisa kļūdu sadaļā Rekvizīti.
- **Renderēšana pāriet uz WebGL,** kad GPU nevar palaisties, nevis apstājas.
- **EnergyPlus pārbaudi var atkal ieslēgt.**
- **Dokumenti atveras kā centrēts dialogs.** {{key:Esc}}, X vai klikšķis uz aptumšotās lapas to aizver.
- **Pogas {{ui:Plāns}}, {{ui:Sadalīt}} un 3D parādās,** tiklīdz modelis ir atvērts, nevis tikai pēc tam, kad Zīmēšana bija vienreiz ieslēgta.

## Godīgi ierobežojumi

- Nekas nav drukāts uz reāla aparatūras. Sveķu atbalsti ir jauni un nepārbaudīti.
- Vēja, seismiskie, betona un galīgo elementu rezultāti ir inženiera pārbaudes palīglīdzekļi, pārbaudīti pret slēgtām formulām, nevis pret reālu ēku.
- Scan to BIM tika pārbaudīts uz sintētiskas ēkas, nevis reāla skenējuma, un atrod tikai taisnstūrveida telpas.
- Collada šeit nav atvērts Blender vai Google Earth.
- Apgaismojuma novērtējums ir pārbaudīts pret mūsu pašu izsekojumu, nevis pret citām apgaismojuma programmām.
- Dienvidāfrikas skaitļi nav pārbaudīti.
- Sienu savienojumu stili (butt, mitre, square off) un slāņu prioritāte nav ieviesti; stūri ir sašķelti.
- Valodas, kas nav angļu, ir mašīntulkojumi.

Viss pārējais ir [Kas vēl nav ieviests](topic:not-built-yet). Iepriekšējās izmaiņas ir 0.8 un 0.8.1 piezīmēs šīs lapas tālāk.

## Iepriekš: 0.8 un 0.8.1

Šis ir tas, kas mainījās BimCraft 0.8 (2026-11-01) un 0.8.1 (2026-11-02) versijās, salīdzinot ar 0.7. BimCraft tagad var atbildēt uz jautājumiem par ēku un to pārbaudīt ar cilvēkiem, skaņu, ūdeni, vēju un zemestrīcēm, un zīmēt to ar vairāk rīkiem; 0.8.1 ir labojumu laidiens.

### Jauns

**Ēkas pārbaude**

- **Cilvēki ēkā.** Kreisā paneļa sadaļa {{ui:Cilvēki ēkā}} izved evakuāciju vai parasto dienas ierašanos caur jūsu telpām, durvīm un kāpnēm. Redzat rindas vietās, kur ēka sašaurinās, garāko ceļu uz izeju no katras telpas un to, cik ilgi pēdējam cilvēkam aizņem. Atzīmējiet {{ui:Slēgts}} uz durvīm, lai redzētu, kas mainās, un atzīmējiet {{ui:Rādīt cilvēkus 3D skatā}}, lai vērotu gājējus. Atradumi nonāk Problēmās. Tas ir rupjš pūļa modelis projektēšanas lēmumiem, nevis ugunsdrošības sertifikāts. Skatiet [Gājēju pārvietošana caur ēku](topic:people-in-the-building).
- **Telpu akustika un klausīšanās.** Sadaļa {{ui:Telpu akustika}} dod katras telpas reverberācijas laiku pa oktāvu joslām (Sabine un Eyring) no tās izmēra un jūsu izvēlētās apdares, un ar jūsu pašu mērķi parāda, cik daudz absorbcijas būtu nepieciešams, lai to sasniegtu. {{ui:Atskaņot šajā telpā}} atskaņo balsi, plaukšķi, noplūktas nots vai jūsu pašu skaņas failu caur telpai aprēķinātu impulsa atbildi. Absorbcijas skaitļi ir tipiskas publicētas vērtības, ko jūs varat aizstāt. Skatiet [Telpu akustika](topic:room-acoustics).
- **Plūdi, vējš un zemestrīce atskaņojumā.** {{ui:Apdraudējuma atskaņošana}} atskaņo ūdeni, kas paceļas pa telpām, vēja spiedienu uz katra stāva un zemestrīci, kas krata stāvus, plānā vai fasādē ar laika slīdni. Vienkāršoti modeļi ar to pieņēmumiem panelī; nav koda pārbaude. Skatiet [Atskaņot plūdus, vēju vai zemestrīci](topic:hazard-playback).
- **Kas nolietojas piecdesmit gadu laikā.** {{ui:Dzīves cikla skats}} uzskaita logus, durvis, apdari un jumtu ar katra kalpošanas laiku, gadus, kad tie tiek nomainīti, un, ja ievadāt izmaksas par vienību, izmaksas pa gadiem un to tagadnes vērtību. {{ui:Saglabāt grafiku (CSV)}} to ieraksta. Kalpošanas laiki ir plānošanas skaitļi. Skatiet [Redzēt, kas nolietojas piecdesmit gadu laikā](topic:life-cycle-view).
- **Betona un seismiskās pārbaudes.** Blokos {{ui:Betona elementi}} un {{ui:Seismiskās slodzes}} cilnē {{ui:Aprēķins}} pārbauda betona sijas un kolonnas pēc ACI 318-19 un veido ekvivalentos horizontālos spēkus pēc ASCE 7-22 stingrām grīdām, ar stāvu nobīdi. Inženierim pārbaudei. Skatiet [Betona elementu pārbaude un seismiskās slodzes](topic:concrete-and-seismic).

**Pārbaude un atskaites**

- **Pārbaude pret IDS.** Ielādējiet `.ids` failu, ko jums iedeva klients, un pirms IFC piegādes redziet katru elementu, kas tam neatbilst, sadaļā Problēmas. Atveriet {{ui:Pārbaudīt pret IDS}} zem {{ui:Modeļa pārbaudes}}. Skatiet [Modeļa pārbaude pret klienta IDS](topic:check-against-ids).
- **Birkas un specifikācijas.** Definējiet savas birkas, piešķiriet tās daudziem elementiem vienlaikus un veidojiet specifikācijas, kuru kolonnas, filtri un grupas tās nolasa; birkas tiek saglabātas IFC. Skatiet [Birkas un specifikācijas](topic:tags-and-schedules).
- **Dokumenti no modeļa.** {{ui:Dokumenti no modeļa}} aizpilda specifikāciju veidni no atvērtā IFC un saglabā to kā PDF, Word dokumentu vai Markdown. Skatiet [Dokumenti no modeļa](topic:documents-from-the-model).
- **Skenējuma salīdzināšana ar modeli.** Ar atvērtu punktu mākoni {{ui:Salīdzināt}} vērtē katru elementu kā uzbūvētu, daļēji uzbūvētu, trūkstošu vai nesasniegtu, un parāda uzbūvēto procentu. Skatiet [Skenējuma salīdzināšana ar modeli](topic:compare-scan-with-model).
- **Oglekļa un izmaksas.** Oglekļa panelis summē iemiesoto oglekli no faktoru tabulas, ko varat rediģēt, un Izmaksu panelis sadala cenas pa 4D grafiku. Faktori, kas nāk kopā ar BimCraft, ir vispārīgi un atzīmēti kā nepārbaudīti. Skatiet [Iemiesotais ogleklis un izmaksas](topic:embodied-carbon-and-5d-cost).
- **Jebkura kartes projekcija.** {{ui:Mērīt}} › {{ui:Koordinātu sistēma…}} pieņem EPSG numuru, UTM zonu, nosaukumu vai jūsu pašu projekcijas definīciju. Skatiet [Georeferencēšana ar jebkuru projekciju](topic:georeference-any-projection).

**Zīmēšana un rediģēšana**

- **Pārvietot, Izlīdzināt un Sadalīt.** Zem {{ui:Būvējums}}; {{key:Shift+M}} sāk Pārvietošanu (vienkārši {{key:M}} joprojām ir Mērīt). Pārvietošana kopē ejot ar {{key:C}}, katrs solis ir viens atsaukums, un tā tiek pārsūtīta Live TeamWork sesijā. Skatiet [Pārvietot, kopēt, izlīdzināt un sadalīt](topic:move-align-distribute).
- **Attēli zem plāna.** {{ui:Būvējums}} › {{ui:Attēls}} novieto PNG, JPEG vai WebP zem līmeņa plāna vai vertikālā plaknē. Mērogu iestatiet ar diviem punktiem un pārvietojiet, pagrieziet, izbalinājiet un bloķējiet to. Apgabals, kas nokopēts MarkupCraft, tiek ielīmēts savā lapas mērogā. Skatiet [Novietot attēlu zem plāna](topic:pictures-as-backgrounds).
- **Sienas no skenējuma.** Ar atvērtu skenējumu sienas, durvis un telpas nāk kā priekšlikumi, ko paturat vai noraidāt pa vienam, vienā atsaukšanas solī. Atrod tikai sienas divos perpendikulāros virzienos. Skatiet [Skenējuma pārvēršana sienās](topic:scan-to-walls).
- **Pārzīmēšana, pildspalvas un skicēšanas kāpnes.** {{ui:Pārzīmēt}} rāda citu līmeni punktētu zem plāna, {{ui:Pildspalvas}} dod sienām, durvīm un logiem savu līnijas biezumu vienā skatā, un {{ui:Skicēt kāpnes}} pārvērš gājiena līniju kāpnēs. Atveras Wavefront OBJ tīkls. Skatiet [Pārzīmēt stāvu, pildspalvas un kāpnes no skices](topic:trace-pens-stairs-obj).
- **Ēkas ap adresi.** Ēkas un parcela, ko atrada CivilCraft Address to site, nāk kā ieteikumi; atzīmējiet tos, ko pievienot. Skatiet [Sākt no CivilCraft vietas](topic:site-from-civilcraft).
- **Paneļu rasējumi.** {{ui:Būvējums}} › {{ui:Paneļu rasējumi}} ietver sienas, grīdas un jumtus koka vai vieglā tērauda rāmī un saglabā griezuma sarakstu kā CSV un darbnīcas rasējumus kā PDF. Sākuma vērtības, nevis konstrukcijas projekts. Skatiet [Paneļu rasējumi](topic:panel-drawings).
- **Simbolu paleta un augi.** {{ui:Būvējums}} › {{ui:Simbolu paleta}} atrod elektrības un santehnikas simbolus pēc nosaukuma; avots {{ui:Augi}} sadaļā {{ui:Bibliotēka}} uzskaita apmēram 400 augus ar plāna simboliem. Skatiet [Simbolu paleta](topic:symbol-palette) un [Novietot augu](topic:plant-list).

**Caurules, gaisa vadi un enerģija**

- **Split, VRF un fankoili.** Iekšējās un ārējās vienības ar to savienojumiem un šķidruma līnijām, kas izmērītas pēc tipisku piemēru tabulas, ko varat mainīt. Skatiet [Split, VRF un fankoili](topic:split-vrf-fan-coils).
- **Aprēķini.** Aprēķinu panelis pārbauda padeves cauruļu un gaisa vadu izmērus ar spiediena kritumu, vada kabeļus caur trasēm un kanāliem un parāda to aizpildījumu, un aprēķina apgaismojumu no IES vai EULUMDAT failiem. Noklusējumi ir apzīmēti; ierakstiet savu normatīvu vērtības. Skatiet [Cauruļu, gaisa vadu, kabeļu un gaismas aprēķini](topic:mep-calculations).
- **PCF faili.** Cauruļvada rīka **Export PCF** raksta trases cauruļu sprieguma un izometrisko programmu vajadzībām, un PCF fails, kas nolasīts atpakaļ, zīmē savu cauruli. Skatiet [Cauruļvadu komponentu faili](topic:piping-pcf).
- **Saules PV.** Uzstādiet masīvus uz jumtiem vai zemes, nosedziet tos no modeļa, novērtējiet gada enerģiju, pārbaudiet virknes un izveidojiet vienlīnijas shēmas datus. Sākuma modulis un zudumi ir vispārīgi. Skatiet [Saules PV](topic:solar-pv).
- **EnergyPlus fails.** Panelis Check with EnergyPlus raksta modeli kā IDF, lai to palaistu jūsu pašu EnergyPlus. Palaišana pārlūkprogrammā prasa jūsu pašu uzņemtu versiju un adresi, ko ierakstāt; BimCraft to nenes līdzi. Skatiet [Apkures un dzesēšanas pārbaude ar EnergyPlus](topic:check-with-energyplus).

**Attēli un faili**

- **Izvēlieties renderēšanas dzinēju.** {{ui:Renderēt}} ir izvēle {{ui:Dzinējs}}. Mūsu divi iebūvētie dzinēji (Fast un Path tracer) paliek noklusējums. **Atvērt** saglabā ainu kā USD vai glTF failu, un Unreal projekta mapi kā .zip; Studio lietotnē papildinājums var pievienot dzinēju. Unreal spraudnis, kas atver projektu, nav izlaists. Skatiet [Izvēlieties, kura programma zīmē attēlu](topic:render-engines).
- **Studio atsaukšana.** CadCraft Studio iekšienē BimCraft paziņo Studio katru pabeigtu soli, lai Studio varētu atsaukt jūsu pēdējo soli logā, ko izmantojāt pēdējo reizi. Skatiet [Atsaukšana starp lietotnēm](topic:undo-across-apps).
- **Papildinājumi jūsu failā.** IFC ieraksta, kuri papildinājumi tajā rakstīja, un piedāvā tos, kas jums trūkst, kad to atverat. Skatiet [Papildinājumi jūsu failā](topic:add-ons-in-your-file).

**Visās lietotnēs**

- **Savienojiet savu MI.** Jūsu pašu asistents var vadīt BimCraft caur Studio savienojumu un atbildēt uz jautājumiem par modeli, piemēram, kuras telpas atrodas zem noteiktas platības. Studio pats nav MI. Skatiet [Ļaut MI asistentam strādāt ar jūsu modeli](topic:assistants).
- **Rīkjoslas rindas.** {{ui:Iestatījumi}} › {{ui:Vispārīgi}} › {{ui:Rīkjoslas rindas}} piedāvā Wrap, 2 rindas vai 1 rindu; Wrap paliek noklusējums.
- **Ievades ierīces.** Skārienpaliktņa, pildspalvas, 3D peles, kontrollera un MIDI iestatījumi ir kopīgi visām lietotnēm.
- **Problēmas un Live.** Brīdinājumu panelis un Live sesijas darbojas kā iepriekš, un jaunās pārbaudes, kas minētas iepriekš, tiek padotas uz Problēmām.
- **Valodas.** 54 valodas, desmit no tām jaunas. Tās, kas nav angļu, ir mašīntulkojumi, ko vēl nav pārlasījis dzimtais runātājs; palīdzības temati lielākoties ir angļu valodā.

### Labots 0.8.1

- **Lentes un Projektu pārlūka izkārtojums.** Insert › Import CAD, Insert › Image un Manage › Project Units rakstīja "Not built in BimCraft yet". Image tagad atver Attēla rīku, Import CAD atver {{ui:Būvējums}} › {{ui:No rasējuma…}} (DWG, DXF, PDF vai skenējums), un Project Units atver {{ui:Iestatījumi}} › {{ui:Visur}} › {{ui:Mērvienības}}. Move un Align palaiž Pārvietošanas un Izlīdzināšanas rīkus, Level atver {{ui:Pievienot līmeņus…}}, Phases atver sadaļu Renovācijas fāzes, un Materials atver materiālu bibliotēku.
- **DWG klašu sadaļa.** Tā tika nolasīta kā nepareizs tips; labots BimCraft un citās lietotnēs, kas lasa DWG.
- **Valoda darbības laikā.** Studio un iepakotie izdevumi tagad var mainīt valodu bez restartēšanas. Tas vēl nav pārbaudīts uz visām platformām; paziņojiet, ja valoda nemainās.
- **Archicad pakotnes skripts.** `archicad_bundle.py`, atsevišķs lejupielādējums, tagad atrod Archicad ceļu, 20 sekundes vēro mapi un mēģina vēlreiz blakus pakotnei.

### Vēl nav šajā versijā

- **Drošības un projektēšanas palīglīdzekļi.** Cilvēki ēkā nav ēkas kodeksa ceļa garuma ierobežojuma (ierakstāt ierobežojumu jūs) un nav manuāli pārbaudīts uz reāla plāna. Akustikas, dzīves cikla un apdraudējuma skaitļi ir plānošanas vērtības, nevis koda pārbaude.
- **Klimata scenāriji un EnergyPlus.** Nav iebūvētu klimata scenāriju: plūdu aprēķinam varat ielādēt scenārija failu. EnergyPlus palaišana pārlūkprogrammā nav šajā laidienā.
- **Lentes izkārtojums.** Material Takeoff paliek "Not built", jo BimCraft nav materiālu daudzumu saraksta, un 54 citi pelēkie lentes rīki vēl nav BimCraft rīku.
- **Parakstīšana un platformas.** Windows instalētāji un macOS .dmg nav parakstīti, tāpēc SmartScreen rāda {{ui:Papildu informācija}}, tad {{ui:Palaist tomēr}}, un macOS vajag ar peles labo pogu noklikšķināt, tad {{ui:Atvērta}}. iPad un iPhone būve netika pārbūvēta 0.8.1 versijai.
- **Reālās lapas testi.** Daži vecāki BimCraft pārlūkprogrammas testi joprojām neizdodas mūsu testa lapā, kā tie neizdevās pirms 0.8.1.

Viss pārējais ir [Kas vēl nav ieviests](topic:not-built-yet). Iepriekšējās izmaiņas ir [Jaunumi 0.7](topic:whats-new-0-7).
