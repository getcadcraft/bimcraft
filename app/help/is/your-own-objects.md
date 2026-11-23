---
title: Færðu eigin hluti og fjölskylduskrár inn í safnið
summary: Lestu fjölskylduskrár (.rfa) og IFC-, DWG-, DXF-, glTF- eða OBJ-skrár í flipanum Safn, staðsettu þær eins og hvern annan safnhlut, og geymdu þær í Hlutum mínum, einkalista sem aðeins þú sérð.
keywords: rfa, fjölskylda, fjölskyldur, fjölskyldusafn, eigin hlutir, hlutirnir mínir, einkahlutir, einkasafn, flytja inn hluti, efni framleiðanda, bim-hlutir, ifc-hlutur, gltf, obj, dwg-blokk, geyma, skipta, flytja
from: 886261f8
---

## Það sem þú gerir

Færðu inn hluti sem þú átt nú þegar í BimCraft: fjölskyldusafn úr Revit, IFC- eða DWG-niðurhal frá framleiðanda, möskva úr öðru líkanaforriti. Þú lest skrána í flipanum {{ui:Safn}}, staðsetur hlutinn í líkaninu þínu sem almennilegan IFC-hlut, og ef þú vilt hann aftur seinna geymir þú hann í {{ui:Hlutir mínir}}.

## Skref

1. Opnaðu IFC-líkan, eða byrjaðu nýja byggingu.
2. Smelltu á flipann {{ui:Safn}} við hliðina á {{ui:Eiginleikar}}.
3. Smelltu á {{ui:Skrár…}}, og síðan á {{ui:Veldu skrá…}}. Veldu eina skrá eða nokkrar í einu: `.rfa`, `.ifc`, `.dwg`, `.dxf`, `.glb`, `.gltf`, `.obj` eða `.csv`. Eða smelltu á {{ui:Velja möppu…}} til að lesa heila möppu og möppurnar í henni (allt að 200 skrár í einu).
4. Smelltu á kort til að sjá hvað var lesið: forskoðun grunnmyndar, heitið, framleiðanda og gerð, stærðirnar og athugasemdirnar.
5. Smelltu á {{ui:Staðsetja á grunnmynd}} eða {{ui:Staðsetja í líkani}} til að staðsetja hann.
6. Til að nota hann aftur í öðrum verkefnum smellirðu á {{ui:Geyma í hlutunum mínum}}. Þegar nokkrar skrár eru lesnar geymir {{ui:Geyma allt í hlutunum mínum}} þær allar í einu.
7. Seinna smellirðu á {{ui:Hlutir mínir}} í flipanum Safn til að finna þá. Þeir eru staðsettir, skiptir út og uppfærðir eins og hver annar safnhlutur.

Skrárnar eru lesnar í þessum flipa. Ekkert er sent upp fyrr en þú velur {{ui:Geyma í hlutunum mínum}}.

## Hvað er lesið úr hverri tegund skráa

| Skrá | Það sem þú færð |
|---|---|
| IFC | Hver hlutartegund sem hlutur með raunverulegri þrívíddarlögun, IFC-flokki og eiginleikasöfnum |
| glTF, GLB, OBJ | Einn hlutur með raunverulegri þrívíddarlögun sem möskvi. Stilltu einingar og hvaða átt er upp fyrst. |
| DWG, DXF | Hver blokk sem hlutur með grunnmyndateikningu sinni og eigindum |
| Fjölskylduskrá (`.rfa`) | Heiti fjölskyldunnar, flokkur, framleiðandi, gerð, breytur og tegundir hennar. **Ekki þrívíddarlögun hennar:** kassi af breidd, dýpt og hæð fjölskyldunnar stendur í staðinn. |
| CSV | Einn hlutur á hverja línu: heiti, stærðir og gögn, teiknað sem kassi |

## Fjölskylduskrár og þrívíddarlögun þeirra

Þrívíddarlögunin í `.rfa`-skrá er geymd á sniði sem er ekki skjalfest, svo BimCraft les gögn fjölskyldunnar og giskar ekki á rúmfræði hennar. Kortið segir það: „Rúmfræði ekki lesin úr þessari fjölskyldu; kassi stendur í staðinn.“

Til að færa fjölskyldu inn með raunverulegri lögun, fluttu hana út úr forritinu sem bjó hana til (Revit):

1. Opnaðu fjölskylduna, eða verkefni með fjölskyldunni settri inn í það.
2. Veldu **File > Export > IFC**. Sjá [útflutningsstillingarnar sem opnast best hér](topic:rvt-to-ifc).
3. Í BimCraft skaltu lesa `.ifc`-skrána með {{ui:Skrár…}}. Hver gerð fjölskyldunnar kemur sem sinn eigin hlutur, með lögun sinni og eiginleikasöfnum.

Margir framleiðendur bjóða IFC- eða DWG-niðurhal við hliðina á fjölskylduskránni. Þau lesast beint.

## Gerðir fjölskyldna

Fjölskylda með nokkrar gerðir kemur sem einn hlutur með vali um {{ui:Útfærsla}}, ein útfærsla fyrir hverja gerð. Hver útfærsla hefur gildin sem eru frábrugðin milli gerðanna, og sinn eigin kassa þegar gerðin hefur breidd og dýpt. Fjölskylda með eina gerð er venjulegur hlutur fylltur með gildum þeirrar gerðar.

Sumar fjölskyldur geyma gerðir sínar í gerðarskrá: `.txt`-skrá með sama nafni við hliðina á fjölskylduskránni. Veldu bæði saman, eða veldu möppuna, og línur gerðarskrárinnar verða að útfærslunum.

## Gögn fjölskyldu á raunverulegri lögun

Ef mappa geymir fjölskylduskrá og IFC-, glTF- eða OBJ-skrá með sama nafni (`Chair.rfa` og `Chair.ifc`), veldu þær saman eða veldu möppuna. BimCraft býr þá til einn hlut: fjölskylduskráin gefur heiti, framleiðanda, gerð, breytur og tegundir, og hin skráin gefur raunverulega þrívíddarlögun. Athugasemdirnar segja hvaða skrá lögunin kom úr. Ein lögun er notuð fyrir allar gerðir.

Þegar fjölskylduskrá geymir mynd í sér, sýnir hluturinn mynd þess undir grunnmyndateikningunni í smáatriðunum. Myndin er aðeins sýnd þar; hún er ekki geymd með hlutnum.

## Hlutir mínir

{{ui:Hlutir mínir}} er þinn eigin einkalisti í Safninu. Aðeins þú sérð hvað er í honum: hann er ekki í opinbera safninu, ekki í leit, og ekki sýndur teyminu þínu. Hann fylgir aðganginum þínum, svo sömu hlutir eru til staðar á annarri tölvu þegar þú skráir þig inn í safnið.

- Þú þarft að vera skráður inn í safnið til að geyma hlut. Sjá [skrá sig inn í safnið](topic:library-credits).
- Að geyma hlut sendir þann eina hlut á aðganginn þinn. Þangað til er hann áfram á tölvunni þinni.
- {{ui:Fjarlægja úr hlutunum mínum}} tekur hlut af listanum. Afrit sem þegar eru staðsett í teikningum haldast.
- Til að deila hlut með öllum skaltu hlaða honum upp í opinbera safnið, undir leyfi sem þú velur.

:::note
Hlutir mínir eru í prófun og gætu ekki verið opnir fyrir aðganginn þinn enn. Ef upprunin vantar, eða stendur „Hlutir mínir er ekki opið fyrir þennan aðgang enn“, geturðu samt lesið og staðsett þínar eigin skrár með {{ui:Skrár…}}; þær eru vistaðar inni í líkaninu þínu.
:::

## Algeng mistök

- **Að búast við raunverulegri lögun fjölskyldu úr `.rfa`.** Aðeins gögnin hennar eru lesin. Fluttu út IFC fyrir lögunina.
- **Tveir hlutir þar sem þú bjóst við einum.** Fjölskylda og lögunarskrá eru aðeins tengdar þegar heitin passa nákvæmlega, fyrir utan endinguna, og þær eru í sömu möppu.
- **Möskvi kemur þúsund sinnum of stór eða liggur á hliðinni.** Stilltu {{ui:Einingar skrárinnar}} og {{ui:Lóðréttur ás möskva}} undir {{ui:Skrár…}} áður en þú velur skrána.
- **„Engin fjölskyldugögn“ á skrá.** Það er verkefni (`.rvt` vistað með annarri endingu) eða fjölskyldusniðmát, ekki fjölskylda. Sjá [Lestu verkefnis- eða fjölskylduskrá](topic:read-rvt-file).
- **Að geyma efni sem þú mátt ekki geyma.** Sum greidd söfn leyfa ekki afrit utan eigin þjónustu. Athugaðu skilmála efnis sem þú bjóst ekki til.
