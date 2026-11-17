---
title: Exportul modelului ca USD
summary: Scrieți modelele IFC deschise ca USD pentru randare, asamblarea scenelor și alte programe 3D, cu clasa IFC, GlobalId și proprietățile fiecărui element.
keywords: usd, usda, usdc, usdz, openusd, export, ifc, globalid, proprietăți, etaje, discipline, asamblare scene, archviz, randare
from: 2be5f7b8
---

{{ui:USD}} de pe bara de instrumente scrie tot ce este deschis (fiecare model, modelele federate acolo unde le-ați plasat) ca un singur fișier USD.

## Export

1. Alegeți {{ui:USD}} de pe bara de instrumente.
2. Alegeți {{ui:Text (.usda)}}, {{ui:Binary (.usdc)}} sau {{ui:Package (.usdz)}}.
3. Fișierul se descarcă. Bara de stare spune câte elemente au intrat.

## Ce conține fișierul

| În modelul IFC | În fișierul USD |
|---|---|
| Amplasament, clădire, etaje | Grupuri imbricate, etajele în ordinea cotei |
| Fiecare element | Un prim sub etajul și disciplina lui (Arhitectură, Structură, MEP, Mobilier, Amplasament, Spații, Altele), cu geometria sub formă de mesh |
| Clasă, GlobalId, nume, tip, etichetă | Atribute numite `ifc:class`, `ifc:globalId`, `ifc:name` și așa mai departe |
| Seturi de proprietăți și de cantități | Un atribut pentru fiecare proprietate; lungimile, ariile și volumele în metri, metri pătrați și metri cubi |
| Culori | Materiale (cu transparență) |
| Spații | Păstrate, marcate ca ghiduri, ca programele de randare să le ignore |

Geometria rămâne la coordonatele fișierului IFC. Structura urmează convențiile USD scrise ale CadCraft pentru clădiri.
