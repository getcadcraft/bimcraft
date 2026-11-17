---
title: Izvoz modela kao USD
summary: Upisuje otvorene IFC modele kao USD za renderovanje, sastavljanje scene i druge 3D programe, sa IFC klasom, GlobalId i svojstvima svakog elementa.
keywords: usd, usda, usdc, usdz, openusd, izvoz, ifc, globalid, svojstva, spratovi, discipline, sastavljanje scene, archviz, renderovanje
from: 2be5f7b8
---

{{ui:USD}} na traci alata upisuje ono što je otvoreno (svaki model, federisani tamo gdje ste ih postavili) kao jednu USD datoteku.

## Izvoz

1. Odaberite {{ui:USD}} na traci alata.
2. Izaberite {{ui:Text (.usda)}}, {{ui:Binary (.usdc)}} ili {{ui:Package (.usdz)}}.
3. Datoteka se preuzima. Statusna traka kaže koliko je elemenata ušlo.

## Šta je u datoteci

| U IFC modelu | U USD datoteci |
|---|---|
| Lokacija, zgrada, spratovi | Ugniježđene grupe, spratovi po redu visine |
| Svaki element | Jedan prim pod svojim spratom i disciplinom (Arhitektura, Konstrukcija, MEP, Namještaj, Lokacija, Prostori, Ostalo), s njegovom geometrijom kao mrežom |
| Klasa, GlobalId, naziv, tip, oznaka | Atributi nazvani `ifc:class`, `ifc:globalId`, `ifc:name` i tako dalje |
| Skupovi svojstava i količina | Jedan atribut po svojstvu; dužine, površine i zapremine u metrima, kvadratnim metrima i kubnim metrima |
| Boje | Materijali (s providnošću) |
| Prostori | Zadržani, označeni kao vodilice da ih renderer preskače |

Geometrija je na sopstvenim koordinatama IFC datoteke. Raspored prati CadCraft-ove pisane USD konvencije za zgrade.
