---
title: Skipta út settum hlut og uppfæra hluti úr safninu
summary: Skiptu einum settum safnhlut út fyrir annan en haltu stað hans og hlutanúmeri, og athugaðu í Safni hvort nýrri útgáfur séu til af öllu í líkaninu.
keywords: skipta, skipta út, staðgengill, uppfæra, nýrri útgáfa, athuga uppfærslur, safn, afturkallaður, breyting á leyfi, hlutanúmer
from: 8bdfe01d
---

## Það sem þú gerir

Skiptu um skoðun á hlut án þess að færa hann aftur, og haltu hlutum úr safninu í líkaninu uppfærðum.

## Skipta út einum hlut

1. Smelltu á settan safnhlut í líkaninu.
2. Í {{ui:Eiginleikar}} smelltu á {{ui:Skipta hlut…}} í reitnum **Safnhlutur**. Flipinn {{ui:Safn}} opnast.
3. Finndu nýja hlutinn og smelltu á spjaldið hans.
4. Smelltu á {{ui:Skipta … út fyrir þetta}}.

Frumefnið heldur stað sínum, snúningi, kóta, hlutanúmeri, magni og athugasemdum. Gerð þess, lögun og hlutagögn breytast í nýja hlutinn. Hlutir sem eru settir á sama hátt deila einni gerð, eins og þegar þú setur þá inn.

Hlutur sem hefur afbrigði (sjá [Setja inn og skipta út safnhlut með afbrigðum](topic:library-variants)) sýnir hin afbrigðin sín efst á flipanum {{ui:Safn}} þegar þú skiptir honum út: einn smellur hvert.

Þegar nýi hlutinn er önnur tegund hlutar, til dæmis vaskur í stað borðs, breytist IFC-flokkur frumefnisins til samræmis (hér úr húsgagnafrumefni í hreinlætistengi), svo annar hugbúnaður raðar því rétt. Það er áfram sama frumefnið, með sama GlobalId, þannig að tenglar á það virka enn. {{key:Mod+Z}} skilar gamla flokknum með gamla hlutnum.

## Athuga uppfærslur

1. Smelltu á {{ui:Uppfærslur}} á tækjastikunni (eða {{ui:Athuga uppfærslur}} í reit safnhlutar).
2. Lestu listann: hver safnhlutur í líkaninu með útgáfu sinni í líkaninu, nýjustu útgáfu og stöðu: **Uppfært**, **Nýrri útgáfa**, **Afturkallað** eða **Fannst ekki**. Hann segir einnig hvað breyttist (rúmfræði, gögn, leyfi eða lagfæring).
3. Smelltu á {{ui:Uppfæra}} á línu, eða á {{ui:Uppfæra allt}}.

## Það sem þú átt að sjá

- „Uppfærðar *n* staðsetningar. Staðsetningar, hlutanúmer, magn og athugasemdir haldast.“
- Línurnar „Uppfært: *hlutur*“ í breytingalistanum. {{key:Mod+Z}} afturkallar hverja þeirra.

## Gott að vita

- Aðeins hlutir sem komu úr safninu er hægt að athuga. Hlutir úr skrám bera ekkert safnauðkenni.
- Þegar leyfi breytist heldur afritið sem þú hefur þegar sett inn leyfinu sem það kom með þar til þú uppfærir það.
- **Afturkallaður** hlutur er ekki boðinn fyrir nýjar staðsetningar. Hlutur sem hefur verið afturkallaður af höfundarréttarástæðum er alls ekki hægt að sækja; skiptu honum út með {{ui:Skipta hlut…}}.
- Sett afbrigði helst það afbrigði þegar nýrri útgáfa hlutarins hefur það enn; annars tekur það sjálfgefna afbrigði hlutarins.
- Athugun sendir aðeins auðkenni hluta og útgáfur, aldrei líkanið þitt.
