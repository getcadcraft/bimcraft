---
title: Sehemu za paneli ya Sifa
summary: Kila sehemu kwenye paneli ya Sifa, na paneli za Faili, Mchoro na Folda, inamaanisha nini, na ni ipi unayoweza kubadilisha.
keywords: sifa, sehemu, sifa, globalid, guid, nakili, nakili thamani, nakili yote, csv, ubao wa kunakili, nambari ya serial, lebo, aina ya kitu, mstari, kitambulisho cha express, seti ya sifa, pset, kiasi, mpango wa muundo, paneli ya faili
from: fe55b435
---

## Kipengele cha IFC

Juu ya paneli ya {{ui:Sifa}} kuna aina ya kipengele bila kiambishi "Ifc" (kwa mfano "Door", "WallStandardCase", "FurnishingElement") na jina lake, au "Bila jina".

| Sehemu | Maana | Inaweza kuhaririwa |
|---|---|---|
| Jina | Jina la kipengele, mara nyingi jina la familia na aina kutoka kwa msafirishaji | Ndiyo |
| Aina | Jina la aina yake, pale kinapokuwa nayo | Hapana |
| Aina ya kitu | Maelezo huru ya aina ambayo baadhi ya wasafirishaji huyajaza | Ndiyo |
| Lebo | Lebo au alama ya kipengele; wasafirishaji wengi huandika kitambulisho cha kipengele hapa | Ndiyo |
| Maelezo | Maandishi huru | Ndiyo |
| GlobalId | Kitambulisho cha kudumu cha IFC cha herufi 22 cha kipengele, sawa katika kila usafirishaji wa kipengele hicho | Hapana |
| Mstari | Nambari ya mstari wa kipengele (`#1234`) kwenye faili hii ya IFC. Hubadilika kati ya usafirishaji | Hapana |

Chini huja **seti za sifa**, zikipangwa kwa jina:

- Kila seti hufunguka na kufungwa unapobofya jina lake. Tatu za kwanza zimefunguliwa.
- Seti yenye alama "(aina)" ni ya aina ya kipengele: "Sifa ya aina: mabadiliko hapa hutumika kwa kila kipengele cha aina hii."
- Seti za kiasi (urefu, maeneo, ujazo, idadi, uzito) ni za kusoma tu.
- Orodha na thamani zilizoorodheshwa zinaonyeshwa, za kusoma tu.
- Thamani za Ndiyo/Hapana zinaonyeshwa kama **Ndiyo** au **Hapana**.
- Nambari huzungushwa hadi desimali nne kwa maonyesho. Urefu (sifa ya urefu au urefu wa kiasi) huonyeshwa kwa {{ui:Vipimo}} vilivyochaguliwa kwenye upau wa zana, pamoja na alama ya kipimo kando yake, na unaweza kuandika thamani mpya katika kipimo hicho au kwa alama nyingine ya kipimo (2.4 m, 8'-0"): BimCraft huandika nambari ya faili yenyewe nyuma. Nambari nyingine huonyeshwa jinsi faili inavyozihifadhi.
- Thamani tupu huonyeshwa kama *tupu*. Thamani iliyohaririwa huwa nzito na ina upau wa buluu kando yake.

## Nakili thamani

Kila thamani kwenye {{ui:Sifa}} ina kitufe kidogo cha kunakili kando yake: bofya ili kuweka thamani hiyo kwenye ubao wa kunakili kama inavyoonekana, kwa mfano GlobalId, nambari ya serial au thamani yoyote ya seti ya sifa. Kunakili hakuanzi uhariri kamwe.

Juu kabisa, {{ui:Nakili yote}} hunakili kila thamani ya kipengele kama maandishi, seti kwa seti, na {{ui:Nakili kama CSV}} hunakili kama safu za kikundi, sifa na thamani za kubandika kwenye lahajedwali; thamani tupu huhifadhiwa ili kila sehemu iwe na safu. Hili linafanya kazi vivyo hivyo kwa kipengele cha modeli nyingine iliyo wazi; modeli kadhaa zikiwa wazi, CSV huanza na safu ya Modeli inayotaja faili yake.

## Paneli ya Faili (IFC)

| Sehemu | Maana |
|---|---|
| Faili, Ukubwa | Faili uliyoifungua |
| Mpango wa muundo | Toleo la IFC, kama IFC2X3 au IFC4 |
| Mradi | Jina la mradi na jina lake refu |
| Awamu | Awamu ya mradi, ikiwa msafirishaji aliiandika |
| Imesafirishwa kutoka | Programu iliyosafirisha, kutoka kichwa cha faili |
| Mwandishi | Mwandishi kwenye kichwa cha faili |
| Imesafirishwa | Tarehe na saa kwenye kichwa cha faili |
| Vipengele | Vipengele vingapi vyenye umbo vimechorwa |
| Pembetatu | Pembetatu ngapi maumbo yao hutengeneza; kipimo cha uzito wa modeli |

## Paneli ya Faili (mradi na familia)

| Sehemu | Maana |
|---|---|
| Aina | Mradi, Kiolezo cha mradi, Familia au Kiolezo cha familia |
| Imehifadhiwa katika | Toleo lililohifadhi faili mara ya mwisho |
| Ujenzi | Ujenzi kamili wa toleo hilo |
| Imesomwa | Kiasi gani cha faili BimCraft imesoma, kati ya ukubwa wake |

## Paneli ya Mchoro (DWG na DXF)

| Sehemu | Maana |
|---|---|
| Umbizo | Toleo ambalo mchoro ulihifadhiwa, pamoja na msimbo wake wa umbizo, kama AC1032 |
| Vipimo | Vitengo vya kuingiza vya mchoro, vikiwa vimewekwa |
| Vitu | Vitu vingapi vilisomwa |
| Tabaka | Tabaka ngapi |
| Karatasi | Karatasi ngapi (mipangilio), au Hakuna |
| Michoro iliyounganishwa | Michoro yake iliyounganishwa mingapi ilipatikana na kupakiwa |
| Vifaa | Vifaa vilivyowekewa lebo vingapi viko kwenye karatasi |

## Paneli ya Folda

| Sehemu | Maana |
|---|---|
| Folda, Faili, Ukubwa | Folda uliyoifungua, faili ngapi inashikilia na jumla ya ukubwa wake |
| Modeli | Faili za mradi na familia, kila moja na nakala zake rudufu zikihesabiwa mara moja |
| Michoro ya CAD, modeli za IFC | Kila moja kati ya hizo ngapi |
| Matatizo | Nakala ngapi za modeli hazijakamilika au haziwezi kusomwa, au Hakuna |
