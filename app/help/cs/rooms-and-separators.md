---
title: Místnosti a oddělovače místností
summary: Vyberte místnost, pojmenujte ji a očíslujte a přečtěte si její plochu, obvod a objem. Tam, kde se dvě místnosti stýkají bez stěny mezi nimi, nakreslete oddělovač místností.
keywords: místnost, místnosti, oddělovač místnosti, oddělovací čára, prostor, IfcSpace, název, číslo, plocha, obvod, objem, otevřený půdorys, rozdělení místnosti, kuchyň a obývací pokoj, neohraničené
from: d4c1d66b
---

## Co budete dělat

Pojmenujte místnosti, které vytvoří stěny, a rozdělte otevřenou místnost na dvě bez stěny.

## Kde najdete nástroje

- Rozvržení s pásem karet: {{ui:Architektura}} › **Místnost a plocha** › {{ui:Místnost}} a {{ui:Oddělovač místnosti}}.
- Klasické rozvržení: panel Kreslení › nabídka {{ui:Místnosti}}.
- Libovolný styl nabídek: příkazy se jmenují Room a Room Separator; paleta příkazů je najde.

## Postup

1. Nakreslete stěny. Každá uzavřená smyčka stěn je už místnost: BimCraft ji vytvoří, očísluje a při kreslení jí přidělí plochu.
2. Zvolte {{ui:Místnost}}. Přejeďte nad půdorysem: místnost pod ukazatelem se zvýrazní se svou plochou, obvodem a objemem.
3. Chcete-li rychle pojmenovat místnosti, zadejte nejprve v řádku {{ui:Název}} a {{ui:Číslo}}, pak klikněte do místnosti. Číslo se pro další místnost zvýší o jedna (101, 102; A-09, A-10).
4. Nebo jen klikněte na místnost: je vybrána a Vlastnosti ukazují její název, číslo, plochu, obvod, objem a štítek.
5. Chcete-li rozdělit otevřenou místnost, zvolte {{ui:Oddělovač místnosti}} a klikněte na dva body: stěna na stěnu, nebo stěna na jiný oddělovač. Pro řetěz pokračujte v klikání; Enter, Esc nebo dvojklik ukončí.

## Co oddělovač dělá

- Ohraničuje místnosti jako stěna bez tloušťky. Plochy obou místností se přesně sečtou do plochy původní místnosti.
- Místnost, která obsahuje střed původní místnosti, si ponechá název a číslo. Druhá je nová.
- Oddělovač, který končí v otevřeném prostoru a na jednom konci se ničeho nedotýká, nic nerozdělí. Prodlužte ho a rozdělí.
- Část oddělovače ležící uvnitř stěny se ignoruje, takže můžete přichytávat k osám stěn.
- Vyberte oddělovač a stiskněte Delete a dvě místnosti se opět spojí v jednu. Zpět jej vrátí.

## Když tam, kam kliknete, místnost není

Stavový řádek to oznámí: stěny tam nejsou uzavřené. Uzavřete mezeru, nebo přes ni nakreslete oddělovač. Nic se neodmítne; prostě zatím není uzavřená místnost.

## V IFC

Místnost je IfcSpace s číslem (Name), názvem (LongName) a Qto_SpaceBaseQuantities: NetFloorArea, NetPerimeter, Height, NetVolume. Objem je plocha krát výška do úrovně nad ní.

Oddělovač místnosti je IfcVirtualElement, entita, kterou IFC používá pro hranici, která není postavena. Má čáru a žádné těleso, takže jiný program v něm nečte stěnu a nic pro něj nepočítá.

## Zatím nehotovo

- Zakřivené oddělovače.
- Místnost, která sleduje šikmý strop: objem je vždy plocha krát výška úrovně.
- Vztahy hranic prostoru (IfcRelSpaceBoundary) se nezapisují ani pro stěny, ani pro oddělovače.

Viz také [Štítky místností a ploch](topic:room-and-area-tags), [Plochy a hranice ploch](topic:areas-and-area-boundaries).
