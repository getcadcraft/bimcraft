---
title: Skaft og op í gegnum gólf
summary: Skaft er ein útlína sem sker hvert gólf, loft og þak milli tveggja hæða. Lóðrétt op sker eitt þeirra. Gat á vegg sker vegg.
keywords: skaft, lyftuskaft, stigaop, stigaþrep, lóðrétt op, gólfop, loftop, þakop, þakgluggaop, gat í gólfi, gat á vegg, IfcOpeningElement, frádráttur, nettóflatarmál
from: 8e9e1641
---

## Hvað þú gerir

Skerðu lyftuskaft í gegnum byggingu með einni skissu, skerðu gat í eitt gólf og lestu hvað var tekið úr flatarmálunum.

## Hvar verkfærin eru

- Borðaútlit: {{ui:Arkitektúr}} › **Op** › {{ui:Skaft}}, {{ui:Lóðrétt op}} og {{ui:Gat á vegg}}.
- Klassískt útlit: Teiknistikan › valmyndin {{ui:Rými}} (Skaft, Lóðrétt op) og › valmyndin {{ui:Veggir}} (Gat á vegg).

## Skaft

1. Opnaðu grunnmynd hæðarinnar sem skaftið byrjar á. Veldu {{ui:Skaft}}.
2. Í línunni veldu {{ui:Grunnhæð}} og {{ui:Efsta hæð}}, og frávik ef það byrjar eða endar fyrir ofan eða neðan þær.
3. Smelltu á hornpunkta útlínunnar. Smelltu aftur á fyrsta hornpunktinn, tvísmelltu eða ýttu á {{key:Enter}} til að ljúka.
4. Sérhvert gólf, loft og þak milli hæðanna tveggja er skorið. Stöðulínan segir hversu mörg.

Skaft er einn hlutur. Veldu útlínu þess á hvaða hæð sem það liggur um: Eiginleikar sýna nafn þess, hæðir og frávik, hvað það sker og flatarmálið sem tekið er úr. Breyttu því og sérhvert op fylgir. Eyddu því og sérhvert op fer. Hvert er eitt skref í afturköllun.

Það heldur áfram að skera: gólf sem er búið til síðar milli hæðanna er skorið án þess að beðið sé um það, og gólf sem þú eyðir er sleppt.

Gólfið sem skaftið stendur á er ekki skorið (efri hliðin er grunnurinn). Gefðu grunninum neikvætt frávik til að skera það líka. Gefðu efri hæðinni jákvætt frávik til að fara í gegnum þakið.

## Lóðrétt op

1. Veldu {{ui:Lóðrétt op}}. Í línunni veldu hvað skal skera: gólfið, loftið eða þakið.
2. Smelltu á hornpunkta útlínunnar og ljúktu eins og að ofan.
3. Gólfið, loftið eða þakið á þessari hæð undir útlínunni er skorið. Það tilheyrir einum frumhluta: eyddu gólfinu og opið fer með því.

## Gat á vegg

{{ui:Gat á vegg}} er verkfærið í [Móta vegg](topic:wall-shape): smelltu á vegg á grunnmyndinni, eða á tvo hornpunkta á fleti hans í 3D.

## Magntölur

Samkvæmt mælireglunni fyrir gólf er nettóflatarmál frumhluta brúttóflatarmálið að frádregnu því sem er skorið úr honum. Skaft eða lóðrétt op er frádráttur á hverju gólfi og lofti sem það sker; listarnir yfir gólf og frágang og IFC-magntölurnar sýna sömu tölur. Á þaki er frádrátturinn flatarmál þakfletarins: grunnflatarmálið deilt með kósínus hallans.

Útlína sem hangir yfir brúnina dregur frá aðeins þann hluta sem liggur á frumhlutanum.

## Ef ekkert er skorið

Skaft sem hefur ekkert í veginum er samt búið til, og það segir frá því: það mun skera það sem verður byggt þar síðar. Lóðrétt op þarf eitthvað undir sér; ef ekkert er þar segir stöðulínan það og ekkert er búið til.

## Í IFC

Hver skurður er IfcOpeningElement með IfcRelVoidsElement að frumhlutanum sem hann sker, þannig að sérhvert IFC-forrit sýnir gatið. Þak er skorið flöt fyrir flöt. Skaftið sjálft er IfcGroup úr opum sínum.

## Ekki smíðað enn

- Bogadregnar útlínur.
- Veggir skafts: teiknaðu þá með veggverkfærinu.
- Breyting á útlínunni með því að draga hornpunkta hennar (breyttu í Eiginleikum, eða eyddu og skissaðu aftur).
- Eiginleikar teiknaðs gólfs sýna flatarmál þess að frádregnum eigin opum einungis; listarnir og IFC-magntölurnar innihalda op skaftsins líka.

Sjá einnig [Rými og rýmisskil](topic:rooms-and-separators).
