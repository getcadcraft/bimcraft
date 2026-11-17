---
title: Mabomba na mifereji
summary: Chora njia za mabomba na mifereji kwenye mpango kwa mistari yake ya katikati; viwiko, tii, vipunguzi na mabadiliko vinatengenezwa kwa ajili yako, njia ni za mifumo yenye bandari zilizounganishwa kwenye faili la IFC, na zinaonekana kwenye mipango, majedwali na ukadiriaji wa kiasi.
keywords: bomba, mabomba, mabomba ya maji, mfereji, mifereji, mifereji ya hewa, hvac, mep, mekanika, kiwiko, tii, kipunguzi, mabadiliko, kiungio, viungio, vali, valves, vali ya lango, vali ya mpira, vali ya globe, vali ya ukaguzi, wima, mteremko, bomba la kutolea maji, usafi, dhoruba, mtiririko wa hewa, maji baridi, maji ya moto, maji yaliyopozwa, kupasha joto, gesi, ulinzi wa moto, hewa ya usambazaji, hewa ya kurudi, moshi, mfumo, mifumo, bandari, viunganishi, kifaa, vifaa, kifaa cha bomba, beseni, sinki, choo, beseni la kunawa, sinki la jikoni, bafu, beseni la kufulia, vitengo vya kifaa, uhc, dfu, kupima mifereji, ukubwa wa mifereji, mfereji wa jengo, tawi, ramal, coletor, mtiririko wa hewa, cfm, msuguano, msuguano sawa, ukubwa, jedwali, ukadiriaji wa kiasi, nbr, nbr 5648, nbr 5688, nbr 8160, pvc soldável, esgoto, dn
from: 85140bc5
---

## Utakachofanya

Chora mabomba na mifereji ya jengo kama unavyochora kuta: bofya pembe za mstari wa katikati wa njia kwenye urefu uliouweka. BimCraft inatengeneza viungio, inaweka kila sehemu kwenye mfumo wake na kuiunganisha, ili programu nyingine zisome njia kama mfumo mmoja uliounganishwa.

## Chora bomba

1. Washa {{ui:Draw}}, fungua {{ui:Build}} na uchague {{ui:Pipe}}.
2. Kwenye upau, chagua **mfumo** (maji baridi, maji ya moto, mfereji wa usafi, gesi…). Unaweka nyenzo ya kawaida: shaba kwa maji, PVC kwa mifereji na matundu ya hewa, chuma kwa kupasha joto, maji yaliyopozwa, gesi na ulinzi wa moto. Badilisha **material**, **class** na **size** ukihitaji. Ukubwa na kuta vinatoka kwenye viwango vya umma: bomba la chuma ASME B36.10M, shaba ASTM B88, PVC ASTM D1785 na PEX ASTM F876. Miradi ya Brazil inaweza kutumia **PVC water pipe (NBR 5648)**, PVC ya kuunganisha kwa kiyeyusho kwa maji baridi, na **PVC drain pipe (NBR 5688)**, série normal au reforçada, kwa mifereji na matundu ya hewa: ukubwa wake unataja DN (DN 25, DN 100). Ukishachagua mojawapo, kuchagua mfumo mwingine kunaendelea na mabomba ya Brazil (PVC drain pipe kwa mfereji wa usafi baada ya PVC water pipe).
3. Weka **At**: urefu wa mstari wa katikati wa bomba juu ya kiwango.
4. Bofya mahali bomba linapoanzia, kisha kila kona. Bofya mara mbili, au bonyeza {{key:Enter}}, kwenye nukta ya mwisho. {{key:Backspace}} huondoa kona ya mwisho; {{key:Esc}} hutupa njia.

Bomba hujikita kama kuta zinavyojikita, na kwa njia nyingine: anza kwenye ncha ya bomba ili uendelee kutoka hapo, au maliza kwenye mstari wa bomba ili utoe tawi. Njia mpya inachukua urefu wa bomba inalojikita nalo.

Njia inayoanza au kuishia kwenye bandari ya kifaa inachukua ukubwa wake na mfumo wake na inabaki imeshikamana nayo: ona [Vifaa vya MEP vyenye bandari](topic:mep-equipment) na [Unganisha mabomba na mifereji kwenye vifaa](topic:mep-connections).

## Weka kiwango cha mabomba cha mradi

Orodha ya kwanza kwenye upau wa bomba ni **kiwango cha mabomba** cha modeli: **US (IPC, inches)** au **Brazil (ABNT, DN)**. Huhifadhiwa kwenye modeli, kwa hivyo kila anayefungua faili anaanza njia kwa njia ile ile. Chini ya **US**, njia mpya huanza kwa shaba (maji) au PVC Schedule 40 (mifereji), kwa inchi, na mteremko wa International Plumbing Code. Chini ya **Brazil**, maji baridi huanza kama PVC soldável DN 25, mifereji ya usafi na ya dhoruba na matundu ya hewa kama PVC esgoto DN 100 kwa mteremko wa NBR 8160, na maji ya moto kwa shaba. Pia hutumika kwa njia inayoanza kwenye kiunganishi cha kifaa au bandari ya kifaa. Mabomba yaliyokwisha kuchorwa yanabaki na nyenzo zao na majedwali yao wenyewe; orodha ya nyenzo inabaki wazi, kwa hivyo bado unaweza kuchora njia moja ya Brazil kwenye modeli ya US kwa makusudi. Faili lisilo na chaguo hufanya kama awali: njia mpya inafuata nyenzo inayotumika.

## Chora duct

1. Chagua {{ui:Duct}}. Chagua mfumo (usambazaji, kurudi, moshi au hewa ya nje) na umbo: duara, mstatili au oval bapa.
2. Andika upana na urefu (upana wa duct ya duara ni kipenyo chake), na **At** kwa urefu wa mstari wa katikati.
3. Ili kulipimia ukubwa kutoka mtiririko wa hewa, andika **Airflow** na kiwango cha **Friction** kisha ubofye {{ui:Size it}}. Duct inapimwa kwa msuguano sawa, mbinu ya sura ya muundo wa mifereji katika ASHRAE Handbook, na inazungushwa juu hadi ukubwa wa kawaida, ili msuguano uwe chini au sawa na kiwango ulichoandika. Bila kiwango, hutumia 0.08 in. ya maji kwa futi 100 (0.8 Pa/m). Duct ya mstatili inabaki na urefu uliouandika na inapata upana; BimCraft inasema hivyo pale pande zake zinapozidi uwiano wa 4 kwa 1.
4. Bofya pembe kama kwa bomba.

## Vifaa vya bomba

{{ui:Build}} › {{ui:Place family}} inatoa vifaa vitano vya kuanzia, kila kimoja na kiunganishi cha mfereji na cha maji baridi: **Water closet**, **Lavatory**, **Kitchen sink**, **Shower tray** na **Laundry tub**. Mbele yake inakuelekea unapokiweka na nyuma yake inagusa ukuta. Mifereji yao iko kwenye ukubwa mdogo zaidi wa mfereji wa kifaa wa NBR 8160 (DN 100 kwa choo, DN 50 kwa sinki la jikoni, DN 40 kwa vingine); maji ni DN 20. Badilisha ukubwa wao, au uyahariri, kama familia yoyote: ona [Familia na ukubwa wake](topic:families).

Familia inasema ni kifaa gani chini ya {{ui:Plumbing fixture}} kwenye kichupo cha {{ui:Connectors}} cha mhariri wa familia. Mfereji wake kisha unahesabiwa kwa vitengo vya kifaa: 6 UHC kwa choo, 1 kwa lavatory, 3 kwa sinki la jikoni au tub ya kufulia, 2 kwa bafu (NBR 8160), au vitengo vya kifaa vya mifereji vya Jedwali la IPC 709.1.

## Kutoka kwenye kiunganishi cha kifaa

Vipengele vilivyowekwa kutoka kwenye familia yenye viunganishi (mfereji na bomba la beseni, shingo ya kipokea hewa: ona [Hariri familia](topic:family-editor)) vinaonyesha viunganishi vyake huru kama nukta wakati {{ui:Pipe}} au {{ui:Duct}} imewashwa, na kielekezi kinajikita kwake.

- **Anza kwenye kiunganishi**: njia inachukua mfumo na ukubwa wake (bomba la nyenzo ya upau lililo sawa au kubwa kidogo kuliko ukubwa wa kiunganishi; duct ya duara yenye kipenyo chake). Kiunganishi kinapoelekea chini au juu, kama mfereji chini ya beseni, njia kwanza inashuka au kupanda moja kwa moja hadi urefu wa **At**, kisha inaendelea kwa mibofyo yako.
- **Maliza kwenye kiunganishi**: njia inashuka au kupanda hadi kwake na inaishia hapo.

Njia imeunganishwa na kipengele kwenye faili la IFC, kwa hivyo programu nyingine huona kifaa kama sehemu ya mfumo wake. Kipengele kilichowekwa baadaye chenye kiunganishi kwenye ncha ya njia nacho pia kinaunganishwa nayo. Njia iliyohamishwa mbali na kiunganishi haijaunganishwa nacho tena.

## Viungio, vilivyotengenezwa kwa ajili yako

| Mahali | BimCraft inatengeneza nini |
|---|---|
| Njia inageuka | Kiwiko. Bomba la chuma kwa radius ndefu ya ASME B16.9 (mara 1.5 ya ukubwa), bomba lingine kwa kipenyo kimoja cha nje, duct ya duara kwa mara 1.5 ya kipenyo, duct ya mstatili kwa upana mmoja (au urefu mmoja kwa kugeuka juu au chini) |
| Njia inaishia kwenye mstari wa njia nyingine | Tii; njia nyingine inagawanywa hapo |
| Njia mbili zinakutana ncha kwa ncha zikiwa na ukubwa tofauti | Kipunguzi (kwa mabomba) au mabadiliko (kwa mifereji) |
| Njia mbili za ukubwa mmoja zinakutana ncha kwa ncha kwa pembe | Kiwiko |

Unapobadilisha, kusogeza au kufuta njia, kila kiungio kwenye ngazi hiyo kinatengenezwa upya. Mguu ukiwa mfupi mno kwa viungio vya ncha zake, BimCraft inasema hivyo na haibadilishi chochote: sogeza kona mbali zaidi.

:::note
Viungio na vali ni za jumla: zinachorwa kutoka ukubwa wa bomba au duct, si kutoka katalogi ya mtengenezaji. Viungio vya soketi, vya kubonyeza na vya mikunjo, miili ya vali na vifaa vina ukubwa wa watengenezaji wenyewe; vikague na msambazaji wako kabla ya kuagiza.
:::

## Wima

Wakati wa kuchora, andika urefu mpya kwenye **At** na ubonyeze {{key:Enter}}: njia inapanda au kushuka moja kwa moja kwenye kona ya mwisho, pamoja na kiwiko kwenye kila ncha. Wima inaweza kupanda hadi ngazi iliyo juu. Kila ngazi inaonyesha sehemu za njia ambazo safu yake ya kutazama inafikia, pamoja na **UP** au **DN** kwenye wima.

## Mifereji ya kutolea maji na mteremko wake

Mifereji ya usafi na ya dhoruba huanza kwa mteremko mdogo zaidi unaoruhusiwa na International Plumbing Code kwa ukubwa wake: inchi 1/4 kwa futi hadi inchi 2-1/2, inchi 1/8 kwa futi kuanzia inchi 3 hadi 6, inchi 1/16 kwa futi kuanzia inchi 8. Mfereji wa PVC wa Brazil huanza kwa mteremko wa NBR 8160: 2 % hadi DN 75, 1 % kuanzia DN 100. Andika mteremko mwingine kwenye upau au kwenye Sifa: `1/4"/ft`, `2 %` au `1:50`. Njia inashuka kutoka nukta yake ya kwanza, kwa hivyo chora mifereji kwa mwelekeo wa mtiririko wake. Mpango unaonyesha kushuka na mshale. Sifa inaonya mfereji unapokuwa tambarare kuliko kiwango cha chini cha kanuni.

## Pima mifereji kwa vitengo vya kifaa

Chagua mfereji wa usafi: **Fixture units** kwenye Sifa inasema unabeba vitengo vingapi na ukubwa mdogo zaidi unaohitaji. Kila kifaa cha bomba ambacho kiunganishi chake cha mfereji kiko kwenye njia kinahesabiwa, na kila mfereji unaomiminika ndani yake pia: chora mifereji kwa mwelekeo wa mtiririko wake, kila moja ikiishia kwenye mfereji unaomiminika ndani yake.

- Mifereji ya PVC ya Brazil inahesabu **UHC** na inafuata NBR 8160; zingine zinahesabu **DFU** na zinafuata International Plumbing Code.
- **Drain**: **Branch** hupimwa kwa jedwali la kanuni la matawi ya vifaa; **Building drain** kwa jedwali lake kulingana na mteremko, kwa hiyo **Slope** ina umuhimu.
- Mfereji haupungui kamwe kuliko mifereji ya vifaa unavyohudumia (choo kinahitaji DN 100, au inchi 3), wala kuliko mfereji unaomiminika ndani yake. Chini ya NBR 8160 mfereji wa jengo ni DN 100 angalau.

{{ui:Size the drains}} inafanya kila mfereji wa usafi wa modeli ulio mdogo mno kwa vitengo vyake vya kifaa kuwa ukubwa unaohitaji, kama hatua moja unayoweza kutendua. Mfereji ulio mkubwa kuliko unavyohitaji unabaki jinsi ulivyo. Mfereji unapobeba zaidi ya kile ukubwa mkubwa zaidi wa bomba lake unaweza kubeba kwa mteremko wake, BimCraft inasema hivyo: mpe mteremko mkali zaidi au bomba jingine.

:::note
Majedwali ni ya mifereji ya mlalo. Mabomba wima, matundu ya hewa na mifereji ya dhoruba hayapimwi hapa: yakague, pamoja na muundo mzima, dhidi ya kanuni inayotumika kwenye mradi.
:::

## Vali

1. Chagua {{ui:Valve}} na aina: lango, mpira, globe au ukaguzi.
2. Bofya kwenye bomba inapokwenda. Bomba linakatwa kuizunguka na vali imeunganishwa pande zote mbili.

Sifa za njia zinaorodhesha vali zake, kila moja na {{ui:Remove}}.

Aina zaidi za vali, chujio, vidhibiti vya hewa kwenye mifereji, vipimo vyako vya mabomba na familia za watengenezaji: ona [Vipimo vya mabomba, vali, vidhibiti vya hewa na familia za watengenezaji](topic:pipe-specs).

## Badilisha njia

Chagua sehemu yoyote ya njia, kwenye mpango au mwonekano wa 3D. Kwenye Sifa:

- **System**, **Material**, **Class** na **Size** (mabomba), au **Shape**, **Width**, **Height** (mifereji).
- **Height above the level** inasogeza njia nzima juu au chini.
- **Insulation**: unene wake, unaohifadhiwa kwa ukaguzi wa nafasi na orodha ya fursa (hakuna kinachochorwa kwa ajili yake): ona [Kagua mabomba na mifereji dhidi ya muundo](topic:mep-against-structure).
- Bomba la chuma: **Cut into spools**: ona [Spuli za mabomba ya chuma na karatasi za spuli](topic:pipe-spools).
- **Slope** (mabomba).
- **Flow** kwa {{ui:Size it}}: kwa maji, ukubwa mdogo zaidi unaoweka maji kwa futi 8 kwa sekunde (2.4 m/s), au futi 5 kwa sekunde (1.5 m/s) kwa maji ya moto; kwa 3 m/s kwa bomba la PVC la maji la Brazil (NBR 5626). Kwa mifereji, kasi na kiwango cha msuguano wa duct kama ilivyochorwa. Mifereji ya usafi hupimwa kwa vitengo vyake vya kifaa badala yake: ona **Size the drains by fixture units** hapa chini.

Kila mabadiliko ni hatua moja ya {{ui:Undo}}. {{key:Delete}} huondoa njia nzima.

## Mipango

- Mabomba madogo kuliko 150 mm (takriban inchi 6) yanachorwa kama mstari mmoja kwenye mstari wake wa katikati; mabomba makubwa zaidi na mifereji yote yanachorwa kama mistari miwili kwa upana wake.
- Kila mfumo una rangi yake; PDF ya mpango inaichapisha kwa nyeusi.
- Kila njia imeandikwa ukubwa wake na mfumo wake (kwa mfano `2" CW` au `16×10 SA`).
- Safu ya kutazama ya mpango huamua njia zipi unazoonyesha, na {{ui:Shown in this plan}} inaweza kuacha **Pipes** au **Ducts** nje: ona [Mionekano, safu za kutazama na karatasi zako mwenyewe](topic:views-and-sheets).

## Majedwali na ukadiriaji wa kiasi

Paneli ya {{ui:Schedules}} inaongeza **Pipes** (kwa mfumo, nyenzo na ukubwa, pamoja na urefu wake), **Ducts** (kwa mfumo, umbo na ukubwa, pamoja na urefu na eneo la uso wa nje) na **Fittings and valves** (kwa aina na ukubwa, zikihesabiwa). Bofya safu kuchagua kile inachoorodhesha; {{ui:Download CSV}} inapakua jedwali.

{{ui:Takeoff}} inapeleka njia kwa TakeoffCraft: bomba na duct kwa ukubwa kama njia zilizochorwa kwenye mpango (mifereji ya mteremko hupimwa kando ya mteremko wake), viungio na vali vinahesabiwa pale vilipo: ona [Tuma wingi wa modeli kwa TakeoffCraft](topic:takeoff). Wima hazijumuishwi kwenye karatasi hiyo, kwa sababu mpango hauwezi kuzipima; jedwali la Pipes lina urefu wake.

## Kwenye faili la IFC

Kila njia ni kusanyiko linaloshikilia sehemu zake: sehemu za bomba na duct, viungio na vali, kila moja na aina yake, nyenzo, rangi ya mfumo wake na bandari zake. Bandari zinazogusana zimeunganishwa, na kila sehemu ni ya mfumo wake wa usambazaji (faili za IFC2X3 hupata sawa kama sehemu za mtiririko, viungio na vidhibiti kwenye mfumo). Programu nyingine zinazosoma mifumo ya IFC huona njia moja iliyounganishwa kwa kila mfumo. Ufafanuzi wa njia yenyewe unahifadhiwa nayo, kwa hivyo BimCraft inaitengeneza tena kwa njia ile ile unapoibadilisha.
