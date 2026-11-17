---
title: Líkanshópar
summary: Gerðu valda hluti að einum nefndum hópi, settu hópinn aftur annars staðar og breyttu einu afriti til að breyta þeim öllum.
keywords: hópur, líkanshópur, hópun, taka úr hópi, dæmi, afrita, endurtaka, dæmigerð eining, bil, íbúð, breyta hópi, IfcGroup
from: 121c5027
---

## Hvað þú gerir

Hópaðu dæmigert bil, settu það nokkrum sinnum og breyttu öllum afritunum með því að breyta einu.

## Hvar verkfærið er

- Borðaútlit: {{ui:Arkitektúr}} › **Líkan** › {{ui:Líkanshópur}}.
- Klassískt útlit: Teiknistikan › valmyndin {{ui:Rými}} › Líkanshópur.

## Skref

1. Með verkfærinu Velja velurðu hlutina: smelltu á einn, Ctrl+smell eða Shift+smell á hina.
2. Veldu {{ui:Líkanshópur}}. Þeir verða að hópi samstundis. Skrifaðu {{ui:Heiti hóps}} í línuna fyrst til að nefna hann, eða skrifaðu nafn á eftir til að endurnefna hann.
3. Ýttu á {{ui:Setja annan}} og smelltu þar sem afritið á að standa: neðra vinstra horn þess fer í smellipunktinn.
4. Breyttu hvaða afriti sem er: færðu enda veggs, breyttu stærð hurðar, eyddu súlu. Hvert annað afrit hópsins breytist í sama skrefi, og ein afturköllun tekur allt til baka.
5. Meðan {{ui:Líkanshópur}} er í hendi þinni, velur smellur á hlut allan hóp hans.

## Annað sem þú getur gert

- {{ui:Bæta við völdu}}: bættu fleiri hlutum við hópinn sem þú valdir síðast.
- {{ui:Taka úr hópi}}: þetta afrit verður venjulegir hlutir aftur. Hin afritin haldast sem hópur.
- Færðu heilt afrit með {{ui:Færa}}: það er sami hópurinn á nýjum stað; hin hreyfast ekki.
- Eyddu hlutum í afriti og afritið hverfur.

## Hvað getur verið í hópi

Veggir með hurðum og gluggum sínum, súlur og teiknuð gólf má setja aftur og halda eins. Hópur má geyma aðra hluti líka, en þá er ekki hægt að setja hann aftur ennþá; línan segir af hverju.

Afrit eru færð, ekki snúið eða speglað.

## Í IFC

Hópur er IfcGroup með IfcRelAssignsToGroup að meðlimum sínum, sem haldast venjulegir veggir, súlur og gólf. Sérhvert afrit af sama hópi ber sama skilgreiningarauðkenni.

## Ekki smíðað ennþá

- Að snúa eða spegla afriti.
- Stigar, þök, gólf rýma og safnhlutir í hópi sem er settur aftur.
- Snið veggjar, halli hans og veggop berast ekki til afrita.
- Hópar inni í hópum.

Sjá einnig [Færa, afrita, jafna og dreifa](topic:move-align-distribute).
