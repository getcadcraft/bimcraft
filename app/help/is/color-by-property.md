---
title: Lita atriði eftir eiginleika
summary: Litaðu sérhvern hlut eftir gildi eins eiginleika, svo sem flokks, gerðar, hæðar, efnis, brunaeinkunnar eða kostnaðar, lestu skýringuna, smelltu á gildi til að sýna aðeins þá hluti, og vistaðu litina sem litasamsetningu til notkunar á öðrum líkönum.
keywords: litur, lita eftir, skýring, snjallsýn, útlit, eiginleiki, gerð, efni, brunaeinkunn, sía, einangra, þema, gildi, litasamsetning, vista liti, endurnota, teymi, json, litasýni
from: f081d343
---

## Það sem þú gerir

Sjáðu í fljótu bragði hvernig eiginleiki dreifist yfir líkanið: hvaða veggir eru ytri, hvaða efni eru notuð hvar, hvaða hlutir hafa enga brunaeinkunn. Sérhver hlutur tekur lit síns gildis, og skýringin segir hvað hver litur merkir og hversu margir hlutir hafa hann.

## Skref

1. Opnaðu IFC-líkan.
2. Smelltu á flipann {{ui:Litur}} hægra megin.
3. Veldu eiginleika í listanum. Fyrstu eiga við sérhvern hlut ({{ui:Flokkur}}, {{ui:Tegund}}, {{ui:Hæð}}, {{ui:Efni}}, {{ui:Heiti}}…); hinir koma úr eiginleikasettum og magnsettum líkansins, undir heiti settsins. Talan á eftir hverjum er hversu margir hlutir hafa hann.
4. Lestu skýringuna: lit, gildið og hversu margir hlutir hafa það.
5. Smelltu á gildi til að sýna aðeins þessa hluti. Haltu inni {{key:Mod}} og smelltu til að bæta við fleiri gildum. Ýttu á {{key:Shift+H}} til að sýna allt aftur.
6. Smelltu á {{ui:Slökkt}} til að fara aftur í eigin liti líkansins.

## Það sem þú átt að sjá

- Allt að sjö gildi fá hvert sinn lit, algengasta gildið fyrst. Fleiri gildi en það deila einum gráum lit, skráð sem **önnur gildi**.
- Tala með mörgum mismunandi gildum er skipt í sex jafnar bil, frá ljósu (lágt) til dökks (hátt).
- Hlutir án eiginleikans eru fölgráir, skráðir sem **Ekkert gildi**, svo lituðu hlutirnir skeri sig úr.
- Litirnir breytast með Paper og Model og haldast meðan þú breytir líkaninu.
- Eiginleiki gerðar telst fyrir sérhvern hlut af þeirri gerð; þegar hlutur hefur sitt eigið gildi fyrir sama eiginleika, vinnur eigið gildi hans.

## Breyttu litum og geymdu þá sem litasamsetningu

- Smelltu á litasýni gildis í skýringunni til að velja annan lit fyrir það. Líkanið er málað aftur strax.
- {{ui:Vista litasamsetningu}} sækir litina sem litla `.json`-skrá nefnda eftir eiginleikanum, til dæmis `Class colors.json`.
- Á öðru líkani, eða á tölvu liðsfélaga, smelltu á {{ui:Opna litasamsetningu…}} og veldu þá skrá. Sérhvert gildi í samsetningunni fær sinn lit, svo sama brunaeinkunn eða kerfi hefur sama lit í hverju líkani.
- Gildi sem samsetningin hefur ekki er málað grátt og skráð sem „ekki í samsetningunni“; gildi í samsetningunni sem þetta líkan hefur ekki eru áfram skráð með 0, svo þú sjáir alla samsetninguna.
- Samsetning geymir liti sína í báðum þemum. Að velja eiginleika í listanum byrjar aftur á sjálfvirku litunum.

## Algeng mistök

- **„Þetta líkan hefur engin … gildi.“** Samsetningin var vistuð fyrir eiginleika sem þetta líkan hefur ekki (annað heiti eiginleikasetts, til dæmis). Opnaðu samsetningu gerða fyrir þessa tegund líkana, eða veldu eiginleika í listanum.

- **Eiginleiki vantar í listann.** Enginn hlutur með form í líkaninu hefur hann. Eiginleikar hæða og rýma sjálfra eru ekki skráðir.
- **Allt er í sama lit.** Sérhver hlutur hefur sama gildi, eða ekkert: skoðaðu tölurnar í skýringunni.

## Næst

- [Fela, einangra og sjá í gegnum hluti](topic:hide-and-isolate)
- [Rataðu með líkantrénu](topic:model-tree)
