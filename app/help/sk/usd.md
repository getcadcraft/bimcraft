---
title: Export modelu do USD
summary: Zapíšte otvorené modely IFC ako USD pre renderovanie, skladanie scén a iné 3D programy, s triedou IFC, GlobalId a vlastnosťami každého prvku.
keywords: usd, usda, usdc, usdz, openusd, export, ifc, globalid, vlastnosti, podlažia, odbory, skladanie scén, archviz, renderovanie
from: 2be5f7b8
---

{{ui:USD}} na lište zapíše, čo je otvorené (každý model, federované modely tam, kde ste ich umiestnili), ako jeden súbor USD.

## Export

1. Vyberte {{ui:USD}} na lište.
2. Vyberte {{ui:Text (.usda)}}, {{ui:Binárny (.usdc)}} alebo {{ui:Balík (.usdz)}}.
3. Súbor sa stiahne. Stavový riadok hovorí, koľko prvkov bolo zapísaných.

## Čo je v súbore

| V modeli IFC | V súbore USD |
|---|---|
| Lokalita, budova, podlažia | Vnorené skupiny, podlažia v poradí podľa výšky |
| Každý prvok | Jeden prim pod svojím podlažím a odborom (Architektúra, Konštrukcie, MEP, Zariadenie, Lokalita, Priestory, Ostatné), s geometriou ako sieťou |
| Trieda, GlobalId, názov, typ, značka | Atribúty pomenované `ifc:class`, `ifc:globalId`, `ifc:name` a tak ďalej |
| Sady vlastností a množstiev | Jeden atribút na vlastnosť; dĺžky, plochy a objemy v metroch, štvorcových metroch a kubických metroch |
| Farby | Materiály (s priehľadnosťou) |
| Priestory | Zachované, označené ako pomocné, aby ich renderovače preskočili |

Geometria je na súradniciach samotného súboru IFC. Rozloženie sleduje konvencie USD pre budovy, ktoré zapísal CadCraft.
