---
title: Lögun veggja, skipting, frávik, teygja og læsing
summary: Teiknaðu veggi sem rétthyrning, marghyrning, boga, á völdum línum eða í kringum útlínu; skiptu þeim, taktu bút úr, færðu þá til hliðar, teygðu í reit, jafnaðu þá og læstu þeim hverjum við annan, við málsetningu eða við ristlínu. Sérhver breyting heldur veggjunum tengdum og er eitt skref til afturköllunar.
keywords: skipta um gerð, breyta gerð, endurvelja gerð, hvað færðist, lod, þróunarstig, tengistíll, skáskurður, stúfur, rétt afskorið, veggjatengingar, næsti, fer í gegn, banna tengingu, leyfa tengingu, forgangur laga, kjarni, forgangur, samskeyti, rétthyrningur, snúinn rétthyrningur, marghyrningur, innritaður, umritaður, bogi, miðja, snertibogi, velja línur, flipi, rekja, útlína, töfrasproti, skipta, skipta með bili, bil, eyða hluta, tengja aftur, frávik, afrit, teygja í reit, rammi, teygja, jafna, læsa, hengilás, takmörkun, læsa málsetningu, rist, læsa við ristlínu, færa ristlínu, staðsetningarfrávik, aftengja, frístandandi, vaxa frá, mæla frá, miðlína, innri flötur, ytri flötur, aftengja, alt
from: 5b7d2f75
---

## Það sem þú gerir

Búðu til og breyttu veggjum með uppskriftum veggjaverkfærisins. Hver þeirra endar eins og þegar veggur er teiknaður eftir hornum sínum: hornin tengjast sjálf, tengingarnar eru vistaðar í skránni, og öll breytingin er eitt skref í **Breytingum** sem {{ui:Afturkalla}} tekur til baka. Veggirnir halda auðkenni sínu: veggur sem þú skiptir, færir eða teygir er enn sami veggurinn, með hurðum, gluggum og málsetningum sínum.

## Teikna rétthyrning, marghyrning eða boga

Með {{ui:Draw}} kveikt, opnaðu {{ui:Shapes}} í Teikna-hópnum (eða veldu lögun í **Lögun**-listanum í veggröðinni). Veggröðin sýnir gerð veggjar, teikniviðmiðun, ytri hlið og efst, eins og fyrir verkfærið {{ui:Wall}}. Smelltu síðan, eða sláðu inn punktana (x,y · @dx,dy · @lengd<horn · lengd eftir bendlinum):

- **Rétthyrningur**: tvö andstæð horn. Fjórir veggir, fjórar hornatengingar, eitt skref.
- **Snúinn rétthyrningur**: þar sem fyrsta hliðin byrjar og endar (það ákvarðar snúning hennar og lengd), síðan þriðji smellurinn fyrir hina hliðina.
- **Marghyrningur**: miðjan, síðan horn (**Innritað**) eða miðja hliðar (**Umritað**). Stilltu **Hliðar** (3 til 64) fyrst.
- **Bogi, miðja**: miðjan, upphafið (það ákvarðar radíusinn), endinn. **Átt**: styttri leiðin, rangsælis eða réttsælis. Ferill yfir þrjá fjórðu úr hring er teiknaður sem tveir veggir.
- **Snertibogi**: smelltu á enda veggjar, síðan þar sem bogi endar. Boginn fer frá enda veggjarins í átt veggjarins sjálfs.

Lokuð lögun fær ytri hlið sína út á við. Ef hún er teiknuð á **Ytri flöt** eða **Innri flöt**, er flöturinn sem þú smellir á sá sem helst kyrr.

## Veggir á línum sem þú hefur nú þegar

- **Velja línur**: smelltu á línu og veggur fer á hana. Ýttu á {{key:Tab}} (eða haltu {{key:Shift}} inni meðan þú smellir) til að taka alla keðju lína sem tengjast enda við enda. Línurnar eru teiknilínur þessarar sýnar, rekjuviðmiðunin og ristlínurnar.
- **Rekja útlínu**: smelltu inni í svæði sem lokast af þessum línum eða veggjum. Veggirnir fara í kringum minnsta svæðið í kringum smellinn.

## Stilla áður en teiknað er: frávik og tenging

Veggröðin hefur tvo reiti til viðbótar, sem verkfærið {{ui:Wall}} og lögunirnar nota:

- **Frávik**: veggirnir eru teiknaðir þessa fjarlægð frá línunni sem þú smellir á: + til vinstri, − til hægri, séð í þá átt sem þú teiknar.
- **Tenging**: taktu hakið af til að teikna frístandandi veggi. Endar þeirra fá **Banna tengingu** og haldast lausir hvert sem þeir fara (sjá [Breyta vegg](topic:change-a-wall-or-door)).

## Skipta, taka bút úr, tengja aftur

Opnaðu {{ui:Walls}} í Breyta-hópnum.

- **Skipta**: smelltu á vegg þar sem hann á að vera skorinn, eða sláðu inn fjarlægðina frá upphafi hans. Nálægt vegg sem sker hann smellur skurðurinn á staðinn þar sem þeir mætast. Hlutarnir tveir hafa sömu gerð og haldast tengdir enda við enda. **Bil** skilur eftir rými af þeirri lengd, miðjað á skurðinn. **Frjálsir endar** gefur skurðendunum **Banna tengingu** í staðinn (Stillingar › BimCraft › Veggir › **Þegar vegg er skipt** ákvarðar hvort er hakað í upphafi). Hurð eða gluggi fylgir þeim hluta sem hann stendur í; skurður í gegnum hann er hafnað.
- **Eyða hluta**: smelltu þar sem bútinn byrjar og þar sem hann endar. Hurð í bútnum fylgir honum.
- **Tengja aftur**: smelltu á hlutana tvo af einum vegg (í línu, sama gerð). Þeir verða aftur einn veggur, sá fyrsti sem þú smelltir á, með hurðum beggja.

## Tengistíll, bann við tengingu, forgangur laga

Opnaðu {{ui:Walls}} í Breyta-hópnum.

- **Tengistíll**: smelltu á horn þar sem tveir beinir veggir enda. Hver smellur fer í næsta stíl: **Skáskurður** (báðir endar skornir eftir línu frá innra horni að ytra horni, það sem hvert horn byrjar sem), **Stúfur** (annar veggurinn gengur í gegn að ytri fleti hins, sem stöðvast við hliðina á honum) og **Rétt afskorið** (eins og stúfur, og veggurinn sem gengur í gegn endar beint; í rétthyrndu horni lítur það út eins og stúfur). **Næsti**, eða {{key:Tab}}, gerir hinn vegginn að þeim sem gengur í gegn. **Stíll**-listinn í röndinni sýnir hornið sem þú smelltir síðast á. Sömu tvö val eru í **Eiginleikum** eins veggs: **Tengistíll í upphafi / í enda** og **Fer í gegn**. Sérhver breyting er eitt skref í **Breytingum**. Grunnmyndin, 3D-líkamið, rýmin og magntölurnar fylgja.
- Á T-tengingu gengur veggurinn sem hliðin er mætt alltaf í gegn. Þar sem tveir veggir krossast ákveður smellur (eða **Samfelldur þar sem hann krossar** í Eiginleikum) hvor er samfelldur; það ákvarðar hvaða lög veggjarins eru teiknuð í gegnum krossinn.
- Stíllinn tilheyrir tengingunni: hann helst þegar veggirnir færast og fer aðeins þegar tengingin fer (veggurinn er eytt, skorinn við þann enda, eða endinn fær **Banna tengingu**). Horn með bogadregnum vegg, eða þar sem þrír veggir eða fleiri mætast, heldur skáskurðinum. Horn sem er skarpara en um 30 gráður, eða flatara en um 150, fellur líka aftur í skáskurð.
- **Banna tengingu**: smelltu nálægt enda veggjar. Sá endi er frelsaður: hann tengist engu, hvert sem veggurinn fer, þar til þú smellir á hann aftur. Lausir endar eru merktir með krossi meðan verkfærið er á. Sami rofi er **Tenging í upphafi / Tenging í enda** í Eiginleikum.
- **Forgangur laga**: þar sem veggir með lögum mætast sker sterkara lagið það veikara, þannig að kjarnar tengjast kjörnum og frágangur stöðvast við sterkara lagið. Hvert lag hefur forgang frá 0 til 999; sjálfgefið kemur hann af hlutverki lagsins (burðarvirki 800, undirlag 600, einangrun 400, himna 300, frágangur 200, loftbil 100). {{ui:Forgangur laga}} opnar veggjasamsetninguna, þar sem dálkurinn **Forgangur** stillir eigin tölu lagsins. Lög með jöfnum forgangi stöðvast hvert við annað, og lína er aðeins dregin milli mismunandi efna. Þú sérð þetta á grunnmyndum með **Miðlungs** eða **Fín** smáatriði, í hornum, T-tengingum og krossum tveggja beinna veggja; Stillingar › BimCraft › Veggir › **Hreinsa veggjalög þar sem veggir mætast** slekkur á því. Það breytir aðeins því sem er teiknað inni í veggjunum: útlínur veggjanna og magntölurnar haldast eins og tengistíllinn gefur þær.

## Skipta um gerð á mörgum veggjum

Að fara úr skissugrunnmyndum í vinnuteikningar er aðallega breyting á gerð: almennur veggur verður að tiltekinni uppbyggingu. Þú teiknar ekkert upp á nýtt.

1. Veldu veggina (einn, eða marga með {{key:Ctrl}} eða {{key:Shift}}).
2. Í **Eiginleikum**, ýttu á **Skipta um gerð…** undir Gerð veggjar (eða opnaðu {{ui:Walls}} í Breyta-hópnum og veldu {{ui:Swap type}}, sem opnar sama lista). Listinn opnast inni í **Eiginleikum**, í reit valdra veggjanna. Hann er ekki gluggi og hylur ekkert: grunnmyndin, 3D-sýnin og valið virka áfram meðan hann er opinn, og hann fylgir veggjunum sem þú velur.
3. Listinn sýnir hverja veggjagerð með þykkt sinni og LOD-merki, til dæmis „Wall 230 generic, LOD 200“ og „230 clay brick, plastered both sides, LOD 300“. Gerðirnar sem valdir veggir hafa núna eru merktar. Skrifaðu í **Leita** til að þrengja: heiti, þykkt, eða `lod 300`.
4. Smelltu á gerð. Hver valinn veggur breytist í hana í einu skrefi, svo ein {{ui:Afturkalla}} tekur allt skiptið til baka. Litli x-hnappurinn lokar listanum.

Hver veggur heldur staðsetningarlínu sinni. Veggur á miðlínu sinni vex til beggja hliða; veggur sem staðsetningarlínan er flötur á heldur þeim fleti og vex hina leiðina, og veggirnir sem tengjast honum fylgja í hornunum. Veggir læstir við skipt vegg fylgja honum líka. Hurðir og gluggar haldast í veggjum sínum og eru skornir aftur fyrir nýju þykktina.

Eftir skiptin sýnir listinn **Hvað færðist**: hversu margir veggir breyttust og í hvað, þykkt og LOD fyrir og eftir, veggirnir sem færðust til hliðar til að halda staðsetningarlínu sinni, tengdu veggirnir sem fylgdu, hurðirnar og gluggarnir sem voru hýstir aftur, og hvert rými þar sem flatarmálið breyttist, með flatarmáli sínu fyrir og eftir. Stöðustikan segir hið sama í einni línu. Skýrslan segir þér aðeins frá; hún stöðvar aldrei skipti. Að velja gerð í **Eiginleikar › Gerð veggjar** gerir sama skipti og gefur sömu skýrslu.

Tvennt stöðvar skipti, og þá er ekkert breytt: hurð eða gluggi sem myndi ekki lengur passa í vegginn sinn (veggur styttist þar sem horn fylgir; gerðu hurðina mjórri eða færðu hana fyrst frá horninu), og læsing sem skiptið myndi rjúfa (veggur læstur við ristlínu með miðlínu sinni meðan staðsetningarlína hans er flötur; aflæstu honum eða settu staðsetningarlínuna aftur á miðlínuna).

Aðstoðarmaður sem er tengdur BimCraft getur gert sama skipti (verkfærin `wall_types_list` og `walls_swap_type`) og fær sömu skýrslu til baka.

Þróunarstigsmerki gerðar er stillt í ritli veggjasamsetninga: sjá [Veggjasamsetningar](topic:wall-assemblies).

## Frávik og teygja í reit

- **Frávik**: smelltu á vegg, síðan á þá hlið sem hann á að færa á, eða sláðu inn fjarlægðina. Veggurinn færist hornrétt á sjálfan sig og veggirnir sem tengjast honum teygjast. Taktu hakið við **Afrit** fyrir samsíða afrit í staðinn (það er ekki tengt upprunalega).
- **Teygja í reit**: smelltu á tvö horn á reit, síðan á punkt sem færist frá og punkt sem færist á. Sérhver veggjaendi innan reitsins færist; veggur sem er alveg innan reitsins færist, og veggirnir sem stinga í hann koma með; veggir sem fara yfir reitinn teygjast.

## Breyta málsetningu og læsa henni

Veldu viðmiðunarmálsetningu ({{ui:Merkja}} › {{ui:Viðmiðunarmál}}) og sláðu inn gildi hennar í **Eiginleikum**: veggurinn á seinni viðmiðuninni færist hornrétt á sjálfan sig, fyrsta viðmiðunin heldur sér og tengdu veggirnir fylgja. Taktu hakið við **Læsa þessari málsetningu** til að halda gildinu: þegar annar hvor veggurinn færist síðar fylgir hinn. Læst gildi er ekki hægt að skrifa yfir fyrr en þú tekur hakið af.

## Jafna og læsa

**Jafna og læsa**: smelltu á flöt veggjar (eða miðlínuna, nálægt miðju veggjarins) eða ristlínu, síðan á flöt veggjarins sem á að færa á þá línu. Veggurinn færist hornrétt á hana. Taktu fyrst hakið við **Læsa** til að halda þeim í röð: hengilás birtist á grunnmyndinni, og þegar annar veggurinn færist fylgir hinn. **Eiginleikar** veggjar sýna **Læsingar** hans, hver með **Aflæsa**.

## Læsa veggjum við ristlínur

Veldu vegg sem liggur með ristlínu, eða sem endi hans situr á einni, og veldu ristlínuna í **Eiginleikum** › **Læsa við ristlínu**. Veldu síðan ristlínuna með verkfærinu {{ui:Grid}} og sláðu inn fjarlægð í **Færa um**: línan færist hornrétt á sjálfa sig og veggirnir sem eru læstir við hana fylgja, ásamt tengdu veggjunum, í einu skrefi. Vegg sem er læstur við ristlínu er ekki hægt að færa af henni einum (færðu línuna, eða aflæstu veggnum); ristlínu sem er snúið þannig að læstur veggur getur ekki haldist hornréttur á hana er hafnað. Ef línan er endurnefnd helst læsingin; ef henni er eytt fer læsingin.

## Lengd: hvaða hlið heldur og hvað er mælt

- **Vaxa frá** (Eiginleikar eins veggs): **Upphaf heldur** (endinn færist), **Endir heldur** (upphafið færist) eða **Miðja heldur** (báðir endar færast um helming). Meðan þú slærð inn lengdina merkir grunnmyndin punktinn sem heldur. Veggurinn sem tengist þeim enda sem færist færist hornrétt á sjálfan sig og heldur horni sínu.
- **Mæla frá** (við hlið Málsetninga á grunnmyndinni, í Eiginleikum, og í Stillingar › BimCraft › Veggir): miðlínan, innri flöturinn eða ytri flöturinn. Lengdarreiturinn og málsetningar veggja á grunnmyndinni lesa það sama, svo þær stemma. Það byrjar á miðlínunni.
- Til að færa vegg án tenginga sinna (þær rofna, veggurinn heldur auðkenni sínu), haltu {{key:Alt}} inni meðan þú dregur í miðgripið.

## Gott að vita

- Þessar uppskriftir eru úr forskrift veggjaverkfærisins (blaðsíður 4 til 9). Tengistíll og forgangur laga eru gerð fyrir beina veggi; forgangur laga sést aðeins á grunnmynd (ekki í sniðum, útlitum eða 3D, þar sem veggur er einn líkami), ekki á hnútum þriggja veggja eða fleiri, og himnur eru ekki fluttar með.
- Stíll tengingar er geymdur í skráningu hennar í IFC-skránni (heitið `IfcRelConnectsPathElements`, til dæmis `CadCraft join L butt 1`), svo önnur forrit lesa tenginguna enn og eldri skrá opnast með skáskurðum.
- Læsingar og tengingar eru geymdar í IFC-skránni (læsingarnar sem `CadCraft_WallHolds` á verkefninu, tengingarnar sem `IfcRelConnectsPathElements`), svo þær eru þarna þegar þú opnar skrána aftur.
- Bogadregna veggi má skipta, tengja aftur og taka bút úr; þá er ekki hægt að færa til hliðar eða læsa.
- Sjá einnig [Teikna veggi](topic:draw-walls), [Breyta vegg, hurð eða glugga](topic:change-a-wall-or-door) og [Móta vegg](topic:wall-shape).
