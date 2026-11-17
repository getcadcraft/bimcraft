---
title: Bera saman tvær útgáfur af líkani
summary: Opnaðu tvær útgáfur af sama IFC-líkaninu og sjáðu hvaða hlutir bættust við, voru fjarlægðir og breyttust, paraðir eftir GlobalId-númerum þeirra, með CSV af öllum breytingum.
keywords: bera saman, mismunur, útgáfur, endurskoðun, breytingar, breytt, bætt við, fjarlægt, fært, globalid, guid, hvað breyttist
from: cfca6971
---

## Það sem þú gerir

Sjáðu hvað breyttist á milli líkansins sem þú hafðir og þess sem þér var sent: hverjir hlutir eru nýir, hverjir eru horfnir, hverjir færðust eða fengu ný eiginleikagildi.

## Skref

1. Opnaðu nýrri útgáfuna, smelltu síðan á {{ui:Bæta við líkani…}} og veldu þá eldri. Sjá [Skoðaðu nokkur IFC-líkön saman](topic:several-models).
2. Í {{ui:Líkön}}, opnaðu {{ui:Bera saman útgáfur}}.
3. Veldu {{ui:Eldri útgáfa}} og {{ui:Nýrri útgáfa}}.
4. Smelltu á {{ui:Bera saman}}.
5. Smelltu á hlut í lista til að velja hann og sjá eiginleika hans. Smelltu á {{ui:Sækja CSV}} fyrir allar breytingar, eiginleika fyrir eiginleika.
6. Smelltu á {{ui:Hreinsa}} til að fara aftur í venjulega sýn.

## Það sem þú átt að sjá

- **Bætt við** hlutir í bláu, úr nýrri útgáfunni.
- **Fjarlægðir** hlutir í rauðu, úr eldri útgáfunni.
- **Breyttir** hlutir í okurgulu, úr nýrri útgáfunni, og hver segir hvað breyttist: eiginleikar, færsla og hve langt, eða ný lögun.
- Allt sem er eins, gegnsætt.

## Gott að vita

- Hlutir eru paraðir eftir GlobalId-númeri þeirra. Forrit sem gefur hlutum ný GlobalId-númer í hvert skipti sem það flytur út lætur alla hluti líta út fyrir að vera fjarlægðir og bætt aftur við.
- Staðsetningar eru bornar saman þar sem líkönin standa í senunni. Ef annarri útgáfunni var viljandi hliðrað, stilltu þær fyrst af með {{ui:Færa}} í {{ui:Líkön}}.
- GlobalId sem er notað tvisvar í einu líkani er skilið út úr samanburðinum. [Athugaðu líkan fyrir algengum vandamálum](topic:model-checks) finnur þau.

## Næst

- [Vandamál og BCF-skrár](topic:issues-bcf)
- [Leggðu saman magn eftir eiginleika](topic:quantity-totals)
