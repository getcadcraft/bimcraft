---
title: Konstruktsioonikarkassi analüüs
summary: Mudeli talade, postide ja diagonaalide jõud, toereaktsioonid ja läbindid koormusjuhtude ja kombinatsioonide järgi, mille seadistad; salvestatud IFC-sse. Analüüsiabi, mitte normikontroll.
keywords: analüüs, ühikud, jalad ja tollid, kuvamisühik, konstruktsioonianalüüs, kujunduskontrollid, kasutusaste, valtsitud, keevitatud, AISC 360, EN 1993-1-1, karkassianalüüs, analüütiline mudel, jäikusmeetod, koormused, koormusjuht, kombinatsioon, alaline koormus, muutuv koormus, omakaal, reaktsioonid, paindemoment, põikjõud, normaaljõud, läbindi, deformeerunud kuju, toed, liigendtoe, jäigastus, aruanne, pdf, csv, craftscript, frame3d, talad, postid, elemendid
from: b93b58c4
---

Vahekaart {{ui:Analüüs}} paremal leiab avatud mudeli talade, postide ja diagonaalide jõud, postide jalgade reaktsioonid ja selle, kui palju elemendid painduvad, sinu antud koormustele.

:::warning
See on **analüüsiabi, mitte normikontroll**. Analüüs ei rakenda projekteerimisnormi: see ei dimensioneeri elemente ega kontrolli kandevõimet ning ei vali koormustegureid. Insener kontrollib analüütilist mudelit, selle koormusi ja toetusi ning otsustab, mida arvud tähendavad. Allpool olev plokk {{ui:Kujunduskontrollid}} kontrollib valtsitud terase I-profiile standardi AISC 360 või EN 1993-1-1 järgi; see on abivahend, kuni insener on selle üle vaadanud: vt [Kujunduskontrollid](topic:frame-analysis#design-checks).
:::

## Käivita see

1. Ava IFC-mudel ja vahekaart {{ui:Analüüs}}.
2. Vali vaates üks või mitu talat, posti või diagonaali, vali {{ui:Juht}}, {{ui:Koormus}} ja {{ui:Suund}}, sisesta väärtus ja vajuta {{ui:Lisa koormus}}: kN/m elemendi pikkuses jaotatud koormuse korral, kN punktkoormuse korral.
3. Vajuta {{ui:Käivita analüüs}}.

Tabelis on iga elemendi suurim normaaljõud, põikjõud, paindemomendid, väändemoment ja läbind; klõpsa elemendi nimel, et see vaates valida. Allpool on reaktsioonid. {{ui:Mudelil}} joonistab deformeerunud kuju või ühe tegevuse diagrammina iga elemendi kõrvale. Tulemused aeguvad, kui mudel muutub: käivita analüüs uuesti.

Iga koormus ja seadistus on üks muudatus loendis {{ui:Muudatused}}: {{ui:Võta tagasi}} võtab selle tagasi ning {{ui:Salvesta IFC-na}} säilitab need failis (projekti omadusekogum `CadCraft_Analysis`), nii et järgmisel korral, kui mudel siin avatakse, on koormused endiselt olemas.

## Kuidas analüütiline mudel tehakse

- Iga IfcBeam, IfcColumn ja IfcMember, mille kuju on üks sirge ekstrusioon, muutub elemendiks oma ristlõike raskuskeskme joonel. Selle ristlõike omadused tulevad profiilist: I-, U-, L- ja T-kujud, ristkülikud ja torud, ringid ja ümarad torud või mis tahes suletud kontuur (siis on väändekonstant hinnanguline ja aruandes öeldakse seda). Kõik muu jäetakse välja ja loetakse.
- Mudelis lõpevad talad posti näopinnal ja asetsevad põranda all. Iga elemendi ots viiakse oma joonel sellesse elemendi teljele, millesse see kinnitub, kui see telg on lähedal (umbes ristlõigete suuruse piires), ning see element jagatakse seal. Aruanne ütleb, mitu otsa liikus.
- **Postide jalad**, millest allpool midagi ei ole, on toed: kinnitatud (algus) või liigendatud (paigal hoitud ja väänamise vastu, kuid vabalt pöörlev).
- **Talade otsad** on jäigad või liigendatud reegli {{ui:Talade otsad ilma ühenduseta}} järgi; **diagonaalid** (IfcMember) on liigendatud mõlemast otsast. Vali üks element, et anda selle otstele või posti jalale oma reegel.
- Materjalid nime järgi: betoon (E = 30 GPa), puit (E = 11 GPa), muidu teras (E = 200 GPa).

Kui karkass saab liikuda, ilma et miski painduks — mehhanism —, analüüs peatub ja ütleb, kus ja mis suunas.

## Juhud, kombinatsioonid, märgid ja aruanne

Analüüs algab **Alaline** (omakaal), **Muutuv** ja **Alaline + muutuv**; lisa juhte ja kombinatsioone projekteerimisnormi nõutavate teguritega. N > 0 on tõmme; My > 0 paneb elemendi lokaalse −z poole tõmbele (gravitatsiooni all vajuv tala on My > 0). {{ui:Aruanne (PDF)}} ja {{ui:Aruanne (CSV)}} sisaldavad eeldusi, ristlõikeid, juhte, reaktsioone koos nende summadega, elemendijõude, nihkeid ja ümbrisjõude. {{ui:Ekspordi CraftScriptina}} kirjutab karkassi PartCraft’i skriptitööruumi, kus teegifunktsioon `frame3d` lahendab selle loetavas koodis.

Meetod on otsene jäikusmeetod, lineaarne ja esimest järku, kui ei märgi **Teist järku (P-Delta)**; kontrollitud tüüpjuhtumite vastu.

**Teist järku (P-Delta).** Märgi *Teist järku (P-Delta)* koos käivitamisega: iga kombinatsioon lahendatakse uuesti, kuna elementide normaaljõud mõjuvad deformeerunud karkassile (iga element jagatakse 4 tükiks, nii et ka elemendi vaheline paindumine loeb), kuni normaaljõud stabiliseeruvad. Tulemuse rida annab käikude arvu ja selle, kui palju külgsuunaline nihe kasvas; momendid, läbindid, kujunduskontrollid ja aruanne kasutavad siis neid tulemusi. Karkassi elastsest kriitilisest koormusest kõrgemal analüüs peatub ja ütleb seda. See on elastne väikeste pöördenurkadega ning ainult paindeline, ilma jäikuse vähendamise ja nominaalkoormusteta (mitte üksinda AISC otsene analüüsimeetod); plaadid, seinad ja jäigad põrandad jäävad esimest järku.

**Põrandarõhk plaatidele.** Betoonplaatide puhul (analüüs loeb plaadi plaatideks, kui selle materjal on betoon) on plokis Koormused {{ui:Rõhk kõigile plaatidele}}: sisesta kN/m², vali ülal olev juht ja vajuta {{ui:Lisa plaatidele}}. See jaotub alla suunatult üle iga analüüsi leitud plaadi ja on loetletud linkiga Eemalda. See on üks rõhk kõigile plaatidele, mitte üks iga plaadi kohta, ega ole normikoormus: sisesta väärtus, mille annab insener.

**Loomulikud sagedused (lõplikud elemendid).** Tulemuste all olev plokk {{ui:Lõplikud elemendid: omavõnkesagedused}} leiab sama mudeli madalaimad moodid lõplike elementide mootoriga: talad oma otsa vabastustega, plaadid ja seinad lamedate nelja-sõlmelistena kestadena, jäigad põrandad, toed. Vali modide arv (3, 6, 10 või 20) ja plaadielement (nelja-sõlmeline kest paksudele või õhukestele plaatidele või õhukese plaadi element) ning vajuta {{ui:Leia sagedused}}. Tabel annab iga mood sageduse hertsides, perioodi sekundites ja efektiivse modaalmassi X, Y ja Z suunas liikuva massi osana. {{ui:Näita mudelil}} joonistab mis tahes moodi nii, nagu joonistatakse deformeerunud kuju. Mass on materjali tihedus korrutatud ruumalaga: koormused massi ei lisa ning materjalil ilma tiheduseta massi ei ole. Aruanne (PDF, CSV) sisaldab tabelit. See on elastne ja ainult väikeste liikumiste jaoks ning siin ei tehta seismilist ega tuulekoormust ühestki normist. Pole normikontroll; insener vaatab tulemused üle.

**Vastusspekter, ajalooline analüüs ja pushover.** Sagedustest allpool on veel kolm plokki, mis kasutavad sama lõplike elementide mudelit. Kõigi nende mass on materjali tihedus pluss märgitud juhtude allapoole suunatud koormused, igaüks korrutatuna sisestatud teguriga (näiteks Alaline teguriga 1 ja Muutuv sellise osaga, mida loed massiks).

{{ui:Vastusspekter}} loeb iga moodi antud spektrilt (perioodi ja kiirenduse tabel või ASCE 7 kuju SDS, SD1 ja TL järgi; nupp {{ui:Kasuta seismilise ploki väärtusi}} kopeerib need plokist Seismiline) ning ühendab moodid meetodiga CQC, SRSS, kümne protsendi reegel või absoluutsumma, seejärel koondab X, Y ja Z suunad (100 % + 30 % või SRSS). See annab baasnihke, korruste nihked, elementide otsajõud ja modide tabeli, mis hoiatab, kui kasutatud modid kannavad alla 90 % massist. Tulemusi saab skaleerida teguriga või kuni sisestatud baasnihkeni; plokk ei arvuta seda baasnihet ise. Tulemustel ei ole märki.

{{ui:Ajalooline analüüs}} käivitab maapinna kiirenduse modaalse superpositsiooniga (täpne punktide vahel sirgjoonte jaoks) või otsese integreerimisega (Newmarki keskmine kiirendus koos Rayleigh’ vaimutusega). Sisend on väljamõeldud siinus või impulss (alati märgitud kui sünteetiline), sinu kleebitud salvestis või avatud tekstifail (aeg ja kiirendus, üks kiirendus real koos sammuga või PEER-stiilis fail DT= päisega; g või m/s²). See annab katuse nihke ja baasnihke ajas, iga korruse triivi ja elementide otsajõudude ümbrise. Väga pika salvestisega mudelid hoiavad seda ainult seansi ajal.

{{ui:Pushover}} lükab katust külgsuunas väikeste sammudena (kuju nagu esimene mood või ühtlane), plastiliste liigendustega elementide otstes, millel on I-kuju. Liigend voolab plastilise momendi juures, mis väheneb normaaljõu kasvades (arvutatakse joonistatud kujust, servi arvestamata); kõvenemine on valikuline, P-delta on valikuline ning enne saab rakendada gravitatsioonikombinatsiooni. See annab kandevõime kõvera (baasnihe katuse nihke vastu), esimese liigendi ja iga liigendi oleku ja plastilise pöörde. {{ui:Käivita mittelineaarne ajalooline analüüs}} käivitab samad liigendid Ajaloolise analüüsi ploki salvestise järgi väikestel mudelitel. Liigendid tekivad ainult elementide otstes (kui liigend peaks tekkima vahe sees, pane seal sõlm); element, mis on vabastatud mõlemast otsast, liigendeid ei saa; diagonaalide voolamist ja kõverdumist ei modelleerita; plaadid ja seinad jäävad elastseks; aktsepteerimiskriteeriume ei anta. Pole normikontroll; insener vaatab tulemused üle. Seaded salvestatakse koos mudeliga ja aruanne sisaldab tabeleid.

Veel ei ole loodud: kõverdumist, mass-puudujäägi korrektsiooni vastusspektrile, salvestise skaleerimist, aktsepteerimiskriteeriume liigenditele (dünaamiline vastus on siin, ülal), muid pinnakoormusi peale ühe rõhu kõigile plaatidele, elementide nihkeid, ainult tõmbel töötavaid diagonaale, seinu ja plaate karkassis ning keevitatud kujude ja I-profiilidest erinevate ristlõigete kujunduskontrolle. Vt [Veel ei ole loodud](topic:not-built-yet).

## Ühikud

Pikkused järgivad tööriistariba ühikut ({{ui:Ühikud}}), nagu kogu BimCraft: koormuste asukohad, mida sisestad ja näed ({{ui:Allikas}}, {{ui:Kuhu}}, {{ui:Kõrgusel}}), sõlmkoormuste ja reaktsioonide punktid, korruste kõrgused jaotises {{ui:Seismiline}} ning läbindi- ja triivi veerud (jalad ja tollid näitavad neid väikesi pikkusi kümnendtollides). Muuda ühikut igal ajal; vahekaart joonistatakse uuesti. Jõud jäävad kN ja kN·m, aruanne (PDF, CSV) ja CraftScripti fail jäävad millimeetritesse, ühik on kirjas. Ristlõigete suurused, varraste läbimõõdud ja katted plokis {{ui:Betoon}} jäävad millimeetritesse, nagu nad on nimetatud.

## Kujunduskontrollid

Plokk {{ui:Kujunduskontrollid}} (sama, mis DetailCraft’il) võtab {{ui:Projekteerimisnorm}}, ASCE 7 + AISC 360 või EN 1990 + EN 1993-1-1, ja {{ui:Terasemark}}. Anna iga koormusjuhule tema liik (alaline, muutuv, tuul …) ning {{ui:Koosta kombinatsioonid}} kirjutab sinu juhtude normi koormuskombinatsioonid; analüüs käivitab need siis nagu iga teise kombinatsiooni.

{{ui:Kontrolli elemente}} kontrollib seejärel iga **valtsitud terasest I-profiili** DetailCraft’i kontrollidega (tõmme, survee koos mõõnutusega, paine koos külgmise väändega, nihe, paine koos normaaljõuga, läbindi; klauslid on aruandes) ning näitab, kui suure osa kandevõimest see kasutab, värviga mudelil. See on **abivahend, kuni insener on selle üle vaadanud**.

**Milliseid elemente kontrollitakse.** IFC-profiil ei ütle, kas teraskuju on valtsitud või keevitatud, seega kutsub BimCraft seda valtsituks ainult siis, kui selle profiili nimi (või elemendi tüübinimi) on suurus AISC W või S tabelist või EN 10365 tabelitest IPE, HEA või HEB (`W12x26`, `IPE 300`, `HEA200`, `HE 200 A`) **ja** faili sügavus, laius, võrk ja flänss vastavad sellele suurusele 1 % täpsusega. Iga muu I-kuju (põhjatala, muu nimega suurus või muudetud suurus) võetakse keevitatuna ja tuleb tagasi **kontrollimata**, samuti torud, nurgad, kanalid ja muud ristlõiked, õhukesed osad ning väänamine. Kontrolli neid elemente koos insenerigaga.
