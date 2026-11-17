---
title: Ardhi, jukwaa la jengo na kuweka lami
summary: Leta ardhi kwenye modeli kutoka pointi za upimaji, kontua, skani ya LAS / LAZ, GeoTIFF, uso wa LandXML (wa CivilCraft) au mwinuko wa nukta chache; kata jukwaa la jengo ndani ya ardhi pamoja na miteremko yake na kuchimba / kujaza; weka njia za magari, njia za kutembea na patio juu yake; ikabidhi kwa CivilCraft kama LandXML.
keywords: ardhi, eneo, tovuti, topografia, upimaji, pointi, PNEZD, kontua, LAS, LAZ, LiDAR, GeoTIFF, DEM, mwinuko, mwinuko wa nukta, mteremko, usawazishaji, jukwaa, jukwaa la jengo, kuchimba, kujaza, kazi ya udongo, mwanga wa mchana, miteremko, njia ya magari, njia ya kutembea, patio, kuweka lami, LandXML, CivilCraft
from: 208298d6
---

## Utakachofanya

Weka nyumba kwenye eneo lake. Ardhi inakuwa sehemu ya modeli: inaonyeshwa kwa 3D, inakatwa kwenye sehemu na michoro ya mwinuko, na kontua huonekana kwenye mpango. Jukwaa la jengo linakatwa chini ya nyumba, njia zinafuata ardhi, na misingi inashuka nayo.

## Leta ardhi

1. Fungua {{ui:Muundo}} kisha uchague {{ui:Ardhi}}.
2. Chagua mojawapo:
   - **Fungua faili la upimaji…**: pointi za upimaji (PNEZD, PENZD au mashariki, kaskazini, mwinuko wa kawaida; zimetenganishwa kwa koma, tabu au nafasi), kontua kwenye DXF au DWG (poliline kwenye mwinuko wake, poliline za 3D), skani ya LAS au LAZ (pointi za ardhi zimehifadhiwa, zimepunguzwa hadi takriban moja kwa kila mita ya mraba), gridi ya mwinuko ya GeoTIFF au ASCII, au uso wa **LandXML** kama ule ambao CivilCraft hutoa (pointi na pembetatu zake zinahifadhiwa; faili likiwa na nyuso kadhaa, BimCraft huuliza ni ipi ni ardhi; vipimo vyake vinatoka kwenye faili). Chagua vipimo vya faili kwanza (LandXML inajitaja yenyewe).
   - Au andika **Mwinuko wa nukta** (kutoka sakafu ya kiwango hiki, hivyo `-1'` ni futi moja chini yake) kisha ubofye nukta kwenye mpango, badilisha mwinuko na ubofye zaidi, kisha ubofye **Tengeneza ardhi**. Nukta tatu zinatosha kuanzia.

Viwianishi vya upimaji vilivyo mbali na modeli (state plane, UTM) husogezwa hadi kwenye nyumba, na mwinuko huwekwa ili ardhi karibu na nyumba iwe takriban 8" chini ya sakafu ya kwanza. **Inua ardhi** kwenye **Sifa** hurekebisha hilo kwa kiasi chochote.

## Jukwaa la jengo

1. Chagua {{ui:Jukwaa la jengo}}.
2. Weka **Pambizo** kuzunguka nyumba, jinsi **jukwaa linavyokaa chini ya sakafu** (8" chini ya bamba, zaidi chini ya nafasi ndogo chini ya sakafu) na **Miteremko** inayotoka hadi ardhi iliyopo (`2:1` = futi mbili nje kwa kila futi moja juu au chini).
3. Elekeza ndani ya nyumba kisha ubofye.

Ardhi inasawazishwa chini ya nyumba na kufika pambizoni, kisha inapanda juu kuelekea kilimani (kukata) na kushuka chini kuelekea upande wa chini (kujaza) hadi ikutane na ardhi iliyopo. **Sifa** za ardhi na za jukwaa zinatoa ujazo wa kukata na kujaza. Ukihamisha kuta, jukwaa nalo linafuata.

## Njia za magari, njia za kutembea na patio

Chagua {{ui:Kuweka lami}}, chagua **Njia ya kutembea**, **Njia ya magari** au **Patio**, kisha ubofye pembe. Bofya pembe ya kwanza tena, bofya mara mbili au bonyeza {{key:Enter}} kumaliza. Kuweka lami kunafuata usawa wa mwisho wa ardhi; badilisha aina yake au unene wake kwenye **Sifa**.

## Misingi inashuka kufuata usawa

Ardhi ikiwa kwenye modeli, kuta za msingi na misingi ya nafasi ndogo chini ya sakafu hufuata ardhi hiyo: kando ya kila ukuta msingi hubaki kwenye kina chake chini ya ardhi iliyo nje, na hushuka kwa hatua kamili za 8" pale ardhi inaposhuka (tazama [Misingi chini ya kuta](topic:foundations)).

## Ikabidhi kwa CivilCraft

**LandXML kwa CivilCraft** (kwenye safu ya Ardhi, au kwenye **Sifa** za ardhi) hupakua ardhi iliyopo na usawa wa mwisho kama faili la LandXML. Ifungue kwenye CivilCraft kwa usawazishaji halisi, mifereji ya maji na kazi ya udongo.

## Mambo ya kujua

- Ardhi inahitaji modeli ya IFC4, kama kila jengo jipya.
- Kontua huonekana kwenye mpango wa kiwango cha ardhi kwa muda uliowekwa kwenye **Sifa** za ardhi; kila ya tano ni nzito zaidi.
- Ardhi huhifadhiwa kama kipengele cha ardhi cha IFC (uso uliofungwa wenye pembetatu, ili sehemu zikikate); jukwaa na kuweka lami huhifadhiwa pamoja nayo. Futa ardhi ili uanze upya — jukwaa lake na kuweka lami vinaondoka nayo.
