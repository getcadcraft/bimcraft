---
title: Terastorude spoolid ja spoolilehed
summary: Lõika terastoru liin otsekeevisega spoolideks pikima lubatud pikkusega ja sinu paigutatud montaažikeevisega kohtades, nummerda spoolid ja laadi iga spooli kohta alla spoolileht (3D-vaade, lõikepikkused, liitmikud, keevised, materjalinimekiri) PDF- ja CSV-vormingus; kanalid saavad sirgete tükkide lõikenimekirja.
keywords: spool, spoolid, spoolileht, isomeetria, valmistamine, eeltootmine, montaažikeevis, töökoja keevis, otskeevis, lõikepikkus, lõikenimekiri, materjalinimekiri, bom, terastoru, schedule 40, liininumber, õhukanali lõikenimekiri, kanaliosad
from: 539f51de
---

## Mida sa teed

Muuda terastoru liin tükkideks, mida töökoda keevitab kokku ja monteerija paigaldab: spoolid, mis ei ole pikemad kui sinu valitud pikkus, jagatud kohtadesse, kuhu paigutad montaažikeevised, igaüks oma lehega.

Ainult **terastoru otskeevisega torusid** lõigatakse spoolideks (torude suurused ASME B36.10M, põlved ASME B16.9 pika raadiusega). Vase-, PVC- ja PEX-ühendused ei ole otskeevised, seega nende liinidel ei ole spoole.

## Lõika liin spoolideks

1. Vali terastoru liin. Omadustes märgi **Lõika spoolideks**.
2. **Pikim spool**: suurim keskjoone pikkus, mille üks spool võib olla (algselt 6 m, umbes 20 ft).
3. **Liininumber**: osa iga spooli numbrist. Uus spoolideks lõigatud liin saab oma süsteemi järgmise vaba numbri.

Spoolid nummerdatakse liini algpunktist mööda liini: `CHW-12-S01`, `CHW-12-S02` … (süsteem, liininumber, spool). Spool kasvab osa kaupa; osa, mis teeb selle liiga pikaks, alustab järgmist, ja sirge lõik, mis on pikem kui spool, lõigatakse seal, kus spool on täis.

## Paiguta montaažikeevised

1. Ava {{ui:Versioon}} ja vali {{ui:Montaažikeevis}}.
2. Klõpsa spooliga torul kohas, kuhu montaažikeevis läheb. Sirge lõigu sees lõigatakse toru seal; liitmiku või ventiili sees liigub keevis lähema ühenduskohani.

Omadused loetlevad liini montaažikeevised, igaühega {{ui:Eemalda}}. Iga muudatus on üks {{ui:Võta tagasi}} samm.

## Spoolilehed

Spoolitud liini omadustes:

- {{ui:Spoolide lehed (PDF)}}: üks lehekülg spooli kohta. Vasakul spool 30° isomeetrilises vaates: sirged lõigud nummerdatud, töökoja keevised punktidena, montaažikeevised tähistatud FW-ga ja plaani põhjasuund. Paremal spooli number, suurus, skeem ja pikkus, seejärel selle **lõikepikkused**, **liitmikud**, **keevised** (töökoja otskeevis igas spooli sees olevas ühenduses, montaažikeevis seal, kus see jõuab järgmise spoolini) ja selle **materjalinimekiri** toru kaaluga (ASME B36.10M lihtotsaga kaal).
- {{ui:Spoolide loend (CSV)}}: sama, plokk iga spooli kohta.

:::note
Lõikepikkused on otsast otsani, nii nagu joonistatud: ei lahutata juurevahet ega keevisvaru. Põlved on ASME B16.9 pika raadiusega; T-liitmikud, reduktorid ja ventiilid on üldised, mõõdud tulenevad torust, mitte B16.9-st ega tootjast, ja leht ütleb seda. Liitmike kaale ei anta. Joonistamise ja koordineerimise abivahend, mille mõõdud on määranud insener.
:::

## IFC-failis

Iga spoolitud liini iga osa kannab **CadCraft_Spool** koos SpoolId-ga, liini, spooli numbriga liinis ning kohaga, kus see liinis algab ja lõpeb. Liin hoiab oma reegleid (pikim spool, montaažikeevised, liininumber) oma komplektis, nii et spoolid tulevad tagasi samasugused, kui fail uuesti avatakse.

## Kanalid: lõikenimekiri

Ava {{ui:Versioon}} ja klõpsa {{ui:Õhukanali lõikenimekiri}}: CSV sirgetest kanaliosadest süsteemi, kuju ja suuruse järgi, iga sirge pikkus lõigatud tükkideks **Tüki pikkus** kanaliribal (algselt 1500 mm, umbes 5 ft) ja jääk. Ainult pikkused: ilma õmbluste, plekipaksuste ja ühendusteta.
