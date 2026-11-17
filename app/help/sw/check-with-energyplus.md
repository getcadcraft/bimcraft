---
title: Kagua joto na ubaridi kwa EnergyPlus
summary: Andika modeli kama faili la EnergyPlus, au endesha EnergyPlus toleo 26.2.0 juu yake kwenye kivinjari, kisha linganisha mizigo yake ya usanifu na msaada wa haraka wa joto na ubaridi. Maoni ya pili kwa usanifu wa awali, si hesabu ya kufuata kanuni.
keywords: energyplus, uigaji wa nishati, siku ya usanifu, mzigo wa joto, mzigo wa ubaridi, faili la hali ya hewa, epw, idf, uzito wa joto, nishati ya mwaka, igiza
from: b82a5bf2
---

## Utakachofanya

Kidirisha cha **Kagua kwa EnergyPlus** huandika modeli iliyofunguliwa kama faili la ingizo la EnergyPlus (IDF): eneo moja kwa kila chumba, kuta, sakafu, paa na madirisha pamoja na thamani zao za U, mabadilishano ya hewa, na joto na ubaridi bora. Unaweza kila wakati **kuhifadhi faili hilo** na kuliendesha kwenye EnergyPlus yako mwenyewe.

Kama pia utasanidi injini, kidirisha kinaweza kuigiza papo hapo, na kuorodhesha joto na ubaridi wa usanifu wa EnergyPlus karibu na ule wa msaada wa haraka, chumba kwa chumba.

Hii ni msaada wa usanifu. Kanuni za nishati, uthibitishaji na vibali vinahitaji zana iliyoidhinishwa na data ya hali ya hewa inayohitaji, na matokeo yanahitaji kukaguliwa na mtu anayeyawajibikia.

## Sanidi injini

BimCraft haibebi EnergyPlus. Ni muundo mkubwa wa WebAssembly (takriban 6 MB iliyobanwa, pamoja na faili la data la 4.6 MB), kwa hiyo unaiweka mwenyewe na kuandika anwani yake kwenye kidirisha. Ukurasa huipakia tu unapobonyeza kitufe cha kuigiza, kamwe si wakati wa kuanza. Anwani lazima iwe https, njia kwenye tovuti hii, au localhost.

## Siku za usanifu au mwaka

- **Igiza siku za usanifu** haihitaji faili la hali ya hewa. Huendesha siku ya baridi kali ya msimu wa baridi bila jua na siku ya kiangazi ya moto isiyo na mawingu, kwa joto zilizo kwenye ingizo za joto na ubaridi za kichupo cha Mwangaza wa mchana, kisha huripoti mzigo wa kila chumba kwa W.
- **Igiza mwaka** inahitaji faili la hali ya hewa katika muundo wa EPW unaouchagua. Huongeza watu, taa na vifaa kutoka kwenye ingizo hizo hizo (vinawashwa kila wakati, kwa sababu ratiba haibuniwi), na huripoti nishati ya joto na ubaridi ya kila chumba kwa kWh. Faili za hali ya hewa zina leseni zao, kwa hiyo tumia moja ambalo unaruhusiwa kulitumia.

## Uzito wa joto

Weka alama kwenye **Toa kuta zenye tabaka zinazojulikana uzito wa joto** na kuta, paa na sakafu zenye tabaka za nyenzo zinazojulikana huandikwa tabaka kwa tabaka, na msongamano na joto mahususi huchukuliwa kutoka jedwali fupi la thamani za kawaida kwa jina la nyenzo. Tabaka huchukuliwa kutoka nje kwanza, kwa mpangilio ambao faili linauorodhesha. Vipengele visivyo na tabaka hubaki kwenye thamani yao ya U bila uzito.

## Kusoma ulinganisho

Mbinu hizo mbili zinajibu maswali yanayofanana kidogo tofauti. Msaada wa haraka huweka kila kipengele; faili la EnergyPlus hupima wastani wa thamani za U za kila chumba kwa aina ya uso. Tofauti zaidi ya 15 % katika joto la usanifu la chumba huorodheshwa kama dokezo kwenye kidirisha cha ⚠, pamoja na takwimu zote mbili. Ubaridi hutofautiana zaidi kwa usanifu: msaada wa haraka huhesabu kilele kutokana na jua kwenye tarehe moja, na EnergyPlus huupima kwenye siku yake ya usanifu.
