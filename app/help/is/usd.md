---
title: Flytja líkanið út sem USD
summary: Skrifa opnu IFC-líkönin sem USD fyrir myndgerð, sviðssamsetningu og önnur þrívíddarforrit, með IFC-flokki, GlobalId og eiginleikum hvers frumefnis.
keywords: usd, usda, usdc, usdz, openusd, útflutningur, ifc, globalid, eiginleikar, hæðir, greinar, sviðssamsetning, archviz, myndgerð
from: 2be5f7b8
---

{{ui:USD}} á tækjastikunni skrifar það sem er opið (hvert líkan, tengd líkön þar sem þú settir þau) sem eina USD-skrá.

## Útflutningur

1. Veldu {{ui:USD}} á tækjastikunni.
2. Veldu {{ui:Text (.usda)}}, {{ui:Binary (.usdc)}} eða {{ui:Package (.usdz)}}.
3. Skráin sækist. Stöðustikan segir hversu mörg frumefni fóru inn.

## Hvað er í skránni

| Í IFC-líkaninu | Í USD-skránni |
|---|---|
| Lóð, bygging, hæðir | Hreiðraðir hópar, hæðir í röð eftir hæð |
| Hvert frumefni | Eitt prim undir hæð sinni og grein (Arkitektúr, Burðarvirki, MEP, Innbúnaður, Lóð, Rými, Annað), með rúmfræði sinni sem möskva |
| Flokkur, GlobalId, nafn, tegund, merki | Eigindi nefnd `ifc:class`, `ifc:globalId`, `ifc:name` og svo framvegis |
| Eigna- og magnasöfn | Eitt eigindi fyrir hvern eiginleika; lengdir, flatarmál og rúmmál í metrum, fermetrum og rúmmetrum |
| Litir | Efni (með gegnsæi) |
| Rými | Geymd, merkt sem leiðbeiningar svo myndgerðarforrit sleppi þeim |

Rúmfræðin situr í hnitum IFC-skráarinnar sjálfrar. Uppsetningin fylgir skriflegum USD-reglum CadCraft fyrir byggingar.
