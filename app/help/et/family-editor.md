---
title: Perekonna redigeerimine
summary: Muutke perekonna parameetreid, valemeid ja tahkekehi, näidake osi jah/ei-parameetri järgi, lõigake ja ühendage tahkekehi, andke neile torude ja kanalite ühendused ning vaadake tulemust IFC-st, mis see salvestab.
keywords: perekonnaredaktor, perekonna redigeerimine, parameeter, parameetrid, valem, valemid, nähtavus, jah ei, tahkekeha, tahkekehad, kast, ekstrusioon, väljapressimine, pööramine, nihutamine, profiil, kaar, bool, booleanid, lõigata, ühendada, erinevus, ühend, käepide, käepidemed, töötasapind, visand, uus perekond, ühendus, ühendused, port, pordid, torude ühendus, kanali ühendus, äravool, veevarustus
from: 1ab31c10
---

## Redaktori avamine

Avage perekond (projektisirvija **Families** või {{ui:Build}} › {{ui:Perekonnad…}}) ja klõpsake {{ui:Muuda perekonda}}. Et alustada tühjalt, klõpsake {{ui:Uus perekond}}: andke sellele nimi, ütelge, mis see on (uks, aken, mööbel, seade või midagi muud) ja ukse või akna puhul, millisest algsest mallist tema plaanisümbol ja käepide pärinevad. Redaktor avab perekonna, millel on mõned parameetrid ja üks tahkekeha.

Algse perekonna redigeerimine jätab teie muudatused ainult sellesse mudelisse. Teised mudelid hoiavad algse nagu see on.

Mudelis ei muutu midagi enne, kui klõpsate {{ui:Salvesta perekond}}. Redaktoril on oma tagasivõtmine ja taastamine (nooleklahvid nime kõrval või {{key:Mod+Z}} ja {{key:Mod+Y}}); salvestamine on üks samm mudeli tagasivõtmises.

## Parameetrid

Vahekaart {{ui:Parameters}} loetleb perekonna parameetrid: nime, liigi ja vaikeväärtuse. Liigid: **Length** (millimeetrites), **Angle** (kraadides), **Number**, **Whole number**, **Yes / No**, **Pen** (1–16) ning kolm, mis hoiavad sõnu arvude asemel: **Text**, **Material** (üks projekti materjalidest) ja **Fill** (plaanitäide). Sõnu valemites ei kasutata; need värvivad tahkekeha (selle **Material**), täidavad sümboli osa või kirjutatakse sümboli teksti kujul `{Name}`. Märkeruut **Per element** muudab parameetri millekski, mida iga paigutatud element seab enda jaoks, mitte oma mõõdu jaoks.

- **Valem** muudab parameetri teistest sõltuvaks, näiteks `Width / 30` või `if(Width > 1200, 2, 1)`. Pikkused valemites on millimeetrites või kirjutage ühik: `3'`, `6in`, `50cm`.
- Parameetri ümbernimetamine nimetab selle ümber igas valemis ja väljas, mis seda kasutab. Kasutuses olevat parameetrit ei saa eemaldada.
- Tahkekeha **Material** võtab projekti materjali värvi (või Material-parameetri oma), **Shown at** peidab selle jämedamatel detailsustasemetel ja **Repeat** teeb koopiaid: arv (number või täisarvu parameeter, 1 kuni 200) ja samm nende vahel x, y ja z suunas. Korduv tahkekeha on laudade, latide või aukude rida; lõikes kasutatuna lõigatakse koopiad koos.
- Ukse- või akna perekond saab seinalt veel kaks nime: `WallThickness` ja `Face` (1 või −1, pool, kuhu uks avaneb).

## Tahkekehad

Vahekaart {{ui:Tahked kehad}} loetleb tahkekehad. Lisage kast, ekstrusioon, pööramine või nihutamine:

| Tahkekeha | Mida te seate |
|---|---|
| Box | selle kaks nurka: x0 kuni x1, y0 kuni y1, z0 kuni z1 |
| Extrusion | profiil töötasapinnal (plaan, eesvaade või külgvaade), tasapinna asukoht ja sügavus |
| Revolve | profiil, telg tasapinnal ja nurk kuni 360° |
| Sweep | punktide tee ja raadius (varras või käsipuu) |

Iga arv võib olla sisestatud number või parameetrite avaldis. Igal tahkekehal on värv ja **Shown when**: jätke see tühjaks, et näidata seda alati, või nimetage jah/ei-parameeter (või kirjutage võrdlus, näiteks `Shelves >= 3`), et näidata seda ainult siis. See on nähtavuse parameeter.

### Profiili joonistamine

Ekstrusiooni või pööramise profiil joonistatakse selle töötasapinnale eelvaate all:

- Klõpsake lehel, et lisada punkt valitud punkti järele.
- Lohistage punkti, et seda teisaldada. Punktid haakuvad ruudustikku; hoidke {{key:Shift}} all, et paigutada need vabalt.
- Klõpsake lõigul väikest ruutu, et lisada sinna punkt. {{key:Shift}}+klõps sellel muudab lõigu kaareks (klõpsake uuesti teise pooli jaoks, siis sirgeks).
- Topeltklõps punktil eemaldab selle.

Õõnsad punktid seavad parameetrid: muutke neid tabelis, mitte lohistamisega.

## Booleanid

Vahekaart {{ui:Bool-tehted}} lõikab teise tahkekeha esimesest välja või ühendab need. Boolean-tehte tulemust saab uuesti lõigata või ühendada. Booleanis kasutatud tahkekeha joonistatakse ainult selle osana.

Kui teine tahkekeha on peidetud oma jah/ei-parameetriga, jäetakse esimene samaks; kui esimene on peidetud, peidetakse ka tulemus.

## Plaanisümbol

Vahekaart {{ui:Plaani sümbol}} joonistab selle perekonna jaoks, mida plaan näitab, tahkekehade lõike asemel: jooned, ristkülikud, ringid, kaared, hulknurgad ja tekst perekonna enda telgedes. Igal osal on **pen** (1–16, avaldis või Pen-parameeter), **fill** (puudub, tahke, diagonaalne, ristkülik, betoon, isolatsioon, muld või Fill-parameeter), **shown by** avaldis, **cut range** millimeetrites baasist ülespoole (osa joonistatakse täie paksusega, kui plaani lõige on selle sees, õhukesena alla selle ja katkendjoonena üle selle: kapp lõikejoone kohal kuvatakse katkendjoonena), detailsustase ja kordus. Tekst võib nimetada parameetreid kujul `{Name}`. **The plan shows: The cut of the solids** jätab plaani lõikama tahkekehi, samal ajal kui sümbol jääb perekonda. Teised programmid loevad sümboli perekonna jalajäljena (jooned ja kujundid; tekst jääb BimCraftis).

## Sees olevad perekonnad

Vahekaart {{ui:Sees olevad perekonnad}} paneb sellesse perekonda teise perekonna: jala laua sisse, käepideme ukse külge. Valige perekond, seejärel kus see asub (x, y, z), kui palju on see pööratud (ainult veerandpöörded: 0, 90, 180, 270), millal see näidatakse ja väärtused, mis see saab, üks rea kohta kujul `Height = Height - 40`. Sisemise perekonna salvestamine joonistab selle uuesti; perekonda, mida hoiab teine, ei saa kustutada; perekond ei saa hoida iseennast, isegi mitte teise kaudu, ja pesastamine peatub neljal tasemel.

## Kuumad punktid

Kuum punkt on punkt või serv, mida lohistate parameetri muutmiseks. Vahekaardil {{ui:Kuumad punktid}} lisage üks, valige telg, mida see mööda lohistab, ja arvparameeter, mida see muudab, ning kirjutage selle asukoht samades avaldistes nagu tahkekehad. Eelvaates valige käepidemete all **Hotspots**, et neid lohistada. Paigutatud elemendil plaanil (valige see tööriistaga {{ui:Vali}}) kuvatakse x- ja y-kuumad punktid haardepidemetena: lohistage üks ja element võtab mõõdu, mis paneb kuuma punkti sinna, läbi kõigi nendevaheliste valemite; üks Undo paneb selle tagasi. Kuum punkt ei saa muuta juhitud parameetrit, jah/ei-parameetrit ega sõna.

3D-vaates kuvatakse samad kuumad punktid valitud elemendil haardepidemetena ja ka üles-alla pidemed (telg z), mida plaan ei suuda joonistada. Valige element, lohistage haarde mööda selle telge ja laske lahti: element võtab mõõdu, mis paneb kuuma punkti sinna, ühe tagasivõtmise sammuna. Haardepidemed on peidetud, kui lõikekast on sees, sest see kasutab samu haardeid.

## Ühendused

Põrandale paigutatud perekondadel (mööbel, seadmed ja muud) on vahekaart {{ui:Ühendused}}: punktid, kus toru või kanal ühineb elemendiga, nagu valamu kraanil ja äravoolul. Klõpsake {{ui:Lisa ühendus}} ja seadke:

- **Kind**: toru või kanal ning selle **System** (külm vesi, sanitaarne äravool, tarneõhk…).
- **x**, **y** ja **z**: kus see asub perekonna enda telgedes. Nagu tahkekeha arvud, võib igaüks olla number või parameetri valem, nii et ühendus liigub koos mõõduga.
- **Way out**: suund, kuhu toru või kanal elemendist väljub, mööda ühte perekonna telge (valamu all olev äravoolu toru läheb **Down**).
- **Size (mm)**: toru nimimõõt (DN) või ümmarguse kanali läbimõõt.
- **Flow**: **In** ühendusele, mida toidetakse (kraan), **Out** ühendusele, mis tühjendab.

Eelvaade joonistab iga ühenduse rõngana noolega, mis näitab väljumissuunda. Uksed ja aknad ei oma ühendusi.

Torustiku seadme puhul valige **Plumbing fixture** all, milline see on (WC, pesukauss, köögivalamu, dušš, pesunõu). Algsed seadmed on seda juba näidanud.

Iga perekonnast paigutatud element saab oma ühendused IFC-failis pordina ja need tehakse uuesti, kui element muudab mõõtu või kui perekond salvestatakse. IFC süsteeme lugevad programmid näevad, kuhu iga toru või kanal kuulub.

## Eelvaade ja selle käepidemed

Eelvaade on perekond kirjutatuna IFC-na, sama koodiga, mis selle mudelisse salvestab, ja joonistatuna tagasi. Mida näete, seda saavad teised programmid. Selle all seab **Size shown** parameetrite väärtused, mida eelvaade kasutab.

**Käepidemed** on täpid eelvaates: **The size** näitab käepidet laiusele, sügavusele ja kõrgusele; **The solid picked** näitab ühte igal valitud tahkekeha tahkul. Lohistage käepidet:

- parameetri järgi seatud tahul muudab näidatud mõõt (perekonna valemid säilivad);
- tüübitud arvuga seatud tahul muutub see number.

## Salvestamine

{{ui:Salvesta perekond}} kontrollib perekonda, joonistab iga selle mõõdu uuesti ja loob iga selle elemendi uuesti ühe tagasivõetava sammuna. Kui mõõtu ei saa muudatusega joonistada (näiteks tahkekehal ei oleks sellel mõõdul laiust), ei salvestata midagi ja redaktor ütleb, millist mõõtu see puudutab.

Kui keegi teine salvestas sama perekonna, kui teie redaktor oli avatud (Live TeamWorki seansis või teises aknas), keeldub {{ui:Salvesta perekond}} ja ütleb seda, selle asemel et asendada nende muudatust teie omaga. Sulgege redaktor, avage perekond uuesti, et näha nende muudatust, ja tehke oma uuesti.

:::note
Geomeetria salvestatakse IFC enda tahkekehadena: ekstrusioonid, pööramised, nihutatud kettad ja Boolean-tulemused. Midagi ei muudeta kolmnurkade loendiks, nii et failid jäävad väikeseks ja teised programmid saavad kujundeid lugeda kujunditena. Kaartega profiilid salvestatakse IFC4-s kaartega; IFC2X3-s pole profiilis kaare lõike, seal salvestatakse kaared lühikeste sirgete tükkidena.
:::

Vt ka [Perekonnad ja nende mõõdud](topic:families).
