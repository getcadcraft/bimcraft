---
title: Staðsetja og skipta safnhlut sem hefur útfærslur
summary: Sumir safnhlutir koma í nokkrum stærðum eða valkostum. Veldu útfærsluna áður en þú staðsetur hann, sjáðu hvaða útfærsla er staðsettur hlutur, skiptu honum fyrir aðra útfærslu með einum smelli og haltu henni þegar hluturinn er uppfærður.
keywords: útfærsla, útfærslur, stærðir, valkostir, uppsetning, safn, librarycraft, staðsetja, skipta, uppsetningarforrit, fjölskylda, gerð, uppfærsla, tengipunktar
from: c05f0af3
---

## Það sem þú gerir

Staðsettu safnhlut í þeirri stærð eða valkosti sem þú þarft, og skiptu um skoðun síðar án þess að staðsetja hann aftur. Hlutur með útfærslum er einn hlutur í safninu (eitt heiti, eitt leyfi, ein útgáfa) með töflu yfir útfærslurnar sem hann kemur í: til dæmis festiplata í Lítil, Meðal og Stór, eða sama plata án gata.

## Veldu útfærsluna og staðsettu hana

1. Opnaðu flipann {{ui:Safn}} og smelltu á spjald hlutarins.
2. Undir heitinu sýnir valið {{ui:Útfærsla}} hverja útfærslu með stærð sinni. Sjálfgefin útfærsla hlutarins er valin fyrst.
3. Veldu eina. Grunnmyndin, stærðin og þrívíddarlíkaminn fylgja vali þínu.
4. Smelltu á {{ui:Staðsetja á grunnmynd}} (eða {{ui:Staðsetja í líkani}} í þrívíddarsýninni) og settu hann eins og hvern annan hlut: sjá [Staðsetja búnað og húsgögn úr safninu](topic:place-from-library).

Staðsetti hluturinn heitir eftir hlutnum og útfærslunni, til dæmis *Festiplata — Stór*, svo búnaðarlistinn og trjáð geti greint þá að. Hver útfærsla er sín eigin IFC-gerð: ef sama útfærsla er staðsett tvisvar deilir hún einni gerð, en önnur útfærsla fær sína eigin.

## Sjá hvaða útfærsla staðsettur hlutur er

Veldu hlutinn. Í {{ui:Eiginleikar}} er reiturinn **Safnhlutur** með línunni **Útfærsla**. IFC geymir hana í `CadCraft_LibraryItem`: `Variant` (auðkenni útfærslunnar), `VariantName` og `VariantValues` (valkostagildin, sem texti), svo önnur forrit geti lesið hana.

## Skipta yfir í aðra útfærslu

1. Veldu staðsetta hlutinn og smelltu á {{ui:Skipta hlut…}} í reitnum **Safnhlutur**. Flipinn {{ui:Safn}} opnast.
2. Efst listar **Aðrar útfærslur af** *hlutnum* hverja útfærslu með stærð sinni. Sú sem er staðsett er merkt og ekki hægt að velja hana.
3. Smelltu á {{ui:Skipta í …}} á þá útfærslu sem þú vilt.

Hluturinn heldur stað sínum, snúningi, hæð, hlutanúmeri, magni og athugasemdum; gerð hans, lögun og gögn breytast í hina útfærsluna. {{key:Mod+Z}} skilar þeirri fyrri. Þú getur enn valið hvaða annan hlut sem er af listanum fyrir neðan í staðinn, eins og áður: sjá [Skipta staðsettum hlut og uppfæra hluti úr safninu](topic:swap-and-update-library-items).

## Afrit, líming og uppfærslur

- Afrit af staðsettri útfærslu er sama útfærsla: í þessu líkani, og í öðru líkani sem er opið í sama vafraflipa, með Afrita og Líma.
- **Uppfærslur** halda útfærslunni: ef nýrri útgáfa hlutarins hefur hana enn, verður staðsetningin sú útfærsla í nýju útgáfunni. Ef nýja útgáfan hefur hana ekki lengur, fær staðsetningin sjálfgefna útfærslu hlutarins.

## Gott að vita

- Aðeins sumir safnhlutir hafa útfærslur. Spjöldin segja það ekki; þú sérð valið {{ui:Útfærsla}} þegar þú opnar einn.
- Hlutur getur skráð **tengipunkta** (tengistaði fyrir lagnir og loftstokka) fyrir hverja útfærslu. Flipinn Safn sýnir hversu marga útfærsla hefur. Þeir eru **ekki** skrifaðir í IFC þegar þú staðsetur hlutinn úr flipanum Safn enn.
- Útfærsla án þrívíddarlíkama er staðsett með staðgengilskassa, eins og sérhvert 2D-tákn.
- Stærðir í valinu eru í millimetrum, eins og safnið skráir þær.
