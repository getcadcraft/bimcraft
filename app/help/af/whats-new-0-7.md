---
title: Wat is nuut in 0.7 (vroeër)
summary: BimCraft voeg mure oor verskeie vlakke en Kopieer hierdie vlak by, mure uit PDF's en skanderings, jou eie muursamestellings, ryker families, MEP-toerusting met poorte, botsingstelle, openings en pypspoele, bateldokumente, COBie en sensorlesings, hemel, son, dagligte op 'n rooster en verwarmings- en verkoellaste, skanderingsregistrasie, 'n lewe-aansig en padtraseerder op die grafiese kaart, STEP en USD, biblioteekvariante, en meer vir KI-assistente.
keywords: wat is nuut 0.7, vroeëre vrystelling, vrystellingsnotas, veranderinge, 0.7, weergawe, nuwe funksies, mure oor vlakke, kopieer hierdie vlak, pdf, skandering, traseer, mure uit planne, muursamestellings, lae, kern, membraan, verwysingsmaatte, materiaalbiblioteek, vertoonenhede, aansigstyl, raamwerk, balke, families, parameters, plansimbool, trefpunte, herhaal, detailvlak, geneste families, csv-groottes, per element, toerusting, poorte, verbindings, vrye ruimtes, openings, spoele, spoelblaaie, veldlas, lugkanaal-snitlys, dokumente, cobie, sensors, mqtt, lewendige voer, vertikale hemelkomponent, sonwins, dagligrooster, verwarming, verkoeling, laste, u-waarde, skanderings registreer, icp, e57, lewe-aansig, padtraseer, webgpu, ontgeraas, fisiese hemel, lig meng, weergaverry, jou masjien, step, usd, projekbundel, ontwikkel 'n massa, variante, assistente, byvoeg-API, plant, elektries, ontwerpkontroles
from: ef226539
---

Dit is wat in BimCraft 0.7 verander het, vergeleke met 0.6. Die lys is volgens gebied gegroepeer, met die belangrikste eerste.

## Nuut

### 'n Gebou teken

- **Mure oor verskeie vlakke.** Die Muur-gereedskap se hoogtelys bied **Tot** enige vlak hoër op, soos Eienskappe dit vir 'n gekose muur doen. Die planne van die vlakke tussenin wys die muur ligter, vertrekke daar sluit daarteen, en deure en vensters kan vanaf daardie planne daarin geplaas word; **Loop deur** in Eienskappe noem die vlakke wat dit deurgaan. Sien [Verander 'n muur, deur of venster](topic:change-a-wall-or-door#change-a-wall).
- **Kopieer hierdie vlak.** {{ui:Kopieer hierdie vlak…}} in die Vlakke-paneel teken 'n vlak se mure met hulle deure en vensters, en sy vloere en plafonne weer op 'n ander vlak of op 'n nuwe een bo-op, in een ontdoen-stap; vertrekke verskyn vanself. Sien [Teken mure](topic:draw-walls#levels).
- **Mure uit 'n PDF of 'n skandering.** {{ui:Bou}} › {{ui:Uit 'n tekening…}} neem nou 'n PDF (lynwerk, of 'n skandering binne dit) of 'n geskandeerde plan (PNG, JPEG, TIFF, baie bladsye): elke bladsy word die mure, deure, vensters en vertrekke van 'n vlak, met die bladsy onder sy plan behou. Die traseer gebruik geen netwerk en geen opgeleide model nie, en die resultaat is wat die lyne gegee het: kontroleer elke vlak teen sy bladsy. Sien [Mure uit 'n stel planne](topic:walls-from-plans).
- **Jou eie muursamestellings.** {{ui:Muursamestellings…}} bou 'n muurtipe laag vir laag, met 'n kern, lugspleete en membrane, en 'n voorskou met mate; {{ui:Materiaalbiblioteek…}} hou die projek se materiale in die IFC; {{ui:Annoteer}} › {{ui:Verwysingsmaat}} meet na vlakke en kernlyne en volg die mure wanneer hulle verander. Van 'n gemeenskapsbydraer, Doc (drsurfbum). Sien [Muursamestellings en verwysingsmaatte](topic:wall-assemblies).
- **Vertoonenhede en aansigbeheer.** {{ui:Eenhede}} op die nutsbalk wys lengtes in voet en duim, duim, desimale voet, millimeter, sentimeter of meter, in maate, skedules, koördinate, metings en snitte. {{ui:Plan}}, {{ui:Splits}} en {{ui:3D}} staan in die nutsbalk, die verdeling kan gesleep word (of van die sleutelbord af verskuif), {{ui:Geskakeer}}, {{ui:Rante}} en {{ui:Draadraamwerk}} staan langs die aansigkubus, en dakhelling, rand en onderkant verander die gekose dak onmiddellik. Van 'n gemeenskapsbydraer, Joel (yisraelk). Sien [Teken mure](topic:draw-walls#levels).
- **Vloerbalke volgens spanwydte.** {{ui:Raamwerk}} kan ingenieursbalke (voorlopig) sowel as gesaagde hout uitlê, en kies die kleinste gelyste reeks en diepte wat die spanwydte bereik, 16" of 24" hart-tot-hart, in enige rigting; hulle gaan in die IFC en die snitlys. 'n Voorstel uit 'n vervaardiger se gepubliseerde tabel, nie ingenieurswerk nie. Ook van Joel. Sien [Raamwerk van mure, vloere en dakke](topic:framing).
- **Meer elektriese toestelle.** {{ui:Elektries}} voeg data-, telefoon- en klank-en-video-uitlaatpunte by, 'n keusskakelaar, 'n tydskakelaar, 'n termostaat, rook- en hitte-detektors, 'n trekstasie en 'n sirene, 'n waaier, 'n energiemeter en 'n subpaneel, elk met sy eie IFC-klas. Sien [Die elektriese plan](topic:electrical-plan).

### Families

- **Families doen meer.** Parameters kan hele getalle, teks, 'n materiaal, 'n pen of 'n vulling wees; 'n familie kan sy eie plansimbool teken, 'n soliede liggaam herhaal, dele merk vir growwer detailvlakke, ander families hou ('n poot in 'n tafel), en trefpunte hê wat jy sleep, ook op 'n geplaaste element in die plan. Groottes kom uit 'n CSV-tabel, en parameters wat as **Per element** gemerk is, laat twee deure van een grootte verskil. Sien [Wysig 'n familie](topic:family-editor#plan-symbol) en [Families en hul groottes](topic:families#sizes-from-a-table).

### Pype, lugkanale en toerusting

- **Toerusting met poorte.** {{ui:Bou}} › {{ui:Toerusting}} plaas 'n generiese lugbehandelaar, ingeboude waaier, pomp, ketel, waterverwarmer, eenheidterminaal, verspreider, rooster of tenk, gegroot volgens die waardes wat jy tik, met sy pyp- en lugkanaalverbindings as poorte. Elkeen word as sy IFC-klas met IFC-poorte gestoor. Sien [MEP-toerusting met poorte](topic:mep-equipment).
- **Verbonde lope.** 'n Pyp of lugkanaal wat op 'n poort begin, neem sy grootte en stelsel en bly daaraan vas: skuif die pomp en sy pyp volg. {{ui:Kontroleer verbindings}} lys oop poorte, los punte, grootte- en stelselmismatches en lope wat niks voorsien nie. Sien [Koppel pype en lugkanale aan toerusting](topic:mep-connections).
- **Pype en lugkanale teen die struktuur.** Die {{ui:Botsingstoets}} het gereed gemaakte stelle en {{ui:Pype en lugkanale × struktuur}} in een klik; {{ui:Kontroleer vrye ruimte}} gebruik elke lope se isolasie plus 'n gaping wat jy tik; {{ui:Openings nodig}} lys waar lope deur mure en plate gaan, as CSV en BCF-probleme. Niks word gesny nie. Sien [Kontroleer pype en lugkanale teen die struktuur](topic:mep-against-structure).
- **Staalpypspoele.** 'n Staallope word in genommerde spoele gesny by 'n langste lengte en by {{ui:Veldlas}}e wat jy plaas; {{ui:Spoelblaaie (PDF)}} gee 'n bladsy per spoel met sy isometriese aansig, snitlengtes, passtukke, lasse en materiaallys, en {{ui:Lugkanaal-snitlys}} lys reguit lugkanaalstukke. Sien [Staalpypspoele en spoelblaaie](topic:pipe-spools).

Dit is tekenings- en koördineringshulpmiddels, deur 'n ingenieur gegroot: geen vloeie, drukke of balansering nie.

### Die gebou laat loop

- **Dokumente per bate.** Die {{ui:Bates}}-oortjie koppel handleidings, waarborge, foto's en tekeninge aan 'n bate deur 'n lêernaam langs die IFC of 'n webadres; slegs die skakel gaan in die IFC. Sien [Dokumente](topic:assets-and-maintenance#documents).
- **COBie-sigblad.** {{ui:Stoor as COBie (.xlsx)}} skryf die COBie 2.4-oorhandigingswerkboek, en 'n COBie-werkboek wat teruggelees word, lys elke verandering voordat een {{ui:Pas toe}}. Dit is nog nie deur 'n COBie-valideerder gegaan nie. Sien [COBie-sigblad](topic:assets-and-maintenance#cobie-spreadsheet).
- **Sensorlesings en lewendige voere.** Maak 'n CSV van lesings oop, of {{ui:Koppel}} reguit vanaf die blaaier aan jou eie MQTT-makelaar of 'n adres wat jou gebou se stelsel antwoord: elke bate wys sy jongste lesing en 'n grafiek, word op die model gekleur, en word gemerk as dit buite die limiete in die IFC gestoor is. Lesings bly in die oortjie; wagwoorde word nooit gestoor nie. Sien [Sensorlesings](topic:assets-and-maintenance#sensor-readings) en [Lewendige lesings](topic:assets-and-maintenance#live-readings).

### Dagligte en energie

- **Hemel en son by elke venster.** Die {{ui:Dagligte}}-oortjie gee elke venster sy vertikale hemelkomponent en hoek van versperring, volg die son deur 'n datum met {{ui:Son deur die vensters op 'n datum}}, en werk die {{ui:Dagligfaktor op 'n rooster}} oor elke vertrek uit, getekend op sy plan. Sien [Vertikale hemelkomponent van elke venster](topic:daylight-factor#vertical-sky-component-of-each-window).
- **Verwarmings- en verkoellaste.** {{ui:Verwarmings- en verkoellaste}} bereken elke vertrek se hitteverlies, sy verwarming oor 'n jaar uit graadweerdae, en sy verkoelpiek, uit wat dit in die model begrens en elke element se U-waarde; 'n U-waarde wat daar getik word, word in die IFC geskryf. Sien [Skat verwarmings- en verkoellaste](topic:heating-and-cooling-loads).

Albei is ontwerphulpmiddels volgens gepubliseerde metodes, nie nakomingsberekeninge nie, en elke paneel sê so.

### Skanderings

- **Registreer verskeie skanderings.** {{ui:Registreer skanderings…}} (op die beginpaneel, of in {{ui:Wys}}) plaas skanderings in een raamwerk deur gekose puntpare of getikte teikens, verfyn hulle met ICP punt-tot-punt en dan punt-tot-vlak, stoor die registrasie as 'n klein projeklêer, en skryf die geregistreerde wolk as een LAS- of E57-lêer. Sien [Registreer verskeie skanderings tot een](topic:register-scans).

### Prente en die lewe-aansig

- **Die lewe-aansig.** {{ui:Lewe-aansig}} op die nutsbalk wys die model in die werklik-tyd-voorkoms langs die 3D-aansig, volg dit en elke verandering, met Loop, die tyd van die dag en die maand; {{ui:Lewe-aansig in 'n nuwe venster}} sit dit op 'n tweede skerm. Sien [Die lewe-aansig](topic:live-view).
- **Padtraseer op die grafiese kaart.** Met WebGPU voer {{ui:Weergee}} › {{ui:Hoë gehalte (padgevolg)}} CadCraft se eie padtraseerder op die grafiese kaart uit, kan stop en {{ui:Hervat}}, en word aan die einde ontgeraas; sonder WebGPU gebruik dit die WebGL-padtraseerder soos voorheen. Sien [Hoë gehalte](topic:render#high-quality).
- **Meer in die Weergee-dialoog** (op die grafiese kaart, so dit het WebGPU nodig): 'n fisiese hemel en hemelprente, IES-ligprofiele, 'n kamera met f-stop, veldeptes, tweepuntperspektief, witbalans en 360°-panorama's, 'n gradering vir die klaar prent, ligmenging en weergawe-elemente na die weergawe, mis, rook en kaustiek, stoor as 16-bis PNG, EXR of 'n weergavelêer, en 'n weergaverry. Sien [Hemel en ligprofiele op die grafiese kaart](topic:render#skies-and-light-profiles-on-the-graphics-card) en [Die weergaverry](topic:render#the-render-queue).
- **Jou masjien.** {{ui:Instellings}} › {{ui:BimCraft}} › {{ui:Weergee}} › {{ui:Jou masjien}} wys die grafika, verwerkerkerne en geheue wat hierdie blaaier die program laat gebruik, en die vlak waarop weergawe begin. Sien [Waarmee jou masjien weergee](topic:your-machine).

### Lêers en ander programme

- **STEP-lêers oop.** 'n `.step`- of `.stp`-onderdeel, stuk toerusting of verskaffer se model (AP203, AP214, AP242) open as 'n klein IFC-model, elke soliede voorwerp 'n element wat jy kan ondersoek, snit, meet en as IFC stoor. Kleure en die samestelling se onderdeelname word nog nie gelees nie. Sien [Lêers wat BimCraft oopmaak en stoor](topic:files#what-it-opens).
- **USD-uitvoer.** {{ui:USD}} op die nutsbalk skryf die oop modelle as `.usda`, `.usdc` of `.usdz`, uitgelê volgens terrein, gebou, vloer en dissipline, met elke element se IFC-klas, GlobalId en eienskappe. Sien [Voer die model uit as USD](topic:usd).
- **'n Massa van CivilCraft.** 'n Gebougroep wat vanaf CivilCraft se terreinaansig gestuur word, wys sy studienommers in Eienskappe, en {{ui:Ontwikkel hierdie massa}} bou mure op elke vlak en 'n vloer daaruit in een ontdoen-stap. Sien [Ontwikkel 'n gebougroep uit 'n terreinstudie](topic:develop-a-mass).
- **Biblioteekitems met variante.** 'n Item wat in verskeie variante kom, het 'n {{ui:Variant}}-keuse in die {{ui:Biblioteek}}-oortjie; die geplaaste element hou sy variant in die IFC, {{ui:Ruil item…}} lys die ander variante, en kopieë en opdaterings behou dit. Sien [Plaas en ruil 'n biblioteekitem wat variante het](topic:library-variants).
- **Projekbundels in 'n vouer.** {{ui:Maak 'n vouer oop}} lys `.ccbundle.zip`-lêers onder {{ui:Projekbundels}}, en elke uitleg in 'n bundel het **Maak oop in …**: die PDF na MarkupCraft, die DWG na CadCraft, in 'n nuwe oortjie. Sien [Maak 'n uitleg oop](topic:open-project-bundle#open-a-layout).

### Assistente en byvoegings

- **Meer vir KI-assistente.** 'n Assistent kan nou elemente hernoem en eienskapswaardes stel, elemente skuif en skrap, mure, deure en vensters verander, USD uitvoer, en 'n prent weergee of die weergaverry laat loop; elke verandering is een ontdoen-stap. Sien [Laat 'n KI-assistent met jou model werk](topic:assistants).
- **Byvoegings kan in die model bou.** Die byvoeg-API 1.1 laat 'n byvoeging 'n verandering in die model maak as een ontdoen-stap (dit reis in Lewendige spanwerk), die model lees, en pyp- en lugkanaallope, poorte, toerusting en spoele lees.
- **Die Plant-byvoeging** (af tot jy dit in {{ui:Instellings}} › {{ui:Algemeen}} › {{ui:Byvoegings}} aanskakel): pypspesifikasies nagegaan teen die lope, isometriese tekeninge van 'n lope as SVG en DXF met 'n materiaallys, generiese prosestoerusting met spuitstukke in die model geplaas, 'n roeteerder tussen twee poorte, en 'n nagaan van die fabrieksuitleg. 'n Tekenhulpmiddel, nie 'n ingenieursgoedkeuring nie; die woorde is net Engels.

## Verander

- **'n Eerste huis op 'n skootrekenaar.** Op 'n skerm van skootrekenaargrootte begin BimCraft met net die plan, die Teken-balk is 'n smal paneel met die plan langs hom aangepas, die plan en die 3D-aansig kom terug in beeld wanneer die tekening hulle verlaat, die 3D-aansig raam die hele huis in 'n smal ruit, en deure en vensters word gekies voor maatlyne.
- **Die stoor van 'n prent.** **Stoor PNG** in die Weergee-dialoog is nou {{ui:Stoor}}, met {{ui:Stoor as}} daarlangs vir die ander formate. Sien [Stoor die prent](topic:render#save-the-picture).
- **Die Ontleding-oortjie** het 'n {{ui:Ontwerpkontroles}}-blok: dit maak die lasstelle van ASCE 7 of EN 1990 vir jou gevalle, en kontroleer elke gerolde staal-I-vorm ('n W-, S-, IPE-, HEA- of HEB-grootte volgens sy profielnaam en grootte) na AISC 360 of EN 1993-1-1, en wys hoeveel van sy kapasiteit dit gebruik. 'n Hulpmiddel totdat 'n ingenieur dit nagesien het; gelaste vorms en ander snitte sê "nie nagegaan nie". Sien [Ontwerpkontroles](topic:frame-analysis#design-checks).

## Reggemaak

- Herdoen na 'n stap wat 'n nuwe familiegrootte gemaak het, het misluk ("geen grootte"). Elke stap maak nou dieselfde IFC-GlobalIds weer op 'n herdoen, so herdoen werk vir families en elke ander verandering.
- Wanneer twee mense dieselfde familie gestoor het (in 'n Lewendige spanwerk-sessie of twee vensters), het die tweede stoor die eerste een se verandering stilweg vervang. Dit weier nou en sê hoe om hulle verandering te sien en joune weer te maak.
- 'n Model in VSA-opmetingsvoete is as 0.3048 m per voet gelees in plaas van 0.3048006096 m, wat elke georefereerde IFC in VSA-voete op die kaart verskuif het.
- Die familie-redigeerder: om dit te sluit, val die sleutelbordfokus nie meer terug na die bladsy nie, sy Stoor bly in sig op 'n foon, en sy velde maak 'n foon nie meer in-zoem nie.

## In elke program

- **Eenhede.** {{ui:Instellings}} › {{ui:Algemeen}} › {{ui:Eenhede}} het een lys elk vir lengte, oppervlakte, volume, hoek en helling, met die presiese groottes wat die eenhede se definisies gee (die VSA-opmetingsvoet is sy eie eenheid). Skakel die eenhede wat jy nooit gebruik af en hulle verlaat die eenheidslyste; merk een met 'n ster en nuwe werk begin daarin. 'n Lêer hou altyd sy eie eenheid. In BimCraft volg die {{ui:Eenhede}}-lys op die nutsbalk die skakelaars, die ster stel die vertooneenhede totdat jy hulle op die nutsbalk kies (jou vroeëre keuse bly behou), en die tekengereedskap se lengtekassies neem enige eenheid se merker, soos `3.5 m` of `10 US ft`. Sien [Eenhede, getikte waardes en die eenheidslyste](common:unit-lists).
- **'n Digter uitleg en paneel wat weggeborg word.** {{ui:Instellings}} › {{ui:Algemeen}} › {{ui:Uitlegdigtheid}} › {{ui:Kompak}} pas meer op die skerm (aanraakskerms en fone hou hulle groot knoppies). Elke sypaneel het 'n slanke titelbalk: sleep dit om die paneel te koppel of los te maak, laat dit op 'n ander paneel se balk val om 'n raamwerk as oortjies te deel, vasmaak sodat dit na die rand wegskuif, of versteek en dit van die rand af terugbring. Sien [Rangskik die panele](common:arrange-panels#make-the-layout-denser).
- **Dialoë beweeg.** Sleep 'n dialoog aan sy titelbalk uit die pad van die tekening; dit kom terug waar jy hom gelos het. Dubbelklik op die titelbalk om hom weer te sentreer. Sien [Beweeg 'n dialoog](common:arrange-panels#move-a-dialog).
- **Resepte vir KI-assistente.** Tien uitgewerkte versoeke vir jou eie assistent (maak 'n tekening skoon, beplan 'n stel, kontroleer tekeninge, vra vrae oor 'n model, tel 'n hoeveelheidsopname, probeer 'n onderdeelvariant…), elk met die gereedskap wat dit roep en die toestemmings wat dit nodig het, en elk deur ons toetse herspeel. Die programme bevat geen KI nie. Sien [Resepte vir KI-assistente](common:assistants-recipes).
- **Tale.** **Português (Portugal)** is nuut in {{ui:Instellings}} › {{ui:Algemeen}} › {{ui:Taal}}. Dit, **Português (Brasil)**, **Español (México)** en **Bahasa Indonesia** het nou elke woord van die programme, as konsepte wat nog nie deur 'n moedertaalspreker nagesien is nie. Hulp-onderwerpe is in Engels, met 'n paar in Spaans.
- **CadCraft Studio** sê waarom 'n opdatering-nagaan misluk het (nog geen lêer vir jou stelsel nie, geen netwerk nie, 'n slegte handtekening) in plaas van net "Klaar", en hou op om 'n Wat's nuut-kaart wat jy gesluit het terug te bring totdat daar 'n nuwer vrystelling is.

## Nog nie in hierdie weergawe nie

- **0.7 is nie kode-geteken nie.** Teken, en die Microsoft Store-pakket, het na 0.8 geskuif omdat die sertifikaatvalidering nog nie deurgekom het nie. Kontroleer die SHA-256 langs elke lêer op getcadcraft.com/download. Op Windows, as SmartScreen die installeerder stop, kies {{ui:Meer inligting}}, dan {{ui:Hardloop tog}}. Op 'n Mac, die eerste keer, regsklik op CadCraft Studio en kies {{ui:Oop}}. CadCraft Studio is nog nie in 'n programwinkel nie, en daar is nog geen iPad- of iPhone-weergawe nie.
- Die hoek- en helling-lyste in {{ui:Eenhede}} word gestoor, maar geen kassie lees hulle nog nie.
- Padtraseer op die grafiese kaart, die ekstras in die Weergee-dialoog en die weergaverry het WebGPU nodig (sonder dit gebruik hoë gehalte die WebGL-padtraseerder); die lewe-aansig gebruik WebGPU waar die blaaier dit het, anders WebGL 2. Hulle is hier slegs op 'n sagteware-grafiekvervanger getoets, nog nie op werklike grafiese kaarte nie. Die lewe-aansig het geen verspreiding of deling in BimCraft nie (ModelCraft s'n het hulle wel).
- Die weergee van 'n opgeneemde staproete as video is nie in BimCraft ingebou nie.
- Ontwerpkontroles: 'n I-vorm waarvan die IFC-profielnaam nie 'n W-, S-, IPE-, HEA- of HEB-grootte is nie (of waarvan die grootte daarvan verskil), word as gelas geneem en kom terug as "nie nagegaan nie", net soos buise, hoeke, kanale, slanke dele en wringing. Geen ingenieur het die kontroles nog nagesien nie.
- Getekende elemente kan nie een vir een gekopieer, gedraai, gespieël of gerangskik word nie ('n hele vlak kan gekopieer word), en daar is geen verdeelde muur, Teks-gereedskap of gordynmuur nie. 'n Muur wat op 'n hoër vlak 'n muur van 'n laer vlak ontmoet, word nie in daardie muur se 3D-liggaam gesny nie, en skedules lys 'n opening op 'n hoër vlak onder sy muur se eie vlak.
- Families: 'n biblioteek van families wat tussen projekte gedeel word, is nog nie gebou nie. Families en gekopieerde vlakke is nog nie in ander BIM-programme oopgemaak nie.
- MEP: toerusting is generies (geen vervaardigers se data nie); T-stukke en reduseerders op staalspoele is generies, nie uit die ASME B16.9-tabel nie; poorte van biblioteekitems wat vanaf die {{ui:Biblioteek}}-oortjie geplaas word, word nie in die IFC geskryf nie; niks is deur 'n ingenieur nagesien nie.
- Die Plant-byvoeging kan nog nie 'n geroeteerde lope in die model teken, spoele op sy isometriese nommer of die uitleg van toerusting uit die biblioteek nagaan nie.
- Fabrieke uit CivilCraft se fabriekbiblioteek kan nog nie vanaf BimCraft se {{ui:Biblioteek}}-oortjie geplaas word nie.
- Energie: geen uurlikse simulasie, geen ISO 52016-1-metode en geen klimaatlêers nie. Bates: geen gasheer-tweeling wat lesings hou of waarskuwings stuur terwyl BimCraft toe is nie.
- Skanderingsregistrasie is op toetsskanderings probeer, nog nie op 'n werklike skandeerder se stel skanderings nie; E57-lêers maak steeds tot 6 miljoen punte en 512 MB oop.
- Projekbundels maak net in BimCraft oop (die ander programme neem 'n uitleg deur **Maak oop in …**), en bundels en die tweeprogram-stel is teen stand-ins getoets, nog nie met Archicad of Revit self nie.

Alles anders is in [Wat nog nie gebou is nie](topic:not-built-yet).
