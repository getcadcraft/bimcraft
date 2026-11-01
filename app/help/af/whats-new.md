---
title: Wat is nuut in 0.7
summary: BimCraft voeg mure oor verskeie vlakke en Kopieer hierdie vlak by, mure uit PDF's en skanderings, jou eie muursamestellings, ryker families, MEP-toerusting met poorte, botsingstelle, openings en pypspoele, batedokumente, COBie en sensorlesings, lug, son, dagligte op 'n rooster en verwarmings- en verkoellaste, skanderingsregistrasie, 'n lewe-aansig en padvolging op die grafiese kaart, STEP en USD, biblioteekvariante, en meer vir KI-assistente.
keywords: wat is nuut, vrystellingsnotas, veranderlog, veranderinge, 0.7, weergawe, nuwe kenmerke, mure oor vlakke, kopieer hierdie vlak, pdf, skandering, spoor, mure uit planne, muursamestellings, lae, kern, membraan, verwysingsmaatte, materiaalbiblioteek, vertooneenhede, aansigstyl, raamwerk, vloerbalke, families, parameters, plansimbool, hotspots, herhaal, detailvlak, geneste families, csv-groottes, per element, toerusting, poorte, verbindings, vrye ruimtes, openings, spoele, spoelblaaie, veldlas, lugkanaal-snitlys, dokumente, cobie, sensors, mqtt, lewendige voer, vertikale lugkomponent, sonwins, dagligrooster, verwarming, verkoeling, laste, u-waarde, skanderings registreer, icp, e57, lewe-aansig, padvolging, webgpu, ontgeraas, fisiese lug, lig-mengsel, weergawe-wagry, jou masjien, step, usd, projekbundel, massa ontwikkel, variante, assistente, byvoegings-api, aanleg, elektries, ontwerpkontroles
from: 5c27b80a
---

Dit is wat in BimCraft 0.7 verander het, vergeleke met 0.6. Die lys is volgens gebied gegroepeer, met die belangrikste eerste.

## Nuut

### Teken 'n gebou

- **Mure oor verskeie vlakke.** Die Muurgereedskap se hoogtelys bied **Tot** enige vlak hoër op aan, soos Eienskappe dit vir 'n gekose muur doen. Die planne van die vlakke tussenin wys die muur ligter, vertrekke daar sluit daarteen, en deure en vensters kan daarin vanaf daardie planne geplaas word. **Loop deur** in Eienskappe noem die vlakke wat dit deurkruis. Sien [Verander 'n muur, deur of venster](topic:change-a-wall-or-door#change-a-wall).
- **Kopieer hierdie vlak.** {{ui:Kopieer hierdie vlak…}} in die Vlakke-paneel teken 'n vlak se mure met hul deure en vensters, sy vloere en plafonne weer op 'n ander vlak of op 'n nuwe een bo-op, in een ontdoen-stap. Vertrekke verskyn vanself. Sien [Teken mure](topic:draw-walls#levels).
- **Mure uit 'n PDF of 'n skandering.** {{ui:Bou}} › {{ui:Uit 'n tekening…}} neem nou 'n PDF (lynwerk of 'n skandering daarin) of 'n geskandeerde plan (PNG, JPEG, TIFF, baie bladsye). Elke bladsy word die mure, deure, vensters en vertrekke van 'n vlak, met die bladsy onder sy plan bewaar. Die omtrekking gebruik geen netwerk en geen opgeleide model nie, en die resultaat is wat die lyne gee: kontroleer elke vlak teen sy bladsy. Sien [Mure uit 'n stel planne](topic:walls-from-plans).
- **Jou eie muursamestellings.** {{ui:Muursamestellings…}} bou 'n muurtipe laag vir laag, met 'n kern, lugspleetjies en membrane, en 'n voorskou met afmetings. {{ui:Materiaalbiblioteek…}} hou die projek se materiale in die IFC, en {{ui:Annoteer}} › {{ui:Verwysingsmaat}} meet na vlakke en kernlyne en volg die mure wanneer hulle verander. Van 'n gemeenskapsbydraer, Doc (drsurfbum). Sien [Muursamestellings en verwysingsmaatte](topic:wall-assemblies).
- **Vertooneenhede en aansigbeheer.** {{ui:Eenhede}} op die nutsbalk wys lengtes in voet en duim, duim, desimale voet, millimeter, sentimeter of meter, in afmetings, skedules, koördinate, metings en snitte. {{ui:Plan}}, {{ui:Verdeel}} en {{ui:3D}} sit in die nutsbalk. Die verdeling kan gesleep word (of van die sleutelbord af geskuif word). {{ui:Geskakeer}}, {{ui:Rante}} en {{ui:Draadraamwerk}} sit langs die aansigkubus, en dakhelling, fassie en sofiet verander die gekose dak onmiddellik. Van 'n gemeenskapsbydraer, Joel (yisraelk). Sien [Teken mure](topic:draw-walls#levels).
- **Vloerbalke volgens spanwydte.** {{ui:Raamwerk}} kan ingenieursvloerbalke (voorlopig) sowel as gesaagde hout uitlê, en kies die kleinste gelyste reeks en diepte wat die spanwydte bereik, 16" of 24" hart-tot-hart, in enige rigting. Hulle gaan in die IFC en die snitlys. 'n Voorstel uit 'n vervaardiger se gepubliseerde tabel, nie ingenieurswerk nie. Ook van Joel. Sien [Raamwerk vir mure, vloere en dakke](topic:framing).
- **Meer elektriese toestelle.** {{ui:Elektries}} voeg data-, telefoon- en oudio-video-uitlaatpunte by, 'n keuseskakelaar, 'n tydklok, 'n termostaat, rook- en hitte-detektors, 'n trekstasie en 'n sirene, 'n waaier, 'n energiemeter en 'n subpaneel, elk met sy eie IFC-klas. Sien [Die elektriese plan](topic:electrical-plan).

### Families

- **Families doen meer.** Parameters kan heelgetalle, teks, 'n materiaal, 'n pen of 'n vulling wees. 'n Familie kan sy eie plansimbool teken, 'n soliede liggaam herhaal, dele merk vir growwer detailvlakke, ander families hou ('n poot in 'n tafel), en hotspots hê wat jy sleep, ook op 'n geplaasde element in die plan. Groottes kom uit 'n CSV-tabel, en parameters wat as **Per element** gemerk is, laat twee deure van een grootte verskil. Sien [Wysig 'n familie](topic:family-editor#plan-symbol) en [Families en hul groottes](topic:families#sizes-from-a-table).

### Pype, lugkanale en toerusting

- **Toerusting met poorte.** {{ui:Bou}} › {{ui:Toerusting}} plaas 'n generiese lugbehandelaar, ingelynde waaier, pomp, ketel, waterverhitter, eindeenheid, verspreider, rooster of tenk, volgens die waardes wat jy tik, met sy pyp- en lugkanaalverbindings as poorte. Elk word as sy IFC-klas met IFC-poorte gestoor. Sien [MEP-toerusting met poorte](topic:mep-equipment).
- **Verbonde lope.** 'n Pyp of lugkanaal wat by 'n poort begin, neem sy grootte en stelsel en bly daaraan vas: beweeg die pomp en sy pyp volg. {{ui:Kontroleer verbindings}} lys oop poorte, los punte, grootte- en stelselverskille en lope wat niks voorsien nie. Sien [Koppel pype en lugkanale aan toerusting](topic:mep-connections).
- **Pype en lugkanale teen die struktuur.** Die {{ui:Botsingstoets}} het gereedgemaakte stelle en {{ui:Pype en lugkanale × struktuur}} in een klik. {{ui:Kontroleer vrye ruimte}} gebruik elke lope se isolasie plus 'n gaping wat jy tik. {{ui:Openings nodig}} lys waar lope deur mure en plate gaan, as CSV en BCF-kwessies. Niks word gesny nie. Sien [Kontroleer pype en lugkanale teen die struktuur](topic:mep-against-structure).
- **Staalpypspoele.** 'n Staallope word in genommerde spoele gesny by 'n langste lengte en by {{ui:Veldlas}}-punte wat jy plaas. {{ui:Spoelblaaie (PDF)}} gee 'n bladsy per spoel met sy isometriese aansig, snitlengtes, passtukke, lasse en materiaallys, en {{ui:Lugkanaal-snitlys}} lys reguit lugkanaalstukke. Sien [Staalpypspoele en spoelblaaie](topic:pipe-spools).

Dit is tekenings- en koördinasiehulpmiddels, deur 'n ingenieur gedimensioneer: geen vloeie, drukke of balansering nie.

### Bedryf van die gebou

- **Dokumente per bate.** Die {{ui:Bates}}-oortjie koppel handleidings, waarborge, foto's en tekeninge aan 'n bate deur 'n lêernaam langs die IFC of 'n webadres. Net die skakel gaan in die IFC. Sien [Dokumente](topic:assets-and-maintenance#documents).
- **COBie-sigblad.** {{ui:Stoor as COBie (.xlsx)}} skryf die COBie 2.4-oorhandigingswerkboek, en 'n COBie-werkboek wat teruggelees word, lys elke verandering voor een {{ui:Pas toe}}. Dit is nog nie deur 'n COBie-validerder gegaan nie. Sien [COBie-sigblad](topic:assets-and-maintenance#cobie-spreadsheet).
- **Sensorlesings en lewendige voere.** Maak 'n CSV van lesings oop, of {{ui:Koppel}} reguit vanuit die blaaier na jou eie MQTT-makelaar of 'n adres wat jou gebou se stelsel antwoord. Elke bate wys sy jongste lesing en 'n grafiek, word op die model gekleur, en word gemerk as dit buite die grense is wat in die IFC gestoor is. Lesings bly in die blaaierblad; wagwoorde word nooit gestoor nie. Sien [Sensorlesings](topic:assets-and-maintenance#sensor-readings) en [Lewendige lesings](topic:assets-and-maintenance#live-readings).

### Dagligte en energie

- **Lug en son by elke venster.** Die {{ui:Dagligte}}-oortjie gee elke venster sy vertikale lugkomponent en hoek van obstruksie, volg die son deur 'n datum met {{ui:Son deur die vensters op 'n datum}}, en werk die {{ui:Dagligfaktor op 'n rooster}} oor elke vertrek uit, op sy plan geteken. Sien [Vertikale lugkomponent van elke venster](topic:daylight-factor#vertical-sky-component-of-each-window).
- **Verwarmings- en verkoellaste.** {{ui:Verwarmings- en verkoellaste}} bereken elke vertrek se hitteverlies, sy verwarming oor 'n jaar uit graaddae en sy verkoelingspiek, uit wat dit in die model begrens en elke element se U-waarde. 'n U-waarde wat daar getik word, word in die IFC geskryf. Sien [Skat verwarmings- en verkoellaste](topic:heating-and-cooling-loads).

Albei is ontwerphulpmiddels volgens gepubliseerde metodes, nie nakomingsberekeninge nie, en elke paneel sê so.

### Skanderings

- **Registreer verskeie skanderings.** {{ui:Registreer skanderings…}} (op die beginpaneel, of in {{ui:Wys}}) plaas skanderings in een raamwerk deur gekose puntpare of getikte teikens. Hulle word met ICP verfyn, punt-tot-punt en dan punt-tot-vlak. Die registrasie word as 'n klein projeklêer gestoor, en die geregistreerde wolk word as een LAS- of E57-lêer geskryf. Sien [Registreer verskeie skanderings in een](topic:register-scans).

### Beelde en die lewe-aansig

- **Die lewe-aansig.** {{ui:Lewe-aansig}} op die nutsbalk wys die model in die werklike-tyd-voorkoms langs die 3D-aansig, en volg dit en elke verandering, met {{ui:Loop}}, die tyd van die dag en die maand. {{ui:Lewe-aansig in 'n nuwe venster}} sit dit op 'n tweede skerm. Sien [Die lewe-aansig](topic:live-view).
- **Padvolging op die grafiese kaart.** Met WebGPU voer {{ui:Weergee}} › {{ui:Hoë gehalte (padgevolg)}} CadCraft se eie padvolger op die grafiese kaart uit. Dit kan stop en {{ui:Hervat}}, en word aan die einde ontgeraas. Sonder WebGPU gebruik dit die WebGL-padvolger soos voorheen. Sien [Hoë gehalte](topic:render#high-quality).
- **Meer in die weergee-dialoog** (op die grafiese kaart, dus het dit WebGPU nodig): 'n fisiese lug en lugprente, IES-ligprofiele, 'n kamera met f-stop, veldiepte, tweepuntperspektief, witbalans en 360°-panorama's, 'n gradering vir die voltooide prent, ligmenging en weergee-elemente ná die weergawe, mis, rook en kaustiek, stoor as 16-bit PNG, EXR of 'n weergee-lêer, en 'n weergawe-wagry. Sien [Lug en ligprofiele op die grafiese kaart](topic:render#skies-and-light-profiles-on-the-graphics-card) en [Die weergawe-wagry](topic:render#the-render-queue).
- **Jou masjien.** {{ui:Instellings}} › {{ui:BimCraft}} › {{ui:Weergee}} › {{ui:Jou masjien}} wys die grafika, verwerkerkerne en geheue wat hierdie blaaier die program laat gebruik, en die vlak waarop weergee begin. Sien [Waarmee jou masjien weergee](topic:your-machine).

### Lêers en ander programme

- **STEP-lêers open.** 'n `.step`- of `.stp`-onderdeel, stuk toerusting of verskaffer se model (AP203, AP214, AP242) open as 'n klein IFC-model. Elke soliede liggaam is 'n element wat jy kan inspekteer, snit, meet en as IFC stoor. Kleure en die samestelling se onderdeelnaam word nog nie gelees nie. Sien [Lêers wat BimCraft oopmaak en stoor](topic:files#what-it-opens).
- **USD-uitvoer.** {{ui:USD}} op die nutsbalk skryf die oop modelle as `.usda`, `.usdc` of `.usdz`, uitgelê volgens terrein, gebou, verdieping en dissipline, met elke element se IFC-klas, GlobalId en eienskappe. Sien [Voer die model uit as USD](topic:usd).
- **'n Massa van CivilCraft.** 'n Gebou-massa wat van CivilCraft se terreinaansig gestuur word, wys sy studiegetalle in Eienskappe. {{ui:Ontwikkel hierdie massa}} bou mure op elke vlak en 'n vloer daaruit in een ontdoen-stap. Sien [Ontwikkel 'n gebou-massa uit 'n terreinstudie](topic:develop-a-mass).
- **Biblioteekitems met variante.** 'n Item wat in verskeie variante kom, het 'n {{ui:Variant}}-keuse in die {{ui:Biblioteek}}-oortjie. Die geplaasde element hou sy variant in die IFC, {{ui:Ruil item…}} lys die ander variante, en kopieë en opdaterings hou dit. Sien [Plaas en ruil 'n biblioteekitem wat variante het](topic:library-variants).
- **Projekbundels in 'n vouer.** {{ui:Maak 'n vouer oop}} lys `.ccbundle.zip`-lêers onder {{ui:Projekbundels}}, en elke uitleg in 'n bundel het **Maak oop in …**: die PDF na MarkupCraft, die DWG na CadCraft, in 'n nuwe blad. Sien [Maak 'n uitleg oop](topic:open-project-bundle#open-a-layout).

### Assistente en byvoegings

- **Meer vir KI-assistente.** 'n Assistent kan nou elemente hernoem en eienskapwaardes stel, elemente skuif en skrap, mure, deure en vensters verander, USD uitvoer, en 'n prent weergee of die weergawe-wagry loop. Elke verandering is een ontdoen-stap. Sien [Laat 'n KI-assistent met jou model werk](topic:assistants).
- **Byvoegings kan in die model bou.** Die byvoegings-API 1.1 laat 'n byvoeging 'n verandering in die model maak as een ontdoen-stap (dit reis in Live TeamWork), die model lees, en pyp- en lugkanaallope, poorte, toerusting en spoele lees.
- **Die Plant-byvoeging** (afgeskakel totdat jy dit in {{ui:Instellings}} › {{ui:Algemeen}} › {{ui:Byvoegings}} aanskakel): pyp-spesifikasies wat teen die lope nagegaan word, isometriese tekeninge van 'n lope as SVG en DXF met 'n materiaallys, generiese prosestoerusting met spuitstukke in die model geplaas, 'n roeteerder tussen twee poorte, en 'n fabrieksuitlegtoets. 'n Tekenhulpmiddel, nie 'n ingenieursgoedkeuring nie. Die woorde is net in Engels.

## Gewysig

- **'n Eerste huis op 'n skootrekenaar.** Op 'n skootrekenaargrote skerm begin BimCraft met net die plan. Die Teken-balk is 'n smal paneel met die plan gepas langs dit. Die plan en die 3D-aansig kom weer in beeld wanneer die tekening hulle verlaat, die 3D-aansig raam die hele huis in 'n smal ruit, en deure en vensters word gekies voor afmetingslyne.
- **Stoor 'n prent.** **Stoor PNG** in die weergee-dialoog is nou {{ui:Stoor}}, met {{ui:Stoor as}} daarnaas vir die ander formate. Sien [Stoor die prent](topic:render#save-the-picture).
- **Die Ontleding-oortjie** het 'n {{ui:Ontwerpkontroles}}-blok. Dit maak die lasskombinasies van ASCE 7 of EN 1990 vir jou gevalle en kontroleer elke gerolde staal-I-vorm ('n W, S, IPE, HEA of HEB-grootte volgens sy profielnaam en grootte) na AISC 360 of EN 1993-1-1. Dit wys hoeveel van sy kapasiteit dit gebruik. 'n Hulpmiddel totdat 'n ingenieur dit nagesien het. Gesweiste vorms en ander snitte sê "nie nagegaan nie". Sien [Ontwerpkontroles](topic:frame-analysis#design-checks).

## Reggestel

- {{ui:Herdoen}} na 'n stap wat 'n nuwe familiegrootte gemaak het, het misluk ("no size"). Elke stap maak nou dieselfde IFC GlobalIds weer op 'n herdoen, so herdoen werk vir families en elke ander verandering.
- Wanneer twee mense dieselfde familie gestoor het (in 'n Live TeamWork-sessie of twee vensters), het die tweede stoor die eerste een se verandering stilweg vervang. Dit weier nou en sê hoe om hulle verandering te sien en jou eie weer te maak.
- 'n Model in US survey feet is gelees as 0.3048 m per voet in plaas van 0.3048006096 m. Dit het elke georefereerde IFC in US feet op die kaart verskuif.
- Die familie-redigeerder: om dit toe te maak laat die sleutelbord-fokus nie meer op die bladsy val nie, sy Stoor bly in sig op 'n foon, en sy velde maak 'n foon nie meer in-zoem nie.

## In elke program

- **Eenhede.** {{ui:Instellings}} › {{ui:Algemeen}} › {{ui:Eenhede}} het een lys elk vir lengte, oppervlakte, volume, hoek en helling, met die presiese groottes wat die eenhede se definisies gee (die US survey foot is sy eie eenheid). Skakel die eenhede wat jy nooit gebruik af, en hulle verlaat die eenheidslyste. Merk een met 'n ster, en nuwe werk begin daarin. 'n Lêer hou altyd sy eie eenheid. In BimCraft volg die {{ui:Eenhede}}-lys op die nutsbalk die skakelaars. Die ster stel die vertooneenhede totdat jy hulle op die nutsbalk kies (jou vorige keuse bly behou), en die teken-gereedskap se lengtevelde neem enige eenheid se merk, soos `3.5 m` of `10 US ft`. Sien [Eenhede, getikte waardes en die eenheidslyste](common:unit-lists).
- **'n Digter uitleg en paneels wat wegruim.** {{ui:Instellings}} › {{ui:Algemeen}} › {{ui:Uitlegdigtheid}} › {{ui:Kompak}} pas meer op die skerm (aanraakskerms en fone hou hul groot knoppe). Elke sypaneel het 'n slanke titelbalk: sleep dit om die paneel te dok of te laat swewe, laat dit op 'n ander paneel se balk val om een raam as oortjies te deel, pen dit vas sodat dit na die rand wegskuif, of versteek dit en haal dit terug van die rand af. Sien [Rangskik die paneele](common:arrange-panels#make-the-layout-denser).
- **Dialoë beweeg.** Sleep 'n dialoog aan sy titelbalk uit die pad van die tekening; dit keer terug waar jy dit gelaat het. Dubbelklik die titelbalk om dit weer te sentreer. Sien [Skuif 'n dialoog](common:arrange-panels#move-a-dialog).
- **Resepte vir KI-assistente.** Tien uitgewerkte versoeke vir jou eie assistent (maak 'n tekening skoon, plot 'n stel, kontroleer tekeninge, vra 'n model vrae, tel 'n hoeveelheidsopname op, probeer 'n onderdeelvariant…), elk met die gereedskap wat dit roep en die toestemmings wat dit nodig het, en elk weer afgespeel deur ons toetse. Die programme bevat geen KI nie. Sien [Resepte vir KI-assistente](common:assistants-recipes).
- **Tale.** **Português (Portugal)** is nuut in {{ui:Instellings}} › {{ui:Algemeen}} › {{ui:Taal}}. Dit, **Português (Brasil)**, **Español (México)** en **Bahasa Indonesia** het nou elke woord van die programme, as konsepte wat nog nie deur 'n moedertaalspreker nagesien is nie. Hulponderwerpe is in Engels, met 'n paar in Spaans.
- **CadCraft Studio** sê waarom 'n opdateringskontrole misluk het (nog geen lêer vir jou stelsel nie, geen netwerk nie, 'n slegte handtekening), in plaas van net "Klaar". Dit hou ook op om 'n Wat-is-nuut-kaart wat jy toegemaak het terug te bring totdat daar 'n nuwer vrystelling is.

## Nog nie in hierdie weergawe nie

- **0.7 is nie kode-geteken nie.** Kodetekening en die Microsoft Store-pakket is na 0.8 geskuif, omdat die sertifikaatvalidering nog nie deurgekom het nie. Kontroleer die SHA-256 langs elke lêer op getcadcraft.com/download. Op Windows, as SmartScreen die installeerder stop, kies {{ui:Meer inligting}}, dan {{ui:Tog uitvoer}}. Op 'n Mac, die eerste keer, regsklik CadCraft Studio en kies {{ui:Oop}}. CadCraft Studio is nog nie in 'n programwinkel nie, en daar is nog geen iPad- of iPhone-bou nie.
- Die hoek- en helling-lyste in {{ui:Eenhede}} word gestoor, maar geen veld lees hulle nog nie.
- Padvolging op die grafiese kaart, die ekstras in die weergee-dialoog en die weergawe-wagry het WebGPU nodig (sonder dit gebruik hoë gehalte die WebGL-padvolger). Die lewe-aansig gebruik WebGPU waar die blaaier dit het, anders WebGL 2. Hulle is hier net op 'n sagteware-grafiese vervanger getoets, nog nie op regte grafiese kaarte nie. Die lewe-aansig het geen verstrooiing of deling in BimCraft nie (ModelCraft s'n het hulle).
- Weergee van 'n opgeneemde loop as 'n video is nie in BimCraft ingebou nie.
- Ontwerpkontroles: 'n I-vorm waarvan die IFC-profielnaam nie 'n W-, S-, IPE-, HEA- of HEB-grootte is nie (of waarvan die grootte daarvan verskil), word as gesweis geneem en kom terug as "nie nagegaan nie". Dit geld ook vir buise, hoeke, kanale, slanke dele en wringing. Geen ingenieur het die kontroles nog nagesien nie.
- Geteekende elemente kan nie een vir een gekopieer, gedraai, gespieël of gerangskik word nie ('n hele vlak kan gekopieer word). Daar is geen gesplete muur, Teks-hulpmiddel of gordynmuur nie. 'n Muur wat op 'n boonste vlak aan 'n muur van 'n laer vlak raak, word nie in daardie muur se 3D-liggaam gesny nie, en skedules lys 'n boonste-vlak-opening onder sy eie muur se vlak.
- Families: 'n biblioteek van families wat tussen projekte gedeel word, is nie gebou nie. Families en gekopieerde vlakke is nog nie in ander BIM-programme oopgemaak nie.
- MEP: toerusting is generies (geen vervaardigersdata nie). T-stukke en reduseerders op staalspoele is generies, nie uit die ASME B16.9-tabel nie. Poorte van biblioteekitems wat vanaf die {{ui:Biblioteek}}-oortjie geplaas is, word nie in die IFC geskryf nie. Niks is deur 'n ingenieur nagesien nie.
- Die Plant-byvoeging kan nog nie 'n geroeteerde lope in die model teken nie, spoele op sy isometrieë nommer nie, of die uitleg van toerusting wat uit die biblioteek geplaas is, nagaan nie.
- Plante uit CivilCraft se plantbiblioteek kan nog nie vanaf BimCraft se {{ui:Biblioteek}}-oortjie geplaas word nie.
- Energie: geen uurlikse simulasie nie, geen ISO 52016-1-metode nie en geen klimaatlêers nie. Bates: geen gehoste tweeling wat lesings hou of waarskuwings stuur terwyl BimCraft toe is nie.
- Skanderingsregistrasie is op toetsskanderings probeer, nog nie op 'n regte skandeerder se skanderingstel nie. E57-lêers open steeds tot 6 miljoen punte en 512 MB.
- Projekbundels open in BimCraft alleen (die ander programme neem 'n uitleg deur **Maak oop in …**). Bundels en die twee-programpakket is teen vervangers getoets, nog nie met Archicad of Revit self nie.

Alles anders is in [Wat nog nie gebou is nie](topic:not-built-yet).
