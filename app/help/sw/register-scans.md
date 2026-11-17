---
title: Sajili skani kadhaa kuwa moja
summary: Weka skani zilizopigwa kutoka sehemu tofauti katika fremu moja kwa jozi za nukta zilizochaguliwa au malengo yaliyoandikwa, zisafishe kwa ICP, hifadhi usajili kama mradi, na hamisha wingu lililosajiliwa kama LAS au E57.
keywords: sajili, usajili, skani, wingu la nukta, icp, iterative closest point, malengo, jozi za nukta, mabadiliko magumu, pangilia, unganisha, e57, las, skani hadi bim
from: e8e270db
---

## Utakachofanya

Skani kadhaa za eneo moja (kila moja kutoka nafasi yake ya skana) huanza katika viratibu vyake yenyewe. Zisajili: mpe kila skani uwekaji mmoja ili zote ziwe katika fremu moja, kisha hifadhi hilo kama mradi na uandike wingu lililosajiliwa kama faili moja la LAS au E57.

## Weka skani

1. Fungua kidirisha ({{ui:Register scans…}} kwenye paneli ya kuanzia, au {{ui:Show}} › {{ui:Register scans…}} mara modeli inapokuwa wazi). {{ui:Add scans…}} inakubali faili za LAS, LAZ, E57, PLY, PCD, PTX, PTS au XYZ, au dondosha faili kwenye kidirisha. Skani zinazotumia vitengo tofauti hukataliwa kwa ujumbe: badilisha moja kwanza.
2. Chagua {{ui:Scan to move}} na {{ui:Place against}}. Picha inaonyesha skani zote kwenye fremu kama zilivyo sasa, kila moja rangi yake: {{ui:Plan}}, {{ui:Front}} au {{ui:Side}}; buruta ili kusogeza, tumia gurudumu kukuza.
3. **Kwa jozi za nukta.** Bofya {{ui:Pick a pair}}, kisha nukta kwenye skani ya kusogeza, kisha mahali hapo hapo kwenye skani nyingine (kona, lengo, msingi wa nguzo). Fanya hivi angalau mara tatu, kwa nukta zisizo kwenye mstari mmoja na zilizotawanyika. Bofya {{ui:Place by pairs}}: skani inawekwa kwa mbinu ya mraba-chini-kabisa (least-squares), na **Kilichobaki** kinaonyesha kila jozi bado inakosea kiasi gani. Jozi yenye namba kubwa ni chaguo baya: iondoe kwa alama ya msalaba kisha uweke tena.
4. **Kwa malengo.** Ikiwa viratibu halisi vya nukta vinajulikana (malengo yaliyopimwa), bofya {{ui:Pick, then type target}}, bofya nukta kwenye skani yake, kisha andika X, Y na Z za lengo kwenye safu hiyo. Jozi na malengo yaliyoandikwa vinaweza kuchanganywa kwa uhuru.

## Boresha kwa ICP

Jozi zinatoa uwekaji mbaya. {{ui:Refine}} inasogeza skani hadi nyuso zake zikae juu ya za skani nyingine: kwanza **nukta hadi nukta**, kisha **nukta hadi ndege**. Jedwali linaorodhesha kila hatua pamoja na kosa lake na idadi ya nukta zilizolingana; mstari juu yake unaonyesha kosa likishuka. {{ui:Stop}} inamaliza mzunguko baada ya hatua inayoendelea na kubakiza kilichofikiwa. {{ui:Undo}} inaondoa mzunguko mzima (au uwekaji wa mwisho); {{ui:Reset}} inarudisha skani kwenye viratibu vya faili lake.

Ili iwe ya haraka kwenye kompyuta ndogo, ICP inafanya kazi kwa sehemu iliyopunguzwa ya nukta ({{ui:Points used}}, 5,000 hadi 60,000) na inapuuza ulinganifu ulio mbali zaidi ya {{ui:Largest match distance}} (kwa chaguo-msingi 5% ya ukubwa wa skani, inapungua inapotulia). Inahitaji uwekaji mbaya kwanza: skani zinazopishana kidogo sana huripoti kwamba haziwezi kulinganishwa. Nyuso ambazo ni tambarare pekee au nyoofu pekee haziwezi kurekebisha nafasi kando ya zenyewe; ongeza jozi katika hali hiyo.

## Hifadhi na hamisha

- {{ui:Save project}} inaandika faili dogo la `.ccscans.json`: jina la kila skani, ukubwa wake na alama ya utambulisho ya KB 64 za kwanza, pamoja na mabadiliko yake. Haina nukta zozote. {{ui:Open project…}} inatafuta faili za skani kwa marejeo hayo (faili lazima ziwe zimeongezwa kwanza) na kurejesha kila mabadiliko.
- {{ui:Export LAS}} na {{ui:Export E57}} zinaandika faili moja lenye skani zote katika nafasi zao zilizosajiliwa. Nukta hazibadilishwi kwenye asili; mabadiliko yanatumika wakati wa kutoka. Ikiwa {{ui:Read every point from the files}} imewashwa, kila faili linasomwa tena kwa kila nukta (hadi milioni 20 kwa skani); ikizimwa, nukta zinazoonekana kwenye kitazamaji pekee ndizo zinazoandikwa.
- {{ui:Show registered cloud}} (BimCraft) huandika LAS na kuifungua kwenye mwonekano wa 3D pembeni ya modeli, kama wingu lingine lolote.

:::note
Hakuna kinachopakiwa. Usajili unafanya kazi katika vitengo vya faili zenyewe na unahifadhi milimita: LAS inaandikwa kwa kipimo kinachofaa (hadi 0.1 mm), E57 kwa aina ya double. Mfumo wa viratibu unahamishiwa kwenye LAS tu wakati kila skani inataja msimbo ule ule wa EPSG. Kiandishi cha E57 ni chetu wenyewe; kinakaguliwa kwa kusoma faili zake tena na msomaji huu na libE57Format.
:::
