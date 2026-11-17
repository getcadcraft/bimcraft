---
title: Weka na badilisha kipengee cha maktaba chenye matoleo
summary: Baadhi ya vipengee vya maktaba vinakuja kwa ukubwa au chaguo kadhaa. Chagua toleo kabla ya kuweka, ona toleo gani kipengee kilichowekwa ni, kibadilishe kwa toleo jingine kwa bofya moja, na uhifadhi wakati kipengee kinasasishwa.
keywords: toleo, matoleo, ukubwa, chaguo, mpangilio, maktaba, librarycraft, weka, badilisha, configurator, familia, aina, sasisha, bandari
from: c05f0af3
---

## Utakachofanya

Weka kipengee cha maktaba kwa ukubwa au chaguo unalohitaji, na ubadili mawazo baadaye bila kukiweka tena. Kipengee chenye matoleo ni kipengee kimoja kwenye maktaba (jina moja, leseni moja, toleo moja) chenye jedwali la matoleo yake: kwa mfano sahani ya kufunga katika Ndogo, Wastani na Kubwa, au sahani ile ile isiyo na matundu.

## Chagua toleo na uweke

1. Fungua kichupo cha {{ui:Library}} na ubofye kadi ya kipengee.
2. Chini ya jina, chaguo la {{ui:Variant}} linaorodhesha kila toleo pamoja na ukubwa wake. Chaguo-msingi la kipengee linachaguliwa kwanza.
3. Chagua moja. Mpango, ukubwa na safu ya mwili wa 3D vinafuata chaguo lako.
4. Bofya {{ui:Place in plan}} (au {{ui:Place in model}} kwenye mwonekano wa 3D) na uweke kama kipengee kingine chochote: angalia [Weka vifaa na samani kutoka maktaba](topic:place-from-library).

Kipengele kilichowekwa kinapewa jina la kipengee na toleo lake, kwa mfano *Mounting plate — Large*, ili jedwali la {{ui:Equipment}} na mti vitofautishe. Kila toleo ni aina yake ya IFC: kuweka toleo lilelile mara mbili kunashiriki aina moja, toleo tofauti linapata lake.

## Ona toleo gani kipengee kilichowekwa ni

Chagua kipengele. Kwenye {{ui:Properties}}, kisanduku cha **Library item** kina mstari wa **Variant**. IFC inaweka hilo kwenye `CadCraft_LibraryItem`: `Variant` (kitambulisho cha toleo), `VariantName` na `VariantValues` (thamani za chaguo, kama maandishi), ili programu nyingine ziweze kulisoma.

## Badilisha kuwa toleo jingine

1. Chagua kipengee kilichowekwa na ubofye {{ui:Swap item…}} kwenye kisanduku cha **Library item**. Kichupo cha {{ui:Library}} kinafunguka.
2. Juu, **Other variants of** *kipengee* inaorodhesha kila toleo pamoja na ukubwa wake. Lililowekwa limewekwa alama na haliwezi kuchaguliwa.
3. Bofya {{ui:Swap to …}} kwenye toleo unalotaka.

Kipengele kinabaki mahali pake, zamu yake, ghorofa yake, nambari ya kipengee, kiasi na maelezo; aina yake, umbo na data vinabadilika kuwa toleo jingine. {{key:Mod+Z}} inarudisha la kwanza. Bado unaweza kuchagua kipengee kingine chochote kutoka orodha iliyo chini badala yake, kama hapo awali: angalia [Badilisha kipengee kilichowekwa, na sasisha vipengee kutoka maktaba](topic:swap-and-update-library-items).

## Nakili, bandika na masasisho

- Nakala ya toleo lililowekwa ni toleo lilelile: kwenye modeli hii, na kwenye modeli nyingine iliyofunguliwa kwenye kichupo kile kile cha kivinjari, kupitia Nakili na Bandika.
- **Masasisho** yanahifadhi toleo: ikiwa toleo jipya la kipengee bado lina toleo hilo, uwekaji unakuwa toleo hilo la toleo jipya. Ikiwa toleo jipya halina tena, uwekaji unachukua toleo chaguo-msingi la kipengee.

## Mambo ya kujua

- Vipengee vingine tu vya maktaba vina matoleo. Kadi hazisemi hivyo; utaona chaguo la {{ui:Variant}} ukifungua moja.
- Kipengee kinaweza kuorodhesha **bandari** (sehemu za kuunganisha za mabomba na mifereji) kwa kila toleo. Kichupo cha Maktaba kinaonyesha toleo lina ngapi. Hazijaandikwa kwenye IFC unapoweka kipengee kutoka kichupo cha Maktaba bado.
- Toleo lisilo na mwili wa 3D linawekwa kwa kisanduku cha kusimama, kama alama yoyote ya 2D.
- Ukubwa kwenye chaguo uko kwa milimita, kama maktaba inavyoziandika.
