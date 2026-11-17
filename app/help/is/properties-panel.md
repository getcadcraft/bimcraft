---
title: Reitir í Eiginleikaspjaldinu
summary: Hvað hver reitur í Eiginleikaspjaldinu og í Skrá-, Teikningar- og Möppuspjöldunum þýðir, og hverja þeirra má breyta.
keywords: eiginleikar, reitir, eigindi, globalid, guid, afrita, afrita gildi, afrita allt, csv, klippiborð, raðnúmer, merki, hlutartegund, lína, express id, eiginleikasett, pset, magn, skema, skráarspjald
from: fe55b435
---

## Eining í IFC

Efst á {{ui:Eiginleikar}}-spjaldinu sést tegund hlutarins án forskeytisins "Ifc" (til dæmis „Door“, „WallStandardCase“, „FurnishingElement“) og nafn hans, eða „Ónefnt“.

| Reitur | Merking | Breytanlegur |
|---|---|---|
| Nafn | Nafn hlutarins, oft gerðar- og tegundarheitið frá útflytjandanum | Já |
| Tegund | Heiti tegundar hlutarins, þegar hann hefur eina | Nei |
| Hlutartegund | Frjáls texti um tegund sem sumir útflytjendur fylla í | Já |
| Merki | Merki eða auðkenni hlutarins; margir útflytjendur skrifa auðkenni hlutarins hér | Já |
| Lýsing | Frjáls texti | Já |
| GlobalId | Varanlegt 22 stafa IFC-auðkenni hlutarins, eins í öllum útflutningum á sama hlut | Nei |
| Lína | Línunúmer hlutarins (`#1234`) í þessari IFC-skrá. Það breytist milli útflutninga | Nei |

Neðan við koma **eiginleikasettin**, raðað eftir nafni:

- Hvert sett opnast og lokast þegar smellt er á nafn þess. Þau þrjú fyrstu eru opin.
- Sett merkt „(tegund)“ tilheyrir tegund hlutarins: „Tegundareiginleiki: breyting hér gildir um alla hluti af þessari tegund.“
- Magnsett (lengdir, flatarmál, rúmmál, fjöldi, þyngdir) eru eingöngu lesin.
- Listar og talin gildi eru sýnd, eingöngu lesin.
- Já/Nei-gildi birtast sem **Já** eða **Nei**.
- Tölur eru ávalaðar í fjóra aukastafi á skjánum. Lengdir (lengdareiginleiki eða lengd magnsetts) birtast í {{ui:Einingar}} sem valdar eru á verkfærastikunni, með einingunni við hlið sér, og þú getur skrifað nýja tölu í þeirri einingu eða með annarri einingarmerkingu (2.4 m, 8'-0"): BimCraft skrifar tölu skráarinnar sjálfrar til baka. Aðrar tölur birtast eins og skráin geymir þær.
- Tómt gildi birtist sem *tómt*. Breytt gildi er feitletrað og með bláa stiku við hliðina.

## Afrita gildi

Hvert gildi í {{ui:Eiginleikar}} hefur lítinn afritunarhnapp við hlið sér: smelltu á hann til að setja gildið á klippiborðið nákvæmlega eins og það birtist, til dæmis GlobalId, raðnúmer eða gildi úr eiginleikasetti. Afritun byrjar aldrei breytingu.

Efst afritar {{ui:Afrita allt}} hvert gildi hlutarins sem texta, sett fyrir sett, og {{ui:Afrita sem CSV}} afritar þau sem raðir með hópi, eiginleika og gildi til að líma í töflureikni; tómum gildum er haldið svo sérhver reitur hafi röð. Þetta virkar eins fyrir hlut úr öðru opnu líkani; þegar fleiri en eitt líkan er opið byrjar CSV-skráin á dálki {{ui:Líkan}} sem nefnir skrána.

## Skráarspjaldið (IFC)

| Reitur | Merking |
|---|---|
| Skrá, Stærð | Skráin sem þú opnaðir og stærð hennar |
| Skema | Útgáfa IFC, til dæmis IFC2X3 eða IFC4 |
| Verkefni | Nafn verkefnisins og langt nafn þess |
| Fasi | Verkefnafasi, ef útflytjandinn skrifaði hann |
| Flutt út úr | Útflutningsforritið, úr haus skráarinnar |
| Höfundur | Höfundurinn í haus skráarinnar |
| Útflutt | Dagsetning og tími í haus skráarinnar |
| Hlutir | Hversu margir hlutir með lögun voru teiknaðir |
| Þríhyrningar | Hversu marga þríhyrninga lögun þeirra mynda; mælikvarði á þyngd líkansins |

## Skráarspjaldið (verkefna- og fjölskylduskrár)

| Reitur | Merking |
|---|---|
| Tegund | Verkefni, Verkefnasniðmát, Fjölskylda eða Fjölskyldusniðmát |
| Vistuð í | Útgáfan sem vistaði skrána síðast |
| Smíð | Nákvæm smíð þeirrar útgáfu |
| Lesið | Hversu mikið af skránni BimCraft las, af stærð hennar |

## Teikningarspjaldið (DWG og DXF)

| Reitur | Merking |
|---|---|
| Snið | Útgáfan sem teikningin var vistuð sem, með sniðkóða sínum, til dæmis AC1032 |
| Einingar | Innsetningareiningar teikningarinnar, þegar þær eru stilltar |
| Hlutir | Hversu margir hlutir voru lesnir |
| Lög | Hversu mörg lög |
| Blöð | Hversu mörg blöð (útlit), eða Engin |
| Tengdar teikningar | Hversu margar tengdar teikningar fundust og hlóðust |
| Búnaður | Hversu margir merktir búnaðarhlutir eru á blöðum |

## Möppuspjaldið

| Reitur | Merking |
|---|---|
| Mappa, Skrár, Stærð | Mappan sem þú opnaðir, hversu margar skrár hún geymir og samanlögð stærð þeirra |
| Líkön | Verkefna- og fjölskylduskrár, með öryggisafritum sínum talin einu sinni |
| CAD-teikningar, IFC-líkön | Hversu margar af hvoru |
| Vandamál | Hversu margar afrit líkana eru ófullkomin eða ólæsileg, eða Engin |
