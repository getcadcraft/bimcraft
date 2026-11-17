---
title: Badilisha sifa za IFC na uhifadhi nakala iliyohaririwa
summary: Badilisha jina la kipengele, lebo, maelezo au thamani ya sifa, tendua, na upakue faili mpya ya IFC huku ya awali ikibaki kama ilivyokuwa.
keywords: hariri, badilisha, sifa, vigezo, lebo, jina, badilisha jina, alama, hifadhi kama, pakua, tendua, nakili, ifc, andika
from: f8035d62
---

## Unachofanya

Sahihisha data kwenye modeli ya IFC: badilisha jina la kipengele, rekebisha lebo yake, badilisha thamani ya sifa. Kisha hifadhi faili mpya ya IFC pamoja na mabadiliko yako. Faili uliyoifungua haiguswi kamwe.

## Unachoweza kubadilisha

| Sehemu | Inaweza kuhaririwa |
|---|---|
| Jina, Aina ya kitu, Lebo, Maelezo | Ndiyo |
| Thamani za sifa moja (maandishi, namba, Ndiyo/Hapana) | Ndiyo |
| Sifa za aina (seti zenye alama "(type)") | Ndiyo, na badiliko linatumika kwa kila kipengele cha aina hiyo |
| Aina, GlobalId, Mstari | Hapana |
| Vipimo (urefu, maeneo, ujazo, hesabu) | Hapana |
| Orodha, chaguo na thamani zenye sehemu nyingi | Hapana |
| Jiometria, nafasi, kuongeza au kufuta vipengele | Hapana |

## Hatua

1. Fungua modeli ya IFC na ubofye kipengele unachotaka kubadilisha.
2. Katika paneli ya {{ui:Sifa}}, bofya thamani unayotaka kubadilisha. Inageuka kuwa kisanduku cha maandishi. Thamani tupu huonyeshwa kama *tupu*.
3. Andika thamani mpya.
4. Bonyeza {{key:Enter}}, au bofya mahali pengine, kuihifadhi. Bonyeza {{key:Esc}} kughairi.
5. Angalia thamani: sasa ni nzito na ina upau wa bluu pembeni yake, unaoonyesha thamani iliyohaririwa.
6. Angalia sehemu ya {{ui:Mabadiliko}} upande wa kushoto: badiliko linaorodheshwa kama *kipengele*: *sehemu*, thamani ya zamani hadi thamani mpya.
7. Rudia kwa thamani nyingine au vipengele vingine.
8. Bofya {{ui:Hifadhi kama IFC}} (inaonyesha mabadiliko mangapi yanasubiri, kwa mfano "Hifadhi kama IFC (3)"), au bonyeza {{key:Mod+S}}.
9. Tafuta "*jina la awali* (edited).ifc" kwenye folda yako ya upakuaji.

## Utakachokiona

Mstari wa hali husema "Imehifadhiwa *jina* (edited).ifc na mabadiliko *n* (… bytes). Faili yako ya awali haijabadilishwa." Orodha ya {{ui:Mabadiliko}} inatoweka, tayari kwa mzunguko ujao.

## Aina za thamani

- **Maandishi**: chochote unachoandika kinahifadhiwa kama kilivyo. Kufuta Jina, Aina ya kitu, Lebo au Maelezo huondoa thamani.
- **Namba**: andika namba tupu, kama `2.4` au `1200`, katika vipimo vya faili yenyewe. Usiweke alama za vipimo. Kingine chochote huonyesha "Tumia namba."
- **Namba nzima** (hesabu, namba kamili): "Tumia namba nzima." ukiandika desimali.
- **Ndiyo/Hapana**: thamani inageuka kuwa menyu yenye Ndiyo na Hapana.

Kila thamani huhifadhi aina yake ya IFC, hivyo namba inabaki namba na programu nyingine zinaisoma ipasavyo.

## Tendua

1. Bofya {{ui:Tendua}} kwenye sehemu ya {{ui:Mabadiliko}}, au bonyeza {{key:Mod+Z}} wakati hauandiki kwenye sehemu yoyote.
2. Rudia kutendua zaidi. Kila tendua huondoa badiliko la hivi karibuni.

Huwezi kutendua zaidi ya hifadhi: baada ya kuhifadhi, orodha huanza upya. Faili iliyohifadhiwa huhifadhi kila kitu.

## Kwa nini uhariri wako hubadilisha kipengele kimoja pekee

Wasafirishaji huokoa nafasi kwa kushiriki data. Seti moja ya sifa inaweza kushirikiwa na milango ishirini, na thamani moja ("Ukadiriaji wa moto: dakika 60") inaweza kuorodheshwa kwenye seti tisini. Kama BimCraft ingebadilisha thamani iliyoshirikiwa moja kwa moja, kila kipengele kinachoishiriki kingebadilika pia.

Kwa hiyo BimCraft hunakili kabla ya kuandika:

- Ikiwa seti ya sifa unayohariri inashirikiwa na vipengele vingine, kipengele chako hupata nakala yake ya seti, na nakala hiyo pekee ndiyo inabadilika.
- Ikiwa thamani inashirikiwa na seti nyingine, seti yako hupata nakala yake ya thamani.

Vipengele vingine vinabaki na data yao ya zamani. Hii inaitwa *copy-on-write* (nakili unapoandika). Huongeza maingizo machache madogo kwenye faili, ambayo kila programu ya IFC husoma kawaida.

**Sifa za aina ni ubaguzi kwa makusudi.** Seti yenye alama "(type)" ni ya aina ya kipengele, na katika IFC kila kipengele cha aina hiyo kinaisoma kutoka hapo. Kuibadilisha hubadilisha aina, hivyo kila kipengele cha aina hiyo kinaonyesha thamani mpya. Orodha ya {{ui:Mabadiliko}} huweka alama "(type)" kwenye uhariri kama huo. Angalia [Badilisha sifa ya aina kwa kila kipengele cha aina](topic:type-vs-instance).

## Onyo kabla ya kupoteza kazi

- Kufungua faili nyingine ukiwa na mabadiliko ambayo hayajahifadhiwa huuliza "Una mabadiliko *n* ambayo hayajahifadhiwa kwenye *faili*. Yafutwe?" Bofya Ghairi kuendelea kufanya kazi, kisha uhifadhi.
- Kufunga au kupakia upya kichupo chenye mabadiliko ambayo hayajahifadhiwa kunafanya kivinjari kiulize kama unataka kuondoka.

## Makosa ya kawaida

- **Kuandika vipimo.** `2400 mm` inakataliwa. Andika `2400`.
- **Kubadilisha sifa ya aina ulipokusudia kipengele kimoja.** Tafuta kidokezo cha "(type)" kabla ya kuandika. Ikiwa unataka kipengele kimoja kiwe tofauti, badilisha sifa ya mfano, au Lebo au Jina lake.
- **Kutarajia faili ya awali ibadilike.** Kuhifadhi daima hupakua faili mpya. Badilisha ya awali mwenyewe ukitaka, na weka nakala.
- **Kubonyeza {{key:Mod+S}} bila mabadiliko.** BimCraft huhifadhi tu kunapokuwa na cha kuhifadhi; vinginevyo kidirisha cha kivinjari cha "Hifadhi ukurasa" kinaweza kufunguka. Kifunge.
- **Kuhifadhi mara mbili na kutarajia faili mbili ndogo.** Kila uhifadhi una kila uhariri tangu ulipofungua modeli.
- **Kutarajia uhariri urudi kwenye faili ya mradi.** BimCraft huandika IFC pekee. Ingiza IFC iliyohaririwa kwenye programu yako ya usanifu kama unavyoingiza IFC yoyote.
