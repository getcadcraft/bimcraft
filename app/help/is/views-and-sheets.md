---
title: Sýnir, sýnisvið og eigin blöð
summary: Finndu hverja grunnmynd, útlit, snið, þrívíddarsýn, lista og blað í verkefnavafranum, stilltu hvernig hver grunnmynd er skorin og hvað hún sýnir, gerðu stækkanir, teiknaðu línur og skyggingar í einni sýn, geymdu stillingar í sniðmátum og raðaðu eigin blöðum.
keywords: stækkun, stækkunarsýn, nákvæm grunnmynd, teikning, nákvæmislínur, skygging, skyggt svæði, fyllt svæði, mynstur fyllingar, loftgrunnmynd, rcp, loftnet, ljósabúnaður, verkefnavafri, sýnir, sýnisvið, klipping, klippisvæði, klippisýn, mælikvarði, undirlag, sýna aðra hæð, hálftónn, skurðarflötur, skurðarhæð, efst, neðst, dýpt sýnar, sýnileiki, flokkar, fela í sýn, sýnisniðmát, sniðmát, blað, blöð, titilreitur, sýngluggi, raða blöðum, skipulag, útlit, pdf, stillingar grunnmyndar, vafri
from: ee1d5afe
---

## Það sem þú gerir

Vinnðu eins og BIM-verkefni eru skipulögð: hver sýn í einum lista, hver grunnmynd skorin þar sem þú vilt, sömu stillingar fyrir nokkrar grunnmyndir í gegnum sniðmát, og eigin blöð sem þú skipuleggur.

## Verkefnavafrinn

1. Kveiktu á {{ui:Draw}}. Vinstra spjaldið hefur {{ui:Project browser}} undir líkönunum.
2. Hann listar:
   - **Grunnmyndir hæða**: hverja hæð. Smelltu á eina til að sjá grunnmynd hennar. Rennihnappurinn við hana stillir sýnisvið hennar (að neðan). Grunnmynd sem fylgir sniðmáti sýnir heiti sniðmátsins.
   - **Loftgrunnmyndir**: endurspeglaðar loftgrunnmyndir hverrar hæðar (að neðan).
   - **Stækkanir**: hver stækkun með sýninni sem hún er teiknuð á, og {{ui:New callout}}. **Vantar** listar stækkanir sem sýn þeirra er horfin.
   - **Útlit** og **Snið**: fjórar hliðar og hver sniðlína. Smelltu á eina til að opna teikningasettið sem þau eru teiknuð í.
   - **3D-sýnir**: sýnirnar sem þú vistaðir með {{ui:Views}}.
   - **Listar**: smelltu á einn til að sýna hann undir grunnmyndinni.
   - **Blöð**: blöðin sem þú bjóst til, {{ui:New sheet}}, og {{ui:Drawing set…}} fyrir allt settið sem er búið til úr líkaninu.
   - **Sýnisniðmát**, með {{ui:New template}}, og **Tenglar** (tengdu líkönin).

## Stilla sýnisvið grunnmyndar

1. Smelltu á rennihnappinn við hæð undir **Grunnmyndir hæða**.
2. Stilltu hæðirnar, fyrir ofan þá hæð:
   - **Skurður við**: þar sem grunnmyndin sker veggi, hurðir og glugga (1200 mm, um 4 fet, nema þú breytir því).
   - **Efst**: það sem er fyrir ofan skurðinn og undir efstu hæð er teiknað strikað (hátt skápur, bita). Skildu það eftir tómt fyrir hæð hæðarinnar.
   - **Neðst** og **Dýpt undir neðsta**: hlutir lægri en skurðurinn eru teiknaðir í þunnum línum niður að neðsta og svo langt undir hann.
3. Undir **Sýnt á þessari grunnmynd** afmerktu það sem þessi grunnmynd sleppir: húsgögn, rými, súlur og svo framvegis.
4. Til að sleppa stökum frumefnum: veldu þau á grunnmyndinni eða þrívíddarsýninni, opnaðu gluggann og smelltu á {{ui:Hide the selected here}}. {{ui:Show them all}} skilar þeim.
5. Smelltu á {{ui:Use these settings}}.

Grunnmyndin er skorin aftur strax, og teikningasettið og blöðin þín fylgja henni. Sneið úr punktskýi fylgir líka skurðarhæðinni.

## Klippa grunnmynd, gefa henni mælikvarða, sýna aðra hæð undir henni

Allt þrennt er í sama glugga (rennihnappurinn við hæð):

- **Mælikvarði**: mælikvarðinn sem grunnmyndin prentast í ({{ui:Print}} á stiku grunnmyndarinnar) og setur á blað. **Passa** velur stærsta staðlaða mælikvarða sem passar.
- **Klippisvæði**: smelltu á {{ui:Draw on the plan…}}, smelltu síðan á eitt horn og gagnstætt horn á grunnmyndinni ({{key:Esc}} stöðvar). Grunnmyndin utan svæðisins er huld á skjánum, og þú getur samt unnið þar; prentuð, á blöðum og í teikningasettinu sýnir grunnmyndin aðeins það sem er innan svæðisins. {{ui:Clear}} tekur klippinguna af. {{ui:Fit}} passar klippinguna.
- **Undirlag**: veldu aðra hæð. Veggir hennar, skornir hlutir, hurðir og gluggar eru teiknuð ljós undir þessari grunnmynd, til að stilla hluti af við hæðina fyrir neðan eða ofan. Þú getur ekki valið þá hér, og þeir prentast í ljósgráu.

Sýnisniðmát geymir mælikvarðann ásamt hæðunum og flokkunum. Klippisvæði og undirlag tilheyra alltaf einni grunnmynd.

## Loftgrunnmynd hæðar

Sérhver hæð hefur endurspeglaða loftgrunnmynd við hlið grunnmyndar sinnar: grunnmyndina séða að neðan, til að raða loftum og því sem hangir úr þeim.

1. Smelltu á hæðina undir **Loftgrunnmyndir** í vafranum, eða veldu {{ui:Ceiling plan}} við hæðina á stiku grunnmyndarinnar.
2. Veggirnir eru skornir í 2300 mm (um 7'-6"). Það sem liggur fyrir ofan þann skurð og undir hæð hæðarinnar er teiknað: loft með neti sínu og hæðarmerki (`CLG 2438`), ljós, bitar. Hurðir, gluggar og það sem liggur undir skurðinum eru sleppt.
3. Til að búa til loft notarðu {{ui:Ceiling}} eins og á grunnmyndinni, og velur það síðan og velur **Mynstur** þess í Eiginleikum. Sjá [Herbergi, gólf, loft og þök](topic:floors-and-roofs).
4. Til að hengja ljós úr því setur þú hlutinn úr safninu meðan loftgrunnmyndin er sýnd: hann fer í **Í loftinu**. Sjá [Setja búnað og húsgögn úr safninu](topic:place-from-library).
5. Rennihnappurinn við loftgrunnmynd stillir skurð hennar og efstu hæð, mælikvarða, flokka, klippisvæði og undirlag, eins og fyrir hæðargrunnmynd. Loftgrunnmyndir taka engin sýnisniðmát.

Hún er teiknuð á sama hátt og grunnmyndin (endurspeglað, ekki spegilmynd). Loft sem liggur neðar en skurðurinn er ekki teiknað: lækkaðu skurðinn fyrir loftgrunnmynd þessarar hæðar. Loftgrunnmyndir fara á eigin blöð eins og grunnmyndir; teikningasettið bætir þeim ekki við sjálft.

## Búa til stækkun

Stækkun sýnir hluta grunnmyndar stærri, í eigin mælikvarða, sem sýn út af fyrir sig: eldhús, stiga, veggjahorn.

1. Sýndu grunnmyndina, loftgrunnmyndina eða stækkunina sem hún tilheyrir.
2. Veldu {{ui:Annotate}} › {{ui:Callout}} á stiku grunnmyndarinnar (eða {{ui:New callout}} í vafranum), smelltu síðan á eitt horn svæðisins og gagnstætt horn. {{key:Esc}} stöðvar.
3. Stækkunin er gerð í 1:20 (1/2" = 1'-0" í fetum og tommum). Rétthyrningur hennar og kringlótt merki eru teiknuð á grunnmyndina.
4. Smelltu á merkið með {{ui:Select}}, eða stækkunina í vafranum, til að opna hana: grunnmyndin sýnir aðeins það svæði, í mælikvarða stækkunarinnar. Stikan segir {{ui:Callout:}} og heiti hennar; {{ui:Up}} fer aftur í sýnina sem hún er teiknuð á.
5. Rennihnappurinn við hana (í vafranum eða á stikunni) endurnefnir hana, breytir mælikvarða hennar, teiknar rétthyrninginn aftur eða eyðir henni.

Stækkun sýnir það sem sýn hennar sýnir: sama skurð, sömu flokka, loft loftgrunnmyndar. Stækkun í stækkun virkar eins. Settu stækkun á blað eins og grunnmynd; merkið segir þá hvar hún er (`1 / A-501`: fyrsta sýnin á blaði A-501). {{ui:Print}} í stækkun prentar aðeins það svæði í mælikvarða sínum.

Eyðing stækkunar eyðir líka stækkununum sem eru teiknaðar inni í henni, og línunum og skyggingunum sem eru teiknaðar í þeim (spurt er fyrst). Ef hæðin sem stækkun er teiknuð á er eydd, er stækkunin áfram undir **Vantar** þar til þú eyðir henni, og blöðin sem hún er á tilkynna hana sem vantandi.

## Teikna línur og skyggingar í einni sýn

Teiknun er 2D-vinna sem tilheyrir einni sýn aðeins: athugasemdir í línum, skyggt svæði af steinsteypu eða jarðvegi, heil fylling. Hún er aldrei í þrívíddarsýninni og aldrei í annarri grunnmynd.

1. Sýndu grunnmyndina, loftgrunnmyndina eða stækkunina sem þú teiknar í.
2. Veldu úr {{ui:Annotate}} á stiku grunnmyndarinnar:
   - {{ui:Line}}: smelltu þar sem hún byrjar og þar sem hún endar. Næsta lína byrjar þar sem síðasta endaði; {{key:Enter}} byrjar upp á nýtt.
   - {{ui:Polyline}}: smelltu á punkta hennar; {{key:Enter}} eða tvísmellur lýkur henni, smellur á fyrsta punktinn lokar henni.
   - {{ui:Rectangle}}: tvö gagnstæð horn.
   - {{ui:Hatch region}}: veldu **Mynstur** (Heil, Skálínur, Krosskygging, Steinsteypa, Einangrun, Jörð) og mælikvarða þess á stikunni, smelltu síðan á hornin; {{key:Enter}}, tvísmellur eða smellur á fyrsta hornið lokar því. Með {{ui:Fill a room}} hakað, skyggir einn smellur í rými útlínu þess.
3. Punktar smella eins og veggir; {{key:Shift}} heldur línu réttri, og þú getur skrifað lengd eins og fyrir veggi. {{key:Backspace}} tekur síðasta punktinn til baka.

Veldu línu eða skyggingu með {{ui:Select}} á grunnmyndinni. Eiginleikar breytir mynstri og mælikvarða skyggingar og hefur {{ui:Move…}} (smelltu á punktinn sem á að færa frá, og síðan hvert hann fer). {{key:Delete}} eyðir henni. Hver lína, skygging og breyting er eitt skref.

Línur og skyggingar prentast með grunnmyndinni, fara á blöðin með henni og eru í teikningasettinu. Afmerktu **Merkingar** í sýnisviði til að sleppa þeim úr þeirri sýn.

## Geyma stillingar í sniðmáti

1. Smelltu á {{ui:New template}} í vafranum, eða {{ui:Save as a template…}} í sýnisviði grunnmyndar (sú grunnmynd notar þá sniðmátið).
2. Gefðu því heiti, stilltu hæðirnar og flokkana, og smelltu á {{ui:Save the template}}.
3. Í sýnisviði hvaða grunnmyndar sem er velurðu sniðmátið. Grunnmyndin tekur hæðir þess og flokka; breyttu sniðmátinu til að breyta hverri grunnmynd sem notar það. Frumefni sem þú faldir eitt og eitt haldast falin á eigin grunnmynd.
4. Smelltu á sniðmát í vafranum til að breyta, endurnefna eða eyða því. Ef þú eyðir því fá grunnmyndirnar sem nota það stillingar þess sem sínar eigin.

## Raða eigin blaði

1. Smelltu á {{ui:New sheet}}. Skrifaðu númer þess og heiti og veldu pappírinn.
2. Smelltu á {{ui:Add}} við grunnmynd, loftgrunnmynd, stækkun, útlit, snið eða lista. Hún lendir í miðju blaðsins.
3. Dragðu hana þangað sem hún á að fara. Þegar hún er valin velurðu **Mælikvarða**, eða skilur hana eftir í mælikvarða grunnmyndarinnar (þegar hún hefur einn), annars þann mælikvarða sem passar þriðjungi blaðsins. {{ui:Take off the sheet}} fjarlægir hana.
4. Smelltu á {{ui:Save the sheet}}. Það er skráð undir **Blöð**; smelltu á það til að breyta því síðar.
5. {{ui:Download as PDF}} vistar blaðið sem eina síðu.

## Það sem þú sérð

- Grunnmyndir skornar í hæðum þínum, með því sem er fyrir ofan skurðinn strikað og því sem þú afmerktir sleppt.
- Grunnmynd klippt, huld utan svæðis síns á skjánum og skorin að því á pappír, í mælikvarðanum sem þú gafst henni.
- Loftgrunnmynd með grindum loftanna og hæðarmerkjum, og ljósin í loftinu.
- Stækkanir með rétthyrningi og merki á grunnmyndinni, hver opnast í eigin mælikvarða.
- Línur og skyggingar aðeins í sýninni sem þú teiknaðir þær í.
- Blöðin þín teiknuð aftur úr líkaninu í hvert skipti sem þú opnar þau, svo þau passa alltaf við það. Sýn sem hæðin eða skurðarlínan var eydd úr er tilkynnt, ekki teiknuð.
- Sérhver breyting hér er eitt skref: {{key:Mod+Z}} tekur hana til baka.

:::note
Allt þetta er geymt í IFC-skránni sem eiginleikasöfn sem önnur forrit láta í friði: sýnisvið hverrar hæðar og loftgrunnmynd á hæðinni, sniðmátin, stækkanir og blöðin þín á verkefninu. Línur og skyggingar eru IFC-merkingar í sinni hæð, svo önnur forrit sjá þær sem 2D-feril og skyggð svæði (eigin teikning hvers mynsturs), þó ekki hvaða sýn þær tilheyra.
:::

:::tip
Önnur BIM-forrit kalla skurðinn sýnisvið eða skurðarflöt, sniðmát sýnir sniðmát sýna, teiknilínur nákvæmnislínur og skyggð svæði fylltir flötir. Hugmyndirnar eru þær sömu; sýnistillingarnar berast ekki yfir til þeirra.
:::
