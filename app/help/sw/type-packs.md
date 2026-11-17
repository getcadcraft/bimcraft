---
title: Vifurushi vya aina: shiriki aina za kuta kama faili huria
summary: Hifadhi aina za kuta pamoja na tabaka zao, vifaa, lebo na misimbo ya uainishaji, na familia, kama faili moja huria (JSON ya kawaida au IFC), kisha ziongeze kwenye mradi mwingine. Aina za kuta za faili la IFC kutoka programu nyingine nazo zinaweza kusomwa.
keywords: kifurushi cha aina, aina, aina ya ukuta, shiriki, hamisha, ingiza, maktaba, umbizo huria, json, ifc, IfcWallType, IfcMaterialLayerSet, IfcProjectLibrary, vifaa, tabaka, kiolezo, kiwango cha ofisi, familia
from: e4c91331
---

## Utakachofanya

Chukua aina zako za kuta kutoka mradi mmoja kwenda mwingine, au mkabidhi mtu anayefanya kazi katika programu nyingine. Kifurushi cha aina kinashikilia kila aina ya ukuta pamoja na tabaka zake, unene, vifaa, msingi, mashimo, kipaumbele cha tabaka, kiwango cha ukuzaji, data ya ukadiriaji na misimbo ya uainishaji, pamoja na familia zozote unazoongeza. Ni faili huria: maandishi ya kawaida ya JSON ambayo mtu yeyote anaweza kuyasoma, au faili la IFC. Hakuna kitu ndani yake kilichofungwa kwa kampuni, nchi au akaunti yoyote.

## Hifadhi aina kutoka mradi

1. Fungua **Data** kwenye upau wa modeli kisha uchague {{ui:Vifurushi vya aina}}.
2. Chini ya {{ui:Hifadhi aina kutoka mradi huu}}, weka alama kwenye aina za kuta za kuweka ndani. Aina za mradi wenyewe zimewekwa alama; aina ya kuanzia inaweza kuongezwa na huingia kama nakala. Weka alama kwenye familia ukitaka zijumuishwe.
3. Andika {{ui:Jina la kifurushi}}.
4. {{ui:Hifadhi kama kifurushi (.json)}} hupakua faili la `.cctypes.json`. {{ui:Hifadhi kama IFC (.ifc)}} hupakua faili la IFC linaloshikilia aina tu: kila aina ya ukuta kama IfcWallType pamoja na seti yake ya tabaka za nyenzo, vifaa na uainishaji, kwa programu yoyote ya BIM.

## Ongeza aina kwenye mradi

1. Katika dirisha lile lile, chagua {{ui:Fungua kifurushi au faili ya IFC…}} kisha uchague kifurushi cha `.json` au faili la `.ifc`.
2. Dirisha linaorodhesha kilichomo kwenye faili: kila aina ya ukuta pamoja na unene wake, idadi ya tabaka na misimbo yake, vifaa na familia.
3. Chagua kitakachotokea kwa {{ui:Aina ambayo mradi huu tayari unayo}}: **Weka ya mradi**, **Ongeza ya kifurushi kama nakala** (itapata jina jipya linaloishia "(2)"), au **Badilisha (ni pale tu hakuna ukuta unaoitumia)**.
4. {{ui:Ongeza kwenye mradi}}. Dirisha linaorodhesha kilichoongezwa, kilichonakiliwa, kilichobadilishwa au kilichowekwa. Ni hatua moja ya kutendua.

Aina mpya huonekana mara moja kwenye orodha ya aina ya zana ya ukuta.

## Aina za sakafu, paa na dari

Orodha ya aina za kuhifadhi pia inashikilia aina za sakafu, paa na dari za mradi, pamoja na aina zake za kuanzia (zilizowekwa alama Floor, Roof, Ceiling). Kifurushi kinaweza kubeba aina zote nne; kila aina hutaja darasa lake la IFC (IfcWallType, IfcSlabType, IfcCoveringType). Aina ya sakafu, paa au dari ambayo vipengele vinaitumia haibadilishwi kutoka kwenye kifurushi: ibadilishe kwenye kihariri cha aina.

## Aina moja kama kipengee cha Maktaba

Weka alama kwenye aina moja tu kisha uchague **Hifadhi kama kipengee cha Maktaba…**. Hii huhifadhi faili la `.cctype.json`: kipengee cha Maktaba cha aina ya Aina kinachoshikilia aina hiyo moja (tabaka zake, vifaa, LOD na misimbo ya uainishaji). Ipakie kwenye Maktaba ili kushiriki. **Fungua kifurushi au faili ya IFC** husoma pia kipengee kama hicho na huongeza aina yake kwenye mradi kama kifurushi.

## Mambo ya kujua

- Faili la IFC kutoka programu nyingine pia linaweza kufunguliwa hapa. Kila aina yake ya ukuta yenye tabaka za nyenzo husomwa: jina, vifaa na unene wa tabaka, pamoja na mashimo yoyote, ni vya faili lenyewe. Tabaka lipi ni msingi na kila tabaka hufanya nini (umaliziaji, muundo, insulation) vinakisiwa, aina hiyo inawekwa alama **(imekisiwa)**, na unapaswa kuikagua kwenye kihariri cha aina ya ukuta. Aina ya ukuta isiyo na tabaka huachwa na kutajwa.
- Nyenzo ambayo mradi tayari unayo inabaki kama ilivyo. Nyenzo mpya yenye jina lililokwishachukuliwa hupata "(pack)" baada ya jina lake.
- Aina ambayo kuta zinaitumia haibadilishwi kamwe kutoka kwenye kifurushi. Ibadilishe kwenye kihariri cha aina ya ukuta, ambacho husogeza kuta zake ipasavyo.
- Msimbo uliowekwa kwenye ukuta mmoja hausafiri: ni wa ukuta huo. Msimbo uliowekwa kwenye aina hufanya hivyo.
- Faili lenye sehemu ambayo umbizo haina, tabaka lenye nyenzo inayokosekana, au chochote kisicho maandishi ya kawaida, linakataliwa, na ujumbe unaonyesha mahali na sababu.
- Haijajengwa bado: aina za sakafu, paa na dari (hazina aina katika toleo hili: kila moja ina unene wake), aina za milango na madirisha zisizo familia, na mashimo au rangi kutoka faili la programu nyingine.
