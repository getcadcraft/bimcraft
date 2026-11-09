---
title: Mis on uut versioonides 0.8 ja 0.8.1
summary: BimCraft lisab inimeste kõndimise läbi hoone, ruumi akustika, mida saab kuulda, üleujutuse, tuule ja maavärina esituse, viiekümne aasta elutsükli vaate, kontrollid IDS-i vastu, sildid ja ajakavad, Teisalda, Joonda ja Jaota ühtlaselt, pildid plaani all, seinad skannist, paneelijoonised, päikese, jaotatud ja VRF-süsteemid, torude ja kaablite mõõtmise, betooni ja seismilised kontrollid, suvalise kaardiprojektsiooni, renderdusmootori valiku ja Studio tagasivõtmise; 0.8.1 parandab lindi paigutuse hallid tööriistad.
keywords: mis on uut, väljalaskemärkmed, muutelogi, muudatused, 0.8, 0.8.1, versioon, uued funktsioonid, evakuatsioon, inimesed, järjekorrad, akustika, kajaaeg, impulssvastus, üleujutus, tuul, maavärin, oht, elutsükkel, kasutusiga, ids, sildid, ajakavad, teisalda, joonda, jaota, pilt, taust, skannist seinad, CivilCraftist asukoht, paneelijoonised, karkass, päike, pv, jaotatud, vrf, fancoil, torude mõõtmine, kaabliredel, valgustugevus, betoon, seismiline, skanni võrdlus, epsg, projektsioon, dokumendid, mall, süsinik, maksumus, energyplus, renderdusmootor, ava rakendusega, usd, glb, unreal, tagasivõtmine, lisandmoodulid, pcf, sümbolid, taimed, jälgimine, pliiatsid, lint, projektibrauser, paigutus
from: 87b03056
---

See on, mis muutus BimCraftis versioonis 0.8 (2026-11-01) ja 0.8.1 (2026-11-02) võrreldes versiooniga 0.7. BimCraft suudab nüüd vastata küsimustele hoone kohta ja seda testida inimeste, heli, vee, tuule ja maavärinatega ning joonistada seda rohkemate tööriistadega; 0.8.1 on paranduste väljalase.

## Uus

### Hoone testimine

- **Inimesed hoones.** Jaotis {{ui:Inimesed hoones}} vasakul paneelil viib evakueerimise või tavapäevase saabumise läbi sinu ruumidest, uste ja trepivahede. Näed järjekordi kohtades, kus hoone kitseneb, pikimat teekonda väljapääsuni igast ruumist ja seda, kui kaua viimasel inimesel läheb. Märgi {{ui:Suletud}} ukse juurest, et näha, mis muutub, ja märgi {{ui:Näita inimesi 3D-vaates}}, et jälgida kõndijaid. Leiud lähevad Probleemide alla. See on karm rahvamassi mudel projekteerimisotsuste jaoks, mitte tuleohutussertifikaat. Vaata [Inimeste läbikõndimine hoones](topic:people-in-the-building).
- **Ruumi akustika ja selle kuulmine.** Jaotis {{ui:Ruumi akustika}} annab iga ruumi kajaaja oktaavribade kaupa (Sabine ja Eyring) selle suuruse ja sinu valitud viimistluste järgi ning sihtväärtusega on võimalik öelda, kui palju neelavust oleks vaja, et see täita. {{ui:Esita selles ruumis}} mängib häält, plaksutamist, näpitud noote või sinu enda helifaili läbi ruumi jaoks arvutatud impulssvastuse. Neelavuse väärtused on tüüpilised avaldatud väärtused, mida saad asendada. Vaata [Ruumi akustika](topic:room-acoustics).
- **Üleujutuse, tuule ja maavärina esitus.** {{ui:Ohu esitus}} mängib tõusvat vett ruumides, tuulerõhku igal korrusel ja maavärinat, mis raputab korruseid, plaanil või fassaadil ajaliuguriga. Lihtsad mudelid koos oma eeldustega paneelil; mitte normikontroll. Vaata [Üleujutuse, tuule või maavärina esitamine](topic:hazard-playback).
- **Mis kulub viiekümne aasta jooksul.** {{ui:Elutsükli vaade}} loetleb aknad, uksed, viimistlused ja katuse koos igaühe kasutusajaga, aastad, mil need asendatakse, ja kui sisestad ühiku hinna, siis maksumuse aasta kaupa ja selle nüüdisväärtuse. {{ui:Salvesta ajakava (CSV)}} kirjutab selle välja. Kasutusajad on planeerimisarvud. Vaata [Vaata, mis kulub viiekümne aasta jooksul](topic:life-cycle-view).
- **Betoon- ja seismilised kontrollid.** Vahekaardi {{ui:Analüüs}} plokid {{ui:Betoonelemendid}} ja {{ui:Seismilised koormused}} kontrollivad betoontalasid ja -poste standardi ACI 318-19 järgi ning arvutavad jäigal laeal ekvivalentsed külgjõud standardi ASCE 7-22 järgi koos korruse nihkega. Insener peab kontrollima. Vaata [Betoonelemendite kontrollimine ja seismiliste koormuste arvutamine](topic:concrete-and-seismic).

### Kontrollimine ja aruandlus

- **Kontroll IDS-i vastu.** Laadi klientilt saadud `.ids`-fail ja vaata Probleemides iga elementi, mis ei vasta sellele, enne IFC üleandmist. Ava {{ui:Kontrolli IDS-i vastu}} jaotises {{ui:Mudeli kontrollid}}. Vaata [Mudeli kontrollimine kliendi IDS-i vastu](topic:check-against-ids).
- **Sildid ja ajakavad.** Defineeri oma sildid, määra neid korraga paljudele elementidele ning koosta ajakavad, mille veerud, filtrid ja rühmad neid loevad; sildid säilivad IFC-s. Vaata [Sildid ja ajakavad](topic:tags-and-schedules).
- **Dokumendid mudelist.** {{ui:Dokumendid mudelist}} täidab spetsifikatsioonimalli avatud IFC-st ja salvestab selle PDF-ina, Wordi dokumendina või Markdownina. Vaata [Dokumendid mudelist](topic:documents-from-the-model).
- **Skannu ja mudeli võrdlus.** Kui punktipilv on avatud, hindab {{ui:Võrdle}} iga elementi kui ehitatud, osaliselt ehitatud, puuduvana või jõudmata, ning näitab ehitatud protsenti. Vaata [Skanni võrdlemine mudeliga](topic:compare-scan-with-model).
- **Süsinik ja maksumus.** Paneel Süsinik liidab sisseehitatud süsiniku kokku sinu muudetavast teguritabelist ja paneel Maksumus jaotab hinnad 4D-ajakavale. BimCraftiga kaasas olevad tegurid on üldised ja märgitud kontrollimata. Vaata [Sisseehitatud süsinik ja maksumus](topic:embodied-carbon-and-5d-cost).
- **Iga kaardiprojektsioon.** {{ui:Mõõda}} › {{ui:Koordinaatsüsteem…}} võtab EPSG-numbri, UTM-tsooni, nime või sinu enda projektsioonimääratluse. Vaata [Georefereerimine suvalise projektsiooniga](topic:georeference-any-projection).

### Joonistamine ja muutmine

- **Teisalda, Joonda ja Jaota ühtlaselt.** Jaotises {{ui:Versioon}}; {{key:Shift+M}} käivitab Teisalda (tavaline {{key:M}} on endiselt Mõõda). Teisalda kopeerib liikudes klahviga {{key:C}}, iga samm on üks tagasivõtmine ning see liigub Live TeamWork sessioonis. Vaata [Teisalda, kopeeri, joonda ja jaota ühtlaselt](topic:move-align-distribute).
- **Pildid plaani all.** {{ui:Versioon}} › {{ui:Pilt}} paigutab PNG-, JPEG- või WebP-pildi korruse plaani alla või vertikaalse tasandi peale. Määra mõõtkava kahe punktiga ning teisalda, pööra, hääleta ja lukusta seda. MarkupCraftis kopeeritud ala kleebitakse sisse oma lehe mõõtkavas. Vaata [Pildi paigutamine plaani alla](topic:pictures-as-backgrounds).
- **Seinad skannist.** Kui skann on avatud, tulevad seinad, uksed ja ruumid ettepanekutena, mida hoiad või lükkad tagasi ükshaaval, ühe tagasivõtmise sammuga. Leitakse ainult seinad kahes risti asetseva suunas. Vaata [Skannist seinte tegemine](topic:scan-to-walls).
- **Jälgimine, pliiatsid ja visandatud trepp.** {{ui:Jälgi}} näitab teist korrust plaani all katkendjoonena, {{ui:Pliiatsid}} annab seintele, ustele ja akendele oma joonepaksuse ühes vaates ning {{ui:Visandda trepp}} muudab kõnejoone trepiks. Avaneb Wavefront OBJ võrk. Vaata [Korruse jälgimine, pliiatsid ja trepp visandist](topic:trace-pens-stairs-obj).
- **Hooned aadressi ümber.** Hooned ja krunt, mille CivilCraftis leidis Aadress asukohaks, tulevad soovitustena; märgi need, mida soovid lisada. Vaata [Alustamine CivilCraft'i asukohast](topic:site-from-civilcraft).
- **Paneelijoonised.** {{ui:Versioon}} › {{ui:Paneelijoonised}} raamib seinad, põranda ja katused puidust või kergest terasest ning salvestab materjalinimekirja CSV-na ja töökojajoonised PDF-ina. Algväärtused, mitte konstruktsiooniprojekt. Vaata [Paneelijoonised](topic:panel-drawings).
- **Sümbolipalett ja taimed.** {{ui:Versioon}} › {{ui:Sümbolipalett}} leiab elektri- ja torustikusümbolid nime järgi; {{ui:Taimed}} allikas jaotises {{ui:Teek}} loetleb umbes 400 taime koos plaanisümbolitega. Vaata [Sümbolipalett](topic:symbol-palette) ja [Taime paigutamine](topic:plant-list).

### Torud, kanalid ja energia

- **Jaotatud süsteem, VRF ja fancoilid.** Siseseadmed ja välisseadmed koos oma ühendustega ning vedelikutorud, mille mõõdud on tabelist tüüpilistest näidisväärtustest, mida saad muuta. Vaata [Jaotatud süsteem, VRF ja fancoilid](topic:split-vrf-fan-coils).
- **Arvutused.** Paneel Arvutused kontrollib tarnetorude ja -kanalite mõõte rõhukaoga, suunab kaableid redelitel ja torudes ning näitab nende täituvust ning arvutab valgustugevuse IES- või EULUMDAT-failidest. Vaikeväärtused on märgistatud; sisesta oma normi väärtused. Vaata [Toru-, kanali-, kaabli- ja valgusarvutused](topic:mep-calculations).
- **PCF-failid.** Toru tööriista **Ekspordi PCF** kirjutab torustikud välja torupinge- ja isomeetriaprogrammidele ning tagasi loetud PCF-fail joonistab oma toru. Vaata [Torukomponentide failid](topic:piping-pcf).
- **Päikese PV.** Paiguta massiivid katustele või maapinnale, varja neid mudeli järgi, hinda aastast energiat, kontrolli stringe ja koosta ühejoonelise skeemi andmed. Algmoodul ja kaod on üldised. Vaata [Päikese PV](topic:solar-pv).
- **EnergyPlus-fail.** Paneel Kontrolli EnergyPlusiga kirjutab mudeli IDF-ina, et käivitada see oma EnergyPlusis. Brauseris käivitamiseks on vaja sinu enda üles seatud versiooni ja selle aadressi sisestamist; BimCraft seda ei sisalda. Vaata [Kütte ja jahutuse kontrollimine EnergyPlusiga](topic:check-with-energyplus).

### Pildid ja failid

- **Renderdusmootori valik.** {{ui:Renderda}} sisaldab valikut {{ui:Mootor}}. Meie kaks sisseehitatud mootorit (Kiire ja Teekonnajälgija) jäävad vaikeväärtuseks. **Ava rakendusega** salvestab stseeni USD- või glTF-failina ning Unreali projektikausta .zip-failina; CadCraft Studios saab lisandmoodul lisada mootori. Unreali pistikprogramm, mis projekti avab, ei ole veel välja antud. Vaata [Vali, milline programm pildi joonistab](topic:render-engines).
- **Studio tagasivõtmine.** CadCraft Studio sees teatab BimCraft Studiole iga lõpetatud sammu, et Studio saaks tagasi võtta sinu viimase sammu selles aknas, mida viimati kasutasid. Vaata [Tagasivõtmine rakenduste vahel](topic:undo-across-apps).
- **Lisandmoodulid sinu failis.** IFC salvestab, milline lisandmoodul selle kirjutas, ning pakub puuduvaid, kui selle avad. Vaata [Lisandmoodulid sinu failis](topic:add-ons-in-your-file).

### Igas rakenduses

- **Ühenda oma tehisintellekt.** Sinu oma abiline saab juhtida BimCraftit Studio ühenduse kaudu ja vastata küsimustele mudeli kohta, näiteks millised ruumid asuvad antud pinna all. Studio ei ole ise tehisintellekt. Vaata [Lase tehisintellektiabilisel töötada sinu mudeliga](topic:assistants).
- **Tööriistariba read.** {{ui:Sätted}} › {{ui:Üldine}} › {{ui:Tööriistariba read}} pakub valikuid Mähi, 2 rida või 1 rida; Mähi jääb vaikeväärtuseks.
- **Sisendseadmed.** Puuteplaadi, pliiatsi, 3D-hiire, kontrolleri ja MIDI sätted on kõigile rakendustele ühised.
- **Probleemid ja Live.** Hoiatuste paneel ja Live-sessioonid toimivad nagu varem, uued ülalnimetatud kontrollid toidavad Probleeme.
- **Keeled.** 54 keelt, neist kümme uut. Need, mis on inglise keelest erinevad, on masintõlked, mida emakeelne kõneleja pole veel lugenud; abiteemad on enamasti inglise keeles.

## Parandatud versioonis 0.8.1

- **Lindi ja projektibrauseri paigutus.** Lisa › Impordi CAD, Lisa › Pilt ja Halda › Projekti ühikud ütlesid „Pole BimCraftis veel loodud“. Pilt avab nüüd Pildi tööriista, Impordi CAD avab {{ui:Versioon}} › {{ui:Joonisest…}} (DWG, DXF, PDF või skann) ja Projekti ühikud avab {{ui:Sätted}} › {{ui:Globaalne}} › {{ui:Ühikud}}. Teisalda ja Joonda käivitavad Teisalda ja Joonda tööriistad, Tase avab {{ui:Lisa tasandeid…}}, Faasid avab jaotise Renoveerimisfaasid ning Materjalid avab materjaliteeki.
- **DWG klasside jaotis.** Seda loeti vales tüübis; parandatud BimCraftis ja teistes rakendustes, mis loevad DWG-d.
- **Keel töö ajal.** Studio ja pakendatud väljaanded saavad nüüd keelt vahetada ilma taaskäivitamata. Seda ei ole veel testitud igal platvormil; anna meile teada, kui keel ei muutu.
- **Archicadi paketiskript.** `archicad_bundle.py`, eraldi allalaadimine, leiab nüüd Archicadi tee, jälgib kausta kuni 20 sekundit ja proovib uuesti paketi kõrval.

## Pole selles versioonis veel

- **Ohutuse ja disainiabivahendid.** Inimesed hoones ei oma ehitusnormist tulenevat läbikäigu pikkuse piirangut (piirangu sisestad ise) ning seda pole käsitsi kontrollitud päris plaani peal. Akustika, elutsükli ja ohu arvud on planeerimisväärtused, mitte normikontroll.
- **Kliimatulevikud ja EnergyPlus.** Sisseehitatud kliimatulevikke ei ole: üleujutuse arvutuseks saad laadida stsenaariumifaili. EnergyPlusi käivitamine brauseris ei ole selles väljalaskes.
- **Lint.** Materjalide koguste arvestus jääb olekusse „Pole loodud“, sest BimCraftil ei ole materjalikoguste loendit, ning 54 teist hallitatud lindi tööriista, millel BimCraftis pole veel taga vastavat tööriista.
- **Allkirjastamine ja platvormid.** Windowsi installijad ja macOS-i .dmg on allkirjastamata, seega SmartScreen näitab {{ui:Täpsemalt}}, seejärel {{ui:Käivita igal juhul}}, ning macOS nõuab paremklõpsu ja seejärel {{ui:Ava}}. iPadi ja iPhone'i versiooni ei ehitatud versiooni 0.8.1 jaoks uuesti.
- **Testid päris lehtedel.** Mõned vanemad BimCraft brauseritestid ebaõnnestuvad meie testlehel, nagu need ebaõnnestusid ka enne 0.8.1.

Kõik muu on teemas [Mis ei ole veel ehitatud](topic:not-built-yet). Varasemad muudatused on teemas [Mis on uut versioonis 0.7](topic:whats-new-0-7).
