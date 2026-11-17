---
title: "Hali ya hewa ya baadaye: mafuriko, joto na moto wa nyikani mwaka 2050 na 2080"
summary: Endesha tena mafuriko, mwaka wa nishati na uchunguzi wa awali wa moto wa nyikani kwa hali ya hewa ya baadaye (mikakati SSP2-4.5 na SSP5-8.5, miaka 2050 na 2080) kutoka kwenye kifurushi cha data ya hali ya hewa, ukiyawasilisha kando ya ya sasa.
keywords: hali ya hewa, mabadiliko ya tabianchi, baadaye, 2050, 2080, ssp, cmip6, mkakati, usawa wa bahari, mafuriko, joto, faili la hali ya hewa, epw, morph, energyplus, moto wa nyikani, moto wa vichaka, hali ya moto
from: 224ecd08
---

Takwimu za hali ya hewa zinatoka kwenye **kifurushi cha data**, si kwenye programu. Washa nyongeza ya {{ui:Hali ya hewa ya baadaye}} kwenye Mipangilio › Viongezi, au pakia faili lako la kifurushi kwenye kizuizi cha {{ui:Hali ya hewa ya baadaye}}.

:::warning
Kifurushi kinachokuja na nyongeza ni **sampuli**: sehemu tatu (Denver, Miami, Johannesburg), modeli moja ya hali ya hewa, na miaka mitano katika kila kipindi cha miaka 20. Kipo kwa ajili ya kujaribu zana, **si kwa usanifu**. Kidirisha kinasema hivyo kwa herufi nzito kinapotumika. Kifurushi kamili (modeli nyingi, miaka yote, sehemu zaidi) kinajengwa kwa `tools/climate/build-pack.mjs` kutoka data ya NASA NEX-GDDP-CMIP6.
:::

## Chagua hali ya baadaye

Kwenye {{ui:Uigaji wa hatari}} ya paneli ya kushoto, chagua **Mkakati** (SSP2-4.5, wa katikati ya njia, au SSP5-8.5, uzalishaji wa juu wa hewa chafu) na **Mwaka** (2050 inamaanisha 2041-2060, 2080 inamaanisha 2071-2090; zote zinalinganishwa na 1995-2014). **Mahali** ni sehemu ya kifurushi iliyo karibu zaidi na eneo la modeli (latitudo na longitudo ya IfcSite), au ile unayoichagua. Iwapo iko mbali na sehemu zote, mabadiliko ya wastani wa kimataifa ya kifurushi yanatumika, na kidirisha kinasema hivyo.

## Mafuriko: ya sasa kando ya ya baadaye

Mkakati ukiwa umechaguliwa, weka **Aina ya mafuriko**: ya pwani (huongeza kupanda kwa usawa wa bahari), ya mto au mvua kubwa (kina zaidi kwa mabadiliko ya mvua ya siku yenye mvua nyingi zaidi), au zote mbili. Bonyeza {{ui:Endesha}}: mafuriko yanacheza kama awali, na jedwali linaonyesha mafuriko ya sasa na ya baadaye kando kwa kando (kiwango cha maji, vyumba vitakavyolowa, maji ya kina zaidi). Dhana zimeorodheshwa chini yake:

- kiwango cha pwani hupanda kwa kupanda kwote kwa usawa wa bahari; dhoruba na mawimbi havibadilishwi;
- mtiririko wa mto hupanda kwa uwiano wa moja kwa moja na mvua ya siku yenye mvua nyingi zaidi, na kina hufuata mtiririko kwa nguvu ya 0.6 (mlinganyo wa Manning kwa mkondo mpana);
- sehemu hizo mbili zinaongezwa tu pamoja.

## Joto: faili la hali ya hewa ya baadaye

Chagua aina {{ui:Joto: faili la hali ya hewa ya baadaye}}, chagua faili la hali ya hewa la `.epw` la sasa na ubonyeze {{ui:Tengeneza faili la hali ya hewa ya baadaye}}. Faili linabadilishwa **kwa morphing** mwezi kwa mwezi kwa njia ya kuhama na kunyoosha iliyochapishwa (Belcher, Hacker na Powell 2005): wastani wa mwezi unapata joto kwa mabadiliko ya kifurushi, alasiri za moto kwa mabadiliko ya kiwango cha juu cha kila siku, na usiku wa baridi kwa mabadiliko ya kiwango cha chini cha kila siku; unyevu wa jamaa unasogea kwa mabadiliko ya kifurushi na kiwango cha umande kinahesabiwa upya. Shinikizo na upepo vinabaki vilivyokuwa. Jedwali linalinganisha wastani na joto la juu, joto la usanifu wa ubaridi wa 0.4 % na joto la usanifu wa joto la 99.6 %, saa zilizo 30 °C na 35 °C, na siku-digrii (degree-days).

{{ui:Hifadhi faili la hali ya hewa ya baadaye}} huhifadhi; {{ui:Tumia katika ukaguzi wa nishati}} hukabidhi kwenye ukaguzi wa EnergyPlus (kichupo cha Nishati). Faili la baadaye ni mwaka ule ule wa kawaida, lakini wenye joto zaidi: halileti mawimbi mapya ya joto.

## Mwaka wa nishati: wa sasa kando ya wa baadaye

Kwenye ukaguzi wa EnergyPlus wa kichupo cha Nishati (nyongeza yake yenyewe, pamoja na injini yako), chagua faili la hali ya hewa la sasa, kisha mkakati na mwaka kwenye kizuizi chake cha {{ui:Hali ya hewa ya baadaye}}, na ubonyeze {{ui:Igiza mwaka: wa sasa na wa baadaye}}: mwaka unaendeshwa kwenye faili la sasa na kwenye toleo lake la baadaye lililobadilishwa, na joto na ubaridi wa kila chumba vinaorodheshwa kando kwa kando.

## Mfiduo wa moto wa nyikani (uchunguzi wa awali tu)

Chagua aina {{ui:Mfiduo wa moto wa nyikani (uchunguzi wa awali tu)}}: mimea iliyo karibu zaidi, mteremko unaopanda kutoka hapo hadi jengo, na umbali wake. Matokeo ni bendi kutoka chini sana hadi uliokithiri, ya sasa na ya baadaye.

:::warning
**Uchunguzi wa awali tu.** Huu ni kipimo chetu wenyewe cha jamaa cha kuona kama eneo linahitaji tathmini sahihi ya moto wa nyikani, si ukadiriaji wa kanuni wala kiwango cha shambulio la bushfire. Huzidisha uzito wa mimea, kipengele cha mteremko (moto huongeza kasi yake takriban mara mbili kwa kila digrii 10 juu ya mteremko, ukihesabiwa hadi digrii 20), kipengele cha umbali (m 10 ikigawanywa kwa umbali, kiwango cha juu 1) na mabadiliko ya kifurushi kwenye faharisi ya hali ya hewa ya moto.
:::

## Namba zinatoka wapi

- **Joto, unyevu, jua, mvua, hali ya hewa ya moto:** NASA NEX-GDDP-CMIP6, matokeo ya kila siku ya modeli za CMIP6 zilizopunguzwa ukubwa. Matokeo ya kila modeli yako chini ya CC BY 4.0. Mabadiliko ya hali ya hewa ya moto ni Faharisi ya Hali ya Hewa ya Moto ya Kanada iliyohesabiwa siku kwa siku kutoka hali ya hewa ya modeli (kwa unyevu wa kila siku badala ya unyevu wa mchana).
- **Kupanda kwa usawa wa bahari:** wastani wa kimataifa wa IPCC AR6 (si wa mahali; ardhi kupanda au kuzama hakumo ndani yake), isipokuwa kifurushi kina takwimu za mahali.
- Kifurushi kinataja chanzo chake, leseni na tarehe; kidirisha kinaonyesha hayo.
