---
title: Breyttu gerðareiginleika fyrir alla hluti gerðar
summary: Greindu gerðareiginleika frá hlutareiginleikum, breyttu gildi á gerðinni svo sérhver hlutur fylgi, og athugaðu að breyting á einum hlut haldist hans eigin.
keywords: gerð, dæmi, gerðareiginleiki, fjölskyldugerð, sameiginlegt, afrit við breytingu, allir hlutir, hópbreyting, framleiðandi, líkan
from: bffd8789
---

## Það sem þú gerir

Stilltu framleiðanda á hurðargerð svo sérhver hurð af þeirri gerð sýni hann, og gefðu síðan einni hurð sína eigin brunaeinkunn án þess að snerta hinar. Þetta sýnir muninn á gerðar- og hlutareiginleikum í BimCraft.

## Gerð eða hlutur?

- **Hlutareiginleiki** tilheyrir einum hlut: merki hans, auðkenni, herbergi, eigin brunaeinkunn.
- **Gerðareiginleiki** tilheyrir gerðinni sem margir hlutir deila: framleiðandi, líkan, breidd hurðargerðar.

Í {{ui:Eiginleikar}}-spjaldinu eru eiginleikasett sem koma frá gerðinni merkt með „ (gerð)" á eftir heitinu og línunni „Gerðareiginleiki: breyting hér gildir um alla hluti þessarar gerðar." Hvert annað sett tilheyrir hlutnum sjálfum. **Gerð** í fyrsta reitnum sýnir heiti gerðarinnar.

## Skref: breyttu gerðinni

1. Opnaðu IFC-líkan og smelltu á hurð.
2. Athugaðu **Gerð** hennar í fyrsta reitnum í {{ui:Eiginleikar}}-spjaldinu, til dæmis „Single-Flush 900 x 2100".
3. Skrunaðu að setti sem heitir á eftir „(gerð)".
4. Smelltu á gildið sem þú vilt breyta, til dæmis **Framleiðandi**.
5. Skrifaðu nýja gildið og ýttu á {{key:Enter}}.
6. Athugaðu {{ui:Breytingar}}-listann: færslan endar á „(gerð)".
7. Smelltu á aðra hurð af sömu gerð.
8. Athugaðu sama gildið: það sýnir nýja gildið líka.

## Skref: breyttu aðeins einum hlut

1. Smelltu á eina hurð.
2. Opnaðu sett sem heitir ekki „(gerð)", til dæmis `Pset_DoorCommon`.
3. Smelltu á gildi, eins og **FireRating**, skrifaðu nýtt gildi og ýttu á {{key:Enter}}.
4. Smelltu á hurðina við hliðina, af sömu gerð.
5. Athugaðu sama gildið: það sýnir enn gamla gildið.

Jafnvel þótt útflytjandinn hafi deilt þessu eiginleikasetti milli beggja hurðanna, gaf BimCraft fyrstu hurðinni sitt eigið afrit áður en hún breytti því. Sjá [Af hverju breyting þín breytir aðeins einum hlut](topic:edit-ifc-properties#why-your-edit-changes-only-one-element).

## Vista

1. Smelltu á {{ui:Vista sem IFC}} eða ýttu á {{key:Mod+S}}.
2. Opnaðu vistuðu afritið í BimCraft, eða í hvaða IFC-skoðara sem er, til að athuga báðar breytingarnar.

## Algeng mistök

- **Ekki hafa öll líkön gerðir.** Sum útflutningsforrit skrifa engar gerðir, eða setja allt á hlutinn. Þá eru engin „(gerð)"-sett, og hvern hlut þarf að breyta fyrir sig.
- **Sama gildið birtist í gerðarsetti og hlutarsetti.** Sum útflutningsforrit skrifa breytu á báða staði. Önnur forrit geta lesið hvort sem er; breyttu báðum ef þú þarft þau sammála.
- **Að búast við að velja „allar hurðir af þessari gerð" og breyta þeim saman.** Það er ekkert fjölval í þessari útgáfu. Gerðareiginleiki er leiðin til að breyta mörgum hlutum í einu.
