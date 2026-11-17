---
title: Weka lebo kwenye vipengele na panga jedwali kwa lebo
summary: Bainisha lebo zako mwenyewe (jina, aina, thamani zinazoruhusiwa, madarasa), weka lebo kwa vipengele vingi kwa wakati mmoja, na tengeneza jedwali ambalo safu, vichujio na vikundi vyake vinasoma lebo. Lebo zinahifadhiwa kwenye IFC.
keywords: lebo, tags, tag, kuweka lebo, tagging, sifa maalum, custom properties, vigezo, parameters, vigezo vilivyoshirikiwa, shared parameters, seti ya sifa, property set, pset, jedwali, schedule, kichujio, filter, panga kwa, group by, umaliziaji, finish, ukadiriaji wa moto, fire rating, uhariri wa wingi, bulk edit, csv
from: 9cc7c90d
---

## Utakachofanya

Lebo ni sifa yako mwenyewe, kama *Umaliziaji* au *Ukadiriaji wa moto*. Unaifafanua mara moja kwa mradi, unaiweka kwa vipengele vingi kwa wakati mmoja, na kila jedwali katika BimCraft linaweza kuisoma: jedwali la lebo hapa, {{ui:Kiasi}}, Tafuta, Rangi kwa sifa na [Hati kutoka kwenye modeli](topic:documents-from-the-model).

## Hatua

1. Fungua modeli ya IFC, au anza jengo jipya.
2. Kwenye paneli ya kushoto, chini ya {{ui:Kiasi}}, fungua {{ui:Lebo}}.
3. Bofya {{ui:Ongeza lebo}}. Ipe jina, chagua aina yake, na ukipenda orodhesha thamani zinazoruhusiwa (kwa koma) na madarasa inayohusu (`IfcDoor`, `IfcWall` …). Bofya {{ui:Ongeza lebo}}.
4. Chagua vipengele kwenye modeli (Tafuta inasaidia: chagua milango yote mara moja).
5. Chini ya {{ui:Weka lebo kwenye uteuzi}}, chagua au andika thamani kwa kila lebo unayotaka kuweka, acha nyingine kama zilivyo, kisha ubofye {{ui:Tumia kwa … vipengele vilivyochaguliwa}}.
6. Chini ya {{ui:Jedwali la lebo}}, weka alama kwenye safu, ongeza vichujio, chagua {{ui:Panga kwa}}, kisha ubofye {{ui:Pakua CSV}}.

## Unachopaswa kuona

- Hatua moja kwenye orodha ya mabadiliko kwa kila ufafanuzi uliohifadhiwa na kila uwekaji lebo; {{ui:Tendua}} inaitengua.
- Vipengele vya darasa ambalo lebo haihusu vinaachwa nje ya lebo hiyo, na mstari wa hali unasema vingapi.
- Jedwali la lebo linaorodhesha safu moja kwa kila kipengele, lililopangwa kwa sehemu uliyochagua; bofya seli ya kwanza ya safu ili kuchagua kipengele hicho.
- {{ui:Kiasi}} huorodhesha lebo chini ya `CadCraft_Tags`, kwa hiyo unaweza kujumlisha maeneo au hesabu kwa lebo hapo.

## Aina

Aina ni orodha ile ile ya vigezo vya familia: Urefu (milimita), Pembe (digrii), Namba, Namba nzima, Ndiyo / Hapana, Kalamu (1–16), Maandishi, Nyenzo na Ujazo. Thamani isiyolingana na aina yake, au isiyo miongoni mwa thamani zinazoruhusiwa, inakataliwa kwa ujumbe, na hakuna kinachobadilika.

## Vyema kujua

- Kila kitu ni IFC ya kawaida, hivyo programu nyingine husoma thamani: ufafanuzi uko kwenye seti ya sifa `CadCraft_TagDefs` kwenye mradi, na thamani ziko kwenye seti ya sifa `CadCraft_Tags` kwenye kila kipengele (sifa moja kwa kila lebo). Urefu huandikwa kwa kitengo cha urefu cha faili.
- `IfcWall` katika madarasa ya lebo pia inajumuisha kuta za standard-case na za elemented.
- Kubadilisha jina la lebo kunabadilisha thamani zake kwenye kila kipengele katika hatua ileile. Kuondoa lebo kunaondoa ufafanuzi wake tu: thamani zilizokwisha kuwekwa zinabaki kwenye vipengele kama sifa za kawaida. Zifute kwanza (chagua {{ui:Futa}}) ili kuziondoa.
- Lebo katika programu ya uchoraji ya CadCraft (sifa za block) bado hazijajengwa.
