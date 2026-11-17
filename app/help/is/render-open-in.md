---
title: Opna senuna í öðru forriti
summary: Vista senuna sem USD-skrá eða glTF-skrá fyrir hvaða forrit sem les þær, eða opna hana úr Studio í forriti á þessari tölvu.
keywords: opna í, usd, gltf, glb, útflutningur, myndgerðarforrit, archviz, studio, usdview, senda, afhending, pakki, Unreal-mappa
from: 0a6559ee
---

Veldu færsluna **Opna í** í vélalistanum í {{ui:Render}} til að fara með senuna í annað forrit. Ekkert skilar sér aftur í líkanið.

## Skrá fyrir hvaða forrit sem er

- **USD-skrá** vistar senuna sem `.usdc` (eða `.usdz` þegar líkanið geymir myndir): [sama skrá og Vista sem USD](topic:usd), með efnum, lömpum og myndavélum. Hún heldur afritum og nákvæmum efnisgildum. Flest myndgerðarforrit, leikjavélar og skoðarar lesa USD.
- **glTF-skrá (.glb)** vistar léttari glTF 2.0 skrá með efnum, áferðum og lömpum; sjá [Senda líkanið í myndgerðarforrit](topic:model-for-rendering) fyrir hvað hún geymir og hvað hún sleppir.

- **Unreal-verkefnamappa (.zip)** vistar möppuna sem [Senda senuna í leikjavél](topic:render-unreal) skrifar, fyrir verkefni á hvaða tölvu sem er.

Allir þrír virka í vafranum og í Studio.

## Í Studio: opna í forriti

Studio listar forritin sem það finnur á þessari tölvu og geta opnað senuna: usdview ef það er á leitarslóðinni þinni, og innbyggða forrit tölvunnar fyrir þá skráargerð. Veldu eitt, veldu USD eða glTF þar sem það les bæði, og smelltu á {{ui:Render}}. Studio skrifar pakkann í nýja möppu undir Skjölum (`CadCraft hand-off`; engu er skrifað yfir, hver sending fær sína möppu) og ræsir forritið á henni, og segir svo hvar skrárnar eru.

| Forrit | Les best |
|---|---|
| usdview | USD |
| Innbyggða forrit tölvunnar | Það sem tölvan hefur fyrir skráargerðina |

Studio ræsir aðeins forrit af þessum fasta lista; það keyrir ekkert sem síðan biður um með nafni, og ræsir aldrei forrit undir GNU GPL leyfi (sjá [Teikna myndina með öðru forriti](topic:render-other-program#programs-cadcraft-never-runs)). Hvaða forrit sem les USD eða glTF opnar skrána úr **Skrá fyrir hvaða forrit sem er** hér fyrir ofan.

:::note
Twinmotion, Enscape og önnur sjónmyndunarforrit eru ekki á listanum: CadCraft hefur ekki prófað þau og gefur engar yfirlýsingar um þau. GlTF- eða USD-skrá héðan er leiðin inn; sjá athugasemdirnar um [viðbótamyndgerðarforrit](topic:model-for-rendering#enscape-and-other-plug-in-renderers).
:::
