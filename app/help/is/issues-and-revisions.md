---
title: Atriði, endurskoðanir og breytingaskrá teikninga
summary: Skráðu hvert sett af blöðum sem þú afhendir, sjáðu hvað hefur breyst síðan á hverju blaði og hverjum hlut, og geymdu verkstaðafyrirmæli, verkstæðisteikningar og tengd líkön við atriðið sem þau tilheyra.
keywords: atriði, útgefið sett, afhent sett, afhending, endurskoðun, endurskoðanir, hvað breyttist, síðan í atriði, breytingaskrá, breytingaskrá teikninga, teikniskrá, sendingarskrá, verkstaðafyrirmæli, verkstæðisteikning, tengt líkan, útboð, framkvæmd, mynd, bera saman
from: 4c732832
---

## Það sem þú gerir

Skráðu atriði: hvaða blöð fóru út, hvaða dag, í hvaða tilgangi, og hvert þeirra í sinni endurskoðun. Seinna spyrðu hvað hafi breyst síðan það atriði. Geymdu verkstaðafyrirmæli og skilaðar verkstæðisteikningar við atriðið.

## Skref

1. Í vinstra spjaldinu opnarðu **Atriði og endurskoðanir**.
2. Veldu **Skrá atriði**. Endurskoðunin er stungin upp (A, svo B; númeruð eins og P1 telur upp). Veldu til hvers það er gefið út, hverjum það fer, dagsetninguna og blöðin. Þegar verkefnisstig er stillt fylgir tilgangurinn því. Þegar leyfispakkinn er með lista yfir fylgiskjöl eru blöðin sem tengjast þeim lista merkt fyrir þig.
3. Láttu **Vista líka afrit af líkaninu eins og það var gefið út** vera merkt til að halda líkaninu nákvæmlega eins og það fór út. Afritið er sótt; nafn þess, stærð og SHA-256 eru geymd með atriðinu.
4. Veldu **Skrá þetta atriði**. Blað sem breyttist frá því það var síðast gefið út fær nýju endurskoðunina. Blað sem breyttist ekki heldur þeirri endurskoðun sem það hefur. Titilreitur hvers blaðs sýnir endurskoðun þess.
5. Til að sjá hvað breyttist velurðu **Breytingar síðan** við hliðina á atriði. Hvert blað sýnir Eins eða Breytt, með hlutunum sem bættust við, breyttust og voru fjarlægðir á því. Smelltu á tölu til að velja þá hluti.
6. Veldu **Bæta við færslu** fyrir verkstaðafyrirmæli, verkstæðisteikningu, merkingasett, tengt líkan eða athugasemd. Veldu atriðið sem það tilheyrir. Skrá sem þú velur er skráð eftir nafni, stærð og SHA-256; skráin er áfram þar sem hún er.
7. **Breytingaskrá teikninga** sýnir eina línu fyrir hvert blað og einn dálk fyrir hvert atriði. **Sækja breytingaskrána (CSV)** vistar hana ásamt atriðunum og færslunum.
8. **Vista atriðasöguna** skrifar `.issues.json` skrá. MarkupCraft, TakeoffCraft og DetailCraft lesa hana með **Lesa atriðasögu**.

## Gott að vita

- Sagan er geymd inni í IFC-skránni (eiginleikasett `CadCraft_Issues` á verkefninu). Önnur forrit hunsa hana.
- Blað telst breytt þegar eigin uppsetning þess breyttist, eða þegar hlutur sem það sýnir breyttist: grunnmynd sýnir hæð sína, snið eða útlit allt líkanið og hurða- eða gluggalisti sýnir hurðir sínar eða glugga.
- Hlutur telst breyttur þegar eiginleiki, staðsetning, stærð eða lögun hans breyttist.
- Til að sjá nákvæmlega hvaða eiginleiki breyttist opnarðu vistaða afritið af útgefna líkaninu með **Bera saman útgáfur**.
- Að fjarlægja atriði heldur færslunum, án atriðis. Hvert skref er ein Afturkalla.
- Líkan með meira en 60.000 hluti heldur ekki skrá yfir hvern hlut með atriðinu. Blöð eru samt borin saman.

## Ekki búið til enn

- Blöð eru ekki vistuð sem PDF með atriðinu.
- Endurskoðunarský er ekki teiknað á eigin blöðum BimCraft. Skráðu ský í MarkupCraft við atriðið.
