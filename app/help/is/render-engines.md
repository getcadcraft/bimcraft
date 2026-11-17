---
title: Veldu hvaða forrit teiknar myndina
summary: Vélin valin í myndgerðarglugganum, önnur forrit í CadCraft Studio og hvað vefurinn gerir í staðinn.
keywords: myndgerð, vél, myndgerðarvél, viðbót, studio, utanaðkomandi forrit, teiknað af, röð, vél úr viðbót
from: 44a1ef5e
---

{{ui:Render}} er með **Vél**-val fyrir ofan {{ui:Mode}}. Okkar eigin tvær vélar eru alltaf til staðar og virka alls staðar; viðbætur geta bætt við fleiri, og í CadCraft Studio hefur listinn líka forritin sem taka senuna yfir.

| Vél | Hvað hún gerir | Hvar |
|---|---|---|
| Innbyggð: Hröð | Fljót kyrrmynd: dagsbirta, mjúkir skuggar, glers- og málmútlit, á sekúndum | Í vafranum og Studio |
| Innbyggð: Geislarakning | Ljós sem endurkastast milli yfirborða á skjákortinu eða örgjörvanum, myndgerðarröðin og aðrar tölvur á netinu þínu | Í vafranum og Studio |
| Vél úr viðbót | Hún teiknar og skilar myndinni til baka: sjá [Teikna myndina með öðru forriti](topic:render-other-program) | Í vafranum (vél skrifuð í JavaScript) eða Studio (vél sem keyrir forrit) |
| Forrit sem tekur senuna yfir | Studio setur senuna í sína möppu og heldur henni í takt | Studio |
| Opna í … | Vistar senuna og opnar hana í forriti; ekkert skilar sér til baka: sjá [Opna senuna í öðru forriti](topic:render-open-in) | Vefurinn vistar skrána |

## Hvernig valið virkar

- Ef Hröð eða Geislarakning er valin breytist {{ui:Mode}} með henni, og öfugt. Ekkert annað í glugganum breytist fyrir þá sem nota aldrei aðra vél.
- Vél sem er ekki tiltæk helst á listanum með ástæðunni („fannst ekki“, „þarfnast nýrri útgáfu“); þú getur ekki valið hana. Í vafranum sýnir vél sem keyrir aðeins í Studio „vistar skrá“: {{ui:Render}} vistar þá senuna og stillingar hennar í skrá sem þú tekur með þér í það forrit.
- Valið er vistað með stillingum skrárinnar, og vélin sem þú valdir síðast er upphafsvélin fyrir skrár sem hafa ekkert val sjálfar.
- Mynd frá öðru forriti segir hvaða forrit teiknaði hana og útgáfu þess, bæði í glugganum og í myndgerðarröðinni. Loforðin á síðunni [Myndgerð](topic:render) ná aðeins yfir **okkar eigin** vélar: annað forrit lýsir, tónar og tekur sýnishorn á sinn hátt, þannig að tvær myndir af sömu senu eru líkar í myndavél, sól, lömpum og lýsingu, en ekki pixill fyrir pixill.

## Það sem hver vél fær

Senan fer til annars forrits sem **pakki**: líkanið sem USD-skrá (sama skrá og [Vista sem USD](topic:usd) skrifar), og stillingaskrá sem geymir það sem USD-innflytjandi er ekki treystandi fyrir: nákvæm efnisgildi, lampana sem eru kveiktir með afli sínu og ljósprófílum, sólina, himininn, lýsinguna og myndavélina eins og glugginn myndi teikna hana. Ekkert er hlaðið upp neitt.

## Myndgerðarröðin

Mynd fyrir annað forrit getur beðið í [myndgerðarröðinni](topic:render#the-render-queue) eins og okkar eigin; verkið hennar man hvaða vél það er fyrir.
