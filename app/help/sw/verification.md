---
title: Weka alama vipengele kuwa vimekaguliwa au vimethibitishwa shambani
summary: Kipengele kilichosomwa kutoka PDF au skani hakijathibitishwa hadi ukikague. Weka alama vipengele kuwa vimekaguliwa, au vimethibitishwa shambani (LOD 500) pamoja na aliyevipima, lini na jinsi, kisha kabidhi modeli ya as-built inayosema kipi ni kipi.
keywords: haijathibitishwa, imethibitishwa, imekaguliwa, imethibitishwa shambani, as built, as-built, lod 500, kufunga mradi, makabidhiano, kipimo shambani, tepu, leza, skani, upimaji, jengo lililopo, mabadiliko, weka alama kuwa imekaguliwa, uthibitisho, hatua 7
from: df35d908
---

## Utakachofanya

Fuatilia ni nini kwenye modeli ambacho mtu ameshakitazama. Kipengele kina mojawapo ya alama tatu, au hakina alama:

- **Haijathibitishwa**: programu iliitambua kutoka PDF, mchoro ulioskaniwa, mchoro ulioandikwa upya au skani ya wingu la nukta. Hakuna aliyeikagua bado.
- **Imekaguliwa**: mtu amelinganisha na mchoro ulikotoka.
- **Imethibitishwa shambani (LOD 500)**: mtu amekipima shambani. Nani, lini na jinsi vinahifadhiwa nacho.
- **Bila alama**: kimechorwa na mtu. Modeli haidai chochote kuhusu hicho.

## Hatua

1. Chagua kipengele kimoja au vingi (kuta, milango, madirisha, vyumba, kipengele chochote).
2. Katika {{ui:Sifa}}, fungua {{ui:Uthibitisho}}.
3. Andika aliyekikagua au kukipima. Tarehe ni ya leo isipobadilishwa.
4. Bofya {{ui:Weka alama ya kukaguliwa}}. Kwa kipimo cha eneo, chagua jinsi kilivyopimwa (kipimo cha tepu, kipima umbali cha leza, skani, upimaji), kisha ubofye {{ui:Weka alama ya kuthibitishwa shambani (LOD 500)}}.
5. {{ui:Weka alama ya kutothibitishwa}} na {{ui:Ondoa alama}} zinarudisha nyuma. Kila bofyo ni hatua moja ya kutendua, kwa uteuzi wote.

Ili kuweka alama haraka kwenye uteuzi: {{ui:Zana}} › {{ui:Weka alama ya kukaguliwa}} (kwa kuandika: `MARKCHECKED`) huweka alama ya kukaguliwa na wewe, leo.

## Utakachoona

- Kwenye mpango, kipengele kisichothibitishwa kina kisanduku chenye mistari na "?"; kile kilichothibitishwa shambani kina tiki. Ondoa tiki ya {{ui:Onyesha alama za uthibitisho kwenye mpango}} katika sehemu ya {{ui:Ukaguzi}} ili kuzificha.
- {{ui:Majedwali}} › {{ui:Uthibitisho}} inaorodhesha kila kipengele kilichowekwa alama, pamoja na kiwango chake, hali yake, nani, lini, jinsi na chanzo chake.
- Ukaguzi unaorodhesha vipengele visivyothibitishwa, na unahesabu kipengele kilichothibitishwa shambani kama LOD 500. Angalia [Kagua modeli](topic:audit-the-model).

## Kutoka kwenye skani

Unapolinganisha skani na modeli, weka alama vipengele vinavyolingana kuwa vimethibitishwa shambani: hii huweka alama kila kipengele ambacho skani iliona kimejengwa ndani ya uvumilivu, pamoja na mbinu "scan" na uvumilivu kwenye maelezo. Angalia [Linganisha skani na modeli](topic:compare-scan-with-model).

:::warning
Ulinganisho huo unaoana kisanduku cha kila kipengele na pointi za skani. Si upimaji. Tumia kwa vipengele ambavyo pia umevitazama.
:::

## Modeli ya as-built na kifurushi cha makabidhiano

{{ui:Jenga kifurushi cha makabidhiano}} kwenye kichupo cha {{ui:Rasilimali}} huweka modeli ya as-built kwenye faili ya zip, pamoja na:

- taarifa kwenye mradi ya idadi ya vipengele vilivyothibitishwa shambani, vilivyokaguliwa, visivyothibitishwa na visivyowekwa alama;
- `as-built/verified-elements.csv`: kila kipengele na kila chumba pamoja na hali yake, nani, lini na jinsi;
- `as-built/as-built-drawings.pdf`: seti ya michoro kama ilivyo sasa;
- rekodi ya mabadiliko ya michoro, pale modeli ina seti zilizotolewa.

Angalia [Rasilimali na matengenezo](topic:assets-and-maintenance).

## Jinsi inavyohifadhiwa kwenye IFC

Kila kipengele kilichowekwa alama kina seti ya sifa `CadCraft_Verification`: State, By, On, Method, Source, Note, na LevelOfDevelopment (`LOD 500` kikiwa kimethibitishwa shambani). Ni sifa za maandishi tupu, kwa hiyo programu nyingine huziorodhesha, na Tafuta, Rangi kwa sifa na majedwali ya lebo vinaweza kuzitumia. Taarifa ya as-built ni seti ya sifa `CadCraft_AsBuilt` kwenye mradi. Kipengele kisicho na seti hiyo hakikupimwa shambani.

## Ijayo

- [Kuta kutoka kwenye seti ya mipango](topic:walls-from-plans)
- [Kagua modeli](topic:audit-the-model)
