---
title: Export modelu jako USD
summary: Zapište otevřené modely IFC jako USD pro vykreslování, sestavení scény a další 3D programy, se třídou každého prvku IFC, GlobalId a vlastnostmi.
keywords: usd, usda, usdc, usdz, openusd, export, ifc, globalid, vlastnosti, podlaží, obory, sestavení scény, archviz, vykreslování
from: 2be5f7b8
---

{{ui:USD}} na panelu nástrojů zapíše, co je otevřeno (každý model, federované tam, kde jste je umístili), jako jeden soubor USD.

## Export

1. Zvolte {{ui:USD}} na panelu nástrojů.
2. Vyberte {{ui:Text (.usda)}}, {{ui:Binární (.usdc)}} nebo {{ui:Balíček (.usdz)}}.
3. Soubor se stáhne. Stavový řádek říká, kolik prvků bylo zapsáno.

## Co je v souboru

| V modelu IFC | V souboru USD |
|---|---|
| Areál, budova, podlaží | Vnořené skupiny, podlaží v pořadí podle výšky |
| Každý prvek | Jeden prim pod svým podlažím a oborem (Architektura, Konstrukce, TZB, Vybavení, Pozemek, Prostory, Ostatní), s geometrií jako síť |
| Třída, GlobalId, název, typ, značka | Atributy pojmenované `ifc:class`, `ifc:globalId`, `ifc:name` a tak dále |
| Sady vlastností a množství | Jeden atribut na každou vlastnost; délky, plochy a objemy v metrech, čtverečních metrech a krychlových metrech |
| Barvy | Materiály (s průhledností) |
| Prostory | Zachovány, označeny jako pomocné, aby je vykreslovače přeskakovaly |

Geometrie leží v souřadnicích samotného souboru IFC. Rozložení se řídí písemnými konvencemi CadCraft pro USD u budov.
