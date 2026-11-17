---
title: Fjölskyldur og stærðir þeirra
summary: Hurðir, gluggar og húsgögn koma í fjölskyldum. Hver stærð fjölskyldu er ein gerð í IFC-skránni, svo gerðalistinn helst stuttur í BimCraft meðan önnur forrit lesa venjulegar gerðir.
keywords: fjölskylda, fjölskyldur, gerð, gerðir, stærð, stærðir, hurðargerð, gluggagerð, húsgögn, borð, hilla, skápur, ný stærð, afrit, setja fjölskyldu, fjölskylduskrá, ccfamily, IFC-bókasafn, verkefnasafn, hópur, sýnileiki, IfcDoorType, IfcWindowType, IfcGroup
from: 77caac48
---

## Hvað fjölskylda er

Fjölskylda er ein tegund hlutar í nokkrum stærðum: einföld sveifluhurð sem kemur 32, 36 og 42 tommur á breidd, eða borð sem kemur langt og stutt. Í BimCraft sérðu fjölskylduna einu sinni, með stærðum sínum undir sér, í stað langs lista yfir gerðir.

IFC hefur engar fjölskyldur. Í skránni er hver stærð venjuleg gerð (hurðargerð, gluggagerð, húsgagnagerð…), og fjölskyldan er hópur sem telur upp stærðir sínar. Önnur BIM-forrit lesa gerðirnar og hópinn eins og þeir eru; BimCraft les fjölskylduna aftur úr þeim.

## Hvar þær finnast

- Hópurinn **Fjölskyldur** í verkefnavafranum telur upp fjölskyldurnar í þessu líkani, með fjölda stærða hverrar og fjölda staðsettra. Fyrir neðan þær eru **Byrjunarfjölskyldur**: hurðirnar og gluggarnir úr hurðar- og gluggaverkfærunum, og borð, hillueining og grunnskápur.
- {{ui:Smíð}} › {{ui:Fjölskyldur…}} sýnir sama lista í glugga.
- Smelltu á fjölskyldu til að opna hana: stærðir hennar, hvert gildi hverrar stærðar, og hve margir hlutir nota hverja.

## Hurðir og gluggar

Hurðar- og gluggaverkfærin sýna fjölskyldur af þeirri gerð, og síðan **stærðalista** við hliðina. Veldu stærð, eða skrifaðu **W** og **H**: breidd og hæð sem engin stærð hefur enn verður að nýrri stærð fjölskyldunnar þegar þú setur hurðina. Hurðir af sömu stærð deila einni gerð.

Í {{ui:Eiginleikar}} sýnir valin hurð eða gluggi **Fjölskyldu** sína og **Stærð**. Veldu aðra stærð af listanum, eða skrifaðu nýja breidd eða hæð. {{ui:Opna fjölskylduna}} opnar fjölskylduna sem hún tilheyrir.

Karmur hverrar hurðar eða glugga fylgir þykkt síns eigin veggjar, eins og áður en fjölskyldur komu til. Gerð stærðarinnar geymir einnig hurðina teiknaða í 140 mm vegg, fyrir forrit sem lesa gerðir.

## Ný stærð úr þessari fjölskyldu

1. Opnaðu fjölskylduna.
2. Undir **Ný stærð úr þessari fjölskyldu** skrifaðu gildi hennar (Width, Height og aðrar breytur fjölskyldunnar) og, ef þú vilt, heiti. Án heitis fær hún heiti út frá gildum sínum.
3. Smelltu á {{ui:Búa til stærðina}}.

Tvær stærðir geta ekki haft sömu gildi. **Endurnefna** breytir heiti stærðar; **Fjarlægja** tekur burt stærð sem enginn notar; **Velja** velur hluti þeirrar stærðar.

## Setja húsgögn

1. {{ui:Smíð}} › {{ui:Setja fjölskyldu}}, eða {{ui:Setja}} í glugga fjölskyldu.
2. Í stikunni veldu fjölskylduna og stærð hennar.
3. Smelltu á grunnmyndina til að setja hana á kótann. Ýttu á {{key:R}} til að snúa henni um 90° áður en þú smellir. {{key:Esc}} hættir.

Í {{ui:Eiginleikar}} staðsetts stykkis sést stærð þess, hvar það er og hversu mikið það er snúið; {{key:Delete}} fjarlægir það. Sérhvert stykki af einni stærð deilir lögun þeirrar stærðar, svo að breyting á fjölskyldunni breytir þeim öllum.

## Stærðir úr töflu

{{ui:Stærðir úr töflu…}} í glugga fjölskyldu les CSV-skrá (komma, semíkomma eða tabúlstafur). Fyrsta línan nefnir dálkana: heiti eða merkimiða breytu, og valfrjálst `Name`. Lengdir eru í millimetrum nema þú skrifir einingu (`1.2 m`, `36 in`), dálkar Já / Nei taka við yes, no, true, false, 1 eða 0, og breyta án dálks heldur sjálfgefna gildinu sínu. Sérhver lína verður stærð, í einu skrefi sem þú getur afturkallað; stærð sem er þegar til er sleppt. Ein lína sem er ekki læsileg, eða sem fjölskyldan getur ekki teiknað, hafnar allri töflunni og nefnir línu sína. Mest 200 línur og 1 MB. {{ui:Vista stærðirnar sem töflu}} skrifar sömu töflu út aftur.

## Stillt á hvern hlut

Breyta merkt **Á hvern hlut** í ritlinum (Já / Nei sem bætir við milliglugga, merkimiða eða efni) er ekki hluti af stærð: tvær hurðir af einni stærð geta verið ólíkar. Veldu hlutinn og **Eiginleikar** sýna þessar breytur; breyttu einni og hluturinn er teiknaður aftur með sína eigin lögun (húsgögn og búnaður fá eigin lögun, hurðir og gluggar eru búnir til aftur í veggjum sínum). Stilltu þær allar aftur á sjálfgefin gildi og hann fer aftur í lögun stærðar sinnar.

## Smáatriðastig

{{ui:Smíð}} › {{ui:Fjölskyldur…}} › **Smáatriðastig** ákvarðar, fyrir allar fjölskyldur í líkaninu, hvað er vistað í búkunum og teiknað í grunnmyndartáknunum: **Fínt** heldur öllu, **Miðlungs** og **Gróft** sleppa hlutum sem ritillinn merkir sem fínni (minni skrár, hraðari myndir). **Sjálfvirkt** vistar allt og lætur sýn blaðsins velja eftir mælikvarða þess: 1:50 og stærri fínt, 1:100 miðlungs, 1:200 og minni gróft. Eitt skref sem þú getur afturkallað.

## Tvöfalda fjölskyldu

Þú þarft ekki að byrja frá engu. {{ui:Tvöfalda}} afritar fjölskyldu með breytum hennar, búkum og stærðum undir nýju heiti. Breyttu afritinu í ritlinum; upprunalega helst eins og hún var.

## Fjölskylduskrár

- {{ui:Vista fjölskylduskrána}} vistar `.ccfamily.json`: breytur fjölskyldunnar, búka og stærðir. Opnaðu hana í öðru líkani með {{ui:Opna fjölskylduskrá…}} í hópnum **Fjölskyldur**.
- {{ui:Vista sem IFC}} vistar fjölskylduna sem litla IFC-skrá: gerðir stærða hennar og hópinn hennar, skráð af IFC-verkefnasafni. Önnur forrit opna hana sem safn gerða; BimCraft opnar hana aftur sem fjölskyldu.

Fjölskylduskrá sem er opnuð hér er lesin sem gögn og yfirfarin áður en nokkuð er skrifað. Fjölskylda sem lykill er þegar í líkaninu kemur inn sem sérstök fjölskylda. Fjölskylda sem geymir aðrar (sjá „Fjölskyldur inni í“ í hjálp ritilsins) kemur með þeim: skráin telur þær upp, og líkanið heldur þeim sem það á nú þegar.

## Fjölskyldur í safninu

Opnaðu {{ui:Fjölskyldur…}} og veldu {{ui:Úr safni…}} til að sjá fjölskyldur sem hafa verið deildar í safninu. {{ui:Bæta í þetta verkefni}} les eina þeirra eins og fjölskylduskrá: BimCraft yfirfer alla reiti áður en það býr nokkuð til, fjölskyldan kemur inn sem sjálfstæð fjölskylda og opnast í ritlinum. Að bæta henni við er eitt afturköllunarskref. Til að deila þinni eigin notarðu {{ui:Vista allt sem safn}} og sendir skrána í safnið (starfsfólk safnsins birtir fjölskylduskrá með skipun, og sérhver fjölskylda er sitt eigið atriði með stærðum sínum). Ef ekki næst í safnið segir listinn það og ekkert breytist.

## Gerðir frá öðrum forritum

Gerðir sem önnur forrit búa til birtast líka í hópnum **Fjölskyldur**, flokkaðar eftir ágiskun: eftir hluta heita hluta þeirra fyrir fyrsta tvípunktinn, annars eftir gerðaheitum sem eru aðeins ólík í tölustöfunum. Glugginn fyrir fjölskylduna segir hvaða ágiskun var notuð. Þær eru taldar upp og þú getur valið hluti þeirra, en þær eru ekki breyttar hér: þær hafa enga fjölskylduuppskrift.

:::note
Byrjunarhurðirnar og -gluggarnir eru teiknaðir nákvæmlega eins og áður en fjölskyldur komu. Skrár sem voru gerðar áður en fjölskyldur komu opnast óbreyttar: hurðir þeirra og gluggar birtast undir sinni fjölskyldu með stærðunum sem í notkun eru, og færast á eigin stærð í fyrsta skipti sem þú breytir þeim.
:::

Sjá einnig [Breyta fjölskyldu](topic:family-editor) og [Hurðir og gluggar](topic:doors-and-windows).
