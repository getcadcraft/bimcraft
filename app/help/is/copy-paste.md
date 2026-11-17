---
title: Afrita, líma og tvöfalda safnhluti
summary: Afrita staðsettan safnhlut og líma hann þangað sem smellt er, á sama stað við hliðina á upprunalega eða inn í annað líkan; afrita eiginleika hvers annars frumefnis sem texta; afturkalla og endurgera.
keywords: afrita, líma, tvöfalda, klippiborð, líma á sama stað, klippa, eyða, velja allt, afturkalla, endurgera, breytivalmynd, meira, safnhlutur, staðsetning, endurtaka, fylki
from: 6ac15931
---

## Hvað þú gerir

Setur fleiri eintök af hlut sem þú hefur þegar staðsett: annað vinnuborð, röð af vöskum. Þessi síða fjallar um **staðsetta safnhluti**, frumefnin sem BimCraft skrifaði inn í líkanið: einn þeirra má líma inn í hvaða líkan sem er, jafnvel í öðrum flipa. Veggir, hurðir og öll önnur frumefni eru afrituð, klippt, límd og eydd á sama hátt innan síns eigin líkans: sjá [Eyða, klippa, afrita og líma byggingarhluta](topic:edit-elements).

Skipanirnar eru í tækjastikunni fyrir ofan líkanið: {{ui:Afturkalla}}, {{ui:Endurgera}}, {{ui:Afrita}}, {{ui:Líma}} og {{ui:Meira}}, valmynd með {{ui:Klippa}}, {{ui:Afrita}}, {{ui:Líma}}, {{ui:Líma á sama stað}}, {{ui:Tvöfalda}}, {{ui:Eyða}}, {{ui:Velja allt}} og {{ui:Velja ekkert}}. Skipun sem getur ekki virkað eins og er er grá; bentu á hana til að sjá af hverju, eða smelltu og stöðulínan segir til um það.

## Skref

1. Opnaðu IFC-líkan með safnhlut í, eða staðsettu einn fyrst. Sjá [Staðsetja búnað og húsgögn úr safninu](topic:place-from-library).
2. Smelltu á hlutinn í 3D-sýninni. Eiginleikarnir sýna reitinn **Safnhlutur**.
3. Smelltu á {{ui:Afrita}} eða ýttu á {{key:Mod+C}}.
4. Smelltu á {{ui:Líma}} eða ýttu á {{key:Mod+V}}. Staðsetningarstikan opnast og gegnsætt box fylgir bendlinum, snúið eins og upprunalegi hluturinn.
5. Ýttu á {{key:R}} til að snúa honum um 90°, á {{key:Tab}} til að smella bakhliðinni að vegg, eða skrifaðu X og Y í staðsetningarstikuna.
6. Smelltu þar sem afritið á að fara. Hver smellur staðsetur annað afrit; ýttu á {{key:Esc}} til að hætta.
7. Smelltu á {{ui:Vista sem IFC}} til að sækja breytta afritið af líkaninu.

## Líma á sama stað

{{ui:Meira}}, {{ui:Líma á sama stað}} eða {{key:Mod+Shift+V}} límir án þess að smella, á sama X og Y og snúið eins:

- **Inn í sama líkan, á sömu hæð**: tveir hlutir á nákvæmlega sama stað væru gagnslausir, svo afritið fer rétt við hliðina á upprunalega, einni breidd hlutarins auk 100 mm eftir eigin breidd hlutarins. Límdu aftur á sama stað frá nýja afritinu til að búa til röð.
- **Á aðra hæð eða inn í annað líkan**: nákvæmlega sömu X, Y og snúningur. BimCraft notar hæð með sama heiti; ef hún er ekki til, þá þá sem er í næstu hæð. Stöðulínan segir hvaða hæð var valin.

## Tvöfalda

{{ui:Meira}}, {{ui:Tvöfalda}} eða {{key:Mod+D}} afritar valda hlutinn og byrjar strax að líma hann: eitt skref í stað tveggja.

## Inn í annað líkan eða annan flipa

Það sem þú afritar er geymt í þessum vafra, svo þú getur opnað annað IFC-líkan, eða BimCraft í öðrum flipa, og límt þar. Hinu líkaninu þarf safnhlutinn sjálfan: BimCraft hefur hann þegar hluturinn var staðsettur, skipt út eða uppfærður í þessum flipa. Hlutur sem var staðsettur í fyrri lotu má líma aftur aðeins í sitt eigið líkan; í öðru líkani skaltu staðsetja hann úr flipanum {{ui:Safn}}.

## Það sem þú átt að sjá

- Afritið í líkaninu, valið, með sama safnhlut, leyfi, búnaðargögnum, magni og athugasemd og upprunalega hlutnum, og **næsta lausa hlutnúmer**. Breyttu númerinu í Eiginleikum, undir `CadCraft_Placement`.
- „Staðsett: *hlutur* (hlutur *n*)“ í breytingalistanum. {{key:Mod+Z}} tekur það til baka; {{key:Mod+Y}} setur það aftur.

## Gott að vita

- Afrit deila gerð upprunalega hlutarins, þannig að þau nota öll eitt sett af rúmfræði, eins og þegar sami hlutur er staðsettur tvisvar.
- {{ui:Afturkalla}} og {{ui:Endurgera}} ná yfir allar breytingar: breytt gildi, staðsetningar, límingar, skipti og uppfærslur. Endurgerð setur staðsetningu aftur á sama stað; ný breyting eyðir því sem hægt var að endurgera.
- Í 2D-sýninni á teikningu er ekkert hægt að velja, svo ekkert er hægt að afrita. Notaðu {{ui:Breyta í CadCraft}} til að breyta teikningunni, þegar hann birtist.

## Algeng mistök

- **{{ui:Líma}} segir að frumefnin komi úr öðru líkani.** Síðasta sem þú afritaðir var byggingarfrumefni, eða nokkur frumefni: þau límast aðeins inn í sitt eigið líkan. Veldu einn staðsettan safnhlut og afritaðu hann.
- **{{ui:Líma}} segir að afritið komi úr öðru líkani án safnhlutarins.** Staðsettu hlutinn einu sinni úr flipanum {{ui:Safn}} í þessum flipa, og afritaðu og límdu hann síðan.
- **{{key:Mod+C}} afritar texta af síðunni í staðinn.** Texti var valinn á síðunni. Smelltu fyrst á líkanið.

## Tengt efni

- [Takkar og mús](topic:keyboard#edit)
- [BimCraft-stillingar](topic:settings)
