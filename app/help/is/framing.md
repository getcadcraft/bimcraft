---
title: Grind fyrir veggi, gólf og þök
summary: Búðu til stoðir, spelkur, yfirliggjara, bita, sperrur eða fagverk úr líkaninu og geymdu þau með því; þau eru búin til aftur þegar veggirnir, opin, gólfið eða þakið breytist, og Timburlistinn er skurðarlistinn.
keywords: TJI, I-bitar, spannartafla gólfbita, hlaða inn töflu, grind, stoð, stoðir, spelka, efri spelka, yfirliggjari, aðalstoð, hjálparstoð, rammabiti, stubbur, þröskuldur, millibitar, horn, T-tenging, gólfbiti, kantbiti, sperra, valmasperra, dalasperra, hjálparsperra, mænisbretti, loftbiti, spennuband, fagverk, timbur, skurðarlisti, board feet, 2x4, 2x6, bil, frá miðju til miðju
from: 76d0ffb5
---

## Hvað þú gerir

Rammaðu upp bygginguna eftir því sem þú teiknaðir. BimCraft leggur út stoðir, spelkur og yfirliggjara í veggjunum, bita í gólfunum og sperrurnar (eða fagverkin) í þakinu, mælir þau út frá merktum sjálfgefnum töflum, geymir þau með líkaninu og býr þau til aftur í hvert sinn sem það sem þau rammi breytist. **Timburlistinn** er skurðarlistinn.

## Ramma upp

1. Á kóta, opnaðu {{ui:Smíð}} og veldu {{ui:Grind}}.
2. Veldu **bilið** (16" eða 24" frá miðju til miðju; 400 eða 600 mm), **hornin** (þriggja stoða eða California), **Sperrur** eða **Fagverk** fyrir þök, og hvort veggir fái röð af **millibitum** við hálfa hæð. Fyrir gólf velurðu **Sagað timbur** eða **TJI (til bráðabirgða)** og stillir stefnu bitanna á sjálfvirkt, plan X eða plan Y.
3. Smelltu á **Ramma inn alla veggi**, eða smelltu á einn vegg, gólf eða þak (á kótanum sem þakið situr á) til að ramma aðeins það.

Slökktu á **Sýna grind** til að fela allt grindarefni, eins og lag; **Sjá í gegnum** felur veggi, gólf og þök sem eru römmuð inn svo þú getir skoðað grindina eina.

## Það sem þú færð

- **Veggir**: neðri spelka (skorin við hurðir), tvöföld efri spelka, stoðir á skipulaginu frá upphafi veggsins, aðalstoðir og hjálparstoðir og yfirliggjari við hverja hurð og glugga, stubbar fyrir ofan yfirliggjara og undir gluggum, grófur gluggaþröskuldur undir gluggum, horn þar sem veggir mætast (veggurinn sem liggur í gegn tekur hornstoðirnar), tvær stuðningsstoðir þar sem annar veggur tengist inn í T, og millibitar milli stoða.
- **Gólf**: bitar þvert yfir styttri leið gólfsins sjálfgefið, eða eftir völdum ás á grunnmynd; kantbitar umhverfis jaðarinn, og tvöfaldir rammabitar og yfirliggjarar umhverfis stigaop, með bitunum sem fara í gegnum það skornum stutt (skottbitar). TJI-ham velur minnstu skráðu röðina og dýpt sem nær mældu hreinu spanni við valið bil.
- **Þök**: venjulegar sperrur hornrétt á hvert þakskegg, hjálparsperrur þar sem valmar og dalir skera þær, valmasperrur og dalasperrur, mænisbretti, loftbitar á spelkunum og spennubönd — eða einföld fagverk með bili, eitt stykki hvert.

## Breyttu því

Veldu hvaða grindarstykki sem er í 3D-sýninni eða líkantrénu. **Eiginleikar** sýna grind þess: breyttu bilinu, gerð og stefnu gólfbita, hornunum, millibitunum eða þakgrindinni. Að færa veggi, hurðir og glugga, eða breyta gólfinu eða þakinu, býr grindina til aftur af sjálfu sér.

Til að halda stykki sem þú settir viljandi þegar grindin er búin til aftur, veldu það og veldu **Halda þessu stykki þegar grindin er búin til aftur**. Stykki sem er haldið er þar sem það er; þegar grindin í kringum það breytist er það merkt svo þú getir athugað það.

## TJI-gólfbitar úr töflu sem þú hleður inn

BimCraft geymir engar spannartöflur frá framleiðendum bita (þær eru framleiðandans og breytast með hverri útgáfu). Veldu grind gólfs, stilltu **Gólfbita** á **TJI (til bráðabirgða)** og veldu **Hlaða inn töflu…** í **Eiginleikum**: skrá á sniðinu `cadcraft-tji-table`, JSON eða CSV, sem þú bjóst til úr núverandi spannartöflum framleiðandans. Hún nefnir framleiðandann, vöruna og útgáfuna, og hvaðan tölurnar koma, og listar fyrir hvert hleðslutilvik (breytilegt álag, fast álag, durgmörk, legulengd) stærsta hreina spann hverrar röðar og dýptar við hvert bil.

- BimCraft tekur **hreint spann** gólfsins, velur grynnstu dýptina, og innan hennar röðina sem skráð spann nær yfir fyrir valið bil og hleðslutilvik, og rammar gólfið með henni. Ef spann eða bil er utan töflunnar segir það frá því og breytir engu.
- Álagið, durgmörkin, legulengdin, taflan og setningin „Leiðbeiningar um skipulag til bráðabirgða; endanlegt val þarf töflur framleiðandans og álag verkefnisins“ eru prentuð á Timburlistann, skrifuð inn í líkanið með grindinni og skráð í spjaldið **Vandamál** sem athugasemd. Tafla merkt sem dæmi segir það í viðvörun.
- Með viðbótinni **Byggingarreglugerð** á les gólfbitareglan hennar líka hlaðna töflu; án töflu eru TJI-bitar skildir eftir í þeirri athugun, eins og áður.
- Taflan helst í þessum vafra þar til þú hreinsar hana eða hleður inn annarri. Skráin: `format` (`cadcraft-tji-table`), `version` 1, `manufacturer`, `product`, `edition`, `source`, `units` (`imperial`: tommur, fet, psf; eða `metric`: mm, metrar, kPa), `cases` (`id`, `live`, `dead`, `deflection`, `bearing`) og `rows` (`series`, `depth`, `spans`: fyrir hvert hleðslutilvik auðkenni, bilið og stærsta hreina spann, eins og `"16": "15-6"`). Í CSV eru sömu upplýsingar í línum `# key = value`, síðan `series,depth,case,spacing,span`.
- Án hlaðinnar töflu er TJI-skipulagi hafnað og engu breytt: **Hlaðið inn TJI-töflu: spannartöflur framleiðandans eru þeirra eigin og eru ekki innbyggðar.** Líkan sem var rammað með eldri innbyggðu TJI-töflunni (fyrir þessa breytingu) heldur öllum bitum sem það hefur; **Eiginleikar** og **Vandamál** segja að taflan sé nauðsynleg, og hægt er að ramma gólfið aftur þegar þú hleður inn einni. Bitar úr sagaðu timbri virka eins og áður.

Þetta er leiðbeining um skipulag. Endanlegt val bita þarf töflur framleiðandans, álag verkefnisins og verkfræðinginn.

## Timburlistinn

Í Listaspjaldinu velurðu **Timbur**: sérhvert grindarstykki flokkað eftir stærð og eftir lengd lagers sem þú myndir kaupa (heilar 2' lengdir frá 8'; 600 mm skref í millimetrum), með fjölda stykkja og board feet. **CSV** sækir hann.

:::warning
Stærðir yfirliggjara, bita, sperra og loftbita koma frá merktum sjálfgefnum töflum fyrir dæmigert eins eða tveggja hæða hús, ekki verkfræði. **Eiginleikar** segja til um hvenær spann eða op er utan töflu sinnar. Hönnuður eða verkfræðingur athugar spann, álag og tengingar.

TJI-skipulag notar aðeins töflu sem þú hleður inn, sem þú býrð til úr núverandi spannartöflum framleiðandans; BimCraft fylgir engri. Tillagan athugar ekki legu, punktálag, útskaga, göt, yfirliggjara stigaops eða tengingar, og I-bita líkansins er skematískt.
:::

## Það sem er vistað

Sérhvert rammað vegg-, gólf- eða þakstykki er IFC-einingasamsetning („Framing“) úr IFC-stykkjum (stoðum, spelkum, sperrum, spennuböndum, millibitum, fagverkum) og bitum (yfirliggjurum, gólfbitum, kantbitum, mænisbrettum), hvert með sína stærð, lengd og board feet.
