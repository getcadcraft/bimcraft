---
title: Mis on uut versioonis 0.7 (varasem)
summary: BimCraft lisab seinad läbi mitme tasandi ja Kopeeri see tasand, seinad PDF-idest ja skannidest, sinu enda seinakoosted, rikkalikumad perekonnad, MEP-seadmed portidega, põrkekomplektid, avad ja torustiku spoolid, varadokumendid, COBie ning anduri näidud, taevas, päike, päevavalgus ruudustikul ja küte- ning jahutuskoormused, skaneeringute registreerimise, reaalajavaate ja kiirte jälgimise graafikakaardil, STEP ja USD, teegi variandid ning rohkem AI-assistentidele.
keywords: versioon 0.7, varasem väljaanne, väljaande märkmed, muudatuste logi, muudatused, 0.7, versioon, uued funktsioonid, seinad tasandite kaupa, kopeeri see tasand, pdf, skann, jälgi, seinad plaanidest, seinakoosted, kihid, südamik, membraan, viitemõõdud, materjaliteek, ühikute kuvamine, vaate stiil, karkass, talad, perekonnad, parameetrid, plaanisümbol, kuumad punktid, korduv, detailsusaste, pesastatud perekonnad, csv suurused, elemendi kohta, seadmed, pordid, ühendused, vahekaugused, avad, spoolid, spooli lehed, montaažikeevis, õhukanali lõikenimekiri, dokumendid, cobie, andurid, mqtt, reaalajas voog, vertikaalne taevakomponent, päikesekiirgus, päevavalguse ruudustik, küte, jahutus, koormused, u-väärtus, registreeri skannid, icp, e57, reaalajavaade, kiirte jälgimine, webgpu, müra eemaldamine, füüsiline taevas, valguste segamine, renderdusjärjekord, sinu masin, step, usd, projektipakk, mahu arendamine, variandid, assistendid, lisandmooduli API, taim, elekter, disainikontrollid
from: a638080d
---

See on see, mis muutus BimCraftis 0.7 võrreldes versiooniga 0.6. Loend on rühmitatud valdkonna järgi, kõige olulisem ees.

## Uus

### Hoone joonistamine

- **Seinad läbi mitme tasandi.** Seinatööriista kõrguste loend pakub **Kuni** iga kõrgemat tasandit, nagu Omadused teevad valitud seina puhul. Vahepealsete tasandite plaanid näitavad seina heledamalt, seal olevad ruumid sulguvad selle vastu ning uksi ja aknaid saab sinna paigutada nendelt plaanidelt; **Läbib** Omadustes nimetab tasandid, mida see läbib. Vt [Muuda seina, ust või akent](topic:change-a-wall-or-door#change-a-wall).
- **Kopeeri see tasand.** {{ui:Kopeeri see tasand…}} tasandite paneelis joonistab tasandi seinad koos oma uste ja akendega, selle põrandad ja laed uuesti teisele või uuele tasandile peale, ühe tagasivõtmise sammuna; ruumid ilmuvad iseenesest. Vt [Joonista seinad](topic:draw-walls#levels).
- **Seinad PDF-ist või skannist.** {{ui:Versioon}} › {{ui:Joonisest…}} võtab nüüd PDF-i (joonistus joontena või sees olev skann) või skannitud plaani (PNG, JPEG, TIFF, mitu lehte): iga leht saab ühe tasandi seinad, uksed, aknad ja ruumid, leht hoitud oma plaani all. Jäljendus ei kasuta võrku ega treenitud mudelit ning tulemus on see, mida jooned andsid: kontrolli iga tasandit selle lehe vastu. Vt [Seinad plaanikomplektist](topic:walls-from-plans).
- **Sinu enda seinakoosted.** {{ui:Seinakoosted…}} koostab seintüübi kiht kaupa, südamiku, õhuvahede ja membraanidega ning mõõdetud eelvaatega; {{ui:Materjaliteek…}} hoiab projekti materjale IFC-s; {{ui:Märgista}} › {{ui:Viitemõõt}} mõõdab pindadeni ja südamiku joonteni ning järgib seinu, kui need muutuvad. Kogukonnaliikme Doc (drsurfbum) panus. Vt [Seinakoosted ja viitemõõdud](topic:wall-assemblies).
- **Kuvaühikud ja vaate juhtimine.** {{ui:Ühikud}} tööriistaribal näitab pikkusi jalgades ja tollides, tollides, kümnendjalgades, millimeetrites, sentimeetrites või meetrites: mõõtmetes, loendites, koordinaatides, mõõtmistes ja lõigetes. {{ui:Plaan}}, {{ui:Jaga}} ja {{ui:3D}} asuvad tööriistaribal, jagamist saab lohistada (või liigutada klaviatuuriga), {{ui:Varjutatud}}, {{ui:Servad}} ja {{ui:Traatmudel}} on vaate kuubi kõrval ning katuse kalle, äärelaud ja alumine serv muudavad valitud katust kohe. Kogukonnaliikme Joel (yisraelk) panus. Vt [Joonista seinad](topic:draw-walls#levels).
- **Põrandatalad ulatuse järgi.** {{ui:Karkass}} võib paigutada ka insenertalasid (eelnev) nagu saetud puidu, valides väikseima loendatud seeria ja sügavuse, mis ulatuse katab, 16" või 24" telje tagant, kummaski suunas; need lähevad IFC-sse ja lõikenimekirja. See on soovitus tootja avaldatud tabelist, mitte inseneritöö. Samuti Joelilt. Vt [Karkassiga seinad, põrandad ja katused](topic:framing).
- **Rohkem elektriseadmeid.** {{ui:Elekter}} lisab andme-, telefoni- ja audio-videopistikud, valikulüliti, taimeri, termostaadi, suitsu- ja kuumusandurid, käivituspaneeli ja sireeni, ventilaatori, energiamõõtja ja alamjaotuskilbi, igaüks oma IFC-klassiga. Vt [Elektriplaan](topic:electrical-plan).

### Perekonnad

- **Perekonnad teevad rohkem.** Parameetrid võivad olla täisarvud, tekst, materjal, pliiats või täide; perekond võib joonistada oma plaanisümboli, korrata tahket, märkida osi jämedamate detailsusastmete jaoks, hoida teisi perekondi (laud ja jalg) ning omada kuumi punkte, mida lohistad, ka paigutatud elemendil plaanil. Suurused tulevad CSV-tabelist ja parameetrid, mis on märgitud **Elemendi kohta**, lubavad kahel samas suuruses ukse erineda. Vt [Muuda perekonda](topic:family-editor#plan-symbol) ja [Perekonnad ja nende suurused](topic:families#sizes-from-a-table).

### Torud, kanalid ja seadmed

- **Seadmed portidega.** {{ui:Versioon}} › {{ui:Seadmed}} paigutab üldise õhutöötleja, reaktiivventilaatori, pumba, katla, veesoojendi, terminaliseadme, difuusori, rešeti või paagi, mõõtmetega, mille sisestad, ja torude ning kanalite ühendustega portidena. Igaüks salvestatakse oma IFC-klassina koos IFC-portidega. Vt [MEP-seadmed portidega](topic:mep-equipment).
- **Ühendatud jooksud.** Pordilt alustatud toru või kanal võtab selle suuruse ja süsteemi ning jääb sellele kinnitatuks: liiguta pumpa ja selle toru liigub kaasa. {{ui:Kontrolli ühendusi}} loetleb avatud pordid, lahtised otsad, suuruse ja süsteemi vastuolud ning jooksud, mida ükski allikas ei toida. Vt [Ühenda torud ja kanalid seadmetega](topic:mep-connections).
- **Torud ja kanalid konstruktsiooni vastu.** {{ui:Põrkekontroll}} pakub valmis komplekte ja {{ui:Torud ja õhukanalid × konstruktsioon}} ühe klõpsuga; {{ui:Kontrolli vahekaugusi}} kasutab iga jooksu isolatsiooni pluss vahet, mille sisestad; {{ui:Vajalikud avad}} loetleb kohad, kus jooksud läbivad seinu ja plaate, CSV-na ja BCF-probleemidena. Midagi ei lõigata. Vt [Kontrolli torusid ja kanaleid konstruktsiooni vastu](topic:mep-against-structure).
- **Terastoru spoolid.** Terasjooks lõigatakse nummerdatud spoolideks pikimal pikkusel ja {{ui:Montaažikeevis}} kohtades, mille paigutad; {{ui:Spoolide lehed (PDF)}} annab lehe iga spooli kohta koos isomeetrilise vaate, lõikepikkuste, liitmike, keevisõmbluste ja materjalide loendiga, ning {{ui:Õhukanali lõikenimekiri}} loetleb sirgeid kanaliosi. Vt [Terastoru spoolid ja spooli lehed](topic:pipe-spools).

Need on joonistus- ja koordineerimisabivahendid, mille mõõtmed määrab insener: voolusid, rõhke ega tasakaalustamist need ei arvuta.

### Hoone haldamine

- **Dokumendid varade kaupa.** Sakk {{ui:Varad}} seob käsiraamatud, garantiid, fotod ja joonised varaga faili nime kaudu IFC kõrval või veebiaadressi kaudu; IFC-sse läheb ainult link. Vt [Dokumendid](topic:assets-and-maintenance#documents).
- **COBie tabel.** {{ui:Salvesta COBie-na (.xlsx)}} kirjutab COBie 2.4 üleandmise töövihiku ja loetud COBie töövihik loetleb iga muudatuse enne ühte {{ui:Rakenda}}. Seda pole veel COBie valideerijaga läbi käinud. Vt [COBie tabel](topic:assets-and-maintenance#cobie-spreadsheet).
- **Anduri näidud ja reaalajas voogud.** Ava näitude CSV või {{ui:Ühenda}} otse brauserist oma MQTT-brokeri või aadressi külge, mida su hoone süsteem vastab: iga vara näitab viimast näitu ja graafikut, on mudelil värvitud ning märgitakse, kui väljaspool IFC-sse salvestatud piire. Näidud jäävad sakki; paroole ei salvestata kunagi. Vt [Anduri näidud](topic:assets-and-maintenance#sensor-readings) ja [Reaalajas näidud](topic:assets-and-maintenance#live-readings).

### Päevavalgus ja energia

- **Taevas ja päike igal aknal.** {{ui:Päevavalgus}} sakk annab igale aknale selle vertikaalse taevakomponendi ja takistusnurga, jälgib päikest läbi kuupäeva koos {{ui:Päike läbi akende kuupäeval}}-ga ning arvutab {{ui:Päevavalguse faktor ruudustikul}} iga ruumi kohta, joonistatuna selle plaanile. Vt [Iga akna vertikaalne taevakomponent](topic:daylight-factor#vertical-sky-component-of-each-window).
- **Küte- ja jahutuskoormused.** {{ui:Küttekoormused ja jahutuskoormused}} arvutab iga ruumi soojuskao, selle aasta kütte kraadpäevadest ja jahutuse tipu mudelis selle piiravate elementide ja iga elemendi U-väärtuse järgi; seal sisestatud U-väärtus kirjutatakse IFC-sse. Vt [Hinda küte- ja jahutuskoormusi](topic:heating-and-cooling-loads).

Mõlemad on projekteerimisabivahendid avaldatud meetodite järgi, mitte vastavusarvutused, ja iga paneel ütleb seda.

### Skannid

- **Registreeri mitu skannit.** {{ui:Registreeri skannid…}} (algpaneelil või {{ui:Näita}} all) paigutab skannid ühte raamistikku valitud punktipaaride või sisestatud sihtmärkide järgi, täpsustab neid ICP-ga punktist punkti ja siis punktist tasandini, salvestab registreerimise väikese projektifailina ning kirjutab registreeritud pilve ühe LAS- või E57-failina. Vt [Registreeri mitu skannit üheks](topic:register-scans).

### Pildid ja reaalajavaade

- **Reaalajavaade.** {{ui:Reaalajavaade}} tööriistaribal näitab mudelit reaalajalaadses vaates 3D-vaate kõrval, jälgib seda ja iga muudatust, koos kõnnitee, päevaaja ja kuuga; {{ui:Reaalajavaade uues aknas}} paneb selle teisele ekraanile. Vt [Reaalajavaade](topic:live-view).
- **Kiirte jälgimine graafikakaardil.** WebGPU-ga {{ui:Renderda}} › {{ui:Kvaliteetne (kiirte jälgimine)}} käitab CadCraft'i enda kiirte jälgijat graafikakaardil, saab peatuda ja {{ui:Jätka}}, ning lõpus eemaldatakse müra; ilma WebGPU-ta kasutatakse WebGL-i kiirte jälgijat nagu varem. Vt [Kvaliteetne](topic:render#high-quality).
- **Rohkem renderdusdialoogis** (graafikakaardil, seega vajab WebGPU-d): füüsiline taevas ja taevapildid, IES-valguse profiilid, kaamera f-numbriga, sügavusteravus, kahepunktiline perspektiiv, valge tasakaal ja 360° panoraamid, pildi lõplik toon, valguste segamine ja renderdi elemendid pärast renderdust, udu, suits ja kaustikad, salvestamine 16-bitise PNG-, EXR- või renderdusfailina ning renderdusjärjekord. Vt [Taevad ja valguse profiilid graafikakaardil](topic:render#skies-and-light-profiles-on-the-graphics-card) ja [Renderdusjärjekord](topic:render#the-render-queue).
- **Sinu masin.** {{ui:Sätted}} › BimCraft › {{ui:Renderdamine}} › {{ui:Sinu masin}} näitab graafikat, protsessori tuumi ja mälu, mida see brauser rakendusele lubab, ning taset, millest renderdamine algab. Vt [Mida sinu masin renderdab](topic:your-machine).

### Failid ja muud rakendused

- **STEP-failid avanevad.** `.step` või `.stp` detail, seade või tarnija mudel (AP203, AP214, AP242) avaneb väikese IFC-mudelina; iga tahke on element, mida saab kontrollida, lõigata, mõõta ja salvestada IFC-na. Värve ja koostu detailide nimesid veel ei loeta. Vt [Failid, mida BimCraft avab ja salvestab](topic:files#what-it-opens).
- **USD-eksport.** {{ui:USD}} tööriistaribal kirjutab avatud mudelid failidesse `.usda`, `.usdc` või `.usdz`, paigutatuna asukoha, hoone, korruse ja erialana, iga elemendi IFC-klassi, GlobalId ja omadustega. Vt [Ekspordi mudel USD-na](topic:usd).
- **Mass CivilCraftist.** CivilCraft'i asukohavaatest saadetud hoone mass näitab oma uuringunumbreid Omadustes, ja {{ui:Arenda seda mahtu}} ehitab sellest iga tasandi seinad ja põranda ühe tagasivõtmise sammuna. Vt [Arenda hoone massi asukohauuringust](topic:develop-a-mass).
- **Teegi üksused variantidega.** Üksusel, mis tuleb mitme variandina, on {{ui:Teek}} sakis valik {{ui:Variant}}; paigutatud element hoiab oma varianti IFC-s, {{ui:Vaheta üksus…}} loetleb teised variandid ning koopiad ja uuendused säilitavad selle. Vt [Paiguta ja vaheta teegi üksust, millel on variandid](topic:library-variants).
- **Projektipaketid kaustas.** {{ui:Ava kaust}} loetleb `.ccbundle.zip` failid {{ui:Projektipakid}} all ja igal paketi paigutusel on **{{ui:Ava rakenduses}} …**: PDF MarkupCraftis, DWG CadCraftis, uuel sakil. Vt [Ava paigutus](topic:open-project-bundle#open-a-layout).

### Assistendid ja lisandmoodulid

- **Rohkem tehisintellekti assistentidele.** Assistent saab nüüd elemente ümber nimetada ja omaduste väärtusi seada, elemente liigutada ja kustutada, seinu, uksi ja aknaid muuta, USD-d eksportida ning pilti või renderdusjärjekorda renderdada; iga muudatus on üks tagasivõtmise samm. Vt [Lase tehisintellekti assistendil mudeliga töötada](topic:assistants).
- **Lisandmoodulid saavad mudelisse ehitada.** Lisandmooduli API 1.1 laseb lisandmoodulil teha mudelis muudatuse ühe tagasivõtmise sammuna (see liigub Live TeamWork'is), lugeda mudelit ning lugeda toru- ja kanalijooksusid, porte, seadmeid ja spoole.
- **Taime lisandmoodul** (väljas, kuni lülitad selle sisse menüüs {{ui:Sätted}} › {{ui:Üldine}} › {{ui:Lisandmoodulid}}): torustiku spetsifikatsioonid kontrollitud jooksude vastu, jooksu isomeetrilised joonised SVG-na ja DXF-na koos materjalide loendiga, üldised protsessiseadmed ühenduspesadega mudelisse paigutatud, marsruuter kahe pordi vahel ja tehase paigutuse kontroll. Joonistusabi, mitte insenerikinnitus; selle sõnad on ainult inglise keeles.

## Muudetud

- **Esimene maja sülearvutil.** Sülearvuti suurusega ekraanil alustab BimCraft ainult plaaniga; joonistusriba on kitsas paneel, mille kõrval on plaan. Plaan ja 3D-vaade tulevad tagasi vaatesse, kui joonistus need välja jätab, 3D-vaade raamib kogu maja kitsas paanis ning uksed ja aknad valitakse enne mõõtejooni.
- **Pildi salvestamine.** Renderdusdialoogi **Salvesta PNG** on nüüd {{ui:Salvesta}}, ja selle kõrval on {{ui:Salvesta nimega}} teiste vormingute jaoks. Vt [Salvesta pilt](topic:render#save-the-picture).
- **Analüüsi sakk** sisaldab plokki {{ui:Kujunduskontrollid}}: see koostab ASCE 7 või EN 1990 koormuskombinatsioonid sinu juhtumite jaoks ja kontrollib iga valtsitud terasprofiili I-kuju (W, S, IPE, HEA või HEB suurus oma profiilinime ja suuruse järgi) vastavalt AISC 360 või EN 1993-1-1 järgi, näidates, kui palju on selle kandevõimest kasutusel. See on abivahend, kuni insener on selle üle vaadanud; keevitatud kujud ja muud lõigud ütlevad „ei kontrollitud“. Vt [Kujunduskontrollid](topic:frame-analysis#design-checks).

## Parandatud

- Pärast sammu, mis tegi uue perekonnasuuruse, ebaõnnestus uuesti tegemine („no size“). Iga samm teeb nüüd uuesti samad IFC GlobalId-d, nii et uuesti tegemine töötab perekondade ja kõigi muude muudatuste puhul.
- Kui kaks inimest salvestasid sama perekonna (Live TeamWork'i seansis või kahes aknas), asendas teine salvestus vaikselt esimese muudatuse. Nüüd keeldub see ja ütleb, kuidas näha nende muudatust ja teha oma uuesti.
- USA mõõdu-jalga mudel loeti 0,3048 m jala kohta 0,3048006096 m asemel, mis nihutas iga USA jalgades georefereeritud IFC-d kaardil.
- Perekonnaredaktor: sulgemine ei vii enam klaviatuuri fookust lehele, selle Salvesta jääb telefonis nähtavale ning väljad ei suurenda enam telefoni.

## Kõigis rakendustes

- **Ühikud.** {{ui:Sätted}} › {{ui:Üldine}} › {{ui:Ühikud}} on iga pikkuse, pindala, mahu, nurga ja kalde jaoks eraldi loend täpsete suurustega, mis ühikute definitsioonid annavad (USA mõõdu-jalg on oma ühik). Lülita välja ühikud, mida ei kasuta, ja need lahkuvad ühikute loenditest; märgi tärniga ja uus töö algab sellest. Fail hoiab alati oma ühikut. BimCraftis järgib tööriistariba loend {{ui:Ühikud}} lülitusi, tärn seab kuvaühikud, kuni valid need tööriistaribal (su varasem valik säilib), ning joonistustööriistade pikkuseväljad võtavad mis tahes ühiku tähise, nt `3.5 m` või `10 US ft`. Vt [Ühikud, sisestatud väärtused ja ühikute loendid](common:unit-lists).
- **Tihedam paigutus ja paneelid, mis end ära koristavad.** {{ui:Sätted}} › {{ui:Üldine}} › {{ui:Paigutuse tihedus}} › {{ui:Tihe}} mahutab ekraanile rohkem (puuteekraanid ja telefonid säilitavad suured nupud). Igal külgpaneelil on õhuke pealkiribariba: lohista seda, et paneel kinnitada või ujuma panna, viska teise paneeli ribale, et jagada üks raam sakkidena, kinnita see servale libisema või peida ja too servast tagasi. Vt [Paneelide paigutamine](common:arrange-panels#make-the-layout-denser).
- **Dialoogid liiguvad.** Lohista dialoogi pealkirjaribast joonisest eemale; see tuleb tagasi sinna, kus jätsid. Topeltklõps pealkirjaribal tsentreerib selle uuesti. Vt [Dialoogi liigutamine](common:arrange-panels#move-a-dialog).
- **Retseptid AI-assistentidele.** Kümme töötatud päringut sinu enda assistendile (korrasta joonistus, joonista komplekt, kontrolli joonistusi, küsi mudelilt, summeeri koguste arvestus, proovi detaili varianti …), igaüks koos tööriistadega, mida kutsub, ja lubadega, mida vajab; iga üks käitatakse meie testidega uuesti. Rakendused ei sisalda tehisintellekti. Vt [Retseptid AI-assistentidele](common:assistants-recipes).
- **Keeled.** **Português (Portugal)** on uus keel menüüs {{ui:Sätted}} › {{ui:Üldine}} › {{ui:Keel}}. See, **Português (Brasil)**, **Español (México)** ja **Bahasa Indonesia** on nüüd kõigi rakenduste sõnadega, mustanditena, mida emakeelne kasutaja pole veel üle vaadanud. Abiteemad on inglise keeles, mõned hispaania keeles.
- **CadCraft Studio** ütleb, miks uuendusekontroll ebaõnnestus (failid sinu süsteemile puuduvad, võrku pole, halb allkiri), selle asemel et ainult „Valmis“ öelda, ning ei too enam tagasi kaarti „Mis on uut“, mille suleesid, kuni on uuem väljalase.

## Pole selles versioonis veel

- **0.7 pole koodiga allkirjastatud.** Allkirjastamine ja Microsoft Store'i pakk liikusid versiooni 0.8, sest sertifikaadi kinnitus pole veel tulnud. Kontrolli iga faili kõrval olevat SHA-256 väärtust aadressil getcadcraft.com/download. Windowsis, kui SmartScreen peatab paigaldaja, vali {{ui:Rohkem teavet}}, seejärel {{ui:Käivita siiski}}. Macil vajuta esimesel korral CadCraft Studio'l parema klõpsuga ja vali {{ui:Avatud}}. CadCraft Studio pole veel ühegi rakenduste poes ega iPadi ega iPhone'i versiooni veel ole.
- Ühikute {{ui:Ühikud}} nurga- ja kalde loendid salvestatakse, kuid ükski kast neid veel ei loe.
- Graafikakaardi kiirte jälgimine, renderdusdialoogi lisad ja renderdusjärjekord vajavad WebGPU-d (ilma selleta kasutab kvaliteetne režiim WebGL-i kiirte jälgijat); reaalajavaade kasutab WebGPU-d, kus brauser seda toetab, muidu WebGL 2. Neid on testitud siin ainult tarkvaralise graafikakaardi asendajaga, mitte veel päris graafikakaartidel. Reaalajavaates pole BimCraftis hajutamist ega jagamist (ModelCraftis on).
- Salvestatud kõnnitee renderdamist videoks ei ole BimCraftis sisse ehitatud.
- Disainikontrollid: I-kuju, mille IFC-profiilinimi ei ole W, S, IPE, HEA ega HEB suurus (või mille suurus sellest erineb), võetakse keevitatuna ja tagastatakse „ei kontrollitud“, samuti torud, nurgad, kanalid, karged osad ja väänd. Ükski insener pole kontrolle veel üle vaadanud.
- Joonistatud elemente ei saa ükshaaval kopeerida, pöörata, peegeldada ega massiivina paigutada (tervet tasandit saab kopeerida); samuti pole lõigatavat seina, Tekstitööriista ega kardinaseina. Sein, mis kohtub madalama tasandi seinaga ülemisel tasandil, ei lõigata selle seina 3D-kehasse, ning loendid loetlevad ülemise tasandi avad selle seina enda tasandi all.
- Perekonnad: perekondade raamatukogu, mida jagatakse projektide vahel, ei ole valmis. Perekondi ja kopeeritud tasandeid pole veel avatud teistes BIM-programmides.
- MEP: seade on üldine (tootjate andmeid pole); teed ja redutsioonid terastorude spooladel on üldised, mitte ASME B16.9 tabelist; {{ui:Teek}} sakist paigutatud teegi üksuste pordid ei kirjutata IFC-sse; insener pole midagi üle vaadanud.
- Taime lisandmoodul ei saa veel joonistada marsruuditud jooksu mudelisse, nummerdada spoole oma isomeetrikal ega kontrollida {{ui:Teek}} sakist paigutatud seadmete paigutust.
- Taimi CivilCraft'i taimeraamatukogust ei saa veel paigutada BimCraft'i {{ui:Teek}} sakist.
- Energia: tunnipõhist simulatsiooni, ISO 52016-1 meetodit ega kliimafaile ei ole. Varad: hostitud kaksikut, mis hoiab näite alles või saadab hoiatusi BimCraft'i ollessa suletud, ei ole.
- Skannide registreerimist on proovitud katseskannidel, mitte veel päris skanneri skannikomplektil; E57-failid avanevad veel kuni 6 miljoni punkti ja 512 MB.
- Projektipaketid avanevad ainult BimCraftis (teised rakendused võtavad paigutuse vastu käsuga **{{ui:Ava rakenduses}} …**), ning paketid ja kahe programmi komplekt on testitud asendajatega, mitte veel Archicadi ega Revitiga endaga.

Kõik muu on leheküljel [Mis pole veel valmis](topic:not-built-yet).
