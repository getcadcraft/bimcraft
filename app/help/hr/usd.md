---
title: Izvoz modela u USD
summary: Zapišite otvorene IFC modele kao USD za renderiranje, sastavljanje scene i druge 3D programe, sa svakom IFC klasom elementa, GlobalId i svojstvima.
keywords: usd, usda, usdc, usdz, openusd, izvoz, ifc, globalid, svojstva, etaže, discipline, sastavljanje scene, archviz, renderiranje
from: 2be5f7b8
---

{{ui:USD}} na alatnoj traci zapisuje ono što je otvoreno (svaki model, spojeni modeli ako ste ih tako postavili) kao jednu USD datoteku.

## Izvoz

1. Odaberite {{ui:USD}} na alatnoj traci.
2. Odaberite {{ui:Tekst (.usda)}}, {{ui:Binarni (.usdc)}} ili {{ui:Paket (.usdz)}}.
3. Datoteka se preuzme. Statusna traka kaže koliko je elemenata ušlo.

## Što je u datoteci

| U IFC modelu | U USD datoteci |
|---|---|
| Lokacija, zgrada, etaže | Ugniježđene grupe, etaže poredane po visini |
| Svaki element | Jedan prim pod svojom etažom i disciplinom (Arhitektura, Konstrukcija, MEP, Namještaj, Lokacija, Prostori, Ostalo), s geometrijom kao mrežom |
| Klasa, GlobalId, naziv, tip, oznaka | Atributi nazvani `ifc:class`, `ifc:globalId`, `ifc:name` i tako dalje |
| Skupovi svojstava i količina | Jedan atribut po svojstvu; duljine, površine i volumeni u metrima, kvadratnim metrima i kubnim metrima |
| Boje | Materijali (s prozirnošću) |
| Prostori | Zadržani, označeni kao pomoćni da ih renderi preskoče |

Geometrija se nalazi na koordinatama same IFC datoteke. Raspored slijedi CadCraftove pisane USD konvencije za zgrade.
