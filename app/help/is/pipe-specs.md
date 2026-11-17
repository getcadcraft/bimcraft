---
title: Pípuforskriftir, lokar, stillar og fjölskyldur framleiðenda
summary: Settu upp þínar eigin pípuforskriftir (stærðartöflur með efni, tengingu og grófleika), geymdar í líkanaskránni; settu lokar, síu og stilla á leiðslur; og fluttu inn loka- eða búnaðarlíkan framleiðanda sem fjölskyldu með tengipunktum.
keywords: pípuforskrift, pípuforskriftir, pípulagnaforskrift, pípuflokkur, sérsniðin pípa, stærðartafla, rör, hreinlætisrör, ryðfrítt, listi, ytra þvermál, veggþykkt, innra þvermál, grófleiki, þrýstiflokkur, csv, json, innflutningur, útflutningur, töflureiknir, staðall, bpe, din, en 10357, en 10255, loki, lokar, hliðarloki, jöfnunarloki, stýriloki, sía, stillir, rúmmálsstillir, brunastillir, oem, framleiðandi, fjölskylda, fjölskyldur, tengi, tenging, step, obj, gltf, ifc, ofn, konvektor, plötuhitari, loftmeðhöndlunareining, dreifari, grind
from: bc2f7c4e
---

## Hvað þú gerir

Teiknaðu pípur í þinni eigin forskrift í stað innbyggðu stál-, kopar- og plasttaflnanna, settu lokar og stilla á leiðslurnar, og settu inn líkan framleiðanda af loka eða búnaði með tengjum sem pípurnar tengjast.

:::note
Hjálpartæki við teikningu og samræmingu. Pípuforskrift geymir þær tölur sem þú slærð inn eða flytur inn: athugaðu hverja töflu við verkstaðal þinn. Innbyggðir lokar, síur og stillar eru táknmyndir stærðar eftir leiðslunni, ekki lengd framleiðanda eða lokastaðals.
:::

## Stilltu pípuforskrift

1. Kveiktu á {{ui:Teikna}}, opnaðu {{ui:Smíð}} og veldu {{ui:Pípuforskriftir}}. Sami hnappur er á stiku Pípu-verkfærisins.
2. Veldu {{ui:Nýtt}}, eða byrjaðu úr skrá, innlímingu eða upphafsforskrift (sjá hér að neðan).
3. Sláðu inn nafn hennar, staðalinn eða tilvísunina sem hún fylgir, efnið og gerð enda eða tengingar.
4. Sláðu inn eina röð fyrir hverja stærð: heiti stærðarinnar, ytra þvermál og vegg, í millimetrum. Sláðu inn innra þvermál í stað veggjar ef þú hefur það: hitt er fyllt inn. DN, þrýstiflokkur og þyngd eru valkvæð.
5. Valfrjálst: grófleiki í millimetrum (þrýstifallsreikningurinn notar hann), einangrunarþykkt sem nýjar leiðslur byrja með, radíus olnboga sem stuðull af ytra þvermáli, hvort forskriftin hafi T-stykki og minnkara, og eigin lit í þrívídd.
6. Hakaðu við þjónusturnar sem nýjar leiðslur eiga að byrja í þessari forskrift, til dæmis kalt vatn.
7. Veldu {{ui:Vista í líkaninu}}.

Forskriftirnar eru vistaðar í líkanaskránni. Allir sem opna skrána hafa þær, og {{ui:Afturkalla}} tekur breytingu til baka.

Forskrift, eða ein af stærðum hennar, er ekki hægt að eyða meðan leiðsla er teiknuð í henni. Breyting á tölum stærðar teiknar leiðslur í þeirri stærð upp á nýtt.

## Notaðu forskrift í öðru líkani

- {{ui:Flytja út .json}} vistar valda forskrift sem litla skrá; {{ui:Flytja allt út}} vistar allar forskriftir líkansins. {{ui:Flytja inn skrá}} les þær aftur inn.
- {{ui:Flytja út .csv}} vistar stærðartöfluna fyrir töflureikni. {{ui:Flytja inn skrá}} les líka `.csv`.
- {{ui:Líma raðir}} tekur töflu sem afrituð er úr töflureikni. Fyrsta röðin nefnir dálkana: `Size`, `OD` og `Wall` (eða `ID`), og valfrjálst `DN`, `Pressure`, `Weight`. Ein röð fyrir hverja stærð. Tölur eru í millimetrum nema þú veljir tommur, eða reitur skrifar sína eigin einingu (`0.065 in`).

## Upphafsforskriftir

{{ui:Bæta við upphafsforskrift}} bætir einni af þessum við líkanið þitt sem afriti sem þú getur breytt:

| Upphafsforskrift | Stærðir |
|---|---|
| ASME BPE rör | 1/4" til 6" |
| EN 10357 flokkur A rör (DIN 11850 röð 2) | DN10 til DN200 |
| EN 10255 stálrör, miðflokkur | DN15 til DN150 |
| EN 10255 stálrör, þungflokkur | DN15 til DN125 |

Þessar töflur eru ytri þvermál og veggir sem tveir eða fleiri birtir birgjavefir gefa upp fyrir staðalinn og eru sammála um. Þær eru ekki teknar úr stöðlunum sjálfum. Stærðir sem aðeins einn vefur gefur eru látnar vera. Hver upphafsforskrift sýnir uppruna sína og er merkt „athugaðu við verkstaðal þinn“. Engin grófleiki, þrýstiflokkur eða þyngd er gefin.

## Teiknaðu leiðslu í forskrift

1. Veldu {{ui:Pípa}}. Þjónusta sem þú hakaðir við í forskrift byrjar í henni. Fyrir aðrar leiðslur, veldu forskriftina í efnislistanum: forskriftir eru skráðar á eftir innbyggðu efnunum sem „Forskrift: nafn“.
2. Stærðalistinn hefur nú aðeins stærðir þeirrar forskriftar. Veldu eina og teiknaðu leiðsluna.

Til að færa leiðslu í forskrift síðar, veldu hana og breyttu **Efni** í {{ui:Eiginleikar}}. Stærð hennar verður næsta stærð forskriftarinnar miðað við ytra þvermál.

Í IFC-skránni ber pípan heiti forskriftarinnar, staðal, efni, tengingu og mál (`CadCraft_PipeSpec` og `Pset_PipeSegmentTypeCommon`, á pípunni og gerð hennar).

Stærðar- og þrýstifallsreikningar lesa innra þvermál forskriftarinnar. Þegar forskriftin hefur grófleika er núningur leiðslu reiknaður með honum (Darcy-Weisbach); án hans er venjulegt sjálfgefið gildi reikningsins notað.

## Lokar, sía og stillar

1. Veldu {{ui:Loki}} og veldu gerðina á stikunni: hliðarloka, kúluloka, fiðrildaloka, hnattloka, bakstreymisloka, jöfnunarloka eða stýriloka, eða síu fyrir pípur; rúmmálsstilli eða brunastilli fyrir loftstokka.
2. Smelltu á leiðsluna þar sem hann á að vera. Leiðslan er skorin í kringum hann og báðar hliðar haldast tengdar. Hann tekur stærð leiðslunnar og færist með henni.

Eiginleikar leiðslunnar lista hvern þeirra með {{ui:Fjarlægja}}; leiðslan lokast aftur.

Þrýstifallsreikningurinn telur tapstuðul fyrir hliðar-, kúlu-, hnatt- og bakstreymisloka eingöngu. Hinar gerðirnar, stillar og fjölskyldur framleiðenda bæta engu tapi við þar: gerðu ráð fyrir þeim í þinni eigin athugun. Þær eru taldar í töflunni **Tengistykki og lokar** og í magntökunni, og skrifaðar í IFC sem lokar, sía (sían) og stillar með tveimur tengdum tengjum.

## Líkan framleiðanda sem fjölskylda

1. Opnaðu {{ui:Smíð}} og veldu {{ui:Fjölskyldur}}, og síðan Flytja inn líkan. IFC, STEP, OBJ, STL, glTF og skrár Safnaatriða eru lesnar. Fyrir OBJ og STL skaltu stilla einingar skrárinnar og efri ás fyrst.
2. Í tengigluggunum, sláðu inn heiti, framleiðanda og gerðarnúmer.
3. Veldu hvort það fer **Á leiðslu** (loki, sía eða stillir) eða er **Búnaður**, og hvernig það er skrifað.
4. Gefðu því tengi sín. Hvert hefur heiti, pípu eða loftstokk, þjónustuna, stærðina í millimetrum (ytra þvermál pípu), nafnstærðina eins og forskriftin þín nefnir hana, gerð enda, stöðu sína og stefnuna sem það snýr. {{ui:Á fleti}} setur tengi í miðju hliðar kassa líkansins. Litla útsýnið að ofan sýnir tengin.
5. Veldu {{ui:Vista fjölskylduna í líkaninu}}.

Fjölskylda sem fer á leiðslu þarf nákvæmlega tvö tengi sem snúa frá hvoru öðru á einni línu. Veldu hana í lista lokaverkfærisins og smelltu á leiðslu: hún er sett í sinni eigin lengd og pípurnar tengjast tengjum hennar.

Fjölskylda er aldrei teygð. Ef tengin hennar eru ekki í stærð leiðslunnar færðu skilaboð þegar þú setur hana, og {{ui:Athuga tengingar}} sýnir hana.

Búnaðarfjölskylda er sett með {{ui:Búnaður}}, gerð **Fjölskylda framleiðanda**. Pípur og loftstokkar smella að tengjum hennar.

{{ui:Sækja sem Safnaatriði}} vistar fjölskyldu með tengjum sínum sem skrá sem þú getur sent í Safnið.

## Ofnar og konvektorar

{{ui:Búnaður}} hefur einnig **Ofn** og **Konvektor / plötuhitari**: almenn form með rennslis- og bakrennslistengi fyrir hitavatn. Sjá [MEP-búnaður með tengjum](topic:mep-equipment).
