---
title: Väljastused, redaktsioonid ja joonise muutuste logi
summary: Registreeri iga väljastatud lehekomplekt, vaata, mis on sellest ajast alates muutunud igal lehel ja elemendil, ning hoia objektijuhised, tootmisjoonised ja lingitud mudelid seotud väljastusega, millele nad kuuluvad.
keywords: väljastus, väljastatud komplekt, esitatud komplekt, esitamine, redaktsioon, redaktsioonid, mis muutus, alates väljastusest, muutuste logi, joonise muutuste logi, joonisregister, saatekiri, objekti juhis, tootmisjoonis, lingitud mudel, hange, ehitus, hetktõmmis, võrdle
from: 4c732832
---

## Mida teed

Registreeri väljastus: millised lehed läksid välja, millisel kuupäeval ja mis otstarbel, igaüks oma redaktsiooniga. Hiljem küsi, mis on sellest väljastusest saadik muutunud. Hoia objektijuhised ja tagastatud tootmisjoonised väljastuse juures.

## Sammud

1. Vasakus paneelis ava **Väljastused ja redaktsioonid**.
2. Vali **Registreeri väljastus**. Redaktsioon pakutakse automaatselt (A, siis B; nummerdatud redaktsioon, nagu P1, loeb üles). Vali, milleks see väljastatakse, kellele see läheb, kuupäev ja lehed. Kui projekti etapp on määratud, järgib otstarve seda. Kui loakomplektil on toetavate dokumentide nimekiri, märgitakse selle nimekirjaga seotud lehed sulle automaatselt ära.
3. Jäta **Salvesta ka mudeli koopia väljastatuna** märgituks, et mudel jääks täpselt sellisena, nagu see välja läks. Koopia laaditakse alla; selle nimi, suurus ja SHA-256 salvestatakse väljastuse juurde.
4. Vali **Registreeri see väljastus**. Leht, mis muutus pärast viimast väljastamist, saab uue redaktsiooni. Leht, mis ei muutunud, jääb oma redaktsiooni juurde. Iga lehe pealkirjaplokk näitab selle redaktsiooni.
5. Muutuste nägemiseks vali väljastuse kõrval **Muutused alates**. Iga leht on märgitud kas Sama või Muudetud, koos sellel lisatud, muudetud ja eemaldatud elementidega. Arvu klõpsamisel valitakse need elemendid.
6. Objektijuhise, tootmisjoonise, märgistuskomplekti, lingitud mudeli või märkme jaoks vali **Lisa kirje**. Vali väljastus, millele see kuulub. Valitud fail salvestatakse nime, suuruse ja SHA-256 järgi; fail jääb sinna, kus ta on.
7. **Joonise muutuste logi** näitab iga lehe kohta ühte rida ja iga väljastuse kohta ühte veergu. **Laadi muutuste logi alla (CSV)** salvestab selle koos väljastuste ja kirjetega.
8. **Salvesta väljastuste ajalugu** kirjutab faili `.issues.json`. MarkupCraft, TakeoffCraft ja DetailCraft loevad seda käsuga **Loe väljastuste ajalugu**.

## Hea teada

- Ajalugu hoitakse IFC-faili sees (projekti omadusehulk `CadCraft_Issues`). Teised programmid seda ignoreerivad.
- Leht loetakse muudetuks, kui selle enda seadistus muutus või kui muutus element, mida see näitab: plaan näitab oma tasandit, vaade või lõige kogu mudelit, ukse- või aknaloend aga oma uksi või aknaid.
- Element loetakse muudetuks, kui muutus omadus, asukoht, suurus või kuju.
- Täpse muudetud omaduse nägemiseks ava salvestatud väljastatud mudeli koopia käsuga **Võrdle versioone**.
- Väljastuse eemaldamine jätab selle kirjed alles, ilma väljastuseta. Iga samm on üks Võta tagasi.
- Mudel, millel on üle 60 000 elemendi, ei hoia väljastuse juures iga elemendi kohta kirjet. Lehti võrreldakse endiselt.

## Veel valmis pole

- Lehti ei salvestata väljastusega PDF-idena.
- BimCraft-i enda lehtedel ei joonistata redaktsioonipilve. Pilved registreeri MarkupCraft-is väljastuse juures.
