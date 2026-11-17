---
title: Mis veel valmis pole
summary: Mida see BimCraft versioon veel ei tee ja mida kasutada praegu selle asemel.
keywords: puuduv, piirangud, piirangud, ei ole toetatud, teekaart, koostamine, modelleerimine, lõiked, mõõtmine, põrge, bcf, pilv, töölaud, eksport
from: 87777dcc
---

BimCraft on praegu lugeja, kontrollija ja IFC-andmete redaktor, mis on hakanud joonistama hooneid: seinad, uksed ja aknad, ruumid, põrandad, laed ja katused (vt [Seinte joonistamine](topic:draw-walls), [Uksed ja aknad](topic:doors-and-windows) ja [Ruumid, põrandad, laed ja katused](topic:floors-and-roofs)). See on ausa loetelu sellest, mida ta veel ei tee, koos sellega, mida praegu selle asemel teha.

## Modelleerimine ja koostamine

| Veel mitte | Praegu selle asemel |
|---|---|
| Talade joonistamine; terasprofiilidest postid | Kasuta oma koostamisprogrammi ja ava siin selle IFC-eksport. Ristkülikukujulised ja ümmargused postid paigutatakse siin (vt [Võrgustik ja postid](topic:grids-and-columns)); sirged, L-kujulised, U-kujulised, pöördtrepp ja spiraaltrepp ning käsipuud joonistatakse siin (vt [Trepid ja käsipuud](topic:stairs-and-railings)) |
| Aken katusekambri esiküljel; katusekambrid, mis joonistatakse käsitsi katusetasanditele; kumerad katused; renderdatud katusekatte tekstuur | Katusetasandid, mis joonistatakse nurkade kaupa, ja iga seina kalle: vt [Katused: iga seina kalle, otsaseinad, kuurid ja katusetasandid](topic:roofs) |
| Teise programmi tehtud seinte, uste või akende muutmine | Sinu koostamisprogramm; joonistustööriistad muudavad ainult seda, mida nad ise joonistasid |
| Seinaprofiilid üle ulatuvate osade või aukudega; seinaavad, mis pole ristkülikud; seinaprofiili punktide lisamine või eemaldamine 3D-vaates | Profiil, kinnitus, kalle ja avad töötavad omadustes, fassaadides ja lõigetes, seina esivaates ning 3D-s haardekäepidemetega, sirgete ja kumerate seinte jaoks: vt [Seina kuju: kinnitus, profiil, kalle ja avad](topic:wall-shape) |
| Kumerate seinte korral: {{ui:Lõika / pikenda}} ja {{ui:Nurk}}, raamistik, automaatsed plaanimõõtmed, püüdmine mööda kaart (püütakse otstele ja kaare keskele) | Joonista sein nende jaoks sirgena või kasuta sirgeid lõike. Kumerad seinad on kirjeldatud jaotises [Seinte joonistamine](topic:draw-walls) |
| Paigutatud raamatukogu üksuse lohistamine 3D-vaates | Lohista see plaanil või kirjuta {{ui:Omadused}}-s X, Y ja Pööre: vt [Seadmete ja mööbli paigutamine raamatukogust](topic:place-from-library) |
| Taimede paigutamine CivilCrafti tööruumi Landscape taimeraamatukogust | Istuta need CivilCraftis või paiguta puud ja põõsad raamatukogu taustaelementidest: vt [Seadmete ja mööbli paigutamine raamatukogust](topic:place-from-library) |
| Plant-lisandmoodulis (väljas, kuni sa selle sisse lülitad): marsruudiga toru joonistamine mudelisse, toruosade numbrid isomeetrias, raamatukogust paigutatud seadmete paigutuse kontroll | Joonista toru {{ui:Toru}} abil (vt [Torud ja õhukanalid](topic:pipes-and-ducts)); paigutuse kontroll loeb lisandmooduli enda seadmetabelit |
| Üksikute joonistatud seinte, uste ja akende pööramine, peegeldamine või massiivina paigutamine (seinad liiguvad ja kopeeritakse tööriistadega Teisalda, Nihe ja Kasti venitus: vt [Seinakujud, jagamine, nihe, venitus ja lukustus](topic:wall-tools)); nurkade ühendusstiil (ots, lõigatud nurk) kumera seina või kolme või enama seina korral (vt sama jaotis); tekstitööriist; kardinseinad | Kopeeri kogu tasand tööriistaga {{ui:Kopeeri see tasand…}} (vt [Seinte joonistamine](topic:draw-walls#levels)); muidu joonista uuesti |
| Seinakoostu kihid plaanil ja lõikes; mõõtmed lõigetes ja fassaadides; viitemõõtmed ustele, akendele ja muudele komponentidele; koostud ja membraanid loendites ning kogustes; materjaliraamatukogu, mida jagada projektide vahel; kihtide prioriteet lõigetes, fassaadides ja 3D-s ning kolme või enama seina sõlmedes (plaanil puhastatakse nurki, T-ühendusi ja kahe seina ristumisi kihtide prioriteediga: vt [Seinakujud, jagamine, nihe, venitus ja lukustus](topic:wall-tools)); kihid, mis on mähitud või muutuvad; teise programmi tehtud seinakoostu muutmine | Kihid on seina tüübis ja selle eelvaates ({{ui:Seinakoosted…}}); seinu mõõdetakse ühe ümbrisena: vt [Seinakoosted ja viitemõõtmed](topic:wall-assemblies) |
| Elemendi kuju või suuruse muutmine (välja arvatud siin joonistatud seinad, uksed ja aknad ning perekonnast paigutatud elemendid) | Sinu koostamisprogramm. Kustutamine, kopeerimine, lõikamine ja kleepimine töötavad siin: vt [Hoone elementide kustutamine, lõikamine, kopeerimine ja kleepimine](topic:edit-elements) |
| Korruste, ruumide, hoonete või kinnistu kustutamine | Kustuta nendes olevad elemendid |
| Hoone elementide kleepimine teise mudelisse | Kopeeri ja kleebi ühe mudeli sees; paigutatud raamatukogu üksused kleepuvad mis tahes mudelisse |
| Uute omaduste või omaduste komplektide lisamine | Täida siin olemasolevad väärtused või lisa parameeter oma koostamisprogrammis ja ekspordi uuesti |
| Koguste, loendite ja loetelude muutmine | Sinu koostamisprogramm |
| Teiste programmide projektifailide salvestamine | BimCraft salvestab IFC-d (ja oma perekonnafailid: vt [Perekonnad ja nende suurused](topic:families)) |
| Perekonnad: perekondade teek, mida paigutatakse plaanilt ja jagatakse projektide vahel (Teek); paigutatud elemendi kuumpunkt, mida lohistatakse 3D-vaates (lohistatakse perekonnaredaktori eelvaates ja plaanil); detailitasemed vaadete kaupa (üks tase projekti kohta; lehed valivad mõõtkava järgi); pööre tasandil teises perekonnas, mis pöörab veerand pööret; uste ja akende plaanisümbolid enda omad (joonistatakse nende lähtepunkti järgi) | Tüübiga parameetritega perekonnad, valemid, enda plaanisümbol, kuumpunktid, kordused, detailitasemed, perekondade sees olevad perekonnad, suurused tabelist ja elemendipõhised parameetrid tehakse siin: vt [Perekonna muutmine](topic:family-editor) ja [Perekonnad ja nende suurused](topic:families). Dubleeri perekond, et alustada sellest |
| Teiste programmide tüüpide muutmine perekondadena; raamatukogu üksuse muutmine perekonnaks | Teiste programmide tüübid on loetletud, rühmitatud oletuse järgi ja nende elemendid valitud. Raamatukogu üksused paigutatakse nii, nagu need on |
| Tootjate armatuur, ventiilid ja seadmed (võimsused, kaalud, tootjate ühendusmõõdud); ASME B16.9 tee- ja reduktorpikkused terastoruosadel; rõhukaod armatuuris, vood ja tasakaalustamine; sprinklerid; kaabliredelid; süsteemide ja kanalite mõõtmine ning toruosade vahed ja ventilatsioon; käigu nurkade lohistamine; seadmesse fikseeritud käigu otsa vabastamine (välja arvatud seadme kustutamisega); pordid raamatukogu üksustel, mis on paigutatud paneelist Teek; armatuuri kaal; kanalite õmblused, paksused ja ühendused | Üldise standardse liitmikuga toru- ja kanalikäigud, süsteemid, plaanid, loendid ja kogus on siin: vt [Torud ja õhukanalid](topic:pipes-and-ducts). Üldised seadmed portidega, ühendatud käigud ja ühenduste kontroll: [MEP-seadmed portidega](topic:mep-equipment) ja [Torude ja kanalite ühendamine seadmetega](topic:mep-connections). Põrkekomplektid, vahekaugused ja avade loend: [Torude ja kanalite kontroll konstruktsiooni vastu](topic:mep-against-structure). Terastoru komplektid ja lehed, kanali lõikeloend: [Terastoru komplektid ja komplektilehed](topic:pipe-spools). Tootjate tooted too oma MEP-programmist IFC-na |
| Keevitatud I-profiilide, I-profiilide, mille IFC-profiili nimi pole valtsitud W-, S-, IPE-, HEA- või HEB-suurusena, ning torude, nurkprofiilide ja kanalite konstruktsioonikoodi kontroll (need tulevad tagasi kontrollimata); väändumine või dünaamiline vastus (loomulikud sagedused on plokis Lõplikud elemendid) (teine järk on ainult P-Delta: elastne, paindeline, jäikust ei vähendata); seinad ja plaadid analüüsis; koormused pindadest (välja arvatud üks rõhk igale betoonplaadile) | {{ui:Analüüs}}-vahekaart annab jõud, toereaktsioonid ja läbipainded talade, postide ja diagonaalide kohta esimese järgu analüüsiga ning kontrollib valtsitud I-profiile. See on abivahend, kuni insener on selle üle vaadanud: vt [Konstruktsioonilise raamistiku analüüs](topic:frame-analysis#design-checks) |

## Mudelite vaatamine

| Veel mitte | Praegu selle asemel |
|---|---|
| 3D projektifailidest | Ekspordi IFC ja ava see. Vt [Projektifaili toomine 3D-sse IFC kaudu](topic:rvt-to-ifc) |
| Interjööri fassaadid genereeritud joonisekomplektis (ruumi omadustest ja enda lehtedel need koostatakse); oma mõõtmed fassaadidel ja lõigetel (korruse märgid, kõrgused, laius ning ukse- ja akna sildid on joonistatud; märkmed kirjutatakse vaatesse: vt [Redigeeri fassaade ja lõikeid](topic:edit-in-elevations)); seinte joonistamine fassaadis (need joonistatakse lõike tasandil); meeskonnamallid Studio kaudu | Mudelist tehtud joonisekomplekt: vt [Fassaadid, lõiked ja lehed](topic:sheets). Mis tahes IFC-mudeli jaoks: üks {{ui:Lõige}}-tasand või lõikekast: vt [IFC-mudeli lõikamine lõiketasandiga](topic:section-plane) |
| Väljakutsevaated, detailvaated, joonistusvaated ja legendid; vaatesse joonistatud joonistusjooned ja tahud; fassaadi või lõike lõikamine; vaatemallid fassaadidele, lõigetele, laeplaanidele ja 3D-vaadetele; laeplaanid genereeritud joonisekomplektis; kogu enda lehtede komplekt ühes PDF-is | Plaanidel ja laeplaanidel on vaatevahemikud, lõikepiirkond, mõõtkava ja alusjoonis (plaanidel ka mallid) ning enda lehtedel plaanid, laeplaanid, fassaadid, lõiked ja loendid, igaüks salvestatud PDF-ina: vt [Vaated, vaatevahemikud ja enda lehed](topic:views-and-sheets) |
| Paigutatud valgusti tõstmine laeni hiljem; kaldus või astmelised lagi; laemustrid peale viie ruudustiku; valgusti enda sümbol laeplaanil | Paiguta see **Paigaldus: laes** abil; laeplaan joonistab armatuuri selle enda kujust: vt [Seadmete ja mööbli paigutamine raamatukogust](topic:place-from-library) |
| Otsingukomplektide jagamine teistega; komplektid IFC-failis | Komplektid jäävad sellesse brauserisse; vt [Elementide leidmine klassi, nime või omaduse järgi](topic:find) |
| Nurkade mõõtmine või mõõtmine mitme punkti kaudu | Mõõda iga osa {{ui:Mõõda}}-ga: vt [Vahemaade, pinnaalade ja asukohtade mõõtmine 3D-s](topic:measure) |
| Tekstuurid elavas 3D-vaates | Värvilised materjalid näitavad oma värvi vaates ja tekstuuri renderdatud piltidel: vt [Mudeli pildi renderdamine](topic:render) |
| Pehmed (kauguse) põrked mis tahes kahe komplekti vahel, põrkerühmad, põrkeätulemuste salvestamine | Käivita {{ui:Põrkekontroll}} ja tee probleemideks need, mis loevad: vt [Põrgete kontrollimine](topic:clash-check). Torud ja kanalid konstruktsiooni vastu kontrollib {{ui:Kontrolli vahekaugusi}}: vt [Torude ja kanalite kontroll konstruktsiooni vastu](topic:mep-against-structure) |
| Mitme mudeli salvestamine ühe komplektina või kahe mudeli korraga muutmine | Muuda ühte mudelit korraga; igaüks salvestab oma faili |
| Probleemide määramine, tähtajad, sildid, mitu vaatepunkti probleemi kohta, probleemi muutmine | Üks vaade probleemi kohta; vt [Probleemid ja BCF-failid](topic:issues-bcf) |
| `.ifczip` ja `.ifcxml` | Paki lahti või ekspordi tavaline `.ifc` |
| Kaardikihid mudelile ilma kaarditeisenduseta või joonise vaadetes | Ekspordi mudel selle koordinaatidega: vt [Kaart mudeli all maapinnal](topic:map-layers) |
| E57-skaneeringud üle 6 miljoni punkti või 512 MB; skanneritootjate enda failid (RCP, RCS, FLS, LGS, TZF, ZFS); punktipilved joonise 3D-vaates; pilve asukoha salvestamine koos mudeliga | Ekspordi skaneering LAS- või LAZ-failina ja ava see IFC-mudeli kõrval: vt [Punktipilve formaadid](topic:point-cloud-formats) ja [Punktipilve näitamine mudeli kõrval](topic:point-clouds) |
| Skaneeringute registreerimine: sihtmärkide (sfäärid, ruudustikud) leidmine skaneeringus iseseisvalt, kõigi skaneeringute koos lahendamine (kimbu korrigeerimine), mõõtkava, registreerimine mudeli vastu | Vali sobivad punktid või sisesta sihtmärkide koordinaadid ning täpsusta üks skaneering korraga ICP-ga: vt [Mitme skaneeringu ühendamine üheks](topic:register-scans) |
| `.pln`, `.pla`, `.tpl` ja `.bpn` projektifailide avamine | Ekspordi neist IFC ja DWG või projektikomplekt: vt [`.pln` ja `.pla` projektifailide avamine](topic:pln-project-files) ja [Projektikomplekti avamine](topic:open-project-bundle) |
| {{ui:Elemendid}}-loendi avamine liigi järgi valimiseks | Klõpsa liigi rühmal {{ui:Mudelipuu}}s: vt [Liigu mudelipuu abil](topic:model-tree) |
| Probleemile nime või pealkirja kirjutamine VR-is, häälmärkmed, lõikeplaani käsitsi liigutamine VR-is, lõikekast VR-is | Aseta probleem VR-is ja lisa sõnad vahekaardil Probleemid; sea lõikeplaan või kast 3D-vaates enne sisenemist: vt [Mudeli ülevaatamine VR-peakomplektis](topic:vr-review) |
| Inimeste nägemine laua taga VR-is (näidatakse ainult VR-is olijaid); VR-kõnnikäigu salvestamine | Palu neil liituda VR-iga või järgi neid 3D-vaates |
| Päevavalguse simulatsioon (kliimapõhine päevavalgus, pimestamine, päikesetunnid), katuseaknad päevavalguse teguris, kontrollid standardi BS EN 17037 või rohelise hoone skeemide järgi; ISO 52016-1 energiameetod, tunnipõhine energiasimulatsioon, soojusmass ja sillad, kliimafailid | Projekteerimisabivahendid: keskmine päevavalguse tegur, iga akna vertikaalne taevakomponent, päike läbi akende kuupäeval ja päevavalguse tegur ruudustikul ([Hinda päevavalgust igas ruumis](topic:daylight-factor)); soojuskadu, kraadpäevade aasta ja jahutuse tipp ruumi kohta ([Hinda kütte- ja jahutuskoormusi](topic:heating-and-cooling-loads)). Vastavuseks kasuta simulatsiooniprogrammi |
| Hostitud hoone kaksik: näidud salvestatud ja hoiatused saadetud e-kirjaga, kui BimCraft on suletud, hooldustähtaja e-kirjad; MQTT 5; COBie tööde tagasilugemine | Näidud CSV-st või otse oma vahendajast või aadressilt, kui mudel on avatud; piirid, mis märgivad varad; dokumendid, COBie väljund ja sisend: vt [Hoia varade andmeid ja hooldusajalugu mudelis](topic:assets-and-maintenance) |
| Pistik või otseühendus Enscape'i, Twinmotioni või muude visualiseerimisprogrammidega; FBX- või Datasmithi failid; üks objekt elemendi kohta, salvestatud vaated ja kõnnikud .glb-s | Salvesta .glb renderdusprogrammidele, mis loevad glTF-d; USD-fail (üks objekt elemendi kohta koos oma IFC-andmetega: vt [Mudeli eksport USD-na](topic:usd)) või IFC neile, mis töötavad teises projekteerimisprogrammis: vt [Mudeli saatmine renderdusprogrammile](topic:model-for-rendering) ja [Stseeni avamine teises programmis](topic:render-open-in) |
| Teine programm joonistamas renderdatud pilti ilma renderdusmootori lisandmoodulita (CadCraft ei käivita kunagi programmi GNU GPL litsentsi all); paanoraam- või stereokaamerad ning taevapilt teise programmi kaudu; Unreal Engine'i pistik (failid kirjutatakse, aga neid avav pistik pole välja antud) | Meie enda Fast- ja Path-mootorid; lisandmooduli mootor ([joonista pilt teise programmiga](topic:render-other-program)); USD-, glTF- või Unreal-kausta fail Mootori loendist, et viia see mis tahes programmi |
| Elavas vaates: taimede ja kivide laotamine, paanoraamide jagamine, ringkäik, võrguvaline vaataja või video | ModelCrafti elav vaade pakub neid; siin renderdad pilte ja 360° paanoraame: vt [Elav vaade](topic:live-view) ja [Mudeli pildi renderdamine](topic:render) |

## Joonised

| Veel mitte | Praegu selle asemel |
|---|---|
| DWG ja DXF redigeerimine, mõõtmine ja salvestamine | CadCraft joonistusrakendus ({{ui:Redigeeri rakenduses CadCraft}} 2D-vaatel) |
| PDF-i printimine või eksport | Prindi programmist, mis joonise tegi; kontrolli enne {{ui:Prindivaade}}-ga |
| Printimisstiilid ja pliiatsitabelid | {{ui:Prindivaade}} näitab tavalist musta joonte paksusega |
| DWG-failid vanemad kui R13 ja binaarne DXF (BimCraft ütleb seda, kui avad ühe) | Salvesta joonis uuesti uuema DWG-na või ASCII DXF-ina |
| Joonised lingitud joonistes | Ava need otse |
| TIFF-pildid | Salvesta PNG- või JPEG-koopia samanimeliselt ja lisa see |
| DGN-joonised | Loetletud ainult kaustaaruannetes |
| Objektid loendis **Veel ei joonistata** | Vaata joonist programmis, mis selle tegi |
| ACIS-tahkised, kehad, piirkonnad ja pinnad ning alamjaotusvõrgud 3D-s | Ekspordi IFC või 3D-tahud programmist, mis joonise tegi |
| Pildid, mitmeotsad juhtmejooned ja lehed joonise 3D-vaates | Vaata neid vahekaardil {{ui:Mudel}} ja lehtedel |
| Objektide valimine joonise 2D-vaates | Lülitu {{ui:3D}}-sse ja klõpsa seal objektil: vt [DWG- või DXF-joonise vaatamine 3D-s](topic:dwg-in-3d) |
| Seadmete loendid joonistest ilma `KCL-ITEM` siltideta | Pole saadaval |
| Seadmete loend XLSX-ina või PDF-ina | {{ui:Laadi CSV alla}} ja ava see tabelarvutuses |

## Failid ja platvormid

| Veel mitte | Praegu selle asemel |
|---|---|
| Pilvesalvestus | Salvesta koopiad oma arvutisse või kontori serverisse. Pilvesalvestus pole veel saadaval |
| Kaustade meeldejätmine Firefoxis ja Safaris | Vali kaust uuesti või lohista see |
| Tagasivõtmine pärast salvestamist | Ava algne fail uuesti, et alustada otsast |
| Lõigatud projektifaili puuduva osa täitmine | Kopeeri algne uuesti; kaustas loeb BimCraft uusimat täielikku varukoopiat |
| Avatud failide uuesti avamine | Salvestamata muudatused pakutakse tagasi küsimusega „Kas taastada su töö?“, kui tuled tagasi; ava failid uuesti viimaste failide loendist |
