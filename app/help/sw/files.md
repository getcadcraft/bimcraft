---
title: Faili ambazo BimCraft hufungua na kuhifadhi
summary: Kila muundo ambao BimCraft hufungua, kile inachohifadhi, mahali faili zilizohifadhiwa zinapoenda, na kinachobadilika kati ya vivinjari na unapokuwa nje ya mtandao.
keywords: muundo, fungua, hifadhi, hamisha, pakua, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, pakia, faragha, ukubwa wa faili
from: a7275dbf
---

BimCraft husoma faili kwenye kompyuta yako, ndani ya kichupo cha kivinjari. **Hakuna kinachopakiwa** kwenda CadCraft wala kwa mtu mwingine. Unapohifadhi, BimCraft humpa kivinjari faili mpya ya kupakua; haiandiki juu ya faili uliyofungua kamwe.

## Inachofungua

| Muundo | Viendelezi | Unachopata |
|---|---|---|
| IFC | `.ifc` | Modeli kwa 3D, ghorofa, idadi ya vipengele na sifa za kila kipengele. Majina, lebo na thamani moja moja za sifa zinaweza kubadilishwa. |
| Faili za mradi na familia | `.rvt` `.rfa` `.rte` `.rft` | Kadi ya faili: toleo, muundo, ushirikiano wa kazi, taarifa za mradi, vigezo vya familia, faili zilizounganishwa na picha ya onyesho. Hakuna 3D. |
| DWG | `.dwg` | Mchoro kwa 2D: nafasi ya modeli, kila karatasi, tabaka, michoro iliyounganishwa, picha na mwonekano wa kuchapisha. Nafasi ya modeli pia kwa 3D. Miundo kuanzia AutoCAD 2000 hadi 2018 ndiyo iliyokaguliwa. |
| DXF | `.dxf` | Sawa na DWG. |
| STEP | `.step` `.stp` | Sehemu, kipande cha vifaa au modeli ya msambazaji (AP203, AP214, AP242) kwa 3D: kila kigumu kinakuwa kipengele kimoja (proxy ya kipengele cha jengo) cha modeli ndogo ya IFC kwenye ghorofa moja, kinasomwa kama pembetatu kwa ukubwa wake halisi, na mkusanyiko wenye kila sehemu mahali faili inapoiweka. Kinafanya kazi kama IFC yoyote kuanzia hapo: sifa, sehemu, kupima, hifadhi kama IFC. Rangi na mti wa mkusanyiko hazisomwi. |
| Mawingu ya nukta | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | Skani katika mwonekano wa 3D, pembeni ya modeli au peke yake: tazama [Onyesha wingu la nukta pembeni ya modeli](topic:point-clouds). |
| Kifurushi cha mradi | `.ccbundle.zip` | Modeli pamoja na mionekano, mipangilio na vikundi vya sifa: tazama [Fungua kifurushi cha mradi](topic:open-project-bundle). |
| Folda | yoyote | Ripoti ya kila modeli, mchoro na kifurushi cha mradi ndani yake. IFC, modeli, mchoro au kifurushi chochote kwenye ripoti hufunguka kwa kubofya mara moja. |

[Kinachosomwa kutoka kila muundo](topic:file-formats) kinaeleza kwa kina.

BimCraft huamua faili ni nini kwa kuangalia baiti zake za kwanza pamoja na jina lake, kwa hiyo faili ya mradi yenye kiendelezi kisicho cha kawaida bado hufunguka kama kadi ya faili.

### Hazifunguliwi

- `.ifczip` na `.ifcxml`: BimCraft husema ".ifczip bado haitumiki. Hifadhi au hamisha modeli kama faili ya kawaida ya .ifc." Fungua `.ifczip` (ina `.ifc` ya kawaida ndani yake) au hamisha tena kama IFC ya kawaida.
- Michoro ya DGN huorodheshwa kwenye ripoti ya folda lakini haifunguki.
- PDF, picha na faili za ofisi hazifunguki zenyewe. Picha hutumika kama picha ndani ya DWG, na {{ui:Muundo}} › {{ui:Kutoka mchoro…}} hugeuza kurasa za PDF au skani kuwa kuta: tazama [Kuta kutoka seti ya michoro](topic:walls-from-plans).

## Inachohifadhi

| Unabonyeza | Unapata | Mahali |
|---|---|---|
| {{ui:Hifadhi kama IFC}} | Faili mpya ya IFC yenye mabadiliko yako, iitwayo "*jina asili* (edited).ifc" | Folda ya upakuaji ya kivinjari chako |
| {{ui:Pakua CSV}} kwenye ratiba ya vifaa | CSV ya vitu vilivyo kwenye orodha, iitwayo "*jina la mchoro* equipment.csv" | Folda ya upakuaji ya kivinjari chako |

Mambo mengine huhifadhiwa mahali yanapotengenezwa, kila moja kwenye mada yake: {{ui:USD}} ([Hamisha modeli kama USD](topic:usd)), {{ui:Collada}} (.dae na .kmz ya Google Earth: [Hamisha modeli kama Collada au kwa Google Earth](topic:collada)), .glb ya {{ui:Kwa kutoa picha}}, picha zilizotengenezwa, karatasi na mipango kama PDF, ratiba na orodha kama CSV, faili za BCF, lahajedwali ya COBie, faili za familia, na skani zilizosajiliwa kama LAS au E57. BimCraft haihifadhi DWG, DXF wala faili za mradi, na haibadilishi faili ulizofungua kamwe.

:::chromium
Chrome na Edge huhifadhi upakuaji kwenye folda iliyowekwa kwenye mipangilio yao, kwa kawaida Downloads. Ili kuulizwa wapi kuhifadhi kila faili, washa "Ask where to save each file before downloading" kwenye mipangilio ya upakuaji ya kivinjari.
:::

:::firefox
Firefox huhifadhi kwenye folda ya Downloads isipokuwa umeiweka kwenye "Always ask you where to save files" katika mipangilio yake.
:::

:::safari
Safari huhifadhi kwenye Downloads isipokuwa uchague folda nyingine chini ya **Safari > Settings > General > File download location**.
:::

## Kuhifadhi mara ya pili

Kila hifadhi hupakua modeli nzima pamoja na **kila mabadiliko tangu ulipoifungua**, si mabadiliko yaliyofanywa tu baada ya hifadhi ya mwisho. Orodha ya {{ui:Mabadiliko}} huanza upya tupu baada ya kila hifadhi, kwa hiyo huwezi kutendua zaidi ya hifadhi. Ili kuanza upya kutoka asili, fungua faili ya asili tena.

## Faili kubwa na kumbukumbu

- **IFC** husomwa kikamilifu kwenye kumbukumbu ya kichupo, na jiometria ya 3D huchukua kumbukumbu zaidi juu yake. Modeli ya megabaiti mia chache inaweza kuwa nyingi kwa kompyuta ndogo. Zaidi ya pembetatu milioni 1.5, kingo huzimwa ili kuokoa kumbukumbu ("Kingo zimezimwa kwa modeli kubwa sana").
- **Faili za mradi** hazisomwi kikamilifu. BimCraft husoma sehemu ndogo tu inazohitaji, takriban KB 40 hadi 100 bila kujali faili ni kubwa kiasi gani, kwa hiyo modeli kuu ya MB 500 kwenye diski ya mtandao hufunguka ndani ya muda mfupi.
- **DWG na DXF** husomwa kikamilifu. Mchoro mkubwa sana huonyesha "Mchoro huu ni mkubwa sana; sehemu yake tu ndiyo inayoonyeshwa."
- **Folda** zenye hadi faili 20,000 hufunguka. Ni kilobaiti chache tu ambazo kila kadi ya modeli inahitaji ndizo zinazosomwa.

Tazama [Vivinjari, vifaa na kumbukumbu](topic:platforms) kwa zaidi.

## Mtandaoni na nje ya mtandao

Kufungua faili hakuhitaji intaneti kamwe. Kisomaji kimoja hupakia kutoka tovuti mara ya kwanza unapokihitaji: injini ya IFC, mara ya kwanza unapofungua modeli ya IFC ("Inaanzisha injini ya IFC…"). Visomaji vya DWG na DXF ni sehemu ya programu.

:::offline
Uko nje ya mtandao. Ikiwa kitufe cha upau wa programu kinasema {{ui:Tayari kwa matumizi ya nje ya mtandao}}, kila muundo hufunguka kama kawaida. Ikiwa hakisemi hivyo, modeli ya IFC haiwezi kufunguka isipokuwa tayari ilifunguliwa kwenye kichupo hiki: unganisha tena kwanza. Tazama [Mtandaoni na nje ya mtandao](topic:online-offline).
:::

Ili kutumia BimCraft bila muunganisho, bofya {{ui:Hifadhi kwa matumizi ya nje ya mtandao}} kwenye upau wa programu ukiwa mtandaoni na usubiri {{ui:Tayari kwa matumizi ya nje ya mtandao}}. Nakala iliyohifadhiwa ina takriban MB 33; inajumuisha injini ya IFC, kwa hiyo modeli za IFC pia hufunguka nje ya mtandao. [Kufanya kazi nje ya mtandao](common:offline) inaeleza nakala zilizohifadhiwa kwa ujumla.

## Kuhifadhi kwenye wingu

Kuhifadhi kwenye wingu bado hakupatikani. Hifadhi nakala zako zilizohaririwa kwenye kompyuta yako mwenyewe au kwenye seva ya faili ya ofisi yako, kama faili nyingine yoyote. Tazama [Faili zako](common:your-files).
