---
title: Senda senuna í leikjavél
summary: Studio getur skrifað senuna í Unreal Engine verkefni og haldið henni í takt við hverja sendingu; þínar eigin breytingar eru í lagi sem CadCraft skrifar aldrei. Viðbótin sem opnar hana er ekki enn gefin út.
keywords: unreal, unreal engine, leikjavél, tenging, senda, usd-svið, verkefni, lifandi, cine-myndavél, kvikmyndaröð myndgerðar
from: 154d55ef
---

Í CadCraft Studio getur vélalistinn haldið **tengingu** við Unreal Engine verkefni. Aðeins ein leið: frá CadCraft yfir í Unreal.

## Senda senuna

1. Veldu Unreal-færsluna í vélalistanum. Í fyrsta skipti biður Studio þig um að velja möppu verkefnisins (þá sem er með `.uproject` skrána); það man hana.
2. Smelltu á {{ui:Send}}. Studio skrifar `CadCraft/<skráarheiti>/` inni í verkefninu: senuna sem USD-skrá, stillingaskrána, ljósprófíla og tvær litlar lagaskrár.
3. Breyttu líkaninu, vistaðu og sendu aftur. Aðeins senan og stillingaskráin eru endurnýjaðar.

## Breytingarnar þínar eru óhultar

Sviðið sem Unreal opnar er lítið rótarlag sem er búið til einu sinni, með tveimur lögum undir: **þínu** efst (`<name>.user.usda`, tómt í byrjun, aldrei endurskrifað af CadCraft) og senu CadCraft fyrir neðan. Breytingar sem þú vistar í þínu eigin lagi haldast þegar senan er send aftur. Ljós og aðrir leikarar sem þú setur í Unreal-borðið eru utan sviðsins og eru ekki snertir heldur.

## Án Studio

Í vafranum, eða á tölvu þar sem Studio finnur ekki Unreal, veldu **Unreal-verkefnamappa (.zip)** í vélalistanum og smelltu á {{ui:Render}}. Hún vistar sömu möppu sem zip-skrá: pakkaðu henni upp í `CadCraft`-möppu verkefnisins. Hafðu **Hafa sviðsskrárnar með** kveikt í fyrsta skipti; slökktu á því í síðari vistunum, þannig að zip-skráin geymi aðeins senuna og stillingaskrána og þínu eigin lagi sé aldrei skipt út.

:::note
Unreal-viðbótin sem opnar sviðið, beitir sólinni, lömpum, myndavélum og lýsingu, fylgir hverri sendingu og myndgerir myndavél er **ekki enn gefin út** og hefur ekki verið keyrð í Unreal. Þangað til sendir Senda skrárnar í verkefnið, og innbyggð USD-verkfæri Unreal geta opnað þær. Windows er fyrsta stýrikerfið; macOS kemur á eftir.
:::
