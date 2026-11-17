---
title: Izvoz modela kot USD
summary: Odprte modele IFC zapišite kot USD za upodobitev, sestavljanje prizorov in druge 3D programe, z razredom IFC, GlobalId in lastnostmi vsakega elementa.
keywords: usd, usda, usdc, usdz, openusd, izvoz, ifc, globalid, lastnosti, etaže, discipline, sestavljanje prizora, archviz, upodobitev
from: 2be5f7b8
---

{{ui:USD}} na orodni vrstici zapiše, kar je odprto (vsak model, povezani modeli tam, kjer ste jih postavili), kot eno datoteko USD.

## Izvoz

1. Izberite {{ui:USD}} na orodni vrstici.
2. Izberite {{ui:Besedilo (.usda)}}, {{ui:Binarno (.usdc)}} ali {{ui:Paket (.usdz)}}.
3. Datoteka se prenese. Vrstica stanja pove, koliko elementov je bilo vključenih.

## Kaj je v datoteki

| V modelu IFC | V datoteki USD |
|---|---|
| Lokacija, stavba, etaže | Gnezdene skupine, etaže po višini |
| Vsak element | En prim pod svojo etažo in disciplino (Arhitektura, Konstrukcije, MEP, Oprema, Lokacija, Prostori, Drugo), z geometrijo kot mreža |
| Razred, GlobalId, ime, tip, oznaka | Atributi z imeni `ifc:class`, `ifc:globalId`, `ifc:name` in tako naprej |
| Nabori lastnosti in količin | En atribut za vsako lastnost; dolžine, površine in prostornine v metrih, kvadratnih metrih in kubičnih metrih |
| Barve | Materiali (s prosojnostjo) |
| Prostori | Ohranjeni, označeni kot vodila, da jih upodabljalniki preskočijo |

Geometrija je na lastnih koordinatah datoteke IFC. Razporeditev sledi zapisanim pravilom USD v CadCraft za stavbe.
