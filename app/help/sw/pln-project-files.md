---
title: Fungua faili za mradi za .pln na .pla
summary: BimCraft hufanya nini na faili za .pln, .pla, .tpl na .bpn kwa sasa, na jinsi ya kuhamisha IFC na DWG kutoka kwazo ili modeli na michoro vifunguke hapa.
keywords: pln, pla, tpl, bpn, faili ya mradi, kumbukumbu, kiolezo, nakala rudufu, hamisha ifc, hamisha dwg, mtafsiri, kanda, mipangilio ya karatasi
from: 41fb921d
---

## Utakachofanya

Pata mradi uliohifadhiwa kama `.pln` (mradi), `.pla` (kumbukumbu pamoja na maktaba yake), `.tpl` (kiolezo) au `.bpn` (nakala rudufu) kwenye BimCraft. Hizi ni faili za Archicad zenyewe.

## Kinachofunguka leo

- **Faili za mradi zenyewe bado hazifunguki.** Muundo wake haujachapishwa, na BimCraft bado haisomi. Unapojaribu kufungua moja, BimCraft inasema hivyo na kuelekeza hapa.
- **BimCraft huangalia baiti za mwanzo za faili.** Miradi ya Archicad kuanzia toleo la 17 huanza na saini hiyo fupi hiyo hiyo, kwa hiyo BimCraft inaweza kukuambia kwa uhakika kwamba faili ni mradi wa Archicad. Faili yenye jina la Archicad isiyoanza hivyo huenda imebadilishwa jina, imeharibika, au inatoka toleo la zamani. Saini haitofautishi mradi, kumbukumbu na kiolezo.
- **Usafirishaji wa IFC unafunguka kikamilifu**: modeli kwenye 3D, ghorofa, kanda kama nafasi, data ya vipengele, seti za sifa na uainishaji, pamoja na zana zote za BimCraft.
- **Usafirishaji wa DWG unafunguka** kwenye mwonekano wa 2D, pamoja na tabaka na mipangilio yake, na kwenye {{ui:3D}}. Ili kuuhariri, tumia {{ui:Hariri katika CadCraft}}.

Au leta mradi mzima kama zip moja, pamoja na mionekano, mipangilio na vikundi vya sifa: tazama [Fungua kifurushi cha mradi](topic:open-project-bundle).

## Hamisha IFC (modeli)

1. Fungua mradi kwenye Archicad.
2. Chagua **File > Save As**, kisha chagua **IFC** kama aina ya faili.
3. Chagua mtafsiri wa IFC (jina la Archicad kwa seti ya mipangilio ya usafirishaji wa IFC). Ile ya **IFC4 Reference View** au **IFC2X3 Coordination View 2.0** inafaa BimCraft. IFC4X3 nayo inafunguka.
4. Chagua kitakachohamishwa: mradi mzima, au vipengele vinavyoonekana tu kwenye ghorofa unazotazama.
5. Hifadhi, kisha bofya {{ui:Chagua faili}} kwenye BimCraft na uchague faili ya `.ifc`.

Kagua mambo haya kwenye mipangilio ya mtafsiri kabla ya kuhamisha:

- **Kanda**: zihamishe, ili vyumba vifike kama nafasi. Bofya {{ui:Nafasi}} kwenye BimCraft ili kuziona.
- **Sifa na uainishaji**: zihamishe, ili zionekane kwenye {{ui:Sifa}} na ziweze kutumika kwenye {{ui:Tafuta}}, {{ui:Rangi}} na {{ui:Jumla za kiasi}}.
- **`.ifc` tupu**, si `.ifczip` wala `.ifcxml`. BimCraft hufungua `.ifc` tupu pekee.

## Hamisha DWG (michoro)

1. Fungua mpango, sehemu au mpangilio unaotaka.
2. Chagua **File > Save As**, kisha chagua **DWG** kama aina ya faili.
3. Chagua mtafsiri wa DXF-DWG, kisha hifadhi.
4. Kwa seti nzima ya karatasi, hifadhi mipangilio kutoka Layout Book, au chapisha kama DWG.
5. Fungua `.dwg` kwenye BimCraft. Michoro iliyounganishwa na usafirishaji hufunguka nayo ikiwa iko kwenye folda moja; tazama [Michoro na picha zilizounganishwa](topic:dwg-linked-files).

## Utatuzi wa matatizo

- **"… ni mradi wa Archicad: baiti zake za mwanzo zinasema hivyo."** Hamisha IFC au DWG kama ilivyo hapo juu, kisha ufungue faili hiyo.
- **"… imetajwa kama faili ya Archicad lakini haianzi kama moja."** Angalia ilikotoka: inaweza kuwa aina nyingine ya faili yenye jina jipya (jaribu kuifungua kwa kiendelezi chake halisi), nakala isiyokamilika, au mradi kutoka toleo kabla ya 17. Ifungue kwenye Archicad ikiwezekana, kisha uhamishe IFC au DWG.
- **Modeli inafunguka bila vyumba.** Kanda hazikuhamishwa.Ziwashe kwenye mtafsiri wa IFC kisha uhamishe tena.
- **Mashimo hayajakatwa.** BimCraft inasema hivyo chini ya **Bado hakijachorwa** kwenye paneli ya {{ui:Faili}}. Hamisha tena; likibaki, fungua modeli kwenye programu iliyoitengeneza na uangalie mashimo huko.
- **Maandishi kwenye DWG yanaonekana tofauti.** Usafirishaji unaweza kuhifadhi fonti ambazo BimCraft haina; BimCraft huchora maandishi kwa fonti rahisi ya sans-serif.

Tazama pia [Pata faili ya mradi kwenye 3D kupitia IFC](topic:rvt-to-ifc) na [Kile BimCraft inasoma kutoka kila muundo](topic:file-formats).
