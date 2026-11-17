---
title: Weka vifaa na samani kutoka maktaba
summary: Tafuta kipengee kwenye Maktaba, faili au mchoro uliofunguliwa, kiweke kwenye ghorofa ya modeli ya IFC kwa onyesho la kivuli, kigeuze, kikishe kwenye ukuta, kisha uhifadhi.
keywords: sogeza, zungusha, geuza, buruta, maktaba, librarycraft, weka, ingiza, vifaa, samani, bloku, familia, kipengee, katalogi, maudhui, kcl, csv, gltf, obj, rfa, dwg, aina ya IFC
from: 3dad5d4b
---

## Utakachofanya

Weka kipengee cha maktaba kwenye modeli ya IFC: sinki, meza ya kazi, kiti. BimCraft inakiandika kama kipengele halisi cha IFC chenye aina, kwa hivyo kila nakala ya kipengee kimoja inashiriki seti moja ya jiometri, na data yake, namba ya kipengee na leseni vinasafiri nayo.

## Hatua

1. Fungua modeli ya IFC.
2. Bofya kichupo cha {{ui:Library}} karibu na {{ui:Properties}} upande wa kulia, au {{ui:Library}} kwenye upau wa zana juu ya modeli.
3. Chagua chanzo:
   - **Built-in symbols**: alama za kawaida za mpango wa mabomba zilizojumuishwa na BimCraft chini ya Apache-2.0, zinapatikana nje ya mtandao. Kagua vipimo vyake kabla ya ujenzi. Kwa alama za mpango wa umeme na vifaa vya umeme vya IFC, tumia **Build › Electrical**.
   - **Library**: Maktaba ya CadCraft kwenye tovuti hii. Vipengee vya umma havihitaji kuingia.
   - **This file**: vizuizi vya faili ya DWG au DXF iliyofunguliwa. Kizuizi chenye hali za kuonekana hutolewa mara moja kwa kila hali, kikiitwa "Sink: Double bowl", kila kimoja kikichorwa na vitu vya hali hiyo pekee.
   - **Files…**: faili la DWG, DXF, IFC, glTF/GLB, OBJ, RFA au CSV kwenye kompyuta yako. Linasomwa kwenye kichupo hiki; hakuna kinachopakiwa.
   - **Other feeds**: maktaba nyingine inayotumia muundo ule ule wa mlisho. Ongeza anwani yake mara moja; inahifadhiwa kwenye kivinjari hiki.
4. Tafuta au chagua kategoria, kisha bofya kadi. Kadi inaonyesha onyesho la mpango, jina, mtengenezaji na modeli, leseni na toleo.
5. Bofya {{ui:Place in plan}} (kwenye mwonekano wa Mpango) au {{ui:Place in model}} (kwenye mwonekano wa 3D). Kwenye Split, ambapo mpango na 3D zote zinaonekana, kitufe ni kitufe kilichogawanywa: kitendo chake kikuu ni {{ui:Place in plan}}, na mshale upande wake wa kulia unafungua menyu yenye {{ui:Place in model}}. Au buruta kadi, au picha kwenye maelezo ya kipengee, kwenye mpango au mwonekano wa 3D: kipengee kinawekwa mahali unapoachia. Kwa kalamu au kidole, bonyeza na ushikilie kadi kwa muda, kisha buruta.
6. Chagua ghorofa kwenye upau wa kuweka. Kwenye mwonekano wa 3D, ghorofa zilizo juu yake zinafichwa unapoweka na mwonekano unageuka juu; kwenye mpango, mpango tayari unaonyesha ghorofa hiyo. Kuchagua {{ui:Place in model}} kutoka mpango pekee kunaleta mwonekano wa 3D pembeni yake.
7. Sogeza kielekezi juu ya modeli: kisanduku chenye uwazi kinaonyesha mahali kipengee kinakwenda.
8. Bonyeza {{key:R}} kukizungusha kwa 90°. Bonyeza {{key:Tab}} (au {{ui:Wall snap}}) kuweka mgongo wake kwenye ukuta ulio karibu zaidi, ukitazama chumba.
9. Bofya kukiweka. Au andika nafasi kwenye **X, Y (mm)**, kwa mfano `1200, 3400`, kisha bonyeza {{key:Enter}}.

Taa au chochote kilichoning'inizwa kutoka juu: weka **Mount** kuwa **At the ceiling**. Juu ya kipengee kisha inakaa chini ya dari juu ya mahali hapo (au kwenye urefu wa ngazi pale ambapo hakuna dari). Ukiwa na mpango wa dari kwenye mwonekano wa mpango, **Mount** huanza kwenye **At the ceiling**.
10. Jibu swali moja: **item number** (namba inayofuata isiyotumika inajazwa), kiasi na maelezo. Bonyeza {{key:Enter}}.
11. Weka zaidi, au bonyeza {{key:Esc}} kusimama.
12. Bofya {{ui:Save as IFC}} kupakua nakala iliyohaririwa.

## Mpango au modeli

Kitufe cha kuweka cha Maktaba kinafuata mwonekano uliopo, na kinabadilika mara tu unapobadilisha mwonekano (vitufe vya {{ui:Plan}}, {{ui:Split}} na {{ui:3D}}, kibodi, kufungua faili). Mpango unaonyesha kitufe kimoja, {{ui:Place in plan}}; 3D unaonyesha kitufe kimoja, {{ui:Place in model}}; Split unaonyesha kitufe kilichogawanywa, chenye {{ui:Place in plan}} kama kitendo kikuu na {{ui:Place in model}} kwenye menyu yake. Njia zote mbili zinatumia upau ule ule wa kuweka na kuandika kipengele kile kile cha IFC: kielekezi kinafanya kazi kwenye mwonekano wa mpango kwa moja, na kwenye mwonekano wa 3D kwa nyingine. Bonyeza {{key:Esc}} wakati wowote kusimama.

Kuburuta kadi hakina kitufe chake: kitufe kilichogawanywa, au kitufe cha kawaida, hufanya kitu kile kile kwa kibodi.

## Sogeza au zungusha kipengee kilichowekwa

Kwenye {{ui:Draw}}, chagua kipengee kwenye mpango. Mshiko wa mraba unaonekana kwenye sehemu yake ya kuingizia, na mshiko wa duara pembeni yake.

- Buruta kipengee, au mshiko wake wa mraba, kukisogeza. Kinajikita kama zana ya Ukuta (ncha na nyuso za kuta); {{key:Shift}} kinakiweka mraba kwa mahali kilipokuwa.
- Buruta mshiko wa duara kukigeuza kwa hatua za 15°. Shikilia {{key:Shift}} kwa hatua za 1°.
- Bonyeza {{key:R}} kukizungusha kwa 90°.
- Kwenye **Properties** (pia kwenye mwonekano wa 3D), andika **X**, **Y** na **Rotation (°)**, au bofya **Turn 90°**.

Kila mwendo ni hatua moja ya kutendua na unasafiri kwenye Live TeamWork. Kipengee kinabaki na namba yake ya kipengee, data yake ya maktaba na urefu wake juu ya ngazi. Bado hakijajengwa: kukiburuta kwenye mwonekano wa 3D.

## Unachopaswa kuona

- Kipengee kwenye modeli, kimechaguliwa, pamoja na sifa zake upande wa kulia: kisanduku cha **Library item** chenye leseni na sifa yake, na seti `CadCraft_Placement`, `CadCraft_LibraryItem`, `CadCraft_Equipment` na, kwa vipengee kutoka michoro yenye lebo, `CadCraft_SourceAttributes`.
- "Placed: *item* (item *n*)" kwenye orodha ya mabadiliko. {{key:Mod+Z}} inakitendua.
- Mstari wa hali: "Placed *item* as item *n*."

## Vizuri kujua

- Baadhi ya vipengee vinakuja kwa ukubwa au chaguo kadhaa: kadi kisha ina chaguo la **Variant**, na uliyochagua ndiyo iliyowekwa. Ona [Weka na ubadilishe kipengee cha maktaba chenye lahaja](topic:library-variants).
- Kipengee kisicho na mwili wa 3D (alama ya 2D) kinawekwa kwa kisanduku cha kusimama; unakipa urefu wake unapoulizwa.
- Zaidi ya hayo hayo: chagua kipengee kilichowekwa na utumie {{ui:Copy}} na {{ui:Paste}}, au {{key:Mod+D}}. Ona [Nakili, bandika na nakili kipengee cha maktaba](topic:copy-paste).
- Ili kila uwekaji uanze na wall snap imewashwa, washa **Start with wall snap on** kwenye [Mipangilio ya BimCraft](topic:settings).
- Urefu hubadilishwa kuwa vitengo vya modeli yenyewe, vyovyote vilivyo.
- **Entourage** (miti, vichaka, watu, magari) pia iko kwenye maktaba: tafuta "tree", "person" au "car". Hivi vinachorwa na CadCraft (CC0) na hubaki na rangi zake vikiwekwa (shina ni kahawia, majani ni kijani, madirisha ya gari ni ya uwazi), ndani ya BimCraft na kwenye programu nyingine za BIM. Vinaonekana kwenye [picha zilizotolewa](topic:render).
- Kwenye faili la IFC2X3 mwili huandikwa kama kigumu chenye nyuso; kwenye IFC4 kama seti ya nyuso za pembetatu. Yote mawili hufunguka kwenye zana nyingine za IFC.
- Mchoro (DWG au DXF) hauwezi kuhifadhiwa hapa, kwa hivyo vipengee huwekwa kwenye modeli za IFC pekee. Tumia **This file** kwenye mchoro kuona vizuizi vyake vingekuwa nini.

## Vipengee kwa lugha yako

Kipengee kinaweza kubeba jina, maelezo na aina yake kwa lugha nyingine. Kikiwa nazo kwa lugha ambayo BimCraft imewekwa (Mipangilio › Jumla › Lugha), ukurasa wa kipengee unaonyesha hizo, pamoja na jina alilopa mtengenezaji chini yake, na **Place** huandika jina katika lugha yako kwenye modeli, ili jedwali la {{ui:Equipment}} lilioorodheshe hivyo. Kipengee kinabaki kuwa kipengee kile kile: kuangalia masasisho na kubadilisha kunafuata kipengee chenyewe, si jina lake. Vipengee visivyo na tafsiri vinabaki na maneno yao.

## Makosa ya kawaida

- **Kitufe cha kuweka hakipo.** Hakuna modeli ya IFC iliyofunguliwa. Fungua moja kwanza.
- **Onyesho la kivuli halifuati kielekezi.** Kielekezi kiko nje ya eneo la modeli, au ndege ya ghorofa iko nje ya mwonekano. Bofya {{ui:Top}}.
- **{{ui:Wall snap}} inasema hakuna kuta.** Ghorofa haina kuta kwenye IFC (baadhi ya mauzo huweka kuta kwenye ghorofa nyingine). Chagua ghorofa hiyo, au andika X na Y.
- **Vipengee vya faili ni vya ukubwa mbaya.** Faili halina vitengo au linasema vitengo visivyo sahihi. Kwenye {{ui:Files…}} chagua vitengo na usome tena.

:::tip
Kuweka kipengee kile kile mara mbili kunashiriki aina moja ya IFC, kwa hivyo modeli yenye viti arobaini inahifadhi kiti mara moja.
:::
