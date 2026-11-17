---
title: Mæla vegalengdir, flatarmál fleta og staðsetningar í þrívídd
summary: Mældu á milli tveggja punkta í IFC-líkani með smellingu á horn og brúnir, lestu mismuninn eftir X, Y og Z, og mældu flatarmál flatrar flatar.
keywords: mæla, mæling, vegalengd, lengd, málsetning, flatarmál, flatarmál flatar, smella, horn, brún, málband, mælistika, bil, staðsetning, breiddargráða, lengdargráða, lat long, hnit, landfræðileg tilvísun, kortaumbreyting, EPSG, mæling, austur, norður, WGS 84, viðmiðunarflötur
from: 5f430bba
---

## Hvað þú gerir

Athugaðu bil, veggjalengd eða stærð flatar beint úr líkaninu, án þess að opna hönnunarforritið.

## Skref

1. Opnaðu IFC-líkan.
2. Smelltu á {{ui:Mæla}} á tækjastikunni, eða ýttu á {{key:M}}. Stika opnast neðst í sýninni.
3. **Vegalengd:** með {{ui:Vegalengd}} valið, smelltu á fyrsta punktinn og síðan þann annan. Nálægt horni smellur bendillinn á það, nálægt brún á brúnina. Litli texti við bendilinn segir hvort. Hvert par smella býr til eina mælingu.
4. **Flatarmál flatar:** veldu {{ui:Flatarmál flatar}} og smelltu á flöt. Öll flata flöturinn lýsir upp og flatarmálið birtist.
5. **Beinar línur:** haltu {{key:Shift}} inni þegar þú velur annan punktinn, eða smelltu á {{ui:Bein}} í stikunni til að halda henni. Línan liggur þá eftir þeim ás sem bendillinn er næst (í yfirsýn eftir X eða Y grunnmyndarinnar; í öðrum sýnum eftir X, Y eða Z), og texti bendilsins segir „bein eftir ás“. {{key:M}} byrjar og hættir enn mælingu.
6. Smelltu á {{ui:Hreinsa}} til að fjarlægja mælingarnar, eða {{ui:Lokið}} (eða {{key:Esc}}) til að hætta að mæla.

## Það sem þú ættir að sjá

- Lína milli punktanna tveggja með lengdinni á sér, og í stikunni lengdina ásamt því hversu langt hún fer eftir X, Y og Z (í ásum líkansins, Z upp), öll í {{ui:Einingar}} sem valdar eru á tækjastikunni.
- Flatarmál flatar í fermetrum, á fletinum og í stikunni.
- Textar haldast á mælingum sínum meðan þú snýst, færir til og aðdráttar.
- Meðan þú mælir velja smellir ekki hluti. Skurðarplan eða kassi sker líkanið enn, og þú getur mælt það sem það sýnir, líka skorna fleti.

## Hvar punktur er á jörðinni

Smelltu á {{ui:Staðsetning}} í mælistikunni og smelltu síðan á punkt á líkaninu (hann smellur á horn og brúnir eins og við vegalengdir). Stikan sýnir:

- **breiddar- og lengdargráðu**, í tugabrotum gráðu og í gráðum, mínútum og sekúndum, í WGS 84 til að byrja með;
- **kortahnit** (austur- og norðurhnit, skrifuð í {{ui:Einingar}} sem valdar eru á tækjastikunni) í kortakerfi líkansins sjálfs, til dæmis `EPSG:28356`;
- **hæðina** og lóðrétta viðmiðunarflötinn sem skráin nefnir, og **eigin viðmiðunarflöt** skráarinnar (til dæmis GDA94).

{{ui:Afrita}} setur allt á klippiborðið í einni línu. Breyttu kerfinu sem breiddar- og lengdargráður eru í undir {{ui:Stillingar}} › {{ui:BimCraft}} › {{ui:Staðsetning}}: WGS 84 (eins og GPS og vefkort), eigin viðmiðunarflötur skráarinnar, eða annar algengur eins og ETRS89 eða NAD83.

Þetta krefst landfræðilega tengds líkans: eins sem var flutt út með kortahnitum (kortaumbreyting í varpað kerfi með EPSG-kóða). Líkan sem hefur aðeins breiddar- og lengdargráðu lóðar fær áætlaða staðsetningu, reiknaða út frá punkti lóðarinnar og raunnorðri hennar, og stikan segir það. Þegar nokkur líkön eru opin notar hver punktur landfræðilega tilvísun síns eigin líkans.

:::note
Færsla milli viðmiðunarflata (til dæmis úr GDA94 í WGS 84) er gerð án ristaskráa, þannig að hún er nákvæm upp á nokkra metra. Stöðulínan segir hversu nákvæm. Kortahnitin sjálf eru nákvæm.
:::

## Algeng mistök

- **„…hefur enga landfræðilega tilvísun“.** Skráin hefur hvorki kortaumbreytingu né breiddar- og lengdargráðu lóðar. Fluttu hana út aftur með hnitakerfið stillt (sameiginleg hnit eða mælipunktur í hönnunarforritinu).
- **Kortahnit en engin breiddar- og lengdargráða.** Skráin nefnir kortakerfi sitt án EPSG-kóða, eða með kóða sem er ekki á listanum. Stöðulínan segir hvor.
- **Punkturinn lendir á fletinum, ekki horninu.** Smellun skoðar þáttinn undir bendlinum. Færðu þig nær horninu eða aðdráttu.
- **Flatarmálið er minna en búist var við.** Op eru ekki talin með, og flötur sem beygist er nokkrir fletir: smelltu á hvern.
- **{{key:Esc}} hætti mælingunni.** Fyrsta {{key:Esc}} hendir hálfgerðri vegalengd, annað hættir.

## Næst

- [Skera IFC-líkan með skurðarplani](topic:section-plane)
- [Fela, einangra og sjá í gegnum þætti](topic:hide-and-isolate)
