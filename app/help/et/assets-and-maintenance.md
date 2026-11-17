---
title: Hoia varaandmed ja hoolduse kirje mudelis
summary: Kasuta üleantud IFC-mudelit hoone haldamiseks: seadmete ja kinnistute tootja, mudel, seerianumber, garantii ja kasutusiga ning tehtud hoolduse kirje, kõik kirjutatud IFC-sse.
keywords: üleandmine, valmimisakt, kasutusluba, tegelik ehitus, üleandmispakett, varad, vararegister, kinnisvarahaldus, fm, haldus, hooldus, teenindus, garantii, seerianumber, vöötkood, tootja, mudel, kasutusiga, üleandmine, cobie, digitaalne kaksik, tähtaeg ületatud, tähtaeg, tööorder
from: b84ac492
---

Vahekaart {{ui:Varad}} paremal paneelil muudab avatud IFC-mudeli hoone seadmete registriks. Kõik kirjutatakse IFC-sse endasse, IFC enda omaduste hulkadesse ja ülesannetesse, nii et järgmine programm, mis faili avab, loeb seda ka. Midagi ei laadita üles ega ole vaja serverit: salvesta IFC, et see säiliks.

## Mis on loetletud

- Seadmed ja kinnistud: mööbel, sanitaartehnika, valgustid, seadmed, õhuavad, ventiilid, pumbad, ventilaatorid, katlad, mahutid, pistikupesad, jaotuskilbid, liftid ja muud sarnased elemendid ning teegi esemed, millel on seadmeandmed.
- Iga muu element, mida sa **jälgid**: vali see mudelis (uks, sein, pump lihtsa objektina) ja klõpsa {{ui:Lisa valitud}}.
- Kõik, millel on juba varaandmed või hooldusülesanne, kirjutatud siin või teise programmi poolt.

Tähtaja ületanud asjad tulevad esimesena, siis need, mille tähtaeg on 30 päeva jooksul. Filtreeri nime, sildi, tootja, mudeli või seerianumbri, korruse järgi või märgi {{ui:Ainult tähtaeg ületatud või 30 päeva jooksul}}.

## Varaandmed

Klõpsa nimekirjas varal (või vali see mudelis), et avada selle andmed: tootja, mudel, mudeli viide, seerianumber, vöötkood, paigaldamise päev, garantii number ning selle algus ja lõpp, ja kasutusiga aastates. {{ui:Salvesta andmed}} kirjutab need ühe sammuna ({{key:Mod+Z}} võtab tagasi). Jäta lahter tühjaks, et see väärtus eemaldada.

## Dokumendid

Andmete all loetleb {{ui:Dokumendid}} varaga seotud juhendid, garantiid, fotod, tunnistused ja joonised. Vali liik, anna pealkiri (või jäta tühjaks: kasutatakse failinime) ja märgi, kus see asub:

- **veebiaadress** (`https://…`): sellele tekib link Ava, mis avaneb uuel vahekaardil;
- või **failinimi või tee** (`Manuals/AHU-1.pdf`, `C:\FM\pump.pdf`, võrgujagamine): hoia failid IFC kõrval, samas kaustas või selle all, et nimed töötaksid ka siis, kui kausta edasi annad. BimCraft näitab nime; ava fail kaustast.

Faile endid ei laadita üles ega kopeerita IFC-sse: kirjutatakse ainult link. Veebiaadress, mis sisaldab parooli, ja iga link, mis ei ole veebiaadress ega fail (nt `javascript:`), keeldutakse. {{ui:Eemalda}} võtab dokumendi varalt (üks samm; {{key:Mod+Z}} võtab tagasi).

Dokumendid, mille teine programm on elemendile lisanud, on samuti loetletud. Dokumendid elemendi **tüübil** kuvatakse igal selle tüübi elemendil ja sellest öeldakse; muuda neid seal, kus tüüp tehti.

IFC-s on iga dokument IFC dokumendiviide, mis on seotud elemendiga, liigi hoides selle seose küljes; nii IFC4 kui IFC2X3 puhul.

## Hooldusprotokoll

Dokumentide all: {{ui:Salvesta tehtud töö}}: päev, kui töö tehti, töö, kes tegi, millal järgmine kord tähtaeg ja märkused. Iga kirje on üks samm; {{ui:Redigeeri}} ja {{ui:Kustuta}} muudavad seda hiljem. Uusima kirje järgmine tähtaeg otsustab, kas vara on tähtaja ületanud või peagi tähtajaks.

## Kuidas see IFC-s hoitakse

- Tootja ja mudel `Pset_ManufacturerTypeInformation`-is, seerianumber, vöötkood ja paigaldamise päev `Pset_ManufacturerOccurrence`-is, garantii `Pset_Warranty`-s, kasutusiga `Pset_ServiceLife`-is, elemendil endal. Kui elemendi tüübil on juba tootja või mudel, kuvatakse see, kuni sisestad oma.
- Iga hooldekirje on IFC **ülesanne** hoolduse liigist, seotud elemendiga, koos kuupäevadega (IFC4-s ka ülesande enda ajadena) ja hulgaga `CadCraft_Maintenance`, mis sisaldab päeva, tegijat ja järgmist tähtpäeva.
- Väärtused, mida teine element jagab, kopeeritakse esmalt: ühe vara muutmine ei muuda kunagi naabreid.
- Vanemas IFC2X3 failis kirjutatakse kuupäevad tekstina (YYYY-MM-DD); see versioon nõuab selleks eraldi kuupäevakirjet, mida BimCraft ei kirjuta.

## Anduri näidud

Ava {{ui:Anduri väärtused}} ja {{ui:Ava näidud (CSV)…}}, et tuua sisse hoonehaldussüsteemist, andmelogerist või tabelist eksporditud näidud:

- **Esimene veerg on aeg**: `2026-10-23 14:05`, `2026-10-23T14:05:00Z`, `2026-10-23T14:05+02:00` või Unixi sekundid. Aeg ilma ajavööndita loetakse sinu arvuti ajavööndis. Päev-ees kuupäevi, nagu `23/10/2026`, ei loeta (need on kahemõttelised); ekspordi ISO kuupäevad.
- **Iga teine veerg on üks andur**, mille pealkiri on tema vara **silt**, **nimi** või **GlobalId**. Pealkiri, mis ei vasta ühelegi varale või vastab mitmele, loetletakse ja jäetakse välja. Veerge eraldavad komad, semikoolonid või tabulaatorid; semikoolonite ja tabulaatorite korral loetakse ka koma kümnendkohana (`21,5`).
- Ajad või väärtused, mida ei saa lugeda (sõna või ühik lahtrisse kirjutatuna), loetakse ja jäetakse välja, neid ei oleta.

Viimane näit kuvatakse loendi veerus {{ui:Näit}} ja vara plokis {{ui:Andur}}, koos **diagrammiga** kõigist näitudest (telefonis ootavad diagrammid, kuni puudutad {{ui:Näita diagrammi}}). Määra vara **madal ja kõrge piir** ning ühik ja klõpsa {{ui:Salvesta piirid}}: piiridest väljas olev näit märgib vara. Märgi {{ui:Näita mudelil}}, et värvida iga vara näidu järgi: sinine alla madala piiri, roheline piirides, punane üle kõrge piiri, ning piiranguteta varadel üks sinine skaala madalaimast kuni kõrgeima näiduni, koos näiduga sildina (kuni 60 silti, märgitud esimesena).

**Näidud jäävad sellesse brauseri vahekaardisse**: neid ei salvestata IFC-sse ega saadeta kuhugi; ava CSV uuesti järgmine kord. **Piirid salvestatakse IFC-sse** (`CadCraft_Sensor` hulk elemendil: Low, High, Unit), nii et järgmine, kes faili avab, näeb samu märke.

## Otseandmed

{{ui:Otseandmed}} loeb väärtusi nende tekkides, **otse sellest brauserist sinu enda süsteemi**. Midagi ei läbi meie serverit ja midagi ei salvestu muuna kui sinu brauseri vahekaardil. Faili avamisel ühtegi ühendust ei looda: ainult {{ui:Ühenda}} teeb seda.

- **MQTT üle WebSocketi**: sinu brokeri WebSocketi kuulaja aadress (`wss://broker.example.com:8884/mqtt`) ja üks või mitu teemat, kus `{tag}` asendub vara sildiga, nt `site/{tag}/temperature` (BimCraft tellib `site/+/temperature` ja loeb sildi iga sõnumi teemast). Teemad ilma `{tag}`-ita nimetavad anduri ise. Sõnum on kas lihtne number (`21.5`) või JSON, nt `{"value": 21.5, "time": "2026-10-23T14:05:00Z"}` (määra {{ui:Väärtuse väli JSON-is}}, kui sinu oma on teisiti nimetatud).
- **Küsi aadressilt (HTTP)**: veebiaadress, millele sinu hoonehaldussüsteem või väike skript vastab, küsitakse iga mitme sekundi järel (vähemalt 5). See võib vastata JSON-ina sildi järgi (`{"AHU-1": 21.5}`), JSON-loendina (`[{"tag": "AHU-1", "value": 21.5}]`) või ülal näidatud sarnase CSV-na. Kui ei vasta, ootab BimCraft kaks korda kauem enne uut küsimist, kuni viis minutit.

Iga näit läheb varale, mida tema silt, nimi või GlobalId nimetab, täpselt nagu CSV veerg; nimed, mis ei vasta ühelegi varale, loetletakse. Näidud liituvad {{ui:Anduri väärtustega}}: loend, diagrammid, piirid ja värvid mudelil töötavad samamoodi.

**Sinu parool või žetoon** sisestatakse ühe ühenduse jaoks: see antakse ühendusele ja kast tühjendatakse; seda ei salvestata kunagi sellesse brauserisse ega IFC-sse. Žetoon läheb standardse `Authorization: Bearer` päisena ja küpsiseid ei saadeta.

{{ui:Jäta need seaded IFC-sse}} kirjutab aadressi, teemad, väärtuse välja ja küsimise sageduse mudelisse (`CadCraft_Feed` hulk projektil; parooli väli puudub), nii et järgmine, kes faili avab, sisestab ainult oma sisselogimise ja klõpsab {{ui:Ühenda}}. Ära pane parooli ega võtit aadressi ennast: kasutajanime ja parooliga aadress keeldutakse.

:::note
**Mida su broker või aadress vajab.** Brauseri leht saab rääkida ainult serveriga, mis seda lubab:
- Leht on turvaline (https), nii et brauser ühendub ainult `wss://` ja `https://` aadressidega, välja arvatud sinu enda arvutis (`localhost`), kus `ws://` ja `http://` töötavad testimiseks.
- HTTP-aadress peab lubama selle lehe päringuid (CORS: päis `Access-Control-Allow-Origin` ja `Authorization` lubatud päiste hulgas, kui kasutad žetooni).
- Enamik brokereid (Mosquitto, EMQX, HiveMQ jt) pakuvad WebSocketi kuulajat; see on sageli välja lülitatud, kuni selle sisse lülitad. BimCraft räägib MQTT 3.1.1.
:::

**Teavitusi ei tule**, kui BimCraft on suletud: piirid märgivad vara ainult siis, kui mudel on avatud ja sööt ühendatud. Hoone jälgimine ümber kella vajab serverit, mida BimCraft ei käita.

## COBie-tabel

**COBie** on üleandmistabel, mida paljud omanikud ja haldusmeeskonnad nõuavad (avaldanud National BIM Standard USA-s; BS 1192-4 Suurbritannias). Ava vahekaardil {{ui:COBie-tabel}}:

- {{ui:Salvesta COBie-na (.xlsx)}} kirjutab COBie 2.4 lehed (Contact, Facility, Floor, Space, Type, Component, System, Job, Document ja Attribute) mudelist ja varaandmetest: hoone, selle tasandid ja ruumid (pindalad mudeli kogustest), iga vara komponendina koos seerianumbri, paigaldamise päeva, garantii alguse, sildi ja vöötkoodiga, selle tüüp koos tootja, mudeli, kasutusea ja garantii pikkusega, süsteemid, millesse see kuulub, hoolduskirjed töödena ja seotud dokumendid. Iga komponent kannab elemendi IFC GlobalId-d. Kirjuta oma e-posti aadress COBie veergu „created by“ või jäta tühjaks (siis on seal n/a). Väärtused, mida mudelil pole, on **n/a**; kategooriaveerud kannavad IFC klassi, mitte OmniClassi koodi.
- {{ui:Loe COBie-tabel sisse…}} loeb ühe tagasi, BimCraft'ist või teisest programmist, ja **loetleb kõik muudatused esimesena**: milline vara, milline väärtus, millest milleks, ja uued dokumendid. {{ui:Rakenda}} kirjutab need kõik ühe sammuna ({{key:Mod+Z}} võtab tagasi). Read seostatakse GlobalId järgi, seejärel komponendi nime järgi. Read, mis mudelis midagi ei leia, loetletakse, neid ei lisata.

Tabelit käsitletakse usaldamatuna: valemeid ei loeta ega käivitata (loetakse ainult lahtrisse viimati salvestatud väärtust); väärtus, mis paneks garantii lõppema enne algust, ja dokumendilink, mis pole veebiaadress ega failinimi, jäetakse välja ja loetakse; väga suured töövihikud keeldutakse. COBie'i tööd on tüübi planeeritud tööd: need kirjutatakse välja, aga neid ei loeta tagasi. BimCraft'i kirjutatud tabelis on tekst, mida tabelarvutus võiks pidada valemiks (algab märgiga `=`, `+`, `-` või `@`), märgitud tekstina.

Tabel on meie testides kontrollitud sõltumatu tabelilugejaga; seda ei ole läbinud COBie valideerija. Kui vastuvõttev meeskond seda käivitab, anna meile teada, mida see ütleb.

## Üleandmisdokumendid

Dokumendid, mis lähevad valmis hoone juures omanikule, kuuluvad projektile, mitte ühele varale. Vahekaardil {{ui:Varad}} ava {{ui:Üleandmisdokumendid}}:

1. {{ui:Lisa dokument}}, vali selle liik (valmimisakt, kasutusluba, garantii, juhend, tegelikud joonised, muu) ja sisesta pealkiri, väljastamise kuupäev, väljastaja ning viitenumber.
2. Märgi, kus see asub: veebiaadress, IFC kõrvale hoitud failinimi või {{ui:Lisa fail}}.
3. {{ui:Lisa nimekirja}}. {{ui:Redigeeri}} ja {{ui:Eemalda}} muudavad nimekirja; igaüks on üks samm, mille saab tagasi võtta.

{{ui:Koosta üleandmispakett}} laadib alla ühe zip-faili: kaanelehe, millel on iga dokument, sama nimekiri nagu tabelis, COBie töövihiku (dokumendid on selle lehel Document, Facility kohta käivate ridadena), mudeli ja iga lisatud faili. Valmimisakt või kasutusluba, mida nimekirjas veel pole, nimetatakse kaanel; pakett koostatakse siiski.

Paketi mudel on **tegelik ehitusmudel**: see ütleb, millised elemendid mõõdeti kohapeal. Selle juures on kaustas `as-built`: avaldus, loend igast elemendist koos kontrolliseisundiga, joonisekomplekt praegusel kujul ühe PDF-ina (tegelikud joonised) ja joonise muudatuste logi, kui mudelil on välja antud komplekte. Vt [Märgi elemendid kontrollituks või välitöös kinnitatuks](topic:verification).

- IFC-failis on iga dokument IfcDocumentInformation, mis on seotud projektiga (IfcRelAssociatesDocument), koos pealkirja, viite, kuupäeva, väljastaja ja kohaga, nii et teised programmid seda loetlevad.
- Lisatud fail salvestatakse nime, suuruse ja SHA-256 järgi. Et hoida fail ise projektiga koos, kasuta {{ui:Salvesta projekt paketina}} (.ccbundle hoiab mudelit ja lisatud faile; avamisel need tagastatakse, iga üks kontrollitakse oma kirje järgi). Tavaline salvestamine küsib, kumba soovid.
- Lihtne .ifc hoiab kirjet, mitte faili: pärast avamist kasuta {{ui:Lisa fail uuesti}}. Sama fail tuntakse ära; teine fail asendab kirje.

## CSV

{{ui:CSV}} salvestab iga vara koos andmetega, iga hoolduskirje ja iga dokumendi, ühe rea kaupa, tabelarvutusele või teisele hooldusprogrammile.

:::note
Pole veel tehtud: hostitud teenus, mis hoiab näite ja saadab teavitusi, kui BimCraft on suletud, ning COBie'i tööde tagasilugemine. Vt [Pole veel tehtud](topic:not-built-yet).
:::
