---
title: Tuma tukio kwenye injini ya michezo
summary: Studio inaweza kuandika tukio kwenye mradi wa Unreal Engine na kulisasisha kila tuma; mabadiliko yako yanaishi kwenye safu ambayo CadCraft haiandiki kamwe. Programu-jalizi inayolifungua bado haijatolewa.
keywords: unreal, unreal engine, injini ya michezo, kiungo, tuma, jukwaa la usd, mradi, moja kwa moja, cine camera, movie render queue
from: 154d55ef
---

Katika CadCraft Studio orodha ya Injini inaweza kushikilia **kiungo** kwa mradi wa Unreal Engine. Njia moja tu: kutoka CadCraft kwenda Unreal.

## Tuma tukio

1. Chagua kipengele cha Unreal kwenye orodha ya Injini. Mara ya kwanza, Studio inakuomba uchague folda ya mradi wako (ile yenye faili la `.uproject`); inaikumbuka.
2. Bofya {{ui:Send}}. Studio inaandika `CadCraft/<file name>/` ndani ya mradi: tukio kama faili la USD, faili la mipangilio, wasifu wa taa, na faili mbili ndogo za safu.
3. Badilisha modeli, hifadhi na utume tena. Tukio na faili la mipangilio pekee ndivyo vinavyobadilishwa.

## Mabadiliko yako yako salama

Jukwaa ambalo Unreal inalifungua ni safu ndogo ya msingi iliyotengenezwa mara moja, pamoja na safu mbili chini yake: **yako** juu (`<name>.user.usda`, tupu mwanzoni, haiandikwi upya kamwe na CadCraft) na tukio la CadCraft chini yake. Mabadiliko unayohifadhi kwenye safu yako yanabaki tukio linapotumwa tena. Taa na watendaji (actors) unaowaweka kwenye kiwango cha Unreal wako nje ya jukwaa, na pia hawaguswi.

## Bila Studio

Kwenye kivinjari, au kwenye kompyuta ambayo Studio haipati Unreal, chagua **Folda ya mradi wa Unreal (.zip)** kwenye orodha ya Injini kisha bofya {{ui:Render}}. Inahifadhi folda hiyo hiyo kama zip: ifungue ndani ya folda `CadCraft` ya mradi wako. Acha **Jumuisha faili za jukwaa** imewashwa mara ya kwanza; izime kwa kuhifadhi baadaye, ili zip iwe na tukio na faili la mipangilio pekee, na safu yako isibadilishwe kamwe.

:::note
Programu-jalizi ya Unreal inayofungua jukwaa, inayotumia jua, taa, kamera na mfiduo, inayofuatilia kila tuma na kutoa picha kutoka kamera **bado haijatolewa** na haijajaribiwa kwenye Unreal. Hadi itakapotolewa, Tuma huweka faili kwenye mradi, na zana za USD za Unreal zenyewe zinaweza kuzifungua. Windows ndiyo mfumo wa kwanza; macOS itafuata.
:::
