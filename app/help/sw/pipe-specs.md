---
title: Vipimo vya mabomba, vali, vidhibiti vya hewa na familia za watengenezaji
summary: Sanidi vipimo vyako vya mabomba (jedwali la ukubwa lenye nyenzo, aina ya kiungio na ukwaru), vinavyohifadhiwa kwenye faili la modeli; weka vali, chujio na vidhibiti vya hewa kwenye njia; na leta modeli ya vali au kifaa cha mtengenezaji kama familia yenye bandari za kuunganisha.
keywords: vipimo vya bomba, pipe spec, pipe specs, piping specification, darasa la bomba, bomba maalum, jedwali la ukubwa, tube, bomba la usafi, chuma cha pua, ratiba, kipenyo cha nje, unene wa ukuta, kipenyo cha ndani, ukwaru, kiwango cha shinikizo, csv, json, leta, hamisha, lahajedwali, kiwango, bpe, din, en 10357, en 10255, vali, valves, vali ya kipepeo, vali ya kusawazisha, vali ya udhibiti, chujio, kidhibiti cha hewa, kidhibiti cha hewa cha ujazo, kidhibiti cha moto, oem, mtengenezaji, mtengenezaji, familia, familia, bandari, kuunganisha, step, obj, gltf, ifc, radiator, convector, panel heater, air handler, diffuser, grille
from: bc2f7c4e
---

## Utakachofanya

Chora bomba kwa vipimo vyako badala ya jedwali zilizojengewa ndani za chuma, shaba na plastiki; weka vali na vidhibiti vya hewa kwenye njia; na weka modeli ya mtengenezaji yenye bandari ambazo mabomba huunganishwa nazo.

:::note
Ni msaada wa kuchora na kuratibu. Kipimo cha bomba kina namba unazoandika au kuleta: kagua kila jedwali dhidi ya kiwango cha mradi wako. Vali, chujio na vidhibiti vya hewa vilivyojengwa ndani ni maumbo ya kimpango yenye ukubwa kulingana na njia, si urefu wa mtengenezaji au wa kiwango cha vali.
:::

## Sanidi kipimo cha bomba

1. Washa {{ui:Draw}}, fungua {{ui:Build}} na uchague {{ui:Pipe specs}}. Kitufe hicho hicho kipo kwenye upau wa zana ya Bomba.
2. Chagua {{ui:New}}, au anza kutoka faili, kubandika, au kipimo cha kuanzia (hapa chini).
3. Andika jina lake, kiwango au marejeo linalofuata, nyenzo na aina ya ncha au kiungio.
4. Andika safu moja kwa kila ukubwa: jina la ukubwa, kipenyo cha nje na ukuta, kwa milimita. Andika kipenyo cha ndani badala ya ukuta ikiwa hicho ndicho ulicho nacho: kingine kitajazwa. DN, kiwango cha shinikizo na uzito ni hiari.
5. Hiari: ukwaru kwa milimita (hesabu ya kushuka kwa shinikizo inaitumia), unene wa insulation ambao njia mpya huanza nao, radius ya kiwiko kama kipengele cha kipenyo cha nje, kama kipimo kina tii na vipunguzi, na rangi yake katika 3D.
6. Tia tiki huduma ambazo njia mpya zinapaswa kuanza katika kipimo hiki, kwa mfano maji baridi.
7. Chagua {{ui:Save in the model}}.

Vipimo vinahifadhiwa kwenye faili la modeli. Yeyote anayefungua faili anavipata, na Tendua huondoa mabadiliko.

Kipimo, au mojawapo ya ukubwa wake, hakiwezi kufutwa wakati njia imechorwa ndani yake. Kubadilisha namba za ukubwa huchora upya njia za ukubwa huo.

## Tumia kipimo tena kwenye modeli nyingine

- {{ui:Export .json}} huhifadhi kipimo kilichochaguliwa kama faili dogo; {{ui:Export all}} huhifadhi vipimo vyote vya modeli. {{ui:Import a file}} vinasomwa tena kutoka hapo.
- {{ui:Export .csv}} huhifadhi jedwali la ukubwa kwa lahajedwali. {{ui:Import a file}} pia husoma `.csv`.
- {{ui:Paste rows}} hupokea jedwali lililonakiliwa kutoka lahajedwali. Safu ya kwanza inataja safuwima: `Size`, `OD` na `Wall` (au `ID`), na hiari `DN`, `Pressure`, `Weight`. Safu moja kwa kila ukubwa. Namba ni milimita isipokuwa uchague inchi au seli iandike kipimo chake (`0.065 in`).

## Vipimo vya kuanzia

{{ui:Add a starter spec}} huongeza mojawapo ya hizi kwenye modeli yako kama nakala unayoweza kuhariri:

| Kiolezo | Ukubwa |
|---|---|
| ASME BPE tube | 1/4" hadi 6" |
| EN 10357 series A tube (DIN 11850 row 2) | DN10 hadi DN200 |
| EN 10255 steel tube, medium series | DN15 hadi DN150 |
| EN 10255 steel tube, heavy series | DN15 hadi DN125 |

Jedwali hizi ni kipenyo cha nje na kuta ambavyo kurasa mbili au zaidi za wasambazaji zilizochapishwa zinaonyesha kwa kiwango husika na zinakubaliana. Hazikutolewa moja kwa moja kutoka kwenye viwango wenyewe. Ukubwa ambao ukurasa mmoja tu ulitoa haujumuishwi. Kila kiolezo kinaonyesha kurasa zake za chanzo na kimewekwa alama "check against your project standard". Ukwaru, kiwango cha shinikizo na uzito havijatolewa.

## Chora njia kwenye kipimo

1. Chagua {{ui:Pipe}}. Huduma uliyotia tiki kwenye kipimo huanza ndani yake. Kwa njia nyingine yoyote, chagua kipimo kwenye orodha ya nyenzo: vipimo vimeorodheshwa baada ya nyenzo zilizojengewa ndani kama "Spec: jina".
2. Orodha ya ukubwa sasa ina ukubwa wa kipimo hicho tu. Chagua mmoja na chora njia.

Ili kuhamisha njia hadi kipimo baadaye, ichague na ubadilishe **Material** kwenye Sifa. Ukubwa wake utakuwa ukubwa wa karibu zaidi wa kipimo kwa kipenyo cha nje.

Kwenye faili la IFC, bomba hubeba jina la kipimo, kiwango, nyenzo, kiungio na vipimo (`CadCraft_PipeSpec` na `Pset_PipeSegmentTypeCommon`, kwenye bomba na aina yake).

Hesabu za ukubwa na kushuka kwa shinikizo husoma kipenyo cha ndani cha kipimo. Kipimo kikiwa na ukwaru, msuguano wa njia hukokotolewa nao (Darcy-Weisbach); bila hilo, chaguo-msingi la kawaida la hesabu hutumika.

## Vali, chujio na vidhibiti vya hewa

1. Chagua {{ui:Valve}} na uchague aina kwenye upau: vali ya lango, mpira, kipepeo, globe, ukaguzi, kusawazisha au udhibiti, au chujio, kwa mabomba; kidhibiti cha ujazo au kidhibiti cha moto, kwa mifereji.
2. Bofya kwenye njia inakokwenda. Njia inakatwa kuzunguka hiyo na pande zote mbili zinabaki zimeunganishwa. Inachukua ukubwa wa njia na kusogea nayo.

Sifa za njia zinaorodhesha kila moja kwa {{ui:Remove}}; njia inafunga tena.

Hesabu ya kushuka kwa shinikizo inahesabu hasara ya kiungio kwa vali za lango, mpira, globe na ukaguzi tu. Aina nyingine, vidhibiti vya hewa na familia za watengenezaji hazina hasara hapo: zingatia katika ukaguzi wako mwenyewe. Zinahesabiwa kwenye jedwali la **Fittings and valves** na kwenye ukadiriaji wa kiasi, na zinaandikwa kwenye IFC kama vali, chujio (chujio) na vidhibiti vya hewa vyenye bandari mbili zilizounganishwa.

## Modeli ya mtengenezaji kama familia

1. Fungua {{ui:Build}} na uchague {{ui:Families}}, kisha {{ui:Import a model}}. Faili za IFC, STEP, OBJ, STL, glTF na kipengee cha Maktaba husomwa. Kwa OBJ na STL, weka kwanza vitengo vya faili na mhimili wa juu.
2. Kwenye kisanduku cha bandari, andika jina, mtengenezaji na namba ya modeli.
3. Chagua kama inakwenda **On a run** (vali, chujio au kidhibiti cha hewa) au ni **Equipment**, na imeandikwa kama nini.
4. Ipe bandari zake. Kila moja ina jina, bomba au mfereji, huduma, ukubwa kwa milimita (kipenyo cha nje cha bomba), ukubwa wa kawaida kama kipimo chako kinavyoutaja, aina ya ncha, nafasi yake na mwelekeo wake. {{ui:On a face}} huweka bandari katikati ya uso wa kisanduku cha modeli. Mtazamo mdogo wa juu unaonyesha bandari.
5. Chagua {{ui:Save the family in the model}}.

Familia inayokwenda kwenye njia inahitaji bandari mbili hasa zinazoangalia mbali kutoka kwa nyingine kwenye mstari mmoja. Ichague kwenye orodha ya zana ya Vali na ubofye njia: itawekwa kwa urefu wake yenyewe na mabomba yataunganika kwenye bandari zake.

Familia haiwahi kunyooshwa. Bandari zake zisipokuwa ukubwa wa njia, utaarifiwa unapoiweka, na {{ui:Check connections}} inaiorodhesha.

Familia ya vifaa huwekwa kwa {{ui:Equipment}}, aina **Manufacturer's family**. Mabomba na mifereji hujikita kwenye bandari zake.

{{ui:Download as a Library item}} huhifadhi familia yenye bandari zake kama faili unaloweza kuwasilisha kwenye Maktaba.

## Radiator na convector

{{ui:Equipment}} pia ina **Radiator** na **Convector / panel heater**: miili ya jumla yenye muunganisho wa mtiririko na wa kurudi kwa maji ya kupasha joto. Ona [Vifaa vya MEP vyenye bandari](topic:mep-equipment).
