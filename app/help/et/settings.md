---
title: BimCraft'i sätted
summary: Vali, kas ruumid ja ruumid on nähtavad, kas servi joonistatakse ja millise vaatega mudel avaneb, ning alusta paigutamist seinale kinnitusega sisselülitatuna.
keywords: sätted, eelistused, suvandid, ruumid, ifcspace, servad, jooned, jõudlus, suur mudel, avamisvaade, kaamera, pealtvaade, seinale kinnitus, kinnitus
from: 4416e64f
---

Ava {{ui:Sätted}} rakendusriba hammasrattaga või {{key:Mod+,}}. Esimene sakk, {{ui:BimCraft}}, sisaldab selle rakenduse sätteid; {{ui:Üldine}} sisaldab neid, mida jagavad kõik CadCraft'i rakendused (teema, tööriistariba, paneelid). BimCraft'i sätted kehtivad ainult rakenduses: muudad neid siin ning see brauser mäletab need. Dialoogi allservas olev {{ui:Lähtesta BimCraft'i sätted}} viib need ja ühised sätted tagasi algseisu.

## Menüüd, klahvid ja hiir

Menüüstiil (BimCraft'i oma tööriistariba, kodukujunduse menüüriba, BIM-lint või joonistuse käsurida), sinu enda klahvid ja menüüd ning see, mida hiireratas ja hiirenupud teevad. Vaata [Menüüd, klahvid ja hiir](topic:menus-keys-and-mouse).

## Kui mudel avaneb

- **Näita ruume ja ruume** (algselt väljas): ruumid (IfcSpace) on läbipaistvad kastid, mis võivad varjata nende taga olevaid seinu, seepärast on need algselt peidetud. Mudeli kohal olev {{ui:Ruumid}} nupp lülitab need avatud mudeli jaoks ikka sisse ja välja.
- **Servad**: {{ui:Servad sees}} (algne) joonistab servajooned, mis annavad joonistuse ilme. {{ui:Ainult väikesed mudelid}} joonistab need ainult alla 300,000 kolmnurgaga mudelitele, mis hoiab suured mudelid pööramisel kiiremana. {{ui:Servad väljas}} avab iga mudeli ilma nendeta. Nupp {{ui:Servad}} lülitab need ikka avatud mudeli jaoks. Üle 1.5 miljoni kolmnurga korral on servad alati väljas.

## Joonised avanevad

Kuidas DWG- või DXF-joonis esmalt kuvatakse: {{ui:3D (kiireim)}} (algne) joonistab kiiresti ka suure joonise, või {{ui:Mudel (2D)}} avab tasapinnalise mudeliruumi vaate. Joonise kohal olevad sakid lülitavad vahel igal ajal: {{ui:Mudel}}, lehed ja {{ui:3D}}. Joonis, millel mudeliruumis midagi ei ole, või brauser, mis ei suuda 3D-d näidata, avaneb alati 2D-na.

## Avamisvaade

Kaamera, millega mudel avaneb: {{ui:Mahuta}} (algne, kogu mudel nurgast), {{ui:Ülemine}}, {{ui:Esi}} või {{ui:Külg}}. Mudeli kohal olevad nupud muudavad vaadet igal ajal.

**Hoone on oma asukohas pöördes**: paljud mudelid tulevad nii, et hoone on faili telgede suhtes nurga all (mõõdistus- või ühiste koordinaatide järgi). {{ui:Hoone suhtes ristkülikus}} (algne) kuvab sellise hoone ristkülikuna: {{ui:Mahuta}}, {{ui:Ülemine}}, {{ui:Esi}}, {{ui:Külg}}, vaatekuubi tahud ja iga uus lõige järgivad selle seinu ning vaatekuubi kompass näitab ikka mudeli põhja. {{ui:Nii, nagu asukohas paigutatud}} säilitab faili teljed. Hoone, mille seinad kulgevad mööda telgi, näeb mõlemal juhul ühesugune välja.

## Raamatukogu üksuste paigutamine

**Alusta seinale kinnitus sisselülitatuna** (algselt väljas): kui raamatukogu üksuse paigutamine või kleepimine algab, kinnitub selle tagakülg lähima seinaga, nägu ruumi poole. {{key:Tab}} või paigutusribal olev {{ui:Seinale kinnitus}} lülitab selle hetkeks välja. Korrus ilma seinteta alustab ilma selleta.

## Lõikekast

{{ui:Varu valiku ümber}} näitab, kui palju ruumi jätab {{ui:Lõikekast valiku ümber}} valitud elementide igale küljele, millimeetrites: algselt 300, kuni 5000. Vaata [Lõika IFC-mudel lõiketasandiga](topic:section-plane).

## Asukoht

{{ui:Laius- ja pikkuskraad süsteemis}} valib süsteemi, milles {{ui:Mõõda}} › {{ui:Asukoht}} annab laiuse ja pikkuse: WGS 84 (EPSG:4326, algne, nagu GPS ja veebikaardid kasutavad), {{ui:Faili oma andmestik}} või üks ETRS89, NAD83, GDA94, GDA2020, NZGD2000, JGD2011 ja CGCS2000 seast. Faili enda kaardisüsteem ja andmestik kuvatakse alati ka. Vaata [Mõõda vahemaid, tahkude pindalu ja asukohti 3D-s](topic:measure).

## Nurgaindikaator

Mis asub 3D-vaadete paremas alanurgas (IFC-mudel ja 3D-le lülitatud joonis): {{ui:Vaatekuup}} (algne), {{ui:Teljeikoon}} (väike X, Y ja Z) või {{ui:Puudub}}. Muutus toimub kohe. 2D-joonise vaade seda kunagi ei näita.

Vaatekuubil klõpsa tahku, serva või nurka, et vaadata sellelt poolt, lohista kuupi orbiidiks, lohista rõngast pööramiseks ning klõpsa maja, et naasta algvaatesse.

## Sinu nimi probleemides

Sisselogituna kannavad probleemid sinu konto nime ja BimCraft ei küsi midagi: see osa kuvab {{ui:Sinu kontolt (<name>)}}. {{ui:Kasuta teist nime}} avab kasti teise nime jaoks, mis kehtib seni, kuni valid {{ui:Kasuta mu konto nime}}. Väljalogituna küsib probleemivorm nime nagu varem. Vaata [Probleemid ja BCF-failid](topic:issues-bcf).

## Assistendid

**Luba AI-assistentidel ja skriptidel kasutada BimCraft'i** (algselt väljas) laseb arvutis oleval assistendil jõuda avatud mudelini läbi CadCraft Studio: **Loe** leiab elemendid ja loeb nende omadusi, **Muuda vaadet** eraldab, peidab ja näitab neid. **Tegevus** loetleb selle väljakutsed. Vaata [Lase AI-assistendil oma mudeliga töötada](topic:assistants).

:::note
Muud sätted kehtivad siis, kui mudel avatakse või paigutamine algab. Juba avatud mudel säilitab oma välimuse, kuni kasutad tööriistariba nuppe või avad selle uuesti.
:::

## Seotud

- [Raamatukogu üksuste kopeerimine, kleepimine ja dubleerimine](topic:copy-paste)
- [Paiguta seadmed ja mööbel raamatukogust](topic:place-from-library)
- [BimCraft'i ekraan](topic:workspace)
- [Lase AI-assistendil oma mudeliga töötada](topic:assistants)
