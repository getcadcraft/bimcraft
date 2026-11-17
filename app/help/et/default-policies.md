---
title: "Vaikimisi reeglid: määra, millega uus hoone algab"
summary: Ütle üks kord, millise seinatüübi, korruste, esimese lehe, LOD-siltide, ühikute ja tööriistaga uus hoone algab, nii meetermõõdus kui tollides projektidele, ning jaga reegleid kontoris väikese failina.
keywords: vaikimisi, vaikimisi reeglid, reegel, kontori standard, kontori vaikeseaded, mall, uus hoone, esimene seinatüüp, meetermõõdu sein, müür, LOD, arendustase, esimene leht, paber, mõõtkava, korrused, korruse kõrgus, korruste nimed, seinatööriist, ühikud, jagamine, eksport, import, json
from: 42379aa5
---

## Mida teed

Ütle BimCraftile, millega uus hoone peaks algama, et kontoris keegi ei peaks iga kord samu asju muutma. See on lisandmoodul: see on väljas, kuni selle sisse lülitad, ja reegel, mida sa ei määra, jätab BimCraft'i oma vaikeseade täpselt sellisena, nagu see on.

:::note
Need on vaikeseaded **uutele** hoonetele ja **uutele** asjadele. Projekti, mille oled juba alustanud, see ei muuda.
:::

## Sammud

1. Ava Sätted, mine jaotisse {{ui:Lisandmoodulid}} ja lülita sisse **Vaikimisi reeglid**.
2. Sätetes ava vahekaart **BimCraft** ja vali vasakpoolsest nimekirjast **Vaikimisi reeglid**.
3. Määra reeglid, mida soovid. Igaüks algab **BimCraft'i omaga**, mis on sulgudes. Reeglil, millel on kast **Meetriline** ja **Inglise**, on iga projektitüübi jaoks üks väärtus; täida ainult need, mida vajad.
4. Salvestusnuppu pole: iga muudatus salvestatakse, kui teed. Väärtus, mida ei saa kasutada, lükatakse sõnadega tagasi ja vana jääb alles.
5. Klõpsa {{ui:Uus hoone}}. Dialoog täidetakse sinu reeglite järgi ning iga väärtus, mille reegel määrab, on kõrval märgitud **sinu vaikimisi reeglitest**. Võid neid kõiki muuta enne {{ui:Loo}}.

## Reeglid

- **Uue hoone ühikud**: ühikud lülituvad sellele Loo juures.
- **Korruste arv**, **Korruste nimed** ja **Korruse kõrgus**. Nimes loeb `{n}` 1, 2, 3; `{n0}` loeb 0, 1, 2; `{nn}` ja `{nn0}` teevad sama kahekohaliste numbritega. Nii annab `Korrus {nn0}` tulemuseks Korrus 00, Korrus 01, Korrus 02.
- **Esimene seinatüüp**: see, mida seinatööriist joonistab esimesena. Meetriline kontor võib alustada 300 mm välisseinaga, samas kui inglise projektid jäävad tüübi Väliseina 2×6 juurde.
- **LOD-silt algsetel seinatüüpidel**: arendustase (LOD 100 kuni 500), mida üheksa algustüüpi näitavad kõikjal, kus tüüp on loetletud. Vt [Ehita seinakoostud](topic:wall-assemblies).
- **Uue seinatüübi LOD**: silt, millega uus tüüp algab tüübi redaktoris. Seda saab seal muuta.
- **Esimene leht**: selle paber, mõõtkava, lehe number ja nimi (kasuta `{level}` madalaima korruse nime jaoks) või üldse ilma esimese lehe.
- **Annotatsioonide suurused paberil** (Sätted › Üldine › Vaikimisi reeglid): kontori kõrgused millimeetrites, nii nagu need trükitakse, märkmetele, mõõtmistekstidele, siltidele, ruumide nimedele, ruudustiku mullide tähtedele, vaadete pealkirjadele ja loendi tekstile. Uus hoone võtab need Loo juures ja hoiab oma failis. Vt [Joonista täissuuruses, annoteeri mõõtkava järgi](topic:annotation-sizes).
- **Tööriist, mis on aktiivne pärast Loo**: Vali, nagu BimCraft teeb omaette, või Sein, nii et esimesed kaks klõpsu plaanil joonistavad juba seina.

## Loendi paigutus: kontori standard

Jaotises **Sätted › Üldine › Vaikimisi reeglid**, alajaotises **Loendi paigutus (kontori standard)**, määra, kuidas iga loend on rühmitatud, kas tal on vahesummad ja kogusumma, pealkiri ning veergude pealkirjade kirjastiil. Iga loend, mis ei määra oma seadeid, võtab need, kes iganes selle seadistas. Vt [Paiguta, salvesta ja ekspordi loend](topic:schedule-layouts).

## Jaga kontoris

1. Sätetes ava vahekaart **Üldine** ja vali **Vaikimisi reeglid**.
2. Kirjuta **Kontori nimi**, kui soovid. See kirjutatakse faili.
3. Klõpsa {{ui:Salvesta failina}}. Saad väikese faili, mille nimi lõpeb `.ccdefaults.json`.
4. Teises arvutis lülita lisandmoodul sisse, ava sama koht ja klõpsa {{ui:Laadi failist}}. Faili reeglid asendavad selles arvutis olevad.

Vahekaart Üldine sisaldab ka **Uue projekti ühikusüsteemi**, mis kehtib igale rakendusele, millel on lisandmoodul, ja {{ui:Lähtesta kõik reeglid}}. {{ui:Lähtesta BimCraft'i omad vaikeseaded}} vahekaardil BimCraft tühjendab ainult BimCraft'i omad.

## Hea teada

- Fail on lihtne, avatud JSON: nimekiri reeglite nimedest ja väärtustest. Reegel, mida fail nimetab ja mida see versioon ei tunne, jäetakse välja ja nimetatakse sõnumis; ülejäänu laaditakse.
- Reeglid on hoitud selles brauseris, kõigi sellel arvutis olevate CadCrafti rakenduste jaoks. Neid ei salvestata hoone faili ega sünkroonita arvutite vahel: kasuta faili.
- Algustüübi LOD-silt tuleb selles arvutis olevast reeglist. Tüüp, mille teed algustüübi koopiana, kannab oma silti hoone failis.
- BimCraftil pole täpsuse seadet, seega siin pole täpsuse reeglit.
- Mallist alustatud hoone toob malli enda korrused ja lehed. Seinatüübi ja ühikute reegel kehtib ikka.
- Lülita lisandmoodul välja ja kõik on jälle BimCraft'i oma. Sinu reeglid jäävad alles, kui lülitad selle uuesti sisse.
