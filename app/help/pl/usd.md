---
title: Eksport modelu do USD
summary: Zapisz otwarte modele IFC jako USD do renderowania, składania scen i innych programów 3D, z klasą IFC, GlobalId i właściwościami każdego elementu.
keywords: usd, usda, usdc, usdz, openusd, eksport, ifc, globalid, właściwości, kondygnacje, dyscypliny, składanie scen, archviz, renderowanie
from: 2be5f7b8
---

{{ui:USD}} na pasku narzędzi zapisuje to, co jest otwarte (każdy model, a modele federacyjne tam, gdzie je umieściłeś), jako jeden plik USD.

## Eksport

1. Wybierz {{ui:USD}} na pasku narzędzi.
2. Wybierz {{ui:Tekst (.usda)}}, {{ui:Binarny (.usdc)}} albo {{ui:Paczka (.usdz)}}.
3. Plik zostaje pobrany. Pasek stanu mówi, ile elementów zostało zapisanych.

## Co jest w pliku

| W modelu IFC | W pliku USD |
|---|---|
| Działka, budynek, kondygnacje | Zagnieżdżone grupy, kondygnacje w kolejności wysokości |
| Każdy element | Jeden prim pod swoją kondygnacją i dyscypliną (Architektura, Konstrukcja, MEP, Wyposażenie, Teren, Przestrzenie, Inne), z geometrią jako siatką (mesh) |
| Klasa, GlobalId, nazwa, typ, znacznik | Atrybuty o nazwach `ifc:class`, `ifc:globalId`, `ifc:name` i tak dalej |
| Zestawy właściwości i ilości | Jeden atrybut na właściwość; długości, pola i objętości w metrach, metrach kwadratowych i metrach sześciennych |
| Kolory | Materiały (z przezroczystością) |
| Przestrzenie | Zachowane, oznaczone jako prowadnice, aby renderery je pomijały |

Geometria znajduje się we współrzędnych własnych pliku IFC. Układ podąża za pisemnymi konwencjami USD CadCraft dla budynków.
