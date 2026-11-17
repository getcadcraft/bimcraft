---
title: Jaunumi 0.7 (agrāk)
summary: BimCraft pievieno sienas vairākiem stāviem un Kopēt šo līmeni, sienas no PDF un skenējumiem, jūsu pašu sienu konstrukcijas, bagātākas saimes, MEP aprīkojumu ar portiem, sadursmju kopas, atveres un cauruļu spolas, dokumentus pa aktīviem, COBie un sensoru rādījumus, debesis, sauli, dienasgaismu režģī un apkures un dzesēšanas slodzes, skenu reģistrāciju, tiešraides skatu un ceļa izsekošanu grafikas kartē, STEP un USD, bibliotēkas variantus un vēl vairāk MI asistentiem.
keywords: jaunumi 0.7, agrāks laidiens, izlaiduma piezīmes, izmaiņu žurnāls, izmaiņas, 0.7, versija, jaunas funkcijas, sienas caur stāviem, kopēt šo līmeni, pdf, skenējums, pārzīmēt, sienas no plāniem, sienu konstrukcijas, slāņi, serde, membrāna, atsauces izmēri, materiālu bibliotēka, rādīšanas vienības, skata stils, karkass, sijas, saimes, parametri, plāna simbols, karstie punkti, atkārtot, detalizācijas līmenis, ligzdotas saimes, CSV izmēri, pa elementam, aprīkojums, ports, savienojumi, attālumi, atveres, spolas, spolu lapas, montāžas metinājums, gaisa vadu griešanas saraksts, dokumenti, cobie, sensori, mqtt, tiešraides plūsma, vertikālais debesu komponents, saules siltuma ieguve, dienasgaismas režģis, apkure, dzesēšana, slodzes, u-vērtība, reģistrēt skenējumus, icp, e57, tiešraides skats, ceļa izsekošana, webgpu, trokšņu samazināšana, fiziskās debesis, gaismu sajaukšana, renderēšanas rinda, jūsu dators, step, usd, projekta paka, izstrādāt masu, variants, asistenti, papildinājumu API, augs, elektrība, projektēšanas pārbaudes
from: ef226539
---

Šis ir tas, kas mainījās BimCraft 0.7 salīdzinājumā ar 0.6. Saraksts ir sagrupēts pēc jomām, vispirms svarīgākais.

## Jaunais

### Ēkas zīmēšana

- **Sienas caur vairākiem stāviem.** {{ui:Siena}} rīka augstuma saraksts piedāvā **Līdz** jebkuram augstāk esošam līmenim, tāpat kā Rekvizīti izvēlētai sienai. Plāni starp tiem rāda sienu vieglāk, telpas tur noslēdzas pret to, un durvis un logi var tikt ievietoti tajā no šiem plāniem; **Iet cauri** Rekvizītos nosauc līmeņus, cauri kuriem tā iet. Sk. [Mainīt sienu, durvis vai logu](topic:change-a-wall-or-door#change-a-wall).
- **Kopēt šo līmeni.** {{ui:Kopēt šo līmeni…}} Līmeņu panelī no jauna uzzīmē līmeņa sienas ar to durvīm un logiem, tā grīdas un griestus citā līmenī vai jaunā virs tā vienā atsaukšanas solī; telpas parādās pašas. Sk. [Zīmēt sienas](topic:draw-walls#levels).
- **Sienas no PDF vai skenējuma.** {{ui:Būvējums}} › {{ui:No rasējuma…}} tagad pieņem PDF (līniju darbu vai skenējumu tajā) vai skenētu plānu (PNG, JPEG, TIFF, daudzas lapas): katra lapa kļūst par sienām, durvīm, logiem un telpām vienā stāvā, ar lapu, kas paliek zem sava plāna. Pārzīmēšana neizmanto tīklu un nav apmācīta modeļa, un rezultāts ir tāds, ko dod līnijas: pārbaudiet katru stāvu pret tā lapu. Sk. [Sienas no plānu komplekta](topic:walls-from-plans).
- **Jūsu pašu sienu konstrukcijas.** {{ui:Sienu konstrukcijas…}} veido sienas tipu slāni pa slānim ar serdi, gaisa spraugiem un membrānām, un ar izmēru priekšskatījumu; {{ui:Materiālu bibliotēka…}} glabā projekta materiālus IFC; {{ui:Anotēt}} › {{ui:Atskaites izmērs}} mēra līdz virsmām un serdes līnijām un seko sienām, kad tās mainās. No kopienas līdzstrādnieka Doc (drsurfbum). Sk. [Sienu konstrukcijas un atsauces izmēri](topic:wall-assemblies).
- **Rādīšanas vienības un skata vadība.** {{ui:Mērvienības}} rīkjoslā rāda garumus pēdās un collās, collās, decimālpēdās, milimetros, centimetros vai metros: izmēros, specifikācijās, koordinātēs, mērījumos un griezumos. {{ui:Plāns}}, {{ui:Sadalīt}} un {{ui:3D}} atrodas rīkjoslā, sadalījumu var pavilkt (vai pārvietot ar tastatūru), {{ui:Ar ēnojumu}}, {{ui:Malas}} un {{ui:Karkass}} atrodas blakus skata kubam, un jumta slīpums, apšuve un pārkars uzreiz maina izvēlēto jumtu. No kopienas līdzstrādnieka Joel (yisraelk). Sk. [Zīmēt sienas](topic:draw-walls#levels).
- **Stāvu karkass pēc spriedzes.** {{ui:Karkass}} var izkārtot inženierijas sijas (preliminārs), kā arī zāģētu koksni, izvēloties mazāko uzskaitīto sēriju un augstumu, kas sasniedz spriedzi, 16" vai 24" centrā, jebkurā virzienā; tās nonāk IFC un griešanas sarakstā. Ieteikums no ražotāja publicētas tabulas, nevis inženiertehnisks aprēķins. Arī no Joel. Sk. [Karkass sienām, grīdām un jumtiem](topic:framing).
- **Vairāk elektroierīču.** {{ui:Elektriskais}} pievieno datu, telefona un audio-video rozetes, selektora slēdzi, taimeri, termostatu, dūmu un karstuma detektorus, ugunsalarma izsaukšanas punktu un sirēnu, ventilatoru, enerģijas skaitītāju un apakšsadales paneli, katru ar savu IFC klasi. Sk. [Elektriskais plāns](topic:electrical-plan).

### Saimes

- **Saimes dara vairāk.** Parametri var būt veseli skaitļi, teksts, materiāls, pildspalva vai aizpildījums; saime var zīmēt savu plāna simbolu, atkārtot cietķermeni, atzīmēt daļas zemākām detalizācijas pakāpēm, turēt citas saimes (kāju galdā) un turēt karstos punktus, ko velkat, arī novietotā elementā plānā. Izmēri nāk no CSV tabulas, un parametri, kas atzīmēti kā **Pa elementam**, ļauj divām vienāda izmēra durvīm atšķirties. Sk. [Rediģēt saimi](topic:family-editor#plan-symbol) un [Saimes un to izmēri](topic:families#sizes-from-a-table).

### Caurules, gaisa vadi un aprīkojums

- **Aprīkojums ar portiem.** {{ui:Būvējums}} › {{ui:Aprīkojums}} novieto vispārīgu gaisa apstrādes iekārtu, iekšlīnijas ventilatoru, sūkni, katlu, ūdens sildītāju, galveno vienību, difuzoru, režģi vai tvertni, izmērītu pēc jūsu ievadītajām vērtībām, ar caurules un gaisa vada savienojumiem kā portiem. Katrs saglabājas kā sava IFC klase ar IFC portiem. Sk. [MEP aprīkojums ar portiem](topic:mep-equipment).
- **Savienotas trases.** Caurule vai gaisa vads, kas sākas no porta, paņem savu izmēru un sistēmu un paliek piestiprināts pie tā: pārvietojiet sūkni, un tā caurule seko. {{ui:Pārbaudīt savienojumus}} uzskaita atvērtos portus, brīvos galus, izmēra un sistēmas neatbilstības un trases, ko nekas neapgādā. Sk. [Savienot caurules un gaisa vadus ar aprīkojumu](topic:mep-connections).
- **Caurules un gaisa vadi pret konstrukciju.** {{ui:Sadursmju pārbaude}} ietver gatavas kopas un {{ui:Caurules un gaisa vadi × konstrukcija}} vienā klikšķī; {{ui:Pārbaudīt attālumus}} izmanto katras trases izolāciju plus spraugu, ko ierakstāt; {{ui:Nepieciešamās atveres}} uzskaita vietas, kur trases iet cauri sienām un pārsegumiem, kā CSV un BCF problēmas. Nekas netiek griezts. Sk. [Pārbaudīt caurules un gaisa vadus pret konstrukciju](topic:mep-against-structure).
- **Tērauda cauruļu spolas.** Tērauda trase tiek sagriezta numurētās spolās pēc garākā garuma un pie {{ui:Montāžas metinājums}}, kurus jūs novietojat; {{ui:Spoļu lapas (PDF)}} dod lapu katrai spolai ar tās izometrisko skatu, griezuma garumiem, fitingiem, metinājumiem un materiālu sarakstu, un {{ui:Gaisa vadu griešanas saraksts}} uzskaita taisnus gaisa vada gabalus. Sk. [Tērauda cauruļu spolas un spoļu lapas](topic:pipe-spools).

Tie ir projektēšanas un koordinācijas palīglīdzekļi, izmērīti inženieru: bez plūsmām, spiedieniem un balansēšanas.

### Ēkas ekspluatācija

- **Dokumenti pa aktīviem.** Cilne {{ui:Resursi}} saista rokasgrāmatas, garantijas, fotogrāfijas un rasējumus ar aktīvu pēc failu nosaukuma blakus IFC vai tīmekļa adreses; IFC tiek ierakstīta tikai saite. Sk. [Dokumenti](topic:assets-and-maintenance#documents).
- **COBie izklājlapa.** {{ui:Saglabāt kā COBie (.xlsx)}} raksta COBie 2.4 nodošanas darba grāmatu, un COBie darba grāmata, kas nolasīta atpakaļ, uzskaita katru izmaiņu pirms viena {{ui:Lietot}}. Tā vēl nav izgājusi COBie validatoru. Sk. [COBie izklājlapa](topic:assets-and-maintenance#cobie-spreadsheet).
- **Sensoru rādījumi un tiešraides plūsmas.** Atveriet CSV ar rādījumiem vai {{ui:Savienot}} tieši no pārlūka ar savu MQTT brokeri vai adresi, uz kuru atbild jūsu ēkas sistēma: katrs aktīvs rāda savu pēdējo rādījumu un diagrammu, tiek iekrāsots modelī un atzīmēts, ja ir ārpus IFC saglabātajām robežām. Rādījumi paliek cilnē; paroles nekad netiek saglabātas. Sk. [Sensoru rādījumi](topic:assets-and-maintenance#sensor-readings) un [Tiešraides rādījumi](topic:assets-and-maintenance#live-readings).

### Dienasgaisma un enerģija

- **Debesis un saule pie katra loga.** {{ui:Dienasgaisma}} cilne dod katram logam tā vertikālo debesu komponentu un aizsegšanas leņķi, seko saulei caur datumu ar {{ui:Saule caur logiem noteiktā datumā}} un aprēķina {{ui:Dienasgaismas koeficients režģī}} katrā telpā, zīmētu tās plānā. Sk. [Katra loga vertikālais debesu komponents](topic:daylight-factor#vertical-sky-component-of-each-window).
- **Apkures un dzesēšanas slodzes.** {{ui:Heating and cooling loads}} aprēķina katras telpas siltuma zudumu, tās apkuri gadā no dienu grādiem un tās dzesēšanas maksimumu no tā, kas to ierobežo modelī, un katra elementa U-vērtības; ierakstītā U-vērtība tiek ierakstīta IFC. Sk. [Apkures un dzesēšanas slodžu aplēse](topic:heating-and-cooling-loads).

Abi ir projektēšanas palīglīdzekļi pēc publicētām metodēm, nevis atbilstības aprēķini, un katrs panelis to saka.

### Skenējumi

- **Vairāku skenējumu reģistrācija.** {{ui:Reģistrēt skenējumus…}} (sākuma panelī vai {{ui:Rādīt}}) novieto skenējumus vienā rāmī pēc izvēlētiem punktu pāriem vai ierakstītiem mērķiem, precizē tos ar ICP no punkta uz punktu un tad no punkta uz plakni, saglabā reģistrāciju kā nelielu projekta failu un raksta reģistrēto mākoni kā vienu LAS vai E57 failu. Sk. [Reģistrēt vairākus skenējumus vienā](topic:register-scans).

### Attēli un tiešraides skats

- **Tiešraides skats.** {{ui:Tiešraide}} rīkjoslā rāda modeli reāllaika izskatā blakus 3D skatam, sekojot tam un katrai izmaiņai, ar staigāšanu, dienas laiku un mēnesi; {{ui:Tiešraide jaunā logā}} to novieto uz otra ekrāna. Sk. [Tiešraides skats](topic:live-view).
- **Ceļa izsekošana grafikas kartē.** Ar WebGPU {{ui:Renderēt}} › {{ui:Augsta kvalitāte (ceļa izsekošana)}} izmanto CadCraft savu ceļa izsekotāju uz grafikas kartes, var apturēt un {{ui:Turpināt}}, un beigās tiek samazināts troksnis; bez WebGPU tas izmanto WebGL ceļa izsekotāju kā agrāk. Sk. [Augsta kvalitāte](topic:render#high-quality).
- **Vairāk renderēšanas logā** (uz grafikas kartes, tāpēc nepieciešams WebGPU): fiziskas debesis un debesu attēli, IES gaismas profili, kamera ar f-numuru, lauka dziļumu, divpunktu perspektīvu, baltā balansu un 360° panorāmas, gala attēla gradācija, gaismu sajaukšana un renderēšanas elementi pēc renderēšanas, migla, dūmi un kaustika, saglabāšana kā 16 bitu PNG, EXR vai renderēšanas fails, un renderēšanas rinda. Sk. [Debesis un gaismas profili uz grafikas kartes](topic:render#skies-and-light-profiles-on-the-graphics-card) un [Renderēšanas rinda](topic:render#the-render-queue).
- **Jūsu dators.** {{ui:Iestatījumi}} › {{ui:BimCraft}} › {{ui:Renderēšana}} › {{ui:Jūsu dators}} rāda grafiku, procesora kodolus un atmiņu, ko šis pārlūks ļauj lietotnei izmantot, un līmeni, no kura sākas renderēšana. Sk. [Ar ko jūsu dators renderē](topic:your-machine).

### Faili un citas lietotnes

- **STEP failu atvēršana.** `.step` vai `.stp` detaļa, aprīkojuma gabals vai piegādātāja modelis (AP203, AP214, AP242) atveras kā mazs IFC modelis, katrs cietķermenis ir elements, ko var pārbaudīt, griezt, mērīt un saglabāt kā IFC. Krāsas un montāžas detaļu nosaukumi vēl netiek nolasīti. Sk. [Faili, ko BimCraft atver un saglabā](topic:files#what-it-opens).
- **USD eksports.** {{ui:USD}} rīkjoslā raksta atvērtos modeļus kā `.usda`, `.usdc` vai `.usdz`, izkārtotus pēc teritorijas, ēkas, stāva un disciplīnas, ar katra elementa IFC klasi, GlobalId un rekvizītiem. Sk. [Eksportēt modeli kā USD](topic:usd).
- **Masa no CivilCraft.** Ēkas masa, kas nosūtīta no CivilCraft vietas skata, rāda savus pētījuma skaitļus Rekvizītos, un {{ui:Izstrādāt šo masu}} izveido sienas katrā līmenī un grīdu no tās vienā atsaukšanas solī. Sk. [Izstrādāt ēkas masu no vietas pētījuma](topic:develop-a-mass).
- **Bibliotēkas vienumi ar variantiem.** Vienumam, kas ir vairākos variantos, {{ui:Bibliotēka}} cilnē ir {{ui:Variants}} izvēle; novietotais elements saglabā savu variantu IFC, {{ui:Aizstāt vienumu…}} uzskaita pārējos variantus, un kopijas un atjauninājumi to saglabā. Sk. [Novietot un aizstāt bibliotēkas vienumu, kuram ir varianti](topic:library-variants).
- **Projektu paketes mapē.** {{ui:Atvērt mapi}} uzskaita `.ccbundle.zip` failus zem {{ui:Projekta paketes}}, un katram izkārtojumam paketē ir **Atvērt ...**: PDF uz MarkupCraft, DWG uz CadCraft, jaunā cilnē. Sk. [Atvērt izkārtojumu](topic:open-project-bundle#open-a-layout).

### Asistenti un papildinājumi

- **Vairāk MI asistentiem.** Asistents tagad var pārdēvēt elementus un iestatīt rekvizītu vērtības, pārvietot un dzēst elementus, mainīt sienas, durvis un logus, eksportēt USD un renderēt attēlu vai palaist renderēšanas rindu; katra izmaiņa ir viens atsaukšanas solis. Sk. [Ļaujiet MI asistentam strādāt ar jūsu modeli](topic:assistants).
- **Papildinājumi var veidot modelī.** Papildinājumu API 1.1 ļauj papildinājumam veikt izmaiņu modelī kā vienu atsaukšanas soli (tā ceļo Live TeamWork), lasīt modeli un lasīt cauruļu un gaisa vadu trases, portus, aprīkojumu un spolas.
- **Augu papildinājums** (izslēgts, kamēr to neieslēdzat {{ui:Iestatījumi}} › {{ui:Vispārīgi}} › {{ui:Papildinājumi}}): cauruļu specifikācijas pārbaudītas pret trasēm, trases izometriskie zīmējumi kā SVG un DXF ar materiālu sarakstu, vispārīgs procesa aprīkojums ar pieslēgumiem, kas novietots modelī, maršrutētājs starp diviem portiem un rūpnīcas izkārtojuma pārbaude. Projektēšanas palīglīdzeklis, nevis inženiertehnisks apstiprinājums; tā teksts ir tikai angļu valodā.

## Mainīts

- **Pirmā māja klēpjdatorā.** Klēpjdatora izmēra ekrānā BimCraft sākas tikai ar plānu, zīmēšanas josla ir šaurs panelis ar plānu blakus, plāns un 3D skats atgriežas redzamībā, kad zīmējums tos atstāj, 3D skats ietver visu māju šaurā rūtī, un durvis un logi tiek izvēlēti pirms izmēru līnijām.
- **Attēla saglabāšana.** **Saglabāt PNG** renderēšanas logā tagad ir {{ui:Saglabāt}}, un blakus tam {{ui:Saglabāt kā}} citiem formātiem. Sk. [Saglabāt attēlu](topic:render#save-the-picture).
- **Analīzes cilnei** ir {{ui:Projektēšanas pārbaudes}} bloks: tas veido ASCE 7 vai EN 1990 slodzes kombinācijas jūsu gadījumiem un pārbauda katru valcētu I-profilu (W, S, IPE, HEA vai HEB izmēru pēc tā profila nosaukuma un izmēra) pēc AISC 360 vai EN 1993-1-1, rādot, cik daudz no tā kapacitātes tas izmanto. Palīglīdzeklis, līdz inženieris to ir pārskatījis; metinātas formas un citas sekcijas saka "nav pārbaudīts". Sk. [Projektēšanas pārbaudes](topic:frame-analysis#design-checks).

## Labots

- Atkārtot pēc soļa, kas izveidoja jaunu saimes izmēru, neizdevās ("nav izmēra"). Katrs solis tagad atkārtoti veido tos pašus IFC GlobalId atkārtojot, tāpēc atkārtošana darbojas saimēm un visām pārējām izmaiņām.
- Kad divi cilvēki saglabāja to pašu saimi (Live TeamWork sesijā vai divos logos), otrais saglabājums klusi aizstāja pirmā izmaiņu. Tagad tas noraida un saka, kā redzēt viņa izmaiņu un veikt savu atkal.
- Modelis US pārbaudes pēdās tika nolasīts kā 0.3048 m uz pēdu, nevis 0.3048006096 m, kas pārvietoja katru georeferencētu IFC US pēdās kartē.
- Saimes redaktors: aizverot to, fokuss vairs nenokrīt uz lapu, tā Saglabāt paliek redzama tālrunī, un tā lauki vairs neliek tālrunim tuvināt.

## Visās lietotnēs

- **Mērvienības.** {{ui:Iestatījumi}} › {{ui:Vispārīgi}} › {{ui:Mērvienības}} ir pa vienam sarakstam garumam, laukumam, tilpumam, leņķim un slīpumam, ar precīzām izmēra vērtībām, kādas dod mērvienību definīcijas (US pārbaudes pēda ir sava mērvienība). Izslēdziet mērvienības, ko nekad nelietojat, un tās izies no sarakstiem; atzīmējiet vienu ar zvaigznīti, un jaunais darbs sākas tajā. Fails vienmēr saglabā savu mērvienību. BimCraft {{ui:Mērvienības}} saraksts rīkjoslā seko slēdžiem, zvaigznīte iestata attēlošanas mērvienības, līdz tās izvēlaties rīkjoslā (jūsu iepriekšējā izvēle tiek saglabāta), un zīmēšanas rīku garuma lodziņi pieņem jebkuras mērvienības apzīmējumu, piemēram, `3.5 m` vai `10 US ft`. Sk. [Mērvienības, ierakstītas vērtības un mērvienību saraksti](common:unit-lists).
- **Blīvāks izkārtojums un paneļi, kas paslēpjas.** {{ui:Iestatījumi}} › {{ui:Vispārīgi}} › {{ui:Izkārtojuma blīvums}} › {{ui:Kompakts}} ietilpina vairāk ekrānā (skārienekrāni un tālruņi saglabā lielās pogas). Katram sānu panelim ir šaura virsraksta josla: velciet to, lai piestiprinātu vai atbrīvotu paneli, nometiet to uz cita paneļa joslas, lai dalītu vienu rāmi kā cilnes, piespraudiet to, lai tas paslīdētu uz malu, vai paslēpiet to un atgrieziet no malas. Sk. [Sakārtot paneļus](common:arrange-panels#make-the-layout-denser).
- **Dialogi pārvietojas.** Velciet dialogu aiz tā virsraksta joslas prom no zīmējuma; tas atgriežas tur, kur to atstājāt. Divreiz noklikšķiniet uz virsraksta joslas, lai to atkal centrētu. Sk. [Pārvietot dialogu](common:arrange-panels#move-a-dialog).
- **Receptes MI asistentiem.** Desmit gatavi pieprasījumi jūsu asistentam (sakārtot zīmējumu, nodrukāt kopu, pārbaudīt zīmējumus, uzdot jautājumus par modeli, saskaitīt tāmi, izmēģināt detaļas variantu…), katrs ar rīkiem, ko tas izsauc, un atļaujām, ko tam vajag, un katrs atkārtots mūsu testos. Lietotnēs nav MI. Sk. [Receptes MI asistentiem](common:assistants-recipes).
- **Valodas.** **Português (Portugal)** ir jauns {{ui:Iestatījumi}} › {{ui:Vispārīgi}} › {{ui:Valoda}} sarakstā. Tā, **Português (Brasil)**, **Español (México)** un **Bahasa Indonesia** tagad ir visi lietotņu vārdi, kā melnraksti, ko dzimtā valoda vēl nav pārskatījusi. Palīdzības tēmas ir angļu valodā, dažas ir spāņu valodā.
- **CadCraft Studio** saka, kāpēc atjauninājuma pārbaude neizdevās (vēl nav faila jūsu sistēmai, nav tīkla, slikts paraksts), nevis tikai "Gatavs", un pārstāj atgriezt Jaunumu kartīti, ko aizvērāt, kamēr nav jaunāka izlaiduma.

## Vēl nav šajā versijā

- **0.7 nav koda parakstīts.** Parakstīšana un Microsoft Store pakete tika pārcelta uz 0.8, jo sertifikāta pārbaude vēl nav pabeigta. Pārbaudiet SHA-256 blakus katram failam vietnē getcadcraft.com/download. Operētājsistēmā Windows, ja SmartScreen aptur instalētāju, izvēlieties {{ui:Papildinformācija}}, tad {{ui:Palaist tomēr}}. Macintosh pirmo reizi noklikšķiniet ar peles labo pogu uz CadCraft Studio un izvēlieties {{ui:Atvērt}}. CadCraft Studio vēl nav lietotņu veikalā, un iPad vai iPhone versijas vēl nav.
- Leņķu un slīpumu saraksti {{ui:Mērvienības}} ir saglabāti, bet neviens lodziņš tos vēl nenolasa.
- Ceļa izsekošana grafikas kartē, papildu funkcijas renderēšanas logā un renderēšanas rinda prasa WebGPU (bez tā augsta kvalitāte izmanto WebGL ceļa izsekotāju); tiešraides skats izmanto WebGPU, kur pārlūks to atbalsta, citādi WebGL 2. Tie šeit testēti tikai uz programmatūras grafikas aizstājēja, vēl ne uz īstām grafikas kartēm. Tiešraides skatam BimCraft nav izkliedes vai koplietošanas (ModelCraft tās ir).
- Ierakstītu pastaigu renderēšana kā video BimCraft nav iebūvēta.
- Projektēšanas pārbaudes: I-profils, kura IFC profila nosaukums nav W, S, IPE, HEA vai HEB izmērs (vai kura izmērs no tā atšķiras), tiek uzskatīts par metinātu un tiek atgriezts kā "nav pārbaudīts", tāpat kā caurules, leņķi, kanāli, plāni elementi un vērpe. Neviens inženieris vēl nav pārskatījis pārbaudes.
- Zīmētos elementus nevar kopēt pa vienam, pagriezt, apspoguļot vai izvietot rindā (var kopēt veselu līmeni), un nav sienas sadalīšanas, Teksta rīka vai aizkaru sienas. Siena, kas uz augšējā līmeņa satiekas ar sienu no zemākā līmeņa, netiek griezta tās 3D ķermenī, un specifikācijas uzskaita augšējā līmeņa atveri zem savas sienas paša līmeņa.
- Saimes: saimju bibliotēka, ko koplieto starp projektiem, nav izveidota. Saimes un kopētie līmeņi vēl nav atvērti citās BIM programmās.
- MEP: aprīkojums ir vispārīgs (bez ražotāju datiem); tees un reducētāji uz tērauda spolām ir vispārīgi, nevis no ASME B16.9 tabulas; bibliotēkas vienumu, novietotu no {{ui:Bibliotēka}} cilnes, portus neieraksta IFC; neviens nav pārskatīts inženierim.
- Augu papildinājums vēl nevar zīmēt maršrutētu trasi modelī, numurēt spolas savos izometriskajos zīmējumos vai pārbaudīt bibliotēkā novietota aprīkojuma izkārtojumu.
- Augus no CivilCraft augu bibliotēkas vēl nevar novietot no BimCraft {{ui:Bibliotēka}} cilnes.
- Enerģija: nav stundu simulācijas, nav ISO 52016-1 metodes un nav klimata failu. Aktīvi: nav uzturēta digitālā dvīņa, kas glabā rādījumus vai sūta brīdinājumus, kad BimCraft ir aizvērts.
- Skenējumu reģistrācija izmēģināta uz testa skenējumiem, vēl ne uz reāla skenera skenējumu kopas; E57 faili vēl tiek atvērti līdz 6 miljoniem punktu un 512 MB.
- Projektu paketes atveras tikai BimCraft (citas lietotnes pieņem izkārtojumu caur **Atvērt ...**), un paketes un divu programmu komplekts testēti pret aizvietotājiem, vēl ne ar pašām Archicad vai Revit.

Viss pārējais ir [Kas vēl nav izveidots](topic:not-built-yet).
