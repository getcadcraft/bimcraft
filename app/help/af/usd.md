---
title: Voer die model uit as USD
summary: Skryf die oop IFC-modelle as USD vir weergee, toneelsamestelling en ander 3D-programme, met elke element se IFC-klas, GlobalId en eienskappe.
keywords: usd, usda, usdc, usdz, openusd, uitvoer, ifc, globalid, eienskappe, verdiepings, dissiplines, toneelsamestelling, argvis, weergee
from: 2be5f7b8
---

{{ui:USD}} op die nutsbalk skryf wat oop is (elke model, en gefedereerde modelle waar jy hulle geplaas het) as een USD-lêer.

## Uitvoer

1. Kies {{ui:USD}} op die nutsbalk.
2. Kies {{ui:Teks (.usda)}}, {{ui:Binêr (.usdc)}} of {{ui:Pakket (.usdz)}}.
3. Die lêer laai af. Die statusbalk sê hoeveel elemente ingegaan het.

## Wat in die lêer is

| In die IFC-model | In die USD-lêer |
|---|---|
| Terrein, gebou, verdiepings | Geneste groepe, verdiepings in volgorde van hoogte |
| Elke element | Een prim onder sy verdieping en dissipline (Argitektuur, Struktuur, MEP, Meubilering, Terrein, Ruimtes, Ander), met sy geometrie as 'n maas |
| Klas, GlobalId, naam, tipe, merker | Eienskappe genaamd `ifc:class`, `ifc:globalId`, `ifc:name` en so meer |
| Eienskap- en hoeveelheidstelle | Een eienskap per eienskap; lengtes, oppervlaktes en volumes in meter, vierkante meter en kubieke meter |
| Kleure | Materiale (met deursigtigheid) |
| Ruimtes | Behou, gemerk as riglyne sodat weergawers hulle oorslaan |

Die geometrie lê by die IFC-lêer se eie koördinate. Die uitleg volg CadCraft se geskrewe USD-konvensies vir geboue.
