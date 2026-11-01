---
title: Faili BimCraft hufungua na kuhifadhi
summary: Kila muundo ambao BimCraft hufungua, kinachosoma, kinachohifadhi, mahali faili zilizohifadhiwa zinapoenda, na kinachobadilika kati ya vivinjari na ukiwa nje ya mtandao.
keywords: miundo, fungua, hifadhi, hamisha, pakua, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, pakia, faragha, ukubwa wa faili
from: a1f0161b
---

BimCraft husoma faili kwenye kompyuta yako, ndani ya kichupo cha kivinjari. **Hakuna kinachopakiwa** kwa CadCraft wala kwa mtu mwingine. Unapohifadhi, BimCraft hukipa kivinjari faili jipya la kupakua; kamwe haliandiki juu ya faili uliloifungua.

## Kinachofungua

| Muundo | Viendelezi | Utakachopata |
|---|---|---|
| IFC | `.ifc` | Modeli katika 3D, ghorofa, idadi ya vipengele na sifa za kila kipengele. Majina, lebo na thamani moja za sifa zinaweza kubadilishwa. |
| Faili za mradi na familia | `.rvt` `.rfa` `.rte` `.rft` | Kadi ya faili: toleo, muundo, ushirikiano wa kufanya kazi pamoja, taarifa za mradi, vigezo vya familia, faili zilizounganishwa na picha ya hakikisho. Hakuna 3D. |
| DWG | `.dwg` | Mchoro katika 2D: nafasi ya modeli, kila karatasi, tabaka, michoro iliyounganishwa, picha na mwonekano wa kuchapisha. Nafasi ya modeli pia katika 3D. Matoleo ya AutoCAD 2000 hadi 2018 ndiyo yaliyokaguliwa. |
| DXF | `.dxf` | Sawa na DWG. |
| STEP | `.step` `.stp` | Sehemu, kifaa au modeli ya msambazaji (AP203, AP214, AP242) katika 3D: kila kigumu huwa kipengele kimoja (kipengele mbadala cha jengo) cha modeli ndogo ya IFC kwenye ghorofa moja, kinasomwa kama pembetatu kwa ukubwa wake halisi, na mkusanyiko wenye kila sehemu mahali faili inapoiweka. Kinafanya kazi kama IFC yoyote kuanzia hapo: sifa, sehemu za mkato, kupima, hifadhi kama IFC. Rangi na mti wa mkusanyiko hazisomwi. |
| Wingu la nukta | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | Skani katika mwonekano wa 3D, pembeni ya modeli au peke yake: angalia [Onyesha wingu la nukta pembeni ya modeli](topic:point-clouds). |
| Kifurushi cha mradi | `.ccbundle.zip` | Modeli pamoja na mionekano, mipangilio na vikundi vya sifa: angalia [Fungua kifurushi cha mradi](topic:open-project-bundle). |
| Folda | yoyote | Ripoti ya kila modeli, mchoro na kifurushi cha mradi ndani yake. IFC, modeli, mchoro au kifurushi chochote kwenye ripoti hufunguka kwa bofya moja. |

[Kinachosomwa kutoka kila muundo](topic:file-formats) kinaelezwa kwa undani.

BimCraft huamua faili ni nini kwa kuangalia baiti zake za kwanza pamoja na jina lake, hivyo faili la mradi lenye kiendelezi kisicho cha kawaida bado hufunguka kama kadi ya faili.

### Haifunguki

- `.ifczip` na `.ifcxml`: BimCraft husema ".ifczip is not supported yet. Save or export the model as a plain .ifc file." Fungua `.ifczip` (lina `.ifc` ya kawaida ndani yake) au hamisha tena kama IFC ya kawaida.
- Michoro ya DGN huorodheshwa kwenye ripoti ya folda lakini haifunguki.
- PDF, picha na faili za ofisi hazifunguki zenyewe. Picha hutumika kama picha ndani ya DWG, na {{ui:Muundo}} › {{ui:Kutoka mchoro…}} hugeuza kurasa za PDF au skani kuwa kuta: angalia [Kuta kutoka seti ya michoro](topic:walls-from-plans).

## Kinachohifadhi

| Unabofya | Utapata | Mahali |
|---|---|---|
| {{ui:Hifadhi kama IFC}} | Faili jipya la IFC lenye mabadiliko yako, lililopewa jina "*jina la asili* (edited).ifc" | Folda ya upakuaji ya kivinjari chako |
| {{ui:Pakua CSV}} katika jedwali la vifaa | CSV ya vitu vilivyo kwenye orodha, yenye jina "*jina la mchoro* equipment.csv" | Folda ya upakuaji ya kivinjari chako |

Vitu vingine huhifadhiwa mahali vinapotengenezwa, kila kimoja katika mada yake: {{ui:USD}} ([Hamisha modeli kama USD](topic:usd)), {{ui:Kwa kutoa picha}} ya .glb, picha zilizotengenezwa, karatasi na mipango kama PDF, majedwali na orodha kama CSV, masuala ya BCF, jedwali la COBie, faili za familia, na skani zilizosajiliwa kama LAS au E57. BimCraft haihifadhi DWG, DXF wala faili za mradi, na haibadilishi kamwe faili ulizozifungua.

:::chromium
Chrome na Edge huhifadhi upakuaji kwenye folda iliyowekwa kwenye mipangilio yao, kwa kawaida Downloads. Ili uulizwe mahali pa kuhifadhi kila faili kabla ya kupakua, washa "Ask where to save each file before downloading" kwenye mipangilio ya upakuaji ya kivinjari.
:::

:::firefox
Firefox huhifadhi kwenye folda ya Downloads isipokuwa umeiweka kwa "Always ask you where to save files" kwenye mipangilio yake.
:::

:::safari
Safari huhifadhi kwenye Downloads isipokuwa uchague folda nyingine chini ya **Safari > Settings > General > File download location**.
:::

## Kuhifadhi mara ya pili

Kila hifadhi hupakua modeli nzima pamoja na **kila mabadiliko tangu ulipoifungua**, si mabadiliko yaliyofanywa baada ya hifadhi ya mwisho pekee. Orodha ya {{ui:Mabadiliko}} huanza tupu tena baada ya kila hifadhi, kwa hiyo huwezi kutendua zaidi ya hifadhi. Ili kuanza upya kutoka asili, fungua tena faili asili.

## Faili kubwa na kumbukumbu

- Faili za **IFC** husomwa kikamilifu kwenye kumbukumbu ya kichupo, na jiometri ya 3D huchukua kumbukumbu zaidi juu yake. Modeli ya megabaiti mia chache inaweza kuwa nyingi mno kwa kompyuta ndogo. Zaidi ya pembetatu milioni 1.5, kingo huzimwa ili kuokoa kumbukumbu ("Edges are off for very large models").
- **Faili za mradi** hazisomwi kikamilifu. BimCraft husoma sehemu ndogo tu inazozihitaji, takriban KB 40 hadi KB 100 bila kujali faili ni kubwa kiasi gani, hivyo modeli kuu ya MB 500 kwenye hifadhi ya mtandao hufunguka ndani ya muda mfupi.
- Faili za **DWG na DXF** husomwa kikamilifu. Mchoro mkubwa mno huonyesha "This drawing is very large; only part of it is shown."
- **Folda** zenye hadi faili 20,000 hufunguka. Kilobaiti chache tu ambazo kila kadi ya modeli inahitaji ndizo husomwa.

Angalia [Vivinjari, vifaa na kumbukumbu](topic:platforms) kwa maelezo zaidi.

## Mtandaoni na nje ya mtandao

Kufungua faili hakuhitaji mtandao kamwe. Kisomaji kimoja hupakia kutoka tovuti mara ya kwanza unapokihitaji: injini ya IFC, mara ya kwanza unapofungua modeli ya IFC ("Starting the IFC engine…"). Visomaji vya DWG na DXF ni sehemu ya programu.

:::offline
Uko nje ya mtandao. Ikiwa kitufe cha upau wa programu kinasema {{ui:Tayari kwa matumizi ya nje ya mtandao}}, kila muundo hufunguka kama kawaida. Kisipoandika hivyo, modeli ya IFC haiwezi kufunguka isipokuwa moja tayari imefunguliwa kwenye kichupo hiki: unganisha tena kwanza. Angalia [Mtandaoni na nje ya mtandao](topic:online-offline).
:::

Ili kutumia BimCraft bila muunganisho, bofya {{ui:Hifadhi kwa matumizi ya nje ya mtandao}} kwenye upau wa programu ukiwa mtandaoni, kisha subiri {{ui:Tayari kwa matumizi ya nje ya mtandao}}. Nakala iliyohifadhiwa ni takriban MB 33; inajumuisha injini ya IFC, hivyo modeli za IFC pia hufunguka nje ya mtandao. [Kufanya kazi nje ya mtandao](common:offline) inaeleza nakala zilizohifadhiwa kwa ujumla.

## Kuhifadhi kwenye wingu

Kuhifadhi kwenye wingu bado hakupatikani. Hifadhi nakala zako zilizohaririwa kwenye kompyuta yako mwenyewe au kwenye seva ya faili ya ofisi yako, kama faili nyingine yoyote. Angalia [Faili zako](common:your-files).
