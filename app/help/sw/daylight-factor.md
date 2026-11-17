---
title: Kadiria mwanga wa mchana katika kila chumba
summary: Kipengele cha wastani cha mwanga wa mchana cha kila chumba kutokana na madirisha yake, nyuso zake za ndani na anga ambalo kila dirisha linaona, huku pembe ya anga ikipimwa kwenye modeli. Ni kadirio la awali la usanifu, si uigaji wala ukaguzi wa kanuni.
keywords: mwanga wa mchana, kipengele cha mwanga wa mchana, wastani wa kipengele cha mwanga wa mchana, adf, sehemu wima ya anga, vsc, faida ya jua, jua, thamani g, gridi, mtiririko uliogawanywa, sehemu ya anga, sehemu inayoakisiwa ndani, mwanga wa asili, dirisha, uwekaji wa vioo, pembe ya anga, kizuizi, kivuli, varanda, ukingo wa paa, uakisi, upitishaji, usanifu wa awali, uchambuzi, vyumba, nafasi
from: 5f300a78
---

Kichupo cha {{ui:Mwanga wa mchana}} katika paneli ya kulia hukokotoa **wastani wa kipengele cha mwanga wa mchana** wa kila chumba: ni kiasi gani cha mwanga wa anga lenye mawingu nje kinachofika chumbani, kwa wastani, kama asilimia. Kinasoma vyumba (nafasi) na madirisha ya modeli ya IFC iliyofunguliwa. Hakuna kinachobadilishwa kwenye modeli na hakuna kinachopakiwa.

:::warning
Kila kitu katika kichupo hiki ni **zana ya usanifu, si hesabu ya kufuata kanuni**: makadirio ya awali kwa mbinu zilizochapishwa, **si uigaji** na **si ukaguzi dhidi ya kanuni ya ujenzi au kiwango**. BS EN 17037, LEED, BREEAM na kanuni za nishati zinataka uigaji wa mwanga wa mchana kwa kutumia hali ya hewa ya mahali; tumia programu ya uigaji wa mwanga wa mchana kwa hizo.
:::

## Kokotoa

1. Fungua modeli ya IFC yenye vyumba (nafasi) na madirisha. Modeli zilizochorwa hapa zina chumba ndani ya kila seti iliyofungwa ya kuta.
2. Fungua kichupo cha {{ui:Mwanga wa mchana}} kisha ubofye {{ui:Kokotoa}}.
3. Kila chumba kinaonyesha kipengele chake cha mwanga wa mchana na bendi: chini ya 2 %, 2–5 %, 5 % au zaidi. Bofya chumba kuona nyuso zake na eneo la kila dirisha pamoja na pembe yake ya anga; chumba na madirisha yake huchaguliwa kwenye modeli.

Badilisha ingizo na namba zitafuata mara moja; baada ya kubadilisha modeli, {{ui:Kokotoa tena}}. {{ui:CSV}} huhifadhi kila chumba pamoja na namba zake na ingizo zilizotumika.

## Fomula

Wastani wa kipengele cha mwanga wa mchana (%) = T × Ag × θ × M ÷ (A × (1 − R²)), uliojumlishwa kwenye madirisha ya chumba (fomula ya Littlefair, inayotumiwa na BRE 209, BS 8206-2 na CIBSE LG10):

- **T**, upitishaji wa mwanga wa kioo (0.7 kuanzia: tumia thamani ya mtengenezaji).
- **Ag**, eneo la kioo: eneo la kila dirisha (upana wote × kimo, la sivyo ukubwa wake kwenye modeli) × **sehemu ya kioo** (0.75 kuanzia: iliyobaki ni fremu).
- **θ**, pembe ya anga ambalo dirisha linaona, kwa digrii (hapa chini).
- **M**, kipengele cha matengenezo kwa uchafu kwenye kioo (1 kuanzia).
- **A**, kila uso wa ndani wa chumba: sakafu, kuta, dari na madirisha, vilivyochukuliwa kutoka umbo la chumba chenyewe.
- **R**, wastani wa uakisi wao, kwa uzito wa eneo: sakafu 0.2, kuta 0.5, dari 0.7 kuanzia; kioo kinahesabiwa kama 0.1.

## Jinsi pembe ya anga inavyopimwa

Kwa kila dirisha BimCraft hukata modeli kwa ndege wima ya mraba kwa dirisha, kuanzia uso wa nje wa kioo, kisha huangalia kutoka upeo wa macho moja kwa moja juu: kila kitu ambacho kata inakutana nacho mbele ya dirisha (jengo lililo kinyume, varanda au ukingo wa paa juu yake, au kingo za paa) huficha sehemu ya digrii 90 hizo. θ ni kilichobaki. Dirisha lenyewe na ukuta unaolishikilia hayahesabiwi. Hufanya hivyo katika sehemu tano kwenye upana wa dirisha na kuchukua wastani, kwa hiyo nguzo nyembamba mbele ya katikati huchukua sehemu yake, si anga lote.

Jengo lililo mita 8.5 juu ya katikati ya dirisha na mita 9.9 mbali linaficha 40.65° (pembe ambayo tanjenti yake ni 8.5 ÷ 9.9), na kuacha θ = 49.35°.

## Sehemu wima ya anga ya kila dirisha

{{ui:Kokotoa}} pia hupima, kwa kila dirisha, kiasi cha anga zima linaloonekana: kata ile ile wima, ikigeuzwa kwenye kila mwelekeo kuvuka mbele ya dirisha (kila 2°, kutoka upande mmoja hadi mwingine), ili jengo kwa upande mmoja, bawa au tundu refu huchukua sehemu yake. Kutokana na hayo BimCraft huhesabu **sehemu wima ya anga (VSC)**: ni kiasi gani cha mwanga wa anga lenye mawingu kinafika kioo, kama sehemu ya kile paa tambarare wazi lingepata. Dirisha lisilo na chochote mbele yake hupata **39.6 %**, kiwango cha juu kabisa dirisha wima linaloweza kupata; jengo refu linalopanda 25° juu ya dirisha huacha karibu **27 %**, takwimu ambayo miongozo ya Uingereza (BRE 209) hutumia kama kanuni ya kidole gumba. Kila dirisha katika maelezo ya chumba linaonyesha VSC yake na **pembe ya kizuizi** yake (vitu vinapanda juu kiasi gani moja kwa moja mbele yake).

Anga ni anga la kawaida la CIE lenye mawingu, ambalo ni angavu mara tatu moja kwa moja juu kuliko kwenye upeo wa macho, na kata ni sahihi: hakuna kinachopimwa kwa sampuli.

## Jua kupitia madirisha kwa tarehe

Fungua {{ui:Jua kupitia madirisha kwa tarehe}} kisha uchague tarehe. BimCraft hufuata jua siku hiyo kwa robo saa na kujumlisha, kwa kila dirisha, joto ambalo jua linaleta kupitia kioo:

- **jua la moja kwa moja**, linapokuwa mbele ya dirisha na hakuna kitu kwenye modeli kinachoficha (kata ile ile sahihi, ikigeuzwa kuelekea jua: varanda inayoficha jua kali la kiangazi saa sita mchana huruhusu jua dhaifu la msimu wa baridi kuingia);
- **mwanga wa anga** kwenye kioo, ukitoa kile dirisha lisichoweza kuona;
- mwanga **kutoka ardhini** (uakisi wake: 0.2 kuanzia);
- yote kupitia **thamani g** ya kioo (sehemu ya nishati ya jua inayopitisha: 0.6 kuanzia; tumia thamani ya mtengenezaji) na sehemu yake ya kioo.

Kila chumba kinaonyesha jumla ya siku kwa kWh na kilele chake kwa wati pamoja na wakati; maelezo ya chumba huchora siku kama chati. Anga ni safi kwa mujibu wa mfano wa Hottel (Duffie & Beckman, *Solar Engineering of Thermal Processes*), kwa takwimu za kiangazi au msimu wa baridi za mahali na msimu, pamoja na kimo cha eneo; nafasi ya jua ni ya NOAA. Latitudo na longitudo ya eneo hutoka kwenye eneo la IFC, na kaskazini kutoka kaskazini halisi ya modeli; kama modeli haina eneo, andika latitudo na longitudo. Nyakati ni saa za kawaida (bila saa za kiangazi) katika eneo la saa unaloandika, la sivyo ile ambayo longitudo inapendekeza.

Haijumuishi: mawingu (ni siku safi), kioo kuruhusu mwanga mdogo kwenye pembe za chini, fremu zinazoficha kioo, vipofu, na kile kuta na paa vinachukua. Makadirio ya kupoza katika kichupo hicho hutumia kilele.

## Kipengele cha mwanga wa mchana kwenye gridi

Fungua {{ui:Kipengele cha mwanga wa mchana kwenye gridi}} kisha {{ui:Kokotoa gridi}}: BimCraft huweka gridi juu ya sakafu ya kila chumba kwenye kimo cha ndege ya kazi (0.85 m kuanzia), nusu mita ndani kutoka kuta, kisha huhesabu kipengele cha mwanga wa mchana kwenye kila nukta kwa **mbinu ya BRE ya mtiririko uliogawanywa**:

- **sehemu ya anga**: anga lenye mawingu linaloonekana kutoka nukta kupitia tundu la kila dirisha, ukitoa fremu;
- **sehemu inayoakisiwa kutoka nje**: kile nukta inachoona cha majengo ya nje kupitia dirisha, yakiangaza kwa sehemu ya kumi ya anga nyuma yake (badilisha mwangaza wa kizuizi kama yako mepesi au meusi zaidi);
- **sehemu inayoakisiwa ndani**: mwanga unaorudi nyuma ndani ya chumba, kutoka nyuso za chumba na uakisi wake, eneo la madirisha na kiasi kilicho nje yake (fomula ya BRE, ikiwa na upitishaji wa kioo badala ya kioo safi ilichodhania).

Kila chumba kinaonyesha wastani wake, nukta yake ya chini kabisa na kiasi cha eneo kinachopata 2 % au zaidi; maelezo ya chumba huchora mpango wake na kila nukta ikipakwa rangi kwa kipengele chake cha mwanga wa mchana na madirisha kwa nyekundu. Ili kuiweka haraka kwenye kompyuta yoyote, chumba hupata nukta **400** kwa kiwango cha juu: katika chumba kikubwa nafasi hukua ili itoshe (andika nafasi kuchagua yako).

## Haijumuishi

- Madirisha ya paa (kioo kilicholala bapa au kilichoteremka) huorodheshwa lakini hayahesabiwi: fomula hapa ni za madirisha kwenye kuta.
- Madirisha yasiyo na chumba nyuma yake (ukumbi usio na nafasi, kwa mfano) huorodheshwa kando.
- Matundu ya dirisha (tundu hupimwa kwenye uso wa nje), mng'ao, saa za jua na mwanga wa mchana unaotegemea hali ya hewa. Kwa BS EN 17037, LEED au BREEAM tumia programu ya uigaji wa mwanga wa mchana.
- Bendi zinatoka kwenye miongozo ya zamani ya Uingereza (BS 8206-2), zikionyeshwa kama mwongozo tu, kamwe kama kufaulu au kushindwa.
