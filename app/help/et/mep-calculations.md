---
title: Määra torude ja kanalite mõõdud, kontrolli kaabli täitust ja valgustust
summary: Kontrolli tarnetorude ja kanalite mõõte rõhukaoga, vii kaablid kaablialustele ja kaablitorudesse ning vaata nende täitust, ja arvuta ruumide valgustugevus IES- või EULUMDAT-failidest. Vaikeväärtused on sildistatud; sisesta jõus oleva normi väärtused.
keywords: mõõtmine, torude mõõtmine, kanalite mõõtmine, rõhukadu, armatuuriühikud, nõudlus, hunter, hazen-williams, kiirus, hõõrdumine, võrdne hõõrdumine, ventilaatori rõhk, siiber, kriitiline tee, kaablialus, kaablitoru, täitumine, kaabliloend, ies, ldt, eulumdat, fotomeetria, valgustugevus, luks, ühtlus, valgustusarvutus, võimsustihedus, mep, arvutused, probleemid
from: 9cb90815
---

## Mida teed

Joonista torud, kanalid, kaablialused ja kaablitorud nagu tavaliselt, seejärel ava paneel **Arvutused**. Iga sakk loeb mudelit, näitab tabelit ja loetleb, mis on valesti, kui {{ui:Probleemid}} paneelis ⚠. Kui mõõt parandaks probleemi, muudab **Rakenda mõõdud** lõigud ühe võtmise sammuga.

Need on projekteerimise abivahendid. Iga vaikeväärtus on ekraanil sildistatud ja ükski neist ei ole normitabel: sisesta numbrid standardist, mille järgi projekteerid, ja las tulemuse üle vaatab insener, kes selle eest vastutab.

## Torud

1. Vali **süsteemi** võti (külm vesi on `cw`, kuum vesi `hw`).
2. Määra suurim kiirus ja, kui tahad rõhku kontrollida, rõhk allikas ning väikseim rõhk, mida armatuur vajab.
3. Kliki {{ui:Kontrolli}}.

Iga toru kannab tema all olevate armatuuriühikute nõudlust. Nõudlus tuleb armatuuriühikute kõverast vooluhulga järgi, nagu Hunter kirjeldas. **Sisseehitatud kõver on näide, mitte normitabel**; probleemid ütlevad seda seni, kuni sisestad oma. Hõõrdumine on Hazen–Williams, liitmikud on kaoteguritega ning tõus maksab 9.8 kPa meetri kohta. Armatuuri ühikud tulevad selle liigist või numbrist, mille määrad abivahendi `loads_set` abil.

## Kanalid

Määra süsteem, hõõrdumise määr (võrdne hõõrdumine) või kiirus ning mis tahes mähise, filtri või summutaja kadu. Terminalid võtavad oma õhuvoolu difuusorilt `loads_set` abil. Tabel näitab kiirust ja hõõrdumist iga tüki kohta, **ventilaatori rõhku** kriitilisel teel ja rõhku, mille iga teise terminali siiber peab üles võtma. Liitmike kaod kasutavad ümardatud vaikekordajaid, mitte liitmike andmebaasi.

## Kaablialused ja kaablitorud

Joonista need kanalitööriistaga: süsteemid **Kaablialus** ja **Kaablitoru** salvestuvad kaablikandjatena, nii et teised programmid loevad neid alusteks ja torudeks. Sakis **Kaablid** kleebi kaablite loend (silt, välisläbimõõt mm-des, arv, algus, lõpp). `from` ja `to` on seadme silt või punkt `x,y,z` millimeetrites. Kaablid järgivad lühimat pidevat teed läbi alusete ja torude; iga lõik näitab oma täitust sinu sisestatud piirangute suhtes ning kaabliloend salvestub CSV-na pikkusega, mis sisaldab varu protsenti, ja otstega.

## Valgustus

Anna iga valgustile tema IES- (LM-63) või EULUMDAT-fail abivahendiga `photometry_set`. Sisesta sihtväärtused, ruudustiku samm ja tööpinna kõrgus. Tulemus on ainult **otsene** valgustugevus: vastastikust peegeldust ja varje ei arvestata, seega on see ruumis alumine piir.

## Tulekustutussprinklerid

**Tulekustutussprinklerid** lisamoodulil on oma sakk; vaata selle abi.
