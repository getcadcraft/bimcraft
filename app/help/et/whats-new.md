---
title: Mis on uut versioonis 0.9
summary: Seinakujud, lõikamine, nihe, venitus ja lukustus ruudustikule, tasandid maapinnast allapoole, ruudustiku mõõtmed ning mõõtmine plaanil, dubleeritud vaated töörežiimide ja pliiatsitabelitega, Report as, Collada ja Google Earthi eksport, Scan to BIM, tuule- ja seismiline analüüs, vaigu printimise lisandmoodulid.
keywords: mis on uut, 0.9, väljaande märkmed, seinakujud, ristkülik, hulknurk, kaar, valitud jooned, kontuuri jälgimine, nihe, ühendus, kasti venitus, joonda ja lukusta, seina jagamine, vahe, uuesti ühendamine, lukusta ruudustikku, kasva algusest, mõõda algusest, lisa tasand allapoole, keldrikorrus, tasandi käsk, ruudustiku mõõtmed, mõõda plaanil, töörežiim, dubleeritud vaade, oma koopia, lingitud vaade, pliiatsitabel, prindi nagu näed, raporteeri kui, mõõtkava sisestus, impordi SVG, paiguta plaanile, paiguta mudelisse, collada, dae, kmz, google earth, scan to bim, tuulekoormus, seismiline, lõplike elementide meetod, dokumentide paneel, vaigu printimine, mis on uut, väljaande märkmed, muudatuste logi, muudatused, 0.8, 0.8.1, versioon, uued funktsioonid, evakueerimine, inimesed, järjekorrad, akustika, kajaaeg, impulsivastus, üleujutus, tuul, maavärin, oht, elutsükkel, eluiga, ids, sildid, loendid, liiguta, joonda, jaota, pilt, taust, skann seinteks, sait civilcraft'ist, paneelijoonised, konstruktsioon, päike, pv, jaga, vrf, ventilaatorkonvektor, torude mõõtmine, kaabliredel, valgustugevus, betoon, seismiline, skanni võrdlus, epsg, projektsioon, dokumendid, mall, süsinik, maksumus, energyplus, renderdusmootor, ava rakenduses, usd, glb, unreal, tagasivõtmine, lisandmoodulid, pcf, sümbolid, taimed, jälg, pliiatsid, lint, projektibrauser, paigutus
from: 5624fe88
---

See on see, mis muutus BimCraftis 0.9 võrreldes versiooniga 0.8.1. Kaks suurt teemat on õige seinatööriist ja vaated, mis käituvad nii, nagu suurte BIM-programmide kasutajad eeldavad. Nende ümber tulevad Collada eksport, assistendid, mis oskavad paigutada elektriseadmeid, Scan to BIM ning tuule-, seismiline ja lõplike elementide analüüs sakis {{ui:Analüüs}}.

## Uus

### Seinad

- **Joonista terve kuju.** Ava {{ui:Joonista}} all {{ui:Kujud}} (või vali kuju seinarea Kuju loendist) ristküliku, pööratud ristküliku, 3 kuni 64 küljega hulknurga, keskpunkti järgi kaare, puutuva kaare, valitud joontele paigutatud seinad või klõpsatud suletud ala ümber olevad seinad. Ristkülik on neli seina neljal ühendatud nurgal ja üks tagasivõtmise samm. Vt [Seinakujud, lõikamine, nihe, venitus ja lukustus](topic:wall-tools).
- **Seadista enne joonistamist, muuda pärast.** Seinareal on {{ui:Nihe}} ja {{ui:Ühendus}} (eemalda linnuke, et joonistada vabalt seisvaid seinu). Pärast kasuta joonistatud seintel {{ui:Nihe}}, {{ui:Kasti venitus}} ja {{ui:Joonda ja lukusta}}. Liigutatud või venitatud sein säilitab oma uksed, aknad ja mõõtmed. Iga retsept on üks tagasivõtmise samm.
- **Lõika seinu.** {{ui:Jaga}}, {{ui:Vahe}}, {{ui:Vabad otsad}}, {{ui:Kustuta lõik}} ja {{ui:Ühenda uuesti}} lõikavad seina klõpsuga või seal, kus teine sein seda ristib. Läbi ukse lõikamine lükatakse tagasi. Vt [Seinakujud, lõikamine, nihe, venitus ja lukustus](topic:wall-tools).
- **Lukusta seinad ruudustiku joontele.** Vali sein, mis kulgeb mööda ruudustiku joont, ja märgi {{ui:Omadused}} all {{ui:Lukusta ruudustikku}}. Ruudustiku tööriist sisselülitatuna sisesta valitud joonele kaugus väljale {{ui:Nihuta võrra}} ning lukustatud seinad järgivad ühe tagasivõtmise sammuga.
- **Kuju ühel seinal.** Ühe seina Omadustes saad kinnitada selle ülaosa või aluse katusele, põrandale või lakke, muuta selle servaprofiili, kallutada seda või lõigata seinaava ilma ukse või aknata. Vt [Seina kuju](topic:wall-shape).
- **Pikkus ütleb, milline ots püsib.** {{ui:Kasva algusest}} seab, kas algus, lõpp või keskpunkt jääb paigale, kui pikkust muudad.
- **Pikkus ja plaani mõõt on kooskõlas.** {{ui:Mõõda algusest}} (telgjoon, sisepind või välispind) juhib nii pikkuse välja kui plaani seinamõõte. See algab telgjoonelt, nii et plaani seinamõõdud loevad nüüd telgjoont, kus varem lugesid välispinda. Muuda seda seinareal, {{ui:Omadused}} all või {{ui:Sätted}} › {{ui:BimCraft}} › {{ui:Seinad}} all.

### Tasandid, ruudustikud ja mõõtmine

- **Lisa tasand allapoole.** {{ui:Lisa tasand allapoole}} tasandite paneelis lisab tasandi madalaima alla, sama kõrge kui see, negatiivsele kõrgusele (Level -1, Level -2). Ükski muu ei liigu. {{ui:Lisa tasandeid…}} aktsepteerib nüüd negatiivseid kõrgusi. Käsurea tippimine LEVEL, LEVELS, STOREY või STOREYS avab {{ui:Lisa tasandeid…}}, ning menüüdes ja lindi sakkides on nupp {{ui:Tasandid}}. Vt [Saidid, hooned ja tasandid](topic:site-building-and-levels).
- **Ruudustiku mõõtmed plaanil.** Kui {{ui:Ruudustik}} tööriist on sisse lülitatud, märgi {{ui:Mõõdud}}, et joonistada naaberjoonte vahe ja üldmõõt mullide taha iga tasandi plaanil. Vt [Ruudustiku mõõtmine](topic:grid-dimensions).
- **Mõõtmine plaanil.** {{ui:Mõõda}} rühmas Joonista annab kahe klõpsu vahelise kauguse koos X- ja Y-erinevustega. Midagi ei salvestata mudelisse. Vt [Mõõtmine plaanil](topic:measure-on-the-plan).
- **Muuda mitut sammast korraga.** Vali sambad koos seinaga ja valik loetleb iga liigi koos {{ui:Jäta ainult need}}-nupuga. Üks klõps jätab sambad alles ja näitab nende ühiseid välju.
- **Üks kuvaühik kõikjal.** Koordinaadid, mõõtmised, lõiked, mõõtkavad lehtedel, raami sakis koormused ja tulemused ning probleemide tekst järgivad valitud ühikut. Eksport jääb SI-ks.

### Vaated, lehed ja printimine

- **Töörežiim.** {{ui:Sätted}} › BimCraft › {{ui:Töörežiim}} valib, kas igal vaatel on oma märkused ja pliiatsitabelid või need on jagatud. Vt [Töörežiim, dubleeritud vaated, paberipliiatsid, Report as ja mallid](topic:working-style).
- **Dubleeri vaade.** Plaane, laeplaane, kutsumärke, vaateid ja lõikeid saab dubleerida kui {{ui:Oma koopia}} või {{ui:Seotud}}; {{ui:Muuda oma koopiaks}} muudab lingitud vaate sõltumatuks. Vt [Töörežiim, dubleeritud vaated, paberipliiatsid, Report as ja mallid](topic:working-style).
- **Prindi nagu näed või läbi pliiatsitabeli.** Pliiatsite ülekirjutused hoitakse IFC-s koos vaatega ning lehed ja PDF-id joonistavad need nii, nagu ekraan. Sama teema katab pliiatsitabeleid.
- **Raporteeri kui.** {{ui:Raporteeri kui}} {{ui:Omadused}} all kirjutab plaadi, mis on joonistatud teena, seina paneelina või katuse rambina IFC-sse valitud klassina ning loeb seda nii loenditesse, kogustesse, otsingusse, värvi järgi ja probleemidesse.
- **Muuda lõigetes ja vaadetes.** Joonista ja liiguta seinu, avasid, tasandeid, mõõtmeid ja märkmeid otse vaates või lõikes, oma lehesuuruste ja tiitelplokkidega. Vt [Muuda lõigetes ja vaadetes](topic:edit-in-elevations).
- **Lehed.** Iga leht võib olla maastikul- või portreepaigutusega. Kast {{ui:Sisesta mõõtkava}} asub iga paigutatud vaate mõõtkavaloendi kõrval (1:64, 2:1, 1/4" = 1'). Paigutatud joonist saab lohistada või nihutada nooleklahvidega, ning {{ui:Vormingud…}} › {{ui:Impordi SVG…}} muudab sinu enda lehekujunduse tiitelplokiks, kus väljad on sisestatud lehe kaupa.
- **Teegi tunnustus lehel.** Joonisekomplekt, millel on teegi üksused, saab teegi tunnustuste loendi, mida saab paigutada mis tahes lehele. Vt [Teegi tunnustused](topic:library-credits).

### Teek: paigutamine

- **Paigutamine järgib vaadet.** Plaanivaates näitab teek {{ui:Paiguta plaanile}}; 3D-s {{ui:Paiguta mudelisse}}; jagatud vaates näitab jagamisnupp {{ui:Paiguta plaanile}} peategevusena. Mõlemad viisid kirjutavad sama IFC-elemendi. Võid lohistada ka teegi kaardi plaanile või 3D-vaatele; pliiatsi või sõrmega vajuta ja hoia, seejärel lohista. Vt [Paiguta teegist](topic:place-from-library).

### Failid ja assistendid

- **Collada ja Google Earth.** {{ui:Collada}} tööriistaribal (menüüstiilides faili menüüs) kirjutab .dae- või .kmz-faili, viimane paigutatuna mudeli asukohta kaardil. Vt [Ekspordi mudel Collada või Google Earthi jaoks](topic:collada).
- **Assistendid saavad paigutada elektriseadmeid.** Sinu ühendatud assistendil on uued tööriistad seadmete lisamiseks, loetlemiseks, muutmiseks ja kustutamiseks ning valgustite seadmiseks. Assistendid jäävad välja lülitatuks, kuni lülitad need sisse menüüs {{ui:Sätted}}. Vt [Lase tehisintellekti assistendil mudeliga töötada](topic:assistants).
- **Scan to BIM (lisandmoodul).** Vaikimisi väljas ning vajab lisandmoodulit Point clouds. See pakub skannist põrandaid, seinu, uksi ja aknaid koos iga mõõdetud kõrvalekaldega; aktsepteerimine on üks tagasivõtmise samm.

### Analüüs

- **Tuule- ja seismilised kohaandmed.** Sakis {{ui:Analüüs}}: tuulekoormused ASCE 7-10 või 7-16 järgi jäigale suletud hoonele, iga korruse jõuga koormusjuhtumitena, ning seismilised kohaandmed USGS-i otsingu ja projekteerimisspektriga.
- **Konstruktsiooni järelkontroll ja lõplikud elemendid.** Betoonikontrollid ACI 318-19 järgi, ekvivalentsed külgjõud ASCE 7-22 järgi, korrusete triiv, plaadid ja seinad plaatidena ning koormuskombinatsioonid ASCE 7 ja EN 1990 järgi. Meie enda lõplike elementide mootor teeb kestasid, tetraeedreid ja moodalset analüüsi. Vt [Kontrolli betoonelemente ja tee seismilisi koormusi](topic:concrete-and-seismic) ja [Raamanalüüs](topic:frame-analysis).

### Muud lisandmoodulid ja dokumendid

- **Sisevalgustus (lisandmoodul).** Paigutab valgusti ja kirjutab luksi arvud iga tasandi plaanile, koos hinnanguga läikele ja prinditava aruandega.
- **Dokumentide paneel.** {{ui:Fail}} › {{ui:Dokumendid…}} omab väljavõtmist ja sisseviimist lukufailiga, versioonitähti, väljalaskeolekuid ja ajalugu.
- **Piirkonnad ja teras.** Lõuna-Aafrika joonistuste ja ehitusmäärustiku paketid lisandmoodulis Regulations ning 976 Suurbritannia terasmõõtu jagatud lõigutabelis.
- **Tasuta vaigu printimise lisandmoodulid.** Viilutaja, toed ja alus, valgustusproov ning failivormingud GOO, SL1, Chitubox ja Anycubic, kõik vaikimisi väljas.

## Kõigis rakendustes

- Nupu või juhtelemendi kohal hoides ilmub tööriistavihje.
- Tühja joonistusala alguse vihjel on sulgemisnupp; BimCraft mäletab, et see suleti.
- Paneeli sakiriba, mis ei mahu, kerib nüüd, selle asemel et lõigatuna jääda.
- Dokumendi avamisel loeb brauseri pealkiri „<dokument> - BimCraft | CadCraft“.
- {{ui:Sätted}} › {{ui:Üldine}} › {{ui:Paigutus}} paigutused on kahe rea valikutega rippmenüü.
- Keelte loend menüüs {{ui:Sätted}} pakub rohkem keeli kui 0.8; muud kui inglise keeled on masinmustandid.

## Parandatud

- **Liigutamine töötab trepil** ning rampidel, käsipuudel, katuse tasapindadel, vabalt seisvatel seadmetel, piltidel ja radadel.
- **Seina lohistamine ei kalluta enam ruumi.** Keskmine käepide liigutab seina iseenda suhtes risti ja tema nurgad libisevad mööda ühinenud seinu. Hoia all {{key:Mod}}, et saada vana vaba liigutamine; {{ui:Joonda risti}} toob tagasi 90 kraadi.
- **Paksuse või tüübi muutmine ühinenud sõlmes** hoiab nüüd nurga suletuna L-kujul, T-kujul, kolme seina sõlmes ja kõvera seina kõrval.
- **Rühma ruumide liigutamine või kopeerimine** hoiab rühma väljas olevad ühinenud seinad ühendatuna.
- **Redo säilitab seina mõõdu identiteedi.**
- **Seina valimine, kui Joonista on väljas,** ei tekita enam Omadustes viga.
- **Renderdus langeb WebGL-ile,** kui GPU ei saa käivituda, selle asemel et peatuda.
- **EnergyPlus-i kontrolli saab** jälle sisse lülitada.
- **Dokumendid avanevad keskel asuva dialoogina.** {{key:Esc}}, X või klõps hämardatud lehel sulgeb selle.
- **Nupud {{ui:Plaan}}, {{ui:Jaga}} ja {{ui:3D}} ilmuvad** kohe, kui mudel on avatud, mitte ainult pärast seda, kui Joonista on kord sisse lülitatud.

## Ausad piirid

- Midagi ei prinditud päris riistvaral. Vaigutoed on uued ega ole veel tõestatud.
- Tuule-, seismilised, betooni- ja lõplike elementide tulemused on insenerile mõeldud kontrollivahendid, kontrollitud suletud vormide vastu, mitte päris hoone vastu.
- Skann seinteks on testitud sünteetilisel hoonel, mitte päris skannil, ning leiab ainult ristkülikukujulisi ruume.
- Collada pole siin Blenderis ega Google Earthis avatud.
- Valgustuse hinnang on kontrollitud meie enda jälgimise, mitte teiste valgustusprogrammide vastu.
- Lõuna-Aafrika numbrid on kinnitamata.
- Seina ühendusstiilid (otsaga, miitri, ristiga lõika) ja kihi prioriteet pole valmis; nurgad on miitritud.
- Muud kui inglise keeled on masinmustandid.

Kõik muu on leheküljel [Mis pole veel valmis](topic:not-built-yet). Varasemad muudatused on 0.8 ja 0.8.1 märkmetes sellel leheküljel allpool.

## Varem: 0.8 ja 0.8.1

See on see, mis muutus BimCraftis 0.8 (2026-11-01) ja 0.8.1 (2026-11-02) võrreldes versiooniga 0.7. BimCraft oskab nüüd vastata küsimustele hoone kohta ja seda testida inimeste, heli, vee, tuule ja maavärinatega ning joonistada seda rohkemate tööriistadega; 0.8.1 on parandusväljalase.

### Uus

**Hoone testimine**

- **Inimesed hoones.** Sakk {{ui:Inimesed hoones}} vasakul paneelil kõnnib evakueerimise või tavapärase päeva saabumised läbi sinu ruumide, uste ja trepi. Näed järjekordi, kus hoone kitseneb, pikimat teekonda väljapääsuni igast ruumist ja seda, kui kaua viimane inimene kulutab. Märgi uksel {{ui:Suletud}}, et näha, mis muutub, ning märgi {{ui:Näita inimesi 3D-vaates}}, et jälgida kõndijaid. Leiud lähevad probleemidesse. See on karm rahvamudel projekteerimisotsuste jaoks, mitte tuleohutuse tunnistus. Vt [Kõnni inimesed läbi hoone](topic:people-in-the-building).
- **Ruumi akustika ja selle kuulmine.** Sektsioon {{ui:Ruumi akustika}} annab iga ruumi kaja aja oktaavribade kaupa (Sabine ja Eyring) selle suuruse ja sinu valitud viimistluste järgi ning sihtmärgiga, mis on sinu enda, ütleb, kui palju neeldumist vajab, et seda täita. {{ui:Esita selles ruumis}} mängib häält, plaksu, nööpnoote või sinu enda helifaili läbi selle ruumi jaoks arvutatud impulsivastuse. Neeldumisarvud on tüüpilised avaldatud väärtused, mida saad asendada. Vt [Ruumi akustika](topic:room-acoustics).
- **Üleujutuse, tuule ja maavärina esitus.** {{ui:Ohu esitus}} mängib läbi ruumide tõusvat vett, tuulesurvet igal korrusel ja maavärinat, mis raputab korruseid, plaanil või vaates koos ajakelluga. Lihtsad mudelid oma eeldustega paneelil; see ei ole normikontroll. Vt [Mängi läbi üleujutus, tuul või maavärin](topic:hazard-playback).
- **Mis kulub viiekümne aastaga.** {{ui:Elutsükli vaade}} loetleb aknad, uksed, viimistlused ja katuse koos eluiga iga kohta, aastad, mil need vahetatakse, ning kui sisestad hinna ühiku kohta, kulu aasta järgi ja selle nüüdisväärtuse. {{ui:Salvesta ajakava (CSV)}} kirjutab selle välja. Eluead on planeerimisarvud. Vt [Vaata, mis kulub viiekümne aastaga](topic:life-cycle-view).
- **Betoon ja seismilisus.** Sektsioonid {{ui:Betoonelemendid}} ja {{ui:Seismilised koormused}} sakist {{ui:Analüüs}} kontrollivad betoontaladel ja sammastel ACI 318-19 järgi ning teevad ekvivalentseid külgjõude ASCE 7-22 järgi jäikade põrandate korral koos korrusete triiviga. Insenerile kontrollimiseks. Vt [Kontrolli betoonelemente ja tee seismilisi koormusi](topic:concrete-and-seismic).

**Kontroll ja aruandlus**

- **Kontrolli IDS-i vastu.** Laadi kliendi antud `.ids` fail ja näe probleemidest iga elementi, mis sellele ei vasta, enne IFC tarnimist. Ava {{ui:Kontrolli IDS-i vastu}} jaotises {{ui:Mudeli kontrollid}}. Vt [Kontrolli mudelit kliendi IDS-i vastu](topic:check-against-ids).
- **Sildid ja loendid.** Määra oma sildid, sea neid korraga paljudele elementidele ja tee loendid, mille veerud, filtrid ja rühmad neid loevad; sildid hoitakse IFC-s. Vt [Sildid ja loendid](topic:tags-and-schedules).
- **Dokumendid mudelist.** {{ui:Dokumendid mudelist}} täidab spetsifikatsioonimalli avatud IFC-st ja salvestab selle PDF-ina, Wordi dokumendina või Markdownina. Vt [Dokumendid mudelist](topic:documents-from-the-model).
- **Võrdle skannimist mudeliga.** Punktipilve avamisel hindab {{ui:Võrdle}} iga elementi kui ehitatud, osaliselt ehitatud, puuduvat või jõudmata ning näitab ehitatud protsenti. Vt [Võrdle skannimist mudeliga](topic:compare-scan-with-model).
- **Süsinik ja maksumus.** Paan Süsinik liidab kokku sisseehitatud süsiniku redigeeritavast tegurite tabelist ja paan Maksumus jaotab hinnad 4D-graafikule. BimCraftiga tulevad tegurid on üldised ja märgitud kontrollimata. Vt [Sisseehitatud süsinik ja maksumus](topic:embodied-carbon-and-5d-cost).
- **Mis tahes kaardiprojektsioon.** {{ui:Mõõda}} › {{ui:Koordinaatsüsteem…}} võtab EPSG-numbri, UTM-tsooni, nime või sinu enda projektsioonimääratluse. Vt [Georefereeri mis tahes projektsiooniga](topic:georeference-any-projection).

**Joonistamine ja muutmine**

- **Liiguta, joonda ja jaota.** Rühmas {{ui:Versioon}} alustab {{key:Shift+M}} liigutamist (tavaline {{key:M}} on ikka Mõõda). Kopeerimine liigutamisel käib klahviga {{key:C}}, iga samm on üks tagasivõtmine ja see liigub Live TeamWork'i seansis. Vt [Liiguta, kopeeri, joonda ja jaota](topic:move-align-distribute).
- **Pildid plaani all.** {{ui:Versioon}} › {{ui:Pilt}} paigutab PNG-, JPEG- või WebP-pildi tasandi plaani alla või vertikaalsele tasapinnale. Mõõtkava seatakse kahe punktiga ning pilti saab liigutada, pöörata, hääbutada ja lukustada. MarkupCraftis kopeeritud ala kleebitakse sisse oma lehe mõõtkavas. Vt [Pane pilt plaani alla](topic:pictures-as-backgrounds).
- **Seinad skannist.** Kui skann on avatud, tulevad seinad, uksed ja ruumid ettepanekutena, mida hoiad või lükkad tagasi ükshaaval, ühe tagasivõtmise sammuna. Leitakse ainult seinad kahes risti olevas suunas. Vt [Muuda skann seinteks](topic:scan-to-walls).
- **Jälg, pliiatsid ja visandtrepp.** {{ui:Jälgi}} näitab teist tasandit katkendjoonena plaani all, {{ui:Pliiatsid}} annab seintele, ustele ja akendele oma joonepaksuse ühes vaates ning {{ui:Visandda trepp}} muudab kõnnijoone trepiks. Wavefront OBJ võrk avaneb. Vt [Jälgi tasandit, pliiatseid ja trepp visandist](topic:trace-pens-stairs-obj).
- **Hooned ümber aadressi.** Hoonestus ja kinnistu, mille CivilCraft'i Address to site leidis, tulevad ettepanekutena; märgi lisamiseks need, mida tahad. Vt [Alusta CivilCraft'i saidist](topic:site-from-civilcraft).
- **Paneelijoonised.** {{ui:Versioon}} › {{ui:Paneelijoonised}} raamib seinad, põrandad ja katused puidus või kergterases ning salvestab lõikenimekirja CSV-na ja töökoja joonised PDF-ina. Algväärtused, mitte konstruktsioonilahendus. Vt [Paneelijoonised](topic:panel-drawings).
- **Sümbolipalett ja taimed.** {{ui:Versioon}} › {{ui:Sümbolipalett}} leiab elektri- ja torustiku sümbolid nime järgi; teegi allika {{ui:Taimed}} loetleb umbes 400 taime plaanisümbolitega. Vt [Sümbolipalett](topic:symbol-palette) ja [Paiguta taim](topic:plant-list).

**Torud, kanalid ja energia**

- **Jagatud süsteem, VRF ja ventilaatorkonvektorid.** Siseseadmed ja välisseadmed koos oma ühendustega ning vedelikuliinid, mis on dimensioneeritud tüüpiliste näidisväärtuste tabelist, mida saad muuta. Vt [Jagatud süsteem, VRF ja ventilaatorkonvektorid](topic:split-vrf-fan-coils).
- **Arvutused.** Arvutuste paan kontrollib tarnetorude ja kanalite suurusi rõhukaoga, suunab kaableid kaabelredelitesse ja torudesse ning näitab nende täitumist ning arvutab valgustugevuse IES- või EULUMDAT-failidest. Vaikeväärtused on märgitud; sisesta oma normi väärtused. Vt [Torude, kanalite, kaablite ja valguse arvutused](topic:mep-calculations).
- **PCF-failid.** Torutööriista **Ekspordi PCF** kirjutab jooksud torupinge- ja isomeetriliste programmide jaoks ning loetud PCF-fail joonistab oma toru. Vt [Torustiku komponendi failid](topic:piping-pcf).
- **Päikese-PV.** Paiguta massiivid katustele või maapinnale, varja neid mudelist, hinda aastast energiat, kontrolli stringe ja tee ühejoonelise skeemi andmed. Algmoodul ja kaod on üldised. Vt [Päikese-PV](topic:solar-pv).
- **EnergyPlus-fail.** Paan Kontrolli EnergyPlus-iga kirjutab mudeli IDF-ina, et käitada seda oma EnergyPlus-is. Brauseris käivitamine vajab sinu hostitud versiooni ja aadressi, mille sisestad; BimCraft seda kaasas ei kanna. Vt [Kontrolli kütet ja jahutust EnergyPlus-iga](topic:check-with-energyplus).

**Pildid ja failid**

- **Vali renderdusmootor.** {{ui:Renderda}} on valik {{ui:Mootor}}. Meie kaks sisseehitatud mootorit (Kiire ja Kiirte jälgija) jäävad vaikimisi. {{ui:Ava rakenduses}} salvestab stseeni USD- või glTF-failina ja Unreal-projekti kausta .zip-failina; CadCraft Studios saab lisandmoodul lisada mootori. Unreali plug-in, mis projekti avab, ei ole välja antud. Vt [Vali, mis programm joonistab pildi](topic:render-engines).
- **Studio tagasivõtmine.** CadCraft Studio sees ütleb BimCraft Studiole iga lõpetatud sammu, nii et Studio saab tagasi võtta su viimase sammu selles aknas, mida viimati kasutasid. Vt [Tagasivõtmine rakenduste vahel](topic:undo-across-apps).
- **Lisandmoodulid su failis.** IFC salvestab, millised lisandmoodulid sinna kirjutasid, ning pakub puuduvaid, kui seda avad. Vt [Lisandmoodulid su failis](topic:add-ons-in-your-file).

**Kõigis rakendustes**

- **Ühenda oma tehisintellekt.** Sinu enda assistent saab juhtida BimCraftit Studio ühenduse kaudu ja vastata küsimustele mudeli kohta, näiteks millised ruumid jäävad antud pindala alla. Studios endal tehisintellekti ei ole. Vt [Lase tehisintellekti assistendil mudeliga töötada](topic:assistants).
- **Tööriistariba read.** {{ui:Sätted}} › {{ui:Üldine}} › {{ui:Tööriistariba read}} pakub Wrap, 2 rida või 1 rida; Wrap jääb vaikeväärtuseks.
- **Sisendseadmed.** Puuteplaadi, pliiatsi, 3D-hiire, kontrolleri ja MIDI seaded on kõigil rakendustel ühised.
- **Probleemid ja Live.** Hoiatuspaneel ja Live-seansid töötavad nagu varem, uute kontrollidega, mis toidavad probleeme.
- **Keeled.** 54 keelt, neist kümme uut. Muud kui inglise keeled on masinmustandid, mida emakeelne kasutaja pole veel lugenud; abiteemad on enamasti inglise keeles.

### Parandatud versioonis 0.8.1

- **Lindi ja projektibrauseri paigutus.** Insert › Import CAD, Insert › Image ja Manage › Project Units ütlesid „Not built in BimCraft yet“. Image avab nüüd pildi tööriista, Import CAD avab {{ui:Versioon}} › {{ui:Joonisest…}} (DWG, DXF, PDF või skann) ja Project Units avab {{ui:Sätted}} › {{ui:Globaalne}} › {{ui:Ühikud}}. Move ja Align käivitavad liigutamis- ja joondamistööriista, Level avab {{ui:Lisa tasandeid…}}, Phases avab renovatsioonifaaside jao ja Materials avab materjaliteegi.
- **DWG klasside jaotis.** Seda luges vales tüübis; parandatud BimCraftis ja teistes DWG-d lugevates rakendustes.
- **Keel käitamisel.** Studio ja pakendatud väljaanded saavad nüüd keelt vahetada ilma taaskäivituseta. Seda pole veel katsetatud igal platvormil; ütle meile, kui keel ei muutu.
- **Archicadi paketi skript.** `archicad_bundle.py`, eraldi allalaadimine, leiab nüüd Archicadi tee, jälgib kausta kuni 20 sekundit ja proovib uuesti paketi kõrval.

### Pole selles versioonis veel

- **Ohutuse ja projekteerimise abivahendid.** Inimesed hoones ei tea ehitusnormist reisimise piirangut (sina sisestad piiri) ega ole käsitsi kontrollitud päris plaanil. Akustika, eluea ja ohu arvud on planeerimisväärtused, mitte normikontroll.
- **Kliimatulevik ja EnergyPlus.** Sisseehitatud kliimatulevikke pole: üleujutuse käigu jaoks saad laadida stsenaariumifaili. EnergyPlus-i käitamine brauseris ei ole selles väljalaskes.
- **Lindi paigutus.** Material Takeoff jääb seisu „Not built“, sest BimCraftil pole materjalikoguste nimekirja, ning veel 54 hallilt ribalt tööriista taga pole BimCraftis tööriista.
- **Allkirjastamine ja platvormid.** Windowsi paigaldajad ja macOS .dmg ei ole allkirjastatud, nii et SmartScreen näitab {{ui:Rohkem teavet}}, seejärel {{ui:Käivita siiski}}, ja macOS vajab parema klõpsu ning seejärel {{ui:Avatud}}. iPadi ja iPhone'i versiooni ei ehitatud versiooni 0.8.1 jaoks uuesti.
- **Päris lehtede testid.** Mõned vanemad BimCraft'i brauseritestid ebaõnnestuvad meie testlehel, nagu nad enne 0.8.1 tegid.

Kõik muu on leheküljel [Mis pole veel valmis](topic:not-built-yet). Varasemad muudatused on leheküljel [Mis on uut versioonis 0.7](topic:whats-new-0-7).
