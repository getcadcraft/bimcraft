---
title: Jaunumi versijā 0.7
summary: BimCraft pievieno sienas vairākos līmeņos un Kopēt šo līmeni, sienas no PDF un skenējumiem, jūsu pašu sienu konstrukcijas, bagātākas ģimenes, MEP aprīkojumu ar pieslēgvietām, sadursmju kopas, atveres un cauruļu spolus, aktīvu dokumentus, COBie un sensoru rādījumus, debesis, sauli, dienasgaismu režģī un apkures un dzesēšanas slodzes, skenējumu reģistrāciju, tiešraides skatu un ceļa izsekošanu uz grafiskās kartes, STEP un USD, bibliotēkas variantus un vēl vairāk MI asistentiem.
keywords: jaunumi, kas jauns, izlaiduma piezīmes, izmaiņu žurnāls, izmaiņas, 0.7, versija, jaunas funkcijas, sienas līdz līmeņiem, kopēt šo līmeni, pdf, skenējums, izsekot, sienas no plāniem, sienu konstrukcijas, slāņi, kodols, membrānas, atskaites izmēri, materiālu bibliotēka, displeja mērvienības, skata stils, karkass, sijas, ģimenes, parametri, plāna simbols, karstie punkti, atkārtot, detalizācijas līmenis, iekļautas ģimenes, csv izmēri, pa elementiem, aprīkojums, pieslēgvietas, savienojumi, attālumi, atveres, spoļi, spoļu lapas, montāžas metinājums, gaisa vadu griešanas saraksts, dokumenti, cobie, sensori, mqtt, tiešraides plūsma, vertikālais debess komponents, saules siltuma ieguve, dienasgaismas režģis, apkure, dzesēšana, slodzes, u-vērtība, reģistrēt skenējumus, icp, e57, tiešraides skats, ceļa izsekošana, webgpu, trokšņu samazināšana, fiziskās debesis, gaismu sajaukšana, renderēšanas rinda, jūsu dators, step, usd, projekta paka, masas izstrāde, varianti, asistenti, add-on API, augs, elektriskais, projektēšanas pārbaudes
from: 5c27b80a
---

Šis ir tas, kas mainījies BimCraft 0.7 versijā salīdzinājumā ar 0.6. Saraksts ir grupēts pēc jomām, vispirms svarīgākais.

## Jauns

### Ēkas zīmēšana

- **Sienas vairākos līmeņos.** Sienu rīka augstuma saraksts piedāvā **Līdz** jebkuru augstāku līmeni, tāpat kā Rekvizīti to dara izvēlētai sienai. Līmeņu plāni starp tiem rāda sienu gaišāku, telpas tur piekļaujas tai, un durvis un logus no šiem plāniem var novietot tajā. **Šķērso** Rekvizītos nosauc līmeņus, ko tā šķērso. Skatiet [Mainīt sienu, durvis vai logu](topic:change-a-wall-or-door#change-a-wall).
- **Kopēt šo līmeni.** {{ui:Kopēt šo līmeni…}} Līmeņu panelī uzzīmē līmeņa sienas ar to durvīm un logiem, kā arī grīdas un griestus no jauna citā līmenī vai jaunā līmenī augšā, vienā atcelšanas solī. Telpas parādās pašas. Skatiet [Zīmēt sienas](topic:draw-walls#levels).
- **Sienas no PDF vai skenējuma.** {{ui:Būvējums}} › {{ui:No rasējuma…}} tagad pieņem PDF (līniju zīmējumu vai tajā iekļautu skenējumu) vai skenētu plānu (PNG, JPEG, TIFF, daudzas lapas). Katra lapa kļūst par līmeņa sienām, durvīm, logiem un telpām, un lapa tiek saglabāta zem plāna. Izsekošana neizmanto tīklu un apmācītu modeli, un rezultāts ir tāds, kāds bija līnijām: pārbaudiet katru līmeni pret tā lapu. Skatiet [Sienas no plānu komplekta](topic:walls-from-plans).
- **Jūsu pašu sienu konstrukcijas.** {{ui:Sienu konstrukcijas…}} veido sienas tipu slāni pa slānim, ar kodolu, gaisa spraugām un membrānām, un ar izmēru priekšskatījumu. {{ui:Materiālu bibliotēka…}} glabā projekta materiālus IFC. {{ui:Anotēt}} › {{ui:Atskaites izmērs}} mēra līdz virsmām un kodola līnijām un seko sienām, kad tās mainās. No kopienas dalībnieka Doc (drsurfbum). Skatiet [Sienu konstrukcijas un atskaites izmēri](topic:wall-assemblies).
- **Displeja mērvienības un skata vadība.** {{ui:Mērvienības}} rīkjoslā rāda garumus pēdās un collās, collās, decimālās pēdās, milimetros, centimetros vai metros, izmēros, specifikācijās, koordinātās, mērījumos un griezumos. {{ui:Plāns}}, {{ui:Dalīt}} un {{ui:3D}} atrodas rīkjoslā, dalījumu var vilkt (vai pārvietot ar tastatūru). {{ui:Ar ēnojumu}}, {{ui:Malas}} un {{ui:Karkass}} atrodas blakus skata kubam. Jumta slīpums, apmale un apakšējā virsma maina izvēlēto jumtu uzreiz. No kopienas dalībnieka Joel (yisraelk). Skatiet [Zīmēt sienas](topic:draw-walls#levels).
- **Grīdas sijas pēc laidumiem.** {{ui:Karkass}} var izkārtot inženiertehniskās sijas (provizoriski), kā arī zāģētus kokmateriālus, izvēloties mazāko uzskaitīto sēriju un augstumu, kas sasniedz laidumu, 16" vai 24" centros, jebkurā virzienā. Tās nonāk IFC un griešanas sarakstā. Ieteikums no ražotāja publicētas tabulas, nevis inženierija. Arī no Joel. Skatiet [Sienu, grīdu un jumtu karkass](topic:framing).
- **Vairāk elektrisko ierīču.** {{ui:Elektriskais}} pievieno datu, telefona un audio-video kontaktligzdas, selektora slēdzi, taimeri, termostatu, dūmu un karstuma detektorus, trauksmes pogu un sirēnu, ventilatoru, enerģijas skaitītāju un apakšsadali, katru ar savu IFC klasi. Skatiet [Elektriskais plāns](topic:electrical-plan).

### Ģimenes

- **Ģimenes dara vairāk.** Parametri var būt veseli skaitļi, teksts, materiāls, pildspalva vai aizpildījums. Ģimene var zīmēt savu plāna simbolu, atkārtot cietu ķermeni, atzīmēt detaļas zemākiem detalizācijas līmeņiem un turēt citas ģimenes (kāju galdā). Tai var būt karstie punkti, ko velkat, arī novietotam elementam plānā. Izmēri nāk no CSV tabulas, un parametri, kas atzīmēti **Pa elementiem**, ļauj diviem vienāda izmēra durvīm atšķirties. Skatiet [Rediģēt ģimeni](topic:family-editor#plan-symbol) un [Ģimenes un to izmēri](topic:families#sizes-from-a-table).

### Caurules, gaisa vadi un aprīkojums

- **Aprīkojums ar pieslēgvietām.** {{ui:Būvējums}} › {{ui:Aprīkojums}} novieto vispārīgu gaisa apstrādes iekārtu, iekšējo ventilatoru, sūkni, katlu, ūdens sildītāju, gala vienību, difuzoru, režģi vai tvertni. Izmērs ir tāds, kādu ievadāt, un caurules un gaisa vadu savienojumi ir pieslēgvietas. Katrs saglabājas kā sava IFC klase ar IFC pieslēgvietām. Skatiet [MEP aprīkojums ar pieslēgvietām](topic:mep-equipment).
- **Savienotie posmi.** Caurule vai gaisa vads, kas sākas pieslēgvietā, pārņem tās izmēru un sistēmu un paliek piestiprināts: pārvietojiet sūkni, un tā caurule seko. {{ui:Pārbaudīt savienojumus}} uzskaita atvērtās pieslēgvietas, brīvos galus, izmēru un sistēmu neatbilstības un posmus, ko nekas nepadod. Skatiet [Pieslēgt caurules un gaisa vadus aprīkojumam](topic:mep-connections).
- **Caurules un gaisa vadi pret konstrukciju.** {{ui:Sadursmju pārbaude}} piedāvā gatavas kopas, un {{ui:Caurules un gaisa vadi × konstrukcija}} ir vienā klikšķī. {{ui:Pārbaudīt attālumus}} izmanto katra posma izolāciju plus spraugu, ko ierakstāt. {{ui:Nepieciešamās atveres}} uzskaita, kur posmi iet caur sienām un pārsegumiem, kā CSV un BCF problēmas. Nekas netiek izgriezts. Skatiet [Pārbaudīt caurules un gaisa vadus pret konstrukciju](topic:mep-against-structure).
- **Tērauda cauruļu spoli.** Tērauda posms tiek sagriezts numurētos spoļos pie garākā garuma un pie {{ui:Montāžas metinājums}}, ko novietojat. {{ui:Spoļu lapas (PDF)}} dod lapu katram spolim ar tā izometrisko skatu, griezumu garumiem, fitingiem, metinājumiem un materiālu sarakstu. {{ui:Gaisa vadu griešanas saraksts}} uzskaita taisnos gaisa vadu gabalus. Skatiet [Tērauda cauruļu spoli un spoļu lapas](topic:pipe-spools).

Tie ir zīmēšanas un koordinācijas palīglīdzekļi, kurus izmēro inženieris: nav plūsmu, spiedienu vai balansēšanas.

### Ēkas ekspluatācija

- **Dokumenti katram aktīvam.** Cilne {{ui:Aktīvi}} saista rokasgrāmatas, garantijas, fotogrāfijas un rasējumus ar aktīvu pēc faila nosaukuma blakus IFC vai tīmekļa adreses. IFC tiek ierakstīta tikai saite. Skatiet [Dokumenti](topic:assets-and-maintenance#documents).
- **COBie izklājlapa.** {{ui:Saglabāt kā COBie (.xlsx)}} raksta COBie 2.4 nodošanas darba grāmatu. Atpakaļ nolasīta COBie darba grāmata uzskaita katru izmaiņu pirms vienas {{ui:Lietot}}. Tā vēl nav pārbaudīta ar COBie validatoru. Skatiet [COBie izklājlapa](topic:assets-and-maintenance#cobie-spreadsheet).
- **Sensoru rādījumi un tiešraides plūsmas.** Atveriet CSV ar rādījumiem vai {{ui:Savienot}} tieši no pārlūkprogrammas ar savu MQTT brokeri vai adresi, uz kuru atbild jūsu ēkas sistēma. Katrs aktīvs rāda pēdējo rādījumu un diagrammu, tiek iekrāsots modelī un tiek atzīmēts, ja ir ārpus IFC saglabātajām robežām. Rādījumi paliek cilnē, paroles nekad netiek saglabātas. Skatiet [Sensoru rādījumi](topic:assets-and-maintenance#sensor-readings) un [Tiešraides rādījumi](topic:assets-and-maintenance#live-readings).

### Dienasgaisma un enerģija

- **Debesis un saule pie katra loga.** Cilne {{ui:Dienasgaisma}} katram logam dod tā vertikālo debess komponentu un aizsēruma leņķi. Tā seko saulei caur datumu ar {{ui:Saule caur logiem noteiktā datumā}} un aprēķina {{ui:Dienasgaismas koeficients režģī}} katrā telpā, zīmētu tās plānā. Skatiet [Katra loga vertikālais debess komponents](topic:daylight-factor#vertical-sky-component-of-each-window).
- **Apkures un dzesēšanas slodzes.** {{ui:Siltuma un dzesēšanas slodzes}} aprēķina katras telpas siltuma zudumu, tās gada apkuri pēc degree-days un dzesēšanas maksimumu. Aprēķins balstās uz to, kas telpu ierobežo modelī, un uz katra elementa U-vērtību. Ierakstītā U-vērtība tiek ierakstīta IFC. Skatiet [Apkures un dzesēšanas slodžu aprēķins](topic:heating-and-cooling-loads).

Abi ir projektēšanas palīglīdzekļi pēc publicētām metodēm, nevis atbilstības aprēķini, un katrs panelis to norāda.

### Skenējumi

- **Reģistrēt vairākus skenējumus.** {{ui:Reģistrēt skenējumus…}} (sākuma panelī vai {{ui:Rādīt}}) novieto skenējumus vienā rāmī pēc izvēlētiem punktu pāriem vai ierakstītiem mērķiem. Tos precizē ar ICP no punkta uz punktu un pēc tam no punkta uz plakni. Reģistrāciju saglabā kā mazu projekta failu, un reģistrēto mākoni uzraksta kā vienu LAS vai E57 failu. Skatiet [Reģistrēt vairākus skenējumus vienā](topic:register-scans).

### Attēli un tiešraides skats

- **Tiešraides skats.** {{ui:Tiešraide}} rīkjoslā rāda modeli reāllaika izskatā blakus 3D skatam. Tas seko modelim un katrai izmaiņai, ar {{ui:Staigāt}}, dienas laiku un mēnesi. {{ui:Tiešraide jaunā logā}} to novieto uz otra ekrāna. Skatiet [Tiešraides skats](topic:live-view).
- **Ceļa izsekošana uz grafiskās kartes.** Ar WebGPU {{ui:Renderēt}} › {{ui:Augsta kvalitāte (ceļa izsekošana)}} izmanto CadCraft pašu ceļa izsekotāju uz grafiskās kartes. To var apturēt un {{ui:Turpināt}}, un beigās tiek veikta trokšņu samazināšana. Bez WebGPU tiek izmantots WebGL ceļa izsekotājs kā līdz šim. Skatiet [Augsta kvalitāte](topic:render#high-quality).
- **Vairāk renderēšanas dialogā** (uz grafiskās kartes, tāpēc nepieciešams WebGPU): fiziskas debesis un debesu attēli, IES gaismas profili, kamera ar f-skaitli, lauka dziļumu, divpunktu perspektīvu, baltā balansu un 360° panorāmas, gala attēla pakāpi, gaismu sajaukšanu un renderēšanas elementus pēc renderēšanas, miglu, dūmus un kaustikas, saglabāšanu kā 16 bitu PNG, EXR vai renderēšanas failu, un renderēšanas rindu. Skatiet [Debesis un gaismas profili uz grafiskās kartes](topic:render#skies-and-light-profiles-on-the-graphics-card) un [Renderēšanas rinda](topic:render#the-render-queue).
- **Jūsu dators.** {{ui:Iestatījumi}} › {{ui:BimCraft}} › {{ui:Renderēšana}} › {{ui:Jūsu dators}} rāda grafiku, procesora kodolus un atmiņu, ko šī pārlūkprogramma ļauj lietotnei izmantot, un līmeni, no kura sākas renderēšana. Skatiet [Ar ko renderē jūsu dators](topic:your-machine).

### Faili un citas lietotnes

- **STEP faili atveras.** `.step` vai `.stp` detaļa, aprīkojuma gabals vai piegādātāja modelis (AP203, AP214, AP242) atveras kā neliels IFC modelis. Katrs cietais ķermenis kļūst par elementu, ko varat pārbaudīt, griezt, mērīt un saglabāt kā IFC. Krāsas un mezgla detaļu nosaukumi vēl netiek nolasīti. Skatiet [Faili, ko BimCraft atver un saglabā](topic:files#what-it-opens).
- **USD eksports.** {{ui:USD}} rīkjoslā raksta atvērtos modeļus kā `.usda`, `.usdc` vai `.usdz`. Tie ir sakārtoti pēc vietas, ēkas, stāva un disciplīnas, ar katra elementa IFC klasi, GlobalId un īpašībām. Skatiet [Eksportēt modeli kā USD](topic:usd).
- **Masa no CivilCraft.** Ēkas masa, kas nosūtīta no CivilCraft vietas skata, rāda savus pētījuma skaitļus Rekvizītos. {{ui:Izstrādāt šo masu}} izveido sienas katrā līmenī un grīdu no tās vienā atcelšanas solī. Skatiet [Ēkas masas izstrāde no vietas pētījuma](topic:develop-a-mass).
- **Bibliotēkas vienumi ar variantiem.** Vienumam, kas nāk vairākos variantos, {{ui:Bibliotēka}} cilnē ir {{ui:Variants}} izvēle. Novietotais elements saglabā savu variantu IFC. {{ui:Aizstāt vienumu…}} uzskaita citus variantus, un kopijas un atjauninājumi to saglabā. Skatiet [Novietot un aizstāt bibliotēkas vienumu, kam ir varianti](topic:library-variants).
- **Projekta paketes mapē.** {{ui:Atvērt mapi}} uzskaita `.ccbundle.zip` failus zem {{ui:Projekta paketes}}, un katram izkārtojumam paketē ir **Atvērt programmā …**: PDF uz MarkupCraft, DWG uz CadCraft, jaunā cilnē. Skatiet [Atvērt izkārtojumu](topic:open-project-bundle#open-a-layout).

### Asistenti un papildinājumi

- **Vairāk MI asistentiem.** Asistents tagad var pārdēvēt elementus un iestatīt īpašību vērtības, pārvietot un dzēst elementus, mainīt sienas, durvis un logus, eksportēt USD un renderēt attēlu vai palaist renderēšanas rindu. Katra izmaiņa ir viens atcelšanas solis. Skatiet [Ļaut MI asistentam strādāt ar jūsu modeli](topic:assistants).
- **Papildinājumi var veidot modelī.** Add-on API 1.1 ļauj papildinājumam veikt izmaiņu modelī kā vienu atcelšanas soli (tā pārvietojas caur Live TeamWork), nolasīt modeli un nolasīt cauruļu un gaisa vadu posmus, pieslēgvietas, aprīkojumu un spoļus.
- **Augu papildinājums** (izslēgts, līdz to ieslēdzat {{ui:Iestatījumi}} › {{ui:Vispārīgi}} › {{ui:Papildinājumi}}): cauruļu specifikācijas, pārbaudītas pret posmiem; cauruļvadu izometriskie zīmējumi kā SVG un DXF ar materiālu sarakstu; vispārīgs procesa aprīkojums ar stutseņiem, kas novietots modelī; maršrutētājs starp divām pieslēgvietām un rūpnīcas izkārtojuma pārbaude. Tas ir zīmēšanas palīglīdzeklis, nevis inženiertehniskais apstiprinājums, un tā teksts ir tikai angļu valodā.

## Mainīts

- **Pirmā māja klēpjdatorā.** Klēpjdatora izmēra ekrānā BimCraft sākas tikai ar plānu. Zīmēšanas josla ir šaurs panelis, un plāns ir ievietots tam blakus. Kad zīmējums tos atstāj, plāns un 3D skats atgriežas redzamībā. 3D skats ietver visu māju šaurā rūtī, un durvis un logi tiek izvēlēti pirms izmēru līnijām.
- **Attēla saglabāšana.** **Saglabāt PNG** renderēšanas dialogā tagad ir {{ui:Saglabāt}}, un {{ui:Saglabāt kā}} atrodas blakus citiem formātiem. Skatiet [Saglabāt attēlu](topic:render#save-the-picture).
- **Analīzes cilnei** ir {{ui:Projektēšanas pārbaudes}} bloks. Tas veido ASCE 7 vai EN 1990 slodžu kombinācijas jūsu gadījumiem un pārbauda katru valcētu I-profilu (W, S, IPE, HEA vai HEB izmēru pēc tā profila nosaukuma un izmēra) pēc AISC 360 vai EN 1993-1-1. Tas rāda, cik daudz no tā kapacitātes tiek izmantots. Tas ir palīglīdzeklis, kamēr inženieris to nav pārskatījis. Metinātas formas un citas sekcijas saka "nav pārbaudīts". Skatiet [Projektēšanas pārbaudes](topic:frame-analysis#design-checks).

## Labots

- Atkārtot pēc soļa, kurā izveidots jauns ģimenes izmērs, neizdevās ("nav izmēra"). Katrs solis tagad atjauno tos pašus IFC GlobalId atkārtotā atsaukšanā, tāpēc atkārtot var ģimenēm un katrai citai izmaiņai.
- Kad divi cilvēki saglabāja to pašu ģimeni (Live TeamWork sesijā vai divos logos), otrā saglabāšana klusi aizstāja pirmā izmaiņu. Tagad tā atsakās saglabāt un pasaka, kā redzēt viņu izmaiņu un atkal veikt savu.
- Modelis ASV mērnieku pēdās tika nolasīts kā 0.3048 m uz pēdu, nevis 0.3048006096 m. Tas pārvietoja katru ASV pēdās georeferencētu IFC kartē.
- Ģimeņu redaktors: aizverot to, fokuss vairs nepāriet uz lapu. Tā {{ui:Saglabāt}} paliek redzama tālrunī, un tā lauki vairs nepieliek tālrunim tālummaiņu.

## Katrā lietotnē

- **Mērvienības.** {{ui:Iestatījumi}} › {{ui:Vispārīgi}} › {{ui:Mērvienības}} katram garumam, laukumam, tilpumam, leņķim un slīpumam ir savs saraksts ar precīziem izmēriem, ko dod mērvienību definīcijas (ASV mērnieku pēda ir atsevišķa mērvienība). Izslēdziet mērvienības, ko nekad neizmantojat, un tās pazūd no sarakstiem. Atzīmējiet vienu, un jaunais darbs sākas ar to. Fails vienmēr saglabā savu mērvienību. BimCraft {{ui:Mērvienības}} saraksts rīkjoslā seko slēdžiem. Zvaigznīte nosaka rādīšanas mērvienības, līdz tās izvēlaties rīkjoslā (jūsu iepriekšējā izvēle tiek saglabāta). Zīmēšanas rīku garuma lodziņi pieņem jebkuras mērvienības apzīmējumu, piemēram, `3.5 m` vai `10 US ft`. Skatiet [Mērvienības, ievadītās vērtības un mērvienību saraksti](common:unit-lists).
- **Blīvāks izkārtojums un paneļi, kas sakārtojas.** {{ui:Iestatījumi}} › {{ui:Vispārīgi}} › {{ui:Izkārtojuma blīvums}} › {{ui:Kompakts}} ietilpina ekrānā vairāk. Skārienekrāni un tālruņi saglabā lielās pogas. Katram sānu panelim ir plāna virsraksta josla: velciet to, lai piestiprinātu paneli vai padarītu to peldošu. Nometiet to uz cita paneļa joslas, lai dalītu vienu rāmi kā cilnes. Piespraudiet to, lai tas paslīd uz malu, vai paslēpiet un atgrieziet no malas. Skatiet [Izkārtot paneļus](common:arrange-panels#make-the-layout-denser).
- **Dialogi pārvietojas.** Velciet dialogu aiz tā virsraksta joslas nost no zīmējuma. Tas atgriežas, kur to atstājāt. Divreiz noklikšķiniet uz virsraksta joslas, lai to atkal centrētu. Skatiet [Pārvietot dialogu](common:arrange-panels#move-a-dialog).
- **Receptes MI asistentiem.** Desmit darbi jūsu asistentam (sakārtot zīmējumu, izdrukāt komplektu, pārbaudīt rasējumus, uzdot jautājumus modelim, aprēķināt apjomu kopsavilkumu, izmēģināt detaļas variantu…). Katrs ar rīkiem, ko tas izsauc, un atļaujām, kas tam vajadzīgas. Katrs ir atkārtots mūsu testos. Lietotnēs nav MI. Skatiet [Receptes MI asistentiem](common:assistants-recipes).
- **Valodas.** **Português (Portugal)** ir jauns {{ui:Iestatījumi}} › {{ui:Vispārīgi}} › {{ui:Valoda}} vienums. Tā, **Português (Brasil)**, **Español (México)** un **Bahasa Indonesia** tagad ir visi lietotņu vārdi, kā melnraksti, ko vēl nav pārskatījis dzimtās valodas runātājs. Palīdzības tēmas ir angļu valodā, dažas — spāņu.
- **CadCraft Studio** saka, kāpēc atjauninājumu pārbaude neizdevās (vēl nav faila jūsu sistēmai, nav tīkla, slikts paraksts), nevis tikai "Gatavs". Tā pārstāj atjaunot Jaunumu kartīti, ko aizvērāt, kamēr nav jaunāka izlaiduma.

## Vēl nav šajā versijā

- **0.7 nav koda parakstīts.** Parakstīšana un Microsoft Store pakotne pārcelta uz 0.8, jo sertifikāta validācija vēl nav saņemta. Pārbaudiet SHA-256 blakus katram failam vietnē getcadcraft.com/download. Operētājsistēmā Windows, ja SmartScreen aptur instalētāju, izvēlieties {{ui:Papildinformācija}}, tad {{ui:Tomēr palaist}}. Mac datorā pirmo reizi ar peles labo pogu noklikšķiniet uz CadCraft Studio un izvēlieties {{ui:Atvērta}}. CadCraft Studio vēl nav lietotņu veikalā, un vēl nav iPad vai iPhone versijas.
- Leņķu un slīpumu saraksti {{ui:Mērvienības}} tiek saglabāti, bet neviens lodziņš tos vēl nelasa.
- Ceļa izsekošana uz grafiskās kartes, papildu renderēšanas dialogā un renderēšanas rinda prasa WebGPU. Bez tā augstā kvalitāte izmanto WebGL ceļa izsekotāju. Tiešraides skats izmanto WebGPU, ja pārlūkprogrammā tas ir, citādi WebGL 2. Tie testēti tikai ar programmatūras grafikas aizstājēju, vēl ne uz īstām grafiskajām kartēm. Tiešraides skatā BimCraft nav izkliedes vai kopīgošanas (ModelCraft tā ir).
- Ierakstīta pastaigas video renderēšana nav iebūvēta BimCraft.
- Projektēšanas pārbaudes: I-profils, kura IFC profila nosaukums nav W, S, IPE, HEA vai HEB izmērs (vai kura izmērs no tā atšķiras), tiek uzskatīts par metinātu un atgriežas "nav pārbaudīts". Tāpat tiek rīkoties ar caurulēm, leņķiem, kanāliem, slaidām detaļām un vērpi. Pārbaudes vēl nav pārskatījis neviens inženieris.
- Zīmētos elementus nevar kopēt pa vienam, pagriezt, spoguļot vai izvietot masīvā (visu līmeni var kopēt). Nav sadalāmas sienas, Teksta rīka vai aizkaru sienas. Siena, kas augšējā līmenī satiekas ar sienu no zemāka līmeņa, netiek sagriezta tās 3D korpusā. Specifikācijas augšējā līmeņa atveri uzskaita zem savas sienas līmeņa.
- Ģimenes: ģimeņu bibliotēka, kas koplietota starp projektiem, nav izveidota. Ģimenes un kopētie līmeņi vēl nav atvērti citās BIM programmās.
- MEP: aprīkojums ir vispārīgs (nav ražotāju datu). T-veida savienotāji un reducētāji uz tērauda spoļiem ir vispārīgi, nevis no ASME B16.9 tabulas. Bibliotēkas vienumu, kas novietoti no {{ui:Bibliotēka}} cilnes, pieslēgvietas nav ierakstītas IFC. Nekas nav pārskatīts inženierim.
- Augu papildinājums vēl nevar zīmēt maršrutētu posmu modelī, numurēt spoļus savos izometriskajos zīmējumos vai pārbaudīt no {{ui:Bibliotēka}} novietota aprīkojuma izkārtojumu.
- Augus no CivilCraft augu bibliotēkas vēl nevar novietot no BimCraft {{ui:Bibliotēka}} cilnes.
- Enerģija: nav stundas simulācijas, nav ISO 52016-1 metodes un nav klimata failu. Aktīvi: nav mitināta dvīņa, kas saglabā rādījumus vai sūta brīdinājumus, kamēr BimCraft ir aizvērts.
- Skenējumu reģistrācija izmēģināta uz testa skenējumiem, vēl ne uz īsta skenera skenējumu kopas. E57 faili vēl atveras līdz 6 miljoniem punktu un 512 MB.
- Projekta paketes atveras tikai BimCraft (citas programmas izkārtojumu uzņem caur **Atvērt programmā …**). Paketes un divu programmu komplekts izmēģināti pret aizstājējiem, vēl ne ar pašām Archicad vai Revit.

Viss pārējais atrodams [Kas vēl nav izveidots](topic:not-built-yet).
