---
title: Landið á lóðinni, byggingarpallur og hellulögn
summary: Færðu landið inn í líkanið úr mælipunktum, hæðarlínum, LAS / LAZ-skönnun, GeoTIFF, LandXML-yfirborði (frá CivilCraft) eða nokkrum punktkótum; skerðu byggingarpallinn inn í húsið með hallum og skurði / fyllingu; leggðu innkeyrslur, gangstíga og verönd á landið; afhentu það CivilCraft sem LandXML.
keywords: landlíkan, land, lóð, landslag, mæling, punktar, PNEZD, hæðarlínur, LAS, LAZ, LiDAR, GeoTIFF, DEM, kóti, punktkóti, landhæð, landmótun, pallur, byggingarpallur, skurður, fylling, jarðvinna, dagsbirta, halli, innkeyrsla, gangstígur, verönd, hellulögn, LandXML, CivilCraft
from: 208298d6
---

## Það sem þú gerir

Komdu húsinu fyrir á lóðinni. Landið verður hluti af líkaninu: það sést í 3D, er skorið í sniðum og útlitum, og hæðarlínur birtast á grunnmynd. Byggingarpallur er skorinn inn í landið undir húsinu, innkeyrslur og gangstígar fylgja landinu og undirstöður lækka með því.

## Færðu landið inn

1. Opnaðu {{ui:Smíð}} og veldu {{ui:Landlíkan}}.
2. Annaðhvort:
   - **Opna mælingaskrá…**: mælipunktar (PNEZD, PENZD eða einfaldir austur-, norður- og hæðargildi; aðskilin með kommu, tab eða bili), hæðarlínur í DXF eða DWG (fjöllínur á sinni hæð, þrívíðar fjöllínur), LAS- eða LAZ-skönnun (jarðpunktar haldast, grisjaðir niður í um einn á fermetra), GeoTIFF eða ASCII-hæðarnet, eða **LandXML**-yfirborð eins og CivilCraft flytur út (eigin punktar og þríhyrningar haldast; þegar skráin hefur fleiri en eitt yfirborð spyr BimCraft hvert sé landið; einingar koma úr skránni). Veldu einingar skráarinnar fyrst (LandXML segir sínar eigin).
   - Eða sláðu inn **Punktkóta** (frá gólfi þessa kóta, þannig að `-1'` er einum feti undir því) og smelltu á punkta á grunnmyndinni, breyttu kótanum og smelltu á fleiri, og smelltu síðan á **Búa til landið**. Þrír punktar duga til að byrja.

Mælingarhnit langt frá líkaninu (ríkishnitakerfi, UTM) eru færð yfir á húsið, og kótarnir eru stilltir þannig að landið við húsið sé um 8" undir fyrstu hæð. **Hækka landið** í **Eiginleikum** leiðréttir það um hvaða gildi sem er.

## Byggingarpallurinn

1. Veldu {{ui:Byggingarpallur}}.
2. Stilltu **Jaðar** umhverfis húsið, hversu langt **pallurinn liggur undir gólfinu** (8" undir plötu, meira undir skriðrými) og **Hallar** út að núverandi landi (`2:1` = tveir fetar út fyrir hvern fet upp eða niður).
3. Smelltu innan í húsinu.

Landið er jafnað undir húsinu og út að jaðrinum, síðan hallar það upp í hlíðina (skurður) og niður á lægri hliðina (fylling) þar til það mætir núverandi landi. **Eiginleikar** landsins og pallsins gefa rúmmál skurðar og fyllingar. Færðu veggina og pallurinn fylgir.

## Innkeyrslur, gangstígar og verönd

Veldu {{ui:Hellulögn}}, veldu **Ganga**, **Innkeyrsla** eða **Verönd**, og smelltu á hornin. Smelltu aftur á fyrsta hornið, tvísmelltu eða ýttu á {{key:Enter}} til að ljúka. Hellulögnin fylgir fullgerðri landhæð; breyttu gerð hennar eða þykkt í **Eiginleikum**.

## Undirstöður fylgja landhæðinni

Þegar landið er komið inn í líkanið fylgja undirstöðuveggir og undirstöður skriðrýma því. Meðfram hverjum vegg helst undirstaðan í sinni dýpt undir landinu utan við vegginn og þrepast í heilum 8"-þrepum þar sem landið fellur (sjá [Undirstöður undir veggjum](topic:foundations)).

## Afhentu CivilCraft

**LandXML fyrir CivilCraft** (í landlíkan-línunni eða í **Eiginleikum** landsins) hleður niður núverandi landi og fullgerðri landhæð sem LandXML-skrá. Opnaðu hana í CivilCraft fyrir raunverulega landmótun, frárennsli og jarðvinnu.

## Gott að vita

- Landið þarf IFC4-líkan, eins og allar nýjar byggingar.
- Hæðarlínur birtast á grunnmynd landhæðarinnar með því millibili sem stillt er í **Eiginleikum** landsins; sérhver fimmta lína er þykkari.
- Landið er vistað sem IFC-landeining (lokað þríhyrningayfirborð, svo snið geta skorið það); pallurinn og hellulögnin eru vistuð með því. Eyddu landinu til að byrja upp á nýtt; pallur þess og hellulögn fara með því.
