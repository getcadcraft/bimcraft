---
title: Mitme skanni registreerimine üheks
summary: Aseta eri asukohtadest tehtud skannid ühte raamistikku valitud punktipaaride või sisestatud sihtmärkide järgi, täpsusta need ICP-ga, salvesta registreerimine projektina ja ekspordi registreeritud pilv LAS- või E57-vormingus.
keywords: registreerimine, skannid, punktipilv, icp, iteratiivne lähima punkti meetod, sihtmärgid, punktipaarid, jäik teisendus, joondamine, ühendamine, e57, las, skannist BIM-iks
from: e8e270db
---

## Mida sa teed

Mitu sama koha skanni (igaüks oma skanneri asukohast) algavad oma koordinaatides. Registreeri need: anna igale skannile üks paigutus, et kõik oleksid ühes raamistikus, seejärel salvesta see projektina ja kirjuta registreeritud pilv ühte LAS- või E57-faili.

## Skannide paigutamine

1. Ava dialoog ({{ui:Registreeri skannid…}} alustuspaneelil või {{ui:Näita}} › {{ui:Registreeri skannid…}}, kui mudel on avatud). {{ui:Lisa skannid…}} võtab LAS-, LAZ-, E57-, PLY-, PCD-, PTX-, PTS- või XYZ-failid või lohista need dialoogile. Eri ühikutega skanne ei võeta vastu, öeldes seda märkusega: teisenda üks enne.
2. Vali {{ui:Teisaldatav skann}} ja {{ui:Paiguta vastu}}. Pilt näitab iga skanni raamistikus praegusel kujul, igaüks oma värviga: {{ui:Plaan}}, {{ui:Esi}} või {{ui:Külg}}; lohista nihutamiseks, kasuta suumimiseks ratast.
3. **Punktipaaride järgi.** Klõpsa {{ui:Vali paar}}, seejärel punkt teisaldatavas skannis ja sama koht teises skannis (nurk, sihtmärk, posti jalam). Tee seda vähemalt kolm korda, punktidega, mis ei asu ühel joonel ja on laiali. Klõpsa {{ui:Paiguta paaride järgi}}: skann paigutatakse vähimruutude sobitusega ning **Jäänud** näitab, kui palju iga paar veel mööda läheb. Paar suure numbriga on halb valik: eemalda see risti abil ja paiguta uuesti.
4. **Sihtmärkide järgi.** Kui punkti tõelised koordinaadid on teada (mõõdistatud sihtmärgid), klõpsa {{ui:Vali, seejärel sisesta sihtpunkt}}, klõpsa punktil selle skannis ja sisesta sihtmärgi X, Y ja Z reale. Paare ja sisestatud sihtmärke võib vabalt segada.

## Täpsustamine ICP-ga

Paarid annavad karkise paigutuse. {{ui:Täpsusta}} liigutab skanni, kuni selle pinnad asuvad teise skanni pindadel: esmalt **punkt punktile**, seejärel **punkt tasandile**. Tabel loetleb iga sammu koos veaga ja sellega, mitu punkti sobitus; sellest ülal olev joon joonistab vea vähenemise. {{ui:Peata}} lõpetab käigu praeguse sammu järel ja säilitab, mis saavutati. {{ui:Võta tagasi}} võtab kogu käigu (või viimase paigutuse) tagasi; {{ui:Lähtesta}} paneb skanni tagasi oma faili koordinaatidesse.

Et sülearvutil oleks kiire, töötab ICP punktide vähendatud osaga ({{ui:Kasutatud punktid}}, 5,000 kuni 60,000) ja ignoreerib vasteid, mis on kaugemal kui {{ui:Suurim vastekaugus}} (vaikimisi 5% skanni suurusest, väheneb, kui see stabiliseerub). Enne vajab see karkist paigutust: skannid, mis vaevu kattuvad, teatavad, et neid ei saa sobitada. Pinnad, mis on ainult tasased või ainult sirged, ei saa oma asukohta endas paika panna; sel juhul lisa paare.

## Salvestamine ja eksport

- {{ui:Salvesta projekt}} kirjutab väikese `.ccscans.json`-faili: iga skanni nime, suuruse ja selle esimese 64 KB sõrmejälje koos teisendusega. Punkte selles ei ole. {{ui:Ava projekt…}} leiab skannifailid nende viidete järgi (failid peavad olema eelnevalt lisatud) ja taastab kõik teisendused.
- {{ui:Ekspordi LAS}} ja {{ui:Ekspordi E57}} kirjutavad ühe faili, kus iga skann on oma registreeritud kohas. Originaalides punkte ei kirjutata ümber; teisendus rakendatakse väljumisel. Kui {{ui:Loe iga punkt failidest}} on sisse lülitatud, loetakse iga fail iga punkti jaoks uuesti (kuni 20 miljonit skanni kohta); kui välja, kirjutatakse ainult vaatajas näidatud punktid.
- {{ui:Näita registreeritud pilve}} (BimCraft) kirjutab LAS-faili ja avab selle 3D-vaates mudeli kõrval nagu iga teise pilve.

:::note
Midagi ei laadita üles. Registreerimine töötab failide enda ühikutes ja säilitab millimeetrid: LAS kirjutatakse sobiva skaalaga (kuni 0.1 mm), E57 topeltarvudega. Koordinaatsüsteem kantakse LAS-i ainult siis, kui iga skann nimetab sama EPSG-koodi. E57-kirjutaja on meie enda; seda kontrollitakse, lugedes selle failid tagasi selle lugejaga ja libE57Format-iga.
:::
