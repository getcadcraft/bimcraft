---
title: Pípur og loftstokkar
summary: Teiknaðu pípu- og loftstokksleiðslur á grunnmynd eftir miðlínum þeirra; olnbogar, T-stykki, minnkarar og umskipti eru búin til fyrir þig, leiðslurnar tilheyra kerfum með tengdum tengjum í IFC-skránni, og þær birtast í grunnmyndum, listum og magntökunni.
keywords: pípa, pípur, lagnir, pípulagnir, loftstokkur, loftstokkar, loftlagnir, hvac, mep, vélrænt, olnbogi, T-stykki, minnkari, umskipti, tengistykki, lokar, hliðarloki, kúluloki, hnattloki, bakstreymisloki, uppréttur, halli, frárennsli, hreinlætis, regnvatns, útblástur, kalt vatn, heitt vatn, kælivatn, hitun, gas, brunavörn, aðflæði lofts, afloft, kerfi, tengi, tengipunktar, tengipunktur, tæki, lagnatæki, handlaug, vaskur, salerni, sturta, þvottavaskur, eldhúsvaskur, einingar tækja, UHC, DFU, stærðarákvörðun frárennslis, greinlögn, ramal, coletor, loftflæði, cfm, núningur, jafn núningur, stærðarákvörðun, áætlun, magntaka, nbr, nbr 5648, nbr 5688, nbr 8160, pvc soldável, esgoto, dn
from: 85140bc5
---

## Hvað þú gerir

Teiknaðu pípur og loftstokka byggingar eins og þú teiknar veggi: smelltu á hornin á miðlínu leiðslu í þeirri hæð sem þú stillir. BimCraft býr til tengistykkin, setur hvern hluta í sitt kerfi og tengir þá, þannig að önnur forrit lesa leiðsluna sem eitt tengt kerfi.

## Teiknaðu pípu

1. Kveiktu á {{ui:Teikna}}, opnaðu {{ui:Smíð}} og veldu {{ui:Pípa}}.
2. Á stikunni, veldu **kerfið** (kalt vatn, heitt vatn, hreinlætisfrárennsli, gas…). Það stillir venjulegt efni: kopar fyrir vatn, PVC fyrir frárennsli og útblástur, stál fyrir hitun, kælivatn, gas og brunavörn. Breyttu **efninu**, **flokki** og **stærð** ef þú þarft. Stærðir og veggir koma frá opinberum stöðlum: stálpípa ASME B36.10M, koparrör ASTM B88, PVC ASTM D1785 og PEX ASTM F876. Brasilísk verkefni geta notað **PVC vatnspípu (NBR 5648)**, PVC sem límist saman fyrir kalt vatn, og **PVC frárennslispípu (NBR 5688)**, série normal eða reforçada, fyrir frárennsli og útblástur: stærðir þeirra eru nefndar eftir DN (DN 25, DN 100). Þegar þú velur eina af þeim, heldur það sig við brasilísku pípurnar ef þú velur annað kerfi (PVC frárennslispípa fyrir hreinlætisfrárennsli eftir PVC vatnspípu).
3. Stilltu **Í**: hæð miðlínu pípunnar yfir hæðinni.
4. Smelltu þar sem pípan byrjar, síðan á hvert horn. Tvísmelltu, eða ýttu á {{key:Enter}}, á síðasta punktinn. {{key:Backspace}} tekur síðasta hornið til baka; {{key:Esc}} hendir leiðslunni.

Pípan smellur eins og veggir gera, og að öðrum leiðslum: byrjaðu á enda pípu til að halda áfram frá henni, eða endaðu á línu pípu til að greina út frá henni. Ný leiðsla tekur hæð pípunnar sem hún smellur að.

Leiðsla sem byrjar eða endar á tengi búnaðar tekur stærð hans og kerfi og helst föst við hann: sjá [MEP-búnaður með tengjum](topic:mep-equipment) og [Tengdu pípur og loftstokka við búnað](topic:mep-connections).

## Stilltu pípulagnastaðal verkefnisins

Fyrsti listinn á pípustikunni er **pípulagnastaðall** líkansins: **US (IPC, tommur)** eða **Brasilía (ABNT, DN)**. Hann er vistaður í líkaninu, þannig að allir sem opna skrána byrja leiðslur á sama hátt. Undir **US** byrjar ný leiðsla í kopar (vatn) eða PVC Schedule 40 (frárennsli), í tommum, með halla International Plumbing Code. Undir **Brasilía** byrjar kalt vatn sem PVC soldável DN 25, hreinlætis- og regnvatnsfrárennsli og útblástur sem PVC esgoto DN 100 með halla NBR 8160, og heitt vatn í kopar. Það á einnig við um leiðslu sem byrjar á tengi tækis eða búnaðartengi. Teiknaðar pípur halda efni sínu og eigin töflum; efnislistinn er opinn, þannig að þú getur enn teiknað eina brasilíska leiðslu í US-líkani viljandi. Skrá án vals hegðar sér eins og áður: ný leiðsla fylgir efninu sem er í notkun.

## Teiknaðu loftstokk

1. Veldu {{ui:Loftstokkur}}. Veldu kerfið (aðflæði, afturflæði, útblástur eða útiloft) og lögunina: hringlaga, rétthyrnda eða flata sporöskjulaga.
2. Sláðu inn breidd og hæð (breidd hringlaga loftstokks er þvermálið), og **Í** fyrir hæð miðlínunnar.
3. Til að stærðarákvarða eftir loftflæði, sláðu inn **Loftflæði** og **Núning** og smelltu á {{ui:Stærðarákvarða}}. Loftstokkurinn er stærðarákvarðaður með jöfnum núningi, aðferðinni í kafla loftstokkahönnunar í ASHRAE Handbook, og rúnaður upp í birgðastærð, þannig að núningurinn verður við eða undir hraðanum sem þú slóst inn. Án hraða notar það 0,08 in. vatnssúlu á 100 ft (0,8 Pa/m). Rétthyrndur loftstokkur heldur hæðinni sem þú slóst inn og fær breidd; BimCraft segir frá því þegar hliðarnar eru meira en 4 á móti 1.
4. Smelltu á hornin eins og fyrir pípu.

## Pípulagnatæki

{{ui:Smíð}} › {{ui:Setja fjölskyldu}} býður fimm tæki til að byrja með, hvert með frárennsli og kaldvatnstengi: **Salerni**, **Handlaug**, **Eldhúsvaskur**, **Sturtubakki** og **Þvottavaskur**. Framhliðar þeirra snúa að þér þegar þú setur þau og bakhliðin fer að veggnum. Frárennsli þeirra er á minnstu frárennslisstærð tækis samkvæmt NBR 8160 (DN 100 fyrir salerni, DN 50 fyrir eldhúsvask, DN 40 fyrir hin); vatn er DN 20. Breyttu stærðum þeirra, eða breyttu þeim, eins og hverri fjölskyldu: sjá [Fjölskyldur og stærðir þeirra](topic:families).

Fjölskylda segir hvaða tæki hún er undir {{ui:Lagnatæki}} á flipanum {{ui:Tengipunktar}} í fjölskylduritlinum. Frárennsli hennar er þá talið í einingum tækja: 6 UHC fyrir salerni, 1 fyrir handlaug, 3 fyrir eldhúsvask eða þvottavask, 2 fyrir sturtu (NBR 8160), eða frárennslseiningar tækja samkvæmt töflu 709.1 í IPC.

## Frá tengi tækis

Hlutir settir eftir fjölskyldu með tengjum (frárennsli og krani handlaugar, háls loftdreifara: sjá [Breyttu fjölskyldu](topic:family-editor)) sýna lausu tengipunktana sína sem punkta meðan {{ui:Pípa}} eða {{ui:Loftstokkur}} er virkt, og bendillinn smellur að þeim.

- **Byrjaðu á tengipunkti**: leiðslan tekur kerfi sitt og stærð (pípan í efni stikunnar á eða rétt yfir stærð tengipunktsins; hringlaga loftstokkur af þvermáli hans). Þegar tengipunkturinn snýr niður eða upp, eins og frárennsli undir handlaug, fer leiðslan fyrst beint niður eða upp í hæðina í **Í**, og síðan áfram eftir smellunum þínum.
- **Endaðu á tengipunkti**: leiðslan fer niður eða upp á hann og endar þar.

Leiðslan er tengd við hlutinn í IFC-skránni, þannig að önnur forrit sjá tækið sem hluta af kerfi sínu. Hlutur sem er settur síðar með tengipunkt á enda leiðslu er líka tengdur við hana. Leiðsla sem er færð frá tengipunkti er ekki lengur tengd við hann.

## Tengistykkin, búin til fyrir þig

| Hvar | Það sem BimCraft býr til |
|---|---|
| Leiðsla beygir | Olnbogi. Stálpípa með langa radíus ASME B16.9 (1,5 × stærðin), aðrar pípur á einu ytra þvermáli, hringlaga loftstokkur á 1,5 þvermálum, rétthyrndur loftstokkur á einni breidd (eða einni hæð fyrir beygju upp eða niður) |
| Leiðsla endar á línu annarrar leiðslu | T-stykki; hinni leiðslunni er skipt þar |
| Tvær leiðslur mætast enda á enda í mismunandi stærðum | Minnkari (pípur) eða umskipti (loftstokkar) |
| Tvær leiðslur af einni stærð mætast enda á enda í horni | Olnbogi |

Þegar þú breytir, færir eða eyðir leiðslu er sérhvert tengistykki á þeirri hæð búið til aftur. Ef legg er of stutt fyrir tengistykkin við endana, segir BimCraft það og breytir engu: færðu hornið lengra í burtu.

:::note
Tengistykkin og lokarnir eru almenn: teiknuð eftir stærð pípu eða loftstokks, ekki eftir vörulista framleiðanda. Tengistykki með tengjum, pressutengi og raufuð tengistykki, lokahús og búnaður hafa eigin stærðir framleiðenda; athugaðu þau hjá birgi þínum áður en þú pantar.
:::

## Uppréttir

Meðan þú teiknar, sláðu inn nýja hæð í **Í** og ýttu á {{key:Enter}}: leiðslan fer beint upp eða niður við síðasta hornið, með olnboga við hvorn enda. Uppréttur getur farið upp í hæðina fyrir ofan. Hver hæð sýnir þá hluta leiðslu sem útsýnisbil hennar nær, með **UP** eða **DN** við uppréttinn.

## Frárennsli og halli þess

Hreinlætis- og regnvatnsfrárennsli byrja á minnsta halla sem International Plumbing Code leyfir fyrir stærð þeirra: 1/4 in. á fet upp í 2-1/2 in., 1/8 in. á fet frá 3 til 6 in., 1/16 in. á fet frá 8 in. Brasilísk PVC frárennslispípa byrjar á halla NBR 8160: 2 % upp í DN 75, 1 % frá DN 100. Sláðu inn annan halla á stikunni eða í Eiginleikum: `1/4"/ft`, `2 %` eða `1:50`. Leiðslan fellur frá fyrsta punkti sínum, þannig að teiknaðu frárennsli í þá átt sem það rennur. Grunnmyndin sýnir fallið og ör. Eiginleikar aðvara þegar frárennsli er flatara en lágmark reglunnar.

## Stærðu frárennsli eftir einingum tækja

Veldu hreinlætisfrárennsli: **Einingar tækja** í Eiginleikum segir hversu margar það ber og minnstu stærð sem þau þurfa. Sérhvert pípulagnatæki sem frárennslistengið er á leiðslunni telur, og svo telur hvert frárennsli sem rennur inn í hana: teiknaðu frárennsli í þá átt sem þau renna, hvert endar á frárennslinu sem það rennur í.

- Frárennsli í brasilískri PVC frárennslispípu telja **UHC** og fylgja NBR 8160; hin telja **DFU** og fylgja International Plumbing Code.
- **Frárennsli**: **Grein** er stærðarákvörðuð eftir töflu reglunnar fyrir greinar tækja; **Aðalfrárennsli** eftir töflu sinni eftir halla, þannig að **Halli** skiptir máli.
- Frárennsli er aldrei minna en frárennsli tækjanna sem það þjónar (salerni þarf DN 100, eða 3 in.), né minna en frárennsli sem rennur í það. Undir NBR 8160 er aðalfrárennsli að minnsta kosti DN 100.

{{ui:Stærðu frárennsli}} gerir hvert hreinlætisfrárennsli í líkaninu, sem er of lítið fyrir einingar tækja sinna, að þeirri stærð sem það þarf, sem eitt skref sem þú getur afturkallað. Frárennsli teiknað stærra en það þarf er látið óbreytt. Þegar frárennsli ber meira en stærsta stærð pípu sinnar getur við halla sínum, segir BimCraft það: gefðu því brattari halla eða aðra pípu.

:::note
Töflurnar eru þær sem gilda um lárétt frárennsli. Lóðréttar lagnir, útblástur og regnvatnsfrárennsli eru ekki stærðarákvörðuð hér: athugaðu þau, og alla hönnunina, gegn reglunum sem gilda um verkefnið.
:::

## Lokar

1. Veldu {{ui:Loki}} og gerðina: hliðarloki, kúluloki, hnattloki eða bakstreymisloki.
2. Smelltu á pípu þar sem hann á að vera. Pípan er skorin í kringum hann og lokinn er tengdur við báðar hliðar.

Eiginleikar leiðslunnar lista lokana sína, hver með {{ui:Fjarlægja}}.

Fleiri gerðir loka, sía, stillar á loftstokkum, þínar eigin pípuforskriftir og fjölskyldur framleiðenda: sjá [Pípuforskriftir, lokar, stillar og fjölskyldur framleiðenda](topic:pipe-specs).

## Breyttu leiðslu

Veldu hvaða hluta leiðslu sem er, á grunnmynd eða þrívíddarmynd. Í Eiginleikum:

- **Kerfi**, **Efni**, **Flokkur** og **Stærð** (pípur), eða **Lögun**, **Breidd**, **Hæð** (loftstokkar).
- **Hæð yfir hæðinni** færir alla leiðsluna upp eða niður.
- **Einangrun**: þykkt hennar, geymd fyrir athugun á bili og lista yfir op (ekkert er teiknað fyrir hana): sjá [Athugaðu pípur og loftstokka gegn burðarvirki](topic:mep-against-structure).
- Stálpípa: **Skera í spólur**: sjá [Stálpípuspólur og spólublöð](topic:pipe-spools).
- **Halli** (pípur).
- **Rennsli** með {{ui:Stærðarákvarða}}: fyrir vatn, minnsta stærð sem heldur vatninu í 8 ft/s (2,4 m/s), eða 5 ft/s (1,5 m/s) fyrir heitt vatn; við 3 m/s fyrir brasilísku PVC vatnspípuna (NBR 5626). Fyrir loftstokka, hraði og núningshraði loftstokksins eins og hann er teiknaður. Frárennsli er í staðinn stærðarákvarðað eftir einingum tækja: sjá **Stærðu frárennsli eftir einingum tækja** hér að neðan.

Sérhver breyting er eitt skref af {{ui:Afturkalla}}. {{key:Delete}} fjarlægir alla leiðsluna.

## Grunnmyndir

- Pípur minni en 150 mm (um 6 in.) eru teiknaðar sem ein lína á miðlínu sinni; stærri pípur og allir loftstokkar sem tvær línur í sinni breidd.
- Hvert kerfi hefur sinn lit; PDF grunnmyndar prentar þá í svörtu.
- Hver leiðsla er merkt með stærð sinni og kerfi (til dæmis `2" CW` eða `16×10 SA`).
- Útsýnisbil grunnmyndar ræður hvaða leiðslur hún sýnir, og {{ui:Sýnt í þessari grunnmynd}} getur sleppt **Pípum** eða **Loftstokkum**: sjá [Útsýni, útsýnisbil og þín eigin blöð](topic:views-and-sheets).

## Listar og magntakan

Spjaldið {{ui:Listar}} bætir við **Pípum** (eftir kerfi, efni og stærð, með lengdum sínum), **Loftstokkum** (eftir kerfi, lögun og stærð, með lengdum og ytra yfirborðsflatarmáli) og **Tengistykkjum og lokum** (eftir gerð og stærð, talið). Smelltu á röð til að velja hvað hún listar; {{ui:Sækja CSV}} sækir hana.

{{ui:Magntaka}} tekur leiðslurnar með sér til TakeoffCraft: pípu og loftstokk eftir stærð sem leiðslur teiknaðar á grunnmynd (frárennsli með halla mæld eftir hallanum), tengistykki og lokar talin þar sem þau eru: sjá [Sendu magntölur líkansins til TakeoffCraft](topic:takeoff). Lóðréttir uppréttir eru skildir eftir á því blaði, því grunnmynd getur ekki mælt þá; listinn Pípur hefur lengd þeirra.

## Í IFC-skránni

Hver leiðsla er samsetning sem heldur hlutum sínum: pípu- og loftstokkshlutum, tengistykkjum og lokum, hverjum með gerð sinni, efni, lit fyrir kerfi sitt og tengipunktum sínum. Snertandi tengipunktar eru tengdir, og sérhver hluti tilheyrir dreifikerfi sínu (IFC2X3-skrár fá það sama sem flæðishluta, tengistykki og stýringar í kerfi). Önnur forrit sem lesa IFC-kerfi sjá eina tengda leiðslu á hvert kerfi. Skilgreining leiðslunnar er geymd með henni, þannig að BimCraft býr hana til aftur á sama hátt þegar þú breytir henni.
