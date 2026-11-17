---
title: Vergelyk twee weergawes van 'n model
summary: Maak twee weergawes van dieselfde IFC-model oop en sien watter elemente bygevoeg, verwyder en verander is, gepas volgens hul GlobalIds, met 'n CSV van elke verandering.
keywords: vergelyk, verskil, weergawes, hersiening, veranderinge, verander, bygevoeg, verwyder, geskuif, globalid, guid, wat verander het
from: cfca6971
---

## Wat jy sal doen

Sien wat verander het tussen die model wat jy gehad het en die een wat aan jou gestuur is: watter elemente nuut is, watter weg is, watter geskuif het of nuwe eienskapswaardes gekry het.

## Stappe

1. Maak die nuwer weergawe oop, klik dan op {{ui:Voeg 'n model by…}} en kies die ouer een. Sien [Sien verskeie IFC-modelle saam](topic:several-models).
2. In {{ui:Modelle}}, maak {{ui:Vergelyk weergawes}} oop.
3. Kies die {{ui:Ouer weergawe}} en die {{ui:Nuwer weergawe}}.
4. Klik op {{ui:Vergelyk}}.
5. Klik op 'n element in 'n lys om dit te kies en sy eienskappe te sien. Klik op {{ui:Laai CSV af}} vir elke verandering, eienskap vir eienskap.
6. Klik op {{ui:Maak skoon}} om terug te gaan na die normale aansig.

## Wat jy behoort te sien

- **Bygevoegde** elemente in blou, van die nuwer weergawe.
- **Verwyderde** elemente in rooi, van die ouer weergawe.
- **Veranderde** elemente in oker, van die nuwer weergawe, elk wat sê wat verander het: eienskappe, 'n skuif met hoe ver, of 'n nuwe vorm.
- Alles wat dieselfde is, deursigtig.

## Goed om te weet

- Elemente word gepas volgens hul GlobalId. 'n Program wat elke keer as dit uitvoer nuwe GlobalIds aan elemente gee, laat elke element lyk asof dit verwyder en weer bygevoeg is.
- Posisies word vergelyk waar die modelle in die toneel staan. As een weergawe met opset geskuif is, lyn hulle eers uit met {{ui:Skuif}} in {{ui:Modelle}}.
- 'n GlobalId wat twee keer in een model gebruik word, word uit die vergelyking gelaat. [Gaan 'n model na vir algemene probleme](topic:model-checks) vind dié.

## Volgende

- [Kwessies en BCF-lêers](topic:issues-bcf)
- [Tel hoeveelhede op volgens eienskap](topic:quantity-totals)
