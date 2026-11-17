---
title: Áferð rýma og áferðarlistar
summary: Segðu hvað þekur gólf, veggi og loft hvers rýmis, bættu við svæðum eins og flísaðri skvettuvörn, og fáðu áferðarlista eftir rýmum, veggjum og svæðum með flatarmálum, flísafjölda þar með töldum skornum flísum og rúmmáli undirlags.
keywords: áferð, áferðir, áferðarlisti, áferð rýma, gólfáferð, veggáferð, loftáferð, sökkulborð, flís, flísar, skornar flísar, flísafjöldi, úrgangur, undirlag, gólflag, burðarplata, múrhúð, svæði, skvettuvörn, veggbekkur, blautt rými, innri, magn
from: 8c30498c
---

## Hvað þú gerir

Segðu BimCraft einu sinni hvernig hvert rými er frágengið. Áferðarlistarnir sýna þá flatarmál, flísarnar sem þarf að panta og rúmmál undirlags, og breytast með líkaninu.

## Skref

1. Kveiktu á {{ui:Teikna}}, opnaðu **Listar** í vinstra spjaldinu og smelltu á **Áferð rýma**.
2. Undir **Gerðir áferðar** smelltu á **Bæta við gerð áferðar**. Gefðu henni heiti, tegund (Flís, Plata, Húð eða Borð) og þykkt. Fyrir flís gefurðu lengd og breidd flísarinnar, fúguna og úrgangsheimild í prósentum. Ef eitthvað liggur undir áferðinni (steypt gólflag, burðarplata, múrhúðunarlag) nefnirðu það undir **Undirlag** og gefur þykkt þess.
3. Undir **Rými** velurðu gólf-, vegg- og loftáferð hvers rýmis. Slærðu inn heiti sökkulborðs og hæð þess ef rýmið hefur það.
4. Undir **Svæði** smelltu á **Bæta við svæði** fyrir hluta rýmis sem fær aðra áferð:
   - **veggsvæði** er belti milli tveggja hæða yfir gólfi (flísuð skvettuvörn frá 0 til 1200, veggbekkur). Það er á öllum veggjum rýmisins, eða þú velur veggi þess rýmis í líkaninu og smellir á hnappinn **Á** til að halda því við þá;
   - **gólf- eða loftsvæði** er flatarmál sem þú slærð inn. Það er dregið frá eigin áferð rýmisins.
5. Smelltu á **Vista**. Það er eitt skref í afturköllun. Lengdir eru slegnar inn í einingum verkefnisins.

## Listarnir

Fjórar færslur bætast við listann Lista:

- **Áferð eftir rýmum**: hvert rými með gólf-, vegg- og loftáferð sinni, flatarmál þeirra og sökkulborðið með lengd sinni.
- **Áferð eftir veggjum**: hver veggkafli á hlið rýmis og það belti hans sem áferð þekur, með lengd, brúttóflatarmáli, frádrætti, nettóflatarmáli og, fyrir flísar, heilum flísum, skornum flísum og flísum til pöntunar.
- **Áferð eftir svæðum**: hvert svæði með áferð sinni, nettóflatarmáli, flísum og rúmmáli undirlags.
- **Magn áferðar**: ein röð fyrir hverja áferð: nettóflatarmál, heilar og skornar flísar, flísar til pöntunar, undirlagið og rúmmál þess, og eigið rúmmál áferðarinnar.

Hópaðu, samtalaðu, vistaðu og fluttu þá út eins og hvern annan lista: sjá [Raðaðu, vistaðu og fluttu út lista](topic:schedule-layouts). Smelltu á tölu til að velja það sem hún kemur úr: frádrættir veggs velja hurðir hans og glugga.

## Hvernig áferð er mæld

- **Veggir**: hver veggkafli á hlið rýmisins, lengd hans eftir rýminu sinnum hæðinni sem áferðin nær yfir, að frádregnum hluta hverrar hurðar og glugga innan þeirrar hæðar. Veggur lægri en rýmið er áferðaður upp að eigin efri brún. Mæliaðferð verkefnisins ræður hvaða op eru of lítil til að dragast frá ([Listar](topic:plan-schedules-and-pdf)).
- **Gólf og loft**: rýmið innan veggfleta, að frádregnum eyjum í því.
- **Sökkulborð**: lengd veggja rýmisins að frádreginni breidd hurða þess.
- **Flísar**: lagðar sem net frá einu horni yfirborðsins, með einni fúgu á milli flísa. Flís sem liggur alveg á yfirborðinu er heil flís; flís sem liggur að hluta á því (við brún, í kringum op) er skorin flís. Flísar til pöntunar eru heilar plús skornar, plús úrgangsheimildin, námundað upp. Sérhver skorin flís er talin sem ný flís: afskurður er ekki notaður aftur.
- **Rúmmál undirlags**: nettóflatarmálið sinnum þykkt undirlagsins.
- Talning merkt **≈** er reiknuð út frá flatarmálinu í stað þess að vera lögð flís fyrir flís: yfirborð með svæði dregnu frá sér, eða mjög stórt yfirborð.

## Gott að vita

- Áferðirnar eru geymdar í byggingarskránni (eiginleikasafn `CadCraft_Finishes` á verkefninu). Sérhvert rými sem hefur áferð fær einnig staðlaða IFC-eiginleikasafnið `Pset_SpaceCoveringRequirements`, svo önnur forrit lesi heitin.
- Flísaskipulagið byrjar í horni. Skipulag miðjað á rýminu, mynstur (síldarbein, múrsteinsbind) og endurnýting afskurðar eru ekki reiknuð út.
- Bogadreginn veggur og rýmismörk sem eru ekki veggur (rýmaskil) eru færð sem **Önnur mörk** með lengd sinni og engum opum.
- Eldri færslan **Áferð** listar áferðarlög veggjagerðanna; **Lög: flatarmál og rúmmál** listar hvert lag á hverri lagskiptri gerð. Áferðir rýma hér eru það sem sett er á rýmið ofan á þau.
- Aðstoðarmaður getur sett áferðir fyrir þig með `finishes_set`: sjá [Láttu gervigreindaraðstoðarmann vinna með líkanið þitt](topic:assistants).
