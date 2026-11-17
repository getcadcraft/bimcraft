---
title: Kufanya kazi kati ya programu mbili za BIM
summary: Tuma modeli kutoka programu moja ya BIM kwenda nyingine kupitia IFC na BimCraft katikati, hifadhi GlobalId zake, seti za sifa na uainishaji, weka programu zote mbili kwa sifa zile zile, na uone kilichorudi.
keywords: ifc, safari ya kwenda na kurudi, kubadilishana, globalid, guid, seti za sifa, psets, uainishaji, vigezo vilivyoshirikiwa, uunganishaji wa sifa, mtafsiri, bcf, uratibu, ubadilishanaji
from: 9f224176
---

## Utakachofanya

Hamisha modeli kati ya programu mbili za BIM, kwa mfano kutoka Revit kwenda Archicad na kurudi, kupitia IFC, huku BimCraft ikiwa katikati ya kuikagua, kuiongezea na kuripoti kilichonusurika. Faili la umbizo la programu yoyote hakisomwi: kila kitu husafiri kama IFC.

## Kinachohifadhiwa na BimCraft

Unapobadilisha modeli katika BimCraft na kubofya {{ui:Hifadhi kama IFC}}, kila mstari ambao hukuubadilisha huandikwa tena jinsi ulivyokuwa. Kwa hiyo:

- **GlobalId** hubaki zile zile, na programu nyingine inaweza kulinganisha kila kipengele na kile ilichotuma.
- **Seti za sifa** na thamani zake zinabaki, isipokuwa thamani ulizobadilisha.
- **Uainishaji** unabaki umeambatishwa kwenye vipengele vyake.

## Weka programu zote mbili kwa sifa zile zile

1. Fungua modeli katika BimCraft (na kifurushi cha mradi, kama unacho: vikundi vyake vya sifa huongezwa).
2. Kwenye paneli ya kushoto, fungua {{ui:Kati ya programu mbili za BIM}}.
3. Chini ya **Uunganishaji wa sifa**, pakua kile ambacho kila programu inahitaji:
   - {{ui:Vigezo vilivyoshirikiwa}}: faili la vigezo vilivyoshirikiwa. Katika Revit, lipakie kwa Manage › Shared Parameters kisha uongeze vigezo kwenye kategoria zinazovihitaji.
   - {{ui:Seti za sifa za kuuza nje za IFC}}: faili la seti ya sifa iliyofafanuliwa na mtumiaji. Katika mipangilio ya usafirishaji wa IFC ya Revit, lichague chini ya seti za sifa zilizofafanuliwa na mtumiaji, ili IFC iliyosafirishwa ibebe seti na majina ya sifa yale yale.
   - {{ui:Jedwali la uunganisho (CSV)}}: kila sifa pamoja na seti yake ya IFC na jina lake, aina yake, na majina yanayolingana katika kila programu. Faili za uunganisho za Archicad si umbizo lililochapishwa, kwa hiyo weka mtafsiri wake wa IFC na kidhibiti chake cha sifa kwa mkono kutoka kwenye jedwali hili.
   - {{ui:Faili ya uunganisho}}: uunganishaji wote kama faili moja, la kuweka pamoja na mradi.

Seti za kawaida (Pset_ na Qto_) hazijumuishwi kwenye faili la vigezo vilivyoshirikiwa: programu zote mbili huziandika kutoka data zao wenyewe.

## Tuma modeli na uirudishe

1. Safirisha IFC kutoka programu ya kwanza huku GlobalId zikihifadhiwa (Revit: "Store the IFC GUID in an element parameter after export" imewashwa).
2. Ifungue katika BimCraft, ikague ({{ui:Ukaguzi wa modeli}}, {{ui:Ukaguzi wa migongano}}), ongeza masuala ({{ui:Masuala}}, BCF), badilisha thamani ukihitaji, kisha {{ui:Hifadhi kama IFC}}.
3. Fungua IFC iliyohifadhiwa katika programu ya pili, ifanyie kazi, kisha usafirishe IFC kutoka hapo huku GlobalId zikihifadhiwa (kitafsiri cha Archicad: "Global Unique Identifiers: Keep existing").
4. Rudi BimCraft, fungua modeli iliyotoka, kisha ongeza ile iliyorudi ({{ui:Ongeza modeli}} chini ya Modeli).
5. Katika {{ui:Kati ya programu mbili za BIM}}, chagua **Zilizotoka** na **Zilizorudi**, kisha ubofye {{ui:Tengeneza ripoti}}.

## Soma ripoti

- **Vipengele**: vingapi vilirudi na GlobalId ile ile, vingapi havipo, na vingapi ni vipya. Vipengele vyenye GlobalId mpya huonekana kama kimoja kinachokosekana na kimoja kipya: programu nyingine haikukihifadhi.
- **Darasa la IFC limebadilika**: vipengele vilivyorudi kama aina nyingine ya kipengele.
- **Thamani za sifa zilizohifadhiwa**: sehemu ya thamani zilizorudi bila kubadilika. Orodha iliyo chini inaonyesha sifa zenye thamani nyingi zilizobadilika au kukosekana.
- **Uainishaji**: umehifadhiwa, umebadilika (mfumo uleule, msimbo mwingine) au umekosekana.

{{ui:Pakua ripoti (CSV)}} inatoa kila sifa pamoja na hesabu zake. Ili kuona vipengele vilivyohama au kubadilika umbo, tumia {{ui:Linganisha matoleo}} kwenye modeli mbili zile zile.

:::note
BimCraft haiendeshi programu yoyote kati ya hizo mbili. Ni mipangilio gani ya IFC inayobeba thamani kupitia hadi nyingine inategemea mipangilio ya IFC ya kila programu: ripoti inaonyesha kilichorudi kweli, kwa hiyo jaribu mpangilio, safirisha tena na ulinganishe.
:::

## Masuala husafiri kama BCF

Masuala unayoibua katika BimCraft husafirishwa kama BCF ({{ui:Masuala}}), ambayo programu zote mbili zinaweza kuisoma kwa zana zao za BCF. Kwa hiyo swali kuhusu kipengele hufika kwa anayefanya kazi katika programu nyingine pamoja na mtazamo wake.

Tazama pia [Fungua kifurushi cha mradi](topic:open-project-bundle), [Kutoka faili la mradi hadi BimCraft kupitia IFC](topic:rvt-to-ifc) na [Linganisha matoleo mawili ya modeli](topic:compare-versions).
