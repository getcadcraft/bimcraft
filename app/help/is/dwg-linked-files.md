---
title: Finna tengdar teikningar og myndir
summary: Sýndu tengdar teikningar (xref) og myndir í titilreit teikningar, með því að opna möppu hennar eða bæta skrám handvirkt við.
keywords: xref, ytri tilvísun, tengd teikning, tengja, yfirlögn, mynd, myndir, merki, titilreitur, vantar xref, etransmit, tilvísunarstjóri
from: 5593d4b1
---

## Hvað þú gerir

Gerðu teikningu fullkomna: sýndu teikningarnar sem hún tengist (ytri tilvísanir, eða xref) og myndirnar sem hún notar, svo sem merki í titilreitnum.

## Auðveld leið: opna möppuna

1. Smelltu á {{ui:Opna möppu}} og veldu möppuna sem geymir teikninguna og tenglana hennar, til dæmis alla möppuna `Cad` í verkefni.
2. Í skýrslu möppunnar skaltu fletta niður að **CAD-teikningar**.
3. Smelltu á teikninguna.
4. Skoðaðu spjaldið {{ui:Eiginleikar}} hægra megin, undir **Tengdar teikningar** og **Myndir**.

BimCraft leitar að hverri tengdri teikningu eftir heiti hennar ("*heiti*.dwg"), fyrst í sömu möppu og teikningin er, síðan hvar sem er í möppunni sem þú opnaðir. Myndir finnast á sama hátt, og einnig eftir líku heiti: eTransmit- eða Revit-útflutningur bætir oft heiti verkefnisins fyrir framan, þannig að `logo.png` finnst sem `Tower-logo-5425051.png`.

## Hin leiðin: bæta skrám við handvirkt

1. Opnaðu teikninguna ein.
2. Hægra megin, undir **Tengdar teikningar**, smelltu á {{ui:Bæta við tengdum teikningum…}}. Undir **Myndir** heitir hnappurinn {{ui:Bæta við myndum…}}; báðir opna sama valglugga.
3. Veldu tengdu `.dwg`-skrárnar og myndaskrárnar. Þú getur valið nokkrar í einu.
4. Bíddu á meðan BimCraft opnar teikninguna aftur með þeim.

## Hvað þú ættir að sjá

Hver tengd teikning og mynd er skráð með merki:

| Merki | Þýðir |
|---|---|
| **Sýnt** | Fundið og teiknað. Slóðin undir því segir hvaðan það kemur, eða "bætt við af þér". |
| **Sýnt, líkt heiti** | Mynd fundin eftir líku heiti. Athugaðu að hún sé rétta myndin. |
| **Fannst ekki** | Ekki í möppunni eða skránum sem þú bættir við. Vantar mynd birtist sem tóm rammi. |
| **TIFF getur ekki birst í vafra** | Myndin er TIFF-skrá, sem vafrar teikna ekki. Vistaðu hana sem PNG með sama heiti og bættu henni við. |
| **Ekki hægt að lesa** | Skráin fannst en var ekki hægt að opna sem mynd. |

Spjaldið {{ui:Teikning}} vinstra megin sýnir "*n* af *m* hlaðið" fyrir tengdar teikningar. Lög tengdra teikninga birtast í {{ui:Lög}} sem "*heiti tengingar*|*lag*".

## Algeng mistök

- **Að opna aðeins teikninguna.** "Þessi teikning sýnir aðeins eigið efni þar til tengdar teikningar eru bættar við. Ef þú opnar alla verkefnismöppuna finnast þær sjálfkrafa."
- **Að opna of litla möppu.** Ef tenglarnir eru í systurmöppu skaltu opna móðurmöppuna í staðinn.
- **Endurnefndir tenglar.** BimCraft ber saman tengdar teikningar eftir heiti. Tengil sem var endurnefndur á diski finnst ekki; bættu honum við handvirkt.
- **Tenglar á tengla.** BimCraft hleður teikningunum sem opna teikningin tengist. Teikningar sem tengjast innan þeirra eru ekki sóttar, svo þær birtast venjulega ekki í þessari útgáfu.
