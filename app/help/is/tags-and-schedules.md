---
title: Merkja frumefni og gera lista eftir merki
summary: Skilgreindu þín eigin merki (heiti, gerð, leyfð gildi, hvaða flokkar), merktu mörg frumefni í einu og gerðu lista þar sem dálkar, síur og hópar lesa merkin. Merkin eru geymd í IFC.
keywords: merki, merkja, merking, sérsniðnir eiginleikar, breytur, sameiginlegar breytur, eignasett, pset, listi, sía, hópa eftir, frágangur, brunavörn, fjöldabreyting, csv
from: 9cc7c90d
---

## Það sem þú gerir

Merki er eign sem þú skilgreinir sjálfur, eins og *Frágangur* eða *Brunavörn*. Þú skilgreinir það einu sinni fyrir verkefnið, setur það á mörg frumefni í einu, og hver listi í BimCraft getur lesið það: merkjalistinn hér, {{ui:Magn}}, Leit, Litur eftir eign og [Skjöl úr líkaninu](topic:documents-from-the-model).

## Skref

1. Opnaðu IFC-líkan, eða byrjaðu nýja byggingu.
2. Í vinstra spjaldinu, undir {{ui:Magn}}, opnaðu {{ui:Merki}}.
3. Smelltu á {{ui:Bæta við merki}}. Gefðu því heiti, veldu gerð þess, og ef þú vilt skráðu leyfð gildi (með kommum) og flokkana sem það er fyrir (`IfcDoor`, `IfcWall` …). Smelltu á {{ui:Bæta merkinu við}}.
4. Veldu frumefnin í líkaninu (Leit hjálpar: veldu allar hurðir í einu).
5. Undir {{ui:Merkja valið}} veldu eða skrifaðu gildi fyrir hvert merki sem þú vilt setja, láttu hin vera eins og þau eru, og smelltu á {{ui:Beita á … völdum frumefnum}}.
6. Undir {{ui:Merkjalisti}} merktu við dálkana, bættu við síum, veldu {{ui:Hópa eftir}}, og síðan {{ui:Sækja CSV}}.

## Það sem þú átt að sjá

- Skref í breytingalistanum fyrir hverja vistaða skilgreiningu og hverja merkingu; {{ui:Afturkalla}} tekur það til baka.
- Frumefni af flokki sem merki er ekki fyrir eru sleppt úr því merki, og stöðulínan segir hversu mörg.
- Merkjalistinn sýnir eina línu fyrir hvert frumefni, flokkaða eftir reitnum sem þú valdir; smelltu á fyrsta reit línu til að velja það frumefni.
- {{ui:Magn}} listar merkin undir `CadCraft_Tags`, svo þú getur lagt saman flatarmál eða fjölda eftir merki þar.

## Gerðir

Gerðirnar eru sami listi og fyrir fjölskyldubreytur: Lengd (millimetrar), Horn (gráður), Tala, Heiltala, Já / Nei, Penni (1–16), Texti, Efni og Fylling. Gildi sem passar ekki við gerð sína, eða er ekki eitt af leyfðu gildunum, er hafnað með skilaboðum og ekkert breytist.

## Gott að vita

- Allt er venjulegt IFC, svo önnur forrit lesa gildin: skilgreiningarnar eru í eignasettinu `CadCraft_TagDefs` á verkefninu, gildin í eignasettinu `CadCraft_Tags` á hverju frumefni (ein eign fyrir hvert merki). Lengdir eru skrifaðar í lengdareiningu skráarinnar.
- `IfcWall` í flokkum merkis nær einnig til staðlaðra og samsettra veggja.
- Endurnefning merkis endurnefnir gildi þess á öllum frumefnum í sama skrefi. Eyðing merkis fjarlægir aðeins skilgreininguna: gildi sem þegar eru sett haldast á frumefnunum sem venjulegar eignir. Hreinsaðu þau fyrst (veldu {{ui:Hreinsa}}) til að taka þau af.
- Merki í CadCraft-teikniforritinu (blokkareiginleikar) eru ekki smíðuð enn.
