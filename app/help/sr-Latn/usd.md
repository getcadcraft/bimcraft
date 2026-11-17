---
title: Izvoz modela u USD
summary: Upisuje otvorene IFC modele kao USD za renderovanje, sastavljanje scene i druge 3D programe, sa IFC klasom, GlobalId i svojstvima svakog elementa.
keywords: usd, usda, usdc, usdz, openusd, izvoz, ifc, globalid, svojstva, spratovi, discipline, sastavljanje scene, archviz, renderovanje
from: 2be5f7b8
---

{{ui:USD}} na traci upisuje sve što je otvoreno (svaki model, federisane tamo gde ste ih postavili) kao jednu USD datoteku.

## Izvoz

1. Izaberite {{ui:USD}} na traci.
2. Izaberite {{ui:Tekst (.usda)}}, {{ui:Binarni (.usdc)}} ili {{ui:Paket (.usdz)}}.
3. Datoteka se preuzima. Statusna traka kaže koliko je elemenata ušlo.

## Šta je u datoteci

| U IFC modelu | U USD datoteci |
|---|---|
| Lokacija, zgrada, spratovi | Ugnježdene grupe, spratovi po redu visine |
| Svaki element | Jedan prim pod svojim spratom i disciplinom (Arhitektura, Konstrukcija, MEP, Nameštaj, Lokacija, Prostori, Ostalo), sa geometrijom kao mrežom |
| Klasa, GlobalId, naziv, tip, oznaka | Atributi nazvani `ifc:class`, `ifc:globalId`, `ifc:name` i tako dalje |
| Skupovi svojstava i količina | Jedan atribut po svojstvu; dužine, površine i zapremine u metrima, kvadratnim metrima i kubnim metrima |
| Boje | Materijali (sa providnošću) |
| Prostori | Zadržani, označeni kao pomoćni da ih renderer preskače |

Geometrija stoji na koordinatama same IFC datoteke. Raspored prati CadCraftova objavljena USD pravila za zgrade.
