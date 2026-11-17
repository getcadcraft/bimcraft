---
title: Stærðarval á pípum og loftstokkum, athugun á kapalfyllingu og lýsingu
summary: Athugaðu stærðir vatnsveitupípa og loftstokka með þrýstifalli, leiddu kapla um kapalbakka og kapalrör og sjáðu fyllingu þeirra, og reiknaðu birtustig í herbergjum út frá IES- eða EULUMDAT-skrám. Sjálfgefin gildi eru merkt; sláðu inn gildi þeirra staðla sem í gildi eru.
keywords: stærðarval, stærðarval pípa, stærðarval loftstokka, þrýstifall, tækjaeiningar, eftirspurn, hunter, hazen-williams, hraði, núningur, jafn núningur, viftuþrýstingur, stillilok, mikilvæg leið, kapalbakki, kapalrör, fylling, kapalskrá, ies, ldt, eulumdat, ljósmælingar, birtustig, lux, einsleitni, lýsingarútreikningur, aflþéttleiki, mep, útreikningar, vandamál
from: 9cb90815
---

## Það sem þú gerir

Teiknaðu pípur, loftstokka, kapalbakka og kapalrör eins og venjulega, opnaðu síðan spjaldið **Útreikningar**. Hver flipi les líkanið, sýnir töflu og listar það sem er rangt sem {{ui:Vandamál}} í ⚠-spjaldinu. Þegar stærð myndi laga vandamál breytir **Nota stærðir** lögnunum í einu afturköllunarskrefi.

Þetta eru teiknihjálpartæki. Hvert sjálfgefið gildi er merkt á skjánum, og enginn þeirra er staðlatafla: sláðu inn tölurnar úr staðlinum sem þú hannar eftir, og láttu verkfræðinginn sem ber ábyrgð á niðurstöðunni yfirfara hana.

## Pípur

1. Veldu **kerfislykilinn** (kalt vatn er `cw`, heitt vatn `hw`).
2. Settu mesta hraða og, ef þú vilt að þrýstingurinn sé athugaður, þrýsting við upptökin og lægsta þrýsting sem tæki þarf.
3. Smelltu á {{ui:Athuga}}.

Hver pípa ber eftirspurnina af tækjaeiningunum fyrir neðan hana. Eftirspurnin kemur af ferli tækjaeininga á móti flæði, eins og Hunter lýsti því. **Innbyggði ferillinn er dæmi, ekki staðlatafla**; Vandamálin segja það þar til þú slærð inn þinn eigin. Núningur er Hazen–Williams, tengistykki eru taptölur, og hækkun kostar 9.8 kPa á metra. Einingar tækis koma af tegund þess, eða af tölunni sem þú stillir með aðstoðarverkfærinu `loads_set`.

## Loftstokkar

Stilltu kerfið, núningshraðann (jafn núningur) eða hraða, og hvert tap af spólu, síu eða hljóðdeyfi. Endatæki fá loftflæði sitt frá `loads_set` á dreifaranum. Taflan sýnir hraða og núning fyrir hvern hluta, **viftuþrýstinginn** á mikilvægu leiðinni, og þrýstinginn sem stillilok hvers annars endatækis þarf að taka. Taptölur tengistykkja nota ávöl sjálfgefin gildi, ekki gagnagrunn um tengistykki.

## Kapalbakkar og kapalrör

Teiknaðu þá með Loftstokks-verkfærinu: kerfin **Kapalbakki** og **Kapalrör** eru vistuð sem kapalberar, svo önnur forrit lesa þá sem bakka og rör. Í flipanum Kaplar límir þú kapalskrána (merki, ytra þvermál í mm, fjöldi, `from`, `to`). `from` og `to` eru merki búnaðar eða punktur `x,y,z` í millimetrum. Kaplar fylgja stystu samfelldu leið í gegnum bakka og rör; hver lögn sýnir fyllingu sína miðað við mörkin sem þú slærð inn, og skráin vistast sem CSV með lengd sem inniheldur hlutfall slaka og endana.

## Lýsing

Gefðu hverjum ljósabúnaði IES (LM-63) eða EULUMDAT skrá sína með aðstoðarverkfærinu `photometry_set`. Sláðu inn markmiðin, bil nets og hæð vinnuflatar. Niðurstaðan er aðeins **beint** birtustig: engin endurkast milli flata og engir skuggar, svo hún er neðri mörk í herbergi.

## Brunaúðarar

Viðbótin **Brunaúðarar** hefur sinn eigin flipa; sjá hjálp hennar.
