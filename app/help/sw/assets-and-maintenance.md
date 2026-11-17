---
title: Weka data ya rasilimali na rekodi ya matengenezo kwenye modeli
summary: Tumia modeli ya IFC iliyokabidhiwa kuendesha jengo: mtengenezaji, modeli, nambari ya serial, dhamana na muda wa huduma kwa vifaa na vifaa vilivyowekwa, pamoja na rekodi ya matengenezo yaliyofanyika, yote yakiandikwa kwenye IFC.
keywords: makabidhiano, cheti cha kukamilika, cheti cha matumizi, kama ilivyojengwa, kifurushi cha makabidhiano, rasilimali, rejista ya rasilimali, usimamizi wa kituo, fm, uendeshaji, matengenezo, huduma, dhamana, nambari ya serial, msimbopau, mtengenezaji, modeli, muda wa huduma, cobie, pacha ya kidijitali, imechelewa, inahitajika, agizo la kazi
from: b84ac492
---

Kichupo cha {{ui:Assets}} kwenye paneli ya kulia kinageuza modeli ya IFC iliyo wazi kuwa rekodi ya vifaa vya jengo. Kila kitu kinaandikwa kwenye IFC yenyewe, katika seti za sifa na kazi za IFC, kwa hiyo programu inayofuata itakayofungua faili itaisoma pia. Hakuna kinachopakiwa na hakuna seva inayohitajika: hifadhi IFC ili kuihifadhi.

## Kinachoorodheshwa

- Vifaa na vifaa vilivyowekwa: samani, vifaa vya usafi, vifaa vya taa, vifaa vya nyumbani, vituo vya hewa, vali, pampu, feni, boilers, matangi, sehemu za umeme, swichibodi, lifti na vipengele vingine vya aina hiyo, pamoja na vitu vya maktaba vyenye data ya vifaa.
- Kipengele kingine chochote unachokifuatilia: kichague kwenye modeli (mlango, ukuta, pampu iliyochorwa kama kitu cha kawaida) kisha bofya {{ui:Track picked}}.
- Chochote chenye data ya rasilimali au kazi ya matengenezo tayari, kilichoandikwa hapa au na programu nyingine.

Yaliyochelewa yanakuja kwanza, kisha yale yanayohitajika ndani ya siku 30. Chuja kwa jina, lebo, mtengenezaji, modeli au nambari ya serial, kwa kiwango, au weka alama {{ui:Only overdue or due within 30 days}}.

## Data ya rasilimali

Bofya rasilimali kwenye orodha (au ichague kwenye modeli) ili kufungua data yake: mtengenezaji, modeli, rejeleo la modeli, nambari ya serial, msimbopau, siku iliyowekwa, nambari ya dhamana pamoja na mwanzo na mwisho wake, na muda wake wa huduma kwa miaka. {{ui:Save the data}} inaziandika kwa hatua moja ({{key:Mod+Z}} inatendua). Acha kisanduku tupu ili kuondoa thamani hiyo.

## Hati

Chini ya data, {{ui:Documents}} inaorodhesha miongozo, dhamana, picha, vyeti na michoro zilizounganishwa na rasilimali. Chagua aina, toa kichwa (au acha tupu: jina la faili litatumika) na uandike mahali ilipo:

- **anwani ya wavuti** (`https://…`): itapata Open link, inayofungua kichupo kipya;
- au **jina la faili au njia** (`Manuals/AHU-1.pdf`, `C:\FM\pump.pdf`, sehemu ya mtandao): weka faili kando ya IFC, katika folda ile ile au ndani yake, ili majina yabaki yanafanya kazi unapokabidhi folda. BimCraft inaonyesha jina; fungua faili kutoka kwenye folda.

Faili zenyewe hazipakiwi wala kunakiliwa ndani ya IFC: kiungo tu ndicho kinachoandikwa. Anwani ya wavuti yenye nenosiri ndani yake, na kiungo chochote ambacho si anwani ya wavuti wala faili (kama `javascript:`), vinakataliwa. {{ui:Remove}} inaondoa hati kwenye rasilimali (hatua moja; {{key:Mod+Z}} inatendua).

Hati ambazo programu nyingine iliziweka kwenye kipengele zinaorodheshwa pia. Hati zilizo kwenye **aina** ya kipengele zinaonekana kwenye kila kipengele cha aina hiyo na zinasema hivyo; zibadilishe mahali aina ilipotengenezwa.

Kwenye IFC kila hati ni rejeleo la hati la IFC lililounganishwa na kipengele, na aina yake imehifadhiwa kwenye kiungo hicho, katika IFC4 na IFC2X3 vilevile.

## Rekodi ya matengenezo

Chini ya hati, {{ui:Record work done}}: siku iliyofanyika, kazi yenyewe, aliyeifanya, wakati inayofuata inahitajika na maelezo. Kila ingizo ni hatua moja; {{ui:Edit}} na {{ui:Delete}} hubadilisha baadaye. Tarehe ya kuhitajika ya ingizo jipya zaidi ndiyo inayoamua kama rasilimali imechelewa au inahitajika hivi karibuni.

## Jinsi inavyohifadhiwa kwenye IFC

- Mtengenezaji na modeli katika `Pset_ManufacturerTypeInformation`, nambari ya serial, msimbopau na siku iliyowekwa katika `Pset_ManufacturerOccurrence`, dhamana katika `Pset_Warranty`, muda wa huduma katika `Pset_ServiceLife`, kwenye kipengele chenyewe. Aina ya kipengele ikiwa tayari ina mtengenezaji au modeli, hiyo inaonekana hadi uandike yako.
- Kila ingizo la matengenezo ni **kazi** ya IFC ya aina ya matengenezo, iliyounganishwa na kipengele, pamoja na tarehe zake (katika IFC4 pia kama nyakati za kazi yenyewe) na seti ya `CadCraft_Maintenance` yenye siku, aliyeifanya na siku inayofuata ya kuhitajika.
- Thamani ambazo vipengele vingine vinashiriki hunakiliwa kwanza: kubadilisha rasilimali moja hakubadilishi jirani zake.
- Katika faili za zamani za IFC2X3 tarehe huandikwa kama maandishi (YYYY-MM-DD); toleo hilo linataka rekodi tofauti ya tarehe, ambayo BimCraft haiiandiki.

## Usomaji wa vihisi

Fungua {{ui:Sensor values}} na {{ui:Open readings (CSV)…}} ili kuleta usomaji uliosafirishwa kutoka mfumo wa usimamizi wa jengo, kirekodi data au lahajedwali:

- **Safu ya kwanza ni muda**: `2026-10-23 14:05`, `2026-10-23T14:05:00Z`, `2026-10-23T14:05+02:00` au sekunde za Unix. Muda usio na eneo husomwa kwa saa ya kompyuta yako. Tarehe zenye siku kwanza kama `23/10/2026` hazisomwi (zina utata); hamisha tarehe za ISO.
- **Kila safu nyingine ni kihisi kimoja**, chenye kichwa cha **lebo**, **jina** au **GlobalId** ya rasilimali yake. Kichwa kisicholingana na rasilimali yoyote, au kinacholingana zaidi ya moja, huorodheshwa na kuachwa. Koma, semikoloni au tabo hutenganisha safu; kwa semikoloni au tabo, koma ya desimali (`21,5`) pia husomwa.
- Muda au thamani zisizosomeka (neno, au kipimo kilichoandikwa kwenye seli) huhesabiwa na kuachwa, si kukisiwa.

Usomaji wa mwisho unaonyeshwa kwenye safu ya {{ui:Reading}} ya orodha na kwenye kizuizi cha {{ui:Sensor}} cha rasilimali, pamoja na **chati** ya kila usomaji (kwenye simu, chati husubiri hadi ugonge {{ui:Show the chart}}). Weka **kikomo cha chini na cha juu** na kipimo kwenye rasilimali kisha {{ui:Save the limits}}: usomaji nje ya vikomo hivyo unaiweka alama rasilimali. Weka alama {{ui:Show on the model}} ili kupaka kila rasilimali kwa usomaji wake (bluu chini ya kikomo cha chini, kijani ndani ya vikomo, nyekundu juu ya kikomo cha juu; na kwa rasilimali zisizo na vikomo, kipimo kimoja cha bluu kutoka usomaji wa chini kabisa hadi wa juu kabisa), pamoja na usomaji wake kama lebo (hadi lebo 60, zilizoalamishwa kwanza).

**Usomaji unabaki kwenye kichupo hiki cha kivinjari**: hauhifadhiwi kwenye IFC wala hautumwi popote; fungua CSV tena wakati ujao. **Vikomo vinahifadhiwa kwenye IFC** (seti ya `CadCraft_Sensor` kwenye kipengele: Low, High, Unit), kwa hiyo mtu atakayefungua faili baadaye ataona alama zile zile.

## Mlisho wa moja kwa moja

{{ui:Live feed}} husoma thamani zinapotokea, **moja kwa moja kutoka kivinjari hiki hadi mfumo wako mwenyewe**. Hakuna kinachopitia seva yetu na hakuna kinachohifadhiwa popote isipokuwa kichupo chako cha kivinjari. Hakuna kinachounganishwa faili inapofunguka: ni {{ui:Connect}} pekee inayofanya hivyo.

- **MQTT juu ya WebSockets**: anwani ya kisikilizi cha WebSocket cha broker wako (`wss://broker.example.com:8884/mqtt`), na mada moja au zaidi zenye `{tag}` mahali lebo ya rasilimali inapoenda, kwa mfano `site/{tag}/temperature` (BimCraft hujisajili `site/+/temperature` na kusoma lebo kutoka kwenye mada ya kila ujumbe). Mada zisizo na `{tag}` zinataja kihisi chenyewe. Ujumbe ni nambari tupu (`21.5`) au JSON kama `{"value": 21.5, "time": "2026-10-23T14:05:00Z"}` (weka {{ui:Value field in JSON}} ikiwa yako inaitwa jina lingine).
- **Uliza anwani (HTTP)**: anwani ya wavuti ambayo mfumo wako wa usimamizi wa jengo au hati yako ndogo hujibu, inayoulizwa kila sekunde kadhaa (5 angalau). Inaweza kujibu kwa JSON yenye funguo za lebo (`{"AHU-1": 21.5}`), orodha ya JSON (`[{"tag": "AHU-1", "value": 21.5}]`), au CSV ya usomaji kama ile hapo juu. Ikiwa haijibu, BimCraft husubiri mara mbili ya muda kabla ya kuuliza tena, hadi dakika tano.

Kila usomaji huenda kwa rasilimali ambayo lebo, jina au GlobalId yake inataja, kama safu ya CSV ingefanya; majina yasiyolingana na rasilimali yoyote yanaorodheshwa. Usomaji huu unajiunga na {{ui:Sensor values}}: orodha, chati, vikomo na rangi kwenye modeli hufanya kazi kwa njia ile ile.

**Nenosiri lako au tokeni** huandikwa kwa muunganisho mmoja: hupelekwa kwenye muunganisho na kisanduku kinasafishwa; hakihifadhiwi kwenye kivinjari hiki wala kwenye IFC. Tokeni hutumwa kama kichwa cha kawaida cha `Authorization: Bearer`, na hakuna vidakuzi vinavyotumwa.

{{ui:Keep these settings in the IFC}} huandika anwani, mada, uwanja wa thamani na mara ya kuuliza kwenye modeli (seti ya `CadCraft_Feed` kwenye mradi; hakuna sehemu ya nenosiri), kwa hiyo mtu atakayefungua faili baadaye anaandika tu kuingia kwake mwenyewe na kubofya {{ui:Connect}}. Usiweke nenosiri au ufunguo kwenye anwani yenyewe: anwani yenye jina la mtumiaji na nenosiri ndani yake inakataliwa.

:::note
**Kinachohitajika na broker au anwani yako.** Ukurasa wa kivinjari unaweza tu kuzungumza na seva inayoruhusu:
- Ukurasa ni salama (https), kwa hiyo kivinjari huunganishwa tu na anwani za `wss://` na `https://`, isipokuwa kwenye kompyuta yako (`localhost`), ambapo `ws://` na `http://` zinafanya kazi kwa majaribio.
- Anwani ya HTTP lazima iruhusu maombi kutoka ukurasa huu (CORS: kichwa `Access-Control-Allow-Origin`, na `Authorization` miongoni mwa vichwa vilivyoruhusiwa ukitumia tokeni).
- Brokers wengi (Mosquitto, EMQX, HiveMQ na wengineo) hutoa kisikilizi cha WebSocket; mara nyingi huwa kimezimwa hadi kiwashwe. BimCraft inazungumza MQTT 3.1.1.
:::

**Hakuna tahadhari** wakati BimCraft imefungwa: vikomo huweka alama rasilimali wakati modeli iko wazi na malisho yameunganishwa. Kufuatilia jengo saa zote kunahitaji seva, ambayo BimCraft haiendeshi.

## Lahajedwali la COBie

**COBie** ni lahajedwali la makabidhiano ambalo wamiliki wengi na timu za usimamizi wa vituo huliomba (lililochapishwa na National BIM Standard nchini Marekani; BS 1192-4 nchini Uingereza). Fungua {{ui:COBie spreadsheet}} kwenye kichupo:

- {{ui:Save as COBie (.xlsx)}} huandika karatasi za COBie 2.4 (Contact, Facility, Floor, Space, Type, Component, System, Job, Document na Attribute) kutoka kwenye modeli na data ya rasilimali: jengo, ghorofa zake na vyumba vyake (maeneo kutoka kwenye wingi wa modeli), kila rasilimali kama kipengele chenye nambari yake ya serial, siku iliyowekwa, mwanzo wa dhamana, lebo na msimbopau, aina yake pamoja na mtengenezaji, modeli, muda wa huduma na urefu wa dhamana, mifumo inayoishi ndani yake, rekodi ya matengenezo kama kazi, na hati zilizounganishwa. Kila kipengele hubeba GlobalId ya IFC ya kipengele hicho. Andika anwani yako ya barua pepe kwa safu ya "created by" ya COBie, au acha tupu (itasema n/a). Thamani ambazo modeli haina husema **n/a**; safu za kategoria hubeba darasa la IFC, si msimbo wa OmniClass.
- {{ui:Read a COBie spreadsheet…}} husoma moja kurudi, kutoka BimCraft au programu nyingine, na **huorodhesha kila mabadiliko kwanza**: rasilimali gani, thamani gani, kutoka nini hadi nini, na hati mpya. {{ui:Apply}} huziandika zote kwa hatua moja ({{key:Mod+Z}} inatendua). Mistari inalinganishwa kwa GlobalId, kisha kwa jina la kipengele. Mistari isiyolingana na chochote kwenye modeli huorodheshwa, haiongezwi.

Lahajedwali linachukuliwa kuwa lisilo la kuaminika: fomula hazisomwi wala kuendeshwa (ni thamani ya mwisho iliyohifadhiwa kwenye seli pekee), thamani inayofanya dhamana iishe kabla ya kuanza na kiungo cha hati kisicho anwani ya wavuti wala jina la faili huachwa na kuhesabiwa, na vitabu vikubwa sana vinakataliwa. Kazi za COBie ni kazi zilizopangwa kwa aina, kwa hiyo huandikwa nje lakini hazisomwi tena. Kwenye lahajedwali ambalo BimCraft huandika, maandishi ambayo lahajedwali lingeweza kuyachukulia kama fomula (yanayoanza na `=`, `+`, `-` au `@`) yanawekwa alama kama maandishi.

Kitabu cha kazi kimekaguliwa kwenye majaribio yetu dhidi ya msomaji huru wa lahajedwali; hakijapitia kithibitishaji cha COBie. Timu inayopokea ikiendesha moja, tuambie kinachosema.

## Hati za makabidhiano

Karatasi zinazoenda kwa mmiliki pamoja na jengo lililokamilika ni za mradi, si za rasilimali moja. Kwenye kichupo cha {{ui:Assets}}, fungua {{ui:Handover documents}}:

1. {{ui:Add a document}}, chagua aina yake (cheti cha kukamilika, cheti cha matumizi, dhamana, mwongozo, michoro ya kama ilivyojengwa, nyingine), kisha andika kichwa chake, tarehe ya kutolewa, aliyeitoa na nambari yake ya rejeleo.
2. Sema ilipo: anwani ya wavuti, jina la faili lililowekwa kando ya IFC, au {{ui:Attach a file}}.
3. {{ui:Add to the list}}. {{ui:Edit}} na {{ui:Remove}} hubadilisha orodha; kila moja ni hatua moja unayoweza kutendua.

{{ui:Build the handover package}} hupakua zip moja: ukurasa wa jalada unaoorodhesha kila hati, orodha ile ile kama lahajedwali, kitabu cha COBie (hati ziko kwenye karatasi yake ya Document, kama safu kuhusu Facility), modeli, na kila faili iliyoambatishwa. Cheti cha kukamilika au cha matumizi ambacho bado hakijawa kwenye orodha kinatajwa kwenye jalada; kifurushi kinajengwa hata hivyo.

Modeli kwenye kifurushi ni **modeli ya kama ilivyojengwa**: inasema ni vipengele gani vilivyopimwa eneoni. Pamoja nayo, kwenye folda ya `as-built`: taarifa, orodha ya kila kipengele pamoja na hali yake ya uthibitisho, seti ya michoro kama ilivyo sasa kama PDF moja (michoro ya kama ilivyojengwa), na orodha ya mabadiliko ya michoro modeli inapokuwa imetoa seti. Tazama [Weka alama vipengele kuwa vimekaguliwa au kuthibitishwa eneoni](topic:verification).

- Kwenye faili ya IFC kila hati ni IfcDocumentInformation iliyounganishwa na mradi (IfcRelAssociatesDocument), pamoja na kichwa chake, rejeleo, tarehe, aliyeitoa na mahali pake, ili programu nyingine ziiorodheshe.
- Faili iliyoambatishwa inarekodiwa kwa jina, ukubwa na SHA-256. Ili kuweka faili yenyewe pamoja na mradi, tumia {{ui:Save the project as a bundle}} (.ccbundle hubeba modeli na faili zilizoambatishwa; kuifungua huzirudisha, kila moja ikikaguliwa dhidi ya rekodi yake). Uhifadhi wa kawaida huuliza unataka lipi.
- Faili ya .ifc tupu huhifadhi rekodi, si faili yenyewe: baada ya kuifungua, tumia {{ui:Attach the file again}}. Faili ile ile inatambuliwa; faili tofauti inachukua nafasi ya rekodi.

## CSV

{{ui:CSV}} huhifadhi kila rasilimali pamoja na data yake, kila ingizo la matengenezo na kila hati, mstari mmoja kwa kila moja, kwa lahajedwali au programu nyingine ya matengenezo.

:::note
Bado haijajengwa: huduma inayohifadhi usomaji na kutuma tahadhari BimCraft ikiwa imefungwa, na kusoma kazi za COBie tena. Tazama [Bado haijajengwa](topic:not-built-yet).
:::
