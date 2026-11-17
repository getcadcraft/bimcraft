---
title: Stigar og handrið
summary: Teiknaðu bein, L-laga, U-laga og snúningsstiga sem reikna sín þrep og tröppur út frá hæðinni milli hæða, með handriðum og rimlum, og stigaopið skorið í gólfið fyrir ofan; teiknaðu öryggishandrið meðfram pöllum og um op.
keywords: hringstigi, hringlaga stigi, stigi, stigar, stigahús, stigakafli, uppstig, trittur, milliplan, snúningsþrep, L-stigi, U-stigi, hárnálastigi, handrið, öryggishandrið, varnarhandrið, rimi, endastólpi, stólpi, stigaop, höfuðrými, pallur, svalir
from: 16e5ace4
---

## Hvað þú gerir

Bættu við stigum milli hæða og handriðum þar sem fólk þarf á þeim að halda. Stigi reiknar sín eigin þrep út frá hæðinni milli hæðanna, heldur þeim innan venjulegra íbúðamarka, setur handrið á opnar hliðar sínar og sker stigaopið í gólfið fyrir ofan.

## Teikna stiga

1. Á hæðinni þar sem stiginn byrjar, opnaðu {{ui:Smíð}} og veldu {{ui:Stigi}}.
2. Veldu gerðina — **Beinn**, **L með milliplani**, **U með milliplani** eða **L með snúningsþrepum** — hvernig hann **snýst**, **breidd** hans og hvar **handriðin** hans eiga að vera.
3. Smelltu þar sem stiginn byrjar: á miðju fremri brúnar neðsta þreps.
4. Færðu bendilinn í þá átt sem stiginn fer upp; þrepin fylgja honum, ásamt fjölda uppstiga og trítta. Hann smellur að veggjum og í 15° þrep; haltu inni {{key:Shift}} til að hafa hann réttan.
5. Smelltu. {{key:Esc}} byrjar aftur.

## Teikna hringstiga

1. Opnaðu {{ui:Smíð}}, veldu {{ui:Stigi}} og veldu síðan **Hringstigi** sem gerðina.
2. Stilltu **Snúningur**, í hvaða átt hann vindur sig upp á við (vinstri er rangsælis).
3. Smelltu á miðju stólpans.
4. Smelltu í þá átt sem neðsti trittur vísar.

Hringstiginn byrjar 30" breiður (tröppuna, frá stólpanum og út að ytri brún), með 4½" stólpa. Uppstigin eru reiknuð út frá hæðinni milli hæða, mest 9½" sjálfgefið. Tröppur eru 7½" djúpar á gönguhæð, 12" út frá stólpanum. Handriðið liggur að utanverðu.

Í **Eiginleikum** bætir hringstigi við **Miðstólpa**, þvermáli hans. Reiturinn **Trittur** er mældur á gönguhæð. Athuganir hans eru merktar sem sjálfgefin gildi fyrir hringstiga: 26" hrein breidd, að minnsta kosti 6¾" af tritti á gönguhæð, uppstig mest 9½" og handrið 34"–38". Þetta er ekki verkfræðileg greining; byggingarfulltrúinn ákveður.

## Hvernig þrepin eru reiknuð út

Hæðin milli gólfs hæðarinnar og hæðarinnar fyrir ofan er skipt í jafn há uppstig, ekki hærri en 7¾", og hver trittur er 10" djúpur (hægt er að breyta báðu í **Eiginleikum**). Milliplan telst sem eitt þrep; snúningsþrep eru þrjú þrep sem raðast um innra hornið. Ef hæð hæðar er breytt, er hver stigi á henni reiknaður aftur.

:::warning
7¾" uppstig, 10" trittir, 36" breidd, 6'-8" höfuðrými og 34"–38" handrið eru sjálfgefin gildi samkvæmt venjulegum íbúðarreglum, ekki verkfræðileg greining. **Eiginleikar** sýna hvaða gildi eru uppfyllt; byggingarfulltrúinn ákveður hvað gildir.
:::

## Breyta stiga

Veldu hann (smelltu á hann á grunnmyndinni eða í þrívíddarsýninni) og breyttu í **Eiginleikum**: gerð hans og snúningi, breidd, hæsta uppstigi, dýpt trítta, handriðum og hæð þeirra, og **Skera gólfið fyrir ofan** fyrir stigaopið. Uppstigin og tröppurnar sem hann endaði með eru sýnd fyrir neðan.

## Stigaopið

Þegar hæðin fyrir ofan er með gólfi sker stiginn það þar sem þrepin hefðu minna en 6'-8" höfuðrými. Skurðurinn fylgir stiganum og hverfur þegar stiganum er eytt.

## Teikna handrið

1. Opnaðu {{ui:Smíð}} og veldu {{ui:Handrið}}.
2. Veldu **Öryggishandrið** (36" hátt) eða **Handrið** og hæð þess.
3. Smelltu meðfram brúninni — palli, svölum, í kringum stigaop — og tvísmelltu eða ýttu á {{key:Enter}} til að ljúka.

Handriðin fá stólpa í endum sínum og hornum og rimla með bilum undir 4". Veldu eitt til að breyta gerð þess, hæð eða hversu langt yfir gólfinu það byrjar.

## Teikna girðingu

Veldu **Girðing** í sama handriðsverkfæri, stilltu hæð hennar (1800 mm til að byrja með), smelltu meðfram línu girðingarinnar og ýttu á {{key:Enter}}.

- Girðingin fær stólpa í hvorum enda og á hverju horni, og stólpa í mesta lagi á 2.4 m fresti þar á milli. Spjaldgirðing hefur spjald milli stólpa; rimlagirðing hefur tvö rimla. Þessar stærðir eru algeng val, ekki krafa í reglum; staðbundnar reglur takmarka hæð girðingar.
- Hún er eitt stak í líkaninu (IfcRailing sem heitir Fence) með eiginleikasafninu {{ui:CadCraft_Fence}}: stíl, hæð, stólpa, spjöld, rimla, hlið, lengd og flatarmál spjalda. Eitt afturköllunarskref.
- Ekki teiknað hér: hlið (smiðurinn í CivilCraft setur þau út), grindur, landslag (girðingin stendur á hæðinni) og að velja einn stólpa.

## Hvað er vistað

Stigi er vistaður sem IFC-stigi úr stigakaflum (með uppstigum, trittum, hæð uppstiga og lengd trítta), milliplönum, snúningsþrepum og handriðum; stigaopið er op í gólfplötunni fyrir ofan. Handrið eru IFC-handrið með lengd sinni og fjölda rimla og stólpa.
