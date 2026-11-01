---
title: Mis on uut versioonis 0.7
summary: BimCraft lisab seinad mitme tasandi kaupa ja „Kopeeri see tasand“, seinad PDF-idest ja skannidest, oma seinakoosted, rikkalikumad pered, MEP-seadmed portidega, põrkekomplektid, avad ja torude spoolid, varadokumendid, COBie ja anduri näidud, taevas, päike, päevavalgus ruudustikul ning küte- ja jahutuskoormused, skannide registreerimise, reaalajavaate ja kiirte jälgimise graafikakaardil, STEP ja USD, teegi variandid ning veel abi tehisintellekti assistentidele.
keywords: mis on uut, mis on uut, väljalaskemärkmed, muudatuslogi, muutused, 0.7, versioon, uued funktsioonid, seinad läbi tasandite, kopeeri see tasand, pdf, skaneering, jälgimine, seinad plaanidest, seinakoosted, kihid, tuum, membraan, viitemõõdud, materjaliteek, kuvaühikud, vaaderežiim, karkass, talad, pered, parameetrid, plaanisümbol, kuumad punktid, kordamine, detailsuse tase, pesastatud pered, csv suurused, elemendi kohta, seadmed, pordid, ühendused, vahekaugused, avad, spoolid, spooli lehed, keevisõmblus, kanali lõikenimekiri, dokumendid, cobie, andurid, mqtt, reaalajavoog, vertikaalne taevakomponent, päikesekoormus, päevavalguse ruudustik, küte, jahutus, koormused, U-väärtus, skannide registreerimine, icp, e57, reaalajavaade, kiirte jälgimine, webgpu, müra eemaldamine, füüsikaline taevas, valguse segamine, renderdusjärjekord, sinu masin, step, usd, projektipakk, mahu arendamine, variandid, assistendid, lisandmooduli api, taim, elekter, disainikontrollid
from: 5c27b80a
---

See on, mis BimCraft 0.7-s võrreldes versiooniga 0.6 muutus. Loend on rühmitatud valdkondade kaupa, kõige olulisemad esimesena.

## Uus

### Hoone joonistamine

- **Seinad mitme tasandi kaupa.** Seinatööriista kõrguste loend pakub **Kuni** mis tahes tasandit ülal, nagu omadused teevad valitud seina puhul. Vahepealsete tasandite plaanid näitavad seina heledamalt, seal olevad ruumid sulguvad selle vastu ning uksi ja aknaid saab sinna paigutada nendelt plaanidelt. **Läbib** omaduste paneelis nimetab tasandid, mida see läbib. Vaata [Seina, ukse või akna muutmine](topic:change-a-wall-or-door#change-a-wall).
- **Kopeeri see tasand.** {{ui:Kopeeri see tasand…}} tasandite paneelis joonistab tasandi seinad koos nende uste ja akendega, põrandad ja laed uuesti teisele tasandile või uuele tasandile peale ühe tagasivõtmise sammuna. Ruumid ilmuvad iseenesest. Vaata [Seinte joonistamine](topic:draw-walls#levels).
- **Seinad PDF-ist või skaneeringust.** {{ui:Versioon}} › {{ui:Joonisest…}} võtab nüüd PDF-i (joonte või selle sees oleva skaneeringuga) või skanneeritud plaani (PNG, JPEG, TIFF, mitmel leheküljel). Iga lehekülg muutub tasandi seinteks, uksteks, akendeks ja ruumideks, ning lehekülg jääb plaani alla. Jälgimine ei kasuta võrku ega treenitud mudelit ja tulemus on see, mida jooned andsid. Kontrolli iga tasandit selle lehe järgi. Vaata [Seinad plaanikomplektist](topic:walls-from-plans).
- **Oma seinakoosted.** {{ui:Seinakoosted…}} koostab seinatüübi kihi kaupa, koos südamiku, õhuvahede ja membraanidega, ning näitab mõõtudega eelvaadet. {{ui:Materjaliteek…}} hoiab projekti materjalid IFC-s. {{ui:Märgista}} › {{ui:Viitemõõt}} mõõdab pindadeni ja südamiku joonteni ning järgib seinu, kui need muutuvad. Kogukonna kaasautor Doc (drsurfbum). Vaata [Seinakoosted ja viitemõõdud](topic:wall-assemblies).
- **Kuvaühikud ja vaate juhtimine.** {{ui:Ühikud}} tööriistaribal näitab pikkusi jalgades ja tollides, tollides, kümnendjalgades, millimeetrites, sentimeetrites või meetrites: mõõtudes, loenditel, koordinaatides, mõõtmistes ja lõigetes. {{ui:Plaan}}, {{ui:Jaga}} ja {{ui:3D}} asuvad tööriistaribal. Jaotust saab lohistada (või liigutada klaviatuuriga). {{ui:Varjutatud}}, {{ui:Servad}} ja {{ui:Traatmudel}} asuvad vaatekuubi kõrval. Katuse kalle, räästalaud ja räästaalune muudavad valitud katust kohe. Kogukonna kaasautor Joel (yisraelk). Vaata [Seinte joonistamine](topic:draw-walls#levels).
- **Põrandatalad vahe järgi.** {{ui:Karkass}} saab koostada tehispuidust talad (esialgsed) ning saetud puidu, valides väikseima loetletud seeria ja sügavuse, mis ulatub vahemaani 16" või 24" keskelt, mõlemas suunas. Need lähevad IFC-sse ja lõikenimekirja. Soovitus valmistaja avaldatud tabelist, mitte insenertehnika. Samuti Joelilt. Vaata [Seinte, põrandate ja katuste karkass](topic:framing).
- **Rohkem elektriseadmeid.** {{ui:Elekter}} lisab andme-, telefoni- ja audiovideopistikud, valikulüliti, taimeri, termostaadi, suitsu- ja kuumusandurid, käivitusnupu ja sireeni, ventilaatori, energiamõõtja ja alajaotuskilbi, igaüks oma IFC-klassiga. Vaata [Elektriplaan](topic:electrical-plan).

### Pered

- **Pered teevad rohkem.** Parameetrid võivad olla täisarvud, tekst, materjal, pliiats või täide. Perekond saab joonistada oma plaanisümboli, korrata tahket, märkida osad jämedama detailsuse taseme jaoks, hoida teisi perekondi (näiteks laua jala) ning omada kuumi punkte, mida lohistad, ka paigutatud elemendil plaanil. Suurused tulevad CSV-tabelist. Parameetrid, mis on märgitud **Elemendi kohta**, lubavad kahel samas suuruses ukse erineda. Vaata [Perekonna redigeerimine](topic:family-editor#plan-symbol) ja [Pered ja nende suurused](topic:families#sizes-from-a-table).

### Torud, õhukanalid ja seadmed

- **Seadmed portidega.** {{ui:Versioon}} › {{ui:Seadmed}} paigutab üldise õhutöötleja, toruventilaatori, pumba, katla, veesoojendi, lõppseadme, hajuti, restiku või paagi. Mõõtmed määravad sinu sisestatud väärtused ning torude ja kanalite ühendused on portidena. Iga seade salvestatakse oma IFC-klassina koos IFC-portidega. Vaata [MEP-seadmed portidega](topic:mep-equipment).
- **Ühendatud lõigud.** Port alustatud toru või kanal võtab endale suuruse ja süsteemi ning jääb sellele kinnitatuks: liiguta pumpa ja selle toru liigub kaasa. {{ui:Kontrolli ühendusi}} loetleb avatud pordid, lahtised otsad, suuruse ja süsteemi mittevastavused ning lõigud, mida ükski allikas ei toida. Vaata [Torude ja kanalite ühendamine seadmetega](topic:mep-connections).
- **Torud ja kanalid konstruktsiooni vastu.** {{ui:Põrkekontroll}} sisaldab valmis komplekte ning {{ui:Torud ja õhukanalid × konstruktsioon}} annab need ühe klõpsuga. {{ui:Kontrolli vahekaugusi}} kasutab iga lõigu isolatsiooni ja vahet, mille sisestad. {{ui:Vajalikud avad}} loetleb kohad, kus lõigud läbivad seinu ja plaate, CSV-na ja BCF-probleemidena. Midagi ei lõigata. Vaata [Torude ja kanalite kontroll konstruktsiooni vastu](topic:mep-against-structure).
- **Terastorude spoolid.** Teras-lõik lõigatakse nummerdatud spoolideks pikima pikkuse järgi ja {{ui:Montaažikeevis}} kohtades, mille paigutad. {{ui:Spoolide lehed (PDF)}} annab lehe iga spooli kohta koos isomeetrilise vaate, lõikepikkuste, liitmike, keevisõmblustega ja materjalinimekirjaga. {{ui:Õhukanali lõikenimekiri}} loetleb sirged kanalitükid. Vaata [Terastorude spoolid ja spoolide lehed](topic:pipe-spools).

Need on joonestus- ja koordineerimisabivahendid, mille suuruse määrab insener. Voolusid, rõhke ega tasakaalustamist ei arvutata.

### Hoone haldamine

- **Dokumendid varade kohta.** {{ui:Varad}} vahekaart seob kasutusjuhendid, garantiid, fotod ja joonised varaga faili nime järgi IFC kõrval või veebiaadressi kaudu. IFC-sse läheb ainult link. Vaata [Dokumendid](topic:assets-and-maintenance#documents).
- **COBie-tabel.** {{ui:Salvesta COBie-na (.xlsx)}} kirjutab COBie 2.4 üleandmise töövihiku. Tagasi loetud COBie töövihik loetleb iga muudatuse enne ühte klõpsu {{ui:Rakenda}}. Seda pole veel COBie valideerijaga läbi käinud. Vaata [COBie-tabel](topic:assets-and-maintenance#cobie-spreadsheet).
- **Anduri näidud ja reaalajavood.** Ava CSV näitudega või {{ui:Ühenda}} otse brauserist oma MQTT-maakleri või aadressiga, millele su hoonesüsteem vastab. Iga vara näitab viimast näitu ja graafikut, on mudelil värvitud ning märgitakse, kui väljaspool IFC-sse salvestatud piire. Näidud jäävad vahekaardile. Paroole ei salvestata kunagi. Vaata [Anduri näidud](topic:assets-and-maintenance#sensor-readings) ja [Reaalajas näidud](topic:assets-and-maintenance#live-readings).

### Päevavalgus ja energia

- **Taevas ja päike igal aknal.** {{ui:Päevavalgus}} vahekaart annab igale aknale selle vertikaalse taevakomponendi ja takistusnurga. Päikest saab jälgida läbi kuupäeva funktsiooniga {{ui:Päike läbi akende kuupäeval}}. {{ui:Päevavalguse faktor ruudustikul}} arvutab iga ruumi kohta, joonistatuna selle plaanile. Vaata [Iga akna vertikaalne taevakomponent](topic:daylight-factor#vertical-sky-component-of-each-window).
- **Küte- ja jahutuskoormused.** {{ui:Küttekoormused ja jahutuskoormused}} arvutab iga ruumi soojuskao, tema kütte aasta jooksul kraadpäevade järgi ning jahutuse tipu, mudelis piiravate pindade ja iga elemendi U-väärtuse järgi. Seal sisestatud U-väärtus kirjutatakse IFC-sse. Vaata [Küte- ja jahutuskoormuste hindamine](topic:heating-and-cooling-loads).

Mõlemad on disainiabivahendid avaldatud meetoditega, mitte nõuetele vastavuse arvutused, ning iga paneel ütleb seda.

### Skaneeringud

- **Mitme skaneeringu registreerimine.** {{ui:Registreeri skannid…}} (alustuspaneelil või {{ui:Näita}} all) paigutab skaneeringud ühte raami valitud punktipaaride või sisestatud sihtpunktide järgi. Seejärel täpsustab neid ICP-ga, kõigepealt punkt-punkti ja siis punkt-tasand meetodil. Registreering salvestatakse väikese projektifailina ning registreeritud pilv kirjutatakse ühe LAS- või E57-failina. Vaata [Mitme skaneeringu registreerimine üheks](topic:register-scans).

### Pildid ja reaalajavaade

- **Reaalajavaade.** {{ui:Reaalajavaade}} tööriistaribal näitab mudelit reaalajalises ilmes 3D-vaate kõrval. See järgib 3D-vaadet ja iga muudatust koos {{ui:Kõnni}}, kellaaja ja kuuga. {{ui:Reaalajavaade uues aknas}} paneb selle teisele ekraanile. Vaata [Reaalajavaade](topic:live-view).
- **Kiirte jälgimine graafikakaardil.** WebGPU-ga {{ui:Renderda}} › {{ui:Kvaliteetne (kiirte jälgimine)}} käivitab CadCrafti enda kiirte jälgija graafikakaardil. Seda saab peatada ja {{ui:Jätka}}, ning lõpus eemaldatakse müra. Ilma WebGPU-ta kasutatakse WebGL-kiirte jälgijat nagu varem. Vaata [Kvaliteetne](topic:render#high-quality).
- **Rohkem renderdusdialoogis** (graafikakaardil, seega vajab WebGPU-d): füüsikaline taevas ja taevapildid, IES-valgusprofiilid, kaamera f-arvuga, terava ala sügavus, kahepunktiline perspektiiv, valge tasakaal ja 360° panoraamid, lõpliku pildi toonimine, valguse segamine ja renderdusjärgsed renderelemendid, udu, suits ja kaustika, salvestamine 16-bitise PNG-, EXR- või renderdusfailina ning renderdusjärjekord. Vaata [Taevad ja valgusprofiilid graafikakaardil](topic:render#skies-and-light-profiles-on-the-graphics-card) ja [Renderdusjärjekord](topic:render#the-render-queue).
- **Sinu masin.** {{ui:Sätted}} › {{ui:BimCraft}} › {{ui:Renderdamine}} › {{ui:Sinu masin}} näitab graafikat, protsessori tuumi ja mälu, mida see brauser rakendusele lubab, ning taset, millest renderdamine alustab. Vaata [Mida sinu masin renderdab](topic:your-machine).

### Failid ja teised rakendused

- **STEP-failid avanevad.** `.step` või `.stp` detail, seade või tarnija mudel (AP203, AP214, AP242) avaneb väikese IFC-mudelina. Iga tahke on element, mida saab kontrollida, lõigata, mõõta ja salvestada IFC-na. Värve ja koostedetailide nimesid ei loeta veel. Vaata [BimCraftis avatavad ja salvestatavad failid](topic:files#what-it-opens).
- **USD-eksport.** {{ui:USD}} tööriistaribal kirjutab avatud mudelid `.usda`, `.usdc` või `.usdz` vormingus. Need on paigutatud asukoha, hoone, korruse ja eriala järgi, iga elemendi IFC-klassi, GlobalId ja omadustega. Vaata [Mudeli eksportimine USD-na](topic:usd).
- **Mahu CivilCraftist.** CivilCraft'i saidivaatest saadetud hoonemahu uuringunumbrid kuvatakse omadustes. {{ui:Arenda seda mahtu}} koostab sellest kõigil tasanditel seinad ja põranda ühe tagasivõtmise sammuna. Vaata [Hoonemahu arendamine saidiuuringust](topic:develop-a-mass).
- **Variantidega teegiesemed.** Üksus, mis tuleb mitme variandina, saab valiku {{ui:Variant}} vahekaardil {{ui:Teek}}. Paigutatud element säilitab oma variandi IFC-s. {{ui:Vaheta üksus…}} loetleb teised variandid ning kopeerimised ja uuendused säilitavad selle. Vaata [Variantidega teegiüksuse paigutamine ja vahetamine](topic:library-variants).
- **Projektipaketid kaustas.** {{ui:Ava kaust}} loetleb `.ccbundle.zip` failid jaotises {{ui:Projektipakid}}. Iga paketi paigutusel on **Ava rakenduses …**: PDF avaneb MarkupCraftis ja DWG CadCraftis, uuel vahekaardil. Vaata [Paigutuse avamine](topic:open-project-bundle#open-a-layout).

### Assistendid ja lisandmoodulid

- **Veel tehisintellekti assistentidele.** Assistent saab nüüd nimetada elemente ja määrata omaduste väärtusi, teisaldada ja kustutada elemente, muuta seinu, uksi ja aknaid, eksportida USD-d ning renderdada pildi või käivitada renderdusjärjekorra. Iga muudatus on üks tagasivõtmise samm. Vaata [Lase tehisintellekti assistendil mudeliga töötada](topic:assistants).
- **Lisandmoodulid saavad mudelisse ehitada.** Lisandmooduli API 1.1 lubab lisandmoodulil teha mudelis muudatuse ühe tagasivõtmise sammuna (see liigub Live TeamWorki kaudu), lugeda mudelit ning lugeda toru- ja kanalilõike, porte, seadmeid ja spoole.
- **Taime lisandmoodul** (väljas, kuni lülitad selle sisse {{ui:Sätted}} › {{ui:Üldine}} › {{ui:Lisandmoodulid}}): torude spetsifikatsioonid kontrollituna lõikude järgi, lõikude isomeetrilised joonised SVG- ja DXF-vormingus koos materjalinimekirjaga, üldised tehnoloogilised seadmed düüsidega mudelisse paigutatud, marsruuter kahe pordi vahel ning tehase paigutuse kontroll. See on joonestusabivahend, mitte insenertehniline heakskiit, ning selle sõnad on ainult inglise keeles.

## Muudetud

- **Väike maja sülearvutil.** Sülearvutil alustab BimCraft ainult plaaniga. {{ui:Joonista}} riba on kitsas paneel, mille kõrval on plaan. Plaan ja 3D-vaade tulevad tagasi, kui joonis neist välja läheb. 3D-vaade raamib kogu maja kitsas paanis ning uksed ja aknad valitakse enne mõõtjooni.
- **Pildi salvestamine.** Renderdusdialoogis on **Salvesta PNG** nüüd {{ui:Salvesta}}, kõrval {{ui:Salvesta nimega}} teistele vormingutele. Vaata [Pildi salvestamine](topic:render#save-the-picture).
- **Analüüsi vahekaardil** on {{ui:Disainikontrollid}} plokk. See koostab ASCE 7 või EN 1990 koormuskombinatsioonid sinu juhtumite jaoks ning kontrollib iga valtsitud terasprofiili (W, S, IPE, HEA või HEB suurus oma profiilinime ja suuruse järgi) vastavalt AISC 360 või EN 1993-1-1. Näidatakse, kui palju selle kandevõimest kasutatakse. See on abivahend, kuni insener on selle üle vaadanud. Keevitatud profiilid ja muud lõigud ütlevad „not checked“ (ei ole kontrollitud). Vaata [Disainikontrollid](topic:frame-analysis#design-checks).

## Parandatud

- Ümbertegemine pärast sammu, mis lõi uue perekonna suuruse, ebaõnnestus teatega „suurus puudub“. Iga samm teeb nüüd ümbertegemisel samad IFC GlobalId-d, nii et ümbertegemine töötab perekondadele ja kõigile muudele muudatustele.
- Kui kaks inimest salvestasid sama perekonna (Live TeamWorki seansis või kahes aknas), asendas teine salvestus vaikselt esimese muudatuse. Nüüd keeldub see ja ütleb, kuidas näha nende muudatust ja teha oma uuesti.
- Mudel USA mõõdistusjalgades loeti kui 0.3048 m jalg, mitte 0.3048006096 m, mis nihutas iga georefereeritud IFC-d USA jalgades kaardil.
- Perekonnaredaktor: selle sulgemine ei vii enam klaviatuuri fookust lehele, selle Salvesta jääb telefonis silma ette ning selle väljad ei pane telefoni enam suumima.

## Kõigis rakendustes

- **Ühikud.** {{ui:Sätted}} › {{ui:Üldine}} › {{ui:Ühikud}} on iga pikkuse, pindala, mahu, nurga ja kalde jaoks eraldi loend, täpsete suurustega, mis ühikute definitsioonidest tulevad (USA mõõdistusjalg on oma ühik). Lülita välja ühikud, mida ei kasuta, ja need lahkuvad ühikuloenditest. Märgi üks tärniga ja uus töö algab selles. Fail säilitab alati oma ühiku. BimCraftis järgib tööriistariba loend {{ui:Ühikud}} lülitite järgi. Tärn määrab kuvaühikud, kuni valid need tööriistaribal (su varasem valik säilib). Joonistustööriistade pikkusekastid võtavad vastu mis tahes ühiku märgi, näiteks `3.5 m` või `10 US ft`. Vaata [Ühikud, sisestatud väärtused ja ühikuloendid](common:unit-lists).
- **Tihedam paigutus ja paneelid, mis end korrastavad.** {{ui:Sätted}} › {{ui:Üldine}} › {{ui:Paigutuse tihedus}} › {{ui:Tihe}} mahutab ekraanile rohkem (puuteekraanid ja telefonid säilitavad oma suured nupud). Igal külgpaneelil on õhuke pealkirjariba. Lohista seda, et paneel dokkida või vabalt hoida. Lohista teise paneeli ribale, et jagada üks raam vahelehtedena. Kinnita, et ta libiseks servale, või peida ja too servalt tagasi. Vaata [Paneelide paigutamine](common:arrange-panels#make-the-layout-denser).
- **Dialoogid liiguvad.** Lohista dialoogi pealkirjaribast joonise eest eemale. See tuleb tagasi sinna, kust lahkusid. Pealkirjariba topeltklõps tsentreerib selle uuesti. Vaata [Dialoogi liigutamine](common:arrange-panels#move-a-dialog).
- **Retseptid tehisintellekti assistentidele.** Kümme töötatud päringut sinu enda assistendile (joonise korrastamine, komplekti printimine, jooniste kontrollimine, mudelile küsimuste esitamine, koguste kokkuvõte, detailivariandi proovimine…). Igaüks koos kutsutavate tööriistade ja vajalike õigustega. Igaüks on meie testidega uuesti käivitatud. Rakendused ei sisalda tehisintellekti. Vaata [Retseptid tehisintellekti assistentidele](common:assistants-recipes).
- **Keeled.** **Português (Portugal)** on uus valik {{ui:Sätted}} › {{ui:Üldine}} › {{ui:Keel}} all. See, **Português (Brasil)**, **Español (México)** ja **Bahasa Indonesia** on nüüd kõik rakenduse sõnad, kuid mustanditena, mida pole veel emakeelne kasutaja üle vaadanud. Abiteemad on inglise keeles, mõned hispaania keeles.
- **CadCraft Studio** ütleb, miks värskenduse kontroll ebaõnnestus (sinu süsteemi jaoks pole veel faili, võrku pole, allkiri on vale), mitte ainult „Valmis“. See ei too enam tagasi Mis on uut kaarti, mille sulgesid, kuni on uuem väljalase.

## Pole veel selles versioonis

- **0.7 pole koodiga allkirjastatud.** Allkirjastamine ja Microsoft Store'i pakk lükkus versiooni 0.8, sest sertifikaadi kinnitus pole veel valmis. Kontrolli iga faili kõrval olevat SHA-256 summat aadressil getcadcraft.com/download. Windowsis, kui SmartScreen peatab installeri, vali {{ui:Rohkem teavet}}, siis {{ui:Käivita siiski}}. Macis esimesel korral klõpsa CadCraft Studiot paremklõpsuga ja vali {{ui:Ava}}. CadCraft Studio ei ole veel rakenduste poes ega ole iPadi ega iPhone'i versiooni.
- Ühikute {{ui:Ühikud}} nurga- ja kaldeloendid on salvestatud, kuid ükski lahter neid veel ei loe.
- Kiirte jälgimine graafikakaardil, renderdusdialoogi lisad ja renderdusjärjekord vajavad WebGPU-d. Ilma selleta kasutab kõrge kvaliteet WebGL-kiirte jälgijat. Reaalajavaade kasutab WebGPU-d seal, kus brauser seda toetab, muidu WebGL 2-d. Neid on testitud siin ainult tarkvaralise graafikakaardi asendajal, mitte veel päris graafikakaartidel. Reaalajavaates BimCraftis ei ole hajutamist ega jagamist (ModelCraft'i omal on).
- Salvestatud jalutuskäigu renderdamine videoks ei ole BimCraftis sisse ehitatud.
- Disainikontrollid: I-profiil, mille IFC-profiilinimi ei ole W, S, IPE, HEA ega HEB suurus (või mille suurus neist erineb), võetakse keevitatuna ja tuleb tagasi tekstiga „not checked“. Nii on ka torude, nurkade, kanalite, õhukeste osade ja väänete puhul. Ükski insener pole kontrolle veel üle vaadanud.
- Joonistatud elemente ei saa ükshaaval kopeerida, pöörata, peegeldada ega massiiviks paigutada (tervet tasandit saab kopeerida). Seina jagamist, Teksti tööriista ega kardinaseina ei ole. Ülemisel tasandil seinas, mis kohtub madalama tasandi seinaga, ei lõigata seda seina 3D-kehasse. Loendid loetlevad ülemise tasandi ava selle seina enda tasandi all.
- Perekondade raamatukogu, mida jagada projektide vahel, ei ole veel loodud. Perekondi ja kopeeritud tasandeid ei ole veel avatud teistes BIM-programmides.
- MEP: seadmed on üldised (tootjate andmeid ei ole). Tee-liitmikud ja reduktorid terasspoolidel on üldised, mitte ASME B16.9 tabelist. {{ui:Teek}} vahekaardilt paigutatud raamatukogu üksuste pordid ei ole IFC-sse kirjutatud. Keegi insener pole midagi üle vaadanud.
- Taime lisandmoodul ei saa veel joonistada suunatud lõiku mudelisse, nummerdada spoole oma isomeetrilistel joonistel ega kontrollida raamatukogust paigutatud seadmete paigutust.
- Taimi CivilCraft'i taimeraamatukogust ei saa veel paigutada BimCraft'i vahekaardilt {{ui:Teek}}.
- Energia: ei ole tunnipõhist simulatsiooni, ISO 52016-1 meetodit ega kliimafaile. Varad: ei ole hostitud kaksikut, mis hoiaks näite alles või saadaks hoiatusi, kui BimCraft on suletud.
- Skaneeringute registreerimist on proovitud katseskaneeringutel, mitte veel päris skanneri skaneeringukomplektil. E57-failid avanevad veel kuni 6 miljoni punkti ja 512 MB.
- Projektipaketid avanevad ainult BimCraftis (teised rakendused võtavad paigutuse vastu käsuga **Ava rakenduses …**). Paketid ja kahe programmi komplekt on testitud asendajatega, mitte veel Archicadi ega Revitiga endaga.

Kõik muu on teemas [Mida ei ole veel ehitatud](topic:not-built-yet).
