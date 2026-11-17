---
title: Joonista täissuuruses, märgista mõõtkava järgi
summary: Hoone joonistatakse alati täissuuruses. Tekst, mõõtmed, sildid, ruumide nimed, ruudustikumullid ja sümbolid on suurustatud paberil, millimeetrites nagu trükituna, ja säilitavad selle suuruse, kui joonise mõõtkava muutub 1:100 pealt 1:50 peale.
keywords: annotatsiooni mõõtkava, annotatiivne, teksti suurus, teksti kõrgus, paberi kõrgus, mõõtmeteksti suurus, sildi suurus, ruumi nime suurus, ruudustikumull, sümboli suurus, joonise mõõtkava, 1:50, 1:100, büroo standard, kirjapilt, joonistamine 1:1, täissuurus, lehe tekst
from: 94118788
---

## Mida teed

Määra, kui kõrged on joonistel kirjad paberil, hoone kohta ühekordselt. Mudelit ei skaleeri ja teksti ei muuda mõõtkava järgi: BimCraft arvutab suuruse paberi kõrgusest ja joonise mõõtkavast.

## Kuidas see töötab

- Mudel on täissuuruses. 10 m pikkune sein on igal mõõtkaval 10 000 mm pikk.
- Annotatsioonil on **paberi kõrgus**: suurtähe kõrgus trükitud lehel millimeetrites.
- Mõõtkaval 1:100 on 2.5 mm tekst mudelis 250 mm kõrge; mõõtkaval 1:50 on see 125 mm. Paberil on see mõlemal juhul 2.5 mm.
- Plaani sümbolid (elekter, santehnika) joonistatakse paberi millimeetrites ja järgivad sama reeglit.

## Sammud

1. Ava projektibrauser. Jaotises {{ui:Lehed}} klõpsa {{ui:Annotatsioonide mõõdud…}}.
2. Sisesta millimeetrites kõrgus liikide jaoks, mida soovid seada: {{ui:Märkused ja sildid}}, {{ui:Mõõtmete tekst}}, {{ui:Sildid ja tasandite nimed}}, {{ui:Ruumide nimed}}, {{ui:Ruudustiku mullide tähed}}, {{ui:Vaadete pealkirjad lehtedel}} ja {{ui:Loendi tekst}}. Tühi kast jätab BimCraft'i enda suuruse, mis on näidatud hallina.
3. Klõpsa {{ui:Salvesta}}. See on üks samm, mille saab tagasi võtta.

Iga leht, joonisekomplekt, plaani PDF ning vaated ja lõiked kasutavad alates sellest hetkest neid suurusi. Mõõtejoone ja teksti vahe, ruudustikumulli suurus ja loendirea kõrgus kasvavad koos oma tekstiga.

## Plaan oma mõõtkavaga

Anna plaanile mõõtkava selle vaatevahemikus ({{ui:Mõõtkava}}; vt [Vaated ja lehed](topic:views-and-sheets)). Siis:

- ekraanil joonistatakse ruumide nimed, sildid, mõõtmete tekst ja ruudustikumullid mudeli kõrval nende trükisuuruses, nii et see, mida näed, on see, mida leht näitab;
- plaani sümbolid ja nende sildid on suurustatud selle mõõtkava järgi. Kui muudad mõõtkava 1:100 pealt 1:50 peale, on need mudelis poole väiksemad ja paberil samasugused.

Plaan ilma oma mõõtkavata säilitab oma fikseeritud ekraanitekstid ja selle sümbolid on suurustatud mõõtkavale 1:50 (1/4" = 1'-0" jalgade ja tollide järgi), nagu varem.

## Sinu büroo suurused

Kui lisandmoodul Default Policies on sisse lülitatud, määra büroo kõrgused jaotises Sätted › Üldine › Default Policies › {{ui:Annotatsioonide mõõdud paberil}}. Uus hoone võtab need, kui klõpsad Loo. Juba alustatud hoones on dialoogis {{ui:Kasuta mu büroo mõõte}}. Vt [Default Policies](topic:default-policies).

## Reeglistiku paketi suurused

Reeglistiku pakett võib anda kohale sobivad teksti kõrgused (lisandmoodul Building regulations, joonistamistavad). Märgi pakett jaotises Sätted › Building regulations; siis dialoogis klõpsa {{ui:Kasuta reeglistiku paketi mõõte}}: lahtrid täituvad, sina kontrollid need ja salvestad. Pakett, mis annab suuruse punktides, on fondi suurus ja see teisendatakse suurtähe kõrguseks, nii et kontrolli seda. Midagi ei seata enne salvestamist.

## Mida peaksid nägema

- Sama teksti kõrgus millimeetrites lehel mõõtkavas 1:100 ja lehel mõõtkavas 1:50, samal ajal kui plaan ise on mõõtkavas 1:50 kaks korda suurem.
- Suurused liiguvad hoonega kaasa: need salvestatakse selle IFC-faili.

## Hea teada

- BimCraft'i enda suurused on need, mida tema lehed on alati kasutanud (umbes 1.5 mm suurtähed mõõtmeteksti jaoks). Need ei ole joonistusstandard: määra oma büroo omad.
- Kõrgus peab olema 0.5 kuni 50 mm.
- Tiitelploki kiri ja märkeselegendid ei kuulu sellesse: neil on oma suurused.
