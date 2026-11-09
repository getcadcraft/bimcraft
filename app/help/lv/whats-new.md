---
title: Jaunumi 0.8 un 0.8.1 versijā
summary: BimCraft pievieno cilvēku pārvietošanos pa ēku, telpu akustiku, ko var dzirdēt, plūdu, vēja un zemestrīces atskaņošanu, piecdesmit gadu dzīves cikla skatu, pārbaudes pret IDS, marķējumus un specifikācijas, Pārvietot, Izlīdzināt un Sadalīt, attēlus zem plāna, sienas no skenējuma, paneļu rasējumus, saules enerģiju, sadalītās un VRF sistēmas, cauruļu un kabeļu izmēru noteikšanu, betona un seismiskās pārbaudes, jebkuru kartes projekciju, renderēšanas dzinēja izvēli un Studio atsaukšanu; 0.8.1 novērš lentes izkārtojuma pelēkos rīkus.
keywords: jaunumi, kas jauns, versijas piezīmes, izmaiņu žurnāls, izmaiņas, 0.8, 0.8.1, versija, jaunas funkcijas, evakuācija, cilvēki, rindas, akustika, reverberācija, impulsa atbilde, plūdi, vējš, zemestrīce, apdraudējums, dzīves cikls, kalpošanas laiks, ids, marķējumi, specifikācijas, pārvietot, izlīdzināt, sadalīt, attēls, fons, skenējums uz sienām, vieta no civilcraft, paneļu rasējumi, karkass, saule, pv, sadalīta, vrf, fan coil, cauruļu izmērs, kabeļu trase, apgaismojums, betons, seismika, salīdzināt skenējumu, epsg, projekcija, dokumenti, veidne, ogleklis, izmaksas, energyplus, renderēšanas dzinējs, atvērt citur, usd, glb, unreal, atsaukšana, papildinājumi, pcf, simboli, augi, pārzīmēt, pildspalvas, lente, projektu pārlūks, izkārtojums
from: 87b03056
---

Šīs ir izmaiņas BimCraft versijā 0.8 (2026-11-01) un 0.8.1 (2026-11-02), salīdzinot ar 0.7. BimCraft tagad var atbildēt uz jautājumiem par ēku un to pārbaudīt, ar cilvēkiem, skaņu, ūdeni, vēju un zemestrīcēm, un zīmēt to ar vairāk rīkiem; 0.8.1 ir labojumu laidiens.

## Jaunumi

### Pārbaudiet ēku

- **Cilvēki ēkā.** Sadaļa {{ui:Cilvēki ēkā}} kreisajā panelī ved evakuāciju vai parastas dienas ierašanos caur jūsu telpām, durvīm un kāpnēm. Redzat rindas vietās, kur ēka sašaurinās, garāko ceļu uz izeju no katras telpas un to, cik ilgi pēdējais cilvēks to nogājis. Atzīmējiet {{ui:Slēgts}} pie durvīm, lai redzētu, kas mainās, un atzīmējiet {{ui:Rādīt cilvēkus 3D skatā}}, lai vērotu gājējus. Atradumi nonāk sadaļā Problēmas. Tas ir rupjš pūļa modelis projektēšanas lēmumiem, nevis ugunsdrošības sertifikāts. Skatiet [Ved cilvēkus cauri ēkai](topic:people-in-the-building).
- **Telpu akustika, un to var dzirdēt.** Sadaļa {{ui:Telpu akustika}} sniedz katras telpas reverberācijas laiku pa oktāvju joslām (Sabine un Eyring) no tās izmēra un jūsu izvēlētajām apdarēm, un ar jūsu pašu mērķi norāda, cik absorbcijas vajadzētu, lai to sasniegtu. {{ui:Atskaņot šajā telpā}} atskaņo balsi, plaukšķināšanu, noplūktas nots vai jūsu pašu skaņas failu caur impulsa atbildi, kas aprēķināta telpai. Absorbcijas vērtības ir tipiskas publicētas vērtības, kuras varat aizstāt. Skatiet [Telpu akustika](topic:room-acoustics).
- **Plūdu, vēja un zemestrīces atskaņošana.** {{ui:Apdraudējuma atskaņošana}} atskaņo ūdeni, kas paceļas pa telpām, vēja spiedienu uz katru stāvu un zemestrīci, kas krata stāvus, plānā vai fasādē ar laika slīdni. Vienkārši modeļi ar to pieņēmumiem ir paneļa augšdaļā; tā nav noteikumu pārbaude. Skatiet [Atskaņot plūdus, vēju vai zemestrīci](topic:hazard-playback).
- **Kas nolietojas piecdesmit gadu laikā.** {{ui:Dzīves cikla skats}} uzskaita logus, durvis, apdares un jumtu, katram norādot kalpošanas laiku, gadus, kad tie tiek nomainīti, un, ja ievadāt cenu par vienību, izmaksas pa gadiem un to tagadnes vērtību. {{ui:Saglabāt grafiku (CSV)}} to saglabā. Kalpošanas laiki ir plānošanas skaitļi. Skatiet [Skatīt, kas nolietojas piecdesmit gadu laikā](topic:life-cycle-view).
- **Betona un seismiskās pārbaudes.** Bloki {{ui:Betona elementi}} un {{ui:Seismiskās slodzes}} cilnē {{ui:Aprēķins}} pārbauda betona sijas un kolonnas pēc ACI 318-19 un aprēķina ekvivalentos sānu spēkus pēc ASCE 7-22 stingrām grīdām, kopā ar stāva nobīdi. Paredzēts inženierim pārbaudei. Skatiet [Pārbaudīt betona elementus un aprēķināt seismiskās slodzes](topic:concrete-and-seismic).

### Pārbaude un atskaites

- **Pārbaudīt pret IDS.** Ielādējiet `.ids` failu, ko jums iedeva klients, un pirms IFC piegādes sadaļā Problēmas redziet katru elementu, kas tam neatbilst. Atveriet {{ui:Pārbaudīt pret IDS}} zem {{ui:Modeļa pārbaudes}}. Skatiet [Pārbaudīt modeli pret klienta IDS](topic:check-against-ids).
- **Marķējumi un specifikācijas.** Definējiet savus marķējumus, uzlieciet tos uzreiz daudziem elementiem un veidojiet specifikācijas, kuru kolonnas, filtri un grupas tos nolasa; marķējumi tiek glabāti IFC. Skatiet [Marķējumi un specifikācijas](topic:tags-and-schedules).
- **Dokumenti no modeļa.** {{ui:Dokumenti no modeļa}} aizpilda specifikāciju veidni no atvērtā IFC un saglabā to kā PDF, Word dokumentu vai Markdown. Skatiet [Dokumenti no modeļa](topic:documents-from-the-model).
- **Salīdziniet skenējumu ar modeli.** Ar atvērtu punktu mākoni {{ui:Salīdzināt}} katru elementu novērtē kā uzbūvētu, daļēji uzbūvētu, trūkstošu vai nesasniegtu, un parāda uzbūvēto procentu. Skatiet [Salīdzināt skenējumu ar modeli](topic:compare-scan-with-model).
- **Ogleklis un izmaksas.** Oglekļa panelis saskaita iegulto oglekli no koeficientu tabulas, ko var rediģēt, un Izmaksu panelis sadala cenas 4D grafikā. Koeficienti, kas nāk kopā ar BimCraft, ir vispārīgi un atzīmēti kā neapstiprināti. Skatiet [Iegultais ogleklis un izmaksas](topic:embodied-carbon-and-5d-cost).
- **Jebkura kartes projekcija.** {{ui:Mērīt}} › {{ui:Koordinātu sistēma…}} pieņem EPSG numuru, UTM zonu, nosaukumu vai jūsu pašu projekcijas definīciju. Skatiet [Georeferencēšana ar jebkuru projekciju](topic:georeference-any-projection).

### Zīmēšana un rediģēšana

- **Pārvietot, izlīdzināt un sadalīt.** Zem {{ui:Būvējums}}; {{key:Shift+M}} sāk pārvietošanu (parastais {{key:M}} joprojām ir Mērīt). Pārvietošana kopē, kamēr virzāties, ar {{key:C}}, katrs solis ir viena atsaukšanas darbība, un tā tiek pārsūtīta Live TeamWork sesijā. Skatiet [Pārvietot, kopēt, izlīdzināt un sadalīt](topic:move-align-distribute).
- **Attēli zem plāna.** {{ui:Būvējums}} › {{ui:Attēls}} novieto PNG, JPEG vai WebP zem līmeņa plāna vai uz vertikālas plaknes. Mērogu iestatiet ar diviem punktiem, un pārvietojiet, pagrieziet, izbalinājiet un bloķējiet to. Apgabals, kas nokopēts MarkupCraft, tiek ielīmēts sava lapas mērogā. Skatiet [Novietot attēlu zem plāna](topic:pictures-as-backgrounds).
- **Sienas no skenējuma.** Ar atvērtu skenējumu sienas, durvis un telpas nāk kā priekšlikumi, ko pieņemat vai noraidāt katru atsevišķi vienā atsaukšanas solī. Tiek atrastas tikai sienas divos perpendikulāros virzienos. Skatiet [Pārvērst skenējumu sienās](topic:scan-to-walls).
- **Pārzīmēt, pildspalvas un skicēt kāpnes.** {{ui:Pārzīmēt}} rāda citu līmeni punktētu zem plāna, {{ui:Pildspalvas}} dod sienām, durvīm un logiem savu līnijas biezumu vienā skatā, un {{ui:Skicēt kāpnes}} pārvērš gājiena līniju kāpnēs. Atveras Wavefront OBJ tīkls. Skatiet [Pārzīmēt līmeni, pildspalvas un kāpnes no skices](topic:trace-pens-stairs-obj).
- **Ēkas ap adresi.** Ēkas un zemesgabals, ko atrada CivilCraft rīks Adrese uz vietu, nonāk kā priekšlikumi; atzīmējiet tos, ko pievienot. Skatiet [Sākt no CivilCraft vietas](topic:site-from-civilcraft).
- **Paneļu rasējumi.** {{ui:Būvējums}} › {{ui:Paneļu rasējumi}} ietver sienas, grīdas un jumtus koka vai plāna tērauda karkasā un saglabā griezumu sarakstu kā CSV un darbnīcas rasējumus kā PDF. Tās ir sākuma vērtības, nevis konstrukcijas projektējums. Skatiet [Paneļu rasējumi](topic:panel-drawings).
- **Simbolu paleta un augi.** {{ui:Būvējums}} › {{ui:Simbolu paleta}} atrod elektrisko un santehnikas simbolus pēc nosaukuma; avots {{ui:Augi}} no {{ui:Bibliotēka}} uzskaita apmēram 400 augus ar plāna simboliem. Skatiet [Simbolu paleta](topic:symbol-palette) un [Novietot augu](topic:plant-list).

### Caurules, gaisa vadi un enerģija

- **Sadalītās, VRF un fan coil sistēmas.** Iekšējās un ārējās vienības ar to savienojumiem, un šķidruma līnijas izmērotas pēc tipisku piemēru vērtību tabulas, ko varat mainīt. Skatiet [Sadalītās, VRF un fan coil sistēmas](topic:split-vrf-fan-coils).
- **Aprēķini.** Aprēķinu panelis pārbauda padeves cauruļu un gaisa vadu izmērus ar spiediena kritumu, vada kabeļus pa trepēm un kanāliem un parāda to aizpildījumu, un aprēķina apgaismojumu no IES vai EULUMDAT failiem. Noklusētās vērtības ir apzīmētas; ievadiet savas normatīvās vērtības. Skatiet [Cauruļu, gaisa vadu, kabeļu un apgaismojuma aprēķini](topic:mep-calculations).
- **PCF faili.** Cauruļu rīka **Eksportēt PCF** raksta trases programmām cauruļvadu spriegumu analīzei un izometriskiem zīmējumiem, un PCF fails, kas tiek nolasīts atpakaļ, uzzīmē tā cauruli. Skatiet [Cauruļu komponentu faili](topic:piping-pcf).
- **Saules PV.** Uzstādiet masīvus uz jumtiem vai zemes, ēnojiet tos no modeļa, novērtējiet gada enerģiju, pārbaudiet virknes un izveidojiet vienlīnijas shēmas datus. Sākuma modulis un zudumi ir vispārīgi. Skatiet [Saules PV](topic:solar-pv).
- **EnergyPlus fails.** Panelis Pārbaude ar EnergyPlus raksta modeli kā IDF, lai to palaistu jūsu pašu EnergyPlus. Palaišanai pārlūkprogrammā vajadzīga versija, ko jūs uzturat paši un kuras adresi ierakstāt; BimCraft to nesniedz. Skatiet [Pārbaudīt apkuri un dzesēšanu ar EnergyPlus](topic:check-with-energyplus).

### Attēli un faili

- **Izvēlieties renderēšanas dzinēju.** {{ui:Renderēt}} ir izvēle {{ui:Dzinējs}}. Mūsu divi iebūvētie dzinēji (Fast un Path tracer) paliek noklusējums. **Atvērt citur** saglabā ainu kā USD vai glTF failu un Unreal projekta mapi kā .zip; CadCraft Studio papildinājums var pievienot dzinēju. Unreal spraudnis, kas atver projektu, nav izlaists. Skatiet [Izvēlēties, kura programma zīmē attēlu](topic:render-engines).
- **Atsaukšana Studio.** CadCraft Studio iekšienē BimCraft paziņo Studio katru pabeigtu soli, lai Studio varētu atsaukt jūsu pēdējo soli logā, kuru pēdējo izmantojāt. Skatiet [Atsaukšana starp lietotnēm](topic:undo-across-apps).
- **Papildinājumi jūsu failā.** IFC ieraksta, kuri papildinājumi tajā rakstīja, un piedāvā tos, kuru jums nav, kad to atverat. Skatiet [Papildinājumi jūsu failā](topic:add-ons-in-your-file).

### Katrā lietotnē

- **Pieslēdziet savu AI.** Jūsu pašu asistents var vadīt BimCraft caur Studio savienojumu un atbildēt uz jautājumiem par modeli, piemēram, kuras telpas atrodas noteiktā platībā. Studio pats AI nav. Skatiet [Ļaut AI asistentam strādāt ar jūsu modeli](topic:assistants).
- **Rīkjoslas rindas.** {{ui:Iestatījumi}} › {{ui:Vispārīgi}} › {{ui:Rīkjoslas rindas}} piedāvā Wrap, 2 rindas vai 1 rindu; Wrap paliek noklusējums.
- **Ievades ierīces.** Skārienpaliktņa, pildspalvas, 3D peles, vadības pults un MIDI iestatījumi ir kopīgi visām lietotnēm.
- **Problēmas un Live.** Brīdinājumu panelis un Live sesijas darbojas kā iepriekš, un jaunās pārbaudes, kas minētas iepriekš, padod datus sadaļai Problēmas.
- **Valodas.** 54 valodas, no tām desmit ir jaunas. Citas valodas, kas nav angļu, ir mašīntulkojumi, ko dzimtās valodas speciālists vēl nav pārskatījis; palīdzības temati galvenokārt ir angļu valodā.

## Labots 0.8.1 versijā

- **Lentes un Projektu pārlūka izkārtojums.** Ievietot › Importēt CAD, Ievietot › Attēls un Pārvaldīt › Projekta mērvienības rādīja „BimCraft vēl nav ieviests”. Tagad Attēls atver Attēla rīku, Importēt CAD atver {{ui:Būvējums}} › {{ui:No rasējuma…}} (DWG, DXF, PDF vai skenējums), un Projekta mērvienības atver {{ui:Iestatījumi}} › {{ui:Visur}} › {{ui:Mērvienības}}. Pārvietot un Izlīdzināt palaiž attiecīgi Pārvietošanas un Izlīdzināšanas rīkus, Līmenis atver {{ui:Pievienot līmeņus…}}, Fāzes atver sadaļu Renovācijas fāzes, un Materiāli atver materiālu bibliotēku.
- **DWG klašu sadaļa.** To nolasīja nepareizā tipā; labots BimCraft un citās lietotnēs, kas lasa DWG.
- **Valoda darbības laikā.** Studio un iepakotie izdevumi tagad var mainīt valodu bez restartēšanas. Tas vēl nav pārbaudīts visās platformās; pastāstiet mums, ja valoda nemainās.
- **Archicad pakotnes skripts.** `archicad_bundle.py`, atsevišķs lejupielādējums, tagad atrod Archicad ceļu, 20 sekundes vēro mapi un mēģina vēlreiz blakus pakotnei.

## Vēl nav šajā versijā

- **Drošības un projektēšanas palīglīdzekļi.** Cilvēki ēkā nav ierobežojuma attālumam līdz izejai no būvnoteikumiem (to ievadāt jūs), un tas nav pārbaudīts pa rokām uz reāla plāna. Akustikas, dzīves cikla un apdraudējuma vērtības ir plānošanas vērtības, nevis noteikumu pārbaude.
- **Klimata scenāriji un EnergyPlus.** Nav iebūvētu klimata scenāriju: plūdu aprēķinam varat ielādēt scenārija failu. EnergyPlus palaišana pārlūkprogrammā šajā laidienā nav iekļauta.
- **Lentes izkārtojums.** Materiālu apjomu aprēķins paliek „Nav uzbūvēts”, jo BimCraft nav materiālu daudzumu saraksta, un vēl 54 citiem pelēkiem lentes rīkiem nav aiz tiem neviena BimCraft rīka.
- **Parakstīšana un platformas.** Windows instalētāji un macOS .dmg nav parakstīti, tāpēc SmartScreen rāda {{ui:Papildu informācija}}, tad {{ui:Palaist tāpat}}, un macOS vajag ar peles labo pogu noklikšķināt un pēc tam izvēlēties {{ui:Atvērta}}. iPad un iPhone versija netika pārbūvēta 0.8.1 versijai.
- **Lapas testi.** Daži vecāki BimCraft pārlūkprogrammas testi joprojām neizdodas mūsu testa lapā, kā tie neizdevās pirms 0.8.1.

Viss pārējais ir [Kas vēl nav uzbūvēts](topic:not-built-yet). Iepriekšējās izmaiņas ir [Jaunumi 0.7 versijā](topic:whats-new-0-7).
