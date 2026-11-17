---
title: Nukta za kuweka alama, na ukaguzi wa kilichojengwa
summary: Pa namba maeneo ambayo timu ya uwekaji alama huweka kutoka modeli iliyo wazi — vituo vya nguzo, ncha za kuta, bolti za nanga, vifuniko vya bomba, kipengele chochote unachochagua — viandike kwa total station, kisha usome nukta zilizopimwa na timu na uone kilichotoka.
keywords: nukta za upangaji, kuweka alama, weka alama, total station, upimaji, faili ya nukta, csv, txt, pnezd, penzd, xyz, kaskazini, mashariki, mwinuko, kilichojengwa, ukaguzi, uvumilivu, mkengeuko, bolti za nanga, vituo vya nguzo, ncha za kuta, vifuniko vya bomba, kuratibu za upimaji, ubadilishaji wa ramani
from: acea9606
---

Kichupo cha {{ui:Points}} upande wa kulia kinatengeneza nukta ambazo timu huweka eneoni kutoka modeli iliyo wazi, na kukagua nukta ambazo wanapima baadaye.

## Tengeneza nukta

1. Fungua modeli ya IFC na kichupo cha {{ui:Points}}.
2. Weka alama kwenye kinachowekwa: **vituo vya nguzo** (msingi wa mstari wa katikati wa kila nguzo), **ncha za kuta** (ncha zote mbili za mhimili wa kila ukuta, chini kabisa), **bolti za nanga**, **vifuniko vya bomba** (sleeve: vipengele vyenye jina au aina inayosema sleeve), na **vipengele vilivyochaguliwa** (kila kimoja kwenye nukta yake ya kuwekwa — vichague kwenye mwonekano kwanza).
3. Chagua nambari ya kwanza na kiambishi, kuratibu, vitengo, safu na faili:
   - **Model**: kuratibu za faili yenyewe. **Survey grid**: gridi ya ramani ya marejeo ya kijiografia ya modeli (inaonyeshwa tu IFC ikiwa na ubadilishaji wa ramani), kwa mita au kitengo unachochagua.
   - Safu **PNEZD** (nukta, kaskazini, mashariki, mwinuko, maelezo), **PENZD** au **XYZ**; **CSV** (koma) au **TXT** (tabu).
4. Bonyeza {{ui:Make points}}: orodha inaonyesha nukta, na mwonekano unazipaka bluu. {{ui:Download the points}} huandika faili.

Nukta huja kwa mpangilio uliowekwa — kwa aina, kisha kwa safu kwenye mpango — kwa hiyo kuzitengeneza tena kutoka modeli ile ile kunatoa namba zile zile. Faili ni ile ambayo CivilCraft hufungua na ambayo EXPORTPOINTS ya CadCraft huandika: nukta moja kwa mstari, desimali tatu, na maelezo kwenye nukuu pale yanapokuwa na koma.

## Kagua nukta zilizojengwa

Timu inapotuma kilichopimwa, chagua **uvumilivu** kwa milimita na jinsi ya kuoanisha nukta — kwa **namba ya nukta** (walizohifadhi namba zako) au kwa **risasi ya karibu zaidi** — kisha bonyeza {{ui:Read as-built points…}}. Soma faili kwa vitengo na kuratibu zile zile ulizoandika.

Kila nukta ya muundo sasa ni **ndani** ya uvumilivu, **nje** yake, au **haijapimwa**, na risasi yoyote ambayo hakuna aliyeiomba ni **ziada**. Jedwali linatoa tofauti kwa kitengo unachochagua kwenye upau wa zana, futi zikionyeshwa kama inchi za desimali (kilichojengwa minus muundo: mashariki, kaskazini, urefu, na umbali kwenye mpango). Mwonekano unapaka kila nukta kijani au nyekundu kwa mstari unaoelekea kwenye risasi, na kijivu ikiwa haikupimwa. {{ui:Report (CSV)}} huandika ulinganisho wote.

Hakuna hapa kinachobadilisha modeli. Bado hazijatengenezwa: kuweka alama kutoka kingo za bamba, makutano ya gridi au fursa zilizotengenezwa kwa ajili yako, na kutuma nukta moja kwa moja kwenye chombo cha kupimia — tumia faili.
