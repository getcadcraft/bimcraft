---
title: Meta dagsbirtuna í hverju rými
summary: Meðaldagsbirtustuðull hvers rýmis út frá gluggum þess, innri yfirborðum og himninum sem hver gluggi sér, með himinhorninu mælt í líkaninu. Frumhönnunarmat, ekki hermun eða athugun á reglum.
keywords: dagsbirta, dagsbirtustuðull, meðaldagsbirtustuðull, adf, lóðrétt himinhluti, vsc, sólarhitun, sól, g-gildi, net, skipt flæði, himinhluti, innri endurkast, náttúrulegt ljós, gluggi, gler, himinhorn, hindrun, skuggi frá öðru, svalir, skyggni, endurkast, gegnumstreymi, frumhönnun, greining, rými, herbergi
from: 5f300a78
---

{{ui:Dagsbirta}}-flipinn í hægra spjaldinu reiknar út **meðaldagsbirtustuðul** hvers rýmis: hversu stór hluti af ljósi himins í skýjuðu veðri nær inn í rýmið, að meðaltali, sem prósenta. Hann les rými (svæði) og glugga í opna IFC-líkaninu. Ekkert er breytt í líkaninu og engu er hlaðið upp.

:::warning
Allt í þessum flipa er **hjálpartæki við hönnun, ekki útreikningur á samræmi**: frumhönnunarmat eftir birtum aðferðum, **ekki hermun** og **ekki athugun á byggingarreglugerð eða staðli**. BS EN 17037, LEED, BREEAM og orkureglugerðir krefjast dagsbirtuhermunar með veðurfari staðarins; notaðu dagsbirtuhermunarforrit fyrir það.
:::

## Reikna það út

1. Opnaðu IFC-líkan sem hefur rými (svæði) og glugga. Líkön sem eru teiknuð hér hafa rými innan hvers lokaðs veggjasetts.
2. Opnaðu flipann {{ui:Dagsbirta}} og smelltu á {{ui:Reikna}}.
3. Hvert rými sýnir dagsbirtustuðul sinn og band: undir 2 %, 2–5 %, 5 % eða meira. Smelltu á rými til að sjá yfirborð þess og flatarmál og himinhorn hvers glugga; rýmið og gluggar þess eru valdir í líkaninu.

Breyttu inntaki og tölurnar fylgja strax; eftir breytingu á líkaninu skaltu {{ui:Reikna aftur}}. {{ui:CSV}} vistar hvert rými með tölum sínum og inntakinu sem notað var.

## Formúlan

Meðaldagsbirtustuðull (%) = T × Ag × θ × M ÷ (A × (1 − R²)), lagt saman yfir glugga rýmisins (formúla Littlefair, notuð í BRE 209, BS 8206-2 og CIBSE LG10):

- **T**, ljósgegndræpi glersins (0,7 til að byrja með: notaðu gildi framleiðanda).
- **Ag**, glerjað flatarmál: flatarmál hvers glugga (heildarbreidd × hæð, annars stærð hans í líkaninu) × **glerjaður hluti** (0,75 til að byrja með: það sem eftir er er rammi).
- **θ**, himinhornið sem glugginn sér, í gráðum (sjá neðar).
- **M**, viðhaldsstuðull fyrir óhreinindi á glerinu (1 til að byrja með).
- **A**, hvert innra yfirborð rýmisins: gólf, veggir, loft og gluggar, tekið úr eigin lögun rýmisins.
- **R**, meðalendurkast þeirra, vegið eftir flatarmáli: gólf 0,2, veggir 0,5, loft 0,7 til að byrja með; gler telst 0,1.

## Hvernig himinhornið er mælt

Fyrir hvern glugga sker BimCraft líkanið með lóðréttum fleti sem er hornréttur á gluggann, frá ytri fleti glersins, og horfir frá sjóndeildarhring beint upp: allt sem skurðurinn mætir fyrir framan gluggann (bygging á móti, svalir eða skyggni fyrir ofan, þakskegg) hylur hluta af þessum 90°. θ er það sem eftir er. Sjálfur glugginn og veggurinn sem hann situr í eru undanskilin. Þetta er gert á fimm stöðum yfir breidd gluggans og meðaltal tekið, þannig að grannur staur fyrir framan miðjuna tekur sinn hluta en ekki allan himininn.

Bygging 8,5 m fyrir ofan miðju gluggans og 9,9 m frá honum hylur 40,65° (hornið þar sem tangens er 8,5 ÷ 9,9), og eftir stendur θ = 49,35°.

## Lóðrétti himinhluti hvers glugga

{{ui:Reikna}} mælir einnig, fyrir hvern glugga, hversu mikið af öllum himninum hann sér: sama lóðrétta skurðinn, snúinn í allar áttir yfir framhlið gluggans (á tveggja gráðu fresti, frá annarri hlið til hinnar), þannig að bygging til hliðar, ugga eða djúp rauf tekur sinn hluta. Út frá því reiknar BimCraft **lóðrétta himinhlutann (VSC)**: hversu stór hluti af ljósi skýjaðs himins nær glerinu, sem hlutfall af því sem opið, flatt þak fengi. Gluggi með ekkert fyrir framan sig fær **39,6 %**, það mesta sem lóðréttur gluggi getur fengið; há bygging sem rís 25° fyrir ofan gluggann skilur eftir um **27 %**, talan sem breskar leiðbeiningar (BRE 209) nota sem þumalputtareglu. Hver gluggi í smáatriðum rýmisins sýnir VSC sinn og **hindrunarhornið** sitt (hversu hátt hlutir rísa beint fyrir framan hann).

Himininn er staðlaði CIE skýjaði himinn, sem er þrisvar sinnum bjartari beint upp en við sjóndeildarhring, og skurðurinn er nákvæmur: ekkert er sýnatekið.

## Sólin í gegnum gluggana á dagsetningu

Opnaðu {{ui:Sól í gegnum glugga á dagsetningu}} og veldu dagsetningu. BimCraft fylgir sólinni í gegnum daginn með kvartstímum og leggur saman, fyrir hvern glugga, hitann sem sólin hleypir í gegnum glerið:

- **beina sólin**, þegar hún er fyrir framan gluggann og ekkert í líkaninu hylur hana (sami nákvæmi skurður, snúinn að sólinni: svalir sem skyggja á hástigssól að hádegi hleypa lágsólinni að vetri inn);
- **ljós himinsins** á glerinu, að frádregnu því sem glugginn sér ekki;
- ljósið **frá jörðinni** (endurkast hennar: 0,2 til að byrja með);
- allt í gegnum **g-gildi** glersins (hlutfall sólarorkunnar sem það hleypir í gegn: 0,6 til að byrja með; notaðu gildi framleiðanda) og glerjaðan hluta þess.

Hvert rými sýnir heildina fyrir daginn í kWh og hámarkið sitt í vöttum með tímanum; smáatriði rýmisins teiknar daginn sem línurit. Himinninn er heiðskír samkvæmt líkani Hottel (Duffie & Beckman, *Solar Engineering of Thermal Processes*), með sumar- eða vetrartölum fyrir staðinn og árstíðina og hæð staðarins; staða sólarinnar kemur frá NOAA. Breiddar- og lengdargráða staðarins koma úr staðnum í IFC-skránni, og norður úr sannnorðri líkansins; ef líkanið hefur engan stað skaltu slá inn breiddar- og lengdargráðu. Tímar eru staðartími (án sumartíma) í því tímabelti sem þú slærð inn, annars því sem lengdargráðan gefur til kynna.

Það sleppir: skýjum (þetta er heiðskír dagur), því að glerið hleypir minna inn í lágum hornum, römmum sem skyggja á glerið, gardínum og því sem veggirnir og þakið taka í sig. Kælimatið í sama flipa notar hámarkið.

## Dagsbirtustuðullinn á neti

Opnaðu {{ui:Dagsbirtustuðull á neti}} og {{ui:Reikna netið}}: BimCraft leggur net yfir gólf hvers rýmis í hæð vinnuflatarins (0,85 m til að byrja með), hálfum metra inn frá veggjum, og reiknar út dagsbirtustuðulinn í hverjum punkti eftir **aðferð BRE um skipt flæði**:

- **himinhlutinn**: sá skýjaði himinn sem sést frá punktinum í gegnum opnun hvers glugga, að frádregnum römmum;
- **utanaðkomandi endurkastaði hlutinn**: það sem punkturinn sér af byggingum utan við í gegnum gluggann, sem skína með tíunda hluta himinsins á bak við þær (breyttu birtu hindrunarinnar ef þær eru mikið ljósari eða dekkri);
- **innanaðkomandi endurkastaði hlutinn**: ljósið sem hoppar um rýmið, frá yfirborðum rýmisins og endurkasti þeirra, flatarmáli glugganna og því hve mikið af því er utan þeirra (BRE-formúlan, með ljósgegndræpi glersins í stað glærs glers sem hún gerði ráð fyrir).

Hvert rými sýnir meðaltal sitt, lægsta punkt sinn og hversu stór hluti þess fær 2 % eða meira; smáatriði rýmisins teiknar grunnmynd þess með hverjum punkti litaðan eftir dagsbirtustuðli hans og gluggunum í rauðu. Til að halda þessu hröðu á hvaða tölvu sem er fær rými mest **400 punkta**: í stóru rými stækkar bilið til að passa (slerðu inn bil til að velja sjálfur).

## Það sem það sleppir

- Þakgluggar (gler liggjandi flatt eða hallandi) eru skráðir en ekki taldir: formúlurnar hér eru fyrir glugga í veggjum.
- Gluggar án rýmis á bak við sig (anddyri án rýmis, til dæmis) eru skráðir sér.
- Gluggarauf (opnunin er tekin á ytri fleti), glýja, sólarstundir og veðurfarsbundin dagsbirta. Fyrir BS EN 17037, LEED eða BREEAM skaltu nota dagsbirtuhermunarforrit.
- Bilin eru úr eldri bresku leiðbeiningum (BS 8206-2), sýnd sem leiðarvísir, aldrei sem standist eða falli.
