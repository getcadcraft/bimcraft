---
title: Mis on uut versioonis 0.9 (varasem)
summary: Seina kujud, jaotamine, nihe, venitus ja ruudustikule lukustamine, tasandid maapinna all, ruudustiku mõõdud ja mõõtmine plaanil, dubleeritud vaated töörežiimide ja pliiatsitabelitega, Raporteeri kui, Collada ja Google Earthi eksport, Scan to BIM, tuule- ja seismiline analüüs, vaikuvaid vaiku printimise lisandmoodulid.
keywords: mis on uut 0.9, varasem versioon, mis on uut, 0.9, väljalaske märkmed, seina kujud, ristkülik, hulknurk, kaar, vali jooned, joonelise ääriku jälgimine, nihe, ühendus, kasti venitus, joonda ja lukusta, jaga sein, vahe, ühenda uuesti, lukusta ruudustikku, kasva algusest, mõõda algusest, lisa tasand allapoole, keldrikorrus, tasandi käsk, ruudustiku mõõdud, mõõda plaanil, töörežiim, dubleeritud vaade, oma koopia, seotud vaade, pliiatsitabel, prindi nagu näed, raporteeri kui, sisesta mõõtkava, impordi svg, paiguta plaanile, paiguta mudelisse, collada, dae, kmz, google earth, scan to bim, tuulekoormus, seismiline, lõplike elementide, dokumentide paneel, vaikuvaid vaiku printimine, mis on uut, muudatuste logi, 0.8, 0.8.1, versioon, uued funktsioonid, evakuatsioon, inimesed, järjekorrad, akustika, reverberatsioon, impulssvastus, üleujutus, tuul, maavärin, oht, elutsükkel, kasutusiga, ids, sildid, loendid, nihuta, joonda, jaota, pilt, taust, skaneeringust seinteks, sait civilcraftist, paneelijoonised, karkass, päike, pv, jaota, vrf, siseseadme ploki, torude mõõtmine, kaabliredel, valgustugevus, betoon, seismiline, skaneeringu võrdlus, epsg, projektsioon, dokumendid, mall, süsinik, maksumus, energyplus, renderdusmootor, ava, usd, glb, unreal, võta tagasi, lisandmoodulid, pcf, sümbolid, taimed, jälgi, pliiatsid, lint, projekti sirvija, paigutus
from: 816df7f8
---

See on see, mis muutus BimCraftis 0.9 võrreldes versiooniga 0.8.1. Kaks suurt teemat on päris seinatööriist ning vaated, mis käituvad nii, nagu suurte BIM-programmide kasutajad ootavad. Nende kõrval tulevad Collada eksport, assistendid, mis oskavad paigutada elektriseadmeid, Scan to BIM ning tuule-, seismiline ja lõplike elementide töö sakis {{ui:Analüüs}}.

## Uus

### Seinad

- **Joonista terveid kujundeid.** Tööriistas {{ui:Joonista}} ava {{ui:Kujud}} (või vali kuju seinarea nimekirjast Kuju) ristküliku, pööratud ristküliku, 3–64 küljega hulknurga, keskpunkti järgi kaare, puutuja kaare, valitud joonte järgi seinad või suletud ala ümber seinad, mida klõpsad seespool. Ristkülik on neli seina nelja ühendatud nurgaga ja üks tagasivõtmise samm. Vt [Seina kujud, jaotamine, nihe, venitus ja lukustus](topic:wall-tools).
- **Määra enne joonistamist, muuda pärast.** Seinarealt leiad {{ui:Nihe}} ja {{ui:Ühendus}} (eemalda märge, et joonistada vabalt seisvad seinad). Hiljem kasuta joonistatud seintel {{ui:Nihe}}, {{ui:Kasti venitus}} ja {{ui:Joonda ja lukusta}}. Nihutatud või venitatud sein säilitab oma uksed, aknad ja mõõdud. Iga retsept on üks tagasivõtmise samm.
- **Lõika seinu.** {{ui:Jaga}}, {{ui:Vahe}}, {{ui:Vabad otsad}}, {{ui:Kustuta lõik}} ja {{ui:Ühenda uuesti}} lõikavad seina klõpsu kohas või seal, kus teine sein seda ristab. Lõige läbi ukse keeldutakse. Vt [Seina kujud, jaotamine, nihe, venitus ja lukustus](topic:wall-tools).
- **Lukusta seinad ruudustiku joontele.** Vali ruudustiku joonel olev sein ja märgi {{ui:Omadused}} all {{ui:Lukusta ruudustikku}}. Kui ruudustiku tööriist on sisse lülitatud, kirjuta valitud joone jaoks väljale {{ui:Nihuta võrra}} vahemaa ning lukustatud seinad järgivad ühe tagasivõtmise sammuga.
- **Kuju ühele seinale.** Ühe seina {{ui:Omadused}} all saad selle ülaosa või aluse kinnitada katusele, põrandale või lakke, muuta selle kõrguskontuuri, kallutada seina või lõigata seina sisse avause ilma ukse või aknata. Vt [Seina kuju](topic:wall-shape).
- **Pikkus näitab, milline ots paigal jääb.** {{ui:Kasva algusest}} määrab, kas pikkuse muutmisel jääb paigale algus, lõpp või keskpunkt.
- **Pikkus ja plaani mõõde ühtivad.** {{ui:Mõõda algusest}} (keskjoon, sisemine külg või välimine külg) juhib nii pikkuse välja kui ka plaani seina mõõtmed. See algab keskjoonest, seega loevad plaani seina mõõtmed nüüd keskjoont seal, kus need varem lugesid välimist külge. Muuda seda reas Sein, jaotises {{ui:Omadused}} või menüüs {{ui:Sätted}} › {{ui:BimCraft}} › {{ui:Seinad}}.

### Tasandid, ruudustikud ja mõõtmine

- **Lisa tasand allapoole.** {{ui:Lisa tasand allapoole}} paneelis {{ui:Tasandid}} lisab madalaima tasandi alla tasandi, sama kõrge kui see, negatiivsel kõrgusel (Tasand -1, Tasand -2). Midagi muu ei liigu. {{ui:Lisa tasandeid…}} aktsepteerib nüüd negatiivseid kõrgusi. Käsurea sõna TASAND, TASANDID, KORRUS või KORRUSED avab {{ui:Lisa tasandeid…}}, ning menüüdes ja lindi sakkides on nupp {{ui:Tasandid}}. Vt [Kinnistud, hooned ja tasandid](topic:site-building-and-levels).
- **Ruudustiku mõõdud plaanil.** Kui tööriist {{ui:Ruudustik}} on sisse lülitatud, märgi {{ui:Mõõdud}}, et joonistada iga naabruses olevate joonte vahe ja üldmõõt mullide taha igal tasandi plaanil. Vt [Ruudustiku mõõtmine](topic:grid-dimensions).
- **Mõõtmine plaanil.** {{ui:Mõõda}} grupis {{ui:Joonista}} annab kahe klõpsu vahelise kauguse koos X- ja Y-erinevustega. Mudelisse midagi ei salvestata. Vt [Mõõtmine plaanil](topic:measure-on-the-plan).
- **Muuda mitut tulpa korraga.** Vali tulpad koos seinaga ning valik loetleb iga liigi koos valikuga {{ui:Jäta ainult need}}. Üks klõps jätab tulbad alles ja näitab nende ühiseid välju.
- **Üks kuvamisühik kõikjal.** Koordinaadid, mõõtmised, lõiked, lehtede mõõtkavad, raami sakk koormuste ja tulemuste ning probleemide tekst järgivad valitud ühikut. Eksport jääb SI-ühikutesse.

### Vaated, lehed ja printimine

- **Töörežiim.** {{ui:Sätted}} › {{ui:BimCraft}} › {{ui:Töörežiim}} valib, kas igal vaatel on oma märkused ja pliiatsitabelid või need on jagatud. Vt [Töörežiim, dubleeritud vaated, pliiatsid paberil, Raporteeri kui ja mallid](topic:working-style).
- **Dubleeri vaade.** Plaane, laeplaane, kutsevaateid, vaateid ja lõikeid saab dubleerida kui {{ui:Oma koopia}} või {{ui:Seotud}}; {{ui:Muuda oma koopiaks}} muudab seotud vaate iseseisvaks. Vt [Töörežiim, dubleeritud vaated, pliiatsid paberil, Raporteeri kui ja mallid](topic:working-style).
- **Prindi nagu näed või pliiatsitabeli järgi.** Pliiatsi ülekirjutused hoitakse IFC-s koos vaatega ning lehed ja PDF-id joonistavad need nii, nagu ekraan. Sama teema hõlmab pliiatsitabeleid.
- **Raporteeri kui.** {{ui:Raporteeri kui}} jaotises {{ui:Omadused}} kirjutab tee joonistatud plaadi, seina paneelina või katuse rambina IFC-sse valitud klassina ning loeb seda nii loendites, kogustes, otsingus, Värvi järgi ja probleemides.
- **Muuda fassaadides ja lõigetes.** Joonista ja liiguta seinu, avasid, tasandeid, mõõtmeid ja märkmeid otse fassaadis või lõikes, oma lehesuurustega ja tiitelplokkidega. Vt [Muuda fassaadides ja lõigetes](topic:edit-in-elevations).
- **Lehed.** Iga leht võib olla maastik- või portreerežiimis. Kast {{ui:Sisesta mõõtkava}} asub mõõtkavade nimekirja kõrval igal paigutatud vaatel (1:64, 2:1, 1/4" = 1'). Paigutatud joonist võib lohistada või nihutada nooleklahvidega, ja {{ui:Vormingud…}} › {{ui:Impordi SVG…}} muudab sinu enda lehekujunduse tiitelplokiks, mille väljad on igal lehel eraldi sisestatavad.
- **Teekide tunnustused lehel.** Joonisekomplekt, millel on teegi üksusi, saab teegi tunnustuste loendi, mille võid paigutada suvalisele lehele. Vt [Teegi tunnustused](topic:library-credits).

### Teek: paigutamine

- **Paigutamine järgib vaadet.** Plaanivaates näitab teek nuppu {{ui:Paiguta plaanile}}; 3D-vaates nuppu {{ui:Paiguta mudelisse}}; jaotatud vaates jagatud nuppu, mille peatoiming on {{ui:Paiguta plaanile}}. Mõlemad viisid kirjutavad sama IFC-elemendi. Samuti saad lohistada teegi kaardi plaanile või 3D-vaatesse; pliiatsi või sõrmega vajuta ja hoia all, seejärel lohista. Vt [Paiguta teegist](topic:place-from-library).

### Failid ja assistendid

- **Collada ja Google Earth.** {{ui:Collada}} tööriistaribal (menüüstiilides menüü Fail) kirjutab faili .dae või .kmz, mis asetatakse kaardil mudeli asukohta. Vt [Mudeli eksport Collada või Google Earthi jaoks](topic:collada).
- **Assistendid saavad paigutada elektriseadmeid.** Ühendatud assistendil on uued tööriistad seadmete lisamiseks, loetlemiseks, muutmiseks ja kustutamiseks ning valgustite seadistamiseks. Assistendid jäävad väljaks, kuni lülitad need sisse sätetes {{ui:Sätted}}. Vt [Lase tehisintellekti assistendil töötada sinu mudeliga](topic:assistants).
- **Scan to BIM (lisandmoodul).** Vaikimisi väljas ning vajab lisandmoodulit Punktpilved. See pakub skaneeringust põrandaid, seinu, uksi ja aknaid koos iga elemendi mõõdetud kõrvalekaldega; pakkumise vastuvõtmine on üks tagasivõtmise samm.

### Analüüs

- **Tuule- ja seismilised andmed asukohale.** Sakis {{ui:Analüüs}}: tuulekoormused ASCE 7-10 või 7-16 järgi jäigale suletud hoonele, iga korruse jõud koormusjuhtudena ning seismilised asukohaandmed USGS-i päringu ja projekteerimisspektriga.
- **Konstruktsiooni järelkontroll ja lõplikud elemendid.** Betoonkontrollid standardi ACI 318-19 järgi, ekvivalentsed külgjõud standardi ASCE 7-22 järgi, korruse triiv, plaadid ja seinad plaatidena ning koormuskombinatsioonid standardite ASCE 7 ja EN 1990 järgi. Meie enda lõplike elementide mootor teeb kestasid, tetraeedreid ja modaalanalüüsi. Vt [Kontrolli betoonelemente ja tee seismilisi koormusi](topic:concrete-and-seismic) ja [Raamanalüüs](topic:frame-analysis).

### Muud lisandmoodulid ja dokumendid

- **Sisevalgustus (lisandmoodul).** Paigutab valgustid ja kirjutab luksi väärtused numbritena iga tasandi plaanile koos hinnanguga pimestuse kohta ja prinditava aruandega.
- **Dokumentide paneel.** {{ui:Fail}} › {{ui:Dokumendid…}} pakub väljavõtmist ja tagastamist lukufailiga, redaktsioonitähti, väljaandeolekuid ja ajalugu.
- **Piirkonnad ja teras.** Lõuna-Aafrika joonise- ja ehitusmäärustiku paketid lisandmoodulis Regulatsioonid ning 976 Ühendkuningriigi terasemõõtu jagatud lõigutabelis.
- **Tasuta vaikuvaid vaiku printimise lisandmoodulid.** Viilutaja, toed ja alus, säriteste ning failivormingud GOO, SL1, Chitubox ja Anycubic, kõik vaikimisi väljas.

## Kõigis rakendustes

- Nupu või juhtelemendi kohal hoides kuvatakse Bootstrapi tööriistavihje.
- Tühja joonistusala alguse vihjel on sulgemisnupp; BimCraft mäletab, et see suleti.
- Paneeli sakiriba, mis ei mahu, kerib nüüd eemale lõikamise asemel.
- Dokumendi avamisel loeb brauseri pealkiri „<dokument> - BimCraft | CadCraft“.
- Sätetes {{ui:Sätted}} › {{ui:Üldine}} › {{ui:Paigutus}} on paigutused rippmenüü kaheReaste valikutega.
- Keelte nimekiri sätetes pakub rohkem keeli kui versioonis 0.8; muud keeled peale inglise keele on masinmustandid.

## Parandatud

- **Liigutamine toimib trepil** ning rampidel, piirdeil, katuse tasapindadel, vabalt seisvatel seadmetel, piltidel ja radadel.
- **Seina lohistamine enam ei moonuta ruumi.** Keskmine haaratsi liigutab seina ruudukujuliselt iseenda suhtes ning selle nurgad libisevad mööda ühendatud seinu. Hoia all {{key:Mod}}, et saada vana vaba liigutus; {{ui:Joonda risti}} toob 90 kraadi tagasi.
- **Paksuse või tüübi muutmine ühendatud sõlmes** hoiab nurga suletuna L-kujul, T-kujul, kolme seina sõlmes ja kõvera seina kõrval.
- **Rühma ruumide liigutamine või kopeerimine** hoiab rühmast väljaspool olevad ühendatud seinad ühendatuna.
- **Redo säilitab seinamõõdu identiteedi.**
- **Seina valimine, kui Joonista on väljas,** ei tekita enam viga omaduste paneelis.
- **Render langeb tagasi WebGL-ile**, kui GPU ei käivitu, selle asemel et peatuda.
- **EnergyPlus-i kontrolli** saab taas sisse lülitada.
- **Dokumendid avanevad keskel asuva dialoogina.** {{key:Esc}}, X või klõps tuhmunud lehel sulgeb selle.
- **Nupud {{ui:Plaan}}, {{ui:Jaga}} ja {{ui:3D}} ilmuvad**, kui mudel on avatud, mitte ainult pärast seda, kui Joonista oli kord sisse lülitatud.

## Ausad piirangud

- Midagi pole printtud päris riistvaral. Vaiksed toed on uued ja tõestamata.
- Tuule-, seismilised, betooni- ja lõplike elementide tulemused on insenerile mõeldud kontrollvahendid, kontrollitud suletud valemite, mitte päris hoone vastu.
- Scan to BIM katsetati sünteetilisel hoonel, mitte päris skaneeringul, ja see leiab ainult ristkülikukujulisi ruume.
- Collada-faili ei ole siin avatud Blenderis ega Google Earthis.
- Valgustuse hinnang on kontrollitud meie enda jälituse vastu, mitte teiste valgustusprogrammide vastu.
- Lõuna-Aafrika arvud on kinnitamata.
- Seinaühenduse stiile (otsekohe, vikerkaar, ruut) ja kihtide prioriteeti ei ole loodud; nurgad on vikerkaarkujulised.
- Muud keeled peale inglise keele on masinmustandid.

Kõik muu on jaotises [Mida pole veel loodud](topic:not-built-yet). Varasemad muudatused on selle lehe allosas olevates märkmetes versioonide 0.8 ja 0.8.1 kohta.

## Varem: 0.8 ja 0.8.1

See on see, mis muutus BimCraftis 0.8 (2026-11-01) ja 0.8.1 (2026-11-02) võrreldes versiooniga 0.7. BimCraft oskab nüüd vastata küsimustele hoone kohta ja seda testida inimeste, heli, vee, tuule ja maavärinatega ning joonistada seda rohkemate tööriistadega; 0.8.1 on parandusversioon.

### Uus

**Testi hoonet**

- **Inimesed hoones.** Vasakpoolse paneeli jaotis {{ui:Inimesed hoones}} viib evakuatsiooni või tavapärase päeva saabujaid läbi sinu ruumide, uste ja trepi. Näed järjekordi kohtades, kus hoone kitseneb, pikimat teekonda väljapääsuni igast ruumist ja seda, kui kaua viimane inimene kulub. Märgi uksel {{ui:Suletud}}, et näha, mis muutub, ning märgi {{ui:Näita inimesi 3D-vaates}}, et jälgida kõndijaid. Leiud lähevad Probleemidesse. See on karm rahvahulga mudel projekteerimisotsuste jaoks, mitte tuleohutuse sertifikaat. Vt [Lase inimestel hoones kõndida](topic:people-in-the-building).
- **Ruumi akustika ja selle kuulmine.** Jaotis {{ui:Ruumi akustika}} annab iga ruumi järelkõlamisaja oktaavribade kaupa (Sabine ja Eyring) selle suuruse ja valitud viimistluste järgi ning oma sihtväärtuse korral ütleb, kui palju neeldumist oleks vaja selle saavutamiseks. {{ui:Esita selles ruumis}} mängib häält, plaksutamist, näpitud noote või sinu enda helifaili läbi impulssvastuse, mis on arvutatud ruumi jaoks. Neeldumisarvud on tüüpilised avaldatud väärtused, mida sa võid asendada. Vt [Ruumi akustika](topic:room-acoustics).
- **Üleujutuse, tuule ja maavärina esitus.** {{ui:Ohu esitus}} näitab, kuidas vesi tõuseb läbi ruumide, tuulerõhku igal korrusel ja maavärina korruste raputamist plaanil või fassaadil ajaliuguriga. Lihtsad mudelid koos oma eeldustega paneelil; mitte normikontroll. Vt [Esita üleujutus, tuul või maavärin](topic:hazard-playback).
- **Mis kulub viiekümne aasta jooksul.** {{ui:Elutsükli vaade}} loetleb aknad, uksed, viimistlused ja katuse koos igaühe kasutusajaga, aastad, mil need asendatakse, ja kui sisestad ühikuhinna, siis maksumuse aasta kaupa ning selle nüüdisväärtuse. {{ui:Salvesta ajakava (CSV)}} kirjutab selle välja. Kasutusajad on planeerimisarvud. Vt [Vaata, mis kulub viiekümne aasta jooksul](topic:life-cycle-view).
- **Betooni- ja seismilised kontrollid.** Plokid {{ui:Betoonelemendid}} ja {{ui:Seismilised koormused}} sakist {{ui:Analüüs}} kontrollivad betoontalasid ja -sambaid standardi ACI 318-19 järgi ning teevad ekvivalentseid külgjõude standardi ASCE 7-22 järgi jäikadel põrandatel koos korruse triiviga. Insenerile kontrollimiseks. Vt [Kontrolli betoonelemente ja tee seismilisi koormusi](topic:concrete-and-seismic).

**Kontrolli ja raporteeri**

- **Kontrolli IDS-i vastu.** Laadi klientilt saadud `.ids`-fail ja vaata Probleemides iga elementi, mis ei vasta sellele, enne IFC-faili üleandmist. Ava {{ui:Kontrolli IDS-i vastu}} jaotises {{ui:Mudeli kontrollid}}. Vt [Kontrolli mudelit kliendi IDS-i vastu](topic:check-against-ids).
- **Sildid ja loendid.** Määra oma sildid, sea neid korraga paljudele elementidele ja tee loendeid, mille tulbad, filtrid ja rühmad neid loevad; sildid säilivad IFC-s. Vt [Sildid ja loendid](topic:tags-and-schedules).
- **Dokumendid mudelist.** {{ui:Dokumendid mudelist}} täidab spetsifikatsioonimalli avatud IFC-st ja salvestab selle PDF-ina, Wordi dokumendina või Markdownina. Vt [Dokumendid mudelist](topic:documents-from-the-model).
- **Võrdle skaneeringut mudeliga.** Kui punktpilv on avatud, hindab {{ui:Võrdle}} iga elementi kui ehitatud, osaliselt ehitatud, puuduvat või jõudmata ning näitab ehitatud protsenti. Vt [Võrdle skaneeringut mudeliga](topic:compare-scan-with-model).
- **Süsinik ja maksumus.** Paneel Süsinik liidab kehastunud süsiniku tegurite tabelist, mida saad muuta, ning paneel Maksumus jaotab hinnad 4D-ajakavale. BimCraftiga kaasas olevad tegurid on üldised ja märgitud kontrollimata. Vt [Kehastunud süsinik ja maksumus](topic:embodied-carbon-and-5d-cost).
- **Iga kaardiprojektsioon.** {{ui:Mõõda}} › {{ui:Koordinaatsüsteem…}} võtab EPSG-numbri, UTM-tsooni, nime või sinu enda projektsioonimääratluse. Vt [Georefereeri mis tahes projektsiooniga](topic:georeference-any-projection).

**Joonista ja muuda**

- **Liiguta, joonda ja jaota.** Rea {{ui:Versioon}} all; {{key:Shift+M}} käivitab Liiguta (tavaline {{key:M}} on endiselt Mõõda). Liiguta kopeerib sammudes koos klahviga {{key:C}}, iga samm on üks tagasivõtmine ning see liigub Live TeamWork seansis. Vt [Liiguta, kopeeri, joonda ja jaota](topic:move-align-distribute).
- **Pildid plaani all.** {{ui:Versioon}} › {{ui:Pilt}} paigutab PNG-, JPEG- või WebP-pildi tasandi plaani alla või vertikaalsele tasandile. Mõõtkava määratakse kahe punktiga ning saad pilti liigutada, pöörata, hääbuda ja lukustada. MarkupCraftis kopeeritud ala kleebitakse sisse oma lehe mõõtkavas. Vt [Aseta pilt plaani alla](topic:pictures-as-backgrounds).
- **Seinad skaneeringust.** Kui skaneering on avatud, tulevad seinad, uksed ja ruumid ettepanekutena, mida hoiad või lükkad tagasi ükshaaval, üheks tagasivõtmise sammuks. Leitakse ainult kahes risti asetseva suunas olevad seinad. Vt [Muuda skaneering seinteks](topic:scan-to-walls).
- **Trace, pliiatsid ja visandtrepp.** {{ui:Jälgi}} näitab teist tasandit katkendjoonena plaani all, {{ui:Pliiatsid}} annab seintele, ustele ja akendele oma joonepaksuse ühes vaates ning {{ui:Visandda trepp}} muudab kõndimisjoone trepiks. Avaneb Wavefront OBJ võrk. Vt [Jälgi tasandit, pliiatseid ja trepit visandist](topic:trace-pens-stairs-obj).
- **Hooned aadressi ümber.** CivilCraft'i aadressi järgi leitud hooned ja krunt tulevad soovitustena; märgi need, mida lisada. Vt [Alusta CivilCraft'i saidiga](topic:site-from-civilcraft).
- **Paneelijoonised.** {{ui:Versioon}} › {{ui:Paneelijoonised}} raamib seinad, põrandad ja katused puidust või kergest terasest ning salvestab lõikenimekirja CSV-na ja töökojajoonised PDF-ina. Alustamise väärtused, mitte konstruktsiooniprojekt. Vt [Paneelijoonised](topic:panel-drawings).
- **Sümbolipalett ja taimed.** {{ui:Versioon}} › {{ui:Sümbolipalett}} leiab elektri- ja torustiku sümbolid nime järgi; teegi allika {{ui:Taimed}} loetleb umbes 400 taime plaanisümbolitega. Vt [Sümbolipalett](topic:symbol-palette) ja [Paiguta taim](topic:plant-list).

**Torud, kanalid ja energia**

- **Split, VRF ja siseseadmed.** Sise- ja välisseadmed koos oma ühendustega ning lõigu komplektid, mille mõõtmed on võetud tüüpiliste näidisväärtuste tabelist, mida saad muuta. Vt Split, VRF ja siseseadmed.
- **Arvutused.** Paneel Arvutused kontrollib tarnetorude ja kanalite mõõtmeid rõhukaoga, suunab kaableid kaablirennide ja torude kaudu ning näitab nende täitumist, ja arvutab valgustugevuse IES- või EULUMDAT-failidest. Vaikeväärtused on märgistatud; sisesta oma normi väärtused. Vt [Torude, kanalite, kaablite ja valguse arvutused](topic:mep-calculations).
- **PCF-failid.** Toru tööriista **Ekspordi PCF** kirjutab trassid torupinge- ja isomeetriaprogrammidele ning tagasi loetud PCF-fail joonistab oma toru. Vt [Torukomponentide failid](topic:piping-pcf).
- **Päikese PV.** Paiguta massiivid katustele või maapinnale, varjuta need mudelist, hinda aastast energiat, kontrolli stringe ja tee ühejoonelise skeemi andmed. Algmoodul ja kaod on üldised. Vt [Päikese PV](topic:solar-pv).
- **EnergyPlus-i fail.** Paneel Kontrolli EnergyPlus-iga kirjutab mudeli IDF-ina, et käivitada see oma EnergyPlus-is. Brauseris käivitamine nõuab sinu enda majutatud versiooni ja aadressi, mille sisestad; BimCraft seda kaasas ei kanna. Vt [Kontrolli küte ja jahutus EnergyPlus-iga](topic:check-with-energyplus).

**Pildid ja failid**

- **Vali renderdusmootor.** {{ui:Renderda}} sisaldab valikut {{ui:Mootor}}. Meie kaks sisseehitatud mootorit (Kiire ja Teetracer) jäävad vaikeväärtuseks. **Ava** salvestab stseeni USD- või glTF-failina ning Unreali projekti kausta .zip-failina; CadCraft Studios saab lisandmoodul lisada mootori. Unreali plug-in, mis projekti avab, ei ole välja antud. Vt [Vali, milline programm pildi joonistab](topic:render-engines).
- **Studio tagasivõtmine.** CadCraft Studio sees annab BimCraft Studiole teada iga lõpetatud sammu, nii et Studio saab võtta tagasi sinu viimase sammu selles aknas, mida viimati kasutasid. Vt [Tagasivõtmine rakenduste vahel](topic:undo-across-apps).
- **Lisandmoodulid sinu failis.** IFC salvestab, milline lisandmoodul sinna kirjutas, ja pakub puuduvaid, kui seda avad. Vt [Lisandmoodulid sinu failis](topic:add-ons-in-your-file).

**Kõigis rakendustes**

- **Ühenda oma tehisintellekt.** Sinu enda assistent saab juhtida BimCraftit läbi Studio ühenduse ja vastata küsimustele mudeli kohta, näiteks millised ruumid on antud pindala all. Studiol endal tehisintellekti ei ole. Vt [Lase tehisintellekti assistendil töötada sinu mudeliga](topic:assistants).
- **Tööriistaribade read.** {{ui:Sätted}} › {{ui:Üldine}} › {{ui:Tööriistariba read}} pakub valikuid Murra, 2 rida või 1 rida; Murra jääb vaikeväärtuseks.
- **Sisendseadmed.** Puuteplaadi, pliiatsi, 3D-hiire, kontrolleri ja MIDI sätted on kõigile rakendustele ühised.
- **Probleemid ja Live.** Hoiatuste paneel ja Live-seansid töötavad nagu varem, uued ülal nimetatud kontrollid toidavad Probleeme.
- **Keeled.** 54 keelt, neist kümme uut. Muud keeled peale inglise keele on masinmustandid, mida pole veel loetud emakeelena kõneleja poolt; abiteemad on enamasti inglise keeles.

### Parandatud versioonis 0.8.1

- **Lindi ja projekti sirvija paigutus.** Lisa › Impordi CAD, Lisa › Pilt ja Halda › Projekti ühikud ütlesid „Pole veel BimCraftis loodud“. Nüüd avab Pilt tööriista Pilt, Impordi CAD avab {{ui:Versioon}} › {{ui:Joonisest…}} (DWG, DXF, PDF või skaneering) ja Projekti ühikud avab {{ui:Sätted}} › {{ui:Globaalne}} › {{ui:Ühikud}}. Liigu ja Joonda käivitavad tööriistad Liiguta ja Joonda, Tasand avab {{ui:Lisa tasandeid…}}, Faasid avab jaotise Renoveerimise faasid ning Materjalid avab materjaliteegi.
- **DWG-klasside jaotis.** Seda loeti vale tüübina; parandatud BimCraftis ja teistes rakendustes, mis loevad DWG-d.
- **Keel töö ajal.** Studio ja pakendatud väljaanded saavad nüüd keelt vahetada ilma taaskäivituseta. Seda pole veel kõigil platvormidel testitud; teata, kui keel ei muutu.
- **Archicadi paketi skript.** `archicad_bundle.py`, eraldi allalaadimine, leiab nüüd Archicadi tee, jälgib kausta kuni 20 sekundit ja proovib uuesti paketi kõrval.

### Ei ole selles versioonis veel

- **Ohutus- ja projekteerimisabivahendid.** Inimesed hoones ei tea hoonenormist tulenevat käigupikkuse piirangut (piirangu sisestad ise) ning pole käsitsi kontrollitud päris plaanil. Akustika, elutsükli ja ohu arvud on planeerimisväärtused, mitte normikontroll.
- **Kliimaprognoosid ja EnergyPlus.** Sisseehitatud kliimaprognoose ei ole: üleujutuse arvutuseks saad laadida stsenaariumifaili. EnergyPlus-i käivitamine brauseris ei ole selles versioonis.
- **Lindi paigutus.** Materjali kogused jäävad „Pole loodud“ olekusse, sest BimCraftil ei ole materjalikoguste loendit, ja 54 muud hallid lindi tööriista ei ole veel BimCraftis vastavat tööriista.
- **Allkirjastamine ja platvormid.** Windowsi installijad ja macOS-i .dmg ei ole allkirjastatud, seega SmartScreen näitab {{ui:Rohkem teavet}}, seejärel {{ui:Käivita siiski}}, ja macOS nõuab paremklõpsu ning seejärel {{ui:Ava}}. iPadi ja iPhone'i versiooni ei ole versiooni 0.8.1 jaoks uuesti ehitatud.
- **Päris lehe testid.** Mõned vanemad BimCraft-brauseri testid ebaõnnestuvad meie testlehel, nagu need ka enne 0.8.1 ebaõnnestusid.

Kõik muu on jaotises [Mida pole veel loodud](topic:not-built-yet). Varasemad muudatused on jaotises [Mis on uut versioonis 0.7](topic:whats-new-0-7).
