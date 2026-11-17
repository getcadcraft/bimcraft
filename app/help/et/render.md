---
title: Renderda mudeli pilt
summary: Tee 3D-vaatest päevavalguslik pilt: taevas, päike sinu asukoha laiuskraadil, pehmed varjud, klaasist aknad; WebGPU-ga kiirte jälgimine graafikakaardil koos taevade, kaamera, valguse segamise, toonimise, udu ja renderdamise järjekorraga.
keywords: renderda, eelseade, eelseaded, stseenieelseade, sisemine, väline, lõikevaade, öö, ühe klõpsuga, renderdamine, kiirte jälgimine, globaalne valgustus, peegeldused, murdumine, kvaliteetne, foto, fotorealistlik, realistlik, pilt, kujutis, png, taevas, päike, päevavalgus, varjud, pehmed varjud, ümbritsev okluusioon, klaas, aknad, metall, materjalid, säritus, heledus, pilves, hämarik, stuudio, esitlus, visualiseerimine, webgpu, müra vähendamine, füüsikaline taevas, hdri, ies, terava ala sügavus, panoraam, valgebalanss, valguse segamine, renderdamise elemendid, exr, 16-bitine png, udu, valguskiired, renderdamise järjekord
from: beb74cc7
---

{{ui:Renderda}} tööriistaribal teeb 3D-vaatest pildi, mis näeb välja nagu päevavalgus: taevas, päike seal, kus asub sinu asukoha laiuskraad, pehmed varjud, valgus kogu taevast, mis tumedamaks teeb nurgad, ja värvid, mis võivad näida nagu klaas või metall. Mudelit ega faili ei muudeta.

## Vaate renderdamine

1. Seadista 3D-vaade nii, nagu pilti soovid: pööra ja suumi, peida korrused või elemendid, mida ei soovi, ning määra [lõige](topic:section-plane), kui pildil peaks olema lõige.
2. Klõpsa tööriistaribal {{ui:Renderda}}.
3. Vali {{ui:Stseen}}, kui vajutatud ei ole see, mida soovid (vt [Stseenieelseaded](topic:render#scene-presets-a-good-picture-in-one-click)), vali {{ui:Suurus}} ja klõpsa dialoogis {{ui:Renderda}}.

   Pilt täitub renderdamise ajal ja muutub iga läbikäiguga siledamaks. {{ui:Peata}} (või {{key:Esc}}) lõpetab selle varakult ja jätab pildi sellele hetkele.

4. Klõpsa {{ui:Salvesta}}, et laadida pilt alla PNG-na, või {{ui:Salvesta nimega}} teise vormingu jaoks (vt [Salvesta pilt](topic:render#save-the-picture)). See saab nime mudeli failist.

:::tip
Alusta {{ui:Mustand}} seadega {{ui:Vaate suurus}}, et kontrollida kaamerat, ning renderda seejärel {{ui:Hea}} või {{ui:Parim}} suuremas suuruses lõplikuks pildiks.
:::

## Stseenieelseaded: hea pilt ühe klõpsuga

Dialoogi ülaosas on neli nuppu {{ui:Stseen}}. Igaüks määrab korraga taeva, heleduse, maapinna, servajooned, kvaliteedi ja päikese, nii et esimese pildi jaoks pole midagi õppida. Klõpsa ühte ja seejärel {{ui:Renderda}}.

| Stseen | Mida see seab | Kasutamiseks |
|---|---|---|
| {{ui:Väline}} | Selge taevas, mudeli enda päike, maapind sees | Hoone välisvaade |
| {{ui:Sisemine}} | Pilves taevas (ühtlane valgus, ilma kõvade päikeseplekkideta), pool astet heledam | Vaade ruumi seest |
| {{ui:Lõikevaade}} | Valge stuudio, maapinda ei ole, servajooned kiires renderdamises | Lõikega lõigatud mudel |
| {{ui:Öö}} | Päike loojub (kesktalvel poolööl sinu poolkeral), üks aste heledam | Valgustid, mis mudelit valgustavad. Ilma valgustiteta on pilt tume |

- {{ui:Vali selle vaate järgi}} valib ise: {{ui:Lõikevaade}}, kui lõige on sisse lülitatud, {{ui:Sisemine}}, kui kaamera on mudeli sees, muidu {{ui:Väline}}. Esimesel korral, kui dialoogi avad, algab see nii iseenesest.
- Iga säte jääb allpool ja seda saab muuta. Kui muudad ühte, ei ole stseen enam sellega seotud, ükski nupp ei ole vajutatud ja nuppude all olev rida ütleb, et sätted on sinu enda. Klõpsa stseeni uuesti, et selle väärtused tagasi panna.
- Stseen ei puuta mootorit, režiimi, suurust, materjale, kaamerat ega valgusteid.

:::note
Stseenid annavad BimCraftis ja ModelCraftis samad väärtused. Valmis pilt sõltub sinu mudelist ja graafikakaardist.
:::

## Mis pildil näha on

Mis 3D-vaates on tahke, see on tahke ka pildil: peidetud ja läbipaistvad elemendid, peidetud korrused ja peidetud mudelid jäetakse välja ning ruumid näidatakse ainult siis, kui {{ui:Ruumid}} on sisse lülitatud. Lõiketasapind või lõikekast lõikab pilti nii, nagu lõikab vaadet. Elemendid näitavad oma värve: värvimine omaduse järgi (vahekaart {{ui:Värv}}) ei ole kasutusel.

## Sätted

| Säte | Mida see teeb |
|---|---|
| {{ui:Suurus}} | Vaate suurus, kaks korda vaate suurus, Full HD, 4K või ruut |
| {{ui:Režiim}} | {{ui:Kiire}}, või {{ui:Kvaliteetne (kiirte jälgija)}} (allpool) koos oma {{ui:Ajapiirang}}iga |
| {{ui:Kvaliteet}} | Kui mitu läbikäiku (või kvaliteetses režiimis proovi) keskmistatakse: {{ui:Mustand}} 16, {{ui:Hea}} 64, {{ui:Parim}} 256. Rohkem läbikäike annavad siledamad varjud ja servad ning võtavad kauem aega |
| {{ui:Taevas}} | {{ui:Selge taevas}}, {{ui:Pilves}}, {{ui:Hämarik}} või {{ui:Valge stuudio}} (lihtne valge taust) |
| {{ui:Päike}} | 21. juuni kell 15.00 laiuskraadil, mille fail annab oma asukohale (IfcSite), pööratud mudeli tõelise põhjasuuna järgi. Märgi linnuke {{ui:Kasuta selle pildi jaoks teist kuupäeva ja kellaaega}}, et valida muu aeg |
| {{ui:Heledus}} | Heledam või tumedam, astmetes (astmed) |
| {{ui:Maapind mudeli all}} | Maapind mudeli madalaimas punktis, mis võtab varjud vastu ja hääbub horisondis |
| {{ui:Joonista servad}} | Joonistab elementide servad õhukeselt pildi peale |

Kui päike on valitud ajal horisondi all, on öö: taevas läheb tumedaks ja mudeli valgustid valgustavad seda.

## Valgustid

Iga valgusti armatuur mudelis on pildil valgustiks: IFC-faili armatuurid (IfcLightFixture või element, mis on tüübina valgusti armatuur), sealhulgas need, mille paigutad teegist. Igaüks paistab armatuurist veidi allapoole. Kui fail annab armatuuri vati, järgib selle heledus seda; muidu on see 800 luumenit, soe valge.

Dialoog loetleb valgustid jaotises {{ui:Valgustid}}: eemalda linnuke, et üks välja lülitada, või sisesta selle heledus luumenites. Need muudatused salvestatakse IFC-sse (armatuuri omaduste hulk `CadCraft_Light`, kus saad neid muuta ka Omadustes), ja {{key:Ctrl+Z}} võtab need tagasi.

Kui fail ei ütle, kus tema asukoht on, asetatakse päike 40° põhjalaiusele ja dialoog ütleb seda. Aeg on asukoha kohalik kellaaeg, arvutatud selle pikkuskraadist, seega võib see olla tund võrra vales kohas, kus kellad on teisiti seatud.

Need sätted jäävad selle brauseri mällu järgmise pildi jaoks. Neid ei salvestata IFC-faili.

## Klaas ja muud materjalid

Jaotises {{ui:Materjalid}} on igal ekraanil nähtaval värvil välimus: {{ui:Matt}}, {{ui:Siidmatt}}, {{ui:Läikiv}}, {{ui:Metall}}, {{ui:Poleeritud metall}}, {{ui:Klaas}} või {{ui:Matt klaas}}. Värvid, mille IFC-fail teeb läbipaistvaks (näiteks akende klaasistus), algavad kui {{ui:Klaas}}.

:::note
Režiimis {{ui:Kiire}} peegeldavad klaas ja metall taevast, mitte ülejäänud mudelit, ja valgus ei murdu läbi klaasi. Allpool olev režiim {{ui:Kvaliteetne (kiirte jälgija)}} teeb mõlemad.
:::

## Kvaliteetne pilt

Vali {{ui:Režiim}} › {{ui:Kvaliteetne (kiirte jälgija)}} pildi jaoks, mis jälgib valgust nii, nagu kaamera seda näeb:

- valgus põrkab pindade vahel, nii et aknast või valgustist valgustatud ruum on valgustatud igast küljest ning värvid valguvad naabritele;
- klaas on päris klaas: valgus murdub läbi selle ja see peegeldab mudelit;
- metall ja poleeritud pinnad peegeldavad ülejäänud mudelit;
- valgusplaadid valgustavad plaatidena, pehmete varjudega.

See on palju aeglasem kui {{ui:Kiire}}: iga läbikäik jälgib iga piksli valgust uuesti. Pilt algab terase ja puhastub, kui proovid kokku liituvad, seega alusta väikselt ({{ui:Vaate suurus}}, {{ui:Mustand}}) ja vali {{ui:Ajapiirang}}: kui see saab otsa, jääb pilt sinna, kuhu jõudis. {{ui:Peata}} jätab selle samuti alles. Esimene läbikäik ootab, kuni brauser valmistab kiirte jälgija ette.

Kui brauseris on WebGPU, on kiirte jälgija CadCraft'i enda ja töötab graafikakaardil; pildi all olev rida ütleb seda. Pärast {{ui:Peata}} või ajapiirangut jätkab {{ui:Jätka}} sama pildiga, kuni sellel on kõik proovid; sätte muutmine või uuesti {{ui:Renderda}} vajutamine alustab algusest. Ilma WebGPU-ta joonistatakse pilt kiirte jälgijaga WebGL-iga (rida ütleb seda) ja {{ui:Jätka}} ei ole saadaval.

:::linux
Firefox ja enamik Chrome'i seadistusi Linuxis ei tea veel WebGPU-st, seega kasutab kvaliteetne režiim seal WebGL-i.
:::

Selles režiimis servi ei joonistata, tekstuurid näitavad oma värvi ja karedust, kuid mitte oma sisse-kumerust, ning lõige tehakse mudelil enne pildi algust.

{{ui:Müra vähendamine (eemaldab proovide järel jääva tera)}} on vaikimisi sees: kui pilt on valmis või peatatud, puhastatakse jäänud tera selleks tehtud närvivõrgu abil (Intel Open Image Denoise'i avaldatud võrk, mis töötab sinu arvutis: graafikakaardil, muidu protsessoril). {{ui:Näita}} › {{ui:Pilt enne müra eemaldamist}} näitab seda nii, nagu see renderdati.

## Taevad ja valgusprofiilid graafikakaardil

WebGPU-ga on kvaliteetsel režiimil kaks täiendavat taevast:

- {{ui:Füüsikaline taevas}} arvutab päevavalguse päikese kõrguse järgi: pealt sügavsinine, horisondil kahvatu riba ning päike, mis muutub madalal olles soojemaks ja nõrgemaks. {{ui:Udusus}} liigub väga selgest päevast (2) uduseks (10).
- {{ui:Taevapilt (HDRI)}} valgustab mudelit päriselu koha panoraampildiga. {{ui:Vali pilt…}} võtab ekvirektangulaarse faili `.hdr` või `.exr`; {{ui:Pööra}} pöörab seda mudeli ümber ja {{ui:Pildi heledus}} teeb selle heledamaks või tumedamaks. Pildil on oma päike, seega mudeli päikest ei lisata. See jääb alles ainult nii kaua, kui leht on avatud: pärast uuesti avamist vali see uuesti.

Igal valgustil jaotises {{ui:Valgustid}} võib olla tootja valgusprofiil: {{ui:IES-profiil…}} loeb IES-faili (LM-63) ja valgusti kiirgab siis valgust nii, nagu see armatuur teeb (kitsas allavalgusti, seinavalgusti). Iga sama nimega valgusti kasutab seda, ja valgusti hoiab oma heledust. Klõpsa profiili nimel, et selle kasutamine lõpetada.

Klaasist aknad aitavad taeva valgusel leida tee ruumi.

Režiim {{ui:Kiire}} ja WebGL-kiirte jälgija näitavad {{ui:Füüsikalist taevast}} ja {{ui:Taevapilti (HDRI)}} selge taevana ega arvesta valgusprofiile.

## Kaamera

{{ui:Kaamera}} seab pildi üles nagu fotograafia:

- {{ui:Säritus}}: jäta {{ui:Heleduse liugur}}, või vali {{ui:Kaamera sätted}} ja määra {{ui:Ava (f-number)}}, {{ui:Säriaeg}} ja {{ui:ISO}} nii, nagu kaameral; nende kõrval olev EV on tavaline särituse väärtus. f/16 ja 1/100 s ning ISO 100 sobib päikesepaisteliseks päevaks; tumedam stseen tahab laiemat ava, aeglasemat säriaega või kõrgemat ISO-d. See töötab igas režiimis.
- {{ui:Terava ala sügavus}} hägustab selle, mis on lähemal või kaugemal kui {{ui:Fookuskaugus (m)}}, nii nagu seda teeks selle f-numbriga objektiiv (jäta tühjaks, et fokusseerida vaate keskel olevale); {{ui:Ava kuju}} annab fookusest väljas olevatele tipukohtadele ümmarguse või tiivaga kuju.
- {{ui:Kahepunktiline perspektiiv (vertikaaljooned jäävad vertikaalseks)}} joondab kaamera ja nihutab pilti, nagu teeb arhitektuurne nihkeobjektiiv, nii et seinad ei kaldu, kui hoonet vaadata ülevalt või alt.
- {{ui:Valgebalanss}} määrab, milline valguse värv näib valgena: madalam (näiteks 3000 K) sooja valgustivalguse jaoks, kõrgem varjude ja pilvise päeva jaoks.
- {{ui:Projektsioon}}: {{ui:360° panoraam}} teeb 2:1 pildi kõigest kaamera ümber panoraamavaatjatele; {{ui:360° stereopanoraam}} paneb kokku vasaku ja parema silma panoraami peakomplektidele; {{ui:Kuupkaart (6 tahku)}} teeb kuus ruudukujulist vaadet 3 × 2 ruudustikus. Laius tuleb {{ui:Suurus}}est.

Projektsioon, terava ala sügavus, kahepunktiline perspektiiv ja valgebalanss vajavad graafikakaardil kiirte jälgijat (WebGPU), seega näidatakse neid ainult {{ui:Kvaliteetne (kiirte jälgija)}} režiimis.

## Pildi viimistlus

{{ui:Pilt}} toonib kvaliteetset pilti nagu fotot, ja iga juhtnupp muudab valmis pilti kohe, ilma uuesti renderdamata:

- {{ui:Välimus (vaate teisendus)}}: {{ui:ACES filmne}} (pilt nagu varem), {{ui:AgX}} (pehmem, säilitab värvi väga heledas valguses), {{ui:Filmne}} (õrn filmikõver) või {{ui:Standardne}} (lihtne, hele valgus lõigatakse valgeks).
- {{ui:Kontrast}} ja {{ui:Heleduste tihendamine}} (toob tagasi detaili väga heledates kohtades).
- {{ui:Helendus}} (pehme hõõg heleda valgusti ümber), {{ui:Läige}} koos {{ui:Läigejoontega}} (tähekiired kõige heledamatest punktidest) ja {{ui:Vinjett}} (tumedamad nurgad).
- {{ui:Värvitabel (.cube)…}} rakendab värvitoonimise `.cube`-failist koos oma {{ui:Värvitabeli tugevus}}ega; nagu taevapilt, jääb see alles ainult nii kaua, kui leht on avatud.

## Pildi salvestamine

{{ui:Salvesta nimega}} {{ui:Salvesta}} kõrval valib faili: {{ui:PNG}}, {{ui:JPEG}} või {{ui:WebP}} jagamiseks (JPEG ja WebP ainult seal, kus brauser neid kirjutada oskab), ning pärast kvaliteetset renderdamist graafikakaardil ka:

- {{ui:PNG, 16 bitti}}: toonitud pilt peenemate tooniastmetega, trükkimiseks või edasiseks töötlemiseks.
- {{ui:EXR, iga kiht (32-bitine ujukomaarv)}}: pilt, nagu see renderdati (lineaarne valgus, ilma toonita), iga renderdamise elemendi ja valgusgrupiga eraldi kihina, koostamisprogrammidele.
- {{ui:Renderdusfail (.ccrender, hiljem uuesti töötlemiseks)}}: kõik, mida dialoog vajab pildi uuesti segamiseks ja toonimiseks. {{ui:Ava renderdusfail…}} toob selle tagasi koos segu ja toonimisega, renderdamata.

## Valguste segamine pärast renderdamist

Lülita sisse {{ui:Valguse segamine (muuda iga valgusti värvi ja heledust pärast renderdamist)}} enne, kui vajutad {{ui:Renderda}}. Kui pilt on valmis (või peatatud), loetleb {{ui:Sega pilt}} selle valgused gruppides: taevas, päike ning valgustid nime järgi (iga sama nimega valgusti on üks grupp). Lülita grupp välja, anna sellele värv või muuda see heledamaks või tumedamaks, ja pilt muutub kohe, ilma uuesti renderdamata. {{ui:Salvesta segu}} hoiab segu nime all, et hiljem uuesti valida; {{ui:Nagu renderdatud}} viib tagasi pildi sellisena, nagu see tehti. {{ui:Salvesta}} salvestab segatud pildi.

{{ui:Renderdamise elemendid (albedo, normaalid, sügavus, diffuus, peegeldus, läbilaskvus, kiirgus, ID-d)}} hoiab ka pildi osad alles. {{ui:Näita}} lülitab vaate ühele neist: pindade värvid (albedo), normaalid, sügavus, diffuusne, peegeldav ja läbi lastud valgus (igaüks otsene ja kaudne), mis hõõgub ja taevas, ning värv objekti või materjali kohta maskide tegemiseks.

Mõlemad hoiavad lisakihte graafikakaardil. Suurtes suurustes ei pruugi graafikakaardil ruumi olla; dialoog ütleb seda ja väiksem suurus töötab.

## Udu, suits, müra ja kaustikud

Need asuvad jaotises {{ui:Udu, suits ja müra}} ja töötavad režiimis {{ui:Kvaliteetne (kiirte jälgija)}} graafikakaardil; teised mootorid need välja jätavad.

- {{ui:Udu ja hägu}} täidab õhu kõrguseni udu-laadse uduga, mida valgustavad päike, taevas ja valgustid. {{ui:Kui kaugele näed, meetrites}} määrab, kui paks see on (umbes 100 m on kerge hägu, 20 m paks udu), {{ui:Udu kõrgus maapinnast, meetrites}} on see, kus see lõpeb, ja {{ui:Valguskiired}} on, kui palju udu hõõgub valguse suunas. Päikesevalgus lahkub udust selle ülaosas, seega kui päike paistab akna või hoonete vahelt, näed seda valguskiirte kujul.
- {{ui:Suits või pilv}} lisab ühe suitsu- või pilvemahu, mida valgustatakse nagu udu. {{ui:Liik}} on {{ui:Pilv}}, {{ui:Suitsusammas}} või {{ui:Mahufailist (.ccvol)}}, CadCraftile omane ruudustikuvorming. {{ui:Detailsus}} ja {{ui:Variatsioon}} muudavad tehtud pilve või sammast, {{ui:Pikima külje suurus meetrites (0 = mudeli suurus)}}, {{ui:Nihuta X (m)}}, {{ui:Nihuta Y (m)}}, {{ui:Nihuta Z (m)}} ja {{ui:Pööra}} paigutavad selle (see algab mudeli keskelt), {{ui:Paksus}} muudab selle tihedamaks, {{ui:Ees helendus}} muudab selle valguse suunas heledamaks ja {{ui:Värv}} värvib selle. Mahufail jääb alles ainult nii kaua, kui leht on avatud, nagu taevapilt.
- {{ui:Peata varakult kohtades, kus pilt on puhas (adaptiivne proovivõtt)}} ei anna enam proove pikseltele, mis on rahunenud. {{ui:Aktsepteeritav müra}} on, kui palju tera jääb alles, kui piksel peatub. Pildi all olev rida ütleb, mitu proovi piksel keskmiselt sai.
- {{ui:Kaustikud (klaasi kaudu murdunud või peeglitelt peegeldunud valgus)}} jälgib valgust valgustitest ja päikesest, nii et hele laik klaaskuuli all või peegli valgus seinal tuleb puhtana, mitte terasena. See on väljas, kui udu, suits, valguse segamine või renderdamise elemendid on sees, ja see on tehtud piltide, mitte 360° piltide jaoks.

## Renderdamise järjekord

{{ui:Renderdamise järjekord}} dialoogis: {{ui:Lisa see pilt järjekorda}} hoiab pildi sätted ja vaate, ning {{ui:Käivita järjekord}} renderdab ootava ükshaaval, järjest, selles arvutis. Lehe sulgemine jätab järjekorra alles; ava sama mudel, et jätkata. {{ui:Salvesta}} laadib valmis pildi alla; {{ui:Eemalda}} ja {{ui:Tühjenda lõpetatud}} korrastavad nimekirja. Järjekord renderdab kvaliteetses režiimis, seega vajab see WebGPU-d.

## Kui kaua see võtab aega

Pilt tehakse sinu enda arvutis, graafikakaardiga; midagi ei laeta üles. Aeg kasvab läbikäikude ja piksliteks: {{ui:Parim}} on 16 korda rohkem läbikäike kui {{ui:Mustand}}, ja 4K pilt on umbes neli korda rohkem piksleid kui Full HD. Suured mudelid võtavad läbikäigu kohta kauem aega.
